"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Prices & Process", href: "/prices-and-process", icon: "P" },
  { label: "Projects", href: "/project", icon: "P" },
];

const productLinks = [
  {
    label: "Neon",
    href: "/led-neon-configurator",
    icon: "N",
  },
  {
    label: "Letters",
    href: "/letters-configurator",
    icon: "L",
  },
  {
    label: "Glass Neon",
    href: "/glass-neon-configurator",
    icon: "G",
  },
  {
    label: "Moss",
    href: "/moss-configurator",
    icon: "M",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/nlogo.webp"
            alt="Sign Vivid"
            width={190}
            height={80}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li className="group relative">
            <Link
              href="/configurator-selection"
              className="flex items-center gap-1.5 text-sm font-medium text-brand-mid transition-colors hover:text-brand-orange"
              aria-haspopup="true"
            >
              Products
              <ChevronDown
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                strokeWidth={2.25}
              />
            </Link>

            <div className="pointer-events-none absolute left-1/2 top-full w-48 -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-md border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5">
                {productLinks.map((product) => (
                  <Link
                    key={product.label}
                    href={product.href}
                    className="flex items-center gap-3 rounded px-3 py-2.5 text-sm font-medium text-brand-mid transition hover:bg-orange-50 hover:text-brand-orange"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-orange-50 text-[10px] font-black text-brand-orange">
                      {product.icon}
                    </span>
                    <span>{product.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-sm font-medium text-brand-mid transition-colors hover:text-brand-orange"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="text-sm font-medium text-brand-mid transition-colors hover:text-brand-orange"
            >
              Contact
            </button>
          </li>
          <li>
            <Link
              href="/quote"
              className="rounded bg-brand-orange px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-1 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-brand-dark transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-brand-dark transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-brand-dark transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation"
        className={`fixed left-0 top-0 z-50 h-screen w-[min(86vw,340px)] bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="mb-7 flex items-center justify-between gap-4 border-b border-gray-100 pb-5">
            <Image
              src="/nlogo.webp"
              alt="Sign Vivid"
              width={190}
              height={80}
              className="h-11 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="group flex h-11 w-11 items-center justify-center rounded border border-gray-200 bg-white text-brand-dark shadow-sm transition hover:border-brand-orange hover:bg-orange-50"
              aria-label="Close menu"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded bg-current transition group-hover:text-brand-orange" />
                <span className="absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded bg-current transition group-hover:text-brand-orange" />
              </span>
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            <div>
              <Link
                href="/configurator-selection"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 rounded-md px-1 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-brand-dark transition hover:bg-orange-50 hover:text-brand-orange"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-gray-200 bg-gray-50 text-xs font-black text-brand-orange transition group-hover:border-orange-200 group-hover:bg-white">
                  PR
                </span>
                <span>Products</span>
              </Link>

              <div className="ml-12">
                {productLinks.map((product) => (
                  <Link
                    key={product.label}
                    href={product.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-semibold text-brand-mid transition hover:bg-orange-50 hover:text-brand-orange"
                  >
                    {product.label}
                  </Link>
                ))}
              </div>
            </div>

            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 rounded-md px-1 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-brand-dark transition hover:bg-orange-50 hover:text-brand-orange"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-gray-200 bg-gray-50 text-xs font-black text-brand-orange transition group-hover:border-orange-200 group-hover:bg-white">
                  {l.icon}
                </span>
                <span>{l.label}</span>
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setContactOpen(true);
              }}
              className="group flex items-center gap-4 rounded-md px-1 py-3.5 text-left text-sm font-bold uppercase tracking-[0.14em] text-brand-dark transition hover:bg-orange-50 hover:text-brand-orange"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-gray-200 bg-gray-50 text-xs font-black text-brand-orange transition group-hover:border-orange-200 group-hover:bg-white">
                C
              </span>
              <span>Contact</span>
            </button>
          </nav>

          <div className="mt-auto space-y-3 border-t border-gray-100 pt-5">
            <a href="tel:+447876097226" className="block text-sm font-semibold text-brand-mid">
              +44 7876097226
            </a>
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="block rounded bg-brand-orange px-5 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition hover:bg-orange-600"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {contactOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[1px]"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="absolute right-4 top-20 w-[min(430px,calc(100vw-2rem))] rounded-xl border border-gray-100 bg-white p-6 text-brand-dark shadow-2xl md:right-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4 text-left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
                  Contact
                </p>
                <h2 className="mt-1 text-2xl font-bold">How can we help?</h2>
              </div>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact popup"
                className="group flex h-11 w-11 items-center justify-center rounded border border-gray-200 bg-white text-brand-dark shadow-sm transition hover:border-brand-orange hover:bg-orange-50"
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded bg-current transition group-hover:text-brand-orange" />
                  <span className="absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded bg-current transition group-hover:text-brand-orange" />
                </span>
              </button>
            </div>

            <a
              href="tel:+447876097226"
              className="block rounded-lg bg-orange-50 px-4 py-3 text-center text-xl font-semibold text-brand-orange"
            >
              +44 7876097226
            </a>

            <p className="mt-3 text-center text-sm font-medium text-brand-mid">
              Mon. - Fri. 9:00 - 17:00
            </p>

            <Link
              href="/quote"
              onClick={() => setContactOpen(false)}
              className="mt-6 block rounded bg-brand-dark px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-orange"
            >
              Contact form
            </Link>

            <a
              href="https://wa.me/447876097226"
              className="mt-3 block rounded border border-brand-dark px-5 py-3 text-center text-sm font-semibold text-brand-dark transition hover:border-brand-orange hover:text-brand-orange"
            >
              WhatsApp
            </a>

            <a
              href="/support"
              className="mt-5 block text-center text-sm font-semibold text-brand-orange underline underline-offset-4"
            >
              Our Support site
            </a>

            <div className="mt-6 space-y-4 border-t border-gray-100 pt-5 text-center text-sm leading-relaxed text-brand-mid">
              <div>
                <p className="font-medium text-brand-dark">Cooperations & media</p>
                <a className="underline underline-offset-4" href="mailto:media@signvivid.com">
                  media@signvivid.com
                </a>
              </div>

              <div>
                <p className="font-medium text-brand-dark">Further requests</p>
                <a className="underline underline-offset-4" href="mailto:projects@signvivid.com">
                  projects@signvivid.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
