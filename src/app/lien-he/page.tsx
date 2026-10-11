"use client";

import { useState } from "react";
import Link from "next/link";
import { submitBooking } from "@/lib/booking";

export default function LienHe() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    serviceType: "Taxi nhanh nội thành / ngoại thành (4 - 7 chỗ)",
    pickup: "",
    destination: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      setErrorMessage("Vui lòng nhập số điện thoại liên hệ.");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");

    const res = await submitBooking({
      ...formData,
      sourcePage: "Trang Liên Hệ",
    });

    setIsSubmitting(false);
    if (res.success) {
      setFormSubmitted(true);
      setBookingCode(res.bookingId);
      setFormData({
        fullName: "",
        phone: "",
        serviceType: "Taxi nhanh nội thành / ngoại thành (4 - 7 chỗ)",
        pickup: "",
        destination: "",
        note: "",
      });
      setTimeout(() => setFormSubmitted(false), 8000);
    } else {
      setErrorMessage(res.error || "Gửi yêu cầu không thành công.");
    }
  };

  return (
    <main className="min-h-screen bg-surface">
<div className="flex flex-col w-full">

<section className="w-full bg-surface-container-low border-b border-surface-container py-space-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<Link className="hover:text-[#008744] transition-colors flex items-center gap-1" href="/">
<span className="material-symbols-outlined text-[16px] text-primary" style={{ color: "rgb(0, 135, 68)" }}>home</span>
        Trang chủ
      </Link>
<span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
<span className="text-primary font-bold" style={{ color: "rgb(0, 135, 68)" }}>Liên hệ &amp; Hỗ trợ đặt xe</span>
</div>
</section>

<section className="relative w-full bg-gradient-to-b from-surface-container-low to-surface py-space-xl overflow-hidden">

<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
<div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-2xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="max-w-3xl space-y-space-md">
<div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm tracking-wide" style={{ backgroundColor: "rgb(232, 248, 240)", color: "rgb(0, 135, 68)" }}>
<span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ backgroundColor: "rgb(0, 166, 81)" }}></span>
          HỖ TRỢ 24/7 TRÊN TOÀN TỈNH HÀ TĨNH
        </div>
<h1 className="font-display text-display text-on-surface tracking-tight leading-tight">
          LIÊN HỆ ĐẶT XE &amp; TỔNG ĐÀI ĐIỀU HÀNH <span className="text-primary" style={{ color: "rgb(0, 135, 68)" }}>LỮ KHÁCH HÀ TĨNH</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Đội ngũ điều hành và tài xế túc trực 24/7 sẵn sàng phục vụ quý khách tại 13 huyện thị Hà Tĩnh. Kết nối với chúng tôi qua hotline, Zalo hoặc gửi thông tin để nhận báo giá ưu đãi trong 30 giây.
        </p>

<div className="flex flex-wrap items-center gap-space-lg pt-space-xs font-label-md text-label-md text-on-surface" style={{ color: "rgb(25, 28, 29)" }}>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">timer</span>
<span className="">Đón xe nhanh 5 - 10 phút</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">verified</span>
<span className="">100% Xe đời mới tiện nghi</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">receipt_long</span>
<span className="">Có hóa đơn điện tử VAT</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-lg -mt-4 relative z-20">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<a className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between" href="tel:0812444555">
<div>
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-md group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all" style={{ backgroundColor: "rgb(232, 248, 240)", color: "rgb(0, 135, 68)" }}>
<span className="material-symbols-outlined text-2xl">call</span>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">Tổng Đài Khẩn Cấp 24/7</span>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">0812 444 555</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Gọi miễn phí, tài xế điều xe có mặt sau 5 - 10 phút toàn tỉnh.</p>
</div>
<div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between text-primary font-label-sm text-label-sm" style={{ color: "rgb(0, 135, 68)" }}>
<span className="">Gọi ngay tức thì</span>
<span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</a>

