'use client';
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "backdrop-blur bg-coffee-900/60 border-b border-white/10" : ""}`}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">Araku Coffee</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#highlights" className="hover:text-white">Highlights</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block rounded-xl bg-white text-coffee-900 px-4 py-2 font-medium">Buy Now</a>
        </div>
      </div>
    </header>
  );
}
