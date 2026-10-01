#!/usr/bin/env node
// server.js — статика + мок /api/v1/* для фронтенда «Номерок».
// Зависимостей нет. Node 18+.

const http = require('http');
const fs   = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 5173;
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const ROOT_DIR   = __dirname;

// ---------- utils -------------------------------------------------
const uuid = () => crypto.randomUUID();
const csrf = () => crypto.randomBytes(32).toString('base64url').slice(0, 43);
const iso  = (d = Date.now()) => new Date(d).toISOString();
const future = (ms) => iso(Date.now() + ms);
const hex16 = () => crypto.randomBytes(8).toString('hex');       // 16 hex chars
const hex64 = () => crypto.randomBytes(32).toString('hex');      // 64 hex chars
const ok    = (res, body) => json(res, 200, body);
const fail  = (res, code, status = 400, message = code) =>
  json(res, status, { error: { code, message, requestId: uuid(), retryable: false } });

function json(res, status, body) {
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8');
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); } catch { resolve({}); }
    });
  });
}

// ---------- регионы РФ (137 шт., как требует схема) ----------
const REGION_CODES = [
  '77','97','99','177','197','199','777','797','799','977',
  '78','98','178',
  '50','90','150','190','750',
  '23','93','123','193',
  '16','116','716',
  '66','96','196',
  '02','102',
  '74','174',
  '63','163','763',
  '61','161','761',
  '59','81','159',
  '52','152',
  '54','154',
  '82','92',
  '34','134',
  '36','136',
  '38','138','85',
  '42','142',
  '47','64','164',
  '73','173',
  '22','122',
  '24','84','88','124',
  '26','126',
  '25','125',
  '27','39','91',
  '86','186',
  '89','95',
  '05','14',
  '01','03','04','06','07','08','09','10','11','111',
  '12','13','113','15','17','18','19','21','121','28',
  '29','30','31','32','33','35','37','40','41','43',
  '44','45','46','48','49','51','83','53','55','56',
  '57','58','60','62','65','67','68','69','70','71',
  '72','75','80','76','79','87','94',
];

const REGION_NAMES = {
  '77':'Москва','97':'Москва','99':'Москва','177':'Москва','197':'Москва',
  '199':'Москва','777':'Москва','797':'Москва','799':'Москва','977':'Москва',
  '78':'Санкт-Петербург','98':'Санкт-Петербург','178':'Санкт-Петербург',
  '50':'Московская область','90':'Московская область','150':'Московская область',
  '190':'Московская область','750':'Московская область',
  '23':'Краснодарский край','93':'Краснодарский край','123':'Краснодарский край','193':'Краснодарский край',
  '16':'Татарстан','116':'Татарстан','716':'Татарстан',
  '66':'Свердловская область','96':'Свердловская область','196':'Свердловская область',
  '02':'Башкортостан','102':'Башкортостан',
  '74':'Челябинская область','174':'Челябинская область',
  '63':'Самарская область','163':'Самарская область','763':'Самарская область',
  '61':'Ростовская область','161':'Ростовская область','761':'Ростовская область',
  '59':'Пермский край','81':'Пермский край','159':'Пермский край',
  '52':'Нижегородская область','152':'Нижегородская область',
  '54':'Новосибирская область','154':'Новосибирская область',
  '82':'Крым','92':'Севастополь',
  '34':'Волгоградская область','134':'Волгоградская область',
  '36':'Воронежская область','136':'Воронежская область',
  '38':'Иркутская область','138':'Иркутская область','85':'Иркутская область',
  '42':'Кемеровская область','142':'Кемеровская область',
  '47':'Ленинградская область','64':'Саратовская область','164':'Саратовская область',
  '73':'Ульяновская область','173':'Ульяновская область',
  '22':'Алтайский край','122':'Алтайский край',
  '24':'Красноярский край','84':'Красноярский край','88':'Красноярский край','124':'Красноярский край',
  '26':'Ставропольский край','126':'Ставропольский край',
  '25':'Приморский край','125':'Приморский край',
  '27':'Хабаровский край','39':'Калининградская область','91':'Калининградская область',
  '86':'ХМАО','186':'ХМАО','89':'ЯНАО','95':'Чеченская Республика',
  '05':'Дагестан','14':'Якутия',
  // остальные — просто «Регион NNN»
};

const regionCatalogue = REGION_CODES.map((code) => ({
  subjectId: `region_${code}`,
  regionCode: code,
  componentSpinPriceGameRub: '5000',
  replacementCreditGameRub: '1000',
}));

const regionByCode = new Map(regionCatalogue.map((r) => [r.regionCode, r]));

// ---------- состояние игры (in-memory) ----------------------------
const ECONOMY_HASH  = hex16();
const RNG_VERSION   = hex64();
const VALUATION_VER = hex16();
const PRICING_VER   = 'v1';
const POLICY_VER    = '2026-09-25.server-v3';

