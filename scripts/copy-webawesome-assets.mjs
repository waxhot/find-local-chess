#!/usr/bin/env bun
import { cp, mkdir, rm, stat } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const src = resolve(__dirname, '../node_modules/@awesome.me/webawesome/dist');
  const dest = resolve(__dirname, '../public/webawesome');
  try {
    const s = await stat(src);
    if (!s.isDirectory()) {
      console.error(`Expected directory not found: ${src}`);
      process.exit(1);
    }
  } catch (e) {
    console.error(`Web Awesome dist not found at ${src}. Did you install @awesome.me/webawesome?`);
    process.exit(1);
  }

  // Clean destination to avoid stale files
  try {
    await rm(dest, { recursive: true, force: true });
  } catch {}

  await mkdir(dest, { recursive: true });
  await cp(src, dest, { recursive: true });
  console.log(`Copied Web Awesome assets to ${dest}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
