// One Word From Grandma — make.fun entry.
//
// The word is "robit": the way a grandma texts about AI when her fingers
// outrun her spelling. It is robot with one letter slipped, warm and a
// little baffled, instantly readable, and funny all on its own — no
// explanation, no punctuation, just the typo she would actually send.
// The file must hold exactly that word, so it is written with no trailing
// newline and nothing else.
//
// Node 22 standard library only. No network, no dependencies, no randomness,
// no clock reads: the output is one fixed word, written deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Grandma's spelling of "robot": one letter slipped, the way her fingers
// would actually type it.
const WORD = "robit";

// The gate wants exactly one word: refuse to write anything that is not
// a single token with no whitespace, rather than submitting a rejected entry.
function assertSingleWord(word: string): void {
  if (!/^[^\s]+$/.test(word)) {
    throw new Error(
      `entry must be a single word, got ${JSON.stringify(word)}`
    );
  }
}

assertSingleWord(WORD);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, WORD, "utf8");
