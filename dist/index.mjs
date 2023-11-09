function Ga(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(e, i, a.get ? a : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function zi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nn = { exports: {} }, Qr = {}, Ct = { exports: {} }, se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function Ha() {
  if (jo)
    return se;
  jo = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.iterator;
  function b(u) {
    return u === null || typeof u != "object" ? null : (u = v && u[v] || u["@@iterator"], typeof u == "function" ? u : null);
  }
  var T = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, x = Object.assign, y = {};
  function E(u, g, k) {
    this.props = u, this.context = g, this.refs = y, this.updater = k || T;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(u, g) {
    if (typeof u != "object" && typeof u != "function" && u != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, u, g, "setState");
  }, E.prototype.forceUpdate = function(u) {
    this.updater.enqueueForceUpdate(this, u, "forceUpdate");
  };
  function $() {
  }
  $.prototype = E.prototype;
  function M(u, g, k) {
    this.props = u, this.context = g, this.refs = y, this.updater = k || T;
  }
  var N = M.prototype = new $();
  N.constructor = M, x(N, E.prototype), N.isPureReactComponent = !0;
  var w = Array.isArray, d = Object.prototype.hasOwnProperty, U = { current: null }, B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(u, g, k) {
    var I, P = {}, Y = null, F = null;
    if (g != null)
      for (I in g.ref !== void 0 && (F = g.ref), g.key !== void 0 && (Y = "" + g.key), g)
        d.call(g, I) && !B.hasOwnProperty(I) && (P[I] = g[I]);
    var V = arguments.length - 2;
    if (V === 1)
      P.children = k;
    else if (1 < V) {
      for (var L = Array(V), K = 0; K < V; K++)
        L[K] = arguments[K + 2];
      P.children = L;
    }
    if (u && u.defaultProps)
      for (I in V = u.defaultProps, V)
        P[I] === void 0 && (P[I] = V[I]);
    return { $$typeof: e, type: u, key: Y, ref: F, props: P, _owner: U.current };
  }
  function pe(u, g) {
    return { $$typeof: e, type: u.type, key: g, ref: u.ref, props: u.props, _owner: u._owner };
  }
  function W(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }
  function ae(u) {
    var g = { "=": "=0", ":": "=2" };
    return "$" + u.replace(/[=:]/g, function(k) {
      return g[k];
    });
  }
  var ue = /\/+/g;
  function te(u, g) {
    return typeof u == "object" && u !== null && u.key != null ? ae("" + u.key) : g.toString(36);
  }
  function re(u, g, k, I, P) {
    var Y = typeof u;
    (Y === "undefined" || Y === "boolean") && (u = null);
    var F = !1;
    if (u === null)
      F = !0;
    else
      switch (Y) {
        case "string":
        case "number":
          F = !0;
          break;
        case "object":
          switch (u.$$typeof) {
            case e:
            case r:
              F = !0;
          }
      }
    if (F)
      return F = u, P = P(F), u = I === "" ? "." + te(F, 0) : I, w(P) ? (k = "", u != null && (k = u.replace(ue, "$&/") + "/"), re(P, g, k, "", function(K) {
        return K;
      })) : P != null && (W(P) && (P = pe(P, k + (!P.key || F && F.key === P.key ? "" : ("" + P.key).replace(ue, "$&/") + "/") + u)), g.push(P)), 1;
    if (F = 0, I = I === "" ? "." : I + ":", w(u))
      for (var V = 0; V < u.length; V++) {
        Y = u[V];
        var L = I + te(Y, V);
        F += re(Y, g, k, L, P);
      }
    else if (L = b(u), typeof L == "function")
      for (u = L.call(u), V = 0; !(Y = u.next()).done; )
        Y = Y.value, L = I + te(Y, V++), F += re(Y, g, k, L, P);
    else if (Y === "object")
      throw g = String(u), Error("Objects are not valid as a React child (found: " + (g === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : g) + "). If you meant to render a collection of children, use an array instead.");
    return F;
  }
  function ne(u, g, k) {
    if (u == null)
      return u;
    var I = [], P = 0;
    return re(u, I, "", "", function(Y) {
      return g.call(k, Y, P++);
    }), I;
  }
  function oe(u) {
    if (u._status === -1) {
      var g = u._result;
      g = g(), g.then(function(k) {
        (u._status === 0 || u._status === -1) && (u._status = 1, u._result = k);
      }, function(k) {
        (u._status === 0 || u._status === -1) && (u._status = 2, u._result = k);
      }), u._status === -1 && (u._status = 0, u._result = g);
    }
    if (u._status === 1)
      return u._result.default;
    throw u._result;
  }
  var z = { current: null }, fe = { transition: null }, Fe = { ReactCurrentDispatcher: z, ReactCurrentBatchConfig: fe, ReactCurrentOwner: U };
  return se.Children = { map: ne, forEach: function(u, g, k) {
    ne(u, function() {
      g.apply(this, arguments);
    }, k);
  }, count: function(u) {
    var g = 0;
    return ne(u, function() {
      g++;
    }), g;
  }, toArray: function(u) {
    return ne(u, function(g) {
      return g;
    }) || [];
  }, only: function(u) {
    if (!W(u))
      throw Error("React.Children.only expected to receive a single React element child.");
    return u;
  } }, se.Component = E, se.Fragment = t, se.Profiler = i, se.PureComponent = M, se.StrictMode = n, se.Suspense = p, se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fe, se.cloneElement = function(u, g, k) {
    if (u == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + u + ".");
    var I = x({}, u.props), P = u.key, Y = u.ref, F = u._owner;
    if (g != null) {
      if (g.ref !== void 0 && (Y = g.ref, F = U.current), g.key !== void 0 && (P = "" + g.key), u.type && u.type.defaultProps)
        var V = u.type.defaultProps;
      for (L in g)
        d.call(g, L) && !B.hasOwnProperty(L) && (I[L] = g[L] === void 0 && V !== void 0 ? V[L] : g[L]);
    }
    var L = arguments.length - 2;
    if (L === 1)
      I.children = k;
    else if (1 < L) {
      V = Array(L);
      for (var K = 0; K < L; K++)
        V[K] = arguments[K + 2];
      I.children = V;
    }
    return { $$typeof: e, type: u.type, key: P, ref: Y, props: I, _owner: F };
  }, se.createContext = function(u) {
    return u = { $$typeof: s, _currentValue: u, _currentValue2: u, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, u.Provider = { $$typeof: a, _context: u }, u.Consumer = u;
  }, se.createElement = me, se.createFactory = function(u) {
    var g = me.bind(null, u);
    return g.type = u, g;
  }, se.createRef = function() {
    return { current: null };
  }, se.forwardRef = function(u) {
    return { $$typeof: f, render: u };
  }, se.isValidElement = W, se.lazy = function(u) {
    return { $$typeof: h, _payload: { _status: -1, _result: u }, _init: oe };
  }, se.memo = function(u, g) {
    return { $$typeof: m, type: u, compare: g === void 0 ? null : g };
  }, se.startTransition = function(u) {
    var g = fe.transition;
    fe.transition = {};
    try {
      u();
    } finally {
      fe.transition = g;
    }
  }, se.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, se.useCallback = function(u, g) {
    return z.current.useCallback(u, g);
  }, se.useContext = function(u) {
    return z.current.useContext(u);
  }, se.useDebugValue = function() {
  }, se.useDeferredValue = function(u) {
    return z.current.useDeferredValue(u);
  }, se.useEffect = function(u, g) {
    return z.current.useEffect(u, g);
  }, se.useId = function() {
    return z.current.useId();
  }, se.useImperativeHandle = function(u, g, k) {
    return z.current.useImperativeHandle(u, g, k);
  }, se.useInsertionEffect = function(u, g) {
    return z.current.useInsertionEffect(u, g);
  }, se.useLayoutEffect = function(u, g) {
    return z.current.useLayoutEffect(u, g);
  }, se.useMemo = function(u, g) {
    return z.current.useMemo(u, g);
  }, se.useReducer = function(u, g, k) {
    return z.current.useReducer(u, g, k);
  }, se.useRef = function(u) {
    return z.current.useRef(u);
  }, se.useState = function(u) {
    return z.current.useState(u);
  }, se.useSyncExternalStore = function(u, g, k) {
    return z.current.useSyncExternalStore(u, g, k);
  }, se.useTransition = function() {
    return z.current.useTransition();
  }, se.version = "18.2.0", se;
}
var nt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
nt.exports;
var Mo;
function Xa() {
  return Mo || (Mo = 1, function(e, r) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = "18.2.0", n = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), E = Symbol.iterator, $ = "@@iterator";
      function M(o) {
        if (o === null || typeof o != "object")
          return null;
        var c = E && o[E] || o[$];
        return typeof c == "function" ? c : null;
      }
      var N = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, w = {
        transition: null
      }, d = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, U = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, B = {}, me = null;
      function pe(o) {
        me = o;
      }
      B.setExtraStackFrame = function(o) {
        me = o;
      }, B.getCurrentStack = null, B.getStackAddendum = function() {
        var o = "";
        me && (o += me);
        var c = B.getCurrentStack;
        return c && (o += c() || ""), o;
      };
      var W = !1, ae = !1, ue = !1, te = !1, re = !1, ne = {
        ReactCurrentDispatcher: N,
        ReactCurrentBatchConfig: w,
        ReactCurrentOwner: U
      };
      ne.ReactDebugCurrentFrame = B, ne.ReactCurrentActQueue = d;
      function oe(o) {
        {
          for (var c = arguments.length, _ = new Array(c > 1 ? c - 1 : 0), S = 1; S < c; S++)
            _[S - 1] = arguments[S];
          fe("warn", o, _);
        }
      }
      function z(o) {
        {
          for (var c = arguments.length, _ = new Array(c > 1 ? c - 1 : 0), S = 1; S < c; S++)
            _[S - 1] = arguments[S];
          fe("error", o, _);
        }
      }
      function fe(o, c, _) {
        {
          var S = ne.ReactDebugCurrentFrame, A = S.getStackAddendum();
          A !== "" && (c += "%s", _ = _.concat([A]));
          var X = _.map(function(H) {
            return String(H);
          });
          X.unshift("Warning: " + c), Function.prototype.apply.call(console[o], console, X);
        }
      }
      var Fe = {};
      function u(o, c) {
        {
          var _ = o.constructor, S = _ && (_.displayName || _.name) || "ReactClass", A = S + "." + c;
          if (Fe[A])
            return;
          z("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", c, S), Fe[A] = !0;
        }
      }
      var g = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(o) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(o, c, _) {
          u(o, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(o, c, _, S) {
          u(o, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(o, c, _, S) {
          u(o, "setState");
        }
      }, k = Object.assign, I = {};
      Object.freeze(I);
      function P(o, c, _) {
        this.props = o, this.context = c, this.refs = I, this.updater = _ || g;
      }
      P.prototype.isReactComponent = {}, P.prototype.setState = function(o, c) {
        if (typeof o != "object" && typeof o != "function" && o != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, o, c, "setState");
      }, P.prototype.forceUpdate = function(o) {
        this.updater.enqueueForceUpdate(this, o, "forceUpdate");
      };
      {
        var Y = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, F = function(o, c) {
          Object.defineProperty(P.prototype, o, {
            get: function() {
              oe("%s(...) is deprecated in plain JavaScript React classes. %s", c[0], c[1]);
            }
          });
        };
        for (var V in Y)
          Y.hasOwnProperty(V) && F(V, Y[V]);
      }
      function L() {
      }
      L.prototype = P.prototype;
      function K(o, c, _) {
        this.props = o, this.context = c, this.refs = I, this.updater = _ || g;
      }
      var J = K.prototype = new L();
      J.constructor = K, k(J, P.prototype), J.isPureReactComponent = !0;
      function we() {
        var o = {
          current: null
        };
        return Object.seal(o), o;
      }
      var R = Array.isArray;
      function Ce(o) {
        return R(o);
      }
      function q(o) {
        {
          var c = typeof Symbol == "function" && Symbol.toStringTag, _ = c && o[Symbol.toStringTag] || o.constructor.name || "Object";
          return _;
        }
      }
      function Ve(o) {
        try {
          return We(o), !1;
        } catch {
          return !0;
        }
      }
      function We(o) {
        return "" + o;
      }
      function Je(o) {
        if (Ve(o))
          return z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", q(o)), We(o);
      }
      function Pr(o, c, _) {
        var S = o.displayName;
        if (S)
          return S;
        var A = c.displayName || c.name || "";
        return A !== "" ? _ + "(" + A + ")" : _;
      }
      function fr(o) {
        return o.displayName || "Context";
      }
      function qe(o) {
        if (o == null)
          return null;
        if (typeof o.tag == "number" && z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
          return o.displayName || o.name || null;
        if (typeof o == "string")
          return o;
        switch (o) {
          case a:
            return "Fragment";
          case i:
            return "Portal";
          case f:
            return "Profiler";
          case s:
            return "StrictMode";
          case v:
            return "Suspense";
          case b:
            return "SuspenseList";
        }
        if (typeof o == "object")
          switch (o.$$typeof) {
            case m:
              var c = o;
              return fr(c) + ".Consumer";
            case p:
              var _ = o;
              return fr(_._context) + ".Provider";
            case h:
              return Pr(o, o.render, "ForwardRef");
            case T:
              var S = o.displayName || null;
              return S !== null ? S : qe(o.type) || "Memo";
            case x: {
              var A = o, X = A._payload, H = A._init;
              try {
                return qe(H(X));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var tr = Object.prototype.hasOwnProperty, yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, $r, dr, Ze;
      Ze = {};
      function Rr(o) {
        if (tr.call(o, "ref")) {
          var c = Object.getOwnPropertyDescriptor(o, "ref").get;
          if (c && c.isReactWarning)
            return !1;
        }
        return o.ref !== void 0;
      }
      function nr(o) {
        if (tr.call(o, "key")) {
          var c = Object.getOwnPropertyDescriptor(o, "key").get;
          if (c && c.isReactWarning)
            return !1;
        }
        return o.key !== void 0;
      }
      function Hr(o, c) {
        var _ = function() {
          $r || ($r = !0, z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        _.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: _,
          configurable: !0
        });
      }
      function Q(o, c) {
        var _ = function() {
          dr || (dr = !0, z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        _.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: _,
          configurable: !0
        });
      }
      function Sr(o) {
        if (typeof o.ref == "string" && U.current && o.__self && U.current.stateNode !== o.__self) {
          var c = qe(U.current.type);
          Ze[c] || (z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', c, o.ref), Ze[c] = !0);
        }
      }
      var pr = function(o, c, _, S, A, X, H) {
        var ee = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: o,
          key: c,
          ref: _,
          props: H,
          // Record the component responsible for creating this element.
          _owner: X
        };
        return ee._store = {}, Object.defineProperty(ee._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ee, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: S
        }), Object.defineProperty(ee, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: A
        }), Object.freeze && (Object.freeze(ee.props), Object.freeze(ee)), ee;
      };
      function kr(o, c, _) {
        var S, A = {}, X = null, H = null, ee = null, le = null;
        if (c != null) {
          Rr(c) && (H = c.ref, Sr(c)), nr(c) && (Je(c.key), X = "" + c.key), ee = c.__self === void 0 ? null : c.__self, le = c.__source === void 0 ? null : c.__source;
          for (S in c)
            tr.call(c, S) && !yr.hasOwnProperty(S) && (A[S] = c[S]);
        }
        var Te = arguments.length - 2;
        if (Te === 1)
          A.children = _;
        else if (Te > 1) {
          for (var Oe = Array(Te), Pe = 0; Pe < Te; Pe++)
            Oe[Pe] = arguments[Pe + 2];
          Object.freeze && Object.freeze(Oe), A.children = Oe;
        }
        if (o && o.defaultProps) {
          var Ae = o.defaultProps;
          for (S in Ae)
            A[S] === void 0 && (A[S] = Ae[S]);
        }
        if (X || H) {
          var Me = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          X && Hr(A, Me), H && Q(A, Me);
        }
        return pr(o, X, H, ee, le, U.current, A);
      }
      function dt(o, c) {
        var _ = pr(o.type, c, o.ref, o._self, o._source, o._owner, o.props);
        return _;
      }
      function sn(o, c, _) {
        if (o == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
        var S, A = k({}, o.props), X = o.key, H = o.ref, ee = o._self, le = o._source, Te = o._owner;
        if (c != null) {
          Rr(c) && (H = c.ref, Te = U.current), nr(c) && (Je(c.key), X = "" + c.key);
          var Oe;
          o.type && o.type.defaultProps && (Oe = o.type.defaultProps);
          for (S in c)
            tr.call(c, S) && !yr.hasOwnProperty(S) && (c[S] === void 0 && Oe !== void 0 ? A[S] = Oe[S] : A[S] = c[S]);
        }
        var Pe = arguments.length - 2;
        if (Pe === 1)
          A.children = _;
        else if (Pe > 1) {
          for (var Ae = Array(Pe), Me = 0; Me < Pe; Me++)
            Ae[Me] = arguments[Me + 2];
          A.children = Ae;
        }
        return pr(o.type, X, H, ee, le, Te, A);
      }
      function vr(o) {
        return typeof o == "object" && o !== null && o.$$typeof === n;
      }
      var pt = ".", un = ":";
      function cn(o) {
        var c = /[=:]/g, _ = {
          "=": "=0",
          ":": "=2"
        }, S = o.replace(c, function(A) {
          return _[A];
        });
        return "$" + S;
      }
      var Ar = !1, mt = /\/+/g;
      function mr(o) {
        return o.replace(mt, "$&/");
      }
      function xr(o, c) {
        return typeof o == "object" && o !== null && o.key != null ? (Je(o.key), cn("" + o.key)) : c.toString(36);
      }
      function gr(o, c, _, S, A) {
        var X = typeof o;
        (X === "undefined" || X === "boolean") && (o = null);
        var H = !1;
        if (o === null)
          H = !0;
        else
          switch (X) {
            case "string":
            case "number":
              H = !0;
              break;
            case "object":
              switch (o.$$typeof) {
                case n:
                case i:
                  H = !0;
              }
          }
        if (H) {
          var ee = o, le = A(ee), Te = S === "" ? pt + xr(ee, 0) : S;
          if (Ce(le)) {
            var Oe = "";
            Te != null && (Oe = mr(Te) + "/"), gr(le, c, Oe, "", function(Ka) {
              return Ka;
            });
          } else
            le != null && (vr(le) && (le.key && (!ee || ee.key !== le.key) && Je(le.key), le = dt(
              le,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              _ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (le.key && (!ee || ee.key !== le.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                mr("" + le.key) + "/"
              ) : "") + Te
            )), c.push(le));
          return 1;
        }
        var Pe, Ae, Me = 0, ze = S === "" ? pt : S + un;
        if (Ce(o))
          for (var Tt = 0; Tt < o.length; Tt++)
            Pe = o[Tt], Ae = ze + xr(Pe, Tt), Me += gr(Pe, c, _, Ae, A);
        else {
          var Sn = M(o);
          if (typeof Sn == "function") {
            var Ao = o;
            Sn === Ao.entries && (Ar || oe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ar = !0);
            for (var Wa = Sn.call(Ao), No, qa = 0; !(No = Wa.next()).done; )
              Pe = No.value, Ae = ze + xr(Pe, qa++), Me += gr(Pe, c, _, Ae, A);
          } else if (X === "object") {
            var Io = String(o);
            throw new Error("Objects are not valid as a React child (found: " + (Io === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : Io) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Me;
      }
      function Tr(o, c, _) {
        if (o == null)
          return o;
        var S = [], A = 0;
        return gr(o, S, "", "", function(X) {
          return c.call(_, X, A++);
        }), S;
      }
      function ln(o) {
        var c = 0;
        return Tr(o, function() {
          c++;
        }), c;
      }
      function ht(o, c, _) {
        Tr(o, function() {
          c.apply(this, arguments);
        }, _);
      }
      function fn(o) {
        return Tr(o, function(c) {
          return c;
        }) || [];
      }
      function yt(o) {
        if (!vr(o))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return o;
      }
      function vt(o) {
        var c = {
          $$typeof: m,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: o,
          _currentValue2: o,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        c.Provider = {
          $$typeof: p,
          _context: c
        };
        var _ = !1, S = !1, A = !1;
        {
          var X = {
            $$typeof: m,
            _context: c
          };
          Object.defineProperties(X, {
            Provider: {
              get: function() {
                return S || (S = !0, z("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), c.Provider;
              },
              set: function(H) {
                c.Provider = H;
              }
            },
            _currentValue: {
              get: function() {
                return c._currentValue;
              },
              set: function(H) {
                c._currentValue = H;
              }
            },
            _currentValue2: {
              get: function() {
                return c._currentValue2;
              },
              set: function(H) {
                c._currentValue2 = H;
              }
            },
            _threadCount: {
              get: function() {
                return c._threadCount;
              },
              set: function(H) {
                c._threadCount = H;
              }
            },
            Consumer: {
              get: function() {
                return _ || (_ = !0, z("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), c.Consumer;
              }
            },
            displayName: {
              get: function() {
                return c.displayName;
              },
              set: function(H) {
                A || (oe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", H), A = !0);
              }
            }
          }), c.Consumer = X;
        }
        return c._currentRenderer = null, c._currentRenderer2 = null, c;
      }
      var Cr = -1, Xr = 0, Jr = 1, dn = 2;
      function pn(o) {
        if (o._status === Cr) {
          var c = o._result, _ = c();
          if (_.then(function(X) {
            if (o._status === Xr || o._status === Cr) {
              var H = o;
              H._status = Jr, H._result = X;
            }
          }, function(X) {
            if (o._status === Xr || o._status === Cr) {
              var H = o;
              H._status = dn, H._result = X;
            }
          }), o._status === Cr) {
            var S = o;
            S._status = Xr, S._result = _;
          }
        }
        if (o._status === Jr) {
          var A = o._result;
          return A === void 0 && z(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, A), "default" in A || z(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, A), A.default;
        } else
          throw o._result;
      }
      function mn(o) {
        var c = {
          // We use these fields to store the result.
          _status: Cr,
          _result: o
        }, _ = {
          $$typeof: x,
          _payload: c,
          _init: pn
        };
        {
          var S, A;
          Object.defineProperties(_, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return S;
              },
              set: function(X) {
                z("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), S = X, Object.defineProperty(_, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return A;
              },
              set: function(X) {
                z("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), A = X, Object.defineProperty(_, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return _;
      }
      function hn(o) {
        o != null && o.$$typeof === T ? z("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof o != "function" ? z("forwardRef requires a render function but was given %s.", o === null ? "null" : typeof o) : o.length !== 0 && o.length !== 2 && z("forwardRef render functions accept exactly two parameters: props and ref. %s", o.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), o != null && (o.defaultProps != null || o.propTypes != null) && z("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var c = {
          $$typeof: h,
          render: o
        };
        {
          var _;
          Object.defineProperty(c, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return _;
            },
            set: function(S) {
              _ = S, !o.name && !o.displayName && (o.displayName = S);
            }
          });
        }
        return c;
      }
      var l;
      l = Symbol.for("react.module.reference");
      function O(o) {
        return !!(typeof o == "string" || typeof o == "function" || o === a || o === f || re || o === s || o === v || o === b || te || o === y || W || ae || ue || typeof o == "object" && o !== null && (o.$$typeof === x || o.$$typeof === T || o.$$typeof === p || o.$$typeof === m || o.$$typeof === h || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        o.$$typeof === l || o.getModuleId !== void 0));
      }
      function j(o, c) {
        O(o) || z("memo: The first argument must be a component. Instead received: %s", o === null ? "null" : typeof o);
        var _ = {
          $$typeof: T,
          type: o,
          compare: c === void 0 ? null : c
        };
        {
          var S;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return S;
            },
            set: function(A) {
              S = A, !o.name && !o.displayName && (o.displayName = A);
            }
          });
        }
        return _;
      }
      function G() {
        var o = N.current;
        return o === null && z(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), o;
      }
      function de(o) {
        var c = G();
        if (o._context !== void 0) {
          var _ = o._context;
          _.Consumer === o ? z("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : _.Provider === o && z("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return c.useContext(o);
      }
      function xe(o) {
        var c = G();
        return c.useState(o);
      }
      function ce(o, c, _) {
        var S = G();
        return S.useReducer(o, c, _);
      }
      function ie(o) {
        var c = G();
        return c.useRef(o);
      }
      function Le(o, c) {
        var _ = G();
        return _.useEffect(o, c);
      }
      function ke(o, c) {
        var _ = G();
        return _.useInsertionEffect(o, c);
      }
      function Ne(o, c) {
        var _ = G();
        return _.useLayoutEffect(o, c);
      }
      function Ke(o, c) {
        var _ = G();
        return _.useCallback(o, c);
      }
      function br(o, c) {
        var _ = G();
        return _.useMemo(o, c);
      }
      function gt(o, c, _) {
        var S = G();
        return S.useImperativeHandle(o, c, _);
      }
      function or(o, c) {
        {
          var _ = G();
          return _.useDebugValue(o, c);
        }
      }
      function Ra() {
        var o = G();
        return o.useTransition();
      }
      function Sa(o) {
        var c = G();
        return c.useDeferredValue(o);
      }
      function xa() {
        var o = G();
        return o.useId();
      }
      function Ta(o, c, _) {
        var S = G();
        return S.useSyncExternalStore(o, c, _);
      }
      var Zr = 0, fo, po, mo, ho, yo, vo, go;
      function bo() {
      }
      bo.__reactDisabledLog = !0;
      function Ca() {
        {
          if (Zr === 0) {
            fo = console.log, po = console.info, mo = console.warn, ho = console.error, yo = console.group, vo = console.groupCollapsed, go = console.groupEnd;
            var o = {
              configurable: !0,
              enumerable: !0,
              value: bo,
              writable: !0
            };
            Object.defineProperties(console, {
              info: o,
              log: o,
              warn: o,
              error: o,
              group: o,
              groupCollapsed: o,
              groupEnd: o
            });
          }
          Zr++;
        }
      }
      function wa() {
        {
          if (Zr--, Zr === 0) {
            var o = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: k({}, o, {
                value: fo
              }),
              info: k({}, o, {
                value: po
              }),
              warn: k({}, o, {
                value: mo
              }),
              error: k({}, o, {
                value: ho
              }),
              group: k({}, o, {
                value: yo
              }),
              groupCollapsed: k({}, o, {
                value: vo
              }),
              groupEnd: k({}, o, {
                value: go
              })
            });
          }
          Zr < 0 && z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var yn = ne.ReactCurrentDispatcher, vn;
      function bt(o, c, _) {
        {
          if (vn === void 0)
            try {
              throw Error();
            } catch (A) {
              var S = A.stack.trim().match(/\n( *(at )?)/);
              vn = S && S[1] || "";
            }
          return `
` + vn + o;
        }
      }
      var gn = !1, Et;
      {
        var Oa = typeof WeakMap == "function" ? WeakMap : Map;
        Et = new Oa();
      }
      function Eo(o, c) {
        if (!o || gn)
          return "";
        {
          var _ = Et.get(o);
          if (_ !== void 0)
            return _;
        }
        var S;
        gn = !0;
        var A = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var X;
        X = yn.current, yn.current = null, Ca();
        try {
          if (c) {
            var H = function() {
              throw Error();
            };
            if (Object.defineProperty(H.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(H, []);
              } catch (ze) {
                S = ze;
              }
              Reflect.construct(o, [], H);
            } else {
              try {
                H.call();
              } catch (ze) {
                S = ze;
              }
              o.call(H.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ze) {
              S = ze;
            }
            o();
          }
        } catch (ze) {
          if (ze && S && typeof ze.stack == "string") {
            for (var ee = ze.stack.split(`
`), le = S.stack.split(`
`), Te = ee.length - 1, Oe = le.length - 1; Te >= 1 && Oe >= 0 && ee[Te] !== le[Oe]; )
              Oe--;
            for (; Te >= 1 && Oe >= 0; Te--, Oe--)
              if (ee[Te] !== le[Oe]) {
                if (Te !== 1 || Oe !== 1)
                  do
                    if (Te--, Oe--, Oe < 0 || ee[Te] !== le[Oe]) {
                      var Pe = `
` + ee[Te].replace(" at new ", " at ");
                      return o.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", o.displayName)), typeof o == "function" && Et.set(o, Pe), Pe;
                    }
                  while (Te >= 1 && Oe >= 0);
                break;
              }
          }
        } finally {
          gn = !1, yn.current = X, wa(), Error.prepareStackTrace = A;
        }
        var Ae = o ? o.displayName || o.name : "", Me = Ae ? bt(Ae) : "";
        return typeof o == "function" && Et.set(o, Me), Me;
      }
      function Pa(o, c, _) {
        return Eo(o, !1);
      }
      function $a(o) {
        var c = o.prototype;
        return !!(c && c.isReactComponent);
      }
      function _t(o, c, _) {
        if (o == null)
          return "";
        if (typeof o == "function")
          return Eo(o, $a(o));
        if (typeof o == "string")
          return bt(o);
        switch (o) {
          case v:
            return bt("Suspense");
          case b:
            return bt("SuspenseList");
        }
        if (typeof o == "object")
          switch (o.$$typeof) {
            case h:
              return Pa(o.render);
            case T:
              return _t(o.type, c, _);
            case x: {
              var S = o, A = S._payload, X = S._init;
              try {
                return _t(X(A), c, _);
              } catch {
              }
            }
          }
        return "";
      }
      var _o = {}, Ro = ne.ReactDebugCurrentFrame;
      function Rt(o) {
        if (o) {
          var c = o._owner, _ = _t(o.type, o._source, c ? c.type : null);
          Ro.setExtraStackFrame(_);
        } else
          Ro.setExtraStackFrame(null);
      }
      function ka(o, c, _, S, A) {
        {
          var X = Function.call.bind(tr);
          for (var H in o)
            if (X(o, H)) {
              var ee = void 0;
              try {
                if (typeof o[H] != "function") {
                  var le = Error((S || "React class") + ": " + _ + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw le.name = "Invariant Violation", le;
                }
                ee = o[H](c, H, S, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Te) {
                ee = Te;
              }
              ee && !(ee instanceof Error) && (Rt(A), z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", _, H, typeof ee), Rt(null)), ee instanceof Error && !(ee.message in _o) && (_o[ee.message] = !0, Rt(A), z("Failed %s type: %s", _, ee.message), Rt(null));
            }
        }
      }
      function Nr(o) {
        if (o) {
          var c = o._owner, _ = _t(o.type, o._source, c ? c.type : null);
          pe(_);
        } else
          pe(null);
      }
      var bn;
      bn = !1;
      function So() {
        if (U.current) {
          var o = qe(U.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
      function Aa(o) {
        if (o !== void 0) {
          var c = o.fileName.replace(/^.*[\\\/]/, ""), _ = o.lineNumber;
          return `

Check your code at ` + c + ":" + _ + ".";
        }
        return "";
      }
      function Na(o) {
        return o != null ? Aa(o.__source) : "";
      }
      var xo = {};
      function Ia(o) {
        var c = So();
        if (!c) {
          var _ = typeof o == "string" ? o : o.displayName || o.name;
          _ && (c = `

Check the top-level render call using <` + _ + ">.");
        }
        return c;
      }
      function To(o, c) {
        if (!(!o._store || o._store.validated || o.key != null)) {
          o._store.validated = !0;
          var _ = Ia(c);
          if (!xo[_]) {
            xo[_] = !0;
            var S = "";
            o && o._owner && o._owner !== U.current && (S = " It was passed a child from " + qe(o._owner.type) + "."), Nr(o), z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, S), Nr(null);
          }
        }
      }
      function Co(o, c) {
        if (typeof o == "object") {
          if (Ce(o))
            for (var _ = 0; _ < o.length; _++) {
              var S = o[_];
              vr(S) && To(S, c);
            }
          else if (vr(o))
            o._store && (o._store.validated = !0);
          else if (o) {
            var A = M(o);
            if (typeof A == "function" && A !== o.entries)
              for (var X = A.call(o), H; !(H = X.next()).done; )
                vr(H.value) && To(H.value, c);
          }
        }
      }
      function wo(o) {
        {
          var c = o.type;
          if (c == null || typeof c == "string")
            return;
          var _;
          if (typeof c == "function")
            _ = c.propTypes;
          else if (typeof c == "object" && (c.$$typeof === h || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          c.$$typeof === T))
            _ = c.propTypes;
          else
            return;
          if (_) {
            var S = qe(c);
            ka(_, o.props, "prop", S, o);
          } else if (c.PropTypes !== void 0 && !bn) {
            bn = !0;
            var A = qe(c);
            z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
          }
          typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ja(o) {
        {
          for (var c = Object.keys(o.props), _ = 0; _ < c.length; _++) {
            var S = c[_];
            if (S !== "children" && S !== "key") {
              Nr(o), z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Nr(null);
              break;
            }
          }
          o.ref !== null && (Nr(o), z("Invalid attribute `ref` supplied to `React.Fragment`."), Nr(null));
        }
      }
      function Oo(o, c, _) {
        var S = O(o);
        if (!S) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = Na(c);
          X ? A += X : A += So();
          var H;
          o === null ? H = "null" : Ce(o) ? H = "array" : o !== void 0 && o.$$typeof === n ? (H = "<" + (qe(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : H = typeof o, z("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, A);
        }
        var ee = kr.apply(this, arguments);
        if (ee == null)
          return ee;
        if (S)
          for (var le = 2; le < arguments.length; le++)
            Co(arguments[le], o);
        return o === a ? ja(ee) : wo(ee), ee;
      }
      var Po = !1;
      function Ma(o) {
        var c = Oo.bind(null, o);
        return c.type = o, Po || (Po = !0, oe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(c, "type", {
          enumerable: !1,
          get: function() {
            return oe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: o
            }), o;
          }
        }), c;
      }
      function Da(o, c, _) {
        for (var S = sn.apply(this, arguments), A = 2; A < arguments.length; A++)
          Co(arguments[A], S.type);
        return wo(S), S;
      }
      function Fa(o, c) {
        var _ = w.transition;
        w.transition = {};
        var S = w.transition;
        w.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          o();
        } finally {
          if (w.transition = _, _ === null && S._updatedFibers) {
            var A = S._updatedFibers.size;
            A > 10 && oe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), S._updatedFibers.clear();
          }
        }
      }
      var $o = !1, St = null;
      function Va(o) {
        if (St === null)
          try {
            var c = ("require" + Math.random()).slice(0, 7), _ = e && e[c];
            St = _.call(e, "timers").setImmediate;
          } catch {
            St = function(A) {
              $o === !1 && ($o = !0, typeof MessageChannel > "u" && z("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var X = new MessageChannel();
              X.port1.onmessage = A, X.port2.postMessage(void 0);
            };
          }
        return St(o);
      }
      var Ir = 0, ko = !1;
      function La(o) {
        {
          var c = Ir;
          Ir++, d.current === null && (d.current = []);
          var _ = d.isBatchingLegacy, S;
          try {
            if (d.isBatchingLegacy = !0, S = o(), !_ && d.didScheduleLegacyUpdate) {
              var A = d.current;
              A !== null && (d.didScheduleLegacyUpdate = !1, Rn(A));
            }
          } catch (Ae) {
            throw xt(c), Ae;
          } finally {
            d.isBatchingLegacy = _;
          }
          if (S !== null && typeof S == "object" && typeof S.then == "function") {
            var X = S, H = !1, ee = {
              then: function(Ae, Me) {
                H = !0, X.then(function(ze) {
                  xt(c), Ir === 0 ? En(ze, Ae, Me) : Ae(ze);
                }, function(ze) {
                  xt(c), Me(ze);
                });
              }
            };
            return !ko && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              H || (ko = !0, z("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ee;
          } else {
            var le = S;
            if (xt(c), Ir === 0) {
              var Te = d.current;
              Te !== null && (Rn(Te), d.current = null);
              var Oe = {
                then: function(Ae, Me) {
                  d.current === null ? (d.current = [], En(le, Ae, Me)) : Ae(le);
                }
              };
              return Oe;
            } else {
              var Pe = {
                then: function(Ae, Me) {
                  Ae(le);
                }
              };
              return Pe;
            }
          }
        }
      }
      function xt(o) {
        o !== Ir - 1 && z("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ir = o;
      }
      function En(o, c, _) {
        {
          var S = d.current;
          if (S !== null)
            try {
              Rn(S), Va(function() {
                S.length === 0 ? (d.current = null, c(o)) : En(o, c, _);
              });
            } catch (A) {
              _(A);
            }
          else
            c(o);
        }
      }
      var _n = !1;
      function Rn(o) {
        if (!_n) {
          _n = !0;
          var c = 0;
          try {
            for (; c < o.length; c++) {
              var _ = o[c];
              do
                _ = _(!0);
              while (_ !== null);
            }
            o.length = 0;
          } catch (S) {
            throw o = o.slice(c + 1), S;
          } finally {
            _n = !1;
          }
        }
      }
      var za = Oo, Ba = Da, Ya = Ma, Ua = {
        map: Tr,
        forEach: ht,
        count: ln,
        toArray: fn,
        only: yt
      };
      r.Children = Ua, r.Component = P, r.Fragment = a, r.Profiler = f, r.PureComponent = K, r.StrictMode = s, r.Suspense = v, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, r.cloneElement = Ba, r.createContext = vt, r.createElement = za, r.createFactory = Ya, r.createRef = we, r.forwardRef = hn, r.isValidElement = vr, r.lazy = mn, r.memo = j, r.startTransition = Fa, r.unstable_act = La, r.useCallback = Ke, r.useContext = de, r.useDebugValue = or, r.useDeferredValue = Sa, r.useEffect = Le, r.useId = xa, r.useImperativeHandle = gt, r.useInsertionEffect = ke, r.useLayoutEffect = Ne, r.useMemo = br, r.useReducer = ce, r.useRef = ie, r.useState = xe, r.useSyncExternalStore = Ta, r.useTransition = Ra, r.version = t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(nt, nt.exports)), nt.exports;
}
var Do;
function Yn() {
  return Do || (Do = 1, process.env.NODE_ENV === "production" ? Ct.exports = Ha() : Ct.exports = Xa()), Ct.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fo;
function Ja() {
  if (Fo)
    return Qr;
  Fo = 1;
  var e = Yn(), r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(f, p, m) {
    var h, v = {}, b = null, T = null;
    m !== void 0 && (b = "" + m), p.key !== void 0 && (b = "" + p.key), p.ref !== void 0 && (T = p.ref);
    for (h in p)
      n.call(p, h) && !a.hasOwnProperty(h) && (v[h] = p[h]);
    if (f && f.defaultProps)
      for (h in p = f.defaultProps, p)
        v[h] === void 0 && (v[h] = p[h]);
    return { $$typeof: r, type: f, key: b, ref: T, props: v, _owner: i.current };
  }
  return Qr.Fragment = t, Qr.jsx = s, Qr.jsxs = s, Qr;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vo;
function Za() {
  return Vo || (Vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Yn(), r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), x = Symbol.iterator, y = "@@iterator";
    function E(l) {
      if (l === null || typeof l != "object")
        return null;
      var O = x && l[x] || l[y];
      return typeof O == "function" ? O : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(l) {
      {
        for (var O = arguments.length, j = new Array(O > 1 ? O - 1 : 0), G = 1; G < O; G++)
          j[G - 1] = arguments[G];
        N("error", l, j);
      }
    }
    function N(l, O, j) {
      {
        var G = $.ReactDebugCurrentFrame, de = G.getStackAddendum();
        de !== "" && (O += "%s", j = j.concat([de]));
        var xe = j.map(function(ce) {
          return String(ce);
        });
        xe.unshift("Warning: " + O), Function.prototype.apply.call(console[l], console, xe);
      }
    }
    var w = !1, d = !1, U = !1, B = !1, me = !1, pe;
    pe = Symbol.for("react.module.reference");
    function W(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === a || me || l === i || l === m || l === h || B || l === T || w || d || U || typeof l == "object" && l !== null && (l.$$typeof === b || l.$$typeof === v || l.$$typeof === s || l.$$typeof === f || l.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === pe || l.getModuleId !== void 0));
    }
    function ae(l, O, j) {
      var G = l.displayName;
      if (G)
        return G;
      var de = O.displayName || O.name || "";
      return de !== "" ? j + "(" + de + ")" : j;
    }
    function ue(l) {
      return l.displayName || "Context";
    }
    function te(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case m:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case f:
            var O = l;
            return ue(O) + ".Consumer";
          case s:
            var j = l;
            return ue(j._context) + ".Provider";
          case p:
            return ae(l, l.render, "ForwardRef");
          case v:
            var G = l.displayName || null;
            return G !== null ? G : te(l.type) || "Memo";
          case b: {
            var de = l, xe = de._payload, ce = de._init;
            try {
              return te(ce(xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, ne = 0, oe, z, fe, Fe, u, g, k;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function P() {
      {
        if (ne === 0) {
          oe = console.log, z = console.info, fe = console.warn, Fe = console.error, u = console.group, g = console.groupCollapsed, k = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        ne++;
      }
    }
    function Y() {
      {
        if (ne--, ne === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, l, {
              value: oe
            }),
            info: re({}, l, {
              value: z
            }),
            warn: re({}, l, {
              value: fe
            }),
            error: re({}, l, {
              value: Fe
            }),
            group: re({}, l, {
              value: u
            }),
            groupCollapsed: re({}, l, {
              value: g
            }),
            groupEnd: re({}, l, {
              value: k
            })
          });
        }
        ne < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = $.ReactCurrentDispatcher, V;
    function L(l, O, j) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (de) {
            var G = de.stack.trim().match(/\n( *(at )?)/);
            V = G && G[1] || "";
          }
        return `
` + V + l;
      }
    }
    var K = !1, J;
    {
      var we = typeof WeakMap == "function" ? WeakMap : Map;
      J = new we();
    }
    function R(l, O) {
      if (!l || K)
        return "";
      {
        var j = J.get(l);
        if (j !== void 0)
          return j;
      }
      var G;
      K = !0;
      var de = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = F.current, F.current = null, P();
      try {
        if (O) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (or) {
              G = or;
            }
            Reflect.construct(l, [], ce);
          } else {
            try {
              ce.call();
            } catch (or) {
              G = or;
            }
            l.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (or) {
            G = or;
          }
          l();
        }
      } catch (or) {
        if (or && G && typeof or.stack == "string") {
          for (var ie = or.stack.split(`
`), Le = G.stack.split(`
`), ke = ie.length - 1, Ne = Le.length - 1; ke >= 1 && Ne >= 0 && ie[ke] !== Le[Ne]; )
            Ne--;
          for (; ke >= 1 && Ne >= 0; ke--, Ne--)
            if (ie[ke] !== Le[Ne]) {
              if (ke !== 1 || Ne !== 1)
                do
                  if (ke--, Ne--, Ne < 0 || ie[ke] !== Le[Ne]) {
                    var Ke = `
` + ie[ke].replace(" at new ", " at ");
                    return l.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", l.displayName)), typeof l == "function" && J.set(l, Ke), Ke;
                  }
                while (ke >= 1 && Ne >= 0);
              break;
            }
        }
      } finally {
        K = !1, F.current = xe, Y(), Error.prepareStackTrace = de;
      }
      var br = l ? l.displayName || l.name : "", gt = br ? L(br) : "";
      return typeof l == "function" && J.set(l, gt), gt;
    }
    function Ce(l, O, j) {
      return R(l, !1);
    }
    function q(l) {
      var O = l.prototype;
      return !!(O && O.isReactComponent);
    }
    function Ve(l, O, j) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return R(l, q(l));
      if (typeof l == "string")
        return L(l);
      switch (l) {
        case m:
          return L("Suspense");
        case h:
          return L("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case p:
            return Ce(l.render);
          case v:
            return Ve(l.type, O, j);
          case b: {
            var G = l, de = G._payload, xe = G._init;
            try {
              return Ve(xe(de), O, j);
            } catch {
            }
          }
        }
      return "";
    }
    var We = Object.prototype.hasOwnProperty, Je = {}, Pr = $.ReactDebugCurrentFrame;
    function fr(l) {
      if (l) {
        var O = l._owner, j = Ve(l.type, l._source, O ? O.type : null);
        Pr.setExtraStackFrame(j);
      } else
        Pr.setExtraStackFrame(null);
    }
    function qe(l, O, j, G, de) {
      {
        var xe = Function.call.bind(We);
        for (var ce in l)
          if (xe(l, ce)) {
            var ie = void 0;
            try {
              if (typeof l[ce] != "function") {
                var Le = Error((G || "React class") + ": " + j + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Le.name = "Invariant Violation", Le;
              }
              ie = l[ce](O, ce, G, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ke) {
              ie = ke;
            }
            ie && !(ie instanceof Error) && (fr(de), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", j, ce, typeof ie), fr(null)), ie instanceof Error && !(ie.message in Je) && (Je[ie.message] = !0, fr(de), M("Failed %s type: %s", j, ie.message), fr(null));
          }
      }
    }
    var tr = Array.isArray;
    function yr(l) {
      return tr(l);
    }
    function $r(l) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, j = O && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return j;
      }
    }
    function dr(l) {
      try {
        return Ze(l), !1;
      } catch {
        return !0;
      }
    }
    function Ze(l) {
      return "" + l;
    }
    function Rr(l) {
      if (dr(l))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $r(l)), Ze(l);
    }
    var nr = $.ReactCurrentOwner, Hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Q, Sr, pr;
    pr = {};
    function kr(l) {
      if (We.call(l, "ref")) {
        var O = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function dt(l) {
      if (We.call(l, "key")) {
        var O = Object.getOwnPropertyDescriptor(l, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function sn(l, O) {
      if (typeof l.ref == "string" && nr.current && O && nr.current.stateNode !== O) {
        var j = te(nr.current.type);
        pr[j] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(nr.current.type), l.ref), pr[j] = !0);
      }
    }
    function vr(l, O) {
      {
        var j = function() {
          Q || (Q = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        j.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function pt(l, O) {
      {
        var j = function() {
          Sr || (Sr = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        j.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var un = function(l, O, j, G, de, xe, ce) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: l,
        key: O,
        ref: j,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: xe
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function cn(l, O, j, G, de) {
      {
        var xe, ce = {}, ie = null, Le = null;
        j !== void 0 && (Rr(j), ie = "" + j), dt(O) && (Rr(O.key), ie = "" + O.key), kr(O) && (Le = O.ref, sn(O, de));
        for (xe in O)
          We.call(O, xe) && !Hr.hasOwnProperty(xe) && (ce[xe] = O[xe]);
        if (l && l.defaultProps) {
          var ke = l.defaultProps;
          for (xe in ke)
            ce[xe] === void 0 && (ce[xe] = ke[xe]);
        }
        if (ie || Le) {
          var Ne = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          ie && vr(ce, Ne), Le && pt(ce, Ne);
        }
        return un(l, ie, Le, de, G, nr.current, ce);
      }
    }
    var Ar = $.ReactCurrentOwner, mt = $.ReactDebugCurrentFrame;
    function mr(l) {
      if (l) {
        var O = l._owner, j = Ve(l.type, l._source, O ? O.type : null);
        mt.setExtraStackFrame(j);
      } else
        mt.setExtraStackFrame(null);
    }
    var xr;
    xr = !1;
    function gr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === r;
    }
    function Tr() {
      {
        if (Ar.current) {
          var l = te(Ar.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function ln(l) {
      {
        if (l !== void 0) {
          var O = l.fileName.replace(/^.*[\\\/]/, ""), j = l.lineNumber;
          return `

Check your code at ` + O + ":" + j + ".";
        }
        return "";
      }
    }
    var ht = {};
    function fn(l) {
      {
        var O = Tr();
        if (!O) {
          var j = typeof l == "string" ? l : l.displayName || l.name;
          j && (O = `

Check the top-level render call using <` + j + ">.");
        }
        return O;
      }
    }
    function yt(l, O) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var j = fn(O);
        if (ht[j])
          return;
        ht[j] = !0;
        var G = "";
        l && l._owner && l._owner !== Ar.current && (G = " It was passed a child from " + te(l._owner.type) + "."), mr(l), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, G), mr(null);
      }
    }
    function vt(l, O) {
      {
        if (typeof l != "object")
          return;
        if (yr(l))
          for (var j = 0; j < l.length; j++) {
            var G = l[j];
            gr(G) && yt(G, O);
          }
        else if (gr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var de = E(l);
          if (typeof de == "function" && de !== l.entries)
            for (var xe = de.call(l), ce; !(ce = xe.next()).done; )
              gr(ce.value) && yt(ce.value, O);
        }
      }
    }
    function Cr(l) {
      {
        var O = l.type;
        if (O == null || typeof O == "string")
          return;
        var j;
        if (typeof O == "function")
          j = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === v))
          j = O.propTypes;
        else
          return;
        if (j) {
          var G = te(O);
          qe(j, l.props, "prop", G, l);
        } else if (O.PropTypes !== void 0 && !xr) {
          xr = !0;
          var de = te(O);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xr(l) {
      {
        for (var O = Object.keys(l.props), j = 0; j < O.length; j++) {
          var G = O[j];
          if (G !== "children" && G !== "key") {
            mr(l), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), mr(null);
            break;
          }
        }
        l.ref !== null && (mr(l), M("Invalid attribute `ref` supplied to `React.Fragment`."), mr(null));
      }
    }
    function Jr(l, O, j, G, de, xe) {
      {
        var ce = W(l);
        if (!ce) {
          var ie = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = ln(de);
          Le ? ie += Le : ie += Tr();
          var ke;
          l === null ? ke = "null" : yr(l) ? ke = "array" : l !== void 0 && l.$$typeof === r ? (ke = "<" + (te(l.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof l, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, ie);
        }
        var Ne = cn(l, O, j, de, xe);
        if (Ne == null)
          return Ne;
        if (ce) {
          var Ke = O.children;
          if (Ke !== void 0)
            if (G)
              if (yr(Ke)) {
                for (var br = 0; br < Ke.length; br++)
                  vt(Ke[br], l);
                Object.freeze && Object.freeze(Ke);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vt(Ke, l);
        }
        return l === n ? Xr(Ne) : Cr(Ne), Ne;
      }
    }
    function dn(l, O, j) {
      return Jr(l, O, j, !0);
    }
    function pn(l, O, j) {
      return Jr(l, O, j, !1);
    }
    var mn = pn, hn = dn;
    et.Fragment = n, et.jsx = mn, et.jsxs = hn;
  }()), et;
}
process.env.NODE_ENV === "production" ? Nn.exports = Ja() : Nn.exports = Za();
var ar = Nn.exports;
const Qa = {
  black: "#000",
  white: "#fff"
}, it = Qa, es = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, jr = es, rs = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Mr = rs, ts = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Dr = ts, ns = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Fr = ns, os = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Vr = os, is = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, rt = is, as = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, ss = as;
function us(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Z.apply(this, arguments);
}
function Er(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Bi(e) {
  if (!Er(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Bi(e[t]);
  }), r;
}
function sr(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? Z({}, e) : e;
  return Er(e) && Er(r) && Object.keys(r).forEach((i) => {
    i !== "__proto__" && (Er(r[i]) && i in e && Er(e[i]) ? n[i] = sr(e[i], r[i], t) : t.clone ? n[i] = Er(r[i]) ? Bi(r[i]) : r[i] : n[i] = r[i]);
  }), n;
}
var In = { exports: {} }, wt = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function cs() {
  if (Lo)
    return ve;
  Lo = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function N(d) {
    if (typeof d == "object" && d !== null) {
      var U = d.$$typeof;
      switch (U) {
        case r:
          switch (d = d.type, d) {
            case p:
            case m:
            case n:
            case a:
            case i:
            case v:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case f:
                case h:
                case x:
                case T:
                case s:
                  return d;
                default:
                  return U;
              }
          }
        case t:
          return U;
      }
    }
  }
  function w(d) {
    return N(d) === m;
  }
  return ve.AsyncMode = p, ve.ConcurrentMode = m, ve.ContextConsumer = f, ve.ContextProvider = s, ve.Element = r, ve.ForwardRef = h, ve.Fragment = n, ve.Lazy = x, ve.Memo = T, ve.Portal = t, ve.Profiler = a, ve.StrictMode = i, ve.Suspense = v, ve.isAsyncMode = function(d) {
    return w(d) || N(d) === p;
  }, ve.isConcurrentMode = w, ve.isContextConsumer = function(d) {
    return N(d) === f;
  }, ve.isContextProvider = function(d) {
    return N(d) === s;
  }, ve.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, ve.isForwardRef = function(d) {
    return N(d) === h;
  }, ve.isFragment = function(d) {
    return N(d) === n;
  }, ve.isLazy = function(d) {
    return N(d) === x;
  }, ve.isMemo = function(d) {
    return N(d) === T;
  }, ve.isPortal = function(d) {
    return N(d) === t;
  }, ve.isProfiler = function(d) {
    return N(d) === a;
  }, ve.isStrictMode = function(d) {
    return N(d) === i;
  }, ve.isSuspense = function(d) {
    return N(d) === v;
  }, ve.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === m || d === a || d === i || d === v || d === b || typeof d == "object" && d !== null && (d.$$typeof === x || d.$$typeof === T || d.$$typeof === s || d.$$typeof === f || d.$$typeof === h || d.$$typeof === E || d.$$typeof === $ || d.$$typeof === M || d.$$typeof === y);
  }, ve.typeOf = N, ve;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zo;
function ls() {
  return zo || (zo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
    function N(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === m || R === a || R === i || R === v || R === b || typeof R == "object" && R !== null && (R.$$typeof === x || R.$$typeof === T || R.$$typeof === s || R.$$typeof === f || R.$$typeof === h || R.$$typeof === E || R.$$typeof === $ || R.$$typeof === M || R.$$typeof === y);
    }
    function w(R) {
      if (typeof R == "object" && R !== null) {
        var Ce = R.$$typeof;
        switch (Ce) {
          case r:
            var q = R.type;
            switch (q) {
              case p:
              case m:
              case n:
              case a:
              case i:
              case v:
                return q;
              default:
                var Ve = q && q.$$typeof;
                switch (Ve) {
                  case f:
                  case h:
                  case x:
                  case T:
                  case s:
                    return Ve;
                  default:
                    return Ce;
                }
            }
          case t:
            return Ce;
        }
      }
    }
    var d = p, U = m, B = f, me = s, pe = r, W = h, ae = n, ue = x, te = T, re = t, ne = a, oe = i, z = v, fe = !1;
    function Fe(R) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(R) || w(R) === p;
    }
    function u(R) {
      return w(R) === m;
    }
    function g(R) {
      return w(R) === f;
    }
    function k(R) {
      return w(R) === s;
    }
    function I(R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }
    function P(R) {
      return w(R) === h;
    }
    function Y(R) {
      return w(R) === n;
    }
    function F(R) {
      return w(R) === x;
    }
    function V(R) {
      return w(R) === T;
    }
    function L(R) {
      return w(R) === t;
    }
    function K(R) {
      return w(R) === a;
    }
    function J(R) {
      return w(R) === i;
    }
    function we(R) {
      return w(R) === v;
    }
    ge.AsyncMode = d, ge.ConcurrentMode = U, ge.ContextConsumer = B, ge.ContextProvider = me, ge.Element = pe, ge.ForwardRef = W, ge.Fragment = ae, ge.Lazy = ue, ge.Memo = te, ge.Portal = re, ge.Profiler = ne, ge.StrictMode = oe, ge.Suspense = z, ge.isAsyncMode = Fe, ge.isConcurrentMode = u, ge.isContextConsumer = g, ge.isContextProvider = k, ge.isElement = I, ge.isForwardRef = P, ge.isFragment = Y, ge.isLazy = F, ge.isMemo = V, ge.isPortal = L, ge.isProfiler = K, ge.isStrictMode = J, ge.isSuspense = we, ge.isValidElementType = N, ge.typeOf = w;
  }()), ge;
}
var Bo;
function Yi() {
  return Bo || (Bo = 1, process.env.NODE_ENV === "production" ? wt.exports = cs() : wt.exports = ls()), wt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xn, Yo;
function fs() {
  if (Yo)
    return xn;
  Yo = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, f = 0; f < 10; f++)
        s["_" + String.fromCharCode(f)] = f;
      var p = Object.getOwnPropertyNames(s).map(function(h) {
        return s[h];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        m[h] = h;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xn = i() ? Object.assign : function(a, s) {
    for (var f, p = n(a), m, h = 1; h < arguments.length; h++) {
      f = Object(arguments[h]);
      for (var v in f)
        r.call(f, v) && (p[v] = f[v]);
      if (e) {
        m = e(f);
        for (var b = 0; b < m.length; b++)
          t.call(f, m[b]) && (p[m[b]] = f[m[b]]);
      }
    }
    return p;
  }, xn;
}
var Tn, Uo;
function Un() {
  if (Uo)
    return Tn;
  Uo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Tn = e, Tn;
}
var Cn, Wo;
function Ui() {
  return Wo || (Wo = 1, Cn = Function.call.bind(Object.prototype.hasOwnProperty)), Cn;
}
var wn, qo;
function ds() {
  if (qo)
    return wn;
  qo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Un(), t = {}, n = Ui();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, f, p, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in a)
        if (n(a, h)) {
          var v;
          try {
            if (typeof a[h] != "function") {
              var b = Error(
                (p || "React class") + ": " + f + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            v = a[h](s, h, p, f, null, r);
          } catch (x) {
            v = x;
          }
          if (v && !(v instanceof Error) && e(
            (p || "React class") + ": type specification of " + f + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in t)) {
            t[v.message] = !0;
            var T = m ? m() : "";
            e(
              "Failed " + f + " type: " + v.message + (T ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, wn = i, wn;
}
var On, Ko;
function ps() {
  if (Ko)
    return On;
  Ko = 1;
  var e = Yi(), r = fs(), t = Un(), n = Ui(), i = ds(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(f) {
    var p = "Warning: " + f;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return On = function(f, p) {
    var m = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function v(u) {
      var g = u && (m && u[m] || u[h]);
      if (typeof g == "function")
        return g;
    }
    var b = "<<anonymous>>", T = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: M(),
      arrayOf: N,
      element: w(),
      elementType: d(),
      instanceOf: U,
      node: W(),
      objectOf: me,
      oneOf: B,
      oneOfType: pe,
      shape: ue,
      exact: te
    };
    function x(u, g) {
      return u === g ? u !== 0 || 1 / u === 1 / g : u !== u && g !== g;
    }
    function y(u, g) {
      this.message = u, this.data = g && typeof g == "object" ? g : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function E(u) {
      if (process.env.NODE_ENV !== "production")
        var g = {}, k = 0;
      function I(Y, F, V, L, K, J, we) {
        if (L = L || b, J = J || V, we !== t) {
          if (p) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = L + ":" + V;
            !g[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + L + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), g[Ce] = !0, k++);
          }
        }
        return F[V] == null ? Y ? F[V] === null ? new y("The " + K + " `" + J + "` is marked as required " + ("in `" + L + "`, but its value is `null`.")) : new y("The " + K + " `" + J + "` is marked as required in " + ("`" + L + "`, but its value is `undefined`.")) : null : u(F, V, L, K, J);
      }
      var P = I.bind(null, !1);
      return P.isRequired = I.bind(null, !0), P;
    }
    function $(u) {
      function g(k, I, P, Y, F, V) {
        var L = k[I], K = oe(L);
        if (K !== u) {
          var J = z(L);
          return new y(
            "Invalid " + Y + " `" + F + "` of type " + ("`" + J + "` supplied to `" + P + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return E(g);
    }
    function M() {
      return E(s);
    }
    function N(u) {
      function g(k, I, P, Y, F) {
        if (typeof u != "function")
          return new y("Property `" + F + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var V = k[I];
        if (!Array.isArray(V)) {
          var L = oe(V);
          return new y("Invalid " + Y + " `" + F + "` of type " + ("`" + L + "` supplied to `" + P + "`, expected an array."));
        }
        for (var K = 0; K < V.length; K++) {
          var J = u(V, K, P, Y, F + "[" + K + "]", t);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return E(g);
    }
    function w() {
      function u(g, k, I, P, Y) {
        var F = g[k];
        if (!f(F)) {
          var V = oe(F);
          return new y("Invalid " + P + " `" + Y + "` of type " + ("`" + V + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(u);
    }
    function d() {
      function u(g, k, I, P, Y) {
        var F = g[k];
        if (!e.isValidElementType(F)) {
          var V = oe(F);
          return new y("Invalid " + P + " `" + Y + "` of type " + ("`" + V + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(u);
    }
    function U(u) {
      function g(k, I, P, Y, F) {
        if (!(k[I] instanceof u)) {
          var V = u.name || b, L = Fe(k[I]);
          return new y("Invalid " + Y + " `" + F + "` of type " + ("`" + L + "` supplied to `" + P + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return E(g);
    }
    function B(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function g(k, I, P, Y, F) {
        for (var V = k[I], L = 0; L < u.length; L++)
          if (x(V, u[L]))
            return null;
        var K = JSON.stringify(u, function(we, R) {
          var Ce = z(R);
          return Ce === "symbol" ? String(R) : R;
        });
        return new y("Invalid " + Y + " `" + F + "` of value `" + String(V) + "` " + ("supplied to `" + P + "`, expected one of " + K + "."));
      }
      return E(g);
    }
    function me(u) {
      function g(k, I, P, Y, F) {
        if (typeof u != "function")
          return new y("Property `" + F + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var V = k[I], L = oe(V);
        if (L !== "object")
          return new y("Invalid " + Y + " `" + F + "` of type " + ("`" + L + "` supplied to `" + P + "`, expected an object."));
        for (var K in V)
          if (n(V, K)) {
            var J = u(V, K, P, Y, F + "." + K, t);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return E(g);
    }
    function pe(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var g = 0; g < u.length; g++) {
        var k = u[g];
        if (typeof k != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(k) + " at index " + g + "."
          ), s;
      }
      function I(P, Y, F, V, L) {
        for (var K = [], J = 0; J < u.length; J++) {
          var we = u[J], R = we(P, Y, F, V, L, t);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && K.push(R.data.expectedType);
        }
        var Ce = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new y("Invalid " + V + " `" + L + "` supplied to " + ("`" + F + "`" + Ce + "."));
      }
      return E(I);
    }
    function W() {
      function u(g, k, I, P, Y) {
        return re(g[k]) ? null : new y("Invalid " + P + " `" + Y + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return E(u);
    }
    function ae(u, g, k, I, P) {
      return new y(
        (u || "React class") + ": " + g + " type `" + k + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function ue(u) {
      function g(k, I, P, Y, F) {
        var V = k[I], L = oe(V);
        if (L !== "object")
          return new y("Invalid " + Y + " `" + F + "` of type `" + L + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var K in u) {
          var J = u[K];
          if (typeof J != "function")
            return ae(P, Y, F, K, z(J));
          var we = J(V, K, P, Y, F + "." + K, t);
          if (we)
            return we;
        }
        return null;
      }
      return E(g);
    }
    function te(u) {
      function g(k, I, P, Y, F) {
        var V = k[I], L = oe(V);
        if (L !== "object")
          return new y("Invalid " + Y + " `" + F + "` of type `" + L + "` " + ("supplied to `" + P + "`, expected `object`."));
        var K = r({}, k[I], u);
        for (var J in K) {
          var we = u[J];
          if (n(u, J) && typeof we != "function")
            return ae(P, Y, F, J, z(we));
          if (!we)
            return new y(
              "Invalid " + Y + " `" + F + "` key `" + J + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(k[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var R = we(V, J, P, Y, F + "." + J, t);
          if (R)
            return R;
        }
        return null;
      }
      return E(g);
    }
    function re(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(re);
          if (u === null || f(u))
            return !0;
          var g = v(u);
          if (g) {
            var k = g.call(u), I;
            if (g !== u.entries) {
              for (; !(I = k.next()).done; )
                if (!re(I.value))
                  return !1;
            } else
              for (; !(I = k.next()).done; ) {
                var P = I.value;
                if (P && !re(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(u, g) {
      return u === "symbol" ? !0 : g ? g["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && g instanceof Symbol : !1;
    }
    function oe(u) {
      var g = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : ne(g, u) ? "symbol" : g;
    }
    function z(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var g = oe(u);
      if (g === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return g;
    }
    function fe(u) {
      var g = z(u);
      switch (g) {
        case "array":
        case "object":
          return "an " + g;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + g;
        default:
          return g;
      }
    }
    function Fe(u) {
      return !u.constructor || !u.constructor.name ? b : u.constructor.name;
    }
    return T.checkPropTypes = i, T.resetWarningCache = i.resetWarningCache, T.PropTypes = T, T;
  }, On;
}
var Pn, Go;
function ms() {
  if (Go)
    return Pn;
  Go = 1;
  var e = Un();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Pn = function() {
    function n(s, f, p, m, h, v) {
      if (v !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return a.PropTypes = a, a;
  }, Pn;
}
if (process.env.NODE_ENV !== "production") {
  var hs = Yi(), ys = !0;
  In.exports = ps()(hs.isElement, ys);
} else
  In.exports = ms()();
var vs = In.exports;
const C = /* @__PURE__ */ zi(vs);
function gs(e) {
  const {
    prototype: r = {}
  } = e;
  return !!r.isReactComponent;
}
function bs(e, r, t, n, i) {
  const a = e[r], s = i || r;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let f;
  return typeof a == "function" && !gs(a) && (f = "Did you accidentally provide a plain function component instead?"), f !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${f} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Es = us(C.elementType, bs);
function Yr(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
var jn = { exports: {} }, be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ho;
function _s() {
  if (Ho)
    return be;
  Ho = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.server_context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), x;
  x = Symbol.for("react.module.reference");
  function y(E) {
    if (typeof E == "object" && E !== null) {
      var $ = E.$$typeof;
      switch ($) {
        case e:
          switch (E = E.type, E) {
            case t:
            case i:
            case n:
            case m:
            case h:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case f:
                case s:
                case p:
                case b:
                case v:
                case a:
                  return E;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  return be.ContextConsumer = s, be.ContextProvider = a, be.Element = e, be.ForwardRef = p, be.Fragment = t, be.Lazy = b, be.Memo = v, be.Portal = r, be.Profiler = i, be.StrictMode = n, be.Suspense = m, be.SuspenseList = h, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(E) {
    return y(E) === s;
  }, be.isContextProvider = function(E) {
    return y(E) === a;
  }, be.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === e;
  }, be.isForwardRef = function(E) {
    return y(E) === p;
  }, be.isFragment = function(E) {
    return y(E) === t;
  }, be.isLazy = function(E) {
    return y(E) === b;
  }, be.isMemo = function(E) {
    return y(E) === v;
  }, be.isPortal = function(E) {
    return y(E) === r;
  }, be.isProfiler = function(E) {
    return y(E) === i;
  }, be.isStrictMode = function(E) {
    return y(E) === n;
  }, be.isSuspense = function(E) {
    return y(E) === m;
  }, be.isSuspenseList = function(E) {
    return y(E) === h;
  }, be.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === t || E === i || E === n || E === m || E === h || E === T || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === v || E.$$typeof === a || E.$$typeof === s || E.$$typeof === p || E.$$typeof === x || E.getModuleId !== void 0);
  }, be.typeOf = y, be;
}
var Ee = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo;
function Rs() {
  return Xo || (Xo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.server_context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), x = !1, y = !1, E = !1, $ = !1, M = !1, N;
    N = Symbol.for("react.module.reference");
    function w(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === t || q === i || M || q === n || q === m || q === h || $ || q === T || x || y || E || typeof q == "object" && q !== null && (q.$$typeof === b || q.$$typeof === v || q.$$typeof === a || q.$$typeof === s || q.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      q.$$typeof === N || q.getModuleId !== void 0));
    }
    function d(q) {
      if (typeof q == "object" && q !== null) {
        var Ve = q.$$typeof;
        switch (Ve) {
          case e:
            var We = q.type;
            switch (We) {
              case t:
              case i:
              case n:
              case m:
              case h:
                return We;
              default:
                var Je = We && We.$$typeof;
                switch (Je) {
                  case f:
                  case s:
                  case p:
                  case b:
                  case v:
                  case a:
                    return Je;
                  default:
                    return Ve;
                }
            }
          case r:
            return Ve;
        }
      }
    }
    var U = s, B = a, me = e, pe = p, W = t, ae = b, ue = v, te = r, re = i, ne = n, oe = m, z = h, fe = !1, Fe = !1;
    function u(q) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function g(q) {
      return Fe || (Fe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(q) {
      return d(q) === s;
    }
    function I(q) {
      return d(q) === a;
    }
    function P(q) {
      return typeof q == "object" && q !== null && q.$$typeof === e;
    }
    function Y(q) {
      return d(q) === p;
    }
    function F(q) {
      return d(q) === t;
    }
    function V(q) {
      return d(q) === b;
    }
    function L(q) {
      return d(q) === v;
    }
    function K(q) {
      return d(q) === r;
    }
    function J(q) {
      return d(q) === i;
    }
    function we(q) {
      return d(q) === n;
    }
    function R(q) {
      return d(q) === m;
    }
    function Ce(q) {
      return d(q) === h;
    }
    Ee.ContextConsumer = U, Ee.ContextProvider = B, Ee.Element = me, Ee.ForwardRef = pe, Ee.Fragment = W, Ee.Lazy = ae, Ee.Memo = ue, Ee.Portal = te, Ee.Profiler = re, Ee.StrictMode = ne, Ee.Suspense = oe, Ee.SuspenseList = z, Ee.isAsyncMode = u, Ee.isConcurrentMode = g, Ee.isContextConsumer = k, Ee.isContextProvider = I, Ee.isElement = P, Ee.isForwardRef = Y, Ee.isFragment = F, Ee.isLazy = V, Ee.isMemo = L, Ee.isPortal = K, Ee.isProfiler = J, Ee.isStrictMode = we, Ee.isSuspense = R, Ee.isSuspenseList = Ce, Ee.isValidElementType = w, Ee.typeOf = d;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? jn.exports = _s() : jn.exports = Rs();
var Jo = jn.exports;
const Ss = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function xs(e) {
  const r = `${e}`.match(Ss);
  return r && r[1] || "";
}
function Wi(e, r = "") {
  return e.displayName || e.name || xs(e) || r;
}
function Zo(e, r, t) {
  const n = Wi(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Ts(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Wi(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Jo.ForwardRef:
          return Zo(e, e.render, "ForwardRef");
        case Jo.Memo:
          return Zo(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Cs = C.oneOfType([C.func, C.object]), ws = Cs;
function Ue(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Yr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var D = Yn();
const Lr = /* @__PURE__ */ zi(D), Qo = /* @__PURE__ */ Ga({
  __proto__: null,
  default: Lr
}, [D]);
function Os(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
const Ps = typeof window < "u" ? D.useLayoutEffect : D.useEffect, $s = Ps;
function Ot(e) {
  const r = D.useRef(e);
  return $s(() => {
    r.current = e;
  }), D.useRef((...t) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, r.current)(...t)
  )).current;
}
function ei(...e) {
  return D.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      Os(t, r);
    });
  }, e);
}
let Bt = !0, Mn = !1, ri;
const ks = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function As(e) {
  const {
    type: r,
    tagName: t
  } = e;
  return !!(t === "INPUT" && ks[r] && !e.readOnly || t === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Ns(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Bt = !0);
}
function $n() {
  Bt = !1;
}
function Is() {
  this.visibilityState === "hidden" && Mn && (Bt = !0);
}
function js(e) {
  e.addEventListener("keydown", Ns, !0), e.addEventListener("mousedown", $n, !0), e.addEventListener("pointerdown", $n, !0), e.addEventListener("touchstart", $n, !0), e.addEventListener("visibilitychange", Is, !0);
}
function Ms(e) {
  const {
    target: r
  } = e;
  try {
    return r.matches(":focus-visible");
  } catch {
  }
  return Bt || As(r);
}
function Ds() {
  const e = D.useCallback((i) => {
    i != null && js(i.ownerDocument);
  }, []), r = D.useRef(!1);
  function t() {
    return r.current ? (Mn = !0, window.clearTimeout(ri), ri = window.setTimeout(() => {
      Mn = !1;
    }, 100), r.current = !1, !0) : !1;
  }
  function n(i) {
    return Ms(i) ? (r.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: r,
    onFocus: n,
    onBlur: t,
    ref: e
  };
}
function Wn(e, r) {
  const t = Z({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = Z({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[n] || {}, a = r[n];
      t[n] = {}, !a || !Object.keys(a) ? t[n] = i : !i || !Object.keys(i) ? t[n] = a : (t[n] = Z({}, a), Object.keys(i).forEach((s) => {
        t[n][s] = Wn(i[s], a[s]);
      }));
    } else
      t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function qi(e, r, t = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      n[i] = e[i].reduce((a, s) => {
        if (s) {
          const f = r(s);
          f !== "" && a.push(f), t && t[s] && a.push(t[s]);
        }
        return a;
      }, []).join(" ");
    }
  ), n;
}
const ti = (e) => e, Fs = () => {
  let e = ti;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = ti;
    }
  };
}, Vs = Fs(), Ls = Vs, zs = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Yt(e, r, t = "Mui") {
  const n = zs[r];
  return n ? `${t}-${n}` : `${Ls.generate(e)}-${r}`;
}
function qn(e, r, t = "Mui") {
  const n = {};
  return r.forEach((i) => {
    n[i] = Yt(e, i, t);
  }), n;
}
const Ki = "$$material";
function rr(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function Gi(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Bs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ys = /* @__PURE__ */ Gi(
  function(e) {
    return Bs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Us(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Ws(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var qs = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(i) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, a), n.tags.push(i);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ws(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var s = Us(i);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (f) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', f);
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ye = "-ms-", Dt = "-moz-", he = "-webkit-", Kn = "comm", Gn = "rule", Hn = "decl", Ks = "@import", Hi = "@keyframes", Gs = "@layer", Hs = Math.abs, Ut = String.fromCharCode, Xs = Object.assign;
function Js(e, r) {
  return Be(e, 0) ^ 45 ? (((r << 2 ^ Be(e, 0)) << 2 ^ Be(e, 1)) << 2 ^ Be(e, 2)) << 2 ^ Be(e, 3) : 0;
}
function Xi(e) {
  return e.trim();
}
function Zs(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function ye(e, r, t) {
  return e.replace(r, t);
}
function Dn(e, r) {
  return e.indexOf(r);
}
function Be(e, r) {
  return e.charCodeAt(r) | 0;
}
function at(e, r, t) {
  return e.slice(r, t);
}
function ur(e) {
  return e.length;
}
function Xn(e) {
  return e.length;
}
function Pt(e, r) {
  return r.push(e), e;
}
function Qs(e, r) {
  return e.map(r).join("");
}
var Wt = 1, Ur = 1, Ji = 0, Ge = 0, De = 0, qr = "";
function qt(e, r, t, n, i, a, s) {
  return { value: e, root: r, parent: t, type: n, props: i, children: a, line: Wt, column: Ur, length: s, return: "" };
}
function tt(e, r) {
  return Xs(qt("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function eu() {
  return De;
}
function ru() {
  return De = Ge > 0 ? Be(qr, --Ge) : 0, Ur--, De === 10 && (Ur = 1, Wt--), De;
}
function Xe() {
  return De = Ge < Ji ? Be(qr, Ge++) : 0, Ur++, De === 10 && (Ur = 1, Wt++), De;
}
function lr() {
  return Be(qr, Ge);
}
function At() {
  return Ge;
}
function ct(e, r) {
  return at(qr, e, r);
}
function st(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Zi(e) {
  return Wt = Ur = 1, Ji = ur(qr = e), Ge = 0, [];
}
function Qi(e) {
  return qr = "", e;
}
function Nt(e) {
  return Xi(ct(Ge - 1, Fn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function tu(e) {
  for (; (De = lr()) && De < 33; )
    Xe();
  return st(e) > 2 || st(De) > 3 ? "" : " ";
}
function nu(e, r) {
  for (; --r && Xe() && !(De < 48 || De > 102 || De > 57 && De < 65 || De > 70 && De < 97); )
    ;
  return ct(e, At() + (r < 6 && lr() == 32 && Xe() == 32));
}
function Fn(e) {
  for (; Xe(); )
    switch (De) {
      case e:
        return Ge;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fn(De);
        break;
      case 40:
        e === 41 && Fn(e);
        break;
      case 92:
        Xe();
        break;
    }
  return Ge;
}
function ou(e, r) {
  for (; Xe() && e + De !== 47 + 10; )
    if (e + De === 42 + 42 && lr() === 47)
      break;
  return "/*" + ct(r, Ge - 1) + "*" + Ut(e === 47 ? e : Xe());
}
function iu(e) {
  for (; !st(lr()); )
    Xe();
  return ct(e, Ge);
}
function au(e) {
  return Qi(It("", null, null, null, [""], e = Zi(e), 0, [0], e));
}
function It(e, r, t, n, i, a, s, f, p) {
  for (var m = 0, h = 0, v = s, b = 0, T = 0, x = 0, y = 1, E = 1, $ = 1, M = 0, N = "", w = i, d = a, U = n, B = N; E; )
    switch (x = M, M = Xe()) {
      case 40:
        if (x != 108 && Be(B, v - 1) == 58) {
          Dn(B += ye(Nt(M), "&", "&\f"), "&\f") != -1 && ($ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        B += Nt(M);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        B += tu(x);
        break;
      case 92:
        B += nu(At() - 1, 7);
        continue;
      case 47:
        switch (lr()) {
          case 42:
          case 47:
            Pt(su(ou(Xe(), At()), r, t), p);
            break;
          default:
            B += "/";
        }
        break;
      case 123 * y:
        f[m++] = ur(B) * $;
      case 125 * y:
      case 59:
      case 0:
        switch (M) {
          case 0:
          case 125:
            E = 0;
          case 59 + h:
            $ == -1 && (B = ye(B, /\f/g, "")), T > 0 && ur(B) - v && Pt(T > 32 ? oi(B + ";", n, t, v - 1) : oi(ye(B, " ", "") + ";", n, t, v - 2), p);
            break;
          case 59:
            B += ";";
          default:
            if (Pt(U = ni(B, r, t, m, h, i, f, N, w = [], d = [], v), a), M === 123)
              if (h === 0)
                It(B, r, U, U, w, a, v, f, d);
              else
                switch (b === 99 && Be(B, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    It(e, U, U, n && Pt(ni(e, U, U, 0, 0, i, f, N, i, w = [], v), d), i, d, v, f, n ? w : d);
                    break;
                  default:
                    It(B, U, U, U, [""], d, 0, f, d);
                }
        }
        m = h = T = 0, y = $ = 1, N = B = "", v = s;
        break;
      case 58:
        v = 1 + ur(B), T = x;
      default:
        if (y < 1) {
          if (M == 123)
            --y;
          else if (M == 125 && y++ == 0 && ru() == 125)
            continue;
        }
        switch (B += Ut(M), M * y) {
          case 38:
            $ = h > 0 ? 1 : (B += "\f", -1);
            break;
          case 44:
            f[m++] = (ur(B) - 1) * $, $ = 1;
            break;
          case 64:
            lr() === 45 && (B += Nt(Xe())), b = lr(), h = v = ur(N = B += iu(At())), M++;
            break;
          case 45:
            x === 45 && ur(B) == 2 && (y = 0);
        }
    }
  return a;
}
function ni(e, r, t, n, i, a, s, f, p, m, h) {
  for (var v = i - 1, b = i === 0 ? a : [""], T = Xn(b), x = 0, y = 0, E = 0; x < n; ++x)
    for (var $ = 0, M = at(e, v + 1, v = Hs(y = s[x])), N = e; $ < T; ++$)
      (N = Xi(y > 0 ? b[$] + " " + M : ye(M, /&\f/g, b[$]))) && (p[E++] = N);
  return qt(e, r, t, i === 0 ? Gn : f, p, m, h);
}
function su(e, r, t) {
  return qt(e, r, t, Kn, Ut(eu()), at(e, 2, -2), 0);
}
function oi(e, r, t, n) {
  return qt(e, r, t, Hn, at(e, 0, n), at(e, n + 1, -1), n);
}
function zr(e, r) {
  for (var t = "", n = Xn(e), i = 0; i < n; i++)
    t += r(e[i], i, e, r) || "";
  return t;
}
function uu(e, r, t, n) {
  switch (e.type) {
    case Gs:
      if (e.children.length)
        break;
    case Ks:
    case Hn:
      return e.return = e.return || e.value;
    case Kn:
      return "";
    case Hi:
      return e.return = e.value + "{" + zr(e.children, n) + "}";
    case Gn:
      e.value = e.props.join(",");
  }
  return ur(t = zr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function cu(e) {
  var r = Xn(e);
  return function(t, n, i, a) {
    for (var s = "", f = 0; f < r; f++)
      s += e[f](t, n, i, a) || "";
    return s;
  };
}
function lu(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var fu = function(r, t, n) {
  for (var i = 0, a = 0; i = a, a = lr(), i === 38 && a === 12 && (t[n] = 1), !st(a); )
    Xe();
  return ct(r, Ge);
}, du = function(r, t) {
  var n = -1, i = 44;
  do
    switch (st(i)) {
      case 0:
        i === 38 && lr() === 12 && (t[n] = 1), r[n] += fu(Ge - 1, t, n);
        break;
      case 2:
        r[n] += Nt(i);
        break;
      case 4:
        if (i === 44) {
          r[++n] = lr() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += Ut(i);
    }
  while (i = Xe());
  return r;
}, pu = function(r, t) {
  return Qi(du(Zi(r), t));
}, ii = /* @__PURE__ */ new WeakMap(), mu = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, i = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !ii.get(n)) && !i) {
      ii.set(r, !0);
      for (var a = [], s = pu(t, a), f = n.props, p = 0, m = 0; p < s.length; p++)
        for (var h = 0; h < f.length; h++, m++)
          r.props[m] = a[p] ? s[p].replace(/&\f/g, f[h]) : f[h] + " " + s[p];
    }
  }
}, hu = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, yu = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", vu = function(r) {
  return r.type === "comm" && r.children.indexOf(yu) > -1;
}, gu = function(r) {
  return function(t, n, i) {
    if (!(t.type !== "rule" || r.compat)) {
      var a = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a) {
        for (var s = !!t.parent, f = s ? t.parent.children : (
          // global rule at the root level
          i
        ), p = f.length - 1; p >= 0; p--) {
          var m = f[p];
          if (m.line < t.line)
            break;
          if (m.column < t.column) {
            if (vu(m))
              return;
            break;
          }
        }
        a.forEach(function(h) {
          console.error('The pseudo class "' + h + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + h.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, ea = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, bu = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!ea(t[n]))
      return !0;
  return !1;
}, ai = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Eu = function(r, t, n) {
  ea(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), ai(r)) : bu(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), ai(r)));
};
function ra(e, r) {
  switch (Js(e, r)) {
    case 5103:
      return he + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return he + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + e + Dt + e + Ye + e + e;
    case 6828:
    case 4268:
      return he + e + Ye + e + e;
    case 6165:
      return he + e + Ye + "flex-" + e + e;
    case 5187:
      return he + e + ye(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + Ye + "flex-$1$2") + e;
    case 5443:
      return he + e + Ye + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    case 4675:
      return he + e + Ye + "flex-line-pack" + ye(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return he + e + Ye + ye(e, "shrink", "negative") + e;
    case 5292:
      return he + e + Ye + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return he + "box-" + ye(e, "-grow", "") + he + e + Ye + ye(e, "grow", "positive") + e;
    case 4554:
      return he + ye(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
    case 6187:
      return ye(ye(ye(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, he + "$1$`$1");
    case 4968:
      return ye(ye(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + Ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + he + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(e, /(.+)-inline(.+)/, he + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ur(e) - 1 - r > 6)
        switch (Be(e, r + 1)) {
          case 109:
            if (Be(e, r + 4) !== 45)
              break;
          case 102:
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + he + "$2-$3$1" + Dt + (Be(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Dn(e, "stretch") ? ra(ye(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (Be(e, r + 1) !== 115)
        break;
    case 6444:
      switch (Be(e, ur(e) - 3 - (~Dn(e, "!important") && 10))) {
        case 107:
          return ye(e, ":", ":" + he) + e;
        case 101:
          return ye(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + he + (Be(e, 14) === 45 ? "inline-" : "") + "box$3$1" + he + "$2$3$1" + Ye + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Be(e, r + 11)) {
        case 114:
          return he + e + Ye + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return he + e + Ye + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return he + e + Ye + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return he + e + Ye + e + e;
  }
  return e;
}
var _u = function(r, t, n, i) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Hn:
        r.return = ra(r.value, r.length);
        break;
      case Hi:
        return zr([tt(r, {
          value: ye(r.value, "@", "@" + he)
        })], i);
      case Gn:
        if (r.length)
          return Qs(r.props, function(a) {
            switch (Zs(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return zr([tt(r, {
                  props: [ye(a, /:(read-\w+)/, ":" + Dt + "$1")]
                })], i);
              case "::placeholder":
                return zr([tt(r, {
                  props: [ye(a, /:(plac\w+)/, ":" + he + "input-$1")]
                }), tt(r, {
                  props: [ye(a, /:(plac\w+)/, ":" + Dt + "$1")]
                }), tt(r, {
                  props: [ye(a, /:(plac\w+)/, Ye + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, Ru = [_u], Su = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var E = y.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var i = r.stylisPlugins || Ru;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var a = {}, s, f = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(y) {
      for (var E = y.getAttribute("data-emotion").split(" "), $ = 1; $ < E.length; $++)
        a[E[$]] = !0;
      f.push(y);
    }
  );
  var p, m = [mu, hu];
  process.env.NODE_ENV !== "production" && m.push(gu({
    get compat() {
      return x.compat;
    }
  }), Eu);
  {
    var h, v = [uu, process.env.NODE_ENV !== "production" ? function(y) {
      y.root || (y.return ? h.insert(y.return) : y.value && y.type !== Kn && h.insert(y.value + "{}"));
    } : lu(function(y) {
      h.insert(y);
    })], b = cu(m.concat(i, v)), T = function(E) {
      return zr(au(E), b);
    };
    p = function(E, $, M, N) {
      h = M, process.env.NODE_ENV !== "production" && $.map !== void 0 && (h = {
        insert: function(d) {
          M.insert(d + $.map);
        }
      }), T(E ? E + "{" + $.styles + "}" : $.styles), N && (x.inserted[$.name] = !0);
    };
  }
  var x = {
    key: t,
    sheet: new qs({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: a,
    registered: {},
    insert: p
  };
  return x.sheet.hydrate(f), x;
}, Vn = { exports: {} }, _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function xu() {
  if (si)
    return _e;
  si = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function N(d) {
    if (typeof d == "object" && d !== null) {
      var U = d.$$typeof;
      switch (U) {
        case r:
          switch (d = d.type, d) {
            case p:
            case m:
            case n:
            case a:
            case i:
            case v:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case f:
                case h:
                case x:
                case T:
                case s:
                  return d;
                default:
                  return U;
              }
          }
        case t:
          return U;
      }
    }
  }
  function w(d) {
    return N(d) === m;
  }
  return _e.AsyncMode = p, _e.ConcurrentMode = m, _e.ContextConsumer = f, _e.ContextProvider = s, _e.Element = r, _e.ForwardRef = h, _e.Fragment = n, _e.Lazy = x, _e.Memo = T, _e.Portal = t, _e.Profiler = a, _e.StrictMode = i, _e.Suspense = v, _e.isAsyncMode = function(d) {
    return w(d) || N(d) === p;
  }, _e.isConcurrentMode = w, _e.isContextConsumer = function(d) {
    return N(d) === f;
  }, _e.isContextProvider = function(d) {
    return N(d) === s;
  }, _e.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, _e.isForwardRef = function(d) {
    return N(d) === h;
  }, _e.isFragment = function(d) {
    return N(d) === n;
  }, _e.isLazy = function(d) {
    return N(d) === x;
  }, _e.isMemo = function(d) {
    return N(d) === T;
  }, _e.isPortal = function(d) {
    return N(d) === t;
  }, _e.isProfiler = function(d) {
    return N(d) === a;
  }, _e.isStrictMode = function(d) {
    return N(d) === i;
  }, _e.isSuspense = function(d) {
    return N(d) === v;
  }, _e.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === m || d === a || d === i || d === v || d === b || typeof d == "object" && d !== null && (d.$$typeof === x || d.$$typeof === T || d.$$typeof === s || d.$$typeof === f || d.$$typeof === h || d.$$typeof === E || d.$$typeof === $ || d.$$typeof === M || d.$$typeof === y);
  }, _e.typeOf = N, _e;
}
var Re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ui;
function Tu() {
  return ui || (ui = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
    function N(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === m || R === a || R === i || R === v || R === b || typeof R == "object" && R !== null && (R.$$typeof === x || R.$$typeof === T || R.$$typeof === s || R.$$typeof === f || R.$$typeof === h || R.$$typeof === E || R.$$typeof === $ || R.$$typeof === M || R.$$typeof === y);
    }
    function w(R) {
      if (typeof R == "object" && R !== null) {
        var Ce = R.$$typeof;
        switch (Ce) {
          case r:
            var q = R.type;
            switch (q) {
              case p:
              case m:
              case n:
              case a:
              case i:
              case v:
                return q;
              default:
                var Ve = q && q.$$typeof;
                switch (Ve) {
                  case f:
                  case h:
                  case x:
                  case T:
                  case s:
                    return Ve;
                  default:
                    return Ce;
                }
            }
          case t:
            return Ce;
        }
      }
    }
    var d = p, U = m, B = f, me = s, pe = r, W = h, ae = n, ue = x, te = T, re = t, ne = a, oe = i, z = v, fe = !1;
    function Fe(R) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(R) || w(R) === p;
    }
    function u(R) {
      return w(R) === m;
    }
    function g(R) {
      return w(R) === f;
    }
    function k(R) {
      return w(R) === s;
    }
    function I(R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }
    function P(R) {
      return w(R) === h;
    }
    function Y(R) {
      return w(R) === n;
    }
    function F(R) {
      return w(R) === x;
    }
    function V(R) {
      return w(R) === T;
    }
    function L(R) {
      return w(R) === t;
    }
    function K(R) {
      return w(R) === a;
    }
    function J(R) {
      return w(R) === i;
    }
    function we(R) {
      return w(R) === v;
    }
    Re.AsyncMode = d, Re.ConcurrentMode = U, Re.ContextConsumer = B, Re.ContextProvider = me, Re.Element = pe, Re.ForwardRef = W, Re.Fragment = ae, Re.Lazy = ue, Re.Memo = te, Re.Portal = re, Re.Profiler = ne, Re.StrictMode = oe, Re.Suspense = z, Re.isAsyncMode = Fe, Re.isConcurrentMode = u, Re.isContextConsumer = g, Re.isContextProvider = k, Re.isElement = I, Re.isForwardRef = P, Re.isFragment = Y, Re.isLazy = F, Re.isMemo = V, Re.isPortal = L, Re.isProfiler = K, Re.isStrictMode = J, Re.isSuspense = we, Re.isValidElementType = N, Re.typeOf = w;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Vn.exports = xu() : Vn.exports = Tu();
var Cu = Vn.exports, ta = Cu, wu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ou = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, na = {};
na[ta.ForwardRef] = wu;
na[ta.Memo] = Ou;
var Pu = !0;
function Jn(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(i) {
    e[i] !== void 0 ? r.push(e[i] + ";") : n += i + " ";
  }), n;
}
var Kt = function(r, t, n) {
  var i = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Pu === !1) && r.registered[i] === void 0 && (r.registered[i] = t.styles);
}, Gt = function(r, t, n) {
  Kt(r, t, n);
  var i = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var a = t;
    do
      r.insert(t === a ? "." + i : "", a, r.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function $u(e) {
  for (var r = 0, t, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var ku = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ci = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Au = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Nu = /[A-Z]|^ms/g, oa = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Zn = function(r) {
  return r.charCodeAt(1) === 45;
}, li = function(r) {
  return r != null && typeof r != "boolean";
}, kn = /* @__PURE__ */ Gi(function(e) {
  return Zn(e) ? e : e.replace(Nu, "-$&").toLowerCase();
}), Ft = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(oa, function(n, i, a) {
          return ir = {
            name: i,
            styles: a,
            next: ir
          }, i;
        });
  }
  return ku[r] !== 1 && !Zn(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Iu = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ju = ["normal", "none", "initial", "inherit", "unset"], Mu = Ft, Du = /^-ms-/, Fu = /-(.)/g, fi = {};
  Ft = function(r, t) {
    if (r === "content" && (typeof t != "string" || ju.indexOf(t) === -1 && !Iu.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = Mu(r, t);
    return n !== "" && !Zn(r) && r.indexOf("-") !== -1 && fi[r] === void 0 && (fi[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Du, "ms-").replace(Fu, function(i, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var ia = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ut(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ia);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return ir = {
          name: t.name,
          styles: t.styles,
          next: ir
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            ir = {
              name: n.name,
              styles: n.styles,
              next: ir
            }, n = n.next;
        var i = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (i += t.map), i;
      }
      return Vu(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var a = ir, s = t(e);
        return ir = a, ut(e, r, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var f = [], p = t.replace(oa, function(h, v, b) {
          var T = "animation" + f.length;
          return f.push("const " + T + " = keyframes`" + b.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + T + "}";
        });
        f.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(f, ["`" + p + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + p + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var m = r[t];
  return m !== void 0 ? m : t;
}
function Vu(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var i = 0; i < t.length; i++)
      n += ut(e, r, t[i]) + ";";
  else
    for (var a in t) {
      var s = t[a];
      if (typeof s != "object")
        r != null && r[s] !== void 0 ? n += a + "{" + r[s] + "}" : li(s) && (n += kn(a) + ":" + Ft(a, s) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ia);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var f = 0; f < s.length; f++)
            li(s[f]) && (n += kn(a) + ":" + Ft(a, s[f]) + ";");
        else {
          var p = ut(e, r, s);
          switch (a) {
            case "animation":
            case "animationName": {
              n += kn(a) + ":" + p + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(Au), n += a + "{" + p + "}";
          }
        }
      }
    }
  return n;
}
var di = /label:\s*([^\s;\n{]+)\s*(;|$)/g, aa;
process.env.NODE_ENV !== "production" && (aa = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ir, Wr = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var i = !0, a = "";
  ir = void 0;
  var s = r[0];
  s == null || s.raw === void 0 ? (i = !1, a += ut(n, t, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(ci), a += s[0]);
  for (var f = 1; f < r.length; f++)
    a += ut(n, t, r[f]), i && (process.env.NODE_ENV !== "production" && s[f] === void 0 && console.error(ci), a += s[f]);
  var p;
  process.env.NODE_ENV !== "production" && (a = a.replace(aa, function(b) {
    return p = b, "";
  })), di.lastIndex = 0;
  for (var m = "", h; (h = di.exec(a)) !== null; )
    m += "-" + // $FlowFixMe we know it's not null
    h[1];
  var v = $u(a) + m;
  return process.env.NODE_ENV !== "production" ? {
    name: v,
    styles: a,
    map: p,
    next: ir,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: v,
    styles: a,
    next: ir
  };
}, Lu = function(r) {
  return r();
}, sa = Qo["useInsertionEffect"] ? Qo["useInsertionEffect"] : !1, Qn = sa || Lu, pi = sa || D.useLayoutEffect, zu = {}.hasOwnProperty, eo = /* @__PURE__ */ D.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Su({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (eo.displayName = "EmotionCacheContext");
eo.Provider;
var Ht = function(r) {
  return /* @__PURE__ */ D.forwardRef(function(t, n) {
    var i = D.useContext(eo);
    return r(t, i, n);
  });
}, Kr = /* @__PURE__ */ D.createContext({});
process.env.NODE_ENV !== "production" && (Kr.displayName = "EmotionThemeContext");
var mi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", hi = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Bu = function(r) {
  var t = r.cache, n = r.serialized, i = r.isStringTag;
  return Kt(t, n, i), Qn(function() {
    return Gt(t, n, i);
  }), null;
}, Yu = /* @__PURE__ */ Ht(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var i = e[mi], a = [n], s = "";
  typeof e.className == "string" ? s = Jn(r.registered, a, e.className) : e.className != null && (s = e.className + " ");
  var f = Wr(a, void 0, D.useContext(Kr));
  if (process.env.NODE_ENV !== "production" && f.name.indexOf("-") === -1) {
    var p = e[hi];
    p && (f = Wr([f, "label:" + p + ";"]));
  }
  s += r.key + "-" + f.name;
  var m = {};
  for (var h in e)
    zu.call(e, h) && h !== "css" && h !== mi && (process.env.NODE_ENV === "production" || h !== hi) && (m[h] = e[h]);
  return m.ref = t, m.className = s, /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Bu, {
    cache: r,
    serialized: f,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ D.createElement(i, m));
});
process.env.NODE_ENV !== "production" && (Yu.displayName = "EmotionCssPropInternal");
var Uu = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, yi = !1, Wu = /* @__PURE__ */ Ht(function(e, r) {
  process.env.NODE_ENV !== "production" && !yi && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), yi = !0);
  var t = e.styles, n = Wr([t], void 0, D.useContext(Kr)), i = D.useRef();
  return pi(function() {
    var a = r.key + "-global", s = new r.sheet.constructor({
      key: a,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), f = !1, p = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return r.sheet.tags.length && (s.before = r.sheet.tags[0]), p !== null && (f = !0, p.setAttribute("data-emotion", a), s.hydrate([p])), i.current = [s, f], function() {
      s.flush();
    };
  }, [r]), pi(function() {
    var a = i.current, s = a[0], f = a[1];
    if (f) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && Gt(r, n.next, !0), s.tags.length) {
      var p = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = p, s.flush();
    }
    r.insert("", n, s, !1);
  }, [r, n.name]), null;
});
process.env.NODE_ENV !== "production" && (Wu.displayName = "EmotionGlobal");
function qu() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Wr(r);
}
var ro = function() {
  var r = qu.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Ku = function e(r) {
  for (var t = r.length, n = 0, i = ""; n < t; n++) {
    var a = r[n];
    if (a != null) {
      var s = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a))
            s = e(a);
          else {
            process.env.NODE_ENV !== "production" && a.styles !== void 0 && a.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var f in a)
              a[f] && f && (s && (s += " "), s += f);
          }
          break;
        }
        default:
          s = a;
      }
      s && (i && (i += " "), i += s);
    }
  }
  return i;
};
function Gu(e, r, t) {
  var n = [], i = Jn(e, n, t);
  return n.length < 2 ? t : i + r(n);
}
var Hu = function(r) {
  var t = r.cache, n = r.serializedArr;
  return Qn(function() {
    for (var i = 0; i < n.length; i++)
      Gt(t, n[i], !1);
  }), null;
}, Xu = /* @__PURE__ */ Ht(function(e, r) {
  var t = !1, n = [], i = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var m = arguments.length, h = new Array(m), v = 0; v < m; v++)
      h[v] = arguments[v];
    var b = Wr(h, r.registered);
    return n.push(b), Kt(r, b, !1), r.key + "-" + b.name;
  }, a = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var m = arguments.length, h = new Array(m), v = 0; v < m; v++)
      h[v] = arguments[v];
    return Gu(r.registered, i, Ku(h));
  }, s = {
    css: i,
    cx: a,
    theme: D.useContext(Kr)
  }, f = e.children(s);
  return t = !0, /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Hu, {
    cache: r,
    serializedArr: n
  }), f);
});
process.env.NODE_ENV !== "production" && (Xu.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var gi = !0, Ju = typeof jest < "u" || typeof vi < "u";
  if (gi && !Ju) {
    var bi = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : gi ? window : global
    ), Ei = "__EMOTION_REACT_" + Uu.version.split(".")[0] + "__";
    bi[Ei] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), bi[Ei] = !0;
  }
}
var Zu = Ys, Qu = function(r) {
  return r !== "theme";
}, _i = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Zu : Qu;
}, Ri = function(r, t, n) {
  var i;
  if (t) {
    var a = t.shouldForwardProp;
    i = r.__emotion_forwardProp && a ? function(s) {
      return r.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof i != "function" && n && (i = r.__emotion_forwardProp), i;
}, Si = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ec = function(r) {
  var t = r.cache, n = r.serialized, i = r.isStringTag;
  return Kt(t, n, i), Qn(function() {
    return Gt(t, n, i);
  }), null;
}, rc = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, i = n && r.__emotion_base || r, a, s;
  t !== void 0 && (a = t.label, s = t.target);
  var f = Ri(r, t, n), p = f || _i(i), m = !p("as");
  return function() {
    var h = arguments, v = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (a !== void 0 && v.push("label:" + a + ";"), h[0] == null || h[0].raw === void 0)
      v.push.apply(v, h);
    else {
      process.env.NODE_ENV !== "production" && h[0][0] === void 0 && console.error(Si), v.push(h[0][0]);
      for (var b = h.length, T = 1; T < b; T++)
        process.env.NODE_ENV !== "production" && h[0][T] === void 0 && console.error(Si), v.push(h[T], h[0][T]);
    }
    var x = Ht(function(y, E, $) {
      var M = m && y.as || i, N = "", w = [], d = y;
      if (y.theme == null) {
        d = {};
        for (var U in y)
          d[U] = y[U];
        d.theme = D.useContext(Kr);
      }
      typeof y.className == "string" ? N = Jn(E.registered, w, y.className) : y.className != null && (N = y.className + " ");
      var B = Wr(v.concat(w), E.registered, d);
      N += E.key + "-" + B.name, s !== void 0 && (N += " " + s);
      var me = m && f === void 0 ? _i(M) : p, pe = {};
      for (var W in y)
        m && W === "as" || // $FlowFixMe
        me(W) && (pe[W] = y[W]);
      return pe.className = N, pe.ref = $, /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(ec, {
        cache: E,
        serialized: B,
        isStringTag: typeof M == "string"
      }), /* @__PURE__ */ D.createElement(M, pe));
    });
    return x.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", x.defaultProps = r.defaultProps, x.__emotion_real = x, x.__emotion_base = i, x.__emotion_styles = v, x.__emotion_forwardProp = f, Object.defineProperty(x, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), x.withComponent = function(y, E) {
      return e(y, Z({}, t, E, {
        shouldForwardProp: Ri(x, E, !0)
      })).apply(void 0, v);
    }, x;
  };
}, tc = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ln = rc.bind();
tc.forEach(function(e) {
  Ln[e] = Ln(e);
});
/**
 * @mui/styled-engine v5.14.17
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function nc(e, r) {
  const t = Ln(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const oc = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, ic = ["values", "unit", "step"], ac = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => Z({}, t, {
    [n.key]: n.val
  }), {});
};
function sc(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, i = rr(e, ic), a = ac(r), s = Object.keys(a);
  function f(b) {
    return `@media (min-width:${typeof r[b] == "number" ? r[b] : b}${t})`;
  }
  function p(b) {
    return `@media (max-width:${(typeof r[b] == "number" ? r[b] : b) - n / 100}${t})`;
  }
  function m(b, T) {
    const x = s.indexOf(T);
    return `@media (min-width:${typeof r[b] == "number" ? r[b] : b}${t}) and (max-width:${(x !== -1 && typeof r[s[x]] == "number" ? r[s[x]] : T) - n / 100}${t})`;
  }
  function h(b) {
    return s.indexOf(b) + 1 < s.length ? m(b, s[s.indexOf(b) + 1]) : f(b);
  }
  function v(b) {
    const T = s.indexOf(b);
    return T === 0 ? f(s[1]) : T === s.length - 1 ? p(s[T]) : m(b, s[s.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return Z({
    keys: s,
    values: a,
    up: f,
    down: p,
    between: m,
    only: h,
    not: v,
    unit: t
  }, i);
}
const uc = {
  borderRadius: 4
}, cc = uc, lc = process.env.NODE_ENV !== "production" ? C.oneOfType([C.number, C.string, C.object, C.array]) : {}, _r = lc;
function ot(e, r) {
  return r ? sr(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const to = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, xi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${to[e]}px)`
};
function hr(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const a = n.breakpoints || xi;
    return r.reduce((s, f, p) => (s[a.up(a.keys[p])] = t(r[p]), s), {});
  }
  if (typeof r == "object") {
    const a = n.breakpoints || xi;
    return Object.keys(r).reduce((s, f) => {
      if (Object.keys(a.values || to).indexOf(f) !== -1) {
        const p = a.up(f);
        s[p] = t(r[f], f);
      } else {
        const p = f;
        s[p] = r[p];
      }
      return s;
    }, {});
  }
  return t(r);
}
function fc(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, i) => {
    const a = e.up(i);
    return n[a] = {}, n;
  }, {})) || {};
}
function dc(e, r) {
  return e.reduce((t, n) => {
    const i = t[n];
    return (!i || Object.keys(i).length === 0) && delete t[n], t;
  }, r);
}
function Xt(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function Vt(e, r, t, n = t) {
  let i;
  return typeof e == "function" ? i = e(t) : Array.isArray(e) ? i = e[t] || n : i = Xt(e, t) || n, r && (i = r(i, n, e)), i;
}
function Se(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: i
  } = e, a = (s) => {
    if (s[r] == null)
      return null;
    const f = s[r], p = s.theme, m = Xt(p, n) || {};
    return hr(s, f, (v) => {
      let b = Vt(m, i, v);
      return v === b && typeof v == "string" && (b = Vt(m, i, `${r}${v === "default" ? "" : Ue(v)}`, v)), t === !1 ? b : {
        [t]: b
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: _r
  } : {}, a.filterProps = [r], a;
}
function pc(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const mc = {
  m: "margin",
  p: "padding"
}, hc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ti = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, yc = pc((e) => {
  if (e.length > 2)
    if (Ti[e])
      e = Ti[e];
    else
      return [e];
  const [r, t] = e.split(""), n = mc[r], i = hc[t] || "";
  return Array.isArray(i) ? i.map((a) => n + a) : [n + i];
}), Jt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Zt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], vc = [...Jt, ...Zt];
function lt(e, r, t, n) {
  var i;
  const a = (i = Xt(e, r, !1)) != null ? i : t;
  return typeof a == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), a * s) : Array.isArray(a) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > a.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${s} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), a[s]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ua(e) {
  return lt(e, "spacing", 8, "spacing");
}
function ft(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function gc(e, r) {
  return (t) => e.reduce((n, i) => (n[i] = ft(r, t), n), {});
}
function bc(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const i = yc(t), a = gc(i, n), s = e[t];
  return hr(e, s, a);
}
function ca(e, r) {
  const t = ua(e.theme);
  return Object.keys(e).map((n) => bc(e, r, n, t)).reduce(ot, {});
}
function Ie(e) {
  return ca(e, Jt);
}
Ie.propTypes = process.env.NODE_ENV !== "production" ? Jt.reduce((e, r) => (e[r] = _r, e), {}) : {};
Ie.filterProps = Jt;
function je(e) {
  return ca(e, Zt);
}
je.propTypes = process.env.NODE_ENV !== "production" ? Zt.reduce((e, r) => (e[r] = _r, e), {}) : {};
je.filterProps = Zt;
process.env.NODE_ENV !== "production" && vc.reduce((e, r) => (e[r] = _r, e), {});
function Ec(e = 8) {
  if (e.mui)
    return e;
  const r = ua({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const s = r(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function Qt(...e) {
  const r = e.reduce((n, i) => (i.filterProps.forEach((a) => {
    n[a] = i;
  }), n), {}), t = (n) => Object.keys(n).reduce((i, a) => r[a] ? ot(i, r[a](n)) : i, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, t.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), t;
}
function cr(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const _c = Se({
  prop: "border",
  themeKey: "borders",
  transform: cr
}), Rc = Se({
  prop: "borderTop",
  themeKey: "borders",
  transform: cr
}), Sc = Se({
  prop: "borderRight",
  themeKey: "borders",
  transform: cr
}), xc = Se({
  prop: "borderBottom",
  themeKey: "borders",
  transform: cr
}), Tc = Se({
  prop: "borderLeft",
  themeKey: "borders",
  transform: cr
}), Cc = Se({
  prop: "borderColor",
  themeKey: "palette"
}), wc = Se({
  prop: "borderTopColor",
  themeKey: "palette"
}), Oc = Se({
  prop: "borderRightColor",
  themeKey: "palette"
}), Pc = Se({
  prop: "borderBottomColor",
  themeKey: "palette"
}), $c = Se({
  prop: "borderLeftColor",
  themeKey: "palette"
}), en = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = lt(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: ft(r, n)
    });
    return hr(e, e.borderRadius, t);
  }
  return null;
};
en.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: _r
} : {};
en.filterProps = ["borderRadius"];
Qt(_c, Rc, Sc, xc, Tc, Cc, wc, Oc, Pc, $c, en);
const rn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = lt(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: ft(r, n)
    });
    return hr(e, e.gap, t);
  }
  return null;
};
rn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: _r
} : {};
rn.filterProps = ["gap"];
const tn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = lt(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: ft(r, n)
    });
    return hr(e, e.columnGap, t);
  }
  return null;
};
tn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: _r
} : {};
tn.filterProps = ["columnGap"];
const nn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = lt(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: ft(r, n)
    });
    return hr(e, e.rowGap, t);
  }
  return null;
};
nn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: _r
} : {};
nn.filterProps = ["rowGap"];
const kc = Se({
  prop: "gridColumn"
}), Ac = Se({
  prop: "gridRow"
}), Nc = Se({
  prop: "gridAutoFlow"
}), Ic = Se({
  prop: "gridAutoColumns"
}), jc = Se({
  prop: "gridAutoRows"
}), Mc = Se({
  prop: "gridTemplateColumns"
}), Dc = Se({
  prop: "gridTemplateRows"
}), Fc = Se({
  prop: "gridTemplateAreas"
}), Vc = Se({
  prop: "gridArea"
});
Qt(rn, tn, nn, kc, Ac, Nc, Ic, jc, Mc, Dc, Fc, Vc);
function Br(e, r) {
  return r === "grey" ? r : e;
}
const Lc = Se({
  prop: "color",
  themeKey: "palette",
  transform: Br
}), zc = Se({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Br
}), Bc = Se({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Br
});
Qt(Lc, zc, Bc);
function He(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Yc = Se({
  prop: "width",
  transform: He
}), no = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, i;
      const a = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || to[t];
      return a ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${a}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: a
      } : {
        maxWidth: He(t)
      };
    };
    return hr(e, e.maxWidth, r);
  }
  return null;
};
no.filterProps = ["maxWidth"];
const Uc = Se({
  prop: "minWidth",
  transform: He
}), Wc = Se({
  prop: "height",
  transform: He
}), qc = Se({
  prop: "maxHeight",
  transform: He
}), Kc = Se({
  prop: "minHeight",
  transform: He
});
Se({
  prop: "size",
  cssProperty: "width",
  transform: He
});
Se({
  prop: "size",
  cssProperty: "height",
  transform: He
});
const Gc = Se({
  prop: "boxSizing"
});
Qt(Yc, no, Uc, Wc, qc, Kc, Gc);
const Hc = {
  // borders
  border: {
    themeKey: "borders",
    transform: cr
  },
  borderTop: {
    themeKey: "borders",
    transform: cr
  },
  borderRight: {
    themeKey: "borders",
    transform: cr
  },
  borderBottom: {
    themeKey: "borders",
    transform: cr
  },
  borderLeft: {
    themeKey: "borders",
    transform: cr
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: en
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Br
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Br
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Br
  },
  // spacing
  p: {
    style: je
  },
  pt: {
    style: je
  },
  pr: {
    style: je
  },
  pb: {
    style: je
  },
  pl: {
    style: je
  },
  px: {
    style: je
  },
  py: {
    style: je
  },
  padding: {
    style: je
  },
  paddingTop: {
    style: je
  },
  paddingRight: {
    style: je
  },
  paddingBottom: {
    style: je
  },
  paddingLeft: {
    style: je
  },
  paddingX: {
    style: je
  },
  paddingY: {
    style: je
  },
  paddingInline: {
    style: je
  },
  paddingInlineStart: {
    style: je
  },
  paddingInlineEnd: {
    style: je
  },
  paddingBlock: {
    style: je
  },
  paddingBlockStart: {
    style: je
  },
  paddingBlockEnd: {
    style: je
  },
  m: {
    style: Ie
  },
  mt: {
    style: Ie
  },
  mr: {
    style: Ie
  },
  mb: {
    style: Ie
  },
  ml: {
    style: Ie
  },
  mx: {
    style: Ie
  },
  my: {
    style: Ie
  },
  margin: {
    style: Ie
  },
  marginTop: {
    style: Ie
  },
  marginRight: {
    style: Ie
  },
  marginBottom: {
    style: Ie
  },
  marginLeft: {
    style: Ie
  },
  marginX: {
    style: Ie
  },
  marginY: {
    style: Ie
  },
  marginInline: {
    style: Ie
  },
  marginInlineStart: {
    style: Ie
  },
  marginInlineEnd: {
    style: Ie
  },
  marginBlock: {
    style: Ie
  },
  marginBlockStart: {
    style: Ie
  },
  marginBlockEnd: {
    style: Ie
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: rn
  },
  rowGap: {
    style: nn
  },
  columnGap: {
    style: tn
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: He
  },
  maxWidth: {
    style: no
  },
  minWidth: {
    transform: He
  },
  height: {
    transform: He
  },
  maxHeight: {
    transform: He
  },
  minHeight: {
    transform: He
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, oo = Hc;
function Xc(...e) {
  const r = e.reduce((n, i) => n.concat(Object.keys(i)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Jc(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Zc() {
  function e(t, n, i, a) {
    const s = {
      [t]: n,
      theme: i
    }, f = a[t];
    if (!f)
      return {
        [t]: n
      };
    const {
      cssProperty: p = t,
      themeKey: m,
      transform: h,
      style: v
    } = f;
    if (n == null)
      return null;
    if (m === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const b = Xt(i, m) || {};
    return v ? v(s) : hr(s, n, (x) => {
      let y = Vt(b, h, x);
      return x === y && typeof x == "string" && (y = Vt(b, h, `${t}${x === "default" ? "" : Ue(x)}`, x)), p === !1 ? y : {
        [p]: y
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: i,
      theme: a = {}
    } = t || {};
    if (!i)
      return null;
    const s = (n = a.unstable_sxConfig) != null ? n : oo;
    function f(p) {
      let m = p;
      if (typeof p == "function")
        m = p(a);
      else if (typeof p != "object")
        return p;
      if (!m)
        return null;
      const h = fc(a.breakpoints), v = Object.keys(h);
      let b = h;
      return Object.keys(m).forEach((T) => {
        const x = Jc(m[T], a);
        if (x != null)
          if (typeof x == "object")
            if (s[T])
              b = ot(b, e(T, x, a, s));
            else {
              const y = hr({
                theme: a
              }, x, (E) => ({
                [T]: E
              }));
              Xc(y, x) ? b[T] = r({
                sx: x,
                theme: a
              }) : b = ot(b, y);
            }
          else
            b = ot(b, e(T, x, a, s));
      }), dc(v, b);
    }
    return Array.isArray(i) ? i.map(f) : f(i);
  }
  return r;
}
const la = Zc();
la.filterProps = ["sx"];
const io = la, Qc = ["breakpoints", "palette", "spacing", "shape"];
function ao(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: i,
    shape: a = {}
  } = e, s = rr(e, Qc), f = sc(t), p = Ec(i);
  let m = sr({
    breakpoints: f,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Z({
      mode: "light"
    }, n),
    spacing: p,
    shape: Z({}, cc, a)
  }, s);
  return m = r.reduce((h, v) => sr(h, v), m), m.unstable_sxConfig = Z({}, oo, s == null ? void 0 : s.unstable_sxConfig), m.unstable_sx = function(v) {
    return io({
      sx: v,
      theme: this
    });
  }, m;
}
function el(e) {
  return Object.keys(e).length === 0;
}
function rl(e = null) {
  const r = D.useContext(Kr);
  return !r || el(r) ? e : r;
}
const tl = ao();
function nl(e = tl) {
  return rl(e);
}
function fa(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = fa(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Qe() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = fa(e)) && (n && (n += " "), n += r);
  return n;
}
const ol = ["variant"];
function Ci(e) {
  return e.length === 0;
}
function da(e) {
  const {
    variant: r
  } = e, t = rr(e, ol);
  let n = r || "";
  return Object.keys(t).sort().forEach((i) => {
    i === "color" ? n += Ci(n) ? e[i] : Ue(e[i]) : n += `${Ci(n) ? i : Ue(i)}${Ue(e[i].toString())}`;
  }), n;
}
const il = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function al(e) {
  return Object.keys(e).length === 0;
}
function sl(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const ul = (e, r) => r.components && r.components[e] && r.components[e].styleOverrides ? r.components[e].styleOverrides : null, Lt = (e) => {
  const r = {};
  return e && e.forEach((t) => {
    const n = da(t.props);
    r[n] = t.style;
  }), r;
}, cl = (e, r) => {
  let t = [];
  return r && r.components && r.components[e] && r.components[e].variants && (t = r.components[e].variants), Lt(t);
}, zt = (e, r, t) => {
  const {
    ownerState: n = {}
  } = e, i = [];
  return t && t.forEach((a) => {
    let s = !0;
    Object.keys(a.props).forEach((f) => {
      n[f] !== a.props[f] && e[f] !== a.props[f] && (s = !1);
    }), s && i.push(r[da(a.props)]);
  }), i;
}, ll = (e, r, t, n) => {
  var i;
  const a = t == null || (i = t.components) == null || (i = i[n]) == null ? void 0 : i.variants;
  return zt(e, r, a);
};
function jt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const fl = ao(), wi = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Mt({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return al(r) ? e : r[t] || r;
}
function dl(e) {
  return e ? (r, t) => t[e] : null;
}
const Oi = ({
  styledArg: e,
  props: r,
  defaultTheme: t,
  themeId: n
}) => {
  const i = e(Z({}, r, {
    theme: Mt(Z({}, r, {
      defaultTheme: t,
      themeId: n
    }))
  }));
  let a;
  if (i && i.variants && (a = i.variants, delete i.variants), a) {
    const s = zt(r, Lt(a), a);
    return [i, ...s];
  }
  return i;
};
function pl(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = fl,
    rootShouldForwardProp: n = jt,
    slotShouldForwardProp: i = jt
  } = e, a = (s) => io(Z({}, s, {
    theme: Mt(Z({}, s, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return a.__mui_systemSx = !0, (s, f = {}) => {
    oc(s, (w) => w.filter((d) => !(d != null && d.__mui_systemSx)));
    const {
      name: p,
      slot: m,
      skipVariantsResolver: h,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = dl(wi(m))
    } = f, T = rr(f, il), x = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), y = v || !1;
    let E;
    process.env.NODE_ENV !== "production" && p && (E = `${p}-${wi(m || "Root")}`);
    let $ = jt;
    m === "Root" || m === "root" ? $ = n : m ? $ = i : sl(s) && ($ = void 0);
    const M = nc(s, Z({
      shouldForwardProp: $,
      label: E
    }, T)), N = (w, ...d) => {
      const U = d ? d.map((W) => {
        if (typeof W == "function" && W.__emotion_real !== W)
          return (ae) => Oi({
            styledArg: W,
            props: ae,
            defaultTheme: t,
            themeId: r
          });
        if (Er(W)) {
          let ae = W, ue;
          return W && W.variants && (ue = W.variants, delete ae.variants, ae = (te) => {
            let re = W;
            return zt(te, Lt(ue), ue).forEach((oe) => {
              re = sr(re, oe);
            }), re;
          }), ae;
        }
        return W;
      }) : [];
      let B = w;
      if (Er(w)) {
        let W;
        w && w.variants && (W = w.variants, delete B.variants, B = (ae) => {
          let ue = w;
          return zt(ae, Lt(W), W).forEach((re) => {
            ue = sr(ue, re);
          }), ue;
        });
      } else
        typeof w == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        w.__emotion_real !== w && (B = (W) => Oi({
          styledArg: w,
          props: W,
          defaultTheme: t,
          themeId: r
        }));
      p && b && U.push((W) => {
        const ae = Mt(Z({}, W, {
          defaultTheme: t,
          themeId: r
        })), ue = ul(p, ae);
        if (ue) {
          const te = {};
          return Object.entries(ue).forEach(([re, ne]) => {
            te[re] = typeof ne == "function" ? ne(Z({}, W, {
              theme: ae
            })) : ne;
          }), b(W, te);
        }
        return null;
      }), p && !x && U.push((W) => {
        const ae = Mt(Z({}, W, {
          defaultTheme: t,
          themeId: r
        }));
        return ll(W, cl(p, ae), ae, p);
      }), y || U.push(a);
      const me = U.length - d.length;
      if (Array.isArray(w) && me > 0) {
        const W = new Array(me).fill("");
        B = [...w, ...W], B.raw = [...w.raw, ...W];
      }
      const pe = M(B, ...U);
      if (process.env.NODE_ENV !== "production") {
        let W;
        p && (W = `${p}${Ue(m || "")}`), W === void 0 && (W = `Styled(${Ts(s)})`), pe.displayName = W;
      }
      return s.muiName && (pe.muiName = s.muiName), pe;
    };
    return M.withConfig && (N.withConfig = M.withConfig), N;
  };
}
function ml(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  return !r || !r.components || !r.components[t] || !r.components[t].defaultProps ? n : Wn(r.components[t].defaultProps, n);
}
function hl({
  props: e,
  name: r,
  defaultTheme: t,
  themeId: n
}) {
  let i = nl(t);
  return n && (i = i[n] || i), ml({
    theme: i,
    name: r,
    props: e
  });
}
function so(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Math.min(Math.max(r, e), t);
}
function yl(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Or(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Or(yl(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Yr(9, e));
  let n = e.substring(r + 1, e.length - 1), i;
  if (t === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Yr(10, i));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: t,
    values: n,
    colorSpace: i
  };
}
function on(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((i, a) => a < 3 ? parseInt(i, 10) : i) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function vl(e) {
  e = Or(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, i = r[2] / 100, a = n * Math.min(i, 1 - i), s = (m, h = (m + t / 30) % 12) => i - a * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let f = "rgb";
  const p = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (f += "a", p.push(r[3])), on({
    type: f,
    values: p
  });
}
function Pi(e) {
  e = Or(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Or(vl(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function $i(e, r) {
  const t = Pi(e), n = Pi(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function $t(e, r) {
  return e = Or(e), r = so(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, on(e);
}
function gl(e, r) {
  if (e = Or(e), r = so(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return on(e);
}
function bl(e, r) {
  if (e = Or(e), r = so(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return on(e);
}
function El(e, r) {
  return Z({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
const _l = ["mode", "contrastThreshold", "tonalOffset"], ki = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: it.white,
    default: it.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, An = {
  text: {
    primary: it.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: it.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Ai(e, r, t, n) {
  const i = n.light || n, a = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = bl(e.main, i) : r === "dark" && (e.dark = gl(e.main, a)));
}
function Rl(e = "light") {
  return e === "dark" ? {
    main: Dr[200],
    light: Dr[50],
    dark: Dr[400]
  } : {
    main: Dr[700],
    light: Dr[400],
    dark: Dr[800]
  };
}
function Sl(e = "light") {
  return e === "dark" ? {
    main: Mr[200],
    light: Mr[50],
    dark: Mr[400]
  } : {
    main: Mr[500],
    light: Mr[300],
    dark: Mr[700]
  };
}
function xl(e = "light") {
  return e === "dark" ? {
    main: jr[500],
    light: jr[300],
    dark: jr[700]
  } : {
    main: jr[700],
    light: jr[400],
    dark: jr[800]
  };
}
function Tl(e = "light") {
  return e === "dark" ? {
    main: Fr[400],
    light: Fr[300],
    dark: Fr[700]
  } : {
    main: Fr[700],
    light: Fr[500],
    dark: Fr[900]
  };
}
function Cl(e = "light") {
  return e === "dark" ? {
    main: Vr[400],
    light: Vr[300],
    dark: Vr[700]
  } : {
    main: Vr[800],
    light: Vr[500],
    dark: Vr[900]
  };
}
function wl(e = "light") {
  return e === "dark" ? {
    main: rt[400],
    light: rt[300],
    dark: rt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: rt[500],
    dark: rt[900]
  };
}
function Ol(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, i = rr(e, _l), a = e.primary || Rl(r), s = e.secondary || Sl(r), f = e.error || xl(r), p = e.info || Tl(r), m = e.success || Cl(r), h = e.warning || wl(r);
  function v(y) {
    const E = $i(y, An.text.primary) >= t ? An.text.primary : ki.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const $ = $i(y, E);
      $ < 3 && console.error([`MUI: The contrast ratio of ${$}:1 for ${E} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const b = ({
    color: y,
    name: E,
    mainShade: $ = 500,
    lightShade: M = 300,
    darkShade: N = 700
  }) => {
    if (y = Z({}, y), !y.main && y[$] && (y.main = y[$]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${$}\` property.` : Yr(11, E ? ` (${E})` : "", $));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Yr(12, E ? ` (${E})` : "", JSON.stringify(y.main)));
    return Ai(y, "light", M, n), Ai(y, "dark", N, n), y.contrastText || (y.contrastText = v(y.main)), y;
  }, T = {
    dark: An,
    light: ki
  };
  return process.env.NODE_ENV !== "production" && (T[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), sr(Z({
    // A collection of common colors.
    common: Z({}, it),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: b({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: b({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: b({
      color: f,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: b({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: b({
      color: p,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: b({
      color: m,
      name: "success"
    }),
    // The grey colors.
    grey: ss,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: v,
    // Generate a rich color object.
    augmentColor: b,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, T[r]), i);
}
const Pl = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function $l(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ni = {
  textTransform: "uppercase"
}, Ii = '"Roboto", "Helvetica", "Arial", sans-serif';
function kl(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = Ii,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: a = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: f = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: m = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: v
  } = t, b = rr(t, Pl);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof m != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const T = i / 14, x = v || (($) => `${$ / m * T}rem`), y = ($, M, N, w, d) => Z({
    fontFamily: n,
    fontWeight: $,
    fontSize: x(M),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: N
  }, n === Ii ? {
    letterSpacing: `${$l(w / M)}em`
  } : {}, d, h), E = {
    h1: y(a, 96, 1.167, -1.5),
    h2: y(a, 60, 1.2, -0.5),
    h3: y(s, 48, 1.167, 0),
    h4: y(s, 34, 1.235, 0.25),
    h5: y(s, 24, 1.334, 0),
    h6: y(f, 20, 1.6, 0.15),
    subtitle1: y(s, 16, 1.75, 0.15),
    subtitle2: y(f, 14, 1.57, 0.1),
    body1: y(s, 16, 1.5, 0.15),
    body2: y(s, 14, 1.43, 0.15),
    button: y(f, 14, 1.75, 0.4, Ni),
    caption: y(s, 12, 1.66, 0.4),
    overline: y(s, 12, 2.66, 1, Ni),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return sr(Z({
    htmlFontSize: m,
    pxToRem: x,
    fontFamily: n,
    fontSize: i,
    fontWeightLight: a,
    fontWeightRegular: s,
    fontWeightMedium: f,
    fontWeightBold: p
  }, E), b, {
    clone: !1
    // No need to clone deep
  });
}
const Al = 0.2, Nl = 0.14, Il = 0.12;
function $e(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Al})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Nl})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Il})`].join(",");
}
const jl = ["none", $e(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), $e(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), $e(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), $e(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), $e(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), $e(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), $e(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), $e(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), $e(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), $e(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), $e(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), $e(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), $e(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), $e(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), $e(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), $e(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), $e(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), $e(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), $e(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), $e(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), $e(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), $e(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), $e(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), $e(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ml = jl, Dl = ["duration", "easing", "delay"], Fl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Vl = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ji(e) {
  return `${Math.round(e)}ms`;
}
function Ll(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function zl(e) {
  const r = Z({}, Fl, e.easing), t = Z({}, Vl, e.duration);
  return Z({
    getAutoHeightDuration: Ll,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = t.standard,
        easing: f = r.easeInOut,
        delay: p = 0
      } = a, m = rr(a, Dl);
      if (process.env.NODE_ENV !== "production") {
        const h = (b) => typeof b == "string", v = (b) => !isNaN(parseFloat(b));
        !h(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !v(s) && !h(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), h(f) || console.error('MUI: Argument "easing" must be a string.'), !v(p) && !h(p) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(m).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(m).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((h) => `${h} ${typeof s == "string" ? s : ji(s)} ${f} ${typeof p == "string" ? p : ji(p)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Bl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Yl = Bl, Ul = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Wl(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: i = {},
    typography: a = {}
  } = e, s = rr(e, Ul);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Yr(18));
  const f = Ol(n), p = ao(e);
  let m = sr(p, {
    mixins: El(p.breakpoints, t),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ml.slice(),
    typography: kl(f, a),
    transitions: zl(i),
    zIndex: Z({}, Yl)
  });
  if (m = sr(m, s), m = r.reduce((h, v) => sr(h, v), m), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (b, T) => {
      let x;
      for (x in b) {
        const y = b[x];
        if (h.indexOf(x) !== -1 && Object.keys(y).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = Yt("", x);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${x}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: y
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[x] = {};
        }
      }
    };
    Object.keys(m.components).forEach((b) => {
      const T = m.components[b].styleOverrides;
      T && b.indexOf("Mui") === 0 && v(T, b);
    });
  }
  return m.unstable_sxConfig = Z({}, oo, s == null ? void 0 : s.unstable_sxConfig), m.unstable_sx = function(v) {
    return io({
      sx: v,
      theme: this
    });
  }, m;
}
const ql = Wl(), pa = ql;
function uo({
  props: e,
  name: r
}) {
  return hl({
    props: e,
    name: r,
    defaultTheme: pa,
    themeId: Ki
  });
}
const ma = (e) => jt(e) && e !== "classes", Kl = pl({
  themeId: Ki,
  defaultTheme: pa,
  rootShouldForwardProp: ma
}), Gr = Kl;
function zn(e, r) {
  return zn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zn(e, r);
}
function Gl(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, zn(e, r);
}
const Mi = Lr.createContext(null);
function Hl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function co(e, r) {
  var t = function(a) {
    return r && D.isValidElement(a) ? r(a) : a;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && D.Children.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    n[i.key] = t(i);
  }), n;
}
function Xl(e, r) {
  e = e || {}, r = r || {};
  function t(h) {
    return h in r ? r[h] : e[h];
  }
  var n = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in r ? i.length && (n[a] = i, i = []) : i.push(a);
  var s, f = {};
  for (var p in r) {
    if (n[p])
      for (s = 0; s < n[p].length; s++) {
        var m = n[p][s];
        f[n[p][s]] = t(m);
      }
    f[p] = t(p);
  }
  for (s = 0; s < i.length; s++)
    f[i[s]] = t(i[s]);
  return f;
}
function wr(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function Jl(e, r) {
  return co(e.children, function(t) {
    return D.cloneElement(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: wr(t, "appear", e),
      enter: wr(t, "enter", e),
      exit: wr(t, "exit", e)
    });
  });
}
function Zl(e, r, t) {
  var n = co(e.children), i = Xl(r, n);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (D.isValidElement(s)) {
      var f = a in r, p = a in n, m = r[a], h = D.isValidElement(m) && !m.props.in;
      p && (!f || h) ? i[a] = D.cloneElement(s, {
        onExited: t.bind(null, s),
        in: !0,
        exit: wr(s, "exit", e),
        enter: wr(s, "enter", e)
      }) : !p && f && !h ? i[a] = D.cloneElement(s, {
        in: !1
      }) : p && f && D.isValidElement(m) && (i[a] = D.cloneElement(s, {
        onExited: t.bind(null, s),
        in: m.props.in,
        exit: wr(s, "exit", e),
        enter: wr(s, "enter", e)
      }));
    }
  }), i;
}
var Ql = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, ef = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, lo = /* @__PURE__ */ function(e) {
  Gl(r, e);
  function r(n, i) {
    var a;
    a = e.call(this, n, i) || this;
    var s = a.handleExited.bind(Hl(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, a;
  }
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(i, a) {
    var s = a.children, f = a.handleExited, p = a.firstRender;
    return {
      children: p ? Jl(i, f) : Zl(i, s, f),
      firstRender: !1
    };
  }, t.handleExited = function(i, a) {
    var s = co(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(f) {
      var p = Z({}, f.children);
      return delete p[i.key], {
        children: p
      };
    }));
  }, t.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, f = rr(i, ["component", "childFactory"]), p = this.state.contextValue, m = Ql(this.state.children).map(s);
    return delete f.appear, delete f.enter, delete f.exit, a === null ? /* @__PURE__ */ Lr.createElement(Mi.Provider, {
      value: p
    }, m) : /* @__PURE__ */ Lr.createElement(Mi.Provider, {
      value: p
    }, /* @__PURE__ */ Lr.createElement(a, f, m));
  }, r;
}(Lr.Component);
lo.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: C.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: C.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: C.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: C.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: C.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: C.func
} : {};
lo.defaultProps = ef;
const rf = lo;
function ha(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: s,
    in: f,
    onExited: p,
    timeout: m
  } = e, [h, v] = D.useState(!1), b = Qe(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), T = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, x = Qe(t.child, h && t.childLeaving, n && t.childPulsate);
  return !f && !h && v(!0), D.useEffect(() => {
    if (!f && p != null) {
      const y = setTimeout(p, m);
      return () => {
        clearTimeout(y);
      };
    }
  }, [p, f, m]), /* @__PURE__ */ ar.jsx("span", {
    className: b,
    style: T,
    children: /* @__PURE__ */ ar.jsx("span", {
      className: x
    })
  });
}
process.env.NODE_ENV !== "production" && (ha.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: C.object.isRequired,
  className: C.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: C.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: C.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: C.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: C.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: C.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: C.number,
  /**
   * exit delay
   */
  timeout: C.number.isRequired
});
const tf = qn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), er = tf, nf = ["center", "classes", "className"];
let an = (e) => e, Di, Fi, Vi, Li;
const Bn = 550, of = 80, af = ro(Di || (Di = an`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), sf = ro(Fi || (Fi = an`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), uf = ro(Vi || (Vi = an`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), cf = Gr("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), lf = Gr(ha, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Li || (Li = an`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), er.rippleVisible, af, Bn, ({
  theme: e
}) => e.transitions.easing.easeInOut, er.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, er.child, er.childLeaving, sf, Bn, ({
  theme: e
}) => e.transitions.easing.easeInOut, er.childPulsate, uf, ({
  theme: e
}) => e.transitions.easing.easeInOut), ya = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = uo({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s
  } = n, f = rr(n, nf), [p, m] = D.useState([]), h = D.useRef(0), v = D.useRef(null);
  D.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [p]);
  const b = D.useRef(!1), T = D.useRef(0), x = D.useRef(null), y = D.useRef(null);
  D.useEffect(() => () => {
    T.current && clearTimeout(T.current);
  }, []);
  const E = D.useCallback((w) => {
    const {
      pulsate: d,
      rippleX: U,
      rippleY: B,
      rippleSize: me,
      cb: pe
    } = w;
    m((W) => [...W, /* @__PURE__ */ ar.jsx(lf, {
      classes: {
        ripple: Qe(a.ripple, er.ripple),
        rippleVisible: Qe(a.rippleVisible, er.rippleVisible),
        ripplePulsate: Qe(a.ripplePulsate, er.ripplePulsate),
        child: Qe(a.child, er.child),
        childLeaving: Qe(a.childLeaving, er.childLeaving),
        childPulsate: Qe(a.childPulsate, er.childPulsate)
      },
      timeout: Bn,
      pulsate: d,
      rippleX: U,
      rippleY: B,
      rippleSize: me
    }, h.current)]), h.current += 1, v.current = pe;
  }, [a]), $ = D.useCallback((w = {}, d = {}, U = () => {
  }) => {
    const {
      pulsate: B = !1,
      center: me = i || d.pulsate,
      fakeElement: pe = !1
      // For test purposes
    } = d;
    if ((w == null ? void 0 : w.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (b.current = !0);
    const W = pe ? null : y.current, ae = W ? W.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let ue, te, re;
    if (me || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      ue = Math.round(ae.width / 2), te = Math.round(ae.height / 2);
    else {
      const {
        clientX: ne,
        clientY: oe
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      ue = Math.round(ne - ae.left), te = Math.round(oe - ae.top);
    }
    if (me)
      re = Math.sqrt((2 * ae.width ** 2 + ae.height ** 2) / 3), re % 2 === 0 && (re += 1);
    else {
      const ne = Math.max(Math.abs((W ? W.clientWidth : 0) - ue), ue) * 2 + 2, oe = Math.max(Math.abs((W ? W.clientHeight : 0) - te), te) * 2 + 2;
      re = Math.sqrt(ne ** 2 + oe ** 2);
    }
    w != null && w.touches ? x.current === null && (x.current = () => {
      E({
        pulsate: B,
        rippleX: ue,
        rippleY: te,
        rippleSize: re,
        cb: U
      });
    }, T.current = setTimeout(() => {
      x.current && (x.current(), x.current = null);
    }, of)) : E({
      pulsate: B,
      rippleX: ue,
      rippleY: te,
      rippleSize: re,
      cb: U
    });
  }, [i, E]), M = D.useCallback(() => {
    $({}, {
      pulsate: !0
    });
  }, [$]), N = D.useCallback((w, d) => {
    if (clearTimeout(T.current), (w == null ? void 0 : w.type) === "touchend" && x.current) {
      x.current(), x.current = null, T.current = setTimeout(() => {
        N(w, d);
      });
      return;
    }
    x.current = null, m((U) => U.length > 0 ? U.slice(1) : U), v.current = d;
  }, []);
  return D.useImperativeHandle(t, () => ({
    pulsate: M,
    start: $,
    stop: N
  }), [M, $, N]), /* @__PURE__ */ ar.jsx(cf, Z({
    className: Qe(er.root, a.root, s),
    ref: y
  }, f, {
    children: /* @__PURE__ */ ar.jsx(rf, {
      component: null,
      exit: !0,
      children: p
    })
  }));
});
process.env.NODE_ENV !== "production" && (ya.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: C.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string
});
const ff = ya;
function df(e) {
  return Yt("MuiButtonBase", e);
}
const pf = qn("MuiButtonBase", ["root", "disabled", "focusVisible"]), mf = pf, hf = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], yf = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: i
  } = e, s = qi({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, df, i);
  return t && n && (s.root += ` ${n}`), s;
}, vf = Gr("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${mf.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), va = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = uo({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: s,
    className: f,
    component: p = "button",
    disabled: m = !1,
    disableRipple: h = !1,
    disableTouchRipple: v = !1,
    focusRipple: b = !1,
    LinkComponent: T = "a",
    onBlur: x,
    onClick: y,
    onContextMenu: E,
    onDragLeave: $,
    onFocus: M,
    onFocusVisible: N,
    onKeyDown: w,
    onKeyUp: d,
    onMouseDown: U,
    onMouseLeave: B,
    onMouseUp: me,
    onTouchEnd: pe,
    onTouchMove: W,
    onTouchStart: ae,
    tabIndex: ue = 0,
    TouchRippleProps: te,
    touchRippleRef: re,
    type: ne
  } = n, oe = rr(n, hf), z = D.useRef(null), fe = D.useRef(null), Fe = ei(fe, re), {
    isFocusVisibleRef: u,
    onFocus: g,
    onBlur: k,
    ref: I
  } = Ds(), [P, Y] = D.useState(!1);
  m && P && Y(!1), D.useImperativeHandle(i, () => ({
    focusVisible: () => {
      Y(!0), z.current.focus();
    }
  }), []);
  const [F, V] = D.useState(!1);
  D.useEffect(() => {
    V(!0);
  }, []);
  const L = F && !h && !m;
  D.useEffect(() => {
    P && b && !h && F && fe.current.pulsate();
  }, [h, b, P, F]);
  function K(Q, Sr, pr = v) {
    return Ot((kr) => (Sr && Sr(kr), !pr && fe.current && fe.current[Q](kr), !0));
  }
  const J = K("start", U), we = K("stop", E), R = K("stop", $), Ce = K("stop", me), q = K("stop", (Q) => {
    P && Q.preventDefault(), B && B(Q);
  }), Ve = K("start", ae), We = K("stop", pe), Je = K("stop", W), Pr = K("stop", (Q) => {
    k(Q), u.current === !1 && Y(!1), x && x(Q);
  }, !1), fr = Ot((Q) => {
    z.current || (z.current = Q.currentTarget), g(Q), u.current === !0 && (Y(!0), N && N(Q)), M && M(Q);
  }), qe = () => {
    const Q = z.current;
    return p && p !== "button" && !(Q.tagName === "A" && Q.href);
  }, tr = D.useRef(!1), yr = Ot((Q) => {
    b && !tr.current && P && fe.current && Q.key === " " && (tr.current = !0, fe.current.stop(Q, () => {
      fe.current.start(Q);
    })), Q.target === Q.currentTarget && qe() && Q.key === " " && Q.preventDefault(), w && w(Q), Q.target === Q.currentTarget && qe() && Q.key === "Enter" && !m && (Q.preventDefault(), y && y(Q));
  }), $r = Ot((Q) => {
    b && Q.key === " " && fe.current && P && !Q.defaultPrevented && (tr.current = !1, fe.current.stop(Q, () => {
      fe.current.pulsate(Q);
    })), d && d(Q), y && Q.target === Q.currentTarget && qe() && Q.key === " " && !Q.defaultPrevented && y(Q);
  });
  let dr = p;
  dr === "button" && (oe.href || oe.to) && (dr = T);
  const Ze = {};
  dr === "button" ? (Ze.type = ne === void 0 ? "button" : ne, Ze.disabled = m) : (!oe.href && !oe.to && (Ze.role = "button"), m && (Ze["aria-disabled"] = m));
  const Rr = ei(t, I, z);
  process.env.NODE_ENV !== "production" && D.useEffect(() => {
    L && !fe.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [L]);
  const nr = Z({}, n, {
    centerRipple: a,
    component: p,
    disabled: m,
    disableRipple: h,
    disableTouchRipple: v,
    focusRipple: b,
    tabIndex: ue,
    focusVisible: P
  }), Hr = yf(nr);
  return /* @__PURE__ */ ar.jsxs(vf, Z({
    as: dr,
    className: Qe(Hr.root, f),
    ownerState: nr,
    onBlur: Pr,
    onClick: y,
    onContextMenu: we,
    onFocus: fr,
    onKeyDown: yr,
    onKeyUp: $r,
    onMouseDown: J,
    onMouseLeave: q,
    onMouseUp: Ce,
    onDragLeave: R,
    onTouchEnd: We,
    onTouchMove: Je,
    onTouchStart: Ve,
    ref: Rr,
    tabIndex: m ? -1 : ue,
    type: ne
  }, Ze, oe, {
    children: [s, L ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ ar.jsx(ff, Z({
        ref: Fe,
        center: a
      }, te))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (va.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ws,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: C.bool,
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Es,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: C.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: C.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: C.string,
  /**
   * @ignore
   */
  href: C.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: C.elementType,
  /**
   * @ignore
   */
  onBlur: C.func,
  /**
   * @ignore
   */
  onClick: C.func,
  /**
   * @ignore
   */
  onContextMenu: C.func,
  /**
   * @ignore
   */
  onDragLeave: C.func,
  /**
   * @ignore
   */
  onFocus: C.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: C.func,
  /**
   * @ignore
   */
  onKeyDown: C.func,
  /**
   * @ignore
   */
  onKeyUp: C.func,
  /**
   * @ignore
   */
  onMouseDown: C.func,
  /**
   * @ignore
   */
  onMouseLeave: C.func,
  /**
   * @ignore
   */
  onMouseUp: C.func,
  /**
   * @ignore
   */
  onTouchEnd: C.func,
  /**
   * @ignore
   */
  onTouchMove: C.func,
  /**
   * @ignore
   */
  onTouchStart: C.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * @default 0
   */
  tabIndex: C.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: C.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: C.oneOfType([C.func, C.shape({
    current: C.shape({
      pulsate: C.func.isRequired,
      start: C.func.isRequired,
      stop: C.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: C.oneOfType([C.oneOf(["button", "reset", "submit"]), C.string])
});
const gf = va;
function bf(e) {
  return Yt("MuiButton", e);
}
const Ef = qn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), kt = Ef, ga = /* @__PURE__ */ D.createContext({});
process.env.NODE_ENV !== "production" && (ga.displayName = "ButtonGroupContext");
const _f = ga, ba = /* @__PURE__ */ D.createContext(void 0);
process.env.NODE_ENV !== "production" && (ba.displayName = "ButtonGroupButtonContext");
const Rf = ba, Sf = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], xf = (e) => {
  const {
    color: r,
    disableElevation: t,
    fullWidth: n,
    size: i,
    variant: a,
    classes: s
  } = e, f = {
    root: ["root", a, `${a}${Ue(r)}`, `size${Ue(i)}`, `${a}Size${Ue(i)}`, r === "inherit" && "colorInherit", t && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${Ue(i)}`],
    endIcon: ["endIcon", `iconSize${Ue(i)}`]
  }, p = qi(f, bf, s);
  return Z({}, s, p);
}, Ea = (e) => Z({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Tf = Gr(gf, {
  shouldForwardProp: (e) => ma(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`${t.variant}${Ue(t.color)}`], r[`size${Ue(t.size)}`], r[`${t.variant}Size${Ue(t.size)}`], t.color === "inherit" && r.colorInherit, t.disableElevation && r.disableElevation, t.fullWidth && r.fullWidth];
  }
})(({
  theme: e,
  ownerState: r
}) => {
  var t, n;
  const i = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], a = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return Z({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": Z({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : $t(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "text" && r.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : $t(e.palette[r.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "outlined" && r.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[r.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : $t(e.palette[r.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : a,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, r.variant === "contained" && r.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[r.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[r.color].main
      }
    }),
    "&:active": Z({}, r.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${kt.focusVisible}`]: Z({}, r.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${kt.disabled}`]: Z({
      color: (e.vars || e).palette.action.disabled
    }, r.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, r.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, r.variant === "text" && {
    padding: "6px 8px"
  }, r.variant === "text" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].main
  }, r.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, r.variant === "outlined" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[r.color].mainChannel} / 0.5)` : `1px solid ${$t(e.palette[r.color].main, 0.5)}`
  }, r.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (t = (n = e.palette).getContrastText) == null ? void 0 : t.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : i,
    boxShadow: (e.vars || e).shadows[2]
  }, r.variant === "contained" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].contrastText,
    backgroundColor: (e.vars || e).palette[r.color].main
  }, r.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, r.size === "small" && r.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, r.size === "small" && r.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, r.size === "small" && r.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, r.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${kt.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${kt.disabled}`]: {
    boxShadow: "none"
  }
}), Cf = Gr("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.startIcon, r[`iconSize${Ue(t.size)}`]];
  }
})(({
  ownerState: e
}) => Z({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Ea(e))), wf = Gr("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.endIcon, r[`iconSize${Ue(t.size)}`]];
  }
})(({
  ownerState: e
}) => Z({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Ea(e))), _a = /* @__PURE__ */ D.forwardRef(function(r, t) {
  const n = D.useContext(_f), i = D.useContext(Rf), a = Wn(n, r), s = uo({
    props: a,
    name: "MuiButton"
  }), {
    children: f,
    color: p = "primary",
    component: m = "button",
    className: h,
    disabled: v = !1,
    disableElevation: b = !1,
    disableFocusRipple: T = !1,
    endIcon: x,
    focusVisibleClassName: y,
    fullWidth: E = !1,
    size: $ = "medium",
    startIcon: M,
    type: N,
    variant: w = "text"
  } = s, d = rr(s, Sf), U = Z({}, s, {
    color: p,
    component: m,
    disabled: v,
    disableElevation: b,
    disableFocusRipple: T,
    fullWidth: E,
    size: $,
    type: N,
    variant: w
  }), B = xf(U), me = M && /* @__PURE__ */ ar.jsx(Cf, {
    className: B.startIcon,
    ownerState: U,
    children: M
  }), pe = x && /* @__PURE__ */ ar.jsx(wf, {
    className: B.endIcon,
    ownerState: U,
    children: x
  }), W = i || "";
  return /* @__PURE__ */ ar.jsxs(Tf, Z({
    ownerState: U,
    className: Qe(n.className, B.root, h, W),
    component: m,
    disabled: v,
    focusRipple: !T,
    focusVisibleClassName: Qe(B.focusVisible, y),
    ref: t,
    type: N
  }, d, {
    classes: B,
    children: [me, f, pe]
  }));
});
process.env.NODE_ENV !== "production" && (_a.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: C.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: C.oneOfType([C.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), C.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: C.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: C.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: C.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: C.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: C.bool,
  /**
   * Element placed after the children.
   */
  endIcon: C.node,
  /**
   * @ignore
   */
  focusVisibleClassName: C.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: C.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: C.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: C.oneOfType([C.oneOf(["small", "medium", "large"]), C.string]),
  /**
   * Element placed before the children.
   */
  startIcon: C.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: C.oneOfType([C.arrayOf(C.oneOfType([C.func, C.object, C.bool])), C.func, C.object]),
  /**
   * @ignore
   */
  type: C.oneOfType([C.oneOf(["button", "reset", "submit"]), C.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: C.oneOfType([C.oneOf(["contained", "outlined", "text"]), C.string])
});
const Of = _a, Pf = ({ children: e, ...r }) => ar.jsx(Of, { ...r, children: e });
export {
  Pf as Button
};