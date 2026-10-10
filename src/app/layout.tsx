import type { Metadata, Viewport } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/500.css";
import "@fontsource/be-vietnam-pro/600.css";
import "@fontsource/be-vietnam-pro/700.css";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFB" },
    { media: "(prefers-color-scheme: dark)", color: "#191c1d" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Taxi Lữ Khách Hà Tĩnh - Đặt xe Taxi, Du lịch chuyên nghiệp",
  description: "Dịch vụ Taxi Lữ Khách Hà Tĩnh. Đặt xe nhanh, an toàn, tiết kiệm. Xe 4 chỗ, 7 chỗ, xe điện Vinfast.",
};

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="antialiased text-foreground bg-background font-body">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
