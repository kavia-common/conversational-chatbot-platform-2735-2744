"use client";

import React, { useCallback, useRef, useState } from "react";
import { styleThemeData } from "@/theme/theme";

interface ChatInputProps {
  onSend: (value: string) => void | Promise<void>;
}

/**
 * PUBLIC_INTERFACE
 * ChatInput: Fixed bottom input with send action. Handles Enter to send, Shift+Enter for new line.
 */
export default function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState("");
  const [sending, setSending] = useState(false);
  const areaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSend = useCallback(async () => {
    const text = value.trim();
    if (!text || sending) return;
    setSending(true);
    try {
      await onSend(text);
      setValue("");
      areaRef.current?.focus();
    } finally {
      setSending(false);
    }
  }, [onSend, sending, value]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0"
      style={{ backgroundColor: "transparent" }}
      role="region"
      aria-label="Chat input area"
    >
      <div className="mx-auto w-full max-w-4xl px-4 pb-5">
        <div
          className="flex items-end gap-3 rounded-2xl p-3"
          style={{
            backgroundColor: styleThemeData.surface,
            border: "1px solid rgba(37,99,235,0.12)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          }}
        >
          <textarea
            ref={areaRef}
            aria-label="Type your message"
            placeholder="Message the assistant..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            className="max-h-40 min-h-[44px] w-full resize-none rounded-xl bg-transparent px-3 py-2 outline-none"
            style={{ color: styleThemeData.text }}
          />
          <button
            onClick={handleSend}
            disabled={!value.trim() || sending}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors"
            style={{
              backgroundColor: value.trim() ? styleThemeData.primary : "rgba(17,24,39,0.08)",
              color: value.trim() ? "#FFFFFF" : "rgba(17,24,39,0.55)",
              border: value.trim()
                ? "1px solid rgba(255,255,255,0.25)"
                : "1px solid rgba(17,24,39,0.10)",
            }}
          >
            {sending ? "Sending..." : "Send"}
          </button>
        </div>
        <div className="mt-2 text-center text-xs opacity-70" style={{ color: styleThemeData.text }}>
          Press Enter to send • Shift+Enter for a new line
        </div>
      </div>
    </div>
  );
}
