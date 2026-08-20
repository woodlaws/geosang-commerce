"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const fitItems = [
  "온라인에서 판매 가능한 정식 상품입니다.",
  "상품의 정상가와 온라인 판매가가 명확합니다.",
  "공동구매 전용 가격을 협의할 수 있습니다.",
  "판매 가능한 재고를 안정적으로 확보할 수 있습니다.",
  "소비자에게 직접 상품을 발송할 수 있습니다.",
  "교환·반품 및 고객문의 대응 체계가 있습니다.",
  "정확한 상품 정보와 필수 서류를 제공할 수 있습니다.",
  "인플루언서 콘텐츠 제작에 필요한 샘플과 자료를 협의할 수 있습니다.",
];

const requiredByStep: Record<number, string[]> = {
  1: ["contactName", "companyName", "phone", "email", "brandName"],
  2: ["productName", "category", "countryOfOrigin", "regularPrice", "onlinePrice", "desiredGroupBuyPrice", "availableQuantity", "domesticSalesStatus", "productFeatures", "certificationStatus"],
  3: ["shippingAvailability", "dispatchPeriod", "returnSupport", "customerServiceAvailability", "sampleAvailability", "groupBuyExperience", "privacyConsent"],
};

function formatNumber(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits ? Number(digits).toLocaleString("ko-KR") : "";
}

function trackingContext() {
  const url = new URL(window.location.href);
  return {
    sourcePage: `${url.pathname}${url.search}`,
    referrer: document.referrer,
    utmSource: url.searchParams.get("utm_source") || "",
    utmMedium: url.searchParams.get("utm_medium") || "",
    utmCampaign: url.searchParams.get("utm_campaign") || "",
    userAgent: navigator.userAgent,
  };
}

export function BrandFitCheck() {
  const [checked, setChecked] = useState<boolean[]>(() => fitItems.map(() => false));
  const [revealed, setRevealed] = useState(false);
  const count = checked.filter(Boolean).length;
  const result = count >= 7
    ? "공동구매 검토에 적합한 준비 상태입니다. 상품과 공급 조건을 제안해 주세요."
    : count >= 4
      ? "일부 조건을 보완하면 공동구매 진행을 검토할 수 있습니다. 상담을 통해 필요한 준비사항을 확인해 주세요."
      : "가격, 재고, 배송과 고객응대 체계를 먼저 준비하면 공동구매 가능성을 높일 수 있습니다.";

  return <section id="brand-fit-check" className="brand-fit-section section-gap"><div className="shell brand-fit-inner"><div><span className="eyebrow">BRAND FIT CHECK</span><h2>우리 상품도 공동구매가 가능할까요?</h2><p>현재 준비된 항목을 확인해 보세요. 이 자가진단 결과는 저장하거나 전송하지 않습니다.</p></div><div className="brand-fit-card"><div className="brand-fit-list">{fitItems.map((item, index) => <label key={item}><input type="checkbox" checked={checked[index]} onChange={() => { setChecked((items) => items.map((value, i) => i === index ? !value : value)); setRevealed(false); }} /><span>{item}</span></label>)}</div><button type="button" className="gradient-button" onClick={() => { setRevealed(true); trackEvent("brand_fit_check_completed"); }}>진단 결과 확인</button>{revealed ? <div className="brand-fit-result" role="status"><b>{count} / 8개 준비</b><p>{result}</p><Link href="#inquiry">상품 제안하기</Link></div> : null}</div></div></section>;
}

