# Návod na publikovanie webu

## Varianta 1: Netlify (NAJJEDNODUCHŠIE - ODPORÚČAM)

### Krok 1: Príprava
1. Vytvorte si účet na https://netlify.com (ZDARMA)
2. Prihláste sa cez GitHub alebo email

### Krok 2: Deploy
1. Na Netlify dashboarde kliknite na "Add new site" → "Deploy manually"
2. Presuňte celý priečinok `psi-salon` do upload zóny
3. Netlify automaticky deteguje Hugo a zostaví web
4. Hotovo! Dostanete adresu typu: `https://random-name.netlify.app`

### Krok 3: Vlastná doména (voliteľné)
1. V nastaveniach kliknite "Domain settings"
2. Kliknite "Add custom domain"
3. Zadajte vašu doménu (napr. `psi-salon-monika.sk`)
4. Nastavte DNS podľa inštrukcií

---

## Varianta 2: Vercel

1. Vytvorte účet na https://vercel.com
2. Kliknite "Add New Project"
3. Upload priečinok `psi-salon`
4. Vercel automaticky deteguje Hugo
5. Deploy! 

---

## Varianta 3: GitHub Pages (pre pokročilých)

### Krok 1: Vytvorte GitHub repozitár
```bash
cd psi-salon
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VASE-MENO/psi-salon.git
git push -u origin main
```

### Krok 2: Nastavte GitHub Pages
1. Choďte do Settings → Pages
2. Source: GitHub Actions
3. Vytvorte súbor `.github/workflows/hugo.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.121.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Build with Hugo
        env:
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: hugo --minify --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

---

## Varianta 4: Klasický webhosting

### Krok 1: Vygenerujte statický web
```bash
cd psi-salon
hugo
```

### Krok 2: Upload súborov
1. Obsah priečinka `public/` nahrajte cez FTP na váš webhosting
2. Uploadnite do koreňového priečinka (zvyčajne `public_html/` alebo `www/`)

### FTP klienty:
- FileZilla (Windows/Mac/Linux): https://filezilla-project.org
- WinSCP (Windows): https://winscp.net
- Cyberduck (Mac): https://cyberduck.io

---

## Vlastná doména

### Kde kúpiť doménu?
- https://www.websupport.sk (Slovensko)
- https://www.forpsi.sk (Slovensko)
- https://www.namecheap.com (Medzinárodné)
- https://domains.google (Google)

### Ceny domén .sk
- Približne 15-25€ / rok

### DNS nastavenia pre Netlify
Po kúpe domény:
1. Choďte do správy DNS
2. Pridajte A záznam:
   ```
   @  A  75.2.60.5
   ```
3. Pridajte CNAME:
   ```
   www  CNAME  vasa-stranka.netlify.app
   ```

---

## Často kladené otázky

**Q: Koľko to stojí?**
A: Netlify, Vercel a GitHub Pages sú ZDARMA. Platíte len za doménu (15-25€/rok).

**Q: Ako aktualizujem web?**
A: 
1. Upravte súbory lokálne
2. Spustite `hugo` na vygenerovanie nového `public/`
3. Uploadnite nový `public/` obsah

Pre Netlify: Môžete priamo drag-and-drop nový priečinok.

**Q: Ako pridám HTTPS (zelený zámok)?**
A: Netlify a Vercel poskytujú SSL automaticky ZDARMA.

**Q: Funguje to na mobile?**
A: Áno! Web je plne responzívny.

---

## Potrebujete pomoc?

- Netlify dokumentácia: https://docs.netlify.com
- Hugo dokumentácia: https://gohugo.io/hosting-and-deployment/
- Video návody na YouTube: Hľadajte "Hugo static site deployment"
