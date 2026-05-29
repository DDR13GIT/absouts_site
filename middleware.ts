import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { isBlockedCountry } from "./lib/geoblocking";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country");
  if (isBlockedCountry(country, process.env.BLOCKED_COUNTRIES ?? "KP")) {
    return new NextResponse(
      "<!doctype html><meta charset=utf-8><title>Access Restricted</title>" +
        "<div style='font-family:system-ui;display:grid;place-items:center;min-height:100vh;" +
        "background:linear-gradient(135deg,#0b0b44,#2b3990);color:#fff;text-align:center'>" +
        "<div><h1>Access Restricted</h1><p>This site is not available from your location.</p></div></div>",
      { status: 403, headers: { "content-type": "text/html" } },
    );
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(en|es)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
