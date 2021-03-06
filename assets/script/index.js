function WaveShow(e, t) {
    function n(e) {
        if (!e && u.length >= r.circleCount) return null;
        var t = r.colors[~~ (Math.random() * r.colors.length)],
        n = /^#(..)(..)(..)$/.exec(t);
        n && (t = n.slice(1).map(function(e) {
            return parseInt(e, 16)
        }).join(","));
        var a = {
            color: t,
            x: r.centerX + 2 * (Math.random() - .5) * r.centerRadius,
            y: r.centerY + 2 * (Math.random() - .5) * r.centerRadius,
            radius: r.radiusMin + Math.random() * (r.radiusMax - r.radiusMin),
            lifeTime: r.lifeTimeMin + Math.random() * (r.lifeTimeMax - r.lifeTimeMin),
            createdTime: +new Date
        };
        return u.push(a),
        a
    }
    function a(e, t) {
        var n = (t - e.createdTime) / e.lifeTime;
        if (n >= 1) return ! 1;
        n = Math.pow(n, .5);
        var a = e.radius * n,
        i = "rgba(" + e.color + "," + (1 - n) + ")";
        return s.beginPath(),
        s.arc(e.x, e.y, a, 0, 6.2832, !1),
        s.fillStyle = i,
        s.fill(),
        !0
    }
    function i() {
        l = !0,
        n(),
        c()
    }
    function o() {
        l = !1
    }
    function c() {
        var t, i = e.width,
        o = e.height,
        d = +new Date;
        if (s.clearRect(0, 0, i, o), u.length) {
            for (t = 0; t < u.length; t++) a(u[t], d) || (u.splice(t, 1), t--);
            for (; l && t++<r.circleCount;) n();
            requestAnimationFrame(c)
        }
    }
    var s = e.getContext("2d"),
    r = {
        circleCount: 5,
        radiusMax: 70,
        radiusMin: 30,
        centerX: 0,
        centerY: 0,
        centerRadius: 50,
        lifeTimeMax: 2e3,
        lifeTimeMin: 200,
        colors: ["#CDDC39", "#8BC34A", "#FFEB3B", "#FFC107", "#FF9800", "#4CAF50", "#4DD0E1", "#9575CD", "#F44336"]
    },
    l = !1;
    t && (r = Object.assign(r, t));
    var u = [];
    return {
        circles: u,
        options: r,
        emit: n,
        start: i,
        repaint: c,
        stop: o
    }
}
function _dance_interval() {
    for (var e = 10; e--;) waveShow.emit(!0);
    waveShow.repaint(),
    music.currentTime >= 60 && (music.currentTime = 0, music.play())
}
function dance() {
    waveShow.start(),
    cat.className = "cjwJmp",
    music.play()
}
function undance() {
    waveShow.stop(),
    cat.className = "",
    music.pause()
}
function showSentence(e, t, n) {
    if (!n) {
        var a = getText(typeContainer);
        return void(a.length ? (setText(typeContainer, a.substr(0, a.length - 1)), cursorShown = 0, setTimeout(function() {
            showSentence(e, t)
        },
        wipeOutSpeed)) : ("function" == typeof t.emptied && t.emptied(), setTimeout(function() {
            showSentence(e, t, 1)
        },
        pauseTime)))
    }
    setText(typeContainer, e.substr(0, n)),
    cursorShown = 0,
    n === e.length ? "function" == typeof t.ended && t.ended() : setTimeout(function() {
        showSentence(e, t, n + 1)
    },
    inputSpeed)
}
function _t_s(e) {
    return "function" == typeof _t ? _t(e) : e
}
function shuffleArray(e) {
    for (var t = e.length - 1; t > 0; t--) {
        var n = Math.floor(Math.random() * (t + 1)),
        a = e[t];
        e[t] = e[n],
        e[n] = a
    }
    return e
}
function showLine(e) {
    function t() {
        wtf_link.style.display = i.link ? "inline": "none"
    }
    function n() {
        i.link && (wtf_link.href = i.link || "#", wtf_link.className = ""),
        i.shown || (i.release && i.release(), i.shown = !0),
        i.fake || sentences.splice(sentences_i, 0, i),
        ++sentences_i === sentences.length && (sentences_i = 0),
        setTimeout(showLine, sentenceKeepTime + 70 * o.split(/\w+|[\W]/g).length)
    }
    if (freezed || "function" != typeof _t) return void setTimeout(function() {
        showLine(e)
    },
    200);
    if (e) {
        var a = document.createElement("script");
        a.src = "funny.js",
        document.body.appendChild(a)
    }
    var i = sentences.splice(sentences_i, 1)[0],
    o = _t.apply(window, i.text);
    if (Math.random() < funnyCounter) {
        var c = ( + new Date - startTime) / 1e3;
        o = _t("You've been here for %1 sec.", c),
        sentences.splice(sentences_i, 0, i),
        i = {
            text: o,
            fake: !0,
            fun: !0
        },
        sentences_i--,
        funnyCounter = -.5
    } else funnyCounter = (3 * funnyCounter + .3) / 4;
    wtf_link.className = "hidden",
    showSentence(o, {
        emptied: t,
        ended: n
    })
}
var startTime = +new Date,
navMain = document.getElementById("nav-main"),
marquee = document.getElementById("marquee"),
cat = document.getElementById("marquee-cjw-cat");
try {
    var _dance_interval_val = 0,
    beat = 750,
    music = document.createElement("audio"),
    danced = !1;
    music.innerHTML = '<source src="/assets/others/8bittry.mp3" type="audio/mpeg" /><source src="/assets/others/8bittry.ogg" type="audio/ogg" />',
    music.setAttribute("loop", "true"),
    music.loop = !0,
    music.style.opacity = "0",
    music.style.position = "absolute",
    music.addEventListener("play",
    function() {
        music.currentTime = 0,
        _dance_interval_val && clearInterval(_dance_interval_val),
        _dance_interval_val = setInterval(_dance_interval, beat),
        cat.className = "cjwJmp",
        _dance_interval()
    }),
    music.addEventListener("pause",
    function() {
        cat.className = "",
        _dance_interval_val && clearInterval(_dance_interval_val),
        _dance_interval_val = 0
    }),
    music.load(),
    document.body.appendChild(music);
    var can = document.createElement("canvas");
    can.id = "marquee-animation",
    document.getElementById("marquee").appendChild(can);
    var waveShow = WaveShow(can, {
        circleCount: 0,
        lifeTimeMax: beat,
        lifeTimeMin: beat / 2,
        radiusMax: 200,
        radiusMin: 100
    }),
    nyanTooltip = document.querySelector("#marquee-cjw .tooltip");
    cat.addEventListener("mouseover",
    function(e) { ! danced && (danced = !0, cat.className = ""),
        nyanTooltip.style.display = "block",
        nyanTooltip.style.left = cat.offsetLeft + cat.offsetWidth / 3 + "px",
        nyanTooltip.style.top = cat.offsetTop - nyanTooltip.offsetHeight - 10 + "px"
    },
    !1),
    cat.addEventListener("mouseout",
    function(e) {
        nyanTooltip.style.display = "none"
    },
    !1),
    cat.addEventListener("click",
    function(e) {
        nyanTooltip.style.display = "none",
        cat.className ? undance() : dance()
    },
    !1),
    setTimeout(function e() {
        danced || (cat.className = cat.className ? "": "cjwJmp-once", setTimeout(e, 4e3))
    },
    2e3);
    var resized = function() {
        can.width = can.offsetWidth,
        can.height = can.offsetHeight,
        waveShow.options.centerX = cat.offsetLeft + cat.parentElement.offsetLeft + cat.offsetWidth / 2,
        waveShow.options.centerY = cat.offsetTop + cat.parentElement.offsetTop + cat.offsetHeight / 2,
        waveShow.options.centerRadius = Math.min(window.innerWidth, window.innerHeight) / 2
    };
    window.onresize = resized,
    cat.onload = resized,
    setTimeout(resized, 0)
} catch(er) {}
var typeContainer = document.getElementById("wtf"),
cursor = document.getElementById("wtf_cursor"),
cursorShown = 0,
wipeOutSpeed = 20,
pauseTime = 550,
inputSpeed = 30;
setInterval(function() {
    cursor.style.visibility = cursorShown ? "visible": "hidden",
    cursorShown ^= 1
},
300);
var wtf_link = document.getElementById("wtf_link"),
sentences = [{
    text: ["Welcome to %1", "laobubu.net"]
}];
sentences[0].fun = !0,
function() {
    function e() {
        this.element.className = "",
        this.release = null
    }
    for (var t = document.querySelectorAll("#wtf_out .linkwall"), n = t.length - 1; n >= 0; n--) for (var a = t[n], i = a.childNodes, o = i.length - 1; o >= 0; o--) {
        var c = i[o];
        if (1 === c.nodeType) {
            var s = c.href,
            r = getText(c).split(" : ", 2);
            c.innerHTML = "<span data-translate>" + r.join("</span> : <span data-translate>") + "</span>",
            r.unshift(c.parentElement.getAttribute("data-format"));
            var l = {
                text: r,
                link: s,
                element: c,
                parent: a
            };
            l.release = e.bind(l),
            l.element.className = "hidden",
            sentences.push(l)
        } else a.removeChild(c)
    }
} ();
var sentences_i = 0,
sentenceKeepTime = 2500;
sentences = shuffleArray(sentences);
var funnyCounter = 0,
wtf_container = document.getElementById("wtf_container"),
freezed = !1;
wtf_container.onmouseover = function() {
    freezed = !0
},
wtf_container.onmouseout = function() {
    freezed = !1
},
setText(typeContainer, "Hello World"),
wtf_link.className = "hidden",
showLine(!0),
document.getElementById("marquee-bala").onclick = function() {
    document.getElementById("wtf_out").className = "active"
};
