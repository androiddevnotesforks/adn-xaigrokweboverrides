! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "61aa880f-24c0-4db8-8e34-d95796b02264", e._sentryDebugIdIdentifier = "sentry-dbid-61aa880f-24c0-4db8-8e34-d95796b02264")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [778], {
        90778: function(e, t, s) {
            s.r(t), s.d(t, {
                default: function() {
                    return eT
                }
            });
            var a = s(96342),
                n = s(21873),
                r = s.n(n),
                i = s(8240),
                o = s(15497),
                l = s(62893),
                c = s(44136),
                d = s(6801),
                u = s(61645),
                m = s(44796),
                p = s(23015),
                h = s(21696),
                f = s(92336),
                g = s(73806);

            function x(e) {
                let [t, s] = (0, m.useState)(), [a, n] = (0, m.useState)(), [r, i] = (0, m.useState)(!1), [o, l] = (0, m.useState)(!1), [c, d] = (0, m.useState)(!1);
                return (0, m.useEffect)(() => {
                    let t = {
                        status: "UNSET",
                        value: void 0,
                        error: void 0
                    };
                    e.then(e => {
                        "PASSED" === t.status ? (s(e), n(void 0), i(!0), l(!1), d(!1)) : (t.status = "SETVALUE", t.value = e)
                    }).catch(e => {
                        "PASSED" === t.status ? (s(void 0), n(e), i(!1), l(!0), d(!1)) : (t.status = "SETERROR", t.error = e)
                    }), setTimeout(() => {
                        switch (t.status) {
                            case "UNSET":
                                s(void 0), n(void 0), i(!1), l(!1), d(!0);
                                break;
                            case "SETVALUE":
                                s(t.value), n(void 0), i(!0), l(!1), d(!1);
                                break;
                            case "SETERROR":
                                s(void 0), n(t.error), i(!1), l(!0), d(!1)
                        }
                        t.status = "PASSED"
                    })
                }, [e]), {
                    data: t,
                    error: a,
                    isResolved: r,
                    isErrored: o,
                    isLoading: c
                }
            }
            var v = s(81959),
                y = s(42063),
                b = s(9856),
                I = s(46452),
                j = s(4454),
                w = s(86331),
                N = s(50212),
                k = s(17352),
                S = s(38983),
                R = s(25082),
                C = s(64210),
                E = s(91841),
                Z = s(57500),
                _ = s(67387);
            s(59662);
            var M = s(67663),
                z = (0, M.$)("2a3ffca362d4881b278f84f9bf3837625c598e04"),
                A = (0, M.$)("95d41216ba978195c4685f5aa6cfd95a06cc92ed"),
                P = (0, M.$)("b134927aed7e42e54f44dd98f6b12375238eacf3"),
                T = (0, M.$)("fc34ab5dc76d61c18a398a6205aaa6b18846cdd9"),
                L = s(90199);
            let B = {},
                O = {},
                Y = {},
                D = {};
            class q {
                constructor(e, t) {
                    this.set = e, this.get = t, this.byId = B, this.promiseById = O, this.listByReq = Y, this.promiseListByReq = D, this.upsertAsset = (0, L.H)(this.set, "byId", "assetId"), this.appendAssets = (0, L.R3)(this.set, "byId", "assetId"), this.removeAsset = (0, L.Od)(this.set, "byId"), this.idsertPromise = (0, L.Qd)(this.set, "promiseById"), this.removePromise = (0, L.Od)(this.set, "promiseById"), this.idsertList = (0, L.Qd)(this.set, "listByReq"), this.idsertPromiseList = (0, L.Qd)(this.set, "promiseListByReq"), this.fetchCreateAsset = e => {
                        let t = this.get(),
                            s = A(e);
                        return s.then(e => {
                            t.idsertPromise(s, e.assetId), t.upsertAsset(e)
                        }), s
                    }, this.fetchDeleteAsset = e => {
                        let t = this.get(),
                            s = P(e);
                        return t.removePromise(e.assetId), t.removeAsset(e.assetId), s
                    }, this.fetchGetAsset = e => {
                        let t = this.get();
                        if (e.assetId in t.byId) return Promise.resolve(t.byId[e.assetId]);
                        if (e.assetId in t.promiseById) return t.promiseById[e.assetId];
                        let s = T(e);
                        return t.idsertPromise(s, e.assetId), s.then(t.upsertAsset), s
                    }, this.fetchListAssets = e => {
                        let t = this.get(),
                            s = r()(e).omit(e, ["pageToken", "pageSize"]).entries().sortBy().value().toString(),
                            a = t.listByReq[s];
                        if (a && a.nextPageToken !== e.pageToken) return Promise.resolve(a);
                        let n = r()(e).omit(e, ["pageSize"]).entries().sortBy().value().toString(),
                            i = t.promiseListByReq[n];
                        if (i) return i;
                        let o = z(e).then(e => {
                            t.appendAssets(e.assets);
                            let s = {};
                            return e.assets.map(e => {
                                s[e.assetId] = Promise.resolve(e)
                            }), t.set(e => ({
                                promiseById: {
                                    ...e.promiseById,
                                    ...s
                                }
                            })), {
                                assets: ((null == a ? void 0 : a.assets) || []).concat(e.assets),
                                nextPageToken: e.nextPageToken
                            }
                        });
                        return t.idsertPromiseList(o, n), o.then(e => t.idsertList(e, s)), o
                    }
                }
            }
            let W = (0, L.MT)(q);
            var F = s(10397),
                G = s(34704),
                H = s(52894),
                U = s(33),
                K = s(90328),
                X = s(22711),
                Q = s(57667),
                $ = s(16051),
                V = s(86730),
                J = s(927),
                ee = s(33607),
                et = s(76339),
                es = s(31940),
                ea = s(57470),
                en = s(87616),
                er = s(36074),
                ei = s(51831),
                eo = s(70290);
            s(58447);
            var el = s(25242);
            let ec = m.forwardRef((e, t) => {
                let {
                    className: s,
                    ...n
                } = e;
                return (0, a.jsx)(F.mY, {
                    ref: t,
                    className: (0, i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", s),
                    ...n
                })
            });
            ec.displayName = F.mY.displayName, m.forwardRef((e, t) => {
                let {
                    className: s,
                    ...n
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex items-center border-b px-3",
                    "cmdk-input-wrapper": "",
                    children: [(0, a.jsx)(el._Ve, {
                        className: "mr-2 h-4 w-4 shrink-0 opacity-50"
                    }), (0, a.jsx)(F.mY.Input, {
                        ref: t,
                        className: (0, i.cn)("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", s),
                        ...n
                    })]
                })
            }).displayName = F.mY.Input.displayName;
            let ed = m.forwardRef((e, t) => {
                let {
                    className: s,
                    ...n
                } = e;
                return (0, a.jsx)(F.mY.List, {
                    ref: t,
                    className: (0, i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", s),
                    ...n
                })
            });
            ed.displayName = F.mY.List.displayName, m.forwardRef((e, t) => (0, a.jsx)(F.mY.Empty, {
                ref: t,
                className: "py-6 text-center text-sm",
                ...e
            })).displayName = F.mY.Empty.displayName;
            let eu = m.forwardRef((e, t) => {
                let {
                    className: s,
                    ...n
                } = e;
                return (0, a.jsx)(F.mY.Group, {
                    ref: t,
                    className: (0, i.cn)("overflow-hidden px-2.5 py-2 text-sm text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", s),
                    ...n
                })
            });
            eu.displayName = F.mY.Group.displayName, m.forwardRef((e, t) => {
                let {
                    className: s,
                    ...n
                } = e;
                return (0, a.jsx)(F.mY.Separator, {
                    ref: t,
                    className: (0, i.cn)("-mx-1 h-px bg-border", s),
                    ...n
                })
            }).displayName = F.mY.Separator.displayName;
            let em = m.forwardRef((e, t) => {
                let {
                    className: s,
                    ...n
                } = e;
                return (0, a.jsx)(F.mY.Item, {
                    ref: t,
                    className: (0, i.cn)("relative flex cursor-pointer gap-2 select-none items-center px-2.5 py-2 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-zinc-700 data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", s),
                    ...n
                })
            });
            em.displayName = F.mY.Item.displayName;
            var ep = s(27186),
                eh = s(6418);

            function ef(e) {
                let {
                    text: t,
                    duration: s = 30,
                    delay: n = 500,
                    className: r
                } = e, [o, l] = (0, m.useState)(""), [c, d] = (0, m.useState)(0), [u, p] = (0, m.useState)(!1);
                return (0, m.useEffect)(() => {
                    let e = setTimeout(() => p(!0), n);
                    return () => clearTimeout(e)
                }, [n]), (0, m.useEffect)(() => {
                    if (!u) return;
                    let e = setInterval(() => {
                        c < t.length ? (l(t.substring(0, c + 1)), d(c + 1)) : clearInterval(e)
                    }, s);
                    return () => {
                        clearInterval(e)
                    }
                }, [s, c, u]), (0, a.jsx)("span", {
                    className: (0, i.cn)("tracking-[-0.02em]", r),
                    children: o
                })
            }
            let eg = async () => !1, ex = [], ev = (0, m.forwardRef)((e, t) => {
                var s;
                let {
                    id: n,
                    className: r,
                    onQuery: o = eg,
                    streamState: c,
                    onAbort: p = eg,
                    disabled: h,
                    enterSubmit: f = !0,
                    onKeyDown: v,
                    onChange: y,
                    initialValue: b,
                    placeholder: I,
                    conversationId: j,
                    canGlow: w = !0,
                    onFrontPage: N = !1,
                    isIncognito: k
                } = e, {
                    user: S
                } = (0, eo.kP)(), {
                    client: M
                } = (0, d.useStatsigClient)(), z = (0, Z.g)(), A = (0, m.useRef)(null), P = (0, m.useRef)(null);
                (0, m.useImperativeHandle)(t, () => ({
                    getTextArea: () => A.current
                }));
                let T = j || "no_conversation_id",
                    {
                        register: L,
                        handleSubmit: B,
                        formState: {
                            errors: O
                        }
                    } = (0, ea.cI)(),
                    {
                        ref: Y,
                        ...D
                    } = L("files", {
                        validate: () => !(ek.length > 6) || "No more than ".concat(6, " files allowed.")
                    }),
                    [q, V] = (0, m.useState)(b),
                    J = (0, C.g)(u.Z("setActiveModelId")),
                    [ee, et] = (0, m.useState)(!1),
                    el = (0, l.O)(u.Z("fetchUploadFile")),
                    ep = (0, l.O)(u.Z("removeByConversationId")),
                    eh = (0, l.O)(u.Z("delistByConversationId")),
                    ev = (0, l.O)(u.Z("listByConversastionId")),
                    ey = (0, l.O)(u.Z("attachListByConversationId")),
                    eb = (0, l.O)(u.Z("delistAttachByConversationId")),
                    ek = ev[T] || ex,
                    eS = ey[T] || ex,
                    eR = (0, C.g)(u.Z("activeModelId")),
                    eC = "pending" === c || "streaming" === c,
                    eE = (0, m.useMemo)(() => !ek.some(e => void 0 === e.metadata), [ek]),
                    [eZ, e_] = (0, m.useState)(!1),
                    eM = (0, m.useCallback)(async () => {
                        var e;
                        if (!eE) return;
                        eC && await p();
                        let t = null === (e = A.current) || void 0 === e ? void 0 : e.value,
                            s = ek.map(e => e.metadata).filter(e => e && !(e instanceof Error));
                        e_(!0), await o(t, void 0, s.map(e => e.fileMetadataId), A.current || void 0).finally(() => e_(!1)) && (V(""), A.current && (A.current.value = ""), ep(T))
                    }, [o, eE, eC, p, ek, ep, T]),
                    ez = B(async () => {
                        await eM()
                    }),
                    eA = (0, m.useCallback)(e => {
                        e.preventDefault(), ez()
                    }, [ez]);
                (0, _.y)("cmd+enter, ctrl+enter", () => {
                    ez()
                }, [ez]), (0, m.useEffect)(() => {
                    let e = e => {
                        !e.metaKey && !e.ctrlKey && !e.altKey && !e.repeat && "Tab" !== e.key && "Enter" !== e.key && /[a-zA-Z0-9]/.test(e.key) && N && A.current && A.current.focus()
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [N]);
                let eP = (0, m.useCallback)(e => {
                        if ("Enter" === e.key && !e.metaKey && !e.ctrlKey && !e.shiftKey && f) {
                            e.preventDefault(), ez();
                            return
                        }
                        null == v || v(e)
                    }, [f, v, ez]),
                    eT = (0, m.useCallback)(e => {
                        var t;
                        V(null === (t = A.current) || void 0 === t ? void 0 : t.value), null == y || y(e)
                    }, [y]),
                    eL = (0, m.useCallback)(() => {
                        var e;
                        null === (e = P.current) || void 0 === e || e.click()
                    }, []),
                    eB = (0, m.useCallback)(e => {
                        if (!e.target.files) return;
                        let t = Array.from(e.target.files);
                        if (M.logEvent("upload_files", t.length, {
                                location: "query-bar"
                            }), ek.length + t.length > 6) {
                            R.Am.error("Can only submit a maximum of ".concat(6, " files per message. Please remove some files before uploading more."));
                            return
                        }
                        t.forEach(e => {
                            el(e, T)
                        })
                    }, [M, el, T, ek.length]),
                    eO = (0, m.useCallback)(e => {
                        if (!P.current) return;
                        let t = P.current.files;
                        if (!t) return;
                        let s = new DataTransfer;
                        Array.from(t).forEach(e => {
                            e != e && s.items.add(e)
                        }), P.current.files = s.files, eh(T, e)
                    }, [T, eh]),
                    eY = (0, m.useCallback)(e => {
                        eb(T, e.assetId)
                    }, [T]),
                    [eD, eq] = (0, m.useState)(0),
                    eW = (0, m.useMemo)(() => Array.isArray(I) ? I[eD] : I, [I, eD]);
                (0, m.useEffect)(() => {
                    let e = setInterval(() => {
                        Array.isArray(I) && eq(e => (e + 1) % I.length)
                    }, 5e3);
                    return () => clearInterval(e)
                }, [String(I)]);
                let eF = (0, m.useCallback)(() => {
                        var e;
                        null === (e = A.current) || void 0 === e || e.focus()
                    }, []),
                    {
                        data: eG
                    } = x(W(u.Z("fetchListAssets"))({
                        pageSize: 100,
                        mimeTypes: [],
                        orderBy: "ORDER_BY_LAST_USE_TIME",
                        assetIds: []
                    })),
                    eH = (0, l.O)(u.Z("lisertAttachByConversationId")),
                    [eU, eK] = (0, m.useState)();
                (0, m.useEffect)(() => {
                    if (!eU) return;
                    let e = () => eK(void 0);
                    return document.addEventListener("click", e), () => document.removeEventListener("click", e)
                }, [eU]);
                let eX = (0, m.useMemo)(() => {
                        if (eU) {
                            if ("attach" === eU) return (0, a.jsx)("div", {
                                className: "absolute -top-2 left-0 -translate-y-full w-[260px]",
                                children: (0, a.jsxs)(ec, {
                                    className: "bg-zinc-800 rounded-xl",
                                    children: [(0, a.jsx)(F.mY.Input, {
                                        className: "hidden"
                                    }), (0, a.jsxs)(ed, {
                                        children: [(0, a.jsxs)(em, {
                                            className: "text-primary",
                                            forceMount: !0,
                                            onSelect: eL,
                                            children: [(0, a.jsx)(H.Z, {
                                                size: 16
                                            }), "Upload new file"]
                                        }), null == eG ? void 0 : eG.assets.map(e => (0, a.jsx)(em, {
                                            disabled: !!eS.find(t => t.assetId === e.assetId),
                                            onSelect: () => {
                                                M.logEvent("attach_asset", e.name, {
                                                    mimeType: e.mimeType,
                                                    location: "query-bar"
                                                }), eH(e, T)
                                            },
                                            children: (0, a.jsx)(ew, {
                                                asset: e
                                            })
                                        }, e.assetId))]
                                    })]
                                })
                            });
                            if ("model" === eU) return (0, a.jsx)("div", {
                                className: "absolute -top-2 left-0 -translate-y-full w-[260px]",
                                children: (0, a.jsxs)(ec, {
                                    className: "bg-zinc-800 rounded-xl",
                                    children: [(0, a.jsx)(F.mY.Input, {
                                        className: "hidden"
                                    }), (0, a.jsxs)(ed, {
                                        children: [(0, a.jsx)(eu, {
                                            className: "",
                                            children: "Select your model"
                                        }), E.hv.map(e => (0, a.jsxs)(em, {
                                            className: (0, i.cn)("hover:bg-primary group"),
                                            onSelect: () => {
                                                M.logEvent("switch_model", e, {
                                                    location: "query-bar"
                                                }), J(e), eK(void 0)
                                            },
                                            children: [(0, a.jsx)("div", {
                                                className: "pb-0.5 group-hover:text-primary",
                                                children: (0, E.$1)(e)
                                            }), (0, a.jsx)("div", {
                                                className: "text-xs text-zinc-400",
                                                children: (0, E.rc)(e)
                                            })]
                                        }, e))]
                                    })]
                                })
                            })
                        }
                    }, [eU, eG, eS, T, eL, eH, J, M]),
                    eQ = (0, m.useCallback)(() => {
                        eL()
                    }, [M, eL]),
                    e$ = (0, m.useCallback)(() => {
                        M.logEvent("click_model_selector", void 0, {
                            location: "query-bar"
                        }), eK(e => "model" !== e ? "model" : void 0)
                    }, [M]),
                    eV = (0, m.useCallback)(() => {
                        M.logEvent("click_mode_selector", void 0, {
                            location: "query-bar"
                        }), eK(e => "mode" !== e ? "mode" : void 0)
                    }, [M]),
                    eJ = h || !q || eZ;
                return (0, a.jsx)("form", {
                    id: n,
                    className: (0, i.cn)("w-full text-base flex flex-col gap-2 items-center justify-center relative z-10", r),
                    onSubmit: ez,
                    children: (0, a.jsxs)("div", {
                        className: (0, i.cn)("flex flex-row gap-2 justify-center w-full lg:w-4/5 relative"),
                        onClick: eF,
                        children: [(0, a.jsx)("input", {
                            ref: e => {
                                Y(e), P.current = e
                            },
                            ...D,
                            className: "hidden",
                            type: "file",
                            onChange: eB,
                            multiple: !0,
                            accept: "application/pdf"
                        }), O.files && (0, a.jsx)("div", {
                            className: "text-red-500 absolute top-[-20px]",
                            children: O.files.message
                        }), (0, a.jsxs)("div", {
                            className: (0, i.cn)("max-w-[50rem]", "relative w-full rounded-2xl sm:rounded-3xl duration-100", "p-2.5", "bg-input backdrop-blur-lg", "ring-2 ring-input-border ring-inset", "focus-within:ring-input-border-focus focus-within:bg-input-hover", w && "focus-within:shadow-[0px_2px_24px_2px_var(--input-glow)]", "hover:ring-input-border-focus hover:bg-input-hover", k && "bg-input-incognito focus-within:bg-input-hover-incognito hover:bg-input-hover-incognito", k && "ring-input-border-incognito", k && "focus-within:ring-input-border-focus-incognito", k && w && "focus-within:shadow-[0px_2px_24px_2px_var(--input-glow-incognito)]", k && "hover:ring-input-border-focus-incognito"),
                            children: [eX, ek.length > 0 || eS.length > 0 ? (0, a.jsxs)("div", {
                                className: (0, i.cn)("w-full flex flex-row gap-2 pb-3 flex-wrap", "whitespace-nowrap"),
                                children: [ek.map((e, t) => (0, a.jsx)(ei.T, {
                                    file: e.file,
                                    metadata: e.metadata,
                                    onRemoveFile: eO
                                }, t + e.file.name)), eS.map(e => (0, a.jsx)(eN, {
                                    asset: e,
                                    onRemoveAsset: eY
                                }, e.assetId))]
                            }) : null, (0, a.jsxs)("div", {
                                className: "relative",
                                children: [(0, a.jsx)(ef, {
                                    className: (0, i.cn)("absolute py-2 px-3 text-secondary pointer-events-none", (null === (s = A.current) || void 0 === s ? void 0 : s.value) || !eW ? "hidden" : ""),
                                    text: eW || ""
                                }, eW || ""), (0, a.jsx)(er.Z, {
                                    ref: A,
                                    className: (0, i.cn)("w-full py-2 px-3", "bg-transparent", "focus:outline-none", "text-primary", "align-bottom"),
                                    style: {
                                        resize: "none"
                                    },
                                    onKeyDown: eP,
                                    onChange: eT,
                                    defaultValue: b,
                                    maxRows: 4,
                                    autoFocus: !0,
                                    minRows: N ? 2 : 1
                                })]
                            }), (0, a.jsx)("div", {
                                className: (0, i.cn)("flex flex-row items-center gap-1 min-h-8 mt-3"),
                                children: (0, a.jsxs)(G.M, {
                                    children: [z.SHOW_FILE_UPLOAD ? (0, a.jsx)(ej, {
                                        children: (0, a.jsxs)(g.z, {
                                            className: (0, i.cn)("attach" === eU && "bg-button-text-hover text-secondary", "text-primary duration-100 group font-[550]"),
                                            variant: "ghost",
                                            size: "pill",
                                            disabled: !S,
                                            onClick: e => {
                                                e.stopPropagation(), eQ()
                                            },
                                            children: [(0, a.jsx)(U.Z, {
                                                className: "size-6 sm:size-5"
                                            }), (0, a.jsx)("span", {
                                                className: "hidden sm:inline-block",
                                                children: "Attach"
                                            })]
                                        })
                                    }, "attach") : null, (0, a.jsx)(ej, {
                                        children: (0, a.jsx)(eI, {})
                                    }, "output"), z.SHOW_SYSTEM_PROMPT_EDITOR && (0, a.jsx)(ej, {
                                        children: (0, a.jsxs)(g.z, {
                                            className: (0, i.cn)("text-secondary font-[550]", "model" === eU && "text-secondary"),
                                            variant: "ghost",
                                            size: "pill",
                                            onClick: e => {
                                                e.stopPropagation(), e$()
                                            },
                                            children: [(0, a.jsx)(K.Z, {
                                                className: "size-6 sm:size-5"
                                            }), (0, a.jsx)("span", {
                                                className: "hidden sm:inline-block",
                                                children: (0, E.$1)(eR)
                                            })]
                                        })
                                    }, "model"), (0, a.jsx)(ej, {
                                        children: (0, a.jsxs)(g.z, {
                                            className: (0, i.cn)("text-secondary font-[550]", "mode" === eU && "bg-button-text-hover text-secondary"),
                                            variant: "ghost",
                                            size: "pill",
                                            onClick: e => {
                                                e.stopPropagation(), eV()
                                            },
                                            children: [(0, a.jsx)(X.Z, {
                                                className: "size-6 sm:size-5"
                                            }), (0, a.jsx)("span", {
                                                className: "hidden sm:inline-block",
                                                children: "Concise"
                                            })]
                                        })
                                    }, "mode")]
                                })
                            }), (0, a.jsxs)("div", {
                                className: (0, i.cn)("absolute bottom-2 right-2 flex flex-row justify-center items-center"),
                                children: [!eC && (0, a.jsx)(es.E.button, {
                                    whileHover: eJ ? void 0 : {
                                        scale: 1.1
                                    },
                                    whileTap: eJ ? void 0 : {
                                        scale: .95
                                    },
                                    className: (0, i.cn)("group flex flex-col justify-center p-1.5 rounded-full focus:outline-none focus:ring-1 focus:ring-ring"),
                                    type: "submit",
                                    disabled: eJ,
                                    onClick: eA,
                                    children: (0, a.jsx)("div", {
                                        className: (0, i.cn)("h-9", "aspect-square flex flex-col items-center justify-center", "rounded-full ring-2 ring-inset duration-100", eJ ? "bg-transparent text-secondary ring-button-outline-border" : "".concat(k ? "bg-incognito" : "bg-primary", " text-background ring-button-outline-border")),
                                        children: (0, a.jsx)(Q.Z, {
                                            size: 22,
                                            strokeWidth: 2.5
                                        })
                                    })
                                }), eC && (0, a.jsx)(es.E.button, {
                                    whileHover: eJ ? void 0 : {
                                        scale: 1.1
                                    },
                                    whileTap: eJ ? void 0 : {
                                        scale: .95
                                    },
                                    initial: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    className: (0, i.cn)("group flex flex-col justify-center p-1.5 rounded-full focus:outline-none focus:ring-1 focus:ring-ring"),
                                    type: "submit",
                                    onClick: p,
                                    children: (0, a.jsx)("div", {
                                        className: (0, i.cn)("h-9", "aspect-square flex flex-col items-center justify-center rounded-full", "rounded-full ring-2 ring-inset", "bg-primary text-background ring-button-outline-border"),
                                        children: (0, a.jsx)($.Z, {
                                            size: 20,
                                            strokeWidth: 2.5
                                        })
                                    })
                                })]
                            }), N && k && (0, a.jsxs)(es.E.div, {
                                initial: {
                                    translateY: -20,
                                    opacity: 0
                                },
                                animate: {
                                    translateY: 0,
                                    opacity: 1
                                },
                                className: "absolute left-0 translate-y-full mt-6 flex flex-row gap-1 items-start text-sm text-incognito rounded-full mx-2",
                                children: [(0, a.jsx)(en.KOc, {
                                    size: 16,
                                    className: "m-1 opacity-70 shrink-0"
                                }), (0, a.jsx)("span", {
                                    children: "This chat is temporary and won't appear in your history or be used to train models. We may securely retain it for up to 30 days for safety purposes."
                                })]
                            })]
                        })]
                    })
                })
            }), ey = {
                auto: "Smart",
                image: "Draw",
                search: "Search",
                disableSearch: "Model Only"
            };

            function eb(e) {
                let {
                    mode: t,
                    className: s,
                    highlighted: n,
                    ...r
                } = e;
                switch (t) {
                    case "auto":
                        return (0, a.jsx)(V.Z, {
                            strokeWidth: 2,
                            className: (0, i.cn)("group-hover/output-mode:text-primary", n ? "text-primary" : "text-secondary", s),
                            ...r
                        });
                    case "image":
                        return (0, a.jsx)(J.Z, {
                            strokeWidth: 2,
                            className: (0, i.cn)("group-hover/output-mode:text-sunset", n ? "text-sunset" : "text-secondary", s),
                            ...r
                        });
                    case "search":
                        return (0, a.jsx)(ee.Z, {
                            strokeWidth: 2,
                            className: (0, i.cn)("group-hover/output-mode:text-dawn", n ? "text-dawn" : "text-secondary", s),
                            ...r
                        });
                    case "disableSearch":
                        return (0, a.jsx)(K.Z, {
                            strokeWidth: 2,
                            className: (0, i.cn)("group-hover/output-mode:text-breeze", n ? "text-breeze" : "text-secondary", s),
                            ...r
                        })
                }
            }

            function eI() {
                let {
                    client: e
                } = (0, d.useStatsigClient)(), t = (0, C.g)(u.Z("outputMode")), s = (0, C.g)(u.Z("setOutputMode")), n = (0, m.useCallback)(t => {
                    e.logEvent("change_mode", t), s(t)
                }, [e]);
                return (0, a.jsxs)(ep.h_, {
                    children: [(0, a.jsx)(ep.$F, {
                        asChild: !0,
                        children: (0, a.jsxs)(g.z, {
                            className: "".concat("auto" === t ? "text-secondary" : "text-primary", " duration-100 font-[550]"),
                            variant: "ghost",
                            size: "pill",
                            onClick: e => {
                                e.stopPropagation()
                            },
                            children: [(0, a.jsx)(eb, {
                                mode: t,
                                highlighted: !0,
                                className: "size-6 sm:size-5"
                            }), (0, a.jsx)("span", {
                                className: "hidden sm:inline-block text-primary",
                                children: ey[t]
                            }), (0, a.jsx)(I.Z, {
                                strokeWidth: 2,
                                className: "size-5 sm:size-4 text-secondary"
                            })]
                        })
                    }), (0, a.jsxs)(ep.AW, {
                        side: "bottom",
                        align: "start",
                        sideOffset: 6,
                        children: [(0, a.jsxs)(ep.Xi, {
                            className: "group/output-mode cursor-pointer",
                            onClick: () => n("auto"),
                            children: [(0, a.jsx)(eb, {
                                mode: "auto",
                                highlighted: !0,
                                size: 18
                            }), (0, a.jsx)("span", {
                                className: "text-primary",
                                children: ey.auto
                            })]
                        }), (0, a.jsxs)(ep.Xi, {
                            className: "group/output-mode cursor-pointer",
                            onClick: () => n("image"),
                            children: [(0, a.jsx)(eb, {
                                mode: "image",
                                highlighted: !0,
                                size: 18
                            }), (0, a.jsx)("span", {
                                className: "text-primary",
                                children: ey.image
                            })]
                        }), (0, a.jsxs)(ep.Xi, {
                            className: "group/output-mode cursor-pointer",
                            onClick: () => n("search"),
                            children: [(0, a.jsx)(eb, {
                                mode: "search",
                                highlighted: !0,
                                size: 18
                            }), (0, a.jsx)("span", {
                                className: "text-primary",
                                children: ey.search
                            })]
                        }), (0, a.jsxs)(ep.Xi, {
                            className: "group/output-mode cursor-pointer",
                            onClick: () => n("disableSearch"),
                            children: [(0, a.jsx)(eb, {
                                mode: "disableSearch",
                                highlighted: !0,
                                size: 18
                            }), (0, a.jsx)("span", {
                                className: "text-primary",
                                children: ey.disableSearch
                            })]
                        })]
                    })]
                })
            }

            function ej(e) {
                let {
                    children: t
                } = e;
                return (0, a.jsx)(es.E.div, {
                    initial: {
                        translateY: 20,
                        opacity: 0
                    },
                    animate: {
                        translateY: 0,
                        opacity: 1
                    },
                    exit: {
                        translateY: 20,
                        opacity: 0
                    },
                    children: t
                })
            }

            function ew(e) {
                let {
                    asset: t
                } = e, s = (0, m.useMemo)(() => t.name.length < 27 ? t.name : t.name.slice(0, 12) + "..." + t.name.slice(-12), [t.name]);
                return (0, a.jsx)(a.Fragment, {
                    children: s
                })
            }

            function eN(e) {
                let {
                    asset: t,
                    onRemoveAsset: s
                } = e, n = (0, m.useCallback)(() => {
                    s(t)
                }, [t, s]), r = (0, m.useMemo)(() => t.name.length < 27 ? t.name : t.name.slice(0, 12) + "..." + t.name.slice(-12), [t.name]);
                return (0, a.jsxs)(eh.u, {
                    delayDuration: 500,
                    children: [(0, a.jsx)(eh.aJ, {
                        asChild: !0,
                        children: (0, a.jsxs)("div", {
                            className: (0, i.cn)("flex flex-row items-center rounded-xl pl-3 h-8 pr-1.5", "bg-zinc-700 text-sm pointer-events-auto"),
                            children: [r, (0, a.jsx)(g.z, {
                                className: "rounded-full ml-1 p-0.5",
                                variant: "ghost",
                                size: "iconSm",
                                onClick: n,
                                children: (0, a.jsx)(et.Z, {
                                    size: 16
                                })
                            })]
                        })
                    }), (0, a.jsx)(eh._v, {
                        children: t.name
                    })]
                })
            }
            var ek = s(49149);

            function eS(e) {
                let {
                    onSubmit: t
                } = e, {
                    client: s
                } = (0, d.useStatsigClient)(), n = (0, C.g)(u.Z("conversationId")), r = (0, C.g)(u.Z("setLastMessageId")), i = (0, C.g)(u.Z("streamedMessageId")), l = (0, C.g)(u.Z("setStreamedMessageId")), p = (0, C.g)(u.Z("setOptimisticMessageId")), h = (0, C.g)(u.Z("setIsRateLimited")), f = (0, C.g)(u.Z("activeModelId")), g = (0, v.F)(u.Z("isIncognito")), x = (0, ek.X)(), y = (0, c.C)(u.Z("streamResponse")), b = (0, c.C)(u.Z("abortStream")), I = (0, o.t)(u.Z("streamStateById")), j = (0, m.useMemo)(() => {
                    if (n) return I[n]
                }, [I, n]), w = (0, m.useCallback)(async () => {
                    if (n && i) {
                        let e = await b(n, i);
                        e && r(e)
                    }
                }, [b, n, i]), N = (0, m.useCallback)(async (e, a, n) => {
                    if (!e || !e.trim() || !f) return !1;
                    let {
                        outputMode: i,
                        lastMessageId: o,
                        conversationId: c
                    } = C.g.getState();
                    return c ? (await x(), s.logEvent("send_query", e, {
                        parentResponseId: o || "",
                        conversationId: c,
                        selectedModel: f,
                        fileAttachments: String((null == n ? void 0 : n.length) || 0),
                        location: "chat-input",
                        outputMode: i
                    }), new Promise((s, d) => {
                        y({
                            message: (0, C.S)(e, i),
                            parentResponseId: o,
                            conversationId: c,
                            modelName: f,
                            fileAttachmentIds: n,
                            systemPromptId: null == a ? void 0 : a.systemPromptId,
                            disableSearch: "disableSearch" === i || "image" === i,
                            enableImageGeneration: "auto" === i || "image" === i || "disableSearch" === i,
                            onOptimisticResponse: e => {
                                t && t(), p(e.responseId), s(!0)
                            },
                            onUserResponse: e => {
                                C.g.getState().lastMessageId === e.parentResponseId && r(e.responseId)
                            },
                            onClose: e => {
                                if (!e) {
                                    l(void 0);
                                    return
                                }
                                C.g.getState().lastMessageId === e.parentResponseId && r(e.responseId)
                            },
                            onWke: e => {
                                "RateLimitError" === e.name && h(!0)
                            }
                        }).then(e => {
                            l(e)
                        }).catch(e => {
                            l(void 0), d(e)
                        })
                    })) : (R.Am.error("No conversation id found"), !1)
                }, [y, s]);
                return (0, a.jsx)("div", {
                    className: "w-full flex flex-col items-center p-2 sm:px-4 sm:pb-4 md:pb-6 pt-1",
                    children: (0, a.jsx)(ev, {
                        placeholder: "How can Grok help?",
                        onQuery: N,
                        streamState: j,
                        onAbort: w,
                        conversationId: n,
                        canGlow: !1,
                        isIncognito: g
                    }, "query-bar")
                })
            }
            var eR = s(15560);

            function eC(e) {
                var t, s, n, i, l;
                let {
                    conversationId: d,
                    conversationIsLoading: p,
                    conversation: E
                } = e, [Z, {
                    height: _
                }] = (0, S.Z)(), M = (0, C.g)(u.Z("lastMessageId")), z = (0, C.g)(u.Z("setLastMessageId")), A = (0, c.C)(u.Z("fetchListResponses")), P = (0, C.g)(u.Z("isRateLimited")), T = (0, v.F)(u.Z("isIncognito")), L = (0, o.t)(u.Z("streamStateById"))[d], B = (0, C.g)(u.Z("streamedMessageId")), O = (0, C.g)(u.Z("setStreamedMessageId")), Y = (0, c.C)(u.Z("streamedResponseById")), D = (0, m.useMemo)(() => {
                    if (!B) return;
                    let e = Y[B];
                    if ((null == e ? void 0 : e.conversationId) === d) return e
                }, [B, Y, d]), q = (0, C.g)(u.Z("optimisticMessageId")), W = (0, C.g)(u.Z("setOptimisticMessageId")), F = (0, c.C)(u.Z("optimisticByConversationId")), G = q ? F[d] : void 0, {
                    data: H,
                    isLoading: U
                } = x(A(d)), K = (0, m.useMemo)(() => H ? N.Z(u.Z("responseId"), H) : {}, [H]), X = (0, m.useMemo)(() => H ? k.Z(e => e.parentResponseId || "", H) : {}, [H]), [Q, $] = (0, m.useState)([]);
                (0, m.useEffect)(() => {
                    if (!H || !M) {
                        $([]);
                        return
                    }
                    let e = H.find(e => e.responseId === M);
                    if (!e) return;
                    let t = K[M];
                    if (!t) return;
                    let s = function e(t) {
                        var s, a;
                        let n = X[null !== (s = t.parentResponseId) && void 0 !== s ? s : ""];
                        if (!n) return [
                            [t]
                        ];
                        let r = K[null !== (a = t.parentResponseId) && void 0 !== a ? a : ""];
                        return r ? [...e(r), n] : [n]
                    }(e);
                    $((function e(t, s) {
                        if (!t.parentResponseId) return [t.responseId];
                        let a = s[t.parentResponseId];
                        if (!a) throw Error("Parent response ".concat(t.parentResponseId, " not found"));
                        return [...e(a, s), t.responseId]
                    })(t, K).map((e, t) => (e === (null == D ? void 0 : D.responseId) && O(void 0), e === (null == G ? void 0 : G.responseId) && W(void 0), {
                        selectedResponseId: e,
                        siblings: s[t]
                    })))
                }, [M, H, K, X]);
                let V = (0, m.useCallback)(e => {
                        e && z(function e(t, s) {
                            let a = t[s];
                            if (!a) return s;
                            let n = a[a.length - 1];
                            return n ? e(t, n.responseId) : s
                        }(X, e))
                    }, [z, X]),
                    [J, ee] = (0, m.useState)(!1),
                    et = (0, m.useCallback)(e => {
                        ee(!e)
                    }, []),
                    es = (0, m.useRef)(null),
                    ea = (0, m.useCallback)(() => {
                        var e;
                        null === (e = es.current) || void 0 === e || e.scrollToBottom()
                    }, []),
                    en = (0, c.C)(u.Z("streamResponse")),
                    er = (0, C.g)(u.Z("activeModelId")),
                    ei = (0, C.g)(u.Z("selectedSystemPromptId")),
                    eo = (0, C.g)(u.Z("setIsRateLimited")),
                    el = (0, C.g)(u.Z("outputMode")),
                    ec = (0, m.useMemo)(() => {
                        let e = r().last(Q);
                        if (e) return e.siblings.find(t => t.responseId === e.selectedResponseId)
                    }, [Q]),
                    ed = (0, m.useMemo)(() => (null == ec ? void 0 : ec.sender) === "human", [ec]),
                    eu = (0, m.useCallback)(() => {
                        if (ec && (z(ec.responseId), ed && en({
                                message: "",
                                parentResponseId: ec.responseId,
                                conversationId: ec.conversationId,
                                modelName: er,
                                systemPromptId: ei,
                                disableSearch: "disableSearch" === el || "image" === el,
                                enableImageGeneration: "auto" === el || "image" === el || "disableSearch" === el,
                                onOptimisticResponse: () => W(void 0),
                                onUserResponse: () => {},
                                onClose: e => {
                                    if (!e) {
                                        O(void 0);
                                        return
                                    }
                                    C.g.getState().get().lastMessageId === e.parentResponseId && z(e.responseId)
                                },
                                onWke: e => {
                                    if ("RateLimitError" === e.name) {
                                        eo(!0);
                                        return
                                    }
                                }
                            }).catch(() => void 0).then(e => {
                                O(e), e || R.Am.error("Failed to stream response")
                            }), !ed)) {
                            if (!G) throw Error("Hmm");
                            en({
                                message: G.message,
                                parentResponseId: G.parentResponseId,
                                conversationId: G.conversationId,
                                modelName: er,
                                systemPromptId: ei,
                                disableSearch: "disableSearch" === el || "image" === el,
                                enableImageGeneration: "auto" === el || "image" === el || "disableSearch" === el,
                                onOptimisticResponse: e => W(e.responseId),
                                onUserResponse: e => {
                                    C.g.getState().get().lastMessageId === e.parentResponseId && z(e.responseId)
                                },
                                onClose: e => {
                                    if (!e) {
                                        O(void 0);
                                        return
                                    }
                                    C.g.getState().get().lastMessageId === e.parentResponseId && z(e.responseId)
                                },
                                onWke: e => {
                                    "RateLimitError" === e.name && eo(!0)
                                }
                            }).catch(() => void 0).then(e => {
                                O(e), e || R.Am.error("Failed to stream response")
                            })
                        }
                    }, [H, d, er, ei, el, ec, G]),
                    em = (0, m.useMemo)(() => ed && !U && (!B || r().isEmpty(Y)) && "streaming" !== L && "pending" !== L && "error" !== L, [ed, U, B, L]),
                    [ep, eh] = (0, m.useState)(!E);
                if ((0, m.useEffect)(() => {
                        var e;
                        if (!E) {
                            eh(!0);
                            return
                        }
                        let t = new w.y("/chat/:chatId").test(null === (e = window) || void 0 === e ? void 0 : e.location.pathname);
                        eh(E.temporary && (null == t ? void 0 : t.chatId) === E.conversationId)
                    }, [E, null === (t = window) || void 0 === t ? void 0 : t.location.pathname]), p) return null;
                if (ep) return (0, a.jsx)("div", {
                    className: "flex flex-col items-center justify-center min-h-screen",
                    children: (0, a.jsx)(h.default, {
                        title: "404: Not Found",
                        description: "We couldn't find a conversation with ID ".concat(d, "."),
                        cta: "Return to home"
                    })
                });
                let ef = ((null === (n = es.current) || void 0 === n ? void 0 : null === (s = n.el) || void 0 === s ? void 0 : s.scrollHeight) || 0) > ((null === (l = es.current) || void 0 === l ? void 0 : null === (i = l.el) || void 0 === i ? void 0 : i.clientHeight) || 0);
                return (0, a.jsxs)("div", {
                    className: "flex flex-col h-full relative items-center",
                    children: [(0, a.jsxs)(f.l, {
                        ref: es,
                        className: "flex flex-col items-center px-5 bgGradientMaskBottom",
                        onFollowChange: et,
                        children: [!U && H && !H.length && (0, a.jsx)("div", {
                            className: "h-full flex flex-col items-center justify-center",
                            children: (0, a.jsx)(h.default, {
                                title: "No Responses",
                                description: "Well this is awkward. Send a message or start a new chat to see something different.",
                                cta: "Start a new chat"
                            })
                        }), (0, a.jsxs)("div", {
                            className: (0, y.cx)("relative w-full flex flex-col items-center pt-16 pb-4 animate-in", U ? "fade-out-0" : "fade-in-0"),
                            children: [!U && Q.map(e => {
                                let {
                                    selectedResponseId: t,
                                    siblings: s
                                } = e;
                                return (0, a.jsx)(eR.E3, {
                                    responseFamily: s,
                                    selectedId: t,
                                    onPivotResponse: V,
                                    isIncognito: T
                                }, t)
                            }), G && (0, a.jsx)(eR.up, {
                                optimisticResponse: G,
                                isIncognito: T
                            }), D && (0, a.jsx)(eR.rX, {
                                streamingResponse: D
                            }), em && (0, a.jsx)(eR.iQ, {
                                text: "Grok was unable to reply to your last message. Please try regenerating a response.",
                                onRegenerate: !P && eu
                            }), "error" === L && (0, a.jsx)(eR.iQ, {
                                text: "Something went wrong and Grok was unable to process your request. Please check your connection and try again. If the issue persists, contact our team.",
                                onRegenerate: !P && eu
                            })]
                        }), (0, a.jsx)("div", {
                            style: {
                                paddingBottom: _ + 16,
                                width: "100%"
                            }
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "absolute w-full bottom-0",
                        ref: Z,
                        children: [ef && J && (0, a.jsx)(b.E.div, {
                            initial: {
                                opacity: 0,
                                y: 0,
                                x: "50%"
                            },
                            animate: {
                                opacity: 1,
                                y: -40,
                                x: "50%"
                            },
                            exit: {
                                opacity: 0,
                                y: 0,
                                x: "50%"
                            },
                            transition: {
                                type: "string",
                                duration: .1
                            },
                            className: "absolute -top-1 right-1/2",
                            children: (0, a.jsx)(g.z, {
                                onClick: ea,
                                variant: "outline",
                                size: "icon",
                                className: "bg-input",
                                children: (0, a.jsx)(I.Z, {
                                    size: 22
                                })
                            })
                        }), P && (0, a.jsx)("div", {
                            className: "w-full flex flex-col items-center px-4 pb-4 md:pb-6 pt-1",
                            children: (0, a.jsxs)("div", {
                                className: (0, y.cx)("flex flex-col items-center rounded-3xl p-4 gap-1", "max-w-prose w-full", "bg-card backdrop-blur-lg", "ring-2 ring-input-border ring-inset"),
                                children: [(0, a.jsx)(j.Z, {
                                    size: 32
                                }), (0, a.jsx)("div", {
                                    className: "text-lg font-semibold mb-3",
                                    children: "Message Limit Reached "
                                }), (0, a.jsx)("div", {
                                    children: "You've exceeded your messaging allowance for the moment."
                                }), (0, a.jsxs)("div", {
                                    children: ["Upgrade to", (0, a.jsx)(g.z, {
                                        className: "p-1 font-semibold text-md",
                                        variant: "link",
                                        onClick: () => window.location.href = "https://verified.x.com/en",
                                        children: "X Premium"
                                    }), "to continue the conversation, or try again later."]
                                })]
                            })
                        }), !em && !P && (0, a.jsx)(eS, {
                            onSubmit: ea
                        })]
                    })]
                })
            }
            var eE = s(71896),
                eZ = s(9843),
                e_ = s(68239);

            function eM() {
                var e;
                let t = (0, e_.useRouter)(),
                    s = (0, m.useRef)(""),
                    {
                        client: n
                    } = (0, d.useStatsigClient)(),
                    {
                        routeToConversation: r
                    } = (0, eZ.t)(),
                    i = (0, c.C)(u.Z("establishNewConversation")),
                    o = (0, v.F)(u.Z("isIncognito")),
                    l = (0, C.g)(u.Z("activeModelId")),
                    p = (0, C.g)(u.Z("setConversationId")),
                    h = (0, C.g)(u.Z("setActiveAsset")),
                    f = (0, C.g)(u.Z("outputMode")),
                    g = (0, ek.X)(),
                    x = (0, eE.useSession)().user,
                    y = (0, m.useRef)(null);
                (0, _.y)("cmd+j, ctrl+j", () => {
                    var e, t;
                    return null === (t = y.current) || void 0 === t ? void 0 : null === (e = t.getTextArea()) || void 0 === e ? void 0 : e.focus()
                }, []), (0, m.useEffect)(() => {
                    let e = new URLSearchParams(location.search).get("q");
                    e && !s.current && (j(e), s.current = "auto-start")
                }, []);
                let I = (0, m.useRef)(null);
                e = ez, (0, m.useEffect)(() => {
                    let t = I.current;
                    t && (t.innerText = e());
                    let s = setInterval(() => {
                        let t = I.current;
                        t && (t.innerText = e())
                    }, 6e4);
                    return () => clearInterval(s)
                }, []);
                let j = (0, m.useCallback)(async (e, s, a) => {
                    if (!e) return !1;
                    n.logEvent("send_query", e, {
                        selectedModel: l,
                        fileAttachments: String((null == a ? void 0 : a.length) || 0),
                        location: "chat-new",
                        outputMode: f
                    }), await g();
                    let c = await i({
                        message: e,
                        systemPromptId: null == s ? void 0 : s.systemPromptId,
                        fileAttachmentIds: a,
                        temporary: o
                    }).then(e => (e.temporary || r(e.conversationId), e)).catch(() => {
                        R.Am.error("Failed to create conversation")
                    });
                    return (null == c ? void 0 : c.temporary) && (t.replace("/"), p(null == c ? void 0 : c.conversationId), h()), !!c
                }, [r, i, n, o, f]);
                return (0, a.jsxs)("div", {
                    className: "flex flex-col gap-9 h-full w-full items-center py-16 justify-center lg:w-4/5 mx-auto p-4",
                    children: [(0, a.jsxs)(b.E.div, {
                        initial: {
                            translateY: -30,
                            opacity: 0
                        },
                        animate: {
                            translateY: 0,
                            opacity: 1
                        },
                        className: "flex flex-col items-start gap-1 w-full px-4 lg:w-4/5 max-w-[50rem]",
                        children: [(0, a.jsx)("h1", {
                            className: "text-primary text-3xl tracking-tight",
                            children: (null == x ? void 0 : x.givenName) ? (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("span", {
                                    ref: I,
                                    children: "Hello"
                                }), ", ", x.givenName, "."]
                            }) : (0, a.jsx)(a.Fragment, {
                                children: "Welcome to Grok."
                            })
                        }), (0, a.jsx)("h1", {
                            className: "text-secondary text-3xl tracking-tight",
                            children: "How can I help you today?"
                        })]
                    }), (0, a.jsxs)(b.E.div, {
                        initial: {
                            translateY: 30,
                            opacity: 0
                        },
                        animate: {
                            translateY: 0,
                            opacity: 1
                        },
                        className: "w-full flex flex-col gap-2 items-center",
                        children: [(0, a.jsx)(ev, {
                            className: "mt-2",
                            placeholder: ["What do you want to know?", "Understand the universe.", "Show me top trends."],
                            onQuery: j,
                            onFrontPage: !0,
                            ref: y,
                            isIncognito: o
                        }, "query-bar"), x ? null : (0, a.jsxs)("div", {
                            className: "text-secondary",
                            children: ["By messaging Grok, you agree to our", " ", (0, a.jsx)("a", {
                                className: "text-primary",
                                href: "https://x.ai/legal/terms-of-service",
                                target: "_blank",
                                children: "Terms"
                            }), " ", "and", " ", (0, a.jsx)("a", {
                                className: "text-primary",
                                href: "https://x.ai/legal/privacy-policy",
                                target: "_blank",
                                children: "Privacy Policy"
                            }), "."]
                        })]
                    })]
                })
            }

            function ez() {
                let e = new Date().getHours();
                return e >= 5 && e < 12 ? "Good Morning" : e >= 12 && e < 17 ? "Good Afternoon" : e >= 17 || e < 3 ? "Good Evening" : "Hello"
            }
            var eA = s(59520);
            let eP = [];

            function eT() {
                let {
                    client: e
                } = (0, d.useStatsigClient)(), t = (0, C.g)(u.Z("conversationId")), s = t || "no_conversation_id", n = (0, C.g)(u.Z("setLastMessageId")), h = (0, c.C)(u.Z("fetchListResponses")), f = (0, o.t)(u.Z("fetchGetConversation")), g = (0, l.O)(u.Z("attachListByConversationId")), x = (0, o.t)(e => e.get().byId[s]), [v, y] = (0, m.useState)(!0);
                (0, m.useEffect)(() => {
                    t && f(t).finally(() => y(!1))
                }, [x]), (0, m.useEffect)(() => {
                    t ? y(!0) : y(!1)
                }, [t]), (0, m.useEffect)(() => {
                    t && h(t).then(e => {
                        let t = function(e) {
                            let t = new Set(e.map(e => e.parentResponseId)),
                                s = e.filter(e => !t.has(e.responseId));
                            if (0 !== s.length) return r().maxBy(s, e => {
                                var t, s;
                                return e.createTime ? null !== (s = null === (t = e.createTime) || void 0 === t ? void 0 : t.seconds) && void 0 !== s ? s : "" : void 0
                            })
                        }(e);
                        n(null == t ? void 0 : t.responseId)
                    })
                }, [t]);
                let b = (0, l.O)(u.Z("lisertAttachByConversationId")),
                    I = g[s] || eP,
                    [{
                        isOver: j
                    }, w] = (0, p.L)(() => ({
                        accept: "asset",
                        drop: t => {
                            e.logEvent("attach_asset", t.name, {
                                mimeType: t.mimeType,
                                location: "chat-page"
                            }), b(t, s)
                        },
                        collect: e => ({
                            isOver: !!e.isOver()
                        }),
                        canDrop: e => !I.find(t => t.assetId === e.assetId)
                    }), [b, s, I, e]);
                return (0, a.jsxs)("main", {
                    className: (0, i.cn)("h-screen w-full relative selection:bg-highlight"),
                    ref: w,
                    children: [(0, a.jsx)(eA.r, {
                        conversationIsLoading: v,
                        conversation: x
                    }), t ? (0, a.jsx)(eC, {
                        conversationId: t,
                        conversationIsLoading: v,
                        conversation: x || void 0
                    }) : (0, a.jsx)(eM, {})]
                }, "chat-page")
            }
        }
    }
]);