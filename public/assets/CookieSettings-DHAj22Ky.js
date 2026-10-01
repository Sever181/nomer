import {R as $, j as e, r as j, L as S, f as q, c as V} from "./account-BjMYOorF.js";
import {B as g, I as G, u as y, S as P, N as F} from "./game-plate-BmsLgpqE.js";
import {t as N} from "./player-analytics-DfbapHtq.js";
import {g as M, p as U, d as H, c as O, P as w} from "./consent-D_gzmZhX.js";
let L = null;
function se() {
    if (L)
        return L;
    try {
        const s = localStorage.getItem("nomerok-theme");
        if (s === "light" || s === "dark" || s === "game")
            return s
    } catch {}
    return "light"
}
function ne(s, c=!0) {
    var n;
    if (document.documentElement.dataset.theme = s,
    (n = document.querySelector('meta[name="theme-color"]')) == null || n.setAttribute("content", s === "game" ? "#159fe0" : s === "dark" ? "#0b1018" : "#eef0f4"),
    !!c) {
        L = s;
        try {
            localStorage.setItem("nomerok-theme", s)
        } catch {}
    }
}
function Y(s) {
    try {
        const c = new URL(s,location.origin);
        return ["https:", "http:", "mailto:"].includes(c.protocol) ? c.href : null
    } catch {
        return null
    }
}
function z(s) {
    const c = s.replace(/^\d+(?:\.\d+)*\.?\s+/, "").trim().toLowerCase();
    return {
        поддержка: "support",
        контакты: "contacts",
        "закон и реквизиты": "contacts",
        "проблемы с покупкой и возвраты": "refunds",
        "права и обращения": "requests",
        "сроки хранения": "retention"
    }[c] ?? c.replace(/[^a-zа-яё0-9]+/gi, "-").replace(/^-|-$/g, "")
}
function k(s) {
    const c = /(\[([^\]]+)\]\(([^\s)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|https?:\/\/[^\s<>]+|[\w.+-]+@[\w.-]+\.[a-z]{2,})/gi
      , n = [];
    let a = 0;
    for (const i of s.matchAll(c)) {
        i.index > a && n.push(s.slice(a, i.index));
        const t = i[0].startsWith("http") ? i[0].replace(/[.,;:!?]+$/, "") : i[0]
          , o = i[0].slice(t.length)
          , d = i[2] ?? t
          , l = i[3] ?? (t.includes("@") && !t.startsWith("http") ? "mailto:" + t : t)
          , r = String(i.index);
        if (i[4])
            n.push(e.jsx("strong", {
                children: i[4]
            }, r));
        else if (i[5])
            n.push(e.jsx("code", {
                children: i[5]
            }, r));
        else {
            const h = Y(l);
            n.push(h ? e.jsx("a", {
                href: h,
                rel: "noreferrer",
                children: d
            }, r) : d),
            o && n.push(o)
        }
        a = i.index + i[0].length
    }
    return a < s.length && n.push(s.slice(a)),
    n
}
function A({content: s, headingOffset: c=0}) {
    const n = s.replace(/\r\n/g, `
`).split(`
`)
      , a = []
      , i = t => t.trim().replace(/^\||\|$/g, "").split("|").map(o => o.trim());
    for (let t = 0; t < n.length; ) {
        const o = n[t]
          , d = t;
        if (!o.trim()) {
            t++;
            continue
        }
        const l = /^(#{1,6})\s+(.+)$/.exec(o);
        if (l && t === 0 && l[1] === "#") {
            t++;
            continue
        }
        if (l) {
            const u = `h${Math.min(l[1].length + c, 6)}`;
            a.push($.createElement(u, {
                key: d,
                id: z(l[2])
            }, k(l[2]))),
            t++;
            continue
        }
        if (o.includes("|") && /^\s*\|?\s*:?-{3,}/.test(n[t + 1] ?? "")) {
            const u = i(o);
            t += 2;
            const m = [];
            for (; t < n.length && n[t].trim().startsWith("|"); )
                m.push(i(n[t++]));
            a.push(e.jsx("div", {
                className: "legal-table",
                role: "region",
                "aria-label": "Таблица документа",
                tabIndex: 0,
                children: e.jsxs("table", {
                    children: [e.jsx("thead", {
                        children: e.jsx("tr", {
                            children: u.map( (x, p) => e.jsx("th", {
                                scope: "col",
                                children: k(x)
                            }, p))
                        })
                    }), e.jsx("tbody", {
                        children: m.map( (x, p) => e.jsx("tr", {
                            children: x.map( (f, C) => e.jsx("td", {
                                children: k(f)
                            }, C))
                        }, p))
                    })]
                })
            }, d));
            continue
        }
        const r = /^\s*(?:([-*])|(\d+)\.)\s+(.+)$/.exec(o);
        if (r) {
            const u = !!r[2]
              , m = [];
            for (; t < n.length; ) {
                const x = /^\s*(?:([-*])|(\d+)\.)\s+(.+)$/.exec(n[t]);
                if (!x || !!x[2] !== u)
                    break;
                m.push(e.jsx("li", {
                    children: k(x[3])
                }, t)),
                t++
            }
            a.push(u ? e.jsx("ol", {
                start: Number(r[2]),
                children: m
            }, d) : e.jsx("ul", {
                children: m
            }, d));
            continue
        }
        const h = [o];
        for (t++; t < n.length && n[t].trim() && !/^(#{1,6}\s|\s*[-*]\s|\s*\d+\.\s|\|)/.test(n[t]); )
            h.push(n[t++]);
        a.push(e.jsx("p", {
            children: k(h.join(" "))
        }, d))
    }
    return e.jsx("div", {
        className: "legal-prose",
        children: a
    })
}
function Z({document: s, expanded: c=!1}) {
    if (!(s != null && s.content) || s.status !== "PUBLISHED")
        return null;
    const n = s.content.split(/\n\s*\n/).filter(o => !/^# /.test(o))
      , a = n.findIndex(o => !/^Редакция /.test(o))
      , i = n[a] ?? ""
      , t = n.filter( (o, d) => d !== a).join(`

`);
    return e.jsxs("section", {
        id: "analytics",
        className: "analytics-notice ym-hide-content ym-disable-clickmap",
        "aria-label": "Разрешение аналитики",
        children: [e.jsx(A, {
            content: i
        }), e.jsxs("details", {
            open: c || void 0,
            children: [e.jsx("summary", {
                children: "Подробнее об обработке данных"
            }), e.jsx(A, {
                content: t
            })]
        })]
    })
}
const v = V(location.origin);
function ae() {
    return y("legal-catalog", s => v.legalCatalog(s))
}
function W({documentKey: s, onClose: c, snapshot: n, binding: a, analyticsSnapshot: i}) {
    const t = y("legal-document:" + s + ":" + ((a == null ? void 0 : a.version) ?? "current") + ":" + ((a == null ? void 0 : a.contentHash) ?? ""), async l => {
        const r = a ? await v.legalDocument(s, a.version, l) : (await v.legalCatalog(l)).documents.find(h => h.key === s) ?? null;
        if (a && (r == null ? void 0 : r.contentHash) !== a.contentHash)
            throw new Error("LEGAL_VERSION_CHANGED");
        return r
    }
    , n === void 0)
      , o = n === void 0 ? t.data : n
      , d = y("legal-cookie-notice:" + ((o == null ? void 0 : o.version) ?? ""), l => v.legalDocument("analytics-consent", o.version, l), s === "cookies" && i === void 0 && !!(o != null && o.version));
    return e.jsxs(P, {
        title: S[s],
        onClose: c,
        wide: !0,
        children: [t.error ? e.jsx(F, {
            title: "Не удалось загрузить документ",
            kind: "error",
            children: e.jsx(g, {
                secondary: !0,
                onClick: t.reload,
                children: "Повторить"
            })
        }) : o ? o.status === "LEGAL_CONTENT_PENDING" ? e.jsxs("div", {
            "data-legal-status": "LEGAL_CONTENT_PENDING",
            children: [e.jsx("p", {
                className: "body-copy",
                children: "Документ готовится. Здесь появится его опубликованная версия."
            }), e.jsx("p", {
                className: "body-copy",
                children: "Сейчас текст недоступен."
            })]
        }) : e.jsxs("article", {
            className: "legal-content",
            children: [e.jsx(A, {
                content: o.content ?? "",
                headingOffset: 1
            }), s === "cookies" && e.jsx(Z, {
                document: i === void 0 ? d.data : i
            })]
        }) : n === void 0 && t.busy ? e.jsx("p", {
            role: "status",
            children: "Загружаем документ…"
        }) : e.jsx("p", {
            className: "body-copy",
            children: "Документ не опубликован."
        }), e.jsx(g, {
            secondary: !0,
            onClick: c,
            children: "Назад"
        })]
    })
}
function oe({onBack: s}) {
    const [c,n] = j.useState(null);
    return e.jsxs("div", {
        className: "page",
        children: [e.jsxs("div", {
            className: "page-heading",
            children: [e.jsx("h1", {
                children: "Юридические документы"
            }), e.jsx(g, {
                quiet: !0,
                onClick: s,
                children: "Назад"
            })]
        }), e.jsx("div", {
            className: "legal-menu",
            children: q.map(a => e.jsxs("button", {
                className: "menu-row",
                onClick: () => {
                    n(a),
                    N("ng_document_open", {
                        action: a
                    })
                }
                ,
                children: [e.jsx(G, {
                    name: "book"
                }), e.jsx("span", {
                    children: S[a]
                }), e.jsx(G, {
                    name: "right"
                })]
            }, a))
        }), e.jsx("a", {
            className: "legal-link",
            href: "mailto:help@nomerokgame.ru",
            children: "Написать в поддержку"
        }), c && e.jsx(W, {
            documentKey: c,
            onClose: () => n(null)
        })]
    })
}
function _({documentKey: s, children: c, snapshot: n, binding: a, analyticsSnapshot: i}) {
    const [t,o] = j.useState(!1);
    return e.jsxs(e.Fragment, {
        children: [e.jsx("button", {
            type: "button",
            className: "legal-link",
            disabled: n === null,
            onClick: () => {
                o(!0),
                N("ng_document_open", {
                    action: s
                })
            }
            ,
            children: c ?? S[s]
        }), t && e.jsx(W, {
            documentKey: s,
            snapshot: n,
            binding: a,
            analyticsSnapshot: i,
            onClose: () => o(!1)
        })]
    })
}
function J() {
    return e.jsxs("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [e.jsx("path", {
            d: "M21 12a9 9 0 1 1-9-9 4 4 0 0 0 4 4 4 4 0 0 0 5 5Z"
        }), e.jsx("path", {
            d: "M8 8h.01M7 14h.01M12 17h.01M13 11h.01",
            strokeWidth: "2.8"
        })]
    })
}
function Q(s) {
    var f, C, I, D, T, R, B;
    const {onClose: c, shown: n, onRefresh: a} = s
      , i = y("cookie-settings-document", U, n === void 0)
      , t = {
        data: n === void 0 ? i.data : n ?? void 0,
        reload: a ?? i.reload
    }
      , [o,d] = j.useState(null)
      , l = M()
      , r = o ?? (s.mode === "onboarding" ? s.initialAnalytics : l != null && l.pendingWithdrawal || l != null && l.requiresNewChoice ? !1 : ((f = t.data) == null ? void 0 : f.context.state.analytics) ?? (l == null ? void 0 : l.analytics) ?? !1)
      , [h,u] = j.useState(!1)
      , [m,x] = j.useState("");
    async function p() {
        if (h)
            return;
        if (s.mode === "onboarding") {
            s.onPrepared(r),
            c();
            return
        }
        u(!0),
        x("");
        const E = M();
        try {
            if (await H(r, t.data),
            !O())
                throw new w("PRIVACY_UNAVAILABLE");
            r && N(E ? "ng_cookie_change" : "ng_cookie_accept", {
                mode: "on"
            }),
            c()
        } catch (b) {
            x(b instanceof Error ? b.message : "Не удалось сохранить выбор. Аналитика выключена."),
            b instanceof w && b.definitive && (d(!1),
            t.reload())
        } finally {
            u(!1)
        }
    }
    return e.jsx(P, {
        title: "Настройки cookies",
        onClose: () => {
            h || c()
        }
        ,
        children: e.jsxs("div", {
            className: "stack ym-hide-content ym-disable-clickmap",
            children: [e.jsxs("div", {
                className: "cookie-option",
                children: [e.jsxs("label", {
                    children: [e.jsx("input", {
                        type: "checkbox",
                        checked: !0,
                        disabled: !0
                    }), e.jsx("b", {
                        children: "Необходимые cookies"
                    })]
                }), e.jsx("p", {
                    children: "Нужны для входа, безопасности и работы игры. Их нельзя отключить."
                })]
            }), e.jsxs("div", {
                className: "cookie-option",
                children: [e.jsxs("label", {
                    children: [e.jsx("input", {
                        type: "checkbox",
                        checked: r,
                        disabled: h || !((C = t.data) != null && C.context.analyticsAvailable) && !r,
                        onChange: E => d(E.target.checked)
                    }), e.jsx("b", {
                        children: "Аналитика"
                    })]
                }), e.jsx("p", {
                    children: "Яндекс Метрика и Вебвизор помогают понимать, как используется игра и что можно сделать удобнее."
                })]
            }), e.jsx(_, {
                documentKey: "cookies",
                snapshot: ((I = t.data) == null ? void 0 : I.cookies) ?? null,
                analyticsSnapshot: ((D = t.data) == null ? void 0 : D.document) ?? null
            }), e.jsx(_, {
                documentKey: "analytics-consent",
                snapshot: ((T = t.data) == null ? void 0 : T.document) ?? null,
                children: "Подробнее об обработке данных"
            }), i.busy && n === void 0 && e.jsx("p", {
                role: "status",
                children: "Загружаем настройки…"
            }), !!i.error && n === void 0 && e.jsxs("p", {
                role: "alert",
                children: ["Не удалось загрузить настройки. ", e.jsx("button", {
                    className: "legal-link",
                    onClick: i.reload,
                    children: "Повторить"
                })]
            }), ((R = t.data) == null ? void 0 : R.context.analyticsAvailable) === !1 && e.jsx("p", {
                className: "form-note",
                children: "Аналитика сейчас недоступна и выключена."
            }), (l == null ? void 0 : l.pendingWithdrawal) && e.jsx("p", {
                className: "form-note",
                role: "status",
                children: "Аналитика выключена. Подтверждение отказа ещё проверяется."
            }), (l == null ? void 0 : l.requiresNewChoice) && e.jsx("p", {
                className: "form-note",
                role: "status",
                children: "Условия обновились. Проверь документы и подтверди выбор заново."
            }), m && e.jsx("p", {
                role: "alert",
                children: m
            }), e.jsx(g, {
                loading: h,
                disabled: r && !((B = t.data) != null && B.context.analyticsAvailable),
                onClick: () => void p(),
                children: "Сохранить настройки"
            })]
        })
    })
}
function ie({onDone: s, prepared: c, onPrepared: n}) {
    var u, m;
    const a = y("cookie-step-document", U)
      , [i,t] = j.useState(!1)
      , [o,d] = j.useState(!1)
      , [l,r] = j.useState("");
    async function h(x=c) {
        var p;
        if (!o) {
            d(!0),
            r("");
            try {
                const f = x && ((p = a.data) == null ? void 0 : p.context.analyticsAvailable) !== !1;
                if (await H(f, a.data),
                !O())
                    throw new w("PRIVACY_UNAVAILABLE");
                f && N("ng_cookie_accept", {
                    mode: "on"
                }),
                s()
            } catch (f) {
                r(f instanceof Error ? f.message : "Не удалось сохранить выбор."),
                f instanceof w && f.definitive && a.reload()
            } finally {
                d(!1)
            }
        }
    }
    return e.jsxs(e.Fragment, {
        children: [e.jsx("h1", {
            children: e.jsxs("span", {
                className: "cookie-title",
                children: ["Номерок использует cookies ", e.jsx(J, {})]
            })
        }), e.jsx("p", {
            className: "setup-copy",
            children: "Они помогают запоминать твой вход и настройки, а ещё понимать, что в игре можно сделать удобнее. Для аналитики используем Яндекс Метрику и Вебвизор."
        }), e.jsx(_, {
            documentKey: "cookies",
            snapshot: ((u = a.data) == null ? void 0 : u.cookies) ?? null,
            analyticsSnapshot: ((m = a.data) == null ? void 0 : m.document) ?? null
        }), e.jsxs("div", {
            className: "setup-actions",
            children: [e.jsx(g, {
                loading: o,
                disabled: !a.data && !a.error,
                onClick: () => void h(),
                children: "Принять"
            }), e.jsx(g, {
                secondary: !0,
                onClick: () => {
                    N("ng_cookie_settings"),
                    t(!0)
                }
                ,
                children: "Настроить"
            })]
        }), l && e.jsxs(e.Fragment, {
            children: [e.jsx("p", {
                role: "alert",
                children: l
            }), e.jsx(g, {
                secondary: !0,
                disabled: o,
                onClick: () => {
                    n(!1),
                    h(!1)
                }
                ,
                children: "Продолжить без аналитики"
            })]
        }), i && e.jsx(Q, {
            mode: "onboarding",
            initialAnalytics: c,
            onPrepared: n,
            shown: a.data ?? null,
            onRefresh: a.reload,
            onClose: () => t(!1)
        })]
    })
}
export {Z as A, Q as C, _ as D, A as L, ne as a, ie as b, oe as c, se as r, ae as u};
