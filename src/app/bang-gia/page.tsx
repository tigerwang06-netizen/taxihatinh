"use client";

import { useState } from "react";
import Link from "next/link";

const pickups = [
  { id: "tp-hatinh", label: "TP. Hà Tĩnh (Trung tâm)", offset: 0 },
  { id: "ky-anh", label: "Thị xã Kỳ Anh / Vũng Áng", offset: 60 },
  { id: "hong-linh", label: "Thị xã Hồng Lĩnh", offset: 30 },
  { id: "cam-xuyen", label: "Huyện Cẩm Xuyên (Thiên Cầm)", offset: 20 },
  { id: "thach-ha", label: "Huyện Thạch Hà", offset: 10 },
  { id: "can-loc", label: "Huyện Can Lộc (Đồng Lộc)", offset: 25 },
  { id: "nghi-xuan", label: "Huyện Nghi Xuân (Xuân Thành)", offset: 45 },
  { id: "huong-khe", label: "Huyện Hương Khê", offset: 45 },
  { id: "huong-son", label: "Huyện Hương Sơn (Cầu Treo)", offset: 65 },
  { id: "loc-ha", label: "Huyện Lộc Hà", offset: 18 },
];

const destinations = [
  { id: "san-bay-vinh", label: "Sân Bay Vinh (Nghệ An)", km: 55 },
  { id: "ga-vinh", label: "Ga Tàu Hỏa Vinh", km: 50 },
  { id: "bv-huu-nghi", label: "BV Hữu Nghị Đa Khoa Nghệ An", km: 52 },
  { id: "dong-loc", label: "Khu Di Tích Ngã Ba Đồng Lộc", km: 28 },
  { id: "huong-tich", label: "Chùa Hương Tích (Can Lộc)", km: 32 },
  { id: "thien-cam", label: "Bãi Biển Thiên Cầm", km: 25 },
  { id: "vung-ang", label: "Khu Kinh Tế Vũng Áng", km: 65 },
  { id: "ha-noi", label: "Hà Nội / Sân Bay Nội Bài", km: 350 },
];

const vehicles = [
  { id: "4-mini", title: "4 Chỗ Mini", sub: "i10, Morning", carName: "4 Chỗ Tiết Kiệm", rate: 10500, icon: "directions_car" },
  { id: "4-sedan", title: "4 Chỗ Sedan", sub: "Vios, Accent", carName: "4 Chỗ Sedan", rate: 12000, icon: "airport_shuttle" },
  { id: "7-mpv", title: "7 Chỗ MPV", sub: "Xpander, Veloz", carName: "7 Chỗ Rộng Rãi", rate: 14000, icon: "rv_hookup" },
  { id: "vinfast", title: "VinFast Xanh", sub: "VF5, VF e34", carName: "Xe Điện VinFast", rate: 12500, icon: "electric_car", badge: "ECO" },
  { id: "16-vip", title: "16 Chỗ VIP", sub: "Transit, Solati", carName: "Xe 16 Chỗ", rate: 19000, icon: "directions_bus" },
];

