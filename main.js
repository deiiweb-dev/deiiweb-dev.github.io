function openCalculator() {
  alert('Мини-калькулятор стоимости появится здесь!');
} 

// --- Квиз-калькулятор ---
const quizModal = document.getElementById('quiz-modal');
const quizStepContainer = document.getElementById('quiz-step-container');
const quizCloseBtn = document.getElementById('quiz-close-btn');
const quizOpenBtn = document.querySelector('.hero__btn');
const quizAuditBtn = document.querySelector('.cta__btn--secondary');

// Структура услуг по блокам
const QUIZ_BLOCKS = [
  {
    key: 'design',
    label: 'Дизайн & Брендинг',
    services: [
      { name: 'Визитки, буклеты, флаеры, баннеры', desc: 'Печать и дизайн полиграфии для любых задач' },
      { name: 'Прайс-листы, бланки, коммерческие предложения, презентации', desc: 'Документы, которые продают' },
      { name: 'Логотипы и Фирменный стиль', desc: 'Создадим уникальный образ и узнаваемый стиль' },
      { name: 'Социальные сети', desc: 'Дизайн, концепция, ведение. Оформление и стратегия для роста' },
      { name: 'Другое', desc: 'Есть запрос на услугу? Мы свяжемся с вами и обсудим детали!' },

    ]
  },
  {
    key: 'web',
    label: 'Разработка Сайтов',
    services: [
      { name: 'Сайт-визитка', desc: 'Лаконичное представление компании' },
      { name: 'Лендинг', desc: 'Продающие одностраничники' },
      { name: 'Корпоративный сайт', desc: 'Многостраничные решения для бизнеса' },
      { name: 'Каталоги и Интернет-магазины', desc: 'Удобные и функциональные' },
      { name: 'Другое', desc: 'Есть запрос на услугу? Мы свяжемся с вами и обсудим детали!' },

    ]
  },
  {
    key: 'it',
    label: 'IT-Услуги & Автоматизация',
    services: [
      { name: 'Настройка компьютеров/сетей. Системное администрирование', desc: 'Бесплатная консультация' },
      { name: 'Разработка ПО, автоматизация рутины', desc: 'Понятные сервисы' },
      { name: 'Другое', desc: 'Есть запрос на услугу? Мы свяжемся с вами и обсудим детали!' },

    ]
  }
];

// --- Иконки для услуг по категориям ---
const SERVICE_ICONS = {
  design: ['🎨','📝','🌟','📱','➕'],
  web: ['🌐','📄','🏢','🛒','➕'],
  it: ['🖥️','🤖','➕']
};

// --- Иконки для способов связи ---
const CONTACT_ICONS = {
  sms: '<img src="image/icons8-messages.gif" class="quiz-contact-logo" alt="СМС">',
  call: '<img src="image/icons8-phone.gif" class="quiz-contact-logo" alt="Звонок">',
  tg: '<img src="image/icons8-telegram.gif" class="quiz-contact-logo" alt="Telegram">',
  vk: '<img src="image/icons8-vk.gif" class="quiz-contact-logo" alt="VK">',
  wa: '<img src="image/icons8-whatsapp.gif" class="quiz-contact-logo" alt="WhatsApp">',
  viber: '<img src="image/icons8-viber.gif" class="quiz-contact-logo" alt="Viber">',
  email: '<img src="image/icons8-email.gif" class="quiz-contact-logo" alt="Email">',
};

