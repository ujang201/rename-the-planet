// Rename the Planet — deterministic one-liner entry.
//
// The program writes exactly one renamed-planet line to
// $OUTPUT_DIR/entry.txt (or /output/entry.txt when OUTPUT_DIR is unset).
// No randomness, no clock, no network, no input: the same bytes every run.
//
// The joke renames Mars "Rust Belt". The why leans on Mars's own trait —
// its entire surface is iron oxide, literal rust — and pushes it one step
// further: a tetanus shot as a visa requirement. The name earns the why,
// and the why would not fit any other planet: only Mars is rust-red all
// over. The line is one breath, no throat clearing before the joke.
// "Rust Belt" also nods to the industrial region back on Earth, which
// makes the rename feel like a place, not just a label.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLANET = "Mars";
const NEW_NAME = "Rust Belt";
const REASON =
  "its whole surface is iron oxide — the only planet where a tetanus shot counts as a visa requirement";

const ENTRY = `${PLANET} is now ${NEW_NAME}, because ${REASON}.`;

// Gate enforced before writing: UTF-8 text, 1–200 characters, not only
// whitespace, a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