function emptyDraft(slot) {
  return {
    id: uuid(),
    slot,
    regionSubjectId: null,
    regionCode: null,
    digits: null,
    letters: null,
    digitsPaid: false,
    lettersPaid: false,
    pricingPolicyVersion: PRICING_VER,
    nextPricesGameRub: { digits: null, letters: null, whole: null },
    result: null,
    ownedEditPlateId: null,
    ownedEditState: 'none',
    actions: {
      canSelectRegion: true,
      regionChangeRequiresDiscard: false,
      canSpinDigits: false,
      canSpinLetters: false,
      canSave: false,
      canImmediateSell: false,
      canExitOwnedEdit: false,
      canDiscardOwnedEditReplacement: false,
    },
    draftExpiresAt: future(3600_000),
    version: '1',
  };
}

const state = {
  principal: { id: uuid(), mode: 'guest', guestExpiresAt: null },
  account: null,
  balance: { asset: 'GAME_RUB', amount: '1000000', version: '1' },
  csrfToken: csrf(),
  slots: { A: emptyDraft('A'), B: null },
  entitlements: { auto: false, double: false },
  collection: [],
  capacity: 50,
  favorites: [],
  consent: {
    analytics: false,
    version: null,
    contentHash: null,
    decidedAt: null,
    revision: '0',
  },
  notices: [],
  seenNotices: new Set(),
};

// ---------- сборка ответов ----------------------------------------
function bootstrap() {
  return {
    authority: 'server',
    principal: state.principal,
    account: state.account,
    session: null,
    balance: state.balance,
    economy: {
      configHash: ECONOMY_HASH,
      configSemanticSha256: RNG_VERSION,
      runtimePackageSha256: RNG_VERSION,
      sourceSinkRegistrySha256: RNG_VERSION,
    },
    currentState: { paidSpinCount: '0', historyEventCount: '0', value: {}, version: '1' },
    capabilities: {
      canRegister: state.principal.mode === 'guest',
      canUseRegisteredFeatures: state.principal.mode === 'registered',
      guestRestrictions: [],
    },
    csrfToken: state.csrfToken,
    requestId: uuid(),
  };
}

function gameConfig() {
  return {
    authority: 'server',
    pricingPolicyVersion: PRICING_VER,
    economyConfigHash: ECONOMY_HASH,
    rngConfigVersion: RNG_VERSION,
    valuationVersion: VALUATION_VER,
    regionCatalogue,
    rarityLabels: {
      GRAY: 'Обычный', BLUE: 'Редкий', PURPLE: 'Очень редкий',
      RED: 'Элитный', GOLD: 'Легендарный',
    },
    autoCadenceMilliseconds: { component: 1330, wholePlate: 1710 },
    collection: {
      initialCapacity: 50,
      expansionSlots: 50,
      expansionPriceGameRub: '150000',
    },
    requestId: uuid(),
  };
}

function gameState() {
  // Обновляем actions для каждого слота
  for (const slot of ['A', 'B']) {
    const d = state.slots[slot];
    if (!d) continue;
    const hasRegion = !!d.regionCode;
    const canSpinD = hasRegion && !d.digits;
    const canSpinL = hasRegion && !d.letters;
    const complete = d.digits && d.letters;
    d.actions.canSelectRegion = !d.digits && !d.letters;
    d.actions.regionChangeRequiresDiscard = !!(d.digits || d.letters);
    d.actions.canSpinDigits = canSpinD;
    d.actions.canSpinLetters = canSpinL;
    d.actions.canSave = complete;
    d.actions.canImmediateSell = complete;
    d.nextPricesGameRub = hasRegion
      ? {
          digits: canSpinD ? '5000' : null,
          letters: canSpinL ? '5000' : null,
          whole: null,
        }
      : { digits: null, letters: null, whole: null };
  }
  return {
    authority: 'server',
    principalMode: state.principal.mode,
    slots: { A: state.slots.A, B: state.slots.B },
    entitlements: state.entitlements,
    collection: { capacity: state.capacity, used: state.collection.length },
    legacyPartial: null,
    balance: state.balance,
    economy: {
      configHash: ECONOMY_HASH,
      rngConfigVersion: RNG_VERSION,
      valuationVersion: VALUATION_VER,
    },
    requestId: uuid(),
  };
}

function collectionResponse() {
  return {
    authority: 'server',
    items: state.collection,
    nextCursor: null,
    capacity: state.capacity,
    usedCapacity: state.collection.length,
    requestId: uuid(),
  };
}

