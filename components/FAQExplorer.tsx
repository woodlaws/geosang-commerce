"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { faqCategories, type FAQCategory, type FAQItem } from "@/data/faqs";

type CategoryFilter = "all" | FAQCategory;

export function FAQExplorer({ items }: { items: FAQItem[] }) {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const id = window.location.hash.replace(/^#faq-/, "");
    if (!items.some((item) => item.id === id)) return;
    // The initial hash is external browser state and must be synchronized after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenIds(new Set([id]));
    window.requestAnimationFrame(() => document.getElementById(`faq-${id}`)?.scrollIntoView({ block: "center" }));
  }, [items]);

  const filteredItems = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase("ko-KR");
    return items.filter((item) => {
      const categoryLabel = faqCategories.find((entry) => entry.id === item.category)?.label ?? "";
      const matchesCategory = category === "all" || item.category === category;
      const matchesQuery = !keyword || `${item.question} ${item.answer} ${categoryLabel}`.toLocaleLowerCase("ko-KR").includes(keyword);
      return matchesCategory && matchesQuery;
    });
  }, [category, items, query]);

  const toggleItem = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
        if (window.location.hash === `#faq-${id}`) window.history.replaceState(null, "", window.location.pathname + window.location.search);
      } else {
        next.add(id);
        window.history.replaceState(null, "", `#faq-${id}`);
      }
      return next;
    });
  };

  const expandAll = () => setOpenIds((current) => new Set([...current, ...filteredItems.map((item) => item.id)]));
  const collapseAll = () => setOpenIds(new Set());

  return (
    <div className="faq-explorer">
      <div className="faq-search-wrap">
        <label htmlFor="faq-search">FAQ 검색</label>
        <div className="faq-search-field"><span aria-hidden="true">⌕</span><input id="faq-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="궁금한 내용을 검색해 보세요" autoComplete="off" /></div>
      </div>

      <div className="faq-toolbar">
        <div className="faq-categories" role="group" aria-label="FAQ 카테고리">
          {faqCategories.map((entry) => {
            const count = entry.id === "all" ? items.length : items.filter((item) => item.category === entry.id).length;
            return <button key={entry.id} type="button" className={category === entry.id ? "active" : ""} aria-pressed={category === entry.id} onClick={() => setCategory(entry.id)}>{entry.label}<small>{count}</small></button>;
          })}
        </div>
        <div className="faq-expand-actions"><button type="button" onClick={expandAll} disabled={!filteredItems.length}>모두 펼치기</button><button type="button" onClick={collapseAll} disabled={!openIds.size}>모두 접기</button></div>
      </div>

      <p className="faq-result-count" aria-live="polite">총 <strong>{filteredItems.length}</strong>개의 질문</p>

      {filteredItems.length ? (
        <div className="faq-list faq-list-enhanced">
          {filteredItems.map((item) => {
            const isOpen = openIds.has(item.id);
            const buttonId = `faq-button-${item.id}`;
            const panelId = `faq-panel-${item.id}`;
            const categoryLabel = faqCategories.find((entry) => entry.id === item.category)?.label;
            return (
              <article className={isOpen ? "faq-item open" : "faq-item"} id={`faq-${item.id}`} key={item.id}>
                <button id={buttonId} type="button" className="faq-question" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggleItem(item.id)}>
                  <span className="faq-question-copy"><small>{categoryLabel}</small><strong>{item.question}</strong></span><span className="faq-toggle" aria-hidden="true">＋</span>
                </button>
                <div id={panelId} className="faq-answer-grid" role="region" aria-labelledby={buttonId} aria-hidden={!isOpen}><div><p>{item.answer}</p>{isOpen ? <a href={`#faq-${item.id}`} aria-label={`${item.question} 질문 링크`}>이 질문 바로가기</a> : null}</div></div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="faq-empty" role="status"><strong>검색 결과가 없습니다.</strong><p>다른 검색어를 입력하거나 상담을 신청해 주세요.</p><div><Link href="/creators#apply">인플루언서 지원</Link><Link href="/brands#inquiry">브랜드 입점 문의</Link></div></div>
      )}
    </div>
  );
}
