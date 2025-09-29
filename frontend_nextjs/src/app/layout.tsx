import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean Chat • Professional Assistant",
  description:
    "A modern ocean-themed conversational interface with blue and amber accents.",
  applicationName: "Ocean Chat",
  authors: [{ name: "Ocean Chat" }],
  keywords: ["chatbot", "Next.js", "conversation", "assistant", "ocean"],
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
