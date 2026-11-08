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
  'whatsapp.bubble': 'Randevu için bize yazın',
  'a11y.breadcrumb': 'Sayfa konumu',
  'treatments.lead':
    'Medikal estetik uygulamalarımız. Her biri muayeneyle başlar; size uygun yöntem ve plan hekimle birlikte belirlenir.',
  'treatment.readMore': 'Detaylı bilgi',
  'treatment.facts': 'Kısa bilgiler',
  'treatment.disclaimer':
    'Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır. Size uygun tedavi ve sonuçları kişiden kişiye değişir; karar hekim muayenesiyle verilir.',
  'treatment.others': 'Diğer uygulamalar',
  'faq.title': 'Sıkça sorulan sorular',
  'contact.title': 'İletişim',
  'contact.lead': 'Randevu ve sorularınız için bize WhatsApp veya telefonla ulaşabilirsiniz.',
  'contact.map': 'Haritada aç',
  'contact.whatsappCta': 'WhatsApp ile yazın',
  'contact.callCta': 'Telefonla arayın',
  'privacy.title': 'KVKK ve Gizlilik Politikası',
  'footer.privacy': 'KVKK ve Gizlilik',
  'notFound.title': 'Sayfa bulunamadı',
  'notFound.body': 'Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.',
  'notFound.home': 'Ana sayfaya dön',
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
  'whatsapp.bubble': 'Message us to book',
  'a11y.breadcrumb': 'Breadcrumb',
  'treatments.lead':
    'Our medical aesthetic treatments. Each one starts with a consultation; the method and plan are decided together with the physician.',
  'treatment.readMore': 'Learn more',
  'treatment.facts': 'At a glance',
  'treatment.disclaimer':
    'The information on this page is for general purposes only. Suitable treatment and results vary from person to person; decisions are made after a physician’s consultation.',
  'treatment.others': 'Other treatments',
  'faq.title': 'Frequently asked questions',
  'contact.title': 'Contact',
  'contact.lead': 'For appointments and questions, reach us on WhatsApp or by phone.',
  'contact.map': 'Open in Maps',
  'contact.whatsappCta': 'Message on WhatsApp',
  'contact.callCta': 'Call us',
  'privacy.title': 'Privacy Policy',
  'footer.privacy': 'Privacy',
  'notFound.title': 'Page not found',
  'notFound.body': 'The page you are looking for may have been moved or removed.',
  'notFound.home': 'Back to home',
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
  'whatsapp.bubble': 'راسلنا لحجز موعد',
  'a11y.breadcrumb': 'مسار التنقل',
  'treatments.lead':
    'علاجات طب التجميل لدينا. يبدأ كل علاج بفحص طبي، ويُحدَّد الأسلوب والخطة المناسبة لك مع الطبيب.',
  'treatment.readMore': 'اعرف المزيد',
  'treatment.facts': 'معلومات سريعة',
  'treatment.disclaimer':
    'المعلومات الواردة في هذه الصفحة لأغراض التوعية العامة فقط. يختلف العلاج المناسب ونتائجه من شخص لآخر، ويُتخذ القرار بعد فحص الطبيب.',
  'treatment.others': 'علاجات أخرى',
  'faq.title': 'الأسئلة الشائعة',
  'contact.title': 'اتصل بنا',
  'contact.lead': 'للمواعيد والاستفسارات، تواصل معنا عبر واتساب أو الهاتف.',
  'contact.map': 'افتح في الخريطة',
  'contact.whatsappCta': 'راسلنا عبر واتساب',
  'contact.callCta': 'اتصل بنا هاتفيًا',
  'privacy.title': 'سياسة الخصوصية',
  'footer.privacy': 'الخصوصية',
  'notFound.title': 'الصفحة غير موجودة',
  'notFound.body': 'ربما تم نقل الصفحة التي تبحث عنها أو حذفها.',
  'notFound.home': 'العودة إلى الصفحة الرئيسية',
};

const dictionaries: Record<Locale, Dictionary> = { tr, en, ar };

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => dictionaries[locale][key];
}

export const treatmentKeys = ['botox', 'filler', 'meso', 'pigment', 'thread', 'exosome'] as const;
