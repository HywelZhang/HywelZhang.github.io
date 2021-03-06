function ___a() {
    var e = ["鼓捣过", "爱过", "折腾过", "玩过", "感受过", "怕过", "体验过"];
    return e[~~ (Math.random() * e.length)] + " %1"
}
var i18n = {},
i18ns = i18ns || {
    "zh-cn": {
        blog: "博客",
        twitter: "微博",
        showcase: "作品展示",
        homepage: "主页",
        "buy me a coffee": "帮我买杯咖啡",
        donate: "捐赠",
        nyan: "喵",
        "learn more": "了解详情",
        "the %1 of %2": "%2的%1",
        author: "作者",
        translator: "翻译者",
        student: "初级码农",
        member: "成员",
        copter: "Linux",
        mcu: "单片机",
        "welcome to %1": "欢迎访问 %1",
        "you've been here for %1 sec.": "你已经在这里呆了 %1 秒",
        "played with %1": ___a,
        "played with": "鼓捣过",
        "some experience": "头衔与经历",
        "show all": "显示全部",
        "there are %1 strings in total and you've read all of them.": "这里总共有 %1 条句子，你已经都看过一次了"
    }
},
_t = function() {
    var e = navigator.language || navigator.userLanguage || navigator.systemLanguage || "en-US",
    t = navigator.languages || [];
    if (t.length || t.push(e), /\bncr\b/i.test(location.search)) return function(e) {
        var t = "" + e,
        n = arguments;
        return t = t.replace(/%(\d+)/g,
        function(e, t) {
            return n[t]
        })
    };
    for (var n = 0; n < t.length; n++) {
        var r = i18ns[t[n].toLowerCase()];
        if (r) {
            i18n = r;
            break
        }
    }
    var a = document.getElementById("i18n_selector");
    if (a) for (var n = 0; n < a.childNodes.length; n++) {
        var o = a.childNodes[n];
        if ("A" === o.nodeName && o.hasAttributes("hreflang")) {
            var i = o.attributes.getNamedItem("hreflang").value.toLowerCase();
            i18ns[i] = i18ns[i] || {},
            i18ns[i].__url__ = o.attributes.getNamedItem("href").value + "?ncr"
        }
    }
    if (i18n.__url__ && !location.pathname.endsWith(i18n.__url__)) return void(location.href = i18n.__url__ + location.search + location.hash);
    try {
        for (var l = document.querySelectorAll("[data-translate]"), n = l.length - 1; n >= 0; n--) {
            var u = l[n],
            s = u.textContent || u.innerText;
            s = i18n[s.trim().toLowerCase()] || s,
            u.innerText ? u.innerText = s: u.textContent = s
        }
    } catch(c) {}
    return function h(e) {
        e = "" + e;
        var t = i18n[e.toLowerCase()] || e,
        n = arguments;
        return "function" == typeof t && (t = t()),
        t = t.replace(/%(\d+)/g,
        function(e, t) {
            return h(n[t])
        })
    }
} ();
