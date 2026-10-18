import React from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left", // 'left' | 'center'
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-8 sm:mb-12 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#C65332] bg-[#F8E6DC] border border-[#E9D7C7] px-2.5 py-1 rounded-full mb-3">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#292D32] leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#62666D] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
