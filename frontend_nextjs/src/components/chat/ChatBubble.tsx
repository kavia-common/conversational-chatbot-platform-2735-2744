import React from "react";
import { styleThemeData } from "@/theme/theme";
import type { Role } from "./ChatPage";

interface ChatBubbleProps {
  role: Role;
  content: string;
  timestamp?: number;
  isTyping?: boolean;
}

/**
 * PUBLIC_INTERFACE
 * ChatBubble: Displays a single chat message with role-based styling.
 */
export default function ChatBubble({ role, content, timestamp, isTyping }: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
      aria-label={isUser ? "User message" : "Assistant message"}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm md:max-w-[75%] md:text-base ${
          isUser ? "rounded-br-md" : "rounded-bl-md"
        }`}
        style={{
          backgroundColor: isUser ? styleThemeData.primary : styleThemeData.surface,
          color: isUser ? "white" : styleThemeData.text,
          border: isUser ? "1px solid rgba(37,99,235,0.7)" : "1px solid rgba(17,24,39,0.08)",
          boxShadow: isUser
            ? "0 6px 16px rgba(37,99,235,0.20)"
            : "0 6px 16px rgba(0,0,0,0.06)",
          transition: "transform 150ms ease, box-shadow 150ms ease",
        }}
      >
        {isTyping ? (
          <span className="inline-flex items-center gap-1">
            <Dot /> <Dot delay={150} /> <Dot delay={300} />
          </span>
        ) : (
          <span className="whitespace-pre-wrap">{content}</span>
        )}
        {timestamp && (
          <div
            className={`mt-2 text-[10px] opacity-60 ${
              isUser ? "text-white" : "text-black"
            }`}
          >
            {new Date(timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="h-[6px] w-[6px] rounded-full"
      style={{
        display: "inline-block",
        backgroundColor: styleThemeData.primary,
        animation: "dotPulse 1.2s infinite ease-in-out",
        animationDelay: `${delay}ms`,
      }}
    />
  );
}
