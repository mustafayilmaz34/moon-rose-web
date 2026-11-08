# DESIGN.md — Moonrose Clinic

> **Durum:** Faz 1 bekleniyor. Tasarım yönü seçilene kadar `global.css`'teki token'lar geçicidir.
> Yön seçildiğinde bu dosyanın "Token'lar" ve "Tipografi" bölümleri kesinleşir.

## Marka hissi

Sakin, güven veren, butik. Bir "güzellik salonu" değil, **doktor tarafından yürütülen medikal estetik kliniği**.
Hedef his: premium bir butik otelin ya da dermatoloji markasının sitesi — abartısız, bol boşluklu, fotoğraf odaklı.

"Moon Rose" adından gelen ipuçları: gece/ay (derin lacivert, gümüş, sessizlik) + gül (pudra, toprak pembesi, sıcaklık).

## Aday yönler (Faz 1'de biri seçilecek)

|              | A — "Ay ışığı"                              | B — "Gül tozu"                           |
| ------------ | ------------------------------------------- | ---------------------------------------- |
| Zemin        | Kırık beyaz / taş                           | Sıcak krem                               |
| Ana renk     | Derin gece mavisi                           | Koyu kahve-bordo                         |
| Vurgu        | Soluk gümüş-gül                             | Toprak pembesi                           |
| Başlık fontu | Yüksek kontrastlı serif                     | Yumuşak, geniş serif                     |
| Ritim        | Geniş boşluk, ince çizgiler, editoryal grid | Büyük fotoğraflar, yuvarlak kırpmalar az |

## Yasak kalıplar (yapay zeka / şablon görüntüsü)

Tester her sayfada bu listeyi kontrol eder. Biri varsa iş "bitti" sayılmaz.

- Mor/mavi/pembe **gradyanlar**, glassmorphism, neon parlama, yoğun gölgeler
- Her şeyin **ortalandığı** düzen; arka arkaya aynı **3'lü ikon kartı** grid'leri
- **Emoji** veya genel amaçlı ikon setinden rastgele ikonlar (✨ 💉 🌸)
- "Güzelliğinizi yeniden keşfedin", "Transform your…" gibi **kalıp sloganlar**; anlamsız sıfat yığınları
- **Stok fotoğraf** veya yapay zekayla üretilmiş yüz/insan görseli
- Her bölümde aynı animasyon (fade-up her şey); sayfa açılırken zıplayan öğeler
- Tüm başlık ve gövdede tek font (özellikle varsayılan Inter); rastgele font ağırlıkları
- Her köşede aynı `rounded-2xl`; her kartta aynı gölge
- "Lorem ipsum", sahte istatistik ("10.000+ mutlu hasta"), sahte yorum

## İlkeler

- **Fotoğraf önce gelir.** Gerçek doktor ve klinik fotoğrafları; tutarlı renk düzenlemesi (sıcak, düşük kontrast).
- **Tipografi hiyerarşisi** ile ayrışma — renk ve kutu ile değil. Başlık serif, gövde sans.
- **Asimetri ve editoryal grid**: metin ve görsel dönüşümlü, beyaz alan bilinçli.
- **Az ama iyi hareket**: sayfa geçişleri ve hover'da ölçülü (≤ 300ms), `prefers-reduced-motion`'a uyulur.
- **Tek birincil eylem**: "Randevu Al" (WhatsApp). Her ekranda bir tane, rekabet eden buton yok.

## Token'lar (geçici — Faz 1'de kesinleşecek)

`src/styles/global.css` → `@theme`. Bileşenler yalnızca token kullanır.

| Token     | Rol                                   |
| --------- | ------------------------------------- |
| `surface` | Sayfa zemini                          |
| `ink`     | Ana metin                             |
| `muted`   | İkincil metin                         |
| `accent`  | Vurgu (link, aktif durum, ince detay) |

## Tipografi

- Latin: başlık için karakterli bir serif, gövde için sade bir sans (Faz 1'de 2 aday gösterilecek).
- Arapça: Latin fontlarla aynı ağırlık/x-yüksekliği hissini veren ayrı bir aile (`:lang(ar)` ile).
- Fontlar self-host edilir (`@fontsource` veya `public/fonts`), `font-display: swap`.

## RTL (Arapça)

- Düzen aynalanır; mantıksal sınıflar kullanılır (bkz. CLAUDE.md).
- Yön bildiren ikonlar (ok, chevron) aynalanır; logo, telefon numarası, saat aynalanmaz.
- Arapça satır yüksekliği Latin'den biraz fazla tutulur.

## Kabul kontrol listesi (her sayfa)

- [ ] 375px ve 1440px'te düzgün; yatay kaydırma yok
- [ ] TR, EN, AR — AR'de düzen doğru aynalanmış
- [ ] Yasak kalıpların hiçbiri yok
- [ ] axe: kritik/ciddi ihlal yok; kontrast AA
- [ ] Sadece token renkleri/fontları
