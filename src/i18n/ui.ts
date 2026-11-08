import type { Locale } from './config';

// Turkish is the reference dictionary. Every other language must define the
// exact same keys — a missing key is a type error and fails `npm run check`.
const tr = {
  'meta.siteName': 'Moonrose Clinic',
  'meta.description': 'Pendik, İstanbul’da medikal estetik kliniği.',
  'nav.home': 'Anasayfa',
  'nav.about': 'Hakkımızda',
  'nav.treatments': 'Tedaviler',
  'nav.faq': 'S.S.S.',
  'nav.contact': 'İletişim',
  'cta.appointment': 'Randevu Al',
  'cta.treatments': 'Uygulamaları inceleyin',
  'a11y.languageSwitcher': 'Dil seçimi',
  'a11y.skipToContent': 'İçeriğe geç',
  'a11y.mainNav': 'Ana menü',
  'a11y.openMenu': 'Menüyü aç',
  'a11y.closeMenu': 'Menüyü kapat',

  'hero.eyebrow': 'Medikal Estetik · Pendik, İstanbul',
  'hero.title': 'Yüzünüz, en dinlenmiş haliyle.',
  'hero.lead':
    'Botoks, dolgu, mezoterapi ve cilt yenileme uygulamaları. Her biri hekim muayenesiyle, yüzünüzün kendi oranlarına göre planlanır.',

  'info.hoursLabel': 'Çalışma saatleri',
  'info.hours': 'Pazartesi – Cumartesi, 08:30 – 17:00',
  'info.hoursNote': 'Çarşamba kapalı',
  'info.addressLabel': 'Adres',
  'info.address': 'Erol Kaya Cd. No:179, Pendik / İstanbul',
  'info.contactLabel': 'Randevu',
  'info.contact': 'WhatsApp üzerinden',

  'treatments.intro': 'Her uygulama, muayene sonrası size özel bir planla yapılır.',
  'treat.botox': 'Botoks',
  'treat.botox.desc': 'Mimik çizgilerinin yumuşatılması',
  'treat.filler': 'Dolgu',
  'treat.filler.desc': 'Hacim kaybı ve yüz hatlarının desteklenmesi',
  'treat.meso': 'Mezoterapi & PRP',
  'treat.meso.desc': 'Cilt kalitesi, parlaklık ve saç dökülmesi',
  'treat.pigment': 'Leke Tedavisi',
  'treat.pigment.desc': 'Melazma ve güneş lekeleri',
  'treat.thread': 'İp Askı',
  'treat.thread.desc': 'Cerrahi olmadan yüz ve boyunda toparlanma',
  'treat.exosome': 'Gençlik Aşısı',
  'treat.exosome.desc': 'Eksozom ile cilt yenilenmesi',
  'treatments.all': 'Tüm tedaviler',

  'about.title': 'Tıbbi deneyim, doğal sonuç.',
  'about.body':
    'Moonrose Clinic, tıp eğitiminden gelen deneyimi güncel medikal estetik uygulamalarıyla bir araya getirir. Her tedavi bir muayeneyle başlar; amaç yüzünüzü değiştirmek değil, doğal ifadenizi korumaktır.',
  'about.credLabel': 'Eğitim ve sertifikalar',
  'about.cred1': 'Medipol Üniversitesi Sürekli Eğitim Merkezi',
  'about.cred2': 'Università di Camerino — Medicina Estetica',

  'band.title': 'Size uygun planı birlikte belirleyelim.',
  'band.body': 'Muayene randevunuzu WhatsApp üzerinden kolayca oluşturabilirsiniz.',

  'info.phoneLabel': 'Telefon',
  'footer.note':
    'Sitedeki bilgiler yalnızca bilgilendirme amaçlıdır; tedavi kararı hekim muayenesiyle verilir.',
  'a11y.pauseVideo': 'Videoyu durdur',
  'whatsapp.bubble': 'Randevu için bize yazın',
  'a11y.playVideo': 'Videoyu oynat',
} as const;

export type UiKey = keyof typeof tr;
type Dictionary = Record<UiKey, string>;

