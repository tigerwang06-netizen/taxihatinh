import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin Tức & Cẩm Nang Du Lịch, Kinh Nghiệm Đi Lại Hà Tĩnh",
  description: "Cập nhật lộ trình di chuyển, mẹo đặt taxi sân bay Vinh giá rẻ, cẩm nang du lịch Hà Tĩnh và các chương trình ưu đãi cước phí từ Taxi Lữ Khách Hà Tĩnh.",
  openGraph: {
    title: "Tin Tức & Cẩm Nang Du Lịch Hà Tĩnh | Taxi Lữ Khách Hà Tĩnh",
    description: "Cẩm nang đi lại, thông tin khuyến mãi và kinh nghiệm chọn xe taxi an toàn, tiết kiệm tại Hà Tĩnh.",
    images: [{ url: "/images/21.jpg" }],
  },
};

export default function TinTucLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
