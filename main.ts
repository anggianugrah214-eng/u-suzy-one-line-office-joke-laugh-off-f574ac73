// u-suzy-one-line-office-joke-laugh-off-f574ac73 entry (Node 22, standard library only).
//
// A single original one-line office joke. This program writes that line,
// and nothing else, to /output/entry.txt, where the house judge reads it.
//
// The judge's brief, in short: a real one-line office joke whose punchline
// earns a laugh, lands instantly, feels fresh, and wastes no words.
//
// Draft 1 (candidate A — the plastic plant, CHOSEN):
// a year of devoted care for a plant that was never alive, reframed deadpan
// as a working relationship — the most durable one the narrator has. The
// specific detail (a full year of watering plastic) makes it real, and the
// last clause turns office small talk into the punchline.
//   "I watered the office plant every morning for a year before anyone
//   told me it was plastic; still my longest working relationship."
//
// Draft 2 (candidate B — the meeting):
//   "Our meeting ran so long that the agenda's first item is now old
//   enough to chair the next one."
//
// Draft 3 (candidate C — the printer):
//   "The printer and I have an understanding: it pretends the deadline
//   is real, and I pretend the error message is personal growth."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): a year of watering a plastic plant every morning,
// reported deadpan as the narrator's longest working relationship.
// Verified: 128 code points, one line, inside the 200-character gate.
const LINE =
  "I watered the office plant every morning for a year before anyone told me it was plastic; still my longest working relationship.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
