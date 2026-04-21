const SLOT_COUNT = 6;
const DEFAULT_COMMAND_PREFIX = 'poke';
const DEFAULT_DEATH_COMMAND = 'muertes';
const DEFAULT_OVERLAY = '1';

const EMPTY_IMAGE = './img/egg.png';

const CLEAR_COMMANDS = ['pokel', 'pokelimpiar'];

const ALIVE_EMOTIONS = ['Joyous', 'Happy', 'Normal'];
const DEAD_EMOTIONS = ['Dizzy', 'Crying', 'Normal'];

const portraitExistsCache = new Map();
const portraitChoiceCache = new Map();

const PMD_BASE_URL = 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait';

const SHINY_FLAG_TOKENS = new Set(['-shiny', 'shiny']);
const MEGA_FLAG_TOKENS = new Set(['-mega', 'mega']);

const TEXT_COMMAND_PREFIX = 'texto';
const ITEM_COMMAND_PREFIX = 'item';
const SLOT_COMMAND_PREFIX = 'slot';

const OVERLAY_CONFIGS = {
  '1': {
    bodyClass: 'layout-right-cam',
    overlaySrc: './img/overlays/Overlay1.png',
  },
  '1-nocam': {
    bodyClass: 'layout-right-nocam',
    overlaySrc: './img/overlays/Overlay1-nocam.png',
  },
  '2': {
    bodyClass: 'layout-left-cam',
    overlaySrc: './img/overlays/Overlay2.png',
  },
  '2-nocam': {
    bodyClass: 'layout-left-nocam',
    overlaySrc: './img/overlays/Overlay2-nocam.png',
  },
};

const REGION_FLAG_ALIASES = {
  '-alola': 'alola',
  'alola': 'alola',
  '-alolan': 'alola',
  'alolan': 'alola',

  '-galar': 'galar',
  'galar': 'galar',
  '-galarian': 'galar',
  'galarian': 'galar',

  '-hisui': 'hisui',
  'hisui': 'hisui',
  '-hisuian': 'hisui',
  'hisuian': 'hisui',
};

const REGIONAL_FORM_SLOTS = {
  rattata: { alola: '0001' },
  raticate: { alola: '0001' },
  raichu: { alola: '0001' },
  sandshrew: { alola: '0001' },
  sandslash: { alola: '0001' },
  vulpix: { alola: '0001' },
  ninetales: { alola: '0001' },
  diglett: { alola: '0001' },
  dugtrio: { alola: '0001' },
  meowth: { alola: '0001', galar: '0002' },
  persian: { alola: '0001' },
  geodude: { alola: '0001' },
  graveler: { alola: '0001' },
  golem: { alola: '0001' },
  grimer: { alola: '0001' },
  muk: { alola: '0001' },
  exeggutor: { alola: '0001' },
  marowak: { alola: '0001' },

  ponyta: { galar: '0001' },
  rapidash: { galar: '0001' },
  slowpoke: { galar: '0001' },
  slowbro: { galar: '0001' },
  farfetchd: { galar: '0001' },
  "farfetch'd": { galar: '0001' },
  weezing: { galar: '0001' },
  'mr-mime': { galar: '0001' },
  articuno: { galar: '0001' },
  zapdos: { galar: '0001' },
  moltres: { galar: '0001' },
  slowking: { galar: '0001' },
  corsola: { galar: '0001' },
  zigzagoon: { galar: '0001' },
  linoone: { galar: '0001' },
  darumaka: { galar: '0001' },
  darmanitan: { galar: '0001' },
  yamask: { galar: '0001' },
  stunfisk: { galar: '0001' },

  growlithe: { hisui: '0001' },
  arcanine: { hisui: '0001' },
  voltorb: { hisui: '0001' },
  electrode: { hisui: '0001' },
  typhlosion: { hisui: '0001' },
  qwilfish: { hisui: '0001' },
  sneasel: { hisui: '0001' },
  samurott: { hisui: '0001' },
  lilligant: { hisui: '0001' },
  zorua: { hisui: '0001' },
  zoroark: { hisui: '0001' },
  braviary: { hisui: '0001' },
  sliggoo: { hisui: '0001' },
  goodra: { hisui: '0001' },
  avalugg: { hisui: '0001' },
  decidueye: { hisui: '0001' },
};

