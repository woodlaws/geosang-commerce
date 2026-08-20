"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { campaigns } from "@/data/campaigns";
import { trackEvent } from "@/lib/analytics";
import { FormKind, getFormEndpoint } from "@/lib/form-endpoints";
import { FormPayload, FormState, submitForm } from "@/lib/submit-form";

const channels = ["인스타그램", "틱톡", "유튜브", "유튜브 쇼츠", "네이버 블로그", "기타"];
const experienceOptions = ["경험 있음", "경험 없음", "현재 진행 중"];
const shippingOptions = ["직접 배송 가능", "위탁 배송 협의 필요", "확인 필요"];
const phonePattern = "[0-9+()\\-\\s]{7,20}";

function readForm(form: HTMLFormElement): FormPayload {
  const values: FormPayload = {};
  const formData = new FormData(form);
  for (const key of new Set(formData.keys())) {
    const entries = formData.getAll(key).map(String);
    values[key] = entries.length > 1 ? entries : entries[0] || "";
  }
  values.privacyConsent = formData.has("privacyConsent");
  return values;
}

function trackingContext() {
  const url = new URL(window.location.href);
  return {
    submittedAt: new Date().toISOString(),
    sourcePage: `${url.pathname}${url.search}`,
    utmSource: url.searchParams.get("utm_source") || "",
    utmMedium: url.searchParams.get("utm_medium") || "",
    utmCampaign: url.searchParams.get("utm_campaign") || "",
    userAgent: navigator.userAgent,
  };
}