// --- Полный список стран с флагами, dial-кодом и маской ---
const ALL_PHONE_COUNTRIES = [
  // СНГ
  { code: 'BY', name: 'Беларусь', flag: '🇧🇾', dial: '+375', mask: '(00) 000-00-00', max: 9 },
  { code: 'RU', name: 'Россия', flag: '🇷🇺', dial: '+7', mask: '(000) 000-00-00', max: 10 },
  { code: 'UA', name: 'Украина', flag: '🇺🇦', dial: '+380', mask: '(00) 000-00-00', max: 9 },
  { code: 'KZ', name: 'Казахстан', flag: '🇰🇿', dial: '+7', mask: '(700) 000-00-00', max: 10 },
  { code: 'UZ', name: 'Узбекистан', flag: '🇺🇿', dial: '+998', mask: '(00) 000-00-00', max: 9 },
  { code: 'KG', name: 'Киргизия', flag: '🇰🇬', dial: '+996', mask: '(000) 000-000', max: 9 },
  { code: 'AM', name: 'Армения', flag: '🇦🇲', dial: '+374', mask: '(00) 000-000', max: 8 },
  { code: 'AZ', name: 'Азербайджан', flag: '🇦🇿', dial: '+994', mask: '(00) 000-00-00', max: 9 },
  { code: 'MD', name: 'Молдова', flag: '🇲🇩', dial: '+373', mask: '(00) 000-000', max: 8 },
  { code: 'TJ', name: 'Таджикистан', flag: '🇹🇯', dial: '+992', mask: '(00) 000-00-00', max: 9 },
  { code: 'TM', name: 'Туркменистан', flag: '🇹🇲', dial: '+993', mask: '(0X) 000000', max: 8 },
  // Европа (пример)
  { code: 'PL', name: 'Польша', flag: '🇵🇱', dial: '+48', mask: '000-000-000', max: 9 },
  { code: 'DE', name: 'Германия', flag: '🇩🇪', dial: '+49', mask: '0000 0000000', max: 11 },
  { code: 'FR', name: 'Франция', flag: '🇫🇷', dial: '+33', mask: '0X XX XX XX XX', max: 9 },
  { code: 'IT', name: 'Италия', flag: '🇮🇹', dial: '+39', mask: '000 000 0000', max: 10 },
  { code: 'ES', name: 'Испания', flag: '🇪🇸', dial: '+34', mask: '000 000 000', max: 9 },
  // ... (можно добавить остальные страны мира по ISO)
];

function getPhoneCountriesSorted() {
  const cngCodes = ['BY','RU','UA','KZ','UZ','KG','AM','AZ','MD','TJ','TM'];
  const cng = ALL_PHONE_COUNTRIES.filter(c=>cngCodes.includes(c.code));
  const rest = ALL_PHONE_COUNTRIES.filter(c=>!cngCodes.includes(c.code)).sort((a,b)=>a.name.localeCompare(b.name));
  return [...cng, ...rest];
}

// --- Маски для imaskjs по странам (обновлено) ---
const IMASK_PHONE = {};
getPhoneCountriesSorted().forEach(c => {
  IMASK_PHONE[c.code] = { mask: c.mask };
});

let quizState = {
  selectedBlocks: [], // [{key, label, services: [индексы]}]
  contactMethod: '',
  contactValue: '',
  phoneCountry: 'BY',
};

function openQuiz() {
  quizModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  quizState = { selectedBlocks: [], contactMethod: '', contactValue: '', phoneCountry: 'BY' };
  renderQuizStep1();
}
function closeQuiz() {
  quizModal.classList.remove('active');
  document.body.style.overflow = '';
}
quizOpenBtn.addEventListener('click', openQuiz);
if (quizAuditBtn) quizAuditBtn.addEventListener('click', function(e) { e.preventDefault(); openQuiz(); });
quizCloseBtn.addEventListener('click', closeQuiz);
quizModal.querySelector('.quiz-modal__backdrop').addEventListener('click', closeQuiz);

// --- Шаг 1: выбор блока ---
function renderQuizStep1() {
  quizStepContainer.innerHTML = `
    <div class="quiz-step-title">Что вас интересует?</div>
    <div class="quiz-options">
      ${QUIZ_BLOCKS.map((b, i) => `<button class="quiz-option-btn" data-block="${b.key}">${b.label}</button>`).join('')}
    </div>
    <button class="quiz-next-btn" id="quiz-step1-next" disabled>Далее</button>
  `;
  let selectedBlock = null;
  const btns = quizStepContainer.querySelectorAll('.quiz-option-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedBlock = btn.getAttribute('data-block');
      quizStepContainer.querySelector('#quiz-step1-next').disabled = false;
    });
  });
  quizStepContainer.querySelector('#quiz-step1-next').addEventListener('click', () => {
    quizState.selectedBlocks = [{ key: selectedBlock, services: [] }];
    renderQuizStep2();
  });
}

