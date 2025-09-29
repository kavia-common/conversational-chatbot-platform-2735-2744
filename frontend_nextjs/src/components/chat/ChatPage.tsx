"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { getShadow, gradientBackground } from "@/theme/theme";
import Header from "./Header";
import ChatContainer from "./ChatContainer";
import ChatInput from "./ChatInput";

export type Role = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  timestamp: number;
}

const initialGreeting: ChatMessage = {
  id: "greeting-1",
  role: "assistant",
  content:
    "Hello! I’m your ocean-inspired assistant. Ask me anything and I’ll do my best to help.",
  timestamp: Date.now(),
};

/**
 * PUBLIC_INTERFACE
 * ChatPage: Top-level chat experience with minimal local state.
 * - Holds messages state
 * - Simulates a response for now
 * - Contains TODO where backend integration should occur
 */
export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  // Smooth auto-scroll on new messages
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Example: simulate assistant response with a small delay
  const simulateAssistantResponse = async () => {
    setIsLoading(true);

    // TODO: Replace this simulation with real backend integration.
    // Integration points:
    // 1) REST: POST to /api/chat with the conversation, receive assistant reply
    // 2) Streaming: Use fetch + ReadableStream or WebSocket to stream tokens
    // 3) Env vars: Provide BACKEND_API_URL via .env for target server
    // Example:
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/chat`, { ... });
    // const data = await res.json();
    // const assistantText = data.reply;

    await new Promise((r) => setTimeout(r, 850));
    const assistantText =
      "This is a simulated response. Connect a backend to receive real answers.";

    setMessages((prev) => [
      ...prev,
      {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: assistantText,
        timestamp: Date.now(),
      },
    ]);
    setIsLoading(false);
  };

  const handleSend = async (value: string) => {
    if (!value.trim()) return;
    const newMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: value.trim(),
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, newMsg]);
    await simulateAssistantResponse();
  };

  const containerStyle = useMemo(
    () => ({
      background: gradientBackground(),
      minHeight: "100vh",
    }),
    []
  );

  return (
    <div style={containerStyle} className="flex flex-col">
      <Header title="Ocean Chat" subtitle="Professional conversational assistant" />
      <main
        className="relative mx-auto w-full max-w-4xl px-4 pb-[128px] pt-4"
        aria-label="Chat area"
      >
        <div
          className="rounded-2xl bg-white/90 backdrop-blur-sm"
          style={{ boxShadow: getShadow(2), border: "1px solid rgba(37,99,235,0.10)" }}
        >
          <ChatContainer messages={messages} isLoading={isLoading} />
        </div>

        <div ref={endRef} />
      </main>
      <ChatInput onSend={handleSend} />
    </div>
  );
}