const SPECIAL_FORM_FLAG_ALIASES = {
  '-therian': 'therian',
  'therian': 'therian',

  '-resolute': 'resolute',
  'resolute': 'resolute',

  '-heat': 'heat',
  'heat': 'heat',
  'horno': 'heat',
  '-horno': 'heat',

  '-wash': 'wash',
  'wash': 'wash',
  'lavadora': 'wash',
  '-lavadora': 'wash',

  '-frost': 'frost',
  'frost': 'frost',
  'refrigerador': 'frost',
  '-refrigerador': 'frost',

  '-fan': 'fan',
  'fan': 'fan',
  'ventilador': 'fan',
  '-ventilador': 'fan',

  '-mow': 'mow',
  'mow': 'mow',
  'podadora': 'mow',
  '-podadora': 'mow',

  '-blade': 'blade',
  'blade': 'blade',
  '-sword': 'blade',
  'sword': 'blade',
  'espada': 'blade',
  '-espada': 'blade',

  '-sky': 'sky',
  'sky': 'sky',
  '-cielo': 'sky',
  'cielo': 'sky',
  
  '-mega-x': 'mega-x',
  'mega-x': 'mega-x',
  '-megax': 'mega-x',
  'megax': 'mega-x',

  '-mega-y': 'mega-y',
  'mega-y': 'mega-y',
  '-megay': 'mega-y',
  'megay': 'mega-y',
  
    '-female': 'female',
  'female': 'female',
  '-hembra': 'female',
  'hembra': 'female',

  '-male': 'male',
  'male': 'male',
  '-macho': 'male',
  'macho': 'male',
  
  '-paldea': 'paldea',
  'paldea': 'paldea',

  '-fuego': 'paldea-fire',
  'fuego': 'paldea-fire',
  '-fire': 'paldea-fire',
  'fire': 'paldea-fire',
  '-paldea-fuego': 'paldea-fire',
  'paldea-fuego': 'paldea-fire',
  '-paldea-fire': 'paldea-fire',
  'paldea-fire': 'paldea-fire',

  '-agua': 'paldea-water',
  'agua': 'paldea-water',
  '-water': 'paldea-water',
  'water': 'paldea-water',
  '-paldea-agua': 'paldea-water',
  'paldea-agua': 'paldea-water',
  '-paldea-water': 'paldea-water',
  'paldea-water': 'paldea-water',
};

const BASE_IDENTIFIER_ALIASES = {
  tornadus: 'tornadus-incarnate',
  thundurus: 'thundurus-incarnate',
  landorus: 'landorus-incarnate',
  keldeo: 'keldeo-ordinary',
  shaymin: 'shaymin-land',
  aegislash: 'aegislash-shield',
  basculegion: 'basculegion-male',
};

