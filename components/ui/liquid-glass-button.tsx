"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface LiquidButtonProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
}

const sizeClasses = {
  default: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
  lg: "px-8 py-5 text-base",
  xl: "px-10 py-6 text-lg",
};

export function LiquidButton({
  children,
  className,
  size = "default",
  onClick,
  type = "button",
}: LiquidButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    const ripple = rippleRef.current;
    if (!btn || !ripple) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
  };

  return (
    <button
      ref={btnRef}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full",
        "border border-[#27272a] bg-white/[0.03] backdrop-blur-md",
        "font-medium text-white transition-all duration-300",
        "hover:border-white/20 hover:bg-white/[0.06]",
        "active:scale-[0.98]",
        sizeClasses[size],
        className
      )}
    >
      <span
        ref={rippleRef}
        className="pointer-events-none absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