function collectorState() {
  const xp = state.collection.length * 10;
  return {
    accountId: state.principal.id,
    progress: {
      xp, level: 1, xpIntoLevel: xp, xpForNextLevel: 100,
      xpToNextLevel: Math.max(0, 100 - xp), capped: false,
      policyVersion: 'XP_COLLECTOR_V1',
      enabled: true,
      policyStartedAt: iso(),
      version: '1',
    },
    messagesVersion: '1',
    receiveOffers: true,
    blockedPlayerIds: [],
    favorites: state.favorites,
    unreadCount: 0,
  };
}

// ---------- оценка номера (упрощённая) ----------------------------
const TIERS = ['GRAY', 'BLUE', 'PURPLE', 'RED', 'GOLD'];
const TIER_WEIGHTS = [0.7, 0.2, 0.07, 0.025, 0.005];
const TIER_VALUE = { GRAY: 20000, BLUE: 80000, PURPLE: 300000, RED: 900000, GOLD: 2500000 };

function rollTier() {
  const r = Math.random();
  let acc = 0;
  for (let i = 0; i < TIERS.length; i++) {
    acc += TIER_WEIGHTS[i];
    if (r < acc) return TIERS[i];
  }
  return 'GRAY';
}

function rollDigits() {
  const n = 1 + Math.floor(Math.random() * 999);
  return String(n).padStart(3, '0');
}

const LETTERS = 'АВЕКМНОРСТУХ';
function rollLetters() {
  let s = '';
  for (let i = 0; i < 3; i++) s += LETTERS[Math.floor(Math.random() * LETTERS.length)];
  return s;
}

function makePlateResult(slot, regionCode, digits, letters, axis) {
  const tier = rollTier();
  const intrinsic = String(Math.round(TIER_VALUE[tier] * (0.8 + Math.random() * 0.6)));
  const id = `${Date.now()}:${slot}:${Math.floor(Math.random() * 1000)}`;
  return {
    id,
    slot,
    regionCode,
    digits,
    letters,
    axis,
    displayTier: tier,
    prestige: 'NONE',
    intrinsicGameRub: intrinsic,
  };
}

function makeCollectionItem(result) {
  const id = uuid();
  return {
    descriptor: {
      country: 'RU',
      format: 'RU_PRIVATE_V1',
      regionCode: result.regionCode,
      digits: result.digits,
      letters: result.letters,
      identityVersion: 2,
      publicPlateId: id,
    },
    favorite: false,
    intrinsicGameRub: result.intrinsicGameRub,
    lifeId: uuid(),
    frameId: null,
    plateId: id,
    regionCode: result.regionCode,
    digits: result.digits,
    letters: result.letters,
    displayTier: result.displayTier,
    prestige: result.prestige,
    assetLifecycle: 'ordinary_editable',
    giftedByOwner: false,
    saveRewardPaid: false,
    acquiredAt: iso(),
    version: '1',
    operationLock: null,
    actions: {
      edit: true,
      marketplaceList: true,
      systemLiquidationGameRub: String(Math.floor(Number(result.intrinsicGameRub) * 0.4)),
    },
  };
}

