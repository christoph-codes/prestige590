import sharp from "sharp";

const sourcePath =
  "public/gallery/2023-prestige-590-power-9931520-20250902140541623-1.webp";
const outputs = ["src/app/opengraph-image.png", "src/app/twitter-image.png"];

const width = 1200;
const height = 630;

const overlaySvg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wash" x1="0" y1="315" x2="1200" y2="315" gradientUnits="userSpaceOnUse">
      <stop stop-color="#05091A" stop-opacity="0.84"/>
      <stop offset="0.5" stop-color="#05091A" stop-opacity="0.52"/>
      <stop offset="1" stop-color="#05091A" stop-opacity="0.12"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#wash)"/>
  <rect x="34" y="34" width="1132" height="562" stroke="#C9A84C" stroke-opacity="0.82"/>
  <rect x="42" y="42" width="1116" height="546" stroke="#F5F0E8" stroke-opacity="0.08"/>

  <text x="78" y="272" fill="#F5F0E8" font-family="Didot, Georgia, serif" font-size="82" font-weight="700">Prestige 590</text>
  <text x="78" y="356" fill="#F5F0E8" font-family="Didot, Georgia, serif" font-size="82" font-weight="700">Flybridge</text>
  <text x="78" y="520" fill="#E8D5A3" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="600" letter-spacing="3.2">MARINA DEL REY, CA</text>
</svg>
`;

const baseImage = sharp(sourcePath).resize(width, height, {
  fit: "cover",
  position: "centre",
});

for (const output of outputs) {
  await baseImage
    .clone()
    .composite([{ input: Buffer.from(overlaySvg), top: 0, left: 0 }])
    .png()
    .toFile(output);

  console.log(`Wrote ${output}`);
}
