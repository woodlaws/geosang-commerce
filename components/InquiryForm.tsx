"use client";
import { FormEvent, useState } from "react";
import { FormState, submitForm } from "@/lib/submit-form";
import { campaigns } from "@/data/campaigns";

type Kind = "creator" | "brand";
const creatorFields = [
  ["name", "이름", "text", true], ["phone", "연락처", "tel", true], ["email", "이메일", "email", true], ["channel", "주 활동 채널", "text", true],
  ["channelUrl", "채널 URL", "url", true], ["content", "주요 콘텐츠 분야", "text", true], ["followers", "팔로워 수", "number", false], ["views", "최근 평균 조회수", "number", false],
  ["experience", "공동구매 경험 여부", "text", true], ["fields", "제안받고 싶은 분야", "text", false],
] as const;
const brandFields = [
  ["name", "담당자 이름", "text", true], ["company", "회사명", "text", true], ["phone", "연락처", "tel", true], ["email", "이메일", "email", true],
  ["url", "홈페이지 또는 상품 링크", "url", false], ["category", "상품 카테고리", "text", true], ["price", "정상 판매가", "number", false], ["quantity", "공급 가능 수량", "number", false],
  ["shipping", "배송 가능 여부", "text", true], ["experience", "공동구매 경험 여부", "text", false],
] as const;

export function InquiryForm({ kind }: { kind: Kind }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const fields = kind === "creator" ? creatorFields : brandFields;
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState("sending"); setMessage("");
    try {
      const values = Object.fromEntries(new FormData(form).entries());
      const endpoint = kind === "creator" ? process.env.NEXT_PUBLIC_CREATOR_FORM_ENDPOINT : process.env.NEXT_PUBLIC_BRAND_FORM_ENDPOINT;
      const result = await submitForm(endpoint, values);
      setState(result.state); setMessage(result.message);
      if (result.state === "success") form.reset();
    } catch { setState("error"); setMessage("전송 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요."); }
  }
  return <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
    <div className="form-grid">{fields.map(([name, label, type, required]) => <label key={name}><span>{label}{required && <b> *</b>}</span><input name={name} type={type} required={required} min={type === "number" ? 0 : undefined} placeholder={`${label} 입력`} /></label>)}</div>
    {kind === "creator" && <label><span>관심 상품</span><select name="campaign" defaultValue=""><option value="">선택해 주세요</option>{campaigns.map((item) => <option value={item.slug} key={item.slug}>{item.name}</option>)}</select></label>}
    <label><span>{kind === "creator" ? "추가 메시지" : "문의 내용"}</span><textarea name="message" rows={5} placeholder="함께 전달할 내용을 입력해 주세요." /></label>
    <label className="consent"><input type="checkbox" name="privacyConsent" required /><span>개인정보 수집 및 이용에 동의합니다. <b>*</b></span></label>
    <button className="gradient-button submit-button" disabled={state === "sending"} type="submit">{state === "sending" ? "전송 중…" : kind === "creator" ? "인플루언서 지원하기" : "브랜드 상담 신청하기"}</button>
    {message && <p role="status" className={`form-status ${state}`}>{message}</p>}
  </form>;
}
