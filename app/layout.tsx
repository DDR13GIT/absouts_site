import type { ReactNode } from "react";
import "./globals.css";

// TODO Task 6: app/[locale]/layout.tsx will take over the html/body shell
// (with locale-aware lang attribute, fonts, providers). This root layout is
// a temporary scaffold that satisfies Next.js App Router's requirement that
// the root layout renders <html> and <body>.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