// ---------- маршрутизация -----------------------------------------
async function handleApi(req, res, url) {
  const p = url.pathname;
  const m = req.method;

  // --- health ---
  if (m === 'GET' && p === '/api/v1/health/live')  return ok(res, { status: 'ok' });
  if (m === 'GET' && p === '/api/v1/health/ready') return ok(res, { status: 'ready' });

  // --- session / bootstrap ---
  if (m === 'GET'  && p === '/api/v1/session')        return ok(res, bootstrap());
  if (m === 'POST' && p === '/api/v1/guest/bootstrap') {
    await readBody(req);
    if (!state.principal) {
      state.principal = { id: uuid(), mode: 'guest', guestExpiresAt: null };
    }
    return ok(res, bootstrap());
  }

  // --- auth ---
  if (m === 'GET'  && p === '/api/v1/auth/context')
    return ok(res, { authority: 'server', csrfToken: state.csrfToken, requestId: uuid() });

  if (m === 'POST' && p === '/api/v1/auth/register') {
    const body = await readBody(req);
    const nickname = String(body.nickname || '').trim() || 'Игрок';
    const accountId = uuid();
    state.account = { id: accountId, nickname, avatarColor: '#2563EB', profileVersion: '1' };
    state.principal = { id: accountId, mode: 'registered', guestExpiresAt: null };
    return ok(res, {
      authority: 'server',
      account: state.account,
      balance: state.balance,
      csrfToken: state.csrfToken,
      requestId: uuid(),
    });
  }

  if (m === 'POST' && p === '/api/v1/auth/login') {
    const body = await readBody(req);
    const nickname = String(body.nickname || '').trim() || 'Игрок';
    const accountId = uuid();
    state.account = { id: accountId, nickname, avatarColor: '#2563EB', profileVersion: '1' };
    state.principal = { id: accountId, mode: 'registered', guestExpiresAt: null };
    return ok(res, {
      authority: 'server',
      account: state.account,
      balance: state.balance,
      csrfToken: state.csrfToken,
      requestId: uuid(),
    });
  }

  if (m === 'POST' && p === '/api/v1/auth/logout') {
    state.principal = { id: uuid(), mode: 'guest', guestExpiresAt: null };
    state.account = null;
    state.csrfToken = csrf();
    return ok(res, { authority: 'server', requestId: uuid() });
  }

  if (m === 'POST' && p === '/api/v1/auth/logout-all') {
    state.principal = { id: uuid(), mode: 'guest', guestExpiresAt: null };
    state.account = null;
    state.csrfToken = csrf();
    return ok(res, { authority: 'server', requestId: uuid() });
  }

  if (m === 'POST' && p === '/api/v1/auth/rotate')
    return ok(res, { authority: 'server', csrfToken: state.csrfToken, requestId: uuid() });

  if (m === 'POST' && p === '/api/v1/auth/password')
    return ok(res, { authority: 'server', state: 'COMPLETED', accountId: state.principal.id, requestId: uuid() });

  // --- profile ---
  if (m === 'PATCH' && p === '/api/v1/profile') {
    const body = await readBody(req);
    if (!state.account) return fail(res, 'AUTHENTICATION_REQUIRED', 401);
    if (body.nickname) state.account.nickname = String(body.nickname).trim().slice(0, 24);
    if (body.avatarColor) state.account.avatarColor = String(body.avatarColor);
    state.account.profileVersion = String(Number(state.account.profileVersion || '1') + 1);
    return ok(res, { authority: 'server', account: state.account, requestId: uuid() });
  }

  // --- privacy / consent ---
  if (m === 'GET' && p === '/api/v1/privacy/context') {
    return ok(res, {
      csrfToken: state.csrfToken,
      analyticsAvailable: true,
      state: state.consent,
      cookies: publishedDoc('cookies'),
      analyticsNotice: publishedDoc('analytics-consent'),
    });
  }

  if (m === 'POST' && p === '/api/v1/privacy/analytics') {
    const body = await readBody(req);
    const action = body && body.action;
    if (action === 'GRANT') state.consent.analytics = true;
    else if (action === 'REVOKE' || action === 'REFUSE') state.consent.analytics = false;
    state.consent.decidedAt = iso();
    state.consent.revision = String(Number(state.consent.revision) + 1);
    state.consent.version = 'v1';
    state.consent.contentHash = hex64();
    return ok(res, {
      recorded: true,
      receiptId: uuid(),
      replayed: false,
      analytics: state.consent.analytics,
      version: state.consent.version,
      contentHash: state.consent.contentHash,
      decidedAt: state.consent.decidedAt,
      revision: state.consent.revision,
    });
  }

  // --- legal ---
  if (m === 'GET' && p === '/api/v1/legal') {
    return ok(res, {
      registrationRequired: true,
      offerRequired: false,
      guestRequired: false,
      documents: [
        publishedDoc('terms'),
        publishedDoc('privacy'),
        publishedDoc('personal-data-consent'),
        publishedDoc('cookies'),
        publishedDoc('offer'),
      ],
    });
  }

  if (m === 'GET' && p.startsWith('/api/v1/legal/')) {
    const [, , , , key, version] = p.split('/');
    const doc = publishedDoc(decodeURIComponent(key || 'terms'));
    if (!doc) return fail(res, 'NOT_FOUND', 404);
    if (version && version !== doc.version) {
      return fail(res, 'LEGAL_VERSION_CHANGED', 409, 'Document version changed');
    }
    return ok(res, doc);
  }

  // --- game ---
  if (m === 'GET' && p === '/api/v1/game/config') return ok(res, gameConfig());
  if (m === 'GET' && p === '/api/v1/game/state')  return ok(res, gameState());
  if (m === 'GET' && p === '/api/v1/game/collection') return ok(res, collectionResponse());

  if (m === 'POST' && p === '/api/v1/game/region') {
    const body = await readBody(req);
    const slot = body.slot === 'B' ? 'B' : 'A';
    const d = state.slots[slot] || (state.slots[slot] = emptyDraft(slot));
    const region = regionByCode.get(body.regionCode);
    if (!region) return fail(res, 'VALIDATION_ERROR');
    d.regionSubjectId = region.subjectId;
    d.regionCode = region.regionCode;
    d.version = String(Number(d.version) + 1);
    return ok(res, gameState());
  }

  if (m === 'POST' && p === '/api/v1/game/spin') {
    const body = await readBody(req);
    const slot = body.slot === 'B' ? 'B' : 'A';
    const axis = body.axis === 'letters' ? 'letters' : 'digits';
    const d = state.slots[slot];
    if (!d || !d.regionCode) return fail(res, 'REGION_REQUIRED');
    if (axis === 'digits') d.digits = rollDigits();
    else d.letters = rollLetters();
    d.version = String(Number(d.version) + 1);
    if (d.digits && d.letters) {
      d.result = makePlateResult(slot, d.regionCode, d.digits, d.letters, 'whole');
      d.result.digitsPaid = true;
      d.result.lettersPaid = true;
      d.result.saveRewardGameRub = String(Math.floor(Number(d.result.intrinsicGameRub) * 0.1));
      d.result.immediateSellGameRub = String(Math.floor(Number(d.result.intrinsicGameRub) * 0.7));
      d.result.expiresAt = future(3600_000);
    }
    return ok(res, gameState());
  }

  if (m === 'POST' && p === '/api/v1/game/save') {
    const body = await readBody(req);
    const slot = body.slot === 'B' ? 'B' : 'A';
    const d = state.slots[slot];
    if (!d || !d.result) return fail(res, 'INCOMPLETE_DRAFT');
    if (state.collection.length >= state.capacity) return fail(res, 'COLLECTION_CAPACITY_REACHED');
    state.collection.unshift(makeCollectionItem(d.result));
    state.slots[slot] = emptyDraft(slot);
    return ok(res, gameState());
  }

  if (m === 'POST' && p === '/api/v1/game/instant-sell') {
    const body = await readBody(req);
    const slot = body.slot === 'B' ? 'B' : 'A';
    const d = state.slots[slot];
    if (!d || !d.result) return fail(res, 'INCOMPLETE_DRAFT');
    const payout = String(Math.floor(Number(d.result.intrinsicGameRub) * 0.7));
    state.balance.amount = String(BigInt(state.balance.amount) + BigInt(payout));
    state.balance.version = String(Number(state.balance.version) + 1);
    state.slots[slot] = emptyDraft(slot);
    return ok(res, gameState());
  }

  if (m === 'POST' && p === '/api/v1/game/auto/cycle') {
    // Возвращаем просто пустой список «ничего не произошло»
    return ok(res, {
      authority: 'server',
      receiptId: String(Date.now()),
      requestId: uuid(),
      outcomes: [],
      chargedGameRub: '0',
      replacementCreditGameRub: '0',
      balanceFloorGameRub: null,
      cadenceBaseMilliseconds: 1330,
      allTargetsHit: false,
      balanceGameRub: state.balance.amount,
    });
  }

  if (m === 'POST' && p === '/api/v1/game/collection/expand') {
    const price = 150000n;
    if (BigInt(state.balance.amount) < price) return fail(res, 'INSUFFICIENT_BALANCE');
    state.balance.amount = String(BigInt(state.balance.amount) - price);
    state.balance.version = String(Number(state.balance.version) + 1);
    state.capacity += 50;
    return ok(res, gameState());
  }

  if (m === 'POST' && /^\/api\/v1\/game\/plates\/[^/]+\/edit$/.test(p)) {
    return ok(res, gameState());
  }
  if (m === 'POST' && p === '/api/v1/game/owned-edit/exit')      return ok(res, gameState());
  if (m === 'POST' && p === '/api/v1/game/owned-edit/discard')   return ok(res, gameState());
  if (m === 'POST' && /^\/api\/v1\/game\/plates\/[^/]+\/instant-sell$/.test(p)) {
    const id = p.split('/')[5];
    state.collection = state.collection.filter((x) => x.plateId !== id);
    state.balance.amount = String(BigInt(state.balance.amount) + 10000n);
    state.balance.version = String(Number(state.balance.version) + 1);
    return ok(res, gameState());
  }
  if (m === 'POST' && p === '/api/v1/game/legacy-partial/recover') return ok(res, gameState());
  if (m === 'POST' && p === '/api/v1/game/legacy-partial/discard') return ok(res, gameState());

  // --- collector ---
  if (m === 'GET' && p === '/api/v1/collector/state') return ok(res, collectorState());

  // --- favorites / bulk sell (M9) ---
  if (m === 'POST' && p === '/api/v1/collection/favorite') {
    const body = await readBody(req);
    const item = state.collection.find((x) => x.plateId === body.plateId);
    if (item) {
      item.favorite = !!body.favorite;
      item.version = String(Number(item.version) + 1);
    }
    return ok(res, {
      plateId: body.plateId, favorite: !!body.favorite,
      version: item ? item.version : '1', closedOffers: 0,
      receiptId: String(Date.now()), replayed: false,
    });
  }

  // --- plate history ---
  if (m === 'GET' && p === '/api/v1/read/plate-history') {
    return ok(res, {
      authority: 'server',
      contractVersion: 'nomerok.m9.read.v1',
      total: '0', asOf: iso(), serverObservedAt: iso(),
      snapshotId: uuid(), snapshotExpiresAt: future(60_000), nextCursor: null,
      items: [],
      filter: {}, metadata: { currency: 'game_rub' },
    });
  }

  // --- tops ---
  if (m === 'GET' && p === '/api/v1/tops') {
    return ok(res, {
      authority: 'server',
      kind: url.searchParams.get('kind') || 'money',
      definitionVersion: 'v1',
      period: 'CURRENT',
      snapshotId: uuid(),
      asOf: iso(),
      projection: { version: '1', asOf: iso(), freshnessMs: 0, status: 'FRESH', reason: null },
      serverObservedAt: iso(),
      rows: [], nextCursor: null,
    });
  }
  if (m === 'GET' && p === '/api/v1/tops/me') {
    return ok(res, {
      authority: 'server', kind: url.searchParams.get('kind') || 'money',
      definitionVersion: 'v1', period: 'CURRENT',
      snapshotId: uuid(), asOf: iso(),
      projection: { version: '1', asOf: iso(), freshnessMs: 0, status: 'FRESH', reason: null },
      serverObservedAt: iso(), me: null, neighbors: [],
      unavailableReason: 'NO_ASSETS',
    });
  }

  // --- history ---
  if (m === 'GET' && p === '/api/v1/history') {
    return ok(res, {
      authority: 'server', category: url.searchParams.get('category') || 'ALL',
      items: [], asOf: iso(), nextCursor: null, serverObservedAt: iso(),
      projection: { version: '1', asOf: iso(), freshnessMs: 0, status: 'FRESH', reason: null },
    });
  }

  // --- rewards ---
  if (m === 'GET' && p === '/api/v1/rewards') return ok(res, emptyRewards());
  if (m === 'GET' && p === '/api/v1/rewards/notifications')
    return ok(res, { authority: 'server', serverObservedAt: iso(), notifications: [] });

  // --- referrals ---
  if (m === 'GET' && p === '/api/v1/referrals') {
    return ok(res, {
      authority: 'server', contractVersion: 'nomerok.m8.v1',
      serverObservedAt: iso(),
      code: 'AAAAAAA', inviteLink: '/?ref=AAAAAAA',
      attribution: { bound: false, depth: null, boundAt: null },
      targets: { paidComponents: '100', saves: '3', activeDates: 3, activityDatePolicy: 'CIVIL_MOSCOW' },
      progress: emptyReferralProgress(),
      invites: [], nextCursor: null,
      cap: { used: 0, limit: 10, windowHours: 720, nextPossibleReleaseAt: null },
    });
  }
  if (m === 'GET' && p === '/api/v1/referrals/resolve') {
    return ok(res, { authority: 'server', valid: false, reason: null });
  }

  // --- frames ---
  if (m === 'GET' && p === '/api/v1/frames') {
    return ok(res, { capability: 'frames-v1', products: [] });
  }
  if (m === 'GET' && p === '/api/v1/frames/state') {
    return ok(res, framesState());
  }
  if (m === 'POST' && p === '/api/v1/frames/purchase')
    return fail(res, 'M9_FRAME_UNAVAILABLE');
  if (m === 'POST' && p === '/api/v1/frames/assign') return ok(res, { assigned: true, receiptId: '1', replayed: false });

  // --- notices ---
  if (m === 'GET' && p === '/api/v1/notices') {
    return ok(res, {
      authority: 'server', contractVersion: 'nomerok.m9.read.v1',
      items: [], total: '0', asOf: iso(), serverObservedAt: iso(),
      snapshotId: uuid(), snapshotExpiresAt: future(60_000), nextCursor: null,
      filter: { state: 'ACTIVE' },
      metadata: { unread: '0', delivery: 'IN_GAME_ONLY', removalRechecked: true },
    });
  }
  if (m === 'GET' && p === '/api/v1/notices/online')
    return ok(res, { cursor: '0', items: [], serverObservedAt: iso() });
  if (m === 'GET' && /^\/api\/v1\/notices\/[^/]+$/.test(p)) return fail(res, 'NOT_FOUND', 404);
  if (m === 'POST' && /^\/api\/v1\/notices\/[^/]+\/seen$/.test(p))
    return ok(res, { noticeId: p.split('/')[4], readAt: iso(), receiptId: '1', replayed: false });

  // --- account ---
  if (m === 'GET' && p === '/api/v1/sessions') {
    return ok(res, { authority: 'server', sessions: [], requestId: uuid() });
  }
  if (m === 'DELETE' && p.startsWith('/api/v1/sessions/'))
    return ok(res, { authority: 'server', revoked: 1, requestId: uuid() });

  if (m === 'GET' && p === '/api/v1/account/security') {
    return ok(res, {
      playerId: state.account ? state.account.id : state.principal.id,
      securityVersion: '1',
      email: null,
      telegram: { linked: false, linkedAt: null, botUsername: null },
      recentPasswordSeconds: 300,
      challengeSeconds: 900,
      passwordEntry: 'WEBSITE_ONLY',
      supportEmail: 'help@nomerokgame.ru',
    });
  }

  if (m === 'GET' && p === '/api/v1/account/nickname-availability') {
    const nick = (url.searchParams.get('nickname') || '').trim();
    const available = nick.length >= 3 && !state.account;
    return ok(res, { available, requestId: uuid() });
  }

  if (m === 'GET' && p === '/api/v1/account/email-policy') {
    return ok(res, {
      domains: ['gmail.com', 'yandex.ru', 'mail.ru', 'bk.ru', 'inbox.ru', 'list.ru'],
    });
  }

  if (m === 'GET' && p === '/api/v1/account/recovery/options') {
    return ok(res, {
      supportEmail: 'help@nomerokgame.ru',
      botUrl: null,
      passwordEntry: 'WEBSITE_ONLY',
      accountEnumeration: false,
    });
  }

  // --- payments ---
  if (m === 'GET' && p === '/api/v1/payments/catalog') {
    return ok(res, {
      catalogVersion: 'M9_CATALOG_V1',
      products: [], rights: {
        auto: { effective: false, unrefundedPaid: false, lifetimeFuelIssued: false },
        double: { effective: false, unrefundedPaid: false, lifetimeFuelIssued: false },
      },
      paymentsEnabled: false, currency: 'RUB', amountUnit: 'kopeck',
      gameAmountUnit: 'game_rub',
      supportEmail: 'help@nomerokgame.ru',
      commercialEmail: 'help@nomerokgame.ru',
      refunds: { requestChannel: 'EMAIL', rightsDecision: 'MANUAL_AFTER_PROVIDER_VERIFICATION' },
      fiscal: { status: 'READY' },
      providerMode: 'TEST',
      asOf: iso(),
    });
  }
  if (m === 'GET' && p === '/api/v1/payments/orders') {
    return ok(res, {
      authority: 'server', contractVersion: 'nomerok.m9.read.v1',
      items: [], total: '0', asOf: iso(), serverObservedAt: iso(),
      snapshotId: uuid(), snapshotExpiresAt: future(60_000), nextCursor: null,
      filter: {}, metadata: { currency: 'RUB', amountUnit: 'kopeck', statesAsOf: iso() },
    });
  }

  // --- read APIs (заглушки) ---
  if (m === 'GET' && p.startsWith('/api/v1/read/')) {
    return ok(res, {
      authority: 'server', contractVersion: 'nomerok.m9.read.v1',
      items: [], total: '0', asOf: iso(), serverObservedAt: iso(),
      snapshotId: uuid(), snapshotExpiresAt: future(60_000), nextCursor: null,
      filter: {}, metadata: {},
    });
  }

  // --- plate formats ---
  if (m === 'GET' && p === '/api/v1/plate-formats') {
    return ok(res, { version: 'v1', countries: [] });
  }

  // --- market / auctions / trades (заглушки) ---
  if (p.startsWith('/api/v1/marketplace/')) {
    return ok(res, {
      authority: 'server', items: [], nextCursor: null,
      publicationStatus: null, serverObservedAt: iso(), requestId: uuid(),
    });
  }
  if (p.startsWith('/api/v1/auctions')) {
    if (/\/bids$/.test(p))
      return ok(res, { authority: 'server', items: [], nextCursor: null, serverObservedAt: iso(), requestId: uuid() });
    return ok(res, {
      authority: 'server', items: [], nextCursor: null,
      serverObservedAt: iso(), requestId: uuid(),
    });
  }
  if (p.startsWith('/api/v1/messages/trades')) {
    return ok(res, { items: [], nextCursor: null, unreadCount: 0 });
  }

  // --- fallback ---
  return fail(res, 'NOT_FOUND', 404);
}

