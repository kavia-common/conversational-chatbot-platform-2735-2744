import React from "react";
import { styleThemeData, getShadow } from "@/theme/theme";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

/**
 * PUBLIC_INTERFACE
 * Header: App header with branding and subtle gradient underline.
 */
export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header
      className="w-full"
      style={{
        backgroundColor: styleThemeData.surface,
        borderBottom: "1px solid rgba(37,99,235,0.08)",
        boxShadow: getShadow(1),
      }}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div
            aria-hidden
            className="h-9 w-9 rounded-xl"
            style={{
              background: `linear-gradient(135deg, ${styleThemeData.primary} 0%, ${styleThemeData.secondary} 100%)`,
              boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.35)",
            }}
          />
          <div className="leading-tight">
            <h1 className="text-lg font-semibold" style={{ color: styleThemeData.text }}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs opacity-70" style={{ color: styleThemeData.text }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="hidden text-sm md:block">
          <span
            className="rounded-full px-3 py-1"
            style={{
              backgroundColor: "rgba(37,99,235,0.08)",
              color: styleThemeData.primary,
              border: "1px solid rgba(37,99,235,0.15)",
            }}
          >
            Modern • Minimal • Professional
          </span>
        </div>
      </div>
    </header>
  );
}