<a className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between" href="https://zalo.me/0812444555" rel="noopener noreferrer" target="_blank">
<div>
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-md group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all" style={{ backgroundColor: "rgb(232, 248, 240)", color: "rgb(0, 135, 68)" }}>
<span className="material-symbols-outlined text-2xl">chat</span>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">Zalo Điều Hành Trực Tuyến</span>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">0812 444 555</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Gửi định vị, báo giá trọn gói và xác nhận chuyến xe qua tin nhắn.</p>
</div>
<div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between text-primary font-label-sm text-label-sm" style={{ color: "rgb(0, 135, 68)" }}>
<span className="">Chat Zalo báo giá</span>
<span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</a>

<div className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-md group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all" style={{ backgroundColor: "rgb(232, 248, 240)", color: "rgb(0, 135, 68)" }}>
<span className="material-symbols-outlined text-2xl">storefront</span>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">Văn Phòng Điều Hành Chính</span>
<h3 className="font-title text-title text-on-surface group-hover:text-primary transition-colors">45 Trần Phú, TP. Hà Tĩnh</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Phường Bắc Hà, Trung tâm điều phối các chuyến xe nội và ngoại tỉnh.</p>
</div>
<div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span className="">Mở cửa 24/24h</span>
<span className="material-symbols-outlined text-base">pin_drop</span>
</div>
</div>

<a className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between" href="mailto:hotro@taxilukhachhatinh.vn">
<div>
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-md group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all" style={{ backgroundColor: "rgb(232, 248, 240)", color: "rgb(0, 135, 68)" }}>
<span className="material-symbols-outlined text-2xl">mail</span>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-1">Email &amp; Hóa Đơn VAT</span>
<h3 className="font-title text-title text-on-surface truncate group-hover:text-primary transition-colors">hotro@taxilukhachhatinh.vn</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Hỗ trợ đối soát chuyến, ký kết hợp đồng lữ hành và xuất hóa đơn điện tử.</p>
</div>
<div className="mt-space-md pt-space-sm border-t border-surface-container flex items-center justify-between text-primary font-label-sm text-label-sm" style={{ color: "rgb(0, 135, 68)" }}>
<span className="">Gửi thư hỗ trợ</span>
<span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</a>
</div>
</div>
</section>

<section className="w-full py-space-xl">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 sm:p-space-xl shadow-lg border border-surface-container">
<div className="mb-space-lg">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
<span className="material-symbols-outlined text-[16px]">edit_calendar</span>
              Tiếp nhận điều xe trực tuyến
            </span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
              Gửi Yêu Cầu Đặt Xe Hoặc Phản Hồi Ý Kiến
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Vui lòng điền thông tin lộ trình, tổng đài sẽ gọi lại xác nhận báo giá tốt nhất cho quý khách sau 30 giây - 3 phút.
            </p>
</div>
<form className="space-y-space-md" id="contactForm" onSubmit={handleFormSubmit}>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="space-y-1">
<label className="block font-label-md text-label-md text-on-surface">Họ và tên của bạn <span className="text-error">*</span></label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">person</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface rounded-lg border border-surface-container-highest text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Nguyễn Văn A" required type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
</div>
</div>
<div className="space-y-1">
<label className="block font-label-md text-label-md text-on-surface">Số điện thoại liên hệ <span className="text-error">*</span></label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">phone</span>
<input className="w-full pl-10 pr-4 py-3 bg-surface rounded-lg border border-surface-container-highest text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="09xx xxx xxx" required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
</div>
</div>
</div>

<div className="space-y-1">
<label className="block font-label-md text-label-md text-on-surface">Nhu cầu di chuyển <span className="text-error">*</span></label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">directions_car</span>
<select className="w-full pl-10 pr-10 py-3 bg-surface rounded-lg border border-surface-container-highest text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer" required value={formData.serviceType} onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}>
<option value="taxi-nhanh">Taxi nhanh nội thành / ngoại thành (4 - 7 chỗ)</option>
<option value="san-bay-vinh">Đưa đón sảnh Sân bay Vinh &lt;=&gt; Hà Tĩnh trọn gói</option>
<option value="xe-tien-chuyen">Xe tiện chuyến Hà Tĩnh - Nghệ An - Hà Nội (Giá tiết kiệm)</option>
<option value="thue-theo-ngay">Thuê xe có tài theo ngày / Đi công tác liên tỉnh</option>
<option value="du-lich-le-hoi">Hợp đồng du lịch, tham quan danh thắng, cưới hỏi</option>
<option value="phan-hoi-y-kien">Góp ý, phản ánh dịch vụ &amp; yêu cầu hóa đơn VAT</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
</div>

