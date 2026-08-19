import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
  onClick?: () => void;
  priority?: boolean;
};

export function BrandLogo({ className = "", compact = false, onClick, priority = false }: BrandLogoProps) {
  return (
    <Link href="/" className={`brand-logo ${compact ? "compact" : ""} ${className}`.trim()} onClick={onClick} aria-label="거상커머스 홈">
      <Image src="/images/brand/geosang-commerce-logo.png" alt="거상커머스 G 심벌" width={48} height={50} className="brand-symbol" priority={priority} />
      <span className="brand-lockup"><strong>거상커머스</strong><small>GEOSANG COMMERCE</small></span>
    </Link>
  );
}
