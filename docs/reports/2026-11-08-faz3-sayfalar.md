# Test raporu — Faz 3 sayfalar (2026-11-08)

**Sonuç: GEÇTİ (küçük düzeltmelerle)**

## Otomatik

- `npm run verify` ✓ (format/lint/tip 0 hata, 209 geçti, 3 atlandı). `npm run screens` ✓ (30 görüntü).

## Görsel

Desktop: tr/en/ar × treatments, treatment, contact, privacy; mobil: tr ve ar treatment, ar contact incelendi. Mobil tr/en/ar kalanlar (tr treatments, tr contact, tr/en privacy, en mobil) kontrol edilemedi.

- RTL aynalama doğru (breadcrumb, grid, footer, ikonlar, bilgi kartı). Taşma/kesilme yok; telefon `<bdi dir="ltr">` ile doğru okunuyor.
- **AR contact mobil:** telefon kartında "0540 500 02 / 34" iki satıra bölünüyor (`ContactPage.astro:40`, `text-3xl`) → `text-2xl sm:text-3xl whitespace-nowrap` (TR mobilde kontrol edilemedi, aynı kod).
- **Kart alt hizası:** TreatmentCard "Detaylı bilgi" linkleri aynı satırdaki kartlarda farklı yükseklikte (özet 2 vs 3 satır) — `TreatmentCard.astro:21` kartı `flex h-full flex-col` yapıp linke `mt-auto` ver.
- **Mobil treatment detay:** foto + "Kısa bilgiler" + buton içeriğin altında kalıyor (`TreatmentDetail.astro:44` aside). Hızlı bilgiler içerikten önce gelmeli ise `order-first lg:order-none` (tasarım kararı, bilgi amaçlı).
- Contact sayfası: telefon aynı sayfada 3 kez (kart, bilgi, üst şerit) — sadeleştirilebilir (düşük öncelik).
- Mobil WhatsApp balonu telefon kartı ikonunu örtüyor (kayarken normal; sorun değil ama dikkat).

## Yasak kalıp

Yok. Gradyan/emoji/sahte istatistik/`href="#"` yok. Ham hex: yalnızca `ContactPage.astro:21` yorum satırında (kod değil). Fiziksel yön sınıfı (ml-/mr-/pl-/pr-/left-/right-/text-left/right): yok.

## İçerik (TR)

Yasaklı ifade taraması (en iyi, garanti, kesin, kalıcı, acısız, mucize, %, fiyat, indirim, önce/sonra): **ihlal yok**. Dikkat:

- `src/content/treatments/tr/exosome.md:3-4,16` "Gençlik Aşısı" başlığı ve slug `genclik-asisi`: "aşı" tıbbi olarak yanıltıcı, "gençlik" vaat çağrıştırır; müşteriye sorulması önerilir (örn. "Cilt Yenileme / Eksozom"). Metin kendisi temkinli.
- `tr/botox.md` "çizgiler belirgin şekilde azalır" — hafifletilebilir ("azalabilir"); düşük risk.
- `tr/pigment.md:33` "tamamen geçmeyebilir" uygun.
- EN ve AR: 12 treatment dosyasının hepsinde `translationReview: true` var; TR'de yok (doğru).

## Sonrası (ana oturum)

- Düzeltildi: iletişim telefonu bölünmüyor (`whitespace-nowrap`, mobilde `text-2xl`).
- Düzeltildi: tedavi kartları `flex h-full flex-col`, "Detaylı bilgi" `mt-auto` ile alta hizalı.
- Düzeltildi: botoks metninde "belirgin şekilde azalır" → "daha az belirgin hale gelir" (TR/EN).
- Müşteriye soruldu: "Gençlik Aşısı" adı → `docs/CONTENT.md` soru 14.
- Bilinçli karar: mobil detay sayfasında görsel/kısa bilgiler makalenin altında kalıyor (önce açıklama; randevu
  butonu ve sabit WhatsApp her zaman erişilebilir).
