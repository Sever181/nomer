import {n as U, o as Y, j as e, r as x, g as V, R as J, h as X} from "./account-BjMYOorF.js";
const $ = {
    common: {
        label: "Обычный",
        color: "#8a94a3"
    },
    rare: {
        label: "Редкий",
        color: "#2563eb"
    },
    "very-rare": {
        label: "Очень редкий",
        color: "#7c3aed"
    },
    legendary: {
        label: "Элитный",
        color: "#dc2626"
    },
    ultra: {
        label: "Легендарный",
        color: "#d97706"
    }
}
  , N = {
    GRAY: "common",
    BLUE: "rare",
    PURPLE: "very-rare",
    RED: "legendary",
    GOLD: "ultra"
};
function F(t) {
    if (t == null)
        return "—";
    if (typeof t == "number")
        return Number.isFinite(t) ? t.toLocaleString("ru-RU", {
            maximumFractionDigits: 20
        }) : "—";
    const i = String(t);
    if (/^-?\d+$/.test(i))
        return BigInt(i).toLocaleString("ru-RU");
    if (/^-?\d+[.]\d+$/.test(i)) {
        const [s,r] = i.split(".");
        return BigInt(s).toLocaleString("ru-RU") + (r.replace(/0+$/, "") ? "," + r.replace(/0+$/, "") : "")
    }
    return "—"
}
const Q = t => t == null ? "—" : F(t) + " ₽"
  , ye = t => t != null && BigInt(t) === 0n ? null : Q(t);
