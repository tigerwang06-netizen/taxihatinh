import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Taxi L? Khách Hà Tinh" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-secondary">
          <Link href="/" className="hover:text-primary transition-colors">Trang ch?</Link>
          <Link href="/gioi-thieu" className="hover:text-primary transition-colors">Gi?i thi?u</Link>
          <Link href="/dich-vu" className="hover:text-primary transition-colors">D?ch v?</Link>
          <Link href="/bang-gia" className="hover:text-primary transition-colors">B?ng giá</Link>
          <Link href="/tin-tuc" className="hover:text-primary transition-colors">Tin t?c</Link>
          <Link href="/lien-he" className="hover:text-primary transition-colors">Liên h?</Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a href="tel:0812444555" className="hidden sm:inline-flex h-11 items-center justify-center rounded-full bg-[#00a651] px-6 text-sm font-bold text-white shadow-md hover:bg-[#008744] hover:-translate-y-0.5 transition-all">
            T?ng dài 24/7: 0812 444 555
          </a>
          {/* Mobile Menu Toggle (Placeholder) */}
          <button className="md:hidden p-2 text-secondary hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

