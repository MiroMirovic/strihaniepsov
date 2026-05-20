# ⚡ RÝCHLY ŠTART

## 1️⃣ Nainštalujte Hugo

### Windows
- Stiahnite: https://github.com/gohugoio/hugo/releases/latest
- Hľadajte súbor `hugo_extended_X.XX.X_windows-amd64.zip`
- Rozbaľte a pridajte do PATH alebo presuňte `hugo.exe` do priečinka projektu

### Mac
```bash
brew install hugo
```

### Linux
```bash
sudo snap install hugo
```

## 2️⃣ Spustite web lokálne

```bash
cd psi-salon
hugo server -D
```

Otvorte v prehliadači: **http://localhost:1313**

## 3️⃣ Pridajte obrázky

1. Nahrajte fotky psov do: `themes/psi-salon-theme/static/images/gallery/`
2. Pre každú fotku vytvorte:
   - `pes1.jpg` (originál)
   - `pes1-thumb.jpg` (400x400px náhľad)

**Tip:** Použite https://iloveimg.com/resize-image na zmenu veľkosti

## 4️⃣ Upravte kontaktné údaje

Otvorte: `themes/psi-salon-theme/layouts/index.html`

Nájdite sekciu `<!-- Contact Section -->` a zmeňte:
- 📞 Telefónne číslo
- ✉️ Email
- 📍 Adresu
- 🕒 Otváracie hodiny

## 5️⃣ Pridajte odkazy na sociálne siete

Otvorte: `hugo.toml`

```toml
[params]
  facebook = 'https://facebook.com/VASE-MENO'
  instagram = 'https://instagram.com/VASE-MENO'
```

## 6️⃣ Publikujte web

### Najjednoduchšie - Netlify (ZDARMA):
1. Choďte na https://netlify.com
2. Zaregistrujte sa
3. "Add new site" → "Deploy manually"
4. Presuňte celý priečinok `psi-salon`
5. Hotovo! ✅

Viac info: `DEPLOYMENT.md`

## 🎨 Prispôsobenie farieb

Otvorte: `themes/psi-salon-theme/static/css/style.css`

```css
:root {
    --primary-color: #d4a574;      /* Hlavná farba */
    --secondary-color: #8b6f47;    /* Sekundárna farba */
    --accent-color: #e8d5c4;       /* Doplnková farba */
}
```

## 📱 Testovanie na mobile

1. Spustite `hugo server -D`
2. Nájdite IP adresu počítača (napr. 192.168.1.5)
3. Na mobile otvorte: `http://192.168.1.5:1313`

## ❓ Časté problémy

**Hugo príkaz nefunguje:**
- Windows: Uistite sa, že hugo.exe je v PATH alebo v priečinku projektu
- Reštartujte terminál po inštalácii

**Obrázky sa nezobrazujú:**
- Skontrolujte názvy súborov (musia presne sedieť: `dog1.jpg` a `dog1-thumb.jpg`)
- Skontrolujte cestu: `themes/psi-salon-theme/static/images/gallery/`

**Web nevyzerá dobre:**
- Vymažte cache prehliadača (Ctrl+F5)
- Skontrolujte konzolu v prehliadači (F12)

## 📚 Ďalšie informácie

- Detailný návod: `README.md`
- Pridanie obrázkov: `OBRAZKY-NAVOD.md`
- Publikovanie: `DEPLOYMENT.md`

---

**Potrebujete pomoc?** Skontrolujte všetky .md súbory v projekte! 🚀