// --- Шаг 2: выбор услуг в выбранном блоке ---
function renderQuizStep2() {
  const block = QUIZ_BLOCKS.find(b => b.key === quizState.selectedBlocks[0].key);
  const selected = quizState.selectedBlocks[0].services || [];
  quizStepContainer.innerHTML = `
    <div class="quiz-step-title" style="color:#2563EB;">Выберите интересующие услуги</div>
    <form id="quiz-services-form">
      <div class="quiz-checkbox-list">
        ${block.services.map((s, i) => `
          <label class="quiz-checkbox-label">
            <input type="checkbox" name="service" value="${i}" ${selected.includes(i) ? 'checked' : ''}>
            <span class="quiz-checkbox-custom">
              <svg width="16" height="16" viewBox="0 0 16 16"><polyline points="3,9 7,13 13,4" fill="none" stroke="#fff" stroke-width="2"/></svg>
            </span>
            <span class="quiz-checkbox-service-icon">${SERVICE_ICONS[block.key][i]||''}</span>
            <span>
              <span class="quiz-checkbox-service-name">${s.name}</span>
              <span class="quiz-checkbox-service-desc">${s.desc}</span>
            </span>
          </label>
        `).join('')}
      </div>
      <button type="button" class="quiz-add-block-btn" id="quiz-add-block">Добавить услуги из других категорий</button>
      <button type="submit" class="quiz-next-btn">Далее</button>
    </form>
  `;
  // обработка выбора услуг
  const form = quizStepContainer.querySelector('#quiz-services-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const checked = Array.from(form.elements['service']).filter(cb => cb.checked).map(cb => +cb.value);
    quizState.selectedBlocks[0].services = checked;
    renderQuizStep3();
  });
  // добавить другие блоки
  quizStepContainer.querySelector('#quiz-add-block').addEventListener('click', () => {
    // сохраняем выбранные услуги перед переходом
    const checked = Array.from(form.elements['service']).filter(cb => cb.checked).map(cb => +cb.value);
    quizState.selectedBlocks[0].services = checked;
    renderQuizAddBlock();
  });
}

// --- Добавление других блоков ---
function renderQuizAddBlock() {
  // показываем только те блоки, которых ещё нет
  const used = quizState.selectedBlocks.map(b => b.key);
  const available = QUIZ_BLOCKS.filter(b => !used.includes(b.key));
  quizStepContainer.innerHTML = `
    <div class="quiz-step-title">Добавить услуги из других категорий</div>
    <div class="quiz-options">
      ${available.map(b => `<button class="quiz-option-btn" data-block="${b.key}">${b.label}</button>`).join('')}
    </div>
    <button class="quiz-next-btn" id="quiz-add-block-cancel">Назад</button>
  `;
  quizStepContainer.querySelectorAll('.quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      quizState.selectedBlocks.push({ key: btn.getAttribute('data-block'), services: [] });
      renderQuizMultiBlockServices();
    });
  });
  quizStepContainer.querySelector('#quiz-add-block-cancel').addEventListener('click', renderQuizStep2);
}

