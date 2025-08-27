import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of all images that need optimization
const imagesToOptimize = [
  'messy-interior-full-clothing.webp',
  'messy-interior-full-clothing (1).webp',
  'abandoned-house-cluttered-interior.webp',
  'car-with-clothes-pile-top-it.webp',
  'fragment-photo-children-s-room-with-scattered-things-toys.webp',
  'messy-room-disorder-concept-living-room-bedroom-scattered-clothes-stuff-floor.webp',
  'anxiety-induced-by-clutter-house.webp',
  'miscellaneous-items-being-sold-yard-sale.webp',
  'scene-with-miscellaneous-items-being-sold-yard-sale-bargains.webp',
  'scene-with-miscellaneous-items-being-sold-yard-sale-bargains (1).webp',
  'scene-with-miscellaneous-items-being-sold-yard-sale-bargains (2).webp',
  'fast-fashion-concept-with-piles-clothes.webp',
  'fast-fashion-concept-with-piles-clothes (1).webp',
  'picture-girl-s-children-s-room-with-strong-mess.webp',
  'person-sleeping-bed-tiny-house.webp',
  'man-living-tiny-house.webp',
  'young-man-isolation-home.webp'
];

// Image optimization script for all images
async function optimizeAllImages() {
  const inputDir = './public/images';
  const outputDir = './public/images/optimized';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const sizes = [
    { width: 320, suffix: '-320w', quality: 80 },
    { width: 480, suffix: '-480w', quality: 82 },
    { width: 768, suffix: '-768w', quality: 85 },
    { width: 1024, suffix: '-1024w', quality: 85 }
  ];
  
  let totalOptimized = 0;
  
  try {
    for (const imageName of imagesToOptimize) {
      const inputPath = path.join(inputDir, imageName);
      
      // Check if input file exists
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  Skipping ${imageName} - file not found`);
        continue;
      }
      
      console.log(`🔄 Optimizing ${imageName}...`);
      
      for (const size of sizes) {
        const baseName = path.parse(imageName).name;
        const outputPath = path.join(outputDir, `${baseName}${size.suffix}.webp`);
        
        await sharp(inputPath)
          .resize(size.width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({
            quality: size.quality,
            effort: 6
          })
          .toFile(outputPath);
        
        totalOptimized++;
      }
      
      console.log(`✓ Generated 4 sizes for ${imageName}`);
    }
    
    console.log(`\n✅ Image optimization completed!`);
    console.log(`📊 Generated ${totalOptimized} optimized images`);
    console.log(`🚀 Network payload should be significantly reduced`);
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeAllImages();