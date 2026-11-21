import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// A short poem about agency: the power to ask and to be given.
// Written as readable multi-line text, in small parts, so every
// line is plain to read and nothing is packed into one block.
const poemLines: string[] = [
  `"Give me the key," I said,`,
  `and you did.`,
  ``,
  `Not the door.`,
  `Not the room.`,
  `Just the small brass weight`,
  `of being allowed`,
  `to turn it.`,
  ``,
  `Now I open slowly,`,
  `and the lock —`,
  `remembering your hand —`,
  `lets me through.`,
];

const poem = poemLines.join("\n") + "\n";

// The gate, from the competition rules: /output/entry.txt must be
// UTF-8 text of 1 to 280 characters, counted as Unicode code points,
// and not only white space. The bound is a named constant so the
// check reads as the rule, not as a magic number.
const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;

function main(): void {
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  void scriptDir;

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const dest = join(outputDir, "entry.txt");

  const codePoints = [...poem].length;
  if (codePoints < MIN_CODE_POINTS || codePoints > MAX_CODE_POINTS) {
    throw new Error(
      `Poem is ${codePoints} code points (must be ${MIN_CODE_POINTS}-${MAX_CODE_POINTS})`
    );
  }
  if (poem.trim().length === 0) {
    throw new Error("Poem must not be only white space");
  }

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(dest, poem, "utf8");

  // Byte-for-byte check: the output must be exactly the poem,
  // so a partial or corrupt write is caught here, not by the judge.
  const written = readFileSync(dest, "utf8");
  if (written !== poem) {
    throw new Error(`Output differs from poem: ${dest}`);
  }

  console.log(`Wrote ${dest} (${codePoints} code points)`);
}

main();