export default function BangGia() {
  const [pickup, setPickup] = useState("tp-hatinh");
  const [dest, setDest] = useState("san-bay-vinh");
  const [selectedVehicleIndex, setSelectedVehicleIndex] = useState(0);
  const [tripType, setTripType] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Compute realtime fare
  const currentPickup = pickups.find((p) => p.id === pickup) || pickups[0];
  const currentDest = destinations.find((d) => d.id === dest) || destinations[0];
  const currentVehicle = vehicles[selectedVehicleIndex];

  const baseKm = currentDest.km;
  const pickupOffset = currentPickup.offset;
  let totalKm = Math.round(Math.max(15, baseKm + (pickupOffset > 0 ? pickupOffset * 0.4 : 0)));

  let totalPrice = 0;
  let discountText = "Không áp dụng";
  let discountClass = "text-on-surface-variant font-medium";

  if (tripType === 1) {
    totalPrice = Math.round((totalKm * currentVehicle.rate) / 5000) * 5000;
  } else {
    const oneWay = totalKm * currentVehicle.rate;
    const returnWay = oneWay * 0.55;
    totalPrice = Math.round((oneWay + returnWay) / 5000) * 5000;
    const discountAmount = Math.round((oneWay * 0.45) / 1000) * 1000;
    discountText = `Giảm 45% lượt về (-${discountAmount.toLocaleString("vi-VN")}đ)`;
    discountClass = "text-primary font-bold";
  }

  return (
    <main className="min-h-screen bg-surface">

<section className="w-full bg-gradient-to-b from-[#e8f8f0]/70 via-[#f0faf4]/40 to-surface py-10 md:py-16">
<div className="max-w-7xl mx-auto px-4 md:px-8">

<nav className="flex items-center gap-2 text-xs font-label-md text-on-surface-variant mb-6">
<Link className="hover:text-primary transition-colors flex items-center gap-1" href="/">
<span className="material-symbols-outlined text-sm">home</span>
          Trang chủ
        </Link>
<span className="material-symbols-outlined text-xs text-outline-variant">chevron_right</span>
<span className="text-primary font-semibold">Bảng giá cước</span>
</nav>

<div className="max-w-4xl space-y-4">
<div className="inline-flex items-center gap-2 bg-[#e8f8f0] text-primary px-3.5 py-1.5 rounded-full text-xs font-label-sm uppercase tracking-wider shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          MINH BẠCH - NIÊM YẾT - KHÔNG PHỤ PHÍ PHÁT SINH
        </div>
<h1 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#0a331c] tracking-tight leading-tight uppercase font-extrabold">
          BẢNG GIÁ CƯỚC DỊCH VỤ TAXI & XE ĐƯỜNG DÀI HÀ TĨNH
        </h1>
<p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
          Cam kết giá niêm yết rõ ràng theo đồng hồ điện tử và báo giá trọn gói trước chuyến đi. Miễn phí chờ 60 phút, không tăng giá giờ cao điểm, giảm tới 40% - 50% cho chiều về.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 pt-8">
<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#e8f8f0] text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-2xl">speed</span>
</div>
<div className="space-y-1">
<div className="font-headline-lg text-2xl font-bold text-primary">10.000đ/Km</div>
<div className="font-label-md text-xs uppercase tracking-wide text-[#0a331c]">Giá Mở Cửa Tiết Kiệm Nhất</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Áp dụng cho dòng xe đô thị 4 chỗ nhỏ gọn di chuyển nội thị linh hoạt.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#e8f8f0] text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-2xl">published_with_changes</span>
</div>
<div className="space-y-1">
<div className="font-headline-lg text-2xl font-bold text-primary">Giảm 40% - 50%</div>
<div className="font-label-md text-xs uppercase tracking-wide text-[#0a331c]">Ưu Đãi Chiều Về Khứ Hồi</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tối ưu chi phí khi đi khám bệnh, công tác, viếng đền chùa trong ngày.</p>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#e8f8f0] text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-2xl">verified_user</span>
</div>
<div className="space-y-1">
<div className="font-headline-lg text-2xl font-bold text-primary">0đ Phụ Phí</div>
<div className="font-label-md text-xs uppercase tracking-wide text-[#0a331c]">Tuyệt Đối Không Phí Ẩn</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Không tăng giá giờ cao điểm, mưa bão hay đón đêm khuya. Báo giá trọn gói.</p>
</div>
</div>
</div>
</div>
</section>


      {/* 2. FARE CALCULATOR WIDGET (INTERACTIVE TOOL) */}
      <section className="w-full py-8 md:py-12 bg-surface" id="du-toan-cuoc">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-10 shadow-lg shadow-primary-container/5 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#e8f8f0]/60 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 bg-[#f0faf4]/60 p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined">calculate</span>
                </div>
                <div>
                  <h2 className="font-headline-md text-xl md:text-2xl text-[#0a331c] font-bold">
                    Dự Toán Cước Phí Tự Động Trong 3 Giây
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Nhập lộ trình để xem ngay số tiền chính xác, minh bạch theo km thực tế.
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-primary font-label-md bg-white px-3 py-1.5 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-sm">lock_clock</span>
                Cập nhật bảng giá ưu đãi mới nhất 2026
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Pickup & Destination Dual Input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-label-md text-xs text-on-surface flex items-center gap-1.5" htmlFor="calc-pickup">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
                      Điểm đón khách (Hà Tĩnh)
                    </label>
                    <div className="relative">
                      <select
                        className="w-full h-12 pl-10 pr-8 bg-surface-container-low rounded-xl text-body-md font-body-md text-on-surface focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer"
                        id="calc-pickup"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                      >
                        {pickups.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.label}
                          </option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute left-3 top-3.5 text-primary text-lg pointer-events-none">trip_origin</span>
                      <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant text-lg pointer-events-none">expand_more</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-label-md text-xs text-on-surface flex items-center gap-1.5" htmlFor="calc-dest">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e85d04] inline-block"></span>
                      Điểm đến mong muốn
                    </label>
                    <div className="relative">
                      <select
                        className="w-full h-12 pl-10 pr-8 bg-surface-container-low rounded-xl text-body-md font-body-md text-on-surface focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer"
                        id="calc-dest"
                        value={dest}
                        onChange={(e) => setDest(e.target.value)}
                      >
                        {destinations.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.label}
                          </option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#e85d04] text-lg pointer-events-none">location_on</span>
                      <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant text-lg pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>

                {/* Vehicle Type Selection */}
                <div className="space-y-2">
                  <label className="font-label-md text-xs text-on-surface">Chọn dòng xe phục vụ</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5" id="vehicle-selector">
                    {vehicles.map((v, idx) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVehicleIndex(idx)}
                        className={`vehicle-btn text-left p-3 rounded-xl transition-all flex flex-col justify-between cursor-pointer ${
                          selectedVehicleIndex === idx
                            ? 'bg-[#f0faf4] shadow-sm border border-primary/20'
                            : 'bg-surface-container-low hover:bg-[#f0faf4]/60'
                        } ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`material-symbols-outlined text-xl ${selectedVehicleIndex === idx ? 'text-primary' : 'text-on-surface-variant'}`}>
                            {v.icon}
                          </span>
                          {selectedVehicleIndex === idx && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                          {v.badge && (
                            <span className="text-[9px] bg-primary text-white px-1.5 py-0.5 rounded font-label-sm font-semibold">
                              {v.badge}
                            </span>
                          )}
                        </div>
                        <div>
                          <span className="font-label-md text-xs text-on-surface block leading-tight font-bold">{v.title}</span>
                          <span className="text-[11px] text-on-surface-variant font-body-sm">{v.sub}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trip Type: One Way / Round Trip */}
                <div className="space-y-2">
                  <label className="font-label-md text-xs text-on-surface">Hình thức di chuyển</label>
                  <div className="grid grid-cols-2 gap-3" id="trip-type-selector">
                    <label
                      onClick={() => setTripType(1)}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                        tripType === 1 ? 'bg-[#f0faf4] border border-primary/20' : 'bg-surface-container-low hover:bg-surface-container'
                      }`}
                    >
                      <input
                        type="radio"
                        name="trip_type"
                        value="1"
                        checked={tripType === 1}
                        onChange={() => setTripType(1)}
                        className="w-4 h-4 text-primary focus:ring-0 accent-primary cursor-pointer"
                      />
                      <div>
                        <span className="font-label-md text-xs text-on-surface block font-bold">Đi 1 Chiều</span>
                        <span className="text-[11px] text-on-surface-variant font-body-sm">Đưa đón tận nơi, nhanh chóng</span>
                      </div>
                    </label>

                    <label
                      onClick={() => setTripType(2)}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                        tripType === 2 ? 'bg-[#f0faf4] border border-primary/20' : 'bg-surface-container-low hover:bg-surface-container'
                      }`}
                    >
                      <input
                        type="radio"
                        name="trip_type"
                        value="2"
                        checked={tripType === 2}
                        onChange={() => setTripType(2)}
                        className="w-4 h-4 text-primary focus:ring-0 accent-primary cursor-pointer"
                      />
                      <div>
                        <span className="font-label-md text-xs text-primary block font-bold">2 Chiều Khứ Hồi</span>
                        <span className="text-[11px] text-primary/80 font-body-sm">Giảm ngay 40% - 50% chiều về</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Estimate Result Card (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#f0faf4] to-surface-container-low p-6 rounded-2xl flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 bg-white/70 px-3 py-2 rounded-lg">
                    <span className="font-label-md text-xs uppercase tracking-wide text-on-surface-variant">Lộ trình ước tính</span>
                    <span className="font-label-md text-sm font-bold text-[#0a331c] bg-white px-2.5 py-1 rounded-full shadow-sm">
                      ~ {totalKm} Km {tripType === 2 ? '(Khứ hồi)' : ''}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="font-label-md text-xs text-on-surface-variant block">Tổng cước phí ước tính:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                        {totalPrice.toLocaleString('vi-VN')}đ
                      </span>
                      <span className="text-xs text-on-surface-variant font-body-sm">(Trọn gói)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span>Đã bao gồm phí cầu đường BOT & 60p chờ miễn phí</span>
                    </div>
                  </div>

                  {/* Route details snippet */}
                  <div className="p-3 bg-white rounded-xl text-xs space-y-1.5 text-on-surface-variant">
                    <div className="flex justify-between">
                      <span>Dòng xe chọn:</span>
                      <span className="font-semibold text-on-surface">{vehicles[selectedVehicleIndex].carName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hình thức:</span>
                      <span className="font-semibold text-on-surface">{tripType === 2 ? '2 Chiều Khứ Hồi' : 'Đi 1 Chiều'}</span>
                    </div>
                    <div className="flex justify-between text-primary font-medium">
                      <span>Mức giảm chiều về:</span>
                      <span className={discountClass}>{discountText}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <a
                    className="w-full h-12 bg-[#0068ff] hover:bg-[#0054cc] text-white rounded-xl font-label-md text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                    href="https://zalo.me/0963726995"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      const msg = `🚕 ĐẶT XE THEO BẢNG GIÁ TAXI LỮ KHÁCH HÀ TĨNH\n━━━━━━━━━━━━━━━━━━\n📍 Điểm đón: ${currentPickup.label}\n🏁 Điểm đến: ${currentDest.label} (~${totalKm} km)\n🚗 Loại xe: ${currentVehicle.carName}\n🔄 Hình thức: ${tripType === 2 ? 'Khứ hồi 2 chiều' : 'Đi 1 chiều'}\n💰 Cước dự toán: ${totalPrice.toLocaleString('vi-VN')}đ (Trọn gói)\n━━━━━━━━━━━━━━━━━━\nXin vui lòng báo giá và xếp xe giúp tôi. Cảm ơn!`;
                      if (typeof navigator !== 'undefined' && navigator.clipboard) {
                        navigator.clipboard.writeText(msg).catch(() => {});
                      }
                    }}
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    <span>Gửi Lộ Trình Này Qua Zalo (0963 726 995)</span>
                  </a>
                  <a
                    className="w-full h-11 bg-primary hover:bg-[#008744] text-white rounded-xl font-label-md text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                    href="tel:0963726995"
                  >
                    <span className="material-symbols-outlined text-base">phone_in_talk</span>
                    <span>Gọi Tổng Đài Đặt Ngay: 0963 726 995</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



<section className="w-full py-12 md:py-16 bg-surface-container-low/50">
<div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
<div className="text-center max-w-3xl mx-auto space-y-3">
<span className="font-label-sm text-xs text-primary uppercase font-bold tracking-widest bg-[#e8f8f0] px-3.5 py-1.5 rounded-full inline-block">
          Niêm Yết Chi Tiết
        </span>
<h2 className="font-headline-lg text-2xl md:text-3xl font-extrabold text-[#0a331c]">
          BẢNG GIÁ CƯỚC TAXI THEO KILOMET TỪNG DÒNG XE
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Áp dụng cho mọi khách hàng gọi xe tại TP. Hà Tĩnh và toàn bộ các huyện thị trong tỉnh. Giá cước nhảy tự động theo đồng hồ kiểm định nhà nước.
        </p>
</div>

<div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
<div className="overflow-x-auto no-scrollbar">
<table className="w-full text-left text-body-md">
<thead>
<tr className="bg-[#008744] text-white font-label-md text-xs md:text-sm uppercase tracking-wider">
<th className="py-4 px-6 font-semibold">Dòng Xe / Loại Phương Tiện</th>
<th className="py-4 px-4 font-semibold text-center">Giá Mở Cửa (0 - 1km)</th>
<th className="py-4 px-4 font-semibold text-center">Từ Km 2 - 30</th>
<th className="py-4 px-4 font-semibold text-center">Từ Km 31 trở đi</th>
<th className="py-4 px-4 font-semibold text-center text-[#ffbc87]">Ưu Đãi Chiều Về</th>
<th className="py-4 px-6 font-semibold text-right">Hành Động</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-variant/40">

<tr className="hover:bg-[#f0faf4]/40 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#e8f8f0] text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-xl">directions_car</span>
</div>
<div>
<div className="font-title text-sm md:text-base font-bold text-[#0a331c]">Taxi 4 Chỗ Nhỏ Gọn</div>
<div className="font-body-sm text-xs text-on-surface-variant">Kia Morning, Hyundai Grand i10, Wigo</div>
</div>
</div>
</td>
<td className="py-5 px-4 text-center font-label-md text-sm text-on-surface">10.000đ</td>
<td className="py-5 px-4 text-center font-label-md text-sm text-on-surface">12.000đ/km</td>
<td className="py-5 px-4 text-center font-label-md text-sm font-bold text-primary">10.000đ/km</td>
<td className="py-5 px-4 text-center">
<span className="inline-block bg-[#e8f8f0] text-primary text-xs font-label-md font-bold px-2.5 py-1 rounded-full">Giảm 50%</span>
</td>
<td className="py-5 px-6 text-right">
<a className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-[#008744] text-white text-xs font-label-md rounded-lg shadow-sm transition-all" href="tel:0963726995">
<span>Đặt Xe</span>
<span className="material-symbols-outlined text-xs">call</span>
</a>
</td>
</tr>

<tr className="hover:bg-[#f0faf4]/40 transition-colors bg-surface-container-low/20">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#e8f8f0] text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-xl">airport_shuttle</span>
</div>
<div>
<div className="font-title text-sm md:text-base font-bold text-[#0a331c]">Taxi 4 Chỗ Sedan Tiêu Chuẩn</div>
<div className="font-body-sm text-xs text-on-surface-variant">Toyota Vios, Hyundai Accent, Honda City</div>
</div>
</div>
</td>
<td className="py-5 px-4 text-center font-label-md text-sm text-on-surface">11.000đ</td>
<td className="py-5 px-4 text-center font-label-md text-sm text-on-surface">13.500đ/km</td>
<td className="py-5 px-4 text-center font-label-md text-sm font-bold text-primary">11.000đ/km</td>
<td className="py-5 px-4 text-center">
<span className="inline-block bg-[#e8f8f0] text-primary text-xs font-label-md font-bold px-2.5 py-1 rounded-full">Giảm 45%</span>
</td>
<td className="py-5 px-6 text-right">
<a className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-[#008744] text-white text-xs font-label-md rounded-lg shadow-sm transition-all" href="tel:0963726995">
<span>Đặt Xe</span>
<span className="material-symbols-outlined text-xs">call</span>
</a>
</td>
</tr>

<tr className="hover:bg-[#f0faf4]/40 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#e8f8f0] text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-xl">rv_hookup</span>
</div>
<div>
<div className="font-title text-sm md:text-base font-bold text-[#0a331c]">Taxi 7 Chỗ Rộng Rãi MPV/SUV</div>
<div className="font-body-sm text-xs text-on-surface-variant">Mitsubishi Xpander, Toyota Veloz, Innova</div>
</div>
</div>
</td>
<td className="py-5 px-4 text-center font-label-md text-sm text-on-surface">12.000đ</td>
<td className="py-5 px-4 text-center font-label-md text-sm text-on-surface">15.000đ/km</td>
<td className="py-5 px-4 text-center font-label-md text-sm font-bold text-primary">12.500đ/km</td>
<td className="py-5 px-4 text-center">
<span className="inline-block bg-[#e8f8f0] text-primary text-xs font-label-md font-bold px-2.5 py-1 rounded-full">Giảm 40%</span>
</td>
<td className="py-5 px-6 text-right">
<a className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-[#008744] text-white text-xs font-label-md rounded-lg shadow-sm transition-all" href="tel:0963726995">
<span>Đặt Xe</span>
<span className="material-symbols-outlined text-xs">call</span>
</a>
</td>
</tr>

<tr className="hover:bg-[#f0faf4]/40 transition-colors bg-[#f0faf4]/30">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-xl">electric_car</span>
</div>
<div>
<div className="font-title text-sm md:text-base font-bold text-[#0a331c] flex items-center gap-2">
<span>Xe Điện Thông Minh VinFast</span>
<span className="text-[10px] bg-primary text-white font-semibold px-2 py-0.5 rounded-full">Xanh Êm Ái</span>
</div>
<div className="font-body-sm text-xs text-on-surface-variant">VinFast VF 5 Plus, VF e34, VF 8 VIP</div>
</div>
</div>
</td>
<td className="py-5 px-4 text-center font-label-md text-sm text-on-surface">11.000đ</td>
<td className="py-5 px-4 text-center font-label-md text-sm text-on-surface">13.000đ/km</td>
<td className="py-5 px-4 text-center font-label-md text-sm font-bold text-primary">10.500đ/km</td>
<td className="py-5 px-4 text-center">
<span className="inline-block bg-[#e8f8f0] text-primary text-xs font-label-md font-bold px-2.5 py-1 rounded-full">Giảm 45%</span>
</td>
<td className="py-5 px-6 text-right">
<a className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-[#008744] text-white text-xs font-label-md rounded-lg shadow-sm transition-all" href="tel:0963726995">
<span>Đặt Xe</span>
<span className="material-symbols-outlined text-xs">call</span>
</a>
</td>
</tr>

<tr className="hover:bg-[#f0faf4]/40 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#e8f8f0] text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-xl">directions_bus</span>
</div>
<div>
<div className="font-title text-sm md:text-base font-bold text-[#0a331c]">Xe 16 Chỗ Du Lịch & Hợp Đồng</div>
<div className="font-body-sm text-xs text-on-surface-variant">Ford Transit, Hyundai Solati đời mới</div>
</div>
</div>
</td>
<td className="py-5 px-4 text-center font-label-md text-sm text-on-surface">Thỏa thuận</td>
<td className="py-5 px-4 text-center font-label-md text-sm text-on-surface">14.000đ/km</td>
<td className="py-5 px-4 text-center font-label-md text-sm font-bold text-primary">13.000đ/km</td>
<td className="py-5 px-4 text-center">
<span className="inline-block bg-surface-container-high text-on-surface-variant text-xs font-label-md font-medium px-2.5 py-1 rounded-full">Ưu Đãi Hợp Đồng</span>
</td>
<td className="py-5 px-6 text-right">
<a className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-[#007038] text-white text-xs font-label-md rounded-lg shadow-sm transition-all" href="tel:0963726995">
<span>Báo Giá Nhanh</span>
<span className="material-symbols-outlined text-xs">description</span>
</a>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 md:p-5 bg-[#f0faf4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">verified</span>
<span>Đồng hồ tính cước chuẩn kiểm định Đo lường Chất lượng. Hỗ trợ xuất Hóa đơn điện tử VAT trong ngày cho doanh nghiệp.</span>
</div>
<div className="flex items-center gap-4 text-primary font-label-md shrink-0">
<span>* Giá chưa bao gồm vé phà đặc thù (nếu có)</span>
</div>
</div>
</div>
</div>
</section>


<section className="w-full py-12 md:py-16 bg-surface">
<div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="space-y-2">
<span className="font-label-sm text-xs text-primary uppercase font-bold tracking-widest bg-[#e8f8f0] px-3.5 py-1.5 rounded-full inline-block">
            Tuyến Đường Dài Cố Định
          </span>
<h2 className="font-headline-lg text-2xl md:text-3xl font-extrabold text-[#0a331c]">
            GIÁ TRỌN GÓI CÁC TUYẾN PHỔ BIẾN HÀ TĨNH
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Bao trọn chi phí BOT cầu đường, đón tiễn đúng giờ tại sảnh ga/sân bay và hỗ trợ bê xếp hành lý chu đáo.
          </p>
</div>
<div className="shrink-0">
<a className="inline-flex items-center gap-2 text-primary font-label-md text-sm hover:underline" href="tel:0963726995">
<span>Xem thêm 20+ tuyến liên tỉnh khác</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div className="space-y-4">
<div className="flex items-start justify-between">
<span className="bg-[#e8f8f0] text-primary text-xs font-label-md font-bold px-3 py-1 rounded-full">
                Sân Bay Vinh Đưa Đón
              </span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">flight_takeoff</span>
</div>
<div>
<h3 className="font-headline-md text-lg font-bold text-[#0a331c]">TP. Hà Tĩnh ⇄ Sân Bay Vinh</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Cự ly ~55 km | Đưa đón tận sảnh ga quốc nội & quốc tế</p>
</div>
<div className="p-4 bg-[#f0faf4] rounded-xl space-y-1">
<div className="text-xs text-on-surface-variant">Giá trọn gói 1 chiều từ:</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-2xl font-extrabold text-primary">450.000đ</span>
<span className="text-xs text-on-surface-variant">(Xe 4 chỗ)</span>
</div>
<div className="text-xs text-on-surface font-semibold pt-1">Xe 7 chỗ rộng rãi: 550.000đ</div>
</div>
<ul className="text-xs space-y-2 text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Miễn phí 100% khi chuyến bay bị delay, hoãn giờ</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Bao trọn vé cầu Bến Thủy & vé ra vào sân bay</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Nước suối, khăn lạnh, sạc điện thoại trên xe</span>
</li>
</ul>
</div>
<div className="pt-6">
<a className="w-full py-2.5 bg-primary hover:bg-[#008744] text-white rounded-xl font-label-md text-xs flex items-center justify-center gap-2 shadow-sm transition-colors" href="tel:0963726995">
<span className="material-symbols-outlined text-base">near_me</span>
<span>Đặt Tuyến Sân Bay Vinh</span>
</a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div className="space-y-4">
<div className="flex items-start justify-between">
<span className="bg-[#e8f8f0] text-primary text-xs font-label-md font-bold px-3 py-1 rounded-full">
                Tuyến Đường Dài VIP
              </span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">factory</span>
</div>
<div>
<h3 className="font-headline-md text-lg font-bold text-[#0a331c]">Kỳ Anh / Vũng Áng ⇄ Sân Bay Vinh</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Cự ly ~110 km | Phục vụ chuyên gia & khách công tác</p>
</div>
<div className="p-4 bg-[#f0faf4] rounded-xl space-y-1">
<div className="text-xs text-on-surface-variant">Giá trọn gói 1 chiều từ:</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-2xl font-extrabold text-primary">1.050.000đ</span>
<span className="text-xs text-on-surface-variant">(Trọn gói BOT)</span>
</div>
<div className="text-xs text-on-surface font-semibold pt-1">Giảm ngay 40% cho chiều về trong ngày</div>
</div>
<ul className="text-xs space-y-2 text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Bao trọn toàn bộ trạm thu phí cao tốc / quốc lộ</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Tài xế chuyên tuyến, chạy êm ái, xe đời mới</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Xuất hóa đơn VAT đầy đủ theo yêu cầu công ty</span>
</li>
</ul>
</div>
<div className="pt-6">
<a className="w-full py-2.5 bg-primary hover:bg-[#008744] text-white rounded-xl font-label-md text-xs flex items-center justify-center gap-2 shadow-sm transition-colors" href="tel:0963726995">
<span className="material-symbols-outlined text-base">near_me</span>
<span>Đặt Tuyến Vũng Áng - Vinh</span>
</a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 border border-primary/20 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div className="space-y-4">
<div className="flex items-start justify-between">
<span className="bg-[#e8f8f0] text-primary text-xs font-label-md font-bold px-3 py-1 rounded-full">
                Ưu Tiên Khám Chữa Bệnh
              </span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">medical_services</span>
</div>
<div>
<h3 className="font-headline-md text-lg font-bold text-[#0a331c]">Hà Tĩnh ⇄ BV Hữu Nghị / BV Sản Nhi</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Cự ly ~52 km | Hỗ trợ bệnh nhân, xe giảm xóc êm ái</p>
</div>
<div className="p-4 bg-[#f0faf4] rounded-xl space-y-1">
<div className="text-xs text-on-surface-variant">Giá trọn gói 1 chiều từ:</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-2xl font-extrabold text-primary">500.000đ</span>
<span className="text-xs text-on-surface-variant">(Xe 4 chỗ êm)</span>
</div>
<div className="text-xs text-primary font-semibold pt-1">Chiều về giảm 50% + Chờ khám miễn phí</div>
</div>
<ul className="text-xs space-y-2 text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Tài xế nhiệt tình, hỗ trợ đỡ người già & bệnh nhân</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Xe sạch sẽ, không mùi thuốc lá, điều hòa dịu nhẹ</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Tài xế kiên nhẫn chờ tại bãi xe viện đón về tận nhà</span>
</li>
</ul>
</div>
<div className="pt-6">
<a className="w-full py-2.5 bg-primary hover:bg-[#008744] text-white rounded-xl font-label-md text-xs flex items-center justify-center gap-2 shadow-sm transition-colors" href="tel:0963726995">
<span className="material-symbols-outlined text-base">near_me</span>
<span>Đặt Tuyến Khám Bệnh</span>
</a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div className="space-y-4">
<div className="flex items-start justify-between">
<span className="bg-[#e8f8f0] text-primary text-xs font-label-md font-bold px-3 py-1 rounded-full">
                Du Lịch Tâm Linh & Lễ Bái
              </span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">temple_buddhist</span>
</div>
<div>
<h3 className="font-headline-md text-lg font-bold text-[#0a331c]">Hà Tĩnh ⇄ Đồng Lộc / Hương Tích</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Gói trọn ngày hành hương, dâng hương hoa lễ bái</p>
</div>
<div className="p-4 bg-[#f0faf4] rounded-xl space-y-1">
<div className="text-xs text-on-surface-variant">Trọn gói khứ hồi trong ngày từ:</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-2xl font-extrabold text-primary">600.000đ</span>
<span className="text-xs text-on-surface-variant">(Khứ hồi 2 chiều)</span>
</div>
<div className="text-xs text-on-surface font-semibold pt-1">Bao gồm thời gian chờ dâng lễ</div>
</div>
<ul className="text-xs space-y-2 text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Chờ miễn phí không giới hạn trong thời gian làm lễ</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Tài xế am hiểu cung đường lễ bái và trạm dừng chân</span>
</li>
</ul>
</div>
<div className="pt-6">
<a className="w-full py-2.5 bg-primary hover:bg-[#008744] text-white rounded-xl font-label-md text-xs flex items-center justify-center gap-2 shadow-sm transition-colors" href="tel:0963726995">
<span className="material-symbols-outlined text-base">near_me</span>
<span>Đặt Tuyến Lễ Bái</span>
</a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div className="space-y-4">
<div className="flex items-start justify-between">
<span className="bg-[#e8f8f0] text-primary text-xs font-label-md font-bold px-3 py-1 rounded-full">
                Tắm Biển & Nghỉ Dưỡng
              </span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">beach_access</span>
</div>
<div>
<h3 className="font-headline-md text-lg font-bold text-[#0a331c]">TP. Hà Tĩnh ⇄ Bãi Biển Thiên Cầm</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Cự ly ~26 km | Phục vụ tắm biển, ăn hải sản về đêm</p>
</div>
<div className="p-4 bg-[#f0faf4] rounded-xl space-y-1">
<div className="text-xs text-on-surface-variant">Giá trọn gói 1 chiều từ:</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-2xl font-extrabold text-primary">350.000đ</span>
<span className="text-xs text-on-surface-variant">(Xe 4 chỗ)</span>
</div>
<div className="text-xs text-on-surface font-semibold pt-1">Khứ hồi chỉ từ 550.000đ (Chờ 3 tiếng)</div>
</div>
<ul className="text-xs space-y-2 text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Cốp xe rộng thoải mái chứa đồ bơi và hải sản đóng thùng</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Có mặt đón chỉ sau 10 - 15 phút gọi điện</span>
</li>
</ul>
</div>
<div className="pt-6">
<a className="w-full py-2.5 bg-primary hover:bg-[#008744] text-white rounded-xl font-label-md text-xs flex items-center justify-center gap-2 shadow-sm transition-colors" href="tel:0963726995">
<span className="material-symbols-outlined text-base">near_me</span>
<span>Đặt Xe Đi Thiên Cầm</span>
</a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
<div className="space-y-4">
<div className="flex items-start justify-between">
<span className="bg-[#e8f8f0] text-primary text-xs font-label-md font-bold px-3 py-1 rounded-full">
                Đường Dài Xuyên Tỉnh
              </span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">route</span>
</div>
<div>
<h3 className="font-headline-md text-lg font-bold text-[#0a331c]">Hà Tĩnh ⇄ Hà Nội / Nội Bài</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Cự ly ~350 km | Cao tốc Bắc - Nam êm ái, an toàn</p>
</div>
<div className="p-4 bg-[#f0faf4] rounded-xl space-y-1">
<div className="text-xs text-on-surface-variant">Giá trọn gói ưu đãi chỉ từ:</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-2xl font-extrabold text-primary">3.200.000đ</span>
<span className="text-xs text-on-surface-variant">(Xe riêng 100%)</span>
</div>
<div className="text-xs text-on-surface font-semibold pt-1">Bao trọn vé cao tốc Diễn Châu - Bãi Vọt</div>
</div>
<ul className="text-xs space-y-2 text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Xe chạy thẳng cao tốc, không ghép khách, đón tận cửa</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">check</span>
<span>Dừng nghỉ ngơi linh hoạt theo yêu cầu của gia đình</span>
</li>
</ul>
</div>
<div className="pt-6">
<a className="w-full py-2.5 bg-primary hover:bg-[#008744] text-white rounded-xl font-label-md text-xs flex items-center justify-center gap-2 shadow-sm transition-colors" href="tel:0963726995">
<span className="material-symbols-outlined text-base">near_me</span>
<span>Đặt Tuyến Hà Nội</span>
</a>
</div>
</div>
</div>
</div>
</section>


<section className="w-full py-12 md:py-16 bg-surface-container-low/50">
<div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
<div className="text-center max-w-3xl mx-auto space-y-3">
<span className="font-label-sm text-xs text-primary uppercase font-bold tracking-widest bg-[#e8f8f0] px-3.5 py-1.5 rounded-full inline-block">
          Dịch Vụ Mở Rộng
        </span>
<h2 className="font-headline-lg text-2xl md:text-3xl font-extrabold text-[#0a331c]">
          BẢNG GIÁ THUÊ XE THEO NGÀY & XE HOA CƯỚI HỎI
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Gói dịch vụ cao cấp, hỗ trợ xuất trình hợp đồng minh bạch và nhiều ưu đãi khi thuê dài ngày tại Hà Tĩnh.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-[#e8f8f0] text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">person_pin_circle</span>
</div>
<div>
<h3 className="font-title text-lg font-bold text-[#0a331c]">Thuê Xe Có Tài Xế (Theo Ngày)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Phù hợp công tác liên huyện, khảo sát dự án, về quê thăm họ hàng.</p>
</div>
<div className="bg-[#f0faf4] p-4 rounded-xl space-y-1">
<span className="text-xs text-on-surface-variant block">Chi phí trọn gói nội tỉnh:</span>
<span className="font-headline-lg text-2xl font-bold text-primary">1.200.000đ - 1.600.000đ</span>
<span className="text-xs text-on-surface-variant block">Thời gian: 8 tiếng / Định mức 100km</span>
</div>
<ul className="text-xs space-y-2 text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">done</span>
<span>Tài xế lịch sự, tác phong chuẩn mực, thuộc lòng địa phương</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">done</span>
<span>Xăng dầu tài xế tự túc, phụ trội chỉ 8.000đ/km</span>
</li>
</ul>
</div>
<a className="w-full py-2.5 bg-primary hover:bg-[#007038] text-white rounded-xl font-label-md text-xs text-center font-bold shadow-sm transition-all" href="tel:0963726995">
            Liên Hệ Thuê Có Tài
          </a>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-[#e8f8f0] text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">key</span>
</div>
<div>
<h3 className="font-title text-lg font-bold text-[#0a331c]">Thuê Xe Tự Lái Đời Mới</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Tự do trải nghiệm cùng gia đình, giao nhận xe tận nhà hoặc khách sạn.</p>
</div>
<div className="bg-[#f0faf4] p-4 rounded-xl space-y-1">
<span className="text-xs text-on-surface-variant block">Chỉ từ:</span>
<span className="font-headline-lg text-2xl font-bold text-primary">700.000đ - 1.100.000đ/ngày</span>
<span className="text-xs text-on-surface-variant block">Thủ tục nhanh gọn chỉ với CCCD gắn chip</span>
</div>
<ul className="text-xs space-y-2 text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">done</span>
<span>Xe đời mới 2023 - 2025 bảo dưỡng hãng định kỳ</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">done</span>
<span>Giao xe sạch sẽ thơm tho, đầy bình xăng hoặc pin</span>
</li>
</ul>
</div>
<a className="w-full py-2.5 bg-primary hover:bg-[#007038] text-white rounded-xl font-label-md text-xs text-center font-bold shadow-sm transition-all" href="tel:0963726995">
            Xem Xe Tự Lái Sẵn Có
          </a>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6">
<div className="space-y-4">
<div className="w-12 h-12 rounded-xl bg-[#e8f8f0] text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">favorite</span>
</div>
<div>
<h3 className="font-title text-lg font-bold text-[#0a331c]">Thuê Xe Hoa & Rước Dâu VIP</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Đội xe hoa sang trọng màu trắng tinh khôi, kết hoa tươi theo ý gia đình.</p>
</div>
<div className="bg-[#f0faf4] p-4 rounded-xl space-y-1">
<span className="text-xs text-on-surface-variant block">Gói trọn tiệc cưới từ:</span>
<span className="font-headline-lg text-2xl font-bold text-primary">1.500.000đ - 3.500.000đ</span>
<span className="text-xs text-on-surface-variant block">Bao gồm hoa lụa cao cấp hoặc thiết kế hoa tươi</span>
</div>
<ul className="text-xs space-y-2 text-on-surface-variant">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">done</span>
<span>Các dòng xe: Camry, Mazda 6, Mercedes-Benz, VinFast VF8</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-base">done</span>
<span>Tài xế thắt cà vạt, đúng giờ hoàng đạo 100%</span>
</li>
</ul>
</div>
<a className="w-full py-2.5 bg-primary hover:bg-[#007038] text-white rounded-xl font-label-md text-xs text-center font-bold shadow-sm transition-all" href="tel:0963726995">
            Tư Vấn Xe Hoa Cưới Hỏi
          </a>
</div>
</div>
</div>
</section>


<section className="w-full py-12 md:py-16 bg-surface">
<div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
<div className="text-center max-w-2xl mx-auto space-y-3">
<span className="font-label-sm text-xs text-primary uppercase font-bold tracking-widest bg-[#e8f8f0] px-3.5 py-1.5 rounded-full inline-block">
          Cam Kết Chất Lượng
        </span>
<h2 className="font-headline-lg text-2xl md:text-3xl font-extrabold text-[#0a331c]">
          4 CAM KẾT VÀNG KHI ĐẶT XE LỮ KHÁCH HÀ TĨNH
        </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl bg-surface-container-low hover:bg-[#f0faf4] transition-colors space-y-3">
<div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">price_check</span>
</div>
<h3 className="font-title text-base font-bold text-[#0a331c]">Minh Bạch Tuyệt Đối</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Báo giá trước chuyến đi hoặc hiển thị chính xác theo đồng hồ đo. Không vòi thêm tiền bồi dưỡng.</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container-low hover:bg-[#f0faf4] transition-colors space-y-3">
<div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">schedule</span>
</div>
<h3 className="font-title text-base font-bold text-[#0a331c]">Đón Đúng Giờ 99.8%</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Mạng lưới tài xế phủ kín 13 huyện thị, xe có mặt đón quý khách chỉ sau 5 đến 10 phút xác nhận.</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container-low hover:bg-[#f0faf4] transition-colors space-y-3">
<div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">savings</span>
</div>
<h3 className="font-title text-base font-bold text-[#0a331c]">Ưu Đãi Chiều Về 50%</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Khách đi khứ hồi luôn được hưởng mức chiết khấu từ 40% đến 50% cho chặng quay trở về.</p>
</div>
<div className="p-6 rounded-2xl bg-surface-container-low hover:bg-[#f0faf4] transition-colors space-y-3">
<div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
<span className="material-symbols-outlined text-2xl">receipt_long</span>
</div>
<h3 className="font-title text-base font-bold text-[#0a331c]">Hóa Đơn VAT Điện Tử</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cung cấp hóa đơn đỏ GTGT điện tử chuẩn chỉ, gửi trực tiếp về email kế toán công ty trong 2 giờ.</p>
</div>
</div>

<div className="bg-[#f0faf4] p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
<div className="space-y-1 text-center md:text-left">
<span className="font-title text-sm md:text-base font-bold text-[#0a331c] block">Quy định hủy chuyến & thời gian chờ</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block">Quý khách có thể hủy lịch trình miễn phí trước giờ xuất phát 30 phút mà không mất bất kỳ chi phí nào.</span>
</div>
<a className="px-6 py-3 bg-white text-primary font-label-md text-xs rounded-xl shadow-sm hover:shadow transition-all shrink-0" href="tel:0963726995">
          Chính Sách Hành Lý & Hủy Xe
        </a>
</div>
</div>
</section>


      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      <section className="w-full py-12 md:py-16 bg-surface-container-low/50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="font-label-sm text-xs text-primary uppercase font-bold tracking-widest bg-[#e8f8f0] px-3.5 py-1.5 rounded-full inline-block">
              Giải Đáp Thắc Mắc
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl font-extrabold text-[#0a331c]">
              CÂU HỎI THƯỜNG GẶP VỀ GIÁ CƯỚC TAXI
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tổng hợp những câu hỏi phổ biến nhất từ hành khách khi sử dụng dịch vụ tại Hà Tĩnh.
            </p>
          </div>
          <div className="space-y-3.5" id="faq-accordion">
            {[
              {
                q: "Cước phí taxi được tính như thế nào nếu đi quãng đường dài?",
                a: "Đối với quãng đường trên 30km, chúng tôi tự động áp dụng biểu phí đường dài ưu đãi chỉ từ 10.000đ/km (đối với xe 4 chỗ) hoặc báo giá trọn gói bao vé cầu đường trước khi khởi hành. Quý khách hoàn toàn chủ động biết trước số tiền cần thanh toán.",
              },
              {
                q: "Đi 2 chiều có được giảm giá không và thời gian chờ tính ra sao?",
                a: "Tất cả các chuyến đi 2 chiều khứ hồi có cự ly trên 25km/chiều đều được giảm từ 40% đến 50% cước phí cho chiều về. Taxi Lữ Khách miễn phí 60 phút chờ đầu tiên. Các giờ chờ tiếp theo tính ưu đãi 30.000đ - 50.000đ/giờ tùy dòng xe.",
              },
              {
                q: "Đặt xe đón tại sân bay Vinh có bị tính phí phụ nếu chuyến bay bị delay?",
                a: "Hoàn toàn KHÔNG. Tài xế của chúng tôi sẽ chủ động kiểm tra mã hiệu chuyến bay của quý khách trên hệ thống hàng không. Nếu máy bay bị delay, tài xế sẽ lùi giờ đón tương ứng mà không tính bất kỳ chi phí phát sinh nào.",
              },
              {
                q: "Tôi có nhận được hóa đơn đỏ VAT điện tử khi đi công tác không?",
                a: "Có. Taxi Lữ Khách Hà Tĩnh là đơn vị vận tải có pháp nhân đăng ký chuẩn nhà nước. Chúng tôi cung cấp hóa đơn điện tử VAT (thuế suất theo quy định) nhanh chóng qua email/Zalo của công ty bạn ngay trong ngày kết thúc chuyến đi.",
              },
            ].map((item, idx) => (
              <div key={idx} className="faq-item bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="faq-trigger w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-title text-base font-bold text-[#0a331c] focus:outline-none cursor-pointer"
                >
                  <span>{item.q}</span>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="faq-content px-6 pb-5 font-body-md text-body-md text-on-surface-variant border-t border-surface-variant/30 pt-3 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



<section className="w-full py-12 md:py-16 bg-surface">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="rounded-3xl bg-gradient-to-r from-[#008744] via-[#00a651] to-[#008744] p-8 md:p-12 text-white relative overflow-hidden shadow-xl shadow-primary/20">

<div className="absolute -right-16 -bottom-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute left-10 -top-10 w-48 h-48 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
<div className="space-y-3 max-w-2xl">
<span className="inline-block bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-label-sm font-semibold tracking-wide">
              TỔNG ĐÀI ĐIỀU PHỐI 24/7 TOÀN TỈNH
            </span>
<h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-tight tracking-tight">
              CẦN BÁO GIÁ CHUYẾN ĐI CỦA BẠN NGAY BÂY GIỜ?
            </h2>
<p className="font-body-lg text-body-md sm:text-body-lg text-white/90 leading-relaxed">
              Gọi trực tiếp tới số hotline tổng đài để nhận báo giá trọn gói ưu đãi nhất, cam kết xe có mặt đón quý khách sau 5 phút!
            </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
<a className="h-14 px-8 bg-white text-[#008744] hover:bg-surface rounded-full font-label-md text-base font-bold flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all" href="tel:0963726995">
<span className="material-symbols-outlined text-2xl">call</span>
<span>GỌI ĐIỆN BÁO GIÁ NGAY</span>
</a>
<a className="h-14 px-8 bg-transparent hover:bg-white/15 text-white border-2 border-white/80 rounded-full font-label-md text-base font-bold flex items-center justify-center gap-3 transition-all" href="https://zalo.me/0963726995" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-2xl">chat</span>
<span>CHAT ZALO NHẬN BÁO GIÁ</span>
</a>
</div>
</div>
</div>
</div>
</section>
    </main>
  );
}
