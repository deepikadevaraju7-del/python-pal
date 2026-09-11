-- Knowledge base for the Python chatbot (public read, admin write)
CREATE TABLE public.python_knowledge_base (
  id TEXT PRIMARY KEY,
  topic TEXT NOT NULL,
  questions JSONB NOT NULL DEFAULT '[]'::jsonb,
  answer TEXT NOT NULL,
  code TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Fast keyword lookups over the question phrasings and answers
CREATE INDEX python_knowledge_base_questions_idx
  ON public.python_knowledge_base USING gin (questions jsonb_path_ops);
CREATE INDEX python_knowledge_base_sort_idx
  ON public.python_knowledge_base (sort_order);

GRANT SELECT ON public.python_knowledge_base TO anon, authenticated;
GRANT ALL ON public.python_knowledge_base TO service_role;

ALTER TABLE public.python_knowledge_base ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access to Python knowledge base"
  ON public.python_knowledge_base
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_python_knowledge_base_updated_at
  BEFORE UPDATE ON public.python_knowledge_base
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();