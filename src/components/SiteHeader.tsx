"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner - Sleek 1-line on mobile, full info on tablet & desktop */}
      <header className="w-full bg-[#008f4c] text-white text-xs border-b border-emerald-600">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between gap-2">
          {/* Highlights */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 font-medium text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1 font-semibold">
              <i className="fa-solid fa-headset text-emerald-200 text-[10px]"></i> Hỗ trợ 24/7
            </span>
            <span className="text-emerald-300/50 hidden sm:inline">•</span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <i className="fa-solid fa-shield-halved text-emerald-200"></i> An toàn – Uy tín – Chuyên nghiệp
            </span>
            <span className="text-emerald-300/50 hidden md:inline">•</span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <i className="fa-solid fa-heart text-emerald-200"></i> Phục vụ tận tâm
            </span>
            <span className="text-emerald-300/50 hidden lg:inline">•</span>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <i className="fa-solid fa-credit-card text-emerald-200"></i> Giá niêm yết minh bạch
            </span>
          </div>

          {/* Right Action & Socials */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://zalo.me/0812444555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-800/90 hover:bg-white hover:text-emerald-800 text-white font-bold text-[10px] sm:text-[11px] transition shadow-xs"
              aria-label="Chat Zalo đặt xe nhanh"
            >
              <span>Zalo Đặt Xe</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
            </a>

            <div className="hidden md:flex items-center gap-1.5 text-sm">
              <span className="text-emerald-100 text-[11px] mr-1 hidden lg:inline">Theo dõi:</span>
              <a className="w-6 h-6 rounded-full bg-emerald-800 hover:bg-white hover:text-emerald-800 transition flex items-center justify-center text-white" href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f text-[11px]"></i>
              </a>
              <a className="w-6 h-6 rounded-full bg-emerald-800 hover:bg-white hover:text-emerald-800 transition flex items-center justify-center text-white" href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube text-[11px]"></i>
              </a>
              <a className="w-6 h-6 rounded-full bg-emerald-800 hover:bg-white hover:text-emerald-800 transition flex items-center justify-center text-white" href="#" aria-label="TikTok">
                <i className="fa-brands fa-tiktok text-[11px]"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-white sticky top-0 z-40 shadow-xs border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0" href="/">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-emerald-600 flex items-center justify-center bg-emerald-50 text-emerald-600 group-hover:scale-105 transition-transform shrink-0">
              <i className="fa-solid fa-taxi text-lg sm:text-2xl"></i>
            </div>
            <div className="min-w-0">
              <span className="block text-[15px] sm:text-xl font-extrabold tracking-tight text-gray-900 leading-none group-hover:text-emerald-600 transition whitespace-nowrap">
                TAXI <span className="text-[#00a859]">HÀ TĨNH</span>
              </span>
              <span className="text-[9px] sm:text-[11px] font-semibold text-emerald-700 tracking-wider uppercase block mt-0.5 truncate">
                Lữ Khách Hà Tĩnh • 24/7
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-700">
            <li>
              <Link
                className={`pb-1 transition ${
                  pathname === "/"
                    ? "text-[#00a859] border-b-2 border-[#00a859] font-bold"
                    : "hover:text-[#00a859] text-gray-700 font-semibold"
                }`}
                href="/"
              >
                TRANG CHỦ
              </Link>
            </li>
            <li>
              <Link
                className={`pb-1 transition ${
                  pathname === "/gioi-thieu"
                    ? "text-[#00a859] border-b-2 border-[#00a859] font-bold"
                    : "hover:text-[#00a859] text-gray-700 font-semibold"
                }`}
                href="/gioi-thieu"
              >
                GIỚI THIỆU
              </Link>
            </li>
            <li>
              <Link
                className={`pb-1 transition ${
                  pathname === "/dich-vu"
                    ? "text-[#00a859] border-b-2 border-[#00a859] font-bold"
                    : "hover:text-[#00a859] text-gray-700 font-semibold"
                }`}
                href="/dich-vu"
              >
                DỊCH VỤ
              </Link>
            </li>
            <li>
              <Link
                className={`pb-1 transition ${
                  pathname === "/bang-gia"
                    ? "text-[#00a859] border-b-2 border-[#00a859] font-bold"
                    : "hover:text-[#00a859] text-gray-700 font-semibold"
                }`}
                href="/bang-gia"
              >
                BẢNG GIÁ
              </Link>
            </li>
            <li>
              <Link
                className={`pb-1 transition ${
                  pathname === "/tin-tuc"
                    ? "text-[#00a859] border-b-2 border-[#00a859] font-bold"
                    : "hover:text-[#00a859] text-gray-700 font-semibold"
                }`}
                href="/tin-tuc"
              >
                TIN TỨC
              </Link>
            </li>
            <li>
              <Link
                className={`pb-1 transition ${
                  pathname === "/lien-he"
                    ? "text-[#00a859] border-b-2 border-[#00a859] font-bold"
                    : "hover:text-[#00a859] text-gray-700 font-semibold"
                }`}
                href="/lien-he"
              >
                LIÊN HỆ
              </Link>
            </li>
          </ul>

          {/* Right Action: Call & Hamburger Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 ml-auto">
            <a
              className="bg-[#00a859] hover:bg-[#00904d] active:scale-95 text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2.5 shadow-md hover:shadow-lg transition shrink-0"
              href="tel:0812444555"
              aria-label="Gọi ngay tổng đài 0812 444 555"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                <i className="fa-solid fa-phone-volume text-xs sm:text-sm animate-bounce"></i>
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-base font-black leading-none tracking-tight sm:tracking-wide">
                  0812 444 555
                </div>
                <div className="text-[9px] sm:text-[10px] text-emerald-100 font-medium uppercase mt-0.5 hidden sm:block">
                  Tổng đài 24/7
                </div>
              </div>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-[#00a859] transition flex items-center justify-center cursor-pointer shrink-0 border border-gray-200/80 active:bg-gray-200"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark text-lg text-emerald-700" : "fa-bars text-base"}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-4 py-4 space-y-2">
            <ul className="space-y-1 font-semibold text-gray-700">
              {[
                { href: "/", label: "TRANG CHỦ", icon: "fa-house" },
                { href: "/gioi-thieu", label: "GIỚI THIỆU", icon: "fa-circle-info" },
                { href: "/dich-vu", label: "DỊCH VỤ", icon: "fa-taxi" },
                { href: "/bang-gia", label: "BẢNG GIÁ", icon: "fa-tag" },
                { href: "/tin-tuc", label: "TIN TỨC", icon: "fa-newspaper" },
                { href: "/lien-he", label: "LIÊN HỆ", icon: "fa-envelope" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                      pathname === item.href
                        ? "bg-emerald-50 text-[#00a859] font-bold"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <i
                      className={`fa-solid ${item.icon} w-5 text-center text-sm ${
                        pathname === item.href ? "text-[#00a859]" : "text-gray-400"
                      }`}
                    ></i>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3 text-xs text-gray-500 px-2">
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-clock text-[#00a859]"></i> Phục vụ 24/7 toàn tỉnh
              </span>
              <a
                href="https://zalo.me/0812444555"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00a859] font-bold hover:underline flex items-center gap-1"
              >
                Chat Zalo <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
