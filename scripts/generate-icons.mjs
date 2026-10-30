// Derive browser, home-screen and social assets from the approved vector master.
import { createRequire } from "node:module";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const root = new URL("../", import.meta.url);
const svg = await readFile(new URL("public/odd-robin.svg", root));
const png = (size, background) => sharp(svg, { density: 384 })
  .resize(size, size)
  .flatten({ background })
  .ensureAlpha()
  .png()
  .toBuffer();

await mkdir(new URL("public/icons/", root), { recursive: true });
await writeFile(new URL("src/app/icon.png", root), await png(192, "#F3F5F8"));
await writeFile(new URL("src/app/apple-icon.png", root), await png(180, "#F3F5F8"));
await sharp(svg, { density: 384 }).resize(256, 256).png()
  .toFile(fileURLToPath(new URL("public/icons/odd-robin.png", root)));

// ICO directory entries can contain PNGs; include common browser sizes.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((size) => png(size, "#F3F5F8")));
const directory = Buffer.alloc(6 + 16 * images.length);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(images.length, 4);
let offset = directory.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(image.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(new URL("src/app/favicon.ico", root), Buffer.concat([directory, ...images]));
