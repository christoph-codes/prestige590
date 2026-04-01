import AnimateOnScroll from "./AnimateOnScroll";
import { HIGHLIGHTS } from "@/lib/constants";

export default function HighlightsBar() {
  return (
    <div
      className="w-full border-t border-[#c9a84c] overflow-x-auto"
      style={{ background: "#080d20" }}
    >
      <div className="flex min-w-max md:min-w-0 md:grid md:grid-cols-6">
        {HIGHLIGHTS.map((item, i) => {
          const Icon = item.icon;
          return (
            <AnimateOnScroll key={item.label} delay={i * 0.08}>
              <div
                className={`flex flex-col items-center justify-center gap-2 px-6 py-7 text-center ${
                  i < HIGHLIGHTS.length - 1
                    ? "border-r border-white/10"
                    : ""
                }`}
              >
                <Icon className="w-5 h-5 text-[#c9a84c]" strokeWidth={1.5} />
                <span className="text-xs font-semibold text-[#c9a84c] tracking-widest uppercase whitespace-nowrap">
                  {item.value}
                </span>
                <span className="text-xs text-[#8892a4] tracking-wider uppercase whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>
    </div>
  );
}
