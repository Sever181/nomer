var _0 = Object.defineProperty;
var P0 = (e, t, n) => t in e ? _0(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var yr = (e, t, n) => P0(e, typeof t != "symbol" ? t + "" : t, n);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        i(o);
    new MutationObserver(o => {
        for (const a of o)
            if (a.type === "childList")
                for (const l of a.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && i(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const a = {};
        return o.integrity && (a.integrity = o.integrity),
        o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? a.credentials = "include" : o.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function i(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const a = n(o);
        fetch(o.href, a)
    }
}
)();
const T0 = "modulepreload"
  , N0 = function(e) {
    return "/" + e
}
  , Z3 = {}
  , gE = function(t, n, i) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const l = document.querySelector("meta[property=csp-nonce]")
          , c = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
        o = Promise.allSettled(n.map(u => {
            if (u = N0(u),
            u in Z3)
                return;
            Z3[u] = !0;
            const p = u.endsWith(".css")
              , L = p ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${u}"]${L}`))
                return;
            const h = document.createElement("link");
            if (h.rel = p ? "stylesheet" : T0,
            p || (h.as = "script"),
            h.crossOrigin = "",
            h.href = u,
            c && h.setAttribute("nonce", c),
            document.head.appendChild(h),
            p)
                return new Promise( (S, s) => {
                    h.addEventListener("load", S),
                    h.addEventListener("error", () => s(new Error(`Unable to preload CSS for ${u}`)))
                }
                )
        }
        ))
    }
    function a(l) {
        const c = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (c.payload = l,
        window.dispatchEvent(c),
        !c.defaultPrevented)
            throw l
    }
    return o.then(l => {
        for (const c of l || [])
            c.status === "rejected" && a(c.reason);
        return t().catch(a)
    }
    )
};
function C0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Nu = {
    exports: {}
}
  , Ni = {}
  , Cu = {
    exports: {}
}
  , Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn = Symbol.for("react.element")
  , w0 = Symbol.for("react.portal")
  , k0 = Symbol.for("react.fragment")
  , x0 = Symbol.for("react.strict_mode")
  , D0 = Symbol.for("react.profiler")
  , U0 = Symbol.for("react.provider")
  , F0 = Symbol.for("react.context")
  , $0 = Symbol.for("react.forward_ref")
  , M0 = Symbol.for("react.suspense")
  , B0 = Symbol.for("react.memo")
  , j0 = Symbol.for("react.lazy")
  , J3 = Symbol.iterator;
function V0(e) {
    return e === null || typeof e != "object" ? null : (e = J3 && e[J3] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var wu = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , ku = Object.assign
  , xu = {};
function Tt(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = xu,
    this.updater = n || wu
}
Tt.prototype.isReactComponent = {};
Tt.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Tt.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Du() {}
Du.prototype = Tt.prototype;
function Ja(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = xu,
    this.updater = n || wu
}
var el = Ja.prototype = new Du;
el.constructor = Ja;
ku(el, Tt.prototype);
el.isPureReactComponent = !0;
var es = Array.isArray
  , Uu = Object.prototype.hasOwnProperty
  , tl = {
    current: null
}
  , Fu = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $u(e, t, n) {
    var i, o = {}, a = null, l = null;
    if (t != null)
        for (i in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (a = "" + t.key),
        t)
            Uu.call(t, i) && !Fu.hasOwnProperty(i) && (o[i] = t[i]);
    var c = arguments.length - 2;
    if (c === 1)
        o.children = n;
    else if (1 < c) {
        for (var u = Array(c), p = 0; p < c; p++)
            u[p] = arguments[p + 2];
        o.children = u
    }
    if (e && e.defaultProps)
        for (i in c = e.defaultProps,
        c)
            o[i] === void 0 && (o[i] = c[i]);
    return {
        $$typeof: Kn,
        type: e,
        key: a,
        ref: l,
        props: o,
        _owner: tl.current
    }
}
function G0(e, t) {
    return {
        $$typeof: Kn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function nl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Kn
}
function b0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ts = /\/+/g;
function Lo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? b0("" + e.key) : t.toString(36)
}
function Br(e, t, n, i, o) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (a) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Kn:
            case w0:
                l = !0
            }
        }
    if (l)
        return l = e,
        o = o(l),
        e = i === "" ? "." + Lo(l, 0) : i,
        es(o) ? (n = "",
        e != null && (n = e.replace(ts, "$&/") + "/"),
        Br(o, t, n, "", function(p) {
            return p
        })) : o != null && (nl(o) && (o = G0(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(ts, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (l = 0,
    i = i === "" ? "." : i + ":",
    es(e))
        for (var c = 0; c < e.length; c++) {
            a = e[c];
            var u = i + Lo(a, c);
            l += Br(a, t, n, u, o)
        }
    else if (u = V0(e),
    typeof u == "function")
        for (e = u.call(e),
        c = 0; !(a = e.next()).done; )
            a = a.value,
            u = i + Lo(a, c++),
            l += Br(a, t, n, u, o);
    else if (a === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function Er(e, t, n) {
    if (e == null)
        return e;
    var i = []
      , o = 0;
    return Br(e, i, "", "", function(a) {
        return t.call(n, a, o++)
    }),
    i
}
function z0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var me = {
    current: null
}
  , jr = {
    transition: null
}
  , K0 = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: jr,
    ReactCurrentOwner: tl
};
function Mu() {
    throw Error("act(...) is not supported in production builds of React.")
}
Q.Children = {
    map: Er,
    forEach: function(e, t, n) {
        Er(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Er(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Er(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!nl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Q.Component = Tt;
Q.Fragment = k0;
Q.Profiler = D0;
Q.PureComponent = Ja;
Q.StrictMode = x0;
Q.Suspense = M0;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K0;
Q.act = Mu;
Q.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var i = ku({}, e.props)
      , o = e.key
      , a = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref,
        l = tl.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var c = e.type.defaultProps;
        for (u in t)
            Uu.call(t, u) && !Fu.hasOwnProperty(u) && (i[u] = t[u] === void 0 && c !== void 0 ? c[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        i.children = n;
    else if (1 < u) {
        c = Array(u);
        for (var p = 0; p < u; p++)
            c[p] = arguments[p + 2];
        i.children = c
    }
    return {
        $$typeof: Kn,
        type: e.type,
        key: o,
        ref: a,
        props: i,
        _owner: l
    }
}
;
Q.createContext = function(e) {
    return e = {
        $$typeof: F0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: U0,
        _context: e
    },
    e.Consumer = e
}
;
Q.createElement = $u;
Q.createFactory = function(e) {
    var t = $u.bind(null, e);
    return t.type = e,
    t
}
;
Q.createRef = function() {
    return {
        current: null
    }
}
;
Q.forwardRef = function(e) {
    return {
        $$typeof: $0,
        render: e
    }
}
;
Q.isValidElement = nl;
Q.lazy = function(e) {
    return {
        $$typeof: j0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: z0
    }
}
;
Q.memo = function(e, t) {
    return {
        $$typeof: B0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Q.startTransition = function(e) {
    var t = jr.transition;
    jr.transition = {};
    try {
        e()
    } finally {
        jr.transition = t
    }
}
;
Q.unstable_act = Mu;
Q.useCallback = function(e, t) {
    return me.current.useCallback(e, t)
}
;
Q.useContext = function(e) {
    return me.current.useContext(e)
}
;
Q.useDebugValue = function() {}
;
Q.useDeferredValue = function(e) {
    return me.current.useDeferredValue(e)
}
;
Q.useEffect = function(e, t) {
    return me.current.useEffect(e, t)
}
;
Q.useId = function() {
    return me.current.useId()
}
;
Q.useImperativeHandle = function(e, t, n) {
    return me.current.useImperativeHandle(e, t, n)
}
;
Q.useInsertionEffect = function(e, t) {
    return me.current.useInsertionEffect(e, t)
}
;
Q.useLayoutEffect = function(e, t) {
    return me.current.useLayoutEffect(e, t)
}
;
Q.useMemo = function(e, t) {
    return me.current.useMemo(e, t)
}
;
Q.useReducer = function(e, t, n) {
    return me.current.useReducer(e, t, n)
}
;
Q.useRef = function(e) {
    return me.current.useRef(e)
}
;
Q.useState = function(e) {
    return me.current.useState(e)
}
;
Q.useSyncExternalStore = function(e, t, n) {
    return me.current.useSyncExternalStore(e, t, n)
}
;
Q.useTransition = function() {
    return me.current.useTransition()
}
;
Q.version = "18.3.1";
Cu.exports = Q;
var rl = Cu.exports;
const yE = C0(rl);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H0 = rl
  , Y0 = Symbol.for("react.element")
  , W0 = Symbol.for("react.fragment")
  , Q0 = Object.prototype.hasOwnProperty
  , q0 = H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , X0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Bu(e, t, n) {
    var i, o = {}, a = null, l = null;
    n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (i in t)
        Q0.call(t, i) && !X0.hasOwnProperty(i) && (o[i] = t[i]);
    if (e && e.defaultProps)
        for (i in t = e.defaultProps,
        t)
            o[i] === void 0 && (o[i] = t[i]);
    return {
        $$typeof: Y0,
        type: e,
        key: a,
        ref: l,
        props: o,
        _owner: q0.current
    }
}
Ni.Fragment = W0;
Ni.jsx = Bu;
Ni.jsxs = Bu;
Nu.exports = Ni;
var EE = Nu.exports
  , ju = {
    exports: {}
}
  , De = {}
  , Vu = {
    exports: {}
}
  , Gu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(x, H) {
        var Y = x.length;
        x.push(H);
        e: for (; 0 < Y; ) {
            var A5 = Y - 1 >>> 1
              , b5 = x[A5];
            if (0 < o(b5, H))
                x[A5] = H,
                x[Y] = b5,
                Y = A5;
            else
                break e
        }
    }
    function n(x) {
        return x.length === 0 ? null : x[0]
    }
    function i(x) {
        if (x.length === 0)
            return null;
        var H = x[0]
          , Y = x.pop();
        if (Y !== H) {
            x[0] = Y;
            e: for (var A5 = 0, b5 = x.length, mr = b5 >>> 1; A5 < mr; ) {
                var d2 = 2 * (A5 + 1) - 1
                  , So = x[d2]
                  , f2 = d2 + 1
                  , gr = x[f2];
                if (0 > o(So, Y))
                    f2 < b5 && 0 > o(gr, So) ? (x[A5] = gr,
                    x[f2] = Y,
                    A5 = f2) : (x[A5] = So,
                    x[d2] = Y,
                    A5 = d2);
                else if (f2 < b5 && 0 > o(gr, Y))
                    x[A5] = gr,
                    x[f2] = Y,
                    A5 = f2;
                else
                    break e
            }
        }
        return H
    }
    function o(x, H) {
        var Y = x.sortIndex - H.sortIndex;
        return Y !== 0 ? Y : x.id - H.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var l = Date
          , c = l.now();
        e.unstable_now = function() {
            return l.now() - c
        }
    }
    var u = []
      , p = []
      , L = 1
      , h = null
      , S = 3
      , s = !1
      , d = !1
      , y = !1
      , j = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(x) {
        for (var H = n(p); H !== null; ) {
            if (H.callback === null)
                i(p);
            else if (H.startTime <= x)
                i(p),
                H.sortIndex = H.expirationTime,
                t(u, H);
            else
                break;
            H = n(p)
        }
    }
    function O(x) {
        if (y = !1,
        g(x),
        !d)
            if (n(u) !== null)
                d = !0,
                Eo(C);
            else {
                var H = n(p);
                H !== null && ho(O, H.startTime - x)
            }
    }
    function C(x, H) {
        d = !1,
        y && (y = !1,
        m(U),
        U = -1),
        s = !0;
        var Y = S;
        try {
            for (g(H),
            h = n(u); h !== null && (!(h.expirationTime > H) || x && !qe()); ) {
                var A5 = h.callback;
                if (typeof A5 == "function") {
                    h.callback = null,
                    S = h.priorityLevel;
                    var b5 = A5(h.expirationTime <= H);
                    H = e.unstable_now(),
                    typeof b5 == "function" ? h.callback = b5 : h === n(u) && i(u),
                    g(H)
                } else
                    i(u);
                h = n(u)
            }
            if (h !== null)
                var mr = !0;
            else {
                var d2 = n(p);
                d2 !== null && ho(O, d2.startTime - H),
                mr = !1
            }
            return mr
        } finally {
            h = null,
            S = Y,
            s = !1
        }
    }
    var D = !1
      , k = null
      , U = -1
      , R5 = 5
      , Z = -1;
    function qe() {
        return !(e.unstable_now() - Z < R5)
    }
    function zt() {
        if (k !== null) {
            var x = e.unstable_now();
            Z = x;
            var H = !0;
            try {
                H = k(!0, x)
            } finally {
                H ? Kt() : (D = !1,
                k = null)
            }
        } else
            D = !1
    }
    var Kt;
    if (typeof f == "function")
        Kt = function() {
            f(zt)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var X3 = new MessageChannel
          , A0 = X3.port2;
        X3.port1.onmessage = zt,
        Kt = function() {
            A0.postMessage(null)
        }
    } else
        Kt = function() {
            j(zt, 0)
        }
        ;
    function Eo(x) {
        k = x,
        D || (D = !0,
        Kt())
    }
    function ho(x, H) {
        U = j(function() {
            x(e.unstable_now())
        }, H)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(x) {
        x.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        d || s || (d = !0,
        Eo(C))
    }
    ,
    e.unstable_forceFrameRate = function(x) {
        0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R5 = 0 < x ? Math.floor(1e3 / x) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return S
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(x) {
        switch (S) {
        case 1:
        case 2:
        case 3:
            var H = 3;
            break;
        default:
            H = S
        }
        var Y = S;
        S = H;
        try {
            return x()
        } finally {
            S = Y
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(x, H) {
        switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            x = 3
        }
        var Y = S;
        S = x;
        try {
            return H()
        } finally {
            S = Y
        }
    }
    ,
    e.unstable_scheduleCallback = function(x, H, Y) {
        var A5 = e.unstable_now();
        switch (typeof Y == "object" && Y !== null ? (Y = Y.delay,
        Y = typeof Y == "number" && 0 < Y ? A5 + Y : A5) : Y = A5,
        x) {
        case 1:
            var b5 = -1;
            break;
        case 2:
            b5 = 250;
            break;
        case 5:
            b5 = 1073741823;
            break;
        case 4:
            b5 = 1e4;
            break;
        default:
            b5 = 5e3
        }
        return b5 = Y + b5,
        x = {
            id: L++,
            callback: H,
            priorityLevel: x,
            startTime: Y,
            expirationTime: b5,
            sortIndex: -1
        },
        Y > A5 ? (x.sortIndex = Y,
        t(p, x),
        n(u) === null && x === n(p) && (y ? (m(U),
        U = -1) : y = !0,
        ho(O, Y - A5))) : (x.sortIndex = b5,
        t(u, x),
        d || s || (d = !0,
        Eo(C))),
        x
    }
    ,
    e.unstable_shouldYield = qe,
    e.unstable_wrapCallback = function(x) {
        var H = S;
        return function() {
            var Y = S;
            S = H;
            try {
                return x.apply(this, arguments)
            } finally {
                S = Y
            }
        }
    }
}
)(Gu);
Vu.exports = Gu;
var Z0 = Vu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J0 = rl
  , Ce = Z0;
function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var bu = new Set
  , Ln = {};
function D2(e, t) {
    gt(e, t),
    gt(e + "Capture", t)
}
function gt(e, t) {
    for (Ln[e] = t,
    e = 0; e < t.length; e++)
        bu.add(t[e])
}
var _1 = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Qo = Object.prototype.hasOwnProperty
  , ef = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , ns = {}
  , rs = {};
function tf(e) {
    return Qo.call(rs, e) ? !0 : Qo.call(ns, e) ? !1 : ef.test(e) ? rs[e] = !0 : (ns[e] = !0,
    !1)
}
function nf(e, t, n, i) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return i ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function rf(e, t, n, i) {
    if (t === null || typeof t > "u" || nf(e, t, n, i))
        return !0;
    if (i)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ge(e, t, n, i, o, a, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = i,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = a,
    this.removeEmptyString = l
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ee[e] = new ge(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ee[t] = new ge(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ee[e] = new ge(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ee[e] = new ge(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ee[e] = new ge(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ee[e] = new ge(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ee[e] = new ge(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ee[e] = new ge(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ee[e] = new ge(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var il = /[\-:]([a-z])/g;
function ol(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(il, ol);
    ee[t] = new ge(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(il, ol);
    ee[t] = new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(il, ol);
    ee[t] = new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ee[e] = new ge(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ee.xlinkHref = new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ee[e] = new ge(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function al(e, t, n, i) {
    var o = ee.hasOwnProperty(t) ? ee[t] : null;
    (o !== null ? o.type !== 0 : i || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (rf(t, n, o, i) && (n = null),
    i || o === null ? tf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    i = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
}
var k1 = J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , hr = Symbol.for("react.element")
  , q2 = Symbol.for("react.portal")
  , X2 = Symbol.for("react.fragment")
  , ll = Symbol.for("react.strict_mode")
  , qo = Symbol.for("react.profiler")
  , zu = Symbol.for("react.provider")
  , Ku = Symbol.for("react.context")
  , sl = Symbol.for("react.forward_ref")
  , Xo = Symbol.for("react.suspense")
  , Zo = Symbol.for("react.suspense_list")
  , ul = Symbol.for("react.memo")
  , F1 = Symbol.for("react.lazy")
  , Hu = Symbol.for("react.offscreen")
  , is = Symbol.iterator;
function Ht(e) {
    return e === null || typeof e != "object" ? null : (e = is && e[is] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var I5 = Object.assign, Io;
function rn(e) {
    if (Io === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Io = t && t[1] || ""
        }
    return `
` + Io + e
}
var vo = !1;
function Oo(e, t) {
    if (!e || vo)
        return "";
    vo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (p) {
                    var i = p
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (p) {
                    i = p
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (p) {
                i = p
            }
            e()
        }
    } catch (p) {
        if (p && i && typeof p.stack == "string") {
            for (var o = p.stack.split(`
`), a = i.stack.split(`
`), l = o.length - 1, c = a.length - 1; 1 <= l && 0 <= c && o[l] !== a[c]; )
                c--;
            for (; 1 <= l && 0 <= c; l--,
            c--)
                if (o[l] !== a[c]) {
                    if (l !== 1 || c !== 1)
                        do
                            if (l--,
                            c--,
                            0 > c || o[l] !== a[c]) {
                                var u = `
` + o[l].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= l && 0 <= c);
                    break
                }
        }
    } finally {
        vo = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? rn(e) : ""
}
function of(e) {
    switch (e.tag) {
    case 5:
        return rn(e.type);
    case 16:
        return rn("Lazy");
    case 13:
        return rn("Suspense");
    case 19:
        return rn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Oo(e.type, !1),
        e;
    case 11:
        return e = Oo(e.type.render, !1),
        e;
    case 1:
        return e = Oo(e.type, !0),
        e;
    default:
        return ""
    }
}
function Jo(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case X2:
        return "Fragment";
    case q2:
        return "Portal";
    case qo:
        return "Profiler";
    case ll:
        return "StrictMode";
    case Xo:
        return "Suspense";
    case Zo:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Ku:
            return (e.displayName || "Context") + ".Consumer";
        case zu:
            return (e._context.displayName || "Context") + ".Provider";
        case sl:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ul:
            return t = e.displayName || null,
            t !== null ? t : Jo(e.type) || "Memo";
        case F1:
            t = e._payload,
            e = e._init;
            try {
                return Jo(e(t))
            } catch {}
        }
    return null
}
function af(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Jo(t);
    case 8:
        return t === ll ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function X1(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Yu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function lf(e) {
    var t = Yu(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , a = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(l) {
                i = "" + l,
                a.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return i
            },
            setValue: function(l) {
                i = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Sr(e) {
    e._valueTracker || (e._valueTracker = lf(e))
}
function Wu(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , i = "";
    return e && (i = Yu(e) ? e.checked ? "true" : "false" : e.value),
    e = i,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ei(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ea(e, t) {
    var n = t.checked;
    return I5({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function os(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , i = t.checked != null ? t.checked : t.defaultChecked;
    n = X1(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Qu(e, t) {
    t = t.checked,
    t != null && al(e, "checked", t, !1)
}
function ta(e, t) {
    Qu(e, t);
    var n = X1(t.value)
      , i = t.type;
    if (n != null)
        i === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? na(e, t.type, n) : t.hasOwnProperty("defaultValue") && na(e, t.type, X1(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function as(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var i = t.type;
        if (!(i !== "submit" && i !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function na(e, t, n) {
    (t !== "number" || ei(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var on = Array.isArray;
function ut(e, t, n, i) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && i && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + X1(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                i && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function ra(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(R(91));
    return I5({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function ls(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(R(92));
            if (on(n)) {
                if (1 < n.length)
                    throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: X1(n)
    }
}
function qu(e, t) {
    var n = X1(t.value)
      , i = X1(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i)
}
function ss(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Xu(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ia(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Lr, Zu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, i, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (Lr = Lr || document.createElement("div"),
        Lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Lr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function In(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var un = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , sf = ["Webkit", "ms", "Moz", "O"];
Object.keys(un).forEach(function(e) {
    sf.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        un[t] = un[e]
    })
});
function Ju(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || un.hasOwnProperty(e) && un[e] ? ("" + t).trim() : t + "px"
}
function ec(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var i = n.indexOf("--") === 0
              , o = Ju(n, t[n], i);
            n === "float" && (n = "cssFloat"),
            i ? e.setProperty(n, o) : e[n] = o
        }
}
var uf = I5({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function oa(e, t) {
    if (t) {
        if (uf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(R(62))
    }
}
function aa(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var la = null;
function cl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var sa = null
  , ct = null
  , dt = null;
function us(e) {
    if (e = Wn(e)) {
        if (typeof sa != "function")
            throw Error(R(280));
        var t = e.stateNode;
        t && (t = Di(t),
        sa(e.stateNode, e.type, t))
    }
}
function tc(e) {
    ct ? dt ? dt.push(e) : dt = [e] : ct = e
}
function nc() {
    if (ct) {
        var e = ct
          , t = dt;
        if (dt = ct = null,
        us(e),
        t)
            for (e = 0; e < t.length; e++)
                us(t[e])
    }
}
function rc(e, t) {
    return e(t)
}
function ic() {}
var Ro = !1;
function oc(e, t, n) {
    if (Ro)
        return e(t, n);
    Ro = !0;
    try {
        return rc(e, t, n)
    } finally {
        Ro = !1,
        (ct !== null || dt !== null) && (ic(),
        nc())
    }
}
function vn(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var i = Di(n);
    if (i === null)
        return null;
    n = i[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (i = !i.disabled) || (e = e.type,
        i = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !i;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(R(231, t, typeof n));
    return n
}
var ua = !1;
if (_1)
    try {
        var Yt = {};
        Object.defineProperty(Yt, "passive", {
            get: function() {
                ua = !0
            }
        }),
        window.addEventListener("test", Yt, Yt),
        window.removeEventListener("test", Yt, Yt)
    } catch {
        ua = !1
    }
function cf(e, t, n, i, o, a, l, c, u) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, p)
    } catch (L) {
        this.onError(L)
    }
}
var cn = !1
  , ti = null
  , ni = !1
  , ca = null
  , df = {
    onError: function(e) {
        cn = !0,
        ti = e
    }
};
function ff(e, t, n, i, o, a, l, c, u) {
    cn = !1,
    ti = null,
    cf.apply(df, arguments)
}
function pf(e, t, n, i, o, a, l, c, u) {
    if (ff.apply(this, arguments),
    cn) {
        if (cn) {
            var p = ti;
            cn = !1,
            ti = null
        } else
            throw Error(R(198));
        ni || (ni = !0,
        ca = p)
    }
}
function U2(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ac(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function cs(e) {
    if (U2(e) !== e)
        throw Error(R(188))
}
function mf(e) {
    var t = e.alternate;
    if (!t) {
        if (t = U2(e),
        t === null)
            throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, i = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var a = o.alternate;
        if (a === null) {
            if (i = o.return,
            i !== null) {
                n = i;
                continue
            }
            break
        }
        if (o.child === a.child) {
            for (a = o.child; a; ) {
                if (a === n)
                    return cs(o),
                    e;
                if (a === i)
                    return cs(o),
                    t;
                a = a.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== i.return)
            n = o,
            i = a;
        else {
            for (var l = !1, c = o.child; c; ) {
                if (c === n) {
                    l = !0,
                    n = o,
                    i = a;
                    break
                }
                if (c === i) {
                    l = !0,
                    i = o,
                    n = a;
                    break
                }
                c = c.sibling
            }
            if (!l) {
                for (c = a.child; c; ) {
                    if (c === n) {
                        l = !0,
                        n = a,
                        i = o;
                        break
                    }
                    if (c === i) {
                        l = !0,
                        i = a,
                        n = o;
                        break
                    }
                    c = c.sibling
                }
                if (!l)
                    throw Error(R(189))
            }
        }
        if (n.alternate !== i)
            throw Error(R(190))
    }
    if (n.tag !== 3)
        throw Error(R(188));
    return n.stateNode.current === n ? e : t
}
function lc(e) {
    return e = mf(e),
    e !== null ? sc(e) : null
}
function sc(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = sc(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var uc = Ce.unstable_scheduleCallback
  , ds = Ce.unstable_cancelCallback
  , gf = Ce.unstable_shouldYield
  , yf = Ce.unstable_requestPaint
  , P5 = Ce.unstable_now
  , Ef = Ce.unstable_getCurrentPriorityLevel
  , dl = Ce.unstable_ImmediatePriority
  , cc = Ce.unstable_UserBlockingPriority
  , ri = Ce.unstable_NormalPriority
  , hf = Ce.unstable_LowPriority
  , dc = Ce.unstable_IdlePriority
  , Ci = null
  , p1 = null;
function Sf(e) {
    if (p1 && typeof p1.onCommitFiberRoot == "function")
        try {
            p1.onCommitFiberRoot(Ci, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var t1 = Math.clz32 ? Math.clz32 : vf
  , Lf = Math.log
  , If = Math.LN2;
function vf(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Lf(e) / If | 0) | 0
}
var Ir = 64
  , vr = 4194304;
function an(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ii(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var i = 0
      , o = e.suspendedLanes
      , a = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var c = l & ~o;
        c !== 0 ? i = an(c) : (a &= l,
        a !== 0 && (i = an(a)))
    } else
        l = n & ~o,
        l !== 0 ? i = an(l) : a !== 0 && (i = an(a));
    if (i === 0)
        return 0;
    if (t !== 0 && t !== i && !(t & o) && (o = i & -i,
    a = t & -t,
    o >= a || o === 16 && (a & 4194240) !== 0))
        return t;
    if (i & 4 && (i |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= i; 0 < t; )
            n = 31 - t1(t),
            o = 1 << n,
            i |= e[n],
            t &= ~o;
    return i
}
function Of(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Rf(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
        var l = 31 - t1(a)
          , c = 1 << l
          , u = o[l];
        u === -1 ? (!(c & n) || c & i) && (o[l] = Of(c, t)) : u <= t && (e.expiredLanes |= c),
        a &= ~c
    }
}
function da(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function fc() {
    var e = Ir;
    return Ir <<= 1,
    !(Ir & 4194240) && (Ir = 64),
    e
}
function Ao(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Hn(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - t1(t),
    e[t] = n
}
function Af(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - t1(n)
          , a = 1 << o;
        t[o] = 0,
        i[o] = -1,
        e[o] = -1,
        n &= ~a
    }
}
function fl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var i = 31 - t1(n)
          , o = 1 << i;
        o & t | e[i] & t && (e[i] |= t),
        n &= ~o
    }
}
var o5 = 0;
function pc(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var mc, pl, gc, yc, Ec, fa = !1, Or = [], G1 = null, b1 = null, z1 = null, On = new Map, Rn = new Map, M1 = [], _f = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function fs(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        G1 = null;
        break;
    case "dragenter":
    case "dragleave":
        b1 = null;
        break;
    case "mouseover":
    case "mouseout":
        z1 = null;
        break;
    case "pointerover":
    case "pointerout":
        On.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Rn.delete(t.pointerId)
    }
}
function Wt(e, t, n, i, o, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: a,
        targetContainers: [o]
    },
    t !== null && (t = Wn(t),
    t !== null && pl(t)),
    e) : (e.eventSystemFlags |= i,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Pf(e, t, n, i, o) {
    switch (t) {
    case "focusin":
        return G1 = Wt(G1, e, t, n, i, o),
        !0;
    case "dragenter":
        return b1 = Wt(b1, e, t, n, i, o),
        !0;
    case "mouseover":
        return z1 = Wt(z1, e, t, n, i, o),
        !0;
    case "pointerover":
        var a = o.pointerId;
        return On.set(a, Wt(On.get(a) || null, e, t, n, i, o)),
        !0;
    case "gotpointercapture":
        return a = o.pointerId,
        Rn.set(a, Wt(Rn.get(a) || null, e, t, n, i, o)),
        !0
    }
    return !1
}
function hc(e) {
    var t = y2(e.target);
    if (t !== null) {
        var n = U2(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ac(n),
                t !== null) {
                    e.blockedOn = t,
                    Ec(e.priority, function() {
                        gc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Vr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = pa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var i = new n.constructor(n.type,n);
            la = i,
            n.target.dispatchEvent(i),
            la = null
        } else
            return t = Wn(n),
            t !== null && pl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function ps(e, t, n) {
    Vr(e) && n.delete(t)
}
function Tf() {
    fa = !1,
    G1 !== null && Vr(G1) && (G1 = null),
    b1 !== null && Vr(b1) && (b1 = null),
    z1 !== null && Vr(z1) && (z1 = null),
    On.forEach(ps),
    Rn.forEach(ps)
}
function Qt(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    fa || (fa = !0,
    Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, Tf)))
}
function An(e) {
    function t(o) {
        return Qt(o, e)
    }
    if (0 < Or.length) {
        Qt(Or[0], e);
        for (var n = 1; n < Or.length; n++) {
            var i = Or[n];
            i.blockedOn === e && (i.blockedOn = null)
        }
    }
    for (G1 !== null && Qt(G1, e),
    b1 !== null && Qt(b1, e),
    z1 !== null && Qt(z1, e),
    On.forEach(t),
    Rn.forEach(t),
    n = 0; n < M1.length; n++)
        i = M1[n],
        i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < M1.length && (n = M1[0],
    n.blockedOn === null); )
        hc(n),
        n.blockedOn === null && M1.shift()
}
var ft = k1.ReactCurrentBatchConfig
  , oi = !0;
function Nf(e, t, n, i) {
    var o = o5
      , a = ft.transition;
    ft.transition = null;
    try {
        o5 = 1,
        ml(e, t, n, i)
    } finally {
        o5 = o,
        ft.transition = a
    }
}
function Cf(e, t, n, i) {
    var o = o5
      , a = ft.transition;
    ft.transition = null;
    try {
        o5 = 4,
        ml(e, t, n, i)
    } finally {
        o5 = o,
        ft.transition = a
    }
}
function ml(e, t, n, i) {
    if (oi) {
        var o = pa(e, t, n, i);
        if (o === null)
            Uo(e, t, i, ai, n),
            fs(e, i);
        else if (Pf(o, e, t, n, i))
            i.stopPropagation();
        else if (fs(e, i),
        t & 4 && -1 < _f.indexOf(e)) {
            for (; o !== null; ) {
                var a = Wn(o);
                if (a !== null && mc(a),
                a = pa(e, t, n, i),
                a === null && Uo(e, t, i, ai, n),
                a === o)
                    break;
                o = a
            }
            o !== null && i.stopPropagation()
        } else
            Uo(e, t, i, null, n)
    }
}
var ai = null;
function pa(e, t, n, i) {
    if (ai = null,
    e = cl(i),
    e = y2(e),
    e !== null)
        if (t = U2(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ac(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ai = e,
    null
}
function Sc(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Ef()) {
        case dl:
            return 1;
        case cc:
            return 4;
        case ri:
        case hf:
            return 16;
        case dc:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var j1 = null
  , gl = null
  , Gr = null;
function Lc() {
    if (Gr)
        return Gr;
    var e, t = gl, n = t.length, i, o = "value" in j1 ? j1.value : j1.textContent, a = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var l = n - e;
    for (i = 1; i <= l && t[n - i] === o[a - i]; i++)
        ;
    return Gr = o.slice(e, 1 < i ? 1 - i : void 0)
}
function br(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Rr() {
    return !0
}
function ms() {
    return !1
}
function Ue(e) {
    function t(n, i, o, a, l) {
        this._reactName = n,
        this._targetInst = o,
        this.type = i,
        this.nativeEvent = a,
        this.target = l,
        this.currentTarget = null;
        for (var c in e)
            e.hasOwnProperty(c) && (n = e[c],
            this[c] = n ? n(a) : a[c]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? Rr : ms,
        this.isPropagationStopped = ms,
        this
    }
    return I5(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Rr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Rr)
        },
        persist: function() {},
        isPersistent: Rr
    }),
    t
}
var Nt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, yl = Ue(Nt), Yn = I5({}, Nt, {
    view: 0,
    detail: 0
}), wf = Ue(Yn), _o, Po, qt, wi = I5({}, Yn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: El,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== qt && (qt && e.type === "mousemove" ? (_o = e.screenX - qt.screenX,
        Po = e.screenY - qt.screenY) : Po = _o = 0,
        qt = e),
        _o)
    },
    movementY: function(e) {
        return "movementY" in e ? e.movementY : Po
    }
}), gs = Ue(wi), kf = I5({}, wi, {
    dataTransfer: 0
}), xf = Ue(kf), Df = I5({}, Yn, {
    relatedTarget: 0
}), To = Ue(Df), Uf = I5({}, Nt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Ff = Ue(Uf), $f = I5({}, Nt, {
    clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), Mf = Ue($f), Bf = I5({}, Nt, {
    data: 0
}), ys = Ue(Bf), jf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function bf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gf[e]) ? !!t[e] : !1
}
function El() {
    return bf
}
var zf = I5({}, Yn, {
    key: function(e) {
        if (e.key) {
            var t = jf[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = br(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: El,
    charCode: function(e) {
        return e.type === "keypress" ? br(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Kf = Ue(zf)
  , Hf = I5({}, wi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Es = Ue(Hf)
  , Yf = I5({}, Yn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: El
})
  , Wf = Ue(Yf)
  , Qf = I5({}, Nt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , qf = Ue(Qf)
  , Xf = I5({}, wi, {
    deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Zf = Ue(Xf)
  , Jf = [9, 13, 27, 32]
  , hl = _1 && "CompositionEvent" in window
  , dn = null;
_1 && "documentMode" in document && (dn = document.documentMode);
var e6 = _1 && "TextEvent" in window && !dn
  , Ic = _1 && (!hl || dn && 8 < dn && 11 >= dn)
  , hs = " "
  , Ss = !1;
function vc(e, t) {
    switch (e) {
    case "keyup":
        return Jf.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Oc(e) {
    return e = e.detail,
    typeof e == "object" && "data" in e ? e.data : null
}
var Z2 = !1;
function t6(e, t) {
    switch (e) {
    case "compositionend":
        return Oc(t);
    case "keypress":
        return t.which !== 32 ? null : (Ss = !0,
        hs);
    case "textInput":
        return e = t.data,
        e === hs && Ss ? null : e;
    default:
        return null
    }
}
function n6(e, t) {
    if (Z2)
        return e === "compositionend" || !hl && vc(e, t) ? (e = Lc(),
        Gr = gl = j1 = null,
        Z2 = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ic && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var r6 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Ls(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!r6[e.type] : t === "textarea"
}
function Rc(e, t, n, i) {
    tc(i),
    t = li(t, "onChange"),
    0 < t.length && (n = new yl("onChange","change",null,n,i),
    e.push({
        event: n,
        listeners: t
    }))
}
var fn = null
  , _n = null;
function i6(e) {
    Uc(e, 0)
}
function ki(e) {
    var t = tt(e);
    if (Wu(t))
        return e
}
function o6(e, t) {
    if (e === "change")
        return t
}
var Ac = !1;
if (_1) {
    var No;
    if (_1) {
        var Co = "oninput" in document;
        if (!Co) {
            var Is = document.createElement("div");
            Is.setAttribute("oninput", "return;"),
            Co = typeof Is.oninput == "function"
        }
        No = Co
    } else
        No = !1;
    Ac = No && (!document.documentMode || 9 < document.documentMode)
}
function vs() {
    fn && (fn.detachEvent("onpropertychange", _c),
    _n = fn = null)
}
function _c(e) {
    if (e.propertyName === "value" && ki(_n)) {
        var t = [];
        Rc(t, _n, e, cl(e)),
        oc(i6, t)
    }
}
function a6(e, t, n) {
    e === "focusin" ? (vs(),
    fn = t,
    _n = n,
    fn.attachEvent("onpropertychange", _c)) : e === "focusout" && vs()
}
function l6(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ki(_n)
}
function s6(e, t) {
    if (e === "click")
        return ki(t)
}
function u6(e, t) {
    if (e === "input" || e === "change")
        return ki(t)
}
function c6(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var i1 = typeof Object.is == "function" ? Object.is : c6;
function Pn(e, t) {
    if (i1(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , i = Object.keys(t);
    if (n.length !== i.length)
        return !1;
    for (i = 0; i < n.length; i++) {
        var o = n[i];
        if (!Qo.call(t, o) || !i1(e[o], t[o]))
            return !1
    }
    return !0
}
function Os(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Rs(e, t) {
    var n = Os(e);
    e = 0;
    for (var i; n; ) {
        if (n.nodeType === 3) {
            if (i = e + n.textContent.length,
            e <= t && i >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = i
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Os(n)
    }
}
function Pc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Tc() {
    for (var e = window, t = ei(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ei(e.document)
    }
    return t
}
function Sl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function d6(e) {
    var t = Tc()
      , n = e.focusedElem
      , i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Pc(n.ownerDocument.documentElement, n)) {
        if (i !== null && Sl(n)) {
            if (t = i.start,
            e = i.end,
            e === void 0 && (e = t),
            "selectionStart" in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , a = Math.min(i.start, o);
                i = i.end === void 0 ? a : Math.min(i.end, o),
                !e.extend && a > i && (o = i,
                i = a,
                a = o),
                o = Rs(n, a);
                var l = Rs(n, i);
                o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                a > i ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var f6 = _1 && "documentMode" in document && 11 >= document.documentMode
  , J2 = null
  , ma = null
  , pn = null
  , ga = !1;
function As(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ga || J2 == null || J2 !== ei(i) || (i = J2,
    "selectionStart" in i && Sl(i) ? i = {
        start: i.selectionStart,
        end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
    i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
    }),
    pn && Pn(pn, i) || (pn = i,
    i = li(ma, "onSelect"),
    0 < i.length && (t = new yl("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: i
    }),
    t.target = J2)))
}
function Ar(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var et = {
    animationend: Ar("Animation", "AnimationEnd"),
    animationiteration: Ar("Animation", "AnimationIteration"),
    animationstart: Ar("Animation", "AnimationStart"),
    transitionend: Ar("Transition", "TransitionEnd")
}
  , wo = {}
  , Nc = {};
_1 && (Nc = document.createElement("div").style,
"AnimationEvent" in window || (delete et.animationend.animation,
delete et.animationiteration.animation,
delete et.animationstart.animation),
"TransitionEvent" in window || delete et.transitionend.transition);
function xi(e) {
    if (wo[e])
        return wo[e];
    if (!et[e])
        return e;
    var t = et[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Nc)
            return wo[e] = t[n];
    return e
}
var Cc = xi("animationend")
  , wc = xi("animationiteration")
  , kc = xi("animationstart")
  , xc = xi("transitionend")
  , Dc = new Map
  , _s = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function J1(e, t) {
    Dc.set(e, t),
    D2(t, [e])
}
for (var ko = 0; ko < _s.length; ko++) {
    var xo = _s[ko]
      , p6 = xo.toLowerCase()
      , m6 = xo[0].toUpperCase() + xo.slice(1);
    J1(p6, "on" + m6)
}
J1(Cc, "onAnimationEnd");
J1(wc, "onAnimationIteration");
J1(kc, "onAnimationStart");
J1("dblclick", "onDoubleClick");
J1("focusin", "onFocus");
J1("focusout", "onBlur");
J1(xc, "onTransitionEnd");
gt("onMouseEnter", ["mouseout", "mouseover"]);
gt("onMouseLeave", ["mouseout", "mouseover"]);
gt("onPointerEnter", ["pointerout", "pointerover"]);
gt("onPointerLeave", ["pointerout", "pointerover"]);
D2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
D2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
D2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
D2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
D2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
D2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , g6 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ln));
function Ps(e, t, n) {
    var i = e.type || "unknown-event";
    e.currentTarget = n,
    pf(i, t, void 0, e),
    e.currentTarget = null
}
function Uc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var i = e[n]
          , o = i.event;
        i = i.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var l = i.length - 1; 0 <= l; l--) {
                    var c = i[l]
                      , u = c.instance
                      , p = c.currentTarget;
                    if (c = c.listener,
                    u !== a && o.isPropagationStopped())
                        break e;
                    Ps(o, c, p),
                    a = u
                }
            else
                for (l = 0; l < i.length; l++) {
                    if (c = i[l],
                    u = c.instance,
                    p = c.currentTarget,
                    c = c.listener,
                    u !== a && o.isPropagationStopped())
                        break e;
                    Ps(o, c, p),
                    a = u
                }
        }
    }
    if (ni)
        throw e = ca,
        ni = !1,
        ca = null,
        e
}
function d5(e, t) {
    var n = t[La];
    n === void 0 && (n = t[La] = new Set);
    var i = e + "__bubble";
    n.has(i) || (Fc(t, e, 2, !1),
    n.add(i))
}
function Do(e, t, n) {
    var i = 0;
    t && (i |= 4),
    Fc(n, e, i, t)
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function Tn(e) {
    if (!e[_r]) {
        e[_r] = !0,
        bu.forEach(function(n) {
            n !== "selectionchange" && (g6.has(n) || Do(n, !1, e),
            Do(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_r] || (t[_r] = !0,
        Do("selectionchange", !1, t))
    }
}
function Fc(e, t, n, i) {
    switch (Sc(t)) {
    case 1:
        var o = Nf;
        break;
    case 4:
        o = Cf;
        break;
    default:
        o = ml
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !ua || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    i ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Uo(e, t, n, i, o) {
    var a = i;
    if (!(t & 1) && !(t & 2) && i !== null)
        e: for (; ; ) {
            if (i === null)
                return;
            var l = i.tag;
            if (l === 3 || l === 4) {
                var c = i.stateNode.containerInfo;
                if (c === o || c.nodeType === 8 && c.parentNode === o)
                    break;
                if (l === 4)
                    for (l = i.return; l !== null; ) {
                        var u = l.tag;
                        if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo,
                        u === o || u.nodeType === 8 && u.parentNode === o))
                            return;
                        l = l.return
                    }
                for (; c !== null; ) {
                    if (l = y2(c),
                    l === null)
                        return;
                    if (u = l.tag,
                    u === 5 || u === 6) {
                        i = a = l;
                        continue e
                    }
                    c = c.parentNode
                }
            }
            i = i.return
        }
    oc(function() {
        var p = a
          , L = cl(n)
          , h = [];
        e: {
            var S = Dc.get(e);
            if (S !== void 0) {
                var s = yl
                  , d = e;
                switch (e) {
                case "keypress":
                    if (br(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    s = Kf;
                    break;
                case "focusin":
                    d = "focus",
                    s = To;
                    break;
                case "focusout":
                    d = "blur",
                    s = To;
                    break;
                case "beforeblur":
                case "afterblur":
                    s = To;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    s = gs;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    s = xf;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    s = Wf;
                    break;
                case Cc:
                case wc:
                case kc:
                    s = Ff;
                    break;
                case xc:
                    s = qf;
                    break;
                case "scroll":
                    s = wf;
                    break;
                case "wheel":
                    s = Zf;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    s = Mf;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    s = Es
                }
                var y = (t & 4) !== 0
                  , j = !y && e === "scroll"
                  , m = y ? S !== null ? S + "Capture" : null : S;
                y = [];
                for (var f = p, g; f !== null; ) {
                    g = f;
                    var O = g.stateNode;
                    if (g.tag === 5 && O !== null && (g = O,
                    m !== null && (O = vn(f, m),
                    O != null && y.push(Nn(f, O, g)))),
                    j)
                        break;
                    f = f.return
                }
                0 < y.length && (S = new s(S,d,null,n,L),
                h.push({
                    event: S,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (S = e === "mouseover" || e === "pointerover",
                s = e === "mouseout" || e === "pointerout",
                S && n !== la && (d = n.relatedTarget || n.fromElement) && (y2(d) || d[P1]))
                    break e;
                if ((s || S) && (S = L.window === L ? L : (S = L.ownerDocument) ? S.defaultView || S.parentWindow : window,
                s ? (d = n.relatedTarget || n.toElement,
                s = p,
                d = d ? y2(d) : null,
                d !== null && (j = U2(d),
                d !== j || d.tag !== 5 && d.tag !== 6) && (d = null)) : (s = null,
                d = p),
                s !== d)) {
                    if (y = gs,
                    O = "onMouseLeave",
                    m = "onMouseEnter",
                    f = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = Es,
                    O = "onPointerLeave",
                    m = "onPointerEnter",
                    f = "pointer"),
                    j = s == null ? S : tt(s),
                    g = d == null ? S : tt(d),
                    S = new y(O,f + "leave",s,n,L),
                    S.target = j,
                    S.relatedTarget = g,
                    O = null,
                    y2(L) === p && (y = new y(m,f + "enter",d,n,L),
                    y.target = g,
                    y.relatedTarget = j,
                    O = y),
                    j = O,
                    s && d)
                        t: {
                            for (y = s,
                            m = d,
                            f = 0,
                            g = y; g; g = W2(g))
                                f++;
                            for (g = 0,
                            O = m; O; O = W2(O))
                                g++;
                            for (; 0 < f - g; )
                                y = W2(y),
                                f--;
                            for (; 0 < g - f; )
                                m = W2(m),
                                g--;
                            for (; f--; ) {
                                if (y === m || m !== null && y === m.alternate)
                                    break t;
                                y = W2(y),
                                m = W2(m)
                            }
                            y = null
                        }
                    else
                        y = null;
                    s !== null && Ts(h, S, s, y, !1),
                    d !== null && j !== null && Ts(h, j, d, y, !0)
                }
            }
            e: {
                if (S = p ? tt(p) : window,
                s = S.nodeName && S.nodeName.toLowerCase(),
                s === "select" || s === "input" && S.type === "file")
                    var C = o6;
                else if (Ls(S))
                    if (Ac)
                        C = u6;
                    else {
                        C = l6;
                        var D = a6
                    }
                else
                    (s = S.nodeName) && s.toLowerCase() === "input" && (S.type === "checkbox" || S.type === "radio") && (C = s6);
                if (C && (C = C(e, p))) {
                    Rc(h, C, n, L);
                    break e
                }
                D && D(e, S, p),
                e === "focusout" && (D = S._wrapperState) && D.controlled && S.type === "number" && na(S, "number", S.value)
            }
            switch (D = p ? tt(p) : window,
            e) {
            case "focusin":
                (Ls(D) || D.contentEditable === "true") && (J2 = D,
                ma = p,
                pn = null);
                break;
            case "focusout":
                pn = ma = J2 = null;
                break;
            case "mousedown":
                ga = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ga = !1,
                As(h, n, L);
                break;
            case "selectionchange":
                if (f6)
                    break;
            case "keydown":
            case "keyup":
                As(h, n, L)
            }
            var k;
            if (hl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var U = "onCompositionStart";
                        break e;
                    case "compositionend":
                        U = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        U = "onCompositionUpdate";
                        break e
                    }
                    U = void 0
                }
            else
                Z2 ? vc(e, n) && (U = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");
            U && (Ic && n.locale !== "ko" && (Z2 || U !== "onCompositionStart" ? U === "onCompositionEnd" && Z2 && (k = Lc()) : (j1 = L,
            gl = "value" in j1 ? j1.value : j1.textContent,
            Z2 = !0)),
            D = li(p, U),
            0 < D.length && (U = new ys(U,e,null,n,L),
            h.push({
                event: U,
                listeners: D
            }),
            k ? U.data = k : (k = Oc(n),
            k !== null && (U.data = k)))),
            (k = e6 ? t6(e, n) : n6(e, n)) && (p = li(p, "onBeforeInput"),
            0 < p.length && (L = new ys("onBeforeInput","beforeinput",null,n,L),
            h.push({
                event: L,
                listeners: p
            }),
            L.data = k))
        }
        Uc(h, t)
    })
}
function Nn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function li(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
        var o = e
          , a = o.stateNode;
        o.tag === 5 && a !== null && (o = a,
        a = vn(e, n),
        a != null && i.unshift(Nn(e, a, o)),
        a = vn(e, t),
        a != null && i.push(Nn(e, a, o))),
        e = e.return
    }
    return i
}
function W2(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ts(e, t, n, i, o) {
    for (var a = t._reactName, l = []; n !== null && n !== i; ) {
        var c = n
          , u = c.alternate
          , p = c.stateNode;
        if (u !== null && u === i)
            break;
        c.tag === 5 && p !== null && (c = p,
        o ? (u = vn(n, a),
        u != null && l.unshift(Nn(n, u, c))) : o || (u = vn(n, a),
        u != null && l.push(Nn(n, u, c)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var y6 = /\r\n?/g
  , E6 = /\u0000|\uFFFD/g;
function Ns(e) {
    return (typeof e == "string" ? e : "" + e).replace(y6, `
`).replace(E6, "")
}
function Pr(e, t, n) {
    if (t = Ns(t),
    Ns(e) !== t && n)
        throw Error(R(425))
}
function si() {}
var ya = null
  , Ea = null;
function ha(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Sa = typeof setTimeout == "function" ? setTimeout : void 0
  , h6 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Cs = typeof Promise == "function" ? Promise : void 0
  , S6 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cs < "u" ? function(e) {
    return Cs.resolve(null).then(e).catch(L6)
}
: Sa;
function L6(e) {
    setTimeout(function() {
        throw e
    })
}
function Fo(e, t) {
    var n = t
      , i = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (i === 0) {
                    e.removeChild(o),
                    An(t);
                    return
                }
                i--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || i++;
        n = o
    } while (n);
    An(t)
}
function K1(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function ws(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ct = Math.random().toString(36).slice(2)
  , f1 = "__reactFiber$" + Ct
  , Cn = "__reactProps$" + Ct
  , P1 = "__reactContainer$" + Ct
  , La = "__reactEvents$" + Ct
  , I6 = "__reactListeners$" + Ct
  , v6 = "__reactHandles$" + Ct;
function y2(e) {
    var t = e[f1];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[P1] || n[f1]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = ws(e); e !== null; ) {
                    if (n = e[f1])
                        return n;
                    e = ws(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Wn(e) {
    return e = e[f1] || e[P1],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function tt(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(R(33))
}
function Di(e) {
    return e[Cn] || null
}
var Ia = []
  , nt = -1;
function e2(e) {
    return {
        current: e
    }
}
function p5(e) {
    0 > nt || (e.current = Ia[nt],
    Ia[nt] = null,
    nt--)
}
function c5(e, t) {
    nt++,
    Ia[nt] = e.current,
    e.current = t
}
var Z1 = {}
  , ue = e2(Z1)
  , Le = e2(!1)
  , O2 = Z1;
function yt(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Z1;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
        return i.__reactInternalMemoizedMaskedChildContext;
    var o = {}, a;
    for (a in n)
        o[a] = t[a];
    return i && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Ie(e) {
    return e = e.childContextTypes,
    e != null
}
function ui() {
    p5(Le),
    p5(ue)
}
function ks(e, t, n) {
    if (ue.current !== Z1)
        throw Error(R(168));
    c5(ue, t),
    c5(Le, n)
}
function $c(e, t, n) {
    var i = e.stateNode;
    if (t = t.childContextTypes,
    typeof i.getChildContext != "function")
        return n;
    i = i.getChildContext();
    for (var o in i)
        if (!(o in t))
            throw Error(R(108, af(e) || "Unknown", o));
    return I5({}, n, i)
}
function ci(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Z1,
    O2 = ue.current,
    c5(ue, e),
    c5(Le, Le.current),
    !0
}
function xs(e, t, n) {
    var i = e.stateNode;
    if (!i)
        throw Error(R(169));
    n ? (e = $c(e, t, O2),
    i.__reactInternalMemoizedMergedChildContext = e,
    p5(Le),
    p5(ue),
    c5(ue, e)) : p5(Le),
    c5(Le, n)
}
var L1 = null
  , Ui = !1
  , $o = !1;
function Mc(e) {
    L1 === null ? L1 = [e] : L1.push(e)
}
function O6(e) {
    Ui = !0,
    Mc(e)
}
function t2() {
    if (!$o && L1 !== null) {
        $o = !0;
        var e = 0
          , t = o5;
        try {
            var n = L1;
            for (o5 = 1; e < n.length; e++) {
                var i = n[e];
                do
                    i = i(!0);
                while (i !== null)
            }
            L1 = null,
            Ui = !1
        } catch (o) {
            throw L1 !== null && (L1 = L1.slice(e + 1)),
            uc(dl, t2),
            o
        } finally {
            o5 = t,
            $o = !1
        }
    }
    return null
}
var rt = []
  , it = 0
  , di = null
  , fi = 0
  , Be = []
  , je = 0
  , R2 = null
  , v1 = 1
  , O1 = "";
function p2(e, t) {
    rt[it++] = fi,
    rt[it++] = di,
    di = e,
    fi = t
}
function Bc(e, t, n) {
    Be[je++] = v1,
    Be[je++] = O1,
    Be[je++] = R2,
    R2 = e;
    var i = v1;
    e = O1;
    var o = 32 - t1(i) - 1;
    i &= ~(1 << o),
    n += 1;
    var a = 32 - t1(t) + o;
    if (30 < a) {
        var l = o - o % 5;
        a = (i & (1 << l) - 1).toString(32),
        i >>= l,
        o -= l,
        v1 = 1 << 32 - t1(t) + o | n << o | i,
        O1 = a + e
    } else
        v1 = 1 << a | n << o | i,
        O1 = e
}
function Ll(e) {
    e.return !== null && (p2(e, 1),
    Bc(e, 1, 0))
}
function Il(e) {
    for (; e === di; )
        di = rt[--it],
        rt[it] = null,
        fi = rt[--it],
        rt[it] = null;
    for (; e === R2; )
        R2 = Be[--je],
        Be[je] = null,
        O1 = Be[--je],
        Be[je] = null,
        v1 = Be[--je],
        Be[je] = null
}
var Ne = null
  , Pe = null
  , y5 = !1
  , e1 = null;
function jc(e, t) {
    var n = Ve(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Ds(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ne = e,
        Pe = K1(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ne = e,
        Pe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = R2 !== null ? {
            id: v1,
            overflow: O1
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ve(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ne = e,
        Pe = null,
        !0) : !1;
    default:
        return !1
    }
}
function va(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Oa(e) {
    if (y5) {
        var t = Pe;
        if (t) {
            var n = t;
            if (!Ds(e, t)) {
                if (va(e))
                    throw Error(R(418));
                t = K1(n.nextSibling);
                var i = Ne;
                t && Ds(e, t) ? jc(i, n) : (e.flags = e.flags & -4097 | 2,
                y5 = !1,
                Ne = e)
            }
        } else {
            if (va(e))
                throw Error(R(418));
            e.flags = e.flags & -4097 | 2,
            y5 = !1,
            Ne = e
        }
    }
}
function Us(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ne = e
}
function Tr(e) {
    if (e !== Ne)
        return !1;
    if (!y5)
        return Us(e),
        y5 = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ha(e.type, e.memoizedProps)),
    t && (t = Pe)) {
        if (va(e))
            throw Vc(),
            Error(R(418));
        for (; t; )
            jc(e, t),
            t = K1(t.nextSibling)
    }
    if (Us(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(R(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Pe = K1(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Pe = null
        }
    } else
        Pe = Ne ? K1(e.stateNode.nextSibling) : null;
    return !0
}
function Vc() {
    for (var e = Pe; e; )
        e = K1(e.nextSibling)
}
function Et() {
    Pe = Ne = null,
    y5 = !1
}
function vl(e) {
    e1 === null ? e1 = [e] : e1.push(e)
}
var R6 = k1.ReactCurrentBatchConfig;
function Xt(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(R(309));
                var i = n.stateNode
            }
            if (!i)
                throw Error(R(147, e));
            var o = i
              , a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(l) {
                var c = o.refs;
                l === null ? delete c[a] : c[a] = l
            }
            ,
            t._stringRef = a,
            t)
        }
        if (typeof e != "string")
            throw Error(R(284));
        if (!n._owner)
            throw Error(R(290, e))
    }
    return e
}
function Nr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Fs(e) {
    var t = e._init;
    return t(e._payload)
}
function Gc(e) {
    function t(m, f) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [f],
            m.flags |= 16) : g.push(f)
        }
    }
    function n(m, f) {
        if (!e)
            return null;
        for (; f !== null; )
            t(m, f),
            f = f.sibling;
        return null
    }
    function i(m, f) {
        for (m = new Map; f !== null; )
            f.key !== null ? m.set(f.key, f) : m.set(f.index, f),
            f = f.sibling;
        return m
    }
    function o(m, f) {
        return m = Q1(m, f),
        m.index = 0,
        m.sibling = null,
        m
    }
    function a(m, f, g) {
        return m.index = g,
        e ? (g = m.alternate,
        g !== null ? (g = g.index,
        g < f ? (m.flags |= 2,
        f) : g) : (m.flags |= 2,
        f)) : (m.flags |= 1048576,
        f)
    }
    function l(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function c(m, f, g, O) {
        return f === null || f.tag !== 6 ? (f = zo(g, m.mode, O),
        f.return = m,
        f) : (f = o(f, g),
        f.return = m,
        f)
    }
    function u(m, f, g, O) {
        var C = g.type;
        return C === X2 ? L(m, f, g.props.children, O, g.key) : f !== null && (f.elementType === C || typeof C == "object" && C !== null && C.$$typeof === F1 && Fs(C) === f.type) ? (O = o(f, g.props),
        O.ref = Xt(m, f, g),
        O.return = m,
        O) : (O = qr(g.type, g.key, g.props, null, m.mode, O),
        O.ref = Xt(m, f, g),
        O.return = m,
        O)
    }
    function p(m, f, g, O) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = Ko(g, m.mode, O),
        f.return = m,
        f) : (f = o(f, g.children || []),
        f.return = m,
        f)
    }
    function L(m, f, g, O, C) {
        return f === null || f.tag !== 7 ? (f = I2(g, m.mode, O, C),
        f.return = m,
        f) : (f = o(f, g),
        f.return = m,
        f)
    }
    function h(m, f, g) {
        if (typeof f == "string" && f !== "" || typeof f == "number")
            return f = zo("" + f, m.mode, g),
            f.return = m,
            f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case hr:
                return g = qr(f.type, f.key, f.props, null, m.mode, g),
                g.ref = Xt(m, null, f),
                g.return = m,
                g;
            case q2:
                return f = Ko(f, m.mode, g),
                f.return = m,
                f;
            case F1:
                var O = f._init;
                return h(m, O(f._payload), g)
            }
            if (on(f) || Ht(f))
                return f = I2(f, m.mode, g, null),
                f.return = m,
                f;
            Nr(m, f)
        }
        return null
    }
    function S(m, f, g, O) {
        var C = f !== null ? f.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return C !== null ? null : c(m, f, "" + g, O);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case hr:
                return g.key === C ? u(m, f, g, O) : null;
            case q2:
                return g.key === C ? p(m, f, g, O) : null;
            case F1:
                return C = g._init,
                S(m, f, C(g._payload), O)
            }
            if (on(g) || Ht(g))
                return C !== null ? null : L(m, f, g, O, null);
            Nr(m, g)
        }
        return null
    }
    function s(m, f, g, O, C) {
        if (typeof O == "string" && O !== "" || typeof O == "number")
            return m = m.get(g) || null,
            c(f, m, "" + O, C);
        if (typeof O == "object" && O !== null) {
            switch (O.$$typeof) {
            case hr:
                return m = m.get(O.key === null ? g : O.key) || null,
                u(f, m, O, C);
            case q2:
                return m = m.get(O.key === null ? g : O.key) || null,
                p(f, m, O, C);
            case F1:
                var D = O._init;
                return s(m, f, g, D(O._payload), C)
            }
            if (on(O) || Ht(O))
                return m = m.get(g) || null,
                L(f, m, O, C, null);
            Nr(f, O)
        }
        return null
    }
    function d(m, f, g, O) {
        for (var C = null, D = null, k = f, U = f = 0, R5 = null; k !== null && U < g.length; U++) {
            k.index > U ? (R5 = k,
            k = null) : R5 = k.sibling;
            var Z = S(m, k, g[U], O);
            if (Z === null) {
                k === null && (k = R5);
                break
            }
            e && k && Z.alternate === null && t(m, k),
            f = a(Z, f, U),
            D === null ? C = Z : D.sibling = Z,
            D = Z,
            k = R5
        }
        if (U === g.length)
            return n(m, k),
            y5 && p2(m, U),
            C;
        if (k === null) {
            for (; U < g.length; U++)
                k = h(m, g[U], O),
                k !== null && (f = a(k, f, U),
                D === null ? C = k : D.sibling = k,
                D = k);
            return y5 && p2(m, U),
            C
        }
        for (k = i(m, k); U < g.length; U++)
            R5 = s(k, m, U, g[U], O),
            R5 !== null && (e && R5.alternate !== null && k.delete(R5.key === null ? U : R5.key),
            f = a(R5, f, U),
            D === null ? C = R5 : D.sibling = R5,
            D = R5);
        return e && k.forEach(function(qe) {
            return t(m, qe)
        }),
        y5 && p2(m, U),
        C
    }
    function y(m, f, g, O) {
        var C = Ht(g);
        if (typeof C != "function")
            throw Error(R(150));
        if (g = C.call(g),
        g == null)
            throw Error(R(151));
        for (var D = C = null, k = f, U = f = 0, R5 = null, Z = g.next(); k !== null && !Z.done; U++,
        Z = g.next()) {
            k.index > U ? (R5 = k,
            k = null) : R5 = k.sibling;
            var qe = S(m, k, Z.value, O);
            if (qe === null) {
                k === null && (k = R5);
                break
            }
            e && k && qe.alternate === null && t(m, k),
            f = a(qe, f, U),
            D === null ? C = qe : D.sibling = qe,
            D = qe,
            k = R5
        }
        if (Z.done)
            return n(m, k),
            y5 && p2(m, U),
            C;
        if (k === null) {
            for (; !Z.done; U++,
            Z = g.next())
                Z = h(m, Z.value, O),
                Z !== null && (f = a(Z, f, U),
                D === null ? C = Z : D.sibling = Z,
                D = Z);
            return y5 && p2(m, U),
            C
        }
        for (k = i(m, k); !Z.done; U++,
        Z = g.next())
            Z = s(k, m, U, Z.value, O),
            Z !== null && (e && Z.alternate !== null && k.delete(Z.key === null ? U : Z.key),
            f = a(Z, f, U),
            D === null ? C = Z : D.sibling = Z,
            D = Z);
        return e && k.forEach(function(zt) {
            return t(m, zt)
        }),
        y5 && p2(m, U),
        C
    }
    function j(m, f, g, O) {
        if (typeof g == "object" && g !== null && g.type === X2 && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case hr:
                e: {
                    for (var C = g.key, D = f; D !== null; ) {
                        if (D.key === C) {
                            if (C = g.type,
                            C === X2) {
                                if (D.tag === 7) {
                                    n(m, D.sibling),
                                    f = o(D, g.props.children),
                                    f.return = m,
                                    m = f;
                                    break e
                                }
                            } else if (D.elementType === C || typeof C == "object" && C !== null && C.$$typeof === F1 && Fs(C) === D.type) {
                                n(m, D.sibling),
                                f = o(D, g.props),
                                f.ref = Xt(m, D, g),
                                f.return = m,
                                m = f;
                                break e
                            }
                            n(m, D);
                            break
                        } else
                            t(m, D);
                        D = D.sibling
                    }
                    g.type === X2 ? (f = I2(g.props.children, m.mode, O, g.key),
                    f.return = m,
                    m = f) : (O = qr(g.type, g.key, g.props, null, m.mode, O),
                    O.ref = Xt(m, f, g),
                    O.return = m,
                    m = O)
                }
                return l(m);
            case q2:
                e: {
                    for (D = g.key; f !== null; ) {
                        if (f.key === D)
                            if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                                n(m, f.sibling),
                                f = o(f, g.children || []),
                                f.return = m,
                                m = f;
                                break e
                            } else {
                                n(m, f);
                                break
                            }
                        else
                            t(m, f);
                        f = f.sibling
                    }
                    f = Ko(g, m.mode, O),
                    f.return = m,
                    m = f
                }
                return l(m);
            case F1:
                return D = g._init,
                j(m, f, D(g._payload), O)
            }
            if (on(g))
                return d(m, f, g, O);
            if (Ht(g))
                return y(m, f, g, O);
            Nr(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        f !== null && f.tag === 6 ? (n(m, f.sibling),
        f = o(f, g),
        f.return = m,
        m = f) : (n(m, f),
        f = zo(g, m.mode, O),
        f.return = m,
        m = f),
        l(m)) : n(m, f)
    }
    return j
}
var ht = Gc(!0)
  , bc = Gc(!1)
  , pi = e2(null)
  , mi = null
  , ot = null
  , Ol = null;
function Rl() {
    Ol = ot = mi = null
}
function Al(e) {
    var t = pi.current;
    p5(pi),
    e._currentValue = t
}
function Ra(e, t, n) {
    for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function pt(e, t) {
    mi = e,
    Ol = ot = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ee = !0),
    e.firstContext = null)
}
function Ke(e) {
    var t = e._currentValue;
    if (Ol !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        ot === null) {
            if (mi === null)
                throw Error(R(308));
            ot = e,
            mi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            ot = ot.next = e;
    return t
}
var E2 = null;
function _l(e) {
    E2 === null ? E2 = [e] : E2.push(e)
}
function zc(e, t, n, i) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    _l(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    T1(e, i)
}
function T1(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var $1 = !1;
function Pl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Kc(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function A1(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function H1(e, t, n) {
    var i = e.updateQueue;
    if (i === null)
        return null;
    if (i = i.shared,
    J & 2) {
        var o = i.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        i.pending = t,
        T1(e, n)
    }
    return o = i.interleaved,
    o === null ? (t.next = t,
    _l(i)) : (t.next = o.next,
    o.next = t),
    i.interleaved = t,
    T1(e, n)
}
function zr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes,
        n |= i,
        t.lanes = n,
        fl(e, n)
    }
}
function $s(e, t) {
    var n = e.updateQueue
      , i = e.alternate;
    if (i !== null && (i = i.updateQueue,
    n === i)) {
        var o = null
          , a = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                a === null ? o = a = l : a = a.next = l,
                n = n.next
            } while (n !== null);
            a === null ? o = a = t : a = a.next = t
        } else
            o = a = t;
        n = {
            baseState: i.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: a,
            shared: i.shared,
            effects: i.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function gi(e, t, n, i) {
    var o = e.updateQueue;
    $1 = !1;
    var a = o.firstBaseUpdate
      , l = o.lastBaseUpdate
      , c = o.shared.pending;
    if (c !== null) {
        o.shared.pending = null;
        var u = c
          , p = u.next;
        u.next = null,
        l === null ? a = p : l.next = p,
        l = u;
        var L = e.alternate;
        L !== null && (L = L.updateQueue,
        c = L.lastBaseUpdate,
        c !== l && (c === null ? L.firstBaseUpdate = p : c.next = p,
        L.lastBaseUpdate = u))
    }
    if (a !== null) {
        var h = o.baseState;
        l = 0,
        L = p = u = null,
        c = a;
        do {
            var S = c.lane
              , s = c.eventTime;
            if ((i & S) === S) {
                L !== null && (L = L.next = {
                    eventTime: s,
                    lane: 0,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                });
                e: {
                    var d = e
                      , y = c;
                    switch (S = t,
                    s = n,
                    y.tag) {
                    case 1:
                        if (d = y.payload,
                        typeof d == "function") {
                            h = d.call(s, h, S);
                            break e
                        }
                        h = d;
                        break e;
                    case 3:
                        d.flags = d.flags & -65537 | 128;
                    case 0:
                        if (d = y.payload,
                        S = typeof d == "function" ? d.call(s, h, S) : d,
                        S == null)
                            break e;
                        h = I5({}, h, S);
                        break e;
                    case 2:
                        $1 = !0
                    }
                }
                c.callback !== null && c.lane !== 0 && (e.flags |= 64,
                S = o.effects,
                S === null ? o.effects = [c] : S.push(c))
            } else
                s = {
                    eventTime: s,
                    lane: S,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                },
                L === null ? (p = L = s,
                u = h) : L = L.next = s,
                l |= S;
            if (c = c.next,
            c === null) {
                if (c = o.shared.pending,
                c === null)
                    break;
                S = c,
                c = S.next,
                S.next = null,
                o.lastBaseUpdate = S,
                o.shared.pending = null
            }
        } while (!0);
        if (L === null && (u = h),
        o.baseState = u,
        o.firstBaseUpdate = p,
        o.lastBaseUpdate = L,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                l |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            a === null && (o.shared.lanes = 0);
        _2 |= l,
        e.lanes = l,
        e.memoizedState = h
    }
}
function Ms(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var i = e[t]
              , o = i.callback;
            if (o !== null) {
                if (i.callback = null,
                i = n,
                typeof o != "function")
                    throw Error(R(191, o));
                o.call(i)
            }
        }
}
var Qn = {}
  , m1 = e2(Qn)
  , wn = e2(Qn)
  , kn = e2(Qn);
function h2(e) {
    if (e === Qn)
        throw Error(R(174));
    return e
}
function Tl(e, t) {
    switch (c5(kn, t),
    c5(wn, e),
    c5(m1, Qn),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ia(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ia(t, e)
    }
    p5(m1),
    c5(m1, t)
}
function St() {
    p5(m1),
    p5(wn),
    p5(kn)
}
function Hc(e) {
    h2(kn.current);
    var t = h2(m1.current)
      , n = ia(t, e.type);
    t !== n && (c5(wn, e),
    c5(m1, n))
}
function Nl(e) {
    wn.current === e && (p5(m1),
    p5(wn))
}
var h5 = e2(0);
function yi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Mo = [];
function Cl() {
    for (var e = 0; e < Mo.length; e++)
        Mo[e]._workInProgressVersionPrimary = null;
    Mo.length = 0
}
var Kr = k1.ReactCurrentDispatcher
  , Bo = k1.ReactCurrentBatchConfig
  , A2 = 0
  , S5 = null
  , B5 = null
  , z5 = null
  , Ei = !1
  , mn = !1
  , xn = 0
  , A6 = 0;
function oe() {
    throw Error(R(321))
}
function wl(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!i1(e[n], t[n]))
            return !1;
    return !0
}
function kl(e, t, n, i, o, a) {
    if (A2 = a,
    S5 = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Kr.current = e === null || e.memoizedState === null ? N6 : C6,
    e = n(i, o),
    mn) {
        a = 0;
        do {
            if (mn = !1,
            xn = 0,
            25 <= a)
                throw Error(R(301));
            a += 1,
            z5 = B5 = null,
            t.updateQueue = null,
            Kr.current = w6,
            e = n(i, o)
        } while (mn)
    }
    if (Kr.current = hi,
    t = B5 !== null && B5.next !== null,
    A2 = 0,
    z5 = B5 = S5 = null,
    Ei = !1,
    t)
        throw Error(R(300));
    return e
}
function xl() {
    var e = xn !== 0;
    return xn = 0,
    e
}
function d1() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return z5 === null ? S5.memoizedState = z5 = e : z5 = z5.next = e,
    z5
}
function He() {
    if (B5 === null) {
        var e = S5.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = B5.next;
    var t = z5 === null ? S5.memoizedState : z5.next;
    if (t !== null)
        z5 = t,
        B5 = e;
    else {
        if (e === null)
            throw Error(R(310));
        B5 = e,
        e = {
            memoizedState: B5.memoizedState,
            baseState: B5.baseState,
            baseQueue: B5.baseQueue,
            queue: B5.queue,
            next: null
        },
        z5 === null ? S5.memoizedState = z5 = e : z5 = z5.next = e
    }
    return z5
}
function Dn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function jo(e) {
    var t = He()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var i = B5
      , o = i.baseQueue
      , a = n.pending;
    if (a !== null) {
        if (o !== null) {
            var l = o.next;
            o.next = a.next,
            a.next = l
        }
        i.baseQueue = o = a,
        n.pending = null
    }
    if (o !== null) {
        a = o.next,
        i = i.baseState;
        var c = l = null
          , u = null
          , p = a;
        do {
            var L = p.lane;
            if ((A2 & L) === L)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: p.action,
                    hasEagerState: p.hasEagerState,
                    eagerState: p.eagerState,
                    next: null
                }),
                i = p.hasEagerState ? p.eagerState : e(i, p.action);
            else {
                var h = {
                    lane: L,
                    action: p.action,
                    hasEagerState: p.hasEagerState,
                    eagerState: p.eagerState,
                    next: null
                };
                u === null ? (c = u = h,
                l = i) : u = u.next = h,
                S5.lanes |= L,
                _2 |= L
            }
            p = p.next
        } while (p !== null && p !== a);
        u === null ? l = i : u.next = c,
        i1(i, t.memoizedState) || (Ee = !0),
        t.memoizedState = i,
        t.baseState = l,
        t.baseQueue = u,
        n.lastRenderedState = i
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            a = o.lane,
            S5.lanes |= a,
            _2 |= a,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Vo(e) {
    var t = He()
      , n = t.queue;
    if (n === null)
        throw Error(R(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch
      , o = n.pending
      , a = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var l = o = o.next;
        do
            a = e(a, l.action),
            l = l.next;
        while (l !== o);
        i1(a, t.memoizedState) || (Ee = !0),
        t.memoizedState = a,
        t.baseQueue === null && (t.baseState = a),
        n.lastRenderedState = a
    }
    return [a, i]
}
function Yc() {}
function Wc(e, t) {
    var n = S5
      , i = He()
      , o = t()
      , a = !i1(i.memoizedState, o);
    if (a && (i.memoizedState = o,
    Ee = !0),
    i = i.queue,
    Dl(Xc.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || a || z5 !== null && z5.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Un(9, qc.bind(null, n, i, o, t), void 0, null),
        Y5 === null)
            throw Error(R(349));
        A2 & 30 || Qc(n, t, o)
    }
    return o
}
function Qc(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = S5.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    S5.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function qc(e, t, n, i) {
    t.value = n,
    t.getSnapshot = i,
    Zc(t) && Jc(e)
}
function Xc(e, t, n) {
    return n(function() {
        Zc(t) && Jc(e)
    })
}
function Zc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !i1(e, n)
    } catch {
        return !0
    }
}
function Jc(e) {
    var t = T1(e, 1);
    t !== null && n1(t, e, 1, -1)
}
function Bs(e) {
    var t = d1();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = T6.bind(null, S5, e),
    [t.memoizedState, e]
}
function Un(e, t, n, i) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: i,
        next: null
    },
    t = S5.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    S5.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (i = n.next,
    n.next = e,
    e.next = i,
    t.lastEffect = e)),
    e
}
function e4() {
    return He().memoizedState
}
function Hr(e, t, n, i) {
    var o = d1();
    S5.flags |= e,
    o.memoizedState = Un(1 | t, n, void 0, i === void 0 ? null : i)
}
function Fi(e, t, n, i) {
    var o = He();
    i = i === void 0 ? null : i;
    var a = void 0;
    if (B5 !== null) {
        var l = B5.memoizedState;
        if (a = l.destroy,
        i !== null && wl(i, l.deps)) {
            o.memoizedState = Un(t, n, a, i);
            return
        }
    }
    S5.flags |= e,
    o.memoizedState = Un(1 | t, n, a, i)
}
function js(e, t) {
    return Hr(8390656, 8, e, t)
}
function Dl(e, t) {
    return Fi(2048, 8, e, t)
}
function t4(e, t) {
    return Fi(4, 2, e, t)
}
function n4(e, t) {
    return Fi(4, 4, e, t)
}
function r4(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function i4(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Fi(4, 4, r4.bind(null, t, e), n)
}
function Ul() {}
function o4(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && wl(t, i[1]) ? i[0] : (n.memoizedState = [e, t],
    e)
}
function a4(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && wl(t, i[1]) ? i[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function l4(e, t, n) {
    return A2 & 21 ? (i1(n, t) || (n = fc(),
    S5.lanes |= n,
    _2 |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ee = !0),
    e.memoizedState = n)
}
function _6(e, t) {
    var n = o5;
    o5 = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var i = Bo.transition;
    Bo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        o5 = n,
        Bo.transition = i
    }
}
function s4() {
    return He().memoizedState
}
function P6(e, t, n) {
    var i = W1(e);
    if (n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    u4(e))
        c4(t, n);
    else if (n = zc(e, t, n, i),
    n !== null) {
        var o = fe();
        n1(n, e, i, o),
        d4(n, t, i)
    }
}
function T6(e, t, n) {
    var i = W1(e)
      , o = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (u4(e))
        c4(t, o);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
        a !== null))
            try {
                var l = t.lastRenderedState
                  , c = a(l, n);
                if (o.hasEagerState = !0,
                o.eagerState = c,
                i1(c, l)) {
                    var u = t.interleaved;
                    u === null ? (o.next = o,
                    _l(t)) : (o.next = u.next,
                    u.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = zc(e, t, o, i),
        n !== null && (o = fe(),
        n1(n, e, i, o),
        d4(n, t, i))
    }
}
function u4(e) {
    var t = e.alternate;
    return e === S5 || t !== null && t === S5
}
function c4(e, t) {
    mn = Ei = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function d4(e, t, n) {
    if (n & 4194240) {
        var i = t.lanes;
        i &= e.pendingLanes,
        n |= i,
        t.lanes = n,
        fl(e, n)
    }
}
var hi = {
    readContext: Ke,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1
}
  , N6 = {
    readContext: Ke,
    useCallback: function(e, t) {
        return d1().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ke,
    useEffect: js,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Hr(4194308, 4, r4.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Hr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Hr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = d1();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var i = d1();
        return t = n !== void 0 ? n(t) : t,
        i.memoizedState = i.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        i.queue = e,
        e = e.dispatch = P6.bind(null, S5, e),
        [i.memoizedState, e]
    },
    useRef: function(e) {
        var t = d1();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Bs,
    useDebugValue: Ul,
    useDeferredValue: function(e) {
        return d1().memoizedState = e
    },
    useTransition: function() {
        var e = Bs(!1)
          , t = e[0];
        return e = _6.bind(null, e[1]),
        d1().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var i = S5
          , o = d1();
        if (y5) {
            if (n === void 0)
                throw Error(R(407));
            n = n()
        } else {
            if (n = t(),
            Y5 === null)
                throw Error(R(349));
            A2 & 30 || Qc(i, t, n)
        }
        o.memoizedState = n;
        var a = {
            value: n,
            getSnapshot: t
        };
        return o.queue = a,
        js(Xc.bind(null, i, a, e), [e]),
        i.flags |= 2048,
        Un(9, qc.bind(null, i, a, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = d1()
          , t = Y5.identifierPrefix;
        if (y5) {
            var n = O1
              , i = v1;
            n = (i & ~(1 << 32 - t1(i) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = xn++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = A6++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , C6 = {
    readContext: Ke,
    useCallback: o4,
    useContext: Ke,
    useEffect: Dl,
    useImperativeHandle: i4,
    useInsertionEffect: t4,
    useLayoutEffect: n4,
    useMemo: a4,
    useReducer: jo,
    useRef: e4,
    useState: function() {
        return jo(Dn)
    },
    useDebugValue: Ul,
    useDeferredValue: function(e) {
        var t = He();
        return l4(t, B5.memoizedState, e)
    },
    useTransition: function() {
        var e = jo(Dn)[0]
          , t = He().memoizedState;
        return [e, t]
    },
    useMutableSource: Yc,
    useSyncExternalStore: Wc,
    useId: s4,
    unstable_isNewReconciler: !1
}
  , w6 = {
    readContext: Ke,
    useCallback: o4,
    useContext: Ke,
    useEffect: Dl,
    useImperativeHandle: i4,
    useInsertionEffect: t4,
    useLayoutEffect: n4,
    useMemo: a4,
    useReducer: Vo,
    useRef: e4,
    useState: function() {
        return Vo(Dn)
    },
    useDebugValue: Ul,
    useDeferredValue: function(e) {
        var t = He();
        return B5 === null ? t.memoizedState = e : l4(t, B5.memoizedState, e)
    },
    useTransition: function() {
        var e = Vo(Dn)[0]
          , t = He().memoizedState;
        return [e, t]
    },
    useMutableSource: Yc,
    useSyncExternalStore: Wc,
    useId: s4,
    unstable_isNewReconciler: !1
};
function Ze(e, t) {
    if (e && e.defaultProps) {
        t = I5({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Aa(e, t, n, i) {
    t = e.memoizedState,
    n = n(i, t),
    n = n == null ? t : I5({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var $i = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? U2(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var i = fe()
          , o = W1(e)
          , a = A1(i, o);
        a.payload = t,
        n != null && (a.callback = n),
        t = H1(e, a, o),
        t !== null && (n1(t, e, o, i),
        zr(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var i = fe()
          , o = W1(e)
          , a = A1(i, o);
        a.tag = 1,
        a.payload = t,
        n != null && (a.callback = n),
        t = H1(e, a, o),
        t !== null && (n1(t, e, o, i),
        zr(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = fe()
          , i = W1(e)
          , o = A1(n, i);
        o.tag = 2,
        t != null && (o.callback = t),
        t = H1(e, o, i),
        t !== null && (n1(t, e, i, n),
        zr(t, e, i))
    }
};
function Vs(e, t, n, i, o, a, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, a, l) : t.prototype && t.prototype.isPureReactComponent ? !Pn(n, i) || !Pn(o, a) : !0
}
function f4(e, t, n) {
    var i = !1
      , o = Z1
      , a = t.contextType;
    return typeof a == "object" && a !== null ? a = Ke(a) : (o = Ie(t) ? O2 : ue.current,
    i = t.contextTypes,
    a = (i = i != null) ? yt(e, o) : Z1),
    t = new t(n,a),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = $i,
    e.stateNode = t,
    t._reactInternals = e,
    i && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = a),
    t
}
function Gs(e, t, n, i) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && $i.enqueueReplaceState(t, t.state, null)
}
function _a(e, t, n, i) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Pl(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? o.context = Ke(a) : (a = Ie(t) ? O2 : ue.current,
    o.context = yt(e, a)),
    o.state = e.memoizedState,
    a = t.getDerivedStateFromProps,
    typeof a == "function" && (Aa(e, t, a, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && $i.enqueueReplaceState(o, o.state, null),
    gi(e, n, o, i),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Lt(e, t) {
    try {
        var n = ""
          , i = t;
        do
            n += of(i),
            i = i.return;
        while (i);
        var o = n
    } catch (a) {
        o = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Go(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Pa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var k6 = typeof WeakMap == "function" ? WeakMap : Map;
function p4(e, t, n) {
    n = A1(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var i = t.value;
    return n.callback = function() {
        Li || (Li = !0,
        $a = i),
        Pa(e, t)
    }
    ,
    n
}
function m4(e, t, n) {
    n = A1(-1, n),
    n.tag = 3;
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
        var o = t.value;
        n.payload = function() {
            return i(o)
        }
        ,
        n.callback = function() {
            Pa(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
        Pa(e, t),
        typeof i != "function" && (Y1 === null ? Y1 = new Set([this]) : Y1.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function bs(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
        i = e.pingCache = new k6;
        var o = new Set;
        i.set(t, o)
    } else
        o = i.get(t),
        o === void 0 && (o = new Set,
        i.set(t, o));
    o.has(n) || (o.add(n),
    e = H6.bind(null, e, t, n),
    t.then(e, e))
}
function zs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ks(e, t, n, i, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = A1(-1, 1),
    t.tag = 2,
    H1(n, t, 1))),
    n.lanes |= 1),
    e)
}
var x6 = k1.ReactCurrentOwner
  , Ee = !1;
function de(e, t, n, i) {
    t.child = e === null ? bc(t, null, n, i) : ht(t, e.child, n, i)
}
function Hs(e, t, n, i, o) {
    n = n.render;
    var a = t.ref;
    return pt(t, o),
    i = kl(e, t, n, i, a, o),
    n = xl(),
    e !== null && !Ee ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    N1(e, t, o)) : (y5 && n && Ll(t),
    t.flags |= 1,
    de(e, t, i, o),
    t.child)
}
function Ys(e, t, n, i, o) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" && !bl(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = a,
        g4(e, t, a, i, o)) : (e = qr(n.type, null, i, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (a = e.child,
    !(e.lanes & o)) {
        var l = a.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Pn,
        n(l, i) && e.ref === t.ref)
            return N1(e, t, o)
    }
    return t.flags |= 1,
    e = Q1(a, i),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function g4(e, t, n, i, o) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (Pn(a, i) && e.ref === t.ref)
            if (Ee = !1,
            t.pendingProps = i = a,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ee = !0);
            else
                return t.lanes = e.lanes,
                N1(e, t, o)
    }
    return Ta(e, t, n, i, o)
}
function y4(e, t, n) {
    var i = t.pendingProps
      , o = i.children
      , a = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            c5(lt, _e),
            _e |= n;
        else {
            if (!(n & 1073741824))
                return e = a !== null ? a.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                c5(lt, _e),
                _e |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            i = a !== null ? a.baseLanes : n,
            c5(lt, _e),
            _e |= i
        }
    else
        a !== null ? (i = a.baseLanes | n,
        t.memoizedState = null) : i = n,
        c5(lt, _e),
        _e |= i;
    return de(e, t, o, n),
    t.child
}
function E4(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Ta(e, t, n, i, o) {
    var a = Ie(n) ? O2 : ue.current;
    return a = yt(t, a),
    pt(t, o),
    n = kl(e, t, n, i, a, o),
    i = xl(),
    e !== null && !Ee ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    N1(e, t, o)) : (y5 && i && Ll(t),
    t.flags |= 1,
    de(e, t, n, o),
    t.child)
}
function Ws(e, t, n, i, o) {
    if (Ie(n)) {
        var a = !0;
        ci(t)
    } else
        a = !1;
    if (pt(t, o),
    t.stateNode === null)
        Yr(e, t),
        f4(t, n, i),
        _a(t, n, i, o),
        i = !0;
    else if (e === null) {
        var l = t.stateNode
          , c = t.memoizedProps;
        l.props = c;
        var u = l.context
          , p = n.contextType;
        typeof p == "object" && p !== null ? p = Ke(p) : (p = Ie(n) ? O2 : ue.current,
        p = yt(t, p));
        var L = n.getDerivedStateFromProps
          , h = typeof L == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        h || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (c !== i || u !== p) && Gs(t, l, i, p),
        $1 = !1;
        var S = t.memoizedState;
        l.state = S,
        gi(t, i, l, o),
        u = t.memoizedState,
        c !== i || S !== u || Le.current || $1 ? (typeof L == "function" && (Aa(t, n, L, i),
        u = t.memoizedState),
        (c = $1 || Vs(t, n, c, i, S, u, p)) ? (h || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = i,
        t.memoizedState = u),
        l.props = i,
        l.state = u,
        l.context = p,
        i = c) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        i = !1)
    } else {
        l = t.stateNode,
        Kc(e, t),
        c = t.memoizedProps,
        p = t.type === t.elementType ? c : Ze(t.type, c),
        l.props = p,
        h = t.pendingProps,
        S = l.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = Ke(u) : (u = Ie(n) ? O2 : ue.current,
        u = yt(t, u));
        var s = n.getDerivedStateFromProps;
        (L = typeof s == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (c !== h || S !== u) && Gs(t, l, i, u),
        $1 = !1,
        S = t.memoizedState,
        l.state = S,
        gi(t, i, l, o);
        var d = t.memoizedState;
        c !== h || S !== d || Le.current || $1 ? (typeof s == "function" && (Aa(t, n, s, i),
        d = t.memoizedState),
        (p = $1 || Vs(t, n, p, i, S, d, u) || !1) ? (L || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(i, d, u),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(i, d, u)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = i,
        t.memoizedState = d),
        l.props = i,
        l.state = d,
        l.context = u,
        i = p) : (typeof l.componentDidUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024),
        i = !1)
    }
    return Na(e, t, n, i, a, o)
}
function Na(e, t, n, i, o, a) {
    E4(e, t);
    var l = (t.flags & 128) !== 0;
    if (!i && !l)
        return o && xs(t, n, !1),
        N1(e, t, a);
    i = t.stateNode,
    x6.current = t;
    var c = l && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = ht(t, e.child, null, a),
    t.child = ht(t, null, c, a)) : de(e, t, c, a),
    t.memoizedState = i.state,
    o && xs(t, n, !0),
    t.child
}
function h4(e) {
    var t = e.stateNode;
    t.pendingContext ? ks(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ks(e, t.context, !1),
    Tl(e, t.containerInfo)
}
function Qs(e, t, n, i, o) {
    return Et(),
    vl(o),
    t.flags |= 256,
    de(e, t, n, i),
    t.child
}
var Ca = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function wa(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function S4(e, t, n) {
    var i = t.pendingProps, o = h5.current, a = !1, l = (t.flags & 128) !== 0, c;
    if ((c = l) || (c = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    c ? (a = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    c5(h5, o & 1),
    e === null)
        return Oa(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = i.children,
        e = i.fallback,
        a ? (i = t.mode,
        a = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(i & 1) && a !== null ? (a.childLanes = 0,
        a.pendingProps = l) : a = ji(l, i, 0, null),
        e = I2(e, i, n, null),
        a.return = t,
        e.return = t,
        a.sibling = e,
        t.child = a,
        t.child.memoizedState = wa(n),
        t.memoizedState = Ca,
        e) : Fl(t, l));
    if (o = e.memoizedState,
    o !== null && (c = o.dehydrated,
    c !== null))
        return D6(e, t, l, i, c, o, n);
    if (a) {
        a = i.fallback,
        l = t.mode,
        o = e.child,
        c = o.sibling;
        var u = {
            mode: "hidden",
            children: i.children
        };
        return !(l & 1) && t.child !== o ? (i = t.child,
        i.childLanes = 0,
        i.pendingProps = u,
        t.deletions = null) : (i = Q1(o, u),
        i.subtreeFlags = o.subtreeFlags & 14680064),
        c !== null ? a = Q1(c, a) : (a = I2(a, l, n, null),
        a.flags |= 2),
        a.return = t,
        i.return = t,
        i.sibling = a,
        t.child = i,
        i = a,
        a = t.child,
        l = e.child.memoizedState,
        l = l === null ? wa(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        a.memoizedState = l,
        a.childLanes = e.childLanes & ~n,
        t.memoizedState = Ca,
        i
    }
    return a = e.child,
    e = a.sibling,
    i = Q1(a, {
        mode: "visible",
        children: i.children
    }),
    !(t.mode & 1) && (i.lanes = n),
    i.return = t,
    i.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = i,
    t.memoizedState = null,
    i
}
function Fl(e, t) {
    return t = ji({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Cr(e, t, n, i) {
    return i !== null && vl(i),
    ht(t, e.child, null, n),
    e = Fl(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function D6(e, t, n, i, o, a, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        i = Go(Error(R(422))),
        Cr(e, t, l, i)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (a = i.fallback,
        o = t.mode,
        i = ji({
            mode: "visible",
            children: i.children
        }, o, 0, null),
        a = I2(a, o, l, null),
        a.flags |= 2,
        i.return = t,
        a.return = t,
        i.sibling = a,
        t.child = i,
        t.mode & 1 && ht(t, e.child, null, l),
        t.child.memoizedState = wa(l),
        t.memoizedState = Ca,
        a);
    if (!(t.mode & 1))
        return Cr(e, t, l, null);
    if (o.data === "$!") {
        if (i = o.nextSibling && o.nextSibling.dataset,
        i)
            var c = i.dgst;
        return i = c,
        a = Error(R(419)),
        i = Go(a, i, void 0),
        Cr(e, t, l, i)
    }
    if (c = (l & e.childLanes) !== 0,
    Ee || c) {
        if (i = Y5,
        i !== null) {
            switch (l & -l) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (i.suspendedLanes | l) ? 0 : o,
            o !== 0 && o !== a.retryLane && (a.retryLane = o,
            T1(e, o),
            n1(i, e, o, -1))
        }
        return Gl(),
        i = Go(Error(R(421))),
        Cr(e, t, l, i)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Y6.bind(null, e),
    o._reactRetry = t,
    null) : (e = a.treeContext,
    Pe = K1(o.nextSibling),
    Ne = t,
    y5 = !0,
    e1 = null,
    e !== null && (Be[je++] = v1,
    Be[je++] = O1,
    Be[je++] = R2,
    v1 = e.id,
    O1 = e.overflow,
    R2 = t),
    t = Fl(t, i.children),
    t.flags |= 4096,
    t)
}
function qs(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t),
    Ra(e.return, t, n)
}
function bo(e, t, n, i, o) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: o
    } : (a.isBackwards = t,
    a.rendering = null,
    a.renderingStartTime = 0,
    a.last = i,
    a.tail = n,
    a.tailMode = o)
}
function L4(e, t, n) {
    var i = t.pendingProps
      , o = i.revealOrder
      , a = i.tail;
    if (de(e, t, i.children, n),
    i = h5.current,
    i & 2)
        i = i & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && qs(e, n, t);
                else if (e.tag === 19)
                    qs(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        i &= 1
    }
    if (c5(h5, i),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && yi(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            bo(t, !1, o, n, a);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && yi(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            bo(t, !0, n, null, a);
            break;
        case "together":
            bo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Yr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function N1(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    _2 |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Q1(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Q1(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function U6(e, t, n) {
    switch (t.tag) {
    case 3:
        h4(t),
        Et();
        break;
    case 5:
        Hc(t);
        break;
    case 1:
        Ie(t.type) && ci(t);
        break;
    case 4:
        Tl(t, t.stateNode.containerInfo);
        break;
    case 10:
        var i = t.type._context
          , o = t.memoizedProps.value;
        c5(pi, i._currentValue),
        i._currentValue = o;
        break;
    case 13:
        if (i = t.memoizedState,
        i !== null)
            return i.dehydrated !== null ? (c5(h5, h5.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? S4(e, t, n) : (c5(h5, h5.current & 1),
            e = N1(e, t, n),
            e !== null ? e.sibling : null);
        c5(h5, h5.current & 1);
        break;
    case 19:
        if (i = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (i)
                return L4(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        c5(h5, h5.current),
        i)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        y4(e, t, n)
    }
    return N1(e, t, n)
}
var I4, ka, v4, O4;
I4 = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ka = function() {}
;
v4 = function(e, t, n, i) {
    var o = e.memoizedProps;
    if (o !== i) {
        e = t.stateNode,
        h2(m1.current);
        var a = null;
        switch (n) {
        case "input":
            o = ea(e, o),
            i = ea(e, i),
            a = [];
            break;
        case "select":
            o = I5({}, o, {
                value: void 0
            }),
            i = I5({}, i, {
                value: void 0
            }),
            a = [];
            break;
        case "textarea":
            o = ra(e, o),
            i = ra(e, i),
            a = [];
            break;
        default:
            typeof o.onClick != "function" && typeof i.onClick == "function" && (e.onclick = si)
        }
        oa(n, i);
        var l;
        n = null;
        for (p in o)
            if (!i.hasOwnProperty(p) && o.hasOwnProperty(p) && o[p] != null)
                if (p === "style") {
                    var c = o[p];
                    for (l in c)
                        c.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Ln.hasOwnProperty(p) ? a || (a = []) : (a = a || []).push(p, null));
        for (p in i) {
            var u = i[p];
            if (c = o != null ? o[p] : void 0,
            i.hasOwnProperty(p) && u !== c && (u != null || c != null))
                if (p === "style")
                    if (c) {
                        for (l in c)
                            !c.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in u)
                            u.hasOwnProperty(l) && c[l] !== u[l] && (n || (n = {}),
                            n[l] = u[l])
                    } else
                        n || (a || (a = []),
                        a.push(p, n)),
                        n = u;
                else
                    p === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    c = c ? c.__html : void 0,
                    u != null && c !== u && (a = a || []).push(p, u)) : p === "children" ? typeof u != "string" && typeof u != "number" || (a = a || []).push(p, "" + u) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Ln.hasOwnProperty(p) ? (u != null && p === "onScroll" && d5("scroll", e),
                    a || c === u || (a = [])) : (a = a || []).push(p, u))
        }
        n && (a = a || []).push("style", n);
        var p = a;
        (t.updateQueue = p) && (t.flags |= 4)
    }
}
;
O4 = function(e, t, n, i) {
    n !== i && (t.flags |= 4)
}
;
function Zt(e, t) {
    if (!y5)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var i = null; n !== null; )
                n.alternate !== null && (i = n),
                n = n.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null
        }
}
function ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , i = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            i |= o.subtreeFlags & 14680064,
            i |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            i |= o.subtreeFlags,
            i |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= i,
    e.childLanes = n,
    t
}
function F6(e, t, n) {
    var i = t.pendingProps;
    switch (Il(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ae(t),
        null;
    case 1:
        return Ie(t.type) && ui(),
        ae(t),
        null;
    case 3:
        return i = t.stateNode,
        St(),
        p5(Le),
        p5(ue),
        Cl(),
        i.pendingContext && (i.context = i.pendingContext,
        i.pendingContext = null),
        (e === null || e.child === null) && (Tr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        e1 !== null && (ja(e1),
        e1 = null))),
        ka(e, t),
        ae(t),
        null;
    case 5:
        Nl(t);
        var o = h2(kn.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            v4(e, t, n, i, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!i) {
                if (t.stateNode === null)
                    throw Error(R(166));
                return ae(t),
                null
            }
            if (e = h2(m1.current),
            Tr(t)) {
                i = t.stateNode,
                n = t.type;
                var a = t.memoizedProps;
                switch (i[f1] = t,
                i[Cn] = a,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    d5("cancel", i),
                    d5("close", i);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    d5("load", i);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < ln.length; o++)
                        d5(ln[o], i);
                    break;
                case "source":
                    d5("error", i);
                    break;
                case "img":
                case "image":
                case "link":
                    d5("error", i),
                    d5("load", i);
                    break;
                case "details":
                    d5("toggle", i);
                    break;
                case "input":
                    os(i, a),
                    d5("invalid", i);
                    break;
                case "select":
                    i._wrapperState = {
                        wasMultiple: !!a.multiple
                    },
                    d5("invalid", i);
                    break;
                case "textarea":
                    ls(i, a),
                    d5("invalid", i)
                }
                oa(n, a),
                o = null;
                for (var l in a)
                    if (a.hasOwnProperty(l)) {
                        var c = a[l];
                        l === "children" ? typeof c == "string" ? i.textContent !== c && (a.suppressHydrationWarning !== !0 && Pr(i.textContent, c, e),
                        o = ["children", c]) : typeof c == "number" && i.textContent !== "" + c && (a.suppressHydrationWarning !== !0 && Pr(i.textContent, c, e),
                        o = ["children", "" + c]) : Ln.hasOwnProperty(l) && c != null && l === "onScroll" && d5("scroll", i)
                    }
                switch (n) {
                case "input":
                    Sr(i),
                    as(i, a, !0);
                    break;
                case "textarea":
                    Sr(i),
                    ss(i);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof a.onClick == "function" && (i.onclick = si)
                }
                i = o,
                t.updateQueue = i,
                i !== null && (t.flags |= 4)
            } else {
                l = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Xu(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof i.is == "string" ? e = l.createElement(n, {
                    is: i.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                i.multiple ? l.multiple = !0 : i.size && (l.size = i.size))) : e = l.createElementNS(e, n),
                e[f1] = t,
                e[Cn] = i,
                I4(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = aa(n, i),
                    n) {
                    case "dialog":
                        d5("cancel", e),
                        d5("close", e),
                        o = i;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        d5("load", e),
                        o = i;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < ln.length; o++)
                            d5(ln[o], e);
                        o = i;
                        break;
                    case "source":
                        d5("error", e),
                        o = i;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        d5("error", e),
                        d5("load", e),
                        o = i;
                        break;
                    case "details":
                        d5("toggle", e),
                        o = i;
                        break;
                    case "input":
                        os(e, i),
                        o = ea(e, i),
                        d5("invalid", e);
                        break;
                    case "option":
                        o = i;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!i.multiple
                        },
                        o = I5({}, i, {
                            value: void 0
                        }),
                        d5("invalid", e);
                        break;
                    case "textarea":
                        ls(e, i),
                        o = ra(e, i),
                        d5("invalid", e);
                        break;
                    default:
                        o = i
                    }
                    oa(n, o),
                    c = o;
                    for (a in c)
                        if (c.hasOwnProperty(a)) {
                            var u = c[a];
                            a === "style" ? ec(e, u) : a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && Zu(e, u)) : a === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && In(e, u) : typeof u == "number" && In(e, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ln.hasOwnProperty(a) ? u != null && a === "onScroll" && d5("scroll", e) : u != null && al(e, a, u, l))
                        }
                    switch (n) {
                    case "input":
                        Sr(e),
                        as(e, i, !1);
                        break;
                    case "textarea":
                        Sr(e),
                        ss(e);
                        break;
                    case "option":
                        i.value != null && e.setAttribute("value", "" + X1(i.value));
                        break;
                    case "select":
                        e.multiple = !!i.multiple,
                        a = i.value,
                        a != null ? ut(e, !!i.multiple, a, !1) : i.defaultValue != null && ut(e, !!i.multiple, i.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = si)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        i = !!i.autoFocus;
                        break e;
                    case "img":
                        i = !0;
                        break e;
                    default:
                        i = !1
                    }
                }
                i && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ae(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            O4(e, t, e.memoizedProps, i);
        else {
            if (typeof i != "string" && t.stateNode === null)
                throw Error(R(166));
            if (n = h2(kn.current),
            h2(m1.current),
            Tr(t)) {
                if (i = t.stateNode,
                n = t.memoizedProps,
                i[f1] = t,
                (a = i.nodeValue !== n) && (e = Ne,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Pr(i.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Pr(i.nodeValue, n, (e.mode & 1) !== 0)
                    }
                a && (t.flags |= 4)
            } else
                i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i),
                i[f1] = t,
                t.stateNode = i
        }
        return ae(t),
        null;
    case 13:
        if (p5(h5),
        i = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (y5 && Pe !== null && t.mode & 1 && !(t.flags & 128))
                Vc(),
                Et(),
                t.flags |= 98560,
                a = !1;
            else if (a = Tr(t),
            i !== null && i.dehydrated !== null) {
                if (e === null) {
                    if (!a)
                        throw Error(R(318));
                    if (a = t.memoizedState,
                    a = a !== null ? a.dehydrated : null,
                    !a)
                        throw Error(R(317));
                    a[f1] = t
                } else
                    Et(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ae(t),
                a = !1
            } else
                e1 !== null && (ja(e1),
                e1 = null),
                a = !0;
            if (!a)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (i = i !== null,
        i !== (e !== null && e.memoizedState !== null) && i && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || h5.current & 1 ? V5 === 0 && (V5 = 3) : Gl())),
        t.updateQueue !== null && (t.flags |= 4),
        ae(t),
        null);
    case 4:
        return St(),
        ka(e, t),
        e === null && Tn(t.stateNode.containerInfo),
        ae(t),
        null;
    case 10:
        return Al(t.type._context),
        ae(t),
        null;
    case 17:
        return Ie(t.type) && ui(),
        ae(t),
        null;
    case 19:
        if (p5(h5),
        a = t.memoizedState,
        a === null)
            return ae(t),
            null;
        if (i = (t.flags & 128) !== 0,
        l = a.rendering,
        l === null)
            if (i)
                Zt(a, !1);
            else {
                if (V5 !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = yi(e),
                        l !== null) {
                            for (t.flags |= 128,
                            Zt(a, !1),
                            i = l.updateQueue,
                            i !== null && (t.updateQueue = i,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            i = n,
                            n = t.child; n !== null; )
                                a = n,
                                e = i,
                                a.flags &= 14680066,
                                l = a.alternate,
                                l === null ? (a.childLanes = 0,
                                a.lanes = e,
                                a.child = null,
                                a.subtreeFlags = 0,
                                a.memoizedProps = null,
                                a.memoizedState = null,
                                a.updateQueue = null,
                                a.dependencies = null,
                                a.stateNode = null) : (a.childLanes = l.childLanes,
                                a.lanes = l.lanes,
                                a.child = l.child,
                                a.subtreeFlags = 0,
                                a.deletions = null,
                                a.memoizedProps = l.memoizedProps,
                                a.memoizedState = l.memoizedState,
                                a.updateQueue = l.updateQueue,
                                a.type = l.type,
                                e = l.dependencies,
                                a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return c5(h5, h5.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                a.tail !== null && P5() > It && (t.flags |= 128,
                i = !0,
                Zt(a, !1),
                t.lanes = 4194304)
            }
        else {
            if (!i)
                if (e = yi(l),
                e !== null) {
                    if (t.flags |= 128,
                    i = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Zt(a, !0),
                    a.tail === null && a.tailMode === "hidden" && !l.alternate && !y5)
                        return ae(t),
                        null
                } else
                    2 * P5() - a.renderingStartTime > It && n !== 1073741824 && (t.flags |= 128,
                    i = !0,
                    Zt(a, !1),
                    t.lanes = 4194304);
            a.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = a.last,
            n !== null ? n.sibling = l : t.child = l,
            a.last = l)
        }
        return a.tail !== null ? (t = a.tail,
        a.rendering = t,
        a.tail = t.sibling,
        a.renderingStartTime = P5(),
        t.sibling = null,
        n = h5.current,
        c5(h5, i ? n & 1 | 2 : n & 1),
        t) : (ae(t),
        null);
    case 22:
    case 23:
        return Vl(),
        i = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== i && (t.flags |= 8192),
        i && t.mode & 1 ? _e & 1073741824 && (ae(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(R(156, t.tag))
}
function $6(e, t) {
    switch (Il(t),
    t.tag) {
    case 1:
        return Ie(t.type) && ui(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return St(),
        p5(Le),
        p5(ue),
        Cl(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Nl(t),
        null;
    case 13:
        if (p5(h5),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(R(340));
            Et()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return p5(h5),
        null;
    case 4:
        return St(),
        null;
    case 10:
        return Al(t.type._context),
        null;
    case 22:
    case 23:
        return Vl(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var wr = !1
  , le = !1
  , M6 = typeof WeakSet == "function" ? WeakSet : Set
  , w = null;
function at(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (i) {
                O5(e, t, i)
            }
        else
            n.current = null
}
function xa(e, t, n) {
    try {
        n()
    } catch (i) {
        O5(e, t, i)
    }
}
var Xs = !1;
function B6(e, t) {
    if (ya = oi,
    e = Tc(),
    Sl(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var o = i.anchorOffset
                      , a = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType,
                        a.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , c = -1
                      , u = -1
                      , p = 0
                      , L = 0
                      , h = e
                      , S = null;
                    t: for (; ; ) {
                        for (var s; h !== n || o !== 0 && h.nodeType !== 3 || (c = l + o),
                        h !== a || i !== 0 && h.nodeType !== 3 || (u = l + i),
                        h.nodeType === 3 && (l += h.nodeValue.length),
                        (s = h.firstChild) !== null; )
                            S = h,
                            h = s;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (S === n && ++p === o && (c = l),
                            S === a && ++L === i && (u = l),
                            (s = h.nextSibling) !== null)
                                break;
                            h = S,
                            S = h.parentNode
                        }
                        h = s
                    }
                    n = c === -1 || u === -1 ? null : {
                        start: c,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ea = {
        focusedElem: e,
        selectionRange: n
    },
    oi = !1,
    w = t; w !== null; )
        if (t = w,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            w = e;
        else
            for (; w !== null; ) {
                t = w;
                try {
                    var d = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (d !== null) {
                                var y = d.memoizedProps
                                  , j = d.memoizedState
                                  , m = t.stateNode
                                  , f = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ze(t.type, y), j);
                                m.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                        }
                } catch (O) {
                    O5(t, t.return, O)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    w = e;
                    break
                }
                w = t.return
            }
    return d = Xs,
    Xs = !1,
    d
}
function gn(e, t, n) {
    var i = t.updateQueue;
    if (i = i !== null ? i.lastEffect : null,
    i !== null) {
        var o = i = i.next;
        do {
            if ((o.tag & e) === e) {
                var a = o.destroy;
                o.destroy = void 0,
                a !== void 0 && xa(t, n, a)
            }
            o = o.next
        } while (o !== i)
    }
}
function Mi(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var i = n.create;
                n.destroy = i()
            }
            n = n.next
        } while (n !== t)
    }
}
function Da(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function R4(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    R4(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[f1],
    delete t[Cn],
    delete t[La],
    delete t[I6],
    delete t[v6])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function A4(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Zs(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || A4(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ua(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = si));
    else if (i !== 4 && (e = e.child,
    e !== null))
        for (Ua(e, t, n),
        e = e.sibling; e !== null; )
            Ua(e, t, n),
            e = e.sibling
}
function Fa(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (e = e.child,
    e !== null))
        for (Fa(e, t, n),
        e = e.sibling; e !== null; )
            Fa(e, t, n),
            e = e.sibling
}
var q5 = null
  , Je = !1;
function U1(e, t, n) {
    for (n = n.child; n !== null; )
        _4(e, t, n),
        n = n.sibling
}
function _4(e, t, n) {
    if (p1 && typeof p1.onCommitFiberUnmount == "function")
        try {
            p1.onCommitFiberUnmount(Ci, n)
        } catch {}
    switch (n.tag) {
    case 5:
        le || at(n, t);
    case 6:
        var i = q5
          , o = Je;
        q5 = null,
        U1(e, t, n),
        q5 = i,
        Je = o,
        q5 !== null && (Je ? (e = q5,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q5.removeChild(n.stateNode));
        break;
    case 18:
        q5 !== null && (Je ? (e = q5,
        n = n.stateNode,
        e.nodeType === 8 ? Fo(e.parentNode, n) : e.nodeType === 1 && Fo(e, n),
        An(e)) : Fo(q5, n.stateNode));
        break;
    case 4:
        i = q5,
        o = Je,
        q5 = n.stateNode.containerInfo,
        Je = !0,
        U1(e, t, n),
        q5 = i,
        Je = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!le && (i = n.updateQueue,
        i !== null && (i = i.lastEffect,
        i !== null))) {
            o = i = i.next;
            do {
                var a = o
                  , l = a.destroy;
                a = a.tag,
                l !== void 0 && (a & 2 || a & 4) && xa(n, t, l),
                o = o.next
            } while (o !== i)
        }
        U1(e, t, n);
        break;
    case 1:
        if (!le && (at(n, t),
        i = n.stateNode,
        typeof i.componentWillUnmount == "function"))
            try {
                i.props = n.memoizedProps,
                i.state = n.memoizedState,
                i.componentWillUnmount()
            } catch (c) {
                O5(n, t, c)
            }
        U1(e, t, n);
        break;
    case 21:
        U1(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (le = (i = le) || n.memoizedState !== null,
        U1(e, t, n),
        le = i) : U1(e, t, n);
        break;
    default:
        U1(e, t, n)
    }
}
function Js(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new M6),
        t.forEach(function(i) {
            var o = W6.bind(null, e, i);
            n.has(i) || (n.add(i),
            i.then(o, o))
        })
    }
}
function Xe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var o = n[i];
            try {
                var a = e
                  , l = t
                  , c = l;
                e: for (; c !== null; ) {
                    switch (c.tag) {
                    case 5:
                        q5 = c.stateNode,
                        Je = !1;
                        break e;
                    case 3:
                        q5 = c.stateNode.containerInfo,
                        Je = !0;
                        break e;
                    case 4:
                        q5 = c.stateNode.containerInfo,
                        Je = !0;
                        break e
                    }
                    c = c.return
                }
                if (q5 === null)
                    throw Error(R(160));
                _4(a, l, o),
                q5 = null,
                Je = !1;
                var u = o.alternate;
                u !== null && (u.return = null),
                o.return = null
            } catch (p) {
                O5(o, t, p)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            P4(t, e),
            t = t.sibling
}
function P4(e, t) {
    var n = e.alternate
      , i = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Xe(t, e),
        c1(e),
        i & 4) {
            try {
                gn(3, e, e.return),
                Mi(3, e)
            } catch (y) {
                O5(e, e.return, y)
            }
            try {
                gn(5, e, e.return)
            } catch (y) {
                O5(e, e.return, y)
            }
        }
        break;
    case 1:
        Xe(t, e),
        c1(e),
        i & 512 && n !== null && at(n, n.return);
        break;
    case 5:
        if (Xe(t, e),
        c1(e),
        i & 512 && n !== null && at(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                In(o, "")
            } catch (y) {
                O5(e, e.return, y)
            }
        }
        if (i & 4 && (o = e.stateNode,
        o != null)) {
            var a = e.memoizedProps
              , l = n !== null ? n.memoizedProps : a
              , c = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    c === "input" && a.type === "radio" && a.name != null && Qu(o, a),
                    aa(c, l);
                    var p = aa(c, a);
                    for (l = 0; l < u.length; l += 2) {
                        var L = u[l]
                          , h = u[l + 1];
                        L === "style" ? ec(o, h) : L === "dangerouslySetInnerHTML" ? Zu(o, h) : L === "children" ? In(o, h) : al(o, L, h, p)
                    }
                    switch (c) {
                    case "input":
                        ta(o, a);
                        break;
                    case "textarea":
                        qu(o, a);
                        break;
                    case "select":
                        var S = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!a.multiple;
                        var s = a.value;
                        s != null ? ut(o, !!a.multiple, s, !1) : S !== !!a.multiple && (a.defaultValue != null ? ut(o, !!a.multiple, a.defaultValue, !0) : ut(o, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    o[Cn] = a
                } catch (y) {
                    O5(e, e.return, y)
                }
        }
        break;
    case 6:
        if (Xe(t, e),
        c1(e),
        i & 4) {
            if (e.stateNode === null)
                throw Error(R(162));
            o = e.stateNode,
            a = e.memoizedProps;
            try {
                o.nodeValue = a
            } catch (y) {
                O5(e, e.return, y)
            }
        }
        break;
    case 3:
        if (Xe(t, e),
        c1(e),
        i & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                An(t.containerInfo)
            } catch (y) {
                O5(e, e.return, y)
            }
        break;
    case 4:
        Xe(t, e),
        c1(e);
        break;
    case 13:
        Xe(t, e),
        c1(e),
        o = e.child,
        o.flags & 8192 && (a = o.memoizedState !== null,
        o.stateNode.isHidden = a,
        !a || o.alternate !== null && o.alternate.memoizedState !== null || (Bl = P5())),
        i & 4 && Js(e);
        break;
    case 22:
        if (L = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (le = (p = le) || L,
        Xe(t, e),
        le = p) : Xe(t, e),
        c1(e),
        i & 8192) {
            if (p = e.memoizedState !== null,
            (e.stateNode.isHidden = p) && !L && e.mode & 1)
                for (w = e,
                L = e.child; L !== null; ) {
                    for (h = w = L; w !== null; ) {
                        switch (S = w,
                        s = S.child,
                        S.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            gn(4, S, S.return);
                            break;
                        case 1:
                            at(S, S.return);
                            var d = S.stateNode;
                            if (typeof d.componentWillUnmount == "function") {
                                i = S,
                                n = S.return;
                                try {
                                    t = i,
                                    d.props = t.memoizedProps,
                                    d.state = t.memoizedState,
                                    d.componentWillUnmount()
                                } catch (y) {
                                    O5(i, n, y)
                                }
                            }
                            break;
                        case 5:
                            at(S, S.return);
                            break;
                        case 22:
                            if (S.memoizedState !== null) {
                                tu(h);
                                continue
                            }
                        }
                        s !== null ? (s.return = S,
                        w = s) : tu(h)
                    }
                    L = L.sibling
                }
            e: for (L = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (L === null) {
                        L = h;
                        try {
                            o = h.stateNode,
                            p ? (a = o.style,
                            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (c = h.stateNode,
                            u = h.memoizedProps.style,
                            l = u != null && u.hasOwnProperty("display") ? u.display : null,
                            c.style.display = Ju("display", l))
                        } catch (y) {
                            O5(e, e.return, y)
                        }
                    }
                } else if (h.tag === 6) {
                    if (L === null)
                        try {
                            h.stateNode.nodeValue = p ? "" : h.memoizedProps
                        } catch (y) {
                            O5(e, e.return, y)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    L === h && (L = null),
                    h = h.return
                }
                L === h && (L = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Xe(t, e),
        c1(e),
        i & 4 && Js(e);
        break;
    case 21:
        break;
    default:
        Xe(t, e),
        c1(e)
    }
}
function c1(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (A4(n)) {
                        var i = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (i.tag) {
            case 5:
                var o = i.stateNode;
                i.flags & 32 && (In(o, ""),
                i.flags &= -33);
                var a = Zs(e);
                Fa(e, a, o);
                break;
            case 3:
            case 4:
                var l = i.stateNode.containerInfo
                  , c = Zs(e);
                Ua(e, c, l);
                break;
            default:
                throw Error(R(161))
            }
        } catch (u) {
            O5(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function j6(e, t, n) {
    w = e,
    T4(e)
}
function T4(e, t, n) {
    for (var i = (e.mode & 1) !== 0; w !== null; ) {
        var o = w
          , a = o.child;
        if (o.tag === 22 && i) {
            var l = o.memoizedState !== null || wr;
            if (!l) {
                var c = o.alternate
                  , u = c !== null && c.memoizedState !== null || le;
                c = wr;
                var p = le;
                if (wr = l,
                (le = u) && !p)
                    for (w = o; w !== null; )
                        l = w,
                        u = l.child,
                        l.tag === 22 && l.memoizedState !== null ? nu(o) : u !== null ? (u.return = l,
                        w = u) : nu(o);
                for (; a !== null; )
                    w = a,
                    T4(a),
                    a = a.sibling;
                w = o,
                wr = c,
                le = p
            }
            eu(e)
        } else
            o.subtreeFlags & 8772 && a !== null ? (a.return = o,
            w = a) : eu(e)
    }
}
function eu(e) {
    for (; w !== null; ) {
        var t = w;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || Mi(5, t);
                        break;
                    case 1:
                        var i = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null)
                                i.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
                                i.componentDidUpdate(o, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && Ms(t, a, i);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Ms(t, l, n)
                        }
                        break;
                    case 5:
                        var c = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = c;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var p = t.alternate;
                            if (p !== null) {
                                var L = p.memoizedState;
                                if (L !== null) {
                                    var h = L.dehydrated;
                                    h !== null && An(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(R(163))
                    }
                le || t.flags & 512 && Da(t)
            } catch (S) {
                O5(t, t.return, S)
            }
        }
        if (t === e) {
            w = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            w = n;
            break
        }
        w = t.return
    }
}
function tu(e) {
    for (; w !== null; ) {
        var t = w;
        if (t === e) {
            w = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            w = n;
            break
        }
        w = t.return
    }
}
function nu(e) {
    for (; w !== null; ) {
        var t = w;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Mi(4, t)
                } catch (u) {
                    O5(t, n, u)
                }
                break;
            case 1:
                var i = t.stateNode;
                if (typeof i.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        i.componentDidMount()
                    } catch (u) {
                        O5(t, o, u)
                    }
                }
                var a = t.return;
                try {
                    Da(t)
                } catch (u) {
                    O5(t, a, u)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    Da(t)
                } catch (u) {
                    O5(t, l, u)
                }
            }
        } catch (u) {
            O5(t, t.return, u)
        }
        if (t === e) {
            w = null;
            break
        }
        var c = t.sibling;
        if (c !== null) {
            c.return = t.return,
            w = c;
            break
        }
        w = t.return
    }
}
var V6 = Math.ceil
  , Si = k1.ReactCurrentDispatcher
  , $l = k1.ReactCurrentOwner
  , ze = k1.ReactCurrentBatchConfig
  , J = 0
  , Y5 = null
  , k5 = null
  , J5 = 0
  , _e = 0
  , lt = e2(0)
  , V5 = 0
  , Fn = null
  , _2 = 0
  , Bi = 0
  , Ml = 0
  , yn = null
  , ye = null
  , Bl = 0
  , It = 1 / 0
  , S1 = null
  , Li = !1
  , $a = null
  , Y1 = null
  , kr = !1
  , V1 = null
  , Ii = 0
  , En = 0
  , Ma = null
  , Wr = -1
  , Qr = 0;
function fe() {
    return J & 6 ? P5() : Wr !== -1 ? Wr : Wr = P5()
}
function W1(e) {
    return e.mode & 1 ? J & 2 && J5 !== 0 ? J5 & -J5 : R6.transition !== null ? (Qr === 0 && (Qr = fc()),
    Qr) : (e = o5,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Sc(e.type)),
    e) : 1
}
function n1(e, t, n, i) {
    if (50 < En)
        throw En = 0,
        Ma = null,
        Error(R(185));
    Hn(e, n, i),
    (!(J & 2) || e !== Y5) && (e === Y5 && (!(J & 2) && (Bi |= n),
    V5 === 4 && B1(e, J5)),
    ve(e, i),
    n === 1 && J === 0 && !(t.mode & 1) && (It = P5() + 500,
    Ui && t2()))
}
function ve(e, t) {
    var n = e.callbackNode;
    Rf(e, t);
    var i = ii(e, e === Y5 ? J5 : 0);
    if (i === 0)
        n !== null && ds(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = i & -i,
    e.callbackPriority !== t) {
        if (n != null && ds(n),
        t === 1)
            e.tag === 0 ? O6(ru.bind(null, e)) : Mc(ru.bind(null, e)),
            S6(function() {
                !(J & 6) && t2()
            }),
            n = null;
        else {
            switch (pc(i)) {
            case 1:
                n = dl;
                break;
            case 4:
                n = cc;
                break;
            case 16:
                n = ri;
                break;
            case 536870912:
                n = dc;
                break;
            default:
                n = ri
            }
            n = F4(n, N4.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function N4(e, t) {
    if (Wr = -1,
    Qr = 0,
    J & 6)
        throw Error(R(327));
    var n = e.callbackNode;
    if (mt() && e.callbackNode !== n)
        return null;
    var i = ii(e, e === Y5 ? J5 : 0);
    if (i === 0)
        return null;
    if (i & 30 || i & e.expiredLanes || t)
        t = vi(e, i);
    else {
        t = i;
        var o = J;
        J |= 2;
        var a = w4();
        (Y5 !== e || J5 !== t) && (S1 = null,
        It = P5() + 500,
        L2(e, t));
        do
            try {
                z6();
                break
            } catch (c) {
                C4(e, c)
            }
        while (!0);
        Rl(),
        Si.current = a,
        J = o,
        k5 !== null ? t = 0 : (Y5 = null,
        J5 = 0,
        t = V5)
    }
    if (t !== 0) {
        if (t === 2 && (o = da(e),
        o !== 0 && (i = o,
        t = Ba(e, o))),
        t === 1)
            throw n = Fn,
            L2(e, 0),
            B1(e, i),
            ve(e, P5()),
            n;
        if (t === 6)
            B1(e, i);
        else {
            if (o = e.current.alternate,
            !(i & 30) && !G6(o) && (t = vi(e, i),
            t === 2 && (a = da(e),
            a !== 0 && (i = a,
            t = Ba(e, a))),
            t === 1))
                throw n = Fn,
                L2(e, 0),
                B1(e, i),
                ve(e, P5()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = i,
            t) {
            case 0:
            case 1:
                throw Error(R(345));
            case 2:
                m2(e, ye, S1);
                break;
            case 3:
                if (B1(e, i),
                (i & 130023424) === i && (t = Bl + 500 - P5(),
                10 < t)) {
                    if (ii(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & i) !== i) {
                        fe(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Sa(m2.bind(null, e, ye, S1), t);
                    break
                }
                m2(e, ye, S1);
                break;
            case 4:
                if (B1(e, i),
                (i & 4194240) === i)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < i; ) {
                    var l = 31 - t1(i);
                    a = 1 << l,
                    l = t[l],
                    l > o && (o = l),
                    i &= ~a
                }
                if (i = o,
                i = P5() - i,
                i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * V6(i / 1960)) - i,
                10 < i) {
                    e.timeoutHandle = Sa(m2.bind(null, e, ye, S1), i);
                    break
                }
                m2(e, ye, S1);
                break;
            case 5:
                m2(e, ye, S1);
                break;
            default:
                throw Error(R(329))
            }
        }
    }
    return ve(e, P5()),
    e.callbackNode === n ? N4.bind(null, e) : null
}
function Ba(e, t) {
    var n = yn;
    return e.current.memoizedState.isDehydrated && (L2(e, t).flags |= 256),
    e = vi(e, t),
    e !== 2 && (t = ye,
    ye = n,
    t !== null && ja(t)),
    e
}
function ja(e) {
    ye === null ? ye = e : ye.push.apply(ye, e)
}
function G6(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var i = 0; i < n.length; i++) {
                    var o = n[i]
                      , a = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!i1(a(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function B1(e, t) {
    for (t &= ~Ml,
    t &= ~Bi,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - t1(t)
          , i = 1 << n;
        e[n] = -1,
        t &= ~i
    }
}
function ru(e) {
    if (J & 6)
        throw Error(R(327));
    mt();
    var t = ii(e, 0);
    if (!(t & 1))
        return ve(e, P5()),
        null;
    var n = vi(e, t);
    if (e.tag !== 0 && n === 2) {
        var i = da(e);
        i !== 0 && (t = i,
        n = Ba(e, i))
    }
    if (n === 1)
        throw n = Fn,
        L2(e, 0),
        B1(e, t),
        ve(e, P5()),
        n;
    if (n === 6)
        throw Error(R(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    m2(e, ye, S1),
    ve(e, P5()),
    null
}
function jl(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t)
    } finally {
        J = n,
        J === 0 && (It = P5() + 500,
        Ui && t2())
    }
}
function P2(e) {
    V1 !== null && V1.tag === 0 && !(J & 6) && mt();
    var t = J;
    J |= 1;
    var n = ze.transition
      , i = o5;
    try {
        if (ze.transition = null,
        o5 = 1,
        e)
            return e()
    } finally {
        o5 = i,
        ze.transition = n,
        J = t,
        !(J & 6) && t2()
    }
}
function Vl() {
    _e = lt.current,
    p5(lt)
}
function L2(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    h6(n)),
    k5 !== null)
        for (n = k5.return; n !== null; ) {
            var i = n;
            switch (Il(i),
            i.tag) {
            case 1:
                i = i.type.childContextTypes,
                i != null && ui();
                break;
            case 3:
                St(),
                p5(Le),
                p5(ue),
                Cl();
                break;
            case 5:
                Nl(i);
                break;
            case 4:
                St();
                break;
            case 13:
                p5(h5);
                break;
            case 19:
                p5(h5);
                break;
            case 10:
                Al(i.type._context);
                break;
            case 22:
            case 23:
                Vl()
            }
            n = n.return
        }
    if (Y5 = e,
    k5 = e = Q1(e.current, null),
    J5 = _e = t,
    V5 = 0,
    Fn = null,
    Ml = Bi = _2 = 0,
    ye = yn = null,
    E2 !== null) {
        for (t = 0; t < E2.length; t++)
            if (n = E2[t],
            i = n.interleaved,
            i !== null) {
                n.interleaved = null;
                var o = i.next
                  , a = n.pending;
                if (a !== null) {
                    var l = a.next;
                    a.next = o,
                    i.next = l
                }
                n.pending = i
            }
        E2 = null
    }
    return e
}
function C4(e, t) {
    do {
        var n = k5;
        try {
            if (Rl(),
            Kr.current = hi,
            Ei) {
                for (var i = S5.memoizedState; i !== null; ) {
                    var o = i.queue;
                    o !== null && (o.pending = null),
                    i = i.next
                }
                Ei = !1
            }
            if (A2 = 0,
            z5 = B5 = S5 = null,
            mn = !1,
            xn = 0,
            $l.current = null,
            n === null || n.return === null) {
                V5 = 1,
                Fn = t,
                k5 = null;
                break
            }
            e: {
                var a = e
                  , l = n.return
                  , c = n
                  , u = t;
                if (t = J5,
                c.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var p = u
                      , L = c
                      , h = L.tag;
                    if (!(L.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var S = L.alternate;
                        S ? (L.updateQueue = S.updateQueue,
                        L.memoizedState = S.memoizedState,
                        L.lanes = S.lanes) : (L.updateQueue = null,
                        L.memoizedState = null)
                    }
                    var s = zs(l);
                    if (s !== null) {
                        s.flags &= -257,
                        Ks(s, l, c, a, t),
                        s.mode & 1 && bs(a, p, t),
                        t = s,
                        u = p;
                        var d = t.updateQueue;
                        if (d === null) {
                            var y = new Set;
                            y.add(u),
                            t.updateQueue = y
                        } else
                            d.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            bs(a, p, t),
                            Gl();
                            break e
                        }
                        u = Error(R(426))
                    }
                } else if (y5 && c.mode & 1) {
                    var j = zs(l);
                    if (j !== null) {
                        !(j.flags & 65536) && (j.flags |= 256),
                        Ks(j, l, c, a, t),
                        vl(Lt(u, c));
                        break e
                    }
                }
                a = u = Lt(u, c),
                V5 !== 4 && (V5 = 2),
                yn === null ? yn = [a] : yn.push(a),
                a = l;
                do {
                    switch (a.tag) {
                    case 3:
                        a.flags |= 65536,
                        t &= -t,
                        a.lanes |= t;
                        var m = p4(a, u, t);
                        $s(a, m);
                        break e;
                    case 1:
                        c = u;
                        var f = a.type
                          , g = a.stateNode;
                        if (!(a.flags & 128) && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Y1 === null || !Y1.has(g)))) {
                            a.flags |= 65536,
                            t &= -t,
                            a.lanes |= t;
                            var O = m4(a, c, t);
                            $s(a, O);
                            break e
                        }
                    }
                    a = a.return
                } while (a !== null)
            }
            x4(n)
        } catch (C) {
            t = C,
            k5 === n && n !== null && (k5 = n = n.return);
            continue
        }
        break
    } while (!0)
}
function w4() {
    var e = Si.current;
    return Si.current = hi,
    e === null ? hi : e
}
function Gl() {
    (V5 === 0 || V5 === 3 || V5 === 2) && (V5 = 4),
    Y5 === null || !(_2 & 268435455) && !(Bi & 268435455) || B1(Y5, J5)
}
function vi(e, t) {
    var n = J;
    J |= 2;
    var i = w4();
    (Y5 !== e || J5 !== t) && (S1 = null,
    L2(e, t));
    do
        try {
            b6();
            break
        } catch (o) {
            C4(e, o)
        }
    while (!0);
    if (Rl(),
    J = n,
    Si.current = i,
    k5 !== null)
        throw Error(R(261));
    return Y5 = null,
    J5 = 0,
    V5
}
function b6() {
    for (; k5 !== null; )
        k4(k5)
}
function z6() {
    for (; k5 !== null && !gf(); )
        k4(k5)
}
function k4(e) {
    var t = U4(e.alternate, e, _e);
    e.memoizedProps = e.pendingProps,
    t === null ? x4(e) : k5 = t,
    $l.current = null
}
function x4(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = $6(n, t),
            n !== null) {
                n.flags &= 32767,
                k5 = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                V5 = 6,
                k5 = null;
                return
            }
        } else if (n = F6(n, t, _e),
        n !== null) {
            k5 = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            k5 = t;
            return
        }
        k5 = t = e
    } while (t !== null);
    V5 === 0 && (V5 = 5)
}
function m2(e, t, n) {
    var i = o5
      , o = ze.transition;
    try {
        ze.transition = null,
        o5 = 1,
        K6(e, t, n, i)
    } finally {
        ze.transition = o,
        o5 = i
    }
    return null
}
function K6(e, t, n, i) {
    do
        mt();
    while (V1 !== null);
    if (J & 6)
        throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(R(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (Af(e, a),
    e === Y5 && (k5 = Y5 = null,
    J5 = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0,
    F4(ri, function() {
        return mt(),
        null
    })),
    a = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || a) {
        a = ze.transition,
        ze.transition = null;
        var l = o5;
        o5 = 1;
        var c = J;
        J |= 4,
        $l.current = null,
        B6(e, n),
        P4(n, e),
        d6(Ea),
        oi = !!ya,
        Ea = ya = null,
        e.current = n,
        j6(n),
        yf(),
        J = c,
        o5 = l,
        ze.transition = a
    } else
        e.current = n;
    if (kr && (kr = !1,
    V1 = e,
    Ii = o),
    a = e.pendingLanes,
    a === 0 && (Y1 = null),
    Sf(n.stateNode),
    ve(e, P5()),
    t !== null)
        for (i = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            i(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Li)
        throw Li = !1,
        e = $a,
        $a = null,
        e;
    return Ii & 1 && e.tag !== 0 && mt(),
    a = e.pendingLanes,
    a & 1 ? e === Ma ? En++ : (En = 0,
    Ma = e) : En = 0,
    t2(),
    null
}
function mt() {
    if (V1 !== null) {
        var e = pc(Ii)
          , t = ze.transition
          , n = o5;
        try {
            if (ze.transition = null,
            o5 = 16 > e ? 16 : e,
            V1 === null)
                var i = !1;
            else {
                if (e = V1,
                V1 = null,
                Ii = 0,
                J & 6)
                    throw Error(R(331));
                var o = J;
                for (J |= 4,
                w = e.current; w !== null; ) {
                    var a = w
                      , l = a.child;
                    if (w.flags & 16) {
                        var c = a.deletions;
                        if (c !== null) {
                            for (var u = 0; u < c.length; u++) {
                                var p = c[u];
                                for (w = p; w !== null; ) {
                                    var L = w;
                                    switch (L.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        gn(8, L, a)
                                    }
                                    var h = L.child;
                                    if (h !== null)
                                        h.return = L,
                                        w = h;
                                    else
                                        for (; w !== null; ) {
                                            L = w;
                                            var S = L.sibling
                                              , s = L.return;
                                            if (R4(L),
                                            L === p) {
                                                w = null;
                                                break
                                            }
                                            if (S !== null) {
                                                S.return = s,
                                                w = S;
                                                break
                                            }
                                            w = s
                                        }
                                }
                            }
                            var d = a.alternate;
                            if (d !== null) {
                                var y = d.child;
                                if (y !== null) {
                                    d.child = null;
                                    do {
                                        var j = y.sibling;
                                        y.sibling = null,
                                        y = j
                                    } while (y !== null)
                                }
                            }
                            w = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && l !== null)
                        l.return = a,
                        w = l;
                    else
                        e: for (; w !== null; ) {
                            if (a = w,
                            a.flags & 2048)
                                switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    gn(9, a, a.return)
                                }
                            var m = a.sibling;
                            if (m !== null) {
                                m.return = a.return,
                                w = m;
                                break e
                            }
                            w = a.return
                        }
                }
                var f = e.current;
                for (w = f; w !== null; ) {
                    l = w;
                    var g = l.child;
                    if (l.subtreeFlags & 2064 && g !== null)
                        g.return = l,
                        w = g;
                    else
                        e: for (l = f; w !== null; ) {
                            if (c = w,
                            c.flags & 2048)
                                try {
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Mi(9, c)
                                    }
                                } catch (C) {
                                    O5(c, c.return, C)
                                }
                            if (c === l) {
                                w = null;
                                break e
                            }
                            var O = c.sibling;
                            if (O !== null) {
                                O.return = c.return,
                                w = O;
                                break e
                            }
                            w = c.return
                        }
                }
                if (J = o,
                t2(),
                p1 && typeof p1.onPostCommitFiberRoot == "function")
                    try {
                        p1.onPostCommitFiberRoot(Ci, e)
                    } catch {}
                i = !0
            }
            return i
        } finally {
            o5 = n,
            ze.transition = t
        }
    }
    return !1
}
function iu(e, t, n) {
    t = Lt(n, t),
    t = p4(e, t, 1),
    e = H1(e, t, 1),
    t = fe(),
    e !== null && (Hn(e, 1, t),
    ve(e, t))
}
function O5(e, t, n) {
    if (e.tag === 3)
        iu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                iu(t, e, n);
                break
            } else if (t.tag === 1) {
                var i = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Y1 === null || !Y1.has(i))) {
                    e = Lt(n, e),
                    e = m4(t, e, 1),
                    t = H1(t, e, 1),
                    e = fe(),
                    t !== null && (Hn(t, 1, e),
                    ve(t, e));
                    break
                }
            }
            t = t.return
        }
}
function H6(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t),
    t = fe(),
    e.pingedLanes |= e.suspendedLanes & n,
    Y5 === e && (J5 & n) === n && (V5 === 4 || V5 === 3 && (J5 & 130023424) === J5 && 500 > P5() - Bl ? L2(e, 0) : Ml |= n),
    ve(e, t)
}
function D4(e, t) {
    t === 0 && (e.mode & 1 ? (t = vr,
    vr <<= 1,
    !(vr & 130023424) && (vr = 4194304)) : t = 1);
    var n = fe();
    e = T1(e, t),
    e !== null && (Hn(e, t, n),
    ve(e, n))
}
function Y6(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    D4(e, n)
}
function W6(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var i = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        i = e.stateNode;
        break;
    default:
        throw Error(R(314))
    }
    i !== null && i.delete(t),
    D4(e, n)
}
var U4;
U4 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Le.current)
            Ee = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ee = !1,
                U6(e, t, n);
            Ee = !!(e.flags & 131072)
        }
    else
        Ee = !1,
        y5 && t.flags & 1048576 && Bc(t, fi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var i = t.type;
        Yr(e, t),
        e = t.pendingProps;
        var o = yt(t, ue.current);
        pt(t, n),
        o = kl(null, t, i, e, o, n);
        var a = xl();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ie(i) ? (a = !0,
        ci(t)) : a = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Pl(t),
        o.updater = $i,
        t.stateNode = o,
        o._reactInternals = t,
        _a(t, i, e, n),
        t = Na(null, t, i, !0, a, n)) : (t.tag = 0,
        y5 && a && Ll(t),
        de(null, t, o, n),
        t = t.child),
        t;
    case 16:
        i = t.elementType;
        e: {
            switch (Yr(e, t),
            e = t.pendingProps,
            o = i._init,
            i = o(i._payload),
            t.type = i,
            o = t.tag = q6(i),
            e = Ze(i, e),
            o) {
            case 0:
                t = Ta(null, t, i, e, n);
                break e;
            case 1:
                t = Ws(null, t, i, e, n);
                break e;
            case 11:
                t = Hs(null, t, i, e, n);
                break e;
            case 14:
                t = Ys(null, t, i, Ze(i.type, e), n);
                break e
            }
            throw Error(R(306, i, ""))
        }
        return t;
    case 0:
        return i = t.type,
        o = t.pendingProps,
        o = t.elementType === i ? o : Ze(i, o),
        Ta(e, t, i, o, n);
    case 1:
        return i = t.type,
        o = t.pendingProps,
        o = t.elementType === i ? o : Ze(i, o),
        Ws(e, t, i, o, n);
    case 3:
        e: {
            if (h4(t),
            e === null)
                throw Error(R(387));
            i = t.pendingProps,
            a = t.memoizedState,
            o = a.element,
            Kc(e, t),
            gi(t, i, null, n);
            var l = t.memoizedState;
            if (i = l.element,
            a.isDehydrated)
                if (a = {
                    element: i,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = a,
                t.memoizedState = a,
                t.flags & 256) {
                    o = Lt(Error(R(423)), t),
                    t = Qs(e, t, i, n, o);
                    break e
                } else if (i !== o) {
                    o = Lt(Error(R(424)), t),
                    t = Qs(e, t, i, n, o);
                    break e
                } else
                    for (Pe = K1(t.stateNode.containerInfo.firstChild),
                    Ne = t,
                    y5 = !0,
                    e1 = null,
                    n = bc(t, null, i, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Et(),
                i === o) {
                    t = N1(e, t, n);
                    break e
                }
                de(e, t, i, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Hc(t),
        e === null && Oa(t),
        i = t.type,
        o = t.pendingProps,
        a = e !== null ? e.memoizedProps : null,
        l = o.children,
        ha(i, o) ? l = null : a !== null && ha(i, a) && (t.flags |= 32),
        E4(e, t),
        de(e, t, l, n),
        t.child;
    case 6:
        return e === null && Oa(t),
        null;
    case 13:
        return S4(e, t, n);
    case 4:
        return Tl(t, t.stateNode.containerInfo),
        i = t.pendingProps,
        e === null ? t.child = ht(t, null, i, n) : de(e, t, i, n),
        t.child;
    case 11:
        return i = t.type,
        o = t.pendingProps,
        o = t.elementType === i ? o : Ze(i, o),
        Hs(e, t, i, o, n);
    case 7:
        return de(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return de(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return de(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (i = t.type._context,
            o = t.pendingProps,
            a = t.memoizedProps,
            l = o.value,
            c5(pi, i._currentValue),
            i._currentValue = l,
            a !== null)
                if (i1(a.value, l)) {
                    if (a.children === o.children && !Le.current) {
                        t = N1(e, t, n);
                        break e
                    }
                } else
                    for (a = t.child,
                    a !== null && (a.return = t); a !== null; ) {
                        var c = a.dependencies;
                        if (c !== null) {
                            l = a.child;
                            for (var u = c.firstContext; u !== null; ) {
                                if (u.context === i) {
                                    if (a.tag === 1) {
                                        u = A1(-1, n & -n),
                                        u.tag = 2;
                                        var p = a.updateQueue;
                                        if (p !== null) {
                                            p = p.shared;
                                            var L = p.pending;
                                            L === null ? u.next = u : (u.next = L.next,
                                            L.next = u),
                                            p.pending = u
                                        }
                                    }
                                    a.lanes |= n,
                                    u = a.alternate,
                                    u !== null && (u.lanes |= n),
                                    Ra(a.return, n, t),
                                    c.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (a.tag === 10)
                            l = a.type === t.type ? null : a.child;
                        else if (a.tag === 18) {
                            if (l = a.return,
                            l === null)
                                throw Error(R(341));
                            l.lanes |= n,
                            c = l.alternate,
                            c !== null && (c.lanes |= n),
                            Ra(l, n, t),
                            l = a.sibling
                        } else
                            l = a.child;
                        if (l !== null)
                            l.return = a;
                        else
                            for (l = a; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (a = l.sibling,
                                a !== null) {
                                    a.return = l.return,
                                    l = a;
                                    break
                                }
                                l = l.return
                            }
                        a = l
                    }
            de(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        i = t.pendingProps.children,
        pt(t, n),
        o = Ke(o),
        i = i(o),
        t.flags |= 1,
        de(e, t, i, n),
        t.child;
    case 14:
        return i = t.type,
        o = Ze(i, t.pendingProps),
        o = Ze(i.type, o),
        Ys(e, t, i, o, n);
    case 15:
        return g4(e, t, t.type, t.pendingProps, n);
    case 17:
        return i = t.type,
        o = t.pendingProps,
        o = t.elementType === i ? o : Ze(i, o),
        Yr(e, t),
        t.tag = 1,
        Ie(i) ? (e = !0,
        ci(t)) : e = !1,
        pt(t, n),
        f4(t, i, o),
        _a(t, i, o, n),
        Na(null, t, i, !0, e, n);
    case 19:
        return L4(e, t, n);
    case 22:
        return y4(e, t, n)
    }
    throw Error(R(156, t.tag))
}
;
function F4(e, t) {
    return uc(e, t)
}
function Q6(e, t, n, i) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = i,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ve(e, t, n, i) {
    return new Q6(e,t,n,i)
}
function bl(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function q6(e) {
    if (typeof e == "function")
        return bl(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === sl)
            return 11;
        if (e === ul)
            return 14
    }
    return 2
}
function Q1(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ve(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function qr(e, t, n, i, o, a) {
    var l = 2;
    if (i = e,
    typeof e == "function")
        bl(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case X2:
            return I2(n.children, o, a, t);
        case ll:
            l = 8,
            o |= 8;
            break;
        case qo:
            return e = Ve(12, n, t, o | 2),
            e.elementType = qo,
            e.lanes = a,
            e;
        case Xo:
            return e = Ve(13, n, t, o),
            e.elementType = Xo,
            e.lanes = a,
            e;
        case Zo:
            return e = Ve(19, n, t, o),
            e.elementType = Zo,
            e.lanes = a,
            e;
        case Hu:
            return ji(n, o, a, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case zu:
                    l = 10;
                    break e;
                case Ku:
                    l = 9;
                    break e;
                case sl:
                    l = 11;
                    break e;
                case ul:
                    l = 14;
                    break e;
                case F1:
                    l = 16,
                    i = null;
                    break e
                }
            throw Error(R(130, e == null ? e : typeof e, ""))
        }
    return t = Ve(l, n, t, o),
    t.elementType = e,
    t.type = i,
    t.lanes = a,
    t
}
function I2(e, t, n, i) {
    return e = Ve(7, e, i, t),
    e.lanes = n,
    e
}
function ji(e, t, n, i) {
    return e = Ve(22, e, i, t),
    e.elementType = Hu,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function zo(e, t, n) {
    return e = Ve(6, e, null, t),
    e.lanes = n,
    e
}
function Ko(e, t, n) {
    return t = Ve(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function X6(e, t, n, i, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ao(0),
    this.expirationTimes = Ao(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ao(0),
    this.identifierPrefix = i,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function zl(e, t, n, i, o, a, l, c, u) {
    return e = new X6(e,t,n,c,u),
    t === 1 ? (t = 1,
    a === !0 && (t |= 8)) : t = 0,
    a = Ve(3, null, null, t),
    e.current = a,
    a.stateNode = e,
    a.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Pl(a),
    e
}
function Z6(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: q2,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function $4(e) {
    if (!e)
        return Z1;
    e = e._reactInternals;
    e: {
        if (U2(e) !== e || e.tag !== 1)
            throw Error(R(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ie(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ie(n))
            return $c(e, n, t)
    }
    return t
}
function M4(e, t, n, i, o, a, l, c, u) {
    return e = zl(n, i, !0, e, o, a, l, c, u),
    e.context = $4(null),
    n = e.current,
    i = fe(),
    o = W1(n),
    a = A1(i, o),
    a.callback = t ?? null,
    H1(n, a, o),
    e.current.lanes = o,
    Hn(e, o, i),
    ve(e, i),
    e
}
function Vi(e, t, n, i) {
    var o = t.current
      , a = fe()
      , l = W1(o);
    return n = $4(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = A1(a, l),
    t.payload = {
        element: e
    },
    i = i === void 0 ? null : i,
    i !== null && (t.callback = i),
    e = H1(o, t, l),
    e !== null && (n1(e, o, l, a),
    zr(e, o, l)),
    l
}
function Oi(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ou(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Kl(e, t) {
    ou(e, t),
    (e = e.alternate) && ou(e, t)
}
function J6() {
    return null
}
var B4 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Hl(e) {
    this._internalRoot = e
}
Gi.prototype.render = Hl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(R(409));
    Vi(e, t, null, null)
}
;
Gi.prototype.unmount = Hl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        P2(function() {
            Vi(null, e, null, null)
        }),
        t[P1] = null
    }
}
;
function Gi(e) {
    this._internalRoot = e
}
Gi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = yc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < M1.length && t !== 0 && t < M1[n].priority; n++)
            ;
        M1.splice(n, 0, e),
        n === 0 && hc(e)
    }
}
;
function Yl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function bi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function au() {}
function e8(e, t, n, i, o) {
    if (o) {
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var p = Oi(l);
                a.call(p)
            }
        }
        var l = M4(t, i, e, 0, null, !1, !1, "", au);
        return e._reactRootContainer = l,
        e[P1] = l.current,
        Tn(e.nodeType === 8 ? e.parentNode : e),
        P2(),
        l
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof i == "function") {
        var c = i;
        i = function() {
            var p = Oi(u);
            c.call(p)
        }
    }
    var u = zl(e, 0, !1, null, null, !1, !1, "", au);
    return e._reactRootContainer = u,
    e[P1] = u.current,
    Tn(e.nodeType === 8 ? e.parentNode : e),
    P2(function() {
        Vi(t, u, n, i)
    }),
    u
}
function zi(e, t, n, i, o) {
    var a = n._reactRootContainer;
    if (a) {
        var l = a;
        if (typeof o == "function") {
            var c = o;
            o = function() {
                var u = Oi(l);
                c.call(u)
            }
        }
        Vi(t, l, e, o)
    } else
        l = e8(n, t, e, o, i);
    return Oi(l)
}
mc = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = an(t.pendingLanes);
            n !== 0 && (fl(t, n | 1),
            ve(t, P5()),
            !(J & 6) && (It = P5() + 500,
            t2()))
        }
        break;
    case 13:
        P2(function() {
            var i = T1(e, 1);
            if (i !== null) {
                var o = fe();
                n1(i, e, 1, o)
            }
        }),
        Kl(e, 1)
    }
}
;
pl = function(e) {
    if (e.tag === 13) {
        var t = T1(e, 134217728);
        if (t !== null) {
            var n = fe();
            n1(t, e, 134217728, n)
        }
        Kl(e, 134217728)
    }
}
;
gc = function(e) {
    if (e.tag === 13) {
        var t = W1(e)
          , n = T1(e, t);
        if (n !== null) {
            var i = fe();
            n1(n, e, t, i)
        }
        Kl(e, t)
    }
}
;
yc = function() {
    return o5
}
;
Ec = function(e, t) {
    var n = o5;
    try {
        return o5 = e,
        t()
    } finally {
        o5 = n
    }
}
;
sa = function(e, t, n) {
    switch (t) {
    case "input":
        if (ta(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var i = n[t];
                if (i !== e && i.form === e.form) {
                    var o = Di(i);
                    if (!o)
                        throw Error(R(90));
                    Wu(i),
                    ta(i, o)
                }
            }
        }
        break;
    case "textarea":
        qu(e, n);
        break;
    case "select":
        t = n.value,
        t != null && ut(e, !!n.multiple, t, !1)
    }
}
;
rc = jl;
ic = P2;
var t8 = {
    usingClientEntryPoint: !1,
    Events: [Wn, tt, Di, tc, nc, jl]
}
  , Jt = {
    findFiberByHostInstance: y2,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , n8 = {
    bundleType: Jt.bundleType,
    version: Jt.version,
    rendererPackageName: Jt.rendererPackageName,
    rendererConfig: Jt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: k1.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = lc(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Jt.findFiberByHostInstance || J6,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xr.isDisabled && xr.supportsFiber)
        try {
            Ci = xr.inject(n8),
            p1 = xr
        } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t8;
De.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Yl(t))
        throw Error(R(200));
    return Z6(e, t, null, n)
}
;
De.createRoot = function(e, t) {
    if (!Yl(e))
        throw Error(R(299));
    var n = !1
      , i = ""
      , o = B4;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = zl(e, 1, !1, null, null, n, !1, i, o),
    e[P1] = t.current,
    Tn(e.nodeType === 8 ? e.parentNode : e),
    new Hl(t)
}
;
De.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","),
        Error(R(268, e)));
    return e = lc(t),
    e = e === null ? null : e.stateNode,
    e
}
;
De.flushSync = function(e) {
    return P2(e)
}
;
De.hydrate = function(e, t, n) {
    if (!bi(t))
        throw Error(R(200));
    return zi(null, e, t, !0, n)
}
;
De.hydrateRoot = function(e, t, n) {
    if (!Yl(e))
        throw Error(R(405));
    var i = n != null && n.hydratedSources || null
      , o = !1
      , a = ""
      , l = B4;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = M4(t, null, e, 1, n ?? null, o, !1, a, l),
    e[P1] = t.current,
    Tn(e),
    i)
        for (e = 0; e < i.length; e++)
            n = i[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Gi(t)
}
;
De.render = function(e, t, n) {
    if (!bi(t))
        throw Error(R(200));
    return zi(null, e, t, !1, n)
}
;
De.unmountComponentAtNode = function(e) {
    if (!bi(e))
        throw Error(R(40));
    return e._reactRootContainer ? (P2(function() {
        zi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[P1] = null
        })
    }),
    !0) : !1
}
;
De.unstable_batchedUpdates = jl;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
    if (!bi(n))
        throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(R(38));
    return zi(e, t, n, !1, i)
}
;
De.version = "18.3.1-next-f1338f8080-20240426";
function j4() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j4)
        } catch (e) {
            console.error(e)
        }
}
j4(),
ju.exports = De;
var r8 = ju.exports, i8, lu = r8;
i8 = lu.createRoot,
lu.hydrateRoot;
class qn extends Error {
    constructor(n, i) {
        super(i.error.message);
        yr(this, "status");
        yr(this, "envelope");
        yr(this, "unknownAfterTransportLoss", !1);
        this.status = n,
        this.envelope = i,
        this.name = "NomerokApiError"
    }
}
async function o8(e) {
    let t;
    try {
        t = await e.json()
    } catch {
        throw new TypeError("Не удалось получить ответ сервера. Проверьте соединение и повторите попытку.")
    }
    if (!e.ok) {
        const n = t;
        throw !(n != null && n.error) || typeof n.error.code != "string" || typeof n.error.message != "string" ? new TypeError("Сервер временно недоступен. Повторите попытку.") : new qn(e.status,n)
    }
    return t
}
const V4 = 2e4;
class Va extends TypeError {
    constructor() {
        super("Сервер не ответил вовремя. Проверьте соединение и повторите попытку."),
        this.name = "NomerokRequestTimeoutError"
    }
}
async function G4(e, t, n, i=Date.now() + V4) {
    n == null || n.throwIfAborted();
    const o = i - Date.now();
    if (o <= 0)
        throw new Va;
    const a = new AbortController;
    let l = !1;
    const c = () => a.abort(n == null ? void 0 : n.reason);
    n == null || n.addEventListener("abort", c, {
        once: !0
    });
    const u = setTimeout( () => {
        l = !0,
        a.abort()
    }
    , o);
    try {
        const p = await fetch(e, {
            ...t,
            signal: a.signal
        });
        return await o8(p)
    } catch (p) {
        throw l ? new Va : p
    } finally {
        clearTimeout(u),
        n == null || n.removeEventListener("abort", c)
    }
}
async function F(e, t, n) {
    return G4(new URL(t,e), {
        headers: {
            accept: "application/json"
        },
        cache: "no-store",
        credentials: "same-origin"
    }, n)
}
function M5(e, t) {
    const n = new URLSearchParams;
    for (const [o,a] of Object.entries(t))
        a !== void 0 && n.set(o, a);
    const i = n.toString();
    return i === "" ? e : `${e}?${i}`
}
function Dr() {
    return globalThis.crypto.randomUUID()
}
function a8(e) {
    return {
        live: t => F(e, "/health/live", t),
        ready: t => F(e, "/health/ready", t)
    }
}
function l8(e, t={}) {
    let n = null
      , i = null
      , o = 0
      , a = null;
    const l = () => {
        var d, y;
        const s = "nomerok-guest-bootstrap-v2:" + new URL(e).origin;
        try {
            const j = (d = globalThis.localStorage) == null ? void 0 : d.getItem(s);
            if (j && /^[0-9a-f-]{36}$/i.test(j))
                return j;
            a ?? (a = Dr()),
            (y = globalThis.localStorage) == null || y.setItem(s, a)
        } catch {
            a ?? (a = Dr())
        }
        return a ?? (a = Dr())
    }
      , c = s => (typeof s.csrfToken == "string" && (n = s.csrfToken),
    s)
      , u = async (s, d, y, j=Dr(), m, f=!0) => {
        var D;
        const g = n
          , O = Date.now() + V4
          , C = async () => {
            const k = {
                accept: "application/json",
                "content-type": "application/json",
                "idempotency-key": j,
                "x-nomerok-client": "web-v1"
            };
            return g !== null && (k["x-nomerok-csrf"] = g),
            G4(new URL(d,e), {
                method: s,
                headers: k,
                body: JSON.stringify(y),
                cache: "no-store",
                credentials: "same-origin"
            }, m, O)
        }
        ;
        try {
            return await C()
        } catch (k) {
            if (!f || !(k instanceof TypeError) || k instanceof Va || (m == null ? void 0 : m.aborted) === !0 || ((D = t.canRetryTransport) == null ? void 0 : D.call(t)) === !1)
                throw k;
            try {
                return await C()
            } catch (U) {
                throw U instanceof qn && (U.unknownAfterTransportLoss = !0),
                U
            }
        }
    }
      , p = async (s={}, d={}) => {
        var g;
        const y = s.continueAsGuest !== !0 && s.challengeResponse === void 0 && d.idempotencyKey === void 0 && d.signal === void 0;
        if (y && i !== null)
            return i;
        const j = s.continueAsGuest === !0 ? ++o : o;
        s.continueAsGuest === !0 && (i = null);
        const m = () => u("POST", "/api/v1/guest/bootstrap", s, d.idempotencyKey ?? l(), d.signal).then(O => j === o ? c(O) : O)
          , f = y && ((g = globalThis.navigator) != null && g.locks) ? globalThis.navigator.locks.request("nomerok-guest-bootstrap", m) : m();
        if (!y)
            return f;
        i = f;
        try {
            return await f
        } finally {
            i === f && (i = null)
        }
    }
      , L = async s => {
        const d = o
          , y = await F(e, "/api/v1/auth/context", s);
        return d === o && (n = y.csrfToken),
        y
    }
      , h = async (s, d={}) => {
        const y = ++o;
        i = null;
        const j = await u("POST", s ? "/api/v1/auth/logout-all" : "/api/v1/auth/logout", {}, d.idempotencyKey, d.signal);
        if (y !== o)
            throw new Error("Identity changed during logout");
        return n = null,
        i = null,
        j
    }
    ;
    return {
        ...{
            trades: {
                quote: (s, d) => u("POST", "/api/v1/trades/quote", s, d),
                send: (s, d) => u("POST", "/api/v1/trades/send", s, d),
                acceptQuote: (s, d, y) => u("POST", `/api/v1/trades/${encodeURIComponent(s)}/accept-quote`, {
                    expectedVersion: d
                }, y),
                accept: (s, d) => u("POST", "/api/v1/trades/accept", s, d),
                terminal: (s, d, y, j) => u("POST", `/api/v1/trades/${encodeURIComponent(s)}/${y}`, {
                    expectedVersion: d
                }, j),
                feed: (s={}, d) => F(e, `/api/v1/messages/trades?${new URLSearchParams(Object.entries(s).filter( ([,y]) => y !== void 0)).toString()}`, d),
                seen: (s, d) => u("POST", "/api/v1/messages/trades/seen", {
                    eventIds: s
                }, d),
                preferences: (s, d) => u("POST", "/api/v1/trades/preferences", {
                    receiveOffers: s
                }, d),
                block: (s, d, y) => u("POST", "/api/v1/trades/block", {
                    playerId: s,
                    blocked: d
                }, y)
            },
            collector: {
                formats: s => F(e, "/api/v1/plate-formats", s),
                bulkQuote: (s, d) => u("POST", "/api/v1/collection/bulk-sell/quote", s, d),
                bulkAccept: (s, d) => u("POST", "/api/v1/collection/bulk-sell/accept", s, d),
                state: s => F(e, "/api/v1/collector/state", s),
                profile: (s, d) => F(e, `/api/v1/players/${encodeURIComponent(s)}`, d),
                collection: (s, d={}, y) => F(e, `/api/v1/players/${encodeURIComponent(s)}/collection?${new URLSearchParams(Object.entries(d).filter( ([,j]) => j !== void 0)).toString()}`, y),
                favorite: (s, d) => u("POST", "/api/v1/collection/favorite", s, d),
                valuation: (s, d) => F(e, `/api/v1/plates/${encodeURIComponent(s)}/valuation`, d)
            },
            frames: {
                catalog: s => F(e, "/api/v1/frames", s),
                state: s => F(e, "/api/v1/frames/state", s),
                purchase: (s, d) => u("POST", "/api/v1/frames/purchase", {
                    frameId: s
                }, d),
                receipt: s => F(e, `/api/v1/frames/receipts/${encodeURIComponent(s)}`),
                assign: (s, d) => u("POST", "/api/v1/frames/assign", s, d)
            },
            privacyContext: s => F(e, "/api/v1/privacy/context", s),
            legalDocument: (s, d, y) => F(e, `/api/v1/legal/${encodeURIComponent(s)}/${encodeURIComponent(d)}`, y),
            legal: {
                state: s => F(e, "/api/v1/legal/consents", s),
                confirm: (s, d) => u("POST", "/api/v1/legal/consents/confirm", {
                    documents: s
                }, d),
                revoke: s => u("POST", "/api/v1/legal/consents/revoke", {
                    kind: "personal-data-consent"
                }, s)
            },
            legalCatalog: s => F(e, "/api/v1/legal", s),
            ...a8(e),
            rewards: {
                state: s => F(e, "/api/v1/rewards", s),
                task: (s, d, y) => u("POST", `/api/v1/rewards/tasks/${encodeURIComponent(s)}/claim`, d, y),
                completion: (s, d) => u("POST", "/api/v1/rewards/completion/claim", s, d),
                recovery: (s, d) => u("POST", "/api/v1/rewards/recovery/claim", s, d),
                notifications: s => F(e, "/api/v1/rewards/notifications", s),
                seen: (s, d) => u("POST", `/api/v1/rewards/notifications/${encodeURIComponent(s)}/seen`, {}, d)
            },
            referrals: (s={}, d) => F(e, M5("/api/v1/referrals", s), d),
            resolveReferral: (s, d) => F(e, M5("/api/v1/referrals/resolve", {
                code: s
            }), d),
            history: (s={}, d) => F(e, M5("/api/v1/history", s), d),
            tops: (s, d) => F(e, M5("/api/v1/tops", s), d),
            topMe: (s, d) => F(e, M5("/api/v1/tops/me", s), d),
            m9: {
                catalog: s => F(e, "/api/v1/payments/catalog", s),
                createOrder: (s, d) => u("POST", "/api/v1/payments/orders", s, d),
                order: (s, d) => F(e, `/api/v1/payments/orders/${encodeURIComponent(s)}`, d),
                orders: (s={}, d) => F(e, M5("/api/v1/payments/orders", s), d),
                orderRequest: (s, d) => F(e, `/api/v1/payments/order-requests/${encodeURIComponent(s)}`, d),
                security: s => F(e, "/api/v1/account/security", s),
                nicknameAvailability: (s, d) => F(e, "/api/v1/account/nickname-availability?nickname=" + encodeURIComponent(s), d),
                emailPolicy: s => F(e, "/api/v1/account/email-policy", s),
                recoveryOptions: s => F(e, "/api/v1/account/recovery/options", s),
                securityResult: (s, d) => F(e, "/api/v1/account/results/" + encodeURIComponent(s) + "/" + encodeURIComponent(d)),
                challengeResult: (s, d) => d ? u("POST", "/api/v1/account/challenge/result", {
                    ...d,
                    key: s
                }, void 0, void 0, !1) : F(e, "/api/v1/account/challenge-results/" + encodeURIComponent(s)),
                telegramCancel: (s, d) => u("POST", "/api/v1/account/telegram/cancel", {
                    challengeId: s
                }, d),
                recentPassword: s => u("POST", "/api/v1/account/recent-password", s, void 0, void 0, !1),
                setEmail: (s, d) => u("POST", "/api/v1/account/email", s, d),
                unlink: (s, d, y) => u("POST", `/api/v1/account/${s}/unlink`, {
                    proof: d
                }, y),
                emailRecovery: s => u("POST", "/api/v1/account/recovery/email", {
                    email: s
                }, void 0, void 0, !1),
                challengePreview: s => u("POST", "/api/v1/account/challenge/preview", s, void 0, void 0, !1),
                challengeComplete: (s, d) => u("POST", "/api/v1/account/challenge/complete", s, d, void 0, !1),
                telegramBegin: (s, d) => u("POST", "/api/v1/account/telegram/begin", {
                    proof: s
                }, d, void 0, !1),
                telegramProgress: (s, d) => F(e, `/api/v1/account/telegram/${encodeURIComponent(s)}`, d),
                telegramFinish: (s, d) => u("POST", "/api/v1/account/telegram/finish", {
                    challengeId: s
                }, d),
                collection: (s={}, d) => F(e, M5("/api/v1/read/collection", s), d),
                marketplace: (s={}, d) => F(e, M5("/api/v1/read/marketplace", s), d),
                auctions: (s={}, d) => F(e, M5("/api/v1/read/auctions", s), d),
                referrals: (s={}, d) => F(e, M5("/api/v1/read/referrals", s), d),
                plateHistory: (s, d) => F(e, M5("/api/v1/read/plate-history", s), d),
                notices: (s={}, d) => F(e, M5("/api/v1/notices", s), d),
                notice: (s, d) => F(e, `/api/v1/notices/${encodeURIComponent(s)}`, d),
                onlineNotices: (s={}, d) => F(e, M5("/api/v1/notices/online", s), d),
                noticeSeen: (s, d) => u("POST", `/api/v1/notices/${encodeURIComponent(s)}/seen`, {}, d)
            },
            bootstrap: async s => {
                const d = o
                  , y = await F(e, "/api/v1/session", s);
                return d === o ? c(y) : y
            }
            ,
            bootstrapGuest: p,
            authContext: L,
            register: async (s, d={}) => {
                const y = ++o
                  , j = await u("POST", "/api/v1/auth/register", s, d.idempotencyKey, d.signal);
                if (y !== o)
                    throw new Error("Identity changed during registration");
                return c(j)
            }
            ,
            login: async (s, d={}) => {
                const y = ++o;
                if (await L(d.signal),
                y !== o)
                    throw new Error("Identity changed during login");
                const j = await u("POST", "/api/v1/auth/login", s, d.idempotencyKey, d.signal);
                if (y !== o)
                    throw new Error("Identity changed during login");
                return c(j)
            }
            ,
            logout: (s={}) => h(!1, s),
            logoutAll: (s={}) => h(!0, s),
            rotateSession: async (s={}) => c(await u("POST", "/api/v1/auth/rotate", {}, s.idempotencyKey, s.signal)),
            changePassword: async (s, d={}) => {
                const y = await u("POST", "/api/v1/auth/password", s, d.idempotencyKey, d.signal, !1);
                return !d.isCurrent || d.isCurrent() ? c(y) : y
            }
            ,
            passwordChangeResult: async (s, d, y= () => !0) => {
                const j = await F(e, "/api/v1/auth/password-results/" + encodeURIComponent(s), d);
                return y() ? c(j) : j
            }
            ,
            closePasswordChange: async (s, d= () => !0) => {
                const y = await u("POST", "/api/v1/auth/password-results/" + encodeURIComponent(s) + "/close", {}, s, void 0, !1);
                return d() ? c(y) : y
            }
            ,
            updateProfile: (s, d={}) => u("PATCH", "/api/v1/profile", s, d.idempotencyKey, d.signal),
            sessions: s => F(e, "/api/v1/sessions", s),
            revokeSession: (s, d={}) => u("DELETE", `/api/v1/sessions/${encodeURIComponent(s)}`, {}, d.idempotencyKey, d.signal),
            gameConfig: s => F(e, "/api/v1/game/config", s),
            gameState: s => F(e, "/api/v1/game/state", s),
            gameR2Config: s => F(e, "/api/v1/game/config", s),
            gameR2State: s => F(e, "/api/v1/game/state", s),
            selectR2Region: (s, d={}) => u("POST", "/api/v1/game/region", s, d.idempotencyKey, d.signal),
            spinR2: (s, d={}) => u("POST", "/api/v1/game/spin", s, d.idempotencyKey, d.signal),
            autoCycleR2: (s, d={}) => u("POST", "/api/v1/game/auto/cycle", s, d.idempotencyKey, d.signal, !1),
            saveR2: (s, d={}) => u("POST", "/api/v1/game/save", s, d.idempotencyKey, d.signal),
            instantSellDraftR2: (s, d={}) => u("POST", "/api/v1/game/instant-sell", s, d.idempotencyKey, d.signal),
            collectionR2: (s={}, d) => F(e, M5("/api/v1/game/collection", s), d),
            expandCollectionR2: (s={}) => u("POST", "/api/v1/game/collection/expand", {}, s.idempotencyKey, s.signal),
            openOwnedEditR2: (s, d, y={}) => u("POST", `/api/v1/game/plates/${encodeURIComponent(s)}/edit`, d, y.idempotencyKey, y.signal),
            exitOwnedEditR2: (s, d={}) => u("POST", "/api/v1/game/owned-edit/exit", s, d.idempotencyKey, d.signal),
            discardOwnedEditReplacementR2: (s, d={}) => u("POST", "/api/v1/game/owned-edit/discard", s, d.idempotencyKey, d.signal),
            liquidatePlateR2: (s, d, y={}) => u("POST", `/api/v1/game/plates/${encodeURIComponent(s)}/instant-sell`, d, y.idempotencyKey, y.signal),
            recoverLegacyPartialR2: (s, d={}) => u("POST", "/api/v1/game/legacy-partial/recover", s, d.idempotencyKey, d.signal),
            discardLegacyPartialR2: (s, d={}) => u("POST", "/api/v1/game/legacy-partial/discard", s, d.idempotencyKey, d.signal),
            selectRegion: (s, d={}) => u("POST", "/api/v1/game/region", s, d.idempotencyKey, d.signal),
            spin: (s, d={}) => u("POST", "/api/v1/game/spin", s, d.idempotencyKey, d.signal),
            saveDraft: (s, d={}) => u("POST", "/api/v1/game/save", s, d.idempotencyKey, d.signal),
            saveSavedDraft: (s, d={}) => u("POST", "/api/v1/game/saved-draft/save", s, d.idempotencyKey, d.signal),
            resumeSavedDraft: (s, d={}) => u("POST", "/api/v1/game/saved-draft/resume", s, d.idempotencyKey, d.signal),
            discardSavedDraft: (s, d={}) => u("POST", "/api/v1/game/saved-draft/discard", s, d.idempotencyKey, d.signal),
            autoCycle: (s, d={}) => u("POST", "/api/v1/game/auto/cycle", s, d.idempotencyKey, d.signal, !1),
            purchaseDoubleWithGameRub: (s={}, d={}) => u("POST", "/api/v1/features/double/game-purchase", s, d.idempotencyKey, d.signal),
            confirmLocalFeatureReceipt: (s, d={}) => u("POST", "/api/v1/features/local-receipts/confirm", s, d.idempotencyKey, d.signal),
            instantSell: (s, d, y={}) => u("POST", `/api/v1/game/plates/${encodeURIComponent(s)}/instant-sell`, d, y.idempotencyKey, y.signal),
            marketBrowse: (s={}, d) => F(e, M5("/api/v1/marketplace/listings", s), d),
            marketPublicationPreview: (s, d) => F(e, M5("/api/v1/marketplace/publication-preview", s), d),
            marketOwn: s => F(e, "/api/v1/marketplace/own", s),
            auctions: (s={}, d) => F(e, M5("/api/v1/auctions", s), d),
            auction: (s, d) => F(e, `/api/v1/auctions/${encodeURIComponent(s)}`, d),
            auctionBids: (s, d={}, y) => F(e, M5(`/api/v1/auctions/${encodeURIComponent(s)}/bids`, d), y),
            auctionCreationPreview: (s, d) => u("POST", "/api/v1/auctions/creation-preview", s, void 0, d),
            createAuction: (s, d={}) => u("POST", "/api/v1/auctions", s, d.idempotencyKey, d.signal),
            bidAuction: (s, d, y={}) => u("POST", `/api/v1/auctions/${encodeURIComponent(s)}/bids`, d, y.idempotencyKey, y.signal),
            cancelAuction: (s, d, y={}) => u("POST", `/api/v1/auctions/${encodeURIComponent(s)}/cancel`, d, y.idempotencyKey, y.signal),
            marketHistory: (s={}, d) => F(e, M5("/api/v1/marketplace/history", s), d),
            marketList: (s, d={}) => u("POST", "/api/v1/marketplace/listings", s, d.idempotencyKey, d.signal),
            marketBuy: (s, d, y={}) => u("POST", `/api/v1/marketplace/listings/${encodeURIComponent(s)}/buy`, d, y.idempotencyKey, y.signal),
            marketDelist: (s, d, y={}) => u("POST", `/api/v1/marketplace/listings/${encodeURIComponent(s)}/delist`, d, y.idempotencyKey, y.signal),
            setCsrfToken(s) {
                n = s
            }
        },
        forSession(s) {
            const d = l8(e, t);
            return d.setCsrfToken(s.csrfToken),
            d
        }
    }
}
function s8(e) {
    return D5(e) && !Ae(e) && !Zn(e) && Symbol.asyncIterator in e
}
function Ae(e) {
    return Array.isArray(e)
}
function b4(e) {
    return typeof e == "bigint"
}
function Xn(e) {
    return typeof e == "boolean"
}
function Wl(e) {
    return e instanceof globalThis.Date
}
function u8(e) {
    return typeof e == "function"
}
function c8(e) {
    return D5(e) && !Ae(e) && !Zn(e) && Symbol.iterator in e
}
function d8(e) {
    return e === null
}
function E1(e) {
    return typeof e == "number"
}
function D5(e) {
    return typeof e == "object" && e !== null
}
function z4(e) {
    return e instanceof globalThis.RegExp
}
function C5(e) {
    return typeof e == "string"
}
function f8(e) {
    return typeof e == "symbol"
}
function Zn(e) {
    return e instanceof globalThis.Uint8Array
}
function w5(e) {
    return e === void 0
}
function p8(e) {
    return e.map(t => Ri(t))
}
function m8(e) {
    return new Date(e.getTime())
}
function g8(e) {
    return new Uint8Array(e)
}
function y8(e) {
    return new RegExp(e.source,e.flags)
}
function E8(e) {
    const t = {};
    for (const n of Object.getOwnPropertyNames(e))
        t[n] = Ri(e[n]);
    for (const n of Object.getOwnPropertySymbols(e))
        t[n] = Ri(e[n]);
    return t
}
function Ri(e) {
    return Ae(e) ? p8(e) : Wl(e) ? m8(e) : Zn(e) ? g8(e) : z4(e) ? y8(e) : D5(e) ? E8(e) : e
}
function we(e) {
    return Ri(e)
}
function Ql(e, t) {
    return we(t === void 0 ? e : {
        ...t,
        ...e
    })
}
function h8(e) {
    return e !== null && typeof e == "object"
}
function S8(e) {
    return globalThis.Array.isArray(e) && !globalThis.ArrayBuffer.isView(e)
}
function L8(e) {
    return e === void 0
}
function I8(e) {
    return typeof e == "number"
}
var Ga;
(function(e) {
    e.InstanceMode = "default",
    e.ExactOptionalPropertyTypes = !1,
    e.AllowArrayObject = !1,
    e.AllowNaN = !1,
    e.AllowNullVoid = !1;
    function t(l, c) {
        return e.ExactOptionalPropertyTypes ? c in l : l[c] !== void 0
    }
    e.IsExactOptionalProperty = t;
    function n(l) {
        const c = h8(l);
        return e.AllowArrayObject ? c : c && !S8(l)
    }
    e.IsObjectLike = n;
    function i(l) {
        return n(l) && !(l instanceof Date) && !(l instanceof Uint8Array)
    }
    e.IsRecordLike = i;
    function o(l) {
        return e.AllowNaN ? I8(l) : Number.isFinite(l)
    }
    e.IsNumberLike = o;
    function a(l) {
        const c = L8(l);
        return e.AllowNullVoid ? c || l === null : c
    }
    e.IsVoidLike = a
}
)(Ga || (Ga = {}));
function v8(e) {
    return globalThis.Object.freeze(e).map(t => Ai(t))
}
function O8(e) {
    const t = {};
    for (const n of Object.getOwnPropertyNames(e))
        t[n] = Ai(e[n]);
    for (const n of Object.getOwnPropertySymbols(e))
        t[n] = Ai(e[n]);
    return globalThis.Object.freeze(t)
}
function Ai(e) {
    return Ae(e) ? v8(e) : Wl(e) ? e : Zn(e) ? e : z4(e) ? e : D5(e) ? O8(e) : e
}
function P(e, t) {
    const n = t !== void 0 ? {
        ...t,
        ...e
    } : e;
    switch (Ga.InstanceMode) {
    case "freeze":
        return Ai(n);
    case "clone":
        return we(n);
    default:
        return n
    }
}
class F2 extends Error {
    constructor(t) {
        super(t)
    }
}
const Ge = Symbol.for("TypeBox.Transform")
  , Jn = Symbol.for("TypeBox.Readonly")
  , x1 = Symbol.for("TypeBox.Optional")
  , Ki = Symbol.for("TypeBox.Hint")
  , M = Symbol.for("TypeBox.Kind");
function ql(e) {
    return D5(e) && e[Jn] === "Readonly"
}
function n2(e) {
    return D5(e) && e[x1] === "Optional"
}
function K4(e) {
    return q(e, "Any")
}
function H4(e) {
    return q(e, "Argument")
}
function wt(e) {
    return q(e, "Array")
}
function Hi(e) {
    return q(e, "AsyncIterator")
}
function Yi(e) {
    return q(e, "BigInt")
}
function er(e) {
    return q(e, "Boolean")
}
function kt(e) {
    return q(e, "Computed")
}
function xt(e) {
    return q(e, "Constructor")
}
function R8(e) {
    return q(e, "Date")
}
function Dt(e) {
    return q(e, "Function")
}
function Ut(e) {
    return q(e, "Integer")
}
function We(e) {
    return q(e, "Intersect")
}
function Wi(e) {
    return q(e, "Iterator")
}
function q(e, t) {
    return D5(e) && M in e && e[M] === t
}
function Y4(e) {
    return Xn(e) || E1(e) || C5(e)
}
function $2(e) {
    return q(e, "Literal")
}
function M2(e) {
    return q(e, "MappedKey")
}
function Fe(e) {
    return q(e, "MappedResult")
}
function tr(e) {
    return q(e, "Never")
}
function A8(e) {
    return q(e, "Not")
}
function Xl(e) {
    return q(e, "Null")
}
function Ft(e) {
    return q(e, "Number")
}
function u1(e) {
    return q(e, "Object")
}
function Qi(e) {
    return q(e, "Promise")
}
function qi(e) {
    return q(e, "Record")
}
function Oe(e) {
    return q(e, "Ref")
}
function W4(e) {
    return q(e, "RegExp")
}
function nr(e) {
    return q(e, "String")
}
function Zl(e) {
    return q(e, "Symbol")
}
function B2(e) {
    return q(e, "TemplateLiteral")
}
function _8(e) {
    return q(e, "This")
}
function Xi(e) {
    return D5(e) && Ge in e
}
function j2(e) {
    return q(e, "Tuple")
}
function Jl(e) {
    return q(e, "Undefined")
}
function Q5(e) {
    return q(e, "Union")
}
function P8(e) {
    return q(e, "Uint8Array")
}
function T8(e) {
    return q(e, "Unknown")
}
function N8(e) {
    return q(e, "Unsafe")
}
function C8(e) {
    return q(e, "Void")
}
function w8(e) {
    return D5(e) && M in e && C5(e[M])
}
function q1(e) {
    return K4(e) || H4(e) || wt(e) || er(e) || Yi(e) || Hi(e) || kt(e) || xt(e) || R8(e) || Dt(e) || Ut(e) || We(e) || Wi(e) || $2(e) || M2(e) || Fe(e) || tr(e) || A8(e) || Xl(e) || Ft(e) || u1(e) || Qi(e) || qi(e) || Oe(e) || W4(e) || nr(e) || Zl(e) || B2(e) || _8(e) || j2(e) || Jl(e) || Q5(e) || P8(e) || T8(e) || N8(e) || C8(e) || w8(e)
}
const k8 = ["Argument", "Any", "Array", "AsyncIterator", "BigInt", "Boolean", "Computed", "Constructor", "Date", "Enum", "Function", "Integer", "Intersect", "Iterator", "Literal", "MappedKey", "MappedResult", "Not", "Null", "Number", "Object", "Promise", "Record", "Ref", "RegExp", "String", "Symbol", "TemplateLiteral", "This", "Tuple", "Undefined", "Union", "Uint8Array", "Unknown", "Void"];
function Q4(e) {
    try {
        return new RegExp(e),
        !0
    } catch {
        return !1
    }
}
function e3(e) {
    if (!C5(e))
        return !1;
    for (let t = 0; t < e.length; t++) {
        const n = e.charCodeAt(t);
        if (n >= 7 && n <= 13 || n === 27 || n === 127)
            return !1
    }
    return !0
}
function q4(e) {
    return t3(e) || ne(e)
}
function en(e) {
    return w5(e) || b4(e)
}
function u5(e) {
    return w5(e) || E1(e)
}
function t3(e) {
    return w5(e) || Xn(e)
}
function a5(e) {
    return w5(e) || C5(e)
}
function x8(e) {
    return w5(e) || C5(e) && e3(e) && Q4(e)
}
function D8(e) {
    return w5(e) || C5(e) && e3(e)
}
function X4(e) {
    return w5(e) || ne(e)
}
function _i(e) {
    return D5(e) && e[x1] === "Optional"
}
function o1(e) {
    return X(e, "Any") && a5(e.$id)
}
function U8(e) {
    return X(e, "Argument") && E1(e.index)
}
function V2(e) {
    return X(e, "Array") && e.type === "array" && a5(e.$id) && ne(e.items) && u5(e.minItems) && u5(e.maxItems) && t3(e.uniqueItems) && X4(e.contains) && u5(e.minContains) && u5(e.maxContains)
}
function n3(e) {
    return X(e, "AsyncIterator") && e.type === "AsyncIterator" && a5(e.$id) && ne(e.items)
}
function Zi(e) {
    return X(e, "BigInt") && e.type === "bigint" && a5(e.$id) && en(e.exclusiveMaximum) && en(e.exclusiveMinimum) && en(e.maximum) && en(e.minimum) && en(e.multipleOf)
}
function G2(e) {
    return X(e, "Boolean") && e.type === "boolean" && a5(e.$id)
}
function F8(e) {
    return X(e, "Computed") && C5(e.target) && Ae(e.parameters) && e.parameters.every(t => ne(t))
}
function Ji(e) {
    return X(e, "Constructor") && e.type === "Constructor" && a5(e.$id) && Ae(e.parameters) && e.parameters.every(t => ne(t)) && ne(e.returns)
}
function eo(e) {
    return X(e, "Date") && e.type === "Date" && a5(e.$id) && u5(e.exclusiveMaximumTimestamp) && u5(e.exclusiveMinimumTimestamp) && u5(e.maximumTimestamp) && u5(e.minimumTimestamp) && u5(e.multipleOfTimestamp)
}
function to(e) {
    return X(e, "Function") && e.type === "Function" && a5(e.$id) && Ae(e.parameters) && e.parameters.every(t => ne(t)) && ne(e.returns)
}
function D1(e) {
    return X(e, "Integer") && e.type === "integer" && a5(e.$id) && u5(e.exclusiveMaximum) && u5(e.exclusiveMinimum) && u5(e.maximum) && u5(e.minimum) && u5(e.multipleOf)
}
function Z4(e) {
    return D5(e) && Object.entries(e).every( ([t,n]) => e3(t) && ne(n))
}
function b2(e) {
    return X(e, "Intersect") && !(C5(e.type) && e.type !== "object") && Ae(e.allOf) && e.allOf.every(t => ne(t) && !G8(t)) && a5(e.type) && (t3(e.unevaluatedProperties) || X4(e.unevaluatedProperties)) && a5(e.$id)
}
function r3(e) {
    return X(e, "Iterator") && e.type === "Iterator" && a5(e.$id) && ne(e.items)
}
function X(e, t) {
    return D5(e) && M in e && e[M] === t
}
function J4(e) {
    return r2(e) && C5(e.const)
}
function ed(e) {
    return r2(e) && E1(e.const)
}
function td(e) {
    return r2(e) && Xn(e.const)
}
function r2(e) {
    return X(e, "Literal") && a5(e.$id) && $8(e.const)
}
function $8(e) {
    return Xn(e) || E1(e) || C5(e)
}
function M8(e) {
    return X(e, "MappedKey") && Ae(e.keys) && e.keys.every(t => E1(t) || C5(t))
}
function B8(e) {
    return X(e, "MappedResult") && Z4(e.properties)
}
function i2(e) {
    return X(e, "Never") && D5(e.not) && Object.getOwnPropertyNames(e.not).length === 0
}
function vt(e) {
    return X(e, "Not") && ne(e.not)
}
function i3(e) {
    return X(e, "Null") && e.type === "null" && a5(e.$id)
}
function he(e) {
    return X(e, "Number") && e.type === "number" && a5(e.$id) && u5(e.exclusiveMaximum) && u5(e.exclusiveMinimum) && u5(e.maximum) && u5(e.minimum) && u5(e.multipleOf)
}
function v5(e) {
    return X(e, "Object") && e.type === "object" && a5(e.$id) && Z4(e.properties) && q4(e.additionalProperties) && u5(e.minProperties) && u5(e.maxProperties)
}
function o3(e) {
    return X(e, "Promise") && e.type === "Promise" && a5(e.$id) && ne(e.item)
}
function te(e) {
    return X(e, "Record") && e.type === "object" && a5(e.$id) && q4(e.additionalProperties) && D5(e.patternProperties) && (t => {
        const n = Object.getOwnPropertyNames(t.patternProperties);
        return n.length === 1 && Q4(n[0]) && D5(t.patternProperties) && ne(t.patternProperties[n[0]])
    }
    )(e)
}
function j8(e) {
    return X(e, "Ref") && a5(e.$id) && C5(e.$ref)
}
function $n(e) {
    return X(e, "RegExp") && a5(e.$id) && C5(e.source) && C5(e.flags) && u5(e.maxLength) && u5(e.minLength)
}
function a1(e) {
    return X(e, "String") && e.type === "string" && a5(e.$id) && u5(e.minLength) && u5(e.maxLength) && x8(e.pattern) && D8(e.format)
}
function Mn(e) {
    return X(e, "Symbol") && e.type === "symbol" && a5(e.$id)
}
function Bn(e) {
    return X(e, "TemplateLiteral") && e.type === "string" && C5(e.pattern) && e.pattern[0] === "^" && e.pattern[e.pattern.length - 1] === "$"
}
function V8(e) {
    return X(e, "This") && a5(e.$id) && C5(e.$ref)
}
function G8(e) {
    return D5(e) && Ge in e
}
function no(e) {
    return X(e, "Tuple") && e.type === "array" && a5(e.$id) && E1(e.minItems) && E1(e.maxItems) && e.minItems === e.maxItems && (w5(e.items) && w5(e.additionalItems) && e.minItems === 0 || Ae(e.items) && e.items.every(t => ne(t)))
}
function T2(e) {
    return X(e, "Undefined") && e.type === "undefined" && a5(e.$id)
}
function C1(e) {
    return X(e, "Union") && a5(e.$id) && D5(e) && Ae(e.anyOf) && e.anyOf.every(t => ne(t))
}
function rr(e) {
    return X(e, "Uint8Array") && e.type === "Uint8Array" && a5(e.$id) && u5(e.minByteLength) && u5(e.maxByteLength)
}
function l1(e) {
    return X(e, "Unknown") && a5(e.$id)
}
function b8(e) {
    return X(e, "Unsafe")
}
function ro(e) {
    return X(e, "Void") && e.type === "void" && a5(e.$id)
}
function z8(e) {
    return D5(e) && M in e && C5(e[M]) && !k8.includes(e[M])
}
function ne(e) {
    return D5(e) && (o1(e) || U8(e) || V2(e) || G2(e) || Zi(e) || n3(e) || F8(e) || Ji(e) || eo(e) || to(e) || D1(e) || b2(e) || r3(e) || r2(e) || M8(e) || B8(e) || i2(e) || vt(e) || i3(e) || he(e) || v5(e) || o3(e) || te(e) || j8(e) || $n(e) || a1(e) || Mn(e) || Bn(e) || V8(e) || no(e) || T2(e) || C1(e) || rr(e) || l1(e) || b8(e) || ro(e) || z8(e))
}
const K8 = "(true|false)"
  , Xr = "(0|[1-9][0-9]*)"
  , nd = "(.*)"
  , H8 = "(?!.*)"
  , Ot = `^${Xr}$`
  , Rt = `^${nd}$`
  , Y8 = `^${H8}$`;
function W8(e, t) {
    return e.includes(t)
}
function Q8(e) {
    return [...new Set(e)]
}
function q8(e, t) {
    return e.filter(n => t.includes(n))
}
function X8(e, t) {
    return e.reduce( (n, i) => q8(n, i), t)
}
function Z8(e) {
    return e.length === 1 ? e[0] : e.length > 1 ? X8(e.slice(1), e[0]) : []
}
function J8(e) {
    const t = [];
    for (const n of e)
        t.push(...n);
    return t
}
function jn(e) {
    return P({
        [M]: "Any"
    }, e)
}
function a3(e, t) {
    return P({
        [M]: "Array",
        type: "array",
        items: e
    }, t)
}
function ep(e) {
    return P({
        [M]: "Argument",
        index: e
    })
}
function l3(e, t) {
    return P({
        [M]: "AsyncIterator",
        type: "AsyncIterator",
        items: e
    }, t)
}
function G5(e, t, n) {
    return P({
        [M]: "Computed",
        target: e,
        parameters: t
    }, n)
}
function tp(e, t) {
    const {[t]: n, ...i} = e;
    return i
}
function ke(e, t) {
    return t.reduce( (n, i) => tp(n, i), e)
}
function U5(e) {
    return P({
        [M]: "Never",
        not: {}
    }, e)
}
function re(e) {
    return P({
        [M]: "MappedResult",
        properties: e
    })
}
function s3(e, t, n) {
    return P({
        [M]: "Constructor",
        type: "Constructor",
        parameters: e,
        returns: t
    }, n)
}
function ir(e, t, n) {
    return P({
        [M]: "Function",
        type: "Function",
        parameters: e,
        returns: t
    }, n)
}
function ba(e, t) {
    return P({
        [M]: "Union",
        anyOf: e
    }, t)
}
function np(e) {
    return e.some(t => n2(t))
}
function su(e) {
    return e.map(t => n2(t) ? rp(t) : t)
}
function rp(e) {
    return ke(e, [x1])
}
function ip(e, t) {
    return np(e) ? l2(ba(su(e), t)) : ba(su(e), t)
}
function $t(e, t) {
    return e.length === 1 ? P(e[0], t) : e.length === 0 ? U5(t) : ip(e, t)
}
function ie(e, t) {
    return e.length === 0 ? U5(t) : e.length === 1 ? P(e[0], t) : ba(e, t)
}
class uu extends F2 {
}
function op(e) {
    return e.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")")
}
function u3(e, t, n) {
    return e[t] === n && e.charCodeAt(t - 1) !== 92
}
function R1(e, t) {
    return u3(e, t, "(")
}
function Vn(e, t) {
    return u3(e, t, ")")
}
function rd(e, t) {
    return u3(e, t, "|")
}
function ap(e) {
    if (!(R1(e, 0) && Vn(e, e.length - 1)))
        return !1;
    let t = 0;
    for (let n = 0; n < e.length; n++)
        if (R1(e, n) && (t += 1),
        Vn(e, n) && (t -= 1),
        t === 0 && n !== e.length - 1)
            return !1;
    return !0
}
function lp(e) {
    return e.slice(1, e.length - 1)
}
function sp(e) {
    let t = 0;
    for (let n = 0; n < e.length; n++)
        if (R1(e, n) && (t += 1),
        Vn(e, n) && (t -= 1),
        rd(e, n) && t === 0)
            return !0;
    return !1
}
function up(e) {
    for (let t = 0; t < e.length; t++)
        if (R1(e, t))
            return !0;
    return !1
}
function cp(e) {
    let[t,n] = [0, 0];
    const i = [];
    for (let a = 0; a < e.length; a++)
        if (R1(e, a) && (t += 1),
        Vn(e, a) && (t -= 1),
        rd(e, a) && t === 0) {
            const l = e.slice(n, a);
            l.length > 0 && i.push(At(l)),
            n = a + 1
        }
    const o = e.slice(n);
    return o.length > 0 && i.push(At(o)),
    i.length === 0 ? {
        type: "const",
        const: ""
    } : i.length === 1 ? i[0] : {
        type: "or",
        expr: i
    }
}
function dp(e) {
    function t(o, a) {
        if (!R1(o, a))
            throw new uu("TemplateLiteralParser: Index must point to open parens");
        let l = 0;
        for (let c = a; c < o.length; c++)
            if (R1(o, c) && (l += 1),
            Vn(o, c) && (l -= 1),
            l === 0)
                return [a, c];
        throw new uu("TemplateLiteralParser: Unclosed group parens in expression")
    }
    function n(o, a) {
        for (let l = a; l < o.length; l++)
            if (R1(o, l))
                return [a, l];
        return [a, o.length]
    }
    const i = [];
    for (let o = 0; o < e.length; o++)
        if (R1(e, o)) {
            const [a,l] = t(e, o)
              , c = e.slice(a, l + 1);
            i.push(At(c)),
            o = l
        } else {
            const [a,l] = n(e, o)
              , c = e.slice(a, l);
            c.length > 0 && i.push(At(c)),
            o = l - 1
        }
    return i.length === 0 ? {
        type: "const",
        const: ""
    } : i.length === 1 ? i[0] : {
        type: "and",
        expr: i
    }
}
function At(e) {
    return ap(e) ? At(lp(e)) : sp(e) ? cp(e) : up(e) ? dp(e) : {
        type: "const",
        const: op(e)
    }
}
function c3(e) {
    return At(e.slice(1, e.length - 1))
}
class fp extends F2 {
}
function pp(e) {
    return e.type === "or" && e.expr.length === 2 && e.expr[0].type === "const" && e.expr[0].const === "0" && e.expr[1].type === "const" && e.expr[1].const === "[1-9][0-9]*"
}
function mp(e) {
    return e.type === "or" && e.expr.length === 2 && e.expr[0].type === "const" && e.expr[0].const === "true" && e.expr[1].type === "const" && e.expr[1].const === "false"
}
function gp(e) {
    return e.type === "const" && e.const === ".*"
}
function Gn(e) {
    return pp(e) || gp(e) ? !1 : mp(e) ? !0 : e.type === "and" ? e.expr.every(t => Gn(t)) : e.type === "or" ? e.expr.every(t => Gn(t)) : e.type === "const" ? !0 : ( () => {
        throw new fp("Unknown expression type")
    }
    )()
}
function yp(e) {
    const t = c3(e.pattern);
    return Gn(t)
}
class Ep extends F2 {
}
function *id(e) {
    if (e.length === 1)
        return yield*e[0];
    for (const t of e[0])
        for (const n of id(e.slice(1)))
            yield`${t}${n}`
}
function *hp(e) {
    return yield*id(e.expr.map(t => [...io(t)]))
}
function *Sp(e) {
    for (const t of e.expr)
        yield*io(t)
}
function *Lp(e) {
    return yield e.const
}
function *io(e) {
    return e.type === "and" ? yield*hp(e) : e.type === "or" ? yield*Sp(e) : e.type === "const" ? yield*Lp(e) : ( () => {
        throw new Ep("Unknown expression")
    }
    )()
}
function od(e) {
    const t = c3(e.pattern);
    return Gn(t) ? [...io(t)] : []
}
function x5(e, t) {
    return P({
        [M]: "Literal",
        const: e,
        type: typeof e
    }, t)
}
function ad(e) {
    return P({
        [M]: "Boolean",
        type: "boolean"
    }, e)
}
function d3(e) {
    return P({
        [M]: "BigInt",
        type: "bigint"
    }, e)
}
function z2(e) {
    return P({
        [M]: "Number",
        type: "number"
    }, e)
}
function N2(e) {
    return P({
        [M]: "String",
        type: "string"
    }, e)
}
function *Ip(e) {
    const t = e.trim().replace(/"|'/g, "");
    return t === "boolean" ? yield ad() : t === "number" ? yield z2() : t === "bigint" ? yield d3() : t === "string" ? yield N2() : yield( () => {
        const n = t.split("|").map(i => x5(i.trim()));
        return n.length === 0 ? U5() : n.length === 1 ? n[0] : $t(n)
    }
    )()
}
function *vp(e) {
    if (e[1] !== "{") {
        const t = x5("$")
          , n = za(e.slice(1));
        return yield*[t, ...n]
    }
    for (let t = 2; t < e.length; t++)
        if (e[t] === "}") {
            const n = Ip(e.slice(2, t))
              , i = za(e.slice(t + 1));
            return yield*[...n, ...i]
        }
    yield x5(e)
}
function *za(e) {
    for (let t = 0; t < e.length; t++)
        if (e[t] === "$") {
            const n = x5(e.slice(0, t))
              , i = vp(e.slice(t));
            return yield*[n, ...i]
        }
    yield x5(e)
}
function Op(e) {
    return [...za(e)]
}
class Rp extends F2 {
}
function Ap(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
function ld(e, t) {
    return B2(e) ? e.pattern.slice(1, e.pattern.length - 1) : Q5(e) ? `(${e.anyOf.map(n => ld(n, t)).join("|")})` : Ft(e) ? `${t}${Xr}` : Ut(e) ? `${t}${Xr}` : Yi(e) ? `${t}${Xr}` : nr(e) ? `${t}${nd}` : $2(e) ? `${t}${Ap(e.const.toString())}` : er(e) ? `${t}${K8}` : ( () => {
        throw new Rp(`Unexpected Kind '${e[M]}'`)
    }
    )()
}
function cu(e) {
    return `^${e.map(t => ld(t, "")).join("")}$`
}
function Pi(e) {
    const n = od(e).map(i => x5(i));
    return $t(n)
}
function sd(e, t) {
    const n = C5(e) ? cu(Op(e)) : cu(e);
    return P({
        [M]: "TemplateLiteral",
        type: "string",
        pattern: n
    }, t)
}
function _p(e) {
    return od(e).map(n => n.toString())
}
function Pp(e) {
    const t = [];
    for (const n of e)
        t.push(...o2(n));
    return t
}
function Tp(e) {
    return [e.toString()]
}
function o2(e) {
    return [...new Set(B2(e) ? _p(e) : Q5(e) ? Pp(e.anyOf) : $2(e) ? Tp(e.const) : Ft(e) ? ["[number]"] : Ut(e) ? ["[number]"] : [])]
}
function Np(e, t, n) {
    const i = {};
    for (const o of Object.getOwnPropertyNames(t))
        i[o] = oo(e, o2(t[o]), n);
    return i
}
function Cp(e, t, n) {
    return Np(e, t.properties, n)
}
function wp(e, t, n) {
    const i = Cp(e, t, n);
    return re(i)
}
function ud(e, t) {
    return e.map(n => cd(n, t))
}
function kp(e) {
    return e.filter(t => !tr(t))
}
function xp(e, t) {
    return md(kp(ud(e, t)))
}
function Dp(e) {
    return e.some(t => tr(t)) ? [] : e
}
function Up(e, t) {
    return $t(Dp(ud(e, t)))
}
function Fp(e, t) {
    return t in e ? e[t] : t === "[number]" ? $t(e) : U5()
}
function $p(e, t) {
    return t === "[number]" ? e : U5()
}
function Mp(e, t) {
    return t in e ? e[t] : U5()
}
function cd(e, t) {
    return We(e) ? xp(e.allOf, t) : Q5(e) ? Up(e.anyOf, t) : j2(e) ? Fp(e.items ?? [], t) : wt(e) ? $p(e.items, t) : u1(e) ? Mp(e.properties, t) : U5()
}
function dd(e, t) {
    return t.map(n => cd(e, n))
}
function du(e, t) {
    return $t(dd(e, t))
}
function oo(e, t, n) {
    if (Oe(e) || Oe(t)) {
        const i = "Index types using Ref parameters require both Type and Key to be of TSchema";
        if (!q1(e) || !q1(t))
            throw new F2(i);
        return G5("Index", [e, t])
    }
    return Fe(t) ? wp(e, t, n) : M2(t) ? Gp(e, t, n) : P(q1(t) ? du(e, o2(t)) : du(e, t), n)
}
function Bp(e, t, n) {
    return {
        [t]: oo(e, [t], we(n))
    }
}
function jp(e, t, n) {
    return t.reduce( (i, o) => ({
        ...i,
        ...Bp(e, o, n)
    }), {})
}
function Vp(e, t, n) {
    return jp(e, t.keys, n)
}
function Gp(e, t, n) {
    const i = Vp(e, t, n);
    return re(i)
}
function f3(e, t) {
    return P({
        [M]: "Iterator",
        type: "Iterator",
        items: e
    }, t)
}
function bp(e) {
    return globalThis.Object.keys(e).filter(t => !n2(e[t]))
}
function zp(e, t) {
    const n = bp(e)
      , i = n.length > 0 ? {
        [M]: "Object",
        type: "object",
        required: n,
        properties: e
    } : {
        [M]: "Object",
        type: "object",
        properties: e
    };
    return P(i, t)
}
var W5 = zp;
function fd(e, t) {
    return P({
        [M]: "Promise",
        type: "Promise",
        item: e
    }, t)
}
function Kp(e) {
    return P(ke(e, [Jn]))
}
function Hp(e) {
    return P({
        ...e,
        [Jn]: "Readonly"
    })
}
function Yp(e, t) {
    return t === !1 ? Kp(e) : Hp(e)
}
function a2(e, t) {
    const n = t ?? !0;
    return Fe(e) ? qp(e, n) : Yp(e, n)
}
function Wp(e, t) {
    const n = {};
    for (const i of globalThis.Object.getOwnPropertyNames(e))
        n[i] = a2(e[i], t);
    return n
}
function Qp(e, t) {
    return Wp(e.properties, t)
}
function qp(e, t) {
    const n = Qp(e, t);
    return re(n)
}
function Mt(e, t) {
    return P(e.length > 0 ? {
        [M]: "Tuple",
        type: "array",
        items: e,
        additionalItems: !1,
        minItems: e.length,
        maxItems: e.length
    } : {
        [M]: "Tuple",
        type: "array",
        minItems: e.length,
        maxItems: e.length
    }, t)
}
function pd(e, t) {
    return e in t ? $e(e, t[e]) : re(t)
}
function Xp(e) {
    return {
        [e]: x5(e)
    }
}
function Zp(e) {
    const t = {};
    for (const n of e)
        t[n] = x5(n);
    return t
}
function Jp(e, t) {
    return W8(t, e) ? Xp(e) : Zp(t)
}
function e7(e, t) {
    const n = Jp(e, t);
    return pd(e, n)
}
function tn(e, t) {
    return t.map(n => $e(e, n))
}
function t7(e, t) {
    const n = {};
    for (const i of globalThis.Object.getOwnPropertyNames(t))
        n[i] = $e(e, t[i]);
    return n
}
function $e(e, t) {
    const n = {
        ...t
    };
    return n2(t) ? l2($e(e, ke(t, [x1]))) : ql(t) ? a2($e(e, ke(t, [Jn]))) : Fe(t) ? pd(e, t.properties) : M2(t) ? e7(e, t.keys) : xt(t) ? s3(tn(e, t.parameters), $e(e, t.returns), n) : Dt(t) ? ir(tn(e, t.parameters), $e(e, t.returns), n) : Hi(t) ? l3($e(e, t.items), n) : Wi(t) ? f3($e(e, t.items), n) : We(t) ? s2(tn(e, t.allOf), n) : Q5(t) ? ie(tn(e, t.anyOf), n) : j2(t) ? Mt(tn(e, t.items ?? []), n) : u1(t) ? W5(t7(e, t.properties), n) : wt(t) ? a3($e(e, t.items), n) : Qi(t) ? fd($e(e, t.item), n) : t
}
function n7(e, t) {
    const n = {};
    for (const i of e)
        n[i] = $e(i, t);
    return n
}
function r7(e, t, n) {
    const i = q1(e) ? o2(e) : e
      , o = t({
        [M]: "MappedKey",
        keys: i
    })
      , a = n7(i, o);
    return W5(a, n)
}
function i7(e) {
    return P(ke(e, [x1]))
}
function o7(e) {
    return P({
        ...e,
        [x1]: "Optional"
    })
}
function a7(e, t) {
    return t === !1 ? i7(e) : o7(e)
}
function l2(e, t) {
    const n = t ?? !0;
    return Fe(e) ? u7(e, n) : a7(e, n)
}
function l7(e, t) {
    const n = {};
    for (const i of globalThis.Object.getOwnPropertyNames(e))
        n[i] = l2(e[i], t);
    return n
}
function s7(e, t) {
    return l7(e.properties, t)
}
function u7(e, t) {
    const n = s7(e, t);
    return re(n)
}
function Ka(e, t={}) {
    const n = e.every(o => u1(o))
      , i = q1(t.unevaluatedProperties) ? {
        unevaluatedProperties: t.unevaluatedProperties
    } : {};
    return P(t.unevaluatedProperties === !1 || q1(t.unevaluatedProperties) || n ? {
        ...i,
        [M]: "Intersect",
        type: "object",
        allOf: e
    } : {
        ...i,
        [M]: "Intersect",
        allOf: e
    }, t)
}
function c7(e) {
    return e.every(t => n2(t))
}
function d7(e) {
    return ke(e, [x1])
}
function fu(e) {
    return e.map(t => n2(t) ? d7(t) : t)
}
function f7(e, t) {
    return c7(e) ? l2(Ka(fu(e), t)) : Ka(fu(e), t)
}
function md(e, t={}) {
    if (e.length === 1)
        return P(e[0], t);
    if (e.length === 0)
        return U5(t);
    if (e.some(n => Xi(n)))
        throw new Error("Cannot intersect transform types");
    return f7(e, t)
}
function s2(e, t) {
    if (e.length === 1)
        return P(e[0], t);
    if (e.length === 0)
        return U5(t);
    if (e.some(n => Xi(n)))
        throw new Error("Cannot intersect transform types");
    return Ka(e, t)
}
function or(...e) {
    const [t,n] = typeof e[0] == "string" ? [e[0], e[1]] : [e[0].$id, e[1]];
    if (typeof t != "string")
        throw new F2("Ref: $ref must be a string");
    return P({
        [M]: "Ref",
        $ref: t
    }, n)
}
function p7(e, t) {
    return G5("Awaited", [G5(e, t)])
}
function m7(e) {
    return G5("Awaited", [or(e)])
}
function g7(e) {
    return s2(gd(e))
}
function y7(e) {
    return ie(gd(e))
}
function E7(e) {
    return ao(e)
}
function gd(e) {
    return e.map(t => ao(t))
}
function ao(e, t) {
    return P(kt(e) ? p7(e.target, e.parameters) : We(e) ? g7(e.allOf) : Q5(e) ? y7(e.anyOf) : Qi(e) ? E7(e.item) : Oe(e) ? m7(e.$ref) : e, t)
}
function yd(e) {
    const t = [];
    for (const n of e)
        t.push(p3(n));
    return t
}
function h7(e) {
    const t = yd(e);
    return J8(t)
}
function S7(e) {
    const t = yd(e);
    return Z8(t)
}
function L7(e) {
    return e.map( (t, n) => n.toString())
}
function I7(e) {
    return ["[number]"]
}
function v7(e) {
    return globalThis.Object.getOwnPropertyNames(e)
}
function O7(e) {
    return []
}
function p3(e) {
    return We(e) ? h7(e.allOf) : Q5(e) ? S7(e.anyOf) : j2(e) ? L7(e.items ?? []) : wt(e) ? I7(e.items) : u1(e) ? v7(e.properties) : qi(e) ? O7(e.patternProperties) : []
}
function R7(e, t) {
    return G5("KeyOf", [G5(e, t)])
}
function A7(e) {
    return G5("KeyOf", [or(e)])
}
function _7(e, t) {
    const n = p3(e)
      , i = P7(n)
      , o = $t(i);
    return P(o, t)
}
function P7(e) {
    return e.map(t => t === "[number]" ? z2() : x5(t))
}
function m3(e, t) {
    return kt(e) ? R7(e.target, e.parameters) : Oe(e) ? A7(e.$ref) : Fe(e) ? C7(e, t) : _7(e, t)
}
function T7(e, t) {
    const n = {};
    for (const i of globalThis.Object.getOwnPropertyNames(e))
        n[i] = m3(e[i], we(t));
    return n
}
function N7(e, t) {
    return T7(e.properties, t)
}
function C7(e, t) {
    const n = N7(e, t);
    return re(n)
}
function w7(e) {
    const t = [];
    for (const n of e)
        t.push(...p3(n));
    return Q8(t)
}
function k7(e) {
    return e.filter(t => !tr(t))
}
function x7(e, t) {
    const n = [];
    for (const i of e)
        n.push(...dd(i, [t]));
    return k7(n)
}
function D7(e, t) {
    const n = {};
    for (const i of t)
        n[i] = md(x7(e, i));
    return n
}
function U7(e, t) {
    const n = w7(e)
      , i = D7(e, n);
    return W5(i, t)
}
function Ed(e) {
    return P({
        [M]: "Date",
        type: "Date"
    }, e)
}
function hd(e) {
    return P({
        [M]: "Null",
        type: "null"
    }, e)
}
function Sd(e) {
    return P({
        [M]: "Symbol",
        type: "symbol"
    }, e)
}
function Ld(e) {
    return P({
        [M]: "Undefined",
        type: "undefined"
    }, e)
}
function Id(e) {
    return P({
        [M]: "Uint8Array",
        type: "Uint8Array"
    }, e)
}
function lo(e) {
    return P({
        [M]: "Unknown"
    }, e)
}
function F7(e) {
    return e.map(t => g3(t, !1))
}
function $7(e) {
    const t = {};
    for (const n of globalThis.Object.getOwnPropertyNames(e))
        t[n] = a2(g3(e[n], !1));
    return t
}
function Ur(e, t) {
    return t === !0 ? e : a2(e)
}
function g3(e, t) {
    return s8(e) || c8(e) ? Ur(jn(), t) : Ae(e) ? a2(Mt(F7(e))) : Zn(e) ? Id() : Wl(e) ? Ed() : D5(e) ? Ur(W5($7(e)), t) : u8(e) ? Ur(ir([], lo()), t) : w5(e) ? Ld() : d8(e) ? hd() : f8(e) ? Sd() : b4(e) ? d3() : E1(e) || Xn(e) || C5(e) ? x5(e) : W5({})
}
function M7(e, t) {
    return P(g3(e, !0), t)
}
function B7(e, t) {
    return xt(e) ? Mt(e.parameters, t) : U5(t)
}
function j7(e, t) {
    if (w5(e))
        throw new Error("Enum undefined or empty");
    const n = globalThis.Object.getOwnPropertyNames(e).filter(a => isNaN(a)).map(a => e[a])
      , o = [...new Set(n)].map(a => x5(a));
    return ie(o, {
        ...t,
        [Ki]: "Enum"
    })
}
class V7 extends F2 {
}
var E;
(function(e) {
    e[e.Union = 0] = "Union",
    e[e.True = 1] = "True",
    e[e.False = 2] = "False"
}
)(E || (E = {}));
function Ye(e) {
    return e === E.False ? e : E.True
}
function Bt(e) {
    throw new V7(e)
}
function F5(e) {
    return i2(e) || b2(e) || C1(e) || l1(e) || o1(e)
}
function $5(e, t) {
    return i2(t) ? Rd() : b2(t) ? so(e, t) : C1(t) ? E3(e, t) : l1(t) ? Td() : o1(t) ? y3() : Bt("StructuralRight")
}
function y3(e, t) {
    return E.True
}
function G7(e, t) {
    return b2(t) ? so(e, t) : C1(t) && t.anyOf.some(n => o1(n) || l1(n)) ? E.True : C1(t) ? E.Union : l1(t) || o1(t) ? E.True : E.Union
}
function b7(e, t) {
    return l1(e) ? E.False : o1(e) ? E.Union : i2(e) ? E.True : E.False
}
function z7(e, t) {
    return v5(t) && uo(t) ? E.True : F5(t) ? $5(e, t) : V2(t) ? Ye(i5(e.items, t.items)) : E.False
}
function K7(e, t) {
    return F5(t) ? $5(e, t) : n3(t) ? Ye(i5(e.items, t.items)) : E.False
}
function H7(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : Zi(t) ? E.True : E.False
}
function vd(e, t) {
    return td(e) || G2(e) ? E.True : E.False
}
function Y7(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : G2(t) ? E.True : E.False
}
function W7(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : Ji(t) ? e.parameters.length > t.parameters.length ? E.False : e.parameters.every( (n, i) => Ye(i5(t.parameters[i], n)) === E.True) ? Ye(i5(e.returns, t.returns)) : E.False : E.False
}
function Q7(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : eo(t) ? E.True : E.False
}
function q7(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : to(t) ? e.parameters.length > t.parameters.length ? E.False : e.parameters.every( (n, i) => Ye(i5(t.parameters[i], n)) === E.True) ? Ye(i5(e.returns, t.returns)) : E.False : E.False
}
function Od(e, t) {
    return r2(e) && E1(e.const) || he(e) || D1(e) ? E.True : E.False
}
function X7(e, t) {
    return D1(t) || he(t) ? E.True : F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : E.False
}
function so(e, t) {
    return t.allOf.every(n => i5(e, n) === E.True) ? E.True : E.False
}
function Z7(e, t) {
    return e.allOf.some(n => i5(n, t) === E.True) ? E.True : E.False
}
function J7(e, t) {
    return F5(t) ? $5(e, t) : r3(t) ? Ye(i5(e.items, t.items)) : E.False
}
function e9(e, t) {
    return r2(t) && t.const === e.const ? E.True : F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : a1(t) ? Pd(e) : he(t) ? Ad(e) : D1(t) ? Od(e) : G2(t) ? vd(e) : E.False
}
function Rd(e, t) {
    return E.False
}
function t9(e, t) {
    return E.True
}
function pu(e) {
    let[t,n] = [e, 0];
    for (; vt(t); )
        t = t.not,
        n += 1;
    return n % 2 === 0 ? t : lo()
}
function n9(e, t) {
    return vt(e) ? i5(pu(e), t) : vt(t) ? i5(e, pu(t)) : Bt("Invalid fallthrough for Not")
}
function r9(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : i3(t) ? E.True : E.False
}
function Ad(e, t) {
    return ed(e) || he(e) || D1(e) ? E.True : E.False
}
function i9(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : D1(t) || he(t) ? E.True : E.False
}
function Re(e, t) {
    return Object.getOwnPropertyNames(e.properties).length === t
}
function mu(e) {
    return uo(e)
}
function gu(e) {
    return Re(e, 0) || Re(e, 1) && "description" in e.properties && C1(e.properties.description) && e.properties.description.anyOf.length === 2 && (a1(e.properties.description.anyOf[0]) && T2(e.properties.description.anyOf[1]) || a1(e.properties.description.anyOf[1]) && T2(e.properties.description.anyOf[0]))
}
function Ho(e) {
    return Re(e, 0)
}
function yu(e) {
    return Re(e, 0)
}
function o9(e) {
    return Re(e, 0)
}
function a9(e) {
    return Re(e, 0)
}
function l9(e) {
    return uo(e)
}
function s9(e) {
    const t = z2();
    return Re(e, 0) || Re(e, 1) && "length" in e.properties && Ye(i5(e.properties.length, t)) === E.True
}
function u9(e) {
    return Re(e, 0)
}
function uo(e) {
    const t = z2();
    return Re(e, 0) || Re(e, 1) && "length" in e.properties && Ye(i5(e.properties.length, t)) === E.True
}
function c9(e) {
    const t = ir([jn()], jn());
    return Re(e, 0) || Re(e, 1) && "then" in e.properties && Ye(i5(e.properties.then, t)) === E.True
}
function _d(e, t) {
    return i5(e, t) === E.False || _i(e) && !_i(t) ? E.False : E.True
}
function ce(e, t) {
    return l1(e) ? E.False : o1(e) ? E.Union : i2(e) || J4(e) && mu(t) || ed(e) && Ho(t) || td(e) && yu(t) || Mn(e) && gu(t) || Zi(e) && o9(t) || a1(e) && mu(t) || Mn(e) && gu(t) || he(e) && Ho(t) || D1(e) && Ho(t) || G2(e) && yu(t) || rr(e) && l9(t) || eo(e) && a9(t) || Ji(e) && u9(t) || to(e) && s9(t) ? E.True : te(e) && a1(Ha(e)) ? t[Ki] === "Record" ? E.True : E.False : te(e) && he(Ha(e)) ? Re(t, 0) ? E.True : E.False : E.False
}
function d9(e, t) {
    return F5(t) ? $5(e, t) : te(t) ? Qe(e, t) : v5(t) ? ( () => {
        for (const n of Object.getOwnPropertyNames(t.properties)) {
            if (!(n in e.properties) && !_i(t.properties[n]))
                return E.False;
            if (_i(t.properties[n]))
                return E.True;
            if (_d(e.properties[n], t.properties[n]) === E.False)
                return E.False
        }
        return E.True
    }
    )() : E.False
}
function f9(e, t) {
    return F5(t) ? $5(e, t) : v5(t) && c9(t) ? E.True : o3(t) ? Ye(i5(e.item, t.item)) : E.False
}
function Ha(e) {
    return Ot in e.patternProperties ? z2() : Rt in e.patternProperties ? N2() : Bt("Unknown record key pattern")
}
function Ya(e) {
    return Ot in e.patternProperties ? e.patternProperties[Ot] : Rt in e.patternProperties ? e.patternProperties[Rt] : Bt("Unable to get record value schema")
}
function Qe(e, t) {
    const [n,i] = [Ha(t), Ya(t)];
    return J4(e) && he(n) && Ye(i5(e, i)) === E.True ? E.True : rr(e) && he(n) || a1(e) && he(n) || V2(e) && he(n) ? i5(e, i) : v5(e) ? ( () => {
        for (const o of Object.getOwnPropertyNames(e.properties))
            if (_d(i, e.properties[o]) === E.False)
                return E.False;
        return E.True
    }
    )() : E.False
}
function p9(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? i5(Ya(e), Ya(t)) : E.False
}
function m9(e, t) {
    const n = $n(e) ? N2() : e
      , i = $n(t) ? N2() : t;
    return i5(n, i)
}
function Pd(e, t) {
    return r2(e) && C5(e.const) || a1(e) ? E.True : E.False
}
function g9(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : a1(t) ? E.True : E.False
}
function y9(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : Mn(t) ? E.True : E.False
}
function E9(e, t) {
    return Bn(e) ? i5(Pi(e), t) : Bn(t) ? i5(e, Pi(t)) : Bt("Invalid fallthrough for TemplateLiteral")
}
function h9(e, t) {
    return V2(t) && e.items !== void 0 && e.items.every(n => i5(n, t.items) === E.True)
}
function S9(e, t) {
    return i2(e) ? E.True : l1(e) ? E.False : o1(e) ? E.Union : E.False
}
function L9(e, t) {
    return F5(t) ? $5(e, t) : v5(t) && uo(t) || V2(t) && h9(e, t) ? E.True : no(t) ? w5(e.items) && !w5(t.items) || !w5(e.items) && w5(t.items) ? E.False : w5(e.items) && !w5(t.items) || e.items.every( (n, i) => i5(n, t.items[i]) === E.True) ? E.True : E.False : E.False
}
function I9(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : rr(t) ? E.True : E.False
}
function v9(e, t) {
    return F5(t) ? $5(e, t) : v5(t) ? ce(e, t) : te(t) ? Qe(e, t) : ro(t) ? A9(e) : T2(t) ? E.True : E.False
}
function E3(e, t) {
    return t.anyOf.some(n => i5(e, n) === E.True) ? E.True : E.False
}
function O9(e, t) {
    return e.anyOf.every(n => i5(n, t) === E.True) ? E.True : E.False
}
function Td(e, t) {
    return E.True
}
function R9(e, t) {
    return i2(t) ? Rd() : b2(t) ? so(e, t) : C1(t) ? E3(e, t) : o1(t) ? y3() : a1(t) ? Pd(e) : he(t) ? Ad(e) : D1(t) ? Od(e) : G2(t) ? vd(e) : V2(t) ? b7(e) : no(t) ? S9(e) : v5(t) ? ce(e, t) : l1(t) ? E.True : E.False
}
function A9(e, t) {
    return T2(e) || T2(e) ? E.True : E.False
}
function _9(e, t) {
    return b2(t) ? so(e, t) : C1(t) ? E3(e, t) : l1(t) ? Td() : o1(t) ? y3() : v5(t) ? ce(e, t) : ro(t) ? E.True : E.False
}
function i5(e, t) {
    return Bn(e) || Bn(t) ? E9(e, t) : $n(e) || $n(t) ? m9(e, t) : vt(e) || vt(t) ? n9(e, t) : o1(e) ? G7(e, t) : V2(e) ? z7(e, t) : Zi(e) ? H7(e, t) : G2(e) ? Y7(e, t) : n3(e) ? K7(e, t) : Ji(e) ? W7(e, t) : eo(e) ? Q7(e, t) : to(e) ? q7(e, t) : D1(e) ? X7(e, t) : b2(e) ? Z7(e, t) : r3(e) ? J7(e, t) : r2(e) ? e9(e, t) : i2(e) ? t9() : i3(e) ? r9(e, t) : he(e) ? i9(e, t) : v5(e) ? d9(e, t) : te(e) ? p9(e, t) : a1(e) ? g9(e, t) : Mn(e) ? y9(e, t) : no(e) ? L9(e, t) : o3(e) ? f9(e, t) : rr(e) ? I9(e, t) : T2(e) ? v9(e, t) : C1(e) ? O9(e, t) : l1(e) ? R9(e, t) : ro(e) ? _9(e, t) : Bt(`Unknown left type operand '${e[M]}'`)
}
function ar(e, t) {
    return i5(e, t)
}
function P9(e, t, n, i, o) {
    const a = {};
    for (const l of globalThis.Object.getOwnPropertyNames(e))
        a[l] = h3(e[l], t, n, i, we(o));
    return a
}
function T9(e, t, n, i, o) {
    return P9(e.properties, t, n, i, o)
}
function N9(e, t, n, i, o) {
    const a = T9(e, t, n, i, o);
    return re(a)
}
function C9(e, t, n, i) {
    const o = ar(e, t);
    return o === E.Union ? ie([n, i]) : o === E.True ? n : i
}
function h3(e, t, n, i, o) {
    return Fe(e) ? N9(e, t, n, i, o) : M2(e) ? P(D9(e, t, n, i, o)) : P(C9(e, t, n, i), o)
}
function w9(e, t, n, i, o) {
    return {
        [e]: h3(x5(e), t, n, i, we(o))
    }
}
function k9(e, t, n, i, o) {
    return e.reduce( (a, l) => ({
        ...a,
        ...w9(l, t, n, i, o)
    }), {})
}
function x9(e, t, n, i, o) {
    return k9(e.keys, t, n, i, o)
}
function D9(e, t, n, i, o) {
    const a = x9(e, t, n, i, o);
    return re(a)
}
function U9(e, t) {
    return S3(Pi(e), t)
}
function F9(e, t) {
    const n = e.filter(i => ar(i, t) === E.False);
    return n.length === 1 ? n[0] : ie(n)
}
function S3(e, t, n={}) {
    return B2(e) ? P(U9(e, t), n) : Fe(e) ? P(B9(e, t), n) : P(Q5(e) ? F9(e.anyOf, t) : ar(e, t) !== E.False ? U5() : e, n)
}
function $9(e, t) {
    const n = {};
    for (const i of globalThis.Object.getOwnPropertyNames(e))
        n[i] = S3(e[i], t);
    return n
}
function M9(e, t) {
    return $9(e.properties, t)
}
function B9(e, t) {
    const n = M9(e, t);
    return re(n)
}
function j9(e, t) {
    return L3(Pi(e), t)
}
function V9(e, t) {
    const n = e.filter(i => ar(i, t) !== E.False);
    return n.length === 1 ? n[0] : ie(n)
}
function L3(e, t, n) {
    return B2(e) ? P(j9(e, t), n) : Fe(e) ? P(z9(e, t), n) : P(Q5(e) ? V9(e.anyOf, t) : ar(e, t) !== E.False ? e : U5(), n)
}
function G9(e, t) {
    const n = {};
    for (const i of globalThis.Object.getOwnPropertyNames(e))
        n[i] = L3(e[i], t);
    return n
}
function b9(e, t) {
    return G9(e.properties, t)
}
function z9(e, t) {
    const n = b9(e, t);
    return re(n)
}
function K9(e, t) {
    return xt(e) ? P(e.returns, t) : U5(t)
}
function Nd(e) {
    return a2(l2(e))
}
function K2(e, t, n) {
    return P({
        [M]: "Record",
        type: "object",
        patternProperties: {
            [e]: t
        }
    }, n)
}
function I3(e, t, n) {
    const i = {};
    for (const o of e)
        i[o] = t;
    return W5(i, {
        ...n,
        [Ki]: "Record"
    })
}
function H9(e, t, n) {
    return yp(e) ? I3(o2(e), t, n) : K2(e.pattern, t, n)
}
function Y9(e, t, n) {
    return I3(o2(ie(e)), t, n)
}
function W9(e, t, n) {
    return I3([e.toString()], t, n)
}
function Q9(e, t, n) {
    return K2(e.source, t, n)
}
function q9(e, t, n) {
    const i = w5(e.pattern) ? Rt : e.pattern;
    return K2(i, t, n)
}
function X9(e, t, n) {
    return K2(Rt, t, n)
}
function Z9(e, t, n) {
    return K2(Y8, t, n)
}
function J9(e, t, n) {
    return W5({
        true: t,
        false: t
    }, n)
}
function em(e, t, n) {
    return K2(Ot, t, n)
}
function tm(e, t, n) {
    return K2(Ot, t, n)
}
function Cd(e, t, n={}) {
    return Q5(e) ? Y9(e.anyOf, t, n) : B2(e) ? H9(e, t, n) : $2(e) ? W9(e.const, t, n) : er(e) ? J9(e, t, n) : Ut(e) ? em(e, t, n) : Ft(e) ? tm(e, t, n) : W4(e) ? Q9(e, t, n) : nr(e) ? q9(e, t, n) : K4(e) ? X9(e, t, n) : tr(e) ? Z9(e, t, n) : U5(n)
}
function v3(e) {
    return globalThis.Object.getOwnPropertyNames(e.patternProperties)[0]
}
function nm(e) {
    const t = v3(e);
    return t === Rt ? N2() : t === Ot ? z2() : N2({
        pattern: t
    })
}
function wd(e) {
    return e.patternProperties[v3(e)]
}
function rm(e, t) {
    return t.parameters = lr(e, t.parameters),
    t.returns = s1(e, t.returns),
    t
}
function im(e, t) {
    return t.parameters = lr(e, t.parameters),
    t.returns = s1(e, t.returns),
    t
}
function om(e, t) {
    return t.allOf = lr(e, t.allOf),
    t
}
function am(e, t) {
    return t.anyOf = lr(e, t.anyOf),
    t
}
function lm(e, t) {
    return w5(t.items) || (t.items = lr(e, t.items)),
    t
}
function sm(e, t) {
    return t.items = s1(e, t.items),
    t
}
function um(e, t) {
    return t.items = s1(e, t.items),
    t
}
function cm(e, t) {
    return t.items = s1(e, t.items),
    t
}
function dm(e, t) {
    return t.item = s1(e, t.item),
    t
}
function fm(e, t) {
    const n = ym(e, t.properties);
    return {
        ...t,
        ...W5(n)
    }
}
function pm(e, t) {
    const n = s1(e, nm(t))
      , i = s1(e, wd(t))
      , o = Cd(n, i);
    return {
        ...t,
        ...o
    }
}
function mm(e, t) {
    return t.index in e ? e[t.index] : lo()
}
function gm(e, t) {
    const n = ql(t)
      , i = n2(t)
      , o = s1(e, t);
    return n && i ? Nd(o) : n && !i ? a2(o) : !n && i ? l2(o) : o
}
function ym(e, t) {
    return globalThis.Object.getOwnPropertyNames(t).reduce( (n, i) => ({
        ...n,
        [i]: gm(e, t[i])
    }), {})
}
function lr(e, t) {
    return t.map(n => s1(e, n))
}
function s1(e, t) {
    return xt(t) ? rm(e, t) : Dt(t) ? im(e, t) : We(t) ? om(e, t) : Q5(t) ? am(e, t) : j2(t) ? lm(e, t) : wt(t) ? sm(e, t) : Hi(t) ? um(e, t) : Wi(t) ? cm(e, t) : Qi(t) ? dm(e, t) : u1(t) ? fm(e, t) : qi(t) ? pm(e, t) : H4(t) ? mm(e, t) : t
}
function Em(e, t) {
    return s1(t, Ql(e))
}
function hm(e) {
    return P({
        [M]: "Integer",
        type: "integer"
    }, e)
}
function Sm(e, t, n) {
    return {
        [e]: jt(x5(e), t, we(n))
    }
}
function Lm(e, t, n) {
    return e.reduce( (o, a) => ({
        ...o,
        ...Sm(a, t, n)
    }), {})
}
function Im(e, t, n) {
    return Lm(e.keys, t, n)
}
function vm(e, t, n) {
    const i = Im(e, t, n);
    return re(i)
}
function Om(e) {
    const [t,n] = [e.slice(0, 1), e.slice(1)];
    return [t.toLowerCase(), n].join("")
}
function Rm(e) {
    const [t,n] = [e.slice(0, 1), e.slice(1)];
    return [t.toUpperCase(), n].join("")
}
function Am(e) {
    return e.toUpperCase()
}
function _m(e) {
    return e.toLowerCase()
}
function Pm(e, t, n) {
    const i = c3(e.pattern);
    if (!Gn(i))
        return {
            ...e,
            pattern: kd(e.pattern, t)
        };
    const l = [...io(i)].map(p => x5(p))
      , c = xd(l, t)
      , u = ie(c);
    return sd([u], n)
}
function kd(e, t) {
    return typeof e == "string" ? t === "Uncapitalize" ? Om(e) : t === "Capitalize" ? Rm(e) : t === "Uppercase" ? Am(e) : t === "Lowercase" ? _m(e) : e : e.toString()
}
function xd(e, t) {
    return e.map(n => jt(n, t))
}
function jt(e, t, n={}) {
    return M2(e) ? vm(e, t, n) : B2(e) ? Pm(e, t, n) : Q5(e) ? ie(xd(e.anyOf, t), n) : $2(e) ? x5(kd(e.const, t), n) : P(e, n)
}
function Tm(e, t={}) {
    return jt(e, "Capitalize", t)
}
function Nm(e, t={}) {
    return jt(e, "Lowercase", t)
}
function Cm(e, t={}) {
    return jt(e, "Uncapitalize", t)
}
function wm(e, t={}) {
    return jt(e, "Uppercase", t)
}
function km(e, t, n) {
    const i = {};
    for (const o of globalThis.Object.getOwnPropertyNames(e))
        i[o] = co(e[o], t, we(n));
    return i
}
function xm(e, t, n) {
    return km(e.properties, t, n)
}
function Dm(e, t, n) {
    const i = xm(e, t, n);
    return re(i)
}
function Um(e, t) {
    return e.map(n => O3(n, t))
}
function Fm(e, t) {
    return e.map(n => O3(n, t))
}
function $m(e, t) {
    const {[t]: n, ...i} = e;
    return i
}
function Mm(e, t) {
    return t.reduce( (n, i) => $m(n, i), e)
}
function Bm(e, t, n) {
    const i = ke(e, [Ge, "$id", "required", "properties"])
      , o = Mm(n, t);
    return W5(o, i)
}
function jm(e) {
    const t = e.reduce( (n, i) => Y4(i) ? [...n, x5(i)] : n, []);
    return ie(t)
}
function O3(e, t) {
    return We(e) ? s2(Um(e.allOf, t)) : Q5(e) ? ie(Fm(e.anyOf, t)) : u1(e) ? Bm(e, t, e.properties) : W5({})
}
function co(e, t, n) {
    const i = Ae(t) ? jm(t) : t
      , o = q1(t) ? o2(t) : t
      , a = Oe(e)
      , l = Oe(t);
    return Fe(e) ? Dm(e, o, n) : M2(t) ? zm(e, t, n) : a && l ? G5("Omit", [e, i], n) : !a && l ? G5("Omit", [e, i], n) : a && !l ? G5("Omit", [e, i], n) : P({
        ...O3(e, o),
        ...n
    })
}
function Vm(e, t, n) {
    return {
        [t]: co(e, [t], we(n))
    }
}
function Gm(e, t, n) {
    return t.reduce( (i, o) => ({
        ...i,
        ...Vm(e, o, n)
    }), {})
}
function bm(e, t, n) {
    return Gm(e, t.keys, n)
}
function zm(e, t, n) {
    const i = bm(e, t, n);
    return re(i)
}
function Km(e, t, n) {
    const i = {};
    for (const o of globalThis.Object.getOwnPropertyNames(e))
        i[o] = fo(e[o], t, we(n));
    return i
}
function Hm(e, t, n) {
    return Km(e.properties, t, n)
}
function Ym(e, t, n) {
    const i = Hm(e, t, n);
    return re(i)
}
function Wm(e, t) {
    return e.map(n => R3(n, t))
}
function Qm(e, t) {
    return e.map(n => R3(n, t))
}
function qm(e, t) {
    const n = {};
    for (const i of t)
        i in e && (n[i] = e[i]);
    return n
}
function Xm(e, t, n) {
    const i = ke(e, [Ge, "$id", "required", "properties"])
      , o = qm(n, t);
    return W5(o, i)
}
function Zm(e) {
    const t = e.reduce( (n, i) => Y4(i) ? [...n, x5(i)] : n, []);
    return ie(t)
}
function R3(e, t) {
    return We(e) ? s2(Wm(e.allOf, t)) : Q5(e) ? ie(Qm(e.anyOf, t)) : u1(e) ? Xm(e, t, e.properties) : W5({})
}
function fo(e, t, n) {
    const i = Ae(t) ? Zm(t) : t
      , o = q1(t) ? o2(t) : t
      , a = Oe(e)
      , l = Oe(t);
    return Fe(e) ? Ym(e, o, n) : M2(t) ? ng(e, t, n) : a && l ? G5("Pick", [e, i], n) : !a && l ? G5("Pick", [e, i], n) : a && !l ? G5("Pick", [e, i], n) : P({
        ...R3(e, o),
        ...n
    })
}
function Jm(e, t, n) {
    return {
        [t]: fo(e, [t], we(n))
    }
}
function eg(e, t, n) {
    return t.reduce( (i, o) => ({
        ...i,
        ...Jm(e, o, n)
    }), {})
}
function tg(e, t, n) {
    return eg(e, t.keys, n)
}
function ng(e, t, n) {
    const i = tg(e, t, n);
    return re(i)
}
function rg(e, t) {
    return G5("Partial", [G5(e, t)])
}
function ig(e) {
    return G5("Partial", [or(e)])
}
function og(e) {
    const t = {};
    for (const n of globalThis.Object.getOwnPropertyNames(e))
        t[n] = l2(e[n]);
    return t
}
function ag(e, t) {
    const n = ke(e, [Ge, "$id", "required", "properties"])
      , i = og(t);
    return W5(i, n)
}
function Eu(e) {
    return e.map(t => Dd(t))
}
function Dd(e) {
    return kt(e) ? rg(e.target, e.parameters) : Oe(e) ? ig(e.$ref) : We(e) ? s2(Eu(e.allOf)) : Q5(e) ? ie(Eu(e.anyOf)) : u1(e) ? ag(e, e.properties) : Yi(e) || er(e) || Ut(e) || $2(e) || Xl(e) || Ft(e) || nr(e) || Zl(e) || Jl(e) ? e : W5({})
}
function A3(e, t) {
    return Fe(e) ? ug(e, t) : P({
        ...Dd(e),
        ...t
    })
}
function lg(e, t) {
    const n = {};
    for (const i of globalThis.Object.getOwnPropertyNames(e))
        n[i] = A3(e[i], we(t));
    return n
}
function sg(e, t) {
    return lg(e.properties, t)
}
function ug(e, t) {
    const n = sg(e, t);
    return re(n)
}
function cg(e, t) {
    return G5("Required", [G5(e, t)])
}
function dg(e) {
    return G5("Required", [or(e)])
}
function fg(e) {
    const t = {};
    for (const n of globalThis.Object.getOwnPropertyNames(e))
        t[n] = ke(e[n], [x1]);
    return t
}
function pg(e, t) {
    const n = ke(e, [Ge, "$id", "required", "properties"])
      , i = fg(t);
    return W5(i, n)
}
function hu(e) {
    return e.map(t => Ud(t))
}
function Ud(e) {
    return kt(e) ? cg(e.target, e.parameters) : Oe(e) ? dg(e.$ref) : We(e) ? s2(hu(e.allOf)) : Q5(e) ? ie(hu(e.anyOf)) : u1(e) ? pg(e, e.properties) : Yi(e) || er(e) || Ut(e) || $2(e) || Xl(e) || Ft(e) || nr(e) || Zl(e) || Jl(e) ? e : W5({})
}
function _3(e, t) {
    return Fe(e) ? yg(e, t) : P({
        ...Ud(e),
        ...t
    })
}
function mg(e, t) {
    const n = {};
    for (const i of globalThis.Object.getOwnPropertyNames(e))
        n[i] = _3(e[i], t);
    return n
}
function gg(e, t) {
    return mg(e.properties, t)
}
function yg(e, t) {
    const n = gg(e, t);
    return re(n)
}
function Eg(e, t) {
    return t.map(n => Oe(n) ? P3(e, n.$ref) : xe(e, n))
}
function P3(e, t) {
    return t in e ? Oe(e[t]) ? P3(e, e[t].$ref) : xe(e, e[t]) : U5()
}
function hg(e) {
    return ao(e[0])
}
function Sg(e) {
    return oo(e[0], e[1])
}
function Lg(e) {
    return m3(e[0])
}
function Ig(e) {
    return A3(e[0])
}
function vg(e) {
    return co(e[0], e[1])
}
function Og(e) {
    return fo(e[0], e[1])
}
function Rg(e) {
    return _3(e[0])
}
function Ag(e, t, n) {
    const i = Eg(e, n);
    return t === "Awaited" ? hg(i) : t === "Index" ? Sg(i) : t === "KeyOf" ? Lg(i) : t === "Partial" ? Ig(i) : t === "Omit" ? vg(i) : t === "Pick" ? Og(i) : t === "Required" ? Rg(i) : U5()
}
function _g(e, t) {
    return a3(xe(e, t))
}
function Pg(e, t) {
    return l3(xe(e, t))
}
function Tg(e, t, n) {
    return s3(sr(e, t), xe(e, n))
}
function Ng(e, t, n) {
    return ir(sr(e, t), xe(e, n))
}
function Cg(e, t) {
    return s2(sr(e, t))
}
function wg(e, t) {
    return f3(xe(e, t))
}
function kg(e, t) {
    return W5(globalThis.Object.keys(t).reduce( (n, i) => ({
        ...n,
        [i]: xe(e, t[i])
    }), {}))
}
function xg(e, t) {
    const [n,i] = [xe(e, wd(t)), v3(t)]
      , o = Ql(t);
    return o.patternProperties[i] = n,
    o
}
function Dg(e, t) {
    return Oe(t) ? {
        ...P3(e, t.$ref),
        [Ge]: t[Ge]
    } : t
}
function Ug(e, t) {
    return Mt(sr(e, t))
}
function Fg(e, t) {
    return ie(sr(e, t))
}
function sr(e, t) {
    return t.map(n => xe(e, n))
}
function xe(e, t) {
    return n2(t) ? P(xe(e, ke(t, [x1])), t) : ql(t) ? P(xe(e, ke(t, [Jn])), t) : Xi(t) ? P(Dg(e, t), t) : wt(t) ? P(_g(e, t.items), t) : Hi(t) ? P(Pg(e, t.items), t) : kt(t) ? P(Ag(e, t.target, t.parameters)) : xt(t) ? P(Tg(e, t.parameters, t.returns), t) : Dt(t) ? P(Ng(e, t.parameters, t.returns), t) : We(t) ? P(Cg(e, t.allOf), t) : Wi(t) ? P(wg(e, t.items), t) : u1(t) ? P(kg(e, t.properties), t) : qi(t) ? P(xg(e, t)) : j2(t) ? P(Ug(e, t.items || []), t) : Q5(t) ? P(Fg(e, t.anyOf), t) : t
}
function $g(e, t) {
    return t in e ? xe(e, e[t]) : U5()
}
function Mg(e) {
    return globalThis.Object.getOwnPropertyNames(e).reduce( (t, n) => ({
        ...t,
        [n]: $g(e, n)
    }), {})
}
class Bg {
    constructor(t) {
        const n = Mg(t)
          , i = this.WithIdentifiers(n);
        this.$defs = i
    }
    Import(t, n) {
        const i = {
            ...this.$defs,
            [t]: P(this.$defs[t], n)
        };
        return P({
            [M]: "Import",
            $defs: i,
            $ref: t
        })
    }
    WithIdentifiers(t) {
        return globalThis.Object.getOwnPropertyNames(t).reduce( (n, i) => ({
            ...n,
            [i]: {
                ...t[i],
                $id: i
            }
        }), {})
    }
}
function jg(e) {
    return new Bg(e)
}
function Vg(e, t) {
    return P({
        [M]: "Not",
        not: e
    }, t)
}
function Gg(e, t) {
    return Dt(e) ? Mt(e.parameters, t) : U5()
}
let bg = 0;
function zg(e, t={}) {
    w5(t.$id) && (t.$id = `T${bg++}`);
    const n = Ql(e({
        [M]: "This",
        $ref: `${t.$id}`
    }));
    return n.$id = t.$id,
    P({
        [Ki]: "Recursive",
        ...n
    }, t)
}
function Kg(e, t) {
    const n = C5(e) ? new globalThis.RegExp(e) : e;
    return P({
        [M]: "RegExp",
        type: "RegExp",
        source: n.source,
        flags: n.flags
    }, t)
}
function Hg(e) {
    return We(e) ? e.allOf : Q5(e) ? e.anyOf : j2(e) ? e.items ?? [] : []
}
function Yg(e) {
    return Hg(e)
}
function Wg(e, t) {
    return Dt(e) ? P(e.returns, t) : U5(t)
}
class Qg {
    constructor(t) {
        this.schema = t
    }
    Decode(t) {
        return new qg(this.schema,t)
    }
}
class qg {
    constructor(t, n) {
        this.schema = t,
        this.decode = n
    }
    EncodeTransform(t, n) {
        const a = {
            Encode: l => n[Ge].Encode(t(l)),
            Decode: l => this.decode(n[Ge].Decode(l))
        };
        return {
            ...n,
            [Ge]: a
        }
    }
    EncodeSchema(t, n) {
        const i = {
            Decode: this.decode,
            Encode: t
        };
        return {
            ...n,
            [Ge]: i
        }
    }
    Encode(t) {
        return Xi(this.schema) ? this.EncodeTransform(t, this.schema) : this.EncodeSchema(t, this.schema)
    }
}
function Xg(e) {
    return new Qg(e)
}
function Zg(e={}) {
    return P({
        [M]: e[M] ?? "Unsafe"
    }, e)
}
function Jg(e) {
    return P({
        [M]: "Void",
        type: "void"
    }, e)
}
const ey = Object.freeze(Object.defineProperty({
    __proto__: null,
    Any: jn,
    Argument: ep,
    Array: a3,
    AsyncIterator: l3,
    Awaited: ao,
    BigInt: d3,
    Boolean: ad,
    Capitalize: Tm,
    Composite: U7,
    Const: M7,
    Constructor: s3,
    ConstructorParameters: B7,
    Date: Ed,
    Enum: j7,
    Exclude: S3,
    Extends: h3,
    Extract: L3,
    Function: ir,
    Index: oo,
    InstanceType: K9,
    Instantiate: Em,
    Integer: hm,
    Intersect: s2,
    Iterator: f3,
    KeyOf: m3,
    Literal: x5,
    Lowercase: Nm,
    Mapped: r7,
    Module: jg,
    Never: U5,
    Not: Vg,
    Null: hd,
    Number: z2,
    Object: W5,
    Omit: co,
    Optional: l2,
    Parameters: Gg,
    Partial: A3,
    Pick: fo,
    Promise: fd,
    Readonly: a2,
    ReadonlyOptional: Nd,
    Record: Cd,
    Recursive: zg,
    Ref: or,
    RegExp: Kg,
    Required: _3,
    Rest: Yg,
    ReturnType: Wg,
    String: N2,
    Symbol: Sd,
    TemplateLiteral: sd,
    Transform: Xg,
    Tuple: Mt,
    Uint8Array: Id,
    Uncapitalize: Cm,
    Undefined: Ld,
    Union: ie,
    Unknown: lo,
    Unsafe: Zg,
    Uppercase: wm,
    Void: Jg
}, Symbol.toStringTag, {
    value: "Module"
}))
  , r = ey
  , A = r.String({
    pattern: "^(0|[1-9][0-9]*)$"
})
  , N = r.String({
    pattern: "^(0|[1-9][0-9]*)$"
})
  , h1 = r.String({
    pattern: "^[0-9a-f]{16}$"
})
  , v2 = r.String({
    pattern: "^[0-9a-f]{64}$"
});
r.Object({
    authority: r.Literal("server"),
    principal: r.Object({
        id: r.String({
            format: "uuid"
        }),
        mode: r.Union([r.Literal("guest"), r.Literal("registered")]),
        guestExpiresAt: r.Union([r.String({
            format: "date-time"
        }), r.Null()], {
            description: "Nullable guest credential expiry only; never the lifetime of the durable principal, lineage, balance, or history."
        })
    }, {
        additionalProperties: !1
    }),
    account: r.Union([r.Object({
        id: r.String({
            format: "uuid"
        }),
        nickname: r.String({
            minLength: 3,
            maxLength: 24
        }),
        avatarColor: r.Optional(r.String({
            pattern: "^#[0-9A-Fa-f]{6}$"
        })),
        profileVersion: r.Optional(N)
    }, {
        additionalProperties: !1
    }), r.Null()]),
    session: r.Union([r.Object({
        id: r.String({
            format: "uuid"
        }),
        createdAt: r.String({
            format: "date-time"
        }),
        lastSeenAt: r.String({
            format: "date-time"
        }),
        idleExpiresAt: r.String({
            format: "date-time"
        }),
        absoluteExpiresAt: r.String({
            format: "date-time"
        })
    }, {
        additionalProperties: !1
    }), r.Null()]),
    balance: r.Object({
        asset: r.Literal("GAME_RUB"),
        amount: A,
        version: N
    }, {
        additionalProperties: !1
    }),
    economy: r.Object({
        configHash: h1,
        configSemanticSha256: v2,
        runtimePackageSha256: v2,
        sourceSinkRegistrySha256: v2
    }, {
        additionalProperties: !1
    }),
    currentState: r.Object({
        paidSpinCount: N,
        historyEventCount: N,
        value: r.Record(r.String(), r.Unknown()),
        version: N
    }, {
        additionalProperties: !1
    }),
    capabilities: r.Object({
        canRegister: r.Boolean(),
        canUseRegisteredFeatures: r.Boolean(),
        guestRestrictions: r.Array(r.String({
            minLength: 1,
            maxLength: 100
        }), {
            maxItems: 32
        })
    }, {
        additionalProperties: !1
    }),
    csrfToken: r.String({
        pattern: "^[A-Za-z0-9_-]{43}$"
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "Bootstrap",
    additionalProperties: !1
});
const ty = r.Union([r.Literal("LEGAL_CONSENT_REQUIRED"), r.Literal("LEGAL_VERSION_CHANGED"), r.Literal("LEGAL_CONTENT_PENDING"), r.Literal("AUTHENTICATION_REQUIRED"), r.Literal("FORBIDDEN"), r.Literal("INVALID_CREDENTIALS"), r.Literal("NICKNAME_UNAVAILABLE"), r.Literal("GUEST_RESTRICTED"), r.Literal("GUEST_EXPIRED"), r.Literal("GUEST_ALREADY_CONVERTED"), r.Literal("SESSION_EXPIRED"), r.Literal("CHALLENGE_REQUIRED"), r.Literal("RATE_LIMITED"), r.Literal("KILL_SWITCH_ACTIVE"), r.Literal("M9_NEW_ACTIVITY_DISABLED"), r.Literal("DEVELOPMENT_SEED_REQUIRED"), r.Literal("IDEMPOTENCY_CONFLICT"), r.Literal("INSUFFICIENT_BALANCE"), r.Literal("STALE_VERSION"), r.Literal("PRICING_POLICY_CHANGED"), r.Literal("AUCTION_QUOTE_STALE"), r.Literal("MARKET_QUOTE_STALE"), r.Literal("REGION_LOCKED"), r.Literal("REGION_REQUIRED"), r.Literal("INCOMPLETE_DRAFT"), r.Literal("AXIS_POOL_EXHAUSTED"), r.Literal("RESERVATION_EXPIRED"), r.Literal("PLATE_LOCKED"), r.Literal("FEATURE_ENTITLEMENT_REQUIRED"), r.Literal("FEATURE_ALREADY_OWNED"), r.Literal("LOCAL_RECEIPTS_DISABLED"), r.Literal("RECEIPT_CONFLICT"), r.Literal("SAVED_DRAFT_OCCUPIED"), r.Literal("SAVED_DRAFT_EMPTY"), r.Literal("SAVED_DRAFT_INELIGIBLE"), r.Literal("ACTIVE_DRAFT_NOT_EMPTY"), r.Literal("BALANCE_FLOOR_REACHED"), r.Literal("ADMISSION_INEQUALITY"), r.Literal("COLLECTION_CAPACITY_REACHED"), r.Literal("LEGACY_RECOVERY_UNAVAILABLE"), r.Literal("LISTING_UNAVAILABLE"), r.Literal("ACTIVE_LISTING_LIMIT"), r.Literal("PUBLICATION_LIMIT"), r.Literal("SELF_BUY_FORBIDDEN"), r.Literal("AUCTION_UNAVAILABLE"), r.Literal("AUCTION_ENDED"), r.Literal("SELF_BID_FORBIDDEN"), r.Literal("BID_TOO_LOW"), r.Literal("AUCTION_CANCEL_FORBIDDEN"), r.Literal("AUCTION_CAPACITY_MISMATCH"), r.Literal("AUCTION_CUSTODY_MISMATCH"), r.Literal("AUCTION_NOT_DUE"), r.Literal("GAME_POLICY_UNCONFIGURED"), r.Literal("ECONOMY_CONFIG_MISMATCH"), r.Literal("VALIDATION_ERROR"), r.Literal("NOT_FOUND"), r.Literal("INTERNAL_RETRYABLE"), r.Literal("INTERNAL_ERROR"), r.Literal("M8_ACTOR_CHANGED"), r.Literal("M8_ACTOR_INELIGIBLE"), r.Literal("M8_ALREADY_CLAIMED"), r.Literal("M8_CURSOR_CAPACITY"), r.Literal("M8_CURSOR_KEY_UNAVAILABLE"), r.Literal("M8_DAILY_CLAIMS_REQUIRED"), r.Literal("M8_INVALID_CURSOR"), r.Literal("M8_INVALID_FILTER"), r.Literal("M8_INVALID_PAGE"), r.Literal("M8_INVALID_TOP_KIND"), r.Literal("M8_NOTIFICATION_NOT_FOUND"), r.Literal("M8_NOT_ACTIVE"), r.Literal("M8_OBJECTIVE_NOT_FOUND"), r.Literal("M8_PERIOD_EXPIRED"), r.Literal("M8_POLICY_MISMATCH"), r.Literal("M8_PROJECTION_INCOMPLETE"), r.Literal("M8_RECOVERY_INELIGIBLE"), r.Literal("M8_RECOVERY_NOT_COMPLETED"), r.Literal("M8_REFERRAL_CODE_UNAVAILABLE"), r.Literal("M8_SNAPSHOT_NOT_FOUND"), r.Literal("M8_SNAPSHOT_EXPIRED"), r.Literal("M8_STALE_VERSION"), r.Literal("M8_SWITCH_DISABLED"), r.Literal("M8_TASK_NOT_COMPLETED"), r.Literal("M8_UNKNOWN_TASK")])
  , ny = r.Object({
    error: r.Object({
        code: ty,
        message: r.String({
            minLength: 1,
            maxLength: 500
        }),
        requestId: r.String({
            minLength: 1,
            maxLength: 128
        }),
        retryable: r.Boolean()
    }, {
        additionalProperties: !1
    })
}, {
    $id: "ErrorEnvelope",
    additionalProperties: !1
});
r.Object({
    status: r.Literal("ok"),
    service: r.Literal("nomerok-api"),
    timestamp: r.String({
        format: "date-time"
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "LiveHealth",
    additionalProperties: !1
});
r.Object({
    status: r.Literal("ready"),
    service: r.Literal("nomerok-api"),
    database: r.Literal("ready"),
    timestamp: r.String({
        format: "date-time"
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "ReadyHealth",
    additionalProperties: !1
});
const ry = {
    terms: "Пользовательское соглашение",
    privacy: "Политика обработки персональных данных",
    "personal-data-consent": "Согласие на обработку персональных данных",
    cookies: "Политика cookies",
    offer: "Публичная оферта",
    support: "Поддержка и возвраты",
    contacts: "Контакты и реквизиты",
    "analytics-consent": "Согласие на аналитику"
}
  , hE = ["terms", "privacy", "personal-data-consent", "cookies", "offer"]
  , Fd = r.Union(Object.keys(ry).map(e => r.Literal(e)))
  , $d = r.String({
    pattern: "^[A-Za-z0-9._-]{1,80}$"
})
  , T3 = r.String({
    pattern: "^[a-f0-9]{64}$"
})
  , Ti = r.Object({
    key: Fd,
    version: $d,
    contentHash: T3
}, {
    additionalProperties: !1
})
  , N3 = r.Object({
    ...Ti.properties,
    accepted: r.Literal(!0)
}, {
    additionalProperties: !1
})
  , iy = r.Array(N3, {
    minItems: 2,
    maxItems: 2
})
  , Wa = r.Object({
    key: Fd,
    title: r.String(),
    status: r.Union([r.Literal("LEGAL_CONTENT_PENDING"), r.Literal("PUBLISHED")]),
    version: r.Union([$d, r.Null()]),
    contentHash: r.Union([T3, r.Null()]),
    content: r.Union([r.String(), r.Null()]),
    revisionDate: r.Optional(r.String()),
    publishedAt: r.Optional(r.Union([r.String({
        format: "date-time"
    }), r.Null()]))
}, {
    additionalProperties: !1
});
r.Object({
    registrationRequired: r.Boolean(),
    offerRequired: r.Boolean(),
    guestRequired: r.Optional(r.Boolean()),
    documents: r.Array(Wa, {
        minItems: 5,
        maxItems: 5
    })
}, {
    additionalProperties: !1
});
r.Object({
    documents: r.Array(N3, {
        minItems: 1,
        maxItems: 2
    })
}, {
    additionalProperties: !1
});
r.Union([r.Object({
    action: r.Literal("GRANT"),
    document: Ti,
    expectedRevision: r.String({
        pattern: "^[0-9]+$"
    })
}, {
    additionalProperties: !1
}), r.Object({
    action: r.Union([r.Literal("REFUSE"), r.Literal("REVOKE")]),
    shownDocument: r.Optional(Ti)
}, {
    additionalProperties: !1
})]);
r.Object({
    kind: r.Literal("personal-data-consent")
}, {
    additionalProperties: !1
});
r.Object({
    required: r.Boolean(),
    processingAccepted: r.Boolean(),
    termsAccepted: r.Boolean()
}, {
    additionalProperties: !1
});
const oy = r.Object({
    analytics: r.Boolean(),
    version: r.Union([r.String(), r.Null()]),
    contentHash: r.Union([T3, r.Null()]),
    decidedAt: r.Union([r.String(), r.Null()]),
    revision: r.String()
}, {
    additionalProperties: !1
});
r.Object({
    csrfToken: r.String(),
    analyticsAvailable: r.Boolean(),
    state: oy,
    cookies: r.Union([Wa, r.Null()]),
    analyticsNotice: r.Union([Wa, r.Null()])
}, {
    additionalProperties: !1
});
r.Object({
    recorded: r.Literal(!0),
    receiptId: r.String(),
    replayed: r.Boolean()
}, {
    additionalProperties: !1
});
const L5 = r.String({
    format: "uuid"
})
  , e5 = r.String({
    format: "date-time"
})
  , Md = r.String({
    minLength: 3,
    maxLength: 24,
    pattern: "^[A-Za-zА-Яа-яЁё0-9_]{3,24}$"
})
  , Bd = r.String({
    minLength: 8,
    maxLength: 128
})
  , jd = r.String({
    minLength: 3,
    maxLength: 10,
    pattern: "^[A-Za-zА-Яа-яЁё0-9_]{3,10}$"
})
  , Vd = r.String({
    pattern: "^#[0-9A-Fa-f]{6}$"
});
r.String({
    minLength: 8,
    maxLength: 200
});
const C3 = r.String({
    pattern: "^[A-Za-z0-9_-]{43}$"
});
r.Object({}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    csrfToken: r.Union([C3, r.Null()]),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "AuthContext",
    additionalProperties: !1
});
r.Object({
    nickname: jd,
    password: Bd,
    referralCode: r.Optional(r.String({
        maxLength: 200
    })),
    legalConsents: r.Optional(iy)
}, {
    $id: "RegisterRequest",
    additionalProperties: !1
});
r.Object({
    nickname: Md,
    password: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "LoginRequest",
    additionalProperties: !1
});
r.Object({
    currentPassword: r.String({
        minLength: 1,
        maxLength: 128
    }),
    newPassword: Bd
}, {
    $id: "ChangePasswordRequest",
    additionalProperties: !1
});
r.Object({
    nickname: r.Optional(jd),
    avatarColor: r.Optional(Vd),
    expectedProfileVersion: r.Optional(N)
}, {
    $id: "UpdateProfileRequest",
    additionalProperties: !1
});
r.Object({
    challengeResponse: r.Optional(r.String({
        minLength: 1,
        maxLength: 2e3
    })),
    continueAsGuest: r.Optional(r.Boolean())
}, {
    $id: "GuestBootstrapRequest",
    additionalProperties: !1
});
const Gd = r.Object({
    id: L5,
    nickname: Md,
    avatarColor: r.Optional(Vd),
    profileVersion: r.Optional(N)
}, {
    additionalProperties: !1
})
  , bd = r.Object({
    id: L5,
    current: r.Boolean(),
    createdAt: e5,
    lastSeenAt: e5,
    idleExpiresAt: e5,
    absoluteExpiresAt: e5
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    referralBinding: r.Optional(r.Object({
        status: r.Union([r.Literal("BOUND"), r.Literal("REJECTED"), r.Literal("NOT_REQUESTED"), r.Literal("POLICY_INACTIVE")]),
        reason: r.Union([r.String(), r.Null()])
    }, {
        additionalProperties: !1
    })),
    account: Gd,
    session: bd,
    balance: r.Object({
        asset: r.Literal("GAME_RUB"),
        amount: A,
        version: N
    }, {
        additionalProperties: !1
    }),
    csrfToken: C3,
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "IdentityMutationResponse",
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    account: Gd,
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "ProfileResponse",
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    sessions: r.Array(bd, {
        maxItems: 100
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "SessionsResponse",
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    revoked: r.Integer({
        minimum: 0,
        maximum: 1e4
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "RevocationResponse",
    additionalProperties: !1
});
r.Object({
    sessionId: L5
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    accountId: L5,
    state: r.Union([r.Literal("COMPLETED"), r.Literal("NOT_FOUND"), r.Literal("SUPERSEDED"), r.Literal("CLOSED"), r.Literal("UNAVAILABLE")]),
    receiptId: r.Union([N, r.Null()]),
    csrfToken: C3,
    requestId: r.String()
}, {
    additionalProperties: !1
});
const zd = r.Union([r.Literal("digits"), r.Literal("letters")])
  , Vt = r.Union([r.Literal("A"), r.Literal("B")])
  , C2 = r.Union([r.Literal("common"), r.Literal("rare"), r.Literal("legendary"), r.Literal("ultra")])
  , ay = r.Union([r.Literal("ORDINARY"), r.Literal("INTERESTING"), r.Literal("RARE"), r.Literal("SPECIAL_PRESTIGE"), r.Literal("TOP")])
  , ly = r.Object({
    subjectId: r.String({
        pattern: "^[a-z][a-z0-9_]{0,63}$"
    }),
    regionCode: r.String({
        pattern: "^[0-9]{2,3}$"
    }),
    multiplier: r.Number({
        exclusiveMinimum: 0
    }),
    componentSpinPriceGameRub: r.Integer({
        minimum: 1
    })
}, {
    additionalProperties: !1
})
  , w3 = r.Object({
    canonicalKey: r.String({
        minLength: 8,
        maxLength: 32
    }),
    regionMultiplier: r.Number({
        exclusiveMinimum: 0
    }),
    componentSpinPriceGameRub: r.Integer({
        minimum: 1
    }),
    intrinsicValueGameRub: r.Number({
        exclusiveMinimum: 0
    }),
    instantSellValueGameRub: r.Integer({
        minimum: 0
    }),
    digitFamily: r.String({
        minLength: 1,
        maxLength: 32
    }),
    letterFamily: r.String({
        minLength: 1,
        maxLength: 32
    }),
    digitClass: r.String({
        minLength: 1,
        maxLength: 32
    }),
    letterClass: r.String({
        minLength: 1,
        maxLength: 32
    }),
    digitProbability: r.Number({
        exclusiveMinimum: 0,
        maximum: 1
    }),
    letterProbability: r.Number({
        exclusiveMinimum: 0,
        maximum: 1
    }),
    digitClassProbability: r.Number({
        exclusiveMinimum: 0,
        maximum: 1
    }),
    letterClassProbability: r.Number({
        exclusiveMinimum: 0,
        maximum: 1
    }),
    rarityProbability: r.Number({
        exclusiveMinimum: 0,
        maximum: 1
    }),
    rarityScore: r.Number({
        minimum: 0
    }),
    digitTier: r.Union([r.Literal("common"), r.Literal("rare"), r.Literal("very_rare")]),
    letterTier: r.Union([r.Literal("common"), r.Literal("rare"), r.Literal("very_rare")]),
    rarity: C2,
    eventClass: ay
}, {
    additionalProperties: !1
})
  , Yo = r.Object({
    id: r.String({
        format: "uuid"
    }),
    slot: Vt,
    regionSubjectId: r.Union([r.String(), r.Null()]),
    regionCode: r.Union([r.String(), r.Null()]),
    digits: r.Union([r.String(), r.Null()]),
    letters: r.Union([r.String(), r.Null()]),
    digitsSpun: r.Boolean(),
    lettersSpun: r.Boolean(),
    result: r.Union([w3, r.Null()]),
    resultExpiresAt: r.Union([r.String({
        format: "date-time"
    }), r.Null()]),
    draftExpiresAt: r.String({
        format: "date-time"
    }),
    version: N
}, {
    additionalProperties: !1
})
  , sy = r.Object({
    id: r.String({
        format: "uuid"
    }),
    regionSubjectId: r.String(),
    regionCode: r.String(),
    heldAxis: zd,
    digits: r.Union([r.String(), r.Null()]),
    letters: r.Union([r.String(), r.Null()]),
    componentTier: r.Union([r.Literal("rare"), r.Literal("very_rare")]),
    economyConfigHash: h1,
    version: N,
    savedAt: r.String({
        format: "date-time"
    })
}, {
    additionalProperties: !1
})
  , uy = r.Object({
    auto: r.Boolean(),
    double: r.Boolean()
}, {
    additionalProperties: !1
})
  , cy = r.Object({
    id: r.String({
        format: "uuid"
    }),
    regionSubjectId: r.String(),
    regionCode: r.String(),
    digits: r.String(),
    letters: r.String(),
    snapshot: w3,
    acquiredAt: r.String({
        format: "date-time"
    }),
    version: N,
    locked: r.Optional(r.Boolean()),
    marketListing: r.Optional(r.Union([r.Object({
        id: r.String({
            format: "uuid"
        }),
        askGameRub: A,
        expiresAt: r.String({
            format: "date-time"
        }),
        version: N
    }, {
        additionalProperties: !1
    }), r.Null()]))
}, {
    additionalProperties: !1
})
  , dy = r.Object({
    authority: r.Literal("server"),
    principalMode: r.Union([r.Literal("guest"), r.Literal("registered")]),
    draft: Yo,
    slots: r.Object({
        A: Yo,
        B: r.Union([Yo, r.Null()])
    }, {
        additionalProperties: !1
    }),
    savedDraft: r.Union([sy, r.Null()]),
    entitlements: uy,
    collection: r.Array(cy, {
        maxItems: 500
    }),
    balance: r.Object({
        asset: r.Literal("GAME_RUB"),
        amount: A,
        version: N
    }, {
        additionalProperties: !1
    }),
    economy: r.Object({
        configHash: h1,
        rngConfigVersion: v2,
        valuationVersion: h1
    }, {
        additionalProperties: !1
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "GameState",
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    economyConfigHash: h1,
    rngConfigVersion: v2,
    valuationVersion: h1,
    regionCatalogue: r.Array(ly, {
        minItems: 1
    }),
    odds: r.Object({
        digitClasses: r.Record(r.String(), r.Number({
            minimum: 0,
            maximum: 1
        })),
        letterClasses: r.Record(r.String(), r.Number({
            minimum: 0,
            maximum: 1
        })),
        plateRarities: r.Record(r.String(), r.Number({
            minimum: 0,
            maximum: 1
        }))
    }, {
        additionalProperties: !1
    }),
    firstHour: r.Object({
        enabled: r.Boolean(),
        windowActiveSeconds: r.Integer({
            minimum: 1
        }),
        droughtSpins: r.Integer({
            minimum: 0
        }),
        boostProbability: r.Number({
            exclusiveMinimum: 0,
            maximum: 1
        }),
        excludedRegionCodes: r.Array(r.String())
    }, {
        additionalProperties: !1
    }),
    ttlPolicy: r.Object({
        resultSeconds: r.Integer({
            minimum: 60
        }),
        reservationSeconds: r.Integer({
            minimum: 60
        }),
        draftSeconds: r.Integer({
            minimum: 60
        })
    }, {
        additionalProperties: !1
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "GameConfig",
    additionalProperties: !1
});
r.Object({
    slot: r.Optional(Vt),
    subjectId: r.String({
        pattern: "^[a-z][a-z0-9_]{0,63}$"
    }),
    regionCode: r.String({
        pattern: "^[0-9]{2,3}$"
    }),
    expectedDraftVersion: N,
    discardCurrentResult: r.Optional(r.Boolean())
}, {
    additionalProperties: !1
});
r.Object({
    slot: r.Optional(Vt),
    axis: zd,
    expectedDraftVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    slot: r.Optional(Vt),
    expectedDraftVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    expectedDraftVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    expectedDraftVersion: N,
    expectedSavedDraftVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    expectedSavedDraftVersion: N
}, {
    additionalProperties: !1
});
const Kd = r.Union([r.Literal("DIGITS_ONLY"), r.Literal("LETTERS_ONLY"), r.Literal("WHOLE_PLATE")])
  , fy = r.Object({
    slot: Vt,
    mode: Kd,
    target: C2,
    expectedDraftVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    slots: r.Array(fy, {
        minItems: 1,
        maxItems: 2
    }),
    balanceFloorGameRub: r.Optional(A)
}, {
    additionalProperties: !1
});
const py = r.Object({
    slot: Vt,
    mode: Kd,
    target: C2,
    hit: r.Boolean(),
    resultRarity: r.Union([C2, r.Null()]),
    chargedGameRub: A
}, {
    additionalProperties: !1
})
  , Hd = r.Union([r.Literal("AUTO"), r.Literal("DOUBLE"), r.Literal("BUNDLE")]);
r.Object({
    providerReceiptId: r.String({
        format: "uuid"
    }),
    product: Hd
}, {
    additionalProperties: !1
});
r.Object({}, {
    additionalProperties: !1
});
r.Object({
    expectedVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    state: dy,
    collisionResampled: r.Optional(r.Boolean()),
    firstHourConverted: r.Optional(r.Boolean()),
    payoutGameRub: r.Optional(A),
    autoCycle: r.Optional(r.Object({
        outcomes: r.Array(py, {
            minItems: 1,
            maxItems: 2
        }),
        chargedGameRub: A,
        balanceFloorGameRub: r.Union([A, r.Null()]),
        allTargetsHit: r.Boolean()
    }, {
        additionalProperties: !1
    })),
    acquisition: r.Optional(r.Object({
        product: r.Union([Hd, r.Literal("DOUBLE_GAME")]),
        route: r.Union([r.Literal("local_receipt"), r.Literal("game_wallet")]),
        priceRealRub: r.Union([r.Integer({
            minimum: 1
        }), r.Null()]),
        priceGameRub: r.Union([A, r.Null()]),
        fuelGrantedGameRub: A
    }, {
        additionalProperties: !1
    })),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "GameMutationResponse",
    additionalProperties: !1
});
r.Object({
    plateId: r.String({
        format: "uuid"
    })
}, {
    additionalProperties: !1
});
const Yd = r.Object({
    id: r.String({
        pattern: "^[0-9]+:[AB]:[0-9]+$"
    }),
    slot: r.Union([r.Literal("A"), r.Literal("B")]),
    regionCode: r.String(),
    digits: r.String({
        pattern: "^[0-9]{3}$"
    }),
    letters: r.String(),
    axis: r.Union([r.Literal("digits"), r.Literal("letters"), r.Literal("whole")]),
    displayTier: r.Union(["GRAY", "BLUE", "PURPLE", "RED", "GOLD"].map(e => r.Literal(e))),
    prestige: r.Union(["NONE", "REGULAR", "JACKPOT"].map(e => r.Literal(e))),
    intrinsicGameRub: r.String({
        pattern: "^[0-9]+$"
    })
}, {
    additionalProperties: !1
})
  , t5 = e => r.Object(e, {
    additionalProperties: !1
})
  , z = e => r.Union([e, r.Null()])
  , K = r.String({
    pattern: "^(0|[1-9][0-9]*)$",
    maxLength: 100
})
  , nn = r.String({
    pattern: "^-?(0|[1-9][0-9]*)$",
    maxLength: 100
})
  , Wd = r.String({
    pattern: "^(0|[1-9][0-9]*)([.][0-9]+)?$",
    maxLength: 150
})
  , w2 = r.String({
    pattern: "^[0-9]{4}-[0-9]{2}-[0-9]{2}$"
})
  , Qd = r.String({
    pattern: "^(0|[1-9][0-9]*)$",
    maxLength: 19
})
  , Gt = r.Union(["REGISTRATION_REQUIRED", "SWITCH_DISABLED", "NOT_COMPLETED", "ALREADY_CLAIMED", "EXPIRED", "DAILY_CLAIMS_REQUIRED", "FIRST_HOUR_ACTIVE", "WALLET_ABOVE_THRESHOLD", "LOSS_BELOW_THRESHOLD", "PERIOD_REWARDS_AVAILABLE", "ACTOR_UNAVAILABLE", "NO_OBJECTIVE", "NO_ASSETS", "PROJECTION_NOT_READY", "PARTICIPANT_UNAVAILABLE", "ROLLING_CAP", "EARLIER_ELIGIBLE_PAIR", "PERIOD_NOT_CLOSED", "NOT_QUALIFIED", "NOT_ATTRIBUTED", "INVALID_OR_INELIGIBLE"].map(e => r.Literal(e)))
  , k3 = t5({
    version: r.String(),
    asOf: e5,
    freshnessMs: r.Integer({
        minimum: 0
    }),
    status: r.Union([r.Literal("FRESH"), r.Literal("STALE"), r.Literal("NOT_READY")]),
    reason: z(r.String())
})
  , Su = t5({
    key: w2,
    startsAt: e5,
    endsAt: e5
})
  , Wo = t5({
    id: r.String(),
    title: r.Optional(r.String()),
    description: r.Optional(r.String()),
    availableAt: r.Optional(e5),
    routeId: r.String(),
    policyVersion: r.Optional(r.String()),
    semanticSlot: r.Optional(r.Union(["paid_parts", "full_results", "natural_rarity"].map(e => r.Literal(e)))),
    metric: r.Optional(r.Union(["components", "full", "natural", "purple"].map(e => r.Literal(e)))),
    target: K,
    progress: K,
    remaining: K,
    rewardGameRub: K,
    periodKind: r.Union([r.Literal("day"), r.Literal("week")]),
    periodKey: w2,
    startsAt: e5,
    expiresAt: e5,
    completed: r.Boolean(),
    claimed: r.Boolean(),
    expired: r.Boolean(),
    claimedAt: z(e5),
    receiptReference: z(K),
    canClaim: r.Boolean(),
    unavailableReason: z(Gt),
    stateVersion: K
})
  , my = t5({
    enabled: r.Boolean(),
    policyStatus: r.Union([r.Literal("KEEP"), r.Literal("RETIRED")]),
    objectiveId: z(L5),
    eligibleRegionCodes: r.Optional(r.Array(r.String({
        pattern: "^[0-9]{2,3}$"
    }), {
        maxItems: 137
    })),
    openedAt: z(e5),
    expiresAt: z(e5),
    economicDay: w2,
    walletThresholdGameRub: K,
    lossThresholdGameRub: K,
    fullTarget: K,
    activeTargetMicroseconds: K,
    fullProgress: K,
    activeMicroseconds: K,
    fullRemaining: K,
    activeRemainingMicroseconds: K,
    rewardMaximumGameRub: K,
    offeredRewardGameRub: z(K),
    rewardStatus: r.Union(["UNAVAILABLE", "OFFERED", "CLAIMABLE", "CLAIMED", "EXPIRED"].map(e => r.Literal(e))),
    canClaim: r.Boolean(),
    claimed: r.Boolean(),
    claimedAt: z(e5),
    receiptReference: z(K),
    paidRewardGameRub: K,
    expired: r.Boolean(),
    eligibilityReasons: r.Array(Gt),
    stateVersion: K,
    objectiveVersion: z(K)
})
  , qd = r.Object({
    authority: r.Literal("server"),
    contractVersion: r.Literal("nomerok.m8.v1"),
    policyVersion: r.String(),
    activationVersion: L5,
    serverObservedAt: e5,
    stateVersion: K,
    viewer: t5({
        kind: r.Union([r.Literal("guest"), r.Literal("registered")]),
        canClaim: r.Boolean()
    }),
    calendar: t5({
        timezone: r.Literal("Europe/Moscow"),
        day: Su,
        week: Su
    }),
    projection: k3,
    tasks: t5({
        daily: r.Array(Wo, {
            minItems: 3,
            maxItems: 4
        }),
        weekly: r.Array(Wo, {
            minItems: 3,
            maxItems: 104
        }),
        legacy: r.Optional(r.Array(Wo, {
            maxItems: 100
        }))
    }),
    completion: t5({
        periodKey: w2,
        requiredDailyClaims: r.Array(t5({
            taskId: r.String(),
            claimed: r.Boolean()
        }), {
            minItems: 3,
            maxItems: 4
        }),
        amountGameRub: K,
        canClaim: r.Boolean(),
        unavailableReason: z(Gt),
        nextStreakPosition: r.Integer({
            minimum: 1,
            maximum: 7
        }),
        nextStreakRewardGameRub: K,
        totalGameRub: K,
        claimed: r.Boolean(),
        claimedAt: z(e5),
        receiptReference: z(K)
    }),
    streak: t5({
        enabled: r.Optional(r.Boolean()),
        position: r.Integer({
            minimum: 0,
            maximum: 7
        }),
        lastCompletionDay: z(w2),
        nextPosition: r.Integer({
            minimum: 1,
            maximum: 7
        }),
        nextRewardGameRub: K,
        resetOnMiss: r.Literal(!0),
        nextResetAt: e5,
        claimedThroughCompletion: r.Literal(!0)
    }),
    recovery: my
}, {
    additionalProperties: !1,
    $id: "RewardsState"
});
r.Object({
    periodKey: w2,
    expectedStateVersion: Qd
}, {
    additionalProperties: !1,
    $id: "TaskClaimRequest"
});
r.Object({
    periodKey: w2,
    expectedStateVersion: Qd,
    objectiveId: L5
}, {
    additionalProperties: !1,
    $id: "RecoveryClaimRequest"
});
const gy = t5({
    effectId: L5,
    ledgerReference: L5,
    kind: r.String(),
    amountGameRub: K,
    claimedAt: e5
});
r.Object({
    authority: r.Literal("server"),
    receiptId: K,
    replayed: r.Boolean(),
    requestId: r.String(),
    effects: r.Array(gy, {
        minItems: 1,
        maxItems: 2
    }),
    totalGameRub: K,
    nextState: qd
}, {
    additionalProperties: !1,
    $id: "RewardMutation"
});
r.Object({
    authority: r.Literal("server"),
    serverObservedAt: e5,
    notifications: r.Array(t5({
        id: L5,
        type: r.Literal("RECOVERY_AVAILABLE"),
        text: r.Literal("У вас появилось новое задание"),
        objectiveId: L5,
        createdAt: e5,
        expiresAt: e5,
        seen: r.Boolean(),
        active: r.Boolean()
    }), {
        maxItems: 50
    })
}, {
    additionalProperties: !1,
    $id: "Notifications"
});
r.Object({
    authority: r.Literal("server"),
    notificationId: L5,
    seenAt: e5,
    receiptId: K,
    replayed: r.Boolean(),
    requestId: r.String()
}, {
    additionalProperties: !1,
    $id: "NotificationSeen"
});
r.Object({
    authority: r.Literal("server"),
    valid: r.Boolean(),
    reason: z(Gt)
}, {
    additionalProperties: !1,
    $id: "ReferralResolution"
});
const Lu = t5({
    paidComponents: K,
    saves: K,
    activeDates: r.Integer({
        minimum: 0
    }),
    qualifiedAt: z(e5),
    state: r.Union(["NOT_ATTRIBUTED", "IN_PROGRESS", "PENDING", "PAID"].map(e => r.Literal(e))),
    pendingReason: z(Gt),
    inviterCreditGameRub: K,
    inviteeCreditGameRub: K,
    paidAt: z(e5)
})
  , yy = r.Object({
    authority: r.Literal("server"),
    contractVersion: r.Literal("nomerok.m8.v1"),
    serverObservedAt: e5,
    code: r.String({
        pattern: "^[A-Za-z0-9_-]{22}$"
    }),
    inviteLink: r.String({
        pattern: "^/[?]ref="
    }),
    attribution: t5({
        bound: r.Boolean(),
        depth: z(r.Integer({
            minimum: 1,
            maximum: 2
        })),
        boundAt: z(e5)
    }),
    targets: t5({
        paidComponents: r.Literal("100"),
        saves: r.Literal("3"),
        activeDates: r.Literal(3),
        activityDatePolicy: r.Literal("CIVIL_MOSCOW")
    }),
    progress: Lu,
    invites: r.Array(t5({
        id: L5,
        progress: Lu
    }), {
        maxItems: 50
    }),
    nextCursor: z(r.String()),
    cap: t5({
        used: r.Integer({
            minimum: 0,
            maximum: 10
        }),
        limit: r.Literal(10),
        windowHours: r.Literal(720),
        nextPossibleReleaseAt: z(e5)
    })
}, {
    additionalProperties: !1,
    $id: "Referrals"
})
  , x3 = r.Union(["ALL", "PLATES", "TRADES", "REWARDS", "AUCTIONS"].map(e => r.Literal(e)))
  , bn = t5({
    frameId: r.Optional(z(r.String())),
    version: r.Optional(r.String()),
    id: z(L5),
    lifeId: z(L5),
    regionCode: r.String(),
    digits: r.String(),
    letters: r.String(),
    displayTier: z(r.String()),
    prestige: z(r.String()),
    intrinsicGameRub: z(Wd)
})
  , Ey = t5({
    id: L5,
    type: r.String(),
    category: x3,
    occurredAt: e5,
    sourceVersion: r.String(),
    projectionVersion: r.String(),
    plate: z(bn),
    previousPlate: z(bn),
    references: t5({
        receiptId: z(K),
        listingId: z(L5),
        auctionId: z(L5)
    }),
    money: t5({
        grossGameRub: K,
        feeGameRub: K,
        netGameRub: nn,
        freeDeltaGameRub: nn,
        heldDeltaGameRub: nn,
        economicDeltaGameRub: nn
    }),
    breakdown: r.Array(t5({
        kind: r.String(),
        amountGameRub: nn
    }), {
        maxItems: 16
    })
});
r.Object({
    authority: r.Literal("server"),
    category: x3,
    items: r.Array(Ey, {
        maxItems: 50
    }),
    asOf: e5,
    projection: k3,
    nextCursor: z(r.String()),
    serverObservedAt: e5
}, {
    additionalProperties: !1,
    $id: "History"
});
const D3 = r.Union(["money", "collection", "rarity"].map(e => r.Literal(e)))
  , hy = t5({
    numerator: K,
    denominator: K,
    definitionVersion: r.Literal("R2_2_NATURAL_DL_FIXED_REGION_V1"),
    approximateOneIn: r.String(),
    isApproximate: r.Literal(!0),
    display: r.String()
})
  , Qa = t5({
    rank: K,
    player: t5({
        publicPlayerId: r.Optional(L5),
        nickname: r.String(),
        avatarUrl: z(r.String()),
        avatarColor: r.Optional(r.String({
            pattern: "^#[0-9A-Fa-f]{6}$"
        })),
        profileVersion: r.Optional(K)
    }),
    score: z(Wd),
    assetCount: K,
    currentScoreSince: e5,
    scoreSinceBasis: r.Union(["VERIFIED_EVENT", "ACTIVATION_BOUNDARY"].map(e => r.Literal(e))),
    plate: z(bn),
    probability: z(hy)
})
  , Xd = {
    authority: r.Literal("server"),
    kind: D3,
    definitionVersion: r.String(),
    period: r.Literal("CURRENT"),
    snapshotId: z(L5),
    asOf: e5,
    projection: k3,
    serverObservedAt: e5
};
r.Object({
    ...Xd,
    rows: r.Array(Qa, {
        maxItems: 50
    }),
    nextCursor: z(r.String())
}, {
    additionalProperties: !1,
    $id: "Tops"
});
r.Object({
    ...Xd,
    me: z(Qa),
    neighbors: r.Array(Qa, {
        maxItems: 4
    }),
    unavailableReason: z(Gt)
}, {
    additionalProperties: !1,
    $id: "TopMe"
});
const U3 = {
    limit: r.Optional(r.String({
        pattern: "^([1-9]|[1-4][0-9]|50)$"
    })),
    cursor: r.Optional(r.String({
        minLength: 1,
        maxLength: 5600
    }))
};
t5(U3);
t5({
    ...U3,
    category: r.Optional(x3)
});
t5({
    ...U3,
    kind: D3,
    snapshotId: r.Optional(L5)
});
t5({
    kind: D3,
    snapshotId: r.Optional(L5)
});
t5({
    code: r.String({
        maxLength: 200
    })
});
t5({
    taskId: r.Union([r.String({
        pattern: "^(M1_[DW][1-5]|LEGACY_[A-Z0-9_]+)$",
        maxLength: 100
    }), r.Union(["D_SPIN_60", "D_COMPLETE_20", "D_RARE_3", "W_SPIN_420", "W_COMPLETE_140", "W_RARE_20", "W_PAID_PARTS", "W_FULL_RESULTS", "W_PURPLE_PLUS"].map(e => r.Literal(e)))])
});
t5({
    notificationId: L5
});
const W = e => r.Object(e, {
    additionalProperties: !1
})
  , E5 = r.String({
    format: "uuid"
})
  , l5 = r.String()
  , pe = e => r.Union([e, r.Null()])
  , F3 = r.Union(["RU", "BY", "KZ"].map(e => r.Literal(e)));
W({
    version: l5,
    countries: r.Array(W({
        country: F3,
        title: l5,
        format: l5,
        status: r.Union([r.Literal("AVAILABLE"), r.Literal("BLOCKED")]),
        digitsLength: r.Integer(),
        lettersLength: r.Integer(),
        alphabet: pe(l5),
        regionCodes: r.Array(l5),
        blockedReasons: r.Array(l5)
    }))
});
const Zd = W({
    country: F3,
    format: r.Union(["RU_PRIVATE_V1", "BY_PRIVATE_V1", "KZ_PRIVATE_V1"].map(e => r.Literal(e))),
    regionCode: r.String({
        pattern: "^[0-9]{1,3}$"
    }),
    digits: r.String({
        pattern: "^[0-9]{3,4}$"
    }),
    letters: r.String({
        minLength: 2,
        maxLength: 3
    }),
    identityVersion: r.Literal(2),
    publicPlateId: pe(E5)
})
  , $3 = W({
    xp: r.Integer({
        minimum: 0,
        maximum: 495e3
    }),
    level: r.Integer({
        minimum: 1,
        maximum: 100
    }),
    xpIntoLevel: r.Integer({
        minimum: 0
    }),
    xpForNextLevel: r.Integer({
        minimum: 0
    }),
    xpToNextLevel: r.Integer({
        minimum: 0
    }),
    capped: r.Boolean(),
    policyVersion: r.Literal("XP_COLLECTOR_V1"),
    enabled: r.Optional(r.Boolean()),
    policyStartedAt: pe(r.String({
        format: "date-time"
    })),
    version: N
})
  , Sy = W({
    id: l5,
    title: l5,
    description: l5,
    economicEffect: r.Literal("NONE"),
    basis: r.Literal("LITERAL")
})
  , M3 = W({
    descriptor: Zd,
    lifeId: E5,
    version: N,
    frameId: pe(l5),
    displayTier: r.Union(["GRAY", "BLUE", "PURPLE", "RED", "GOLD"].map(e => r.Literal(e))),
    intrinsicGameRub: A,
    acquiredAt: r.String({
        format: "date-time"
    }),
    labels: r.Array(Sy),
    tradeAvailable: r.Boolean()
});
W({
    plate: M3,
    valuationVersion: l5,
    payoutGameRub: pe(A),
    displayEstimate: r.Optional(pe(W({
        amountGameRub: A,
        policyVersion: l5,
        reasons: r.Array(W({
            code: l5,
            text: l5
        }))
    }))),
    detailAvailable: r.Boolean(),
    reasons: r.Array(W({
        title: l5,
        detail: l5
    })),
    unavailableReason: pe(l5)
});
W({
    publicPlayerId: E5,
    nickname: l5,
    avatarUrl: pe(l5),
    avatarColor: pe(l5),
    progress: $3,
    collectionCount: r.Integer({
        minimum: 0
    }),
    bestPlate: pe(M3)
});
W({
    cursor: r.Optional(l5),
    plateId: r.Optional(E5),
    country: r.Optional(F3),
    displayTier: r.Optional(r.Union(["GRAY", "BLUE", "PURPLE", "RED", "GOLD"].map(e => r.Literal(e)))),
    query: r.Optional(r.String({
        maxLength: 32
    }))
});
W({
    items: r.Array(M3, {
        maxItems: 24
    }),
    nextCursor: pe(l5)
});
W({
    plateId: E5,
    lifeId: E5,
    expectedVersion: N,
    favorite: r.Boolean(),
    closePendingOffers: r.Optional(r.Boolean())
});
W({
    plateId: E5,
    favorite: r.Boolean(),
    version: N,
    closedOffers: r.Integer({
        minimum: 0
    }),
    receiptId: N,
    replayed: r.Boolean()
});
W({
    accountId: E5,
    progress: $3,
    messagesVersion: N,
    receiveOffers: r.Boolean(),
    blockedPlayerIds: r.Array(E5),
    favorites: r.Array(W({
        plateId: E5,
        lifeId: E5,
        version: N
    })),
    unreadCount: r.Integer({
        minimum: 0
    })
});
const Jd = W({
    plateId: E5,
    lifeId: E5,
    expectedVersion: N
});
W({
    items: r.Array(Jd, {
        minItems: 1,
        maxItems: 50
    })
});
W({
    quoteId: E5,
    digest: r.String({
        pattern: "^[a-f0-9]{64}$"
    }),
    expiresAt: r.String({
        format: "date-time"
    }),
    items: r.Array(W({
        ...Jd.properties,
        payoutGameRub: A
    }), {
        minItems: 1,
        maxItems: 50
    }),
    totalGameRub: A,
    receiptId: N,
    replayed: r.Boolean()
});
const Ly = W({
    quoteId: E5,
    digest: r.String({
        pattern: "^[a-f0-9]{64}$"
    })
});
W({
    state: r.Literal("confirmed"),
    plateIds: r.Array(E5, {
        minItems: 1,
        maxItems: 50
    }),
    payoutGameRub: A,
    balanceGameRub: A,
    receiptId: N
});
const e0 = r.Union(["PENDING", "ACCEPTED", "REJECTED", "CANCELLED", "EXPIRED", "UNAVAILABLE"].map(e => r.Literal(e)));
W({
    direction: r.Union([r.Literal("BUY"), r.Literal("SELL")]),
    counterpartyId: E5,
    plateId: E5,
    priceGameRub: A
});
const B3 = W({
    id: E5,
    version: N,
    status: e0,
    direction: r.Union([r.Literal("BUY"), r.Literal("SELL")]),
    incoming: r.Boolean(),
    viewerRole: r.Union([r.Literal("BUYER"), r.Literal("SELLER")]),
    peer: W({
        id: E5,
        nickname: l5,
        avatarColor: pe(l5)
    }),
    plate: bn,
    grossGameRub: A,
    feeGameRub: A,
    netGameRub: A,
    termsVersion: l5,
    createdAt: r.String({
        format: "date-time"
    }),
    expiresAt: r.String({
        format: "date-time"
    }),
    updatedAt: r.String({
        format: "date-time"
    })
})
  , Iy = W({
    ...Ly.properties,
    expiresAt: r.String({
        format: "date-time"
    }),
    purpose: r.Union([r.Literal("CREATE"), r.Literal("ACCEPT")]),
    grossGameRub: A,
    feeGameRub: A,
    netGameRub: A,
    termsVersion: l5,
    plate: bn,
    counterpartyId: E5
});
W({
    quote: pe(Iy),
    offer: pe(B3),
    receiptId: N,
    replayed: r.Boolean()
});
W({
    offer: B3,
    receiptId: N,
    replayed: r.Boolean()
});
W({
    expectedVersion: N
});
const vy = W({
    id: E5,
    sequence: N,
    status: e0,
    occurredAt: r.String({
        format: "date-time"
    }),
    read: r.Boolean(),
    offer: B3
});
W({
    cursor: r.Optional(l5),
    direction: r.Optional(r.Union([r.Literal("INCOMING"), r.Literal("SENT")]))
});
W({
    items: r.Array(vy, {
        maxItems: 24
    }),
    nextCursor: pe(l5),
    unreadCount: r.Integer({
        minimum: 0
    })
});
W({
    eventIds: r.Array(E5, {
        maxItems: 24,
        minItems: 1
    })
});
W({
    changed: r.Boolean(),
    receiptId: N,
    replayed: r.Boolean()
});
W({
    receiveOffers: r.Boolean()
});
W({
    playerId: E5,
    blocked: r.Boolean()
});
const t0 = r.Union([r.Literal("digits"), r.Literal("letters")])
  , u2 = r.Union([r.Literal("A"), r.Literal("B")])
  , w1 = r.Union([r.Literal("GRAY"), r.Literal("BLUE"), r.Literal("PURPLE"), r.Literal("RED"), r.Literal("GOLD")])
  , H2 = r.Union([r.Literal("NONE"), r.Literal("REGULAR"), r.Literal("JACKPOT")]);
r.Union([r.Literal("natural"), r.Literal("first_hour_assistance"), r.Literal("admin_tagged"), r.Literal("legacy_recovered")]);
const g2 = r.Union([r.String(), r.Null()])
  , Oy = r.Object({
    subjectId: r.String({
        pattern: "^[a-z][a-z0-9_]{0,63}$"
    }),
    regionCode: r.String({
        pattern: "^[0-9]{2,3}$"
    }),
    componentSpinPriceGameRub: A,
    replacementSpinPriceGameRub: r.Optional(A),
    replacementCreditGameRub: A
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    pricingPolicyVersion: r.Optional(r.String()),
    economyConfigHash: h1,
    rngConfigVersion: v2,
    valuationVersion: h1,
    regionCatalogue: r.Array(Oy, {
        minItems: 137,
        maxItems: 137
    }),
    rarityLabels: r.Object({
        GRAY: r.Literal("Обычный"),
        BLUE: r.Literal("Редкий"),
        PURPLE: r.Literal("Очень редкий"),
        RED: r.Literal("Элитный"),
        GOLD: r.Literal("Легендарный")
    }, {
        additionalProperties: !1
    }),
    autoCadenceMilliseconds: r.Object({
        component: r.Literal(1330),
        wholePlate: r.Literal(1710)
    }, {
        additionalProperties: !1
    }),
    collection: r.Object({
        initialCapacity: r.Union([r.Literal(50), r.Literal(100)]),
        expansionSlots: r.Literal(50),
        expansionPriceGameRub: A
    }, {
        additionalProperties: !1
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "R2_2GameConfig",
    additionalProperties: !1
});
const n0 = r.Object({
    displayTier: w1,
    prestige: H2,
    intrinsicGameRub: r.Number({
        exclusiveMinimum: 0
    }),
    immediateSellGameRub: A,
    saveRewardGameRub: A,
    expiresAt: r.Union([r.String({
        format: "date-time"
    }), r.Null()])
}, {
    additionalProperties: !1
})
  , Ry = r.Object({
    canSelectRegion: r.Boolean(),
    regionChangeRequiresDiscard: r.Boolean(),
    canSpinDigits: r.Boolean(),
    canSpinLetters: r.Boolean(),
    canSave: r.Boolean(),
    canImmediateSell: r.Boolean(),
    canExitOwnedEdit: r.Boolean(),
    canDiscardOwnedEditReplacement: r.Boolean()
}, {
    additionalProperties: !1
})
  , Iu = r.Object({
    id: r.String({
        format: "uuid"
    }),
    slot: u2,
    regionSubjectId: g2,
    regionCode: g2,
    digits: g2,
    letters: g2,
    digitsPaid: r.Boolean(),
    lettersPaid: r.Boolean(),
    pricingPolicyVersion: r.Optional(r.String()),
    nextPricesGameRub: r.Optional(r.Object({
        digits: r.Union([A, r.Null()]),
        letters: r.Union([A, r.Null()]),
        whole: r.Union([A, r.Null()])
    }, {
        additionalProperties: !1
    })),
    result: r.Union([n0, r.Null()]),
    ownedEditPlateId: g2,
    ownedEditState: r.Union([r.Literal("none"), r.Literal("preview"), r.Literal("replacement_pending_save")]),
    actions: Ry,
    draftExpiresAt: r.String({
        format: "date-time"
    }),
    version: N
}, {
    additionalProperties: !1
})
  , Ay = r.Object({
    progress: r.Optional($3),
    authority: r.Literal("server"),
    principalMode: r.Union([r.Literal("guest"), r.Literal("registered")]),
    slots: r.Object({
        A: Iu,
        B: r.Union([Iu, r.Null()])
    }, {
        additionalProperties: !1
    }),
    entitlements: r.Object({
        auto: r.Boolean(),
        double: r.Boolean()
    }, {
        additionalProperties: !1
    }),
    collection: r.Object({
        capacity: r.Integer({
            minimum: 50
        }),
        used: r.Integer({
            minimum: 0
        }),
        nextExpansionPriceGameRub: r.Optional(A)
    }, {
        additionalProperties: !1
    }),
    legacyPartial: r.Union([r.Object({
        available: r.Literal(!0),
        expectedSavedDraftVersion: N
    }, {
        additionalProperties: !1
    }), r.Null()]),
    balance: r.Object({
        asset: r.Literal("GAME_RUB"),
        amount: A,
        version: N
    }, {
        additionalProperties: !1
    }),
    economy: r.Object({
        configHash: h1,
        rngConfigVersion: v2,
        valuationVersion: h1
    }, {
        additionalProperties: !1
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "R2_2GameState",
    additionalProperties: !1
});
r.Object({
    ...ny.properties,
    state: r.Optional(Ay)
}, {
    additionalProperties: !1
});
r.Object({
    slot: r.Optional(u2),
    subjectId: r.String({
        pattern: "^[a-z][a-z0-9_]{0,63}$"
    }),
    regionCode: r.String({
        pattern: "^[0-9]{2,3}$"
    }),
    expectedDraftVersion: N,
    discardCurrentResult: r.Optional(r.Boolean())
}, {
    additionalProperties: !1
});
r.Object({
    slot: r.Optional(u2),
    axis: t0,
    expectedDraftVersion: N,
    expectedPricingPolicyVersion: r.Optional(r.String({
        minLength: 1,
        maxLength: 64
    }))
}, {
    additionalProperties: !1
});
r.Object({
    slot: r.Optional(u2),
    expectedDraftVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    expectedPlateVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    slot: r.Optional(u2),
    expectedPlateVersion: N,
    expectedDraftVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    expectedDraftVersion: N,
    expectedSavedDraftVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    expectedSavedDraftVersion: N
}, {
    additionalProperties: !1
});
const r0 = r.Union([r.Literal("DIGITS_ONLY"), r.Literal("LETTERS_ONLY"), r.Literal("WHOLE_PLATE")])
  , i0 = r.Union([r.Literal("NONE"), r.Literal("SELL"), r.Literal("SAVE")])
  , _y = r.Object({
    slot: u2,
    mode: r0,
    target: w1,
    terminalAction: i0,
    expectedDraftVersion: N,
    expectedPricingPolicyVersion: r.Optional(r.String({
        minLength: 1,
        maxLength: 64
    }))
}, {
    additionalProperties: !1
});
r.Object({
    slots: r.Array(_y, {
        minItems: 1,
        maxItems: 2
    }),
    balanceFloorGameRub: r.Optional(A)
}, {
    additionalProperties: !1
});
r.Object({
    confirmedResult: r.Optional(Yd),
    authority: r.Literal("server"),
    receiptId: r.String(),
    requestId: r.String(),
    slot: u2,
    axis: t0,
    deliveredValue: r.String(),
    digits: g2,
    letters: g2,
    draftVersion: N,
    regionCode: r.String(),
    resultDisplayTier: r.Union([w1, r.Null()]),
    resultPrestige: r.Union([H2, r.Null()]),
    grossDebitGameRub: A,
    replacementCreditGameRub: A,
    balanceGameRub: A,
    pricingPolicyVersion: r.Optional(r.String()),
    chargedGameRub: r.Optional(A),
    axisDebitsGameRub: r.Optional(r.Object({
        digits: A,
        letters: A
    }, {
        additionalProperties: !1
    }))
}, {
    $id: "R2_2SpinResponse",
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    receiptId: r.String(),
    requestId: r.String(),
    balanceGameRub: A,
    draftVersion: r.Optional(N),
    plateId: r.Optional(r.String({
        format: "uuid"
    })),
    payoutGameRub: r.Optional(A),
    rewardGameRub: r.Optional(A),
    capacity: r.Optional(r.Integer({
        minimum: 50
    })),
    usedCapacity: r.Optional(r.Integer({
        minimum: 0
    })),
    ownedEditState: r.Optional(r.Union([r.Literal("preview"), r.Literal("replacement_pending_save"), r.Literal("closed")])),
    destructiveDiscardAvailable: r.Optional(r.Boolean())
}, {
    $id: "R2_2LifecycleResponse",
    additionalProperties: !1
});
const Py = r.Object({
    confirmedResult: r.Optional(Yd),
    slot: u2,
    mode: r0,
    target: w1,
    terminalAction: i0,
    hit: r.Boolean(),
    resultDisplayTier: r.Union([w1, r.Null()]),
    resultPrestige: r.Union([H2, r.Null()]),
    chargedGameRub: A,
    replacementCreditGameRub: A,
    draftVersion: N,
    plateId: r.Optional(r.String({
        format: "uuid"
    })),
    terminalPayoutGameRub: r.Optional(A),
    stopReason: r.Union([r.Literal("TARGET_HIT"), r.Literal("CONTINUE"), r.Literal("INSUFFICIENT_BALANCE"), r.Literal("BALANCE_FLOOR_REACHED"), r.Literal("ADMISSION_INEQUALITY"), r.Literal("AXIS_POOL_EXHAUSTED"), r.Literal("COLLECTION_FULL"), r.Literal("PRICING_POLICY_CHANGED")])
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    receiptId: r.String(),
    requestId: r.String(),
    outcomes: r.Array(Py, {
        minItems: 1,
        maxItems: 2
    }),
    chargedGameRub: A,
    replacementCreditGameRub: A,
    balanceFloorGameRub: r.Union([A, r.Null()]),
    cadenceBaseMilliseconds: r.Union([r.Literal(1330), r.Literal(1710)]),
    allTargetsHit: r.Boolean(),
    balanceGameRub: A
}, {
    $id: "R2_2AutoCycleResponse",
    additionalProperties: !1
});
r.Object({
    cursor: r.Optional(r.String({
        pattern: "^[A-Za-z0-9_-]{1,512}$"
    })),
    limit: r.Optional(r.String({
        pattern: "^(?:[1-9]|[1-4][0-9]|50)$"
    }))
}, {
    additionalProperties: !1
});
const o0 = r.Object({
    descriptor: r.Optional(Zd),
    favorite: r.Optional(r.Boolean()),
    intrinsicGameRub: r.Optional(A),
    lifeId: r.Optional(r.Union([r.String({
        format: "uuid"
    }), r.Null()])),
    frameId: r.Optional(r.Union([r.String(), r.Null()])),
    plateId: r.String({
        format: "uuid"
    }),
    regionCode: r.String(),
    digits: r.String(),
    letters: r.String(),
    displayTier: w1,
    prestige: H2,
    assetLifecycle: r.Union([r.Literal("ordinary_editable"), r.Literal("rare_immutable")]),
    giftedByOwner: r.Boolean(),
    saveRewardPaid: r.Boolean(),
    acquiredAt: r.String({
        format: "date-time"
    }),
    version: N,
    operationLock: r.Union([r.Literal("marketplace"), r.Literal("owned_edit"), r.Literal("other"), r.Null()]),
    actions: r.Object({
        edit: r.Boolean(),
        marketplaceList: r.Boolean(),
        systemLiquidationGameRub: r.Union([A, r.Null()])
    }, {
        additionalProperties: !1
    })
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    items: r.Array(o0, {
        maxItems: 50
    }),
    nextCursor: r.Union([r.String(), r.Null()]),
    capacity: r.Integer({
        minimum: 50
    }),
    usedCapacity: r.Integer({
        minimum: 0
    }),
    requestId: r.String()
}, {
    $id: "R2_2CollectionResponse",
    additionalProperties: !1
});
r.Object({
    plateId: r.String({
        format: "uuid"
    })
}, {
    additionalProperties: !1
});
const po = r.String({
    pattern: "^[A-Za-z0-9_-]{1,512}$"
})
  , a0 = r.String({
    pattern: "^(?:[1-9]|[1-4][0-9]|50)$"
})
  , mo = r.String({
    pattern: "^[1-9][0-9]{0,18}$"
})
  , j3 = r.Union([r.Literal("GRAY"), r.Literal("BLUE"), r.Literal("PURPLE"), r.Literal("RED"), r.Literal("GOLD")])
  , l0 = r.Union([r.Literal("NONE"), r.Literal("REGULAR"), r.Literal("JACKPOT")])
  , Ty = r.Union([r.Literal("new"), r.Literal("price"), r.Literal("rare"), r.Literal("growth")])
  , s0 = r.Union([r.Literal("active"), r.Literal("sold"), r.Literal("delisted"), r.Literal("expired")])
  , Ny = r.Object({
    priceGameRub: A,
    comparableCount: r.Integer({
        minimum: 1,
        maximum: 16
    }),
    tier: r.Union([r.Literal("PATTERN"), r.Literal("CLASS_PAIR")]),
    lastSaleAt: r.String({
        format: "date-time"
    })
}, {
    additionalProperties: !1
})
  , V3 = r.Object({
    id: r.String({
        format: "uuid"
    }),
    plate: r.Object({
        lifeId: r.Optional(r.Union([r.String({
            format: "uuid"
        }), r.Null()])),
        frameId: r.Optional(r.Union([r.String(), r.Null()])),
        id: r.String({
            format: "uuid"
        }),
        regionSubjectId: r.String(),
        regionCode: r.String(),
        digits: r.String({
            pattern: "^(?!000)[0-9]{3}$"
        }),
        letters: r.String({
            pattern: "^[АВЕКМНОРСТУХ]{3}$"
        }),
        rarity: C2,
        displayTier: r.Optional(j3),
        prestige: r.Optional(l0),
        snapshot: w3,
        version: N
    }, {
        additionalProperties: !1
    }),
    sellerNickname: r.String({
        minLength: 3,
        maxLength: 24
    }),
    own: r.Boolean(),
    status: s0,
    askGameRub: A,
    publicationFeeGameRub: A,
    usedFreePublication: r.Boolean(),
    listedAt: r.String({
        format: "date-time"
    }),
    expiresAt: r.String({
        format: "date-time"
    }),
    version: N,
    referenceAtListing: r.Union([Ny, r.Null()]),
    referenceGrowthBasisPoints: r.Union([r.Integer(), r.Null()])
}, {
    additionalProperties: !1
})
  , ur = r.Object({
    serverDay: r.String({
        format: "date"
    }),
    serverDayPolicyVersion: r.String({
        minLength: 1,
        maxLength: 100
    }),
    technicalTimeZone: r.Union([r.Literal("UTC"), r.Literal("Europe/Moscow")]),
    finalTimezonePolicyPendingMilestone: r.Union([r.Literal("M8"), r.Null()]),
    successfulPublications: r.Integer({
        minimum: 0,
        maximum: 20
    }),
    remainingPublications: r.Integer({
        minimum: 0,
        maximum: 20
    }),
    freePublications: r.Integer({
        minimum: 0,
        maximum: 3
    }),
    remainingFreePublications: r.Integer({
        minimum: 0,
        maximum: 3
    }),
    activeListings: r.Integer({
        minimum: 0,
        maximum: 10
    }),
    remainingActiveListings: r.Integer({
        minimum: 0,
        maximum: 10
    })
}, {
    additionalProperties: !1
});
r.Object({
    cursor: r.Optional(po),
    limit: r.Optional(a0),
    query: r.Optional(r.String({
        maxLength: 32
    })),
    regionCode: r.Optional(r.String({
        pattern: "^[0-9]{2,3}$"
    })),
    rarity: r.Optional(C2),
    displayTier: r.Optional(j3),
    maxAskGameRub: r.Optional(mo),
    sort: r.Optional(Ty)
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    items: r.Array(V3, {
        maxItems: 50
    }),
    nextCursor: r.Union([po, r.Null()]),
    publicationStatus: r.Union([ur, r.Null()]),
    serverObservedAt: r.String({
        format: "date-time"
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "MarketBrowseResponse",
    additionalProperties: !1
});
r.Object({
    listingId: r.String({
        format: "uuid"
    })
}, {
    additionalProperties: !1
});
r.Object({
    plateId: r.String({
        format: "uuid"
    }),
    askGameRub: mo
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    plateId: r.String({
        format: "uuid"
    }),
    askGameRub: mo,
    publicationFeeGameRub: A,
    sellerFeeGameRub: A,
    conditionalFlipTaxGameRub: A,
    flipTaxAppliedNow: r.Boolean(),
    flipTaxWindowHours: r.Integer({
        minimum: 1
    }),
    flipTaxUntil: r.Union([r.String({
        format: "date-time"
    }), r.Null()]),
    sellerNetGameRubNow: A,
    serverObservedAt: r.String({
        format: "date-time"
    }),
    usesFreePublication: r.Boolean(),
    listingDurationDays: r.Integer({
        minimum: 1
    }),
    publicationStatus: ur,
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "MarketPublicationPreview",
    additionalProperties: !1
});
r.Object({
    expectedPublicationFeeGameRub: r.Optional(A),
    plateId: r.String({
        format: "uuid"
    }),
    expectedPlateVersion: N,
    askGameRub: mo
}, {
    additionalProperties: !1
});
r.Object({
    expectedListingVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    expectedListingVersion: N
}, {
    additionalProperties: !1
});
const Cy = r.Object({
    grossGameRub: A,
    buyerDebitGameRub: A,
    buyerFeeGameRub: r.Literal("0"),
    sellerCreditGrossGameRub: A,
    sellerFeeGameRub: A,
    flipTaxGameRub: A,
    sellerNetGameRub: A,
    flipTaxApplied: r.Boolean()
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    action: r.Union([r.Literal("listed"), r.Literal("bought"), r.Literal("delisted")]),
    listingId: r.String({
        format: "uuid"
    }),
    plateId: r.String({
        format: "uuid"
    }),
    listingStatus: s0,
    publicationFeeGameRub: r.Optional(A),
    settlement: r.Optional(Cy),
    publicationStatus: r.Optional(ur),
    occurredAt: r.String({
        format: "date-time"
    }),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "MarketMutationResponse",
    additionalProperties: !1
});
const u0 = r.Object({
    id: r.String({
        format: "uuid"
    }),
    plateId: r.String({
        format: "uuid"
    }),
    digits: r.String({
        pattern: "^(?!000)[0-9]{3}$"
    }),
    letters: r.String({
        pattern: "^[АВЕКМНОРСТУХ]{3}$"
    }),
    regionCode: r.String({
        pattern: "^[0-9]{2,3}$"
    }),
    rarity: C2,
    displayTier: r.Optional(j3),
    prestige: r.Optional(l0),
    sellerNickname: r.String({
        minLength: 3,
        maxLength: 24
    }),
    buyerNickname: r.String({
        minLength: 3,
        maxLength: 24
    }),
    priceGameRub: A,
    completedAt: r.String({
        format: "date-time"
    }),
    comparableIncluded: r.Boolean()
}, {
    additionalProperties: !1
});
r.Object({
    cursor: r.Optional(po),
    limit: r.Optional(a0)
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    items: r.Array(u0, {
        maxItems: 50
    }),
    nextCursor: r.Union([po, r.Null()]),
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "MarketHistoryResponse",
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    activeListings: r.Array(V3, {
        maxItems: 10
    }),
    recentSales: r.Array(u0, {
        maxItems: 50
    }),
    publicationStatus: ur,
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    $id: "MarketOwnResponse",
    additionalProperties: !1
});
const g1 = r.String({
    format: "uuid"
})
  , Te = r.String({
    format: "date-time"
})
  , c0 = r.String({
    pattern: "^[1-9][0-9]{0,18}$"
})
  , go = r.String({
    pattern: "^[A-Za-z0-9_-]{1,512}$"
})
  , d0 = r.String({
    pattern: "^(?:[1-9]|[1-4][0-9]|50)$"
})
  , vu = r.Union([A, r.Null()])
  , zn = r.Union(["ACTIVE_NO_BID", "ACTIVE_WITH_BID", "SETTLING", "SETTLED", "CANCELLED", "CLOSED_NO_BID"].map(e => r.Literal(e)));
r.Object({
    auctionId: g1
}, {
    additionalProperties: !1
});
const f0 = r.Object({
    plateId: g1,
    expectedPlateVersion: N,
    startGameRub: c0,
    durationHours: r.Union([1, 3, 6, 12, 24].map(e => r.Literal(e)))
}, {
    additionalProperties: !1
});
r.Object({
    ...f0.properties,
    quoteId: g1
}, {
    additionalProperties: !1
});
r.Object({
    ...f0.properties,
    authority: r.Literal("server"),
    quoteId: g1,
    creationFeeGameRub: A,
    sellerFeeGameRub: A,
    policyVersion: r.String(),
    expiresAt: Te,
    serverObservedAt: Te,
    requestId: r.String()
}, {
    additionalProperties: !1
});
r.Object({
    amountGameRub: c0,
    expectedAuctionVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    expectedAuctionVersion: N
}, {
    additionalProperties: !1
});
r.Object({
    cursor: r.Optional(go),
    limit: r.Optional(d0)
}, {
    additionalProperties: !1
});
r.Object({
    cursor: r.Optional(go),
    limit: r.Optional(d0),
    scope: r.Optional(r.Union([r.Literal("public"), r.Literal("selling"), r.Literal("bidding")]))
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    action: r.Union(["created", "bid_accepted", "cancelled", "settled", "closed_no_bid"].map(e => r.Literal(e))),
    auctionId: g1,
    version: N,
    state: zn,
    endAt: Te,
    serverObservedAt: Te,
    requestId: r.String({
        minLength: 1,
        maxLength: 128
    })
}, {
    additionalProperties: !1
});
const G3 = r.Object({
    id: g1,
    state: zn,
    version: N,
    plate: r.Object({
        lifeId: r.Optional(r.Union([g1, r.Null()])),
        frameId: r.Optional(r.Union([r.String(), r.Null()])),
        version: r.Optional(r.String()),
        id: g1,
        digits: r.String({
            pattern: "^(?!000)[0-9]{3}$"
        }),
        letters: r.String({
            pattern: "^[АВЕКМНОРСТУХ]{3}$"
        }),
        regionCode: r.String({
            pattern: "^[0-9]{2,3}$"
        }),
        displayTier: w1,
        prestige: H2,
        intrinsicGameRub: r.Number({
            ...n0.properties.intrinsicGameRub,
            description: "Persisted Intrinsic of the current asset; independent of auction prices and fees."
        })
    }, {
        additionalProperties: !1
    }),
    sellerNickname: r.String(),
    leaderNickname: r.Union([r.String(), r.Null()]),
    relationship: r.Union([r.Literal("seller"), r.Literal("leader"), r.Literal("bidder"), r.Literal("observer")]),
    startGameRub: A,
    creationFeeGameRub: A,
    currentBidGameRub: vu,
    minimumNextBidGameRub: vu,
    bidCount: A,
    createdAt: Te,
    originalEndAt: Te,
    endAt: Te,
    acceptingBids: r.Boolean(),
    canBid: r.Boolean({
        description: "Personal server snapshot for bidding minimumNextBidGameRub at this version: registered non-seller, open/enabled auction, valid custody/leader lease, full free-wallet funding and collection capacity (own leader lease reused). No reservation or acceptance guarantee; bid independently revalidates transactionally. Identity denials remain HTTP 401/403."
    }),
    canCancel: r.Boolean(),
    terminal: r.Union([r.Object({
        state: zn,
        occurredAt: Te,
        sellerProceedsGameRub: A
    }, {
        additionalProperties: !1
    }), r.Null()])
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    items: r.Array(G3, {
        maxItems: 50
    }),
    nextCursor: r.Union([go, r.Null()]),
    serverObservedAt: Te,
    requestId: r.String()
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    auction: G3,
    serverObservedAt: Te,
    requestId: r.String()
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    auctionId: g1,
    items: r.Array(r.Object({
        id: g1,
        sequence: N,
        amountGameRub: A,
        bidderNickname: r.String(),
        own: r.Boolean(),
        acceptedAt: Te,
        resultingEndAt: Te
    }, {
        additionalProperties: !1
    }), {
        maxItems: 50
    }),
    nextCursor: r.Union([go, r.Null()]),
    serverObservedAt: Te,
    requestId: r.String()
}, {
    additionalProperties: !1
});
const n5 = e => r.Object(e, {
    additionalProperties: !1
})
  , X5 = e => r.Union([e, r.Null()])
  , m5 = e => r.Union(e.map(t => r.Literal(t)))
  , s5 = r.String({
    format: "uuid"
})
  , se = r.String({
    pattern: "^(0|[1-9][0-9]*)$",
    maxLength: 30
})
  , be = r.String({
    format: "date-time"
})
  , p0 = r.String({
    pattern: "^[A-Za-z0-9_-]{43}$",
    writeOnly: !0
})
  , qa = m5(["auto", "double"])
  , cr = m5(["AUTO", "DOUBLE", "BUNDLE", "UPGRADE", "PACK_99", "PACK_199", "PACK_499", "PACK_999", "PACK_2490"])
  , b3 = m5(["CREATED", "PROVIDER_UNKNOWN", "PENDING", "SUCCEEDED", "CANCELED"])
  , z3 = m5(["NOT_READY", "READY", "APPLIED", "NO_GRANT", "REVIEW_REQUIRED"])
  , K3 = m5(["NONE", "PENDING", "PARTIAL", "FULL"])
  , m0 = m5(["NOT_REQUIRED", "REQUIRED", "APPLIED"])
  , H3 = m5(["EXTERNAL_PENDING", "PENDING", "ISSUED", "FAILED"])
  , yo = n5({
    catalogVersion: m5(["M9_CATALOG_V1", "M1_CATALOG_V1"]),
    sku: cr,
    routeId: r.String(),
    amountKopecks: se,
    currency: r.Literal("RUB"),
    offer: r.Optional(X5(Ti)),
    featuresToGrant: r.Array(qa, {
        maxItems: 2,
        uniqueItems: !0
    }),
    fuelAllocations: r.Array(n5({
        feature: qa,
        gameRub: se
    }), {
        maxItems: 2
    }),
    packGameRub: se,
    totalGameRub: se,
    canPurchase: r.Boolean(),
    unavailableReason: X5(m5(["REGISTRATION_REQUIRED", "PURCHASES_DISABLED", "FEATURE_ALREADY_OWNED", "PAID_UPGRADE_REQUIRED", "OVERLAPPING_ORDER"]))
})
  , Ou = n5({
    effective: r.Boolean(),
    unrefundedPaid: r.Boolean(),
    lifetimeFuelIssued: r.Boolean()
});
n5({
    catalogVersion: m5(["M9_CATALOG_V1", "M1_CATALOG_V1"]),
    products: r.Array(yo, {
        minItems: 9,
        maxItems: 9
    }),
    rights: n5({
        auto: Ou,
        double: Ou
    }),
    paymentsEnabled: r.Boolean(),
    currency: r.Literal("RUB"),
    amountUnit: r.Literal("kopeck"),
    gameAmountUnit: r.Literal("game_rub"),
    supportEmail: r.String(),
    commercialEmail: r.String(),
    refunds: n5({
        requestChannel: r.Literal("EMAIL"),
        rightsDecision: r.Literal("MANUAL_AFTER_PROVIDER_VERIFICATION")
    }),
    fiscal: n5({
        status: m5(["READY", "EXTERNAL_PENDING"])
    }),
    providerMode: m5(["TEST", "LIVE"]),
    asOf: be
});
n5({
    sku: cr,
    receiptEmail: r.String({
        minLength: 3,
        maxLength: 254
    }),
    catalogVersion: m5(["M9_CATALOG_V1", "M1_CATALOG_V1"]),
    quoteAmountKopecks: r.Optional(se),
    offerAcceptance: r.Optional(N3)
});
const Y3 = {
    receiptId: se,
    replayed: r.Boolean()
};
n5({
    ...Y3,
    orderId: s5,
    quote: yo,
    paymentState: b3,
    fulfillmentState: z3,
    refundState: K3,
    fiscalState: H3,
    providerMode: m5(["TEST", "LIVE"])
});
const wy = r.Union([n5({
    feature: qa,
    basisId: s5,
    basisKind: r.Literal("PAYMENT")
}), n5({
    ledgerKey: r.String(),
    amountGameRub: se,
    direction: m5(["IN", "OUT"]),
    ledgerReference: s5
})])
  , ky = n5({
    orderId: s5,
    sku: cr,
    quote: yo,
    amountKopecks: se,
    currency: r.Literal("RUB"),
    testMode: r.Optional(r.Boolean()),
    offerAcceptedAt: r.Optional(X5(be)),
    paymentState: b3,
    fulfillmentState: z3,
    refundState: K3,
    refundedKopecks: se,
    rightsDecisionState: m0,
    fiscalState: H3,
    confirmationUrl: X5(r.String({
        maxLength: 4096
    })),
    reconciliationCode: X5(r.String()),
    version: se,
    createdAt: be,
    asOf: be,
    effects: r.Array(wy),
    supportEmail: r.String(),
    returnRedirectIsPaymentProof: r.Literal(!1)
});
n5({
    playerId: s5,
    securityVersion: se,
    email: X5(n5({
        address: r.String(),
        state: m5(["PENDING", "VERIFIED"]),
        expiresAt: X5(be)
    })),
    telegram: n5({
        linked: r.Boolean(),
        linkedAt: X5(be),
        botUsername: X5(r.String()),
        pendingChallengeId: r.Optional(X5(s5))
    }),
    recentPasswordSeconds: r.Literal(300),
    challengeSeconds: r.Literal(900),
    passwordEntry: r.Literal("WEBSITE_ONLY"),
    supportEmail: r.String()
});
const g0 = m5(["EMAIL_SET", "EMAIL_UNLINK", "TELEGRAM_LINK", "TELEGRAM_UNLINK"]);
n5({
    password: r.String({
        maxLength: 512,
        writeOnly: !0
    }),
    action: g0,
    email: r.Optional(r.String({
        maxLength: 254
    }))
});
n5({
    proof: r.String({
        pattern: "^[A-Za-z0-9_-]{43}$"
    }),
    action: g0,
    expiresAt: be
});
const W3 = m5(["EMAIL_VERIFY", "EMAIL_RESET", "TELEGRAM_RESET", "ADMIN_RESET"]);
n5({
    purpose: W3,
    token: p0
});
n5({
    purpose: W3,
    token: p0,
    newPassword: r.Optional(r.String({
        maxLength: 512,
        writeOnly: !0
    }))
});
n5({
    valid: r.Literal(!0),
    purpose: W3,
    consumed: r.Literal(!1),
    passwordEntry: r.Literal("WEBSITE_ONLY")
});
n5({
    ...Y3,
    signInRequired: r.Boolean(),
    securityVersion: r.Optional(se),
    recoveryVersion: r.Optional(se),
    contactId: r.Optional(s5),
    challengeId: r.Optional(s5),
    emailState: r.Optional(m5(["PENDING", "VERIFIED"])),
    delivery: r.Optional(r.Literal("QUEUED")),
    channel: r.Optional(m5(["EMAIL", "TELEGRAM"])),
    linked: r.Optional(r.Boolean()),
    passwordChanged: r.Optional(r.Boolean())
});
n5({
    ...Y3,
    challengeId: s5,
    siteConfirmationRequired: r.Literal(!0),
    botUrl: r.Optional(r.String()),
    oneTimeLinkAvailable: r.Boolean(),
    message: r.String()
});
n5({
    challengeId: s5,
    telegramLabel: X5(r.String()),
    telegramUserId: X5(se),
    state: m5(["EXPIRED_OR_CANCELED", "AWAITING_SITE_CONFIRMATION", "AWAITING_BOT_CONFIRMATION"])
});
n5({
    error: n5({
        code: r.String({
            pattern: "^[A-Z0-9_]{1,100}$"
        }),
        requestId: r.String(),
        retryable: r.Boolean(),
        message: r.String()
    })
});
n5({
    authority: r.Literal("server"),
    contractVersion: r.Literal("nomerok.m9.read.v1"),
    items: r.Array(ky, {
        maxItems: 50
    }),
    total: se,
    asOf: be,
    serverObservedAt: be,
    snapshotId: s5,
    snapshotExpiresAt: be,
    nextCursor: X5(r.String({
        maxLength: 2048
    })),
    filter: n5({}),
    metadata: n5({
        currency: r.Literal("RUB"),
        amountUnit: r.Literal("kopeck"),
        statesAsOf: be
    })
});
n5({
    key: r.String({
        pattern: "^[A-Za-z0-9._:-]{8,200}$"
    })
});
n5({
    state: m5(["ABSENT", "PROCESSING", "COMPLETED", "REFUSED"]),
    orderId: X5(s5),
    failureCode: X5(r.String()),
    asOf: be
});
n5({
    supportEmail: r.String(),
    botUrl: X5(r.String()),
    passwordEntry: r.Literal("WEBSITE_ONLY"),
    accountEnumeration: r.Literal(!1)
});
n5({
    state: m5(["COMPLETED", "NOT_FOUND", "REFUSED", "SUPERSEDED"]),
    receiptId: X5(se),
    challengeId: r.Optional(s5),
    signInRequired: r.Optional(r.Boolean()),
    emailState: r.Optional(m5(["PENDING", "VERIFIED"])),
    passwordChanged: r.Optional(r.Boolean()),
    linked: r.Optional(r.Boolean())
});
m5(["email.set", "email.unlink", "telegram.begin", "telegram.finish", "telegram.unlink", "telegram.cancel"]);
const y0 = r.String({
    maxLength: 2048,
    pattern: "^v1[.][A-Za-z0-9_.-]+$"
})
  , g5 = e => r.Optional(e)
  , _5 = e => r.Union([e, r.Null()])
  , N5 = e => r.Object(e, {
    additionalProperties: !1
})
  , Z5 = e => r.Union(e.map(t => r.Literal(t)))
  , T5 = r.String({
    pattern: "^[0-9]+$",
    maxLength: 100
})
  , _t = r.String({
    pattern: "^[0-9]{1,19}$"
})
  , y1 = r.String({
    format: "date-time"
})
  , sn = r.String({
    format: "uuid"
})
  , E0 = N5({
    cursor: g5(y0),
    limit: g5(r.String({
        pattern: "^(?:[1-9]|[1-4][0-9]|50)$"
    }))
})
  , Q3 = {
    ...E0.properties,
    query: g5(r.String({
        maxLength: 32
    })),
    regionCode: g5(r.String({
        pattern: "^[0-9]{2,3}$"
    })),
    regionCodes: g5(r.String({
        maxLength: 79,
        pattern: "^[0-9]{2,3}(,[0-9]{2,3}){0,19}$"
    })),
    displayTier: g5(w1),
    prestige: g5(H2)
}
  , q3 = {
    query: r.String(),
    regionCodes: r.Array(r.String(), {
        maxItems: 20
    }),
    displayTier: _5(w1),
    prestige: _5(H2)
};
N5({
    ...Q3,
    favorite: g5(r.Literal("true")),
    minValueGameRub: g5(_t),
    maxValueGameRub: g5(_t),
    origin: g5(Z5(["all", "admin", "natural"])),
    lock: g5(Z5(["all", "free", "locked"])),
    lifecycle: g5(Z5(["ordinary_editable", "rare_immutable"])),
    sort: g5(Z5(["new", "old", "value", "valueDesc", "rare"]))
});
N5({
    ...Q3,
    minAskGameRub: g5(_t),
    maxAskGameRub: g5(_t),
    scope: g5(Z5(["public", "selling"])),
    sort: g5(Z5(["new", "old", "price", "priceDesc", "rare", "growth"]))
});
N5({
    ...Q3,
    minBidGameRub: g5(_t),
    maxBidGameRub: g5(_t),
    state: g5(zn),
    scope: g5(Z5(["public", "selling", "bidding"])),
    sort: g5(Z5(["new", "old", "price", "priceDesc", "rare", "ending"]))
});
const xy = {
    authority: r.Literal("server"),
    contractVersion: r.Literal("nomerok.m9.read.v1"),
    total: T5,
    asOf: y1,
    serverObservedAt: y1,
    snapshotId: sn,
    snapshotExpiresAt: y1,
    nextCursor: _5(y0)
}
  , dr = (e, t, n) => N5({
    ...xy,
    items: r.Array(e, {
        maxItems: 50
    }),
    filter: t,
    metadata: n
})
  , Dy = N5({
    ...q3,
    favorite: g5(r.Literal("true")),
    minValueGameRub: _5(T5),
    maxValueGameRub: _5(T5),
    origin: Z5(["all", "admin", "natural"]),
    lock: Z5(["all", "free", "locked"]),
    lifecycle: _5(Z5(["ordinary_editable", "rare_immutable"])),
    sort: Z5(["new", "old", "value", "valueDesc", "rare"])
});
dr(o0, Dy, N5({
    capacity: r.Integer({
        minimum: 100
    }),
    usedCapacity: r.Integer({
        minimum: 0
    }),
    valueBasis: r.Literal("PINNED_INTRINSIC_GAME_RUB"),
    matchedIntrinsicGameRub: r.String({
        pattern: "^[0-9]+(?:[.][0-9]+)?$"
    })
}));
dr(V3, N5({
    ...q3,
    minAskGameRub: _5(T5),
    maxAskGameRub: _5(T5),
    scope: Z5(["public", "selling"]),
    sort: Z5(["new", "old", "price", "priceDesc", "rare", "growth"])
}), N5({
    publicationStatus: _5(ur),
    priceBasis: r.Literal("CURRENT_ASK_GAME_RUB"),
    matchedAskGameRub: T5
}));
dr(G3, N5({
    ...q3,
    minBidGameRub: _5(T5),
    maxBidGameRub: _5(T5),
    state: _5(zn),
    scope: Z5(["public", "selling", "bidding"]),
    sort: Z5(["new", "old", "price", "priceDesc", "rare", "ending"])
}), N5({
    priceBasis: r.Literal("CURRENT_BID_OR_START_GAME_RUB"),
    matchedBidGameRub: T5
}));
const Uy = dr(N5({
    ...yy.properties.invites.items.properties,
    nickname: _5(r.String()),
    avatarUrl: r.Null(),
    boundAt: y1
}), N5({}), N5({
    invited: T5,
    qualified: T5,
    pending: T5,
    paid: T5,
    inviterEarnedGameRub: T5,
    inviteeEarnedGameRub: T5,
    displayIdentityAsOf: y1
}));
N5({
    ...E0.properties,
    regionCode: r.String({
        pattern: "^[0-9]{2,3}$"
    }),
    digits: r.String({
        pattern: "^(?!000)[0-9]{3}$"
    }),
    letters: r.String({
        pattern: "^[АВЕКМНОРСТУХ]{3}$"
    })
});
const h0 = N5({
    numerator: r.String({
        pattern: "^-?[0-9]+$"
    }),
    denominator: r.String({
        pattern: "^[1-9][0-9]*$"
    })
})
  , Ru = N5({
    fromExclusive: y1,
    toInclusive: y1,
    count: T5,
    sumGameRub: T5,
    meanGameRub: _5(h0)
});
dr(N5({
    id: sn,
    channel: Z5(["MARKETPLACE", "AUCTION", "DIRECT_TRADE"]),
    plateId: sn,
    lifeId: _5(sn),
    canonicalKey: r.String(),
    regionCode: r.String(),
    digits: r.String(),
    letters: r.String(),
    sellerNickname: _5(r.String()),
    buyerNickname: _5(r.String()),
    grossGameRub: T5,
    occurredAt: y1,
    sourceId: sn,
    organicReferenceEligible: r.Boolean(),
    origin: _5(r.String())
}), N5({
    regionCode: r.String(),
    digits: r.String(),
    letters: r.String()
}), N5({
    canonicalKey: r.String(),
    currency: r.Literal("game_rub"),
    priceBasis: r.Literal("COMPLETED_P2P_GROSS"),
    marketAuctionCount: r.Optional(T5),
    lastPriceGameRub: _5(T5),
    latest: Ru,
    previous: Ru,
    changePercent: _5(h0),
    coverage: N5({
        status: r.Literal("KNOWN_RECORDED_HISTORY"),
        earliestKnownSaleAt: _5(y1),
        nicknameSnapshotsSince: y1,
        legacyUnknownNicknames: T5,
        allHistoricalSalesGuaranteed: r.Literal(!1),
        organicReferenceDefinitionUnchanged: r.Literal(!0)
    })
}));
const k2 = (e, t=1) => r.String({
    minLength: t,
    maxLength: e,
    pattern: "^[^\\u0000-\\u0008\\u000b\\u000c\\u000e-\\u001f\\u007f]+$"
})
  , Xa = r.String({
    pattern: "^(0|[1-9][0-9]*)$"
})
  , r1 = r.String({
    format: "date-time"
})
  , Q2 = k2(1e3, 3)
  , Fy = r.Union([s5, r.Literal("ALL_REGISTERED")])
  , Au = {
    notifyOnline: r.Optional(r.Boolean()),
    notificationText: r.Optional(r.String({
        maxLength: 140
    })),
    orderId: r.Optional(r.Union([s5, r.Null()])),
    audience: Fy,
    title: k2(100),
    body: k2(1e3),
    startsAt: r1,
    expiresAt: r1
};
r.Union([r.Object({
    action: r.Literal("notices.delivery.retry"),
    target: s5,
    recipientId: s5,
    reason: Q2
}, {
    additionalProperties: !1
}), r.Object({
    action: r.Literal("players.note.edit"),
    target: s5,
    reason: Q2,
    body: k2(2e3)
}, {
    additionalProperties: !1
}), r.Object({
    action: r.Literal("players.note.remove"),
    target: s5,
    reason: Q2
}, {
    additionalProperties: !1
}), r.Object({
    action: r.Literal("notices.draft.create"),
    target: r.Literal("NEW"),
    reason: Q2,
    ...Au
}, {
    additionalProperties: !1
}), r.Object({
    action: r.Literal("notices.draft.edit"),
    target: s5,
    reason: Q2,
    ...Au
}, {
    additionalProperties: !1
}), ...["notices.send", "notices.remove"].map(e => r.Object({
    action: r.Literal(e),
    target: s5,
    reason: Q2
}, {
    additionalProperties: !1
}))]);
const $y = r.Object({
    id: s5,
    orderId: r.Union([s5, r.Null()]),
    title: k2(100),
    body: k2(1e3),
    startsAt: r1,
    expiresAt: r1,
    readAt: r.Union([r1, r.Null()]),
    audience: r.Union([r.Literal("ALL_REGISTERED"), r.Literal("PLAYER")])
}, {
    additionalProperties: !1
});
r.Object({
    authority: r.Literal("server"),
    contractVersion: r.Literal("nomerok.m9.read.v1"),
    items: r.Array($y, {
        maxItems: 50
    }),
    total: Xa,
    asOf: r1,
    serverObservedAt: r1,
    snapshotId: s5,
    snapshotExpiresAt: r1,
    nextCursor: r.Union([r.String(), r.Null()]),
    filter: r.Object({
        state: r.Literal("ACTIVE")
    }, {
        additionalProperties: !1
    }),
    metadata: r.Object({
        unread: Xa,
        delivery: r.Literal("IN_GAME_ONLY"),
        removalRechecked: r.Literal(!0)
    }, {
        additionalProperties: !1
    })
}, {
    additionalProperties: !1
});
r.Object({
    noticeId: s5,
    readAt: r1,
    receiptId: Xa,
    replayed: r.Boolean()
}, {
    additionalProperties: !1
});
const My = r.Object({
    id: s5,
    title: k2(100),
    text: r.String({
        maxLength: 140
    }),
    expiresAt: r1
}, {
    additionalProperties: !1
});
r.Object({
    cursor: r.Optional(r.String({
        maxLength: 2048
    }))
}, {
    additionalProperties: !1
});
r.Object({
    cursor: r.String(),
    items: r.Array(My, {
        maxItems: 50
    }),
    serverObservedAt: r1
}, {
    additionalProperties: !1
});
const Fr = r.String({
    minLength: 3,
    maxLength: 1e3,
    pattern: "^[^\\u0000-\\u001f\\u007f]+$"
});
r.Union([r.Object({
    action: r.Literal("payments.provider.verify_resume"),
    target: r.String({
        pattern: "^[1-9][0-9]{0,19}$"
    }),
    reason: Fr
}, {
    additionalProperties: !1
}), ...["marketplace.delist", "auctions.cancel_no_bid", "payments.fulfillment.retry"].map(e => r.Object({
    action: r.Literal(e),
    target: s5,
    reason: Fr
}, {
    additionalProperties: !1
})), r.Object({
    action: r.Literal("payments.refresh"),
    target: s5,
    reason: Fr,
    paymentIdHint: r.Optional(r.String({
        pattern: "^[A-Za-z0-9_-]{1,80}$"
    }))
}, {
    additionalProperties: !1
}), r.Object({
    action: r.Literal("jobs.retry"),
    target: r.String({
        pattern: "^[1-9][0-9]{0,18}$"
    }),
    reason: Fr
}, {
    additionalProperties: !1
})]);
const $ = e => r.Object(e, {
    additionalProperties: !1
})
  , I = r.String()
  , _ = r.String({
    pattern: "^\\d+$"
})
  , I1 = r.String({
    pattern: "^-?\\d+$"
})
  , S0 = r.String({
    pattern: "^-?\\d+(?:[.]\\d+)?$"
})
  , B = r.String({
    format: "uuid"
})
  , T = r.String({
    format: "date-time"
})
  , v = e => r.Union([e, r.Null()])
  , b = e => r.Union(e.map(t => r.Literal(t)))
  , By = $({
    cursor: r.Optional(r.String({
        maxLength: 2048
    })),
    limit: r.Optional(r.String({
        pattern: "^([1-9]|[1-4][0-9]|50)$"
    }))
})
  , c2 = By.properties
  , Y2 = {
    from: r.Optional(T),
    to: r.Optional(T)
}
  , L0 = r.Optional(r.String({
    maxLength: 254
}));
$({
    ...c2,
    ...Y2,
    query: L0,
    riskClusterId: r.Optional(B),
    status: r.Optional(b(["all", "active", "banned"])),
    feature: r.Optional(b(["auto", "double"])),
    sort: r.Optional(b(["new", "old", "nickname", "balance", "balanceDesc", "recent"]))
});
$({
    ...c2,
    ...Y2,
    query: r.Optional(r.String({
        maxLength: 64
    })),
    playerId: r.Optional(B),
    regionCode: r.Optional(r.String({
        pattern: "^\\d{2,3}$"
    })),
    displayTier: r.Optional(b(["GRAY", "BLUE", "PURPLE", "RED", "GOLD"])),
    prestige: r.Optional(b(["NONE", "REGULAR", "JACKPOT"])),
    origin: r.Optional(b(["all", "admin", "natural"])),
    state: r.Optional(b(["owned", "retired", "all"])),
    lock: r.Optional(b(["all", "free", "locked"])),
    sort: r.Optional(b(["new", "old", "value", "valueDesc", "rare"]))
});
$({
    ...c2,
    ...Y2,
    query: L0,
    playerId: r.Optional(B),
    sku: r.Optional(cr),
    payment: r.Optional(b(["CREATED", "PROVIDER_UNKNOWN", "PENDING", "SUCCEEDED", "CANCELED"])),
    fulfillment: r.Optional(b(["NOT_READY", "READY", "APPLIED", "REVIEW_REQUIRED", "NO_GRANT"])),
    refund: r.Optional(b(["NONE", "PENDING", "PARTIAL", "FULL"])),
    rights: r.Optional(b(["NOT_REQUIRED", "REQUIRED", "APPLIED"])),
    fiscal: r.Optional(b(["EXTERNAL_PENDING", "PENDING", "ISSUED", "FAILED"])),
    attention: r.Optional(b(["yes", "no"])),
    issue: r.Optional(b(["FULFILLMENT", "VERIFICATION"])),
    environment: r.Optional(b(["sandbox", "production"])),
    timeBasis: r.Optional(b(["created", "captured", "refunded"])),
    sort: r.Optional(b(["new", "old", "amount", "amountDesc"]))
});
$({
    ...c2,
    ...Y2,
    query: r.Optional(r.String({
        maxLength: 64
    })),
    playerId: r.Optional(B),
    state: r.Optional(r.String({
        maxLength: 40
    })),
    sort: r.Optional(b(["new", "old", "price", "priceDesc", "ending"]))
});
$({
    ...c2,
    ...Y2,
    action: r.Optional(r.String({
        maxLength: 100
    })),
    target: r.Optional(r.String({
        maxLength: 1400
    })),
    outcome: r.Optional(b(["COMMITTED", "REFUSED", "READ", "AUTHENTICATED", "AUTH_FAILED"])),
    requestId: r.Optional(r.String({
        maxLength: 128
    })),
    receiptId: r.Optional(_)
});
$({
    ...c2,
    query: r.Optional(r.String({
        maxLength: 100
    })),
    state: r.Optional(b(["DRAFT", "SCHEDULED", "ACTIVE", "EXPIRED", "REMOVED"])),
    playerId: r.Optional(B)
});
$({
    ...c2,
    ...Y2,
    kind: r.Optional(r.String({
        maxLength: 100
    })),
    source: r.Optional(r.String({
        maxLength: 100
    }))
});
$({
    ...c2,
    state: r.Optional(b(["pending", "running", "succeeded", "dead"])),
    queue: r.Optional(r.String({
        maxLength: 100
    })),
    due: r.Optional(b(["yes", "no"]))
});
$({
    ...Y2
});
const jy = $({
    id: B,
    nickname: I,
    registeredAt: T,
    lastActivityAt: v(T),
    status: b(["ACTIVE", "BANNED"]),
    email: v(I),
    emailState: b(["ABSENT", "PENDING", "VERIFIED"]),
    telegram: b(["ABSENT", "BOUND"]),
    balanceGameRub: I1,
    walletVersion: _,
    heldGameRub: _,
    ownedCount: _,
    incomingCapacity: _,
    capacity: _,
    auto: r.Boolean(),
    double: r.Boolean(),
    securityVersion: _
});
$({
    id: B,
    lifeId: v(B),
    regionCode: I,
    digits: I,
    letters: I,
    canonical: I,
    state: I,
    ownerId: v(B),
    ownerNickname: v(I),
    displayTier: b(["GRAY", "BLUE", "PURPLE", "RED", "GOLD"]),
    prestige: b(["NONE", "REGULAR", "JACKPOT"]),
    intrinsicGameRub: v(S0),
    qGameRub: v(_),
    sGameRub: v(_),
    rGameRub: v(_),
    lGameRub: v(_),
    generationOrigin: v(I),
    naturalQualifying: v(r.Boolean()),
    assetLifecycle: v(I),
    acquiredAt: T,
    version: _,
    lock: v(I),
    canSeize: r.Boolean(),
    seizeUnavailableReason: v(I)
});
const Vy = $({
    id: B,
    playerId: B,
    nickname: I,
    sku: cr,
    amountKopecks: _,
    currency: r.Literal("RUB"),
    shopId: I,
    environment: b(["sandbox", "production"]),
    paymentState: b3,
    fulfillmentState: z3,
    refundState: K3,
    refundedKopecks: _,
    rightsDecisionState: m0,
    fiscalState: H3,
    reconciliationCode: v(I),
    providerPaymentId: v(I),
    providerStatus: v(I),
    capturedAt: v(T),
    verifiedAt: v(T),
    createdAt: T,
    updatedAt: T,
    version: _,
    canRefresh: r.Boolean(),
    canRetryFulfillment: r.Boolean(),
    canDecideRefundRights: r.Boolean(),
    pendingOwnerRequest: r.Boolean()
});
$({
    id: B,
    plateId: B,
    lifeId: v(B),
    canonical: I,
    sellerId: B,
    sellerNickname: v(I),
    state: I,
    askGameRub: _,
    publicationFeeGameRub: _,
    listedAt: T,
    expiresAt: T,
    version: _,
    canDelist: r.Boolean(),
    unavailableReason: v(I),
    saleId: v(B),
    buyerId: v(B),
    buyerNickname: v(I),
    saleKind: v(I),
    grossGameRub: v(_),
    feeGameRub: v(_),
    netGameRub: v(_),
    soldAt: v(T)
});
$({
    id: B,
    plateId: B,
    lifeId: B,
    canonical: I,
    sellerId: B,
    sellerNickname: v(I),
    state: I,
    startGameRub: _,
    currentBidGameRub: v(_),
    leaderId: v(B),
    leaderNickname: v(I),
    bidCount: _,
    creationFeeGameRub: _,
    createdAt: T,
    endAt: T,
    originalEndAt: T,
    terminalAt: v(T),
    version: _,
    canCancel: r.Boolean(),
    unavailableReason: v(I),
    heldGameRub: _,
    incomingCapacity: _
});
$({
    notifyOnline: r.Optional(r.Boolean()),
    notificationText: r.Optional(v(I)),
    id: B,
    orderId: v(B),
    version: _,
    audience: b(["PLAYER", "ALL_REGISTERED"]),
    playerId: v(B),
    title: I,
    body: I,
    state: I,
    startsAt: T,
    expiresAt: T,
    createdAt: T,
    deliveredCount: _,
    readCount: _,
    canEdit: r.Boolean(),
    canSend: r.Boolean(),
    canRemove: r.Boolean()
});
const Pt = $({
    name: I,
    value: I
});
$({
    id: B,
    sequence: _,
    ownerId: v(B),
    sessionId: v(B),
    action: I,
    target: I,
    reason: I,
    outcome: I,
    requestId: I,
    receiptId: v(_),
    approvalId: v(B),
    payloadHash: v(I),
    occurredAt: T,
    before: r.Array(Pt),
    after: r.Array(Pt)
});
$({
    id: I,
    kind: I,
    occurredAt: T,
    source: I,
    receiptId: v(_),
    playerId: v(B),
    counterpartyId: v(B),
    plateId: v(B),
    lifeId: v(B),
    amountGameRub: v(I1),
    amountKopecks: v(I1),
    status: v(I),
    reference: v(I),
    facts: r.Array(Pt)
});
$({
    id: _,
    queue: I,
    kind: I,
    state: I,
    availableAt: T,
    leaseExpiresAt: v(T),
    completedAt: v(T),
    attempts: _,
    maxAttempts: _,
    lastErrorCode: v(I),
    deadLetterCount: _,
    canRetry: r.Boolean(),
    unavailableReason: v(I),
    target: v(I)
});
$({
    id: B,
    state: I,
    createdAt: T,
    lastSeenAt: T,
    idleExpiresAt: T,
    absoluteExpiresAt: T,
    revokedAt: v(T),
    revocationReason: v(I),
    version: _,
    userAgentFingerprint: v(I),
    networkFingerprint: v(I),
    deviceName: r.Null(),
    ipAddress: r.Null()
});
$({
    id: B,
    clusterId: B,
    userAgentFingerprint: v(I),
    networkFingerprint: v(I),
    firstSeenAt: T,
    lastSeenAt: T,
    deviceName: r.Null(),
    ipAddress: r.Null(),
    sharedRegisteredAccounts: _,
    evidenceMeaning: r.Literal("CORRELATION_NOT_PROOF")
});
$({
    id: I,
    kind: r.Union([r.Literal("network"), r.Literal("browser")]),
    playerId: B,
    playerMode: r.Union([r.Literal("guest"), r.Literal("registered")]),
    nickname: v(I),
    firstSeenAt: T,
    lastSeenAt: T,
    evidenceMeaning: r.Literal("CORRELATION_NOT_PROOF")
});
$({
    cutoff: T,
    stage: I,
    priorDau: _,
    openingReserveGameRub: _,
    reserveCapGameRub: _,
    spendCapGameRub: _,
    eligibleCount: v(_),
    selectedCount: v(_),
    purchasedCount: _,
    rejectedCount: _,
    spentGameRub: _,
    disposedCount: _,
    inputDigest: v(I),
    frozenAt: v(T)
});
$({
    matchedCount: _,
    gameRub: v(S0),
    kopecks: v(I1),
    amountMeaning: v(I)
});
$({
    authority: r.Literal("server"),
    asOf: T,
    player: jy,
    passwordChangedAt: v(T),
    contacts: r.Array($({
        id: B,
        email: I,
        state: I,
        createdAt: T,
        expiresAt: v(T),
        verifiedAt: v(T),
        revokedAt: v(T)
    })),
    telegram: r.Array($({
        id: B,
        label: v(I),
        linkedAt: T,
        revokedAt: v(T),
        version: _,
        identityFingerprint: I
    })),
    riskClusterId: B,
    rewards: qd,
    inviterId: v(B),
    referralCode: v(I),
    canActions: r.Array(I),
    unavailableActions: r.Array($({
        action: I,
        reason: I
    }))
});
const Gy = $({
    id: I,
    label: I,
    source: I,
    unit: b(["count", "game_rub", "RUB_KOPECK"]),
    timeBasis: I,
    distinctKey: I,
    numerator: I,
    denominator: v(I),
    exclusions: r.Array(I),
    missingDataRule: I,
    drilldownSurface: I,
    drilldownFilter: r.Array(Pt)
})
  , by = $({
    definition: Gy,
    value: I1,
    previousValue: I1,
    changeNumerator: I1,
    changeDenominator: v(I1),
    series: r.Array($({
        from: T,
        to: T,
        value: I1
    }), {
        maxItems: 93
    })
});
$({
    authority: r.Literal("server"),
    contractVersion: r.Literal("nomerok.m9.owner.metrics.v1"),
    asOf: T,
    serverObservedAt: T,
    timezone: r.Literal("Europe/Moscow"),
    interval: r.Literal("[from,to)"),
    from: T,
    to: T,
    previousFrom: T,
    previousTo: T,
    environment: b(["sandbox", "production"]),
    shopId: I,
    freshness: b(["DATABASE_SNAPSHOT", "CACHED_DATABASE_SNAPSHOT"]),
    snapshotExpiresAt: T,
    cacheLifetimeSeconds: r.Literal(5),
    metrics: r.Array(by),
    bySku: r.Array($({
        sku: I,
        orders: _,
        payers: _,
        grossKopecks: _,
        issued: _
    })),
    issues: r.Array($({
        code: I,
        count: v(_),
        status: b(["OPEN", "CLEAR", "NOT_CONFIGURED", "EXTERNAL_PENDING"]),
        surface: I,
        filter: r.Array(Pt)
    })),
    recentActivity: $({
        count: _,
        from: T,
        to: T,
        meaning: r.Literal("RECORDED_AUTHENTICATED_ACTIVITY_NOT_PRESENCE")
    })
});
Uy.properties.items.items;
$({
    id: B,
    version: _,
    body: v(I),
    removed: r.Boolean(),
    createdAt: T,
    updatedAt: T
});
$({
    authority: r.Literal("server"),
    asOf: T,
    order: Vy,
    receiptContact: v(I),
    catalogVersion: I,
    quoteSha256: I,
    quote: yo,
    fiscalRecords: r.Array($({
        id: B,
        kind: I,
        status: I,
        contact: v(I),
        providerReceiptId: v(I),
        receiptUrl: v(I),
        errorCode: v(I),
        createdAt: T
    }))
});
$({
    authority: r.Literal("server"),
    asOf: T,
    liquidityAccounts: r.Array($({
        kind: b(["reserve", "clearing"]),
        balanceGameRub: _,
        version: _,
        source: I
    })),
    queues: r.Array($({
        queue: I,
        pending: _,
        running: _,
        dead: _,
        oldestDueAt: v(T),
        lastSuccessAt: v(T)
    })),
    reconciliation: r.Array($({
        scope: I,
        status: b(["PASS", "FAIL", "NOT_RUN"]),
        completedAt: v(T),
        freshness: b(["FRESH", "STALE", "UNKNOWN"]),
        maximumAgeSeconds: r.Literal(900),
        facts: r.Array(Pt)
    })),
    history: $({
        pending: _,
        oldestPendingAt: v(T),
        backfillCompleted: r.Boolean(),
        lastProjectionAt: v(T)
    }),
    transports: r.Array($({
        channel: b(["EMAIL", "TELEGRAM"]),
        configuration: b(["CONFIGURED", "NOT_CONFIGURED"]),
        authentication: r.Literal("NOT_INFERRED_FROM_CONFIGURATION"),
        queued: _,
        sending: _,
        sent: _,
        unknown: _,
        blocked: _,
        failed: _,
        lastDeliveryAt: v(T)
    })),
    telegram: $({
        lastTransportObservationAt: v(T),
        lastStoredUpdateAt: v(T),
        pending: _,
        failed: _,
        sendNotBefore: v(T)
    }),
    boundaries: r.Array($({
        code: I,
        status: b(["READY", "EXTERNAL_PENDING", "NOT_CONFIGURED"]),
        explanation: I
    }))
});
$({
    noticeId: B,
    revision: _,
    recipientId: B,
    businessKey: I,
    channel: r.Literal("IN_GAME"),
    state: I,
    available: r.Boolean(),
    returnedByApiAt: v(T),
    seenEventAt: v(T),
    humanReadConfirmed: r.Literal(!1),
    canRetry: r.Boolean(),
    retryEffect: r.Literal("NO_DUPLICATE_NO_SEEN_RESET"),
    asOf: T
});
$({
    playerId: B,
    asOf: T,
    recorded: r.Boolean(),
    activeMilliseconds: _,
    limitMilliseconds: r.Literal("1800000"),
    expiredPermanently: r.Boolean(),
    conversions: _,
    version: _
});
$({
    kind: b(["task", "completion", "recovery", "referral"]),
    key: r.String({
        minLength: 1,
        maxLength: 100
    })
});
$({
    playerId: B,
    kind: I,
    key: I,
    asOf: T,
    period: v(I),
    expectedGameRub: v(_),
    status: b(["PAID", "CLAIMABLE", "QUEUED", "UNAVAILABLE", "OPERATION_FAILED", "OPERATION_RUNNING"]),
    reason: v(I),
    newRewardCreated: r.Literal(!1),
    claims: r.Array($({
        id: B,
        amountGameRub: _,
        receiptId: _,
        claimedAt: T,
        ledgerReferences: r.Array(B)
    })),
    job: v($({
        id: _,
        handler: r.Literal("m8.referral.payout"),
        state: I,
        canRetry: r.Boolean(),
        lastErrorCode: v(I)
    }))
});
const G = e => r.Object(e, {
    additionalProperties: !1
})
  , V = r.String()
  , H5 = r.String({
    format: "uuid"
})
  , r5 = r.String({
    format: "date-time"
})
  , Se = r.String({
    pattern: "^\\d+$"
})
  , f5 = e => r.Union([e, r.Null()])
  , x2 = e => r.Union(e.map(t => r.Literal(t)))
  , I0 = r.String({
    minLength: 3,
    maxLength: 1e3,
    pattern: "^[^\\u0000-\\u001f\\u007f]+$"
})
  , hn = x2(["auto", "double"])
  , j5 = {
    target: H5,
    reason: I0
};
r.Union([G({
    ...j5,
    action: r.Literal("players.feature.grant"),
    feature: hn
}), G({
    ...j5,
    action: r.Literal("players.feature.revoke"),
    basisId: H5
}), ...["players.balance.grant", "players.balance.deduct"].map(e => G({
    ...j5,
    action: r.Literal(e),
    amountGameRub: r.String({
        pattern: "^[1-9][0-9]{0,14}$"
    })
})), G({
    ...j5,
    action: r.Literal("payments.refund_rights"),
    revokeFeatures: r.Array(hn, {
        maxItems: 2,
        uniqueItems: !0
    }),
    preFulfillmentAction: f5(x2(["NO_GRANT", "FULFILL_CONTRACT"]))
}), G({
    action: r.Literal("controls.change"),
    target: x2(["payments.newPurchasesEnabled", "auctions.newActivityEnabled", "marketplace.newActivityEnabled", "m8_tasks", "m8_referrals", "m8_recovery", "marketsystem.liquidity.v1"]),
    reason: I0,
    enabled: r.Boolean()
})]);
r.Union([G({
    ...j5,
    action: r.Literal("players.password.change"),
    newPassword: r.String({
        minLength: 15,
        maxLength: 512
    })
}), G({
    ...j5,
    action: r.Literal("players.password.reset_link"),
    identityProofNote: r.Optional(r.String({
        minLength: 20,
        maxLength: 1e3
    }))
}), G({
    ...j5,
    action: r.Literal("players.email.change"),
    email: r.String({
        minLength: 3,
        maxLength: 254
    })
}), G({
    ...j5,
    action: r.Literal("players.telegram.unlink")
}), G({
    ...j5,
    action: r.Literal("players.email.unlink")
}), G({
    ...j5,
    action: r.Literal("players.sessions.revoke_all")
})]);
G({
    ...j5,
    action: r.Literal("players.delete"),
    confirmNickname: r.String({
        minLength: 3,
        maxLength: 10
    })
});
r.Union([G({
    ...j5,
    action: r.Literal("players.capacity.set"),
    adminSlots: r.Integer({
        minimum: 0,
        maximum: 1e6
    })
}), G({
    ...j5,
    action: r.Literal("players.luck.set"),
    startsAt: r.Optional(f5(r5)),
    redWeight: r.Integer({
        minimum: 1,
        maximum: 4
    }),
    goldWeight: r.Integer({
        minimum: 1,
        maximum: 4
    }),
    expiresAt: f5(r5)
}), G({
    ...j5,
    action: r.Literal("players.ban.add"),
    expiresAt: f5(r5)
}), G({
    ...j5,
    action: r.Literal("players.ban.revoke"),
    banId: r.String({
        pattern: "^[1-9][0-9]{0,18}$"
    })
}), G({
    ...j5,
    action: r.Literal("players.note.add"),
    body: r.String({
        minLength: 1,
        maxLength: 2e3
    })
}), G({
    ...j5,
    target: r.Union([H5, r.Literal("ALL_REGISTERED")]),
    action: r.Literal("notices.publish"),
    title: r.String({
        minLength: 1,
        maxLength: 100
    }),
    body: r.String({
        minLength: 1,
        maxLength: 1e3
    }),
    expiresAt: r5
})]);
r.Union([G({
    ...j5,
    action: r.Literal("plates.grant"),
    regionCode: r.String({
        pattern: "^[0-9]{2,3}$"
    }),
    digits: r.String({
        pattern: "^[0-9]{3}$"
    }),
    letters: r.String({
        pattern: "^[АВЕКМНОРСТУХ]{3}$"
    })
}), G({
    ...j5,
    action: r.Literal("plates.seize")
})]);
G({
    action: x2(["security.passkey.add", "security.passkey.rename", "security.passkey.revoke", "security.session.revoke", "security.sessions.revoke_all", "security.recovery.rotate", "security.recovery.retrieve"]),
    target: r.Optional(r.String({
        minLength: 1,
        maxLength: 1400
    })),
    name: r.Optional(r.String({
        minLength: 1,
        maxLength: 100
    }))
});
const zy = G({
    title: V,
    fields: r.Array(G({
        key: V,
        label: V,
        value: V
    })),
    effects: r.Array(V)
})
  , Ky = G({
    id: V,
    type: r.Literal("public-key"),
    transports: r.Optional(r.Array(V))
})
  , v0 = G({
    challenge: V,
    timeout: r.Optional(r.Number()),
    rpId: r.Optional(V),
    allowCredentials: r.Optional(r.Array(Ky)),
    userVerification: r.Literal("required"),
    extensions: r.Optional(r.Object({}, {
        additionalProperties: !0
    }))
});
G({
    challengeId: H5,
    publicKey: v0,
    expiresAt: r5,
    approvalId: H5,
    payloadHash: V,
    action: V,
    target: V,
    expectedVersion: V,
    review: zy,
    preview: r.Object({}, {
        additionalProperties: !0
    })
});
G({
    receiptId: Se,
    replayed: r.Boolean(),
    oneTimeMaterialAvailable: r.Boolean(),
    facts: r.Array(G({
        name: V,
        value: V
    })),
    recoveryCodes: r.Optional(r.Array(V)),
    recoveryOutputId: r.Optional(H5),
    resetUrl: r.Optional(V)
});
G({
    ownerId: H5,
    siteOrigin: V,
    login: V,
    sessionId: H5,
    securityVersion: Se,
    absoluteExpiresAt: r5,
    csrf: V,
    rpId: V,
    webauthnUserId: V
});
G({
    asOf: r5,
    securityVersion: Se,
    currentSessionId: H5,
    login: V,
    rpId: V,
    webauthnUserId: V,
    availableRecoveryCodes: r.Integer({
        minimum: 0
    }),
    recoveryOutput: r.Optional(f5(G({
        id: H5,
        expiresAt: r5
    }))),
    keys: r.Array(G({
        id: V,
        name: V,
        providerName: V,
        providerIcon: f5(V),
        version: Se,
        registeredAt: r5,
        lastUsedAt: f5(r5),
        backedUp: r.Boolean(),
        deviceType: V,
        canRevoke: r.Boolean(),
        unavailableReason: f5(V)
    })),
    sessions: r.Array(G({
        id: H5,
        label: V,
        createdAt: r5,
        lastSeenAt: r5,
        idleExpiresAt: r5,
        absoluteExpiresAt: r5
    }))
});
G({
    playerId: H5,
    nickname: V,
    balanceGameRub: Se,
    walletVersion: Se,
    rightsVersion: V,
    amountUnit: r.Literal("game_rub"),
    asOf: r5,
    bases: r.Array(G({
        basisId: H5,
        effective: r.Boolean(),
        feature: hn,
        basisKind: x2(["PAYMENT", "ADMIN", "LEGACY"]),
        orderId: f5(H5),
        grantedAt: r5,
        revokedAt: f5(r5),
        receiptId: f5(Se)
    })),
    lifetimeFuel: r.Array(G({
        feature: hn,
        amountGameRub: Se,
        orderId: f5(H5),
        issuedAt: r5
    })),
    pendingFeatures: r.Array(G({
        feature: hn,
        orderId: H5
    }))
});
G({
    provider: f5(G({
        shopId: V,
        state: x2(["NOT_CHECKED", "ACTIVE", "PAUSED"]),
        errorCode: f5(V),
        version: f5(Se),
        notBefore: f5(r5),
        pausedAt: f5(r5),
        verifiedAt: f5(r5),
        pendingVerification: r.Boolean(),
        canVerifyResume: r.Boolean()
    })),
    scope: r.Literal("EXISTING_VERSIONED_ACTIVITY_GATES"),
    asOf: r5,
    controls: r.Array(G({
        key: x2(["payments.newPurchasesEnabled", "auctions.newActivityEnabled", "marketplace.newActivityEnabled", "m8_tasks", "m8_referrals", "m8_recovery", "marketsystem.liquidity.v1"]),
        enabled: r.Boolean(),
        version: Se,
        effectiveAt: r5,
        reason: V,
        receiptId: f5(Se)
    }))
});
G({
    playerId: H5,
    nickname: V,
    version: V,
    luckEffective: r.Boolean(),
    asOf: r5,
    state: G({
        version: V,
        luckVersion: V,
        startsAt: f5(r5),
        redWeight: r.Integer(),
        goldWeight: r.Integer(),
        expiresAt: f5(r5),
        luckReceiptId: f5(Se),
        adminSlots: r.Integer(),
        purchasedSlots: r.Integer(),
        capacity: r.Integer(),
        capacityVersion: V,
        usedCapacity: r.Integer(),
        bans: r.Array(G({
            id: Se,
            reasonCode: V,
            startsAt: r5,
            expiresAt: f5(r5),
            revokedAt: f5(r5)
        }))
    }),
    notes: r.Array(G({
        id: H5,
        body: f5(V),
        version: Se,
        removed: r.Boolean(),
        createdAt: r5,
        updatedAt: r5
    }))
});
const K5 = e => r.Object(e, {
    additionalProperties: !1
})
  , Me = r.String()
  , fr = r.String({
    format: "uuid"
})
  , bt = r.String({
    format: "date-time"
})
  , O0 = r.String({
    pattern: "^[0-9a-f]{64}$"
})
  , Hy = r.String({
    pattern: "^[1-9][0-9]*$"
})
  , Yy = K5({
    id: Me,
    type: r.Literal("public-key"),
    transports: r.Optional(r.Array(Me))
});
K5({
    state: r.Literal("EMAIL_CODE_REQUIRED"),
    expiresAt: bt,
    csrf: O0
});
K5({
    state: r.Literal("EMAIL_CODE_REQUIRED"),
    expiresAt: bt
});
K5({
    state: r.Union([r.Literal("PASSKEY_REQUIRED"), r.Literal("PASSKEY_REGISTRATION_REQUIRED")])
});
K5({
    challengeId: fr,
    publicKey: v0,
    expiresAt: bt
});
K5({
    challengeId: fr,
    expiresAt: bt,
    publicKey: K5({
        rp: K5({
            id: r.Optional(Me),
            name: Me
        }),
        user: K5({
            id: Me,
            name: Me,
            displayName: Me
        }),
        challenge: Me,
        pubKeyCredParams: r.Array(K5({
            type: r.Literal("public-key"),
            alg: r.Integer()
        })),
        timeout: r.Optional(r.Number()),
        excludeCredentials: r.Optional(r.Array(Yy)),
        authenticatorSelection: K5({
            residentKey: r.Literal("required"),
            requireResidentKey: r.Optional(r.Boolean()),
            userVerification: r.Literal("required"),
            authenticatorAttachment: r.Optional(r.Union([r.Literal("platform"), r.Literal("cross-platform")]))
        }),
        attestation: r.Literal("none"),
        extensions: r.Optional(r.Object({}, {
            additionalProperties: !0
        })),
        hints: r.Optional(r.Array(Me))
    })
});
const R0 = {
    csrf: O0,
    sessionId: fr,
    absoluteExpiresAt: bt
};
K5(R0);
const _u = {
    credentialId: Me,
    receiptId: Hy
};
r.Union([K5({
    ..._u,
    ...R0,
    recoveryCodes: r.Array(Me, {
        minItems: 8,
        maxItems: 8
    }),
    recoveryOutputId: r.Optional(fr)
}), K5(_u)]);
K5({
    approvalId: fr,
    approved: r.Literal(!0),
    expiresAt: bt,
    payloadHash: r.String({
        pattern: "^[0-9a-f]{64}$"
    })
});
K5({
    loggedOut: r.Literal(!0)
});
K5({
    error: K5({
        code: r.String({
            pattern: "^[A-Z0-9_]{1,100}$"
        }),
        requestId: Me,
        retryable: r.Boolean()
    })
});
const Wy = r.String({
    minLength: 3,
    maxLength: 1e3
})
  , Za = r.String({
    format: "uuid"
})
  , Qy = ["INFORMATION", "CORRECTION", "PROCESSING_WITHDRAWAL", "PUBLIC_DISPLAY_RESTRICTION", "ANALYTICS_DELETION", "ACCOUNT_CLOSURE", "ROUTINE_SUPPORT", "DISPUTE"];
r.Object({
    action: r.Union(["privacy.register", "privacy.verify", "privacy.restrict", "privacy.close", "privacy.complete"].map(e => r.Literal(e))),
    target: Za,
    reason: Wy,
    kind: r.Optional(r.Union(Qy.map(e => r.Literal(e)))),
    unlinked: r.Optional(r.Boolean()),
    ticketRef: r.Optional(r.String({
        minLength: 3,
        maxLength: 200
    })),
    note: r.Optional(r.String({
        minLength: 3,
        maxLength: 4e3
    })),
    dueAt: r.Optional(r.String({
        format: "date-time"
    })),
    verificationMethod: r.Optional(r.Union(["AUTHENTICATED_ACCOUNT", "VERIFIED_CHANNEL", "DOCUMENTS_REVIEWED"].map(e => r.Literal(e)))),
    evidenceReference: r.Optional(r.String({
        minLength: 10,
        maxLength: 1e3
    })),
    providerEvidenceReference: r.Optional(r.String({
        minLength: 10,
        maxLength: 1e3
    }))
}, {
    additionalProperties: !1
});
const qy = r.Object({
    id: Za,
    playerId: r.Union([Za, r.Null()]),
    kind: r.String(),
    ticketRef: r.String(),
    state: r.String(),
    receivedAt: r.String(),
    dueAt: r.String(),
    verifiedAt: r.Union([r.String(), r.Null()]),
    completedAt: r.Union([r.String(), r.Null()]),
    version: r.String(),
    note: r.String(),
    result: r.Record(r.String(), r.Unknown())
}, {
    additionalProperties: !1
});
r.Object({
    items: r.Array(qy)
}, {
    additionalProperties: !1
});
const pr = r.String({
    pattern: "^[A-Za-z][A-Za-z0-9-]{1,63}$"
})
  , st = r.String({
    format: "uuid"
})
  , Zr = r.Union([pr, r.Null()])
  , Xy = r.Object({
    id: pr,
    title: r.String(),
    family: r.String(),
    materialKey: r.String(),
    priceGameRub: A,
    availability: r.Union([r.Literal("available"), r.Literal("coming_soon")])
}, {
    additionalProperties: !1
});
r.Object({
    capability: r.Literal("frames-v1"),
    products: r.Array(Xy, {
        maxItems: 27
    })
}, {
    additionalProperties: !1
});
const Zy = r.Union([r.Object({
    kind: r.Literal("slot"),
    slot: r.Union([r.Literal("A"), r.Literal("B")])
}, {
    additionalProperties: !1
}), r.Object({
    kind: r.Literal("plate"),
    plateId: st,
    lifeId: st,
    expectedVersion: N
}, {
    additionalProperties: !1
})]);
r.Object({
    accountId: st,
    registered: r.Boolean(),
    balanceGameRub: A,
    owned: r.Array(pr),
    slots: r.Object({
        A: Zr,
        B: Zr
    }, {
        additionalProperties: !1
    }),
    plates: r.Record(st, Zr),
    plateTargets: r.Record(st, r.Object({
        lifeId: st,
        version: N
    }, {
        additionalProperties: !1
    }))
}, {
    additionalProperties: !1
});
r.Object({
    frameId: pr
}, {
    additionalProperties: !1
});
const Jy = r.Object({
    state: r.Literal("confirmed"),
    frameId: pr,
    chargedGameRub: A,
    receiptId: N,
    replayed: r.Boolean()
}, {
    additionalProperties: !1
});
r.Object({
    state: r.Union([r.Literal("completed"), r.Literal("failed"), r.Literal("unknown")]),
    result: r.Optional(Jy),
    code: r.Optional(r.String())
}, {
    additionalProperties: !1
});
r.Object({
    target: Zy,
    frameId: Zr
}, {
    additionalProperties: !1
});
r.Object({
    assigned: r.Literal(!0),
    receiptId: N,
    replayed: r.Boolean()
}, {
    additionalProperties: !1
});
const eE = [{
    id: "ru-literal-vor",
    catalogVersion: "PLATE_LABELS_V1",
    kind: "LITERAL",
    country: "RU",
    formatId: "RU_PRIVATE_V1",
    regions: null,
    rule: "LETTERS_EXACT",
    letters: "ВОР",
    digits: null,
    priority: 10,
    title: "ВОР",
    description: "Буквы складываются в «ВОР».",
    period: null,
    claimIds: ["literal-symbol-match"],
    checkedAt: "2026-10-01",
    status: "PUBLISHED",
    economicEffect: "NONE"
}, {
    id: "ru-literal-aue",
    catalogVersion: "PLATE_LABELS_V1",
    kind: "LITERAL",
    country: "RU",
    formatId: "RU_PRIVATE_V1",
    regions: null,
    rule: "LETTERS_EXACT",
    letters: "АУЕ",
    digits: null,
    priority: 10,
    title: "АУЕ",
    description: "Буквы складываются в «АУЕ».",
    period: null,
    claimIds: ["literal-symbol-match"],
    checkedAt: "2026-10-01",
    status: "PUBLISHED",
    economicEffect: "NONE"
}, {
    id: "ru-literal-kot",
    catalogVersion: "PLATE_LABELS_V1",
    kind: "LITERAL",
    country: "RU",
    formatId: "RU_PRIVATE_V1",
    regions: null,
    rule: "LETTERS_EXACT",
    letters: "КОТ",
    digits: null,
    priority: 10,
    title: "КОТ",
    description: "Буквы складываются в «КОТ».",
    period: null,
    claimIds: ["literal-symbol-match"],
    checkedAt: "2026-10-01",
    status: "PUBLISHED",
    economicEffect: "NONE"
}, {
    id: "ru-literal-som",
    catalogVersion: "PLATE_LABELS_V1",
    kind: "LITERAL",
    country: "RU",
    formatId: "RU_PRIVATE_V1",
    regions: null,
    rule: "LETTERS_EXACT",
    letters: "СОМ",
    digits: null,
    priority: 10,
    title: "СОМ",
    description: "Буквы складываются в «СОМ».",
    period: null,
    claimIds: ["literal-symbol-match"],
    checkedAt: "2026-10-01",
    status: "PUBLISHED",
    economicEffect: "NONE"
}, {
    id: "ru-literal-khor",
    catalogVersion: "PLATE_LABELS_V1",
    kind: "LITERAL",
    country: "RU",
    formatId: "RU_PRIVATE_V1",
    regions: null,
    rule: "LETTERS_EXACT",
    letters: "ХОР",
    digits: null,
    priority: 10,
    title: "ХОР",
    description: "Буквы складываются в «ХОР».",
    period: null,
    claimIds: ["literal-symbol-match"],
    checkedAt: "2026-10-01",
    status: "PUBLISHED",
    economicEffect: "NONE"
}, {
    id: "ru-literal-rok",
    catalogVersion: "PLATE_LABELS_V1",
    kind: "LITERAL",
    country: "RU",
    formatId: "RU_PRIVATE_V1",
    regions: null,
    rule: "LETTERS_EXACT",
    letters: "РОК",
    digits: null,
    priority: 10,
    title: "РОК",
    description: "Буквы складываются в «РОК».",
    period: null,
    claimIds: ["literal-symbol-match"],
    checkedAt: "2026-10-01",
    status: "PUBLISHED",
    economicEffect: "NONE"
}, {
    id: "ru-literal-v004ko",
    catalogVersion: "PLATE_LABELS_V1",
    kind: "LITERAL",
    country: "RU",
    formatId: "RU_PRIVATE_V1",
    regions: null,
    rule: "PLATE_EXACT",
    letters: "ВКО",
    digits: "004",
    priority: 100,
    title: "В004КО",
    description: "Буквы ВКО и цифры 004.",
    period: null,
    claimIds: ["literal-symbol-match"],
    checkedAt: "2026-10-01",
    status: "PUBLISHED",
    economicEffect: "NONE"
}]
  , tE = {
    entries: eE
};
function SE(e) {
    return {
        country: "RU",
        format: "RU_PRIVATE_V1",
        regionCode: e.regionCode,
        digits: e.digits,
        letters: e.letters,
        identityVersion: 2,
        publicPlateId: e.plateId ?? null
    }
}
function LE(e) {
    return e.country === "BY" ? `${e.digits} ${e.letters}-${e.regionCode}` : e.country === "KZ" ? `${e.digits} ${e.letters} ${e.regionCode}` : `${e.letters.slice(0, 1)}${e.digits}${e.letters.slice(1)} ${e.regionCode}`
}
const nE = {
    A: "А",
    B: "В",
    E: "Е",
    K: "К",
    M: "М",
    H: "Н",
    O: "О",
    P: "Р",
    C: "С",
    T: "Т",
    Y: "У",
    X: "Х"
};
Object.fromEntries(Object.entries(nE).map( ([e,t]) => [t, e]));
function IE(e) {
    return e.country !== "RU" ? [] : tE.entries.filter(t => t.status === "PUBLISHED" && t.country === e.country && t.letters === e.letters && (t.rule === "LETTERS_EXACT" || t.rule === "PLATE_EXACT" && t.digits === e.digits)).sort( (t, n) => n.priority - t.priority || t.id.localeCompare(n.id)).map(t => ({
        id: t.id,
        title: t.title,
        description: t.description,
        economicEffect: "NONE",
        basis: "LITERAL"
    }))
}
const rE = [["77", 0, 0, 0, "moscow"], ["97", 1, 0, 1, "moscow"], ["99", 2, 0, 0, "moscow"], ["177", 3, 1, 0, "moscow"], ["197", 4, 2, 2, "moscow"], ["199", 5, 3, 3, "moscow"], ["777", 6, 0, 4, "moscow"], ["797", 7, 4, 4, "moscow"], ["799", 8, 5, 4, "moscow"], ["977", 9, 6, 4, "moscow"], ["78", 10, 0, 4, "spb"], ["98", 11, 0, 4, "spb"], ["178", 12, 7, 4, "spb"], ["50", 13, 8, 5, ""], ["90", 14, 8, 5, ""], ["150", 15, 9, 5, ""], ["190", 16, 10, 5, ""], ["750", 17, 11, 5, ""], ["23", 18, 12, 6, ""], ["93", 19, 12, 6, ""], ["123", 20, 13, 6, ""], ["193", 21, 14, 6, ""], ["16", 19, 12, 6, ""], ["116", 22, 15, 6, ""], ["716", 23, 16, 6, ""], ["66", 24, 12, 6, ""], ["96", 25, 12, 6, ""], ["196", 26, 17, 6, ""], ["02", 27, 12, 6, ""], ["102", 28, 18, 6, ""], ["74", 27, 12, 6, ""], ["174", 29, 19, 6, ""], ["63", 27, 12, 6, ""], ["163", 30, 20, 6, ""], ["763", 31, 21, 6, ""], ["61", 27, 12, 6, ""], ["161", 32, 22, 6, ""], ["761", 31, 23, 6, ""], ["59", 33, 12, 6, ""], ["81", 34, 12, 6, ""], ["159", 35, 24, 6, ""], ["52", 33, 12, 6, ""], ["152", 35, 25, 6, ""], ["54", 33, 12, 6, ""], ["154", 35, 26, 6, ""], ["82", 36, 12, 6, ""], ["92", 33, 12, 6, ""], ["34", 37, 12, 6, ""], ["134", 38, 27, 6, ""], ["36", 37, 12, 6, ""], ["136", 38, 28, 6, ""], ["38", 37, 12, 6, ""], ["85", 39, 12, 6, ""], ["138", 38, 29, 6, ""], ["42", 37, 12, 6, ""], ["142", 38, 30, 6, ""], ["47", 40, 12, 6, ""], ["64", 40, 12, 6, ""], ["164", 41, 31, 7, ""], ["73", 40, 12, 6, ""], ["173", 41, 32, 7, ""], ["22", 40, 12, 6, ""], ["122", 42, 33, 7, ""], ["24", 40, 12, 6, ""], ["84", 43, 34, 7, ""], ["88", 43, 34, 7, ""], ["124", 41, 35, 7, ""], ["26", 40, 12, 6, ""], ["126", 41, 36, 7, ""], ["25", 40, 12, 6, ""], ["125", 41, 37, 7, ""], ["27", 43, 34, 7, ""], ["39", 43, 34, 7, ""], ["91", 43, 34, 7, ""], ["86", 43, 34, 7, ""], ["186", 41, 38, 7, ""], ["89", 43, 34, 7, ""], ["95", 43, 34, 7, ""], ["05", 43, 34, 7, ""], ["14", 43, 34, 7, ""], ["01", 43, 34, 7, ""], ["03", 43, 34, 7, ""], ["04", 43, 34, 7, ""], ["06", 43, 34, 7, ""], ["07", 43, 34, 7, ""], ["08", 43, 34, 7, ""], ["09", 43, 34, 7, ""], ["10", 43, 34, 7, ""], ["11", 43, 34, 7, ""], ["111", 44, 39, 7, ""], ["12", 43, 34, 7, ""], ["13", 43, 34, 7, ""], ["113", 42, 40, 7, ""], ["15", 43, 34, 7, ""], ["17", 43, 34, 7, ""], ["18", 43, 34, 7, ""], ["19", 43, 34, 7, ""], ["21", 43, 34, 7, ""], ["121", 45, 41, 7, ""], ["28", 43, 34, 7, ""], ["29", 43, 34, 7, ""], ["30", 43, 34, 7, ""], ["31", 43, 34, 7, ""], ["32", 43, 34, 7, ""], ["33", 43, 34, 7, ""], ["35", 43, 34, 7, ""], ["37", 43, 34, 7, ""], ["40", 43, 34, 7, ""], ["41", 43, 34, 7, ""], ["43", 43, 34, 7, ""], ["44", 43, 34, 7, ""], ["45", 43, 34, 7, ""], ["46", 43, 34, 7, ""], ["48", 43, 34, 7, ""], ["49", 43, 34, 7, ""], ["51", 43, 34, 7, ""], ["83", 43, 34, 7, ""], ["53", 43, 34, 7, ""], ["55", 43, 34, 7, ""], ["56", 43, 34, 7, ""], ["57", 43, 34, 7, ""], ["58", 43, 34, 7, ""], ["60", 43, 34, 7, ""], ["62", 43, 34, 7, ""], ["65", 43, 34, 7, ""], ["67", 43, 34, 7, ""], ["68", 43, 34, 7, ""], ["69", 43, 34, 7, ""], ["70", 43, 34, 7, ""], ["71", 43, 34, 7, ""], ["72", 43, 34, 7, ""], ["75", 43, 34, 7, ""], ["80", 43, 34, 7, ""], ["76", 43, 34, 7, ""], ["79", 43, 34, 7, ""], ["87", 43, 34, 7, ""], ["94", 43, 34, 7, ""]]
  , iE = [[0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 8, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 8, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 8, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 11, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 11, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 11, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 8, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 8, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 8, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 10, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 8, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 8, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 8, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 10, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 8, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 7, 5, 5, 5, 5, 5, 5, 5, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 8, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 8, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 10, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 8, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 10, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 8, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 8, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 8, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 8, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 8, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 8, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 8, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 8, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 8, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 8, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 8, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 8, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 8, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 8, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 8, 1, 1, 1, 1, 1, 1, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7], [0, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 6, 3, 5, 5, 5, 5, 5, 5, 5, 5, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 5, 8, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 6, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 5, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 6, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 5, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 6, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 5, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 6, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 5, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 6, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 5, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 6, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 5, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 5, 5, 5, 5, 5, 5, 5, 3, 1, 4, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 6, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 6, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 1, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 1, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 1, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 1, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 1, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 1, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 1, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7]]
  , oE = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 9, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 9, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 9, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 9, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 9, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 9, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 9, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 9, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8]]
  , aE = [{
    width: 10,
    values: [10083394, 4564344, 4418529, 4418529, 8877771, 8636647, 5918529, 7431023, 9601145, 4418529, 6659279, 351793, 185147, 185147, 5863061, 5703817, 1685147, 4907599, 6340792, 185147, 14404849, 6520491, 6312185, 6312185, 12682530, 12338067, 7812185, 10615748, 13715922, 6312185, 7493249, 1185763, 1019117, 1019117, 6597317, 6418131, 2519117, 5522199, 7134876, 1019117, 12182829, 5875343, 5708698, 5708698, 10726187, 10434858, 7208698, 8978216, 11600172, 5708698, 6484471, 176984, 10339, 10339, 5709154, 5554090, 1510339, 4778773, 6174344, 10339, 10985789, 4678303, 4511658, 4511658, 9672271, 9409567, 6011658, 8096049, 10460382, 4511658, 11523879, 5216393, 5049748, 5049748, 10146024, 9870453, 6549748, 8492598, 10972737, 5049748, 9219104, 4173114, 4039798, 4039798, 8116819, 7896363, 5539798, 6794078, 8778190, 4039798, 9795298, 4433934, 4292286, 4292286, 8624121, 8389885, 5792286, 7218708, 9326827, 4292286, 25928729, 11736884, 11361932, 11361932, 22828555, 22208520, 12861932, 19108346, 24688659, 11361932]
}, {
    width: 10,
    values: [9579225, 4336127, 4197603, 9197603, 8433883, 8204814, 9197603, 7059472, 9121088, 4197603, 6326315, 334203, 175890, 5175890, 5569908, 5418627, 5175890, 4662219, 6023752, 175890, 13684607, 6194467, 5996575, 10996575, 12048404, 11721163, 10996575, 10084960, 13030126, 5996575, 7118587, 1126474, 968161, 5968161, 6267451, 6097224, 5968161, 5246089, 6778132, 968161, 11573688, 5581576, 5423263, 10423263, 10189877, 9913115, 10423263, 8529305, 11020164, 5423263, 6160247, 168135, 9822, 5009822, 5423696, 5276386, 5009822, 4539834, 5865627, 9822, 10436500, 4444388, 4286075, 9286075, 9188658, 8939089, 9286075, 7691247, 9937363, 4286075, 10947685, 4955573, 4797260, 9797260, 9638723, 9376931, 9797260, 8067968, 10424100, 4797260, 8758148, 3964459, 3837808, 8837808, 7710978, 7501544, 8837808, 6454375, 8339280, 3837808, 9305533, 4212237, 4077671, 9077671, 8192915, 7970391, 9077671, 6857773, 8860485, 4077671, 24632292, 11150040, 10793836, 15793836, 21687127, 21098094, 15793836, 18152928, 23454226, 10793836]
}, {
    width: 10,
    values: [9075055, 4107909, 3976676, 3976676, 7989994, 7772982, 5476676, 6687921, 8641031, 3976676, 5993351, 316613, 166633, 166633, 5276755, 5133436, 1666633, 4416839, 5706713, 166633, 12964364, 5868442, 5680966, 5680966, 11414277, 11104260, 7180966, 9554173, 12344330, 5680966, 6743924, 1067186, 917206, 917206, 5937585, 5776318, 2417206, 4969979, 6421389, 917206, 10964547, 5287809, 5137828, 5137828, 9653568, 9391372, 6637828, 8080394, 10440155, 5137828, 5836024, 159286, 9305, 9305, 5138238, 4998681, 1509305, 4300896, 5556910, 9305, 9887210, 4210473, 4060492, 4060492, 8705044, 8468611, 5560492, 7286444, 9414344, 4060492, 10371491, 4694754, 4544773, 4544773, 9131422, 8883408, 6044773, 7643338, 9875464, 4544773, 8297193, 3755803, 3635818, 3635818, 7305137, 7106726, 5135818, 6114671, 7900371, 3635818, 8815768, 3990541, 3863057, 3863057, 7761709, 7550897, 5363057, 6496838, 8394144, 3863057, 23335856, 10563196, 10225739, 10225739, 20545699, 19987668, 11725739, 17197511, 22219793, 10225739]
}, {
    width: 10,
    values: [8318800, 3765584, 3645287, 3645287, 7324161, 7125233, 5145287, 6130594, 7920945, 3645287, 5493905, 290229, 152747, 152747, 4837025, 4705649, 1652747, 4048769, 5231153, 152747, 11884001, 5379405, 5207552, 5207552, 10463088, 10178905, 6707552, 8757992, 11315635, 5207552, 6181930, 978254, 840772, 840772, 5442787, 5294958, 2340772, 4555814, 5886273, 840772, 10050834, 4847158, 4709676, 4709676, 8849104, 8608758, 6209676, 7407028, 9570142, 4709676, 5349688, 146012, 8530, 8530, 4710052, 4582124, 1508530, 3942488, 5093834, 8530, 9063276, 3859600, 3722118, 3722118, 7979624, 7762893, 5222118, 6679241, 8629815, 3722118, 9507201, 4303524, 4166042, 4166042, 8370470, 8143124, 5666042, 7006393, 9052508, 4166042, 13734763, 725573, 381867, 381867, 12092563, 11764123, 1881867, 10121923, 13077883, 381867, 7605760, 3442819, 3332833, 3332833, 6696376, 6514499, 4832833, 5605115, 7242007, 3332833, 8081120, 3657996, 3541136, 3541136, 7114900, 6921655, 5041136, 5955434, 7694632, 3541136, 21391201, 9682929, 9373594, 9373594, 18833558, 18322029, 10873594, 15764385, 20368144, 9373594]
}, {
    width: 10,
    values: [8066716, 3651475, 3534823, 3534823, 7102217, 6909317, 5034823, 5944819, 7680916, 5034823, 5327423, 281434, 148118, 148118, 4690449, 4563054, 1648118, 3926079, 5072634, 1648118, 11523879, 5216393, 5049748, 5049748, 10146024, 9870453, 6549748, 8492598, 10972737, 6549748, 5994599, 948610, 815294, 815294, 5277854, 5134505, 2315294, 4417759, 5707901, 2315294, 9746264, 4700274, 4566958, 4566958, 8580949, 8347887, 6066958, 7182573, 9280138, 6066958, 5187577, 141587, 8271, 8271, 4567323, 4443272, 1508271, 3823018, 4939475, 1508271, 8788632, 3742642, 3609326, 3609326, 7737817, 7527654, 5109326, 6476839, 8368306, 5109326, 9219104, 4173114, 4039798, 4039798, 8116819, 7896363, 5539798, 6794078, 8778190, 5539798, 12968942, 353969, 20678, 20678, 11418307, 11108180, 1520678, 9557546, 12348688, 1520678, 7375283, 3338491, 3231839, 3231839, 6493456, 6317090, 4731839, 5435263, 7022552, 4731839, 7836238, 3547147, 3433828, 3433828, 6899297, 6711908, 4933828, 5774967, 7461461, 4933828, 20742983, 9389507, 9089546, 9089546, 18262844, 17766816, 10589546, 15286677, 19750927, 10589546]
}, {
    width: 10,
    values: [8570885, 3879692, 3755750, 3755750, 7546106, 7341150, 5255750, 6316370, 8160973, 8755750, 5660387, 299024, 157375, 157375, 4983602, 4848245, 1657375, 4171459, 5389673, 5157375, 12244122, 5542417, 5365357, 5365357, 10780151, 10487357, 6865357, 9023385, 11658533, 10365357, 6369262, 1007898, 866250, 866250, 5607720, 5455411, 2366250, 4693869, 6064645, 5866250, 10355405, 4994042, 4852393, 4852393, 9117259, 8869630, 6352393, 7631483, 9860147, 9852393, 5511800, 150437, 8788, 8788, 4852781, 4720977, 1508788, 4061957, 5248192, 5008788, 9337921, 3976558, 3834909, 3834909, 8221430, 7998132, 5334909, 6881642, 8891325, 8834909, 9795298, 4433934, 4292286, 4292286, 8624121, 8389885, 5792286, 7218708, 9326827, 9292286, 14150968, 747560, 393438, 393438, 12459005, 12120612, 1893438, 10428648, 13474183, 5393438, 7836238, 3547147, 3433828, 3433828, 6899297, 6711908, 4933828, 5774967, 7461461, 8433828, 8326003, 3768844, 3648443, 3648443, 7330503, 7131402, 5148443, 6135902, 7927803, 8648443, 22039419, 9976351, 9657642, 9657642, 19404271, 18877242, 11157642, 16242094, 20985360, 14657642]
}, {
    width: 10,
    values: [11091734, 5020778, 4860382, 4860382, 9765548, 9500311, 4860382, 8174126, 10561260, 4860382, 7325207, 386972, 203662, 203662, 6449367, 6274199, 203662, 5398359, 6974871, 203662, 15845334, 7172540, 6943403, 6943403, 13950783, 13571873, 6943403, 11677322, 15087514, 6943403, 8242574, 1304339, 1121029, 1121029, 7257049, 7059944, 1121029, 6074419, 7848364, 1121029, 13401112, 6462877, 6279568, 6279568, 11798805, 11478344, 6279568, 9876037, 12760190, 6279568, 7132918, 194683, 11373, 11373, 6280069, 6109499, 11373, 5256650, 6791778, 11373, 12084368, 5146133, 4962823, 4962823, 10639498, 10350524, 4962823, 8905654, 11506420, 4962823, 12676267, 5738032, 5554722, 5554722, 11160627, 10857499, 5554722, 9341858, 12070011, 5554722, 10141014, 4590426, 4443778, 4443778, 8928501, 8685999, 4443778, 7473486, 9656009, 4443778, 10774827, 4877327, 4721514, 4721514, 9486533, 9228874, 4721514, 7940579, 10259509, 4721514, 71304004, 32276431, 31245314, 31245314, 62778525, 61073429, 31245314, 52547951, 67893812, 31245314]
}, {
    width: 10,
    values: [7814631, 3537366, 3424360, 3424360, 6880273, 6693401, 3424360, 5759043, 7440888, 3424360, 5160941, 272639, 143489, 143489, 4543872, 4420458, 143489, 3803389, 4914114, 143489, 11163758, 5053381, 4891943, 4891943, 9828961, 9562002, 4891943, 8227204, 10629839, 4891943, 5807268, 918966, 789816, 789816, 5112921, 4974051, 789816, 4279704, 5529529, 789816, 9441693, 4553391, 4424241, 4424241, 8312795, 8087015, 4424241, 6958117, 8990134, 4424241, 5025465, 137163, 8013, 8013, 4424594, 4304420, 8013, 3703549, 4785117, 8013, 8513987, 3625685, 3496535, 3496535, 7496010, 7292415, 3496535, 6274438, 8106796, 3496535, 8931007, 4042705, 3913554, 3913554, 7863169, 7649601, 3913554, 6581764, 8503871, 3913554, 7144805, 3234164, 3130844, 3130844, 6290535, 6119681, 3130844, 5265411, 6803097, 3130844, 7591356, 3436299, 3326521, 3326521, 6683693, 6502161, 3326521, 5594499, 7228291, 3326521, 20094765, 9096085, 8805498, 8805498, 17692130, 17211603, 8805498, 14808968, 19133711, 8805498, 14518170, 2297415, 1974540, 1974540, 12782302, 12435128, 1974540, 10699260, 13823823, 1974540]
}, {
    width: 10,
    values: [7562546, 3423258, 3313897, 3313897, 6658328, 6477485, 3313897, 5573267, 7200859, 3313897, 4994459, 263845, 138861, 138861, 4397296, 4277863, 138861, 3680699, 4755594, 138861, 10803637, 4890368, 4734138, 4734138, 9511898, 9253550, 4734138, 7961811, 10286941, 4734138, 5619937, 889322, 764338, 764338, 4947988, 4813598, 764338, 4141649, 5351157, 764338, 9137122, 4406507, 4281523, 4281523, 8044640, 7826144, 4281523, 6733662, 8700129, 4281523, 4863353, 132738, 7754, 7754, 4281865, 4165568, 7754, 3584080, 4630758, 7754, 8239342, 3508727, 3383743, 3383743, 7254203, 7057176, 3383743, 6072037, 7845287, 3383743, 8642910, 3912295, 3787311, 3787311, 7609518, 7402840, 3787311, 6369449, 8229553, 3787311, 6914328, 3129836, 3029849, 3029849, 6087615, 5922272, 3029849, 5095559, 6583642, 3029849, 7346473, 3325450, 3219214, 3219214, 6468090, 6292414, 3219214, 5414031, 6995120, 3219214, 19446547, 8802663, 8521449, 8521449, 17121416, 16656390, 8521449, 14331259, 18516494, 8521449, 12486149, 659611, 347152, 347152, 10993239, 10694658, 347152, 9201749, 11888985, 347152]
}, {
    width: 10,
    values: [7310461, 3309149, 3203434, 3203434, 6436384, 6261569, 3203434, 5387492, 6960830, 3203434, 4827977, 255050, 134232, 134232, 4250719, 4135268, 134232, 3558009, 4597074, 134232, 10443516, 4727356, 4576334, 4576334, 9194834, 8945098, 4576334, 7696417, 9944043, 4576334, 5432606, 859678, 738860, 738860, 4783055, 4653145, 738860, 4003594, 5172785, 738860, 8832551, 4259624, 4138806, 4138806, 7776485, 7565272, 4138806, 6509206, 8410125, 4138806, 4701241, 128314, 7496, 7496, 4139136, 4026715, 7496, 3464610, 4476399, 7496, 7964697, 3391770, 3270952, 3270952, 7012397, 6821936, 3270952, 5869636, 7583777, 3270952, 8354813, 3781885, 3661067, 3661067, 7355868, 7156079, 3661067, 6157134, 7955235, 3661067, 6683850, 3025508, 2928854, 2928854, 5884694, 5724863, 2928854, 4925707, 6364188, 2928854, 7101591, 3214602, 3111907, 3111907, 6252487, 6082667, 3111907, 5233564, 6761949, 3111907, 18798328, 8509241, 8237401, 8237401, 16550702, 16101177, 8237401, 13853551, 17899278, 8237401, 12069944, 637624, 335580, 335580, 10626798, 10338169, 335580, 8895024, 11492685, 335580]
}, {
    width: 10,
    values: [5445033, 2464746, 2386006, 2386006, 4793996, 4663789, 2386006, 4012753, 5184618, 2386006, 3596011, 189968, 99980, 99980, 3166053, 3080061, 99980, 2650104, 3424028, 99980, 7778619, 3521065, 3408580, 3408580, 6848566, 6662556, 3408580, 5732504, 7406598, 3408580, 4046354, 640312, 550323, 550323, 3562551, 3465791, 550323, 2981987, 3852833, 550323, 6578728, 3172685, 3082697, 3082697, 5792141, 5634823, 3082697, 4848236, 6264093, 3082697, 3501614, 95572, 5583, 5583, 3082943, 2999209, 5583, 2580537, 3334146, 5583, 5932326, 2526284, 2436295, 2436295, 5223026, 5081166, 2436295, 4371867, 5648606, 2436295, 6222895, 2816852, 2726864, 2726864, 5478853, 5330045, 2726864, 4586003, 5925278, 2726864, 4978316, 2253482, 2181491, 2181491, 4383082, 4264036, 2181491, 3668802, 4740223, 2181491, 5289461, 2394324, 2317834, 2317834, 4657025, 4530538, 2317834, 3898103, 5036486, 2317834, 14001513, 6337917, 6135443, 6135443, 12327419, 11992601, 6135443, 10318507, 13331876, 6135443]
}, {
    width: 10,
    values: [4840029, 2190885, 2120894, 2120894, 4261330, 4145590, 2120894, 3566891, 4608550, 2120894, 3196454, 168861, 88871, 88871, 2814269, 2737832, 88871, 2355648, 3043580, 88871, 6914328, 3129836, 3029849, 3029849, 6087615, 5922272, 3029849, 5095559, 6583642, 3029849, 3596760, 569166, 489176, 489176, 3166712, 3080703, 489176, 2650655, 3424741, 489176, 5847758, 2820165, 2740175, 2740175, 5148570, 5008732, 2740175, 4309544, 5568083, 2740175, 3112546, 84952, 4963, 4963, 2740394, 2665963, 4963, 2293811, 2963685, 4963, 5273179, 2245585, 2165596, 2165596, 4642690, 4516592, 2165596, 3886104, 5020983, 2165596, 5531462, 2503869, 2423879, 2423879, 4870092, 4737818, 2423879, 4076447, 5266914, 2423879, 4425170, 2003095, 1939103, 1939103, 3896073, 3790254, 1939103, 3261158, 4213531, 1939103, 4701743, 2128288, 2060297, 2060297, 4139578, 4027145, 2060297, 3464980, 4476877, 2060297, 12445790, 5633704, 5453727, 5453727, 10957706, 10660089, 5453727, 9172006, 11850556, 5453727]
}, {
    width: 10,
    values: [4235026, 1917024, 1855782, 1855782, 3728664, 3627392, 1855782, 3121030, 4032481, 1855782, 2796897, 147753, 77762, 77762, 2462486, 2395603, 77762, 2061192, 2663133, 77762, 6050037, 2738606, 2651118, 2651118, 5326663, 5181988, 2651118, 4458614, 5760687, 2651118, 3147165, 498020, 428029, 428029, 2770873, 2695615, 428029, 2319323, 2996648, 428029, 5116788, 2467644, 2397653, 2397653, 4504998, 4382640, 2397653, 3770851, 4872072, 2397653, 2723478, 74333, 4342, 4342, 2397845, 2332718, 4342, 2007085, 2593224, 4342, 4614032, 1964887, 1894896, 1894896, 4062354, 3952018, 1894896, 3400341, 4393360, 1894896, 4840029, 2190885, 2120894, 2120894, 4261330, 4145590, 2120894, 3566891, 4608550, 2120894, 6808694, 185833, 10856, 10856, 5994611, 5831795, 10856, 5017712, 6483061, 10856, 3872023, 1752708, 1696715, 1696715, 3409064, 3316472, 1696715, 2853513, 3686840, 1696715, 4114025, 1862252, 1802760, 1802760, 3622131, 3523752, 1802760, 3031858, 3917267, 1802760, 10890066, 4929491, 4772012, 4772012, 9587993, 9327578, 4772012, 8025505, 10369237, 4772012]
}, {
    width: 10,
    values: [3025018, 1369303, 1325559, 1325559, 2663331, 2590994, 1325559, 2229307, 2880344, 1325559, 1997784, 105538, 55544, 55544, 1758918, 1711145, 55544, 1472280, 1902238, 55544, 4321455, 1956147, 1893655, 1893655, 3804759, 3701420, 1893655, 3184724, 4114777, 1893655, 2247975, 355729, 305735, 305735, 1979195, 1925439, 305735, 1656660, 2140463, 305735, 3654849, 1762603, 1712609, 1712609, 3217856, 3130457, 1712609, 2693465, 3480052, 1712609, 1945341, 53095, 3102, 3102, 1712746, 1666227, 3102, 1433632, 1852303, 3102, 3295737, 1403491, 1353497, 1353497, 2901681, 2822870, 1353497, 2428815, 3138115, 1353497, 3457164, 1564918, 1514924, 1514924, 3043807, 2961136, 1514924, 2547779, 3291821, 1514924, 2765731, 1251934, 1211939, 1211939, 2435046, 2368909, 1211939, 2038224, 2633457, 1211939, 2938589, 1330180, 1287686, 1287686, 2587236, 2516966, 1287686, 2165613, 2798048, 1287686, 7778619, 3521065, 3408580, 3408580, 6848566, 6662556, 3408580, 5732504, 7406598, 3408580]
}, {
    width: 10,
    values: [2823350, 1278016, 1237188, 1237188, 2485776, 2418261, 1237188, 2080687, 2688321, 1237188, 1864598, 98502, 51841, 51841, 1641657, 1597069, 51841, 1374128, 1775422, 51841, 4033358, 1825738, 1767412, 1767412, 3551108, 3454659, 1767412, 2972409, 3840458, 1767412, 2098110, 332014, 285353, 285353, 1847249, 1797077, 285353, 1546216, 1997765, 285353, 3411192, 1645096, 1598435, 1598435, 3003332, 2921760, 1598435, 2513900, 3248048, 1598435, 1815652, 49556, 2895, 2895, 1598563, 1555145, 2895, 1338056, 1728816, 2895, 3076021, 1309925, 1263264, 1263264, 2708236, 2634679, 1263264, 2266894, 2928907, 1263264, 3226686, 1460590, 1413929, 1413929, 2840887, 2763727, 1413929, 2377927, 3072366, 1413929, 2581349, 1168472, 1131143, 1131143, 2272709, 2210982, 1131143, 1902342, 2457893, 1131143, 2742683, 1241502, 1201840, 1201840, 2414754, 2349168, 1201840, 2021238, 2611511, 1201840, 7260044, 3286328, 3181341, 3181341, 6391995, 6218386, 3181341, 5350337, 6912825, 3181341]
}, {
    width: 10,
    values: [2722517, 1232373, 1193003, 1193003, 2396998, 2331895, 1193003, 2006376, 2592309, 1193003, 1798005, 94984, 49990, 49990, 1583026, 1540031, 49990, 1325052, 1712014, 49990, 3889309, 1760533, 1704290, 1704290, 3424283, 3331278, 1704290, 2866252, 3703299, 1704290, 2023177, 320156, 275162, 275162, 1781276, 1732895, 275162, 1490994, 1926417, 275162, 3289364, 1586343, 1541348, 1541348, 2896070, 2817412, 1541348, 2424118, 3132047, 1541348, 1750807, 47786, 2792, 2792, 1541471, 1499604, 2792, 1290269, 1667073, 2792, 2966163, 1263142, 1218148, 1218148, 2611513, 2540583, 1218148, 2185933, 2824303, 1218148, 3111447, 1408426, 1363432, 1363432, 2739427, 2665022, 1363432, 2293001, 2962639, 1363432, 4377018, 119464, 6979, 6979, 3853679, 3749011, 6979, 3225672, 4167682, 6979, 2489158, 1126741, 1090745, 1090745, 2191541, 2132018, 1090745, 1834401, 2370111, 1090745, 2644730, 1197162, 1158917, 1158917, 2328513, 2265269, 1158917, 1949051, 2518243, 1158917, 7000757, 3168959, 3067722, 3067722, 6163710, 5996300, 3067722, 5159253, 6665938, 3067722]
}, {
    width: 10,
    values: [2621683, 1186729, 1148818, 1148818, 2308221, 2245528, 1148818, 1932066, 2496298, 1148818, 1731413, 91466, 48138, 48138, 1524396, 1482993, 48138, 1275976, 1648606, 48138, 3745261, 1695328, 1641168, 1641168, 3297458, 3207897, 1641168, 2760094, 3566140, 1641168, 1948245, 308298, 264971, 264971, 1715302, 1668714, 264971, 1435772, 1855068, 264971, 3167536, 1527589, 1484261, 1484261, 2788809, 2713063, 1484261, 2334336, 3016045, 1484261, 1685962, 46016, 2688, 2688, 1484380, 1444063, 2688, 1242481, 1605329, 2688, 2856305, 1216359, 1173031, 1173031, 2514790, 2446488, 1173031, 2104973, 2719699, 1173031, 2996209, 1356262, 1312934, 1312934, 2637966, 2566318, 1312934, 2208076, 2852912, 1312934, 4214906, 115040, 6720, 6720, 3710950, 3610159, 6720, 3106202, 4013324, 6720, 2396967, 1085010, 1050348, 1050348, 2110373, 2053054, 1050348, 1766460, 2282329, 1050348, 2546777, 1152823, 1115994, 1115994, 2242271, 2181370, 1115994, 1876864, 2424975, 1115994, 6741469, 3051590, 2954102, 2954102, 5935424, 5774215, 2954102, 4968170, 6419051, 2954102]
}, {
    width: 10,
    values: [2520849, 1141086, 1104632, 1104632, 2219443, 2159162, 1104632, 1857756, 2400286, 1104632, 1664820, 87948, 46287, 46287, 1465765, 1425954, 46287, 1226900, 1585198, 46287, 3601212, 1630123, 1578046, 1578046, 3170633, 3084517, 1578046, 2653937, 3428980, 1578046, 1873312, 296441, 254779, 254779, 1649329, 1604533, 254779, 1380550, 1783719, 254779, 3045707, 1468836, 1427174, 1427174, 2681547, 2608715, 1427174, 2244554, 2900043, 1427174, 1621118, 44246, 2585, 2585, 1427288, 1388523, 2585, 1194693, 1543586, 2585, 2746447, 1169576, 1127914, 1127914, 2418068, 2352392, 1127914, 2024012, 2615096, 1127914, 2880970, 1304098, 1262437, 1262437, 2536506, 2467613, 1262437, 2123150, 2743184, 1262437, 2304776, 1043279, 1009950, 1009950, 2029205, 1974091, 1009950, 1698520, 2194547, 1009950, 2448824, 1108483, 1073071, 1073071, 2156030, 2097471, 1073071, 1804677, 2331707, 1073071, 4052794, 110615, 6462, 6462, 3568221, 3471306, 6462, 2986733, 3858965, 6462, 6482182, 2934221, 2840483, 2840483, 5707139, 5552130, 2840483, 4777086, 6172165, 2840483]
}, {
    width: 10,
    values: [2117513, 958512, 927891, 927891, 1864332, 1813696, 927891, 1560515, 2016240, 927891, 1398449, 73876, 38881, 38881, 1231243, 1197802, 38881, 1030596, 1331566, 38881, 3025018, 1369303, 1325559, 1325559, 2663331, 2590994, 1325559, 2229307, 2880344, 1325559, 1573582, 249010, 214015, 214015, 1385437, 1347807, 214015, 1159662, 1498324, 214015, 2558394, 1233822, 1198827, 1198827, 2252499, 2191320, 1198827, 1885425, 2436036, 1198827, 1361739, 37167, 2171, 2171, 1198922, 1166359, 2171, 1003542, 1296612, 2171, 2307016, 982444, 947448, 947448, 2031177, 1976009, 947448, 1700170, 2196680, 947448, 2420015, 1095443, 1060447, 1060447, 2130665, 2072795, 1060447, 1783446, 2304275, 1060447, 1936012, 876354, 848358, 848358, 1704532, 1658236, 848358, 1426756, 1843420, 848358, 2057012, 931126, 901380, 901380, 1811065, 1761876, 901380, 1515929, 1958634, 901380, 5445033, 2464746, 2386006, 2386006, 4793996, 4663789, 2386006, 4012753, 5184618, 2386006]
}, {
    width: 10,
    values: [1966262, 890047, 861613, 861613, 1731165, 1684146, 861613, 1449050, 1872223, 861613, 1298559, 68600, 36104, 36104, 1143297, 1112244, 36104, 956982, 1236454, 36104, 2808946, 1271496, 1230876, 1230876, 2473093, 2405923, 1230876, 2070071, 2674605, 1230876, 1461184, 231224, 198728, 198728, 1286477, 1251535, 198728, 1076829, 1391301, 198728, 2375652, 1145692, 1113196, 1113196, 2091606, 2034797, 1113196, 1750752, 2262034, 1113196, 1264472, 34512, 2016, 2016, 1113285, 1083048, 2016, 931861, 1203997, 2016, 2142229, 912269, 879773, 879773, 1886093, 1834866, 879773, 1578730, 2039775, 879773, 2247156, 1017197, 984701, 984701, 1978475, 1924738, 984701, 1656057, 2139684, 984701, 1797725, 813757, 787761, 787761, 1582780, 1539791, 787761, 1324845, 1711747, 787761, 1910083, 864617, 836996, 836996, 1681704, 1636028, 836996, 1407648, 1818731, 836996, 5056102, 2288692, 2215577, 2215577, 4451568, 4330661, 2215577, 3726127, 4814289, 2215577]
}, {
    width: 10,
    values: [1891645, 856271, 828916, 828916, 1665470, 1620235, 828916, 1394060, 1801175, 828916, 1249281, 65996, 34734, 34734, 1099910, 1070036, 34734, 920666, 1189533, 34734, 2702350, 1223244, 1184166, 1184166, 2379243, 2314621, 1184166, 1991514, 2573107, 1184166, 1405734, 222449, 191186, 191186, 1237657, 1204041, 191186, 1035964, 1338503, 191186, 2285499, 1102214, 1070952, 1070952, 2012233, 1957579, 1070952, 1684313, 2176192, 1070952, 1216487, 33202, 1940, 1940, 1071037, 1041947, 1940, 896498, 1158307, 1940, 2060934, 877650, 846387, 846387, 1814518, 1765235, 846387, 1518819, 1962368, 846387, 2161880, 978595, 947333, 947333, 1903394, 1851697, 947333, 1593211, 2058486, 947333, 5713747, 2755536, 2677379, 2677379, 5030582, 4893949, 2677379, 4210783, 5440481, 2677379, 1729504, 782876, 757866, 757866, 1522715, 1481358, 757866, 1274569, 1646788, 757866, 1837598, 831806, 805233, 805233, 1617885, 1573942, 805233, 1354230, 1749713, 805233, 4864230, 2201839, 2131498, 2131498, 4282637, 4166318, 2131498, 3584726, 4631592, 2131498]
}, {
    width: 10,
    values: [1815011, 821582, 795335, 795335, 1597999, 1554596, 795335, 1337584, 1728206, 795335, 1198670, 63323, 33327, 33327, 1055351, 1026687, 33327, 883368, 1141343, 33327, 2592873, 1173688, 1136193, 1136193, 2282855, 2220852, 1136193, 1910835, 2468866, 1136193, 1348785, 213437, 183441, 183441, 1187517, 1155264, 183441, 993996, 1284278, 183441, 2192909, 1057562, 1027566, 1027566, 1930714, 1878274, 1027566, 1616079, 2088031, 1027566, 1167205, 31857, 1861, 1861, 1027648, 999736, 1861, 860179, 1111382, 1861, 1977442, 842095, 812098, 812098, 1741009, 1693722, 812098, 1457289, 1882869, 812098, 2074298, 938951, 908955, 908955, 1826284, 1776682, 908955, 1528668, 1975093, 908955, 2918012, 79643, 4653, 4653, 2569119, 2499341, 4653, 2150448, 2778455, 4653, 1659439, 751161, 727164, 727164, 1461027, 1421345, 727164, 1222934, 1580074, 727164, 1763154, 798108, 772611, 772611, 1552342, 1510179, 772611, 1299368, 1678829, 772611, 4667171, 2112639, 2045148, 2045148, 4109140, 3997534, 2045148, 3439502, 4443959, 2045148]
}, {
    width: 10,
    values: [1815011, 821582, 795335, 795335, 1597999, 1554596, 795335, 1337584, 1728206, 795335, 1198670, 63323, 33327, 33327, 1055351, 1026687, 33327, 883368, 1141343, 33327, 2592873, 1173688, 1136193, 1136193, 2282855, 2220852, 1136193, 1910835, 2468866, 1136193, 1348785, 213437, 183441, 183441, 1187517, 1155264, 183441, 993996, 1284278, 183441, 2192909, 1057562, 1027566, 1027566, 1930714, 1878274, 1027566, 1616079, 2088031, 1027566, 1167205, 31857, 1861, 1861, 1027648, 999736, 1861, 860179, 1111382, 1861, 1977442, 842095, 812098, 812098, 1741009, 1693722, 812098, 1457289, 1882869, 812098, 2074298, 938951, 908955, 908955, 1826284, 1776682, 908955, 1528668, 1975093, 908955, 2996676, 158307, 83316, 83316, 2638377, 2566718, 83316, 2208420, 2853356, 83316, 1659439, 751161, 727164, 727164, 1461027, 1421345, 727164, 1222934, 1580074, 727164, 1763154, 798108, 772611, 772611, 1552342, 1510179, 772611, 1299368, 1678829, 772611, 4667171, 2112639, 2045148, 2045148, 4109140, 3997534, 2045148, 3439502, 4443959, 2045148]
}, {
    width: 10,
    values: [1740394, 787806, 762638, 762638, 1532303, 1490685, 762638, 1282595, 1657158, 762638, 1149392, 60719, 31956, 31956, 1011964, 984479, 31956, 847052, 1094421, 31956, 2486277, 1125437, 1089483, 1089483, 2189005, 2129550, 1089483, 1832278, 2367368, 1089483, 1293335, 204663, 175900, 175900, 1138697, 1107769, 175900, 953132, 1231480, 175900, 2102756, 1014084, 985321, 985321, 1851340, 1801057, 985321, 1549640, 2002190, 985321, 1119220, 30547, 1785, 1785, 985400, 958636, 1785, 824816, 1065692, 1785, 1896147, 807475, 778712, 778712, 1669434, 1624091, 778712, 1397378, 1805462, 778712, 1989022, 900349, 871586, 871586, 1751204, 1703640, 871586, 1465822, 1893894, 871586, 1591217, 720280, 697269, 697269, 1400963, 1362912, 697269, 1172658, 1515116, 697269, 1690668, 765297, 740848, 740848, 1488523, 1448094, 740848, 1245949, 1609810, 740848, 2798049, 76369, 4461, 4461, 2463500, 2396590, 4461, 2062041, 2664229, 4461, 4475299, 2025786, 1961070, 1961070, 3940209, 3833191, 1961070, 3298100, 4261263, 1961070]
}, {
    width: 10,
    values: [1210007, 547721, 530224, 530224, 1065333, 1036398, 530224, 891723, 1152137, 530224, 799114, 42215, 22218, 22218, 703567, 684458, 22218, 588912, 760895, 22218, 1728582, 782459, 757462, 757462, 1521904, 1480568, 757462, 1273890, 1645911, 757462, 899190, 142292, 122294, 122294, 791678, 770176, 122294, 662664, 856185, 122294, 1461940, 705041, 685044, 685044, 1287142, 1252183, 685044, 1077386, 1392021, 685044, 778136, 21238, 1241, 1241, 685098, 666491, 1241, 573453, 740921, 1241, 1318295, 561396, 541399, 541399, 1160673, 1129148, 541399, 971526, 1255246, 541399, 1382866, 625967, 605970, 605970, 1217523, 1184454, 605970, 1019112, 1316728, 605970, 1106292, 500774, 484776, 484776, 974018, 947564, 484776, 815289, 1053383, 484776, 1175436, 532072, 515074, 515074, 1034894, 1006786, 515074, 866245, 1119219, 515074, 3111447, 1408426, 1363432, 1363432, 2739427, 2665022, 1363432, 2293001, 2962639, 1363432]
}, {
    width: 10,
    values: [1159590, 524900, 508131, 508131, 1020944, 993214, 508131, 854568, 1104132, 508131, 765817, 40456, 21292, 21292, 674252, 655939, 21292, 564374, 729191, 21292, 1656558, 749856, 725901, 725901, 1458491, 1418878, 725901, 1220811, 1577331, 725901, 861724, 136363, 117198, 117198, 758691, 738085, 117198, 635053, 820511, 117198, 1401025, 675664, 656500, 656500, 1233511, 1200009, 656500, 1032495, 1334020, 656500, 745714, 20353, 1189, 1189, 656553, 638720, 1189, 549559, 710050, 1189, 1263366, 538005, 518841, 518841, 1112311, 1082100, 518841, 931046, 1202944, 518841, 1325246, 599885, 580721, 580721, 1166793, 1135102, 580721, 976649, 1261865, 580721, 1060197, 479908, 464577, 464577, 933434, 908082, 464577, 781319, 1009492, 464577, 1126459, 509902, 493613, 493613, 991774, 964837, 493613, 830151, 1072585, 493613, 2981804, 1349742, 1306622, 1306622, 2625284, 2553980, 1306622, 2197460, 2839196, 1306622]
}, {
    width: 10,
    values: [1109173, 502078, 486038, 486038, 976555, 950031, 486038, 817413, 1056126, 486038, 732521, 38697, 20366, 20366, 644937, 627420, 20366, 539836, 697487, 20366, 1584533, 717254, 694340, 694340, 1395078, 1357187, 694340, 1167732, 1508751, 694340, 824257, 130434, 112103, 112103, 725705, 705994, 112103, 607442, 784836, 112103, 1340111, 646288, 627957, 627957, 1179881, 1147834, 627957, 987604, 1276019, 627957, 713292, 19468, 1137, 1137, 628007, 610950, 1137, 525665, 679178, 1137, 1208437, 514613, 496282, 496282, 1063950, 1035052, 496282, 890565, 1150642, 496282, 1267627, 573803, 555472, 555472, 1116063, 1085750, 555472, 934186, 1207001, 555472, 1783229, 48671, 2843, 2843, 1570017, 1527375, 2843, 1314163, 1697945, 2843, 1014101, 459043, 444378, 444378, 892850, 868600, 444378, 747349, 965601, 444378, 1077483, 487733, 472151, 472151, 948653, 922887, 472151, 794058, 1025951, 472151, 2852160, 1291057, 1249813, 1249813, 2511141, 2442937, 1249813, 2101918, 2715752, 1249813]
}, {
    width: 10,
    values: [832888, 377015, 364971, 364971, 733304, 713387, 364971, 613803, 793055, 364971, 550056, 29058, 15293, 15293, 484289, 471135, 15293, 405368, 523749, 15293, 1189841, 538593, 521386, 521386, 1047577, 1019124, 521386, 876861, 1132935, 521386, 618942, 97944, 84179, 84179, 544938, 530138, 84179, 456134, 589341, 84179, 1006302, 485303, 471538, 471538, 885983, 861919, 471538, 741601, 958174, 471538, 535617, 14619, 854, 854, 471576, 458768, 854, 394727, 510001, 854, 907426, 386428, 372663, 372663, 798930, 777230, 372663, 668734, 864028, 372663, 951872, 430874, 417109, 417109, 838062, 815299, 417109, 701489, 906348, 417109, 761498, 344699, 333687, 333687, 670449, 652240, 333687, 561191, 725078, 333687, 809092, 366243, 354543, 354543, 712352, 693005, 354543, 596265, 770396, 354543, 2141713, 969467, 938496, 938496, 1885639, 1834424, 938496, 1578349, 2039283, 938496]
}, {
    width: 10,
    values: [756255, 342326, 331390, 331390, 665833, 647748, 331390, 557327, 720086, 331390, 499446, 26384, 13886, 13886, 439730, 427786, 13886, 368070, 475559, 13886, 1080364, 489037, 473414, 473414, 951190, 925355, 473414, 796181, 1028694, 473414, 561994, 88932, 76434, 76434, 494799, 481360, 76434, 414165, 535116, 76434, 913712, 440651, 428152, 428152, 804464, 782614, 428152, 673366, 870013, 428152, 486335, 13274, 775, 775, 428187, 416557, 775, 358408, 463076, 775, 823934, 350873, 338374, 338374, 725420, 705718, 338374, 607204, 784529, 338374, 1215838, 33185, 1939, 1939, 1070466, 1041392, 1939, 896020, 1157689, 1939, 864291, 391229, 378731, 378731, 760952, 740284, 378731, 636945, 822955, 378731, 691433, 312984, 302985, 302985, 608761, 592227, 302985, 509556, 658364, 302985, 734647, 332545, 321921, 321921, 646809, 629241, 321921, 541403, 699512, 321921, 1944655, 880266, 852145, 852145, 1712142, 1665639, 852145, 1433126, 1851649, 852145]
}, {
    width: 10,
    values: [756255, 342326, 331390, 331390, 665833, 647748, 331390, 557327, 720086, 331390, 499446, 26384, 13886, 13886, 439730, 427786, 13886, 368070, 475559, 13886, 1080364, 489037, 473414, 473414, 951190, 925355, 473414, 796181, 1028694, 473414, 561994, 88932, 76434, 76434, 494799, 481360, 76434, 414165, 535116, 76434, 913712, 440651, 428152, 428152, 804464, 782614, 428152, 673366, 870013, 428152, 486335, 13274, 775, 775, 428187, 416557, 775, 358408, 463076, 775, 823934, 350873, 338374, 338374, 725420, 705718, 338374, 607204, 784529, 338374, 864291, 391229, 378731, 378731, 760952, 740284, 378731, 636945, 822955, 378731, 1215838, 33185, 1939, 1939, 1070466, 1041392, 1939, 896020, 1157689, 1939, 691433, 312984, 302985, 302985, 608761, 592227, 302985, 509556, 658364, 302985, 734647, 332545, 321921, 321921, 646809, 629241, 321921, 541403, 699512, 321921, 1944655, 880266, 852145, 852145, 1712142, 1665639, 852145, 1433126, 1851649, 852145]
}, {
    width: 10,
    values: [796588, 360583, 349064, 349064, 701344, 682295, 349064, 587051, 758490, 349064, 526083, 27792, 14627, 14627, 463182, 450602, 14627, 387700, 500923, 14627, 1137983, 515119, 498663, 498663, 1001920, 974707, 498663, 838644, 1083558, 498663, 591967, 93675, 80510, 80510, 521188, 507032, 80510, 436254, 563655, 80510, 962444, 464152, 450987, 450987, 847369, 824354, 450987, 709279, 916414, 450987, 512273, 13982, 817, 817, 451023, 438773, 817, 377523, 487773, 817, 867877, 369586, 356421, 356421, 764109, 743356, 356421, 639588, 826370, 356421, 910386, 412095, 398930, 398930, 801536, 779766, 398930, 670915, 866846, 398930, 1280683, 34954, 2042, 2042, 1127558, 1096933, 2042, 943808, 1219433, 2042, 728309, 329676, 319144, 319144, 641229, 623813, 319144, 536732, 693477, 319144, 773829, 350281, 339091, 339091, 681306, 662801, 339091, 570278, 736819, 339091, 2048370, 927214, 897593, 897593, 1803456, 1754473, 897593, 1509559, 1950404, 897593]
}, {
    width: 10,
    values: [756255, 342326, 331390, 331390, 665833, 647748, 331390, 557327, 720086, 331390, 499446, 26384, 13886, 13886, 439730, 427786, 13886, 368070, 475559, 13886, 1080364, 489037, 473414, 473414, 951190, 925355, 473414, 796181, 1028694, 473414, 561994, 88932, 76434, 76434, 494799, 481360, 76434, 414165, 535116, 76434, 913712, 440651, 428152, 428152, 804464, 782614, 428152, 673366, 870013, 428152, 486335, 13274, 775, 775, 428187, 416557, 775, 358408, 463076, 775, 823934, 350873, 338374, 338374, 725420, 705718, 338374, 607204, 784529, 338374, 864291, 391229, 378731, 378731, 760952, 740284, 378731, 636945, 822955, 378731, 691433, 312984, 302985, 302985, 608761, 592227, 302985, 509556, 658364, 302985, 734647, 332545, 321921, 321921, 646809, 629241, 321921, 541403, 699512, 321921, 1215838, 33185, 1939, 1939, 1070466, 1041392, 1939, 896020, 1157689, 1939, 1944655, 880266, 852145, 852145, 1712142, 1665639, 852145, 1433126, 1851649, 852145]
}, {
    width: 10,
    values: [796588, 360583, 349064, 349064, 701344, 682295, 349064, 587051, 758490, 349064, 526083, 27792, 14627, 14627, 463182, 450602, 14627, 387700, 500923, 14627, 1137983, 515119, 498663, 498663, 1001920, 974707, 498663, 838644, 1083558, 498663, 591967, 93675, 80510, 80510, 521188, 507032, 80510, 436254, 563655, 80510, 962444, 464152, 450987, 450987, 847369, 824354, 450987, 709279, 916414, 450987, 512273, 13982, 817, 817, 451023, 438773, 817, 377523, 487773, 817, 867877, 369586, 356421, 356421, 764109, 743356, 356421, 639588, 826370, 356421, 910386, 412095, 398930, 398930, 801536, 779766, 398930, 670915, 866846, 398930, 1479917, 234188, 201276, 201276, 1302970, 1267581, 201276, 1090634, 1409138, 201276, 728309, 329676, 319144, 319144, 641229, 623813, 319144, 536732, 693477, 319144, 773829, 350281, 339091, 339091, 681306, 662801, 339091, 570278, 736819, 339091, 2048370, 927214, 897593, 897593, 1803456, 1754473, 897593, 1509559, 1950404, 897593]
}, {
    width: 10,
    values: [776421, 351454, 340227, 340227, 683588, 665022, 340227, 572189, 739288, 340227, 512764, 27088, 14256, 14256, 451456, 439194, 14256, 377885, 488241, 14256, 1109173, 502078, 486038, 486038, 976555, 950031, 486038, 817413, 1056126, 486038, 576980, 91304, 78472, 78472, 507993, 494196, 78472, 425209, 549385, 78472, 938078, 452401, 439570, 439570, 825916, 803484, 439570, 691323, 893213, 439570, 499304, 13628, 796, 796, 439605, 427665, 796, 367966, 475424, 796, 845906, 360229, 347398, 347398, 744765, 724537, 347398, 623396, 805449, 347398, 887339, 401662, 388831, 388831, 781244, 760025, 388831, 653930, 844901, 388831, 709871, 321330, 311064, 311064, 624995, 608020, 311064, 523144, 675921, 311064, 754238, 341413, 330506, 330506, 664057, 646021, 330506, 555841, 718166, 330506, 1996512, 903740, 874869, 874869, 1757799, 1710056, 874869, 1471343, 1901027, 874869]
}, {
    width: 10,
    values: [705838, 319504, 309297, 309297, 621444, 604565, 309297, 520172, 672080, 309297, 466150, 24625, 12960, 12960, 410414, 399267, 12960, 343532, 443855, 12960, 1008339, 456434, 441853, 441853, 887777, 863665, 441853, 743102, 960115, 441853, 524527, 83003, 71338, 71338, 461812, 449269, 71338, 386554, 499441, 71338, 852798, 411274, 399609, 399609, 750833, 730440, 399609, 628475, 812012, 399609, 453913, 12389, 724, 724, 399641, 388786, 724, 334514, 432204, 724, 769005, 327481, 315816, 315816, 677059, 658670, 315816, 566723, 732227, 315816, 806672, 365148, 353482, 353482, 710222, 690932, 353482, 594482, 768092, 353482, 645337, 292118, 282786, 282786, 568177, 552745, 282786, 475585, 614473, 282786, 685671, 310375, 300460, 300460, 603688, 587292, 300460, 505310, 652878, 300460, 1815011, 821582, 795335, 795335, 1597999, 1554596, 795335, 1337584, 1728206, 795335]
}, {
    width: 10,
    values: [705838, 319504, 309297, 309297, 621444, 604565, 309297, 520172, 672080, 309297, 466150, 24625, 12960, 12960, 410414, 399267, 12960, 343532, 443855, 12960, 1008339, 456434, 441853, 441853, 887777, 863665, 441853, 743102, 960115, 441853, 524527, 83003, 71338, 71338, 461812, 449269, 71338, 386554, 499441, 71338, 852798, 411274, 399609, 399609, 750833, 730440, 399609, 628475, 812012, 399609, 453913, 12389, 724, 724, 399641, 388786, 724, 334514, 432204, 724, 769005, 327481, 315816, 315816, 677059, 658670, 315816, 566723, 732227, 315816, 806672, 365148, 353482, 353482, 710222, 690932, 353482, 594482, 768092, 353482, 1134782, 30972, 1809, 1809, 999102, 971966, 1809, 836285, 1080510, 1809, 645337, 292118, 282786, 282786, 568177, 552745, 282786, 475585, 614473, 282786, 685671, 310375, 300460, 300460, 603688, 587292, 300460, 505310, 652878, 300460, 1815011, 821582, 795335, 795335, 1597999, 1554596, 795335, 1337584, 1728206, 795335]
}, {
    width: 10,
    values: [907506, 410791, 397668, 397668, 798999, 777298, 397668, 668792, 864103, 397668, 599335, 31661, 16663, 16663, 527675, 513344, 16663, 441684, 570671, 16663, 1296436, 586844, 568097, 568097, 1141428, 1110426, 568097, 955417, 1234433, 568097, 674392, 106719, 91721, 91721, 593759, 577632, 91721, 496998, 642139, 91721, 1096455, 528781, 513783, 513783, 965357, 939137, 513783, 808039, 1044016, 513783, 583602, 15929, 931, 931, 513824, 499868, 931, 430090, 555691, 931, 988721, 421047, 406049, 406049, 870504, 846861, 406049, 728644, 941434, 406049, 1037149, 469475, 454477, 454477, 913142, 888341, 454477, 764334, 987546, 454477, 829719, 375580, 363582, 363582, 730514, 710673, 363582, 611467, 790037, 363582, 881577, 399054, 386306, 386306, 776171, 755090, 386306, 649684, 839414, 386306, 2333586, 1056320, 1022574, 1022574, 2054570, 1998767, 1022574, 1719751, 2221979, 1022574]
}, {
    width: 10,
    values: [721971, 326807, 316367, 316367, 635648, 618384, 316367, 532061, 687442, 316367, 476804, 25188, 13257, 13257, 419795, 408393, 13257, 351384, 454001, 13257, 1031387, 466867, 451952, 451952, 908069, 883406, 451952, 760088, 982060, 451952, 536517, 84901, 72969, 72969, 472368, 459538, 72969, 395389, 510857, 72969, 872291, 420675, 408743, 408743, 767995, 747136, 408743, 642840, 830572, 408743, 464288, 12672, 740, 740, 408775, 397673, 740, 342160, 442083, 740, 786583, 334966, 323035, 323035, 692535, 673725, 323035, 579677, 748963, 323035, 825110, 373494, 361562, 361562, 726455, 706724, 361562, 608070, 785648, 361562, 660088, 298795, 289250, 289250, 581164, 565380, 289250, 486456, 628518, 289250, 701343, 317470, 307328, 307328, 617487, 600716, 307328, 516860, 667801, 307328, 1856497, 840361, 813514, 813514, 1634525, 1590130, 813514, 1368158, 1767708, 813514]
}, {
    width: 10,
    values: [655421, 296682, 287204, 287204, 577055, 561382, 287204, 483017, 624074, 287204, 432853, 22867, 12035, 12035, 381099, 370748, 12035, 318994, 412151, 12035, 936315, 423832, 410292, 410292, 824364, 801974, 410292, 690024, 891535, 410292, 487061, 77075, 66243, 66243, 428826, 417178, 66243, 358943, 463767, 66243, 791884, 381897, 371065, 371065, 697202, 678266, 371065, 583584, 754011, 371065, 421491, 11504, 672, 672, 371095, 361016, 672, 310620, 401332, 672, 714076, 304090, 293258, 293258, 628698, 611622, 293258, 526243, 679925, 293258, 749052, 339066, 328234, 328234, 659492, 641579, 328234, 552019, 713228, 328234, 1053726, 28760, 1680, 1680, 927737, 902540, 1680, 776551, 1003331, 1680, 599242, 271252, 262587, 262587, 527593, 513264, 262587, 441615, 570582, 262587, 636694, 288206, 278999, 278999, 560568, 545343, 278999, 469216, 606244, 278999, 1685367, 762897, 738526, 738526, 1483856, 1443554, 738526, 1242042, 1604763, 738526]
}, {
    width: 10,
    values: [655421, 296682, 287204, 287204, 577055, 561382, 287204, 483017, 624074, 287204, 432853, 22867, 12035, 12035, 381099, 370748, 12035, 318994, 412151, 12035, 936315, 423832, 410292, 410292, 824364, 801974, 410292, 690024, 891535, 410292, 487061, 77075, 66243, 66243, 428826, 417178, 66243, 358943, 463767, 66243, 791884, 381897, 371065, 371065, 697202, 678266, 371065, 583584, 754011, 371065, 421491, 11504, 672, 672, 371095, 361016, 672, 310620, 401332, 672, 714076, 304090, 293258, 293258, 628698, 611622, 293258, 526243, 679925, 293258, 749052, 339066, 328234, 328234, 659492, 641579, 328234, 552019, 713228, 328234, 599242, 271252, 262587, 262587, 527593, 513264, 262587, 441615, 570582, 262587, 636694, 288206, 278999, 278999, 560568, 545343, 278999, 469216, 606244, 278999, 1685367, 762897, 738526, 738526, 1483856, 1443554, 738526, 1242042, 1604763, 738526]
}, {
    width: 10,
    values: [635254, 287554, 278367, 278367, 559300, 544109, 278367, 468154, 604872, 278367, 419535, 22163, 11664, 11664, 369373, 359340, 11664, 309179, 399470, 11664, 907506, 410791, 397668, 397668, 798999, 777298, 397668, 668792, 864103, 397668, 472075, 74703, 64204, 64204, 415631, 404342, 64204, 347899, 449497, 64204, 767518, 370147, 359648, 359648, 675750, 657396, 359648, 565628, 730811, 359648, 408522, 11150, 651, 651, 359677, 349908, 651, 301063, 388984, 651, 692105, 294733, 284234, 284234, 609353, 592803, 284234, 510051, 659004, 284234, 726004, 328633, 318134, 318134, 639200, 621839, 318134, 535034, 691282, 318134, 580804, 262906, 254507, 254507, 511360, 497471, 254507, 428027, 553026, 254507, 617104, 279338, 270414, 270414, 543320, 528563, 270414, 454779, 587590, 270414, 1633510, 739424, 715802, 715802, 1438199, 1399137, 715802, 1203826, 1555386, 715802]
}, {
    width: 10,
    values: [605004, 273861, 265112, 265112, 532666, 518199, 265112, 445861, 576069, 265112, 399557, 21108, 11109, 11109, 351784, 342229, 11109, 294456, 380448, 11109, 864291, 391229, 378731, 378731, 760952, 740284, 378731, 636945, 822955, 378731, 449595, 71146, 61147, 61147, 395839, 385088, 61147, 331332, 428093, 61147, 730970, 352521, 342522, 342522, 643571, 626091, 342522, 538693, 696010, 342522, 389068, 10619, 620, 620, 342549, 333245, 620, 286726, 370461, 620, 659147, 280698, 270699, 270699, 580336, 564574, 270699, 485763, 627623, 270699, 691433, 312984, 302985, 302985, 608761, 592227, 302985, 509556, 658364, 302985, 972671, 26548, 1551, 1551, 856373, 833114, 1551, 716816, 926152, 1551, 553146, 250387, 242388, 242388, 487009, 473782, 242388, 407645, 526691, 242388, 587718, 266036, 257537, 257537, 517447, 503393, 257537, 433123, 559610, 257537, 1555724, 704213, 681716, 681716, 1369713, 1332511, 681716, 1146501, 1481320, 681716]
}, {
    width: 10,
    values: [605004, 273861, 265112, 265112, 532666, 518199, 265112, 445861, 576069, 265112, 399557, 21108, 11109, 11109, 351784, 342229, 11109, 294456, 380448, 11109, 864291, 391229, 378731, 378731, 760952, 740284, 378731, 636945, 822955, 378731, 449595, 71146, 61147, 61147, 395839, 385088, 61147, 331332, 428093, 61147, 730970, 352521, 342522, 342522, 643571, 626091, 342522, 538693, 696010, 342522, 389068, 10619, 620, 620, 342549, 333245, 620, 286726, 370461, 620, 659147, 280698, 270699, 270699, 580336, 564574, 270699, 485763, 627623, 270699, 691433, 312984, 302985, 302985, 608761, 592227, 302985, 509556, 658364, 302985, 998892, 52769, 27772, 27772, 879459, 855573, 27772, 736140, 951119, 27772, 553146, 250387, 242388, 242388, 487009, 473782, 242388, 407645, 526691, 242388, 587718, 266036, 257537, 257537, 517447, 503393, 257537, 433123, 559610, 257537, 1555724, 704213, 681716, 681716, 1369713, 1332511, 681716, 1146501, 1481320, 681716]
}, {
    width: 10,
    values: [605004, 273861, 265112, 265112, 532666, 518199, 265112, 445861, 576069, 265112, 399557, 21108, 11109, 11109, 351784, 342229, 11109, 294456, 380448, 11109, 864291, 391229, 378731, 378731, 760952, 740284, 378731, 636945, 822955, 378731, 449595, 71146, 61147, 61147, 395839, 385088, 61147, 331332, 428093, 61147, 730970, 352521, 342522, 342522, 643571, 626091, 342522, 538693, 696010, 342522, 389068, 10619, 620, 620, 342549, 333245, 620, 286726, 370461, 620, 659147, 280698, 270699, 270699, 580336, 564574, 270699, 485763, 627623, 270699, 691433, 312984, 302985, 302985, 608761, 592227, 302985, 509556, 658364, 302985, 553146, 250387, 242388, 242388, 487009, 473782, 242388, 407645, 526691, 242388, 587718, 266036, 257537, 257537, 517447, 503393, 257537, 433123, 559610, 257537, 1555724, 704213, 681716, 681716, 1369713, 1332511, 681716, 1146501, 1481320, 681716]
}, {
    width: 10,
    values: [605004, 273861, 265112, 265112, 532666, 518199, 265112, 445861, 576069, 265112, 399557, 21108, 11109, 11109, 351784, 342229, 11109, 294456, 380448, 11109, 864291, 391229, 378731, 378731, 760952, 740284, 378731, 636945, 822955, 378731, 449595, 71146, 61147, 61147, 395839, 385088, 61147, 331332, 428093, 61147, 730970, 352521, 342522, 342522, 643571, 626091, 342522, 538693, 696010, 342522, 389068, 10619, 620, 620, 342549, 333245, 620, 286726, 370461, 620, 659147, 280698, 270699, 270699, 580336, 564574, 270699, 485763, 627623, 270699, 1728582, 782459, 757462, 757462, 1521904, 1480568, 757462, 1273890, 1645911, 757462, 553146, 250387, 242388, 242388, 487009, 473782, 242388, 407645, 526691, 242388, 691433, 312984, 302985, 302985, 608761, 592227, 302985, 509556, 658364, 302985, 587718, 266036, 257537, 257537, 517447, 503393, 257537, 433123, 559610, 257537, 1555724, 704213, 681716, 681716, 1369713, 1332511, 681716, 1146501, 1481320, 681716]
}, {
    width: 10,
    values: [605004, 273861, 265112, 265112, 532666, 518199, 265112, 445861, 576069, 265112, 399557, 21108, 11109, 11109, 351784, 342229, 11109, 294456, 380448, 11109, 864291, 391229, 378731, 378731, 760952, 740284, 378731, 636945, 822955, 378731, 449595, 71146, 61147, 61147, 395839, 385088, 61147, 331332, 428093, 61147, 730970, 352521, 342522, 342522, 643571, 626091, 342522, 538693, 696010, 342522, 389068, 10619, 620, 620, 342549, 333245, 620, 286726, 370461, 620, 659147, 280698, 270699, 270699, 580336, 564574, 270699, 485763, 627623, 270699, 691433, 312984, 302985, 302985, 608761, 592227, 302985, 509556, 658364, 302985, 1123987, 177864, 152868, 152868, 989598, 962720, 152868, 828330, 1070231, 152868, 553146, 250387, 242388, 242388, 487009, 473782, 242388, 407645, 526691, 242388, 587718, 266036, 257537, 257537, 517447, 503393, 257537, 433123, 559610, 257537, 1555724, 704213, 681716, 681716, 1369713, 1332511, 681716, 1146501, 1481320, 681716]
}]
  , lE = ["77|ЕКХ", "97|АМР", "97|ЕКХ", "99|ЕКХ", "177|ЕКХ", "197|ЕКХ", "197|СКР", "199|ЕКХ", "199|СКР"]
  , Sn = {
    regions: rE,
    digits: iE,
    letters: oE,
    models: aE,
    series: lE
}
  , sE = "COLLECTIBLE_ESTIMATE_R22_V1"
  , Pu = new Map(Sn.regions.map(e => [e[0], e]))
  , uE = new Set(Sn.series)
  , cE = "АВЕКМНОРСТУХ";
function $r(e, t, n) {
    var c, u;
    let i = 0;
    for (const p of n)
        i = i * 12 + cE.indexOf(p);
    const o = (c = Sn.digits[e[2]]) == null ? void 0 : c[Number(t) - 1]
      , a = (u = Sn.letters[e[3]]) == null ? void 0 : u[i]
      , l = Sn.models[e[1]];
    return o === void 0 || a === void 0 || !l ? void 0 : l.values[o * l.width + a]
}
function vE(e) {
    if (!e || typeof e != "object")
        return null;
    const {regionCode: t, digits: n, letters: i} = e;
    if (typeof t != "string" || typeof n != "string" || typeof i != "string" || !/^(?!000)\d{3}$/.test(n) || !/^[АВЕКМНОРСТУХ]{3}$/.test(i))
        return null;
    const o = Pu.get(t);
    if (!o)
        return null;
    const a = $r(o, n, i);
    if (a === void 0 || !Number.isSafeInteger(a) || a <= 0)
        return null;
    const l = [];
    if (uE.has(`${t}|${i}`) && l.push({
        code: "SERIES",
        text: `Сочетание серии ${i} и региона ${t}`
    }),
    n === t && l.push({
        code: "REGION_MATCH",
        text: "Цифры совпадают с кодом региона"
    }),
    a > ($r(o, "583", i) ?? a)) {
        const u = Number(n[0])
          , p = Number(n[1])
          , L = Number(n[2])
          , h = u === p && p === L ? ["DIGIT_TRIPLE", "Три одинаковые цифры"] : ["001", "007"].includes(n) ? ["SPECIAL_DIGITS", `Особое сочетание ${n}`] : p === u + 1 && L === u + 2 || p === u - 1 && L === u - 2 ? ["DIGIT_SEQUENCE", "Цифры идут по порядку"] : p === 0 && L === 0 ? ["DIGIT_ROUND", "Круглое число"] : u === L ? ["DIGIT_MIRROR", "Зеркальные цифры"] : u === p || p === L ? ["DIGIT_PAIR", "Две одинаковые цифры"] : null;
        h && l.push({
            code: h[0],
            text: h[1]
        })
    }
    a > ($r(o, n, "АВЕ") ?? a) && (new Set(i).size === 1 ? l.push({
        code: "LETTER_TRIPLE",
        text: "Три одинаковые буквы"
    }) : new Set(i).size === 2 && l.push({
        code: "LETTER_PAIR",
        text: "Две одинаковые буквы"
    }));
    const c = Pu.get("01");
    return o[4] === "spb" && c && a > ($r(c, n, i) ?? a) && l.push({
        code: "CITY",
        text: "Регион Санкт-Петербурга"
    }),
    Object.freeze({
        amountGameRub: a,
        policyVersion: sE,
        reasons: Object.freeze(l.slice(0, 4).map(u => Object.freeze(u)))
    })
}
const Tu = {
    M9_PLATE_STALE: "Номер изменился. Обнови коллекцию и попробуй ещё раз.",
    M9_PLATE_LOCKED: "Номер занят другим действием. Сначала заверши его.",
    M9_PLATE_PROTECTED: "Номер в избранном. Сначала сними защиту.",
    M9_FAVORITE_CLOSE_OFFERS_REQUIRED: "Чтобы защитить номер, подтверди отмену предложений по нему.",
    M9_QUOTE_UNAVAILABLE: "Не удалось проверить сумму. Попробуй ещё раз.",
    M9_QUOTE_EXPIRED: "Время на подтверждение вышло. Проверь сумму ещё раз.",
    M9_QUOTE_ALREADY_USED: "Ты уже подтвердил это действие. Проверь результат в истории.",
    M9_BULK_ITEMS_INVALID: "Выбери от 1 до 50 разных номеров.",
    M9_BULK_ITEMS_UNAVAILABLE: "Один из выбранных номеров недоступен. Ничего не продано.",
    M9_BULK_ITEMS_STALE: "Выбранные номера изменились. Ничего не продано. Выбери их заново.",
    M9_BULK_REGISTRY_CONFLICT: "Не удалось проверить выбранные номера. Ничего не продано. Обнови коллекцию.",
    M9_TRADE_RECIPIENT_UNAVAILABLE: "Этот игрок сейчас не принимает предложения.",
    M9_TRADE_UNAVAILABLE: "Предложение недоступно для этого аккаунта.",
    M9_TRADE_PLATE_UNAVAILABLE: "Этот номер сейчас недоступен для сделки.",
    M9_TRADE_PRICE_INVALID: "Введи цену от 1 игрового рубля, без копеек.",
    M9_TRADE_TERMS_CHANGED: "Условия сделки изменились. Проверь сумму ещё раз.",
    M9_TRADE_STALE: "Предложение изменилось. Обнови сообщения.",
    M9_TRADE_DUPLICATE: "Ты уже отправил предложение по этому номеру. Дождись ответа или отмени его.",
    M9_TRADE_RATE_LIMIT: "Слишком много предложений или ещё действует пауза после отказа. Подожди или отмени ненужные предложения.",
    M9_TRADE_RECIPIENT_ONLY: "Это предложение может принять только игрок, которому его отправили.",
    M9_TRADE_ROLE_FORBIDDEN: "Это действие может выполнить только другой игрок.",
    M9_TRADE_COLLECTION_FULL: "Для номера нет места в коллекции. Освободи место и вернись к предложению.",
    M9_TRADE_INSUFFICIENT_BALANCE: "Не хватает игровых рублей. Предложение пока ждёт ответа.",
    M9_TRADE_CANNOT_ACCEPT: "Сейчас провести сделку не получится. Предложение пока ждёт ответа.",
    M9_PUBLIC_PLAYER_UNAVAILABLE: "Игрок не найден или его профиль недоступен.",
    M9_PUBLIC_PLATE_UNAVAILABLE: "Этот номер не найден или скрыт от просмотра.",
    M9_PUBLIC_PROFILE_CHANGED: "Профиль изменился во время загрузки. Обнови страницу.",
    AUTHENTICATION_REQUIRED: "Войди в аккаунт, чтобы продолжить.",
    GUEST_RESTRICTED: "Для этого нужен аккаунт. Создай его или войди.",
    GUEST_EXPIRED: "Нужно заново выбрать: войти в аккаунт или играть без него.",
    GUEST_ALREADY_CONVERTED: "Для этой игры уже создан аккаунт. Войди в него.",
    SESSION_EXPIRED: "Нужно войти снова.",
    CHALLENGE_REQUIRED: "Чтобы начать игру без аккаунта, нужно пройти проверку.",
    FORBIDDEN: "Сейчас это действие недоступно.",
    RATE_LIMITED: "Слишком много попыток. Попробуй позже.",
    STALE_VERSION: "Данные изменились. Обнови экран.",
    REGION_LOCKED: "После этой прокрутки регион менять нельзя.",
    REGION_REQUIRED: "Сначала выбери регион.",
    INCOMPLETE_DRAFT: "Сначала получи и цифры, и буквы.",
    AXIS_POOL_EXHAUSTED: "Для этой части номера сейчас нет доступных комбинаций.",
    RESERVATION_EXPIRED: "Время хранения этого номера закончилось.",
    PLATE_LOCKED: "Сейчас с этим номером нельзя выполнить это действие.",
    GAME_POLICY_UNCONFIGURED: "Игра пока не готова продолжить. Попробуй позже.",
    IDEMPOTENCY_CONFLICT: "Эта попытка не совпала с предыдущей. Сначала проверь результат предыдущего действия.",
    FEATURE_ENTITLEMENT_REQUIRED: "Эта функция пока недоступна.",
    FEATURE_ALREADY_OWNED: "Эта функция у тебя уже есть.",
    LOCAL_RECEIPTS_DISABLED: "Этим способом покупку подтвердить нельзя. Открой её в истории покупок.",
    RECEIPT_CONFLICT: "Это подтверждение уже связано с другой покупкой. Проверь историю покупок.",
    SAVED_DRAFT_OCCUPIED: "У тебя уже есть сохранённая заготовка номера.",
    SAVED_DRAFT_EMPTY: "Сохранённой заготовки нет.",
    SAVED_DRAFT_INELIGIBLE: "Эту заготовку сохранить нельзя.",
    ACTIVE_DRAFT_NOT_EMPTY: "Сначала освободи место «Номер 1» на экране «Создать».",
    BALANCE_FLOOR_REACHED: "Авто остановлено, чтобы сохранить заданный запас игровых рублей.",
    LISTING_UNAVAILABLE: "Это объявление больше недоступно.",
    SELF_BUY_FORBIDDEN: "Нельзя купить свой номер.",
    AUCTION_QUOTE_STALE: "Расчёт аукциона устарел. Проверь сумму и комиссию ещё раз.",
    MARKET_QUOTE_STALE: "Плата за объявление изменилась. Посмотри новый расчёт.",
    AUCTION_ENDED: "Время вышло. Новые ставки больше не принимаются.",
    AUCTION_CAPACITY_MISMATCH: "Не удалось подтвердить место в коллекции для выигрыша. Проверь результат аукциона позже.",
    AUCTION_CUSTODY_MISMATCH: "Не удалось подтвердить передачу номера. Проверь результат аукциона позже.",
    AUCTION_NOT_DUE: "Аукцион ещё идёт.",
    M9_RECENT_PASSWORD_INVALID: "Текущий пароль не подошёл.",
    M9_RECENT_PASSWORD_REQUIRED: "Для этого действия введи текущий пароль ещё раз.",
    M9_RECENT_PASSWORD_RATE_LIMITED: "Слишком много попыток. Попробуй позже.",
    M9_PASSWORD_POLICY: "Этот пароль не подходит. Нужно от 8 до 128 символов. Не используй слишком простой пароль.",
    M9_ACCOUNT_CHALLENGE_INVALID: "Эта ссылка больше не работает. Получи новую.",
    M11B_EMAIL_INVALID: "Проверь адрес почты.",
    M11B_EMAIL_PROVIDER_NOT_ALLOWED: "Для восстановления нужна почта из списка ниже.",
    M11B_EMAIL_POLICY_UNAVAILABLE: "Пока не удалось проверить, подходит ли эта почта. Попробуй позже.",
    M9_EMAIL_ALREADY_BOUND: "Эту почту нельзя добавить в аккаунт. Укажи другую.",
    M9_OVERLAPPING_ORDER: "Такая покупка уже начата. Проверь её в истории покупок.",
    M9_FEATURE_ALREADY_OWNED: "Эта функция у тебя уже есть.",
    M9_PAID_UPGRADE_REQUIRED: "Этот вариант покупки сейчас недоступен. Открой магазин и выбери доступное предложение.",
    M9_PURCHASES_DISABLED: "Покупки временно недоступны. Свои заказы можно проверить в истории покупок.",
    M9_INTEGRITY_HOLD: "Покупки временно недоступны. Свои заказы можно проверить в истории покупок.",
    M9_NEW_PURCHASES_DISABLED: "Оплата временно недоступна. Свои заказы можно проверить в истории покупок.",
    M9_TEST_PROVIDER_NOT_CONFIGURED: "Оплата пока недоступна. Заказ не создан.",
    M9_ORDER_NOT_FOUND: "В этом аккаунте покупка не найдена.",
    M9_REQUEST_INVALID: "Не удалось отправить эти данные. Проверь форму.",
    M8_ALREADY_CLAIMED: "Эту награду ты уже получил.",
    M8_TASK_NOT_COMPLETED: "Задание ещё не выполнено.",
    M8_RECOVERY_NOT_COMPLETED: "Задание ещё не выполнено.",
    M8_DAILY_CLAIMS_REQUIRED: "Сначала забери награды за все три задания дня.",
    M8_PERIOD_EXPIRED: "Время на это задание закончилось.",
    M8_RECOVERY_INELIGIBLE: "Сейчас дополнительное задание недоступно. Посмотри условия.",
    M8_SWITCH_DISABLED: "Задания временно недоступны. Попробуй позже.",
    M8_SNAPSHOT_EXPIRED: "Список обновился. Загрузи его заново.",
    M8_SNAPSHOT_NOT_FOUND: "Список обновился. Загрузи его заново.",
    M9_READ_SNAPSHOT_EXPIRED: "Список обновился. Загрузи его заново.",
    M8_INVALID_CURSOR: "Не удалось открыть следующую часть списка. Обнови список.",
    M9_READ_CURSOR_INVALID: "Не удалось открыть следующую часть списка. Обнови список.",
    M8_PROJECTION_INCOMPLETE: "Данные ещё не готовы. Проверь позже.",
    M8_REFERRAL_CODE_UNAVAILABLE: "Не удалось завершить действие. Попробуй ещё раз.",
    INVALID_CREDENTIALS: "Неверный ник или пароль",
    NICKNAME_UNAVAILABLE: "Этот ник недоступен",
    VALIDATION_ERROR: "Проверь заполненные поля."
}
  , Jr = {
    EMAIL_PROVIDER: "Для восстановления нужна почта из списка ниже.",
    RECOVERY_NOT_FOUND_VERIFY: "Пока не удалось узнать, подтвердилась ли почта. Войди в тот же аккаунт и проверь результат ещё раз.",
    RECOVERY_NOT_FOUND_PASSWORD: "Пока не удалось узнать, сменился ли пароль. Попробуй войти в тот же аккаунт с новым паролем и проверь результат ещё раз.",
    RECOVERY_BROWSER: "Не удалось безопасно начать восстановление. Попробуй другой браузер.",
    RECOVERY_PENDING: "Сначала проверь результат предыдущей попытки восстановления.",
    RECOVERY_STORAGE: "Не удалось подготовить восстановление. Оно не отправлено. Попробуй другой браузер.",
    PLAYER_SHOP_1: "Не удалось проверить предыдущую попытку покупки. Пока не оплачивай заново.",
    PLAYER_SHOP_2: "Ты вошёл в другой аккаунт. Открой покупку в том, где её начинал.",
    PLAYER_SHOP_3: "Заказ не создан. Обнови магазин и проверь предложение.",
    PLAYER_SHOP_4: "Не удалось безопасно начать покупку. Попробуй другой браузер.",
    PLAYER_SHOP_5: "Эта покупка уже проверяется в другой вкладке. Продолжи там.",
    PLAYER_SHOP_6: "Покупка недоступна.",
    PLAYER_SHOP_7: "Покупка сейчас недоступна.",
    PLAYER_SHOP_8: "Не удалось подготовить покупку. Заказ не отправлен. Попробуй другой браузер.",
    PLAYER_PROFILE_1: "Не удалось безопасно начать смену пароля. Попробуй другой браузер.",
    PLAYER_PROFILE_2: "Смена пароля уже проверяется в другой вкладке. Продолжи там.",
    PLAYER_PROFILE_3: "Не удалось проверить предыдущую попытку смены пароля. Не начинай новую, пока не узнаешь результат.",
    PLAYER_PROFILE_4: "Ты вошёл в другой аккаунт. Для проверки вернись в тот, где менял пароль.",
    PLAYER_PROFILE_5: "Пока не удалось узнать, сменился ли пароль. Проверь ещё раз или нажми «Остановить попытку смены». Если пароль уже изменился, эта кнопка не вернёт старый.",
    PLAYER_PROFILE_6: "Пока не удалось узнать, сменился ли пароль. Проверь позже. Новую смену пока не начинай.",
    PLAYER_PROFILE_7: "Не удалось подготовить смену пароля. Она не отправлена. Попробуй другой браузер.",
    PLAYER_EMAIL_1: "Не удалось проверить предыдущее изменение почты. Пока не меняй её снова.",
    PLAYER_EMAIL_2: "Почта уже меняется в другой вкладке. Продолжи там.",
    PLAYER_EMAIL_3: "Сначала проверь предыдущее изменение почты.",
    PLAYER_EMAIL_4: "Не удалось подготовить изменение почты. Оно не отправлено. Попробуй другой браузер.",
    PLAYER_EMAIL_5: "Пока не удалось узнать, изменилась ли почта. Проверь ещё раз. Не меняй её повторно до ответа.",
    PLAYER_EMAIL_6: "Почта не изменилась. Проверь адрес и пароль и попробуй ещё раз.",
    COMMANDS_1: "Предыдущее действие уже проверено. Обнови экран.",
    PENDING_RESULT: "Сначала проверь результат предыдущего действия.",
    "PLAYER-COMMANDS_1": "Ты вошёл в другой аккаунт. Для проверки вернись в тот, где начал действие.",
    "PLAYER-COMMANDS_2": "Открой раздел, где начал действие, и проверь его результат.",
    PLAYER_SECURITY_1: "Список обновился. Загрузи его заново."
};
class dE extends Error {
    constructor(t) {
        super(Jr[t]),
        this.presentationKey = t
    }
}
function fE(e) {
    return e instanceof qn && e.status >= 400 && e.status < 500 && ![408, 429].includes(e.status) && !e.unknownAfterTransportLoss
}
function Mr(e, t={}) {
    const {action: n="game", phase: i=fE(e) ? "rejected" : "unknown"} = t;
    if (e instanceof dE || e instanceof Error && "presentationKey" in e && typeof e.presentationKey == "string" && Object.prototype.hasOwnProperty.call(Jr, e.presentationKey))
        return Jr[e.presentationKey];
    if (e instanceof qn) {
        const o = e.envelope.error.code;
        if (n === "legal" || o.startsWith("LEGAL_") || o.startsWith("M11B_LEGAL_"))
            return e.envelope.error.message;
        if (o === "INTERNAL_RETRYABLE" && i === "unknown")
            return "Ждём результат. Не повторяй действие, пока не проверишь его.";
        if (i !== "unknown") {
            if (o === "ACTIVE_LISTING_LIMIT")
                return `Сейчас можно продавать не больше ${t.limit ?? 10} номеров одновременно.`;
            if (o === "PUBLICATION_LIMIT")
                return `На этот игровой день лимит объявлений исчерпан: ${t.limit ?? 20}.`;
            if (o === "BID_TOO_LOW")
                return t.minimum ? `Эта ставка слишком маленькая. Минимум сейчас — ${t.minimum}.` : "Эта ставка слишком маленькая. Обнови аукцион и посмотри минимальную ставку.";
            if (o === "KILL_SWITCH_ACTIVE" && n === "market")
                return "Рынок временно недоступен. Попробуй позже.";
            if (o === "VALIDATION_ERROR" && t.field === "price")
                return "Введи цену без копеек, больше 0.";
            if (o === "M9_PENDING_ORDER_LIMIT")
                return t.limit === void 0 ? "Сначала проверь незавершённые покупки." : `У тебя уже ${t.limit} незавершённых покупок. Сначала проверь их в истории покупок.`;
            if (Tu[o])
                return Tu[o]
        }
    }
    return i === "read" ? typeof navigator < "u" && navigator.onLine === !1 ? "Нет связи. Проверь интернет и попробуй ещё раз." : n === "collection" ? "Не удалось загрузить коллекцию. Попробуй ещё раз." : n === "market" ? "Не удалось получить ответ от рынка. Попробуй ещё раз." : n === "purchase" ? "Пока нет нового ответа. Не плати повторно." : n === "recovery" ? "Не удалось проверить результат. Попробуй проверить позже." : "Не удалось обновить игру. Попробуй ещё раз." : i === "not-sent" ? "Не удалось начать действие. Оно не отправлено. Попробуй позже." : i === "rejected" ? "Не удалось закончить действие. Проверь данные и попробуй позже." : "Ответ задержался. Действие могло уже выполниться. Сначала проверь результат."
}
const pE = ["plate-collector-proto-accounts", "plate-collector-proto-session", "plate-collector-proto-snapshots", "plate-collector-guest-ts"]
  , S2 = Object.freeze({
    NICK_INVALID: "В нике нужно от 3 до 10 символов: буквы, цифры или _.",
    PASSWORD_TOO_SHORT: "В пароле нужно хотя бы 8 символов.",
    PASSWORD_TOO_LONG: "В пароле может быть не больше 128 символов.",
    NICK_TAKEN: "Этот ник недоступен",
    AUTH_FAILED: "Неверный ник или пароль",
    SESSION_REQUIRED: "Нужно войти снова.",
    RATE_LIMITED: "Слишком много попыток. Попробуй позже.",
    GENERIC: "Не удалось закончить действие. Попробуй позже."
});
function OE() {
    for (const e of pE)
        try {
            localStorage.removeItem(e)
        } catch {}
}
function RE(e, t=!1) {
    const n = e.trim().normalize("NFC");
    return /^[A-Za-zА-Яа-яЁё0-9_]{3,24}$/u.test(n) && n.length <= (t ? 24 : 10) ? null : S2.NICK_INVALID
}
function AE(e) {
    const t = [...e.normalize("NFC")].length;
    return t < 8 ? S2.PASSWORD_TOO_SHORT : t > 128 ? S2.PASSWORD_TOO_LONG : null
}
function _E(e) {
    if (!(e instanceof qn))
        return Mr(e, {
            action: "auth"
        });
    if (e.unknownAfterTransportLoss)
        return Mr(e, {
            action: "auth",
            phase: "unknown"
        });
    switch (e.envelope.error.code) {
    case "INVALID_CREDENTIALS":
        return S2.AUTH_FAILED;
    case "NICKNAME_UNAVAILABLE":
        return S2.NICK_TAKEN;
    case "AUTHENTICATION_REQUIRED":
    case "SESSION_EXPIRED":
        return S2.SESSION_REQUIRED;
    case "RATE_LIMITED":
        return S2.RATE_LIMITED;
    case "VALIDATION_ERROR":
        return Mr(e, {
            action: "auth"
        });
    default:
        return Mr(e, {
            action: "auth"
        })
    }
}
export {S2 as A, ry as L, qn as N, dE as P, yE as R, gE as _, OE as a, AE as b, l8 as c, _E as d, i8 as e, hE as f, r8 as g, IE as h, fE as i, EE as j, SE as k, Tu as l, Jr as m, LE as n, vE as o, Mr as p, rl as r, RE as v};
