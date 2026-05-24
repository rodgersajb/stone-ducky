"use client";
import { getDailySpecial } from "@/utils/getDailySpecial";

export default function DailySpecial() {
  const special = getDailySpecial();

  if (!special || !special.special) return null;

  return (
    <div className="relative flex justify-center px-4 py-10">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[90%] h-[120%] bg-gradient-to-r from-[#A68C75]/30 via-[#5A6B5B]/40 to-[#A68C75]/30 blur-3xl opacity-70 rounded-full"></div>
      </div>

      {/* Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-[#5A6B5B]/90 backdrop-blur-md shadow-2xl border border-white/10 overflow-hidden">
        {/* Accent top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#A68C75] via-white to-[#A68C75]" />

        <div className="p-8 text-center text-white">
          {/* Day badge */}
          <div className="inline-block mb-4 px-4 py-1 text-sm tracking-widest uppercase bg-white/10 rounded-full border border-white/20">
            {special.name}
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold mb-3 leading-tight">
            Daily Special
          </h2>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-[#A68C75] mx-auto mb-4" />

          {/* Special */}
          <p className="text-xl font-semibold mb-2">{special.special}</p>

          {/* Description */}
          {special.description && (
            <p className="text-sm text-white/80 leading-relaxed max-w-md mx-auto">
              {special.description}
            </p>
          )}
        </div>

        {/* Subtle hover effect */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none transition duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]" />
      </div>
    </div>
  );
}