function publishedDoc(key) {
  const titles = {
    terms: 'Пользовательское соглашение',
    privacy: 'Политика обработки персональных данных',
    'personal-data-consent': 'Согласие на обработку персональных данных',
    cookies: 'Политика cookies',
    offer: 'Публичная оферта',
    'analytics-consent': 'Согласие на аналитику',
  };
  if (!titles[key]) return null;
  return {
    key,
    title: titles[key],
    status: 'PUBLISHED',
    version: 'v1',
    contentHash: hex64(),
    content: `# ${titles[key]}\n\nЭто мок-документ. Замени его на настоящий.`,
    revisionDate: iso(),
    publishedAt: iso(),
  };
}

function emptyRewards() {
  const now = iso();
  const far = future(86_400_000);
  return {
    authority: 'server', contractVersion: 'nomerok.m8.v1',
    policyVersion: 'v1', activationVersion: uuid(),
    serverObservedAt: now, stateVersion: '1',
    viewer: { kind: state.principal.mode, canClaim: false },
    calendar: {
      timezone: 'Europe/Moscow',
      day:  { key: now.slice(0, 10), startsAt: now, endsAt: far },
      week: { key: now.slice(0, 10), startsAt: now, endsAt: far },
    },
    projection: { version: '1', asOf: now, freshnessMs: 0, status: 'FRESH', reason: null },
    tasks: { daily: [], weekly: [], legacy: [] },
    completion: {
      periodKey: now.slice(0, 10),
      requiredDailyClaims: [], amountGameRub: '0',
      canClaim: false, unavailableReason: 'NO_OBJECTIVE',
      nextStreakPosition: 1, nextStreakRewardGameRub: '0',
      totalGameRub: '0', claimed: false, claimedAt: null, receiptReference: null,
    },
    streak: {
      enabled: true, position: 0, lastCompletionDay: null,
      nextPosition: 1, nextRewardGameRub: '0', resetOnMiss: true,
      nextResetAt: far, claimedThroughCompletion: true,
    },
    recovery: emptyRecovery(),
  };
}