// TODO(translation review): EN and AR are drafts — must be checked by native speakers before launch.
const en: Dictionary = {
  'meta.siteName': 'Moonrose Clinic',
  'meta.description': 'Medical aesthetics clinic in Pendik, Istanbul.',
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.treatments': 'Treatments',
  'nav.faq': 'FAQ',
  'nav.contact': 'Contact',
  'cta.appointment': 'Book an Appointment',
  'cta.treatments': 'Explore treatments',
  'a11y.languageSwitcher': 'Language',
  'a11y.skipToContent': 'Skip to content',
  'a11y.mainNav': 'Main menu',
  'a11y.openMenu': 'Open menu',
  'a11y.closeMenu': 'Close menu',

  'hero.eyebrow': 'Medical Aesthetics · Pendik, Istanbul',
  'hero.title': 'Your face, at its most rested.',
  'hero.lead':
    'Botox, fillers, mesotherapy and skin renewal. Each treatment is planned after a physician’s consultation, around the natural proportions of your face.',

  'info.hoursLabel': 'Opening hours',
  'info.hours': 'Monday – Saturday, 08:30 – 17:00',
  'info.hoursNote': 'Closed on Wednesdays',
  'info.addressLabel': 'Address',
  'info.address': 'Erol Kaya Cd. No:179, Pendik / Istanbul',
  'info.contactLabel': 'Appointments',
  'info.contact': 'Via WhatsApp',

  'treatments.intro': 'Every treatment follows a consultation and a plan made for you.',
  'treat.botox': 'Botox',
  'treat.botox.desc': 'Softening expression lines',
  'treat.filler': 'Dermal Fillers',
  'treat.filler.desc': 'Restoring volume and facial contours',
  'treat.meso': 'Mesotherapy & PRP',
  'treat.meso.desc': 'Skin quality, radiance and hair loss',
  'treat.pigment': 'Pigmentation Treatment',
  'treat.pigment.desc': 'Melasma and sun spots',
  'treat.thread': 'Thread Lift',
  'treat.thread.desc': 'Non-surgical lifting for face and neck',
  'treat.exosome': 'Exosome Therapy',
  'treat.exosome.desc': 'Skin renewal with exosomes',
  'treatments.all': 'All treatments',

  'about.title': 'Medical expertise, natural results.',
  'about.body':
    'Moonrose Clinic brings medical training together with current aesthetic medicine. Every treatment begins with a consultation; the aim is not to change your face, but to preserve your natural expression.',
  'about.credLabel': 'Training and certification',
  'about.cred1': 'Medipol University Continuing Education Centre',
  'about.cred2': 'Università di Camerino — Medicina Estetica',

  'band.title': 'Let’s decide on the right plan together.',
  'band.body': 'You can book your consultation easily via WhatsApp.',

  'info.phoneLabel': 'Phone',
  'footer.note':
    'Information on this site is for general purposes only; treatment decisions are made after a physician’s consultation.',
  'a11y.pauseVideo': 'Pause video',
  'whatsapp.bubble': 'Message us to book',
  'a11y.playVideo': 'Play video',
};

const ar: Dictionary = {
  'meta.siteName': 'Moonrose Clinic',
  'meta.description': 'عيادة تجميل طبية في بنديك، إسطنبول.',
  'nav.home': 'الرئيسية',
  'nav.about': 'من نحن',
  'nav.treatments': 'العلاجات',
  'nav.faq': 'الأسئلة الشائعة',
  'nav.contact': 'اتصل بنا',
  'cta.appointment': 'احجز موعدًا',
  'cta.treatments': 'تعرّف على العلاجات',
  'a11y.languageSwitcher': 'اللغة',
  'a11y.skipToContent': 'انتقل إلى المحتوى',
  'a11y.mainNav': 'القائمة الرئيسية',
  'a11y.openMenu': 'فتح القائمة',
  'a11y.closeMenu': 'إغلاق القائمة',

  'hero.eyebrow': 'طب التجميل · بنديك، إسطنبول',
  'hero.title': 'وجهك، في أكثر حالاته راحة.',
  'hero.lead':
    'البوتوكس والفيلر والميزوثيرابي وتجديد البشرة. يُخطَّط كل علاج بعد فحص الطبيب، وفق التناسق الطبيعي لملامح وجهك.',

  'info.hoursLabel': 'ساعات العمل',
  'info.hours': 'الإثنين – السبت، 08:30 – 17:00',
  'info.hoursNote': 'مغلق يوم الأربعاء',
  'info.addressLabel': 'العنوان',
  'info.address': 'شارع أرول كايا رقم 179، بنديك / إسطنبول',
  'info.contactLabel': 'المواعيد',
  'info.contact': 'عبر واتساب',

  'treatments.intro': 'يُجرى كل علاج بعد الفحص ووفق خطة مخصصة لك.',
  'treat.botox': 'البوتوكس',
  'treat.botox.desc': 'تنعيم خطوط التعبير',
  'treat.filler': 'الفيلر',
  'treat.filler.desc': 'استعادة الحجم ودعم ملامح الوجه',
  'treat.meso': 'الميزوثيرابي و PRP',
  'treat.meso.desc': 'جودة البشرة ونضارتها وتساقط الشعر',
  'treat.pigment': 'علاج التصبغات',
  'treat.pigment.desc': 'الكلف وبقع الشمس',
  'treat.thread': 'شد الخيوط',
  'treat.thread.desc': 'شد الوجه والرقبة دون جراحة',
  'treat.exosome': 'لقاح الشباب',
  'treat.exosome.desc': 'تجديد البشرة بالإكسوزوم',
  'treatments.all': 'جميع العلاجات',

  'about.title': 'خبرة طبية، ونتائج طبيعية.',
  'about.body':
    'تجمع Moonrose Clinic بين الخبرة الطبية وأحدث تطبيقات طب التجميل. يبدأ كل علاج بفحص طبي؛ والهدف ليس تغيير وجهك، بل الحفاظ على تعابيرك الطبيعية.',
  'about.credLabel': 'التعليم والشهادات',
  'about.cred1': 'مركز التعليم المستمر بجامعة ميديبول',
  'about.cred2': 'جامعة كاميرينو — طب التجميل',

  'band.title': 'لنحدّد معًا الخطة المناسبة لك.',
  'band.body': 'يمكنك حجز موعد الفحص بسهولة عبر واتساب.',

  'info.phoneLabel': 'الهاتف',
  'footer.note': 'المعلومات الواردة في الموقع لأغراض التوعية فقط؛ ويُتخذ قرار العلاج بعد فحص الطبيب.',
  'a11y.pauseVideo': 'إيقاف الفيديو',
  'whatsapp.bubble': 'راسلنا لحجز موعد',
  'a11y.playVideo': 'تشغيل الفيديو',
};

const dictionaries: Record<Locale, Dictionary> = { tr, en, ar };

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => dictionaries[locale][key];
}

export const treatmentKeys = ['botox', 'filler', 'meso', 'pigment', 'thread', 'exosome'] as const;