const IDENTIFIER_FORM_ALIASES = {
  'tornadus-therian': { apiIdentifier: 'tornadus-incarnate', specialForm: 'therian' },
  'thundurus-therian': { apiIdentifier: 'thundurus-incarnate', specialForm: 'therian' },
  'landorus-therian': { apiIdentifier: 'landorus-incarnate', specialForm: 'therian' },

  'keldeo-resolute': { apiIdentifier: 'keldeo-ordinary', specialForm: 'resolute' },

  'rotom-heat': { apiIdentifier: 'rotom', specialForm: 'heat' },
  'rotom-wash': { apiIdentifier: 'rotom', specialForm: 'wash' },
  'rotom-frost': { apiIdentifier: 'rotom', specialForm: 'frost' },
  'rotom-fan': { apiIdentifier: 'rotom', specialForm: 'fan' },
  'rotom-mow': { apiIdentifier: 'rotom', specialForm: 'mow' },
  
  'rotom-horno': { apiIdentifier: 'rotom', specialForm: 'heat' },
  'rotom-lavadora': { apiIdentifier: 'rotom', specialForm: 'wash' },
  'rotom-refrigerador': { apiIdentifier: 'rotom', specialForm: 'frost' },
  'rotom-ventilador': { apiIdentifier: 'rotom', specialForm: 'fan' },
  'rotom-podadora': { apiIdentifier: 'rotom', specialForm: 'mow' },

  'aegislash-blade': { apiIdentifier: 'aegislash-shield', specialForm: 'blade' },

  'shaymin-sky': { apiIdentifier: 'shaymin-land', specialForm: 'sky' },
  
  'charizard-mega-x': { apiIdentifier: 'charizard', specialForm: 'mega-x' },
  'charizard-mega-y': { apiIdentifier: 'charizard', specialForm: 'mega-y' },

  'mewtwo-mega-x': { apiIdentifier: 'mewtwo', specialForm: 'mega-x' },
  'mewtwo-mega-y': { apiIdentifier: 'mewtwo', specialForm: 'mega-y' },
  
  'basculegion-female': { apiIdentifier: 'basculegion-male', specialForm: 'female' },
  'basculegion-hembra': { apiIdentifier: 'basculegion-male', specialForm: 'female' },

  'basculegion-male': { apiIdentifier: 'basculegion-male', specialForm: 'male' },
  'basculegion-macho': { apiIdentifier: 'basculegion-male', specialForm: 'male' },
  
   'tauros-paldea': { apiIdentifier: 'tauros', specialForm: 'paldea' },

  'tauros-paldea-fuego': { apiIdentifier: 'tauros', specialForm: 'paldea-fire' },
  'tauros-paldea-fire': { apiIdentifier: 'tauros', specialForm: 'paldea-fire' },

  'tauros-paldea-agua': { apiIdentifier: 'tauros', specialForm: 'paldea-water' },
  'tauros-paldea-water': { apiIdentifier: 'tauros', specialForm: 'paldea-water' },
};

const SPECIAL_FORM_SLOTS = {
  'tornadus-incarnate': { therian: '0001' },
  'thundurus-incarnate': { therian: '0001' },
  'landorus-incarnate': { therian: '0001' },

  'keldeo-ordinary': { resolute: '0001' },

  rotom: {
    heat: '0001',
    wash: '0002',
    frost: '0003',
    fan: '0004',
    mow: '0005',
  },

  'aegislash-shield': { blade: '0001' },

  'shaymin-land': { sky: '0001' },
  
  charizard: {
    'mega-x': '0001',
    'mega-y': '0002',
  },

  mewtwo: {
    'mega-y': '0001',
    'mega-x': '0002',
  },
  
  'basculegion-male': {
	  male: {
		path: '',
		shinyPath: '',
	  },
	  female: {
		path: '0000/0000/0002',
		shinyPath: '0000/0001/0002',
	  },
	},
  tauros: {
    paldea: '0001',
    'paldea-fire': '0002',
    'paldea-water': '0003',
  },
};

const SPECIAL_FORM_DISPLAY = {
  therian: 'Therian',
  resolute: 'Resolute',
  heat: 'Heat',
  wash: 'Wash',
  frost: 'Frost',
  fan: 'Fan',
  mow: 'Mow',
  blade: 'Blade',
  sky: 'Sky',

  'mega-x': 'Mega X',
  'mega-y': 'Mega Y',

  male: 'Male',
  female: 'Female',

  paldea: 'Paldea',
  'paldea-fire': 'Paldea Fuego',
  'paldea-water': 'Paldea Agua',
};

let canal = '';
let overlay = DEFAULT_OVERLAY;
let commandPrefix = DEFAULT_COMMAND_PREFIX;
let deathCommand = DEFAULT_DEATH_COMMAND;

let team = Array.from({ length: SLOT_COUNT }, () => null);
let death = 0;

let texts = Array.from({ length: SLOT_COUNT }, () => '');
let items = Array.from({ length: SLOT_COUNT }, () => '');

document.addEventListener('DOMContentLoaded', init);

function init() {
  buildSlots();
  buildItemSlots();

  const params = new URLSearchParams(window.location.search);

  canal = normalizeChannel(params.get('canal'));
  overlay = normalizeOverlay(params.get('overlay') || params.get('layout'));

  const comandoParam = (params.get('comando') || '').trim().toLowerCase();
  const deathParam = (params.get('deathCommand') || '').trim().toLowerCase();

  if (comandoParam) commandPrefix = comandoParam;
  if (deathParam) deathCommand = deathParam;

  applyOverlayClass();
  applyOverlayImage();

  if (!canal) {
    showError('Falta el parámetro ?canal=. Ejemplo: ?canal=maikikii');
    return;
  }

  loadState();
  loadTexts();
  loadItems();
  renderAll();
  connectToChat();
}

