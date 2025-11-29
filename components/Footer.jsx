import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b border-t border-white/10 text-white">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold tracking-wide">Araku Coffee</h3>
          <p className="text-sm text-white/60 mt-1">
            Crafted in the hills. Brewed with passion.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#features" className="hover:text-amber-400 transition">
            Features
          </a>
          <a href="#highlights" className="hover:text-amber-400 transition">
            Highlights
          </a>
          <a href="#contact" className="hover:text-amber-400 transition">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="p-2 rounded-full bg-black/40 hover:bg-coffee-700 transition"
            aria-label="Instagram"
          >
            <Instagram size={18} className="text-amber-400" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-black/40 hover:bg-coffee-700 transition"
            aria-label="Facebook"
          >
            <Facebook size={18} className="text-amber-400" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-black/40 hover:bg-coffee-700 transition"
            aria-label="Twitter"
          >
            <Twitter size={18} className="text-amber-400" />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/10 mt-6 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Araku Coffee. All rights reserved.
      </div>
    </footer>
  );
}
