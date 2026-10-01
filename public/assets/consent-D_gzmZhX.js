import {r as R} from "./account-BjMYOorF.js";
const p = "2026-09-25.server-v3"
  , A = "nomerok-cookie-consent-v1"
  , k = "nomerok-cookie-operation-v1";
class l extends Error {
    constructor(e, n=!1) {
        super(["LEGAL_VERSION_CHANGED", "LEGAL_DECISION_CHANGED"].includes(e) ? "Документ или выбор обновился. Проверьте новую редакцию и подтвердите выбор ещё раз." : "Не удалось подтвердить выбор. Аналитика выключена; можно продолжить игру."),
        this.code = e,
        this.definitive = n
    }
}
function H(t) {
    try {
        const e = JSON.parse(t ?? "null");
        return (e == null ? void 0 : e.version) === 2 && e.noticeVersion === p && typeof e.analytics == "boolean" && typeof e.chosenAt == "string" && Number.isFinite(Date.parse(e.chosenAt)) && typeof e.revision == "string" ? {
            version: 2,
            noticeVersion: e.noticeVersion,
            analytics: e.analytics,
            chosenAt: e.chosenAt,
            revision: e.revision,
            ...e.pendingWithdrawal ? {
                pendingWithdrawal: !0
            } : {},
            ...e.requiresNewChoice ? {
                requiresNewChoice: !0
            } : {}
        } : null
    } catch {
        return null
    }
}
function D() {
    try {
        return H(localStorage.getItem(A))
    } catch {
        return null
    }
}
let s = null;
function y() {
    var t;
    try {
        if (s)
            return s;
        const e = JSON.parse(localStorage.getItem(k) ?? "null");
        return e && typeof e.key == "string" && typeof e.csrfToken == "string" && ["GRANT", "REFUSE", "REVOKE"].includes((t = e.decision) == null ? void 0 : t.action) ? e : s
    } catch {
        return s
    }
}
let c = D()
  , a = c ? {
    ...c,
    analytics: !1
} : null
  , f = 0
  , S = !1;
const C = new Set
  , P = () => a
  , U = () => c ? c.pendingWithdrawal || c.requiresNewChoice ? !1 : c.analytics : null
  , W = () => S && (a == null ? void 0 : a.analytics) === !0
  , K = () => S;
