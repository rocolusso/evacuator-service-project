import type { Locale } from '@/types';

const ro: Locale = {
  meta: {
    title: 'Evacuator Chișinău 24/7: ajunge în 15-20 minute, de la 450 MDL',
    description:
        'Aveți nevoie de evacuator în Chișinău? Vezu.md ajunge în 15-20+ minute, non-stop. Autoturisme, SUV-uri și utilaje până la 15 t. Preț fix de la 450 MDL.',
    ogTitle: 'Evacuator Chișinău 24/7 — Asistență Rutieră Urgentă',
    ogDescription:
        'Ai rămas pe traseu? Cheamă evacuatorul în Chișinău. Ajungem în 15-20+ minute, lucrăm non-stop. Transportăm orice, de la autoturisme la utilaje speciale.',
  },
  hero: {
    h1: 'Evacuator în Chișinău și toată Moldova 24/7',
    subtitle:
        'Evacuare urgentă pentru autoturisme și tehnică specială. Sosire de la 15-20+ minute. Pe orice vreme, fără zile de odihnă.',
    ctaCall: 'Cheamă evacuatorul',
    ctaPrice: 'Află prețurile',
    badge: '24/7 Fără zile de odihnă',
    trustNoHidden: 'Fără costuri ascunse',
    trustArea: 'Chișinău & Moldova',
  },
  advantages: {
    h2: 'Cum chemi evacuatorul? Doar 3 pași',
    step1: {
      title: 'Descrie situația și locația',
      desc: 'Spune-i dispecerului unde te afli, marca mașinii și motivul opririi.',
    },
    step2: {
      title: 'Află costul exact',
      desc: 'Calculăm imediat prețul și îți comunicăm timpul de sosire a autospecialei.',
    },
    step3: {
      title: 'Așteaptă ajutorul',
      desc: 'Evacuatorul va ajunge la fața locului, în medie, în 15-20+ minute.',
    },
  },
  pricing: {
    h2: 'Prețuri oneste pentru serviciile de evacuator',
    desc: 'Costul final depinde de distanță, tipul vehiculului și complexitatea încărcării (ex: roți blocate). Fără comisioane ascunse — comunicăm prețul înainte de plecare.',
    items: [
      // {
      //   title: 'Motociclete, ATV-uri',
      //   price: 'de la 400 MDL',
      //   per: '+ 10 MDL/km',
      //   icon: '🏍️',
      // },
      {
        title: 'Sedan, Hatchback până la 2t',
        price: 'de la 450 MDL',
        per: '+ 9 MDL/km',
        icon: '🚗',
        slug: '/servicii/evacuare-auto-turisme',
      },
      {
        title: 'SUV, Microbuze până la 3t',
        price: 'de la 550 MDL',
        per: '+ 12 MDL/km',
        icon: '🚙',
        slug: '/servicii/evacuare-suv-microbuze',
      },
      {
        title: 'Tractoare, Încărcătoare până la 15t',
        price: 'de la 800 MDL',
        per: '+ 16 MDL/km',
        icon: '🚛',
        slug: '/servicii/evacuare-tehnica-speciala',
      },
    ],
  },
  services: {
    h2: 'Nu doar evacuare: asistență rutieră',
    items: [
      {
        title: 'Evacuator cu manipulator',
        desc: 'Pentru mașini în șanț sau cu roțile blocate.',
        icon: '🔧',
        slug: '/servicii/evacuator-cu-manipulator',
      },
      // {
      //   title: 'Livrare combustibil',
      //   desc: 'Aducem benzină sau motorină direct pe traseu.',
      //   icon: '⛽',
      // },
      {
        title: 'Pornire motor (curent)',
        desc: 'Pornire sigură a motorului cu booster 12V/24V.',
        icon: '🔋',
        slug: '/servicii/pornire-baterie',
      },
    ],
  },
  faq: {
    h2: 'Întrebări frecvente',
    items: [
      {
        q: 'Cât costă chemarea unui evacuator în Chișinău?',
        a: 'Prețul de pornire este de la 450 MDL pentru autoturisme. Costul final depinde de distanță și complexitatea încărcării. Comunicăm prețul exact înainte de plecare.',
      },
      {
        q: 'Cât de repede vine evacuatorul?',
        a: 'Timpul mediu de sosire în Chișinău este de 15-20+ minute. Datorită distribuirii corecte a autospecialelor pe sectoare (Botanica, Centru, Rîșcani, Buiucani, Ciocana), timpul de așteptare este minim.',
      },
      {
        q: 'Lucrați noaptea și în weekenduri?',
        a: 'Da, serviciul nostru funcționează non-stop, 24/7, 365 de zile pe an. Fără zile de odihnă și sărbători.',
      },
      {
        q: 'Ce tipuri de vehicule transportați?',
        a: 'Transportăm autoturisme, SUV-uri, microbuze, ATV-uri și tehnică specială cu greutatea de până la 15 tone. Inclusiv mașini cu roțile blocate sau în șanț.',
      },
      {
        q: 'Acceptați plata fără numerar?',
        a: 'Da, acceptăm plata în numerar și prin transfer bancar. Prețul se fixează înainte de prestarea serviciului, fără plăți ascunse.',
      },
    ],
  },
  seo: {
    items: [
      {
        level: 'h2',
        heading: 'Evacuator profesional în Chișinău: asistență rutieră de încredere 24/7',
        body: 'Defecțiunea mașinii sau un accident rutier se întâmplă mereu la momentul nepotrivit. Serviciul nostru oferă evacuator în Chișinău, precum și transport interurban al automobilelor pe întreg teritoriul Republicii Moldova.',
      },
      {
        level: 'h3',
        heading: 'Ce trebuie să aveți pregătit când sunați',
        body: 'Spuneți dispecerului unde vă aflați, ce mașină conduceți și de ce s-a oprit — astfel vă putem comunica mai rapid prețul exact și ora de sosire.',
        bullets: [
          'Strada și numărul casei sau un punct de reper din apropiere',
          'Marca și modelul mașinii',
          'Ce s-a întâmplat: o pană, bateria descărcată, un accident sau mașina blocată într-un șanț',
          'Dacă roțile se învârt și dacă mașina are cutie de viteze automată sau tracțiune integrală',
        ],
      },
      {
        level: 'h3',
        heading: 'Ce influențează prețul final',
        body: 'Trei factori influențează suma totală: distanța, greutatea și tipul vehiculului, precum și gradul de dificultate al încărcării. O mașină care nu poate fi pur și simplu rulată pe platformă necesită mai mult echipament și mai mult timp, iar prețul reflectă acest lucru. Vă comunicăm suma finală la telefon, ca să o puteți compara cu alte oferte înainte de a decide.',
      },
      {
        level: 'h4',
        heading: 'Roți blocate',
        body: 'Dacă roțile sunt blocate, mașina nu poate fi rulată pe platformă, așa că trimitem un evacuator cu manipulator.',
      },
      {
        level: 'h4',
        heading: 'Mașină într-un șanț',
        body: 'O mașină care a ajuns într-un șanț necesită, de asemenea, un evacuator cu manipulator.',
      },
      {
        level: 'h2',
        heading: 'Motive frecvente pentru a apela un evacuator în Chișinău',
      },
      {
        level: 'h3',
        heading: 'Pană pe șosea',
        body: 'Un motor care nu pornește, o cutie de viteze defectă sau o suspensie avariată duc toate la același rezultat: mașina nu se poate deplasa din proprie inițiativă. Descrieți simptomele dispecerului și vă trimitem un evacuator potrivit pentru vehiculul dumneavoastră.',
      },
      {
        level: 'h3',
        heading: 'Baterie descărcată',
        body: 'Uneori, motorul are nevoie doar de un impuls de pornire. Pentru asta folosim un dispozitiv de pornire de 12 V sau 24 V. Dacă mașina tot nu pornește, spuneți dispecerului și vă organizăm evacuarea.',
      },
      {
        level: 'h3',
        heading: 'Accident rutier',
        body: 'După o coliziune, roțile, direcția sau suspensia sunt adesea avariate. Spuneți dispecerului dacă mașina se poate deplasa, astfel încât echipamentul potrivit să ajungă de la prima încercare.',
      },
      {
        level: 'h3',
        heading: 'Mașină într-un șanț sau cu roțile blocate',
        body: 'Aceste mașini nu pot fi urcate pe o platformă. Un evacuator cu manipulator se ocupă de ambele situații.',
      },
      {
        level: 'h3',
        heading: 'Transportul utilajelor grele',
        body: 'Tractoarele și încărcătoarele de până la 15 tone pot fi transportate, de asemenea, cu evacuatorul. Acest lucru este util atunci când utilajul s-a defectat la fața locului sau trebuie mutat într-un alt șantier.',
      },
      {
        level: 'h2',
        heading: 'Continuați să conduceți sau chemați evacuatorul?',
        body: 'O mașină avariată care continuă să se deplaseze poate transforma o reparație minoră într-una majoră, iar evacuarea este, de obicei, opțiunea mai ieftină. Dacă aveți îndoieli cu privire la siguranța conducerii mașinii, sunați înainte de a porni din nou motorul.',
      },
      {
        level: 'h3',
        heading: 'Semne că mașina nu ar trebui condusă',
        bullets: [
          'Motorul se oprește sau pierde putere',
          'Lampa de avertizare pentru presiunea uleiului sau temperatura rămâne aprinsă',
          'Volanul trage puternic într-o parte sau pare slăbit',
          'Frânele par moi sau scârțâie',
          'Se scurge lichid sub motor',
        ],
      },
      {
        level: 'h3',
        heading: 'Dacă nu sunteți sigur',
        body: 'Sunați la +373 68 988 220 și descrieți ce vedeți și auziți. Dispecerul vă va spune ce echipament vine și vă va comunica prețul înainte ca evacuatorul să plece.',
      },
      {
        level: 'h2',
        heading: 'Ce vehicule transportăm',
        body: 'Transportăm autoturisme, SUV-uri, microbuze, motociclete, ATV-uri și utilaje speciale de până la 15 tone. Aceasta include autoturismele cu roțile blocate și cele care au ajuns într-un șanț.',
      },
      {
        level: 'h3',
        heading: 'Motociclete și ATV-uri',
        body: 'Comunicați dispecerului modelul și greutatea aproximativă, iar prețul vi se va comunica telefonic înainte ca evacuatorul să plece.',
      },
      {
        level: 'h3',
        heading: 'Utilaje speciale de până la 15 tone',
        body: 'Tractoarele și încărcătoarele fac parte din categoria utilajelor grele, pentru care tariful începe de la 800 MDL plus 16 MDL pe km.',
      },
      {
        level: 'h2',
        heading: 'Evacuator în tot Chișinăul și în toată Moldova',
      },
      {
        level: 'h3',
        heading: 'Evacuator în fiecare sector al Chișinăului',
        body: 'Mașinile noastre sunt distribuite în toate sectoarele capitalei: Botanica, Centru, Rîșcani, Buiucani și Ciocana. Astfel, timpul de așteptare este redus la minimum, iar un singur apel este suficient pentru a afla prețul și ora de sosire.',
      },
      {
        level: 'h3',
        heading: 'Evacuare interurbană în toată Moldova',
        body: 'De asemenea, transportăm vehicule între orașe și localități de oriunde din Republica Moldova. Indicați adresa de preluare și destinația, iar dispecerul calculează costul în funcție de distanță.',
      },
      {
        level: 'h2',
        heading: 'De ce să apelați la un evacuator profesionist',
        body: 'O pană sau o coliziune scoate mașina de pe șosea într-un moment nepotrivit, iar modul în care este încărcată influențează ceea ce urmează.',
      },
      {
        level: 'h3',
        heading: 'Echipamentul potrivit vă protejează mașina',
        body: 'Folosim platforme moderne, troliuri și manipulatoare și alegem echipamentul potrivit pentru fiecare vehicul. O mașină obișnuită se urcă pe o platformă. O mașină care nu se poate deplasa are nevoie de un troliu sau de un manipulator. Astfel, încărcarea și descărcarea se desfășoară în condiții de siguranță pentru vehiculul dumneavoastră.',
      },
      {
        level: 'h3',
        heading: 'Răspuns rapid non-stop',
        body: 'Serviciul funcționează 24 de ore pe zi, 7 zile pe săptămână, 365 de zile pe an, inclusiv în zilele de sărbătoare. Mașinile sunt repartizate în toate sectoarele orașului, astfel încât echipa cea mai apropiată să ajungă rapid la dumneavoastră.',
      },
      {
        level: 'h2',
        heading: 'Cum să vă pregătiți mașina pentru evacuare',
      },
      {
        level: 'h3',
        heading: 'Înainte de sosirea evacuatorului',
        bullets: [
          'Scoateți documentele, încărcătorul de telefon și obiectele de valoare din mașină',
          'Fotografiați mașina din toate unghiurile, astfel încât starea acesteia înainte de încărcare să fie consemnată',
          'Găsiți cheile și informați dispecerul dacă frâna de mână este trasă sau dacă volanul este blocat',
        ],
      },
      {
        level: 'h3',
        heading: 'La sosirea evacuatorului',
        body: 'Arătați șoferului unde se află mașina și unde trebuie dusă. Confirmați adresa de destinație înainte de încărcare și verificați dacă prețul corespunde celui comunicat de dispecer la telefon.',
      },
      {
        level: 'h2',
        heading: 'Plată și limbi de comunicare',
      },
      {
        level: 'h3',
        heading: 'Plată în numerar și fără numerar',
        body: 'Puteți plăti în numerar sau prin mijloace de plată fără numerar. Suma este stabilită înainte de începerea serviciului, astfel încât suma comunicată la telefon este suma pe care o veți plăti.',
      },
      {
        level: 'h3',
        heading: 'Română și rusă',
        body: 'Dispecerii preiau apelurile în română și rusă.',
      },
      {
        level: 'h2',
        heading: 'Comandați un evacuator în Chișinău',
        body: 'Sunați dispecerul la +373 68 988 220 sau completați formularul cu numele dumneavoastră, adresa și marca mașinii. Spuneți-ne ce s-a întâmplat, iar noi vă vom comunica prețul și ora de sosire.',
      },
      {
        level: 'h6',
        heading: 'Evacuator Chișinău: +373 68 988 220, non-stop',
      },
    ],
  },
  footer: {
    rights: '© 2026 Vezu.md. Toate drepturile rezervate.\n' +
        'Servicii prestate de: Oleksandr Shchedrov. Adresă: Strada Vissarion Belinski 71, MD-2064, Chișinău',
    phone: '+37368988220',
    workingHours: 'Fără zile de odihnă 24/7',
    cookieSettingsLabel: 'Setări cookie',
    privacyPolicyLabel: 'Politica de confidențialitate',
    cookiePolicyLabel: 'Politica de cookie-uri',
  },
  cookie: {
    message: 'Folosim cookie-uri pentru a îmbunătăți funcționarea site-ului. Continuând, sunteți de acord cu utilizarea acestora.',
    accept: 'Accept toate',
    reject: 'Refuz',
    policyLinkText: 'Politica de cookie-uri',
  },
  privacyPolicy: {
    title: 'Politica de confidențialitate',
    updated: 'Actualizat: septembrie 2026',
    intro: 'Această politică descrie modul în care Vezu.md colectează, utilizează și protejează datele dumneavoastră personale atunci când vizitați acest site sau solicitați serviciile noastre de evacuator.',
    sections: [
      {
        heading: 'Operatorul de date',
        body: 'Operatorul datelor cu caracter personal colectate prin acest site este Oleksandr Shchedrov, cu sediul la adresa Strada Vissarion Belinski 71, MD-2064, Chișinău, Republica Moldova. Pentru orice întrebare legată de datele dumneavoastră, ne puteți contacta la admin@vezu.md.',
      },
      {
        heading: 'Ce date colectăm',
        body: 'Colectăm datele pe care ni le furnizați voluntar prin formularul de contact (nume, număr de telefon, mesaj) — acestea sunt transmise direct către un chat Telegram al echipei și nu sunt stocate într-o bază de date pe termen lung. De asemenea, colectăm date tehnice legate de vizita pe site (clicuri pe butonul de apel, verificare anti-bot Cloudflare Turnstile) și, doar după acordul dumneavoastră explicit, date de analiză a traficului (Google Tag Manager / Google Analytics).',
      },
      {
        heading: 'Scopul prelucrării',
        body: 'Datele sunt folosite exclusiv pentru: procesarea și onorarea solicitărilor dumneavoastră de evacuator, comunicarea cu dumneavoastră legat de o cerere trimisă, protejarea site-ului împotriva traficului automatizat/fraudulos și, cu acordul dumneavoastră, măsurarea eficienței campaniilor publicitare.',
      },
      {
        heading: 'Temeiul legal',
        body: 'Prelucrarea datelor din formularul de contact se bazează pe măsuri precontractuale la cererea dumneavoastră (art. 6(1)(b) GDPR). Verificarea anti-bot se bazează pe interesul legitim de a proteja site-ul (art. 6(1)(f) GDPR). Cookie-urile analitice și de marketing se bazează exclusiv pe consimțământul dumneavoastră explicit (art. 6(1)(a) GDPR), exprimat prin bannerul de cookie-uri.',
      },
      {
        heading: 'Partajarea cu terți',
        body: 'Datele pot fi transmise către următorii furnizori de servicii, strict în scopurile menționate mai sus: Telegram (livrarea mesajelor din formular), Google (Tag Manager, Analytics, Ads — doar după consimțământ), Cloudflare (protecție anti-bot și găzduire DNS), Vercel (găzduirea site-ului). Nu vindem și nu închiriem datele dumneavoastră către terți în scopuri de marketing.',
      },
      {
        heading: 'Perioada de stocare',
        body: 'Mesajele din formularul de contact sunt păstrate doar în istoricul chat-ului Telegram folosit pentru comunicare, atât timp cât este necesar pentru soluționarea solicitării. Datele de analiză stocate prin cookie-uri sunt păstrate conform duratei descrise în Politica privind cookie-urile.',
      },
      {
        heading: 'Drepturile dumneavoastră',
        body: 'Aveți dreptul de a solicita accesul la datele dumneavoastră, rectificarea, ștergerea, restricționarea prelucrării, opoziția față de prelucrare, precum și dreptul de a depune o plângere la autoritatea de supraveghere competentă. Pentru exercitarea acestor drepturi, ne puteți contacta la admin@vezu.md.',
      },
      {
        heading: 'Cookie-uri',
        body: 'Pentru detalii despre cookie-urile folosite pe acest site, consultați Politica privind cookie-urile.',
      },
    ],
  },
  cookiePolicy: {
    title: 'Politica privind cookie-urile',
    updated: 'Actualizat: septembrie 2026',
    intro: 'Această pagină explică ce sunt cookie-urile, cum le folosim pe acest site și cum vă puteți schimba alegerea în orice moment.',
    sections: [
      {
        heading: 'Ce sunt cookie-urile',
        body: 'Cookie-urile sunt fișiere text mici stocate în browserul dumneavoastră atunci când vizitați un site. Ele pot fi strict necesare pentru funcționarea site-ului sau opționale (analitice, de marketing).',
      },
      {
        heading: 'Cum folosim cookie-urile',
        body: 'Folosim cookie-uri strict necesare pentru a reține alegerea dumneavoastră privind cookie-urile și pentru protecția anti-bot a site-ului. Cookie-urile opționale (analitice și de marketing, prin Google Tag Manager) sunt activate doar după ce apăsați „Accept toate” în bannerul afișat la prima vizită — până atunci, aceste cookie-uri nu sunt setate.',
      },
      {
        heading: 'Categorii de cookie-uri folosite',
        body: 'Necesare: cookie-consent-v2 (reține alegerea dumneavoastră, 12 luni) — nu necesită consimțământ.\nSecuritate: Cloudflare Turnstile (verificare anti-bot, sesiune) — nu necesită consimțământ, are rol de securitate.\nAnalitice/Marketing: cookie-uri Google (_ga, _gid, _gcl_au și altele similare, prin Google Tag Manager) — active doar după consimțământul dumneavoastră explicit, durata variază între 24 de ore și 2 ani.\nStatistici site: Vercel Analytics — nu folosește cookie-uri.',
      },
      {
        heading: 'Cum vă puteți schimba alegerea',
        body: 'Puteți retrage sau modifica oricând consimțământul acordat, folosind linkul „Setări cookie” din subsolul (footer) site-ului — bannerul de consimțământ va apărea din nou.',
      },
      {
        heading: 'Contact',
        body: 'Pentru întrebări legate de utilizarea cookie-urilor, ne puteți contacta la admin@vezu.md.',
      },
    ],
  },
  nav: {
    langLabel: 'RU',
    langHref: '/ru',
    phone: '+37368988220',
  },
  ui: {
    readMore: 'Citește tot',
    readLess: 'Restrânge',
  },
  form: {
    title: 'Cheamă evacuatorul',
    namePlaceholder: 'Numele tău',
    phonePlaceholder: '+37368988220',
    messagePlaceholder: 'Descrie situația (adresa, marca mașinii...)',
    submit: 'Trimite cererea',
    sending: 'Se trimite...',
    success: 'Cererea a fost trimisă! Vă vom apela în scurt timp.',
    error: 'Eroare la trimitere. Sunați direct: +37368988220',
    nameError: 'Introduceți numele (minim 2 caractere)',
    phoneError: 'Introduceți un număr de telefon valid',
    messageError: 'Descrieți situația (minim 5 caractere)',
  },
};

export default ro;
