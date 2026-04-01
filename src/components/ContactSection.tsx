"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionWrapper from "./SectionWrapper";
import PhoneButton from "./PhoneButton";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-lg text-sm text-[#f5f0e8] placeholder-[#8892a4] outline-none transition-all duration-300 border border-white/10 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/30";

  return (
    <SectionWrapper id="contact" className="bg-[#05091a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <AnimateOnScroll direction="left">
          <div className="w-12 h-px bg-[#c9a84c] mb-8" />
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Schedule a Private Showing
          </h2>
          <p className="text-[#8892a4] leading-relaxed mb-10 text-lg">
            Our team is available 7 days a week to arrange an exclusive showing
            at Marina Del Rey.
          </p>

          <div className="mb-6">
            <PhoneButton variant="primary" size="lg" />
          </div>

          <a
            href="mailto:contact@prestige590.com"
            className="inline-flex items-center gap-2.5 text-[#8892a4] hover:text-[#c9a84c] transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">contact@prestige590.com</span>
          </a>
        </AnimateOnScroll>

        {/* Right: Form */}
        <AnimateOnScroll direction="right" delay={0.15}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-xl border border-[#c9a84c]/30"
              style={{ background: "#0a0f25" }}>
              <CheckCircle className="w-14 h-14 text-[#c9a84c] mb-5" strokeWidth={1.5} />
              <h3
                className="text-2xl font-bold text-[#f5f0e8] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Message Received
              </h3>
              <p className="text-[#8892a4]">
                Thank you for your interest. Our team will be in touch within 24
                hours to arrange your private showing.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-xl border border-white/8"
              style={{ background: "#0a0f25" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-[#8892a4] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={inputClass}
                    style={{ background: "#080d20" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-[#8892a4] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(xxx) xxx-xxxx"
                    className={inputClass}
                    style={{ background: "#080d20" }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#8892a4] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className={inputClass}
                  style={{ background: "#080d20" }}
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold tracking-widest uppercase text-[#8892a4] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your interest and preferred showing time..."
                  className={inputClass}
                  style={{ background: "#080d20", resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 rounded-full bg-[#c9a84c] text-[#05091a] font-semibold text-sm tracking-widest uppercase hover:bg-[#e8d5a3] transition-all duration-300 shadow-lg shadow-[#c9a84c]/20"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
