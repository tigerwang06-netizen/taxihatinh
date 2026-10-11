"use client";

import { useState } from "react";
import { submitBooking } from "@/lib/booking";

interface ArticleQuickBookingProps {
  articleTitle: string;
}

export default function ArticleQuickBooking({ articleTitle }: ArticleQuickBookingProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pickup: "",
    destination: "",
    carType: "Xe 4 chỗ sedan",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingCode, setBookingCode] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      setErrorMessage("Vui lòng nhập số điện thoại.");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");

    const res = await submitBooking({
      fullName: formData.fullName,
      phone: formData.phone,
      pickup: formData.pickup,
      destination: formData.destination,
      carType: formData.carType,
      sourcePage: `Bài viết: ${articleTitle.slice(0, 40)}...`,
    });

    setIsSubmitting(false);
    if (res.success) {
      setFormSubmitted(true);
      setBookingCode(res.bookingId);
      setFormData({
        fullName: "",
        phone: "",
        pickup: "",
        destination: "",
        carType: "Xe 4 chỗ sedan",
      });
      setTimeout(() => setFormSubmitted(false), 9000);
    } else {
      setErrorMessage(res.error || "Gửi yêu cầu không thành công.");
    }
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border-t-4 border-[#00a651] space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#e8f8f0] text-[#008744] flex items-center justify-center">
          <span className="material-symbols-outlined text-[20px]">local_taxi</span>
        </div>
        <div>
          <h4 className="font-title text-title text-[#008744] font-bold">Đặt Xe Nhanh Tuyến Này</h4>
          <p className="font-body-sm text-body-sm text-secondary">Tài xế bản địa đón tận nơi 24/7</p>
        </div>
      </div>

      <form className="space-y-3 pt-1" onSubmit={handleSubmit}>
        <div>
          <input
            className="w-full px-3.5 py-2.5 rounded-xl bg-surface text-body-sm font-body-sm text-on-surface placeholder:text-outline border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-[#00a651]"
            placeholder="Họ và tên của bạn"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>
        <div>
          <input
            className="w-full px-3.5 py-2.5 rounded-xl bg-surface text-body-sm font-body-sm text-on-surface placeholder:text-outline border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-[#00a651]"
            placeholder="Số điện thoại liên hệ (*)"
            required
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="w-full px-3 py-2.5 rounded-xl bg-surface text-body-sm font-body-sm text-on-surface placeholder:text-outline border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-[#00a651]"
            placeholder="Điểm đón"
            type="text"
            value={formData.pickup}
            onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
          />
          <input
            className="w-full px-3 py-2.5 rounded-xl bg-surface text-body-sm font-body-sm text-on-surface placeholder:text-outline border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-[#00a651]"
            placeholder="Điểm đến"
            type="text"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
          />
        </div>
        <div>
          <select
            className="w-full px-3 py-2.5 rounded-xl bg-surface text-body-sm font-body-sm text-on-surface border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-[#00a651]"
            value={formData.carType}
            onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
          >
            <option value="Xe 4 chỗ sedan">Xe 4 chỗ sedan đời mới</option>
            <option value="Xe 7 chỗ SUV / MPV">Xe 7 chỗ SUV / MPV</option>
            <option value="Xe điện VinFast thông minh">Xe điện VinFast thông minh</option>
            <option value="Xe 16 chỗ đưa đón nhóm">Xe 16 chỗ đưa đón nhóm</option>
          </select>
        </div>

        <button
          disabled={isSubmitting}
          className="w-full py-3 rounded-xl bg-[#00a651] text-white font-title text-title font-bold shadow-md hover:bg-[#008744] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          type="submit"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>ĐANG GỬI...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">task_alt</span>
              <span>GỌI XE &amp; BÁO GIÁ NGAY</span>
            </>
          )}
        </button>

        {errorMessage && (
          <div className="p-2.5 bg-red-50 border border-red-200 text-red-600 rounded-lg text-center text-xs font-semibold">
            {errorMessage}
          </div>
        )}

        {formSubmitted && (
          <div className="text-center text-xs font-semibold text-[#008744] bg-[#e8f8f0] p-3 rounded-lg border border-[#00a651]/30 space-y-1">
            <div>Đặt xe thành công! Mã: <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#00a651]/30">{bookingCode}</span></div>
            <div className="font-normal text-secondary">Tổng đài viên sẽ gọi lại cho quý khách trong 1-3 phút.</div>
          </div>
        )}
      </form>
    </div>
  );
}
