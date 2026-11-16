"use client";

import { FormEvent, useState } from "react";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
}

const initialMessages: ChatMessage[] = [
  {
    sender: "bot",
    text: "Hello! 👋 I'm here to help. Ask me about our services, pricing, or book a consultation!",
  },
];

function MascotSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 130"
      className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_8px_16px_rgba(0,131,209,0.28)]"
      aria-hidden="true"
    >
      {/* Ground shadow */}
      <ellipse cx="60" cy="122" rx="28" ry="4" fill="#d1d5db" opacity="0.85" />

      {/* Left & Right animated arms (hands) */}
      <rect
        x="26"
        y="88"
        width="11"
        height="22"
        rx="5.5"
        fill="#0083d1"
        className="chatbot-arm-left"
      />
      <rect
        x="83"
        y="88"
        width="11"
        height="22"
        rx="5.5"
        fill="#0083d1"
        className="chatbot-arm-right"
      />

      {/* Left & Right walking legs */}
      <rect
        x="42"
        y="100"
        width="11"
        height="16"
        rx="5.5"
        fill="#0083d1"
        className="chatbot-leg-left"
      />
      <rect
        x="67"
        y="100"
        width="11"
        height="16"
        rx="5.5"
        fill="#0083d1"
        className="chatbot-leg-right"
      />

      {/* Torso */}
      <path
        d="M42 96 C42 82, 78 82, 78 96 L78 104 C78 107, 42 107, 42 104 Z"
        fill="#0083d1"
      />

      {/* Left & Right dark ear pieces */}
      <rect x="13" y="45" width="10" height="20" rx="4" fill="#221c29" />
      <rect x="97" y="45" width="10" height="20" rx="4" fill="#221c29" />

      {/* Orange head with top-right cowlick spike */}
      <path
        d="M21 50 C21 26, 36 20, 56 18 L86 8 C89 7, 91 10, 88 15 L84 22 C95 27, 99 36, 99 50 L99 61 C99 78, 86 86, 60 86 C34 86, 21 78, 21 61 Z"
        fill="#0083d1"
      />

      {/* Dark visor face */}
      <rect x="29" y="29" width="62" height="47" rx="18" fill="#221c29" />

      {/* White eyes */}
      <circle cx="46" cy="52" r="6.5" fill="#ffffff" />
      <circle cx="74" cy="52" r="6.5" fill="#ffffff" />

      {/* Cute white smile */}
      <path d="M56 59 Q60 65 64 59 Z" fill="#ffffff" />
    </svg>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const reply =
      trimmed.toLowerCase().includes("service")
        ? "We offer UI/UX Design, Web Design, Landing Pages, Mobile Apps, Brand Identity, and E-Commerce solutions."
        : trimmed.toLowerCase().includes("price") ||
            trimmed.toLowerCase().includes("cost")
          ? "Project pricing depends on scope — click 'Schedule a Free Consultation' or Quick Enquiry for a tailored quote!"
          : "Thanks for reaching out! Our team usually responds within 1–3 hours. Feel free to leave your email or project idea.";

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: trimmed },
      { sender: "bot", text: reply },
    ]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(input);
    setInput("");
  };

  return (
    <>
      <style>{`
        @keyframes chatbot-patrol {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-44px);
          }
        }
        @keyframes chatbot-jump {
          0%, 100% {
            transform: translateY(0px) scale(1, 1);
          }
          25% {
            transform: translateY(-12px) scale(0.98, 1.03);
          }
          45% {
            transform: translateY(0px) scale(1.03, 0.97);
          }
          65% {
            transform: translateY(-7px) scale(0.99, 1.02);
          }
          85% {
            transform: translateY(0px) scale(1, 1);
          }
        }
        @keyframes chatbot-arm-left {
          0%, 100% {
            transform: rotate(-16deg);
          }
          50% {
            transform: rotate(22deg);
          }
        }
        @keyframes chatbot-arm-right {
          0%, 100% {
            transform: rotate(18deg);
          }
          25% {
            transform: rotate(-42deg);
          }
          50% {
            transform: rotate(-22deg);
          }
          75% {
            transform: rotate(-45deg);
          }
        }
        @keyframes chatbot-leg-left {
          0%, 100% {
            transform: rotate(-18deg) translateY(-1.5px);
          }
          50% {
            transform: rotate(18deg) translateY(0.5px);
          }
        }
        @keyframes chatbot-leg-right {
          0%, 100% {
            transform: rotate(18deg) translateY(0.5px);
          }
          50% {
            transform: rotate(-18deg) translateY(-1.5px);
          }
        }
        .animate-chatbot-patrol {
          animation: chatbot-patrol 4s ease-in-out infinite;
        }
        .animate-chatbot-jump {
          animation: chatbot-jump 2s ease-in-out infinite;
        }
        .chatbot-arm-left {
          transform-origin: 31.5px 91px;
          animation: chatbot-arm-left 0.9s ease-in-out infinite;
        }
        .chatbot-arm-right {
          transform-origin: 88.5px 91px;
          animation: chatbot-arm-right 1.2s ease-in-out infinite;
        }
        .chatbot-leg-left {
          transform-origin: 47.5px 101px;
          animation: chatbot-leg-left 0.55s ease-in-out infinite;
        }
        .chatbot-leg-right {
          transform-origin: 72.5px 101px;
          animation: chatbot-leg-right 0.55s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed bottom-4 right-5 z-50 flex flex-col items-end gap-3">
        {/* Chat Popover Window */}
        {open && (
          <div className="w-80 sm:w-96 bg-[#141414] border border-white/15 rounded-3xl shadow-2xl overflow-hidden text-white">
            {/* Header */}
            <div className="bg-[#1e1e1e] px-5 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0083d1] animate-pulse" />
                <div>
                  <h3 className="text-sm font-bold text-white leading-none">
                    Studio Assistant
                  </h3>
                  <span className="text-[11px] text-gray-400">
                    Online • Replies fast
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 rounded-full bg-[#262626] hover:bg-[#0083d1] text-gray-300 hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 max-h-64 overflow-y-auto text-xs sm:text-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#0083d1] text-white rounded-br-xs"
                        : "bg-[#262626] text-gray-200 border border-white/10 rounded-bl-xs"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {["Our Services", "Pricing", "Book a Call"].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => sendMessage(chip)}
                  className="text-[11px] bg-[#262626] hover:bg-[#0083d1] border border-white/10 text-gray-200 hover:text-white px-2.5 py-1 rounded-full transition-colors cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                aria-label="Type a message"
                className="flex-1 min-w-0 bg-[#262626] border border-white/10 rounded-full px-3.5 py-2 text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0083d1]"
              />
              <button
                type="submit"
                className="bg-[#0083d1] hover:bg-[#006eb0] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer shrink-0"
              >
                Send
              </button>
            </form>
          </div>
        )}

        {/* Animated Mascot Button (moves left-right + jumps + says Hello!) */}
        <div className="animate-chatbot-patrol">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle Chatbot"
            className="animate-chatbot-jump relative flex flex-col items-center cursor-pointer focus:outline-none group"
          >
            {!open && (
              <span className="mb-1 bg-[#141414] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-lg border border-white/15 whitespace-nowrap group-hover:bg-[#0083d1] transition-colors">
                Hello! 👋
              </span>
            )}
            <MascotSvg />
          </button>
        </div>
      </div>
    </>
  );
}

