const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/LegalPublicPage-C2KofyXL.js", "assets/account-BjMYOorF.js", "assets/CookieSettings-DHAj22Ky.js", "assets/game-plate-BmsLgpqE.js", "assets/game-plate-DdySjI9C.css", "assets/player-analytics-DfbapHtq.js", "assets/consent-D_gzmZhX.js", "assets/CookieSettings-BUijLQ59.css", "assets/PlayerApp-DrIbOXsz.js", "assets/SupportContact-yFbfDbAV.js", "assets/SupportContact-CMfWl-ZS.css", "assets/PlayerApp-MM3wXWUQ.css"]))) => i.map(i => d[i]);
import {r as n, c as or, N as k, a as sr, v as Oe, b as Kt, d as Q, j as W, p as Wt, e as cr, _ as Ne, R as Jt} from "./account-BjMYOorF.js";
import {s as ir, a as ce, c as lr} from "./consent-D_gzmZhX.js";
const ie = "nomerokIntent"
  , Ae = "nomerok-checkout-goals-v1"
  , Te = /^[a-f0-9-]{36}$/i;
function Ie() {
    if (!ce())
        return [];
    try {
        const o = JSON.parse(sessionStorage.getItem(Ae) ?? "[]");
        return Array.isArray(o) ? o.filter(i => typeof i == "string" && Te.test(i)).slice(-20) : []
    } catch {
        return []
    }
}
function Ar(o) {
    if (!(!ce() || !Te.test(o)))
        try {
            sessionStorage.setItem(Ae, JSON.stringify([...new Set([...Ie(), o])].slice(-20)))
        } catch {}
}
function Ir() {
    var N;
    const o = new URL(location.href)
      , i = (N = history.state) == null ? void 0 : N[ie]
      , r = i && typeof i == "object" ? i : {}
      , y = o.searchParams.get("paymentOrder")
      , R = o.searchParams.get("ref");
    if (y && Te.test(y)) {
        const O = ce() && r.paymentOrder === y && r.purchaseGoalPending === !0;
        r.paymentOrder = y,
        r.purchaseGoalPending = O || Ie().includes(y)
    }
    R && /^[a-zA-Z0-9_-]{1,128}$/.test(R) && (r.ref = R),
    o.searchParams.has("signIn") && (r.signIn = !0),
    o.searchParams.has("recoveryResult") && (r.recoveryResult = !0);
    const C = /^#\/player\/([a-f0-9-]{36})(?:\?plate=([a-f0-9-]{36}))?$/i.exec(o.hash);
    C && (r.profileId = C[1],
    C[2] ? r.plateId = C[2] : delete r.plateId);
    const M = o.searchParams.get("screen");
    return o.search = "",
    o.hash = "",
    M && /^[a-z-]{1,40}$/.test(M) && o.searchParams.set("screen", M),
    history.replaceState({
        ...history.state,
        [ie]: r
    }, "", o.pathname + o.search),
    r
}
function me() {
    var o;
    return ((o = history.state) == null ? void 0 : o[ie]) ?? {}
}
function _r(o, i) {
    const r = {
        ...me(),
        profileId: o,
        plateId: i
    };
    history.replaceState({
        ...history.state,
        [ie]: r
    }, "")
}
function Yt(o) {
    const i = {
        ...me()
    };
    delete i[o],
    history.replaceState({
        ...history.state,
        [ie]: i
    }, "")
}
function Lr(o) {
    const i = me();
    if (!ce() || i.paymentOrder !== o || i.purchaseGoalPending !== !0)
        return !1;
    Yt("purchaseGoalPending");
    const r = Ie();
    if (r.includes(o))
        try {
            sessionStorage.setItem(Ae, JSON.stringify(r.filter(y => y !== o)))
        } catch {
            return !1
        }
    return !0
}
function zt() {
    try {
        sessionStorage.removeItem(Ae),
        Yt("purchaseGoalPending")
    } catch {}
}
window.addEventListener("nomerok-analytics-reset", zt);
ir( () => {
    if (lr() && !ce())
        zt();
    else if (ce()) {
        const o = me();
        o.paymentOrder && Ie().includes(o.paymentOrder) && history.replaceState({
            ...history.state,
            [ie]: {
                ...o,
                purchaseGoalPending: !0
            }
        }, "")
    }
}
);
const Xt = "plate-collector-v2"
  , Zt = "plate-collector-v2-m2-balance-notice-seen"
  , ur = [];
