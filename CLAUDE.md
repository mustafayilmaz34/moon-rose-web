# Moonrose Clinic — web sitesi

Medikal estetik kliniği (Pendik, İstanbul) için çok dilli tanıtım sitesi. Mevcut WordPress sitesinin
(moonroseclinic.com) yerini alacak: içerik ve yapı korunur, tasarım sıfırdan yapılır.

Kullanıcıyla **Türkçe** konuş. Kod, commit mesajları ve kod yorumları İngilizce.

@AGENTS.md

## Stack

Astro 7 (statik) · TypeScript strict · Tailwind CSS v4 · `@astrojs/sitemap` · Playwright + axe · ESLint · Prettier

## Komutlar

| Komut                             | Ne yapar                                                                 |
| --------------------------------- | ------------------------------------------------------------------------ |
| `npm run dev`                     | Geliştirme sunucusu (http://localhost:4321)                              |
| `npm run build`                   | Statik build → `dist/`                                                   |
| `npm run check`                   | Astro + TypeScript tip kontrolü (eksik çeviri anahtarı burada yakalanır) |
| `npm run lint` / `npm run format` | ESLint / Prettier                                                        |
| `npm run test`                    | Playwright testleri (build + preview üzerinde)                           |
| `npm run verify`                  | Hepsi — bir iş "bitti" denmeden önce geçmeli                             |

## Yapı

- `src/i18n/config.ts` — dil listesi (tr, en, ar), yön (ltr/rtl), hreflang. **Tek doğruluk kaynağı.**
- `src/i18n/ui.ts` — arayüz metinleri. TR referanstır; diğer diller aynı anahtarları içermek zorunda.
- `src/pages/[locale]/…` — her sayfa tüm diller için `getStaticPaths` ile üretilir. URL: `/tr/`, `/en/`, `/ar/`.
- `src/layouts/BaseLayout.astro` — `lang`/`dir`, canonical, hreflang.
- `src/styles/global.css` — tasarım token'ları (`@theme`).
- `docs/PLAN.md` — fazlar ve adımlar · `docs/CONTENT.md` — içerik envanteri ve müşteriye sorular · `DESIGN.md` — tasarım kuralları.

## Kurallar

- **Dil ekleme:** `src/i18n/config.ts` + `astro.config.mjs` + `ui.ts`'e sözlük. Başka yere dokunma.
- **RTL:** Yalnızca mantıksal Tailwind sınıfları: `ms-/me-`, `ps-/pe-`, `start-/end-`, `text-start/end`.
  `ml-/mr-/pl-/pr-/left-/right-/text-left/text-right` **yasak**. Yöne bağlı ikonlar `rtl:-scale-x-100`.
- **Renk/font:** Sadece `global.css`'teki token'lar (`bg-surface`, `text-ink`, `font-display`…). Ham hex yasak.
- **Metin:** Sayfalara sabit metin yazma; `ui.ts` veya content collection kullan.
- **Çeviri:** EN/AR metinler taslaktır, `TODO(translation review)` ile işaretli kalır — yayından önce anadili konuşan kontrol eder.
- **Hukuk:** Sağlık tanıtım yönetmeliği — önce/sonra görseli, hasta yorumu, "en iyi/garanti" gibi iddialar
  müşteri onayı olmadan eklenmez. Formlarda KVKK onay kutusu zorunlu.
- **Tasarım:** Her UI işinden önce `DESIGN.md` okunur; "Yasak kalıplar" listesine uyulur.
- **ui-ux-pro-max skill'i:** Yalnızca UX/erişilebilirlik kuralları ve font kataloğu (ör. Arapça destekli fontlar) için
  kullanılır. Önerdiği **stil, palet ve font eşleşmeleri uygulanmaz** — bunlar yaygın şablon seçimleri
  (glassmorphism, pastel pembe, Playfair+Inter…) ve DESIGN.md ile çelişir. Çelişkide DESIGN.md kazanır.

## Çalışma prensipleri

- **Önce düşün:** Belirsizlik varsa varsayımı açıkça yaz veya sor; sessizce tahmin etme.
- **Basit tut:** İstenenden fazla özellik, soyutlama veya "ileride lazım olur" kodu ekleme.
- **Cerrahi değişiklik:** Sadece görevin gerektirdiği satırlara dokun; ilgisiz refactor/format yok.
- **Hedefe göre doğrula:** "Bitti" demeden önce kabul kriterini ve `npm run verify`'ı somut olarak kontrol et.

## Çalışma düzeni (ajanlar)

Ana oturum kullanıcıyla konuşur ve işi dağıtır. Alt ajanlar `.claude/agents/` altında:

1. **planner** → `docs/PLAN.md`'yi günceller (kod yazmaz).
2. **developer** → PLAN'daki tek bir adımı uygular, `npm run verify` çalıştırır.
3. **tester** → değişikliği tarayıcıda 375px / 1440px ve 3 dilde kontrol eder, rapor yazar (kod değiştirmez).

Ajanlar arası aktarım dosya üzerinden olur (`docs/PLAN.md`, `docs/reports/`), sohbet geçmişiyle değil.
Kullanıcı onayı olmadan bir sonraki faza geçilmez.
