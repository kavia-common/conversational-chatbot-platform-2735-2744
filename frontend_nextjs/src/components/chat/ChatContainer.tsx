import React from "react";
import ChatBubble from "./ChatBubble";
import type { ChatMessage } from "./ChatPage";

interface ChatContainerProps {
  messages: ChatMessage[];
  isLoading?: boolean;
}

/**
 * PUBLIC_INTERFACE
 * ChatContainer: Scrollable chat area that lists messages and a loading bubble.
 */
export default function ChatContainer({ messages, isLoading }: ChatContainerProps) {
  return (
    <section
      role="log"
      aria-live="polite"
      className="max-h-[calc(100vh-260px)] min-h-[40vh] w-full overflow-y-auto p-4"
    >
      <ul className="flex flex-col gap-3">
        {messages.map((m) => (
          <li key={m.id}>
            <ChatBubble role={m.role} content={m.content} timestamp={m.timestamp} />
          </li>
        ))}
        {isLoading && (
          <li aria-busy="true" aria-label="Assistant is typing">
            <ChatBubble role="assistant" content="Typing…" isTyping />
          </li>
        )}
      </ul>
    </section>
  );
}
