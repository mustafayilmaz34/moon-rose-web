# Yayın ve önizleme — Vercel

Site statik (Astro → `dist/`). Vercel ayarları `vercel.json` içinde:
`/` → `/tr/` yönlendirmesi, sonda `/` olan adresler, uzun süreli önbellek ve temel güvenlik başlıkları.

## 1. Vercel'i GitHub'a bağlama (bir kez — siz yapacaksınız)

Hesap açma ve giriş yapma işlemleri sizin hesabınızla yapılmalı.

1. https://vercel.com/signup → **Continue with GitHub** (mustafayilmaz34 hesabı).
2. **Add New… → Project** → `moon-rose-web` reposunu seçin → **Import**.
   - İlk seferde Vercel'in GitHub uygulamasına bu repoya erişim izni vermeniz istenir; sadece `moon-rose-web`'i seçmeniz yeterli.
3. Ayarlar `vercel.json`'dan otomatik gelir (Framework: Astro, Build: `npm run build`, Output: `dist`).
   **Deploy**'a basın.
4. Bittiğinde `moon-rose-web-xxxx.vercel.app` gibi bir adres verilir. `main` dalı bu adreste yayınlanır.

## 2. Önizleme linkleri

Bağlantıdan sonra her PR'a Vercel otomatik bir **önizleme linki** yorumu ekler. Müşteriye bu linki
gönderebilirsiniz; değişiklik `main`'e birleşmeden görülebilir.

Vercel PR önizleme adreslerine kendisi `X-Robots-Tag: noindex` ekler, ama ana `moon-rose-web.vercel.app`
adresine eklemez. Bu yüzden `vercel.json`, `*.vercel.app` ile biten her adrese `X-Robots-Tag: noindex`
gönderir; Google bu adresleri dizine almaz. Gerçek alan adı (`moonroseclinic.com`) bu kuraldan etkilenmez.

## 3. Alan adı (Faz 5)

Yayın günü: Vercel → Project → **Settings → Domains** → `moonroseclinic.com` ve `www.moonroseclinic.com`.
Vercel'in gösterdiği DNS kayıtları alan adının yönetildiği yere (domain sağlayıcısı) girilir.
Bu adımdan önce eski WordPress adreslerinin yönlendirme haritası hazır olmalı (bkz. `docs/PLAN.md` Faz 5).

`astro.config.mjs` içindeki `site` değeri canonical, hreflang, sitemap ve paylaşım kartlarında kullanılır;
alan adı değişirse orası güncellenir.

## Yerelde üretim çıktısını görmek

```bash
npm run build && npm run preview
```
