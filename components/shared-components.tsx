"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const navLinks = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About", key: "about" },
  { href: "/projects", label: "Projects", key: "projects" },
  { href: "/alumni", label: "Alumni", key: "alumni" },
  // { href: "/dashboard", label: "Dashboard", key: "dashboard" },
  { href: "/contact", label: "Contact", key: "contact" },
];

interface NavbarProps {
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage = "home" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 overflow-hidden">
              <img src="/images.png" alt="Thapar Institute" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs uppercase tracking-[0.4em] text-gray-500">THAPAR SBMS</span>
              <span className="text-sm md:text-base font-semibold text-teal-900">
                Thapar Institute of Technology and Engineering
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`${
                  currentPage === link.key
                    ? "text-teal-600 font-semibold"
                    : "text-gray-700 hover:text-teal-600"
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.key}`}
                href={link.href}
                className={`${
                  currentPage === link.key
                    ? "text-teal-600 font-semibold"
                    : "text-gray-700 hover:text-teal-600"
                } block transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
