"use client";

import { useState } from "react";
import Link from "next/link";
import { submitBooking, BookingPayload } from "@/lib/booking";

export default function TinTuc() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const [sidebarForm, setSidebarForm] = useState({
    pickup: "",
    destination: "",
    phone: "",
    carType: "Xe 4 - 5 chỗ",
  });
  const [sidebarSubmitting, setSidebarSubmitting] = useState(false);
  const [sidebarSubmitted, setSidebarSubmitted] = useState(false);
  const [sidebarCode, setSidebarCode] = useState("");
  const [sidebarError, setSidebarError] = useState("");

  const handleSidebarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sidebarForm.phone.trim()) {
      setSidebarError("Vui lòng nhập số điện thoại.");
      return;
    }
    setSidebarSubmitting(true);
    setSidebarError("");

    const payload: BookingPayload = {
      pickup: sidebarForm.pickup,
      destination: sidebarForm.destination,
      phone: sidebarForm.phone,
      carType: sidebarForm.carType,
      sourcePage: "Trang Tin Tức - Sidebar",
    };

    const res = await submitBooking(payload);

    setSidebarSubmitting(false);
    if (res.success) {
      setSidebarSubmitted(true);
      setSidebarCode(res.bookingId);
      setSidebarForm({
        pickup: "",
        destination: "",
        phone: "",
        carType: "Xe 4 - 5 chỗ",
      });
      setTimeout(() => setSidebarSubmitted(false), 20000);
    } else {
      setSidebarError(res.error || "Gửi yêu cầu không thành công.");
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 5000);
      setEmailInput("");
    }
  };

  return (
    <main className="min-h-screen bg-surface">
<div className="flex flex-col w-full">

<section className="w-full bg-surface-container-low border-b border-surface-container-high py-space-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between text-body-sm font-body-sm text-secondary">
<nav aria-label="Breadcrumb" className="flex items-center gap-space-xs">
<Link className="hover:text-[#008744] transition-colors flex items-center gap-1" href="/">
<span className="material-symbols-outlined text-[16px]">home</span>Trang chủ
        </Link>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<span className="font-label-md text-primary font-semibold">Tin tức &amp; Cẩm nang du lịch</span>
</nav>
<div className="hidden md:flex items-center gap-space-sm text-on-surface-variant">
<span className="inline-flex w-2 h-2 rounded-full bg-[#00a651] animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Cập nhật tin tức ngày 24/10/2025</span>
</div>
</div>
</section>

<section className="w-full relative overflow-hidden bg-gradient-to-b from-[#e8f8f0] via-surface-container-lowest to-surface pt-10 pb-12">
<div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#00a651]/10 blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-primary-fixed-dim/20 blur-2xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="max-w-4xl space-y-4">
<div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-[#00a651]/15 text-[#008744] font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">newspaper</span>
<span className="">BẢN TIN VẬN TẢI &amp; DU LỊCH HÀ TĨNH</span>
</div>
<h1 className="font-display text-display text-[#008744] tracking-tight font-extrabold uppercase">Cẩm Nang Di Chuyển, Bản Tin Vận Tải &amp; Kinh Nghiệm Đi Lại Hà Tĩnh</h1>
<p className="font-body-lg text-body-lg text-secondary max-w-3xl leading-relaxed">
          Tổng hợp thông tin lộ trình, cẩm nang du lịch khám phá Hà Tĩnh, mẹo tiết kiệm chi phí taxi đường dài và các thông báo ưu đãi cước phí mới nhất từ Taxi Lữ Khách Hà Tĩnh.
        </p>
</div>

<div className="mt-8 pt-6 border-t border-[#00a651]/20 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">

<div className="relative w-full lg:w-96">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-lowest shadow-sm text-body-md font-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-[#00a651] transition-all" placeholder="Tìm kiếm kinh nghiệm, cẩm nang, tuyến xe..." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none font-label-md text-label-md">
            {[
              { id: 'all', label: 'Tất cả bài viết' },
              { id: 'promo', label: 'Tin khuyến mãi' },
              { id: 'guide', label: 'Kinh nghiệm đi lại' },
              { id: 'airport', label: 'Tuyến sân bay Vinh' },
              { id: 'travel', label: 'Điểm đến du lịch' },
              { id: 'ev', label: 'Dịch vụ xe điện' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2.5 rounded-full shadow-sm whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#00a651] text-white font-bold'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:bg-[#e8f8f0] hover:text-[#008744]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>

<section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8">
<div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-7 relative group overflow-hidden rounded-xl h-[340px] sm:h-[420px]">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A modern airport terminal in Vietnam with executive shuttle cars and luxury vans parked outside at golden hour sunset, VIP travelers and chauffeur in professional uniform waiting attentively, cinematic ambient lighting with teal and green tones" src="/images/21.jpg" />
<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00a651] text-on-primary font-label-sm text-label-sm shadow-md">
<span className="material-symbols-outlined text-[15px]">verified</span>
<span className="">NỔI BẬT NHẤT</span>
</div>
<div className="absolute bottom-4 left-4 right-4 bg-[#008744]/90 backdrop-blur-md rounded-lg p-3 text-on-primary hidden sm:flex items-center justify-between text-body-sm font-body-sm"><span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span>Hà Tĩnh ⇄ Sân Bay Vinh (60km)</span><span className="text-[#89f6a6] font-semibold">Thời gian: 50 - 60 phút</span></div>
</div>

<div className="lg:col-span-5 flex flex-col justify-between space-y-5">
<div className="space-y-3">
<div className="flex items-center gap-3 text-secondary font-label-sm text-label-sm">
<span className="px-2.5 py-1 rounded bg-[#e8f8f0] text-[#008744] font-semibold">Tuyến Sân Bay Vinh</span>
<span className="">•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span>24/10/2025</span>
<span className="">•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span>6 phút đọc</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold hover:text-[#008744] transition-colors leading-tight">
  <Link href="/tin-tuc/kinh-nghiem-dat-taxi-san-bay-vinh">
    Kinh nghiệm đặt taxi trọn gói Hà Tĩnh đi Sân Bay Vinh: Giá rẻ, đúng giờ và không lo trễ chuyến
  </Link>
</h2>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
  Khoảng cách từ TP Hà Tĩnh đến Sân bay Quốc tế Vinh dao động khoảng 55km - 65km. Để chuyến bay được suôn sẻ, việc lựa chọn xe hợp đồng hoặc taxi trọn gói giúp bạn tiết kiệm đến 40% so với taxi bấm mét thông thường, cam kết đón tận ngõ đúng giờ và hỗ trợ khuân vác hành lý chu đáo.
</p>
</div>
<div className="pt-4 border-t border-surface-container flex items-center justify-between flex-wrap gap-3"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-[#00a651]/20 flex items-center justify-center text-[#008744]"><span className="material-symbols-outlined">manage_accounts</span></div><div><div className="font-title text-title text-on-surface">Ban Điều Hành</div><div className="font-body-sm text-body-sm text-outline">Taxi Lữ Khách Hà Tĩnh</div></div></div><div className="flex items-center gap-2"><a className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#008744] text-on-primary font-label-md text-label-md shadow-sm hover:bg-[#00a651] transition-all" href="tel:0963726995"><span className="material-symbols-outlined text-[18px]">call</span><span className="">Hotline 0963 726 995</span></a><Link className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00a651] text-on-primary font-label-md text-label-md shadow-sm hover:bg-[#008744] transition-all" href="/tin-tuc/kinh-nghiem-dat-taxi-san-bay-vinh"><span className="">Đọc tiếp</span><span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link></div></div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<div className="lg:col-span-8 space-y-8">
<div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
<div className="flex items-center gap-2">
<span className="w-2.5 h-6 bg-[#00a651] rounded-sm"></span>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Bản Tin &amp; Cẩm Nang Mới Cập Nhật</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">Hiển thị 6 / 48 bài viết</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<article className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group ${activeFilter === 'all' || activeFilter === 'travel' ? '' : 'hidden'}`}>
<div>
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Chua Huong Tich in Ha Tinh Vietnam shrouded in mystical morning mist on top of Hong Linh mountain, sacred pagoda architecture surrounded by pine trees, serene eco travel tourism vibe" src="/images/22.jpg" />
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#00a651] text-on-primary font-label-sm text-label-sm">Điểm Đến Hà Tĩnh</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
<span className="">22/10/2025</span>
<span className="">•</span>
<span className="">5 phút đọc</span>
</div>
<h4 className="font-title text-title text-on-surface group-hover:text-[#008744] transition-colors leading-snug">
  <Link href="/tin-tuc/top-7-dia-diem-du-lich-ha-tinh">
    Top 7 địa điểm du lịch tâm linh &amp; thắng cảnh nổi tiếng Hà Tĩnh nhất định phải đến
  </Link>
</h4>
<p className="font-body-sm text-body-sm text-secondary line-clamp-3 leading-relaxed">
  Hành trình khám phá Ngã Ba Đồng Lộc linh thiêng, viếng Chùa Hương Tích trên đỉnh Hồng Lĩnh ngút ngàn mây và tận hưởng làn nước trong xanh tại bãi biển Thiên Cầm với dịch vụ taxi đưa đón khép kín.
</p>
</div>
</div>
<div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-surface-container">
<span className="font-label-sm text-label-sm text-[#008744] font-semibold">Tuyến du lịch trọn gói</span>
<Link className="text-[#00a651] hover:text-[#008744] font-label-md text-label-md flex items-center gap-1 font-bold" href="/tin-tuc/top-7-dia-diem-du-lich-ha-tinh">
  Chi tiết <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
</article>

<article className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group ${activeFilter === 'all' || activeFilter === 'ev' ? '' : 'hidden'}`}>
<div>
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Modern electric green and white taxi car fleet driving smoothly along a clean wide boulevard in Ha Tinh city, zero emission smart electric vehicle transport with Vietnamese cityscape background" src="/images/23.jpg" />
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#008744] text-on-primary font-label-sm text-label-sm">Dịch Vụ Xe Điện</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
<span className="">20/10/2025</span>
<span className="">•</span>
<span className="">4 phút đọc</span>
</div>
<h4 className="font-title text-title text-on-surface group-hover:text-[#008744] transition-colors leading-snug">
  <Link href="/tin-tuc/taxi-dien-vinfast-ha-tinh">
    Tại sao nên chọn dịch vụ taxi điện thông minh VinFast khi di chuyển tại TP Hà Tĩnh &amp; Kỳ Anh?
  </Link>
</h4>
<p className="font-body-sm text-body-sm text-secondary line-clamp-3 leading-relaxed">
  Không mùi xăng xe, vận hành êm ái, hệ thống điều hòa kháng khuẩn và cước phí tiết kiệm minh bạch. Taxi điện xanh mang lại trải nghiệm du lịch văn minh, bảo vệ môi trường biển miền Trung.
</p>
</div>
</div>
<div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-surface-container">
<span className="font-label-sm text-label-sm text-[#008744] font-semibold">Xu hướng xe xanh</span>
<Link className="text-[#00a651] hover:text-[#008744] font-label-md text-label-md flex items-center gap-1 font-bold" href="/tin-tuc/taxi-dien-vinfast-ha-tinh">
  Chi tiết <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
</article>

<article className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group ${activeFilter === 'all' || activeFilter === 'guide' ? '' : 'hidden'}`}>
<div>
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Interior view of a clean premium automobile passenger seat with water bottles, tissues, and soft lighting, professional patient transfer and caring road trip service in Vietnam" src="/images/24.jpg" />
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#00a651] text-on-primary font-label-sm text-label-sm">Kinh Nghiệm Đi Lại</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
<span className="">18/10/2025</span>
<span className="">•</span>
<span className="">6 phút đọc</span>
</div>
<h4 className="font-title text-title text-on-surface group-hover:text-[#008744] transition-colors leading-snug">
  <Link href="/tin-tuc/tiet-kiem-chi-phi-taxi-kham-benh-vinh">
    Bí quyết tiết kiệm đến 50% chi phí taxi đường dài đi khám bệnh tại Vinh &amp; Hà Nội
  </Link>
</h4>
<p className="font-body-sm text-body-sm text-secondary line-clamp-3 leading-relaxed">
  Kinh nghiệm sử dụng gói xe tiện chuyến kết hợp khứ hồi trong ngày. Hướng dẫn đặt xe có hỗ trợ người cao tuổi, chờ khám miễn phí giờ đầu và xe đón tận cổng bệnh viện trung ương.
</p>
</div>
</div>
<div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-surface-container">
<span className="font-label-sm text-label-sm text-[#008744] font-semibold">Tiết kiệm chi phí</span>
<Link className="text-[#00a651] hover:text-[#008744] font-label-md text-label-md flex items-center gap-1 font-bold" href="/tin-tuc/tiet-kiem-chi-phi-taxi-kham-benh-vinh">
  Chi tiết <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
</article>

<article className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group ${activeFilter === 'all' || activeFilter === 'guide' ? '' : 'hidden'}`}>
<div>
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Fleet of black luxury executive passenger cars parked near Vung Ang Economic Zone industrial entrance, professional corporate transportation setup under clear daylight" src="/images/25.jpg" />
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm">Doanh Nghiệp &amp; Hợp Đồng</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
<span className="">15/10/2025</span>
<span className="">•</span>
<span className="">5 phút đọc</span>
</div>
<h4 className="font-title text-title text-on-surface group-hover:text-[#008744] transition-colors leading-snug">
  <Link href="/tin-tuc/thue-xe-hop-dong-kkt-vung-ang">
    Dịch vụ thuê xe hợp đồng đón rước chuyên gia KKT Vũng Áng: Chuẩn mực &amp; Hóa đơn VAT
  </Link>
</h4>
<p className="font-body-sm text-body-sm text-secondary line-clamp-3 leading-relaxed">
  Giải pháp chuyên nghiệp dành cho các nhà máy, tập đoàn FDI tại Thị xã Kỳ Anh: Đội xe 7 chỗ và 16 chỗ đời mới, lái xe giao tiếp lịch sự, cam kết đúng lịch trình ca trực và thanh toán linh hoạt.
</p>
</div>
</div>
<div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-surface-container">
<span className="font-label-sm text-label-sm text-[#008744] font-semibold">Đối tác KKT Vũng Áng</span>
<Link className="text-[#00a651] hover:text-[#008744] font-label-md text-label-md flex items-center gap-1 font-bold" href="/tin-tuc/thue-xe-hop-dong-kkt-vung-ang">
  Chi tiết <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
</article>

<article className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group ${activeFilter === 'all' || activeFilter === 'guide' ? '' : 'hidden'}`}>
<div>
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Warm and respectful Vietnamese taxi driver in clean collared uniform greeting passengers with gentle bow, sunny morning in Ha Tinh city, safe and hospitable transport culture" src="/images/26.jpg" />
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#00a651] text-on-primary font-label-sm text-label-sm">Văn Hóa Phục Vụ</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
<span className="">12/10/2025</span>
<span className="">•</span>
<span className="">4 phút đọc</span>
</div>
<h4 className="font-title text-title text-on-surface group-hover:text-[#008744] transition-colors leading-snug">
  <Link href="/tin-tuc/quy-chuan-an-toan-tai-xe">
    Quy chuẩn an toàn và văn hóa phục vụ của đội ngũ tài xế bản địa Lữ Khách Hà Tĩnh
  </Link>
</h4>
<p className="font-body-sm text-body-sm text-secondary line-clamp-3 leading-relaxed">
  Chúng tôi đào tạo tài xế không chỉ về kỹ năng lái xe đường đèo dốc ven biển an toàn mà còn là sự ân cần, trung thực, luôn trả lại đồ đạc bỏ quên cho hành khách trong vòng 30 phút.
</p>
</div>
</div>
<div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-surface-container">
<span className="font-label-sm text-label-sm text-[#008744] font-semibold">Tận tâm phục vụ</span>
<Link className="text-[#00a651] hover:text-[#008744] font-label-md text-label-md flex items-center gap-1 font-bold" href="/tin-tuc/quy-chuan-an-toan-tai-xe">
  Chi tiết <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
</article>

<article className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group ${activeFilter === 'all' || activeFilter === 'promo' ? '' : 'hidden'}`}>
<div>
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Festive family reunion arriving by comfortable family SUV taxi at rural hometown courtyard in central Vietnam, warm natural light, luggage being unloaded happily" src="/images/27.jpg" />
<span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm">Khuyến Mãi Đặc Biệt</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
<span className="">10/10/2025</span>
<span className="">•</span>
<span className="">3 phút đọc</span>
</div>
<h4 className="font-title text-title text-on-surface group-hover:text-[#008744] transition-colors leading-snug">
  <Link href="/tin-tuc/uu-dai-mua-le-hoi-giam-10-phan-tram">
    Ưu đãi mùa lễ hội: Giảm ngay 10% cước taxi đi chùa và về quê sum họp gia đình
  </Link>
</h4>
<p className="font-body-sm text-body-sm text-secondary line-clamp-3 leading-relaxed">
  Nhân dịp cao điểm lễ hội và du lịch tâm linh cuối năm, Lữ Khách Hà Tĩnh triển khai chương trình tri ân bà con quê hương: Tặng mã giảm giá 10% cho các cuốc xe khứ hồi đặt trước 12 tiếng.
</p>
</div>
</div>
<div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-surface-container">
<span className="font-label-sm text-label-sm text-[#008744] font-semibold">Voucher giảm giá</span>
<Link className="text-[#00a651] hover:text-[#008744] font-label-md text-label-md flex items-center gap-1 font-bold" href="/tin-tuc/uu-dai-mua-le-hoi-giam-10-phan-tram">
  Chi tiết <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</Link>
</div>
</article>
</div>

<div className="pt-8 flex items-center justify-center gap-2">
<button className="w-10 h-10 rounded-lg bg-surface-container text-secondary flex items-center justify-center hover:bg-surface-container-high transition-colors disabled:opacity-40" disabled>
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-lg bg-[#00a651] text-on-primary font-bold shadow-sm">1</button>
<button className="w-10 h-10 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-[#e8f8f0] hover:text-[#008744] font-semibold transition-colors">2</button>
<button className="w-10 h-10 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-[#e8f8f0] hover:text-[#008744] font-semibold transition-colors">3</button>
<span className="px-2 text-outline">...</span>
<button className="w-10 h-10 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-[#e8f8f0] hover:text-[#008744] font-semibold transition-colors">8</button>
<button className="w-10 h-10 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>

<aside className="lg:col-span-4 space-y-6">

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border-t-4 border-[#00a651] space-y-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#e8f8f0] text-[#008744] flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">local_taxi</span>
</div>
<div>
<h4 className="font-title text-title text-primary font-bold">Đặt Xe Nhanh Trong 5 Phút</h4>
<p className="font-body-sm text-body-sm text-secondary">Tài xế bản địa đón tận nơi 24/7</p>
</div>
</div>
<form className="space-y-3 pt-2" onSubmit={handleSidebarSubmit}>
  <div className="relative">
    <span className="material-symbols-outlined absolute left-3 top-3 text-[#00a651] text-[18px]">trip_origin</span>
    <input
      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-surface text-body-sm font-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-[#00a651]"
      placeholder="Điểm đón (Ví dụ: TP Hà Tĩnh, Can Lộc...)"
      required
      type="text"
      value={sidebarForm.pickup}
      onChange={(e) => setSidebarForm({ ...sidebarForm, pickup: e.target.value })}
    />
  </div>
  <div className="relative">
    <span className="material-symbols-outlined absolute left-3 top-3 text-primary text-[18px]">location_on</span>
    <input
      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-surface text-body-sm font-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-[#00a651]"
      placeholder="Điểm đến (Sân bay Vinh, Hương Tích...)"
      required
      type="text"
      value={sidebarForm.destination}
      onChange={(e) => setSidebarForm({ ...sidebarForm, destination: e.target.value })}
    />
  </div>
  <div className="relative">
    <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-[18px]">call</span>
    <input
      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-surface text-body-sm font-body-sm text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-[#00a651]"
      placeholder="Số điện thoại của bạn (*)"
      required
      type="tel"
      value={sidebarForm.phone}
      onChange={(e) => setSidebarForm({ ...sidebarForm, phone: e.target.value })}
    />
  </div>
  <div className="grid grid-cols-2 gap-2 pt-1 font-label-sm text-label-sm">
    <label className="flex items-center gap-2 p-2 rounded-lg bg-surface cursor-pointer hover:bg-[#e8f8f0]">
      <input
        checked={sidebarForm.carType === "Xe 4 - 5 chỗ"}
        onChange={() => setSidebarForm({ ...sidebarForm, carType: "Xe 4 - 5 chỗ" })}
        className="accent-[#00a651]"
        name="sidebar_car_type"
        type="radio"
      />
      <span>Xe 4 - 5 chỗ</span>
    </label>
    <label className="flex items-center gap-2 p-2 rounded-lg bg-surface cursor-pointer hover:bg-[#e8f8f0]">
      <input
        checked={sidebarForm.carType === "Xe 7 chỗ rộng"}
        onChange={() => setSidebarForm({ ...sidebarForm, carType: "Xe 7 chỗ rộng" })}
        className="accent-[#00a651]"
        name="sidebar_car_type"
        type="radio"
      />
      <span>Xe 7 chỗ rộng</span>
    </label>
  </div>
  <button
    disabled={sidebarSubmitting}
    className="w-full py-3 rounded-xl bg-[#00a651] text-on-primary font-title text-title font-bold shadow-md hover:bg-[#008744] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
    type="submit"
  >
    {sidebarSubmitting ? (
      <>
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span>ĐANG GỬI YÊU CẦU...</span>
      </>
    ) : (
      <>
        <span className="material-symbols-outlined text-[20px]">hail</span>
        <span>GỌI XE NGAY</span>
      </>
    )}
  </button>

  {sidebarError && (
    <div className="p-2.5 bg-red-50 border border-red-200 text-red-600 rounded-lg text-center text-xs font-semibold">
      {sidebarError}
    </div>
  )}

  {sidebarSubmitted && (
    <div className="text-center text-xs text-[#008744] bg-[#e8f8f0] p-3 rounded-xl border border-[#00a651]/40 mt-2 space-y-1.5 shadow-sm animate-fade-in">
      <div className="font-bold flex items-center justify-center gap-1.5">
        <span className="material-symbols-outlined text-[18px]">check_circle</span>
        <span>Đặt xe thành công! Mã: <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#00a651]/30">#{sidebarCode}</span></span>
      </div>
      <div className="font-normal text-secondary text-[11px]">Tổng đài viên sẽ gọi xác nhận đón quý khách trong 1-3 phút.</div>
    </div>
  )}
</form>
</div>

<div className="bg-gradient-to-br from-[#008744] to-[#006d36] rounded-2xl p-6 text-on-primary shadow-lg relative overflow-hidden space-y-4"><div className="absolute -right-4 -bottom-4 w-28 h-28 bg-[#00a651]/20 rounded-full blur-xl pointer-events-none"></div><div className="flex items-center justify-between"><span className="px-3 py-1 rounded-full bg-white/20 font-label-sm text-label-sm text-on-primary font-bold">TƯ VẤN LỘ TRÌNH 24/7</span><span className="material-symbols-outlined text-white text-3xl animate-bounce">phone_in_talk</span></div><div><div className="font-body-sm text-body-sm text-white/80">Hotline Trực Ban Điều Phối Xe:</div><a className="font-display text-[30px] font-extrabold tracking-wide text-white block hover:underline" href="tel:0963726995">0963 726 995</a></div><p className="font-body-sm text-body-sm text-white/90 leading-relaxed">Nhận báo giá trọn gói không phát sinh chỉ sau 30 giây. Phục vụ xuyên suốt lễ, Tết tại tất cả các huyện thị Hà Tĩnh.</p><div className="pt-2 flex items-center gap-3"><a className="flex-1 py-2.5 rounded-lg bg-[#00a651] hover:bg-[#008744] text-on-primary text-center font-label-md text-label-md font-bold transition-colors shadow-sm" href="tel:0963726995">Gọi Trực Tiếp</a><a className="px-4 py-2.5 rounded-lg bg-white text-[#008744] text-center font-label-md text-label-md font-bold hover:bg-[#e8f8f0] transition-colors shadow-sm" href="https://zalo.me/0963726995" target="_blank">Zalo</a></div></div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm space-y-4">
<div className="flex items-center gap-2 pb-2 border-b border-surface-container">
<span className="material-symbols-outlined text-[#00a651]">trending_up</span>
<h4 className="font-title text-title text-primary font-bold">Bài Viết Xem Nhiều Nhất</h4>
</div>
<div className="space-y-4 divide-y divide-surface-container">

<article className="pt-3 first:pt-0 flex gap-3 group">
<span className="font-display text-headline-md font-extrabold text-[#00a651]/40 group-hover:text-[#00a651] transition-colors">01</span>
<div>
<Link className="font-label-md text-label-md text-on-surface group-hover:text-[#008744] transition-colors font-semibold line-clamp-2" href="/tin-tuc/kinh-nghiem-dat-taxi-san-bay-vinh">
  Kinh nghiệm đặt taxi trọn gói Hà Tĩnh đi Sân Bay Vinh: Giá rẻ, đúng giờ
</Link>
<span className="font-body-sm text-body-sm text-outline mt-1 block">3.420 lượt xem</span>
</div>
</article>

<article className="pt-3 flex gap-3 group">
<span className="font-display text-headline-md font-extrabold text-[#00a651]/40 group-hover:text-[#00a651] transition-colors">02</span>
<div>
<Link className="font-label-md text-label-md text-on-surface group-hover:text-[#008744] transition-colors font-semibold line-clamp-2" href="/tin-tuc/tiet-kiem-chi-phi-taxi-kham-benh-vinh">
  Bí quyết tiết kiệm đến 50% chi phí taxi đường dài đi khám bệnh tại Vinh &amp; Hà Nội
</Link>
<span className="font-body-sm text-body-sm text-outline mt-1 block">2.890 lượt xem</span>
</div>
</article>

<article className="pt-3 flex gap-3 group">
<span className="font-display text-headline-md font-extrabold text-[#00a651]/40 group-hover:text-[#00a651] transition-colors">03</span>
<div>
<Link className="font-label-md text-label-md text-on-surface group-hover:text-[#008744] transition-colors font-semibold line-clamp-2" href="/tin-tuc/top-7-dia-diem-du-lich-ha-tinh">
  Top 7 địa điểm du lịch tâm linh &amp; thắng cảnh nổi tiếng Hà Tĩnh nhất định phải đến
</Link>
<span className="font-body-sm text-body-sm text-outline mt-1 block">2.140 lượt xem</span>
</div>
</article>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm space-y-3">
<h4 className="font-title text-title text-primary font-bold">Trạm Xe Đón Nhanh 5-10 Phút</h4>
<div className="flex flex-wrap gap-2 font-label-sm text-label-sm">
<span className="px-3 py-1.5 rounded-lg bg-[#e8f8f0] text-[#008744]">TP Hà Tĩnh</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant">Nghi Xuân</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant">Thị Xã Hồng Lĩnh</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant">Can Lộc</span>
<span className="px-3 py-1.5 rounded-lg bg-[#e8f8f0] text-[#008744]">Thạch Hà</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant">Cẩm Xuyên</span>
<span className="px-3 py-1.5 rounded-lg bg-[#e8f8f0] text-[#008744]">Thị Xã Kỳ Anh</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant">Hương Khê</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant">Đức Thọ</span>
</div>
</div>
</aside>
</div>
</section>

<section className="w-full bg-[#e8f8f0] py-12 my-6">
<div className="max-w-5xl mx-auto px-6 lg:px-12">
<div className="bg-surface-container-lowest rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
<div className="space-y-2 max-w-md">
<div className="inline-flex items-center gap-1.5 text-[#008744] font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[16px]">mail</span>
<span className="">BẢN TIN KHUYẾN MÃI</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">
            Đăng Ký Nhận Mã Giảm Cước Taxi
          </h3>
<p className="font-body-md text-body-md text-secondary">
            Nhận thông báo ưu đãi lên tới 20% các tuyến sân bay và cẩm nang du lịch Hà Tĩnh mới nhất qua email/Zalo.
          </p>
</div>
<form className="w-full md:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); setEmailSubscribed(true); setTimeout(() => setEmailSubscribed(false), 4000); }}>
<input className="flex-1 px-4 py-3.5 rounded-xl bg-surface border border-[#00a651]/20 text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-[#00a651]" placeholder="Nhập số điện thoại hoặc email..." required type="text" />
<button className="px-6 py-3.5 rounded-xl bg-[#00a651] text-on-primary font-label-md text-label-md font-bold hover:bg-[#008744] transition-all whitespace-nowrap shadow-sm" type="submit">
            Đăng Ký Ngay
          </button>
</form>
</div>
</div>
</section>

<section className="w-full bg-gradient-to-r from-[#008744] to-[#00a651] text-on-primary py-12 relative overflow-hidden"><div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10"><div className="space-y-3 text-center lg:text-left"><span className="px-3.5 py-1 rounded-full bg-white/20 font-label-sm text-label-sm font-bold tracking-wide uppercase inline-block">Tổng Đài Đón Khách 24/7 Toàn Tỉnh</span><h2 className="font-headline-lg text-headline-lg font-extrabold leading-tight">Cần Xe Di Chuyển Ngay? Tài Xế Đón Quý Khách Chỉ Sau 5-10 Phút!</h2><p className="font-body-lg text-body-lg text-white/90 max-w-2xl">Cam kết xe đời mới sạch sẽ, không mùi, phục vụ đúng giờ với mức giá niêm yết trọn gói tiết kiệm nhất Hà Tĩnh.</p></div><div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"><a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#008744] font-title text-title font-extrabold shadow-lg hover:bg-surface-container transition-transform hover:scale-105 flex items-center justify-center gap-2" href="tel:0963726995"><span className="material-symbols-outlined text-2xl">call</span><span className="">0963 726 995</span></a><a className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#006d36] text-on-primary font-title text-title font-bold shadow hover:bg-[#008744] transition-all flex items-center justify-center gap-2" href="https://zalo.me/0963726995" target="_blank"><span className="material-symbols-outlined text-2xl">chat</span><span className="">Chat Zalo Đặt Lịch</span></a></div></div></section>
</div>
    </main>
  );
}
