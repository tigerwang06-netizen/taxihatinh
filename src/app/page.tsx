"use client";
import { useState } from "react";
import Link from "next/link";
import { submitBooking } from "@/lib/booking";

export default function Home() {
  const [activeTab, setActiveTab] = useState("taxi");
  const [heroForm, setHeroForm] = useState({
    pickup: "TP. Hà Tĩnh",
    destination: "",
    phone: "",
    pickupTime: "",
    carType: "Tất cả xe",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingCode, setBookingCode] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroForm.phone.trim()) {
      setErrorMessage("Vui lòng nhập số điện thoại để tổng đài xếp xe.");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");

    const tabLabels: Record<string, string> = {
      taxi: "Taxi Đô Thị & Đường Dài",
      thuexe: "Thuê Xe Tự Lái",
      hopdong: "Xe Hợp Đồng Du Lịch",
    };

    const res = await submitBooking({
      pickup: heroForm.pickup,
      destination: heroForm.destination,
      phone: heroForm.phone,
      serviceType: tabLabels[activeTab] || "Taxi Đô Thị",
      carType: heroForm.carType,
      pickupTime: heroForm.pickupTime,
      sourcePage: `Trang Chủ - Hero (${tabLabels[activeTab]})`,
    });

    setIsSubmitting(false);
    if (res.success) {
      setFormSubmitted(true);
      setBookingCode(res.bookingId);
      setHeroForm({
        pickup: "TP. Hà Tĩnh",
        destination: "",
        phone: "",
        pickupTime: "",
        carType: "Tất cả xe",
      });
      setTimeout(() => setFormSubmitted(false), 9000);
    } else {
      setErrorMessage(res.error || "Gửi yêu cầu không thành công.");
    }
  };

  return (
    <>
<main className="min-h-screen bg-white">

<section className="relative bg-gradient-to-r from-emerald-50/70 via-white to-gray-100 pt-10 pb-28 border-b overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-bottom bg-no-repeat bg-cover pointer-events-none" ></div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-7 space-y-6">
<span className="inline-block bg-emerald-100 text-[#008f4c] px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
            Hãng Vận Tải Du Lịch Uy Tín Hà Tĩnh
          </span>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            DI CHUYỂN AN TOÀN <br/>
<span className="text-[#00a859]">MỌI LÚC – MỌI NƠI</span>
</h1>
<p className="text-gray-600 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
            Dịch vụ Taxi – Thuê xe tự lái – Xe hợp đồng chuyên nghiệp Hà Tĩnh.<br/>
<span className="font-semibold text-gray-700">Uy tín – An toàn – Tiện lợi – Phục vụ tận tâm</span> trên từng cây số.
          </p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
<div className="flex items-center gap-2.5 bg-white/90 p-2.5 rounded-xl border border-gray-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
<i className="fa-solid fa-shield text-xs"></i>
</div>
<div>
<div className="text-xs font-bold text-gray-800">An toàn</div>
<div className="text-[10px] text-gray-500">Đội xe chất lượng</div>
</div>
</div>
<div className="flex items-center gap-2.5 bg-white/90 p-2.5 rounded-xl border border-gray-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
<i className="fa-solid fa-tags text-xs"></i>
</div>
<div>
<div className="text-xs font-bold text-gray-800">Giá hợp lý</div>
<div className="text-[10px] text-gray-500">Báo giá minh bạch</div>
</div>
</div>
<div className="flex items-center gap-2.5 bg-white/90 p-2.5 rounded-xl border border-gray-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
<i className="fa-solid fa-clock text-xs"></i>
</div>
<div>
<div className="text-xs font-bold text-gray-800">Phục vụ 24/7</div>
<div className="text-[10px] text-gray-500">Gọi là có mặt</div>
</div>
</div>
<div className="flex items-center gap-2.5 bg-white/90 p-2.5 rounded-xl border border-gray-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
<i className="fa-solid fa-car-side text-xs"></i>
</div>
<div>
<div className="text-xs font-bold text-gray-800">Đội xe đa dạng</div>
<div className="text-[10px] text-gray-500">Từ 4 đến 45 chỗ</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative flex justify-center">
<div className="relative w-full max-w-lg">
<img alt="Taxi Lữ Khách Hà Tĩnh Xe Đời Mới" className="w-full object-contain filter drop-shadow-2xl hover:scale-102 transition duration-300" src="/images/3.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
<div className="bg-white rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden">

<div className="flex border-b border-gray-200 bg-gray-50/70 overflow-x-auto no-scrollbar">
<button 
    onClick={() => setActiveTab('taxi')}
    className={`flex-1 py-3 sm:py-3.5 px-3 sm:px-6 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap border-b-2 transition shrink-0 sm:shrink ${activeTab === 'taxi' ? 'text-[#00a859] border-[#00a859] bg-white' : 'text-gray-600 border-transparent hover:text-[#00a859] hover:bg-white'}`}
    type="button"
  >
<i className="fa-solid fa-taxi"></i> TAXI
        </button>
<button 
    onClick={() => setActiveTab('thuexe')}
    className={`flex-1 py-3 sm:py-3.5 px-3 sm:px-6 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap border-b-2 transition shrink-0 sm:shrink ${activeTab === 'thuexe' ? 'text-[#00a859] border-[#00a859] bg-white' : 'text-gray-600 border-transparent hover:text-[#00a859] hover:bg-white'}`}
    type="button"
  >
<i className="fa-solid fa-dharmachakra"></i> THUÊ XE TỰ LÁI
        </button>
<button 
    onClick={() => setActiveTab('hopdong')}
    className={`flex-1 py-3 sm:py-3.5 px-3 sm:px-6 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap border-b-2 transition shrink-0 sm:shrink ${activeTab === 'hopdong' ? 'text-[#00a859] border-[#00a859] bg-white' : 'text-gray-600 border-transparent hover:text-[#00a859] hover:bg-white'}`}
    type="button"
  >
<i className="fa-solid fa-van-shuttle"></i> XE HỢP ĐỒNG
        </button>
</div>


    <form className="p-4 sm:p-6" onSubmit={handleHeroSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        <div className="lg:col-span-1">
          <label className="block text-xs font-bold text-gray-700 mb-1">Điểm đón</label>
          <div className="relative">
            <input
              className="w-full text-xs rounded-lg border-gray-300 focus:border-[#00a859] focus:ring-[#00a859] py-2.5 pr-7 pl-3"
              placeholder={activeTab === 'taxi' ? 'TP. Hà Tĩnh...' : activeTab === 'thuexe' ? 'Điểm nhận xe...' : 'Điểm xuất phát...'}
              type="text"
              value={heroForm.pickup}
              onChange={(e) => setHeroForm({ ...heroForm, pickup: e.target.value })}
            />
            <i className="fa-solid fa-location-dot absolute right-2.5 top-3 text-emerald-600 text-xs"></i>
          </div>
        </div>

        <div className="lg:col-span-1">
          <label className="block text-xs font-bold text-gray-700 mb-1">Điểm đến</label>
          <div className="relative">
            <input
              className="w-full text-xs rounded-lg border-gray-300 focus:border-[#00a859] focus:ring-[#00a859] py-2.5 pr-7 pl-3"
              placeholder={activeTab === 'taxi' ? 'Sân bay Vinh, Kỳ Anh...' : activeTab === 'thuexe' ? 'Điểm trả xe...' : 'Lộ trình du lịch...'}
              type="text"
              value={heroForm.destination}
              onChange={(e) => setHeroForm({ ...heroForm, destination: e.target.value })}
            />
            <i className="fa-solid fa-location-crosshairs absolute right-2.5 top-3 text-emerald-600 text-xs"></i>
          </div>
        </div>

        <div className="lg:col-span-1">
          <label className="block text-xs font-bold text-gray-700 mb-1">Số điện thoại (*)</label>
          <div className="relative">
            <input
              className="w-full text-xs rounded-lg border-gray-300 focus:border-[#00a859] focus:ring-[#00a859] py-2.5 pr-7 pl-3"
              placeholder="09xx xxx xxx"
              required
              type="tel"
              value={heroForm.phone}
              onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
            />
            <i className="fa-solid fa-phone absolute right-2.5 top-3 text-emerald-600 text-xs"></i>
          </div>
        </div>

        <div className="lg:col-span-1">
          <label className="block text-xs font-bold text-gray-700 mb-1">Thời gian đón xe</label>
          <div className="relative">
            <input
              className="w-full text-xs rounded-lg border-gray-300 focus:border-[#00a859] focus:ring-[#00a859] py-2.5 px-3"
              type="datetime-local"
              value={heroForm.pickupTime}
              onChange={(e) => setHeroForm({ ...heroForm, pickupTime: e.target.value })}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <label className="block text-xs font-bold text-gray-700 mb-1">Loại xe</label>
          <select
            className="w-full text-xs rounded-lg border-gray-300 focus:border-[#00a859] focus:ring-[#00a859] py-2.5 px-3 bg-white"
            value={heroForm.carType}
            onChange={(e) => setHeroForm({ ...heroForm, carType: e.target.value })}
          >
            {activeTab === 'taxi' && (
              <>
                <option value="Tất cả xe">Tất cả xe</option>
                <option value="Xe 4 chỗ sedan">Xe 4 chỗ sedan</option>
                <option value="Xe 7 chỗ SUV">Xe 7 chỗ SUV</option>
                <option value="Xe điện VinFast thông minh">Xe điện VinFast</option>
                <option value="Xe đưa đón Sân bay Vinh">Xe Sân bay Vinh</option>
              </>
            )}
            {activeTab === 'thuexe' && (
              <>
                <option value="Tất cả xe tự lái">Tất cả xe tự lái</option>
                <option value="Xe 4 chỗ tự lái (Vios, Accent, K3)">Xe 4 chỗ tự lái</option>
                <option value="Xe 7 chỗ tự lái (Xpander, Tucson)">Xe 7 chỗ tự lái</option>
              </>
            )}
            {activeTab === 'hopdong' && (
              <>
                <option value="Tất cả xe hợp đồng">Tất cả xe hợp đồng</option>
                <option value="Xe 16 chỗ Limousine/Transit">Xe 16 chỗ</option>
                <option value="Xe 29 chỗ Thaco Town">Xe 29 chỗ</option>
                <option value="Xe 45 chỗ Universe">Xe 45 chỗ</option>
              </>
            )}
          </select>
        </div>

        <div className="lg:col-span-1 flex items-end">
          <button
            disabled={isSubmitting}
            className="w-full bg-[#00a859] hover:bg-[#008f4c] text-white font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow hover:shadow-md transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>ĐANG GỬI...</span>
              </>
            ) : (
              <>
                <span>ĐẶT XE NGAY</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </>
            )}
          </button>
        </div>
      </div>

      {errorMessage && (
        <div className="mt-3 p-2.5 bg-red-50 border border-red-200 text-red-600 rounded-lg text-center text-xs font-semibold">
          {errorMessage}
        </div>
      )}

      {formSubmitted && (
        <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-1">
          <div className="text-emerald-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2">
            <i className="fa-solid fa-circle-check text-[#00a859] text-base"></i>
            <span>Đặt chuyến thành công! Mã chuyến: <strong className="font-mono bg-white px-2 py-0.5 rounded border border-emerald-300">{bookingCode}</strong></span>
          </div>
          <p className="text-[11px] text-gray-600">
            Tổng đài viên Taxi Lữ Khách Hà Tĩnh sẽ liên hệ số điện thoại của quý khách ngay trong 1-3 phút để xác nhận tài xế đón.
          </p>
        </div>
      )}
    </form>
  
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-16" id="dich-vu">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
        DỊCH VỤ <span className="text-[#00a859]">CỦA CHÚNG TÔI</span>
</h2>
<div className="w-16 h-1 bg-[#00a859] mx-auto mt-2 rounded"></div>
<p className="text-gray-500 text-sm mt-3">Đa dạng lựa chọn phục vụ nhu cầu đi lại, công tác, du lịch tại Hà Tĩnh</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-gray-200/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition group">
<div>
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00a859] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition">
<i className="fa-solid fa-taxi"></i>
</div>
<h3 className="text-lg font-black text-gray-900 group-hover:text-[#00a859] transition">TAXI ĐƯỜNG DÀI &amp; ĐÔ THỊ</h3>
<p className="text-xs text-gray-500 font-medium mt-1">Di chuyển nhanh chóng • An toàn – Tiện lợi – Giá hợp lý</p>
<ul className="mt-4 space-y-2 text-xs text-gray-600">
<li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#00a859]"></i> Đón trả tận nơi tại nhà hoặc khách sạn</li>
<li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#00a859]"></i> Xe đời mới 2022-2025 thơm mát, sạch sẽ</li>
<li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#00a859]"></i> Bác tài văn minh, không vòi vĩnh chi phí</li>
</ul>
<div className="py-4">
<img alt="Taxi 4 cho Ha Tinh" className="w-full object-contain h-36" src="/images/4.jpg"/>
</div>
</div>
<a className="w-full block text-center py-2.5 rounded-lg bg-[#00a859] hover:bg-[#008f4c] text-white text-xs font-bold tracking-wider uppercase transition" href="tel:0963726995">
          ĐẶT XE NGAY
        </a>
