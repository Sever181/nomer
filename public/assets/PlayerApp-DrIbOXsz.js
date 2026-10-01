const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/FeatureDemo-rbPscjuM.js", "assets/account-BjMYOorF.js", "assets/game-plate-BmsLgpqE.js", "assets/game-plate-DdySjI9C.css", "assets/main-B-GkYu42.js", "assets/consent-D_gzmZhX.js", "assets/CookieSettings-DHAj22Ky.js", "assets/player-analytics-DfbapHtq.js", "assets/CookieSettings-BUijLQ59.css", "assets/SupportContact-yFbfDbAV.js", "assets/SupportContact-CMfWl-ZS.css"]))) => i.map(i => d[i]);
var la = Object.defineProperty;
var oa = (t, s, r) => s in t ? la(t, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[s] = r;
var Te = (t, s, r) => oa(t, typeof s != "symbol" ? s + "" : s, r);
import {P as Ie, r as o, j as e, g as zn, R as Jn, h as Qn, k as Zn, _ as ca, N as cs, l as da, v as Xn, m as Sn, A as ws, b as In} from "./account-BjMYOorF.js";
import {u as he, a as xt, p as ge, g as ua, b as lt, r as ha, c as ma, d as er, s as fa, e as It} from "./main-B-GkYu42.js";
import {I as ue, t as ds, P as Qe, e as ft, T as Fe, p as Rn, a as Ms, b as pa, S as ke, f as q, B as b, G as ot, L as Rt, s as xa, c as gs, d as Vt, N as de, R as Ue, g as tr, h as Z, n as Oe, i as _t, A as us, j as pt, E as be, k as Qs, u as Me, l as Ns, m as Dt, o as Ln, r as ze, q as sr, v as Kt, F as Je, w as it, x as et, y as Ht, z as An, C as at} from "./game-plate-BmsLgpqE.js";
import {u as nr, D as Yt, b as ja, r as ga, c as va, C as ba, a as ya} from "./CookieSettings-DHAj22Ky.js";
import {g as ka, b as wa, u as Na, a as Zs, s as Ca, c as Ea} from "./consent-D_gzmZhX.js";
import {t as we, s as Sa, a as Pn, b as Ia} from "./player-analytics-DfbapHtq.js";
import {c as hs, S as Ra, t as ts, s as Cs, N as La} from "./SupportContact-yFbfDbAV.js";
const Xs = !1;
function rr(t) {
    return t.startsWith("profile-referral") ? "profile" : t === "pl-referral-invalid" ? "create" : t
}
const Aa = "nomerok-m10-intent:"
  , At = new Set
  , vt = new Set;
class bt extends Ie {
    constructor() {
        super("PENDING_RESULT")
    }
}
const St = t => Aa + t;
function Qt(t) {
    try {
        const s = localStorage.getItem(St(t));
        if (!s)
            return At.delete(t),
            null;
        const r = JSON.parse(s);
        if (!r || typeof r != "object" || !("version" in r) || r.version !== 1 || !("actor" in r) || r.actor !== t || !("kind" in r) || typeof r.kind != "string" || !("key" in r) || typeof r.key != "string" || !/^[-a-zA-Z0-9]{8,200}$/.test(r.key) || !("input" in r))
            throw new bt;
        return At.add(t),
        r
    } catch {
        throw new bt
    }
}
function $e(t) {
    try {
        return !!Qt(t)
    } catch {
        return !0
    }
}
function yt(t) {
    return vt.has(t)
}
function en(t) {
    try {
        return !!Qt(t) || vt.has(t)
    } catch {
        return At.has(t) || vt.has(t)
    }
}
async function Ke(t, s, r, a, i=!1) {
    if (!t || !navigator.locks)
        throw new bt;
    return navigator.locks.request(St(t), {
        ifAvailable: !0
    }, async c => {
        if (!c)
            throw new bt;
        const d = Qt(t);
        if (d && !i)
            throw new bt;
        if (i && !d)
            throw new Ie("COMMANDS_1");
        const l = d ?? {
            version: 1,
            actor: t,
            kind: s,
            input: r,
            key: crypto.randomUUID()
        };
        if (!d) {
            const n = JSON.stringify(l);
            if (localStorage.setItem(St(t), n),
            localStorage.getItem(St(t)) !== n)
                throw new bt
        }
        At.add(t),
        vt.add(t),
        window.dispatchEvent(new Event("nomerok-intent-activity"));
        try {
            const n = await a(l);
            return localStorage.removeItem(St(t)),
            At.delete(t),
            vt.delete(t),
            window.dispatchEvent(new Event("nomerok-intent-change")),
            n
        } catch (n) {
            const m = n && typeof n == "object" && "status" in n ? Number(n.status) : 0
              , h = !!d || !!(n && typeof n == "object" && "unknownAfterTransportLoss" in n && n.unknownAfterTransportLoss);
            throw m >= 400 && m < 500 && ![408, 429].includes(m) && (![401, 403].includes(m) || !h) && (localStorage.removeItem(St(t)),
            At.delete(t)),
            vt.delete(t),
            window.dispatchEvent(new Event("nomerok-intent-change")),
            n
        } finally {
            vt.delete(t),
            window.dispatchEvent(new Event("nomerok-intent-activity"))
        }
    }
    )
}
let Ut = null;
function ar(t) {
    return Ut && Ut !== t || document.querySelector('.toast,[role="dialog"],dialog[open]') ? !1 : (Ut = t,
    !0)
}
function Lt(t) {
    Ut === t && (Ut = null)
}
function tn({message: t, onDone: s}) {
    const [r,a] = o.useState(t)
      , [i,c] = o.useState(!1)
      , d = o.useRef(s)
      , l = o.useRef(t)
      , n = o.useRef(null);
    function m() {
        const h = n.current;
        if (!h)
            return;
        const w = getComputedStyle(h);
        h.style.setProperty("--toast-exit-opacity", w.opacity),
        h.style.setProperty("--toast-exit-transform", w.transform === "none" ? "translateY(0px)" : w.transform),
        c(!0)
    }
    return o.useLayoutEffect( () => {
        d.current = s,
        l.current = t
    }
    , [s, t]),
    o.useEffect( () => {
        t.id !== r.id && !i && m()
    }
    , [t.id, r.id, i]),
    o.useEffect( () => {
        if (i)
            return;
        const h = setTimeout(m, 5150);
        return () => clearTimeout(h)
    }
    , [r.id, i]),
    o.useEffect( () => {
        if (!i)
            return;
        const h = setTimeout( () => {
            l.current.id !== r.id ? (a(l.current),
            c(!1)) : d.current()
        }
        , 150);
        return () => clearTimeout(h)
    }
    , [i, r.id]),
    e.jsxs("div", {
        ref: n,
        className: `toast ${i ? "toast-leaving" : ""}`,
        role: "status",
        children: [e.jsx(ue, {
            name: r.kind === "notice" ? "info" : "check",
            size: 17
        }), e.jsxs("span", {
            children: [r.title && e.jsx("strong", {
                className: "toast-title",
                children: r.title
            }), r.text]
        }), r.action && e.jsx("button", {
            className: "toast-action",
            onClick: () => {
                var h;
                (h = r.action) == null || h.run(),
                m()
            }
            ,
            children: r.action.label
        }), e.jsx("button", {
            "aria-label": "Закрыть уведомление",
            onClick: () => {
                i || m()
            }
            ,
            children: e.jsx(ue, {
                name: "close",
                size: 17
            })
        })]
    }, r.id)
}
function Pa({blocked: t, onOpen: s}) {
    const {api: r, principalId: a, account: i} = he()
      , [c,d] = o.useState(null)
      , l = o.useRef({
        blocked: t,
        onOpen: s
    });
    return o.useLayoutEffect( () => {
        l.current = {
            blocked: t,
            onOpen: s
        }
    }
    , [t, s]),
    o.useLayoutEffect( () => {
        if (d(null),
        !a || i.mode !== "registered")
            return;
        const n = "announcement:" + a
          , m = "nomerok-announcement-seen:" + a;
        let h = !1, w, g = null, x = 0, u = !1, p = 0, y = [], v = null;
        const N = () => {
            v = null,
            d(null),
            Lt(n)
        }
          , j = () => !h && !document.hidden && navigator.onLine
          , k = () => j() && !l.current.blocked && !en(a) && !document.querySelector('[role="dialog"],dialog[open]')
          , f = (I, T=!1) => {
            let Q = [];
            try {
                const F = JSON.parse(localStorage.getItem(m) ?? "[]");
                Array.isArray(F) && (Q = F.filter(X => typeof X == "string").slice(-100))
            } catch {}
            if (Q.includes(I))
                return !0;
            if (T)
                try {
                    localStorage.setItem(m, JSON.stringify([...Q, I].slice(-100)))
                } catch {}
            return !1
        }
          , C = async () => {
            if (!k() || v || u || !y.length)
                return;
            u = !0;
            const I = y[0];
            try {
                if (Date.parse(I.expiresAt) <= Date.now() || f(I.id)) {
                    y.shift();
                    return
                }
                await r.m9.notice(I.id, g == null ? void 0 : g.signal);
                const T = () => {
                    !k() || v || f(I.id) || !ar(n) || (f(I.id, !0),
                    y = y.filter(Q => Q.id !== I.id),
                    v = I,
                    d(I))
                }
                ;
                navigator.locks ? await navigator.locks.request("nomerok-announcement-display:" + a, {
                    ifAvailable: !0
                }, Q => {
                    Q && T()
                }
                ) : T()
            } catch {
                y = y.filter(T => T.id !== I.id)
            } finally {
                u = !1
            }
        }
          , E = async () => {
            if (!j())
                return;
            const I = new AbortController;
            g = I;
            try {
                const T = await r.m9.onlineNotices(w ? {
                    cursor: w
                } : {}, I.signal);
                if (I.signal.aborted || !j())
                    return;
                w = T.cursor,
                p = 0;
                for (const Q of T.items)
                    !y.some(F => F.id === Q.id) && !f(Q.id) && y.push(Q);
                if (v)
                    try {
                        await r.m9.notice(v.id, I.signal),
                        Date.parse(v.expiresAt) <= Date.now() && N()
                    } catch {
                        I.signal.aborted || N()
                    }
                C()
            } catch {
                if (I.signal.aborted)
                    return;
                w = void 0,
                y = [],
                p++,
                N()
            } finally {
                g === I && (g = null),
                j() && !I.signal.aborted && (x = window.setTimeout( () => void E(), p ? Math.min(3e4, 5e3 * 2 ** (p - 1)) : 5e3))
            }
        }
          , R = () => {
            clearTimeout(x),
            g == null || g.abort(),
            g = null,
            w = void 0,
            y = [],
            p = 0,
            N(),
            j() && E()
        }
          , P = () => N();
        window.addEventListener("nomerok-announcement-done", P),
        document.addEventListener("visibilitychange", R),
        window.addEventListener("online", R),
        window.addEventListener("offline", R);
        const A = window.setInterval( () => void C(), 500);
        return E(),
        () => {
            h = !0,
            g == null || g.abort(),
            clearTimeout(x),
            clearInterval(A),
            Lt(n),
            document.removeEventListener("visibilitychange", R),
            window.removeEventListener("online", R),
            window.removeEventListener("offline", R),
            window.removeEventListener("nomerok-announcement-done", P)
        }
    }
    , [r, a, i.mode]),
    !c || t ? null : e.jsx(tn, {
        message: {
            id: 1,
            kind: "notice",
            title: c.title,
            text: c.text,
            action: {
                label: "Открыть",
                run: () => {
                    window.dispatchEvent(new Event("nomerok-announcement-done")),
                    l.current.onOpen(c.id)
                }
            }
        },
        onDone: () => window.dispatchEvent(new Event("nomerok-announcement-done"))
    }, c.id)
}
const ir = 50;
function _a(t) {
    for (const s of [t.id, t.letters, t.digits, t.region, t.rarityLabel])
        if (typeof s != "string" || s.length === 0)
            throw new TypeError("Replay frame requires nonempty display fields and an event ID.");
    if (typeof t.gold != "boolean" || !["digits", "letters", "whole"].includes(t.axis) || !(t.estimateLabel === null || typeof t.estimateLabel == "string"))
        throw new TypeError("Invalid replay frame metadata.");
    return Object.freeze({
        id: t.id,
        letters: t.letters,
        digits: t.digits,
        region: t.region,
        gold: t.gold,
        rarityLabel: t.rarityLabel,
        estimateLabel: t.estimateLabel,
        axis: t.axis
    })
}
function Da(t) {
    if (t.length === 0 || t.length > ir)
        throw new RangeError("A replay requires 1–50 confirmed results.");
    if (!t[t.length - 1].gold)
        throw new TypeError("A gold replay must end at the confirmed gold result.");
    const s = Object.freeze(t.map(_a));
    if (new Set(s.map(r => r.id)).size !== s.length)
        throw new TypeError("Replay event IDs must be unique.");
    return Object.freeze({
        id: s[s.length - 1].id,
        frames: s
    })
}
const Es = [95, 120, 170, 240, 340, 470, 630, 820, 1100];
function Oa(t) {
    if (!Number.isInteger(t) || t < 1 || t > ir)
        throw new RangeError("Frame count must be 1–50.");
    const s = t - 1
      , r = Math.min(Es.length, s)
      , a = s - r
      , i = [0];
    for (let c = 0; c < s; c++) {
        const d = c < a ? 80 : Es[Es.length - r + c - a];
        i.push(i[i.length - 1] + d)
    }
    return Object.freeze({
        starts: Object.freeze(i),
        durationMs: i[i.length - 1]
    })
}
function Ss(t, s) {
    let r = 0;
    for (; r < t.starts.length - 1 && s >= t.starts[r + 1]; )
        r++;
    return r
}
const Ta = {
    now: () => performance.now(),
    request: t => requestAnimationFrame(t),
    cancel: t => cancelAnimationFrame(t),
    reducedMotion: () => typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
};
class Fa {
    constructor(s, r=Ta) {
        Te(this, "clip");
        Te(this, "timeline");
        Te(this, "listeners", new Set);
        Te(this, "state");
        Te(this, "elapsed", 0);
        Te(this, "started", 0);
        Te(this, "running", !1);
        Te(this, "pending", null);
        Te(this, "getSnapshot", () => this.state);
        Te(this, "subscribe", s => (this.listeners.add(s),
        () => {
            this.listeners.delete(s)
        }
        ));
        Te(this, "tick", () => {
            if (this.pending = null,
            !this.running)
                return;
            if (this.scheduler.reducedMotion()) {
                this.finish(!0);
                return
            }
            const s = Math.min(this.timeline.durationMs, this.elapsed + this.scheduler.now() - this.started)
              , r = Ss(this.timeline, s);
            if (s >= this.timeline.durationMs) {
                this.finish(!1);
                return
            }
            r !== this.state.index && (this.state = Object.freeze({
                ...this.state,
                index: r,
                elapsedMs: s
            }),
            this.listeners.forEach(a => a())),
            this.pending = this.scheduler.request(this.tick)
        }
        );
        Te(this, "start", (s=!1) => {
            const r = s || this.state.mode === "ready" || this.state.mode === "finished";
            this.stopClock(),
            r && (this.elapsed = 0);
            const a = this.scheduler.reducedMotion();
            if (a || this.timeline.durationMs === 0) {
                this.elapsed = this.timeline.durationMs,
                this.publish("finished", this.lastIndex, a, r);
                return
            }
            this.started = this.scheduler.now(),
            this.running = !0,
            this.publish("playing", Ss(this.timeline, this.elapsed), !1, r),
            this.pending = this.scheduler.request(this.tick)
        }
        );
        Te(this, "pause", () => {
            this.running && (this.stopClock(),
            this.publish(this.elapsed >= this.timeline.durationMs ? "finished" : "paused", Ss(this.timeline, this.elapsed)))
        }
        );
        Te(this, "seek", s => {
            if (!Number.isFinite(s))
                return;
            this.stopClock();
            const r = Math.max(0, Math.min(this.lastIndex, Math.round(s)));
            this.elapsed = this.timeline.starts[r],
            this.publish(r === this.lastIndex ? "finished" : "paused", r)
        }
        );
        Te(this, "finish", (s=this.scheduler.reducedMotion()) => {
            this.stopClock(),
            this.elapsed = this.timeline.durationMs,
            this.publish("finished", this.lastIndex, s)
        }
        );
        Te(this, "reset", () => {
            this.stopClock(),
            this.elapsed = 0,
            this.publish("ready", this.lastIndex, !1)
        }
        );
        Te(this, "dispose", () => {
            this.stopClock()
        }
        );
        this.scheduler = r,
        this.clip = Da(s.frames),
        this.timeline = Oa(this.clip.frames.length),
        this.state = Object.freeze({
            mode: "ready",
            index: this.lastIndex,
            run: 0,
            elapsedMs: 0,
            reducedMotion: !1
        })
    }
    get lastIndex() {
        return this.clip.frames.length - 1
    }
    publish(s, r, a=this.state.reducedMotion, i=!1) {
        this.state = Object.freeze({
            mode: s,
            index: r,
            elapsedMs: this.elapsed,
            reducedMotion: a,
            run: this.state.run + (i ? 1 : 0)
        }),
        this.listeners.forEach(c => c())
    }
    stopClock() {
        this.running && (this.elapsed = Math.min(this.timeline.durationMs, this.elapsed + this.scheduler.now() - this.started)),
        this.running = !1,
        this.pending !== null && this.scheduler.cancel(this.pending),
        this.pending = null
    }
}
function Ga(t, s=!0) {
    const r = o.useMemo( () => new Fa(t), [t])
      , a = o.useSyncExternalStore(r.subscribe, r.getSnapshot, r.getSnapshot);
    return o.useEffect( () => {
        const i = () => {
            document.hidden && r.pause()
        }
          , c = window.matchMedia("(prefers-reduced-motion: reduce)")
          , d = () => {
            c.matches && r.getSnapshot().mode === "playing" && r.finish(!0)
        }
        ;
        return document.addEventListener("visibilitychange", i),
        c.addEventListener("change", d),
        () => {
            document.removeEventListener("visibilitychange", i),
            c.removeEventListener("change", d),
            r.dispose()
        }
    }
    , [r]),
    o.useEffect( () => {
        s ? (r.start(!0),
        document.hidden && r.pause()) : r.pause()
    }
    , [r, s]),
    {
        ...a,
        frame: r.clip.frames[a.index],
        frames: r.clip.frames,
        count: r.clip.frames.length,
        durationMs: r.timeline.durationMs,
        start: r.start,
        pause: r.pause,
        seek: r.seek,
        reset: r.reset
    }
}
function $a({frame: t}) {
    return e.jsxs("div", {
        className: "nr-replay__caption",
        children: [e.jsx("span", {
            className: "nr-replay__rarity",
            "data-gold": t.gold,
            children: t.rarityLabel
        }), e.jsxs("span", {
            className: "nr-replay__estimate",
            children: [e.jsx("span", {
                children: "Примерная стоимость"
            }), e.jsx("strong", {
                children: t.estimateLabel ?? "—"
            })]
        })]
    })
}
function Ma({player: t, onClose: s}) {
    const r = t.mode === "playing"
      , a = r ? "Пауза" : t.mode === "paused" ? "Продолжить" : "Посмотреть ещё раз";
    return e.jsxs("div", {
        className: "nr-replay__controls",
        children: [e.jsxs("div", {
            className: "nr-replay__progress",
            children: [e.jsx("span", {
                children: t.mode === "paused" ? "На паузе" : "Повтор выпадения"
            }), e.jsxs("span", {
                children: [t.index + 1, " / ", t.count]
            })]
        }), e.jsxs("label", {
            className: "nr-replay__timeline",
            children: [e.jsx("span", {
                className: "nr-replay__sr",
                children: "Кадр повтора"
            }), e.jsx("input", {
                type: "range",
                min: "0",
                max: t.count - 1,
                step: "1",
                value: t.index,
                disabled: t.count === 1,
                onChange: i => t.seek(Number(i.target.value)),
                "aria-valuetext": `Результат ${t.index + 1} из ${t.count}`
            })]
        }), e.jsx("button", {
            type: "button",
            className: "nr-replay__primary",
            onClick: () => r ? t.pause() : t.start(),
            children: a
        }), e.jsx("button", {
            type: "button",
            className: "nr-replay__return",
            onClick: s,
            children: "Вернуться к созданию"
        }), t.reducedMotion && e.jsx("p", {
            className: "nr-replay__motion-note",
            children: "Движение уменьшено. Кадры доступны на шкале."
        })]
    })
}
function Ba({clip: t, onClose: s, renderPlate: r, renderCaption: a, renderControls: i, className: c="", style: d, autoPlay: l=!0}) {
    const n = Ga(t, l)
      , m = o.useRef(null)
      , h = o.useId();
    o.useEffect( () => {
        const g = m.current;
        if (!g)
            return;
        const x = document.activeElement instanceof HTMLElement ? document.activeElement : null
          , u = document.body.style.overflow;
        return g.showModal(),
        document.body.style.overflow = "hidden",
        () => {
            g.close(),
            document.body.style.overflow = u,
            x != null && x.isConnected && x.focus({
                preventScroll: !0
            })
        }
    }
    , []);
    function w(g) {
        if (g.key !== "Tab")
            return;
        const x = [...g.currentTarget.querySelectorAll("button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]")].filter(y => y.tabIndex >= 0 && !y.closest("[hidden], [inert]") && y.getClientRects().length > 0 && getComputedStyle(y).visibility !== "hidden")
          , u = x[0]
          , p = x[x.length - 1];
        g.shiftKey && document.activeElement === u ? (g.preventDefault(),
        p == null || p.focus()) : !g.shiftKey && document.activeElement === p && (g.preventDefault(),
        u == null || u.focus())
    }
    return e.jsxs("dialog", {
        ref: m,
        className: `nr-replay ${c}`,
        style: d,
        "aria-labelledby": h,
        onKeyDown: w,
        onCancel: g => {
            g.preventDefault(),
            s()
        }
        ,
        children: [e.jsxs("header", {
            className: "nr-replay__header",
            children: [e.jsx("h2", {
                id: h,
                children: "Экспресс-повтор"
            }), e.jsx("button", {
                type: "button",
                className: "nr-replay__close",
                "aria-label": "Закрыть повтор",
                onClick: s,
                children: e.jsx("svg", {
                    viewBox: "0 0 24 24",
                    width: "22",
                    height: "22",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    "aria-hidden": "true",
                    children: e.jsx("path", {
                        d: "m6 6 12 12M6 18 18 6"
                    })
                })
            })]
        }), e.jsxs("div", {
            className: "nr-replay__body",
            "data-mode": n.mode,
            "data-frame": n.index + 1,
            children: [e.jsx("div", {
                className: "nr-replay__plate",
                children: r(n.frame, n)
            }), a ? a(n.frame, n) : e.jsx($a, {
                frame: n.frame
            }), i ? i(n, s) : e.jsx(Ma, {
                player: n,
                onClose: s
            })]
        }), e.jsx("div", {
            className: "nr-replay__sr",
            role: "status",
            "aria-live": "polite",
            "aria-atomic": "true",
            children: n.mode === "finished" ? `${n.frame.rarityLabel}. Повтор завершён.` : n.mode === "paused" ? `Пауза. Результат ${n.index + 1} из ${n.count}.` : "Экспресс-повтор."
        })]
    })
}
const Bs = "nomerok-confirmed-replay";
function qs(t) {
    typeof window < "u" && window.dispatchEvent(new CustomEvent(Bs,{
        detail: t
    }))
}
function qa(t) {
    t.kind === "spin" && qs({
        type: "start",
        actor: t.actor,
        key: t.key,
        slots: [t.input.slot]
    }),
    t.kind === "auto" && qs({
        type: "start",
        actor: t.actor,
        key: t.key,
        slots: t.input.slots.map(s => s.slot)
    })
}
function Ua(t, s) {
    if (t.kind !== "spin" && t.kind !== "auto")
        return;
    const r = s
      , a = [r.confirmedResult, ...(r.outcomes ?? []).map(i => i.confirmedResult)].filter(i => !!i);
    a.length && qs({
        type: "confirmed",
        actor: t.actor,
        key: t.key,
        snapshots: a
    })
}
const ss = "nomerok-confirmed-replay-v1"
  , _n = () => ({
    frames: [],
    available: !1,
    commandKey: null,
    lastReceipt: "0"
})
  , ms = t => ({
    version: 1,
    actor: t,
    slots: {
        A: _n(),
        B: _n()
    }
});
function Va(t, s, r) {
    const a = t.slots[s];
    return a.commandKey === r ? t : {
        ...t,
        slots: {
            ...t.slots,
            [s]: {
                ...a,
                available: !1,
                commandKey: r
            }
        }
    }
}
function Ka(t, s, r, a) {
    const i = t.slots[s]
      , c = a.id.split(":")[0];
    return r !== i.commandKey || !/^[0-9]+$/.test(c) || BigInt(c) <= BigInt(i.lastReceipt) ? t : {
        ...t,
        slots: {
            ...t.slots,
            [s]: {
                ...i,
                frames: [...i.frames, a].slice(-50),
                available: a.gold,
                lastReceipt: c
            }
        }
    }
}
function Ha(t, s) {
    var r;
    try {
        if (!t || t.length > 1e5)
            return ms(s);
        const a = JSON.parse(t);
        if (a.version !== 1 || a.actor !== s)
            throw new Error("actor");
        for (const i of ["A", "B"]) {
            const c = a.slots[i];
            if (!Array.isArray(c.frames) || c.frames.length > 50 || typeof c.available != "boolean" || !(c.commandKey === null || typeof c.commandKey == "string" && c.commandKey.length <= 200) || !/^[0-9]{1,30}$/.test(c.lastReceipt))
                throw new Error("history");
            for (const d of c.frames)
                if (!new RegExp("^[0-9]+:" + i + ":[0-9]+$").test(d.id) || !/^[АВЕКМНОРСТУХABEKMHOPCTYX]{3}$/.test(d.letters) || !/^\d{3}$/.test(d.digits) || !/^\d{2,3}$/.test(d.region) || typeof d.gold != "boolean" || !["GRAY", "BLUE", "PURPLE", "RED", "GOLD"].includes(d.tier) || d.gold !== (d.tier === "GOLD") || typeof d.rarityLabel != "string" || d.rarityLabel.length > 60 || !(d.estimateLabel === null || typeof d.estimateLabel == "string" && d.estimateLabel.length < 100) || !(d.frameId === null || typeof d.frameId == "string" && d.frameId.length < 100) || !["digits", "letters", "whole"].includes(d.axis))
                    throw new Error("frame");
            if (c.available && !((r = c.frames[c.frames.length - 1]) != null && r.gold))
                throw new Error("legendary")
        }
        return a
    } catch {
        return ms(s)
    }
}
const lr = o.createContext(null);
function Ya({children: t}) {
    const s = he()
      , r = xt()
      , a = s.principalId ?? ""
      , i = s.account.mode === "loading"
      , [c,d] = o.useState( () => ms(""))
      , l = o.useRef(c)
      , n = o.useRef({
        actor: a,
        game: s,
        frames: r
    });
    o.useLayoutEffect( () => {
        n.current = {
            actor: a,
            game: s,
            frames: r
        }
    }
    , [a, s, r]);
    const [m,h] = o.useState(null)
      , w = o.useMemo( () => m ? {
        id: m.frames[m.frames.length - 1].id,
        frames: m.frames
    } : null, [m]);
    o.useLayoutEffect( () => {
        if (!a && i)
            return;
        let u = ms(a);
        try {
            u = Ha(sessionStorage.getItem(ss), a),
            sessionStorage.removeItem(ss)
        } catch {}
        if (l.current = u,
        d(u),
        h(null),
        a)
            try {
                sessionStorage.setItem(ss, JSON.stringify(u))
            } catch {}
    }
    , [a, i]),
    o.useLayoutEffect( () => {
        const u = p => {
            var j, k;
            const y = p.detail
              , v = n.current;
            if (!y || !y.actor || y.actor !== v.actor || l.current.actor !== y.actor)
                return;
            let N = l.current;
            if (y.type === "start")
                for (const f of y.slots) {
                    const C = Va(N, f, y.key);
                    C !== N && h(E => (E == null ? void 0 : E.slot) === f ? null : E),
                    N = C
                }
            else
                for (const f of y.snapshots) {
                    const C = ds[f.displayTier];
                    if (!C)
                        continue;
                    const E = (k = (j = v.game.r2Game) == null ? void 0 : j.slots[f.slot]) == null ? void 0 : k.ownedEditPlateId
                      , R = E ? v.frames.state.plates[E] ?? null : v.frames.state.slots[f.slot];
                    N = Ka(N, f.slot, y.key, {
                        id: f.id,
                        letters: f.letters,
                        digits: f.digits,
                        region: f.regionCode,
                        gold: f.displayTier === "GOLD",
                        tier: f.displayTier,
                        rarityLabel: Fe[C].label,
                        estimateLabel: ft({
                            letters: f.letters,
                            digits: f.digits,
                            region: f.regionCode
                        }),
                        axis: f.axis,
                        frameId: R
                    })
                }
            if (N !== l.current) {
                l.current = N,
                d(N);
                try {
                    sessionStorage.setItem(ss, JSON.stringify(N))
                } catch {}
            }
        }
        ;
        return window.addEventListener(Bs, u),
        () => window.removeEventListener(Bs, u)
    }
    , []);
    const g = o.useCallback(u => {
        const p = l.current;
        p.actor === a && p.slots[u].available && h({
            actor: a,
            slot: u,
            frames: [...p.slots[u].frames]
        })
    }
    , [a])
      , x = o.useMemo( () => ({
        session: c,
        open: g
    }), [c, g]);
    return e.jsxs(lr.Provider, {
        value: x,
        children: [t, m && w && m.actor === a && e.jsx(Ba, {
            clip: w,
            onClose: () => h(null),
            renderPlate: u => {
                const p = m.frames.find(v => v.id === u.id)
                  , y = {
                    id: p.id,
                    version: "",
                    letters: p.letters,
                    digits: p.digits,
                    region: p.region,
                    tier: ds[p.tier],
                    value: null,
                    saveReward: "0",
                    instantSell: null,
                    systemSell: null,
                    editable: !1,
                    marketEligible: !1,
                    auctionEligible: !1,
                    acquired: ""
                };
                return e.jsx(Qe, {
                    p: y,
                    frameId: p.frameId
                })
            }
        })]
    })
}
function or({slot: t}) {
    const s = o.useContext(lr);
    return s != null && s.session.slots[t].available ? e.jsxs("button", {
        type: "button",
        className: "legendary-replay-button",
        onClick: () => s.open(t),
        children: [e.jsx("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            "aria-hidden": "true",
            children: e.jsx("path", {
                d: "M8 5v14l11-7Z"
            })
        }), "Повтор выпадения"]
    }) : null
}
const cr = o.createContext({
    state: null,
    revision: 0,
    refresh: () => {}
})
  , dr = () => window.dispatchEvent(new Event("nomerok-collector-refresh"))
  , Ot = () => o.useContext(cr);
function Wa({children: t}) {
    const {api: s, principalId: r, account: a, refreshGame: i} = he()
      , c = o.useRef(i);
    o.useLayoutEffect( () => {
        c.current = i
    }
    , [i]);
    const [d,l] = o.useState(null)
      , [n,m] = o.useState(0);
    o.useEffect( () => {
        if (l(null),
        !r || !["guest", "registered"].includes(a.mode))
            return;
        let w = !1, g = null, x, u = null;
        const p = typeof BroadcastChannel == "function" ? new BroadcastChannel("nomerok-collector:" + r) : null
          , y = (E, R) => {
            w || E.accountId !== r || (document.hidden || (u !== null && u !== E.messagesVersion && c.current().catch( () => {}
            ),
            u = E.messagesVersion),
            l(P => P && BigInt(P.progress.version) > BigInt(E.progress.version) ? {
                ...E,
                progress: P.progress
            } : E),
            m(P => P + 1),
            R && (p == null || p.postMessage({
                type: "state",
                accountId: r,
                state: E
            })))
        }
        ;
        p && (p.onmessage = E => {
            var P, A, I;
            const R = E.data;
            (R == null ? void 0 : R.type) === "refresh" && (j(),
            k()),
            (R == null ? void 0 : R.type) === "state" && R.accountId === r && ((P = R.state) == null ? void 0 : P.accountId) === r && /^\d+$/.test((I = (A = R.state) == null ? void 0 : A.progress) == null ? void 0 : I.version) && y(R.state, !1)
        }
        );
        const v = (E, R) => new Promise(P => {
            const A = () => {
                clearTimeout(I),
                R.removeEventListener("abort", A),
                P()
            }
              , I = window.setTimeout(A, E);
            R.addEventListener("abort", A, {
                once: !0
            })
        }
        );
        async function N(E) {
            let R = 0;
            for (; !w && !E.aborted && !document.hidden; ) {
                try {
                    const P = await s.collector.state(E);
                    E.aborted || y(P, !0),
                    R = 0
                } catch {
                    if (E.aborted)
                        return;
                    R++
                }
                if (E.aborted)
                    return;
                await v(R ? Math.min(3e4, 5e3 * 2 ** (R - 1)) + Math.floor(Math.random() * 500) : 5e3, E)
            }
        }
        function j() {
            g == null || g.abort(),
            g = null,
            clearTimeout(x)
        }
        function k() {
            if (w || document.hidden || !navigator.onLine || g)
                return;
            const E = new AbortController;
            g = E,
            (async () => {
                try {
                    navigator.locks ? await navigator.locks.request("nomerok-collector-reader:" + r, {
                        ifAvailable: !0
                    }, async P => {
                        P && !E.signal.aborted && await N(E.signal)
                    }
                    ) : await N(E.signal)
                } catch {} finally {
                    g === E && (g = null,
                    !w && !document.hidden && (x = window.setTimeout(k, 5e3)))
                }
            }
            )()
        }
        const f = () => {
            j(),
            k()
        }
          , C = () => {
            p == null || p.postMessage({
                type: "refresh"
            }),
            f()
        }
        ;
        return document.addEventListener("visibilitychange", f),
        window.addEventListener("focus", f),
        window.addEventListener("online", f),
        window.addEventListener("offline", j),
        window.addEventListener("nomerok-collector-refresh", C),
        k(),
        () => {
            w = !0,
            j(),
            p && p.close(),
            document.removeEventListener("visibilitychange", f),
            window.removeEventListener("focus", f),
            window.removeEventListener("online", f),
            window.removeEventListener("offline", j),
            window.removeEventListener("nomerok-collector-refresh", C)
        }
    }
    , [s, r, a.mode]);
    const h = o.useMemo( () => ({
        state: (d == null ? void 0 : d.accountId) === r ? d : null,
        revision: n,
        refresh: dr
    }), [d, r, n]);
    return e.jsx(cr.Provider, {
        value: h,
        children: t
    })
}
class Dn extends Error {
    constructor(s) {
        super(s === "PLAYER-COMMANDS_1" ? "Аккаунт изменился. Вернись к исходному аккаунту для проверки операции." : "Проверь незавершённую операцию в том разделе, где она начата."),
        this.presentationKey = s
    }
}
async function He(t, s) {
    const r = await t.bootstrap();
    if (r.principal.id !== s.actor)
        throw new Dn("PLAYER-COMMANDS_1");
    const a = t.forSession(r)
      , i = {
        idempotencyKey: s.key
    };
    qa(s);
    const c = await d();
    return Ua(s, c),
    c;
    async function d() {
        switch (s.kind) {
        case "collector-favorite":
            return a.collector.favorite(s.input, s.key);
        case "bulk-quote":
            return a.collector.bulkQuote(s.input, s.key);
        case "bulk-sell":
            return a.collector.bulkAccept(s.input, s.key);
        case "trade-quote":
            return a.trades.quote(s.input, s.key);
        case "trade-send":
            return a.trades.send(s.input, s.key);
        case "trade-accept":
            return a.trades.accept(s.input, s.key);
        case "trade-accept-quote":
            {
                const l = s.input;
                return a.trades.acceptQuote(l.id, l.expectedVersion, s.key)
            }
        case "trade-terminal":
            {
                const l = s.input;
                return a.trades.terminal(l.id, l.expectedVersion, l.action, s.key)
            }
        case "trade-seen":
            return a.trades.seen(s.input.eventIds, s.key);
        case "trade-preferences":
            return a.trades.preferences(s.input.receiveOffers, s.key);
        case "trade-block":
            {
                const l = s.input;
                return a.trades.block(l.playerId, l.blocked, s.key)
            }
        case "reward-task":
            {
                const l = s.input;
                return a.rewards.task(l.id, l.request, s.key)
            }
        case "reward-completion":
            return a.rewards.completion(s.input, s.key);
        case "reward-recovery":
            return a.rewards.recovery(s.input, s.key);
        case "reward-seen":
            return a.rewards.seen(s.input.id, s.key);
        case "notice-seen":
            return a.m9.noticeSeen(s.input.id, s.key);
        case "sessions-revoke":
            {
                const l = s.input;
                for (const n of l.ids)
                    await a.revokeSession(n, {
                        idempotencyKey: s.key + "-" + n
                    });
                return {
                    revoked: !0
                }
            }
        case "market-list":
            return a.marketList(s.input, i);
        case "market-buy":
            {
                const l = s.input;
                return a.marketBuy(l.id, l.request, i)
            }
        case "market-delist":
            {
                const l = s.input;
                return a.marketDelist(l.id, l.request, i)
            }
        case "auction-create":
            return a.createAuction(s.input, i);
        case "auction-bid":
            {
                const l = s.input;
                return a.bidAuction(l.id, l.request, i)
            }
        case "auction-cancel":
            {
                const l = s.input;
                return a.cancelAuction(l.id, l.request, i)
            }
        case "legacy-recover":
            return a.recoverLegacyPartialR2(s.input, i);
        case "legacy-discard":
            return a.discardLegacyPartialR2(s.input, i);
        case "expand":
            return a.expandCollectionR2(i);
        case "owned-edit":
            {
                const l = s.input;
                return a.openOwnedEditR2(l.plateId, l.request, i)
            }
        case "exit-edit":
            return a.exitOwnedEditR2(s.input, i);
        case "discard-edit":
            return a.discardOwnedEditReplacementR2(s.input, i);
        case "system-sell":
            {
                const l = s.input;
                return a.liquidatePlateR2(l.plateId, l.request, i)
            }
        case "spin":
            return a.spinR2(s.input, i);
        case "region":
            return a.selectR2Region(s.input, i);
        case "save":
            return a.saveR2(s.input, i);
        case "sell":
            return a.instantSellDraftR2(s.input, i);
        case "auto":
            return a.autoCycleR2(s.input, i);
        default:
            throw new Dn("PLAYER-COMMANDS_2")
        }
    }
}
function Tt() {
    const {api: t, principalId: s, refreshGame: r} = he()
      , [a,i] = o.useState(!1)
      , [c,d] = o.useState("")
      , l = o.useRef(!1)
      , n = o.useRef(0);
    o.useLayoutEffect( () => (n.current++,
    l.current = !1,
    i(!1),
    d(""),
    () => {
        n.current++
    }
    ), [s]);
    async function m(h, w, g) {
        if (l.current || !s)
            return;
        l.current = !0,
        i(!0),
        d("");
        const x = n.current;
        try {
            const u = await Ke(s, h, w, p => He(t, p));
            if (x !== n.current)
                return;
            dr(),
            await r(),
            x === n.current && g(u)
        } catch (u) {
            x === n.current && d(ge(u))
        } finally {
            x === n.current && (l.current = !1,
            i(!1))
        }
    }
    return {
        run: m,
        busy: a,
        error: c,
        clearError: () => d("")
    }
}
const On = new Map;
function Tn(t, s, r=!1) {
    const a = "nomerok-trade-toast:" + t
      , i = On.get(t) ?? new Set;
    try {
        const c = JSON.parse(localStorage.getItem(a) ?? "[]");
        if (Array.isArray(c))
            for (const d of c)
                typeof d == "string" && i.add(d)
    } catch {}
    if (i.has(s))
        return !0;
    if (r) {
        i.add(s);
        const c = new Set([...i].slice(-100));
        On.set(t, c);
        try {
            localStorage.setItem(a, JSON.stringify([...c]))
        } catch {}
    }
    return !1
}
function za({blocked: t, onOpen: s}) {
    const {api: r, principalId: a, account: i} = he()
      , {revision: c} = Ot()
      , d = Tt()
      , [l,n] = o.useState(null)
      , m = o.useRef(null)
      , h = o.useRef({
        blocked: t,
        onOpen: s
    });
    return o.useLayoutEffect( () => {
        h.current = {
            blocked: t,
            onOpen: s
        }
    }
    , [t, s]),
    o.useEffect( () => {
        n(null),
        m.current = null
    }
    , [a]),
    o.useEffect( () => {
        if (!a || i.mode !== "registered")
            return;
        const w = new AbortController;
        return r.trades.feed({
            direction: "INCOMING"
        }, w.signal).then(g => {
            w.signal.aborted || (m.current = g.items.find(x => !x.read && x.status === "PENDING" && x.offer.status === "PENDING" && !Tn(a, x.id)) ?? null)
        }
        , () => {}
        ),
        () => w.abort()
    }
    , [r, a, i.mode, c]),
    o.useEffect( () => {
        if (!a)
            return;
        let w = !1;
        const g = async () => {
            const u = m.current;
            if (!u || w || document.hidden || h.current.blocked || document.querySelector('[role="dialog"],dialog[open]') || en(a))
                return;
            const p = () => {
                w || document.hidden || h.current.blocked || ar("trade:" + a) && (Tn(a, u.id, !0) ? Lt("trade:" + a) : n({
                    actor: a,
                    event: u
                }),
                m.current = null)
            }
            ;
            if (navigator.locks)
                try {
                    await navigator.locks.request("nomerok-trade-toast:" + a, {
                        ifAvailable: !0
                    }, y => {
                        y && p()
                    }
                    )
                } catch {}
            else
                p()
        }
          , x = window.setInterval( () => void g(), 500);
        return g(),
        () => {
            w = !0,
            clearInterval(x),
            Lt("trade:" + a)
        }
    }
    , [a]),
    !l || l.actor !== a || t ? null : e.jsx(tn, {
        message: {
            id: Number(l.event.sequence),
            kind: "notice",
            text: "Новое предложение от " + l.event.offer.peer.nickname,
            action: {
                label: "Посмотреть",
                run: () => {
                    d.run("trade-seen", {
                        eventIds: [l.event.id]
                    }, () => {}
                    ),
                    h.current.onOpen(l.event.offer),
                    n(null),
                    Lt("trade:" + a)
                }
            }
        },
        onDone: () => {
            n(null),
            Lt("trade:" + a)
        }
    })
}
const Ja = t => "/frame-materials/thumbnails/" + encodeURIComponent(t) + ".png";
function Us(t, s) {
    return s.kind === "slot" ? t.slots[s.slot] : t.plates[s.plateId] ?? null
}
function Qa({onLogin: t}) {
    const s = xt();
    return s.request ? e.jsx(Za, {
        request: s.request,
        onLogin: t
    }, s.request.target.kind === "slot" ? "slot-" + s.request.target.slot : s.request.target.plateId) : null
}
function Za({request: t, onLogin: s}) {
    var J;
    const r = xt()
      , {port: a, state: i} = r
      , c = he()
      , [d,l] = o.useState( () => {
        var W;
        return Rn(((W = i.pendingPurchase) == null ? void 0 : W.frameId) ?? (t.previewFrameId === void 0 ? Us(i, t.target) : t.previewFrameId))
    }
    )
      , [n,m] = o.useState("available")
      , [h,w] = o.useState(null)
      , [g,x] = o.useState("")
      , [u,p] = o.useState(0)
      , [y,v] = o.useState(i.pendingPurchase ? "unknown" : "choose")
      , [N,j] = o.useState("")
      , [k,f] = o.useState("")
      , C = o.useRef(t.target)
      , E = o.useRef(!1)
      , R = o.useRef(i.pendingPurchase ? {
        state: "unknown",
        ...i.pendingPurchase
    } : null)
      , P = o.useRef(i.accountId)
      , A = o.useRef(!0)
      , [I,T] = o.useState(0);
    o.useEffect( () => (A.current = !0,
    () => {
        A.current = !1
    }
    ), []),
    o.useEffect( () => {
        const W = new AbortController;
        return x(""),
        a.catalog(W.signal).then(z => {
            W.signal.aborted || w(z)
        }
        , () => {
            W.signal.aborted || x("Не удалось загрузить рамки. Попробуй ещё раз.")
        }
        ),
        () => W.abort()
    }
    , [a, u]),
    o.useEffect( () => {
        const W = () => T(z => z + 1);
        return window.addEventListener("nomerok-intent-activity", W),
        window.addEventListener("nomerok-intent-change", W),
        () => {
            window.removeEventListener("nomerok-intent-activity", W),
            window.removeEventListener("nomerok-intent-change", W)
        }
    }
    , []),
    o.useEffect( () => {
        P.current !== i.accountId && r.close()
    }
    , [i.accountId, r.close]);
    const Q = Rn(Us(i, t.target))
      , F = d === null || i.owned.includes(d)
      , X = y === "purchase" || y === "assign"
      , L = !!c.principalId && ($e(c.principalId) || yt(c.principalId))
      , _ = a.unavailable(t.target)
      , U = BigInt(Ms)
      , D = BigInt(i.balanceGameRub)
      , $ = U > D ? U - D : 0n
      , te = ((J = pa(d)) == null ? void 0 : J.title) ?? "Без рамки";
    function O(W) {
        E.current || y === "unknown" || (l(W),
        r.remember(W),
        v("choose"),
        j(""),
        f(""))
    }
    function B() {
        E.current || r.close()
    }
    async function K(W, z=!1) {
        var xe;
        const ce = i.accountId;
        if (ce) {
            v("assign");
            try {
                if (await a.assign({
                    accountId: ce,
                    target: C.current,
                    frameId: W
                }),
                !A.current || a.read().accountId !== ce)
                    return;
                const re = C.current;
                if (re.kind === "plate") {
                    const me = (xe = a.read().plateTargets) == null ? void 0 : xe[re.plateId];
                    (me == null ? void 0 : me.lifeId) === re.lifeId && (C.current = {
                        ...re,
                        expectedVersion: me.version
                    })
                }
                f(z ? "Рамка куплена и надета" : W ? "Рамка надета" : "Рамка снята. Она осталась у тебя."),
                j("")
            } catch (re) {
                if (!A.current || a.read().accountId !== ce)
                    return;
                const me = re instanceof Error ? re.message : "Не удалось надеть рамку. Попробуй ещё раз.";
                j(z ? me.includes("больше недоступен") ? "Рамка куплена и осталась у тебя. Этот номер больше недоступен." : "Рамка куплена. Не удалось надеть её на номер. Попробуй ещё раз." : me)
            } finally {
                A.current && v("choose")
            }
        }
    }
    async function S(W=!1) {
        if (E.current || !i.accountId || !i.registered || L)
            return;
        E.current = !0;
        const z = i.accountId;
        j(""),
        f("");
        try {
            if (W || !F && d) {
                v("purchase");
                const ce = W && R.current ? await a.reconcile(z, R.current.key) : await a.purchase({
                    accountId: z,
                    frameId: d,
                    key: crypto.randomUUID()
                });
                if (!A.current || a.read().accountId !== z)
                    return;
                if (R.current = ce,
                ce.state === "unknown") {
                    v("unknown");
                    return
                }
                if (ce.state === "declined") {
                    v("choose"),
                    j(ce.reason);
                    return
                }
                await c.refreshGame(),
                await K(ce.frameId, !0)
            } else
                await K(d)
        } catch (ce) {
            A.current && (j(ce instanceof Error ? ce.message : "Не удалось выполнить действие. Попробуй ещё раз."),
            v(W ? "unknown" : "choose"))
        } finally {
            E.current = !1
        }
    }
    function M() {
        r.suspend(),
        s( () => r.resume())
    }
    return e.jsx(ke, {
        title: "Рамки",
        onClose: B,
        children: e.jsxs("div", {
            className: "frame-shop",
            "data-phase": y,
            "aria-busy": X,
            children: [e.jsxs("div", {
                className: "frame-shop-scroll",
                children: [e.jsxs("div", {
                    className: "frame-shop-meta",
                    children: [e.jsx("span", {
                        children: t.label
                    }), e.jsx("strong", {
                        "aria-label": "Баланс игровых рублей: " + q(i.balanceGameRub),
                        children: q(i.balanceGameRub)
                    })]
                }), e.jsxs("div", {
                    className: "frame-showcase",
                    children: [e.jsx(Qe, {
                        p: t.plate,
                        frameId: d,
                        reserve: !0
                    }), e.jsx("strong", {
                        children: te
                    }), e.jsx("p", {
                        children: "Укрась номер. Рамка не меняет его редкость."
                    })]
                }), y === "confirm" ? e.jsxs("section", {
                    className: "frame-confirm",
                    children: [e.jsx("h3", {
                        children: "Купить рамку?"
                    }), e.jsx("strong", {
                        children: te
                    }), e.jsxs("p", {
                        children: ["Цена: ", q(Ms)]
                    }), e.jsxs("p", {
                        children: ["На балансе: ", q(i.balanceGameRub)]
                    }), e.jsx("p", {
                        children: "Рамка останется у тебя. Её можно ставить на свои номера."
                    })]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: "frame-tabs",
                        role: "group",
                        "aria-label": "Виды рамок",
                        children: [e.jsx("button", {
                            "aria-pressed": n === "available",
                            disabled: X || y === "unknown",
                            onClick: () => m("available"),
                            children: "С надписями"
                        }), e.jsx("button", {
                            "aria-pressed": n === "future",
                            disabled: X || y === "unknown",
                            onClick: () => m("future"),
                            children: "Цветные · скоро"
                        })]
                    }), e.jsx(Xa, {
                        catalog: h,
                        loadError: g,
                        retry: () => p(W => W + 1),
                        future: n === "future",
                        plate: t.plate,
                        applied: Q,
                        selected: d,
                        owned: new Set(i.owned),
                        locked: X || y === "unknown",
                        choose: O
                    })]
                })]
            }), e.jsx(ei, {
                available: n === "available" && !!h && !g,
                registered: i.registered,
                error: N,
                notice: k,
                unavailable: _,
                moneyBlocked: L,
                phase: y,
                busy: X,
                owned: F,
                missing: $,
                selected: d,
                applied: Q,
                check: () => void S(!0),
                login: M,
                activate: () => {
                    !F && y !== "confirm" ? (v("confirm"),
                    j("")) : S()
                }
                ,
                cancel: () => v("choose")
            })]
        })
    })
}
function Xa({catalog: t, loadError: s, retry: r, future: a, plate: i, applied: c, selected: d, owned: l, locked: n, choose: m}) {
    return s ? e.jsxs("div", {
        role: "alert",
        children: [e.jsx("p", {
            children: s
        }), e.jsx(b, {
            secondary: !0,
            onClick: r,
            children: "Повторить"
        })]
    }) : t ? a ? e.jsxs(e.Fragment, {
        children: [e.jsx("h3", {
            children: "Цветные рамки"
        }), e.jsx("p", {
            children: "Появятся в будущем обновлении"
        }), e.jsx("div", {
            className: "frame-grid",
            children: t.filter(h => h.availability === "coming_soon").map( (h, w) => e.jsxs("div", {
                className: "frame-future",
                "data-future-id": h.id,
                children: [e.jsx("div", {
                    className: "frame-future-image",
                    style: {
                        "--future-hue": String(w * 29)
                    },
                    "aria-hidden": "true",
                    children: e.jsx("img", {
                        src: Ja(h.id),
                        alt: "",
                        loading: "lazy",
                        onError: g => {
                            g.currentTarget.hidden = !0
                        }
                    })
                }), e.jsx("strong", {
                    children: "Новая рамка"
                }), e.jsx("span", {
                    children: "Скоро"
                })]
            }, h.id))
        })]
    }) : e.jsxs("div", {
        className: "frame-grid",
        children: [e.jsxs("button", {
            className: "frame-card",
            "aria-pressed": d === null,
            disabled: n,
            onClick: () => m(null),
            children: [e.jsx(Qe, {
                p: i,
                small: !0,
                reserve: !0
            }), e.jsx("strong", {
                children: "Без рамки"
            }), e.jsx("span", {
                children: c === null ? "На номере" : "Бесплатно"
            })]
        }), t.filter(h => h.availability === "available").map(h => e.jsxs("button", {
            className: "frame-card",
            "data-product-id": h.id,
            "aria-pressed": d === h.id,
            disabled: n,
            onClick: () => m(h.id),
            children: [e.jsx(Qe, {
                p: i,
                frameId: h.id,
                small: !0,
                reserve: !0
            }), e.jsx("strong", {
                children: h.title
            }), e.jsx("span", {
                children: c === h.id ? "На номере" : l.has(h.id) ? "Куплена" : q(h.priceGameRub)
            })]
        }, h.id))]
    }) : e.jsx("p", {
        role: "status",
        children: "Загружаем рамки…"
    })
}
function ei(t) {
    const {available: s, registered: r, error: a, notice: i, unavailable: c, moneyBlocked: d, phase: l, check: n, login: m} = t;
    let h = null;
    return s && (l === "unknown" ? h = e.jsxs(e.Fragment, {
        children: [e.jsx("p", {
            role: "status",
            children: "Проверяем покупку. Не покупай повторно."
        }), e.jsx(b, {
            onClick: n,
            children: "Проверить покупку"
        })]
    }) : r ? h = e.jsx(ti, {
        ...t
    }) : h = e.jsx(b, {
        onClick: m,
        children: "Войди, чтобы купить рамку"
    })),
    e.jsxs("div", {
        className: "frame-shop-footer",
        children: [e.jsx("p", {
            className: "frame-currency",
            children: "Покупка за игровые рубли"
        }), a && e.jsx("p", {
            className: "field-error",
            role: "alert",
            children: a
        }), i && e.jsx("p", {
            role: "status",
            children: i
        }), s && c && e.jsx("p", {
            role: "status",
            children: c
        }), s && d && e.jsx("p", {
            role: "status",
            children: "Сначала проверь результат предыдущего действия"
        }), h]
    })
}
function ti({busy: t, unavailable: s, moneyBlocked: r, selected: a, applied: i, owned: c, missing: d, phase: l, activate: n, cancel: m}) {
    const h = t || !!s || r || a === i || !c && d > 0n
      , w = l === "purchase" ? "Покупаем…" : l === "assign" ? "Надеваем…" : l === "confirm" ? "Купить и надеть" : a === i ? "На номере" : a === null ? "Снять рамку" : c ? "Надеть" : "Купить за " + q(Ms);
    return e.jsxs(e.Fragment, {
        children: [!c && d > 0n && e.jsxs("p", {
            role: "status",
            children: ["Не хватает ", q(d).replace(" ₽", ""), " игровых рублей"]
        }), e.jsx(b, {
            loading: t,
            disabled: h,
            onClick: n,
            children: w
        }), l === "confirm" && e.jsx(b, {
            secondary: !0,
            onClick: m,
            children: "Отмена"
        })]
    })
}
const Pt = {
    rarity: "Все",
    region: "Все регионы",
    series: "Все серии",
    sort: "Сначала новые",
    min: "",
    max: ""
};
function ur(t) {
    const s = ["GRAY", "BLUE", "PURPLE", "RED", "GOLD"]
      , r = Object.values(Fe).findIndex(a => a.label === t.rarity);
    return {
        ...t.favorite ? {
            favorite: "true"
        } : {},
        ...r >= 0 ? {
            displayTier: s[r]
        } : {},
        ...t.region !== "Все регионы" ? {
            regionCode: t.region
        } : {},
        ...t.series !== "Все серии" ? {
            prestige: t.series === "Статусные" ? "REGULAR" : "JACKPOT"
        } : {}
    }
}
function Vs(t) {
    const s = ["Сначала дороже", "Сначала дешевле", "value", "valueDesc"].includes(t.sort);
    return t.min || t.max || s ? {
        ...t,
        min: "",
        max: "",
        sort: s ? "Сначала новые" : t.sort
    } : t
}
function si(t, s) {
    return {
        ...ur(Vs(t)),
        query: s,
        sort: "new"
    }
}
function ni(t) {
    const s = {
        actor: t,
        collection: Pt,
        history: "Все"
    }
      , [r,a] = o.useState(s)
      , i = r.actor === t ? r : s;
    return {
        collection: Vs(i.collection),
        history: i.history,
        setCollection: c => a({
            ...i,
            collection: Vs(c)
        }),
        setHistory: c => a({
            ...i,
            history: c
        })
    }
}
function hr({className: t=""}) {
    return e.jsx(ot, {
        name: "coin",
        className: `game-coin ${t}`
    })
}
const mr = o.createContext(null);
function ri(t, s, r) {
    const a = o.useRef(t)
      , i = o.useRef(0)
      , c = o.useRef()
      , d = () => document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches
      , l = o.useCallback( () => {
        var n;
        i.current++,
        (n = c.current) == null || n.cancel()
    }
    , []);
    return o.useLayoutEffect( () => {
        l();
        const n = a.current !== t;
        if (a.current = t,
        !n || !s.current)
            return;
        s.current.scrollTop = 0;
        const m = s.current.querySelector(".page-view");
        m && !d() && (c.current = m.animate([{
            opacity: 0,
            transform: "translateY(6px)"
        }, {
            opacity: 1,
            transform: "none"
        }], {
            duration: 210,
            easing: "cubic-bezier(.2,.75,.25,1)"
        }))
    }
    , [t, r, s, l]),
    o.useLayoutEffect( () => {
        const n = window.matchMedia("(prefers-reduced-motion: reduce)")
          , m = () => {
            var h;
            d() && ((h = c.current) == null || h.finish())
        }
        ;
        return n.addEventListener("change", m),
        document.addEventListener("visibilitychange", m),
        () => {
            l(),
            n.removeEventListener("change", m),
            document.removeEventListener("visibilitychange", m)
        }
    }
    , [l]),
    (n, m) => {
        var g;
        if (l(),
        n === a.current)
            return;
        const h = (g = s.current) == null ? void 0 : g.querySelector(".page-view");
        if (!h || d() || document.querySelector('[aria-modal="true"]')) {
            m();
            return
        }
        const w = i.current;
        c.current = h.animate([{
            opacity: 1,
            transform: "none"
        }, {
            opacity: 0,
            transform: "translateY(-4px)"
        }], {
            duration: 90,
            easing: "ease-in",
            fill: "forwards"
        }),
        c.current.finished.then( () => {
            w === i.current && m()
        }
        , () => {}
        )
    }
}
function ai({state: t, onClose: s, onSaved: r}) {
    var j;
    const {api: a, principalId: i} = he()
      , c = nr()
      , [d,l] = o.useState({
        terms: "",
        "personal-data-consent": ""
    })
      , [n,m] = o.useState(!1)
      , [h,w] = o.useState("")
      , g = ["terms", "personal-data-consent"].filter(k => k === "terms" ? !t.termsAccepted : !t.processingAccepted)
      , x = k => {
        var C;
        const f = (C = c.data) == null ? void 0 : C.documents.find(E => E.key === k);
        return (f == null ? void 0 : f.status) === "PUBLISHED" ? JSON.stringify([f.version, f.contentHash]) : ""
    }
      , u = k => !!d[k] && d[k] === x(k)
      , p = o.useRef(null)
      , y = o.useRef(i)
      , v = o.useRef(!1);
    o.useEffect( () => (y.current = i,
    () => {
        y.current = null
    }
    ), [i]);
    async function N() {
        var k;
        if (!(v.current || !g.length || !g.every(u))) {
            v.current = !0,
            m(!0),
            w("");
            try {
                const f = g.map(E => {
                    var P;
                    const R = (P = c.data) == null ? void 0 : P.documents.find(A => A.key === E);
                    if (!(R != null && R.version) || !R.contentHash || R.status !== "PUBLISHED")
                        throw new Error("Документ ещё не опубликован.");
                    return {
                        key: E,
                        version: R.version,
                        contentHash: R.contentHash,
                        accepted: !0
                    }
                }
                )
                  , C = JSON.stringify(f);
                if (((k = p.current) == null ? void 0 : k.fingerprint) !== C && (p.current = {
                    fingerprint: C,
                    key: crypto.randomUUID()
                }),
                await a.legal.confirm(f, p.current.key),
                y.current !== i)
                    return;
                p.current = null,
                r(),
                s()
            } catch (f) {
                y.current === i && (w(ua(f)),
                f instanceof Error && "envelope" in f && f.envelope.error.code === "LEGAL_VERSION_CHANGED" && (l({
                    terms: "",
                    "personal-data-consent": ""
                }),
                p.current = null,
                c.reload()))
            } finally {
                v.current = !1,
                y.current === i && m(!1)
            }
        }
    }
    return e.jsx(ke, {
        title: "Подтверди условия",
        onClose: s,
        children: e.jsxs("div", {
            className: "stack legal-confirm",
            children: [e.jsx("p", {
                className: "body-copy",
                children: "Для продолжения проверь и подтверди условия ниже."
            }), g.map(k => {
                var f;
                return e.jsxs("div", {
                    className: "legal-checkbox",
                    children: [e.jsx("label", {
                        className: "legal-checkbox-hit",
                        children: e.jsx("input", {
                            id: "current-" + k,
                            "aria-label": k === "terms" ? "Принимаю пользовательское соглашение" : "Согласен на обработку персональных данных",
                            type: "checkbox",
                            checked: u(k),
                            disabled: n || !x(k),
                            onChange: C => l({
                                ...d,
                                [k]: C.target.checked ? x(k) : ""
                            })
                        })
                    }), e.jsxs("span", {
                        children: [e.jsx("label", {
                            htmlFor: "current-" + k,
                            children: k === "terms" ? "Я принимаю" : "Я даю"
                        }), " ", e.jsx(Yt, {
                            documentKey: k,
                            snapshot: ((f = c.data) == null ? void 0 : f.documents.find(C => C.key === k)) ?? null,
                            children: e.jsx("strong", {
                                children: k === "terms" ? "Пользовательское соглашение" : "согласие на обработку персональных данных"
                            })
                        })]
                    })]
                }, k)
            }
            ), e.jsx("span", {
                className: "auth-privacy-link",
                children: e.jsx(Yt, {
                    documentKey: "privacy",
                    snapshot: ((j = c.data) == null ? void 0 : j.documents.find(k => k.key === "privacy")) ?? null,
                    children: e.jsx("em", {
                        children: "Политика обработки персональных данных"
                    })
                })
            }), !!c.error && e.jsxs("p", {
                role: "alert",
                children: ["Не удалось загрузить документы. ", e.jsx("button", {
                    type: "button",
                    className: "legal-link",
                    onClick: c.reload,
                    children: "Повторить"
                })]
            }), h && e.jsx("p", {
                role: "alert",
                children: h
            }), e.jsx(b, {
                loading: n,
                disabled: !g.length || !g.every(u) || !c.data,
                onClick: () => void N(),
                children: "Подтвердить"
            }), e.jsx(b, {
                secondary: !0,
                onClick: s,
                children: "Позже"
            })]
        })
    })
}
function ii({enabled: t}) {
    const {api: s, principalId: r, prepareGame: a} = he()
      , [i,c] = o.useState(null)
      , [d,l] = o.useState(0);
    return o.useEffect( () => {
        if (c(null),
        !t || !r)
            return;
        let n = !0;
        return s.legal.state().then(m => {
            n && c(m.required && (!m.processingAccepted || !m.termsAccepted) ? m : null)
        }
        , () => {}
        ),
        () => {
            n = !1
        }
    }
    , [t, r, s, d]),
    o.useEffect( () => {
        const n = () => l(m => m + 1);
        return window.addEventListener("nomerok-legal-required", n),
        () => window.removeEventListener("nomerok-legal-required", n)
    }
    , []),
    t && i ? e.jsx(ai, {
        state: i,
        onClose: () => c(null),
        onSaved: () => {
            a()
        }
    }) : null
}
const Fn = {
    plate: e.jsxs(e.Fragment, {
        children: [e.jsx("rect", {
            x: "2",
            y: "5",
            width: "20",
            height: "14",
            rx: "2"
        }), e.jsx("path", {
            d: "M16 5v14M5 10h3m3 0h2m6-1h1m-1 5h1"
        })]
    }),
    grid: e.jsxs(e.Fragment, {
        children: [e.jsx("rect", {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
            rx: "1"
        }), e.jsx("rect", {
            x: "14",
            y: "3",
            width: "7",
            height: "7",
            rx: "1"
        }), e.jsx("rect", {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            rx: "1"
        }), e.jsx("rect", {
            x: "14",
            y: "14",
            width: "7",
            height: "7",
            rx: "1"
        })]
    }),
    market: e.jsx(e.Fragment, {
        children: e.jsx("path", {
            d: "M3 9h18l-2-6H5L3 9ZM4 9v12h16V9M9 21v-8h6v8M3 9c0 4 6 4 6 0 0 4 6 4 6 0 0 4 6 4 6 0"
        })
    }),
    trophy: e.jsx(e.Fragment, {
        children: e.jsx("path", {
            d: "M8 3h8v6a4 4 0 0 1-8 0V3Zm4 10v6m-4 2h8M8 5H3v2c0 4 5 4 5 4m8-6h5v2c0 4-5 4-5 4"
        })
    }),
    history: e.jsx(e.Fragment, {
        children: e.jsx("path", {
            d: "M3 10a9 9 0 1 1 1 8M3 4v6h6m3-4v6l4 2"
        })
    }),
    plus: e.jsx("path", {
        d: "M12 5v14M5 12h14"
    }),
    close: e.jsx("path", {
        d: "m6 6 12 12M6 18 18 6"
    }),
    right: e.jsx("path", {
        d: "m9 5 7 7-7 7"
    }),
    back: e.jsx("path", {
        d: "m14 5-7 7 7 7"
    }),
    pin: e.jsxs(e.Fragment, {
        children: [e.jsx("path", {
            d: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
        }), e.jsx("circle", {
            cx: "12",
            cy: "10",
            r: "2"
        })]
    }),
    dice: e.jsxs(e.Fragment, {
        children: [e.jsx("rect", {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "3"
        }), e.jsx("path", {
            d: "M7 7h.1M17 7h.1M12 12h.1M7 17h.1M17 17h.1"
        })]
    }),
    letters: e.jsx("path", {
        d: "m5 20 7-16 7 16M8 14h8"
    }),
    down: e.jsx("path", {
        d: "m7 10 5 5 5-5"
    }),
    sun: e.jsxs(e.Fragment, {
        children: [e.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "4"
        }), e.jsx("path", {
            d: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"
        })]
    }),
    moon: e.jsx("path", {
        d: "M20 14A8 8 0 0 1 10 4a8.5 8.5 0 1 0 10 10Z"
    }),
    check: e.jsx("path", {
        d: "m5 12 4 4L19 6"
    }),
    filter: e.jsxs(e.Fragment, {
        children: [e.jsx("path", {
            d: "M4 7h16M4 17h16"
        }), e.jsx("circle", {
            cx: "8",
            cy: "7",
            r: "2",
            fill: "var(--surface)"
        }), e.jsx("circle", {
            cx: "16",
            cy: "17",
            r: "2",
            fill: "var(--surface)"
        })]
    }),
    search: e.jsxs(e.Fragment, {
        children: [e.jsx("circle", {
            cx: "10",
            cy: "10",
            r: "6"
        }), e.jsx("path", {
            d: "m15 15 5 5"
        })]
    }),
    auto: e.jsx(e.Fragment, {
        children: e.jsx("path", {
            d: "m13 2-8 12h6l-1 8 9-12h-7l1-8Z"
        })
    }),
    stop: e.jsx("rect", {
        x: "6",
        y: "6",
        width: "12",
        height: "12",
        rx: "1",
        fill: "currentColor",
        stroke: "none"
    }),
    double: e.jsxs(e.Fragment, {
        children: [e.jsx("rect", {
            x: "7",
            y: "7",
            width: "14",
            height: "14",
            rx: "2"
        }), e.jsx("path", {
            d: "M16 7V3H3v13h4"
        })]
    }),
    info: e.jsxs(e.Fragment, {
        children: [e.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "9"
        }), e.jsx("path", {
            d: "M12 11v6m0-11v1"
        })]
    }),
    user: e.jsxs(e.Fragment, {
        children: [e.jsx("circle", {
            cx: "12",
            cy: "8",
            r: "4"
        }), e.jsx("path", {
            d: "M4 21v-2a8 8 0 0 1 16 0v2"
        })]
    }),
    lock: e.jsxs(e.Fragment, {
        children: [e.jsx("rect", {
            x: "5",
            y: "10",
            width: "14",
            height: "11",
            rx: "2"
        }), e.jsx("path", {
            d: "M8 10V6a4 4 0 0 1 8 0v4"
        })]
    }),
    offline: e.jsx(e.Fragment, {
        children: e.jsx("path", {
            d: "M2 7c5-4 15-4 20 0M5 11c4-3 10-3 14 0m-10 4c2-1 4-1 6 0m-3 4v1M3 3l18 18"
        })
    }),
    clock: e.jsxs(e.Fragment, {
        children: [e.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "9"
        }), e.jsx("path", {
            d: "M12 6v6l4 2"
        })]
    }),
    tasks: e.jsxs(e.Fragment, {
        children: [e.jsx("rect", {
            x: "4",
            y: "3",
            width: "16",
            height: "18",
            rx: "2"
        }), e.jsx("path", {
            d: "m7 9 1 1 2-2m3 1h4m-10 6 1 1 2-2m3 1h4"
        })]
    }),
    logout: e.jsx(e.Fragment, {
        children: e.jsx("path", {
            d: "M9 3H4v18h5m7-14 5 5-5 5m-6-5h11"
        })
    }),
    telegram: e.jsx("path", {
        d: "m3 11 18-8-4 18-6-5-4 3 1-7 13-9-10 13"
    }),
    settings: e.jsxs(e.Fragment, {
        children: [e.jsx("path", {
            d: "m9 3-1 3-3 1 1 3-3 2 3 2-1 3 3 1 1 3h6l1-3 3-1-1-3 3-2-3-2 1-3-3-1-1-3H9Z"
        }), e.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "3"
        })]
    })
};
function Mt({name: t, size: s=22}) {
    return e.jsx("svg", {
        width: s,
        height: s,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: Fn[t] ?? Fn.info
    })
}
const fr = "nomerok-design-onboarding-v1"
  , ns = ["region", "spin", "save", "profile", "navigation"]
  , li = () => ({
    view: "welcome",
    profile: "guest"
});
function oi() {
    try {
        const t = JSON.parse(localStorage.getItem(fr) || "null");
        if ((t == null ? void 0 : t.version) === 1 && ["experienced", "completed"].includes(t.choice))
            return null
    } catch {}
    return li()
}
const ci = 300
  , Is = ({view: t, profile: s}) => t === "welcome" ? "origin" : t === "profile" ? `profile-${s}` : t === "save" ? "create-ordinary" : "create-empty"
  , Rs = t => `translate(${t.x}px, ${t.y}px) scale(${t.width}, ${t.height})`
  , Ls = (t, s, r) => `inset(${t.y}px ${s - t.x - t.width}px ${r - t.y - t.height}px ${t.x}px round 16px)`;
function As(t, s) {
    const r = t.cloneNode(!0);
    return r.classList.add(s),
    r.removeAttribute("id"),
    r.removeAttribute("role"),
    r.removeAttribute("aria-modal"),
    r.setAttribute("aria-hidden", "true"),
    r.inert = !0,
    r.querySelectorAll("[data-onboarding-preserve]").forEach(a => a.remove()),
    r.querySelectorAll("[id]").forEach(a => a.removeAttribute("id")),
    r
}
function di({x: t, y: s, width: r, height: a}) {
    const i = Math.min(14, r / 2, a / 2);
    return `M${t + i},${s}H${t + r - i}Q${t + r},${s} ${t + r},${s + i}V${s + a - i}Q${t + r},${s + a} ${t + r - i},${s + a}H${t + i}Q${t},${s + a} ${t},${s + a - i}V${s + i}Q${t},${s} ${t + i},${s}Z`
}
function ui(t, s, r) {
    const a = t.getBoundingClientRect()
      , i = t.clientWidth
      , c = t.clientHeight
      , d = r.flatMap(k => {
        var f;
        return [...((f = t.querySelector(":scope > .app-surface")) == null ? void 0 : f.querySelectorAll(k)) ?? []]
    }
    ).map(k => k.getBoundingClientRect()).filter(k => k.width && k.height)
      , l = s.offsetLeft
      , n = s.offsetWidth
      , m = s.scrollHeight + s.offsetHeight - s.clientHeight;
    let h = null;
    if (d.length) {
        const k = Math.max(4, Math.min(...d.map(C => C.left)) - a.left - 5)
          , f = Math.max(4, Math.min(...d.map(C => C.top)) - a.top - 5);
        h = {
            x: k,
            y: f,
            width: Math.min(i - 4, Math.max(...d.map(C => C.right)) - a.left + 5) - k,
            height: Math.min(c - 4, Math.max(...d.map(C => C.bottom)) - a.top + 5) - f
        }
    }
    const w = 14
      , g = 38;
    let x = c - w * 2
      , u = Math.min(m, x)
      , p = (c - u) / 2;
    if (h) {
        const k = c - h.y - h.height - g - w
          , f = h.y - g - w;
        if (k >= u)
            p = h.y + h.height + g;
        else if (f >= u)
            p = h.y - u - g;
        else {
            const C = k >= f;
            x = Math.max(120, C ? k : f),
            u = Math.min(m, x),
            p = C ? h.y + h.height + g : h.y - u - g
        }
    }
    p = Math.round(Math.max(w, Math.min(p, c - u - w)));
    const y = {
        x: l,
        y: p,
        width: n,
        height: u
    }
      , v = h ?? {
        x: i / 2,
        y: c / 2,
        width: 0,
        height: 0
    }
      , N = [{
        x: 0,
        y: 0,
        width: i,
        height: v.y
    }, {
        x: 0,
        y: v.y + v.height,
        width: i,
        height: c - v.y - v.height
    }, {
        x: 0,
        y: v.y,
        width: v.x,
        height: v.height
    }, {
        x: v.x + v.width,
        y: v.y,
        width: i - v.x - v.width,
        height: v.height
    }];
    return {
        placement: {
            card: y,
            target: h,
            panes: N,
            width: i,
            height: c,
            intro: !h
        },
        limit: x
    }
}
function hi({stage: t, app: s, onStage: r, onClose: a}) {
    const [i,c] = o.useState(!1)
      , [d,l] = o.useState("")
      , [n,m] = o.useState(!1)
      , h = o.useRef(null)
      , w = o.useRef(null)
      , g = o.useRef(null)
      , x = o.useRef(null)
      , u = o.useRef(null)
      , p = o.useRef(null)
      , y = o.useRef(null)
      , v = o.useRef(null)
      , N = o.useRef(null)
      , j = o.useRef(null)
      , k = o.useRef(null)
      , f = o.useRef(null)
      , C = o.useRef(null)
      , E = o.useRef(null)
      , R = o.useRef(!1)
      , P = o.useRef(!1)
      , A = o.useRef(new Set)
      , I = o.useRef(new Set)
      , T = o.useRef({})
      , Q = o.useRef(null)
      , F = o.useRef("")
      , X = o.useRef({
        onStage: r,
        onClose: a
    });
    o.useLayoutEffect( () => {
        X.current = {
            onStage: r,
            onClose: a
        }
    }
    , [r, a]);
    const L = ns.indexOf(t.view) + 1;
    async function _(B, K, S=ci, M=0) {
        const J = K[K.length - 1];
        for (const z of ["opacity", "transform", "clipPath"])
            J[z] !== void 0 && (B.style[z] = String(J[z]));
        if (matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
        const W = B.animate(K, {
            duration: S,
            delay: M,
            easing: "cubic-bezier(.4, 0, .2, 1)",
            fill: "both"
        });
        W.startTime = document.timeline.currentTime,
        A.current.add(W);
        try {
            await W.finished
        } catch {} finally {
            W.cancel(),
            A.current.delete(W)
        }
    }
    function U(B) {
        if (!i)
            return "";
        try {
            return localStorage.setItem(fr, JSON.stringify({
                version: 1,
                choice: B
            })),
            l(""),
            ""
        } catch {
            const K = "Не удалось запомнить твой выбор. При следующем входе обучение может появиться снова.";
            return l(K),
            K
        }
    }
    async function D(B) {
        if (!P.current) {
            P.current = !0,
            R.current = !0,
            m(!0);
            for (const K of A.current)
                K.pause();
            u.current && await _(u.current, [{
                opacity: 1
            }, {
                opacity: 0
            }], 120),
            X.current.onClose(B)
        }
    }
    function $(B) {
        var S;
        if (R.current || P.current || !h.current)
            return;
        if (R.current = !0,
        m(!0),
        u.current && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const M = As(h.current, "onboarding-copy-out");
            u.current.append(M),
            T.current.copy = M,
            I.current.add(M)
        }
        const K = (S = s.current) == null ? void 0 : S.querySelector(":scope > .app-surface");
        if (K && s.current && Is(t) !== Is(B)) {
            const M = As(K, "onboarding-scene-out");
            s.current.append(M);
            const J = K.querySelector(".main")
              , W = M.querySelector(".main");
            J && W && (W.scrollTop = J.scrollTop),
            T.current.scene = M,
            I.current.add(M)
        }
        B.view === "complete" && U("completed"),
        X.current.onStage(B)
    }
    o.useLayoutEffect( () => {
        var re, me, ne;
        const B = s.current ?? ((re = u.current) == null ? void 0 : re.closest(".app"))
          , K = B == null ? void 0 : B.querySelector(":scope > .app-surface");
        if (!K || !B)
            return;
        const S = document.activeElement
          , M = (me = S == null ? void 0 : S.textContent) == null ? void 0 : me.trim()
          , J = ((ne = K.querySelector(".main")) == null ? void 0 : ne.scrollTop) ?? 0
          , W = document.querySelector(".design-launcher");
        K.inert = !0,
        K.setAttribute("aria-hidden", "true"),
        W && (W.inert = !0),
        B.classList.add("onboarding-active");
        const z = matchMedia("(prefers-reduced-motion: reduce)")
          , ce = () => {
            if (z.matches)
                for (const ie of A.current)
                    ie.finish()
        }
        ;
        z.addEventListener("change", ce);
        const xe = ie => {
            if (ie.key === "Escape" && (ie.preventDefault(),
            ie.stopImmediatePropagation(),
            D()),
            ie.key !== "Tab" || !h.current)
                return;
            const Se = [...h.current.querySelectorAll("button:not(:disabled)")]
              , ae = Se[0]
              , Y = Se[Se.length - 1];
            if (!ae || !Y) {
                ie.preventDefault();
                return
            }
            ie.shiftKey && (document.activeElement === ae || document.activeElement === h.current) ? (ie.preventDefault(),
            Y.focus()) : !ie.shiftKey && (document.activeElement === Y || document.activeElement === h.current) && (ie.preventDefault(),
            ae.focus())
        }
        ;
        return document.addEventListener("keydown", xe, !0),
        () => {
            for (const ie of A.current)
                ie.cancel();
            I.current.forEach(ie => ie.remove()),
            z.removeEventListener("change", ce),
            document.removeEventListener("keydown", xe, !0),
            K.inert = !1,
            K.removeAttribute("aria-hidden"),
            W && (W.inert = !1),
            B.classList.remove("onboarding-active"),
            requestAnimationFrame( () => {
                var Se;
                (Se = K.querySelector(".main")) == null || Se.scrollTo(0, J);
                const ie = S != null && S.isConnected && S !== document.body ? S : [...K.querySelectorAll("button")].find(ae => {
                    var Y;
                    return M && ((Y = ae.textContent) == null ? void 0 : Y.trim()) === M
                }
                ) ?? K.querySelector(".avatar");
                ie == null || ie.focus({
                    preventScroll: !0
                })
            }
            )
        }
    }
    , [s]),
    o.useLayoutEffect( () => {
        var fe, Ce;
        const B = s.current ?? ((fe = u.current) == null ? void 0 : fe.closest(".app"))
          , K = h.current;
        if (!B || !K || !u.current || !w.current || !g.current)
            return;
        let S = !0
          , M = 0;
        R.current = !0,
        m(!0);
        const J = Q.current
          , W = T.current;
        T.current = {};
        const z = B.querySelector(":scope > .app-surface .main");
        t.view !== "welcome" && (z == null || z.scrollTo(0, 0));
        const ce = B.querySelector(":scope > .app-surface")
          , xe = Is(t);
        if (ce && p.current && F.current !== xe) {
            const H = As(ce, "onboarding-sampled-scene");
            p.current.inert = !0,
            p.current.replaceChildren(H),
            F.current = xe;
            const Ne = H.querySelector(".main");
            Ne && z && (Ne.scrollTop = z.scrollTop)
        }
        const re = t.view === "region" ? [".region-select"] : t.view === "spin" ? [".spin-controls"] : t.view === "save" ? [".terminal-actions"] : t.view === "navigation" ? [".bottom-nav"] : t.view === "profile" ? t.profile === "guest" ? ['[data-onboarding-target="profile"]', '[data-onboarding-target="auth"]'] : ['[data-onboarding-target="profile"]', '[data-onboarding-target="profile-menu"]'] : []
          , me = () => {
            var Ae, Ve, Le, Pe, Ft, Gt;
            M = 0;
            const {placement: H, limit: Ne} = ui(B, K, re)
              , {card: ve, target: oe, panes: Ge, width: V, height: ye} = H
              , {x: je, y: Re, width: Ye, height: pe} = ve;
            K.style.maxHeight = `${Ne}px`,
            K.style.top = `${Re}px`,
            Object.assign(g.current.style, {
                left: `${je}px`,
                top: `${Re}px`,
                width: `${Ye}px`,
                height: `${pe}px`
            }),
            p.current && (p.current.style.clipPath = Ls(ve, V, ye)),
            [...((Ae = y.current) == null ? void 0 : Ae.children) ?? []].forEach( (Ze, ct) => Ze.style.transform = Rs(Ge[ct])),
            y.current && (y.current.style.opacity = H.intro ? "var(--coach-intro-opacity)" : "1"),
            (Ve = x.current) == null || Ve.setAttribute("viewBox", `0 0 ${V} ${ye}`),
            (Le = N.current) == null || Le.setAttribute("d", oe ? `M${oe.x},${oe.y}h${oe.width}v${oe.height}h${-oe.width}Z${di(oe)}` : "");
            for (const Ze of [j, k])
                if (Ze.current && (Ze.current.style.display = oe ? "" : "none",
                oe))
                    for (const [ct,wt] of Object.entries(oe))
                        Ze.current.setAttribute(ct, String(wt));
            if (f.current && (f.current.style.display = oe ? "" : "none"),
            oe) {
                const Ze = Re >= oe.y + oe.height
                  , ct = Ze ? -1 : 1
                  , wt = oe.x + oe.width * (t.view === "profile" ? .75 : .5)
                  , nt = Math.round(Math.max(je + 24, Math.min(wt, je + Ye - 24)))
                  , bs = Math.round(Ze ? Re - 3 : Re + pe + 3)
                  , dt = Math.round(Ze ? oe.y + oe.height + 4 : oe.y - 4);
                (Pe = C.current) == null || Pe.setAttribute("d", `M${nt},${bs}V${dt}`),
                (Ft = E.current) == null || Ft.setAttribute("d", `M${nt - 5},${dt - ct * 5}L${nt},${dt}L${nt + 5},${dt - ct * 5}`)
            }
            return Q.current = H,
            (Gt = u.current) == null || Gt.setAttribute("data-ready", "true"),
            H
        }
          , ne = me()
          , ie = []
          , Se = (H, Ne, ve, oe, Ge=0) => _(H, [{
            opacity: Ne
        }, {
            opacity: ve
        }], oe, Ge);
        if (J) {
            const H = J.card.x - ne.card.x
              , Ne = J.card.y - ne.card.y;
            if (ie.push(_(K, [{
                transform: `translate(${H}px, ${Ne}px)`
            }, {
                transform: "translate(0px, 0px)"
            }])),
            ie.push(_(g.current, [{
                transform: `translate(${H}px, ${Ne}px) scale(${J.card.width / ne.card.width}, ${J.card.height / ne.card.height})`
            }, {
                transform: "translate(0px, 0px) scale(1, 1)"
            }])),
            p.current && ie.push(_(p.current, [{
                clipPath: Ls(J.card, ne.width, ne.height)
            }, {
                clipPath: Ls(ne.card, ne.width, ne.height)
            }])),
            [...((Ce = y.current) == null ? void 0 : Ce.children) ?? []].forEach( (ve, oe) => ie.push(_(ve, [{
                transform: Rs(J.panes[oe])
            }, {
                transform: Rs(ne.panes[oe])
            }]))),
            y.current && ie.push(_(y.current, [{
                opacity: J.intro ? "var(--coach-intro-opacity)" : 1
            }, {
                opacity: ne.intro ? "var(--coach-intro-opacity)" : 1
            }])),
            v.current && ne.target) {
                const ve = ne.target
                  , oe = J.target;
                v.current.style.transformOrigin = `${ve.x}px ${ve.y}px`,
                ie.push(_(v.current, [{
                    opacity: oe ? 1 : 0,
                    transform: oe ? `translate(${oe.x - ve.x}px, ${oe.y - ve.y}px) scale(${oe.width / ve.width}, ${oe.height / ve.height})` : "none"
                }, {
                    opacity: 1,
                    transform: "translate(0px, 0px) scale(1, 1)"
                }]))
            }
            ie.push(Se(w.current, 0, 1, 150, 70)),
            f.current && ie.push(Se(f.current, 0, 1, 80, 220))
        } else
            ie.push(Se(u.current, 0, 1, 180));
        if (W.copy) {
            const H = W.copy;
            ie.push(_(H, [{
                transform: "translate(0px, 0px)",
                opacity: 1,
                offset: 0
            }, {
                opacity: 0,
                offset: .3
            }, {
                transform: `translate(${ne.card.x - ((J == null ? void 0 : J.card.x) ?? ne.card.x)}px, ${ne.card.y - ((J == null ? void 0 : J.card.y) ?? ne.card.y)}px)`,
                opacity: 0,
                offset: 1
            }]))
        }
        W.scene && ie.push(Se(W.scene, 1, 0, 180)),
        Promise.all(ie).then( () => {
            Object.values(W).forEach(H => {
                H.remove(),
                I.current.delete(H)
            }
            ),
            !(!S || P.current) && (R.current = !1,
            m(!1),
            K.focus({
                preventScroll: !0
            }))
        }
        );
        const ae = () => {
            M || (M = requestAnimationFrame( () => {
                S && me()
            }
            ))
        }
          , Y = new ResizeObserver(ae);
        return Y.observe(B),
        Y.observe(w.current),
        document.fonts.ready.then( () => {
            S && ae()
        }
        ),
        () => {
            S = !1,
            Y.disconnect(),
            cancelAnimationFrame(M),
            Object.values(W).forEach(H => {
                H.remove(),
                I.current.delete(H)
            }
            )
        }
    }
    , [s, t]);
    const te = (B, K=t.profile) => void $({
        view: B,
        profile: K
    })
      , O = [["plate", "Создать", "Новые номера"], ["grid", "Коллекция", "Сохранённые номера"], ["market", "Рынок", "Покупки, продажи и аукционы"], ["trophy", "Топы", "Результаты игроков"], ["history", "История", "Номера, сделки и награды"]];
    return e.jsxs("div", {
        className: "onboarding-layer",
        ref: u,
        "data-view": t.view,
        "data-transition": n ? "running" : void 0,
        children: [e.jsx("div", {
            className: "onboarding-sample",
            ref: p,
            "aria-hidden": "true"
        }), e.jsx("div", {
            className: "onboarding-shades",
            ref: y,
            "aria-hidden": "true",
            children: [0, 1, 2, 3].map(B => e.jsx("div", {}, B))
        }), e.jsx("div", {
            className: "onboarding-card-background",
            ref: g,
            "aria-hidden": "true"
        }), e.jsxs("svg", {
            className: "onboarding-mask",
            ref: x,
            "aria-hidden": "true",
            preserveAspectRatio: "none",
            children: [e.jsxs("g", {
                ref: v,
                children: [e.jsx("path", {
                    ref: N,
                    className: "onboarding-shade",
                    fillRule: "evenodd"
                }), e.jsx("rect", {
                    ref: j,
                    className: "onboarding-outline",
                    rx: "14"
                }), e.jsx("rect", {
                    ref: k,
                    className: "onboarding-pulse",
                    rx: "14"
                })]
            }), e.jsxs("g", {
                ref: f,
                className: "onboarding-pointer",
                children: [e.jsx("path", {
                    ref: C
                }), e.jsx("path", {
                    ref: E
                })]
            })]
        }), e.jsx("div", {
            className: "onboarding-card",
            ref: h,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "onboarding-title",
            "aria-busy": n || void 0,
            tabIndex: -1,
            "data-kind": t.view,
            children: e.jsx("div", {
                className: "onboarding-content",
                ref: w,
                children: t.view === "welcome" ? e.jsxs(e.Fragment, {
                    children: [e.jsx("p", {
                        className: "onboarding-lead",
                        id: "onboarding-title",
                        children: "Показать, как крутить номера и собирать коллекцию?"
                    }), e.jsxs("div", {
                        className: "onboarding-welcome-actions",
                        children: [e.jsx("button", {
                            className: "onboarding-primary",
                            disabled: n,
                            onClick: () => te("region"),
                            children: "Показать"
                        }), e.jsx("button", {
                            className: "onboarding-secondary",
                            disabled: n,
                            onClick: () => void D(U("experienced")),
                            children: "Я уже играю"
                        })]
                    }), e.jsx("div", {
                        className: "onboarding-remember-wrap",
                        children: e.jsxs("button", {
                            className: "onboarding-remember",
                            disabled: n,
                            "aria-pressed": i,
                            onClick: () => c(!i),
                            children: [e.jsx("span", {
                                className: "onboarding-check",
                                children: e.jsx(Mt, {
                                    name: "check",
                                    size: 13
                                })
                            }), "Запомнить выбор"]
                        })
                    })]
                }) : t.view === "complete" ? e.jsxs(e.Fragment, {
                    children: [e.jsx("div", {
                        className: "onboarding-complete-mark",
                        children: e.jsx(Mt, {
                            name: "check",
                            size: 21
                        })
                    }), e.jsx("h2", {
                        id: "onboarding-title",
                        children: "Можно играть"
                    }), e.jsx("p", {
                        className: "onboarding-lead",
                        children: "Выбери регион и начни с цифр или букв. Остальное уже знаешь."
                    }), d && e.jsx("p", {
                        role: "status",
                        className: "onboarding-storage-error",
                        children: d
                    }), e.jsxs("div", {
                        className: "onboarding-welcome-actions",
                        children: [e.jsxs("button", {
                            className: "onboarding-primary",
                            disabled: n,
                            onClick: () => void D(),
                            children: ["К игре ", e.jsx(Mt, {
                                name: "right",
                                size: 16
                            })]
                        }), e.jsx("button", {
                            className: "onboarding-secondary",
                            disabled: n,
                            onClick: () => te("welcome"),
                            children: "Пройти ещё раз"
                        })]
                    })]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: "onboarding-meta",
                        children: [e.jsxs("span", {
                            children: [L, " из 5"]
                        }), e.jsx("button", {
                            disabled: n,
                            onClick: () => void D(),
                            children: "Пропустить"
                        })]
                    }), t.view === "region" && e.jsxs(e.Fragment, {
                        children: [e.jsx("h2", {
                            id: "onboarding-title",
                            children: "Выбери регион"
                        }), e.jsx("p", {
                            children: "Нажми на регион над номером: его можно найти по коду или названию."
                        }), e.jsxs("p", {
                            children: ["Рядом указана цена ", e.jsx("strong", {
                                children: "одной прокрутки"
                            }), ". Она зависит от региона."]
                        })]
                    }), t.view === "spin" && e.jsxs(e.Fragment, {
                        children: [e.jsx("h2", {
                            id: "onboarding-title",
                            children: "Цифры и буквы отдельно"
                        }), e.jsxs("p", {
                            children: ["Две кнопки крутят ", e.jsx("strong", {
                                children: "цифры и буквы отдельно"
                            }), ". Нравятся цифры? Оставь их и крути только буквы."]
                        }), e.jsx("p", {
                            children: "Цена попытки указана на кнопке."
                        })]
                    }), t.view === "save" && e.jsxs(e.Fragment, {
                        children: [e.jsx("h2", {
                            id: "onboarding-title",
                            children: "Сохрани удачный номер"
                        }), e.jsxs("p", {
                            children: ["Готовый номер можно ", e.jsx("strong", {
                                children: "сохранить в коллекцию"
                            }), " или продать сразу. Для сохранения войди в аккаунт."]
                        }), e.jsx("p", {
                            children: "Новая прокрутка заменит цифры или буквы."
                        })]
                    }), t.view === "profile" && e.jsxs(e.Fragment, {
                        children: [e.jsx("h2", {
                            id: "onboarding-title",
                            children: "Профиль справа вверху"
                        }), e.jsx("div", {
                            className: "onboarding-profile-views",
                            role: "group",
                            "aria-label": "Вид профиля",
                            children: ["guest", "registered"].map(B => e.jsx("button", {
                                disabled: n,
                                "aria-pressed": t.profile === B,
                                onClick: () => te("profile", B),
                                children: B === "guest" ? "Без входа" : "После входа"
                            }, B))
                        }), t.profile === "guest" ? e.jsxs("p", {
                            children: ["Уже играешь? Нажми ", e.jsx("strong", {
                                children: "«Войти»"
                            }), ". Если аккаунта пока нет, создай его здесь."]
                        }) : e.jsxs("p", {
                            children: ["Здесь твой баланс, ", Xs, "настройки и сообщения. Пароль и почта — в «Настройках». Список устройств — здесь, в профиле."]
                        })]
                    }), t.view === "navigation" && e.jsxs(e.Fragment, {
                        children: [e.jsx("h2", {
                            id: "onboarding-title",
                            children: "Всё остальное внизу"
                        }), e.jsx("ul", {
                            className: "onboarding-nav-explainer",
                            children: O.map( ([B,K,S]) => e.jsxs("li", {
                                children: [e.jsx(Mt, {
                                    name: B,
                                    size: 17
                                }), e.jsx("b", {
                                    children: K
                                }), e.jsx("p", {
                                    children: S
                                })]
                            }, K))
                        })]
                    }), e.jsxs("div", {
                        className: "onboarding-actions",
                        children: [e.jsx("button", {
                            className: "onboarding-secondary",
                            disabled: n,
                            onClick: () => te(L === 1 ? "welcome" : ns[L - 2]),
                            children: "Назад"
                        }), e.jsxs("button", {
                            className: "onboarding-primary",
                            disabled: n,
                            onClick: () => te(L === 5 ? "complete" : ns[L]),
                            children: [L === 5 ? "Всё понятно" : "Дальше", e.jsx(Mt, {
                                name: L === 5 ? "check" : "right",
                                size: 16
                            })]
                        })]
                    }), e.jsx("div", {
                        className: "onboarding-track",
                        "aria-hidden": "true",
                        children: ns.map( (B, K) => e.jsx("span", {
                            className: K < L ? "reached" : ""
                        }, B))
                    })]
                })
            })
        })]
    })
}
const Ps = {
    android: [{
        title: "Откройте сайт в Chrome",
        copy: "Запустите Chrome и откройте nomerokgame.ru. Если вы уже здесь через Chrome, переходите дальше.",
        help: "Игра открыта внутри другого приложения?",
        helpCopy: "Перейдите в приложение Chrome на телефоне и введите nomerokgame.ru в адресной строке."
    }, {
        title: "Нажмите на три точки",
        copy: "В Chrome нажмите ⋮ справа от адресной строки. Откроется меню браузера.",
        help: "Не видите меню?",
        helpCopy: "Проверьте, что сайт открыт в самом Chrome. Встроенный браузер другого приложения может выглядеть иначе."
    }, {
        title: "Выберите добавление на экран",
        copy: "Найдите «Установить и создать ярлык». Затем выберите «Установить» или, если установка недоступна, «Создать ярлык».",
        help: "Пункт называется иначе?",
        helpCopy: "В другой версии браузера он может называться «Добавить на главный экран» или «Установить приложение». Выберите доступный вариант."
    }, {
        title: "Подтвердите добавление",
        copy: "В окне телефона нажмите «Установить» или «Добавить». После этого вернитесь к этой инструкции и продолжите вход.",
        help: "Что появится на телефоне?",
        helpCopy: "Значок для быстрого входа в Номерок. Если на значке есть маленький логотип Chrome, это ярлык: он будет открывать игру в браузере."
    }],
    iphone: [{
        title: "Откройте сайт в Safari",
        copy: "Запустите Safari и откройте nomerokgame.ru. Если вы уже здесь через Safari, переходите дальше.",
        help: "Игра открыта внутри другого приложения?",
        helpCopy: "Перейдите в приложение Safari на iPhone и введите nomerokgame.ru в адресной строке."
    }, {
        title: "Откройте «Поделиться»",
        copy: "Нажмите меню страницы → «Поделиться». Если квадрат со стрелкой вверх уже есть на панели Safari, нажмите сразу на него.",
        help: "У вас другая панель Safari?",
        helpCopy: "В зависимости от вида вкладок кнопка «Поделиться» может быть сразу на панели браузера. Тогда меню страницы открывать не нужно."
    }, {
        title: "Добавьте на экран «Домой»",
        copy: "Прокрутите список действий и нажмите «На экран “Домой”». В меню этот пункт также может начинаться со слова «Добавить».",
        help: "Нет пункта «На экран “Домой”»?",
        helpCopy: "Внизу списка нажмите «Редактировать действия» и добавьте действие «На экран “Домой”»."
    }, {
        title: "Нажмите «Добавить»",
        copy: "Задайте название «Номерок». Если есть переключатель «Открыть как веб-приложение», включите его. Нажмите «Добавить» и вернитесь сюда.",
        help: "Переключателя нет?",
        helpCopy: "В других версиях iOS окно может отличаться. Подтвердите добавление доступной кнопкой «Добавить»."
    }]
}
  , mi = {
    phone: e.jsxs(e.Fragment, {
        children: [e.jsx("rect", {
            x: "6",
            y: "2",
            width: "12",
            height: "20",
            rx: "2.5"
        }), e.jsx("path", {
            d: "M10 5h4M11 19h2"
        })]
    }),
    more: e.jsxs(e.Fragment, {
        children: [e.jsx("circle", {
            cx: "12",
            cy: "5",
            r: "1"
        }), e.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }), e.jsx("circle", {
            cx: "12",
            cy: "19",
            r: "1"
        })]
    }),
    menu: e.jsxs(e.Fragment, {
        children: [e.jsx("circle", {
            cx: "5",
            cy: "12",
            r: "1"
        }), e.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "1"
        }), e.jsx("circle", {
            cx: "19",
            cy: "12",
            r: "1"
        })]
    }),
    share: e.jsx(e.Fragment, {
        children: e.jsx("path", {
            d: "M8 9H5v12h14V9h-3M12 3v12m-4-8 4-4 4 4"
        })
    }),
    bookmark: e.jsx("path", {
        d: "M6 3h12v18l-6-4-6 4V3Z"
    }),
    add: e.jsxs(e.Fragment, {
        children: [e.jsx("rect", {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2"
        }), e.jsx("path", {
            d: "M12 7v10M7 12h10"
        })]
    }),
    lock: e.jsxs(e.Fragment, {
        children: [e.jsx("rect", {
            x: "4",
            y: "10",
            width: "16",
            height: "11",
            rx: "2"
        }), e.jsx("path", {
            d: "M8 10V6a4 4 0 0 1 8 0v4m-4 4v3"
        })]
    }),
    star: e.jsx("path", {
        d: "m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"
    })
};
function fs({name: t}) {
    return e.jsx("svg", {
        viewBox: "0 0 24 24",
        width: "18",
        height: "18",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: mi[t]
    })
}
function ps({highlight: t=!1, menu: s}) {
    return e.jsxs("div", {
        className: "home-guide-toolbar",
        children: [e.jsxs("div", {
            className: "home-guide-address" + (t ? " home-guide-target" : ""),
            children: [e.jsx(fs, {
                name: "lock"
            }), e.jsx("span", {
                children: "nomerokgame.ru"
            })]
        }), s && e.jsx("span", {
            className: "home-guide-icon-target",
            children: e.jsx(fs, {
                name: s
            })
        })]
    })
}
function mt({icon: t, children: s, highlighted: r=!1}) {
    return e.jsxs("div", {
        className: "home-guide-menu-row" + (r ? " home-guide-target" : ""),
        children: [e.jsx(fs, {
            name: t
        }), e.jsx("span", {
            children: s
        })]
    })
}
function pr() {
    return e.jsxs("div", {
        className: "home-guide-app-row",
        children: [e.jsx("span", {
            className: "home-guide-app-icon",
            children: "Н"
        }), e.jsxs("div", {
            children: [e.jsx("div", {
                children: "Номерок"
            }), e.jsx("small", {
                children: "nomerokgame.ru"
            })]
        })]
    })
}
function fi({action: t}) {
    return t === 0 ? e.jsx("div", {
        className: "home-guide-browser",
        children: e.jsx(ps, {
            highlight: !0
        })
    }) : t === 1 ? e.jsx("div", {
        className: "home-guide-browser",
        children: e.jsx(ps, {
            menu: "more"
        })
    }) : t === 2 ? e.jsxs("div", {
        className: "home-guide-menu",
        children: [e.jsx(mt, {
            icon: "star",
            children: "Добавить в закладки"
        }), e.jsx(mt, {
            icon: "phone",
            highlighted: !0,
            children: "Установить и создать ярлык"
        }), e.jsx(mt, {
            icon: "share",
            children: "Поделиться"
        })]
    }) : e.jsxs("div", {
        className: "home-guide-browser",
        children: [e.jsx("div", {
            className: "home-guide-confirm-title",
            children: e.jsx("span", {
                children: "Установка приложения"
            })
        }), e.jsx(pr, {}), e.jsx("div", {
            className: "home-guide-confirm-footer",
            children: e.jsx("span", {
                className: "home-guide-confirm-action",
                children: "Установить"
            })
        })]
    })
}
function pi({action: t}) {
    return t === 0 ? e.jsx("div", {
        className: "home-guide-browser",
        children: e.jsx(ps, {
            highlight: !0
        })
    }) : t === 1 ? e.jsxs("div", {
        className: "home-guide-browser",
        children: [e.jsx(ps, {
            menu: "menu"
        }), e.jsxs("div", {
            className: "home-guide-menu",
            children: [e.jsx(mt, {
                icon: "share",
                highlighted: !0,
                children: "Поделиться"
            }), e.jsx(mt, {
                icon: "bookmark",
                children: "Добавить в закладки"
            })]
        })]
    }) : t === 2 ? e.jsxs("div", {
        className: "home-guide-menu",
        children: [e.jsx(mt, {
            icon: "star",
            children: "Добавить в Избранное"
        }), e.jsx(mt, {
            icon: "add",
            highlighted: !0,
            children: "На экран «Домой»"
        }), e.jsx(mt, {
            icon: "bookmark",
            children: "Добавить в список для чтения"
        })]
    }) : e.jsxs("div", {
        className: "home-guide-browser",
        children: [e.jsxs("div", {
            className: "home-guide-confirm-title",
            children: [e.jsx("span", {
                children: "На экран «Домой»"
            }), e.jsx("span", {
                className: "home-guide-confirm-action",
                children: "Добавить"
            })]
        }), e.jsx(pr, {}), e.jsxs("div", {
            className: "home-guide-toggle-row",
            children: [e.jsx("span", {
                children: "Открыть как веб-приложение"
            }), e.jsx("span", {
                className: "home-guide-toggle"
            })]
        })]
    })
}
const xi = {
    android: [{
        label: "Схема · адресная строка Chrome",
        caption: "Введите адрес игры"
    }, {
        label: "Схема · меню Chrome",
        caption: "Нужная кнопка — справа"
    }, {
        label: "Схема · пункт в меню Chrome",
        caption: "Выберите этот пункт"
    }, {
        label: "Схема · подтверждение в Chrome",
        caption: "Подтвердите в окне телефона"
    }],
    iphone: [{
        label: "Схема · адресная строка Safari",
        caption: "Введите адрес игры"
    }, {
        label: "Схема · меню страницы в Safari",
        caption: "Квадрат со стрелкой вверх"
    }, {
        label: "Схема · список действий Safari",
        caption: "Выберите этот пункт"
    }, {
        label: "Схема · добавление на iPhone",
        caption: ""
    }]
};
function ji({phone: t, action: s}) {
    const {label: r, caption: a} = xi[t][s];
    return e.jsxs("figure", {
        className: "home-guide-example",
        children: [e.jsx("figcaption", {
            children: r
        }), e.jsxs("div", {
            "aria-hidden": "true",
            children: [t === "android" ? e.jsx(fi, {
                action: s
            }) : e.jsx(pi, {
                action: s
            }), a && e.jsxs("div", {
                className: "home-guide-callout",
                children: [e.jsx("span", {
                    children: "↑"
                }), a]
            })]
        })]
    })
}
function gi({progress: t, onProgress: s, onContinue: r, onBack: a}) {
    const i = o.useRef(null)
      , {phone: c, action: d} = t;
    o.useLayoutEffect( () => {
        var h, w, g;
        (h = i.current) == null || h.focus({
            preventScroll: !0
        }),
        (g = (w = i.current) == null ? void 0 : w.closest(".first-visit")) == null || g.scrollTo({
            top: 0
        })
    }
    , [c, d]);
    const l = e.jsx(b, {
        quiet: !0,
        className: "home-guide-skip",
        onClick: r,
        children: "Сейчас не нужно"
    });
    if (!c)
        return e.jsxs("div", {
            className: "home-guide",
            children: [e.jsxs("div", {
                className: "setup-heading",
                children: [e.jsx("h1", {
                    ref: i,
                    tabIndex: -1,
                    children: "Какой у вас телефон?"
                }), e.jsx(b, {
                    quiet: !0,
                    onClick: a,
                    children: "Назад"
                })]
            }), e.jsx("p", {
                className: "setup-copy",
                children: "Добавьте значок Номерка на главный экран, чтобы открывать игру одним нажатием."
            }), e.jsx("div", {
                className: "home-guide-choices",
                children: ["android", "iphone"].map(h => e.jsxs("button", {
                    type: "button",
                    className: "home-guide-choice",
                    onClick: () => s({
                        phone: h,
                        action: 0
                    }),
                    children: [e.jsx("span", {
                        className: "home-guide-phone",
                        children: e.jsx(fs, {
                            name: "phone"
                        })
                    }), e.jsxs("span", {
                        className: "home-guide-choice-copy",
                        children: [e.jsx("strong", {
                            children: h === "android" ? "Android" : "iPhone"
                        }), e.jsxs("small", {
                            children: ["Покажем на примере ", h === "android" ? "Chrome" : "Safari"]
                        })]
                    }), e.jsx(ue, {
                        name: "right",
                        size: 18
                    })]
                }, h))
            }), l, e.jsx("p", {
                className: "home-guide-note",
                children: "Играть можно и без значка на экране."
            })]
        });
    const n = Ps[c][d]
      , m = d === Ps[c].length - 1;
    return e.jsxs("div", {
        className: "home-guide",
        children: [e.jsxs("div", {
            className: "home-guide-topline",
            children: [e.jsx("span", {
                children: c === "android" ? "Android · Chrome" : "iPhone · Safari"
            }), e.jsx(b, {
                quiet: !0,
                onClick: () => s({
                    phone: null,
                    action: 0
                }),
                children: "Другой телефон"
            })]
        }), e.jsxs("div", {
            className: "home-guide-counter",
            children: ["Действие ", d + 1, " из ", Ps[c].length]
        }), e.jsx("h1", {
            ref: i,
            tabIndex: -1,
            children: n.title
        }), e.jsx("p", {
            className: "setup-copy",
            children: n.copy
        }), e.jsx(ji, {
            phone: c,
            action: d
        }), e.jsxs("div", {
            className: "home-guide-navigation",
            children: [e.jsx(b, {
                secondary: !0,
                onClick: () => s(d === 0 ? {
                    phone: null,
                    action: 0
                } : {
                    phone: c,
                    action: d - 1
                }),
                children: "Назад"
            }), e.jsxs(b, {
                onClick: m ? r : () => s({
                    phone: c,
                    action: d + 1
                }),
                children: [m ? "Понятно, продолжить" : "Дальше", !m && e.jsx(ue, {
                    name: "right",
                    size: 16
                })]
            })]
        }), l, e.jsxs("details", {
            className: "home-guide-help",
            children: [e.jsx("summary", {
                children: n.help
            }), e.jsx("p", {
                children: n.helpCopy
            })]
        }, `${c}-${d}`)]
    })
}
const xr = "nomerok-first-visit-v1"
  , Ks = "nomerok-first-visit-progress-v1";
function vi() {
    var t, s, r;
    try {
        const a = JSON.parse(localStorage.getItem(Ks) ?? "null");
        if (!a || !["welcome", "theme", "home-screen", "cookies"].includes(a.step) || typeof a.lesson != "boolean" || ![null, "light", "dark", "game"].includes(a.selected) || a.analytics !== void 0 && typeof a.analytics != "boolean")
            return null;
        const i = ((t = a.homeScreen) == null ? void 0 : t.phone) === "android" || ((s = a.homeScreen) == null ? void 0 : s.phone) === "iphone" ? a.homeScreen.phone : null
          , c = i && Number.isInteger((r = a.homeScreen) == null ? void 0 : r.action) && a.homeScreen.action >= 0 && a.homeScreen.action < 4 ? a.homeScreen.action : 0;
        return {
            step: a.step,
            lesson: a.lesson,
            selected: a.selected,
            analytics: a.analytics,
            homeScreen: {
                phone: i,
                action: c
            }
        }
    } catch {
        return null
    }
}
const qe = vi();
function bi() {
    try {
        return localStorage.getItem(xr) === "complete" || oi() === null || localStorage.getItem("nomerok-theme") !== null || localStorage.getItem("plate-collector-v2") !== null
    } catch {
        return !1
    }
}
const Gn = !qe && bi()
  , yi = {
    pending: 0,
    welcome: 1,
    theme: 2,
    "home-screen": 3,
    cookies: 4
};
function ki(t) {
    const [s,r] = o.useState( () => (qe == null ? void 0 : qe.step) ?? (Gn ? ka() ? null : "cookies" : "pending"))
      , [a,i] = o.useState((qe == null ? void 0 : qe.lesson) ?? !1)
      , [c,d] = o.useState((qe == null ? void 0 : qe.selected) ?? null)
      , [l,n] = o.useState((qe == null ? void 0 : qe.analytics) ?? wa() ?? !0)
      , [m,h] = o.useState((qe == null ? void 0 : qe.homeScreen) ?? {
        phone: null,
        action: 0
    })
      , w = o.useRef(!Gn)
      , g = Na();
    o.useLayoutEffect( () => {
        s === "pending" && t !== "loading" && (t === "registered" ? (w.current = !1,
        r(g ? null : "cookies")) : r("welcome"))
    }
    , [s, t, g]),
    o.useEffect( () => {
        if (w.current && s && s !== "pending")
            try {
                localStorage.setItem(Ks, JSON.stringify({
                    step: s,
                    lesson: a,
                    selected: c,
                    analytics: l,
                    homeScreen: m
                }))
            } catch {}
    }
    , [s, a, c, l, m]);
    function x() {
        try {
            localStorage.setItem(xr, "complete"),
            localStorage.removeItem(Ks)
        } catch {}
        r(null)
    }
    return {
        step: s,
        setStep: r,
        lesson: a,
        setLesson: i,
        selected: c,
        setSelected: d,
        analytics: l,
        setAnalytics: n,
        homeScreen: m,
        setHomeScreen: h,
        first: w.current,
        finish: x,
        choice: g
    }
}
function wi({flow: t, onTheme: s, onDone: r, error: a, busy: i}) {
    const c = o.useRef(null);
    o.useLayoutEffect( () => {
        var n;
        (n = c.current) == null || n.focus()
    }
    , [t.step]),
    o.useLayoutEffect( () => {
        const n = document.querySelector(".app-surface");
        return n && (n.inert = !0),
        () => {
            n && (n.inert = !1)
        }
    }
    , []);
    const d = n => {
        t.setLesson(n),
        n || we("ng_tutorial_skip"),
        t.setStep("theme")
    }
      , l = () => {
        we("ng_cookie_step"),
        t.setStep("cookies")
    }
    ;
    return e.jsx("div", {
        className: "first-visit",
        role: "region",
        "aria-label": "Первый вход",
        children: e.jsxs("div", {
            className: "setup-content",
            children: [t.step === "pending" ? e.jsx("h1", {
                ref: c,
                tabIndex: -1,
                children: "Загружаем Номерок…"
            }) : e.jsxs(e.Fragment, {
                children: [t.first && e.jsxs("div", {
                    className: "setup-step",
                    children: ["Шаг ", yi[t.step ?? "pending"], " из 4"]
                }), t.step === "welcome" ? e.jsxs(e.Fragment, {
                    children: [e.jsx("h1", {
                        ref: c,
                        tabIndex: -1,
                        children: "Показать, как играть?"
                    }), e.jsx("p", {
                        className: "setup-copy",
                        children: "Покажем, как выбрать регион, крутить номер и собирать коллекцию."
                    }), e.jsxs("div", {
                        className: "setup-actions",
                        children: [e.jsx(b, {
                            onClick: () => d(!0),
                            children: "Да, показать"
                        }), e.jsx(b, {
                            secondary: !0,
                            onClick: () => d(!1),
                            children: "Без обучения"
                        })]
                    })]
                }) : t.step === "theme" ? e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: "setup-heading",
                        children: [e.jsx("h1", {
                            ref: c,
                            tabIndex: -1,
                            children: "Выбери оформление"
                        }), e.jsx(b, {
                            quiet: !0,
                            onClick: () => t.setStep("welcome"),
                            children: "Назад"
                        })]
                    }), e.jsx("p", {
                        className: "setup-copy",
                        children: "Выбери свой вариант. Его можно изменить в настройках профиля."
                    }), e.jsx("div", {
                        className: "setup-themes",
                        role: "radiogroup",
                        "aria-label": "Оформление",
                        children: ["light", "dark", "game"].map(n => e.jsxs("div", {
                            className: "setup-theme " + (t.selected === n ? "selected" : ""),
                            children: [e.jsx("div", {
                                className: "theme-preview",
                                "data-preview-theme": n,
                                "aria-hidden": "true",
                                children: e.jsx("img", {
                                    src: `/ui-theme/theme-previews/${n}.png`,
                                    width: "390",
                                    height: "804",
                                    alt: "",
                                    draggable: !1
                                })
                            }), e.jsxs("label", {
                                className: "setup-theme-label",
                                children: [e.jsx("input", {
                                    type: "radio",
                                    name: "first-theme",
                                    checked: t.selected === n,
                                    onChange: () => {
                                        t.setSelected(n)
                                    }
                                }), e.jsx("span", {
                                    children: n === "light" ? "Светлая" : n === "game" ? "Игровая" : "Тёмная"
                                }), t.selected === n && e.jsx(ue, {
                                    name: "check",
                                    size: 20
                                })]
                            })]
                        }, n))
                    }), e.jsx(b, {
                        disabled: !t.selected,
                        onClick: () => {
                            t.selected && (s(t.selected),
                            t.selected !== "game" && we(t.selected === "light" ? "ng_theme_light" : "ng_theme_dark")),
                            t.setStep("home-screen")
                        }
                        ,
                        children: "Продолжить"
                    })]
                }) : t.step === "home-screen" ? e.jsx(gi, {
                    progress: t.homeScreen,
                    onProgress: t.setHomeScreen,
                    onContinue: l,
                    onBack: () => t.setStep("theme")
                }) : e.jsx(ja, {
                    onDone: r,
                    prepared: t.analytics,
                    onPrepared: t.setAnalytics
                })]
            }), i && e.jsx("p", {
                role: "status",
                children: "Открываем игру…"
            }), a && e.jsxs("div", {
                role: "alert",
                children: [e.jsx("p", {
                    children: a
                }), e.jsx(b, {
                    disabled: i,
                    onClick: r,
                    children: "Повторить"
                })]
            })]
        })
    })
}
const jr = o.createContext(!1)
  , $n = new Map;
function Mn(t, s) {
    const r = "nomerok-rec-notice-v1:" + t
      , a = $n.get(t) ?? new Set;
    try {
        const d = JSON.parse(localStorage.getItem(r) ?? "[]");
        if (Array.isArray(d))
            for (const l of d)
                typeof l == "string" && a.add(l)
    } catch {}
    const i = !a.has(s);
    a.add(s);
    const c = new Set([...a].slice(-50));
    $n.set(t, c);
    try {
        localStorage.setItem(r, JSON.stringify([...c]))
    } catch {}
    return i
}
function Ni(t, s, r) {
    const {api: a, principalId: i, account: c} = he()
      , d = c.mode === "registered" ? i : null
      , l = o.useRef({
        route: t,
        blocked: s,
        notify: r
    })
      , [n,m] = o.useState({
        actor: d,
        active: !1
    });
    return o.useLayoutEffect( () => {
        l.current = {
            route: t,
            blocked: s,
            notify: r
        }
    }
    ),
    o.useEffect( () => {
        const h = new AbortController;
        let w = !1;
        const g = () => !h.signal.aborted;
        async function x() {
            if (!(!d || w || document.visibilityState !== "visible" || !navigator.onLine || l.current.blocked)) {
                w = !0;
                try {
                    const y = await a.rewards.notifications(h.signal);
                    if (!g())
                        return;
                    const v = y.notifications.filter(N => N.active && !N.seen);
                    m({
                        actor: d,
                        active: v.length > 0
                    });
                    for (const N of v) {
                        if (!g() || l.current.blocked)
                            break;
                        if (l.current.route.startsWith("tasks")) {
                            if (await a.rewards.seen(N.id, "m11b-rec-seen-" + N.id),
                            !g())
                                return;
                            Mn(d, N.objectiveId),
                            m({
                                actor: d,
                                active: !1
                            })
                        } else {
                            const j = () => {
                                g() && !l.current.blocked && Mn(d, N.objectiveId) && l.current.notify("Появилось дополнительное задание")
                            }
                            ;
                            navigator.locks ? await navigator.locks.request("nomerok-rec-notice:" + d, j) : j()
                        }
                    }
                } catch {} finally {
                    w = !1
                }
            }
        }
        x();
        const u = setInterval( () => void x(), 15e3)
          , p = () => void x();
        return document.addEventListener("visibilitychange", p),
        window.addEventListener("online", p),
        window.addEventListener("nomerok-rewards-view", p),
        () => {
            h.abort(),
            clearInterval(u),
            document.removeEventListener("visibilitychange", p),
            window.removeEventListener("online", p),
            window.removeEventListener("nomerok-rewards-view", p)
        }
    }
    , [d, a]),
    o.useEffect( () => {
        window.dispatchEvent(new Event("nomerok-rewards-view"))
    }
    , [t, s]),
    n.actor === d && n.active
}
function gr(t="#2563EB") {
    const s = /^#[0-9A-Fa-f]{6}$/.test(t) ? t : "#2563EB"
      , r = [1, 3, 5].map(i => parseInt(s.slice(i, i + 2), 16) / 255).map(i => i <= .04045 ? i / 12.92 : ((i + .055) / 1.055) ** 2.4)
      , a = .2126 * r[0] + .7152 * r[1] + .0722 * r[2];
    return {
        backgroundColor: s,
        color: a > .179 ? "#000000" : "#FFFFFF"
    }
}
function vs({nickname: t, color: s, className: r="player-avatar"}) {
    return e.jsx("span", {
        className: r + " ym-hide-content",
        style: gr(s),
        "aria-hidden": "true",
        children: t.slice(0, 1).toLocaleUpperCase("ru-RU")
    })
}
const vr = o.createContext(!1)
  , br = () => o.useContext(vr);
function Ci({active: t, children: s}) {
    return e.jsx(vr.Provider, {
        value: t,
        children: s
    })
}
const ht = ["A", "B"]
  , Bn = {
    [Fe.rare.label]: "BLUE",
    [Fe["very-rare"].label]: "PURPLE",
    [Fe.legendary.label]: "RED",
    [Fe.ultra.label]: "GOLD"
}
  , rs = [{
    mode: "Только цифры",
    stop: Fe["very-rare"].label,
    behavior: "Остановиться"
}, {
    mode: "Только буквы",
    stop: Fe.legendary.label,
    behavior: "Остановиться"
}]
  , sn = {
    "needs-digits": "Чтобы крутить буквы в Авто, сначала прокрути цифры вручную.",
    "needs-letters": "Чтобы крутить цифры в Авто, сначала прокрути буквы вручную."
};
function Hs(t, s) {
    return s === "Только буквы" && !(t != null && t.digits) ? "needs-digits" : s === "Только цифры" && !(t != null && t.letters) ? "needs-letters" : null
}
const yr = o.createContext(null);
function kr() {
    const t = o.useContext(yr);
    if (!t)
        throw new Error("AUTO_CONTROLLER_REQUIRED");
    return t
}
function Ei({children: t}) {
    var F, X;
    const s = he()
      , r = br()
      , a = s.principalId ?? ""
      , [i,c] = o.useState(rs)
      , [d,l] = o.useState(["stopped", "stopped"])
      , [n,m] = o.useState(!1)
      , [h,w] = o.useState(null)
      , [g,x] = o.useState(!1)
      , u = o.useRef({
        game: s,
        tutorial: r,
        actor: a
    })
      , p = o.useRef({
        actor: a,
        active: [!1, !1],
        config: rs,
        generation: 0,
        manual: new Set,
        refreshAfterManual: !1
    })
      , y = o.useRef(null)
      , [,v] = o.useState(0)
      , N = o.useRef(null)
      , j = o.useRef(!0)
      , k = o.useRef(0)
      , f = o.useRef(null);
    o.useLayoutEffect( () => {
        u.current = {
            game: s,
            tutorial: r,
            actor: a
        }
    }
    );
    function C(L) {
        var U;
        const _ = p.current;
        _.active.some( (D, $) => D && (L === void 0 || L === $)) && we("ng_auto_stop", {
            mode: "off"
        }),
        _.active = _.active.map( (D, $) => L === void 0 || L === $ ? !1 : D),
        l(D => D.map( ($, te) => L === void 0 || L === te ? "stopped" : $)),
        _.active.some(Boolean) || (U = f.current) == null || U.call(f)
    }
    o.useLayoutEffect( () => {
        var _;
        const L = p.current;
        L.active = [!1, !1],
        (_ = f.current) == null || _.call(f),
        p.current = {
            actor: a,
            active: [!1, !1],
            config: rs,
            generation: L.generation + 1,
            manual: new Set,
            refreshAfterManual: !1
        },
        c(rs),
        l(["stopped", "stopped"]),
        m(!1),
        w(null),
        x(new URLSearchParams(location.search).get("slot") === "B")
    }
    , [a]),
    o.useEffect( () => (j.current = !0,
    () => {
        var L;
        j.current = !1,
        p.current.active = [!1, !1],
        (L = f.current) == null || L.call(f)
    }
    ), []),
    o.useEffect( () => {
        const L = () => v(_ => _ + 1);
        return window.addEventListener("storage", L),
        window.addEventListener("nomerok-intent-change", L),
        () => {
            window.removeEventListener("storage", L),
            window.removeEventListener("nomerok-intent-change", L)
        }
    }
    , []),
    o.useEffect( () => {
        const L = () => {
            document.hidden && C()
        }
          , _ = () => C();
        return window.addEventListener("offline", _),
        window.addEventListener("pagehide", _),
        window.addEventListener("nomerok-tutorial-open", _),
        window.addEventListener("nomerok-identity-transition", _),
        document.addEventListener("visibilitychange", L),
        () => {
            window.removeEventListener("offline", _),
            window.removeEventListener("pagehide", _),
            window.removeEventListener("nomerok-tutorial-open", _),
            window.removeEventListener("nomerok-identity-transition", _),
            document.removeEventListener("visibilitychange", L)
        }
    }
    , []),
    o.useLayoutEffect( () => {
        var L;
        r || s.account.mode !== "registered" || !((L = s.r2Game) != null && L.entitlements.auto) ? C() : s.r2Game.entitlements.double || C(1)
    }
    , [r, s.account.mode, (F = s.r2Game) == null ? void 0 : F.entitlements.auto, (X = s.r2Game) == null ? void 0 : X.entitlements.double]);
    function E(L) {
        return j.current && p.current === L && u.current.actor === L.actor && !u.current.tutorial && navigator.onLine && !document.hidden && u.current.game.account.mode === "registered"
    }
    function R(L) {
        var $;
        const _ = p.current
          , U = Symbol();
        return !j.current || _.actor !== L ? {
            ready: Promise.resolve(!1),
            release: () => {}
        } : (_.manual.add(U),
        {
            ready: ((($ = y.current) == null ? void 0 : $.run) === _ ? y.current.done : Promise.resolve()).then( () => j.current && p.current === _ && u.current.actor === L),
            release: () => {
                var te;
                _.manual.delete(U) && (_.refreshAfterManual = !0,
                (te = f.current) == null || te.call(f))
            }
        })
    }
    function P(L) {
        var _;
        if (p.current.active[L] || ((_ = y.current) == null ? void 0 : _.run) === p.current && y.current.indices.includes(L))
            return !0;
        try {
            const U = Qt(a);
            if ((U == null ? void 0 : U.kind) !== "auto")
                return !1;
            const D = U.input;
            return !Array.isArray(D == null ? void 0 : D.slots) || D.slots.some($ => $.slot === ht[L])
        } catch {
            return !0
        }
    }
    async function A(L) {
        const _ = u.current.game.r2Game;
        for (await u.current.game.refreshGame(); E(L) && u.current.game.r2Game === _; )
            await I(16)
    }
    async function I(L) {
        await new Promise(_ => {
            const U = () => {
                clearTimeout(D),
                f.current === U && (f.current = null),
                _()
            }
              , D = setTimeout(U, L);
            f.current = U
        }
        )
    }
    async function T(L) {
        for (; E(L) && L.active.some(Boolean); ) {
            for (; E(L) && L.active.some(Boolean) && L.manual.size; )
                await I(50);
            if (!E(L) || !L.active.some(Boolean))
                break;
            if (L.refreshAfterManual) {
                L.refreshAfterManual = !1,
                await A(L);
                continue
            }
            if ($e(L.actor)) {
                if (!yt(L.actor))
                    break;
                const K = u.current.game.r2Game;
                for (; E(L) && L.active.some(Boolean) && yt(L.actor); )
                    await I(50);
                if (!E(L) || !L.active.some(Boolean) || $e(L.actor))
                    break;
                for (await u.current.game.refreshGame(); E(L) && L.active.some(Boolean) && u.current.game.r2Game === K; )
                    await I(16);
                continue
            }
            const _ = u.current.game.r2Game;
            if (!(_ != null && _.entitlements.auto))
                break;
            _.entitlements.double || (L.active[1] = !1);
            const U = ht.flatMap( (K, S) => {
                const M = _.slots[K]
                  , J = L.config[S]
                  , W = L.active[S] && Hs(M, J.mode);
                return W ? (L.active[S] = !1,
                l(z => z.map( (ce, xe) => xe === S ? W : ce)),
                []) : L.active[S] && M ? [{
                    slot: K,
                    expectedDraftVersion: M.version,
                    ...M.pricingPolicyVersion ? {
                        expectedPricingPolicyVersion: M.pricingPolicyVersion
                    } : {},
                    mode: J.mode === "Только цифры" ? "DIGITS_ONLY" : J.mode === "Только буквы" ? "LETTERS_ONLY" : "WHOLE_PLATE",
                    target: Bn[J.stop],
                    terminalAction: J.behavior === "Сохранить" ? "SAVE" : J.behavior === "Продать" ? "SELL" : "NONE"
                }] : []
            }
            );
            if (!U.length)
                break;
            const D = {
                id: ++k.current,
                actor: L.actor,
                started: performance.now(),
                done: !1,
                successful: !1,
                operations: U.map(K => ({
                    index: ht.indexOf(K.slot),
                    axis: K.mode === "WHOLE_PLATE" ? "whole" : K.mode === "DIGITS_ONLY" ? "digits" : "letters"
                }))
            };
            m(!0),
            w(D);
            let $;
            const te = {
                run: L,
                indices: U.map(K => ht.indexOf(K.slot)),
                done: new Promise(K => {
                    $ = K
                }
                )
            };
            y.current = te;
            let O, B = !1;
            try {
                if (O = await Ke(L.actor, "auto", {
                    slots: U
                }, K => He(u.current.game.api, K)),
                p.current !== L || !j.current || (await A(L),
                p.current !== L || !j.current))
                    return;
                for (const K of O.outcomes)
                    if (K.stopReason !== "CONTINUE") {
                        const S = ht.indexOf(K.slot);
                        L.active[S] = !1,
                        l(M => M.map( (J, W) => W === S ? K.hit ? "stopped" : K.stopReason === "COLLECTION_FULL" ? "capacity" : K.stopReason === "INSUFFICIENT_BALANCE" ? "funds" : "refusal" : J))
                    }
                w({
                    ...D,
                    done: !0,
                    successful: !0,
                    outcomes: O.outcomes
                })
            } catch (K) {
                B = K instanceof bt && yt(L.actor),
                B || (L.active = [!1, !1]),
                p.current === L && j.current && (B || l(S => S.map(M => M === "running" ? "error" : M)),
                w({
                    ...D,
                    done: !0
                }))
            } finally {
                y.current === te && (y.current = null),
                $(),
                p.current === L && j.current && m(!1)
            }
            if (!B) {
                if (!O || !E(L) || !L.active.some(Boolean))
                    break;
                await I(O.cadenceBaseMilliseconds)
            }
        }
    }
    function Q(L, _) {
        var te, O, B, K;
        const U = p.current;
        if (!E(U) || P(L) || !Bn[_.stop] || !((te = u.current.game.r2Game) != null && te.entitlements.auto) || L === 1 && !u.current.game.r2Game.entitlements.double || Hs(u.current.game.r2Game.slots[ht[L]], _.mode) || $e(a) && !(((O = N.current) == null ? void 0 : O.actor) === a && yt(a)))
            return !1;
        if (U.config = U.config.map( (S, M) => M === L ? _ : S),
        c([...U.config]),
        U.active[L] = !0,
        l(S => S.map( (M, J) => J === L ? "running" : M)),
        ((B = N.current) == null ? void 0 : B.actor) === a)
            return we("ng_auto_start", {
                mode: "on"
            }),
            !0;
        const D = Symbol();
        return N.current = {
            token: D,
            actor: a
        },
        (((K = navigator.locks) == null ? void 0 : K.request("nomerok-auto-owner:" + a, {
            ifAvailable: !0
        }, async S => {
            if (!S) {
                U.active = [!1, !1],
                p.current === U && l(["other-tab", "other-tab"]);
                return
            }
            we("ng_auto_start", {
                mode: "on"
            }),
            await T(U)
        }
        )) ?? Promise.reject(new Error("WEB_LOCKS_REQUIRED"))).catch( () => {
            U.active = [!1, !1],
            p.current === U && j.current && l(["error", "error"])
        }
        ).finally( () => {
            var S;
            ((S = N.current) == null ? void 0 : S.token) === D && (N.current = null),
            U.active = [!1, !1],
            p.current === U && j.current && l(M => M.map(J => J === "running" ? "stopped" : J))
        }
        ),
        !0
    }
    return e.jsx(yr.Provider, {
        value: {
            config: i,
            status: d,
            busy: n,
            motion: h,
            doubleEnabled: g,
            setDoubleEnabled: x,
            start: Q,
            stop: C,
            reserveManualTurn: R,
            settingsLocked: ht.map( (L, _) => P(_)),
            isCurrentActor: L => j.current && u.current.actor === L
        },
        children: t
    })
}
function Si({visible: t, onCreate: s}) {
    const r = kr()
      , a = r.status.some(i => i === "running");
    return !t || !a ? null : e.jsxs("aside", {
        className: "global-auto-indicator",
        "aria-label": "Авто работает",
        children: [e.jsxs("button", {
            onClick: s,
            children: ["Авто · ", r.status.map( (i, c) => i === "running" ? ht[c] : null).filter(Boolean).join(" + ")]
        }), e.jsx("button", {
            onClick: () => r.stop(),
            children: "Остановить"
        })]
    })
}
const as = t => `${t.slot ? `Номер ${t.slot} · ` : ""}${t.title}`;
function wr({messages: t}) {
    const s = o.useContext(mr)
      , r = Object.fromEntries(t.map(l => [l.id, JSON.stringify([l.title, l.message, l.slot])]))
      , a = JSON.stringify(r)
      , [i,c] = o.useState( () => {
        var l;
        return {
            signature: a,
            tokens: r,
            active: (l = t[t.length - 1]) == null ? void 0 : l.id,
            dismissed: !1,
            details: !1
        }
    }
    );
    if (i.signature !== a) {
        const l = t.filter(h => r[h.id] !== i.tokens[h.id])
          , n = l[l.length - 1]
          , m = (n == null ? void 0 : n.id) ?? (t.some(h => h.id === i.active) ? i.active : void 0);
        c({
            signature: a,
            tokens: r,
            active: m,
            dismissed: n ? !1 : i.dismissed,
            details: !n && !!m && i.details
        })
    }
    const d = t.find(l => l.id === i.active);
    return t.length ? e.jsxs(e.Fragment, {
        children: [e.jsx("div", {
            className: "create-feedback action-feedback-details",
            children: t.map(l => e.jsxs("section", {
                className: "notice error",
                "aria-label": as(l),
                children: [e.jsx("strong", {
                    children: as(l)
                }), e.jsx("p", {
                    children: l.message
                }), l.action && e.jsx(b, {
                    quiet: !0,
                    onClick: l.action.run,
                    children: l.action.label
                })]
            }, l.id))
        }), s && d && !i.dismissed && zn.createPortal(e.jsxs("div", {
            className: "action-feedback-banner",
            "data-feedback-slot": d.slot,
            children: [e.jsx("span", {
                className: "action-feedback-symbol",
                "aria-hidden": "true",
                children: "!"
            }), e.jsx("div", {
                className: "action-feedback-brief",
                role: "alert",
                children: e.jsx("strong", {
                    children: as(d)
                })
            }, r[d.id]), e.jsx("button", {
                "aria-label": "Подробнее об уведомлении",
                onClick: l => {
                    l.currentTarget.focus({
                        preventScroll: !0
                    }),
                    c(n => ({
                        ...n,
                        details: !0
                    }))
                }
                ,
                children: e.jsx(ue, {
                    name: "info",
                    size: 20
                })
            }), e.jsx("button", {
                "aria-label": "Закрыть уведомление об ошибке",
                onClick: () => c(l => ({
                    ...l,
                    dismissed: !0,
                    details: !1
                })),
                children: e.jsx(ue, {
                    name: "close",
                    size: 18
                })
            })]
        }), s), d && i.details && e.jsxs(ke, {
            title: as(d),
            onClose: () => c(l => ({
                ...l,
                details: !1
            })),
            children: [e.jsx("p", {
                className: "body-copy action-feedback-message",
                children: d.message
            }), d.action && e.jsx(b, {
                onClick: () => {
                    var l;
                    c(n => ({
                        ...n,
                        details: !1
                    })),
                    (l = d.action) == null || l.run()
                }
                ,
                children: d.action.label
            })]
        })]
    }) : null
}
const Ii = [{
    side: "front",
    pips: [5]
}, {
    side: "back",
    pips: [1, 3, 4, 6, 7, 9]
}, {
    side: "right",
    pips: [1, 5, 9]
}, {
    side: "left",
    pips: [1, 3, 7, 9]
}, {
    side: "top",
    pips: [1, 9]
}, {
    side: "bottom",
    pips: [1, 3, 5, 7, 9]
}]
  , Et = Rt.length
  , _s = () => (Math.random() < .5 ? -1 : 1) * (1 + Math.floor(Math.random() * 3)) * 360
  , Nr = Jn.memo(function({part: s, active: r}) {
    const a = o.useRef(null)
      , i = o.useRef();
    return o.useLayoutEffect( () => {
        const c = a.current
          , d = c.querySelector(s === "digits" ? ".spin-die" : ".spin-letter-track")
          , l = window.matchMedia("(prefers-reduced-motion: reduce)");
        let n, m, h = !1, w = !0, g = [-24, 28, -8], x = 900, u = [...Rt], p = u[0];
        const y = f => `rotateX(${f[0]}deg) rotateY(${f[1]}deg) rotateZ(${f[2]}deg)`
          , v = () => w && !document.hidden && !l.matches
          , N = () => {
            if (m == null || m.cancel(),
            n == null || n.cancel(),
            s === "digits") {
                const f = [_s(), _s(), _s()];
                x = 980 + Math.random() * 240,
                n = d.animate([0, .25, .5, .75, 1].map( (C, E) => ({
                    transform: `translateY(${[0, -1, 1, -1, 0][E]}px) ${y(g.map( (R, P) => R + f[P] * C))}`
                })), {
                    duration: x,
                    iterations: 1 / 0,
                    easing: "linear"
                })
            } else
                u = [p, ...xa(Rt.filter(f => f !== p))],
                [...d.children].forEach( (f, C) => {
                    f.style.order = String(u.indexOf(f.textContent) + (C < Et ? 0 : Et))
                }
                ),
                x = Et * (55 + Math.random() * 15),
                d.style.transform = "translateY(0)",
                n = d.animate([{
                    transform: "translateY(0)"
                }, {
                    transform: "translateY(-50%)"
                }], {
                    duration: x,
                    iterations: 1 / 0,
                    easing: "linear"
                })
        }
          , j = () => {
            if (l.matches) {
                n == null || n.cancel(),
                n = void 0,
                m == null || m.finish();
                return
            }
            if (!v()) {
                n == null || n.pause(),
                m == null || m.finish();
                return
            }
            h && (n || N(),
            n == null || n.play())
        }
        ;
        i.current = f => {
            if (f === h)
                return;
            if (h = f,
            f) {
                v() && N();
                return
            }
            if (!n)
                return;
            const C = Number(n.currentTime ?? 0)
              , E = getComputedStyle(d).transform;
            n.cancel(),
            n = void 0;
            let R;
            if (s === "digits")
                g = [-24 + 90 * Math.floor(Math.random() * 4), 28 + 90 * Math.floor(Math.random() * 4), -12 + Math.random() * 24],
                R = y(g);
            else {
                const P = Math.ceil(C % x / x * Et);
                p = u[P % Et],
                R = `translateY(${-P * 50 / Et}%)`
            }
            d.style.transform = R,
            v() && (m = d.animate([{
                transform: E
            }, {
                transform: R
            }], {
                duration: s === "digits" ? 220 : 120,
                easing: "cubic-bezier(.15,.75,.25,1)"
            }))
        }
        ;
        const k = new IntersectionObserver( ([f]) => {
            w = f.isIntersecting,
            j()
        }
        );
        return k.observe(c),
        document.addEventListener("visibilitychange", j),
        l.addEventListener("change", j),
        () => {
            i.current = void 0,
            n == null || n.cancel(),
            m == null || m.cancel(),
            k.disconnect(),
            document.removeEventListener("visibilitychange", j),
            l.removeEventListener("change", j)
        }
    }
    , [s]),
    o.useLayoutEffect( () => {
        var c;
        (c = i.current) == null || c.call(i, r)
    }
    , [r, s]),
    e.jsx("span", {
        ref: a,
        className: `spin-icon spin-icon-${s}`,
        "data-active": r,
        "aria-hidden": "true",
        children: s === "digits" ? e.jsx("span", {
            className: "spin-die",
            children: Ii.map( ({side: c, pips: d}) => e.jsx("span", {
                className: `spin-die-face spin-die-${c}`,
                children: d.map(l => e.jsx("span", {
                    className: "spin-die-pip",
                    style: {
                        gridArea: `${Math.floor((l - 1) / 3) + 1} / ${(l - 1) % 3 + 1}`
                    }
                }, l))
            }, c))
        }) : e.jsx("span", {
            className: "spin-letter-flow",
            children: e.jsx("span", {
                className: "spin-letter-track",
                children: [...Rt, ...Rt].map( (c, d) => e.jsx("span", {
                    className: "spin-letter",
                    children: c
                }, d))
            })
        })
    })
});
function Cr({enabled: t, available: s, onClick: r}) {
    return e.jsxs("button", {
        className: `double-toggle ${t ? "double-active" : ""} ${s ? "" : "premium-locked"}`,
        "aria-pressed": t,
        "aria-label": "Режим Double",
        "aria-description": s ? void 0 : "Функция пока недоступна",
        onClick: r,
        children: [e.jsx(ue, {
            name: s ? "double" : "lock",
            size: 16
        }), e.jsx("span", {
            children: "Double"
        })]
    })
}
function Er({doubleEnabled: t, double: s, onDouble: r, onTasks: a, showDouble: i=!0}) {
    const c = o.useContext(jr);
    return e.jsxs("div", {
        className: "page-heading create-heading",
        children: [e.jsx("h1", {
            children: "Создать"
        }), e.jsxs("div", {
            className: "create-heading-actions",
            children: [i && e.jsx(Cr, {
                enabled: t,
                available: s,
                onClick: r
            }), e.jsxs(b, {
                quiet: !0,
                icon: "tasks",
                "aria-label": c ? "Задания, новое дополнительное задание" : "Задания",
                onClick: a,
                children: ["Задания", c && e.jsx("span", {
                    className: "reward-badge",
                    "aria-hidden": "true"
                })]
            })]
        })]
    })
}
function Sr({s: t, p: s, frameId: r, onFrames: a, v: i, busy: c, pending: d, operationPending: l, registered: n, manualNotice: m, heading: h, editingControls: w, onDouble: g, onRegion: x, onAuto: u, onPending: p, onInfo: y, onSpin: v, onSave: N, onSell: j, onFunds: k, onCapacity: f}) {
    const C = gs(s)
      , E = t.autoStatus[t.activeSlot]
      , R = E === "running"
      , P = {
        ...sn,
        "other-tab": "Авто уже работает в другой вкладке",
        funds: "Недостаточно игровых рублей",
        capacity: "Коллекция заполнена",
        refusal: "Сейчас эту прокрутку выполнить нельзя. Игровые рубли не списаны.",
        error: "Ответ задержался. Авто остановлено. Проверь результат последней прокрутки."
    }[E]
      , A = !!c || !!d || l || R || i === "disabled"
      , I = !!c || !!d || R
      , T = t.region.spinPrice === null ? null : Vt(t.region.spinPrice);
    return e.jsxs("div", {
        className: "page create-page single-create",
        children: [h, e.jsxs("div", {
            className: "create-controls",
            children: [e.jsx("div", {
                className: "region-control single-region-control",
                children: e.jsxs("button", {
                    className: "region-select",
                    "aria-label": "Изменить регион",
                    "aria-description": T ? `${t.region.code} · ${t.region.name}. Первые цифры или буквы: ${T}` : void 0,
                    onClick: () => x(),
                    disabled: !!c || !!d || t.editing,
                    children: [e.jsx(ue, {
                        name: "pin",
                        size: 19
                    }), e.jsxs("span", {
                        className: "region-copy",
                        children: [e.jsx("b", {
                            children: t.region.spinPrice === null ? "Выбрать регион" : t.region.code + " · " + t.region.name
                        }), T && e.jsxs("span", {
                            children: [e.jsx("i", {
                                className: "region-cost-label",
                                children: "Первые цифры или буквы: "
                            }), T]
                        })]
                    }), e.jsx(ue, {
                        name: "down",
                        size: 14
                    })]
                })
            }), e.jsxs("div", {
                className: "create-modes",
                role: "group",
                "aria-label": "Режимы номера",
                children: [e.jsxs("button", {
                    className: `auto-indicator ${R ? "auto-active" : ""} ${t.auto ? "" : "premium-locked"}`,
                    "aria-pressed": R,
                    "aria-label": `Настроить Авто${R ? ", работает" : ""}`,
                    "aria-description": t.auto ? void 0 : "Функция пока недоступна",
                    onClick: () => u(),
                    disabled: t.editing,
                    children: [e.jsx(ue, {
                        name: t.auto ? "auto" : "lock",
                        artwork: "auto",
                        size: 16
                    }), e.jsx("span", {
                        children: "Авто"
                    }), R && e.jsx("i", {
                        className: "live-dot"
                    })]
                }), e.jsx(Cr, {
                    enabled: t.doubleEnabled,
                    available: t.double,
                    onClick: g ?? ( () => {}
                    )
                })]
            })]
        }), l && e.jsx(de, {
            title: "Проверяем, что получилось…",
            children: e.jsx(b, {
                quiet: !0,
                onClick: () => p(),
                children: "Проверить результат"
            })
        }), e.jsx("div", {
            className: `create-stage ${C ? "" : "empty-stage"}`,
            children: e.jsx(Qe, {
                p: s,
                spinning: d,
                frameId: r,
                reserve: !!a,
                trigger: a ? e.jsx(tr, {
                    onClick: a
                }) : void 0,
                caption: C ? e.jsx(Ue, {
                    p: s,
                    onClick: y,
                    valuation: ft(s)
                }) : e.jsx("span", {
                    className: "estimate-caption-pending",
                    children: ft(s)
                })
            })
        }), e.jsx(or, {
            slot: t.activeSlot === 0 ? "A" : "B"
        }), e.jsx("div", {
            className: "spin-controls",
            children: ["digits", "letters"].map(Q => {
                const F = Vt(t.slotPrices ? t.slotPrices[t.activeSlot][Q] : t.region.spinPrice);
                return e.jsxs("button", {
                    className: `spin-control spin-control-${Q}`,
                    onClick: () => v(Q),
                    disabled: A || !(Q === "digits" ? t.allowed[t.activeSlot].digits : t.allowed[t.activeSlot].letters),
                    "data-waiting": I && (Q === "digits" ? t.allowed[t.activeSlot].digits : t.allowed[t.activeSlot].letters),
                    "aria-busy": d === Q || d === "whole",
                    children: [e.jsx("span", {
                        className: "ctrl-icon",
                        children: e.jsx(Nr, {
                            part: Q === "digits" ? "digits" : "letters",
                            active: d === Q || d === "whole"
                        })
                    }), e.jsx("b", {
                        className: "spin-label",
                        children: d === Q ? e.jsxs(e.Fragment, {
                            children: [e.jsx("span", {
                                children: "Крутим"
                            }), " ", e.jsx("span", {
                                children: Q === "digits" ? "цифры" : "буквы"
                            })]
                        }) : e.jsxs(e.Fragment, {
                            children: [e.jsx("span", {
                                children: "Крутить"
                            }), " ", e.jsx("span", {
                                children: Q === "digits" ? "цифры" : "буквы"
                            })]
                        })
                    }), F && e.jsxs("span", {
                        className: "spin-price",
                        children: [e.jsx(hr, {}), e.jsx("span", {
                            className: "spin-price-amount",
                            children: F
                        })]
                    })]
                }, Q)
            }
            )
        }), C && e.jsxs("div", {
            className: "terminal-actions",
            children: [e.jsxs(b, {
                className: BigInt(s.saveReward) > 0n ? "save-btn reward" : "save-btn",
                loading: c === "save",
                "aria-label": BigInt(s.saveReward) > 0n ? `Сохранить и получить ${q(s.saveReward)}` : "Сохранить",
                disabled: A || !t.allowed[t.activeSlot].save && n,
                "data-waiting": I && (t.allowed[t.activeSlot].save || !n),
                onClick: () => N(),
                children: [e.jsx(ot, {
                    name: "save"
                }), e.jsxs("span", {
                    className: "action-copy",
                    children: [e.jsx("span", {
                        className: "action-title",
                        children: "Сохранить"
                    }), BigInt(s.saveReward) > 0n && e.jsxs(e.Fragment, {
                        children: [" ", e.jsxs("span", {
                            className: "action-subtitle",
                            children: [e.jsx("span", {
                                className: "action-extra",
                                children: "и получить "
                            }), e.jsx("span", {
                                className: "reward-symbol",
                                "aria-hidden": "true",
                                children: "+ "
                            }), e.jsx("span", {
                                className: "action-amount",
                                children: q(s.saveReward)
                            })]
                        })]
                    })]
                })]
            }), e.jsxs(b, {
                secondary: !0,
                className: "sale",
                "aria-label": `Продать игре за ${q(s.instantSell)}`,
                disabled: A || !t.allowed[t.activeSlot].sell,
                "data-waiting": I && t.allowed[t.activeSlot].sell,
                loading: c === "sell",
                onClick: () => j(),
                children: [e.jsx(ot, {
                    name: "sell"
                }), e.jsxs("span", {
                    className: "action-copy",
                    children: [e.jsx("span", {
                        className: "action-title",
                        children: "Продать игре"
                    }), " ", e.jsxs("span", {
                        className: "action-subtitle",
                        children: ["за ", e.jsx("span", {
                            className: "action-amount",
                            children: q(s.instantSell)
                        })]
                    })]
                })]
            }), i === "disabled" && e.jsx("p", {
                className: "form-note",
                children: "Сначала проверь, сохранился ли предыдущий номер. После этого можно сохранить новый."
            })]
        }), w, e.jsx(wr, {
            messages: [...m ? [{
                id: "manual",
                title: "Действие не выполнено",
                message: m
            }] : [], ...P ? [{
                id: "auto",
                title: "Авто остановлено",
                message: P,
                action: E === "funds" ? {
                    label: "Пополнить",
                    run: k
                } : E === "capacity" ? {
                    label: "Что можно сделать",
                    run: f
                } : void 0
            }] : []]
        })]
    })
}
function Ir({afterIdentity: t, level: s, avatarColor: r, guest: a, nickname: i, balance: c, onNickname: d, onAuth: l, go: n, onLogout: m, onTutorial: h}) {
    const w = (x, u, p, y) => e.jsxs("button", {
        className: "menu-row",
        onClick: p,
        "data-onboarding-target": y,
        children: [e.jsx(ue, {
            name: u
        }), e.jsx("span", {
            children: x
        }), e.jsx(ue, {
            name: "right"
        })]
    })
      , g = e.jsxs("a", {
        className: "menu-row",
        href: "https://t.me/nomerokgame",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [e.jsx(ue, {
            name: "telegram"
        }), e.jsx("span", {
            children: "Telegram группа"
        }), e.jsx(ue, {
            name: "right"
        })]
    });
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "profile-hero ym-hide-content",
            "data-onboarding-target": "profile",
            children: [a ? e.jsx("span", {
                className: "player-avatar",
                children: e.jsx(ue, {
                    name: "user",
                    size: 26
                })
            }) : e.jsxs("span", {
                className: "profile-avatar-edit collector-avatar",
                children: [e.jsx(vs, {
                    nickname: i ?? "",
                    color: r
                }), s && e.jsxs("span", {
                    className: "collector-level",
                    children: ["lvl ", s]
                }), e.jsx("button", {
                    type: "button",
                    "aria-label": "Изменить цвет аватара",
                    onClick: () => n("profile-appearance"),
                    children: e.jsx(ue, {
                        name: "pencil",
                        size: 14
                    })
                })]
            }), e.jsxs("div", {
                children: [e.jsx("h2", {
                    children: a ? "Гость" : e.jsx("button", {
                        className: "profile-nickname",
                        onClick: d,
                        "aria-label": "Изменить ник",
                        children: i
                    })
                }), e.jsx("p", {
                    children: a ? "Без аккаунта" : "Игрок Номерка"
                })]
            })]
        }), t, e.jsx("div", {
            className: "ym-hide-content",
            "data-onboarding-target": "profile",
            children: e.jsx(Z, {
                label: "Баланс",
                value: q(c),
                strong: !0
            })
        }), a ? e.jsxs(e.Fragment, {
            children: [e.jsx("p", {
                className: "body-copy",
                children: "Создай аккаунт, чтобы сохранять номера и пользоваться рынком."
            }), e.jsx(b, {
                "data-onboarding-target": "auth",
                onClick: () => l("register"),
                children: "Создать аккаунт"
            }), e.jsx(b, {
                "data-onboarding-target": "auth",
                secondary: !0,
                onClick: () => l("login"),
                children: "Войти"
            }), w("Пройти обучение", "info", h), w("Юридические документы", "book", () => n("profile-legal")), w("Настройки cookies", "settings", () => n("profile-cookies")), g, w("Оформление", "sun", () => n("profile-appearance"))]
        }) : e.jsxs("div", {
            children: [Xs, w("Настройки", "settings", () => n("profile-settings"), "profile-menu"), g, w("Сообщения", "mail", () => n("pl-notice")), w("Устройства", "security", () => n("profile-sessions")), w("Оформление", "sun", () => n("profile-appearance")), w("Пройти обучение", "info", h), w("Юридические документы", "book", () => n("profile-legal")), w("Настройки cookies", "settings", () => n("profile-cookies")), w("Выйти", "logout", m)]
        })]
    })
}
const Ri = t => !t || t.view === "welcome" ? null : t.view === "profile" ? `profile-${t.profile}` : t.view === "save" ? "create-ordinary" : "create-empty"
  , Be = () => {}
  , xs = {
    id: "lesson-empty",
    version: "",
    letters: "···",
    digits: "···",
    region: "77",
    tier: "common",
    value: null,
    saveReward: "0",
    instantSell: null,
    systemSell: null,
    editable: !1,
    marketEligible: !1,
    auctionEligible: !1,
    acquired: ""
}
  , Li = {
    ...xs,
    id: "lesson-ordinary",
    letters: "АКТ",
    digits: "583",
    value: "38500",
    instantSell: "12400",
    rarityKnown: !0
}
  , Ds = {
    code: "77",
    name: "Москва",
    spinPrice: "5000"
}
  , qn = {
    slots: [xs, xs],
    activeSlot: 0,
    doubleEnabled: !1,
    double: !1,
    auto: !1,
    editing: !1,
    region: Ds,
    slotRegions: [Ds, Ds],
    autoStatus: ["stopped", "stopped"],
    autoConfig: [{
        mode: "Только цифры",
        stop: "Очень редкий",
        behavior: "Остановиться"
    }],
    allowed: [{
        digits: !0,
        letters: !0,
        save: !0,
        sell: !0
    }]
}
  , Ai = {
    "create-empty": qn,
    "create-ordinary": {
        ...qn,
        slots: [Li, xs]
    }
};
function Pi({scene: t}) {
    if (t.startsWith("profile"))
        return e.jsxs("div", {
            className: "page",
            children: [e.jsx("div", {
                className: "page-heading",
                children: e.jsx("h1", {
                    children: "Профиль"
                })
            }), e.jsx(Ir, {
                guest: t === "profile-guest",
                nickname: "Артём",
                balance: "12100000",
                onNickname: Be,
                onAuth: Be,
                go: Be,
                onLogout: Be,
                onTutorial: Be
            })]
        });
    const s = Ai[t];
    return e.jsx(Sr, {
        s,
        p: s.slots[0],
        v: "ordinary",
        busy: "",
        pending: null,
        operationPending: !1,
        registered: !1,
        manualNotice: "",
        heading: e.jsx(Er, {
            showDouble: !1,
            double: !1,
            doubleEnabled: !1,
            onDouble: Be,
            onTasks: Be
        }),
        onRegion: Be,
        onAuto: Be,
        onPending: Be,
        onInfo: Be,
        onSpin: Be,
        onSave: Be,
        onSell: Be,
        onFunds: Be,
        onCapacity: Be
    })
}
function _i() {
    const [t,s] = o.useState(null)
      , r = o.useCallback( () => {
        window.dispatchEvent(new Event("nomerok-tutorial-open")),
        we("ng_tutorial_start"),
        s({
            view: "region",
            profile: "guest"
        })
    }
    , []);
    return {
        stage: t,
        setStage: s,
        open: r,
        close: () => s(null)
    }
}
const is = new WeakMap;
function Di(t) {
    var d;
    if (!(t.target instanceof Element))
        return;
    const s = (d = t.target.closest("button")) == null ? void 0 : d.querySelector(".ng-nav-icon");
    if (!s || document.hidden)
        return;
    const r = is.get(s);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        r == null || r.cancel();
        return
    }
    const a = r ? getComputedStyle(s).transform : "none";
    r == null || r.cancel(),
    s.style.willChange = "transform";
    const i = s.animate([{
        transform: a,
        offset: 0,
        easing: "cubic-bezier(.3,0,.6,1)"
    }, {
        transform: "translateY(1px) scale(.91)",
        offset: .17,
        easing: "cubic-bezier(.16,.65,.25,1)"
    }, {
        transform: "translateY(-2px) scale(1.075) rotate(-3deg)",
        offset: .47,
        easing: "cubic-bezier(.32,0,.5,1)"
    }, {
        transform: "translateY(.25px) scale(.985) rotate(.6deg)",
        offset: .78,
        easing: "cubic-bezier(.25,.65,.35,1)"
    }, {
        transform: "none",
        offset: 1
    }], {
        duration: 460,
        easing: "linear"
    });
    is.set(s, i);
    const c = () => {
        is.get(s) === i && (is.delete(s),
        s.style.removeProperty("will-change"))
    }
    ;
    i.oncancel = c,
    i.onfinish = () => {
        c(),
        i.cancel()
    }
}
function Oi({value: t}) {
    const [s,r] = o.useState(t)
      , a = o.useRef(t);
    return o.useEffect( () => {
        const i = a.current;
        if (t === null || i === null || document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            a.current = t,
            r(t);
            return
        }
        let c = 0;
        const d = performance.now()
          , l = BigInt(i)
          , n = BigInt(t)
          , m = h => {
            const w = document.hidden ? 1e3 : Math.min(1e3, Math.floor((h - d) / 360 * 1e3))
              , g = (l + (n - l) * BigInt(w) / 1000n).toString();
            a.current = g,
            r(g),
            w < 1e3 && (c = requestAnimationFrame(m))
        }
        ;
        return c = requestAnimationFrame(m),
        () => cancelAnimationFrame(c)
    }
    , [t]),
    e.jsx("span", {
        className: "animated-balance",
        "aria-hidden": "true",
        "data-value": s,
        "data-confirmed": t,
        children: q(s).split(new RegExp("(?<=\\d)(?=\\u00a0\\d)")).map( (i, c) => e.jsxs(Jn.Fragment, {
            children: [c > 0 && e.jsx("wbr", {}), e.jsx("span", {
                className: "balance-group",
                children: i
            })]
        }, c))
    })
}
const Rr = o.createContext({
    active: !1,
    setActive: () => {}
});
function Ti({children: t}) {
    const [s,r] = o.useState(!1);
    return e.jsx(Rr.Provider, {
        value: {
            active: s,
            setActive: r
        },
        children: t
    })
}
const Lr = () => o.useContext(Rr);
function Ar(t, s, r=!0) {
    const {principalId: a} = he()
      , {setActive: i} = Lr()
      , [c,d] = o.useState(null)
      , l = t.join("|");
    return o.useEffect( () => {
        const n = () => {
            let m = null;
            try {
                m = a ? Qt(a) : null
            } catch {}
            const h = !!m && l.split("|").includes(m.kind) && (!s || !!m.input && typeof m.input == "object" && "id" in m.input && m.input.id === s);
            d(h ? m : null)
        }
        ;
        return n(),
        window.addEventListener("storage", n),
        window.addEventListener("nomerok-intent-change", n),
        window.addEventListener("nomerok-show-pending", n),
        () => {
            window.removeEventListener("storage", n),
            window.removeEventListener("nomerok-intent-change", n),
            window.removeEventListener("nomerok-show-pending", n)
        }
    }
    , [a, l, s]),
    o.useEffect( () => (i(!!c && r),
    () => i(!1)), [c, r, i]),
    c
}
function Fi({route: t, blocked: s, onResolved: r}) {
    const {active: a} = Lr()
      , {principalId: i, account: c, api: d, refreshGame: l} = he()
      , [n,m] = o.useState(!1)
      , [h,w] = o.useState(!1)
      , [g,x] = o.useState("")
      , u = o.useRef(!1)
      , p = o.useRef(0);
    o.useLayoutEffect( () => (p.current++,
    u.current = !1,
    w(!1),
    x(""),
    () => {
        p.current++
    }
    ), [i, c.mode]),
    o.useEffect( () => {
        const v = N => {
            m(!!i && ((N == null ? void 0 : N.type) === "nomerok-show-pending" ? $e(i) : en(i) && (!yt(i) || u.current))),
            x("")
        }
        ;
        return v(),
        window.addEventListener("storage", v),
        window.addEventListener("nomerok-intent-change", v),
        window.addEventListener("nomerok-intent-activity", v),
        window.addEventListener("nomerok-show-pending", v),
        () => {
            window.removeEventListener("storage", v),
            window.removeEventListener("nomerok-intent-change", v),
            window.removeEventListener("nomerok-intent-activity", v),
            window.removeEventListener("nomerok-show-pending", v)
        }
    }
    , [i, t]);
    async function y() {
        if (u.current || !i)
            return;
        const v = p.current
          , N = () => v === p.current;
        u.current = !0,
        w(!0),
        x("");
        try {
            if (await Ke(i, "", {}, j => He(d, j), !0),
            !N() || (await l(),
            !N()))
                return;
            m(!1),
            r()
        } catch (j) {
            N() && x(ge(j))
        } finally {
            N() && (u.current = !1,
            w(!1))
        }
    }
    return !n || s || a ? null : e.jsxs(ke, {
        title: "Проверяем, что получилось…",
        onClose: () => {
            h || m(!1)
        }
        ,
        children: [e.jsx("span", {
            className: "spinner"
        }), e.jsx("p", {
            className: "body-copy",
            children: "Ответ задержался. Действие могло уже выполниться. Проверь результат, прежде чем повторять."
        }), e.jsx(b, {
            loading: h,
            onClick: () => void y(),
            children: "Проверить результат"
        }), e.jsx(b, {
            secondary: !0,
            disabled: h,
            onClick: () => m(!1),
            children: "Вернуться к экрану"
        }), g && e.jsx("p", {
            className: "field-error",
            role: "alert",
            children: g
        })]
    })
}
function Zt() {
    const {r2Game: t} = he()
      , {state: s} = Ot()
      , r = t == null ? void 0 : t.progress
      , a = s == null ? void 0 : s.progress
      , i = r && (!a || BigInt(r.version) >= BigInt(a.version)) ? r : a;
    return (i == null ? void 0 : i.enabled) === !1 ? void 0 : i
}
function nn({progress: t}) {
    return e.jsxs("section", {
        className: "collector-progress",
        "aria-label": `Уровень ${t.level}`,
        children: [e.jsxs("div", {
            children: [e.jsxs("strong", {
                children: [t.level, " уровень"]
            }), e.jsx("span", {
                children: t.capped ? `${Oe(t.xp)} опыта` : `${Oe(t.xpIntoLevel)} / ${Oe(t.xpForNextLevel)} опыта`
            })]
        }), e.jsx("progress", {
            "aria-label": "Опыт до следующего уровня",
            value: t.capped ? 1 : t.xpIntoLevel,
            max: t.capped ? 1 : t.xpForNextLevel
        }), e.jsx("p", {
            className: "form-note",
            children: t.capped ? "Максимальный уровень" : `${Oe(t.xpToNextLevel)} опыта до уровня ${t.level + 1}`
        }), !t.capped && e.jsxs("p", {
            className: "form-note",
            children: ["Всего ", Oe(t.xp), " опыта"]
        })]
    })
}
function Gi() {
    const t = Zt()
      , {principalId: s} = he()
      , r = o.useRef(null)
      , [a,i] = o.useState(null);
    return o.useEffect( () => {
        if (!t)
            return;
        const c = r.current;
        if (r.current = {
            id: s,
            xp: t.xp,
            level: t.level
        },
        !c || c.id !== s) {
            i(null);
            return
        }
        const d = t.xp - c.xp;
        d <= 0 || i(l => ({
            xp: (l && Date.now() - l.at < 5e3 ? l.xp : 0) + d,
            level: t.level > c.level ? t.level : (l == null ? void 0 : l.level) ?? null,
            at: Date.now()
        }))
    }
    , [t == null ? void 0 : t.xp, t == null ? void 0 : t.level, s]),
    o.useEffect( () => {
        if (!a)
            return;
        const c = window.setTimeout( () => i(null), 5e3);
        return () => clearTimeout(c)
    }
    , [a]),
    e.jsx("p", {
        className: "collector-xp-notice",
        role: "status",
        "aria-live": "polite",
        children: a ? `+${Oe(a.xp)} опыта${a.level ? ` · Теперь у тебя ${a.level} уровень` : ""}` : " "
    })
}
function $i({onClose: t}) {
    const s = Zt()
      , {account: r} = he();
    return e.jsxs(ke, {
        title: "Твой уровень",
        onClose: t,
        children: [s ? e.jsx(nn, {
            progress: s
        }) : e.jsx("p", {
            children: "Загружаем прогресс…"
        }), e.jsx("p", {
            children: "За прокрутку получишь 10 опыта, если номер изменился и в нём есть цифры, буквы и регион."
        }), e.jsx("p", {
            children: "Если такой номер выпал тебе впервые, получишь ещё бонус:"
        }), ["Обычный", "Редкий", "Очень редкий", "Элитный", "Легендарный"].map( (a, i) => e.jsx(Z, {
            label: a,
            value: `+${[0, 5, 15, 40, 90][i]} опыта`
        }, a)), e.jsx("p", {
            className: "body-copy",
            children: "Тот же номер с другим регионом считается новым. Если после прокрутки ничего не изменилось, опыта не будет. Покупка, сохранение и продажа номеров тоже не дают опыта."
        }), e.jsx("p", {
            className: "body-copy",
            children: "Уровень не меняет шансы на редкий номер, цены и выплаты."
        }), (s == null ? void 0 : s.policyStartedAt) && e.jsxs("p", {
            className: "form-note",
            children: ["Опыт начисляется с ", new Date(s.policyStartedAt).toLocaleDateString("ru-RU", {
                timeZone: "Europe/Moscow"
            }), ". Прошлые прокрутки не учитываются."]
        }), r.mode === "guest" && e.jsx("p", {
            className: "body-copy",
            children: "Создай аккаунт, чтобы сохранить прогресс."
        }), e.jsx(b, {
            onClick: t,
            children: "Понятно"
        })]
    })
}
function Mi(t) {
    const s = new TextEncoder().encode(t);
    if (s.length > 154 || !/^https?:\/\//.test(t))
        throw new Error("QR_URL_LENGTH");
    const r = []
      , a = (j, k) => {
        for (let f = k - 1; f >= 0; f--)
            r.push(j >>> f & 1)
    }
    ;
    a(4, 4),
    a(s.length, 8);
    for (const j of s)
        a(j, 8);
    for (a(0, Math.min(4, 1248 - r.length)); r.length % 8; )
        r.push(0);
    const i = [];
    for (let j = 0; j < r.length; j += 8)
        i.push(r.slice(j, j + 8).reduce( (k, f) => k * 2 + f, 0));
    for (let j = 0; i.length < 156; j++)
        i.push(j % 2 ? 17 : 236);
    const c = (j, k) => {
        let f = 0;
        for (; k; )
            k & 1 && (f ^= j),
            k >>>= 1,
            j <<= 1,
            j & 256 && (j ^= 285);
        return f
    }
    ;
    let d = [1]
      , l = 1;
    for (let j = 0; j < 20; j++) {
        const k = Array(d.length + 1).fill(0);
        d.forEach( (f, C) => {
            k[C] ^= f,
            k[C + 1] ^= c(f, l)
        }
        ),
        d = k,
        l = c(l, 2)
    }
    const n = [i.slice(0, 78), i.slice(78)]
      , m = n.map(j => {
        const k = [...j, ...Array(20).fill(0)];
        for (let f = 0; f < j.length; f++) {
            const C = k[f];
            for (let E = 0; E < d.length; E++)
                k[f + E] ^= c(C, d[E])
        }
        return k.slice(-20)
    }
    )
      , h = [];
    for (let j = 0; j < 78; j++)
        for (const k of n)
            h.push(k[j]);
    for (let j = 0; j < 20; j++)
        for (const k of m)
            h.push(k[j]);
    const w = 45
      , g = Array.from({
        length: w
    }, () => Array(w).fill(!1))
      , x = Array.from({
        length: w
    }, () => Array(w).fill(!1))
      , u = (j, k, f) => {
        j >= 0 && k >= 0 && j < w && k < w && (g[k][j] = f,
        x[k][j] = !0)
    }
    ;
    for (let j = 0; j < w; j++)
        u(6, j, j % 2 === 0),
        u(j, 6, j % 2 === 0);
    for (const [j,k] of [[3, 3], [41, 3], [3, 41]])
        for (let f = -4; f <= 4; f++)
            for (let C = -4; C <= 4; C++) {
                const E = Math.max(Math.abs(C), Math.abs(f));
                u(j + C, k + f, E !== 2 && E !== 4)
            }
    for (const j of [6, 22, 38])
        for (const k of [6, 22, 38])
            if (!(k === 6 && j === 6 || k === 6 && j === 38 || k === 38 && j === 6))
                for (let f = -2; f <= 2; f++)
                    for (let C = -2; C <= 2; C++)
                        u(k + C, j + f, Math.max(Math.abs(C), Math.abs(f)) !== 1);
    let p = 8;
    for (let j = 0; j < 10; j++)
        p = p << 1 ^ (p >>> 9) * 1335;
    p = (8192 | p) ^ 21522;
    const y = (j, k) => !!(j >>> k & 1);
    for (let j = 0; j < 6; j++)
        u(8, j, y(p, j));
    u(8, 7, y(p, 6)),
    u(8, 8, y(p, 7)),
    u(7, 8, y(p, 8));
    for (let j = 9; j < 15; j++)
        u(14 - j, 8, y(p, j));
    for (let j = 0; j < 8; j++)
        u(w - 1 - j, 8, y(p, j));
    for (let j = 8; j < 15; j++)
        u(8, w - 15 + j, y(p, j));
    u(8, w - 8, !0);
    let v = 7;
    for (let j = 0; j < 12; j++)
        v = v << 1 ^ (v >>> 11) * 7973;
    v |= 28672;
    for (let j = 0; j < 18; j++) {
        const k = w - 11 + j % 3
          , f = Math.floor(j / 3);
        u(k, f, y(v, j)),
        u(f, k, y(v, j))
    }
    let N = 0;
    for (let j = w - 1; j >= 1; j -= 2) {
        j === 6 && (j = 5);
        for (let k = 0; k < w; k++) {
            const f = j + 1 & 2 ? k : w - 1 - k;
            for (let C = 0; C < 2; C++) {
                const E = j - C;
                if (x[f][E])
                    continue;
                const R = N < h.length * 8 && y(h[N >>> 3], 7 - N % 8);
                g[f][E] = R !== ((E + f) % 2 === 0),
                N++
            }
        }
    }
    if (N !== 1568)
        throw new Error("QR_LAYOUT");
    return g
}
async function Bi(t) {
    if (t.plate.country !== "RU" || t.plate.format !== "RU_PRIVATE_V1")
        throw new Error("SHARE_FORMAT_UNAVAILABLE");
    await document.fonts.load("700 100px Onest"),
    await document.fonts.ready;
    const s = document.createElement("canvas");
    s.width = 1080,
    s.height = 1350;
    const r = s.getContext("2d");
    if (!r)
        throw new Error("CANVAS_UNAVAILABLE");
    const a = r.createLinearGradient(0, 0, 1080, 1350);
    a.addColorStop(0, "#edf3ff"),
    a.addColorStop(1, "#fff5de"),
    r.fillStyle = a,
    r.fillRect(0, 0, 1080, 1350);
    const i = (g, x, u, p, y=600, v="#18283f", N=936) => {
        for (r.fillStyle = v,
        r.textAlign = "left",
        r.font = `${y} ${p}px Onest`; r.measureText(g).width > N && p > 14; )
            p--,
            r.font = `${y} ${p}px Onest`;
        r.fillText(g, x, u)
    }
      , c = (g, x, u, p, y, v) => {
        r.fillStyle = v,
        r.beginPath(),
        r.roundRect(g, x, u, p, y),
        r.fill()
    }
    ;
    c(64, 64, 952, 1222, 44, "#ffffff"),
    i("НОМЕРОК", 104, 145, 45, 900),
    i("Мой номер", 104, 200, 25, 500, "#53657d"),
    c(104, 250, 872, 328, 26, "#eef2f8"),
    c(134, 310, 812, 201, 22, "#ffffff"),
    r.strokeStyle = "#18283f",
    r.lineWidth = 5,
    r.beginPath(),
    r.roundRect(134, 310, 812, 201, 22),
    r.stroke(),
    r.beginPath(),
    r.moveTo(767, 311),
    r.lineTo(767, 510),
    r.stroke(),
    i(t.plate.letters[0], 161, 447, 101, 900, "#101b2e", 85),
    i(t.plate.digits, 257, 447, 111, 900, "#101b2e", 285),
    i(t.plate.letters.slice(1), 556, 447, 101, 900, "#101b2e", 186),
    i(t.plate.regionCode, 790, 420, t.plate.regionCode.length === 3 ? 72 : 88, 900, "#101b2e", 132),
    i("RUS", 797, 475, 25, 800, "#101b2e", 60);
    for (const [g,x] of ["#fff", "#1760c9", "#df242b"].entries())
        r.fillStyle = x,
        r.fillRect(862, 451 + g * 8, 55, 8);
    r.strokeStyle = "#667085",
    r.lineWidth = 1,
    r.strokeRect(862, 451, 55, 24),
    i("RUS · РОССИЯ", 134, 553, 22, 600, "#53657d"),
    i(t.tier, 104, 652, 36, 700, t.color),
    i("ПРИМЕРНАЯ СТОИМОСТЬ", 104, 715, 23, 700, "#53657d"),
    i(BigInt(t.value).toLocaleString("ru-RU") + " ₽", 104, 798, 76, 800);
    const d = Qn(t.plate);
    d.length && i(d.map(g => g.title).join(" · "), 104, 858, 30, 700, "#53657d"),
    i(t.nickname ?? "Собери свой номер", 104, 955, 34, 700, "#18283f", 538),
    i(t.level === null ? "Номерок · игра для коллекционеров" : `Уровень ${t.level}`, 104, 1004, 27, 500, "#53657d", 540);
    const l = Mi(t.url)
      , n = 5
      , m = 4
      , h = 694
      , w = 927;
    c(h, w, 265, 265, 12, "#fff"),
    r.fillStyle = "#101b2e";
    for (let g = 0; g < l.length; g++)
        for (let x = 0; x < l.length; x++)
            l[g][x] && r.fillRect(h + (x + m) * n, w + (g + m) * n, n, n);
    return i(t.plate.publicPlateId ? "Моя коллекция по QR-коду" : "Открыть игру по QR-коду", 104, 1110, 27, 600, "#53657d", 540),
    i(new URL(t.url).host, 104, 1160, 28, 700, "#18283f", 540),
    i("Игровые рубли. Цену сделки выбирают игроки.", 104, 1233, 20, 500, "#53657d", 872),
    new Promise( (g, x) => s.toBlob(u => u ? g(u) : x(new Error("PNG_FAILED")), "image/png"))
}
function tt(t, s, r) {
    const a = o.useRef(s);
    o.useLayoutEffect( () => {
        a.current = s
    }
    );
    const i = o.useRef(r);
    o.useLayoutEffect( () => {
        i.current = r
    }
    );
    const [c,d] = o.useState(0)
      , [l,n] = o.useState({
        key: t,
        revision: c,
        busy: !0
    })
      , m = o.useRef()
      , h = o.useRef(!1)
      , w = o.useRef(null)
      , g = o.useCallback(async p => {
        var v;
        if (h.current)
            return;
        h.current = !0,
        (v = m.current) == null || v.abort();
        const y = new AbortController;
        m.current = y,
        n(N => ({
            key: t,
            revision: c,
            ...N.key === t ? {
                data: N.data
            } : {},
            busy: !0
        }));
        try {
            const N = await a.current(p, y.signal);
            if (y.signal.aborted)
                return;
            n(j => {
                var k;
                return {
                    key: t,
                    revision: c,
                    data: j.key === t && j.data ? p ? {
                        ...N,
                        items: [...j.data.items, ...N.items]
                    } : ((k = i.current) == null ? void 0 : k.call(i, j.data, N)) ?? N : N,
                    busy: !1
                }
            }
            )
        } catch (N) {
            y.signal.aborted || n(j => ({
                key: t,
                revision: c,
                data: j.key === t ? j.data : void 0,
                busy: !1,
                error: N
            }))
        } finally {
            m.current === y && (h.current = !1)
        }
    }
    , [t, c]);
    o.useEffect( () => {
        var p;
        return (p = m.current) == null || p.abort(),
        h.current = !1,
        g(),
        () => {
            var y;
            (y = m.current) == null || y.abort(),
            h.current = !1
        }
    }
    , [g]);
    const x = l.key === t && l.revision === c ? l : {
        key: t,
        revision: c,
        busy: !0,
        data: l.key === t ? l.data : void 0,
        error: void 0
    };
    o.useEffect( () => {
        var N;
        const p = w.current
          , y = (N = x.data) == null ? void 0 : N.nextCursor;
        if (!p || !y || x.busy || x.error)
            return;
        const v = new IntersectionObserver(j => {
            j.some(k => k.isIntersecting) && g(y)
        }
        );
        return v.observe(p),
        () => v.disconnect()
    }
    , [x.data, x.busy, x.error, g]);
    const u = o.useCallback( () => d(p => p + 1), []);
    return {
        ...x,
        sentinel: w,
        reload: u,
        next: () => {
            var p;
            return ((p = x.data) == null ? void 0 : p.nextCursor) && g(x.data.nextCursor)
        }
    }
}
function rn({expiresAt: t, onExpired: s}) {
    const [r,a] = o.useState(Date.now());
    o.useEffect( () => {
        a(Date.now());
        const c = window.setInterval( () => a(Date.now()), 1e3);
        return () => clearInterval(c)
    }
    , [t]);
    const i = Math.max(0, Math.ceil((Date.parse(t) - r) / 1e3));
    return o.useEffect( () => {
        i === 0 && (s == null || s())
    }
    , [i, s]),
    e.jsx("p", {
        className: "form-note",
        role: "timer",
        children: i ? `На подтверждение осталось ${i} с` : "Время вышло. Проверь сумму ещё раз."
    })
}
function Pr({quote: t}) {
    return e.jsxs("div", {
        className: "collector-amounts",
        children: [e.jsx(Z, {
            label: "Покупатель заплатит",
            value: q(t.grossGameRub),
            strong: !0
        }), e.jsx(Z, {
            label: "Комиссия с продажи",
            value: q(t.feeGameRub)
        }), e.jsx(Z, {
            label: "Продавец получит",
            value: q(t.netGameRub),
            strong: !0
        })]
    })
}
function qi({onSelect: t}) {
    var c, d;
    const {api: s, principalId: r} = he()
      , a = tt(r ?? "", (l, n) => s.m9.collection({
        cursor: l,
        limit: "50"
    }, n))
      , i = ((c = a.data) == null ? void 0 : c.items.filter(l => !l.favorite && !l.operationLock)) ?? [];
    return e.jsxs(e.Fragment, {
        children: [e.jsx("p", {
            children: "Какой номер хочешь продать?"
        }), i.map(l => e.jsx(us, {
            p: pt(l),
            onClick: () => t(pt(l))
        }, l.plateId)), a.error ? e.jsx(be, {
            title: "Не удалось загрузить коллекцию",
            children: e.jsx(b, {
                onClick: a.reload,
                children: "Повторить"
            })
        }) : !i.length && e.jsx("p", {
            children: a.busy ? "Загружаем…" : "Пока нечего предложить. Номера в избранном и занятые номера продать нельзя."
        }), ((d = a.data) == null ? void 0 : d.nextCursor) && e.jsx(b, {
            secondary: !0,
            disabled: a.busy,
            onClick: () => void a.next(),
            children: "Ещё номера"
        })]
    })
}
function Ui({direction: t, peerId: s, peerName: r, plate: a, onClose: i, onSent: c}) {
    const [d,l] = o.useState(a ?? null)
      , [n,m] = o.useState("")
      , [h,w] = o.useState(null)
      , [g,x] = o.useState(!1)
      , u = Tt()
      , p = /^[1-9][0-9]{0,15}$/.test(n) && BigInt(n) <= 9007199254740991n
      , y = /^[1-9][0-9]{0,15}$/.test(n) ? "Цена слишком большая. Максимум — 9 007 199 254 740 991 ₽." : "Введи цену от 1 ₽, без копеек.";
    return e.jsxs(ke, {
        closeDisabled: u.busy,
        title: t === "BUY" ? "Предложить покупку" : "Предложить свой номер",
        onClose: () => {
            u.busy || i()
        }
        ,
        children: [e.jsxs("p", {
            className: "body-copy",
            children: ["Игрок: ", e.jsx("strong", {
                children: r
            })]
        }), d ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "detail-plate",
                children: h ? e.jsx(_t, {
                    p: d
                }) : e.jsx(Qe, {
                    p: d
                })
            }), h ? e.jsxs(e.Fragment, {
                children: [e.jsx(Pr, {
                    quote: h
                }), e.jsx(rn, {
                    expiresAt: h.expiresAt,
                    onExpired: () => x(!0)
                }), e.jsx("p", {
                    className: "body-copy",
                    children: "На ответ есть 24 часа. До сделки деньги можно тратить, а номер продавать. Рамка останется у продавца."
                }), g ? e.jsx(b, {
                    loading: u.busy,
                    onClick: () => {
                        w(null),
                        x(!1)
                    }
                    ,
                    children: "Проверить заново"
                }) : e.jsx(b, {
                    loading: u.busy,
                    onClick: () => void u.run("trade-send", {
                        quoteId: h.quoteId,
                        digest: h.digest
                    }, c),
                    children: "Отправить предложение"
                }), e.jsx(b, {
                    secondary: !0,
                    disabled: u.busy,
                    onClick: () => w(null),
                    children: "Изменить цену"
                })]
            }) : e.jsxs("form", {
                className: "stack",
                onSubmit: v => {
                    v.preventDefault(),
                    p && u.run("trade-quote", {
                        direction: t,
                        counterpartyId: s,
                        plateId: d.id,
                        priceGameRub: n
                    }, N => {
                        w(N.quote),
                        x(!1)
                    }
                    )
                }
                ,
                children: [e.jsxs("label", {
                    className: "field",
                    children: ["Цена в игровых рублях", e.jsx("input", {
                        "aria-label": "Цена сделки в игровых рублях",
                        inputMode: "numeric",
                        autoComplete: "off",
                        maxLength: 16,
                        value: n,
                        onChange: v => m(v.target.value)
                    })]
                }), n && e.jsx("p", {
                    children: p ? q(n) : y
                }), e.jsx(b, {
                    type: "submit",
                    disabled: !p,
                    loading: u.busy,
                    children: "Продолжить"
                }), !a && e.jsx(b, {
                    secondary: !0,
                    onClick: () => l(null),
                    children: "Другой номер"
                })]
            })]
        }) : e.jsx(qi, {
            onSelect: l
        }), u.error && e.jsx("p", {
            className: "field-error",
            role: "alert",
            children: u.error
        })]
    })
}
function kt({p: t, onClick: s, plain: r=!1, label: a="Примерная стоимость"}) {
    const i = e.jsxs(e.Fragment, {
        children: [e.jsx("span", {
            children: a
        }), e.jsx("strong", {
            children: ft(t)
        })]
    });
    return s ? e.jsx("button", {
        type: "button",
        className: "collectible-estimate",
        onClick: s,
        "aria-label": `${a}: ${ft(t)}. Подробнее`,
        children: i
    }) : r ? e.jsx("div", {
        className: "collectible-estimate",
        children: i
    }) : e.jsxs("details", {
        className: "collectible-details",
        children: [e.jsx("summary", {
            className: "collectible-estimate",
            "aria-label": `${a}: ${ft(t)}. Подробнее`,
            children: i
        }), e.jsx(_r, {
            p: t
        })]
    })
}
function _r({p: t}) {
    const s = Qs(t);
    return e.jsxs(e.Fragment, {
        children: [s && (s.reasons.length ? e.jsxs(e.Fragment, {
            children: [e.jsx("p", {
                className: "minor-title",
                children: "Что влияет на стоимость"
            }), e.jsx("ul", {
                children: s.reasons.map(r => e.jsx("li", {
                    children: r.text
                }, r.code))
            })]
        }) : e.jsx("p", {
            className: "form-note",
            children: "Обычное сочетание цифр и букв."
        })), e.jsx("p", {
            className: "form-note",
            children: "Примерная стоимость — ориентир для торговли. Игроки выбирают цену сами."
        })]
    })
}
function Wt({p: t}) {
    return e.jsxs("section", {
        className: "collectible-details",
        "aria-label": "Примерная стоимость",
        children: [e.jsx(kt, {
            p: t,
            plain: !0
        }), e.jsx(_r, {
            p: t
        })]
    })
}
const Os = {
    "Читаются одинаково с двух сторон.": "Первая и последняя цифры совпадают.",
    "Совместный эффект": "Весь номер",
    "Оценка учитывает сочетание цифр, букв и региона. Признаки не являются отдельными денежными прибавками.": "Цифры, буквы и регион оцениваются вместе.",
    "Оценка по закреплённой политике": "Итоговая оценка",
    "Для прежней политики детализация оценки недоступна.": "Этот номер оценён по старым правилам. Подробности оценки недоступны."
};
function Vi({p: t}) {
    const s = Qn(t.descriptor ?? Zn({
        regionCode: t.region,
        digits: t.digits,
        letters: t.letters,
        plateId: t.id || void 0
    }));
    return s.length ? e.jsx("div", {
        className: "plate-labels",
        children: s.map(r => e.jsxs("p", {
            children: [e.jsx("strong", {
                children: r.title
            }), e.jsx("span", {
                children: r.description
            }), e.jsx("small", {
                children: "Название сочетания не даёт бонусов."
            })]
        }, r.id))
    }) : null
}
function Xt({p: t}) {
    const {api: s, principalId: r} = he()
      , a = /^[a-f0-9-]{36}$/.test(t.id)
      , i = Me(JSON.stringify([r, t.id, t.version]), c => s.collector.valuation(t.id, c), a);
    return e.jsxs("section", {
        className: "collector-valuation",
        "aria-label": "Из чего складывается стоимость",
        children: [a ? i.error ? e.jsxs("p", {
            role: "status",
            children: ["Не удалось загрузить подробности. ", e.jsx(b, {
                quiet: !0,
                onClick: i.reload,
                children: "Повторить"
            })]
        }) : i.data ? e.jsxs(e.Fragment, {
            children: [i.data.displayEstimate ? e.jsxs(e.Fragment, {
                children: [e.jsx(Z, {
                    label: "Примерная стоимость",
                    value: q(i.data.displayEstimate.amountGameRub),
                    strong: !0
                }), e.jsx("h3", {
                    children: "Что влияет на стоимость"
                }), i.data.displayEstimate.reasons.length ? e.jsx("ul", {
                    children: i.data.displayEstimate.reasons.map(c => e.jsx("li", {
                        children: c.text
                    }, c.code))
                }) : e.jsx("p", {
                    children: "Обычное сочетание цифр и букв."
                }), e.jsx("p", {
                    className: "form-note",
                    children: "Примерная стоимость — ориентир для торговли. Игроки выбирают цену сами."
                })]
            }) : e.jsx(Wt, {
                p: t
            }), e.jsxs("details", {
                children: [e.jsx("summary", {
                    children: "Редкость и оценка при получении"
                }), i.data.detailAvailable ? i.data.reasons.map(c => e.jsx(Z, {
                    label: c.title === "Оценка по закреплённой политике" ? "Оценка при получении" : Os[c.title] ?? c.title,
                    value: Os[c.detail] ?? c.detail
                }, c.title)) : e.jsx("p", {
                    children: Os[i.data.unavailableReason ?? ""] ?? i.data.unavailableReason
                }), e.jsx("p", {
                    className: "form-note",
                    children: "Выплата за этот номер сохраняется по правилам, действовавшим при его получении."
                })]
            })]
        }) : e.jsx("p", {
            "aria-busy": "true",
            children: "Загружаем подробности…"
        }) : e.jsx(Wt, {
            p: t
        }), e.jsx(Vi, {
            p: t
        })]
    })
}
function Ys(t, s) {
    const r = new URL("/",location.origin);
    return r.hash = "/player/" + t + (s ? "?plate=" + encodeURIComponent(s) : ""),
    r.toString()
}
function Ki({id: t, go: s, onBack: r, overlaysBlocked: a=!1}) {
    var Q, F;
    const {api: i, principalId: c, account: d} = he()
      , {state: l} = Ot()
      , n = Tt()
      , m = c === t
      , h = d.mode === "registered"
      , [w,g] = o.useState("")
      , [x,u] = o.useState("")
      , [p,y] = o.useState(null)
      , [v,N] = o.useState(null)
      , [j,k] = o.useState("")
      , [f,C] = o.useState(!1)
      , E = Me(t, X => i.collector.profile(t, X))
      , R = {
        query: w,
        ...x ? {
            displayTier: x
        } : {}
    }
      , P = tt(JSON.stringify([t, R]), (X, L) => i.collector.collection(t, {
        ...R,
        cursor: X
    }, L))
      , A = (l == null ? void 0 : l.blockedPlayerIds.includes(t)) ?? !1;
    o.useEffect( () => {
        if (a)
            return;
        const X = lt()
          , L = X.profileId === t ? X.plateId : void 0;
        if (!L)
            return;
        const _ = new AbortController;
        return i.collector.collection(t, {
            plateId: L
        }, _.signal).then(U => {
            const D = U.items.find($ => $.descriptor.publicPlateId === L);
            _.signal.aborted || (D ? y(D) : k("Этого номера больше нет в открытой коллекции игрока."))
        }
        , () => {
            _.signal.aborted || k("Не удалось открыть номер по ссылке.")
        }
        ),
        () => _.abort()
    }
    , [i, t, a]);
    async function I() {
        try {
            await navigator.clipboard.writeText(Ys(t)),
            k("Ссылка скопирована")
        } catch {
            k("Не удалось скопировать ссылку. Её можно выделить ниже.")
        }
    }
    const T = p ? Ns(p) : null;
    return E.error ? e.jsx("div", {
        className: "page",
        children: e.jsxs(be, {
            title: "Профиль недоступен",
            description: ge(E.error, {
                phase: "read"
            }),
            children: [e.jsx(b, {
                onClick: E.reload,
                children: "Повторить"
            }), e.jsx(b, {
                secondary: !0,
                onClick: r,
                children: "Назад"
            })]
        })
    }) : e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "page collector-public",
            children: [e.jsxs("div", {
                className: "page-heading",
                children: [e.jsx("h1", {
                    children: m ? "Профиль для игроков" : "Профиль игрока"
                }), e.jsx(b, {
                    quiet: !0,
                    onClick: r,
                    children: "Назад"
                })]
            }), E.data ? e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "profile-hero",
                    children: [e.jsxs("span", {
                        className: "collector-avatar",
                        children: [e.jsx(vs, {
                            nickname: E.data.nickname,
                            color: E.data.avatarColor ?? void 0
                        }), e.jsxs("span", {
                            className: "collector-level",
                            children: ["lvl ", E.data.progress.level]
                        })]
                    }), e.jsx("h2", {
                        children: E.data.nickname
                    })]
                }), e.jsx(nn, {
                    progress: E.data.progress
                }), e.jsx(b, {
                    secondary: !0,
                    onClick: () => void I(),
                    children: "Скопировать ссылку"
                }), e.jsx("input", {
                    className: "collector-copy-link",
                    "aria-label": "Ссылка на профиль",
                    readOnly: !0,
                    value: Ys(t),
                    onFocus: X => X.currentTarget.select()
                }), E.data.bestPlate && e.jsxs("section", {
                    children: [e.jsx("h3", {
                        children: "Лучший номер"
                    }), e.jsx(us, {
                        p: Ns(E.data.bestPlate),
                        onClick: () => y(E.data.bestPlate)
                    })]
                }), !m && h && e.jsxs("div", {
                    className: "collector-inline-actions",
                    children: [e.jsx(b, {
                        secondary: !0,
                        disabled: A,
                        onClick: () => {
                            y(null),
                            N("SELL")
                        }
                        ,
                        children: "Предложить свой номер"
                    }), e.jsx(b, {
                        quiet: !0,
                        onClick: () => C(!0),
                        children: A ? "Разблокировать сделки" : "Заблокировать сделки"
                    })]
                }), e.jsxs("h2", {
                    children: ["Коллекция · ", E.data.collectionCount]
                }), e.jsxs("div", {
                    className: "collector-filters",
                    children: [e.jsxs("label", {
                        children: ["Редкость", e.jsxs("select", {
                            value: x,
                            onChange: X => u(X.target.value),
                            children: [e.jsx("option", {
                                value: "",
                                children: "Все"
                            }), Object.entries(ds).map( ([X,L]) => e.jsx("option", {
                                value: X,
                                children: Fe[L].label
                            }, X))]
                        })]
                    }), e.jsxs("label", {
                        children: ["Найти номер", e.jsx("input", {
                            value: w,
                            maxLength: 32,
                            onChange: X => g(X.target.value),
                            placeholder: "Цифры или буквы"
                        })]
                    })]
                }), P.error ? e.jsx(be, {
                    title: "Не удалось загрузить коллекцию",
                    children: e.jsx(b, {
                        onClick: P.reload,
                        children: "Повторить"
                    })
                }) : (Q = P.data) != null && Q.items.length ? e.jsx("div", {
                    className: "asset-list",
                    children: P.data.items.map(X => e.jsx(us, {
                        p: Ns(X),
                        onClick: () => y(X)
                    }, X.descriptor.publicPlateId))
                }) : e.jsx("p", {
                    children: P.busy ? "Загружаем номера…" : "Номеров по этому запросу нет."
                }), ((F = P.data) == null ? void 0 : F.nextCursor) && e.jsx(b, {
                    secondary: !0,
                    disabled: P.busy,
                    onClick: () => void P.next(),
                    children: "Показать ещё"
                })]
            }) : e.jsx("p", {
                "aria-busy": "true",
                children: "Загружаем профиль…"
            }), j && e.jsx("p", {
                role: "status",
                className: "form-note",
                children: j
            })]
        }), !a && p && T && !v && e.jsxs(ke, {
            title: "Номер игрока",
            onClose: () => y(null),
            children: [e.jsxs("div", {
                className: "detail-plate",
                children: [e.jsx(Qe, {
                    p: T
                }), e.jsx(Ue, {
                    p: T
                })]
            }), e.jsx(Z, {
                label: "Оценка",
                value: q(T.value),
                strong: !0
            }), e.jsx(Xt, {
                p: T
            }), !m && (h ? e.jsx(b, {
                disabled: !p.tradeAvailable || A,
                onClick: () => N("BUY"),
                children: "Предложить покупку"
            }) : e.jsx(b, {
                onClick: () => s("register"),
                children: "Создать аккаунт для сделки"
            })), !m && !p.tradeAvailable && e.jsx("p", {
                className: "form-note",
                children: "Сейчас этот номер недоступен для сделки."
            })]
        }), !a && v && E.data && e.jsx(Ui, {
            direction: v,
            peerId: t,
            peerName: E.data.nickname,
            plate: v === "BUY" && T ? T : void 0,
            onClose: () => N(null),
            onSent: () => {
                N(null),
                y(null),
                s("pl-notice")
            }
        }), !a && f && e.jsxs(ke, {
            closeDisabled: n.busy,
            title: A ? "Разблокировать сделки?" : "Заблокировать сделки с игроком?",
            onClose: () => {
                n.busy || C(!1)
            }
            ,
            children: [e.jsx("p", {
                children: A ? "Вы снова сможете предлагать друг другу сделки. Старые предложения останутся закрытыми." : "Вы больше не сможете предлагать друг другу сделки. Предложения без ответа закроются."
            }), e.jsx(b, {
                loading: n.busy,
                onClick: () => void n.run("trade-block", {
                    playerId: t,
                    blocked: !A
                }, () => C(!1)),
                children: A ? "Разблокировать" : "Заблокировать"
            }), e.jsx(b, {
                secondary: !0,
                onClick: () => C(!1),
                children: "Отмена"
            }), n.error && e.jsx("p", {
                role: "alert",
                children: n.error
            })]
        })]
    })
}
function an({p: t, owned: s=!1}) {
    const [r,a] = o.useState(!1);
    return !gs(t) || !Qs(t) ? null : e.jsxs(e.Fragment, {
        children: [e.jsx(b, {
            secondary: !0,
            onClick: () => a(!0),
            children: "Поделиться номером"
        }), r && e.jsx(Hi, {
            p: t,
            owned: s,
            onClose: () => a(!1)
        })]
    })
}
function Hi({p: t, owned: s, onClose: r}) {
    var A;
    const {account: a, principalId: i} = he()
      , c = Zt()
      , {id: d, descriptor: l, region: n, digits: m, letters: h, tier: w} = t
      , g = Qs(t).amountGameRub
      , [x,u] = o.useState(null)
      , [p,y] = o.useState("")
      , [v,N] = o.useState("")
      , [j,k] = o.useState(!1)
      , [f,C] = o.useState(!1)
      , E = s && i && a.mode === "registered" ? Ys(i, t.id) : new URL("/",location.origin).toString();
    o.useEffect( () => {
        let I = !1, T;
        u(null),
        N("");
        const Q = l ?? Zn({
            regionCode: n,
            digits: m,
            letters: h,
            ...s ? {
                plateId: d
            } : {}
        });
        return Bi({
            plate: {
                ...Q,
                publicPlateId: s ? Q.publicPlateId : null
            },
            value: String(g),
            tier: Fe[w].label,
            color: Fe[w].color,
            nickname: a.mode === "registered" ? a.nick : null,
            level: a.mode === "registered" ? (c == null ? void 0 : c.level) ?? null : null,
            url: E
        }).then(F => {
            I || (T = URL.createObjectURL(F),
            y(T),
            u(new File([F],"nomerok.png",{
                type: "image/png"
            })))
        }
        , () => {
            I || N("Не удалось подготовить картинку. Закрой окно и попробуй ещё раз.")
        }
        ),
        () => {
            I = !0,
            T && URL.revokeObjectURL(T)
        }
    }
    , [d, w, l, n, m, h, g, a.mode, a.nick, c == null ? void 0 : c.level, E, s]);
    async function R() {
        if (x) {
            C(!0),
            N("");
            try {
                await navigator.share({
                    files: [x],
                    title: "Номерок · " + Dt(t),
                    url: E
                }),
                r()
            } catch (I) {
                I instanceof DOMException && I.name === "AbortError" ? r() : N("Отправка недоступна. Скачай картинку или скопируй ссылку.")
            } finally {
                C(!1)
            }
        }
    }
    const P = !!x && typeof navigator.share == "function" && !!((A = navigator.canShare) != null && A.call(navigator, {
        files: [x]
    }));
    return e.jsxs(ke, {
        title: "Поделиться номером",
        onClose: () => {
            f || r()
        }
        ,
        children: [x ? e.jsx("img", {
            className: "collector-share-preview",
            src: p,
            alt: `Картинка для отправки: ${Dt(t)}`,
            width: 1080,
            height: 1350
        }) : !v && e.jsx("p", {
            "aria-busy": "true",
            children: "Готовим картинку…"
        }), P && e.jsx(b, {
            loading: f,
            onClick: () => void R(),
            children: "Отправить картинку"
        }), x && e.jsx("a", {
            className: "btn secondary",
            href: p,
            download: "nomerok.png",
            children: "Скачать картинку"
        }), e.jsx(b, {
            secondary: !0,
            onClick: () => {
                navigator.clipboard.writeText(E).then( () => k(!0), () => N("Не удалось скопировать. Выдели ссылку ниже."))
            }
            ,
            children: j ? "Ссылка скопирована" : "Скопировать ссылку"
        }), e.jsx("input", {
            className: "collector-copy-link",
            readOnly: !0,
            "aria-label": "Ссылка для отправки",
            value: E,
            onFocus: I => I.currentTarget.select()
        }), v && e.jsx("p", {
            className: "field-error",
            role: "alert",
            children: v
        })]
    })
}
function Dr({busy: t, onExpand: s, onClose: r}) {
    const {r2Game: a, r2GameConfig: i, gameStatus: c} = he()
      , d = o.useId()
      , l = (a == null ? void 0 : a.collection.nextExpansionPriceGameRub) ?? (i == null ? void 0 : i.collection.expansionPriceGameRub)
      , n = a == null ? void 0 : a.balance.amount
      , m = c === "ready" && typeof l == "string" && /^(0|[1-9][0-9]*)$/.test(l) && typeof n == "string" && /^(0|[1-9][0-9]*)$/.test(n)
      , h = m && BigInt(n) >= BigInt(l)
      , w = m ? h ? void 0 : "Не хватает игровых рублей на новые места." : "Цена или баланс ещё не загрузились. Подожди немного.";
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "detail-price",
            children: [e.jsx("span", {
                children: "Дополнительные места"
            }), e.jsxs("b", {
                children: ["+", (i == null ? void 0 : i.collection.expansionSlots) ?? "—", " мест"]
            })]
        }), e.jsx(Z, {
            label: "Стоимость",
            value: q(l),
            strong: !0
        }), e.jsx(Z, {
            label: "Текущий баланс",
            value: q(n)
        }), w && e.jsx("p", {
            id: d,
            className: "form-note",
            role: "status",
            children: w
        }), e.jsxs("div", {
            className: "sheet-actions",
            children: [e.jsx(b, {
                loading: t,
                disabled: !h,
                "aria-describedby": w ? d : void 0,
                onClick: s,
                children: "Расширить"
            }), e.jsx(b, {
                secondary: !0,
                onClick: r,
                children: "Отмена"
            })]
        })]
    })
}
const Un = 2100
  , Vn = ["#ffe497", "#edb844", "#f8fcff", "#65c6ee", "#b79ade"]
  , Yi = Array.from({
    length: 40
}, (t, s) => {
    const r = s % 2 === 1
      , a = r ? -1 : 1;
    return {
        "--origin": r ? "97%" : "3%",
        "--color": Vn[s % Vn.length],
        "--dx": `${a * (13 + s * 17 % 44)}px`,
        "--dy": `${-55 - s * 29 % 150}px`,
        "--end-x": `${a * (5 + s * 11 % 42)}px`,
        "--end-y": `${200 + s * 37 % 190}px`,
        "--rotation": `${a * (220 + s * 41 % 640)}deg`,
        "--delay": `${s * 31 % 150}ms`,
        "--duration": `${1650 + s * 23 % 300}ms`,
        "--width": `${4 + s % 4}px`,
        "--height": `${7 + s % 6}px`
    }
}
);
function Wi(t) {
    const [s,r] = o.useState(null)
      , a = o.useRef({
        id: 0,
        time: -1 / 0
    })
      , i = o.useRef();
    o.useEffect( () => {
        r(null),
        a.current = {
            id: 0,
            time: -1 / 0
        };
        const d = matchMedia("(prefers-reduced-motion: reduce)")
          , l = () => {
            clearTimeout(i.current),
            r(null)
        }
          , n = () => {
            document.hidden && l()
        }
          , m = () => {
            (d.matches || document.documentElement.dataset.theme !== "game") && l()
        }
          , h = new MutationObserver(m);
        return h.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["data-theme"]
        }),
        document.addEventListener("visibilitychange", n),
        d.addEventListener("change", m),
        () => {
            clearTimeout(i.current),
            h.disconnect(),
            document.removeEventListener("visibilitychange", n),
            d.removeEventListener("change", m)
        }
    }
    , [t]);
    function c(d) {
        if (d.id <= a.current.id || (a.current.id = d.id,
        !d.tiers.includes("ultra")) || document.hidden || document.documentElement.dataset.theme !== "game" || matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
        const l = performance.now();
        l - a.current.time < (d.automated ? 8e3 : Un) || (a.current.time = l,
        clearTimeout(i.current),
        r(d.id),
        i.current = setTimeout( () => r(null), Un))
    }
    return {
        event: s,
        celebrate: c
    }
}
function zi({event: t}) {
    return t === null ? null : zn.createPortal(e.jsx("div", {
        className: "legendary-confetti",
        "data-event": t,
        "aria-hidden": "true",
        children: Yi.map( (s, r) => e.jsx("i", {
            style: s
        }, r))
    }, t), document.body)
}
let os = !1
  , Ws = !1;
function Or() {
    os = !1,
    Ws = !1;
    try {
        sessionStorage.removeItem("nomerok-manual-session-v1")
    } catch {}
}
window.addEventListener("nomerok-analytics-reset", Or);
Ca( () => {
    Ea() && !Zs() && Or()
}
);
function Tr(t, s) {
    if (!Zs() || !s || typeof s != "object")
        return;
    if (!Ws) {
        Ws = !0;
        try {
            os = sessionStorage.getItem("nomerok-manual-session-v1") === "1"
        } catch {}
    }
    const r = s;
    if (r.replayed || !r.receiptId)
        return;
    const a = r.regionCode;
    if (t === "spin") {
        if (!os) {
            os = !0;
            try {
                sessionStorage.setItem("nomerok-manual-session-v1", "1")
            } catch {}
            we("ng_manual_first", {}, "manual-session")
        }
        (r.axis === "digits" || r.axis === "letters" || r.axis === "whole") && we(r.axis === "digits" ? "ng_spin_digits" : r.axis === "letters" ? "ng_spin_letters" : "ng_spin_whole", {
            action: r.axis,
            region: a
        }, r.receiptId),
        r.digits && r.letters && we("ng_plate_complete", {
            region: a
        }, r.receiptId)
    } else
        t === "save" ? we("ng_plate_save", {}, r.receiptId) : t === "sell" ? we("ng_plate_sell", {}, r.receiptId) : t === "region" ? we("ng_region_select", {
            region: a
        }, r.receiptId) : t.startsWith("reward-") && we("ng_task_reward", {
            action: t === "reward-recovery" ? "extra" : t === "reward-completion" ? "daily" : void 0
        }, r.receiptId)
}
const Ji = o.lazy( () => ca( () => import("./FeatureDemo-rbPscjuM.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])));
function Fr({feature: t}) {
    return e.jsx(o.Suspense, {
        fallback: e.jsx("div", {
            className: "feature-demo feature-demo-loading",
            "aria-label": "Загружаем пример",
            "aria-busy": "true"
        }),
        children: e.jsx(Ji, {
            feature: t
        })
    })
}
const Qi = 360;
function Zi(t, s, r) {
    const [a,i] = o.useState([null, null])
      , c = o.useRef(0)
      , d = o.useRef([null, null])
      , l = o.useRef(new Set)
      , n = o.useRef({
        actor: t,
        plates: s
    })
      , m = o.useRef(new Map)
      , h = o.useRef([]);
    o.useLayoutEffect( () => {
        var x;
        n.current = {
            actor: t,
            plates: s
        };
        for (const u of h.current.splice(0)) {
            if (u.actor !== t)
                continue;
            const y = u.before.filter( ({index: v, plate: N}) => s[v] && (s[v].version !== N.version || s[v].id !== N.id)).map( ({index: v}) => s[v]).filter(v => v.rarityKnown !== !1 && gs(v)).map(v => v.tier);
            for (const v of u.results ?? []) {
                const N = (x = u.before.find(j => j.index === v.index)) == null ? void 0 : x.plate;
                N && v.version !== N.version && v.tier && y.push(v.tier)
            }
            y.length && (r == null || r({
                id: u.id,
                automated: u.automated,
                tiers: y
            }))
        }
    }
    ),
    o.useLayoutEffect( () => (d.current = [null, null],
    m.current.clear(),
    h.current = [],
    i([null, null]),
    () => {
        l.current.forEach(clearTimeout),
        l.current.clear(),
        d.current = [null, null],
        m.current.clear(),
        h.current = []
    }
    ), [t]);
    function w(x, u=performance.now(), p=!1) {
        const y = ++c.current;
        m.current.set(y, {
            id: y,
            actor: t,
            automated: p,
            before: x.map( ({index: v}) => ({
                index: v,
                plate: n.current.plates[v]
            }))
        });
        for (const {index: v, axis: N} of x)
            d.current[v] = {
                id: y,
                actor: t,
                axis: N,
                start: u,
                before: n.current.plates[v]
            };
        return i([...d.current]),
        y
    }
    function g(x, u, p) {
        const y = m.current.get(x);
        y && u && p && (y.results = p);
        for (let v = 0; v < 2; v++) {
            const N = d.current[v];
            if (!N || N.id !== x || N.actor !== n.current.actor)
                continue;
            const j = () => {
                var f;
                if (!(((f = d.current[v]) == null ? void 0 : f.id) !== x || n.current.actor !== N.actor) && (d.current[v] = null,
                i([...d.current]),
                !d.current.some(C => (C == null ? void 0 : C.id) === x))) {
                    const C = m.current.get(x);
                    m.current.delete(x),
                    u && C && h.current.push(C)
                }
            }
              , k = u ? Math.max(0, Qi - (performance.now() - N.start)) : 0;
            if (k > 0) {
                const f = setTimeout( () => {
                    l.current.delete(f),
                    j()
                }
                , k);
                l.current.add(f)
            } else
                j()
        }
    }
    return {
        begin: w,
        finish: g,
        plates: s.map( (x, u) => {
            var p;
            return ((p = a[u]) == null ? void 0 : p.actor) === t ? a[u].before : x
        }
        ),
        motion: a.map(x => (x == null ? void 0 : x.actor) === t ? x.axis : null)
    }
}
const Xi = [["common", "А583КТ 77"], ["rare", "А122КТ 77"], ["very-rare", "А777КТ 77"], ["legendary", "А777КК 77"], ["ultra", "А777АА 77"]];
function Gr({onClose: t}) {
    return e.jsxs(e.Fragment, {
        children: [e.jsx("p", {
            className: "body-copy",
            children: "Примерная стоимость — ориентир для торговли. Игроки выбирают цену сами."
        }), e.jsx("div", {
            className: "rarity-examples",
            children: Xi.map( ([s,r]) => e.jsxs("div", {
                className: "rarity-example",
                children: [e.jsx("span", {
                    className: "rarity",
                    style: {
                        color: `var(--rarity-${s})`
                    },
                    children: Fe[s].label
                }), e.jsx("b", {
                    children: r
                })]
            }, s))
        }), e.jsxs("div", {
            className: "rare-series-info",
            children: [e.jsxs("div", {
                children: [e.jsx("strong", {
                    children: "Статусная серия"
                }), e.jsxs("p", {
                    children: [Fe.ultra.label, " номер с дополнительной подписью. Например, Е583КХ 77."]
                })]
            }), e.jsxs("div", {
                children: [e.jsx("strong", {
                    children: "Спецсерия"
                }), e.jsxs("p", {
                    children: [Fe.ultra.label, " номер с дополнительной подписью. Например, Е583КХ 97."]
                })]
            })]
        }), e.jsx(b, {
            secondary: !0,
            onClick: t,
            children: "Понятно"
        })]
    })
}
function $r(t) {
    const s = t % 100;
    return `${t} ${s >= 11 && s <= 14 ? "мест" : t % 10 === 1 ? "место" : t % 10 >= 2 && t % 10 <= 4 ? "места" : "мест"}`
}
function Mr(t=!0) {
    const {api: s, principalId: r, account: a, r2Game: i} = he();
    return Me(JSON.stringify([r, i == null ? void 0 : i.balance.version]), async c => {
        const d = await s.m9.collection({
            limit: "1"
        }, c)
          , l = await s.m9.auctions({
            scope: "bidding",
            limit: "50"
        }, c)
          , n = [...l.items]
          , m = new Set;
        let h = l.nextCursor;
        for (; h; ) {
            if (m.has(h))
                throw new Error("Повтор страницы аукционов");
            m.add(h);
            const g = await s.m9.auctions({
                scope: "bidding",
                limit: "50",
                cursor: h
            }, c);
            if (g.snapshotId !== l.snapshotId)
                throw new Error("Снимок аукционов изменился");
            n.push(...g.items),
            h = g.nextCursor
        }
        const w = n.filter(g => g.relationship === "leader" && ["ACTIVE_WITH_BID", "SETTLING"].includes(g.state)).length;
        return {
            owned: d.total,
            capacity: d.metadata.capacity,
            reserved: w,
            collectionSnapshot: d.snapshotId,
            auctionSnapshot: l.snapshotId
        }
    }
    , t && !!r && a.mode === "registered")
}
function el({count: t, onClick: s}) {
    return t ? e.jsxs("button", {
        className: "reserved-places",
        onClick: s,
        children: [e.jsxs("span", {
            children: ["+", $r(t), " зарезервировано"]
        }), e.jsx(ue, {
            name: "info",
            size: 15
        })]
    }) : null
}
function Br({owned: t, capacity: s, reserved: r, onBids: a}) {
    return e.jsxs(e.Fragment, {
        children: [e.jsx(Z, {
            label: "В коллекции",
            value: `${t} / ${s}`
        }), e.jsx(Z, {
            label: "Для выигрышей",
            value: r
        }), e.jsx("p", {
            className: "body-copy",
            children: "Эти места заняты под номера с аукционов, где твоя ставка самая высокая."
        }), e.jsx("p", {
            className: "form-note",
            children: "Пока ты лидируешь, сохранить сюда другой номер нельзя."
        }), e.jsx(b, {
            onClick: a,
            children: "Мои ставки"
        })]
    })
}
const tl = t => t === "Только цифры" ? "Цифры" : t === "Только буквы" ? "Буквы" : "Весь номер";
function sl({state: t, frameIds: s, onFrames: r, motion: a, busy: i, onSpin: c, onSave: d, onSell: l, onAuto: n, onRegion: m, onInfo: h, manualNotices: w, onFunds: g, onCapacity: x, commandBlocked: u=!1}) {
    const p = o.useRef({});
    return e.jsxs(e.Fragment, {
        children: [e.jsx("div", {
            className: "double-stages double-layout-a",
            children: t.slots.map( (y, v) => {
                const N = t.autoStatus[v] === "running"
                  , j = u || !!i[v] || !!a[v] || N
                  , k = gs(y)
                  , f = t.slotRegions[v];
                return e.jsxs("article", {
                    className: `double-slot ${N ? "is-auto-running" : ""}`,
                    "aria-label": `Номер ${v + 1}`,
                    "data-slot": v,
                    children: [e.jsxs("div", {
                        className: "double-slot-heading",
                        children: [e.jsxs("h2", {
                            children: ["Номер ", v + 1]
                        }), e.jsxs("button", {
                            className: "slot-region",
                            "aria-label": `Изменить регион номера ${v + 1}: ${f.spinPrice === null ? "Выбрать регион" : f.code + " · " + f.name}`,
                            onClick: () => m(v),
                            disabled: u || !!i[v] || !!a[v],
                            children: [e.jsx(ue, {
                                name: "pin",
                                size: 14
                            }), e.jsx("span", {
                                children: f.spinPrice === null ? "Выбрать регион" : f.code + " · " + f.name
                            }), e.jsx(ue, {
                                name: "down",
                                size: 12
                            })]
                        }), e.jsxs("button", {
                            className: `auto-indicator ${N ? "auto-active" : ""} ${t.auto ? "" : "premium-locked"}`,
                            "aria-pressed": N,
                            "aria-label": `Настроить Авто номера ${v + 1}${N ? ", работает" : ""}`,
                            "aria-description": t.auto ? void 0 : "Функция ещё не открыта",
                            onClick: () => n(v),
                            disabled: v === 1 && !t.double,
                            children: [e.jsx(ue, {
                                name: t.auto ? "auto" : "lock",
                                artwork: "auto",
                                size: 16
                            }), e.jsx("span", {
                                children: "Авто"
                            }), N && e.jsx("i", {
                                className: "live-dot"
                            })]
                        })]
                    }), e.jsx("div", {
                        className: "double-slot-preview",
                        children: e.jsxs("div", {
                            className: "double-slot-plate",
                            children: [e.jsxs("span", {
                                className: "double-slot-marker",
                                "aria-hidden": "true",
                                children: [v + 1, N && e.jsx("i", {
                                    className: "live-dot"
                                })]
                            }), e.jsx(Qe, {
                                p: y,
                                spinning: a[v],
                                frameId: s == null ? void 0 : s[v],
                                reserve: !!r,
                                trigger: r ? e.jsx(tr, {
                                    label: "Выбрать рамку для номера " + (v + 1),
                                    onClick: () => r(v)
                                }) : void 0,
                                caption: k ? e.jsx(Ue, {
                                    p: y,
                                    onClick: () => h(v),
                                    valuation: ft(y)
                                }) : e.jsx("span", {
                                    className: "estimate-caption-pending",
                                    children: ft(y)
                                })
                            })]
                        })
                    }), e.jsx(or, {
                        slot: v === 0 ? "A" : "B"
                    }), e.jsxs("div", {
                        className: "double-control-set",
                        children: [e.jsx("div", {
                            className: "double-spin-actions",
                            children: ["digits", "letters"].map(C => {
                                const E = Vt(t.slotPrices ? t.slotPrices[v][C] : f.spinPrice);
                                return e.jsxs("button", {
                                    className: "double-spin",
                                    disabled: j || !(C === "digits" ? t.allowed[v].digits : t.allowed[v].letters),
                                    "data-waiting": j && (C === "digits" ? t.allowed[v].digits : t.allowed[v].letters),
                                    "aria-busy": a[v] === C || a[v] === "whole",
                                    onPointerDown: R => {
                                        p.current[`${v}:${C}`] = R.pointerType
                                    }
                                    ,
                                    onPointerUp: R => {
                                        if (R.pointerType !== "touch" || R.currentTarget.disabled)
                                            return;
                                        const P = R.currentTarget.getBoundingClientRect();
                                        R.clientX < P.left || R.clientX > P.right || R.clientY < P.top || R.clientY > P.bottom || (R.preventDefault(),
                                        c(v, C))
                                    }
                                    ,
                                    onClick: R => {
                                        (R.detail === 0 || p.current[`${v}:${C}`] !== "touch") && c(v, C)
                                    }
                                    ,
                                    "aria-label": `Номер ${v + 1}: крутить ${C === "digits" ? "цифры" : "буквы"}${E ? ` за ${E}` : ""}`,
                                    children: [e.jsx("span", {
                                        className: "double-spin-icon",
                                        children: e.jsx(Nr, {
                                            part: C === "digits" ? "digits" : "letters",
                                            active: a[v] === C || a[v] === "whole"
                                        })
                                    }), e.jsxs("span", {
                                        className: "double-spin-label",
                                        children: [C === "digits" ? "Цифры" : "Буквы", E && e.jsx("small", {
                                            children: E
                                        })]
                                    })]
                                }, C)
                            }
                            )
                        }), e.jsxs("div", {
                            className: "double-result-actions",
                            children: [e.jsxs(b, {
                                className: BigInt(y.saveReward) > 0n ? "save-btn reward" : "save-btn",
                                disabled: j || !k || !t.allowed[v].save,
                                "data-waiting": j && k && t.allowed[v].save,
                                loading: i[v] === "save",
                                onClick: () => d(v),
                                "aria-label": `Сохранить номер ${v + 1}`,
                                children: [e.jsx(ot, {
                                    name: "save"
                                }), e.jsxs("span", {
                                    children: ["Сохранить", BigInt(y.saveReward) > 0n && e.jsxs("small", {
                                        children: ["+", q(y.saveReward)]
                                    })]
                                })]
                            }), e.jsxs(b, {
                                secondary: !0,
                                className: "game-sale",
                                disabled: j || !k || !t.allowed[v].sell,
                                "data-waiting": j && k && t.allowed[v].sell,
                                loading: i[v] === "sell",
                                onClick: () => l(v),
                                "aria-label": `Продать номер ${v + 1} игре за ${q(y.instantSell)}`,
                                children: [e.jsx(ot, {
                                    name: "sell"
                                }), e.jsxs("span", {
                                    children: ["Продать игре", k && e.jsxs("small", {
                                        children: ["за ", q(y.instantSell)]
                                    })]
                                })]
                            })]
                        })]
                    })]
                }, v)
            }
            )
        }), e.jsx(wr, {
            messages: t.slots.flatMap( (y, v) => {
                const N = t.autoStatus[v]
                  , j = {
                    ...sn,
                    "other-tab": "Авто уже работает в другой вкладке",
                    funds: "Недостаточно игровых рублей",
                    capacity: "Коллекция заполнена",
                    refusal: "Прокрутка недоступна",
                    error: "Авто не смогло продолжить"
                }[N];
                return [...w != null && w[v] ? [{
                    id: `manual-${v}`,
                    slot: v + 1,
                    title: "Действие не выполнено",
                    message: w[v]
                }] : [], ...j ? [{
                    id: `auto-${v}`,
                    slot: v + 1,
                    title: "Авто остановлено",
                    message: j,
                    action: N === "funds" && g ? {
                        label: "Пополнить",
                        run: g
                    } : N === "capacity" && x ? {
                        label: "Что можно сделать",
                        run: () => x(v)
                    } : void 0
                }] : []]
            }
            )
        })]
    })
}
const zt = {
    10: "Республика Карелия",
    11: "Республика Коми",
    12: "Республика Марий Эл",
    13: "Республика Мордовия",
    14: "Республика Саха (Якутия)",
    15: "Республика Северная Осетия — Алания",
    16: "Республика Татарстан",
    17: "Республика Тыва",
    18: "Удмуртская Республика",
    19: "Республика Хакасия",
    21: "Чувашская Республика",
    22: "Алтайский край",
    23: "Краснодарский край",
    24: "Красноярский край",
    25: "Приморский край",
    26: "Ставропольский край",
    27: "Хабаровский край",
    28: "Амурская область",
    29: "Архангельская область",
    30: "Астраханская область",
    31: "Белгородская область",
    32: "Брянская область",
    33: "Владимирская область",
    34: "Волгоградская область",
    35: "Вологодская область",
    36: "Воронежская область",
    37: "Ивановская область",
    38: "Иркутская область",
    39: "Калининградская область",
    40: "Калужская область",
    41: "Камчатский край",
    42: "Кемеровская область — Кузбасс",
    43: "Кировская область",
    44: "Костромская область",
    45: "Курганская область",
    46: "Курская область",
    47: "Ленинградская область",
    48: "Липецкая область",
    49: "Магаданская область",
    50: "Московская область",
    51: "Мурманская область",
    52: "Нижегородская область",
    53: "Новгородская область",
    54: "Новосибирская область",
    55: "Омская область",
    56: "Оренбургская область",
    57: "Орловская область",
    58: "Пензенская область",
    59: "Пермский край",
    60: "Псковская область",
    61: "Ростовская область",
    62: "Рязанская область",
    63: "Самарская область",
    64: "Саратовская область",
    65: "Сахалинская область",
    66: "Свердловская область",
    67: "Смоленская область",
    68: "Тамбовская область",
    69: "Тверская область",
    70: "Томская область",
    71: "Тульская область",
    72: "Тюменская область",
    73: "Ульяновская область",
    74: "Челябинская область",
    75: "Забайкальский край",
    76: "Ярославская область",
    77: "Москва",
    78: "Санкт-Петербург",
    79: "Еврейская автономная область",
    80: "Забайкальский край",
    81: "Пермский край",
    82: "Республика Крым",
    83: "Ненецкий автономный округ",
    84: "Красноярский край",
    85: "Иркутская область",
    86: "Ханты-Мансийский автономный округ — Югра",
    87: "Чукотский автономный округ",
    88: "Красноярский край",
    89: "Ямало-Ненецкий автономный округ",
    90: "Московская область",
    91: "Калининградская область",
    92: "Севастополь",
    93: "Краснодарский край",
    94: "Байконур",
    95: "Чеченская Республика",
    96: "Свердловская область",
    97: "Москва",
    98: "Санкт-Петербург",
    99: "Москва",
    102: "Республика Башкортостан",
    111: "Республика Коми",
    113: "Республика Мордовия",
    116: "Республика Татарстан",
    121: "Чувашская Республика",
    122: "Алтайский край",
    123: "Краснодарский край",
    124: "Красноярский край",
    125: "Приморский край",
    126: "Ставропольский край",
    134: "Волгоградская область",
    136: "Воронежская область",
    138: "Иркутская область",
    142: "Кемеровская область — Кузбасс",
    150: "Московская область",
    152: "Нижегородская область",
    154: "Новосибирская область",
    159: "Пермский край",
    161: "Ростовская область",
    163: "Самарская область",
    164: "Саратовская область",
    173: "Ульяновская область",
    174: "Челябинская область",
    177: "Москва",
    178: "Санкт-Петербург",
    186: "Ханты-Мансийский автономный округ — Югра",
    190: "Московская область",
    193: "Краснодарский край",
    196: "Свердловская область",
    197: "Москва",
    199: "Москва",
    716: "Республика Татарстан",
    750: "Московская область",
    761: "Ростовская область",
    763: "Самарская область",
    777: "Москва",
    797: "Москва",
    799: "Москва",
    977: "Москва",
    "02": "Республика Башкортостан",
    "05": "Республика Дагестан",
    "01": "Республика Адыгея",
    "03": "Республика Бурятия",
    "04": "Республика Алтай",
    "06": "Республика Ингушетия",
    "07": "Кабардино-Балкарская Республика",
    "08": "Республика Калмыкия",
    "09": "Карачаево-Черкесская Республика"
}
  , qr = t => t === "V6_C10_FINISH_M1" || t === "V7_GRAY_BLUE_DT_REBALANCE_C1";
function nl(t, s, r) {
    var n;
    if (!t || !r || !s || typeof s != "object")
        return null;
    const a = s
      , i = a.slot ?? "A"
      , c = a.axis;
    if (i !== "A" && i !== "B" || c !== "digits" && c !== "letters")
        return null;
    const d = r.slots[i]
      , l = (n = d == null ? void 0 : d.nextPricesGameRub) == null ? void 0 : n[c];
    return !(d != null && d.regionCode) || !d.pricingPolicyVersion || a.expectedDraftVersion !== d.version || a.expectedPricingPolicyVersion !== d.pricingPolicyVersion || typeof l != "string" || !/^(0|[1-9][0-9]*)$/.test(l) || l === "0" && !qr(d.pricingPolicyVersion) ? null : Object.freeze({
        actor: t,
        slot: i,
        axis: c,
        region: d.regionCode,
        draftId: d.id,
        draftVersion: d.version,
        pricingPolicyVersion: d.pricingPolicyVersion,
        priceGameRub: l
    })
}
const De = ["A", "B"];
function rl({go: t, guard: s, notify: r, requestedAction: a, onActionConsumed: i}) {
    var bn, yn, kn;
    const c = br()
      , d = o.useRef(c);
    o.useLayoutEffect( () => {
        d.current = c,
        c && Nt()
    }
    , [c]);
    const l = he()
      , {r2Game: n, r2GameConfig: m, account: h, principalId: w, api: g, refreshGame: x} = l
      , u = kr()
      , {doubleEnabled: p, setDoubleEnabled: y} = u
      , v = u.status
      , N = u.config
      , [j,k] = o.useState(0)
      , [f,C] = o.useState(null)
      , [E,R] = o.useState("")
      , [P,A] = o.useState("")
      , [I,T] = o.useState(null)
      , [Q,F] = o.useState("")
      , [X,L] = o.useState(["", ""])
      , [_,U] = o.useState(["", ""])
      , [D,$] = o.useState("")
      , [te,O] = o.useState(null)
      , [B,K] = o.useState("Только цифры")
      , [S,M] = o.useState("Очень редкий")
      , [J,W] = o.useState("Остановиться")
      , [z,ce] = o.useState(!1)
      , xe = Q || (u.busy ? "auto" : "")
      , re = Me((w ?? "") + ":" + f, G => g.m9.catalog(G), !!w && (f === "auto-locked" || f === "double-locked"))
      , me = Mr(["capacity", "reserved-places"].includes(f ?? ""))
      , ne = o.useRef(null)
      , ie = o.useRef(!1)
      , Se = o.useRef(!0)
      , ae = w ?? ""
      , Y = l.gameStatus === "ready" ? "ordinary" : l.gameStatus === "error" && !navigator.onLine ? "offline" : l.gameStatus
      , fe = o.useRef({
        actor: ae,
        revision: 0
    })
      , Ce = o.useRef(null)
      , H = ((m == null ? void 0 : m.regionCatalogue) ?? []).map(G => ({
        ...G,
        code: G.regionCode,
        name: zt[G.regionCode] ?? G.regionCode,
        spinPrice: G.componentSpinPriceGameRub
    }))
      , Ne = [Ln(n == null ? void 0 : n.slots.A), Ln(n == null ? void 0 : n.slots.B)]
      , ve = Wi(ae)
      , oe = Zi(ae, Ne, ve.celebrate)
      , Ge = oe.plates
      , V = oe.motion
      , ye = !!((bn = n == null ? void 0 : n.slots.B) != null && bn.digits || (yn = n == null ? void 0 : n.slots.B) != null && yn.letters)
      , je = Ge.map(G => H.find(se => se.code === G.region) ?? {
        code: G.region,
        name: "Выбрать регион",
        spinPrice: null
    })
      , Re = De.map(G => {
        var se;
        return ((se = n == null ? void 0 : n.slots[G]) == null ? void 0 : se.nextPricesGameRub) ?? {
            digits: null,
            letters: null,
            whole: null
        }
    }
    )
      , Ye = De.map( (G, se) => {
        var Ee;
        const le = (Ee = n == null ? void 0 : n.slots[G]) == null ? void 0 : Ee.actions;
        return {
            digits: !!(le != null && le.canSpinDigits) && Re[se].digits !== null,
            letters: !!(le != null && le.canSpinLetters) && Re[se].letters !== null,
            save: ((le == null ? void 0 : le.canSave) ?? !1) || !!n && n.collection.used >= n.collection.capacity,
            sell: (le == null ? void 0 : le.canImmediateSell) ?? !1
        }
    }
    )
      , pe = {
        slots: Ge,
        activeSlot: j,
        doubleEnabled: p && (n == null ? void 0 : n.slots.B) !== null,
        double: (n == null ? void 0 : n.entitlements.double) ?? !1,
        auto: (n == null ? void 0 : n.entitlements.auto) ?? !1,
        editing: ((kn = n == null ? void 0 : n.slots[De[j]]) == null ? void 0 : kn.ownedEditState) !== "none" && !!(n != null && n.slots[De[j]]),
        region: je[j],
        slotRegions: je,
        slotPrices: Re,
        autoStatus: v,
        autoConfig: N,
        allowed: Ye
    }
      , Ae = Ge[j];
    o.useLayoutEffect( () => (Se.current = !0,
    () => {
        Se.current = !1
    }
    ), []),
    o.useLayoutEffect( () => {
        fe.current = {
            actor: ae,
            revision: 0
        },
        ie.current = !1,
        F(""),
        L(["", ""]),
        T(null),
        k(new URLSearchParams(location.search).get("slot") === "B" ? 1 : 0),
        C(null),
        ce(ae ? $e(ae) : !1)
    }
    , [ae]);
    async function Ve(G, se, le=j, Ee=!1) {
        if (d.current || ie.current || !ae)
            return !1;
        const ee = G === "spin" ? nl(ae, se, n) : null;
        if (G === "spin" && !ee)
            return T(null),
            C("global-stale"),
            !1;
        const _e = fe.current
          , gt = _e.revision
          , Xe = Symbol();
        Ce.current = Xe;
        const st = () => Se.current && fe.current === _e
          , ys = () => st() && _e.revision === gt;
        ie.current = !0,
        F(G || "reconcile"),
        L(We => We.map( (rt, ut) => ut === le ? G : rt)),
        $(""),
        T(null),
        U(We => We.map( (rt, ut) => ut === le ? "" : rt));
        const wn = G === "spin" ? [{
            index: le,
            axis: se.axis
        }] : G === "auto" ? se.slots.map(We => ({
            index: De.indexOf(We.slot),
            axis: We.mode === "WHOLE_PLATE" ? "whole" : We.mode === "DIGITS_ONLY" ? "digits" : "letters"
        })) : []
          , Nn = wn.length ? oe.begin(wn) : null;
        let Cn = !1;
        const En = u.reserveManualTurn(ae);
        try {
            if (!await En.ready || !st() || d.current)
                return !1;
            const We = await Ke(ae, G, se, rt => He(g, rt), Ee);
            return !u.isCurrentActor(ae) || (!Ee && G !== "auto" && Tr(G, We),
            await x(),
            Cn = !0,
            !st()) ? !1 : (ce(!1),
            ys() && U(rt => rt.map( (ut, Ct) => Ct === le ? "" : ut)),
            G === "auto" || ys() ? We : !1)
        } catch (We) {
            if (!u.isCurrentActor(ae))
                return !1;
            if (!st())
                return await x().catch( () => {}
                ),
                !1;
            const rt = ge(We)
              , ut = $e(ae)
              , Ct = We instanceof cs ? We.envelope.error.code : null;
            ce(ut),
            Nt();
            let ks = !1;
            try {
                await x(),
                ks = !0
            } catch {}
            return ys() && (ut ? (C(null),
            $("")) : Ct === "INSUFFICIENT_BALANCE" && G === "spin" ? (T(ks ? ee : null),
            C(ks && ee ? "spin-funds" : "global-stale"),
            $("")) : Ct === "COLLECTION_CAPACITY_REACHED" ? (C("capacity"),
            $("")) : Ct === "STALE_VERSION" || Ct === "PRICING_POLICY_CHANGED" ? (C("global-stale"),
            $("")) : G !== "auto" && (f ? $(rt) : U(ra => ra.map( (aa, ia) => ia === le ? rt : aa)))),
            !1
        } finally {
            En.release(),
            Ce.current === Xe && (ie.current = !1,
            st() && (F(""),
            L(["", ""]),
            Nn !== null && oe.finish(Nn, Cn)))
        }
    }
    o.useEffect( () => {
        const G = () => ce(!!ae && $e(ae) && !yt(ae));
        return window.addEventListener("storage", G),
        window.addEventListener("nomerok-intent-change", G),
        window.addEventListener("nomerok-intent-activity", G),
        () => {
            window.removeEventListener("storage", G),
            window.removeEventListener("nomerok-intent-change", G),
            window.removeEventListener("nomerok-intent-activity", G)
        }
    }
    , [ae]);
    function Le() {
        fe.current.revision++,
        T(null),
        f === "rarity" && ne.current ? (C(ne.current),
        ne.current = null) : C(null),
        $("")
    }
    function Pe(G) {
        if (fe.current.revision++,
        $(""),
        G === "rarity" && (ne.current = f),
        G === "timeout") {
            window.dispatchEvent(new Event("nomerok-show-pending"));
            return
        }
        C(G)
    }
    function Ft() {
        we("ng_double_open"),
        s( () => {
            if (!(n != null && n.entitlements.double) && !ye) {
                Pe("double-locked");
                return
            }
            p && Nt(1),
            we(p ? "ng_double_off" : "ng_double_on", {
                mode: p ? "off" : "on"
            }),
            y(G => !G),
            k(0)
        }
        )
    }
    o.useEffect( () => {
        c || !a || !n || (i == null || i(),
        a === "auto" ? Ze(0) : n.entitlements.double && (y(!0),
        k(0)))
    }
    , [a, !!n, c]);
    function Gt(G) {
        var se;
        ((se = n == null ? void 0 : n.slots[De[G]]) == null ? void 0 : se.ownedEditState) === "none" && (we("ng_region_open"),
        k(G),
        Nt(G),
        Pe("region"))
    }
    function Ze(G) {
        var se;
        ((se = n == null ? void 0 : n.slots[De[G]]) == null ? void 0 : se.ownedEditState) === "none" && (we("ng_auto_open"),
        k(G),
        s( () => {
            if (!(n != null && n.entitlements.auto)) {
                Pe("auto-locked");
                return
            }
            const le = N[G];
            K(le.mode),
            M(le.stop),
            W(le.behavior),
            Pe("auto-settings")
        }
        ))
    }
    function ct(G) {
        A(G);
        const se = n == null ? void 0 : n.slots[De[j]];
        se != null && se.actions.regionChangeRequiresDiscard ? Pe("region-confirm") : wt(G)
    }
    async function wt(G) {
        const se = H.find(ee => ee.code === G)
          , le = n == null ? void 0 : n.slots[De[j]];
        if (!se || !le)
            return;
        await Ve("region", {
            slot: De[j],
            subjectId: se.subjectId,
            regionCode: se.code,
            expectedDraftVersion: le.version,
            ...le.actions.regionChangeRequiresDiscard ? {
                discardCurrentResult: !0
            } : {}
        }) && Le()
    }
    async function nt(G, se, le) {
        var gt;
        if (se === "save" && h.mode === "registered" && n && n.collection.used >= n.collection.capacity && !((gt = n.slots[De[G]]) != null && gt.actions.canSave))
            return k(G),
            Nt(G),
            Pe("capacity"),
            !1;
        const Ee = De[G]
          , ee = n == null ? void 0 : n.slots[Ee];
        if (!ee)
            return;
        await Ve(se, {
            slot: Ee,
            expectedDraftVersion: ee.version,
            ...se === "spin" && ee.pricingPolicyVersion ? {
                expectedPricingPolicyVersion: ee.pricingPolicyVersion
            } : {},
            ...le ? {
                axis: le
            } : {}
        }, G) && (se === "save" && r("Номер сохранён"),
        se === "sell" && r("Номер продан"),
        f && Le())
    }
    async function bs(G) {
        return nt(j, "spin", G)
    }
    const dt = o.useRef(nt);
    o.useLayoutEffect( () => {
        dt.current = nt
    }
    );
    async function zr() {
        s( () => {
            dt.current(j, "save")
        }
        , "save")
    }
    function Jr(G) {
        s( () => {
            dt.current(G, "save")
        }
        , "save")
    }
    function Qr(G) {
        k(G),
        Pe("sell")
    }
    async function Zr(G, se={}, le) {
        const Ee = n == null ? void 0 : n.slots[De[j]];
        if (!Ee)
            return;
        await Ve(G, {
            slot: De[j],
            expectedDraftVersion: Ee.version
        }) && (r("Номер продан"),
        le == null || le())
    }
    function fn(G, se=j) {
        k(se),
        O(G),
        Pe("plate-info")
    }
    function Nt(G) {
        u.stop(G)
    }
    o.useEffect( () => {
        n && !n.entitlements.double && !ye && (k(0),
        y(!1))
    }
    , [n == null ? void 0 : n.entitlements.double, ye]);
    function Xr() {
        const G = Hs(n == null ? void 0 : n.slots[De[j]], B);
        if (G) {
            Le(),
            U(se => se.map( (le, Ee) => Ee === j ? sn[G] : le));
            return
        }
        u.start(j, {
            mode: B,
            stop: S,
            behavior: J
        }) ? (U(se => se.map( (le, Ee) => Ee === j ? "" : le)),
        Le()) : $("Сначала дождись результата предыдущего действия.")
    }
    const es = o.useRef(null);
    o.useLayoutEffect( () => {
        var se, le, Ee;
        const G = u.motion;
        !G || G.actor !== ae || (((se = es.current) == null ? void 0 : se.id) !== G.id && !G.done && (es.current = {
            id: G.id,
            visual: oe.begin(G.operations, G.started, !0)
        }),
        G.done && ((le = es.current) == null ? void 0 : le.id) === G.id && oe.finish(es.current.visual, G.successful, (Ee = G.outcomes) == null ? void 0 : Ee.map(ee => ({
            index: De.indexOf(ee.slot),
            tier: ee.resultDisplayTier ? ds[ee.resultDisplayTier] : null,
            version: ee.draftVersion
        }))))
    }
    , [u.motion]);
    const $t = xt();
    function pn(G) {
        var Ee, ee;
        const se = (Ee = n == null ? void 0 : n.slots[De[G]]) == null ? void 0 : Ee.ownedEditPlateId
          , le = se ? (ee = $t.state.plateTargets) == null ? void 0 : ee[se] : null;
        return se ? {
            kind: "plate",
            plateId: se,
            lifeId: (le == null ? void 0 : le.lifeId) ?? "",
            expectedVersion: (le == null ? void 0 : le.version) ?? ""
        } : {
            kind: "slot",
            slot: De[G]
        }
    }
    const xn = De.map( (G, se) => Us($t.state, pn(se)));
    function jn(G) {
        $t.open({
            target: pn(G),
            plate: pe.slots[G],
            label: pe.doubleEnabled ? "Для номера " + (G + 1) : "Для этого номера"
        })
    }
    function gn() {
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Er, {
                showDouble: pe.doubleEnabled,
                doubleEnabled: pe.doubleEnabled,
                double: pe.double,
                onDouble: Ft,
                onTasks: () => s( () => t("tasks-daily"))
            }), e.jsx(Gi, {})]
        })
    }
    function ea() {
        return e.jsxs("div", {
            className: "page create-page double-create",
            children: [gn(), z && e.jsx(de, {
                title: "Проверяем, что получилось…",
                children: e.jsx(b, {
                    quiet: !0,
                    onClick: () => Pe("timeout"),
                    children: "Проверить результат"
                })
            }), e.jsx(sl, {
                state: pe,
                frameIds: xn,
                onFrames: $t.port.enabled ? jn : void 0,
                commandBlocked: !!Q || z,
                manualNotices: _,
                motion: V,
                busy: X,
                onSpin: (G, se) => void nt(G, "spin", se),
                onSave: Jr,
                onSell: Qr,
                onAuto: Ze,
                onFunds: () => t("store-packs"),
                onCapacity: () => Pe("capacity"),
                onRegion: Gt,
                onInfo: G => fn(pe.slots[G], G)
            }), vn()]
        })
    }
    function ta() {
        if (["loading", "skeleton", "offline", "error"].includes(Y))
            return sa();
        if (pe.doubleEnabled)
            return ea();
        const G = V[pe.activeSlot] ?? (Y === "spin-digits" ? "digits" : Y === "spin-letters" ? "letters" : null);
        return e.jsx(Sr, {
            frameId: xn[pe.activeSlot],
            onFrames: $t.port.enabled ? () => jn(pe.activeSlot) : void 0,
            onDouble: Ft,
            s: pe,
            p: Ae,
            v: Y,
            busy: xe,
            pending: G,
            operationPending: z,
            registered: h.mode !== "guest",
            manualNotice: _[pe.activeSlot],
            heading: gn(),
            editingControls: vn(),
            onRegion: () => Gt(pe.activeSlot),
            onAuto: () => Ze(pe.activeSlot),
            onPending: () => Pe("timeout"),
            onInfo: () => fn(Ae),
            onSpin: se => void bs(se),
            onSave: () => void zr(),
            onSell: () => BigInt(Ae.instantSell ?? "0") >= 2400000n ? Pe("sell") : void Zr("sell", {}, () => Le()),
            onFunds: () => t("store-packs"),
            onCapacity: () => Pe("capacity")
        })
    }
    function sa() {
        return e.jsxs("div", {
            className: "page",
            children: [e.jsx("div", {
                className: "page-heading",
                children: e.jsx("h1", {
                    children: Y === "skeleton" ? "Коллекция" : "Создать"
                })
            }), Y === "loading" ? e.jsx(be, {
                title: "Загружаем Номерок",
                description: "Подожди немного.",
                children: e.jsx("span", {
                    className: "spinner"
                })
            }) : Y === "skeleton" ? e.jsxs("div", {
                "aria-busy": "true",
                "aria-label": "Загружаем коллекцию",
                children: [e.jsx("div", {
                    className: "skeleton-line"
                }), e.jsx("div", {
                    className: "skeleton-block"
                }), e.jsx("div", {
                    className: "skeleton-block"
                }), e.jsx("div", {
                    className: "skeleton-block"
                })]
            }) : e.jsx(be, {
                title: Y === "offline" ? "Нет соединения" : "Не удалось загрузить данные",
                description: Y === "offline" ? "Проверь подключение к интернету." : l.gameError ?? "Попробуй обновить экран.",
                icon: "offline",
                children: e.jsx(b, {
                    onClick: l.refreshServerBalance,
                    children: "Повторить"
                })
            })]
        })
    }
    function vn() {
        return De.map( (G, se) => {
            const le = n == null ? void 0 : n.slots[G];
            return !le || le.ownedEditState === "none" ? null : e.jsxs("div", {
                className: "edit-notice",
                children: [e.jsxs("p", {
                    children: [p ? `Номер ${se + 1} · ` : "", le.ownedEditState === "preview" ? "Меняешь номер из коллекции. Пока не крутил — можно выйти и оставить его как есть." : "Ты уже изменил номер. Сохрани новый вариант. Старый вернуть нельзя."]
                }), le.actions.canExitOwnedEdit && e.jsx(b, {
                    quiet: !0,
                    disabled: !!xe || !!V[se],
                    onClick: () => void Ve("exit-edit", {
                        slot: G,
                        expectedDraftVersion: le.version
                    }, se).then(Ee => {
                        Ee && t("collection")
                    }
                    ),
                    children: "Выйти без изменений"
                })]
            }, G)
        }
        )
    }
    function na() {
        var le, Ee;
        if (!f)
            return null;
        let G = ""
          , se = null;
        if (f === "region") {
            G = pe.doubleEnabled ? `Регион · номер ${pe.activeSlot + 1}` : "Выбрать регион";
            const ee = H.filter(_e => _e.code.includes(E) || _e.name.toLowerCase().includes(E.toLowerCase()));
            se = e.jsxs(e.Fragment, {
                children: [e.jsxs("label", {
                    className: "search",
                    children: [e.jsx(ue, {
                        name: "search",
                        size: 18
                    }), e.jsx("input", {
                        "aria-label": "Поиск региона",
                        placeholder: "Код или название региона",
                        value: E,
                        onChange: _e => R(_e.target.value)
                    })]
                }), e.jsx("span", {
                    className: "minor-title",
                    children: E ? `Найдено: ${ee.length}` : "137 регионов"
                }), e.jsx("div", {
                    className: "region-list",
                    children: ee.map(_e => e.jsxs("button", {
                        className: "region-row",
                        onClick: () => ct(_e.code),
                        children: [e.jsx("span", {
                            className: "region-code",
                            children: _e.code
                        }), e.jsxs("span", {
                            children: [e.jsx("b", {
                                children: _e.name
                            }), Vt(_e.spinPrice) && e.jsxs("small", {
                                children: [Vt(_e.spinPrice), " за цифры или буквы"]
                            })]
                        }), pe.region.code === _e.code && e.jsx(ue, {
                            name: "check",
                            size: 20
                        })]
                    }, _e.code))
                }), !ee.length && e.jsx("p", {
                    className: "body-copy",
                    children: "Ничего не найдено. Попробуй другой код или название."
                })]
            })
        } else if (f === "region-confirm")
            G = "Сменить регион?",
            se = e.jsxs(e.Fragment, {
                children: [e.jsxs("p", {
                    children: [pe.doubleEnabled ? `Номер ${pe.activeSlot + 1} будет сброшен, его Авто остановится. Другой номер сохранится.` : "Текущий номер будет сброшен, Авто остановится.", " ", "Потраченные игровые рубли не возвращаются."]
                }), e.jsx(Z, {
                    label: "Новый регион",
                    value: P + " · " + ((le = H.find(ee => ee.code === P)) == null ? void 0 : le.name)
                }), e.jsxs("div", {
                    className: "sheet-actions",
                    children: [e.jsx(b, {
                        secondary: !0,
                        onClick: Le,
                        children: "Остаться"
                    }), e.jsx(b, {
                        onClick: () => {
                            wt(P)
                        }
                        ,
                        children: "Сменить регион"
                    })]
                })]
            });
        else if (f === "auto-locked" || f === "double-locked") {
            const ee = f === "auto-locked"
              , _e = ee ? "auto" : "double"
              , gt = ((Ee = re.data) == null ? void 0 : Ee.products) ?? []
              , Xe = gt.find(st => st.sku === "UPGRADE" && st.canPurchase && st.featuresToGrant.includes(_e)) ?? gt.find(st => st.sku === (ee ? "AUTO" : "DOUBLE"));
            G = ee ? "Авто" : "Double",
            se = e.jsxs(e.Fragment, {
                children: [e.jsx(Fr, {
                    feature: _e
                }), e.jsx("h2", {
                    children: ee ? "Крути до нужного результата" : "Два номера одновременно"
                }), e.jsx("p", {
                    className: "body-copy",
                    children: ee ? "Только цифры, только буквы или весь номер. Выбери редкость для остановки и действие с результатом." : "Два номера одновременно. У каждого своё управление и Авто. Double можно включать и выключать."
                }), e.jsx(Z, {
                    label: "Реальная оплата",
                    value: ze(Xe == null ? void 0 : Xe.amountKopecks),
                    strong: !0
                }), e.jsx(Z, {
                    label: "Игровые рубли после активации",
                    value: Xe ? "+" + q(Xe.totalGameRub) : "—"
                }), e.jsxs("div", {
                    className: "sheet-actions",
                    children: [e.jsxs(b, {
                        disabled: !(Xe != null && Xe.canPurchase),
                        onClick: () => {
                            Xe && (Le(),
                            t("store-buy-" + Xe.sku))
                        }
                        ,
                        children: ["Купить ", ee ? "Авто" : "Double"]
                    }), e.jsx(b, {
                        quiet: !0,
                        onClick: () => {
                            Le(),
                            t("store-features")
                        }
                        ,
                        children: "Посмотреть комплект"
                    })]
                }), re.error && e.jsx("p", {
                    className: "field-error",
                    role: "alert",
                    children: ge(re.error, {
                        phase: "read"
                    })
                })]
            })
        } else if (f === "auto-settings")
            G = pe.doubleEnabled ? `Авто · номер ${pe.activeSlot + 1}` : "Настройки Авто",
            se = e.jsxs(e.Fragment, {
                children: [e.jsxs("fieldset", {
                    className: "auto-settings-fields",
                    disabled: u.settingsLocked[j],
                    children: [e.jsx("legend", {
                        className: "sr-only",
                        children: "Настройки Авто"
                    }), e.jsxs("div", {
                        className: "stack auto-mode-picker",
                        children: [e.jsx("h3", {
                            children: "Что крутить"
                        }), e.jsx(sr, {
                            items: ["Цифры", "Буквы", "Весь номер"],
                            value: tl(B),
                            onChange: ee => K(ee === "Цифры" ? "Только цифры" : ee === "Буквы" ? "Только буквы" : "Весь номер"),
                            label: "Режим Авто"
                        })]
                    }), e.jsxs("div", {
                        className: "field",
                        children: [e.jsx("label", {
                            htmlFor: "auto-stop",
                            children: "Крутить до"
                        }), e.jsx("select", {
                            id: "auto-stop",
                            value: S,
                            onChange: ee => M(ee.target.value),
                            children: Object.values(Fe).slice(1).map(ee => e.jsx("option", {
                                value: ee.label,
                                children: ee.label.replace(/ый$/, "ого").replace(/ий$/, "ого")
                            }, ee.label))
                        })]
                    }), e.jsxs("div", {
                        children: [e.jsx("h3", {
                            children: "Что делать с номером"
                        }), e.jsx("div", {
                            className: "choice-list",
                            role: "group",
                            "aria-label": "Что Авто сделает с номером",
                            children: ["Остановиться", "Сохранить", "Продать"].map(ee => e.jsxs("button", {
                                className: J === ee ? "selected" : "",
                                "aria-pressed": J === ee,
                                onClick: () => W(ee),
                                children: [e.jsx("span", {
                                    children: ee
                                }), J === ee && e.jsx(ue, {
                                    name: "check",
                                    size: 20
                                })]
                            }, ee))
                        })]
                    })]
                }), e.jsxs("p", {
                    className: "form-note",
                    children: [B === "Весь номер" ? "Авто крутит цифры и буквы по очереди." : "Крутишь цифры — буквы остаются. Крутишь буквы — цифры остаются.", " ", "После обновления страницы Авто остановится."]
                }), u.settingsLocked[j] && e.jsx("p", {
                    className: "form-note",
                    role: "status",
                    children: pe.autoStatus[pe.activeSlot] === "running" ? "Чтобы изменить настройки, останови Авто." : "Ждём ответ по последнему действию Авто. После этого можно менять настройки."
                }), pe.autoStatus[pe.activeSlot] === "running" && e.jsx(b, {
                    secondary: !0,
                    onClick: () => {
                        Nt(j)
                    }
                    ,
                    children: "Остановить авто"
                }), pe.autoStatus[pe.activeSlot] !== "running" && e.jsx(b, {
                    disabled: !!Q || u.settingsLocked[j] || z,
                    onClick: () => void Xr(),
                    children: "Запустить авто"
                })]
            });
        else if (f === "sell")
            G = pe.doubleEnabled ? `Продать номер ${j + 1}?` : "Продать номер сейчас?",
            se = e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "detail-plate",
                    children: [e.jsx(_t, {
                        p: Ae
                    }), e.jsx(Ue, {
                        p: Ae
                    })]
                }), e.jsx(Z, {
                    label: "Ты получишь",
                    value: q(Ae.instantSell),
                    strong: !0
                }), e.jsx("p", {
                    className: "body-copy",
                    children: pe.doubleEnabled ? "Этот номер освободит своё место на экране." : "Номер не попадёт в коллекцию. После продажи это место на экране освободится."
                }), e.jsxs("div", {
                    className: "sheet-actions",
                    children: [e.jsxs(b, {
                        loading: xe === "sell",
                        disabled: !Ye[j].sell,
                        onClick: () => void nt(j, "sell"),
                        children: ["Продать игре за ", q(Ae.instantSell)]
                    }), e.jsx(b, {
                        secondary: !0,
                        onClick: Le,
                        children: "Отмена"
                    })]
                })]
            });
        else if (f === "plate-info") {
            const ee = te ?? Ae;
            G = "О номере",
            se = e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "detail-plate",
                    children: [e.jsx(_t, {
                        p: ee
                    }), e.jsx(Ue, {
                        p: ee
                    })]
                }), e.jsxs("div", {
                    children: [e.jsx(Wt, {
                        p: ee
                    }), e.jsx(Z, {
                        label: "Регион",
                        value: ee.region + " · " + (zt[ee.region] ?? "")
                    }), e.jsx(Z, {
                        label: "Серия",
                        value: ee.series ?? "Без серии"
                    }), e.jsx(Z, {
                        label: "Награда за сохранение",
                        value: BigInt(ee.saveReward) > 0n ? "+" + q(ee.saveReward) : "Без награды"
                    }), e.jsx(Z, {
                        label: "Продажа сейчас",
                        value: q(ee.instantSell)
                    })]
                }), e.jsx(Xt, {
                    p: ee
                }), e.jsx(an, {
                    p: ee
                }), e.jsx(b, {
                    secondary: !0,
                    onClick: () => Pe("rarity"),
                    children: "Уровни редкости"
                })]
            })
        } else if (f === "rarity")
            G = "Редкость номера",
            se = e.jsx(Gr, {
                onClose: Le
            });
        else if (f === "capacity") {
            const ee = me.data;
            G = "Коллекция заполнена",
            se = e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "detail-price",
                    children: [e.jsx("span", {
                        children: "Занято мест"
                    }), e.jsxs("b", {
                        children: [(ee == null ? void 0 : ee.owned) ?? "—", " / ", (ee == null ? void 0 : ee.capacity) ?? (n == null ? void 0 : n.collection.capacity) ?? "—"]
                    })]
                }), !!(ee != null && ee.reserved) && e.jsxs(de, {
                    title: `${$r(ee.reserved)} зарезервировано`,
                    children: [e.jsx("p", {
                        children: "Эти места заняты под номера с аукционов, где твоя ставка самая высокая."
                    }), e.jsx(b, {
                        quiet: !0,
                        onClick: () => Pe("reserved-places"),
                        children: "Почему места заняты"
                    })]
                }), e.jsx("p", {
                    className: "body-copy",
                    children: "Продай ненужный номер или добавь места в коллекцию. Авто остановлено."
                }), e.jsxs("div", {
                    className: "sheet-actions",
                    children: [e.jsxs(b, {
                        onClick: () => Pe("expand"),
                        children: ["Расширить +", (m == null ? void 0 : m.collection.expansionSlots) ?? "—", " за ", q((n == null ? void 0 : n.collection.nextExpansionPriceGameRub) ?? (m == null ? void 0 : m.collection.expansionPriceGameRub))]
                    }), e.jsx(b, {
                        secondary: !0,
                        onClick: () => {
                            Le(),
                            t("collection")
                        }
                        ,
                        children: "Открыть коллекцию"
                    })]
                }), me.error && e.jsx("p", {
                    className: "field-error",
                    role: "alert",
                    children: ge(me.error, {
                        phase: "read",
                        action: "collection"
                    })
                })]
            })
        } else
            f === "reserved-places" ? (G = "Места для выигрышей",
            se = me.data ? e.jsx(Br, {
                ...me.data,
                onBids: () => {
                    Le(),
                    t("auction-my-bids")
                }
            }) : null) : f === "expand" ? (G = "Расширить коллекцию?",
            se = e.jsx(Dr, {
                busy: xe === "expand",
                onClose: Le,
                onExpand: () => void Ve("expand", {}).then(ee => {
                    ee && (Le(),
                    t("collection"),
                    r("Коллекция расширена · +" + (m == null ? void 0 : m.collection.expansionSlots) + " мест"))
                }
                )
            })) : f === "spin-funds" ? (G = "Недостаточно игровых рублей",
            se = e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    children: [e.jsx(Z, {
                        label: "Цена прокрутки",
                        value: q((I == null ? void 0 : I.actor) === ae ? I.priceGameRub : null)
                    }), e.jsx(Z, {
                        label: "Текущий баланс",
                        value: q(n == null ? void 0 : n.balance.amount)
                    })]
                }), e.jsxs("div", {
                    className: "sheet-actions",
                    children: [e.jsx(b, {
                        onClick: () => {
                            Le(),
                            t("store-packs")
                        }
                        ,
                        children: "Пополнить баланс"
                    }), e.jsx(b, {
                        secondary: !0,
                        onClick: () => Pe("region"),
                        children: "Выбрать другой регион"
                    })]
                })]
            })) : f === "global-stale" ? (G = "Данные изменились",
            se = e.jsxs(e.Fragment, {
                children: [e.jsx("p", {
                    className: "body-copy",
                    children: "Сначала обнови экран и проверь цену ещё раз."
                }), e.jsxs("div", {
                    className: "sheet-actions",
                    children: [e.jsx(b, {
                        onClick: () => void x().then(Le),
                        children: "Обновить"
                    }), e.jsx(b, {
                        secondary: !0,
                        onClick: Le,
                        children: "Отмена"
                    })]
                })]
            })) : f === "timeout" && (G = "Проверяем, что получилось…",
            se = e.jsxs(e.Fragment, {
                children: [e.jsx("span", {
                    className: "spinner"
                }), e.jsx("p", {
                    className: "body-copy",
                    children: "Ответ задержался. Действие могло уже выполниться. Проверь результат, прежде чем повторять."
                }), e.jsx(b, {
                    loading: !!xe,
                    onClick: () => void Ve("", {}, j, !0).then(ee => {
                        ee && Le()
                    }
                    ),
                    children: "Проверить результат"
                }), e.jsx(b, {
                    secondary: !0,
                    onClick: Le,
                    children: "Вернуться к экрану"
                })]
            }));
        return e.jsxs(ke, {
            title: G,
            onClose: Le,
            children: [se, D && e.jsx("p", {
                className: "field-error",
                role: "alert",
                children: D
            })]
        })
    }
    return e.jsxs(e.Fragment, {
        children: [ta(), na(), e.jsx(zi, {
            event: ve.event
        })]
    })
}
function ln(t, s=!0) {
    return t ? pt(t) : null
}
function Ur({item: t, onClick: s, status: r}) {
    const a = xt();
    return e.jsx("div", {
        children: e.jsx(us, {
            p: pt(t),
            frameId: a.state.plates[t.plateId],
            onClick: s,
            status: r
        })
    })
}
function on({item: t, onChanged: s, compact: r=!1}) {
    const [a,i] = o.useState(!1)
      , c = Tt();
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("button", {
            className: r ? "collector-star" : "btn secondary",
            disabled: !!t.operationLock || c.busy,
            "aria-label": t.favorite ? "Снять защиту номера" : "Добавить номер в избранное и защитить",
            "aria-pressed": t.favorite ?? !1,
            onClick: () => i(!0),
            children: [e.jsx("span", {
                "aria-hidden": "true",
                children: t.favorite ? "★" : "☆"
            }), !r && (t.favorite ? "В избранном · снять защиту" : "В избранное · защитить")]
        }), a && e.jsxs(ke, {
            closeDisabled: c.busy,
            title: t.favorite ? "Снять защиту?" : "Защитить номер?",
            onClose: () => {
                c.busy || i(!1)
            }
            ,
            children: [e.jsx("p", {
                children: Dt(pt(t))
            }), e.jsx("p", {
                children: t.favorite ? "Номер снова можно будет продать, передать или докрутить. Старые предложения останутся закрытыми." : "Пока номер в избранном, продать или докрутить его нельзя. Рынок, аукцион и сделки с игроками тоже недоступны. Предложения без ответа закроются."
            }), e.jsx(b, {
                loading: c.busy,
                onClick: () => void c.run("collector-favorite", {
                    plateId: t.plateId,
                    lifeId: t.lifeId,
                    expectedVersion: t.version,
                    favorite: !t.favorite,
                    closePendingOffers: !t.favorite
                }, () => {
                    i(!1),
                    s()
                }
                ),
                children: t.favorite ? "Снять защиту" : "Добавить и защитить"
            }), e.jsx(b, {
                secondary: !0,
                disabled: c.busy,
                onClick: () => i(!1),
                children: "Отмена"
            }), c.error && e.jsx("p", {
                className: "field-error",
                role: "alert",
                children: c.error
            })]
        })]
    })
}
function al({items: t, filterKey: s, onOpen: r, onChanged: a}) {
    const [i,c] = o.useState(!1)
      , [d,l] = o.useState([])
      , [n,m] = o.useState(null)
      , [h,w] = o.useState(!1)
      , [g,x] = o.useState("")
      , u = Tt()
      , p = t.filter(k => !k.favorite && !k.operationLock && k.actions.systemLiquidationGameRub !== null && k.lifeId)
      , y = t.filter(k => d.includes(k.plateId))
      , v = y.length === d.length && y.every(k => p.some(f => f.plateId === k.plateId))
      , N = y.reduce( (k, f) => k + BigInt(f.actions.systemLiquidationGameRub ?? "0"), 0n)
      , j = () => {
        u.busy || (m(null),
        w(!1))
    }
    ;
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "collector-selection-heading",
            children: [e.jsx(b, {
                quiet: !0,
                onClick: () => {
                    c(!i),
                    l([]),
                    u.clearError()
                }
                ,
                children: i ? "Отменить выбор" : "Выбрать несколько"
            }), i && e.jsx(b, {
                quiet: !0,
                disabled: !p.length,
                onClick: () => l(p.slice(0, 50).map(k => k.plateId)),
                children: p.length > 50 ? "Выбрать первые 50 доступных" : "Выбрать доступные в списке"
            })]
        }), e.jsx("div", {
            className: "asset-list",
            children: t.map(k => e.jsxs("div", {
                className: "collector-collection-item",
                children: [e.jsx(Ur, {
                    item: k,
                    onClick: () => r(k),
                    status: k.favorite ? "В избранном · защищён" : k.operationLock === "marketplace" ? "В продаже" : k.operationLock ? pt(k).lockedReason : void 0
                }), e.jsxs("div", {
                    className: "collector-card-controls",
                    children: [i && e.jsxs("label", {
                        children: [e.jsx("input", {
                            type: "checkbox",
                            "aria-label": `Выбрать ${Dt(pt(k))}`,
                            checked: d.includes(k.plateId),
                            disabled: !p.some(f => f.plateId === k.plateId) && !d.includes(k.plateId) || d.length >= 50 && !d.includes(k.plateId),
                            onChange: f => l(C => f.target.checked ? [...C, k.plateId] : C.filter(E => E !== k.plateId))
                        }), e.jsx("span", {
                            children: "Выбрать"
                        })]
                    }), e.jsx(on, {
                        item: k,
                        compact: !0,
                        onChanged: a
                    })]
                })]
            }, k.plateId))
        }), i && e.jsxs("div", {
            className: "collector-selection-bar",
            role: "region",
            "aria-label": "Продажа выбранных",
            children: [e.jsx(Z, {
                label: `Выбрано ${d.length} из 50`,
                value: q(N),
                strong: !0
            }), !v && e.jsx("p", {
                role: "alert",
                children: "Некоторые номера изменились. Проверь выбор."
            }), e.jsx(b, {
                loading: u.busy,
                disabled: !d.length || !v,
                onClick: () => void u.run("bulk-quote", {
                    items: y.map(k => ({
                        plateId: k.plateId,
                        lifeId: k.lifeId,
                        expectedVersion: k.version
                    }))
                }, k => {
                    m(k),
                    w(!1)
                }
                ),
                children: "Узнать сумму продажи"
            }), e.jsx(b, {
                quiet: !0,
                disabled: !d.length,
                onClick: () => l([]),
                children: "Снять выбор"
            })]
        }), g && e.jsx("p", {
            role: "status",
            children: g
        }), u.error && !n && e.jsx("p", {
            role: "alert",
            className: "field-error",
            children: u.error
        }), n && e.jsxs(ke, {
            closeDisabled: u.busy,
            title: `Продать игре ${hs(n.items.length, ["номер", "номера", "номеров"])}?`,
            onClose: j,
            children: [e.jsx(Z, {
                label: "Ты получишь",
                value: q(n.totalGameRub),
                strong: !0
            }), e.jsx(rn, {
                expiresAt: n.expiresAt,
                onExpired: () => w(!0)
            }), e.jsx("ul", {
                className: "collector-quote-items",
                children: n.items.map(k => e.jsxs("li", {
                    children: [e.jsx("span", {
                        children: y.find(f => f.plateId === k.plateId) ? Dt(pt(y.find(f => f.plateId === k.plateId))) : "Номер изменился"
                    }), e.jsx("b", {
                        children: q(k.payoutGameRub)
                    })]
                }, k.plateId))
            }), e.jsx("p", {
                className: "body-copy",
                children: "Продадим все выбранные номера сразу. Если один из них изменится, ничего не продастся."
            }), h ? e.jsx(b, {
                onClick: j,
                children: "Вернуться к выбору"
            }) : e.jsxs(b, {
                loading: u.busy,
                onClick: () => void u.run("bulk-sell", {
                    quoteId: n.quoteId,
                    digest: n.digest
                }, k => {
                    m(null),
                    l([]),
                    c(!1),
                    x(`Продано: ${hs(k.plateIds.length, ["номер", "номера", "номеров"])} · +${q(k.payoutGameRub)}`),
                    a()
                }
                ),
                children: ["Продать все за ", q(n.totalGameRub)]
            }), e.jsx(b, {
                secondary: !0,
                disabled: u.busy,
                onClick: j,
                children: "Отмена"
            }), u.error && e.jsx("p", {
                role: "alert",
                className: "field-error",
                children: u.error
            })]
        })]
    })
}
function cn({p: t, small: s=!1}) {
    var a, i;
    const {state: r} = xt();
    return e.jsx(Qe, {
        p: t,
        small: s,
        frameId: t.lifeId === ((i = (a = r.plateTargets) == null ? void 0 : a[t.id]) == null ? void 0 : i.lifeId) ? r.plates[t.id] : t.frameId
    })
}
function dn({item: t, plate: s, beforeOpen: r, returnTo: a}) {
    const i = xt();
    if (!i.port.enabled)
        return null;
    const c = t.operationLock === "marketplace" ? "Сначала сними номер с продажи" : t.operationLock ? "Сначала дождись завершения действия с номером" : null;
    return e.jsxs("div", {
        className: "frame-collection-action",
        children: [e.jsx(b, {
            secondary: !0,
            "data-frame-action": t.plateId,
            disabled: !!c,
            onClick: d => {
                var l, n, m, h, w, g;
                d.currentTarget.focus(),
                r == null || r(),
                i.open({
                    target: {
                        kind: "plate",
                        plateId: t.plateId,
                        lifeId: t.lifeId ?? ((n = (l = i.state.plateTargets) == null ? void 0 : l[t.plateId]) == null ? void 0 : n.lifeId) ?? "",
                        expectedVersion: ((h = (m = i.state.plateTargets) == null ? void 0 : m[t.plateId]) == null ? void 0 : h.lifeId) === t.lifeId ? ((g = (w = i.state.plateTargets) == null ? void 0 : w[t.plateId]) == null ? void 0 : g.version) ?? t.version : t.version
                    },
                    plate: s,
                    label: "Для номера из коллекции",
                    returnTo: a
                })
            }
            ,
            children: i.state.plates[t.plateId] ? "Сменить рамку" : "Выбрать рамку"
        }), c && e.jsx("p", {
            children: c
        }), i.state.plates[t.plateId] && e.jsx("p", {
            children: "Рамка останется у тебя"
        })]
    })
}
function Vr({items: t, value: s, onChange: r, label: a}) {
    const i = o.useRef(null)
      , [c,d] = o.useState({
        left: !1,
        right: !1
    });
    return o.useLayoutEffect( () => {
        const l = i.current;
        if (!l)
            return;
        const n = l.querySelector('[aria-pressed="true"]');
        if (n) {
            const w = n.getBoundingClientRect()
              , g = l.getBoundingClientRect();
            w.right > g.right - 20 ? l.scrollLeft += w.right - g.right + 20 : w.left < g.left + 20 && (l.scrollLeft += w.left - g.left - 20)
        }
        const m = () => {
            const w = l.scrollLeft > 2
              , g = l.scrollWidth - l.clientWidth - l.scrollLeft > 2;
            d(x => x.left === w && x.right === g ? x : {
                left: w,
                right: g
            })
        }
        ;
        m();
        const h = new ResizeObserver(m);
        h.observe(l);
        for (const w of l.children)
            h.observe(w);
        return l.addEventListener("scroll", m, {
            passive: !0
        }),
        () => {
            h.disconnect(),
            l.removeEventListener("scroll", m)
        }
    }
    , [s]),
    e.jsxs("div", {
        className: "filter-rail",
        children: [e.jsx("div", {
            ref: i,
            className: "filter-strip",
            role: "group",
            "aria-label": a,
            "aria-description": c.left || c.right ? "Прокрути фильтры влево или вправо, чтобы увидеть остальные." : void 0,
            children: t.map(l => e.jsx("button", {
                type: "button",
                className: l === s ? "active" : "",
                "aria-pressed": l === s,
                onClick: () => r(l),
                children: l
            }, l))
        }), c.left && e.jsx("span", {
            className: "filter-overflow-cue cue-left",
            "aria-hidden": "true",
            children: "‹"
        }), c.right && e.jsx("span", {
            className: "filter-overflow-cue cue-right",
            "aria-hidden": "true",
            children: "›"
        })]
    })
}
function jt({label: t, compact: s=!1}) {
    return e.jsx("div", {
        className: `loading-content ${s ? "compact" : ""}`,
        role: "status",
        "aria-label": t,
        "aria-busy": "true",
        children: e.jsx("div", {
            className: "loading-content-shapes",
            "aria-hidden": "true",
            children: [0, 1, 2].map(r => e.jsxs("div", {
                className: "loading-content-row",
                children: [e.jsx("span", {}), e.jsx("i", {})]
            }, r))
        })
    })
}
function il({item: t, plate: s, owner: r, onBack: a, onTrade: i, onSystemSell: c, onFrameOpen: d, onFrameReturn: l}) {
    var k, f, C, E;
    const {api: n, principalId: m, refreshGame: h} = he()
      , [w,g] = o.useState(!1)
      , [x,u] = o.useState(!1)
      , [p,y] = o.useState("")
      , v = o.useRef(!1)
      , N = Me(JSON.stringify([m, t.plateId, t.version]), async R => {
        const P = {
            query: t.letters[0] + t.digits + t.letters.slice(1),
            regionCode: t.regionCode,
            scope: "selling",
            limit: "50"
        };
        if (t.operationLock === "marketplace") {
            const T = await n.m9.marketplace(P, R)
              , Q = T.items.filter(F => F.own && F.plate.id === t.plateId && F.status === "active");
            return !T.nextCursor && Q.length === 1 ? {
                market: Q[0],
                auction: null
            } : null
        }
        const A = await n.m9.auctions(P, R)
          , I = A.items.filter(T => T.relationship === "seller" && T.plate.id === t.plateId && ["ACTIVE_NO_BID", "ACTIVE_WITH_BID", "SETTLING"].includes(T.state));
        return !A.nextCursor && I.length === 1 ? {
            market: null,
            auction: I[0]
        } : null
    }
    , !!t.operationLock && !!m);
    async function j() {
        var P;
        const R = (P = N.data) == null ? void 0 : P.market;
        if (!(v.current || !R || !m)) {
            v.current = !0,
            u(!0),
            y("");
            try {
                await Ke(m, "market-delist", {
                    id: R.id,
                    request: {
                        expectedListingVersion: R.version
                    }
                }, A => He(n, A)),
                await h(),
                a()
            } catch (A) {
                y(ge(A)),
                $e(m) && g(!1)
            } finally {
                v.current = !1,
                u(!1)
            }
        }
    }
    return e.jsxs("div", {
        className: "page pl-gift",
        children: [e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "Номер в коллекции"
            }), e.jsx(b, {
                quiet: !0,
                onClick: a,
                children: "К коллекции"
            })]
        }), e.jsxs("div", {
            className: "detail-plate",
            children: [e.jsx(cn, {
                p: s
            }), e.jsx(Ue, {
                p: s
            })]
        }), e.jsx(dn, {
            item: t,
            plate: s,
            beforeOpen: d,
            returnTo: l
        }), e.jsx(Z, {
            label: "Владелец",
            value: r
        }), e.jsx(Wt, {
            p: s
        }), e.jsx(Z, {
            label: "Состояние",
            value: t.operationLock === "marketplace" ? "В продаже" : (k = N.data) != null && k.auction ? "На аукционе" : t.operationLock ? "Недоступен" : "В коллекции"
        }), e.jsx(on, {
            item: t,
            onChanged: a
        }), e.jsx(Xt, {
            p: s
        }), e.jsx(an, {
            p: s,
            owned: !0
        }), e.jsx(de, {
            title: "Этот номер нельзя докручивать",
            children: "Ограничение сохраняется и после продажи другому игроку. Биржа и аукцион доступны."
        }), e.jsxs("details", {
            className: "pl-details",
            children: [e.jsx("summary", {
                children: "Условия этого номера"
            }), e.jsxs("p", {
                className: "form-note",
                children: ["Этот номер не даёт награду за находку и не засчитывается в задания", Xs, " и топы коллекции и редкости."]
            })]
        }), e.jsx(b, {
            secondary: !0,
            disabled: !0,
            children: "Докрутить номер"
        }), !t.operationLock && e.jsxs(e.Fragment, {
            children: [e.jsx(b, {
                disabled: !t.actions.marketplaceList,
                onClick: () => i("market"),
                children: "Выставить на продажу"
            }), e.jsx(b, {
                secondary: !0,
                disabled: !!t.operationLock || t.favorite,
                onClick: () => i("auction"),
                children: "Выставить на аукцион"
            }), e.jsxs(b, {
                secondary: !0,
                disabled: t.actions.systemLiquidationGameRub === null,
                onClick: c,
                children: ["Продать игре · ", q(t.actions.systemLiquidationGameRub)]
            })]
        }), t.operationLock === "marketplace" && e.jsx(b, {
            secondary: !0,
            disabled: !((f = N.data) != null && f.market) || N.busy,
            onClick: () => {
                y(""),
                g(!0)
            }
            ,
            children: "Снять с продажи"
        }), ((C = N.data) == null ? void 0 : C.auction) && e.jsx(de, {
            title: "Номер участвует в аукционе",
            children: "Пока идёт аукцион, другие действия с номером недоступны. Если уже есть ставки, отменить аукцион нельзя."
        }), w && e.jsxs(ke, {
            title: "Снять номер с продажи",
            onClose: () => {
                x || g(!1)
            }
            ,
            children: [e.jsx(Z, {
                label: "Номер",
                value: t.plateId
            }), e.jsx("p", {
                children: "Номер останется у тебя. Плата за объявление не вернётся. Менять цифры и буквы по-прежнему нельзя."
            }), p && e.jsx(de, {
                title: p,
                kind: "error"
            }), e.jsx(b, {
                loading: x,
                disabled: !((E = N.data) != null && E.market),
                onClick: () => void j(),
                children: "Подтвердить"
            }), e.jsx(b, {
                secondary: !0,
                disabled: x,
                onClick: () => g(!1),
                children: "Отмена"
            })]
        })]
    })
}
function ll({item: t, onClose: s, onChanged: r, go: a}) {
    const {api: i, principalId: c, refreshGame: d} = he()
      , l = ln(t)
      , [n,m] = o.useState("detail")
      , [h,w] = o.useState(!1)
      , [g,x] = o.useState("")
      , u = o.useRef(!1)
      , p = Me(JSON.stringify([c, t.plateId, t.version]), async f => {
        const C = t.letters[0] + t.digits + t.letters.slice(1)
          , E = {
            query: C,
            regionCode: t.regionCode,
            scope: "selling",
            limit: "50"
        };
        if (t.operationLock === "marketplace") {
            const A = await i.m9.marketplace(E, f)
              , I = A.items.filter(T => T.plate.id === t.plateId && T.own && T.status === "active");
            return A.nextCursor || I.length !== 1 ? null : {
                market: I[0],
                auction: null
            }
        }
        const R = await i.m9.auctions(E, f)
          , P = R.items.filter(A => A.plate.id === t.plateId && A.relationship === "seller" && ["ACTIVE_NO_BID", "ACTIVE_WITH_BID", "SETTLING"].includes(A.state));
        return R.nextCursor || P.length !== 1 ? null : {
            market: null,
            auction: P[0]
        }
    }
    , !!c)
      , y = p.data
      , v = y == null ? void 0 : y.market
      , N = y == null ? void 0 : y.auction;
    async function j() {
        if (!(u.current || !v || !c)) {
            u.current = !0,
            w(!0),
            x("");
            try {
                await Ke(c, "market-delist", {
                    id: v.id,
                    request: {
                        expectedListingVersion: v.version
                    }
                }, f => He(i, f)),
                await d(),
                r(),
                s()
            } catch (f) {
                x(ge(f)),
                $e(c) && s()
            } finally {
                u.current = !1,
                w(!1)
            }
        }
    }
    const k = n === "remove" ? "Снять номер с продажи?" : n === "listing" ? "Объявление о продаже" : t.operationLock === "marketplace" ? "Номер выставлен на продажу" : N ? "Аукцион идёт" : "Номер в коллекции";
    return e.jsxs(ke, {
        title: k,
        onClose: () => {
            h || s()
        }
        ,
        children: [l && e.jsxs("div", {
            className: "detail-plate",
            children: [e.jsx(cn, {
                p: l
            }), e.jsx(Ue, {
                p: l
            })]
        }), l && e.jsx(kt, {
            p: l
        }), " ", l && e.jsx(dn, {
            item: t,
            plate: l
        }), " ", n === "remove" && v ? e.jsxs(e.Fragment, {
            children: [e.jsx("p", {
                className: "body-copy",
                children: "Номер снова будет доступен в коллекции. Плата за объявление не вернётся."
            }), e.jsxs("div", {
                className: "sheet-actions",
                children: [e.jsx(b, {
                    loading: h,
                    onClick: () => void j(),
                    children: "Снять с продажи"
                }), e.jsx(b, {
                    secondary: !0,
                    disabled: h,
                    onClick: () => m("listing"),
                    children: "Отмена"
                })]
            })]
        }) : y ? e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                children: [e.jsx(Z, {
                    label: v ? "Цена продажи" : (N == null ? void 0 : N.bidCount) !== "0" ? "Текущая ставка" : "Стартовая цена",
                    value: q((v == null ? void 0 : v.askGameRub) ?? (N == null ? void 0 : N.currentBidGameRub) ?? (N == null ? void 0 : N.startGameRub)),
                    strong: !0
                }), N && e.jsx(Z, {
                    label: "Ставок",
                    value: N.bidCount
                }), e.jsx(Z, {
                    label: "До окончания",
                    value: v ? Kt(v.expiresAt) : N ? Kt(N.endAt) : "—"
                }), e.jsx(Z, {
                    label: "Статус",
                    value: v ? "В продаже" : "На аукционе"
                })]
            }), v ? e.jsxs(e.Fragment, {
                children: [n !== "listing" && e.jsx(b, {
                    onClick: () => m("listing"),
                    children: "Открыть объявление"
                }), e.jsx(b, {
                    secondary: !0,
                    onClick: () => m("remove"),
                    children: "Снять с продажи"
                }), e.jsx("p", {
                    className: "body-copy",
                    children: "Сначала сними номер с продажи."
                })]
            }) : N ? e.jsxs(e.Fragment, {
                children: [e.jsx(b, {
                    onClick: () => {
                        s(),
                        a("auction-target-" + N.id)
                    }
                    ,
                    children: "Открыть аукцион"
                }), N.bidCount === "0" ? e.jsx(b, {
                    secondary: !0,
                    disabled: !N.canCancel,
                    onClick: () => {
                        s(),
                        a("auction-cancel-target-" + N.id)
                    }
                    ,
                    children: "Отменить аукцион"
                }) : e.jsx("p", {
                    className: "body-copy",
                    children: "Есть ставка. Отменить аукцион больше нельзя."
                }), e.jsx("p", {
                    className: "form-note",
                    children: "Другие действия с номером недоступны, пока идёт аукцион."
                })]
            }) : null, e.jsxs("div", {
                className: "stack",
                children: [e.jsx(b, {
                    secondary: !0,
                    disabled: !0,
                    children: "Докрутить номер"
                }), e.jsx(b, {
                    secondary: !0,
                    disabled: !0,
                    children: v ? "Выставить на аукцион" : "Выставить на продажу"
                })]
            })]
        }) : e.jsxs(de, {
            title: p.busy ? "Загружаем данные" : "Статус номера изменился",
            children: [!!p.error && e.jsx("p", {
                children: ge(p.error, {
                    phase: "read"
                })
            }), e.jsx(b, {
                quiet: !0,
                loading: p.busy,
                onClick: p.reload,
                children: "Обновить"
            })]
        }), g && e.jsx("p", {
            className: "field-error",
            role: "alert",
            children: g
        })]
    })
}
function ol({value: t, onChange: s}) {
    const [r,a] = o.useState("")
      , {r2GameConfig: i} = he()
      , d = ((i == null ? void 0 : i.regionCatalogue) ?? []).map(l => ({
        code: l.regionCode,
        name: zt[l.regionCode] ?? l.regionCode
    })).filter(l => `${l.code} ${l.name}`.toLocaleLowerCase("ru-RU").includes(r.trim().toLocaleLowerCase("ru-RU")));
    return e.jsxs("fieldset", {
        className: "auction-region-field region-filter",
        children: [e.jsx("legend", {
            children: "Регион"
        }), e.jsxs("label", {
            className: "search",
            children: [e.jsx(ue, {
                name: "search",
                size: 18
            }), e.jsx("input", {
                type: "search",
                "aria-label": "Найти регион в фильтрах",
                placeholder: "Код или название региона",
                value: r,
                onChange: l => a(l.target.value)
            })]
        }), e.jsxs("div", {
            className: "auction-region-options",
            children: [!r.trim() && e.jsxs("label", {
                children: [e.jsx("input", {
                    type: "radio",
                    name: "filter-region",
                    value: "Все регионы",
                    checked: t === "Все регионы",
                    onChange: () => s("Все регионы")
                }), e.jsx("span", {
                    children: "Все регионы"
                })]
            }), d.map(l => e.jsxs("label", {
                children: [e.jsx("input", {
                    type: "radio",
                    name: "filter-region",
                    value: l.code,
                    checked: t === l.code,
                    onChange: () => s(l.code)
                }), e.jsxs("span", {
                    children: [l.code, " · ", l.name]
                })]
            }, l.code))]
        }), !d.length && e.jsx("p", {
            className: "form-note",
            role: "status",
            children: "Регион не найден. Попробуй другой код или название."
        })]
    })
}
function Kr({value: t, onChange: s, market: r, onDone: a}) {
    const i = (c, d) => s({
        ...t,
        [c]: d
    });
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "field",
            children: [e.jsx("label", {
                htmlFor: "filter-rarity",
                children: "Редкость"
            }), e.jsx("select", {
                id: "filter-rarity",
                value: t.rarity,
                onChange: c => i("rarity", c.target.value),
                children: ["Все", ...Object.values(Fe).map(c => c.label)].map(c => e.jsx("option", {
                    children: c
                }, c))
            })]
        }), e.jsx(ol, {
            value: t.region,
            onChange: c => i("region", c)
        }), e.jsxs("div", {
            className: "field",
            children: [e.jsx("label", {
                htmlFor: "filter-series",
                children: "Серии"
            }), e.jsx("select", {
                id: "filter-series",
                value: t.series,
                onChange: c => i("series", c.target.value),
                children: ["Все серии", "Статусные", "Спецсерии"].map(c => e.jsx("option", {
                    children: c
                }, c))
            })]
        }), r ? e.jsxs("div", {
            className: "form-grid",
            children: [e.jsx(Je, {
                id: "price-min",
                label: "Цена от, ₽",
                type: "amount",
                value: t.min,
                onChange: c => i("min", c),
                placeholder: "0",
                required: !1
            }), e.jsx(Je, {
                id: "price-max",
                label: "Цена до, ₽",
                type: "amount",
                value: t.max,
                onChange: c => i("max", c),
                placeholder: "Любая",
                required: !1
            })]
        }) : null, e.jsxs("div", {
            className: "sheet-actions",
            children: [e.jsx(b, {
                onClick: a,
                children: "Показать номера"
            }), e.jsx(b, {
                quiet: !0,
                onClick: () => s(Pt),
                children: "Сбросить фильтры"
            })]
        })]
    })
}
function cl({go: t, notify: s, onTrade: r, filters: a, setFilters: i}) {
    var O, B, K, S;
    const {api: c, account: d, principalId: l, r2Game: n, r2GameConfig: m, refreshGame: h} = he()
      , [w,g] = o.useState("")
      , [x,u] = o.useState("")
      , [p,y] = o.useState(null)
      , [v,N] = o.useState("")
      , [j,k] = o.useState(!1)
      , f = o.useRef(!1)
      , C = si(a, w)
      , E = tt(JSON.stringify([d.id, C]), (M, J) => c.m9.collection({
        ...C,
        cursor: M,
        limit: "50"
    }, J))
      , R = Mr()
      , {state: P} = Ot()
      , A = JSON.stringify(P == null ? void 0 : P.favorites);
    o.useEffect( () => {
        E.reload()
    }
    , [A, P == null ? void 0 : P.messagesVersion, E.reload]),
    o.useEffect( () => {
        !E.data || E.busy || y(M => M ? E.data.items.find(J => J.plateId === M.plateId) ?? M : null)
    }
    , [E.data, E.busy]);
    const I = ((O = E.data) == null ? void 0 : O.items) ?? []
      , T = ln(p)
      , Q = (B = R.data) == null ? void 0 : B.owned
      , F = ((K = E.data) == null ? void 0 : K.metadata.capacity) ?? (n == null ? void 0 : n.collection.capacity)
      , X = ["A", "B"].filter(M => {
        const J = n == null ? void 0 : n.slots[M];
        return J && J.ownedEditState === "none" && !J.digits && !J.letters && !J.result && (M === "A" || (n == null ? void 0 : n.entitlements.double))
    }
    );
    async function L(M) {
        const J = n == null ? void 0 : n.slots[M];
        !J || !p || await $("owned-edit", {
            plateId: p.plateId,
            request: {
                slot: M,
                expectedPlateVersion: p.version,
                expectedDraftVersion: J.version
            }
        }, () => {
            const W = new URL(location.href);
            W.searchParams.set("slot", M),
            history.replaceState(null, "", W),
            t("create")
        }
        )
    }
    function _() {
        X.length === 1 ? L(X[0]) : U("edit-slot")
    }
    function U(M) {
        N(""),
        u(M)
    }
    function D() {
        j || (u(""),
        N(""))
    }
    async function $(M, J, W, z=!1) {
        if (!(f.current || !l)) {
            f.current = !0,
            k(!0),
            N("");
            try {
                await Ke(l, M, J, ce => He(c, ce), z),
                await h(),
                E.reload(),
                u(""),
                W == null || W()
            } catch (ce) {
                N(ge(ce)),
                $e(l) && u("")
            } finally {
                f.current = !1,
                k(!1)
            }
        }
    }
    if (x === "detail" && (p != null && p.giftedByOwner) && T)
        return e.jsx(il, {
            onFrameOpen: () => u(""),
            onFrameReturn: () => u("detail"),
            item: p,
            plate: T,
            owner: d.nick ?? "—",
            onBack: () => {
                D(),
                E.reload(),
                R.reload()
            }
            ,
            onTrade: M => {
                D(),
                r(p, M)
            }
            ,
            onSystemSell: () => U("system-sell")
        });
    const te = T && e.jsxs("div", {
        className: "detail-plate",
        children: [e.jsx(cn, {
            p: T
        }), e.jsx(Ue, {
            p: T
        })]
    });
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "page",
            children: [e.jsxs("div", {
                className: "page-heading",
                children: [e.jsx("h1", {
                    children: "Коллекция"
                }), e.jsx("button", {
                    className: "icon-button",
                    "aria-label": "Фильтры коллекции",
                    onClick: () => U("filters"),
                    children: e.jsx(ue, {
                        name: "filter"
                    })
                })]
            }), e.jsxs("div", {
                className: "collection-meta",
                children: [e.jsxs("span", {
                    children: [e.jsxs("strong", {
                        children: [Q ?? "—", " / ", F ?? "—"]
                    }), " мест"]
                }), e.jsxs("div", {
                    children: [e.jsxs(b, {
                        quiet: !0,
                        onClick: () => U("expand"),
                        children: ["+", (m == null ? void 0 : m.collection.expansionSlots) ?? "—", " мест"]
                    }), e.jsx("span", {
                        className: "capacity-price",
                        children: q((n == null ? void 0 : n.collection.nextExpansionPriceGameRub) ?? (m == null ? void 0 : m.collection.expansionPriceGameRub))
                    })]
                })]
            }), (n == null ? void 0 : n.legacyPartial) && e.jsxs(de, {
                title: "Твоя старая заготовка номера",
                children: [e.jsx("p", {
                    children: "Можно один раз вернуть её на экран «Создать» и продолжить. Или удалить."
                }), e.jsx(b, {
                    quiet: !0,
                    disabled: j,
                    onClick: () => U("legacy"),
                    children: "Открыть сохранённую часть"
                })]
            }), e.jsx(el, {
                count: ((S = R.data) == null ? void 0 : S.reserved) ?? 0,
                onClick: () => U("reserved-places")
            }), e.jsx(it, {
                items: ["Все номера", "Избранное"],
                value: a.favorite ? "Избранное" : "Все номера",
                onChange: M => i({
                    ...a,
                    favorite: M === "Избранное"
                }),
                label: "Номера коллекции"
            }), e.jsx(Vr, {
                label: "Редкость",
                items: ["Все", ...Object.values(Fe).map(M => M.label)],
                value: a.rarity,
                onChange: M => i({
                    ...a,
                    rarity: M
                })
            }), e.jsxs("label", {
                className: "search",
                children: [e.jsx(ue, {
                    name: "search",
                    size: 18
                }), e.jsx("input", {
                    "aria-label": "Найти номер в коллекции",
                    placeholder: "Найти номер",
                    value: w,
                    maxLength: 32,
                    onChange: M => g(M.target.value)
                })]
            }), E.error && !E.data ? e.jsx(be, {
                title: "Не удалось загрузить коллекцию",
                description: "Попробуй ещё раз.",
                icon: "grid",
                children: e.jsx(b, {
                    onClick: E.reload,
                    children: "Повторить"
                })
            }) : E.busy && !E.data ? e.jsx(jt, {
                label: "Загружаем коллекцию"
            }) : I.length ? e.jsx(al, {
                items: I,
                filterKey: JSON.stringify([d.id, C]),
                onOpen: M => {
                    y(M),
                    U("detail")
                }
                ,
                onChanged: () => {
                    E.reload(),
                    R.reload()
                }
            }, JSON.stringify([d.id, C])) : e.jsx(be, {
                title: a.favorite ? "Здесь будут твои любимые номера" : Q && Q !== "0" ? "Ничего не найдено" : "Здесь будут твои номера",
                description: a.favorite ? "Нажми на звезду в коллекции." : Q && Q !== "0" ? "Попробуй другой регион или редкость." : "Собери номер и сохрани его в коллекцию.",
                icon: "grid",
                children: e.jsx(b, {
                    onClick: () => Q && Q !== "0" ? (g(""),
                    i(Pt)) : t("create"),
                    children: Q && Q !== "0" ? "Сбросить фильтры" : "Создать номер"
                })
            }), !!E.error && E.data && e.jsxs("p", {
                className: "form-note",
                role: "status",
                children: ["Не удалось обновить коллекцию. ", e.jsx("button", {
                    onClick: E.reload,
                    children: "Повторить"
                })]
            }), E.data && BigInt(E.data.total) > BigInt(I.length) && e.jsxs("p", {
                className: "form-note",
                ref: E.sentinel,
                children: ["Показано ", I.length, " из ", E.data.total, " номеров"]
            })]
        }), x === "detail" && (p != null && p.operationLock) ? e.jsx(ll, {
            item: p,
            onClose: D,
            go: t,
            onChanged: () => {
                E.reload(),
                R.reload()
            }
        }) : x && e.jsxs(ke, {
            title: x === "legacy" ? "Сохранённая часть" : x === "legacy-discard" ? "Удалить сохранённую часть?" : x === "edit-slot" ? "Докрутить номер" : x === "reserved-places" ? "Места для выигрышей" : x === "filters" ? "Фильтры" : x === "expand" ? "Расширить коллекцию?" : x === "system-sell" ? "Продать номер игре?" : "Номер в коллекции",
            onClose: D,
            children: [x === "legacy" && (n != null && n.legacyPartial) ? e.jsxs(e.Fragment, {
                children: [e.jsx("p", {
                    className: "body-copy",
                    children: "Заготовка вернётся на место «Номер 1» на экране «Создать». Сначала освободи это место. Текущий номер сам не удалится."
                }), e.jsx(b, {
                    loading: j,
                    disabled: !!n.slots.A.digits || !!n.slots.A.letters || n.slots.A.ownedEditState !== "none",
                    onClick: () => void $("legacy-recover", {
                        expectedDraftVersion: n.slots.A.version,
                        expectedSavedDraftVersion: n.legacyPartial.expectedSavedDraftVersion
                    }, () => t("create")),
                    children: "Продолжить создание"
                }), e.jsx(b, {
                    quiet: !0,
                    onClick: () => U("legacy-discard"),
                    children: "Удалить сохранённую часть"
                })]
            }) : x === "legacy-discard" && (n != null && n.legacyPartial) ? e.jsxs(e.Fragment, {
                children: [e.jsx("p", {
                    className: "body-copy",
                    children: "Эта сохранённая часть будет удалена без возможности возврата. Остальные номера сохраняются."
                }), e.jsx(b, {
                    loading: j,
                    onClick: () => void $("legacy-discard", {
                        expectedSavedDraftVersion: n.legacyPartial.expectedSavedDraftVersion
                    }, () => s("Сохранённая часть удалена")),
                    children: "Удалить"
                }), e.jsx(b, {
                    secondary: !0,
                    onClick: () => U("legacy"),
                    children: "Отмена"
                })]
            }) : x === "edit-slot" ? e.jsxs(e.Fragment, {
                children: [e.jsx("p", {
                    className: "body-copy",
                    children: X.length ? "Выбери свободное место на экране создания." : "Сначала сохрани или продай текущий результат на экране создания."
                }), X.map(M => e.jsxs(b, {
                    loading: j,
                    onClick: () => void L(M),
                    children: ["Номер ", M === "A" ? 1 : 2]
                }, M)), e.jsx(b, {
                    secondary: !0,
                    onClick: () => t("create"),
                    children: "Открыть создание"
                })]
            }) : x === "reserved-places" ? R.data && e.jsx(Br, {
                ...R.data,
                onBids: () => {
                    D(),
                    t("auction-my-bids")
                }
            }) : x === "filters" ? e.jsx(Kr, {
                value: a,
                onChange: i,
                onDone: D
            }) : x === "expand" ? e.jsx(Dr, {
                busy: j,
                onClose: D,
                onExpand: () => void $("expand", {}, () => s("Коллекция расширена · +" + (m == null ? void 0 : m.collection.expansionSlots) + " мест"))
            }) : T && p && x === "system-sell" ? e.jsxs(e.Fragment, {
                children: [te, e.jsx(Z, {
                    label: "Ты получишь",
                    value: q(T.systemSell),
                    strong: !0
                }), e.jsx("p", {
                    className: "body-copy",
                    children: "После продажи номер исчезнет из твоей коллекции."
                }), e.jsxs("div", {
                    className: "sheet-actions",
                    children: [e.jsxs(b, {
                        loading: j,
                        onClick: () => void $("system-sell", {
                            plateId: p.plateId,
                            request: {
                                expectedPlateVersion: p.version
                            }
                        }, () => s(`Продано игре · +${q(T.systemSell)}`)),
                        children: ["Продать за ", q(T.systemSell)]
                    }), e.jsx(b, {
                        secondary: !0,
                        onClick: D,
                        children: "Отмена"
                    })]
                })]
            }) : T && p ? e.jsxs(e.Fragment, {
                children: [te, e.jsxs("div", {
                    children: [e.jsx(Z, {
                        label: "Продать игре",
                        value: T.systemSell === null ? "Расчёт недоступен" : q(T.systemSell)
                    }), e.jsx(Z, {
                        label: "Получен",
                        value: T.acquired
                    })]
                }), !T.editable && e.jsx("p", {
                    className: "body-copy",
                    children: T.lockedReason ?? (p.saveRewardPaid ? "За этот номер уже получена награда. Менять его цифры и буквы нельзя." : "Сейчас этот номер нельзя докрутить.")
                }), e.jsx(e.Fragment, {
                    children: p.favorite && e.jsx("p", {
                        className: "body-copy",
                        children: "Номер защищён от продажи"
                    })
                }), e.jsx(on, {
                    item: p,
                    onChanged: () => {
                        E.reload(),
                        D()
                    }
                }), e.jsx(Xt, {
                    p: T
                }), e.jsx(an, {
                    p: T,
                    owned: !0
                }), e.jsxs("div", {
                    className: "stack",
                    children: [T.editable && e.jsx(b, {
                        disabled: !n,
                        loading: j,
                        onClick: _,
                        children: "Докрутить номер"
                    }), T.marketEligible && e.jsx(b, {
                        secondary: !0,
                        onClick: () => {
                            D(),
                            r(p, "market")
                        }
                        ,
                        children: "Выставить на продажу"
                    }), T.auctionEligible && e.jsx(b, {
                        secondary: !0,
                        onClick: () => {
                            D(),
                            r(p, "auction")
                        }
                        ,
                        children: "Выставить на аукцион"
                    }), T.systemSell !== null && e.jsxs(b, {
                        quiet: !0,
                        onClick: () => U("system-sell"),
                        children: ["Продать игре за ", q(T.systemSell)]
                    })]
                })]
            }) : null, v && e.jsx("p", {
                className: "field-error",
                role: "alert",
                children: v
            }), x === "detail" && p && T && e.jsx(dn, {
                item: p,
                plate: T,
                beforeOpen: () => u(""),
                returnTo: () => u("detail")
            })]
        })]
    })
}
const dl = {
    CREATED: "Заказ создан",
    PROVIDER_UNKNOWN: "Проверяется",
    PENDING: "Ожидается",
    SUCCEEDED: "Подтверждена",
    CANCELED: "Оплата отменена"
}
  , ul = {
    NOT_READY: "Ещё не добавлено",
    READY: "Ещё не добавлено",
    APPLIED: "Добавлено",
    NO_GRANT: "Покупка не добавляется после возврата",
    REVIEW_REQUIRED: "Нужна проверка"
};
function zs(t, s=!1) {
    const r = (d, l, n=!1) => ({
        title: d,
        text: l,
        complete: n
    });
    if (s)
        return r("Не удалось проверить покупку", "Пока нет нового ответа. Не плати повторно.");
    if (!t)
        return r("Проверяем, создался ли заказ", "Ответ задержался. Заказ мог уже создаться. Новую покупку пока не начинай.");
    const {paymentState: a, fulfillmentState: i, refundState: c} = t;
    if (c === "PENDING")
        return r("Проверяем возврат", "Возврат ещё не подтверждён. Проверь покупку позже.");
    if (c === "FULL")
        return r("Возврат подтверждён", `Подтверждён возврат ${ze(t.refundedKopecks)} за эту покупку.`);
    if (c === "PARTIAL")
        return r("Подтверждён частичный возврат", `Подтверждён возврат ${ze(t.refundedKopecks)} из ${ze(t.amountKopecks)}.`);
    if (c === "NONE") {
        if (a === "SUCCEEDED") {
            if (i === "APPLIED")
                return r("Покупка в аккаунте", "Можно вернуться в игру.", !0);
            if (i === "REVIEW_REQUIRED")
                return r("Оплата прошла. Нужна проверка", "Покупка пока не добавлена в аккаунт. Повторно платить не нужно. Проверь её позже или напиши в поддержку.");
            if (i === "READY" || i === "NOT_READY")
                return r("Оплата прошла", "Покупка ещё не добавлена в аккаунт. Проверь её позже.")
        }
        if (i === "NOT_READY") {
            if (a === "CREATED")
                return r("Готовим оплату", "Заказ создан. Проверяем, можно ли перейти к оплате.");
            if (a === "PROVIDER_UNKNOWN")
                return r("Проверяем оплату", "Пока не удалось узнать, прошла ли оплата. Не плати повторно — сначала проверь покупку.");
            if (a === "PENDING")
                return r("Ждём оплату", "Если ты уже оплатил, проверь покупку. Не оплачивай её повторно.");
            if (a === "CANCELED")
                return r("Оплата отменена", "Покупка не добавлена в аккаунт.")
        }
    }
    return r("Проверяем покупку", "Проверь покупку позже. Повторно платить не нужно.")
}
const Jt = {
    AUTO: "Авто",
    DOUBLE: "Double",
    BUNDLE: "Авто + Double",
    UPGRADE: "Дополнить комплект",
    PACK_99: "Пакет игровых рублей",
    PACK_199: "Пакет игровых рублей",
    PACK_499: "Пакет игровых рублей",
    PACK_999: "Пакет игровых рублей",
    PACK_2490: "Пакет игровых рублей"
};
function un(t) {
    return t.sku.startsWith("PACK_") ? Oe(t.packGameRub) + " игровых рублей" : t.sku === "UPGRADE" ? t.featuresToGrant.map(s => s === "auto" ? "Авто" : "Double").join(" + ") || Jt.UPGRADE : Jt[t.sku]
}
function Ts(t) {
    const s = localStorage.getItem("nomerok-m10-order:" + t);
    if (s === null)
        return null;
    const r = JSON.parse(s);
    if (!/^[0-9a-f-]{36}$/.test(r.key) || !Object.prototype.hasOwnProperty.call(Jt, r.sku))
        throw new Ie("PLAYER_SHOP_1");
    return r
}
function Kn(t) {
    return JSON.stringify([t.sku, t.catalogVersion, t.amountKopecks, t.featuresToGrant, t.fuelAllocations, t.totalGameRub, t.packGameRub, t.canPurchase, t.offer ?? null])
}
function hl(t) {
    try {
        const s = new URL(t ?? "");
        return s.protocol === "https:" && ["yoomoney.ru", "yookassa.ru"].some(r => s.hostname === r || s.hostname.endsWith("." + r)) && !s.username && !s.password ? s.href : null
    } catch {
        return null
    }
}
function ml({route: t, go: s, initialOrder: r}) {
    var ae;
    const {api: a, principalId: i, account: c, refreshGame: d} = he()
      , l = i ?? ""
      , n = Me(l, Y => a.m9.catalog(Y), !0, !0)
      , [m,h] = o.useState("")
      , [w,g] = o.useState(null)
      , [x,u] = o.useState(null)
      , [p,y] = o.useState(r)
      , [v,N] = o.useState("")
      , [j,k] = o.useState("")
      , [f,C] = o.useState(!1)
      , [E,R] = o.useState(!1)
      , [P,A] = o.useState(null)
      , [I,T] = o.useState(!1)
      , [Q,F] = o.useState(!1)
      , X = o.useRef()
      , L = o.useRef(!1)
      , _ = o.useRef("");
    o.useEffect( () => {
        if (l)
            try {
                A(Ts(l))
            } catch (Y) {
                k(ge(Y, {
                    action: "purchase"
                }))
            }
    }
    , [l]);
    function U(Y) {
        Y ? localStorage.setItem("nomerok-m10-order:" + l, JSON.stringify(Y)) : localStorage.removeItem("nomerok-m10-order:" + l),
        A(Y)
    }
    function D(Y, fe=!1) {
        fe && ha(Y),
        history.replaceState({
            ...history.state,
            nomerokIntent: {
                ...lt(),
                paymentOrder: Y,
                purchaseGoalPending: fe && Zs()
            }
        }, "", "/?screen=store-orders")
    }
    function $(Y) {
        D(Y, !0),
        F(!0),
        U(null),
        X.current = void 0,
        u(null),
        N(""),
        y(Y),
        n.reload()
    }
    async function te() {
        if ((await a.bootstrap()).principal.id !== l)
            throw new Ie("PLAYER_SHOP_2")
    }
    async function O(Y) {
        await te();
        const fe = await a.m9.orderRequest(Y.key);
        if (fe.state === "COMPLETED" && fe.orderId)
            return $(fe.orderId),
            !0;
        if (fe.state === "REFUSED")
            throw U(null),
            X.current = void 0,
            u(null),
            n.reload(),
            new Ie("PLAYER_SHOP_3");
        return !1
    }
    async function B() {
        if (!(L.current || !P)) {
            L.current = !0,
            C(!0),
            k("");
            try {
                await O(P)
            } catch (Y) {
                k(ge(Y, {
                    action: "purchase"
                }))
            } finally {
                L.current = !1,
                C(!1)
            }
        }
    }
    async function K() {
        if (!(L.current || !l || !x || W)) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || v.length > 254) {
                h("Проверь адрес почты для чека.");
                return
            }
            L.current = !0,
            C(!0),
            k("");
            try {
                if (!navigator.locks)
                    throw new Ie("PLAYER_SHOP_4");
                await navigator.locks.request("nomerok-m10-order:" + l, {
                    ifAvailable: !0
                }, async Y => {
                    var Ne;
                    if (!Y)
                        throw new Ie("PLAYER_SHOP_5");
                    await te();
                    const fe = Ts(l);
                    if (fe) {
                        A(fe),
                        await O(fe);
                        return
                    }
                    const Ce = (await a.m9.catalog()).products.find(ve => ve.sku === x.sku);
                    if (!Ce)
                        throw new Ie("PLAYER_SHOP_6");
                    if (Kn(Ce) !== Kn(x)) {
                        u(Ce),
                        R(!0);
                        return
                    }
                    if (!Ce.canPurchase)
                        throw new Ie("PLAYER_SHOP_7");
                    const H = {
                        sku: Ce.sku,
                        key: crypto.randomUUID()
                    };
                    if (X.current = {
                        sku: Ce.sku,
                        receiptEmail: v.trim(),
                        catalogVersion: Ce.catalogVersion,
                        quoteAmountKopecks: Ce.amountKopecks,
                        ...Ce.offer ? {
                            offerAcceptance: {
                                ...Ce.offer,
                                accepted: !0
                            }
                        } : {}
                    },
                    U(H),
                    ((Ne = Ts(l)) == null ? void 0 : Ne.key) !== H.key)
                        throw new Ie("PLAYER_SHOP_8");
                    N("");
                    try {
                        const ve = await a.m9.createOrder(X.current, H.key);
                        $(ve.orderId)
                    } catch (ve) {
                        const oe = await a.m9.orderRequest(H.key).catch( () => null);
                        if ((oe == null ? void 0 : oe.state) === "COMPLETED" && oe.orderId) {
                            $(oe.orderId);
                            return
                        }
                        throw ((oe == null ? void 0 : oe.state) === "REFUSED" || (oe == null ? void 0 : oe.state) === "ABSENT" && ve instanceof cs && (ve.status === 400 || ["LEGAL_VERSION_CHANGED", "LEGAL_CONTENT_PENDING", "LEGAL_CONSENT_REQUIRED"].includes(ve.envelope.error.code))) && (U(null),
                        X.current = void 0),
                        ve
                    }
                }
                )
            } catch (Y) {
                k(ge(Y, {
                    action: "purchase"
                }))
            } finally {
                L.current = !1,
                C(!1)
            }
        }
    }
    function S(Y) {
        we("ng_product_open", {
            category: Y.sku
        }),
        we("ng_checkout_open", {
            category: Y.sku
        }),
        k(""),
        u(Y),
        R(!1),
        h("")
    }
    function M() {
        f || (we("ng_checkout_cancel", x ? {
            category: x.sku
        } : {}),
        u(null),
        N(""),
        k(""))
    }
    async function J(Y) {
        if (!L.current) {
            L.current = !0,
            k("");
            try {
                await te();
                const fe = [];
                let Ce;
                do {
                    const H = await a.m9.orders({
                        cursor: Ce,
                        limit: "50"
                    });
                    fe.push(...H.items.filter(Ne => !["CANCELED"].includes(Ne.paymentState) && !["APPLIED", "NO_GRANT"].includes(Ne.fulfillmentState) && (!Y || Ne.quote.featuresToGrant.includes(Y)))),
                    Ce = H.nextCursor ?? void 0
                } while (Ce);
                fe.length === 1 ? (F(!1),
                y(fe[0].orderId)) : s("store-orders")
            } catch (fe) {
                k(ge(fe))
            } finally {
                L.current = !1
            }
        }
    }
    const W = n.busy || !!n.error || !((ae = n.data) != null && ae.paymentsEnabled)
      , z = n.data
      , ce = t === "store-packs"
      , xe = (z == null ? void 0 : z.products) ?? []
      , re = Y => xe.find(fe => fe.sku === Y)
      , me = (z == null ? void 0 : z.rights.auto.effective) ?? !1
      , ne = (z == null ? void 0 : z.rights.double.effective) ?? !1
      , ie = re("UPGRADE")
      , Se = !!ie && ((z == null ? void 0 : z.rights.auto.unrefundedPaid) && !ne || (z == null ? void 0 : z.rights.double.unrefundedPaid) && !me);
    return o.useEffect( () => {
        if (!t.startsWith("store-buy-")) {
            _.current = "";
            return
        }
        if (!z || n.busy || n.error || _.current === t)
            return;
        _.current = t;
        const Y = z.products.find(fe => fe.sku === t.slice(10));
        Y ? S(Y) : k("Покупка сейчас недоступна.")
    }
    , [t, z, n.busy, n.error]),
    t === "store-orders" && !p ? e.jsx(pl, {
        open: Y => {
            F(!1),
            y(Y),
            D(Y)
        }
        ,
        back: () => s("store-features")
    }) : p ? e.jsx(fl, {
        startCheckout: Q,
        id: p,
        onClose: () => {
            y(void 0),
            n.reload(),
            s("store-features")
        }
        ,
        go: s
    }) : P ? e.jsxs("div", {
        className: "page pl-payment ym-hide-content",
        children: [e.jsx("div", {
            className: "page-heading",
            children: e.jsx("h1", {
                children: "Покупка"
            })
        }), e.jsx(de, {
            title: "Проверяем, создался ли заказ",
            children: "Ответ задержался. Заказ мог уже создаться. Сначала проверь результат — новую покупку пока не начинай."
        }), e.jsx(Z, {
            label: "Покупка",
            value: Jt[P.sku]
        }), e.jsx(b, {
            loading: f,
            onClick: () => void B(),
            children: "Проверить покупку"
        }), j && !x && e.jsx(de, {
            title: j,
            kind: "error"
        }), e.jsx(b, {
            secondary: !0,
            onClick: () => s("create"),
            children: "Вернуться в игру"
        })]
    }) : e.jsxs("div", {
        className: "page",
        children: [e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "Магазин"
            }), c.mode === "registered" && e.jsx(b, {
                quiet: !0,
                onClick: () => s("store-orders"),
                children: "История покупок"
            }), e.jsx(b, {
                quiet: !0,
                onClick: () => s("create"),
                children: "Готово"
            })]
        }), z ? e.jsxs(e.Fragment, {
            children: [!!n.error && e.jsxs("div", {
                className: "pl-refresh-error",
                role: "alert",
                children: [e.jsx("span", {
                    children: "Не удалось обновить предложения."
                }), e.jsx(b, {
                    quiet: !0,
                    onClick: n.reload,
                    children: "Повторить"
                })]
            }), n.busy && e.jsx("p", {
                className: "form-note",
                role: "status",
                children: "Обновляем предложения…"
            }), !z.paymentsEnabled && !x && e.jsx("p", {
                className: "form-note",
                role: "status",
                children: "Оплата временно недоступна."
            }), z.paymentsEnabled && z.providerMode === "TEST" && e.jsx(de, {
                title: "Тестовая оплата",
                children: "Деньги не списываются. Используй тестовую карту ЮKassa."
            }), e.jsx(it, {
                items: ["Функции", "Игровые рубли"],
                value: ce ? "Игровые рубли" : "Функции",
                onChange: Y => s(Y === "Игровые рубли" ? "store-packs" : "store-features")
            }), ce ? e.jsxs(e.Fragment, {
                children: [e.jsx("p", {
                    className: "body-copy",
                    children: "Пополнение игрового баланса"
                }), xe.filter(Y => Y.sku.startsWith("PACK_")).map(Y => e.jsxs("article", {
                    className: "pack-row",
                    children: [e.jsxs("div", {
                        children: [e.jsx("b", {
                            children: q(Y.packGameRub)
                        }), e.jsx("small", {
                            children: "игровых рублей"
                        })]
                    }), e.jsx("div", {
                        children: e.jsxs(b, {
                            secondary: !0,
                            className: "pack-price",
                            disabled: n.busy || !!n.error,
                            "aria-label": `Купить ${Oe(Y.packGameRub)} игровых рублей за ${ze(Y.amountKopecks)} реальных`,
                            onClick: () => S(Y),
                            children: [ze(Y.amountKopecks), " ", e.jsx(ue, {
                                name: "right",
                                size: 14
                            })]
                        })
                    })]
                }, Y.sku)), e.jsx("p", {
                    className: "form-note",
                    children: "Игровые рубли используются внутри Номерка. Вывод в реальные деньги не предусмотрен."
                })]
            }) : e.jsxs(e.Fragment, {
                children: [Se && ie && e.jsxs("article", {
                    className: "offer bundle",
                    children: [e.jsx("span", {
                        className: "minor-title",
                        children: me ? "Авто уже доступно" : "Double уже доступен"
                    }), e.jsxs("div", {
                        className: "offer-head",
                        children: [e.jsxs("h2", {
                            children: ["Добавить ", me ? "Double" : "Авто"]
                        }), e.jsxs("div", {
                            className: "offer-price",
                            children: [ze(ie.amountKopecks), e.jsx("small", {
                                children: "реальная оплата"
                            })]
                        })]
                    }), e.jsx("p", {
                        className: "description",
                        children: me ? "Второй номер со своими кнопками. Баланс у обоих общий." : "Крути выбранную часть до нужной редкости."
                    }), e.jsxs("p", {
                        className: "fuel",
                        children: ["+", Oe(ie.totalGameRub), " игровых рублей после активации"]
                    }), e.jsx(b, {
                        disabled: n.busy || !!n.error,
                        onClick: () => S(ie),
                        children: "Добавить"
                    })]
                }), ["AUTO", "DOUBLE"].filter(Y => !Se || (Y === "AUTO" ? me : ne)).map(Y => {
                    const fe = re(Y)
                      , Ce = Y === "AUTO" ? me : ne
                      , H = Y === "AUTO" ? z.rights.auto : z.rights.double;
                    return e.jsxs("article", {
                        className: "offer",
                        children: [e.jsxs("div", {
                            className: "offer-head",
                            children: [e.jsxs("h2", {
                                children: [e.jsx(ot, {
                                    name: Y === "AUTO" ? "auto" : "double",
                                    className: "offer-art"
                                }), Jt[Y]]
                            }), e.jsxs("div", {
                                className: "offer-price",
                                children: [Ce ? H.unrefundedPaid ? "Куплено" : "Доступно" : ze(fe.amountKopecks), !Ce && e.jsx("small", {
                                    children: "реальная оплата"
                                })]
                            })]
                        }), e.jsx("p", {
                            className: "description",
                            children: Y === "AUTO" ? "Крутит цифры, буквы или весь номер — до выбранной редкости." : "Два номера со своими кнопками. Баланс общий."
                        }), e.jsx("p", {
                            className: "fuel",
                            children: Ce ? "Функция доступна в игре" : "+" + Oe(fe.totalGameRub) + " игровых рублей после активации"
                        }), e.jsx(b, {
                            quiet: !0,
                            onClick: () => g(Y === "AUTO" ? "auto" : "double"),
                            children: "Как это работает"
                        }), Ce ? e.jsx(b, {
                            secondary: !0,
                            onClick: () => s(Y === "AUTO" ? "create-auto-settings" : "create-double-enable"),
                            children: Y === "AUTO" ? "Настроить Авто" : "Включить Double"
                        }) : fe.unavailableReason === "OVERLAPPING_ORDER" ? e.jsx(b, {
                            onClick: () => void J(Y === "AUTO" ? "auto" : "double"),
                            children: "Проверить покупку"
                        }) : e.jsx(b, {
                            disabled: n.busy || !!n.error,
                            onClick: () => S(fe),
                            children: "Купить"
                        })]
                    }, Y)
                }
                ), !me && !ne && re("BUNDLE") && e.jsxs("article", {
                    className: "offer bundle",
                    children: [e.jsxs("div", {
                        className: "offer-head",
                        children: [e.jsxs("h2", {
                            children: [e.jsx(ot, {
                                name: "gift",
                                className: "offer-art"
                            }), "Авто + Double"]
                        }), e.jsxs("div", {
                            className: "offer-price",
                            children: [ze(re("BUNDLE").amountKopecks), e.jsx("small", {
                                children: "реальная оплата"
                            })]
                        })]
                    }), e.jsx("p", {
                        className: "description",
                        children: "Обе функции в одном комплекте."
                    }), e.jsxs("p", {
                        className: "fuel",
                        children: ["+", Oe(re("BUNDLE").totalGameRub), " игровых рублей после активации"]
                    }), e.jsx(b, {
                        disabled: n.busy || !!n.error,
                        onClick: () => S(re("BUNDLE")),
                        children: "Купить комплект"
                    })]
                })]
            })]
        }) : e.jsx(be, {
            title: n.error ? "Не удалось загрузить данные" : "Загружаем магазин",
            description: n.error ? ge(n.error, {
                phase: "read"
            }) : void 0,
            children: !!n.error && e.jsx(b, {
                onClick: n.reload,
                children: "Повторить"
            })
        }), x && e.jsx(ke, {
            title: un(x),
            onClose: M,
            children: e.jsxs("div", {
                className: "ym-hide-content",
                children: [e.jsxs("div", {
                    className: "checkout-total",
                    children: [e.jsx("span", {
                        children: "Стоимость "
                    }), e.jsx("strong", {
                        children: ze(x.amountKopecks)
                    })]
                }), !x.sku.startsWith("PACK_") && BigInt(x.totalGameRub) > 0n && e.jsx(Z, {
                    label: "Бонус",
                    value: Oe(x.totalGameRub) + " игровых рублей"
                }), e.jsx("p", {
                    className: "form-note",
                    children: x.sku.startsWith("PACK_") ? "Баланс пополнится после подтверждения оплаты." : "Функции станут доступны после подтверждения оплаты."
                }), E && e.jsx(de, {
                    title: "Условия покупки изменились",
                    children: "Проверь новую цену и оферту перед оплатой."
                }), e.jsxs("form", {
                    className: "stack",
                    onSubmit: Y => {
                        Y.preventDefault(),
                        we("ng_checkout_pay", {
                            category: x.sku
                        }),
                        K()
                    }
                    ,
                    children: [j && e.jsx("p", {
                        className: "field-error",
                        role: "alert",
                        children: j
                    }), e.jsx(Je, {
                        id: "receipt-contact",
                        label: "Введите почту для отправки чека после покупки.",
                        value: v,
                        onChange: Y => {
                            N(Y),
                            h("")
                        }
                        ,
                        error: m,
                        type: "email"
                    }), e.jsxs("p", {
                        className: "body-copy checkout-offer",
                        children: ["Нажимая «Оплатить», вы принимаете условия ", e.jsx(Yt, {
                            documentKey: "offer",
                            binding: x.offer ?? void 0,
                            children: "публичной оферты"
                        }), "."]
                    }), !j && (W || !x.canPurchase || !x.offer) && e.jsx("p", {
                        className: "form-note",
                        role: "status",
                        children: c.mode !== "registered" ? "Для оплаты нужен аккаунт." : x.unavailableReason === "FEATURE_ALREADY_OWNED" ? "Эта функция уже доступна." : x.unavailableReason === "OVERLAPPING_ORDER" ? "Сначала проверьте предыдущую покупку этой функции в истории." : x.unavailableReason === "PAID_UPGRADE_REQUIRED" ? "Дополнение комплекта доступно после покупки Авто или Double." : x.offer ? "Оплата временно недоступна." : "Оплата станет доступна после публикации оферты."
                    }), e.jsx(b, {
                        type: "submit",
                        loading: f,
                        disabled: W || !x.canPurchase || !x.offer,
                        children: "Оплатить"
                    }), e.jsx(b, {
                        secondary: !0,
                        disabled: f,
                        onClick: M,
                        children: "Отмена"
                    })]
                }), c.mode !== "registered" && e.jsx(b, {
                    quiet: !0,
                    onClick: () => s("register"),
                    children: "Создать аккаунт или войти"
                })]
            })
        }), w && e.jsxs(ke, {
            title: w === "auto" ? "Как работает Авто" : "Как работает Double",
            onClose: () => g(null),
            children: [e.jsx(Fr, {
                feature: w
            }), e.jsx("p", {
                className: "body-copy",
                children: w === "auto" ? "Настрой, что крутить, на какой редкости остановиться и что делать с результатом." : "Два номера одновременно. У каждого своё управление и Авто. Double можно включать и выключать."
            }), e.jsx(b, {
                secondary: !0,
                onClick: () => g(null),
                children: "Понятно"
            })]
        }), j && !x && e.jsx(de, {
            title: j,
            kind: "error"
        })]
    })
}
function fl({id: t, onClose: s, go: r, startCheckout: a=!1}) {
    const {api: i, principalId: c, refreshGame: d} = he()
      , l = Me(JSON.stringify([c, t]), N => i.m9.order(t, N), !0, !0)
      , n = l.data
      , [m,h] = o.useState(!1)
      , w = o.useRef("")
      , [g,x] = o.useState(!1);
    if (o.useEffect( () => {
        if (!a || !n || !["CREATED", "PROVIDER_UNKNOWN"].includes(n.paymentState))
            return;
        const N = setInterval( () => {
            document.visibilityState === "visible" && l.reload()
        }
        , 2e3);
        return () => clearInterval(N)
    }
    , [a, n == null ? void 0 : n.paymentState]),
    o.useEffect( () => {
        n && w.current !== n.orderId + n.version && (w.current = n.orderId + n.version,
        d())
    }
    , [n == null ? void 0 : n.version, n == null ? void 0 : n.orderId]),
    o.useEffect( () => {
        if (!a || !n || g || n.paymentState !== "PENDING")
            return;
        const N = hl(n.confirmationUrl);
        N && (x(!0),
        window.location.assign(N))
    }
    , [n == null ? void 0 : n.confirmationUrl, n == null ? void 0 : n.paymentState]),
    o.useEffect( () => {
        n != null && n.testMode && n.paymentState === "SUCCEEDED" && n.fulfillmentState === "APPLIED" && ma(n.orderId) && we("ng_test_purchase_confirmed", {
            category: n.sku
        }, n.orderId)
    }
    , [n == null ? void 0 : n.orderId, n == null ? void 0 : n.paymentState, n == null ? void 0 : n.fulfillmentState, n == null ? void 0 : n.testMode, n == null ? void 0 : n.sku]),
    !n)
        return e.jsxs("div", {
            className: "page pl-payment ym-hide-content",
            children: [e.jsxs("div", {
                className: "page-heading",
                children: [e.jsx("h1", {
                    children: "Покупка"
                }), e.jsx(b, {
                    quiet: !0,
                    onClick: s,
                    children: "Закрыть"
                })]
            }), e.jsx(be, {
                title: l.error ? "Не удалось проверить покупку" : "Проверяем оплату",
                description: l.error ? zs(null, !0).text : void 0,
                children: e.jsx(b, {
                    loading: l.busy,
                    onClick: l.reload,
                    children: "Проверить покупку"
                })
            })]
        });
    const u = zs(n, !!l.error)
      , p = n.paymentState === "CANCELED" && n.refundState === "NONE"
      , y = dl
      , v = ul;
    return e.jsxs("div", {
        className: "page pl-payment ym-hide-content",
        children: [e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "Покупка"
            }), e.jsx(b, {
                quiet: !0,
                onClick: s,
                children: "Закрыть"
            })]
        }), e.jsx("div", {
            className: "pl-payment-symbol",
            children: e.jsx(ue, {
                name: l.error ? "info" : u.complete ? "check" : "clock",
                size: 38
            })
        }), e.jsx("h2", {
            children: u.title
        }), e.jsx("p", {
            className: "body-copy",
            children: u.text
        }), n.refundState !== "NONE" && e.jsx("p", {
            className: "body-copy",
            children: "Возврат связан с исходной оплатой. Решение по доступу принимает владелец после подтверждения возврата."
        }), !!l.error && e.jsx("p", {
            className: "form-note",
            role: "alert",
            children: "Ниже — данные предыдущей проверки."
        }), e.jsxs("div", {
            className: "pl-payment-facts",
            children: [e.jsx(Z, {
                label: "Номер заказа",
                value: n.orderId
            }), e.jsx(Z, {
                label: "Покупка",
                value: un(n.quote)
            }), e.jsx(Z, {
                label: n.testMode ? "Тестовая оплата" : "Сумма оплаты",
                value: ze(n.amountKopecks)
            }), !n.sku.startsWith("PACK_") && BigInt(n.quote.totalGameRub) > 0n && e.jsx(Z, {
                label: "Бонус",
                value: Oe(n.quote.totalGameRub) + " игровых рублей"
            }), e.jsx(Z, {
                label: "Оплата",
                value: y[n.paymentState]
            }), e.jsx(Z, {
                label: "В аккаунте",
                value: v[n.fulfillmentState]
            }), n.refundState !== "NONE" && e.jsx(Z, {
                label: "Возврат · реальные рубли",
                value: n.refundState === "PENDING" ? "Ожидается" : ze(n.refundedKopecks) + " из " + ze(n.amountKopecks)
            })]
        }), !p || l.error ? e.jsx(b, {
            loading: l.busy,
            onClick: l.reload,
            children: "Проверить покупку"
        }) : e.jsx(b, {
            onClick: s,
            children: "В магазин"
        }), e.jsx(b, {
            secondary: !0,
            onClick: () => r("create"),
            children: "Вернуться в игру"
        }), e.jsx(b, {
            quiet: !0,
            onClick: () => h(!0),
            children: "Помощь с покупкой"
        }), m && e.jsxs(ke, {
            title: "Помощь с покупкой",
            onClose: () => h(!1),
            children: [e.jsx(Ra, {
                order: n.orderId,
                email: n.supportEmail
            }), e.jsxs("p", {
                className: "body-copy",
                children: ["Состояние заказа: ", y[n.paymentState], " · ", v[n.fulfillmentState], ". По вопросу возврата обратись в поддержку."]
            }), e.jsx(b, {
                secondary: !0,
                onClick: () => h(!1),
                children: "Закрыть"
            })]
        })]
    })
}
function pl({open: t, back: s}) {
    const {api: r, principalId: a, account: i} = he()
      , c = tt(a ?? "", (d, l) => r.m9.orders({
        cursor: d,
        limit: "20"
    }, l));
    return e.jsxs("div", {
        className: "page",
        children: [e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "История покупок"
            }), e.jsx(b, {
                quiet: !0,
                onClick: s,
                children: "В магазин"
            })]
        }), i.mode !== "registered" ? e.jsx(be, {
            title: "Войди в аккаунт, чтобы увидеть покупки"
        }) : c.error ? e.jsx(be, {
            title: "Не удалось загрузить покупки",
            description: ge(c.error, {
                phase: "read"
            }),
            children: e.jsx(b, {
                onClick: c.reload,
                children: "Повторить"
            })
        }) : c.data ? c.data.items.length ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "stack ym-hide-content",
                children: c.data.items.map(d => e.jsxs("button", {
                    className: "menu-row",
                    onClick: () => t(d.orderId),
                    children: [e.jsxs("div", {
                        children: [e.jsx("strong", {
                            children: un(d.quote)
                        }), e.jsxs("p", {
                            className: "body-copy",
                            children: [ze(d.amountKopecks), " · ", et(d.createdAt)]
                        }), e.jsxs("small", {
                            children: [d.orderId, d.testMode ? " · Тестовая оплата" : ""]
                        }), e.jsx("p", {
                            className: "body-copy",
                            children: zs(d).title
                        })]
                    }), e.jsx(ue, {
                        name: "right"
                    })]
                }, d.orderId))
            }), c.data.nextCursor && e.jsx("p", {
                className: "form-note",
                ref: c.sentinel,
                children: "Загружаем следующие покупки…"
            })]
        }) : e.jsx(be, {
            title: "Покупок пока нет"
        }) : e.jsx(be, {
            title: "Загружаем покупки"
        })]
    })
}
function xl({go: t, embedded: s=!1, noticeId: r, onNoticeClose: a}) {
    var f, C, E, R, P;
    const {api: i, principalId: c} = he()
      , [d,l] = o.useState(null)
      , [n,m] = o.useState(!1)
      , [h,w] = o.useState("")
      , g = o.useRef(!1)
      , x = r ?? ((d == null ? void 0 : d.actor) === c ? d.id : null)
      , u = tt(c ?? "", (A, I) => i.m9.notices({
        limit: "24",
        ...A ? {
            cursor: A
        } : {}
    }, I))
      , p = Me(JSON.stringify([c, x]), A => i.m9.notice(x, A), !!x)
      , y = Me(c ?? "", A => i.rewards.notifications(A))
      , v = p.data
      , N = (f = y.data) == null ? void 0 : f.notifications.find(A => A.active && !A.seen);
    function j() {
        l(null),
        a == null || a()
    }
    async function k(A, I, T) {
        if (g.current || !c)
            return;
        const Q = c;
        g.current = !0,
        m(!0),
        w("");
        try {
            await Ke(Q, A, {
                id: I
            }, F => He(i, F)),
            u.reload(),
            y.reload(),
            T == null || T()
        } catch (F) {
            w(ge(F))
        } finally {
            g.current = !1,
            m(!1)
        }
    }
    return e.jsxs("section", {
        className: "page player-notices",
        "aria-label": "Сообщения Номерка",
        children: [!s && e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "Сообщения"
            }), e.jsx(b, {
                quiet: !0,
                onClick: () => t("create"),
                children: "Готово"
            })]
        }), x ? e.jsxs(e.Fragment, {
            children: [e.jsx(b, {
                quiet: !0,
                onClick: j,
                children: "К сообщениям"
            }), p.error ? e.jsx(be, {
                title: "Сообщение недоступно",
                description: "Срок показа закончился или сообщение снято.",
                children: e.jsx(b, {
                    onClick: p.reload,
                    children: "Проверить ещё раз"
                })
            }) : v ? e.jsxs(e.Fragment, {
                children: [e.jsx(de, {
                    title: v.title,
                    children: e.jsx("span", {
                        className: "notice-full-text",
                        children: v.body
                    })
                }), e.jsxs("p", {
                    className: "form-note",
                    children: ["Доступно до ", et(v.expiresAt), " · Москва"]
                }), !v.readAt && e.jsx(b, {
                    secondary: !0,
                    loading: n,
                    onClick: () => void k("notice-seen", v.id, j),
                    children: "Прочитано"
                }), v.orderId && e.jsx(b, {
                    quiet: !0,
                    onClick: () => {
                        t("store-order");
                        const A = new URL(location.href);
                        A.searchParams.set("paymentOrder", v.orderId),
                        history.replaceState(null, "", A)
                    }
                    ,
                    children: "Моя покупка"
                })]
            }) : e.jsx("p", {
                "aria-busy": "true",
                children: "Загружаем сообщение…"
            })]
        }) : e.jsxs(e.Fragment, {
            children: [N && e.jsx(de, {
                title: N.type === "RECOVERY_AVAILABLE" ? "У тебя новое задание" : N.text,
                children: e.jsx(b, {
                    loading: n,
                    onClick: () => void k("reward-seen", N.id, () => t("tasks-extra")),
                    children: "Открыть задание"
                })
            }), !!((C = u.data) != null && C.items.length) && e.jsx("h2", {
                children: "От Номерка"
            }), (E = u.data) == null ? void 0 : E.items.map(A => e.jsxs("button", {
                type: "button",
                className: "notice-inbox-item",
                onClick: () => l({
                    actor: c,
                    id: A.id
                }),
                children: [e.jsx("strong", {
                    children: A.title
                }), e.jsx("span", {
                    children: A.readAt ? "Прочитано" : "Новое сообщение"
                }), e.jsx("span", {
                    children: "Открыть"
                })]
            }, A.id)), u.error ? e.jsx(be, {
                title: "Не удалось загрузить сообщения",
                description: ge(u.error, {
                    phase: "read"
                }),
                children: e.jsx(b, {
                    onClick: u.reload,
                    children: "Повторить"
                })
            }) : u.busy ? e.jsx("p", {
                "aria-busy": "true",
                children: "Загружаем сообщения…"
            }) : !((R = u.data) != null && R.items.length) && !N ? e.jsx("p", {
                className: "form-note",
                children: "Сообщения Номерка появятся здесь."
            }) : null, ((P = u.data) == null ? void 0 : P.nextCursor) && e.jsx(b, {
                secondary: !0,
                loading: u.busy,
                onClick: () => void u.next(),
                children: "Показать ещё"
            })]
        }), h && e.jsx(de, {
            title: h,
            kind: "error"
        })]
    })
}
const Hn = {
    PENDING: "Ожидает ответа",
    ACCEPTED: "Сделка завершена",
    REJECTED: "Отклонено",
    CANCELLED: "Отменено",
    EXPIRED: "Срок истёк",
    UNAVAILABLE: "Условия изменились"
};
function jl(t, s) {
    if (!s.items.some(i => t.items.some(c => c.id === i.id)))
        return s;
    const r = new Map(s.items.map(i => [i.offer.id, i.offer]))
      , a = new Map(t.items.map(i => [i.id, {
        ...i,
        offer: r.get(i.offer.id) ?? i.offer
    }]));
    for (const i of s.items)
        a.set(i.id, i);
    return {
        ...s,
        nextCursor: t.nextCursor,
        items: [...a.values()].sort( (i, c) => BigInt(i.sequence) > BigInt(c.sequence) ? -1 : 1)
    }
}
function gl({go: t, initialOffer: s, onOpened: r, noticeId: a, onNoticeClose: i}) {
    const {account: c} = he()
      , [d,l] = o.useState("Все");
    return c.mode !== "registered" ? e.jsx("div", {
        className: "page",
        children: e.jsxs(be, {
            title: "Сообщения доступны с аккаунтом",
            children: [e.jsx(b, {
                onClick: () => t("register"),
                children: "Создать аккаунт"
            }), e.jsx(b, {
                secondary: !0,
                onClick: () => t("login"),
                children: "Войти"
            })]
        })
    }) : e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "page collector-message-heading",
            children: [e.jsxs("div", {
                className: "page-heading",
                children: [e.jsx("h1", {
                    children: "Сообщения"
                }), e.jsx(b, {
                    quiet: !0,
                    onClick: () => t("profile"),
                    children: "Готово"
                })]
            }), e.jsx(it, {
                items: ["Все", "Сделки"],
                value: d,
                onChange: l,
                label: "Тип сообщений"
            })]
        }), (d === "Все" || a) && e.jsx(xl, {
            go: t,
            embedded: !0,
            noticeId: a,
            onNoticeClose: i
        }), e.jsx(vl, {
            go: t,
            initialOffer: s,
            onOpened: r
        })]
    })
}
function vl({go: t, initialOffer: s, onOpened: r}) {
    var k, f;
    const {api: a, principalId: i} = he()
      , {state: c, revision: d} = Ot()
      , l = Tt()
      , [n,m] = o.useState("INCOMING")
      , [h,w] = o.useState(null)
      , [g,x] = o.useState(null)
      , [u,p] = o.useState(!1)
      , y = tt(JSON.stringify([i, n]), (C, E) => a.trades.feed({
        direction: n,
        cursor: C
    }, E), jl);
    o.useEffect( () => {
        y.reload()
    }
    , [d, y.reload]),
    o.useEffect( () => {
        var E, R;
        if (!h)
            return;
        const C = (R = (E = y.data) == null ? void 0 : E.items.find(P => P.offer.id === h.id)) == null ? void 0 : R.offer;
        C && C.version !== h.version && (w(C),
        x(null),
        p(!1))
    }
    , [y.data, h]),
    o.useEffect( () => {
        w(null),
        x(null),
        p(!1)
    }
    , [i, n]),
    o.useEffect( () => {
        s && (w(s),
        m(s.incoming ? "INCOMING" : "SENT"),
        x(null),
        r == null || r())
    }
    , [s, r]);
    const v = ((k = y.data) == null ? void 0 : k.items) ?? []
      , N = v.filter(C => !C.read).map(C => C.id);
    function j(C) {
        x(null),
        p(!1),
        C && w(C),
        y.reload()
    }
    return e.jsxs("div", {
        className: "page collector-messages",
        children: [e.jsx(it, {
            items: ["Входящие", "Отправленные"],
            value: n === "INCOMING" ? "Входящие" : "Отправленные",
            onChange: C => m(C === "Входящие" ? "INCOMING" : "SENT"),
            label: "Направление предложений"
        }), e.jsxs("label", {
            className: "collector-toggle",
            children: [e.jsx("input", {
                type: "checkbox",
                checked: (c == null ? void 0 : c.receiveOffers) ?? !0,
                disabled: !c || l.busy,
                onChange: C => void l.run("trade-preferences", {
                    receiveOffers: C.target.checked
                }, () => {}
                )
            }), e.jsx("span", {
                children: "Принимать новые предложения"
            })]
        }), e.jsx("p", {
            className: "form-note",
            children: "Если выключить, новые предложения приходить не будут. На полученные раньше можно ответить."
        }), !!N.length && e.jsx(b, {
            quiet: !0,
            loading: l.busy,
            onClick: () => void l.run("trade-seen", {
                eventIds: N.slice(0, 24)
            }, () => y.reload()),
            children: "Отметить прочитанными"
        }), y.error ? e.jsx(be, {
            title: "Не удалось обновить сделки",
            description: "Проверь интернет и попробуй ещё раз.",
            children: e.jsx(b, {
                onClick: y.reload,
                children: "Повторить"
            })
        }) : y.data ? v.length ? null : e.jsx(be, {
            title: "Предложений пока нет",
            description: "Открой профиль игрока, чтобы предложить покупку или свой номер."
        }) : e.jsx("p", {
            "aria-busy": "true",
            children: "Загружаем сделки…"
        }), e.jsx("ol", {
            className: "collector-message-list",
            children: v.map(C => e.jsx("li", {
                className: C.read ? "" : "unread",
                children: e.jsxs("button", {
                    className: "collector-message",
                    "data-offer-status": C.offer.status,
                    onClick: () => {
                        w(C.offer),
                        x(null),
                        p(!1),
                        C.read || l.run("trade-seen", {
                            eventIds: [C.id]
                        }, () => y.reload())
                    }
                    ,
                    children: [e.jsxs("span", {
                        className: "collector-message-title",
                        children: [C.offer.peer.nickname, e.jsx("small", {
                            children: C.offer.incoming ? "Входящее" : "Отправленное"
                        })]
                    }), e.jsx(Qe, {
                        p: Ht(C.offer.plate),
                        small: !0
                    }), e.jsxs("span", {
                        className: "collector-message-title",
                        children: [e.jsx("b", {
                            children: Hn[C.status]
                        }), e.jsx("b", {
                            children: q(C.offer.grossGameRub)
                        })]
                    }), e.jsx("time", {
                        dateTime: C.occurredAt,
                        children: et(C.occurredAt)
                    })]
                })
            }, C.id))
        }), ((f = y.data) == null ? void 0 : f.nextCursor) && e.jsx(b, {
            secondary: !0,
            disabled: y.busy,
            onClick: () => void y.next(),
            children: "Ранее"
        }), l.error && !h && e.jsx("p", {
            className: "field-error",
            role: "alert",
            children: l.error
        }), h && e.jsxs(ke, {
            closeDisabled: l.busy,
            title: "Сделка с игроком",
            onClose: () => {
                l.busy || (w(null),
                x(null),
                l.clearError())
            }
            ,
            children: [e.jsxs(b, {
                quiet: !0,
                onClick: () => t("player:" + h.peer.id),
                children: [h.peer.nickname, " · профиль"]
            }), e.jsx("div", {
                className: "detail-plate",
                children: e.jsx(_t, {
                    p: Ht(h.plate)
                })
            }), e.jsx(Z, {
                label: "Статус",
                value: Hn[h.status]
            }), e.jsx(Pr, {
                quote: g ?? h
            }), e.jsxs("p", {
                className: "body-copy",
                children: [h.viewerRole === "BUYER" ? "Ты покупатель." : "Ты продавец.", " Рамка останется у продавца."]
            }), h.status === "PENDING" && e.jsxs(e.Fragment, {
                children: [e.jsxs("p", {
                    className: "form-note",
                    children: ["Предложение действует до ", et(h.expiresAt), " · Москва"]
                }), g ? e.jsxs(e.Fragment, {
                    children: [e.jsx(rn, {
                        expiresAt: g.expiresAt,
                        onExpired: () => p(!0)
                    }), u ? e.jsx(b, {
                        onClick: () => x(null),
                        children: "Проверить заново"
                    }) : e.jsx(b, {
                        loading: l.busy,
                        onClick: () => void l.run("trade-accept", {
                            quoteId: g.quoteId,
                            digest: g.digest
                        }, C => j(C.offer)),
                        children: h.viewerRole === "BUYER" ? `Купить за ${q(g.grossGameRub)}` : `Продать и получить ${q(g.netGameRub)}`
                    })]
                }) : h.incoming && e.jsx(b, {
                    loading: l.busy,
                    onClick: () => void l.run("trade-accept-quote", {
                        id: h.id,
                        expectedVersion: h.version
                    }, C => {
                        x(C.quote),
                        C.offer && w(C.offer),
                        p(!1)
                    }
                    ),
                    children: "Проверить сумму"
                }), e.jsx(b, {
                    secondary: !0,
                    loading: l.busy,
                    onClick: () => void l.run("trade-terminal", {
                        id: h.id,
                        expectedVersion: h.version,
                        action: h.incoming ? "reject" : "cancel"
                    }, C => j(C.offer)),
                    children: h.incoming ? "Отклонить" : "Отменить предложение"
                })]
            }), l.error && e.jsx("p", {
                className: "field-error",
                role: "alert",
                children: l.error
            })]
        })]
    })
}
function Fs(t) {
    const s = localStorage.getItem(t);
    if (!s)
        return null;
    const r = JSON.parse(s);
    if (typeof (r == null ? void 0 : r.action) == "string" && r.action.startsWith("telegram."))
        return localStorage.removeItem(t),
        null;
    if (!r || !["email.set", "email.unlink"].includes(r.action) || !/^[0-9a-f-]{36}$/.test(r.key))
        throw new Ie("PLAYER_EMAIL_1");
    return r
}
function bl({go: t}) {
    var X, L, _, U;
    const {api: s, principalId: r, account: a} = he()
      , i = r ?? ""
      , c = "nomerok-m10-security:" + i
      , d = Me(i, D => s.m9.security(D), a.mode === "registered")
      , l = d.data
      , n = Me("email-policy", D => s.m9.emailPolicy(D))
      , [m,h] = o.useState("")
      , [w,g] = o.useState("")
      , [x,u] = o.useState(null)
      , [p,y] = o.useState(!1)
      , [v,N] = o.useState("")
      , [j,k] = o.useState("")
      , [f,C] = o.useState(null)
      , [E,R] = o.useState({})
      , P = o.useRef(!1)
      , A = o.useRef(i);
    o.useLayoutEffect( () => (A.current = i,
    () => {
        A.current = ""
    }
    ), [i]),
    o.useEffect( () => {
        g(""),
        u(null),
        k(""),
        N("");
        try {
            const D = Fs(c);
            C((D == null ? void 0 : D.actor) === i ? D : null)
        } catch (D) {
            N(ge(D))
        }
    }
    , [i, c]);
    function I(D) {
        D ? localStorage.setItem(c, JSON.stringify(D)) : localStorage.removeItem(c),
        C(D)
    }
    function T(D) {
        I(null),
        u(null),
        k(D === "email.set" ? "Открой ссылку в письме, чтобы подтвердить почту." : "Почта удалена из аккаунта."),
        d.reload()
    }
    async function Q(D) {
        var te;
        if (P.current || !i || !navigator.locks)
            return;
        if (D === "email.set") {
            const O = m.trim();
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(O)) {
                R({
                    email: "Проверь адрес почты."
                });
                return
            }
            if (n.data && !n.data.domains.includes(((te = O.split("@")[1]) == null ? void 0 : te.toLowerCase()) ?? "")) {
                R({
                    email: da.M11B_EMAIL_PROVIDER_NOT_ALLOWED
                });
                return
            }
        }
        P.current = !0,
        y(!0),
        N(""),
        R({}),
        k("");
        let $ = !1;
        try {
            await navigator.locks.request(c, {
                ifAvailable: !0
            }, async O => {
                var J, W;
                if (!O)
                    throw new Ie("PLAYER_EMAIL_2");
                if (Fs(c))
                    throw new Ie("PLAYER_EMAIL_3");
                const B = m.trim();
                if (D === "email.set" && n.data && !n.data.domains.includes(((J = B.split("@")[1]) == null ? void 0 : J.toLowerCase()) ?? ""))
                    throw new Ie("EMAIL_PROVIDER");
                const K = s.m9.recentPassword({
                    password: w,
                    action: D === "email.set" ? "EMAIL_SET" : "EMAIL_UNLINK",
                    ...D === "email.set" ? {
                        email: B
                    } : {}
                });
                g("");
                const S = (await K).proof;
                if (A.current !== i)
                    return;
                const M = {
                    actor: i,
                    action: D,
                    key: crypto.randomUUID()
                };
                if (I(M),
                ((W = Fs(c)) == null ? void 0 : W.key) !== M.key)
                    throw new Ie("PLAYER_EMAIL_4");
                $ = !0,
                D === "email.set" ? await s.m9.setEmail({
                    proof: S,
                    email: B
                }, M.key) : await s.m9.unlink("email", S, M.key),
                A.current === i && T(D)
            }
            )
        } catch (O) {
            if (A.current === i) {
                $ && O instanceof cs && O.status >= 400 && O.status < 500 && ![408, 429].includes(O.status) && !O.unknownAfterTransportLoss && I(null);
                const B = O instanceof cs ? O.envelope.error.code : ""
                  , K = ge(O, {
                    action: "email",
                    phase: $ ? void 0 : "rejected"
                });
                ["M11B_EMAIL_INVALID", "M11B_EMAIL_PROVIDER_NOT_ALLOWED"].includes(B) ? R({
                    email: K
                }) : ["M9_RECENT_PASSWORD_INVALID"].includes(B) ? R({
                    password: "Текущий пароль не подошёл."
                }) : N(K)
            }
        } finally {
            P.current = !1,
            A.current === i && (y(!1),
            g(""))
        }
    }
    async function F() {
        if (!(P.current || !f)) {
            P.current = !0,
            y(!0),
            N("");
            try {
                const D = await s.m9.securityResult(f.action, f.key);
                if (A.current !== i)
                    return;
                if (D.state === "NOT_FOUND")
                    throw new Ie("PLAYER_EMAIL_5");
                if (D.state === "REFUSED")
                    throw I(null),
                    new Ie("PLAYER_EMAIL_6");
                if (D.state === "SUPERSEDED") {
                    I(null),
                    d.reload(),
                    k("После этой попытки почту меняли ещё раз. Сейчас показана последняя почта.");
                    return
                }
                T(f.action)
            } catch (D) {
                A.current === i && N(ge(D, {
                    action: "email",
                    phase: "read"
                }))
            } finally {
                P.current = !1,
                A.current === i && y(!1)
            }
        }
    }
    return e.jsxs("div", {
        className: "page ym-hide-content",
        children: [e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "Почта аккаунта"
            }), e.jsx(b, {
                quiet: !0,
                onClick: () => t("profile-settings"),
                children: "Назад"
            })]
        }), v && !x && e.jsx(de, {
            title: v,
            kind: "error"
        }), j && e.jsx(de, {
            title: j
        }), f ? e.jsxs(e.Fragment, {
            children: [e.jsx(de, {
                title: "Проверяем изменение почты",
                children: "Дождись результата, прежде чем менять почту снова."
            }), e.jsx(b, {
                loading: p,
                onClick: () => void F(),
                children: "Проверить результат"
            })]
        }) : l ? e.jsxs(e.Fragment, {
            children: [e.jsx("p", {
                className: "body-copy",
                children: "Если забудешь пароль, на эту почту можно получить ссылку для его смены. Можно играть и без почты."
            }), e.jsx(Z, {
                label: "Почта",
                value: e.jsx("span", {
                    className: "ym-hide-content",
                    children: ((X = l.email) == null ? void 0 : X.address) ?? "Не добавлена"
                })
            }), e.jsx(Z, {
                label: "Статус",
                value: ((L = l.email) == null ? void 0 : L.state) === "VERIFIED" ? "Подтверждена" : ((_ = l.email) == null ? void 0 : _.state) === "PENDING" ? "Ожидает подтверждения" : "Не добавлена"
            }), ((U = l.email) == null ? void 0 : U.state) === "PENDING" && e.jsx(de, {
                title: "Проверь почту",
                children: "Ссылка действует 15 минут. После подтверждения заново входить не придётся."
            }), e.jsx(b, {
                onClick: () => {
                    h(""),
                    N(""),
                    R({}),
                    u("email.set")
                }
                ,
                children: l.email ? "Изменить почту" : "Добавить почту"
            }), l.email && e.jsx(b, {
                secondary: !0,
                onClick: () => {
                    N(""),
                    R({}),
                    u("email.unlink")
                }
                ,
                children: "Удалить почту"
            }), e.jsx(b, {
                quiet: !0,
                onClick: d.reload,
                children: "Проверить подтверждение"
            })]
        }) : e.jsx(be, {
            title: d.error ? "Не удалось загрузить данные" : "Загружаем данные",
            description: d.error ? ge(d.error, {
                phase: "read"
            }) : void 0,
            children: e.jsx(b, {
                onClick: d.reload,
                children: "Повторить"
            })
        }), x && !f && e.jsx(ke, {
            title: x === "email.set" ? "Почта аккаунта" : "Удалить почту?",
            onClose: () => {
                p || (u(null),
                g(""))
            }
            ,
            children: e.jsxs("form", {
                className: "stack",
                onSubmit: D => {
                    D.preventDefault(),
                    Q(x)
                }
                ,
                children: [x === "email.set" && e.jsxs("div", {
                    className: "field",
                    children: [e.jsx("label", {
                        htmlFor: "account-email",
                        children: "Новая почта"
                    }), e.jsx("input", {
                        className: "ym-disable-keys",
                        id: "account-email",
                        type: "email",
                        autoComplete: "email",
                        required: !0,
                        value: m,
                        onChange: D => {
                            h(D.target.value),
                            R($ => ({
                                ...$,
                                email: void 0
                            }))
                        }
                        ,
                        "aria-invalid": !!E.email,
                        "aria-describedby": [E.email ? "account-email-error" : null, n.data ? "account-email-help" : null].filter(Boolean).join(" ") || void 0
                    }), E.email && e.jsx("p", {
                        className: "field-error",
                        id: "account-email-error",
                        role: "alert",
                        children: E.email
                    }), n.data && e.jsx("p", {
                        id: "account-email-help",
                        children: n.data.domains.join(", ")
                    })]
                }), e.jsx("p", {
                    className: "body-copy",
                    children: x === "email.unlink" ? "Введи текущий пароль. После удаления почты через неё нельзя будет восстановить доступ. На своих устройствах ты останешься в аккаунте." : "Введи текущий пароль, чтобы изменить почту."
                }), x === "email.set" && (n.error ? e.jsx(de, {
                    title: "Не удалось проверить, подходит ли эта почта",
                    kind: "error",
                    children: e.jsx(b, {
                        secondary: !0,
                        onClick: n.reload,
                        children: "Повторить"
                    })
                }) : n.busy ? e.jsx("p", {
                    role: "status",
                    children: "Загружаем список почтовых сервисов…"
                }) : null), e.jsx(Je, {
                    id: "security-current-password",
                    label: "Текущий пароль",
                    type: "password",
                    value: w,
                    autoComplete: "current-password",
                    onChange: D => {
                        g(D),
                        R($ => ({
                            ...$,
                            password: void 0
                        }))
                    }
                    ,
                    error: E.password
                }), v && e.jsx("p", {
                    className: "field-error",
                    role: "alert",
                    children: v
                }), e.jsx(b, {
                    type: "submit",
                    loading: p,
                    disabled: !w || x === "email.set" && !m,
                    children: "Продолжить"
                })]
            })
        })]
    })
}
function yl({state: t, initialWeekly: s, guest: r, busy: a, error: i, unknown: c, selected: d, claim: l, close: n, register: m}) {
    const [h,w] = o.useState(s ? "Неделя" : "День")
      , g = h === "Неделя"
      , x = g ? t.tasks.weekly : t.tasks.daily;
    return e.jsxs("div", {
        className: "page",
        children: [e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "Задания"
            }), e.jsx(b, {
                quiet: !0,
                onClick: n,
                children: "Готово"
            })]
        }), e.jsx(it, {
            items: ["День", "Неделя"],
            value: h,
            onChange: w
        }), e.jsx("p", {
            className: "form-note",
            children: g ? "Неделя заканчивается в понедельник в 04:00 по Москве. Заработанные награды сохраняются до получения." : "Новый игровой день начинается в 04:00 по Москве."
        }), [...x, ...t.tasks.legacy ?? []].map(u => e.jsxs("section", {
            className: "task-row",
            children: [e.jsxs("div", {
                className: "spread",
                children: [e.jsx("h3", {
                    children: u.title
                }), u.claimed && e.jsx(ue, {
                    name: "check"
                })]
            }), e.jsx("progress", {
                value: Js(u.progress, u.target),
                max: 1e4,
                "aria-label": u.title
            }), e.jsx("b", {
                className: "task-reward",
                children: q(u.rewardGameRub)
            }), (u.completed || u.claimed) && e.jsx(b, {
                disabled: !u.canClaim || r || a || c,
                loading: a && d === u.id,
                onClick: () => void l("task", u.id + "@" + u.periodKey),
                children: u.claimed ? "Получено" : u.unavailableReason === "PERIOD_NOT_CLOSED" ? "После окончания недели" : "Забрать"
            })]
        }, u.id + u.periodKey)), !g && e.jsxs("div", {
            className: "pl-completion",
            children: [e.jsx(Z, {
                label: "За все четыре задания дня",
                value: q(t.completion.amountGameRub)
            }), e.jsx(b, {
                disabled: !t.completion.canClaim || r || a || c,
                loading: a && d === "completion",
                onClick: () => void l("completion"),
                children: t.completion.claimed ? "Получено" : "Забрать " + q(t.completion.amountGameRub)
            })]
        }), r && e.jsx(de, {
            title: "Задания доступны после регистрации",
            children: e.jsx(b, {
                quiet: !0,
                onClick: m,
                children: "Создать аккаунт"
            })
        }), i && e.jsx(de, {
            title: i,
            kind: "error"
        }), c && e.jsxs(de, {
            title: "Проверяем получение",
            children: ["Ответ задержался. Повторно забирать награду не нужно.", e.jsx(b, {
                quiet: !0,
                loading: a,
                onClick: () => void l(d === "completion" ? "completion" : "task", d === "completion" ? void 0 : d, !0),
                children: "Проверить результат"
            })]
        })]
    })
}
const Js = (t, s) => Number(BigInt(s) > 0n ? BigInt(t) > BigInt(s) ? 10000n : BigInt(t) * 10000n / BigInt(s) : 0n);
function kl({route: t, go: s}) {
    const {api: r, principalId: a, account: i, refreshGame: c, r2Game: d} = he()
      , l = Me(a ?? "", O => r.rewards.state(O), !0, !0)
      , n = l.data
      , m = i.mode !== "registered"
      , [h,w] = o.useState(t.includes("weekly") ? "Неделя" : "День")
      , [g,x] = o.useState("")
      , [u,p] = o.useState(!1)
      , [y,v] = o.useState("")
      , [N,j] = o.useState(!1)
      , [k,f] = o.useState()
      , C = o.useRef(!1)
      , E = o.useRef(null)
      , R = Ar(["reward-task", "reward-completion", "reward-recovery"], void 0, !!n || (k == null ? void 0 : k.actor) === a && !!k.data);
    o.useEffect( () => {
        R ? (j(!0),
        x(R.kind === "reward-task" && R.input && typeof R.input == "object" && "id" in R.input ? String(R.input.id) : R.kind.slice(7))) : j(!1)
    }
    , [R]);
    const [P,A] = o.useState(null);
    o.useEffect( () => {
        if (!n)
            return;
        const O = {
            actor: a,
            day: n.calendar.day.key,
            week: n.calendar.week.key
        }
          , B = E.current;
        B && B.actor === O.actor && (B.day !== O.day || B.week !== O.week) && A({
            actor: a,
            day: B.day !== O.day,
            week: B.week !== O.week
        }),
        E.current = O
    }
    , [n, a]),
    o.useEffect( () => {
        n && f({
            actor: a,
            data: n
        })
    }
    , [n]);
    const I = n ?? ((k == null ? void 0 : k.actor) === a ? k.data : void 0)
      , T = h === "Неделя"
      , Q = t.includes("extra")
      , F = I == null ? void 0 : I.recovery;
    async function X(O, B, K=!1) {
        if (C.current || !a || !I)
            return;
        C.current = !0,
        p(!0),
        v("");
        const [S,M] = (B == null ? void 0 : B.split("@")) ?? []
          , J = S ? [...I.tasks.daily, ...I.tasks.weekly, ...I.tasks.legacy ?? []].find(z => z.id === S && (!M || z.periodKey === M)) : null;
        x(B ?? O);
        const W = K ? {} : {
            periodKey: O === "task" ? J.periodKey : O === "recovery" ? I.recovery.economicDay : I.completion.periodKey,
            expectedStateVersion: I.stateVersion,
            ...O === "recovery" ? {
                objectiveId: I.recovery.objectiveId
            } : {}
        };
        try {
            const z = await Ke(a, "reward-" + O, O === "task" ? {
                id: S,
                request: W
            } : W, ce => He(r, ce), K);
            K || Tr("reward-" + O, z),
            await c(),
            l.reload(),
            j(!1),
            O === "completion" && x("")
        } catch (z) {
            v(ge(z)),
            j($e(a)),
            $e(a) || l.reload()
        } finally {
            C.current = !1,
            p(!1)
        }
    }
    if (!I)
        return e.jsxs("div", {
            className: "page",
            children: [e.jsxs("div", {
                className: "page-heading",
                children: [e.jsx("h1", {
                    children: "Задания"
                }), e.jsx(b, {
                    quiet: !0,
                    onClick: () => s("create"),
                    children: "Готово"
                })]
            }), e.jsx(e.Fragment, {
                children: l.error ? e.jsx(be, {
                    title: l.error ? "Не удалось загрузить данные" : "Загружаем задания",
                    description: l.error ? ge(l.error, {
                        phase: "read"
                    }) : void 0,
                    children: !!l.error && e.jsx(b, {
                        onClick: l.reload,
                        children: "Повторить"
                    })
                }) : e.jsx(jt, {
                    label: "Загружаем задания"
                })
            })]
        });
    if (qr(I.policyVersion))
        return e.jsx(yl, {
            state: I,
            initialWeekly: t.includes("weekly"),
            guest: m,
            busy: u || l.busy,
            error: y || (l.error ? ge(l.error, {
                phase: "read"
            }) : ""),
            unknown: N,
            selected: g,
            claim: X,
            close: () => s("create"),
            register: () => s("register")
        });
    if (Q && F) {
        const O = F
          , B = O.claimed
          , K = O.canClaim;
        return e.jsxs("div", {
            className: "page pl-extra",
            children: [e.jsxs("div", {
                className: "page-heading",
                children: [e.jsx("h1", {
                    children: "Задания"
                }), e.jsx(b, {
                    quiet: !0,
                    onClick: () => s("tasks-daily"),
                    children: "Все задания"
                })]
            }), e.jsx("span", {
                className: "pl-eyebrow",
                children: "Дополнительное задание"
            }), e.jsx("h2", {
                children: B ? "Награда получена" : "Продолжай собирать"
            }), e.jsx("p", {
                className: "body-copy",
                children: "Собирай номера из нужных регионов и играй нужное время. Все условия — ниже."
            }), e.jsx("div", {
                className: "pl-reward-number",
                children: (B ? O.paidRewardGameRub : O.offeredRewardGameRub) !== null ? e.jsxs(e.Fragment, {
                    children: [q(B ? O.paidRewardGameRub : O.offeredRewardGameRub), e.jsx("small", {
                        children: "игровых рублей"
                    })]
                }) : e.jsx("p", {
                    className: "body-copy",
                    role: "status",
                    children: l.error ? "Не удалось загрузить награду" : l.busy ? "Загружаем награду…" : "Награда пока недоступна"
                })
            }), [["Собери номера из нужных регионов", O.fullProgress, O.fullTarget, "номеров"], ["Играй активно", (BigInt(O.activeMicroseconds) / 60000000n).toString(), (BigInt(O.activeTargetMicroseconds) / 60000000n).toString(), "минут"]].map( ([S,M,J,W]) => e.jsxs("section", {
                className: "task-row",
                children: [e.jsx("h3", {
                    children: S
                }), e.jsx("progress", {
                    value: Js(M, J),
                    max: 1e4,
                    "aria-label": S
                }), e.jsxs("div", {
                    className: "spread",
                    children: [e.jsxs("span", {
                        children: [Oe(M), " / ", Oe(J), " ", W]
                    }), BigInt(M) >= BigInt(J) && e.jsx(ue, {
                        name: "check",
                        size: 18
                    })]
                })]
            }, S)), O.expiresAt && e.jsx(Z, {
                label: "Срок задания · Москва",
                value: et(O.expiresAt)
            }), e.jsxs("details", {
                className: "pl-details",
                children: [e.jsx("summary", {
                    children: "Какие номера подходят"
                }), e.jsxs("p", {
                    children: ["Собери ", hs(O.fullTarget, ["номер", "номера", "номеров"]), " из указанных регионов и играй активно ", hs(BigInt(O.activeTargetMicroseconds) / 60000000n, ["минуту", "минуты", "минут"]), ". Чтобы забрать награду, на доступном балансе должно быть не больше ", q(O.walletThresholdGameRub), ". Игровые рубли в ставках не входят в доступный баланс."]
                })]
            }), e.jsx(Z, {
                label: "Можно потратить",
                value: q(d == null ? void 0 : d.balance.amount)
            }), O.eligibleRegionCodes && e.jsxs("details", {
                className: "pl-details",
                children: [e.jsx("summary", {
                    children: "Регионы для задания"
                }), e.jsx("p", {
                    className: "body-copy",
                    children: O.eligibleRegionCodes.join(", ")
                })]
            }), O.eligibilityReasons.includes("WALLET_ABOVE_THRESHOLD") && e.jsxs(de, {
                title: "Сейчас награду забрать нельзя",
                children: ["Для получения на доступном балансе должно быть не больше ", q(O.walletThresholdGameRub), ". Сейчас у тебя ", q(d == null ? void 0 : d.balance.amount), ". Одного входа в игру недостаточно — нужно выполнить задание."]
            }), O.expired ? e.jsx(de, {
                title: "Срок задания истёк",
                children: "Время на это задание закончилось. За него уже нельзя получить награду."
            }) : N ? e.jsxs(de, {
                title: "Проверяем получение",
                children: ["Повторно получать награду не нужно.", e.jsx(b, {
                    quiet: !0,
                    loading: u,
                    onClick: () => void X("recovery", void 0, !0),
                    children: "Проверить результат"
                })]
            }) : B ? e.jsx(de, {
                title: "Получено · +" + q(O.paidRewardGameRub),
                children: "Игровые рубли уже на балансе."
            }) : e.jsx(b, {
                disabled: !K || m || l.busy || !!l.error,
                loading: u,
                onClick: () => void X("recovery"),
                children: "Получить награду"
            }), y && e.jsx(de, {
                title: y,
                kind: "error"
            }), e.jsx(b, {
                secondary: !0,
                onClick: () => s("create"),
                children: "К игре"
            })]
        })
    }
    const L = !!I.streak.lastCompletionDay && I.streak.position === 0 && I.streak.lastCompletionDay < I.calendar.day.key
      , _ = I.streak.position === 7 && I.streak.nextPosition === 1
      , U = I.completion.nextStreakPosition
      , D = I.completion.totalGameRub
      , $ = I.completion.claimed
      , te = T ? I.tasks.weekly : I.tasks.daily;
    return e.jsxs("div", {
        className: "page",
        children: [e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "Задания"
            }), e.jsx(b, {
                quiet: !0,
                onClick: () => s("create"),
                children: "Готово"
            })]
        }), e.jsxs("section", {
            className: "streak",
            children: [e.jsxs("div", {
                className: "streak-head",
                children: [e.jsx("h3", {
                    children: "Серия наград"
                }), e.jsxs("span", {
                    className: "muted",
                    children: [I.streak.position, " из 7"]
                })]
            }), e.jsx("div", {
                className: "streak-days",
                children: [5, 10, 15, 20, 25, 30, 75].map( (O, B) => e.jsxs("div", {
                    className: "streak-day " + (B < I.streak.position ? "done" : B === I.streak.nextPosition - 1 ? "today" : ""),
                    children: [e.jsx("b", {
                        children: B < I.streak.position ? e.jsx(ue, {
                            name: "check",
                            size: 16
                        }) : B + 1
                    }), e.jsxs("span", {
                        children: [O, " 000 ₽"]
                    })]
                }, O))
            }), e.jsx("p", {
                className: "form-note",
                children: "Забирай награду за все задания дня, чтобы продолжать серию. Просто войти в игру недостаточно."
            })]
        }), I.recovery.objectiveId && !I.recovery.expired && !I.recovery.claimed && e.jsxs("button", {
            className: "pl-extra-entry",
            onClick: () => s("tasks-extra"),
            children: [e.jsx(ue, {
                name: "tasks",
                size: 18
            }), e.jsxs("span", {
                children: ["Дополнительное задание", e.jsx("small", {
                    children: I.recovery.canClaim ? "Есть доступная награда" : "Задание ещё не выполнено"
                })]
            }), e.jsx(ue, {
                name: "right",
                size: 18
            })]
        }), e.jsx(it, {
            items: ["День", "Неделя"],
            value: h,
            onChange: w
        }), (P == null ? void 0 : P.actor) === a && (T ? P == null ? void 0 : P.week : P == null ? void 0 : P.day) && e.jsx(de, {
            title: T ? "Началась новая неделя" : "Начался новый игровой день",
            children: "Появились новые задания. Игровые рубли даются за их выполнение, а не за начало нового дня или недели."
        }), !T && L && e.jsx(de, {
            title: "Серия начнётся с первого дня",
            children: "Ты пропустил прошлый день. Выполни все задания дня и забери общую награду — начнётся новая серия."
        }), !T && _ && e.jsx(de, {
            title: "Началась новая серия",
            children: "Серия из 7 дней завершена. Следующая начнётся с первого дня."
        }), e.jsxs("div", {
            className: "spread minor-title",
            children: [e.jsx("span", {
                children: T ? "На этой неделе" : "Сегодня"
            }), e.jsxs("span", {
                children: [et(T ? I.calendar.week.endsAt : I.calendar.day.endsAt), " · Москва"]
            })]
        }), e.jsx("div", {
            children: te.map(O => e.jsxs("section", {
                className: "task-row",
                children: [e.jsxs("div", {
                    className: "spread",
                    children: [e.jsx("h3", {
                        children: ts(O)
                    }), O.claimed && e.jsx(ue, {
                        name: "check"
                    })]
                }), ts(O) === "Задание" && e.jsx("p", {
                    className: "form-note",
                    children: "Описание задания пока недоступно."
                }), (O.metric === "natural" || O.metric === "purple" || ["D_RARE_3", "W_RARE_20", "W_PURPLE_PLUS"].includes(O.id)) && e.jsx("p", {
                    className: "form-note",
                    children: "Нужен новый номер из собственных прокруток за игровые рубли. Покупки готовых номеров и подарки не учитываются."
                }), e.jsx("progress", {
                    value: Js(O.progress, O.target),
                    max: 1e4,
                    "aria-label": ts(O)
                }), e.jsxs("div", {
                    className: "spread",
                    children: [e.jsxs("span", {
                        className: "muted",
                        children: [Oe(O.progress), " / ", Oe(O.target)]
                    }), e.jsx("b", {
                        children: q(O.rewardGameRub)
                    })]
                }), (O.completed || O.claimed) && e.jsx(b, {
                    disabled: !O.canClaim || ts(O) === "Задание" || m || l.busy || !!l.error,
                    loading: u && g === O.id,
                    onClick: () => void X("task", O.id),
                    children: O.claimed ? "Получено" : "Забрать"
                })]
            }, O.id))
        }), !T && e.jsx(e.Fragment, {
            children: e.jsxs("div", {
                className: "pl-completion",
                children: [e.jsx(Z, {
                    label: "За все задания дня",
                    value: q(I.completion.amountGameRub)
                }), e.jsx(Z, {
                    label: `Серия · день ${U}`,
                    value: q(I.completion.nextStreakRewardGameRub)
                }), e.jsxs(b, {
                    secondary: !0,
                    disabled: !I.completion.canClaim || m || l.busy || !!l.error,
                    onClick: () => {
                        x("completion"),
                        v("")
                    }
                    ,
                    children: ["Забрать награду дня · ", q(D)]
                }), !I.completion.canClaim && !$ && e.jsx("p", {
                    className: "form-note",
                    children: "Сначала получи все три награды дня."
                }), $ && e.jsxs(de, {
                    title: "Итог дня получен · +" + q(D),
                    children: [q(I.completion.amountGameRub), " за задания + ", q(I.completion.nextStreakRewardGameRub), " за серию. "]
                })]
            })
        }), T && e.jsx("p", {
            className: "form-note",
            children: "Награда доступна сразу после выполнения цели."
        }), m && e.jsx(de, {
            title: "Задания доступны после регистрации",
            children: e.jsx(b, {
                quiet: !0,
                onClick: () => s("register"),
                children: "Создать аккаунт"
            })
        }), y && e.jsx(de, {
            title: y,
            kind: "error"
        }), N && g !== "completion" && e.jsxs(de, {
            title: "Проверяем результат",
            children: ["Ответ задержался. Проверь, начислилась ли награда. Повторно забирать её не нужно.", e.jsx(b, {
                quiet: !0,
                loading: u,
                onClick: () => void X("task", g, !0),
                children: "Проверить результат"
            })]
        }), g === "completion" && (!$ || N) && e.jsxs(ke, {
            title: "Награда дня и серии",
            onClose: () => {
                u || x("")
            }
            ,
            children: [e.jsxs("div", {
                className: "pl-reward-number",
                children: [q(D), e.jsx("small", {
                    children: "Обе награды вместе · игровые рубли"
                })]
            }), e.jsx(Z, {
                label: "Все три задания дня",
                value: q(I.completion.amountGameRub)
            }), e.jsx(Z, {
                label: `День ${U} серии`,
                value: q(I.completion.nextStreakRewardGameRub)
            }), N ? e.jsx(de, {
                title: "Проверяем результат",
                children: "Ответ задержался. Проверь, начислилась ли награда. Повторно забирать её не нужно."
            }) : e.jsx("p", {
                className: "body-copy",
                children: "Забери сразу две награды: за все задания дня и за серию."
            }), e.jsx(b, {
                loading: u,
                onClick: () => void X("completion", void 0, N),
                children: N ? "Проверить результат" : "Получить " + q(D)
            }), y && e.jsx("p", {
                className: "field-error",
                role: "alert",
                children: y
            })]
        })]
    })
}
function wl({route: t, go: s}) {
    var v, N, j, k;
    const {api: r, principalId: a, account: i} = he()
      , c = i.mode === "registered"
      , d = t.includes("collection") ? "collection" : t.includes("rarity") ? "rarity" : "money"
      , [l,n] = o.useState(!1)
      , [m,h] = o.useState(!1)
      , w = ["По деньгам", "По коллекции", "По редкости"]
      , g = {
        money: w[0],
        collection: w[1],
        rarity: w[2]
    }
      , x = Me(JSON.stringify([a, d]), async f => {
        const C = await r.tops({
            kind: d,
            limit: "50"
        }, f)
          , E = [...C.rows]
          , R = new Set;
        let P = C.nextCursor;
        for (; P; ) {
            if (!C.snapshotId || R.has(P))
                throw new Error("Снимок рейтинга изменился");
            R.add(P);
            const I = await r.tops({
                kind: d,
                cursor: P,
                snapshotId: C.snapshotId,
                limit: "50"
            }, f);
            if (I.snapshotId !== C.snapshotId)
                throw new Error("Снимок рейтинга изменился");
            E.push(...I.rows),
            P = I.nextCursor
        }
        let A = null;
        if (c && C.snapshotId && (A = await r.topMe({
            kind: d,
            snapshotId: C.snapshotId
        }, f),
        A.snapshotId !== C.snapshotId))
            throw new Error("Снимок рейтинга изменился");
        return {
            ...C,
            rows: E,
            nextCursor: null,
            own: A
        }
    }
    , !0, !0)
      , u = x.data
      , p = x.error && !u ? "error" : x.busy && !u ? "loading" : (u == null ? void 0 : u.projection.status) === "NOT_READY" ? "not-ready" : u != null && u.rows.length ? u.projection.status === "STALE" ? "stale" : "ready" : "empty";
    function y(f, C=!1) {
        const E = f.player.nickname
          , R = !f.plate && (E.length > 20 || String(f.score ?? "").length > 10)
          , P = BigInt(f.rank);
        return e.jsxs("div", {
            className: `top-row v2-top-row ${P <= 3n ? `top-three podium-${P}` : ""} ${C ? "own" : ""} ${f.plate ? "has-plate" : ""} ${R ? "rank-expanded" : ""}`,
            children: [e.jsxs("button", {
                className: "rank-identity collector-public-button",
                disabled: !f.player.publicPlayerId,
                "aria-label": `Открыть профиль ${E}`,
                onClick: () => f.player.publicPlayerId && s("player:" + f.player.publicPlayerId),
                children: [e.jsxs("span", {
                    className: "rank",
                    children: [Oe(f.rank), "."]
                }), e.jsx(vs, {
                    nickname: E,
                    color: f.player.avatarColor
                }), e.jsx("b", {
                    className: "rank-name ym-hide-content",
                    children: E
                })]
            }), f.score !== null && d !== "rarity" && e.jsxs("div", {
                className: "rank-metric",
                children: [e.jsx("strong", {
                    "data-field": d === "money" ? "balance" : "collectionValue",
                    children: q(f.score)
                }), d === "collection" && e.jsxs("span", {
                    className: "body-copy",
                    "data-field": "plateCount",
                    children: [Oe(f.assetCount), " номеров"]
                })]
            }), f.plate && d === "rarity" && e.jsxs("div", {
                className: "rank-plate",
                children: [e.jsx(Qe, {
                    p: Ht(f.plate),
                    small: !0
                }), e.jsx(Ue, {
                    p: Ht(f.plate)
                }), f.probability && e.jsxs("p", {
                    className: "form-note rank-chance",
                    "data-field": "exactChance",
                    children: ["Шанс собрать номер: ", e.jsx("span", {
                        children: f.probability.display
                    })]
                })]
            })]
        }, f.rank)
    }
    return e.jsxs("div", {
        className: "page v2-tops",
        children: [e.jsx("div", {
            className: "page-heading",
            children: e.jsx("h1", {
                children: "Топы"
            })
        }), e.jsx(it, {
            items: w,
            value: g[d],
            onChange: f => {
                h(!1),
                s(["tops-money", "tops-collection", "tops-rarity"][w.indexOf(f)])
            }
            ,
            label: "Рейтинг"
        }), !c && e.jsx(de, {
            title: "Создай аккаунт, чтобы участвовать в топах",
            children: e.jsx(b, {
                quiet: !0,
                onClick: () => s("register"),
                children: "Создать аккаунт"
            })
        }), e.jsxs("div", {
            className: "pl-top-freshness",
            children: [e.jsx("span", {
                children: u ? "Обновлено " + et(u.asOf) + " · Москва" : "—"
            }), e.jsx("button", {
                className: "icon-button",
                "aria-label": "Обновить рейтинг",
                onClick: x.reload,
                children: e.jsx(ue, {
                    name: "history",
                    size: 17
                })
            })]
        }), e.jsxs("div", {
            className: "pl-top-actions",
            children: [e.jsx("button", {
                onClick: () => n(!0),
                children: "Как устроены топы"
            }), e.jsx("button", {
                disabled: !c || !((v = u == null ? void 0 : u.own) != null && v.me),
                onClick: () => h(!m),
                children: "Рядом со мной"
            })]
        }), (p === "stale" || !!x.error && !!u) && e.jsxs("p", {
            className: "form-note",
            role: "status",
            children: ["Не удалось обновить рейтинг. ", e.jsx("button", {
                onClick: x.reload,
                children: "Повторить"
            })]
        }), p === "loading" ? e.jsx(jt, {
            label: "Загружаем рейтинг"
        }) : ["error", "empty", "not-ready"].includes(p) ? e.jsx("div", {
            className: "pl-top-empty",
            children: e.jsx(be, {
                title: p === "error" ? "Не удалось загрузить рейтинг" : p === "empty" ? "В рейтинге пока никого нет" : "Рейтинг ещё не готов",
                description: x.error ? ge(x.error, {
                    phase: "read"
                }) : void 0,
                icon: p === "error" ? "offline" : "trophy",
                children: e.jsx(b, {
                    secondary: !0,
                    onClick: x.reload,
                    children: "Обновить"
                })
            })
        }) : e.jsxs(e.Fragment, {
            children: [m && ((N = u == null ? void 0 : u.own) != null && N.me) ? e.jsxs("section", {
                className: "pl-neighbors",
                children: [e.jsx("h3", {
                    children: "Рядом с тобой"
                }), [...u.own.neighbors, u.own.me].sort( (f, C) => BigInt(f.rank) < BigInt(C.rank) ? -1 : 1).map(f => y(f, f.rank === u.own.me.rank))]
            }) : e.jsx("ol", {
                className: "ranking-list",
                "data-source": `ranking-${d}`,
                children: u == null ? void 0 : u.rows.map(f => e.jsx("li", {
                    children: y(f)
                }, f.rank))
            }), ((j = u == null ? void 0 : u.own) == null ? void 0 : j.unavailableReason) === "NO_ASSETS" && e.jsx(de, {
                title: "Нет подходящего номера для рейтинга",
                children: "Место в топе появится, когда в коллекции будет номер, который в нём учитывается."
            }), c && ((k = u == null ? void 0 : u.own) == null ? void 0 : k.me) && !m && e.jsx("div", {
                className: "sticky-own v2-own",
                "aria-label": "Твоё место",
                children: y(u.own.me, !0)
            })]
        }), l && e.jsxs(ke, {
            title: "Как устроены Топы",
            onClose: () => n(!1),
            children: [e.jsx("p", {
                children: "В топе по деньгам считаются игровые рубли на балансе, без денег в ставках. В топе по коллекции — оценка твоих номеров в игре, а не цены, которые ты поставил на рынке."
            }), e.jsx("p", {
                className: "body-copy",
                children: "При равном результате выше тот, кто дольше держит этот результат без изменений."
            }), e.jsx(b, {
                onClick: () => n(!1),
                children: "Понятно"
            })]
        })]
    })
}
const Yn = {
    Все: "ALL",
    Номера: "PLATES",
    Сделки: "TRADES",
    Награды: "REWARDS",
    Аукционы: "AUCTIONS"
}
  , Nl = {
    DIRECT_TRADE_BOUGHT: "Личная сделка · номер куплен",
    DIRECT_TRADE_SOLD: "Личная сделка · номер продан",
    PLATE_SAVED: "Номер сохранён",
    OWNED_EDIT_COMPLETED: "Номер изменён",
    OWNED_PLATE_LIQUIDATED: "Продан сохранённый номер",
    COLLECTION_EXPANDED: "Коллекция расширена",
    FEATURE_UNLOCKED: "Функция стала доступна",
    MARKET_LISTED: "Номер выставлен на продажу",
    MARKET_DELISTED: "Номер снят с продажи",
    MARKET_EXPIRED: "Срок продажи истёк",
    MARKET_BOUGHT: "Номер куплен на рынке",
    MARKET_SOLD: "Номер продан на рынке",
    AUCTION_CREATED: "Аукцион создан",
    AUCTION_CANCELLED: "Аукцион отменён",
    AUCTION_CLOSED_NO_BID: "Аукцион завершён без ставок",
    AUCTION_BID_PLACED: "Ставка принята",
    AUCTION_BID_RAISED: "Ставка повышена",
    AUCTION_OUTBID_RELEASED: "Ставку перебили · игровые рубли вернулись",
    AUCTION_WON: "Аукцион выигран",
    AUCTION_SOLD: "Номер продан на аукционе",
    GUEST_STARTER_GRANTED: "Стартовый баланс",
    REGISTRATION_GRANTED: "Регистрация аккаунта",
    TASK_REWARD: "Награда за задание",
    DAILY_COMPLETION_AND_STREAK: "Награда дня и серии",
    RECOVERY_REWARD: "Дополнительное задание",
    REFERRAL_REWARD: "Бонус"
};
function Cl({go: t, tab: s, setTab: r}) {
    var d, l, n, m;
    const {api: a, principalId: i} = he()
      , c = tt(JSON.stringify([i, s]), (h, w) => a.history({
        category: Yn[s],
        cursor: h,
        limit: "20"
    }, w));
    return e.jsxs("div", {
        className: "page",
        children: [e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "История"
            }), e.jsx(b, {
                quiet: !0,
                onClick: () => {
                    r("Все"),
                    c.reload()
                }
                ,
                children: "Все события"
            })]
        }), e.jsx(Vr, {
            label: "Категории истории",
            items: Object.keys(Yn),
            value: s,
            onChange: r
        }), ((d = c.data) == null ? void 0 : d.projection.status) === "STALE" && e.jsxs("p", {
            className: "form-note",
            role: "status",
            children: ["Обновление задерживается. ", e.jsx("button", {
                onClick: c.reload,
                children: "Повторить"
            })]
        }), c.busy && !c.data && e.jsxs("div", {
            className: "history-loading",
            children: [e.jsx(jt, {
                label: "Загружаем историю"
            }), e.jsx("p", {
                className: "form-note",
                "aria-hidden": "true",
                children: "Загружаем историю…"
            })]
        }), c.busy && c.data && e.jsx("p", {
            className: "form-note",
            role: "status",
            children: "Обновляем историю…"
        }), (l = c.data) == null ? void 0 : l.items.map(h => e.jsxs("article", {
            className: "event-row ym-hide-content",
            children: [e.jsxs("div", {
                children: [e.jsx("h3", {
                    children: Nl[h.type] ?? {
                        PLATES: "Действие с номером",
                        TRADES: "Сделка",
                        REWARDS: "Награда",
                        AUCTIONS: "Аукцион",
                        ALL: "Событие"
                    }[h.category]
                }), e.jsxs("div", {
                    className: "event-plate",
                    children: [h.plate ? Dt(Ht(h.plate)) : "", h.money.freeDeltaGameRub !== "0" || h.money.heldDeltaGameRub !== "0" ? ` · Баланс: ${Cs(h.money.freeDeltaGameRub)} · В ставках: ${Cs(h.money.heldDeltaGameRub)}` : ""]
                }), e.jsx("time", {
                    children: et(h.occurredAt)
                })]
            }), h.money.economicDeltaGameRub !== "0" && e.jsx("span", {
                className: "event-amount",
                children: Cs(h.money.economicDeltaGameRub)
            })]
        }, h.id)), !!c.error && e.jsx(de, {
            title: c.data ? "Следующая страница не загрузилась" : "Не удалось загрузить историю",
            children: c.data ? "Предыдущие записи остались на экране." : ge(c.error, {
                phase: "read"
            })
        }), !c.busy && !c.error && !((n = c.data) != null && n.items.length) && e.jsx(be, {
            title: "Пока нет событий",
            description: "Здесь появятся полученные номера, сделки и награды.",
            icon: "history",
            children: e.jsx(b, {
                onClick: () => t("create"),
                children: "Создать номер"
            })
        }), (m = c.data) != null && m.nextCursor || c.error ? e.jsx(b, {
            secondary: !0,
            loading: c.busy,
            onClick: () => {
                var h;
                return (h = c.data) != null && h.nextCursor ? void c.next() : c.reload()
            }
            ,
            children: c.error ? "Повторить загрузку" : "Показать ещё"
        }) : null]
    })
}
function Hr(t, s, r) {
    const {api: a} = he()
      , [i,c] = o.useState("");
    return o.useEffect( () => {
        if (c(""),
        !s || !t || t === r)
            return;
        const d = Xn(t);
        if (d) {
            c(d);
            return
        }
        const l = new AbortController
          , n = setTimeout( () => {
            c("Проверяем ник…"),
            a.m9.nicknameAvailability(t.trim(), l.signal).then(m => {
                l.signal.aborted || c(m.available ? "Ник свободен" : "Этот ник уже занят")
            }
            , () => {
                l.signal.aborted || c("Не удалось проверить ник. При сохранении проверим ещё раз.")
            }
            )
        }
        , 450);
        return () => {
            clearTimeout(n),
            l.abort()
        }
    }
    , [t, s, r, a]),
    i
}
class Bt extends Error {
    constructor(r) {
        super("Account result");
        Te(this, "userText");
        this.userText = r.error
    }
}
function El({route: t, go: s, theme: r, onThemeChange: a, onAuth: i, onTutorial: c}) {
    var fe, Ce;
    const d = he()
      , l = d.account.mode === "registered"
      , n = Zt()
      , [m,h] = o.useState(!1)
      , [w,g] = o.useState("")
      , [x,u] = o.useState("")
      , [p,y] = o.useState("")
      , [v,N] = o.useState("")
      , [j,k] = o.useState("")
      , [f,C] = o.useState("")
      , [E,R] = o.useState("")
      , [P,A] = o.useState(!1)
      , I = o.useRef(!1)
      , [T,Q] = o.useState(d.account.nick ?? "")
      , [F,X] = o.useState(!1)
      , [L,_] = o.useState(!1)
      , [U,D] = o.useState(null)
      , [$,te] = o.useState("")
      , [O,B] = o.useState({});
    function K(H, Ne) {
        H === "current" ? N(Ne) : H === "next" ? k(Ne) : C(Ne),
        B(ve => ({
            ...ve,
            [H]: void 0,
            ...H === "next" ? {
                repeat: void 0
            } : {}
        })),
        y("")
    }
    const [S,M] = o.useState(d.account.avatarColor ?? "#2563EB");
    o.useEffect( () => {
        M(d.account.avatarColor ?? "#2563EB")
    }
    , [d.account.avatarColor, t]);
    const J = Hr(T, w === "nickname", d.account.nick)
      , W = o.useRef(0);
    o.useLayoutEffect( () => (W.current++,
    () => {
        W.current++
    }
    ), [d.account.id, d.principalId, t]);
    const z = "nomerok-m10-password:" + d.principalId;
    Me(d.account.id ?? "", H => d.api.m9.security(H), l);
    const ce = Me((d.account.id ?? "") + t, H => d.api.sessions(H), l && t.includes("sessions"));
    let xe = t === "profile" || t === "profile-registered" ? "registered" : t === "profile-guest" ? "guest" : t.replace("profile-", "");
    xe === "password" && P && (xe = "password-success"),
    o.useEffect( () => {
        I.current = !1,
        u(""),
        k(""),
        N(""),
        C(""),
        A(!1),
        g(""),
        y(""),
        B({}),
        D(null),
        te("");
        const H = () => {
            try {
                const Ne = !!d.principalId && !!localStorage.getItem(z);
                X(Ne),
                _(Ne && t === "profile-password")
            } catch {
                y("Не удалось проверить предыдущие попытки смены пароля. Сейчас смена недоступна. Попробуй проверить позже.")
            }
        }
        ;
        return H(),
        window.addEventListener("storage", H),
        () => window.removeEventListener("storage", H)
    }
    , [d.account.id, d.principalId, t, z]);
    function re(H) {
        if (H === "register" || H === "login") {
            i(H);
            return
        }
        y(""),
        g(H)
    }
    function me() {
        x || (g(""),
        y(""))
    }
    async function ne(H, Ne, ve) {
        var ye;
        if (I.current)
            return;
        const oe = W.current
          , Ge = () => oe === W.current;
        let V = !1;
        I.current = !0,
        u(H),
        y("");
        try {
            if (H === "password" || H === "password-close") {
                if (!d.principalId || !navigator.locks)
                    throw new Ie("PLAYER_PROFILE_1");
                await navigator.locks.request(z, {
                    ifAvailable: !0
                }, async je => {
                    if (!je)
                        throw new Ie("PLAYER_PROFILE_2");
                    const Re = localStorage.getItem(z)
                      , Ye = Re ?? crypto.randomUUID();
                    if (!/^[0-9a-f-]{36}$/.test(Ye))
                        throw new Ie("PLAYER_PROFILE_3");
                    if (Re) {
                        const pe = H === "password-close" ? await d.api.closePasswordChange(Ye, Ge) : await d.api.passwordChangeResult(Ye, void 0, Ge);
                        if (!Ge())
                            return;
                        if (pe.accountId !== d.account.id)
                            throw new Ie("PLAYER_PROFILE_4");
                        if (D(pe.state),
                        pe.state === "NOT_FOUND")
                            throw new Ie("PLAYER_PROFILE_5");
                        if (pe.state === "UNAVAILABLE")
                            throw new Ie("PLAYER_PROFILE_6");
                        localStorage.getItem(z) === Ye && localStorage.removeItem(z),
                        X(!1),
                        _(!1),
                        pe.state === "COMPLETED" ? (A(!0),
                        V = !0) : (A(!1),
                        te(pe.state === "SUPERSEDED" ? "После этой попытки пароль меняли ещё раз. Используй самый новый пароль или восстанови доступ." : "Эта попытка остановлена. Пароль не изменился. Теперь можно попробовать снова."));
                        return
                    } else {
                        if (H === "password-close")
                            return;
                        if (localStorage.setItem(z, Ye),
                        localStorage.getItem(z) !== Ye)
                            throw new Ie("PLAYER_PROFILE_7");
                        const pe = d.changePassword(v, j, Ye);
                        k(""),
                        N(""),
                        C("");
                        const Ae = await pe;
                        if (!Ge())
                            return;
                        if (!Ae.ok) {
                            const Ve = "uncertain" in Ae && Ae.uncertain;
                            if (X(Ve),
                            _(Ve),
                            Ve || localStorage.removeItem(z),
                            !Ve && Ae.error === ws.AUTH_FAILED) {
                                B({
                                    current: "Текущий пароль не подошёл."
                                });
                                return
                            }
                            if (!Ve && (Ae.error === ws.PASSWORD_TOO_SHORT || Ae.error === ws.PASSWORD_TOO_LONG)) {
                                B({
                                    next: Ae.error
                                });
                                return
                            }
                            throw new Bt(Ae)
                        }
                    }
                    localStorage.getItem(z) === Ye && localStorage.removeItem(z),
                    X(!1),
                    _(!1),
                    A(!0),
                    V = !0
                }
                )
            } else if (H === "avatar") {
                const je = await d.changeAvatarColor(S);
                if (!je.ok)
                    throw new Bt(je)
            } else if (H === "nickname") {
                const je = await d.changeNick(T);
                if (!je.ok)
                    throw new Bt(je)
            } else if (H === "logout") {
                const je = await d.logout();
                if (!je.ok)
                    throw new Bt(je)
            } else if (H === "session" && d.principalId) {
                const je = E === "others" ? (((ye = ce.data) == null ? void 0 : ye.sessions) ?? []).filter(Re => !Re.current).map(Re => Re.id) : [E];
                await Ke(d.principalId, "sessions-revoke", {
                    ids: je
                }, Re => He(d.api, Re)),
                ce.reload()
            }
            Ge() && (g(""),
            (!H.startsWith("password") || V) && (ve == null || ve()))
        } catch (je) {
            Ge() && (y(je instanceof Ie && je.presentationKey === "PLAYER_PROFILE_5" ? "" : je instanceof Bt ? je.userText : ge(je, {
                action: "password"
            })),
            d.principalId && $e(d.principalId) && g(""))
        } finally {
            Ge() && (I.current = !1,
            u(""))
        }
    }
    const ie = !l || xe === "guest"
      , Se = !["registered", "guest"].includes(xe)
      , ae = {
        appearance: "Оформление",
        settings: "Настройки",
        password: "Сменить пароль",
        "password-success": "Пароль изменён",
        sessions: "Устройства",
        legal: "Юридическая информация"
    }[xe] ?? "Профиль"
      , Y = (H, Ne, ve) => e.jsxs("button", {
        className: "menu-row",
        onClick: ve,
        children: [e.jsx(ue, {
            name: Ne
        }), e.jsx("span", {
            children: H
        }), e.jsx(ue, {
            name: "right"
        })]
    }, H);
    return d.account.mode === "loading" ? e.jsxs("div", {
        className: "page",
        "aria-busy": "true",
        children: [e.jsx("div", {
            className: "page-heading",
            children: e.jsx("h1", {
                children: "Профиль"
            })
        }), e.jsx("div", {
            className: "skeleton-block"
        }), e.jsx("div", {
            className: "skeleton-line"
        })]
    }) : e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "page",
            children: [e.jsxs("div", {
                className: "page-heading",
                children: [e.jsx("h1", {
                    style: xe === "legal" ? {
                        fontSize: 25
                    } : void 0,
                    children: ae
                }), Se && e.jsx("button", {
                    className: "icon-button",
                    "aria-label": "Назад в профиль",
                    onClick: () => s("profile-registered"),
                    children: e.jsx(ue, {
                        name: "back"
                    })
                })]
            }), Se ? xe === "settings" ? e.jsxs("div", {
                children: [Y("Почта аккаунта", "mail", () => s("pl-account-email")), Y("Сменить пароль", "lock", () => s("profile-password"))]
            }) : xe === "appearance" ? e.jsxs("section", {
                className: "theme-settings",
                "aria-labelledby": "theme-label",
                children: [e.jsx("h2", {
                    id: "theme-label",
                    children: "Оформление"
                }), e.jsx(Sl, {
                    theme: r,
                    onConfirm: a
                }), l && e.jsxs("div", {
                    className: "avatar-settings",
                    children: [e.jsx("h2", {
                        children: "Цвет аватара"
                    }), e.jsxs("div", {
                        className: "avatar-preview",
                        children: [e.jsx(vs, {
                            nickname: d.account.nick ?? "",
                            color: S
                        }), e.jsx("label", {
                            htmlFor: "avatar-color",
                            children: "Выбери цвет"
                        }), e.jsx("input", {
                            id: "avatar-color",
                            type: "color",
                            value: S,
                            onChange: H => M(H.target.value.toUpperCase())
                        })]
                    }), e.jsxs("div", {
                        className: "sheet-actions",
                        children: [e.jsx(b, {
                            loading: x === "avatar",
                            disabled: S === (d.account.avatarColor ?? "#2563EB"),
                            onClick: () => void ne("avatar"),
                            children: "Сохранить цвет"
                        }), e.jsx(b, {
                            secondary: !0,
                            disabled: !!x,
                            onClick: () => {
                                M(d.account.avatarColor ?? "#2563EB"),
                                y("")
                            }
                            ,
                            children: "Отмена"
                        })]
                    }), p && e.jsx("p", {
                        className: "field-error",
                        role: "alert",
                        children: p
                    })]
                })]
            }) : xe.startsWith("password") ? xe === "password-success" ? e.jsx(be, {
                title: "Пароль изменён",
                description: "Используй новый пароль при следующем входе.",
                icon: "check",
                children: e.jsx(b, {
                    onClick: () => s("profile-registered"),
                    children: "В профиль"
                })
            }) : F ? e.jsxs(be, {
                title: "Проверь результат смены пароля",
                description: "Проверь, сменился ли пароль. Пока не начинай новую смену.",
                children: [e.jsx(b, {
                    loading: !!x,
                    onClick: () => void ne("password"),
                    children: "Проверить результат"
                }), U === "NOT_FOUND" && e.jsxs(e.Fragment, {
                    children: [e.jsx("p", {
                        className: "body-copy",
                        role: "alert",
                        children: Sn.PLAYER_PROFILE_5
                    }), e.jsx(b, {
                        secondary: !0,
                        loading: !!x,
                        onClick: () => void ne("password-close"),
                        children: "Остановить попытку смены"
                    })]
                }), e.jsx(b, {
                    secondary: !0,
                    onClick: () => i("login"),
                    children: "Войти в аккаунт"
                }), p && e.jsx("p", {
                    role: "alert",
                    className: "field-error",
                    children: p
                })]
            }) : e.jsxs("form", {
                className: "stack",
                onSubmit: H => {
                    if (H.preventDefault(),
                    y(""),
                    B({}),
                    !v) {
                        B({
                            current: "Введи текущий пароль."
                        });
                        return
                    }
                    if ([...j.normalize("NFC")].length < 8) {
                        B({
                            next: "В новом пароле нужно хотя бы 8 символов."
                        });
                        return
                    }
                    if (j !== f) {
                        B({
                            repeat: "Пароли не совпадают."
                        });
                        return
                    }
                    ne("password", {}, () => {
                        k(""),
                        N(""),
                        C(""),
                        s("profile-password-success")
                    }
                    )
                }
                ,
                children: [$ && e.jsx("p", {
                    className: "body-copy",
                    role: "status",
                    children: $
                }), p && e.jsx("p", {
                    className: "field-error",
                    role: "alert",
                    children: p
                }), e.jsx(Je, {
                    id: "current-password",
                    autoComplete: "current-password",
                    type: "password",
                    label: "Текущий пароль",
                    value: v,
                    onChange: H => K("current", H),
                    error: O.current
                }), e.jsx(Je, {
                    id: "new-password",
                    type: "password",
                    label: "Новый пароль",
                    value: j,
                    onChange: H => K("next", H),
                    error: O.next
                }), e.jsx(Je, {
                    id: "repeat-password",
                    type: "password",
                    label: "Повтори новый пароль",
                    value: f,
                    onChange: H => K("repeat", H),
                    error: O.repeat
                }), e.jsx(b, {
                    loading: x === "password",
                    type: "submit",
                    children: "Сменить пароль"
                })]
            }) : xe === "sessions" ? e.jsxs(e.Fragment, {
                children: [e.jsx("p", {
                    className: "body-copy",
                    children: "Здесь видно, где выполнен вход в твой аккаунт."
                }), e.jsx("div", {
                    children: (((fe = ce.data) == null ? void 0 : fe.sessions) ?? []).map( (H, Ne) => e.jsxs("div", {
                        className: "session-row ym-hide-content",
                        children: [e.jsxs("div", {
                            className: "spread",
                            children: [e.jsx("b", {
                                children: H.current ? "Это устройство" : "Вход · " + H.id.slice(0, 8)
                            }), H.current && e.jsx("span", {
                                className: "leading",
                                children: "Это устройство"
                            })]
                        }), e.jsx("p", {
                            children: et(H.lastSeenAt)
                        }), !H.current && e.jsx(b, {
                            quiet: !0,
                            onClick: () => {
                                R(H.id),
                                re("session-end")
                            }
                            ,
                            children: "Выйти на устройстве"
                        })]
                    }, H.id))
                }), (((Ce = ce.data) == null ? void 0 : Ce.sessions) ?? []).some(H => !H.current) && e.jsx(b, {
                    secondary: !0,
                    onClick: () => {
                        R("others"),
                        re("session-end")
                    }
                    ,
                    children: "Выйти на остальных устройствах"
                })]
            }) : xe === "legal" ? e.jsxs(e.Fragment, {
                children: [e.jsx("p", {
                    className: "body-copy",
                    children: "Правила использования Номерка и обработки данных."
                }), e.jsx("div", {
                    children: ["Правила игры", "Пользовательское соглашение", "Политика конфиденциальности", "Условия оплаты"].map(H => Y(H, "info", () => re("legal-document")))
                })]
            }) : null : e.jsxs(e.Fragment, {
                children: [e.jsx(Ir, {
                    afterIdentity: n && e.jsxs("section", {
                        className: "profile-progress",
                        "aria-label": "Уровень и опыт",
                        children: [e.jsx("h2", {
                            children: "Твой уровень"
                        }), e.jsx(nn, {
                            progress: n
                        }), e.jsx(b, {
                            secondary: !0,
                            "aria-haspopup": "dialog",
                            onClick: () => h(!0),
                            children: "Как получать опыт"
                        })]
                    }),
                    level: n == null ? void 0 : n.level,
                    avatarColor: d.account.avatarColor,
                    guest: ie,
                    nickname: d.account.nick,
                    balance: d.serverBalance.amountGameRub,
                    onNickname: () => {
                        Q(d.account.nick ?? ""),
                        re("nickname")
                    }
                    ,
                    onAuth: i,
                    go: s,
                    onLogout: () => re("logout"),
                    onTutorial: c
                }), l && e.jsx(b, {
                    secondary: !0,
                    onClick: () => s("player:" + d.principalId),
                    children: "Как меня видят игроки"
                }), m && e.jsx($i, {
                    onClose: () => h(!1)
                })]
            })]
        }), F && L && e.jsxs(ke, {
            title: "Проверяем смену пароля",
            onClose: () => _(!1),
            children: [!!x && e.jsx("span", {
                className: "spinner"
            }), e.jsx("p", {
                className: "body-copy",
                children: "Ответ задержался. Проверь, сменился ли пароль. Пока не начинай новую смену."
            }), e.jsx(b, {
                loading: !!x,
                onClick: () => void ne("password"),
                children: "Проверить результат"
            }), U === "NOT_FOUND" && e.jsxs(e.Fragment, {
                children: [e.jsx("p", {
                    className: "body-copy",
                    role: "alert",
                    children: Sn.PLAYER_PROFILE_5
                }), e.jsx(b, {
                    secondary: !0,
                    loading: !!x,
                    onClick: () => void ne("password-close"),
                    children: "Остановить попытку смены"
                })]
            }), e.jsx(b, {
                secondary: !0,
                onClick: () => {
                    _(!1),
                    i("login")
                }
                ,
                children: "Войти в аккаунт"
            }), p && e.jsx("p", {
                className: "field-error",
                role: "alert",
                children: p
            })]
        }), w && e.jsxs(ke, {
            title: w === "logout" ? "Выйти из аккаунта?" : w === "session-end" ? E === "others" ? "Выйти на выбранных устройствах?" : "Выйти на этом устройстве?" : w === "nickname" ? "Изменить ник" : "Документ пока недоступен",
            onClose: me,
            children: [e.jsx("p", {
                className: "body-copy",
                children: w === "logout" ? "Номера и баланс останутся в аккаунте." : w === "session-end" ? "На выбранных устройствах для игры в этом аккаунте нужно будет войти снова." : w === "nickname" ? "Новый ник будет использоваться для входа. Номера, баланс и история сохранятся." : "Не удалось открыть документ. Попробуй позднее."
            }), w === "nickname" && e.jsx(Je, {
                id: "profile-nickname",
                label: "Новый ник",
                help: J || "От 3 до 10 символов",
                value: T,
                onChange: Q
            }), p && e.jsx("p", {
                className: "field-error",
                role: "alert",
                children: p
            }), e.jsx("div", {
                className: "sheet-actions",
                children: w === "legal-document" ? e.jsx(b, {
                    secondary: !0,
                    onClick: me,
                    children: "Вернуться"
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsx(b, {
                        loading: !!x,
                        onClick: () => void ne(w === "logout" ? "logout" : w === "nickname" ? "nickname" : "session"),
                        children: w === "logout" ? "Выйти" : w === "nickname" ? "Сохранить" : "Выйти"
                    }), e.jsx(b, {
                        secondary: !0,
                        onClick: me,
                        children: "Отмена"
                    })]
                })
            })]
        })]
    })
}
function Sl({theme: t, onConfirm: s}) {
    const [r,a] = o.useState(t)
      , [i,c] = o.useState("")
      , d = r !== t;
    return e.jsxs("div", {
        className: "theme-choice",
        children: [e.jsx("div", {
            className: "theme-options",
            role: "group",
            "aria-label": "Оформление игры",
            children: ["light", "dark", "game"].map(l => e.jsxs("button", {
                className: r === l ? "selected" : "",
                "aria-pressed": r === l,
                onClick: () => {
                    a(l),
                    c("")
                }
                ,
                children: [e.jsx(ue, {
                    name: l === "light" ? "sun" : l === "game" ? "dice" : "moon",
                    size: 20
                }), e.jsx("span", {
                    children: l === "light" ? "Светлая" : l === "game" ? "Игровая" : "Тёмная"
                }), r === l && e.jsx(ue, {
                    name: "check",
                    size: 16
                })]
            }, l))
        }), e.jsx("p", {
            className: "form-note",
            role: "status",
            children: i || "Оформление изменится после сохранения."
        }), e.jsxs("div", {
            className: "sheet-actions theme-confirmation",
            children: [e.jsx(b, {
                disabled: !d,
                onClick: () => {
                    s(r),
                    c("Оформление сохранено.")
                }
                ,
                children: "Сохранить оформление"
            }), e.jsx(b, {
                secondary: !0,
                disabled: !d,
                onClick: () => {
                    a(t),
                    c("Изменения отменены.")
                }
                ,
                children: "Отмена"
            })]
        })]
    })
}
function hn({p: t, onClick: s, small: r=!1}) {
    return e.jsx("button", {
        className: "history-plate-button",
        onClick: s,
        "aria-label": `Информация и история номера ${t.letters[0]}${t.digits}${t.letters.slice(1)} ${t.region}`,
        children: e.jsx(Qe, {
            p: t,
            small: r
        })
    })
}
function mn({p: t, onClose: s}) {
    const [r,a] = o.useState(!1)
      , {api: i, principalId: c} = he()
      , d = {
        regionCode: t.region,
        digits: t.digits,
        letters: t.letters
    }
      , l = tt(JSON.stringify([c, d]), (m, h) => i.m9.plateHistory({
        ...d,
        cursor: m,
        limit: "50"
    }, h))
      , n = l.data;
    return r ? e.jsx(ke, {
        title: "Редкость номера",
        onClose: () => a(!1),
        children: e.jsx(Gr, {
            onClose: () => a(!1)
        })
    }) : e.jsxs(ke, {
        title: "О номере",
        onClose: s,
        children: [e.jsxs("div", {
            className: "detail-plate",
            children: [e.jsx(Qe, {
                p: t
            }), e.jsx(Ue, {
                p: t,
                onClick: () => a(!0),
                actionLabel: "Справка о редкости номера"
            })]
        }), e.jsx(Wt, {
            p: t
        }), e.jsx(Z, {
            label: "Регион",
            value: t.region + " · " + (zt[t.region] ?? "")
        }), e.jsx(Z, {
            label: "Серия",
            value: t.series ?? "Без серии"
        }), e.jsx(Xt, {
            p: t
        }), e.jsx(b, {
            secondary: !0,
            onClick: () => a(!0),
            children: "Уровни редкости"
        }), e.jsxs("section", {
            className: "sale-history",
            "aria-labelledby": "sale-history-heading",
            children: [e.jsx("h3", {
                id: "sale-history-heading",
                children: "История номера"
            }), l.error ? e.jsx(be, {
                title: "История номера пока недоступна",
                description: ge(l.error, {
                    phase: "read"
                }),
                children: e.jsx(b, {
                    onClick: l.reload,
                    children: "Повторить"
                })
            }) : n ? n.total === "0" ? e.jsx("p", {
                className: "body-copy",
                children: "Этот номер ещё не продавался"
            }) : e.jsxs(e.Fragment, {
                children: [e.jsx("h4", {
                    children: "Рынок и аукционы"
                }), n.metadata.marketAuctionCount === "0" ? e.jsx("p", {
                    className: "body-copy",
                    children: "Продаж на рынке и аукционах пока нет"
                }) : e.jsxs("div", {
                    "data-source": "plate-history",
                    children: [e.jsx(Z, {
                        label: "Продаж",
                        value: e.jsx("span", {
                            "data-field": "sales",
                            children: Oe(n.metadata.marketAuctionCount ?? n.total)
                        })
                    }), n.metadata.latest.meanGameRub && e.jsx(Z, {
                        label: "Средняя цена",
                        value: e.jsxs("span", {
                            "data-field": "average",
                            children: [An(n.metadata.latest.meanGameRub), " ₽"]
                        })
                    }), e.jsx(Z, {
                        label: "Последняя продажа",
                        value: e.jsx("span", {
                            "data-field": "last",
                            children: q(n.metadata.lastPriceGameRub)
                        })
                    }), n.metadata.changePercent && e.jsx(Z, {
                        label: "За 30 дней",
                        value: e.jsxs("span", {
                            "data-field": "change30",
                            children: [An(n.metadata.changePercent), "%"]
                        })
                    })]
                }), e.jsx("h4", {
                    children: "Все сделки"
                }), e.jsx("ol", {
                    className: "sale-history-rows",
                    children: n.items.map(m => e.jsx("li", {
                        children: e.jsx(Z, {
                            label: (m.channel === "DIRECT_TRADE" ? "Личная сделка · " : m.channel === "AUCTION" ? "Аукцион · " : "Рынок · ") + et(m.occurredAt),
                            value: q(m.grossGameRub)
                        })
                    }, m.id))
                }), n.nextCursor && e.jsxs("p", {
                    className: "form-note",
                    ref: l.sentinel,
                    children: ["Показано ", n.items.length, " из ", n.total, " продаж"]
                })]
            }) : e.jsx("p", {
                className: "body-copy",
                "aria-busy": "true",
                children: "Загружаем историю номера…"
            })]
        }), e.jsx(b, {
            secondary: !0,
            onClick: s,
            children: "Понятно"
        })]
    })
}
function Il({route: t, go: s, onTrade: r}) {
    var U, D;
    const {api: a, principalId: i, refreshGame: c, r2Game: d} = he()
      , l = t === "market-mine"
      , [n,m] = o.useState("")
      , [h,w] = o.useState(Pt)
      , [g,x] = o.useState(Pt)
      , [u,p] = o.useState("")
      , [y,v] = o.useState(null)
      , [N,j] = o.useState(null)
      , [k,f] = o.useState("")
      , [C,E] = o.useState(!1)
      , [R,P] = o.useState("")
      , A = o.useRef(!1)
      , I = {
        ...ur(h),
        query: n,
        ...h.min ? {
            minAskGameRub: h.min
        } : {},
        ...h.max ? {
            maxAskGameRub: h.max
        } : {},
        scope: l ? "selling" : "public"
    }
      , T = tt(JSON.stringify([i, I]), ($, te) => a.m9.marketplace({
        ...I,
        cursor: $,
        limit: "50"
    }, te));
    function Q() {
        C || (p(""),
        f(""))
    }
    function F($) {
        p($),
        f("")
    }
    async function X($) {
        if (!(A.current || !y || !i)) {
            A.current = !0,
            E(!0),
            f("");
            try {
                await Ke(i, $, {
                    id: y.id,
                    request: {
                        expectedListingVersion: y.version
                    }
                }, te => He(a, te)),
                await c(),
                p(""),
                P($ === "market-buy" ? "bought" : "delisted"),
                T.reload()
            } catch (te) {
                f(ge(te)),
                $e(i) && p("")
            } finally {
                A.current = !1,
                E(!1)
            }
        }
    }
    function L() {
        w(Pt),
        m("")
    }
    function _() {
        if ([g.min, g.max].some($ => $ && !/^[0-9]{1,19}$/.test($))) {
            f("Введи цену без копеек: 0 или больше.");
            return
        }
        if (g.min && g.max && BigInt(g.min) > BigInt(g.max)) {
            f("Цена «до» не может быть ниже цены «от».");
            return
        }
        w(g),
        Q()
    }
    return e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "page",
            children: [e.jsxs("div", {
                className: "page-heading",
                children: [e.jsx("h1", {
                    children: "Рынок"
                }), e.jsx(b, {
                    quiet: !0,
                    onClick: () => {
                        P(""),
                        s(l ? "market-list" : "market-mine")
                    }
                    ,
                    children: l ? "Все номера" : "Мои объявления"
                })]
            }), e.jsx(it, {
                items: ["Объявления", "Аукционы"],
                value: "Объявления",
                onChange: $ => $ === "Аукционы" && s("auction-list")
            }), R === "bought" && e.jsx(de, {
                title: "Покупка завершена",
                children: e.jsx(b, {
                    quiet: !0,
                    onClick: () => s("collection"),
                    children: "Номер в коллекции"
                })
            }), l ? e.jsx("h2", {
                children: "Мои объявления"
            }) : e.jsxs("div", {
                className: "spread",
                children: [e.jsxs("label", {
                    className: "search",
                    style: {
                        flex: 1
                    },
                    children: [e.jsx(ue, {
                        name: "search",
                        size: 18
                    }), e.jsx("input", {
                        "aria-label": "Поиск на рынке",
                        placeholder: "Номер или регион",
                        value: n,
                        maxLength: 32,
                        onChange: $ => m($.target.value)
                    })]
                }), e.jsx("button", {
                    className: "icon-button",
                    "aria-label": "Фильтры рынка",
                    onClick: () => {
                        x(h),
                        F("filters")
                    }
                    ,
                    children: e.jsx(ue, {
                        name: "filter"
                    })
                })]
            }), T.error ? e.jsx(be, {
                title: "Не удалось загрузить данные",
                description: ge(T.error, {
                    phase: "read"
                }),
                icon: "offline",
                children: e.jsx(b, {
                    onClick: T.reload,
                    children: "Повторить"
                })
            }) : T.busy && !T.data ? e.jsx(jt, {
                label: "Загружаем объявления"
            }) : (U = T.data) != null && U.items.length ? e.jsx("div", {
                className: "asset-list",
                children: T.data.items.map($ => e.jsxs("article", {
                    className: "market-card",
                    children: [e.jsx(hn, {
                        p: at($.plate),
                        small: !0,
                        onClick: () => j(at($.plate))
                    }), e.jsx(Ue, {
                        p: at($.plate)
                    }), e.jsxs("div", {
                        className: "market-prices",
                        children: [e.jsx(kt, {
                            p: at($.plate),
                            label: "Оценка игры",
                            onClick: () => j(at($.plate))
                        }), e.jsx(Z, {
                            label: "Стоимость",
                            value: q($.askGameRub),
                            strong: !0
                        })]
                    }), e.jsx("div", {
                        className: "market-footer",
                        children: e.jsx(b, {
                            className: "full",
                            secondary: $.own,
                            disabled: $.status !== "active",
                            onClick: () => {
                                v($),
                                F($.own ? "delist" : BigInt((d == null ? void 0 : d.balance.amount) ?? "0") < BigInt($.askGameRub) ? "funds" : "buy")
                            }
                            ,
                            children: $.own ? "Снять" : "Купить"
                        })
                    }), $.own && e.jsxs("div", {
                        className: "spread body-copy",
                        style: {
                            width: "100%",
                            fontSize: 12
                        },
                        children: [e.jsx("span", {
                            children: "В продаже"
                        }), e.jsxs("span", {
                            children: ["Ещё ", Kt($.expiresAt)]
                        })]
                    })]
                }, $.id))
            }) : e.jsx(be, {
                title: l ? "Ты пока ничего не продаёшь" : "Ничего не найдено",
                description: l ? "Выставь номер из своей коллекции." : "Попробуй другой поиск или убери фильтры.",
                icon: "market",
                children: e.jsx(b, {
                    onClick: () => l ? F("select-owned") : L(),
                    children: l ? "Выставить номер" : "Сбросить фильтры"
                })
            }), ((D = T.data) == null ? void 0 : D.nextCursor) && e.jsxs("p", {
                className: "form-note",
                ref: T.sentinel,
                children: ["Показано ", T.data.items.length, " из ", T.data.total, " лотов"]
            }), !l && !T.error && e.jsx(b, {
                secondary: !0,
                className: "sale full",
                onClick: () => F("select-owned"),
                children: "Выставить номер"
            })]
        }), u === "select-owned" && e.jsx(Yr, {
            onClose: Q,
            onSelect: $ => {
                Q(),
                r($, "market")
            }
        }), u === "filters" && e.jsxs(ke, {
            title: "Фильтры рынка",
            onClose: Q,
            children: [e.jsx(Kr, {
                market: !0,
                value: g,
                onChange: x,
                onDone: _
            }), k && e.jsx("p", {
                className: "field-error",
                role: "alert",
                children: k
            })]
        }), y && ["buy", "delist", "funds"].includes(u) && e.jsxs(ke, {
            title: u === "delist" ? "Снять номер с продажи?" : u === "funds" ? "Не хватает игровых рублей" : "Купить номер?",
            onClose: Q,
            children: [e.jsxs("div", {
                className: "detail-plate",
                children: [e.jsx(Qe, {
                    p: at(y.plate)
                }), e.jsx(Ue, {
                    p: at(y.plate)
                })]
            }), u === "delist" ? e.jsx("p", {
                className: "body-copy",
                children: "После подтверждения номер снова будет доступен в коллекции."
            }) : e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "market-prices",
                    children: [e.jsx(kt, {
                        p: at(y.plate),
                        label: "Оценка игры"
                    }), e.jsx(Z, {
                        label: "Стоимость",
                        value: q(y.askGameRub),
                        strong: !0
                    })]
                }), u === "funds" && e.jsxs(e.Fragment, {
                    children: [e.jsx(Z, {
                        label: "Текущий баланс",
                        value: q(d == null ? void 0 : d.balance.amount)
                    }), e.jsx(Z, {
                        label: "Не хватает",
                        value: q(BigInt(y.askGameRub) - BigInt((d == null ? void 0 : d.balance.amount) ?? "0"))
                    })]
                })]
            }), e.jsxs("div", {
                className: "sheet-actions",
                children: [e.jsx(b, {
                    loading: C,
                    onClick: () => u === "funds" ? (Q(),
                    s("store-packs")) : void X(u === "delist" ? "market-delist" : "market-buy"),
                    children: u === "delist" ? "Снять с продажи" : u === "funds" ? "Пополнить баланс" : "Купить"
                }), e.jsx(b, {
                    secondary: !0,
                    disabled: C,
                    onClick: Q,
                    children: "Отмена"
                })]
            }), k && e.jsx("p", {
                className: "field-error",
                role: "alert",
                children: k
            })]
        }), N && e.jsx(mn, {
            p: N,
            onClose: () => j(null)
        })]
    })
}
function Yr({onClose: t, onSelect: s, auction: r=!1}) {
    var l, n;
    const {api: a, principalId: i} = he()
      , c = tt(JSON.stringify([i, "owned-picker"]), (m, h) => a.m9.collection({
        cursor: m,
        limit: "50",
        lock: "free"
    }, h))
      , d = (((l = c.data) == null ? void 0 : l.items) ?? []).filter(m => r ? !m.operationLock : m.actions.marketplaceList);
    return e.jsxs(ke, {
        title: "Выбрать свой номер",
        onClose: t,
        children: [e.jsxs("p", {
            className: "body-copy",
            children: ["Номера, которые можно выставить ", r ? "на аукцион" : "на продажу", "."]
        }), c.error ? e.jsx(be, {
            title: "Не удалось загрузить коллекцию",
            description: ge(c.error, {
                phase: "read"
            }),
            children: e.jsx(b, {
                onClick: c.reload,
                children: "Повторить"
            })
        }) : c.busy && !c.data ? e.jsx(jt, {
            compact: !0,
            label: "Загружаем свои номера"
        }) : e.jsx("div", {
            className: "asset-list",
            children: d.map(m => e.jsx(Ur, {
                item: m,
                onClick: () => s(m)
            }, m.plateId))
        }), !c.busy && !d.length && !c.error && e.jsx("p", {
            children: "Нет доступных номеров."
        }), ((n = c.data) == null ? void 0 : n.nextCursor) && e.jsxs("p", {
            className: "form-note",
            ref: c.sentinel,
            children: ["Показано ", c.data.items.length, " из ", c.data.total, " номеров"]
        })]
    })
}
function Rl({id: t, initialCancel: s=!1, go: r, onBack: a}) {
    var J, W, z, ce, xe;
    const {api: i, principalId: c, r2Game: d, refreshGame: l} = he()
      , n = Me(JSON.stringify([c, t]), re => i.auction(t, re), !0, !0)
      , m = tt(JSON.stringify([c, t, "bids"]), (re, me) => i.auctionBids(t, {
        cursor: re,
        limit: "50"
    }, me))
      , [h,w] = o.useState(s ? "cancel" : "")
      , [g,x] = o.useState(null)
      , [u,p] = o.useState("")
      , [y,v] = o.useState(!1)
      , [N,j] = o.useState("")
      , [k,f] = o.useState(!1)
      , [C,E] = o.useState(!1)
      , R = o.useRef(!1)
      , P = o.useRef({
        observed: Date.now(),
        received: performance.now()
    })
      , [A,I] = o.useState(Date.now())
      , T = Ar(["auction-bid"], t, !!((J = n.data) != null && J.auction));
    async function Q() {
        if (!(R.current || !c)) {
            R.current = !0,
            v(!0),
            j("");
            try {
                await Ke(c, "", {}, re => He(i, re), !0),
                await l(),
                n.reload(),
                m.reload()
            } catch (re) {
                j(ge(re))
            } finally {
                R.current = !1,
                v(!1)
            }
        }
    }
    const F = (W = n.data) == null ? void 0 : W.auction
      , X = F ? at(F.plate) : null
      , L = F && ["SETTLED", "CANCELLED", "CLOSED_NO_BID"].includes(F.state)
      , _ = (F == null ? void 0 : F.relationship) === "seller"
      , U = d == null ? void 0 : d.balance.amount;
    o.useEffect( () => {
        n.data && (P.current = {
            observed: Date.parse(n.data.serverObservedAt),
            received: performance.now()
        },
        I(P.current.observed))
    }
    , [n.data]),
    o.useEffect( () => {
        const re = setInterval( () => {
            document.visibilityState === "visible" && I(P.current.observed + performance.now() - P.current.received)
        }
        , 1e3);
        return () => clearInterval(re)
    }
    , []),
    o.useEffect( () => {
        const re = setInterval( () => {
            document.visibilityState === "visible" && !R.current && !h && (n.reload(),
            m.reload())
        }
        , 15e3);
        return () => clearInterval(re)
    }
    , [h]);
    function D() {
        y || (w(""),
        j(""),
        x(null))
    }
    function $(re) {
        x(F ?? null),
        p((F == null ? void 0 : F.minimumNextBidGameRub) ?? ""),
        j(""),
        w(re)
    }
    async function te(re) {
        const me = g ?? F;
        if (!(R.current || !me || !c)) {
            if (re === "auction-bid" && (!/^[1-9][0-9]{0,18}$/.test(u) || !me.minimumNextBidGameRub || BigInt(u) < BigInt(me.minimumNextBidGameRub))) {
                j("Минимальная ставка — " + q(me.minimumNextBidGameRub));
                return
            }
            R.current = !0,
            v(!0),
            j("");
            try {
                const ne = await Ke(c, re, {
                    id: t,
                    request: {
                        expectedAuctionVersion: me.version,
                        ...re === "auction-bid" ? {
                            amountGameRub: u
                        } : {}
                    }
                }, ie => He(i, ie));
                re === "auction-bid" && ne && "endAt" in ne && E(new Date(String(ne.endAt)).getTime() > new Date(me.endAt).getTime()),
                await l(),
                n.reload(),
                m.reload(),
                w(""),
                x(null)
            } catch (ne) {
                j(ge(ne)),
                $e(c) && w("")
            } finally {
                R.current = !1,
                v(!1)
            }
        }
    }
    if (!F || !X)
        return e.jsxs("div", {
            className: "page",
            children: [e.jsxs("div", {
                className: "page-heading",
                children: [e.jsx("h1", {
                    children: "Аукцион"
                }), e.jsx(b, {
                    quiet: !0,
                    icon: "back",
                    onClick: a,
                    children: "К списку"
                })]
            }), e.jsx(e.Fragment, {
                children: n.error ? e.jsx(be, {
                    title: n.error ? "Не удалось загрузить данные" : "Загружаем аукцион",
                    description: n.error ? ge(n.error, {
                        phase: "read"
                    }) : void 0,
                    icon: "market",
                    children: !!n.error && e.jsx(b, {
                        onClick: n.reload,
                        children: "Повторить"
                    })
                }) : e.jsx(jt, {
                    label: "Загружаем аукцион"
                })
            })]
        });
    const O = F.relationship === "leader"
      , B = !!d && !O && d.collection.used >= d.collection.capacity
      , K = U !== void 0 && F.minimumNextBidGameRub !== null && BigInt(U) < BigInt(F.minimumNextBidGameRub)
      , S = g ?? F
      , M = !T && F.acceptingBids && !_ && (F.canBid || U !== void 0 && F.minimumNextBidGameRub !== null && BigInt(U) < BigInt(F.minimumNextBidGameRub));
    return e.jsxs("div", {
        className: "page",
        children: [e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "Аукцион"
            }), e.jsx(b, {
                quiet: !0,
                icon: "back",
                onClick: a,
                children: "К списку"
            })]
        }), e.jsxs("div", {
            className: "detail-plate",
            children: [e.jsx(hn, {
                p: X,
                onClick: () => f(!0)
            }), e.jsx(Ue, {
                p: X,
                onClick: () => f(!0)
            })]
        }), e.jsx(kt, {
            p: X,
            onClick: () => f(!0)
        }), e.jsxs("div", {
            className: "detail-price",
            children: [e.jsx("span", {
                children: L ? F.state === "CANCELLED" || F.state === "CLOSED_NO_BID" ? "Стартовая цена" : "Итоговая ставка" : F.currentBidGameRub ? "Текущая ставка" : "Стартовая ставка"
            }), e.jsx("b", {
                children: q(F.currentBidGameRub ?? F.startGameRub)
            })]
        }), e.jsxs("div", {
            children: [e.jsx(Z, {
                label: "Продавец",
                value: (_ ? "Вы · " : "") + F.sellerNickname
            }), e.jsx(Z, {
                label: "До завершения",
                value: L ? "Завершён" : Kt(F.endAt, A)
            }), !L && e.jsx(Z, {
                label: "Следующая ставка от",
                value: q(F.minimumNextBidGameRub)
            })]
        }), C && !L ? e.jsx(de, {
            title: "Ставка принята. Время продлено",
            children: "До конца снова 5 минут."
        }) : !L && F.relationship === "leader" ? e.jsxs(de, {
            title: "Ты лидируешь",
            children: ["Твоя ставка принята. Отозвать её нельзя.", e.jsxs("p", {
                className: "reservation-line",
                children: [e.jsx(ue, {
                    name: "check",
                    size: 14
                }), "Место для этого номера уже занято"]
            })]
        }) : !L && F.relationship === "bidder" ? e.jsxs(de, {
            title: "Твою ставку перебили",
            children: [F.leaderNickname ?? "Игрок", " поставил ", q(F.currentBidGameRub), ". Предыдущая сумма возвращена."]
        }) : null, !L && !_ && F.state !== "SETTLING" && O && e.jsxs(de, {
            title: "Ты уже лидируешь",
            children: ["Для повышения на балансе нужна вся новая ставка. Предыдущая ставка ", q(F.currentBidGameRub), " вернётся после принятия новой. Место для этого номера уже занято."]
        }), !L && !_ && F.state !== "SETTLING" && K && e.jsxs(de, {
            title: "Не хватает игровых рублей на ставку",
            children: ["На балансе ", q(U), ". Для ставки нужно ", q(F.minimumNextBidGameRub), ". Не хватает ", q(BigInt(F.minimumNextBidGameRub) - BigInt(U)), ". На балансе нужна вся новая ставка, а не только прибавка."]
        }), !L && !_ && F.state !== "SETTLING" && B && e.jsxs(de, {
            title: "Нет места для выигрыша",
            children: ["Занято ", d == null ? void 0 : d.collection.used, " из ", d == null ? void 0 : d.collection.capacity, " мест. Для этого номера нужно ещё одно свободное место в коллекции."]
        }), !L && O && !!d && d.collection.used >= d.collection.capacity && e.jsx(de, {
            title: "Место для этого номера уже занято",
            children: "Для повышения ставки второе место не нужно. Но на балансе должна быть вся новая ставка."
        }), T ? e.jsxs(e.Fragment, {
            children: [e.jsxs(de, {
                title: "Проверяем результат ставки",
                children: ["Ждём ответ по твоей ставке. Не делай новую, пока не проверишь результат.", e.jsx(b, {
                    quiet: !0,
                    loading: y,
                    onClick: () => void Q(),
                    children: "Проверить результат"
                })]
            }), e.jsx(b, {
                secondary: !0,
                onClick: () => r("auction-my-bids"),
                children: "Мои ставки"
            })]
        }) : L ? e.jsxs(e.Fragment, {
            children: [e.jsx(de, {
                title: F.state === "CANCELLED" ? "Аукцион отменён" : F.state === "CLOSED_NO_BID" ? "Аукцион завершён без ставок" : F.relationship === "leader" ? "Ты выиграл аукцион" : _ ? "Номер продан на аукционе" : "Аукцион завершён",
                children: F.state === "CANCELLED" || F.state === "CLOSED_NO_BID" ? "Номер снова доступен в коллекции." : F.relationship === "leader" ? "Номер добавлен в коллекцию." : _ ? "Ты получил полную итоговую ставку — " + q((z = F.terminal) == null ? void 0 : z.sellerProceedsGameRub) + "." : `Победил ${F.leaderNickname ?? "игрок"}.${F.relationship === "bidder" ? " Твоя ставка возвращена." : ""}`
            }), e.jsx(b, {
                onClick: () => F.relationship === "leader" ? r("collection") : a(),
                children: F.relationship === "leader" ? "Открыть коллекцию" : "К аукционам"
            })]
        }) : F.state === "SETTLING" ? e.jsx(de, {
            title: "Подводим итоги аукциона",
            children: "Победитель и результат появятся после проверки."
        }) : _ ? e.jsxs(e.Fragment, {
            children: [e.jsx(de, {
                title: "Твой аукцион",
                children: F.bidCount === "0" ? "Пока нет ставок, аукцион можно отменить." : "Ставка принята. Отменить аукцион уже нельзя."
            }), F.bidCount === "0" && e.jsx(b, {
                secondary: !0,
                disabled: !F.canCancel,
                onClick: () => $("cancel"),
                children: "Отменить аукцион"
            })]
        }) : e.jsxs("div", {
            className: "stack",
            children: [e.jsxs(b, {
                className: "price-button",
                disabled: !M,
                onClick: () => $(U !== void 0 && F.minimumNextBidGameRub !== null && BigInt(U) < BigInt(F.minimumNextBidGameRub) ? "funds" : "bid"),
                children: ["Поставить ", q(F.minimumNextBidGameRub)]
            }), e.jsx(b, {
                quiet: !0,
                disabled: !M,
                onClick: () => $("custom"),
                children: "Другая сумма"
            })]
        }), e.jsxs("div", {
            className: "auction-bids",
            children: [e.jsx("h3", {
                children: "Последние ставки"
            }), m.error ? e.jsx("p", {
                className: "body-copy",
                children: ge(m.error, {
                    phase: "read"
                })
            }) : (ce = m.data) != null && ce.items.length ? m.data.items.map(re => e.jsx(Z, {
                label: re.own ? "Вы" : re.bidderNickname,
                value: q(re.amountGameRub)
            }, re.id)) : e.jsx("p", {
                className: "body-copy",
                children: m.busy ? "Загружаем ставки…" : "Ставок пока нет."
            }), ((xe = m.data) == null ? void 0 : xe.nextCursor) && e.jsx("p", {
                className: "form-note",
                ref: m.sentinel,
                children: "Загружаем следующие ставки…"
            })]
        }), e.jsx(b, {
            quiet: !0,
            onClick: () => $("rules"),
            children: "Условия аукциона"
        }), h && e.jsx(ke, {
            artwork: "auction",
            title: h === "custom" ? "Другая сумма" : h === "bid" ? O ? `Повысить ставку до ${q(u)}?` : "Подтвердить ставку" : h === "cancel" ? "Отменить аукцион?" : h === "funds" ? "Не хватает игровых рублей" : "Условия аукциона",
            onClose: D,
            children: h === "rules" ? e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    children: [e.jsx(Z, {
                        label: "Длительность",
                        value: "1 / 3 / 6 / 12 / 24 ч"
                    }), e.jsx(Z, {
                        label: "Шаг ставки",
                        value: "+50 000 ₽"
                    }), e.jsx(Z, {
                        label: "Получает продавец",
                        value: "100% итоговой ставки"
                    })]
                }), e.jsxs("div", {
                    className: "stack body-copy",
                    children: [e.jsx("p", {
                        children: "Если в последние 5 минут игрок перебьёт ставку, таймер снова покажет 5 минут. Первая ставка не продлевает аукцион. Число таких продлений не ограничено."
                    }), e.jsx("p", {
                        children: "Нельзя ставить на свой номер и отзывать принятую ставку."
                    }), e.jsx("p", {
                        children: "Продавец может отменить аукцион, пока нет ни одной принятой ставки."
                    })]
                }), e.jsx(b, {
                    secondary: !0,
                    onClick: D,
                    children: "Понятно"
                })]
            }) : e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "detail-plate",
                    children: [e.jsx(_t, {
                        p: X
                    }), e.jsx(Ue, {
                        p: X
                    })]
                }), h === "cancel" ? e.jsx("p", {
                    className: "body-copy",
                    children: "Номер вернётся в коллекцию. Плата за создание аукциона не вернётся."
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsx(Z, {
                        label: "Следующая ставка от",
                        value: q(S.minimumNextBidGameRub)
                    }), h === "custom" && e.jsx(Je, {
                        id: "bid-amount",
                        label: "Твоя ставка, ₽",
                        type: "amount",
                        value: u,
                        onChange: re => {
                            p(re),
                            j("")
                        }
                        ,
                        error: N || void 0
                    }), e.jsx(Z, {
                        label: "Текущий баланс",
                        value: q(U)
                    }), h === "bid" && e.jsx(Z, {
                        label: O ? "Вся новая ставка" : "Временно уйдёт на ставку",
                        value: q(u),
                        strong: !0
                    }), O && e.jsxs(e.Fragment, {
                        children: [e.jsx(Z, {
                            label: "Вернётся предыдущая ставка",
                            value: q(S.currentBidGameRub)
                        }), e.jsx(Z, {
                            label: "Место в коллекции",
                            value: "Уже занято для этого номера"
                        })]
                    }), e.jsxs("p", {
                        className: "body-copy",
                        children: [O && e.jsxs(e.Fragment, {
                            children: ["На балансе нужна вся новая ставка — ", q(u), ". После её принятия предыдущая ставка ", q(S.currentBidGameRub), " вернётся на баланс. Ещё одно место в коллекции не нужно. "]
                        }), "Принятую ставку нельзя отменить. Если другой игрок её перебьёт, игровые рубли вернутся на баланс."]
                    })]
                }), e.jsxs("div", {
                    className: "sheet-actions",
                    children: [e.jsx(b, {
                        loading: y,
                        disabled: h === "cancel" && !S.canCancel,
                        onClick: () => h === "funds" ? (D(),
                        r("store-packs")) : void te(h === "cancel" ? "auction-cancel" : "auction-bid"),
                        children: h === "cancel" ? "Отменить аукцион" : h === "funds" ? "Пополнить баланс" : "Поставить " + q(u)
                    }), e.jsx(b, {
                        secondary: !0,
                        disabled: y,
                        onClick: D,
                        children: "Отмена"
                    })]
                }), N && h !== "custom" && e.jsx("p", {
                    className: "field-error",
                    role: "alert",
                    children: N
                })]
            })
        }), k && e.jsx(mn, {
            p: X,
            onClose: () => f(!1)
        })]
    })
}
const qt = () => ({
    regions: [],
    rarity: "Все",
    min: "",
    max: "",
    hours: "0",
    sort: "Скоро закончатся"
})
  , js = t => ["SETTLED", "CANCELLED", "CLOSED_NO_BID"].includes(t.state);
function Ll(t) {
    return {
        id: t.id,
        plate: at(t.plate),
        own: t.relationship === "seller",
        price: t.currentBidGameRub ?? t.startGameRub,
        bids: t.bidCount === "0" ? null : t.bidCount,
        time: js(t) ? "Завершён" : t.state === "SETTLING" ? "Подводим итоги" : Kt(t.endAt),
        reservation: !js(t) && t.relationship === "leader",
        myBid: null,
        status: t.state === "CANCELLED" ? "cancelled" : t.state === "CLOSED_NO_BID" ? "closed" : t.state === "SETTLED" ? t.relationship === "leader" ? "won" : t.relationship === "seller" ? "sold" : "lost" : t.relationship === "leader" ? "leading" : t.relationship === "bidder" ? "outbid" : "active"
    }
}
const ls = t => ["won", "lost", "sold", "cancelled", "closed"].includes(t.status);
function Al({route: t, go: s, onTrade: r}) {
    var K;
    const {api: a, principalId: i, r2GameConfig: c} = he()
      , d = t.startsWith("auction-my-bids") ? "Мои ставки" : t.startsWith("auction-my-lots") ? "Мои аукционы" : "Все"
      , l = /^auction-(cancel-)?target-([0-9a-f-]{36})$/.exec(t)
      , [n,m] = o.useState("Активные")
      , [h,w] = o.useState("")
      , [g,x] = o.useState(qt)
      , [u,p] = o.useState(qt)
      , [y,v] = o.useState(!1)
      , [N,j] = o.useState("")
      , [k,f] = o.useState("")
      , [C,E] = o.useState(null)
      , [R,P] = o.useState(null)
      , [A,I] = o.useState(!1)
      , [,T] = o.useState(0);
    o.useEffect( () => {
        const S = setInterval( () => {
            document.visibilityState === "visible" && T(M => M + 1)
        }
        , 15e3);
        return () => clearInterval(S)
    }
    , []);
    const Q = ((c == null ? void 0 : c.regionCatalogue) ?? []).map(S => ({
        code: S.regionCode,
        name: zt[S.regionCode] ?? S.regionCode
    }))
      , F = ["GRAY", "BLUE", "PURPLE", "RED", "GOLD"]
      , X = Object.values(Fe).findIndex(S => S.label === g.rarity)
      , L = {
        scope: d === "Все" ? "public" : d === "Мои аукционы" ? "selling" : "bidding",
        ...d === "Все" ? {
            query: h,
            ...g.regions.length ? {
                regionCodes: g.regions.join(",")
            } : {},
            ...X >= 0 ? {
                displayTier: F[X]
            } : {},
            ...g.min ? {
                minBidGameRub: g.min
            } : {},
            ...g.max ? {
                maxBidGameRub: g.max
            } : {},
            sort: g.sort === "Новые" ? "new" : g.sort === "Сначала дешевле" ? "price" : g.sort === "Сначала дороже" ? "priceDesc" : "ending"
        } : {
            sort: "new"
        }
    }
      , _ = tt(JSON.stringify([i, L]), async (S, M) => {
        const J = await a.m9.auctions({
            ...L,
            limit: "50"
        }, M);
        let W = J.nextCursor;
        const z = [...J.items]
          , ce = new Set;
        for (; W; ) {
            if (ce.has(W))
                throw new Error("Повтор страницы аукционов");
            ce.add(W);
            const xe = await a.m9.auctions({
                ...L,
                cursor: W,
                limit: "50"
            }, M);
            if (xe.snapshotId !== J.snapshotId)
                throw new Error("Снимок аукционов изменился");
            z.push(...xe.items),
            W = xe.nextCursor
        }
        return {
            ...J,
            items: z,
            nextCursor: null
        }
    }
    )
      , U = (((K = _.data) == null ? void 0 : K.items) ?? []).filter(S => d === "Все" || (n === "Завершённые" ? js(S) : !js(S))).map(Ll)
      , D = g.regions.length > 0 || g.rarity !== "Все" || !!g.min || !!g.max || g.sort !== qt().sort;
    function $() {
        x(qt()),
        p(qt()),
        w(""),
        f("")
    }
    function te() {
        if ([u.min, u.max].some(S => S && !/^[0-9]{1,19}$/.test(S))) {
            f("Введи цену без копеек: 0 или больше.");
            return
        }
        if (u.regions.length > 20) {
            f("Можно выбрать не больше 20 регионов.");
            return
        }
        if (u.min && u.max && BigInt(u.min) > BigInt(u.max)) {
            f("Цена «до» не может быть ниже цены «от».");
            return
        }
        x(u),
        f(""),
        v(!1)
    }
    function O(S, M=!1) {
        E({
            id: S,
            cancel: M
        })
    }
    const B = l ? {
        id: l[2],
        cancel: !!l[1]
    } : C;
    return B ? e.jsx(Rl, {
        id: B.id,
        initialCancel: B.cancel,
        go: s,
        onBack: () => {
            E(null),
            l ? s("auction-list") : _.reload()
        }
    }, B.id) : e.jsxs("div", {
        className: "page v2-auctions",
        children: [e.jsx("div", {
            className: "page-heading",
            children: e.jsx("h1", {
                children: "Рынок"
            })
        }), e.jsx(it, {
            items: ["Объявления", "Аукционы"],
            value: "Аукционы",
            onChange: S => S === "Объявления" && s("market-list")
        }), e.jsx(it, {
            items: ["Все", "Мои ставки", "Мои аукционы"],
            value: d,
            onChange: S => s(S === "Все" ? "auction-list" : S === "Мои ставки" ? "auction-my-bids" : "auction-my-lots"),
            label: "Аукционы"
        }), d !== "Все" ? e.jsx(sr, {
            items: ["Активные", "Завершённые"],
            value: n,
            onChange: m,
            label: "Состояние аукционов"
        }) : e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "spread",
                children: [e.jsxs("label", {
                    className: "search auction-search",
                    children: [e.jsx(ue, {
                        name: "search",
                        size: 18
                    }), e.jsx("input", {
                        "aria-label": "Поиск номера",
                        placeholder: "Поиск номера",
                        value: h,
                        onChange: S => w(S.target.value)
                    })]
                }), e.jsx("button", {
                    className: `icon-button ${D ? "active-filter" : ""}`,
                    "aria-label": D ? "Фильтры аукционов, применены" : "Фильтры аукционов",
                    onClick: () => {
                        p(g),
                        f(""),
                        v(!0)
                    }
                    ,
                    children: e.jsx(ue, {
                        name: "filter"
                    })
                })]
            }), D && e.jsxs("div", {
                className: "spread",
                children: [e.jsxs("span", {
                    className: "form-note",
                    children: ["Фильтры применены · найдено: ", U.length]
                }), e.jsx(b, {
                    quiet: !0,
                    onClick: $,
                    children: "Сбросить"
                })]
            })]
        }), e.jsxs("div", {
            className: "spread",
            children: [e.jsx("span", {
                className: "minor-title",
                children: d === "Все" ? "Активные лоты" : n === "Активные" ? "Идут сейчас" : "Завершённые аукционы"
            }), e.jsx(b, {
                quiet: !0,
                onClick: () => I(!0),
                children: "Создать аукцион"
            })]
        }), _.error ? e.jsx(be, {
            title: "Не удалось загрузить данные",
            description: ge(_.error, {
                phase: "read"
            }),
            icon: "offline",
            children: e.jsx(b, {
                onClick: _.reload,
                children: "Повторить"
            })
        }) : _.busy && !_.data ? e.jsx(jt, {
            label: "Загружаем аукционы"
        }) : U.length ? e.jsx("div", {
            className: "asset-list",
            children: U.map(S => e.jsxs("article", {
                className: "auction-card v2-auction-card",
                "data-lot-id": S.id,
                children: [e.jsx(hn, {
                    p: S.plate,
                    small: !0,
                    onClick: () => P(S.plate)
                }), e.jsx(Ue, {
                    p: S.plate
                }), e.jsx(kt, {
                    p: S.plate,
                    onClick: () => P(S.plate)
                }), e.jsxs("button", {
                    className: "auction-open",
                    onClick: () => O(S.id),
                    "aria-label": `Открыть аукцион ${S.plate.letters[0]}${S.plate.digits}${S.plate.letters.slice(1)} ${S.plate.region}`,
                    children: [e.jsxs("div", {
                        className: "spread",
                        children: [e.jsxs("div", {
                            children: [e.jsx("small", {
                                children: S.status === "cancelled" ? "Стартовая цена" : ls(S) ? "Финальная цена" : S.bids ? "Текущая ставка" : "Стартовая цена"
                            }), e.jsx("b", {
                                className: "bid-number",
                                children: q(S.price)
                            })]
                        }), e.jsx("div", {
                            className: "time",
                            children: e.jsx("b", {
                                children: S.time
                            })
                        })]
                    }), S.status === "leading" && e.jsx("p", {
                        className: "auction-state",
                        children: "Ты лидируешь"
                    }), S.status === "outbid" && e.jsxs(e.Fragment, {
                        children: [e.jsx("p", {
                            className: "auction-state",
                            children: "Твою ставку перебили"
                        }), e.jsxs("p", {
                            className: "body-copy",
                            children: ["Твоя ставка: ", q(S.myBid)]
                        })]
                    }), S.status === "won" && e.jsx("p", {
                        className: "auction-state",
                        children: "Ты выиграл"
                    }), S.status === "lost" && e.jsx("p", {
                        className: "body-copy",
                        children: "Аукцион завершён"
                    }), S.status === "sold" && e.jsx("p", {
                        className: "body-copy",
                        children: "Номер продан"
                    }), S.status === "cancelled" && e.jsx("p", {
                        className: "body-copy",
                        children: "Аукцион отменён"
                    }), S.own && !ls(S) && e.jsx("p", {
                        className: "body-copy",
                        children: S.bids ? `Ставок: ${S.bids}` : "Ставок пока нет"
                    }), S.reservation && !ls(S) && e.jsxs("p", {
                        className: "reservation-line",
                        children: [e.jsx(ue, {
                            name: "check",
                            size: 14
                        }), "Место для выигрыша занято"]
                    })]
                }), S.own && !ls(S) && (S.bids ? e.jsx("p", {
                    className: "form-note",
                    children: "Есть ставка. Отменить аукцион больше нельзя."
                }) : e.jsx(b, {
                    secondary: !0,
                    onClick: () => O(S.id, !0),
                    children: "Отменить аукцион"
                }))]
            }, S.id))
        }) : e.jsx(be, {
            title: h || D ? "Ничего не найдено" : d === "Все" ? "Пока нет активных аукционов" : d === "Мои ставки" ? "Здесь будут твои ставки" : n === "Завершённые" ? "Нет завершённых аукционов" : "У тебя пока нет аукционов",
            description: h || D ? "Попробуй изменить поиск или фильтры." : void 0,
            icon: "market",
            children: (h || D || d !== "Все") && e.jsx(b, {
                onClick: () => h || D ? $() : s("auction-list"),
                children: h || D ? "Сбросить поиск и фильтры" : "Все аукционы"
            })
        }), y && e.jsxs(ke, {
            title: "Фильтры аукционов",
            onClose: () => v(!1),
            children: [e.jsxs("fieldset", {
                className: "auction-region-field",
                children: [e.jsx("legend", {
                    children: "Регион"
                }), e.jsxs("label", {
                    className: "search",
                    children: [e.jsx(ue, {
                        name: "search",
                        size: 18
                    }), e.jsx("input", {
                        "aria-label": "Найти регион в фильтрах",
                        placeholder: "Код или название региона",
                        value: N,
                        onChange: S => j(S.target.value)
                    })]
                }), e.jsx("div", {
                    className: "auction-region-options",
                    children: Q.filter(S => `${S.code} ${S.name}`.toLowerCase().includes(N.toLowerCase())).map(S => e.jsxs("label", {
                        children: [e.jsx("input", {
                            type: "checkbox",
                            checked: u.regions.includes(S.code),
                            onChange: M => p({
                                ...u,
                                regions: M.target.checked ? [...u.regions, S.code] : u.regions.filter(J => J !== S.code)
                            })
                        }), e.jsxs("span", {
                            children: [S.code, " · ", S.name]
                        })]
                    }, S.code))
                }), e.jsx("span", {
                    className: "form-note",
                    children: u.regions.length ? `Выбрано регионов: ${u.regions.length}` : "Все регионы"
                })]
            }), e.jsxs("label", {
                className: "field",
                children: [e.jsx("span", {
                    children: "Редкость"
                }), e.jsx("select", {
                    "aria-label": "Редкость",
                    value: u.rarity,
                    onChange: S => p({
                        ...u,
                        rarity: S.target.value
                    }),
                    children: ["Все", ...Object.values(Fe).map(S => S.label)].map(S => e.jsx("option", {
                        children: S
                    }, S))
                })]
            }), e.jsxs("div", {
                className: "form-grid",
                children: [e.jsx(Je, {
                    id: "auction-price-min",
                    label: "Цена от, ₽",
                    type: "amount",
                    value: u.min,
                    onChange: S => p({
                        ...u,
                        min: S
                    }),
                    required: !1
                }), e.jsx(Je, {
                    id: "auction-price-max",
                    label: "Цена до, ₽",
                    type: "amount",
                    value: u.max,
                    onChange: S => p({
                        ...u,
                        max: S
                    }),
                    error: k,
                    required: !1
                })]
            }), e.jsxs("label", {
                className: "field",
                children: [e.jsx("span", {
                    children: "До окончания"
                }), e.jsx("select", {
                    "aria-label": "До окончания",
                    value: u.hours,
                    onChange: S => p({
                        ...u,
                        hours: S.target.value
                    }),
                    children: [["0", "Любое время"], ["1", "До 1 часа"], ["3", "До 3 часов"], ["12", "До 12 часов"], ["24", "До 24 часов"]].map( ([S,M]) => e.jsx("option", {
                        value: S,
                        disabled: S !== "0",
                        children: M
                    }, S))
                })]
            }), e.jsxs("label", {
                className: "field",
                children: [e.jsx("span", {
                    children: "Сортировка"
                }), e.jsx("select", {
                    "aria-label": "Сортировка",
                    value: u.sort,
                    onChange: S => p({
                        ...u,
                        sort: S.target.value
                    }),
                    children: ["Скоро закончатся", "Новые", "Сначала дешевле", "Сначала дороже"].map(S => e.jsx("option", {
                        children: S
                    }, S))
                })]
            }), e.jsx(b, {
                onClick: te,
                children: "Показать аукционы"
            }), e.jsx(b, {
                quiet: !0,
                onClick: $,
                children: "Сбросить фильтры"
            })]
        }), R && e.jsx(mn, {
            p: R,
            onClose: () => P(null)
        }), A && e.jsx(Yr, {
            auction: !0,
            onClose: () => I(!1),
            onSelect: S => {
                I(!1),
                r(S, "auction")
            }
        })]
    })
}
function Pl({item: t, kind: s, onClose: r, onComplete: a}) {
    const {api: i, principalId: c, refreshGame: d} = he()
      , l = ln(t)
      , n = s === "auction"
      , [m,h] = o.useState("")
      , [w,g] = o.useState(1)
      , [x,u] = o.useState(null)
      , [p,y] = o.useState(null)
      , [v,N] = o.useState(!1)
      , [j,k] = o.useState("")
      , f = o.useRef(!1)
      , C = o.useRef(0)
      , E = n ? (p == null ? void 0 : p.plateId) === t.plateId && p.startGameRub === m && p.durationHours === w : (x == null ? void 0 : x.plateId) === t.plateId && x.askGameRub === m;
    function R(A, I=w) {
        C.current++,
        h(A),
        g(I),
        u(null),
        y(null),
        k("")
    }
    async function P() {
        if (f.current || !c)
            return;
        if (!/^[1-9][0-9]{0,18}$/.test(m)) {
            k("Введи сумму без копеек, больше 0.");
            return
        }
        f.current = !0,
        N(!0),
        k("");
        const A = C.current;
        try {
            if (E) {
                if (n) {
                    if (!p || Date.parse(p.expiresAt) <= Date.now()) {
                        y(null),
                        k("Расчёт устарел. Проверь цену и комиссию ещё раз.");
                        return
                    }
                    await Ke(c, "auction-create", {
                        plateId: t.plateId,
                        expectedPlateVersion: p.expectedPlateVersion,
                        startGameRub: p.startGameRub,
                        durationHours: p.durationHours,
                        quoteId: p.quoteId
                    }, I => He(i, I))
                } else
                    await Ke(c, "market-list", {
                        plateId: t.plateId,
                        expectedPlateVersion: t.version,
                        askGameRub: x.askGameRub,
                        expectedPublicationFeeGameRub: x.publicationFeeGameRub
                    }, I => He(i, I));
                await d(),
                a()
            } else if (n) {
                const I = await i.auctionCreationPreview({
                    plateId: t.plateId,
                    expectedPlateVersion: t.version,
                    startGameRub: m,
                    durationHours: w
                });
                A === C.current && y(I)
            } else {
                const I = await i.marketPublicationPreview({
                    plateId: t.plateId,
                    askGameRub: m
                });
                A === C.current && u(I)
            }
        } catch (I) {
            k(ge(I)),
            u(null),
            y(null),
            $e(c) && r()
        } finally {
            f.current = !1,
            N(!1)
        }
    }
    return e.jsxs(ke, {
        title: n ? "Создать аукцион" : "Выставить номер",
        onClose: () => {
            v || r()
        }
        ,
        children: [e.jsxs("div", {
            className: "detail-plate",
            children: [e.jsx(_t, {
                p: l
            }), e.jsx(Ue, {
                p: l
            })]
        }), e.jsxs("form", {
            className: "stack",
            onSubmit: A => {
                A.preventDefault(),
                P()
            }
            ,
            children: [e.jsx(kt, {
                p: l
            }), e.jsx(Je, {
                id: "listing-price",
                label: n ? "Стартовая ставка · игровые рубли" : "Цена продажи · игровые рубли",
                type: "amount",
                value: m,
                onChange: R,
                error: j || void 0
            }), n ? e.jsxs("div", {
                className: "stack",
                children: [e.jsx("span", {
                    className: "minor-title",
                    children: "Длительность"
                }), e.jsx("div", {
                    className: "duration-options",
                    role: "group",
                    "aria-label": "Длительность аукциона",
                    children: [1, 3, 6, 12, 24].map(A => e.jsxs("button", {
                        type: "button",
                        className: w === A ? "active" : "",
                        "aria-pressed": w === A,
                        disabled: v,
                        onClick: () => R(m, A),
                        children: [A, " ч"]
                    }, A))
                })]
            }) : e.jsx(Z, {
                label: "Срок",
                value: E ? `${x.listingDurationDays} дней` : "—"
            }), e.jsx("div", {
                className: "quote-block",
                children: E ? n && p ? e.jsxs(e.Fragment, {
                    children: [e.jsx(Z, {
                        label: "Плата за создание аукциона",
                        value: q(p.creationFeeGameRub)
                    }), e.jsx(Z, {
                        label: "Комиссия при продаже",
                        value: q(p.sellerFeeGameRub)
                    }), e.jsxs("p", {
                        className: "form-note",
                        children: ["Плата за создание аукциона не возвращается. Если номер купят, ты получишь всю итоговую ставку. Этот расчёт действует до ", et(p.expiresAt), "."]
                    })]
                }) : x && e.jsxs(e.Fragment, {
                    children: [e.jsx(Z, {
                        label: "Плата за объявление",
                        value: q(x.publicationFeeGameRub)
                    }), e.jsx(Z, {
                        label: "Комиссия после продажи",
                        value: q(x.sellerFeeGameRub)
                    }), e.jsx(Z, {
                        label: "Комиссия за повторную продажу",
                        value: q(x.conditionalFlipTaxGameRub)
                    }), e.jsx(Z, {
                        label: "Получишь после комиссий",
                        value: q(x.sellerNetGameRubNow)
                    }), e.jsxs("p", {
                        className: "form-note",
                        children: ["Комиссия за повторную продажу действует, если за последние ", x.flipTaxWindowHours, " часов на рынке уже продавался номер с такими же цифрами и буквами. ", x.flipTaxAppliedNow ? "Сейчас комиссия действует до " + et(x.flipTaxUntil) : "Сейчас эта комиссия не действует", ". Перед продажей игра проверит условия ещё раз. Поэтому итоговая сумма может измениться."]
                    })]
                }) : e.jsx("p", {
                    className: "form-note",
                    style: {
                        padding: "12px 0"
                    },
                    children: "Сначала посмотри комиссию и сколько получишь после продажи."
                })
            }), e.jsx(b, {
                type: "submit",
                loading: v,
                children: E ? n ? "Создать аукцион" : "Выставить за " + q(x.askGameRub) : "Рассчитать комиссию"
            })]
        }), e.jsx(b, {
            secondary: !0,
            disabled: v,
            onClick: r,
            children: "Отмена"
        })]
    })
}
const Gs = ["terms", "personal-data-consent"];
function _l({mode: t, purpose: s="general", onMode: r, onClose: a, onRecovery: i, onSuccess: c}) {
    var X, L;
    const d = he()
      , l = t === "login"
      , n = nr()
      , [m,h] = o.useState("")
      , [w,g] = o.useState("")
      , [x,u] = o.useState("")
      , [p,y] = o.useState(!1)
      , v = o.useRef(!1)
      , [N,j] = o.useState("")
      , k = !l && w.length > 0 ? In(w) ?? void 0 : void 0
      , [f,C] = o.useState(null)
      , [E,R] = o.useState({})
      , P = _ => {
        var D;
        const U = (D = n.data) == null ? void 0 : D.documents.find($ => $.key === _);
        return (U == null ? void 0 : U.status) === "PUBLISHED" ? JSON.stringify([U.version, U.contentHash]) : ""
    }
      , A = _ => !!E[_] && E[_] === P(_)
      , I = Hr(m, !l)
      , T = (X = n.data) == null ? void 0 : X.registrationRequired
      , Q = o.useId();
    o.useEffect( () => {
        we(l ? "ng_login_open" : "ng_register_open", {}, Q + t)
    }
    , [l, t, Q]);
    async function F(_) {
        if (_.preventDefault(),
        v.current || d.account.mode === "loading")
            return;
        const U = [];
        if (!l) {
            const D = Xn(m);
            if (D) {
                j(D);
                return
            }
            if (In(w))
                return;
            if (!n.data) {
                u("Не удалось проверить условия регистрации. Повтори загрузку."),
                n.reload();
                return
            }
            if (T)
                for (const $ of Gs) {
                    const te = n.data.documents.find(O => O.key === $);
                    if (!A($) || !(te != null && te.version) || !te.contentHash || te.status !== "PUBLISHED") {
                        u("Для регистрации нужно подтвердить оба документа.");
                        return
                    }
                    U.push({
                        key: $,
                        version: te.version,
                        contentHash: te.contentHash,
                        accepted: !0
                    })
                }
        }
        v.current = !0,
        y(!0),
        u("");
        try {
            const D = l ? d.login(m, w) : d.register(m, w, T ? U : void 0);
            g("");
            const $ = await D;
            $.ok ? (we(l ? "ng_login_success" : "ng_register_success"),
            a(),
            c()) : (C($.identityAccountId ?? null),
            u($.identityAccountId ? "Вход выполнен, но не удалось загрузить игру. Попробуй загрузить её ещё раз." : $.error ?? "Не удалось войти."),
            l || (R({}),
            n.reload()))
        } catch {
            u("Ответ задержался. Проверь, удалось ли войти.")
        } finally {
            y(!1),
            v.current = !1
        }
    }
    return e.jsxs(ke, {
        title: l ? "Войти" : s === "save" ? "Сохрани свой номер" : "Создай аккаунт",
        onClose: a,
        children: [e.jsx("p", {
            className: "body-copy",
            children: l ? "Введи ник и пароль своего аккаунта." : "Аккаунт сохранит твои номера и откроет коллекцию, рынок и задания."
        }), l && e.jsx(b, {
            quiet: !0,
            onClick: () => {
                we("ng_recovery_open"),
                i()
            }
            ,
            children: "Забыл пароль?"
        }), f ? e.jsxs("div", {
            className: "stack",
            children: [e.jsx("p", {
                role: "alert",
                children: x
            }), e.jsx(b, {
                loading: p,
                onClick: () => {
                    v.current || (v.current = !0,
                    y(!0),
                    d.prepareGame(f).then(_ => {
                        _.ok ? (a(),
                        c()) : u(_.error)
                    }
                    ).finally( () => {
                        v.current = !1,
                        y(!1)
                    }
                    ))
                }
                ,
                children: "Загрузить игру ещё раз"
            })]
        }) : e.jsxs("form", {
            className: "stack auth-form",
            onSubmit: F,
            children: [e.jsx(Je, {
                id: "auth-nickname",
                autoComplete: "username",
                label: "Ник",
                value: m,
                onChange: _ => {
                    h(_),
                    j(""),
                    u("")
                }
                ,
                error: N || void 0,
                placeholder: "Твой ник",
                help: l ? void 0 : I || "От 3 до 10 символов. Можно буквы, цифры и знак _."
            }), e.jsx("div", {
                className: l ? void 0 : "auth-password",
                children: e.jsx(Je, {
                    id: "auth-password",
                    autoComplete: l ? "current-password" : "new-password",
                    label: "Пароль",
                    type: "password",
                    value: w,
                    onChange: _ => {
                        g(_),
                        u("")
                    }
                    ,
                    error: k
                })
            }), !l && T && Gs.map(_ => {
                var U;
                return e.jsxs("div", {
                    className: "legal-checkbox",
                    children: [e.jsx("label", {
                        className: "legal-checkbox-hit",
                        children: e.jsx("input", {
                            id: "accept-" + _,
                            "aria-label": _ === "terms" ? "Принимаю пользовательское соглашение" : "Согласен на обработку персональных данных",
                            type: "checkbox",
                            checked: A(_),
                            disabled: p || !P(_),
                            onChange: D => R({
                                ...E,
                                [_]: D.target.checked ? P(_) : ""
                            })
                        })
                    }), e.jsxs("span", {
                        children: [e.jsx("label", {
                            htmlFor: "accept-" + _,
                            children: _ === "terms" ? "Я принимаю" : "Я даю"
                        }), " ", e.jsx(Yt, {
                            documentKey: _,
                            snapshot: ((U = n.data) == null ? void 0 : U.documents.find(D => D.key === _)) ?? null,
                            children: e.jsx("strong", {
                                children: _ === "terms" ? "Пользовательское соглашение" : "согласие на обработку персональных данных"
                            })
                        })]
                    })]
                }, _)
            }
            ), !l && e.jsx("span", {
                className: "auth-privacy-link",
                children: e.jsx(Yt, {
                    documentKey: "privacy",
                    snapshot: ((L = n.data) == null ? void 0 : L.documents.find(_ => _.key === "privacy")) ?? null,
                    children: e.jsx("em", {
                        children: "Политика обработки персональных данных"
                    })
                })
            }), x && e.jsx("p", {
                className: "field-error",
                role: "alert",
                children: x
            }), !l && !!n.error && e.jsxs("p", {
                role: "alert",
                children: ["Не удалось проверить условия. ", e.jsx("button", {
                    type: "button",
                    className: "legal-link",
                    onClick: n.reload,
                    children: "Повторить"
                })]
            }), e.jsx(b, {
                type: "submit",
                loading: p,
                disabled: d.account.mode === "loading" || !l && (!n.data || !!k || !!T && !Gs.every(A)),
                children: l ? "Войти" : "Создать аккаунт"
            })]
        }), e.jsx(b, {
            quiet: !0,
            onClick: () => {
                g(""),
                u(""),
                j(""),
                R({}),
                C(null),
                r(l ? "register" : "login")
            }
            ,
            children: l ? "Создать аккаунт" : "У меня уже есть аккаунт"
        })]
    })
}
er();
const Wr = new Set(["create", "collection", "market", "auction-list", "tops", "history", "profile", "pl-notice", "store-features", "store-packs", "tasks-daily", "tasks-weekly", "tasks-extra", "tops-money", "tops-collection", "tops-rarity", "profile-settings", "profile-legal", "profile-cookies", "profile-appearance", "profile-password", "profile-sessions", "profile-referral", "pl-account-email", "store-orders", "market-mine", "auction-mine", "auction-my-bids", "auction-my-lots"]);
function $s() {
    const t = lt().profileId;
    if (t)
        return "player:" + t;
    const s = rr(new URLSearchParams(location.search).get("screen") ?? "create");
    return s === "auction-mine" ? "auction-my-lots" : s === "profile-cookies" ? "profile" : Wr.has(s) ? s : "create"
}
function Dl(t, s=!1) {
    const r = s ? {
        profileId: lt().profileId,
        plateId: lt().plateId
    } : null
      , a = new URL(location.href);
    a.searchParams.set("screen", "create"),
    a.hash = "",
    It("profileId"),
    It("plateId"),
    a.searchParams.delete("signIn"),
    a.searchParams.delete("paymentOrder"),
    history.replaceState(r != null && r.profileId ? {
        nomerokIntent: r
    } : null, "", a),
    t == null || t.scrollTo({
        top: 0
    })
}
const Wn = [["create", "Создать", "plate"], ["collection", "Коллекция", "grid"], ["market", "Рынок", "market"], ["tops", "Топы", "trophy"], ["history", "История", "history"]];
function Ol() {
    return e.jsx(Ti, {
        children: e.jsx(Wa, {
            children: e.jsx(Ya, {
                children: e.jsx(Tl, {})
            })
        })
    })
}
function Tl() {
    var oe, Ge;
    const t = he()
      , {state: s} = Ot()
      , r = Zt()
      , a = o.useRef("tops")
      , [i,c] = o.useState(null)
      , [d,l] = o.useState(null)
      , n = xt()
      , m = ki(t.account.mode)
      , [h,w] = o.useState( () => new URLSearchParams(location.search).get("screen") === "profile-cookies")
      , [g,x] = o.useState( () => lt().paymentOrder ? "store-order" : $s())
      , [u,p] = o.useState(ga)
      , [y,v] = o.useState(null)
      , [N,j] = o.useState( () => lt().signIn ? "login" : null)
      , [k,f] = o.useState(!1)
      , C = ni(t.principalId)
      , [E,R] = o.useState(null)
      , P = o.useRef(null)
      , A = o.useRef(null)
      , I = o.useRef(null)
      , T = o.useRef(0)
      , [Q,F] = o.useState("general")
      , [X,L] = o.useState(null)
      , [_,U] = o.useState(0)
      , [D,$] = o.useState(null)
      , te = _i()
      , O = !!m.step && g !== "profile-legal"
      , B = o.useRef(!1)
      , [K,S] = o.useState("")
      , [M,J] = o.useState(!1);
    async function W() {
        if (!B.current) {
            B.current = !0,
            J(!0),
            S("");
            try {
                const V = t.account.mode === "new_guest" || t.account.mode === "reauth_required" || t.account.mode === "signed_out" ? await t.continueAsGuest() : await t.prepareGame();
                if (!V.ok)
                    throw new Error(V.error);
                m.finish(),
                m.first && m.lesson && te.open()
            } catch (V) {
                B.current = !1,
                S(ge(V, {
                    phase: "read"
                }))
            } finally {
                J(!1)
            }
        }
    }
    function z(V) {
        ya(V),
        p(V)
    }
    o.useEffect( () => {
        const V = ye => {
            const je = ye.detail;
            (je === "light" || je === "dark" || je === "game") && z(je)
        }
        ;
        return window.addEventListener("nomerok-ui-theme", V),
        () => window.removeEventListener("nomerok-ui-theme", V)
    }
    , []);
    const ce = Ri(te.stage)
      , xe = o.useMemo( () => ce ? e.jsx(Pi, {
        scene: ce
    }) : null, [ce])
      , re = (V, ye) => $({
        item: V,
        kind: ye
    })
      , me = ri(g, A, t.principalId)
      , ne = g.startsWith("player:") ? "player" : g.split("-")[0]
      , ie = t.account.mode === "registered"
      , Se = t.serverBalance.amountGameRub;
    function ae(V) {
        if (te.stage)
            return;
        if (/^player:[a-f0-9-]{36}$/i.test(V)) {
            g.startsWith("player:") || (a.current = g);
            const je = new URL(location.href);
            je.hash = "/player/" + V.slice(7),
            je.searchParams.delete("screen"),
            history.pushState(history.state, "", je),
            fa(V.slice(7)),
            me(V, () => x(V));
            return
        }
        if (V === "profile-cookies") {
            we("ng_cookie_settings"),
            w(!0);
            return
        }
        if (V === "profile-legal" && we("ng_legal_open"),
        V.startsWith("store-") && ne !== "store" && we("ng_store_open"),
        V === "create-auto-settings" && L("auto"),
        V === "create-double-enable" && L("double"),
        V === "recovery" || V.startsWith("pl-recovery")) {
            location.assign("/recovery.html");
            return
        }
        if (V === "login" || V === "register") {
            j(V);
            return
        }
        const ye = rr(V).replace(/^create-.+$/, "create").replace(/^collection-(list|expanded|system-sold)$/, "collection").replace(/^auction-mine$/, "auction-my-lots");
        me(ye, () => {
            x(ye);
            const je = new URL(location.href)
              , Re = ye === "collection-edit" ? "create" : Wr.has(ye) ? ye : ye.startsWith("profile-") ? "profile" : ye.startsWith("auction-") ? "auction-list" : ye.startsWith("tops-") ? "tops" : null;
            Re && (je.hash = "",
            It("profileId"),
            It("plateId"),
            je.searchParams.set("screen", Re),
            je.searchParams.delete("paymentOrder"),
            It("paymentOrder"),
            history.replaceState(history.state, "", je))
        }
        )
    }
    function Y() {
        j(null),
        n.resume(),
        It("signIn");
        const V = new URL(location.href);
        V.searchParams.delete("signIn"),
        history.replaceState(history.state, "", V)
    }
    function fe(V, ye="general") {
        if (t.account.mode !== "loading") {
            if (ie) {
                V();
                return
            }
            I.current = {
                principalId: t.principalId,
                next: V
            },
            F(ye),
            j("register")
        }
    }
    function Ce(V) {
        const ye = () => ae(V);
        ["collection", "market"].includes(V) ? fe(ye) : ye()
    }
    function H(V) {
        v({
            id: ++T.current,
            text: V
        })
    }
    o.useEffect( () => {
        Sa(O ? "onboarding" : Pn(g)),
        Ia(O ? "onboarding" : Pn(g))
    }
    , [g, O]);
    const Ne = Ni(g, !!N || !!te.stage, H);
    o.useLayoutEffect( () => {
        document.documentElement.dataset.theme = u
    }
    , [u]),
    o.useEffect( () => {
        if (k && ie) {
            if (lt().recoveryResult) {
                location.assign("/recovery.html");
                return
            }
            f(!1);
            const V = I.current;
            I.current = null,
            V && V.principalId === t.principalId && V.next()
        }
    }
    , [k, ie, t.principalId]),
    o.useEffect( () => {
        (t.account.mode === "signed_out" || t.account.mode === "reauth_required") && (I.current = null)
    }
    , [t.account.mode, t.api]),
    o.useEffect( () => {
        const V = ye => {
            var Re;
            const je = ((Re = ye.detail) == null ? void 0 : Re.reason) === "guest-continuation";
            I.current = null,
            j(null),
            f(!1),
            $(null),
            L(null),
            Dl(A.current, je),
            x($s())
        }
        ;
        return window.addEventListener("nomerok-logout-complete", V),
        () => window.removeEventListener("nomerok-logout-complete", V)
    }
    , []),
    o.useEffect( () => {}
    , []),
    o.useEffect( () => {}
    , [t.account.mode, t.api]),
    o.useEffect( () => {
        const V = () => {
            er(),
            x($s())
        }
        ;
        return window.addEventListener("popstate", V),
        () => window.removeEventListener("popstate", V)
    }
    , []);
    const ve = g.startsWith("player:") ? e.jsx(Ki, {
        id: g.slice(7),
        overlaysBlocked: O || !!te.stage || !!N,
        go: ae,
        onBack: () => ae(a.current)
    }, g + t.principalId) : g === "profile-legal" ? e.jsx(va, {
        onBack: () => ae("profile")
    }) : g === "collection-edit" || ne === "create" ? e.jsx(rl, {
        go: ae,
        guard: fe,
        notify: H,
        requestedAction: X,
        onActionConsumed: () => L(null)
    }) : ne === "collection" && ie ? e.jsx(cl, {
        go: ae,
        notify: H,
        onTrade: re,
        filters: C.collection,
        setFilters: C.setCollection
    }) : ne === "market" ? e.jsx(Il, {
        route: g,
        go: ae,
        onTrade: re
    }) : ne === "auction" ? e.jsx(Al, {
        route: g,
        go: ae,
        onTrade: re
    }) : ne === "store" ? e.jsx(ml, {
        route: g,
        go: ae,
        initialOrder: g === "store-order" ? lt().paymentOrder : void 0
    }) : g === "pl-account-email" ? e.jsx(bl, {
        go: ae
    }) : g === "pl-notice" ? e.jsx(gl, {
        go: ae,
        noticeId: (i == null ? void 0 : i.actor) === t.principalId ? i.id : null,
        onNoticeClose: () => c(null),
        initialOffer: (d == null ? void 0 : d.actor) === t.principalId ? d.offer : null,
        onOpened: () => l(null)
    }) : ne === "tasks" ? e.jsx(kl, {
        route: g,
        go: ae
    }) : ne === "tops" ? e.jsx(wl, {
        route: g,
        go: ae
    }) : ne === "history" ? e.jsx(Cl, {
        go: ae,
        tab: C.history,
        setTab: C.setHistory
    }) : ne === "profile" ? e.jsx(El, {
        route: g,
        go: ae,
        theme: u,
        onThemeChange: V => {
            z(V),
            V !== "game" && we(V === "light" ? "ng_theme_light" : "ng_theme_dark")
        }
        ,
        onAuth: V => {
            F("general"),
            j(V)
        }
        ,
        onTutorial: te.open
    }) : e.jsxs("div", {
        className: "page",
        children: [e.jsx("div", {
            className: "page-heading",
            children: e.jsx("h1", {
                children: ne === "store" ? "Магазин" : ((oe = Wn.find(V => V[0] === ne)) == null ? void 0 : oe[1]) ?? "Номерок"
            })
        }), e.jsx(be, {
            title: "Не удалось загрузить данные",
            description: "Попробуй обновить экран.",
            children: e.jsx(b, {
                onClick: () => void t.refreshGame(),
                children: "Повторить"
            })
        })]
    });
    return e.jsx(Ci, {
        active: !!te.stage || O,
        children: e.jsx(Ei, {
            children: e.jsx(jr.Provider, {
                value: Ne,
                children: e.jsx(mr.Provider, {
                    value: E,
                    children: e.jsxs("div", {
                        className: "app",
                        ref: P,
                        children: [e.jsxs("div", {
                            className: "app-surface",
                            "data-lesson-scene": ce ?? void 0,
                            children: [e.jsxs("header", {
                                className: "topbar",
                                children: [e.jsxs("div", {
                                    className: "brand",
                                    children: [e.jsxs("span", {
                                        className: "brand-standard",
                                        children: [e.jsx(ue, {
                                            name: "plate"
                                        }), "НОМЕРОК"]
                                    }), e.jsx(ot, {
                                        name: "crown",
                                        className: "brand-crown"
                                    }), e.jsx("span", {
                                        className: "brand-game-label",
                                        children: "Номерок"
                                    })]
                                }), e.jsxs("div", {
                                    className: "wallet-capsule",
                                    children: [e.jsxs("button", {
                                        className: "wallet ym-hide-content",
                                        "data-wide-balance": String(Se).replace(/\D/g, "").length > 9 ? "true" : void 0,
                                        "aria-label": `Баланс: ${q(Se)}. Открыть магазин`,
                                        onClick: () => ae("store-features"),
                                        children: [e.jsx(hr, {
                                            className: "wallet-coin"
                                        }), e.jsx(Oi, {
                                            value: Se
                                        })]
                                    }), e.jsx("button", {
                                        className: "icon-button wallet-plus",
                                        "aria-label": "Пополнить баланс",
                                        onClick: () => ae("store-packs"),
                                        children: e.jsx(ue, {
                                            name: "plus",
                                            size: 19
                                        })
                                    })]
                                }), e.jsx("div", {
                                    className: "collector-avatar-wrap",
                                    children: e.jsxs("button", {
                                        className: "avatar ym-hide-content",
                                        "aria-label": `Профиль${r ? ", уровень " + r.level : ""}${ie && (s != null && s.unreadCount) ? ", непрочитанных сообщений: " + s.unreadCount : ""}`,
                                        onClick: () => ae("profile"),
                                        children: [e.jsx("span", {
                                            style: ie ? gr(t.account.avatarColor) : void 0,
                                            children: ie ? (Ge = t.account.nick) == null ? void 0 : Ge.slice(0, 1) : e.jsx(ue, {
                                                name: "user",
                                                size: 18
                                            })
                                        }), r && e.jsxs("small", {
                                            className: "collector-level",
                                            "aria-hidden": "true",
                                            children: ["lvl ", r.level]
                                        }), ie && !!(s != null && s.unreadCount) && e.jsx("small", {
                                            className: "collector-unread",
                                            "aria-hidden": "true",
                                            children: s.unreadCount > 99 ? "99+" : s.unreadCount
                                        })]
                                    })
                                }), e.jsx("div", {
                                    className: "action-feedback-host",
                                    ref: R
                                })]
                            }), y && e.jsx(tn, {
                                message: y,
                                onDone: () => v(null)
                            }), e.jsx(Pa, {
                                blocked: !!y || !!N || !!D || !!te.stage || O || g === "pl-notice",
                                onOpen: V => {
                                    t.principalId && c({
                                        actor: t.principalId,
                                        id: V
                                    }),
                                    ae("pl-notice")
                                }
                            }), e.jsx(za, {
                                blocked: !!y || !!N || !!D || !!te.stage || O || g === "pl-notice",
                                onOpen: V => {
                                    t.principalId && l({
                                        actor: t.principalId,
                                        offer: V
                                    }),
                                    ae("pl-notice")
                                }
                            }, t.principalId), e.jsx(Si, {
                                visible: ne !== "create" && g !== "collection-edit",
                                onCreate: () => ae("create")
                            }), e.jsxs("main", {
                                className: "main",
                                ref: A,
                                id: "main-content",
                                children: [e.jsx("div", {
                                    className: "page-view",
                                    hidden: !!ce,
                                    "data-onboarding-preserve": ce ? "true" : void 0,
                                    children: e.jsx(Fl, {
                                        area: g === "profile-legal" ? "legal" : ne,
                                        onLogin: () => {
                                            F("general"),
                                            j("login")
                                        }
                                        ,
                                        children: ve
                                    })
                                }, ne + (t.principalId ?? "") + _), xe]
                            }), e.jsx("nav", {
                                className: "bottom-nav ng-nav-interactive",
                                "aria-label": "Основная навигация",
                                onClickCapture: Di,
                                children: Wn.map( ([V,ye]) => e.jsxs("button", {
                                    disabled: t.account.mode === "loading" && ["collection", "market"].includes(V),
                                    className: ne === V || V === "market" && ne === "auction" ? "active" : "",
                                    "aria-current": ne === V || V === "market" && ne === "auction" ? "page" : void 0,
                                    onClick: () => Ce(V),
                                    children: [e.jsx("span", {
                                        className: "standard-nav-art",
                                        children: e.jsx(La, {
                                            name: V,
                                            letter: Rt[0]
                                        })
                                    }), e.jsx(ot, {
                                        name: V,
                                        className: "game-nav-icon"
                                    }), e.jsx("span", {
                                        children: ye
                                    })]
                                }, V))
                            })]
                        }), e.jsx(Fi, {
                            route: g,
                            blocked: !!N || !!D || !!te.stage || O || !!n.request,
                            onResolved: () => U(V => V + 1)
                        }), !N && !D && !te.stage && !O && e.jsx(Qa, {
                            onLogin: V => fe(V)
                        }), " ", D && e.jsx(Pl, {
                            item: D.item,
                            kind: D.kind,
                            onClose: () => $(null),
                            onComplete: () => {
                                const V = D.kind === "auction";
                                $(null),
                                ae(V ? "auction-mine" : "market-mine"),
                                H(V ? "Аукцион создан" : "Номер выставлен на продажу")
                            }
                        }), N && !te.stage && !O && e.jsx(_l, {
                            mode: N,
                            purpose: Q,
                            onMode: j,
                            onClose: Y,
                            onRecovery: () => {
                                Y(),
                                ae("recovery")
                            }
                            ,
                            onSuccess: () => f(!0)
                        }), te.stage && e.jsx(hi, {
                            stage: te.stage,
                            app: P,
                            onStage: V => {
                                V.view === "complete" && we("ng_tutorial_complete"),
                                te.setStage(V)
                            }
                            ,
                            onClose: V => {
                                var ye;
                                ((ye = te.stage) == null ? void 0 : ye.view) !== "complete" && we("ng_tutorial_skip"),
                                te.close(),
                                V && H(V)
                            }
                        }), O && e.jsx(wi, {
                            flow: m,
                            onTheme: z,
                            onDone: () => void W(),
                            error: K,
                            busy: M
                        }), " ", e.jsx(ii, {
                            enabled: ie && t.gameStatus === "ready" && !O && !N && !D && !te.stage && !h && !n.request
                        }, t.principalId ?? "none"), " ", h && e.jsx(ba, {
                            mode: "preferences",
                            onClose: () => w(!1)
                        })]
                    })
                })
            })
        })
    })
}
function Fl({area: t, children: s, onLogin: r}) {
    const a = he();
    return t === "legal" || t === "player" ? e.jsx(e.Fragment, {
        children: s
    }) : a.account.mode === "new_guest" || a.account.mode === "reauth_required" || a.account.mode === "signed_out" ? e.jsx(Gl, {
        onLogin: r
    }) : t === "create" || a.principalId ? e.jsx(e.Fragment, {
        children: s
    }) : a.account.mode === "loading" || a.gameStatus === "loading" ? e.jsx("div", {
        className: "page",
        "aria-busy": "true",
        children: e.jsx(be, {
            title: "Загружаем Номерок",
            description: "Подожди немного.",
            children: e.jsx("span", {
                className: "spinner"
            })
        })
    }) : a.account.mode === "error" ? e.jsx("div", {
        className: "page",
        children: e.jsx(be, {
            title: "Не удалось загрузить данные",
            description: a.gameError ?? "Попробуй обновить экран.",
            children: e.jsx(b, {
                onClick: a.refreshServerBalance,
                children: "Повторить"
            })
        })
    }) : e.jsx(e.Fragment, {
        children: s
    })
}
function Gl({onLogin: t}) {
    const s = he()
      , [r,a] = o.useState(!1)
      , [i,c] = o.useState("")
      , d = o.useRef(!1);
    async function l() {
        if (!d.current) {
            d.current = !0,
            a(!0),
            c("");
            try {
                const n = await s.continueAsGuest();
                n.ok || c(n.error)
            } finally {
                d.current = !1,
                a(!1)
            }
        }
    }
    return e.jsx("div", {
        className: "page",
        children: e.jsxs(be, {
            title: "Продолжить игру",
            icon: "user",
            description: "Войди в аккаунт или продолжи без него. Твои номера и баланс останутся в твоём аккаунте.",
            children: [e.jsx(b, {
                disabled: r,
                onClick: t,
                children: "Войти"
            }), e.jsx(b, {
                secondary: !0,
                loading: r,
                onClick: () => void l(),
                children: "Продолжить без аккаунта"
            }), i && e.jsx("p", {
                role: "alert",
                children: i
            })]
        })
    })
}
const Yl = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ol
}, Symbol.toStringTag, {
    value: "Module"
}));
export {Yl as P, Nr as S};