export function BrandInquiry({ formEnabled }: { formEnabled: boolean }) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const started = useRef(false);

  useEffect(() => { trackEvent("view_brand_page"); }, []);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    startedAt.current = Date.now();
    trackEvent("start_brand_inquiry");
  }

  function validateStep(current: number) {
    const form = formRef.current;
    if (!form) return false;
    for (const name of requiredByStep[current]) {
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
      if (field && !field.checkValidity()) { field.reportValidity(); field.focus(); return false; }
    }
    return true;
  }

  function nextStep() {
    if (!validateStep(step)) return;
    trackEvent(step === 1 ? "complete_brand_step_1" : "complete_brand_step_2");
    setStep((current) => Math.min(3, current + 1));
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || !validateStep(3)) return;
    if (!formEnabled) { setStatus("error"); setMessage("현재 온라인 접수 시스템을 준비하고 있습니다."); return; }
    setStatus("sending"); setMessage("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/brand-inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, privacyConsent: formData.has("privacyConsent"), formStartedAt: startedAt.current, ...trackingContext() }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(typeof data.error === "string" ? data.error : "SUBMIT_FAILED");
      setStatus("success");
      trackEvent("submit_brand_inquiry");
      window.dispatchEvent(new Event("brand-inquiry-complete"));
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error && error.message === "DUPLICATE_INQUIRY" ? "같은 이메일과 상품으로 이미 접수된 제안이 있습니다." : "접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      trackEvent("brand_inquiry_error", { error_type: error instanceof Error ? error.message.slice(0, 40) : "unknown" });
    }
  }

  if (status === "success") return <section id="inquiry" className="brand-inquiry-section section-gap"><div className="shell brand-success"><span>✓</span><h2>공동구매 상품 제안이 접수되었습니다</h2><p>보내주신 상품과 공급 조건을 확인한 뒤 공동구매 검토가 가능한 경우 담당자가 개별적으로 연락드립니다.</p><div><Link href="/process#brand-process">공동구매 진행 절차 보기</Link><Link href="/campaigns">현재 캠페인 보기</Link><Link href="/about">회사 소개 보기</Link></div></div></section>;

  const selectOptions = (items: string[]) => <>{items.map((item) => <option key={item}>{item}</option>)}</>;
  return <section id="inquiry" className="brand-inquiry-section section-gap"><div className="shell brand-inquiry-layout"><div className="brand-inquiry-intro"><span className="eyebrow">BRAND INQUIRY</span><h2>공동구매 상품 제안</h2><p>상품과 공급 조건을 남겨주시면 공동구매 적합성과 인플루언서 매칭 가능성을 검토합니다.</p><small>정확한 공급가는 초기 폼에서 요구하지 않습니다. 공급 조건은 상담 시 별도로 전달할 수 있습니다.</small></div><form ref={formRef} className="brand-inquiry-form" method="post" onSubmit={submit} onFocusCapture={markStarted} noValidate>
    <div className="brand-step-nav" aria-label="상품 제안 단계">{["담당자 정보", "상품 정보", "운영 조건"].map((label, index) => <span key={label} className={step === index + 1 ? "active" : step > index + 1 ? "done" : ""}><b>{index + 1}</b>{label}</span>)}</div>
    {!formEnabled ? <p className="form-availability" role="status">현재 온라인 접수 시스템을 준비하고 있습니다. 아래 정보를 미리 작성해 확인할 수 있습니다.</p> : null}
    <input className="brand-honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <fieldset className={step === 1 ? "brand-form-step active" : "brand-form-step"}><legend>1단계 · 담당자 정보</legend><div className="brand-form-grid">
      <label><span>담당자 이름 <b>*</b></span><input name="contactName" autoComplete="name" maxLength={60} required /></label>
      <label><span>회사명 <b>*</b></span><input name="companyName" autoComplete="organization" maxLength={100} required /></label>
      <label><span>직책</span><input name="position" autoComplete="organization-title" maxLength={60} /></label>
      <label><span>연락처 <b>*</b></span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+()\-\s]{7,20}" required /></label>
      <label><span>이메일 <b>*</b></span><input name="email" type="email" inputMode="email" autoComplete="email" maxLength={120} required /></label>
      <label><span>회사 홈페이지</span><input name="companyUrl" type="url" inputMode="url" placeholder="https://" maxLength={300} /></label>
      <label className="wide"><span>브랜드명 <b>*</b></span><input name="brandName" maxLength={100} required /></label>
    </div></fieldset>
    <fieldset className={step === 2 ? "brand-form-step active" : "brand-form-step"}><legend>2단계 · 상품 정보</legend><div className="brand-form-grid">
      <label><span>상품명 <b>*</b></span><input name="productName" maxLength={140} required /></label>
      <label><span>상품 카테고리 <b>*</b></span><select name="category" defaultValue="" required><option value="" disabled>선택해 주세요</option>{selectOptions(["식품", "건강식품", "뷰티", "생활용품", "육아·가족", "반려동물", "여행·캠핑", "홈카페", "패션·잡화", "기타"])}</select></label>
      <label><span>상품 상세페이지 URL</span><input name="productUrl" type="url" inputMode="url" placeholder="https://" maxLength={500} /></label>
      <label><span>추가 자료 공유 링크</span><input name="materialUrl" type="url" inputMode="url" placeholder="https://" maxLength={500} /><small>로그인 없이 담당자가 확인할 수 있는 공유 링크를 입력해 주세요.</small></label>
      <label><span>제조국 또는 원산지 <b>*</b></span><input name="countryOfOrigin" maxLength={80} required /></label>
      {[["정상 판매가", "regularPrice"], ["현재 온라인 판매가", "onlinePrice"], ["희망 공동구매 판매가", "desiredGroupBuyPrice"], ["공급 가능 수량", "availableQuantity"]].map(([label, name]) => <label key={name}><span>{label} <b>*</b></span><input name={name} type="text" inputMode="numeric" onInput={(event) => { event.currentTarget.value = formatNumber(event.currentTarget.value); }} required /></label>)}
      <label><span>상품 유통기한 또는 소비기한</span><input name="expirationInfo" maxLength={120} /></label>
      <label><span>국내 판매 상태 <b>*</b></span><select name="domesticSalesStatus" defaultValue="" required><option value="" disabled>선택해 주세요</option>{selectOptions(["현재 판매 중", "출시 준비 중", "수입·유통 준비 중", "기타"])}</select></label>
      <label className="wide"><span>주요 상품 특징 <b>*</b></span><textarea name="productFeatures" rows={4} maxLength={1200} required /></label>
      <label className="wide"><span>필수 인증·신고 여부 <b>*</b></span><textarea name="certificationStatus" rows={3} maxLength={800} placeholder="해당 인증·신고 또는 확인 중인 내용을 입력해 주세요." required /></label>
    </div></fieldset>
    <fieldset className={step === 3 ? "brand-form-step active" : "brand-form-step"}><legend>3단계 · 운영 조건</legend><div className="brand-form-grid">
      <label><span>직접 배송 가능 여부 <b>*</b></span><select name="shippingAvailability" defaultValue="" required><option value="" disabled>선택해 주세요</option>{selectOptions(["가능", "위탁배송 협의 필요", "확인 필요"])}</select></label>
      <label><span>평균 출고 가능 기간 <b>*</b></span><input name="dispatchPeriod" maxLength={80} placeholder="예: 주문 후 1~2영업일" required /></label>
      <label><span>교환·반품 대응 가능 여부 <b>*</b></span><select name="returnSupport" defaultValue="" required><option value="" disabled>선택해 주세요</option>{selectOptions(["가능", "별도 협의 필요", "불가"])}</select></label>
      <label><span>고객센터 운영 여부 <b>*</b></span><select name="customerServiceAvailability" defaultValue="" required><option value="" disabled>선택해 주세요</option>{selectOptions(["운영 중", "담당자 직접 대응", "별도 협의 필요"])}</select></label>
      <label><span>샘플 제공 협의 가능 여부 <b>*</b></span><select name="sampleAvailability" defaultValue="" required><option value="" disabled>선택해 주세요</option>{selectOptions(["가능", "수량 협의 필요", "불가"])}</select></label>
      <label><span>공동구매 경험 <b>*</b></span><select name="groupBuyExperience" defaultValue="" required><option value="" disabled>선택해 주세요</option>{selectOptions(["경험 있음", "경험 없음", "현재 진행 중"])}</select></label>
      <label><span>희망 캠페인 일정</span><input name="desiredSchedule" maxLength={120} placeholder="예: 10월 이후" /></label>
      <label><span>원하는 인플루언서 분야</span><input name="preferredCreatorFields" maxLength={300} placeholder="예: 홈카페, 육아·가족" /></label>
      <label><span>콘텐츠 제작 지원 필요 여부</span><select name="contentSupportNeeded" defaultValue=""><option value="">선택해 주세요</option>{selectOptions(["필요", "일부 필요", "브랜드 제공 가능", "상담 후 결정"])}</select></label>
      <label><span>공급 조건 전달 방식</span><select name="supplyConditionNote" defaultValue="상담 시 별도 전달"><option>상담 시 별도 전달</option><option>자료 링크에 포함</option></select></label>
      <label className="wide"><span>추가 문의</span><textarea name="message" rows={5} maxLength={1500} /></label>
      <label className="brand-consent wide"><input type="checkbox" name="privacyConsent" required /><span>개인정보 수집 및 이용에 동의합니다. <b>*</b> <Link href="/privacy">개인정보처리방침 보기</Link></span></label>
    </div></fieldset>
    <div className="brand-form-actions">{step > 1 ? <button type="button" className="outline-button" onClick={() => setStep((current) => current - 1)}>이전</button> : <span />}{step < 3 ? <button type="button" className="gradient-button" onClick={nextStep}>다음 단계</button> : <button type="submit" className="gradient-button" disabled={!formEnabled || status === "sending"}>{!formEnabled ? "접수 준비 중" : status === "sending" ? "제안서를 접수하고 있습니다" : "공동구매 상품 제안하기"}</button>}</div>
    {message ? <p className={`form-status ${status}`} role="status">{message}</p> : null}
  </form></div></section>;
}