// --- Выбор услуг в нескольких блоках ---
function renderQuizMultiBlockServices() {
  quizStepContainer.innerHTML = quizState.selectedBlocks.map((blockSel, idx) => {
    const block = QUIZ_BLOCKS.find(b => b.key === blockSel.key);
    return `
      <div class="quiz-step-title" style="margin-bottom:10px;">${block.label}</div>
      <form class="quiz-multiblock-form" data-block="${block.key}">
        <div class="quiz-checkbox-list">
          ${block.services.map((s, i) => `
            <label class="quiz-checkbox-label">
              <input type="checkbox" name="service" value="${i}" ${blockSel.services && blockSel.services.includes(i) ? 'checked' : ''}>
              <span class="quiz-checkbox-custom">
                <svg width="16" height="16" viewBox="0 0 16 16"><polyline points="3,9 7,13 13,4" fill="none" stroke="#fff" stroke-width="2"/></svg>
              </span>
              <span class="quiz-checkbox-service-icon">${SERVICE_ICONS[block.key][i]||''}</span>
              <span>
                <span class="quiz-checkbox-service-name">${s.name}</span>
                <span class="quiz-checkbox-service-desc">${s.desc}</span>
              </span>
            </label>
          `).join('')}
        </div>
      </form>
    `;
  }).join('') + `
    <button type="button" class="quiz-add-block-btn" id="quiz-add-block">Добавить ещё</button>
    <button type="button" class="quiz-next-btn" id="quiz-multiblock-next">Далее</button>
  `;
  // обработка чекбоксов
  quizStepContainer.querySelectorAll('.quiz-multiblock-form').forEach(form => {
    const blockKey = form.getAttribute('data-block');
    form.addEventListener('change', () => {
      const checked = Array.from(form.elements['service']).filter(cb => cb.checked).map(cb => +cb.value);
      const blockSel = quizState.selectedBlocks.find(b => b.key === blockKey);
      blockSel.services = checked;
    });
  });
  quizStepContainer.querySelector('#quiz-add-block').addEventListener('click', () => {
    // сохраняем все выбранные услуги перед переходом
    quizStepContainer.querySelectorAll('.quiz-multiblock-form').forEach(form => {
      const blockKey = form.getAttribute('data-block');
      const checked = Array.from(form.elements['service']).filter(cb => cb.checked).map(cb => +cb.value);
      const blockSel = quizState.selectedBlocks.find(b => b.key === blockKey);
      blockSel.services = checked;
    });
    renderQuizAddBlock();
  });
  quizStepContainer.querySelector('#quiz-multiblock-next').addEventListener('click', renderQuizStep3);
}

// --- Шаг 3: способ связи ---
function renderQuizStep3() {
  if (!quizState.phoneCountry) quizState.phoneCountry = 'BY';
  quizStepContainer.innerHTML = `
    <div class="quiz-step-title">Как вам удобнее получить ответ?</div>
    <form id="quiz-contact-form">
      <div class="quiz-contact-methods">
        ${[
          {v:'sms',t:'СМС на телефон'},
          {v:'call',t:'Перезвонить'},
          {v:'tg',t:'Написать в Telegram'},
          {v:'vk',t:'Написать в ВК'},
          {v:'wa',t:'Написать в WhatsApp'},
          {v:'viber',t:'Написать в Viber'},
          {v:'email',t:'Прислать на почту'}
        ].map(opt => `
          <label class="quiz-contact-radio">
            <input type="radio" name="contact" value="${opt.v}" ${quizState.contactMethod===opt.v?'checked':''}>
            ${CONTACT_ICONS[opt.v]||''}
            <span>${opt.t}</span>
          </label>
        `).join('')}
      </div>
      <div id="quiz-contact-fields"></div>
      <button type="submit" class="quiz-send-btn">Запросить цену</button>
    </form>
  `;
  // показать поле для ввода только после выбора способа
  const form = quizStepContainer.querySelector('#quiz-contact-form');
  const radios = form.elements['contact'];
  const fields = quizStepContainer.querySelector('#quiz-contact-fields');
  Array.from(radios).forEach(radio => {
    radio.addEventListener('change', () => renderContactFields(radio.value));
    if (radio.checked) renderContactFields(radio.value);
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    quizState.contactMethod = form.elements['contact'].value;
    quizState.contactValue = form.elements['contactValue'] ? form.elements['contactValue'].value : '';
    quizState.contactNick = form.elements['contactNick'] ? form.elements['contactNick'].value : '';
    quizState.phoneCountry = form.elements['phoneCountry'] ? form.elements['phoneCountry'].value : quizState.phoneCountry;
    renderQuizSuccess();
  });
}

