"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/blackjack-en-ligne", label: "Blackjack en ligne" },
  { href: "/regles-blackjack", label: "Règles" },
  { href: "/strategie-blackjack", label: "Stratégie" },
  {
    href: "#",
    label: "Variantes",
    children: [
      { href: "/blackjack-europeen", label: "Européen" },
      { href: "/blackjack-americain", label: "Américain" },
      { href: "/blackjack-live", label: "Live" },
      { href: "/blackjack-multi-mains", label: "Multi-mains" },
    ],
  },
  { href: "/blackjack-gratuit", label: "Jouer gratuit" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [variantOpen, setVariantOpen] = useState(false);

  return (
    <header className="bg-felt-dark text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-accent text-2xl">♠</span>
          <span className="hidden sm:inline">Blackjack en Ligne Gratuit</span>
          <span className="sm:hidden">BJG</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className="hover:text-accent transition-colors flex items-center gap-1"
                  onMouseEnter={() => setVariantOpen(true)}
                  onMouseLeave={() => setVariantOpen(false)}
                >
                  {link.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 bg-card-black rounded-lg shadow-xl py-2 min-w-[180px] transition-all ${
                    variantOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setVariantOpen(true)}
                  onMouseLeave={() => setVariantOpen(false)}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 hover:bg-felt hover:text-accent transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card-black border-t border-white/10 px-4 py-4 space-y-3">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="space-y-2">
                <p className="text-accent font-semibold text-sm">{link.label}</p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-4 py-1 text-sm hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block py-1 text-sm hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
