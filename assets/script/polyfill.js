var getText = function(e, n) {
    return e.innerText || e.textContent || ""
},
setText = function(e, n) {
    return e.innerText = e.textContent = n,
    e
};
"function" != typeof String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
}),
document.querySelectorAll || (document.querySelectorAll = function(e) {
    var n, t = document.createElement("style"),
    o = [];
    for (document.documentElement.firstChild.appendChild(t), document._qsa = [], t.styleSheet.cssText = e + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), t.parentNode.removeChild(t); document._qsa.length;) n = document._qsa.shift(),
    n.style.removeAttribute("x-qsa"),
    o.push(n);
    return document._qsa = null,
    o
}),
document.querySelector || (document.querySelector = function(e) {
    var n = document.querySelectorAll(e);
    return n.length ? n[0] : null
}),
function() {
    for (var e = 0,
    n = ["ms", "moz", "webkit", "o"], t = 0; t < n.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[n[t] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[n[t] + "CancelAnimationFrame"] || window[n[t] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(n, t) {
        var o = (new Date).getTime(),
        r = Math.max(0, 16 - (o - e)),
        i = window.setTimeout(function() {
            n(o + r)
        },
        r);
        return e = o + r,
        i
    }),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    })
} (),
"function" != typeof Object.assign && !
function() {
    Object.assign = function(e) {
        "use strict";
        if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(e), t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            if (void 0 !== o && null !== o) for (var r in o) o.hasOwnProperty(r) && (n[r] = o[r])
        }
        return n
    }
} ();
