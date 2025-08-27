# Vodič za optimizaciju slika

## Trenutno stanje
Lighthouse izveštaj pokazuje da slike zauzimaju **11.4MB** što značajno utiče na performanse sajta.

## Problematične slike i preporučene optimizacije

### 1. Hero slika
- **Trenutno**: `/images/high-angle-house-interior-with-clutter.webp` (2.18MB)
- **Problem**: Slika je 1574x5327px a prikazuje se kao 2092x1395px
- **Rešenje**: Smanji na 2100x1400px i povećaj kompresiju
- **Očekivane uštede**: ~1.7MB

### 2. Gallery slike

#### messy-interior-full-clothing (1).webp
- **Trenutno**: 1.7MB (6333x5333px → 240x160px)
- **Rešenje**: Smanji na 480x320px (2x za retina)
- **Očekivane uštede**: ~1.7MB

#### messy-interior-full-clothing.webp
- **Trenutno**: 1.5MB (8000x3359px → 380x253px)
- **Rešenje**: Smanji na 760x506px (2x za retina)
- **Očekivane uštede**: ~1.5MB

#### messy-room-disorder-concept-living-room-bedroom-scattered-clothes-stuff-floor.webp
- **Trenutno**: 1.33MB (6720x2822px → 380x253px)
- **Rešenje**: Smanji na 760x506px (2x za retina)
- **Očekivane uštede**: ~1.3MB

#### abandoned-house-cluttered-interior.webp
- **Trenutno**: 1.2MB (7990x3355px → 380x253px)
- **Rešenje**: Smanji na 760x506px (2x za retina)
- **Očekivane uštede**: ~1.2MB

### 3. Logo optimizacija
- **Trenutno**: `/MessieLogo.png` (193KB, 1030x985px → 48x48px)
- **Rešenje**: Konvertuj u WebP format i smanji na 96x96px (2x za retina)
- **Očekivane uštede**: ~165KB

## Alati za optimizaciju

### Online alati
1. **TinyPNG/TinyJPG** - https://tinypng.com/
2. **Squoosh** - https://squoosh.app/
3. **ImageOptim** - https://imageoptim.com/

### Command line alati
```bash
# Za WebP konverziju
cwebp -q 80 input.jpg -o output.webp

# Za resize
convert input.jpg -resize 760x506 output.jpg

# Za batch processing
for file in *.jpg; do cwebp -q 80 "$file" -o "${file%.jpg}.webp"; done
```

## Implementirane optimizacije

✅ **Lazy loading** - Slike se učitavaju tek kada su potrebne
✅ **Priority loading** - Hero slika ima `fetchpriority="high"`
✅ **Responsive images** - Dodati `srcset` i `sizes` atributi
✅ **CSS optimizacija** - Preload linkovi za kritične CSS fajlove
✅ **Forced reflow fix** - Optimizovani inline stilovi u AboutUs komponenti

## Sledeći koraci

1. **Kompresuj sve slike** prema gore navedenim preporukama
2. **Generiši multiple sizes** za responsive images:
   - Small: 380x253px (mobile)
   - Medium: 760x506px (tablet/desktop)
   - Large: 1140x759px (large screens)
3. **Implementiraj WebP fallback** za starije browsere
4. **Dodaj blur placeholders** za bolje UX tokom učitavanja

## Očekivani rezultati

- **Smanjenje veličine**: Sa 11.4MB na ~3-4MB (65-70% ušteda)
- **Poboljšanje LCP**: Sa trenutnih 1.249ms na ~600-800ms
- **Poboljšanje Performance Score**: Sa 65 na 85-90
- **Bolje korisničko iskustvo**: Brže učitavanje, posebno na mobilnim uređajima

## Monitoring

Nakon implementacije optimizacija, testiraj performanse sa:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Chrome DevTools Lighthouse