<div className="p-space-md bg-surface-container-low rounded-xl space-y-space-sm relative">
<div className="space-y-1">
<label className="block font-label-sm text-label-sm text-secondary font-bold">Điểm đón khách (Hà Tĩnh / Sân bay / Khách sạn)</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-[20px]">my_location</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest rounded-lg border border-surface-container-highest text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Ví dụ: Khách sạn Vinpearl, TP Hà Tĩnh..." type="text" value={formData.pickup} onChange={(e) => setFormData({ ...formData, pickup: e.target.value })} />
</div>
</div>
<div className="space-y-1">
<label className="block font-label-sm text-label-sm text-secondary font-bold">Điểm đến dự kiến</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary-container text-[20px]">location_on</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest rounded-lg border border-surface-container-highest text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Ví dụ: Sân bay Vinh, TX Kỳ Anh, KKT Vũng Áng..." type="text" value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} />
</div>
</div>
</div>

<div className="space-y-1">
<label className="block font-label-md text-label-md text-on-surface">Ghi chú thêm hoặc mã chuyến bay / số lượng người</label>
<textarea className="w-full p-3 bg-surface rounded-lg border border-surface-container-highest text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Ví dụ: Có 2 vali lớn, hạ cánh chuyến VN126 lúc 18h30..." rows={3} value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })}></textarea>
</div>

<div className="flex items-start gap-space-xs text-on-surface-variant font-body-sm text-body-sm bg-surface p-space-sm rounded-lg">
<span className="material-symbols-outlined text-primary text-base mt-0.5">lock</span>
<span className="">Thông tin của quý khách được bảo mật an toàn. Báo giá trọn gói minh bạch, cam kết không phát sinh phụ phí dọc đường.</span>
</div>

<button disabled={isSubmitting} className="w-full py-4 px-space-lg rounded-xl bg-primary text-on-primary font-title text-title uppercase tracking-wide flex items-center justify-center gap-space-sm shadow-md hover:bg-primary-container hover:shadow-xl active:scale-[0.99] transition-all cursor-pointer disabled:opacity-70" type="submit" style={{ backgroundColor: "rgb(0, 166, 81)", boxShadow: "rgba(0, 166, 81, 0.35) 0px 4px 16px -2px" }}>
<span className="material-symbols-outlined text-2xl">{isSubmitting ? "hourglass_empty" : "send"}</span>
<span>{isSubmitting ? "ĐANG GỬI THÔNG TIN..." : "GỬI YÊU CẦU NGAY (PHẢN HỒI TRONG 3 PHÚT)"}</span>
</button>
{errorMessage && (
  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-center text-xs font-semibold">
    {errorMessage}
  </div>
)}
</form>

<div className="hidden mt-space-md p-space-md bg-secondary-container text-on-secondary-fixed rounded-xl flex items-center gap-space-sm" id="formSuccess">
<span className="material-symbols-outlined text-2xl text-primary">check_circle</span>
<div className="font-body-md text-body-md">
<strong>Yêu cầu gửi thành công!</strong> Điều hành viên Taxi Lữ Khách Hà Tĩnh sẽ liên hệ quý khách qua số điện thoại vừa cung cấp.
            </div>
</div>
</div>

<div className="lg:col-span-5 space-y-space-lg">

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-lg border border-surface-container">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ backgroundColor: "rgb(0, 166, 81)" }}></span>
<h3 className="font-title text-title text-on-surface">Đội Xe Trực Chiến 13 Huyện Thị</h3>
</div>
<span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-label-sm text-label-sm font-bold" style={{ backgroundColor: "rgb(232, 248, 240)", color: "rgb(0, 135, 68)" }}>120+ Xe hoạt động</span>
</div>

