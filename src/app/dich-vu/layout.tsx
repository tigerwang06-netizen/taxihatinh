import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch Vụ Vận Tải Toàn Diện Hà Tĩnh - Taxi 4-7 Chỗ, Xe Điện, Sân Bay",
  description: "Hệ thống dịch vụ taxi gia đình, xe điện VinFast, đưa đón Sân bay Vinh trọn gói từ 450k, thuê xe tự lái và xe hợp đồng du lịch 16-45 chỗ tại Hà Tĩnh. Tổng đài 24/7: 0963 726 995.",
  openGraph: {
    title: "Dịch Vụ Vận Tải Toàn Diện Hà Tĩnh | Taxi Lữ Khách Hà Tĩnh",
    description: "Đa dạng dịch vụ taxi 4-7 chỗ, xe điện, đưa đón sân bay Vinh, hợp đồng du lịch tại 13 huyện thị Hà Tĩnh.",
    images: [{ url: "/images/31.jpg" }],
  },
};

export default function DichVuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
