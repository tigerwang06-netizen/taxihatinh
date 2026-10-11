"use client";

import { useState } from "react";

interface ArticleShareProps {
  title: string;
}

export default function ArticleShare({ title }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleFacebookShare = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
    }
  };

  const handleZaloShare = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://sp.zalo.me/plugins/share?url=${url}`, "_blank");
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="font-label-sm text-label-sm text-secondary mr-1">Chia sẻ:</span>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-outline-variant/40 hover:bg-[#e8f8f0] hover:text-[#008744] text-xs font-semibold text-on-surface transition-colors cursor-pointer"
        title="Sao chép liên kết"
      >
        <span className="material-symbols-outlined text-[16px]">
          {copied ? "check" : "link"}
        </span>
        <span>{copied ? "Đã sao chép!" : "Sao chép link"}</span>
      </button>

      <button
        type="button"
        onClick={handleFacebookShare}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2]/10 hover:bg-[#1877F2] hover:text-white text-xs font-semibold text-[#1877F2] transition-colors cursor-pointer"
        title="Chia sẻ Facebook"
      >
        <i className="fa-brands fa-facebook-f text-xs"></i>
        <span>Facebook</span>
      </button>

      <button
        type="button"
        onClick={handleZaloShare}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0068FF]/10 hover:bg-[#0068FF] hover:text-white text-xs font-semibold text-[#0068FF] transition-colors cursor-pointer"
        title="Chia sẻ Zalo"
      >
        <span className="font-bold text-xs">Zalo</span>
      </button>
    </div>
  );
}
