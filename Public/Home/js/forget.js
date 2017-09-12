function formSubmit() {
    $("#identifyingCode_error").text("");
    $("#identifyingCode_error").removeClass("error_bg");
    $.post(""+Home_User_RetrievePassword+"", $("#retrieve_form").serialize(),
    function(n) {
    	var data=JSON.parse(n);
        data.IsSuccess ? location.href = "/user/successfully": alert(n.Msg)
    })
}
function settime() {
    var t, n;
    if (/^(1[34578]\d{9})$/.test($("#Phone").val())) $("#hint").css("display", "block"),
    $.post(""+Home_User_getvalidatecode+"", {
        phone: $("#Phone").val(),
        code: $("#IdentifyingCode").val()
    },
    function(n) {
        n.IsSuccess || ($("#identifyingCode_error").text("验证码发送失败,请重新获取"), $("#identifyingCode_error").addClass("messge").addClass("error_bg"))
    });
    else {
        $("#phone_error").text("请输入手机号");
        $("#phone_error").addClass("messge").addClass("error_bg");
        return
    }
    t = 60;
    n != null && (clearTimeout(n), n = null);
    n = setInterval(function() {
        $("#smsId").attr("disabled", "disabled");
        t > 0 ? $("#smsId").val(t--+"秒后获取验证码") : (clearInterval(n), $("#smsId").val("免费获取验证码"), t = 60, $("#smsId").removeAttr("disabled"), $("#registerId").val("跳过验证,提交新密码"))
    },
    1e3)
} (function(n, t) {
    function gt(n) {
        var t = n.length,
        r = i.type(n);
        return i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n)
    }
    function te(n) {
        var t = ni[n] = {};
        return i.each(n.match(s) || [],
        function(n, i) {
            t[i] = !0
        }),
        t
    }
    function ur(n, r, u, f) {
        if (i.acceptData(n)) {
            var h, o, c = i.expando,
            l = n.nodeType,
            s = l ? i.cache: n,
            e = l ? n[c] : n[c] && c;
            if (e && s[e] && (f || s[e].data) || u !== t || "string" != typeof r) return e || (e = l ? n[c] = b.pop() || i.guid++:c),
            s[e] || (s[e] = l ? {}: {
                toJSON: i.noop
            }),
            ("object" == typeof r || "function" == typeof r) && (f ? s[e] = i.extend(s[e], r) : s[e].data = i.extend(s[e].data, r)),
            o = s[e],
            f || (o.data || (o.data = {}), o = o.data),
            u !== t && (o[i.camelCase(r)] = u),
            "string" == typeof r ? (h = o[r], null == h && (h = o[i.camelCase(r)])) : h = o,
            h
        }
    }
    function fr(n, t, r) {
        if (i.acceptData(n)) {
            var e, o, s = n.nodeType,
            u = s ? i.cache: n,
            f = s ? n[i.expando] : i.expando;
            if (u[f]) {
                if (t && (e = r ? u[f] : u[f].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t), t = (t in e) ? [t] : t.split(" ")), o = t.length; o--;) delete e[t[o]];
                    if (r ? !ti(e) : !i.isEmptyObject(e)) return
                } (r || (delete u[f].data, ti(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
            }
        }
    }
    function er(n, r, u) {
        if (u === t && 1 === n.nodeType) {
            var f = "data-" + r.replace(rr, "-$1").toLowerCase();
            if (u = n.getAttribute(f), "string" == typeof u) {
                try {
                    u = "true" === u ? !0 : "false" === u ? !1 : "null" === u ? null: +u + "" === u ? +u: ir.test(u) ? i.parseJSON(u) : u
                } catch(e) {}
                i.data(n, r, u)
            } else u = t
        }
        return u
    }
    function ti(n) {
        var t;
        for (t in n) if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function ct() {
        return ! 0
    }
    function g() {
        return ! 1
    }
    function cr() {
        try {
            return r.activeElement
        } catch(n) {}
    }
    function ar(n, t) {
        do n = n[t];
        while (n && 1 !== n.nodeType);
        return n
    }
    function fi(n, t, r) {
        if (i.isFunction(t)) return i.grep(n,
        function(n, i) {
            return !! t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n,
        function(n) {
            return n === t !== r
        });
        if ("string" == typeof t) {
            if (oe.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n,
        function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }
    function vr(n) {
        var i = yr.split("|"),
        t = n.createDocumentFragment();
        if (t.createElement) while (i.length) t.createElement(i.pop());
        return t
    }
    function gr(n, t) {
        return i.nodeName(n, "table") && i.nodeName(1 === t.nodeType ? t: t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function nu(n) {
        return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type,
        n
    }
    function tu(n) {
        var t = ye.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"),
        n
    }
    function hi(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }
    function iu(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var u, f, o, s = i._data(n),
            r = i._data(t, s),
            e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e) for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({},
            r.data))
        }
    }
    function be(n, t) {
        var r, f, u;
        if (1 === t.nodeType) {
            if (r = t.nodeName.toLowerCase(), !i.support.noCloneEvent && t[i.expando]) {
                u = i._data(t);
                for (f in u.events) i.removeEvent(t, f, u.handle);
                t.removeAttribute(i.expando)
            }
            "script" === r && t.text !== n.text ? (nu(t).text = n.text, tu(t)) : "object" === r ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === r && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === r ? t.defaultSelected = t.selected = n.defaultSelected: ("input" === r || "textarea" === r) && (t.defaultValue = n.defaultValue)
        }
    }
    function u(n, r) {
        var s, e, h = 0,
        f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t;
        if (!f) for (f = [], s = n.childNodes || n; null != (e = s[h]); h++) ! r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
        return r === t || r && i.nodeName(n, r) ? i.merge([n], f) : f
    }
    function ke(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }
    function ou(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = eu.length; i--;) if (t = eu[i] + r, t in n) return t;
        return u
    }
    function ut(n, t) {
        return n = t || n,
        "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    }
    function su(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u],
        r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && ut(r) && (e[u] = i._data(r, "olddisplay", au(r.nodeName)))) : e[u] || (o = ut(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f: i.css(r, "display"))));
        for (u = 0; s > u; u++) r = n[u],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "": "none"));
        return n
    }
    function hu(n, t, i) {
        var r = to.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }
    function cu(n, t, r, u, f) {
        for (var e = r === (u ? "border": "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)"margin" === r && (o += i.css(n, r + p[e], !0, f)),
        u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f), "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
        return o
    }
    function lu(n, t, r) {
        var e = !0,
        u = "width" === t ? n.offsetWidth: n.offsetHeight,
        f = v(n),
        o = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f);
        if (0 >= u || null == u) {
            if (u = y(n, t, f), (0 > u || null == u) && (u = n.style[t]), lt.test(u)) return u;
            e = o && (i.support.boxSizingReliable || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + cu(n, t, r || (o ? "border": "content"), e, f) + "px"
    }
    function au(n) {
        var u = r,
        t = uu[n];
        return t || (t = vu(n, u), "none" !== t && t || (rt = (rt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement), u = (rt[0].contentWindow || rt[0].contentDocument).document, u.write("<!doctype html><html><body>"), u.close(), t = vu(n, u), rt.detach()), uu[n] = t),
        t
    }
    function vu(n, t) {
        var r = i(t.createElement(n)).appendTo(t.body),
        u = i.css(r[0], "display");
        return r.remove(),
        u
    }
    function li(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t,
        function(t, i) {
            r || fo.test(n) ? u(n, i) : li(n + "[" + ("object" == typeof i ? t: "") + "]", i, r, u)
        });
        else if (r || "object" !== i.type(t)) u(n, t);
        else for (f in t) li(n + "[" + f + "]", t[f], r, u)
    }
    function gu(n) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0,
            e = t.toLowerCase().match(s) || [];
            if (i.isFunction(r)) while (u = e[f++])"+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }
    function nf(n, r, u, f) {
        function o(h) {
            var c;
            return e[h] = !0,
            i.each(n[h] || [],
            function(n, i) {
                var h = i(r, u, f);
                return "string" != typeof h || s || e[h] ? s ? !(c = h) : t: (r.dataTypes.unshift(h), o(h), !1)
            }),
            c
        }
        var e = {},
        s = n === yi;
        return o(r.dataTypes[0]) || !e["*"] && o("*")
    }
    function pi(n, r) {
        var f, u, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n: f || (f = {}))[u] = r[u]);
        return f && i.extend(!0, n, f),
        n
    }
    function ao(n, i, r) {
        for (var s, o, f, e, h = n.contents,
        u = n.dataTypes;
        "*" === u[0];) u.shift(),
        o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
        if (o) for (e in h) if (h[e] && h[e].test(o)) {
            u.unshift(e);
            break
        }
        if (u[0] in r) f = u[0];
        else {
            for (e in r) {
                if (!u[0] || n.converters[e + " " + u[0]]) {
                    f = e;
                    break
                }
                s || (s = e)
            }
            f = f || s
        }
        return f ? (f !== u[0] && u.unshift(f), r[f]) : t
    }
    function vo(n, t, i, r) {
        var h, u, f, s, e, o = {},
        c = n.dataTypes.slice();
        if (c[1]) for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;) if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift()) if ("*" === u) u = e;
        else if ("*" !== e && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f) for (h in o) if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                break
            }
            if (f !== !0) if (f && n.throws) t = f(t);
            else try {
                t = f(t)
            } catch(l) {
                return {
                    state: "parsererror",
                    error: f ? l: "No conversion from " + e + " to " + u
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function rf() {
        try {
            return new n.XMLHttpRequest
        } catch(t) {}
    }
    function yo() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function ff() {
        return setTimeout(function() {
            it = t
        }),
        it = i.now()
    }
    function ef(n, t, i) {
        for (var u, f = (ft[t] || []).concat(ft["*"]), r = 0, e = f.length; e > r; r++) if (u = f[r].call(i, t, n)) return u
    }
    function of(n, t, r) {
        var h, e, o = 0,
        l = pt.length,
        f = i.Deferred().always(function() {
            delete c.elem
        }),
        c = function() {
            if (e) return ! 1;
            for (var s = it || ff(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
            return f.notifyWith(n, [u, i, t]),
            1 > i && o ? t: (f.resolveWith(n, [u]), !1)
        },
        u = f.promise({
            elem: n,
            props: i.extend({},
            t),
            opts: i.extend(!0, {
                specialEasing: {}
            },
            r),
            originalProperties: t,
            originalOptions: r,
            startTime: it || ff(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(f),
                f
            },
            stop: function(t) {
                var i = 0,
                r = t ? u.tweens.length: 0;
                if (e) return this;
                for (e = !0; r > i; i++) u.tweens[i].run(1);
                return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]),
                this
            }
        }),
        s = u.props;
        for (bo(s, u.opts.specialEasing); l > o; o++) if (h = pt[o].call(u, n, s, u.opts)) return h;
        return i.map(s, ef, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function bo(n, t) {
        var r, f, e, u, o;
        for (r in n) if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
            u = o.expand(u);
            delete n[f];
            for (r in u) r in n || (n[r] = u[r], t[r] = e)
        } else t[f] = e
    }
    function ko(n, t, r) {
        var u, a, v, c, e, y, s = this,
        l = {},
        o = n.style,
        h = n.nodeType && ut(n),
        f = i._data(n, "fxshow");
        r.queue || (e = i._queueHooks(n, "fx"), null == e.unqueued && (e.unqueued = 0, y = e.empty.fire, e.empty.fire = function() {
            e.unqueued || y()
        }), e.unqueued++, s.always(function() {
            s.always(function() {
                e.unqueued--;
                i.queue(n, "fx").length || e.empty.fire()
            })
        }));
        1 === n.nodeType && ("height" in t || "width" in t) && (r.overflow = [o.overflow, o.overflowX, o.overflowY], "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== au(n.nodeName) ? o.zoom = 1 : o.display = "inline-block"));
        r.overflow && (o.overflow = "hidden", i.support.shrinkWrapBlocks || s.always(function() {
            o.overflow = r.overflow[0];
            o.overflowX = r.overflow[1];
            o.overflowY = r.overflow[2]
        }));
        for (u in t) if (a = t[u], po.exec(a)) {
            if (delete t[u], v = v || "toggle" === a, a === (h ? "hide": "show")) continue;
            l[u] = f && f[u] || i.style(n, u)
        }
        if (!i.isEmptyObject(l)) {
            f ? "hidden" in f && (h = f.hidden) : f = i._data(n, "fxshow", {});
            v && (f.hidden = !h);
            h ? i(n).show() : s.done(function() {
                i(n).hide()
            });
            s.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in l) i.style(n, t, l[t])
            });
            for (u in l) c = ef(h ? f[u] : 0, u, s),
            u in f || (f[u] = c.start, h && (c.end = c.start, c.start = "width" === u || "height" === u ? 1 : 0))
        }
    }
    function f(n, t, i, r, u) {
        return new f.prototype.init(n, t, i, r, u)
    }
    function wt(n, t) {
        var r, i = {
            height: n
        },
        u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = p[u],
        i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function sf(n) {
        return i.isWindow(n) ? n: 9 === n.nodeType ? n.defaultView || n.parentWindow: !1
    }
    var et, bi, o = typeof t,
    hf = n.location,
    r = n.document,
    ki = r.documentElement,
    cf = n.jQuery,
    lf = n.$,
    ot = {},
    b = [],
    bt = "1.10.2",
    di = b.concat,
    kt = b.push,
    l = b.slice,
    gi = b.indexOf,
    af = ot.toString,
    k = ot.hasOwnProperty,
    dt = bt.trim,
    i = function(n, t) {
        return new i.fn.init(n, t, bi)
    },
    st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    s = /\S+/g,
    vf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    yf = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    nr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    pf = /^[\],:{}\s]*$/,
    wf = /(?:^|:|,)(?:\s*\[)+/g,
    bf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    kf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    df = /^-ms-/,
    gf = /-([\da-z])/gi,
    ne = function(n, t) {
        return t.toUpperCase()
    },
    h = function(n) { (r.addEventListener || "load" === n.type || "complete" === r.readyState) && (tr(), i.ready())
    },
    tr = function() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", h, !1), n.removeEventListener("load", h, !1)) : (r.detachEvent("onreadystatechange", h), n.detachEvent("onload", h))
    },
    ni,
    ir,
    rr,
    wi,
    at,
    nt,
    tt,
    tf,
    vt;
    i.fn = i.prototype = {
        jquery: bt,
        constructor: i,
        init: function(n, u, f) {
            var e, o;
            if (!n) return this;
            if ("string" == typeof n) {
                if (e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : yf.exec(n), !e || !e[1] && u) return ! u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
                if (e[1]) {
                    if (u = u instanceof i ? u[0] : u, i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u: r, !0)), nr.test(e[1]) && i.isPlainObject(u)) for (e in u) i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
                    return this
                }
                if (o = r.getElementById(e[2]), o && o.parentNode) {
                    if (o.id !== e[2]) return f.find(n);
                    this.length = 1;
                    this[0] = o
                }
                return this.context = r,
                this.selector = n,
                this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(n) {
            return null == n ? this.toArray() : 0 > n ? this[this.length + n] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        ready: function(n) {
            return i.ready.promise().done(n),
            this
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(n) {
            var i = this.length,
            t = +n + (0 > n ? i: 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        map: function(n) {
            return this.pushStack(i.map(this,
            function(t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: kt,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function() {
        var u, o, r, e, s, h, n = arguments[0] || {},
        f = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof n && (c = n, n = arguments[1] || {},
        f = 2), "object" == typeof n || i.isFunction(n) || (n = {}), l === f && (n = this, --f); l > f; f++) if (null != (s = arguments[f])) for (e in s) u = n[e],
        r = s[e],
        n !== r && (c && r && (i.isPlainObject(r) || (o = i.isArray(r))) ? (o ? (o = !1, h = u && i.isArray(u) ? u: []) : h = u && i.isPlainObject(u) ? u: {},
        n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n
    };
    i.extend({
        expando: "jQuery" + (bt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return n.$ === i && (n.$ = lf),
            t && n.jQuery === i && (n.jQuery = cf),
            i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++:i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait: !i.isReady) {
                if (!r.body) return setTimeout(i.ready);
                i.isReady = !0;
                n !== !0 && --i.readyWait > 0 || (et.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray ||
        function(n) {
            return "array" === i.type(n)
        },
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            return ! isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function(n) {
            return null == n ? n + "": "object" == typeof n || "function" == typeof n ? ot[af.call(n)] || "object": typeof n
        },
        isPlainObject: function(n) {
            var r;
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return ! 1;
            try {
                if (n.constructor && !k.call(n, "constructor") && !k.call(n.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(u) {
                return ! 1
            }
            if (i.support.ownLast) for (r in n) return k.call(n, r);
            for (r in n);
            return r === t || k.call(n, r)
        },
        isEmptyObject: function(n) {
            var t;
            for (t in n) return ! 1;
            return ! 0
        },
        error: function(n) {
            throw Error(n);
        },
        parseHTML: function(n, t, u) {
            if (!n || "string" != typeof n) return null;
            "boolean" == typeof t && (u = t, t = !1);
            t = t || r;
            var f = nr.exec(n),
            e = !u && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && i(e).remove(), i.merge([], f.childNodes))
        },
        parseJSON: function(r) {
            return n.JSON && n.JSON.parse ? n.JSON.parse(r) : null === r ? r: "string" == typeof r && (r = i.trim(r), r && pf.test(r.replace(bf, "@").replace(kf, "]").replace(wf, ""))) ? Function("return " + r)() : (i.error("Invalid JSON: " + r), t)
        },
        parseXML: function(r) {
            var u, f;
            if (!r || "string" != typeof r) return null;
            try {
                n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
            } catch(e) {
                u = t
            }
            return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r),
            u
        },
        noop: function() {},
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript ||
            function(t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function(n) {
            return n.replace(df, "ms-").replace(gf, ne)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
            f = n.length,
            e = gt(n);
            if (i) {
                if (e) {
                    for (; f > r; r++) if (u = t.apply(n[r], i), u === !1) break
                } else for (r in n) if (u = t.apply(n[r], i), u === !1) break
            } else if (e) {
                for (; f > r; r++) if (u = t.call(n[r], r, n[r]), u === !1) break
            } else for (r in n) if (u = t.call(n[r], r, n[r]), u === !1) break;
            return n
        },
        trim: dt && !dt.call("﻿ ") ?
        function(n) {
            return null == n ? "": dt.call(n)
        }: function(n) {
            return null == n ? "": (n + "").replace(vf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (gt(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : kt.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (gi) return gi.call(t, n, i);
                for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i: 0; r > i; i++) if (i in t && t[i] === n) return i
            }
            return - 1
        },
        merge: function(n, i) {
            var f = i.length,
            u = n.length,
            r = 0;
            if ("number" == typeof f) for (; f > r; r++) n[u++] = i[r];
            else while (i[r] !== t) n[u++] = i[r++];
            return n.length = u,
            n
        },
        grep: function(n, t, i) {
            var u, f = [],
            r = 0,
            e = n.length;
            for (i = !!i; e > r; r++) u = !!t(n[r], r),
            i !== u && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
            e = n.length,
            o = gt(n),
            f = [];
            if (o) for (; e > r; r++) u = t(n[r], r, i),
            null != u && (f[f.length] = u);
            else for (r in n) u = t(n[r], r, i),
            null != u && (f[f.length] = u);
            return di.apply([], f)
        },
        guid: 1,
        proxy: function(n, r) {
            var f, u, e;
            return "string" == typeof r && (e = n[r], r = n, n = e),
            i.isFunction(n) ? (f = l.call(arguments, 2), u = function() {
                return n.apply(r || this, f.concat(l.call(arguments)))
            },
            u.guid = n.guid = n.guid || i.guid++, u) : t
        },
        access: function(n, r, u, f, e, o, s) {
            var h = 0,
            l = n.length,
            c = null == u;
            if ("object" === i.type(u)) {
                e = !0;
                for (h in u) i.access(n, r, h, u[h], !0, o, s)
            } else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), r = null) : (c = r, r = function(n, t, r) {
                return c.call(i(n), r)
            })), r)) for (; l > h; h++) r(n[h], u, s ? f: f.call(n[h], h, r(n[h], u)));
            return e ? n: c ? r.call(n) : l ? r(n[0], u) : o
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u],
            n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        }
    });
    i.ready.promise = function(t) {
        if (!et) if (et = i.Deferred(), "complete" === r.readyState) setTimeout(i.ready);
        else if (r.addEventListener) r.addEventListener("DOMContentLoaded", h, !1),
        n.addEventListener("load", h, !1);
        else {
            r.attachEvent("onreadystatechange", h);
            n.attachEvent("onload", h);
            var u = !1;
            try {
                u = null == n.frameElement && r.documentElement
            } catch(e) {}
            u && u.doScroll &&
            function f() {
                if (!i.isReady) {
                    try {
                        u.doScroll("left")
                    } catch(n) {
                        return setTimeout(f, 50)
                    }
                    tr();
                    i.ready()
                }
            } ()
        }
        return et.promise(t)
    };
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(n, t) {
        ot["[object " + t + "]"] = t.toLowerCase()
    });
    bi = i(r),
    function(n, t) {
        function u(n, t, i, r) {
            var p, u, f, l, w, a, k, c, g, d;
            if ((t ? t.ownerDocument || t: y) !== s && nt(t), t = t || s, i = i || [], !n || "string" != typeof n) return i;
            if (1 !== (l = t.nodeType) && 9 !== l) return [];
            if (v && !r) {
                if (p = or.exec(n)) if (f = p[1]) {
                    if (9 === l) {
                        if (u = t.getElementById(f), !u || !u.parentNode) return i;
                        if (u.id === f) return i.push(u),
                        i
                    } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ot(t, u) && u.id === f) return i.push(u),
                    i
                } else {
                    if (p[2]) return b.apply(i, t.getElementsByTagName(n)),
                    i;
                    if ((f = p[3]) && e.getElementsByClassName && t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(f)),
                    i
                }
                if (e.qsa && (!h || !h.test(n))) {
                    if (c = k = o, g = t, d = 9 === l && n, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        for (a = pt(n), (k = t.getAttribute("id")) ? c = k.replace(cr, "\\$&") : t.setAttribute("id", c), c = "[id='" + c + "'] ", w = a.length; w--;) a[w] = c + wt(a[w]);
                        g = ti.test(n) && t.parentNode || t;
                        d = a.join(",")
                    }
                    if (d) try {
                        return b.apply(i, g.querySelectorAll(d)),
                        i
                    } catch(tt) {} finally {
                        k || t.removeAttribute("id")
                    }
                }
            }
            return pr(n.replace(vt, "$1"), t, i, r)
        }
        function ri() {
            function n(i, u) {
                return t.push(i += " ") > r.cacheLength && delete n[t.shift()],
                n[i] = u
            }
            var t = [];
            return n
        }
        function c(n) {
            return n[o] = !0,
            n
        }
        function l(n) {
            var t = s.createElement("div");
            try {
                return !! n(t)
            } catch(i) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ui(n, t) {
            for (var u = n.split("|"), i = n.length; i--;) r.attrHandle[u[i]] = t
        }
        function bi(n, t) {
            var i = t && n,
            r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || vi) - (~n.sourceIndex || vi);
            if (r) return r;
            if (i) while (i = i.nextSibling) if (i === t) return - 1;
            return n ? 1 : -1
        }
        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }
        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function rt(n) {
            return c(function(t) {
                return t = +t,
                c(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ki() {}
        function pt(n, t) {
            var e, f, s, o, i, h, c, l = li[n + " "];
            if (l) return t ? 0 : l.slice(0);
            for (i = n, h = [], c = r.preFilter; i;) { (!e || (f = ir.exec(i))) && (f && (i = i.slice(f[0].length) || i), h.push(s = []));
                e = !1; (f = rr.exec(i)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(vt, " ")
                }), i = i.slice(e.length));
                for (o in r.filter)(f = yt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), i = i.slice(e.length));
                if (!e) break
            }
            return t ? i.length: i ? u.error(n) : li(n, h).slice(0)
        }
        function wt(n) {
            for (var t = 0,
            r = n.length,
            i = ""; r > t; t++) i += n[t].value;
            return i
        }
        function fi(n, t, i) {
            var r = t.dir,
            u = i && "parentNode" === r,
            f = di++;
            return t.first ?
            function(t, i, f) {
                while (t = t[r]) if (1 === t.nodeType || u) return n(t, i, f)
            }: function(t, i, e) {
                var h, s, c, l = p + " " + f;
                if (e) {
                    while (t = t[r]) if ((1 === t.nodeType || u) && n(t, i, e)) return ! 0
                } else while (t = t[r]) if (1 === t.nodeType || u) if (c = t[o] || (t[o] = {}), (s = c[r]) && s[0] === l) {
                    if ((h = s[1]) === !0 || h === ht) return h === !0
                } else if (s = c[r] = [l], s[1] = n(t, i, e) || ht, s[1] === !0) return ! 0
            }
        }
        function ei(n) {
            return n.length > 1 ?
            function(t, i, r) {
                for (var u = n.length; u--;) if (!n[u](t, i, r)) return ! 1;
                return ! 0
            }: n[0]
        }
        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }
        function oi(n, t, i, r, u, f) {
            return r && !r[o] && (r = oi(r)),
            u && !u[o] && (u = oi(u, f)),
            c(function(f, e, o, s) {
                var l, c, a, p = [],
                y = [],
                w = e.length,
                k = f || yr(t || "*", o.nodeType ? [o] : o, []),
                v = !n || !f && t ? k: bt(k, p, n, o, s),
                h = i ? u || (f ? n: w || r) ? [] : e: v;
                if (i && i(v, h, o, s), r) for (l = bt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? it.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = bt(h === e ? h.splice(w, h.length) : h),
                u ? u(null, e, h, s) : b.apply(e, h)
            })
        }
        function si(n) {
            for (var s, u, i, e = n.length,
            h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = fi(function(n) {
                return n === s
            },
            c, !0), a = fi(function(n) {
                return it.call(s, n) > -1
            },
            c, !0), f = [function(n, t, i) {
                return ! h && (i || t !== lt) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
            }]; e > t; t++) if (u = r.relative[n[t].type]) f = [fi(ei(f), u)];
            else {
                if (u = r.filter[n[t].type].apply(null, n[t].matches), u[o]) {
                    for (i = ++t; e > i; i++) if (r.relative[n[i].type]) break;
                    return oi(t > 1 && ei(f), t > 1 && wt(n.slice(0, t - 1).concat({
                        value: " " === n[t - 2].type ? "*": ""
                    })).replace(vt, "$1"), u, i > t && si(n.slice(t, i)), e > i && si(n = n.slice(i)), e > i && wt(n))
                }
                f.push(u)
            }
            return ei(f)
        }
        function vr(n, t) {
            var f = 0,
            i = t.length > 0,
            e = n.length > 0,
            o = function(o, h, c, l, a) {
                var y, g, k, w = [],
                d = 0,
                v = "0",
                nt = o && [],
                tt = null != a,
                it = lt,
                ut = o || e && r.find.TAG("*", a && h.parentNode || h),
                rt = p += null == it ? 1 : Math.random() || .1;
                for (tt && (lt = h !== s && h, ht = f); null != (y = ut[v]); v++) {
                    if (e && y) {
                        for (g = 0; k = n[g++];) if (k(y, h, c)) {
                            l.push(y);
                            break
                        }
                        tt && (p = rt, ht = ++f)
                    }
                    i && ((y = !k && y) && d--, o && nt.push(y))
                }
                if (d += v, i && v !== d) {
                    for (g = 0; k = t[g++];) k(nt, w, h, c);
                    if (o) {
                        if (d > 0) while (v--) nt[v] || w[v] || (w[v] = nr.call(l));
                        w = bt(w)
                    }
                    b.apply(l, w);
                    tt && !o && w.length > 0 && d + t.length > 1 && u.uniqueSort(l)
                }
                return tt && (p = rt, lt = it),
                nt
            };
            return i ? c(o) : o
        }
        function yr(n, t, i) {
            for (var r = 0,
            f = t.length; f > r; r++) u(n, t[r], i);
            return i
        }
        function pr(n, t, i, u) {
            var s, f, o, c, l, h = pt(n);
            if (!u && 1 === h.length) {
                if (f = h[0] = h[0].slice(0), f.length > 2 && "ID" === (o = f[0]).type && e.getById && 9 === t.nodeType && v && r.relative[f[1].type]) {
                    if (t = (r.find.ID(o.matches[0].replace(k, d), t) || [])[0], !t) return i;
                    n = n.slice(f.shift().value.length)
                }
                for (s = yt.needsContext.test(n) ? 0 : f.length; s--;) {
                    if (o = f[s], r.relative[c = o.type]) break;
                    if ((l = r.find[c]) && (u = l(o.matches[0].replace(k, d), ti.test(f[0].type) && t.parentNode || t))) {
                        if (f.splice(s, 1), n = u.length && wt(f), !n) return b.apply(i, u),
                        i;
                        break
                    }
                }
            }
            return kt(n, h)(u, t, !v, i, ti.test(n)),
            i
        }
        var ut, e, ht, r, ct, hi, kt, lt, g, nt, s, a, v, h, tt, at, ot, o = "sizzle" + -new Date,
        y = n.document,
        p = 0,
        di = 0,
        ci = ri(),
        li = ri(),
        ai = ri(),
        ft = !1,
        dt = function(n, t) {
            return n === t ? (ft = !0, 0) : 0
        },
        st = typeof t,
        vi = -2147483648,
        gi = {}.hasOwnProperty,
        w = [],
        nr = w.pop,
        tr = w.push,
        b = w.push,
        yi = w.slice,
        it = w.indexOf ||
        function(n) {
            for (var t = 0,
            i = this.length; i > t; t++) if (this[t] === n) return t;
            return - 1
        },
        gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        f = "[\\x20\\t\\r\\n\\f]",
        et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        pi = et.replace("w", "w#"),
        wi = "\\[" + f + "*(" + et + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + pi + ")|)|)" + f + "*\\]",
        ni = ":(" + et + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + wi.replace(3, 8) + ")*)|.*)\\)|)",
        vt = RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
        ir = RegExp("^" + f + "*," + f + "*"),
        rr = RegExp("^" + f + "*([>+~]|" + f + ")" + f + "*"),
        ti = RegExp(f + "*[+~]"),
        ur = RegExp("=" + f + "*([^\\]'\"]*)" + f + "*\\]", "g"),
        fr = RegExp(ni),
        er = RegExp("^" + pi + "$"),
        yt = {
            ID: RegExp("^#(" + et + ")"),
            CLASS: RegExp("^\\.(" + et + ")"),
            TAG: RegExp("^(" + et.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + wi),
            PSEUDO: RegExp("^" + ni),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
            bool: RegExp("^(?:" + gt + ")$", "i"),
            needsContext: RegExp("^" + f + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)", "i")
        },
        ii = /^[^{]+\{\s*\[native \w/,
        or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        sr = /^(?:input|select|textarea|button)$/i,
        hr = /^h\d$/i,
        cr = /'|\\/g,
        k = RegExp("\\\\([\\da-f]{1,6}" + f + "?|(" + f + ")|.)", "ig"),
        d = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            b.apply(w = yi.call(y.childNodes), y.childNodes);
            w[y.childNodes.length].nodeType
        } catch(wr) {
            b = {
                apply: w.length ?
                function(n, t) {
                    tr.apply(n, yi.call(t))
                }: function(n, t) {
                    for (var i = n.length,
                    r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        hi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        };
        e = u.support = {};
        nt = u.setDocument = function(n) {
            var i = n ? n.ownerDocument || n: y,
            u = i.defaultView;
            return i !== s && 9 === i.nodeType && i.documentElement ? (s = i, a = i.documentElement, v = !hi(i), u && u.attachEvent && u !== u.top && u.attachEvent("onbeforeunload",
            function() {
                nt()
            }), e.attributes = l(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }), e.getElementsByTagName = l(function(n) {
                return n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
            }), e.getElementsByClassName = l(function(n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>",
                n.firstChild.className = "i",
                2 === n.getElementsByClassName("i").length
            }), e.getById = l(function(n) {
                return a.appendChild(n).id = o,
                !i.getElementsByName || !i.getElementsByName(o).length
            }), e.getById ? (r.find.ID = function(n, t) {
                if (typeof t.getElementById !== st && v) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            },
            r.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    var i = typeof n.getAttributeNode !== st && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }), r.find.TAG = e.getElementsByTagName ?
            function(n, i) {
                return typeof i.getElementsByTagName !== st ? i.getElementsByTagName(n) : t
            }: function(n, t) {
                var i, r = [],
                f = 0,
                u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++]) 1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            },
            r.find.CLASS = e.getElementsByClassName &&
            function(n, i) {
                return typeof i.getElementsByClassName !== st && v ? i.getElementsByClassName(n) : t
            },
            tt = [], h = [], (e.qsa = ii.test(i.querySelectorAll)) && (l(function(n) {
                n.innerHTML = "<select><option selected=''><\/option><\/select>";
                n.querySelectorAll("[selected]").length || h.push("\\[" + f + "*(?:value|" + gt + ")");
                n.querySelectorAll(":checked").length || h.push(":checked")
            }), l(function(n) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("t", "");
                n.querySelectorAll("[t^='']").length && h.push("[*^$]=" + f + "*(?:''|\"\")");
                n.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                h.push(",.*:")
            })), (e.matchesSelector = ii.test(at = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && l(function(n) {
                e.disconnectedMatch = at.call(n, "div");
                at.call(n, "[s!='']:x");
                tt.push("!=", ni)
            }), h = h.length && RegExp(h.join("|")), tt = tt.length && RegExp(tt.join("|")), ot = ii.test(a.contains) || a.compareDocumentPosition ?
            function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement: n,
                i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }: function(n, t) {
                if (t) while (t = t.parentNode) if (t === n) return ! 0;
                return ! 1
            },
            dt = a.compareDocumentPosition ?
            function(n, t) {
                if (n === t) return ft = !0,
                0;
                var r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t);
                return r ? 1 & r || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || ot(y, n) ? -1 : t === i || ot(y, t) ? 1 : g ? it.call(g, n) - it.call(g, t) : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
            }: function(n, t) {
                var r, u = 0,
                o = n.parentNode,
                s = t.parentNode,
                f = [n],
                e = [t];
                if (n === t) return ft = !0,
                0;
                if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : g ? it.call(g, n) - it.call(g, t) : 0;
                if (o === s) return bi(n, t);
                for (r = n; r = r.parentNode;) f.unshift(r);
                for (r = t; r = r.parentNode;) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? bi(f[u], e[u]) : f[u] === y ? -1 : e[u] === y ? 1 : 0
            },
            i) : s
        };
        u.matches = function(n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== s && nt(n), t = t.replace(ur, "='$1']"), !(!e.matchesSelector || !v || tt && tt.test(t) || h && h.test(t))) try {
                var i = at.call(n, t);
                if (i || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
            } catch(r) {}
            return u(t, s, null, [n]).length > 0
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== s && nt(n),
            ot(n, t)
        };
        u.attr = function(n, i) { (n.ownerDocument || n) !== s && nt(n);
            var f = r.attrHandle[i.toLowerCase()],
            u = f && gi.call(r.attrHandle, i.toLowerCase()) ? f(n, i, !v) : t;
            return u === t ? e.attributes || !v ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value: null: u
        };
        u.error = function(n) {
            throw Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var r, u = [],
            t = 0,
            i = 0;
            if (ft = !e.detectDuplicates, g = !e.sortStable && n.slice(0), n.sort(dt), ft) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1)
            }
            return n
        };
        ct = u.getText = function(n) {
            var r, i = "",
            u = 0,
            t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += ct(n)
                } else if (3 === t || 4 === t) return n.nodeValue
            } else for (; r = n[u]; u++) i += ct(r);
            return i
        };
        r = u.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: yt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, d),
                    n[3] = (n[4] || n[5] || "").replace(k, d),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var r, i = !n[5] && n[2];
                    return yt.CHILD.test(n[0]) ? null: (n[3] && n[4] !== t ? n[2] = n[4] : i && fr.test(i) && (r = pt(i, !0)) && (r = i.indexOf(")", i.length - r) - i.length) && (n[0] = n[0].slice(0, r), n[2] = i.slice(0, r)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, d).toLowerCase();
                    return "*" === n ?
                    function() {
                        return ! 0
                    }: function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = ci[n + " "];
                    return t || (t = RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && ci(n,
                    function(n) {
                        return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== st && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t: t ? (f += "", "=" === t ? f === i: "!=" === t ? f !== i: "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice( - i.length) === i: "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-": !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                    e = "last" !== n.slice( - 4),
                    f = "of-type" === t;
                    return 1 === r && 0 === u ?
                    function(n) {
                        return !! n.parentNode
                    }: function(t, i, h) {
                        var a, k, c, l, v, w, b = s !== e ? "nextSibling": "previousSibling",
                        y = t.parentNode,
                        g = f && t.nodeName.toLowerCase(),
                        d = !h && !f;
                        if (y) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];) if (f ? c.nodeName.toLowerCase() === g: 1 === c.nodeType) return ! 1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return ! 0
                            }
                            if (w = [e ? y.firstChild: y.lastChild], e && d) {
                                for (k = y[o] || (y[o] = {}), a = k[n] || [], v = a[0] === p && a[1], l = a[0] === p && a[2], c = v && y.childNodes[v]; c = ++v && c && c[b] || (l = v = 0) || w.pop();) if (1 === c.nodeType && ++l && c === t) {
                                    k[n] = [p, v, l];
                                    break
                                }
                            } else if (d && (a = (t[o] || (t[o] = {}))[n]) && a[0] === p) l = a[1];
                            else while (c = ++v && c && c[b] || (l = v = 0) || w.pop()) if ((f ? c.nodeName.toLowerCase() === g: 1 === c.nodeType) && ++l && (d && ((c[o] || (c[o] = {}))[n] = [p, l]), c === t)) break;
                            return l -= u,
                            l === r || 0 == l % r && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, t) {
                    var f, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return i[o] ? i(t) : i.length > 1 ? (f = [n, n, "", t], r.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, r) {
                        for (var u, f = i(n, t), e = f.length; e--;) u = it.call(n, f[e]),
                        n[u] = !(r[u] = f[e])
                    }) : function(n) {
                        return i(n, 0, f)
                    }) : i
                }
            },
            pseudos: {
                not: c(function(n) {
                    var i = [],
                    r = [],
                    t = kt(n.replace(vt, "$1"));
                    return t[o] ? c(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n,
                        t(i, null, f, r),
                        !r.pop()
                    }
                }),
                has: c(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: c(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || ct(t)).indexOf(n) > -1
                    }
                }),
                lang: c(function(n) {
                    return er.test(n || "") || u.error("unsupported lang: " + n),
                    n = n.replace(k, d).toLowerCase(),
                    function(t) {
                        var i;
                        do
                        if (i = v ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(),
                        i === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === a
                },
                focus: function(n) {
                    return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling) if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(n) {
                    return ! r.pseudos.empty(n)
                },
                header: function(n) {
                    return hr.test(n.nodeName)
                },
                input: function(n) {
                    return sr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || t.toLowerCase() === n.type)
                },
                first: rt(function() {
                    return [0]
                }),
                last: rt(function(n, t) {
                    return [t - 1]
                }),
                eq: rt(function(n, t, i) {
                    return [0 > i ? i + t: i]
                }),
                even: rt(function(n, t) {
                    for (var i = 0; t > i; i += 2) n.push(i);
                    return n
                }),
                odd: rt(function(n, t) {
                    for (var i = 1; t > i; i += 2) n.push(i);
                    return n
                }),
                lt: rt(function(n, t, i) {
                    for (var r = 0 > i ? i + t: i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: rt(function(n, t, i) {
                    for (var r = 0 > i ? i + t: i; t > ++r;) n.push(r);
                    return n
                })
            }
        };
        r.pseudos.nth = r.pseudos.eq;
        for (ut in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[ut] = lr(ut);
        for (ut in {
            submit: !0,
            reset: !0
        }) r.pseudos[ut] = ar(ut);
        ki.prototype = r.filters = r.pseudos;
        r.setFilters = new ki;
        kt = u.compile = function(n, t) {
            var r, u = [],
            f = [],
            i = ai[n + " "];
            if (!i) {
                for (t || (t = pt(n)), r = t.length; r--;) i = si(t[r]),
                i[o] ? u.push(i) : f.push(i);
                i = ai(n, vr(f, u))
            }
            return i
        };
        e.sortStable = o.split("").sort(dt).join("") === o;
        e.detectDuplicates = ft;
        nt();
        e.sortDetached = l(function(n) {
            return 1 & n.compareDocumentPosition(s.createElement("div"))
        });
        l(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            "#" === n.firstChild.getAttribute("href")
        }) || ui("type|href|height|width",
        function(n, i, r) {
            return r ? t: n.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
        });
        e.attributes && l(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }) || ui("value",
        function(n, i, r) {
            return r || "input" !== n.nodeName.toLowerCase() ? t: n.defaultValue
        });
        l(function(n) {
            return null == n.getAttribute("disabled")
        }) || ui(gt,
        function(n, i, r) {
            var u;
            return r ? t: (u = n.getAttributeNode(i)) && u.specified ? u.value: n[i] === !0 ? i.toLowerCase() : null
        });
        i.find = u;
        i.expr = u.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = u.uniqueSort;
        i.text = u.getText;
        i.isXMLDoc = u.isXML;
        i.contains = u.contains
    } (n);
    ni = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? ni[n] || te(n) : i.extend({},
        n);
        var s, f, c, e, o, l, r = [],
        u = !n.once && [],
        a = function(t) {
            for (f = n.memory && t, c = !0, o = l || 0, l = 0, e = r.length, s = !0; r && e > o; o++) if (r[o].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                f = !1;
                break
            }
            s = !1;
            r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
        },
        h = {
            add: function() {
                if (r) {
                    var t = r.length; (function u(t) {
                        i.each(t,
                        function(t, f) {
                            var e = i.type(f);
                            "function" === e ? n.unique && h.has(f) || r.push(f) : f && f.length && "string" !== e && u(f)
                        })
                    })(arguments);
                    s ? e = r.length: f && (l = t, a(f))
                }
                return this
            },
            remove: function() {
                return r && i.each(arguments,
                function(n, t) {
                    for (var u; (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1),
                    s && (e >= u && e--, o >= u && o--)
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, r) > -1 : !(!r || !r.length)
            },
            empty: function() {
                return r = [],
                e = 0,
                this
            },
            disable: function() {
                return r = u = f = t,
                this
            },
            disabled: function() {
                return ! r
            },
            lock: function() {
                return u = t,
                f || h.disable(),
                this
            },
            locked: function() {
                return ! u
            },
            fireWith: function(n, t) {
                return ! r || c && !u || (t = t || [], t = [n, t.slice ? t.slice() : t], s ? u.push(t) : a(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! c
            }
        };
        return h
    };
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]],
            f = "pending",
            r = {
                state: function() {
                    return f
                },
                always: function() {
                    return t.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var n = arguments;
                    return i.Deferred(function(f) {
                        i.each(u,
                        function(u, e) {
                            var s = e[0],
                            o = i.isFunction(n[u]) && n[u];
                            t[e[1]](function() {
                                var n = o && o.apply(this, arguments);
                                n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                promise: function(n) {
                    return null != n ? i.extend(n, r) : r
                }
            },
            t = {};
            return r.pipe = r.then,
            i.each(u,
            function(n, i) {
                var e = i[2],
                o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                },
                u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r: this, arguments),
                    this
                };
                t[i[0] + "With"] = e.fireWith
            }),
            r.promise(t),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            var t = 0,
            u = l.call(arguments),
            r = u.length,
            e = 1 !== r || n && i.isFunction(n.promise) ? r: 0,
            f = 1 === e ? n: i.Deferred(),
            h = function(n, t, i) {
                return function(r) {
                    t[n] = this;
                    i[n] = arguments.length > 1 ? l.call(arguments) : r;
                    i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                }
            },
            o,
            c,
            s;
            if (r > 1) for (o = Array(r), c = Array(r), s = Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u),
            f.promise()
        }
    });
    i.support = function(t) {
        var a, e, f, h, c, l, v, y, s, u = r.createElement("div");
        if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", a = u.getElementsByTagName("*") || [], e = u.getElementsByTagName("a")[0], !e || !e.style || !a.length) return t;
        h = r.createElement("select");
        l = h.appendChild(r.createElement("option"));
        f = u.getElementsByTagName("input")[0];
        e.style.cssText = "top:1px;float:left;opacity:.5";
        t.getSetAttribute = "t" !== u.className;
        t.leadingWhitespace = 3 === u.firstChild.nodeType;
        t.tbody = !u.getElementsByTagName("tbody").length;
        t.htmlSerialize = !!u.getElementsByTagName("link").length;
        t.style = /top/.test(e.getAttribute("style"));
        t.hrefNormalized = "/a" === e.getAttribute("href");
        t.opacity = /^0.5/.test(e.style.opacity);
        t.cssFloat = !!e.style.cssFloat;
        t.checkOn = !!f.value;
        t.optSelected = l.selected;
        t.enctype = !!r.createElement("form").enctype;
        t.html5Clone = "<:nav><\/:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML;
        t.inlineBlockNeedsLayout = !1;
        t.shrinkWrapBlocks = !1;
        t.pixelPosition = !1;
        t.deleteExpando = !0;
        t.noCloneEvent = !0;
        t.reliableMarginRight = !0;
        t.boxSizingReliable = !0;
        f.checked = !0;
        t.noCloneChecked = f.cloneNode(!0).checked;
        h.disabled = !0;
        t.optDisabled = !l.disabled;
        try {
            delete u.test
        } catch(p) {
            t.deleteExpando = !1
        }
        f = r.createElement("input");
        f.setAttribute("value", "");
        t.input = "" === f.getAttribute("value");
        f.value = "t";
        f.setAttribute("type", "radio");
        t.radioValue = "t" === f.value;
        f.setAttribute("checked", "t");
        f.setAttribute("name", "t");
        c = r.createDocumentFragment();
        c.appendChild(f);
        t.appendChecked = f.checked;
        t.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        u.attachEvent && (u.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), u.cloneNode(!0).click());
        for (s in {
            submit: !0,
            change: !0,
            focusin: !0
        }) u.setAttribute(v = "on" + s, "t"),
        t[s + "Bubbles"] = v in n || u.attributes[v].expando === !1;
        u.style.backgroundClip = "content-box";
        u.cloneNode(!0).style.backgroundClip = "";
        t.clearCloneStyle = "content-box" === u.style.backgroundClip;
        for (s in i(t)) break;
        return t.ownLast = "0" !== s,
        i(function() {
            var h, e, f, c = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            s = r.getElementsByTagName("body")[0];
            s && (h = r.createElement("div"), h.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(h).appendChild(u), u.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", f = u.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", y = 0 === f[0].offsetHeight, f[0].style.display = "", f[1].style.display = "none", t.reliableHiddenOffsets = y && 0 === f[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", i.swap(s, null != s.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                t.boxSizing = 4 === u.offsetWidth
            }), n.getComputedStyle && (t.pixelPosition = "1%" !== (n.getComputedStyle(u, null) || {}).top, t.boxSizingReliable = "4px" === (n.getComputedStyle(u, null) || {
                width: "4px"
            }).width, e = u.appendChild(r.createElement("div")), e.style.cssText = u.style.cssText = c, e.style.marginRight = e.style.width = "0", u.style.width = "1px", t.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)), typeof u.style.zoom !== o && (u.innerHTML = "", u.style.cssText = c + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div><\/div>", u.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== u.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(h), h = u = f = e = null)
        }),
        a = h = c = l = e = f = null,
        t
    } ({});
    ir = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    rr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !ti(n)
        },
        data: function(n, t, i) {
            return ur(n, t, i)
        },
        removeData: function(n, t) {
            return fr(n, t)
        },
        _data: function(n, t, i) {
            return ur(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return fr(n, t, !0)
        },
        acceptData: function(n) {
            if (n.nodeType && 1 !== n.nodeType && 9 !== n.nodeType) return ! 1;
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return ! t || t !== !0 && n.getAttribute("classid") === t
        }
    });
    i.fn.extend({
        data: function(n, r) {
            var e, f, o = null,
            s = 0,
            u = this[0];
            if (n === t) {
                if (this.length && (o = i.data(u), 1 === u.nodeType && !i._data(u, "parsedAttrs"))) {
                    for (e = u.attributes; e.length > s; s++) f = e[s].name,
                    0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), er(u, f, o[f]));
                    i._data(u, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, r)
            }) : u ? er(u, n, i.data(u, n)) : null
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, r, u) {
            var f;
            return n ? (r = (r || "fx") + "queue", f = i._data(n, r), u && (!f || i.isArray(u) ? f = i._data(n, r, i.makeArray(u)) : f.push(u)), f || []) : t
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
            e = r.length,
            u = r.shift(),
            f = i._queueHooks(n, t),
            o = function() {
                i.dequeue(n, t)
            };
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f)); ! e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return "string" != typeof n && (r = n, n = "fx", u--),
            u > arguments.length ? i.queue(this[0], n) : r === t ? this: this.each(function() {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n: n,
            t = t || "fx",
            this.queue(t,
            function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, r) {
            var u, e = 1,
            o = i.Deferred(),
            f = this,
            s = this.length,
            h = function() {--e || o.resolveWith(f, [f])
            };
            for ("string" != typeof n && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"),
            u && u.empty && (e++, u.empty.add(h));
            return h(),
            o.promise(r)
        }
    });
    var d, or, ii = /[\t\r\n\f]/g,
    ie = /\r/g,
    re = /^(?:input|select|textarea|button|object)$/i,
    ue = /^(?:a|area)$/i,
    ri = /^(?:checked|selected)$/i,
    a = i.support.getSetAttribute,
    ht = i.support.input;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = t;
                    delete this[n]
                } catch(i) {}
            })
        },
        addClass: function(n) {
            var e, t, r, u, o, f = 0,
            h = this.length,
            c = "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (c) for (e = (n || "").match(s) || []; h > f; f++) if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ii, " ") : " ")) {
                for (o = 0; u = e[o++];) 0 > r.indexOf(" " + u + " ") && (r += u + " ");
                t.className = i.trim(r)
            }
            return this
        },
        removeClass: function(n) {
            var e, t, r, u, o, f = 0,
            h = this.length,
            c = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (c) for (e = (n || "").match(s) || []; h > f; f++) if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ii, " ") : "")) {
                for (o = 0; u = e[o++];) while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                t.className = n ? i.trim(r) : ""
            }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if ("string" === r) for (var t, f = 0,
                u = i(this), e = n.match(s) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else(r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "": i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ",
            t = 0,
            r = this.length; r > t; t++) if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(ii, " ").indexOf(i) >= 0) return ! 0;
            return ! 1
        },
        val: function(n) {
            var u, r, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
                var f;
                1 === this.nodeType && (f = e ? n.call(this, u, i(this).val()) : n, null == f ? f = "": "number" == typeof f ? f += "": i.isArray(f) && (f = i.map(f,
                function(n) {
                    return null == n ? "": n + ""
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u: (u = f.value, "string" == typeof u ? u.replace(ie, "") : null == u ? "": u)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t: n.text
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options,
                    r = n.selectedIndex,
                    u = "select-one" === n.type || 0 > r,
                    s = u ? null: [], h = u ? r + 1 : o.length, f = 0 > r ? h: u ? r: 0; h > f; f++) if (t = o[f], !(!t.selected && f !== r || (i.support.optDisabled ? t.disabled: null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                        if (e = i(t).val(), u) return e;
                        s.push(e)
                    }
                    return s
                },
                set: function(n, t) {
                    for (var u, r, f = n.options,
                    e = i.makeArray(t), o = f.length; o--;) r = f[o],
                    (r.selected = i.inArray(i(r).val(), e) >= 0) && (u = !0);
                    return u || (n.selectedIndex = -1),
                    e
                }
            }
        },
        attr: function(n, r, u) {
            var f, e, s = n.nodeType;
            if (n && 3 !== s && 8 !== s && 2 !== s) return typeof n.getAttribute === o ? i.prop(n, r, u) : (1 === s && i.isXMLDoc(n) || (r = r.toLowerCase(), f = i.attrHooks[r] || (i.expr.match.bool.test(r) ? or: d)), u === t ? f && "get" in f && null !== (e = f.get(n, r)) ? e: (e = i.find.attr(n, r), null == e ? t: e) : null !== u ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e: (n.setAttribute(r, u + ""), u) : (i.removeAttr(n, r), t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
            f = t && t.match(s);
            if (f && 1 === n.nodeType) while (r = f[e++]) u = i.propFix[r] || r,
            i.expr.match.bool.test(r) ? ht && a || !ri.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""),
            n.removeAttribute(a ? r: u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t),
                        r && (n.value = r),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !i.isXMLDoc(n),
            s && (r = i.propFix[r] || r, f = i.propHooks[r]),
            u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e: n[r] = u: f && "get" in f && null !== (e = f.get(n, r)) ? e: n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : re.test(n.nodeName) || ue.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    or = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : ht && a || !ri.test(r) ? n.setAttribute(!a && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0,
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g),
    function(n, r) {
        var u = i.expr.attrHandle[r] || i.find.attr;
        i.expr.attrHandle[r] = ht && a || !ri.test(r) ?
        function(n, r, f) {
            var e = i.expr.attrHandle[r],
            o = f ? t: (i.expr.attrHandle[r] = t) != u(n, r, f) ? r.toLowerCase() : null;
            return i.expr.attrHandle[r] = e,
            o
        }: function(n, r, u) {
            return u ? t: n[i.camelCase("default-" + r)] ? r.toLowerCase() : null
        }
    });
    ht && a || (i.attrHooks.value = {
        set: function(n, r, u) {
            return i.nodeName(n, "input") ? (n.defaultValue = r, t) : d && d.set(n, r, u)
        }
    });
    a || (d = {
        set: function(n, i, r) {
            var u = n.getAttributeNode(r);
            return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)),
            u.value = i += "",
            "value" === r || i === n.getAttribute(r) ? i: t
        }
    },
    i.expr.attrHandle.id = i.expr.attrHandle.name = i.expr.attrHandle.coords = function(n, i, r) {
        var u;
        return r ? t: (u = n.getAttributeNode(i)) && "" !== u.value ? u.value: null
    },
    i.valHooks.button = {
        get: function(n, i) {
            var r = n.getAttributeNode(i);
            return r && r.specified ? r.value: t
        },
        set: d.set
    },
    i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            d.set(n, "" === t ? !1 : t, i)
        }
    },
    i.each(["width", "height"],
    function(n, r) {
        i.attrHooks[r] = {
            set: function(n, i) {
                return "" === i ? (n.setAttribute(r, "auto"), i) : t
            }
        }
    }));
    i.support.hrefNormalized || i.each(["href", "src"],
    function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || t
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    i.support.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.each(["radio", "checkbox"],
    function() {
        i.valHooks[this] = {
            set: function(n, r) {
                return i.isArray(r) ? n.checked = i.inArray(i(n).val(), r) >= 0 : t
            }
        };
        i.support.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on": n.value
        })
    });
    var ui = /^(?:input|select|textarea)$/i,
    fe = /^key/,
    ee = /^(?:mouse|contextmenu)|click/,
    sr = /^(?:focusinfocus|focusoutblur)$/,
    hr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, r, u, f, e) {
            var b, p, k, w, c, l, a, v, h, d, g, y = i._data(n);
            if (y) {
                for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), (p = y.events) || (p = y.events = {}), (l = y.handle) || (l = y.handle = function(n) {
                    return typeof i === o || n && i.event.triggered === n.type ? t: i.event.dispatch.apply(l.elem, arguments)
                },
                l.elem = n), r = (r || "").match(s) || [""], k = r.length; k--;) b = hr.exec(r[k]) || [],
                h = g = b[1],
                d = (b[2] || "").split(".").sort(),
                h && (c = i.event.special[h] || {},
                h = (e ? c.delegateType: c.bindType) || h, c = i.event.special[h] || {},
                a = i.extend({
                    type: h,
                    origType: g,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: d.join(".")
                },
                w), (v = p[h]) || (v = p[h] = [], v.delegateCount = 0, c.setup && c.setup.call(n, f, d, l) !== !1 || (n.addEventListener ? n.addEventListener(h, l, !1) : n.attachEvent && n.attachEvent("on" + h, l))), c.add && (c.add.call(n, a), a.handler.guid || (a.handler.guid = u.guid)), e ? v.splice(v.delegateCount++, 0, a) : v.push(a), i.event.global[h] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(s) || [""], p = t.length; p--;) if (h = hr.exec(t[p]) || [], e = k = h[1], w = (h[2] || "").split(".").sort(), e) {
                    for (c = i.event.special[e] || {},
                    e = (u ? c.delegateType: c.bindType) || e, l = a[e] || [], h = h[2] && RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y],
                    !f && k !== o.origType || r && r.guid !== o.guid || h && !h.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                    b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
                } else for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
            }
        },
        trigger: function(u, f, e, o) {
            var a, v, s, w, l, c, b, p = [e || r],
            h = k.call(u, "type") ? u.type: u,
            y = k.call(u, "namespace") ? u.namespace.split(".") : [];
            if (s = c = e = e || r, 3 !== e.nodeType && 8 !== e.nodeType && !sr.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."), h = y.shift(), y.sort()), v = 0 > h.indexOf(":") && "on" + h, u = u[i.expando] ? u: new i.Event(h, "object" == typeof u && u), u.isTrigger = o ? 2 : 3, u.namespace = y.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u.result = t, u.target || (u.target = e), f = null == f ? [u] : i.makeArray(f, [u]), l = i.event.special[h] || {},
            o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (w = l.delegateType || h, sr.test(w + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s),
                    c = s;
                    c === (e.ownerDocument || r) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (b = 0; (s = p[b++]) && !u.isPropagationStopped();) u.type = b > 1 ? w: l.bindType || h,
                a = (i._data(s, "events") || {})[u.type] && i._data(s, "handle"),
                a && a.apply(s, f),
                a = v && s[v],
                a && i.acceptData(s) && a.apply && a.apply(s, f) === !1 && u.preventDefault();
                if (u.type = h, !o && !u.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), f) === !1) && i.acceptData(e) && v && e[h] && !i.isWindow(e)) {
                    c = e[v];
                    c && (e[v] = null);
                    i.event.triggered = h;
                    try {
                        e[h]()
                    } catch(d) {}
                    i.event.triggered = t;
                    c && (e[v] = c)
                }
                return u.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var o, e, r, u, s, h = [],
            c = l.call(arguments),
            a = (i._data(this, "events") || {})[n.type] || [],
            f = i.event.special[n.type] || {};
            if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                for (h = i.event.handlers.call(this, n, a), o = 0; (u = h[o++]) && !n.isPropagationStopped();) for (n.currentTarget = u.elem, s = 0; (r = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r, n.data = r.data, e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(u.elem, c), e !== t && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, n),
                n.result
            }
        },
        handlers: function(n, r) {
            var e, o, f, s, c = [],
            h = r.delegateCount,
            u = n.target;
            if (h && u.nodeType && (!n.button || "click" !== n.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== n.type)) {
                for (f = [], s = 0; h > s; s++) o = r[s],
                e = o.selector + " ",
                f[e] === t && (f[e] = o.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length),
                f[e] && f.push(o);
                f.length && c.push({
                    elem: u,
                    handlers: f
                })
            }
            return r.length > h && c.push({
                elem: this,
                handlers: r.slice(h)
            }),
            c
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var e, o, s, u = n.type,
            f = n,
            t = this.fixHooks[u];
            for (t || (this.fixHooks[u] = t = ee.test(u) ? this.mouseHooks: fe.test(u) ? this.keyHooks: {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e],
            n[o] = f[o];
            return n.target || (n.target = f.srcElement || r),
            3 === n.target.nodeType && (n.target = n.target.parentNode),
            n.metaKey = !!n.metaKey,
            t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode: t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var u, o, f, e = i.button,
                s = i.fromElement;
                return null == n.pageX && null != i.clientX && (o = n.target.ownerDocument || r, f = o.documentElement, u = o.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)),
                !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement: s),
                n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0),
                n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cr() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cr() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return i.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== t && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = r.removeEventListener ?
    function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }: function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
    };
    i.Event = function(n, r) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ct: g) : this.type = n, r && i.extend(this, r), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0, t) : new i.Event(n, r)
    };
    i.Event.prototype = {
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ct;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ct;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ct;
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                r = n.relatedTarget,
                e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t),
                u
            }
        }
    });
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : (i.event.add(this, "click._submit keypress._submit",
            function(n) {
                var u = n.target,
                r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form: t;
                r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit",
                function(n) {
                    n._submit_bubble = !0
                }), i._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : (i.event.remove(this, "._submit"), t)
        }
    });
    i.support.changeBubbles || (i.event.special.change = {
        setup: function() {
            return ui.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change",
            function(n) {
                "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
            }), i.event.add(this, "click._change",
            function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            })), !1) : (i.event.add(this, "beforeactivate._change",
            function(n) {
                var t = n.target;
                ui.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change",
                function(n) { ! this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), i._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(n) {
            var i = n.target;
            return this !== i || n.isSimulated || n.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? n.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            !ui.test(this.nodeName)
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(n, t) {
        var u = 0,
        f = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                0 == u++&&r.addEventListener(n, f, !0)
            },
            teardown: function() {
                0 == --u && r.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var s, o;
            if ("object" == typeof n) {
                "string" != typeof r && (u = u || r, r = t);
                for (s in n) this.on(s, r, u, n[s], e);
                return this
            }
            if (null == u && null == f ? (f = r, u = r = t) : null == f && ("string" == typeof r ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = g;
            else if (!f) return this;
            return 1 === e && (o = f, f = function(n) {
                return i().off(n),
                o.apply(this, arguments)
            },
            f.guid = o.guid || (o.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj) return f = n.handleObj,
            i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace: f.origType, f.selector, f.handler),
            this;
            if ("object" == typeof n) {
                for (e in n) this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || "function" == typeof r) && (u = r, r = t),
            u === !1 && (u = g),
            this.each(function() {
                i.event.remove(this, n, u, r)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, r) {
            var u = this[0];
            return u ? i.event.trigger(n, r, u, !0) : t
        }
    });
    var oe = /^.[^:#\[\.,]*$/,
    se = /^(?:parents|prev(?:Until|All))/,
    lr = i.expr.match.needsContext,
    he = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        find: function(n) {
            var t, r = [],
            u = this,
            f = u.length;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; f > t; t++) if (i.contains(u[t], this)) return ! 0
            }));
            for (t = 0; f > t; t++) i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + n: n,
            r
        },
        has: function(n) {
            var t, r = i(n, this),
            u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++) if (i.contains(this, r[t])) return ! 0
            })
        },
        not: function(n) {
            return this.pushStack(fi(this, n || [], !0))
        },
        filter: function(n) {
            return this.pushStack(fi(this, n || [], !1))
        },
        is: function(n) {
            return !! fi(this, "string" == typeof n && lr.test(n) ? i(n) : n || [], !1).length
        },
        closest: function(n, t) {
            for (var r, f = 0,
            o = this.length,
            u = [], e = lr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++) for (r = this[f]; r && r !== t; r = r.parentNode) if (11 > r.nodeType && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                r = u.push(r);
                break
            }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(n, t) {
            var r = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
            u = i.merge(this.get(), r);
            return this.pushStack(i.unique(u))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject: this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return ar(n, "nextSibling")
        },
        prev: function(n) {
            return ar(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document: i.merge([], n.childNodes)
        }
    },
    function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice( - 5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            this.length > 1 && (he[n] || (f = i.unique(f)), se.test(n) && (f = f.reverse())),
            this.pushStack(f)
        }
    });
    i.extend({
        filter: function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"),
            1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t,
            function(n) {
                return 1 === n.nodeType
            }))
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && 9 !== f.nodeType && (u === t || 1 !== f.nodeType || !i(f).is(u));) 1 === f.nodeType && e.push(f),
            f = f[r];
            return e
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    var yr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ce = / jQuery\d+="(?:null|\d+)"/g,
    pr = RegExp("<(?:" + yr + ")[\\s/>]", "i"),
    ei = /^\s+/,
    wr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    br = /<([\w:]+)/,
    kr = /<tbody/i,
    le = /<|&#?\w+;/,
    ae = /<(?:script|style|link)/i,
    oi = /^(?:checkbox|radio)$/i,
    ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
    dr = /^$|\/(?:java|ecma)script/i,
    ye = /^true\/(.*)/,
    pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    e = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        area: [1, "<map>", "<\/map>"],
        param: [1, "<object>", "<\/object>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: i.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
    },
    we = vr(r),
    si = we.appendChild(r.createElement("div"));
    e.optgroup = e.option;
    e.tbody = e.tfoot = e.colgroup = e.caption = e.thead;
    e.th = e.td;
    i.fn.extend({
        text: function(n) {
            return i.access(this,
            function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            },
            null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = gr(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = gr(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, f = 0; null != (r = e[f]); f++) t || 1 !== r.nodeType || i.cleanData(u(r)),
            r.parentNode && (t && i.contains(r.ownerDocument, r) && hi(u(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n,
            t = null == t ? n: t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return i.access(this,
            function(n) {
                var r = this[0] || {},
                f = 0,
                o = this.length;
                if (n === t) return 1 === r.nodeType ? r.innerHTML.replace(ce, "") : t;
                if (! ("string" != typeof n || ae.test(n) || !i.support.htmlSerialize && pr.test(n) || !i.support.leadingWhitespace && ei.test(n) || e[(br.exec(n) || ["", ""])[1].toLowerCase()])) {
                    n = n.replace(wr, "<$1><\/$2>");
                    try {
                        for (; o > f; f++) r = this[f] || {},
                        1 === r.nodeType && (i.cleanData(u(r, !1)), r.innerHTML = n);
                        r = 0
                    } catch(s) {}
                }
                r && this.empty().append(n)
            },
            null, n, arguments.length)
        },
        replaceWith: function() {
            var t = i.map(this,
            function(n) {
                return [n.nextSibling, n.parentNode]
            }),
            n = 0;
            return this.domManip(arguments,
            function(r) {
                var u = t[n++],
                f = t[n++];
                f && (u && u.parentNode !== f && (u = this.nextSibling), i(this).remove(), f.insertBefore(r, u))
            },
            !0),
            n ? this: this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t, r) {
            n = di.apply([], n);
            var h, f, c, o, v, s, e = 0,
            l = this.length,
            p = this,
            w = l - 1,
            a = n[0],
            y = i.isFunction(a);
            if (y || !(1 >= l || "string" != typeof a || i.support.checkClone) && ve.test(a)) return this.each(function(i) {
                var u = p.eq(i);
                y && (n[0] = a.call(this, i, u.html()));
                u.domManip(n, t, r)
            });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, !r && this), h = s.firstChild, 1 === s.childNodes.length && (s = h), h)) {
                for (o = i.map(u(s, "script"), nu), c = o.length; l > e; e++) f = s,
                e !== w && (f = i.clone(f, !0, !0), c && i.merge(o, u(f, "script"))),
                t.call(this[e], f, e);
                if (c) for (v = o[o.length - 1].ownerDocument, i.map(o, tu), e = 0; c > e; e++) f = o[e],
                dr.test(f.type || "") && !i._data(f, "globalEval") && i.contains(v, f) && (f.src ? i._evalUrl(f.src) : i.globalEval((f.text || f.textContent || f.innerHTML || "").replace(pe, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0,
            f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this: this.clone(!0),
            i(e[r])[t](u),
            kt.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    i.extend({
        clone: function(n, t, r) {
            var f, h, o, e, s, c = i.contains(n.ownerDocument, n);
            if (i.support.html5Clone || i.isXMLDoc(n) || !pr.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (si.innerHTML = n.outerHTML, si.removeChild(o = si.firstChild)), !(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n))) for (f = u(o), s = u(n), e = 0; null != (h = s[e]); ++e) f[e] && be(h, f[e]);
            if (t) if (r) for (s = s || u(n), f = f || u(o), e = 0; null != (h = s[e]); e++) iu(h, f[e]);
            else iu(n, o);
            return f = u(o, "script"),
            f.length > 0 && hi(f, !c && u(n, "script")),
            f = s = h = null,
            o
        },
        buildFragment: function(n, t, r, f) {
            for (var h, o, w, s, y, p, l, b = n.length,
            a = vr(t), c = [], v = 0; b > v; v++) if (o = n[v], o || 0 === o) if ("object" === i.type(o)) i.merge(c, o.nodeType ? [o] : o);
            else if (le.test(o)) {
                for (s = s || a.appendChild(t.createElement("div")), y = (br.exec(o) || ["", ""])[1].toLowerCase(), l = e[y] || e._default, s.innerHTML = l[1] + o.replace(wr, "<$1><\/$2>") + l[2], h = l[0]; h--;) s = s.lastChild;
                if (!i.support.leadingWhitespace && ei.test(o) && c.push(t.createTextNode(ei.exec(o)[0])), !i.support.tbody) for (o = "table" !== y || kr.test(o) ? "<table>" !== l[1] || kr.test(o) ? 0 : s: s.firstChild, h = o && o.childNodes.length; h--;) i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
                for (i.merge(c, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = a.lastChild
            } else c.push(t.createTextNode(o));
            for (s && a.removeChild(s), i.support.appendChecked || i.grep(u(c, "input"), ke), v = 0; o = c[v++];) if ((!f || -1 === i.inArray(o, f)) && (w = i.contains(o.ownerDocument, o), s = u(a.appendChild(o), "script"), w && hi(s), r)) for (h = 0; o = s[h++];) dr.test(o.type || "") && r.push(o);
            return s = null,
            a
        },
        cleanData: function(n, t) {
            for (var r, f, u, e, c = 0,
            s = i.expando,
            h = i.cache,
            l = i.support.deleteExpando,
            a = i.event.special; null != (r = n[c]); c++) if ((t || i.acceptData(r)) && (u = r[s], e = u && h[u])) {
                if (e.events) for (f in e.events) a[f] ? i.event.remove(r, f) : i.removeEvent(r, f, e.handle);
                h[u] && (delete h[u], l ? delete r[s] : typeof r.removeAttribute !== o ? r.removeAttribute(s) : r[s] = null, b.push(u))
            }
        },
        _evalUrl: function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    });
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var rt, v, y, ci = /alpha\([^)]*\)/i,
    de = /opacity\s*=\s*([^)]*)/,
    ge = /^(top|right|bottom|left)$/,
    no = /^(none|table(?!-c[ea]).+)/,
    ru = /^margin/,
    to = RegExp("^(" + st + ")(.*)$", "i"),
    lt = RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
    io = RegExp("^([+-])=(" + st + ")", "i"),
    uu = {
        BODY: "block"
    },
    ro = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    fu = {
        letterSpacing: 0,
        fontWeight: 400
    },
    p = ["Top", "Right", "Bottom", "Left"],
    eu = ["Webkit", "O", "Moz", "ms"];
    i.fn.extend({
        css: function(n, r) {
            return i.access(this,
            function(n, r, u) {
                var e, o, s = {},
                f = 0;
                if (i.isArray(r)) {
                    for (o = v(n), e = r.length; e > f; f++) s[r[f]] = i.css(n, r[f], !1, o);
                    return s
                }
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            },
            n, r, arguments.length > 1)
        },
        show: function() {
            return su(this, !0)
        },
        hide: function() {
            return su(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                ut(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = y(n, "opacity");
                        return "" === i ? "1": i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(n, r, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, s, e, h = i.camelCase(r),
                c = n.style;
                if (r = i.cssProps[h] || (i.cssProps[h] = ou(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o: c[r];
                if (s = typeof u, "string" === s && (o = io.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), !(null == u || "number" === s && isNaN(u) || ("number" !== s || i.cssNumber[h] || (u += "px"), i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (c[r] = "inherit"), e && "set" in e && (u = e.set(n, u, f)) === t))) try {
                    c[r] = u
                } catch(l) {}
            }
        },
        css: function(n, r, u, f) {
            var h, e, o, s = i.camelCase(r);
            return r = i.cssProps[s] || (i.cssProps[s] = ou(n.style, s)),
            o = i.cssHooks[r] || i.cssHooks[s],
            o && "get" in o && (e = o.get(n, !0, u)),
            e === t && (e = y(n, r, f)),
            "normal" === e && r in fu && (e = fu[r]),
            "" === u || u ? (h = parseFloat(e), u === !0 || i.isNumeric(h) ? h || 0 : e) : e
        }
    });
    n.getComputedStyle ? (v = function(t) {
        return n.getComputedStyle(t, null)
    },
    y = function(n, r, u) {
        var s, h, c, o = u || v(n),
        e = o ? o.getPropertyValue(r) || o[r] : t,
        f = n.style;
        return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), lt.test(e) && ru.test(r) && (s = f.width, h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = o.width, f.width = s, f.minWidth = h, f.maxWidth = c)),
        e
    }) : r.documentElement.currentStyle && (v = function(n) {
        return n.currentStyle
    },
    y = function(n, i, r) {
        var s, e, o, h = r || v(n),
        u = h ? h[i] : t,
        f = n.style;
        return null == u && f && f[i] && (u = f[i]),
        lt.test(u) && !ge.test(i) && (s = f.left, e = n.runtimeStyle, o = e && e.left, o && (e.left = n.currentStyle.left), f.left = "fontSize" === i ? "1em": u, u = f.pixelLeft + "px", f.left = s, o && (e.left = o)),
        "" === u ? "auto": u
    });
    i.each(["height", "width"],
    function(n, r) {
        i.cssHooks[r] = {
            get: function(n, u, f) {
                return u ? 0 === n.offsetWidth && no.test(i.css(n, "display")) ? i.swap(n, ro,
                function() {
                    return lu(n, r, f)
                }) : lu(n, r, f) : t
            },
            set: function(n, t, u) {
                var f = u && v(n);
                return hu(n, t, u ? cu(n, r, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
            }
        }
    });
    i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return de.test((t && n.currentStyle ? n.currentStyle.filter: n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(n, t) {
            var r = n.style,
            u = n.currentStyle,
            e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            f = u && u.filter || r.filter || "";
            r.zoom = 1; (t >= 1 || "" === t) && "" === i.trim(f.replace(ci, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = ci.test(f) ? f.replace(ci, e) : f + " " + e)
        }
    });
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, r) {
                return r ? i.swap(n, {
                    display: "inline-block"
                },
                y, [n, "marginRight"]) : t
            }
        }); ! i.support.pixelPosition && i.fn.position && i.each(["top", "left"],
        function(n, r) {
            i.cssHooks[r] = {
                get: function(n, u) {
                    return u ? (u = y(n, r), lt.test(u) ? i(n).position()[r] + "px": u) : t
                }
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        return 0 >= n.offsetWidth && 0 >= n.offsetHeight || !i.support.reliableHiddenOffsets && "none" === (n.style && n.style.display || i.css(n, "display"))
    },
    i.expr.filters.visible = function(n) {
        return ! i.expr.filters.hidden(n)
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0,
                f = {},
                u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        ru.test(n) || (i.cssHooks[n + t].set = hu)
    });
    var uo = /%20/g,
    fo = /\[\]$/,
    yu = /\r?\n/g,
    eo = /^(?:submit|button|image|reset|file)$/i,
    oo = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && oo.test(this.nodeName) && !eo.test(n) && (this.checked || !oi.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null: i.isArray(r) ? i.map(r,
                function(n) {
                    return {
                        name: t.name,
                        value: n.replace(yu, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(yu, "\r\n")
                }
            }).get()
        }
    });
    i.param = function(n, r) {
        var u, f = [],
        e = function(n, t) {
            t = i.isFunction(t) ? t() : null == t ? "": t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n,
        function() {
            e(this.name, this.value)
        });
        else for (u in n) li(u, n[u], r, e);
        return f.join("&").replace(uo, "+")
    };
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var w, c, ai = i.now(),
    vi = /\?/,
    so = /#.*$/,
    pu = /([?&])_=[^&]*/,
    ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    co = /^(?:GET|HEAD)$/,
    lo = /^\/\//,
    wu = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    bu = i.fn.load,
    ku = {},
    yi = {},
    du = "*/".concat("*");
    try {
        c = hf.href
    } catch(go) {
        c = r.createElement("a");
        c.href = "";
        c = c.href
    }
    w = wu.exec(c.toLowerCase()) || [];
    i.fn.load = function(n, r, u) {
        if ("string" != typeof n && bu) return bu.apply(this, arguments);
        var f, s, h, e = this,
        o = n.indexOf(" ");
        return o >= 0 && (f = n.slice(o, n.length), n = n.slice(0, o)),
        i.isFunction(r) ? (u = r, r = t) : r && "object" == typeof r && (h = "POST"),
        e.length > 0 && i.ajax({
            url: n,
            type: h,
            dataType: "html",
            data: r
        }).done(function(n) {
            s = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).complete(u &&
        function(n, t) {
            e.each(u, s || [n.responseText, t, n])
        }),
        this
    };
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: c,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(w[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": du,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? pi(pi(n, i.ajaxSettings), t) : pi(i.ajaxSettings, n)
        },
        ajaxPrefilter: gu(ku),
        ajaxTransport: gu(yi),
        ajax: function(n, r) {
            function k(n, r, s, c) {
                var a, rt, k, p, w, l = r;
                2 !== o && (o = 2, g && clearTimeout(g), y = t, d = c || "", f.readyState = n > 0 ? 4 : 0, a = n >= 200 && 300 > n || 304 === n, s && (p = ao(u, f, s)), p = vo(u, p, f, a), a ? (u.ifModified && (w = f.getResponseHeader("Last-Modified"), w && (i.lastModified[e] = w), w = f.getResponseHeader("etag"), w && (i.etag[e] = w)), 204 === n || "HEAD" === u.type ? l = "nocontent": 304 === n ? l = "notmodified": (l = p.state, rt = p.data, k = p.error, a = !k)) : (k = l, (n || !l) && (l = "error", 0 > n && (n = 0))), f.status = n, f.statusText = (r || l) + "", a ? tt.resolveWith(h, [rt, l, f]) : tt.rejectWith(h, [f, l, k]), f.statusCode(b), b = t, v && nt.trigger(a ? "ajaxSuccess": "ajaxError", [f, u, a ? rt: k]), it.fireWith(h, [f, l]), v && (nt.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (r = n, n = t);
            r = r || {};
            var l, a, e, d, g, v, y, p, u = i.ajaxSetup({},
            r),
            h = u.context || u,
            nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
            tt = i.Deferred(),
            it = i.Callbacks("once memory"),
            b = u.statusCode || {},
            rt = {},
            ut = {},
            o = 0,
            ft = "canceled",
            f = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (2 === o) {
                        if (!p) for (p = {}; t = ho.exec(d);) p[t[1].toLowerCase()] = t[2];
                        t = p[n.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === o ? d: null
                },
                setRequestHeader: function(n, t) {
                    var i = n.toLowerCase();
                    return o || (n = ut[i] = ut[i] || n, rt[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return o || (u.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n) if (2 > o) for (t in n) b[t] = [b[t], n[t]];
                    else f.always(n[f.status]);
                    return this
                },
                abort: function(n) {
                    var t = n || ft;
                    return y && y.abort(t),
                    k(0, t),
                    this
                }
            };
            if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || c) + "").replace(so, "").replace(lo, w[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""], null == u.crossDomain && (l = wu.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === w[1] && l[2] === w[2] && (l[3] || ("http:" === l[1] ? "80": "443")) === (w[3] || ("http:" === w[1] ? "80": "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), nf(ku, u, r, f), 2 === o) return f;
            v = u.global;
            v && 0 == i.active++&&i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !co.test(u.type);
            e = u.url;
            u.hasContent || (u.data && (e = u.url += (vi.test(e) ? "&": "?") + u.data, delete u.data), u.cache === !1 && (u.url = pu.test(e) ? e.replace(pu, "$1_=" + ai++) : e + (vi.test(e) ? "&": "?") + "_=" + ai++));
            u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e])); (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + du + "; q=0.01": "") : u.accepts["*"]);
            for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || 2 === o)) return f.abort();
            ft = "abort";
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            }) f[a](u[a]);
            if (y = nf(yi, u, r, f)) {
                f.readyState = 1;
                v && nt.trigger("ajaxSend", [f, u]);
                u.async && u.timeout > 0 && (g = setTimeout(function() {
                    f.abort("timeout")
                },
                u.timeout));
                try {
                    o = 1;
                    y.send(rt, k)
                } catch(et) {
                    if (! (2 > o)) throw et;
                    k( - 1, et)
                }
            } else k( - 1, "No Transport");
            return f
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        }
    });
    i.each(["get", "post"],
    function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t),
            i.ajax({
                url: n,
                type: r,
                dataType: e,
                data: u,
                success: f
            })
        }
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    });
    i.ajaxPrefilter("script",
    function(n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1)
    });
    i.ajaxTransport("script",
    function(n) {
        if (n.crossDomain) {
            var u, f = r.head || i("head")[0] || r.documentElement;
            return {
                send: function(t, i) {
                    u = r.createElement("script");
                    u.async = !0;
                    n.scriptCharset && (u.charset = n.scriptCharset);
                    u.src = n.url;
                    u.onload = u.onreadystatechange = function(n, t) { (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, u.parentNode && u.parentNode.removeChild(u), u = null, t || i(200, "success"))
                    };
                    f.insertBefore(u, f.firstChild)
                },
                abort: function() {
                    u && u.onload(t, !0)
                }
            }
        }
    });
    wi = [];
    at = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = wi.pop() || i.expando + "_" + ai++;
            return this[n] = !0,
            n
        }
    });
    i.ajaxPrefilter("json jsonp",
    function(r, u, f) {
        var e, s, o, h = r.jsonp !== !1 && (at.test(r.url) ? "url": "string" == typeof r.data && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && at.test(r.data) && "data");
        return h || "jsonp" === r.dataTypes[0] ? (e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, h ? r[h] = r[h].replace(at, "$1" + e) : r.jsonp !== !1 && (r.url += (vi.test(r.url) ? "&": "?") + r.jsonp + "=" + e), r.converters["script json"] = function() {
            return o || i.error(e + " was not called"),
            o[0]
        },
        r.dataTypes[0] = "json", s = n[e], n[e] = function() {
            o = arguments
        },
        f.always(function() {
            n[e] = s;
            r[e] && (r.jsonpCallback = u.jsonpCallback, wi.push(e));
            o && i.isFunction(s) && s(o[0]);
            o = s = t
        }), "script") : t
    });
    tf = 0;
    vt = n.ActiveXObject &&
    function() {
        var n;
        for (n in nt) nt[n](t, !0)
    };
    i.ajaxSettings.xhr = n.ActiveXObject ?
    function() {
        return ! this.isLocal && rf() || yo()
    }: rf;
    tt = i.ajaxSettings.xhr();
    i.support.cors = !!tt && "withCredentials" in tt;
    tt = i.support.ajax = !!tt;
    tt && i.ajaxTransport(function(r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function(f, e) {
                    var h, s, o = r.xhr();
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields) for (s in r.xhrFields) o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f) o.setRequestHeader(s, f[s])
                    } catch(c) {}
                    o.send(r.hasContent && r.data || null);
                    u = function(n, f) {
                        var s, a, l, c;
                        try {
                            if (u && (f || 4 === o.readyState)) if (u = t, h && (o.onreadystatechange = i.noop, vt && delete nt[h]), f) 4 !== o.readyState && o.abort();
                            else {
                                c = {};
                                s = o.status;
                                a = o.getAllResponseHeaders();
                                "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch(y) {
                                    l = ""
                                }
                                s || !r.isLocal || r.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                        } catch(v) {
                            f || e( - 1, v)
                        }
                        c && e(s, l, c, a)
                    };
                    r.async ? 4 === o.readyState ? setTimeout(u) : (h = ++tf, vt && (nt || (nt = {},
                    i(n).unload(vt)), nt[h] = u), o.onreadystatechange = u) : u()
                },
                abort: function() {
                    u && u(t, !0)
                }
            }
        }
    });
    var it, yt, po = /^(?:toggle|show|hide)$/,
    uf = RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
    wo = /queueHooks$/,
    pt = [ko],
    ft = {
        "*": [function(n, t) {
            var f = this.createTween(n, t),
            s = f.cur(),
            r = uf.exec(t),
            e = r && r[3] || (i.cssNumber[n] ? "": "px"),
            u = (i.cssNumber[n] || "px" !== e && +s) && uf.exec(i.css(f.elem, n)),
            o = 1,
            h = 20;
            if (u && u[3] !== e) {
                e = e || u[3];
                r = r || [];
                u = +s || 1;
                do o = o || ".5",
                u /= o,
                i.style(f.elem, n, u + e);
                while (o !== (o = f.cur() / s) && 1 !== o && --h)
            }
            return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]),
            f
        }]
    };
    i.Animation = i.extend(of, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0,
            f = n.length; f > u; u++) r = n[u],
            ft[r] = ft[r] || [],
            ft[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? pt.unshift(n) : pt.push(n)
        }
    });
    i.Tween = f;
    f.prototype = {
        constructor: f,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "": "px")
        },
        cur: function() {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = f.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n,
            this.now = (this.end - this.start) * r + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            t && t.set ? t.set(this) : f.propHooks._default.set(this),
            this
        }
    };
    f.prototype.init.prototype = f.prototype;
    f.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t: 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.each(["toggle", "show", "hide"],
    function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(wt(t, !0), n, i, u)
        }
    });
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(ut).css("opacity", 0).show().end().animate({
                opacity: t
            },
            n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n),
            e = i.speed(t, r, u),
            f = function() {
                var t = of(this, i.extend({},
                n), e); (o || i._data(this, "finish")) && t.stop(!0)
            };
            return f.finish = f,
            o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, r, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = r, r = n, n = t),
            r && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                var o = !0,
                t = null != n && n + "queueHooks",
                e = i.timers,
                r = i._data(this);
                if (t) r[t] && r[t].stop && f(r[t]);
                else for (t in r) r[t] && r[t].stop && wo.test(t) && f(r[t]);
                for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(u), o = !1, e.splice(t, 1)); (o || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"),
            this.each(function() {
                var t, f = i._data(this),
                r = f[n + "queue"],
                e = f[n + "queueHooks"],
                u = i.timers,
                o = r ? r.length: 0;
                for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each({
        slideDown: wt("show"),
        slideUp: wt("hide"),
        slideToggle: wt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({},
        n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration: u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
        (null == u.queue || u.queue === !0) && (u.queue = "fx"),
        u.old = u.complete,
        u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        },
        u
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return.5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.timers = [];
    i.fx = f.prototype.init;
    i.fx.tick = function() {
        var u, n = i.timers,
        r = 0;
        for (it = i.now(); n.length > r; r++) u = n[r],
        u() || n[r] !== u || n.splice(r--, 1);
        n.length || i.fx.stop();
        it = t
    };
    i.fx.timer = function(n) {
        n() && i.timers.push(n) && i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        yt || (yt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        clearInterval(yt);
        yt = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers,
        function(t) {
            return n === t.elem
        }).length
    });
    i.fn.offset = function(n) {
        if (arguments.length) return n === t ? this: this.each(function(t) {
            i.offset.setOffset(this, n, t)
        });
        var r, e, f = {
            top: 0,
            left: 0
        },
        u = this[0],
        s = u && u.ownerDocument;
        if (s) return r = s.documentElement,
        i.contains(r, u) ? (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()), e = sf(s), {
            top: f.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || 0),
            left: f.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
        }) : f
    };
    i.offset = {
        setOffset: function(n, t, r) {
            var f = i.css(n, "position");
            "static" === f && (n.style.position = "relative");
            var e = i(n),
            o = e.offset(),
            l = i.css(n, "top"),
            a = i.css(n, "left"),
            v = ("absolute" === f || "fixed" === f) && i.inArray("auto", [l, a]) > -1,
            u = {},
            s = {},
            h,
            c;
            v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            null != t.top && (u.top = t.top - o.top + h);
            null != t.left && (u.left = t.left - o.left + c);
            "using" in t ? t.using.call(n, u) : e.css(u)
        }
    };
    i.fn.extend({
        position: function() {
            if (this[0]) {
                var n, r, t = {
                    top: 0,
                    left: 0
                },
                u = this[0];
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)),
                {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || ki; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || ki
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function(f) {
            return i.access(this,
            function(n, f, e) {
                var o = sf(n);
                return e === t ? o ? r in o ? o[r] : o.document.documentElement[f] : n[f] : (o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e: i(o).scrollTop()) : n[f] = e, t)
            },
            n, f, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    },
    function(n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        },
        function(u, f) {
            i.fn[f] = function(f, e) {
                var o = arguments.length && (u || "boolean" != typeof f),
                s = u || (f === !0 || e === !0 ? "margin": "border");
                return i.access(this,
                function(r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s)
                },
                r, o ? f: t, o, null)
            }
        })
    });
    i.fn.size = function() {
        return this.length
    };
    i.fn.andSelf = i.fn.addBack;
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = i: (n.jQuery = n.$ = i, "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return i
    }))
})(window),
function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) return t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."),
            void 0;
            var i = n.data(this[0], "validator");
            return i ? i: (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click",
            function(t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(t.target).hasClass("cancel") && (i.cancelSubmit = !0);
                void 0 !== n(t.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function(t) {
                function r() {
                    var r;
                    return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
                }
                return i.settings.debug && t.preventDefault(),
                i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            if (n(this[0]).is("form")) return this.validate().form();
            var t = !0,
            i = n(this[0].form).validate();
            return this.each(function() {
                t = t && i.element(this)
            }),
            t
        },
        removeAttrs: function(t) {
            var i = {},
            r = this;
            return n.each(t.split(/\s/),
            function(n, t) {
                i[t] = r.attr(t);
                r.removeAttr(t)
            }),
            i
        },
        rules: function(t, i) {
            var r = this[0],
            o,
            u,
            h;
            if (t) {
                var e = n.data(r.form, "validator").settings,
                s = e.rules,
                f = n.validator.staticRules(r);
                switch (t) {
                case "add":
                    n.extend(f, n.validator.normalizeRule(i));
                    delete f.messages;
                    s[r.name] = f;
                    i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                    break;
                case "remove":
                    return i ? (o = {},
                    n.each(i.split(/\s/),
                    function(n, t) {
                        o[t] = f[t];
                        delete f[t]
                    }), o) : (delete s[r.name], f)
                }
            }
            return u = n.validator.normalizeRules(n.extend({},
            n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r),
            u.required && (h = u.required, delete u.required, u = n.extend({
                required: h
            },
            u)),
            u
        }
    });
    n.extend(n.expr[":"], {
        blank: function(t) {
            return ! n.trim("" + n(t).val())
        },
        filled: function(t) {
            return !! n.trim("" + n(t).val())
        },
        unchecked: function(t) {
            return ! n(t).prop("checked")
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {},
        n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function(t, i) {
        return 1 === arguments.length ?
        function() {
            var i = n.makeArray(arguments);
            return i.unshift(t),
            n.validator.format.apply(this, i)
        }: (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i,
        function(n, i) {
            t = t.replace(RegExp("\\{" + n + "\\}", "g"),
            function() {
                return i
            })
        }), t)
    };
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function(n) { ! this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(n, t) { (9 !== t.which || "" !== this.elementValue(n)) && (n.name in this.submitted || n === this.lastElement) && this.element(n)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    var i = n.data(this[0].form, "validator"),
                    r = "on" + t.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], t)
                }
                var r, t;
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                r = this.groups = {};
                n.each(this.settings.groups,
                function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/));
                    n.each(i,
                    function(n, i) {
                        r[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t,
                function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i);
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                n.extend(this.submitted, this.errorMap),
                this.invalid = n.extend({},
                this.errorMap),
                this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0,
                t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                t = this.validationTargetFor(this.clean(t));
                this.lastElement = t;
                this.prepareElement(t);
                this.currentElements = n(t);
                var i = this.check(t) !== !1;
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                i
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList,
                    function(n) {
                        return ! (n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t = 0,
                i;
                for (i in n) t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch(t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === n.grep(this.errorList,
                function(n) {
                    return n.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return ! this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in i || !t.objectLength(n(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.replace(" ", ".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var r = n(t).attr("type"),
                i = n(t).val();
                return "radio" === r || "checkbox" === r ? n("input[name='" + n(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
            },
            check: function(t) {
                var r, u;
                t = this.validationTargetFor(this.clean(t));
                var i, f = n(t).rules(),
                e = !1,
                s = this.elementValue(t);
                for (r in f) {
                    u = {
                        method: r,
                        parameters: f[r]
                    };
                    try {
                        if (i = n.validator.methods[r].call(this, s, t, u.parameters), "dependency-mismatch" === i) {
                            e = !0;
                            continue
                        }
                        if (e = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(t)),
                        void 0;
                        if (!i) return this.formatAndAdd(t, u),
                        !1
                    } catch(o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + u.method + "' method.", o),
                        o;
                    }
                }
                if (!e) return (this.objectLength(f) && this.successList.push(t), !0)
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg-" + i.toLowerCase()) || t.attributes && n(t).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i: i[t])
            },
            findDefined: function() {
                for (var n = 0; arguments.length > n; n++) if (void 0 !== arguments[n]) return arguments[n];
                return void 0
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function(t, i) {
                var r = this.defaultMessage(t, i.method),
                u = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({
                    message: r,
                    element: t
                });
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))),
                n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n],
                this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass),
                this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight) for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t))); ! i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var i = this.idOrName(t);
                return this.errors().filter(function() {
                    return n(this).attr("for") === i
                })
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name: n.id || n.name)
            },
            validationTargetFor: function(n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]),
                n
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return n("option:selected", i).length;
                case "input":
                    if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !! n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return ! n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i: n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {},
            r = n(t).attr("class");
            return r && n.each(r.split(" "),
            function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(t) {
            var u = {},
            e = n(t),
            f = e[0].getAttribute("type"),
            r,
            i;
            for (r in n.validator.methods)"required" === r ? (i = e.get(0).getAttribute(r), "" === i && (i = !0), i = !!i) : i = e.attr(r),
            /min|max/.test(r) && (null === f || /number|range|text/.test(f)) && (i = Number(i)),
            i ? u[r] = i: f === r && "range" !== f && (u[r] = !0);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength,
            u
        },
        dataRules: function(t) {
            var i, r, u = {},
            f = n(t);
            for (i in n.validator.methods) r = f.data("rule-" + i.toLowerCase()),
            void 0 !== r && (u[i] = r);
            return u
        },
        staticRules: function(t) {
            var i = {},
            r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return n.each(t,
            function(r, u) {
                if (u === !1) return delete t[r],
                void 0;
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                    case "string":
                        f = !!n(u.depends, i.form).length;
                        break;
                    case "function":
                        f = u.depends.call(i, i)
                    }
                    f ? t[r] = void 0 !== u.param ? u.param: !0 : delete t[r]
                }
            }),
            n.each(t,
            function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }),
            n.each(["minlength", "maxlength"],
            function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            n.each(["rangelength", "range"],
            function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }),
            n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)),
            t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                n.each(t.split(/\s/),
                function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = void 0 !== r ? r: n.validator.messages[t];
            3 > i.length && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test("" + new Date(n))
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                var r, e;
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return ! 1;
                var f = 0,
                i = 0,
                u = !1;
                for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--) e = n.charAt(r),
                i = parseInt(e, 10),
                u && (i *= 2) > 9 && (i -= 9),
                f += i,
                u = !u;
                return 0 == f % 10
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length: this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length: this.getLength(n.trim(t), i);
                return this.optional(i) || r >= u
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length: this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r[0] && r[1] >= u
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || i >= n
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && i[1] >= n
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo",
                function() {
                    n(i).valid()
                }),
                t === u.val()
            },
            remote: function(t, i, r) {
                var f, u, e;
                return this.optional(i) ? "dependency-mismatch": (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = "string" == typeof r && {
                    url: r
                } || r, f.old === t) ? f.valid: (f.old = t, u = this, this.startRequest(i), e = {},
                e[i.name] = t, n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    success: function(r) {
                        var e, h, s, o;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        e = r === !0 || "true" === r;
                        e ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (s = {},
                        o = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(o) ? o(t) : o, u.invalid[i.name] = !0, u.showErrors(s));
                        f.valid = e;
                        u.stopRequest(i, e)
                    }
                },
                r)), "pending")
            }
        }
    });
    n.format = n.validator.format
} (jQuery),
function(n) {
    var t = {},
    i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        "abort" === n.mode && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
        var f = ("mode" in r ? r: n.ajaxSettings).mode,
        u = ("port" in r ? r: n.ajaxSettings).port;
        return "abort" === f ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
    })
} (jQuery),
function(n) {
    n.extend(n.fn, {
        validateDelegate: function(t, i, r) {
            return this.bind(i,
            function(i) {
                var u = n(i.target);
                if (u.is(t)) return r.apply(u, arguments)
            })
        }
    })
} (jQuery);
jQuery.validator.addMethod("isMobile",
function(n, t) {
    var i = n.length;
    return this.optional(t) || i == 11 && /^(1[34578]\d{9})$/.test(n)
},
"请正确填写您的手机号码");
jQuery.validator.addMethod("checkCode",
function(n) {
    return ! ($("#registerId").val() == "确定并提交新密码" && n == "")
},
"请输入验证码");
var registerFlag;
$("#retrieve_form").validate({
    debug: !0,
    errorElement: "p",
    rules: {
        Phone: {
            required: !0,
            isMobile: !0,
            remote: {
                url: ""+Home_User_userbasicisexist_forget+"",
                type: "post",
                dataType: "json",
                data: {
                    phone: function() {
                        return $("#Phone").val()
                    }
                }
            }
        },
        IdentifyingCode: {
            minlength: 6,
            maxlength: 6,
            checkCode: !0
        },
        password: {
            required: !0,
            minlength: 6,
            maxlength: 16
        },
        repassword: {
            required: !0,
            equalTo: "#password"
        }
    },
    messages: {
        Phone: {
            required: "请输入手机号",
            isMobile: "请输入正确的手机号码",
            remote: "该手机号还没注册"
        },
        IdentifyingCode: {
            minlength: "请输入六位验证码",
            maxlength: "请输入六位验证码"
        },
        password: {
            required: "请输入密码",
            minlength: "密码最小长度6位",
            maxlength: "密码最长为16位"
        },
        repassword: {
            required: "请再次输入密码",
            equalTo: "两次密码输入不一致"
        }
    },
    errorPlacement: function(n, t) {
        while (! (t[0].nodeName == "DIV" || t[0].nodeName == "LI")) t = t.parent();
        t.children("p.messge").text(n.text());
        n.text() != "" ? t.children("p.messge").addClass("error_bg") : t.children("p.messge").removeClass("error_bg")
    },
    success: function() {},
    submitHandler: function() {
        $("#registerId").val() == "跳过验证,提交新密码" && $("#IdentifyingCode").val() == "" ? formSubmit() : $.post(""+Home_User_checkvalidatecode+"", {
            phone: $("#Phone").val(),
            code: $("#IdentifyingCode").val()
        },
        function(n) {
        	var data=JSON.parse(n);
            data.IsSuccess ? formSubmit() : ($("#identifyingCode_error").text("验证码不正确,请重新输入"), $("#identifyingCode_error").addClass("messge").addClass("error_bg"))
        })
    }
})