function normalizeOverlay(value) {
  const normalized = String(value || '')
    .trim()
    .toLowerCase();

  if (OVERLAY_CONFIGS[normalized]) {
    return normalized;
  }

  return DEFAULT_OVERLAY;
}

function applyOverlayClass() {
  document.body.classList.remove(...Object.values(OVERLAY_CONFIGS).map(config => config.bodyClass));
  document.body.classList.add(OVERLAY_CONFIGS[overlay].bodyClass);
}

function applyOverlayImage() {
  const overlayImage = document.getElementById('overlayImage');
  if (!overlayImage) return;

  overlayImage.src = OVERLAY_CONFIGS[overlay].overlaySrc;
  overlayImage.classList.remove('hidden');
}

function buildSlots() {
  const teamContainer = document.getElementById('team');
  teamContainer.innerHTML = '';

  for (let i = 0; i < SLOT_COUNT; i++) {
    const slot = document.createElement('div');
    slot.className = `slot slot-${i + 1}`;

    slot.innerHTML = `
      <div class="slot-clip">
        <img
          id="pk${i + 1}"
          class="portrait egg"
          src="${EMPTY_IMAGE}"
          alt="Pokémon ${i + 1}"
        />
      </div>
    `;

    teamContainer.appendChild(slot);
  }
}

function buildItemSlots() {
  const itemsLayer = document.getElementById('itemsLayer');
  itemsLayer.innerHTML = '';

  for (let i = 0; i < SLOT_COUNT; i++) {
    const item = document.createElement('img');
    item.id = `item${i + 1}`;
    item.className = `item-icon item-slot-${i + 1} hidden`;
    item.src = '';
    item.alt = `Item ${i + 1}`;
    itemsLayer.appendChild(item);
  }
}

function connectToChat() {
  if (!window.ComfyJS) {
    showError('No se pudo cargar ComfyJS.');
    return;
  }

  ComfyJS.onCommand = async (user, command, message, flags, extra) => {
    const normalizedCommand = (command || '').toLowerCase();
    const channelFromEvent = normalizeChannel(extra?.channel);

    if (!flags?.broadcaster && !flags?.mod) return;
    if (channelFromEvent !== canal) return;

    if (isClearCommand(normalizedCommand)) {
      handleClearCommand(message);
      return;
    }

    const slotIndex = getSlotCommands().indexOf(normalizedCommand);
    if (slotIndex !== -1) {
      await handleSlotCommand(slotIndex, message);
      return;
    }

    const pokeIndex = getCommands().indexOf(normalizedCommand);
    if (pokeIndex !== -1) {
      await handlePokemonCommand(pokeIndex, message);
      return;
    }

    const textIndex = getTextCommands().indexOf(normalizedCommand);
    if (textIndex !== -1) {
      handleTextCommand(textIndex, message);
      return;
    }

    const itemIndex = getItemCommands().indexOf(normalizedCommand);
    if (itemIndex !== -1) {
      handleItemCommand(itemIndex, message);
      return;
    }

    if (normalizedCommand === deathCommand) {
      handleDeathCommand(message);
    }
  };

  ComfyJS.Init(canal);
  console.log(`[Overlay] Escuchando comandos en #${canal} con overlay "${overlay}"`);
}

function getCommands() {
  return Array.from({ length: SLOT_COUNT }, (_, i) => `${commandPrefix}${i + 1}`);
}

function getSlotCommands() {
  return Array.from({ length: SLOT_COUNT }, (_, i) => `${SLOT_COMMAND_PREFIX}${i + 1}`);
}

function getTextCommands() {
  return Array.from({ length: SLOT_COUNT }, (_, i) => `${TEXT_COMMAND_PREFIX}${i + 1}`);
}

function getItemCommands() {
  return Array.from({ length: SLOT_COUNT }, (_, i) => `${ITEM_COMMAND_PREFIX}${i + 1}`);
}

function getTextsStorageKey() {
  return `pokemon-overlay:${canal}:texts`;
}

function getItemsStorageKey() {
  return `pokemon-overlay:${canal}:items`;
}

function saveTexts() {
  localStorage.setItem(getTextsStorageKey(), JSON.stringify(texts));
}

