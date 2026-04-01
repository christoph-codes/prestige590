"use client";

import { Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function PhoneButton({
  variant = "primary",
  size = "md",
  className,
}: PhoneButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold tracking-wide transition-all duration-300 rounded-full cursor-pointer";

  const variants = {
    primary:
      "bg-[#c9a84c] text-[#05091a] hover:bg-[#e8d5a3] shadow-lg shadow-[#c9a84c]/20",
    secondary:
      "border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#05091a]",
    ghost: "text-[#c9a84c] hover:text-[#e8d5a3]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={PHONE_HREF}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      <Phone
        className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"}
        strokeWidth={2}
      />
      <span>{PHONE_NUMBER}</span>
    </a>
  );
}
