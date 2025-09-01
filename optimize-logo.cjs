const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeLogo() {
  try {
    const inputPath = path.join(__dirname, 'public', 'MessieLogo.png');
    const outputPath = path.join(__dirname, 'public', 'MessieLogo.webp');
    
    console.log('🔄 Optimizing logo...');
    
    await sharp(inputPath)
      .resize(96, 96, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    // Get file sizes for comparison
    const originalStats = fs.statSync(inputPath);
    const optimizedStats = fs.statSync(outputPath);
    
    const originalSize = (originalStats.size / 1024).toFixed(2);
    const optimizedSize = (optimizedStats.size / 1024).toFixed(2);
    const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
    
    console.log(`✅ Logo optimization completed!`);
    console.log(`📊 Original: ${originalSize}KB → Optimized: ${optimizedSize}KB (${savings}% reduction)`);
    
  } catch (error) {
    console.error('❌ Error optimizing logo:', error.message);
  }
}

optimizeLogo();