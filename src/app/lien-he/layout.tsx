import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ Tổng Đài Taxi Lữ Khách Hà Tĩnh 24/7 [0963 726 995]",
  description: "Thông tin liên hệ, số hotline 0963 726 995, văn phòng điều hành và hỗ trợ khách hàng đặt xe khẩn cấp, xuất hóa đơn VAT điện tử tại TP Hà Tĩnh.",
  openGraph: {
    title: "Liên Hệ Tổng Đài Taxi Lữ Khách Hà Tĩnh | 0963 726 995",
    description: "Tổng đài trực ban điều phối xe 24/7 tại 13 huyện thị Hà Tĩnh. Gọi là có mặt sau 5-10 phút.",
    images: [{ url: "/images/31.jpg" }],
  },
};

export default function LienHeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
