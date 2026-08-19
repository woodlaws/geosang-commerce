const steps = ["인플루언서 지원", "채널 및 상품 적합성 확인", "상품 매칭과 조건 협의", "제품 체험 및 콘텐츠 제작", "공동구매 판매", "판매 마감 및 정산"];
export function ProcessTimeline() { return <ol className="process-timeline">{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><div className="process-icon" aria-hidden>{["✎", "◎", "↔", "▣", "▢", "₩"][index]}</div><strong>{step}</strong></li>)}</ol>; }
