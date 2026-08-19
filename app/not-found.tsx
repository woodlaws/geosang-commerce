import Link from "next/link";
export default function NotFound(){ return <main className="not-found"><span>404</span><h1>페이지를 찾을 수 없습니다</h1><p>주소가 변경되었거나 존재하지 않는 페이지입니다.</p><div><Link href="/" className="gradient-button">홈으로</Link><Link href="/campaigns" className="outline-button">캠페인 보기</Link></div></main> }