function renderContactFields(method) {
  const fields = document.getElementById('quiz-contact-fields');
  if (method === 'sms' || method === 'call') {
    let country = quizState.phoneCountry || 'BY';
    let countryObj = ALL_PHONE_COUNTRIES.find(c=>c.code===country) || ALL_PHONE_COUNTRIES[0];
    const countries = getPhoneCountriesSorted();
    fields.innerHTML = `
      <div class="quiz-contact-fields-row">
        <div class="flag-dropdown" id="flag-dropdown">
          <div class="flag-dropdown__selected" tabindex="0">
            <img src="https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/${country.toLowerCase()}.svg" alt="${country}">
          </div>
          <div class="flag-dropdown__list">
            ${countries.map(c=>`
              <div class="flag-dropdown__item${c.code===country?' selected':''}" data-code="${c.code}">
                <img src="https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/${c.code.toLowerCase()}.svg" alt="${c.code}">
              </div>
            `).join('')}
          </div>
        </div>
        <input type="text" class="quiz-contact-input" value="${countryObj.dial}" readonly tabindex="-1">
        <input type="tel" class="quiz-contact-input phone-mask" name="contactValue" placeholder="${countryObj.mask}" maxlength="20">
      </div>
    `;
    // Кастомный dropdown
    const dropdown = fields.querySelector('#flag-dropdown');
    const selected = dropdown.querySelector('.flag-dropdown__selected');
    const list = dropdown.querySelector('.flag-dropdown__list');
    selected.addEventListener('click', () => {
      dropdown.classList.toggle('open');
      if (dropdown.classList.contains('open')) {
        // автоскролл к выбранному флагу
        const sel = list.querySelector('.flag-dropdown__item.selected');
        if (sel) sel.scrollIntoView({block:'nearest'});
      }
    });
    selected.addEventListener('blur', () => {
      setTimeout(()=>dropdown.classList.remove('open'), 120);
    });
    list.querySelectorAll('.flag-dropdown__item').forEach(item => {
      item.addEventListener('click', () => {
        quizState.phoneCountry = item.getAttribute('data-code');
        dropdown.classList.remove('open');
        renderContactFields(method);
      });
    });
    // IMask
    const input = fields.querySelector('.phone-mask');
    if (window.IMask) {
      IMask(input, IMASK_PHONE[country] || IMASK_PHONE['BY']);
    }
    if (quizState.contactValue && quizState.phoneCountry === country) input.value = quizState.contactValue;
    input.focus();
  } else if (["tg","vk","wa","viber"].includes(method)) {
    fields.innerHTML = `<input type="text" class="quiz-contact-input" name="contactValue" placeholder="Ваш ник или номер" required>` +
      `<input type="text" class="quiz-contact-input" name="contactNick" placeholder="Ваше имя (необязательно)">`;
    if (quizState.contactValue) fields.querySelector('[name="contactValue"]').value = quizState.contactValue;
    if (quizState.contactNick) fields.querySelector('[name="contactNick"]').value = quizState.contactNick;
    fields.querySelector('[name="contactValue"]').focus();
  } else if (method === 'email') {
    fields.innerHTML = `<input type="email" class="quiz-contact-input" name="contactValue" placeholder="Ваш e-mail" required>`;
    if (quizState.contactValue) fields.querySelector('[name="contactValue"]').value = quizState.contactValue;
    fields.querySelector('[name="contactValue"]').focus();
  } else {
    fields.innerHTML = '';
  }
}

// --- Финал: имитация отправки ---
function renderQuizSuccess() {
  // Формируем данные для отправки
  const selectedBlocks = quizState.selectedBlocks.map(blockSel => {
    const block = QUIZ_BLOCKS.find(b => b.key === blockSel.key);
    return {
      category: block ? block.label : blockSel.key,
      services: (blockSel.services || []).map(i => block.services[i]?.name).filter(Boolean)
    };
  });
  const data = {
    categories: selectedBlocks.map(b => b.category).join(', '),
    services: selectedBlocks.map(b => b.services.join('; ')).join(' | '),
    contactMethod: quizState.contactMethod,
    contactValue: quizState.contactValue,
    contactNick: quizState.contactNick || '',
    phoneCountry: quizState.phoneCountry || ''
  };
  fetch('https://formspree.io/f/mjkrpvzp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(r => r.ok ? r.json() : Promise.reject(r))
  .then(() => {
    quizStepContainer.innerHTML = `<div class="quiz-success">Спасибо! Ваш запрос отправлен.<br>Мы свяжемся с вами в ближайшее время.</div>`;
    setTimeout(closeQuiz, 2200);
  })
  .catch(() => {
    quizStepContainer.innerHTML = `<div class="quiz-success" style="color:#f00">Ошибка отправки. Попробуйте позже или напишите нам напрямую.</div>`;
    setTimeout(closeQuiz, 3500);
  });
} 