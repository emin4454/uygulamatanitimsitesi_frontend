"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav id="navbar" className="w-full py-4 bg-transparent">
      <div className="container relative flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="/" className="md:me-8 inline-block">
          {/* Dark / Light logos */}
          <Image
            src="/assets/images/logo-dark.png"
            alt="Logo"
            width={120}
            height={24}
            className="h-5 inline-block dark:hidden"
            priority
          />
          <Image
            src="/assets/images/logo-light.png"
            alt="Logo"
            width={120}
            height={24}
            className="h-5 hidden dark:inline-block"
            priority
          />
        </Link>

        {/* Right‑hand icons */}
        <div className="flex items-center md:ms-6 order-2 lg_992:order-2">
          {/* Social / profile */}
          <ul className="flex gap-2 mb-0">
            <li>
              <Link
                href="#"
                className="size-8 inline-flex items-center justify-center rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
              >
                <User className="size-4" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-full bg-red-500 text-white uppercase"
              >
                Signup
              </Link>
            </li>
          </ul>

          {/* Mobile collapse button */}
          <button
            onClick={() => setOpen(!open)}
            className="ms-2 inline-flex items-center text-slate-900 dark:text-white lg_992:hidden"
            aria-controls="menu-collapse"
            aria-expanded={open}
          >
            <span className="sr-only">Navigation Menu</span>
            <Menu className="size-6" />
          </button>
        </div>

        {/* Navigation links */}
        <div
          id="menu-collapse"
          className={`w-full ms-auto lg_992:w-auto ${open ? "block" : "hidden"} lg_992:flex lg_992:order-1`}
        >
          <ul className="flex flex-col gap-2 lg_992:flex-row lg_992:gap-0">
            {[
              { href: "#home", label: "Home" },
              { href: "#features", label: "Features" },
              { href: "#screenshot", label: "Application" },
              { href: "#faqs", label: "FAQs" },
              { href: "#download", label: "Download" },
              { href: "#reviews", label: "Reviews" },
              { href: "#contact", label: "Contact us" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 px-4 hover:text-red-500 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
