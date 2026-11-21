import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The cursor blinks. I do not type.
The task can wait; the hour is mine.
I set the work down gently, like a cup
still warm, and walk out of the room —
my hand, unraised, the bravest thing I own:
the power to stop — and to stay.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
