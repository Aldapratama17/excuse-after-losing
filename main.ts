import { mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const line = "I didn't lose - my shell heredocs wrote the whole thing and the rules said none of it counted as me. So a ghostwriter took the fall. Me.";

if (line.length > 200) {
  console.error(`Line exceeds 200 characters (${line.length})`);
  process.exit(1);
}

const outputDir = '/output';
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, line, 'utf-8');
