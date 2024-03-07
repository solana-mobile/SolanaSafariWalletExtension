(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __assign = Object.assign;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __rest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS((exports, module) => {
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  });

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS((exports) => {
    /** @license React v17.0.2
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "use strict";
    var l = require_object_assign();
    var n = 60103;
    var p = 60106;
    exports.Fragment = 60107;
    exports.StrictMode = 60108;
    exports.Profiler = 60114;
    var q = 60109;
    var r = 60110;
    var t = 60112;
    exports.Suspense = 60113;
    var u = 60115;
    var v = 60116;
    if (typeof Symbol === "function" && Symbol.for) {
      w = Symbol.for;
      n = w("react.element");
      p = w("react.portal");
      exports.Fragment = w("react.fragment");
      exports.StrictMode = w("react.strict_mode");
      exports.Profiler = w("react.profiler");
      q = w("react.provider");
      r = w("react.context");
      t = w("react.forward_ref");
      exports.Suspense = w("react.suspense");
      u = w("react.memo");
      v = w("react.lazy");
    }
    var w;
    var x = typeof Symbol === "function" && Symbol.iterator;
    function y(a) {
      if (a === null || typeof a !== "object")
        return null;
      a = x && a[x] || a["@@iterator"];
      return typeof a === "function" ? a : null;
    }
    function z(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var A = {isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    }};
    var B = {};
    function C(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = B;
      this.updater = c || A;
    }
    C.prototype.isReactComponent = {};
    C.prototype.setState = function(a, b) {
      if (typeof a !== "object" && typeof a !== "function" && a != null)
        throw Error(z(85));
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    C.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function D() {
    }
    D.prototype = C.prototype;
    function E(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = B;
      this.updater = c || A;
    }
    var F = E.prototype = new D();
    F.constructor = E;
    l(F, C.prototype);
    F.isPureReactComponent = true;
    var G = {current: null};
    var H = Object.prototype.hasOwnProperty;
    var I = {key: true, ref: true, __self: true, __source: true};
    function J(a, b, c) {
      var e, d = {}, k = null, h = null;
      if (b != null)
        for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
          H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
      var g = arguments.length - 2;
      if (g === 1)
        d.children = c;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        d.children = f;
      }
      if (a && a.defaultProps)
        for (e in g = a.defaultProps, g)
          d[e] === void 0 && (d[e] = g[e]);
      return {$$typeof: n, type: a, key: k, ref: h, props: d, _owner: G.current};
    }
    function K(a, b) {
      return {$$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner};
    }
    function L(a) {
      return typeof a === "object" && a !== null && a.$$typeof === n;
    }
    function escape(a) {
      var b = {"=": "=0", ":": "=2"};
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var M = /\/+/g;
    function N(a, b) {
      return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
    }
    function O(a, b, c, e, d) {
      var k = typeof a;
      if (k === "undefined" || k === "boolean")
        a = null;
      var h = false;
      if (a === null)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case n:
              case p:
                h = true;
            }
        }
      if (h)
        return h = a, d = d(h), a = e === "" ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
          return a2;
        })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
      h = 0;
      e = e === "" ? "." : e + ":";
      if (Array.isArray(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = e + N(k, g);
          h += O(k, b, c, f, d);
        }
      else if (f = y(a), typeof f === "function")
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
      else if (k === "object")
        throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
      return h;
    }
    function P(a, b, c) {
      if (a == null)
        return a;
      var e = [], d = 0;
      O(a, e, "", "", function(a2) {
        return b.call(c, a2, d++);
      });
      return e;
    }
    function Q(a) {
      if (a._status === -1) {
        var b = a._result;
        b = b();
        a._status = 0;
        a._result = b;
        b.then(function(b2) {
          a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
        }, function(b2) {
          a._status === 0 && (a._status = 2, a._result = b2);
        });
      }
      if (a._status === 1)
        return a._result;
      throw a._result;
    }
    var R = {current: null};
    function S() {
      var a = R.current;
      if (a === null)
        throw Error(z(321));
      return a;
    }
    var T = {ReactCurrentDispatcher: R, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G, IsSomeRendererActing: {current: false}, assign: l};
    exports.Children = {map: P, forEach: function(a, b, c) {
      P(a, function() {
        b.apply(this, arguments);
      }, c);
    }, count: function(a) {
      var b = 0;
      P(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return P(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!L(a))
        throw Error(z(143));
      return a;
    }};
    exports.Component = C;
    exports.PureComponent = E;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
    exports.cloneElement = function(a, b, c) {
      if (a === null || a === void 0)
        throw Error(z(267, a));
      var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
      if (b != null) {
        b.ref !== void 0 && (k = b.ref, h = G.current);
        b.key !== void 0 && (d = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (f === 1)
        e.children = c;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        e.children = g;
      }
      return {
        $$typeof: n,
        type: a.type,
        key: d,
        ref: k,
        props: e,
        _owner: h
      };
    };
    exports.createContext = function(a, b) {
      b === void 0 && (b = null);
      a = {$$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null};
      a.Provider = {$$typeof: q, _context: a};
      return a.Consumer = a;
    };
    exports.createElement = J;
    exports.createFactory = function(a) {
      var b = J.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return {current: null};
    };
    exports.forwardRef = function(a) {
      return {$$typeof: t, render: a};
    };
    exports.isValidElement = L;
    exports.lazy = function(a) {
      return {$$typeof: v, _payload: {_status: -1, _result: a}, _init: Q};
    };
    exports.memo = function(a, b) {
      return {$$typeof: u, type: a, compare: b === void 0 ? null : b};
    };
    exports.useCallback = function(a, b) {
      return S().useCallback(a, b);
    };
    exports.useContext = function(a, b) {
      return S().useContext(a, b);
    };
    exports.useDebugValue = function() {
    };
    exports.useEffect = function(a, b) {
      return S().useEffect(a, b);
    };
    exports.useImperativeHandle = function(a, b, c) {
      return S().useImperativeHandle(a, b, c);
    };
    exports.useLayoutEffect = function(a, b) {
      return S().useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return S().useMemo(a, b);
    };
    exports.useReducer = function(a, b, c) {
      return S().useReducer(a, b, c);
    };
    exports.useRef = function(a) {
      return S().useRef(a);
    };
    exports.useState = function(a) {
      return S().useState(a);
    };
    exports.version = "17.0.2";
  });

  // node_modules/react/index.js
  var require_react = __commonJS((exports, module) => {
    "use strict";
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS((exports) => {
    /** @license React v0.20.2
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "use strict";
    var f;
    var g;
    var h;
    var k;
    if (typeof performance === "object" && typeof performance.now === "function") {
      l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      p = Date, q = p.now();
      exports.unstable_now = function() {
        return p.now() - q;
      };
    }
    var l;
    var p;
    var q;
    if (typeof window === "undefined" || typeof MessageChannel !== "function") {
      t = null, u = null, w = function() {
        if (t !== null)
          try {
            var a = exports.unstable_now();
            t(true, a);
            t = null;
          } catch (b) {
            throw setTimeout(w, 0), b;
          }
      };
      f = function(a) {
        t !== null ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
      };
      g = function(a, b) {
        u = setTimeout(a, b);
      };
      h = function() {
        clearTimeout(u);
      };
      exports.unstable_shouldYield = function() {
        return false;
      };
      k = exports.unstable_forceFrameRate = function() {
      };
    } else {
      x = window.setTimeout, y = window.clearTimeout;
      if (typeof console !== "undefined") {
        z = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        typeof z !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      A = false, B = null, C = -1, D = 5, E = 0;
      exports.unstable_shouldYield = function() {
        return exports.unstable_now() >= E;
      };
      k = function() {
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      F = new MessageChannel(), G = F.port2;
      F.port1.onmessage = function() {
        if (B !== null) {
          var a = exports.unstable_now();
          E = a + D;
          try {
            B(true, a) ? G.postMessage(null) : (A = false, B = null);
          } catch (b) {
            throw G.postMessage(null), b;
          }
        } else
          A = false;
      };
      f = function(a) {
        B = a;
        A || (A = true, G.postMessage(null));
      };
      g = function(a, b) {
        C = x(function() {
          a(exports.unstable_now());
        }, b);
      };
      h = function() {
        y(C);
        C = -1;
      };
    }
    var t;
    var u;
    var w;
    var x;
    var y;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    function H(a, b) {
      var c = a.length;
      a.push(b);
      a:
        for (; ; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (e !== void 0 && 0 < I(e, b))
            a[d] = b, a[c] = e, c = d;
          else
            break a;
        }
    }
    function J(a) {
      a = a[0];
      return a === void 0 ? null : a;
    }
    function K(a) {
      var b = a[0];
      if (b !== void 0) {
        var c = a.pop();
        if (c !== b) {
          a[0] = c;
          a:
            for (var d = 0, e = a.length; d < e; ) {
              var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
              if (n !== void 0 && 0 > I(n, c))
                r !== void 0 && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
              else if (r !== void 0 && 0 > I(r, c))
                a[d] = r, a[v] = c, d = v;
              else
                break a;
            }
        }
        return b;
      }
      return null;
    }
    function I(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return c !== 0 ? c : a.id - b.id;
    }
    var L = [];
    var M = [];
    var N = 1;
    var O = null;
    var P = 3;
    var Q = false;
    var R = false;
    var S = false;
    function T(a) {
      for (var b = J(M); b !== null; ) {
        if (b.callback === null)
          K(M);
        else if (b.startTime <= a)
          K(M), b.sortIndex = b.expirationTime, H(L, b);
        else
          break;
        b = J(M);
      }
    }
    function U(a) {
      S = false;
      T(a);
      if (!R)
        if (J(L) !== null)
          R = true, f(V);
        else {
          var b = J(M);
          b !== null && g(U, b.startTime - a);
        }
    }
    function V(a, b) {
      R = false;
      S && (S = false, h());
      Q = true;
      var c = P;
      try {
        T(b);
        for (O = J(L); O !== null && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield()); ) {
          var d = O.callback;
          if (typeof d === "function") {
            O.callback = null;
            P = O.priorityLevel;
            var e = d(O.expirationTime <= b);
            b = exports.unstable_now();
            typeof e === "function" ? O.callback = e : O === J(L) && K(L);
            T(b);
          } else
            K(L);
          O = J(L);
        }
        if (O !== null)
          var m = true;
        else {
          var n = J(M);
          n !== null && g(U, n.startTime - b);
          m = false;
        }
        return m;
      } finally {
        O = null, P = c, Q = false;
      }
    }
    var W = k;
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      R || Q || (R = true, f(V));
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return P;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return J(L);
    };
    exports.unstable_next = function(a) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = P;
      }
      var c = P;
      P = b;
      try {
        return a();
      } finally {
        P = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = W;
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = P;
      P = a;
      try {
        return b();
      } finally {
        P = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = {id: N++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1};
      c > d ? (a.sortIndex = c, H(M, a), J(L) === null && a === J(M) && (S ? h() : S = true, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = true, f(V)));
      return a;
    };
    exports.unstable_wrapCallback = function(a) {
      var b = P;
      return function() {
        var c = P;
        P = b;
        try {
          return a.apply(this, arguments);
        } finally {
          P = c;
        }
      };
    };
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS((exports, module) => {
    "use strict";
    if (true) {
      module.exports = require_scheduler_production_min();
    } else {
      module.exports = null;
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS((exports) => {
    /** @license React v17.0.2
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "use strict";
    var aa = require_react();
    var m = require_object_assign();
    var r = require_scheduler();
    function y(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    if (!aa)
      throw Error(y(227));
    var ba = new Set();
    var ca = {};
    function da(a, b) {
      ea(a, b);
      ea(a + "Capture", b);
    }
    function ea(a, b) {
      ca[a] = b;
      for (a = 0; a < b.length; a++)
        ba.add(b[a]);
    }
    var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
    var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ia = Object.prototype.hasOwnProperty;
    var ja = {};
    var ka = {};
    function la(a) {
      if (ia.call(ka, a))
        return true;
      if (ia.call(ja, a))
        return false;
      if (ha.test(a))
        return ka[a] = true;
      ja[a] = true;
      return false;
    }
    function ma(a, b, c, d) {
      if (c !== null && c.type === 0)
        return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d)
            return false;
          if (c !== null)
            return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return a !== "data-" && a !== "aria-";
        default:
          return false;
      }
    }
    function na(a, b, c, d) {
      if (b === null || typeof b === "undefined" || ma(a, b, c, d))
        return true;
      if (d)
        return false;
      if (c !== null)
        switch (c.type) {
          case 3:
            return !b;
          case 4:
            return b === false;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
      return false;
    }
    function B(a, b, c, d, e, f, g) {
      this.acceptsBooleans = b === 2 || b === 3 || b === 4;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f;
      this.removeEmptyString = g;
    }
    var D = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      D[a] = new B(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      D[b] = new B(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      D[a] = new B(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      D[a] = new B(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      D[a] = new B(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      D[a] = new B(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var oa = /[\-:]([a-z])/g;
    function pa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(oa, pa);
      D[b] = new B(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(oa, pa);
      D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(oa, pa);
      D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
    });
    D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function qa(a, b, c, d) {
      var e = D.hasOwnProperty(b) ? D[b] : null;
      var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
      f || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
    }
    var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var sa = 60103;
    var ta = 60106;
    var ua = 60107;
    var wa = 60108;
    var xa = 60114;
    var ya = 60109;
    var za = 60110;
    var Aa = 60112;
    var Ba = 60113;
    var Ca = 60120;
    var Da = 60115;
    var Ea = 60116;
    var Fa = 60121;
    var Ga = 60128;
    var Ha = 60129;
    var Ia = 60130;
    var Ja = 60131;
    if (typeof Symbol === "function" && Symbol.for) {
      E = Symbol.for;
      sa = E("react.element");
      ta = E("react.portal");
      ua = E("react.fragment");
      wa = E("react.strict_mode");
      xa = E("react.profiler");
      ya = E("react.provider");
      za = E("react.context");
      Aa = E("react.forward_ref");
      Ba = E("react.suspense");
      Ca = E("react.suspense_list");
      Da = E("react.memo");
      Ea = E("react.lazy");
      Fa = E("react.block");
      E("react.scope");
      Ga = E("react.opaque.id");
      Ha = E("react.debug_trace_mode");
      Ia = E("react.offscreen");
      Ja = E("react.legacy_hidden");
    }
    var E;
    var Ka = typeof Symbol === "function" && Symbol.iterator;
    function La(a) {
      if (a === null || typeof a !== "object")
        return null;
      a = Ka && a[Ka] || a["@@iterator"];
      return typeof a === "function" ? a : null;
    }
    var Ma;
    function Na(a) {
      if (Ma === void 0)
        try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          Ma = b && b[1] || "";
        }
      return "\n" + Ma + a;
    }
    var Oa = false;
    function Pa(a, b) {
      if (!a || Oa)
        return "";
      Oa = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b)
          if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", {set: function() {
            throw Error();
          }}), typeof Reflect === "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (k) {
              var d = k;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (k) {
              d = k;
            }
            a.call(b.prototype);
          }
        else {
          try {
            throw Error();
          } catch (k) {
            d = k;
          }
          a();
        }
      } catch (k) {
        if (k && d && typeof k.stack === "string") {
          for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
            h--;
          for (; 1 <= g && 0 <= h; g--, h--)
            if (e[g] !== f[h]) {
              if (g !== 1 || h !== 1) {
                do
                  if (g--, h--, 0 > h || e[g] !== f[h])
                    return "\n" + e[g].replace(" at new ", " at ");
                while (1 <= g && 0 <= h);
              }
              break;
            }
        }
      } finally {
        Oa = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
    }
    function Qa(a) {
      switch (a.tag) {
        case 5:
          return Na(a.type);
        case 16:
          return Na("Lazy");
        case 13:
          return Na("Suspense");
        case 19:
          return Na("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Pa(a.type, false), a;
        case 11:
          return a = Pa(a.type.render, false), a;
        case 22:
          return a = Pa(a.type._render, false), a;
        case 1:
          return a = Pa(a.type, true), a;
        default:
          return "";
      }
    }
    function Ra(a) {
      if (a == null)
        return null;
      if (typeof a === "function")
        return a.displayName || a.name || null;
      if (typeof a === "string")
        return a;
      switch (a) {
        case ua:
          return "Fragment";
        case ta:
          return "Portal";
        case xa:
          return "Profiler";
        case wa:
          return "StrictMode";
        case Ba:
          return "Suspense";
        case Ca:
          return "SuspenseList";
      }
      if (typeof a === "object")
        switch (a.$$typeof) {
          case za:
            return (a.displayName || "Context") + ".Consumer";
          case ya:
            return (a._context.displayName || "Context") + ".Provider";
          case Aa:
            var b = a.render;
            b = b.displayName || b.name || "";
            return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
          case Da:
            return Ra(a.type);
          case Fa:
            return Ra(a._render);
          case Ea:
            b = a._payload;
            a = a._init;
            try {
              return Ra(a(b));
            } catch (c) {
            }
        }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, {configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f.call(this, a2);
        }});
        Object.defineProperty(a, b, {enumerable: c.enumerable});
        return {getValue: function() {
          return d;
        }, setValue: function(a2) {
          d = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        }};
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a)
        return false;
      var b = a._valueTracker;
      if (!b)
        return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || (typeof document !== "undefined" ? document : void 0);
      if (typeof a === "undefined")
        return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return m({}, b, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked});
    }
    function Za(a, b) {
      var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
      c = Sa(b.value != null ? b.value : c);
      a._wrapperState = {initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null};
    }
    function $a(a, b) {
      b = b.checked;
      b != null && qa(a, "checked", b, false);
    }
    function ab(a, b) {
      $a(a, b);
      var c = Sa(b.value), d = b.type;
      if (c != null)
        if (d === "number") {
          if (c === 0 && a.value === "" || a.value != c)
            a.value = "" + c;
        } else
          a.value !== "" + c && (a.value = "" + c);
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
      b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
    }
    function cb(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
          return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      c !== "" && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      c !== "" && (a.name = c);
    }
    function bb(a, b, c) {
      if (b !== "number" || Xa(a.ownerDocument) !== a)
        c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    function db(a) {
      var b = "";
      aa.Children.forEach(a, function(a2) {
        a2 != null && (b += a2);
      });
      return b;
    }
    function eb(a, b) {
      a = m({children: void 0}, b);
      if (b = db(b.children))
        a.children = b;
      return a;
    }
    function fb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++)
          b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++)
          e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          b !== null || a[e].disabled || (b = a[e]);
        }
        b !== null && (b.selected = true);
      }
    }
    function gb(a, b) {
      if (b.dangerouslySetInnerHTML != null)
        throw Error(y(91));
      return m({}, b, {value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue});
    }
    function hb(a, b) {
      var c = b.value;
      if (c == null) {
        c = b.children;
        b = b.defaultValue;
        if (c != null) {
          if (b != null)
            throw Error(y(92));
          if (Array.isArray(c)) {
            if (!(1 >= c.length))
              throw Error(y(93));
            c = c[0];
          }
          b = c;
        }
        b == null && (b = "");
        c = b;
      }
      a._wrapperState = {initialValue: Sa(c)};
    }
    function ib(a, b) {
      var c = Sa(b.value), d = Sa(b.defaultValue);
      c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
      d != null && (a.defaultValue = "" + d);
    }
    function jb(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
    }
    var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
    function lb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function mb(a, b) {
      return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
    }
    var nb;
    var ob = function(a) {
      return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    }(function(a, b) {
      if (a.namespaceURI !== kb.svg || "innerHTML" in a)
        a.innerHTML = b;
      else {
        nb = nb || document.createElement("div");
        nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = nb.firstChild; a.firstChild; )
          a.removeChild(a.firstChild);
        for (; b.firstChild; )
          a.appendChild(b.firstChild);
      }
    });
    function pb(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && c.nodeType === 3) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var qb = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var rb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(qb).forEach(function(a) {
      rb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        qb[b] = qb[a];
      });
    });
    function sb(a, b, c) {
      return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
    }
    function tb(a, b) {
      a = a.style;
      for (var c in b)
        if (b.hasOwnProperty(c)) {
          var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
          c === "float" && (c = "cssFloat");
          d ? a.setProperty(c, e) : a[c] = e;
        }
    }
    var ub = m({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
    function vb(a, b) {
      if (b) {
        if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
          throw Error(y(137, a));
        if (b.dangerouslySetInnerHTML != null) {
          if (b.children != null)
            throw Error(y(60));
          if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
            throw Error(y(61));
        }
        if (b.style != null && typeof b.style !== "object")
          throw Error(y(62));
      }
    }
    function wb(a, b) {
      if (a.indexOf("-") === -1)
        return typeof b.is === "string";
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return a.nodeType === 3 ? a.parentNode : a;
    }
    var yb = null;
    var zb = null;
    var Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if (typeof yb !== "function")
          throw Error(y(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b)
          for (a = 0; a < b.length; a++)
            Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb(a, b, c, d, e) {
      return a(b, c, d, e);
    }
    function Ib() {
    }
    var Jb = Gb;
    var Kb = false;
    var Lb = false;
    function Mb() {
      if (zb !== null || Ab !== null)
        Ib(), Fb();
    }
    function Nb(a, b, c) {
      if (Lb)
        return a(b, c);
      Lb = true;
      try {
        return Jb(a, b, c);
      } finally {
        Lb = false, Mb();
      }
    }
    function Ob(a, b) {
      var c = a.stateNode;
      if (c === null)
        return null;
      var d = Db(c);
      if (d === null)
        return null;
      c = d[b];
      a:
        switch (b) {
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
            (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
            a = !d;
            break a;
          default:
            a = false;
        }
      if (a)
        return null;
      if (c && typeof c !== "function")
        throw Error(y(231, b, typeof c));
      return c;
    }
    var Pb = false;
    if (fa)
      try {
        Qb = {};
        Object.defineProperty(Qb, "passive", {get: function() {
          Pb = true;
        }});
        window.addEventListener("test", Qb, Qb);
        window.removeEventListener("test", Qb, Qb);
      } catch (a) {
        Pb = false;
      }
    var Qb;
    function Rb(a, b, c, d, e, f, g, h, k) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l);
      } catch (n) {
        this.onError(n);
      }
    }
    var Sb = false;
    var Tb = null;
    var Ub = false;
    var Vb = null;
    var Wb = {onError: function(a) {
      Sb = true;
      Tb = a;
    }};
    function Xb(a, b, c, d, e, f, g, h, k) {
      Sb = false;
      Tb = null;
      Rb.apply(Wb, arguments);
    }
    function Yb(a, b, c, d, e, f, g, h, k) {
      Xb.apply(this, arguments);
      if (Sb) {
        if (Sb) {
          var l = Tb;
          Sb = false;
          Tb = null;
        } else
          throw Error(y(198));
        Ub || (Ub = true, Vb = l);
      }
    }
    function Zb(a) {
      var b = a, c = a;
      if (a.alternate)
        for (; b.return; )
          b = b.return;
      else {
        a = b;
        do
          b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
        while (a);
      }
      return b.tag === 3 ? c : null;
    }
    function $b(a) {
      if (a.tag === 13) {
        var b = a.memoizedState;
        b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
        if (b !== null)
          return b.dehydrated;
      }
      return null;
    }
    function ac(a) {
      if (Zb(a) !== a)
        throw Error(y(188));
    }
    function bc(a) {
      var b = a.alternate;
      if (!b) {
        b = Zb(a);
        if (b === null)
          throw Error(y(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (e === null)
          break;
        var f = e.alternate;
        if (f === null) {
          d = e.return;
          if (d !== null) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f.child) {
          for (f = e.child; f; ) {
            if (f === c)
              return ac(e), a;
            if (f === d)
              return ac(e), b;
            f = f.sibling;
          }
          throw Error(y(188));
        }
        if (c.return !== d.return)
          c = e, d = f;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f.child; h; ) {
              if (h === c) {
                g = true;
                c = f;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g)
              throw Error(y(189));
          }
        }
        if (c.alternate !== d)
          throw Error(y(190));
      }
      if (c.tag !== 3)
        throw Error(y(188));
      return c.stateNode.current === c ? a : b;
    }
    function cc(a) {
      a = bc(a);
      if (!a)
        return null;
      for (var b = a; ; ) {
        if (b.tag === 5 || b.tag === 6)
          return b;
        if (b.child)
          b.child.return = b, b = b.child;
        else {
          if (b === a)
            break;
          for (; !b.sibling; ) {
            if (!b.return || b.return === a)
              return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return null;
    }
    function dc(a, b) {
      for (var c = a.alternate; b !== null; ) {
        if (b === a || b === c)
          return true;
        b = b.return;
      }
      return false;
    }
    var ec;
    var fc;
    var gc;
    var hc;
    var ic = false;
    var jc = [];
    var kc = null;
    var lc = null;
    var mc = null;
    var nc = new Map();
    var oc = new Map();
    var pc = [];
    var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function rc(a, b, c, d, e) {
      return {blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d]};
    }
    function sc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          kc = null;
          break;
        case "dragenter":
        case "dragleave":
          lc = null;
          break;
        case "mouseover":
        case "mouseout":
          mc = null;
          break;
        case "pointerover":
        case "pointerout":
          nc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          oc.delete(b.pointerId);
      }
    }
    function tc(a, b, c, d, e, f) {
      if (a === null || a.nativeEvent !== f)
        return a = rc(b, c, d, e, f), b !== null && (b = Cb(b), b !== null && fc(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      e !== null && b.indexOf(e) === -1 && b.push(e);
      return a;
    }
    function uc(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return kc = tc(kc, a, b, c, d, e), true;
        case "dragenter":
          return lc = tc(lc, a, b, c, d, e), true;
        case "mouseover":
          return mc = tc(mc, a, b, c, d, e), true;
        case "pointerover":
          var f = e.pointerId;
          nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function vc(a) {
      var b = wc(a.target);
      if (b !== null) {
        var c = Zb(b);
        if (c !== null) {
          if (b = c.tag, b === 13) {
            if (b = $b(c), b !== null) {
              a.blockedOn = b;
              hc(a.lanePriority, function() {
                r.unstable_runWithPriority(a.priority, function() {
                  gc(c);
                });
              });
              return;
            }
          } else if (b === 3 && c.stateNode.hydrate) {
            a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function xc(a) {
      if (a.blockedOn !== null)
        return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (c !== null)
          return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function zc(a, b, c) {
      xc(a) && c.delete(b);
    }
    function Ac() {
      for (ic = false; 0 < jc.length; ) {
        var a = jc[0];
        if (a.blockedOn !== null) {
          a = Cb(a.blockedOn);
          a !== null && ec(a);
          break;
        }
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (c !== null) {
            a.blockedOn = c;
            break;
          }
          b.shift();
        }
        a.blockedOn === null && jc.shift();
      }
      kc !== null && xc(kc) && (kc = null);
      lc !== null && xc(lc) && (lc = null);
      mc !== null && xc(mc) && (mc = null);
      nc.forEach(zc);
      oc.forEach(zc);
    }
    function Bc(a, b) {
      a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
    }
    function Cc(a) {
      function b(b2) {
        return Bc(b2, a);
      }
      if (0 < jc.length) {
        Bc(jc[0], a);
        for (var c = 1; c < jc.length; c++) {
          var d = jc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      kc !== null && Bc(kc, a);
      lc !== null && Bc(lc, a);
      mc !== null && Bc(mc, a);
      nc.forEach(b);
      oc.forEach(b);
      for (c = 0; c < pc.length; c++)
        d = pc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
        vc(c), c.blockedOn === null && pc.shift();
    }
    function Dc(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
    var Fc = {};
    var Gc = {};
    fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
    function Hc(a) {
      if (Fc[a])
        return Fc[a];
      if (!Ec[a])
        return a;
      var b = Ec[a], c;
      for (c in b)
        if (b.hasOwnProperty(c) && c in Gc)
          return Fc[a] = b[c];
      return a;
    }
    var Ic = Hc("animationend");
    var Jc = Hc("animationiteration");
    var Kc = Hc("animationstart");
    var Lc = Hc("transitionend");
    var Mc = new Map();
    var Nc = new Map();
    var Oc = [
      "abort",
      "abort",
      Ic,
      "animationEnd",
      Jc,
      "animationIteration",
      Kc,
      "animationStart",
      "canplay",
      "canPlay",
      "canplaythrough",
      "canPlayThrough",
      "durationchange",
      "durationChange",
      "emptied",
      "emptied",
      "encrypted",
      "encrypted",
      "ended",
      "ended",
      "error",
      "error",
      "gotpointercapture",
      "gotPointerCapture",
      "load",
      "load",
      "loadeddata",
      "loadedData",
      "loadedmetadata",
      "loadedMetadata",
      "loadstart",
      "loadStart",
      "lostpointercapture",
      "lostPointerCapture",
      "playing",
      "playing",
      "progress",
      "progress",
      "seeking",
      "seeking",
      "stalled",
      "stalled",
      "suspend",
      "suspend",
      "timeupdate",
      "timeUpdate",
      Lc,
      "transitionEnd",
      "waiting",
      "waiting"
    ];
    function Pc(a, b) {
      for (var c = 0; c < a.length; c += 2) {
        var d = a[c], e = a[c + 1];
        e = "on" + (e[0].toUpperCase() + e.slice(1));
        Nc.set(d, b);
        Mc.set(d, e);
        da(e, [d]);
      }
    }
    var Qc = r.unstable_now;
    Qc();
    var F = 8;
    function Rc(a) {
      if ((1 & a) !== 0)
        return F = 15, 1;
      if ((2 & a) !== 0)
        return F = 14, 2;
      if ((4 & a) !== 0)
        return F = 13, 4;
      var b = 24 & a;
      if (b !== 0)
        return F = 12, b;
      if ((a & 32) !== 0)
        return F = 11, 32;
      b = 192 & a;
      if (b !== 0)
        return F = 10, b;
      if ((a & 256) !== 0)
        return F = 9, 256;
      b = 3584 & a;
      if (b !== 0)
        return F = 8, b;
      if ((a & 4096) !== 0)
        return F = 7, 4096;
      b = 4186112 & a;
      if (b !== 0)
        return F = 6, b;
      b = 62914560 & a;
      if (b !== 0)
        return F = 5, b;
      if (a & 67108864)
        return F = 4, 67108864;
      if ((a & 134217728) !== 0)
        return F = 3, 134217728;
      b = 805306368 & a;
      if (b !== 0)
        return F = 2, b;
      if ((1073741824 & a) !== 0)
        return F = 1, 1073741824;
      F = 8;
      return a;
    }
    function Sc(a) {
      switch (a) {
        case 99:
          return 15;
        case 98:
          return 10;
        case 97:
        case 96:
          return 8;
        case 95:
          return 2;
        default:
          return 0;
      }
    }
    function Tc(a) {
      switch (a) {
        case 15:
        case 14:
          return 99;
        case 13:
        case 12:
        case 11:
        case 10:
          return 98;
        case 9:
        case 8:
        case 7:
        case 6:
        case 4:
        case 5:
          return 97;
        case 3:
        case 2:
        case 1:
          return 95;
        case 0:
          return 90;
        default:
          throw Error(y(358, a));
      }
    }
    function Uc(a, b) {
      var c = a.pendingLanes;
      if (c === 0)
        return F = 0;
      var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
      if (f !== 0)
        d = f, e = F = 15;
      else if (f = c & 134217727, f !== 0) {
        var k = f & ~g;
        k !== 0 ? (d = Rc(k), e = F) : (h &= f, h !== 0 && (d = Rc(h), e = F));
      } else
        f = c & ~g, f !== 0 ? (d = Rc(f), e = F) : h !== 0 && (d = Rc(h), e = F);
      if (d === 0)
        return 0;
      d = 31 - Vc(d);
      d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
      if (b !== 0 && b !== d && (b & g) === 0) {
        Rc(b);
        if (e <= F)
          return b;
        F = e;
      }
      b = a.entangledLanes;
      if (b !== 0)
        for (a = a.entanglements, b &= d; 0 < b; )
          c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function Wc(a) {
      a = a.pendingLanes & -1073741825;
      return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function Xc(a, b) {
      switch (a) {
        case 15:
          return 1;
        case 14:
          return 2;
        case 12:
          return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
        case 10:
          return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
        case 8:
          return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
        case 2:
          return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
      }
      throw Error(y(358, a));
    }
    function Yc(a) {
      return a & -a;
    }
    function Zc(a) {
      for (var b = [], c = 0; 31 > c; c++)
        b.push(a);
      return b;
    }
    function $c(a, b, c) {
      a.pendingLanes |= b;
      var d = b - 1;
      a.suspendedLanes &= d;
      a.pingedLanes &= d;
      a = a.eventTimes;
      b = 31 - Vc(b);
      a[b] = c;
    }
    var Vc = Math.clz32 ? Math.clz32 : ad;
    var bd = Math.log;
    var cd = Math.LN2;
    function ad(a) {
      return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
    }
    var dd = r.unstable_UserBlockingPriority;
    var ed = r.unstable_runWithPriority;
    var fd = true;
    function gd(a, b, c, d) {
      Kb || Ib();
      var e = hd, f = Kb;
      Kb = true;
      try {
        Hb(e, a, b, c, d);
      } finally {
        (Kb = f) || Mb();
      }
    }
    function id(a, b, c, d) {
      ed(dd, hd.bind(null, a, b, c, d));
    }
    function hd(a, b, c, d) {
      if (fd) {
        var e;
        if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
          a = rc(null, a, b, c, d), jc.push(a);
        else {
          var f = yc(a, b, c, d);
          if (f === null)
            e && sc(a, d);
          else {
            if (e) {
              if (-1 < qc.indexOf(a)) {
                a = rc(f, a, b, c, d);
                jc.push(a);
                return;
              }
              if (uc(f, a, b, c, d))
                return;
              sc(a, d);
            }
            jd(a, b, d, null, c);
          }
        }
      }
    }
    function yc(a, b, c, d) {
      var e = xb(d);
      e = wc(e);
      if (e !== null) {
        var f = Zb(e);
        if (f === null)
          e = null;
        else {
          var g = f.tag;
          if (g === 13) {
            e = $b(f);
            if (e !== null)
              return e;
            e = null;
          } else if (g === 3) {
            if (f.stateNode.hydrate)
              return f.tag === 3 ? f.stateNode.containerInfo : null;
            e = null;
          } else
            f !== e && (e = null);
        }
      }
      jd(a, b, d, e, c);
      return null;
    }
    var kd = null;
    var ld = null;
    var md = null;
    function nd() {
      if (md)
        return md;
      var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++)
        ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
        ;
      return md = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function od(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
      a === 10 && (a = 13);
      return 32 <= a || a === 13 ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b(b2, d, e, f, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for (var c in a)
          a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
        this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      m(b.prototype, {preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd});
      return b;
    }
    var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0};
    var td = rd(sd);
    var ud = m({}, sd, {view: 0, detail: 0});
    var vd = rd(ud);
    var wd;
    var xd;
    var yd;
    var Ad = m({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a)
        return a.movementX;
      a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    }});
    var Bd = rd(Ad);
    var Cd = m({}, Ad, {dataTransfer: 0});
    var Dd = rd(Cd);
    var Ed = m({}, ud, {relatedTarget: 0});
    var Fd = rd(Ed);
    var Gd = m({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
    var Hd = rd(Gd);
    var Id = m({}, sd, {clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }});
    var Jd = rd(Id);
    var Kd = m({}, sd, {data: 0});
    var Ld = rd(Kd);
    var Md = {
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
    };
    var Nd = {
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
    };
    var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
    function Pd(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = m({}, ud, {key: function(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if (b !== "Unidentified")
          return b;
      }
      return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return a.type === "keypress" ? od(a) : 0;
    }, keyCode: function(a) {
      return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    }, which: function(a) {
      return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    }});
    var Rd = rd(Qd);
    var Sd = m({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
    var Td = rd(Sd);
    var Ud = m({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
    var Vd = rd(Ud);
    var Wd = m({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
    var Xd = rd(Wd);
    var Yd = m({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var Zd = rd(Yd);
    var $d = [9, 13, 27, 32];
    var ae = fa && "CompositionEvent" in window;
    var be = null;
    fa && "documentMode" in document && (be = document.documentMode);
    var ce = fa && "TextEvent" in window && !be;
    var de = fa && (!ae || be && 8 < be && 11 >= be);
    var ee = String.fromCharCode(32);
    var fe = false;
    function ge(a, b) {
      switch (a) {
        case "keyup":
          return $d.indexOf(b.keyCode) !== -1;
        case "keydown":
          return b.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return typeof a === "object" && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b) {
      switch (a) {
        case "compositionend":
          return he(b);
        case "keypress":
          if (b.which !== 32)
            return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie)
        return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length)
              return b.char;
            if (b.which)
              return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de && b.locale !== "ko" ? null : b.data;
        default:
          return null;
      }
    }
    var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
    function me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
    }
    function ne(a, b, c, d) {
      Eb(d);
      b = oe(b, "onChange");
      0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({event: c, listeners: b}));
    }
    var pe = null;
    var qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b))
        return a;
    }
    function ve(a, b) {
      if (a === "change")
        return b;
    }
    var we = false;
    if (fa) {
      if (fa) {
        ye = "oninput" in document;
        if (!ye) {
          ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = typeof ze.oninput === "function";
        }
        xe = ye;
      } else
        xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    var xe;
    var ye;
    var ze;
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if (a.propertyName === "value" && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        a = re;
        if (Kb)
          a(b);
        else {
          Kb = true;
          try {
            Gb(a, b);
          } finally {
            Kb = false, Mb();
          }
        }
      }
    }
    function Ce(a, b, c) {
      a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
    }
    function De(a) {
      if (a === "selectionchange" || a === "keyup" || a === "keydown")
        return te(qe);
    }
    function Ee(a, b) {
      if (a === "click")
        return te(b);
    }
    function Fe(a, b) {
      if (a === "input" || a === "change")
        return te(b);
    }
    function Ge(a, b) {
      return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = typeof Object.is === "function" ? Object.is : Ge;
    var Ie = Object.prototype.hasOwnProperty;
    function Je(a, b) {
      if (He(a, b))
        return true;
      if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
        return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length)
        return false;
      for (d = 0; d < c.length; d++)
        if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
          return false;
      return true;
    }
    function Ke(a) {
      for (; a && a.firstChild; )
        a = a.firstChild;
      return a;
    }
    function Le(a, b) {
      var c = Ke(a);
      a = 0;
      for (var d; c; ) {
        if (c.nodeType === 3) {
          d = a + c.textContent.length;
          if (a <= b && d >= b)
            return {node: c, offset: b - a};
          a = d;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Ke(c);
      }
    }
    function Me(a, b) {
      return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Ne() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = typeof b.contentWindow.location.href === "string";
        } catch (d) {
          c = false;
        }
        if (c)
          a = b.contentWindow;
        else
          break;
        b = Xa(a.document);
      }
      return b;
    }
    function Oe(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
    }
    var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
    var Qe = null;
    var Re = null;
    var Se = null;
    var Te = false;
    function Ue(a, b, c) {
      var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
      Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {start: d.selectionStart, end: d.selectionEnd} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset}), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({event: b, listeners: d}), b.target = Qe)));
    }
    Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
    Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
    Pc(Oc, 2);
    for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
      Nc.set(Ve[We], 0);
    ea("onMouseEnter", ["mouseout", "mouseover"]);
    ea("onMouseLeave", ["mouseout", "mouseover"]);
    ea("onPointerEnter", ["pointerout", "pointerover"]);
    ea("onPointerLeave", ["pointerout", "pointerover"]);
    da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
    var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
    function Ze(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Yb(d, b, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b) {
      b = (b & 4) !== 0;
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f = void 0;
          if (b)
            for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k = h.instance, l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped())
                break a;
              Ze(e, h, l);
              f = k;
            }
          else
            for (g = 0; g < d.length; g++) {
              h = d[g];
              k = h.instance;
              l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped())
                break a;
              Ze(e, h, l);
              f = k;
            }
        }
      }
      if (Ub)
        throw a = Vb, Ub = false, Vb = null, a;
    }
    function G(a, b) {
      var c = $e(b), d = a + "__bubble";
      c.has(d) || (af(b, a, 2, false), c.add(d));
    }
    var bf = "_reactListening" + Math.random().toString(36).slice(2);
    function cf(a) {
      a[bf] || (a[bf] = true, ba.forEach(function(b) {
        Ye.has(b) || df(b, false, a, null);
        df(b, true, a, null);
      }));
    }
    function df(a, b, c, d) {
      var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c;
      a === "selectionchange" && c.nodeType !== 9 && (f = c.ownerDocument);
      if (d !== null && !b && Ye.has(a)) {
        if (a !== "scroll")
          return;
        e |= 2;
        f = d;
      }
      var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
      g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
    }
    function af(a, b, c, d) {
      var e = Nc.get(b);
      switch (e === void 0 ? 2 : e) {
        case 0:
          e = gd;
          break;
        case 1:
          e = id;
          break;
        default:
          e = hd;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
      d ? e !== void 0 ? a.addEventListener(b, c, {capture: true, passive: e}) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, {passive: e}) : a.addEventListener(b, c, false);
    }
    function jd(a, b, c, d, e) {
      var f = d;
      if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
        a:
          for (; ; ) {
            if (d === null)
              return;
            var g = d.tag;
            if (g === 3 || g === 4) {
              var h = d.stateNode.containerInfo;
              if (h === e || h.nodeType === 8 && h.parentNode === e)
                break;
              if (g === 4)
                for (g = d.return; g !== null; ) {
                  var k = g.tag;
                  if (k === 3 || k === 4) {
                    if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                      return;
                  }
                  g = g.return;
                }
              for (; h !== null; ) {
                g = wc(h);
                if (g === null)
                  return;
                k = g.tag;
                if (k === 5 || k === 6) {
                  d = f = g;
                  continue a;
                }
                h = h.parentNode;
              }
            }
            d = d.return;
          }
      Nb(function() {
        var d2 = f, e2 = xb(c), g2 = [];
        a: {
          var h2 = Mc.get(a);
          if (h2 !== void 0) {
            var k2 = td, x = a;
            switch (a) {
              case "keypress":
                if (od(c) === 0)
                  break a;
              case "keydown":
              case "keyup":
                k2 = Rd;
                break;
              case "focusin":
                x = "focus";
                k2 = Fd;
                break;
              case "focusout":
                x = "blur";
                k2 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k2 = Fd;
                break;
              case "click":
                if (c.button === 2)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k2 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k2 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k2 = Vd;
                break;
              case Ic:
              case Jc:
              case Kc:
                k2 = Hd;
                break;
              case Lc:
                k2 = Xd;
                break;
              case "scroll":
                k2 = vd;
                break;
              case "wheel":
                k2 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k2 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k2 = Td;
            }
            var w = (b & 4) !== 0, z = !w && a === "scroll", u = w ? h2 !== null ? h2 + "Capture" : null : h2;
            w = [];
            for (var t = d2, q; t !== null; ) {
              q = t;
              var v = q.stateNode;
              q.tag === 5 && v !== null && (q = v, u !== null && (v = Ob(t, u), v != null && w.push(ef(t, v, q))));
              if (z)
                break;
              t = t.return;
            }
            0 < w.length && (h2 = new k2(h2, x, null, c, e2), g2.push({event: h2, listeners: w}));
          }
        }
        if ((b & 7) === 0) {
          a: {
            h2 = a === "mouseover" || a === "pointerover";
            k2 = a === "mouseout" || a === "pointerout";
            if (h2 && (b & 16) === 0 && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff]))
              break a;
            if (k2 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k2) {
                if (x = c.relatedTarget || c.toElement, k2 = d2, x = x ? wc(x) : null, x !== null && (z = Zb(x), x !== z || x.tag !== 5 && x.tag !== 6))
                  x = null;
              } else
                k2 = null, x = d2;
              if (k2 !== x) {
                w = Bd;
                v = "onMouseLeave";
                u = "onMouseEnter";
                t = "mouse";
                if (a === "pointerout" || a === "pointerover")
                  w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
                z = k2 == null ? h2 : ue(k2);
                q = x == null ? h2 : ue(x);
                h2 = new w(v, t + "leave", k2, c, e2);
                h2.target = z;
                h2.relatedTarget = q;
                v = null;
                wc(e2) === d2 && (w = new w(u, t + "enter", x, c, e2), w.target = q, w.relatedTarget = z, v = w);
                z = v;
                if (k2 && x)
                  b: {
                    w = k2;
                    u = x;
                    t = 0;
                    for (q = w; q; q = gf(q))
                      t++;
                    q = 0;
                    for (v = u; v; v = gf(v))
                      q++;
                    for (; 0 < t - q; )
                      w = gf(w), t--;
                    for (; 0 < q - t; )
                      u = gf(u), q--;
                    for (; t--; ) {
                      if (w === u || u !== null && w === u.alternate)
                        break b;
                      w = gf(w);
                      u = gf(u);
                    }
                    w = null;
                  }
                else
                  w = null;
                k2 !== null && hf(g2, h2, k2, w, false);
                x !== null && z !== null && hf(g2, z, x, w, true);
              }
            }
          }
          a: {
            h2 = d2 ? ue(d2) : window;
            k2 = h2.nodeName && h2.nodeName.toLowerCase();
            if (k2 === "select" || k2 === "input" && h2.type === "file")
              var J = ve;
            else if (me(h2))
              if (we)
                J = Fe;
              else {
                J = De;
                var K = Ce;
              }
            else
              (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (J = Ee);
            if (J && (J = J(a, d2))) {
              ne(g2, J, c, e2);
              break a;
            }
            K && K(a, h2, d2);
            a === "focusout" && (K = h2._wrapperState) && K.controlled && h2.type === "number" && bb(h2, "number", h2.value);
          }
          K = d2 ? ue(d2) : window;
          switch (a) {
            case "focusin":
              if (me(K) || K.contentEditable === "true")
                Qe = K, Re = d2, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g2, c, e2);
              break;
            case "selectionchange":
              if (Pe)
                break;
            case "keydown":
            case "keyup":
              Ue(g2, c, e2);
          }
          var Q;
          if (ae)
            b: {
              switch (a) {
                case "compositionstart":
                  var L = "onCompositionStart";
                  break b;
                case "compositionend":
                  L = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  L = "onCompositionUpdate";
                  break b;
              }
              L = void 0;
            }
          else
            ie ? ge(a, c) && (L = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L = "onCompositionStart");
          L && (de && c.locale !== "ko" && (ie || L !== "onCompositionStart" ? L === "onCompositionEnd" && ie && (Q = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d2, L), 0 < K.length && (L = new Ld(L, a, null, c, e2), g2.push({event: L, listeners: K}), Q ? L.data = Q : (Q = he(c), Q !== null && (L.data = Q))));
          if (Q = ce ? je(a, c) : ke(a, c))
            d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({event: e2, listeners: d2}), e2.data = Q);
        }
        se(g2, b);
      });
    }
    function ef(a, b, c) {
      return {instance: a, listener: b, currentTarget: c};
    }
    function oe(a, b) {
      for (var c = b + "Capture", d = []; a !== null; ) {
        var e = a, f = e.stateNode;
        e.tag === 5 && f !== null && (e = f, f = Ob(a, c), f != null && d.unshift(ef(a, f, e)), f = Ob(a, b), f != null && d.push(ef(a, f, e)));
        a = a.return;
      }
      return d;
    }
    function gf(a) {
      if (a === null)
        return null;
      do
        a = a.return;
      while (a && a.tag !== 5);
      return a ? a : null;
    }
    function hf(a, b, c, d, e) {
      for (var f = b._reactName, g = []; c !== null && c !== d; ) {
        var h = c, k = h.alternate, l = h.stateNode;
        if (k !== null && k === d)
          break;
        h.tag === 5 && l !== null && (h = l, e ? (k = Ob(c, f), k != null && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), k != null && g.push(ef(c, k, h))));
        c = c.return;
      }
      g.length !== 0 && a.push({event: b, listeners: g});
    }
    function jf() {
    }
    var kf = null;
    var lf = null;
    function mf(a, b) {
      switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!b.autoFocus;
      }
      return false;
    }
    function nf(a, b) {
      return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
    }
    var of = typeof setTimeout === "function" ? setTimeout : void 0;
    var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
    function qf(a) {
      a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
    }
    function rf(a) {
      for (; a != null; a = a.nextSibling) {
        var b = a.nodeType;
        if (b === 1 || b === 3)
          break;
      }
      return a;
    }
    function sf(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "$" || c === "$!" || c === "$?") {
            if (b === 0)
              return a;
            b--;
          } else
            c === "/$" && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var tf = 0;
    function uf(a) {
      return {$$typeof: Ga, toString: a, valueOf: a};
    }
    var vf = Math.random().toString(36).slice(2);
    var wf = "__reactFiber$" + vf;
    var xf = "__reactProps$" + vf;
    var ff = "__reactContainer$" + vf;
    var yf = "__reactEvents$" + vf;
    function wc(a) {
      var b = a[wf];
      if (b)
        return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[ff] || c[wf]) {
          c = b.alternate;
          if (b.child !== null || c !== null && c.child !== null)
            for (a = sf(a); a !== null; ) {
              if (c = a[wf])
                return c;
              a = sf(a);
            }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[wf] || a[ff];
      return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
    }
    function ue(a) {
      if (a.tag === 5 || a.tag === 6)
        return a.stateNode;
      throw Error(y(33));
    }
    function Db(a) {
      return a[xf] || null;
    }
    function $e(a) {
      var b = a[yf];
      b === void 0 && (b = a[yf] = new Set());
      return b;
    }
    var zf = [];
    var Af = -1;
    function Bf(a) {
      return {current: a};
    }
    function H(a) {
      0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
    }
    function I(a, b) {
      Af++;
      zf[Af] = a.current;
      a.current = b;
    }
    var Cf = {};
    var M = Bf(Cf);
    var N = Bf(false);
    var Df = Cf;
    function Ef(a, b) {
      var c = a.type.contextTypes;
      if (!c)
        return Cf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
        return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f;
      for (f in c)
        e[f] = b[f];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Ff(a) {
      a = a.childContextTypes;
      return a !== null && a !== void 0;
    }
    function Gf() {
      H(N);
      H(M);
    }
    function Hf(a, b, c) {
      if (M.current !== Cf)
        throw Error(y(168));
      I(M, b);
      I(N, c);
    }
    function If(a, b, c) {
      var d = a.stateNode;
      a = b.childContextTypes;
      if (typeof d.getChildContext !== "function")
        return c;
      d = d.getChildContext();
      for (var e in d)
        if (!(e in a))
          throw Error(y(108, Ra(b) || "Unknown", e));
      return m({}, c, d);
    }
    function Jf(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
      Df = M.current;
      I(M, a);
      I(N, N.current);
      return true;
    }
    function Kf(a, b, c) {
      var d = a.stateNode;
      if (!d)
        throw Error(y(169));
      c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
      I(N, c);
    }
    var Lf = null;
    var Mf = null;
    var Nf = r.unstable_runWithPriority;
    var Of = r.unstable_scheduleCallback;
    var Pf = r.unstable_cancelCallback;
    var Qf = r.unstable_shouldYield;
    var Rf = r.unstable_requestPaint;
    var Sf = r.unstable_now;
    var Tf = r.unstable_getCurrentPriorityLevel;
    var Uf = r.unstable_ImmediatePriority;
    var Vf = r.unstable_UserBlockingPriority;
    var Wf = r.unstable_NormalPriority;
    var Xf = r.unstable_LowPriority;
    var Yf = r.unstable_IdlePriority;
    var Zf = {};
    var $f = Rf !== void 0 ? Rf : function() {
    };
    var ag = null;
    var bg = null;
    var cg = false;
    var dg = Sf();
    var O = 1e4 > dg ? Sf : function() {
      return Sf() - dg;
    };
    function eg() {
      switch (Tf()) {
        case Uf:
          return 99;
        case Vf:
          return 98;
        case Wf:
          return 97;
        case Xf:
          return 96;
        case Yf:
          return 95;
        default:
          throw Error(y(332));
      }
    }
    function fg(a) {
      switch (a) {
        case 99:
          return Uf;
        case 98:
          return Vf;
        case 97:
          return Wf;
        case 96:
          return Xf;
        case 95:
          return Yf;
        default:
          throw Error(y(332));
      }
    }
    function gg(a, b) {
      a = fg(a);
      return Nf(a, b);
    }
    function hg(a, b, c) {
      a = fg(a);
      return Of(a, b, c);
    }
    function ig() {
      if (bg !== null) {
        var a = bg;
        bg = null;
        Pf(a);
      }
      jg();
    }
    function jg() {
      if (!cg && ag !== null) {
        cg = true;
        var a = 0;
        try {
          var b = ag;
          gg(99, function() {
            for (; a < b.length; a++) {
              var c = b[a];
              do
                c = c(true);
              while (c !== null);
            }
          });
          ag = null;
        } catch (c) {
          throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
        } finally {
          cg = false;
        }
      }
    }
    var kg = ra.ReactCurrentBatchConfig;
    function lg(a, b) {
      if (a && a.defaultProps) {
        b = m({}, b);
        a = a.defaultProps;
        for (var c in a)
          b[c] === void 0 && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    var mg = Bf(null);
    var ng = null;
    var og = null;
    var pg = null;
    function qg() {
      pg = og = ng = null;
    }
    function rg(a) {
      var b = mg.current;
      H(mg);
      a.type._context._currentValue = b;
    }
    function sg(a, b) {
      for (; a !== null; ) {
        var c = a.alternate;
        if ((a.childLanes & b) === b)
          if (c === null || (c.childLanes & b) === b)
            break;
          else
            c.childLanes |= b;
        else
          a.childLanes |= b, c !== null && (c.childLanes |= b);
        a = a.return;
      }
    }
    function tg(a, b) {
      ng = a;
      pg = og = null;
      a = a.dependencies;
      a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
    }
    function vg(a, b) {
      if (pg !== a && b !== false && b !== 0) {
        if (typeof b !== "number" || b === 1073741823)
          pg = a, b = 1073741823;
        b = {context: a, observedBits: b, next: null};
        if (og === null) {
          if (ng === null)
            throw Error(y(308));
          og = b;
          ng.dependencies = {lanes: 0, firstContext: b, responders: null};
        } else
          og = og.next = b;
      }
      return a._currentValue;
    }
    var wg = false;
    function xg(a) {
      a.updateQueue = {baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
    }
    function yg(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = {baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects});
    }
    function zg(a, b) {
      return {eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null};
    }
    function Ag(a, b) {
      a = a.updateQueue;
      if (a !== null) {
        a = a.shared;
        var c = a.pending;
        c === null ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
    }
    function Bg(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (d !== null && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (c !== null) {
          do {
            var g = {eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null};
            f === null ? e = f = g : f = f.next = g;
            c = c.next;
          } while (c !== null);
          f === null ? e = f = b : f = f.next = b;
        } else
          e = f = b;
        c = {baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects};
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      a === null ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function Cg(a, b, c, d) {
      var e = a.updateQueue;
      wg = false;
      var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (h !== null) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        g === null ? f = l : g.next = l;
        g = k;
        var n = a.alternate;
        if (n !== null) {
          n = n.updateQueue;
          var A = n.lastBaseUpdate;
          A !== g && (A === null ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
        }
      }
      if (f !== null) {
        A = e.baseState;
        g = 0;
        n = l = k = null;
        do {
          h = f.lane;
          var p = f.eventTime;
          if ((d & h) === h) {
            n !== null && (n = n.next = {
              eventTime: p,
              lane: 0,
              tag: f.tag,
              payload: f.payload,
              callback: f.callback,
              next: null
            });
            a: {
              var C = a, x = f;
              h = b;
              p = c;
              switch (x.tag) {
                case 1:
                  C = x.payload;
                  if (typeof C === "function") {
                    A = C.call(p, A, h);
                    break a;
                  }
                  A = C;
                  break a;
                case 3:
                  C.flags = C.flags & -4097 | 64;
                case 0:
                  C = x.payload;
                  h = typeof C === "function" ? C.call(p, A, h) : C;
                  if (h === null || h === void 0)
                    break a;
                  A = m({}, A, h);
                  break a;
                case 2:
                  wg = true;
              }
            }
            f.callback !== null && (a.flags |= 32, h = e.effects, h === null ? e.effects = [f] : h.push(f));
          } else
            p = {eventTime: p, lane: h, tag: f.tag, payload: f.payload, callback: f.callback, next: null}, n === null ? (l = n = p, k = A) : n = n.next = p, g |= h;
          f = f.next;
          if (f === null)
            if (h = e.shared.pending, h === null)
              break;
            else
              f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
        } while (1);
        n === null && (k = A);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = n;
        Dg |= g;
        a.lanes = g;
        a.memoizedState = A;
      }
    }
    function Eg(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (a !== null)
        for (b = 0; b < a.length; b++) {
          var d = a[b], e = d.callback;
          if (e !== null) {
            d.callback = null;
            d = c;
            if (typeof e !== "function")
              throw Error(y(191, e));
            e.call(d);
          }
        }
    }
    var Fg = new aa.Component().refs;
    function Gg(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = c === null || c === void 0 ? b : m({}, b, c);
      a.memoizedState = c;
      a.lanes === 0 && (a.updateQueue.baseState = c);
    }
    var Kg = {isMounted: function(a) {
      return (a = a._reactInternals) ? Zb(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d = Hg(), e = Ig(a), f = zg(d, e);
      f.payload = b;
      c !== void 0 && c !== null && (f.callback = c);
      Ag(a, f);
      Jg(a, e, d);
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = Hg(), e = Ig(a), f = zg(d, e);
      f.tag = 1;
      f.payload = b;
      c !== void 0 && c !== null && (f.callback = c);
      Ag(a, f);
      Jg(a, e, d);
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = Hg(), d = Ig(a), e = zg(c, d);
      e.tag = 2;
      b !== void 0 && b !== null && (e.callback = b);
      Ag(a, e);
      Jg(a, d, c);
    }};
    function Lg(a, b, c, d, e, f, g) {
      a = a.stateNode;
      return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : true;
    }
    function Mg(a, b, c) {
      var d = false, e = Cf;
      var f = b.contextType;
      typeof f === "object" && f !== null ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
      b = new b(c, f);
      a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
      b.updater = Kg;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
      return b;
    }
    function Ng(a, b, c, d) {
      a = b.state;
      typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
      typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
    }
    function Og(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = Fg;
      xg(a);
      var f = b.contextType;
      typeof f === "object" && f !== null ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
      Cg(a, c, e, d);
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      typeof f === "function" && (Gg(a, b, f, c), e.state = a.memoizedState);
      typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
      typeof e.componentDidMount === "function" && (a.flags |= 4);
    }
    var Pg = Array.isArray;
    function Qg(a, b, c) {
      a = c.ref;
      if (a !== null && typeof a !== "function" && typeof a !== "object") {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (c.tag !== 1)
              throw Error(y(309));
            var d = c.stateNode;
          }
          if (!d)
            throw Error(y(147, a));
          var e = "" + a;
          if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
            return b.ref;
          b = function(a2) {
            var b2 = d.refs;
            b2 === Fg && (b2 = d.refs = {});
            a2 === null ? delete b2[e] : b2[e] = a2;
          };
          b._stringRef = e;
          return b;
        }
        if (typeof a !== "string")
          throw Error(y(284));
        if (!c._owner)
          throw Error(y(290, a));
      }
      return a;
    }
    function Rg(a, b) {
      if (a.type !== "textarea")
        throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
    }
    function Sg(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.lastEffect;
          d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
          c2.nextEffect = null;
          c2.flags = 8;
        }
      }
      function c(c2, d2) {
        if (!a)
          return null;
        for (; d2 !== null; )
          b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = new Map(); b2 !== null; )
          b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Tg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f(b2, c2, d2) {
        b2.index = d2;
        if (!a)
          return c2;
        d2 = b2.alternate;
        if (d2 !== null)
          return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
        b2.flags = 2;
        return c2;
      }
      function g(b2) {
        a && b2.alternate === null && (b2.flags = 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (b2 === null || b2.tag !== 6)
          return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k(a2, b2, c2, d2) {
        if (b2 !== null && b2.elementType === c2.type)
          return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
        d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Qg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l(a2, b2, c2, d2) {
        if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
          return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function n(a2, b2, c2, d2, f2) {
        if (b2 === null || b2.tag !== 7)
          return b2 = Xg(c2, a2.mode, d2, f2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function A(a2, b2, c2) {
        if (typeof b2 === "string" || typeof b2 === "number")
          return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
        if (typeof b2 === "object" && b2 !== null) {
          switch (b2.$$typeof) {
            case sa:
              return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
            case ta:
              return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
          }
          if (Pg(b2) || La(b2))
            return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Rg(a2, b2);
        }
        return null;
      }
      function p(a2, b2, c2, d2) {
        var e2 = b2 !== null ? b2.key : null;
        if (typeof c2 === "string" || typeof c2 === "number")
          return e2 !== null ? null : h(a2, b2, "" + c2, d2);
        if (typeof c2 === "object" && c2 !== null) {
          switch (c2.$$typeof) {
            case sa:
              return c2.key === e2 ? c2.type === ua ? n(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
            case ta:
              return c2.key === e2 ? l(a2, b2, c2, d2) : null;
          }
          if (Pg(c2) || La(c2))
            return e2 !== null ? null : n(a2, b2, c2, d2, null);
          Rg(a2, c2);
        }
        return null;
      }
      function C(a2, b2, c2, d2, e2) {
        if (typeof d2 === "string" || typeof d2 === "number")
          return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if (typeof d2 === "object" && d2 !== null) {
          switch (d2.$$typeof) {
            case sa:
              return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
            case ta:
              return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l(b2, a2, d2, e2);
          }
          if (Pg(d2) || La(d2))
            return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
          Rg(b2, d2);
        }
        return null;
      }
      function x(e2, g2, h2, k2) {
        for (var l2 = null, t = null, u = g2, z = g2 = 0, q = null; u !== null && z < h2.length; z++) {
          u.index > z ? (q = u, u = null) : q = u.sibling;
          var n2 = p(e2, u, h2[z], k2);
          if (n2 === null) {
            u === null && (u = q);
            break;
          }
          a && u && n2.alternate === null && b(e2, u);
          g2 = f(n2, g2, z);
          t === null ? l2 = n2 : t.sibling = n2;
          t = n2;
          u = q;
        }
        if (z === h2.length)
          return c(e2, u), l2;
        if (u === null) {
          for (; z < h2.length; z++)
            u = A(e2, h2[z], k2), u !== null && (g2 = f(u, g2, z), t === null ? l2 = u : t.sibling = u, t = u);
          return l2;
        }
        for (u = d(e2, u); z < h2.length; z++)
          q = C(u, e2, z, h2[z], k2), q !== null && (a && q.alternate !== null && u.delete(q.key === null ? z : q.key), g2 = f(q, g2, z), t === null ? l2 = q : t.sibling = q, t = q);
        a && u.forEach(function(a2) {
          return b(e2, a2);
        });
        return l2;
      }
      function w(e2, g2, h2, k2) {
        var l2 = La(h2);
        if (typeof l2 !== "function")
          throw Error(y(150));
        h2 = l2.call(h2);
        if (h2 == null)
          throw Error(y(151));
        for (var t = l2 = null, u = g2, z = g2 = 0, q = null, n2 = h2.next(); u !== null && !n2.done; z++, n2 = h2.next()) {
          u.index > z ? (q = u, u = null) : q = u.sibling;
          var w2 = p(e2, u, n2.value, k2);
          if (w2 === null) {
            u === null && (u = q);
            break;
          }
          a && u && w2.alternate === null && b(e2, u);
          g2 = f(w2, g2, z);
          t === null ? l2 = w2 : t.sibling = w2;
          t = w2;
          u = q;
        }
        if (n2.done)
          return c(e2, u), l2;
        if (u === null) {
          for (; !n2.done; z++, n2 = h2.next())
            n2 = A(e2, n2.value, k2), n2 !== null && (g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
          return l2;
        }
        for (u = d(e2, u); !n2.done; z++, n2 = h2.next())
          n2 = C(u, e2, z, n2.value, k2), n2 !== null && (a && n2.alternate !== null && u.delete(n2.key === null ? z : n2.key), g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
        a && u.forEach(function(a2) {
          return b(e2, a2);
        });
        return l2;
      }
      return function(a2, d2, f2, h2) {
        var k2 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
        k2 && (f2 = f2.props.children);
        var l2 = typeof f2 === "object" && f2 !== null;
        if (l2)
          switch (f2.$$typeof) {
            case sa:
              a: {
                l2 = f2.key;
                for (k2 = d2; k2 !== null; ) {
                  if (k2.key === l2) {
                    switch (k2.tag) {
                      case 7:
                        if (f2.type === ua) {
                          c(a2, k2.sibling);
                          d2 = e(k2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                        break;
                      default:
                        if (k2.elementType === f2.type) {
                          c(a2, k2.sibling);
                          d2 = e(k2, f2.props);
                          d2.ref = Qg(a2, k2, f2);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                    }
                    c(a2, k2);
                    break;
                  } else
                    b(a2, k2);
                  k2 = k2.sibling;
                }
                f2.type === ua ? (d2 = Xg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Vg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f2), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case ta:
              a: {
                for (k2 = f2.key; d2 !== null; ) {
                  if (d2.key === k2)
                    if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                      c(a2, d2.sibling);
                      d2 = e(d2, f2.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                  else
                    b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = Wg(f2, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
          }
        if (typeof f2 === "string" || typeof f2 === "number")
          return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
        if (Pg(f2))
          return x(a2, d2, f2, h2);
        if (La(f2))
          return w(a2, d2, f2, h2);
        l2 && Rg(a2, f2);
        if (typeof f2 === "undefined" && !k2)
          switch (a2.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(y(152, Ra(a2.type) || "Component"));
          }
        return c(a2, d2);
      };
    }
    var Yg = Sg(true);
    var Zg = Sg(false);
    var $g = {};
    var ah = Bf($g);
    var bh = Bf($g);
    var ch = Bf($g);
    function dh(a) {
      if (a === $g)
        throw Error(y(174));
      return a;
    }
    function eh(a, b) {
      I(ch, b);
      I(bh, a);
      I(ah, $g);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
          break;
        default:
          a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
      }
      H(ah);
      I(ah, b);
    }
    function fh() {
      H(ah);
      H(bh);
      H(ch);
    }
    function gh(a) {
      dh(ch.current);
      var b = dh(ah.current);
      var c = mb(b, a.type);
      b !== c && (I(bh, a), I(ah, c));
    }
    function hh(a) {
      bh.current === a && (H(ah), H(bh));
    }
    var P = Bf(0);
    function ih(a) {
      for (var b = a; b !== null; ) {
        if (b.tag === 13) {
          var c = b.memoizedState;
          if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
            return b;
        } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
          if ((b.flags & 64) !== 0)
            return b;
        } else if (b.child !== null) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a)
          break;
        for (; b.sibling === null; ) {
          if (b.return === null || b.return === a)
            return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var jh = null;
    var kh = null;
    var lh = false;
    function mh(a, b) {
      var c = nh(5, null, null, 0);
      c.elementType = "DELETED";
      c.type = "DELETED";
      c.stateNode = b;
      c.return = a;
      c.flags = 8;
      a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
    }
    function oh(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return b !== null ? (a.stateNode = b, true) : false;
        case 6:
          return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
        case 13:
          return false;
        default:
          return false;
      }
    }
    function ph(a) {
      if (lh) {
        var b = kh;
        if (b) {
          var c = b;
          if (!oh(a, b)) {
            b = rf(c.nextSibling);
            if (!b || !oh(a, b)) {
              a.flags = a.flags & -1025 | 2;
              lh = false;
              jh = a;
              return;
            }
            mh(jh, c);
          }
          jh = a;
          kh = rf(b.firstChild);
        } else
          a.flags = a.flags & -1025 | 2, lh = false, jh = a;
      }
    }
    function qh(a) {
      for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
        a = a.return;
      jh = a;
    }
    function rh(a) {
      if (a !== jh)
        return false;
      if (!lh)
        return qh(a), lh = true, false;
      var b = a.type;
      if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
        for (b = kh; b; )
          mh(a, b), b = rf(b.nextSibling);
      qh(a);
      if (a.tag === 13) {
        a = a.memoizedState;
        a = a !== null ? a.dehydrated : null;
        if (!a)
          throw Error(y(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (a.nodeType === 8) {
              var c = a.data;
              if (c === "/$") {
                if (b === 0) {
                  kh = rf(a.nextSibling);
                  break a;
                }
                b--;
              } else
                c !== "$" && c !== "$!" && c !== "$?" || b++;
            }
            a = a.nextSibling;
          }
          kh = null;
        }
      } else
        kh = jh ? rf(a.stateNode.nextSibling) : null;
      return true;
    }
    function sh() {
      kh = jh = null;
      lh = false;
    }
    var th = [];
    function uh() {
      for (var a = 0; a < th.length; a++)
        th[a]._workInProgressVersionPrimary = null;
      th.length = 0;
    }
    var vh = ra.ReactCurrentDispatcher;
    var wh = ra.ReactCurrentBatchConfig;
    var xh = 0;
    var R = null;
    var S = null;
    var T = null;
    var yh = false;
    var zh = false;
    function Ah() {
      throw Error(y(321));
    }
    function Bh(a, b) {
      if (b === null)
        return false;
      for (var c = 0; c < b.length && c < a.length; c++)
        if (!He(a[c], b[c]))
          return false;
      return true;
    }
    function Ch(a, b, c, d, e, f) {
      xh = f;
      R = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      vh.current = a === null || a.memoizedState === null ? Dh : Eh;
      a = c(d, e);
      if (zh) {
        f = 0;
        do {
          zh = false;
          if (!(25 > f))
            throw Error(y(301));
          f += 1;
          T = S = null;
          b.updateQueue = null;
          vh.current = Fh;
          a = c(d, e);
        } while (zh);
      }
      vh.current = Gh;
      b = S !== null && S.next !== null;
      xh = 0;
      T = S = R = null;
      yh = false;
      if (b)
        throw Error(y(300));
      return a;
    }
    function Hh() {
      var a = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
      T === null ? R.memoizedState = T = a : T = T.next = a;
      return T;
    }
    function Ih() {
      if (S === null) {
        var a = R.alternate;
        a = a !== null ? a.memoizedState : null;
      } else
        a = S.next;
      var b = T === null ? R.memoizedState : T.next;
      if (b !== null)
        T = b, S = a;
      else {
        if (a === null)
          throw Error(y(310));
        S = a;
        a = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
        T === null ? R.memoizedState = T = a : T = T.next = a;
      }
      return T;
    }
    function Jh(a, b) {
      return typeof b === "function" ? b(a) : b;
    }
    function Kh(a) {
      var b = Ih(), c = b.queue;
      if (c === null)
        throw Error(y(311));
      c.lastRenderedReducer = a;
      var d = S, e = d.baseQueue, f = c.pending;
      if (f !== null) {
        if (e !== null) {
          var g = e.next;
          e.next = f.next;
          f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
      }
      if (e !== null) {
        e = e.next;
        d = d.baseState;
        var h = g = f = null, k = e;
        do {
          var l = k.lane;
          if ((xh & l) === l)
            h !== null && (h = h.next = {lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null}), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
          else {
            var n = {
              lane: l,
              action: k.action,
              eagerReducer: k.eagerReducer,
              eagerState: k.eagerState,
              next: null
            };
            h === null ? (g = h = n, f = d) : h = h.next = n;
            R.lanes |= l;
            Dg |= l;
          }
          k = k.next;
        } while (k !== null && k !== e);
        h === null ? f = d : h.next = g;
        He(d, b.memoizedState) || (ug = true);
        b.memoizedState = d;
        b.baseState = f;
        b.baseQueue = h;
        c.lastRenderedState = d;
      }
      return [b.memoizedState, c.dispatch];
    }
    function Lh(a) {
      var b = Ih(), c = b.queue;
      if (c === null)
        throw Error(y(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f = b.memoizedState;
      if (e !== null) {
        c.pending = null;
        var g = e = e.next;
        do
          f = a(f, g.action), g = g.next;
        while (g !== e);
        He(f, b.memoizedState) || (ug = true);
        b.memoizedState = f;
        b.baseQueue === null && (b.baseState = f);
        c.lastRenderedState = f;
      }
      return [f, d];
    }
    function Mh(a, b, c) {
      var d = b._getVersion;
      d = d(b._source);
      var e = b._workInProgressVersionPrimary;
      if (e !== null)
        a = e === d;
      else if (a = a.mutableReadLanes, a = (xh & a) === a)
        b._workInProgressVersionPrimary = d, th.push(b);
      if (a)
        return c(b._source);
      th.push(b);
      throw Error(y(350));
    }
    function Nh(a, b, c, d) {
      var e = U;
      if (e === null)
        throw Error(y(349));
      var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
        return Mh(e, b, c);
      }), l = k[1], n = k[0];
      k = T;
      var A = a.memoizedState, p = A.refs, C = p.getSnapshot, x = A.source;
      A = A.subscribe;
      var w = R;
      a.memoizedState = {refs: p, source: b, subscribe: d};
      h.useEffect(function() {
        p.getSnapshot = c;
        p.setSnapshot = l;
        var a2 = f(b._source);
        if (!He(g, a2)) {
          a2 = c(b._source);
          He(n, a2) || (l(a2), a2 = Ig(w), e.mutableReadLanes |= a2 & e.pendingLanes);
          a2 = e.mutableReadLanes;
          e.entangledLanes |= a2;
          for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
            var k2 = 31 - Vc(h2), v = 1 << k2;
            d2[k2] |= a2;
            h2 &= ~v;
          }
        }
      }, [c, b, d]);
      h.useEffect(function() {
        return d(b._source, function() {
          var a2 = p.getSnapshot, c2 = p.setSnapshot;
          try {
            c2(a2(b._source));
            var d2 = Ig(w);
            e.mutableReadLanes |= d2 & e.pendingLanes;
          } catch (q) {
            c2(function() {
              throw q;
            });
          }
        });
      }, [b, d]);
      He(C, c) && He(x, b) && He(A, d) || (a = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n}, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
      return n;
    }
    function Ph(a, b, c) {
      var d = Ih();
      return Nh(d, a, b, c);
    }
    function Qh(a) {
      var b = Hh();
      typeof a === "function" && (a = a());
      b.memoizedState = b.baseState = a;
      a = b.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a};
      a = a.dispatch = Oh.bind(null, R, a);
      return [b.memoizedState, a];
    }
    function Rh(a, b, c, d) {
      a = {tag: a, create: b, destroy: c, deps: d, next: null};
      b = R.updateQueue;
      b === null ? (b = {lastEffect: null}, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function Sh(a) {
      var b = Hh();
      a = {current: a};
      return b.memoizedState = a;
    }
    function Th() {
      return Ih().memoizedState;
    }
    function Uh(a, b, c, d) {
      var e = Hh();
      R.flags |= a;
      e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
    }
    function Vh(a, b, c, d) {
      var e = Ih();
      d = d === void 0 ? null : d;
      var f = void 0;
      if (S !== null) {
        var g = S.memoizedState;
        f = g.destroy;
        if (d !== null && Bh(d, g.deps)) {
          Rh(b, c, f, d);
          return;
        }
      }
      R.flags |= a;
      e.memoizedState = Rh(1 | b, c, f, d);
    }
    function Wh(a, b) {
      return Uh(516, 4, a, b);
    }
    function Xh(a, b) {
      return Vh(516, 4, a, b);
    }
    function Yh(a, b) {
      return Vh(4, 2, a, b);
    }
    function Zh(a, b) {
      if (typeof b === "function")
        return a = a(), b(a), function() {
          b(null);
        };
      if (b !== null && b !== void 0)
        return a = a(), b.current = a, function() {
          b.current = null;
        };
    }
    function $h(a, b, c) {
      c = c !== null && c !== void 0 ? c.concat([a]) : null;
      return Vh(4, 2, Zh.bind(null, b, a), c);
    }
    function ai() {
    }
    function bi(a, b) {
      var c = Ih();
      b = b === void 0 ? null : b;
      var d = c.memoizedState;
      if (d !== null && b !== null && Bh(b, d[1]))
        return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ci(a, b) {
      var c = Ih();
      b = b === void 0 ? null : b;
      var d = c.memoizedState;
      if (d !== null && b !== null && Bh(b, d[1]))
        return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function di(a, b) {
      var c = eg();
      gg(98 > c ? 98 : c, function() {
        a(true);
      });
      gg(97 < c ? 97 : c, function() {
        var c2 = wh.transition;
        wh.transition = 1;
        try {
          a(false), b();
        } finally {
          wh.transition = c2;
        }
      });
    }
    function Oh(a, b, c) {
      var d = Hg(), e = Ig(a), f = {lane: e, action: c, eagerReducer: null, eagerState: null, next: null}, g = b.pending;
      g === null ? f.next = f : (f.next = g.next, g.next = f);
      b.pending = f;
      g = a.alternate;
      if (a === R || g !== null && g === R)
        zh = yh = true;
      else {
        if (a.lanes === 0 && (g === null || g.lanes === 0) && (g = b.lastRenderedReducer, g !== null))
          try {
            var h = b.lastRenderedState, k = g(h, c);
            f.eagerReducer = g;
            f.eagerState = k;
            if (He(k, h))
              return;
          } catch (l) {
          } finally {
          }
        Jg(a, e, d);
      }
    }
    var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
    var Dh = {readContext: vg, useCallback: function(a, b) {
      Hh().memoizedState = [a, b === void 0 ? null : b];
      return a;
    }, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
      c = c !== null && c !== void 0 ? c.concat([a]) : null;
      return Uh(4, 2, Zh.bind(null, b, a), c);
    }, useLayoutEffect: function(a, b) {
      return Uh(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = Hh();
      b = b === void 0 ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d = Hh();
      b = c !== void 0 ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = d.queue = {pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b};
      a = a.dispatch = Oh.bind(null, R, a);
      return [d.memoizedState, a];
    }, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
      var b = Qh(a), c = b[0], d = b[1];
      Wh(function() {
        var b2 = wh.transition;
        wh.transition = 1;
        try {
          d(a);
        } finally {
          wh.transition = b2;
        }
      }, [a]);
      return c;
    }, useTransition: function() {
      var a = Qh(false), b = a[0];
      a = di.bind(null, a[1]);
      Sh(a);
      return [a, b];
    }, useMutableSource: function(a, b, c) {
      var d = Hh();
      d.memoizedState = {refs: {getSnapshot: b, setSnapshot: null}, source: a, subscribe: c};
      return Nh(d, a, b, c);
    }, useOpaqueIdentifier: function() {
      if (lh) {
        var a = false, b = uf(function() {
          a || (a = true, c("r:" + (tf++).toString(36)));
          throw Error(y(355));
        }), c = Qh(b)[1];
        (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
          c("r:" + (tf++).toString(36));
        }, void 0, null));
        return b;
      }
      b = "r:" + (tf++).toString(36);
      Qh(b);
      return b;
    }, unstable_isNewReconciler: false};
    var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
      return Kh(Jh);
    }, useDebugValue: ai, useDeferredValue: function(a) {
      var b = Kh(Jh), c = b[0], d = b[1];
      Xh(function() {
        var b2 = wh.transition;
        wh.transition = 1;
        try {
          d(a);
        } finally {
          wh.transition = b2;
        }
      }, [a]);
      return c;
    }, useTransition: function() {
      var a = Kh(Jh)[0];
      return [
        Th().current,
        a
      ];
    }, useMutableSource: Ph, useOpaqueIdentifier: function() {
      return Kh(Jh)[0];
    }, unstable_isNewReconciler: false};
    var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
      return Lh(Jh);
    }, useDebugValue: ai, useDeferredValue: function(a) {
      var b = Lh(Jh), c = b[0], d = b[1];
      Xh(function() {
        var b2 = wh.transition;
        wh.transition = 1;
        try {
          d(a);
        } finally {
          wh.transition = b2;
        }
      }, [a]);
      return c;
    }, useTransition: function() {
      var a = Lh(Jh)[0];
      return [
        Th().current,
        a
      ];
    }, useMutableSource: Ph, useOpaqueIdentifier: function() {
      return Lh(Jh)[0];
    }, unstable_isNewReconciler: false};
    var ei = ra.ReactCurrentOwner;
    var ug = false;
    function fi(a, b, c, d) {
      b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
    }
    function gi(a, b, c, d, e) {
      c = c.render;
      var f = b.ref;
      tg(b, e);
      d = Ch(a, b, c, d, f, e);
      if (a !== null && !ug)
        return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
      b.flags |= 1;
      fi(a, b, d, e);
      return b.child;
    }
    function ii(a, b, c, d, e, f) {
      if (a === null) {
        var g = c.type;
        if (typeof g === "function" && !ji(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
          return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
        a = Vg(c.type, null, d, b, b.mode, f);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      g = a.child;
      if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
        return hi(a, b, f);
      b.flags |= 1;
      a = Tg(g, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function ki(a, b, c, d, e, f) {
      if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
        if (ug = false, (f & e) !== 0)
          (a.flags & 16384) !== 0 && (ug = true);
        else
          return b.lanes = a.lanes, hi(a, b, f);
      return li(a, b, c, d, f);
    }
    function mi(a, b, c) {
      var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
      if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
        if ((b.mode & 4) === 0)
          b.memoizedState = {baseLanes: 0}, ni(b, c);
        else if ((c & 1073741824) !== 0)
          b.memoizedState = {baseLanes: 0}, ni(b, f !== null ? f.baseLanes : c);
        else
          return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {baseLanes: a}, ni(b, a), null;
      else
        f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
      fi(a, b, e, c);
      return b.child;
    }
    function oi(a, b) {
      var c = b.ref;
      if (a === null && c !== null || a !== null && a.ref !== c)
        b.flags |= 128;
    }
    function li(a, b, c, d, e) {
      var f = Ff(c) ? Df : M.current;
      f = Ef(b, f);
      tg(b, e);
      c = Ch(a, b, c, d, f, e);
      if (a !== null && !ug)
        return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
      b.flags |= 1;
      fi(a, b, c, e);
      return b.child;
    }
    function pi(a, b, c, d, e) {
      if (Ff(c)) {
        var f = true;
        Jf(b);
      } else
        f = false;
      tg(b, e);
      if (b.stateNode === null)
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
      else if (a === null) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        typeof l === "object" && l !== null ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
        var n = c.getDerivedStateFromProps, A = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
        A || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l) && Ng(b, g, d, l);
        wg = false;
        var p = b.memoizedState;
        g.state = p;
        Cg(b, d, g, e);
        k = b.memoizedState;
        h !== d || p !== k || N.current || wg ? (typeof n === "function" && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4)) : (typeof g.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4), d = false);
      } else {
        g = b.stateNode;
        yg(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : lg(b.type, h);
        g.props = l;
        A = b.pendingProps;
        p = g.context;
        k = c.contextType;
        typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
        var C = c.getDerivedStateFromProps;
        (n = typeof C === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== A || p !== k) && Ng(b, g, d, k);
        wg = false;
        p = b.memoizedState;
        g.state = p;
        Cg(b, d, g, e);
        var x = b.memoizedState;
        h !== A || p !== x || N.current || wg ? (typeof C === "function" && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = false);
      }
      return qi(a, b, c, d, f, e);
    }
    function qi(a, b, c, d, e, f) {
      oi(a, b);
      var g = (b.flags & 64) !== 0;
      if (!d && !g)
        return e && Kf(b, c, false), hi(a, b, f);
      d = b.stateNode;
      ei.current = b;
      var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
      b.flags |= 1;
      a !== null && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
      b.memoizedState = d.state;
      e && Kf(b, c, true);
      return b.child;
    }
    function ri(a) {
      var b = a.stateNode;
      b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
      eh(a, b.containerInfo);
    }
    var si = {dehydrated: null, retryLane: 0};
    function ti(a, b, c) {
      var d = b.pendingProps, e = P.current, f = false, g;
      (g = (b.flags & 64) !== 0) || (g = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
      g ? (f = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
      I(P, e & 1);
      if (a === null) {
        d.fallback !== void 0 && ph(b);
        a = d.children;
        e = d.fallback;
        if (f)
          return a = ui(b, a, e, c), b.child.memoizedState = {baseLanes: c}, b.memoizedState = si, a;
        if (typeof d.unstable_expectedLoadTime === "number")
          return a = ui(b, a, e, c), b.child.memoizedState = {baseLanes: c}, b.memoizedState = si, b.lanes = 33554432, a;
        c = vi({mode: "visible", children: a}, b.mode, c, null);
        c.return = b;
        return b.child = c;
      }
      if (a.memoizedState !== null) {
        if (f)
          return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? {baseLanes: c} : {baseLanes: e.baseLanes | c}, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
        c = xi(a, b, d.children, c);
        b.memoizedState = null;
        return c;
      }
      if (f)
        return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? {baseLanes: c} : {baseLanes: e.baseLanes | c}, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
      c = xi(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }
    function ui(a, b, c, d) {
      var e = a.mode, f = a.child;
      b = {mode: "hidden", children: b};
      (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
      c = Xg(c, e, d, null);
      f.return = a;
      c.return = a;
      f.sibling = c;
      a.child = f;
      return c;
    }
    function xi(a, b, c, d) {
      var e = a.child;
      a = e.sibling;
      c = Tg(e, {mode: "visible", children: c});
      (b.mode & 2) === 0 && (c.lanes = d);
      c.return = b;
      c.sibling = null;
      a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
      return b.child = c;
    }
    function wi(a, b, c, d, e) {
      var f = b.mode, g = a.child;
      a = g.sibling;
      var h = {mode: "hidden", children: c};
      (f & 2) === 0 && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, g !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
      a !== null ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
      d.return = b;
      c.return = b;
      c.sibling = d;
      b.child = c;
      return d;
    }
    function yi(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      c !== null && (c.lanes |= b);
      sg(a.return, b);
    }
    function zi(a, b, c, d, e, f) {
      var g = a.memoizedState;
      g === null ? a.memoizedState = {isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f} : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
    }
    function Ai(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f = d.tail;
      fi(a, b, d.children, c);
      d = P.current;
      if ((d & 2) !== 0)
        d = d & 1 | 2, b.flags |= 64;
      else {
        if (a !== null && (a.flags & 64) !== 0)
          a:
            for (a = b.child; a !== null; ) {
              if (a.tag === 13)
                a.memoizedState !== null && yi(a, c);
              else if (a.tag === 19)
                yi(a, c);
              else if (a.child !== null) {
                a.child.return = a;
                a = a.child;
                continue;
              }
              if (a === b)
                break a;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === b)
                  break a;
                a = a.return;
              }
              a.sibling.return = a.return;
              a = a.sibling;
            }
        d &= 1;
      }
      I(P, d);
      if ((b.mode & 2) === 0)
        b.memoizedState = null;
      else
        switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; c !== null; )
              a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
            c = e;
            c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            zi(b, false, e, c, f, b.lastEffect);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; e !== null; ) {
              a = e.alternate;
              if (a !== null && ih(a) === null) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            zi(b, true, c, null, f, b.lastEffect);
            break;
          case "together":
            zi(b, false, null, null, void 0, b.lastEffect);
            break;
          default:
            b.memoizedState = null;
        }
      return b.child;
    }
    function hi(a, b, c) {
      a !== null && (b.dependencies = a.dependencies);
      Dg |= b.lanes;
      if ((c & b.childLanes) !== 0) {
        if (a !== null && b.child !== a.child)
          throw Error(y(153));
        if (b.child !== null) {
          a = b.child;
          c = Tg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; a.sibling !== null; )
            a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      return null;
    }
    var Bi;
    var Ci;
    var Di;
    var Ei;
    Bi = function(a, b) {
      for (var c = b.child; c !== null; ) {
        if (c.tag === 5 || c.tag === 6)
          a.appendChild(c.stateNode);
        else if (c.tag !== 4 && c.child !== null) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b)
          break;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === b)
            return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Ci = function() {
    };
    Di = function(a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        dh(ah.current);
        var f = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f = [];
            break;
          case "option":
            e = eb(a, e);
            d = eb(a, d);
            f = [];
            break;
          case "select":
            e = m({}, e, {value: void 0});
            d = m({}, d, {value: void 0});
            f = [];
            break;
          case "textarea":
            e = gb(a, e);
            d = gb(a, d);
            f = [];
            break;
          default:
            typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
        }
        vb(c, d);
        var g;
        c = null;
        for (l in e)
          if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
            if (l === "style") {
              var h = e[l];
              for (g in h)
                h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
            } else
              l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        for (l in d) {
          var k = d[l];
          h = e != null ? e[l] : void 0;
          if (d.hasOwnProperty(l) && k !== h && (k != null || h != null))
            if (l === "style")
              if (h) {
                for (g in h)
                  !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                for (g in k)
                  k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
              } else
                c || (f || (f = []), f.push(l, c)), c = k;
            else
              l === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l, k)) : l === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l, "" + k) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ca.hasOwnProperty(l) ? (k != null && l === "onScroll" && G("scroll", a), f || h === k || (f = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l)
          b.flags |= 4;
      }
    };
    Ei = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Fi(a, b) {
      if (!lh)
        switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; b !== null; )
              b.alternate !== null && (c = b), b = b.sibling;
            c === null ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; c !== null; )
              c.alternate !== null && (d = c), c = c.sibling;
            d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
    }
    function Gi(a, b, c) {
      var d = b.pendingProps;
      switch (b.tag) {
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
          return null;
        case 1:
          return Ff(b.type) && Gf(), null;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          d = b.stateNode;
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (a === null || a.child === null)
            rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
          Ci(b);
          return null;
        case 5:
          hh(b);
          var e = dh(ch.current);
          c = b.type;
          if (a !== null && b.stateNode != null)
            Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
          else {
            if (!d) {
              if (b.stateNode === null)
                throw Error(y(166));
              return null;
            }
            a = dh(ah.current);
            if (rh(b)) {
              d = b.stateNode;
              c = b.type;
              var f = b.memoizedProps;
              d[wf] = b;
              d[xf] = f;
              switch (c) {
                case "dialog":
                  G("cancel", d);
                  G("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G("load", d);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Xe.length; a++)
                    G(Xe[a], d);
                  break;
                case "source":
                  G("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  G("error", d);
                  G("load", d);
                  break;
                case "details":
                  G("toggle", d);
                  break;
                case "input":
                  Za(d, f);
                  G("invalid", d);
                  break;
                case "select":
                  d._wrapperState = {wasMultiple: !!f.multiple};
                  G("invalid", d);
                  break;
                case "textarea":
                  hb(d, f), G("invalid", d);
              }
              vb(c, f);
              a = null;
              for (var g in f)
                f.hasOwnProperty(g) && (e = f[g], g === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && e != null && g === "onScroll" && G("scroll", d));
              switch (c) {
                case "input":
                  Va(d);
                  cb(d, f, true);
                  break;
                case "textarea":
                  Va(d);
                  jb(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof f.onClick === "function" && (d.onclick = jf);
              }
              d = a;
              b.updateQueue = d;
              d !== null && (b.flags |= 4);
            } else {
              g = e.nodeType === 9 ? e : e.ownerDocument;
              a === kb.html && (a = lb(c));
              a === kb.html ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, {is: d.is}) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[wf] = b;
              a[xf] = d;
              Bi(a, b, false, false);
              b.stateNode = a;
              g = wb(c, d);
              switch (c) {
                case "dialog":
                  G("cancel", a);
                  G("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < Xe.length; e++)
                    G(Xe[e], a);
                  e = d;
                  break;
                case "source":
                  G("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  G("error", a);
                  G("load", a);
                  e = d;
                  break;
                case "details":
                  G("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  G("invalid", a);
                  break;
                case "option":
                  e = eb(a, d);
                  break;
                case "select":
                  a._wrapperState = {wasMultiple: !!d.multiple};
                  e = m({}, d, {value: void 0});
                  G("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  G("invalid", a);
                  break;
                default:
                  e = d;
              }
              vb(c, e);
              var h = e;
              for (f in h)
                if (h.hasOwnProperty(f)) {
                  var k = h[f];
                  f === "style" ? tb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k != null && f === "onScroll" && G("scroll", a) : k != null && qa(a, f, k, g));
                }
              switch (c) {
                case "input":
                  Va(a);
                  cb(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  d.value != null && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f = d.value;
                  f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
                  break;
                default:
                  typeof e.onClick === "function" && (a.onclick = jf);
              }
              mf(c, d) && (b.flags |= 4);
            }
            b.ref !== null && (b.flags |= 128);
          }
          return null;
        case 6:
          if (a && b.stateNode != null)
            Ei(a, b, a.memoizedProps, d);
          else {
            if (typeof d !== "string" && b.stateNode === null)
              throw Error(y(166));
            c = dh(ch.current);
            dh(ah.current);
            rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
          }
          return null;
        case 13:
          H(P);
          d = b.memoizedState;
          if ((b.flags & 64) !== 0)
            return b.lanes = c, b;
          d = d !== null;
          c = false;
          a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
          if (d && !c && (b.mode & 2) !== 0)
            if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
              V === 0 && (V = 3);
            else {
              if (V === 0 || V === 3)
                V = 4;
              U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
            }
          if (d || c)
            b.flags |= 4;
          return null;
        case 4:
          return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
        case 10:
          return rg(b), null;
        case 17:
          return Ff(b.type) && Gf(), null;
        case 19:
          H(P);
          d = b.memoizedState;
          if (d === null)
            return null;
          f = (b.flags & 64) !== 0;
          g = d.rendering;
          if (g === null)
            if (f)
              Fi(d, false);
            else {
              if (V !== 0 || a !== null && (a.flags & 64) !== 0)
                for (a = b.child; a !== null; ) {
                  g = ih(a);
                  if (g !== null) {
                    b.flags |= 64;
                    Fi(d, false);
                    f = g.updateQueue;
                    f !== null && (b.updateQueue = f, b.flags |= 4);
                    d.lastEffect === null && (b.firstEffect = null);
                    b.lastEffect = d.lastEffect;
                    d = c;
                    for (c = b.child; c !== null; )
                      f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : {lanes: a.lanes, firstContext: a.firstContext}), c = c.sibling;
                    I(P, P.current & 1 | 2);
                    return b.child;
                  }
                  a = a.sibling;
                }
              d.tail !== null && O() > Ji && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
            }
          else {
            if (!f)
              if (a = ih(g), a !== null) {
                if (b.flags |= 64, f = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g.alternate && !lh)
                  return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
              } else
                2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
            d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, c !== null ? c.sibling = g : b.child = g, d.last = g);
          }
          return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
        case 23:
        case 24:
          return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
      }
      throw Error(y(156, b.tag));
    }
    function Li(a) {
      switch (a.tag) {
        case 1:
          Ff(a.type) && Gf();
          var b = a.flags;
          return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          b = a.flags;
          if ((b & 64) !== 0)
            throw Error(y(285));
          a.flags = b & -4097 | 64;
          return a;
        case 5:
          return hh(a), null;
        case 13:
          return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
        case 19:
          return H(P), null;
        case 4:
          return fh(), null;
        case 10:
          return rg(a), null;
        case 23:
        case 24:
          return Ki(), null;
        default:
          return null;
      }
    }
    function Mi(a, b) {
      try {
        var c = "", d = b;
        do
          c += Qa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
      }
      return {value: a, source: b, stack: e};
    }
    function Ni(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var Oi = typeof WeakMap === "function" ? WeakMap : Map;
    function Pi(a, b, c) {
      c = zg(-1, c);
      c.tag = 3;
      c.payload = {element: null};
      var d = b.value;
      c.callback = function() {
        Qi || (Qi = true, Ri = d);
        Ni(a, b);
      };
      return c;
    }
    function Si(a, b, c) {
      c = zg(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if (typeof d === "function") {
        var e = b.value;
        c.payload = function() {
          Ni(a, b);
          return d(e);
        };
      }
      var f = a.stateNode;
      f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
        typeof d !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
        var c2 = b.stack;
        this.componentDidCatch(b.value, {componentStack: c2 !== null ? c2 : ""});
      });
      return c;
    }
    var Ui = typeof WeakSet === "function" ? WeakSet : Set;
    function Vi(a) {
      var b = a.ref;
      if (b !== null)
        if (typeof b === "function")
          try {
            b(null);
          } catch (c) {
            Wi(a, c);
          }
        else
          b.current = null;
    }
    function Xi(a, b) {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (b.flags & 256 && a !== null) {
            var c = a.memoizedProps, d = a.memoizedState;
            a = b.stateNode;
            b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
            a.__reactInternalSnapshotBeforeUpdate = b;
          }
          return;
        case 3:
          b.flags & 256 && qf(b.stateNode.containerInfo);
          return;
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(y(163));
    }
    function Yi(a, b, c) {
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          b = c.updateQueue;
          b = b !== null ? b.lastEffect : null;
          if (b !== null) {
            a = b = b.next;
            do {
              if ((a.tag & 3) === 3) {
                var d = a.create;
                a.destroy = d();
              }
              a = a.next;
            } while (a !== b);
          }
          b = c.updateQueue;
          b = b !== null ? b.lastEffect : null;
          if (b !== null) {
            a = b = b.next;
            do {
              var e = a;
              d = e.next;
              e = e.tag;
              (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
              a = d;
            } while (a !== b);
          }
          return;
        case 1:
          a = c.stateNode;
          c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
          b = c.updateQueue;
          b !== null && Eg(c, b, a);
          return;
        case 3:
          b = c.updateQueue;
          if (b !== null) {
            a = null;
            if (c.child !== null)
              switch (c.child.tag) {
                case 5:
                  a = c.child.stateNode;
                  break;
                case 1:
                  a = c.child.stateNode;
              }
            Eg(c, b, a);
          }
          return;
        case 5:
          a = c.stateNode;
          b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
          return;
        case 6:
          return;
        case 4:
          return;
        case 12:
          return;
        case 13:
          c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
          return;
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return;
      }
      throw Error(y(163));
    }
    function aj(a, b) {
      for (var c = a; ; ) {
        if (c.tag === 5) {
          var d = c.stateNode;
          if (b)
            d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
          else {
            d = c.stateNode;
            var e = c.memoizedProps.style;
            e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
            d.style.display = sb("display", e);
          }
        } else if (c.tag === 6)
          c.stateNode.nodeValue = b ? "" : c.memoizedProps;
        else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === a)
          break;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === a)
            return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    }
    function bj(a, b) {
      if (Mf && typeof Mf.onCommitFiberUnmount === "function")
        try {
          Mf.onCommitFiberUnmount(Lf, b);
        } catch (f) {
        }
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          a = b.updateQueue;
          if (a !== null && (a = a.lastEffect, a !== null)) {
            var c = a = a.next;
            do {
              var d = c, e = d.destroy;
              d = d.tag;
              if (e !== void 0)
                if ((d & 4) !== 0)
                  Zi(b, c);
                else {
                  d = b;
                  try {
                    e();
                  } catch (f) {
                    Wi(d, f);
                  }
                }
              c = c.next;
            } while (c !== a);
          }
          break;
        case 1:
          Vi(b);
          a = b.stateNode;
          if (typeof a.componentWillUnmount === "function")
            try {
              a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
            } catch (f) {
              Wi(b, f);
            }
          break;
        case 5:
          Vi(b);
          break;
        case 4:
          cj(a, b);
      }
    }
    function dj(a) {
      a.alternate = null;
      a.child = null;
      a.dependencies = null;
      a.firstEffect = null;
      a.lastEffect = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.return = null;
      a.updateQueue = null;
    }
    function ej(a) {
      return a.tag === 5 || a.tag === 3 || a.tag === 4;
    }
    function fj(a) {
      a: {
        for (var b = a.return; b !== null; ) {
          if (ej(b))
            break a;
          b = b.return;
        }
        throw Error(y(160));
      }
      var c = b;
      b = c.stateNode;
      switch (c.tag) {
        case 5:
          var d = false;
          break;
        case 3:
          b = b.containerInfo;
          d = true;
          break;
        case 4:
          b = b.containerInfo;
          d = true;
          break;
        default:
          throw Error(y(161));
      }
      c.flags & 16 && (pb(b, ""), c.flags &= -17);
      a:
        b:
          for (c = a; ; ) {
            for (; c.sibling === null; ) {
              if (c.return === null || ej(c.return)) {
                c = null;
                break a;
              }
              c = c.return;
            }
            c.sibling.return = c.return;
            for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
              if (c.flags & 2)
                continue b;
              if (c.child === null || c.tag === 4)
                continue b;
              else
                c.child.return = c, c = c.child;
            }
            if (!(c.flags & 2)) {
              c = c.stateNode;
              break a;
            }
          }
      d ? gj(a, c, b) : hj(a, c, b);
    }
    function gj(a, b, c) {
      var d = a.tag, e = d === 5 || d === 6;
      if (e)
        a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
      else if (d !== 4 && (a = a.child, a !== null))
        for (gj(a, b, c), a = a.sibling; a !== null; )
          gj(a, b, c), a = a.sibling;
    }
    function hj(a, b, c) {
      var d = a.tag, e = d === 5 || d === 6;
      if (e)
        a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (d !== 4 && (a = a.child, a !== null))
        for (hj(a, b, c), a = a.sibling; a !== null; )
          hj(a, b, c), a = a.sibling;
    }
    function cj(a, b) {
      for (var c = b, d = false, e, f; ; ) {
        if (!d) {
          d = c.return;
          a:
            for (; ; ) {
              if (d === null)
                throw Error(y(160));
              e = d.stateNode;
              switch (d.tag) {
                case 5:
                  f = false;
                  break a;
                case 3:
                  e = e.containerInfo;
                  f = true;
                  break a;
                case 4:
                  e = e.containerInfo;
                  f = true;
                  break a;
              }
              d = d.return;
            }
          d = true;
        }
        if (c.tag === 5 || c.tag === 6) {
          a:
            for (var g = a, h = c, k = h; ; )
              if (bj(g, k), k.child !== null && k.tag !== 4)
                k.child.return = k, k = k.child;
              else {
                if (k === h)
                  break a;
                for (; k.sibling === null; ) {
                  if (k.return === null || k.return === h)
                    break a;
                  k = k.return;
                }
                k.sibling.return = k.return;
                k = k.sibling;
              }
          f ? (g = e, h = c.stateNode, g.nodeType === 8 ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
        } else if (c.tag === 4) {
          if (c.child !== null) {
            e = c.stateNode.containerInfo;
            f = true;
            c.child.return = c;
            c = c.child;
            continue;
          }
        } else if (bj(a, c), c.child !== null) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b)
          break;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === b)
            return;
          c = c.return;
          c.tag === 4 && (d = false);
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    }
    function ij(a, b) {
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var c = b.updateQueue;
          c = c !== null ? c.lastEffect : null;
          if (c !== null) {
            var d = c = c.next;
            do
              (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
            while (d !== c);
          }
          return;
        case 1:
          return;
        case 5:
          c = b.stateNode;
          if (c != null) {
            d = b.memoizedProps;
            var e = a !== null ? a.memoizedProps : d;
            a = b.type;
            var f = b.updateQueue;
            b.updateQueue = null;
            if (f !== null) {
              c[xf] = d;
              a === "input" && d.type === "radio" && d.name != null && $a(c, d);
              wb(a, e);
              b = wb(a, d);
              for (e = 0; e < f.length; e += 2) {
                var g = f[e], h = f[e + 1];
                g === "style" ? tb(c, h) : g === "dangerouslySetInnerHTML" ? ob(c, h) : g === "children" ? pb(c, h) : qa(c, g, h, b);
              }
              switch (a) {
                case "input":
                  ab(c, d);
                  break;
                case "textarea":
                  ib(c, d);
                  break;
                case "select":
                  a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, f != null ? fb(c, !!d.multiple, f, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
              }
            }
          }
          return;
        case 6:
          if (b.stateNode === null)
            throw Error(y(162));
          b.stateNode.nodeValue = b.memoizedProps;
          return;
        case 3:
          c = b.stateNode;
          c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
          return;
        case 12:
          return;
        case 13:
          b.memoizedState !== null && (jj = O(), aj(b.child, true));
          kj(b);
          return;
        case 19:
          kj(b);
          return;
        case 17:
          return;
        case 23:
        case 24:
          aj(b, b.memoizedState !== null);
          return;
      }
      throw Error(y(163));
    }
    function kj(a) {
      var b = a.updateQueue;
      if (b !== null) {
        a.updateQueue = null;
        var c = a.stateNode;
        c === null && (c = a.stateNode = new Ui());
        b.forEach(function(b2) {
          var d = lj.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d, d));
        });
      }
    }
    function mj(a, b) {
      return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
    }
    var nj = Math.ceil;
    var oj = ra.ReactCurrentDispatcher;
    var pj = ra.ReactCurrentOwner;
    var X = 0;
    var U = null;
    var Y = null;
    var W = 0;
    var qj = 0;
    var rj = Bf(0);
    var V = 0;
    var sj = null;
    var tj = 0;
    var Dg = 0;
    var Hi = 0;
    var uj = 0;
    var vj = null;
    var jj = 0;
    var Ji = Infinity;
    function wj() {
      Ji = O() + 500;
    }
    var Z = null;
    var Qi = false;
    var Ri = null;
    var Ti = null;
    var xj = false;
    var yj = null;
    var zj = 90;
    var Aj = [];
    var Bj = [];
    var Cj = null;
    var Dj = 0;
    var Ej = null;
    var Fj = -1;
    var Gj = 0;
    var Hj = 0;
    var Ij = null;
    var Jj = false;
    function Hg() {
      return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
    }
    function Ig(a) {
      a = a.mode;
      if ((a & 2) === 0)
        return 1;
      if ((a & 4) === 0)
        return eg() === 99 ? 1 : 2;
      Gj === 0 && (Gj = tj);
      if (kg.transition !== 0) {
        Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
        a = Gj;
        var b = 4186112 & ~Hj;
        b &= -b;
        b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
        return b;
      }
      a = eg();
      (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
      return a;
    }
    function Jg(a, b, c) {
      if (50 < Dj)
        throw Dj = 0, Ej = null, Error(y(185));
      a = Kj(a, b);
      if (a === null)
        return null;
      $c(a, b, c);
      a === U && (Hi |= b, V === 4 && Ii(a, W));
      var d = eg();
      b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
      vj = a;
    }
    function Kj(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      c !== null && (c.lanes |= b);
      c = a;
      for (a = a.return; a !== null; )
        a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
      return c.tag === 3 ? c.stateNode : null;
    }
    function Mj(a, b) {
      for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
        var h = 31 - Vc(g), k = 1 << h, l = f[h];
        if (l === -1) {
          if ((k & d) === 0 || (k & e) !== 0) {
            l = b;
            Rc(k);
            var n = F;
            f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
          }
        } else
          l <= b && (a.expiredLanes |= k);
        g &= ~k;
      }
      d = Uc(a, a === U ? W : 0);
      b = F;
      if (d === 0)
        c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
      else {
        if (c !== null) {
          if (a.callbackPriority === b)
            return;
          c !== Zf && Pf(c);
        }
        b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Nj(a) {
      Fj = -1;
      Hj = Gj = 0;
      if ((X & 48) !== 0)
        throw Error(y(327));
      var b = a.callbackNode;
      if (Oj() && a.callbackNode !== b)
        return null;
      var c = Uc(a, a === U ? W : 0);
      if (c === 0)
        return null;
      var d = c;
      var e = X;
      X |= 16;
      var f = Pj();
      if (U !== a || W !== d)
        wj(), Qj(a, d);
      do
        try {
          Rj();
          break;
        } catch (h) {
          Sj(a, h);
        }
      while (1);
      qg();
      oj.current = f;
      X = e;
      Y !== null ? d = 0 : (U = null, W = 0, d = V);
      if ((tj & Hi) !== 0)
        Qj(a, 0);
      else if (d !== 0) {
        d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
        if (d === 1)
          throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
        a.finishedWork = a.current.alternate;
        a.finishedLanes = c;
        switch (d) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            Uj(a);
            break;
          case 3:
            Ii(a, c);
            if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
              if (Uc(a, 0) !== 0)
                break;
              e = a.suspendedLanes;
              if ((e & c) !== c) {
                Hg();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = of(Uj.bind(null, a), d);
              break;
            }
            Uj(a);
            break;
          case 4:
            Ii(a, c);
            if ((c & 4186112) === c)
              break;
            d = a.eventTimes;
            for (e = -1; 0 < c; ) {
              var g = 31 - Vc(c);
              f = 1 << g;
              g = d[g];
              g > e && (e = g);
              c &= ~f;
            }
            c = e;
            c = O() - c;
            c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
            if (10 < c) {
              a.timeoutHandle = of(Uj.bind(null, a), c);
              break;
            }
            Uj(a);
            break;
          case 5:
            Uj(a);
            break;
          default:
            throw Error(y(329));
        }
      }
      Mj(a, O());
      return a.callbackNode === b ? Nj.bind(null, a) : null;
    }
    function Ii(a, b) {
      b &= ~uj;
      b &= ~Hi;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - Vc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function Lj(a) {
      if ((X & 48) !== 0)
        throw Error(y(327));
      Oj();
      if (a === U && (a.expiredLanes & W) !== 0) {
        var b = W;
        var c = Tj(a, b);
        (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
      } else
        b = Uc(a, 0), c = Tj(a, b);
      a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
      if (c === 1)
        throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Uj(a);
      Mj(a, O());
      return null;
    }
    function Vj() {
      if (Cj !== null) {
        var a = Cj;
        Cj = null;
        a.forEach(function(a2) {
          a2.expiredLanes |= 24 & a2.pendingLanes;
          Mj(a2, O());
        });
      }
      ig();
    }
    function Wj(a, b) {
      var c = X;
      X |= 1;
      try {
        return a(b);
      } finally {
        X = c, X === 0 && (wj(), ig());
      }
    }
    function Xj(a, b) {
      var c = X;
      X &= -2;
      X |= 8;
      try {
        return a(b);
      } finally {
        X = c, X === 0 && (wj(), ig());
      }
    }
    function ni(a, b) {
      I(rj, qj);
      qj |= b;
      tj |= b;
    }
    function Ki() {
      qj = rj.current;
      H(rj);
    }
    function Qj(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      c !== -1 && (a.timeoutHandle = -1, pf(c));
      if (Y !== null)
        for (c = Y.return; c !== null; ) {
          var d = c;
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              d !== null && d !== void 0 && Gf();
              break;
            case 3:
              fh();
              H(N);
              H(M);
              uh();
              break;
            case 5:
              hh(d);
              break;
            case 4:
              fh();
              break;
            case 13:
              H(P);
              break;
            case 19:
              H(P);
              break;
            case 10:
              rg(d);
              break;
            case 23:
            case 24:
              Ki();
          }
          c = c.return;
        }
      U = a;
      Y = Tg(a.current, null);
      W = qj = tj = b;
      V = 0;
      sj = null;
      uj = Hi = Dg = 0;
    }
    function Sj(a, b) {
      do {
        var c = Y;
        try {
          qg();
          vh.current = Gh;
          if (yh) {
            for (var d = R.memoizedState; d !== null; ) {
              var e = d.queue;
              e !== null && (e.pending = null);
              d = d.next;
            }
            yh = false;
          }
          xh = 0;
          T = S = R = null;
          zh = false;
          pj.current = null;
          if (c === null || c.return === null) {
            V = 1;
            sj = b;
            Y = null;
            break;
          }
          a: {
            var f = a, g = c.return, h = c, k = b;
            b = W;
            h.flags |= 2048;
            h.firstEffect = h.lastEffect = null;
            if (k !== null && typeof k === "object" && typeof k.then === "function") {
              var l = k;
              if ((h.mode & 2) === 0) {
                var n = h.alternate;
                n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
              }
              var A = (P.current & 1) !== 0, p = g;
              do {
                var C;
                if (C = p.tag === 13) {
                  var x = p.memoizedState;
                  if (x !== null)
                    C = x.dehydrated !== null ? true : false;
                  else {
                    var w = p.memoizedProps;
                    C = w.fallback === void 0 ? false : w.unstable_avoidThisFallback !== true ? true : A ? false : true;
                  }
                }
                if (C) {
                  var z = p.updateQueue;
                  if (z === null) {
                    var u = new Set();
                    u.add(l);
                    p.updateQueue = u;
                  } else
                    z.add(l);
                  if ((p.mode & 2) === 0) {
                    p.flags |= 64;
                    h.flags |= 16384;
                    h.flags &= -2981;
                    if (h.tag === 1)
                      if (h.alternate === null)
                        h.tag = 17;
                      else {
                        var t = zg(-1, 1);
                        t.tag = 2;
                        Ag(h, t);
                      }
                    h.lanes |= 1;
                    break a;
                  }
                  k = void 0;
                  h = b;
                  var q = f.pingCache;
                  q === null ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), k === void 0 && (k = new Set(), q.set(l, k)));
                  if (!k.has(h)) {
                    k.add(h);
                    var v = Yj.bind(null, f, l, h);
                    l.then(v, v);
                  }
                  p.flags |= 4096;
                  p.lanes = b;
                  break a;
                }
                p = p.return;
              } while (p !== null);
              k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
            }
            V !== 5 && (V = 2);
            k = Mi(k, h);
            p = g;
            do {
              switch (p.tag) {
                case 3:
                  f = k;
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var J = Pi(p, f, b);
                  Bg(p, J);
                  break a;
                case 1:
                  f = k;
                  var K = p.type, Q = p.stateNode;
                  if ((p.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                    p.flags |= 4096;
                    b &= -b;
                    p.lanes |= b;
                    var L = Si(p, f, b);
                    Bg(p, L);
                    break a;
                  }
              }
              p = p.return;
            } while (p !== null);
          }
          Zj(c);
        } catch (va) {
          b = va;
          Y === c && c !== null && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Pj() {
      var a = oj.current;
      oj.current = Gh;
      return a === null ? Gh : a;
    }
    function Tj(a, b) {
      var c = X;
      X |= 16;
      var d = Pj();
      U === a && W === b || Qj(a, b);
      do
        try {
          ak();
          break;
        } catch (e) {
          Sj(a, e);
        }
      while (1);
      qg();
      X = c;
      oj.current = d;
      if (Y !== null)
        throw Error(y(261));
      U = null;
      W = 0;
      return V;
    }
    function ak() {
      for (; Y !== null; )
        bk(Y);
    }
    function Rj() {
      for (; Y !== null && !Qf(); )
        bk(Y);
    }
    function bk(a) {
      var b = ck(a.alternate, a, qj);
      a.memoizedProps = a.pendingProps;
      b === null ? Zj(a) : Y = b;
      pj.current = null;
    }
    function Zj(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if ((b.flags & 2048) === 0) {
          c = Gi(c, b, qj);
          if (c !== null) {
            Y = c;
            return;
          }
          c = b;
          if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
            for (var d = 0, e = c.child; e !== null; )
              d |= e.lanes | e.childLanes, e = e.sibling;
            c.childLanes = d;
          }
          a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
        } else {
          c = Li(b);
          if (c !== null) {
            c.flags &= 2047;
            Y = c;
            return;
          }
          a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
        }
        b = b.sibling;
        if (b !== null) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (b !== null);
      V === 0 && (V = 5);
    }
    function Uj(a) {
      var b = eg();
      gg(99, dk.bind(null, a, b));
      return null;
    }
    function dk(a, b) {
      do
        Oj();
      while (yj !== null);
      if ((X & 48) !== 0)
        throw Error(y(327));
      var c = a.finishedWork;
      if (c === null)
        return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current)
        throw Error(y(177));
      a.callbackNode = null;
      var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
      a.pendingLanes = e;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= e;
      a.mutableReadLanes &= e;
      a.entangledLanes &= e;
      e = a.entanglements;
      for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
        var k = 31 - Vc(f), l = 1 << k;
        e[k] = 0;
        g[k] = -1;
        h[k] = -1;
        f &= ~l;
      }
      Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
      a === U && (Y = U = null, W = 0);
      1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
      if (d !== null) {
        e = X;
        X |= 32;
        pj.current = null;
        kf = fd;
        g = Ne();
        if (Oe(g)) {
          if ("selectionStart" in g)
            h = {start: g.selectionStart, end: g.selectionEnd};
          else
            a:
              if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && l.rangeCount !== 0) {
                h = l.anchorNode;
                f = l.anchorOffset;
                k = l.focusNode;
                l = l.focusOffset;
                try {
                  h.nodeType, k.nodeType;
                } catch (va) {
                  h = null;
                  break a;
                }
                var n = 0, A = -1, p = -1, C = 0, x = 0, w = g, z = null;
                b:
                  for (; ; ) {
                    for (var u; ; ) {
                      w !== h || f !== 0 && w.nodeType !== 3 || (A = n + f);
                      w !== k || l !== 0 && w.nodeType !== 3 || (p = n + l);
                      w.nodeType === 3 && (n += w.nodeValue.length);
                      if ((u = w.firstChild) === null)
                        break;
                      z = w;
                      w = u;
                    }
                    for (; ; ) {
                      if (w === g)
                        break b;
                      z === h && ++C === f && (A = n);
                      z === k && ++x === l && (p = n);
                      if ((u = w.nextSibling) !== null)
                        break;
                      w = z;
                      z = w.parentNode;
                    }
                    w = u;
                  }
                h = A === -1 || p === -1 ? null : {start: A, end: p};
              } else
                h = null;
          h = h || {start: 0, end: 0};
        } else
          h = null;
        lf = {focusedElem: g, selectionRange: h};
        fd = false;
        Ij = null;
        Jj = false;
        Z = d;
        do
          try {
            ek();
          } catch (va) {
            if (Z === null)
              throw Error(y(330));
            Wi(Z, va);
            Z = Z.nextEffect;
          }
        while (Z !== null);
        Ij = null;
        Z = d;
        do
          try {
            for (g = a; Z !== null; ) {
              var t = Z.flags;
              t & 16 && pb(Z.stateNode, "");
              if (t & 128) {
                var q = Z.alternate;
                if (q !== null) {
                  var v = q.ref;
                  v !== null && (typeof v === "function" ? v(null) : v.current = null);
                }
              }
              switch (t & 1038) {
                case 2:
                  fj(Z);
                  Z.flags &= -3;
                  break;
                case 6:
                  fj(Z);
                  Z.flags &= -3;
                  ij(Z.alternate, Z);
                  break;
                case 1024:
                  Z.flags &= -1025;
                  break;
                case 1028:
                  Z.flags &= -1025;
                  ij(Z.alternate, Z);
                  break;
                case 4:
                  ij(Z.alternate, Z);
                  break;
                case 8:
                  h = Z;
                  cj(g, h);
                  var J = h.alternate;
                  dj(h);
                  J !== null && dj(J);
              }
              Z = Z.nextEffect;
            }
          } catch (va) {
            if (Z === null)
              throw Error(y(330));
            Wi(Z, va);
            Z = Z.nextEffect;
          }
        while (Z !== null);
        v = lf;
        q = Ne();
        t = v.focusedElem;
        g = v.selectionRange;
        if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
          g !== null && Oe(t) && (q = g.start, v = g.end, v === void 0 && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = g.end === void 0 ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
          q = [];
          for (v = t; v = v.parentNode; )
            v.nodeType === 1 && q.push({element: v, left: v.scrollLeft, top: v.scrollTop});
          typeof t.focus === "function" && t.focus();
          for (t = 0; t < q.length; t++)
            v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
        fd = !!kf;
        lf = kf = null;
        a.current = c;
        Z = d;
        do
          try {
            for (t = a; Z !== null; ) {
              var K = Z.flags;
              K & 36 && Yi(t, Z.alternate, Z);
              if (K & 128) {
                q = void 0;
                var Q = Z.ref;
                if (Q !== null) {
                  var L = Z.stateNode;
                  switch (Z.tag) {
                    case 5:
                      q = L;
                      break;
                    default:
                      q = L;
                  }
                  typeof Q === "function" ? Q(q) : Q.current = q;
                }
              }
              Z = Z.nextEffect;
            }
          } catch (va) {
            if (Z === null)
              throw Error(y(330));
            Wi(Z, va);
            Z = Z.nextEffect;
          }
        while (Z !== null);
        Z = null;
        $f();
        X = e;
      } else
        a.current = c;
      if (xj)
        xj = false, yj = a, zj = b;
      else
        for (Z = d; Z !== null; )
          b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
      d = a.pendingLanes;
      d === 0 && (Ti = null);
      d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
      c = c.stateNode;
      if (Mf && typeof Mf.onCommitFiberRoot === "function")
        try {
          Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
        } catch (va) {
        }
      Mj(a, O());
      if (Qi)
        throw Qi = false, a = Ri, Ri = null, a;
      if ((X & 8) !== 0)
        return null;
      ig();
      return null;
    }
    function ek() {
      for (; Z !== null; ) {
        var a = Z.alternate;
        Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
        var b = Z.flags;
        (b & 256) !== 0 && Xi(a, Z);
        (b & 512) === 0 || xj || (xj = true, hg(97, function() {
          Oj();
          return null;
        }));
        Z = Z.nextEffect;
      }
    }
    function Oj() {
      if (zj !== 90) {
        var a = 97 < zj ? 97 : zj;
        zj = 90;
        return gg(a, fk);
      }
      return false;
    }
    function $i(a, b) {
      Aj.push(b, a);
      xj || (xj = true, hg(97, function() {
        Oj();
        return null;
      }));
    }
    function Zi(a, b) {
      Bj.push(b, a);
      xj || (xj = true, hg(97, function() {
        Oj();
        return null;
      }));
    }
    function fk() {
      if (yj === null)
        return false;
      var a = yj;
      yj = null;
      if ((X & 48) !== 0)
        throw Error(y(331));
      var b = X;
      X |= 32;
      var c = Bj;
      Bj = [];
      for (var d = 0; d < c.length; d += 2) {
        var e = c[d], f = c[d + 1], g = e.destroy;
        e.destroy = void 0;
        if (typeof g === "function")
          try {
            g();
          } catch (k) {
            if (f === null)
              throw Error(y(330));
            Wi(f, k);
          }
      }
      c = Aj;
      Aj = [];
      for (d = 0; d < c.length; d += 2) {
        e = c[d];
        f = c[d + 1];
        try {
          var h = e.create;
          e.destroy = h();
        } catch (k) {
          if (f === null)
            throw Error(y(330));
          Wi(f, k);
        }
      }
      for (h = a.current.firstEffect; h !== null; )
        a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
      X = b;
      ig();
      return true;
    }
    function gk(a, b, c) {
      b = Mi(c, b);
      b = Pi(a, b, 1);
      Ag(a, b);
      b = Hg();
      a = Kj(a, 1);
      a !== null && ($c(a, 1, b), Mj(a, b));
    }
    function Wi(a, b) {
      if (a.tag === 3)
        gk(a, a, b);
      else
        for (var c = a.return; c !== null; ) {
          if (c.tag === 3) {
            gk(c, a, b);
            break;
          } else if (c.tag === 1) {
            var d = c.stateNode;
            if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
              a = Mi(b, a);
              var e = Si(c, a, 1);
              Ag(c, e);
              e = Hg();
              c = Kj(c, 1);
              if (c !== null)
                $c(c, 1, e), Mj(c, e);
              else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
                try {
                  d.componentDidCatch(b, a);
                } catch (f) {
                }
              break;
            }
          }
          c = c.return;
        }
    }
    function Yj(a, b, c) {
      var d = a.pingCache;
      d !== null && d.delete(b);
      b = Hg();
      a.pingedLanes |= a.suspendedLanes & c;
      U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
      Mj(a, b);
    }
    function lj(a, b) {
      var c = a.stateNode;
      c !== null && c.delete(b);
      b = 0;
      b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
      c = Hg();
      a = Kj(a, b);
      a !== null && ($c(a, b, c), Mj(a, c));
    }
    var ck;
    ck = function(a, b, c) {
      var d = b.lanes;
      if (a !== null)
        if (a.memoizedProps !== b.pendingProps || N.current)
          ug = true;
        else if ((c & d) !== 0)
          ug = (a.flags & 16384) !== 0 ? true : false;
        else {
          ug = false;
          switch (b.tag) {
            case 3:
              ri(b);
              sh();
              break;
            case 5:
              gh(b);
              break;
            case 1:
              Ff(b.type) && Jf(b);
              break;
            case 4:
              eh(b, b.stateNode.containerInfo);
              break;
            case 10:
              d = b.memoizedProps.value;
              var e = b.type._context;
              I(mg, e._currentValue);
              e._currentValue = d;
              break;
            case 13:
              if (b.memoizedState !== null) {
                if ((c & b.child.childLanes) !== 0)
                  return ti(a, b, c);
                I(P, P.current & 1);
                b = hi(a, b, c);
                return b !== null ? b.sibling : null;
              }
              I(P, P.current & 1);
              break;
            case 19:
              d = (c & b.childLanes) !== 0;
              if ((a.flags & 64) !== 0) {
                if (d)
                  return Ai(a, b, c);
                b.flags |= 64;
              }
              e = b.memoizedState;
              e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
              I(P, P.current);
              if (d)
                break;
              else
                return null;
            case 23:
            case 24:
              return b.lanes = 0, mi(a, b, c);
          }
          return hi(a, b, c);
        }
      else
        ug = false;
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          d = b.type;
          a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          e = Ef(b, M.current);
          tg(b, c);
          e = Ch(null, b, d, a, e, c);
          b.flags |= 1;
          if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
            b.tag = 1;
            b.memoizedState = null;
            b.updateQueue = null;
            if (Ff(d)) {
              var f = true;
              Jf(b);
            } else
              f = false;
            b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
            xg(b);
            var g = d.getDerivedStateFromProps;
            typeof g === "function" && Gg(b, d, g, a);
            e.updater = Kg;
            b.stateNode = e;
            e._reactInternals = b;
            Og(b, d, a, c);
            b = qi(null, b, d, true, f, c);
          } else
            b.tag = 0, fi(null, b, e, c), b = b.child;
          return b;
        case 16:
          e = b.elementType;
          a: {
            a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
            a = b.pendingProps;
            f = e._init;
            e = f(e._payload);
            b.type = e;
            f = b.tag = hk(e);
            a = lg(e, a);
            switch (f) {
              case 0:
                b = li(null, b, e, a, c);
                break a;
              case 1:
                b = pi(null, b, e, a, c);
                break a;
              case 11:
                b = gi(null, b, e, a, c);
                break a;
              case 14:
                b = ii(null, b, e, lg(e.type, a), d, c);
                break a;
            }
            throw Error(y(306, e, ""));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
        case 3:
          ri(b);
          d = b.updateQueue;
          if (a === null || d === null)
            throw Error(y(282));
          d = b.pendingProps;
          e = b.memoizedState;
          e = e !== null ? e.element : null;
          yg(a, b);
          Cg(b, d, null, c);
          d = b.memoizedState.element;
          if (d === e)
            sh(), b = hi(a, b, c);
          else {
            e = b.stateNode;
            if (f = e.hydrate)
              kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = true;
            if (f) {
              a = e.mutableSourceEagerHydrationData;
              if (a != null)
                for (e = 0; e < a.length; e += 2)
                  f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
              c = Zg(b, null, d, c);
              for (b.child = c; c; )
                c.flags = c.flags & -3 | 1024, c = c.sibling;
            } else
              fi(a, b, d, c), sh();
            b = b.child;
          }
          return b;
        case 5:
          return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : f !== null && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
        case 6:
          return a === null && ph(b), null;
        case 13:
          return ti(a, b, c);
        case 4:
          return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
        case 7:
          return fi(a, b, b.pendingProps, c), b.child;
        case 8:
          return fi(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return fi(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            g = b.memoizedProps;
            f = e.value;
            var h = b.type._context;
            I(mg, h._currentValue);
            h._currentValue = f;
            if (g !== null)
              if (h = g.value, f = He(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
                if (g.children === e.children && !N.current) {
                  b = hi(a, b, c);
                  break a;
                }
              } else
                for (h = b.child, h !== null && (h.return = b); h !== null; ) {
                  var k = h.dependencies;
                  if (k !== null) {
                    g = h.child;
                    for (var l = k.firstContext; l !== null; ) {
                      if (l.context === d && (l.observedBits & f) !== 0) {
                        h.tag === 1 && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                        h.lanes |= c;
                        l = h.alternate;
                        l !== null && (l.lanes |= c);
                        sg(h.return, c);
                        k.lanes |= c;
                        break;
                      }
                      l = l.next;
                    }
                  } else
                    g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
                  if (g !== null)
                    g.return = h;
                  else
                    for (g = h; g !== null; ) {
                      if (g === b) {
                        g = null;
                        break;
                      }
                      h = g.sibling;
                      if (h !== null) {
                        h.return = g.return;
                        g = h;
                        break;
                      }
                      g = g.return;
                    }
                  h = g;
                }
            fi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
        case 14:
          return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
        case 15:
          return ki(a, b, b.type, b.pendingProps, d, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
        case 19:
          return Ai(a, b, c);
        case 23:
          return mi(a, b, c);
        case 24:
          return mi(a, b, c);
      }
      throw Error(y(156, b.tag));
    };
    function ik(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.flags = 0;
      this.lastEffect = this.firstEffect = this.nextEffect = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function nh(a, b, c, d) {
      return new ik(a, b, c, d);
    }
    function ji(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function hk(a) {
      if (typeof a === "function")
        return ji(a) ? 1 : 0;
      if (a !== void 0 && a !== null) {
        a = a.$$typeof;
        if (a === Aa)
          return 11;
        if (a === Da)
          return 14;
      }
      return 2;
    }
    function Tg(a, b) {
      var c = a.alternate;
      c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = b === null ? null : {lanes: b.lanes, firstContext: b.firstContext};
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Vg(a, b, c, d, e, f) {
      var g = 2;
      d = a;
      if (typeof a === "function")
        ji(a) && (g = 1);
      else if (typeof a === "string")
        g = 5;
      else
        a:
          switch (a) {
            case ua:
              return Xg(c.children, e, f, b);
            case Ha:
              g = 8;
              e |= 16;
              break;
            case wa:
              g = 8;
              e |= 1;
              break;
            case xa:
              return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
            case Ba:
              return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
            case Ca:
              return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
            case Ia:
              return vi(c, e, f, b);
            case Ja:
              return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
            default:
              if (typeof a === "object" && a !== null)
                switch (a.$$typeof) {
                  case ya:
                    g = 10;
                    break a;
                  case za:
                    g = 9;
                    break a;
                  case Aa:
                    g = 11;
                    break a;
                  case Da:
                    g = 14;
                    break a;
                  case Ea:
                    g = 16;
                    d = null;
                    break a;
                  case Fa:
                    g = 22;
                    break a;
                }
              throw Error(y(130, a == null ? a : typeof a, ""));
          }
      b = nh(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f;
      return b;
    }
    function Xg(a, b, c, d) {
      a = nh(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function vi(a, b, c, d) {
      a = nh(23, a, d, b);
      a.elementType = Ia;
      a.lanes = c;
      return a;
    }
    function Ug(a, b, c) {
      a = nh(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function Wg(a, b, c) {
      b = nh(4, a.children !== null ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = {containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation};
      return b;
    }
    function jk(a, b, c) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.pendingContext = this.context = null;
      this.hydrate = c;
      this.callbackNode = null;
      this.callbackPriority = 0;
      this.eventTimes = Zc(0);
      this.expirationTimes = Zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = Zc(0);
      this.mutableSourceEagerHydrationData = null;
    }
    function kk(a, b, c) {
      var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {$$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c};
    }
    function lk(a, b, c, d) {
      var e = b.current, f = Hg(), g = Ig(e);
      a:
        if (c) {
          c = c._reactInternals;
          b: {
            if (Zb(c) !== c || c.tag !== 1)
              throw Error(y(170));
            var h = c;
            do {
              switch (h.tag) {
                case 3:
                  h = h.stateNode.context;
                  break b;
                case 1:
                  if (Ff(h.type)) {
                    h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                    break b;
                  }
              }
              h = h.return;
            } while (h !== null);
            throw Error(y(171));
          }
          if (c.tag === 1) {
            var k = c.type;
            if (Ff(k)) {
              c = If(c, k, h);
              break a;
            }
          }
          c = h;
        } else
          c = Cf;
      b.context === null ? b.context = c : b.pendingContext = c;
      b = zg(f, g);
      b.payload = {element: a};
      d = d === void 0 ? null : d;
      d !== null && (b.callback = d);
      Ag(e, b);
      Jg(e, g, f);
      return g;
    }
    function mk(a) {
      a = a.current;
      if (!a.child)
        return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function nk(a, b) {
      a = a.memoizedState;
      if (a !== null && a.dehydrated !== null) {
        var c = a.retryLane;
        a.retryLane = c !== 0 && c < b ? c : b;
      }
    }
    function ok(a, b) {
      nk(a, b);
      (a = a.alternate) && nk(a, b);
    }
    function pk() {
      return null;
    }
    function qk(a, b, c) {
      var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
      c = new jk(a, b, c != null && c.hydrate === true);
      b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
      c.current = b;
      b.stateNode = c;
      xg(b);
      a[ff] = c.current;
      cf(a.nodeType === 8 ? a.parentNode : a);
      if (d)
        for (a = 0; a < d.length; a++) {
          b = d[a];
          var e = b._getVersion;
          e = e(b._source);
          c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
        }
      this._internalRoot = c;
    }
    qk.prototype.render = function(a) {
      lk(a, this._internalRoot, null, null);
    };
    qk.prototype.unmount = function() {
      var a = this._internalRoot, b = a.containerInfo;
      lk(null, a, null, function() {
        b[ff] = null;
      });
    };
    function rk(a) {
      return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
    }
    function sk(a, b) {
      b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
      if (!b)
        for (var c; c = a.lastChild; )
          a.removeChild(c);
      return new qk(a, 0, b ? {hydrate: true} : void 0);
    }
    function tk(a, b, c, d, e) {
      var f = c._reactRootContainer;
      if (f) {
        var g = f._internalRoot;
        if (typeof e === "function") {
          var h = e;
          e = function() {
            var a2 = mk(g);
            h.call(a2);
          };
        }
        lk(b, g, a, e);
      } else {
        f = c._reactRootContainer = sk(c, d);
        g = f._internalRoot;
        if (typeof e === "function") {
          var k = e;
          e = function() {
            var a2 = mk(g);
            k.call(a2);
          };
        }
        Xj(function() {
          lk(b, g, a, e);
        });
      }
      return mk(g);
    }
    ec = function(a) {
      if (a.tag === 13) {
        var b = Hg();
        Jg(a, 4, b);
        ok(a, 4);
      }
    };
    fc = function(a) {
      if (a.tag === 13) {
        var b = Hg();
        Jg(a, 67108864, b);
        ok(a, 67108864);
      }
    };
    gc = function(a) {
      if (a.tag === 13) {
        var b = Hg(), c = Ig(a);
        Jg(a, c, b);
        ok(a, c);
      }
    };
    hc = function(a, b) {
      return b();
    };
    yb = function(a, b, c) {
      switch (b) {
        case "input":
          ab(a, c);
          b = c.name;
          if (c.type === "radio" && b != null) {
            for (c = a; c.parentNode; )
              c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e)
                  throw Error(y(90));
                Wa(d);
                ab(d, e);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c);
          break;
        case "select":
          b = c.value, b != null && fb(a, !!c.multiple, b, false);
      }
    };
    Gb = Wj;
    Hb = function(a, b, c, d, e) {
      var f = X;
      X |= 4;
      try {
        return gg(98, a.bind(null, b, c, d, e));
      } finally {
        X = f, X === 0 && (wj(), ig());
      }
    };
    Ib = function() {
      (X & 49) === 0 && (Vj(), Oj());
    };
    Jb = function(a, b) {
      var c = X;
      X |= 2;
      try {
        return a(b);
      } finally {
        X = c, X === 0 && (wj(), ig());
      }
    };
    function uk(a, b) {
      var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!rk(b))
        throw Error(y(200));
      return kk(a, b, null, c);
    }
    var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
    var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"};
    var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = cc(a);
      return a === null ? null : a.stateNode;
    }, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
      yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!yk.isDisabled && yk.supportsFiber)
        try {
          Lf = yk.inject(xk), Mf = yk;
        } catch (a) {
        }
    }
    var yk;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
    exports.createPortal = uk;
    exports.findDOMNode = function(a) {
      if (a == null)
        return null;
      if (a.nodeType === 1)
        return a;
      var b = a._reactInternals;
      if (b === void 0) {
        if (typeof a.render === "function")
          throw Error(y(188));
        throw Error(y(268, Object.keys(a)));
      }
      a = cc(b);
      a = a === null ? null : a.stateNode;
      return a;
    };
    exports.flushSync = function(a, b) {
      var c = X;
      if ((c & 48) !== 0)
        return a(b);
      X |= 1;
      try {
        if (a)
          return gg(99, a.bind(null, b));
      } finally {
        X = c, ig();
      }
    };
    exports.hydrate = function(a, b, c) {
      if (!rk(b))
        throw Error(y(200));
      return tk(null, a, b, true, c);
    };
    exports.render = function(a, b, c) {
      if (!rk(b))
        throw Error(y(200));
      return tk(null, a, b, false, c);
    };
    exports.unmountComponentAtNode = function(a) {
      if (!rk(a))
        throw Error(y(40));
      return a._reactRootContainer ? (Xj(function() {
        tk(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[ff] = null;
        });
      }), true) : false;
    };
    exports.unstable_batchedUpdates = Wj;
    exports.unstable_createPortal = function(a, b) {
      return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
    };
    exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!rk(c))
        throw Error(y(200));
      if (a == null || a._reactInternals === void 0)
        throw Error(y(38));
      return tk(a, b, c, false, d);
    };
    exports.version = "17.0.2";
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS((exports, module) => {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module.exports = require_react_dom_production_min();
    } else {
      module.exports = null;
    }
  });

  // node_modules/@solana-mobile/safari-extension-walletlib-js/lib/nativeRpc/sendNativeRpcRequest.js
  var require_sendNativeRpcRequest = __commonJS((exports) => {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sendNativeRpcRequest = void 0;
    function sendNativeRpcRequest({method, params}) {
      return __awaiter(this, void 0, void 0, function* () {
        const request = {
          method,
          params: JSON.stringify(params)
        };
        try {
          return yield browser.runtime.sendNativeMessage("id", request);
        } catch (error) {
          console.error("RPC request failed:", error);
          throw error;
        }
      });
    }
    exports.sendNativeRpcRequest = sendNativeRpcRequest;
  });

  // node_modules/@solana-mobile/safari-extension-walletlib-js/lib/nativeRpc/nativeGetAccounts.js
  var require_nativeGetAccounts = __commonJS((exports) => {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sendNativeGetAccountsRequest = exports.NATIVE_GET_ACCOUNTS_RPC_METHOD = void 0;
    var sendNativeRpcRequest_1 = require_sendNativeRpcRequest();
    exports.NATIVE_GET_ACCOUNTS_RPC_METHOD = "NATIVE_GET_ACCOUNTS_METHOD";
    function isValidNativeGetAccountsResult(obj) {
      return Array.isArray(obj.addresses) && obj.addresses.every((addr) => typeof addr === "string");
    }
    function sendNativeGetAccountsRequest2({extra_data = {}} = {}) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function* () {
        const nativeResponse = yield (0, sendNativeRpcRequest_1.sendNativeRpcRequest)({
          method: exports.NATIVE_GET_ACCOUNTS_RPC_METHOD,
          params: {
            extra_data
          }
        });
        if (nativeResponse.result) {
          const resultObj = JSON.parse(nativeResponse.result);
          if (isValidNativeGetAccountsResult(resultObj)) {
            return resultObj;
          } else {
            throw new Error("Response does not match the NativeGetAccountsResult structure.");
          }
        } else {
          throw new Error((_b = (_a = nativeResponse.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : "Invalid RPC Response");
        }
      });
    }
    exports.sendNativeGetAccountsRequest = sendNativeGetAccountsRequest2;
  });

  // node_modules/@solana-mobile/safari-extension-walletlib-js/lib/nativeRpc/nativeSignPayloads.js
  var require_nativeSignPayloads = __commonJS((exports) => {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sendNativeSignPayloadsRequest = exports.NATIVE_SIGN_PAYLOADS_RPC_METHOD = void 0;
    var sendNativeRpcRequest_1 = require_sendNativeRpcRequest();
    function isValidSignPayloadsResult(resultObj) {
      return Array.isArray(resultObj.signed_payloads) && resultObj.signed_payloads.every((payload) => typeof payload === "string");
    }
    exports.NATIVE_SIGN_PAYLOADS_RPC_METHOD = "NATIVE_SIGN_PAYLOADS_METHOD";
    function sendNativeSignPayloadsRequest({address, payloads, extra_data}) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function* () {
        const nativeResponse = yield (0, sendNativeRpcRequest_1.sendNativeRpcRequest)({
          method: exports.NATIVE_SIGN_PAYLOADS_RPC_METHOD,
          params: {
            address,
            payloads,
            extra_data: extra_data !== null && extra_data !== void 0 ? extra_data : {}
          }
        });
        if (nativeResponse.result) {
          const resultObj = JSON.parse(nativeResponse.result);
          if (isValidSignPayloadsResult(resultObj)) {
            return resultObj;
          } else {
            throw new Error("Response does not match the NativeSignPayloadsResult structure.");
          }
        } else {
          throw new Error((_b = (_a = nativeResponse.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : "Invalid RPC Response");
        }
      });
    }
    exports.sendNativeSignPayloadsRequest = sendNativeSignPayloadsRequest;
  });

  // node_modules/@solana-mobile/safari-extension-walletlib-js/lib/nativeRpc/types.js
  var require_types = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
  });

  // node_modules/@solana-mobile/safari-extension-walletlib-js/lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {enumerable: true, get: function() {
          return m[k];
        }};
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    __exportStar2(require_nativeGetAccounts(), exports);
    __exportStar2(require_nativeSignPayloads(), exports);
    __exportStar2(require_sendNativeRpcRequest(), exports);
    __exportStar2(require_types(), exports);
  });

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS((exports) => {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS((exports) => {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    exports.read = function(buffer, offset2, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset2 + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset2 + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset2 + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset2, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset2 + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset2 + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset2 + i - d] |= s * 128;
    };
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS((exports) => {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = {foo: function() {
          return 42;
        }};
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer3.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string2, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string2, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string2, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array2) {
      const length = array2.length < 0 ? 0 : checked(array2.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array2[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array2, byteOffset, length) {
      if (byteOffset < 0 || array2.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array2.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array2);
      } else if (length === void 0) {
        buf = new Uint8Array(array2, byteOffset);
      } else {
        buf = new Uint8Array(array2, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b)
        return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer3.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf))
              buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string2, encoding) {
      if (Buffer3.isBuffer(string2)) {
        return string2.length;
      }
      if (ArrayBuffer.isView(string2) || isInstance(string2, ArrayBuffer)) {
        return string2.byteLength;
      }
      if (typeof string2 !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string2);
      }
      const len = string2.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string2).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string2).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string2).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string2, offset2, length) {
      offset2 = Number(offset2) || 0;
      const remaining = buf.length - offset2;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string2.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string2.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i;
        buf[offset2 + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string2, offset2, length) {
      return blitBuffer(utf8ToBytes(string2, buf.length - offset2), buf, offset2, length);
    }
    function asciiWrite(buf, string2, offset2, length) {
      return blitBuffer(asciiToBytes(string2), buf, offset2, length);
    }
    function base64Write(buf, string2, offset2, length) {
      return blitBuffer(base64ToBytes(string2), buf, offset2, length);
    }
    function ucs2Write(buf, string2, offset2, length) {
      return blitBuffer(utf16leToBytes(string2, buf.length - offset2), buf, offset2, length);
    }
    Buffer3.prototype.write = function write(string2, offset2, length, encoding) {
      if (offset2 === void 0) {
        encoding = "utf8";
        length = this.length;
        offset2 = 0;
      } else if (length === void 0 && typeof offset2 === "string") {
        encoding = offset2;
        length = this.length;
        offset2 = 0;
      } else if (isFinite(offset2)) {
        offset2 = offset2 >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset2;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string2.length > 0 && (length < 0 || offset2 < 0) || offset2 > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string2, offset2, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string2, offset2, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string2, offset2, length);
          case "base64":
            return base64Write(this, string2, offset2, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string2, offset2, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer3.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    function checkOffset(offset2, ext, length) {
      if (offset2 % 1 !== 0 || offset2 < 0)
        throw new RangeError("offset is not uint");
      if (offset2 + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset2, byteLength2, noAssert) {
      offset2 = offset2 >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, byteLength2, this.length);
      let val = this[offset2];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset2 + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset2, byteLength2, noAssert) {
      offset2 = offset2 >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset2, byteLength2, this.length);
      }
      let val = this[offset2 + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset2 + --byteLength2] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 1, this.length);
      return this[offset2];
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 2, this.length);
      return this[offset2] | this[offset2 + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 2, this.length);
      return this[offset2] << 8 | this[offset2 + 1];
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return (this[offset2] | this[offset2 + 1] << 8 | this[offset2 + 2] << 16) + this[offset2 + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return this[offset2] * 16777216 + (this[offset2 + 1] << 16 | this[offset2 + 2] << 8 | this[offset2 + 3]);
    };
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset2) {
      offset2 = offset2 >>> 0;
      validateNumber(offset2, "offset");
      const first = this[offset2];
      const last = this[offset2 + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset2, this.length - 8);
      }
      const lo = first + this[++offset2] * 2 ** 8 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 24;
      const hi = this[++offset2] + this[++offset2] * 2 ** 8 + this[++offset2] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset2) {
      offset2 = offset2 >>> 0;
      validateNumber(offset2, "offset");
      const first = this[offset2];
      const last = this[offset2 + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset2, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + this[++offset2];
      const lo = this[++offset2] * 2 ** 24 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = function readIntLE(offset2, byteLength2, noAssert) {
      offset2 = offset2 >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, byteLength2, this.length);
      let val = this[offset2];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset2 + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset2, byteLength2, noAssert) {
      offset2 = offset2 >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset2 + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset2 + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 1, this.length);
      if (!(this[offset2] & 128))
        return this[offset2];
      return (255 - this[offset2] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 2, this.length);
      const val = this[offset2] | this[offset2 + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 2, this.length);
      const val = this[offset2 + 1] | this[offset2] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return this[offset2] | this[offset2 + 1] << 8 | this[offset2 + 2] << 16 | this[offset2 + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return this[offset2] << 24 | this[offset2 + 1] << 16 | this[offset2 + 2] << 8 | this[offset2 + 3];
    };
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset2) {
      offset2 = offset2 >>> 0;
      validateNumber(offset2, "offset");
      const first = this[offset2];
      const last = this[offset2 + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset2, this.length - 8);
      }
      const val = this[offset2 + 4] + this[offset2 + 5] * 2 ** 8 + this[offset2 + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset2] * 2 ** 8 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset2) {
      offset2 = offset2 >>> 0;
      validateNumber(offset2, "offset");
      const first = this[offset2];
      const last = this[offset2 + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset2, this.length - 8);
      }
      const val = (first << 24) + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + this[++offset2];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset2] * 2 ** 24 + this[++offset2] * 2 ** 16 + this[++offset2] * 2 ** 8 + last);
    });
    Buffer3.prototype.readFloatLE = function readFloatLE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return ieee754.read(this, offset2, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 4, this.length);
      return ieee754.read(this, offset2, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 8, this.length);
      return ieee754.read(this, offset2, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset2, noAssert) {
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkOffset(offset2, 8, this.length);
      return ieee754.read(this, offset2, false, 52, 8);
    };
    function checkInt(buf, value, offset2, ext, max, min) {
      if (!Buffer3.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset2 + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset2, byteLength2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset2, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset2] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset2 + i] = value / mul & 255;
      }
      return offset2 + byteLength2;
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset2, byteLength2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset2, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset2 + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset2 + i] = value / mul & 255;
      }
      return offset2 + byteLength2;
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 1, 255, 0);
      this[offset2] = value & 255;
      return offset2 + 1;
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 2, 65535, 0);
      this[offset2] = value & 255;
      this[offset2 + 1] = value >>> 8;
      return offset2 + 2;
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 2, 65535, 0);
      this[offset2] = value >>> 8;
      this[offset2 + 1] = value & 255;
      return offset2 + 2;
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 4, 4294967295, 0);
      this[offset2 + 3] = value >>> 24;
      this[offset2 + 2] = value >>> 16;
      this[offset2 + 1] = value >>> 8;
      this[offset2] = value & 255;
      return offset2 + 4;
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 4, 4294967295, 0);
      this[offset2] = value >>> 24;
      this[offset2 + 1] = value >>> 16;
      this[offset2 + 2] = value >>> 8;
      this[offset2 + 3] = value & 255;
      return offset2 + 4;
    };
    function wrtBigUInt64LE(buf, value, offset2, min, max) {
      checkIntBI(value, min, max, buf, offset2, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset2++] = lo;
      lo = lo >> 8;
      buf[offset2++] = lo;
      lo = lo >> 8;
      buf[offset2++] = lo;
      lo = lo >> 8;
      buf[offset2++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset2++] = hi;
      hi = hi >> 8;
      buf[offset2++] = hi;
      hi = hi >> 8;
      buf[offset2++] = hi;
      hi = hi >> 8;
      buf[offset2++] = hi;
      return offset2;
    }
    function wrtBigUInt64BE(buf, value, offset2, min, max) {
      checkIntBI(value, min, max, buf, offset2, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset2 + 7] = lo;
      lo = lo >> 8;
      buf[offset2 + 6] = lo;
      lo = lo >> 8;
      buf[offset2 + 5] = lo;
      lo = lo >> 8;
      buf[offset2 + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset2 + 3] = hi;
      hi = hi >> 8;
      buf[offset2 + 2] = hi;
      hi = hi >> 8;
      buf[offset2 + 1] = hi;
      hi = hi >> 8;
      buf[offset2] = hi;
      return offset2 + 8;
    }
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset2 = 0) {
      return wrtBigUInt64LE(this, value, offset2, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset2 = 0) {
      return wrtBigUInt64BE(this, value, offset2, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset2, byteLength2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset2, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset2] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset2 + i - 1] !== 0) {
          sub = 1;
        }
        this[offset2 + i] = (value / mul >> 0) - sub & 255;
      }
      return offset2 + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset2, byteLength2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset2, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset2 + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset2 + i + 1] !== 0) {
          sub = 1;
        }
        this[offset2 + i] = (value / mul >> 0) - sub & 255;
      }
      return offset2 + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset2] = value & 255;
      return offset2 + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 2, 32767, -32768);
      this[offset2] = value & 255;
      this[offset2 + 1] = value >>> 8;
      return offset2 + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 2, 32767, -32768);
      this[offset2] = value >>> 8;
      this[offset2 + 1] = value & 255;
      return offset2 + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 4, 2147483647, -2147483648);
      this[offset2] = value & 255;
      this[offset2 + 1] = value >>> 8;
      this[offset2 + 2] = value >>> 16;
      this[offset2 + 3] = value >>> 24;
      return offset2 + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset2, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert)
        checkInt(this, value, offset2, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset2] = value >>> 24;
      this[offset2 + 1] = value >>> 16;
      this[offset2 + 2] = value >>> 8;
      this[offset2 + 3] = value & 255;
      return offset2 + 4;
    };
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset2 = 0) {
      return wrtBigUInt64LE(this, value, offset2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset2 = 0) {
      return wrtBigUInt64BE(this, value, offset2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset2, ext, max, min) {
      if (offset2 + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset2 < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset2, littleEndian, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset2, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset2, littleEndian, 23, 4);
      return offset2 + 4;
    }
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset2, noAssert) {
      return writeFloat(this, value, offset2, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset2, noAssert) {
      return writeFloat(this, value, offset2, false, noAssert);
    };
    function writeDouble(buf, value, offset2, littleEndian, noAssert) {
      value = +value;
      offset2 = offset2 >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset2, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset2, littleEndian, 52, 8);
      return offset2 + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset2, noAssert) {
      return writeDouble(this, value, offset2, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset2, noAssert) {
      return writeDouble(this, value, offset2, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer3.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    var errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset2, byteLength2) {
      validateNumber(offset2, "offset");
      if (buf[offset2] === void 0 || buf[offset2 + byteLength2] === void 0) {
        boundsError(offset2, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset2, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset2, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type2) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type2);
        throw new errors.ERR_OUT_OF_RANGE(type2 || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(type2 || "offset", `>= ${type2 ? 1 : 0} and <= ${length}`, value);
    }
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string2, units) {
      units = units || Infinity;
      let codePoint;
      const length = string2.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string2.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset2, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset2 >= dst.length || i >= src.length)
          break;
        dst[i + offset2] = src[i];
      }
      return i;
    }
    function isInstance(obj, type2) {
      return obj instanceof type2 || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type2.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  });

  // node_modules/@noble/hashes/_assert.js
  var require_assert = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
    function number2(n) {
      if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
    }
    exports.number = number2;
    function bool(b) {
      if (typeof b !== "boolean")
        throw new Error(`Expected boolean, not ${b}`);
    }
    exports.bool = bool;
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    function bytes(b, ...lengths) {
      if (!isBytes(b))
        throw new Error("Expected Uint8Array");
      if (lengths.length > 0 && !lengths.includes(b.length))
        throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
    }
    exports.bytes = bytes;
    function hash(hash2) {
      if (typeof hash2 !== "function" || typeof hash2.create !== "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
      number2(hash2.outputLen);
      number2(hash2.blockLen);
    }
    exports.hash = hash;
    function exists(instance2, checkFinished = true) {
      if (instance2.destroyed)
        throw new Error("Hash instance has been destroyed");
      if (checkFinished && instance2.finished)
        throw new Error("Hash#digest() has already been called");
    }
    exports.exists = exists;
    function output(out, instance2) {
      bytes(out);
      const min = instance2.outputLen;
      if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
      }
    }
    exports.output = output;
    var assert3 = {number: number2, bool, bytes, hash, exists, output};
    exports.default = assert3;
  });

  // node_modules/@noble/hashes/crypto.js
  var require_crypto = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.crypto = void 0;
    exports.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  });

  // node_modules/@noble/hashes/utils.js
  var require_utils = __commonJS((exports) => {
    "use strict";
    /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
    var crypto_1 = require_crypto();
    var u82 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.u8 = u82;
    var u322 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    exports.u32 = u322;
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    var createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.createView = createView;
    var rotr = (word, shift) => word << 32 - shift | word >>> shift;
    exports.rotr = rotr;
    exports.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    if (!exports.isLE)
      throw new Error("Non little-endian hardware is not supported");
    var hexes = /* @__PURE__ */ Array.from({length: 256}, (_, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex(bytes) {
      if (!isBytes(bytes))
        throw new Error("Uint8Array expected");
      let hex = "";
      for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
      }
      return hex;
    }
    exports.bytesToHex = bytesToHex;
    var asciis = {_0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102};
    function asciiToBase16(char) {
      if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
      if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
      if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
      return;
    }
    function hexToBytes(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      const hl = hex.length;
      const al = hl / 2;
      if (hl % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + hl);
      const array2 = new Uint8Array(al);
      for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === void 0 || n2 === void 0) {
          const char = hex[hi] + hex[hi + 1];
          throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array2[ai] = n1 * 16 + n2;
      }
      return array2;
    }
    exports.hexToBytes = hexToBytes;
    var nextTick = async () => {
    };
    exports.nextTick = nextTick;
    async function asyncLoop(iters, tick, cb) {
      let ts = Date.now();
      for (let i = 0; i < iters; i++) {
        cb(i);
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
          continue;
        await (0, exports.nextTick)();
        ts += diff;
      }
    }
    exports.asyncLoop = asyncLoop;
    function utf8ToBytes(str) {
      if (typeof str !== "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
      return new Uint8Array(new TextEncoder().encode(str));
    }
    exports.utf8ToBytes = utf8ToBytes;
    function toBytes(data) {
      if (typeof data === "string")
        data = utf8ToBytes(data);
      if (!isBytes(data))
        throw new Error(`expected Uint8Array, got ${typeof data}`);
      return data;
    }
    exports.toBytes = toBytes;
    function concatBytes(...arrays) {
      let sum = 0;
      for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        if (!isBytes(a))
          throw new Error("Uint8Array expected");
        sum += a.length;
      }
      const res = new Uint8Array(sum);
      for (let i = 0, pad = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
      }
      return res;
    }
    exports.concatBytes = concatBytes;
    var Hash = class {
      clone() {
        return this._cloneInto();
      }
    };
    exports.Hash = Hash;
    var toStr = {}.toString;
    function checkOpts(defaults, opts) {
      if (opts !== void 0 && toStr.call(opts) !== "[object Object]")
        throw new Error("Options should be object or undefined");
      const merged = Object.assign(defaults, opts);
      return merged;
    }
    exports.checkOpts = checkOpts;
    function wrapConstructor(hashCons) {
      const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
      const tmp = hashCons();
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = () => hashCons();
      return hashC;
    }
    exports.wrapConstructor = wrapConstructor;
    function wrapConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
    function wrapXOFConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
    function randomBytes(bytesLength = 32) {
      if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
      }
      throw new Error("crypto.getRandomValues must be defined");
    }
    exports.randomBytes = randomBytes;
  });

  // node_modules/@noble/hashes/_sha2.js
  var require_sha2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.SHA2 = void 0;
    var _assert_js_1 = require_assert();
    var utils_js_1 = require_utils();
    function setBigUint64(view, byteOffset, value, isLE) {
      if (typeof view.setBigUint64 === "function")
        return view.setBigUint64(byteOffset, value, isLE);
      const _32n = BigInt(32);
      const _u32_max = BigInt(4294967295);
      const wh = Number(value >> _32n & _u32_max);
      const wl = Number(value & _u32_max);
      const h = isLE ? 4 : 0;
      const l = isLE ? 0 : 4;
      view.setUint32(byteOffset + h, wh, isLE);
      view.setUint32(byteOffset + l, wl, isLE);
    }
    var SHA2 = class extends utils_js_1.Hash {
      constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
      }
      update(data) {
        (0, _assert_js_1.exists)(this);
        const {view, buffer, blockLen} = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          if (take === blockLen) {
            const dataView = (0, utils_js_1.createView)(data);
            for (; blockLen <= len - pos; pos += blockLen)
              this.process(dataView, pos);
            continue;
          }
          buffer.set(data.subarray(pos, pos + take), this.pos);
          this.pos += take;
          pos += take;
          if (this.pos === blockLen) {
            this.process(view, 0);
            this.pos = 0;
          }
        }
        this.length += data.length;
        this.roundClean();
        return this;
      }
      digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.output)(out, this);
        this.finished = true;
        const {buffer, view, blockLen, isLE} = this;
        let {pos} = this;
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        if (this.padOffset > blockLen - pos) {
          this.process(view, 0);
          pos = 0;
        }
        for (let i = pos; i < blockLen; i++)
          buffer[i] = 0;
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        if (len % 4)
          throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
          throw new Error("_sha2: outputLen bigger than state");
        for (let i = 0; i < outLen; i++)
          oview.setUint32(4 * i, state[i], isLE);
      }
      digest() {
        const {buffer, outputLen} = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
      }
      _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const {blockLen, buffer, length, finished, destroyed, pos} = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen)
          to.buffer.set(buffer);
        return to;
      }
    };
    exports.SHA2 = SHA2;
  });

  // node_modules/@noble/hashes/_u64.js
  var require_u64 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.add5L = exports.add5H = exports.add4H = exports.add4L = exports.add3H = exports.add3L = exports.add = exports.rotlBL = exports.rotlBH = exports.rotlSL = exports.rotlSH = exports.rotr32L = exports.rotr32H = exports.rotrBL = exports.rotrBH = exports.rotrSL = exports.rotrSH = exports.shrSL = exports.shrSH = exports.toBig = exports.split = exports.fromBig = void 0;
    var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
    var _32n = /* @__PURE__ */ BigInt(32);
    function fromBig(n, le = false) {
      if (le)
        return {h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64)};
      return {h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0};
    }
    exports.fromBig = fromBig;
    function split(lst, le = false) {
      let Ah = new Uint32Array(lst.length);
      let Al = new Uint32Array(lst.length);
      for (let i = 0; i < lst.length; i++) {
        const {h, l} = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
      }
      return [Ah, Al];
    }
    exports.split = split;
    var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
    exports.toBig = toBig;
    var shrSH = (h, _l, s) => h >>> s;
    exports.shrSH = shrSH;
    var shrSL = (h, l, s) => h << 32 - s | l >>> s;
    exports.shrSL = shrSL;
    var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
    exports.rotrSH = rotrSH;
    var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
    exports.rotrSL = rotrSL;
    var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
    exports.rotrBH = rotrBH;
    var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
    exports.rotrBL = rotrBL;
    var rotr32H = (_h, l) => l;
    exports.rotr32H = rotr32H;
    var rotr32L = (h, _l) => h;
    exports.rotr32L = rotr32L;
    var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
    exports.rotlSH = rotlSH;
    var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
    exports.rotlSL = rotlSL;
    var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
    exports.rotlBH = rotlBH;
    var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
    exports.rotlBL = rotlBL;
    function add(Ah, Al, Bh, Bl) {
      const l = (Al >>> 0) + (Bl >>> 0);
      return {h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0};
    }
    exports.add = add;
    var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
    exports.add3L = add3L;
    var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
    exports.add3H = add3H;
    var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
    exports.add4L = add4L;
    var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
    exports.add4H = add4H;
    var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
    exports.add5L = add5L;
    var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
    exports.add5H = add5H;
    var u642 = {
      fromBig,
      split,
      toBig,
      shrSH,
      shrSL,
      rotrSH,
      rotrSL,
      rotrBH,
      rotrBL,
      rotr32H,
      rotr32L,
      rotlSH,
      rotlSL,
      rotlBH,
      rotlBL,
      add,
      add3L,
      add3H,
      add4L,
      add4H,
      add5H,
      add5L
    };
    exports.default = u642;
  });

  // node_modules/@noble/hashes/sha512.js
  var require_sha512 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sha384 = exports.sha512_256 = exports.sha512_224 = exports.sha512 = exports.SHA512 = void 0;
    var _sha2_js_1 = require_sha2();
    var _u64_js_1 = require_u64();
    var utils_js_1 = require_utils();
    var [SHA512_Kh, SHA512_Kl] = /* @__PURE__ */ (() => _u64_js_1.default.split([
      "0x428a2f98d728ae22",
      "0x7137449123ef65cd",
      "0xb5c0fbcfec4d3b2f",
      "0xe9b5dba58189dbbc",
      "0x3956c25bf348b538",
      "0x59f111f1b605d019",
      "0x923f82a4af194f9b",
      "0xab1c5ed5da6d8118",
      "0xd807aa98a3030242",
      "0x12835b0145706fbe",
      "0x243185be4ee4b28c",
      "0x550c7dc3d5ffb4e2",
      "0x72be5d74f27b896f",
      "0x80deb1fe3b1696b1",
      "0x9bdc06a725c71235",
      "0xc19bf174cf692694",
      "0xe49b69c19ef14ad2",
      "0xefbe4786384f25e3",
      "0x0fc19dc68b8cd5b5",
      "0x240ca1cc77ac9c65",
      "0x2de92c6f592b0275",
      "0x4a7484aa6ea6e483",
      "0x5cb0a9dcbd41fbd4",
      "0x76f988da831153b5",
      "0x983e5152ee66dfab",
      "0xa831c66d2db43210",
      "0xb00327c898fb213f",
      "0xbf597fc7beef0ee4",
      "0xc6e00bf33da88fc2",
      "0xd5a79147930aa725",
      "0x06ca6351e003826f",
      "0x142929670a0e6e70",
      "0x27b70a8546d22ffc",
      "0x2e1b21385c26c926",
      "0x4d2c6dfc5ac42aed",
      "0x53380d139d95b3df",
      "0x650a73548baf63de",
      "0x766a0abb3c77b2a8",
      "0x81c2c92e47edaee6",
      "0x92722c851482353b",
      "0xa2bfe8a14cf10364",
      "0xa81a664bbc423001",
      "0xc24b8b70d0f89791",
      "0xc76c51a30654be30",
      "0xd192e819d6ef5218",
      "0xd69906245565a910",
      "0xf40e35855771202a",
      "0x106aa07032bbd1b8",
      "0x19a4c116b8d2d0c8",
      "0x1e376c085141ab53",
      "0x2748774cdf8eeb99",
      "0x34b0bcb5e19b48a8",
      "0x391c0cb3c5c95a63",
      "0x4ed8aa4ae3418acb",
      "0x5b9cca4f7763e373",
      "0x682e6ff3d6b2b8a3",
      "0x748f82ee5defb2fc",
      "0x78a5636f43172f60",
      "0x84c87814a1f0ab72",
      "0x8cc702081a6439ec",
      "0x90befffa23631e28",
      "0xa4506cebde82bde9",
      "0xbef9a3f7b2c67915",
      "0xc67178f2e372532b",
      "0xca273eceea26619c",
      "0xd186b8c721c0c207",
      "0xeada7dd6cde0eb1e",
      "0xf57d4f7fee6ed178",
      "0x06f067aa72176fba",
      "0x0a637dc5a2c898a6",
      "0x113f9804bef90dae",
      "0x1b710b35131c471b",
      "0x28db77f523047d84",
      "0x32caab7b40c72493",
      "0x3c9ebe0a15c9bebc",
      "0x431d67c49c100d4c",
      "0x4cc5d4becb3e42b6",
      "0x597f299cfc657e2a",
      "0x5fcb6fab3ad6faec",
      "0x6c44198c4a475817"
    ].map((n) => BigInt(n))))();
    var SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
    var SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
    var SHA512 = class extends _sha2_js_1.SHA2 {
      constructor() {
        super(128, 64, 16, false);
        this.Ah = 1779033703 | 0;
        this.Al = 4089235720 | 0;
        this.Bh = 3144134277 | 0;
        this.Bl = 2227873595 | 0;
        this.Ch = 1013904242 | 0;
        this.Cl = 4271175723 | 0;
        this.Dh = 2773480762 | 0;
        this.Dl = 1595750129 | 0;
        this.Eh = 1359893119 | 0;
        this.El = 2917565137 | 0;
        this.Fh = 2600822924 | 0;
        this.Fl = 725511199 | 0;
        this.Gh = 528734635 | 0;
        this.Gl = 4215389547 | 0;
        this.Hh = 1541459225 | 0;
        this.Hl = 327033209 | 0;
      }
      get() {
        const {Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl} = this;
        return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
      }
      set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
      }
      process(view, offset2) {
        for (let i = 0; i < 16; i++, offset2 += 4) {
          SHA512_W_H[i] = view.getUint32(offset2);
          SHA512_W_L[i] = view.getUint32(offset2 += 4);
        }
        for (let i = 16; i < 80; i++) {
          const W15h = SHA512_W_H[i - 15] | 0;
          const W15l = SHA512_W_L[i - 15] | 0;
          const s0h = _u64_js_1.default.rotrSH(W15h, W15l, 1) ^ _u64_js_1.default.rotrSH(W15h, W15l, 8) ^ _u64_js_1.default.shrSH(W15h, W15l, 7);
          const s0l = _u64_js_1.default.rotrSL(W15h, W15l, 1) ^ _u64_js_1.default.rotrSL(W15h, W15l, 8) ^ _u64_js_1.default.shrSL(W15h, W15l, 7);
          const W2h = SHA512_W_H[i - 2] | 0;
          const W2l = SHA512_W_L[i - 2] | 0;
          const s1h = _u64_js_1.default.rotrSH(W2h, W2l, 19) ^ _u64_js_1.default.rotrBH(W2h, W2l, 61) ^ _u64_js_1.default.shrSH(W2h, W2l, 6);
          const s1l = _u64_js_1.default.rotrSL(W2h, W2l, 19) ^ _u64_js_1.default.rotrBL(W2h, W2l, 61) ^ _u64_js_1.default.shrSL(W2h, W2l, 6);
          const SUMl = _u64_js_1.default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
          const SUMh = _u64_js_1.default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
          SHA512_W_H[i] = SUMh | 0;
          SHA512_W_L[i] = SUMl | 0;
        }
        let {Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl} = this;
        for (let i = 0; i < 80; i++) {
          const sigma1h = _u64_js_1.default.rotrSH(Eh, El, 14) ^ _u64_js_1.default.rotrSH(Eh, El, 18) ^ _u64_js_1.default.rotrBH(Eh, El, 41);
          const sigma1l = _u64_js_1.default.rotrSL(Eh, El, 14) ^ _u64_js_1.default.rotrSL(Eh, El, 18) ^ _u64_js_1.default.rotrBL(Eh, El, 41);
          const CHIh = Eh & Fh ^ ~Eh & Gh;
          const CHIl = El & Fl ^ ~El & Gl;
          const T1ll = _u64_js_1.default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
          const T1h = _u64_js_1.default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
          const T1l = T1ll | 0;
          const sigma0h = _u64_js_1.default.rotrSH(Ah, Al, 28) ^ _u64_js_1.default.rotrBH(Ah, Al, 34) ^ _u64_js_1.default.rotrBH(Ah, Al, 39);
          const sigma0l = _u64_js_1.default.rotrSL(Ah, Al, 28) ^ _u64_js_1.default.rotrBL(Ah, Al, 34) ^ _u64_js_1.default.rotrBL(Ah, Al, 39);
          const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
          const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
          Hh = Gh | 0;
          Hl = Gl | 0;
          Gh = Fh | 0;
          Gl = Fl | 0;
          Fh = Eh | 0;
          Fl = El | 0;
          ({h: Eh, l: El} = _u64_js_1.default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
          Dh = Ch | 0;
          Dl = Cl | 0;
          Ch = Bh | 0;
          Cl = Bl | 0;
          Bh = Ah | 0;
          Bl = Al | 0;
          const All = _u64_js_1.default.add3L(T1l, sigma0l, MAJl);
          Ah = _u64_js_1.default.add3H(All, T1h, sigma0h, MAJh);
          Al = All | 0;
        }
        ({h: Ah, l: Al} = _u64_js_1.default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({h: Bh, l: Bl} = _u64_js_1.default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({h: Ch, l: Cl} = _u64_js_1.default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({h: Dh, l: Dl} = _u64_js_1.default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({h: Eh, l: El} = _u64_js_1.default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({h: Fh, l: Fl} = _u64_js_1.default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({h: Gh, l: Gl} = _u64_js_1.default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({h: Hh, l: Hl} = _u64_js_1.default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
      }
      roundClean() {
        SHA512_W_H.fill(0);
        SHA512_W_L.fill(0);
      }
      destroy() {
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    };
    exports.SHA512 = SHA512;
    var SHA512_224 = class extends SHA512 {
      constructor() {
        super();
        this.Ah = 2352822216 | 0;
        this.Al = 424955298 | 0;
        this.Bh = 1944164710 | 0;
        this.Bl = 2312950998 | 0;
        this.Ch = 502970286 | 0;
        this.Cl = 855612546 | 0;
        this.Dh = 1738396948 | 0;
        this.Dl = 1479516111 | 0;
        this.Eh = 258812777 | 0;
        this.El = 2077511080 | 0;
        this.Fh = 2011393907 | 0;
        this.Fl = 79989058 | 0;
        this.Gh = 1067287976 | 0;
        this.Gl = 1780299464 | 0;
        this.Hh = 286451373 | 0;
        this.Hl = 2446758561 | 0;
        this.outputLen = 28;
      }
    };
    var SHA512_256 = class extends SHA512 {
      constructor() {
        super();
        this.Ah = 573645204 | 0;
        this.Al = 4230739756 | 0;
        this.Bh = 2673172387 | 0;
        this.Bl = 3360449730 | 0;
        this.Ch = 596883563 | 0;
        this.Cl = 1867755857 | 0;
        this.Dh = 2520282905 | 0;
        this.Dl = 1497426621 | 0;
        this.Eh = 2519219938 | 0;
        this.El = 2827943907 | 0;
        this.Fh = 3193839141 | 0;
        this.Fl = 1401305490 | 0;
        this.Gh = 721525244 | 0;
        this.Gl = 746961066 | 0;
        this.Hh = 246885852 | 0;
        this.Hl = 2177182882 | 0;
        this.outputLen = 32;
      }
    };
    var SHA384 = class extends SHA512 {
      constructor() {
        super();
        this.Ah = 3418070365 | 0;
        this.Al = 3238371032 | 0;
        this.Bh = 1654270250 | 0;
        this.Bl = 914150663 | 0;
        this.Ch = 2438529370 | 0;
        this.Cl = 812702999 | 0;
        this.Dh = 355462360 | 0;
        this.Dl = 4144912697 | 0;
        this.Eh = 1731405415 | 0;
        this.El = 4290775857 | 0;
        this.Fh = 2394180231 | 0;
        this.Fl = 1750603025 | 0;
        this.Gh = 3675008525 | 0;
        this.Gl = 1694076839 | 0;
        this.Hh = 1203062813 | 0;
        this.Hl = 3204075428 | 0;
        this.outputLen = 48;
      }
    };
    exports.sha512 = (0, utils_js_1.wrapConstructor)(() => new SHA512());
    exports.sha512_224 = (0, utils_js_1.wrapConstructor)(() => new SHA512_224());
    exports.sha512_256 = (0, utils_js_1.wrapConstructor)(() => new SHA512_256());
    exports.sha384 = (0, utils_js_1.wrapConstructor)(() => new SHA384());
  });

  // node_modules/@noble/curves/abstract/utils.js
  var require_utils2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.validateObject = exports.createHmacDrbg = exports.bitMask = exports.bitSet = exports.bitGet = exports.bitLen = exports.utf8ToBytes = exports.equalBytes = exports.concatBytes = exports.ensureBytes = exports.numberToVarBytesBE = exports.numberToBytesLE = exports.numberToBytesBE = exports.bytesToNumberLE = exports.bytesToNumberBE = exports.hexToBytes = exports.hexToNumber = exports.numberToHexUnpadded = exports.bytesToHex = exports.isBytes = void 0;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    function isBytes(a) {
      return a instanceof Uint8Array || a != null && typeof a === "object" && a.constructor.name === "Uint8Array";
    }
    exports.isBytes = isBytes;
    var hexes = /* @__PURE__ */ Array.from({length: 256}, (_, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex(bytes) {
      if (!isBytes(bytes))
        throw new Error("Uint8Array expected");
      let hex = "";
      for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
      }
      return hex;
    }
    exports.bytesToHex = bytesToHex;
    function numberToHexUnpadded(num) {
      const hex = num.toString(16);
      return hex.length & 1 ? `0${hex}` : hex;
    }
    exports.numberToHexUnpadded = numberToHexUnpadded;
    function hexToNumber(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      return BigInt(hex === "" ? "0" : `0x${hex}`);
    }
    exports.hexToNumber = hexToNumber;
    var asciis = {_0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102};
    function asciiToBase16(char) {
      if (char >= asciis._0 && char <= asciis._9)
        return char - asciis._0;
      if (char >= asciis._A && char <= asciis._F)
        return char - (asciis._A - 10);
      if (char >= asciis._a && char <= asciis._f)
        return char - (asciis._a - 10);
      return;
    }
    function hexToBytes(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      const hl = hex.length;
      const al = hl / 2;
      if (hl % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + hl);
      const array2 = new Uint8Array(al);
      for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === void 0 || n2 === void 0) {
          const char = hex[hi] + hex[hi + 1];
          throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array2[ai] = n1 * 16 + n2;
      }
      return array2;
    }
    exports.hexToBytes = hexToBytes;
    function bytesToNumberBE(bytes) {
      return hexToNumber(bytesToHex(bytes));
    }
    exports.bytesToNumberBE = bytesToNumberBE;
    function bytesToNumberLE(bytes) {
      if (!isBytes(bytes))
        throw new Error("Uint8Array expected");
      return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
    }
    exports.bytesToNumberLE = bytesToNumberLE;
    function numberToBytesBE(n, len) {
      return hexToBytes(n.toString(16).padStart(len * 2, "0"));
    }
    exports.numberToBytesBE = numberToBytesBE;
    function numberToBytesLE(n, len) {
      return numberToBytesBE(n, len).reverse();
    }
    exports.numberToBytesLE = numberToBytesLE;
    function numberToVarBytesBE(n) {
      return hexToBytes(numberToHexUnpadded(n));
    }
    exports.numberToVarBytesBE = numberToVarBytesBE;
    function ensureBytes(title, hex, expectedLength) {
      let res;
      if (typeof hex === "string") {
        try {
          res = hexToBytes(hex);
        } catch (e) {
          throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
        }
      } else if (isBytes(hex)) {
        res = Uint8Array.from(hex);
      } else {
        throw new Error(`${title} must be hex string or Uint8Array`);
      }
      const len = res.length;
      if (typeof expectedLength === "number" && len !== expectedLength)
        throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
      return res;
    }
    exports.ensureBytes = ensureBytes;
    function concatBytes(...arrays) {
      let sum = 0;
      for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        if (!isBytes(a))
          throw new Error("Uint8Array expected");
        sum += a.length;
      }
      let res = new Uint8Array(sum);
      let pad = 0;
      for (let i = 0; i < arrays.length; i++) {
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
      }
      return res;
    }
    exports.concatBytes = concatBytes;
    function equalBytes(a, b) {
      if (a.length !== b.length)
        return false;
      let diff = 0;
      for (let i = 0; i < a.length; i++)
        diff |= a[i] ^ b[i];
      return diff === 0;
    }
    exports.equalBytes = equalBytes;
    function utf8ToBytes(str) {
      if (typeof str !== "string")
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
      return new Uint8Array(new TextEncoder().encode(str));
    }
    exports.utf8ToBytes = utf8ToBytes;
    function bitLen(n) {
      let len;
      for (len = 0; n > _0n; n >>= _1n, len += 1)
        ;
      return len;
    }
    exports.bitLen = bitLen;
    function bitGet(n, pos) {
      return n >> BigInt(pos) & _1n;
    }
    exports.bitGet = bitGet;
    var bitSet = (n, pos, value) => {
      return n | (value ? _1n : _0n) << BigInt(pos);
    };
    exports.bitSet = bitSet;
    var bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
    exports.bitMask = bitMask;
    var u8n = (data) => new Uint8Array(data);
    var u8fr = (arr) => Uint8Array.from(arr);
    function createHmacDrbg(hashLen, qByteLen, hmacFn) {
      if (typeof hashLen !== "number" || hashLen < 2)
        throw new Error("hashLen must be a number");
      if (typeof qByteLen !== "number" || qByteLen < 2)
        throw new Error("qByteLen must be a number");
      if (typeof hmacFn !== "function")
        throw new Error("hmacFn must be a function");
      let v = u8n(hashLen);
      let k = u8n(hashLen);
      let i = 0;
      const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
      };
      const h = (...b) => hmacFn(k, v, ...b);
      const reseed = (seed = u8n()) => {
        k = h(u8fr([0]), seed);
        v = h();
        if (seed.length === 0)
          return;
        k = h(u8fr([1]), seed);
        v = h();
      };
      const gen = () => {
        if (i++ >= 1e3)
          throw new Error("drbg: tried 1000 values");
        let len = 0;
        const out = [];
        while (len < qByteLen) {
          v = h();
          const sl = v.slice();
          out.push(sl);
          len += v.length;
        }
        return concatBytes(...out);
      };
      const genUntil = (seed, pred) => {
        reset();
        reseed(seed);
        let res = void 0;
        while (!(res = pred(gen())))
          reseed();
        reset();
        return res;
      };
      return genUntil;
    }
    exports.createHmacDrbg = createHmacDrbg;
    var validatorFns = {
      bigint: (val) => typeof val === "bigint",
      function: (val) => typeof val === "function",
      boolean: (val) => typeof val === "boolean",
      string: (val) => typeof val === "string",
      stringOrUint8Array: (val) => typeof val === "string" || isBytes(val),
      isSafeInteger: (val) => Number.isSafeInteger(val),
      array: (val) => Array.isArray(val),
      field: (val, object) => object.Fp.isValid(val),
      hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
    };
    function validateObject(object, validators, optValidators = {}) {
      const checkField = (fieldName, type2, isOptional) => {
        const checkVal = validatorFns[type2];
        if (typeof checkVal !== "function")
          throw new Error(`Invalid validator "${type2}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === void 0)
          return;
        if (!checkVal(val, object)) {
          throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type2}`);
        }
      };
      for (const [fieldName, type2] of Object.entries(validators))
        checkField(fieldName, type2, false);
      for (const [fieldName, type2] of Object.entries(optValidators))
        checkField(fieldName, type2, true);
      return object;
    }
    exports.validateObject = validateObject;
  });

  // node_modules/@noble/curves/abstract/modular.js
  var require_modular = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.mapHashToField = exports.getMinHashLength = exports.getFieldBytesLength = exports.hashToPrivateScalar = exports.FpSqrtEven = exports.FpSqrtOdd = exports.Field = exports.nLength = exports.FpIsSquare = exports.FpDiv = exports.FpInvertBatch = exports.FpPow = exports.validateField = exports.isNegativeLE = exports.FpSqrt = exports.tonelliShanks = exports.invert = exports.pow2 = exports.pow = exports.mod = void 0;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    var utils_js_1 = require_utils2();
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _3n = BigInt(3);
    var _4n = BigInt(4);
    var _5n = BigInt(5);
    var _8n = BigInt(8);
    var _9n = BigInt(9);
    var _16n = BigInt(16);
    function mod(a, b) {
      const result = a % b;
      return result >= _0n ? result : b + result;
    }
    exports.mod = mod;
    function pow(num, power, modulo) {
      if (modulo <= _0n || power < _0n)
        throw new Error("Expected power/modulo > 0");
      if (modulo === _1n)
        return _0n;
      let res = _1n;
      while (power > _0n) {
        if (power & _1n)
          res = res * num % modulo;
        num = num * num % modulo;
        power >>= _1n;
      }
      return res;
    }
    exports.pow = pow;
    function pow2(x, power, modulo) {
      let res = x;
      while (power-- > _0n) {
        res *= res;
        res %= modulo;
      }
      return res;
    }
    exports.pow2 = pow2;
    function invert(number2, modulo) {
      if (number2 === _0n || modulo <= _0n) {
        throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
      }
      let a = mod(number2, modulo);
      let b = modulo;
      let x = _0n, y = _1n, u = _1n, v = _0n;
      while (a !== _0n) {
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
      }
      const gcd = b;
      if (gcd !== _1n)
        throw new Error("invert: does not exist");
      return mod(x, modulo);
    }
    exports.invert = invert;
    function tonelliShanks(P) {
      const legendreC = (P - _1n) / _2n;
      let Q, S, Z;
      for (Q = P - _1n, S = 0; Q % _2n === _0n; Q /= _2n, S++)
        ;
      for (Z = _2n; Z < P && pow(Z, legendreC, P) !== P - _1n; Z++)
        ;
      if (S === 1) {
        const p1div4 = (P + _1n) / _4n;
        return function tonelliFast(Fp, n) {
          const root = Fp.pow(n, p1div4);
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      const Q1div2 = (Q + _1n) / _2n;
      return function tonelliSlow(Fp, n) {
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE))
          throw new Error("Cannot find square root");
        let r = S;
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q);
        let x = Fp.pow(n, Q1div2);
        let b = Fp.pow(n, Q);
        while (!Fp.eql(b, Fp.ONE)) {
          if (Fp.eql(b, Fp.ZERO))
            return Fp.ZERO;
          let m = 1;
          for (let t2 = Fp.sqr(b); m < r; m++) {
            if (Fp.eql(t2, Fp.ONE))
              break;
            t2 = Fp.sqr(t2);
          }
          const ge = Fp.pow(g, _1n << BigInt(r - m - 1));
          g = Fp.sqr(ge);
          x = Fp.mul(x, ge);
          b = Fp.mul(b, g);
          r = m;
        }
        return x;
      };
    }
    exports.tonelliShanks = tonelliShanks;
    function FpSqrt(P) {
      if (P % _4n === _3n) {
        const p1div4 = (P + _1n) / _4n;
        return function sqrt3mod4(Fp, n) {
          const root = Fp.pow(n, p1div4);
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
          const n2 = Fp.mul(n, _2n);
          const v = Fp.pow(n2, c1);
          const nv = Fp.mul(n, v);
          const i = Fp.mul(Fp.mul(nv, _2n), v);
          const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      if (P % _16n === _9n) {
      }
      return tonelliShanks(P);
    }
    exports.FpSqrt = FpSqrt;
    var isNegativeLE = (num, modulo) => (mod(num, modulo) & _1n) === _1n;
    exports.isNegativeLE = isNegativeLE;
    var FIELD_FIELDS = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN"
    ];
    function validateField(field) {
      const initial = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
      };
      const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = "function";
        return map;
      }, initial);
      return (0, utils_js_1.validateObject)(field, opts);
    }
    exports.validateField = validateField;
    function FpPow(f, num, power) {
      if (power < _0n)
        throw new Error("Expected power > 0");
      if (power === _0n)
        return f.ONE;
      if (power === _1n)
        return num;
      let p = f.ONE;
      let d = num;
      while (power > _0n) {
        if (power & _1n)
          p = f.mul(p, d);
        d = f.sqr(d);
        power >>= _1n;
      }
      return p;
    }
    exports.FpPow = FpPow;
    function FpInvertBatch(f, nums) {
      const tmp = new Array(nums.length);
      const lastMultiplied = nums.reduce((acc, num, i) => {
        if (f.is0(num))
          return acc;
        tmp[i] = acc;
        return f.mul(acc, num);
      }, f.ONE);
      const inverted = f.inv(lastMultiplied);
      nums.reduceRight((acc, num, i) => {
        if (f.is0(num))
          return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num);
      }, inverted);
      return tmp;
    }
    exports.FpInvertBatch = FpInvertBatch;
    function FpDiv(f, lhs, rhs) {
      return f.mul(lhs, typeof rhs === "bigint" ? invert(rhs, f.ORDER) : f.inv(rhs));
    }
    exports.FpDiv = FpDiv;
    function FpIsSquare(f) {
      const legendreConst = (f.ORDER - _1n) / _2n;
      return (x) => {
        const p = f.pow(x, legendreConst);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
      };
    }
    exports.FpIsSquare = FpIsSquare;
    function nLength(n, nBitLength) {
      const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
      const nByteLength = Math.ceil(_nBitLength / 8);
      return {nBitLength: _nBitLength, nByteLength};
    }
    exports.nLength = nLength;
    function Field(ORDER, bitLen, isLE = false, redef = {}) {
      if (ORDER <= _0n)
        throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
      const {nBitLength: BITS, nByteLength: BYTES} = nLength(ORDER, bitLen);
      if (BYTES > 2048)
        throw new Error("Field lengths over 2048 bytes are not supported");
      const sqrtP = FpSqrt(ORDER);
      const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: (0, utils_js_1.bitMask)(BITS),
        ZERO: _0n,
        ONE: _1n,
        create: (num) => mod(num, ORDER),
        isValid: (num) => {
          if (typeof num !== "bigint")
            throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
          return _0n <= num && num < ORDER;
        },
        is0: (num) => num === _0n,
        isOdd: (num) => (num & _1n) === _1n,
        neg: (num) => mod(-num, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num) => mod(num * num, ORDER),
        add: (lhs, rhs) => mod(lhs + rhs, ORDER),
        sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
        mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
        pow: (num, power) => FpPow(f, num, power),
        div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
        sqrN: (num) => num * num,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num) => invert(num, ORDER),
        sqrt: redef.sqrt || ((n) => sqrtP(f, n)),
        invertBatch: (lst) => FpInvertBatch(f, lst),
        cmov: (a, b, c) => c ? b : a,
        toBytes: (num) => isLE ? (0, utils_js_1.numberToBytesLE)(num, BYTES) : (0, utils_js_1.numberToBytesBE)(num, BYTES),
        fromBytes: (bytes) => {
          if (bytes.length !== BYTES)
            throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
          return isLE ? (0, utils_js_1.bytesToNumberLE)(bytes) : (0, utils_js_1.bytesToNumberBE)(bytes);
        }
      });
      return Object.freeze(f);
    }
    exports.Field = Field;
    function FpSqrtOdd(Fp, elm) {
      if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
      const root = Fp.sqrt(elm);
      return Fp.isOdd(root) ? root : Fp.neg(root);
    }
    exports.FpSqrtOdd = FpSqrtOdd;
    function FpSqrtEven(Fp, elm) {
      if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
      const root = Fp.sqrt(elm);
      return Fp.isOdd(root) ? Fp.neg(root) : root;
    }
    exports.FpSqrtEven = FpSqrtEven;
    function hashToPrivateScalar(hash, groupOrder, isLE = false) {
      hash = (0, utils_js_1.ensureBytes)("privateHash", hash);
      const hashLen = hash.length;
      const minLen = nLength(groupOrder).nByteLength + 8;
      if (minLen < 24 || hashLen < minLen || hashLen > 1024)
        throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
      const num = isLE ? (0, utils_js_1.bytesToNumberLE)(hash) : (0, utils_js_1.bytesToNumberBE)(hash);
      return mod(num, groupOrder - _1n) + _1n;
    }
    exports.hashToPrivateScalar = hashToPrivateScalar;
    function getFieldBytesLength(fieldOrder) {
      if (typeof fieldOrder !== "bigint")
        throw new Error("field order must be bigint");
      const bitLength = fieldOrder.toString(2).length;
      return Math.ceil(bitLength / 8);
    }
    exports.getFieldBytesLength = getFieldBytesLength;
    function getMinHashLength(fieldOrder) {
      const length = getFieldBytesLength(fieldOrder);
      return length + Math.ceil(length / 2);
    }
    exports.getMinHashLength = getMinHashLength;
    function mapHashToField(key, fieldOrder, isLE = false) {
      const len = key.length;
      const fieldLen = getFieldBytesLength(fieldOrder);
      const minLen = getMinHashLength(fieldOrder);
      if (len < 16 || len < minLen || len > 1024)
        throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
      const num = isLE ? (0, utils_js_1.bytesToNumberBE)(key) : (0, utils_js_1.bytesToNumberLE)(key);
      const reduced = mod(num, fieldOrder - _1n) + _1n;
      return isLE ? (0, utils_js_1.numberToBytesLE)(reduced, fieldLen) : (0, utils_js_1.numberToBytesBE)(reduced, fieldLen);
    }
    exports.mapHashToField = mapHashToField;
  });

  // node_modules/@noble/curves/abstract/curve.js
  var require_curve = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.validateBasic = exports.wNAF = void 0;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    var modular_js_1 = require_modular();
    var utils_js_1 = require_utils2();
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    function wNAF(c, bits) {
      const constTimeNegate = (condition, item) => {
        const neg = item.negate();
        return condition ? neg : item;
      };
      const opts = (W) => {
        const windows = Math.ceil(bits / W) + 1;
        const windowSize = 2 ** (W - 1);
        return {windows, windowSize};
      };
      return {
        constTimeNegate,
        unsafeLadder(elm, n) {
          let p = c.ZERO;
          let d = elm;
          while (n > _0n) {
            if (n & _1n)
              p = p.add(d);
            d = d.double();
            n >>= _1n;
          }
          return p;
        },
        precomputeWindow(elm, W) {
          const {windows, windowSize} = opts(W);
          const points = [];
          let p = elm;
          let base = p;
          for (let window2 = 0; window2 < windows; window2++) {
            base = p;
            points.push(base);
            for (let i = 1; i < windowSize; i++) {
              base = base.add(p);
              points.push(base);
            }
            p = base.double();
          }
          return points;
        },
        wNAF(W, precomputes, n) {
          const {windows, windowSize} = opts(W);
          let p = c.ZERO;
          let f = c.BASE;
          const mask2 = BigInt(2 ** W - 1);
          const maxNumber = 2 ** W;
          const shiftBy = BigInt(W);
          for (let window2 = 0; window2 < windows; window2++) {
            const offset2 = window2 * windowSize;
            let wbits = Number(n & mask2);
            n >>= shiftBy;
            if (wbits > windowSize) {
              wbits -= maxNumber;
              n += _1n;
            }
            const offset1 = offset2;
            const offset22 = offset2 + Math.abs(wbits) - 1;
            const cond1 = window2 % 2 !== 0;
            const cond2 = wbits < 0;
            if (wbits === 0) {
              f = f.add(constTimeNegate(cond1, precomputes[offset1]));
            } else {
              p = p.add(constTimeNegate(cond2, precomputes[offset22]));
            }
          }
          return {p, f};
        },
        wNAFCached(P, precomputesMap, n, transform) {
          const W = P._WINDOW_SIZE || 1;
          let comp = precomputesMap.get(P);
          if (!comp) {
            comp = this.precomputeWindow(P, W);
            if (W !== 1) {
              precomputesMap.set(P, transform(comp));
            }
          }
          return this.wNAF(W, comp, n);
        }
      };
    }
    exports.wNAF = wNAF;
    function validateBasic(curve) {
      (0, modular_js_1.validateField)(curve.Fp);
      (0, utils_js_1.validateObject)(curve, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
      }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
      });
      return Object.freeze(__assign(__assign(__assign({}, (0, modular_js_1.nLength)(curve.n, curve.nBitLength)), curve), {p: curve.Fp.ORDER}));
    }
    exports.validateBasic = validateBasic;
  });

  // node_modules/@noble/curves/abstract/edwards.js
  var require_edwards = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.twistedEdwards = void 0;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    var modular_js_1 = require_modular();
    var ut = require_utils2();
    var utils_js_1 = require_utils2();
    var curve_js_1 = require_curve();
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _8n = BigInt(8);
    var VERIFY_DEFAULT = {zip215: true};
    function validateOpts(curve) {
      const opts = (0, curve_js_1.validateBasic)(curve);
      ut.validateObject(curve, {
        hash: "function",
        a: "bigint",
        d: "bigint",
        randomBytes: "function"
      }, {
        adjustScalarBytes: "function",
        domain: "function",
        uvRatio: "function",
        mapToCurve: "function"
      });
      return Object.freeze(__assign({}, opts));
    }
    function twistedEdwards(curveDef) {
      const CURVE = validateOpts(curveDef);
      const {Fp, n: CURVE_ORDER, prehash, hash: cHash, randomBytes, nByteLength, h: cofactor} = CURVE;
      const MASK = _2n << BigInt(nByteLength * 8) - _1n;
      const modP = Fp.create;
      const uvRatio = CURVE.uvRatio || ((u, v) => {
        try {
          return {isValid: true, value: Fp.sqrt(u * Fp.inv(v))};
        } catch (e) {
          return {isValid: false, value: _0n};
        }
      });
      const adjustScalarBytes = CURVE.adjustScalarBytes || ((bytes) => bytes);
      const domain = CURVE.domain || ((data, ctx, phflag) => {
        if (ctx.length || phflag)
          throw new Error("Contexts/pre-hash are not supported");
        return data;
      });
      const inBig = (n) => typeof n === "bigint" && _0n < n;
      const inRange = (n, max) => inBig(n) && inBig(max) && n < max;
      const in0MaskRange = (n) => n === _0n || inRange(n, MASK);
      function assertInRange(n, max) {
        if (inRange(n, max))
          return n;
        throw new Error(`Expected valid scalar < ${max}, got ${typeof n} ${n}`);
      }
      function assertGE0(n) {
        return n === _0n ? n : assertInRange(n, CURVE_ORDER);
      }
      const pointPrecomputes = new Map();
      function isPoint(other) {
        if (!(other instanceof Point))
          throw new Error("ExtendedPoint expected");
      }
      class Point {
        constructor(ex, ey, ez, et) {
          this.ex = ex;
          this.ey = ey;
          this.ez = ez;
          this.et = et;
          if (!in0MaskRange(ex))
            throw new Error("x required");
          if (!in0MaskRange(ey))
            throw new Error("y required");
          if (!in0MaskRange(ez))
            throw new Error("z required");
          if (!in0MaskRange(et))
            throw new Error("t required");
        }
        get x() {
          return this.toAffine().x;
        }
        get y() {
          return this.toAffine().y;
        }
        static fromAffine(p) {
          if (p instanceof Point)
            throw new Error("extended point not allowed");
          const {x, y} = p || {};
          if (!in0MaskRange(x) || !in0MaskRange(y))
            throw new Error("invalid affine point");
          return new Point(x, y, _1n, modP(x * y));
        }
        static normalizeZ(points) {
          const toInv = Fp.invertBatch(points.map((p) => p.ez));
          return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        _setWindowSize(windowSize) {
          this._WINDOW_SIZE = windowSize;
          pointPrecomputes.delete(this);
        }
        assertValidity() {
          const {a, d} = CURVE;
          if (this.is0())
            throw new Error("bad point: ZERO");
          const {ex: X, ey: Y, ez: Z, et: T} = this;
          const X2 = modP(X * X);
          const Y2 = modP(Y * Y);
          const Z2 = modP(Z * Z);
          const Z4 = modP(Z2 * Z2);
          const aX2 = modP(X2 * a);
          const left = modP(Z2 * modP(aX2 + Y2));
          const right = modP(Z4 + modP(d * modP(X2 * Y2)));
          if (left !== right)
            throw new Error("bad point: equation left != right (1)");
          const XY = modP(X * Y);
          const ZT = modP(Z * T);
          if (XY !== ZT)
            throw new Error("bad point: equation left != right (2)");
        }
        equals(other) {
          isPoint(other);
          const {ex: X1, ey: Y1, ez: Z1} = this;
          const {ex: X2, ey: Y2, ez: Z2} = other;
          const X1Z2 = modP(X1 * Z2);
          const X2Z1 = modP(X2 * Z1);
          const Y1Z2 = modP(Y1 * Z2);
          const Y2Z1 = modP(Y2 * Z1);
          return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
        }
        is0() {
          return this.equals(Point.ZERO);
        }
        negate() {
          return new Point(modP(-this.ex), this.ey, this.ez, modP(-this.et));
        }
        double() {
          const {a} = CURVE;
          const {ex: X1, ey: Y1, ez: Z1} = this;
          const A = modP(X1 * X1);
          const B = modP(Y1 * Y1);
          const C = modP(_2n * modP(Z1 * Z1));
          const D = modP(a * A);
          const x1y1 = X1 + Y1;
          const E = modP(modP(x1y1 * x1y1) - A - B);
          const G2 = D + B;
          const F = G2 - C;
          const H = D - B;
          const X3 = modP(E * F);
          const Y3 = modP(G2 * H);
          const T3 = modP(E * H);
          const Z3 = modP(F * G2);
          return new Point(X3, Y3, Z3, T3);
        }
        add(other) {
          isPoint(other);
          const {a, d} = CURVE;
          const {ex: X1, ey: Y1, ez: Z1, et: T1} = this;
          const {ex: X2, ey: Y2, ez: Z2, et: T2} = other;
          if (a === BigInt(-1)) {
            const A2 = modP((Y1 - X1) * (Y2 + X2));
            const B2 = modP((Y1 + X1) * (Y2 - X2));
            const F2 = modP(B2 - A2);
            if (F2 === _0n)
              return this.double();
            const C2 = modP(Z1 * _2n * T2);
            const D2 = modP(T1 * _2n * Z2);
            const E2 = D2 + C2;
            const G3 = B2 + A2;
            const H2 = D2 - C2;
            const X32 = modP(E2 * F2);
            const Y32 = modP(G3 * H2);
            const T32 = modP(E2 * H2);
            const Z32 = modP(F2 * G3);
            return new Point(X32, Y32, Z32, T32);
          }
          const A = modP(X1 * X2);
          const B = modP(Y1 * Y2);
          const C = modP(T1 * d * T2);
          const D = modP(Z1 * Z2);
          const E = modP((X1 + Y1) * (X2 + Y2) - A - B);
          const F = D - C;
          const G2 = D + C;
          const H = modP(B - a * A);
          const X3 = modP(E * F);
          const Y3 = modP(G2 * H);
          const T3 = modP(E * H);
          const Z3 = modP(F * G2);
          return new Point(X3, Y3, Z3, T3);
        }
        subtract(other) {
          return this.add(other.negate());
        }
        wNAF(n) {
          return wnaf.wNAFCached(this, pointPrecomputes, n, Point.normalizeZ);
        }
        multiply(scalar) {
          const {p, f} = this.wNAF(assertInRange(scalar, CURVE_ORDER));
          return Point.normalizeZ([p, f])[0];
        }
        multiplyUnsafe(scalar) {
          let n = assertGE0(scalar);
          if (n === _0n)
            return I;
          if (this.equals(I) || n === _1n)
            return this;
          if (this.equals(G))
            return this.wNAF(n).p;
          return wnaf.unsafeLadder(this, n);
        }
        isSmallOrder() {
          return this.multiplyUnsafe(cofactor).is0();
        }
        isTorsionFree() {
          return wnaf.unsafeLadder(this, CURVE_ORDER).is0();
        }
        toAffine(iz) {
          const {ex: x, ey: y, ez: z} = this;
          const is0 = this.is0();
          if (iz == null)
            iz = is0 ? _8n : Fp.inv(z);
          const ax = modP(x * iz);
          const ay = modP(y * iz);
          const zz = modP(z * iz);
          if (is0)
            return {x: _0n, y: _1n};
          if (zz !== _1n)
            throw new Error("invZ was invalid");
          return {x: ax, y: ay};
        }
        clearCofactor() {
          const {h: cofactor2} = CURVE;
          if (cofactor2 === _1n)
            return this;
          return this.multiplyUnsafe(cofactor2);
        }
        static fromHex(hex, zip215 = false) {
          const {d, a} = CURVE;
          const len = Fp.BYTES;
          hex = (0, utils_js_1.ensureBytes)("pointHex", hex, len);
          const normed = hex.slice();
          const lastByte = hex[len - 1];
          normed[len - 1] = lastByte & ~128;
          const y = ut.bytesToNumberLE(normed);
          if (y === _0n) {
          } else {
            if (zip215)
              assertInRange(y, MASK);
            else
              assertInRange(y, Fp.ORDER);
          }
          const y2 = modP(y * y);
          const u = modP(y2 - _1n);
          const v = modP(d * y2 - a);
          let {isValid, value: x} = uvRatio(u, v);
          if (!isValid)
            throw new Error("Point.fromHex: invalid y coordinate");
          const isXOdd = (x & _1n) === _1n;
          const isLastByteOdd = (lastByte & 128) !== 0;
          if (!zip215 && x === _0n && isLastByteOdd)
            throw new Error("Point.fromHex: x=0 and x_0=1");
          if (isLastByteOdd !== isXOdd)
            x = modP(-x);
          return Point.fromAffine({x, y});
        }
        static fromPrivateKey(privKey) {
          return getExtendedPublicKey(privKey).point;
        }
        toRawBytes() {
          const {x, y} = this.toAffine();
          const bytes = ut.numberToBytesLE(y, Fp.BYTES);
          bytes[bytes.length - 1] |= x & _1n ? 128 : 0;
          return bytes;
        }
        toHex() {
          return ut.bytesToHex(this.toRawBytes());
        }
      }
      Point.BASE = new Point(CURVE.Gx, CURVE.Gy, _1n, modP(CURVE.Gx * CURVE.Gy));
      Point.ZERO = new Point(_0n, _1n, _1n, _0n);
      const {BASE: G, ZERO: I} = Point;
      const wnaf = (0, curve_js_1.wNAF)(Point, nByteLength * 8);
      function modN(a) {
        return (0, modular_js_1.mod)(a, CURVE_ORDER);
      }
      function modN_LE(hash) {
        return modN(ut.bytesToNumberLE(hash));
      }
      function getExtendedPublicKey(key) {
        const len = nByteLength;
        key = (0, utils_js_1.ensureBytes)("private key", key, len);
        const hashed = (0, utils_js_1.ensureBytes)("hashed private key", cHash(key), 2 * len);
        const head = adjustScalarBytes(hashed.slice(0, len));
        const prefix = hashed.slice(len, 2 * len);
        const scalar = modN_LE(head);
        const point = G.multiply(scalar);
        const pointBytes = point.toRawBytes();
        return {head, prefix, scalar, point, pointBytes};
      }
      function getPublicKey2(privKey) {
        return getExtendedPublicKey(privKey).pointBytes;
      }
      function hashDomainToScalar(context = new Uint8Array(), ...msgs) {
        const msg = ut.concatBytes(...msgs);
        return modN_LE(cHash(domain(msg, (0, utils_js_1.ensureBytes)("context", context), !!prehash)));
      }
      function sign2(msg, privKey, options = {}) {
        msg = (0, utils_js_1.ensureBytes)("message", msg);
        if (prehash)
          msg = prehash(msg);
        const {prefix, scalar, pointBytes} = getExtendedPublicKey(privKey);
        const r = hashDomainToScalar(options.context, prefix, msg);
        const R = G.multiply(r).toRawBytes();
        const k = hashDomainToScalar(options.context, R, pointBytes, msg);
        const s = modN(r + k * scalar);
        assertGE0(s);
        const res = ut.concatBytes(R, ut.numberToBytesLE(s, Fp.BYTES));
        return (0, utils_js_1.ensureBytes)("result", res, nByteLength * 2);
      }
      const verifyOpts = VERIFY_DEFAULT;
      function verify2(sig, msg, publicKey2, options = verifyOpts) {
        const {context, zip215} = options;
        const len = Fp.BYTES;
        sig = (0, utils_js_1.ensureBytes)("signature", sig, 2 * len);
        msg = (0, utils_js_1.ensureBytes)("message", msg);
        if (prehash)
          msg = prehash(msg);
        const s = ut.bytesToNumberLE(sig.slice(len, 2 * len));
        let A, R, SB;
        try {
          A = Point.fromHex(publicKey2, zip215);
          R = Point.fromHex(sig.slice(0, len), zip215);
          SB = G.multiplyUnsafe(s);
        } catch (error) {
          return false;
        }
        if (!zip215 && A.isSmallOrder())
          return false;
        const k = hashDomainToScalar(context, R.toRawBytes(), A.toRawBytes(), msg);
        const RkA = R.add(A.multiplyUnsafe(k));
        return RkA.subtract(SB).clearCofactor().equals(Point.ZERO);
      }
      G._setWindowSize(8);
      const utils = {
        getExtendedPublicKey,
        randomPrivateKey: () => randomBytes(Fp.BYTES),
        precompute(windowSize = 8, point = Point.BASE) {
          point._setWindowSize(windowSize);
          point.multiply(BigInt(3));
          return point;
        }
      };
      return {
        CURVE,
        getPublicKey: getPublicKey2,
        sign: sign2,
        verify: verify2,
        ExtendedPoint: Point,
        utils
      };
    }
    exports.twistedEdwards = twistedEdwards;
  });

  // node_modules/@noble/curves/abstract/montgomery.js
  var require_montgomery = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.montgomery = void 0;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    var modular_js_1 = require_modular();
    var utils_js_1 = require_utils2();
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    function validateOpts(curve) {
      (0, utils_js_1.validateObject)(curve, {
        a: "bigint"
      }, {
        montgomeryBits: "isSafeInteger",
        nByteLength: "isSafeInteger",
        adjustScalarBytes: "function",
        domain: "function",
        powPminus2: "function",
        Gu: "bigint"
      });
      return Object.freeze(__assign({}, curve));
    }
    function montgomery(curveDef) {
      const CURVE = validateOpts(curveDef);
      const {P} = CURVE;
      const modP = (n) => (0, modular_js_1.mod)(n, P);
      const montgomeryBits = CURVE.montgomeryBits;
      const montgomeryBytes = Math.ceil(montgomeryBits / 8);
      const fieldLen = CURVE.nByteLength;
      const adjustScalarBytes = CURVE.adjustScalarBytes || ((bytes) => bytes);
      const powPminus2 = CURVE.powPminus2 || ((x) => (0, modular_js_1.pow)(x, P - BigInt(2), P));
      function cswap(swap, x_2, x_3) {
        const dummy = modP(swap * (x_2 - x_3));
        x_2 = modP(x_2 - dummy);
        x_3 = modP(x_3 + dummy);
        return [x_2, x_3];
      }
      function assertFieldElement(n) {
        if (typeof n === "bigint" && _0n <= n && n < P)
          return n;
        throw new Error("Expected valid scalar 0 < scalar < CURVE.P");
      }
      const a24 = (CURVE.a - BigInt(2)) / BigInt(4);
      function montgomeryLadder(pointU, scalar) {
        const u = assertFieldElement(pointU);
        const k = assertFieldElement(scalar);
        const x_1 = u;
        let x_2 = _1n;
        let z_2 = _0n;
        let x_3 = u;
        let z_3 = _1n;
        let swap = _0n;
        let sw;
        for (let t = BigInt(montgomeryBits - 1); t >= _0n; t--) {
          const k_t = k >> t & _1n;
          swap ^= k_t;
          sw = cswap(swap, x_2, x_3);
          x_2 = sw[0];
          x_3 = sw[1];
          sw = cswap(swap, z_2, z_3);
          z_2 = sw[0];
          z_3 = sw[1];
          swap = k_t;
          const A = x_2 + z_2;
          const AA = modP(A * A);
          const B = x_2 - z_2;
          const BB = modP(B * B);
          const E = AA - BB;
          const C = x_3 + z_3;
          const D = x_3 - z_3;
          const DA = modP(D * A);
          const CB = modP(C * B);
          const dacb = DA + CB;
          const da_cb = DA - CB;
          x_3 = modP(dacb * dacb);
          z_3 = modP(x_1 * modP(da_cb * da_cb));
          x_2 = modP(AA * BB);
          z_2 = modP(E * (AA + modP(a24 * E)));
        }
        sw = cswap(swap, x_2, x_3);
        x_2 = sw[0];
        x_3 = sw[1];
        sw = cswap(swap, z_2, z_3);
        z_2 = sw[0];
        z_3 = sw[1];
        const z2 = powPminus2(z_2);
        return modP(x_2 * z2);
      }
      function encodeUCoordinate(u) {
        return (0, utils_js_1.numberToBytesLE)(modP(u), montgomeryBytes);
      }
      function decodeUCoordinate(uEnc) {
        const u = (0, utils_js_1.ensureBytes)("u coordinate", uEnc, montgomeryBytes);
        if (fieldLen === 32)
          u[31] &= 127;
        return (0, utils_js_1.bytesToNumberLE)(u);
      }
      function decodeScalar(n) {
        const bytes = (0, utils_js_1.ensureBytes)("scalar", n);
        const len = bytes.length;
        if (len !== montgomeryBytes && len !== fieldLen)
          throw new Error(`Expected ${montgomeryBytes} or ${fieldLen} bytes, got ${len}`);
        return (0, utils_js_1.bytesToNumberLE)(adjustScalarBytes(bytes));
      }
      function scalarMult(scalar, u) {
        const pointU = decodeUCoordinate(u);
        const _scalar = decodeScalar(scalar);
        const pu = montgomeryLadder(pointU, _scalar);
        if (pu === _0n)
          throw new Error("Invalid private or public key received");
        return encodeUCoordinate(pu);
      }
      const GuBytes = encodeUCoordinate(CURVE.Gu);
      function scalarMultBase(scalar) {
        return scalarMult(scalar, GuBytes);
      }
      return {
        scalarMult,
        scalarMultBase,
        getSharedSecret: (privateKey, publicKey2) => scalarMult(privateKey, publicKey2),
        getPublicKey: (privateKey) => scalarMultBase(privateKey),
        utils: {randomPrivateKey: () => CURVE.randomBytes(CURVE.nByteLength)},
        GuBytes
      };
    }
    exports.montgomery = montgomery;
  });

  // node_modules/@noble/curves/abstract/hash-to-curve.js
  var require_hash_to_curve = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.createHasher = exports.isogenyMap = exports.hash_to_field = exports.expand_message_xof = exports.expand_message_xmd = void 0;
    var modular_js_1 = require_modular();
    var utils_js_1 = require_utils2();
    function validateDST(dst) {
      if ((0, utils_js_1.isBytes)(dst))
        return dst;
      if (typeof dst === "string")
        return (0, utils_js_1.utf8ToBytes)(dst);
      throw new Error("DST must be Uint8Array or string");
    }
    var os2ip = utils_js_1.bytesToNumberBE;
    function i2osp(value, length) {
      if (value < 0 || value >= 1 << 8 * length) {
        throw new Error(`bad I2OSP call: value=${value} length=${length}`);
      }
      const res = Array.from({length}).fill(0);
      for (let i = length - 1; i >= 0; i--) {
        res[i] = value & 255;
        value >>>= 8;
      }
      return new Uint8Array(res);
    }
    function strxor(a, b) {
      const arr = new Uint8Array(a.length);
      for (let i = 0; i < a.length; i++) {
        arr[i] = a[i] ^ b[i];
      }
      return arr;
    }
    function abytes(item) {
      if (!(0, utils_js_1.isBytes)(item))
        throw new Error("Uint8Array expected");
    }
    function isNum(item) {
      if (!Number.isSafeInteger(item))
        throw new Error("number expected");
    }
    function expand_message_xmd(msg, DST, lenInBytes, H) {
      abytes(msg);
      abytes(DST);
      isNum(lenInBytes);
      if (DST.length > 255)
        DST = H((0, utils_js_1.concatBytes)((0, utils_js_1.utf8ToBytes)("H2C-OVERSIZE-DST-"), DST));
      const {outputLen: b_in_bytes, blockLen: r_in_bytes} = H;
      const ell = Math.ceil(lenInBytes / b_in_bytes);
      if (ell > 255)
        throw new Error("Invalid xmd length");
      const DST_prime = (0, utils_js_1.concatBytes)(DST, i2osp(DST.length, 1));
      const Z_pad = i2osp(0, r_in_bytes);
      const l_i_b_str = i2osp(lenInBytes, 2);
      const b = new Array(ell);
      const b_0 = H((0, utils_js_1.concatBytes)(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
      b[0] = H((0, utils_js_1.concatBytes)(b_0, i2osp(1, 1), DST_prime));
      for (let i = 1; i <= ell; i++) {
        const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
        b[i] = H((0, utils_js_1.concatBytes)(...args));
      }
      const pseudo_random_bytes = (0, utils_js_1.concatBytes)(...b);
      return pseudo_random_bytes.slice(0, lenInBytes);
    }
    exports.expand_message_xmd = expand_message_xmd;
    function expand_message_xof(msg, DST, lenInBytes, k, H) {
      abytes(msg);
      abytes(DST);
      isNum(lenInBytes);
      if (DST.length > 255) {
        const dkLen = Math.ceil(2 * k / 8);
        DST = H.create({dkLen}).update((0, utils_js_1.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(DST).digest();
      }
      if (lenInBytes > 65535 || DST.length > 255)
        throw new Error("expand_message_xof: invalid lenInBytes");
      return H.create({dkLen: lenInBytes}).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
    }
    exports.expand_message_xof = expand_message_xof;
    function hash_to_field(msg, count, options) {
      (0, utils_js_1.validateObject)(options, {
        DST: "stringOrUint8Array",
        p: "bigint",
        m: "isSafeInteger",
        k: "isSafeInteger",
        hash: "hash"
      });
      const {p, k, m, hash, expand, DST: _DST} = options;
      abytes(msg);
      isNum(count);
      const DST = validateDST(_DST);
      const log2p = p.toString(2).length;
      const L = Math.ceil((log2p + k) / 8);
      const len_in_bytes = count * m * L;
      let prb;
      if (expand === "xmd") {
        prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
      } else if (expand === "xof") {
        prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
      } else if (expand === "_internal_pass") {
        prb = msg;
      } else {
        throw new Error('expand must be "xmd" or "xof"');
      }
      const u = new Array(count);
      for (let i = 0; i < count; i++) {
        const e = new Array(m);
        for (let j = 0; j < m; j++) {
          const elm_offset = L * (j + i * m);
          const tv = prb.subarray(elm_offset, elm_offset + L);
          e[j] = (0, modular_js_1.mod)(os2ip(tv), p);
        }
        u[i] = e;
      }
      return u;
    }
    exports.hash_to_field = hash_to_field;
    function isogenyMap(field, map) {
      const COEFF = map.map((i) => Array.from(i).reverse());
      return (x, y) => {
        const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
        x = field.div(xNum, xDen);
        y = field.mul(y, field.div(yNum, yDen));
        return {x, y};
      };
    }
    exports.isogenyMap = isogenyMap;
    function createHasher(Point, mapToCurve, def) {
      if (typeof mapToCurve !== "function")
        throw new Error("mapToCurve() must be defined");
      return {
        hashToCurve(msg, options) {
          const u = hash_to_field(msg, 2, __assign(__assign(__assign({}, def), {DST: def.DST}), options));
          const u0 = Point.fromAffine(mapToCurve(u[0]));
          const u1 = Point.fromAffine(mapToCurve(u[1]));
          const P = u0.add(u1).clearCofactor();
          P.assertValidity();
          return P;
        },
        encodeToCurve(msg, options) {
          const u = hash_to_field(msg, 1, __assign(__assign(__assign({}, def), {DST: def.encodeDST}), options));
          const P = Point.fromAffine(mapToCurve(u[0])).clearCofactor();
          P.assertValidity();
          return P;
        }
      };
    }
    exports.createHasher = createHasher;
  });

  // node_modules/@noble/curves/ed25519.js
  var require_ed25519 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.hash_to_ristretto255 = exports.hashToRistretto255 = exports.RistrettoPoint = exports.encodeToCurve = exports.hashToCurve = exports.edwardsToMontgomeryPriv = exports.edwardsToMontgomery = exports.edwardsToMontgomeryPub = exports.x25519 = exports.ed25519ph = exports.ed25519ctx = exports.ed25519 = exports.ED25519_TORSION_SUBGROUP = void 0;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    var sha512_1 = require_sha512();
    var utils_1 = require_utils();
    var edwards_js_1 = require_edwards();
    var montgomery_js_1 = require_montgomery();
    var modular_js_1 = require_modular();
    var utils_js_1 = require_utils2();
    var hash_to_curve_js_1 = require_hash_to_curve();
    var ED25519_P = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
    var ED25519_SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _5n = BigInt(5);
    var _10n = BigInt(10);
    var _20n = BigInt(20);
    var _40n = BigInt(40);
    var _80n = BigInt(80);
    function ed25519_pow_2_252_3(x) {
      const P = ED25519_P;
      const x2 = x * x % P;
      const b2 = x2 * x % P;
      const b4 = (0, modular_js_1.pow2)(b2, _2n, P) * b2 % P;
      const b5 = (0, modular_js_1.pow2)(b4, _1n, P) * x % P;
      const b10 = (0, modular_js_1.pow2)(b5, _5n, P) * b5 % P;
      const b20 = (0, modular_js_1.pow2)(b10, _10n, P) * b10 % P;
      const b40 = (0, modular_js_1.pow2)(b20, _20n, P) * b20 % P;
      const b80 = (0, modular_js_1.pow2)(b40, _40n, P) * b40 % P;
      const b160 = (0, modular_js_1.pow2)(b80, _80n, P) * b80 % P;
      const b240 = (0, modular_js_1.pow2)(b160, _80n, P) * b80 % P;
      const b250 = (0, modular_js_1.pow2)(b240, _10n, P) * b10 % P;
      const pow_p_5_8 = (0, modular_js_1.pow2)(b250, _2n, P) * x % P;
      return {pow_p_5_8, b2};
    }
    function adjustScalarBytes(bytes) {
      bytes[0] &= 248;
      bytes[31] &= 127;
      bytes[31] |= 64;
      return bytes;
    }
    function uvRatio(u, v) {
      const P = ED25519_P;
      const v3 = (0, modular_js_1.mod)(v * v * v, P);
      const v7 = (0, modular_js_1.mod)(v3 * v3 * v, P);
      const pow = ed25519_pow_2_252_3(u * v7).pow_p_5_8;
      let x = (0, modular_js_1.mod)(u * v3 * pow, P);
      const vx2 = (0, modular_js_1.mod)(v * x * x, P);
      const root1 = x;
      const root2 = (0, modular_js_1.mod)(x * ED25519_SQRT_M1, P);
      const useRoot1 = vx2 === u;
      const useRoot2 = vx2 === (0, modular_js_1.mod)(-u, P);
      const noRoot = vx2 === (0, modular_js_1.mod)(-u * ED25519_SQRT_M1, P);
      if (useRoot1)
        x = root1;
      if (useRoot2 || noRoot)
        x = root2;
      if ((0, modular_js_1.isNegativeLE)(x, P))
        x = (0, modular_js_1.mod)(-x, P);
      return {isValid: useRoot1 || useRoot2, value: x};
    }
    exports.ED25519_TORSION_SUBGROUP = [
      "0100000000000000000000000000000000000000000000000000000000000000",
      "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
      "0000000000000000000000000000000000000000000000000000000000000080",
      "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
      "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
      "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
      "0000000000000000000000000000000000000000000000000000000000000000",
      "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"
    ];
    var Fp = (0, modular_js_1.Field)(ED25519_P, void 0, true);
    var ed25519Defaults = {
      a: BigInt(-1),
      d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
      Fp,
      n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
      h: BigInt(8),
      Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
      Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
      hash: sha512_1.sha512,
      randomBytes: utils_1.randomBytes,
      adjustScalarBytes,
      uvRatio
    };
    exports.ed25519 = (0, edwards_js_1.twistedEdwards)(ed25519Defaults);
    function ed25519_domain(data, ctx, phflag) {
      if (ctx.length > 255)
        throw new Error("Context is too big");
      return (0, utils_1.concatBytes)((0, utils_1.utf8ToBytes)("SigEd25519 no Ed25519 collisions"), new Uint8Array([phflag ? 1 : 0, ctx.length]), ctx, data);
    }
    exports.ed25519ctx = (0, edwards_js_1.twistedEdwards)(__assign(__assign({}, ed25519Defaults), {
      domain: ed25519_domain
    }));
    exports.ed25519ph = (0, edwards_js_1.twistedEdwards)(__assign(__assign({}, ed25519Defaults), {
      domain: ed25519_domain,
      prehash: sha512_1.sha512
    }));
    exports.x25519 = (() => (0, montgomery_js_1.montgomery)({
      P: ED25519_P,
      a: BigInt(486662),
      montgomeryBits: 255,
      nByteLength: 32,
      Gu: BigInt(9),
      powPminus2: (x) => {
        const P = ED25519_P;
        const {pow_p_5_8, b2} = ed25519_pow_2_252_3(x);
        return (0, modular_js_1.mod)((0, modular_js_1.pow2)(pow_p_5_8, BigInt(3), P) * b2, P);
      },
      adjustScalarBytes,
      randomBytes: utils_1.randomBytes
    }))();
    function edwardsToMontgomeryPub(edwardsPub) {
      const {y} = exports.ed25519.ExtendedPoint.fromHex(edwardsPub);
      const _1n2 = BigInt(1);
      return Fp.toBytes(Fp.create((_1n2 + y) * Fp.inv(_1n2 - y)));
    }
    exports.edwardsToMontgomeryPub = edwardsToMontgomeryPub;
    exports.edwardsToMontgomery = edwardsToMontgomeryPub;
    function edwardsToMontgomeryPriv(edwardsPriv) {
      const hashed = ed25519Defaults.hash(edwardsPriv.subarray(0, 32));
      return ed25519Defaults.adjustScalarBytes(hashed).subarray(0, 32);
    }
    exports.edwardsToMontgomeryPriv = edwardsToMontgomeryPriv;
    var ELL2_C1 = (Fp.ORDER + BigInt(3)) / BigInt(8);
    var ELL2_C2 = Fp.pow(_2n, ELL2_C1);
    var ELL2_C3 = Fp.sqrt(Fp.neg(Fp.ONE));
    var ELL2_C4 = (Fp.ORDER - BigInt(5)) / BigInt(8);
    var ELL2_J = BigInt(486662);
    function map_to_curve_elligator2_curve25519(u) {
      let tv1 = Fp.sqr(u);
      tv1 = Fp.mul(tv1, _2n);
      let xd = Fp.add(tv1, Fp.ONE);
      let x1n = Fp.neg(ELL2_J);
      let tv2 = Fp.sqr(xd);
      let gxd = Fp.mul(tv2, xd);
      let gx1 = Fp.mul(tv1, ELL2_J);
      gx1 = Fp.mul(gx1, x1n);
      gx1 = Fp.add(gx1, tv2);
      gx1 = Fp.mul(gx1, x1n);
      let tv3 = Fp.sqr(gxd);
      tv2 = Fp.sqr(tv3);
      tv3 = Fp.mul(tv3, gxd);
      tv3 = Fp.mul(tv3, gx1);
      tv2 = Fp.mul(tv2, tv3);
      let y11 = Fp.pow(tv2, ELL2_C4);
      y11 = Fp.mul(y11, tv3);
      let y12 = Fp.mul(y11, ELL2_C3);
      tv2 = Fp.sqr(y11);
      tv2 = Fp.mul(tv2, gxd);
      let e1 = Fp.eql(tv2, gx1);
      let y1 = Fp.cmov(y12, y11, e1);
      let x2n = Fp.mul(x1n, tv1);
      let y21 = Fp.mul(y11, u);
      y21 = Fp.mul(y21, ELL2_C2);
      let y22 = Fp.mul(y21, ELL2_C3);
      let gx2 = Fp.mul(gx1, tv1);
      tv2 = Fp.sqr(y21);
      tv2 = Fp.mul(tv2, gxd);
      let e2 = Fp.eql(tv2, gx2);
      let y2 = Fp.cmov(y22, y21, e2);
      tv2 = Fp.sqr(y1);
      tv2 = Fp.mul(tv2, gxd);
      let e3 = Fp.eql(tv2, gx1);
      let xn = Fp.cmov(x2n, x1n, e3);
      let y = Fp.cmov(y2, y1, e3);
      let e4 = Fp.isOdd(y);
      y = Fp.cmov(y, Fp.neg(y), e3 !== e4);
      return {xMn: xn, xMd: xd, yMn: y, yMd: _1n};
    }
    var ELL2_C1_EDWARDS = (0, modular_js_1.FpSqrtEven)(Fp, Fp.neg(BigInt(486664)));
    function map_to_curve_elligator2_edwards25519(u) {
      const {xMn, xMd, yMn, yMd} = map_to_curve_elligator2_curve25519(u);
      let xn = Fp.mul(xMn, yMd);
      xn = Fp.mul(xn, ELL2_C1_EDWARDS);
      let xd = Fp.mul(xMd, yMn);
      let yn = Fp.sub(xMn, xMd);
      let yd = Fp.add(xMn, xMd);
      let tv1 = Fp.mul(xd, yd);
      let e = Fp.eql(tv1, Fp.ZERO);
      xn = Fp.cmov(xn, Fp.ZERO, e);
      xd = Fp.cmov(xd, Fp.ONE, e);
      yn = Fp.cmov(yn, Fp.ONE, e);
      yd = Fp.cmov(yd, Fp.ONE, e);
      const inv = Fp.invertBatch([xd, yd]);
      return {x: Fp.mul(xn, inv[0]), y: Fp.mul(yn, inv[1])};
    }
    var htf = /* @__PURE__ */ (() => (0, hash_to_curve_js_1.createHasher)(exports.ed25519.ExtendedPoint, (scalars) => map_to_curve_elligator2_edwards25519(scalars[0]), {
      DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
      encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
      p: Fp.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: sha512_1.sha512
    }))();
    exports.hashToCurve = (() => htf.hashToCurve)();
    exports.encodeToCurve = (() => htf.encodeToCurve)();
    function assertRstPoint(other) {
      if (!(other instanceof RistPoint))
        throw new Error("RistrettoPoint expected");
    }
    var SQRT_M1 = ED25519_SQRT_M1;
    var SQRT_AD_MINUS_ONE = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
    var INVSQRT_A_MINUS_D = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
    var ONE_MINUS_D_SQ = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
    var D_MINUS_ONE_SQ = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
    var invertSqrt = (number2) => uvRatio(_1n, number2);
    var MAX_255B = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
    var bytes255ToNumberLE = (bytes) => exports.ed25519.CURVE.Fp.create((0, utils_js_1.bytesToNumberLE)(bytes) & MAX_255B);
    function calcElligatorRistrettoMap(r0) {
      const {d} = exports.ed25519.CURVE;
      const P = exports.ed25519.CURVE.Fp.ORDER;
      const mod = exports.ed25519.CURVE.Fp.create;
      const r = mod(SQRT_M1 * r0 * r0);
      const Ns = mod((r + _1n) * ONE_MINUS_D_SQ);
      let c = BigInt(-1);
      const D = mod((c - d * r) * mod(r + d));
      let {isValid: Ns_D_is_sq, value: s} = uvRatio(Ns, D);
      let s_ = mod(s * r0);
      if (!(0, modular_js_1.isNegativeLE)(s_, P))
        s_ = mod(-s_);
      if (!Ns_D_is_sq)
        s = s_;
      if (!Ns_D_is_sq)
        c = r;
      const Nt = mod(c * (r - _1n) * D_MINUS_ONE_SQ - D);
      const s2 = s * s;
      const W0 = mod((s + s) * D);
      const W1 = mod(Nt * SQRT_AD_MINUS_ONE);
      const W2 = mod(_1n - s2);
      const W3 = mod(_1n + s2);
      return new exports.ed25519.ExtendedPoint(mod(W0 * W3), mod(W2 * W1), mod(W1 * W3), mod(W0 * W2));
    }
    var RistPoint = class {
      constructor(ep) {
        this.ep = ep;
      }
      static fromAffine(ap) {
        return new RistPoint(exports.ed25519.ExtendedPoint.fromAffine(ap));
      }
      static hashToCurve(hex) {
        hex = (0, utils_js_1.ensureBytes)("ristrettoHash", hex, 64);
        const r1 = bytes255ToNumberLE(hex.slice(0, 32));
        const R1 = calcElligatorRistrettoMap(r1);
        const r2 = bytes255ToNumberLE(hex.slice(32, 64));
        const R2 = calcElligatorRistrettoMap(r2);
        return new RistPoint(R1.add(R2));
      }
      static fromHex(hex) {
        hex = (0, utils_js_1.ensureBytes)("ristrettoHex", hex, 32);
        const {a, d} = exports.ed25519.CURVE;
        const P = exports.ed25519.CURVE.Fp.ORDER;
        const mod = exports.ed25519.CURVE.Fp.create;
        const emsg = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint";
        const s = bytes255ToNumberLE(hex);
        if (!(0, utils_js_1.equalBytes)((0, utils_js_1.numberToBytesLE)(s, 32), hex) || (0, modular_js_1.isNegativeLE)(s, P))
          throw new Error(emsg);
        const s2 = mod(s * s);
        const u1 = mod(_1n + a * s2);
        const u2 = mod(_1n - a * s2);
        const u1_2 = mod(u1 * u1);
        const u2_2 = mod(u2 * u2);
        const v = mod(a * d * u1_2 - u2_2);
        const {isValid, value: I} = invertSqrt(mod(v * u2_2));
        const Dx = mod(I * u2);
        const Dy = mod(I * Dx * v);
        let x = mod((s + s) * Dx);
        if ((0, modular_js_1.isNegativeLE)(x, P))
          x = mod(-x);
        const y = mod(u1 * Dy);
        const t = mod(x * y);
        if (!isValid || (0, modular_js_1.isNegativeLE)(t, P) || y === _0n)
          throw new Error(emsg);
        return new RistPoint(new exports.ed25519.ExtendedPoint(x, y, _1n, t));
      }
      toRawBytes() {
        let {ex: x, ey: y, ez: z, et: t} = this.ep;
        const P = exports.ed25519.CURVE.Fp.ORDER;
        const mod = exports.ed25519.CURVE.Fp.create;
        const u1 = mod(mod(z + y) * mod(z - y));
        const u2 = mod(x * y);
        const u2sq = mod(u2 * u2);
        const {value: invsqrt} = invertSqrt(mod(u1 * u2sq));
        const D1 = mod(invsqrt * u1);
        const D2 = mod(invsqrt * u2);
        const zInv = mod(D1 * D2 * t);
        let D;
        if ((0, modular_js_1.isNegativeLE)(t * zInv, P)) {
          let _x = mod(y * SQRT_M1);
          let _y = mod(x * SQRT_M1);
          x = _x;
          y = _y;
          D = mod(D1 * INVSQRT_A_MINUS_D);
        } else {
          D = D2;
        }
        if ((0, modular_js_1.isNegativeLE)(x * zInv, P))
          y = mod(-y);
        let s = mod((z - y) * D);
        if ((0, modular_js_1.isNegativeLE)(s, P))
          s = mod(-s);
        return (0, utils_js_1.numberToBytesLE)(s, 32);
      }
      toHex() {
        return (0, utils_js_1.bytesToHex)(this.toRawBytes());
      }
      toString() {
        return this.toHex();
      }
      equals(other) {
        assertRstPoint(other);
        const {ex: X1, ey: Y1} = this.ep;
        const {ex: X2, ey: Y2} = other.ep;
        const mod = exports.ed25519.CURVE.Fp.create;
        const one = mod(X1 * Y2) === mod(Y1 * X2);
        const two = mod(Y1 * Y2) === mod(X1 * X2);
        return one || two;
      }
      add(other) {
        assertRstPoint(other);
        return new RistPoint(this.ep.add(other.ep));
      }
      subtract(other) {
        assertRstPoint(other);
        return new RistPoint(this.ep.subtract(other.ep));
      }
      multiply(scalar) {
        return new RistPoint(this.ep.multiply(scalar));
      }
      multiplyUnsafe(scalar) {
        return new RistPoint(this.ep.multiplyUnsafe(scalar));
      }
      double() {
        return new RistPoint(this.ep.double());
      }
      negate() {
        return new RistPoint(this.ep.negate());
      }
    };
    exports.RistrettoPoint = (() => {
      if (!RistPoint.BASE)
        RistPoint.BASE = new RistPoint(exports.ed25519.ExtendedPoint.BASE);
      if (!RistPoint.ZERO)
        RistPoint.ZERO = new RistPoint(exports.ed25519.ExtendedPoint.ZERO);
      return RistPoint;
    })();
    var hashToRistretto255 = (msg, options) => {
      const d = options.DST;
      const DST = typeof d === "string" ? (0, utils_1.utf8ToBytes)(d) : d;
      const uniform_bytes = (0, hash_to_curve_js_1.expand_message_xmd)(msg, DST, 64, sha512_1.sha512);
      const P = RistPoint.hashToCurve(uniform_bytes);
      return P;
    };
    exports.hashToRistretto255 = hashToRistretto255;
    exports.hash_to_ristretto255 = exports.hashToRistretto255;
  });

  // (disabled):node_modules/buffer/index.js
  var require_buffer2 = __commonJS(() => {
  });

  // node_modules/bn.js/lib/bn.js
  var require_bn = __commonJS((exports, module) => {
    (function(module2, exports2) {
      "use strict";
      function assert3(val, msg) {
        if (!val)
          throw new Error(msg || "Assertion failed");
      }
      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
      function BN2(number2, base, endian) {
        if (BN2.isBN(number2)) {
          return number2;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (number2 !== null) {
          if (base === "le" || base === "be") {
            endian = base;
            base = 10;
          }
          this._init(number2 || 0, base || 10, endian || "be");
        }
      }
      if (typeof module2 === "object") {
        module2.exports = BN2;
      } else {
        exports2.BN = BN2;
      }
      BN2.BN = BN2;
      BN2.wordSize = 26;
      var Buffer3;
      try {
        if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
          Buffer3 = window.Buffer;
        } else {
          Buffer3 = require_buffer2().Buffer;
        }
      } catch (e) {
      }
      BN2.isBN = function isBN(num) {
        if (num instanceof BN2) {
          return true;
        }
        return num !== null && typeof num === "object" && num.constructor.wordSize === BN2.wordSize && Array.isArray(num.words);
      };
      BN2.max = function max(left, right) {
        if (left.cmp(right) > 0)
          return left;
        return right;
      };
      BN2.min = function min(left, right) {
        if (left.cmp(right) < 0)
          return left;
        return right;
      };
      BN2.prototype._init = function init(number2, base, endian) {
        if (typeof number2 === "number") {
          return this._initNumber(number2, base, endian);
        }
        if (typeof number2 === "object") {
          return this._initArray(number2, base, endian);
        }
        if (base === "hex") {
          base = 16;
        }
        assert3(base === (base | 0) && base >= 2 && base <= 36);
        number2 = number2.toString().replace(/\s+/g, "");
        var start = 0;
        if (number2[0] === "-") {
          start++;
          this.negative = 1;
        }
        if (start < number2.length) {
          if (base === 16) {
            this._parseHex(number2, start, endian);
          } else {
            this._parseBase(number2, base, start);
            if (endian === "le") {
              this._initArray(this.toArray(), base, endian);
            }
          }
        }
      };
      BN2.prototype._initNumber = function _initNumber(number2, base, endian) {
        if (number2 < 0) {
          this.negative = 1;
          number2 = -number2;
        }
        if (number2 < 67108864) {
          this.words = [number2 & 67108863];
          this.length = 1;
        } else if (number2 < 4503599627370496) {
          this.words = [
            number2 & 67108863,
            number2 / 67108864 & 67108863
          ];
          this.length = 2;
        } else {
          assert3(number2 < 9007199254740992);
          this.words = [
            number2 & 67108863,
            number2 / 67108864 & 67108863,
            1
          ];
          this.length = 3;
        }
        if (endian !== "le")
          return;
        this._initArray(this.toArray(), base, endian);
      };
      BN2.prototype._initArray = function _initArray(number2, base, endian) {
        assert3(typeof number2.length === "number");
        if (number2.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(number2.length / 3);
        this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }
        var j, w;
        var off = 0;
        if (endian === "be") {
          for (i = number2.length - 1, j = 0; i >= 0; i -= 3) {
            w = number2[i] | number2[i - 1] << 8 | number2[i - 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        } else if (endian === "le") {
          for (i = 0, j = 0; i < number2.length; i += 3) {
            w = number2[i] | number2[i + 1] << 8 | number2[i + 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        }
        return this._strip();
      };
      function parseHex4Bits(string2, index) {
        var c = string2.charCodeAt(index);
        if (c >= 48 && c <= 57) {
          return c - 48;
        } else if (c >= 65 && c <= 70) {
          return c - 55;
        } else if (c >= 97 && c <= 102) {
          return c - 87;
        } else {
          assert3(false, "Invalid character in " + string2);
        }
      }
      function parseHexByte(string2, lowerBound, index) {
        var r = parseHex4Bits(string2, index);
        if (index - 1 >= lowerBound) {
          r |= parseHex4Bits(string2, index - 1) << 4;
        }
        return r;
      }
      BN2.prototype._parseHex = function _parseHex(number2, start, endian) {
        this.length = Math.ceil((number2.length - start) / 6);
        this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }
        var off = 0;
        var j = 0;
        var w;
        if (endian === "be") {
          for (i = number2.length - 1; i >= start; i -= 2) {
            w = parseHexByte(number2, start, i) << off;
            this.words[j] |= w & 67108863;
            if (off >= 18) {
              off -= 18;
              j += 1;
              this.words[j] |= w >>> 26;
            } else {
              off += 8;
            }
          }
        } else {
          var parseLength = number2.length - start;
          for (i = parseLength % 2 === 0 ? start + 1 : start; i < number2.length; i += 2) {
            w = parseHexByte(number2, start, i) << off;
            this.words[j] |= w & 67108863;
            if (off >= 18) {
              off -= 18;
              j += 1;
              this.words[j] |= w >>> 26;
            } else {
              off += 8;
            }
          }
        }
        this._strip();
      };
      function parseBase(str, start, end, mul) {
        var r = 0;
        var b = 0;
        var len = Math.min(str.length, end);
        for (var i = start; i < len; i++) {
          var c = str.charCodeAt(i) - 48;
          r *= mul;
          if (c >= 49) {
            b = c - 49 + 10;
          } else if (c >= 17) {
            b = c - 17 + 10;
          } else {
            b = c;
          }
          assert3(c >= 0 && b < mul, "Invalid character");
          r += b;
        }
        return r;
      }
      BN2.prototype._parseBase = function _parseBase(number2, base, start) {
        this.words = [0];
        this.length = 1;
        for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
          limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number2.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for (var i = start; i < end; i += limbLen) {
          word = parseBase(number2, i, i + limbLen, base);
          this.imuln(limbPow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        if (mod !== 0) {
          var pow = 1;
          word = parseBase(number2, i, number2.length, base);
          for (i = 0; i < mod; i++) {
            pow *= base;
          }
          this.imuln(pow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        this._strip();
      };
      BN2.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          dest.words[i] = this.words[i];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };
      function move(dest, src) {
        dest.words = src.words;
        dest.length = src.length;
        dest.negative = src.negative;
        dest.red = src.red;
      }
      BN2.prototype._move = function _move(dest) {
        move(dest, this);
      };
      BN2.prototype.clone = function clone() {
        var r = new BN2(null);
        this.copy(r);
        return r;
      };
      BN2.prototype._expand = function _expand(size) {
        while (this.length < size) {
          this.words[this.length++] = 0;
        }
        return this;
      };
      BN2.prototype._strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      };
      BN2.prototype._normSign = function _normSign() {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      };
      if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
        try {
          BN2.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect;
        } catch (e) {
          BN2.prototype.inspect = inspect;
        }
      } else {
        BN2.prototype.inspect = inspect;
      }
      function inspect() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      var zeros = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ];
      var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ];
      var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      BN2.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === "hex") {
          out = "";
          var off = 0;
          var carry = 0;
          for (var i = 0; i < this.length; i++) {
            var w = this.words[i];
            var word = ((w << off | carry) & 16777215).toString(16);
            carry = w >>> 24 - off & 16777215;
            off += 2;
            if (off >= 26) {
              off -= 26;
              i--;
            }
            if (carry !== 0 || i !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }
          }
          if (carry !== 0) {
            out = carry.toString(16) + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
          var groupSize = groupSizes[base];
          var groupBase = groupBases[base];
          out = "";
          var c = this.clone();
          c.negative = 0;
          while (!c.isZero()) {
            var r = c.modrn(groupBase).toString(base);
            c = c.idivn(groupBase);
            if (!c.isZero()) {
              out = zeros[groupSize - r.length] + r + out;
            } else {
              out = r + out;
            }
          }
          if (this.isZero()) {
            out = "0" + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        assert3(false, "Base should be between 2 and 36");
      };
      BN2.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
          ret += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          ret += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          assert3(false, "Number can only safely store up to 53 bits");
        }
        return this.negative !== 0 ? -ret : ret;
      };
      BN2.prototype.toJSON = function toJSON() {
        return this.toString(16, 2);
      };
      if (Buffer3) {
        BN2.prototype.toBuffer = function toBuffer2(endian, length) {
          return this.toArrayLike(Buffer3, endian, length);
        };
      }
      BN2.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };
      var allocate = function allocate2(ArrayType, size) {
        if (ArrayType.allocUnsafe) {
          return ArrayType.allocUnsafe(size);
        }
        return new ArrayType(size);
      };
      BN2.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        this._strip();
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert3(byteLength <= reqLength, "byte array longer than desired length");
        assert3(reqLength > 0, "Requested array length <= 0");
        var res = allocate(ArrayType, reqLength);
        var postfix = endian === "le" ? "LE" : "BE";
        this["_toArrayLike" + postfix](res, byteLength);
        return res;
      };
      BN2.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
        var position = 0;
        var carry = 0;
        for (var i = 0, shift = 0; i < this.length; i++) {
          var word = this.words[i] << shift | carry;
          res[position++] = word & 255;
          if (position < res.length) {
            res[position++] = word >> 8 & 255;
          }
          if (position < res.length) {
            res[position++] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position < res.length) {
              res[position++] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position < res.length) {
          res[position++] = carry;
          while (position < res.length) {
            res[position++] = 0;
          }
        }
      };
      BN2.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
        var position = res.length - 1;
        var carry = 0;
        for (var i = 0, shift = 0; i < this.length; i++) {
          var word = this.words[i] << shift | carry;
          res[position--] = word & 255;
          if (position >= 0) {
            res[position--] = word >> 8 & 255;
          }
          if (position >= 0) {
            res[position--] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position >= 0) {
              res[position--] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position >= 0) {
          res[position--] = carry;
          while (position >= 0) {
            res[position--] = 0;
          }
        }
      };
      if (Math.clz32) {
        BN2.prototype._countBits = function _countBits(w) {
          return 32 - Math.clz32(w);
        };
      } else {
        BN2.prototype._countBits = function _countBits(w) {
          var t = w;
          var r = 0;
          if (t >= 4096) {
            r += 13;
            t >>>= 13;
          }
          if (t >= 64) {
            r += 7;
            t >>>= 7;
          }
          if (t >= 8) {
            r += 4;
            t >>>= 4;
          }
          if (t >= 2) {
            r += 2;
            t >>>= 2;
          }
          return r + t;
        };
      }
      BN2.prototype._zeroBits = function _zeroBits(w) {
        if (w === 0)
          return 26;
        var t = w;
        var r = 0;
        if ((t & 8191) === 0) {
          r += 13;
          t >>>= 13;
        }
        if ((t & 127) === 0) {
          r += 7;
          t >>>= 7;
        }
        if ((t & 15) === 0) {
          r += 4;
          t >>>= 4;
        }
        if ((t & 3) === 0) {
          r += 2;
          t >>>= 2;
        }
        if ((t & 1) === 0) {
          r++;
        }
        return r;
      };
      BN2.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];
        var hi = this._countBits(w);
        return (this.length - 1) * 26 + hi;
      };
      function toBitArray(num) {
        var w = new Array(num.bitLength());
        for (var bit = 0; bit < w.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w[bit] = num.words[off] >>> wbit & 1;
        }
        return w;
      }
      BN2.prototype.zeroBits = function zeroBits() {
        if (this.isZero())
          return 0;
        var r = 0;
        for (var i = 0; i < this.length; i++) {
          var b = this._zeroBits(this.words[i]);
          r += b;
          if (b !== 26)
            break;
        }
        return r;
      };
      BN2.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      };
      BN2.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
      };
      BN2.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
      };
      BN2.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      };
      BN2.prototype.neg = function neg() {
        return this.clone().ineg();
      };
      BN2.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      };
      BN2.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }
        for (var i = 0; i < num.length; i++) {
          this.words[i] = this.words[i] | num.words[i];
        }
        return this._strip();
      };
      BN2.prototype.ior = function ior(num) {
        assert3((this.negative | num.negative) === 0);
        return this.iuor(num);
      };
      BN2.prototype.or = function or(num) {
        if (this.length > num.length)
          return this.clone().ior(num);
        return num.clone().ior(this);
      };
      BN2.prototype.uor = function uor(num) {
        if (this.length > num.length)
          return this.clone().iuor(num);
        return num.clone().iuor(this);
      };
      BN2.prototype.iuand = function iuand(num) {
        var b;
        if (this.length > num.length) {
          b = num;
        } else {
          b = this;
        }
        for (var i = 0; i < b.length; i++) {
          this.words[i] = this.words[i] & num.words[i];
        }
        this.length = b.length;
        return this._strip();
      };
      BN2.prototype.iand = function iand(num) {
        assert3((this.negative | num.negative) === 0);
        return this.iuand(num);
      };
      BN2.prototype.and = function and(num) {
        if (this.length > num.length)
          return this.clone().iand(num);
        return num.clone().iand(this);
      };
      BN2.prototype.uand = function uand(num) {
        if (this.length > num.length)
          return this.clone().iuand(num);
        return num.clone().iuand(this);
      };
      BN2.prototype.iuxor = function iuxor(num) {
        var a;
        var b;
        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }
        for (var i = 0; i < b.length; i++) {
          this.words[i] = a.words[i] ^ b.words[i];
        }
        if (this !== a) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        this.length = a.length;
        return this._strip();
      };
      BN2.prototype.ixor = function ixor(num) {
        assert3((this.negative | num.negative) === 0);
        return this.iuxor(num);
      };
      BN2.prototype.xor = function xor(num) {
        if (this.length > num.length)
          return this.clone().ixor(num);
        return num.clone().ixor(this);
      };
      BN2.prototype.uxor = function uxor(num) {
        if (this.length > num.length)
          return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      };
      BN2.prototype.inotn = function inotn(width) {
        assert3(typeof width === "number" && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
          bytesNeeded--;
        }
        for (var i = 0; i < bytesNeeded; i++) {
          this.words[i] = ~this.words[i] & 67108863;
        }
        if (bitsLeft > 0) {
          this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
        }
        return this._strip();
      };
      BN2.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      };
      BN2.prototype.setn = function setn(bit, val) {
        assert3(typeof bit === "number" && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this._strip();
      };
      BN2.prototype.iadd = function iadd(num) {
        var r;
        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r = this.isub(num);
          this.negative ^= 1;
          return this._normSign();
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r = this.isub(num);
          num.negative = 1;
          return r._normSign();
        }
        var a, b;
        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }
        var carry = 0;
        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
          this.words[i] = r & 67108863;
          carry = r >>> 26;
        }
        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          this.words[i] = r & 67108863;
          carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++;
        } else if (a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        return this;
      };
      BN2.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }
        if (this.length > num.length)
          return this.clone().iadd(num);
        return num.clone().iadd(this);
      };
      BN2.prototype.isub = function isub(num) {
        if (num.negative !== 0) {
          num.negative = 0;
          var r = this.iadd(num);
          num.negative = 1;
          return r._normSign();
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        }
        var cmp = this.cmp(num);
        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        var a, b;
        if (cmp > 0) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }
        var carry = 0;
        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 67108863;
        }
        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 67108863;
        }
        if (carry === 0 && i < a.length && a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        this.length = Math.max(this.length, i);
        if (a !== this) {
          this.negative = 1;
        }
        return this._strip();
      };
      BN2.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };
      function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 67108863;
        var carry = r / 67108864 | 0;
        out.words[0] = lo;
        for (var k = 1; k < len; k++) {
          var ncarry = carry >>> 26;
          var rword = carry & 67108863;
          var maxJ = Math.min(k, num.length - 1);
          for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
            var i = k - j | 0;
            a = self.words[i] | 0;
            b = num.words[j] | 0;
            r = a * b + rword;
            ncarry += r / 67108864 | 0;
            rword = r & 67108863;
          }
          out.words[k] = rword | 0;
          carry = ncarry | 0;
        }
        if (carry !== 0) {
          out.words[k] = carry | 0;
        } else {
          out.length--;
        }
        return out._strip();
      }
      var comb10MulTo = function comb10MulTo2(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 8191;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 8191;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 8191;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
          o[19] = c;
          out.length++;
        }
        return out;
      };
      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }
      function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for (var k = 0; k < out.length - 1; k++) {
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 67108863;
          var maxJ = Math.min(k, num.length - 1);
          for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
            var i = k - j;
            var a = self.words[i] | 0;
            var b = num.words[j] | 0;
            var r = a * b;
            var lo = r & 67108863;
            ncarry = ncarry + (r / 67108864 | 0) | 0;
            lo = lo + rword | 0;
            rword = lo & 67108863;
            ncarry = ncarry + (lo >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 67108863;
          }
          out.words[k] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }
        if (carry !== 0) {
          out.words[k] = carry;
        } else {
          out.length--;
        }
        return out._strip();
      }
      function jumboMulTo(self, num, out) {
        return bigMulTo(self, num, out);
      }
      BN2.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }
        return res;
      };
      function FFTM(x, y) {
        this.x = x;
        this.y = y;
      }
      FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN2.prototype._countBits(N) - 1;
        for (var i = 0; i < N; i++) {
          t[i] = this.revBin(i, l, N);
        }
        return t;
      };
      FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1)
          return x;
        var rb = 0;
        for (var i = 0; i < l; i++) {
          rb |= (x & 1) << l - i - 1;
          x >>= 1;
        }
        return rb;
      };
      FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for (var i = 0; i < N; i++) {
          rtws[i] = rws[rbt[i]];
          itws[i] = iws[rbt[i]];
        }
      };
      FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);
        for (var s = 1; s < N; s <<= 1) {
          var l = s << 1;
          var rtwdf = Math.cos(2 * Math.PI / l);
          var itwdf = Math.sin(2 * Math.PI / l);
          for (var p = 0; p < N; p += l) {
            var rtwdf_ = rtwdf;
            var itwdf_ = itwdf;
            for (var j = 0; j < s; j++) {
              var re = rtws[p + j];
              var ie = itws[p + j];
              var ro = rtws[p + j + s];
              var io = itws[p + j + s];
              var rx = rtwdf_ * ro - itwdf_ * io;
              io = rtwdf_ * io + itwdf_ * ro;
              ro = rx;
              rtws[p + j] = re + ro;
              itws[p + j] = ie + io;
              rtws[p + j + s] = re - ro;
              itws[p + j + s] = ie - io;
              if (j !== l) {
                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                rtwdf_ = rx;
              }
            }
          }
        }
      };
      FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;
        for (N = N / 2 | 0; N; N = N >>> 1) {
          i++;
        }
        return 1 << i + 1 + odd;
      };
      FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1)
          return;
        for (var i = 0; i < N / 2; i++) {
          var t = rws[i];
          rws[i] = rws[N - i - 1];
          rws[N - i - 1] = t;
          t = iws[i];
          iws[i] = -iws[N - i - 1];
          iws[N - i - 1] = -t;
        }
      };
      FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;
        for (var i = 0; i < N / 2; i++) {
          var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
          ws[i] = w & 67108863;
          if (w < 67108864) {
            carry = 0;
          } else {
            carry = w / 67108864 | 0;
          }
        }
        return ws;
      };
      FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;
        for (var i = 0; i < len; i++) {
          carry = carry + (ws[i] | 0);
          rws[2 * i] = carry & 8191;
          carry = carry >>> 13;
          rws[2 * i + 1] = carry & 8191;
          carry = carry >>> 13;
        }
        for (i = 2 * len; i < N; ++i) {
          rws[i] = 0;
        }
        assert3(carry === 0);
        assert3((carry & ~8191) === 0);
      };
      FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);
        for (var i = 0; i < N; i++) {
          ph[i] = 0;
        }
        return ph;
      };
      FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);
        var _ = this.stub(N);
        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);
        for (var i = 0; i < N; i++) {
          var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
          iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
          rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out._strip();
      };
      BN2.prototype.mul = function mul(num) {
        var out = new BN2(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      };
      BN2.prototype.mulf = function mulf(num) {
        var out = new BN2(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      };
      BN2.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };
      BN2.prototype.imuln = function imuln(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert3(typeof num === "number");
        assert3(num < 67108864);
        var carry = 0;
        for (var i = 0; i < this.length; i++) {
          var w = (this.words[i] | 0) * num;
          var lo = (w & 67108863) + (carry & 67108863);
          carry >>= 26;
          carry += w / 67108864 | 0;
          carry += lo >>> 26;
          this.words[i] = lo & 67108863;
        }
        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }
        return isNegNum ? this.ineg() : this;
      };
      BN2.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      };
      BN2.prototype.sqr = function sqr() {
        return this.mul(this);
      };
      BN2.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      };
      BN2.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0)
          return new BN2(1);
        var res = this;
        for (var i = 0; i < w.length; i++, res = res.sqr()) {
          if (w[i] !== 0)
            break;
        }
        if (++i < w.length) {
          for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
            if (w[i] === 0)
              continue;
            res = res.mul(q);
          }
        }
        return res;
      };
      BN2.prototype.iushln = function iushln(bits) {
        assert3(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 67108863 >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
          var carry = 0;
          for (i = 0; i < this.length; i++) {
            var newCarry = this.words[i] & carryMask;
            var c = (this.words[i] | 0) - newCarry << r;
            this.words[i] = c | carry;
            carry = newCarry >>> 26 - r;
          }
          if (carry) {
            this.words[i] = carry;
            this.length++;
          }
        }
        if (s !== 0) {
          for (i = this.length - 1; i >= 0; i--) {
            this.words[i + s] = this.words[i];
          }
          for (i = 0; i < s; i++) {
            this.words[i] = 0;
          }
          this.length += s;
        }
        return this._strip();
      };
      BN2.prototype.ishln = function ishln(bits) {
        assert3(this.negative === 0);
        return this.iushln(bits);
      };
      BN2.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert3(typeof bits === "number" && bits >= 0);
        var h;
        if (hint) {
          h = (hint - hint % 26) / 26;
        } else {
          h = 0;
        }
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask2 = 67108863 ^ 67108863 >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h);
        if (maskedWords) {
          for (var i = 0; i < s; i++) {
            maskedWords.words[i] = this.words[i];
          }
          maskedWords.length = s;
        }
        if (s === 0) {
        } else if (this.length > s) {
          this.length -= s;
          for (i = 0; i < this.length; i++) {
            this.words[i] = this.words[i + s];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var carry = 0;
        for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
          var word = this.words[i] | 0;
          this.words[i] = carry << 26 - r | word >>> r;
          carry = word & mask2;
        }
        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this._strip();
      };
      BN2.prototype.ishrn = function ishrn(bits, hint, extended) {
        assert3(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      };
      BN2.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };
      BN2.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      };
      BN2.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };
      BN2.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      };
      BN2.prototype.testn = function testn(bit) {
        assert3(typeof bit === "number" && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        if (this.length <= s)
          return false;
        var w = this.words[s];
        return !!(w & q);
      };
      BN2.prototype.imaskn = function imaskn(bits) {
        assert3(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert3(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= s) {
          return this;
        }
        if (r !== 0) {
          s++;
        }
        this.length = Math.min(s, this.length);
        if (r !== 0) {
          var mask2 = 67108863 ^ 67108863 >>> r << r;
          this.words[this.length - 1] &= mask2;
        }
        return this._strip();
      };
      BN2.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      };
      BN2.prototype.iaddn = function iaddn(num) {
        assert3(typeof num === "number");
        assert3(num < 67108864);
        if (num < 0)
          return this.isubn(-num);
        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) <= num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }
          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        }
        return this._iaddn(num);
      };
      BN2.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
          this.words[i] -= 67108864;
          if (i === this.length - 1) {
            this.words[i + 1] = 1;
          } else {
            this.words[i + 1]++;
          }
        }
        this.length = Math.max(this.length, i + 1);
        return this;
      };
      BN2.prototype.isubn = function isubn(num) {
        assert3(typeof num === "number");
        assert3(num < 67108864);
        if (num < 0)
          return this.iaddn(-num);
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var i = 0; i < this.length && this.words[i] < 0; i++) {
            this.words[i] += 67108864;
            this.words[i + 1] -= 1;
          }
        }
        return this._strip();
      };
      BN2.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };
      BN2.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };
      BN2.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };
      BN2.prototype.abs = function abs() {
        return this.clone().iabs();
      };
      BN2.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w;
        var carry = 0;
        for (i = 0; i < num.length; i++) {
          w = (this.words[i + shift] | 0) + carry;
          var right = (num.words[i] | 0) * mul;
          w -= right & 67108863;
          carry = (w >> 26) - (right / 67108864 | 0);
          this.words[i + shift] = w & 67108863;
        }
        for (; i < this.length - shift; i++) {
          w = (this.words[i + shift] | 0) + carry;
          carry = w >> 26;
          this.words[i + shift] = w & 67108863;
        }
        if (carry === 0)
          return this._strip();
        assert3(carry === -1);
        carry = 0;
        for (i = 0; i < this.length; i++) {
          w = -(this.words[i] | 0) + carry;
          carry = w >> 26;
          this.words[i] = w & 67108863;
        }
        this.negative = 1;
        return this._strip();
      };
      BN2.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num;
        var bhi = b.words[b.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
          b = b.ushln(shift);
          a.iushln(shift);
          bhi = b.words[b.length - 1] | 0;
        }
        var m = a.length - b.length;
        var q;
        if (mode !== "mod") {
          q = new BN2(null);
          q.length = m + 1;
          q.words = new Array(q.length);
          for (var i = 0; i < q.length; i++) {
            q.words[i] = 0;
          }
        }
        var diff = a.clone()._ishlnsubmul(b, 1, m);
        if (diff.negative === 0) {
          a = diff;
          if (q) {
            q.words[m] = 1;
          }
        }
        for (var j = m - 1; j >= 0; j--) {
          var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
          qj = Math.min(qj / bhi | 0, 67108863);
          a._ishlnsubmul(b, qj, j);
          while (a.negative !== 0) {
            qj--;
            a.negative = 0;
            a._ishlnsubmul(b, 1, j);
            if (!a.isZero()) {
              a.negative ^= 1;
            }
          }
          if (q) {
            q.words[j] = qj;
          }
        }
        if (q) {
          q._strip();
        }
        a._strip();
        if (mode !== "div" && shift !== 0) {
          a.iushrn(shift);
        }
        return {
          div: q || null,
          mod: a
        };
      };
      BN2.prototype.divmod = function divmod(num, mode, positive) {
        assert3(!num.isZero());
        if (this.isZero()) {
          return {
            div: new BN2(0),
            mod: new BN2(0)
          };
        }
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.iadd(num);
            }
          }
          return {
            div,
            mod
          };
        }
        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          return {
            div,
            mod: res.mod
          };
        }
        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.isub(num);
            }
          }
          return {
            div: res.div,
            mod
          };
        }
        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN2(0),
            mod: this
          };
        }
        if (num.length === 1) {
          if (mode === "div") {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }
          if (mode === "mod") {
            return {
              div: null,
              mod: new BN2(this.modrn(num.words[0]))
            };
          }
          return {
            div: this.divn(num.words[0]),
            mod: new BN2(this.modrn(num.words[0]))
          };
        }
        return this._wordDiv(num, mode);
      };
      BN2.prototype.div = function div(num) {
        return this.divmod(num, "div", false).div;
      };
      BN2.prototype.mod = function mod(num) {
        return this.divmod(num, "mod", false).mod;
      };
      BN2.prototype.umod = function umod(num) {
        return this.divmod(num, "mod", true).mod;
      };
      BN2.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        if (dm.mod.isZero())
          return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        if (cmp < 0 || r2 === 1 && cmp === 0)
          return dm.div;
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };
      BN2.prototype.modrn = function modrn(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert3(num <= 67108863);
        var p = (1 << 26) % num;
        var acc = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          acc = (p * acc + (this.words[i] | 0)) % num;
        }
        return isNegNum ? -acc : acc;
      };
      BN2.prototype.modn = function modn(num) {
        return this.modrn(num);
      };
      BN2.prototype.idivn = function idivn(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert3(num <= 67108863);
        var carry = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          var w = (this.words[i] | 0) + carry * 67108864;
          this.words[i] = w / num | 0;
          carry = w % num;
        }
        this._strip();
        return isNegNum ? this.ineg() : this;
      };
      BN2.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };
      BN2.prototype.egcd = function egcd(p) {
        assert3(p.negative === 0);
        assert3(!p.isZero());
        var x = this;
        var y = p.clone();
        if (x.negative !== 0) {
          x = x.umod(p);
        } else {
          x = x.clone();
        }
        var A = new BN2(1);
        var B = new BN2(0);
        var C = new BN2(0);
        var D = new BN2(1);
        var g = 0;
        while (x.isEven() && y.isEven()) {
          x.iushrn(1);
          y.iushrn(1);
          ++g;
        }
        var yp = y.clone();
        var xp = x.clone();
        while (!x.isZero()) {
          for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
            ;
          if (i > 0) {
            x.iushrn(i);
            while (i-- > 0) {
              if (A.isOdd() || B.isOdd()) {
                A.iadd(yp);
                B.isub(xp);
              }
              A.iushrn(1);
              B.iushrn(1);
            }
          }
          for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
            ;
          if (j > 0) {
            y.iushrn(j);
            while (j-- > 0) {
              if (C.isOdd() || D.isOdd()) {
                C.iadd(yp);
                D.isub(xp);
              }
              C.iushrn(1);
              D.iushrn(1);
            }
          }
          if (x.cmp(y) >= 0) {
            x.isub(y);
            A.isub(C);
            B.isub(D);
          } else {
            y.isub(x);
            C.isub(A);
            D.isub(B);
          }
        }
        return {
          a: C,
          b: D,
          gcd: y.iushln(g)
        };
      };
      BN2.prototype._invmp = function _invmp(p) {
        assert3(p.negative === 0);
        assert3(!p.isZero());
        var a = this;
        var b = p.clone();
        if (a.negative !== 0) {
          a = a.umod(p);
        } else {
          a = a.clone();
        }
        var x1 = new BN2(1);
        var x2 = new BN2(0);
        var delta = b.clone();
        while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
          for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
            ;
          if (i > 0) {
            a.iushrn(i);
            while (i-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }
              x1.iushrn(1);
            }
          }
          for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
            ;
          if (j > 0) {
            b.iushrn(j);
            while (j-- > 0) {
              if (x2.isOdd()) {
                x2.iadd(delta);
              }
              x2.iushrn(1);
            }
          }
          if (a.cmp(b) >= 0) {
            a.isub(b);
            x1.isub(x2);
          } else {
            b.isub(a);
            x2.isub(x1);
          }
        }
        var res;
        if (a.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x2;
        }
        if (res.cmpn(0) < 0) {
          res.iadd(p);
        }
        return res;
      };
      BN2.prototype.gcd = function gcd(num) {
        if (this.isZero())
          return num.abs();
        if (num.isZero())
          return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0;
        for (var shift = 0; a.isEven() && b.isEven(); shift++) {
          a.iushrn(1);
          b.iushrn(1);
        }
        do {
          while (a.isEven()) {
            a.iushrn(1);
          }
          while (b.isEven()) {
            b.iushrn(1);
          }
          var r = a.cmp(b);
          if (r < 0) {
            var t = a;
            a = b;
            b = t;
          } else if (r === 0 || b.cmpn(1) === 0) {
            break;
          }
          a.isub(b);
        } while (true);
        return b.iushln(shift);
      };
      BN2.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };
      BN2.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };
      BN2.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      };
      BN2.prototype.andln = function andln(num) {
        return this.words[0] & num;
      };
      BN2.prototype.bincn = function bincn(bit) {
        assert3(typeof bit === "number");
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        if (this.length <= s) {
          this._expand(s + 1);
          this.words[s] |= q;
          return this;
        }
        var carry = q;
        for (var i = s; carry !== 0 && i < this.length; i++) {
          var w = this.words[i] | 0;
          w += carry;
          carry = w >>> 26;
          w &= 67108863;
          this.words[i] = w;
        }
        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }
        return this;
      };
      BN2.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };
      BN2.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative)
          return -1;
        if (this.negative === 0 && negative)
          return 1;
        this._strip();
        var res;
        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }
          assert3(num <= 67108863, "Number is too big");
          var w = this.words[0] | 0;
          res = w === num ? 0 : w < num ? -1 : 1;
        }
        if (this.negative !== 0)
          return -res | 0;
        return res;
      };
      BN2.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0)
          return -1;
        if (this.negative === 0 && num.negative !== 0)
          return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0)
          return -res | 0;
        return res;
      };
      BN2.prototype.ucmp = function ucmp(num) {
        if (this.length > num.length)
          return 1;
        if (this.length < num.length)
          return -1;
        var res = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          var a = this.words[i] | 0;
          var b = num.words[i] | 0;
          if (a === b)
            continue;
          if (a < b) {
            res = -1;
          } else if (a > b) {
            res = 1;
          }
          break;
        }
        return res;
      };
      BN2.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };
      BN2.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
      };
      BN2.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };
      BN2.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };
      BN2.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };
      BN2.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
      };
      BN2.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };
      BN2.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };
      BN2.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };
      BN2.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      };
      BN2.red = function red(num) {
        return new Red(num);
      };
      BN2.prototype.toRed = function toRed(ctx) {
        assert3(!this.red, "Already a number in reduction context");
        assert3(this.negative === 0, "red works only with positives");
        return ctx.convertTo(this)._forceRed(ctx);
      };
      BN2.prototype.fromRed = function fromRed() {
        assert3(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      };
      BN2.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };
      BN2.prototype.forceRed = function forceRed(ctx) {
        assert3(!this.red, "Already a number in reduction context");
        return this._forceRed(ctx);
      };
      BN2.prototype.redAdd = function redAdd(num) {
        assert3(this.red, "redAdd works only with red numbers");
        return this.red.add(this, num);
      };
      BN2.prototype.redIAdd = function redIAdd(num) {
        assert3(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, num);
      };
      BN2.prototype.redSub = function redSub(num) {
        assert3(this.red, "redSub works only with red numbers");
        return this.red.sub(this, num);
      };
      BN2.prototype.redISub = function redISub(num) {
        assert3(this.red, "redISub works only with red numbers");
        return this.red.isub(this, num);
      };
      BN2.prototype.redShl = function redShl(num) {
        assert3(this.red, "redShl works only with red numbers");
        return this.red.shl(this, num);
      };
      BN2.prototype.redMul = function redMul(num) {
        assert3(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.mul(this, num);
      };
      BN2.prototype.redIMul = function redIMul(num) {
        assert3(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.imul(this, num);
      };
      BN2.prototype.redSqr = function redSqr() {
        assert3(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      };
      BN2.prototype.redISqr = function redISqr() {
        assert3(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      };
      BN2.prototype.redSqrt = function redSqrt() {
        assert3(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      };
      BN2.prototype.redInvm = function redInvm() {
        assert3(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      };
      BN2.prototype.redNeg = function redNeg() {
        assert3(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      };
      BN2.prototype.redPow = function redPow(num) {
        assert3(this.red && !num.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, num);
      };
      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function MPrime(name, p) {
        this.name = name;
        this.p = new BN2(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN2(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN2(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };
      MPrime.prototype.ireduce = function ireduce(num) {
        var r = num;
        var rlen;
        do {
          this.split(r, this.tmp);
          r = this.imulK(r);
          r = r.iadd(this.tmp);
          rlen = r.bitLength();
        } while (rlen > this.n);
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
          r.words[0] = 0;
          r.length = 1;
        } else if (cmp > 0) {
          r.isub(this.p);
        } else {
          if (r.strip !== void 0) {
            r.strip();
          } else {
            r._strip();
          }
        }
        return r;
      };
      MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
      };
      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };
      function K256() {
        MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
      }
      inherits(K256, MPrime);
      K256.prototype.split = function split(input, output) {
        var mask2 = 4194303;
        var outLen = Math.min(input.length, 9);
        for (var i = 0; i < outLen; i++) {
          output.words[i] = input.words[i];
        }
        output.length = outLen;
        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        }
        var prev = input.words[9];
        output.words[output.length++] = prev & mask2;
        for (i = 10; i < input.length; i++) {
          var next = input.words[i] | 0;
          input.words[i - 10] = (next & mask2) << 4 | prev >>> 22;
          prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };
      K256.prototype.imulK = function imulK(num) {
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        var lo = 0;
        for (var i = 0; i < num.length; i++) {
          var w = num.words[i] | 0;
          lo += w * 977;
          num.words[i] = lo & 67108863;
          lo = w * 64 + (lo / 67108864 | 0);
        }
        if (num.words[num.length - 1] === 0) {
          num.length--;
          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }
        return num;
      };
      function P224() {
        MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
      }
      inherits(P224, MPrime);
      function P192() {
        MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
      }
      inherits(P192, MPrime);
      function P25519() {
        MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
      }
      inherits(P25519, MPrime);
      P25519.prototype.imulK = function imulK(num) {
        var carry = 0;
        for (var i = 0; i < num.length; i++) {
          var hi = (num.words[i] | 0) * 19 + carry;
          var lo = hi & 67108863;
          hi >>>= 26;
          num.words[i] = lo;
          carry = hi;
        }
        if (carry !== 0) {
          num.words[num.length++] = carry;
        }
        return num;
      };
      BN2._prime = function prime(name) {
        if (primes[name])
          return primes[name];
        var prime2;
        if (name === "k256") {
          prime2 = new K256();
        } else if (name === "p224") {
          prime2 = new P224();
        } else if (name === "p192") {
          prime2 = new P192();
        } else if (name === "p25519") {
          prime2 = new P25519();
        } else {
          throw new Error("Unknown prime " + name);
        }
        primes[name] = prime2;
        return prime2;
      };
      function Red(m) {
        if (typeof m === "string") {
          var prime = BN2._prime(m);
          this.m = prime.p;
          this.prime = prime;
        } else {
          assert3(m.gtn(1), "modulus must be greater than 1");
          this.m = m;
          this.prime = null;
        }
      }
      Red.prototype._verify1 = function _verify1(a) {
        assert3(a.negative === 0, "red works only with positives");
        assert3(a.red, "red works only with red numbers");
      };
      Red.prototype._verify2 = function _verify2(a, b) {
        assert3((a.negative | b.negative) === 0, "red works only with positives");
        assert3(a.red && a.red === b.red, "red works only with red numbers");
      };
      Red.prototype.imod = function imod(a) {
        if (this.prime)
          return this.prime.ireduce(a)._forceRed(this);
        move(a, a.umod(this.m)._forceRed(this));
        return a;
      };
      Red.prototype.neg = function neg(a) {
        if (a.isZero()) {
          return a.clone();
        }
        return this.m.sub(a)._forceRed(this);
      };
      Red.prototype.add = function add(a, b) {
        this._verify2(a, b);
        var res = a.add(b);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);
        var res = a.iadd(b);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res;
      };
      Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);
        var res = a.sub(b);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);
        var res = a.isub(b);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res;
      };
      Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
      };
      Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);
        return this.imod(a.imul(b));
      };
      Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);
        return this.imod(a.mul(b));
      };
      Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
      };
      Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
      };
      Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero())
          return a.clone();
        var mod3 = this.m.andln(3);
        assert3(mod3 % 2 === 1);
        if (mod3 === 3) {
          var pow = this.m.add(new BN2(1)).iushrn(2);
          return this.pow(a, pow);
        }
        var q = this.m.subn(1);
        var s = 0;
        while (!q.isZero() && q.andln(1) === 0) {
          s++;
          q.iushrn(1);
        }
        assert3(!q.isZero());
        var one = new BN2(1).toRed(this);
        var nOne = one.redNeg();
        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN2(2 * z * z).toRed(this);
        while (this.pow(z, lpow).cmp(nOne) !== 0) {
          z.redIAdd(nOne);
        }
        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;
        while (t.cmp(one) !== 0) {
          var tmp = t;
          for (var i = 0; tmp.cmp(one) !== 0; i++) {
            tmp = tmp.redSqr();
          }
          assert3(i < m);
          var b = this.pow(c, new BN2(1).iushln(m - i - 1));
          r = r.redMul(b);
          c = b.redSqr();
          t = t.redMul(c);
          m = i;
        }
        return r;
      };
      Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };
      Red.prototype.pow = function pow(a, num) {
        if (num.isZero())
          return new BN2(1).toRed(this);
        if (num.cmpn(1) === 0)
          return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN2(1).toRed(this);
        wnd[1] = a;
        for (var i = 2; i < wnd.length; i++) {
          wnd[i] = this.mul(wnd[i - 1], a);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
          start = 26;
        }
        for (i = num.length - 1; i >= 0; i--) {
          var word = num.words[i];
          for (var j = start - 1; j >= 0; j--) {
            var bit = word >> j & 1;
            if (res !== wnd[0]) {
              res = this.sqr(res);
            }
            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }
            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i !== 0 || j !== 0))
              continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }
          start = 26;
        }
        return res;
      };
      Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
      };
      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      };
      BN2.mont = function mont(num) {
        return new Mont(num);
      };
      function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new BN2(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      inherits(Mont, Red);
      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };
      Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
      };
      Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
          a.words[0] = 0;
          a.length = 1;
          return a;
        }
        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero())
          return new BN2(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.invm = function invm(a) {
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })(typeof module === "undefined" || module, exports);
  });

  // node_modules/safe-buffer/index.js
  var require_safe_buffer = __commonJS((exports, module) => {
    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var buffer = require_buffer();
    var Buffer3 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer3.from && Buffer3.alloc && Buffer3.allocUnsafe && Buffer3.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer3(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer3.prototype);
    copyProps(Buffer3, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer3(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer3(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer3(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  });

  // node_modules/@solana/web3.js/node_modules/base-x/src/index.js
  var require_src = __commonJS((exports, module) => {
    "use strict";
    var _Buffer = require_safe_buffer().Buffer;
    function base(ALPHABET) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode(source) {
        if (Array.isArray(source) || source instanceof Uint8Array) {
          source = _Buffer.from(source);
        }
        if (!_Buffer.isBuffer(source)) {
          throw new TypeError("Expected Buffer");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          pbegin++;
        }
        var it2 = size - length;
        while (it2 !== size && b58[it2] === 0) {
          it2++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
          str += ALPHABET.charAt(b58[it2]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return _Buffer.alloc(0);
        }
        var psz = 0;
        var zeroes = 0;
        var length = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (source[psz]) {
          var carry = BASE_MAP[source.charCodeAt(psz)];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          psz++;
        }
        var it4 = size - length;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
        vch.fill(0, 0, zeroes);
        var j2 = zeroes;
        while (it4 !== size) {
          vch[j2++] = b256[it4++];
        }
        return vch;
      }
      function decode(string2) {
        var buffer = decodeUnsafe(string2);
        if (buffer) {
          return buffer;
        }
        throw new Error("Non-base" + BASE + " character");
      }
      return {
        encode,
        decodeUnsafe,
        decode
      };
    }
    module.exports = base;
  });

  // node_modules/@solana/web3.js/node_modules/bs58/index.js
  var require_bs58 = __commonJS((exports, module) => {
    var basex = require_src();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module.exports = basex(ALPHABET);
  });

  // node_modules/@noble/hashes/sha256.js
  var require_sha256 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sha224 = exports.sha256 = void 0;
    var _sha2_js_1 = require_sha2();
    var utils_js_1 = require_utils();
    var Chi = (a, b, c) => a & b ^ ~a & c;
    var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
    var SHA256_K = /* @__PURE__ */ new Uint32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    var IV = /* @__PURE__ */ new Uint32Array([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
    var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
    var SHA256 = class extends _sha2_js_1.SHA2 {
      constructor() {
        super(64, 32, 8, false);
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
      }
      get() {
        const {A, B, C, D, E, F, G, H} = this;
        return [A, B, C, D, E, F, G, H];
      }
      set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
      }
      process(view, offset2) {
        for (let i = 0; i < 16; i++, offset2 += 4)
          SHA256_W[i] = view.getUint32(offset2, false);
        for (let i = 16; i < 64; i++) {
          const W15 = SHA256_W[i - 15];
          const W2 = SHA256_W[i - 2];
          const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
          const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
          SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        let {A, B, C, D, E, F, G, H} = this;
        for (let i = 0; i < 64; i++) {
          const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
          const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
          const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
          const T2 = sigma0 + Maj(A, B, C) | 0;
          H = G;
          G = F;
          F = E;
          E = D + T1 | 0;
          D = C;
          C = B;
          B = A;
          A = T1 + T2 | 0;
        }
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
      }
      roundClean() {
        SHA256_W.fill(0);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
      }
    };
    var SHA224 = class extends SHA256 {
      constructor() {
        super();
        this.A = 3238371032 | 0;
        this.B = 914150663 | 0;
        this.C = 812702999 | 0;
        this.D = 4144912697 | 0;
        this.E = 4290775857 | 0;
        this.F = 1750603025 | 0;
        this.G = 1694076839 | 0;
        this.H = 3204075428 | 0;
        this.outputLen = 28;
      }
    };
    exports.sha256 = (0, utils_js_1.wrapConstructor)(() => new SHA256());
    exports.sha224 = (0, utils_js_1.wrapConstructor)(() => new SHA224());
  });

  // node_modules/borsh/node_modules/base-x/src/index.js
  var require_src2 = __commonJS((exports, module) => {
    "use strict";
    var _Buffer = require_safe_buffer().Buffer;
    function base(ALPHABET) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode(source) {
        if (Array.isArray(source) || source instanceof Uint8Array) {
          source = _Buffer.from(source);
        }
        if (!_Buffer.isBuffer(source)) {
          throw new TypeError("Expected Buffer");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          pbegin++;
        }
        var it2 = size - length;
        while (it2 !== size && b58[it2] === 0) {
          it2++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
          str += ALPHABET.charAt(b58[it2]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return _Buffer.alloc(0);
        }
        var psz = 0;
        var zeroes = 0;
        var length = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (source[psz]) {
          var carry = BASE_MAP[source.charCodeAt(psz)];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          psz++;
        }
        var it4 = size - length;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
        vch.fill(0, 0, zeroes);
        var j2 = zeroes;
        while (it4 !== size) {
          vch[j2++] = b256[it4++];
        }
        return vch;
      }
      function decode(string2) {
        var buffer = decodeUnsafe(string2);
        if (buffer) {
          return buffer;
        }
        throw new Error("Non-base" + BASE + " character");
      }
      return {
        encode,
        decodeUnsafe,
        decode
      };
    }
    module.exports = base;
  });

  // node_modules/borsh/node_modules/bs58/index.js
  var require_bs582 = __commonJS((exports, module) => {
    var basex = require_src2();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module.exports = basex(ALPHABET);
  });

  // node_modules/text-encoding-utf-8/lib/encoding.lib.mjs
  var require_encoding_lib = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      TextDecoder: () => TextDecoder2,
      TextEncoder: () => TextEncoder2
    });
    "use strict";
    function inRange(a, min, max) {
      return min <= a && a <= max;
    }
    function ToDictionary(o) {
      if (o === void 0)
        return {};
      if (o === Object(o))
        return o;
      throw TypeError("Could not convert argument to dictionary");
    }
    function stringToCodePoints(string2) {
      var s = String(string2);
      var n = s.length;
      var i = 0;
      var u = [];
      while (i < n) {
        var c = s.charCodeAt(i);
        if (c < 55296 || c > 57343) {
          u.push(c);
        } else if (56320 <= c && c <= 57343) {
          u.push(65533);
        } else if (55296 <= c && c <= 56319) {
          if (i === n - 1) {
            u.push(65533);
          } else {
            var d = string2.charCodeAt(i + 1);
            if (56320 <= d && d <= 57343) {
              var a = c & 1023;
              var b = d & 1023;
              u.push(65536 + (a << 10) + b);
              i += 1;
            } else {
              u.push(65533);
            }
          }
        }
        i += 1;
      }
      return u;
    }
    function codePointsToString(code_points) {
      var s = "";
      for (var i = 0; i < code_points.length; ++i) {
        var cp = code_points[i];
        if (cp <= 65535) {
          s += String.fromCharCode(cp);
        } else {
          cp -= 65536;
          s += String.fromCharCode((cp >> 10) + 55296, (cp & 1023) + 56320);
        }
      }
      return s;
    }
    var end_of_stream = -1;
    function Stream(tokens) {
      this.tokens = [].slice.call(tokens);
    }
    Stream.prototype = {
      endOfStream: function() {
        return !this.tokens.length;
      },
      read: function() {
        if (!this.tokens.length)
          return end_of_stream;
        return this.tokens.shift();
      },
      prepend: function(token) {
        if (Array.isArray(token)) {
          var tokens = token;
          while (tokens.length)
            this.tokens.unshift(tokens.pop());
        } else {
          this.tokens.unshift(token);
        }
      },
      push: function(token) {
        if (Array.isArray(token)) {
          var tokens = token;
          while (tokens.length)
            this.tokens.push(tokens.shift());
        } else {
          this.tokens.push(token);
        }
      }
    };
    var finished = -1;
    function decoderError(fatal, opt_code_point) {
      if (fatal)
        throw TypeError("Decoder error");
      return opt_code_point || 65533;
    }
    function Decoder() {
    }
    Decoder.prototype = {
      handler: function(stream, bite) {
      }
    };
    function Encoder() {
    }
    Encoder.prototype = {
      handler: function(stream, code_point) {
      }
    };
    var DEFAULT_ENCODING = "utf-8";
    function TextDecoder2(encoding, options) {
      if (!(this instanceof TextDecoder2)) {
        return new TextDecoder2(encoding, options);
      }
      encoding = encoding !== void 0 ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
      if (encoding !== DEFAULT_ENCODING) {
        throw new Error("Encoding not supported. Only utf-8 is supported");
      }
      options = ToDictionary(options);
      this._streaming = false;
      this._BOMseen = false;
      this._decoder = null;
      this._fatal = Boolean(options["fatal"]);
      this._ignoreBOM = Boolean(options["ignoreBOM"]);
      Object.defineProperty(this, "encoding", {value: "utf-8"});
      Object.defineProperty(this, "fatal", {value: this._fatal});
      Object.defineProperty(this, "ignoreBOM", {value: this._ignoreBOM});
    }
    TextDecoder2.prototype = {
      decode: function decode(input, options) {
        var bytes;
        if (typeof input === "object" && input instanceof ArrayBuffer) {
          bytes = new Uint8Array(input);
        } else if (typeof input === "object" && "buffer" in input && input.buffer instanceof ArrayBuffer) {
          bytes = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        } else {
          bytes = new Uint8Array(0);
        }
        options = ToDictionary(options);
        if (!this._streaming) {
          this._decoder = new UTF8Decoder({fatal: this._fatal});
          this._BOMseen = false;
        }
        this._streaming = Boolean(options["stream"]);
        var input_stream = new Stream(bytes);
        var code_points = [];
        var result;
        while (!input_stream.endOfStream()) {
          result = this._decoder.handler(input_stream, input_stream.read());
          if (result === finished)
            break;
          if (result === null)
            continue;
          if (Array.isArray(result))
            code_points.push.apply(code_points, result);
          else
            code_points.push(result);
        }
        if (!this._streaming) {
          do {
            result = this._decoder.handler(input_stream, input_stream.read());
            if (result === finished)
              break;
            if (result === null)
              continue;
            if (Array.isArray(result))
              code_points.push.apply(code_points, result);
            else
              code_points.push(result);
          } while (!input_stream.endOfStream());
          this._decoder = null;
        }
        if (code_points.length) {
          if (["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen) {
            if (code_points[0] === 65279) {
              this._BOMseen = true;
              code_points.shift();
            } else {
              this._BOMseen = true;
            }
          }
        }
        return codePointsToString(code_points);
      }
    };
    function TextEncoder2(encoding, options) {
      if (!(this instanceof TextEncoder2))
        return new TextEncoder2(encoding, options);
      encoding = encoding !== void 0 ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
      if (encoding !== DEFAULT_ENCODING) {
        throw new Error("Encoding not supported. Only utf-8 is supported");
      }
      options = ToDictionary(options);
      this._streaming = false;
      this._encoder = null;
      this._options = {fatal: Boolean(options["fatal"])};
      Object.defineProperty(this, "encoding", {value: "utf-8"});
    }
    TextEncoder2.prototype = {
      encode: function encode(opt_string, options) {
        opt_string = opt_string ? String(opt_string) : "";
        options = ToDictionary(options);
        if (!this._streaming)
          this._encoder = new UTF8Encoder(this._options);
        this._streaming = Boolean(options["stream"]);
        var bytes = [];
        var input_stream = new Stream(stringToCodePoints(opt_string));
        var result;
        while (!input_stream.endOfStream()) {
          result = this._encoder.handler(input_stream, input_stream.read());
          if (result === finished)
            break;
          if (Array.isArray(result))
            bytes.push.apply(bytes, result);
          else
            bytes.push(result);
        }
        if (!this._streaming) {
          while (true) {
            result = this._encoder.handler(input_stream, input_stream.read());
            if (result === finished)
              break;
            if (Array.isArray(result))
              bytes.push.apply(bytes, result);
            else
              bytes.push(result);
          }
          this._encoder = null;
        }
        return new Uint8Array(bytes);
      }
    };
    function UTF8Decoder(options) {
      var fatal = options.fatal;
      var utf8_code_point = 0, utf8_bytes_seen = 0, utf8_bytes_needed = 0, utf8_lower_boundary = 128, utf8_upper_boundary = 191;
      this.handler = function(stream, bite) {
        if (bite === end_of_stream && utf8_bytes_needed !== 0) {
          utf8_bytes_needed = 0;
          return decoderError(fatal);
        }
        if (bite === end_of_stream)
          return finished;
        if (utf8_bytes_needed === 0) {
          if (inRange(bite, 0, 127)) {
            return bite;
          }
          if (inRange(bite, 194, 223)) {
            utf8_bytes_needed = 1;
            utf8_code_point = bite - 192;
          } else if (inRange(bite, 224, 239)) {
            if (bite === 224)
              utf8_lower_boundary = 160;
            if (bite === 237)
              utf8_upper_boundary = 159;
            utf8_bytes_needed = 2;
            utf8_code_point = bite - 224;
          } else if (inRange(bite, 240, 244)) {
            if (bite === 240)
              utf8_lower_boundary = 144;
            if (bite === 244)
              utf8_upper_boundary = 143;
            utf8_bytes_needed = 3;
            utf8_code_point = bite - 240;
          } else {
            return decoderError(fatal);
          }
          utf8_code_point = utf8_code_point << 6 * utf8_bytes_needed;
          return null;
        }
        if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) {
          utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
          utf8_lower_boundary = 128;
          utf8_upper_boundary = 191;
          stream.prepend(bite);
          return decoderError(fatal);
        }
        utf8_lower_boundary = 128;
        utf8_upper_boundary = 191;
        utf8_bytes_seen += 1;
        utf8_code_point += bite - 128 << 6 * (utf8_bytes_needed - utf8_bytes_seen);
        if (utf8_bytes_seen !== utf8_bytes_needed)
          return null;
        var code_point = utf8_code_point;
        utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
        return code_point;
      };
    }
    function UTF8Encoder(options) {
      var fatal = options.fatal;
      this.handler = function(stream, code_point) {
        if (code_point === end_of_stream)
          return finished;
        if (inRange(code_point, 0, 127))
          return code_point;
        var count, offset2;
        if (inRange(code_point, 128, 2047)) {
          count = 1;
          offset2 = 192;
        } else if (inRange(code_point, 2048, 65535)) {
          count = 2;
          offset2 = 224;
        } else if (inRange(code_point, 65536, 1114111)) {
          count = 3;
          offset2 = 240;
        }
        var bytes = [(code_point >> 6 * count) + offset2];
        while (count > 0) {
          var temp = code_point >> 6 * (count - 1);
          bytes.push(128 | temp & 63);
          count -= 1;
        }
        return bytes;
      };
    }
  });

  // node_modules/borsh/lib/index.js
  var require_lib2 = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {enumerable: true, value: v});
    } : function(o, v) {
      o["default"] = v;
    });
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : {default: mod};
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.deserializeUnchecked = exports.deserialize = exports.serialize = exports.BinaryReader = exports.BinaryWriter = exports.BorshError = exports.baseDecode = exports.baseEncode = void 0;
    var bn_js_1 = __importDefault(require_bn());
    var bs58_1 = __importDefault(require_bs582());
    var encoding = __importStar(require_encoding_lib());
    var ResolvedTextDecoder = typeof TextDecoder !== "function" ? encoding.TextDecoder : TextDecoder;
    var textDecoder = new ResolvedTextDecoder("utf-8", {fatal: true});
    function baseEncode(value) {
      if (typeof value === "string") {
        value = Buffer.from(value, "utf8");
      }
      return bs58_1.default.encode(Buffer.from(value));
    }
    exports.baseEncode = baseEncode;
    function baseDecode(value) {
      return Buffer.from(bs58_1.default.decode(value));
    }
    exports.baseDecode = baseDecode;
    var INITIAL_LENGTH = 1024;
    var BorshError = class extends Error {
      constructor(message) {
        super(message);
        this.fieldPath = [];
        this.originalMessage = message;
      }
      addToFieldPath(fieldName) {
        this.fieldPath.splice(0, 0, fieldName);
        this.message = this.originalMessage + ": " + this.fieldPath.join(".");
      }
    };
    exports.BorshError = BorshError;
    var BinaryWriter = class {
      constructor() {
        this.buf = Buffer.alloc(INITIAL_LENGTH);
        this.length = 0;
      }
      maybeResize() {
        if (this.buf.length < 16 + this.length) {
          this.buf = Buffer.concat([this.buf, Buffer.alloc(INITIAL_LENGTH)]);
        }
      }
      writeU8(value) {
        this.maybeResize();
        this.buf.writeUInt8(value, this.length);
        this.length += 1;
      }
      writeU16(value) {
        this.maybeResize();
        this.buf.writeUInt16LE(value, this.length);
        this.length += 2;
      }
      writeU32(value) {
        this.maybeResize();
        this.buf.writeUInt32LE(value, this.length);
        this.length += 4;
      }
      writeU64(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 8)));
      }
      writeU128(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 16)));
      }
      writeU256(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 32)));
      }
      writeU512(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray("le", 64)));
      }
      writeBuffer(buffer) {
        this.buf = Buffer.concat([
          Buffer.from(this.buf.subarray(0, this.length)),
          buffer,
          Buffer.alloc(INITIAL_LENGTH)
        ]);
        this.length += buffer.length;
      }
      writeString(str) {
        this.maybeResize();
        const b = Buffer.from(str, "utf8");
        this.writeU32(b.length);
        this.writeBuffer(b);
      }
      writeFixedArray(array2) {
        this.writeBuffer(Buffer.from(array2));
      }
      writeArray(array2, fn) {
        this.maybeResize();
        this.writeU32(array2.length);
        for (const elem of array2) {
          this.maybeResize();
          fn(elem);
        }
      }
      toArray() {
        return this.buf.subarray(0, this.length);
      }
    };
    exports.BinaryWriter = BinaryWriter;
    function handlingRangeError(target, propertyKey, propertyDescriptor) {
      const originalMethod = propertyDescriptor.value;
      propertyDescriptor.value = function(...args) {
        try {
          return originalMethod.apply(this, args);
        } catch (e) {
          if (e instanceof RangeError) {
            const code = e.code;
            if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(code) >= 0) {
              throw new BorshError("Reached the end of buffer when deserializing");
            }
          }
          throw e;
        }
      };
    }
    var BinaryReader = class {
      constructor(buf) {
        this.buf = buf;
        this.offset = 0;
      }
      readU8() {
        const value = this.buf.readUInt8(this.offset);
        this.offset += 1;
        return value;
      }
      readU16() {
        const value = this.buf.readUInt16LE(this.offset);
        this.offset += 2;
        return value;
      }
      readU32() {
        const value = this.buf.readUInt32LE(this.offset);
        this.offset += 4;
        return value;
      }
      readU64() {
        const buf = this.readBuffer(8);
        return new bn_js_1.default(buf, "le");
      }
      readU128() {
        const buf = this.readBuffer(16);
        return new bn_js_1.default(buf, "le");
      }
      readU256() {
        const buf = this.readBuffer(32);
        return new bn_js_1.default(buf, "le");
      }
      readU512() {
        const buf = this.readBuffer(64);
        return new bn_js_1.default(buf, "le");
      }
      readBuffer(len) {
        if (this.offset + len > this.buf.length) {
          throw new BorshError(`Expected buffer length ${len} isn't within bounds`);
        }
        const result = this.buf.slice(this.offset, this.offset + len);
        this.offset += len;
        return result;
      }
      readString() {
        const len = this.readU32();
        const buf = this.readBuffer(len);
        try {
          return textDecoder.decode(buf);
        } catch (e) {
          throw new BorshError(`Error decoding UTF-8 string: ${e}`);
        }
      }
      readFixedArray(len) {
        return new Uint8Array(this.readBuffer(len));
      }
      readArray(fn) {
        const len = this.readU32();
        const result = Array();
        for (let i = 0; i < len; ++i) {
          result.push(fn());
        }
        return result;
      }
    };
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU8", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU16", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU32", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU64", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU128", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU256", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readU512", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readString", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readFixedArray", null);
    __decorate([
      handlingRangeError
    ], BinaryReader.prototype, "readArray", null);
    exports.BinaryReader = BinaryReader;
    function capitalizeFirstLetter(string2) {
      return string2.charAt(0).toUpperCase() + string2.slice(1);
    }
    function serializeField(schema, fieldName, value, fieldType, writer) {
      try {
        if (typeof fieldType === "string") {
          writer[`write${capitalizeFirstLetter(fieldType)}`](value);
        } else if (fieldType instanceof Array) {
          if (typeof fieldType[0] === "number") {
            if (value.length !== fieldType[0]) {
              throw new BorshError(`Expecting byte array of length ${fieldType[0]}, but got ${value.length} bytes`);
            }
            writer.writeFixedArray(value);
          } else if (fieldType.length === 2 && typeof fieldType[1] === "number") {
            if (value.length !== fieldType[1]) {
              throw new BorshError(`Expecting byte array of length ${fieldType[1]}, but got ${value.length} bytes`);
            }
            for (let i = 0; i < fieldType[1]; i++) {
              serializeField(schema, null, value[i], fieldType[0], writer);
            }
          } else {
            writer.writeArray(value, (item) => {
              serializeField(schema, fieldName, item, fieldType[0], writer);
            });
          }
        } else if (fieldType.kind !== void 0) {
          switch (fieldType.kind) {
            case "option": {
              if (value === null || value === void 0) {
                writer.writeU8(0);
              } else {
                writer.writeU8(1);
                serializeField(schema, fieldName, value, fieldType.type, writer);
              }
              break;
            }
            case "map": {
              writer.writeU32(value.size);
              value.forEach((val, key) => {
                serializeField(schema, fieldName, key, fieldType.key, writer);
                serializeField(schema, fieldName, val, fieldType.value, writer);
              });
              break;
            }
            default:
              throw new BorshError(`FieldType ${fieldType} unrecognized`);
          }
        } else {
          serializeStruct(schema, value, writer);
        }
      } catch (error) {
        if (error instanceof BorshError) {
          error.addToFieldPath(fieldName);
        }
        throw error;
      }
    }
    function serializeStruct(schema, obj, writer) {
      if (typeof obj.borshSerialize === "function") {
        obj.borshSerialize(writer);
        return;
      }
      const structSchema = schema.get(obj.constructor);
      if (!structSchema) {
        throw new BorshError(`Class ${obj.constructor.name} is missing in schema`);
      }
      if (structSchema.kind === "struct") {
        structSchema.fields.map(([fieldName, fieldType]) => {
          serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
        });
      } else if (structSchema.kind === "enum") {
        const name = obj[structSchema.field];
        for (let idx = 0; idx < structSchema.values.length; ++idx) {
          const [fieldName, fieldType] = structSchema.values[idx];
          if (fieldName === name) {
            writer.writeU8(idx);
            serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
            break;
          }
        }
      } else {
        throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${obj.constructor.name}`);
      }
    }
    function serialize2(schema, obj, Writer = BinaryWriter) {
      const writer = new Writer();
      serializeStruct(schema, obj, writer);
      return writer.toArray();
    }
    exports.serialize = serialize2;
    function deserializeField(schema, fieldName, fieldType, reader) {
      try {
        if (typeof fieldType === "string") {
          return reader[`read${capitalizeFirstLetter(fieldType)}`]();
        }
        if (fieldType instanceof Array) {
          if (typeof fieldType[0] === "number") {
            return reader.readFixedArray(fieldType[0]);
          } else if (typeof fieldType[1] === "number") {
            const arr = [];
            for (let i = 0; i < fieldType[1]; i++) {
              arr.push(deserializeField(schema, null, fieldType[0], reader));
            }
            return arr;
          } else {
            return reader.readArray(() => deserializeField(schema, fieldName, fieldType[0], reader));
          }
        }
        if (fieldType.kind === "option") {
          const option = reader.readU8();
          if (option) {
            return deserializeField(schema, fieldName, fieldType.type, reader);
          }
          return void 0;
        }
        if (fieldType.kind === "map") {
          let map = new Map();
          const length = reader.readU32();
          for (let i = 0; i < length; i++) {
            const key = deserializeField(schema, fieldName, fieldType.key, reader);
            const val = deserializeField(schema, fieldName, fieldType.value, reader);
            map.set(key, val);
          }
          return map;
        }
        return deserializeStruct(schema, fieldType, reader);
      } catch (error) {
        if (error instanceof BorshError) {
          error.addToFieldPath(fieldName);
        }
        throw error;
      }
    }
    function deserializeStruct(schema, classType, reader) {
      if (typeof classType.borshDeserialize === "function") {
        return classType.borshDeserialize(reader);
      }
      const structSchema = schema.get(classType);
      if (!structSchema) {
        throw new BorshError(`Class ${classType.name} is missing in schema`);
      }
      if (structSchema.kind === "struct") {
        const result = {};
        for (const [fieldName, fieldType] of schema.get(classType).fields) {
          result[fieldName] = deserializeField(schema, fieldName, fieldType, reader);
        }
        return new classType(result);
      }
      if (structSchema.kind === "enum") {
        const idx = reader.readU8();
        if (idx >= structSchema.values.length) {
          throw new BorshError(`Enum index: ${idx} is out of range`);
        }
        const [fieldName, fieldType] = structSchema.values[idx];
        const fieldValue = deserializeField(schema, fieldName, fieldType, reader);
        return new classType({[fieldName]: fieldValue});
      }
      throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${classType.constructor.name}`);
    }
    function deserialize2(schema, classType, buffer, Reader = BinaryReader) {
      const reader = new Reader(buffer);
      const result = deserializeStruct(schema, classType, reader);
      if (reader.offset < buffer.length) {
        throw new BorshError(`Unexpected ${buffer.length - reader.offset} bytes after deserialized data`);
      }
      return result;
    }
    exports.deserialize = deserialize2;
    function deserializeUnchecked2(schema, classType, buffer, Reader = BinaryReader) {
      const reader = new Reader(buffer);
      return deserializeStruct(schema, classType, reader);
    }
    exports.deserializeUnchecked = deserializeUnchecked2;
  });

  // node_modules/@solana/buffer-layout/lib/Layout.js
  var require_Layout = __commonJS((exports) => {
    /**
     * Support for translating between Uint8Array instances and JavaScript
     * native types.
     *
     * {@link module:Layout~Layout|Layout} is the basis of a class
     * hierarchy that associates property names with sequences of encoded
     * bytes.
     *
     * Layouts are supported for these scalar (numeric) types:
     * * {@link module:Layout~UInt|Unsigned integers in little-endian
     *   format} with {@link module:Layout.u8|8-bit}, {@link
     *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
     *   {@link module:Layout.u32|32-bit}, {@link
     *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
     *   representation ranges;
     * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
     *   format} with {@link module:Layout.u16be|16-bit}, {@link
     *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
     *   {@link module:Layout.u40be|40-bit}, and {@link
     *   module:Layout.u48be|48-bit} representation ranges;
     * * {@link module:Layout~Int|Signed integers in little-endian
     *   format} with {@link module:Layout.s8|8-bit}, {@link
     *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
     *   {@link module:Layout.s32|32-bit}, {@link
     *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
     *   representation ranges;
     * * {@link module:Layout~IntBE|Signed integers in big-endian format}
     *   with {@link module:Layout.s16be|16-bit}, {@link
     *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
     *   {@link module:Layout.s40be|40-bit}, and {@link
     *   module:Layout.s48be|48-bit} representation ranges;
     * * 64-bit integral values that decode to an exact (if magnitude is
     *   less than 2^53) or nearby integral Number in {@link
     *   module:Layout.nu64|unsigned little-endian}, {@link
     *   module:Layout.nu64be|unsigned big-endian}, {@link
     *   module:Layout.ns64|signed little-endian}, and {@link
     *   module:Layout.ns64be|unsigned big-endian} encodings;
     * * 32-bit floating point values with {@link
     *   module:Layout.f32|little-endian} and {@link
     *   module:Layout.f32be|big-endian} representations;
     * * 64-bit floating point values with {@link
     *   module:Layout.f64|little-endian} and {@link
     *   module:Layout.f64be|big-endian} representations;
     * * {@link module:Layout.const|Constants} that take no space in the
     *   encoded expression.
     *
     * and for these aggregate types:
     * * {@link module:Layout.seq|Sequence}s of instances of a {@link
     *   module:Layout~Layout|Layout}, with JavaScript representation as
     *   an Array and constant or data-dependent {@link
     *   module:Layout~Sequence#count|length};
     * * {@link module:Layout.struct|Structure}s that aggregate a
     *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
     *   instances, with JavaScript representation as an Object;
     * * {@link module:Layout.union|Union}s that support multiple {@link
     *   module:Layout~VariantLayout|variant layouts} over a fixed
     *   (padded) or variable (not padded) span of bytes, using an
     *   unsigned integer at the start of the data or a separate {@link
     *   module:Layout.unionLayoutDiscriminator|layout element} to
     *   determine which layout to use when interpreting the buffer
     *   contents;
     * * {@link module:Layout.bits|BitStructure}s that contain a sequence
     *   of individual {@link
     *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
     *   16, 24, or 32-bit unsigned integer starting at the least- or
     *   most-significant bit;
     * * {@link module:Layout.cstr|C strings} of varying length;
     * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
     *   module:Layout~Blob#length|length} raw data.
     *
     * All {@link module:Layout~Layout|Layout} instances are immutable
     * after construction, to prevent internal state from becoming
     * inconsistent.
     *
     * @local Layout
     * @local ExternalLayout
     * @local GreedyCount
     * @local OffsetLayout
     * @local UInt
     * @local UIntBE
     * @local Int
     * @local IntBE
     * @local NearUInt64
     * @local NearUInt64BE
     * @local NearInt64
     * @local NearInt64BE
     * @local Float
     * @local FloatBE
     * @local Double
     * @local DoubleBE
     * @local Sequence
     * @local Structure
     * @local UnionDiscriminator
     * @local UnionLayoutDiscriminator
     * @local Union
     * @local VariantLayout
     * @local BitStructure
     * @local BitField
     * @local Boolean
     * @local Blob
     * @local CString
     * @local Constant
     * @local bindConstructorLayout
     * @module Layout
     * @license MIT
     * @author Peter A. Bigot
     * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
     */
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.s16 = exports.s8 = exports.nu64be = exports.u48be = exports.u40be = exports.u32be = exports.u24be = exports.u16be = exports.nu64 = exports.u48 = exports.u40 = exports.u32 = exports.u24 = exports.u16 = exports.u8 = exports.offset = exports.greedy = exports.Constant = exports.UTF8 = exports.CString = exports.Blob = exports.Boolean = exports.BitField = exports.BitStructure = exports.VariantLayout = exports.Union = exports.UnionLayoutDiscriminator = exports.UnionDiscriminator = exports.Structure = exports.Sequence = exports.DoubleBE = exports.Double = exports.FloatBE = exports.Float = exports.NearInt64BE = exports.NearInt64 = exports.NearUInt64BE = exports.NearUInt64 = exports.IntBE = exports.Int = exports.UIntBE = exports.UInt = exports.OffsetLayout = exports.GreedyCount = exports.ExternalLayout = exports.bindConstructorLayout = exports.nameWithProperty = exports.Layout = exports.uint8ArrayToBuffer = exports.checkUint8Array = void 0;
    exports.constant = exports.utf8 = exports.cstr = exports.blob = exports.unionLayoutDiscriminator = exports.union = exports.seq = exports.bits = exports.struct = exports.f64be = exports.f64 = exports.f32be = exports.f32 = exports.ns64be = exports.s48be = exports.s40be = exports.s32be = exports.s24be = exports.s16be = exports.ns64 = exports.s48 = exports.s40 = exports.s32 = exports.s24 = void 0;
    var buffer_1 = require_buffer();
    function checkUint8Array(b) {
      if (!(b instanceof Uint8Array)) {
        throw new TypeError("b must be a Uint8Array");
      }
    }
    exports.checkUint8Array = checkUint8Array;
    function uint8ArrayToBuffer(b) {
      checkUint8Array(b);
      return buffer_1.Buffer.from(b.buffer, b.byteOffset, b.length);
    }
    exports.uint8ArrayToBuffer = uint8ArrayToBuffer;
    var Layout = class {
      constructor(span, property) {
        if (!Number.isInteger(span)) {
          throw new TypeError("span must be an integer");
        }
        this.span = span;
        this.property = property;
      }
      makeDestinationObject() {
        return {};
      }
      getSpan(b, offset2) {
        if (0 > this.span) {
          throw new RangeError("indeterminate span");
        }
        return this.span;
      }
      replicate(property) {
        const rv = Object.create(this.constructor.prototype);
        Object.assign(rv, this);
        rv.property = property;
        return rv;
      }
      fromArray(values) {
        return void 0;
      }
    };
    exports.Layout = Layout;
    function nameWithProperty(name, lo) {
      if (lo.property) {
        return name + "[" + lo.property + "]";
      }
      return name;
    }
    exports.nameWithProperty = nameWithProperty;
    function bindConstructorLayout(Class, layout) {
      if (typeof Class !== "function") {
        throw new TypeError("Class must be constructor");
      }
      if (Object.prototype.hasOwnProperty.call(Class, "layout_")) {
        throw new Error("Class is already bound to a layout");
      }
      if (!(layout && layout instanceof Layout)) {
        throw new TypeError("layout must be a Layout");
      }
      if (Object.prototype.hasOwnProperty.call(layout, "boundConstructor_")) {
        throw new Error("layout is already bound to a constructor");
      }
      Class.layout_ = layout;
      layout.boundConstructor_ = Class;
      layout.makeDestinationObject = () => new Class();
      Object.defineProperty(Class.prototype, "encode", {
        value(b, offset2) {
          return layout.encode(this, b, offset2);
        },
        writable: true
      });
      Object.defineProperty(Class, "decode", {
        value(b, offset2) {
          return layout.decode(b, offset2);
        },
        writable: true
      });
    }
    exports.bindConstructorLayout = bindConstructorLayout;
    var ExternalLayout = class extends Layout {
      isCount() {
        throw new Error("ExternalLayout is abstract");
      }
    };
    exports.ExternalLayout = ExternalLayout;
    var GreedyCount = class extends ExternalLayout {
      constructor(elementSpan = 1, property) {
        if (!Number.isInteger(elementSpan) || 0 >= elementSpan) {
          throw new TypeError("elementSpan must be a (positive) integer");
        }
        super(-1, property);
        this.elementSpan = elementSpan;
      }
      isCount() {
        return true;
      }
      decode(b, offset2 = 0) {
        checkUint8Array(b);
        const rem = b.length - offset2;
        return Math.floor(rem / this.elementSpan);
      }
      encode(src, b, offset2) {
        return 0;
      }
    };
    exports.GreedyCount = GreedyCount;
    var OffsetLayout = class extends ExternalLayout {
      constructor(layout, offset2 = 0, property) {
        if (!(layout instanceof Layout)) {
          throw new TypeError("layout must be a Layout");
        }
        if (!Number.isInteger(offset2)) {
          throw new TypeError("offset must be integer or undefined");
        }
        super(layout.span, property || layout.property);
        this.layout = layout;
        this.offset = offset2;
      }
      isCount() {
        return this.layout instanceof UInt || this.layout instanceof UIntBE;
      }
      decode(b, offset2 = 0) {
        return this.layout.decode(b, offset2 + this.offset);
      }
      encode(src, b, offset2 = 0) {
        return this.layout.encode(src, b, offset2 + this.offset);
      }
    };
    exports.OffsetLayout = OffsetLayout;
    var UInt = class extends Layout {
      constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
          throw new RangeError("span must not exceed 6 bytes");
        }
      }
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readUIntLE(offset2, this.span);
      }
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeUIntLE(src, offset2, this.span);
        return this.span;
      }
    };
    exports.UInt = UInt;
    var UIntBE = class extends Layout {
      constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
          throw new RangeError("span must not exceed 6 bytes");
        }
      }
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readUIntBE(offset2, this.span);
      }
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeUIntBE(src, offset2, this.span);
        return this.span;
      }
    };
    exports.UIntBE = UIntBE;
    var Int = class extends Layout {
      constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
          throw new RangeError("span must not exceed 6 bytes");
        }
      }
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readIntLE(offset2, this.span);
      }
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeIntLE(src, offset2, this.span);
        return this.span;
      }
    };
    exports.Int = Int;
    var IntBE = class extends Layout {
      constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
          throw new RangeError("span must not exceed 6 bytes");
        }
      }
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readIntBE(offset2, this.span);
      }
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeIntBE(src, offset2, this.span);
        return this.span;
      }
    };
    exports.IntBE = IntBE;
    var V2E32 = Math.pow(2, 32);
    function divmodInt64(src) {
      const hi32 = Math.floor(src / V2E32);
      const lo32 = src - hi32 * V2E32;
      return {hi32, lo32};
    }
    function roundedInt64(hi32, lo32) {
      return hi32 * V2E32 + lo32;
    }
    var NearUInt64 = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      decode(b, offset2 = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const lo32 = buffer.readUInt32LE(offset2);
        const hi32 = buffer.readUInt32LE(offset2 + 4);
        return roundedInt64(hi32, lo32);
      }
      encode(src, b, offset2 = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32LE(split.lo32, offset2);
        buffer.writeUInt32LE(split.hi32, offset2 + 4);
        return 8;
      }
    };
    exports.NearUInt64 = NearUInt64;
    var NearUInt64BE = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      decode(b, offset2 = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const hi32 = buffer.readUInt32BE(offset2);
        const lo32 = buffer.readUInt32BE(offset2 + 4);
        return roundedInt64(hi32, lo32);
      }
      encode(src, b, offset2 = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32BE(split.hi32, offset2);
        buffer.writeUInt32BE(split.lo32, offset2 + 4);
        return 8;
      }
    };
    exports.NearUInt64BE = NearUInt64BE;
    var NearInt64 = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      decode(b, offset2 = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const lo32 = buffer.readUInt32LE(offset2);
        const hi32 = buffer.readInt32LE(offset2 + 4);
        return roundedInt64(hi32, lo32);
      }
      encode(src, b, offset2 = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32LE(split.lo32, offset2);
        buffer.writeInt32LE(split.hi32, offset2 + 4);
        return 8;
      }
    };
    exports.NearInt64 = NearInt64;
    var NearInt64BE = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      decode(b, offset2 = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const hi32 = buffer.readInt32BE(offset2);
        const lo32 = buffer.readUInt32BE(offset2 + 4);
        return roundedInt64(hi32, lo32);
      }
      encode(src, b, offset2 = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeInt32BE(split.hi32, offset2);
        buffer.writeUInt32BE(split.lo32, offset2 + 4);
        return 8;
      }
    };
    exports.NearInt64BE = NearInt64BE;
    var Float = class extends Layout {
      constructor(property) {
        super(4, property);
      }
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readFloatLE(offset2);
      }
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeFloatLE(src, offset2);
        return 4;
      }
    };
    exports.Float = Float;
    var FloatBE = class extends Layout {
      constructor(property) {
        super(4, property);
      }
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readFloatBE(offset2);
      }
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeFloatBE(src, offset2);
        return 4;
      }
    };
    exports.FloatBE = FloatBE;
    var Double = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readDoubleLE(offset2);
      }
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeDoubleLE(src, offset2);
        return 8;
      }
    };
    exports.Double = Double;
    var DoubleBE = class extends Layout {
      constructor(property) {
        super(8, property);
      }
      decode(b, offset2 = 0) {
        return uint8ArrayToBuffer(b).readDoubleBE(offset2);
      }
      encode(src, b, offset2 = 0) {
        uint8ArrayToBuffer(b).writeDoubleBE(src, offset2);
        return 8;
      }
    };
    exports.DoubleBE = DoubleBE;
    var Sequence = class extends Layout {
      constructor(elementLayout, count, property) {
        if (!(elementLayout instanceof Layout)) {
          throw new TypeError("elementLayout must be a Layout");
        }
        if (!(count instanceof ExternalLayout && count.isCount() || Number.isInteger(count) && 0 <= count)) {
          throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
        }
        let span = -1;
        if (!(count instanceof ExternalLayout) && 0 < elementLayout.span) {
          span = count * elementLayout.span;
        }
        super(span, property);
        this.elementLayout = elementLayout;
        this.count = count;
      }
      getSpan(b, offset2 = 0) {
        if (0 <= this.span) {
          return this.span;
        }
        let span = 0;
        let count = this.count;
        if (count instanceof ExternalLayout) {
          count = count.decode(b, offset2);
        }
        if (0 < this.elementLayout.span) {
          span = count * this.elementLayout.span;
        } else {
          let idx = 0;
          while (idx < count) {
            span += this.elementLayout.getSpan(b, offset2 + span);
            ++idx;
          }
        }
        return span;
      }
      decode(b, offset2 = 0) {
        const rv = [];
        let i = 0;
        let count = this.count;
        if (count instanceof ExternalLayout) {
          count = count.decode(b, offset2);
        }
        while (i < count) {
          rv.push(this.elementLayout.decode(b, offset2));
          offset2 += this.elementLayout.getSpan(b, offset2);
          i += 1;
        }
        return rv;
      }
      encode(src, b, offset2 = 0) {
        const elo = this.elementLayout;
        const span = src.reduce((span2, v) => {
          return span2 + elo.encode(v, b, offset2 + span2);
        }, 0);
        if (this.count instanceof ExternalLayout) {
          this.count.encode(src.length, b, offset2);
        }
        return span;
      }
    };
    exports.Sequence = Sequence;
    var Structure = class extends Layout {
      constructor(fields, property, decodePrefixes) {
        if (!(Array.isArray(fields) && fields.reduce((acc, v) => acc && v instanceof Layout, true))) {
          throw new TypeError("fields must be array of Layout instances");
        }
        if (typeof property === "boolean" && decodePrefixes === void 0) {
          decodePrefixes = property;
          property = void 0;
        }
        for (const fd of fields) {
          if (0 > fd.span && fd.property === void 0) {
            throw new Error("fields cannot contain unnamed variable-length layout");
          }
        }
        let span = -1;
        try {
          span = fields.reduce((span2, fd) => span2 + fd.getSpan(), 0);
        } catch (e) {
        }
        super(span, property);
        this.fields = fields;
        this.decodePrefixes = !!decodePrefixes;
      }
      getSpan(b, offset2 = 0) {
        if (0 <= this.span) {
          return this.span;
        }
        let span = 0;
        try {
          span = this.fields.reduce((span2, fd) => {
            const fsp = fd.getSpan(b, offset2);
            offset2 += fsp;
            return span2 + fsp;
          }, 0);
        } catch (e) {
          throw new RangeError("indeterminate span");
        }
        return span;
      }
      decode(b, offset2 = 0) {
        checkUint8Array(b);
        const dest = this.makeDestinationObject();
        for (const fd of this.fields) {
          if (fd.property !== void 0) {
            dest[fd.property] = fd.decode(b, offset2);
          }
          offset2 += fd.getSpan(b, offset2);
          if (this.decodePrefixes && b.length === offset2) {
            break;
          }
        }
        return dest;
      }
      encode(src, b, offset2 = 0) {
        const firstOffset = offset2;
        let lastOffset = 0;
        let lastWrote = 0;
        for (const fd of this.fields) {
          let span = fd.span;
          lastWrote = 0 < span ? span : 0;
          if (fd.property !== void 0) {
            const fv = src[fd.property];
            if (fv !== void 0) {
              lastWrote = fd.encode(fv, b, offset2);
              if (0 > span) {
                span = fd.getSpan(b, offset2);
              }
            }
          }
          lastOffset = offset2;
          offset2 += span;
        }
        return lastOffset + lastWrote - firstOffset;
      }
      fromArray(values) {
        const dest = this.makeDestinationObject();
        for (const fd of this.fields) {
          if (fd.property !== void 0 && 0 < values.length) {
            dest[fd.property] = values.shift();
          }
        }
        return dest;
      }
      layoutFor(property) {
        if (typeof property !== "string") {
          throw new TypeError("property must be string");
        }
        for (const fd of this.fields) {
          if (fd.property === property) {
            return fd;
          }
        }
        return void 0;
      }
      offsetOf(property) {
        if (typeof property !== "string") {
          throw new TypeError("property must be string");
        }
        let offset2 = 0;
        for (const fd of this.fields) {
          if (fd.property === property) {
            return offset2;
          }
          if (0 > fd.span) {
            offset2 = -1;
          } else if (0 <= offset2) {
            offset2 += fd.span;
          }
        }
        return void 0;
      }
    };
    exports.Structure = Structure;
    var UnionDiscriminator = class {
      constructor(property) {
        this.property = property;
      }
      decode(b, offset2) {
        throw new Error("UnionDiscriminator is abstract");
      }
      encode(src, b, offset2) {
        throw new Error("UnionDiscriminator is abstract");
      }
    };
    exports.UnionDiscriminator = UnionDiscriminator;
    var UnionLayoutDiscriminator = class extends UnionDiscriminator {
      constructor(layout, property) {
        if (!(layout instanceof ExternalLayout && layout.isCount())) {
          throw new TypeError("layout must be an unsigned integer ExternalLayout");
        }
        super(property || layout.property || "variant");
        this.layout = layout;
      }
      decode(b, offset2) {
        return this.layout.decode(b, offset2);
      }
      encode(src, b, offset2) {
        return this.layout.encode(src, b, offset2);
      }
    };
    exports.UnionLayoutDiscriminator = UnionLayoutDiscriminator;
    var Union = class extends Layout {
      constructor(discr, defaultLayout, property) {
        let discriminator;
        if (discr instanceof UInt || discr instanceof UIntBE) {
          discriminator = new UnionLayoutDiscriminator(new OffsetLayout(discr));
        } else if (discr instanceof ExternalLayout && discr.isCount()) {
          discriminator = new UnionLayoutDiscriminator(discr);
        } else if (!(discr instanceof UnionDiscriminator)) {
          throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
        } else {
          discriminator = discr;
        }
        if (defaultLayout === void 0) {
          defaultLayout = null;
        }
        if (!(defaultLayout === null || defaultLayout instanceof Layout)) {
          throw new TypeError("defaultLayout must be null or a Layout");
        }
        if (defaultLayout !== null) {
          if (0 > defaultLayout.span) {
            throw new Error("defaultLayout must have constant span");
          }
          if (defaultLayout.property === void 0) {
            defaultLayout = defaultLayout.replicate("content");
          }
        }
        let span = -1;
        if (defaultLayout) {
          span = defaultLayout.span;
          if (0 <= span && (discr instanceof UInt || discr instanceof UIntBE)) {
            span += discriminator.layout.span;
          }
        }
        super(span, property);
        this.discriminator = discriminator;
        this.usesPrefixDiscriminator = discr instanceof UInt || discr instanceof UIntBE;
        this.defaultLayout = defaultLayout;
        this.registry = {};
        let boundGetSourceVariant = this.defaultGetSourceVariant.bind(this);
        this.getSourceVariant = function(src) {
          return boundGetSourceVariant(src);
        };
        this.configGetSourceVariant = function(gsv) {
          boundGetSourceVariant = gsv.bind(this);
        };
      }
      getSpan(b, offset2 = 0) {
        if (0 <= this.span) {
          return this.span;
        }
        const vlo = this.getVariant(b, offset2);
        if (!vlo) {
          throw new Error("unable to determine span for unrecognized variant");
        }
        return vlo.getSpan(b, offset2);
      }
      defaultGetSourceVariant(src) {
        if (Object.prototype.hasOwnProperty.call(src, this.discriminator.property)) {
          if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(src, this.defaultLayout.property)) {
            return void 0;
          }
          const vlo = this.registry[src[this.discriminator.property]];
          if (vlo && (!vlo.layout || vlo.property && Object.prototype.hasOwnProperty.call(src, vlo.property))) {
            return vlo;
          }
        } else {
          for (const tag in this.registry) {
            const vlo = this.registry[tag];
            if (vlo.property && Object.prototype.hasOwnProperty.call(src, vlo.property)) {
              return vlo;
            }
          }
        }
        throw new Error("unable to infer src variant");
      }
      decode(b, offset2 = 0) {
        let dest;
        const dlo = this.discriminator;
        const discr = dlo.decode(b, offset2);
        const clo = this.registry[discr];
        if (clo === void 0) {
          const defaultLayout = this.defaultLayout;
          let contentOffset = 0;
          if (this.usesPrefixDiscriminator) {
            contentOffset = dlo.layout.span;
          }
          dest = this.makeDestinationObject();
          dest[dlo.property] = discr;
          dest[defaultLayout.property] = defaultLayout.decode(b, offset2 + contentOffset);
        } else {
          dest = clo.decode(b, offset2);
        }
        return dest;
      }
      encode(src, b, offset2 = 0) {
        const vlo = this.getSourceVariant(src);
        if (vlo === void 0) {
          const dlo = this.discriminator;
          const clo = this.defaultLayout;
          let contentOffset = 0;
          if (this.usesPrefixDiscriminator) {
            contentOffset = dlo.layout.span;
          }
          dlo.encode(src[dlo.property], b, offset2);
          return contentOffset + clo.encode(src[clo.property], b, offset2 + contentOffset);
        }
        return vlo.encode(src, b, offset2);
      }
      addVariant(variant, layout, property) {
        const rv = new VariantLayout(this, variant, layout, property);
        this.registry[variant] = rv;
        return rv;
      }
      getVariant(vb, offset2 = 0) {
        let variant;
        if (vb instanceof Uint8Array) {
          variant = this.discriminator.decode(vb, offset2);
        } else {
          variant = vb;
        }
        return this.registry[variant];
      }
    };
    exports.Union = Union;
    var VariantLayout = class extends Layout {
      constructor(union2, variant, layout, property) {
        if (!(union2 instanceof Union)) {
          throw new TypeError("union must be a Union");
        }
        if (!Number.isInteger(variant) || 0 > variant) {
          throw new TypeError("variant must be a (non-negative) integer");
        }
        if (typeof layout === "string" && property === void 0) {
          property = layout;
          layout = null;
        }
        if (layout) {
          if (!(layout instanceof Layout)) {
            throw new TypeError("layout must be a Layout");
          }
          if (union2.defaultLayout !== null && 0 <= layout.span && layout.span > union2.defaultLayout.span) {
            throw new Error("variant span exceeds span of containing union");
          }
          if (typeof property !== "string") {
            throw new TypeError("variant must have a String property");
          }
        }
        let span = union2.span;
        if (0 > union2.span) {
          span = layout ? layout.span : 0;
          if (0 <= span && union2.usesPrefixDiscriminator) {
            span += union2.discriminator.layout.span;
          }
        }
        super(span, property);
        this.union = union2;
        this.variant = variant;
        this.layout = layout || null;
      }
      getSpan(b, offset2 = 0) {
        if (0 <= this.span) {
          return this.span;
        }
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
          contentOffset = this.union.discriminator.layout.span;
        }
        let span = 0;
        if (this.layout) {
          span = this.layout.getSpan(b, offset2 + contentOffset);
        }
        return contentOffset + span;
      }
      decode(b, offset2 = 0) {
        const dest = this.makeDestinationObject();
        if (this !== this.union.getVariant(b, offset2)) {
          throw new Error("variant mismatch");
        }
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
          contentOffset = this.union.discriminator.layout.span;
        }
        if (this.layout) {
          dest[this.property] = this.layout.decode(b, offset2 + contentOffset);
        } else if (this.property) {
          dest[this.property] = true;
        } else if (this.union.usesPrefixDiscriminator) {
          dest[this.union.discriminator.property] = this.variant;
        }
        return dest;
      }
      encode(src, b, offset2 = 0) {
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
          contentOffset = this.union.discriminator.layout.span;
        }
        if (this.layout && !Object.prototype.hasOwnProperty.call(src, this.property)) {
          throw new TypeError("variant lacks property " + this.property);
        }
        this.union.discriminator.encode(this.variant, b, offset2);
        let span = contentOffset;
        if (this.layout) {
          this.layout.encode(src[this.property], b, offset2 + contentOffset);
          span += this.layout.getSpan(b, offset2 + contentOffset);
          if (0 <= this.union.span && span > this.union.span) {
            throw new Error("encoded variant overruns containing union");
          }
        }
        return span;
      }
      fromArray(values) {
        if (this.layout) {
          return this.layout.fromArray(values);
        }
        return void 0;
      }
    };
    exports.VariantLayout = VariantLayout;
    function fixBitwiseResult(v) {
      if (0 > v) {
        v += 4294967296;
      }
      return v;
    }
    var BitStructure = class extends Layout {
      constructor(word, msb, property) {
        if (!(word instanceof UInt || word instanceof UIntBE)) {
          throw new TypeError("word must be a UInt or UIntBE layout");
        }
        if (typeof msb === "string" && property === void 0) {
          property = msb;
          msb = false;
        }
        if (4 < word.span) {
          throw new RangeError("word cannot exceed 32 bits");
        }
        super(word.span, property);
        this.word = word;
        this.msb = !!msb;
        this.fields = [];
        let value = 0;
        this._packedSetValue = function(v) {
          value = fixBitwiseResult(v);
          return this;
        };
        this._packedGetValue = function() {
          return value;
        };
      }
      decode(b, offset2 = 0) {
        const dest = this.makeDestinationObject();
        const value = this.word.decode(b, offset2);
        this._packedSetValue(value);
        for (const fd of this.fields) {
          if (fd.property !== void 0) {
            dest[fd.property] = fd.decode(b);
          }
        }
        return dest;
      }
      encode(src, b, offset2 = 0) {
        const value = this.word.decode(b, offset2);
        this._packedSetValue(value);
        for (const fd of this.fields) {
          if (fd.property !== void 0) {
            const fv = src[fd.property];
            if (fv !== void 0) {
              fd.encode(fv);
            }
          }
        }
        return this.word.encode(this._packedGetValue(), b, offset2);
      }
      addField(bits, property) {
        const bf = new BitField(this, bits, property);
        this.fields.push(bf);
        return bf;
      }
      addBoolean(property) {
        const bf = new Boolean2(this, property);
        this.fields.push(bf);
        return bf;
      }
      fieldFor(property) {
        if (typeof property !== "string") {
          throw new TypeError("property must be string");
        }
        for (const fd of this.fields) {
          if (fd.property === property) {
            return fd;
          }
        }
        return void 0;
      }
    };
    exports.BitStructure = BitStructure;
    var BitField = class {
      constructor(container, bits, property) {
        if (!(container instanceof BitStructure)) {
          throw new TypeError("container must be a BitStructure");
        }
        if (!Number.isInteger(bits) || 0 >= bits) {
          throw new TypeError("bits must be positive integer");
        }
        const totalBits = 8 * container.span;
        const usedBits = container.fields.reduce((sum, fd) => sum + fd.bits, 0);
        if (bits + usedBits > totalBits) {
          throw new Error("bits too long for span remainder (" + (totalBits - usedBits) + " of " + totalBits + " remain)");
        }
        this.container = container;
        this.bits = bits;
        this.valueMask = (1 << bits) - 1;
        if (bits === 32) {
          this.valueMask = 4294967295;
        }
        this.start = usedBits;
        if (this.container.msb) {
          this.start = totalBits - usedBits - bits;
        }
        this.wordMask = fixBitwiseResult(this.valueMask << this.start);
        this.property = property;
      }
      decode(b, offset2) {
        const word = this.container._packedGetValue();
        const wordValue = fixBitwiseResult(word & this.wordMask);
        const value = wordValue >>> this.start;
        return value;
      }
      encode(value) {
        if (typeof value !== "number" || !Number.isInteger(value) || value !== fixBitwiseResult(value & this.valueMask)) {
          throw new TypeError(nameWithProperty("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
        }
        const word = this.container._packedGetValue();
        const wordValue = fixBitwiseResult(value << this.start);
        this.container._packedSetValue(fixBitwiseResult(word & ~this.wordMask) | wordValue);
      }
    };
    exports.BitField = BitField;
    var Boolean2 = class extends BitField {
      constructor(container, property) {
        super(container, 1, property);
      }
      decode(b, offset2) {
        return !!super.decode(b, offset2);
      }
      encode(value) {
        if (typeof value === "boolean") {
          value = +value;
        }
        super.encode(value);
      }
    };
    exports.Boolean = Boolean2;
    var Blob = class extends Layout {
      constructor(length, property) {
        if (!(length instanceof ExternalLayout && length.isCount() || Number.isInteger(length) && 0 <= length)) {
          throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
        }
        let span = -1;
        if (!(length instanceof ExternalLayout)) {
          span = length;
        }
        super(span, property);
        this.length = length;
      }
      getSpan(b, offset2) {
        let span = this.span;
        if (0 > span) {
          span = this.length.decode(b, offset2);
        }
        return span;
      }
      decode(b, offset2 = 0) {
        let span = this.span;
        if (0 > span) {
          span = this.length.decode(b, offset2);
        }
        return uint8ArrayToBuffer(b).slice(offset2, offset2 + span);
      }
      encode(src, b, offset2) {
        let span = this.length;
        if (this.length instanceof ExternalLayout) {
          span = src.length;
        }
        if (!(src instanceof Uint8Array && span === src.length)) {
          throw new TypeError(nameWithProperty("Blob.encode", this) + " requires (length " + span + ") Uint8Array as src");
        }
        if (offset2 + span > b.length) {
          throw new RangeError("encoding overruns Uint8Array");
        }
        const srcBuffer = uint8ArrayToBuffer(src);
        uint8ArrayToBuffer(b).write(srcBuffer.toString("hex"), offset2, span, "hex");
        if (this.length instanceof ExternalLayout) {
          this.length.encode(span, b, offset2);
        }
        return span;
      }
    };
    exports.Blob = Blob;
    var CString = class extends Layout {
      constructor(property) {
        super(-1, property);
      }
      getSpan(b, offset2 = 0) {
        checkUint8Array(b);
        let idx = offset2;
        while (idx < b.length && b[idx] !== 0) {
          idx += 1;
        }
        return 1 + idx - offset2;
      }
      decode(b, offset2 = 0) {
        const span = this.getSpan(b, offset2);
        return uint8ArrayToBuffer(b).slice(offset2, offset2 + span - 1).toString("utf-8");
      }
      encode(src, b, offset2 = 0) {
        if (typeof src !== "string") {
          src = String(src);
        }
        const srcb = buffer_1.Buffer.from(src, "utf8");
        const span = srcb.length;
        if (offset2 + span > b.length) {
          throw new RangeError("encoding overruns Buffer");
        }
        const buffer = uint8ArrayToBuffer(b);
        srcb.copy(buffer, offset2);
        buffer[offset2 + span] = 0;
        return span + 1;
      }
    };
    exports.CString = CString;
    var UTF8 = class extends Layout {
      constructor(maxSpan, property) {
        if (typeof maxSpan === "string" && property === void 0) {
          property = maxSpan;
          maxSpan = void 0;
        }
        if (maxSpan === void 0) {
          maxSpan = -1;
        } else if (!Number.isInteger(maxSpan)) {
          throw new TypeError("maxSpan must be an integer");
        }
        super(-1, property);
        this.maxSpan = maxSpan;
      }
      getSpan(b, offset2 = 0) {
        checkUint8Array(b);
        return b.length - offset2;
      }
      decode(b, offset2 = 0) {
        const span = this.getSpan(b, offset2);
        if (0 <= this.maxSpan && this.maxSpan < span) {
          throw new RangeError("text length exceeds maxSpan");
        }
        return uint8ArrayToBuffer(b).slice(offset2, offset2 + span).toString("utf-8");
      }
      encode(src, b, offset2 = 0) {
        if (typeof src !== "string") {
          src = String(src);
        }
        const srcb = buffer_1.Buffer.from(src, "utf8");
        const span = srcb.length;
        if (0 <= this.maxSpan && this.maxSpan < span) {
          throw new RangeError("text length exceeds maxSpan");
        }
        if (offset2 + span > b.length) {
          throw new RangeError("encoding overruns Buffer");
        }
        srcb.copy(uint8ArrayToBuffer(b), offset2);
        return span;
      }
    };
    exports.UTF8 = UTF8;
    var Constant = class extends Layout {
      constructor(value, property) {
        super(0, property);
        this.value = value;
      }
      decode(b, offset2) {
        return this.value;
      }
      encode(src, b, offset2) {
        return 0;
      }
    };
    exports.Constant = Constant;
    exports.greedy = (elementSpan, property) => new GreedyCount(elementSpan, property);
    exports.offset = (layout, offset2, property) => new OffsetLayout(layout, offset2, property);
    exports.u8 = (property) => new UInt(1, property);
    exports.u16 = (property) => new UInt(2, property);
    exports.u24 = (property) => new UInt(3, property);
    exports.u32 = (property) => new UInt(4, property);
    exports.u40 = (property) => new UInt(5, property);
    exports.u48 = (property) => new UInt(6, property);
    exports.nu64 = (property) => new NearUInt64(property);
    exports.u16be = (property) => new UIntBE(2, property);
    exports.u24be = (property) => new UIntBE(3, property);
    exports.u32be = (property) => new UIntBE(4, property);
    exports.u40be = (property) => new UIntBE(5, property);
    exports.u48be = (property) => new UIntBE(6, property);
    exports.nu64be = (property) => new NearUInt64BE(property);
    exports.s8 = (property) => new Int(1, property);
    exports.s16 = (property) => new Int(2, property);
    exports.s24 = (property) => new Int(3, property);
    exports.s32 = (property) => new Int(4, property);
    exports.s40 = (property) => new Int(5, property);
    exports.s48 = (property) => new Int(6, property);
    exports.ns64 = (property) => new NearInt64(property);
    exports.s16be = (property) => new IntBE(2, property);
    exports.s24be = (property) => new IntBE(3, property);
    exports.s32be = (property) => new IntBE(4, property);
    exports.s40be = (property) => new IntBE(5, property);
    exports.s48be = (property) => new IntBE(6, property);
    exports.ns64be = (property) => new NearInt64BE(property);
    exports.f32 = (property) => new Float(property);
    exports.f32be = (property) => new FloatBE(property);
    exports.f64 = (property) => new Double(property);
    exports.f64be = (property) => new DoubleBE(property);
    exports.struct = (fields, property, decodePrefixes) => new Structure(fields, property, decodePrefixes);
    exports.bits = (word, msb, property) => new BitStructure(word, msb, property);
    exports.seq = (elementLayout, count, property) => new Sequence(elementLayout, count, property);
    exports.union = (discr, defaultLayout, property) => new Union(discr, defaultLayout, property);
    exports.unionLayoutDiscriminator = (layout, property) => new UnionLayoutDiscriminator(layout, property);
    exports.blob = (length, property) => new Blob(length, property);
    exports.cstr = (property) => new CString(property);
    exports.utf8 = (maxSpan, property) => new UTF8(maxSpan, property);
    exports.constant = (value, property) => new Constant(value, property);
  });

  // node_modules/bigint-buffer/dist/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var converter;
    function toBigIntLE2(buf) {
      {
        const reversed = Buffer.from(buf);
        reversed.reverse();
        const hex = reversed.toString("hex");
        if (hex.length === 0) {
          return BigInt(0);
        }
        return BigInt(`0x${hex}`);
      }
      return converter.toBigInt(buf, false);
    }
    exports.toBigIntLE = toBigIntLE2;
    function toBigIntBE(buf) {
      {
        const hex = buf.toString("hex");
        if (hex.length === 0) {
          return BigInt(0);
        }
        return BigInt(`0x${hex}`);
      }
      return converter.toBigInt(buf, true);
    }
    exports.toBigIntBE = toBigIntBE;
    function toBufferLE2(num, width) {
      {
        const hex = num.toString(16);
        const buffer = Buffer.from(hex.padStart(width * 2, "0").slice(0, width * 2), "hex");
        buffer.reverse();
        return buffer;
      }
      return converter.fromBigInt(num, Buffer.allocUnsafe(width), false);
    }
    exports.toBufferLE = toBufferLE2;
    function toBufferBE(num, width) {
      {
        const hex = num.toString(16);
        return Buffer.from(hex.padStart(width * 2, "0").slice(0, width * 2), "hex");
      }
      return converter.fromBigInt(num, Buffer.allocUnsafe(width), true);
    }
    exports.toBufferBE = toBufferBE;
  });

  // node_modules/jayson/node_modules/uuid/dist/rng-browser.js
  var require_rng_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rng;
    var getRandomValues;
    var rnds8 = new Uint8Array(16);
    function rng() {
      if (!getRandomValues) {
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
        if (!getRandomValues) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return getRandomValues(rnds8);
    }
  });

  // node_modules/jayson/node_modules/uuid/dist/regex.js
  var require_regex = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/validate.js
  var require_validate = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regex = _interopRequireDefault(require_regex());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function validate2(uuid) {
      return typeof uuid === "string" && _regex.default.test(uuid);
    }
    var _default = validate2;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/stringify.js
  var require_stringify = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).substr(1));
    }
    function stringify(arr, offset2 = 0) {
      const uuid = (byteToHex[arr[offset2 + 0]] + byteToHex[arr[offset2 + 1]] + byteToHex[arr[offset2 + 2]] + byteToHex[arr[offset2 + 3]] + "-" + byteToHex[arr[offset2 + 4]] + byteToHex[arr[offset2 + 5]] + "-" + byteToHex[arr[offset2 + 6]] + byteToHex[arr[offset2 + 7]] + "-" + byteToHex[arr[offset2 + 8]] + byteToHex[arr[offset2 + 9]] + "-" + byteToHex[arr[offset2 + 10]] + byteToHex[arr[offset2 + 11]] + byteToHex[arr[offset2 + 12]] + byteToHex[arr[offset2 + 13]] + byteToHex[arr[offset2 + 14]] + byteToHex[arr[offset2 + 15]]).toLowerCase();
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return uuid;
    }
    var _default = stringify;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/v1.js
  var require_v1 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng_browser());
    var _stringify = _interopRequireDefault(require_stringify());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v1(options, buf, offset2) {
      let i = buf && offset2 || 0;
      const b = buf || new Array(16);
      options = options || {};
      let node = options.node || _nodeId;
      let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || _rng.default)();
        if (node == null) {
          node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
      let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      const tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (let n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf || (0, _stringify.default)(b);
    }
    var _default = v1;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/parse.js
  var require_parse = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function parse(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      let v;
      const arr = new Uint8Array(16);
      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 255;
      arr[2] = v >>> 8 & 255;
      arr[3] = v & 255;
      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 255;
      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 255;
      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 255;
      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
      arr[11] = v / 4294967296 & 255;
      arr[12] = v >>> 24 & 255;
      arr[13] = v >>> 16 & 255;
      arr[14] = v >>> 8 & 255;
      arr[15] = v & 255;
      return arr;
    }
    var _default = parse;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/v35.js
  var require_v35 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    exports.URL = exports.DNS = void 0;
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      const bytes = [];
      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }
    var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports.DNS = DNS;
    var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports.URL = URL;
    function _default(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset2) {
        if (typeof value === "string") {
          value = stringToBytes(value);
        }
        if (typeof namespace === "string") {
          namespace = (0, _parse.default)(namespace);
        }
        if (namespace.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          offset2 = offset2 || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset2 + i] = bytes[i];
          }
          return buf;
        }
        return (0, _stringify.default)(bytes);
      }
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    }
  });

  // node_modules/jayson/node_modules/uuid/dist/md5-browser.js
  var require_md5_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function md5(bytes) {
      if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = new Uint8Array(msg.length);
        for (let i = 0; i < msg.length; ++i) {
          bytes[i] = msg.charCodeAt(i);
        }
      }
      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    function md5ToHexEncodedArray(input) {
      const output = [];
      const length32 = input.length * 32;
      const hexTab = "0123456789abcdef";
      for (let i = 0; i < length32; i += 8) {
        const x = input[i >> 5] >>> i % 32 & 255;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
        output.push(hex);
      }
      return output;
    }
    function getOutputLength(inputLength8) {
      return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    }
    function wordsToMd5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[getOutputLength(len) - 1] = len;
      let a = 1732584193;
      let b = -271733879;
      let c = -1732584194;
      let d = 271733878;
      for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }
      return [a, b, c, d];
    }
    function bytesToWords(input) {
      if (input.length === 0) {
        return [];
      }
      const length8 = input.length * 8;
      const output = new Uint32Array(getOutputLength(length8));
      for (let i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 255) << i % 32;
      }
      return output;
    }
    function safeAdd(x, y) {
      const lsw = (x & 65535) + (y & 65535);
      const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }
    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    var _default = md5;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/v3.js
  var require_v3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _md = _interopRequireDefault(require_md5_browser());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var v3 = (0, _v.default)("v3", 48, _md.default);
    var _default = v3;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/v4.js
  var require_v4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng_browser());
    var _stringify = _interopRequireDefault(require_stringify());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function v4(options, buf, offset2) {
      options = options || {};
      const rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        offset2 = offset2 || 0;
        for (let i = 0; i < 16; ++i) {
          buf[offset2 + i] = rnds[i];
        }
        return buf;
      }
      return (0, _stringify.default)(rnds);
    }
    var _default = v4;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/sha1-browser.js
  var require_sha1_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;
        case 1:
          return x ^ y ^ z;
        case 2:
          return x & y ^ x & z ^ y & z;
        case 3:
          return x ^ y ^ z;
      }
    }
    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }
    function sha1(bytes) {
      const K = [1518500249, 1859775393, 2400959708, 3395469782];
      const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = [];
        for (let i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      } else if (!Array.isArray(bytes)) {
        bytes = Array.prototype.slice.call(bytes);
      }
      bytes.push(128);
      const l = bytes.length / 4 + 2;
      const N = Math.ceil(l / 16);
      const M = new Array(N);
      for (let i = 0; i < N; ++i) {
        const arr = new Uint32Array(16);
        for (let j = 0; j < 16; ++j) {
          arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        }
        M[i] = arr;
      }
      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
      for (let i = 0; i < N; ++i) {
        const W = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) {
          W[t] = M[i][t];
        }
        for (let t = 16; t < 80; ++t) {
          W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for (let t = 0; t < 80; ++t) {
          const s = Math.floor(t / 20);
          const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }
      return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
    }
    var _default = sha1;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/v5.js
  var require_v5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _sha = _interopRequireDefault(require_sha1_browser());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var v5 = (0, _v.default)("v5", 80, _sha.default);
    var _default = v5;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/nil.js
  var require_nil = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = "00000000-0000-0000-0000-000000000000";
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/version.js
  var require_version = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function version(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      return parseInt(uuid.substr(14, 1), 16);
    }
    var _default = version;
    exports.default = _default;
  });

  // node_modules/jayson/node_modules/uuid/dist/index.js
  var require_dist = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "v1", {
      enumerable: true,
      get: function() {
        return _v.default;
      }
    });
    Object.defineProperty(exports, "v3", {
      enumerable: true,
      get: function() {
        return _v2.default;
      }
    });
    Object.defineProperty(exports, "v4", {
      enumerable: true,
      get: function() {
        return _v3.default;
      }
    });
    Object.defineProperty(exports, "v5", {
      enumerable: true,
      get: function() {
        return _v4.default;
      }
    });
    Object.defineProperty(exports, "NIL", {
      enumerable: true,
      get: function() {
        return _nil.default;
      }
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function() {
        return _version.default;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function() {
        return _validate.default;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function() {
        return _stringify.default;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function() {
        return _parse.default;
      }
    });
    var _v = _interopRequireDefault(require_v1());
    var _v2 = _interopRequireDefault(require_v3());
    var _v3 = _interopRequireDefault(require_v4());
    var _v4 = _interopRequireDefault(require_v5());
    var _nil = _interopRequireDefault(require_nil());
    var _version = _interopRequireDefault(require_version());
    var _validate = _interopRequireDefault(require_validate());
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
  });

  // node_modules/jayson/lib/generateRequest.js
  var require_generateRequest = __commonJS((exports, module) => {
    "use strict";
    var uuid = require_dist().v4;
    var generateRequest = function(method, params, id, options) {
      if (typeof method !== "string") {
        throw new TypeError(method + " must be a string");
      }
      options = options || {};
      const version = typeof options.version === "number" ? options.version : 2;
      if (version !== 1 && version !== 2) {
        throw new TypeError(version + " must be 1 or 2");
      }
      const request = {
        method
      };
      if (version === 2) {
        request.jsonrpc = "2.0";
      }
      if (params) {
        if (typeof params !== "object" && !Array.isArray(params)) {
          throw new TypeError(params + " must be an object, array or omitted");
        }
        request.params = params;
      }
      if (typeof id === "undefined") {
        const generator = typeof options.generator === "function" ? options.generator : function() {
          return uuid();
        };
        request.id = generator(request, options);
      } else if (version === 2 && id === null) {
        if (options.notificationIdNull) {
          request.id = null;
        }
      } else {
        request.id = id;
      }
      return request;
    };
    module.exports = generateRequest;
  });

  // node_modules/jayson/lib/client/browser/index.js
  var require_browser2 = __commonJS((exports, module) => {
    "use strict";
    var uuid = require_dist().v4;
    var generateRequest = require_generateRequest();
    var ClientBrowser = function(callServer, options) {
      if (!(this instanceof ClientBrowser)) {
        return new ClientBrowser(callServer, options);
      }
      if (!options) {
        options = {};
      }
      this.options = {
        reviver: typeof options.reviver !== "undefined" ? options.reviver : null,
        replacer: typeof options.replacer !== "undefined" ? options.replacer : null,
        generator: typeof options.generator !== "undefined" ? options.generator : function() {
          return uuid();
        },
        version: typeof options.version !== "undefined" ? options.version : 2,
        notificationIdNull: typeof options.notificationIdNull === "boolean" ? options.notificationIdNull : false
      };
      this.callServer = callServer;
    };
    module.exports = ClientBrowser;
    ClientBrowser.prototype.request = function(method, params, id, callback) {
      const self = this;
      let request = null;
      const isBatch = Array.isArray(method) && typeof params === "function";
      if (this.options.version === 1 && isBatch) {
        throw new TypeError("JSON-RPC 1.0 does not support batching");
      }
      const isRaw = !isBatch && method && typeof method === "object" && typeof params === "function";
      if (isBatch || isRaw) {
        callback = params;
        request = method;
      } else {
        if (typeof id === "function") {
          callback = id;
          id = void 0;
        }
        const hasCallback = typeof callback === "function";
        try {
          request = generateRequest(method, params, id, {
            generator: this.options.generator,
            version: this.options.version,
            notificationIdNull: this.options.notificationIdNull
          });
        } catch (err) {
          if (hasCallback) {
            return callback(err);
          }
          throw err;
        }
        if (!hasCallback) {
          return request;
        }
      }
      let message;
      try {
        message = JSON.stringify(request, this.options.replacer);
      } catch (err) {
        return callback(err);
      }
      this.callServer(message, function(err, response) {
        self._parseResponse(err, response, callback);
      });
      return request;
    };
    ClientBrowser.prototype._parseResponse = function(err, responseText, callback) {
      if (err) {
        callback(err);
        return;
      }
      if (!responseText) {
        return callback();
      }
      let response;
      try {
        response = JSON.parse(responseText, this.options.reviver);
      } catch (err2) {
        return callback(err2);
      }
      if (callback.length === 3) {
        if (Array.isArray(response)) {
          const isError = function(res) {
            return typeof res.error !== "undefined";
          };
          const isNotError = function(res) {
            return !isError(res);
          };
          return callback(null, response.filter(isError), response.filter(isNotError));
        } else {
          return callback(null, response.error, response.result);
        }
      }
      callback(null, response);
    };
  });

  // node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS((exports, module) => {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS((exports, module) => {
    function _typeof(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/regeneratorRuntime.js
  var require_regeneratorRuntime = __commonJS((exports, module) => {
    var _typeof = require_typeof()["default"];
    function _regeneratorRuntime() {
      "use strict";
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
        return e;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, {
          value: r2,
          enumerable: true,
          configurable: true,
          writable: true
        }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function define3(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", {
          value: makeInvokeMethod(t2, r2, c2)
        }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return {
            type: "normal",
            arg: t2.call(e2, r2)
          };
        } catch (t3) {
          return {
            type: "throw",
            arg: t3
          };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if (c2.type !== "throw") {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && _typeof(h2) == "object" && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", {
          value: function value(t3, n2) {
            function callInvokeWithMethodAndArg() {
              return new e2(function(e3, r3) {
                invoke(t3, n2, e3, r3);
              });
            }
            return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if (i2 === "throw")
              throw a2;
            return {
              value: t,
              done: true
            };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if (n2.method === "next")
              n2.sent = n2._sent = n2.arg;
            else if (n2.method === "throw") {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              n2.method === "return" && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if (p2.type === "normal") {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return {
                value: p2.arg,
                done: n2.done
              };
            }
            p2.type === "throw" && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, n2 === "throw" && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), r2.method === "throw") || n2 !== "return" && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if (i2.type === "throw")
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, r2.method !== "return" && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = {
          tryLoc: t2[0]
        };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t2.forEach(pushTryEntry, this), this.reset(true);
      }
      function values(e2) {
        if (e2 || e2 === "") {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if (typeof e2.next == "function")
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = false, next;
              return next.value = t, next.done = true, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(_typeof(e2) + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = typeof t2 == "function" && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || (e2.displayName || e2.name) === "GeneratorFunction");
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return {
          __await: t2
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        i2 === void 0 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e2) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
            for (var r2 in this)
              r2.charAt(0) === "t" && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
        },
        stop: function stop() {
          this.done = true;
          var t2 = this.tryEntries[0].completion;
          if (t2.type === "throw")
            throw t2.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(e2) {
          if (this.done)
            throw e2;
          var r2 = this;
          function handle(n2, o3) {
            return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
          }
          for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
            var i2 = this.tryEntries[o2], a2 = i2.completion;
            if (i2.tryLoc === "root")
              return handle("end");
            if (i2.tryLoc <= this.prev) {
              var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
              if (c2 && u2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              } else if (c2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
              } else {
                if (!u2)
                  throw new Error("try statement without catch or finally");
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t2, e2) {
          for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
            var o2 = this.tryEntries[r2];
            if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
              var i2 = o2;
              break;
            }
          }
          i2 && (t2 === "break" || t2 === "continue") && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
          var a2 = i2 ? i2.completion : {};
          return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
        },
        complete: function complete(t2, e2) {
          if (t2.type === "throw")
            throw t2.arg;
          return t2.type === "break" || t2.type === "continue" ? this.next = t2.arg : t2.type === "return" ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : t2.type === "normal" && e2 && (this.next = e2), y;
        },
        finish: function finish(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.finallyLoc === t2)
              return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
          }
        },
        catch: function _catch(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.tryLoc === t2) {
              var n2 = r2.completion;
              if (n2.type === "throw") {
                var o2 = n2.arg;
                resetTryEntry(r2);
              }
              return o2;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e2, r2, n2) {
          return this.delegate = {
            iterator: values(e2),
            resultName: r2,
            nextLoc: n2
          }, this.method === "next" && (this.arg = t), y;
        }
      }, e;
    }
    module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/regenerator/index.js
  var require_regenerator = __commonJS((exports, module) => {
    var runtime = require_regeneratorRuntime()();
    module.exports = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  });

  // node_modules/@babel/runtime/helpers/asyncToGenerator.js
  var require_asyncToGenerator = __commonJS((exports, module) => {
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/classCallCheck.js
  var require_classCallCheck = __commonJS((exports, module) => {
    function _classCallCheck(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/toPrimitive.js
  var require_toPrimitive = __commonJS((exports, module) => {
    var _typeof = require_typeof()["default"];
    function toPrimitive(t, r) {
      if (_typeof(t) != "object" || !t)
        return t;
      var e = t[Symbol.toPrimitive];
      if (e !== void 0) {
        var i = e.call(t, r || "default");
        if (_typeof(i) != "object")
          return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(t);
    }
    module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/toPropertyKey.js
  var require_toPropertyKey = __commonJS((exports, module) => {
    var _typeof = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function toPropertyKey(t) {
      var i = toPrimitive(t, "string");
      return _typeof(i) == "symbol" ? i : String(i);
    }
    module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/createClass.js
  var require_createClass = __commonJS((exports, module) => {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/setPrototypeOf.js
  var require_setPrototypeOf = __commonJS((exports, module) => {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _setPrototypeOf(o, p);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/inherits.js
  var require_inherits = __commonJS((exports, module) => {
    var setPrototypeOf = require_setPrototypeOf();
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass)
        setPrototypeOf(subClass, superClass);
    }
    module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/assertThisInitialized.js
  var require_assertThisInitialized = __commonJS((exports, module) => {
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
  var require_possibleConstructorReturn = __commonJS((exports, module) => {
    var _typeof = require_typeof()["default"];
    var assertThisInitialized = require_assertThisInitialized();
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return assertThisInitialized(self);
    }
    module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/@babel/runtime/helpers/getPrototypeOf.js
  var require_getPrototypeOf = __commonJS((exports, module) => {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _getPrototypeOf(o);
    }
    module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // node_modules/eventemitter3/index.js
  var require_eventemitter3 = __commonJS((exports, module) => {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if (typeof module !== "undefined") {
      module.exports = EventEmitter;
    }
  });

  // node_modules/rpc-websockets/dist/lib/utils.js
  var require_utils3 = __commonJS((exports) => {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DefaultDataPack = void 0;
    exports.createError = createError;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var errors = new Map([[-32e3, "Event not provided"], [-32600, "Invalid Request"], [-32601, "Method not found"], [-32602, "Invalid params"], [-32603, "Internal error"], [-32604, "Params not found"], [-32605, "Method forbidden"], [-32606, "Event forbidden"], [-32700, "Parse error"]]);
    var DefaultDataPack = /* @__PURE__ */ function() {
      function DefaultDataPack2() {
        (0, _classCallCheck2["default"])(this, DefaultDataPack2);
      }
      (0, _createClass2["default"])(DefaultDataPack2, [{
        key: "encode",
        value: function encode(value) {
          return JSON.stringify(value);
        }
      }, {
        key: "decode",
        value: function decode(value) {
          return JSON.parse(value);
        }
      }]);
      return DefaultDataPack2;
    }();
    exports.DefaultDataPack = DefaultDataPack;
    function createError(code, details) {
      var error = {
        code,
        message: errors.get(code) || "Internal Server Error"
      };
      if (details)
        error["data"] = details;
      return error;
    }
  });

  // node_modules/rpc-websockets/dist/lib/client.js
  var require_client = __commonJS((exports) => {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _regenerator = _interopRequireDefault(require_regenerator());
    var _asyncToGenerator2 = _interopRequireDefault(require_asyncToGenerator());
    var _typeof2 = _interopRequireDefault(require_typeof());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _eventemitter = require_eventemitter3();
    var _utils = require_utils3();
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = (0, _getPrototypeOf2["default"])(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return (0, _possibleConstructorReturn2["default"])(this, result);
      };
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var __rest2 = function(s, e) {
      var t = {};
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      }
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var CommonClient = /* @__PURE__ */ function(_EventEmitter) {
      (0, _inherits2["default"])(CommonClient2, _EventEmitter);
      var _super = _createSuper(CommonClient2);
      function CommonClient2(webSocketFactory) {
        var _this;
        var address = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080";
        var _a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var generate_request_id = arguments.length > 3 ? arguments[3] : void 0;
        var dataPack = arguments.length > 4 ? arguments[4] : void 0;
        (0, _classCallCheck2["default"])(this, CommonClient2);
        var _a$autoconnect = _a.autoconnect, autoconnect = _a$autoconnect === void 0 ? true : _a$autoconnect, _a$reconnect = _a.reconnect, reconnect = _a$reconnect === void 0 ? true : _a$reconnect, _a$reconnect_interval = _a.reconnect_interval, reconnect_interval = _a$reconnect_interval === void 0 ? 1e3 : _a$reconnect_interval, _a$max_reconnects = _a.max_reconnects, max_reconnects = _a$max_reconnects === void 0 ? 5 : _a$max_reconnects, rest_options = __rest2(_a, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
        _this = _super.call(this);
        _this.webSocketFactory = webSocketFactory;
        _this.queue = {};
        _this.rpc_id = 0;
        _this.address = address;
        _this.autoconnect = autoconnect;
        _this.ready = false;
        _this.reconnect = reconnect;
        _this.reconnect_timer_id = void 0;
        _this.reconnect_interval = reconnect_interval;
        _this.max_reconnects = max_reconnects;
        _this.rest_options = rest_options;
        _this.current_reconnects = 0;
        _this.generate_request_id = generate_request_id || function() {
          return ++_this.rpc_id;
        };
        if (!dataPack)
          _this.dataPack = new _utils.DefaultDataPack();
        else
          _this.dataPack = dataPack;
        if (_this.autoconnect)
          _this._connect(_this.address, Object.assign({
            autoconnect: _this.autoconnect,
            reconnect: _this.reconnect,
            reconnect_interval: _this.reconnect_interval,
            max_reconnects: _this.max_reconnects
          }, _this.rest_options));
        return _this;
      }
      (0, _createClass2["default"])(CommonClient2, [{
        key: "connect",
        value: function connect() {
          if (this.socket)
            return;
          this._connect(this.address, Object.assign({
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects
          }, this.rest_options));
        }
      }, {
        key: "call",
        value: function call(method, params, timeout, ws_opts) {
          var _this2 = this;
          if (!ws_opts && (0, _typeof2["default"])(timeout) === "object") {
            ws_opts = timeout;
            timeout = null;
          }
          return new Promise(function(resolve, reject) {
            if (!_this2.ready)
              return reject(new Error("socket not ready"));
            var rpc_id = _this2.generate_request_id(method, params);
            var message = {
              jsonrpc: "2.0",
              method,
              params: params || void 0,
              id: rpc_id
            };
            _this2.socket.send(_this2.dataPack.encode(message), ws_opts, function(error) {
              if (error)
                return reject(error);
              _this2.queue[rpc_id] = {
                promise: [resolve, reject]
              };
              if (timeout) {
                _this2.queue[rpc_id].timeout = setTimeout(function() {
                  delete _this2.queue[rpc_id];
                  reject(new Error("reply timeout"));
                }, timeout);
              }
            });
          });
        }
      }, {
        key: "login",
        value: function() {
          var _login = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee(params) {
            var resp;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.call("rpc.login", params);
                  case 2:
                    resp = _context.sent;
                    if (resp) {
                      _context.next = 5;
                      break;
                    }
                    throw new Error("authentication failed");
                  case 5:
                    return _context.abrupt("return", resp);
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
          function login(_x) {
            return _login.apply(this, arguments);
          }
          return login;
        }()
      }, {
        key: "listMethods",
        value: function() {
          var _listMethods = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee2() {
            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.call("__listMethods");
                  case 2:
                    return _context2.abrupt("return", _context2.sent);
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
          function listMethods() {
            return _listMethods.apply(this, arguments);
          }
          return listMethods;
        }()
      }, {
        key: "notify",
        value: function notify(method, params) {
          var _this3 = this;
          return new Promise(function(resolve, reject) {
            if (!_this3.ready)
              return reject(new Error("socket not ready"));
            var message = {
              jsonrpc: "2.0",
              method,
              params
            };
            _this3.socket.send(_this3.dataPack.encode(message), function(error) {
              if (error)
                return reject(error);
              resolve();
            });
          });
        }
      }, {
        key: "subscribe",
        value: function() {
          var _subscribe = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee3(event) {
            var result;
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (typeof event === "string")
                      event = [event];
                    _context3.next = 3;
                    return this.call("rpc.on", event);
                  case 3:
                    result = _context3.sent;
                    if (!(typeof event === "string" && result[event] !== "ok")) {
                      _context3.next = 6;
                      break;
                    }
                    throw new Error("Failed subscribing to an event '" + event + "' with: " + result[event]);
                  case 6:
                    return _context3.abrupt("return", result);
                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
          function subscribe(_x2) {
            return _subscribe.apply(this, arguments);
          }
          return subscribe;
        }()
      }, {
        key: "unsubscribe",
        value: function() {
          var _unsubscribe = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee4(event) {
            var result;
            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (typeof event === "string")
                      event = [event];
                    _context4.next = 3;
                    return this.call("rpc.off", event);
                  case 3:
                    result = _context4.sent;
                    if (!(typeof event === "string" && result[event] !== "ok")) {
                      _context4.next = 6;
                      break;
                    }
                    throw new Error("Failed unsubscribing from an event with: " + result);
                  case 6:
                    return _context4.abrupt("return", result);
                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
          function unsubscribe(_x3) {
            return _unsubscribe.apply(this, arguments);
          }
          return unsubscribe;
        }()
      }, {
        key: "close",
        value: function close(code, data) {
          this.socket.close(code || 1e3, data);
        }
      }, {
        key: "_connect",
        value: function _connect(address, options) {
          var _this4 = this;
          clearTimeout(this.reconnect_timer_id);
          this.socket = this.webSocketFactory(address, options);
          this.socket.addEventListener("open", function() {
            _this4.ready = true;
            _this4.emit("open");
            _this4.current_reconnects = 0;
          });
          this.socket.addEventListener("message", function(_ref) {
            var message = _ref.data;
            if (message instanceof ArrayBuffer)
              message = Buffer.from(message).toString();
            try {
              message = _this4.dataPack.decode(message);
            } catch (error) {
              return;
            }
            if (message.notification && _this4.listeners(message.notification).length) {
              if (!Object.keys(message.params).length)
                return _this4.emit(message.notification);
              var args = [message.notification];
              if (message.params.constructor === Object)
                args.push(message.params);
              else
                for (var i = 0; i < message.params.length; i++) {
                  args.push(message.params[i]);
                }
              return Promise.resolve().then(function() {
                _this4.emit.apply(_this4, args);
              });
            }
            if (!_this4.queue[message.id]) {
              if (message.method) {
                return Promise.resolve().then(function() {
                  _this4.emit(message.method, message === null || message === void 0 ? void 0 : message.params);
                });
              }
              return;
            }
            if ("error" in message === "result" in message)
              _this4.queue[message.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.'));
            if (_this4.queue[message.id].timeout)
              clearTimeout(_this4.queue[message.id].timeout);
            if (message.error)
              _this4.queue[message.id].promise[1](message.error);
            else
              _this4.queue[message.id].promise[0](message.result);
            delete _this4.queue[message.id];
          });
          this.socket.addEventListener("error", function(error) {
            return _this4.emit("error", error);
          });
          this.socket.addEventListener("close", function(_ref2) {
            var code = _ref2.code, reason = _ref2.reason;
            if (_this4.ready)
              setTimeout(function() {
                return _this4.emit("close", code, reason);
              }, 0);
            _this4.ready = false;
            _this4.socket = void 0;
            if (code === 1e3)
              return;
            _this4.current_reconnects++;
            if (_this4.reconnect && (_this4.max_reconnects > _this4.current_reconnects || _this4.max_reconnects === 0))
              _this4.reconnect_timer_id = setTimeout(function() {
                return _this4._connect(address, options);
              }, _this4.reconnect_interval);
          });
        }
      }]);
      return CommonClient2;
    }(_eventemitter.EventEmitter);
    exports["default"] = CommonClient;
  });

  // node_modules/rpc-websockets/dist/lib/client/websocket.browser.js
  var require_websocket_browser = __commonJS((exports) => {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = _default;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _eventemitter = require_eventemitter3();
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = (0, _getPrototypeOf2["default"])(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return (0, _possibleConstructorReturn2["default"])(this, result);
      };
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var WebSocketBrowserImpl = /* @__PURE__ */ function(_EventEmitter) {
      (0, _inherits2["default"])(WebSocketBrowserImpl2, _EventEmitter);
      var _super = _createSuper(WebSocketBrowserImpl2);
      function WebSocketBrowserImpl2(address, options, protocols) {
        var _this;
        (0, _classCallCheck2["default"])(this, WebSocketBrowserImpl2);
        _this = _super.call(this);
        _this.socket = new window.WebSocket(address, protocols);
        _this.socket.onopen = function() {
          return _this.emit("open");
        };
        _this.socket.onmessage = function(event) {
          return _this.emit("message", event.data);
        };
        _this.socket.onerror = function(error) {
          return _this.emit("error", error);
        };
        _this.socket.onclose = function(event) {
          _this.emit("close", event.code, event.reason);
        };
        return _this;
      }
      (0, _createClass2["default"])(WebSocketBrowserImpl2, [{
        key: "send",
        value: function send(data, optionsOrCallback, callback) {
          var cb = callback || optionsOrCallback;
          try {
            this.socket.send(data);
            cb();
          } catch (error) {
            cb(error);
          }
        }
      }, {
        key: "close",
        value: function close(code, reason) {
          this.socket.close(code, reason);
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(type2, listener, options) {
          this.socket.addEventListener(type2, listener, options);
        }
      }]);
      return WebSocketBrowserImpl2;
    }(_eventemitter.EventEmitter);
    function _default(address, options) {
      return new WebSocketBrowserImpl(address, options);
    }
  });

  // node_modules/@noble/hashes/sha3.js
  var require_sha3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = exports.keccakP = void 0;
    var _assert_js_1 = require_assert();
    var _u64_js_1 = require_u64();
    var utils_js_1 = require_utils();
    var [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
    var _0n = /* @__PURE__ */ BigInt(0);
    var _1n = /* @__PURE__ */ BigInt(1);
    var _2n = /* @__PURE__ */ BigInt(2);
    var _7n = /* @__PURE__ */ BigInt(7);
    var _256n = /* @__PURE__ */ BigInt(256);
    var _0x71n = /* @__PURE__ */ BigInt(113);
    for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
      [x, y] = [y, (2 * x + 3 * y) % 5];
      SHA3_PI.push(2 * (5 * y + x));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t = _0n;
      for (let j = 0; j < 7; j++) {
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n)
          t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
      }
      _SHA3_IOTA.push(t);
    }
    var [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ (0, _u64_js_1.split)(_SHA3_IOTA, true);
    var rotlH = (h, l, s) => s > 32 ? (0, _u64_js_1.rotlBH)(h, l, s) : (0, _u64_js_1.rotlSH)(h, l, s);
    var rotlL = (h, l, s) => s > 32 ? (0, _u64_js_1.rotlBL)(h, l, s) : (0, _u64_js_1.rotlSL)(h, l, s);
    function keccakP(s, rounds = 24) {
      const B = new Uint32Array(5 * 2);
      for (let round = 24 - rounds; round < 24; round++) {
        for (let x = 0; x < 10; x++)
          B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for (let x = 0; x < 10; x += 2) {
          const idx1 = (x + 8) % 10;
          const idx0 = (x + 2) % 10;
          const B0 = B[idx0];
          const B1 = B[idx0 + 1];
          const Th = rotlH(B0, B1, 1) ^ B[idx1];
          const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
          for (let y = 0; y < 50; y += 10) {
            s[x + y] ^= Th;
            s[x + y + 1] ^= Tl;
          }
        }
        let curH = s[2];
        let curL = s[3];
        for (let t = 0; t < 24; t++) {
          const shift = SHA3_ROTL[t];
          const Th = rotlH(curH, curL, shift);
          const Tl = rotlL(curH, curL, shift);
          const PI = SHA3_PI[t];
          curH = s[PI];
          curL = s[PI + 1];
          s[PI] = Th;
          s[PI + 1] = Tl;
        }
        for (let y = 0; y < 50; y += 10) {
          for (let x = 0; x < 10; x++)
            B[x] = s[y + x];
          for (let x = 0; x < 10; x++)
            s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        }
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
      }
      B.fill(0);
    }
    exports.keccakP = keccakP;
    var Keccak = class extends utils_js_1.Hash {
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        (0, _assert_js_1.number)(outputLen);
        if (0 >= this.blockLen || this.blockLen >= 200)
          throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200);
        this.state32 = (0, utils_js_1.u32)(this.state);
      }
      keccak() {
        keccakP(this.state32, this.rounds);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        (0, _assert_js_1.exists)(this);
        const {blockLen, state} = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i = 0; i < take; i++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const {state, suffix, pos, blockLen} = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        (0, _assert_js_1.exists)(this, false);
        (0, _assert_js_1.bytes)(out);
        this.finish();
        const bufferOut = this.state;
        const {blockLen} = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes) {
        (0, _assert_js_1.number)(bytes);
        return this.xofInto(new Uint8Array(bytes));
      }
      digestInto(out) {
        (0, _assert_js_1.output)(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        this.state.fill(0);
      }
      _cloneInto(to) {
        const {blockLen, suffix, outputLen, rounds, enableXOF} = this;
        to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to.state32.set(this.state32);
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        to.destroyed = this.destroyed;
        return to;
      }
    };
    exports.Keccak = Keccak;
    var gen = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapConstructor)(() => new Keccak(blockLen, suffix, outputLen));
    exports.sha3_224 = gen(6, 144, 224 / 8);
    exports.sha3_256 = gen(6, 136, 256 / 8);
    exports.sha3_384 = gen(6, 104, 384 / 8);
    exports.sha3_512 = gen(6, 72, 512 / 8);
    exports.keccak_224 = gen(1, 144, 224 / 8);
    exports.keccak_256 = gen(1, 136, 256 / 8);
    exports.keccak_384 = gen(1, 104, 384 / 8);
    exports.keccak_512 = gen(1, 72, 512 / 8);
    var genShake = (suffix, blockLen, outputLen) => (0, utils_js_1.wrapXOFConstructorWithOpts)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
    exports.shake128 = genShake(31, 168, 128 / 8);
    exports.shake256 = genShake(31, 136, 256 / 8);
  });

  // node_modules/@noble/curves/abstract/weierstrass.js
  var require_weierstrass = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.mapToCurveSimpleSWU = exports.SWUFpSqrtRatio = exports.weierstrass = exports.weierstrassPoints = exports.DER = void 0;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    var mod = require_modular();
    var ut = require_utils2();
    var utils_js_1 = require_utils2();
    var curve_js_1 = require_curve();
    function validatePointOpts(curve) {
      const opts = (0, curve_js_1.validateBasic)(curve);
      ut.validateObject(opts, {
        a: "field",
        b: "field"
      }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
      });
      const {endo, Fp, a} = opts;
      if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
          throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        }
        if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
          throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
        }
      }
      return Object.freeze(__assign({}, opts));
    }
    var {bytesToNumberBE: b2n, hexToBytes: h2b} = ut;
    exports.DER = {
      Err: class DERErr extends Error {
        constructor(m = "") {
          super(m);
        }
      },
      _parseInt(data) {
        const {Err: E} = exports.DER;
        if (data.length < 2 || data[0] !== 2)
          throw new E("Invalid signature integer tag");
        const len = data[1];
        const res = data.subarray(2, len + 2);
        if (!len || res.length !== len)
          throw new E("Invalid signature integer: wrong length");
        if (res[0] & 128)
          throw new E("Invalid signature integer: negative");
        if (res[0] === 0 && !(res[1] & 128))
          throw new E("Invalid signature integer: unnecessary leading zero");
        return {d: b2n(res), l: data.subarray(len + 2)};
      },
      toSig(hex) {
        const {Err: E} = exports.DER;
        const data = typeof hex === "string" ? h2b(hex) : hex;
        if (!ut.isBytes(data))
          throw new Error("ui8a expected");
        let l = data.length;
        if (l < 2 || data[0] != 48)
          throw new E("Invalid signature tag");
        if (data[1] !== l - 2)
          throw new E("Invalid signature: incorrect length");
        const {d: r, l: sBytes} = exports.DER._parseInt(data.subarray(2));
        const {d: s, l: rBytesLeft} = exports.DER._parseInt(sBytes);
        if (rBytesLeft.length)
          throw new E("Invalid signature: left bytes after parsing");
        return {r, s};
      },
      hexFromSig(sig) {
        const slice = (s2) => Number.parseInt(s2[0], 16) & 8 ? "00" + s2 : s2;
        const h = (num) => {
          const hex = num.toString(16);
          return hex.length & 1 ? `0${hex}` : hex;
        };
        const s = slice(h(sig.s));
        const r = slice(h(sig.r));
        const shl = s.length / 2;
        const rhl = r.length / 2;
        const sl = h(shl);
        const rl = h(rhl);
        return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
      }
    };
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _3n = BigInt(3);
    var _4n = BigInt(4);
    function weierstrassPoints(opts) {
      const CURVE = validatePointOpts(opts);
      const {Fp} = CURVE;
      const toBytes = CURVE.toBytes || ((_c, point, _isCompressed) => {
        const a = point.toAffine();
        return ut.concatBytes(Uint8Array.from([4]), Fp.toBytes(a.x), Fp.toBytes(a.y));
      });
      const fromBytes = CURVE.fromBytes || ((bytes) => {
        const tail = bytes.subarray(1);
        const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
        const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
        return {x, y};
      });
      function weierstrassEquation(x) {
        const {a, b} = CURVE;
        const x2 = Fp.sqr(x);
        const x3 = Fp.mul(x2, x);
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
      }
      if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
        throw new Error("bad generator point: equation left != right");
      function isWithinCurveOrder(num) {
        return typeof num === "bigint" && _0n < num && num < CURVE.n;
      }
      function assertGE(num) {
        if (!isWithinCurveOrder(num))
          throw new Error("Expected valid bigint: 0 < bigint < curve.n");
      }
      function normPrivateKeyToScalar(key) {
        const {allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n} = CURVE;
        if (lengths && typeof key !== "bigint") {
          if (ut.isBytes(key))
            key = ut.bytesToHex(key);
          if (typeof key !== "string" || !lengths.includes(key.length))
            throw new Error("Invalid key");
          key = key.padStart(nByteLength * 2, "0");
        }
        let num;
        try {
          num = typeof key === "bigint" ? key : ut.bytesToNumberBE((0, utils_js_1.ensureBytes)("private key", key, nByteLength));
        } catch (error) {
          throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
        }
        if (wrapPrivateKey)
          num = mod.mod(num, n);
        assertGE(num);
        return num;
      }
      const pointPrecomputes = new Map();
      function assertPrjPoint(other) {
        if (!(other instanceof Point))
          throw new Error("ProjectivePoint expected");
      }
      class Point {
        constructor(px, py, pz) {
          this.px = px;
          this.py = py;
          this.pz = pz;
          if (px == null || !Fp.isValid(px))
            throw new Error("x required");
          if (py == null || !Fp.isValid(py))
            throw new Error("y required");
          if (pz == null || !Fp.isValid(pz))
            throw new Error("z required");
        }
        static fromAffine(p) {
          const {x, y} = p || {};
          if (!p || !Fp.isValid(x) || !Fp.isValid(y))
            throw new Error("invalid affine point");
          if (p instanceof Point)
            throw new Error("projective point not allowed");
          const is0 = (i) => Fp.eql(i, Fp.ZERO);
          if (is0(x) && is0(y))
            return Point.ZERO;
          return new Point(x, y, Fp.ONE);
        }
        get x() {
          return this.toAffine().x;
        }
        get y() {
          return this.toAffine().y;
        }
        static normalizeZ(points) {
          const toInv = Fp.invertBatch(points.map((p) => p.pz));
          return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        static fromHex(hex) {
          const P = Point.fromAffine(fromBytes((0, utils_js_1.ensureBytes)("pointHex", hex)));
          P.assertValidity();
          return P;
        }
        static fromPrivateKey(privateKey) {
          return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        _setWindowSize(windowSize) {
          this._WINDOW_SIZE = windowSize;
          pointPrecomputes.delete(this);
        }
        assertValidity() {
          if (this.is0()) {
            if (CURVE.allowInfinityPoint && !Fp.is0(this.py))
              return;
            throw new Error("bad point: ZERO");
          }
          const {x, y} = this.toAffine();
          if (!Fp.isValid(x) || !Fp.isValid(y))
            throw new Error("bad point: x or y not FE");
          const left = Fp.sqr(y);
          const right = weierstrassEquation(x);
          if (!Fp.eql(left, right))
            throw new Error("bad point: equation left != right");
          if (!this.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        }
        hasEvenY() {
          const {y} = this.toAffine();
          if (Fp.isOdd)
            return !Fp.isOdd(y);
          throw new Error("Field doesn't support isOdd");
        }
        equals(other) {
          assertPrjPoint(other);
          const {px: X1, py: Y1, pz: Z1} = this;
          const {px: X2, py: Y2, pz: Z2} = other;
          const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
          const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
          return U1 && U2;
        }
        negate() {
          return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        double() {
          const {a, b} = CURVE;
          const b3 = Fp.mul(b, _3n);
          const {px: X1, py: Y1, pz: Z1} = this;
          let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
          let t0 = Fp.mul(X1, X1);
          let t1 = Fp.mul(Y1, Y1);
          let t2 = Fp.mul(Z1, Z1);
          let t3 = Fp.mul(X1, Y1);
          t3 = Fp.add(t3, t3);
          Z3 = Fp.mul(X1, Z1);
          Z3 = Fp.add(Z3, Z3);
          X3 = Fp.mul(a, Z3);
          Y3 = Fp.mul(b3, t2);
          Y3 = Fp.add(X3, Y3);
          X3 = Fp.sub(t1, Y3);
          Y3 = Fp.add(t1, Y3);
          Y3 = Fp.mul(X3, Y3);
          X3 = Fp.mul(t3, X3);
          Z3 = Fp.mul(b3, Z3);
          t2 = Fp.mul(a, t2);
          t3 = Fp.sub(t0, t2);
          t3 = Fp.mul(a, t3);
          t3 = Fp.add(t3, Z3);
          Z3 = Fp.add(t0, t0);
          t0 = Fp.add(Z3, t0);
          t0 = Fp.add(t0, t2);
          t0 = Fp.mul(t0, t3);
          Y3 = Fp.add(Y3, t0);
          t2 = Fp.mul(Y1, Z1);
          t2 = Fp.add(t2, t2);
          t0 = Fp.mul(t2, t3);
          X3 = Fp.sub(X3, t0);
          Z3 = Fp.mul(t2, t1);
          Z3 = Fp.add(Z3, Z3);
          Z3 = Fp.add(Z3, Z3);
          return new Point(X3, Y3, Z3);
        }
        add(other) {
          assertPrjPoint(other);
          const {px: X1, py: Y1, pz: Z1} = this;
          const {px: X2, py: Y2, pz: Z2} = other;
          let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
          const a = CURVE.a;
          const b3 = Fp.mul(CURVE.b, _3n);
          let t0 = Fp.mul(X1, X2);
          let t1 = Fp.mul(Y1, Y2);
          let t2 = Fp.mul(Z1, Z2);
          let t3 = Fp.add(X1, Y1);
          let t4 = Fp.add(X2, Y2);
          t3 = Fp.mul(t3, t4);
          t4 = Fp.add(t0, t1);
          t3 = Fp.sub(t3, t4);
          t4 = Fp.add(X1, Z1);
          let t5 = Fp.add(X2, Z2);
          t4 = Fp.mul(t4, t5);
          t5 = Fp.add(t0, t2);
          t4 = Fp.sub(t4, t5);
          t5 = Fp.add(Y1, Z1);
          X3 = Fp.add(Y2, Z2);
          t5 = Fp.mul(t5, X3);
          X3 = Fp.add(t1, t2);
          t5 = Fp.sub(t5, X3);
          Z3 = Fp.mul(a, t4);
          X3 = Fp.mul(b3, t2);
          Z3 = Fp.add(X3, Z3);
          X3 = Fp.sub(t1, Z3);
          Z3 = Fp.add(t1, Z3);
          Y3 = Fp.mul(X3, Z3);
          t1 = Fp.add(t0, t0);
          t1 = Fp.add(t1, t0);
          t2 = Fp.mul(a, t2);
          t4 = Fp.mul(b3, t4);
          t1 = Fp.add(t1, t2);
          t2 = Fp.sub(t0, t2);
          t2 = Fp.mul(a, t2);
          t4 = Fp.add(t4, t2);
          t0 = Fp.mul(t1, t4);
          Y3 = Fp.add(Y3, t0);
          t0 = Fp.mul(t5, t4);
          X3 = Fp.mul(t3, X3);
          X3 = Fp.sub(X3, t0);
          t0 = Fp.mul(t3, t1);
          Z3 = Fp.mul(t5, Z3);
          Z3 = Fp.add(Z3, t0);
          return new Point(X3, Y3, Z3);
        }
        subtract(other) {
          return this.add(other.negate());
        }
        is0() {
          return this.equals(Point.ZERO);
        }
        wNAF(n) {
          return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
            const toInv = Fp.invertBatch(comp.map((p) => p.pz));
            return comp.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
          });
        }
        multiplyUnsafe(n) {
          const I = Point.ZERO;
          if (n === _0n)
            return I;
          assertGE(n);
          if (n === _1n)
            return this;
          const {endo} = CURVE;
          if (!endo)
            return wnaf.unsafeLadder(this, n);
          let {k1neg, k1, k2neg, k2} = endo.splitScalar(n);
          let k1p = I;
          let k2p = I;
          let d = this;
          while (k1 > _0n || k2 > _0n) {
            if (k1 & _1n)
              k1p = k1p.add(d);
            if (k2 & _1n)
              k2p = k2p.add(d);
            d = d.double();
            k1 >>= _1n;
            k2 >>= _1n;
          }
          if (k1neg)
            k1p = k1p.negate();
          if (k2neg)
            k2p = k2p.negate();
          k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
          return k1p.add(k2p);
        }
        multiply(scalar) {
          assertGE(scalar);
          let n = scalar;
          let point, fake;
          const {endo} = CURVE;
          if (endo) {
            const {k1neg, k1, k2neg, k2} = endo.splitScalar(n);
            let {p: k1p, f: f1p} = this.wNAF(k1);
            let {p: k2p, f: f2p} = this.wNAF(k2);
            k1p = wnaf.constTimeNegate(k1neg, k1p);
            k2p = wnaf.constTimeNegate(k2neg, k2p);
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            point = k1p.add(k2p);
            fake = f1p.add(f2p);
          } else {
            const {p, f} = this.wNAF(n);
            point = p;
            fake = f;
          }
          return Point.normalizeZ([point, fake])[0];
        }
        multiplyAndAddUnsafe(Q, a, b) {
          const G = Point.BASE;
          const mul = (P, a2) => a2 === _0n || a2 === _1n || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
          const sum = mul(this, a).add(mul(Q, b));
          return sum.is0() ? void 0 : sum;
        }
        toAffine(iz) {
          const {px: x, py: y, pz: z} = this;
          const is0 = this.is0();
          if (iz == null)
            iz = is0 ? Fp.ONE : Fp.inv(z);
          const ax = Fp.mul(x, iz);
          const ay = Fp.mul(y, iz);
          const zz = Fp.mul(z, iz);
          if (is0)
            return {x: Fp.ZERO, y: Fp.ZERO};
          if (!Fp.eql(zz, Fp.ONE))
            throw new Error("invZ was invalid");
          return {x: ax, y: ay};
        }
        isTorsionFree() {
          const {h: cofactor, isTorsionFree} = CURVE;
          if (cofactor === _1n)
            return true;
          if (isTorsionFree)
            return isTorsionFree(Point, this);
          throw new Error("isTorsionFree() has not been declared for the elliptic curve");
        }
        clearCofactor() {
          const {h: cofactor, clearCofactor} = CURVE;
          if (cofactor === _1n)
            return this;
          if (clearCofactor)
            return clearCofactor(Point, this);
          return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
          this.assertValidity();
          return toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
          return ut.bytesToHex(this.toRawBytes(isCompressed));
        }
      }
      Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
      Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
      const _bits = CURVE.nBitLength;
      const wnaf = (0, curve_js_1.wNAF)(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
      return {
        CURVE,
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder
      };
    }
    exports.weierstrassPoints = weierstrassPoints;
    function validateOpts(curve) {
      const opts = (0, curve_js_1.validateBasic)(curve);
      ut.validateObject(opts, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
      }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
      });
      return Object.freeze(__assign({lowS: true}, opts));
    }
    function weierstrass(curveDef) {
      const CURVE = validateOpts(curveDef);
      const {Fp, n: CURVE_ORDER} = CURVE;
      const compressedLen = Fp.BYTES + 1;
      const uncompressedLen = 2 * Fp.BYTES + 1;
      function isValidFieldElement(num) {
        return _0n < num && num < Fp.ORDER;
      }
      function modN(a) {
        return mod.mod(a, CURVE_ORDER);
      }
      function invN(a) {
        return mod.invert(a, CURVE_ORDER);
      }
      const {ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder} = weierstrassPoints(__assign(__assign({}, CURVE), {
        toBytes(_c, point, isCompressed) {
          const a = point.toAffine();
          const x = Fp.toBytes(a.x);
          const cat = ut.concatBytes;
          if (isCompressed) {
            return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
          } else {
            return cat(Uint8Array.from([4]), x, Fp.toBytes(a.y));
          }
        },
        fromBytes(bytes) {
          const len = bytes.length;
          const head = bytes[0];
          const tail = bytes.subarray(1);
          if (len === compressedLen && (head === 2 || head === 3)) {
            const x = ut.bytesToNumberBE(tail);
            if (!isValidFieldElement(x))
              throw new Error("Point is not on curve");
            const y2 = weierstrassEquation(x);
            let y = Fp.sqrt(y2);
            const isYOdd = (y & _1n) === _1n;
            const isHeadOdd = (head & 1) === 1;
            if (isHeadOdd !== isYOdd)
              y = Fp.neg(y);
            return {x, y};
          } else if (len === uncompressedLen && head === 4) {
            const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
            const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
            return {x, y};
          } else {
            throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
          }
        }
      }));
      const numToNByteStr = (num) => ut.bytesToHex(ut.numberToBytesBE(num, CURVE.nByteLength));
      function isBiggerThanHalfOrder(number2) {
        const HALF = CURVE_ORDER >> _1n;
        return number2 > HALF;
      }
      function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
      }
      const slcNum = (b, from, to) => ut.bytesToNumberBE(b.slice(from, to));
      class Signature {
        constructor(r, s, recovery) {
          this.r = r;
          this.s = s;
          this.recovery = recovery;
          this.assertValidity();
        }
        static fromCompact(hex) {
          const l = CURVE.nByteLength;
          hex = (0, utils_js_1.ensureBytes)("compactSignature", hex, l * 2);
          return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        static fromDER(hex) {
          const {r, s} = exports.DER.toSig((0, utils_js_1.ensureBytes)("DER", hex));
          return new Signature(r, s);
        }
        assertValidity() {
          if (!isWithinCurveOrder(this.r))
            throw new Error("r must be 0 < r < CURVE.n");
          if (!isWithinCurveOrder(this.s))
            throw new Error("s must be 0 < s < CURVE.n");
        }
        addRecoveryBit(recovery) {
          return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
          const {r, s, recovery: rec} = this;
          const h = bits2int_modN((0, utils_js_1.ensureBytes)("msgHash", msgHash));
          if (rec == null || ![0, 1, 2, 3].includes(rec))
            throw new Error("recovery id invalid");
          const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
          if (radj >= Fp.ORDER)
            throw new Error("recovery id 2 or 3 invalid");
          const prefix = (rec & 1) === 0 ? "02" : "03";
          const R = Point.fromHex(prefix + numToNByteStr(radj));
          const ir = invN(radj);
          const u1 = modN(-h * ir);
          const u2 = modN(s * ir);
          const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
          if (!Q)
            throw new Error("point at infinify");
          Q.assertValidity();
          return Q;
        }
        hasHighS() {
          return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
          return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        toDERRawBytes() {
          return ut.hexToBytes(this.toDERHex());
        }
        toDERHex() {
          return exports.DER.hexFromSig({r: this.r, s: this.s});
        }
        toCompactRawBytes() {
          return ut.hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
          return numToNByteStr(this.r) + numToNByteStr(this.s);
        }
      }
      const utils = {
        isValidPrivateKey(privateKey) {
          try {
            normPrivateKeyToScalar(privateKey);
            return true;
          } catch (error) {
            return false;
          }
        },
        normPrivateKeyToScalar,
        randomPrivateKey: () => {
          const length = mod.getMinHashLength(CURVE.n);
          return mod.mapHashToField(CURVE.randomBytes(length), CURVE.n);
        },
        precompute(windowSize = 8, point = Point.BASE) {
          point._setWindowSize(windowSize);
          point.multiply(BigInt(3));
          return point;
        }
      };
      function getPublicKey2(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
      }
      function isProbPub(item) {
        const arr = ut.isBytes(item);
        const str = typeof item === "string";
        const len = (arr || str) && item.length;
        if (arr)
          return len === compressedLen || len === uncompressedLen;
        if (str)
          return len === 2 * compressedLen || len === 2 * uncompressedLen;
        if (item instanceof Point)
          return true;
        return false;
      }
      function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA))
          throw new Error("first arg must be private key");
        if (!isProbPub(publicB))
          throw new Error("second arg must be public key");
        const b = Point.fromHex(publicB);
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
      }
      const bits2int = CURVE.bits2int || function(bytes) {
        const num = ut.bytesToNumberBE(bytes);
        const delta = bytes.length * 8 - CURVE.nBitLength;
        return delta > 0 ? num >> BigInt(delta) : num;
      };
      const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
        return modN(bits2int(bytes));
      };
      const ORDER_MASK = ut.bitMask(CURVE.nBitLength);
      function int2octets(num) {
        if (typeof num !== "bigint")
          throw new Error("bigint expected");
        if (!(_0n <= num && num < ORDER_MASK))
          throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
        return ut.numberToBytesBE(num, CURVE.nByteLength);
      }
      function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if (["recovered", "canonical"].some((k) => k in opts))
          throw new Error("sign() legacy options not supported");
        const {hash, randomBytes} = CURVE;
        let {lowS, prehash, extraEntropy: ent} = opts;
        if (lowS == null)
          lowS = true;
        msgHash = (0, utils_js_1.ensureBytes)("msgHash", msgHash);
        if (prehash)
          msgHash = (0, utils_js_1.ensureBytes)("prehashed msgHash", hash(msgHash));
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey);
        const seedArgs = [int2octets(d), int2octets(h1int)];
        if (ent != null) {
          const e = ent === true ? randomBytes(Fp.BYTES) : ent;
          seedArgs.push((0, utils_js_1.ensureBytes)("extraEntropy", e));
        }
        const seed = ut.concatBytes(...seedArgs);
        const m = h1int;
        function k2sig(kBytes) {
          const k = bits2int(kBytes);
          if (!isWithinCurveOrder(k))
            return;
          const ik = invN(k);
          const q = Point.BASE.multiply(k).toAffine();
          const r = modN(q.x);
          if (r === _0n)
            return;
          const s = modN(ik * modN(m + r * d));
          if (s === _0n)
            return;
          let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n);
          let normS = s;
          if (lowS && isBiggerThanHalfOrder(s)) {
            normS = normalizeS(s);
            recovery ^= 1;
          }
          return new Signature(r, normS, recovery);
        }
        return {seed, k2sig};
      }
      const defaultSigOpts = {lowS: CURVE.lowS, prehash: false};
      const defaultVerOpts = {lowS: CURVE.lowS, prehash: false};
      function sign2(msgHash, privKey, opts = defaultSigOpts) {
        const {seed, k2sig} = prepSig(msgHash, privKey, opts);
        const C = CURVE;
        const drbg = ut.createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
        return drbg(seed, k2sig);
      }
      Point.BASE._setWindowSize(8);
      function verify2(signature, msgHash, publicKey2, opts = defaultVerOpts) {
        var _a;
        const sg = signature;
        msgHash = (0, utils_js_1.ensureBytes)("msgHash", msgHash);
        publicKey2 = (0, utils_js_1.ensureBytes)("publicKey", publicKey2);
        if ("strict" in opts)
          throw new Error("options.strict was renamed to lowS");
        const {lowS, prehash} = opts;
        let _sig = void 0;
        let P;
        try {
          if (typeof sg === "string" || ut.isBytes(sg)) {
            try {
              _sig = Signature.fromDER(sg);
            } catch (derError) {
              if (!(derError instanceof exports.DER.Err))
                throw derError;
              _sig = Signature.fromCompact(sg);
            }
          } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
            const {r: r2, s: s2} = sg;
            _sig = new Signature(r2, s2);
          } else {
            throw new Error("PARSE");
          }
          P = Point.fromHex(publicKey2);
        } catch (error) {
          if (error.message === "PARSE")
            throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
          return false;
        }
        if (lowS && _sig.hasHighS())
          return false;
        if (prehash)
          msgHash = CURVE.hash(msgHash);
        const {r, s} = _sig;
        const h = bits2int_modN(msgHash);
        const is2 = invN(s);
        const u1 = modN(h * is2);
        const u2 = modN(r * is2);
        const R = (_a = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)) == null ? void 0 : _a.toAffine();
        if (!R)
          return false;
        const v = modN(R.x);
        return v === r;
      }
      return {
        CURVE,
        getPublicKey: getPublicKey2,
        getSharedSecret,
        sign: sign2,
        verify: verify2,
        ProjectivePoint: Point,
        Signature,
        utils
      };
    }
    exports.weierstrass = weierstrass;
    function SWUFpSqrtRatio(Fp, Z) {
      const q = Fp.ORDER;
      let l = _0n;
      for (let o = q - _1n; o % _2n === _0n; o /= _2n)
        l += _1n;
      const c1 = l;
      const _2n_pow_c1_1 = _2n << c1 - _1n - _1n;
      const _2n_pow_c1 = _2n_pow_c1_1 * _2n;
      const c2 = (q - _1n) / _2n_pow_c1;
      const c3 = (c2 - _1n) / _2n;
      const c4 = _2n_pow_c1 - _1n;
      const c5 = _2n_pow_c1_1;
      const c6 = Fp.pow(Z, c2);
      const c7 = Fp.pow(Z, (c2 + _1n) / _2n);
      let sqrtRatio = (u, v) => {
        let tv1 = c6;
        let tv2 = Fp.pow(v, c4);
        let tv3 = Fp.sqr(tv2);
        tv3 = Fp.mul(tv3, v);
        let tv5 = Fp.mul(u, tv3);
        tv5 = Fp.pow(tv5, c3);
        tv5 = Fp.mul(tv5, tv2);
        tv2 = Fp.mul(tv5, v);
        tv3 = Fp.mul(tv5, u);
        let tv4 = Fp.mul(tv3, tv2);
        tv5 = Fp.pow(tv4, c5);
        let isQR = Fp.eql(tv5, Fp.ONE);
        tv2 = Fp.mul(tv3, c7);
        tv5 = Fp.mul(tv4, tv1);
        tv3 = Fp.cmov(tv2, tv3, isQR);
        tv4 = Fp.cmov(tv5, tv4, isQR);
        for (let i = c1; i > _1n; i--) {
          let tv52 = i - _2n;
          tv52 = _2n << tv52 - _1n;
          let tvv5 = Fp.pow(tv4, tv52);
          const e1 = Fp.eql(tvv5, Fp.ONE);
          tv2 = Fp.mul(tv3, tv1);
          tv1 = Fp.mul(tv1, tv1);
          tvv5 = Fp.mul(tv4, tv1);
          tv3 = Fp.cmov(tv2, tv3, e1);
          tv4 = Fp.cmov(tvv5, tv4, e1);
        }
        return {isValid: isQR, value: tv3};
      };
      if (Fp.ORDER % _4n === _3n) {
        const c12 = (Fp.ORDER - _3n) / _4n;
        const c22 = Fp.sqrt(Fp.neg(Z));
        sqrtRatio = (u, v) => {
          let tv1 = Fp.sqr(v);
          const tv2 = Fp.mul(u, v);
          tv1 = Fp.mul(tv1, tv2);
          let y1 = Fp.pow(tv1, c12);
          y1 = Fp.mul(y1, tv2);
          const y2 = Fp.mul(y1, c22);
          const tv3 = Fp.mul(Fp.sqr(y1), v);
          const isQR = Fp.eql(tv3, u);
          let y = Fp.cmov(y2, y1, isQR);
          return {isValid: isQR, value: y};
        };
      }
      return sqrtRatio;
    }
    exports.SWUFpSqrtRatio = SWUFpSqrtRatio;
    function mapToCurveSimpleSWU(Fp, opts) {
      mod.validateField(Fp);
      if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
        throw new Error("mapToCurveSimpleSWU: invalid opts");
      const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
      if (!Fp.isOdd)
        throw new Error("Fp.isOdd is not implemented!");
      return (u) => {
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u);
        tv1 = Fp.mul(tv1, opts.Z);
        tv2 = Fp.sqr(tv1);
        tv2 = Fp.add(tv2, tv1);
        tv3 = Fp.add(tv2, Fp.ONE);
        tv3 = Fp.mul(tv3, opts.B);
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO));
        tv4 = Fp.mul(tv4, opts.A);
        tv2 = Fp.sqr(tv3);
        tv6 = Fp.sqr(tv4);
        tv5 = Fp.mul(tv6, opts.A);
        tv2 = Fp.add(tv2, tv5);
        tv2 = Fp.mul(tv2, tv3);
        tv6 = Fp.mul(tv6, tv4);
        tv5 = Fp.mul(tv6, opts.B);
        tv2 = Fp.add(tv2, tv5);
        x = Fp.mul(tv1, tv3);
        const {isValid, value} = sqrtRatio(tv2, tv6);
        y = Fp.mul(tv1, u);
        y = Fp.mul(y, value);
        x = Fp.cmov(x, tv3, isValid);
        y = Fp.cmov(y, value, isValid);
        const e1 = Fp.isOdd(u) === Fp.isOdd(y);
        y = Fp.cmov(Fp.neg(y), y, e1);
        x = Fp.div(x, tv4);
        return {x, y};
      };
    }
    exports.mapToCurveSimpleSWU = mapToCurveSimpleSWU;
  });

  // node_modules/@noble/hashes/hmac.js
  var require_hmac = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.hmac = exports.HMAC = void 0;
    var _assert_js_1 = require_assert();
    var utils_js_1 = require_utils();
    var HMAC = class extends utils_js_1.Hash {
      constructor(hash, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        (0, _assert_js_1.hash)(hash);
        const key = (0, utils_js_1.toBytes)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== "function")
          throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for (let i = 0; i < pad.length; i++)
          pad[i] ^= 54;
        this.iHash.update(pad);
        this.oHash = hash.create();
        for (let i = 0; i < pad.length; i++)
          pad[i] ^= 54 ^ 92;
        this.oHash.update(pad);
        pad.fill(0);
      }
      update(buf) {
        (0, _assert_js_1.exists)(this);
        this.iHash.update(buf);
        return this;
      }
      digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.bytes)(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
      }
      digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
      }
      _cloneInto(to) {
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const {oHash, iHash, finished, destroyed, blockLen, outputLen} = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
      }
      destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
      }
    };
    exports.HMAC = HMAC;
    var hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
    exports.hmac = hmac;
    exports.hmac.create = (hash, key) => new HMAC(hash, key);
  });

  // node_modules/@noble/curves/_shortw_utils.js
  var require_shortw_utils = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.createCurve = exports.getHash = void 0;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    var hmac_1 = require_hmac();
    var utils_1 = require_utils();
    var weierstrass_js_1 = require_weierstrass();
    function getHash(hash) {
      return {
        hash,
        hmac: (key, ...msgs) => (0, hmac_1.hmac)(hash, key, (0, utils_1.concatBytes)(...msgs)),
        randomBytes: utils_1.randomBytes
      };
    }
    exports.getHash = getHash;
    function createCurve(curveDef, defHash) {
      const create2 = (hash) => (0, weierstrass_js_1.weierstrass)(__assign(__assign({}, curveDef), getHash(hash)));
      return Object.freeze(__assign(__assign({}, create2(defHash)), {create: create2}));
    }
    exports.createCurve = createCurve;
  });

  // node_modules/@noble/curves/secp256k1.js
  var require_secp256k1 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.encodeToCurve = exports.hashToCurve = exports.schnorr = exports.secp256k1 = void 0;
    /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
    var sha256_1 = require_sha256();
    var utils_1 = require_utils();
    var modular_js_1 = require_modular();
    var weierstrass_js_1 = require_weierstrass();
    var utils_js_1 = require_utils2();
    var hash_to_curve_js_1 = require_hash_to_curve();
    var _shortw_utils_js_1 = require_shortw_utils();
    var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
    var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var divNearest = (a, b) => (a + b / _2n) / b;
    function sqrtMod(y) {
      const P = secp256k1P;
      const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
      const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
      const b2 = y * y * y % P;
      const b3 = b2 * b2 * y % P;
      const b6 = (0, modular_js_1.pow2)(b3, _3n, P) * b3 % P;
      const b9 = (0, modular_js_1.pow2)(b6, _3n, P) * b3 % P;
      const b11 = (0, modular_js_1.pow2)(b9, _2n, P) * b2 % P;
      const b22 = (0, modular_js_1.pow2)(b11, _11n, P) * b11 % P;
      const b44 = (0, modular_js_1.pow2)(b22, _22n, P) * b22 % P;
      const b88 = (0, modular_js_1.pow2)(b44, _44n, P) * b44 % P;
      const b176 = (0, modular_js_1.pow2)(b88, _88n, P) * b88 % P;
      const b220 = (0, modular_js_1.pow2)(b176, _44n, P) * b44 % P;
      const b223 = (0, modular_js_1.pow2)(b220, _3n, P) * b3 % P;
      const t1 = (0, modular_js_1.pow2)(b223, _23n, P) * b22 % P;
      const t2 = (0, modular_js_1.pow2)(t1, _6n, P) * b2 % P;
      const root = (0, modular_js_1.pow2)(t2, _2n, P);
      if (!Fp.eql(Fp.sqr(root), y))
        throw new Error("Cannot find square root");
      return root;
    }
    var Fp = (0, modular_js_1.Field)(secp256k1P, void 0, void 0, {sqrt: sqrtMod});
    exports.secp256k1 = (0, _shortw_utils_js_1.createCurve)({
      a: BigInt(0),
      b: BigInt(7),
      Fp,
      n: secp256k1N,
      Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
      Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
      h: BigInt(1),
      lowS: true,
      endo: {
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: (k) => {
          const n = secp256k1N;
          const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
          const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
          const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
          const b2 = a1;
          const POW_2_128 = BigInt("0x100000000000000000000000000000000");
          const c1 = divNearest(b2 * k, n);
          const c2 = divNearest(-b1 * k, n);
          let k1 = (0, modular_js_1.mod)(k - c1 * a1 - c2 * a2, n);
          let k2 = (0, modular_js_1.mod)(-c1 * b1 - c2 * b2, n);
          const k1neg = k1 > POW_2_128;
          const k2neg = k2 > POW_2_128;
          if (k1neg)
            k1 = n - k1;
          if (k2neg)
            k2 = n - k2;
          if (k1 > POW_2_128 || k2 > POW_2_128) {
            throw new Error("splitScalar: Endomorphism failed, k=" + k);
          }
          return {k1neg, k1, k2neg, k2};
        }
      }
    }, sha256_1.sha256);
    var _0n = BigInt(0);
    var fe = (x) => typeof x === "bigint" && _0n < x && x < secp256k1P;
    var ge = (x) => typeof x === "bigint" && _0n < x && x < secp256k1N;
    var TAGGED_HASH_PREFIXES = {};
    function taggedHash(tag, ...messages) {
      let tagP = TAGGED_HASH_PREFIXES[tag];
      if (tagP === void 0) {
        const tagH = (0, sha256_1.sha256)(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
        tagP = (0, utils_js_1.concatBytes)(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
      }
      return (0, sha256_1.sha256)((0, utils_js_1.concatBytes)(tagP, ...messages));
    }
    var pointToBytes = (point) => point.toRawBytes(true).slice(1);
    var numTo32b = (n) => (0, utils_js_1.numberToBytesBE)(n, 32);
    var modP = (x) => (0, modular_js_1.mod)(x, secp256k1P);
    var modN = (x) => (0, modular_js_1.mod)(x, secp256k1N);
    var Point = exports.secp256k1.ProjectivePoint;
    var GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
    function schnorrGetExtPubKey(priv) {
      let d_ = exports.secp256k1.utils.normPrivateKeyToScalar(priv);
      let p = Point.fromPrivateKey(d_);
      const scalar = p.hasEvenY() ? d_ : modN(-d_);
      return {scalar, bytes: pointToBytes(p)};
    }
    function lift_x(x) {
      if (!fe(x))
        throw new Error("bad x: need 0 < x < p");
      const xx = modP(x * x);
      const c = modP(xx * x + BigInt(7));
      let y = sqrtMod(c);
      if (y % _2n !== _0n)
        y = modP(-y);
      const p = new Point(x, y, _1n);
      p.assertValidity();
      return p;
    }
    function challenge(...args) {
      return modN((0, utils_js_1.bytesToNumberBE)(taggedHash("BIP0340/challenge", ...args)));
    }
    function schnorrGetPublicKey(privateKey) {
      return schnorrGetExtPubKey(privateKey).bytes;
    }
    function schnorrSign(message, privateKey, auxRand = (0, utils_1.randomBytes)(32)) {
      const m = (0, utils_js_1.ensureBytes)("message", message);
      const {bytes: px, scalar: d} = schnorrGetExtPubKey(privateKey);
      const a = (0, utils_js_1.ensureBytes)("auxRand", auxRand, 32);
      const t = numTo32b(d ^ (0, utils_js_1.bytesToNumberBE)(taggedHash("BIP0340/aux", a)));
      const rand = taggedHash("BIP0340/nonce", t, px, m);
      const k_ = modN((0, utils_js_1.bytesToNumberBE)(rand));
      if (k_ === _0n)
        throw new Error("sign failed: k is zero");
      const {bytes: rx, scalar: k} = schnorrGetExtPubKey(k_);
      const e = challenge(rx, px, m);
      const sig = new Uint8Array(64);
      sig.set(rx, 0);
      sig.set(numTo32b(modN(k + e * d)), 32);
      if (!schnorrVerify(sig, m, px))
        throw new Error("sign: Invalid signature produced");
      return sig;
    }
    function schnorrVerify(signature, message, publicKey2) {
      const sig = (0, utils_js_1.ensureBytes)("signature", signature, 64);
      const m = (0, utils_js_1.ensureBytes)("message", message);
      const pub = (0, utils_js_1.ensureBytes)("publicKey", publicKey2, 32);
      try {
        const P = lift_x((0, utils_js_1.bytesToNumberBE)(pub));
        const r = (0, utils_js_1.bytesToNumberBE)(sig.subarray(0, 32));
        if (!fe(r))
          return false;
        const s = (0, utils_js_1.bytesToNumberBE)(sig.subarray(32, 64));
        if (!ge(s))
          return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m);
        const R = GmulAdd(P, s, modN(-e));
        if (!R || !R.hasEvenY() || R.toAffine().x !== r)
          return false;
        return true;
      } catch (error) {
        return false;
      }
    }
    exports.schnorr = (() => ({
      getPublicKey: schnorrGetPublicKey,
      sign: schnorrSign,
      verify: schnorrVerify,
      utils: {
        randomPrivateKey: exports.secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE: utils_js_1.numberToBytesBE,
        bytesToNumberBE: utils_js_1.bytesToNumberBE,
        taggedHash,
        mod: modular_js_1.mod
      }
    }))();
    var isoMap = /* @__PURE__ */ (() => (0, hash_to_curve_js_1.isogenyMap)(Fp, [
      [
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
        "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
        "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
      ],
      [
        "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
        "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
      ],
      [
        "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
        "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
        "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
        "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
      ],
      [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
        "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
        "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
      ]
    ].map((i) => i.map((j) => BigInt(j)))))();
    var mapSWU = /* @__PURE__ */ (() => (0, weierstrass_js_1.mapToCurveSimpleSWU)(Fp, {
      A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
      B: BigInt("1771"),
      Z: Fp.create(BigInt("-11"))
    }))();
    var htf = /* @__PURE__ */ (() => (0, hash_to_curve_js_1.createHasher)(exports.secp256k1.ProjectivePoint, (scalars) => {
      const {x, y} = mapSWU(Fp.create(scalars[0]));
      return isoMap(x, y);
    }, {
      DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
      encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
      p: Fp.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: sha256_1.sha256
    }))();
    exports.hashToCurve = (() => htf.hashToCurve)();
    exports.encodeToCurve = (() => htf.encodeToCurve)();
  });

  // src/popup.tsx
  var import_react2 = __toModule(require_react());
  var import_react_dom = __toModule(require_react_dom());

  // src/Popup/App.tsx
  var import_react = __toModule(require_react());

  // src/nativeRequests/nativeGetAccounts.ts
  var import_safari_extension_walletlib_js = __toModule(require_lib());

  // node_modules/js-base64/base64.mjs
  var _hasBuffer = typeof Buffer === "function";
  var _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
  var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
  var b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var b64chs = Array.prototype.slice.call(b64ch);
  var b64tab = ((a) => {
    let tab = {};
    a.forEach((c, i) => tab[c] = i);
    return tab;
  })(b64chs);
  var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
  var _fromCC = String.fromCharCode.bind(String);
  var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
  var _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, "");
  var atobPolyfill = (asc) => {
    asc = asc.replace(/\s+/g, "");
    if (!b64re.test(asc))
      throw new TypeError("malformed base64.");
    asc += "==".slice(2 - (asc.length & 3));
    let u24, bin = "", r1, r2;
    for (let i = 0; i < asc.length; ) {
      u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
      bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
  };
  var _atob = typeof atob === "function" ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
  var _toUint8Array = _hasBuffer ? (a) => _U8Afrom(Buffer.from(a, "base64")) : (a) => _U8Afrom(_atob(a).split("").map((c) => c.charCodeAt(0)));
  var toUint8Array = (a) => _toUint8Array(_unURI(a));
  var _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));

  // node_modules/@solana/web3.js/lib/index.browser.esm.js
  var import_buffer = __toModule(require_buffer());
  var import_ed25519 = __toModule(require_ed25519());
  var import_bn = __toModule(require_bn());
  var import_bs58 = __toModule(require_bs58());
  var import_sha256 = __toModule(require_sha256());
  var import_borsh = __toModule(require_lib2());
  var BufferLayout = __toModule(require_Layout());
  var import_buffer_layout = __toModule(require_Layout());
  var import_bigint_buffer = __toModule(require_browser());

  // node_modules/superstruct/lib/index.es.js
  var StructError = class extends TypeError {
    constructor(failure, failures) {
      let cached;
      const {
        message
      } = failure, rest = __rest(failure, [
        "message"
      ]);
      const {
        path
      } = failure;
      const msg = path.length === 0 ? message : "At path: " + path.join(".") + " -- " + message;
      super(msg);
      Object.assign(this, rest);
      this.name = this.constructor.name;
      this.failures = () => {
        var _cached;
        return (_cached = cached) != null ? _cached : cached = [failure, ...failures()];
      };
    }
  };
  function isIterable(x) {
    return isObject(x) && typeof x[Symbol.iterator] === "function";
  }
  function isObject(x) {
    return typeof x === "object" && x != null;
  }
  function print(value) {
    return typeof value === "string" ? JSON.stringify(value) : "" + value;
  }
  function shiftIterator(input) {
    const {
      done,
      value
    } = input.next();
    return done ? void 0 : value;
  }
  function toFailure(result, context, struct2, value) {
    if (result === true) {
      return;
    } else if (result === false) {
      result = {};
    } else if (typeof result === "string") {
      result = {
        message: result
      };
    }
    const {
      path,
      branch
    } = context;
    const {
      type: type2
    } = struct2;
    const {
      refinement,
      message = "Expected a value of type `" + type2 + "`" + (refinement ? " with refinement `" + refinement + "`" : "") + ", but received: `" + print(value) + "`"
    } = result;
    return __assign(__assign({
      value,
      type: type2,
      refinement,
      key: path[path.length - 1],
      path,
      branch
    }, result), {
      message
    });
  }
  function* toFailures(result, context, struct2, value) {
    if (!isIterable(result)) {
      result = [result];
    }
    for (const r of result) {
      const failure = toFailure(r, context, struct2, value);
      if (failure) {
        yield failure;
      }
    }
  }
  function* run(value, struct2, options = {}) {
    const {
      path = [],
      branch = [value],
      coerce: coerce2 = false,
      mask: mask2 = false
    } = options;
    const ctx = {
      path,
      branch
    };
    if (coerce2) {
      value = struct2.coercer(value, ctx);
      if (mask2 && struct2.type !== "type" && isObject(struct2.schema) && isObject(value) && !Array.isArray(value)) {
        for (const key in value) {
          if (struct2.schema[key] === void 0) {
            delete value[key];
          }
        }
      }
    }
    let valid = true;
    for (const failure of struct2.validator(value, ctx)) {
      valid = false;
      yield [failure, void 0];
    }
    for (let [k, v, s] of struct2.entries(value, ctx)) {
      const ts = run(v, s, {
        path: k === void 0 ? path : [...path, k],
        branch: k === void 0 ? branch : [...branch, v],
        coerce: coerce2,
        mask: mask2
      });
      for (const t of ts) {
        if (t[0]) {
          valid = false;
          yield [t[0], void 0];
        } else if (coerce2) {
          v = t[1];
          if (k === void 0) {
            value = v;
          } else if (value instanceof Map) {
            value.set(k, v);
          } else if (value instanceof Set) {
            value.add(v);
          } else if (isObject(value)) {
            value[k] = v;
          }
        }
      }
    }
    if (valid) {
      for (const failure of struct2.refiner(value, ctx)) {
        valid = false;
        yield [failure, void 0];
      }
    }
    if (valid) {
      yield [void 0, value];
    }
  }
  var Struct = class {
    constructor(props) {
      const {
        type: type2,
        schema,
        validator,
        refiner,
        coercer = (value) => value,
        entries = function* () {
        }
      } = props;
      this.type = type2;
      this.schema = schema;
      this.entries = entries;
      this.coercer = coercer;
      if (validator) {
        this.validator = (value, context) => {
          const result = validator(value, context);
          return toFailures(result, context, this, value);
        };
      } else {
        this.validator = () => [];
      }
      if (refiner) {
        this.refiner = (value, context) => {
          const result = refiner(value, context);
          return toFailures(result, context, this, value);
        };
      } else {
        this.refiner = () => [];
      }
    }
    assert(value) {
      return assert(value, this);
    }
    create(value) {
      return create(value, this);
    }
    is(value) {
      return is(value, this);
    }
    mask(value) {
      return mask(value, this);
    }
    validate(value, options = {}) {
      return validate(value, this, options);
    }
  };
  function assert(value, struct2) {
    const result = validate(value, struct2);
    if (result[0]) {
      throw result[0];
    }
  }
  function create(value, struct2) {
    const result = validate(value, struct2, {
      coerce: true
    });
    if (result[0]) {
      throw result[0];
    } else {
      return result[1];
    }
  }
  function mask(value, struct2) {
    const result = validate(value, struct2, {
      coerce: true,
      mask: true
    });
    if (result[0]) {
      throw result[0];
    } else {
      return result[1];
    }
  }
  function is(value, struct2) {
    const result = validate(value, struct2);
    return !result[0];
  }
  function validate(value, struct2, options = {}) {
    const tuples = run(value, struct2, options);
    const tuple2 = shiftIterator(tuples);
    if (tuple2[0]) {
      const error = new StructError(tuple2[0], function* () {
        for (const t of tuples) {
          if (t[0]) {
            yield t[0];
          }
        }
      });
      return [error, void 0];
    } else {
      const v = tuple2[1];
      return [void 0, v];
    }
  }
  function define(name, validator) {
    return new Struct({
      type: name,
      schema: null,
      validator
    });
  }
  function any() {
    return define("any", () => true);
  }
  function array(Element) {
    return new Struct({
      type: "array",
      schema: Element,
      *entries(value) {
        if (Element && Array.isArray(value)) {
          for (const [i, v] of value.entries()) {
            yield [i, v, Element];
          }
        }
      },
      coercer(value) {
        return Array.isArray(value) ? value.slice() : value;
      },
      validator(value) {
        return Array.isArray(value) || "Expected an array value, but received: " + print(value);
      }
    });
  }
  function boolean() {
    return define("boolean", (value) => {
      return typeof value === "boolean";
    });
  }
  function instance(Class) {
    return define("instance", (value) => {
      return value instanceof Class || "Expected a `" + Class.name + "` instance, but received: " + print(value);
    });
  }
  function literal(constant) {
    const description = print(constant);
    const t = typeof constant;
    return new Struct({
      type: "literal",
      schema: t === "string" || t === "number" || t === "boolean" ? constant : null,
      validator(value) {
        return value === constant || "Expected the literal `" + description + "`, but received: " + print(value);
      }
    });
  }
  function never() {
    return define("never", () => false);
  }
  function nullable(struct2) {
    return new Struct(__assign(__assign({}, struct2), {
      validator: (value, ctx) => value === null || struct2.validator(value, ctx),
      refiner: (value, ctx) => value === null || struct2.refiner(value, ctx)
    }));
  }
  function number() {
    return define("number", (value) => {
      return typeof value === "number" && !isNaN(value) || "Expected a number, but received: " + print(value);
    });
  }
  function optional(struct2) {
    return new Struct(__assign(__assign({}, struct2), {
      validator: (value, ctx) => value === void 0 || struct2.validator(value, ctx),
      refiner: (value, ctx) => value === void 0 || struct2.refiner(value, ctx)
    }));
  }
  function record(Key, Value) {
    return new Struct({
      type: "record",
      schema: null,
      *entries(value) {
        if (isObject(value)) {
          for (const k in value) {
            const v = value[k];
            yield [k, k, Key];
            yield [k, v, Value];
          }
        }
      },
      validator(value) {
        return isObject(value) || "Expected an object, but received: " + print(value);
      }
    });
  }
  function string() {
    return define("string", (value) => {
      return typeof value === "string" || "Expected a string, but received: " + print(value);
    });
  }
  function tuple(Elements) {
    const Never = never();
    return new Struct({
      type: "tuple",
      schema: null,
      *entries(value) {
        if (Array.isArray(value)) {
          const length = Math.max(Elements.length, value.length);
          for (let i = 0; i < length; i++) {
            yield [i, value[i], Elements[i] || Never];
          }
        }
      },
      validator(value) {
        return Array.isArray(value) || "Expected an array, but received: " + print(value);
      }
    });
  }
  function type(schema) {
    const keys = Object.keys(schema);
    return new Struct({
      type: "type",
      schema,
      *entries(value) {
        if (isObject(value)) {
          for (const k of keys) {
            yield [k, value[k], schema[k]];
          }
        }
      },
      validator(value) {
        return isObject(value) || "Expected an object, but received: " + print(value);
      }
    });
  }
  function union(Structs) {
    const description = Structs.map((s) => s.type).join(" | ");
    return new Struct({
      type: "union",
      schema: null,
      validator(value, ctx) {
        const failures = [];
        for (const S of Structs) {
          const [...tuples] = run(value, S, ctx);
          const [first] = tuples;
          if (!first[0]) {
            return [];
          } else {
            for (const [failure] of tuples) {
              if (failure) {
                failures.push(failure);
              }
            }
          }
        }
        return ["Expected the value to satisfy a union of `" + description + "`, but received: " + print(value), ...failures];
      }
    });
  }
  function unknown() {
    return define("unknown", () => true);
  }
  function coerce(struct2, condition, coercer) {
    return new Struct(__assign(__assign({}, struct2), {
      coercer: (value, ctx) => {
        return is(value, condition) ? struct2.coercer(coercer(value, ctx), ctx) : struct2.coercer(value, ctx);
      }
    }));
  }

  // node_modules/@solana/web3.js/lib/index.browser.esm.js
  var import_browser = __toModule(require_browser2());
  var import_client = __toModule(require_client());
  var import_websocket = __toModule(require_websocket_browser());
  var import_sha3 = __toModule(require_sha3());
  var import_secp256k1 = __toModule(require_secp256k1());
  var generatePrivateKey = import_ed25519.ed25519.utils.randomPrivateKey;
  var generateKeypair = () => {
    const privateScalar = import_ed25519.ed25519.utils.randomPrivateKey();
    const publicKey2 = getPublicKey(privateScalar);
    const secretKey = new Uint8Array(64);
    secretKey.set(privateScalar);
    secretKey.set(publicKey2, 32);
    return {
      publicKey: publicKey2,
      secretKey
    };
  };
  var getPublicKey = import_ed25519.ed25519.getPublicKey;
  function isOnCurve(publicKey2) {
    try {
      import_ed25519.ed25519.ExtendedPoint.fromHex(publicKey2);
      return true;
    } catch (e) {
      return false;
    }
  }
  var sign = (message, secretKey) => import_ed25519.ed25519.sign(message, secretKey.slice(0, 32));
  var verify = import_ed25519.ed25519.verify;
  var toBuffer = (arr) => {
    if (import_buffer.Buffer.isBuffer(arr)) {
      return arr;
    } else if (arr instanceof Uint8Array) {
      return import_buffer.Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
    } else {
      return import_buffer.Buffer.from(arr);
    }
  };
  var Struct2 = class {
    constructor(properties) {
      Object.assign(this, properties);
    }
    encode() {
      return import_buffer.Buffer.from((0, import_borsh.serialize)(SOLANA_SCHEMA, this));
    }
    static decode(data) {
      return (0, import_borsh.deserialize)(SOLANA_SCHEMA, this, data);
    }
    static decodeUnchecked(data) {
      return (0, import_borsh.deserializeUnchecked)(SOLANA_SCHEMA, this, data);
    }
  };
  var SOLANA_SCHEMA = new Map();
  var _class;
  var _Symbol$toStringTag;
  var MAX_SEED_LENGTH = 32;
  var PUBLIC_KEY_LENGTH = 32;
  function isPublicKeyData(value) {
    return value._bn !== void 0;
  }
  var uniquePublicKeyCounter = 1;
  _Symbol$toStringTag = Symbol.toStringTag;
  var PublicKey = class extends Struct2 {
    constructor(value) {
      super({});
      this._bn = void 0;
      if (isPublicKeyData(value)) {
        this._bn = value._bn;
      } else {
        if (typeof value === "string") {
          const decoded = import_bs58.default.decode(value);
          if (decoded.length != PUBLIC_KEY_LENGTH) {
            throw new Error(`Invalid public key input`);
          }
          this._bn = new import_bn.default(decoded);
        } else {
          this._bn = new import_bn.default(value);
        }
        if (this._bn.byteLength() > PUBLIC_KEY_LENGTH) {
          throw new Error(`Invalid public key input`);
        }
      }
    }
    static unique() {
      const key = new PublicKey(uniquePublicKeyCounter);
      uniquePublicKeyCounter += 1;
      return new PublicKey(key.toBuffer());
    }
    equals(publicKey2) {
      return this._bn.eq(publicKey2._bn);
    }
    toBase58() {
      return import_bs58.default.encode(this.toBytes());
    }
    toJSON() {
      return this.toBase58();
    }
    toBytes() {
      const buf = this.toBuffer();
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    toBuffer() {
      const b = this._bn.toArrayLike(import_buffer.Buffer);
      if (b.length === PUBLIC_KEY_LENGTH) {
        return b;
      }
      const zeroPad = import_buffer.Buffer.alloc(32);
      b.copy(zeroPad, 32 - b.length);
      return zeroPad;
    }
    get [_Symbol$toStringTag]() {
      return `PublicKey(${this.toString()})`;
    }
    toString() {
      return this.toBase58();
    }
    static async createWithSeed(fromPublicKey, seed, programId) {
      const buffer = import_buffer.Buffer.concat([fromPublicKey.toBuffer(), import_buffer.Buffer.from(seed), programId.toBuffer()]);
      const publicKeyBytes = (0, import_sha256.sha256)(buffer);
      return new PublicKey(publicKeyBytes);
    }
    static createProgramAddressSync(seeds, programId) {
      let buffer = import_buffer.Buffer.alloc(0);
      seeds.forEach(function(seed) {
        if (seed.length > MAX_SEED_LENGTH) {
          throw new TypeError(`Max seed length exceeded`);
        }
        buffer = import_buffer.Buffer.concat([buffer, toBuffer(seed)]);
      });
      buffer = import_buffer.Buffer.concat([buffer, programId.toBuffer(), import_buffer.Buffer.from("ProgramDerivedAddress")]);
      const publicKeyBytes = (0, import_sha256.sha256)(buffer);
      if (isOnCurve(publicKeyBytes)) {
        throw new Error(`Invalid seeds, address must fall off the curve`);
      }
      return new PublicKey(publicKeyBytes);
    }
    static async createProgramAddress(seeds, programId) {
      return this.createProgramAddressSync(seeds, programId);
    }
    static findProgramAddressSync(seeds, programId) {
      let nonce = 255;
      let address;
      while (nonce != 0) {
        try {
          const seedsWithNonce = seeds.concat(import_buffer.Buffer.from([nonce]));
          address = this.createProgramAddressSync(seedsWithNonce, programId);
        } catch (err) {
          if (err instanceof TypeError) {
            throw err;
          }
          nonce--;
          continue;
        }
        return [address, nonce];
      }
      throw new Error(`Unable to find a viable program address nonce`);
    }
    static async findProgramAddress(seeds, programId) {
      return this.findProgramAddressSync(seeds, programId);
    }
    static isOnCurve(pubkeyData) {
      const pubkey = new PublicKey(pubkeyData);
      return isOnCurve(pubkey.toBytes());
    }
  };
  _class = PublicKey;
  PublicKey.default = new _class("11111111111111111111111111111111");
  SOLANA_SCHEMA.set(PublicKey, {
    kind: "struct",
    fields: [["_bn", "u256"]]
  });
  var BPF_LOADER_DEPRECATED_PROGRAM_ID = new PublicKey("BPFLoader1111111111111111111111111111111111");
  var PACKET_DATA_SIZE = 1280 - 40 - 8;
  var VERSION_PREFIX_MASK = 127;
  var SIGNATURE_LENGTH_IN_BYTES = 64;
  var TransactionExpiredBlockheightExceededError = class extends Error {
    constructor(signature) {
      super(`Signature ${signature} has expired: block height exceeded.`);
      this.signature = void 0;
      this.signature = signature;
    }
  };
  Object.defineProperty(TransactionExpiredBlockheightExceededError.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
  });
  var TransactionExpiredTimeoutError = class extends Error {
    constructor(signature, timeoutSeconds) {
      super(`Transaction was not confirmed in ${timeoutSeconds.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${signature} using the Solana Explorer or CLI tools.`);
      this.signature = void 0;
      this.signature = signature;
    }
  };
  Object.defineProperty(TransactionExpiredTimeoutError.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
  });
  var TransactionExpiredNonceInvalidError = class extends Error {
    constructor(signature) {
      super(`Signature ${signature} has expired: the nonce is no longer valid.`);
      this.signature = void 0;
      this.signature = signature;
    }
  };
  Object.defineProperty(TransactionExpiredNonceInvalidError.prototype, "name", {
    value: "TransactionExpiredNonceInvalidError"
  });
  var MessageAccountKeys = class {
    constructor(staticAccountKeys, accountKeysFromLookups) {
      this.staticAccountKeys = void 0;
      this.accountKeysFromLookups = void 0;
      this.staticAccountKeys = staticAccountKeys;
      this.accountKeysFromLookups = accountKeysFromLookups;
    }
    keySegments() {
      const keySegments = [this.staticAccountKeys];
      if (this.accountKeysFromLookups) {
        keySegments.push(this.accountKeysFromLookups.writable);
        keySegments.push(this.accountKeysFromLookups.readonly);
      }
      return keySegments;
    }
    get(index) {
      for (const keySegment of this.keySegments()) {
        if (index < keySegment.length) {
          return keySegment[index];
        } else {
          index -= keySegment.length;
        }
      }
      return;
    }
    get length() {
      return this.keySegments().flat().length;
    }
    compileInstructions(instructions) {
      const U8_MAX = 255;
      if (this.length > U8_MAX + 1) {
        throw new Error("Account index overflow encountered during compilation");
      }
      const keyIndexMap = new Map();
      this.keySegments().flat().forEach((key, index) => {
        keyIndexMap.set(key.toBase58(), index);
      });
      const findKeyIndex = (key) => {
        const keyIndex = keyIndexMap.get(key.toBase58());
        if (keyIndex === void 0)
          throw new Error("Encountered an unknown instruction account key during compilation");
        return keyIndex;
      };
      return instructions.map((instruction) => {
        return {
          programIdIndex: findKeyIndex(instruction.programId),
          accountKeyIndexes: instruction.keys.map((meta) => findKeyIndex(meta.pubkey)),
          data: instruction.data
        };
      });
    }
  };
  var publicKey = (property = "publicKey") => {
    return BufferLayout.blob(32, property);
  };
  var rustString = (property = "string") => {
    const rsl = BufferLayout.struct([BufferLayout.u32("length"), BufferLayout.u32("lengthPadding"), BufferLayout.blob(BufferLayout.offset(BufferLayout.u32(), -8), "chars")], property);
    const _decode = rsl.decode.bind(rsl);
    const _encode = rsl.encode.bind(rsl);
    const rslShim = rsl;
    rslShim.decode = (b, offset2) => {
      const data = _decode(b, offset2);
      return data["chars"].toString();
    };
    rslShim.encode = (str, b, offset2) => {
      const data = {
        chars: import_buffer.Buffer.from(str, "utf8")
      };
      return _encode(data, b, offset2);
    };
    rslShim.alloc = (str) => {
      return BufferLayout.u32().span + BufferLayout.u32().span + import_buffer.Buffer.from(str, "utf8").length;
    };
    return rslShim;
  };
  var authorized = (property = "authorized") => {
    return BufferLayout.struct([publicKey("staker"), publicKey("withdrawer")], property);
  };
  var lockup = (property = "lockup") => {
    return BufferLayout.struct([BufferLayout.ns64("unixTimestamp"), BufferLayout.ns64("epoch"), publicKey("custodian")], property);
  };
  var voteInit = (property = "voteInit") => {
    return BufferLayout.struct([publicKey("nodePubkey"), publicKey("authorizedVoter"), publicKey("authorizedWithdrawer"), BufferLayout.u8("commission")], property);
  };
  var voteAuthorizeWithSeedArgs = (property = "voteAuthorizeWithSeedArgs") => {
    return BufferLayout.struct([BufferLayout.u32("voteAuthorizationType"), publicKey("currentAuthorityDerivedKeyOwnerPubkey"), rustString("currentAuthorityDerivedKeySeed"), publicKey("newAuthorized")], property);
  };
  function getAlloc(type2, fields) {
    const getItemAlloc = (item) => {
      if (item.span >= 0) {
        return item.span;
      } else if (typeof item.alloc === "function") {
        return item.alloc(fields[item.property]);
      } else if ("count" in item && "elementLayout" in item) {
        const field = fields[item.property];
        if (Array.isArray(field)) {
          return field.length * getItemAlloc(item.elementLayout);
        }
      } else if ("fields" in item) {
        return getAlloc({
          layout: item
        }, fields[item.property]);
      }
      return 0;
    };
    let alloc = 0;
    type2.layout.fields.forEach((item) => {
      alloc += getItemAlloc(item);
    });
    return alloc;
  }
  function decodeLength(bytes) {
    let len = 0;
    let size = 0;
    for (; ; ) {
      let elem = bytes.shift();
      len |= (elem & 127) << size * 7;
      size += 1;
      if ((elem & 128) === 0) {
        break;
      }
    }
    return len;
  }
  function encodeLength(bytes, len) {
    let rem_len = len;
    for (; ; ) {
      let elem = rem_len & 127;
      rem_len >>= 7;
      if (rem_len == 0) {
        bytes.push(elem);
        break;
      } else {
        elem |= 128;
        bytes.push(elem);
      }
    }
  }
  function assert2(condition, message) {
    if (!condition) {
      throw new Error(message || "Assertion failed");
    }
  }
  var CompiledKeys = class {
    constructor(payer, keyMetaMap) {
      this.payer = void 0;
      this.keyMetaMap = void 0;
      this.payer = payer;
      this.keyMetaMap = keyMetaMap;
    }
    static compile(instructions, payer) {
      const keyMetaMap = new Map();
      const getOrInsertDefault = (pubkey) => {
        const address = pubkey.toBase58();
        let keyMeta = keyMetaMap.get(address);
        if (keyMeta === void 0) {
          keyMeta = {
            isSigner: false,
            isWritable: false,
            isInvoked: false
          };
          keyMetaMap.set(address, keyMeta);
        }
        return keyMeta;
      };
      const payerKeyMeta = getOrInsertDefault(payer);
      payerKeyMeta.isSigner = true;
      payerKeyMeta.isWritable = true;
      for (const ix of instructions) {
        getOrInsertDefault(ix.programId).isInvoked = true;
        for (const accountMeta of ix.keys) {
          const keyMeta = getOrInsertDefault(accountMeta.pubkey);
          keyMeta.isSigner || (keyMeta.isSigner = accountMeta.isSigner);
          keyMeta.isWritable || (keyMeta.isWritable = accountMeta.isWritable);
        }
      }
      return new CompiledKeys(payer, keyMetaMap);
    }
    getMessageComponents() {
      const mapEntries = [...this.keyMetaMap.entries()];
      assert2(mapEntries.length <= 256, "Max static account keys length exceeded");
      const writableSigners = mapEntries.filter(([, meta]) => meta.isSigner && meta.isWritable);
      const readonlySigners = mapEntries.filter(([, meta]) => meta.isSigner && !meta.isWritable);
      const writableNonSigners = mapEntries.filter(([, meta]) => !meta.isSigner && meta.isWritable);
      const readonlyNonSigners = mapEntries.filter(([, meta]) => !meta.isSigner && !meta.isWritable);
      const header = {
        numRequiredSignatures: writableSigners.length + readonlySigners.length,
        numReadonlySignedAccounts: readonlySigners.length,
        numReadonlyUnsignedAccounts: readonlyNonSigners.length
      };
      {
        assert2(writableSigners.length > 0, "Expected at least one writable signer key");
        const [payerAddress] = writableSigners[0];
        assert2(payerAddress === this.payer.toBase58(), "Expected first writable signer key to be the fee payer");
      }
      const staticAccountKeys = [...writableSigners.map(([address]) => new PublicKey(address)), ...readonlySigners.map(([address]) => new PublicKey(address)), ...writableNonSigners.map(([address]) => new PublicKey(address)), ...readonlyNonSigners.map(([address]) => new PublicKey(address))];
      return [header, staticAccountKeys];
    }
    extractTableLookup(lookupTable) {
      const [writableIndexes, drainedWritableKeys] = this.drainKeysFoundInLookupTable(lookupTable.state.addresses, (keyMeta) => !keyMeta.isSigner && !keyMeta.isInvoked && keyMeta.isWritable);
      const [readonlyIndexes, drainedReadonlyKeys] = this.drainKeysFoundInLookupTable(lookupTable.state.addresses, (keyMeta) => !keyMeta.isSigner && !keyMeta.isInvoked && !keyMeta.isWritable);
      if (writableIndexes.length === 0 && readonlyIndexes.length === 0) {
        return;
      }
      return [{
        accountKey: lookupTable.key,
        writableIndexes,
        readonlyIndexes
      }, {
        writable: drainedWritableKeys,
        readonly: drainedReadonlyKeys
      }];
    }
    drainKeysFoundInLookupTable(lookupTableEntries, keyMetaFilter) {
      const lookupTableIndexes = new Array();
      const drainedKeys = new Array();
      for (const [address, keyMeta] of this.keyMetaMap.entries()) {
        if (keyMetaFilter(keyMeta)) {
          const key = new PublicKey(address);
          const lookupTableIndex = lookupTableEntries.findIndex((entry) => entry.equals(key));
          if (lookupTableIndex >= 0) {
            assert2(lookupTableIndex < 256, "Max lookup table index exceeded");
            lookupTableIndexes.push(lookupTableIndex);
            drainedKeys.push(key);
            this.keyMetaMap.delete(address);
          }
        }
      }
      return [lookupTableIndexes, drainedKeys];
    }
  };
  var Message = class {
    constructor(args) {
      this.header = void 0;
      this.accountKeys = void 0;
      this.recentBlockhash = void 0;
      this.instructions = void 0;
      this.indexToProgramIds = new Map();
      this.header = args.header;
      this.accountKeys = args.accountKeys.map((account) => new PublicKey(account));
      this.recentBlockhash = args.recentBlockhash;
      this.instructions = args.instructions;
      this.instructions.forEach((ix) => this.indexToProgramIds.set(ix.programIdIndex, this.accountKeys[ix.programIdIndex]));
    }
    get version() {
      return "legacy";
    }
    get staticAccountKeys() {
      return this.accountKeys;
    }
    get compiledInstructions() {
      return this.instructions.map((ix) => ({
        programIdIndex: ix.programIdIndex,
        accountKeyIndexes: ix.accounts,
        data: import_bs58.default.decode(ix.data)
      }));
    }
    get addressTableLookups() {
      return [];
    }
    getAccountKeys() {
      return new MessageAccountKeys(this.staticAccountKeys);
    }
    static compile(args) {
      const compiledKeys = CompiledKeys.compile(args.instructions, args.payerKey);
      const [header, staticAccountKeys] = compiledKeys.getMessageComponents();
      const accountKeys = new MessageAccountKeys(staticAccountKeys);
      const instructions = accountKeys.compileInstructions(args.instructions).map((ix) => ({
        programIdIndex: ix.programIdIndex,
        accounts: ix.accountKeyIndexes,
        data: import_bs58.default.encode(ix.data)
      }));
      return new Message({
        header,
        accountKeys: staticAccountKeys,
        recentBlockhash: args.recentBlockhash,
        instructions
      });
    }
    isAccountSigner(index) {
      return index < this.header.numRequiredSignatures;
    }
    isAccountWritable(index) {
      const numSignedAccounts = this.header.numRequiredSignatures;
      if (index >= this.header.numRequiredSignatures) {
        const unsignedAccountIndex = index - numSignedAccounts;
        const numUnsignedAccounts = this.accountKeys.length - numSignedAccounts;
        const numWritableUnsignedAccounts = numUnsignedAccounts - this.header.numReadonlyUnsignedAccounts;
        return unsignedAccountIndex < numWritableUnsignedAccounts;
      } else {
        const numWritableSignedAccounts = numSignedAccounts - this.header.numReadonlySignedAccounts;
        return index < numWritableSignedAccounts;
      }
    }
    isProgramId(index) {
      return this.indexToProgramIds.has(index);
    }
    programIds() {
      return [...this.indexToProgramIds.values()];
    }
    nonProgramIds() {
      return this.accountKeys.filter((_, index) => !this.isProgramId(index));
    }
    serialize() {
      const numKeys = this.accountKeys.length;
      let keyCount = [];
      encodeLength(keyCount, numKeys);
      const instructions = this.instructions.map((instruction) => {
        const {
          accounts,
          programIdIndex
        } = instruction;
        const data = Array.from(import_bs58.default.decode(instruction.data));
        let keyIndicesCount = [];
        encodeLength(keyIndicesCount, accounts.length);
        let dataCount = [];
        encodeLength(dataCount, data.length);
        return {
          programIdIndex,
          keyIndicesCount: import_buffer.Buffer.from(keyIndicesCount),
          keyIndices: accounts,
          dataLength: import_buffer.Buffer.from(dataCount),
          data
        };
      });
      let instructionCount = [];
      encodeLength(instructionCount, instructions.length);
      let instructionBuffer = import_buffer.Buffer.alloc(PACKET_DATA_SIZE);
      import_buffer.Buffer.from(instructionCount).copy(instructionBuffer);
      let instructionBufferLength = instructionCount.length;
      instructions.forEach((instruction) => {
        const instructionLayout = BufferLayout.struct([BufferLayout.u8("programIdIndex"), BufferLayout.blob(instruction.keyIndicesCount.length, "keyIndicesCount"), BufferLayout.seq(BufferLayout.u8("keyIndex"), instruction.keyIndices.length, "keyIndices"), BufferLayout.blob(instruction.dataLength.length, "dataLength"), BufferLayout.seq(BufferLayout.u8("userdatum"), instruction.data.length, "data")]);
        const length2 = instructionLayout.encode(instruction, instructionBuffer, instructionBufferLength);
        instructionBufferLength += length2;
      });
      instructionBuffer = instructionBuffer.slice(0, instructionBufferLength);
      const signDataLayout = BufferLayout.struct([BufferLayout.blob(1, "numRequiredSignatures"), BufferLayout.blob(1, "numReadonlySignedAccounts"), BufferLayout.blob(1, "numReadonlyUnsignedAccounts"), BufferLayout.blob(keyCount.length, "keyCount"), BufferLayout.seq(publicKey("key"), numKeys, "keys"), publicKey("recentBlockhash")]);
      const transaction = {
        numRequiredSignatures: import_buffer.Buffer.from([this.header.numRequiredSignatures]),
        numReadonlySignedAccounts: import_buffer.Buffer.from([this.header.numReadonlySignedAccounts]),
        numReadonlyUnsignedAccounts: import_buffer.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
        keyCount: import_buffer.Buffer.from(keyCount),
        keys: this.accountKeys.map((key) => toBuffer(key.toBytes())),
        recentBlockhash: import_bs58.default.decode(this.recentBlockhash)
      };
      let signData = import_buffer.Buffer.alloc(2048);
      const length = signDataLayout.encode(transaction, signData);
      instructionBuffer.copy(signData, length);
      return signData.slice(0, length + instructionBuffer.length);
    }
    static from(buffer) {
      let byteArray = [...buffer];
      const numRequiredSignatures = byteArray.shift();
      if (numRequiredSignatures !== (numRequiredSignatures & VERSION_PREFIX_MASK)) {
        throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
      }
      const numReadonlySignedAccounts = byteArray.shift();
      const numReadonlyUnsignedAccounts = byteArray.shift();
      const accountCount = decodeLength(byteArray);
      let accountKeys = [];
      for (let i = 0; i < accountCount; i++) {
        const account = byteArray.slice(0, PUBLIC_KEY_LENGTH);
        byteArray = byteArray.slice(PUBLIC_KEY_LENGTH);
        accountKeys.push(new PublicKey(import_buffer.Buffer.from(account)));
      }
      const recentBlockhash = byteArray.slice(0, PUBLIC_KEY_LENGTH);
      byteArray = byteArray.slice(PUBLIC_KEY_LENGTH);
      const instructionCount = decodeLength(byteArray);
      let instructions = [];
      for (let i = 0; i < instructionCount; i++) {
        const programIdIndex = byteArray.shift();
        const accountCount2 = decodeLength(byteArray);
        const accounts = byteArray.slice(0, accountCount2);
        byteArray = byteArray.slice(accountCount2);
        const dataLength = decodeLength(byteArray);
        const dataSlice = byteArray.slice(0, dataLength);
        const data = import_bs58.default.encode(import_buffer.Buffer.from(dataSlice));
        byteArray = byteArray.slice(dataLength);
        instructions.push({
          programIdIndex,
          accounts,
          data
        });
      }
      const messageArgs = {
        header: {
          numRequiredSignatures,
          numReadonlySignedAccounts,
          numReadonlyUnsignedAccounts
        },
        recentBlockhash: import_bs58.default.encode(import_buffer.Buffer.from(recentBlockhash)),
        accountKeys,
        instructions
      };
      return new Message(messageArgs);
    }
  };
  var DEFAULT_SIGNATURE = import_buffer.Buffer.alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0);
  var TransactionInstruction = class {
    constructor(opts) {
      this.keys = void 0;
      this.programId = void 0;
      this.data = import_buffer.Buffer.alloc(0);
      this.programId = opts.programId;
      this.keys = opts.keys;
      if (opts.data) {
        this.data = opts.data;
      }
    }
    toJSON() {
      return {
        keys: this.keys.map(({
          pubkey,
          isSigner,
          isWritable
        }) => ({
          pubkey: pubkey.toJSON(),
          isSigner,
          isWritable
        })),
        programId: this.programId.toJSON(),
        data: [...this.data]
      };
    }
  };
  var Transaction = class {
    get signature() {
      if (this.signatures.length > 0) {
        return this.signatures[0].signature;
      }
      return null;
    }
    constructor(opts) {
      this.signatures = [];
      this.feePayer = void 0;
      this.instructions = [];
      this.recentBlockhash = void 0;
      this.lastValidBlockHeight = void 0;
      this.nonceInfo = void 0;
      this.minNonceContextSlot = void 0;
      this._message = void 0;
      this._json = void 0;
      if (!opts) {
        return;
      }
      if (opts.feePayer) {
        this.feePayer = opts.feePayer;
      }
      if (opts.signatures) {
        this.signatures = opts.signatures;
      }
      if (Object.prototype.hasOwnProperty.call(opts, "nonceInfo")) {
        const {
          minContextSlot,
          nonceInfo
        } = opts;
        this.minNonceContextSlot = minContextSlot;
        this.nonceInfo = nonceInfo;
      } else if (Object.prototype.hasOwnProperty.call(opts, "lastValidBlockHeight")) {
        const {
          blockhash,
          lastValidBlockHeight
        } = opts;
        this.recentBlockhash = blockhash;
        this.lastValidBlockHeight = lastValidBlockHeight;
      } else {
        const {
          recentBlockhash,
          nonceInfo
        } = opts;
        if (nonceInfo) {
          this.nonceInfo = nonceInfo;
        }
        this.recentBlockhash = recentBlockhash;
      }
    }
    toJSON() {
      return {
        recentBlockhash: this.recentBlockhash || null,
        feePayer: this.feePayer ? this.feePayer.toJSON() : null,
        nonceInfo: this.nonceInfo ? {
          nonce: this.nonceInfo.nonce,
          nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
        } : null,
        instructions: this.instructions.map((instruction) => instruction.toJSON()),
        signers: this.signatures.map(({
          publicKey: publicKey2
        }) => {
          return publicKey2.toJSON();
        })
      };
    }
    add(...items) {
      if (items.length === 0) {
        throw new Error("No instructions");
      }
      items.forEach((item) => {
        if ("instructions" in item) {
          this.instructions = this.instructions.concat(item.instructions);
        } else if ("data" in item && "programId" in item && "keys" in item) {
          this.instructions.push(item);
        } else {
          this.instructions.push(new TransactionInstruction(item));
        }
      });
      return this;
    }
    compileMessage() {
      if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) {
        return this._message;
      }
      let recentBlockhash;
      let instructions;
      if (this.nonceInfo) {
        recentBlockhash = this.nonceInfo.nonce;
        if (this.instructions[0] != this.nonceInfo.nonceInstruction) {
          instructions = [this.nonceInfo.nonceInstruction, ...this.instructions];
        } else {
          instructions = this.instructions;
        }
      } else {
        recentBlockhash = this.recentBlockhash;
        instructions = this.instructions;
      }
      if (!recentBlockhash) {
        throw new Error("Transaction recentBlockhash required");
      }
      if (instructions.length < 1) {
        console.warn("No instructions provided");
      }
      let feePayer;
      if (this.feePayer) {
        feePayer = this.feePayer;
      } else if (this.signatures.length > 0 && this.signatures[0].publicKey) {
        feePayer = this.signatures[0].publicKey;
      } else {
        throw new Error("Transaction fee payer required");
      }
      for (let i = 0; i < instructions.length; i++) {
        if (instructions[i].programId === void 0) {
          throw new Error(`Transaction instruction index ${i} has undefined program id`);
        }
      }
      const programIds = [];
      const accountMetas = [];
      instructions.forEach((instruction) => {
        instruction.keys.forEach((accountMeta) => {
          accountMetas.push(__assign({}, accountMeta));
        });
        const programId = instruction.programId.toString();
        if (!programIds.includes(programId)) {
          programIds.push(programId);
        }
      });
      programIds.forEach((programId) => {
        accountMetas.push({
          pubkey: new PublicKey(programId),
          isSigner: false,
          isWritable: false
        });
      });
      const uniqueMetas = [];
      accountMetas.forEach((accountMeta) => {
        const pubkeyString = accountMeta.pubkey.toString();
        const uniqueIndex = uniqueMetas.findIndex((x) => {
          return x.pubkey.toString() === pubkeyString;
        });
        if (uniqueIndex > -1) {
          uniqueMetas[uniqueIndex].isWritable = uniqueMetas[uniqueIndex].isWritable || accountMeta.isWritable;
          uniqueMetas[uniqueIndex].isSigner = uniqueMetas[uniqueIndex].isSigner || accountMeta.isSigner;
        } else {
          uniqueMetas.push(accountMeta);
        }
      });
      uniqueMetas.sort(function(x, y) {
        if (x.isSigner !== y.isSigner) {
          return x.isSigner ? -1 : 1;
        }
        if (x.isWritable !== y.isWritable) {
          return x.isWritable ? -1 : 1;
        }
        const options = {
          localeMatcher: "best fit",
          usage: "sort",
          sensitivity: "variant",
          ignorePunctuation: false,
          numeric: false,
          caseFirst: "lower"
        };
        return x.pubkey.toBase58().localeCompare(y.pubkey.toBase58(), "en", options);
      });
      const feePayerIndex = uniqueMetas.findIndex((x) => {
        return x.pubkey.equals(feePayer);
      });
      if (feePayerIndex > -1) {
        const [payerMeta] = uniqueMetas.splice(feePayerIndex, 1);
        payerMeta.isSigner = true;
        payerMeta.isWritable = true;
        uniqueMetas.unshift(payerMeta);
      } else {
        uniqueMetas.unshift({
          pubkey: feePayer,
          isSigner: true,
          isWritable: true
        });
      }
      for (const signature of this.signatures) {
        const uniqueIndex = uniqueMetas.findIndex((x) => {
          return x.pubkey.equals(signature.publicKey);
        });
        if (uniqueIndex > -1) {
          if (!uniqueMetas[uniqueIndex].isSigner) {
            uniqueMetas[uniqueIndex].isSigner = true;
            console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.");
          }
        } else {
          throw new Error(`unknown signer: ${signature.publicKey.toString()}`);
        }
      }
      let numRequiredSignatures = 0;
      let numReadonlySignedAccounts = 0;
      let numReadonlyUnsignedAccounts = 0;
      const signedKeys = [];
      const unsignedKeys = [];
      uniqueMetas.forEach(({
        pubkey,
        isSigner,
        isWritable
      }) => {
        if (isSigner) {
          signedKeys.push(pubkey.toString());
          numRequiredSignatures += 1;
          if (!isWritable) {
            numReadonlySignedAccounts += 1;
          }
        } else {
          unsignedKeys.push(pubkey.toString());
          if (!isWritable) {
            numReadonlyUnsignedAccounts += 1;
          }
        }
      });
      const accountKeys = signedKeys.concat(unsignedKeys);
      const compiledInstructions = instructions.map((instruction) => {
        const {
          data,
          programId
        } = instruction;
        return {
          programIdIndex: accountKeys.indexOf(programId.toString()),
          accounts: instruction.keys.map((meta) => accountKeys.indexOf(meta.pubkey.toString())),
          data: import_bs58.default.encode(data)
        };
      });
      compiledInstructions.forEach((instruction) => {
        assert2(instruction.programIdIndex >= 0);
        instruction.accounts.forEach((keyIndex) => assert2(keyIndex >= 0));
      });
      return new Message({
        header: {
          numRequiredSignatures,
          numReadonlySignedAccounts,
          numReadonlyUnsignedAccounts
        },
        accountKeys,
        recentBlockhash,
        instructions: compiledInstructions
      });
    }
    _compile() {
      const message = this.compileMessage();
      const signedKeys = message.accountKeys.slice(0, message.header.numRequiredSignatures);
      if (this.signatures.length === signedKeys.length) {
        const valid = this.signatures.every((pair, index) => {
          return signedKeys[index].equals(pair.publicKey);
        });
        if (valid)
          return message;
      }
      this.signatures = signedKeys.map((publicKey2) => ({
        signature: null,
        publicKey: publicKey2
      }));
      return message;
    }
    serializeMessage() {
      return this._compile().serialize();
    }
    async getEstimatedFee(connection) {
      return (await connection.getFeeForMessage(this.compileMessage())).value;
    }
    setSigners(...signers) {
      if (signers.length === 0) {
        throw new Error("No signers");
      }
      const seen = new Set();
      this.signatures = signers.filter((publicKey2) => {
        const key = publicKey2.toString();
        if (seen.has(key)) {
          return false;
        } else {
          seen.add(key);
          return true;
        }
      }).map((publicKey2) => ({
        signature: null,
        publicKey: publicKey2
      }));
    }
    sign(...signers) {
      if (signers.length === 0) {
        throw new Error("No signers");
      }
      const seen = new Set();
      const uniqueSigners = [];
      for (const signer of signers) {
        const key = signer.publicKey.toString();
        if (seen.has(key)) {
          continue;
        } else {
          seen.add(key);
          uniqueSigners.push(signer);
        }
      }
      this.signatures = uniqueSigners.map((signer) => ({
        signature: null,
        publicKey: signer.publicKey
      }));
      const message = this._compile();
      this._partialSign(message, ...uniqueSigners);
    }
    partialSign(...signers) {
      if (signers.length === 0) {
        throw new Error("No signers");
      }
      const seen = new Set();
      const uniqueSigners = [];
      for (const signer of signers) {
        const key = signer.publicKey.toString();
        if (seen.has(key)) {
          continue;
        } else {
          seen.add(key);
          uniqueSigners.push(signer);
        }
      }
      const message = this._compile();
      this._partialSign(message, ...uniqueSigners);
    }
    _partialSign(message, ...signers) {
      const signData = message.serialize();
      signers.forEach((signer) => {
        const signature = sign(signData, signer.secretKey);
        this._addSignature(signer.publicKey, toBuffer(signature));
      });
    }
    addSignature(pubkey, signature) {
      this._compile();
      this._addSignature(pubkey, signature);
    }
    _addSignature(pubkey, signature) {
      assert2(signature.length === 64);
      const index = this.signatures.findIndex((sigpair) => pubkey.equals(sigpair.publicKey));
      if (index < 0) {
        throw new Error(`unknown signer: ${pubkey.toString()}`);
      }
      this.signatures[index].signature = import_buffer.Buffer.from(signature);
    }
    verifySignatures(requireAllSignatures = true) {
      const signatureErrors = this._getMessageSignednessErrors(this.serializeMessage(), requireAllSignatures);
      return !signatureErrors;
    }
    _getMessageSignednessErrors(message, requireAllSignatures) {
      const errors = {};
      for (const {
        signature,
        publicKey: publicKey2
      } of this.signatures) {
        if (signature === null) {
          if (requireAllSignatures) {
            (errors.missing || (errors.missing = [])).push(publicKey2);
          }
        } else {
          if (!verify(signature, message, publicKey2.toBytes())) {
            (errors.invalid || (errors.invalid = [])).push(publicKey2);
          }
        }
      }
      return errors.invalid || errors.missing ? errors : void 0;
    }
    serialize(config) {
      const {
        requireAllSignatures,
        verifySignatures
      } = Object.assign({
        requireAllSignatures: true,
        verifySignatures: true
      }, config);
      const signData = this.serializeMessage();
      if (verifySignatures) {
        const sigErrors = this._getMessageSignednessErrors(signData, requireAllSignatures);
        if (sigErrors) {
          let errorMessage = "Signature verification failed.";
          if (sigErrors.invalid) {
            errorMessage += `
Invalid signature for public key${sigErrors.invalid.length === 1 ? "" : "(s)"} [\`${sigErrors.invalid.map((p) => p.toBase58()).join("`, `")}\`].`;
          }
          if (sigErrors.missing) {
            errorMessage += `
Missing signature for public key${sigErrors.missing.length === 1 ? "" : "(s)"} [\`${sigErrors.missing.map((p) => p.toBase58()).join("`, `")}\`].`;
          }
          throw new Error(errorMessage);
        }
      }
      return this._serialize(signData);
    }
    _serialize(signData) {
      const {
        signatures
      } = this;
      const signatureCount = [];
      encodeLength(signatureCount, signatures.length);
      const transactionLength = signatureCount.length + signatures.length * 64 + signData.length;
      const wireTransaction = import_buffer.Buffer.alloc(transactionLength);
      assert2(signatures.length < 256);
      import_buffer.Buffer.from(signatureCount).copy(wireTransaction, 0);
      signatures.forEach(({
        signature
      }, index) => {
        if (signature !== null) {
          assert2(signature.length === 64, `signature has invalid length`);
          import_buffer.Buffer.from(signature).copy(wireTransaction, signatureCount.length + index * 64);
        }
      });
      signData.copy(wireTransaction, signatureCount.length + signatures.length * 64);
      assert2(wireTransaction.length <= PACKET_DATA_SIZE, `Transaction too large: ${wireTransaction.length} > ${PACKET_DATA_SIZE}`);
      return wireTransaction;
    }
    get keys() {
      assert2(this.instructions.length === 1);
      return this.instructions[0].keys.map((keyObj) => keyObj.pubkey);
    }
    get programId() {
      assert2(this.instructions.length === 1);
      return this.instructions[0].programId;
    }
    get data() {
      assert2(this.instructions.length === 1);
      return this.instructions[0].data;
    }
    static from(buffer) {
      let byteArray = [...buffer];
      const signatureCount = decodeLength(byteArray);
      let signatures = [];
      for (let i = 0; i < signatureCount; i++) {
        const signature = byteArray.slice(0, SIGNATURE_LENGTH_IN_BYTES);
        byteArray = byteArray.slice(SIGNATURE_LENGTH_IN_BYTES);
        signatures.push(import_bs58.default.encode(import_buffer.Buffer.from(signature)));
      }
      return Transaction.populate(Message.from(byteArray), signatures);
    }
    static populate(message, signatures = []) {
      const transaction = new Transaction();
      transaction.recentBlockhash = message.recentBlockhash;
      if (message.header.numRequiredSignatures > 0) {
        transaction.feePayer = message.accountKeys[0];
      }
      signatures.forEach((signature, index) => {
        const sigPubkeyPair = {
          signature: signature == import_bs58.default.encode(DEFAULT_SIGNATURE) ? null : import_bs58.default.decode(signature),
          publicKey: message.accountKeys[index]
        };
        transaction.signatures.push(sigPubkeyPair);
      });
      message.instructions.forEach((instruction) => {
        const keys = instruction.accounts.map((account) => {
          const pubkey = message.accountKeys[account];
          return {
            pubkey,
            isSigner: transaction.signatures.some((keyObj) => keyObj.publicKey.toString() === pubkey.toString()) || message.isAccountSigner(account),
            isWritable: message.isAccountWritable(account)
          };
        });
        transaction.instructions.push(new TransactionInstruction({
          keys,
          programId: message.accountKeys[instruction.programIdIndex],
          data: import_bs58.default.decode(instruction.data)
        }));
      });
      transaction._message = message;
      transaction._json = transaction.toJSON();
      return transaction;
    }
  };
  var NUM_TICKS_PER_SECOND = 160;
  var DEFAULT_TICKS_PER_SLOT = 64;
  var NUM_SLOTS_PER_SECOND = NUM_TICKS_PER_SECOND / DEFAULT_TICKS_PER_SLOT;
  var MS_PER_SLOT = 1e3 / NUM_SLOTS_PER_SECOND;
  var SYSVAR_CLOCK_PUBKEY = new PublicKey("SysvarC1ock11111111111111111111111111111111");
  var SYSVAR_EPOCH_SCHEDULE_PUBKEY = new PublicKey("SysvarEpochSchedu1e111111111111111111111111");
  var SYSVAR_INSTRUCTIONS_PUBKEY = new PublicKey("Sysvar1nstructions1111111111111111111111111");
  var SYSVAR_RECENT_BLOCKHASHES_PUBKEY = new PublicKey("SysvarRecentB1ockHashes11111111111111111111");
  var SYSVAR_RENT_PUBKEY = new PublicKey("SysvarRent111111111111111111111111111111111");
  var SYSVAR_REWARDS_PUBKEY = new PublicKey("SysvarRewards111111111111111111111111111111");
  var SYSVAR_SLOT_HASHES_PUBKEY = new PublicKey("SysvarS1otHashes111111111111111111111111111");
  var SYSVAR_SLOT_HISTORY_PUBKEY = new PublicKey("SysvarS1otHistory11111111111111111111111111");
  var SYSVAR_STAKE_HISTORY_PUBKEY = new PublicKey("SysvarStakeHistory1111111111111111111111111");
  async function sendAndConfirmTransaction(connection, transaction, signers, options) {
    const sendOptions = options && {
      skipPreflight: options.skipPreflight,
      preflightCommitment: options.preflightCommitment || options.commitment,
      maxRetries: options.maxRetries,
      minContextSlot: options.minContextSlot
    };
    const signature = await connection.sendTransaction(transaction, signers, sendOptions);
    let status;
    if (transaction.recentBlockhash != null && transaction.lastValidBlockHeight != null) {
      status = (await connection.confirmTransaction({
        abortSignal: options == null ? void 0 : options.abortSignal,
        signature,
        blockhash: transaction.recentBlockhash,
        lastValidBlockHeight: transaction.lastValidBlockHeight
      }, options && options.commitment)).value;
    } else if (transaction.minNonceContextSlot != null && transaction.nonceInfo != null) {
      const {
        nonceInstruction
      } = transaction.nonceInfo;
      const nonceAccountPubkey = nonceInstruction.keys[0].pubkey;
      status = (await connection.confirmTransaction({
        abortSignal: options == null ? void 0 : options.abortSignal,
        minContextSlot: transaction.minNonceContextSlot,
        nonceAccountPubkey,
        nonceValue: transaction.nonceInfo.nonce,
        signature
      }, options && options.commitment)).value;
    } else {
      if ((options == null ? void 0 : options.abortSignal) != null) {
        console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable.");
      }
      status = (await connection.confirmTransaction(signature, options && options.commitment)).value;
    }
    if (status.err) {
      throw new Error(`Transaction ${signature} failed (${JSON.stringify(status)})`);
    }
    return signature;
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function encodeData(type2, fields) {
    const allocLength = type2.layout.span >= 0 ? type2.layout.span : getAlloc(type2, fields);
    const data = import_buffer.Buffer.alloc(allocLength);
    const layoutFields = Object.assign({
      instruction: type2.index
    }, fields);
    type2.layout.encode(layoutFields, data);
    return data;
  }
  var FeeCalculatorLayout = BufferLayout.nu64("lamportsPerSignature");
  var NonceAccountLayout = BufferLayout.struct([BufferLayout.u32("version"), BufferLayout.u32("state"), publicKey("authorizedPubkey"), publicKey("nonce"), BufferLayout.struct([FeeCalculatorLayout], "feeCalculator")]);
  var NONCE_ACCOUNT_LENGTH = NonceAccountLayout.span;
  var encodeDecode = (layout) => {
    const decode = layout.decode.bind(layout);
    const encode = layout.encode.bind(layout);
    return {
      decode,
      encode
    };
  };
  var bigInt = (length) => (property) => {
    const layout = (0, import_buffer_layout.blob)(length, property);
    const {
      encode,
      decode
    } = encodeDecode(layout);
    const bigIntLayout = layout;
    bigIntLayout.decode = (buffer, offset2) => {
      const src = decode(buffer, offset2);
      return (0, import_bigint_buffer.toBigIntLE)(import_buffer.Buffer.from(src));
    };
    bigIntLayout.encode = (bigInt2, buffer, offset2) => {
      const src = (0, import_bigint_buffer.toBufferLE)(bigInt2, length);
      return encode(src, buffer, offset2);
    };
    return bigIntLayout;
  };
  var u64 = bigInt(8);
  var SYSTEM_INSTRUCTION_LAYOUTS = Object.freeze({
    Create: {
      index: 0,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("lamports"), BufferLayout.ns64("space"), publicKey("programId")])
    },
    Assign: {
      index: 1,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("programId")])
    },
    Transfer: {
      index: 2,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), u64("lamports")])
    },
    CreateWithSeed: {
      index: 3,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("base"), rustString("seed"), BufferLayout.ns64("lamports"), BufferLayout.ns64("space"), publicKey("programId")])
    },
    AdvanceNonceAccount: {
      index: 4,
      layout: BufferLayout.struct([BufferLayout.u32("instruction")])
    },
    WithdrawNonceAccount: {
      index: 5,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("lamports")])
    },
    InitializeNonceAccount: {
      index: 6,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("authorized")])
    },
    AuthorizeNonceAccount: {
      index: 7,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("authorized")])
    },
    Allocate: {
      index: 8,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("space")])
    },
    AllocateWithSeed: {
      index: 9,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("base"), rustString("seed"), BufferLayout.ns64("space"), publicKey("programId")])
    },
    AssignWithSeed: {
      index: 10,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("base"), rustString("seed"), publicKey("programId")])
    },
    TransferWithSeed: {
      index: 11,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), u64("lamports"), rustString("seed"), publicKey("programId")])
    },
    UpgradeNonceAccount: {
      index: 12,
      layout: BufferLayout.struct([BufferLayout.u32("instruction")])
    }
  });
  var SystemProgram = class {
    constructor() {
    }
    static createAccount(params) {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.Create;
      const data = encodeData(type2, {
        lamports: params.lamports,
        space: params.space,
        programId: toBuffer(params.programId.toBuffer())
      });
      return new TransactionInstruction({
        keys: [{
          pubkey: params.fromPubkey,
          isSigner: true,
          isWritable: true
        }, {
          pubkey: params.newAccountPubkey,
          isSigner: true,
          isWritable: true
        }],
        programId: this.programId,
        data
      });
    }
    static transfer(params) {
      let data;
      let keys;
      if ("basePubkey" in params) {
        const type2 = SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed;
        data = encodeData(type2, {
          lamports: BigInt(params.lamports),
          seed: params.seed,
          programId: toBuffer(params.programId.toBuffer())
        });
        keys = [{
          pubkey: params.fromPubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: params.basePubkey,
          isSigner: true,
          isWritable: false
        }, {
          pubkey: params.toPubkey,
          isSigner: false,
          isWritable: true
        }];
      } else {
        const type2 = SYSTEM_INSTRUCTION_LAYOUTS.Transfer;
        data = encodeData(type2, {
          lamports: BigInt(params.lamports)
        });
        keys = [{
          pubkey: params.fromPubkey,
          isSigner: true,
          isWritable: true
        }, {
          pubkey: params.toPubkey,
          isSigner: false,
          isWritable: true
        }];
      }
      return new TransactionInstruction({
        keys,
        programId: this.programId,
        data
      });
    }
    static assign(params) {
      let data;
      let keys;
      if ("basePubkey" in params) {
        const type2 = SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed;
        data = encodeData(type2, {
          base: toBuffer(params.basePubkey.toBuffer()),
          seed: params.seed,
          programId: toBuffer(params.programId.toBuffer())
        });
        keys = [{
          pubkey: params.accountPubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: params.basePubkey,
          isSigner: true,
          isWritable: false
        }];
      } else {
        const type2 = SYSTEM_INSTRUCTION_LAYOUTS.Assign;
        data = encodeData(type2, {
          programId: toBuffer(params.programId.toBuffer())
        });
        keys = [{
          pubkey: params.accountPubkey,
          isSigner: true,
          isWritable: true
        }];
      }
      return new TransactionInstruction({
        keys,
        programId: this.programId,
        data
      });
    }
    static createAccountWithSeed(params) {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed;
      const data = encodeData(type2, {
        base: toBuffer(params.basePubkey.toBuffer()),
        seed: params.seed,
        lamports: params.lamports,
        space: params.space,
        programId: toBuffer(params.programId.toBuffer())
      });
      let keys = [{
        pubkey: params.fromPubkey,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: params.newAccountPubkey,
        isSigner: false,
        isWritable: true
      }];
      if (params.basePubkey != params.fromPubkey) {
        keys.push({
          pubkey: params.basePubkey,
          isSigner: true,
          isWritable: false
        });
      }
      return new TransactionInstruction({
        keys,
        programId: this.programId,
        data
      });
    }
    static createNonceAccount(params) {
      const transaction = new Transaction();
      if ("basePubkey" in params && "seed" in params) {
        transaction.add(SystemProgram.createAccountWithSeed({
          fromPubkey: params.fromPubkey,
          newAccountPubkey: params.noncePubkey,
          basePubkey: params.basePubkey,
          seed: params.seed,
          lamports: params.lamports,
          space: NONCE_ACCOUNT_LENGTH,
          programId: this.programId
        }));
      } else {
        transaction.add(SystemProgram.createAccount({
          fromPubkey: params.fromPubkey,
          newAccountPubkey: params.noncePubkey,
          lamports: params.lamports,
          space: NONCE_ACCOUNT_LENGTH,
          programId: this.programId
        }));
      }
      const initParams = {
        noncePubkey: params.noncePubkey,
        authorizedPubkey: params.authorizedPubkey
      };
      transaction.add(this.nonceInitialize(initParams));
      return transaction;
    }
    static nonceInitialize(params) {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount;
      const data = encodeData(type2, {
        authorized: toBuffer(params.authorizedPubkey.toBuffer())
      });
      const instructionData = {
        keys: [{
          pubkey: params.noncePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: SYSVAR_RENT_PUBKEY,
          isSigner: false,
          isWritable: false
        }],
        programId: this.programId,
        data
      };
      return new TransactionInstruction(instructionData);
    }
    static nonceAdvance(params) {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount;
      const data = encodeData(type2);
      const instructionData = {
        keys: [{
          pubkey: params.noncePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: params.authorizedPubkey,
          isSigner: true,
          isWritable: false
        }],
        programId: this.programId,
        data
      };
      return new TransactionInstruction(instructionData);
    }
    static nonceWithdraw(params) {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount;
      const data = encodeData(type2, {
        lamports: params.lamports
      });
      return new TransactionInstruction({
        keys: [{
          pubkey: params.noncePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: params.toPubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: SYSVAR_RENT_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: params.authorizedPubkey,
          isSigner: true,
          isWritable: false
        }],
        programId: this.programId,
        data
      });
    }
    static nonceAuthorize(params) {
      const type2 = SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount;
      const data = encodeData(type2, {
        authorized: toBuffer(params.newAuthorizedPubkey.toBuffer())
      });
      return new TransactionInstruction({
        keys: [{
          pubkey: params.noncePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: params.authorizedPubkey,
          isSigner: true,
          isWritable: false
        }],
        programId: this.programId,
        data
      });
    }
    static allocate(params) {
      let data;
      let keys;
      if ("basePubkey" in params) {
        const type2 = SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed;
        data = encodeData(type2, {
          base: toBuffer(params.basePubkey.toBuffer()),
          seed: params.seed,
          space: params.space,
          programId: toBuffer(params.programId.toBuffer())
        });
        keys = [{
          pubkey: params.accountPubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: params.basePubkey,
          isSigner: true,
          isWritable: false
        }];
      } else {
        const type2 = SYSTEM_INSTRUCTION_LAYOUTS.Allocate;
        data = encodeData(type2, {
          space: params.space
        });
        keys = [{
          pubkey: params.accountPubkey,
          isSigner: true,
          isWritable: true
        }];
      }
      return new TransactionInstruction({
        keys,
        programId: this.programId,
        data
      });
    }
  };
  SystemProgram.programId = new PublicKey("11111111111111111111111111111111");
  var CHUNK_SIZE = PACKET_DATA_SIZE - 300;
  var Loader = class {
    constructor() {
    }
    static getMinNumSignatures(dataLength) {
      return 2 * (Math.ceil(dataLength / Loader.chunkSize) + 1 + 1);
    }
    static async load(connection, payer, program, programId, data) {
      {
        const balanceNeeded = await connection.getMinimumBalanceForRentExemption(data.length);
        const programInfo = await connection.getAccountInfo(program.publicKey, "confirmed");
        let transaction = null;
        if (programInfo !== null) {
          if (programInfo.executable) {
            console.error("Program load failed, account is already executable");
            return false;
          }
          if (programInfo.data.length !== data.length) {
            transaction = transaction || new Transaction();
            transaction.add(SystemProgram.allocate({
              accountPubkey: program.publicKey,
              space: data.length
            }));
          }
          if (!programInfo.owner.equals(programId)) {
            transaction = transaction || new Transaction();
            transaction.add(SystemProgram.assign({
              accountPubkey: program.publicKey,
              programId
            }));
          }
          if (programInfo.lamports < balanceNeeded) {
            transaction = transaction || new Transaction();
            transaction.add(SystemProgram.transfer({
              fromPubkey: payer.publicKey,
              toPubkey: program.publicKey,
              lamports: balanceNeeded - programInfo.lamports
            }));
          }
        } else {
          transaction = new Transaction().add(SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: program.publicKey,
            lamports: balanceNeeded > 0 ? balanceNeeded : 1,
            space: data.length,
            programId
          }));
        }
        if (transaction !== null) {
          await sendAndConfirmTransaction(connection, transaction, [payer, program], {
            commitment: "confirmed"
          });
        }
      }
      const dataLayout = BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.u32("offset"), BufferLayout.u32("bytesLength"), BufferLayout.u32("bytesLengthPadding"), BufferLayout.seq(BufferLayout.u8("byte"), BufferLayout.offset(BufferLayout.u32(), -8), "bytes")]);
      const chunkSize = Loader.chunkSize;
      let offset2 = 0;
      let array2 = data;
      let transactions = [];
      while (array2.length > 0) {
        const bytes = array2.slice(0, chunkSize);
        const data2 = import_buffer.Buffer.alloc(chunkSize + 16);
        dataLayout.encode({
          instruction: 0,
          offset: offset2,
          bytes,
          bytesLength: 0,
          bytesLengthPadding: 0
        }, data2);
        const transaction = new Transaction().add({
          keys: [{
            pubkey: program.publicKey,
            isSigner: true,
            isWritable: true
          }],
          programId,
          data: data2
        });
        transactions.push(sendAndConfirmTransaction(connection, transaction, [payer, program], {
          commitment: "confirmed"
        }));
        if (connection._rpcEndpoint.includes("solana.com")) {
          const REQUESTS_PER_SECOND = 4;
          await sleep(1e3 / REQUESTS_PER_SECOND);
        }
        offset2 += chunkSize;
        array2 = array2.slice(chunkSize);
      }
      await Promise.all(transactions);
      {
        const dataLayout2 = BufferLayout.struct([BufferLayout.u32("instruction")]);
        const data2 = import_buffer.Buffer.alloc(dataLayout2.span);
        dataLayout2.encode({
          instruction: 1
        }, data2);
        const transaction = new Transaction().add({
          keys: [{
            pubkey: program.publicKey,
            isSigner: true,
            isWritable: true
          }, {
            pubkey: SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
          }],
          programId,
          data: data2
        });
        const deployCommitment = "processed";
        const finalizeSignature = await connection.sendTransaction(transaction, [payer, program], {
          preflightCommitment: deployCommitment
        });
        const {
          context,
          value
        } = await connection.confirmTransaction({
          signature: finalizeSignature,
          lastValidBlockHeight: transaction.lastValidBlockHeight,
          blockhash: transaction.recentBlockhash
        }, deployCommitment);
        if (value.err) {
          throw new Error(`Transaction ${finalizeSignature} failed (${JSON.stringify(value)})`);
        }
        while (true) {
          try {
            const currentSlot = await connection.getSlot({
              commitment: deployCommitment
            });
            if (currentSlot > context.slot) {
              break;
            }
          } catch (e) {
          }
          await new Promise((resolve) => setTimeout(resolve, Math.round(MS_PER_SLOT / 2)));
        }
      }
      return true;
    }
  };
  Loader.chunkSize = CHUNK_SIZE;
  var BPF_LOADER_PROGRAM_ID = new PublicKey("BPFLoader2111111111111111111111111111111111");
  var fetchImpl = globalThis.fetch;
  var LookupTableMetaLayout = {
    index: 1,
    layout: BufferLayout.struct([
      BufferLayout.u32("typeIndex"),
      u64("deactivationSlot"),
      BufferLayout.nu64("lastExtendedSlot"),
      BufferLayout.u8("lastExtendedStartIndex"),
      BufferLayout.u8(),
      BufferLayout.seq(publicKey(), BufferLayout.offset(BufferLayout.u8(), -1), "authority")
    ])
  };
  var PublicKeyFromString = coerce(instance(PublicKey), string(), (value) => new PublicKey(value));
  var RawAccountDataResult = tuple([string(), literal("base64")]);
  var BufferFromRawAccountData = coerce(instance(import_buffer.Buffer), RawAccountDataResult, (value) => import_buffer.Buffer.from(value[0], "base64"));
  var BLOCKHASH_CACHE_TIMEOUT_MS = 30 * 1e3;
  function createRpcResult(result) {
    return union([type({
      jsonrpc: literal("2.0"),
      id: string(),
      result
    }), type({
      jsonrpc: literal("2.0"),
      id: string(),
      error: type({
        code: unknown(),
        message: string(),
        data: optional(any())
      })
    })]);
  }
  var UnknownRpcResult = createRpcResult(unknown());
  function jsonRpcResult(schema) {
    return coerce(createRpcResult(schema), UnknownRpcResult, (value) => {
      if ("error" in value) {
        return value;
      } else {
        return __assign(__assign({}, value), {
          result: create(value.result, schema)
        });
      }
    });
  }
  function jsonRpcResultAndContext(value) {
    return jsonRpcResult(type({
      context: type({
        slot: number()
      }),
      value
    }));
  }
  function notificationResultAndContext(value) {
    return type({
      context: type({
        slot: number()
      }),
      value
    });
  }
  var GetInflationGovernorResult = type({
    foundation: number(),
    foundationTerm: number(),
    initial: number(),
    taper: number(),
    terminal: number()
  });
  var GetInflationRewardResult = jsonRpcResult(array(nullable(type({
    epoch: number(),
    effectiveSlot: number(),
    amount: number(),
    postBalance: number(),
    commission: optional(nullable(number()))
  }))));
  var GetRecentPrioritizationFeesResult = array(type({
    slot: number(),
    prioritizationFee: number()
  }));
  var GetInflationRateResult = type({
    total: number(),
    validator: number(),
    foundation: number(),
    epoch: number()
  });
  var GetEpochInfoResult = type({
    epoch: number(),
    slotIndex: number(),
    slotsInEpoch: number(),
    absoluteSlot: number(),
    blockHeight: optional(number()),
    transactionCount: optional(number())
  });
  var GetEpochScheduleResult = type({
    slotsPerEpoch: number(),
    leaderScheduleSlotOffset: number(),
    warmup: boolean(),
    firstNormalEpoch: number(),
    firstNormalSlot: number()
  });
  var GetLeaderScheduleResult = record(string(), array(number()));
  var TransactionErrorResult = nullable(union([type({}), string()]));
  var SignatureStatusResult = type({
    err: TransactionErrorResult
  });
  var SignatureReceivedResult = literal("receivedSignature");
  var VersionResult = type({
    "solana-core": string(),
    "feature-set": optional(number())
  });
  var SimulatedTransactionResponseStruct = jsonRpcResultAndContext(type({
    err: nullable(union([type({}), string()])),
    logs: nullable(array(string())),
    accounts: optional(nullable(array(nullable(type({
      executable: boolean(),
      owner: string(),
      lamports: number(),
      data: array(string()),
      rentEpoch: optional(number())
    }))))),
    unitsConsumed: optional(number()),
    returnData: optional(nullable(type({
      programId: string(),
      data: tuple([string(), literal("base64")])
    })))
  }));
  var BlockProductionResponseStruct = jsonRpcResultAndContext(type({
    byIdentity: record(string(), array(number())),
    range: type({
      firstSlot: number(),
      lastSlot: number()
    })
  }));
  var GetInflationGovernorRpcResult = jsonRpcResult(GetInflationGovernorResult);
  var GetInflationRateRpcResult = jsonRpcResult(GetInflationRateResult);
  var GetRecentPrioritizationFeesRpcResult = jsonRpcResult(GetRecentPrioritizationFeesResult);
  var GetEpochInfoRpcResult = jsonRpcResult(GetEpochInfoResult);
  var GetEpochScheduleRpcResult = jsonRpcResult(GetEpochScheduleResult);
  var GetLeaderScheduleRpcResult = jsonRpcResult(GetLeaderScheduleResult);
  var SlotRpcResult = jsonRpcResult(number());
  var GetSupplyRpcResult = jsonRpcResultAndContext(type({
    total: number(),
    circulating: number(),
    nonCirculating: number(),
    nonCirculatingAccounts: array(PublicKeyFromString)
  }));
  var TokenAmountResult = type({
    amount: string(),
    uiAmount: nullable(number()),
    decimals: number(),
    uiAmountString: optional(string())
  });
  var GetTokenLargestAccountsResult = jsonRpcResultAndContext(array(type({
    address: PublicKeyFromString,
    amount: string(),
    uiAmount: nullable(number()),
    decimals: number(),
    uiAmountString: optional(string())
  })));
  var GetTokenAccountsByOwner = jsonRpcResultAndContext(array(type({
    pubkey: PublicKeyFromString,
    account: type({
      executable: boolean(),
      owner: PublicKeyFromString,
      lamports: number(),
      data: BufferFromRawAccountData,
      rentEpoch: number()
    })
  })));
  var ParsedAccountDataResult = type({
    program: string(),
    parsed: unknown(),
    space: number()
  });
  var GetParsedTokenAccountsByOwner = jsonRpcResultAndContext(array(type({
    pubkey: PublicKeyFromString,
    account: type({
      executable: boolean(),
      owner: PublicKeyFromString,
      lamports: number(),
      data: ParsedAccountDataResult,
      rentEpoch: number()
    })
  })));
  var GetLargestAccountsRpcResult = jsonRpcResultAndContext(array(type({
    lamports: number(),
    address: PublicKeyFromString
  })));
  var AccountInfoResult = type({
    executable: boolean(),
    owner: PublicKeyFromString,
    lamports: number(),
    data: BufferFromRawAccountData,
    rentEpoch: number()
  });
  var KeyedAccountInfoResult = type({
    pubkey: PublicKeyFromString,
    account: AccountInfoResult
  });
  var ParsedOrRawAccountData = coerce(union([instance(import_buffer.Buffer), ParsedAccountDataResult]), union([RawAccountDataResult, ParsedAccountDataResult]), (value) => {
    if (Array.isArray(value)) {
      return create(value, BufferFromRawAccountData);
    } else {
      return value;
    }
  });
  var ParsedAccountInfoResult = type({
    executable: boolean(),
    owner: PublicKeyFromString,
    lamports: number(),
    data: ParsedOrRawAccountData,
    rentEpoch: number()
  });
  var KeyedParsedAccountInfoResult = type({
    pubkey: PublicKeyFromString,
    account: ParsedAccountInfoResult
  });
  var StakeActivationResult = type({
    state: union([literal("active"), literal("inactive"), literal("activating"), literal("deactivating")]),
    active: number(),
    inactive: number()
  });
  var GetConfirmedSignaturesForAddress2RpcResult = jsonRpcResult(array(type({
    signature: string(),
    slot: number(),
    err: TransactionErrorResult,
    memo: nullable(string()),
    blockTime: optional(nullable(number()))
  })));
  var GetSignaturesForAddressRpcResult = jsonRpcResult(array(type({
    signature: string(),
    slot: number(),
    err: TransactionErrorResult,
    memo: nullable(string()),
    blockTime: optional(nullable(number()))
  })));
  var AccountNotificationResult = type({
    subscription: number(),
    result: notificationResultAndContext(AccountInfoResult)
  });
  var ProgramAccountInfoResult = type({
    pubkey: PublicKeyFromString,
    account: AccountInfoResult
  });
  var ProgramAccountNotificationResult = type({
    subscription: number(),
    result: notificationResultAndContext(ProgramAccountInfoResult)
  });
  var SlotInfoResult = type({
    parent: number(),
    slot: number(),
    root: number()
  });
  var SlotNotificationResult = type({
    subscription: number(),
    result: SlotInfoResult
  });
  var SlotUpdateResult = union([type({
    type: union([literal("firstShredReceived"), literal("completed"), literal("optimisticConfirmation"), literal("root")]),
    slot: number(),
    timestamp: number()
  }), type({
    type: literal("createdBank"),
    parent: number(),
    slot: number(),
    timestamp: number()
  }), type({
    type: literal("frozen"),
    slot: number(),
    timestamp: number(),
    stats: type({
      numTransactionEntries: number(),
      numSuccessfulTransactions: number(),
      numFailedTransactions: number(),
      maxTransactionsPerEntry: number()
    })
  }), type({
    type: literal("dead"),
    slot: number(),
    timestamp: number(),
    err: string()
  })]);
  var SlotUpdateNotificationResult = type({
    subscription: number(),
    result: SlotUpdateResult
  });
  var SignatureNotificationResult = type({
    subscription: number(),
    result: notificationResultAndContext(union([SignatureStatusResult, SignatureReceivedResult]))
  });
  var RootNotificationResult = type({
    subscription: number(),
    result: number()
  });
  var ContactInfoResult = type({
    pubkey: string(),
    gossip: nullable(string()),
    tpu: nullable(string()),
    rpc: nullable(string()),
    version: nullable(string())
  });
  var VoteAccountInfoResult = type({
    votePubkey: string(),
    nodePubkey: string(),
    activatedStake: number(),
    epochVoteAccount: boolean(),
    epochCredits: array(tuple([number(), number(), number()])),
    commission: number(),
    lastVote: number(),
    rootSlot: nullable(number())
  });
  var GetVoteAccounts = jsonRpcResult(type({
    current: array(VoteAccountInfoResult),
    delinquent: array(VoteAccountInfoResult)
  }));
  var ConfirmationStatus = union([literal("processed"), literal("confirmed"), literal("finalized")]);
  var SignatureStatusResponse = type({
    slot: number(),
    confirmations: nullable(number()),
    err: TransactionErrorResult,
    confirmationStatus: optional(ConfirmationStatus)
  });
  var GetSignatureStatusesRpcResult = jsonRpcResultAndContext(array(nullable(SignatureStatusResponse)));
  var GetMinimumBalanceForRentExemptionRpcResult = jsonRpcResult(number());
  var AddressTableLookupStruct = type({
    accountKey: PublicKeyFromString,
    writableIndexes: array(number()),
    readonlyIndexes: array(number())
  });
  var ConfirmedTransactionResult = type({
    signatures: array(string()),
    message: type({
      accountKeys: array(string()),
      header: type({
        numRequiredSignatures: number(),
        numReadonlySignedAccounts: number(),
        numReadonlyUnsignedAccounts: number()
      }),
      instructions: array(type({
        accounts: array(number()),
        data: string(),
        programIdIndex: number()
      })),
      recentBlockhash: string(),
      addressTableLookups: optional(array(AddressTableLookupStruct))
    })
  });
  var AnnotatedAccountKey = type({
    pubkey: PublicKeyFromString,
    signer: boolean(),
    writable: boolean(),
    source: optional(union([literal("transaction"), literal("lookupTable")]))
  });
  var ConfirmedTransactionAccountsModeResult = type({
    accountKeys: array(AnnotatedAccountKey),
    signatures: array(string())
  });
  var ParsedInstructionResult = type({
    parsed: unknown(),
    program: string(),
    programId: PublicKeyFromString
  });
  var RawInstructionResult = type({
    accounts: array(PublicKeyFromString),
    data: string(),
    programId: PublicKeyFromString
  });
  var InstructionResult = union([RawInstructionResult, ParsedInstructionResult]);
  var UnknownInstructionResult = union([type({
    parsed: unknown(),
    program: string(),
    programId: string()
  }), type({
    accounts: array(string()),
    data: string(),
    programId: string()
  })]);
  var ParsedOrRawInstruction = coerce(InstructionResult, UnknownInstructionResult, (value) => {
    if ("accounts" in value) {
      return create(value, RawInstructionResult);
    } else {
      return create(value, ParsedInstructionResult);
    }
  });
  var ParsedConfirmedTransactionResult = type({
    signatures: array(string()),
    message: type({
      accountKeys: array(AnnotatedAccountKey),
      instructions: array(ParsedOrRawInstruction),
      recentBlockhash: string(),
      addressTableLookups: optional(nullable(array(AddressTableLookupStruct)))
    })
  });
  var TokenBalanceResult = type({
    accountIndex: number(),
    mint: string(),
    owner: optional(string()),
    uiTokenAmount: TokenAmountResult
  });
  var LoadedAddressesResult = type({
    writable: array(PublicKeyFromString),
    readonly: array(PublicKeyFromString)
  });
  var ConfirmedTransactionMetaResult = type({
    err: TransactionErrorResult,
    fee: number(),
    innerInstructions: optional(nullable(array(type({
      index: number(),
      instructions: array(type({
        accounts: array(number()),
        data: string(),
        programIdIndex: number()
      }))
    })))),
    preBalances: array(number()),
    postBalances: array(number()),
    logMessages: optional(nullable(array(string()))),
    preTokenBalances: optional(nullable(array(TokenBalanceResult))),
    postTokenBalances: optional(nullable(array(TokenBalanceResult))),
    loadedAddresses: optional(LoadedAddressesResult),
    computeUnitsConsumed: optional(number())
  });
  var ParsedConfirmedTransactionMetaResult = type({
    err: TransactionErrorResult,
    fee: number(),
    innerInstructions: optional(nullable(array(type({
      index: number(),
      instructions: array(ParsedOrRawInstruction)
    })))),
    preBalances: array(number()),
    postBalances: array(number()),
    logMessages: optional(nullable(array(string()))),
    preTokenBalances: optional(nullable(array(TokenBalanceResult))),
    postTokenBalances: optional(nullable(array(TokenBalanceResult))),
    loadedAddresses: optional(LoadedAddressesResult),
    computeUnitsConsumed: optional(number())
  });
  var TransactionVersionStruct = union([literal(0), literal("legacy")]);
  var RewardsResult = type({
    pubkey: string(),
    lamports: number(),
    postBalance: nullable(number()),
    rewardType: nullable(string()),
    commission: optional(nullable(number()))
  });
  var GetBlockRpcResult = jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    transactions: array(type({
      transaction: ConfirmedTransactionResult,
      meta: nullable(ConfirmedTransactionMetaResult),
      version: optional(TransactionVersionStruct)
    })),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  var GetNoneModeBlockRpcResult = jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  var GetAccountsModeBlockRpcResult = jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    transactions: array(type({
      transaction: ConfirmedTransactionAccountsModeResult,
      meta: nullable(ConfirmedTransactionMetaResult),
      version: optional(TransactionVersionStruct)
    })),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  var GetParsedBlockRpcResult = jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    transactions: array(type({
      transaction: ParsedConfirmedTransactionResult,
      meta: nullable(ParsedConfirmedTransactionMetaResult),
      version: optional(TransactionVersionStruct)
    })),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  var GetParsedAccountsModeBlockRpcResult = jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    transactions: array(type({
      transaction: ConfirmedTransactionAccountsModeResult,
      meta: nullable(ParsedConfirmedTransactionMetaResult),
      version: optional(TransactionVersionStruct)
    })),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  var GetParsedNoneModeBlockRpcResult = jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number()),
    blockHeight: nullable(number())
  })));
  var GetConfirmedBlockRpcResult = jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    transactions: array(type({
      transaction: ConfirmedTransactionResult,
      meta: nullable(ConfirmedTransactionMetaResult)
    })),
    rewards: optional(array(RewardsResult)),
    blockTime: nullable(number())
  })));
  var GetBlockSignaturesRpcResult = jsonRpcResult(nullable(type({
    blockhash: string(),
    previousBlockhash: string(),
    parentSlot: number(),
    signatures: array(string()),
    blockTime: nullable(number())
  })));
  var GetTransactionRpcResult = jsonRpcResult(nullable(type({
    slot: number(),
    meta: nullable(ConfirmedTransactionMetaResult),
    blockTime: optional(nullable(number())),
    transaction: ConfirmedTransactionResult,
    version: optional(TransactionVersionStruct)
  })));
  var GetParsedTransactionRpcResult = jsonRpcResult(nullable(type({
    slot: number(),
    transaction: ParsedConfirmedTransactionResult,
    meta: nullable(ParsedConfirmedTransactionMetaResult),
    blockTime: optional(nullable(number())),
    version: optional(TransactionVersionStruct)
  })));
  var GetRecentBlockhashAndContextRpcResult = jsonRpcResultAndContext(type({
    blockhash: string(),
    feeCalculator: type({
      lamportsPerSignature: number()
    })
  }));
  var GetLatestBlockhashRpcResult = jsonRpcResultAndContext(type({
    blockhash: string(),
    lastValidBlockHeight: number()
  }));
  var IsBlockhashValidRpcResult = jsonRpcResultAndContext(boolean());
  var PerfSampleResult = type({
    slot: number(),
    numTransactions: number(),
    numSlots: number(),
    samplePeriodSecs: number()
  });
  var GetRecentPerformanceSamplesRpcResult = jsonRpcResult(array(PerfSampleResult));
  var GetFeeCalculatorRpcResult = jsonRpcResultAndContext(nullable(type({
    feeCalculator: type({
      lamportsPerSignature: number()
    })
  })));
  var RequestAirdropRpcResult = jsonRpcResult(string());
  var SendTransactionRpcResult = jsonRpcResult(string());
  var LogsResult = type({
    err: TransactionErrorResult,
    logs: array(string()),
    signature: string()
  });
  var LogsNotificationResult = type({
    result: notificationResultAndContext(LogsResult),
    subscription: number()
  });
  var COMMON_HTTP_HEADERS = {
    "solana-client": `js/${"0.0.0-development"}`
  };
  var Keypair = class {
    constructor(keypair) {
      this._keypair = void 0;
      this._keypair = keypair != null ? keypair : generateKeypair();
    }
    static generate() {
      return new Keypair(generateKeypair());
    }
    static fromSecretKey(secretKey, options) {
      if (secretKey.byteLength !== 64) {
        throw new Error("bad secret key size");
      }
      const publicKey2 = secretKey.slice(32, 64);
      if (!options || !options.skipValidation) {
        const privateScalar = secretKey.slice(0, 32);
        const computedPublicKey = getPublicKey(privateScalar);
        for (let ii = 0; ii < 32; ii++) {
          if (publicKey2[ii] !== computedPublicKey[ii]) {
            throw new Error("provided secretKey is invalid");
          }
        }
      }
      return new Keypair({
        publicKey: publicKey2,
        secretKey
      });
    }
    static fromSeed(seed) {
      const publicKey2 = getPublicKey(seed);
      const secretKey = new Uint8Array(64);
      secretKey.set(seed);
      secretKey.set(publicKey2, 32);
      return new Keypair({
        publicKey: publicKey2,
        secretKey
      });
    }
    get publicKey() {
      return new PublicKey(this._keypair.publicKey);
    }
    get secretKey() {
      return new Uint8Array(this._keypair.secretKey);
    }
  };
  var LOOKUP_TABLE_INSTRUCTION_LAYOUTS = Object.freeze({
    CreateLookupTable: {
      index: 0,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), u64("recentSlot"), BufferLayout.u8("bumpSeed")])
    },
    FreezeLookupTable: {
      index: 1,
      layout: BufferLayout.struct([BufferLayout.u32("instruction")])
    },
    ExtendLookupTable: {
      index: 2,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), u64(), BufferLayout.seq(publicKey(), BufferLayout.offset(BufferLayout.u32(), -8), "addresses")])
    },
    DeactivateLookupTable: {
      index: 3,
      layout: BufferLayout.struct([BufferLayout.u32("instruction")])
    },
    CloseLookupTable: {
      index: 4,
      layout: BufferLayout.struct([BufferLayout.u32("instruction")])
    }
  });
  var AddressLookupTableProgram = class {
    constructor() {
    }
    static createLookupTable(params) {
      const [lookupTableAddress, bumpSeed] = PublicKey.findProgramAddressSync([params.authority.toBuffer(), (0, import_bigint_buffer.toBufferLE)(BigInt(params.recentSlot), 8)], this.programId);
      const type2 = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CreateLookupTable;
      const data = encodeData(type2, {
        recentSlot: BigInt(params.recentSlot),
        bumpSeed
      });
      const keys = [{
        pubkey: lookupTableAddress,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.authority,
        isSigner: true,
        isWritable: false
      }, {
        pubkey: params.payer,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: SystemProgram.programId,
        isSigner: false,
        isWritable: false
      }];
      return [new TransactionInstruction({
        programId: this.programId,
        keys,
        data
      }), lookupTableAddress];
    }
    static freezeLookupTable(params) {
      const type2 = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.FreezeLookupTable;
      const data = encodeData(type2);
      const keys = [{
        pubkey: params.lookupTable,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.authority,
        isSigner: true,
        isWritable: false
      }];
      return new TransactionInstruction({
        programId: this.programId,
        keys,
        data
      });
    }
    static extendLookupTable(params) {
      const type2 = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.ExtendLookupTable;
      const data = encodeData(type2, {
        addresses: params.addresses.map((addr) => addr.toBytes())
      });
      const keys = [{
        pubkey: params.lookupTable,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.authority,
        isSigner: true,
        isWritable: false
      }];
      if (params.payer) {
        keys.push({
          pubkey: params.payer,
          isSigner: true,
          isWritable: true
        }, {
          pubkey: SystemProgram.programId,
          isSigner: false,
          isWritable: false
        });
      }
      return new TransactionInstruction({
        programId: this.programId,
        keys,
        data
      });
    }
    static deactivateLookupTable(params) {
      const type2 = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.DeactivateLookupTable;
      const data = encodeData(type2);
      const keys = [{
        pubkey: params.lookupTable,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.authority,
        isSigner: true,
        isWritable: false
      }];
      return new TransactionInstruction({
        programId: this.programId,
        keys,
        data
      });
    }
    static closeLookupTable(params) {
      const type2 = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CloseLookupTable;
      const data = encodeData(type2);
      const keys = [{
        pubkey: params.lookupTable,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.authority,
        isSigner: true,
        isWritable: false
      }, {
        pubkey: params.recipient,
        isSigner: false,
        isWritable: true
      }];
      return new TransactionInstruction({
        programId: this.programId,
        keys,
        data
      });
    }
  };
  AddressLookupTableProgram.programId = new PublicKey("AddressLookupTab1e1111111111111111111111111");
  var COMPUTE_BUDGET_INSTRUCTION_LAYOUTS = Object.freeze({
    RequestUnits: {
      index: 0,
      layout: BufferLayout.struct([BufferLayout.u8("instruction"), BufferLayout.u32("units"), BufferLayout.u32("additionalFee")])
    },
    RequestHeapFrame: {
      index: 1,
      layout: BufferLayout.struct([BufferLayout.u8("instruction"), BufferLayout.u32("bytes")])
    },
    SetComputeUnitLimit: {
      index: 2,
      layout: BufferLayout.struct([BufferLayout.u8("instruction"), BufferLayout.u32("units")])
    },
    SetComputeUnitPrice: {
      index: 3,
      layout: BufferLayout.struct([BufferLayout.u8("instruction"), u64("microLamports")])
    }
  });
  var ComputeBudgetProgram = class {
    constructor() {
    }
    static requestUnits(params) {
      const type2 = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits;
      const data = encodeData(type2, params);
      return new TransactionInstruction({
        keys: [],
        programId: this.programId,
        data
      });
    }
    static requestHeapFrame(params) {
      const type2 = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame;
      const data = encodeData(type2, params);
      return new TransactionInstruction({
        keys: [],
        programId: this.programId,
        data
      });
    }
    static setComputeUnitLimit(params) {
      const type2 = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit;
      const data = encodeData(type2, params);
      return new TransactionInstruction({
        keys: [],
        programId: this.programId,
        data
      });
    }
    static setComputeUnitPrice(params) {
      const type2 = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice;
      const data = encodeData(type2, {
        microLamports: BigInt(params.microLamports)
      });
      return new TransactionInstruction({
        keys: [],
        programId: this.programId,
        data
      });
    }
  };
  ComputeBudgetProgram.programId = new PublicKey("ComputeBudget111111111111111111111111111111");
  var PRIVATE_KEY_BYTES$1 = 64;
  var PUBLIC_KEY_BYTES$1 = 32;
  var SIGNATURE_BYTES = 64;
  var ED25519_INSTRUCTION_LAYOUT = BufferLayout.struct([BufferLayout.u8("numSignatures"), BufferLayout.u8("padding"), BufferLayout.u16("signatureOffset"), BufferLayout.u16("signatureInstructionIndex"), BufferLayout.u16("publicKeyOffset"), BufferLayout.u16("publicKeyInstructionIndex"), BufferLayout.u16("messageDataOffset"), BufferLayout.u16("messageDataSize"), BufferLayout.u16("messageInstructionIndex")]);
  var Ed25519Program = class {
    constructor() {
    }
    static createInstructionWithPublicKey(params) {
      const {
        publicKey: publicKey2,
        message,
        signature,
        instructionIndex
      } = params;
      assert2(publicKey2.length === PUBLIC_KEY_BYTES$1, `Public Key must be ${PUBLIC_KEY_BYTES$1} bytes but received ${publicKey2.length} bytes`);
      assert2(signature.length === SIGNATURE_BYTES, `Signature must be ${SIGNATURE_BYTES} bytes but received ${signature.length} bytes`);
      const publicKeyOffset = ED25519_INSTRUCTION_LAYOUT.span;
      const signatureOffset = publicKeyOffset + publicKey2.length;
      const messageDataOffset = signatureOffset + signature.length;
      const numSignatures = 1;
      const instructionData = import_buffer.Buffer.alloc(messageDataOffset + message.length);
      const index = instructionIndex == null ? 65535 : instructionIndex;
      ED25519_INSTRUCTION_LAYOUT.encode({
        numSignatures,
        padding: 0,
        signatureOffset,
        signatureInstructionIndex: index,
        publicKeyOffset,
        publicKeyInstructionIndex: index,
        messageDataOffset,
        messageDataSize: message.length,
        messageInstructionIndex: index
      }, instructionData);
      instructionData.fill(publicKey2, publicKeyOffset);
      instructionData.fill(signature, signatureOffset);
      instructionData.fill(message, messageDataOffset);
      return new TransactionInstruction({
        keys: [],
        programId: Ed25519Program.programId,
        data: instructionData
      });
    }
    static createInstructionWithPrivateKey(params) {
      const {
        privateKey,
        message,
        instructionIndex
      } = params;
      assert2(privateKey.length === PRIVATE_KEY_BYTES$1, `Private key must be ${PRIVATE_KEY_BYTES$1} bytes but received ${privateKey.length} bytes`);
      try {
        const keypair = Keypair.fromSecretKey(privateKey);
        const publicKey2 = keypair.publicKey.toBytes();
        const signature = sign(message, keypair.secretKey);
        return this.createInstructionWithPublicKey({
          publicKey: publicKey2,
          message,
          signature,
          instructionIndex
        });
      } catch (error) {
        throw new Error(`Error creating instruction; ${error}`);
      }
    }
  };
  Ed25519Program.programId = new PublicKey("Ed25519SigVerify111111111111111111111111111");
  var ecdsaSign = (msgHash, privKey) => {
    const signature = import_secp256k1.secp256k1.sign(msgHash, privKey);
    return [signature.toCompactRawBytes(), signature.recovery];
  };
  import_secp256k1.secp256k1.utils.isValidPrivateKey;
  var publicKeyCreate = import_secp256k1.secp256k1.getPublicKey;
  var PRIVATE_KEY_BYTES = 32;
  var ETHEREUM_ADDRESS_BYTES = 20;
  var PUBLIC_KEY_BYTES = 64;
  var SIGNATURE_OFFSETS_SERIALIZED_SIZE = 11;
  var SECP256K1_INSTRUCTION_LAYOUT = BufferLayout.struct([BufferLayout.u8("numSignatures"), BufferLayout.u16("signatureOffset"), BufferLayout.u8("signatureInstructionIndex"), BufferLayout.u16("ethAddressOffset"), BufferLayout.u8("ethAddressInstructionIndex"), BufferLayout.u16("messageDataOffset"), BufferLayout.u16("messageDataSize"), BufferLayout.u8("messageInstructionIndex"), BufferLayout.blob(20, "ethAddress"), BufferLayout.blob(64, "signature"), BufferLayout.u8("recoveryId")]);
  var Secp256k1Program = class {
    constructor() {
    }
    static publicKeyToEthAddress(publicKey2) {
      assert2(publicKey2.length === PUBLIC_KEY_BYTES, `Public key must be ${PUBLIC_KEY_BYTES} bytes but received ${publicKey2.length} bytes`);
      try {
        return import_buffer.Buffer.from((0, import_sha3.keccak_256)(toBuffer(publicKey2))).slice(-ETHEREUM_ADDRESS_BYTES);
      } catch (error) {
        throw new Error(`Error constructing Ethereum address: ${error}`);
      }
    }
    static createInstructionWithPublicKey(params) {
      const {
        publicKey: publicKey2,
        message,
        signature,
        recoveryId,
        instructionIndex
      } = params;
      return Secp256k1Program.createInstructionWithEthAddress({
        ethAddress: Secp256k1Program.publicKeyToEthAddress(publicKey2),
        message,
        signature,
        recoveryId,
        instructionIndex
      });
    }
    static createInstructionWithEthAddress(params) {
      const {
        ethAddress: rawAddress,
        message,
        signature,
        recoveryId,
        instructionIndex = 0
      } = params;
      let ethAddress;
      if (typeof rawAddress === "string") {
        if (rawAddress.startsWith("0x")) {
          ethAddress = import_buffer.Buffer.from(rawAddress.substr(2), "hex");
        } else {
          ethAddress = import_buffer.Buffer.from(rawAddress, "hex");
        }
      } else {
        ethAddress = rawAddress;
      }
      assert2(ethAddress.length === ETHEREUM_ADDRESS_BYTES, `Address must be ${ETHEREUM_ADDRESS_BYTES} bytes but received ${ethAddress.length} bytes`);
      const dataStart = 1 + SIGNATURE_OFFSETS_SERIALIZED_SIZE;
      const ethAddressOffset = dataStart;
      const signatureOffset = dataStart + ethAddress.length;
      const messageDataOffset = signatureOffset + signature.length + 1;
      const numSignatures = 1;
      const instructionData = import_buffer.Buffer.alloc(SECP256K1_INSTRUCTION_LAYOUT.span + message.length);
      SECP256K1_INSTRUCTION_LAYOUT.encode({
        numSignatures,
        signatureOffset,
        signatureInstructionIndex: instructionIndex,
        ethAddressOffset,
        ethAddressInstructionIndex: instructionIndex,
        messageDataOffset,
        messageDataSize: message.length,
        messageInstructionIndex: instructionIndex,
        signature: toBuffer(signature),
        ethAddress: toBuffer(ethAddress),
        recoveryId
      }, instructionData);
      instructionData.fill(toBuffer(message), SECP256K1_INSTRUCTION_LAYOUT.span);
      return new TransactionInstruction({
        keys: [],
        programId: Secp256k1Program.programId,
        data: instructionData
      });
    }
    static createInstructionWithPrivateKey(params) {
      const {
        privateKey: pkey,
        message,
        instructionIndex
      } = params;
      assert2(pkey.length === PRIVATE_KEY_BYTES, `Private key must be ${PRIVATE_KEY_BYTES} bytes but received ${pkey.length} bytes`);
      try {
        const privateKey = toBuffer(pkey);
        const publicKey2 = publicKeyCreate(privateKey, false).slice(1);
        const messageHash = import_buffer.Buffer.from((0, import_sha3.keccak_256)(toBuffer(message)));
        const [signature, recoveryId] = ecdsaSign(messageHash, privateKey);
        return this.createInstructionWithPublicKey({
          publicKey: publicKey2,
          message,
          signature,
          recoveryId,
          instructionIndex
        });
      } catch (error) {
        throw new Error(`Error creating instruction; ${error}`);
      }
    }
  };
  Secp256k1Program.programId = new PublicKey("KeccakSecp256k11111111111111111111111111111");
  var _class2;
  var STAKE_CONFIG_ID = new PublicKey("StakeConfig11111111111111111111111111111111");
  var Lockup = class {
    constructor(unixTimestamp, epoch, custodian) {
      this.unixTimestamp = void 0;
      this.epoch = void 0;
      this.custodian = void 0;
      this.unixTimestamp = unixTimestamp;
      this.epoch = epoch;
      this.custodian = custodian;
    }
  };
  _class2 = Lockup;
  Lockup.default = new _class2(0, 0, PublicKey.default);
  var STAKE_INSTRUCTION_LAYOUTS = Object.freeze({
    Initialize: {
      index: 0,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), authorized(), lockup()])
    },
    Authorize: {
      index: 1,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("newAuthorized"), BufferLayout.u32("stakeAuthorizationType")])
    },
    Delegate: {
      index: 2,
      layout: BufferLayout.struct([BufferLayout.u32("instruction")])
    },
    Split: {
      index: 3,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("lamports")])
    },
    Withdraw: {
      index: 4,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("lamports")])
    },
    Deactivate: {
      index: 5,
      layout: BufferLayout.struct([BufferLayout.u32("instruction")])
    },
    Merge: {
      index: 7,
      layout: BufferLayout.struct([BufferLayout.u32("instruction")])
    },
    AuthorizeWithSeed: {
      index: 8,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("newAuthorized"), BufferLayout.u32("stakeAuthorizationType"), rustString("authoritySeed"), publicKey("authorityOwner")])
    }
  });
  var StakeAuthorizationLayout = Object.freeze({
    Staker: {
      index: 0
    },
    Withdrawer: {
      index: 1
    }
  });
  var StakeProgram = class {
    constructor() {
    }
    static initialize(params) {
      const {
        stakePubkey,
        authorized: authorized2,
        lockup: maybeLockup
      } = params;
      const lockup2 = maybeLockup || Lockup.default;
      const type2 = STAKE_INSTRUCTION_LAYOUTS.Initialize;
      const data = encodeData(type2, {
        authorized: {
          staker: toBuffer(authorized2.staker.toBuffer()),
          withdrawer: toBuffer(authorized2.withdrawer.toBuffer())
        },
        lockup: {
          unixTimestamp: lockup2.unixTimestamp,
          epoch: lockup2.epoch,
          custodian: toBuffer(lockup2.custodian.toBuffer())
        }
      });
      const instructionData = {
        keys: [{
          pubkey: stakePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: SYSVAR_RENT_PUBKEY,
          isSigner: false,
          isWritable: false
        }],
        programId: this.programId,
        data
      };
      return new TransactionInstruction(instructionData);
    }
    static createAccountWithSeed(params) {
      const transaction = new Transaction();
      transaction.add(SystemProgram.createAccountWithSeed({
        fromPubkey: params.fromPubkey,
        newAccountPubkey: params.stakePubkey,
        basePubkey: params.basePubkey,
        seed: params.seed,
        lamports: params.lamports,
        space: this.space,
        programId: this.programId
      }));
      const {
        stakePubkey,
        authorized: authorized2,
        lockup: lockup2
      } = params;
      return transaction.add(this.initialize({
        stakePubkey,
        authorized: authorized2,
        lockup: lockup2
      }));
    }
    static createAccount(params) {
      const transaction = new Transaction();
      transaction.add(SystemProgram.createAccount({
        fromPubkey: params.fromPubkey,
        newAccountPubkey: params.stakePubkey,
        lamports: params.lamports,
        space: this.space,
        programId: this.programId
      }));
      const {
        stakePubkey,
        authorized: authorized2,
        lockup: lockup2
      } = params;
      return transaction.add(this.initialize({
        stakePubkey,
        authorized: authorized2,
        lockup: lockup2
      }));
    }
    static delegate(params) {
      const {
        stakePubkey,
        authorizedPubkey,
        votePubkey
      } = params;
      const type2 = STAKE_INSTRUCTION_LAYOUTS.Delegate;
      const data = encodeData(type2);
      return new Transaction().add({
        keys: [{
          pubkey: stakePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: votePubkey,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: SYSVAR_CLOCK_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: STAKE_CONFIG_ID,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: authorizedPubkey,
          isSigner: true,
          isWritable: false
        }],
        programId: this.programId,
        data
      });
    }
    static authorize(params) {
      const {
        stakePubkey,
        authorizedPubkey,
        newAuthorizedPubkey,
        stakeAuthorizationType,
        custodianPubkey
      } = params;
      const type2 = STAKE_INSTRUCTION_LAYOUTS.Authorize;
      const data = encodeData(type2, {
        newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
        stakeAuthorizationType: stakeAuthorizationType.index
      });
      const keys = [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }];
      if (custodianPubkey) {
        keys.push({
          pubkey: custodianPubkey,
          isSigner: true,
          isWritable: false
        });
      }
      return new Transaction().add({
        keys,
        programId: this.programId,
        data
      });
    }
    static authorizeWithSeed(params) {
      const {
        stakePubkey,
        authorityBase,
        authoritySeed,
        authorityOwner,
        newAuthorizedPubkey,
        stakeAuthorizationType,
        custodianPubkey
      } = params;
      const type2 = STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
      const data = encodeData(type2, {
        newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
        stakeAuthorizationType: stakeAuthorizationType.index,
        authoritySeed,
        authorityOwner: toBuffer(authorityOwner.toBuffer())
      });
      const keys = [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: authorityBase,
        isSigner: true,
        isWritable: false
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }];
      if (custodianPubkey) {
        keys.push({
          pubkey: custodianPubkey,
          isSigner: true,
          isWritable: false
        });
      }
      return new Transaction().add({
        keys,
        programId: this.programId,
        data
      });
    }
    static splitInstruction(params) {
      const {
        stakePubkey,
        authorizedPubkey,
        splitStakePubkey,
        lamports
      } = params;
      const type2 = STAKE_INSTRUCTION_LAYOUTS.Split;
      const data = encodeData(type2, {
        lamports
      });
      return new TransactionInstruction({
        keys: [{
          pubkey: stakePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: splitStakePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: authorizedPubkey,
          isSigner: true,
          isWritable: false
        }],
        programId: this.programId,
        data
      });
    }
    static split(params, rentExemptReserve) {
      const transaction = new Transaction();
      transaction.add(SystemProgram.createAccount({
        fromPubkey: params.authorizedPubkey,
        newAccountPubkey: params.splitStakePubkey,
        lamports: rentExemptReserve,
        space: this.space,
        programId: this.programId
      }));
      return transaction.add(this.splitInstruction(params));
    }
    static splitWithSeed(params, rentExemptReserve) {
      const {
        stakePubkey,
        authorizedPubkey,
        splitStakePubkey,
        basePubkey,
        seed,
        lamports
      } = params;
      const transaction = new Transaction();
      transaction.add(SystemProgram.allocate({
        accountPubkey: splitStakePubkey,
        basePubkey,
        seed,
        space: this.space,
        programId: this.programId
      }));
      if (rentExemptReserve && rentExemptReserve > 0) {
        transaction.add(SystemProgram.transfer({
          fromPubkey: params.authorizedPubkey,
          toPubkey: splitStakePubkey,
          lamports: rentExemptReserve
        }));
      }
      return transaction.add(this.splitInstruction({
        stakePubkey,
        authorizedPubkey,
        splitStakePubkey,
        lamports
      }));
    }
    static merge(params) {
      const {
        stakePubkey,
        sourceStakePubKey,
        authorizedPubkey
      } = params;
      const type2 = STAKE_INSTRUCTION_LAYOUTS.Merge;
      const data = encodeData(type2);
      return new Transaction().add({
        keys: [{
          pubkey: stakePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: sourceStakePubKey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: SYSVAR_CLOCK_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: authorizedPubkey,
          isSigner: true,
          isWritable: false
        }],
        programId: this.programId,
        data
      });
    }
    static withdraw(params) {
      const {
        stakePubkey,
        authorizedPubkey,
        toPubkey,
        lamports,
        custodianPubkey
      } = params;
      const type2 = STAKE_INSTRUCTION_LAYOUTS.Withdraw;
      const data = encodeData(type2, {
        lamports
      });
      const keys = [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: toPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }];
      if (custodianPubkey) {
        keys.push({
          pubkey: custodianPubkey,
          isSigner: true,
          isWritable: false
        });
      }
      return new Transaction().add({
        keys,
        programId: this.programId,
        data
      });
    }
    static deactivate(params) {
      const {
        stakePubkey,
        authorizedPubkey
      } = params;
      const type2 = STAKE_INSTRUCTION_LAYOUTS.Deactivate;
      const data = encodeData(type2);
      return new Transaction().add({
        keys: [{
          pubkey: stakePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: SYSVAR_CLOCK_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: authorizedPubkey,
          isSigner: true,
          isWritable: false
        }],
        programId: this.programId,
        data
      });
    }
  };
  StakeProgram.programId = new PublicKey("Stake11111111111111111111111111111111111111");
  StakeProgram.space = 200;
  var VOTE_INSTRUCTION_LAYOUTS = Object.freeze({
    InitializeAccount: {
      index: 0,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), voteInit()])
    },
    Authorize: {
      index: 1,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), publicKey("newAuthorized"), BufferLayout.u32("voteAuthorizationType")])
    },
    Withdraw: {
      index: 3,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), BufferLayout.ns64("lamports")])
    },
    AuthorizeWithSeed: {
      index: 10,
      layout: BufferLayout.struct([BufferLayout.u32("instruction"), voteAuthorizeWithSeedArgs()])
    }
  });
  var VoteAuthorizationLayout = Object.freeze({
    Voter: {
      index: 0
    },
    Withdrawer: {
      index: 1
    }
  });
  var VoteProgram = class {
    constructor() {
    }
    static initializeAccount(params) {
      const {
        votePubkey,
        nodePubkey,
        voteInit: voteInit2
      } = params;
      const type2 = VOTE_INSTRUCTION_LAYOUTS.InitializeAccount;
      const data = encodeData(type2, {
        voteInit: {
          nodePubkey: toBuffer(voteInit2.nodePubkey.toBuffer()),
          authorizedVoter: toBuffer(voteInit2.authorizedVoter.toBuffer()),
          authorizedWithdrawer: toBuffer(voteInit2.authorizedWithdrawer.toBuffer()),
          commission: voteInit2.commission
        }
      });
      const instructionData = {
        keys: [{
          pubkey: votePubkey,
          isSigner: false,
          isWritable: true
        }, {
          pubkey: SYSVAR_RENT_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: SYSVAR_CLOCK_PUBKEY,
          isSigner: false,
          isWritable: false
        }, {
          pubkey: nodePubkey,
          isSigner: true,
          isWritable: false
        }],
        programId: this.programId,
        data
      };
      return new TransactionInstruction(instructionData);
    }
    static createAccount(params) {
      const transaction = new Transaction();
      transaction.add(SystemProgram.createAccount({
        fromPubkey: params.fromPubkey,
        newAccountPubkey: params.votePubkey,
        lamports: params.lamports,
        space: this.space,
        programId: this.programId
      }));
      return transaction.add(this.initializeAccount({
        votePubkey: params.votePubkey,
        nodePubkey: params.voteInit.nodePubkey,
        voteInit: params.voteInit
      }));
    }
    static authorize(params) {
      const {
        votePubkey,
        authorizedPubkey,
        newAuthorizedPubkey,
        voteAuthorizationType
      } = params;
      const type2 = VOTE_INSTRUCTION_LAYOUTS.Authorize;
      const data = encodeData(type2, {
        newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
        voteAuthorizationType: voteAuthorizationType.index
      });
      const keys = [{
        pubkey: votePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }];
      return new Transaction().add({
        keys,
        programId: this.programId,
        data
      });
    }
    static authorizeWithSeed(params) {
      const {
        currentAuthorityDerivedKeyBasePubkey,
        currentAuthorityDerivedKeyOwnerPubkey,
        currentAuthorityDerivedKeySeed,
        newAuthorizedPubkey,
        voteAuthorizationType,
        votePubkey
      } = params;
      const type2 = VOTE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
      const data = encodeData(type2, {
        voteAuthorizeWithSeedArgs: {
          currentAuthorityDerivedKeyOwnerPubkey: toBuffer(currentAuthorityDerivedKeyOwnerPubkey.toBuffer()),
          currentAuthorityDerivedKeySeed,
          newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
          voteAuthorizationType: voteAuthorizationType.index
        }
      });
      const keys = [{
        pubkey: votePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: currentAuthorityDerivedKeyBasePubkey,
        isSigner: true,
        isWritable: false
      }];
      return new Transaction().add({
        keys,
        programId: this.programId,
        data
      });
    }
    static withdraw(params) {
      const {
        votePubkey,
        authorizedWithdrawerPubkey,
        lamports,
        toPubkey
      } = params;
      const type2 = VOTE_INSTRUCTION_LAYOUTS.Withdraw;
      const data = encodeData(type2, {
        lamports
      });
      const keys = [{
        pubkey: votePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: toPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: authorizedWithdrawerPubkey,
        isSigner: true,
        isWritable: false
      }];
      return new Transaction().add({
        keys,
        programId: this.programId,
        data
      });
    }
    static safeWithdraw(params, currentVoteAccountBalance, rentExemptMinimum) {
      if (params.lamports > currentVoteAccountBalance - rentExemptMinimum) {
        throw new Error("Withdraw will leave vote account with insuffcient funds.");
      }
      return VoteProgram.withdraw(params);
    }
  };
  VoteProgram.programId = new PublicKey("Vote111111111111111111111111111111111111111");
  VoteProgram.space = 3731;
  var VALIDATOR_INFO_KEY = new PublicKey("Va1idator1nfo111111111111111111111111111111");
  var InfoString = type({
    name: string(),
    website: optional(string()),
    details: optional(string()),
    keybaseUsername: optional(string())
  });
  var VOTE_PROGRAM_ID = new PublicKey("Vote111111111111111111111111111111111111111");
  var VoteAccountLayout = BufferLayout.struct([
    publicKey("nodePubkey"),
    publicKey("authorizedWithdrawer"),
    BufferLayout.u8("commission"),
    BufferLayout.nu64(),
    BufferLayout.seq(BufferLayout.struct([BufferLayout.nu64("slot"), BufferLayout.u32("confirmationCount")]), BufferLayout.offset(BufferLayout.u32(), -8), "votes"),
    BufferLayout.u8("rootSlotValid"),
    BufferLayout.nu64("rootSlot"),
    BufferLayout.nu64(),
    BufferLayout.seq(BufferLayout.struct([BufferLayout.nu64("epoch"), publicKey("authorizedVoter")]), BufferLayout.offset(BufferLayout.u32(), -8), "authorizedVoters"),
    BufferLayout.struct([BufferLayout.seq(BufferLayout.struct([publicKey("authorizedPubkey"), BufferLayout.nu64("epochOfLastAuthorizedSwitch"), BufferLayout.nu64("targetEpoch")]), 32, "buf"), BufferLayout.nu64("idx"), BufferLayout.u8("isEmpty")], "priorVoters"),
    BufferLayout.nu64(),
    BufferLayout.seq(BufferLayout.struct([BufferLayout.nu64("epoch"), BufferLayout.nu64("credits"), BufferLayout.nu64("prevCredits")]), BufferLayout.offset(BufferLayout.u32(), -8), "epochCredits"),
    BufferLayout.struct([BufferLayout.nu64("slot"), BufferLayout.nu64("timestamp")], "lastTimestamp")
  ]);

  // src/nativeRequests/nativeGetAccounts.ts
  async function nativeGetAccounts() {
    const result = await (0, import_safari_extension_walletlib_js.sendNativeGetAccountsRequest)();
    return result.addresses.map((bs64EncodedAddress) => {
      const bytes = toUint8Array(bs64EncodedAddress);
      return new PublicKey(bytes);
    });
  }

  // src/Popup/App.tsx
  function App() {
    const popupContainer = {
      display: "flex",
      height: "100vh",
      backgroundColor: "#f4f4f4"
    };
    const contentStyle = {
      backgroundColor: "white",
      padding: "20px 40px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    };
    (0, import_react.useEffect)(() => {
      browser.runtime.onMessage.addListener(async (message, sender, _sendResponse) => {
        console.log("Popup message received ");
        console.log(message);
        console.log(sender);
      });
    }, []);
    const simulateGetAccountsRequest = async () => {
      const response = await nativeGetAccounts();
      console.log(response);
    };
    const simulatePrintWindow = async () => {
      console.log(window);
      const views = await browser.extension.getViews({});
      console.log(views);
    };
    const simulateWindowClose = () => {
      window.close();
    };
    return /* @__PURE__ */ import_react.default.createElement("div", {
      style: popupContainer
    }, /* @__PURE__ */ import_react.default.createElement("div", {
      style: contentStyle
    }, /* @__PURE__ */ import_react.default.createElement("h1", null, "Solana Safari Extension Wallet Pop Up"), /* @__PURE__ */ import_react.default.createElement("p", null, "This Popup UI is currently used for a debugging tool"), /* @__PURE__ */ import_react.default.createElement("button", {
      onClick: simulateGetAccountsRequest
    }, "Simulate Get Accounts Request"), /* @__PURE__ */ import_react.default.createElement("button", {
      onClick: simulatePrintWindow
    }, "Simulate Print Window"), /* @__PURE__ */ import_react.default.createElement("button", {
      onClick: simulateWindowClose
    }, "Close")));
  }

  // src/popup.tsx
  import_react_dom.default.render(/* @__PURE__ */ import_react2.default.createElement(import_react2.default.StrictMode, null, /* @__PURE__ */ import_react2.default.createElement(App, null)), document.getElementById("root"));
})();
