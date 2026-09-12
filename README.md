# PyCard — Python Q&A Chatbot

A responsive single-page chatbot that answers Python questions in plain English
using a curated knowledge base and local retrieval matching — no external AI
APIs, no signup, instantly usable.

## Features

- **68-topic knowledge base** — from Python basics (variables, lists, loops,
  functions) to advanced topics (decorators, generators, metaclasses,
  descriptors, dataclasses, typing, performance, packaging, security) plus
  real-world project guides (CLI tools, web APIs, data analysis, automation).
- **Natural-language understanding** — local retrieval NLP (TF-IDF cosine
  similarity, character-bigram fuzzy matching, synonym normalization) maps
  direct and indirect questions to the closest answer, e.g. *"which is the
  best programming language for beginners?"* → Python.
- **No hallucination** — answers come only from the deck; low-confidence
  questions get a helpful fallback with suggested topics.
- **Rich answers** — topic label, confidence score, and syntax code examples.
- **Polished chat UI** — message animations, typing indicator, auto-scroll,
  sample questions, clear chat, Enter-to-send, fully responsive.

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start (React 19 + TypeScript)
- Tailwind CSS
- Supabase (knowledge base storage, with an in-code fallback deck)
