import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bảng Giá Cước Taxi Hà Tĩnh & Dự Toán Chi Phí Tức Thì [2025]",
  description: "Bảng giá cước taxi Hà Tĩnh niêm yết từ 10.500đ/km. Công cụ ước tính cước phí tự động đi Sân bay Vinh, Kỳ Anh, Đồng Lộc, Hương Tích. Giảm 40% - 50% chuyến về.",
  openGraph: {
    title: "Bảng Giá Cước Taxi Hà Tĩnh Niêm Yết | Taxi Lữ Khách Hà Tĩnh",
    description: "Tra cứu cước phí taxi 4 chỗ, 7 chỗ, xe điện và tuyến sân bay Vinh trọn gói không phát sinh phụ phí.",
    images: [{ url: "/images/33.jpg" }],
  },
};

export default function BangGiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
