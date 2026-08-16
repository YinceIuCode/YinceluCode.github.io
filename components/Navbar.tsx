"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollLockUntil = useRef(0);
  const { language, toggleLanguage, dict } = useLanguage();

  const handleNavClick = () => {
    // Khóa hiệu ứng ẩn navbar trong 1 giây để cuộn tới đúng section
    scrollLockUntil.current = Date.now() + 1000;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Nếu đang trong quá trình cuộn tự động thì bỏ qua
      if (Date.now() < scrollLockUntil.current) {
        setLastScrollY(currentScrollY);
        return;
      }

      // Nếu cuộn xuống và đã cuộn qua một khoảng nhỏ (ví dụ 50px) thì ẩn
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } 
      // Nếu cuộn lên thì hiện lại
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[#0b1120]/80 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-4 flex items-center justify-between transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Cột trái (Logo) */}
      <div className="flex-1 flex justify-start">
        <Link href="#" className="flex items-baseline shrink-0 group" onClick={handleNavClick}>
          <span className="text-green-400 font-bold text-2xl group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all">Vinh</span>
          <span className="text-slate-500 text-2xl group-hover:text-slate-400 transition-all">.syv</span>
        </Link>
      </div>

      {/* Cột giữa (Navigation Links) */}
      <div className="hidden md:flex justify-center gap-6 lg:gap-10">
        <Link
          href="#about"
          onClick={handleNavClick}
          className="group relative px-2 py-2 text-slate-400 text-sm lg:text-base font-mono tracking-widest uppercase hover:text-white transition-colors"
        >
          <span className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 text-green-400 transition-all duration-300">{`>`}</span>
          <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-3">
             {dict.nav.about}
          </span>
        </Link>
        <Link
          href="#tech"
          onClick={handleNavClick}
          className="group relative px-2 py-2 text-slate-400 text-sm lg:text-base font-mono tracking-widest uppercase hover:text-white transition-colors"
        >
          <span className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 text-green-400 transition-all duration-300">{`>`}</span>
          <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-3">
             {dict.nav.tech}
          </span>
        </Link>
        <Link
          href="#mindset"
          onClick={handleNavClick}
          className="group relative px-2 py-2 text-slate-400 text-sm lg:text-base font-mono tracking-widest uppercase hover:text-white transition-colors"
        >
          <span className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 text-green-400 transition-all duration-300">{`>`}</span>
          <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-3">
             {dict.nav.mindset}
          </span>
        </Link>
        <Link
          href="#projects"
          onClick={handleNavClick}
          className="group relative px-2 py-2 text-slate-400 text-sm lg:text-base font-mono tracking-widest uppercase hover:text-white transition-colors"
        >
          <span className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 text-green-400 transition-all duration-300">{`>`}</span>
          <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-3">
             {dict.nav.projects}
          </span>
        </Link>
        <Link
          href="#resume"
          onClick={handleNavClick}
          className="group relative px-2 py-2 text-slate-400 text-sm lg:text-base font-mono tracking-widest uppercase hover:text-white transition-colors"
        >
          <span className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 text-green-400 transition-all duration-300">{`>`}</span>
          <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-3">
             {dict.nav.resume}
          </span>
        </Link>
        <Link
          href="#contact"
          onClick={handleNavClick}
          className="group relative px-2 py-2 text-slate-400 text-sm lg:text-base font-mono tracking-widest uppercase hover:text-white transition-colors"
        >
          <span className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 text-green-400 transition-all duration-300">{`>`}</span>
          <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-3">
             {dict.nav.contact}
          </span>
        </Link>
      </div>

      {/* Cột phải (Tính năng VN/EN) */}
      <div className="flex-1 flex justify-end">
        <button
          onClick={() => {
            scrollLockUntil.current = Date.now() + 500;
            toggleLanguage();
          }}
          className="group flex items-center gap-1 font-mono text-sm lg:text-base font-bold tracking-widest text-slate-400 hover:text-white transition-colors"
        >
          <span className="text-slate-700 group-hover:text-green-500 transition-colors">{`[`}</span>
          <span className="w-6 text-center">{language === 'vi' ? 'VN' : 'EN'}</span>
          <span className="text-slate-700 group-hover:text-green-500 transition-colors">{`]`}</span>
        </button>
      </div>
    </nav>
  );
}