function dr(o) {
    if (typeof o != "object" || o === null)
        return !1;
    const i = o;
    return Array.isArray(i.plates) && Array.isArray(i.listings) && Array.isArray(i.sales) && Array.isArray(i.bots) && typeof i.draft == "object" && i.draft !== null
}
function fr() {
    return {
        plates: [],
        listings: [],
        sales: [],
        bots: [],
        botPlates: [],
        lastDailyBonus: null,
        draft: {
            subjectId: null,
            code: null,
            letters: null,
            digits: null,
            spunDigits: !1,
            spunLetters: !1
        }
    }
}
function yr() {
    try {
        const o = localStorage.getItem(Xt);
        if (o !== null) {
            const i = JSON.parse(o);
            if (dr(i)) {
                const r = i
                  , y = Object.prototype.hasOwnProperty.call(r, "balance")
                  , {balance: R, ...C} = r;
                return {
                    discardedLegacyBalance: y,
                    state: {
                        ...C,
                        draft: {
                            ...C.draft,
                            spunDigits: !!C.draft.spunDigits,
                            spunLetters: !!C.draft.spunLetters
                        }
                    }
                }
            }
        }
    } catch {}
    return {
        state: fr(),
        discardedLegacyBalance: !1
    }
}
function mr() {
    try {
        return localStorage.getItem(Zt) === "1"
    } catch {
        return !1
    }
}
function Ve(o, i) {
    const r = /^(0|[1-9][0-9]*)$/;
    if (o.asset !== "GAME_RUB" || !r.test(o.amount) || !r.test(o.version) || !/^[0-9a-f]{16}$/.test(i))
        throw new Error("Invalid authoritative balance payload");
    return {
        status: "ready",
        amountGameRub: o.amount,
        version: o.version,
        configHash: i
    }
}
function hr(o) {
    if (o.authority !== "server")
        throw new Error("Invalid authoritative bootstrap payload");
    return Ve(o.balance, o.economy.configHash)
}
function wr(o) {
    return o instanceof k && ["LEGAL_CONSENT_REQUIRED", "M11B_LEGAL_CONSENT_REQUIRED"].includes(o.envelope.error.code) ? (queueMicrotask( () => window.dispatchEvent(new Event("nomerok-legal-required"))),
    "Подтверди текущие документы в профиле. Вход и имущество сохранены.") : o instanceof k ? o.envelope.error.message : "Не удалось синхронизировать игровое состояние. Повторите попытку."
}
function X(o, i={}) {
    return o instanceof k && ["LEGAL_CONSENT_REQUIRED", "M11B_LEGAL_CONSENT_REQUIRED"].includes(o.envelope.error.code) ? (queueMicrotask( () => window.dispatchEvent(new Event("nomerok-legal-required"))),
    "Подтверди текущие документы в профиле. Вход и имущество сохранены.") : Wt(o, i)
}
function Ce(o, i={}) {
    return Wt(o, {
        action: "market",
        ...i
    })
}
const er = n.createContext(null);
function pr({children: o}) {
    const i = n.useRef(!1)
      , r = n.useMemo( () => or(window.location.origin, {
        canRetryTransport: () => !i.current
    }), [])
      , [y] = n.useState(yr)
      , [R,C] = n.useState(y.state)
      , M = n.useRef(y.state)
      , [N,O] = n.useState(null)
      , V = n.useRef(null)
      , [P,h] = n.useState(null)
      , [b,q] = n.useState(null)
      , F = n.useRef(null)
      , [s,w] = n.useState(null)
      , [S,_] = n.useState(null)
      , U = n.useRef(null)
      , [xe,he] = n.useState(!1)
      , [qe,le] = n.useState(null)
      , T = n.useRef(0)
      , B = n.useRef(!1)
      , [_e,$] = n.useState("loading")
      , [Be,Y] = n.useState(null)
      , [we,nr] = n.useState( () => y.discardedLegacyBalance && !mr())
      , [He,H] = n.useState({
        status: "loading",
        amountGameRub: null,
        version: null,
        configHash: null
    })
      , L = n.useRef(0)
      , x = n.useRef(0)
      , m = n.useRef(0)
      , [j,ue] = n.useState({
        id: null,
        nick: null,
        mode: "loading"
    })
      , [je,Le] = n.useState(null)
      , [pe,de] = n.useState([])
      , [Fe,Ue] = n.useState(null)
      , [$e,Pe] = n.useState(null)
      , [Ke,Je] = n.useState(null)
      , [Qe,ve] = n.useState("idle")
      , [We,fe] = n.useState("idle")
      , [Ye,ge] = n.useState("idle")
      , [ze,z] = n.useState(null)
      , [Xe,Ze] = n.useState(0)
      , Ee = n.useRef(0)
      , ke = n.useRef(0)
      , Re = n.useRef(0)
      , ye = n.useRef(new Map);
    n.useCallback(e => {
        const t = e(M.current);
        return M.current = t,
        C(t),
        t
    }
    , []);
    const Z = n.useCallback(e => {
        var t, a, c, l;
        H(hr(e)),
        Le(e.principal.id),
        ue({
            id: ((t = e.account) == null ? void 0 : t.id) ?? null,
            nick: ((a = e.account) == null ? void 0 : a.nickname) ?? null,
            ...(c = e.account) != null && c.avatarColor ? {
                avatarColor: e.account.avatarColor
            } : {},
            ...(l = e.account) != null && l.profileVersion ? {
                profileVersion: e.account.profileVersion
            } : {},
            mode: e.principal.mode
        })
    }
    , [])
      , et = n.useCallback(e => {
        if (e.authority !== "server")
            throw new Error("Invalid authoritative game payload");
        V.current = e,
        O(e),
        H(Ve(e.balance, e.economy.configHash)),
        $("ready"),
        Y(null)
    }
    , [])
      , ee = n.useCallback(e => {
        if (e.authority !== "server")
            throw new Error("Invalid authoritative R2.2 game payload");
        F.current = e,
        q(e),
        H(Ve(e.balance, e.economy.configHash)),
        $("ready"),
        Y(null)
    }
    , [])
      , te = n.useCallback( () => {
        const e = ++T.current;
        return B.current = !0,
        he(!1),
        le(null),
        e
    }
    , [])
      , tt = n.useCallback( (e, t) => {
        e === T.current && (U.current = t,
        _(t),
        B.current = !1)
    }
    , [])
      , K = n.useCallback(e => {
        e === T.current && (B.current = !1)
    }
    , [])
      , re = n.useCallback(e => {
        r.collectionR2().then(t => tt(e, t)).catch(t => {
            e === T.current && (K(e),
            le(X(t, {
                phase: "read",
                action: "collection"
            })))
        }
        )
    }
    , [r, tt, K])
      , D = n.useCallback(async e => {
        var d;
        if (i.current)
            return {
                ok: !1,
                error: "Страница закрыта."
            };
        const t = ++L.current
          , a = ++x.current
          , c = m.current
          , l = te();
        $("loading"),
        Y(null),
        H({
            status: "loading",
            amountGameRub: null,
            version: null,
            configHash: null
        });
        try {
            const u = await r.bootstrap();
            if (t !== L.current || a !== x.current || c !== m.current)
                return {
                    ok: !1,
                    error: "Аккаунт или загрузка изменились."
                };
            if (e !== void 0 && ((d = u.account) == null ? void 0 : d.id) !== e)
                throw new Error("Аккаунт изменился.");
            Z(u);
            const [E,g] = await Promise.all([r.gameR2Config(), r.gameR2State()]);
            if (t !== L.current || a !== x.current || c !== m.current)
                return {
                    ok: !1,
                    error: "Аккаунт или загрузка изменились."
                };
            if (E.authority !== "server" || E.economyConfigHash !== g.economy.configHash || u.economy.configHash !== g.economy.configHash)
                throw new Error("Authoritative economy versions disagree");
            return Z(u),
            w(E),
            ee(g),
            re(l),
            {
                ok: !0
            }
        } catch (u) {
            if (t !== L.current || a !== x.current || c !== m.current)
                return {
                    ok: !1,
                    error: "Аккаунт или загрузка изменились."
                };
            if (K(l),
            $("error"),
            Y(X(u, {
                phase: "read"
            })),
            H({
                status: "error",
                amountGameRub: null,
                version: null,
                configHash: null
            }),
            u instanceof k && (u.status === 401 || u.envelope.error.code === "GUEST_ALREADY_CONVERTED" || u.envelope.error.code === "SESSION_EXPIRED")) {
                V.current = null,
                O(null),
                F.current = null,
                q(null),
                U.current = null,
                _(null),
                Le(null);
                const g = u instanceof k && u.envelope.error.code === "AUTHENTICATION_REQUIRED";
                ue({
                    id: null,
                    nick: null,
                    mode: g ? "new_guest" : "reauth_required"
                })
            } else
                ue(g => g.mode === "loading" ? {
                    ...g,
                    mode: "error"
                } : g);
            return {
                ok: !1,
                error: X(u)
            }
        }
    }
    , [r, Z, ee, te, K, re])
      , rt = n.useCallback( () => {
        D()
    }
    , [D])
      , f = n.useCallback(async () => {
        if (i.current)
            return;
        const e = L.current
          , t = ++x.current
          , a = te();
        try {
            const c = await r.gameR2State();
            if (e !== L.current || t !== x.current)
                return;
            ee(c),
            re(a)
        } catch (c) {
            if (e !== L.current || t !== x.current)
                return;
            throw K(a),
            $("error"),
            H({
                status: "error",
                amountGameRub: null,
                version: null,
                configHash: null
            }),
            Y(X(c, {
                phase: "read"
            })),
            c
        }
    }
    , [r, ee, te, K, re]);
    n.useEffect( () => {
        sr();
        const e = () => {
            i.current = !0,
            L.current += 1,
            T.current += 1,
            B.current = !1
        }
          , t = a => {
            i.current = !1,
            a.persisted && D()
        }
        ;
        return window.addEventListener("beforeunload", e),
        window.addEventListener("pagehide", e),
        window.addEventListener("pageshow", t),
        D(),
        () => {
            window.removeEventListener("beforeunload", e),
            window.removeEventListener("pagehide", e),
            window.removeEventListener("pageshow", t),
            L.current += 1,
            T.current += 1,
            B.current = !1
        }
    }
    , [D]),
    n.useEffect( () => {
        try {
            localStorage.setItem(Xt, JSON.stringify(R))
        } catch {}
    }
    , [R]),
    n.useEffect( () => {
        if (we)
            try {
                localStorage.setItem(Zt, "1")
            } catch {}
    }
    , [we]);
    const G = n.useCallback( () => {
        const e = V.current;
        if (e === null)
            throw new Error("Authoritative game state is unavailable");
        return e
    }
    , [])
      , A = n.useCallback(e => (et(e.state),
    e), [et])
      , nt = n.useCallback(async (e, t=!1, a="A") => {
        const l = G().slots[a];
        if (l === null)
            throw new Error("Authoritative game slot is unavailable");
        try {
            return A(await r.selectRegion({
                slot: a,
                subjectId: e.subjectId,
                regionCode: e.code,
                expectedDraftVersion: l.version,
                ...t ? {
                    discardCurrentResult: !0
                } : {}
            }))
        } catch (d) {
            throw d instanceof k && d.envelope.error.code === "STALE_VERSION" && await f(),
            d
        }
    }
    , [r, A, f, G])
      , at = n.useCallback(async (e, t="A") => {
        const c = G().slots[t];
        if (c === null)
            throw new Error("Authoritative game slot is unavailable");
        try {
            return A(await r.spin({
                slot: t,
                axis: e,
                expectedDraftVersion: c.version
            }))
        } catch (l) {
            throw l instanceof k && l.envelope.error.code === "STALE_VERSION" && await f(),
            l
        }
    }
    , [r, A, f, G])
      , ot = n.useCallback(async (e="A") => {
        const a = G().slots[e];
        if (a === null)
            throw new Error("Authoritative game slot is unavailable");
        try {
            return A(await r.saveDraft({
                slot: e,
                expectedDraftVersion: a.version
            }))
        } catch (c) {
            throw c instanceof k && c.envelope.error.code === "STALE_VERSION" && await f(),
            c
        }
    }
    , [r, A, f, G])
      , st = n.useCallback(async () => {
        const e = G();
        try {
            return A(await r.saveSavedDraft({
                expectedDraftVersion: e.slots.A.version
            }))
        } catch (t) {
            throw t instanceof k && t.envelope.error.code === "STALE_VERSION" && await f(),
            t
        }
    }
    , [r, A, f, G])
      , ct = n.useCallback(async () => {
        const e = G();
        if (e.savedDraft === null)
            throw new Error("Saved Draft is unavailable");
        try {
            return A(await r.resumeSavedDraft({
                expectedDraftVersion: e.slots.A.version,
                expectedSavedDraftVersion: e.savedDraft.version
            }))
        } catch (t) {
            throw t instanceof k && t.envelope.error.code === "STALE_VERSION" && await f(),
            t
        }
    }
    , [r, A, f, G])
      , it = n.useCallback(async () => {
        const e = G();
        if (e.savedDraft === null)
            throw new Error("Saved Draft is unavailable");
        try {
            return A(await r.discardSavedDraft({
                expectedSavedDraftVersion: e.savedDraft.version
            }))
        } catch (t) {
            throw t instanceof k && t.envelope.error.code === "STALE_VERSION" && await f(),
            t
        }
    }
    , [r, A, f, G])
      , lt = n.useCallback(async e => {
        try {
            return A(await r.autoCycle(e))
        } catch (t) {
            throw t instanceof k && t.envelope.error.code === "STALE_VERSION" && await f(),
            t
        }
    }
    , [r, A, f])
      , ut = n.useCallback(async () => {
        try {
            return A(await r.purchaseDoubleWithGameRub())
        } catch (e) {
            throw e instanceof k && e.envelope.error.code === "STALE_VERSION" && await f(),
            e
        }
    }
    , [r, A, f])
      , dt = n.useCallback(async e => {
        throw new Error("Локальные квитанции недоступны. Используйте серверный каталог покупок.")
    }
    , [])
      , ft = n.useCallback(async (e, t) => {
        try {
            return A(await r.instantSell(e, {
                expectedVersion: t
            }))
        } catch (a) {
            throw a instanceof k && a.envelope.error.code === "STALE_VERSION" && await f(),
            a
        }
    }
    , [r, A, f])
      , I = n.useCallback( () => {
        const e = F.current;
        if (e === null)
            throw new Error("Authoritative R2.2 game state is unavailable");
        return e
    }
    , [])
      , p = n.useCallback(async e => (await f(),
    e), [f])
      , v = n.useCallback(async e => {
        throw e instanceof k && ["STALE_VERSION", "PRICING_POLICY_CHANGED", "LISTING_UNAVAILABLE", "PLATE_LOCKED"].includes(e.envelope.error.code) && await f().catch( () => {}
        ),
        e
    }
    , [f])
      , yt = n.useCallback(async (e, t=!1, a="A") => {
        const c = I().slots[a];
        if (c === null)
            throw new Error("Authoritative R2.2 slot is unavailable");
        try {
            return await p(await r.selectR2Region({
                slot: a,
                subjectId: e.subjectId,
                regionCode: e.code,
                expectedDraftVersion: c.version,
                ...t ? {
                    discardCurrentResult: !0
                } : {}
            }))
        } catch (l) {
            return v(l)
        }
    }
    , [r, p, v, I])
      , mt = n.useCallback(async (e, t="A") => {
        const a = I().slots[t];
        if (a === null)
            throw new Error("Authoritative R2.2 slot is unavailable");
        try {
            return await p(await r.spinR2({
                slot: t,
                axis: e,
                expectedDraftVersion: a.version,
                ...a.pricingPolicyVersion ? {
                    expectedPricingPolicyVersion: a.pricingPolicyVersion
                } : {}
            }))
        } catch (c) {
            return v(c)
        }
    }
    , [r, p, v, I])
      , ht = n.useCallback(async (e="A") => {
        const t = I().slots[e];
        if (t === null)
            throw new Error("Authoritative R2.2 slot is unavailable");
        try {
            return await p(await r.saveR2({
                slot: e,
                expectedDraftVersion: t.version
            }))
        } catch (a) {
            return v(a)
        }
    }
    , [r, p, v, I])
      , wt = n.useCallback(async (e="A") => {
        const t = I().slots[e];
        if (t === null)
            throw new Error("Authoritative R2.2 slot is unavailable");
        try {
            return await p(await r.instantSellDraftR2({
                slot: e,
                expectedDraftVersion: t.version
            }))
        } catch (a) {
            return v(a)
        }
    }
    , [r, p, v, I])
      , pt = n.useCallback(async e => {
        try {
            return await p(await r.autoCycleR2(e))
        } catch (t) {
            return v(t)
        }
    }
    , [r, p, v])
      , vt = n.useCallback(async () => {
        var c;
        const e = U.current
          , t = (e == null ? void 0 : e.nextCursor) ?? null;
        if (t === null || B.current)
            return;
        const a = T.current;
        B.current = !0,
        he(!0),
        le(null);
        try {
            const l = await r.collectionR2({
                cursor: t,
                limit: "20"
            })
              , d = U.current;
            if (a !== T.current || (d == null ? void 0 : d.nextCursor) !== t)
                return;
            const u = new Map(d.items.map(g => [g.plateId, g]));
            for (const g of l.items)
                u.set(g.plateId, g);
            const E = {
                ...l,
                items: [...u.values()]
            };
            U.current = E,
            _(E)
        } catch (l) {
            a === T.current && ((c = U.current) == null ? void 0 : c.nextCursor) === t && le(X(l, {
                phase: "read",
                action: "collection"
            }))
        } finally {
            a === T.current && (B.current = !1,
            he(!1))
        }
    }
    , [r])
      , gt = n.useCallback(async () => {
        try {
            return await p(await r.expandCollectionR2())
        } catch (e) {
            return v(e)
        }
    }
    , [r, p, v])
      , Et = n.useCallback(async (e, t, a="A") => {
        const c = I().slots[a];
        if (c === null)
            throw new Error("Authoritative R2.2 slot is unavailable");
        try {
            return await p(await r.openOwnedEditR2(e, {
                slot: a,
                expectedPlateVersion: t,
                expectedDraftVersion: c.version
            }))
        } catch (l) {
            return v(l)
        }
    }
    , [r, p, v, I])
      , kt = n.useCallback(async (e="A") => {
        const t = I().slots[e];
        if (t === null)
            throw new Error("Authoritative R2.2 slot is unavailable");
        try {
            return await p(await r.exitOwnedEditR2({
                slot: e,
                expectedDraftVersion: t.version
            }))
        } catch (a) {
            return v(a)
        }
    }
    , [r, p, v, I])
      , Rt = n.useCallback(async (e="A") => {
        const t = I().slots[e];
        if (t === null)
            throw new Error("Authoritative R2.2 slot is unavailable");
        try {
            return await p(await r.discardOwnedEditReplacementR2({
                slot: e,
                expectedDraftVersion: t.version
            }))
        } catch (a) {
            return v(a)
        }
    }
    , [r, p, v, I])
      , bt = n.useCallback(async (e, t) => {
        try {
            return await p(await r.liquidatePlateR2(e, {
                expectedPlateVersion: t
            }))
        } catch (a) {
            return v(a)
        }
    }
    , [r, p, v])
      , St = n.useCallback(async () => {
        const e = I();
        if (e.legacyPartial === null)
            throw new Error("Legacy partial recovery is unavailable");
        try {
            return await p(await r.recoverLegacyPartialR2({
                expectedDraftVersion: e.slots.A.version,
                expectedSavedDraftVersion: e.legacyPartial.expectedSavedDraftVersion
            }))
        } catch (t) {
            return v(t)
        }
    }
    , [r, p, v, I])
      , Ct = n.useCallback(async () => {
        const e = I();
        if (e.legacyPartial === null)
            throw new Error("Legacy partial recovery is unavailable");
        try {
            return await p(await r.discardLegacyPartialR2({
                expectedSavedDraftVersion: e.legacyPartial.expectedSavedDraftVersion
            }))
        } catch (t) {
            return v(t)
        }
    }
    , [r, p, v, I])
      , At = n.useCallback(async (e={}, t=!1) => {
        const a = ++Ee.current;
        t || ve("loading"),
        z(null);
        try {
            const c = await r.marketBrowse(e);
            if (a !== Ee.current)
                return;
            Ue(l => {
                if (!t || l === null)
                    return c;
                const d = new Map(l.items.map(u => [u.id, u]));
                for (const u of c.items)
                    d.set(u.id, u);
                return {
                    ...c,
                    items: [...d.values()]
                }
            }
            ),
            ve("ready")
        } catch (c) {
            if (a !== Ee.current)
                return;
            throw ve(typeof navigator < "u" && navigator.onLine === !1 ? "offline" : "error"),
            z(Ce(c, {
                phase: "read"
            })),
            c
        }
    }
    , [r])
      , It = n.useCallback(async (e, t=!1) => {
        const a = ++Re.current;
        t || ge("loading"),
        z(null);
        try {
            const c = await r.marketHistory(e === void 0 ? {} : {
                cursor: e
            });
            if (a !== Re.current)
                return;
            Je(l => {
                if (!t || l === null)
                    return c;
                const d = new Map(l.items.map(u => [u.id, u]));
                for (const u of c.items)
                    d.set(u.id, u);
                return {
                    ...c,
                    items: [...d.values()]
                }
            }
            ),
            ge("ready")
        } catch (c) {
            if (a !== Re.current)
                return;
            throw ge(typeof navigator < "u" && navigator.onLine === !1 ? "offline" : "error"),
            z(Ce(c, {
                phase: "read"
            })),
            c
        }
    }
    , [r])
      , _t = n.useCallback(async () => {
        const e = ++ke.current;
        if (j.mode !== "registered") {
            Pe(null),
            fe("idle");
            return
        }
        fe("loading"),
        z(null);
        try {
            const t = await r.marketOwn();
            if (e !== ke.current)
                return;
            Pe(t),
            fe("ready")
        } catch (t) {
            if (e !== ke.current)
                return;
            throw fe(typeof navigator < "u" && navigator.onLine === !1 ? "offline" : "error"),
            z(Ce(t, {
                phase: "read"
            })),
            t
        }
    }
    , [j.mode, r])
      , Lt = n.useCallback( (e, t) => r.marketPublicationPreview({
        plateId: e,
        askGameRub: t
    }), [r])
      , ne = n.useCallback(e => {
        const t = ye.current.get(e);
        if (t !== void 0)
            return t;
        const a = crypto.randomUUID();
        return ye.current.set(e, a),
        a
    }
    , [])
      , ae = n.useCallback(async e => {
        ye.current.delete(e),
        Ze(t => t + 1),
        await f().catch( () => {}
        )
    }
    , [f])
      , oe = n.useCallback(async (e, t) => {
        throw t instanceof k && t.envelope.error.retryable !== !0 && ye.current.delete(e),
        t instanceof k && ["STALE_VERSION", "LISTING_UNAVAILABLE"].includes(t.envelope.error.code) && (await f().catch( () => {}
        ),
        Ze(a => a + 1)),
        t
    }
    , [f])
      , Pt = n.useCallback(async (e, t, a) => {
        const c = `list:${e}:${t}:${a}`;
        try {
            const l = await r.marketList({
                plateId: e,
                expectedPlateVersion: t,
                askGameRub: a
            }, {
                idempotencyKey: ne(c)
            });
            return await ae(c),
            l
        } catch (l) {
            return oe(c, l)
        }
    }
    , [r, ae, oe, ne])
      , Mt = n.useCallback(async e => {
        const t = `buy:${e.id}:${e.version}`;
        try {
            const a = await r.marketBuy(e.id, {
                expectedListingVersion: e.version
            }, {
                idempotencyKey: ne(t)
            });
            return await ae(t),
            a
        } catch (a) {
            return oe(t, a)
        }
    }
    , [r, ae, oe, ne])
      , Ot = n.useCallback(async e => {
        const t = `delist:${e.id}:${e.version}`;
        try {
            const a = await r.marketDelist(e.id, {
                expectedListingVersion: e.version
            }, {
                idempotencyKey: ne(t)
            });
            return await ae(t),
            a
        } catch (a) {
            return oe(t, a)
        }
    }
    , [r, ae, oe, ne])
      , se = n.useCallback(async (e=m.current, t) => {
        var d, u;
        if (e !== m.current)
            throw new Error("Вход изменился. Обнови состояние аккаунта.");
        const a = ++L.current
          , c = ++x.current
          , l = te();
        $("loading"),
        H({
            status: "loading",
            amountGameRub: null,
            version: null,
            configHash: null
        });
        try {
            const E = await r.bootstrap();
            if (e !== m.current || a !== L.current || c !== x.current)
                throw new Error("Аккаунт изменился.");
            if (t !== void 0 && ((d = E.account) == null ? void 0 : d.id) !== t)
                throw new Error("Аккаунт изменился.");
            Z(E);
            const [g,Me] = await Promise.all([r.gameR2Config(), r.gameR2State()]);
            if (e !== m.current || a !== L.current || c !== x.current)
                throw new Error("Вход изменился. Обнови состояние аккаунта.");
            if (t !== void 0 && ((u = E.account) == null ? void 0 : u.id) !== t)
                throw new Error("Вход изменился в другой вкладке. Обнови состояние аккаунта.");
            if (g.authority !== "server" || g.economyConfigHash !== Me.economy.configHash || E.economy.configHash !== Me.economy.configHash)
                throw new Error("Authoritative economy versions disagree");
            Z(E),
            w(g),
            U.current = null,
            _(null),
            ee(Me),
            re(l)
        } catch (E) {
            throw e === m.current && a === L.current && c === x.current && (K(l),
            $("error"),
            Y(X(E, {
                phase: "read"
            })),
            H({
                status: "error",
                amountGameRub: null,
                version: null,
                configHash: null
            })),
            E
        }
    }
    , [r, Z, ee, te, K, re])
      , Nt = n.useCallback(async (e, t, a) => {
        var u;
        const c = Oe(e) ?? Kt(t);
        if (c !== null)
            return {
                ok: !1,
                error: c
            };
        window.dispatchEvent(new Event("nomerok-identity-transition"));
        const l = ++m.current;
        L.current += 1;
        let d;
        try {
            const E = me().ref
              , g = await r.register({
                nickname: e.trim(),
                password: t,
                ...a ? {
                    legalConsents: a
                } : {},
                ...E && E.length <= 200 ? {
                    referralCode: E
                } : {}
            });
            return ((u = g.referralBinding) == null ? void 0 : u.status) === "REJECTED" && window.dispatchEvent(new CustomEvent("nomerok-referral-rejected")),
            d = g.account.id,
            await se(l, g.account.id),
            {
                ok: !0
            }
        } catch (E) {
            return {
                ok: !1,
                error: Q(E),
                ...d && l === m.current ? {
                    identityAccountId: d
                } : {}
            }
        }
    }
    , [r, se])
      , Dt = n.useCallback(async (e, t) => {
        const a = Oe(e, !0);
        if (a !== null)
            return {
                ok: !1,
                error: a
            };
        window.dispatchEvent(new Event("nomerok-identity-transition"));
        const c = ++m.current;
        L.current += 1;
        let l;
        try {
            const d = await r.login({
                nickname: e.trim(),
                password: t
            });
            return l = d.account.id,
            await se(c, d.account.id),
            {
                ok: !0
            }
        } catch (d) {
            return {
                ok: !1,
                error: Q(d),
                ...l && c === m.current ? {
                    identityAccountId: l
                } : {}
            }
        }
    }
    , [r, se])
      , J = n.useCallback( (e="signed_out") => {
        m.current += 1,
        L.current += 1,
        T.current += 1,
        B.current = !1,
        Ee.current += 1,
        ke.current += 1,
        Re.current += 1,
        ye.current.clear(),
        Le(null),
        ue({
            id: null,
            nick: null,
            mode: e
        }),
        de([]),
        Ue(null),
        Pe(null),
        Je(null),
        ve("idle"),
        fe("idle"),
        ge("idle"),
        z(null),
        V.current = null,
        O(null),
        F.current = null,
        q(null),
        w(null),
        U.current = null,
        _(null),
        he(!1),
        le(null),
        $(e === "loading" ? "loading" : "error"),
        Y(null),
        H({
            status: e === "loading" ? "loading" : "error",
            amountGameRub: null,
            version: null,
            configHash: null
        })
    }
    , [])
      , Gt = n.useCallback(async () => {
        window.dispatchEvent(new Event("nomerok-identity-transition"));
        const e = ++m.current;
        try {
            return await r.logout(),
            e !== m.current ? {
                ok: !1,
                error: "Аккаунт изменился."
            } : (J("loading"),
            window.dispatchEvent(new Event("nomerok-logout-complete")),
            await D(),
            {
                ok: !0
            })
        } catch (t) {
            return {
                ok: !1,
                error: Q(t)
            }
        }
    }
    , [r, J, D])
      , Vt = n.useCallback(async () => {
        window.dispatchEvent(new Event("nomerok-identity-transition"));
        const e = ++m.current;
        try {
            return await r.logoutAll(),
            e !== m.current ? {
                ok: !1,
                error: "Аккаунт изменился."
            } : (J("loading"),
            window.dispatchEvent(new Event("nomerok-logout-complete")),
            await D(),
            {
                ok: !0
            })
        } catch (t) {
            return {
                ok: !1,
                error: Q(t)
            }
        }
    }
    , [r, J, D])
      , Tt = n.useCallback(async () => {
        window.dispatchEvent(new Event("nomerok-identity-transition"));
        const e = ++m.current;
        L.current += 1;
        try {
            try {
                await r.bootstrap()
            } catch (t) {
                if (!(t instanceof k) || t.status !== 401)
                    throw t;
                if (e !== m.current)
                    return {
                        ok: !1,
                        error: "Аккаунт изменился."
                    };
                await r.bootstrapGuest({
                    continueAsGuest: !0
                })
            }
            return e !== m.current ? {
                ok: !1,
                error: "Аккаунт изменился."
            } : (J("loading"),
            window.dispatchEvent(new CustomEvent("nomerok-logout-complete",{
                detail: {
                    reason: "guest-continuation"
                }
            })),
            await D())
        } catch (t) {
            return {
                ok: !1,
                error: Q(t)
            }
        }
    }
    , [r, J, D])
      , be = n.useCallback(async e => {
        const t = m.current;
        try {
            const a = await r.updateProfile({
                ...e,
                ...j.profileVersion ? {
                    expectedProfileVersion: j.profileVersion
                } : {}
            });
            return t !== m.current ? {
                ok: !1,
                error: "Аккаунт изменился."
            } : (ue({
                id: a.account.id,
                nick: a.account.nickname,
                mode: "registered",
                ...a.account.avatarColor ? {
                    avatarColor: a.account.avatarColor
                } : {},
                ...a.account.profileVersion ? {
                    profileVersion: a.account.profileVersion
                } : {}
            }),
            {
                ok: !0
            })
        } catch (a) {
            return {
                ok: !1,
                error: Q(a)
            }
        }
    }
    , [r, j.profileVersion])
      , xt = n.useCallback(async e => {
        const t = Oe(e);
        return t ? {
            ok: !1,
            error: t
        } : be({
            nickname: e.trim()
        })
    }
    , [be])
      , qt = n.useCallback(e => be({
        avatarColor: e
    }), [be])
      , Bt = n.useCallback(async (e, t, a) => {
        const c = Kt(t);
        if (c !== null)
            return {
                ok: !1,
                error: c
            };
        const l = m.current
          , d = () => l === m.current;
        try {
            return await r.changePassword({
                currentPassword: e,
                newPassword: t
            }, {
                idempotencyKey: a,
                isCurrent: d
            }),
            d() ? (await se(l).catch( () => {}
            ),
            d() && de([]),
            {
                ok: !0
            }) : {
                ok: !1,
                error: "Вход изменился. Результат доступен в исходном аккаунте.",
                uncertain: !0
            }
        } catch (u) {
            return {
                ok: !1,
                error: Q(u),
                uncertain: !(u instanceof k) || u.unknownAfterTransportLoss || u.status >= 500 || [408, 429].includes(u.status)
            }
        }
    }
    , [r, se])
      , Se = n.useCallback(async () => {
        if (j.mode !== "registered") {
            de([]);
            return
        }
        try {
            de((await r.sessions()).sessions)
        } catch {
            de([])
        }
    }
    , [j.mode, r])
      , Ht = n.useCallback(async e => {
        try {
            return await r.revokeSession(e),
            pe.some(t => t.id === e && t.current) ? J() : await Se(),
            {
                ok: !0
            }
        } catch (t) {
            return {
                ok: !1,
                error: Q(t)
            }
        }
    }
    , [r, Se, pe, J])
      , jt = n.useCallback( () => nr(!1), [])
      , Ft = (b == null ? void 0 : b.slots.A.digits) !== null || (b == null ? void 0 : b.slots.A.letters) !== null
      , Ut = _e === "ready" && b !== null && s !== null
      , $t = (s == null ? void 0 : s.regionCatalogue.map(e => ({
        subjectId: e.subjectId,
        regionCode: e.regionCode,
        multiplier: 1,
        componentSpinPriceGameRub: Number(e.componentSpinPriceGameRub)
    }))) ?? ur
      , ar = n.useMemo( () => ({
        api: r,
        m9: r.m9,
        state: R,
        game: N,
        gameConfig: P,
        r2Game: b,
        r2GameConfig: s,
        r2Collection: S,
        r2CollectionLoadingMore: xe,
        r2CollectionPageError: qe,
        gameStatus: _e,
        gameError: Be,
        serverBalance: He,
        refreshServerBalance: rt,
        prepareGame: D,
        refreshGame: f,
        balanceMigrationNotice: we,
        dismissBalanceMigrationNotice: jt,
        moneyCommandsReady: Ut,
        account: j,
        principalId: je,
        sessions: pe,
        draftLocked: Ft,
        regionCatalogue: $t,
        selectRegion: nt,
        spin: at,
        savePlate: ot,
        saveSavedDraft: st,
        resumeSavedDraft: ct,
        discardSavedDraft: it,
        autoCycle: lt,
        purchaseDoubleWithGameRub: ut,
        confirmLocalFeatureReceipt: dt,
        instantSell: ft,
        selectR2Region: yt,
        spinR2: mt,
        saveR2: ht,
        sellDraftR2: wt,
        autoCycleR2: pt,
        loadNextR2Collection: vt,
        expandCollectionR2: gt,
        openOwnedEditR2: Et,
        exitOwnedEditR2: kt,
        discardOwnedEditR2: Rt,
        liquidatePlateR2: bt,
        recoverLegacyPartialR2: St,
        discardLegacyPartialR2: Ct,
        marketBrowse: Fe,
        marketOwn: $e,
        marketHistory: Ke,
        marketStatus: Qe,
        marketOwnStatus: We,
        marketHistoryStatus: Ye,
        marketError: ze,
        marketRevision: Xe,
        loadMarket: At,
        loadMarketHistory: It,
        loadMarketOwn: _t,
        previewMarketPublication: Lt,
        listMarketPlate: Pt,
        buyMarketListing: Mt,
        delistMarketListing: Ot,
        register: Nt,
        login: Dt,
        logout: Gt,
        logoutAll: Vt,
        continueAsGuest: Tt,
        refreshSessions: Se,
        revokeSession: Ht,
        changeNick: xt,
        changeAvatarColor: qt,
        changePassword: Bt
    }), [r, R, N, P, b, s, S, xe, qe, _e, Be, He, rt, f, we, jt, Ut, j, je, pe, Ft, $t, nt, at, ot, st, ct, it, lt, ut, dt, ft, yt, mt, ht, wt, pt, vt, gt, Et, kt, Rt, bt, St, Ct, Fe, $e, Ke, Qe, We, Ye, ze, Xe, At, It, _t, Lt, Pt, Mt, Ot, Nt, Dt, Gt, Vt, Tt, Se, Ht, xt, qt, Bt]);
    return W.jsx(er.Provider, {
        value: ar,
        children: o
    })
}
function tr() {
    const o = n.useContext(er);
    if (o === null)
        throw new Error("useGame must be used within GameProvider");
    return o
}
const vr = Object.freeze(Object.defineProperty({
    __proto__: null,
    GameProvider: pr,
    gameErrorMessage: wr,
    marketErrorMessage: Ce,
    playerGameErrorMessage: X,
    useGame: tr
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Qt = () => ({
    accountId: null,
    registered: !1,
    balanceGameRub: "0",
    owned: [],
    slots: {
        A: null,
        B: null
    },
    plates: {},
    plateTargets: {},
    pendingPurchase: null
})
  , De = o => ({
    M9_FRAME_INSUFFICIENT_BALANCE: "Не хватает игровых рублей.",
    M9_FRAME_UNAVAILABLE: "Эта рамка пока недоступна.",
    M9_FRAME_NOT_OWNED: "Сначала купи эту рамку.",
    M9_FRAME_TARGET_STALE: "Этот номер изменился или больше недоступен. Открой его заново.",
    M9_FRAME_TARGET_LOCKED: "Сначала дождись завершения действия с номером."
})[o] ?? "Не удалось выполнить действие. Попробуй ещё раз.";
function gr(o) {
    let i = Qt()
      , r = 0
      , y = 0
      , R = null
      , C = !1;
    const M = new Set
      , N = () => {
        r++,
        M.forEach(s => s())
    }
      , O = s => `nomerok-frame-purchase-v1:${s}`;
    function V(s) {
        try {
            const w = JSON.parse(localStorage.getItem(O(s)) ?? "null");
            return w && typeof w.frameId == "string" && typeof w.key == "string" ? w : null
        } catch {
            return null
        }
    }
    function P(s, w) {
        try {
            w ? localStorage.setItem(O(s), JSON.stringify(w)) : localStorage.removeItem(O(s))
        } catch {}
        R === s && (i = {
            ...i,
            pendingPurchase: w
        },
        N())
    }
    async function h(s=R) {
        if (!s)
            return;
        const w = y
          , [S,_] = await Promise.all([o.frames.catalog(), o.frames.state()]);
        w !== y || R !== s || _.accountId !== s || (C = S.capability === "frames-v1",
        i = {
            ..._,
            pendingPurchase: V(s)
        },
        N())
    }
    function b(s) {
        if (s !== R || s !== i.accountId)
            throw new Error("Аккаунт изменился. Открой рамки заново.")
    }
    async function q(s) {
        b(s.accountId);
        const w = V(s.accountId);
        if (w && w.key !== s.key)
            return {
                state: "unknown",
                ...w
            };
        P(s.accountId, {
            frameId: s.frameId,
            key: s.key
        });
        try {
            const S = await o.frames.purchase(s.frameId, s.key);
            return P(s.accountId, null),
            await h(s.accountId).catch( () => {}
            ),
            {
                ...S,
                key: s.key
            }
        } catch (S) {
            return S instanceof k && !S.unknownAfterTransportLoss && ["M9_FRAME_UNAVAILABLE", "M9_FRAME_INSUFFICIENT_BALANCE", "M9_FRAME_NOT_OWNED"].includes(S.envelope.error.code) ? (P(s.accountId, null),
            {
                state: "declined",
                frameId: s.frameId,
                key: s.key,
                reason: De(S.envelope.error.code)
            }) : {
                state: "unknown",
                frameId: s.frameId,
                key: s.key
            }
        }
    }
    return Object.assign({
        get enabled() {
            return C
        },
        subscribe: s => (M.add(s),
        () => M.delete(s)),
        revision: () => r,
        read: () => i,
        catalog: async s => (await o.frames.catalog(s)).products,
        purchase: q,
        reconcile: async (s, w) => {
            b(s);
            const S = V(s);
            if (!S || S.key !== w)
                throw new Error("Не удалось найти запрос покупки. Обнови страницу.");
            try {
                const _ = await o.frames.receipt(w);
                return _.state === "completed" && _.result ? (P(s, null),
                await h(s).catch( () => {}
                ),
                {
                    ..._.result,
                    key: w
                }) : _.state === "failed" ? (P(s, null),
                {
                    state: "declined",
                    ...S,
                    reason: De(_.code ?? "")
                }) : await q({
                    accountId: s,
                    ...S
                })
            } catch {
                return {
                    state: "unknown",
                    ...S
                }
            }
        }
        ,
        assign: async ({accountId: s, target: w, frameId: S}) => {
            b(s);
            try {
                await o.frames.assign({
                    target: w,
                    frameId: S
                }, crypto.randomUUID()),
                await h(s)
            } catch (_) {
                throw new Error(_ instanceof k ? De(_.envelope.error.code) : "Не удалось подтвердить оформление. Обнови страницу, чтобы проверить результат.")
            }
        }
        ,
        unavailable: s => s.kind === "plate" && (!s.lifeId || !s.expectedVersion) ? "Данные номера обновляются. Открой его заново." : null,
        publicFrame: () => null
    }, {
        refresh: h,
        setActor: s => {
            R !== s && (R = s,
            y++,
            i = {
                ...Qt(),
                accountId: s,
                pendingPurchase: s ? V(s) : null
            },
            N())
        }
    })
}
const Er = {
    accountId: null,
    registered: !1,
    balanceGameRub: "0",
    owned: [],
    slots: {
        A: null,
        B: null
    },
    plates: {},
    pendingPurchase: null
}
  , Ge = async () => {
    throw new Error("Сервер оформления ещё не подключён")
}
  , kr = {
    enabled: !1,
    subscribe: () => () => {}
    ,
    revision: () => 0,
    read: () => Er,
    catalog: async () => [],
    purchase: Ge,
    reconcile: Ge,
    assign: Ge,
    unavailable: () => null,
    publicFrame: () => null
}
  , rr = n.createContext({
    port: kr,
    request: null,
    open: () => {}
    ,
    close: () => {}
    ,
    suspend: () => {}
    ,
    resume: () => {}
    ,
    remember: () => {}
});
function Rr({port: o, children: i}) {
    const r = tr()
      , y = n.useMemo( () => gr(r.api), [r.api])
      , R = o ?? y;
    n.useEffect( () => {
        o || (y.setActor(r.principalId),
        y.refresh().catch( () => {}
        ))
    }
    , [y, o, r.principalId, r.r2Game, r.serverBalance]),
    n.useEffect( () => {
        if (o)
            return;
        const P = () => {
            document.visibilityState === "visible" && y.refresh().catch( () => {}
            )
        }
        ;
        return window.addEventListener("focus", P),
        document.addEventListener("visibilitychange", P),
        () => {
            window.removeEventListener("focus", P),
            document.removeEventListener("visibilitychange", P)
        }
    }
    , [y, o]);
    const [C,M] = n.useState(null)
      , [N,O] = n.useState(!1)
      , V = n.useMemo( () => {
        function P() {
            var b;
            const h = C;
            M(null),
            O(!1),
            (b = h == null ? void 0 : h.returnTo) == null || b.call(h),
            requestAnimationFrame( () => {
                var q, F;
                (q = h == null ? void 0 : h.trigger) != null && q.isConnected ? h.trigger.focus() : (h == null ? void 0 : h.target.kind) === "plate" && ((F = document.querySelector('[data-frame-action="' + CSS.escape(h.target.plateId) + '"]')) == null || F.focus())
            }
            )
        }
        return {
            port: R,
            request: N ? null : C,
            open: h => {
                R.enabled && (O(!1),
                M({
                    ...h,
                    plate: {
                        ...h.plate
                    },
                    trigger: document.activeElement instanceof HTMLElement ? document.activeElement : null
                }))
            }
            ,
            close: P,
            suspend: () => O(!0),
            resume: () => O(!1),
            remember: h => M(b => b && {
                ...b,
                previewFrameId: h
            })
        }
    }
    , [R, C, N]);
    return W.jsx(rr.Provider, {
        value: V,
        children: i
    })
}
function Pr() {
    const o = n.useContext(rr);
    return n.useSyncExternalStore(o.port.subscribe, o.port.revision, o.port.revision),
    {
        ...o,
        state: o.port.read()
    }
}
function br(o) {
    const i = cr(document.getElementById("root"));
    location.pathname === "/legal" || location.pathname.startsWith("/legal/") ? Ne(async () => {
        const {default: r} = await import("./LegalPublicPage-C2KofyXL.js");
        return {
            default: r
        }
    }
    , __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])).then( ({default: r}) => i.render(W.jsx(Jt.StrictMode, {
        children: W.jsx(r, {})
    }))) : Promise.all([Ne( () => import("./PlayerApp-DrIbOXsz.js").then(r => r.P), __vite__mapDeps([8, 1, 3, 4, 2, 5, 6, 7, 9, 10, 11])), Ne( () => Promise.resolve().then( () => vr), void 0)]).then( ([{default: r},{GameProvider: y}]) => i.render(W.jsx(Jt.StrictMode, {
        children: W.jsx(y, {
            children: W.jsx(Rr, {
                port: o,
                children: W.jsx(r, {})
            })
        })
    })))
}
br();
export {Pr as a, me as b, Lr as c, Ir as d, Yt as e, wr as g, X as p, Ar as r, _r as s, tr as u};
