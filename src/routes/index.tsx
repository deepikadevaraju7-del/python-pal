import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { askPython } from "@/lib/ask.functions";
import type { MatchResult } from "@/lib/matcher";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PyCard — Python Q&A Chatbot" },
      {
        name: "description",
        content:
          "Ask Python questions in plain English and get answers from a curated reference deck covering lists, loops, functions, OOP, exceptions and more.",
      },
      { property: "og:title", content: "PyCard — Python Q&A Chatbot" },
      {
        property: "og:description",
        content:
          "A fast Python question-answering chatbot with a built-in knowledge base, topic labels and confidence scores.",
      },
    ],
  }),
  component: ChatPage,
});

type Message =
  | { id: string; role: "user"; text: string }
  | ({ id: string; role: "bot" } & MatchResult)
  | { id: string; role: "error"; text: string };

const SAMPLES = [
  "How do I read a file?",
  "Difference between list and tuple?",
  "How do *args and **kwargs work?",
  "What is a decorator?",
];

let counter = 0;
const nextId = () => `m${++counter}`;

function ChatPage() {
  const ask = useServerFn(askPython);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, pending]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function send(question: string) {
    const trimmed = question.trim();
    if (!trimmed || pending) return;
    setMessages((prev) => [...prev, { id: nextId(), role: "user", text: trimmed }]);
    setInput("");
    setPending(true);
    try {
      const result = await ask({ data: { question: trimmed } });
      setMessages((prev) => [...prev, { id: nextId(), role: "bot", ...result }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId(),
          role: "error",
          text: "I couldn't reach the answer service. Check your connection and try again.",
        },
      ]);
    } finally {
      setPending(false);
      inputRef.current?.focus();
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background font-body text-ink">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-glow absolute -top-32 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute -left-24 top-1/3 h-[340px] w-[340px] rounded-full bg-teal-300/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col px-3 sm:px-5">
        <header className="flex items-center justify-between gap-3 py-4">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-xl bg-ink font-mono text-sm font-medium text-white">
              Py
            </div>
            <div>
              <h1 className="font-display text-base font-semibold leading-none tracking-tight">
                PyCard
              </h1>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Python reference deck · instant answers
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMessages([])}
            className="flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-muted-foreground ring-1 ring-black/5 backdrop-blur transition hover:bg-white hover:text-ink"
          >
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            Clear chat
          </button>
        </header>

        <main className="flex-1 space-y-3 pb-4">
          {messages.length === 0 && !pending && (
            <div className="animate-msg-in rounded-2xl rounded-tl-md bg-white/70 p-4 ring-1 ring-black/5 backdrop-blur">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Ask a Python question in plain English. Every answer comes from a fixed
                knowledge base — <span className="text-ink">basics, variables, data types,
                lists, tuples, dictionaries, sets, conditionals, loops, functions, OOP,
                imports, exceptions, files, comprehensions and common errors</span>.
              </p>
            </div>
          )}

          {messages.map((message) => {
            if (message.role === "user") {
              return (
                <div key={message.id} className="animate-msg-in flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-sm leading-relaxed text-white">
                    {message.text}
                  </div>
                </div>
              );
            }

            if (message.role === "error") {
              return (
                <div key={message.id} className="animate-msg-in flex justify-start">
                  <div className="w-full max-w-[92%] rounded-2xl rounded-tl-md bg-warn-soft/70 p-4 ring-1 ring-warn/20 backdrop-blur">
                    <p className="text-sm leading-relaxed text-warn">{message.text}</p>
                  </div>
                </div>
              );
            }

            const pct = Math.round(message.confidence * 100);
            const tone = message.matched ? "accent" : "warn";

            return (
              <div key={message.id} className="animate-msg-in flex justify-start">
                <div className="w-full max-w-[92%]">
                  <div className="mb-1.5 flex items-center gap-2 pl-1">
                    <span
                      className={
                        tone === "accent"
                          ? "rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-accent-strong"
                          : "rounded-md bg-warn-soft px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-warn"
                      }
                    >
                      {message.matched ? message.topic : "No confident match"}
                    </span>
                    <span className="ml-auto flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-muted-foreground">
                        confidence
                      </span>
                      <span className="h-1 w-16 overflow-hidden rounded-full bg-line">
                        <span
                          className={
                            tone === "accent"
                              ? "block h-full rounded-full bg-accent"
                              : "block h-full rounded-full bg-warn"
                          }
                          style={{ width: `${Math.max(pct, 4)}%` }}
                        />
                      </span>
                      <span
                        className={
                          tone === "accent"
                            ? "font-mono text-[10px] text-accent"
                            : "font-mono text-[10px] text-warn"
                        }
                      >
                        {pct}%
                      </span>
                    </span>
                  </div>
                  <div
                    className={
                      message.matched
                        ? "rounded-2xl rounded-tl-md bg-white/80 p-4 ring-1 ring-black/5 backdrop-blur"
                        : "rounded-2xl rounded-tl-md bg-white/70 p-4 ring-1 ring-black/5 backdrop-blur"
                    }
                  >
                    <p
                      className={
                        message.matched
                          ? "text-sm leading-relaxed text-ink"
                          : "text-sm leading-relaxed text-muted-foreground"
                      }
                    >
                      {message.answer}
                    </p>
                    {message.code && (
                      <pre className="mt-3 overflow-x-auto rounded-lg bg-code p-3 font-mono text-xs leading-relaxed text-teal-100">
                        <code>{message.code}</code>
                      </pre>
                    )}
                    {message.suggestions && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {message.suggestions.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => void send(topic)}
                            className="rounded-full bg-white/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground ring-1 ring-black/5 transition hover:text-ink hover:ring-accent/40"
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {pending && (
            <div className="animate-msg-in flex justify-start">
              <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white/80 px-4 py-3 ring-1 ring-black/5 backdrop-blur">
                <span className="animate-blink size-1.5 rounded-full bg-muted-foreground/60" />
                <span className="animate-blink size-1.5 rounded-full bg-muted-foreground/60 [animation-delay:.15s]" />
                <span className="animate-blink size-1.5 rounded-full bg-muted-foreground/60 [animation-delay:.3s]" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </main>

        <div className="sticky bottom-0 -mx-3 px-3 pb-4 sm:-mx-5 sm:px-5">
          <div className="mb-2.5 flex flex-wrap gap-2">
            {SAMPLES.map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => void send(sample)}
                className="rounded-full bg-white/70 px-3 py-1.5 text-xs text-ink ring-1 ring-black/5 backdrop-blur transition hover:bg-white hover:ring-accent/40"
              >
                {sample}
              </button>
            ))}
          </div>
          <form
            onSubmit={onSubmit}
            className="flex items-end gap-2 rounded-2xl bg-white/85 p-2 ring-1 ring-black/5 shadow-lg shadow-ink/5 backdrop-blur-md"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a Python question…"
              aria-label="Ask a Python question"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-ink outline-none placeholder:text-muted-foreground/70"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              aria-label="Send question"
              className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-white ring-1 ring-black/5 transition hover:bg-accent-strong disabled:opacity-40"
            >
              <span className="font-mono text-base leading-none">↵</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
