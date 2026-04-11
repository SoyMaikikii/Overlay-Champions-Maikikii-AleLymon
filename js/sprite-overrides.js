console.log('sprite-overrides.js cargó');

const CUSTOM_SPRITE_OVERRIDES = {
  'floette-eternal': {
    path: '0670/0006',
    displayName: 'Floette Flor Eterna'
  }
};

const CUSTOM_SPRITE_ALIAS_MAP = {
  'floette eternal': 'floette-eternal',
  'floette eterna': 'floette-eternal',
  'floette eternal mega': 'floette-eternal',
  'floette eterna mega': 'floette-eternal',
  'floette-eternal': 'floette-eternal',
  'floette-eterna': 'floette-eternal',
  'floette-eternal-mega': 'floette-eternal',
  'floette-eterna-mega': 'floette-eternal',
  'floette-mega': 'floette-eternal'
};

function normalizeSpriteOverrideInput(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[_]+/g, ' ')
    .replace(/[-]+/g, ' ')
    .replace(/\s+/g, ' ');
}

function resolveCustomSpriteOverride(identifier) {
  const normalized = normalizeSpriteOverrideInput(identifier);

  const aliasKey =
    CUSTOM_SPRITE_ALIAS_MAP[identifier] ||
    CUSTOM_SPRITE_ALIAS_MAP[String(identifier || '').toLowerCase()] ||
    CUSTOM_SPRITE_ALIAS_MAP[normalized];

  if (!aliasKey) return null;

  const override = CUSTOM_SPRITE_OVERRIDES[aliasKey];
  if (!override) return null;

  return {
    key: aliasKey,
    ...override
  };
}

console.log('resolveCustomSpriteOverride existe?', typeof resolveCustomSpriteOverride);