</div>

<div className="bg-white rounded-2xl border border-gray-200/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition group">
<div>
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00a859] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition">
<i className="fa-solid fa-dharmachakra"></i>
</div>
<h3 className="text-lg font-black text-gray-900 group-hover:text-[#00a859] transition">THUÊ XE TỰ LÁI</h3>
<p className="text-xs text-gray-500 font-medium mt-1">Tự do hành trình • Chủ động quỹ thời gian công tác</p>
<ul className="mt-4 space-y-2 text-xs text-gray-600">
<li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#00a859]"></i> Đa dạng dòng xe từ sedan đến SUV 7 chỗ gầm cao</li>
<li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#00a859]"></i> Thủ tục nhận xe nhanh gọn, giao nhận tận nơi</li>
<li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#00a859]"></i> Giá cả cạnh tranh hàng đầu thị trường Hà Tĩnh</li>
</ul>
<div className="py-4">
<img alt="Thue xe tu lai Ha Tinh" className="w-full object-contain h-36" src="/images/5.jpg"/>
</div>
</div>
<a className="w-full block text-center py-2.5 rounded-lg bg-[#00a859] hover:bg-[#008f4c] text-white text-xs font-bold tracking-wider uppercase transition" href="tel:0963726995">
          THUÊ NGAY
        </a>
