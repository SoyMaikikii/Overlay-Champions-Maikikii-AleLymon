const VALID_ITEMS = new Set([
  'aguav-berry',
  'air-ballon',
  'aspear-berry',
  'assault-vest',
  'babiri-berry',
  'black-belt',
  'black-glasses',
  'black-sludge',
  'booster-energy',
  'bright-powder',
  'charcoal',
  'charti-berry',
  'cheri-berry',
  'chesto-berry',
  'chilan-berry',
  'choice-band',
  'choice-scarf',
  'choice-specs',
  'chople-berry',
  'clear-amulet',
  'coba-berry',
  'colbur-berry',
  'covert-cloak',
  'dragon-fang',
  'electric-seed',
  'fairy-feather',
  'figy-berry',
  'flame-orb',
  'focus-band',
  'focus-sash',
  'grassy-seed',
  'haban-berry',
  'hard-stone',
  'iapapa-berry',
  'kasib-berry',
  'kebia-berry',
  'kings-rock',
  'leftovers',
  'leppa-berry',
  'life-orb',
  'light-ball',
  'lum-berry',
  'magnet',
  'mago-berry',
  'mental-herb',
  'metal-coat',
  'miracle-seed',
  'misty-seed',
  'mystic-water',
  'normal-gem',
  'occa-berry',
  'oran-berry',
  'passho-berry',
  'payapa-berry',
  'pecha-berry',
  'persim-berry',
  'poison-barb',
  'psychic-seed',
  'quick-claw',
  'rawst-berry',
  'rindo-berry',
  'rocky-helmet',
  'roseli-berry',
  'safety-goggles',
  'scope-lens',
  'sharp-beak',
  'shell-bell',
  'shuca-berry',
  'silk-scarf',
  'silver-powder',
  'sitrus-berry',
  'soft-sand',
  'spell-tag',
  'tanga-berry',
  'throat-spray',
  'twisted-spoon',
  'wacan-berry',
  'white-herb',
  'wiki-berry',
  'yache-berry',
]);

const MEGA_STONE_ITEMS = [
  'barbaraclita',
  'baxcaliburita',
  'chesnaughtita',
  'crabominablita',
  'dragalgita',
  'falinksita',
  'glimmoranita',
  'golisopodita',
  'hawluchanita',
  'magearnita',
  'malamarita',
  'meowsticita',
  'scovillainita',
  'tatsugirita',
  'zeraoranita',
  'abomasnowita',
  'absolita-z',
  'absolita',
  'aerodactylita',
  'aggronita',
  'alakazamita',
  'altarianita',
  'ampharosita',
  'audinita',
  'banettita',
  'beedrillita',
  'blastoisita',
  'blazikenita',
  'cameruptita',
  'chandelurita',
  'charizardita-x',
  'charizardita-y',
  'chimechita',
  'clefablita',
  'darkrainita',
  'delphoxita',
  'diancita',
  'dragonitita',
  'drampanita',
  'eelektrossita',
  'emboarita',
  'excadrillita',
  'feraligatrita',
  'floettita',
  'froslassita',
  'galladita',
  'garchompita-z',
  'garchompita',
  'gardevoirita',
  'gengarita',
  'glalita',
  'golurkita',
  'greninjanita',
  'gyaradosita',
  'heatranita',
  'heracrossita',
  'houndoomita',
  'kangaskhanita',
  'latiasita',
  'latiosita',
  'lopunnita',
  'lucarita-z',
  'lucarita',
  'manectricita',
  'mawilita',
  'medichamita',
  'meganiumita',
  'metagrossita',
  'mewtwoita-x',
  'mewtwoita-y',
  'pidgeotita',
  'pinsirita',
  'pyroarita',
  'raichunita-x',
  'raichunita-y',
  'sableynita',
  'salamencita',
  'sceptilita',
  'scizorita',
  'scolipedita',
  'scraftita',
  'sharpedonita',
  'skarmorita',
  'slowbronita',
  'staraptorita',
  'starmita',
  'steelixista',
  'swampertita',
  'tyranitarita',
  'venusaurita',
  'victreebelita',
];

const MEGA_STONES = new Set(MEGA_STONE_ITEMS);

for (const megaStone of MEGA_STONE_ITEMS) {
  VALID_ITEMS.add(megaStone);
}

function getItemImagePath(itemName) {
  const normalized = String(itemName || '')
    .trim()
    .toLowerCase()
    .replace(/\.png$/i, '');

  if (!normalized) return '';

  if (MEGA_STONES.has(normalized)) {
    return `./img/items/megapiedras/${normalized}.png`;
  }

  return `./img/items/${normalized}.png`;
}

