import React from "react";

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  disabled = false,
  type = "button",
  onClick,
  href,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E56A2E] disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer transform-gpu hover:-translate-y-0.5 active:translate-y-0 active:scale-97";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-7 py-3.5 text-base rounded-xl gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#C85235] to-[#A84328] hover:from-[#A84328] hover:to-[#8F371F] text-white shadow-sm hover:shadow-md focus:ring-[#A84328]",
    terracotta:
      "bg-gradient-to-r from-[#C85235] to-[#A84328] hover:from-[#A84328] hover:to-[#8F371F] text-white shadow-sm hover:shadow-md focus:ring-[#A84328]",
    navy:
      "bg-[#1A1D20] hover:bg-[#082E37] text-white shadow-sm hover:shadow-md focus:ring-[#1A1D20]",
    accent:
      "bg-[#A84328] hover:bg-[#8F371F] text-white shadow-sm hover:shadow-md focus:ring-[#A84328]",
    emergency:
      "bg-[#A84328] hover:bg-[#8F371F] text-white shadow-lg hover:shadow-xl focus:ring-[#A84328]",
    secondary:
      "bg-white border border-[#E2D9D0] text-[#1A1D20] hover:bg-[#FFF9F3] hover:text-[#A84328] hover:border-[#A84328] shadow-xs focus:ring-[#A84328]",
    outline:
      "border border-[#E2D9D0] bg-transparent text-[#1A1D20] hover:bg-[#FFF9F3] hover:text-[#A84328] hover:border-[#A84328] focus:ring-[#A84328]",
    ghost:
      "text-[#1A1D20] hover:bg-[#F8E6DC]/40 hover:text-[#A84328] focus:ring-[#A84328]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${fullWidth ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className={size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
export default Button;
