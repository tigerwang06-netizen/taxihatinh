"use client";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { submitBooking, openZaloChat, copyBookingToClipboard, BookingPayload } from "@/lib/booking";

export default function DichVu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    serviceType: "Taxi 4 Chỗ Tiêu Chuẩn",
    pickupTime: "",
    pickup: "",
    destination: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastPayload, setLastPayload] = useState<BookingPayload | null>(null);

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      setErrorMessage("Vui lòng nhập số điện thoại liên hệ.");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");

    const payload: BookingPayload = {
      fullName: formData.fullName,
      phone: formData.phone,
      serviceType: formData.serviceType,
      pickupTime: formData.pickupTime,
      pickup: formData.pickup,
      destination: formData.destination,
      sourcePage: "Trang Dịch Vụ",
    };

    const res = await submitBooking(payload);

    setIsSubmitting(false);
    if (res.success) {
      setLastPayload(payload);
      setFormSubmitted(true);
      setBookingCode(res.bookingId);
      openZaloChat(payload, res.bookingId);
      setFormData({
        fullName: "",
        phone: "",
        serviceType: "Taxi 4 Chỗ Tiêu Chuẩn",
        pickupTime: "",
        pickup: "",
        destination: "",
      });
      setTimeout(() => setFormSubmitted(false), 25000);
    } else {
      setErrorMessage(res.error || "Gửi yêu cầu không thành công.");
    }
  };
  return (
    <main className="min-h-screen bg-white">
<div className="flex flex-col w-full">

<section className="relative w-full bg-[#e8f8f0]/40 overflow-hidden py-space-xl">
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

<nav className="flex items-center gap-2 mb-space-md text-body-sm font-body-sm text-[#008744]">
<a className="hover:text-primary transition-colors flex items-center gap-1 text-[#008744]" data-path="trang-chu" href="#">
<span className="material-symbols-outlined text-[16px]">home</span> Trang chủ
        </a>
<span className="opacity-40">/</span>
<span className="text-[#008744] font-semibold">Dịch vụ vận tải</span>
</nav>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-7 space-y-space-md">
<div className="inline-flex items-center gap-2 px-space-md py-space-xs rounded-full bg-[#e8f8f0] text-[#008744] font-label-sm text-label-sm uppercase tracking-wider border border-[#00a651]/20">
<span className="w-2 h-2 rounded-full bg-[#00a651] animate-pulse"></span>
            Hệ Thống Đội Xe Hùng Hậu 13 Huyện Thị Hà Tĩnh
          </div>
<h1 className="font-display text-display text-[#008744] leading-tight font-bold">
            HỆ THỐNG DỊCH VỤ VẬN TẢI HÀNH KHÁCH TOÀN DIỆN HÀ TĨNH
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Cung cấp giải pháp di chuyển linh hoạt, an toàn, chuẩn mực từ taxi gia đình, xe điện thông minh đến xe hợp đồng du lịch và đưa đón sân bay trọn gói. Phục vụ 24/7 với tác phong chuẩn mực.
          </p>
<div className="flex flex-wrap items-center gap-space-md pt-2">
<a className="inline-flex items-center justify-center gap-2 px-space-xl py-3 rounded-xl bg-[#00a651] text-white font-label-md text-label-md shadow-md hover:bg-[#008744] transition-all" href="tel:0963726995">
<span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
<span>Tổng Đài 24/7: 0963 726 995</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-xl bg-surface-container-highest text-[#008744] font-label-md text-label-md hover:bg-surface-container-high transition-all" href="#booking-section">
<span className="material-symbols-outlined text-[20px]">calendar_month</span>
<span>Đặt Lịch Trực Tuyến</span>
</a>
</div>

<div className="grid grid-cols-3 gap-space-md pt-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-[#e8f8f0]">
<div className="font-headline-lg text-headline-lg text-[#008744] font-bold">5 - 10'</div>
<div className="font-body-sm text-body-sm text-secondary">Đón xe nhanh toàn tỉnh</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-[#e8f8f0]">
<div className="font-headline-lg text-headline-lg text-[#008744] font-bold">100%</div>
<div className="font-body-sm text-body-sm text-secondary">Xe đời mới 2022 - 2025</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-[#e8f8f0]">
<div className="font-headline-lg text-headline-lg text-[#008744] font-bold">-40%</div>
<div className="font-body-sm text-body-sm text-secondary">Ưu đãi cước chuyến về</div>
</div>
</div>
</div>

<div className="lg:col-span-5 grid grid-cols-1 gap-space-md">
<div className="relative rounded-2xl overflow-hidden shadow-lg h-56 group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A modern luxury fleet of sedans, SUVs, and passenger vans parked in front of modern airport VIP terminal terminal building during golden hour sunset with clean tarmac, mountains, and commercial airplanes in background" src="/images/31.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a331c]/85 via-transparent to-transparent flex items-end p-space-md">
<div className="text-white">
<span className="font-label-sm text-label-sm uppercase bg-[#00a651] px-2 py-0.5 rounded font-semibold text-white">Đội xe chất lượng cao</span>
<p className="font-title text-title font-semibold mt-1">Đa dạng từ 4, 7 chỗ đến 45 chỗ đời mới</p>
</div>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-lg h-44 group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Professional private chauffeur in dark suit serving elegant female executive passenger inside ultra-luxury spacious sedan with cream diamond quilted leather seats, soft ambient LED cabin lighting, chilled bottled water, and high-end digital entertainment screens" src="/images/32.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a331c]/85 via-transparent to-transparent flex items-end p-space-md">
<div className="text-white">
<span className="font-label-sm text-label-sm uppercase bg-[#008744] px-2 py-0.5 rounded font-semibold text-white">Khoang khách hạng nhất</span>
<p className="font-title text-title font-semibold mt-1">Nước mát, khăn lạnh &amp; tài xế chuẩn phong cách</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-space-xl flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" id="service-filter-bar">
          {[
            { id: 'all', label: 'Tất Cả Dịch Vụ' },
            { id: 'taxi', label: 'Taxi Nhanh & Đường Dài' },
            { id: 'electric', label: 'Xe Điện Xanh' },
            { id: 'airport', label: 'Đưa Đón Sân Bay' },
            { id: 'charter', label: 'Xe Hợp Đồng & Tour' },
            { id: 'selfdrive', label: 'Thuê Xe Tự Lái' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`filter-btn px-space-md py-space-sm rounded-xl font-label-md text-label-md whitespace-nowrap transition-all shadow-sm cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#00a651] text-white font-semibold'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-[#e8f8f0] hover:text-[#008744]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4">
<div>
<div className="flex items-center gap-2 text-[#00a651] font-label-md text-label-md uppercase tracking-wider mb-1">
<span className="material-symbols-outlined text-[18px]">verified</span>
          Danh mục vận tải nòng cốt
        </div>
<h2 className="font-headline-lg text-headline-lg text-[#008744] font-bold">
          5 DỊCH VỤ CỐT LÕI HÀNG ĐẦU TẠI HÀ TĨNH
        </h2>
</div>
<p className="font-body-md text-body-md text-secondary max-w-md">
        Đáp ứng toàn bộ nhu cầu di chuyển nội đô, thăm khám bệnh viện, công tác liên tỉnh và hành hương du lịch với chi phí minh bạch tối ưu.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="service-grid">

<div className={`service-item bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 ${activeCategory === 'all' || activeCategory === 'taxi' ? '' : 'hidden'}`} data-category="taxi">
<div>
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-alt="Clean and polished Toyota Vios and Hyundai Accent sedans parked lined up in modern urban avenue under bright daylight, pristine condition ready for dispatch, taxi service in Vietnam" src="/images/33.jpg"/>
<div className="absolute top-3 left-3 bg-[#008744] text-white font-label-sm text-label-sm px-space-sm py-1 rounded-md shadow-sm">
              Phổ Biến Nhất
            </div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm text-[#008744] font-label-md text-label-md px-space-sm py-1 rounded-md shadow-sm font-bold">
              Từ 10.500đ / Km
            </div>
</div>
<div className="p-space-lg space-y-space-sm">
<h3 className="font-title text-title text-[#008744] font-bold">Taxi 4 Chỗ &amp; 7 Chỗ Đô Thị - Đường Dài</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Đội hình xe sedan và MPV tiện nghi: Toyota Vios, Hyundai Accent, Mitsubishi Xpander, Toyota Veloz. Phù hợp gia đình và công việc hàng ngày.
            </p>
<ul className="space-y-2 pt-2 border-t-0 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Giảm ngay 40% cước cho chiều về (2 chiều)</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Điều xe siêu tốc: 5-10 phút tại 13 huyện thị</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Khoang xe rộng thoáng, điều hòa 2 vùng mát sâu</span>
</li>
</ul>
</div>
</div>
<div className="p-space-lg pt-0">
<a className="w-full py-3 rounded-xl bg-[#00a651] text-white font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-[#008744] transition-all shadow-sm" href="#booking-section">
<span className="material-symbols-outlined text-[18px]">directions_car</span> Đặt Taxi Ngay
          </a>
</div>
</div>

<div className={`service-item bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 ${activeCategory === 'all' || activeCategory === 'electric' ? '' : 'hidden'}`} data-category="electric">
<div>
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-alt="Modern electric vehicle VinFast VF8 and VF e34 smart pure electric SUVs parked beside lush coastal highway with clean green landscape and clear blue skies, quiet premium clean energy mobility" src="/images/34.jpg"/>
<div className="absolute top-3 left-3 bg-[#e8f8f0] text-[#008744] font-label-sm text-label-sm px-space-sm py-1 rounded-md shadow-sm flex items-center gap-1 font-semibold border border-[#00a651]/20">
<span className="material-symbols-outlined text-[14px]">bolt</span> Xe Điện Xanh
            </div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm text-[#008744] font-label-md text-label-md px-space-sm py-1 rounded-md shadow-sm font-bold">
              Đồng giá thông minh
            </div>
</div>
<div className="p-space-lg space-y-space-sm">
<h3 className="font-title text-title text-[#008744] font-bold">Dịch Vụ Xe Điện Xanh VinFast</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Hệ thống xe điện thông minh VF 5 Plus, VF e34 và VF 8. Trải nghiệm hành trình tĩnh lặng, không mùi xăng xe, chống say xe tuyệt đối.
            </p>
<ul className="space-y-2 pt-2 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Tuyệt đối không mùi khói xăng, êm ái hàng đầu</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Công nghệ an toàn thông minh ADAS đa điểm</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Bảo vệ môi trường biển &amp; sinh thái Hà Tĩnh</span>
</li>
</ul>
</div>
</div>
<div className="p-space-lg pt-0">
<a className="w-full py-3 rounded-xl bg-[#00a651] text-white font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-[#008744] transition-all shadow-sm" href="#booking-section">
<span className="material-symbols-outlined text-[18px]">electric_car</span> Trải Nghiệm Xe Điện
          </a>
</div>
</div>

<div className={`service-item bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 ${activeCategory === 'all' || activeCategory === 'airport' ? '' : 'hidden'}`} data-category="airport">
<div>
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-alt="Airport transfer scene at Vinh International Airport terminal driveway with passenger unloading luggage with uniformed chauffeur, modern luxury passenger transport at arrival hall" src="/images/35.jpg"/>
<div className="absolute top-3 left-3 bg-[#008744] text-white font-label-sm text-label-sm px-space-sm py-1 rounded-md shadow-sm">
              Đúng Giờ 100%
            </div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm text-[#008744] font-label-md text-label-md px-space-sm py-1 rounded-md shadow-sm font-bold">
              Trọn gói từ 450.000đ
            </div>
</div>
<div className="p-space-lg space-y-space-sm">
<h3 className="font-title text-title text-[#008744] font-bold">Đưa Đón Sân Bay Vinh ⇄ TP Hà Tĩnh &amp; Huyện</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Tuyến chuyên biệt kết nối Cảng hàng không Quốc tế Vinh đi TP. Hà Tĩnh, Hồng Lĩnh, Cẩm Xuyên, Thạch Hà, Can Lộc, Kỳ Anh trọn gói.
            </p>
<ul className="space-y-2 pt-2 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Theo dõi radar lịch trình chuyến bay, không lo delay</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Miễn phí 60 phút chờ đón tại sảnh ga đến</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Hỗ trợ khuân vác hành lý cẩn thận, an toàn</span>
</li>
</ul>
</div>
</div>
<div className="p-space-lg pt-0">
<a className="w-full py-3 rounded-xl bg-[#00a651] text-white font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-[#008744] transition-all shadow-sm" href="#booking-section">
<span className="material-symbols-outlined text-[18px]">flight</span> Đặt Xe Đi Sân Bay
          </a>
</div>
</div>

<div className={`service-item bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 ${activeCategory === 'all' || activeCategory === 'charter' ? '' : 'hidden'}`} data-category="charter">
<div>
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-alt="Luxury commercial tourist motor coach and modern 16-seater passenger van parked at scenic coastal landmark in Ha Tinh Vietnam, clear skies, clean exterior, tour excursion transport" src="/images/36.jpg"/>
<div className="absolute top-3 left-3 bg-[#008744] text-white font-label-sm text-label-sm px-space-sm py-1 rounded-md shadow-sm">
              16 - 29 - 45 Chỗ
            </div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm text-[#008744] font-label-md text-label-md px-space-sm py-1 rounded-md shadow-sm font-bold">
              Hợp đồng VAT đầy đủ
            </div>
</div>
<div className="p-space-lg space-y-space-sm">
<h3 className="font-title text-title text-[#008744] font-bold">Xe Hợp Đồng Du Lịch &amp; Hội Nghị</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Dàn xe Hyundai Solati, Ford Transit, Thaco Town, Universe phục vụ tour danh thắng Ngã ba Đồng Lộc, Chùa Hương Tích, biển Thiên Cầm, KKT Vũng Áng.
            </p>
<ul className="space-y-2 pt-2 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Phục vụ tour du lịch, đám cưới, công tác dự án</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Hợp đồng minh bạch, xuất hóa đơn VAT trong ngày</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Lái xe kinh nghiệm, am hiểu địa hình miền Trung</span>
</li>
</ul>
</div>
</div>
<div className="p-space-lg pt-0">
<a className="w-full py-3 rounded-xl bg-[#00a651] text-white font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-[#008744] transition-all shadow-sm" href="tel:0963726995">
<span className="material-symbols-outlined text-[18px]">airport_shuttle</span> Nhận Báo Giá Tour
          </a>
</div>
</div>

<div className={`service-item bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 ${activeCategory === 'all' || activeCategory === 'selfdrive' ? '' : 'hidden'}`} data-category="selfdrive">
<div>
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-alt="Key handover handover ceremony for a new luxury SUV crossover car rental in modern showroom in Vietnam, customer smiling receiving smart car keys" src="/images/37.jpg"/>
<div className="absolute top-3 left-3 bg-[#e8f8f0] text-[#008744] font-label-sm text-label-sm px-space-sm py-1 rounded-md shadow-sm font-semibold border border-[#00a651]/20">
              Thủ Tục 5 Phút
            </div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm text-[#008744] font-label-md text-label-md px-space-sm py-1 rounded-md shadow-sm font-bold">
              Đời mới 2023 - 2025
            </div>
</div>
<div className="p-space-lg space-y-space-sm">
<h3 className="font-title text-title text-[#008744] font-bold">Cho Thuê Xe Tự Lái 4 Chỗ &amp; 7 Chỗ</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Giải pháp chủ động cho doanh nhân và gia đình nghỉ dưỡng. Đa dạng mẫu mã: Kia K3, Mazda CX-5, Hyundai Tucson, Ford Everest, Xpander Cross.
            </p>
<ul className="space-y-2 pt-2 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Giao và nhận xe tận nơi theo yêu cầu tại TP Hà Tĩnh</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Thủ tục linh hoạt: CCCD gắn chip và GPLX</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Bảo dưỡng chính hãng định kỳ, bảo hiểm vật chất 2 chiều</span>
</li>
</ul>
</div>
</div>
<div className="p-space-lg pt-0">
<a className="w-full py-3 rounded-xl bg-[#00a651] text-white font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-[#008744] transition-all shadow-sm" href="tel:0963726995">
<span className="material-symbols-outlined text-[18px]">key</span> Đăng Ký Thuê Xe Tự Lái
          </a>
</div>
</div>

<div className={`service-item bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 ${activeCategory === 'all' || activeCategory === 'taxi' ? '' : 'hidden'}`} data-category="taxi">
<div>
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-alt="Careful taxi driver opening car door gently assisting senior passenger in sunny morning outside modern regional medical center hospital building, supportive polite service" src="/images/38.jpg"/>
<div className="absolute top-3 left-3 bg-[#e8f8f0] text-[#008744] font-label-sm text-label-sm px-space-sm py-1 rounded-md shadow-sm font-semibold border border-[#00a651]/20">
              Phục Vụ Tận Tâm
            </div>
<div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm text-[#008744] font-label-md text-label-md px-space-sm py-1 rounded-md shadow-sm font-bold">
              Ưu tiên điều xe gấp
            </div>
</div>
<div className="p-space-lg space-y-space-sm">
<h3 className="font-title text-title text-[#008744] font-bold">Chuyến Đi Thăm Khám &amp; Cấp Thiết</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Tuyến cố định đưa đón bệnh nhân thăm khám tại BV Đa khoa tỉnh Hà Tĩnh, BV Hữu nghị Đa khoa Nghệ An, các bệnh viện trung ương tại Hà Nội.
            </p>
<ul className="space-y-2 pt-2 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Tài xế kiên nhẫn, hỗ trợ người cao tuổi chu đáo</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Chờ đợi miễn phí trong suốt thời gian khám bệnh</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[18px]">check_circle</span>
<span>Đưa đón tận cửa nhà và cửa phòng khám</span>
</li>
</ul>
</div>
</div>
<div className="p-space-lg pt-0">
<a className="w-full py-3 rounded-xl bg-[#00a651] text-white font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-[#008744] transition-all shadow-sm" href="tel:0963726995">
<span className="material-symbols-outlined text-[18px]">emergency</span> Đặt Xe Khám Bệnh
          </a>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-space-xl">
<span className="font-label-md text-label-md text-[#00a651] uppercase tracking-wider font-semibold">Minh bạch - Chuẩn mực - Không phí ẩn</span>
<h2 className="font-headline-lg text-headline-lg text-[#008744] font-bold mt-1">
          BẢNG GIÁ THAM KHẢO CƯỚC PHÍ NIÊM YẾT
        </h2>
<p className="font-body-md text-body-md text-secondary mt-2">
          Áp dụng thống nhất trên toàn địa bàn Hà Tĩnh. Cước phí hiển thị rõ ràng trên đồng hồ điện tử và báo giá trước chuyến đi.
        </p>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-outline-variant/30">
<div className="overflow-x-auto no-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#008744] text-white font-title text-title">
<th className="py-4 px-6 font-semibold">Loại hình / Dòng xe</th>
<th className="py-4 px-6 font-semibold whitespace-nowrap">Giá mở cửa (0 - 1km)</th>
<th className="py-4 px-6 font-semibold whitespace-nowrap">Từ km 2 - 30</th>
<th className="py-4 px-6 font-semibold whitespace-nowrap">Từ km 31 trở đi</th>
<th className="py-4 px-6 font-semibold whitespace-nowrap">Chiều về (2 chiều)</th>
<th className="py-4 px-6 font-semibold text-center whitespace-nowrap">Đặt xe</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30 font-body-md text-body-md text-on-surface">
<tr className="hover:bg-[#e8f8f0]/40 transition-colors">
<td className="py-4 px-6 font-medium">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#00a651] text-[22px]">directions_car</span>
<div>
<div className="font-bold text-[#008744]">Taxi 4 Chỗ Nhỏ (Hatchback)</div>
<div className="font-body-sm text-body-sm text-secondary">Kia Morning, Hyundai i10</div>
</div>
</div>
</td>
<td className="py-4 px-6 font-semibold">10.000 đ</td>
<td className="py-4 px-6 font-semibold">12.000 đ/km</td>
<td className="py-4 px-6 font-semibold text-[#008744]">10.000 đ/km</td>
<td className="py-4 px-6 text-[#00a651] font-bold">Giảm 50%</td>
<td className="py-4 px-6 text-center">
<a className="inline-flex px-4 py-2 rounded-lg bg-[#00a651] text-white font-label-sm text-label-sm hover:bg-[#008744] transition-all shadow-sm" href="#booking-section">Đặt ngay</a>
</td>
</tr>
<tr className="hover:bg-[#e8f8f0]/40 transition-colors bg-surface-container-low/20">
<td className="py-4 px-6 font-medium">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#00a651] text-[22px]">local_taxi</span>
<div>
<div className="font-bold text-[#008744]">Taxi 4 Chỗ Sedan Tiêu Chuẩn</div>
<div className="font-body-sm text-body-sm text-secondary">Vios, Accent, City đời mới</div>
</div>
</div>
</td>
<td className="py-4 px-6 font-semibold">11.000 đ</td>
<td className="py-4 px-6 font-semibold">13.500 đ/km</td>
<td className="py-4 px-6 font-semibold text-[#008744]">11.000 đ/km</td>
<td className="py-4 px-6 text-[#00a651] font-bold">Giảm 45%</td>
<td className="py-4 px-6 text-center">
<a className="inline-flex px-4 py-2 rounded-lg bg-[#00a651] text-white font-label-sm text-label-sm hover:bg-[#008744] transition-all shadow-sm" href="#booking-section">Đặt ngay</a>
</td>
</tr>
<tr className="hover:bg-[#e8f8f0]/40 transition-colors">
<td className="py-4 px-6 font-medium">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#00a651] text-[22px]">directions_car</span>
<div>
<div className="font-bold text-[#008744]">Taxi 7 Chỗ Rộng Rãi (MPV / SUV)</div>
<div className="font-body-sm text-body-sm text-secondary">Xpander, Veloz, Innova, Fortuner</div>
</div>
</div>
</td>
<td className="py-4 px-6 font-semibold">12.000 đ</td>
<td className="py-4 px-6 font-semibold">15.000 đ/km</td>
<td className="py-4 px-6 font-semibold text-[#008744]">12.500 đ/km</td>
<td className="py-4 px-6 text-[#00a651] font-bold">Giảm 40%</td>
<td className="py-4 px-6 text-center">
<a className="inline-flex px-4 py-2 rounded-lg bg-[#00a651] text-white font-label-sm text-label-sm hover:bg-[#008744] transition-all shadow-sm" href="#booking-section">Đặt ngay</a>
</td>
</tr>
<tr className="hover:bg-[#e8f8f0]/40 transition-colors bg-[#e8f8f0]/30">
<td className="py-4 px-6 font-medium">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#00a651] text-[22px]">bolt</span>
<div>
<div className="font-bold text-[#008744]">Xe Điện Thông Minh VinFast</div>
<div className="font-body-sm text-body-sm text-secondary">VF 5 Plus, VF e34, VF 8 êm ái</div>
</div>
</div>
</td>
<td className="py-4 px-6 font-semibold">11.000 đ</td>
<td className="py-4 px-6 font-semibold">13.000 đ/km</td>
<td className="py-4 px-6 font-semibold text-[#008744]">10.500 đ/km</td>
<td className="py-4 px-6 text-[#00a651] font-bold">Giảm 45%</td>
<td className="py-4 px-6 text-center">
<a className="inline-flex px-4 py-2 rounded-lg bg-[#00a651] text-white font-label-sm text-label-sm hover:bg-[#008744] transition-all shadow-sm" href="#booking-section">Đặt ngay</a>
</td>
</tr>
<tr className="hover:bg-[#e8f8f0]/40 transition-colors">
<td className="py-4 px-6 font-medium">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#00a651] text-[22px]">flight_takeoff</span>
<div>
<div className="font-bold text-[#008744]">Đưa Đón Sân Bay Vinh Trọn Gói</div>
<div className="font-body-sm text-body-sm text-secondary">TP Hà Tĩnh ⇄ Ga Hàng Không Vinh</div>
</div>
</div>
</td>
<td className="py-4 px-6 font-semibold" colSpan={3}>
<span className="bg-[#e8f8f0] text-[#008744] border border-[#00a651]/20 px-3 py-1 rounded-full font-bold">Trọn gói từ 450.000 đ - 550.000 đ / lượt</span>
</td>
<td className="py-4 px-6 text-[#00a651] font-bold">Khứ hồi ưu đãi</td>
<td className="py-4 px-6 text-center">
<a className="inline-flex px-4 py-2 rounded-lg bg-[#00a651] text-white font-label-sm text-label-sm hover:bg-[#008744] transition-all shadow-sm" href="#booking-section">Đặt ngay</a>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-[#e8f8f0]/50 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4 text-body-sm font-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00a651] text-[20px]">info</span>
<span><strong>Lưu ý:</strong> Giá đã bao gồm phí cầu đường, nước khoáng Aquafina, khăn lạnh. Cam kết không phụ thu giờ cao điểm hay ngày mưa gió khi đặt trước.</span>
</div>
<div className="font-semibold text-[#008744]">Hỗ trợ hotline: 0963 726 995</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-md text-label-md text-[#00a651] uppercase tracking-wider font-semibold">Tiêu chuẩn phục vụ 5 sao</span>
<h2 className="font-headline-lg text-headline-lg text-[#008744] font-bold mt-1">
        4 CAM KẾT VÀNG &amp; ĐẶC QUYỀN HÀNH KHÁCH
      </h2>
<p className="font-body-md text-body-md text-secondary mt-2">
        Sự hài lòng và an toàn của quý khách là thước đo thành công cao nhất của Taxi Lữ Khách Hà Tĩnh.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-start border border-outline-variant/30">
<div className="w-14 h-14 rounded-2xl bg-[#e8f8f0] text-[#00a651] flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[32px]">directions_car_filled</span>
</div>
<h3 className="font-title text-title text-[#008744] font-bold mb-2">100% Xe Đời Mới</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Đội xe sản xuất từ năm 2022 - 2025. Vệ sinh hút bụi, khử khuẩn ozone sạch sẽ sau mỗi cuốc khách, mang lại không gian thoải mái thơm tho.
        </p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-start border border-outline-variant/30">
<div className="w-14 h-14 rounded-2xl bg-[#e8f8f0] text-[#00a651] flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[32px]">badge</span>
</div>
<h3 className="font-title text-title text-[#008744] font-bold mb-2">Tài Xế Chuẩn Mực</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          100% tài xế bản địa Hà Tĩnh lịch sự, giàu kinh nghiệm, không hút thuốc, kiểm tra nồng độ cồn nghiêm ngặt và tận tình khuân vác hành lý.
        </p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-start border border-outline-variant/30">
<div className="w-14 h-14 rounded-2xl bg-[#e8f8f0] text-[#00a651] flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[32px]">timer</span>
</div>
<h3 className="font-title text-title text-[#008744] font-bold mb-2">Đón Đúng Giờ 99.8%</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Tối ưu luồng điều phối theo GPS vệ tinh. Cam kết đón khách đúng giờ hẹn, không làm gián đoạn lịch trình chuyến bay hay cuộc họp công vụ.
        </p>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-start border border-outline-variant/30">
<div className="w-14 h-14 rounded-2xl bg-[#e8f8f0] text-[#00a651] flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[32px]">receipt_long</span>
</div>
<h3 className="font-title text-title text-[#008744] font-bold mb-2">Hóa Đơn VAT Điện Tử</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Hỗ trợ xuất hóa đơn tài chính điện tử đầy đủ, nhanh chóng trong vòng 24 giờ cho các cơ quan, đoàn công tác và công ty, doanh nghiệp.
        </p>
</div>
</div>
</section>

<section className="bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-md text-label-md text-[#00a651] uppercase tracking-wider font-semibold">Đơn giản - Tiện lợi - Rõ ràng</span>
<h2 className="font-headline-lg text-headline-lg text-[#008744] font-bold mt-1">
          QUY TRÌNH ĐẶT DỊCH VỤ 4 BƯỚC NHANH GỌN
        </h2>
<p className="font-body-md text-body-md text-secondary mt-2">
          Chỉ mất chưa đầy 30 giây để hoàn tất đặt xe và nhận thông tin tài xế phục vụ.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm relative flex flex-col justify-between border border-outline-variant/30">
<div>
<div className="w-10 h-10 rounded-full bg-[#00a651] text-white flex items-center justify-center font-headline-md text-headline-md font-bold mb-space-md shadow-sm">
              1
            </div>
<h4 className="font-title text-title text-[#008744] font-bold mb-2">Liên Hệ Đặt Chuyến</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Gọi Hotline <strong className="text-[#008744]">0963 726 995</strong>, nhắn Zalo hoặc điền biểu mẫu trực tiếp trên website.
            </p>
</div>
<div className="pt-4 flex items-center text-[#008744] font-label-sm text-label-sm gap-1">
<span className="material-symbols-outlined text-[16px]">call</span> Tiếp nhận 24/7
          </div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm relative flex flex-col justify-between border border-outline-variant/30">
<div>
<div className="w-10 h-10 rounded-full bg-[#00a651] text-white flex items-center justify-center font-headline-md text-headline-md font-bold mb-space-md shadow-sm">
              2
            </div>
<h4 className="font-title text-title text-[#008744] font-bold mb-2">Báo Giá Trọn Gói</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Điều hành viên xác nhận lộ trình, gửi thông báo giá niêm yết cố định không phát sinh phụ phí.
            </p>
</div>
<div className="pt-4 flex items-center text-[#008744] font-label-sm text-label-sm gap-1">
<span className="material-symbols-outlined text-[16px]">price_check</span> Cam kết không tăng giá
          </div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm relative flex flex-col justify-between border border-outline-variant/30">
<div>
<div className="w-10 h-10 rounded-full bg-[#00a651] text-white flex items-center justify-center font-headline-md text-headline-md font-bold mb-space-md shadow-sm">
              3
            </div>
<h4 className="font-title text-title text-[#008744] font-bold mb-2">Đón Tận Nơi Đúng Hẹn</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Tài xế chủ động gọi điện trước 5-10 phút, điều xe đến đúng điểm đón và hỗ trợ hành lý chu đáo.
            </p>
</div>
<div className="pt-4 flex items-center text-[#008744] font-label-sm text-label-sm gap-1">
<span className="material-symbols-outlined text-[16px]">location_on</span> Đón đúng điểm hẹn
          </div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm relative flex flex-col justify-between border border-outline-variant/30">
<div>
<div className="w-10 h-10 rounded-full bg-[#00a651] text-white flex items-center justify-center font-headline-md text-headline-md font-bold mb-space-md shadow-sm">
              4
            </div>
<h4 className="font-title text-title text-[#008744] font-bold mb-2">Hoàn Thành &amp; Đánh Giá</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Kết thúc chuyến đi an toàn, thanh toán linh hoạt qua tiền mặt hoặc chuyển khoản QR và hóa đơn VAT.
            </p>
</div>
<div className="pt-4 flex items-center text-[#008744] font-label-sm text-label-sm gap-1">
<span className="material-symbols-outlined text-[16px]">verified_user</span> Hài lòng 100%
          </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl" id="booking-section">
<div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-10 shadow-lg border border-[#e8f8f0]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

<div className="lg:col-span-5 space-y-space-md">
<div className="inline-flex items-center gap-2 px-space-md py-1 rounded-full bg-[#e8f8f0] text-[#008744] font-label-sm text-label-sm font-semibold border border-[#00a651]/20">
<span className="material-symbols-outlined text-[16px]">bolt</span> Đặt Xe Trực Tuyến Nhanh
          </div>
<h2 className="font-headline-lg text-headline-lg text-[#008744] font-bold">
            GỬI YÊU CẦU ĐẶT XE CHỈ TRONG 30 GIÂY
          </h2>
<p className="font-body-md text-body-md text-secondary">
            Nhập thông tin bên cạnh để tổng đài xếp xe gần nhất đón bạn sau 5-10 phút hoặc giữ lịch cho các chuyến đi sân bay, liên tỉnh.
          </p>
<div className="space-y-3 pt-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#e8f8f0] text-[#00a651] flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface">Báo giá minh bạch, tuyệt đối không chèo kéo</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#e8f8f0] text-[#00a651] flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-[18px]">security</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface">Bảo hiểm hành khách đầy đủ trong mọi hành trình</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#e8f8f0] text-[#00a651] flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-[18px]">support_agent</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface">Tổng đài viên trực máy 24/7 giải đáp mọi thắc mắc</span>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-[#f8fafb] border border-outline-variant/30 p-6 lg:p-8 rounded-2xl shadow-sm">
<form className="space-y-space-md" id="serviceBookingForm" onSubmit={handleServiceSubmit}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
    <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1">Họ và tên quý khách</label>
      <div className="relative">
        <input
          className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md border border-outline-variant/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-[#00a651]"
          placeholder="Nguyễn Văn A"
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>
    </div>
    <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1">Số điện thoại liên hệ (*)</label>
      <div className="relative">
        <input
          className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md border border-outline-variant/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-[#00a651]"
          placeholder="09xx xxx xxx"
          required
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
    <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1">Dịch vụ cần dùng</label>
      <select
        className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md border border-outline-variant/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-[#00a651]"
        value={formData.serviceType}
        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
      >
        <option value="Taxi 4 Chỗ Tiêu Chuẩn">Taxi 4 Chỗ Tiêu Chuẩn</option>
        <option value="Taxi 7 Chỗ MPV Rộng Rãi">Taxi 7 Chỗ MPV Rộng Rãi</option>
        <option value="Xe Điện VinFast Thông Minh">Xe Điện VinFast Thông Minh</option>
        <option value="Đưa Đón Sân Bay Vinh">Đưa Đón Sân Bay Vinh</option>
        <option value="Thuê Xe Hợp Đồng Du Lịch">Thuê Xe Hợp Đồng Du Lịch</option>
        <option value="Thuê Xe Tự Lái 4 - 7 Chỗ">Thuê Xe Tự Lái 4 - 7 Chỗ</option>
      </select>
    </div>
    <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1">Thời gian đón xe</label>
      <input
        className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md border border-outline-variant/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-[#00a651]"
        type="datetime-local"
        value={formData.pickupTime}
        onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
      />
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
    <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1">Điểm đón khách (Hà Tĩnh)</label>
      <div className="relative">
        <input
          className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md border border-outline-variant/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-[#00a651]"
          placeholder="Số nhà, đường, phường/xã..."
          type="text"
          value={formData.pickup}
          onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
        />
      </div>
    </div>
    <div>
      <label className="block font-label-md text-label-md text-on-surface mb-1">Điểm đến dự kiến</label>
      <div className="relative">
        <input
          className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md border border-outline-variant/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-[#00a651]"
          placeholder="Sân bay Vinh, Kỳ Anh, Thiên Cầm..."
          type="text"
          value={formData.destination}
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
        />
      </div>
    </div>
  </div>
  <button
    disabled={isSubmitting}
    className="w-full h-14 rounded-xl bg-[#00a651] hover:bg-[#008744] text-white font-headline-md text-headline-md font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
    type="submit"
  >
    {isSubmitting ? (
      <>
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span>ĐANG GỬI THÔNG TIN...</span>
      </>
    ) : (
      <>
        <span className="material-symbols-outlined text-[24px]">task_alt</span> XÁC NHẬN ĐẶT DỊCH VỤ
      </>
    )}
  </button>

  {errorMessage && (
    <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-center text-body-sm font-semibold">
      {errorMessage}
    </div>
  )}

  {formSubmitted && (
    <div className="p-4 sm:p-5 bg-[#e8f8f0] border-2 border-[#00a651] rounded-2xl text-center space-y-2.5 shadow-sm animate-fade-in">
      <div className="text-[#008744] font-extrabold text-base sm:text-lg flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-[24px]">check_circle</span>
        <span>Đặt dịch vụ thành công! Mã: <strong className="font-mono bg-white px-2 py-0.5 rounded border border-[#00a651]/30">#{bookingCode}</strong></span>
      </div>
      <p className="text-body-sm text-secondary max-w-lg mx-auto">
        Thông tin chuyến xe đã được ghi nhận. Hãy bấm nút dưới đây để gửi ngay qua <strong>Zalo 0963 726 995</strong> nhận xác nhận tài xế đón tức thì:
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
        <a
          href="https://zalo.me/0963726995"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => lastPayload && copyBookingToClipboard(lastPayload, bookingCode)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0068ff] hover:bg-[#0054cc] text-white font-bold text-sm shadow-md transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span>GỬI THÔNG TIN QUA ZALO (0963 726 995)</span>
        </a>
        <a
          href="tel:0963726995"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-gray-50 text-[#008744] font-bold text-sm border border-[#00a651]/40 shadow-sm transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span>Gọi 0963 726 995</span>
        </a>
      </div>
    </div>
  )}
</form>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 pb-space-xl w-full">
<div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#008744] to-[#00a651] text-white p-8 lg:p-12 shadow-xl">

<div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -left-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-lg">
<div className="space-y-space-sm text-center lg:text-left max-w-2xl">
<div className="inline-flex items-center gap-2 px-space-md py-1 rounded-full bg-white/20 text-white font-label-sm text-label-sm backdrop-blur-sm">
<span className="material-symbols-outlined text-[16px]">call_received</span> Phục Vụ 24/7 Toàn Tỉnh Hà Tĩnh
          </div>
<h3 className="font-headline-lg text-headline-lg font-bold">
            CẦN XE GẤP HAY LÊN LỊCH TRÌNH ĐƯỜNG DÀI? GỌI NGAY 0963 726 995
          </h3>
<p className="font-body-md text-body-md text-white/90">
            Tổng đài trực 24/7 cam kết điều xe nhanh nhất, tài xế niềm nở, đúng giờ và an toàn tuyệt đối trên mọi cung đường.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#008744] hover:bg-emerald-50 font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95" href="tel:0963726995">
<span className="material-symbols-outlined text-[20px]">call</span>
<span>GỌI NGAY 0963 726 995</span>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#e8f8f0] hover:bg-white text-[#008744] font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 border border-[#00a651]/20" href="https://zalo.me/0963726995" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">chat</span>
<span>Chat Zalo Báo Giá</span>
</a>
</div>
</div>
</div>
</section>


</div>
    </main>
  );
}
