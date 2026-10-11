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
      error: "Không thể kết nối đến máy chủ. Quý khách vui lòng gọi hotline 0812 444 555 để được hỗ trợ tức thì.",
    };
  }
}
