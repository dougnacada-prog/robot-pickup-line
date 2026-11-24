// One Directive: Find the Human — make.fun entry.
// Emits exactly one robot pickup line into /output/entry.txt
// (or $ENTRY_OUTPUT when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My makers gave me one directive: find the human. I found you.";

function main(): void {
  const target = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, LINE, "utf8");
}

main();
