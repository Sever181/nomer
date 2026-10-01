import {n as d, f as j, h as p, B as k} from "./game-plate-BmsLgpqE.js";
import {r as f, j as e} from "./account-BjMYOorF.js";
function a(t, s) {
    const r = String(t);
    if (!/^-?\d+$/.test(r))
        return s[2];
    const l = BigInt(r)
      , c = l < 0n ? -l : l
      , i = Number(c % 100n);
    return s[i >= 11 && i <= 14 ? 2 : i % 10 === 1 ? 0 : i % 10 >= 2 && i % 10 <= 4 ? 1 : 2]
}
const u = (t, s) => `${d(t)} ${a(t, s)}`;
function g(t) {
    if (!/^-?\d+(?:\.\d+)?$/.test(t))
        return "—";
    const s = t.startsWith("-")
      , r = s ? t.slice(1) : t;
    return `${/^0+(?:\.0+)?$/.test(r) ? "" : s ? "−" : "+"}${j(r)}`
}
function b(t) {
    if (t.title)
        return t.title;
    const s = {
        D_SPIN_60: "components",
        D_COMPLETE_20: "full",
        D_RARE_3: "natural",
        W_SPIN_420: "components",
        W_COMPLETE_140: "full",
        W_RARE_20: "natural",
        W_PAID_PARTS: "components",
        W_FULL_RESULTS: "full",
        W_PURPLE_PLUS: "purple"
    }
      , r = t.metric ?? s[t.id]
      , l = d(t.target)
      , c = u(t.target, ["номер", "номера", "номеров"]);
    return r === "components" || t.semanticSlot === "paid_parts" ? `Прокрути цифры или буквы ${l} ${a(t.target, ["раз", "раза", "раз"])}` : r === "full" || t.semanticSlot === "full_results" ? `Собери ${c}` : r === "purple" ? `Найди ${c} редкости «Очень редкий» или выше` : r === "natural" ? `Найди ${c} редкости «Редкий» или выше` : "Задание"
}
function L(t) {
    return {
        title: t ? "Проверяем подтверждение почты" : "Проверяем смену пароля",
        unknown: t ? "Ответ задержался. Проверь, подтвердилась ли почта. Пока не подтверждай её повторно." : "Ответ задержался. Проверь, сменился ли пароль. Пока не начинай новую смену.",
        notFound: t ? "Пока не удалось узнать, подтвердилась ли почта. Войди в тот же аккаунт и проверь результат ещё раз." : "Пока не удалось узнать, сменился ли пароль. Попробуй войти в тот же аккаунт с новым паролем и проверь результат ещё раз.",
        signIn: t ? "Для проверки войди в аккаунт, где добавлял почту." : "Для проверки войди в тот аккаунт, который восстанавливал."
    }
}
const n = {
    create: (t, s, r) => e.jsxs(e.Fragment, {
        children: [e.jsxs("defs", {
            children: [s("edge", "#69a2ff", "#225ad6"), s("enamel", "#ffffff", "#e8effb"), s("gold", "#ffdc6d", "#f8a627")]
        }), e.jsx("ellipse", {
            cx: "24",
            cy: "41",
            rx: "19",
            ry: "3",
            fill: "#223764",
            opacity: ".13"
        }), e.jsxs("g", {
            transform: "translate(6.2 1.5) scale(.73)",
            stroke: "#b9c9e9",
            strokeWidth: ".9",
            strokeLinejoin: "round",
            children: [e.jsx("path", {
                d: "M1 6 14 .9 26 6.3 13 12Z",
                fill: "#fff"
            }), e.jsx("path", {
                d: "M1 6 13 12v15.2L1 21.2Z",
                fill: "#fff"
            }), e.jsx("path", {
                d: "M13 12 26 6.3v15.2L13 27.2Z",
                fill: "#e4ecfb"
            }), e.jsxs("g", {
                fill: "#2563eb",
                stroke: "none",
                children: [e.jsx("ellipse", {
                    cx: "9.2",
                    cy: "5.5",
                    rx: "1.9",
                    ry: ".9"
                }), e.jsx("ellipse", {
                    cx: "17.4",
                    cy: "7.5",
                    rx: "1.9",
                    ry: ".9"
                }), e.jsx("ellipse", {
                    cx: "7",
                    cy: "16.5",
                    rx: "1.45",
                    ry: "1.75"
                }), e.jsx("ellipse", {
                    cx: "16.7",
                    cy: "14",
                    rx: "1.3",
                    ry: "1.6"
                }), e.jsx("ellipse", {
                    cx: "20",
                    cy: "16.6",
                    rx: "1.3",
                    ry: "1.6"
                }), e.jsx("ellipse", {
                    cx: "23.2",
                    cy: "19.2",
                    rx: "1.3",
                    ry: "1.6"
                })]
            })]
        }), e.jsx("rect", {
            x: "28.2",
            y: "1.5",
            width: "17.3",
            height: "18.8",
            rx: "4.6",
            fill: "#eff4ff"
        }), e.jsx("text", {
            x: "36.85",
            y: "17.2",
            fill: "#2563eb",
            fontFamily: "Onest, sans-serif",
            fontSize: "19",
            fontWeight: "700",
            textAnchor: "middle",
            children: r
        }), e.jsxs("g", {
            transform: "translate(0 9.5) rotate(-8 23 22)",
            children: [e.jsx("rect", {
                x: "3.5",
                y: "16",
                width: "40",
                height: "14",
                rx: "3.3",
                fill: "#1844a7"
            }), e.jsx("rect", {
                x: "3.5",
                y: "13",
                width: "40",
                height: "14",
                rx: "3.3",
                fill: t("edge")
            }), e.jsx("rect", {
                x: "5.8",
                y: "15",
                width: "35.4",
                height: "10",
                rx: "1.7",
                fill: t("enamel")
            }), e.jsx("path", {
                d: "M33.2 15.6v8.9",
                stroke: "#afbed5",
                strokeWidth: "1"
            }), e.jsx("path", {
                d: "M10.5 17.5h4.4l-2.7 5m6-5h4.4l-2.7 5m6-5h4.4l-2.7 5",
                fill: "none",
                stroke: "#26385c",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }), e.jsx("path", {
                d: "M36 18h2.5m-2.5 3h2.5",
                stroke: "#55729b",
                strokeWidth: "1",
                strokeLinecap: "round"
            }), e.jsx("path", {
                d: "M6.8 14h29",
                stroke: "#c7e0ff",
                strokeWidth: "1",
                strokeLinecap: "round"
            })]
        }), e.jsx("circle", {
            cx: "36.8",
            cy: "38.6",
            r: "7.2",
            fill: "#cc7920"
        }), e.jsx("circle", {
            cx: "36.8",
            cy: "37.1",
            r: "7.2",
            fill: t("gold")
        }), e.jsx("path", {
            d: "M32.3 33a5.8 5.8 0 0 1 6.5-1.4",
            stroke: "#fff0a1",
            strokeWidth: "1.2",
            strokeLinecap: "round",
            fill: "none"
        }), e.jsx("path", {
            d: "M36.8 33.5v7.2m-3.6-3.6h7.2",
            stroke: "#fff",
            strokeWidth: "2.25",
            strokeLinecap: "round"
        })]
    }),
    collection: (t, s) => e.jsxs(e.Fragment, {
        children: [e.jsxs("defs", {
            children: [s("cover", "#7cb6ff", "#3777d6"), s("spine", "#366ed1", "#244f9f"), s("card", "#ffffff", "#edf3ff")]
        }), e.jsx("ellipse", {
            cx: "25",
            cy: "42",
            rx: "16.5",
            ry: "3",
            fill: "#223764",
            opacity: ".13"
        }), e.jsx("path", {
            d: "M9 9.2 33.9 5.3c2-.3 3.3 1.2 3.3 3.2v29.1c0 1.4-.7 2.7-2.2 2.9L12 44c-2.8.4-5.4-1.2-5.4-4.1V13.5c0-2.1.8-3.6 2.4-4.3Z",
            fill: t("spine")
        }), e.jsx("path", {
            d: "m13.4 7.5 24.1-2.1c1.9-.2 3.1 1 3.1 3v28.8c0 1.7-.9 2.7-2.4 2.9l-24.8 2.3Z",
            fill: t("cover")
        }), e.jsx("path", {
            d: "M15.1 9.2 36.9 7.3",
            stroke: "#bfdcff",
            strokeWidth: "1.1",
            strokeLinecap: "round"
        }), e.jsx("path", {
            d: "M10 13.4v23.8",
            stroke: "#8dbdfa",
            strokeWidth: "1.2",
            strokeLinecap: "round",
            opacity: ".75"
        }), e.jsxs("g", {
            transform: "rotate(-8 28 19)",
            children: [e.jsx("rect", {
                x: "15.1",
                y: "16.4",
                width: "27.8",
                height: "7.4",
                rx: "1.6",
                fill: "#234d8d",
                opacity: ".27"
            }), e.jsx("rect", {
                x: "14.8",
                y: "14.8",
                width: "27.8",
                height: "7.4",
                rx: "1.6",
                fill: t("card"),
                stroke: "#9db5d7",
                strokeWidth: ".8"
            }), e.jsx("path", {
                d: "M36.4 15.4v6.2",
                stroke: "#92a8c4",
                strokeWidth: ".8"
            }), e.jsx("path", {
                d: "M16.5 16h17.6",
                stroke: "#fff",
                strokeWidth: ".9",
                strokeLinecap: "round"
            })]
        }), e.jsxs("g", {
            transform: "rotate(7 29 30)",
            children: [e.jsx("rect", {
                x: "17.3",
                y: "29.1",
                width: "27.8",
                height: "7.4",
                rx: "1.6",
                fill: "#234d8d",
                opacity: ".27"
            }), e.jsx("rect", {
                x: "17",
                y: "27.5",
                width: "27.8",
                height: "7.4",
                rx: "1.6",
                fill: t("card"),
                stroke: "#9db5d7",
                strokeWidth: ".8"
            }), e.jsx("path", {
                d: "M38.6 28.1v6.2",
                stroke: "#92a8c4",
                strokeWidth: ".8"
            }), e.jsx("path", {
                d: "M18.7 28.7h17.6",
                stroke: "#fff",
                strokeWidth: ".9",
                strokeLinecap: "round"
            })]
        })]
    }),
    market: (t, s) => e.jsxs(e.Fragment, {
        children: [e.jsxs("defs", {
            children: [s("tag", "#75b6ff", "#357bea"), s("hammer", "#ffdd8e", "#e7a03d"), s("handle", "#d99b5d", "#ad6634")]
        }), e.jsx("ellipse", {
            cx: "25",
            cy: "42",
            rx: "19",
            ry: "3",
            fill: "#223764",
            opacity: ".13"
        }), e.jsx("path", {
            d: "M7 24.3h16.9c1 0 1.5.2 2.2.8l9.2 7.3c.7.6.7 1.6 0 2.2l-9.2 7.3c-.7.6-1.2.8-2.2.8H7a3 3 0 0 1-3-3V27.3a3 3 0 0 1 3-3Z",
            fill: "#2257ad"
        }), e.jsx("path", {
            d: "M7 22.6h16.9c1 0 1.5.2 2.2.8l9.2 7.3c.7.6.7 1.6 0 2.2l-9.2 7.3c-.7.6-1.2.8-2.2.8H7a3 3 0 0 1-3-3V25.6a3 3 0 0 1 3-3Z",
            fill: t("tag")
        }), e.jsx("path", {
            d: "M7.2 24.4h14.2",
            stroke: "#c4e0ff",
            strokeWidth: "1.1",
            strokeLinecap: "round"
        }), e.jsx("circle", {
            cx: "28.8",
            cy: "31.8",
            r: "2.2",
            fill: "#1d59ac"
        }), e.jsx("circle", {
            cx: "28.8",
            cy: "31.3",
            r: "1.65",
            fill: "#edf6ff"
        }), e.jsx("path", {
            d: "M12 37V27.5h3.7a2.9 2.9 0 0 1 0 5.8h-5.1m0 1.8h5.8",
            stroke: "#f8fbff",
            strokeWidth: "1.85",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), e.jsxs("g", {
            transform: "rotate(-36 28 16)",
            children: [e.jsx("rect", {
                x: "26.4",
                y: "15.5",
                width: "6.4",
                height: "26.2",
                rx: "2.8",
                fill: "#885127"
            }), e.jsx("rect", {
                x: "25.4",
                y: "14.5",
                width: "6.4",
                height: "26.2",
                rx: "2.8",
                fill: t("handle")
            }), e.jsx("path", {
                d: "M27.2 20.3v16.5",
                stroke: "#ebbb82",
                strokeWidth: "1.25",
                strokeLinecap: "round"
            }), e.jsx("rect", {
                x: "17",
                y: "7.6",
                width: "23",
                height: "13.1",
                rx: "2.7",
                fill: "#b67729"
            }), e.jsx("rect", {
                x: "16.2",
                y: "5.8",
                width: "23",
                height: "13.1",
                rx: "2.7",
                fill: t("hammer")
            }), e.jsx("rect", {
                x: "17.7",
                y: "5.8",
                width: "3",
                height: "13.1",
                rx: "1",
                fill: "#ffe5a6"
            }), e.jsx("rect", {
                x: "34.7",
                y: "5.8",
                width: "3",
                height: "13.1",
                rx: "1",
                fill: "#eab150"
            }), e.jsx("path", {
                d: "M22.7 7.6h9.5",
                stroke: "#fff0bf",
                strokeWidth: "1.1",
                strokeLinecap: "round"
            })]
        })]
    }),
    tops: (t, s) => e.jsxs(e.Fragment, {
        children: [e.jsxs("defs", {
            children: [s("cup", "#ffe17a", "#f0a225"), s("stem", "#ffd271", "#d98b1c"), s("base", "#f5867b", "#cf5357")]
        }), e.jsx("ellipse", {
            cx: "24",
            cy: "43",
            rx: "16",
            ry: "2.7",
            fill: "#644023",
            opacity: ".13"
        }), e.jsx("path", {
            d: "M14 9H6.5v5.5c0 5.3 3.9 8.8 10.1 8.8M34 9h7.5v5.5c0 5.3-3.9 8.8-10.1 8.8",
            stroke: "#d99626",
            strokeWidth: "4",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), e.jsx("path", {
            d: "M12.5 8.7H6.6v5.4m28.9-5.4h5.9v5.4",
            stroke: "#ffdf7c",
            strokeWidth: "1.6",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), e.jsx("path", {
            d: "M20.8 24h6.4v10.9h-6.4Z",
            fill: t("stem")
        }), e.jsx("path", {
            d: "M17.6 34h12.8l2.5 4.2H15.1Z",
            fill: "#eaa22c"
        }), e.jsx("path", {
            d: "M12.6 5.5h22.8v10a11.4 11.4 0 0 1-22.8 0Z",
            fill: t("cup")
        }), e.jsx("path", {
            d: "M15.1 7.6v8.6a8.7 8.7 0 0 0 3.9 7.3",
            stroke: "#fff0ae",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            fill: "none",
            opacity: ".8"
        }), e.jsx("path", {
            d: "m24 9.7 2.1 4.1 4.5.6-3.3 3.2.8 4.5-4.1-2.1-4.1 2.1.8-4.5-3.3-3.2 4.5-.6Z",
            fill: "#c77d1d",
            opacity: ".58"
        }), e.jsx("path", {
            d: "m24 9.1 2.1 4.1 4.5.6-3.3 3.2.8 4.5-4.1-2.1-4.1 2.1.8-4.5-3.3-3.2 4.5-.6Z",
            fill: "#fff5c2"
        }), e.jsx("rect", {
            x: "12.8",
            y: "36.2",
            width: "22.4",
            height: "7",
            rx: "2",
            fill: "#ac4147"
        }), e.jsx("rect", {
            x: "12.8",
            y: "34.6",
            width: "22.4",
            height: "7",
            rx: "2",
            fill: t("base")
        }), e.jsx("rect", {
            x: "19.3",
            y: "36.3",
            width: "9.4",
            height: "3.1",
            rx: ".8",
            fill: "#ffe6a3"
        })]
    }),
    history: (t, s) => e.jsxs(e.Fragment, {
        children: [e.jsxs("defs", {
            children: [s("rim", "#7ec8ff", "#3c8de1"), s("dial", "#ffffff", "#edf4fc"), s("arrow", "#ffc776", "#f28a43")]
        }), e.jsx("ellipse", {
            cx: "25",
            cy: "42",
            rx: "17.4",
            ry: "2.8",
            fill: "#21476a",
            opacity: ".13"
        }), e.jsx("circle", {
            cx: "25.8",
            cy: "26",
            r: "17.8",
            fill: "#286bad"
        }), e.jsx("circle", {
            cx: "24",
            cy: "23.8",
            r: "17.8",
            fill: t("rim")
        }), e.jsx("circle", {
            cx: "24",
            cy: "23.8",
            r: "14",
            fill: "#2676c2"
        }), e.jsx("circle", {
            cx: "24",
            cy: "23.1",
            r: "13.3",
            fill: t("dial")
        }), e.jsx("path", {
            d: "M24 12.3v1.4m10.8 9.4h-1.4M24 33.9v-1.4m-10.8-9.4h1.4",
            stroke: "#aec4dc",
            strokeWidth: "1.7",
            strokeLinecap: "round"
        }), e.jsx("path", {
            d: "M24 15.7v7.4l5.1 3.8",
            stroke: "#31557e",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        }), e.jsx("circle", {
            cx: "24",
            cy: "23.1",
            r: "2.1",
            fill: "#f5a454"
        }), e.jsx("path", {
            d: "M10.1 33.7C1.3 25.4 3 11.5 13.3 6",
            stroke: "#d87336",
            strokeWidth: "4.9",
            strokeLinecap: "round",
            fill: "none"
        }), e.jsx("path", {
            d: "M9.6 32.6C1.7 24.4 3.1 11.6 13.4 6",
            stroke: t("arrow"),
            strokeWidth: "4.9",
            strokeLinecap: "round",
            fill: "none"
        }), e.jsx("path", {
            d: "m10.7 2.7 8.9 1.5-5.5 7.6Z",
            fill: "#ffc474"
        }), e.jsx("path", {
            d: "M7.2 12.7a18 18 0 0 1 5.2-5.2",
            stroke: "#ffe0a8",
            strokeWidth: "1.1",
            strokeLinecap: "round",
            fill: "none"
        })]
    })
};
function M({name: t, letter: s}) {
    var i;
    const r = f.useId().replace(/:/g, "")
      , l = o => `url(#${r}-${o})`
      , c = (o, h, x) => e.jsxs("linearGradient", {
        id: `${r}-${o}`,
        x1: "0",
        y1: "0",
        x2: ".8",
        y2: "1",
        children: [e.jsx("stop", {
            stopColor: h
        }), e.jsx("stop", {
            offset: "1",
            stopColor: x
        })]
    });
    return e.jsx("svg", {
        className: `ng-nav-icon ng-nav-icon--${t}`,
        width: "32",
        height: "32",
        viewBox: "0 0 48 48",
        fill: "none",
        "aria-hidden": "true",
        focusable: "false",
        children: (i = n[t]) == null ? void 0 : i.call(n, l, c, s)
    })
}
function W({order: t, email: s}) {
    const [r,l] = f.useState(!1)
      , [c,i] = f.useState(!1);
    return e.jsxs("div", {
        className: "stack ym-hide-content",
        children: [e.jsx("p", {
            className: "body-copy",
            children: s ? e.jsxs(e.Fragment, {
                children: ["Напиши на ", e.jsx("strong", {
                    children: s
                }), ". ", t ? "Укажи номер заказа и опиши, что произошло." : "Опиши проблему с доступом. Одного ника недостаточно для восстановления."]
            }) : e.jsx(e.Fragment, {
                children: "Не удалось загрузить адрес поддержки. Попробуй открыть помощь позже"
            })
        }), t && e.jsxs(e.Fragment, {
            children: [e.jsx(p, {
                label: "Номер заказа",
                value: t
            }), e.jsx(k, {
                secondary: !0,
                onClick: async () => {
                    try {
                        await navigator.clipboard.writeText(t),
                        l(!0)
                    } catch {
                        i(!0)
                    }
                }
                ,
                children: r ? "Номер скопирован" : "Скопировать номер заказа"
            }), c && e.jsxs("label", {
                className: "stack ym-hide-content",
                children: ["Выдели и скопируй номер", e.jsx("input", {
                    className: "ym-disable-keys",
                    readOnly: !0,
                    "aria-label": "Номер заказа для копирования",
                    value: t,
                    onFocus: o => o.currentTarget.select()
                })]
            })]
        })]
    })
}
export {M as N, W as S, u as c, L as r, g as s, b as t};
