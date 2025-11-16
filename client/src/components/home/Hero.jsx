// src/components/home/Hero.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ---------- Nav config ---------- */

const NAV_LINKS = [
  { label: "Home", type: "link", to: "/" },          // home page
  { label: "Features", type: "anchor", href: "#features" }, // scroll to features section
  { label: "Contact", type: "anchor", href: "#footer" },    // scroll to footer
];

/* ---------- Small reusable buttons ---------- */

const PrimaryButtonLink = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 active:scale-95"
  >
    {children}
  </Link>
);

const OutlineButtonLink = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center justify-center rounded-md border border-indigo-600 px-6 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 active:scale-95"
  >
    {children}
  </Link>
);

/* ---------- Hero component ---------- */

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section
      aria-label="Resume Builder hero"
      className="w-full flex flex-col items-center text-sm bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Navbar */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
        <Link to="/" aria-label="Go to home">
          <img alt="Resume Builder logo" className="h-11 w-auto" src="logo.svg" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          {NAV_LINKS.map((link) =>
            link.type === "link" ? (
              <Link
                key={link.label}
                to={link.to}
                className="hover:text-slate-500 transition"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-500 transition"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <PrimaryButtonLink to="/app?state=register">
            Get Started
          </PrimaryButtonLink>
          <OutlineButtonLink to="/app?state=login">
            Login
          </OutlineButtonLink>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navLinks"
          className="md:hidden active:scale-90 transition"
          onClick={() => setMobileOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile nav overlay */}
      <div
        id="mobile-navLinks"
        role="dialog"
        aria-modal="true"
        className={
          "fixed inset-0 z-[100] bg-white/60 text-slate-800 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 " +
          (mobileOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        {NAV_LINKS.map((link) =>
          link.type === "link" ? (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="hover:text-slate-600 transition"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-slate-600 transition"
            >
              {link.label}
            </a>
          )
        )}

        <PrimaryButtonLink to="/app?state=register">
          Get Started
        </PrimaryButtonLink>

        <button
          type="button"
          id="close-menu"
          aria-label="Close navigation menu"
          className="mt-4 active:ring-2 active:ring-white aspect-square size-10 p-1 flex items-center justify-center rounded-md bg-slate-100 hover:bg-slate-200 transition text-black"
          onClick={() => setMobileOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* Main hero content */}
      <main className="flex flex-col items-center max-md:px-4">
        <a
          href="https://prebuiltui.com"
          className="mt-32 flex items-center gap-2 border border-indigo-200 rounded-full p-1 pr-3 text-sm font-medium text-indigo-500 bg-indigo-200/20"
        >
          <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
            NEW
          </span>
          <span className="flex items-center gap-1">
            Try 7 days free trial option
            <svg
              className="mt-1"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1 1 4 3.5L1 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        <h1 className="mt-6 text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-4xl text-slate-900">
          Create your own resume like a pro.
        </h1>

        <p className="mt-3 text-center text-base text-slate-700 max-w-lg">
          Our platform helps you build a tailored resume for every job. With AI
          assistance, you can go from blank page to polished resume in minutes.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButtonLink to="/app?state=register">
            <span className="mr-1">Get started</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.166 10h11.667m0 0L9.999 4.165m5.834 5.833-5.834 5.834"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </PrimaryButtonLink>

          <button
            type="button"
            className="border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-lg px-8 h-11 text-sm font-medium"
          >
            View demo
          </button>
        </div>

        {/* Dashboard screenshot */}
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/dashboard-image-1.png"
          className="w-full rounded-[15px] max-w-4xl mt-16 shadow-sm"
          alt="Resume analytics dashboard preview"
        />
      </main>
    </section>
  );
};

export default Hero;
