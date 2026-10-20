export interface BookingPayload {
  fullName?: string;
  phone: string;
  pickup?: string;
  destination?: string;
  serviceType?: string;
  carType?: string;
  pickupTime?: string;
  note?: string;
  sourcePage?: string;
}

export const ZALO_HOTLINE = "0963726995";
export const ZALO_LINK = `https://zalo.me/${ZALO_HOTLINE}`;

export function formatZaloBookingMessage(payload: BookingPayload, bookingId?: string): string {
  const lines = [
    `🚕 ĐẶT XE TAXI LỮ KHÁCH HÀ TĨNH ${bookingId ? `[#${bookingId}]` : ""}`,
    "━━━━━━━━━━━━━━━━━━",
    payload.fullName ? `👤 Khách hàng: ${payload.fullName}` : null,
    `📞 Số điện thoại: ${payload.phone}`,
    payload.pickup ? `📍 Điểm đón: ${payload.pickup}` : null,
    payload.destination ? `🏁 Điểm đến: ${payload.destination}` : null,
    (payload.serviceType || payload.carType) ? `🚗 Loại xe / Dịch vụ: ${payload.serviceType || payload.carType}` : null,
    payload.pickupTime ? `⏰ Thời gian đón: ${payload.pickupTime}` : null,
    payload.note ? `📝 Ghi chú: ${payload.note}` : null,
    payload.sourcePage ? `🌐 Nguồn: ${payload.sourcePage}` : null,
    "━━━━━━━━━━━━━━━━━━",
    "Xin vui lòng báo giá và xếp xe giúp tôi. Cảm ơn!",
  ].filter(Boolean);

  return lines.join("\n");
}

export function copyBookingToClipboard(payload: BookingPayload, bookingId?: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
    const text = formatZaloBookingMessage(payload, bookingId);
    navigator.clipboard.writeText(text).catch(() => {});
  }
}

export function openZaloChat(payload?: BookingPayload, bookingId?: string) {
  if (payload) {
    copyBookingToClipboard(payload, bookingId);
  }
  if (typeof window !== "undefined") {
    window.open(ZALO_LINK, "_blank");
  }
}

export async function submitBooking(payload: BookingPayload) {
  try {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.error("Booking error:", error);
    return {
      success: false,
      error: "Không thể kết nối đến máy chủ. Quý khách vui lòng gọi hotline 0963 726 995 để được hỗ trợ tức thì.",
    };
  }
}