function emptyRecovery() {
  return {
    enabled: false, policyStatus: 'KEEP', objectiveId: null,
    eligibleRegionCodes: [], openedAt: null, expiresAt: null,
    economicDay: iso().slice(0, 10),
    walletThresholdGameRub: '0', lossThresholdGameRub: '0',
    fullTarget: '0', activeTargetMicroseconds: '0',
    fullProgress: '0', activeMicroseconds: '0',
    fullRemaining: '0', activeRemainingMicroseconds: '0',
    rewardMaximumGameRub: '0', offeredRewardGameRub: null,
    rewardStatus: 'UNAVAILABLE', canClaim: false, claimed: false,
    claimedAt: null, receiptReference: null, paidRewardGameRub: '0',
    expired: false, eligibilityReasons: [], stateVersion: '1', objectiveVersion: null,
  };
}

function emptyReferralProgress() {
  return {
    paidComponents: '0', saves: '0', activeDates: 0,
    qualifiedAt: null, state: 'NOT_ATTRIBUTED', pendingReason: null,
    inviterCreditGameRub: '0', inviteeCreditGameRub: '0', paidAt: null,
  };
}

function framesState() {
  return {
    accountId: state.account ? state.account.id : null,
    registered: !!state.account,
    balanceGameRub: state.balance.amount,
    owned: [], slots: { A: null, B: null }, plates: {}, plateTargets: {},
  };
}

