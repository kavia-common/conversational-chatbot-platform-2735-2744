export const styleThemeData = {
  name: "Ocean Professional",
  description: "Blue & amber accents",
  primary: "#2563EB", // Blue-600
  secondary: "#F59E0B", // Amber-500
  success: "#F59E0B", // Align success accent to amber per style data
  error: "#EF4444", // Red-500
  gradientFrom: "rgba(59,130,246,0.10)", // blue-500/10
  gradientTo: "#F9FAFB", // gray-50
  background: "#F9FAFB",
  surface: "#FFFFFF",
  text: "#111827",
} as const;

export type Theme = typeof styleThemeData;

/**
 * PUBLIC_INTERFACE
 * getShadow: Returns a subtle, modern shadow token.
 */
export function getShadow(level: 1 | 2 = 1) {
  return level === 1
    ? "0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.04)"
    : "0 8px 24px rgba(0,0,0,0.08)";
}

/**
 * PUBLIC_INTERFACE
 * gradientBackground: Provides a subtle ocean-inspired gradient.
 */
export function gradientBackground() {
  return `linear-gradient(180deg, ${styleThemeData.gradientFrom}, ${styleThemeData.gradientTo})`;
}
