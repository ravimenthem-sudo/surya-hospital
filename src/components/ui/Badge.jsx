import React from "react";

export function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  className = "",
}) {
  const baseStyles = "inline-flex items-center font-medium rounded-full";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] gap-1",
    md: "px-2.5 py-1 text-xs gap-1.5",
    lg: "px-3.5 py-1.5 text-sm gap-2",
  };

  const variantStyles = {
    default: "bg-[#FFF9F3] text-[#292D32] border border-[#E9D7C7]",
    teal: "bg-[#F8E6DC] text-[#C65332] border border-[#E9D7C7]",
    navy: "bg-[#292D32] text-white border border-[#3E434B]",
    emergency: "bg-[#F8E6DC] text-[#C65332] border border-[#E9D7C7]",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    outline: "bg-transparent text-[#62666D] border border-[#E9D7C7]",
  };

  const dotColor = {
    default: "bg-[#C65332]",
    teal: "bg-[#C65332]",
    navy: "bg-white",
    emergency: "bg-[#C65332] animate-pulse",
    success: "bg-emerald-500",
    outline: "bg-[#C65332]",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
        variantStyles[variant] || variantStyles.default
      } ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            dotColor[variant] || dotColor.default
          }`}
        />
      )}
      <span>{children}</span>
    </span>
  );
}
