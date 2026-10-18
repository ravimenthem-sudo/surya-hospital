import React from "react";

export function Container({
  children,
  className = "",
  size = "default", // default | narrow | wide | full
  as: Component = "div",
  ...props
}) {
  const sizeStyles = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeStyles[size] || sizeStyles.default} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