<div className="grid grid-cols-2 gap-space-sm text-left">
<div className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex items-center justify-between">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">TP. Hà Tĩnh</div>
<div className="font-body-sm text-body-sm text-primary">Có mặt 5 phút</div>
</div>
<span className="material-symbols-outlined text-secondary text-lg">local_taxi</span>
</div>
<div className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex items-center justify-between">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">TX. Kỳ Anh / Vũng Áng</div>
<div className="font-body-sm text-body-sm text-primary">Có mặt 7 phút</div>
</div>
<span className="material-symbols-outlined text-secondary text-lg">local_taxi</span>
</div>
<div className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex items-center justify-between">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">TX. Hồng Lĩnh</div>
<div className="font-body-sm text-body-sm text-primary">Có mặt 5 phút</div>
</div>
<span className="material-symbols-outlined text-secondary text-lg">local_taxi</span>
</div>
<div className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex items-center justify-between">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Nghi Xuân / Xuân Thành</div>
<div className="font-body-sm text-body-sm text-primary">Có mặt 8 phút</div>
</div>
<span className="material-symbols-outlined text-secondary text-lg">local_taxi</span>
</div>
<div className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex items-center justify-between">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Can Lộc / Đồng Lộc</div>
<div className="font-body-sm text-body-sm text-primary">Có mặt 8 phút</div>
</div>
<span className="material-symbols-outlined text-secondary text-lg">local_taxi</span>
</div>
<div className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex items-center justify-between">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Cẩm Xuyên / Thiên Cầm</div>
<div className="font-body-sm text-body-sm text-primary">Có mặt 7 phút</div>
</div>
<span className="material-symbols-outlined text-secondary text-lg">local_taxi</span>
</div>
<div className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex items-center justify-between">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Thạch Hà / Thạch Hải</div>
<div className="font-body-sm text-body-sm text-primary">Có mặt 6 phút</div>
</div>
<span className="material-symbols-outlined text-secondary text-lg">local_taxi</span>
</div>
<div className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex items-center justify-between">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Đức Thọ / Hương Sơn</div>
<div className="font-body-sm text-body-sm text-primary">Có mặt 10 phút</div>
</div>
<span className="material-symbols-outlined text-secondary text-lg">local_taxi</span>
</div>
<div className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex items-center justify-between">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Hương Khê</div>
<div className="font-body-sm text-body-sm text-primary">Có mặt 10 phút</div>
</div>
<span className="material-symbols-outlined text-secondary text-lg">local_taxi</span>
</div>
<div className="p-space-sm rounded-lg bg-surface hover:bg-surface-container transition-colors flex items-center justify-between">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Lộc Hà / Vũ Quang</div>
<div className="font-body-sm text-body-sm text-primary">Có mặt 10 phút</div>
</div>
<span className="material-symbols-outlined text-secondary text-lg">local_taxi</span>
</div>
</div>

