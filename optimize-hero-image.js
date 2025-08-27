import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image optimization script for hero image
async function optimizeHeroImage() {
  const inputPath = './public/images/high-angle-house-interior-with-clutter.webp';
  const outputDir = './public/images/optimized';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const sizes = [
    { width: 480, suffix: '-480w' },
    { width: 768, suffix: '-768w' },
    { width: 1280, suffix: '-1280w' },
    { width: 1920, suffix: '-1920w' }
  ];
  
  try {
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `high-angle-house-interior-with-clutter${size.suffix}.webp`);
      
      await sharp(inputPath)
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({
          quality: 85,
          effort: 6
        })
        .toFile(outputPath);
      
      console.log(`✓ Generated ${outputPath}`);
    }
    
    console.log('\n✅ Hero image optimization completed!');
    console.log('📊 Network payload should be significantly reduced.');
    
  } catch (error) {
    console.error('❌ Error optimizing hero image:', error);
  }
}

optimizeHeroImage();