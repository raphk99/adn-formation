"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/financement", label: "Financement" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-white/90 glass-header shadow-sm border-b border-slate-200">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://res.cloudinary.com/detxwbzq0/image/upload/v1777388155/adn-logo_vrz0cd.png"
            alt="ADN Formation"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-black tracking-tight text-slate-900">
              ADN Formation
            </span>
            <span className="text-xs text-[var(--color-primary)] font-semibold tracking-wide uppercase">
              Centre de formation BTP
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "text-slate-600 hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/formations"
            className="ml-2 bg-[var(--color-accent)] text-slate-900 font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Nos formations →
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-700 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 font-semibold text-base"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/formations"
            onClick={() => setMenuOpen(false)}
            className="bg-[var(--color-accent)] text-slate-900 font-bold text-sm px-5 py-3 rounded-lg text-center"
          >
            Nos formations →
          </Link>
        </div>
      )}
    </header>
  );
}
