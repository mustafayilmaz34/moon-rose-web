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
- [x] ~~Moodboard~~ — atlandı; mevcut site referans alındı
- [x] A, B, C yönleri denendi; A ve B silindi (git geçmişinde: `b327d20`)
- [x] **Yön seçimi: C — "Klinik mavisi"** (kullanıcı onayı)
  - Görseller `src/assets/legacy/` — mevcut sitedeki stok görseller; lisans müşteriyle teyit edilecek.
    `doktor-salih-gul-min.jpg` doktor DEĞİL (hasta fotoğrafı); `4-genclik-asisi.jpeg` önce/sonra — kullanılmıyor.
  - Hero videosu (`public/media/hero-loop.mp4`) kullanıcı onayıyla kullanılıyor. Google Veo ile üretilmiş,
    filigranlı; **filigran kırpılarak gizlenmez.** Müşteriye bildirilecek.

## Faz 2 — Tasarım sistemi

- [x] Kesin token'lar → `global.css` + `DESIGN.md`
- [x] Font kurulumu: Fraunces, Manrope, El Messiri, IBM Plex Sans Arabic (self-host); kullanılmayanlar kaldırıldı
- [x] Bileşenler: SiteLayout, SiteHeader (bilgi şeridi, şeffaf/yapışkan header, `<dialog>` mobil menü),
      SiteFooter, WhatsAppFloat, Logo, Icon, ana sayfa bölümleri (Hero, About, Treatments, AppointmentBand)
- [x] Gerçek ana sayfa `/[locale]/`; deneme sayfaları silindi
- [x] Testler: mobil menü, nav çapaları, hareket, header; axe ihlalleri (logo ve WhatsApp adı) düzeltildi
- [ ] ~~`/styleguide`~~ — gerek kalmadı; ana sayfa referans
- [ ] **Kullanıcı onayı**

## Faz 3 — Sayfalar

- [x] Dile göre adresler: `src/i18n/routes.ts` (`/tr/tedaviler/…`, `/en/treatments/…`); hreflang + dil seçici sayfanın
      karşılığına gider. Tüm iç sayfalar tek rotada: `src/pages/[locale]/[...page].astro`
- [x] Content collection `treatments` (dil başına markdown, ortak `key`, yerel `urlSlug`) ve `pages`
- [x] Tedaviler listesi + detay şablonu (makale, kısa bilgiler, randevu, diğer uygulamalar)
- [x] 6 tedavi metni (TR) — mevcut sitedeki bilgiler kullanılarak **yeniden yazıldı**, yönetmeliğe aykırı ifadeler yok;
      EN/AR taslak (`translationReview: true`). Kaynak metinler: `docs/content-source/`
- [x] S.S.S. (ana sayfa, `<details>`), `src/data/faq.ts`
- [x] İletişim sayfası (WhatsApp, telefon, adres + "Haritada aç" bağlantısı)
- [x] KVKK & Gizlilik (TR mevcut metinden uyarlandı; EN/AR taslak) — **veri sorumlusu teyidi ve hukuki kontrol bekliyor**
- [x] 404 sayfası (3 dilde)
- [ ] Diğer 5 tedavi (Yüz Germe, Yüz İnceltme, Lipoliz, Selülit, Cilt Gençleştirme) — müşteri onayıyla
- [ ] İletişim formu — form servisi seçilince (Formspree / Resend) + KVKK onay kutusu
- [ ] Gömülü harita — çerez onayı altyapısıyla birlikte (Faz 5)

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
