(function () {
  var STORAGE_KEY = 'resume-lang';
  var LANGS = ['uk', 'ru', 'en'];
  var PDF_FILES = {
    uk: 'Pavel-Prohnov-CV-UA.pdf',
    ru: 'Pavel-Prohnov-CV-RU.pdf',
    en: 'Pavel-Prohnov-CV-EN.pdf'
  };

  var t = {
    en: {
      pageTitle: 'Pavel Prohnov — Full Stack Developer',
      name: 'Pavel Prohnov',
      profession: 'Full Stack Developer | AI &amp; Automation',
      description:
        'Full Stack Developer with commercial experience since 2020. I build single-page and multi-page web ' +
        'applications, Telegram bots and automation scripts, and work closely with designers and other teams on ' +
        'integration, documentation and delivery of real projects. I actively use AI tools (ChatGPT, Grok, ' +
        'Claude Code) in development, create AI-generated video and content (Higgsfield), and have experience in ' +
        'traffic arbitrage and promotion on YouTube, TikTok and Facebook. English level: B1.',
      country: 'Ukraine',

      pdf: 'Download PDF',

      'contacts.title': 'Contacts',
      'contacts.phone': 'Phone:',
      'contacts.email': 'Email:',
      'contacts.linkedinLink': 'View profile',
      'contacts.city': 'City:',
      'contacts.cityValue': 'Kyiv, Ukraine',

      'tech.title': 'Tech Skills',

      'ai.title': 'AI &amp; Automation',
      'ai.prompt': 'Prompt engineering',
      'ai.video': 'AI video &amp; content generation (Higgsfield)',
      'ai.bots': 'Telegram Bot API: aiogram (Python)',
      'ai.api': 'AI integration via API (Anthropic)',
      'ai.automation': 'Workflow automation',

      'soft.title': 'Soft Skills',
      'soft.teamwork': 'Teamwork',
      'work.title': 'Work experience',

      'jobFs.title': 'Full Stack Developer',
      'jobFs.period': '2021 - Present',
      'jobFs.d1': 'Development of single-page and multi-page web applications (front-end and back-end) with React, Next.js, TypeScript, Node.js and MySQL.',
      'jobFs.d2': 'Development of Telegram bots for business tasks (Python, aiogram), including AI integration via the Anthropic API.',
      'jobFs.d3': 'Writing scripts to automate business processes and routine tasks; REST API integrations and deployment with Docker.',
      'jobFs.d4': 'Project details are covered by a non-disclosure agreement.',

      'jobTraffic.title': 'Traffic Arbitrage',
      'jobTraffic.period': 'Alongside main work',
      'jobTraffic.d2': 'Driving organic (shareware / UBT) traffic through YouTube, TikTok and Facebook.',
      'jobTraffic.d3': 'Creating and promoting video content, including AI-generated video.',
      'jobTraffic.d4': 'Testing creatives and analysing campaign performance.',

      'jobAspirin.period': 'February 2021 - December 2021',
      'jobAspirin.d1': 'Creating modular, responsive sites and apps using modern CSS techniques and JavaScript libraries.',
      'jobAspirin.d2': 'Collaborating with designers to ensure designs were efficient and technically sound.',
      'jobAspirin.d3': 'Implementing a mobile-first approach to existing websites.',
      'jobAspirin.d4': 'Development of corporate websites.',
      'jobAspirin.d5': 'Working with other teams.',

      'jobFreelance.company': 'Freelance',
      'jobFreelance.period': 'August 2020 - February 2021',
      'jobFreelance.d1': 'Development of Single-Page Applications.',
      'jobFreelance.d2': 'Development of corporate websites.',
      'jobFreelance.d3': 'Development of sites using ready-made WordPress themes.',
      'jobFreelance.d4': 'Refinement of functionality on existing projects.',
      'jobFreelance.d5': 'Publishing content of the websites.',

      'jobHvac.title': 'HVAC design engineer',
      'jobHvac.period': 'January 2018 - May 2020',
      'jobHvac.d1': 'Engineering calculations of heating, ventilation and air-conditioning systems.',
      'jobHvac.d2': 'Preparation of project documentation and equipment specifications, coordination with related teams and contractors.',

      'edu.title': 'Education',
      'edu.uni': 'National University of Food Technologies',
      'edu.uniSpec': '"Power Machinery"',
      'edu.uniPeriod': 'September 2015 - June 2018',
      'edu.college': 'College of Restaurant Economy',
      'edu.collegeSpec': '"Mechanic"',
      'edu.collegePeriod': 'September 2012 - June 2015',
      'edu.goit': 'GoIT (course)',
      'edu.goitSpec': 'Full Stack Developer',
      'edu.goitPeriod': 'March 2021'
    },

    uk: {
      pageTitle: 'Павло Прохнов — Full Stack розробник',
      name: 'Павло Прохнов',
      profession: 'Full Stack розробник | ШІ та автоматизація',
      description:
        'Full Stack розробник з комерційним досвідом з 2020 року. Створюю односторінкові та багатосторінкові ' +
        'вебзастосунки, Telegram-ботів і скрипти автоматизації, тісно співпрацюю з дизайнерами та іншими командами ' +
        'над інтеграцією, документацією та запуском реальних проєктів. Активно використовую ШІ-інструменти ' +
        '(ChatGPT, Grok, Claude Code) у розробці, створюю ШІ-відео та контент (Higgsfield), маю досвід в ' +
        'арбітражі трафіку та просуванні через YouTube, TikTok і Facebook. Рівень англійської: B1.',
      country: 'Україна',

      pdf: 'Завантажити PDF',

      'contacts.title': 'Контакти',
      'contacts.phone': 'Телефон:',
      'contacts.email': 'Пошта:',
      'contacts.linkedinLink': 'Перейти до профілю',
      'contacts.city': 'Місто:',
      'contacts.cityValue': 'Київ, Україна',

      'tech.title': 'Технічні навички',

      'ai.title': 'ШІ та автоматизація',
      'ai.prompt': 'Промпт-інжиніринг',
      'ai.video': 'Генерація ШІ-відео та контенту (Higgsfield)',
      'ai.bots': 'Telegram Bot API: aiogram (Python)',
      'ai.api': 'Інтеграція ШІ через API (Anthropic)',
      'ai.automation': 'Автоматизація процесів',

      'soft.title': 'Soft Skills',
      'soft.teamwork': 'Командна робота',
      'work.title': 'Досвід роботи',

      'jobFs.title': 'Full Stack розробник',
      'jobFs.period': '2021 - дотепер',
      'jobFs.d1': 'Розробка односторінкових і багатосторінкових вебзастосунків (front-end і back-end) на React, Next.js, TypeScript, Node.js і MySQL.',
      'jobFs.d2': 'Розробка Telegram-ботів для бізнес-задач (Python, aiogram), зокрема з інтеграцією ШІ через Anthropic API.',
      'jobFs.d3': 'Написання скриптів для автоматизації бізнес-процесів і рутинних задач; інтеграції через REST API та розгортання в Docker.',
      'jobFs.d4': 'Деталі проєктів захищені угодою про нерозголошення.',

      'jobTraffic.title': 'Арбітраж трафіку',
      'jobTraffic.period': 'Паралельно з основною роботою',
      'jobTraffic.d2': 'Залучення умовно-безкоштовного трафіку (УБТ) через YouTube, TikTok і Facebook.',
      'jobTraffic.d3': 'Створення та просування відеоконтенту, зокрема згенерованого ШІ.',
      'jobTraffic.d4': 'Тестування креативів і аналіз ефективності кампаній.',

      'jobAspirin.period': 'Лютий 2021 - Грудень 2021',
      'jobAspirin.d1': 'Створення модульних адаптивних сайтів і застосунків із сучасними CSS-техніками та JavaScript-бібліотеками.',
      'jobAspirin.d2': 'Співпраця з дизайнерами, щоб макети були ефективними та технічно реалізовними.',
      'jobAspirin.d3': 'Впровадження підходу mobile-first на існуючих сайтах.',
      'jobAspirin.d4': 'Розробка корпоративних сайтів.',
      'jobAspirin.d5': 'Взаємодія з іншими командами.',

      'jobFreelance.company': 'Фриланс',
      'jobFreelance.period': 'Серпень 2020 - Лютий 2021',
      'jobFreelance.d1': 'Розробка односторінкових застосунків (SPA).',
      'jobFreelance.d2': 'Розробка корпоративних сайтів.',
      'jobFreelance.d3': 'Розробка сайтів на готових темах WordPress.',
      'jobFreelance.d4': 'Доопрацювання функціоналу на існуючих проєктах.',
      'jobFreelance.d5': 'Наповнення сайтів контентом.',

      'jobHvac.title': 'Інженер-проєктувальник ОВіК',
      'jobHvac.period': 'Січень 2018 - Травень 2020',
      'jobHvac.d1': 'Інженерні розрахунки систем опалення, вентиляції та кондиціювання.',
      'jobHvac.d2': 'Підготовка проєктної документації та специфікацій обладнання, координація із суміжниками та підрядниками.',

      'edu.title': 'Освіта',
      'edu.uni': 'Національний університет харчових технологій',
      'edu.uniSpec': '«Енергетичне машинобудування»',
      'edu.uniPeriod': 'Вересень 2015 - Червень 2018',
      'edu.college': 'Коледж ресторанного господарства',
      'edu.collegeSpec': '«Механік»',
      'edu.collegePeriod': 'Вересень 2012 - Червень 2015',
      'edu.goit': 'GoIT (курс)',
      'edu.goitSpec': 'Full Stack розробник',
      'edu.goitPeriod': 'Березень 2021'
    },

    ru: {
      pageTitle: 'Павел Прохнов — Full Stack разработчик',
      name: 'Павел Прохнов',
      profession: 'Full Stack разработчик | ИИ и автоматизация',
      description:
        'Full Stack разработчик с коммерческим опытом с 2020 года. Создаю одностраничные и многостраничные ' +
        'веб-приложения, Telegram-ботов и скрипты автоматизации, тесно работаю с дизайнерами и другими командами ' +
        'над интеграцией, документацией и запуском реальных проектов. Активно использую ИИ-инструменты ' +
        '(ChatGPT, Grok, Claude Code) в разработке, создаю ИИ-видео и контент (Higgsfield), имею опыт в ' +
        'арбитраже трафика и продвижении через YouTube, TikTok и Facebook. Уровень английского: B1.',
      country: 'Украина',

      pdf: 'Скачать PDF',

      'contacts.title': 'Контакты',
      'contacts.phone': 'Телефон:',
      'contacts.email': 'Почта:',
      'contacts.linkedinLink': 'Перейти в профиль',
      'contacts.city': 'Город:',
      'contacts.cityValue': 'Киев, Украина',

      'tech.title': 'Технические навыки',

      'ai.title': 'ИИ и автоматизация',
      'ai.prompt': 'Промпт-инжиниринг',
      'ai.video': 'Генерация ИИ-видео и контента (Higgsfield)',
      'ai.bots': 'Telegram Bot API: aiogram (Python)',
      'ai.api': 'Интеграция ИИ через API (Anthropic)',
      'ai.automation': 'Автоматизация процессов',

      'soft.title': 'Soft Skills',
      'soft.teamwork': 'Командная работа',
      'work.title': 'Опыт работы',

      'jobFs.title': 'Full Stack разработчик',
      'jobFs.period': '2021 - по настоящее время',
      'jobFs.d1': 'Разработка одностраничных и многостраничных веб-приложений (front-end и back-end) на React, Next.js, TypeScript, Node.js и MySQL.',
      'jobFs.d2': 'Разработка Telegram-ботов для бизнес-задач (Python, aiogram), в том числе с интеграцией ИИ через Anthropic API.',
      'jobFs.d3': 'Написание скриптов для автоматизации бизнес-процессов и рутинных задач; интеграции через REST API и развёртывание в Docker.',
      'jobFs.d4': 'Детали проектов защищены соглашением о неразглашении.',

      'jobTraffic.title': 'Арбитраж трафика',
      'jobTraffic.period': 'Параллельно с основной работой',
      'jobTraffic.d2': 'Привлечение условно-бесплатного трафика (УБТ) через YouTube, TikTok и Facebook.',
      'jobTraffic.d3': 'Создание и продвижение видеоконтента, в том числе сгенерированного ИИ.',
      'jobTraffic.d4': 'Тестирование креативов и анализ эффективности кампаний.',

      'jobAspirin.period': 'Февраль 2021 - Декабрь 2021',
      'jobAspirin.d1': 'Создание модульных адаптивных сайтов и приложений с современными CSS-техниками и JavaScript-библиотеками.',
      'jobAspirin.d2': 'Работа с дизайнерами, чтобы макеты были эффективными и технически реализуемыми.',
      'jobAspirin.d3': 'Внедрение подхода mobile-first на существующих сайтах.',
      'jobAspirin.d4': 'Разработка корпоративных сайтов.',
      'jobAspirin.d5': 'Взаимодействие с другими командами.',

      'jobFreelance.company': 'Фриланс',
      'jobFreelance.period': 'Август 2020 - Февраль 2021',
      'jobFreelance.d1': 'Разработка одностраничных приложений (SPA).',
      'jobFreelance.d2': 'Разработка корпоративных сайтов.',
      'jobFreelance.d3': 'Разработка сайтов на готовых темах WordPress.',
      'jobFreelance.d4': 'Доработка функционала на существующих проектах.',
      'jobFreelance.d5': 'Наполнение сайтов контентом.',

      'jobHvac.title': 'Инженер-проектировщик ОВиК',
      'jobHvac.period': 'Январь 2018 - Май 2020',
      'jobHvac.d1': 'Инженерные расчёты систем отопления, вентиляции и кондиционирования.',
      'jobHvac.d2': 'Подготовка проектной документации и спецификаций оборудования, координация со смежниками и подрядчиками.',

      'edu.title': 'Образование',
      'edu.uni': 'Национальный университет пищевых технологий',
      'edu.uniSpec': '«Энергетическое машиностроение»',
      'edu.uniPeriod': 'Сентябрь 2015 - Июнь 2018',
      'edu.college': 'Колледж ресторанного хозяйства',
      'edu.collegeSpec': '«Механик»',
      'edu.collegePeriod': 'Сентябрь 2012 - Июнь 2015',
      'edu.goit': 'GoIT (курс)',
      'edu.goitSpec': 'Full Stack разработчик',
      'edu.goitPeriod': 'Март 2021'
    }
  };

  function getSaved() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return LANGS.indexOf(v) !== -1 ? v : null;
    } catch (e) {
      return null;
    }
  }

  function save(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function detectBrowser() {
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).toLowerCase().slice(0, 2);
      if (code === 'uk' || code === 'ua') return 'uk';
      if (code === 'ru') return 'ru';
      if (code === 'en') return 'en';
    }
    return 'en';
  }

  function apply(lang) {
    var dict = t[lang];
    document.documentElement.lang = lang;
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.alt = dict[el.getAttribute('data-i18n-alt')] || '';
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    var pdfLink = document.querySelector('.pdf-btn');
    if (pdfLink) {
      var file = PDF_FILES[lang];
      pdfLink.href = 'pdf/' + file;
      pdfLink.setAttribute('download', file);
    }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      save(lang);
      apply(lang);
    });
  });

  // ?lang=uk|ru|en forces a language without saving it (used to build the PDFs)
  function getFromUrl() {
    var m = /[?&]lang=(uk|ru|en)(?:&|$)/.exec(location.search);
    return m ? m[1] : null;
  }

  apply(getFromUrl() || getSaved() || detectBrowser());
})();
