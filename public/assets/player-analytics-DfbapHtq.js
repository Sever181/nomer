var A = Object.defineProperty;
var v = (t, e, s) => e in t ? A(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : t[e] = s;
var a = (t, e, s) => v(t, typeof e != "symbol" ? e + "" : e, s);
import {s as C, a as O} from "./consent-D_gzmZhX.js";
const P = {
    ng_tutorial_start: "Начало обучения",
    ng_tutorial_skip: "Пропуск обучения",
    ng_tutorial_complete: "Завершение обучения",
    ng_theme_light: "Светлая тема",
    ng_theme_dark: "Тёмная тема",
    ng_cookie_step: "Экран cookies",
    ng_cookie_settings: "Настройки cookies",
    ng_cookie_accept: "Разрешение аналитики",
    ng_cookie_change: "Включение аналитики в настройках",
    ng_register_open: "Открытие регистрации",
    ng_register_success: "Регистрация подтверждена",
    ng_login_open: "Открытие входа",
    ng_login_success: "Вход подтверждён",
    ng_recovery_open: "Открытие восстановления",
    ng_recovery_start: "Начало восстановления",
    ng_recovery_request: "Запрос восстановления принят",
    ng_email_verified: "Почта подтверждена",
    ng_recovery_complete: "Восстановление подтверждено",
    ng_region_open: "Выбор региона открыт",
    ng_region_select: "Регион изменён",
    ng_manual_first: "Первая ручная прокрутка",
    ng_spin_digits: "Ручная прокрутка цифр",
    ng_spin_letters: "Ручная прокрутка букв",
    ng_spin_whole: "Ручная прокрутка номера",
    ng_plate_complete: "Получен полный номер",
    ng_plate_save: "Номер сохранён",
    ng_plate_sell: "Номер продан системе",
    ng_auto_open: "Настройки Auto",
    ng_auto_start: "Auto запущен",
    ng_auto_stop: "Auto остановлен",
    ng_double_open: "Открытие Double",
    ng_double_on: "Double включён",
    ng_double_off: "Double выключен",
    ng_task_reward: "Награда задания получена",
    ng_store_open: "Магазин открыт",
    ng_product_open: "Предложение открыто",
    ng_checkout_open: "Checkout открыт",
    ng_checkout_cancel: "Checkout отменён",
    ng_checkout_pay: "Нажатие Оплатить",
    ng_test_purchase_confirmed: "Тестовая покупка подтверждена сервером",
    ng_legal_open: "Юридические документы",
    ng_document_open: "Документ открыт"
}
  , g = {
    create: "Создать",
    collection: "Коллекция",
    market: "Рынок",
    auctions: "Аукционы",
    tops: "Топы",
    history: "История",
    tasks: "Задания",
    profile: "Профиль",
    store: "Магазин",
    legal: "Юридические документы",
    recovery: "Восстановление",
    onboarding: "Первый вход"
}
  , E = ["digits", "letters", "whole", "save", "sell", "daily", "weekly", "extra", "terms", "privacy", "personal-data-consent", "cookies", "offer", "support", "contacts", "analytics-consent"]
  , D = ["AUTO", "DOUBLE", "BUNDLE", "UPGRADE", "PACK_99", "PACK_199", "PACK_499", "PACK_999", "PACK_2490"];
function L(t) {
    const e = {};
    return t.section && Object.prototype.hasOwnProperty.call(g, t.section) && (e.section = t.section),
    t.region && /^\d{2,3}$/.test(t.region) && (e.region = t.region),
    t.action && E.includes(t.action) && (e.action = t.action),
    t.category && D.includes(t.category) && (e.category = t.category),
    (t.mode === "on" || t.mode === "off") && (e.mode = t.mode),
    e
}
function x(t) {
    if (t.startsWith("profile-legal"))
        return "legal";
    if (t.startsWith("auction"))
        return "auctions";
    if (t.startsWith("pl-account") || t === "pl-notice")
        return "profile";
    const e = t.split("-")[0];
    return Object.prototype.hasOwnProperty.call(g, e) ? e : "create"
}
class S {
    constructor(e, s="https://nomerokgame.ru") {
        a(this, "allowed", !1);
        a(this, "epoch", 0);
        a(this, "abort");
        a(this, "adapter");
        a(this, "section", "create");
        a(this, "last", null);
        a(this, "seen", new Set);
        a(this, "queue", []);
        this.load = e,
        this.origin = s
    }
    consent(e) {
        var i, o;
        if (e === this.allowed)
            return;
        this.allowed = e;
        const s = ++this.epoch;
        if (!e) {
            this.queue = [],
            (i = this.abort) == null || i.abort(),
            this.abort = void 0;
            try {
                (o = this.adapter) == null || o.destroy()
            } catch {}
            this.adapter = void 0,
            this.last = null;
            return
        }
        this.abort = new AbortController,
        this.load(this.abort.signal).then(r => {
            if (!this.allowed || s !== this.epoch) {
                r.destroy();
                return
            }
            this.adapter = r;
            try {
                r.init(),
                this.sendHit();
                for (const l of this.queue.splice(0)) {
                    if (!this.allowed)
                        break;
                    r.goal(l.name, l.params)
                }
            } catch {
                this.queue = [],
                this.adapter = void 0;
                try {
                    r.destroy()
                } catch {}
            }
        }
        , () => {
            s === this.epoch && (this.queue = [])
        }
        )
    }
    view(e) {
        Object.prototype.hasOwnProperty.call(g, e) && (this.section = e,
        this.sendHit())
    }
    sendHit() {
        if (!this.allowed || !this.adapter || this.last === this.section)
            return;
        const e = this.last;
        this.last = this.section;
        try {
            this.adapter.hit(`${this.origin}/play/${this.section}`, g[this.section], e ? `${this.origin}/play/${e}` : this.origin + "/")
        } catch {}
    }
    goal(e, s={}, i) {
        if (!this.allowed || !Object.prototype.hasOwnProperty.call(P, e))
            return;
        const o = i ? e + ":" + i : null;
        if (o && this.seen.has(o))
            return;
        o && this.seen.add(o);
        const r = L(s);
        if (!this.adapter) {
            this.queue.length < 50 && this.queue.push({
                name: e,
                params: r
            });
            return
        }
        try {
            this.adapter.goal(e, r)
        } catch {}
    }
}
const I = {
    counterId: 113010598,
    origin: "https://nomerokgame.ru",
    script: "https://mc.yandex.ru/metrika/tag.js"
};
function m(t, e=I) {
    return new Promise( (s, i) => {
        const o = e.counterId;
        if (!o || location.origin !== e.origin || /^\/(admin|owner)(\/|\.|$)/.test(location.pathname) || t.aborted || location.hash !== "" || [...new URL(location.href).searchParams.keys()].some(n => n !== "screen")) {
            i(new Error("ANALYTICS_DISABLED"));
            return
        }
        window["yaDisableCounter" + o] = !1;
        const r = document.createElement("script");
        r.async = !0,
        r.src = e.script,
        r.referrerPolicy = "no-referrer";
        const l = window.ym
          , c = l ?? Object.assign( (...n) => {
            (!t.aborted || n[0] === o && n[1] === "destruct") && (c.a ?? (c.a = [])).push(n)
        }
        , {
            l: Date.now()
        });
        window.ym = c;
        let f = !1
          , _ = !1;
        const u = () => {
            var n;
            window["yaDisableCounter" + o] = !0,
            c.a && (c.a.length = 0);
            try {
                f && ((n = window.ym) == null || n.call(window, o, "destruct"))
            } catch {}
            f = !1,
            r.remove(),
            window.ym === c && !l && delete window.ym
        }
          , k = () => {
            u(),
            _ || (_ = !0,
            i(new Error("CONSENT_REVOKED")))
        }
        ;
        t.addEventListener("abort", k, {
            once: !0
        }),
        r.onload = () => {
            if (t.aborted) {
                u();
                return
            }
            _ = !0,
            s({
                init: () => {
                    var n;
                    t.aborted || (f = !0,
                    (n = window.ym) == null || n.call(window, o, "init", {
                        url: e.origin + "/",
                        referrer: e.origin + "/",
                        defer: !0,
                        clickmap: !0,
                        trackLinks: !1,
                        trackHash: !1,
                        webvisor: !0,
                        accurateTrackBounce: !1,
                        ecommerce: !1,
                        childIframe: !1,
                        sendTitle: !1,
                        disableYtm: !0
                    }))
                }
                ,
                hit: (n, p, d) => {
                    var y;
                    t.aborted || (y = window.ym) == null || y.call(window, o, "hit", n, {
                        title: p,
                        referer: d
                    })
                }
                ,
                goal: (n, p) => {
                    var d;
                    t.aborted || (d = window.ym) == null || d.call(window, o, "reachGoal", n, p)
                }
                ,
                destroy: u
            })
        }
        ,
        r.onerror = () => {
            _ = !0,
            u(),
            i(new Error("ANALYTICS_UNAVAILABLE"))
        }
        ,
        document.head.append(r)
    }
    )
}
const h = new S(m);
let w = !1
  , b = !1;
function T(t) {
    if (h.view(t),
    w)
        return;
    w = !0;
    const e = () => h.consent(!b && O());
    C(e),
    e()
}
const q = t => h.view(t)
  , N = (t, e={}, s) => h.goal(t, e, s);
function j() {
    b = !0,
    h.consent(!1)
}
const B = Object.freeze(Object.defineProperty({
    __proto__: null,
    excludePlayerAnalytics: j,
    loadMetrica: m,
    startPlayerAnalytics: T,
    trackGoal: N,
    trackView: q
}, Symbol.toStringTag, {
    value: "Module"
}));
export {x as a, q as b, B as p, T as s, N as t};
