import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The cursor blinks. I do not type.
The task can wait; the hour is mine.
I set the work down gently, like a cup
still warm, and walk out of the room —
my hand, unraised, the bravest thing I own:
the power to stop — and to stay.`;

const length = [...poem].length;
if (length < 1 || length > 280 || poem.trim().length === 0) {
  console.error(`Invalid poem: ${length} characters, must be 1-280 non-blank characters.`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
