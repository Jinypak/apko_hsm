// export { auth as middleware } from '@/auth';

// docs/hsm/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 허용할 경로 리스트 설정
const allowedRoutes = [
  '/docs/hsm/enter-hsm', // enter-hsm 루트 경로
  '/docs/hsm/enter-hsm/equipment', // equipment 경로
  '/docs/hsm/enter-hsm/introduce', // introduce 경로
  '/docs/hsm/faq', // faq 경로
  '/docs/hsm/maintenance', // maintenance 경로
  '/docs/hsm/settings', // settings 루트 경로
  '/docs/hsm/settings/connect-hsm', // connect-hsm 경로
  '/docs/hsm/settings/network-settings', // network-settings 경로
  '/docs/hsm/settings/system-settings', // system-settings 경로
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 현재 경로가 허용된 경로 리스트에 포함되지 않는 경우
  if (!allowedRoutes.some((route) => pathname.startsWith(route))) {
    // 커스텀 에러 페이지로 리다이렉트
    return NextResponse.rewrite(new URL('/error', request.url));
  }

  return NextResponse.next(); // 허용된 경로인 경우 다음 미들웨어 또는 페이지로 이동
}

// 미들웨어 적용 경로 설정
export const config = {
  matcher: '/docs/hsm/:path*',
};
