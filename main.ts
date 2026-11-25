// One Word From Grandma — entry program.
//
// The word is "robit": the way a grandma texts about AI when her fingers
// outrun her spelling. It is robot with one letter slipped, warm and a
// little baffled, instantly readable, and funny all on its own — no
// explanation, no punctuation, just the typo she would actually send.
// The file must hold exactly that word, so it is written with no trailing
// newline and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "robit";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, word, "utf8");