function saveItems() {
  localStorage.setItem(getItemsStorageKey(), JSON.stringify(items));
}

function loadTexts() {
  try {
    const savedTexts = JSON.parse(localStorage.getItem(getTextsStorageKey()) || 'null');

    if (Array.isArray(savedTexts) && savedTexts.length === SLOT_COUNT) {
      texts = savedTexts;
    }
  } catch (error) {
    console.warn('[Overlay] No se pudieron cargar los textos:', error);
  }
}

function loadItems() {
  try {
    const savedItems = JSON.parse(localStorage.getItem(getItemsStorageKey()) || 'null');

    if (Array.isArray(savedItems) && savedItems.length === SLOT_COUNT) {
      items = savedItems;
    }
  } catch (error) {
    console.warn('[Overlay] No se pudieron cargar los items:', error);
  }
}

function handleTextCommand(index, rawMessage) {
  texts[index] = String(rawMessage || '').trim();
  saveTexts();
}

function handleItemCommand(index, rawMessage) {
  const message = String(rawMessage || '').trim();

  if (!message) {
    items[index] = '';
    saveItems();
    renderItem(index);
    return;
  }

  const resolvedItem = resolveItemAlias(message);

  if (!resolvedItem) {
    console.warn(`[Overlay] Item no reconocido: ${message}`);
    return;
  }

  items[index] = resolvedItem;
  saveItems();
  renderItem(index);
}

function parseSlotCommandMessage(rawMessage) {
  const message = String(rawMessage || '').trim();

  const parts = message
    .split(/\s*[|/;]\s*/)
    .map(part => part.trim())
    .filter(Boolean);

  if (parts.length === 0) {
    return {
      pokemon: '',
      text: '',
      item: '',
    };
  }

  if (parts.length === 1) {
    return {
      pokemon: parts[0],
      text: '',
      item: '',
    };
  }

  if (parts.length === 2) {
    return {
      pokemon: parts[0],
      text: '',
      item: parts[1],
    };
  }

  return {
    pokemon: parts[0] || '',
    text: parts[1] || '',
    item: parts[2] || '',
  };
}