function V(t) {
    return C.add(t),
    () => {
        C.delete(t)
    }
}
function d(t, e=!1) {
    S = e,
    a = t,
    C.forEach(n => n())
}
function h(t) {
    c = t;
    try {
        localStorage.setItem(A, JSON.stringify(t))
    } catch {}
}
function L(t) {
    return {
        version: 2,
        noticeVersion: p,
        analytics: t.analytics,
        chosenAt: t.decidedAt ?? new Date().toISOString(),
        revision: t.revision
    }
}
async function T(t, e) {
    var i;
    const n = await fetch(t, {
        ...e,
        credentials: "same-origin",
        cache: "no-store"
    });
    if (!n.ok) {
        const r = await n.json().catch( () => null);
        throw new l(((i = r == null ? void 0 : r.error) == null ? void 0 : i.code) ?? "PRIVACY_UNAVAILABLE",n.status >= 400 && n.status < 500 && n.status !== 429)
    }
    return n.json()
}
let x = Promise.resolve();
function O(t) {
    const e = () => {
        if (t != null && t.aborted)
            throw new DOMException("Aborted","AbortError");
        return T("/api/v1/privacy/context")
    }
      , n = x.then( () => typeof navigator < "u" && navigator.locks ? navigator.locks.request("nomerok-privacy-context", e) : e());
    return x = n.then( () => {}
    , () => {}
    ),
    n.then(i => {
        if (t != null && t.aborted)
            throw new DOMException("Aborted","AbortError");
        return i
    }
    )
}
async function j(t) {
    const e = await O(t);
    return {
        context: e,
        document: e.analyticsNotice,
        cookies: e.cookies
    }
}
function E(t) {
    var e;
    try {
        ((e = y()) == null ? void 0 : e.key) === t && localStorage.removeItem(k)
    } catch {}
    (s == null ? void 0 : s.key) === t && (s = null)
}
async function G(t) {
    return T("/api/v1/privacy/analytics", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-nomerok-client": "web-v1",
            "x-nomerok-csrf": t.csrfToken,
            "idempotency-key": t.key
        },
        body: JSON.stringify(t.decision)
    })
}
function m() {
    window.dispatchEvent(new Event("nomerok-analytics-reset"))
}
async function q(t, e) {
    const n = ++f;
    m();
    const i = {
        version: 2,
        noticeVersion: p,
        analytics: !1,
        chosenAt: new Date().toISOString(),
        revision: (a == null ? void 0 : a.revision) ?? "0",
        ...t ? {} : {
            pendingWithdrawal: !0
        }
    };
    d(i),
    h(i);
    let r = null;
    try {
        const o = e == null ? void 0 : e.document;
        if (t && (!(e != null && e.context.analyticsAvailable) || !o || o.status !== "PUBLISHED" || !o.version || !o.contentHash))
            throw new l("LEGAL_CONTENT_PENDING",!0);
        const w = (e == null ? void 0 : e.context) ?? await O()
          , v = t ? {
            action: "GRANT",
            document: {
                key: "analytics-consent",
                version: o.version,
                contentHash: o.contentHash
            },
            expectedRevision: w.state.revision
        } : {
            action: w.state.version !== null ? "REVOKE" : "REFUSE",
            ...(o == null ? void 0 : o.status) === "PUBLISHED" && o.version && o.contentHash ? {
                shownDocument: {
                    key: "analytics-consent",
                    version: o.version,
                    contentHash: o.contentHash
                }
            } : {}
        }
          , u = y()
          , _ = u && (JSON.stringify(u.decision) === JSON.stringify(v) || v.action !== "GRANT" && u.decision.action === v.action);
        r = u && _ && u.csrfToken === w.csrfToken ? u : {
            key: crypto.randomUUID(),
            csrfToken: w.csrfToken,
            decision: v
        };
        try {
            localStorage.setItem(k, JSON.stringify(r)),
            s = null
        } catch (b) {
            if (t)
                throw b;
            s = r
        }
        const I = await G(r);
        if (!t && I.analytics)
            throw new l("LEGAL_DECISION_CHANGED",!0);
        const N = L(I);
        return E(r.key),
        n === f && (h(N),
        d(N, !0)),
        N
    } catch (o) {
        if (r && o instanceof l && o.definitive && E(r.key),
        n === f && (h(i),
        d(i)),
        t)
            throw o;
        return i
    }
}
async function g() {
    const t = ++f
      , e = D()
      , n = y();
    if (c = e,
    m(),
    d(e ? {
        ...e,
        analytics: !1
    } : null),
    !(!e && !n))
        try {
            if (!n && (e != null && e.pendingWithdrawal)) {
                await q(!1);
                return
            }
            const i = n ? await G(n) : (await O()).state;
            if (n && n.decision.action !== "GRANT" && i.analytics)
                throw new l("LEGAL_DECISION_CHANGED",!0);
            if (n && E(n.key),
            t !== f)
                return;
            const r = {
                ...L(i),
                ...e != null && e.requiresNewChoice ? {
                    analytics: !1,
                    requiresNewChoice: !0
                } : {}
            };
            h(r),
            d(r, !0)
        } catch (i) {
            n && i instanceof l && i.definitive && E(n.key)
        }
}
window.addEventListener("storage", t => {
    (t.key === A || t.key === k || t.key === null) && g()
}
);
window.addEventListener("online", () => {
    (y() || c != null && c.pendingWithdrawal) && g()
}
);
window.addEventListener("nomerok-identity-transition", () => {
    var e;
    ++f,
    m();
    const t = a ? {
        ...a,
        analytics: !1,
        ...((e = y()) == null ? void 0 : e.decision.action) === "GRANT" ? {
            requiresNewChoice: !0
        } : {}
    } : null;
    t != null && t.requiresNewChoice && h(t),
    d(t)
}
);
(c || y()) && g();
function B() {
    return R.useSyncExternalStore(V, P, () => null)
}
export {l as P, W as a, U as b, K as c, q as d, P as g, j as p, V as s, B as u};
