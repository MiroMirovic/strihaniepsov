# Psí Salón Monika - Hugo Web

Profesionálny web pre psí salón vytvorený v Hugo.

## Funkcie

✅ Responzívny dizajn pre mobil a desktop
✅ Mobilné hamburger menu
✅ Klasické horizontálne menu pre desktop
✅ Foto galéria s lightbox efektom (kliknutím na obrázok sa zobrazí na celú obrazovku)
✅ Sekcie: Domov, O mne, Služby, Galéria, Kontakt
✅ Viditeľné odkazy na Facebook a Instagram
✅ Moderný a elegantný dizajn s farebnými prechody
✅ Plynulé animácie a efekty
✅ SEO optimalizované

## Inštalácia Hugo

### Windows
1. Stiahnite Hugo z https://github.com/gohugoio/hugo/releases
2. Rozbaľte ZIP súbor
3. Pridajte cestu k hugo.exe do PATH

### macOS
```bash
brew install hugo
```

### Linux
```bash
sudo apt install hugo
# alebo
sudo snap install hugo
```

## Spustenie webu

1. Otvorte terminál v priečinku projektu
2. Spustite vývojový server:
```bash
hugo server -D
```
3. Otvorte prehliadač na adrese: http://localhost:1313

## Pridanie obrázkov do galérie

1. Nahrajte obrázky psov do priečinka:
   `themes/psi-salon-theme/static/images/gallery/`

2. Pre každý obrázok potrebujete:
   - Originál: napr. `dog1.jpg` (väčší obrázok)
   - Náhľad: napr. `dog1-thumb.jpg` (menší obrázok, odporúčaná veľkosť: 400x400px)

3. Upravte súbor `themes/psi-salon-theme/layouts/index.html` a zmeňte cesty k obrázkom v sekcii galéria

## Úprava obsahu

### Zmena textu
Upravte súbor: `themes/psi-salon-theme/layouts/index.html`

### Zmena farieb
Upravte CSS premenné v súbore: `themes/psi-salon-theme/static/css/style.css`
```css
:root {
    --primary-color: #d4a574;
    --secondary-color: #8b6f47;
    --accent-color: #e8d5c4;
    /* ... */
}
```

### Zmena odkazov na sociálne siete
Upravte súbor: `hugo.toml`
```toml
[params]
  facebook = 'https://facebook.com/vasprofil'
  instagram = 'https://instagram.com/vasprofil'
```

### Zmena kontaktných údajov
Upravte súbor: `themes/psi-salon-theme/layouts/index.html`
Nájdite sekciu `<!-- Contact Section -->` a upravte telefónne číslo, email a adresu

## Vytvorenie statického webu (pre hosting)

```bash
hugo
```

Vygenerované súbory budú v priečinku `public/`

## Hosting

Statický web môžete uploadnúť na:
- Netlify (https://netlify.com) - ZDARMA
- Vercel (https://vercel.com) - ZDARMA
- GitHub Pages - ZDARMA
- Akýkoľvek webhosting

## Štruktúra projektu

```
psi-salon/
├── hugo.toml              # Hlavný konfiguračný súbor
├── content/               # Obsah stránok
├── themes/
│   └── psi-salon-theme/
│       ├── layouts/       # HTML šablóny
│       │   └── index.html # Hlavná stránka
│       └── static/
│           ├── css/       # Štýly
│           │   └── style.css
│           ├── js/        # JavaScript
│           │   └── script.js
│           └── images/    # Obrázky
│               └── gallery/
└── public/                # Vygenerovaný web (po spustení 'hugo')
```

## Potrebná pomoc?

- Hugo dokumentácia: https://gohugo.io/documentation/
- Návod na pridanie obrázkov: Pozrite sekciu "Pridanie obrázkov do galérie" vyššie

## Licencia

MIT License - Môžete voľne použiť a upravovať