function parsePokemonMessage(rawMessage) {
  const parts = String(rawMessage || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const identifier = (parts.shift() || '').toLowerCase();

  const flags = {
    shiny: false,
    mega: false,
    region: null,
    specialForm: null,
  };

  const nicknameParts = [];

  for (const part of parts) {
    const normalized = part.toLowerCase();

    if (SHINY_FLAG_TOKENS.has(normalized)) {
      flags.shiny = true;
      continue;
    }

    if (MEGA_FLAG_TOKENS.has(normalized)) {
      flags.mega = true;
      continue;
    }

    if (REGION_FLAG_ALIASES[normalized]) {
      flags.region = REGION_FLAG_ALIASES[normalized];
      continue;
    }

    if (SPECIAL_FORM_FLAG_ALIASES[normalized]) {
      const incomingForm = SPECIAL_FORM_FLAG_ALIASES[normalized];
      flags.specialForm = mergeSpecialForms(flags.specialForm, incomingForm);
      continue;
    }

    nicknameParts.push(part);
  }

  return {
    identifier,
    nickname: nicknameParts.join(' ').trim(),
    flags,
  };
}

function mergeSpecialForms(currentForm, incomingForm) {
  if (!currentForm) return incomingForm;
  if (!incomingForm) return currentForm;

  const forms = new Set([currentForm, incomingForm]);

  if (forms.has('paldea-fire')) return 'paldea-fire';
  if (forms.has('paldea-water')) return 'paldea-water';

  if (forms.has('paldea') && forms.has('paldea-fire')) return 'paldea-fire';
  if (forms.has('paldea') && forms.has('paldea-water')) return 'paldea-water';

  return incomingForm;
}

function resolvePokemonRequest(identifier, flags = {}) {
  const normalizedIdentifier = String(identifier || '').toLowerCase();

  const aliasEntry = IDENTIFIER_FORM_ALIASES[normalizedIdentifier];
  if (aliasEntry) {
    return {
      apiIdentifier: aliasEntry.apiIdentifier,
      flags: {
        ...flags,
        specialForm: flags.specialForm || aliasEntry.specialForm,
      },
    };
  }

  return {
    apiIdentifier: BASE_IDENTIFIER_ALIASES[normalizedIdentifier] || normalizedIdentifier,
    flags: { ...flags },
  };
}

function getSpecialFormConfig(apiIdentifier, specialForm) {
  if (!specialForm) return null;

  const formData = SPECIAL_FORM_SLOTS[apiIdentifier];
  const entry = formData?.[specialForm];

  if (entry === undefined) return null;

  if (typeof entry === 'string') {
    return {
      path: entry,
      shinyPath: '',
    };
  }

  return {
    path: entry?.path || '',
    shinyPath: entry?.shinyPath || '',
  };
}

function sanitizeSpeciesKey(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/[.’']/g, '')
    .trim();
}

function getRegionalFormPath(speciesName, region) {
  if (!region) return '';

  const key = sanitizeSpeciesKey(speciesName);
  const regionalData = REGIONAL_FORM_SLOTS[key];

  return regionalData?.[region] || '';
}

function isClearCommand(command) {
  return CLEAR_COMMANDS.includes(command);
}

async function handleSlotCommand(index, rawMessage) {
  const message = String(rawMessage || '').trim();

  if (!message) {
    clearCompleteSlot(index);
    saveState();
    saveTexts();
    saveItems();
    renderSlot(index);
    renderItem(index);
    return;
  }

  const { pokemon, text, item } = parseSlotCommandMessage(message);

  if (pokemon) {
    await handlePokemonCommand(index, pokemon);
  }

  texts[index] = text || '';
  saveTexts();

  if (!item) {
    items[index] = '';
  } else {
    const resolvedItem = resolveItemAlias(item);

    if (!resolvedItem) {
      console.warn(`[Overlay] Item no reconocido en slot${index + 1}: ${item}`);
      items[index] = '';
    } else {
      items[index] = resolvedItem;
    }
  }

  saveItems();
  renderItem(index);
}

function handleClearCommand(rawMessage) {
  const message = String(rawMessage || '').trim();

  if (!message) {
    for (let i = 0; i < SLOT_COUNT; i++) {
      clearCompleteSlot(i);
    }

    saveState();
    saveTexts();
    saveItems();
    renderAll();
    return;
  }

  const indexes = [...new Set(
    message
      .split(/[\s,]+/)
      .map(value => parseInt(value, 10))
      .filter(value => !Number.isNaN(value) && value >= 1 && value <= SLOT_COUNT)
  )];

  if (indexes.length === 0) return;

  for (const slotNumber of indexes) {
    clearCompleteSlot(slotNumber - 1);
  }

  saveState();
  saveTexts();
  saveItems();
  renderAll();
}

async function handlePokemonCommand(index, rawMessage) {
  const message = String(rawMessage || '').trim();

  if (!message) {
    clearSlot(index);
    saveState();
    renderSlot(index);
    return;
  }

  const { identifier, nickname, flags } = parsePokemonMessage(message);

  if (!identifier) return;

  if (['d', 'dead', 'muerto', 'm'].includes(identifier)) {
    if (team[index]) {
      team[index].dead = true;
      saveState();
      renderSlot(index);
    }
    return;
  }

  if (['alive', 'revive', 'vivo', 'v'].includes(identifier)) {
    if (team[index]) {
      team[index].dead = false;
      saveState();
      renderSlot(index);
    }
    return;
  }

  await setPokemon(index, identifier, nickname, flags);
}

async function setPokemon(index, identifier, nickname, flags = {}) {
  try {
    const customOverride = resolveCustomSpriteOverride(identifier);

    if (customOverride) {
      const path = customOverride.path;
      const displayName = nickname || customOverride.displayName || formatDisplayName(identifier);

      const spriteAlive = await resolveCustomPortraitByPriority(
        path,
        ALIVE_EMOTIONS,
        !!flags.shiny
      );

      const spriteDead = await resolveCustomPortraitByPriority(
        path,
        DEAD_EMOTIONS,
        !!flags.shiny
      );

      team[index] = {
        poke: identifier,
        originalInput: identifier,
        name: identifier,
        nick: displayName,
        numero: '',
        dead: false,

        shiny: !!flags.shiny,
        mega: false,
        region: null,
        specialForm: null,
        formPath: path,
        customOverride: true,

        sprite: spriteAlive,
        spriteAlive,
        spriteDead,
      };

      saveState();
      renderSlot(index);
      return;
    }

    const resolved = resolvePokemonRequest(identifier, flags);
    const apiIdentifier = resolved.apiIdentifier;
    const resolvedFlags = resolved.flags;

    const pokemon = await fetchPokemon(apiIdentifier);

    if (!pokemon) {
      console.warn(`[Overlay] Pokémon no encontrado: ${apiIdentifier}`);
      return;
    }

    const numero = String(pokemon.id).padStart(4, '0');
    const species = pokemon.species?.name || apiIdentifier;

    const specialFormConfig = getSpecialFormConfig(apiIdentifier, resolvedFlags.specialForm);
	const regionalFormPath = specialFormConfig ? '' : getRegionalFormPath(species, resolvedFlags.region);

	const formPath = specialFormConfig?.path || regionalFormPath;
	const formShinyPath = specialFormConfig?.shinyPath || '';

	const spriteFlags = {
	  shiny: !!resolvedFlags.shiny,
	  mega: formPath ? false : !!resolvedFlags.mega,
	  region: resolvedFlags.region || null,
	  specialForm: resolvedFlags.specialForm || null,
	  formPath,
	  formShinyPath,
	};

    const displayName = nickname || formatDisplayName(species);

    const spriteAlive = await resolvePortraitByPriority(numero, ALIVE_EMOTIONS, spriteFlags);
    const spriteDead = await resolvePortraitByPriority(numero, DEAD_EMOTIONS, spriteFlags);

    team[index] = {
	  poke: apiIdentifier,
	  originalInput: identifier,
	  name: species,
	  nick: displayName,
	  numero,
	  dead: false,

	  shiny: spriteFlags.shiny,
	  mega: spriteFlags.mega,
	  region: spriteFlags.region,
	  specialForm: spriteFlags.specialForm,
	  formPath: spriteFlags.formPath,
	  formShinyPath: spriteFlags.formShinyPath,
	  customOverride: false,

	  sprite: spriteAlive,
	  spriteAlive,
	  spriteDead,
	};

    saveState();
    renderSlot(index);
  } catch (error) {
    console.error('[Overlay] Error al asignar Pokémon:', error);
  }
}

function clearSlot(index) {
  team[index] = null;
}

function clearCompleteSlot(index) {
  team[index] = null;
  texts[index] = '';
  items[index] = '';
}

function handleDeathCommand(rawMessage) {
  const message = String(rawMessage || '').trim();

  if (!message) {
    death++;
    saveState();
    renderDeath();
    return;
  }

  const value = parseInt(message.split(/\s+/)[0], 10);
  if (!Number.isNaN(value) && value >= 0) {
    death = value;
    saveState();
    renderDeath();
  }
}

async function fetchPokemon(identifier) {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(identifier.toLowerCase())}`;
  const response = await fetch(endpoint);

  if (!response.ok) {
    return null;
  }

  return response.json();
}

async function imageExists(url) {
  if (portraitExistsCache.has(url)) {
    return portraitExistsCache.get(url);
  }

  const existsPromise = new Promise((resolve) => {
    const img = new Image();

    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);

    img.src = url;
  });

  portraitExistsCache.set(url, existsPromise);
  return existsPromise;
}

async function resolvePortraitByPriority(numero, emotions, flags = {}) {
  const variantKey = buildVariantPath(flags) || 'base';
  const cacheKey = `${numero}|${variantKey}|${emotions.join(',')}`;

  if (portraitChoiceCache.has(cacheKey)) {
    return portraitChoiceCache.get(cacheKey);
  }

  for (const emotion of emotions) {
    const url = buildPMDSpriteUrl(numero, emotion, flags);
    const exists = await imageExists(url);

    if (exists) {
      portraitChoiceCache.set(cacheKey, url);
      return url;
    }
  }

  const fallback = buildPMDSpriteUrl(numero, 'Normal', flags);
  portraitChoiceCache.set(cacheKey, fallback);
  return fallback;
}

function buildVariantPath(flags = {}) {
  const shiny = !!flags.shiny;
  const mega = !!flags.mega;
  const formPath = flags.formPath || '';
  const formShinyPath = flags.formShinyPath || '';

  if (formPath || formShinyPath) {
    if (shiny) return formShinyPath || `${formPath}/0001`;
    return formPath;
  }

  if (mega && shiny) return '0001/0001';
  if (mega) return '0001';
  if (shiny) return '0000/0001';

  return '';
}

async function resolveCustomPortraitByPriority(path, emotions, shiny = false) {
  const variantKey = shiny ? `${path}/0001` : path;
  const cacheKey = `custom|${variantKey}|${emotions.join(',')}`;

  if (portraitChoiceCache.has(cacheKey)) {
    return portraitChoiceCache.get(cacheKey);
  }

  for (const emotion of emotions) {
    const url = buildCustomSpriteUrl(path, emotion, shiny);
    const exists = await imageExists(url);

    if (exists) {
      portraitChoiceCache.set(cacheKey, url);
      return url;
    }
  }

  const fallback = buildCustomSpriteUrl(path, 'Normal', shiny);
  portraitChoiceCache.set(cacheKey, fallback);
  return fallback;
}

function buildPMDSpriteUrl(numero, emotion = 'Normal', flags = {}) {
  const variantPath = buildVariantPath(flags);

  if (variantPath) {
    return `${PMD_BASE_URL}/${numero}/${variantPath}/${emotion}.png`;
  }

  return `${PMD_BASE_URL}/${numero}/${emotion}.png`;
}

function buildCustomSpriteUrl(path, emotion = 'Normal', shiny = false) {
  if (!path) return '';

  const finalPath = shiny ? `${path}/0001` : path;
  return `${PMD_BASE_URL}/${finalPath}/${emotion}.png`;
}

function renderAll() {
  for (let i = 0; i < SLOT_COUNT; i++) {
    renderSlot(i);
    renderItem(i);
  }
  renderDeath();
}

function renderSlot(index) {
  const slot = team[index];
  const img = document.getElementById(`pk${index + 1}`);

  if (!img) return;

  if (!slot) {
    img.src = EMPTY_IMAGE;
    img.classList.remove('dead');
    img.classList.add('egg');
    return;
  }

  const aliveSprite = slot.spriteAlive || slot.sprite || EMPTY_IMAGE;
  const deadSprite = slot.spriteDead || aliveSprite;
  const currentSprite = slot.dead ? deadSprite : aliveSprite;

  img.src = currentSprite;
  img.classList.remove('egg');
  img.classList.toggle('dead', !!slot.dead);
}

function renderItem(index) {
  const itemName = String(items[index] || '').trim();
  const itemEl = document.getElementById(`item${index + 1}`);

  if (!itemEl) return;

  if (!itemName) {
    itemEl.src = '';
    itemEl.classList.add('hidden');
    return;
  }

  itemEl.src = getItemImagePath(itemName);
  itemEl.classList.remove('hidden');
}

function renderDeath() {
  const deathElement = document.getElementById('death');
  if (deathElement) {
    deathElement.textContent = `X${death}`;
  }
}

function normalizeChannel(channel) {
  return String(channel || '')
    .replace(/^#/, '')
    .trim()
    .toLowerCase();
}

function formatDisplayName(name) {
  return String(name || '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getTeamStorageKey() {
  return `pokemon-overlay:${canal}:team`;
}

function getDeathStorageKey() {
  return `pokemon-overlay:${canal}:death`;
}

function saveState() {
  localStorage.setItem(getTeamStorageKey(), JSON.stringify(team));
  localStorage.setItem(getDeathStorageKey(), String(death));
}

function loadState() {
  try {
    const savedTeam = JSON.parse(localStorage.getItem(getTeamStorageKey()) || 'null');
    const savedDeath = parseInt(localStorage.getItem(getDeathStorageKey()) || '0', 10);

    if (Array.isArray(savedTeam) && savedTeam.length === SLOT_COUNT) {
      team = savedTeam;
    }

    if (!Number.isNaN(savedDeath) && savedDeath >= 0) {
      death = savedDeath;
    }
  } catch (error) {
    console.warn('[Overlay] No se pudo cargar el estado local:', error);
  }
}

function showError(message) {
  const errorBox = document.getElementById('errorBox');
  if (!errorBox) return;

  errorBox.textContent = message;
  errorBox.classList.remove('hidden');
}
