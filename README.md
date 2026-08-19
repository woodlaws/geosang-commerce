# 거상커머스 · GitHub/Vercel 배포 패키지

거상커머스 홈페이지를 표준 Next.js App Router 프로젝트로 구성한 배포용 소스입니다.

## 로컬 실행

Node.js 22와 pnpm을 권장합니다.

```bash
pnpm install
pnpm dev
```

배포 전 검수 명령:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## GitHub에서 Vercel로 배포

1. 이 폴더의 파일을 새 GitHub 저장소의 루트에 업로드하고 `main` 브랜치에 푸시합니다.
2. Vercel 대시보드에서 **Add New → Project**를 선택하고 해당 GitHub 저장소를 가져옵니다.
3. Framework Preset이 **Next.js**인지 확인한 뒤 **Deploy**를 실행합니다.

Vercel이 `main` 브랜치의 프로덕션 배포와 Pull Request 미리보기를 자동으로 관리하므로 별도 GitHub Actions 워크플로는 필요하지 않습니다.

## 환경 변수

Vercel 프로젝트의 **Settings → Environment Variables**에서 필요한 항목만 등록합니다. 키 목록은 `.env.example`에 있습니다.

- `NEXT_PUBLIC_SITE_URL`: 최종 Vercel 도메인 또는 연결한 맞춤 도메인
- `NEXT_PUBLIC_CREATOR_FORM_ENDPOINT`: 인플루언서 신청 폼 수신 API 주소
- `NEXT_PUBLIC_BRAND_FORM_ENDPOINT`: 브랜드 입점 폼 수신 API 주소
- 연락처 및 소셜 URL 항목은 실제 공개할 값이 있을 때만 입력

폼 엔드포인트를 비워 두면 실제 전송 성공으로 오인되지 않도록 데모 안내 상태로 동작합니다. 비밀 키는 `NEXT_PUBLIC_` 변수에 넣지 마세요.

## 주요 경로

- `/` 메인 홈페이지
- `/campaigns` 캠페인 목록
- `/campaigns/quokkies-macadamia` 쿼키즈 마카다미아 상세
- `/creators` 인플루언서 지원
- `/brands` 브랜드 입점 문의

이미지는 `public` 아래에 있으며, 쿼키즈 대표 이미지는 `public/products/quokkies-macadamia.png`입니다.