// ---------- статика -----------------------------------------------
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.mjs':  'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml', '.gif': 'image/gif', '.webp': 'image/webp',
  '.ttf':  'font/ttf', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ico':  'image/x-icon', '.txt': 'text/plain; charset=utf-8',
};

function serveStatic(req, res, pathname) {
  // Сначала public/, потом корень (для index.html)
  const tryPaths = [
    path.join(PUBLIC_DIR, pathname),
    path.join(ROOT_DIR, pathname === '/' ? 'index.html' : pathname),
  ];
  for (const file of tryPaths) {
    if (!file.startsWith(ROOT_DIR)) continue;
    try {
      const st = fs.statSync(file);
      if (st.isFile()) {
        const ext = path.extname(file).toLowerCase();
        res.writeHead(200, {
          'content-type': MIME[ext] || 'application/octet-stream',
          'content-length': st.size,
          'cache-control': ext === '.html' ? 'no-store' : 'public, max-age=3600',
        });
        fs.createReadStream(file).pipe(res);
        return true;
      }
    } catch {/* не нашли */}
  }
  return false;
}

// ---------- сервер -------------------------------------------------
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  console.log(`${req.method} ${url.pathname}`);

  try {
    if (url.pathname.startsWith('/api/')) {
      await handleApi(req, res, url);
      return;
    }
    if (serveStatic(req, res, url.pathname)) return;

    // SPA fallback
    const idx = path.join(ROOT_DIR, 'index.html');
    if (fs.existsSync(idx)) {
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
      fs.createReadStream(idx).pipe(res);
      return;
    }
    res.writeHead(404); res.end('Not found');
  } catch (e) {
    console.error('Server error:', e);
    if (!res.headersSent) json(res, 500, {
      error: { code: 'INTERNAL_ERROR', message: String(e && e.message || e), requestId: uuid(), retryable: false },
    });
  }
});

server.listen(PORT, () => {
  console.log(`\n  Номерок (mock) → http://localhost:${PORT}\n`);
  console.log(`  Статика:  ${PUBLIC_DIR}`);
  console.log(`  API:      /api/v1/* (мок)\n`);
});