</div>

<div className="bg-white rounded-2xl border border-gray-200/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition group">
<div>
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00a859] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition">
<i className="fa-solid fa-van-shuttle"></i>
</div>
<h3 className="text-lg font-black text-gray-900 group-hover:text-[#00a859] transition">XE HỢP ĐỒNG DU LỊCH</h3>
<p className="text-xs text-gray-500 font-medium mt-1">Phục vụ tham quan du lịch • Xe 4 - 7 - 16 - 29 - 45 chỗ</p>
<ul className="mt-4 space-y-2 text-xs text-gray-600">
<li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#00a859]"></i> Hợp đồng đầy đủ hoá đơn đỏ VAT cho doanh nghiệp</li>
<li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#00a859]"></i> Tài xế đường dài dày dạn kinh nghiệm, lịch thiệp</li>
<li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#00a859]"></i> Chuyên tuyến Cửa Lò, Thiên Cầm, Ngã Ba Đồng Lộc</li>
</ul>
<div className="py-4">
<img alt="Xe hop dong Ha Tinh" className="w-full object-contain h-36" src="/images/6.jpg"/>
</div>
</div>
<a className="w-full block text-center py-2.5 rounded-lg bg-[#00a859] hover:bg-[#008f4c] text-white text-xs font-bold tracking-wider uppercase transition" href="tel:0963726995">
          XEM CHI TIẾT
        </a>
