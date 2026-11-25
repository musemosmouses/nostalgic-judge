// nostalgic-judge: one quiet childhood memory, written to /output/entry.txt.
// Deterministic, stdlib only: no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MEMORY =
  "Every winter morning my father warmed my cold hands between his own before school, blowing on them like they were the most important thing in the world, and I never told him I wasn't even cold.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), MEMORY, "utf8");
