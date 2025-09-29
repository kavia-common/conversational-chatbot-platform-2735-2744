# Ocean Chat – Next.js Frontend

A modern, ocean-themed conversational UI built with Next.js. It features a header with branding, a centered chat container with message bubbles, and a fixed input bar at the bottom.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Structure

- `src/theme/theme.ts` – Ocean Professional theme tokens and helpers.
- `src/components/chat/` – Chat UI components.
  - `ChatPage.tsx` – Main page with minimal state and integration hooks.
  - `Header.tsx` – App header with ocean gradient badge.
  - `ChatContainer.tsx` – Scrollable chat history.
  - `ChatBubble.tsx` – Message bubble with role-based styling.
  - `ChatInput.tsx` – Fixed input bar with send button and shortcuts.
- `src/app/page.tsx` – Entry point rendering ChatPage.
- `src/app/globals.css` – Global styles, theme CSS variables, and animations.
- `src/app/layout.tsx` – Application metadata and layout wrapper.

## Style Guide

Ocean Professional palette (blue and amber accents), modern minimal aesthetic with subtle shadows, rounded corners, and smooth transitions. Colors and shadows sourced from `styleThemeData` and used across components.

## Backend Integration

Currently, responses are simulated. To connect a backend:

1. Provide a public env var in your deployment:
   - NEXT_PUBLIC_BACKEND_API_URL=https://your-backend.example.com
2. Replace the `simulateAssistantResponse` in `ChatPage.tsx` with a real call:
   ```ts
   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/chat`, {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ messages }),
   });
   const data = await res.json();
   const assistantText = data.reply;
   ```
3. For streaming, use `ReadableStream` from `fetch` or a WebSocket and progressively append tokens to the assistant message.

## Accessibility

- Keyboard shortcuts: Enter to send, Shift+Enter for newline.
- Focus styles for interactive elements.
- ARIA labels on chat regions and messages.

## License

MIT