<div className="mt-space-md rounded-xl overflow-hidden shadow-inner relative group">
<div className="w-full h-52 bg-cover bg-center rounded-xl transition-transform duration-500 group-hover:scale-105" data-location="Ha Tinh City, Vietnam" style={{ backgroundImage: "url('/images/map_hatinh.jpg')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent pointer-events-none flex items-end p-space-md">
<div className="text-on-primary">
<div className="font-title text-title flex items-center gap-1.5">
<span className="material-symbols-outlined text-base">pin_drop</span>
                    Bản đồ điều phối hành trình Hà Tĩnh
                  </div>
<p className="font-body-sm text-body-sm text-surface-container-high">Kết nối đồng bộ tuyến sân bay Vinh - Quốc lộ 1A - Đường ven biển</p>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-primary-container to-primary text-on-primary rounded-2xl p-6 shadow-lg flex items-center gap-space-md" style={{ background: "linear-gradient(135deg, rgb(0, 135, 68) 0%, rgb(0, 166, 81) 100%)" }}>
<div className="p-2.5 bg-surface-container-lowest rounded-xl shadow-md shrink-0">
<div className="w-24 h-24 bg-surface-container flex flex-col items-center justify-center rounded text-primary text-center" style={{ color: "rgb(0, 135, 68)" }}>
<span className="material-symbols-outlined text-5xl">qr_code_2</span>
<span className="font-label-sm text-[10px] tracking-tight font-bold">ZALO OA 24/7</span>
</div>
</div>
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">Quét Mã Nhanh</span>
<h4 className="font-title text-title text-surface-container-lowest">Kết Nối Với Điều Hành Viên Trực Ca</h4>
<p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
                Mở Zalo trên điện thoại, quét mã để gửi tọa độ đón chính xác mà không cần gõ địa chỉ dài dòng.
              </p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-md border border-surface-container flex items-center gap-space-md">
<img className="w-20 h-20 rounded-xl object-cover shrink-0" data-alt="Chuyên cơ mặt đất và đội xe taxi sang trọng xếp thẳng hàng trước nhà ga đón khách sân bay tại Hà Tĩnh, ánh sáng ban ngày trong lành chuyên nghiệp." src="/images/31.jpg" />
<div className="space-y-0.5">
<div className="font-title text-title text-on-surface">Đội Xe Đạt Chuẩn VIP &amp; Gia Đình</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Trang bị nước suối đóng chai, khăn lạnh vô trùng, sạc điện thoại và wifi miễn phí suốt chuyến hành trình.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-widest block mb-2">TIÊU CHUẨN DỊCH VỤ</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Cam Kết Vàng Từ Taxi Lữ Khách Hà Tĩnh</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Mỗi chuyến xe là một hành trình trọn vẹn sự an tâm, tôn trọng và tận tụy phục vụ quý khách hàng.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all border border-surface-container">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-md" style={{ backgroundColor: "rgb(232, 248, 240)", color: "rgb(0, 135, 68)" }}>
<span className="material-symbols-outlined text-2xl">ring_volume</span>
</div>
<h3 className="font-title text-title text-on-surface mb-space-xs">Tiếp Nhận Trong 3 Chuông</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tổng đài viên trực ca 24/7, luôn có người nhấc máy phản hồi nhanh chóng, không để quý khách chờ đợi.</p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all border border-surface-container">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-md" style={{ backgroundColor: "rgb(232, 248, 240)", color: "rgb(0, 135, 68)" }}>
<span className="material-symbols-outlined text-2xl">price_check</span>
</div>
<h3 className="font-title text-title text-on-surface mb-space-xs">Báo Giá Chuẩn Xác, Minh Bạch</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Báo giá trọn gói trước khi khởi hành. Cam kết tuyệt đối không phát sinh phụ phí cầu đường, đêm muộn.</p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all border border-surface-container">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-md" style={{ backgroundColor: "rgb(232, 248, 240)", color: "rgb(0, 135, 68)" }}>
<span className="material-symbols-outlined text-2xl">airline_seat_recline_extra</span>
</div>
<h3 className="font-title text-title text-on-surface mb-space-xs">100% Xe Đời Mới Sạch Sẽ</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Nội thất thơm mát, khử khuẩn thường xuyên, ghế bọc da êm ái đem lại trải nghiệm thư thái tuyệt đối.</p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all border border-surface-container">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-md" style={{ backgroundColor: "rgb(232, 248, 240)", color: "rgb(0, 135, 68)" }}>
<span className="material-symbols-outlined text-2xl">published_with_changes</span>
</div>
<h3 className="font-title text-title text-on-surface mb-space-xs">Hoàn Tiền &amp; Xử Lý Nghiêm Túc</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sẵn sàng bồi thường và hoàn tiền nếu tài xế đón trễ giờ hẹn làm lỡ chuyến bay hay có thái độ không lịch sự.</p>
</div>
</div>
</div>
</section>


      {/* ACCORDION FAQ SECTION */}
      <section className="w-full py-space-xl">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-space-xl">
            <span className="font-label-sm text-label-sm text-[#008744] font-bold uppercase tracking-wider block mb-1">
              GIẢI ĐÁP THẮC MẮC
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Câu Hỏi Thường Gặp Về Liên Hệ &amp; Đặt Xe
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Những câu hỏi được khách hàng quan tâm nhất khi liên hệ với Taxi Lữ Khách Hà Tĩnh.
            </p>
          </div>
          <div className="space-y-space-md" id="faqAccordion">
            {[
              {
                q: "Làm sao để đặt xe đón tại sảnh Sân bay Vinh khi chưa rõ giờ hạ cánh chính xác?",
                a: "Quý khách chỉ cần cung cấp mã số chuyến bay (ví dụ: VN126, VJ214) và ngày bay khi gọi điện hoặc nhắn tin Zalo. Đội ngũ điều hành sẽ theo dõi lịch trình bay thực tế trên hệ thống. Ngay khi máy bay hạ cánh, tài xế đã đỗ sẵn tại sảnh chờ, sẵn sàng đón bạn mà không lo phát sinh phí chờ đợi do delay.",
              },
              {
                q: "Cần hóa đơn đỏ VAT cho công ty thì liên hệ như thế nào?",
                a: "Sau khi hoàn thành chuyến đi, quý khách chỉ cần gửi thông tin doanh nghiệp (Tên công ty, Mã số thuế, Email nhận hóa đơn) cho tổng đài qua Zalo 0812 444 555 hoặc email hotro@taxilukhachhatinh.vn. Chúng tôi sẽ phát hành và gửi Hóa đơn điện tử hợp lệ về email của quý công ty trong vòng 24 giờ làm việc.",
              },
              {
                q: "Tôi có thể đặt xe trước nhiều ngày cho chuyến công tác hay đám cưới không?",
                a: "Hoàn toàn được! Chúng tôi khuyến khích quý khách đặt xe trước 1 - 3 ngày để lựa chọn được dòng xe ưng ý nhất (xe 4 chỗ sedan hiện đại, 7 chỗ SUV rộng rãi hoặc dòng xe VIP sang trọng) và nhận mức giá ưu đãi trọn gói tốt nhất từ Lữ Khách Hà Tĩnh.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-surface-container-lowest rounded-xl border border-surface-container overflow-hidden transition-all shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="faq-toggle w-full p-space-lg flex items-center justify-between text-left font-title text-title text-on-surface hover:text-[#008744] transition-colors cursor-pointer"
                >
                  <span className="font-bold">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined faq-icon text-outline transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180 text-[#008744]' : 'rotate-0'
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-space-lg pb-space-lg font-body-md text-body-md text-on-surface-variant border-t border-surface-container-low pt-space-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


<section className="w-full py-space-xl bg-gradient-to-r from-primary to-primary-container text-on-primary relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgb(0, 135, 68) 0%, rgb(0, 166, 81) 100%)" }}>
<div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="space-y-space-xs text-center md:text-left">
<span className="inline-block px-3 py-1 rounded-full bg-primary-fixed-dim/20 text-surface-container-lowest font-label-sm text-label-sm font-bold tracking-wider uppercase">
          TỔNG ĐÀI ĐIỀU XE 24/7
        </span>
<h2 className="font-display text-headline-lg md:text-display text-surface-container-lowest font-bold">
          Cần Xe Gấp Tại Hà Tĩnh? Gọi Có Mặt Ngay!
        </h2>
<p className="font-body-lg text-body-lg text-surface-container-high max-w-xl">
          Tài xế bản địa tận tâm, vững tay lái, am hiểu mọi cung đường sẵn sàng phục vụ quý khách mọi lúc, mọi nơi.
        </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-md w-full md:w-auto shrink-0">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-4 rounded-full bg-surface-container-lowest text-primary font-title text-title uppercase shadow-xl hover:bg-surface-container-low active:scale-95 transition-all" href="tel:0812444555" style={{ color: "rgb(0, 135, 68)" }}>
<span className="material-symbols-outlined text-2xl text-primary">call</span>
<span className="">Gọi 0812 444 555</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-4 rounded-full bg-primary/30 hover:bg-primary/50 text-surface-container-lowest font-title text-title uppercase border border-surface-container-lowest/30 transition-all" href="https://zalo.me/0812444555" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-2xl">chat</span>
<span className="">Nhắn Tin Zalo</span>
</a>
</div>
</div>
</section>
</div>
    </main>
  );
}