export function InquiryForm({ kind }: { kind: FormKind }) {
  const endpoint = getFormEndpoint(kind);
  const ready = Boolean(endpoint);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const started = useRef(false);

  useEffect(() => {
    if (kind !== "creator") return;
    const campaign = new URLSearchParams(window.location.search).get("campaign") || "";
    const timer = window.setTimeout(() => {
      if (campaigns.some((item) => item.slug === campaign)) setSelectedCampaign(campaign);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [kind]);

  function handleStart() {
    if (started.current) return;
    started.current = true;
    trackEvent(kind === "creator" ? "start_creator_form" : "start_brand_form", { form_type: kind });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    if (!ready) {
      setState("error");
      setMessage("현재 온라인 접수 시스템을 준비하고 있습니다.");
      return;
    }
    if (kind === "creator" && !form.querySelector('input[name="channels"]:checked')) {
      setState("error");
      setMessage("주 활동 채널을 한 개 이상 선택해 주세요.");
      return;
    }
    if (!form.reportValidity()) return;
    setState("sending");
    setMessage("");
    try {
      const payload: FormPayload = {
        ...readForm(form),
        ...trackingContext(),
        submissionType: kind === "creator" ? "인플루언서" : "브랜드",
      };
      const result = await submitForm(endpoint, payload);
      setState(result.state);
      setMessage(result.message);
      trackEvent(kind === "creator" ? "submit_creator_form" : "submit_brand_form", { form_type: kind });
      form.reset();
      const campaign = kind === "creator" ? new URLSearchParams(window.location.search).get("campaign") || "" : "";
      setSelectedCampaign(campaigns.some((item) => item.slug === campaign) ? campaign : "");
      started.current = false;
    } catch (error) {
      setState("error");
      setMessage(error instanceof DOMException && error.name === "AbortError" ? "응답 시간이 초과되었습니다. 잠시 후 다시 시도해 주세요." : "전송 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      trackEvent("form_submit_error", { form_type: kind, error_type: error instanceof DOMException && error.name === "AbortError" ? "timeout" : "network" });
    }
  }

  return <form className="inquiry-form" method="post" onSubmit={handleSubmit} onFocusCapture={handleStart} noValidate>
    {!ready && <p className="form-availability" role="status">현재 온라인 접수 시스템을 준비하고 있습니다.</p>}
    {kind === "creator" ? <>
      <div className="form-grid">
        <label><span>이름 <b>*</b></span><input name="name" autoComplete="name" required placeholder="이름 입력" /></label>
        <label><span>연락처 <b>*</b></span><input name="phone" type="tel" autoComplete="tel" pattern={phonePattern} required placeholder="010-0000-0000" /></label>
        <label><span>이메일 <b>*</b></span><input name="email" type="email" autoComplete="email" required placeholder="name@example.com" /></label>
        <label><span>채널 URL <b>*</b></span><input name="channelUrl" type="url" inputMode="url" required placeholder="https://" /></label>
      </div>
      <fieldset className="choice-group"><legend>주 활동 채널 <b>*</b></legend><div>{channels.map((channel)=><label key={channel}><input type="checkbox" name="channels" value={channel}/><span>{channel}</span></label>)}</div></fieldset>
      <div className="form-grid">
        <label><span>주요 콘텐츠 분야 <b>*</b></span><input name="contentField" required placeholder="예: 홈카페, 육아" /></label>
        <label><span>팔로워 수</span><input name="followers" type="number" min="0" inputMode="numeric" placeholder="숫자 입력" /></label>
        <label><span>최근 평균 조회수</span><input name="averageViews" type="number" min="0" inputMode="numeric" placeholder="숫자 입력" /></label>
        <label><span>공동구매 경험 여부 <b>*</b></span><select name="groupBuyExperience" required defaultValue=""><option value="" disabled>선택해 주세요</option>{experienceOptions.map((option)=><option key={option}>{option}</option>)}</select></label>
        <label><span>제안받고 싶은 분야</span><input name="preferredCategories" placeholder="예: 식품, 생활용품" /></label>
        <label><span>관심 상품</span><select name="campaign" value={selectedCampaign} onChange={(event)=>{setSelectedCampaign(event.target.value); if(event.target.value) trackEvent("select_campaign",{campaign_slug:event.target.value});}}><option value="">선택해 주세요</option>{campaigns.map((item)=><option value={item.slug} key={item.slug}>{item.name}</option>)}</select></label>
      </div>
      <label><span>추가 메시지</span><textarea name="message" rows={5} placeholder="함께 전달할 내용을 입력해 주세요." /></label>
    </> : <>
      <div className="form-grid">
        <label><span>담당자 이름 <b>*</b></span><input name="name" autoComplete="name" required placeholder="담당자 이름 입력" /></label>
        <label><span>회사명 <b>*</b></span><input name="company" autoComplete="organization" required placeholder="회사명 입력" /></label>
        <label><span>연락처 <b>*</b></span><input name="phone" type="tel" autoComplete="tel" pattern={phonePattern} required placeholder="010-0000-0000" /></label>
        <label><span>이메일 <b>*</b></span><input name="email" type="email" autoComplete="email" required placeholder="name@example.com" /></label>
        <label><span>홈페이지 또는 상품 링크</span><input name="url" type="url" inputMode="url" placeholder="https://" /></label>
        <label><span>상품 카테고리 <b>*</b></span><input name="category" required placeholder="예: 식품, 뷰티" /></label>
        <label><span>정상 판매가</span><input name="regularPrice" type="number" min="0" inputMode="numeric" placeholder="숫자 입력" /></label>
        <label><span>공급 가능 수량</span><input name="availableQuantity" type="number" min="0" inputMode="numeric" placeholder="숫자 입력" /></label>
        <label><span>배송 가능 여부 <b>*</b></span><select name="shippingAvailability" required defaultValue=""><option value="" disabled>선택해 주세요</option>{shippingOptions.map((option)=><option key={option}>{option}</option>)}</select></label>
        <label><span>공동구매 경험 여부 <b>*</b></span><select name="groupBuyExperience" required defaultValue=""><option value="" disabled>선택해 주세요</option>{experienceOptions.map((option)=><option key={option}>{option}</option>)}</select></label>
      </div>
      <label><span>문의 내용</span><textarea name="message" rows={5} placeholder="상품과 공급 조건을 입력해 주세요." /></label>
    </>}
    <label className="consent"><input type="checkbox" name="privacyConsent" required /><span>개인정보 수집 및 이용에 동의합니다. <b>*</b> <Link href="/privacy">개인정보처리방침 보기</Link></span></label>
    <button className="gradient-button submit-button" disabled={!ready || state === "sending"} type="submit">{!ready ? "접수 준비 중" : state === "sending" ? "전송 중…" : kind === "creator" ? "인플루언서 지원하기" : "브랜드 상담 신청하기"}</button>
    {message && <p role="status" className={`form-status ${state}`}>{message}</p>}
  </form>;
}
