"use client";
import { useMemo, useState } from "react";
import { campaigns, categoryFilters } from "@/data/campaigns";
import { CampaignCard } from "./CampaignCard";

export function CampaignExplorer() {
  const [filter, setFilter] = useState<(typeof categoryFilters)[number]>("전체");
  const [search, setSearch] = useState("");
  const visible = useMemo(() => campaigns.filter((item) => {
    const filterMatch = filter === "전체" || item.category === filter || item.status === filter;
    const term = search.trim().toLowerCase();
    return filterMatch && (!term || `${item.brand} ${item.name}`.toLowerCase().includes(term));
  }), [filter, search]);
  return <>
    <div className="filter-panel"><label className="search"><span>검색</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="브랜드명 또는 상품명" /></label><div className="filter-chips" aria-label="캠페인 필터">{categoryFilters.map((item) => <button type="button" key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
    {visible.length ? <div className="campaign-grid">{visible.map((item) => <CampaignCard key={item.slug} campaign={item} />)}</div> : <div className="empty-state"><strong>조건에 맞는 캠페인이 없습니다.</strong><p>다른 검색어나 필터를 선택해 주세요.</p></div>}
  </>;
}
