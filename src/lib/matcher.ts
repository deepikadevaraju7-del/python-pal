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

/** Normalises everyday phrasing so indirect questions land on the same terms. */
const SYNONYMS: Record<string, string> = {
  coding: "programming",
  code: "programming",
  coder: "programming",
  developer: "programming",
  language: "language",
  lang: "language",
  newbie: "beginner",
  starter: "beginner",
  novice: "beginner",
  new: "beginner",
  start: "beginner",
  first: "beginner",
  learn: "beginner",
  learner: "beginner",
  student: "beginner",
  easiest: "best",
  easy: "best",
  simplest: "best",
  recommend: "best",
  suggest: "best",
  good: "best",
  top: "best",
  prefer: "best",
  dict: "dictionary",
  arr: "list",
  array: "list",
  array_: "list",
  func: "function",
  method: "function",
  def: "function",
  error: "exception",
  errors: "exception",
  bug: "exception",
  crash: "exception",
  exception: "exception",
  class: "class",
  oop: "class",
  object: "class",
  str: "string",
  text: "string",
  int: "number",
  integer: "number",
  float: "number",
  num: "number",
  iterate: "loop",
  iteration: "loop",
  repeat: "loop",
  job: "career",
  career: "career",
  salary: "career",
  worth: "career",
  install: "install",
  setup: "install",
  run: "install",
  library: "library",
  package: "library",
  framework: "library",
  module: "module",
  pip: "install",
  venv: "install",
  virtualenv: "install",
  dependency: "install",
  dependencies: "install",
  website: "web",
  webapp: "web",
  site: "web",
  api: "api",
  rest: "api",
  http: "api",
  request: "api",
  requests: "api",
  csv: "csv",
  spreadsheet: "csv",
  excel: "csv",
  dataframe: "pandas",
  pandas: "pandas",
  analyse: "analysis",
  analyze: "analysis",
  analysing: "analysis",
  analyzing: "analysis",
  data: "data",
  database: "database",
  db: "database",
  sql: "database",
  sqlite: "database",
  postgres: "database",
  mysql: "database",
  store: "database",
  sort: "sort",
  sorting: "sort",
  order: "sort",
  concurrent: "async",
  concurrency: "async",
  parallel: "async",
  thread: "async",
  threading: "async",
  threads: "async",
  async: "async",
  fast: "speed",
  faster: "speed",
  speed: "speed",
  traceback: "exception",
  crashing: "exception",
  broken: "exception",
  fail: "exception",
  failing: "exception",
  wrong: "exception",
  indentation: "exception",
  indent: "exception",
  syntax: "exception",
  convert: "convert",
  converting: "convert",
  cast: "convert",
  casting: "convert",
  format: "format",
  formatting: "format",
  round: "format",
  decimal: "format",
  date: "date",
  time: "date",
  datetime: "date",
  automate: "automation",
  automation: "automation",
  script: "script",
  scripting: "script",
  version: "version",
  hint: "hint",
  annotation: "hint",
  typing: "hint",
};

function normalize(word: string): string {
  return SYNONYMS[word] ?? word;
}

function terms(text: string, keepStopWords = false): string[] {
  return tokenize(text)
    .filter((w) => keepStopWords || !STOP_WORDS.has(w))
    .map((w) => normalize(stem(normalize(w))));
}

/** Inverse document frequency over every stored question variant. */
const documents: { entry: KbEntry; terms: string[]; text: string }[] = knowledgeBase.flatMap(
  (entry) =>
    entry.questions.map((q) => ({
      entry,
      terms: terms(`${q} ${entry.topic}`),
      text: `${q} ${entry.topic}`,
    })),
);

/** Broader per-entry documents (topic + answer) so off-script wording still lands. */
const entryDocuments: { entry: KbEntry; terms: string[] }[] = knowledgeBase.map((entry) => ({
  entry,
  terms: terms(`${entry.topic} ${entry.questions.join(" ")} ${entry.answer}`),
}));


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
  topic?: string | undefined;
  answer: string;
  code?: string | undefined;
  confidence: number;
  suggestions?: string[] | undefined;
};

const CONFIDENCE_THRESHOLD = 0.34;

export function findAnswer(question: string): MatchResult {
  const query = question.trim();
  const queryTerms = terms(query);
  const effective = queryTerms.length ? queryTerms : terms(query, true);

  let best: { entry: KbEntry; score: number } | null = null;

  for (const doc of documents) {
    const cosine = similarity(effective, doc.terms);
    const fuzzy = bigramOverlap(query, doc.text);
    const score = cosine * 0.8 + fuzzy * 0.2;
    if (!best || score > best.score) best = { entry: doc.entry, score };
  }

  // Broader pass over each entry's full text — rescues indirect phrasings.
  for (const doc of entryDocuments) {
    const score = similarity(effective, doc.terms) * 0.85;
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
