# Newsletter Setup Guide

Ovaj guide objašnjava kako da postavite newsletter funkcionalnost koja koristi Resend.com servis.

## Potrebni koraci:

### 1. Kreiranje Resend naloga
1. Idite na [resend.com](https://resend.com)
2. Kreirajte nalog ili se ulogujte
3. Verifikujte vaš domen `messie-wohnungen24.de`

### 2. Dobijanje API ključa
1. U Resend dashboard-u idite na [API Keys](https://resend.com/api-keys)
2. Kliknite "Create API Key"
3. Dajte mu naziv (npr. "Messie Newsletter")
4. Kopirajte API ključ

### 3. Konfiguracija environment varijabli

#### Za lokalni development:
1. Kreirajte `.env` fajl u root direktorijumu
2. Dodajte:
```
RESEND_API_KEY=your_actual_api_key_here
```

#### Za Netlify production:
1. Idite u Netlify dashboard
2. Otvorite vaš sajt
3. Idite na Site settings > Environment variables
4. Dodajte novu varijablu:
   - Key: `RESEND_API_KEY`
   - Value: vaš API ključ

### 4. Verifikacija domena u Resend
1. U Resend dashboard-u idite na [Domains](https://resend.com/domains)
2. Dodajte `messie-wohnungen24.de`
3. Sledite instrukcije za DNS konfiguraciju
4. Sačekajte verifikaciju (može potrajati do 24h)

### 5. Testiranje
1. Pokrenite sajt lokalno: `npm run dev`
2. Idite na footer i testirajte newsletter signup
3. Proverite da li stižu email-ovi

## Funkcionalnost

Newsletter sistem:
- ✅ Validira email adrese
- ✅ Šalje welcome email pretplatnicima
- ✅ Šalje notifikaciju admin-u o novoj pretplati
- ✅ Prikazuje status poruke korisniku
- ✅ Loading stanje tokom slanja
- ✅ Error handling

## Fajlovi

- `netlify/functions/newsletter-signup.js` - Netlify funkcija za newsletter
- `src/components/Footer.tsx` - Frontend forma
- `.env.example` - Primer environment varijabli

## Troubleshooting

### Email se ne šalje
1. Proverite da li je API ključ ispravno postavljen
2. Proverite da li je domen verifikovan u Resend
3. Proverite Netlify function logs

### "From" email adresa
Trenutno koristi `newsletter@messie-wohnungen24.de`. Možete promeniti u `newsletter-signup.js` fajlu.

### Rate limiting
Resend ima rate limite. Za production možda treba dodati dodatnu logiku.