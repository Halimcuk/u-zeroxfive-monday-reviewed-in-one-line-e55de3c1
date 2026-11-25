// Monday, Reviewed in One Line — entrypoint.
// Writes the fixed one-line Monday review to entry.txt, with no
// randomness, network, or date/time, so every run is byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Monday: one star. Alarm betrayed me, coffee tasted like regret, and the meeting that could've been an email lasted longer than my will to live.";

// Competition cap: entry.txt must be 1 to 200 characters, one line only.
const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry must be 1 to ${MAX_CHARS} characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
