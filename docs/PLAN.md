# PLAN — Moonrose Clinic web sitesi

Bu dosyayı **planner** ajanı yönetir. Her adım tek bir developer görevine sığacak büyüklükte olmalı.
Durum: `[ ]` bekliyor · `[~]` devam ediyor · `[x]` bitti (kullanıcı onayladı)

## Faz 0 — Kurulum

- [x] Astro + TypeScript + Tailwind v4 iskeleti
- [x] TR / EN / AR routing (`/tr/`, `/en/`, `/ar/`), RTL, hreflang, sitemap
- [x] ESLint, Prettier, EditorConfig
- [x] CLAUDE.md, DESIGN.md, ajanlar, `.mcp.json`
- [x] Playwright + axe smoke testleri, GitHub Actions CI
- [ ] GitHub private repo + ilk push (kullanıcı `gh` kurunca)
- [ ] Vercel bağlantısı, PR önizlemeleri

## Faz 1 — İçerik ve tasarım yönü

- [ ] Mevcut sitenin tam içerik envanteri → `docs/CONTENT.md` (metinler, tedavi yazıları, SSS)
- [ ] Müşteri sorularının yanıtları (bkz. `docs/CONTENT.md`)
- [ ] Fotoğraf ve logo teslimi
- [ ] Moodboard: 4–6 referans site, notlarla
- [~] A ve B yönleri: ana sayfa üst bölümü, iki çalışan önizleme → `/tr/yonler/a/`, `/tr/yonler/b/`
- [~] C yönü (mevcut siteye yakın, tam ana sayfa, geçici eski görsellerle) → `/tr/yonler/c/`
  - Görseller `src/assets/legacy/` — mevcut sitedeki stok görseller; lisans müşteriyle teyit edilecek.
    `doktor-salih-gul-min.jpg` doktor DEĞİL (hasta fotoğrafı); `4-genclik-asisi.jpeg` önce/sonra — kullanılmıyor.
  - Hero: mevcut sitenin arka plan videosu (`public/media/hero-loop.mp4`) — kullanıcı onayıyla kullanılıyor.
    Google Veo ile üretilmiş, sağ altta filigran var; **filigran kırpılarak gizlenmez.** Müşteriye bildirilecek.
    Durdur/oynat butonu (WCAG 2.2.2); `prefers-reduced-motion`'da video oynamaz, kapak karesi görünür.
  - CSS hareket: hero açılışı, kaydırmayla belirme/parallax (`prefers-reduced-motion`'da kapalı).
  - Bilinen eksikler (Faz 2'de): mobil menü + mobilde dil seçici; AR'de Latin logo Amiri fontuna düşüyor
- [ ] **Kullanıcı / müşteri yön seçimi**

## Faz 2 — Tasarım sistemi

- [ ] Kesin token'lar (renk, font, boşluk, radius) → `global.css` + `DESIGN.md`
- [ ] Font kurulumu (Latin + Arapça, self-host)
- [ ] Temel bileşenler: Button, Container, Section, Heading, Header, Footer, LanguageSwitcher, WhatsApp butonu
- [ ] `/styleguide` sayfası (yalnızca geliştirmede) — **kullanıcı onayı**

## Faz 3 — Sayfalar

- [ ] Content collection: `treatments` (dil başına markdown, ortak slug)
- [ ] Ana sayfa
- [ ] Hakkımızda / Doktor
- [ ] Tedaviler listesi + tedavi detay şablonu
- [ ] 12 tedavi içeriği (TR → EN/AR taslak çeviri)
- [ ] S.S.S.
- [ ] İletişim (harita, çalışma saatleri, KVKK onaylı form)
- [ ] KVKK & Gizlilik Politikası, Çerez politikası
- [ ] 404 sayfası

## Faz 4 — Test ve cilalama

- [ ] Tüm sayfalar × 3 dil × 2 ekran: görsel kontrol
- [ ] Lighthouse CI (performans, erişilebilirlik, SEO ≥ 90)
- [ ] Yapılandırılmış veri (schema.org `MedicalClinic`, `Physician`)
- [ ] Çeviri kontrolü (anadili konuşan) — müşteri tarafı

## Faz 5 — Yayın

- [ ] Eski WordPress URL'leri → yeni URL'lere 301 yönlendirme haritası
- [ ] Alan adı DNS → Vercel
- [ ] Google Search Console, sitemap gönderimi
- [ ] Analytics (çerez onayıyla)
