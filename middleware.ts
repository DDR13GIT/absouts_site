import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*',
};

export function middleware(request: NextRequest) {
  console.log('[Middleware] Request:', request.nextUrl.pathname);

  // Get blocked countries from environment
  const blockedCountries = process.env.NEXT_PUBLIC_BLOCKED_COUNTRIES || '';

  if (!blockedCountries) {
    console.log('[Middleware] No geoblocking configured');
    return NextResponse.next();
  }

  // Parse blocked countries list
  const blockedList = blockedCountries
    .split(',')
    .map(c => c.trim().toUpperCase())
    .filter(c => c.length > 0);

  if (blockedList.length === 0) {
    console.log('[Middleware] Empty blocked list');
    return NextResponse.next();
  }

  // Get country from Vercel geo
  const country = request.geo?.country || 'UNKNOWN';

  console.log('[Middleware] Country:', country);

  // Check if blocked
  if (blockedList.includes(country.toUpperCase())) {
    console.log('[Middleware] BLOCKING:', country);

    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access Restricted</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }
      .container {
        text-align: center;
        padding: 2rem;
        max-width: 600px;
      }
      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: 700;
      }
      p {
        font-size: 1.25rem;
        line-height: 1.6;
        opacity: 0.9;
      }
      .code {
        font-family: monospace;
        background: rgba(255, 255, 255, 0.1);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>🌍 Access Restricted</h1>
      <p>
        We're sorry, but access to this website is not available from your location.
      </p>
      <p style="margin-top: 2rem; font-size: 0.9rem;">
        Country: <span class="code">${country}</span>
      </p>
    </div>
  </body>
</html>`,
      {
        status: 403,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
        },
      }
    );
  }

  console.log('[Middleware] Allowing:', country);
  return NextResponse.next();
}
