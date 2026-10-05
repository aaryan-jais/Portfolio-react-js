import React from "react";

function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm tracking-[0.01em] text-[#B9BDB5]">
            © 2026 Aaryan Raj. All rights reserved.
          </p>

          <p className="text-xs uppercase tracking-[0.16em] text-[#899083]">
            Frontend Developer · UI Specialist
          </p>

          <span className="text-sm font-semibold tracking-[0.03em] text-[#6E915F]">
            Aaryan Raj<span className="text-white">.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;