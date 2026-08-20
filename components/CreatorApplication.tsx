"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { campaigns } from "@/data/campaigns";
import { trackEvent } from "@/lib/analytics";
import { getFormEndpoint } from "@/lib/form-endpoints";
import { submitForm } from "@/lib/submit-form";

const channels = ["Instagram", "TikTok", "YouTube", "Shorts", "Naver Blog", "라이브커머스", "기타"];
const checks = ["현재 운영 중인 콘텐츠 채널이 있습니다.", "최근에도 콘텐츠를 꾸준히 발행하고 있습니다.", "상품을 직접 이해하고 소개할 수 있습니다.", "광고·협찬 표시 기준을 준수할 수 있습니다.", "약속된 콘텐츠와 판매 일정을 지킬 수 있습니다."];
const firstStepFields = ["name", "phone", "email", "primaryChannel", "channelUrl", "contentField"];

function focusInvalid(form: HTMLFormElement, names: string[]) {
  const invalid = names.map((name) => form.elements.namedItem(name)).find((field) => field instanceof HTMLElement && "checkValidity" in field && !(field as HTMLInputElement).checkValidity()) as HTMLElement | undefined;
  invalid?.focus();
  return Boolean(invalid);
}

export function CreatorApplication() {
  const [score, setScore] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [campaign, setCampaign] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("campaign") || "";
    const form = formRef.current;
    const preventEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter" && (event.target as HTMLElement).tagName !== "TEXTAREA") event.preventDefault();
    };
    form?.addEventListener("keydown", preventEnter);
    const timer = window.setTimeout(() => {
      if (campaigns.some((item) => item.slug === slug)) setCampaign(slug);
    }, 0);
    return () => {
      window.clearTimeout(timer);
      form?.removeEventListener("keydown", preventEnter);
    };
  }, []);

  function nextStep() {
    const form = formRef.current;
    if (!form) return;
    if (focusInvalid(form, firstStepFields)) {
      setMessage("필수 정보를 확인해 주세요.");
      return;
    }
    setMessage("");
    if (!started.current) {
      started.current = true;
      trackEvent("start_creator_form", { form_type: "creator" });
    }
    setStep(2);
    requestAnimationFrame(() => document.getElementById("creator-step-title")?.focus());
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      focusInvalid(form, ["groupBuyExperience", "privacyConsent"]);
      setMessage("필수 정보를 확인해 주세요.");
      return;
    }
    const endpoint = getFormEndpoint("creator");
    if (!endpoint) {
      setState("error");
      setMessage("온라인 접수 연결 정보가 설정되지 않았습니다. 잠시 후 다시 시도해 주세요.");
      return;
    }
    setState("sending");
    setMessage("");
    const data = new FormData(form);
    const url = new URL(window.location.href);
    const selected = campaigns.find((item) => item.slug === campaign);
    const payload = {
      "접수일시": new Date().toISOString(), "접수유형": "인플루언서",
      "이름": String(data.get("name") || ""), "연락처": String(data.get("phone") || ""), "이메일": String(data.get("email") || ""),
      "주 활동 채널": String(data.get("primaryChannel") || ""), "전체 활동 채널": data.getAll("channels").map(String),
      "대표 채널 URL": String(data.get("channelUrl") || ""), "추가 채널 URL": String(data.get("additionalChannelUrl") || ""),
      "대표 콘텐츠 URL": String(data.get("contentUrl") || ""), "주요 콘텐츠 분야": String(data.get("contentField") || ""),
      "팔로워 수": String(data.get("followers") || ""), "최근 평균 조회수": String(data.get("averageViews") || ""),
      "공동구매 경험": String(data.get("groupBuyExperience") || ""), "관심 상품": selected?.name || "선택 안 함",
      "제안받고 싶은 분야": String(data.get("preferredCategories") || ""), "팔로워 주요 연령대": String(data.get("audienceAge") || ""),
      "팔로워 주요 성별": String(data.get("audienceGender") || ""), "활동 지역": String(data.get("region") || ""),
      "추가 메시지": String(data.get("message") || ""), "개인정보 동의": data.has("privacyConsent"),
      "유입 페이지": `${url.pathname}${url.search}`, "상품 slug": campaign,
      "UTM source": url.searchParams.get("utm_source") || "", "UTM medium": url.searchParams.get("utm_medium") || "", "UTM campaign": url.searchParams.get("utm_campaign") || "",
      "referrer": document.referrer, "User Agent": navigator.userAgent,
    };
    try {
      await submitForm(endpoint, payload);
      setState("success");
      trackEvent("submit_creator_form", { form_type: "creator", campaign_slug: campaign || "none" });
      requestAnimationFrame(() => document.getElementById("creator-success-title")?.focus());
    } catch (error) {
      setState("error");
      setMessage(error instanceof DOMException && error.name === "AbortError" ? "응답 시간이 초과되었습니다. 잠시 후 다시 시도해 주세요." : "전송 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      trackEvent("form_submit_error", { form_type: "creator", error_type: error instanceof DOMException && error.name === "AbortError" ? "timeout" : "network" });
    }
  }

  if (state === "success") return <section id="apply" className="creator-success shell section-gap" aria-live="polite"><div><span>APPLICATION COMPLETE</span><h2 id="creator-success-title" tabIndex={-1}>지원해 주셔서 감사합니다</h2><p>등록해 주신 채널과 관심 상품을 확인한 뒤 적합한 캠페인이 있을 경우 개별적으로 연락드립니다.</p><ol><li><b>01</b> 신청 정보 확인</li><li><b>02</b> 채널과 상품 적합성 검토</li><li><b>03</b> 진행 가능한 캠페인 개별 안내</li></ol><div><Link href="/campaigns" className="gradient-button">다른 캠페인 살펴보기</Link><Link href="/" className="outline-button">홈으로 돌아가기</Link></div></div></section>;

  return <>
    <section className="creator-fit shell section-gap"><div className="creator-fit-copy"><span className="eyebrow">QUICK CHECK</span><h2>나도 지원할 수 있을까요?</h2><p>아래 항목은 지원 전 스스로 확인하는 안내용 체크입니다. 결과는 저장되지 않으며 지원을 제한하지 않습니다.</p><div className={score.length >= 3 ? "fit-result ready" : "fit-result"} role="status">{score.length >= 3 ? "지원 가능합니다. 채널과 잘 맞는 상품이 있는지 검토해 드립니다." : "지금 지원할 수도 있지만, 채널 정보와 활동 계획을 구체적으로 입력해 주세요."}</div></div><div className="creator-fit-checks">{checks.map((item) => <label key={item} className={score.includes(item) ? "checked" : ""}><input type="checkbox" checked={score.includes(item)} onChange={() => setScore((old) => old.includes(item) ? old.filter((x) => x !== item) : [...old, item])}/><span>✓</span><strong>{item}</strong></label>)}</div></section>
    <section id="apply" className="creator-apply section-gap"><div className="shell creator-apply-inner"><div className="creator-form-intro"><span className="eyebrow">APPLY NOW</span><h2>인플루언서 지원</h2><p>기본 채널 정보와 공동구매 관심 분야를 알려주세요. 팔로워 규모보다 상품과 콘텐츠의 적합성을 함께 확인합니다.</p><ul><li>작성 내용은 캠페인 검토에만 사용합니다.</li><li>지원 즉시 캠페인 진행이 확정되는 것은 아닙니다.</li><li>적합한 상품이 있을 경우 개별적으로 안내합니다.</li></ul></div><form ref={formRef} className="creator-form" aria-labelledby="creator-step-title" method="post" onSubmit={submit} noValidate>
      <div className="creator-step-head"><div><span>STEP {step}</span><h3 id="creator-step-title" tabIndex={-1}>{step === 1 ? "기본 채널 정보" : "공동구매 정보"}</h3></div><strong>{step} / 2</strong></div>
      <div className="step-progress" aria-hidden="true"><i style={{ width: `${step * 50}%` }} /></div>
      <div className={step === 1 ? "creator-step" : "creator-step hidden"} aria-hidden={step !== 1}>
        <div className="form-grid"><label><span>이름 <b>*</b></span><input name="name" autoComplete="name" required placeholder="이름 입력" /></label><label><span>연락처 <b>*</b></span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="[0-9+()\-\s]{7,20}" placeholder="010-0000-0000" /></label><label><span>이메일 <b>*</b></span><input name="email" type="email" inputMode="email" autoComplete="email" required placeholder="name@example.com" /></label><label><span>주 활동 채널 <b>*</b></span><select name="primaryChannel" required defaultValue=""><option value="" disabled>선택해 주세요</option>{channels.map((item) => <option key={item}>{item}</option>)}</select></label><label className="wide-field"><span>대표 채널 URL <b>*</b></span><input name="channelUrl" type="url" inputMode="url" required placeholder="https://" /></label><label className="wide-field"><span>주요 콘텐츠 분야 <b>*</b></span><input name="contentField" required placeholder="예: 홈카페, 육아, 여행" /></label></div>
        <fieldset className="choice-group"><legend>함께 운영 중인 채널</legend><div>{channels.map((item) => <label key={item}><input type="checkbox" name="channels" value={item}/><span>{item}</span></label>)}</div></fieldset><button type="button" className="gradient-button submit-button" onClick={nextStep}>다음 단계</button>
      </div>
      <div className={step === 2 ? "creator-step" : "creator-step hidden"} aria-hidden={step !== 2}>
        <div className="form-grid"><label><span>팔로워 수</span><input name="followers" type="number" min="0" inputMode="numeric" placeholder="숫자 입력" /></label><label><span>최근 평균 조회수</span><input name="averageViews" type="number" min="0" inputMode="numeric" placeholder="숫자 입력" /></label><label><span>공동구매 경험 <b>*</b></span><select name="groupBuyExperience" required defaultValue=""><option value="" disabled>선택해 주세요</option><option>경험 있음</option><option>경험 없음</option><option>현재 진행 중</option></select></label><label><span>관심 상품</span><select name="campaign" value={campaign} onChange={(e) => setCampaign(e.target.value)}><option value="">선택 안 함</option>{campaigns.filter((item) => item.status !== "종료").map((item) => <option value={item.slug} key={item.slug}>{item.name}</option>)}</select></label><label><span>제안받고 싶은 분야</span><input name="preferredCategories" placeholder="예: 식품, 생활용품" /></label><label><span>활동·주요 고객 지역</span><input name="region" placeholder="예: 서울·경기, 전국" /></label><label><span>팔로워 주요 연령대</span><select name="audienceAge" defaultValue=""><option value="">모름 / 확인 어려움</option><option>10대</option><option>20대</option><option>30대</option><option>40대</option><option>50대 이상</option><option>다양함</option></select></label><label><span>팔로워 주요 성별</span><select name="audienceGender" defaultValue=""><option value="">모름 / 확인 어려움</option><option>여성 중심</option><option>남성 중심</option><option>비슷함</option></select></label><label className="wide-field"><span>추가 채널 URL</span><input name="additionalChannelUrl" type="url" inputMode="url" placeholder="https://" /></label><label className="wide-field"><span>대표 콘텐츠 URL</span><input name="contentUrl" type="url" inputMode="url" placeholder="https://" /></label></div><label><span>추가 메시지</span><textarea name="message" rows={4} placeholder="활동 계획이나 함께 전달할 내용을 입력해 주세요." /></label><label className="consent"><input type="checkbox" name="privacyConsent" required/><span>개인정보 수집 및 이용에 동의합니다. <b>*</b> <Link href="/privacy">개인정보처리방침 보기</Link><small>입력하신 정보는 캠페인 검토와 연락을 위해 사용됩니다.</small></span></label><div className="creator-form-actions"><button type="button" className="outline-button" onClick={() => { setStep(1); setMessage(""); }}>이전 단계</button><button className="gradient-button" disabled={state === "sending"} type="submit">{state === "sending" ? "지원서 전송 중..." : "인플루언서 지원하기"}</button></div>
      </div>
      {message && <p className={`form-status ${state}`} role="alert">{message}</p>}
    </form></div></section>
  </>;
}
