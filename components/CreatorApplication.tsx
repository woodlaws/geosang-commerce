"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const channelTypes = ["Instagram", "TikTok", "YouTube", "Shorts", "Naver Blog", "라이브커머스", "기타"];
const contentTags = ["식품·먹방", "건강한 라이프스타일", "뷰티", "육아·가족", "홈카페", "여행·캠핑", "패션", "생활용품", "반려동물", "교육", "기타"];
const formatTags = ["릴스", "틱톡", "유튜브 영상", "유튜브 쇼츠", "피드", "스토리", "블로그", "라이브"];
const categoryTags = ["식품", "건강식품", "뷰티", "생활용품", "육아·가족", "여행·캠핑", "반려동물", "교육"];
const quickChecks = ["현재 운영 중인 SNS 채널이 있습니다.", "특정 분야의 콘텐츠를 꾸준히 제작하고 있습니다.", "제품을 직접 체험하고 솔직하게 소개할 수 있습니다.", "광고·협찬 표시 기준을 지킬 수 있습니다.", "약속된 콘텐츠 일정과 판매 기간을 지킬 수 있습니다.", "공동구매 기간 중 팔로워 문의에 대응할 수 있습니다."];
const stepFields = [["name", "phone", "email"], ["channelType-0", "channelUrl-0", "contentFields", "groupBuyExperience"], ["confirmationAccuracy", "confirmationDisclosure", "confirmationMatching", "privacyConsent"]];

type Channel = { type: string; url: string; primary: boolean };

function focusInvalid(form: HTMLFormElement, names: string[]) {
  for (const name of names) {
    const fields = Array.from(form.querySelectorAll<HTMLElement>(`[name="${name}"]`));
    const invalid = fields.find((field) => "checkValidity" in field && !(field as HTMLInputElement).checkValidity());
    if (invalid) { invalid.focus(); return true; }
  }
  return false;
}

export function CreatorQuickCheck() {
  const [selected, setSelected] = useState<string[]>([]);
  const result = selected.length >= 5 ? "거상커머스 크리에이터 파트너로 지원해 보세요." : selected.length >= 3 ? "지원할 수 있습니다. 채널과 상품의 적합성을 함께 검토해 드립니다." : "콘텐츠 활동을 조금 더 준비한 후 지원하시면 매칭 가능성이 높아집니다.";
  return <section className="creator-fit shell section-gap"><div className="creator-fit-copy"><span className="eyebrow">QUICK CHECK</span><h2>나도 공동구매를 시작할 수 있을까요?</h2><p>지원 전 현재 활동 상태를 가볍게 확인해 보세요. 선택 결과는 저장하거나 분석 도구로 전송하지 않습니다.</p><div className={selected.length >= 3 ? "fit-result ready" : "fit-result"} role="status"><strong>{selected.length} / 6</strong>{result}</div><Link href="#apply" className="gradient-button">파트너 등록하기</Link></div><div className="creator-fit-checks">{quickChecks.map((item) => <label key={item} className={selected.includes(item) ? "checked" : ""}><input type="checkbox" checked={selected.includes(item)} onChange={() => setSelected((old) => old.includes(item) ? old.filter((x) => x !== item) : [...old, item])}/><span>✓</span><strong>{item}</strong></label>)}</div></section>;
}