function be(t) {
    if (!t || !/^-?\d+$/.test(t))
        return "—";
    const i = BigInt(t)
      , s = i < 0n ? "−" : ""
      , r = i < 0n ? -i : i;
    return `${s}${F(r / 100n)}${r % 100n ? "," + (r % 100n).toString().padStart(2, "0") : ""} ₽`
}
const A = t => t.descriptor ? U(t.descriptor) : `${t.letters[0]}${t.digits}${t.letters.slice(1)} ${t.region}`
  , q = t => {
    var i;
    return ((i = t.descriptor) == null ? void 0 : i.country) === "BY" ? /^\d{4}$/.test(t.digits) && /^[A-ZА-Я]{2}$/.test(t.letters) : /^\d{3}$/.test(t.digits) && /^[А-ЯA-Z]{3}$/.test(t.letters)
}
  , z = t => t ? new Date(t).toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
}) : "—";
function ve(t) {
    var i, s, r, a;
    return {
        id: (t == null ? void 0 : t.id) ?? "",
        version: (t == null ? void 0 : t.version) ?? "",
        letters: (t == null ? void 0 : t.letters) ?? "···",
        digits: (t == null ? void 0 : t.digits) ?? "···",
        region: (t == null ? void 0 : t.regionCode) ?? "",
        rarityKnown: !!(t != null && t.result),
        tier: t != null && t.result ? N[t.result.displayTier] : "common",
        value: ((i = t == null ? void 0 : t.result) == null ? void 0 : i.intrinsicGameRub) ?? null,
        saveReward: ((s = t == null ? void 0 : t.result) == null ? void 0 : s.saveRewardGameRub) ?? "0",
        instantSell: ((r = t == null ? void 0 : t.result) == null ? void 0 : r.immediateSellGameRub) ?? null,
        systemSell: null,
        editable: !1,
        marketEligible: !1,
        auctionEligible: !1,
        acquired: "",
        ...((a = t == null ? void 0 : t.result) == null ? void 0 : a.prestige) !== "NONE" && (t != null && t.result) ? {
            series: t.result.prestige === "JACKPOT" ? "Спецсерия" : "Статусная серия"
        } : {}
    }
}
function Me(t) {
    return {
        id: t.plateId,
        lifeId: t.lifeId,
        frameId: t.frameId,
        version: t.version,
        letters: t.letters,
        digits: t.digits,
        region: t.regionCode,
        descriptor: t.descriptor,
        tier: N[t.displayTier],
        value: t.intrinsicGameRub ?? null,
        saveReward: "0",
        instantSell: null,
        systemSell: t.favorite ? null : t.actions.systemLiquidationGameRub,
        editable: !t.favorite && t.actions.edit,
        marketEligible: !t.favorite && t.actions.marketplaceList,
        auctionEligible: !t.operationLock && !t.favorite,
        acquired: z(t.acquiredAt),
        ...t.favorite ? {
            lockedReason: "В избранном. Сними защиту, чтобы продать или изменить номер."
        } : {},
        ...t.prestige !== "NONE" ? {
            series: t.prestige === "JACKPOT" ? "Спецсерия" : "Статусная серия"
        } : {},
        ...t.operationLock ? {
            lockedReason: t.operationLock === "marketplace" ? "Номер выставлен на продажу." : "Сейчас другое действие с этим номером ещё не завершено."
        } : {}
    }
}
function we(t) {
    const i = t.descriptor;
    return {
        descriptor: i,
        id: i.publicPlateId ?? "",
        lifeId: t.lifeId,
        frameId: t.frameId,
        version: t.version,
        letters: i.letters,
        digits: i.digits,
        region: i.regionCode,
        tier: N[t.displayTier],
        value: t.intrinsicGameRub,
        saveReward: "0",
        instantSell: null,
        systemSell: null,
        editable: !1,
        marketEligible: !1,
        auctionEligible: !1,
        acquired: z(t.acquiredAt)
    }
}
function Ne(t) {
    if (!t)
        return "—";
    const i = BigInt(t.numerator)
      , s = BigInt(t.denominator)
      , r = i < 0n ? -i : i
      , a = (r * 100n + s / 2n) / s;
    return `${r % s ? "≈ " : ""}${i < 0n ? "−" : ""}${F(a / 100n)}${a % 100n ? "," + (a % 100n).toString().padStart(2, "0") : ""}`
}
function ke(t, i=Date.now()) {
    const s = new Date(t).getTime() - i;
    if (s <= 0)
        return "Время истекло";
    const r = Math.ceil(s / 6e4)
      , a = Math.floor(r / 60)
      , l = Math.floor(a / 24);
    return l ? `${l} д ${a % 24} ч` : a ? `${a} ч ${r % 60} мин` : `${r} мин`
}
function ee(t, i=t.intrinsicGameRub ?? null) {
    return {
        id: t.id,
        lifeId: t.lifeId,
        frameId: t.frameId,
        version: t.version ?? "",
        letters: t.letters,
        digits: t.digits,
        region: t.regionCode,
        rarityKnown: !!t.displayTier && t.displayTier in N,
        tier: t.displayTier && t.displayTier in N ? N[t.displayTier] : "common",
        value: i,
        saveReward: "0",
        instantSell: null,
        systemSell: null,
        editable: !1,
        marketEligible: !1,
        auctionEligible: !1,
        acquired: "",
        ...t.prestige && t.prestige !== "NONE" ? {
            series: t.prestige === "JACKPOT" ? "Спецсерия" : "Статусная серия"
        } : {}
    }
}
function Re(t) {
    return {
        ...ee({
            id: t.id ?? "",
            lifeId: t.lifeId,
            frameId: t.frameId,
            regionCode: t.regionCode,
            digits: t.digits,
            letters: t.letters,
            displayTier: t.displayTier,
            prestige: t.prestige
        }, t.intrinsicGameRub)
    }
}
const te = t => Y({
    regionCode: t.region,
    digits: t.digits,
    letters: t.letters
});
function ie(t) {
    const i = te(t);
    if (i)
        return i.amountGameRub.toLocaleString("ru-RU") + " ₽";
    const s = /^[0-9·]{0,3}$/.test(t.digits) && (t.digits.length < 3 || t.digits.includes("·"))
      , r = /^[АВЕКМНОРСТУХ·]{0,3}$/.test(t.letters) && (t.letters.length < 3 || t.letters.includes("·"));
    return (s || r) && /^[0-9·]{0,3}$/.test(t.digits) && /^[АВЕКМНОРСТУХ·]{0,3}$/.test(t.letters) ? "Собери номер, чтобы увидеть примерную стоимость" : "Примерная стоимость пока недоступна"
}
const se = [{
    id: "caption-style",
    title: "#СТИЛЬБЕШЕННЫЙ",
    family: "inscription",
    priceGameRub: "150000",
    availability: "available",
    materialKey: "caption-style"
}, {
    id: "caption-vag",
    title: "vagodroch",
    family: "inscription",
    priceGameRub: "150000",
    availability: "available",
    materialKey: "caption-vag"
}, {
    id: "caption-russia",
    title: "Российская Федерация",
    family: "inscription",
    priceGameRub: "150000",
    availability: "available",
    materialKey: "caption-russia"
}, {
    id: "caption-administration",
    title: "Администрация Президента",
    family: "inscription",
    priceGameRub: "150000",
    availability: "available",
    materialKey: "caption-administration"
}, {
    id: "caption-security",
    title: "Федеральная служба безопасности",
    family: "inscription",
    priceGameRub: "150000",
    availability: "available",
    materialKey: "caption-security"
}, {
    id: "caption-m-sport",
    title: "M",
    family: "inscription",
    priceGameRub: "150000",
    availability: "available",
    materialKey: "caption-m-sport"
}, {
    id: "caption-zr-performance",
    title: "ZR Performance",
    family: "inscription",
    priceGameRub: "150000",
    availability: "available",
    materialKey: "caption-zr-performance"
}, {
    id: "cosmic-purple",
    title: "Cosmic Purple",
    family: "css",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "cosmic-purple"
}, {
    id: "oil-slick",
    title: "Oil Slick",
    family: "css",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "oil-slick"
}, {
    id: "electric-cyan",
    title: "Electric Cyan",
    family: "css",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "electric-cyan"
}, {
    id: "crimson-void",
    title: "Crimson Void",
    family: "css",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "crimson-void"
}, {
    id: "aurora",
    title: "Aurora",
    family: "css",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "aurora"
}, {
    id: "liquid-gold",
    title: "Liquid Gold",
    family: "css",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "liquid-gold"
}, {
    id: "pink-nebula",
    title: "Pink Nebula",
    family: "css",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "pink-nebula"
}, {
    id: "emerald-black",
    title: "Emerald Black",
    family: "css",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "emerald-black"
}, {
    id: "frozen-ice-rework",
    title: "Frozen Ice Rework",
    family: "ice",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "frozen-ice-rework"
}, {
    id: "frozen-ice-original",
    title: "Frozen Ice",
    family: "legacy-ice",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "frozen-ice-original"
}, {
    id: "S01",
    title: "Constellations End",
    family: "reference",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "S01"
}, {
    id: "S02",
    title: "Clouds Watching",
    family: "reference",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "S02"
}, {
    id: "S03",
    title: "Shifting Grid",
    family: "reference",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "S03"
}, {
    id: "S04",
    title: "Live Laugh Lava / Lava Camo",
    family: "reference",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "S04"
}, {
    id: "S05",
    title: "Magma",
    family: "reference",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "S05"
}, {
    id: "S06",
    title: "Polished Stone",
    family: "reference",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "S06"
}, {
    id: "S07",
    title: "Bubbly",
    family: "reference",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "S07"
}, {
    id: "S08",
    title: "Rainbow Fog",
    family: "reference",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "S08"
}, {
    id: "S09",
    title: "Midas’ Shadow",
    family: "reference",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "S09"
}, {
    id: "S10",
    title: "Star Scout",
    family: "reference",
    priceGameRub: "150000",
    availability: "coming_soon",
    materialKey: "S10"
}]
  , re = "150000"
  , ae = se.map(t => ({
    ...t,
    priceGameRub: re,
    availability: t.availability === "available" ? "available" : "coming_soon"
}))
  , ne = t => ae.find(i => i.id === t && i.availability === "available") ?? null
  , le = t => {
    var i;
    return ((i = ne(t)) == null ? void 0 : i.id) ?? null
}
  , ce = {
    "caption-style": e.jsxs("div", {
        className: "inscription-frame",
        "data-inscription": "caption-style",
        "data-finish": "matte",
        "aria-hidden": "true",
        children: [e.jsx("div", {
            className: "inscription-rim"
        }), e.jsx("div", {
            className: "inscription-band",
            children: e.jsxs("svg", {
                viewBox: "0 0 520 30",
                preserveAspectRatio: "xMidYMid meet",
                "aria-hidden": "true",
                focusable: "false",
                children: [e.jsx("g", {
                    transform: "translate(17 0)",
                    children: e.jsxs("g", {
                        fill: "none",
                        stroke: "#dadddf",
                        strokeWidth: "1.15",
                        strokeLinecap: "round",
                        children: [e.jsx("circle", {
                            cx: "22",
                            cy: "15",
                            r: "7.5"
                        }), e.jsx("path", {
                            d: "m18 12 2 1m4 0 2-1m-7 6 3-1 3 1M11 7q-4 8 0 16M7 4q-5 11 0 22M3 2q-5 13 0 26m30-21q4 8 0 16m4-19q5 11 0 22m4-24q5 13 0 26"
                        })]
                    })
                }), e.jsx("g", {
                    transform: "translate(459 0)",
                    children: e.jsxs("g", {
                        fill: "none",
                        stroke: "#dadddf",
                        strokeWidth: "1.15",
                        strokeLinecap: "round",
                        children: [e.jsx("circle", {
                            cx: "22",
                            cy: "15",
                            r: "7.5"
                        }), e.jsx("path", {
                            d: "m18 12 2 1m4 0 2-1m-7 6 3-1 3 1M11 7q-4 8 0 16M7 4q-5 11 0 22M3 2q-5 13 0 26m30-21q4 8 0 16m4-19q5 11 0 22m4-24q5 13 0 26"
                        })]
                    })
                }), e.jsx("text", {
                    className: "inscription-bold",
                    x: "260",
                    y: "23",
                    fontSize: "24",
                    textAnchor: "middle",
                    textLength: "312",
                    lengthAdjust: "spacingAndGlyphs",
                    fill: "#f3f4f6",
                    children: "#СТИЛЬБЕШЕННЫЙ"
                })]
            })
        })]
    }),
    "caption-vag": e.jsxs("div", {
        className: "inscription-frame",
        "data-inscription": "caption-vag",
        "data-finish": "matte",
        "aria-hidden": "true",
        children: [e.jsx("div", {
            className: "inscription-rim"
        }), e.jsx("div", {
            className: "inscription-band",
            children: e.jsxs("svg", {
                viewBox: "0 0 520 30",
                preserveAspectRatio: "xMidYMid meet",
                "aria-hidden": "true",
                focusable: "false",
                children: [e.jsxs("g", {
                    fill: "#fa2025",
                    children: [e.jsx("path", {
                        d: "M36 3h31L53 26H22Z"
                    }), e.jsx("path", {
                        d: "M437 3h31l-14 23h-31Z"
                    })]
                }), e.jsxs("g", {
                    fill: "#f8f323",
                    children: [e.jsx("path", {
                        d: "M67 3h31L84 26H53Z"
                    }), e.jsx("path", {
                        d: "M468 3h31l-14 23h-31Z"
                    })]
                }), e.jsx("text", {
                    className: "inscription-italic",
                    x: "260",
                    y: "22",
                    fontSize: "23",
                    textAnchor: "middle",
                    fill: "#fafafa",
                    children: "vagodroch"
                }), e.jsx("path", {
                    d: "M213 26h94",
                    stroke: "#fafafa",
                    strokeWidth: "1.6"
                })]
            })
        })]
    }),
    "caption-russia": e.jsxs("div", {
        className: "inscription-frame",
        "data-inscription": "caption-russia",
        "data-finish": "satin",
        "aria-hidden": "true",
        children: [e.jsx("div", {
            className: "inscription-rim"
        }), e.jsx("div", {
            className: "inscription-band",
            children: e.jsxs("svg", {
                viewBox: "0 0 520 30",
                preserveAspectRatio: "xMidYMid meet",
                "aria-hidden": "true",
                focusable: "false",
                children: [e.jsxs("g", {
                    color: "#c4c5c7",
                    children: [e.jsx("g", {
                        transform: "translate(24 2) scale(.61)",
                        children: e.jsxs("g", {
                            fill: "currentColor",
                            stroke: "currentColor",
                            strokeLinejoin: "round",
                            strokeWidth: ".55",
                            children: [e.jsx("path", {
                                d: "M17 9 13 5l-4 1 4 3-1 6-4-3-5-6 1 9 5 5-7-3 3 7 7 3-8-1 7 7 5-3 2 5-4 4h6l2-3 2 3h6l-4-4 2-5 5 3 7-7-8 1 7-3 3-7-7 3 5-5 1-9-5 6-4 3-1-6 4-3-4-1-4 4-3 8Z"
                            }), e.jsx("path", {
                                d: "m8 5 1-3 2 1 2-2 1 4m14 0 1-4 2 2 2-1 1 3M18 3l1-2 3 1 3-1 1 2-1 3h-6Z"
                            }), e.jsx("path", {
                                d: "m15 18 7-2 7 2v8c0 4-7 7-7 7s-7-3-7-7Z",
                                fill: "#242426"
                            }), e.jsx("path", {
                                d: "m19 20 4 2 4-1-2 4-3 2-3-2 2-1-2-4Zm3 5-3 4m5-5 2 5",
                                fill: "none",
                                strokeWidth: "1.4"
                            })]
                        })
                    }), e.jsx("g", {
                        transform: "translate(470 2) scale(.61)",
                        children: e.jsxs("g", {
                            fill: "currentColor",
                            stroke: "currentColor",
                            strokeLinejoin: "round",
                            strokeWidth: ".55",
                            children: [e.jsx("path", {
                                d: "M17 9 13 5l-4 1 4 3-1 6-4-3-5-6 1 9 5 5-7-3 3 7 7 3-8-1 7 7 5-3 2 5-4 4h6l2-3 2 3h6l-4-4 2-5 5 3 7-7-8 1 7-3 3-7-7 3 5-5 1-9-5 6-4 3-1-6 4-3-4-1-4 4-3 8Z"
                            }), e.jsx("path", {
                                d: "m8 5 1-3 2 1 2-2 1 4m14 0 1-4 2 2 2-1 1 3M18 3l1-2 3 1 3-1 1 2-1 3h-6Z"
                            }), e.jsx("path", {
                                d: "m15 18 7-2 7 2v8c0 4-7 7-7 7s-7-3-7-7Z",
                                fill: "#242426"
                            }), e.jsx("path", {
                                d: "m19 20 4 2 4-1-2 4-3 2-3-2 2-1-2-4Zm3 5-3 4m5-5 2 5",
                                fill: "none",
                                strokeWidth: "1.4"
                            })]
                        })
                    })]
                }), e.jsx("text", {
                    className: "inscription-serif",
                    x: "260",
                    y: "22",
                    fontSize: "21",
                    textAnchor: "middle",
                    textLength: "358",
                    lengthAdjust: "spacingAndGlyphs",
                    fill: "#c4c5c7",
                    children: "РОССИЙСКАЯ ФЕДЕРАЦИЯ"
                })]
            })
        })]
    }),
    "caption-administration": e.jsxs("div", {
        className: "inscription-frame",
        "data-inscription": "caption-administration",
        "data-finish": "satin",
        "aria-hidden": "true",
        children: [e.jsx("div", {
            className: "inscription-rim"
        }), e.jsx("div", {
            className: "inscription-band",
            children: e.jsxs("svg", {
                viewBox: "0 0 520 30",
                preserveAspectRatio: "xMidYMid meet",
                "aria-hidden": "true",
                focusable: "false",
                children: [e.jsxs("g", {
                    color: "#c6ad75",
                    children: [e.jsx("g", {
                        transform: "translate(24 2) scale(.61)",
                        children: e.jsxs("g", {
                            fill: "currentColor",
                            stroke: "currentColor",
                            strokeLinejoin: "round",
                            strokeWidth: ".55",
                            children: [e.jsx("path", {
                                d: "M17 9 13 5l-4 1 4 3-1 6-4-3-5-6 1 9 5 5-7-3 3 7 7 3-8-1 7 7 5-3 2 5-4 4h6l2-3 2 3h6l-4-4 2-5 5 3 7-7-8 1 7-3 3-7-7 3 5-5 1-9-5 6-4 3-1-6 4-3-4-1-4 4-3 8Z"
                            }), e.jsx("path", {
                                d: "m8 5 1-3 2 1 2-2 1 4m14 0 1-4 2 2 2-1 1 3M18 3l1-2 3 1 3-1 1 2-1 3h-6Z"
                            }), e.jsx("path", {
                                d: "m15 18 7-2 7 2v8c0 4-7 7-7 7s-7-3-7-7Z",
                                fill: "#242426"
                            }), e.jsx("path", {
                                d: "m19 20 4 2 4-1-2 4-3 2-3-2 2-1-2-4Zm3 5-3 4m5-5 2 5",
                                fill: "none",
                                strokeWidth: "1.4"
                            })]
                        })
                    }), e.jsx("g", {
                        transform: "translate(470 2) scale(.61)",
                        children: e.jsxs("g", {
                            fill: "currentColor",
                            stroke: "currentColor",
                            strokeLinejoin: "round",
                            strokeWidth: ".55",
                            children: [e.jsx("path", {
                                d: "M17 9 13 5l-4 1 4 3-1 6-4-3-5-6 1 9 5 5-7-3 3 7 7 3-8-1 7 7 5-3 2 5-4 4h6l2-3 2 3h6l-4-4 2-5 5 3 7-7-8 1 7-3 3-7-7 3 5-5 1-9-5 6-4 3-1-6 4-3-4-1-4 4-3 8Z"
                            }), e.jsx("path", {
                                d: "m8 5 1-3 2 1 2-2 1 4m14 0 1-4 2 2 2-1 1 3M18 3l1-2 3 1 3-1 1 2-1 3h-6Z"
                            }), e.jsx("path", {
                                d: "m15 18 7-2 7 2v8c0 4-7 7-7 7s-7-3-7-7Z",
                                fill: "#242426"
                            }), e.jsx("path", {
                                d: "m19 20 4 2 4-1-2 4-3 2-3-2 2-1-2-4Zm3 5-3 4m5-5 2 5",
                                fill: "none",
                                strokeWidth: "1.4"
                            })]
                        })
                    })]
                }), e.jsx("text", {
                    className: "inscription-serif",
                    x: "260",
                    y: "20",
                    fontSize: "14.5",
                    textAnchor: "middle",
                    textLength: "418",
                    lengthAdjust: "spacingAndGlyphs",
                    fill: "#d2b57a",
                    children: "АДМИНИСТРАЦИЯ ПРЕЗИДЕНТА РОССИЙСКОЙ ФЕДЕРАЦИИ"
                })]
            })
        })]
    }),
    "caption-security": e.jsxs("div", {
        className: "inscription-frame",
        "data-inscription": "caption-security",
        "data-finish": "satin",
        "aria-hidden": "true",
        children: [e.jsx("div", {
            className: "inscription-rim"
        }), e.jsx("div", {
            className: "inscription-band",
            children: e.jsx("svg", {
                viewBox: "0 0 520 30",
                preserveAspectRatio: "xMidYMid meet",
                "aria-hidden": "true",
                focusable: "false",
                children: e.jsx("text", {
                    className: "inscription-serif",
                    x: "260",
                    y: "22",
                    fontSize: "21",
                    textAnchor: "middle",
                    textLength: "481",
                    lengthAdjust: "spacingAndGlyphs",
                    fill: "#d4d3d4",
                    children: "ФЕДЕРАЛЬНАЯ СЛУЖБА БЕЗОПАСНОСТИ"
                })
            })
        })]
    }),
    "caption-m-sport": e.jsxs("div", {
        className: "inscription-frame",
        "data-inscription": "caption-m-sport",
        "data-finish": "gloss",
        "aria-hidden": "true",
        children: [e.jsx("div", {
            className: "inscription-rim"
        }), e.jsx("div", {
            className: "inscription-band",
            children: e.jsx("svg", {
                viewBox: "0 0 520 30",
                preserveAspectRatio: "xMidYMid meet",
                "aria-hidden": "true",
                focusable: "false",
                children: e.jsxs("g", {
                    transform: "translate(229 2)",
                    children: [e.jsx("path", {
                        d: "m9 0-9 26h8l9-26Z",
                        fill: "#59c8f5"
                    }), e.jsx("path", {
                        d: "m18 0-9 26h8l9-26Z",
                        fill: "#164eae"
                    }), e.jsx("path", {
                        d: "m27 0-9 26h8l9-26Z",
                        fill: "#eb2638"
                    }), e.jsx("path", {
                        d: "m38 0-9 26h8l5-15 1 10h6l8-10-5 15h8l9-26H58L48 13 47 0Z",
                        fill: "#c6c7c9"
                    })]
                })
            })
        })]
    }),
    "caption-zr-performance": e.jsxs("div", {
        className: "inscription-frame",
        "data-inscription": "caption-zr-performance",
        "data-finish": "matte",
        "aria-hidden": "true",
        children: [e.jsx("div", {
            className: "inscription-rim"
        }), e.jsx("div", {
            className: "inscription-band",
            children: e.jsxs("svg", {
                viewBox: "0 0 520 30",
                preserveAspectRatio: "xMidYMid meet",
                "aria-hidden": "true",
                focusable: "false",
                children: [e.jsxs("g", {
                    transform: "translate(103 4) skewX(-12)",
                    children: [e.jsx("path", {
                        d: "M0 0h31l-2 6-19 14h15l-2 6H-8l2-6L14 6H-2Z",
                        fill: "#f2f4f6"
                    }), e.jsx("path", {
                        d: "M33 0h19l6 5-4 10-10 3 9 8H41L30 14h14l3-8H31Z",
                        fill: "#e94548"
                    })]
                }), e.jsx("text", {
                    className: "inscription-performance",
                    x: "308",
                    y: "23",
                    fontSize: "24",
                    textAnchor: "middle",
                    textLength: "277",
                    lengthAdjust: "spacingAndGlyphs",
                    fill: "#e9edef",
                    children: "PERFORMANCE"
                })]
            })
        })]
    })
};
function P({p: t, frameId: i, small: s=!1, spinning: r=null, reserve: a=!1, trigger: l, caption: f}) {
    const c = le(i === void 0 ? t.frameId : i)
      , o = f !== void 0
      , u = !!l || o;
    if (!c && !a && !u)
        return e.jsx(W, {
            p: t,
            small: s,
            spinning: r
        });
    const p = ["frame-plate", s && "frame-small", a && "frame-reserve", u && "frame-with-trigger", o && "frame-with-caption"].filter(Boolean).join(" ");
    return e.jsxs("div", {
        className: p,
        "data-frame-id": c ?? "none",
        style: {
            "--frame-rarity": $[t.tier].color
        },
        children: [e.jsxs("div", {
            className: "frame-plate-body",
            children: [e.jsx(W, {
                p: t,
                small: s,
                spinning: r
            }), c && e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                    className: "frame-rarity-halo",
                    "aria-hidden": "true",
                    hidden: t.rarityKnown === !1 || !!r
                }), ce[c]]
            })]
        }), e.jsx(oe, {
            caption: f,
            trigger: l
        })]
    })
}
function oe({caption: t, trigger: i}) {
    return t !== void 0 ? e.jsxs("div", {
        className: "frame-caption-row",
        children: [e.jsx("div", {
            className: "frame-caption",
            children: t
        }), i]
    }) : i ? e.jsx("div", {
        className: "frame-trigger-row",
        children: i
    }) : null
}
function Se({onClick: t, label: i="Выбрать рамку для номера"}) {
    return e.jsx("button", {
        type: "button",
        className: "frame-brush",
        "aria-label": i,
        onClick: s => {
            s.currentTarget.focus(),
            t()
        }
        ,
        children: e.jsx("span", {
            "aria-hidden": "true",
            children: e.jsx("img", {
                src: "/frame-materials/FRAME_CONCEPTS/assets/frame-brush.png",
                alt: ""
            })
        })
    })
}
const de = {
    plate: "create",
    dice: "create",
    grid: "collection",
    market: "market",
    trophy: "tops",
    history: "history",
    clock: "history",
    save: "save",
    sell: "sell",
    user: "profile",
    pin: "region",
    settings: "settings",
    telegram: "telegram-group",
    auction: "auction",
    tasks: "tasks",
    mail: "mail",
    gift: "gift",
    lock: "security",
    security: "security",
    sun: "palette",
    palette: "palette",
    auto: "auto",
    double: "double",
    book: "book",
    friends: "friends",
    logout: "logout"
};
function me(t) {
    return `/ui-theme/${["auction", "tasks", "mail", "gift", "security", "palette", "auto", "double", "book", "friends", "logout", "coin"].includes(t) ? "game-v7" : "game-v6"}/${t}.png`
}
function H({name: t, className: i=""}) {
    return e.jsx("img", {
        className: `game-art-icon ${i}`,
        "data-art": t,
        src: me(t),
        width: "48",
        height: "48",
        alt: "",
        "aria-hidden": "true",
        draggable: !1
    })
}
function he({name: t, size: i}) {
    const s = x.useId().replace(/:/g, "")
      , r = `url(#${s}b)`
      , a = `url(#${s}w)`
      , l = (f, c, o=34) => e.jsxs("g", {
        transform: `translate(${f} ${c}) rotate(-7 17 9)`,
        children: [e.jsx("rect", {
            y: "3",
            width: o,
            height: "17",
            rx: "3",
            fill: "#1844a7"
        }), e.jsx("rect", {
            width: o,
            height: "17",
            rx: "3",
            fill: r
        }), e.jsx("rect", {
            x: "2.5",
            y: "2.5",
            width: o - 5,
            height: "12",
            rx: "1.4",
            fill: a
        }), e.jsx("path", {
            d: `M${o - 10} 3v11M6 7h4m3 0h4M6 11h11`,
            stroke: "#55729b",
            strokeWidth: "1.6",
            strokeLinecap: "round"
        })]
    });
    return e.jsxs("svg", {
        width: i,
        height: i,
        viewBox: "0 0 48 48",
        fill: "none",
        "aria-hidden": "true",
        focusable: "false",
        className: "blue4-icon",
        children: [e.jsxs("defs", {
            children: [e.jsxs("linearGradient", {
                id: s + "b",
                x2: ".3",
                y2: "1",
                children: [e.jsx("stop", {
                    stopColor: "#8abaff"
                }), e.jsx("stop", {
                    offset: "1",
                    stopColor: "#2563eb"
                })]
            }), e.jsxs("linearGradient", {
                id: s + "w",
                x2: ".3",
                y2: "1",
                children: [e.jsx("stop", {
                    stopColor: "#fff"
                }), e.jsx("stop", {
                    offset: "1",
                    stopColor: "#e8effb"
                })]
            })]
        }), e.jsx("ellipse", {
            cx: "24",
            cy: "41",
            rx: "17",
            ry: "2.8",
            fill: "#223764",
            opacity: ".13"
        }), t === "plate" ? l(4, 14, 40) : t === "double" ? e.jsxs(e.Fragment, {
            children: [l(4, 7), l(10, 22)]
        }) : t === "pin" ? e.jsxs(e.Fragment, {
            children: [e.jsx("path", {
                d: "M25 43S10 28 10 19a15 15 0 1 1 30 0c0 9-15 24-15 24Z",
                fill: "#1844a7"
            }), e.jsx("path", {
                d: "M23 40S8 25 8 17a15 15 0 1 1 30 0c0 8-15 23-15 23Z",
                fill: r
            }), e.jsx("circle", {
                cx: "23",
                cy: "17",
                r: "7",
                fill: a
            }), e.jsx("path", {
                d: "M12 15a11 11 0 0 1 9-9",
                stroke: "#c7e0ff",
                strokeWidth: "2",
                strokeLinecap: "round"
            })]
        }) : t === "tasks" ? e.jsxs("g", {
            transform: "rotate(-7 24 24)",
            children: [e.jsx("rect", {
                x: "9",
                y: "6",
                width: "31",
                height: "36",
                rx: "4",
                fill: "#1844a7"
            }), e.jsx("rect", {
                x: "7",
                y: "3",
                width: "31",
                height: "36",
                rx: "4",
                fill: r
            }), e.jsx("rect", {
                x: "10",
                y: "7",
                width: "25",
                height: "28",
                rx: "2",
                fill: a
            }), e.jsx("rect", {
                x: "17",
                y: "2",
                width: "12",
                height: "6",
                rx: "2",
                fill: "#91bcff"
            }), e.jsx("path", {
                d: "m14 16 2 2 4-5m-6 13 2 2 4-5M25 16h6m-6 10h6",
                stroke: "#2563eb",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })]
        }) : e.jsxs(e.Fragment, {
            children: [e.jsx("circle", {
                cx: "24",
                cy: "25",
                r: "16",
                fill: a,
                stroke: "#b9c9e9",
                strokeWidth: "1.4"
            }), e.jsx("path", {
                d: "M10 19a15 15 0 0 1 26-6m2 17a15 15 0 0 1-26 6",
                stroke: "#1844a7",
                strokeWidth: "5",
                strokeLinecap: "round"
            }), e.jsx("path", {
                d: "M9 17a15 15 0 0 1 26-6m2 17a15 15 0 0 1-26 6",
                stroke: r,
                strokeWidth: "5",
                strokeLinecap: "round"
            }), e.jsx("path", {
                d: "m29 10 8 5 1-10m-19 30-8-5-1 10",
                fill: "#4386ee"
            }), e.jsx("path", {
                d: "m22 18 9 6-9 6Z",
                fill: "#2563eb"
            })]
        })]
    })
}
const ue = ["А", "В", "Е", "К", "М", "Н", "О", "Р", "С", "Т", "У", "Х"];
function xe(t) {
    const i = [...t];
    for (let s = i.length - 1; s > 0; s--) {
        const r = Math.floor(Math.random() * (s + 1));
        [i[s],i[r]] = [i[r], i[s]]
    }
    return i
}
const _ = {
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
    pencil: e.jsx("path", {
        d: "m15 4 5 5M4 20l5-1L21 7a2.8 2.8 0 0 0-4-4L5 15l-1 5Z"
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
function B({name: t, size: i=22}) {
    return ["plate", "pin", "auto", "double", "tasks"].includes(t) ? e.jsx(he, {
        name: t,
        size: i
    }) : e.jsx("svg", {
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: _[t] ?? _.info
    })
}
function S({name: t, size: i=22, artwork: s}) {
    const r = s ?? de[t]
      , a = {
        friends: "user",
        mail: "info",
        security: "user",
        palette: "sun",
        book: "info"
    }[t] ?? t;
    return r ? e.jsxs("span", {
        className: "themed-icon",
        style: {
            width: i,
            height: i
        },
        "aria-hidden": "true",
        children: [e.jsx("span", {
            className: "standard-icon",
            children: e.jsx(B, {
                name: a,
                size: i
            })
        }), e.jsx(H, {
            name: r
        })]
    }) : e.jsx(B, {
        name: a,
        size: i
    })
}
const fe = ["prefix", "hundreds", "tens", "units", "suffix-first", "suffix-second"];
function W({p: t, small: i=!1, spinning: s=null}) {
    const r = $[t.tier].color
      , a = [t.letters[0], ...t.digits, t.letters[1], t.letters[2]].map( (m, d) => ({
        char: m,
        position: fe[d]
    }))
      , [l,f] = x.useState(0)
      , c = x.useRef(null)
      , o = x.useRef(s)
      , [u,p] = x.useState( () => window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      , h = document.documentElement.dataset.theme === "game";
    return x.useEffect( () => {
        const m = window.matchMedia("(prefers-reduced-motion: reduce)")
          , d = () => p(m.matches);
        return m.addEventListener("change", d),
        () => m.removeEventListener("change", d)
    }
    , []),
    x.useEffect( () => {
        if (!s || u || h)
            return;
        let m = 0;
        const d = window.setInterval( () => {
            if (document.hidden) {
                window.clearInterval(d);
                return
            }
            f(++m)
        }
        , 33);
        return () => window.clearInterval(d)
    }
    , [s, u, h]),
    x.useLayoutEffect( () => {
        const m = o.current;
        if (o.current = s,
        !m || s || u || !h || !c.current)
            return;
        const d = m === "whole" ? ".plate-glyph" : `[data-part="${m}"] .plate-glyph`
          , n = [...c.current.querySelectorAll(d)].map(j => j.animate([{
            translate: "0 -.45em",
            opacity: .85
        }, {
            translate: "0 0",
            opacity: 1
        }], {
            duration: 280,
            easing: "cubic-bezier(.15,.75,.25,1)"
        }));
        return () => n.forEach(j => j.cancel())
    }
    , [s, u, h]),
    x.useEffect( () => {
        const m = c.current;
        if (!s || !h || !m)
            return;
        let d = !0;
        const n = () => {
            m.dataset.motionVisible = String(d && !document.hidden)
        }
          , j = new IntersectionObserver( ([M]) => {
            d = M.isIntersecting,
            n()
        }
        );
        return j.observe(m),
        document.addEventListener("visibilitychange", n),
        n(),
        () => {
            j.disconnect(),
            document.removeEventListener("visibilitychange", n),
            delete m.dataset.motionVisible
        }
    }
    , [s, h]),
    t.descriptor && t.descriptor.country !== "RU" ? e.jsxs("div", {
        ref: c,
        className: `number-plate collector-country-plate ${i ? "small" : ""}`,
        "data-country": t.descriptor.country,
        "data-rarity": t.tier,
        role: "img",
        "aria-label": "Номер " + A(t),
        style: {
            "--plate-rarity": r
        },
        children: [e.jsx("span", {
            className: "collector-country-code",
            children: t.descriptor.country
        }), e.jsx("span", {
            className: "collector-country-number",
            children: t.descriptor.country === "BY" ? `${t.digits} ${t.letters}-${t.region}` : `${t.digits} ${t.letters}`
        }), t.descriptor.country === "KZ" && e.jsx("b", {
            className: "collector-country-region",
            children: t.region
        })]
    }) : e.jsxs("div", {
        ref: c,
        className: `number-plate ${i ? "small" : ""} ${t.rarityKnown !== !1 && t.tier === "common" && q(t) && !s ? "ordinary-glow" : ""}`,
        "data-rarity": t.tier,
        "data-rarity-active": t.rarityKnown !== !1 && q(t) && !s,
        "data-code-length": t.region.length,
        role: "img",
        "aria-label": "Номер " + A(t).replace(/·/g, "пусто"),
        style: {
            "--plate-rarity": r,
            ...t.rarityKnown !== !1 && t.tier !== "common" ? {
                boxShadow: `inset 0 0 0 1px rgba(0,0,0,.25), 0 0 0 3px ${r}47, 0 12px 28px ${r}40`
            } : {}
        },
        children: [e.jsx("div", {
            className: "plate-main",
            children: a.map( ({char: m, position: d}, n) => e.jsxs(J.Fragment, {
                children: [(n === 1 || n === 4) && e.jsx("span", {
                    className: "plate-separator"
                }), e.jsxs("span", {
                    className: `plate-cell ${n > 0 && n < 4 ? "digit" : ""} ${m === "·" && !s ? "placeholder" : ""} ${s === "whole" || s === (n > 0 && n < 4 ? "digits" : "letters") ? "cell-spinning" : ""}`,
                    "data-part": n > 0 && n < 4 ? "digits" : "letters",
                    children: [e.jsx("span", {
                        className: "plate-glyph",
                        children: !h && !u && (s === "whole" || s === (n > 0 && n < 4 ? "digits" : "letters")) ? (n > 0 && n < 4 ? "5839172046" : "РНТМВКХУЕАСО")[(l * (n > 0 && n < 4 ? 3 : 5) + n * 3) % (n > 0 && n < 4 ? 10 : 12)] : m === "·" ? "–" : m
                    }), h && !u && (s === "whole" || s === (n > 0 && n < 4 ? "digits" : "letters")) && e.jsx("span", {
                        className: "plate-reel-window",
                        "aria-hidden": "true",
                        children: e.jsx("span", {
                            className: "plate-reel-track",
                            style: {
                                animationDuration: `${(n > 0 && n < 4 ? 10 : 12) * (52 + n * 3)}ms`
                            },
                            children: e.jsx(pe, {
                                digits: n > 0 && n < 4
                            })
                        })
                    })]
                })]
            }, d))
        }), e.jsxs("div", {
            className: "plate-region",
            children: [e.jsx("b", {
                children: t.region
            }), e.jsxs("span", {
                className: "plate-region-foot",
                children: [e.jsx("i", {
                    children: "RUS"
                }), e.jsxs("svg", {
                    width: "17",
                    height: "12",
                    viewBox: "0 0 21 14",
                    "aria-hidden": "true",
                    children: [e.jsx("rect", {
                        width: "21",
                        height: "14",
                        fill: "#fff"
                    }), e.jsx("rect", {
                        y: "4.67",
                        width: "21",
                        height: "4.66",
                        fill: "#0039a6"
                    }), e.jsx("rect", {
                        y: "9.33",
                        width: "21",
                        height: "4.67",
                        fill: "#d52b1e"
                    })]
                })]
            })]
        })]
    })
}
function pe({digits: t}) {
    const [i] = x.useState( () => xe(t ? [..."0123456789"] : ue));
    return e.jsxs(e.Fragment, {
        children: [i.map(s => e.jsx("span", {
            className: "plate-reel-symbol",
            children: e.jsx("span", {
                children: s
            })
        }, s)), e.jsx("span", {
            className: "plate-reel-symbol",
            children: e.jsx("span", {
                children: i[0]
            })
        }, "repeat")]
    })
}
function O({p: t, onClick: i, actionLabel: s, valuation: r}) {
    const a = e.jsxs(e.Fragment, {
        children: [e.jsx("span", {
            className: "rarity",
            style: {
                color: `var(--rarity-${t.tier})`
            },
            children: t.rarityKnown === !1 ? "—" : $[t.tier].label
        }), i && e.jsx(S, {
            name: "info",
            size: 15
        })]
    })
      , l = r ? e.jsxs(e.Fragment, {
        children: [e.jsx("span", {
            className: "rarity-caption",
            children: a
        }), e.jsxs("span", {
            className: "rarity-valuation",
            children: [e.jsx("span", {
                className: "estimate-caption-label",
                children: "Примерная стоимость"
            }), e.jsx("span", {
                className: "estimate-caption-amount",
                children: r
            })]
        })]
    }) : a;
    return e.jsxs("div", {
        className: "rarity-group",
        "data-rarity": t.rarityKnown === !1 ? "unknown" : t.tier,
        children: [i ? e.jsx("button", {
            className: "rarity-action",
            onClick: i,
            "aria-description": r ? "Примерная стоимость: " + r : void 0,
            "aria-label": s ?? "Информация о номере: " + (t.rarityKnown === !1 ? "—" : $[t.tier].label),
            children: l
        }) : e.jsx("span", {
            className: "rarity-inline",
            children: l
        }), t.series && e.jsx("span", {
            className: "series-label",
            children: t.series
        }), X(t.descriptor ?? {
            country: "RU",
            digits: t.digits,
            letters: t.letters
        }).slice(0, 2).map(f => e.jsx("span", {
            className: "series-label",
            children: f.title
        }, f.id))]
    })
}
function Le({children: t, secondary: i, quiet: s, loading: r, icon: a, className: l="", ...f}) {
    return e.jsxs("button", {
        ...f,
        className: `btn ${i ? "secondary" : s ? "quiet" : "primary"} ${l}`,
        disabled: f.disabled || r,
        "aria-busy": r || void 0,
        children: [r ? e.jsx("span", {
            className: "spinner",
            "aria-hidden": "true"
        }) : a ? e.jsx(S, {
            name: a,
            size: 20
        }) : null, e.jsx("span", {
            children: t
        })]
    })
}
function Ee({items: t, value: i, onChange: s, label: r="Разделы"}) {
    return e.jsx("div", {
        className: "tabs",
        role: "group",
        "aria-label": r,
        children: t.map(a => e.jsx("button", {
            "aria-pressed": a === i,
            className: i === a ? "active" : "",
            onClick: () => s(a),
            children: a
        }, a))
    })
}
function $e({items: t, value: i, onChange: s, label: r}) {
    return e.jsx("div", {
        className: "segment",
        role: "group",
        "aria-label": r,
        children: t.map(a => e.jsx("button", {
            "aria-pressed": a === i,
            className: i === a ? "active" : "",
            onClick: () => s(a),
            children: a
        }, a))
    })
}
function Ae({label: t, value: i, strong: s=!1}) {
    const r = typeof i == "string" && /^[-−≈\d\s,.]+(?: игровых)? ₽$/.test(i)
      , a = r && i.replace(/\D/g, "").length > 9;
    return e.jsxs("div", {
        className: "info-row ym-hide-content " + (s ? "strong " : "") + (r ? "info-row-money " : "") + (a ? "info-row-wide-money" : ""),
        children: [e.jsx("span", {
            children: t
        }), e.jsx("b", {
            children: r ? i.replace(/[\u00a0\u202f]/g, " ") : i
        })]
    })
}
function Fe({title: t, children: i, kind: s="info"}) {
    return e.jsxs("div", {
        className: "notice " + s,
        role: s === "error" ? "alert" : "status",
        children: [e.jsx("strong", {
            children: t
        }), i && e.jsx("div", {
            children: i
        })]
    })
}
function Ge({title: t, description: i, icon: s="plate", children: r}) {
    return e.jsxs("div", {
        className: "empty-state",
        children: [e.jsx(S, {
            name: s,
            size: 36
        }), e.jsx("h2", {
            children: t
        }), i && e.jsx("p", {
            children: i
        }), e.jsx("div", {
            className: "stack",
            children: r
        })]
    })
}
function Ce({label: t, value: i, onChange: s, type: r="text", autoComplete: a, error: l, placeholder: f, help: c, id: o, required: u=!0}) {
    return e.jsxs("div", {
        className: "field",
        children: [e.jsx("label", {
            htmlFor: o,
            children: t
        }), e.jsx("input", {
            className: "ym-disable-keys",
            id: o,
            value: i,
            type: r === "amount" ? "text" : r,
            inputMode: r === "amount" ? "numeric" : void 0,
            autoComplete: a ?? (r === "password" ? "new-password" : r === "email" ? "email" : "off"),
            placeholder: f,
            required: u,
            onChange: p => s(p.target.value),
            "aria-invalid": !!l,
            "aria-describedby": l ? o + "-error" : c ? o + "-help" : void 0
        }), c && c !== l && e.jsx("p", {
            id: o + "-help",
            children: c
        }), l && e.jsx("p", {
            className: "field-error",
            id: o + "-error",
            role: "alert",
            children: l
        })]
    })
}
const b = [];
let L = !1
  , E = null
  , w = null;
function je(t) {
    return /выйти/i.test(t) ? "logout" : /фильтр/i.test(t) ? "settings" : /регион/i.test(t) ? "region" : /аукцион|ставк/i.test(t) ? "auction" : /авто/i.test(t) ? "auto" : /почт/i.test(t) ? "mail" : /сеанс|парол|доступ|операци/i.test(t) ? "security" : /продать/i.test(t) ? "sell" : /покуп|купить|заказ/i.test(t) ? "market" : /итог|награ/i.test(t) ? "tasks" : /аккаунт|войти|ник|сохрани/i.test(t) ? "profile" : /оформ|cookie/i.test(t) ? "settings" : /номер|коллекц/i.test(t) ? "collection" : "book"
}
function Ie({title: t, children: i, onClose: s, wide: r=!1, restore: a, artwork: l, closeDisabled: f=!1}) {
    const c = x.useRef(null)
      , o = x.useRef(s)
      , u = x.useId()
      , p = x.useRef(null);
    return x.useEffect( () => {
        o.current = s
    }
    , [s]),
    x.useLayoutEffect( () => {
        var C, I, K;
        const h = c.current
          , m = document.activeElement;
        L && E !== h && (w != null && w.isConnected) ? p.current = w : m && !h.contains(m) && (p.current = m);
        const d = p.current
          , n = b[b.length - 1];
        n != null && n.parentElement && (n.parentElement.inert = !0),
        (L && E !== h || n) && (h.parentElement.dataset.handoff = "true"),
        b.push(h);
        const j = document.querySelector(".app-surface")
          , M = document.querySelector(".first-visit");
        if (M && (M.inert = !0),
        j && (j.inert = !0),
        (C = c.current) == null || C.focus({
            preventScroll: !0
        }),
        a) {
            const g = (I = c.current) == null ? void 0 : I.querySelector(".sheet-body")
              , v = g == null ? void 0 : g.querySelectorAll('button,input,select,a[href],[tabindex="0"]');
            (K = v == null ? void 0 : v[a.focusIndex]) == null || K.focus({
                preventScroll: !0
            }),
            g && (g.scrollTop = a.scrollTop)
        }
        const G = g => {
            if (b[b.length - 1] === h && (g.key === "Escape" && (g.preventDefault(),
            o.current()),
            g.key === "Tab")) {
                const v = Array.from(c.current.querySelectorAll('button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled),a[href],[tabindex="0"]'))
                  , y = v.filter(k => {
                    if (!k.getClientRects().length)
                        return !1;
                    if (!(k instanceof HTMLInputElement) || k.type !== "radio")
                        return !0;
                    const T = v.filter(R => R instanceof HTMLInputElement && R.type === "radio" && R.name === k.name);
                    return k === (T.find(R => R.checked) ?? T[0])
                }
                );
                if (g.preventDefault(),
                !y.length)
                    return;
                const Z = y.indexOf(document.activeElement)
                  , D = Z < 0 ? g.shiftKey ? y.length - 1 : 0 : (Z + (g.shiftKey ? -1 : 1) + y.length) % y.length;
                y[D].focus()
            }
        }
        ;
        return document.addEventListener("keydown", G),
        () => {
            L = !0,
            E = h,
            w = d;
            const g = b.indexOf(h);
            g !== -1 && b.splice(g, 1);
            const v = b[b.length - 1];
            v != null && v.parentElement && (v.parentElement.inert = !1),
            j && (j.inert = b.length > 0 || !!document.querySelector(".first-visit")),
            M != null && M.isConnected && (M.inert = b.length > 0),
            queueMicrotask( () => {
                L = !1,
                E = null,
                w = null;
                const y = b[b.length - 1];
                j != null && j.isConnected && (j.inert = !!document.querySelector('.first-visit,[aria-modal="true"]')),
                !y && (d != null && d.isConnected) ? d.focus({
                    preventScroll: !0
                }) : y && (d != null && d.isConnected) && y.contains(d) ? d.focus({
                    preventScroll: !0
                }) : y && !y.contains(document.activeElement) && y.focus({
                    preventScroll: !0
                })
            }
            ),
            document.removeEventListener("keydown", G)
        }
    }
    , [a]),
    V.createPortal(e.jsx("div", {
        className: "sheet-backdrop",
        onClick: h => {
            h.target === h.currentTarget && s()
        }
        ,
        children: e.jsxs("div", {
            className: "sheet " + (r ? "wide" : ""),
            ref: c,
            tabIndex: -1,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": u,
            children: [e.jsxs("div", {
                className: "sheet-heading",
                children: [e.jsx(H, {
                    name: l ?? je(t),
                    className: "sheet-art"
                }), e.jsx("h2", {
                    id: u,
                    className: "ym-hide-content",
                    children: t
                }), e.jsx("button", {
                    className: "icon-button",
                    "aria-label": "Закрыть",
                    disabled: f,
                    onClick: s,
                    children: e.jsx(S, {
                        name: "close"
                    })
                })]
            }), e.jsx("div", {
                className: "sheet-body",
                children: i
            })]
        })
    }), document.body)
}
function Ke({p: t, frameId: i, onClick: s, children: r, status: a}) {
    return e.jsx("article", {
        className: "asset-card",
        children: s ? e.jsxs("button", {
            className: "asset-open",
            "aria-label": "Открыть номер " + A(t),
            onClick: s,
            children: [e.jsx(P, {
                p: t,
                small: !0,
                frameId: i
            }), e.jsx(O, {
                p: t
            }), a && e.jsx("span", {
                className: "asset-trade-status",
                children: a
            }), e.jsxs("div", {
                className: "asset-value",
                children: [e.jsx("span", {
                    children: "Примерная стоимость"
                }), e.jsx("b", {
                    children: ie(t)
                }), e.jsx(S, {
                    name: "right",
                    size: 18
                })]
            })]
        }) : e.jsxs(e.Fragment, {
            children: [e.jsx(P, {
                p: t,
                small: !0,
                frameId: i
            }), e.jsx(O, {
                p: t
            }), r]
        })
    })
}
function Ze(t, i, s=!0, r=!1) {
    const a = x.useRef(i);
    x.useLayoutEffect( () => {
        a.current = i
    }
    );
    const [l,f] = x.useState(0)
      , [c,o] = x.useState({
        key: t,
        revision: l,
        busy: s
    });
    return x.useEffect( () => {
        const u = new AbortController;
        if (!s) {
            o({
                key: t,
                revision: l,
                busy: !1
            });
            return
        }
        return o(p => ({
            key: t,
            revision: l,
            busy: !0,
            ...r && p.key === t ? {
                data: p.data
            } : {}
        })),
        a.current(u.signal).then(p => {
            u.signal.aborted || o({
                key: t,
                revision: l,
                busy: !1,
                data: p
            })
        }
        , p => {
            u.signal.aborted || o(h => ({
                key: t,
                revision: l,
                busy: !1,
                error: p,
                ...r && h.key === t ? {
                    data: h.data
                } : {}
            }))
        }
        ),
        () => u.abort()
    }
    , [t, l, s, r]),
    {
        ...c.key === t && c.revision === l ? c : {
            key: t,
            revision: l,
            busy: s,
            data: r && c.key === t ? c.data : void 0,
            error: void 0
        },
        reload: () => f(u => u + 1)
    }
}
export {Ke as A, Le as B, ee as C, Ge as E, Ce as F, H as G, S as I, ue as L, Fe as N, P, O as R, Ie as S, $ as T, re as a, ne as b, q as c, ye as d, ie as e, Q as f, Se as g, Ae as h, W as i, Me as j, te as k, we as l, A as m, F as n, ve as o, le as p, $e as q, be as r, xe as s, N as t, Ze as u, ke as v, Ee as w, z as x, Re as y, Ne as z};
