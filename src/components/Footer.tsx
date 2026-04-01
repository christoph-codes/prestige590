import { BOAT_TITLE, LOCATION, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="py-14 px-6 text-center border-t border-white/8"
      style={{ background: "#080d20" }}
    >
      <h3
        className="text-2xl font-bold text-[#f5f0e8] mb-2"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {BOAT_TITLE}
      </h3>
      <p className="text-sm text-[#8892a4] mb-4 tracking-wider uppercase">
        {LOCATION}
      </p>
      <a
        href={PHONE_HREF}
        className="inline-block text-[#c9a84c] font-semibold text-lg hover:text-[#e8d5a3] transition-colors duration-300 mb-8"
      >
        {PHONE_NUMBER}
      </a>

      <div className="w-24 h-px bg-white/10 mx-auto mb-8" />

      <p className="text-xs text-[#8892a4] mb-2">
        © 2024 Prestige 590. All rights reserved. | Listing subject to prior sale.
      </p>
      <p className="text-xs text-[#8892a4]/60">
        All specifications are believed to be accurate but are not guaranteed.
      </p>
    </footer>
  );
}
