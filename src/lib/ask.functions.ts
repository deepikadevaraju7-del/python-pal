import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { findAnswer } from "./matcher";

const askSchema = z.object({
  question: z.string().min(1).max(500),
});

export const askPython = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => askSchema.parse(data))
  .handler(async ({ data }) => findAnswer(data.question));
