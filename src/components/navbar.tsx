/*
 * Navbar.tsx – light‑theme only, following original HTML layout exactly
 * ▸ Links always visible and black by default
 * ▸ Order:  brand | nav‑links | icons
 * ▸ No dark‑mode, no collapse button
 */
"use client";

import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav id="navbar" className="w-full py-4 bg-white shadow-sm fixed top-0 z-50">
      <div className="container relative flex flex-wrap items-center justify-between px-4">
        {/* Brand */}
        <Link
          href="/"
          className="navbar-brand md:me-8 inline-flex items-center gap-2 shrink-0"
        >
          <Image
            src="/assets/image.png"
            alt="APPEVER Logo"
            width={60}
            height={60}
            className="h-6 w-6"
            priority
          />
          <span className="text-lg font-semibold tracking-wide text-black">
            APPEVER
          </span>
        </Link>

        {/* Navigation links */}
        <ul
          className="navbar-nav flex items-center gap-8 font-medium text-sm md:text-base ms-auto"
          id="navbar-navlist"
        >
          {[
            { href: "#home", label: "Home" },
            { href: "#features", label: "Features" },
            { href: "#screenshot", label: "Application" },
            { href: "#faqs", label: "FAQs" },
            { href: "#download", label: "Download" },
            { href: "#reviews", label: "Reviews" },
            { href: "#contact", label: "Contact us" },
          ].map((item) => (
            <li key={item.href} className="nav-item list-none">
              <Link
                href={item.href}
                className="nav-link text-black hover:text-red-500 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="nav-icons flex items-center md:ms-6 gap-2">
          <Link
            href="#"
            className="size-8 inline-flex items-center justify-center rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            <User className="size-4" />
          </Link>
          <Link
            href="#"
            className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-full bg-red-500 text-white uppercase"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
