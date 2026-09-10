import { knowledgeBase, kbTopics, type KbEntry } from "./knowledge-base";

const STOP_WORDS = new Set([
  "a","an","the","is","are","am","do","does","did","how","what","why","when","which","who",
  "in","on","of","to","for","with","and","or","i","you","it","its","my","me","can","could",
  "should","would","please","tell","explain","about","use","using","python","give","show",
  "example","examples","work","works","there","some","any","be","been","get","got","if",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9_*\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function stem(word: string): string {
  if (word.length > 4 && word.endsWith("ies")) return word.slice(0, -3) + "y";
  if (word.length > 3 && word.endsWith("es")) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith("s")) return word.slice(0, -1);
  if (word.length > 4 && word.endsWith("ing")) return word.slice(0, -3);
  return word;
}

function terms(text: string, keepStopWords = false): string[] {
  return tokenize(text)
    .filter((w) => keepStopWords || !STOP_WORDS.has(w))
    .map(stem);
}

/** Inverse document frequency over every stored question variant. */
const documents: { entry: KbEntry; terms: string[] }[] = knowledgeBase.flatMap((entry) =>
  entry.questions.map((q) => ({
    entry,
    terms: terms(`${q} ${entry.topic}`),
  })),
);

const idf = new Map<string, number>();
{
  const df = new Map<string, number>();
  for (const doc of documents) {
    for (const t of new Set(doc.terms)) df.set(t, (df.get(t) ?? 0) + 1);
  }
  for (const [t, count] of df) {
    idf.set(t, Math.log(1 + documents.length / count));
  }
}

function weight(term: string): number {
  return idf.get(term) ?? Math.log(1 + documents.length);
}

/** Weighted cosine similarity between two bags of terms. */
function similarity(queryTerms: string[], docTerms: string[]): number {
  if (!queryTerms.length || !docTerms.length) return 0;
  const qv = new Map<string, number>();
  const dv = new Map<string, number>();
  for (const t of queryTerms) qv.set(t, (qv.get(t) ?? 0) + weight(t));
  for (const t of docTerms) dv.set(t, (dv.get(t) ?? 0) + weight(t));

  let dot = 0;
  for (const [t, v] of qv) dot += v * (dv.get(t) ?? 0);
  const qLen = Math.sqrt([...qv.values()].reduce((s, v) => s + v * v, 0));
  const dLen = Math.sqrt([...dv.values()].reduce((s, v) => s + v * v, 0));
  return dot / (qLen * dLen || 1);
}

/** Character bigram overlap — catches typos and near-misses. */
function bigramOverlap(a: string, b: string): number {
  const grams = (s: string) => {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const out = new Set<string>();
    for (let i = 0; i < clean.length - 1; i++) out.add(clean.slice(i, i + 2));
    return out;
  };
  const ga = grams(a);
  const gb = grams(b);
  if (!ga.size || !gb.size) return 0;
  let shared = 0;
  for (const g of ga) if (gb.has(g)) shared++;
  return (2 * shared) / (ga.size + gb.size);
}

export type MatchResult = {
  matched: boolean;
  topic?: string;
  answer: string;
  code?: string;
  confidence: number;
  suggestions?: string[];
};

const CONFIDENCE_THRESHOLD = 0.34;

export function findAnswer(question: string): MatchResult {
  const query = question.trim();
  const queryTerms = terms(query);

  let best: { entry: KbEntry; score: number } | null = null;

  for (const doc of documents) {
    const cosine = similarity(queryTerms.length ? queryTerms : terms(query, true), doc.terms);
    const fuzzy = bigramOverlap(query, doc.terms.join(" "));
    const score = cosine * 0.8 + fuzzy * 0.2;
    if (!best || score > best.score) best = { entry: doc.entry, score };
  }

  const confidence = best ? Math.min(0.99, Math.round(best.score * 100) / 100) : 0;

  if (!best || confidence < CONFIDENCE_THRESHOLD) {
    return {
      matched: false,
      confidence,
      answer:
        "I couldn't match that to a confident entry in the deck. I answer questions drawn from a fixed Python knowledge base — try rephrasing, or pick one of the topics below.",
      suggestions: kbTopics.slice(0, 8),
    };
  }

  return {
    matched: true,
    topic: best.entry.topic,
    answer: best.entry.answer,
    code: best.entry.code,
    confidence,
  };
}
