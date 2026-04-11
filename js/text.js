const SLOT_COUNT = 6;
const EMPTY_LABEL = '';
const EMPTY_ITEM = '';

let canal = '';
let juego = '3ds';

document.addEventListener('DOMContentLoaded', initTextOverlay);

function initTextOverlay() {
  const params = new URLSearchParams(window.location.search);
  canal = (params.get('canal') || '').trim().toLowerCase();
  juego = (params.get('juego') || '3ds').trim().toLowerCase();

  if (!['3ds', 'switch'].includes(juego)) {
    juego = '3ds';
  }

  if (!canal) {
    console.warn('[InfoOverlay] Falta el parámetro ?canal=');
    return;
  }

  applyGameClass();
  buildInfoSlots();
  renderInfoSlots();

  setInterval(renderInfoSlots, 500);
}

function applyGameClass() {
  document.body.classList.remove('game-3ds', 'game-switch');
  document.body.classList.add(`game-${juego}`);
}

function buildInfoSlots() {
  const container = document.getElementById('textOverlay');
  container.innerHTML = '';

  for (let i = 0; i < SLOT_COUNT; i++) {
    const wrapper = document.createElement('div');
    wrapper.className = `info-slot info-slot-${i + 1}`;

    wrapper.innerHTML = `
      <div id="textSlot${i + 1}" class="text-nick text-slot-${i + 1}">${EMPTY_LABEL}</div>
      <img id="itemSlot${i + 1}" class="item-icon item-slot-${i + 1} hidden" src="" alt="Item ${i + 1}">
    `;

    container.appendChild(wrapper);
  }
}

function renderInfoSlots() {
  const texts = loadTexts();
  const items = loadItems();

  for (let i = 0; i < SLOT_COUNT; i++) {
    const textEl = document.getElementById(`textSlot${i + 1}`);
    const itemEl = document.getElementById(`itemSlot${i + 1}`);

    if (textEl) {
      textEl.textContent = texts[i]?.trim() || EMPTY_LABEL;
    }

    if (itemEl) {
      const itemName = items[i]?.trim() || '';

      if (!itemName) {
        itemEl.src = '';
        itemEl.classList.add('hidden');
      } else {
        itemEl.src = `./img/items/${itemName}.png`;
        itemEl.classList.remove('hidden');
      }
    }
  }
}

function loadTexts() {
  try {
    const raw = localStorage.getItem(`pokemon-overlay:${canal}:texts`);
    const parsed = JSON.parse(raw || 'null');

    if (Array.isArray(parsed) && parsed.length === SLOT_COUNT) {
      return parsed;
    }
  } catch (error) {
    console.warn('[InfoOverlay] No se pudieron leer los textos:', error);
  }

  return Array.from({ length: SLOT_COUNT }, () => '');
}

function loadItems() {
  try {
    const raw = localStorage.getItem(`pokemon-overlay:${canal}:items`);
    const parsed = JSON.parse(raw || 'null');

    if (Array.isArray(parsed) && parsed.length === SLOT_COUNT) {
      return parsed;
    }
  } catch (error) {
    console.warn('[InfoOverlay] No se pudieron leer los items:', error);
  }

  return Array.from({ length: SLOT_COUNT }, () => '');
}