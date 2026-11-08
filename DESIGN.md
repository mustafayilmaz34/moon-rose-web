# DESIGN.md — Moonrose Clinic

> **Durum:** Yön **C — "Klinik mavisi"** seçildi (Faz 1). Token'lar `src/styles/global.css` → `@theme` içinde kesin.
> Mevcut sitenin (moonroseclinic.com) hissine yakın, ama daha toplu: 2 font, tutarlı boşluk, düzgün mobil ve RTL.

## Marka hissi

Sakin, güven veren, klinik ama soğuk değil. Bir "güzellik salonu" değil, **doktor tarafından yürütülen medikal estetik kliniği**.
Lacivert ve petrol mavisi güveni, buz mavisi zeminler ferahlığı, italik serif başlıklar zarafeti taşır.

## Token'lar

Bileşenler yalnızca bu token'ları kullanır (`bg-surface`, `text-ink`, `border-line`…). Ham hex yasak.

| Token     | Değer     | Rol                                            |
| --------- | --------- | ---------------------------------------------- |
| `surface` | `#ffffff` | Sayfa zemini; koyu zeminlerde metin            |
| `panel`   | `#eaf2f6` | Buz mavisi bölüm zemini (tedaviler)            |
| `ink`     | `#0f2a4a` | Ana metin, birincil buton, bilgi şeridi, bant  |
| `muted`   | `#5a6b7d` | İkincil metin                                  |
| `accent`  | `#0d5c78` | Petrol mavisi — üst başlıklar, vurgu, WhatsApp |
| `line`    | `#d6e3ea` | Ayraç çizgileri, kenarlıklar                   |

Koyu/video zeminlerde metin `text-surface`; saydamlık için `/15`, `/40` gibi opaklık ekleri kullanılır.

## Tipografi

| Rol    | Latin                                                 | Arapça               |
| ------ | ----------------------------------------------------- | -------------------- |
| Başlık | Fraunces (italik, opsz)                               | El Messiri (düz)     |
| Gövde  | Montserrat                                            | IBM Plex Sans Arabic |
| Logo   | Fraunces italik (`font-logo`) — her dilde Latin kalır |

- Fontlar `@fontsource` ile self-host; `global.css` başında import edilir.
- Başlıklar `font-display italic`, ağırlık 370–420. Arapça'da italik otomatik kapatılır (`global.css`).
- Gövde Montserrat: mevcut sitenin fontu — geniş, geometrik; menü `text-[15px] font-semibold`, bilgi şeridi `text-sm`.
- Buton/CTA etiketi: `label-caps` (12px, 700, büyük harf, `0.14em` aralık). Arapça'da büyük harf/aralık yok, 15px.
- Arapça metinde harf aralığı her zaman 0 (`[class*='tracking-']:lang(ar)`) — aralık Arapça harflerin bağlantısını bozar.
- Üst başlık (eyebrow): `text-xs font-semibold uppercase tracking-[0.22em] text-accent`.
- Arapça satır yüksekliği büyük başlıklarda `rtl:leading-[1.3–1.4]`.

## Şekil ve gölge

- Radius hiyerarşisi: fotoğraflar `22–28px`, bant `32px`, kart/balon `rounded-2xl`, butonlar `rounded-full`.
- Gölge yalnızca yüzen öğelerde (WhatsApp, saat kartı, yapışkan header): yumuşak, lacivert tonlu.

## Bileşenler

| Bileşen               | Dosya                                | Not                                                                     |
| --------------------- | ------------------------------------ | ----------------------------------------------------------------------- |
| Site iskeleti         | `src/layouts/SiteLayout.astro`       | Header + footer + WhatsApp; `overlayHeader` hero sayfaları için         |
| Bilgi şeridi + header | `src/components/SiteHeader.astro`    | Hero üstünde şeffaf, kaydırınca beyaz + yapışkan; mobil `<dialog>` menü |
| Footer                | `src/components/SiteFooter.astro`    | `#iletisim` çapası                                                      |
| WhatsApp              | `src/components/WhatsAppFloat.astro` | Masaüstünde balonlu                                                     |
| Logo                  | `src/components/Logo.astro`          | Metin logo — vektör logo gelince değişecek                              |
| İkonlar               | `src/components/Icon.astro`          | 1.6 çizgi, 24px ızgara                                                  |
| Ana sayfa bölümleri   | `src/components/home/*`              | Hero, About, Treatments, AppointmentBand                                |

## Hareket

- Hero açılışı: `motion-rise` (+ `--d` gecikme), sırayla, 900ms.
- Kaydırma: `motion-reveal` (kartlar, metin), `motion-parallax` (Hakkımızda fotoğrafı) — tarayıcının `view()` zaman çizelgesi.
- `prefers-reduced-motion: reduce` → hiçbir hareket yok, hero videosu oynamaz (kapak karesi).
- Otomatik oynayan video için durdur/oynat butonu zorunlu (WCAG 2.2.2).

## Görseller

- **Geçici istisna:** Şu an mevcut sitenin stok görselleri ve hero videosu kullanılıyor (`src/assets/legacy/`,
  `public/media/`). Lisans müşteriyle teyit edilecek. Video Google Veo ile üretilmiş; filigran **kırpılmaz**.
- Hedef: gerçek hekim, klinik ve ekip fotoğrafları. Gelince stok görseller kaldırılır.
- Önce/sonra görseli yok (yönetmelik). `doktor-salih-gul-min.jpg` doktor değildir — doktor olarak gösterilmez.

## Yasak kalıplar (yapay zeka / şablon görüntüsü)

Tester her sayfada bu listeyi kontrol eder. Biri varsa iş "bitti" sayılmaz.

- Dekoratif mor/mavi/pembe **gradyanlar**, glassmorphism, neon parlama (okunabilirlik için video scrim'i hariç)
- Arka arkaya aynı **3'lü ikon kartı** grid'leri; emoji ikonlar (✨ 💉 🌸)
- "Güzelliğinizi yeniden keşfedin", "Transform your…" gibi **kalıp sloganlar**; anlamsız sıfat yığınları
- Her bölümde aynı animasyon; sayfa açılırken zıplayan öğeler
- Rastgele font/ağırlık; token dışı renk
- "Lorem ipsum", sahte istatistik ("10.000+ mutlu hasta"), sahte yorum
- `#`'e giden boş linkler — hedefi olmayan şey link olmaz

## RTL (Arapça)

- Düzen aynalanır; yalnızca mantıksal sınıflar (`ms-`, `pe-`, `start-`…).
- Yön bildiren ikonlar (ok, menü) `rtl:-scale-x-100`; logo, telefon numarası, saat aynalanmaz (`dir="ltr"`).

## Kabul kontrol listesi (her sayfa)

- [ ] 375px ve 1440px'te düzgün; yatay kaydırma yok
- [ ] TR, EN, AR — AR'de düzen doğru aynalanmış
- [ ] Yasak kalıpların hiçbiri yok
- [ ] axe: kritik/ciddi ihlal yok; kontrast AA
- [ ] Sadece token renkleri/fontları
- [ ] Hareket azaltma açıkken hiçbir şey hareket etmiyor
