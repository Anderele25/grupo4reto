/*! Pickr 1.7.1 MIT | https://github.com/Simonwep/pickr */
!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.Pickr = e()) : (t.Pickr = e());
})(window, function () {
    return (function (t) {
        var e = {};
        function o(n) {
            if (e[n]) return e[n].exports;
            var r = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
        }
        return (
            (o.m = t),
                (o.c = e),
                (o.d = function (t, e, n) {
                    o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
                }),
                (o.r = function (t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
                }),
                (o.t = function (t, e) {
                    if ((1 & e && (t = o(t)), 8 & e)) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var n = Object.create(null);
                    if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                        for (var r in t)
                            o.d(
                                n,
                                r,
                                function (e) {
                                    return t[e];
                                }.bind(null, r)
                            );
                    return n;
                }),
                (o.n = function (t) {
                    var e =
                        t && t.__esModule
                            ? function () {
                                return t.default;
                            }
                            : function () {
                                return t;
                            };
                    return o.d(e, "a", e), e;
                }),
                (o.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (o.p = ""),
                o((o.s = 1))
        );
    })([
        function (t) {
            t.exports = JSON.parse('{"a":"1.7.1"}');
        },
        function (t, e, o) {
            "use strict";
            o.r(e);
            var n = {};
            function r(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                    (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                        o.push.apply(o, n);
                }
                return o;
            }
            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? r(Object(o), !0).forEach(function (e) {
                            s(t, e, o[e]);
                        })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                        : r(Object(o)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                }
                return t;
            }
            function s(t, e, o) {
                return e in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = o), t;
            }
            function c(t, e, o, n, r = {}) {
                e instanceof HTMLCollection || e instanceof NodeList ? (e = Array.from(e)) : Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
                for (const s of e) for (const e of o) s[t](e, n, i({ capture: !1 }, r));
                return Array.prototype.slice.call(arguments, 1);
            }
            o.r(n),
                o.d(n, "on", function () {
                    return a;
                }),
                o.d(n, "off", function () {
                    return l;
                }),
                o.d(n, "createElementFromString", function () {
                    return p;
                }),
                o.d(n, "createFromTemplate", function () {
                    return u;
                }),
                o.d(n, "eventPath", function () {
                    return h;
                }),
                o.d(n, "resolveElement", function () {
                    return d;
                }),
                o.d(n, "adjustableInputNumbers", function () {
                    return f;
                });
            const a = c.bind(null, "addEventListener"),
                l = c.bind(null, "removeEventListener");
            function p(t) {
                const e = document.createElement("div");
                return (e.innerHTML = t.trim()), e.firstElementChild;
            }
            function u(t) {
                const e = (t, e) => {
                        const o = t.getAttribute(e);
                        return t.removeAttribute(e), o;
                    },
                    o = (t, n = {}) => {
                        const r = e(t, ":obj"),
                            i = e(t, ":ref"),
                            s = r ? (n[r] = {}) : n;
                        i && (n[i] = t);
                        for (const n of Array.from(t.children)) {
                            const t = e(n, ":arr"),
                                r = o(n, t ? {} : s);
                            t && (s[t] || (s[t] = [])).push(Object.keys(r).length ? r : n);
                        }
                        return n;
                    };
                return o(p(t));
            }
            function h(t) {
                let e = t.path || (t.composedPath && t.composedPath());
                if (e) return e;
                let o = t.target.parentElement;
                for (e = [t.target, o]; (o = o.parentElement); ) e.push(o);
                return e.push(document, window), e;
            }
            function d(t) {
                return t instanceof Element ? t : "string" == typeof t ? t.split(/>>/g).reduce((t, e, o, n) => ((t = t.querySelector(e)), o < n.length - 1 ? t.shadowRoot : t), document) : null;
            }
            function f(t, e = (t) => t) {
                function o(o) {
                    const n = [0.001, 0.01, 0.1][Number(o.shiftKey || 2 * o.ctrlKey)] * (o.deltaY < 0 ? 1 : -1);
                    let r = 0,
                        i = t.selectionStart;
                    (t.value = t.value.replace(/[\d.]+/g, (t, o) => (o <= i && o + t.length >= i ? ((i = o), e(Number(t), n, r)) : (r++, t)))), t.focus(), t.setSelectionRange(i, i), o.preventDefault(), t.dispatchEvent(new Event("input"));
                }
                a(t, "focus", () => a(window, "wheel", o, { passive: !1 })), a(t, "blur", () => l(window, "wheel", o));
            }
            var b = o(0);
            const { min: v, max: m, floor: y, round: g } = Math;
            function _(t, e, o) {
                (e /= 100), (o /= 100);
                const n = y((t = (t / 360) * 6)),
                    r = t - n,
                    i = o * (1 - e),
                    s = o * (1 - r * e),
                    c = o * (1 - (1 - r) * e),
                    a = n % 6;
                return [255 * [o, s, i, i, c, o][a], 255 * [c, o, o, s, i, i][a], 255 * [i, i, c, o, o, s][a]];
            }
            function w(t, e, o) {
                const n = ((2 - (e /= 100)) * (o /= 100)) / 2;
                return 0 !== n && (e = 1 === n ? 0 : n < 0.5 ? (e * o) / (2 * n) : (e * o) / (2 - 2 * n)), [t, 100 * e, 100 * n];
            }
            function O(t, e, o) {
                const n = v((t /= 255), (e /= 255), (o /= 255)),
                    r = m(t, e, o),
                    i = r - n;
                let s, c;
                if (0 === i) s = c = 0;
                else {
                    c = i / r;
                    const n = ((r - t) / 6 + i / 2) / i,
                        a = ((r - e) / 6 + i / 2) / i,
                        l = ((r - o) / 6 + i / 2) / i;
                    t === r ? (s = l - a) : e === r ? (s = 1 / 3 + n - l) : o === r && (s = 2 / 3 + a - n), s < 0 ? (s += 1) : s > 1 && (s -= 1);
                }
                return [360 * s, 100 * c, 100 * r];
            }
            function A(t, e, o, n) {
                return (e /= 100), (o /= 100), [...O(255 * (1 - v(1, (t /= 100) * (1 - (n /= 100)) + n)), 255 * (1 - v(1, e * (1 - n) + n)), 255 * (1 - v(1, o * (1 - n) + n)))];
            }
            function k(t, e, o) {
                e /= 100;
                const n = ((2 * (e *= (o /= 100) < 0.5 ? o : 1 - o)) / (o + e)) * 100,
                    r = 100 * (o + e);
                return [t, isNaN(n) ? 0 : n, r];
            }
            function C(t) {
                return O(...t.match(/.{2}/g).map((t) => parseInt(t, 16)));
            }
            function j(t) {
                t = t.match(/^[a-zA-Z]+$/)
                    ? (function (t) {
                        if ("black" === t.toLowerCase()) return "#000";
                        const e = document.createElement("canvas").getContext("2d");
                        return (e.fillStyle = t), "#000" === e.fillStyle ? null : e.fillStyle;
                    })(t)
                    : t;
                const e = {
                        cmyk: /^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,
                        rgba: /^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
                        hsla: /^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
                        hsva: /^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,
                        hexa: /^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i,
                    },
                    o = (t) => t.map((t) => (/^(|\d+)\.\d+|\d+$/.test(t) ? Number(t) : void 0));
                let n;
                t: for (const r in e) {
                    if (!(n = e[r].exec(t))) continue;
                    const i = (t) => !!n[2] == ("number" == typeof t);
                    switch (r) {
                        case "cmyk": {
                            const [, t, e, i, s] = o(n);
                            if (t > 100 || e > 100 || i > 100 || s > 100) break t;
                            return { values: A(t, e, i, s), type: r };
                        }
                        case "rgba": {
                            const [, , , t, e, s, c] = o(n);
                            if (t > 255 || e > 255 || s > 255 || c < 0 || c > 1 || !i(c)) break t;
                            return { values: [...O(t, e, s), c], a: c, type: r };
                        }
                        case "hexa": {
                            let [, t] = n;
                            (4 !== t.length && 3 !== t.length) ||
                            (t = t
                                .split("")
                                .map((t) => t + t)
                                .join(""));
                            const e = t.substring(0, 6);
                            let o = t.substring(6);
                            return (o = o ? parseInt(o, 16) / 255 : void 0), { values: [...C(e), o], a: o, type: r };
                        }
                        case "hsla": {
                            const [, , , t, e, s, c] = o(n);
                            if (t > 360 || e > 100 || s > 100 || c < 0 || c > 1 || !i(c)) break t;
                            return { values: [...k(t, e, s), c], a: c, type: r };
                        }
                        case "hsva": {
                            const [, , , t, e, s, c] = o(n);
                            if (t > 360 || e > 100 || s > 100 || c < 0 || c > 1 || !i(c)) break t;
                            return { values: [t, e, s, c], a: c, type: r };
                        }
                    }
                }
                return { values: null, type: null };
            }
            function S(t = 0, e = 0, o = 0, n = 1) {
                const r = (t, e) => (o = -1) => e(~o ? t.map((t) => Number(t.toFixed(o))) : t),
                    i = {
                        h: t,
                        s: e,
                        v: o,
                        a: n,
                        toHSVA() {
                            const t = [i.h, i.s, i.v, i.a];
                            return (t.toString = r(t, (t) => "hsva(".concat(t[0], ", ").concat(t[1], "%, ").concat(t[2], "%, ").concat(i.a, ")"))), t;
                        },
                        toHSLA() {
                            const t = [...w(i.h, i.s, i.v), i.a];
                            return (t.toString = r(t, (t) => "hsla(".concat(t[0], ", ").concat(t[1], "%, ").concat(t[2], "%, ").concat(i.a, ")"))), t;
                        },
                        toRGBA() {
                            const t = [..._(i.h, i.s, i.v), i.a];
                            return (t.toString = r(t, (t) => "rgba(".concat(t[0], ", ").concat(t[1], ", ").concat(t[2], ", ").concat(i.a, ")"))), t;
                        },
                        toCMYK() {
                            const t = (function (t, e, o) {
                                const n = _(t, e, o),
                                    r = n[0] / 255,
                                    i = n[1] / 255,
                                    s = n[2] / 255,
                                    c = v(1 - r, 1 - i, 1 - s);
                                return [100 * (1 === c ? 0 : (1 - r - c) / (1 - c)), 100 * (1 === c ? 0 : (1 - i - c) / (1 - c)), 100 * (1 === c ? 0 : (1 - s - c) / (1 - c)), 100 * c];
                            })(i.h, i.s, i.v);
                            return (t.toString = r(t, (t) => "cmyk(".concat(t[0], "%, ").concat(t[1], "%, ").concat(t[2], "%, ").concat(t[3], "%)"))), t;
                        },
                        toHEXA() {
                            const t = (function (t, e, o) {
                                    return _(t, e, o).map((t) => g(t).toString(16).padStart(2, "0"));
                                })(i.h, i.s, i.v),
                                e =
                                    i.a >= 1
                                        ? ""
                                        : Number((255 * i.a).toFixed(0))
                                            .toString(16)
                                            .toUpperCase()
                                            .padStart(2, "0");
                            return e && t.push(e), (t.toString = () => "#".concat(t.join("").toUpperCase())), t;
                        },
                        clone: () => S(i.h, i.s, i.v, i.a),
                    };
                return i;
            }
            const P = (t) => Math.max(Math.min(t, 1), 0);
            function E(t) {
                const e = {
                        options: Object.assign({ lock: null, onchange: () => 0, onstop: () => 0 }, t),
                        _keyboard(t) {
                            const { options: o } = e,
                                { type: n, key: r } = t;
                            if (document.activeElement === o.wrapper) {
                                const { lock: o } = e.options,
                                    i = "ArrowUp" === r,
                                    s = "ArrowRight" === r,
                                    c = "ArrowDown" === r,
                                    a = "ArrowLeft" === r;
                                if ("keydown" === n && (i || s || c || a)) {
                                    let n = 0,
                                        r = 0;
                                    "v" === o ? (n = i || s ? 1 : -1) : "h" === o ? (n = i || s ? -1 : 1) : ((r = i ? -1 : c ? 1 : 0), (n = a ? -1 : s ? 1 : 0)),
                                        e.update(P(e.cache.x + 0.01 * n), P(e.cache.y + 0.01 * r)),
                                        t.preventDefault();
                                } else r.startsWith("Arrow") && (e.options.onstop(), t.preventDefault());
                            }
                        },
                        _tapstart(t) {
                            a(document, ["mouseup", "touchend", "touchcancel"], e._tapstop), a(document, ["mousemove", "touchmove"], e._tapmove), t.cancelable && t.preventDefault(), e._tapmove(t);
                        },
                        _tapmove(t) {
                            const { options: o, cache: n } = e,
                                { lock: r, element: i, wrapper: s } = o,
                                c = s.getBoundingClientRect();
                            let a = 0,
                                l = 0;
                            if (t) {
                                const e = t && t.touches && t.touches[0];
                                (a = t ? (e || t).clientX : 0),
                                    (l = t ? (e || t).clientY : 0),
                                    a < c.left ? (a = c.left) : a > c.left + c.width && (a = c.left + c.width),
                                    l < c.top ? (l = c.top) : l > c.top + c.height && (l = c.top + c.height),
                                    (a -= c.left),
                                    (l -= c.top);
                            } else n && ((a = n.x * c.width), (l = n.y * c.height));
                            "h" !== r && (i.style.left = "calc(".concat((a / c.width) * 100, "% - ").concat(i.offsetWidth / 2, "px)")),
                            "v" !== r && (i.style.top = "calc(".concat((l / c.height) * 100, "% - ").concat(i.offsetHeight / 2, "px)")),
                                (e.cache = { x: a / c.width, y: l / c.height });
                            const p = P(a / c.width),
                                u = P(l / c.height);
                            switch (r) {
                                case "v":
                                    return o.onchange(p);
                                case "h":
                                    return o.onchange(u);
                                default:
                                    return o.onchange(p, u);
                            }
                        },
                        _tapstop() {
                            e.options.onstop(), l(document, ["mouseup", "touchend", "touchcancel"], e._tapstop), l(document, ["mousemove", "touchmove"], e._tapmove);
                        },
                        trigger() {
                            e._tapmove();
                        },
                        update(t = 0, o = 0) {
                            const { left: n, top: r, width: i, height: s } = e.options.wrapper.getBoundingClientRect();
                            "h" === e.options.lock && (o = t), e._tapmove({ clientX: n + i * t, clientY: r + s * o });
                        },
                        destroy() {
                            const { options: t, _tapstart: o, _keyboard: n } = e;
                            l(document, ["keydown", "keyup"], n), l([t.wrapper, t.element], "mousedown", o), l([t.wrapper, t.element], "touchstart", o, { passive: !1 });
                        },
                    },
                    { options: o, _tapstart: n, _keyboard: r } = e;
                return a([o.wrapper, o.element], "mousedown", n), a([o.wrapper, o.element], "touchstart", n, { passive: !1 }), a(document, ["keydown", "keyup"], r), e;
            }
            function D(t = {}) {
                t = Object.assign({ onchange: () => 0, className: "", elements: [] }, t);
                const e = a(t.elements, "click", (e) => {
                    t.elements.forEach((o) => o.classList[e.target === o ? "add" : "remove"](t.className)), t.onchange(e);
                });
                return { destroy: () => l(...e) };
            }
            function x(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                    (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                        o.push.apply(o, n);
                }
                return o;
            }
            function L(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? x(Object(o), !0).forEach(function (e) {
                            B(t, e, o[e]);
                        })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                        : x(Object(o)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                }
                return t;
            }
            function B(t, e, o) {
                return e in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = o), t;
            }
            /*! NanoPop 1.3.0 MIT | https://github.com/Simonwep/nanopop */ let F = (() => {
                class t {
                    constructor(
                        e,
                        o,
                        {
                            positionFlipOrder: n = t.defaultPositionFlipOrder,
                            variantFlipOrder: r = t.defaultVariantFlipOrder,
                            container: i = document.documentElement.getBoundingClientRect(),
                            forceApplyOnFailure: s = !1,
                            margin: c = 8,
                            position: a = "bottom-start",
                        } = {}
                    ) {
                        this.o = { positionFlipOrder: n, variantFlipOrder: r, reference: e, popper: o, position: a, container: i, forceApplyOnFailure: s, margin: c };
                    }
                    update(t = this.o, e = !1) {
                        const { container: o, reference: n, popper: r, margin: i, position: s, forceApplyOnFailure: c, variantFlipOrder: a, positionFlipOrder: l } = (this.o = L(L({}, this.o), t));
                        (r.style.left = "0"), (r.style.top = "0");
                        const p = n.getBoundingClientRect(),
                            u = r.getBoundingClientRect(),
                            h = { t: p.top - u.height - i, b: p.bottom + i, r: p.right + i, l: p.left - u.width - i },
                            d = { vm: -u.width / 2 + (p.left + p.width / 2), vs: p.left, ve: p.left + p.width - u.width, hs: p.bottom - p.height, he: p.bottom - u.height, hm: p.bottom - p.height / 2 - u.height / 2 },
                            [f, b = "middle"] = s.split("-"),
                            v = l[f],
                            m = a[b],
                            { top: y, left: g, bottom: _, right: w } = o;
                        for (const t of v) {
                            const o = "t" === t || "b" === t,
                                n = h[t],
                                [i, s] = o ? ["top", "left"] : ["left", "top"],
                                [c, a] = o ? [u.height, u.width] : [u.width, u.height],
                                [l, p] = o ? [_, w] : [w, _],
                                [f, b] = o ? [y, g] : [g, y];
                            if (e || !(n < f || n + c > l))
                                for (const c of m) {
                                    const l = d[(o ? "v" : "h") + c];
                                    if (e || !(l < b || l + a > p)) return (r.style[s] = l - u[s] + "px"), (r.style[i] = n - u[i] + "px"), t + c;
                                }
                        }
                        return c ? this.update(void 0, !0) : null;
                    }
                }
                return (t.version = "1.3.0"), (t.defaultVariantFlipOrder = { start: "sme", middle: "mse", end: "ems" }), (t.defaultPositionFlipOrder = { top: "tbrl", right: "rltb", bottom: "btrl", left: "lrbt" }), t;
            })();
            function R(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                    (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                        o.push.apply(o, n);
                }
                return o;
            }
            function H(t, e, o) {
                return e in t ? Object.defineProperty(t, e, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = o), t;
            }
            class N {
                constructor(t) {
                    H(this, "_initializingActive", !0),
                        H(this, "_recalc", !0),
                        H(this, "_nanopop", null),
                        H(this, "_root", null),
                        H(this, "_color", S()),
                        H(this, "_lastColor", S()),
                        H(this, "_swatchColors", []),
                        H(this, "_eventListener", { init: [], save: [], hide: [], show: [], clear: [], change: [], changestop: [], cancel: [], swatchselect: [] }),
                        (this.options = t = Object.assign(
                            (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var o = null != arguments[e] ? arguments[e] : {};
                                    e % 2
                                        ? R(Object(o), !0).forEach(function (e) {
                                            H(t, e, o[e]);
                                        })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                                        : R(Object(o)).forEach(function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                                        });
                                }
                                return t;
                            })({}, N.DEFAULT_OPTIONS),
                            t
                        ));
                    const { swatches: e, components: o, theme: n, sliders: r, lockOpacity: i, padding: s } = t;
                    ["nano", "monolith"].includes(n) && !r && (t.sliders = "h"), o.interaction || (o.interaction = {});
                    const { preview: c, opacity: a, hue: l, palette: p } = o;
                    (o.opacity = !i && a), (o.palette = p || c || a || l), this._preBuild(), this._buildComponents(), this._bindEvents(), this._finalBuild(), e && e.length && e.forEach((t) => this.addSwatch(t));
                    const { button: u, app: h } = this._root;
                    (this._nanopop = new F(u, h, { margin: s })), u.setAttribute("role", "button"), u.setAttribute("aria-label", this._t("btn:toggle"));
                    const d = this;
                    requestAnimationFrame(function e() {
                        if (!h.offsetWidth && h.parentElement !== t.container) return requestAnimationFrame(e);
                        d.setColor(t.default),
                            d._rePositioningPicker(),
                        t.defaultRepresentation && ((d._representation = t.defaultRepresentation), d.setColorRepresentation(d._representation)),
                        t.showAlways && d.show(),
                            (d._initializingActive = !1),
                            d._emit("init");
                    });
                }
                _preBuild() {
                    const { options: t } = this;
                    for (const e of ["el", "container"]) t[e] = d(t[e]);
                    (this._root = ((t) => {
                        const { components: e, useAsButton: o, inline: n, appClass: r, theme: i, lockOpacity: s } = t.options,
                            c = (t) => (t ? "" : 'style="display:none" hidden'),
                            a = (e) => t._t(e),
                            l = u(
                                '\n      <div :ref="root" class="pickr">\n\n        '
                                    .concat(o ? "" : '<button type="button" :ref="button" class="pcr-button"></button>', '\n\n        <div :ref="app" class="pcr-app ')
                                    .concat(r || "", '" data-theme="')
                                    .concat(i, '" ')
                                    .concat(n ? 'style="position: unset"' : "", ' aria-label="')
                                    .concat(a("ui:dialog"), '" role="window">\n          <div class="pcr-selection" ')
                                    .concat(c(e.palette), '>\n            <div :obj="preview" class="pcr-color-preview" ')
                                    .concat(c(e.preview), '>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="')
                                    .concat(
                                        a("btn:last-color"),
                                        '"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="'
                                    )
                                    .concat(a("aria:palette"), '" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ')
                                    .concat(c(e.hue), '>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="')
                                    .concat(a("aria:hue"), '" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ')
                                    .concat(c(e.opacity), '>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="')
                                    .concat(a("aria:opacity"), '" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ')
                                    .concat(e.palette ? "" : "pcr-last", '" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" ')
                                    .concat(c(Object.keys(e.interaction).length), '>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ')
                                    .concat(c(e.interaction.input), ' aria-label="')
                                    .concat(a("aria:input"), '">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="')
                                    .concat(s ? "HEX" : "HEXA", '" type="button" ')
                                    .concat(c(e.interaction.hex), '>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="')
                                    .concat(s ? "RGB" : "RGBA", '" type="button" ')
                                    .concat(c(e.interaction.rgba), '>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="')
                                    .concat(s ? "HSL" : "HSLA", '" type="button" ')
                                    .concat(c(e.interaction.hsla), '>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="')
                                    .concat(s ? "HSV" : "HSVA", '" type="button" ')
                                    .concat(c(e.interaction.hsva), '>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ')
                                    .concat(c(e.interaction.cmyk), '>\n\n            <input :ref="save" class="pcr-save" value="')
                                    .concat(a("btn:save"), '" type="button" ')
                                    .concat(c(e.interaction.save), ' aria-label="')
                                    .concat(a("aria:btn:save"), '">\n            <input :ref="cancel" class="pcr-cancel" value="')
                                    .concat(a("btn:cancel"), '" type="button" ')
                                    .concat(c(e.interaction.cancel), ' aria-label="')
                                    .concat(a("aria:btn:cancel"), '">\n            <input :ref="clear" class="pcr-clear" value="')
                                    .concat(a("btn:clear"), '" type="button" ')
                                    .concat(c(e.interaction.clear), ' aria-label="')
                                    .concat(a("aria:btn:clear"), '">\n          </div>\n        </div>\n      </div>\n    ')
                            ),
                            p = l.interaction;
                        return p.options.find((t) => !t.hidden && !t.classList.add("active")), (p.type = () => p.options.find((t) => t.classList.contains("active"))), l;
                    })(this)),
                    t.useAsButton && (this._root.button = t.el),
                        t.container.appendChild(this._root.root);
                }
                _finalBuild() {
                    const t = this.options,
                        e = this._root;
                    if ((t.container.removeChild(e.root), t.inline)) {
                        const o = t.el.parentElement;
                        t.el.nextSibling ? o.insertBefore(e.app, t.el.nextSibling) : o.appendChild(e.app);
                    } else t.container.appendChild(e.app);
                    t.useAsButton ? t.inline && t.el.remove() : t.el.parentNode.replaceChild(e.root, t.el),
                    t.disabled && this.disable(),
                    t.comparison || ((e.button.style.transition = "none"), t.useAsButton || (e.preview.lastColor.style.transition = "none")),
                        this.hide();
                }
                _buildComponents() {
                    const t = this,
                        e = this.options.components,
                        o = (t.options.sliders || "v").repeat(2),
                        [n, r] = o.match(/^[vh]+$/g) ? o : [],
                        i = () => this._color || (this._color = this._lastColor.clone()),
                        s = {
                            palette: E({
                                element: t._root.palette.picker,
                                wrapper: t._root.palette.palette,
                                onstop: () => t._emit("changestop", t),
                                onchange(o, n) {
                                    if (!e.palette) return;
                                    const r = i(),
                                        { _root: s, options: c } = t,
                                        { lastColor: a, currentColor: l } = s.preview;
                                    t._recalc && ((r.s = 100 * o), (r.v = 100 - 100 * n), r.v < 0 && (r.v = 0), t._updateOutput());
                                    const p = r.toRGBA().toString(0);
                                    (this.element.style.background = p),
                                        (this.wrapper.style.background = "\n                        linear-gradient(to top, rgba(0, 0, 0, "
                                            .concat(r.a, "), transparent),\n                        linear-gradient(to left, hsla(")
                                            .concat(r.h, ", 100%, 50%, ")
                                            .concat(r.a, "), rgba(255, 255, 255, ")
                                            .concat(r.a, "))\n                    ")),
                                        c.comparison ? c.useAsButton || t._lastColor || (a.style.color = p) : ((s.button.style.color = p), s.button.classList.remove("clear"));
                                    const u = r.toHEXA().toString();
                                    for (const { el: e, color: o } of t._swatchColors) e.classList[u === o.toHEXA().toString() ? "add" : "remove"]("pcr-active");
                                    l.style.color = p;
                                },
                            }),
                            hue: E({
                                lock: "v" === r ? "h" : "v",
                                element: t._root.hue.picker,
                                wrapper: t._root.hue.slider,
                                onstop: () => t._emit("changestop", t),
                                onchange(o) {
                                    if (!e.hue || !e.palette) return;
                                    const n = i();
                                    t._recalc && (n.h = 360 * o), (this.element.style.backgroundColor = "hsl(".concat(n.h, ", 100%, 50%)")), s.palette.trigger();
                                },
                            }),
                            opacity: E({
                                lock: "v" === n ? "h" : "v",
                                element: t._root.opacity.picker,
                                wrapper: t._root.opacity.slider,
                                onstop: () => t._emit("changestop", t),
                                onchange(o) {
                                    if (!e.opacity || !e.palette) return;
                                    const n = i();
                                    t._recalc && (n.a = Math.round(100 * o) / 100), (this.element.style.background = "rgba(0, 0, 0, ".concat(n.a, ")")), s.palette.trigger();
                                },
                            }),
                            selectable: D({
                                elements: t._root.interaction.options,
                                className: "active",
                                onchange(e) {
                                    (t._representation = e.target.getAttribute("data-type").toUpperCase()), t._recalc && t._updateOutput();
                                },
                            }),
                        };
                    this._components = s;
                }
                _bindEvents() {
                    const { _root: t, options: e } = this,
                        o = [
                            a(t.interaction.clear, "click", () => this._clearColor()),
                            a([t.interaction.cancel, t.preview.lastColor], "click", () => {
                                this._emit("cancel", this), this.setHSVA(...(this._lastColor || this._color).toHSVA(), !0);
                            }),
                            a(t.interaction.save, "click", () => {
                                !this.applyColor() && !e.showAlways && this.hide();
                            }),
                            a(t.interaction.result, ["keyup", "input"], (t) => {
                                this.setColor(t.target.value, !0) && !this._initializingActive && this._emit("change", this._color), t.stopImmediatePropagation();
                            }),
                            a(t.interaction.result, ["focus", "blur"], (t) => {
                                (this._recalc = "blur" === t.type), this._recalc && this._updateOutput();
                            }),
                            a([t.palette.palette, t.palette.picker, t.hue.slider, t.hue.picker, t.opacity.slider, t.opacity.picker], ["mousedown", "touchstart"], () => (this._recalc = !0), { passive: !0 }),
                        ];
                    if (!e.showAlways) {
                        const n = e.closeWithKey;
                        o.push(
                            a(t.button, "click", () => (this.isOpen() ? this.hide() : this.show())),
                            a(document, "keyup", (t) => this.isOpen() && (t.key === n || t.code === n) && this.hide()),
                            a(
                                document,
                                ["touchstart", "mousedown"],
                                (e) => {
                                    this.isOpen() && !h(e).some((e) => e === t.app || e === t.button) && this.hide();
                                },
                                { capture: !0 }
                            )
                        );
                    }
                    if (e.adjustableNumbers) {
                        const e = { rgba: [255, 255, 255, 1], hsva: [360, 100, 100, 1], hsla: [360, 100, 100, 1], cmyk: [100, 100, 100, 100] };
                        f(t.interaction.result, (t, o, n) => {
                            const r = e[this.getColorRepresentation().toLowerCase()];
                            if (r) {
                                const e = r[n],
                                    i = t + (e >= 100 ? 1e3 * o : o);
                                return i <= 0 ? 0 : Number((i < e ? i : e).toPrecision(3));
                            }
                            return t;
                        });
                    }
                    if (e.autoReposition && !e.inline) {
                        let t = null;
                        const n = this;
                        o.push(
                            a(
                                window,
                                ["scroll", "resize"],
                                () => {
                                    n.isOpen() &&
                                    (e.closeOnScroll && n.hide(),
                                        null === t
                                            ? ((t = setTimeout(() => (t = null), 100)),
                                                requestAnimationFrame(function e() {
                                                    n._rePositioningPicker(), null !== t && requestAnimationFrame(e);
                                                }))
                                            : (clearTimeout(t), (t = setTimeout(() => (t = null), 100))));
                                },
                                { capture: !0 }
                            )
                        );
                    }
                    this._eventBindings = o;
                }
                _rePositioningPicker() {
                    const { options: t } = this;
                    if (!t.inline) {
                        if (!this._nanopop.update({ position: t.position, forceApplyOnFailure: !this._recalc })) {
                            const t = this._root.app,
                                e = t.getBoundingClientRect(),
                                rt = this._root.button.getBoundingClientRect();
                            (t.style.top = "".concat(rt.bottom, "px")), (t.style.left = "".concat(rt.left, "px"));

                        }
                    }
                }
                _updateOutput() {
                    const { _root: t, _color: e, options: o } = this;
                    if (t.interaction.type()) {
                        const n = "to".concat(t.interaction.type().getAttribute("data-type"));
                        t.interaction.result.value = "function" == typeof e[n] ? e[n]().toString(o.outputPrecision) : "";
                    }
                    !this._initializingActive && this._recalc && this._emit("change", e);
                }
                _clearColor(t = !1) {
                    const { _root: e, options: o } = this;
                    o.useAsButton || (e.button.style.color = "rgba(0, 0, 0, 0.15)"),
                        e.button.classList.add("clear"),
                    o.showAlways || this.hide(),
                        (this._lastColor = null),
                    this._initializingActive || t || (this._emit("save", null), this._emit("clear", this));
                }
                _parseLocalColor(t) {
                    const { values: e, type: o, a: n } = j(t),
                        { lockOpacity: r } = this.options,
                        i = void 0 !== n && 1 !== n;
                    return e && 3 === e.length && (e[3] = void 0), { values: !e || (r && i) ? null : e, type: o };
                }
                _t(t) {
                    return this.options.i18n[t] || N.I18N_DEFAULTS[t];
                }
                _emit(t, ...e) {
                    this._eventListener[t].forEach((t) => t(...e, this));
                }
                on(t, e) {
                    return this._eventListener[t].push(e), this;
                }
                off(t, e) {
                    const o = this._eventListener[t] || [],
                        n = o.indexOf(e);
                    return ~n && o.splice(n, 1), this;
                }
                addSwatch(t) {
                    const { values: e } = this._parseLocalColor(t);
                    if (e) {
                        const { _swatchColors: t, _root: o } = this,
                            n = S(...e),
                            r = p('<button type="button" style="color: '.concat(n.toRGBA().toString(0), '" aria-label="').concat(this._t("btn:swatch"), '"/>'));
                        return (
                            o.swatches.appendChild(r),
                                t.push({ el: r, color: n }),
                                this._eventBindings.push(
                                    a(r, "click", () => {
                                        this.setHSVA(...n.toHSVA(), !0), this._emit("swatchselect", n), this._emit("change", n);
                                    })
                                ),
                                !0
                        );
                    }
                    return !1;
                }
                removeSwatch(t) {
                    const e = this._swatchColors[t];
                    if (e) {
                        const { el: o } = e;
                        return this._root.swatches.removeChild(o), this._swatchColors.splice(t, 1), !0;
                    }
                    return !1;
                }
                applyColor(t = !1) {
                    const { preview: e, button: o } = this._root,
                        n = this._color.toRGBA().toString(0);
                    return (
                        (e.lastColor.style.color = n),
                        this.options.useAsButton || (o.style.color = n),
                            o.classList.remove("clear"),
                            (this._lastColor = this._color.clone()),
                        this._initializingActive || t || this._emit("save", this._color),
                            this
                    );
                }
                destroy() {
                    this._eventBindings.forEach((t) => l(...t)), Object.keys(this._components).forEach((t) => this._components[t].destroy());
                }
                destroyAndRemove() {
                    this.destroy();
                    const { root: t, app: e } = this._root;
                    t.parentElement && t.parentElement.removeChild(t), e.parentElement.removeChild(e), Object.keys(this).forEach((t) => (this[t] = null));
                }
                hide() {
                    return this._root.app.classList.remove("visible"), this._emit("hide", this), this;
                }
                show() {
                    return this.options.disabled || (this._root.app.classList.add("visible"), this._rePositioningPicker(), this._emit("show", this)), this;
                }
                isOpen() {
                    return this._root.app.classList.contains("visible");
                }
                setHSVA(t = 360, e = 0, o = 0, n = 1, r = !1) {
                    const i = this._recalc;
                    if (((this._recalc = !1), t < 0 || t > 360 || e < 0 || e > 100 || o < 0 || o > 100 || n < 0 || n > 1)) return !1;
                    this._color = S(t, e, o, n);
                    const { hue: s, opacity: c, palette: a } = this._components;
                    return s.update(t / 360), c.update(n), a.update(e / 100, 1 - o / 100), r || this.applyColor(), i && this._updateOutput(), (this._recalc = i), !0;
                }
                setColor(t, e = !1) {
                    if (null === t) return this._clearColor(e), !0;
                    const { values: o, type: n } = this._parseLocalColor(t);
                    if (o) {
                        const t = n.toUpperCase(),
                            { options: r } = this._root.interaction,
                            i = r.find((e) => e.getAttribute("data-type") === t);
                        if (i && !i.hidden) for (const t of r) t.classList[t === i ? "add" : "remove"]("active");
                        return !!this.setHSVA(...o, e) && this.setColorRepresentation(t);
                    }
                    return !1;
                }
                setColorRepresentation(t) {
                    return (t = t.toUpperCase()), !!this._root.interaction.options.find((e) => e.getAttribute("data-type").startsWith(t) && !e.click());
                }
                getColorRepresentation() {
                    return this._representation;
                }
                getColor() {
                    return this._color;
                }
                getSelectedColor() {
                    return this._lastColor;
                }
                getRoot() {
                    return this._root;
                }
                disable() {
                    return this.hide(), (this.options.disabled = !0), this._root.button.classList.add("disabled"), this;
                }
                enable() {
                    return (this.options.disabled = !1), this._root.button.classList.remove("disabled"), this;
                }
            }
            H(N, "utils", n),
                H(N, "version", b.a),
                H(N, "I18N_DEFAULTS", {
                    "ui:dialog": "color picker dialog",
                    "btn:toggle": "toggle color picker dialog",
                    "btn:swatch": "color swatch",
                    "btn:last-color": "use previous color",
                    "btn:save": "Save",
                    "btn:cancel": "Cancel",
                    "btn:clear": "Clear",
                    "aria:btn:save": "save and close",
                    "aria:btn:cancel": "cancel and close",
                    "aria:btn:clear": "clear and close",
                    "aria:input": "color input field",
                    "aria:palette": "color selection area",
                    "aria:hue": "hue selection slider",
                    "aria:opacity": "selection slider",
                }),
                H(N, "DEFAULT_OPTIONS", {
                    appClass: null,
                    theme: "classic",
                    useAsButton: !1,
                    padding: 8,
                    disabled: !1,
                    comparison: !0,
                    closeOnScroll: !1,
                    outputPrecision: 0,
                    lockOpacity: !1,
                    autoReposition: !0,
                    container: "body",
                    components: { interaction: {} },
                    i18n: {},
                    swatches: null,
                    inline: !1,
                    sliders: null,
                    default: "",
                    defaultRepresentation: null,
                    position: "bottom-middle",
                    adjustableNumbers: !0,
                    showAlways: !1,
                    closeWithKey: "Escape",
                }),
                H(N, "create", (t) => new N(t));
            e.default = N;
        },
    ]).default;
});

