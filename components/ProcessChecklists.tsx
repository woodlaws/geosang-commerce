"use client";

import Link from "next/link";
import { useState } from "react";
import { brandChecklist, creatorChecklist } from "@/data/process";

function ChecklistCard({ type, title, items, completeMessage, href, linkLabel }: { type: "creator" | "brand"; title: string; items: string[]; completeMessage: string; href: string; linkLabel: string }) {
  const [checked, setChecked] = useState<Set<number>>(() => new Set());
  const complete = checked.size === items.length;
  const toggle = (index: number) => setChecked((current) => {
    const next = new Set(current);
    if (next.has(index)) next.delete(index); else next.add(index);
    return next;
  });

  return <article className={`process-checklist-card ${type}`}><div className="checklist-heading"><span>{type === "creator" ? "FOR CREATORS" : "FOR BRANDS"}</span><h3>{title}</h3><small>{checked.size} / {items.length} 확인</small></div><div className="checklist-items">{items.map((item, index) => <label key={item} className={checked.has(index) ? "checked" : ""}><input type="checkbox" checked={checked.has(index)} onChange={() => toggle(index)} /><span aria-hidden="true">✓</span><strong>{item}</strong></label>)}</div><div className={complete ? "checklist-complete show" : "checklist-complete"} aria-live="polite">{complete ? <><p>{completeMessage}</p><Link href={href}>{linkLabel} →</Link></> : <p>모든 항목을 확인하면 다음 안내가 표시됩니다.</p>}</div></article>;
}

export function ProcessChecklists() {
  return <div className="process-checklist-grid"><ChecklistCard type="creator" title="인플루언서 체크리스트" items={creatorChecklist} completeMessage="준비가 되셨다면 현재 캠페인을 확인하고 지원해 주세요." href="/campaigns" linkLabel="현재 캠페인 확인하기" /><ChecklistCard type="brand" title="브랜드 체크리스트" items={brandChecklist} completeMessage="준비가 되셨다면 상품과 공급 조건을 보내 주세요." href="/brands#inquiry" linkLabel="브랜드 입점 문의하기" /></div>;
}
