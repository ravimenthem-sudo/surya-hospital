import React, { useEffect, useRef, useState } from "react";

/**
 * AnimateIn Component
 * Provides smooth, high-performance scroll-triggered animations:
 * - "fade-up": smooth pop-up from bottom
 * - "fade-down": smooth pop-down from top
 * - "slide-left": text/content sliding gracefully from the left
 * - "slide-right": text/content sliding gracefully from the right
 * - "pop": bouncy scale pop
 */
export function AnimateIn({
  children,
  animation = "fade-up", // "fade-up" | "fade-down" | "slide-left" | "slide-right" | "pop"
  delay = 0, // delay in ms (0, 100, 200, 300, etc.)
  duration = 700, // duration in ms
  className = "",
  threshold = 0.15,
  once = true,
  as: Component = "div",
  ...props
}) {
  // Check reduced motion synchronously to avoid cascading renders
  const getInitialReducedMotion = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  };

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialReducedMotion);
  const [isVisible, setIsVisible] = useState(true);
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setIsVisible(true);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMotionChange);
    } else {
      mediaQuery.addListener(handleMotionChange);
    }

    if (mediaQuery.matches) {
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener("change", handleMotionChange);
        } else {
          mediaQuery.removeListener(handleMotionChange);
        }
      };
    }

    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "50px 0px 50px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMotionChange);
      } else {
        mediaQuery.removeListener(handleMotionChange);
      }
    };
  }, [threshold, once]);

  // If user prefers reduced motion, render immediately without translation/delay
  if (prefersReducedMotion) {
    return (
      <Component ref={elementRef} className={className} {...props}>
        {children}
      </Component>
    );
  }

  // Initial and visible transform styles based on animation type
  const getTransformStyle = () => {
    if (isVisible) {
      return "translate3d(0, 0, 0) scale(1)";
    }

    switch (animation) {
      case "slide-left":
        return "translate3d(-40px, 0, 0)";
      case "slide-right":
        return "translate3d(40px, 0, 0)";
      case "fade-down":
        return "translate3d(0, -30px, 0)";
      case "pop":
        return "translate3d(0, 20px, 0) scale(0.95)";
      case "fade-up":
      default:
        return "translate3d(0, 30px, 0)";
    }
  };

  return (
    <Component
      ref={elementRef}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Fluid deceleration curve
        willChange: "transform, opacity",
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default AnimateIn;
