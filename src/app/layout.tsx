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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://taxilukhachhatinh.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taxi Lữ Khách Hà Tĩnh - Tổng Đài Đặt Xe 24/7 Toàn Tỉnh [0963 726 995]",
    template: "%s | Taxi Lữ Khách Hà Tĩnh",
  },
  description: "Tổng đài Taxi Lữ Khách Hà Tĩnh - Đón nhanh 5-10 phút tại 13 huyện thị Hà Tĩnh. Taxi 4 chỗ, 7 chỗ đời mới 2022-2025, xe điện VinFast, xe đưa đón Sân bay Vinh trọn gói từ 450k, thuê xe tự lái và xe hợp đồng du lịch. Gọi ngay 0963 726 995.",
  keywords: [
    "taxi hà tĩnh",
    "taxi lữ khách hà tĩnh",
    "số taxi hà tĩnh",
    "tổng đài taxi hà tĩnh",
    "taxi sân bay vinh hà tĩnh",
    "taxi điện hà tĩnh",
    "thuê xe tự lái hà tĩnh",
    "xe hợp đồng du lịch hà tĩnh",
    "taxi giá rẻ hà tĩnh",
    "taxi kỳ anh",
    "taxi hồng lĩnh",
    "taxi cẩm xuyên",
    "taxi can lộc",
  ],
  authors: [{ name: "Taxi Lữ Khách Hà Tĩnh", url: siteUrl }],
  creator: "Taxi Lữ Khách Hà Tĩnh",
  publisher: "Taxi Lữ Khách Hà Tĩnh",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Taxi Lữ Khách Hà Tĩnh - Tổng Đài Đặt Xe 24/7 Toàn Tỉnh [0963 726 995]",
    description: "Hệ thống taxi gia đình, xe điện thông minh và đưa đón sân bay Vinh trọn gói tại 13 huyện thị Hà Tĩnh. Đón đúng giờ, giá niêm yết minh bạch, giảm 40% chiều về.",
    url: siteUrl,
    siteName: "Taxi Lữ Khách Hà Tĩnh",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/31.jpg",
        width: 1200,
        height: 630,
        alt: "Đội xe hiện đại Taxi Lữ Khách Hà Tĩnh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Lữ Khách Hà Tĩnh - Tổng Đài 24/7 [0963 726 995]",
    description: "Đón xe nhanh 5-10 phút tại Hà Tĩnh. Xe đời mới 2022-2025, giảm 40% cước khứ hồi.",
    images: ["/images/31.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Taxi Lữ Khách Hà Tĩnh",
  "image": `${siteUrl}/images/31.jpg`,
  "@id": `${siteUrl}/#organization`,
  "url": siteUrl,
  "telephone": "0963726995",
  "priceRange": "10.000đ - 1.200.000đ",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "86 Nguyễn Biểu, Thành Sen, Hà Tĩnh",
    "addressLocality": "Hà Tĩnh",
    "addressRegion": "Hà Tĩnh",
    "postalCode": "480000",
    "addressCountry": "VN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.3431,
    "longitude": 105.9058,
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59",
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Thành phố Hà Tĩnh" },
    { "@type": "AdministrativeArea", "name": "Thị xã Hồng Lĩnh" },
    { "@type": "AdministrativeArea", "name": "Thị xã Kỳ Anh" },
    { "@type": "AdministrativeArea", "name": "Huyện Can Lộc" },
    { "@type": "AdministrativeArea", "name": "Huyện Thạch Hà" },
    { "@type": "AdministrativeArea", "name": "Huyện Cẩm Xuyên" },
    { "@type": "AdministrativeArea", "name": "Huyện Nghi Xuân" },
    { "@type": "AdministrativeArea", "name": "Huyện Đức Thọ" },
    { "@type": "AdministrativeArea", "name": "Huyện Hương Sơn" },
    { "@type": "AdministrativeArea", "name": "Huyện Hương Khê" },
    { "@type": "AdministrativeArea", "name": "Huyện Kỳ Anh" },
    { "@type": "AdministrativeArea", "name": "Huyện Vũ Quang" },
    { "@type": "AdministrativeArea", "name": "Huyện Lộc Hà" },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1280",
    "bestRating": "5",
    "worstRating": "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-foreground bg-background font-body">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