</div>
</div>
</section>

<section className="bg-white py-14 border-y border-gray-100" id="gioi-thieu">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
          VÌ SAO <span className="text-[#00a859]">CHỌN CHÚNG TÔI?</span>
</h2>
<div className="w-16 h-1 bg-[#00a859] mx-auto mt-2 rounded"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">

<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full border border-emerald-500/30 bg-emerald-50/50 flex items-center justify-center text-[#00a859] text-xl mb-3 hover:bg-[#00a859] hover:text-white transition duration-200">
<i className="fa-solid fa-shield-halved"></i>
</div>
<h4 className="text-xs font-bold text-gray-900 mb-1">An toàn tuyệt đối</h4>
<p className="text-[11px] text-gray-500 leading-tight">Kiểm tra kỹ lưỡng trước mỗi chuyến khởi hành</p>
</div>

<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full border border-emerald-500/30 bg-emerald-50/50 flex items-center justify-center text-[#00a859] text-xl mb-3 hover:bg-[#00a859] hover:text-white transition duration-200">
<i className="fa-solid fa-sack-dollar"></i>
</div>
<h4 className="text-xs font-bold text-gray-900 mb-1">Giá minh bạch</h4>
<p className="text-[11px] text-gray-500 leading-tight">Báo giá rõ ràng, tuyệt đối không phụ phí phát sinh</p>
</div>

<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full border border-emerald-500/30 bg-emerald-50/50 flex items-center justify-center text-[#00a859] text-xl mb-3 hover:bg-[#00a859] hover:text-white transition duration-200">
<i className="fa-solid fa-user-tie"></i>
</div>
<h4 className="text-xs font-bold text-gray-900 mb-1">Tài xế chuyên nghiệp</h4>
<p className="text-[11px] text-gray-500 leading-tight">Nhiều năm kinh nghiệm, lịch sự, am hiểu mọi cung đường</p>
</div>

<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full border border-emerald-500/30 bg-emerald-50/50 flex items-center justify-center text-[#00a859] text-xl mb-3 hover:bg-[#00a859] hover:text-white transition duration-200">
<i className="fa-solid fa-car"></i>
</div>
<h4 className="text-xs font-bold text-gray-900 mb-1">Xe đời mới</h4>
<p className="text-[11px] text-gray-500 leading-tight">Nội thất tiện nghi sang trọng, xe luôn vệ sinh sạch sẽ</p>
</div>

<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full border border-emerald-500/30 bg-emerald-50/50 flex items-center justify-center text-[#00a859] text-xl mb-3 hover:bg-[#00a859] hover:text-white transition duration-200">
<i className="fa-solid fa-headset"></i>
</div>
<h4 className="text-xs font-bold text-gray-900 mb-1">Hỗ trợ 24/7</h4>
<p className="text-[11px] text-gray-500 leading-tight">Tổng đài luôn sẵn sàng hỗ trợ khách hàng ngày đêm</p>
</div>

<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full border border-emerald-500/30 bg-emerald-50/50 flex items-center justify-center text-[#00a859] text-xl mb-3 hover:bg-[#00a859] hover:text-white transition duration-200">
<i className="fa-solid fa-map-pin"></i>
</div>
<h4 className="text-xs font-bold text-gray-900 mb-1">Đón tận nơi</h4>
<p className="text-[11px] text-gray-500 leading-tight">Có mặt nhanh chóng, chuẩn giờ, không để khách chờ lâu</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-16" id="bang-gia">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
        CÁC LOẠI <span className="text-[#00a859]">XE PHỔ BIẾN</span>
</h2>
<div className="w-16 h-1 bg-[#00a859] mx-auto mt-2 rounded"></div>
<p className="text-gray-500 text-sm mt-3">Hệ thống đội xe hiện đại, kiểm định định kỳ đảm bảo êm ái tiện nghi</p>
</div>

<div className="relative">

<button className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#00a859] hover:bg-emerald-50">
<i className="fa-solid fa-chevron-left text-xs"></i>
</button>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-emerald-500 hover:shadow-lg transition">
<div className="h-28 flex items-center justify-center">
<img alt="Xe 4 cho" className="max-h-full object-contain" src="/images/7.jpg"/>
</div>
<h4 className="font-extrabold text-gray-900 text-sm mt-3">4 CHỖ</h4>
<p className="text-[11px] text-gray-500 mt-0.5">Sedan phổ thông</p>
<div className="mt-2 text-[10px] text-emerald-700 font-semibold bg-emerald-50 py-1 rounded">Vios • Accent • City</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-emerald-500 hover:shadow-lg transition">
<div className="h-28 flex items-center justify-center">
<img alt="Xe 7 cho" className="max-h-full object-contain" src="/images/8.jpg"/>
</div>
<h4 className="font-extrabold text-gray-900 text-sm mt-3">7 CHỖ</h4>
<p className="text-[11px] text-gray-500 mt-0.5">SUV / MPV gia đình</p>
<div className="mt-2 text-[10px] text-emerald-700 font-semibold bg-emerald-50 py-1 rounded">Xpander • Veloz • Fortuner</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-emerald-500 hover:shadow-lg transition">
<div className="h-28 flex items-center justify-center">
<img alt="Xe 16 cho" className="max-h-full object-contain" src="/images/9.jpg"/>
</div>
<h4 className="font-extrabold text-gray-900 text-sm mt-3">16 CHỖ</h4>
<p className="text-[11px] text-gray-500 mt-0.5">Ford Transit / Solati</p>
<div className="mt-2 text-[10px] text-emerald-700 font-semibold bg-emerald-50 py-1 rounded">Rộng rãi • Êm ái • Tiện lợi</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-emerald-500 hover:shadow-lg transition">
<div className="h-28 flex items-center justify-center">
<img alt="Xe 29 cho" className="max-h-full object-contain" src="/images/10.jpg"/>
</div>
<h4 className="font-extrabold text-gray-900 text-sm mt-3">29 CHỖ</h4>
<p className="text-[11px] text-gray-500 mt-0.5">Thaco Town cao cấp</p>
<div className="mt-2 text-[10px] text-emerald-700 font-semibold bg-emerald-50 py-1 rounded">Đoàn du lịch • Hội nghị</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-emerald-500 hover:shadow-lg transition col-span-2 sm:col-span-1">
<div className="h-28 flex items-center justify-center">
<img alt="Xe 45 cho" className="max-h-full object-contain" src="/images/11.jpg"/>
</div>
<h4 className="font-extrabold text-gray-900 text-sm mt-3">45 CHỖ</h4>
<p className="text-[11px] text-gray-500 mt-0.5">Universe / Limousine</p>
<div className="mt-2 text-[10px] text-emerald-700 font-semibold bg-emerald-50 py-1 rounded">Tour lớn liên tỉnh</div>
</div>
</div>

<button className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#00a859] hover:bg-emerald-50">
<i className="fa-solid fa-chevron-right text-xs"></i>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 mb-16">
<div className="bg-gradient-to-r from-[#008f4c] via-[#00a859] to-[#046c37] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">

<div className="lg:col-span-7 space-y-3">
<span className="text-xs font-semibold uppercase tracking-widest text-emerald-200 block">Đặt xe nhanh – Tiện lợi – An toàn</span>
<h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
            ƯU ĐÃI HẤP DẪN
          </h3>
<p className="text-sm sm:text-lg text-emerald-100">
            Giảm ngay <span className="text-amber-300 font-black text-xl">10%</span> cước chuyến đi cho khách hàng đặt xe lần đầu qua Hotline!
          </p>
<div className="pt-2">
<a className="inline-flex items-center gap-3 bg-white text-[#008f4c] font-black px-6 py-3 rounded-full text-xs uppercase shadow hover:bg-emerald-50 hover:scale-105 transition" href="tel:0963726995">
<span>ĐẶT XE NGAY</span>
<i className="fa-solid fa-arrow-right"></i>
</a>
</div>
</div>

<div className="lg:col-span-5 flex items-center justify-center gap-4">
<img alt="Car promo" className="w-1/2 object-contain hidden sm:block filter drop-shadow-md" src="/images/12.jpg"/>
<img alt="Smartphone ride tracking" className="w-36 object-contain filter drop-shadow-2xl" src="/images/13.jpg"/>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-16 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
          KHÁCH HÀNG <span className="text-[#00a859]">NÓI VỀ CHÚNG TÔI</span>
</h2>
<div className="w-16 h-1 bg-[#00a859] mx-auto mt-2 rounded"></div>
</div>
<div className="relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
<div>
<div className="flex text-amber-400 text-xs mb-3">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
<p className="text-xs text-gray-600 italic leading-relaxed">
                “Dịch vụ rất tốt, tài xế thân thiện, xe sạch sẽ, đúng giờ. Mình đặt đón lúc sáng sớm ra sân bay Vinh mà bác tài có mặt trước 15 phút.”
              </p>
</div>
<div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
<img alt="Nguyễn Minh Tuấn" className="w-10 h-10 rounded-full object-cover" src="/images/28.jpg"/>
<div>
<h5 className="text-xs font-bold text-gray-900">Nguyễn Minh Tuấn</h5>
<span className="text-[10px] text-gray-400">Khách hàng cá nhân</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
<div>
<div className="flex text-amber-400 text-xs mb-3">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
<p className="text-xs text-gray-600 italic leading-relaxed">
                “Xe đời mới, giá hợp lý, phục vụ rất chuyên nghiệp. Thuê xe tự lái 3 ngày đi công tác Kỳ Anh rất hài lòng về phong cách phục vụ.”
              </p>
</div>
<div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
<img alt="Trần Thị Hương" className="w-10 h-10 rounded-full object-cover" src="/images/29.jpg"/>
<div>
<h5 className="text-xs font-bold text-gray-900">Trần Thị Hương</h5>
<span className="text-[10px] text-gray-400">Khách hàng cá nhân</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
<div>
<div className="flex text-amber-400 text-xs mb-3">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
<p className="text-xs text-gray-600 italic leading-relaxed">
                “Dịch vụ xe hợp đồng rất tốt, đúng hẹn, lái xe an toàn, có xuất hóa đơn VAT đầy đủ cho công ty. Chúng tôi sẽ hợp tác lâu dài.”
              </p>
</div>
<div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
<img alt="Công ty TNHH An Phát" className="w-10 h-10 rounded-full object-cover" src="/images/30.jpg"/>
<div>
<h5 className="text-xs font-bold text-gray-900">Công ty TNHH An Phát</h5>
<span className="text-[10px] text-gray-400">Khách hàng doanh nghiệp</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-16" id="tin-tuc">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
        TIN TỨC – <span className="text-[#00a859]">KINH NGHIỆM</span>
</h2>
<div className="w-16 h-1 bg-[#00a859] mx-auto mt-2 rounded"></div>
<p className="text-gray-500 text-sm mt-3">Cẩm nang di chuyển, bảng giá mới và kinh nghiệm du lịch Hà Tĩnh</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
<img alt="Kinh nghiem taxi" className="w-full h-36 object-cover" src="/images/14.jpg"/>
<div className="p-4 flex-1 flex flex-col justify-between">
<div>
<span className="text-[10px] text-gray-400 block mb-1">20/10/2025</span>
<h4 className="text-xs font-bold text-gray-900 line-clamp-2 hover:text-[#00a859] cursor-pointer">
  <Link href="/tin-tuc/quy-chuan-an-toan-tai-xe">
    Quy chuẩn an toàn và văn hóa phục vụ của đội ngũ tài xế bản địa Lữ Khách Hà Tĩnh
  </Link>
</h4>
</div>
<Link className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00a859] mt-3 hover:underline" href="/tin-tuc/quy-chuan-an-toan-tai-xe">
  Xem chi tiết <i className="fa-solid fa-arrow-right text-[9px]"></i>
</Link>
</div>
</article>

<article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
<img alt="Tiet kiem chi phi" className="w-full h-36 object-cover" src="/images/15.jpg"/>
<div className="p-4 flex-1 flex flex-col justify-between">
<div>
<span className="text-[10px] text-gray-400 block mb-1">22/10/2025</span>
<h4 className="text-xs font-bold text-gray-900 line-clamp-2 hover:text-[#00a859] cursor-pointer">
  <Link href="/tin-tuc/top-7-dia-diem-du-lich-ha-tinh">
    Top 7 địa điểm du lịch tâm linh &amp; thắng cảnh nổi tiếng Hà Tĩnh nhất định phải đến
  </Link>
</h4>
</div>
<Link className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00a859] mt-3 hover:underline" href="/tin-tuc/top-7-dia-diem-du-lich-ha-tinh">
  Xem chi tiết <i className="fa-solid fa-arrow-right text-[9px]"></i>
</Link>
</div>
</article>

<article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
<img alt="Dua don san bay" className="w-full h-36 object-cover" src="/images/16.jpg"/>
<div className="p-4 flex-1 flex flex-col justify-between">
<div>
<span className="text-[10px] text-gray-400 block mb-1">24/10/2025</span>
<h4 className="text-xs font-bold text-gray-900 line-clamp-2 hover:text-[#00a859] cursor-pointer">
  <Link href="/tin-tuc/kinh-nghiem-dat-taxi-san-bay-vinh">
    Dịch vụ đưa đón sân bay Vinh - Hà Tĩnh trọn gói tiện lợi, đúng giờ
  </Link>
</h4>
</div>
<Link className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00a859] mt-3 hover:underline" href="/tin-tuc/kinh-nghiem-dat-taxi-san-bay-vinh">
  Xem chi tiết <i className="fa-solid fa-arrow-right text-[9px]"></i>
</Link>
</div>
</article>

<article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
<img alt="Xe hop dong" className="w-full h-36 object-cover" src="/images/17.jpg"/>
<div className="p-4 flex-1 flex flex-col justify-between">
<div>
<span className="text-[10px] text-gray-400 block mb-1">15/10/2025</span>
<h4 className="text-xs font-bold text-gray-900 line-clamp-2 hover:text-[#00a859] cursor-pointer">
  <Link href="/tin-tuc/thue-xe-hop-dong-kkt-vung-ang">
    Dịch vụ thuê xe hợp đồng đón rước chuyên gia KKT Vũng Áng
  </Link>
</h4>
</div>
<Link className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00a859] mt-3 hover:underline" href="/tin-tuc/thue-xe-hop-dong-kkt-vung-ang">
  Xem chi tiết <i className="fa-solid fa-arrow-right text-[9px]"></i>
</Link>
</div>
</article>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 mb-12">
<div className="bg-[#00a859] rounded-2xl p-5 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
<div className="flex items-center gap-4 text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
<i className="fa-solid fa-headset text-2xl"></i>
</div>
<div>
<span className="text-xs uppercase font-semibold text-emerald-100 tracking-wider">CẦN HỖ TRỢ? GỌI NGAY CHO CHÚNG TÔI</span>
<div className="text-2xl sm:text-3xl font-black tracking-tight leading-none mt-0.5">
            0963 726 995 <span className="text-xs font-normal text-emerald-100 ml-2">(Tổng đài hoạt động 24/7)</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<a className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold px-6 py-3 rounded-full text-xs uppercase shadow-md flex items-center gap-2 transition" href="tel:0963726995">
<span>LIÊN HỆ NGAY</span>
<i className="fa-solid fa-phone"></i>
</a>
<img alt="Taxi thumbnail" className="h-10 object-contain hidden lg:block" src="/images/18.jpg"/>
</div>
</div>
</section>

    </main>
    </>
  );
}
