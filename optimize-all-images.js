import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to get all image files from the images directory
function getImageFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext) && 
           !file.startsWith('.') && 
           file !== 'optimized'; // Skip the optimized folder
  });
}

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
    // Get all image files from the input directory
    const imagesToOptimize = getImageFiles(inputDir);
    console.log(`📁 Found ${imagesToOptimize.length} images to optimize`);
    
    for (const imageName of imagesToOptimize) {
      const inputPath = path.join(inputDir, imageName);
      
      // Check if input file exists
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  Skipping ${imageName} - file not found`);
        continue;
      }
      
      console.log(`🔄 Optimizing ${imageName}...`);
      
      try {
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
      } catch (imageError) {
        console.log(`❌ Error optimizing ${imageName}: ${imageError.message}`);
        console.log(`⚠️  Skipping ${imageName} and continuing with next image...`);
        continue;
      }
    }
    
    console.log(`\n✅ Image optimization completed!`);
    console.log(`📊 Generated ${totalOptimized} optimized images`);
    console.log(`🚀 Network payload should be significantly reduced`);
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeAllImages();