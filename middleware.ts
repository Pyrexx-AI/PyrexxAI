import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BLOCKED_SCRAPERS = [
  'GPTBot',
  'CCBot',
  'ClaudeBot',
  'FacebookBot',
  'AI2Bot',
  'anthropic-ai',
  'Omgili',
  'Omgilibot',
  'Bytespider'
];

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  const isBlocked = BLOCKED_SCRAPERS.some((bot) => userAgent.includes(bot));

  if (isBlocked) {
    return new NextResponse('Access Denied: AI Scraping is strictly prohibited on this domain.', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|logo.png).*)',
  ],
};