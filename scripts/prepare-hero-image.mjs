import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const partsDirectory = resolve(root, ".hero-image-parts");
const partNames = ["part-1.b64", "part-2.b64", "part-3.b64"];
const encodedParts = await Promise.all(
  partNames.map((name) => readFile(resolve(partsDirectory, name), "utf8")),
);
const encoded = encodedParts.join("").replace(/\\s+/g, "");

if (encoded.length !== 17708) {
  throw new Error(`Hero image payload has ${encoded.length} base64 characters; expected 17708.`);
}

const image = Buffer.from(encoded, "base64");
const checksum = createHash("sha1").update(image).digest("hex");

if (image.length !== 13279 || checksum !== "1cae971110eb62e5922f03df701f2914a12cf403") {
  throw new Error(`Hero image checksum mismatch (size=${image.length}, sha1=${checksum}).`);
}

const destination = resolve(root, "public/images/premium-water-bottle-splash.avif");
await mkdir(resolve(root, "public/images"), { recursive: true });
await writeFile(destination, image);
console.log(`Prepared the verified single hero image (${image.length} bytes).`);
