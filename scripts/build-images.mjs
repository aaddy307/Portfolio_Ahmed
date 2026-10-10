// Builds optimized portrait assets and project hero banners
import sharp from 'sharp';
import { mkdirSync, existsSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const srcPath = 'public/IMG_4674.JPG';

console.log('Generating optimized WebP portraits from', srcPath);

// Generate responsive WebP sizes
for (const w of [1100, 720, 420]) {
  await sharp(srcPath)
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(`${OUT}/portrait-${w}.webp`);
  console.log(`Created ${OUT}/portrait-${w}.webp`);
}

// Generate social share image (1200x630) on a dark backdrop
const portrait = await sharp(srcPath)
  .resize({ height: 600, width: 600, fit: 'cover', position: 'top' })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: '#07070a'
  }
})
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, top: 15, left: 580 },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="280" font-family="Impact, 'Arial Narrow', sans-serif" font-size="110" fill="#f4f1ec" letter-spacing="4">AHMED</text>
        <text x="78" y="340" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="410" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">FULL-STACK DEVELOPER • AI / ML</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);

// Generate optimized WebP versions of project hero banners
const projectImages = [
  'AmarJeans.png',
  'FluidValve.png',
  'FXsurya.png',
  'GetCredit.png',
  'KhanBuilders.png',
  'MediAi.png',
  'Portfolio.png',
  'RehanNX.png',
  'Umaya.png',
];

const PROJECTS_OUT = 'public/assets/projects';
mkdirSync(PROJECTS_OUT, { recursive: true });

console.log('Generating optimized WebP project banners...');
for (const file of projectImages) {
  const fullPath = `public/${file}`;
  if (existsSync(fullPath)) {
    const base = file.replace(/\.png$/i, '');
    await sharp(fullPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(`${PROJECTS_OUT}/${base}.webp`);
    console.log(`Created ${PROJECTS_OUT}/${base}.webp`);
  }
}

console.log('Images built successfully.');
