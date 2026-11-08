import type { Locale } from '../i18n/config';

/*
 * Home page FAQ. Based on the current site's FAQ, rewritten to avoid regulated claims
 * (no "toxin removal", no fixed effect durations). The hacamat/acupuncture question is left out
 * until the client confirms those services (docs/CONTENT.md, question 7).
 * Paragraphs inside an answer are separated by a blank line ("\n\n").
 */
type Faq = { q: string; a: string }[];

const tr: Faq = [
  {
    q: 'Botoks yaptırdıktan sonra yüz ifadem kaybolur mu?',
    a: 'Doğru bölgeye ve doğru dozda uygulanan botoks yüz ifadenizi dondurmaz. Amaç mimik çizgilerini yumuşatmak ve daha dinlenmiş bir görünüm sağlamaktır. Doz ve uygulama noktaları muayenede yüz yapınıza göre belirlenir.',
  },
  {
    q: 'Mezoterapi ve dolgu uygulamaları acı verir mi?',
    a: 'İşlemden önce bölgeye lokal anestezik krem uygulanır. Çoğu kişi yalnızca hafif bir batma hissi tarif eder; his kişiden kişiye ve uygulanan bölgeye göre değişebilir.',
  },
  {
    q: 'PRP ve mezoterapinin etkisini ne zaman görürüm?',
    a: 'İlk değişimler genellikle 1–2 hafta içinde fark edilir; cilt dokusundaki iyileşme seanslar ilerledikçe belirginleşir. Seans sayısı ve etkinin ne kadar süreceği cildinizin durumuna göre değişir ve muayenede planlanır.',
  },
  {
    q: 'Uygulamadan sonra hemen işime dönebilir miyim?',
    a: 'Medikal estetik uygulamalarının çoğunda aynı gün ya da birkaç gün içinde günlük hayata dönülebilir. Kısa süreli kızarıklık, şişlik veya morarma olabilir. Uygulamaya özel bakım önerileri ve güneşten korunma size ayrıca anlatılır.',
  },
  {
    q: 'Randevuyu nasıl alabilirim?',
    a: 'WhatsApp veya telefon üzerinden bize yazabilir ya da arayabilirsiniz. Her uygulama bir muayeneyle başlar; size uygun yöntem bu görüşmede hekimle birlikte belirlenir.',
  },
];

// TODO(translation review): EN and AR are drafts — must be checked by native speakers before launch.
const en: Faq = [
  {
    q: 'Will I lose my facial expressions after Botox?',
    a: 'Botox applied to the right areas at the right dose does not freeze your expressions. The aim is to soften expression lines and give a more rested look. The dose and injection points are decided during the consultation, based on your facial structure.',
  },
  {
    q: 'Are mesotherapy and fillers painful?',
    a: 'A local anaesthetic cream is applied before the treatment. Most people describe only a slight pinprick sensation; it varies from person to person and by area.',
  },
  {
    q: 'When will I see the effect of PRP and mesotherapy?',
    a: 'First changes are usually noticed within 1–2 weeks, and improvement in skin texture becomes clearer as the sessions progress. The number of sessions and how long the effect lasts depend on your skin and are planned during the consultation.',
  },
  {
    q: 'Can I go back to work right after a treatment?',
    a: 'With most medical aesthetic treatments you can return to daily life the same day or within a few days. Brief redness, swelling or bruising may occur. You will be given aftercare and sun-protection advice specific to your treatment.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Message us on WhatsApp or call us. Every treatment starts with a consultation, where the right method for you is decided together with the physician.',
  },
];

const ar: Faq = [
  {
    q: 'هل سأفقد تعابير وجهي بعد البوتوكس؟',
    a: 'البوتوكس المحقون في المناطق الصحيحة وبالجرعة المناسبة لا يجمّد تعابير الوجه. والهدف هو تخفيف خطوط التعبير ومنح مظهر أكثر راحة. وتُحدَّد الجرعة ونقاط الحقن خلال الفحص بحسب بنية وجهك.',
  },
  {
    q: 'هل الميزوثيرابي والفيلر مؤلمان؟',
    a: 'يُوضع كريم مخدر موضعي قبل الإجراء. ويصف معظم الأشخاص إحساسًا بوخزة خفيفة فقط، ويختلف ذلك من شخص لآخر وبحسب المنطقة.',
  },
  {
    q: 'متى ألاحظ تأثير الـ PRP والميزوثيرابي؟',
    a: 'غالبًا ما يُلاحظ أول تغيّر خلال 1–2 أسبوع، ويزداد تحسن ملمس البشرة وضوحًا مع تقدم الجلسات. ويعتمد عدد الجلسات ومدة التأثير على حالة بشرتك، ويُخطَّط لهما خلال الفحص.',
  },
  {
    q: 'هل يمكنني العودة إلى عملي مباشرة بعد الإجراء؟',
    a: 'في معظم علاجات طب التجميل يمكن العودة إلى الحياة اليومية في اليوم نفسه أو خلال بضعة أيام. وقد يظهر احمرار أو تورم أو كدمات لفترة قصيرة. وستحصل على تعليمات العناية والحماية من الشمس الخاصة بعلاجك.',
  },
  {
    q: 'كيف أحجز موعدًا؟',
    a: 'راسلنا عبر واتساب أو اتصل بنا هاتفيًا. يبدأ كل علاج بفحص طبي، تُحدَّد خلاله الطريقة المناسبة لك مع الطبيب.',
  },
];

export const faq: Record<Locale, Faq> = { tr, en, ar };
