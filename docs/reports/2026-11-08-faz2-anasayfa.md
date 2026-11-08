# Tester raporu — Faz 2 ana sayfa (2026-11-08)

Sonuç: KALDI (küçük, 2 düzeltme; mimari/yasak kalıp sorunu yok)
Otomatik: verify ✓ (format, lint, astro check 0 hata, build, Playwright 53 geçti / 3 atlandı; axe + yatay taşma + menü + hareket testleri yeşil). screens ✓ (6 görüntü).
Görsel:

- AR × masaüstü ve mobil: footer "Randevu" sütununda telefon numarası sola yaslı, başlık ve "عبر واتساب" sağa yaslı (numara başlıktan kopuk). Neden: SiteFooter.astro:37 `dir="ltr"` bloğun hizasını LTR'ye çeviriyor.
- AR × masaüstü/mobil: telif satırı "Moonrose Clinic 2026 ©" şeklinde ters görünüyor (SiteFooter.astro:46, karışık yönlü metin; BiDi). Sadece görsel; düşük öncelik.
- TR/EN/AR × masaüstü: genel olarak düzgün. AR aynalaması doğru (header, bilgi şeridi, hakkımızda, kart sırası, bant, WhatsApp balonu sola). Taşma/kesilme yok.
- TR/EN/AR × mobil: yatay taşma yok, hero okunaklı, menü butonu/WhatsApp/oynat düğmesi çakışmıyor. TR eyebrow "MEDİKAL ESTETİK · PENDİK, İSTANBUL" mobilde gutter'a çok yakın (tam sığıyor); dar ekranda (<360px) taşabilir — kontrol edilemedi.
- Mobil: hero'daki adres/saat şeridi gizli; adres ve saat sadece footer'da (tasarım kararıysa sorun değil).
- Mobil: hero video oynatma düğmesi sadece boş şeritte tek başına duruyor; hizalama tutarlı, sorun değil.
  Yasak kalıp: yok. Gradyan sadece video scrim; 3'lü ikon kartı yok (tedavi kartları fotoğraflı, ikon değil); emoji, sahte istatistik, lorem, `href="#"` yok.
  Grep: ham hex (global.css dışı) 0; fiziksel yön sınıfları (ml-/mr-/pl-/pr-/left-/right-/text-left/right) 0; `href="#"` 0.
  Kontrol edilemedi: hover/odak stilleri, gerçek tarayıcıda scroll ile header geçişi (yalnızca motion.spec.ts yeşil), video oynarken kontrast, <360px genişlik, hareket-azaltma kapalıyken hero animasyon görünümü.
  Önerilen düzeltme:

1. src/components/SiteFooter.astro:37 → `dir="ltr"` yerine `<a class="... block text-start">` içinde numarayı `<bdi dir="ltr">{site.phoneDisplay}</bdi>` ile sar (veya `rtl:text-end`); böylece blok başlıkla aynı kenara hizalanır.
2. src/components/SiteFooter.astro:46 → "©" ve yılı BiDi güvenli yap: `<span dir="ltr">© {year} Moonrose Clinic</span>` ya da ui.ts'ten metin al (CLAUDE.md "sabit metin yazma" kuralı: "Moonrose Clinic" marka adı olduğu için kabul edilebilir).

## Sonrası (ana oturum)

- Düzeltildi: footer telefonu `<bdi dir="ltr">` ile, blok sayfa yönünde kaldı (`SiteFooter.astro`).
- Düzeltildi: telif satırı `<span dir="ltr">` içinde.
- Düzeltildi: mobil hero üst başlığında harf aralığı `0.18em` (sm üstü `0.28em`).
- Ek bulgu, düzeltildi: AR footer'da logo sütunun soluna yaslanıyordu → `Logo.astro` `w-fit`.
- Bilinçli karar: mobilde hero altındaki adres/saat şeridi gizli; bilgi şeridi + footer'da mevcut.
- `npm run verify`: 53 geçti, 3 atlandı (mobil menü testleri masaüstünde).