export function CreatorApplication({ formEnabled }: { formEnabled: boolean }) {
  const [step, setStep] = useState(1);
  const [channels, setChannels] = useState<Channel[]>([{ type: "", url: "", primary: true }]);
  const [experience, setExperience] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const started = useRef(false);

  useEffect(() => {
    startedAt.current = Date.now();
    trackEvent("view_creator_page");
    const form = formRef.current;
    const preventEnter = (event: KeyboardEvent) => { if (event.key === "Enter" && (event.target as HTMLElement).tagName !== "TEXTAREA") event.preventDefault(); };
    form?.addEventListener("keydown", preventEnter);
    return () => { form?.removeEventListener("keydown", preventEnter); };
  }, []);

  function updateChannel(index: number, key: keyof Channel, value: string | boolean) {
    setChannels((old) => old.map((channel, i) => key === "primary" ? { ...channel, primary: i === index } : i === index ? { ...channel, [key]: value } : channel));
  }

  function validateStep(next: number) {
    const form = formRef.current;
    if (step === 2 && !form?.querySelector('input[name="contentFields"]:checked')) {
      setMessage("주요 콘텐츠 분야를 한 개 이상 선택해 주세요.");
      (form?.querySelector('input[name="contentFields"]') as HTMLElement | null)?.focus();
      return;
    }
    if (!form || focusInvalid(form, stepFields[step - 1])) { setMessage("필수 정보를 확인해 주세요."); return; }
    setMessage("");
    if (!started.current) { started.current = true; trackEvent("start_creator_application"); }
    if (step === 1) trackEvent("complete_creator_step_1");
    if (step === 2) trackEvent("complete_creator_step_2", { channel_count: channels.length });
    setStep(next);
    requestAnimationFrame(() => document.getElementById("creator-step-title")?.focus());
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formEnabled || state === "sending") return;
    const form = event.currentTarget;
    if (!form.reportValidity() || focusInvalid(form, stepFields[2])) { setMessage("최종 확인 항목을 모두 확인해 주세요."); return; }
    setState("sending"); setMessage("");
    const data = new FormData(form);
    const url = new URL(window.location.href);
    const payload = {
      name: String(data.get("name") || ""), phone: String(data.get("phone") || ""), email: String(data.get("email") || ""), channels,
      contentFields: [...data.getAll("contentFields").map(String), String(data.get("contentFieldCustom") || "")].filter(Boolean), followerCount: String(data.get("followerCount") || ""), averageViews: String(data.get("averageViews") || ""),
      audienceAge: String(data.get("audienceAge") || ""), audienceGender: String(data.get("audienceGender") || ""), audienceInterests: String(data.get("audienceInterests") || "").split(",").map((item) => item.trim()).filter(Boolean),
      contentFormats: data.getAll("contentFormats").map(String), groupBuyExperience: experience, recentCampaignProduct: String(data.get("recentCampaignProduct") || ""),
      recentCampaignChannel: String(data.get("recentCampaignChannel") || ""), recentCampaignUrl: String(data.get("recentCampaignUrl") || ""), preferredCategories: data.getAll("preferredCategories").map(String),
      message: String(data.get("message") || ""), privacyConsent: data.has("privacyConsent"), confirmations: ["채널 정보 정확성", "광고·협찬 표시 준수", "매칭 미확정 확인"],
      sourcePage: `${url.pathname}${url.search}`, referrer: document.referrer, utmSource: url.searchParams.get("utm_source") || "", utmMedium: url.searchParams.get("utm_medium") || "", utmCampaign: url.searchParams.get("utm_campaign") || "",
      userAgent: navigator.userAgent, formStartedAt: startedAt.current, website: String(data.get("website") || ""),
    };
    try {
      const response = await fetch("/api/creator-applications", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error(response.status === 409 ? "DUPLICATE" : "SUBMIT_FAILED");
      form.reset(); setChannels([{ type: "", url: "", primary: true }]); setExperience(""); setState("success");
      trackEvent("submit_creator_application", { channel_count: channels.length });
      window.dispatchEvent(new Event("creator-application-complete"));
      requestAnimationFrame(() => document.getElementById("creator-success-title")?.focus());
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error && error.message === "DUPLICATE" ? "이미 접수된 정보입니다. 변경이 필요하면 공식 문의 채널로 연락해 주세요." : "접수 과정에서 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      trackEvent("creator_application_error", { error_type: error instanceof Error && error.message === "DUPLICATE" ? "duplicate" : "submit" });
    }
  }

  if (state === "success") return <section id="apply" className="creator-success shell section-gap" aria-live="polite"><div><span>APPLICATION COMPLETE</span><h2 id="creator-success-title" tabIndex={-1}>파트너 등록이 완료되었습니다</h2><p>등록해주신 채널과 콘텐츠 성향을 검토한 후 적합한 공동구매 상품이 있을 때 개별적으로 연락드리겠습니다.</p><div className="creator-success-actions"><Link href="/process#creator-process" className="outline-button">공동구매 진행 방법 보기</Link><a href="https://www.instagram.com/geosang.bruce/" target="_blank" rel="noopener noreferrer" className="outline-button">Instagram에서 확인하기 ↗</a></div></div></section>;

  return <section id="apply" className="creator-apply section-gap"><div className="shell creator-apply-inner"><div className="creator-form-intro"><span className="eyebrow">PARTNER REGISTRATION</span><h2>거상커머스 크리에이터 파트너 등록</h2><p>좋은 제품을 내 콘텐츠로 소개하고, 영향력을 판매 수익으로 연결해 보세요. 등록 내용을 바탕으로 채널과 상품의 적합성을 검토합니다.</p><ul><li>팔로워 수만으로 선정하지 않습니다.</li><li>공동구매 경험이 없어도 등록할 수 있습니다.</li><li>등록 즉시 공동구매 진행이 확정되는 것은 아닙니다.</li></ul></div><form ref={formRef} className="creator-form creator-form-three" aria-labelledby="creator-step-title" method="post" onSubmit={submit} noValidate>
    <input className="hp-field" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <div className="creator-step-nav" aria-label="신청 단계">{["기본정보", "채널정보", "관심 분야"].map((label, i) => <span key={label} className={step === i + 1 ? "active" : step > i + 1 ? "done" : ""}><b>{i + 1}</b>{label}</span>)}</div>
    <div className="creator-step-head"><div><span>STEP {step}</span><h3 id="creator-step-title" tabIndex={-1}>{step === 1 ? "기본정보" : step === 2 ? "채널정보" : "관심 분야와 최종 확인"}</h3></div><strong>{step} / 3</strong></div><div className="step-progress" aria-hidden="true"><i style={{ width: `${step * 33.333}%` }} /></div>

    <div className={step === 1 ? "creator-step" : "creator-step hidden"} aria-hidden={step !== 1}><div className="form-grid"><label><span>이름 <b>*</b></span><input name="name" autoComplete="name" required maxLength={60} placeholder="이름 입력" /></label><label><span>연락처 <b>*</b></span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="[0-9+()\-\s]{7,20}" placeholder="010-0000-0000" /></label><label className="wide-field"><span>이메일 <b>*</b></span><input name="email" type="email" inputMode="email" autoComplete="email" required maxLength={120} placeholder="name@example.com" /></label></div><button type="button" className="gradient-button submit-button" onClick={() => validateStep(2)}>다음 단계</button></div>

    <div className={step === 2 ? "creator-step" : "creator-step hidden"} aria-hidden={step !== 2}>
      <fieldset className="channel-builder"><legend>활동 채널 <b>*</b> <small>최대 3개</small></legend>{channels.map((channel, index) => <div className="channel-row" key={index}><label><span>채널 종류</span><select name={`channelType-${index}`} value={channel.type} required={index === 0} onChange={(e) => updateChannel(index, "type", e.target.value)}><option value="">선택</option>{channelTypes.map((item) => <option key={item}>{item}</option>)}</select></label><label><span>채널 URL</span><input name={`channelUrl-${index}`} type="url" inputMode="url" value={channel.url} required={index === 0} maxLength={300} onChange={(e) => updateChannel(index, "url", e.target.value)} placeholder="https://" /></label><label className="primary-channel"><input type="radio" name="primaryChannel" checked={channel.primary} onChange={() => updateChannel(index, "primary", true)} /><span>대표 채널</span></label>{channels.length > 1 && <button type="button" aria-label={`${index + 1}번째 채널 삭제`} onClick={() => setChannels((old) => { const filtered = old.filter((_, i) => i !== index); return filtered.some((item) => item.primary) ? filtered : filtered.map((item, i) => ({ ...item, primary: i === 0 })); })}>삭제</button>}</div>)}</fieldset>
      {channels.length < 3 && <button className="add-channel" type="button" onClick={() => setChannels((old) => [...old, { type: "", url: "", primary: false }])}>＋ 채널 추가</button>}
      <fieldset className="tag-fieldset"><legend>주요 콘텐츠 분야 <b>*</b></legend><div>{contentTags.map((item) => <label key={item}><input type="checkbox" name="contentFields" value={item}/><span>{item}</span></label>)}</div></fieldset>
      <label className="custom-content-field"><span>직접 입력</span><input name="contentFieldCustom" placeholder="선택지에 없는 분야를 입력해 주세요." /></label>
      <fieldset className="tag-fieldset"><legend>콘텐츠 제작 형식</legend><div>{formatTags.map((item) => <label key={item}><input type="checkbox" name="contentFormats" value={item}/><span>{item}</span></label>)}</div></fieldset>
      <div className="form-grid"><label><span>팔로워 수</span><input name="followerCount" inputMode="numeric" maxLength={30} placeholder="예: 5,000" /></label><label><span>최근 평균 조회수</span><input name="averageViews" inputMode="numeric" maxLength={30} placeholder="예: 2,000" /></label><label><span>공동구매 경험 <b>*</b></span><select name="groupBuyExperience" value={experience} required onChange={(e) => setExperience(e.target.value)}><option value="">선택해 주세요</option><option>경험 있음</option><option>경험 없음</option><option>현재 진행 중</option></select></label><label><span>주요 연령대</span><select name="audienceAge" defaultValue=""><option value="">선택 안 함</option><option>10대</option><option>20대</option><option>30대</option><option>40대</option><option>50대 이상</option><option>다양함</option></select></label><label><span>주요 성별</span><select name="audienceGender" defaultValue=""><option value="">선택 안 함</option><option>여성 중심</option><option>남성 중심</option><option>비슷함</option></select></label><label><span>팔로워 주요 관심사</span><input name="audienceInterests" placeholder="예: 홈카페, 여행" /></label></div>
      {(experience === "경험 있음" || experience === "현재 진행 중") && <div className="experience-details"><strong>최근 공동구매 정보 <small>선택 입력</small></strong><div className="form-grid"><label><span>최근 진행 상품</span><input name="recentCampaignProduct" maxLength={120}/></label><label><span>진행 채널</span><input name="recentCampaignChannel" maxLength={80}/></label><label className="wide-field"><span>참고 링크</span><input name="recentCampaignUrl" type="url" inputMode="url" maxLength={300} placeholder="https://" /></label></div></div>}
      <div className="creator-form-actions"><button type="button" className="outline-button" onClick={() => { setStep(1); setMessage(""); }}>이전 단계</button><button type="button" className="gradient-button" onClick={() => validateStep(3)}>다음 단계</button></div>
    </div>

    <div className={step === 3 ? "creator-step" : "creator-step hidden"} aria-hidden={step !== 3}>
      <fieldset className="tag-fieldset"><legend>제안받고 싶은 상품 분야</legend><div>{categoryTags.map((item) => <label key={item}><input type="checkbox" name="preferredCategories" value={item}/><span>{item}</span></label>)}</div></fieldset>
      <label><span>추가 메시지</span><textarea name="message" rows={5} maxLength={1500} placeholder="채널 활동이나 제안받고 싶은 상품 분야를 알려 주세요." /></label>
      <fieldset className="final-confirmations"><legend>신청 전 최종 확인</legend><label><input type="checkbox" name="confirmationAccuracy" required/><span>입력한 채널 정보가 정확합니다. <b>*</b></span></label><label><input type="checkbox" name="confirmationDisclosure" required/><span>캠페인 진행 시 광고·협찬 표시 기준을 준수하겠습니다. <b>*</b></span></label><label><input type="checkbox" name="confirmationMatching" required/><span>상품과 일정에 따라 매칭이 되지 않을 수 있음을 확인했습니다. <b>*</b></span></label><label><input type="checkbox" name="privacyConsent" required/><span>개인정보 수집 및 이용에 동의합니다. <b>*</b> <Link href="/privacy">개인정보처리방침 보기</Link><small>입력하신 정보는 캠페인 검토와 연락을 위해 사용됩니다.</small></span></label></fieldset>
      {!formEnabled && <p className="form-availability" role="status">현재 온라인 접수 시스템을 준비하고 있습니다.</p>}
      <div className="creator-form-actions"><button type="button" className="outline-button" onClick={() => { setStep(2); setMessage(""); }}>이전 단계</button><button className="gradient-button" disabled={!formEnabled || state === "sending"} type="submit">{!formEnabled ? "접수 준비 중" : state === "sending" ? "접수 중입니다" : "크리에이터 파트너 등록하기"}</button></div>
    </div>
    {message && <p className={`form-status ${state}`} role="alert">{message}</p>}
  </form></div></section>;
}
