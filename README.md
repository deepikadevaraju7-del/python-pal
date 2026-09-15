## Vision: PyCard 2.0

A **local‑first, retrieval‑based Python Q&A chatbot** that feels like a smart tutor:  
- Answers only from a **curated, versioned knowledge base**  
- Uses **hybrid retrieval + reranking** for better matching  
- Provides **structured learning paths**, not just one‑off answers  
- Ships as a **polished PWA** with offline support, theming, and analytics (privacy‑respecting)

***

## Core Architecture Upgrades

### 1. Hybrid Retrieval Engine (beyond basic TF‑IDF)

Keep your no‑API constraint but improve matching quality:

- **Multi‑stage retrieval:**
  1. **Lexical stage:** TF‑IDF + cosine similarity (your current approach)
  2. **Fuzzy stage:** Character n‑gram Jaccard / Levenshtein‑based scoring
  3. **Semantic rerank (optional, still local):** Use a tiny sentence transformer (e.g., `all-MiniLM-L6-v2`) via ONNX/WebAssembly or a small local model if you allow an optional “advanced mode”.
- **Synonym & alias expansion:**  
  Maintain a `synonyms.json` mapping terms like:
  - “for loop” → `["for", "iteration", "looping"]`
  - “list comprehension” → `["comprehension", "one-liner list"]`
- **Query normalization:**  
  Lowercase, strip punctuation, expand common abbreviations (`df` → `dataframe`, `np` → `numpy` when relevant).

You can keep everything in the browser with a small JS NLP lib or precompute vectors at build time and ship them as JSON.

***

### 2. Structured Knowledge Base (not just flat Q&A)

Move from a flat list of 68 topics to a **graph‑like structure**:

- **Topics** have:
  - `id`, `title`, `difficulty` (beginner/intermediate/advanced)
  - `prerequisites` (list of topic IDs)
  - `tags` (e.g., `["data-structures", "functional", "performance"]`)
  - `examples` (multiple code snippets with explanations)
  - `common_mistakes` and `tips`
- **Learning paths:**  
  Define sequences like:
  - “Python Basics Path”: variables → types → control flow → functions → modules
  - “Data Analysis Path”: lists → dicts → list comprehensions → pandas basics → plotting
- **Versioned content:**  
  Store KB in Supabase with `version` and `updated_at`, so you can:
  - Roll back bad edits
  - Show “Last updated” on answers
  - Optionally let power users “preview next version” of a topic

This lets you offer **“Next topic” suggestions** and **“You should know X before Y”** hints.

***

### 3. Better Answer Quality & Transparency

Enhance each answer card:

- **Confidence bands instead of raw scores:**
  - High / Medium / Low with clear thresholds
- **Why this answer?**  
  Show top matched keywords/phrases:
  - “Matched on: ‘for loop’, ‘iterate’, ‘list’”
- **Multiple relevant topics:**  
  If confidence is close between two topics, show:
  - Primary answer + “You might also mean: X”
- **Code playground links:**  
  For each example, add:
  - “Run this on Replit / CodeSandbox / Google Colab” (deep links with code prefilled)
- **Citation style:**  
  “From topic: *For Loops (v2.3)*” with a link to a dedicated topic page.

***

### 4. Advanced Chat UX

Keep your clean chat UI but add pro features:

- **Follow‑up suggestions:**  
  After each answer, show 2–4 chips:
  - “Show more examples”
  - “Explain like I’m 10”
  - “Show common mistakes”
  - “Next: While Loops”
- **Conversation memory (local only):**  
  Store last N turns in `localStorage`:
  - Use it to resolve pronouns: “How do I use *it* in a function?” → refer to last topic
  - Allow “Continue where we left off” on revisit
- **Multi‑turn learning mode:**  
  A toggle: “Study mode” where the bot:
  - Asks quick check questions
  - Tracks which topics you’ve “covered”
  - Shows a mini progress bar
- **Copy / Run / Share:**
  - One‑click copy for code blocks
  - “Share this answer” → generates a short URL with topic ID (server or hash‑based routing)

***

### 5. Offline‑First PWA

Make PyCard installable and usable offline:

- **Service worker:**
  - Cache shell (HTML/CSS/JS) and KB JSON
  - Optionally cache a subset of “core topics” for offline use
- **Install prompt:**
  - “Add PyCard to your home screen”
- **Offline fallback:**
  - If Supabase is unreachable, seamlessly switch to the embedded fallback deck
  - Show a subtle “Working offline” indicator

This aligns perfectly with your “no signup, instantly usable” promise.

***

### 6. Admin & Content Workflow (for you)

You’ll need an easy way to grow the KB beyond 68 topics:

- **Admin UI (protected route):**
  - Create/edit topics, examples, synonyms, learning paths
  - Preview how a question will match before publishing
  - Draft/publish workflow with versions
- **Import/export:**
  - Export KB as JSON for backups or community contributions
  - Import community‑submitted topics (e.g., from GitHub PRs)
- **Analytics (privacy‑friendly):**
  - Track:
    - Most asked questions
    - Low‑confidence queries (to know what to add next)
    - Popular learning paths
  - No personal data; aggregate only, with an opt‑out toggle

You can host the admin UI on the same TanStack Start app, protected by a simple token or Supabase auth (only for you).

***

### 7. Developer Experience & Extensibility

Make PyCard a platform, not just a single bot:

- **Plugin‑style topic packs:**
  - “PyCard – Data Science Pack”
  - “PyCard – Web Dev Pack”
  - Each pack is a JSON module with its own topics and tags
- **Embeddable widget:**
  - A small script that renders PyCard as a widget on other sites:
    ```html
    <script src="[https://pycard.dev/embed.js](https://pycard.dev/embed.js)" data-topic="python-basics"></script>
    ```
- **API for your own tools:**
  - Even if end users don’t call it, you can use it in:
    - VS Code extension
    - CLI helper (`pycard ask "how do decorators work?"`)

***

### 8. Accessibility, i18n, and Theming

Polish that makes it feel “real”:

- **Accessibility:**
  - Full keyboard navigation
  - ARIA labels on chat controls
  - Focus management when new messages appear
- **Theming:**
  - Light / Dark / High contrast
  - User‑selectable accent color
- **Internationalization (future):**
  - Structure KB so translations can be added per topic
  - Start with English, but design for `topics.en.json`, `topics.hi.json`, etc.

***

### 9. Security & Performance Hardening

Even without external AI, you still want robustness:

- **Input sanitization:**
  - Prevent XSS from any user‑generated content (if you ever add community questions)
- **Rate limiting (if you add a public API):**
  - Simple IP‑based or token‑based limits
- **Bundle optimization:**
  - Code‑split the chat UI, admin UI, and heavy NLP logic
  - Lazy‑load advanced features (e.g., semantic reranker)
- **Monitoring:**
  - Basic error tracking (e.g., via a self‑hosted or privacy‑friendly service)
  - Log failed retrievals (question text + top matched topics) to improve KB

***

### 10. Roadmap Example

You could structure development like this:

**Phase 1 – Core upgrade**
- Hybrid retrieval (TF‑IDF + fuzzy + synonym expansion)
- Structured KB schema in Supabase
- Enhanced answer cards (confidence bands, “why this answer”, next topic)

**Phase 2 – UX & offline**
- PWA with service worker
- Conversation memory + follow‑up chips
- Study mode with progress tracking

**Phase 3 – Platform**
- Admin UI for content management
- Topic packs (Data Science, Web, Automation)
- Embeddable widget + simple CLI

***
