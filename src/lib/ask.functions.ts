import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import { knowledgeBase, type KbEntry } from "./knowledge-base";
import { findAnswer } from "./matcher";

const askSchema = z.object({
  question: z.string().min(1).max(500),
});

/** Short-lived cache so the deck is fetched from Supabase at most once per worker per 5 min. */
let kbCache: { entries: KbEntry[]; at: number } | null = null;
const KB_CACHE_MS = 5 * 60 * 1000;

/**
 * Loads the knowledge base from Supabase (public read table).
 * Falls back to the in-code deck when the database is unreachable.
 */
async function loadKnowledgeBase(): Promise<KbEntry[]> {
  if (kbCache && Date.now() - kbCache.at < KB_CACHE_MS) return kbCache.entries;

  try {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) return knowledgeBase;

    const supabasePublic = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
      // Opaque sb_ keys aren't JWTs; send only apikey, not the default Authorization bearer.
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { data, error } = await supabasePublic
      .from("python_knowledge_base")
      .select("id, topic, questions, answer, code")
      .order("sort_order", { ascending: true });

    if (error || !data?.length) return knowledgeBase;

    const entries: KbEntry[] = data.map((row) => ({
      id: row.id,
      topic: row.topic,
      questions: Array.isArray(row.questions) ? (row.questions as string[]) : [],
      answer: row.answer,
      code: row.code ?? undefined,
    }));

    kbCache = { entries, at: Date.now() };
    return entries;
  } catch {
    return knowledgeBase;
  }
}

export const askPython = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => askSchema.parse(data))
  .handler(async ({ data }) => {
    const entries = await loadKnowledgeBase();
    return findAnswer(data.question, entries);
  });