const ITEM_ALIASES = {
  // Berries
  'aguav-berry': 'aguav-berry',
  'aguav berry': 'aguav-berry',
  'aguav': 'aguav-berry',
  'baya-guaya': 'aguav-berry',
  'baya guaya': 'aguav-berry',
  'guaya': 'aguav-berry',
  'baya-angan': 'aguav-berry',
  'baya angan': 'aguav-berry',
  'angan': 'aguav-berry',

  'aspear-berry': 'aspear-berry',
  'aspear berry': 'aspear-berry',
  'aspear': 'aspear-berry',
  'baya-aspear': 'aspear-berry',
  'baya aspear': 'aspear-berry',
  'baya-perasi': 'aspear-berry',
  'baya perasi': 'aspear-berry',
  'perasi': 'aspear-berry',

  'babiri-berry': 'babiri-berry',
  'babiri berry': 'babiri-berry',
  'babiri': 'babiri-berry',
  'baya-babiri': 'babiri-berry',
  'baya babiri': 'babiri-berry',
  'baya-baribá': 'babiri-berry',
  'baya baribá': 'babiri-berry',
  'baribá': 'babiri-berry',
  'baya-bariba': 'babiri-berry',
  'baya bariba': 'babiri-berry',
  'bariba': 'babiri-berry',

  'charti-berry': 'charti-berry',
  'charti berry': 'charti-berry',
  'charti': 'charti-berry',
  'baya-charti': 'charti-berry',
  'baya charti': 'charti-berry',
  'baya-alcho': 'charti-berry',
  'baya alcho': 'charti-berry',
  'alcho': 'charti-berry',

  'cheri-berry': 'cheri-berry',
  'cheri berry': 'cheri-berry',
  'cheri': 'cheri-berry',
  'baya-cheri': 'cheri-berry',
  'baya cheri': 'cheri-berry',
  'baya-zreza': 'cheri-berry',
  'baya zreza': 'cheri-berry',
  'zreza': 'cheri-berry',

  'chesto-berry': 'chesto-berry',
  'chesto berry': 'chesto-berry',
  'chesto': 'chesto-berry',
  'baya-chesto': 'chesto-berry',
  'baya chesto': 'chesto-berry',
  'baya-atania': 'chesto-berry',
  'baya atania': 'chesto-berry',
  'atania': 'chesto-berry',

  'chilan-berry': 'chilan-berry',
  'chilan berry': 'chilan-berry',
  'chilan': 'chilan-berry',
  'baya-chilan': 'chilan-berry',
  'baya chilan': 'chilan-berry',
  'chilan': 'chilan-berry',

  'chople-berry': 'chople-berry',
  'chople berry': 'chople-berry',
  'chople': 'chople-berry',
  'baya-chople': 'chople-berry',
  'baya chople': 'chople-berry',
  'pomaro': 'chople-berry',
  'baya-pomaro': 'chople-berry',
  'baya pomaro': 'chople-berry',

  'coba-berry': 'coba-berry',
  'coba berry': 'coba-berry',
  'coba': 'coba-berry',
  'baya-coba': 'coba-berry',
  'baya coba': 'coba-berry',
  'kouba': 'coba-berry',
  'baya-kouba': 'coba-berry',
  'baya kouba': 'coba-berry',

  'colbur-berry': 'colbur-berry',
  'colbur berry': 'colbur-berry',
  'colbur': 'colbur-berry',
  'baya-colbur': 'colbur-berry',
  'baya colbur': 'colbur-berry',
  'dillo': 'colbur-berry',
  'baya-dillo': 'colbur-berry',
  'baya dillo': 'colbur-berry',

  'figy-berry': 'figy-berry',
  'figy berry': 'figy-berry',
  'figy': 'figy-berry',
  'baya-figy': 'figy-berry',
  'baya figy': 'figy-berry',
  'higog': 'figy-berry',
  'baya-higog': 'figy-berry',
  'baya higog': 'figy-berry',

  'haban-berry': 'haban-berry',
  'haban berry': 'haban-berry',
  'haban': 'haban-berry',
  'baya-haban': 'haban-berry',
  'baya haban': 'haban-berry',

  'iapapa-berry': 'iapapa-berry',
  'iapapa berry': 'iapapa-berry',
  'iapapa': 'iapapa-berry',
  'baya-iapapa': 'iapapa-berry',
  'baya iapapa': 'iapapa-berry',
  'pabaya': 'iapapa-berry',
  'baya-pabaya': 'iapapa-berry',
  'baya pabaya': 'iapapa-berry',

  'kasib-berry': 'kasib-berry',
  'kasib berry': 'kasib-berry',
  'kasib': 'kasib-berry',
  'baya-kasib': 'kasib-berry',
  'baya kasib': 'kasib-berry',
  'drasi': 'kasib-berry',
  'baya-drasi': 'kasib-berry',
  'baya drasi': 'kasib-berry',

  'kebia-berry': 'kebia-berry',
  'kebia berry': 'kebia-berry',
  'kebia': 'kebia-berry',
  'baya-kebia': 'kebia-berry',
  'baya kebia': 'kebia-berry',

  'leppa-berry': 'leppa-berry',
  'leppa berry': 'leppa-berry',
  'leppa': 'leppa-berry',
  'baya-leppa': 'leppa-berry',
  'baya leppa': 'leppa-berry',
  'zanama': 'leppa-berry',
  'baya-zanama': 'leppa-berry',
  'baya zanama': 'leppa-berry',

  'lum-berry': 'lum-berry',
  'lum berry': 'lum-berry',
  'lum': 'lum-berry',
  'baya-lum': 'lum-berry',
  'baya lum': 'lum-berry',
  'ziuela': 'lum-berry',
  'baya-ziuela': 'lum-berry',
  'baya ziuela': 'lum-berry',

  'mago-berry': 'mago-berry',
  'mago berry': 'mago-berry',
  'mago': 'mago-berry',
  'baya-mago': 'mago-berry',
  'baya mago': 'mago-berry',
  'ango': 'mago-berry',
  'baya-ango': 'mago-berry',
  'baya ango': 'mago-berry',

  'occa-berry': 'occa-berry',
  'occa berry': 'occa-berry',
  'occa': 'occa-berry',
  'baya-occa': 'occa-berry',
  'baya occa': 'occa-berry',
  'caoca': 'occa-berry',
  'baya-caoca': 'occa-berry',
  'baya caoca': 'occa-berry',


  'oran-berry': 'oran-berry',
  'oran berry': 'oran-berry',
  'oran': 'oran-berry',
  'baya-oran': 'oran-berry',
  'baya oran': 'oran-berry',
  'aranja': 'oran-berry',
  'baya-aranja': 'oran-berry',
  'baya aranja': 'oran-berry',

  'passho-berry': 'passho-berry',
  'passho berry': 'passho-berry',
  'passho': 'passho-berry',
  'baya-passho': 'passho-berry',
  'baya passho': 'passho-berry',
  'pasio': 'passho-berry',
  'baya-pasio': 'passho-berry',
  'baya pasio': 'passho-berry',

  'payapa-berry': 'payapa-berry',
  'payapa berry': 'payapa-berry',
  'payapa': 'payapa-berry',
  'baya-payapa': 'payapa-berry',
  'baya payapa': 'payapa-berry',

  'pecha-berry': 'pecha-berry',
  'pecha berry': 'pecha-berry',
  'pecha': 'pecha-berry',
  'baya-pecha': 'pecha-berry',
  'baya pecha': 'pecha-berry',
  'duraz': 'pecha-berry',
  'baya-duraz': 'pecha-berry',
  'baya duraz': 'pecha-berry',
  'meloc': 'pecha-berry',
  'baya-meloc': 'pecha-berry',
  'baya meloc': 'pecha-berry',

  'persim-berry': 'persim-berry',
  'persim berry': 'persim-berry',
  'persim': 'persim-berry',
  'baya-persim': 'persim-berry',
  'baya persim': 'persim-berry',
  'caquic': 'persim-berry',
  'baya-caquic': 'persim-berry',
  'baya caquic': 'persim-berry',

  'rawst-berry': 'rawst-berry',
  'rawst berry': 'rawst-berry',
  'rawst': 'rawst-berry',
  'baya-rawst': 'rawst-berry',
  'baya rawst': 'rawst-berry',
  'safre': 'rawst-berry',
  'baya-safre': 'rawst-berry',
  'baya safre': 'rawst-berry',

  'rindo-berry': 'rindo-berry',
  'rindo berry': 'rindo-berry',
  'rindo': 'rindo-berry',
  'baya-rindo': 'rindo-berry',
  'baya rindo': 'rindo-berry',
  'tamar': 'rindo-berry',
  'baya-tamar': 'rindo-berry',
  'baya tamar': 'rindo-berry',

  'roseli-berry': 'roseli-berry',
  'roseli berry': 'roseli-berry',
  'roseli': 'roseli-berry',
  'baya-roseli': 'roseli-berry',
  'baya roseli': 'roseli-berry',
  'hibis': 'roseli-berry',
  'baya-hibis': 'roseli-berry',
  'baya hibis': 'roseli-berry',

  'shuca-berry': 'shuca-berry',
  'shuca berry': 'shuca-berry',
  'shuca': 'shuca-berry',
  'baya-shuca': 'shuca-berry',
  'baya shuca': 'shuca-berry',
  'acardo': 'shuca-berry',
  'baya-acardo': 'shuca-berry',
  'baya acardo': 'shuca-berry',
  

  'sitrus-berry': 'sitrus-berry',
  'sitrus berry': 'sitrus-berry',
  'sitrus': 'sitrus-berry',
  'baya-sitrus': 'sitrus-berry',
  'baya sitrus': 'sitrus-berry',
  'zidra': 'sitrus-berry',
  'baya-zidra': 'sitrus-berry',
  'baya zidra': 'sitrus-berry',
  'citrón': 'sitrus-berry',
  'baya-citrón': 'sitrus-berry',
  'baya citrón': 'sitrus-berry',
  'citron': 'sitrus-berry',
  'baya-citron': 'sitrus-berry',
  'baya citron': 'sitrus-berry',

  'tanga-berry': 'tanga-berry',
  'tanga berry': 'tanga-berry',
  'tanga': 'tanga-berry',
  'baya-tanga': 'tanga-berry',
  'baya tanga': 'tanga-berry',
  'yecana': 'tanga-berry',
  'baya-yecana': 'tanga-berry',
  'baya yecana': 'tanga-berry',

  'wacan-berry': 'wacan-berry',
  'wacan berry': 'wacan-berry',
  'wacan': 'wacan-berry',
  'baya-wacan': 'wacan-berry',
  'baya wacan': 'wacan-berry',
  'gualot': 'wacan-berry',
  'baya-gualot': 'wacan-berry',
  'baya gualot': 'wacan-berry',

  'wiki-berry': 'wiki-berry',
  'wiki berry': 'wiki-berry',
  'wiki': 'wiki-berry',
  'baya-wiki': 'wiki-berry',
  'baya wiki': 'wiki-berry',

  'yache-berry': 'yache-berry',
  'yache berry': 'yache-berry',
  'yache': 'yache-berry',
  'baya-yache': 'yache-berry',
  'baya yache': 'yache-berry',
  'rimoya': 'yache-berry',
  'baya-rimoya': 'yache-berry',
  'baya rimoya': 'yache-berry',

  // Held items
  'air-ballon': 'air-balloon',
  'air ballon': 'air-balloon',
  'air-balloon': 'air-balloon',
  'air balloon': 'air-balloon',
  'ballon': 'air-balloon',
  'balloon': 'air-balloon',
  'globo-helio': 'air-balloon',
  'globo helio': 'air-balloon',
  'globo-con-helio': 'air-balloon',
  'globo con helio': 'air-balloon',
  'globo': 'air-balloon',

  'assault-vest': 'assault-vest',
  'assault vest': 'assault-vest',
  'assaultvest': 'assault-vest',
  'vest': 'assault-vest',
  'chaleco-asalto': 'assault-vest',
  'chaleco asalto': 'assault-vest',
  'chaleco': 'assault-vest',

  'black-belt': 'black-belt',
  'black belt': 'black-belt',
  'blackbelt': 'black-belt',
  'cinturon-negro': 'black-belt',
  'cinturon negro': 'black-belt',
  'cinta-negra': 'black-belt',
  'cinta negra': 'black-belt',

  'black-glasses': 'black-glasses',
  'black glasses': 'black-glasses',
  'blackglasses': 'black-glasses',
  'gafas-de-sol': 'black-glasses',
  'gafas de sol': 'black-glasses',
  'lentes-de-sol': 'black-glasses',
  'lentes de sol': 'black-glasses',

  'black-sludge': 'black-sludge',
  'black sludge': 'black-sludge',
  'blacksludge': 'black-sludge',
  'lodo-negro': 'black-sludge',
  'lodo negro': 'black-sludge',

  'booster-energy': 'booster-energy',
  'booster energy': 'booster-energy',
  'boosterenergy': 'booster-energy',
  'booster': 'booster-energy',
  'energia-potenciadora': 'booster-energy',
  'energia potenciadora': 'booster-energy',

  'bright-powder': 'bright-powder',
  'bright powder': 'bright-powder',
  'brightpowder': 'bright-powder',
  'polvo-brillo': 'bright-powder',
  'polvo brillo': 'bright-powder',
  'polvo-brillante': 'bright-powder',
  'polvo brillante': 'bright-powder',

  'charcoal': 'charcoal',
  'carbon': 'charcoal',
  'carbon-vegetal': 'charcoal',
  'carbon vegetal': 'charcoal',

  'choice-band': 'choice-band',
  'choice band': 'choice-band',
  'choiceband': 'choice-band',
  'banda-eleccion': 'choice-band',
  'banda eleccion': 'choice-band',
  'cinta-eleccion': 'choice-band',
  'cinta eleccion': 'choice-band',

  'choice-scarf': 'choice-scarf',
  'choice scarf': 'choice-scarf',
  'choicescarf': 'choice-scarf',
  'panuelo-eleccion': 'choice-scarf',
  'panuelo eleccion': 'choice-scarf',
  'scarf-eleccion': 'choice-scarf',
  'scarf eleccion': 'choice-scarf',
  'scarf': 'choice-scarf',
  'pañuelo-elegido': 'choice-scarf',
  'pañuelo elegido': 'choice-scarf',

  'choice-specs': 'choice-specs',
  'choice specs': 'choice-specs',
  'choicespecs': 'choice-specs',
  'specs': 'choice-specs',
  'gafas-eleccion': 'choice-specs',
  'gafas eleccion': 'choice-specs',
  'lentes-eleccion': 'choice-specs',
  'lentes eleccion': 'choice-specs',
  'gafas-elegidas': 'choice-specs',
  'gafas elegidas': 'choice-specs',

  'clear-amulet': 'clear-amulet',
  'clear amulet': 'clear-amulet',
  'clearamulet': 'clear-amulet',
  'amuleto-claro': 'clear-amulet',
  'amuleto claro': 'clear-amulet',
  'amuleto-nitido': 'clear-amulet',
  'amuleto nitido': 'clear-amulet',
  'amuleto puro': 'clear-amulet',
  'amuleto-puro': 'clear-amulet',

  'covert-cloak': 'covert-cloak',
  'covert cloak': 'covert-cloak',
  'covertcloak': 'covert-cloak',
  'capa-furtiva': 'covert-cloak',
  'capa furtiva': 'covert-cloak',
  'manto-furtivo': 'covert-cloak',
  'manto furtivo': 'covert-cloak',

  'dragon-fang': 'dragon-fang',
  'dragon fang': 'dragon-fang',
  'dragonfang': 'dragon-fang',
  'colmillo-dragon': 'dragon-fang',
  'colmillo dragon': 'dragon-fang',

  'electric-seed': 'electric-seed',
  'electric seed': 'electric-seed',
  'electricseed': 'electric-seed',
  'semilla-electrica': 'electric-seed',
  'semilla electrica': 'electric-seed',

  'fairy-feather': 'fairy-feather',
  'fairy feather': 'fairy-feather',
  'fairyfeather': 'fairy-feather',
  'pluma-hada': 'fairy-feather',
  'pluma hada': 'fairy-feather',

  'flame-orb': 'flame-orb',
  'flame orb': 'flame-orb',
  'flameorb': 'flame-orb',
  'esfera-llama': 'flame-orb',
  'esfera llama': 'flame-orb',
  'llamasfera': 'flame-orb',

  'focus-band': 'focus-band',
  'focus band': 'focus-band',
  'focusband': 'focus-band',

  'focus-sash': 'focus-sash',
  'focus sash': 'focus-sash',
  'focussash': 'focus-sash',
  'sash-focus': 'focus-sash',
  'sash': 'focus-sash',
  'focus': 'focus-sash',
  'banda-focus': 'focus-sash',
  'banda focus': 'focus-sash',
  'banda-aguante': 'focus-sash',
  'banda-aguante': 'focus-sash',

  'grassy-seed': 'grassy-seed',
  'grassy seed': 'grassy-seed',
  'grassyseed': 'grassy-seed',
  'semilla-hierba': 'grassy-seed',
  'semilla hierba': 'grassy-seed',

  'hard-stone': 'hard-stone',
  'hard stone': 'hard-stone',
  'hardstone': 'hard-stone',
  'piedra-dura': 'hard-stone',
  'piedra dura': 'hard-stone',

  'kings-rock': 'kings-rock',
  'kings rock': 'kings-rock',
  'kingsrock': 'kings-rock',
  'king-rock': 'kings-rock',
  'roca-del-rey': 'kings-rock',
  'roca del rey': 'kings-rock',

  'leftovers': 'leftovers',
  'restos': 'leftovers',

  'life-orb': 'life-orb',
  'life orb': 'life-orb',
  'lifeorb': 'life-orb',
  'vidasfera': 'life-orb',
  'vida-esfera': 'life-orb',
  'vida esfera': 'life-orb',

  'light-ball': 'light-ball',
  'light ball': 'light-ball',
  'lightball': 'light-ball',
  'bola-luminosa': 'light-ball',
  'bola luminosa': 'light-ball',

  'magnet': 'magnet',
  'iman': 'magnet',
  'imant': 'magnet',

  'mental-herb': 'mental-herb',
  'mental herb': 'mental-herb',
  'mentalherb': 'mental-herb',
  'hierba-mental': 'mental-herb',
  'hierba mental': 'mental-herb',

  'metal-coat': 'metal-coat',
  'metal coat': 'metal-coat',
  'metalcoat': 'metal-coat',
  'revestimiento-metalico': 'metal-coat',
  'revestimiento metalico': 'metal-coat',
  'capa-metalica': 'metal-coat',
  'capa metalica': 'metal-coat',

  'miracle-seed': 'miracle-seed',
  'miracle seed': 'miracle-seed',
  'miracleseed': 'miracle-seed',
  'semilla-milagro': 'miracle-seed',
  'semilla milagro': 'miracle-seed',

  'misty-seed': 'misty-seed',
  'misty seed': 'misty-seed',
  'mistyseed': 'misty-seed',
  'semilla-niebla': 'misty-seed',
  'semilla niebla': 'misty-seed',

  'mystic-water': 'mystic-water',
  'mystic water': 'mystic-water',
  'mysticwater': 'mystic-water',
  'agua-mistica': 'mystic-water',
  'agua mistica': 'mystic-water',
  'agua-mística': 'mystic-water',
  'agua mística': 'mystic-water',

  'normal-gem': 'normal-gem',
  'normal gem': 'normal-gem',
  'normalgem': 'normal-gem',
  'gema-normal': 'normal-gem',
  'gema normal': 'normal-gem',

  'poison-barb': 'poison-barb',
  'poison barb': 'poison-barb',
  'poisonbarb': 'poison-barb',
  'flecha-venenosa': 'poison-barb',
  'flecha venenosa': 'poison-barb',

  'psychic-seed': 'psychic-seed',
  'psychic seed': 'psychic-seed',
  'psychicseed': 'psychic-seed',
  'semilla-psiquica': 'psychic-seed',
  'semilla psiquica': 'psychic-seed',

  'quick-claw': 'quick-claw',
  'quick claw': 'quick-claw',
  'quickclaw': 'quick-claw',
  'garra-rapida': 'quick-claw',
  'garra rapida': 'quick-claw',
  'garra-rápida': 'quick-claw',
  'garra rápida': 'quick-claw',

  'rocky-helmet': 'rocky-helmet',
  'rocky helmet': 'rocky-helmet',
  'rockyhelmet': 'rocky-helmet',
  'casco-dentado': 'rocky-helmet',
  'casco dentado': 'rocky-helmet',

  'safety-goggles': 'safety-goggles',
  'safety goggles': 'safety-goggles',
  'safetygoggles': 'safety-goggles',
  'gafas-protectoras': 'safety-goggles',
  'gafas protectoras': 'safety-goggles',

  'scope-lens': 'scope-lens',
  'scope lens': 'scope-lens',
  'scopelens': 'scope-lens',
  'periscopio': 'scope-lens',
  'periscopio': 'scope-lens',

  'sharp-beak': 'sharp-beak',
  'sharp beak': 'sharp-beak',
  'sharpbeak': 'sharp-beak',
  'pico-afilado': 'sharp-beak',
  'pico afilado': 'sharp-beak',

  'shell-bell': 'shell-bell',
  'shell bell': 'shell-bell',
  'shellbell': 'shell-bell',
  'campana-concha': 'shell-bell',
  'campana concha': 'shell-bell',

  'silk-scarf': 'silk-scarf',
  'silk scarf': 'silk-scarf',
  'silkscarf': 'silk-scarf',
  'panuelo-de-seda': 'silk-scarf',
  'panuelo de seda': 'silk-scarf',
  'pañuelo-seda': 'silk-scarf',
  'pañuelo seda': 'silk-scarf',

  'silver-powder': 'silver-powder',
  'silver powder': 'silver-powder',
  'silverpowder': 'silver-powder',
  'polvo-plata': 'silver-powder',
  'polvo plata': 'silver-powder',

  'soft-sand': 'soft-sand',
  'soft sand': 'soft-sand',
  'softsand': 'soft-sand',
  'arena-suave': 'soft-sand',
  'arena suave': 'soft-sand',
  'arena-fina': 'soft-sand',
  'arena fina': 'soft-sand',

  'spell-tag': 'spell-tag',
  'spell tag': 'spell-tag',
  'spelltag': 'spell-tag',
  'hechizo': 'spell-tag',

  'throat-spray': 'throat-spray',
  'throat spray': 'throat-spray',
  'throatspray': 'throat-spray',
  'aerosol bucal': 'throat-spray',
  'aerosol-bucal': 'throat-spray',
  'espray-bucal': 'throat-spray',
  'espray bucal': 'throat-spray',
  'spray-bucal': 'throat-spray',
  'spray bucal': 'throat-spray',
  'espray': 'throat-spray',
  'spray': 'throat-spray',

  'twisted-spoon': 'twisted-spoon',
  'twisted spoon': 'twisted-spoon',
  'twistedspoon': 'twisted-spoon',
  'cuchara-torcida': 'twisted-spoon',
  'cuchara torcida': 'twisted-spoon',

  'white-herb': 'white-herb',
  'white herb': 'white-herb',
  'whiteherb': 'white-herb',
  'hierba-blanca': 'white-herb',
  'hierba blanca': 'white-herb',
  
  //megapiedras
'barbaraclita': 'barbaraclita',
  'barbaracite': 'barbaraclita',

  'baxcaliburita': 'baxcaliburita',
  'baxcalibrite': 'baxcaliburita',

  'chesnaughtita': 'chesnaughtita',
  'chesnaughtite': 'chesnaughtita',

  'crabominablita': 'crabominablita',
  'crabominite': 'crabominablita',

  'dragalgita': 'dragalgita',
  'dragalgite': 'dragalgita',

  'falinksita': 'falinksita',
  'falinksite': 'falinksita',

  'glimmoranita': 'glimmoranita',
  'glimmoranite': 'glimmoranita',

  'golisopodita': 'golisopodita',
  'golisopite': 'golisopodita',

  'hawluchanita': 'hawluchanita',
  'hawluchanite': 'hawluchanita',

  'magearnita': 'magearnita',
  'magearnite': 'magearnita',

  'malamarita': 'malamarita',
  'malamarite': 'malamarita',

  'meowsticita': 'meowsticita',
  'meowsticite': 'meowsticita',

  'scovillainita': 'scovillainita',
  'scovillainite': 'scovillainita',

  'tatsugirita': 'tatsugirita',
  'tatsugirinite': 'tatsugirita',

  'zeraoranita': 'zeraoranita',
  'zeraorite': 'zeraoranita',

  'abomasnowita': 'abomasnowita',
  'abomasite': 'abomasnowita',

  'absolita-z': 'absolita-z',
  'absolitez': 'absolita-z',
  'absolite-z': 'absolita-z',
  'absolite z': 'absolita-z',

  'absolita': 'absolita',
  'absolite': 'absolita',

  'aerodactylita': 'aerodactylita',
  'aerodactylite': 'aerodactylita',

  'aggronita': 'aggronita',
  'aggronite': 'aggronita',

  'alakazamita': 'alakazamita',
  'alakazite': 'alakazamita',

  'altarianita': 'altarianita',
  'altarianite': 'altarianita',

  'ampharosita': 'ampharosita',
  'ampharosite': 'ampharosita',

  'audinita': 'audinita',
  'audinite': 'audinita',

  'banettita': 'banettita',
  'banettite': 'banettita',

  'beedrillita': 'beedrillita',
  'beedrillite': 'beedrillita',

  'blastoisita': 'blastoisita',
  'blastoisinite': 'blastoisita',

  'blazikenita': 'blazikenita',
  'blazikenite': 'blazikenita',

  'cameruptita': 'cameruptita',
  'cameruptite': 'cameruptita',

  'chandelurita': 'chandelurita',
  'chandelurite': 'chandelurita',

  'charizardita-x': 'charizardita-x',
  'charizarditex': 'charizardita-x',
  'charizardite-x': 'charizardita-x',
  'charizardite x': 'charizardita-x',

  'charizardita-y': 'charizardita-y',
  'charizarditey': 'charizardita-y',
  'charizardite-y': 'charizardita-y',
  'charizardite y': 'charizardita-y',

  'chimechita': 'chimechita',
  'chimechite': 'chimechita',

  'clefablita': 'clefablita',
  'clefablite': 'clefablita',

  'darkrainita': 'darkrainita',
  'darkrainite': 'darkrainita',

  'delphoxita': 'delphoxita',
  'delphoxite': 'delphoxita',

  'diancita': 'diancita',
  'diancite': 'diancita',

  'dragonitita': 'dragonitita',
  'dragoninite': 'dragonitita',

  'drampanita': 'drampanita',
  'drampanite': 'drampanita',

  'eelektrossita': 'eelektrossita',
  'eelektrossite': 'eelektrossita',

  'emboarita': 'emboarita',
  'emboarite': 'emboarita',

  'excadrillita': 'excadrillita',
  'excadrite': 'excadrillita',

  'feraligatrita': 'feraligatrita',
  'feraligite': 'feraligatrita',

  'floettita': 'floettita',
  'floettite': 'floettita',

  'froslassita': 'froslassita',
  'froslassite': 'froslassita',

  'galladita': 'galladita',
  'galladite': 'galladita',

  'garchompita-z': 'garchompita-z',
  'garchompitez': 'garchompita-z',
  'garchompite-z': 'garchompita-z',
  'garchompite z': 'garchompita-z',

  'garchompita': 'garchompita',
  'garchompite': 'garchompita',

  'gardevoirita': 'gardevoirita',
  'gardevoirite': 'gardevoirita',

  'gengarita': 'gengarita',
  'gengarite': 'gengarita',

  'glalita': 'glalita',
  'glalitite': 'glalita',

  'golurkita': 'golurkita',
  'golurkite': 'golurkita',

  'greninjanita': 'greninjanita',
  'greninjite': 'greninjanita',

  'gyaradosita': 'gyaradosita',
  'gyaradosite': 'gyaradosita',

  'heatranita': 'heatranita',
  'heatranite': 'heatranita',

  'heracrossita': 'heracrossita',
  'heracronite': 'heracrossita',

  'houndoomita': 'houndoomita',
  'houndoominite': 'houndoomita',

  'kangaskhanita': 'kangaskhanita',
  'kangaskhanite': 'kangaskhanita',

  'latiasita': 'latiasita',
  'latiasite': 'latiasita',

  'latiosita': 'latiosita',
  'latiosite': 'latiosita',

  'lopunnita': 'lopunnita',
  'lopunnite': 'lopunnita',

  'lucarita-z': 'lucarita-z',
  'lucarionitez': 'lucarita-z',
  'lucarionite-z': 'lucarita-z',
  'lucarionite z': 'lucarita-z',

  'lucarita': 'lucarita',
  'lucarionite': 'lucarita',

  'manectricita': 'manectricita',
  'manectite': 'manectricita',

  'mawilita': 'mawilita',
  'mawilite': 'mawilita',

  'medichamita': 'medichamita',
  'medichamite': 'medichamita',

  'meganiumita': 'meganiumita',
  'meganiumite': 'meganiumita',

  'metagrossita': 'metagrossita',
  'metagrossite': 'metagrossita',

  'mewtwoita-x': 'mewtwoita-x',
  'mewtwonitex': 'mewtwoita-x',
  'mewtwonite-x': 'mewtwoita-x',
  'mewtwonite x': 'mewtwoita-x',

  'mewtwoita-y': 'mewtwoita-y',
  'mewtwonitey': 'mewtwoita-y',
  'mewtwonite-y': 'mewtwoita-y',
  'mewtwonite y': 'mewtwoita-y',

  'pidgeotita': 'pidgeotita',
  'pidgeotite': 'pidgeotita',

  'pinsirita': 'pinsirita',
  'pinsirite': 'pinsirita',

  'pyroarita': 'pyroarita',
  'pyroarite': 'pyroarita',

  'raichunita-x': 'raichunita-x',
  'raichunitex': 'raichunita-x',
  'raichunite-x': 'raichunita-x',
  'raichunite x': 'raichunita-x',

  'raichunita-y': 'raichunita-y',
  'raichunitey': 'raichunita-y',
  'raichunite-y': 'raichunita-y',
  'raichunite y': 'raichunita-y',

  'sableynita': 'sableynita',
  'sablenite': 'sableynita',

  'salamencita': 'salamencita',
  'salamencite': 'salamencita',

  'sceptilita': 'sceptilita',
  'sceptilite': 'sceptilita',

  'scizorita': 'scizorita',
  'scizorite': 'scizorita',

  'scolipedita': 'scolipedita',
  'scolipite': 'scolipedita',

  'scraftita': 'scraftita',
  'scraftinite': 'scraftita',

  'sharpedonita': 'sharpedonita',
  'sharpedonite': 'sharpedonita',

  'skarmorita': 'skarmorita',
  'skarmorite': 'skarmorita',

  'slowbronita': 'slowbronita',
  'slowbronite': 'slowbronita',

  'staraptorita': 'staraptorita',
  'staraptite': 'staraptorita',

  'starmita': 'starmita',
  'starminite': 'starmita',

  'steelixista': 'steelixista',
  'steelixite': 'steelixista',

  'swampertita': 'swampertita',
  'swampertite': 'swampertita',

  'tyranitarita': 'tyranitarita',
  'tyranitarite': 'tyranitarita',

  'venusaurita': 'venusaurita',
  'venusaurite': 'venusaurita',

  'victreebelita': 'victreebelita',
  'victreebelite': 'victreebelita',
};

function normalizeItemName(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[_]+/g, ' ')
    .replace(/[-]+/g, ' ')
    .replace(/\s+/g, ' ');
}

function resolveItemAlias(value) {
  const normalized = normalizeItemName(value);

  if (!normalized) return '';

  const aliased = ITEM_ALIASES[normalized] || normalized.replace(/\s+/g, '-');

  if (VALID_ITEMS.has(aliased)) {
    return aliased;
  }

  return '';
}