// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5iWCR":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "1293bae57ac04db4";
module.bundle.HMR_BUNDLE_ID = "ca4f02401a1f0e59";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"iQ2bl":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writePsdBuffer = exports.writePsdUint8Array = exports.writePsd = exports.readPsd = exports.byteArrayToBase64 = exports.initializeCanvas = void 0;
var psdWriter_1 = require("./psdWriter");
var psdReader_1 = require("./psdReader");
var helpers_1 = require("./helpers");
Object.defineProperty(exports, "initializeCanvas", {
    enumerable: true,
    get: function() {
        return helpers_1.initializeCanvas;
    }
});
__exportStar(require("./psd"), exports);
var base64_js_1 = require("base64-js");
exports.byteArrayToBase64 = base64_js_1.fromByteArray;
function readPsd(buffer, options) {
    var reader = 'buffer' in buffer ? psdReader_1.createReader(buffer.buffer, buffer.byteOffset, buffer.byteLength) : psdReader_1.createReader(buffer);
    return psdReader_1.readPsd(reader, options);
}
exports.readPsd = readPsd;
function writePsd(psd, options) {
    var writer = psdWriter_1.createWriter();
    psdWriter_1.writePsd(writer, psd, options);
    return psdWriter_1.getWriterBuffer(writer);
}
exports.writePsd = writePsd;
function writePsdUint8Array(psd, options) {
    var writer = psdWriter_1.createWriter();
    psdWriter_1.writePsd(writer, psd, options);
    return psdWriter_1.getWriterBufferNoCopy(writer);
}
exports.writePsdUint8Array = writePsdUint8Array;
function writePsdBuffer(psd, options) {
    if (typeof Buffer === 'undefined') throw new Error('Buffer not supported on this platform');
    return Buffer.from(writePsdUint8Array(psd, options));
}
exports.writePsdBuffer = writePsdBuffer;

},{"buffer":"4pU4x","./psdWriter":"cC52e","./psdReader":"95tw3","./helpers":"g9u8n","./psd":"dXaWw","base64-js":"h8vFx"}],"4pU4x":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i1;
    if (dir) {
        var foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    var val = this[offset + --byteLength2];
    var mul = 1;
    while(byteLength2 > 0 && (mul *= 256))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength3 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    var i = byteLength4;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while(++i < byteLength5 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    var i = byteLength6 - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength7 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    var i = byteLength8 - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
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
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"h8vFx","ieee754":"7hwiT"}],"h8vFx":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
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
    // if there are placeholders, only get up to the last complete 4 chars
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len2; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
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
    for(var i2 = start; i2 < end; i2 += 3){
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len3 = uint8.length;
    var extraBytes = len3 % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i3 = 0, len2 = len3 - extraBytes; i3 < len2; i3 += maxChunkLength)parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len2 ? len2 : i3 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len3 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len3 - 2] << 8) + uint8[len3 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"7hwiT":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
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
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
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
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"cC52e":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeColor = exports.writePsd = exports.writeSection = exports.writeUnicodeStringWithPadding = exports.writeUnicodeString = exports.writePascalString = exports.writeSignature = exports.writeZeros = exports.writeBytes = exports.writeFixedPointPath32 = exports.writeFixedPoint32 = exports.writeFloat64 = exports.writeFloat32 = exports.writeUint32 = exports.writeInt32 = exports.writeUint16 = exports.writeInt16 = exports.writeUint8 = exports.getWriterBufferNoCopy = exports.getWriterBuffer = exports.createWriter = void 0;
var helpers_1 = require("./helpers");
var additionalInfo_1 = require("./additionalInfo");
var imageResources_1 = require("./imageResources");
var RAW_IMAGE_DATA = false;
function createWriter(size) {
    if (size === void 0) size = 4096;
    var buffer = new ArrayBuffer(size);
    var view = new DataView(buffer);
    var offset = 0;
    return {
        buffer: buffer,
        view: view,
        offset: offset
    };
}
exports.createWriter = createWriter;
function getWriterBuffer(writer) {
    return writer.buffer.slice(0, writer.offset);
}
exports.getWriterBuffer = getWriterBuffer;
function getWriterBufferNoCopy(writer) {
    return new Uint8Array(writer.buffer, 0, writer.offset);
}
exports.getWriterBufferNoCopy = getWriterBufferNoCopy;
function writeUint8(writer, value) {
    var offset = addSize(writer, 1);
    writer.view.setUint8(offset, value);
}
exports.writeUint8 = writeUint8;
function writeInt16(writer, value) {
    var offset = addSize(writer, 2);
    writer.view.setInt16(offset, value, false);
}
exports.writeInt16 = writeInt16;
function writeUint16(writer, value) {
    var offset = addSize(writer, 2);
    writer.view.setUint16(offset, value, false);
}
exports.writeUint16 = writeUint16;
function writeInt32(writer, value) {
    var offset = addSize(writer, 4);
    writer.view.setInt32(offset, value, false);
}
exports.writeInt32 = writeInt32;
function writeUint32(writer, value) {
    var offset = addSize(writer, 4);
    writer.view.setUint32(offset, value, false);
}
exports.writeUint32 = writeUint32;
function writeFloat32(writer, value) {
    var offset = addSize(writer, 4);
    writer.view.setFloat32(offset, value, false);
}
exports.writeFloat32 = writeFloat32;
function writeFloat64(writer, value) {
    var offset = addSize(writer, 8);
    writer.view.setFloat64(offset, value, false);
}
exports.writeFloat64 = writeFloat64;
// 32-bit fixed-point number 16.16
function writeFixedPoint32(writer, value) {
    writeInt32(writer, value * 65536);
}
exports.writeFixedPoint32 = writeFixedPoint32;
// 32-bit fixed-point number 8.24
function writeFixedPointPath32(writer, value) {
    writeInt32(writer, value * 16777216);
}
exports.writeFixedPointPath32 = writeFixedPointPath32;
function writeBytes(writer, buffer) {
    if (buffer) {
        ensureSize(writer, writer.offset + buffer.length);
        var bytes = new Uint8Array(writer.buffer);
        bytes.set(buffer, writer.offset);
        writer.offset += buffer.length;
    }
}
exports.writeBytes = writeBytes;
function writeZeros(writer, count) {
    for(var i = 0; i < count; i++)writeUint8(writer, 0);
}
exports.writeZeros = writeZeros;
function writeSignature(writer, signature) {
    if (signature.length !== 4) throw new Error("Invalid signature: '" + signature + "'");
    for(var i = 0; i < 4; i++)writeUint8(writer, signature.charCodeAt(i));
}
exports.writeSignature = writeSignature;
function writePascalString(writer, text, padTo) {
    var length = text.length;
    writeUint8(writer, length);
    for(var i = 0; i < length; i++){
        var code = text.charCodeAt(i);
        writeUint8(writer, code < 128 ? code : '?'.charCodeAt(0));
    }
    while(++length % padTo)writeUint8(writer, 0);
}
exports.writePascalString = writePascalString;
function writeUnicodeString(writer, text) {
    writeUint32(writer, text.length);
    for(var i = 0; i < text.length; i++)writeUint16(writer, text.charCodeAt(i));
}
exports.writeUnicodeString = writeUnicodeString;
function writeUnicodeStringWithPadding(writer, text) {
    writeUint32(writer, text.length + 1);
    for(var i = 0; i < text.length; i++)writeUint16(writer, text.charCodeAt(i));
    writeUint16(writer, 0);
}
exports.writeUnicodeStringWithPadding = writeUnicodeStringWithPadding;
function getLargestLayerSize(layers) {
    if (layers === void 0) layers = [];
    var max = 0;
    for(var _i = 0, layers_1 = layers; _i < layers_1.length; _i++){
        var layer = layers_1[_i];
        if (layer.canvas || layer.imageData) {
            var _a = getLayerDimentions(layer), width = _a.width, height = _a.height;
            max = Math.max(max, 2 * height + 2 * width * height);
        }
        if (layer.children) max = Math.max(max, getLargestLayerSize(layer.children));
    }
    return max;
}
function writeSection(writer, round, func, writeTotalLength) {
    if (writeTotalLength === void 0) writeTotalLength = false;
    var offset = writer.offset;
    writeInt32(writer, 0);
    func();
    var length = writer.offset - offset - 4;
    var len = length;
    while(len % round !== 0){
        writeUint8(writer, 0);
        len++;
    }
    if (writeTotalLength) length = len;
    writer.view.setInt32(offset, length, false);
}
exports.writeSection = writeSection;
function writePsd(writer, psd, options) {
    if (options === void 0) options = {
    };
    if (!(+psd.width > 0 && +psd.height > 0)) throw new Error('Invalid document size');
    var imageResources = psd.imageResources || {
    };
    var writeOptions = __assign(__assign({
    }, options), {
        layerIds: []
    });
    if (writeOptions.generateThumbnail) imageResources = __assign(__assign({
    }, imageResources), {
        thumbnail: createThumbnail(psd)
    });
    var imageData = psd.imageData;
    if (!imageData && psd.canvas) imageData = psd.canvas.getContext('2d').getImageData(0, 0, psd.canvas.width, psd.canvas.height);
    if (imageData && (psd.width !== imageData.width || psd.height !== imageData.height)) throw new Error('Document canvas must have the same size as document');
    var globalAlpha = !!imageData && helpers_1.hasAlpha(imageData);
    var maxBufferSize = Math.max(getLargestLayerSize(psd.children), 8 * psd.width * psd.height + 2 * psd.height);
    var tempBuffer = new Uint8Array(maxBufferSize);
    // header
    writeSignature(writer, '8BPS');
    writeUint16(writer, 1); // version
    writeZeros(writer, 6);
    writeUint16(writer, globalAlpha ? 4 : 3); // channels
    writeUint32(writer, psd.height);
    writeUint32(writer, psd.width);
    writeUint16(writer, 8); // bits per channel
    writeUint16(writer, 3 /* RGB */ );
    // color mode data
    writeSection(writer, 1, function() {
    // TODO: implement
    });
    // image resources
    writeSection(writer, 1, function() {
        var _loop_1 = function(handler) {
            if (handler.has(imageResources)) {
                writeSignature(writer, '8BIM');
                writeUint16(writer, handler.key);
                writePascalString(writer, '', 2);
                writeSection(writer, 2, function() {
                    return handler.write(writer, imageResources);
                });
            }
        };
        for(var _i = 0, resourceHandlers_1 = imageResources_1.resourceHandlers; _i < resourceHandlers_1.length; _i++){
            var handler1 = resourceHandlers_1[_i];
            _loop_1(handler1);
        }
    });
    // layer and mask info
    writeSection(writer, 2, function() {
        writeLayerInfo(tempBuffer, writer, psd, globalAlpha, writeOptions);
        writeGlobalLayerMaskInfo(writer, psd.globalLayerMaskInfo);
        writeAdditionalLayerInfo(writer, psd, psd, writeOptions);
    });
    // image data
    var channels = globalAlpha ? [
        0,
        1,
        2,
        3
    ] : [
        0,
        1,
        2
    ];
    var data = imageData || {
        data: new Uint8Array(4 * psd.width * psd.height),
        width: psd.width,
        height: psd.height
    };
    writeUint16(writer, 1 /* RleCompressed */ );
    if (RAW_IMAGE_DATA && psd.imageDataRaw) {
        console.log('writing raw image data');
        writeBytes(writer, psd.imageDataRaw);
    } else writeBytes(writer, helpers_1.writeDataRLE(tempBuffer, data, psd.width, psd.height, channels));
}
exports.writePsd = writePsd;
function writeLayerInfo(tempBuffer, writer, psd, globalAlpha, options) {
    writeSection(writer, 4, function() {
        var _a;
        var layers = [];
        addChildren(layers, psd.children);
        if (!layers.length) layers.push({
        });
        writeInt16(writer, globalAlpha ? -layers.length : layers.length);
        var layersData = layers.map(function(l, i) {
            return getChannels(tempBuffer, l, i === 0, options);
        });
        var _loop_2 = function(layerData) {
            var layer = layerData.layer, top_1 = layerData.top, left = layerData.left, bottom = layerData.bottom, right = layerData.right, channels = layerData.channels;
            writeInt32(writer, top_1);
            writeInt32(writer, left);
            writeInt32(writer, bottom);
            writeInt32(writer, right);
            writeUint16(writer, channels.length);
            for(var _i = 0, channels_1 = channels; _i < channels_1.length; _i++){
                var c = channels_1[_i];
                writeInt16(writer, c.channelId);
                writeInt32(writer, c.length);
            }
            writeSignature(writer, '8BIM');
            writeSignature(writer, helpers_1.fromBlendMode[layer.blendMode] || 'norm');
            writeUint8(writer, Math.round(helpers_1.clamp((_a = layer.opacity) !== null && _a !== void 0 ? _a : 1, 0, 1) * 255));
            writeUint8(writer, layer.clipping ? 1 : 0);
            var flags = 8; // 1 for Photoshop 5.0 and later, tells if bit 4 has useful information
            if (layer.transparencyProtected) flags |= 1;
            if (layer.hidden) flags |= 2;
            if (layer.vectorMask || layer.sectionDivider && layer.sectionDivider.type !== 0 /* Other */ ) flags |= 16; // pixel data irrelevant to appearance of document
            writeUint8(writer, flags);
            writeUint8(writer, 0); // filler
            writeSection(writer, 1, function() {
                writeLayerMaskData(writer, layer, layerData);
                writeLayerBlendingRanges(writer, psd);
                writePascalString(writer, layer.name || '', 4);
                writeAdditionalLayerInfo(writer, layer, psd, options);
            });
        };
        // layer records
        for(var _i1 = 0, layersData_1 = layersData; _i1 < layersData_1.length; _i1++){
            var layerData1 = layersData_1[_i1];
            _loop_2(layerData1);
        }
        // layer channel image data
        for(var _b = 0, layersData_2 = layersData; _b < layersData_2.length; _b++){
            var layerData1 = layersData_2[_b];
            for(var _c = 0, _d = layerData1.channels; _c < _d.length; _c++){
                var channel = _d[_c];
                writeUint16(writer, channel.compression);
                if (channel.buffer) writeBytes(writer, channel.buffer);
            }
        }
    }, true);
}
function writeLayerMaskData(writer, _a, layerData) {
    var mask = _a.mask;
    writeSection(writer, 1, function() {
        if (!mask) return;
        var m = layerData.mask || {
        };
        writeInt32(writer, m.top);
        writeInt32(writer, m.left);
        writeInt32(writer, m.bottom);
        writeInt32(writer, m.right);
        writeUint8(writer, mask.defaultColor);
        var params = 0;
        if (mask.userMaskDensity !== undefined) params |= 1 /* UserMaskDensity */ ;
        if (mask.userMaskFeather !== undefined) params |= 2 /* UserMaskFeather */ ;
        if (mask.vectorMaskDensity !== undefined) params |= 4 /* VectorMaskDensity */ ;
        if (mask.vectorMaskFeather !== undefined) params |= 8 /* VectorMaskFeather */ ;
        var flags = 0;
        if (mask.disabled) flags |= 2 /* LayerMaskDisabled */ ;
        if (mask.positionRelativeToLayer) flags |= 1 /* PositionRelativeToLayer */ ;
        if (mask.fromVectorData) flags |= 8 /* LayerMaskFromRenderingOtherData */ ;
        if (params) flags |= 16 /* MaskHasParametersAppliedToIt */ ;
        writeUint8(writer, flags);
        if (params) {
            writeUint8(writer, params);
            if (mask.userMaskDensity !== undefined) writeUint8(writer, Math.round(mask.userMaskDensity * 255));
            if (mask.userMaskFeather !== undefined) writeFloat64(writer, mask.userMaskFeather);
            if (mask.vectorMaskDensity !== undefined) writeUint8(writer, Math.round(mask.vectorMaskDensity * 255));
            if (mask.vectorMaskFeather !== undefined) writeFloat64(writer, mask.vectorMaskFeather);
        }
        // TODO: handle rest of the fields
        writeZeros(writer, 2);
    });
}
function writeLayerBlendingRanges(writer, psd) {
    writeSection(writer, 1, function() {
        writeUint32(writer, 65535);
        writeUint32(writer, 65535);
        // TODO: use always 4 instead ?
        var channels = psd.channels || 0;
        for(var i = 0; i < channels; i++){
            writeUint32(writer, 65535);
            writeUint32(writer, 65535);
        }
    });
}
function writeGlobalLayerMaskInfo(writer, info) {
    writeSection(writer, 1, function() {
        if (info) {
            writeUint16(writer, info.overlayColorSpace);
            writeUint16(writer, info.colorSpace1);
            writeUint16(writer, info.colorSpace2);
            writeUint16(writer, info.colorSpace3);
            writeUint16(writer, info.colorSpace4);
            writeUint16(writer, info.opacity * 255);
            writeUint8(writer, info.kind);
            writeZeros(writer, 3);
        }
    });
}
function writeAdditionalLayerInfo(writer, target, psd, options) {
    var _loop_3 = function(handler) {
        var key = handler.key;
        if (key === 'Txt2' && options.invalidateTextLayers) return "continue";
        if (handler.has(target)) {
            writeSignature(writer, '8BIM');
            writeSignature(writer, key);
            var align = key === 'Txt2' || key === 'luni' || key === 'vmsk' || key === 'artb' || key === 'artd' || key === 'vogk' || key === 'SoLd' || key === 'lnk2' || key === 'vscg' || key === 'vsms' || key === 'GdFl' ? 4 : 2;
            writeSection(writer, align, function() {
                return handler.write(writer, target, psd, options);
            }, key !== 'Txt2');
        }
    };
    for(var _i = 0, infoHandlers_1 = additionalInfo_1.infoHandlers; _i < infoHandlers_1.length; _i++){
        var handler2 = infoHandlers_1[_i];
        _loop_3(handler2);
    }
}
function addChildren(layers, children) {
    if (!children) return;
    for(var _i = 0, children_1 = children; _i < children_1.length; _i++){
        var c = children_1[_i];
        if (c.children && c.canvas) throw new Error("Invalid layer, cannot have both 'canvas' and 'children' properties");
        if (c.children && c.imageData) throw new Error("Invalid layer, cannot have both 'imageData' and 'children' properties");
        if (c.children) {
            layers.push({
                name: '</Layer group>',
                sectionDivider: {
                    type: 3 /* BoundingSectionDivider */ 
                }
            });
            addChildren(layers, c.children);
            layers.push(__assign({
                sectionDivider: {
                    type: c.opened === false ? 2 /* ClosedFolder */  : 1 /* OpenFolder */ ,
                    key: helpers_1.fromBlendMode[c.blendMode] || 'pass',
                    subType: 0
                }
            }, c));
        } else layers.push(__assign({
        }, c));
    }
}
function resizeBuffer(writer, size) {
    var newLength = writer.buffer.byteLength;
    do newLength *= 2;
    while (size > newLength)
    var newBuffer = new ArrayBuffer(newLength);
    var newBytes = new Uint8Array(newBuffer);
    var oldBytes = new Uint8Array(writer.buffer);
    newBytes.set(oldBytes);
    writer.buffer = newBuffer;
    writer.view = new DataView(writer.buffer);
}
function ensureSize(writer, size) {
    if (size > writer.buffer.byteLength) resizeBuffer(writer, size);
}
function addSize(writer, size) {
    var offset = writer.offset;
    ensureSize(writer, writer.offset += size);
    return offset;
}
function createThumbnail(psd) {
    var canvas = helpers_1.createCanvas(10, 10);
    var scale = 1;
    if (psd.width > psd.height) {
        canvas.width = 160;
        canvas.height = Math.floor(psd.height * (canvas.width / psd.width));
        scale = canvas.width / psd.width;
    } else {
        canvas.height = 160;
        canvas.width = Math.floor(psd.width * (canvas.height / psd.height));
        scale = canvas.height / psd.height;
    }
    var context = canvas.getContext('2d');
    context.scale(scale, scale);
    if (psd.imageData) {
        var temp = helpers_1.createCanvas(psd.imageData.width, psd.imageData.height);
        temp.getContext('2d').putImageData(psd.imageData, 0, 0);
        context.drawImage(temp, 0, 0);
    } else if (psd.canvas) context.drawImage(psd.canvas, 0, 0);
    return canvas;
}
function getChannels(tempBuffer, layer, background, options) {
    var layerData = getLayerChannels(tempBuffer, layer, background, options);
    var mask = layer.mask;
    if (mask) {
        var _a = mask.top, top_2 = _a === void 0 ? 0 : _a, _b = mask.left, left = _b === void 0 ? 0 : _b, _c = mask.right, right = _c === void 0 ? 0 : _c, _d = mask.bottom, bottom = _d === void 0 ? 0 : _d;
        var _e = getLayerDimentions(mask), width = _e.width, height = _e.height;
        var imageData = mask.imageData;
        if (!imageData && mask.canvas && width && height) imageData = mask.canvas.getContext('2d').getImageData(0, 0, width, height);
        if (width && height && imageData) {
            right = left + width;
            bottom = top_2 + height;
            var buffer = helpers_1.writeDataRLE(tempBuffer, imageData, width, height, [
                0
            ]);
            if (RAW_IMAGE_DATA && layer.maskDataRaw) // console.log('written raw layer image data');
            buffer = layer.maskDataRaw;
            layerData.mask = {
                top: top_2,
                left: left,
                right: right,
                bottom: bottom
            };
            layerData.channels.push({
                channelId: -2 /* UserMask */ ,
                compression: 1 /* RleCompressed */ ,
                buffer: buffer,
                length: 2 + buffer.length
            });
        } else {
            layerData.mask = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            };
            layerData.channels.push({
                channelId: -2 /* UserMask */ ,
                compression: 0 /* RawData */ ,
                buffer: new Uint8Array(0),
                length: 0
            });
        }
    }
    return layerData;
}
function getLayerDimentions(_a) {
    var canvas = _a.canvas, imageData = _a.imageData;
    return imageData || canvas || {
        width: 0,
        height: 0
    };
}
function cropImageData(data, left, top, width, height) {
    var croppedData = helpers_1.createImageData(width, height);
    var srcData = data.data;
    var dstData = croppedData.data;
    for(var y = 0; y < height; y++)for(var x = 0; x < width; x++){
        var src = (x + left + (y + top) * width) * 4;
        var dst = (x + y * width) * 4;
        dstData[dst] = srcData[src];
        dstData[dst + 1] = srcData[src + 1];
        dstData[dst + 2] = srcData[src + 2];
        dstData[dst + 3] = srcData[src + 3];
    }
    return croppedData;
}
function getLayerChannels(tempBuffer, layer, background, options) {
    var _a;
    var _b = layer.top, top = _b === void 0 ? 0 : _b, _c = layer.left, left = _c === void 0 ? 0 : _c, _d = layer.right, right = _d === void 0 ? 0 : _d, _e = layer.bottom, bottom = _e === void 0 ? 0 : _e;
    var channels = [
        {
            channelId: -1 /* Transparency */ ,
            compression: 0 /* RawData */ ,
            buffer: undefined,
            length: 2
        },
        {
            channelId: 0 /* Red */ ,
            compression: 0 /* RawData */ ,
            buffer: undefined,
            length: 2
        },
        {
            channelId: 1 /* Green */ ,
            compression: 0 /* RawData */ ,
            buffer: undefined,
            length: 2
        },
        {
            channelId: 2 /* Blue */ ,
            compression: 0 /* RawData */ ,
            buffer: undefined,
            length: 2
        }, 
    ];
    var _f = getLayerDimentions(layer), width = _f.width, height = _f.height;
    if (!(layer.canvas || layer.imageData) || !width || !height) {
        right = left;
        bottom = top;
        return {
            layer: layer,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            channels: channels
        };
    }
    right = left + width;
    bottom = top + height;
    var data = layer.imageData || layer.canvas.getContext('2d').getImageData(0, 0, width, height);
    if (options.trimImageData) {
        var trimmed = trimData(data);
        if (trimmed.left !== 0 || trimmed.top !== 0 || trimmed.right !== data.width || trimmed.bottom !== data.height) {
            left += trimmed.left;
            top += trimmed.top;
            right -= data.width - trimmed.right;
            bottom -= data.height - trimmed.bottom;
            width = right - left;
            height = bottom - top;
            if (!width || !height) return {
                layer: layer,
                top: top,
                left: left,
                right: right,
                bottom: bottom,
                channels: channels
            };
            if (layer.imageData) data = cropImageData(data, trimmed.left, trimmed.top, width, height);
            else data = layer.canvas.getContext('2d').getImageData(trimmed.left, trimmed.top, width, height);
        }
    }
    var channelIds = [
        0 /* Red */ ,
        1 /* Green */ ,
        2 /* Blue */ , 
    ];
    if (!background || options.noBackground || layer.mask || helpers_1.hasAlpha(data) || RAW_IMAGE_DATA && ((_a = layer.imageDataRaw) === null || _a === void 0 ? void 0 : _a['-1'])) channelIds.unshift(-1 /* Transparency */ );
    channels = channelIds.map(function(channel) {
        var offset = helpers_1.offsetForChannel(channel);
        var buffer = helpers_1.writeDataRLE(tempBuffer, data, width, height, [
            offset
        ]);
        if (RAW_IMAGE_DATA && layer.imageDataRaw) // console.log('written raw layer image data');
        buffer = layer.imageDataRaw[channel];
        return {
            channelId: channel,
            compression: 1 /* RleCompressed */ ,
            buffer: buffer,
            length: 2 + buffer.length
        };
    });
    return {
        layer: layer,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        channels: channels
    };
}
function isRowEmpty(_a, y, left, right) {
    var data = _a.data, width = _a.width;
    var start = (y * width + left) * 4 + 3 | 0;
    var end = start + (right - left) * 4 | 0;
    for(var i = start; i < end; i = i + 4 | 0){
        if (data[i] !== 0) return false;
    }
    return true;
}
function isColEmpty(_a, x, top, bottom) {
    var data = _a.data, width = _a.width;
    var stride = width * 4 | 0;
    var start = top * stride + x * 4 + 3 | 0;
    for(var y = top, i = start; y < bottom; y++, i = i + stride | 0){
        if (data[i] !== 0) return false;
    }
    return true;
}
function trimData(data) {
    var top = 0;
    var left = 0;
    var right = data.width;
    var bottom = data.height;
    while(top < bottom && isRowEmpty(data, top, left, right))top++;
    while(bottom > top && isRowEmpty(data, bottom - 1, left, right))bottom--;
    while(left < right && isColEmpty(data, left, top, bottom))left++;
    while(right > left && isColEmpty(data, right - 1, top, bottom))right--;
    return {
        top: top,
        left: left,
        right: right,
        bottom: bottom
    };
}
function writeColor(writer, color) {
    if (!color) {
        writeUint16(writer, 0 /* RGB */ );
        writeZeros(writer, 8);
    } else if ('r' in color) {
        writeUint16(writer, 0 /* RGB */ );
        writeUint16(writer, Math.round(color.r * 257));
        writeUint16(writer, Math.round(color.g * 257));
        writeUint16(writer, Math.round(color.b * 257));
        writeUint16(writer, 0);
    } else if ('l' in color) {
        writeUint16(writer, 7 /* Lab */ );
        writeUint16(writer, Math.round(color.l * 100));
        writeUint16(writer, Math.round(color.a * 100));
        writeUint16(writer, Math.round(color.b * 100));
        writeUint16(writer, 0);
    } else if ('h' in color) {
        writeUint16(writer, 1 /* HSB */ );
        writeUint16(writer, Math.round(color.h));
        writeUint16(writer, Math.round(color.s));
        writeUint16(writer, Math.round(color.b));
        writeUint16(writer, 0);
    } else if ('c' in color) {
        writeUint16(writer, 2 /* CMYK */ );
        writeUint16(writer, Math.round(color.c));
        writeUint16(writer, Math.round(color.m));
        writeUint16(writer, Math.round(color.y));
        writeUint16(writer, Math.round(color.k));
    } else {
        writeUint16(writer, 8 /* Grayscale */ );
        writeUint16(writer, Math.round(color.k));
        writeZeros(writer, 6);
    }
}
exports.writeColor = writeColor;

},{"./helpers":"g9u8n","./additionalInfo":"15kta","./imageResources":"hqgD7"}],"g9u8n":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initializeCanvas = exports.createImageData = exports.createCanvasFromData = exports.createCanvas = exports.writeDataRLE = exports.writeDataRaw = exports.decodeBitmap = exports.resetImageData = exports.hasAlpha = exports.clamp = exports.offsetForChannel = exports.Compression = exports.ChannelID = exports.MaskParams = exports.LayerMaskFlags = exports.ColorSpace = exports.createEnum = exports.revMap = exports.layerColors = exports.toBlendMode = exports.fromBlendMode = void 0;
var base64_js_1 = require("base64-js");
exports.fromBlendMode = {
};
exports.toBlendMode = {
    'pass': 'pass through',
    'norm': 'normal',
    'diss': 'dissolve',
    'dark': 'darken',
    'mul ': 'multiply',
    'idiv': 'color burn',
    'lbrn': 'linear burn',
    'dkCl': 'darker color',
    'lite': 'lighten',
    'scrn': 'screen',
    'div ': 'color dodge',
    'lddg': 'linear dodge',
    'lgCl': 'lighter color',
    'over': 'overlay',
    'sLit': 'soft light',
    'hLit': 'hard light',
    'vLit': 'vivid light',
    'lLit': 'linear light',
    'pLit': 'pin light',
    'hMix': 'hard mix',
    'diff': 'difference',
    'smud': 'exclusion',
    'fsub': 'subtract',
    'fdiv': 'divide',
    'hue ': 'hue',
    'sat ': 'saturation',
    'colr': 'color',
    'lum ': 'luminosity'
};
Object.keys(exports.toBlendMode).forEach(function(key) {
    return exports.fromBlendMode[exports.toBlendMode[key]] = key;
});
exports.layerColors = [
    'none',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'gray'
];
function revMap(map) {
    var result = {
    };
    Object.keys(map).forEach(function(key) {
        return result[map[key]] = key;
    });
    return result;
}
exports.revMap = revMap;
function createEnum(prefix, def, map) {
    var rev = revMap(map);
    var decode = function(val) {
        var value = val.split('.')[1];
        if (value && !rev[value]) throw new Error("Unrecognized value for enum: " + val);
        return rev[value] || def;
    };
    var encode = function(val) {
        if (val && !map[val]) throw new Error("Invalid value for enum: " + val);
        return prefix + "." + (map[val] || map[def]);
    };
    return {
        decode: decode,
        encode: encode
    };
}
exports.createEnum = createEnum;
var ColorSpace;
(function(ColorSpace1) {
    ColorSpace1[ColorSpace1["RGB"] = 0] = "RGB";
    ColorSpace1[ColorSpace1["HSB"] = 1] = "HSB";
    ColorSpace1[ColorSpace1["CMYK"] = 2] = "CMYK";
    ColorSpace1[ColorSpace1["Lab"] = 7] = "Lab";
    ColorSpace1[ColorSpace1["Grayscale"] = 8] = "Grayscale";
})(ColorSpace = exports.ColorSpace || (exports.ColorSpace = {
}));
var LayerMaskFlags;
(function(LayerMaskFlags1) {
    LayerMaskFlags1[LayerMaskFlags1["PositionRelativeToLayer"] = 1] = "PositionRelativeToLayer";
    LayerMaskFlags1[LayerMaskFlags1["LayerMaskDisabled"] = 2] = "LayerMaskDisabled";
    LayerMaskFlags1[LayerMaskFlags1["InvertLayerMaskWhenBlending"] = 4] = "InvertLayerMaskWhenBlending";
    LayerMaskFlags1[LayerMaskFlags1["LayerMaskFromRenderingOtherData"] = 8] = "LayerMaskFromRenderingOtherData";
    LayerMaskFlags1[LayerMaskFlags1["MaskHasParametersAppliedToIt"] = 16] = "MaskHasParametersAppliedToIt";
})(LayerMaskFlags = exports.LayerMaskFlags || (exports.LayerMaskFlags = {
}));
var MaskParams;
(function(MaskParams1) {
    MaskParams1[MaskParams1["UserMaskDensity"] = 1] = "UserMaskDensity";
    MaskParams1[MaskParams1["UserMaskFeather"] = 2] = "UserMaskFeather";
    MaskParams1[MaskParams1["VectorMaskDensity"] = 4] = "VectorMaskDensity";
    MaskParams1[MaskParams1["VectorMaskFeather"] = 8] = "VectorMaskFeather";
})(MaskParams = exports.MaskParams || (exports.MaskParams = {
}));
var ChannelID;
(function(ChannelID1) {
    ChannelID1[ChannelID1["Red"] = 0] = "Red";
    ChannelID1[ChannelID1["Green"] = 1] = "Green";
    ChannelID1[ChannelID1["Blue"] = 2] = "Blue";
    ChannelID1[ChannelID1["Transparency"] = -1] = "Transparency";
    ChannelID1[ChannelID1["UserMask"] = -2] = "UserMask";
    ChannelID1[ChannelID1["RealUserMask"] = -3] = "RealUserMask";
})(ChannelID = exports.ChannelID || (exports.ChannelID = {
}));
var Compression;
(function(Compression1) {
    Compression1[Compression1["RawData"] = 0] = "RawData";
    Compression1[Compression1["RleCompressed"] = 1] = "RleCompressed";
    Compression1[Compression1["ZipWithoutPrediction"] = 2] = "ZipWithoutPrediction";
    Compression1[Compression1["ZipWithPrediction"] = 3] = "ZipWithPrediction";
})(Compression = exports.Compression || (exports.Compression = {
}));
function offsetForChannel(channelId) {
    switch(channelId){
        case 0 /* Red */ :
            return 0;
        case 1 /* Green */ :
            return 1;
        case 2 /* Blue */ :
            return 2;
        case -1 /* Transparency */ :
            return 3;
        default:
            return channelId + 1;
    }
}
exports.offsetForChannel = offsetForChannel;
function clamp(value, min, max) {
    return value < min ? min : value > max ? max : value;
}
exports.clamp = clamp;
function hasAlpha(data) {
    var size = data.width * data.height * 4;
    for(var i = 3; i < size; i += 4){
        if (data.data[i] !== 255) return true;
    }
    return false;
}
exports.hasAlpha = hasAlpha;
function resetImageData(_a) {
    var width = _a.width, height = _a.height, data = _a.data;
    var size = width * height | 0;
    var buffer = new Uint32Array(data.buffer);
    for(var p = 0; p < size; p = p + 1 | 0)buffer[p] = 4278190080;
}
exports.resetImageData = resetImageData;
function decodeBitmap(input, output, width, height) {
    for(var y = 0, p = 0, o = 0; y < height; y++)for(var x = 0; x < width;){
        var b = input[o++];
        for(var i = 0; i < 8 && x < width; i++, x++){
            var v = b & 128 ? 0 : 255;
            b = b << 1;
            output[p++] = v;
            output[p++] = v;
            output[p++] = v;
            output[p++] = 255;
        }
    }
}
exports.decodeBitmap = decodeBitmap;
function writeDataRaw(data, offset, width, height) {
    if (!width || !height) return undefined;
    var array = new Uint8Array(width * height);
    for(var i = 0; i < array.length; i++)array[i] = data.data[i * 4 + offset];
    return array;
}
exports.writeDataRaw = writeDataRaw;
function writeDataRLE(buffer, _a, width, height, offsets) {
    var data = _a.data;
    if (!width || !height) return undefined;
    var stride = 4 * width | 0;
    var ol = 0;
    var o = offsets.length * 2 * height | 0;
    for(var _i = 0, offsets_1 = offsets; _i < offsets_1.length; _i++){
        var offset = offsets_1[_i];
        for(var y = 0, p = offset | 0; y < height; y++){
            var strideStart = y * stride | 0;
            var strideEnd = strideStart + stride | 0;
            var lastIndex = strideEnd + offset - 4 | 0;
            var lastIndex2 = lastIndex - 4 | 0;
            var startOffset = o;
            for(p = strideStart + offset | 0; p < strideEnd; p = p + 4 | 0){
                if (p < lastIndex2) {
                    var value1 = data[p];
                    p = p + 4 | 0;
                    var value2 = data[p];
                    p = p + 4 | 0;
                    var value3 = data[p];
                    if (value1 === value2 && value1 === value3) {
                        var count = 3;
                        while(count < 128 && p < lastIndex && data[p + 4 | 0] === value1){
                            count = count + 1 | 0;
                            p = p + 4 | 0;
                        }
                        buffer[o++] = 1 - count;
                        buffer[o++] = value1;
                    } else {
                        var countIndex = o;
                        var writeLast = true;
                        var count = 1;
                        buffer[o++] = 0;
                        buffer[o++] = value1;
                        while(p < lastIndex && count < 128){
                            p = p + 4 | 0;
                            value1 = value2;
                            value2 = value3;
                            value3 = data[p];
                            if (value1 === value2 && value1 === value3) {
                                p = p - 12 | 0;
                                writeLast = false;
                                break;
                            } else {
                                count++;
                                buffer[o++] = value1;
                            }
                        }
                        if (writeLast) {
                            if (count < 127) {
                                buffer[o++] = value2;
                                buffer[o++] = value3;
                                count += 2;
                            } else if (count < 128) {
                                buffer[o++] = value2;
                                count++;
                                p = p - 4 | 0;
                            } else p = p - 8 | 0;
                        }
                        buffer[countIndex] = count - 1;
                    }
                } else if (p === lastIndex) {
                    buffer[o++] = 0;
                    buffer[o++] = data[p];
                } else {
                    buffer[o++] = 1;
                    buffer[o++] = data[p];
                    p = p + 4 | 0;
                    buffer[o++] = data[p];
                }
            }
            var length_1 = o - startOffset;
            buffer[ol++] = length_1 >> 8 & 255;
            buffer[ol++] = length_1 & 255;
        }
    }
    return buffer.slice(0, o);
}
exports.writeDataRLE = writeDataRLE;
var createCanvas = function() {
    throw new Error('Canvas not initialized, use initializeCanvas method to set up createCanvas method');
};
exports.createCanvas = createCanvas;
var createCanvasFromData = function() {
    throw new Error('Canvas not initialized, use initializeCanvas method to set up createCanvasFromData method');
};
exports.createCanvasFromData = createCanvasFromData;
var tempCanvas = undefined;
var createImageData = function(width, height) {
    if (!tempCanvas) tempCanvas = exports.createCanvas(1, 1);
    return tempCanvas.getContext('2d').createImageData(width, height);
};
exports.createImageData = createImageData;
if (typeof document !== 'undefined') {
    exports.createCanvas = function(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    };
    exports.createCanvasFromData = function(data) {
        var image = new Image();
        image.src = 'data:image/jpeg;base64,' + base64_js_1.fromByteArray(data);
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        canvas.getContext('2d').drawImage(image, 0, 0);
        return canvas;
    };
}
function initializeCanvas(createCanvasMethod, createCanvasFromDataMethod, createImageDataMethod) {
    exports.createCanvas = createCanvasMethod;
    exports.createCanvasFromData = createCanvasFromDataMethod || exports.createCanvasFromData;
    exports.createImageData = createImageDataMethod || exports.createImageData;
}
exports.initializeCanvas = initializeCanvas;

},{"base64-js":"h8vFx"}],"15kta":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.infoHandlersMap = exports.infoHandlers = void 0;
var base64_js_1 = require("base64-js");
var effectsHelpers_1 = require("./effectsHelpers");
var helpers_1 = require("./helpers");
var psdReader_1 = require("./psdReader");
var psdWriter_1 = require("./psdWriter");
var descriptor_1 = require("./descriptor");
var engineData_1 = require("./engineData");
var text_1 = require("./text");
var MOCK_HANDLERS = false;
exports.infoHandlers = [];
exports.infoHandlersMap = {
};
function addHandler(key, has, read, write) {
    var handler = {
        key: key,
        has: has,
        read: read,
        write: write
    };
    exports.infoHandlers.push(handler);
    exports.infoHandlersMap[handler.key] = handler;
}
function addHandlerAlias(key, target) {
    exports.infoHandlersMap[key] = exports.infoHandlersMap[target];
}
function hasKey(key) {
    return function(target) {
        return target[key] !== undefined;
    };
}
addHandler('TySh', hasKey('text'), function(reader, target, leftBytes) {
    if (psdReader_1.readInt16(reader) !== 1) throw new Error("Invalid TySh version");
    var transform = [];
    for(var i = 0; i < 6; i++)transform.push(psdReader_1.readFloat64(reader));
    if (psdReader_1.readInt16(reader) !== 50) throw new Error("Invalid TySh text version");
    var text = descriptor_1.readVersionAndDescriptor(reader);
    if (psdReader_1.readInt16(reader) !== 1) throw new Error("Invalid TySh warp version");
    var warp = descriptor_1.readVersionAndDescriptor(reader);
    target.text = {
        transform: transform,
        left: psdReader_1.readFloat32(reader),
        top: psdReader_1.readFloat32(reader),
        right: psdReader_1.readFloat32(reader),
        bottom: psdReader_1.readFloat32(reader),
        text: text['Txt '].replace(/\r/g, '\n'),
        index: text.TextIndex || 0,
        gridding: descriptor_1.textGridding.decode(text.textGridding),
        antiAlias: descriptor_1.Annt.decode(text.AntA),
        orientation: descriptor_1.Ornt.decode(text.Ornt),
        warp: {
            style: descriptor_1.warpStyle.decode(warp.warpStyle),
            value: warp.warpValue || 0,
            perspective: warp.warpPerspective || 0,
            perspectiveOther: warp.warpPerspectiveOther || 0,
            rotate: descriptor_1.Ornt.decode(warp.warpRotate)
        }
    };
    if (text.EngineData) {
        var engineData = text_1.decodeEngineData(engineData_1.parseEngineData(text.EngineData));
        // const before = parseEngineData(text.EngineData);
        // const after = encodeEngineData(engineData);
        // require('fs').writeFileSync('before.txt', require('util').inspect(before, false, 99, false), 'utf8');
        // require('fs').writeFileSync('after.txt', require('util').inspect(after, false, 99, false), 'utf8');
        // console.log(require('util').inspect(parseEngineData(text.EngineData), false, 99, true));
        target.text = __assign(__assign({
        }, target.text), engineData);
    // console.log(require('util').inspect(target.text, false, 99, true));
    }
    psdReader_1.skipBytes(reader, leftBytes());
}, function(writer, target) {
    var text = target.text;
    var warp = text.warp || {
    };
    var transform = text.transform || [
        1,
        0,
        0,
        1,
        0,
        0
    ];
    var textDescriptor = {
        'Txt ': (text.text || '').replace(/\r?\n/g, '\r'),
        textGridding: descriptor_1.textGridding.encode(text.gridding),
        Ornt: descriptor_1.Ornt.encode(text.orientation),
        AntA: descriptor_1.Annt.encode(text.antiAlias),
        TextIndex: text.index || 0,
        EngineData: engineData_1.serializeEngineData(text_1.encodeEngineData(text))
    };
    psdWriter_1.writeInt16(writer, 1); // version
    for(var i = 0; i < 6; i++)psdWriter_1.writeFloat64(writer, transform[i]);
    psdWriter_1.writeInt16(writer, 50); // text version
    descriptor_1.writeVersionAndDescriptor(writer, '', 'TxLr', textDescriptor);
    psdWriter_1.writeInt16(writer, 1); // warp version
    descriptor_1.writeVersionAndDescriptor(writer, '', 'warp', encodeWarp(warp));
    psdWriter_1.writeFloat32(writer, text.left);
    psdWriter_1.writeFloat32(writer, text.top);
    psdWriter_1.writeFloat32(writer, text.right);
    psdWriter_1.writeFloat32(writer, text.bottom);
// writeZeros(writer, 2);
});
// vector fills
addHandler('SoCo', function(target) {
    return target.vectorFill !== undefined && target.vectorStroke === undefined && target.vectorFill.type === 'color';
}, function(reader, target) {
    var descriptor = descriptor_1.readVersionAndDescriptor(reader);
    target.vectorFill = parseVectorContent(descriptor);
}, function(writer, target) {
    var descriptor = serializeVectorContent(target.vectorFill).descriptor;
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', descriptor);
});
addHandler('GdFl', function(target) {
    return target.vectorFill !== undefined && target.vectorStroke === undefined && (target.vectorFill.type === 'solid' || target.vectorFill.type === 'noise');
}, function(reader, target, left) {
    var descriptor = descriptor_1.readVersionAndDescriptor(reader);
    target.vectorFill = parseVectorContent(descriptor);
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var descriptor = serializeVectorContent(target.vectorFill).descriptor;
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', descriptor);
});
addHandler('PtFl', function(target) {
    return target.vectorFill !== undefined && target.vectorStroke === undefined && target.vectorFill.type === 'pattern';
}, function(reader, target) {
    var descriptor = descriptor_1.readVersionAndDescriptor(reader);
    target.vectorFill = parseVectorContent(descriptor);
}, function(writer, target) {
    var descriptor = serializeVectorContent(target.vectorFill).descriptor;
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', descriptor);
});
addHandler('vscg', function(target) {
    return target.vectorFill !== undefined && target.vectorStroke !== undefined;
}, function(reader, target, left) {
    psdReader_1.readSignature(reader); // key
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    target.vectorFill = parseVectorContent(desc);
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var _a = serializeVectorContent(target.vectorFill), descriptor = _a.descriptor, key = _a.key;
    psdWriter_1.writeSignature(writer, key);
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', descriptor);
});
function readBezierKnot(reader, width, height) {
    var y0 = psdReader_1.readFixedPointPath32(reader) * height;
    var x0 = psdReader_1.readFixedPointPath32(reader) * width;
    var y1 = psdReader_1.readFixedPointPath32(reader) * height;
    var x1 = psdReader_1.readFixedPointPath32(reader) * width;
    var y2 = psdReader_1.readFixedPointPath32(reader) * height;
    var x2 = psdReader_1.readFixedPointPath32(reader) * width;
    return [
        x0,
        y0,
        x1,
        y1,
        x2,
        y2
    ];
}
function writeBezierKnot(writer, points, width, height) {
    psdWriter_1.writeFixedPointPath32(writer, points[1] / height); // y0
    psdWriter_1.writeFixedPointPath32(writer, points[0] / width); // x0
    psdWriter_1.writeFixedPointPath32(writer, points[3] / height); // y1
    psdWriter_1.writeFixedPointPath32(writer, points[2] / width); // x1
    psdWriter_1.writeFixedPointPath32(writer, points[5] / height); // y2
    psdWriter_1.writeFixedPointPath32(writer, points[4] / width); // x2
}
var booleanOperations = [
    'exclude',
    'combine',
    'subtract',
    'intersect'
];
addHandler('vmsk', hasKey('vectorMask'), function(reader, target, left, _a) {
    var width = _a.width, height = _a.height;
    if (psdReader_1.readUint32(reader) !== 3) throw new Error('Invalid vmsk version');
    target.vectorMask = {
        paths: []
    };
    var vectorMask = target.vectorMask;
    var flags = psdReader_1.readUint32(reader);
    vectorMask.invert = (flags & 1) !== 0;
    vectorMask.notLink = (flags & 2) !== 0;
    vectorMask.disable = (flags & 4) !== 0;
    var paths = vectorMask.paths;
    var path = undefined;
    while(left() >= 26){
        var selector = psdReader_1.readUint16(reader);
        switch(selector){
            case 0:
            case 3:
                psdReader_1.readUint16(reader); // count
                var boolOp = psdReader_1.readUint16(reader);
                psdReader_1.readUint16(reader); // always 1 ?
                psdReader_1.skipBytes(reader, 18);
                path = {
                    open: selector === 3,
                    operation: booleanOperations[boolOp],
                    knots: []
                };
                paths.push(path);
                break;
            case 1:
            case 2:
            case 4:
            case 5:
                path.knots.push({
                    linked: selector === 1 || selector === 4,
                    points: readBezierKnot(reader, width, height)
                });
                break;
            case 6:
                psdReader_1.skipBytes(reader, 24);
                break;
            case 7:
                // TODO: check if these need to be multiplied by document size
                var top_1 = psdReader_1.readFixedPointPath32(reader);
                var left_1 = psdReader_1.readFixedPointPath32(reader);
                var bottom = psdReader_1.readFixedPointPath32(reader);
                var right = psdReader_1.readFixedPointPath32(reader);
                var resolution = psdReader_1.readFixedPointPath32(reader);
                psdReader_1.skipBytes(reader, 4);
                vectorMask.clipboard = {
                    top: top_1,
                    left: left_1,
                    bottom: bottom,
                    right: right,
                    resolution: resolution
                };
                break;
            case 8:
                vectorMask.fillStartsWithAllPixels = !!psdReader_1.readUint16(reader);
                psdReader_1.skipBytes(reader, 22);
                break;
            default:
                throw new Error('Invalid vmsk section');
        }
    }
    psdReader_1.skipBytes(reader, left());
}, function(writer, target, _a) {
    var width = _a.width, height = _a.height;
    var vectorMask = target.vectorMask;
    var flags = (vectorMask.invert ? 1 : 0) | (vectorMask.notLink ? 2 : 0) | (vectorMask.disable ? 4 : 0);
    psdWriter_1.writeUint32(writer, 3); // version
    psdWriter_1.writeUint32(writer, flags);
    // initial entry
    psdWriter_1.writeUint16(writer, 6);
    psdWriter_1.writeZeros(writer, 24);
    var clipboard = vectorMask.clipboard;
    if (clipboard) {
        psdWriter_1.writeUint16(writer, 7);
        psdWriter_1.writeFixedPointPath32(writer, clipboard.top);
        psdWriter_1.writeFixedPointPath32(writer, clipboard.left);
        psdWriter_1.writeFixedPointPath32(writer, clipboard.bottom);
        psdWriter_1.writeFixedPointPath32(writer, clipboard.right);
        psdWriter_1.writeFixedPointPath32(writer, clipboard.resolution);
        psdWriter_1.writeZeros(writer, 4);
    }
    if (vectorMask.fillStartsWithAllPixels !== undefined) {
        psdWriter_1.writeUint16(writer, 8);
        psdWriter_1.writeUint16(writer, vectorMask.fillStartsWithAllPixels ? 1 : 0);
        psdWriter_1.writeZeros(writer, 22);
    }
    for(var _i = 0, _b = vectorMask.paths; _i < _b.length; _i++){
        var path = _b[_i];
        psdWriter_1.writeUint16(writer, path.open ? 3 : 0);
        psdWriter_1.writeUint16(writer, path.knots.length);
        psdWriter_1.writeUint16(writer, Math.abs(booleanOperations.indexOf(path.operation))); // default to 1 if not found
        psdWriter_1.writeUint16(writer, 1);
        psdWriter_1.writeZeros(writer, 18); // TODO: these are sometimes non-zero
        var linkedKnot = path.open ? 4 : 1;
        var unlinkedKnot = path.open ? 5 : 2;
        for(var _c = 0, _d = path.knots; _c < _d.length; _c++){
            var _e = _d[_c], linked = _e.linked, points = _e.points;
            psdWriter_1.writeUint16(writer, linked ? linkedKnot : unlinkedKnot);
            writeBezierKnot(writer, points, width, height);
        }
    }
});
// TODO: need to write vmsk if has outline ?
addHandlerAlias('vsms', 'vmsk');
addHandler('vogk', hasKey('vectorOrigination'), function(reader, target, left) {
    if (psdReader_1.readInt32(reader) !== 1) throw new Error("Invalid vogk version");
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    // console.log(require('util').inspect(desc, false, 99, true));
    target.vectorOrigination = {
        keyDescriptorList: []
    };
    for(var _i = 0, _a = desc.keyDescriptorList; _i < _a.length; _i++){
        var i = _a[_i];
        var item = {
        };
        if (i.keyShapeInvalidated != null) item.keyShapeInvalidated = i.keyShapeInvalidated;
        if (i.keyOriginType != null) item.keyOriginType = i.keyOriginType;
        if (i.keyOriginResolution != null) item.keyOriginResolution = i.keyOriginResolution;
        if (i.keyOriginShapeBBox != null) item.keyOriginShapeBoundingBox = {
            top: descriptor_1.parseUnits(i.keyOriginShapeBBox['Top ']),
            left: descriptor_1.parseUnits(i.keyOriginShapeBBox.Left),
            bottom: descriptor_1.parseUnits(i.keyOriginShapeBBox.Btom),
            right: descriptor_1.parseUnits(i.keyOriginShapeBBox.Rght)
        };
        if (i.keyOriginRRectRadii != null) item.keyOriginRRectRadii = {
            topRight: descriptor_1.parseUnits(i.keyOriginRRectRadii.topRight),
            topLeft: descriptor_1.parseUnits(i.keyOriginRRectRadii.topLeft),
            bottomLeft: descriptor_1.parseUnits(i.keyOriginRRectRadii.bottomLeft),
            bottomRight: descriptor_1.parseUnits(i.keyOriginRRectRadii.bottomRight)
        };
        target.vectorOrigination.keyDescriptorList.push(item);
    }
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var _a, _b;
    var orig = target.vectorOrigination;
    var desc = {
        keyDescriptorList: []
    };
    for(var i = 0; i < orig.keyDescriptorList.length; i++){
        var item = orig.keyDescriptorList[i];
        if (item.keyShapeInvalidated) desc.keyDescriptorList.push({
            keyShapeInvalidated: true,
            keyOriginIndex: i
        });
        else {
            desc.keyDescriptorList.push({
                keyOriginType: (_a = item.keyOriginType) !== null && _a !== void 0 ? _a : 4,
                keyOriginResolution: (_b = item.keyOriginResolution) !== null && _b !== void 0 ? _b : 72
            });
            var out = desc.keyDescriptorList[desc.keyDescriptorList.length - 1];
            if (item.keyOriginRRectRadii) out.keyOriginRRectRadii = {
                unitValueQuadVersion: 1,
                topRight: descriptor_1.unitsValue(item.keyOriginRRectRadii.topRight, 'topRight'),
                topLeft: descriptor_1.unitsValue(item.keyOriginRRectRadii.topLeft, 'topLeft'),
                bottomLeft: descriptor_1.unitsValue(item.keyOriginRRectRadii.bottomLeft, 'bottomLeft'),
                bottomRight: descriptor_1.unitsValue(item.keyOriginRRectRadii.bottomRight, 'bottomRight')
            };
            if (item.keyOriginShapeBoundingBox) out.keyOriginShapeBBox = {
                unitValueQuadVersion: 1,
                'Top ': descriptor_1.unitsValue(item.keyOriginShapeBoundingBox.top, 'top'),
                Left: descriptor_1.unitsValue(item.keyOriginShapeBoundingBox.left, 'left'),
                Btom: descriptor_1.unitsValue(item.keyOriginShapeBoundingBox.bottom, 'bottom'),
                Rght: descriptor_1.unitsValue(item.keyOriginShapeBoundingBox.right, 'right')
            };
            out.keyOriginIndex = i;
        }
    }
    psdWriter_1.writeInt32(writer, 1); // version
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
});
addHandler('luni', hasKey('name'), function(reader, target, left) {
    target.name = psdReader_1.readUnicodeString(reader);
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    psdWriter_1.writeUnicodeString(writer, target.name);
// writeUint16(writer, 0); // padding (but not extending string length)
});
addHandler('lnsr', hasKey('nameSource'), function(reader, target) {
    return target.nameSource = psdReader_1.readSignature(reader);
}, function(writer, target) {
    return psdWriter_1.writeSignature(writer, target.nameSource);
});
addHandler('lyid', hasKey('id'), function(reader, target) {
    return target.id = psdReader_1.readUint32(reader);
}, function(writer, target, _psd, options) {
    var id = target.id;
    while(options.layerIds.indexOf(id) !== -1)id += 100; // make sure we don't have duplicate layer ids
    psdWriter_1.writeUint32(writer, id);
    options.layerIds.push(id);
});
addHandler('lsct', hasKey('sectionDivider'), function(reader, target, left) {
    target.sectionDivider = {
        type: psdReader_1.readUint32(reader)
    };
    if (left()) {
        psdReader_1.checkSignature(reader, '8BIM');
        target.sectionDivider.key = psdReader_1.readSignature(reader);
    }
    if (left()) // 0 = normal
    // 1 = scene group, affects the animation timeline.
    target.sectionDivider.subType = psdReader_1.readUint32(reader);
}, function(writer, target) {
    psdWriter_1.writeUint32(writer, target.sectionDivider.type);
    if (target.sectionDivider.key) {
        psdWriter_1.writeSignature(writer, '8BIM');
        psdWriter_1.writeSignature(writer, target.sectionDivider.key);
        if (target.sectionDivider.subType !== undefined) psdWriter_1.writeUint32(writer, target.sectionDivider.subType);
    }
});
addHandler('clbl', hasKey('blendClippendElements'), function(reader, target) {
    target.blendClippendElements = !!psdReader_1.readUint8(reader);
    psdReader_1.skipBytes(reader, 3);
}, function(writer, target) {
    psdWriter_1.writeUint8(writer, target.blendClippendElements ? 1 : 0);
    psdWriter_1.writeZeros(writer, 3);
});
addHandler('infx', hasKey('blendInteriorElements'), function(reader, target) {
    target.blendInteriorElements = !!psdReader_1.readUint8(reader);
    psdReader_1.skipBytes(reader, 3);
}, function(writer, target) {
    psdWriter_1.writeUint8(writer, target.blendInteriorElements ? 1 : 0);
    psdWriter_1.writeZeros(writer, 3);
});
addHandler('knko', hasKey('knockout'), function(reader, target) {
    target.knockout = !!psdReader_1.readUint8(reader);
    psdReader_1.skipBytes(reader, 3);
}, function(writer, target) {
    psdWriter_1.writeUint8(writer, target.knockout ? 1 : 0);
    psdWriter_1.writeZeros(writer, 3);
});
addHandler('lspf', hasKey('protected'), function(reader, target) {
    var flags = psdReader_1.readUint32(reader);
    target.protected = {
        transparency: (flags & 1) !== 0,
        composite: (flags & 2) !== 0,
        position: (flags & 4) !== 0
    };
    if (flags & 8) target.protected.artboards = true;
}, function(writer, target) {
    var flags = (target.protected.transparency ? 1 : 0) | (target.protected.composite ? 2 : 0) | (target.protected.position ? 4 : 0) | (target.protected.artboards ? 8 : 0);
    psdWriter_1.writeUint32(writer, flags);
});
addHandler('lclr', hasKey('layerColor'), function(reader, target) {
    var color = psdReader_1.readUint16(reader);
    psdReader_1.skipBytes(reader, 6);
    target.layerColor = helpers_1.layerColors[color];
}, function(writer, target) {
    var index = helpers_1.layerColors.indexOf(target.layerColor);
    psdWriter_1.writeUint16(writer, index === -1 ? 0 : index);
    psdWriter_1.writeZeros(writer, 6);
});
addHandler('shmd', hasKey('timestamp'), function(reader, target, left1, _, options) {
    var count = psdReader_1.readUint32(reader);
    var _loop_1 = function(i) {
        psdReader_1.checkSignature(reader, '8BIM');
        var key = psdReader_1.readSignature(reader);
        psdReader_1.readUint8(reader); // copy
        psdReader_1.skipBytes(reader, 3);
        psdReader_1.readSection(reader, 1, function(left) {
            if (key === 'cust') {
                var desc = descriptor_1.readVersionAndDescriptor(reader);
                if (desc.layerTime !== undefined) target.timestamp = desc.layerTime;
            } else if (key === 'mlst') {
                var desc = descriptor_1.readVersionAndDescriptor(reader);
                options.logDevFeatures && console.log('mlst', desc);
            // options.logDevFeatures && console.log('mlst', require('util').inspect(desc, false, 99, true));
            } else if (key === 'mdyn') {
                // frame flags
                var unknown = psdReader_1.readUint16(reader);
                var propagate = psdReader_1.readUint8(reader);
                var flags = psdReader_1.readUint8(reader);
                var unifyLayerPosition = (flags & 1) !== 0;
                var unifyLayerStyle = (flags & 2) !== 0;
                var unifyLayerVisibility = (flags & 4) !== 0;
                options.logDevFeatures && console.log('mdyn', 'unknown:', unknown, 'propagate:', propagate, 'flags:', flags, {
                    unifyLayerPosition: unifyLayerPosition,
                    unifyLayerStyle: unifyLayerStyle,
                    unifyLayerVisibility: unifyLayerVisibility
                });
            // const desc = readVersionAndDescriptor(reader) as FrameListDescriptor;
            // console.log('mdyn', require('util').inspect(desc, false, 99, true));
            } else options.logDevFeatures && console.log('Unhandled metadata', key);
            psdReader_1.skipBytes(reader, left());
        });
    };
    for(var i = 0; i < count; i++)_loop_1(i);
    psdReader_1.skipBytes(reader, left1());
}, function(writer, target) {
    var desc = {
        layerTime: target.timestamp
    };
    psdWriter_1.writeUint32(writer, 1); // count
    psdWriter_1.writeSignature(writer, '8BIM');
    psdWriter_1.writeSignature(writer, 'cust');
    psdWriter_1.writeUint8(writer, 0); // copy (always false)
    psdWriter_1.writeZeros(writer, 3);
    psdWriter_1.writeSection(writer, 2, function() {
        return descriptor_1.writeVersionAndDescriptor(writer, '', 'metadata', desc);
    }, true);
});
addHandler('vstk', hasKey('vectorStroke'), function(reader, target, left) {
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    target.vectorStroke = {
        strokeEnabled: desc.strokeEnabled,
        fillEnabled: desc.fillEnabled,
        lineWidth: descriptor_1.parseUnits(desc.strokeStyleLineWidth),
        lineDashOffset: descriptor_1.parseUnits(desc.strokeStyleLineDashOffset),
        miterLimit: desc.strokeStyleMiterLimit,
        lineCapType: descriptor_1.strokeStyleLineCapType.decode(desc.strokeStyleLineCapType),
        lineJoinType: descriptor_1.strokeStyleLineJoinType.decode(desc.strokeStyleLineJoinType),
        lineAlignment: descriptor_1.strokeStyleLineAlignment.decode(desc.strokeStyleLineAlignment),
        scaleLock: desc.strokeStyleScaleLock,
        strokeAdjust: desc.strokeStyleStrokeAdjust,
        lineDashSet: desc.strokeStyleLineDashSet.map(descriptor_1.parseUnits),
        blendMode: descriptor_1.BlnM.decode(desc.strokeStyleBlendMode),
        opacity: descriptor_1.parsePercent(desc.strokeStyleOpacity),
        content: parseVectorContent(desc.strokeStyleContent),
        resolution: desc.strokeStyleResolution
    };
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var _a, _b, _c;
    var stroke = target.vectorStroke;
    var descriptor = {
        strokeStyleVersion: 2,
        strokeEnabled: !!stroke.strokeEnabled,
        fillEnabled: !!stroke.fillEnabled,
        strokeStyleLineWidth: stroke.lineWidth || {
            value: 3,
            units: 'Points'
        },
        strokeStyleLineDashOffset: stroke.lineDashOffset || {
            value: 0,
            units: 'Points'
        },
        strokeStyleMiterLimit: (_a = stroke.miterLimit) !== null && _a !== void 0 ? _a : 100,
        strokeStyleLineCapType: descriptor_1.strokeStyleLineCapType.encode(stroke.lineCapType),
        strokeStyleLineJoinType: descriptor_1.strokeStyleLineJoinType.encode(stroke.lineJoinType),
        strokeStyleLineAlignment: descriptor_1.strokeStyleLineAlignment.encode(stroke.lineAlignment),
        strokeStyleScaleLock: !!stroke.scaleLock,
        strokeStyleStrokeAdjust: !!stroke.strokeAdjust,
        strokeStyleLineDashSet: stroke.lineDashSet || [],
        strokeStyleBlendMode: descriptor_1.BlnM.encode(stroke.blendMode),
        strokeStyleOpacity: descriptor_1.unitsPercent((_b = stroke.opacity) !== null && _b !== void 0 ? _b : 1),
        strokeStyleContent: serializeVectorContent(stroke.content || {
            type: 'color',
            color: {
                r: 0,
                g: 0,
                b: 0
            }
        }).descriptor,
        strokeStyleResolution: (_c = stroke.resolution) !== null && _c !== void 0 ? _c : 72
    };
    descriptor_1.writeVersionAndDescriptor(writer, '', 'strokeStyle', descriptor);
});
addHandler('artb', hasKey('artboard'), function(reader, target, left) {
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    target.artboard = {
        rect: {
            top: desc.artboardRect['Top '],
            left: desc.artboardRect.Left,
            bottom: desc.artboardRect.Btom,
            right: desc.artboardRect.Rght
        },
        guideIndices: desc.guideIndeces,
        presetName: desc.artboardPresetName,
        color: parseColor(desc['Clr ']),
        backgroundType: desc.artboardBackgroundType
    };
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var _a;
    var artb = target.artboard;
    var desc = {
        artboardRect: {
            'Top ': artb.rect.top,
            Left: artb.rect.left,
            Btom: artb.rect.bottom,
            Rght: artb.rect.right
        },
        guideIndeces: artb.guideIndices || [],
        artboardPresetName: artb.presetName || '',
        'Clr ': serializeColor(artb.color),
        artboardBackgroundType: (_a = artb.backgroundType) !== null && _a !== void 0 ? _a : 1
    };
    descriptor_1.writeVersionAndDescriptor(writer, '', 'artboard', desc);
});
addHandler('sn2P', hasKey('usingAlignedRendering'), function(reader, target) {
    return target.usingAlignedRendering = !!psdReader_1.readUint32(reader);
}, function(writer, target) {
    return psdWriter_1.writeUint32(writer, target.usingAlignedRendering ? 1 : 0);
});
var placedLayerTypes = [
    'unknown',
    'vector',
    'raster',
    'image stack'
];
function parseWarp(warp) {
    return {
        style: descriptor_1.warpStyle.decode(warp.warpStyle),
        value: warp.warpValue || 0,
        perspective: warp.warpPerspective || 0,
        perspectiveOther: warp.warpPerspectiveOther || 0,
        rotate: descriptor_1.Ornt.decode(warp.warpRotate),
        bounds: warp.bounds && {
            top: descriptor_1.parseUnitsOrNumber(warp.bounds['Top ']),
            left: descriptor_1.parseUnitsOrNumber(warp.bounds.Left),
            bottom: descriptor_1.parseUnitsOrNumber(warp.bounds.Btom),
            right: descriptor_1.parseUnitsOrNumber(warp.bounds.Rght)
        },
        uOrder: warp.uOrder,
        vOrder: warp.vOrder,
        customEnvelopeWarp: warp.customEnvelopeWarp && {
            meshPoints: warp.customEnvelopeWarp.meshPoints.map(function(pt) {
                return {
                    type: pt.type === 'Hrzn' ? 'horizontal' : 'vertical',
                    values: pt.values
                };
            })
        }
    };
}
function encodeWarp(warp) {
    var _a, _b, _c, _d;
    var desc = {
        warpStyle: descriptor_1.warpStyle.encode(warp.style),
        warpValue: warp.value || 0,
        warpPerspective: warp.perspective || 0,
        warpPerspectiveOther: warp.perspectiveOther || 0,
        warpRotate: descriptor_1.Ornt.encode(warp.rotate),
        bounds: {
            'Top ': descriptor_1.unitsValue(((_a = warp.bounds) === null || _a === void 0 ? void 0 : _a.top) || {
                units: 'Pixels',
                value: 0
            }, 'bounds.top'),
            Left: descriptor_1.unitsValue(((_b = warp.bounds) === null || _b === void 0 ? void 0 : _b.left) || {
                units: 'Pixels',
                value: 0
            }, 'bounds.left'),
            Btom: descriptor_1.unitsValue(((_c = warp.bounds) === null || _c === void 0 ? void 0 : _c.bottom) || {
                units: 'Pixels',
                value: 0
            }, 'bounds.bottom'),
            Rght: descriptor_1.unitsValue(((_d = warp.bounds) === null || _d === void 0 ? void 0 : _d.right) || {
                units: 'Pixels',
                value: 0
            }, 'bounds.right')
        },
        uOrder: warp.uOrder || 0,
        vOrder: warp.vOrder || 0
    };
    if (warp.customEnvelopeWarp) desc.customEnvelopeWarp = {
        meshPoints: (warp.customEnvelopeWarp.meshPoints || []).map(function(pt) {
            return {
                type: pt.type === 'horizontal' ? 'Hrzn' : 'Vrtc',
                values: pt.values
            };
        })
    };
    return desc;
}
addHandler('PlLd', hasKey('placedLayer'), function(reader, target, left) {
    if (psdReader_1.readSignature(reader) !== 'plcL') throw new Error("Invalid PlLd signature");
    if (psdReader_1.readInt32(reader) !== 3) throw new Error("Invalid PlLd version");
    var id = psdReader_1.readPascalString(reader, 1);
    psdReader_1.readInt32(reader); // pageNumber
    psdReader_1.readInt32(reader); // totalPages, TODO: check how this works ?
    psdReader_1.readInt32(reader); // anitAliasPolicy 16
    var placedLayerType = psdReader_1.readInt32(reader); // 0 = unknown, 1 = vector, 2 = raster, 3 = image stack
    if (!placedLayerTypes[placedLayerType]) throw new Error('Invalid PlLd type');
    var transform = [];
    for(var i = 0; i < 8; i++)transform.push(psdReader_1.readFloat64(reader)); // x, y of 4 corners of the transform
    var warpVersion = psdReader_1.readInt32(reader);
    if (warpVersion !== 0) throw new Error("Invalid Warp version " + warpVersion);
    var warp = descriptor_1.readVersionAndDescriptor(reader);
    target.placedLayer = target.placedLayer || {
        id: id,
        type: placedLayerTypes[placedLayerType],
        // pageNumber,
        // totalPages,
        transform: transform,
        warp: parseWarp(warp)
    };
    // console.log('PlLd warp', require('util').inspect(warp, false, 99, true));
    // console.log('PlLd', require('util').inspect(target.placedLayer, false, 99, true));
    psdReader_1.skipBytes(reader, left()); // HACK
}, function(writer, target) {
    var placed = target.placedLayer;
    psdWriter_1.writeSignature(writer, 'plcL');
    psdWriter_1.writeInt32(writer, 3); // version
    psdWriter_1.writePascalString(writer, placed.id, 1);
    psdWriter_1.writeInt32(writer, 1); // pageNumber
    psdWriter_1.writeInt32(writer, 1); // totalPages
    psdWriter_1.writeInt32(writer, 16); // anitAliasPolicy
    if (placedLayerTypes.indexOf(placed.type) === -1) throw new Error('Invalid placedLayer type');
    psdWriter_1.writeInt32(writer, placedLayerTypes.indexOf(placed.type));
    for(var i = 0; i < 8; i++)psdWriter_1.writeFloat64(writer, placed.transform[i]);
    psdWriter_1.writeInt32(writer, 0); // warp version
    descriptor_1.writeVersionAndDescriptor(writer, '', 'warp', encodeWarp(placed.warp || {
    }));
});
addHandler('SoLd', hasKey('placedLayer'), function(reader, target, left) {
    if (psdReader_1.readSignature(reader) !== 'soLD') throw new Error("Invalid SoLd type");
    if (psdReader_1.readInt32(reader) !== 4) throw new Error("Invalid SoLd version");
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    // console.log('SoLd', require('util').inspect(desc, false, 99, true));
    // console.log('SoLd.warp', require('util').inspect(desc.warp, false, 99, true));
    target.placedLayer = {
        id: desc.Idnt,
        placed: desc.placed,
        type: placedLayerTypes[desc.Type],
        // pageNumber: info.PgNm,
        // totalPages: info.totalPages,
        // frameStep: info.frameStep,
        // duration: info.duration,
        // frameCount: info.frameCount,
        transform: desc.Trnf,
        width: desc['Sz  '].Wdth,
        height: desc['Sz  '].Hght,
        resolution: descriptor_1.parseUnits(desc.Rslt),
        warp: parseWarp(desc.warp)
    };
    if (desc.Crop) target.placedLayer.crop = desc.Crop;
    if (desc.comp) target.placedLayer.comp = desc.comp;
    if (desc.compInfo) target.placedLayer.compInfo = desc.compInfo;
    psdReader_1.skipBytes(reader, left()); // HACK
}, function(writer, target) {
    var _a;
    psdWriter_1.writeSignature(writer, 'soLD');
    psdWriter_1.writeInt32(writer, 4); // version
    var placed = target.placedLayer;
    var desc = __assign(__assign({
        Idnt: placed.id,
        placed: (_a = placed.placed) !== null && _a !== void 0 ? _a : placed.id,
        PgNm: 1,
        totalPages: 1
    }, placed.crop ? {
        Crop: placed.crop
    } : {
    }), {
        frameStep: {
            numerator: 0,
            denominator: 600
        },
        duration: {
            numerator: 0,
            denominator: 600
        },
        frameCount: 1,
        Annt: 16,
        Type: placedLayerTypes.indexOf(placed.type),
        Trnf: placed.transform,
        nonAffineTransform: placed.transform,
        warp: encodeWarp(placed.warp || {
        }),
        'Sz  ': {
            Wdth: placed.width || 0,
            Hght: placed.height || 0
        },
        Rslt: placed.resolution ? descriptor_1.unitsValue(placed.resolution, 'resolution') : {
            units: 'Density',
            value: 72
        }
    });
    if (placed.comp) desc.comp = placed.comp;
    if (placed.compInfo) desc.compInfo = placed.compInfo;
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
});
addHandler('fxrp', hasKey('referencePoint'), function(reader, target) {
    target.referencePoint = {
        x: psdReader_1.readFloat64(reader),
        y: psdReader_1.readFloat64(reader)
    };
}, function(writer, target) {
    psdWriter_1.writeFloat64(writer, target.referencePoint.x);
    psdWriter_1.writeFloat64(writer, target.referencePoint.y);
});
if (MOCK_HANDLERS) addHandler('Patt', function(target) {
    return target._Patt !== undefined;
}, function(reader, target, left) {
    // console.log('additional info: Patt');
    target._Patt = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    return false;
});
else addHandler('Patt', function(target) {
    return !target;
}, function(reader, _target, left) {
    if (!left()) return;
    psdReader_1.skipBytes(reader, left());
    return; // not supported yet
// if (!target.patterns) target.patterns = [];
// target.patterns.push(readPattern(reader));
// skipBytes(reader, left());
}, function(_writer, _target) {
});
addHandler('lnk2', function(target) {
    return !!target.linkedFiles && target.linkedFiles.length > 0;
}, function(reader, target, left, _, options) {
    var psd = target;
    psd.linkedFiles = [];
    while(left() > 8){
        var size = readLength64(reader); // size
        var startOffset = reader.offset;
        var type = psdReader_1.readSignature(reader);
        var version = psdReader_1.readInt32(reader);
        var id = psdReader_1.readPascalString(reader, 1);
        var name_1 = psdReader_1.readUnicodeString(reader);
        var fileType = psdReader_1.readSignature(reader).trim(); // '    ' if empty
        var fileCreator = psdReader_1.readSignature(reader).trim(); // '    ' or '\0\0\0\0' if empty
        var dataSize = readLength64(reader);
        var hasFileOpenDescriptor = psdReader_1.readUint8(reader);
        var fileOpenDescriptor = hasFileOpenDescriptor ? descriptor_1.readVersionAndDescriptor(reader) : undefined;
        var linkedFileDescriptor = type === 'liFE' ? descriptor_1.readVersionAndDescriptor(reader) : undefined;
        var file = {
            id: id,
            name: name_1,
            data: undefined
        };
        if (fileType) file.type = fileType;
        if (fileCreator) file.creator = fileCreator;
        if (fileOpenDescriptor) file.descriptor = fileOpenDescriptor;
        if (type === 'liFE' && version > 3) {
            var year = psdReader_1.readInt32(reader);
            var month = psdReader_1.readUint8(reader);
            var day = psdReader_1.readUint8(reader);
            var hour = psdReader_1.readUint8(reader);
            var minute = psdReader_1.readUint8(reader);
            var seconds = psdReader_1.readFloat64(reader);
            var wholeSeconds = Math.floor(seconds);
            var ms = (seconds - wholeSeconds) * 1000;
            file.time = new Date(year, month, day, hour, minute, wholeSeconds, ms);
        }
        var fileSize = type === 'liFE' ? readLength64(reader) : 0;
        if (type === 'liFA') psdReader_1.skipBytes(reader, 8);
        if (type === 'liFD') file.data = psdReader_1.readBytes(reader, dataSize);
        if (version >= 5) file.childDocumentID = psdReader_1.readUnicodeString(reader);
        if (version >= 6) file.assetModTime = psdReader_1.readFloat64(reader);
        if (version >= 7) file.assetLockedState = psdReader_1.readUint8(reader);
        if (type === 'liFE') file.data = psdReader_1.readBytes(reader, fileSize);
        if (options.skipLinkedFilesData) file.data = undefined;
        psd.linkedFiles.push(file);
        while(size % 4)size++;
        reader.offset = startOffset + size;
    }
    psdReader_1.skipBytes(reader, left()); // ?
}, function(writer, target) {
    var psd = target;
    for(var _i = 0, _a = psd.linkedFiles; _i < _a.length; _i++){
        var file = _a[_i];
        var version = 2;
        if (file.assetLockedState != null) version = 7;
        else if (file.assetModTime != null) version = 6;
        else if (file.childDocumentID != null) version = 5;
        // TODO: else if (file.time != null) version = 3; (only for liFE)
        psdWriter_1.writeUint32(writer, 0);
        psdWriter_1.writeUint32(writer, 0); // size
        var sizeOffset = writer.offset;
        psdWriter_1.writeSignature(writer, file.data ? 'liFD' : 'liFA');
        psdWriter_1.writeInt32(writer, version);
        psdWriter_1.writePascalString(writer, file.id || '', 1);
        psdWriter_1.writeUnicodeStringWithPadding(writer, file.name || '');
        psdWriter_1.writeSignature(writer, file.type ? (file.type + "    ").substr(0, 4) : '    ');
        psdWriter_1.writeSignature(writer, file.creator ? (file.creator + "    ").substr(0, 4) : '\0\0\0\0');
        writeLength64(writer, file.data ? file.data.byteLength : 0);
        if (file.descriptor && file.descriptor.compInfo) {
            var desc = {
                compInfo: file.descriptor.compInfo
            };
            psdWriter_1.writeUint8(writer, 1);
            descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
        } else psdWriter_1.writeUint8(writer, 0);
        if (file.data) psdWriter_1.writeBytes(writer, file.data);
        else writeLength64(writer, 0);
        if (version >= 5) psdWriter_1.writeUnicodeStringWithPadding(writer, file.childDocumentID || '');
        if (version >= 6) psdWriter_1.writeFloat64(writer, file.assetModTime || 0);
        if (version >= 7) psdWriter_1.writeUint8(writer, file.assetLockedState || 0);
        var size = writer.offset - sizeOffset;
        writer.view.setUint32(sizeOffset - 4, size, false); // write size
        while(size % 4){
            size++;
            psdWriter_1.writeUint8(writer, 0);
        }
    }
});
addHandlerAlias('lnkD', 'lnk2');
addHandlerAlias('lnk3', 'lnk2');
// this seems to just be zero size block, ignore it
addHandler('lnkE', function(target) {
    return target._lnkE !== undefined;
}, function(reader, target, left, _psds, options) {
    if (options.logMissingFeatures && left()) console.log("Non-empty lnkE layer info (" + left() + " bytes)");
    if (MOCK_HANDLERS) target._lnkE = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    return MOCK_HANDLERS && psdWriter_1.writeBytes(writer, target._lnkE);
});
// extension settings ?, ignore it
addHandler('extn', function(target) {
    return target._extn !== undefined;
}, function(reader, target) {
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    if (MOCK_HANDLERS) target._ext = desc;
}, function(_writer, _target) {
// TODO: need to add correct types for desc fields (resources/src.psd)
// if (MOCK_HANDLERS) writeVersionAndDescriptor(writer, '', 'null', desc);
});
addHandler('pths', hasKey('pathList'), function(reader, target) {
    var descriptor = descriptor_1.readVersionAndDescriptor(reader);
    target.pathList = []; // TODO: read paths (find example with non-empty list)
// console.log('pths', descriptor); // TODO: remove this
}, function(writer, _target) {
    var descriptor = {
        pathList: []
    };
    descriptor_1.writeVersionAndDescriptor(writer, '', 'pathsDataClass', descriptor);
});
addHandler('lyvr', hasKey('version'), function(reader, target) {
    return target.version = psdReader_1.readUint32(reader);
}, function(writer, target) {
    return psdWriter_1.writeUint32(writer, target.version);
});
addHandler('lrFX', hasKey('effects'), function(reader, target, left) {
    if (!target.effects) target.effects = effectsHelpers_1.readEffects(reader);
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    effectsHelpers_1.writeEffects(writer, target.effects);
});
function adjustmentType(type) {
    return function(target) {
        return !!target.adjustment && target.adjustment.type === type;
    };
}
addHandler('brit', adjustmentType('brightness/contrast'), function(reader, target, left) {
    if (!target.adjustment) target.adjustment = {
        type: 'brightness/contrast',
        brightness: psdReader_1.readInt16(reader),
        contrast: psdReader_1.readInt16(reader),
        meanValue: psdReader_1.readInt16(reader),
        labColorOnly: !!psdReader_1.readUint8(reader),
        useLegacy: true
    };
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var _a;
    var info = target.adjustment;
    psdWriter_1.writeInt16(writer, info.brightness || 0);
    psdWriter_1.writeInt16(writer, info.contrast || 0);
    psdWriter_1.writeInt16(writer, (_a = info.meanValue) !== null && _a !== void 0 ? _a : 127);
    psdWriter_1.writeUint8(writer, info.labColorOnly ? 1 : 0);
    psdWriter_1.writeZeros(writer, 1);
});
function readLevelsChannel(reader) {
    var shadowInput = psdReader_1.readInt16(reader);
    var highlightInput = psdReader_1.readInt16(reader);
    var shadowOutput = psdReader_1.readInt16(reader);
    var highlightOutput = psdReader_1.readInt16(reader);
    var midtoneInput = psdReader_1.readInt16(reader) / 100;
    return {
        shadowInput: shadowInput,
        highlightInput: highlightInput,
        shadowOutput: shadowOutput,
        highlightOutput: highlightOutput,
        midtoneInput: midtoneInput
    };
}
function writeLevelsChannel(writer, channel) {
    psdWriter_1.writeInt16(writer, channel.shadowInput);
    psdWriter_1.writeInt16(writer, channel.highlightInput);
    psdWriter_1.writeInt16(writer, channel.shadowOutput);
    psdWriter_1.writeInt16(writer, channel.highlightOutput);
    psdWriter_1.writeInt16(writer, Math.round(channel.midtoneInput * 100));
}
addHandler('levl', adjustmentType('levels'), function(reader, target, left) {
    if (psdReader_1.readUint16(reader) !== 2) throw new Error('Invalid levl version');
    target.adjustment = __assign(__assign({
    }, target.adjustment), {
        type: 'levels',
        rgb: readLevelsChannel(reader),
        red: readLevelsChannel(reader),
        green: readLevelsChannel(reader),
        blue: readLevelsChannel(reader)
    });
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var info = target.adjustment;
    var defaultChannel = {
        shadowInput: 0,
        highlightInput: 255,
        shadowOutput: 0,
        highlightOutput: 255,
        midtoneInput: 1
    };
    psdWriter_1.writeUint16(writer, 2); // version
    writeLevelsChannel(writer, info.rgb || defaultChannel);
    writeLevelsChannel(writer, info.red || defaultChannel);
    writeLevelsChannel(writer, info.blue || defaultChannel);
    writeLevelsChannel(writer, info.green || defaultChannel);
    for(var i = 0; i < 59; i++)writeLevelsChannel(writer, defaultChannel);
});
function readCurveChannel(reader) {
    var nodes = psdReader_1.readUint16(reader);
    var channel = [];
    for(var j = 0; j < nodes; j++){
        var output = psdReader_1.readInt16(reader);
        var input = psdReader_1.readInt16(reader);
        channel.push({
            input: input,
            output: output
        });
    }
    return channel;
}
function writeCurveChannel(writer, channel) {
    psdWriter_1.writeUint16(writer, channel.length);
    for(var _i = 0, channel_1 = channel; _i < channel_1.length; _i++){
        var n = channel_1[_i];
        psdWriter_1.writeUint16(writer, n.output);
        psdWriter_1.writeUint16(writer, n.input);
    }
}
addHandler('curv', adjustmentType('curves'), function(reader, target, left) {
    psdReader_1.readUint8(reader);
    if (psdReader_1.readUint16(reader) !== 1) throw new Error('Invalid curv version');
    psdReader_1.readUint16(reader);
    var channels = psdReader_1.readUint16(reader);
    var info = {
        type: 'curves'
    };
    if (channels & 1) info.rgb = readCurveChannel(reader);
    if (channels & 2) info.red = readCurveChannel(reader);
    if (channels & 4) info.green = readCurveChannel(reader);
    if (channels & 8) info.blue = readCurveChannel(reader);
    target.adjustment = __assign(__assign({
    }, target.adjustment), info);
    // ignoring, duplicate information
    // checkSignature(reader, 'Crv ');
    // const cVersion = readUint16(reader);
    // readUint16(reader);
    // const channelCount = readUint16(reader);
    // for (let i = 0; i < channelCount; i++) {
    // 	const index = readUint16(reader);
    // 	const nodes = readUint16(reader);
    // 	for (let j = 0; j < nodes; j++) {
    // 		const output = readInt16(reader);
    // 		const input = readInt16(reader);
    // 	}
    // }
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var info = target.adjustment;
    var rgb = info.rgb, red = info.red, green = info.green, blue = info.blue;
    var channels = 0;
    var channelCount = 0;
    if (rgb && rgb.length) {
        channels |= 1;
        channelCount++;
    }
    if (red && red.length) {
        channels |= 2;
        channelCount++;
    }
    if (green && green.length) {
        channels |= 4;
        channelCount++;
    }
    if (blue && blue.length) {
        channels |= 8;
        channelCount++;
    }
    psdWriter_1.writeUint8(writer, 0);
    psdWriter_1.writeUint16(writer, 1); // version
    psdWriter_1.writeUint16(writer, 0);
    psdWriter_1.writeUint16(writer, channels);
    if (rgb && rgb.length) writeCurveChannel(writer, rgb);
    if (red && red.length) writeCurveChannel(writer, red);
    if (green && green.length) writeCurveChannel(writer, green);
    if (blue && blue.length) writeCurveChannel(writer, blue);
    psdWriter_1.writeSignature(writer, 'Crv ');
    psdWriter_1.writeUint16(writer, 4); // version
    psdWriter_1.writeUint16(writer, 0);
    psdWriter_1.writeUint16(writer, channelCount);
    if (rgb && rgb.length) {
        psdWriter_1.writeUint16(writer, 0);
        writeCurveChannel(writer, rgb);
    }
    if (red && red.length) {
        psdWriter_1.writeUint16(writer, 1);
        writeCurveChannel(writer, red);
    }
    if (green && green.length) {
        psdWriter_1.writeUint16(writer, 2);
        writeCurveChannel(writer, green);
    }
    if (blue && blue.length) {
        psdWriter_1.writeUint16(writer, 3);
        writeCurveChannel(writer, blue);
    }
    psdWriter_1.writeZeros(writer, 2);
});
addHandler('expA', adjustmentType('exposure'), function(reader, target, left) {
    if (psdReader_1.readUint16(reader) !== 1) throw new Error('Invalid expA version');
    target.adjustment = __assign(__assign({
    }, target.adjustment), {
        type: 'exposure',
        exposure: psdReader_1.readFloat32(reader),
        offset: psdReader_1.readFloat32(reader),
        gamma: psdReader_1.readFloat32(reader)
    });
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var info = target.adjustment;
    psdWriter_1.writeUint16(writer, 1); // version
    psdWriter_1.writeFloat32(writer, info.exposure);
    psdWriter_1.writeFloat32(writer, info.offset);
    psdWriter_1.writeFloat32(writer, info.gamma);
    psdWriter_1.writeZeros(writer, 2);
});
addHandler('vibA', adjustmentType('vibrance'), function(reader, target, left) {
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    target.adjustment = {
        type: 'vibrance'
    };
    if (desc.vibrance !== undefined) target.adjustment.vibrance = desc.vibrance;
    if (desc.Strt !== undefined) target.adjustment.saturation = desc.Strt;
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var info = target.adjustment;
    var desc = {
    };
    if (info.vibrance !== undefined) desc.vibrance = info.vibrance;
    if (info.saturation !== undefined) desc.Strt = info.saturation;
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
});
function readHueChannel(reader) {
    return {
        a: psdReader_1.readInt16(reader),
        b: psdReader_1.readInt16(reader),
        c: psdReader_1.readInt16(reader),
        d: psdReader_1.readInt16(reader),
        hue: psdReader_1.readInt16(reader),
        saturation: psdReader_1.readInt16(reader),
        lightness: psdReader_1.readInt16(reader)
    };
}
function writeHueChannel(writer, channel) {
    var c = channel || {
    };
    psdWriter_1.writeInt16(writer, c.a || 0);
    psdWriter_1.writeInt16(writer, c.b || 0);
    psdWriter_1.writeInt16(writer, c.c || 0);
    psdWriter_1.writeInt16(writer, c.d || 0);
    psdWriter_1.writeInt16(writer, c.hue || 0);
    psdWriter_1.writeInt16(writer, c.saturation || 0);
    psdWriter_1.writeInt16(writer, c.lightness || 0);
}
addHandler('hue2', adjustmentType('hue/saturation'), function(reader, target, left) {
    if (psdReader_1.readUint16(reader) !== 2) throw new Error('Invalid hue2 version');
    target.adjustment = __assign(__assign({
    }, target.adjustment), {
        type: 'hue/saturation',
        master: readHueChannel(reader),
        reds: readHueChannel(reader),
        yellows: readHueChannel(reader),
        greens: readHueChannel(reader),
        cyans: readHueChannel(reader),
        blues: readHueChannel(reader),
        magentas: readHueChannel(reader)
    });
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var info = target.adjustment;
    psdWriter_1.writeUint16(writer, 2); // version
    writeHueChannel(writer, info.master);
    writeHueChannel(writer, info.reds);
    writeHueChannel(writer, info.yellows);
    writeHueChannel(writer, info.greens);
    writeHueChannel(writer, info.cyans);
    writeHueChannel(writer, info.blues);
    writeHueChannel(writer, info.magentas);
});
function readColorBalance(reader) {
    return {
        cyanRed: psdReader_1.readInt16(reader),
        magentaGreen: psdReader_1.readInt16(reader),
        yellowBlue: psdReader_1.readInt16(reader)
    };
}
function writeColorBalance(writer, value) {
    psdWriter_1.writeInt16(writer, value.cyanRed || 0);
    psdWriter_1.writeInt16(writer, value.magentaGreen || 0);
    psdWriter_1.writeInt16(writer, value.yellowBlue || 0);
}
addHandler('blnc', adjustmentType('color balance'), function(reader, target, left) {
    target.adjustment = {
        type: 'color balance',
        shadows: readColorBalance(reader),
        midtones: readColorBalance(reader),
        highlights: readColorBalance(reader),
        preserveLuminosity: !!psdReader_1.readUint8(reader)
    };
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var info = target.adjustment;
    writeColorBalance(writer, info.shadows || {
    });
    writeColorBalance(writer, info.midtones || {
    });
    writeColorBalance(writer, info.highlights || {
    });
    psdWriter_1.writeUint8(writer, info.preserveLuminosity ? 1 : 0);
    psdWriter_1.writeZeros(writer, 1);
});
addHandler('blwh', adjustmentType('black & white'), function(reader, target, left) {
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    target.adjustment = {
        type: 'black & white',
        reds: desc['Rd  '],
        yellows: desc.Yllw,
        greens: desc['Grn '],
        cyans: desc['Cyn '],
        blues: desc['Bl  '],
        magentas: desc.Mgnt,
        useTint: !!desc.useTint,
        presetKind: desc.bwPresetKind,
        presetFileName: desc.blackAndWhitePresetFileName
    };
    if (desc.tintColor !== undefined) target.adjustment.tintColor = parseColor(desc.tintColor);
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var info = target.adjustment;
    var desc = {
        'Rd  ': info.reds || 0,
        Yllw: info.yellows || 0,
        'Grn ': info.greens || 0,
        'Cyn ': info.cyans || 0,
        'Bl  ': info.blues || 0,
        Mgnt: info.magentas || 0,
        useTint: !!info.useTint,
        tintColor: serializeColor(info.tintColor),
        bwPresetKind: info.presetKind || 0,
        blackAndWhitePresetFileName: info.presetFileName || ''
    };
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
});
addHandler('phfl', adjustmentType('photo filter'), function(reader, target, left) {
    var version = psdReader_1.readUint16(reader);
    if (version !== 2 && version !== 3) throw new Error('Invalid phfl version');
    var color;
    if (version === 2) color = psdReader_1.readColor(reader);
    else // TODO: test this, this is probably wrong
    color = {
        l: psdReader_1.readInt32(reader) / 100,
        a: psdReader_1.readInt32(reader) / 100,
        b: psdReader_1.readInt32(reader) / 100
    };
    target.adjustment = {
        type: 'photo filter',
        color: color,
        density: psdReader_1.readUint32(reader) / 100,
        preserveLuminosity: !!psdReader_1.readUint8(reader)
    };
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var info = target.adjustment;
    psdWriter_1.writeUint16(writer, 2); // version
    psdWriter_1.writeColor(writer, info.color || {
        l: 0,
        a: 0,
        b: 0
    });
    psdWriter_1.writeUint32(writer, (info.density || 0) * 100);
    psdWriter_1.writeUint8(writer, info.preserveLuminosity ? 1 : 0);
    psdWriter_1.writeZeros(writer, 3);
});
function readMixrChannel(reader) {
    var red = psdReader_1.readInt16(reader);
    var green = psdReader_1.readInt16(reader);
    var blue = psdReader_1.readInt16(reader);
    psdReader_1.skipBytes(reader, 2);
    var constant = psdReader_1.readInt16(reader);
    return {
        red: red,
        green: green,
        blue: blue,
        constant: constant
    };
}
function writeMixrChannel(writer, channel) {
    var c = channel || {
    };
    psdWriter_1.writeInt16(writer, c.red);
    psdWriter_1.writeInt16(writer, c.green);
    psdWriter_1.writeInt16(writer, c.blue);
    psdWriter_1.writeZeros(writer, 2);
    psdWriter_1.writeInt16(writer, c.constant);
}
addHandler('mixr', adjustmentType('channel mixer'), function(reader, target, left) {
    if (psdReader_1.readUint16(reader) !== 1) throw new Error('Invalid mixr version');
    var adjustment = target.adjustment = __assign(__assign({
    }, target.adjustment), {
        type: 'channel mixer',
        monochrome: !!psdReader_1.readUint16(reader)
    });
    if (!adjustment.monochrome) {
        adjustment.red = readMixrChannel(reader);
        adjustment.green = readMixrChannel(reader);
        adjustment.blue = readMixrChannel(reader);
    }
    adjustment.gray = readMixrChannel(reader);
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var info = target.adjustment;
    psdWriter_1.writeUint16(writer, 1); // version
    psdWriter_1.writeUint16(writer, info.monochrome ? 1 : 0);
    if (info.monochrome) {
        writeMixrChannel(writer, info.gray);
        psdWriter_1.writeZeros(writer, 30);
    } else {
        writeMixrChannel(writer, info.red);
        writeMixrChannel(writer, info.green);
        writeMixrChannel(writer, info.blue);
        writeMixrChannel(writer, info.gray);
    }
});
var colorLookupType = helpers_1.createEnum('colorLookupType', '3DLUT', {
    '3dlut': '3DLUT',
    abstractProfile: 'abstractProfile',
    deviceLinkProfile: 'deviceLinkProfile'
});
var LUTFormatType = helpers_1.createEnum('LUTFormatType', 'look', {
    look: 'LUTFormatLOOK',
    cube: 'LUTFormatCUBE',
    '3dl': 'LUTFormat3DL'
});
var colorLookupOrder = helpers_1.createEnum('colorLookupOrder', 'rgb', {
    rgb: 'rgbOrder',
    bgr: 'bgrOrder'
});
addHandler('clrL', adjustmentType('color lookup'), function(reader, target, left) {
    if (psdReader_1.readUint16(reader) !== 1) throw new Error('Invalid clrL version');
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    target.adjustment = {
        type: 'color lookup'
    };
    var info = target.adjustment;
    if (desc.lookupType !== undefined) info.lookupType = colorLookupType.decode(desc.lookupType);
    if (desc['Nm  '] !== undefined) info.name = desc['Nm  '];
    if (desc.Dthr !== undefined) info.dither = desc.Dthr;
    if (desc.profile !== undefined) info.profile = desc.profile;
    if (desc.LUTFormat !== undefined) info.lutFormat = LUTFormatType.decode(desc.LUTFormat);
    if (desc.dataOrder !== undefined) info.dataOrder = colorLookupOrder.decode(desc.dataOrder);
    if (desc.tableOrder !== undefined) info.tableOrder = colorLookupOrder.decode(desc.tableOrder);
    if (desc.LUT3DFileData !== undefined) info.lut3DFileData = desc.LUT3DFileData;
    if (desc.LUT3DFileName !== undefined) info.lut3DFileName = desc.LUT3DFileName;
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var info = target.adjustment;
    var desc = {
    };
    if (info.lookupType !== undefined) desc.lookupType = colorLookupType.encode(info.lookupType);
    if (info.name !== undefined) desc['Nm  '] = info.name;
    if (info.dither !== undefined) desc.Dthr = info.dither;
    if (info.profile !== undefined) desc.profile = info.profile;
    if (info.lutFormat !== undefined) desc.LUTFormat = LUTFormatType.encode(info.lutFormat);
    if (info.dataOrder !== undefined) desc.dataOrder = colorLookupOrder.encode(info.dataOrder);
    if (info.tableOrder !== undefined) desc.tableOrder = colorLookupOrder.encode(info.tableOrder);
    if (info.lut3DFileData !== undefined) desc.LUT3DFileData = info.lut3DFileData;
    if (info.lut3DFileName !== undefined) desc.LUT3DFileName = info.lut3DFileName;
    psdWriter_1.writeUint16(writer, 1); // version
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
});
addHandler('nvrt', adjustmentType('invert'), function(reader, target, left) {
    target.adjustment = {
        type: 'invert'
    };
    psdReader_1.skipBytes(reader, left());
}, function() {
// nothing to write here
});
addHandler('post', adjustmentType('posterize'), function(reader, target, left) {
    target.adjustment = {
        type: 'posterize',
        levels: psdReader_1.readUint16(reader)
    };
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var _a;
    var info = target.adjustment;
    psdWriter_1.writeUint16(writer, (_a = info.levels) !== null && _a !== void 0 ? _a : 4);
    psdWriter_1.writeZeros(writer, 2);
});
addHandler('thrs', adjustmentType('threshold'), function(reader, target, left) {
    target.adjustment = {
        type: 'threshold',
        level: psdReader_1.readUint16(reader)
    };
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var _a;
    var info = target.adjustment;
    psdWriter_1.writeUint16(writer, (_a = info.level) !== null && _a !== void 0 ? _a : 128);
    psdWriter_1.writeZeros(writer, 2);
});
var grdmColorModels = [
    '',
    '',
    '',
    'rgb',
    'hsb',
    '',
    'lab'
];
addHandler('grdm', adjustmentType('gradient map'), function(reader, target, left) {
    if (psdReader_1.readUint16(reader) !== 1) throw new Error('Invalid grdm version');
    var info = {
        type: 'gradient map',
        gradientType: 'solid'
    };
    info.reverse = !!psdReader_1.readUint8(reader);
    info.dither = !!psdReader_1.readUint8(reader);
    info.name = psdReader_1.readUnicodeString(reader);
    info.colorStops = [];
    info.opacityStops = [];
    var stopsCount = psdReader_1.readUint16(reader);
    for(var i = 0; i < stopsCount; i++){
        info.colorStops.push({
            location: psdReader_1.readUint32(reader),
            midpoint: psdReader_1.readUint32(reader) / 100,
            color: psdReader_1.readColor(reader)
        });
        psdReader_1.skipBytes(reader, 2);
    }
    var opacityStopsCount = psdReader_1.readUint16(reader);
    for(var i = 0; i < opacityStopsCount; i++)info.opacityStops.push({
        location: psdReader_1.readUint32(reader),
        midpoint: psdReader_1.readUint32(reader) / 100,
        opacity: psdReader_1.readUint16(reader) / 255
    });
    var expansionCount = psdReader_1.readUint16(reader);
    if (expansionCount !== 2) throw new Error('Invalid grdm expansion count');
    var interpolation = psdReader_1.readUint16(reader);
    info.smoothness = interpolation / 4096;
    var length = psdReader_1.readUint16(reader);
    if (length !== 32) throw new Error('Invalid grdm length');
    info.gradientType = psdReader_1.readUint16(reader) ? 'noise' : 'solid';
    info.randomSeed = psdReader_1.readUint32(reader);
    info.addTransparency = !!psdReader_1.readUint16(reader);
    info.restrictColors = !!psdReader_1.readUint16(reader);
    info.roughness = psdReader_1.readUint32(reader) / 4096;
    info.colorModel = grdmColorModels[psdReader_1.readUint16(reader)] || 'rgb';
    info.min = [
        psdReader_1.readUint16(reader) / 32768,
        psdReader_1.readUint16(reader) / 32768,
        psdReader_1.readUint16(reader) / 32768,
        psdReader_1.readUint16(reader) / 32768, 
    ];
    info.max = [
        psdReader_1.readUint16(reader) / 32768,
        psdReader_1.readUint16(reader) / 32768,
        psdReader_1.readUint16(reader) / 32768,
        psdReader_1.readUint16(reader) / 32768, 
    ];
    psdReader_1.skipBytes(reader, left());
    for(var _i = 0, _a = info.colorStops; _i < _a.length; _i++){
        var s = _a[_i];
        s.location /= interpolation;
    }
    for(var _b = 0, _c = info.opacityStops; _b < _c.length; _b++){
        var s = _c[_b];
        s.location /= interpolation;
    }
    target.adjustment = info;
}, function(writer, target) {
    var _a, _b, _c;
    var info = target.adjustment;
    psdWriter_1.writeUint16(writer, 1); // version
    psdWriter_1.writeUint8(writer, info.reverse ? 1 : 0);
    psdWriter_1.writeUint8(writer, info.dither ? 1 : 0);
    psdWriter_1.writeUnicodeStringWithPadding(writer, info.name || '');
    psdWriter_1.writeUint16(writer, info.colorStops && info.colorStops.length || 0);
    var interpolation = Math.round(((_a = info.smoothness) !== null && _a !== void 0 ? _a : 1) * 4096);
    for(var _i = 0, _d = info.colorStops || []; _i < _d.length; _i++){
        var s = _d[_i];
        psdWriter_1.writeUint32(writer, Math.round(s.location * interpolation));
        psdWriter_1.writeUint32(writer, Math.round(s.midpoint * 100));
        psdWriter_1.writeColor(writer, s.color);
        psdWriter_1.writeZeros(writer, 2);
    }
    psdWriter_1.writeUint16(writer, info.opacityStops && info.opacityStops.length || 0);
    for(var _e = 0, _f = info.opacityStops || []; _e < _f.length; _e++){
        var s = _f[_e];
        psdWriter_1.writeUint32(writer, Math.round(s.location * interpolation));
        psdWriter_1.writeUint32(writer, Math.round(s.midpoint * 100));
        psdWriter_1.writeUint16(writer, Math.round(s.opacity * 255));
    }
    psdWriter_1.writeUint16(writer, 2); // expansion count
    psdWriter_1.writeUint16(writer, interpolation);
    psdWriter_1.writeUint16(writer, 32); // length
    psdWriter_1.writeUint16(writer, info.gradientType === 'noise' ? 1 : 0);
    psdWriter_1.writeUint32(writer, info.randomSeed || 0);
    psdWriter_1.writeUint16(writer, info.addTransparency ? 1 : 0);
    psdWriter_1.writeUint16(writer, info.restrictColors ? 1 : 0);
    psdWriter_1.writeUint32(writer, Math.round(((_b = info.roughness) !== null && _b !== void 0 ? _b : 1) * 4096));
    var colorModel = grdmColorModels.indexOf((_c = info.colorModel) !== null && _c !== void 0 ? _c : 'rgb');
    psdWriter_1.writeUint16(writer, colorModel === -1 ? 3 : colorModel);
    for(var i = 0; i < 4; i++)psdWriter_1.writeUint16(writer, Math.round((info.min && info.min[i] || 0) * 32768));
    for(var i = 0; i < 4; i++)psdWriter_1.writeUint16(writer, Math.round((info.max && info.max[i] || 0) * 32768));
    psdWriter_1.writeZeros(writer, 4);
});
function readSelectiveColors(reader) {
    return {
        c: psdReader_1.readInt16(reader),
        m: psdReader_1.readInt16(reader),
        y: psdReader_1.readInt16(reader),
        k: psdReader_1.readInt16(reader)
    };
}
function writeSelectiveColors(writer, cmyk) {
    var c = cmyk || {
    };
    psdWriter_1.writeInt16(writer, c.c);
    psdWriter_1.writeInt16(writer, c.m);
    psdWriter_1.writeInt16(writer, c.y);
    psdWriter_1.writeInt16(writer, c.k);
}
addHandler('selc', adjustmentType('selective color'), function(reader, target) {
    if (psdReader_1.readUint16(reader) !== 1) throw new Error('Invalid selc version');
    var mode = psdReader_1.readUint16(reader) ? 'absolute' : 'relative';
    psdReader_1.skipBytes(reader, 8);
    target.adjustment = {
        type: 'selective color',
        mode: mode,
        reds: readSelectiveColors(reader),
        yellows: readSelectiveColors(reader),
        greens: readSelectiveColors(reader),
        cyans: readSelectiveColors(reader),
        blues: readSelectiveColors(reader),
        magentas: readSelectiveColors(reader),
        whites: readSelectiveColors(reader),
        neutrals: readSelectiveColors(reader),
        blacks: readSelectiveColors(reader)
    };
}, function(writer, target) {
    var info = target.adjustment;
    psdWriter_1.writeUint16(writer, 1); // version
    psdWriter_1.writeUint16(writer, info.mode === 'absolute' ? 1 : 0);
    psdWriter_1.writeZeros(writer, 8);
    writeSelectiveColors(writer, info.reds);
    writeSelectiveColors(writer, info.yellows);
    writeSelectiveColors(writer, info.greens);
    writeSelectiveColors(writer, info.cyans);
    writeSelectiveColors(writer, info.blues);
    writeSelectiveColors(writer, info.magentas);
    writeSelectiveColors(writer, info.whites);
    writeSelectiveColors(writer, info.neutrals);
    writeSelectiveColors(writer, info.blacks);
});
addHandler('CgEd', function(target) {
    var a = target.adjustment;
    if (!a) return false;
    return a.type === 'brightness/contrast' && !a.useLegacy || (a.type === 'levels' || a.type === 'curves' || a.type === 'exposure' || a.type === 'channel mixer' || a.type === 'hue/saturation') && a.presetFileName !== undefined;
}, function(reader, target, left) {
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    if (desc.Vrsn !== 1) throw new Error('Invalid CgEd version');
    // this section can specify preset file name for other adjustment types
    if ('presetFileName' in desc) target.adjustment = __assign(__assign({
    }, target.adjustment), {
        presetKind: desc.presetKind,
        presetFileName: desc.presetFileName
    });
    else if ('curvesPresetFileName' in desc) target.adjustment = __assign(__assign({
    }, target.adjustment), {
        presetKind: desc.curvesPresetKind,
        presetFileName: desc.curvesPresetFileName
    });
    else if ('mixerPresetFileName' in desc) target.adjustment = __assign(__assign({
    }, target.adjustment), {
        presetKind: desc.mixerPresetKind,
        presetFileName: desc.mixerPresetFileName
    });
    else target.adjustment = {
        type: 'brightness/contrast',
        brightness: desc.Brgh,
        contrast: desc.Cntr,
        meanValue: desc.means,
        useLegacy: !!desc.useLegacy,
        labColorOnly: !!desc['Lab '],
        auto: !!desc.Auto
    };
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var _a, _b, _c, _d;
    var info = target.adjustment;
    if (info.type === 'levels' || info.type === 'exposure' || info.type === 'hue/saturation') {
        var desc = {
            Vrsn: 1,
            presetKind: (_a = info.presetKind) !== null && _a !== void 0 ? _a : 1,
            presetFileName: info.presetFileName || ''
        };
        descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
    } else if (info.type === 'curves') {
        var desc = {
            Vrsn: 1,
            curvesPresetKind: (_b = info.presetKind) !== null && _b !== void 0 ? _b : 1,
            curvesPresetFileName: info.presetFileName || ''
        };
        descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
    } else if (info.type === 'channel mixer') {
        var desc = {
            Vrsn: 1,
            mixerPresetKind: (_c = info.presetKind) !== null && _c !== void 0 ? _c : 1,
            mixerPresetFileName: info.presetFileName || ''
        };
        descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
    } else if (info.type === 'brightness/contrast') {
        var desc = {
            Vrsn: 1,
            Brgh: info.brightness || 0,
            Cntr: info.contrast || 0,
            means: (_d = info.meanValue) !== null && _d !== void 0 ? _d : 127,
            'Lab ': !!info.labColorOnly,
            useLegacy: !!info.useLegacy,
            Auto: !!info.auto
        };
        descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
    } else throw new Error('Unhandled CgEd case');
});
addHandler('Txt2', hasKey('engineData'), function(reader, target, left) {
    var data = psdReader_1.readBytes(reader, left());
    target.engineData = base64_js_1.fromByteArray(data);
// const engineData = parseEngineData(data);
// console.log(require('util').inspect(engineData, false, 99, true));
// require('fs').writeFileSync('resources/engineData2Simple.txt', require('util').inspect(engineData, false, 99, false), 'utf8');
// require('fs').writeFileSync('test_data.json', JSON.stringify(ed, null, 2), 'utf8');
}, function(writer, target) {
    var buffer = base64_js_1.toByteArray(target.engineData);
    psdWriter_1.writeBytes(writer, buffer);
});
addHandler('FMsk', hasKey('filterMask'), function(reader, target) {
    target.filterMask = {
        colorSpace: psdReader_1.readColor(reader),
        opacity: psdReader_1.readUint16(reader) / 255
    };
}, function(writer, target) {
    var _a;
    psdWriter_1.writeColor(writer, target.filterMask.colorSpace);
    psdWriter_1.writeUint16(writer, helpers_1.clamp((_a = target.filterMask.opacity) !== null && _a !== void 0 ? _a : 1, 0, 1) * 255);
});
addHandler('artd', function(target) {
    return target.artboards !== undefined;
}, function(reader, target, left) {
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    target.artboards = {
        count: desc['Cnt '],
        autoExpandOffset: {
            horizontal: desc.autoExpandOffset.Hrzn,
            vertical: desc.autoExpandOffset.Vrtc
        },
        origin: {
            horizontal: desc.origin.Hrzn,
            vertical: desc.origin.Vrtc
        },
        autoExpandEnabled: desc.autoExpandEnabled,
        autoNestEnabled: desc.autoNestEnabled,
        autoPositionEnabled: desc.autoPositionEnabled,
        shrinkwrapOnSaveEnabled: desc.shrinkwrapOnSaveEnabled,
        docDefaultNewArtboardBackgroundColor: parseColor(desc.docDefaultNewArtboardBackgroundColor),
        docDefaultNewArtboardBackgroundType: desc.docDefaultNewArtboardBackgroundType
    };
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var _a, _b, _c, _d, _e;
    var artb = target.artboards;
    var desc = {
        'Cnt ': artb.count,
        autoExpandOffset: artb.autoExpandOffset ? {
            Hrzn: artb.autoExpandOffset.horizontal,
            Vrtc: artb.autoExpandOffset.vertical
        } : {
            Hrzn: 0,
            Vrtc: 0
        },
        origin: artb.origin ? {
            Hrzn: artb.origin.horizontal,
            Vrtc: artb.origin.vertical
        } : {
            Hrzn: 0,
            Vrtc: 0
        },
        autoExpandEnabled: (_a = artb.autoExpandEnabled) !== null && _a !== void 0 ? _a : true,
        autoNestEnabled: (_b = artb.autoNestEnabled) !== null && _b !== void 0 ? _b : true,
        autoPositionEnabled: (_c = artb.autoPositionEnabled) !== null && _c !== void 0 ? _c : true,
        shrinkwrapOnSaveEnabled: (_d = artb.shrinkwrapOnSaveEnabled) !== null && _d !== void 0 ? _d : true,
        docDefaultNewArtboardBackgroundColor: serializeColor(artb.docDefaultNewArtboardBackgroundColor),
        docDefaultNewArtboardBackgroundType: (_e = artb.docDefaultNewArtboardBackgroundType) !== null && _e !== void 0 ? _e : 1
    };
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc, 'artd');
});
addHandler('lfx2', hasKey('effects'), function(reader, target, left, _, options) {
    var log = !!options.logMissingFeatures;
    var version = psdReader_1.readUint32(reader);
    if (version !== 0) throw new Error("Invalid lfx2 version");
    var info = descriptor_1.readVersionAndDescriptor(reader);
    target.effects = {
    }; // discard if read in 'lrFX' section
    var effects = target.effects;
    if (!info.masterFXSwitch) effects.disabled = true;
    if (info['Scl ']) effects.scale = descriptor_1.parsePercent(info['Scl ']);
    if (info.DrSh) effects.dropShadow = parseEffectObject(info.DrSh, log);
    if (info.IrSh) effects.innerShadow = parseEffectObject(info.IrSh, log);
    if (info.OrGl) effects.outerGlow = parseEffectObject(info.OrGl, log);
    if (info.IrGl) effects.innerGlow = parseEffectObject(info.IrGl, log);
    if (info.ebbl) effects.bevel = parseEffectObject(info.ebbl, log);
    if (info.SoFi) effects.solidFill = parseEffectObject(info.SoFi, log);
    if (info.patternFill) effects.patternOverlay = parseEffectObject(info.patternFill, log);
    if (info.GrFl) effects.gradientOverlay = parseEffectObject(info.GrFl, log);
    if (info.ChFX) effects.satin = parseEffectObject(info.ChFX, log);
    if (info.FrFX) {
        effects.stroke = {
            enabled: !!info.FrFX.enab,
            position: descriptor_1.FStl.decode(info.FrFX.Styl),
            fillType: descriptor_1.FrFl.decode(info.FrFX.PntT),
            blendMode: descriptor_1.BlnM.decode(info.FrFX['Md  ']),
            opacity: descriptor_1.parsePercent(info.FrFX.Opct),
            size: descriptor_1.parseUnits(info.FrFX['Sz  '])
        };
        if (info.FrFX['Clr ']) effects.stroke.color = parseColor(info.FrFX['Clr ']);
        if (info.FrFX.Grad) effects.stroke.gradient = parseGradientContent(info.FrFX);
        if (info.FrFX.Ptrn) effects.stroke.pattern = parsePatternContent(info.FrFX);
    }
    psdReader_1.skipBytes(reader, left());
}, function(writer, target, _, options) {
    var _a;
    var log = !!options.logMissingFeatures;
    var effects = target.effects;
    var info = {
        masterFXSwitch: !effects.disabled,
        'Scl ': descriptor_1.unitsPercent((_a = effects.scale) !== null && _a !== void 0 ? _a : 1)
    };
    if (effects.dropShadow) info.DrSh = serializeEffectObject(effects.dropShadow, 'dropShadow', log);
    if (effects.innerShadow) info.IrSh = serializeEffectObject(effects.innerShadow, 'innerShadow', log);
    if (effects.outerGlow) info.OrGl = serializeEffectObject(effects.outerGlow, 'outerGlow', log);
    if (effects.innerGlow) info.IrGl = serializeEffectObject(effects.innerGlow, 'innerGlow', log);
    if (effects.bevel) info.ebbl = serializeEffectObject(effects.bevel, 'bevel', log);
    if (effects.solidFill) info.SoFi = serializeEffectObject(effects.solidFill, 'solidFill', log);
    if (effects.patternOverlay) info.patternFill = serializeEffectObject(effects.patternOverlay, 'patternOverlay', log);
    if (effects.gradientOverlay) info.GrFl = serializeEffectObject(effects.gradientOverlay, 'gradientOverlay', log);
    if (effects.satin) info.ChFX = serializeEffectObject(effects.satin, 'satin', log);
    var stroke = effects.stroke;
    if (stroke) {
        info.FrFX = {
            enab: !!stroke.enabled,
            Styl: descriptor_1.FStl.encode(stroke.position),
            PntT: descriptor_1.FrFl.encode(stroke.fillType),
            'Md  ': descriptor_1.BlnM.encode(stroke.blendMode),
            Opct: descriptor_1.unitsPercent(stroke.opacity),
            'Sz  ': descriptor_1.unitsValue(stroke.size, 'size')
        };
        if (stroke.color) info.FrFX['Clr '] = serializeColor(stroke.color);
        if (stroke.gradient) info.FrFX = __assign(__assign({
        }, info.FrFX), serializeGradientContent(stroke.gradient));
        if (stroke.pattern) info.FrFX = __assign(__assign({
        }, info.FrFX), serializePatternContent(stroke.pattern));
    }
    psdWriter_1.writeUint32(writer, 0); // version
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', info);
});
function readLength64(reader) {
    if (psdReader_1.readUint32(reader)) throw new Error("Resource size above 4 GB limit at " + reader.offset.toString(16));
    return psdReader_1.readUint32(reader);
}
function writeLength64(writer, length) {
    psdWriter_1.writeUint32(writer, 0);
    psdWriter_1.writeUint32(writer, length);
}
addHandler('cinf', hasKey('compositorUsed'), function(reader, target) {
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    // console.log(require('util').inspect(desc, false, 99, true));
    target.compositorUsed = {
        description: desc.description,
        reason: desc.reason,
        engine: desc.Engn.split('.')[1],
        enableCompCore: desc.enableCompCore.split('.')[1],
        enableCompCoreGPU: desc.enableCompCoreGPU.split('.')[1],
        compCoreSupport: desc.compCoreSupport.split('.')[1],
        compCoreGPUSupport: desc.compCoreGPUSupport.split('.')[1]
    };
}, function(writer, target) {
    var cinf = target.compositorUsed;
    var desc = {
        Vrsn: {
            major: 1,
            minor: 0,
            fix: 0
        },
        // psVersion: { major: 22, minor: 1, fix: 0 }, // TESTING
        description: cinf.description,
        reason: cinf.reason,
        Engn: "Engn." + cinf.engine,
        enableCompCore: "enable." + cinf.enableCompCore,
        enableCompCoreGPU: "enable." + cinf.enableCompCoreGPU,
        compCoreSupport: "reason." + cinf.compCoreSupport,
        compCoreGPUSupport: "reason." + cinf.compCoreGPUSupport
    };
    descriptor_1.writeVersionAndDescriptor(writer, '', 'null', desc);
});
// descriptor helpers
function parseGradient(grad) {
    if (grad.GrdF === 'GrdF.CstS') {
        var samples_1 = grad.Intr || 4096;
        return {
            type: 'solid',
            name: grad['Nm  '],
            smoothness: grad.Intr / 4096,
            colorStops: grad.Clrs.map(function(s) {
                return {
                    color: parseColor(s['Clr ']),
                    location: s.Lctn / samples_1,
                    midpoint: s.Mdpn / 100
                };
            }),
            opacityStops: grad.Trns.map(function(s) {
                return {
                    opacity: descriptor_1.parsePercent(s.Opct),
                    location: s.Lctn / samples_1,
                    midpoint: s.Mdpn / 100
                };
            })
        };
    } else return {
        type: 'noise',
        name: grad['Nm  '],
        roughness: grad.Smth / 4096,
        colorModel: descriptor_1.ClrS.decode(grad.ClrS),
        randomSeed: grad.RndS,
        restrictColors: !!grad.VctC,
        addTransparency: !!grad.ShTr,
        min: grad['Mnm '].map(function(x) {
            return x / 100;
        }),
        max: grad['Mxm '].map(function(x) {
            return x / 100;
        })
    };
}
function serializeGradient(grad) {
    var _a1, _b;
    if (grad.type === 'solid') {
        var samples_2 = Math.round(((_a1 = grad.smoothness) !== null && _a1 !== void 0 ? _a1 : 1) * 4096);
        return {
            'Nm  ': grad.name,
            GrdF: 'GrdF.CstS',
            Intr: samples_2,
            Clrs: grad.colorStops.map(function(s) {
                var _a;
                return {
                    'Clr ': serializeColor(s.color),
                    Type: 'Clry.UsrS',
                    Lctn: Math.round(s.location * samples_2),
                    Mdpn: Math.round(((_a = s.midpoint) !== null && _a !== void 0 ? _a : 0.5) * 100)
                };
            }),
            Trns: grad.opacityStops.map(function(s) {
                var _a;
                return {
                    Opct: descriptor_1.unitsPercent(s.opacity),
                    Lctn: Math.round(s.location * samples_2),
                    Mdpn: Math.round(((_a = s.midpoint) !== null && _a !== void 0 ? _a : 0.5) * 100)
                };
            })
        };
    } else return {
        GrdF: 'GrdF.ClNs',
        'Nm  ': grad.name,
        ShTr: !!grad.addTransparency,
        VctC: !!grad.restrictColors,
        ClrS: descriptor_1.ClrS.encode(grad.colorModel),
        RndS: grad.randomSeed || 0,
        Smth: Math.round(((_b = grad.roughness) !== null && _b !== void 0 ? _b : 1) * 4096),
        'Mnm ': (grad.min || [
            0,
            0,
            0,
            0
        ]).map(function(x) {
            return x * 100;
        }),
        'Mxm ': (grad.max || [
            1,
            1,
            1,
            1
        ]).map(function(x) {
            return x * 100;
        })
    };
}
function parseGradientContent(descriptor) {
    var result = parseGradient(descriptor.Grad);
    result.style = descriptor_1.GrdT.decode(descriptor.Type);
    if (descriptor.Dthr !== undefined) result.dither = descriptor.Dthr;
    if (descriptor.Rvrs !== undefined) result.reverse = descriptor.Rvrs;
    if (descriptor.Angl !== undefined) result.angle = descriptor_1.parseAngle(descriptor.Angl);
    if (descriptor['Scl '] !== undefined) result.scale = descriptor_1.parsePercent(descriptor['Scl ']);
    if (descriptor.Algn !== undefined) result.align = descriptor.Algn;
    if (descriptor.Ofst !== undefined) result.offset = {
        x: descriptor_1.parsePercent(descriptor.Ofst.Hrzn),
        y: descriptor_1.parsePercent(descriptor.Ofst.Vrtc)
    };
    return result;
}
function parsePatternContent(descriptor) {
    var result = {
        name: descriptor.Ptrn['Nm  '],
        id: descriptor.Ptrn.Idnt
    };
    if (descriptor.Lnkd !== undefined) result.linked = descriptor.Lnkd;
    if (descriptor.phase !== undefined) result.phase = {
        x: descriptor.phase.Hrzn,
        y: descriptor.phase.Vrtc
    };
    return result;
}
function parseVectorContent(descriptor) {
    if ('Grad' in descriptor) return parseGradientContent(descriptor);
    else if ('Ptrn' in descriptor) return __assign({
        type: 'pattern'
    }, parsePatternContent(descriptor));
    else if ('Clr ' in descriptor) return {
        type: 'color',
        color: parseColor(descriptor['Clr '])
    };
    else throw new Error('Invalid vector content');
}
function serializeGradientContent(content) {
    var result = {
    };
    if (content.dither !== undefined) result.Dthr = content.dither;
    if (content.reverse !== undefined) result.Rvrs = content.reverse;
    if (content.angle !== undefined) result.Angl = descriptor_1.unitsAngle(content.angle);
    result.Type = descriptor_1.GrdT.encode(content.style);
    if (content.align !== undefined) result.Algn = content.align;
    if (content.scale !== undefined) result['Scl '] = descriptor_1.unitsPercent(content.scale);
    if (content.offset) result.Ofst = {
        Hrzn: descriptor_1.unitsPercent(content.offset.x),
        Vrtc: descriptor_1.unitsPercent(content.offset.y)
    };
    result.Grad = serializeGradient(content);
    return result;
}
function serializePatternContent(content) {
    var result = {
        Ptrn: {
            'Nm  ': content.name || '',
            Idnt: content.id || ''
        }
    };
    if (content.linked !== undefined) result.Lnkd = !!content.linked;
    if (content.phase !== undefined) result.phase = {
        Hrzn: content.phase.x,
        Vrtc: content.phase.y
    };
    return result;
}
function serializeVectorContent(content) {
    if (content.type === 'color') return {
        key: 'SoCo',
        descriptor: {
            'Clr ': serializeColor(content.color)
        }
    };
    else if (content.type === 'pattern') return {
        key: 'PtFl',
        descriptor: serializePatternContent(content)
    };
    else return {
        key: 'GdFl',
        descriptor: serializeGradientContent(content)
    };
}
function parseColor(color) {
    if ('H   ' in color) return {
        h: descriptor_1.parsePercentOrAngle(color['H   ']),
        s: color.Strt,
        b: color.Brgh
    };
    else if ('Rd  ' in color) return {
        r: color['Rd  '],
        g: color['Grn '],
        b: color['Bl  ']
    };
    else if ('Cyn ' in color) return {
        c: color['Cyn '],
        m: color.Mgnt,
        y: color['Ylw '],
        k: color.Blck
    };
    else if ('Gry ' in color) return {
        k: color['Gry ']
    };
    else if ('Lmnc' in color) return {
        l: color.Lmnc,
        a: color['A   '],
        b: color['B   ']
    };
    else throw new Error('Unsupported color descriptor');
}
function serializeColor(color) {
    if (!color) return {
        'Rd  ': 0,
        'Grn ': 0,
        'Bl  ': 0
    };
    else if ('r' in color) return {
        'Rd  ': color.r || 0,
        'Grn ': color.g || 0,
        'Bl  ': color.b || 0
    };
    else if ('h' in color) return {
        'H   ': descriptor_1.unitsAngle(color.h * 360),
        Strt: color.s || 0,
        Brgh: color.b || 0
    };
    else if ('c' in color) return {
        'Cyn ': color.c || 0,
        Mgnt: color.m || 0,
        'Ylw ': color.y || 0,
        Blck: color.k || 0
    };
    else if ('l' in color) return {
        Lmnc: color.l || 0,
        'A   ': color.a || 0,
        'B   ': color.b || 0
    };
    else if ('k' in color) return {
        'Gry ': color.k
    };
    else throw new Error('Invalid color value');
}
function parseEffectObject(obj, reportErrors) {
    var result = {
    };
    for(var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++){
        var key = _a[_i];
        var val = obj[key];
        switch(key){
            case 'enab':
                result.enabled = !!val;
                break;
            case 'uglg':
                result.useGlobalLight = !!val;
                break;
            case 'AntA':
                result.antialiased = !!val;
                break;
            case 'Algn':
                result.align = !!val;
                break;
            case 'Dthr':
                result.dither = !!val;
                break;
            case 'Invr':
                result.invert = !!val;
                break;
            case 'Rvrs':
                result.reverse = !!val;
                break;
            case 'Clr ':
                result.color = parseColor(val);
                break;
            case 'hglC':
                result.highlightColor = parseColor(val);
                break;
            case 'sdwC':
                result.shadowColor = parseColor(val);
                break;
            case 'Styl':
                result.position = descriptor_1.FStl.decode(val);
                break;
            case 'Md  ':
                result.blendMode = descriptor_1.BlnM.decode(val);
                break;
            case 'hglM':
                result.highlightBlendMode = descriptor_1.BlnM.decode(val);
                break;
            case 'sdwM':
                result.shadowBlendMode = descriptor_1.BlnM.decode(val);
                break;
            case 'bvlS':
                result.style = descriptor_1.BESl.decode(val);
                break;
            case 'bvlD':
                result.direction = descriptor_1.BESs.decode(val);
                break;
            case 'bvlT':
                result.technique = descriptor_1.bvlT.decode(val);
                break;
            case 'GlwT':
                result.technique = descriptor_1.BETE.decode(val);
                break;
            case 'glwS':
                result.source = descriptor_1.IGSr.decode(val);
                break;
            case 'Type':
                result.type = descriptor_1.GrdT.decode(val);
                break;
            case 'Opct':
                result.opacity = descriptor_1.parsePercent(val);
                break;
            case 'hglO':
                result.highlightOpacity = descriptor_1.parsePercent(val);
                break;
            case 'sdwO':
                result.shadowOpacity = descriptor_1.parsePercent(val);
                break;
            case 'lagl':
                result.angle = descriptor_1.parseAngle(val);
                break;
            case 'Angl':
                result.angle = descriptor_1.parseAngle(val);
                break;
            case 'Lald':
                result.altitude = descriptor_1.parseAngle(val);
                break;
            case 'Sftn':
                result.soften = descriptor_1.parseUnits(val);
                break;
            case 'srgR':
                result.strength = descriptor_1.parsePercent(val);
                break;
            case 'blur':
                result.size = descriptor_1.parseUnits(val);
                break;
            case 'Nose':
                result.noise = descriptor_1.parsePercent(val);
                break;
            case 'Inpr':
                result.range = descriptor_1.parsePercent(val);
                break;
            case 'Ckmt':
                result.choke = descriptor_1.parseUnits(val);
                break;
            case 'ShdN':
                result.jitter = descriptor_1.parsePercent(val);
                break;
            case 'Dstn':
                result.distance = descriptor_1.parseUnits(val);
                break;
            case 'Scl ':
                result.scale = descriptor_1.parsePercent(val);
                break;
            case 'Ptrn':
                result.pattern = {
                    name: val['Nm  '],
                    id: val.Idnt
                };
                break;
            case 'phase':
                result.phase = {
                    x: val.Hrzn,
                    y: val.Vrtc
                };
                break;
            case 'Ofst':
                result.offset = {
                    x: descriptor_1.parsePercent(val.Hrzn),
                    y: descriptor_1.parsePercent(val.Vrtc)
                };
                break;
            case 'MpgS':
            case 'TrnS':
                result.contour = {
                    name: val['Nm  '],
                    curve: val['Crv '].map(function(p) {
                        return {
                            x: p.Hrzn,
                            y: p.Vrtc
                        };
                    })
                };
                break;
            case 'Grad':
                result.gradient = parseGradient(val);
                break;
            case 'useTexture':
            case 'useShape':
            case 'layerConceals':
            case 'present':
            case 'showInDialog':
            case 'antialiasGloss':
                result[key] = val;
                break;
            default:
                reportErrors && console.log("Invalid effect key: '" + key + "':", val);
        }
    }
    return result;
}
function serializeEffectObject(obj, objName, reportErrors) {
    var result = {
    };
    for(var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++){
        var objKey = _a[_i];
        var key = objKey;
        var val = obj[key];
        switch(key){
            case 'enabled':
                result.enab = !!val;
                break;
            case 'useGlobalLight':
                result.uglg = !!val;
                break;
            case 'antialiased':
                result.AntA = !!val;
                break;
            case 'align':
                result.Algn = !!val;
                break;
            case 'dither':
                result.Dthr = !!val;
                break;
            case 'invert':
                result.Invr = !!val;
                break;
            case 'reverse':
                result.Rvrs = !!val;
                break;
            case 'color':
                result['Clr '] = serializeColor(val);
                break;
            case 'highlightColor':
                result.hglC = serializeColor(val);
                break;
            case 'shadowColor':
                result.sdwC = serializeColor(val);
                break;
            case 'position':
                result.Styl = descriptor_1.FStl.encode(val);
                break;
            case 'blendMode':
                result['Md  '] = descriptor_1.BlnM.encode(val);
                break;
            case 'highlightBlendMode':
                result.hglM = descriptor_1.BlnM.encode(val);
                break;
            case 'shadowBlendMode':
                result.sdwM = descriptor_1.BlnM.encode(val);
                break;
            case 'style':
                result.bvlS = descriptor_1.BESl.encode(val);
                break;
            case 'direction':
                result.bvlD = descriptor_1.BESs.encode(val);
                break;
            case 'technique':
                if (objName === 'bevel') result.bvlT = descriptor_1.bvlT.encode(val);
                else result.GlwT = descriptor_1.BETE.encode(val);
                break;
            case 'source':
                result.glwS = descriptor_1.IGSr.encode(val);
                break;
            case 'type':
                result.Type = descriptor_1.GrdT.encode(val);
                break;
            case 'opacity':
                result.Opct = descriptor_1.unitsPercent(val);
                break;
            case 'highlightOpacity':
                result.hglO = descriptor_1.unitsPercent(val);
                break;
            case 'shadowOpacity':
                result.sdwO = descriptor_1.unitsPercent(val);
                break;
            case 'angle':
                if (objName === 'gradientOverlay') result.Angl = descriptor_1.unitsAngle(val);
                else result.lagl = descriptor_1.unitsAngle(val);
                break;
            case 'altitude':
                result.Lald = descriptor_1.unitsAngle(val);
                break;
            case 'soften':
                result.Sftn = descriptor_1.unitsValue(val, key);
                break;
            case 'strength':
                result.srgR = descriptor_1.unitsPercent(val);
                break;
            case 'size':
                result.blur = descriptor_1.unitsValue(val, key);
                break;
            case 'noise':
                result.Nose = descriptor_1.unitsPercent(val);
                break;
            case 'range':
                result.Inpr = descriptor_1.unitsPercent(val);
                break;
            case 'choke':
                result.Ckmt = descriptor_1.unitsValue(val, key);
                break;
            case 'jitter':
                result.ShdN = descriptor_1.unitsPercent(val);
                break;
            case 'distance':
                result.Dstn = descriptor_1.unitsValue(val, key);
                break;
            case 'scale':
                result['Scl '] = descriptor_1.unitsPercent(val);
                break;
            case 'pattern':
                result.Ptrn = {
                    'Nm  ': val.name,
                    Idnt: val.id
                };
                break;
            case 'phase':
                result.phase = {
                    Hrzn: val.x,
                    Vrtc: val.y
                };
                break;
            case 'offset':
                result.Ofst = {
                    Hrzn: descriptor_1.unitsPercent(val.x),
                    Vrtc: descriptor_1.unitsPercent(val.y)
                };
                break;
            case 'contour':
                result[objName === 'satin' ? 'MpgS' : 'TrnS'] = {
                    'Nm  ': val.name,
                    'Crv ': val.curve.map(function(p) {
                        return {
                            Hrzn: p.x,
                            Vrtc: p.y
                        };
                    })
                };
                break;
            case 'gradient':
                result.Grad = serializeGradient(val);
                break;
            case 'useTexture':
            case 'useShape':
            case 'layerConceals':
            case 'present':
            case 'showInDialog':
            case 'antialiasGloss':
                result[key] = val;
                break;
            default:
                reportErrors && console.log("Invalid effect key: '" + key + "' value:", val);
        }
    }
    return result;
}

},{"base64-js":"h8vFx","./effectsHelpers":"el1vm","./helpers":"g9u8n","./psdReader":"95tw3","./psdWriter":"cC52e","./descriptor":"9vWE6","./engineData":"6z0Bx","./text":"f5912"}],"el1vm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeEffects = exports.readEffects = void 0;
var helpers_1 = require("./helpers");
var psdReader_1 = require("./psdReader");
var psdWriter_1 = require("./psdWriter");
var bevelStyles = [
    undefined,
    'outer bevel',
    'inner bevel',
    'emboss',
    'pillow emboss',
    'stroke emboss'
];
function readBlendMode(reader) {
    psdReader_1.checkSignature(reader, '8BIM');
    return helpers_1.toBlendMode[psdReader_1.readSignature(reader)] || 'normal';
}
function writeBlendMode(writer, mode) {
    psdWriter_1.writeSignature(writer, '8BIM');
    psdWriter_1.writeSignature(writer, helpers_1.fromBlendMode[mode] || 'norm');
}
function readFixedPoint8(reader) {
    return psdReader_1.readUint8(reader) / 255;
}
function writeFixedPoint8(writer, value) {
    psdWriter_1.writeUint8(writer, Math.round(value * 255) | 0);
}
function readEffects(reader) {
    var version = psdReader_1.readUint16(reader);
    if (version !== 0) throw new Error("Invalid effects layer version: " + version);
    var effectsCount = psdReader_1.readUint16(reader);
    var effects = {
    };
    for(var i = 0; i < effectsCount; i++){
        psdReader_1.checkSignature(reader, '8BIM');
        var type = psdReader_1.readSignature(reader);
        switch(type){
            case 'cmnS':
                var size = psdReader_1.readUint32(reader);
                var version_1 = psdReader_1.readUint32(reader);
                var visible = !!psdReader_1.readUint8(reader);
                psdReader_1.skipBytes(reader, 2);
                if (size !== 7 || version_1 !== 0 || !visible) throw new Error("Invalid effects common state");
                break;
            case 'dsdw':
            case 'isdw':
                var blockSize = psdReader_1.readUint32(reader);
                var version_2 = psdReader_1.readUint32(reader);
                if (blockSize !== 41 && blockSize !== 51) throw new Error("Invalid shadow size: " + blockSize);
                if (version_2 !== 0 && version_2 !== 2) throw new Error("Invalid shadow version: " + version_2);
                var size = psdReader_1.readFixedPoint32(reader);
                psdReader_1.readFixedPoint32(reader); // intensity
                var angle = psdReader_1.readFixedPoint32(reader);
                var distance = psdReader_1.readFixedPoint32(reader);
                var color = psdReader_1.readColor(reader);
                var blendMode = readBlendMode(reader);
                var enabled = !!psdReader_1.readUint8(reader);
                var useGlobalLight = !!psdReader_1.readUint8(reader);
                var opacity = readFixedPoint8(reader);
                if (blockSize >= 51) psdReader_1.readColor(reader); // native color
                var shadowInfo = {
                    size: {
                        units: 'Pixels',
                        value: size
                    },
                    distance: {
                        units: 'Pixels',
                        value: distance
                    },
                    angle: angle,
                    color: color,
                    blendMode: blendMode,
                    enabled: enabled,
                    useGlobalLight: useGlobalLight,
                    opacity: opacity
                };
                if (type === 'dsdw') effects.dropShadow = shadowInfo;
                else effects.innerShadow = shadowInfo;
                break;
            case 'oglw':
                var blockSize = psdReader_1.readUint32(reader);
                var version_3 = psdReader_1.readUint32(reader);
                if (blockSize !== 32 && blockSize !== 42) throw new Error("Invalid outer glow size: " + blockSize);
                if (version_3 !== 0 && version_3 !== 2) throw new Error("Invalid outer glow version: " + version_3);
                var size = psdReader_1.readFixedPoint32(reader);
                psdReader_1.readFixedPoint32(reader); // intensity
                var color = psdReader_1.readColor(reader);
                var blendMode = readBlendMode(reader);
                var enabled = !!psdReader_1.readUint8(reader);
                var opacity = readFixedPoint8(reader);
                if (blockSize >= 42) psdReader_1.readColor(reader); // native color
                effects.outerGlow = {
                    size: {
                        units: 'Pixels',
                        value: size
                    },
                    color: color,
                    blendMode: blendMode,
                    enabled: enabled,
                    opacity: opacity
                };
                break;
            case 'iglw':
                var blockSize = psdReader_1.readUint32(reader);
                var version_4 = psdReader_1.readUint32(reader);
                if (blockSize !== 32 && blockSize !== 43) throw new Error("Invalid inner glow size: " + blockSize);
                if (version_4 !== 0 && version_4 !== 2) throw new Error("Invalid inner glow version: " + version_4);
                var size = psdReader_1.readFixedPoint32(reader);
                psdReader_1.readFixedPoint32(reader); // intensity
                var color = psdReader_1.readColor(reader);
                var blendMode = readBlendMode(reader);
                var enabled = !!psdReader_1.readUint8(reader);
                var opacity = readFixedPoint8(reader);
                if (blockSize >= 43) {
                    psdReader_1.readUint8(reader); // inverted
                    psdReader_1.readColor(reader); // native color
                }
                effects.innerGlow = {
                    size: {
                        units: 'Pixels',
                        value: size
                    },
                    color: color,
                    blendMode: blendMode,
                    enabled: enabled,
                    opacity: opacity
                };
                break;
            case 'bevl':
                var blockSize = psdReader_1.readUint32(reader);
                var version_5 = psdReader_1.readUint32(reader);
                if (blockSize !== 58 && blockSize !== 78) throw new Error("Invalid bevel size: " + blockSize);
                if (version_5 !== 0 && version_5 !== 2) throw new Error("Invalid bevel version: " + version_5);
                var angle = psdReader_1.readFixedPoint32(reader);
                var strength = psdReader_1.readFixedPoint32(reader);
                var size = psdReader_1.readFixedPoint32(reader);
                var highlightBlendMode = readBlendMode(reader);
                var shadowBlendMode = readBlendMode(reader);
                var highlightColor = psdReader_1.readColor(reader);
                var shadowColor = psdReader_1.readColor(reader);
                var style = bevelStyles[psdReader_1.readUint8(reader)] || 'inner bevel';
                var highlightOpacity = readFixedPoint8(reader);
                var shadowOpacity = readFixedPoint8(reader);
                var enabled = !!psdReader_1.readUint8(reader);
                var useGlobalLight = !!psdReader_1.readUint8(reader);
                var direction = psdReader_1.readUint8(reader) ? 'down' : 'up';
                if (blockSize >= 78) {
                    psdReader_1.readColor(reader); // real highlight color
                    psdReader_1.readColor(reader); // real shadow color
                }
                effects.bevel = {
                    size: {
                        units: 'Pixels',
                        value: size
                    },
                    angle: angle,
                    strength: strength,
                    highlightBlendMode: highlightBlendMode,
                    shadowBlendMode: shadowBlendMode,
                    highlightColor: highlightColor,
                    shadowColor: shadowColor,
                    style: style,
                    highlightOpacity: highlightOpacity,
                    shadowOpacity: shadowOpacity,
                    enabled: enabled,
                    useGlobalLight: useGlobalLight,
                    direction: direction
                };
                break;
            case 'sofi':
                var size = psdReader_1.readUint32(reader);
                var version_6 = psdReader_1.readUint32(reader);
                if (size !== 34) throw new Error("Invalid effects solid fill info size: " + size);
                if (version_6 !== 2) throw new Error("Invalid effects solid fill info version: " + version_6);
                var blendMode = readBlendMode(reader);
                var color = psdReader_1.readColor(reader);
                var opacity = readFixedPoint8(reader);
                var enabled = !!psdReader_1.readUint8(reader);
                psdReader_1.readColor(reader); // native color
                effects.solidFill = {
                    blendMode: blendMode,
                    color: color,
                    opacity: opacity,
                    enabled: enabled
                };
                break;
            default:
                throw new Error("Invalid effect type: '" + type + "'");
        }
    }
    return effects;
}
exports.readEffects = readEffects;
function writeShadowInfo(writer, shadow) {
    var _a;
    psdWriter_1.writeUint32(writer, 51);
    psdWriter_1.writeUint32(writer, 2);
    psdWriter_1.writeFixedPoint32(writer, shadow.size && shadow.size.value || 0);
    psdWriter_1.writeFixedPoint32(writer, 0); // intensity
    psdWriter_1.writeFixedPoint32(writer, shadow.angle || 0);
    psdWriter_1.writeFixedPoint32(writer, shadow.distance && shadow.distance.value || 0);
    psdWriter_1.writeColor(writer, shadow.color);
    writeBlendMode(writer, shadow.blendMode);
    psdWriter_1.writeUint8(writer, shadow.enabled ? 1 : 0);
    psdWriter_1.writeUint8(writer, shadow.useGlobalLight ? 1 : 0);
    writeFixedPoint8(writer, (_a = shadow.opacity) !== null && _a !== void 0 ? _a : 1);
    psdWriter_1.writeColor(writer, shadow.color); // native color
}
function writeEffects(writer, effects) {
    var _a, _b, _c;
    psdWriter_1.writeUint16(writer, 0);
    var count = 1;
    if (effects.dropShadow) count++;
    if (effects.innerShadow) count++;
    if (effects.outerGlow) count++;
    if (effects.innerGlow) count++;
    if (effects.bevel) count++;
    if (effects.solidFill) count++;
    psdWriter_1.writeUint16(writer, count);
    psdWriter_1.writeSignature(writer, '8BIM');
    psdWriter_1.writeSignature(writer, 'cmnS');
    psdWriter_1.writeUint32(writer, 7); // size
    psdWriter_1.writeUint32(writer, 0); // version
    psdWriter_1.writeUint8(writer, 1); // visible
    psdWriter_1.writeZeros(writer, 2);
    if (effects.dropShadow) {
        psdWriter_1.writeSignature(writer, '8BIM');
        psdWriter_1.writeSignature(writer, 'dsdw');
        writeShadowInfo(writer, effects.dropShadow);
    }
    if (effects.innerShadow) {
        psdWriter_1.writeSignature(writer, '8BIM');
        psdWriter_1.writeSignature(writer, 'isdw');
        writeShadowInfo(writer, effects.innerShadow);
    }
    if (effects.outerGlow) {
        psdWriter_1.writeSignature(writer, '8BIM');
        psdWriter_1.writeSignature(writer, 'oglw');
        psdWriter_1.writeUint32(writer, 42);
        psdWriter_1.writeUint32(writer, 2);
        psdWriter_1.writeFixedPoint32(writer, ((_a = effects.outerGlow.size) === null || _a === void 0 ? void 0 : _a.value) || 0);
        psdWriter_1.writeFixedPoint32(writer, 0); // intensity
        psdWriter_1.writeColor(writer, effects.outerGlow.color);
        writeBlendMode(writer, effects.outerGlow.blendMode);
        psdWriter_1.writeUint8(writer, effects.outerGlow.enabled ? 1 : 0);
        writeFixedPoint8(writer, effects.outerGlow.opacity || 0);
        psdWriter_1.writeColor(writer, effects.outerGlow.color);
    }
    if (effects.innerGlow) {
        psdWriter_1.writeSignature(writer, '8BIM');
        psdWriter_1.writeSignature(writer, 'iglw');
        psdWriter_1.writeUint32(writer, 43);
        psdWriter_1.writeUint32(writer, 2);
        psdWriter_1.writeFixedPoint32(writer, ((_b = effects.innerGlow.size) === null || _b === void 0 ? void 0 : _b.value) || 0);
        psdWriter_1.writeFixedPoint32(writer, 0); // intensity
        psdWriter_1.writeColor(writer, effects.innerGlow.color);
        writeBlendMode(writer, effects.innerGlow.blendMode);
        psdWriter_1.writeUint8(writer, effects.innerGlow.enabled ? 1 : 0);
        writeFixedPoint8(writer, effects.innerGlow.opacity || 0);
        psdWriter_1.writeUint8(writer, 0); // inverted
        psdWriter_1.writeColor(writer, effects.innerGlow.color);
    }
    if (effects.bevel) {
        psdWriter_1.writeSignature(writer, '8BIM');
        psdWriter_1.writeSignature(writer, 'bevl');
        psdWriter_1.writeUint32(writer, 78);
        psdWriter_1.writeUint32(writer, 2);
        psdWriter_1.writeFixedPoint32(writer, effects.bevel.angle || 0);
        psdWriter_1.writeFixedPoint32(writer, effects.bevel.strength || 0);
        psdWriter_1.writeFixedPoint32(writer, ((_c = effects.bevel.size) === null || _c === void 0 ? void 0 : _c.value) || 0);
        writeBlendMode(writer, effects.bevel.highlightBlendMode);
        writeBlendMode(writer, effects.bevel.shadowBlendMode);
        psdWriter_1.writeColor(writer, effects.bevel.highlightColor);
        psdWriter_1.writeColor(writer, effects.bevel.shadowColor);
        var style = bevelStyles.indexOf(effects.bevel.style);
        psdWriter_1.writeUint8(writer, style <= 0 ? 1 : style);
        writeFixedPoint8(writer, effects.bevel.highlightOpacity || 0);
        writeFixedPoint8(writer, effects.bevel.shadowOpacity || 0);
        psdWriter_1.writeUint8(writer, effects.bevel.enabled ? 1 : 0);
        psdWriter_1.writeUint8(writer, effects.bevel.useGlobalLight ? 1 : 0);
        psdWriter_1.writeUint8(writer, effects.bevel.direction === 'down' ? 1 : 0);
        psdWriter_1.writeColor(writer, effects.bevel.highlightColor);
        psdWriter_1.writeColor(writer, effects.bevel.shadowColor);
    }
    if (effects.solidFill) {
        psdWriter_1.writeSignature(writer, '8BIM');
        psdWriter_1.writeSignature(writer, 'sofi');
        psdWriter_1.writeUint32(writer, 34);
        psdWriter_1.writeUint32(writer, 2);
        writeBlendMode(writer, effects.solidFill.blendMode);
        psdWriter_1.writeColor(writer, effects.solidFill.color);
        writeFixedPoint8(writer, effects.solidFill.opacity || 0);
        psdWriter_1.writeUint8(writer, effects.solidFill.enabled ? 1 : 0);
        psdWriter_1.writeColor(writer, effects.solidFill.color);
    }
}
exports.writeEffects = writeEffects;

},{"./helpers":"g9u8n","./psdReader":"95tw3","./psdWriter":"cC52e"}],"95tw3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readPattern = exports.readColor = exports.readSection = exports.readDataRLE = exports.readPsd = exports.checkSignature = exports.skipBytes = exports.readAsciiString = exports.readUnicodeStringWithLength = exports.readUnicodeString = exports.readPascalString = exports.readSignature = exports.readBytes = exports.readFixedPointPath32 = exports.readFixedPoint32 = exports.readFloat64 = exports.readFloat32 = exports.readUint32 = exports.readInt32LE = exports.readInt32 = exports.readUint16 = exports.readInt16 = exports.peekUint8 = exports.readUint8 = exports.createReader = exports.supportedColorModes = void 0;
var helpers_1 = require("./helpers");
var additionalInfo_1 = require("./additionalInfo");
var imageResources_1 = require("./imageResources");
exports.supportedColorModes = [
    0 /* Bitmap */ ,
    1 /* Grayscale */ ,
    3 /* RGB */ 
];
var colorModes = [
    'bitmap',
    'grayscale',
    'indexed',
    'RGB',
    'CMYK',
    'multichannel',
    'duotone',
    'lab'
];
var RAW_IMAGE_DATA = false;
function setupGrayscale(data) {
    var size = data.width * data.height * 4;
    for(var i = 0; i < size; i += 4){
        data.data[i + 1] = data.data[i];
        data.data[i + 2] = data.data[i];
    }
}
function createReader(buffer, offset, length) {
    var view = new DataView(buffer, offset, length);
    return {
        view: view,
        offset: 0
    };
}
exports.createReader = createReader;
function readUint8(reader) {
    reader.offset += 1;
    return reader.view.getUint8(reader.offset - 1);
}
exports.readUint8 = readUint8;
function peekUint8(reader) {
    return reader.view.getUint8(reader.offset);
}
exports.peekUint8 = peekUint8;
function readInt16(reader) {
    reader.offset += 2;
    return reader.view.getInt16(reader.offset - 2, false);
}
exports.readInt16 = readInt16;
function readUint16(reader) {
    reader.offset += 2;
    return reader.view.getUint16(reader.offset - 2, false);
}
exports.readUint16 = readUint16;
function readInt32(reader) {
    reader.offset += 4;
    return reader.view.getInt32(reader.offset - 4, false);
}
exports.readInt32 = readInt32;
function readInt32LE(reader) {
    reader.offset += 4;
    return reader.view.getInt32(reader.offset - 4, true);
}
exports.readInt32LE = readInt32LE;
function readUint32(reader) {
    reader.offset += 4;
    return reader.view.getUint32(reader.offset - 4, false);
}
exports.readUint32 = readUint32;
function readFloat32(reader) {
    reader.offset += 4;
    return reader.view.getFloat32(reader.offset - 4, false);
}
exports.readFloat32 = readFloat32;
function readFloat64(reader) {
    reader.offset += 8;
    return reader.view.getFloat64(reader.offset - 8, false);
}
exports.readFloat64 = readFloat64;
// 32-bit fixed-point number 16.16
function readFixedPoint32(reader) {
    return readInt32(reader) / 65536;
}
exports.readFixedPoint32 = readFixedPoint32;
// 32-bit fixed-point number 8.24
function readFixedPointPath32(reader) {
    return readInt32(reader) / 16777216;
}
exports.readFixedPointPath32 = readFixedPointPath32;
function readBytes(reader, length) {
    reader.offset += length;
    return new Uint8Array(reader.view.buffer, reader.view.byteOffset + reader.offset - length, length);
}
exports.readBytes = readBytes;
function readSignature(reader) {
    return readShortString(reader, 4);
}
exports.readSignature = readSignature;
function readPascalString(reader, padTo) {
    var length = readUint8(reader);
    var text = readShortString(reader, length);
    while(++length % padTo)skipBytes(reader, 1);
    return text;
}
exports.readPascalString = readPascalString;
function readUnicodeString(reader) {
    var length = readUint32(reader);
    return readUnicodeStringWithLength(reader, length);
}
exports.readUnicodeString = readUnicodeString;
function readUnicodeStringWithLength(reader, length) {
    var text = '';
    while(length--){
        var value = readUint16(reader);
        if (value || length > 0) text += String.fromCharCode(value);
    }
    return text;
}
exports.readUnicodeStringWithLength = readUnicodeStringWithLength;
function readAsciiString(reader, length) {
    var text = '';
    while(length--)text += String.fromCharCode(readUint8(reader));
    return text;
}
exports.readAsciiString = readAsciiString;
function skipBytes(reader, count) {
    reader.offset += count;
}
exports.skipBytes = skipBytes;
function checkSignature(reader, a, b) {
    var offset = reader.offset;
    var signature = readSignature(reader);
    if (signature !== a && signature !== b) throw new Error("Invalid signature: '" + signature + "' at 0x" + offset.toString(16));
}
exports.checkSignature = checkSignature;
function readShortString(reader, length) {
    var buffer = readBytes(reader, length);
    return String.fromCharCode.apply(String, buffer);
}
function readPsd(reader, options) {
    var _a;
    if (options === void 0) options = {
    };
    // header
    checkSignature(reader, '8BPS');
    var version = readUint16(reader);
    if (version !== 1) throw new Error("Invalid PSD file version: " + version);
    skipBytes(reader, 6);
    var channels = readUint16(reader);
    var height = readUint32(reader);
    var width = readUint32(reader);
    var bitsPerChannel = readUint16(reader);
    var colorMode = readUint16(reader);
    if (exports.supportedColorModes.indexOf(colorMode) === -1) throw new Error("Color mode not supported: " + ((_a = colorModes[colorMode]) !== null && _a !== void 0 ? _a : colorMode));
    var psd = {
        width: width,
        height: height,
        channels: channels,
        bitsPerChannel: bitsPerChannel,
        colorMode: colorMode
    };
    // color mode data
    readSection(reader, 1, function(left) {
        if (options.throwForMissingFeatures) throw new Error('Color mode data not supported');
        skipBytes(reader, left());
    });
    // image resources
    readSection(reader, 1, function(left1) {
        var _loop_1 = function() {
            checkSignature(reader, '8BIM');
            var id = readUint16(reader);
            readPascalString(reader, 2); // name
            readSection(reader, 2, function(left) {
                var handler = imageResources_1.resourceHandlersMap[id];
                var skip = id === 1036 && !!options.skipThumbnail;
                if (!psd.imageResources) psd.imageResources = {
                };
                if (handler && !skip) try {
                    handler.read(reader, psd.imageResources, left, options);
                } catch (e) {
                    if (options.throwForMissingFeatures) throw e;
                    skipBytes(reader, left());
                }
                else // options.logMissingFeatures && console.log(`Unhandled image resource: ${id}`);
                skipBytes(reader, left());
            });
        };
        while(left1())_loop_1();
    });
    // layer and mask info
    var globalAlpha = false;
    readSection(reader, 1, function(left) {
        globalAlpha = readLayerInfo(reader, psd, options);
        // SAI does not include this section
        if (left() > 0) {
            var globalLayerMaskInfo = readGlobalLayerMaskInfo(reader);
            if (globalLayerMaskInfo) psd.globalLayerMaskInfo = globalLayerMaskInfo;
        } else // revert back to end of section if exceeded section limits
        // options.logMissingFeatures && console.log('reverting to end of section');
        skipBytes(reader, left());
        while(left() > 0){
            // sometimes there are empty bytes here
            while(left() && peekUint8(reader) === 0)// options.logMissingFeatures && console.log('skipping 0 byte');
            skipBytes(reader, 1);
            if (left() >= 12) readAdditionalLayerInfo(reader, psd, psd, options);
            else // options.logMissingFeatures && console.log('skipping leftover bytes', left());
            skipBytes(reader, left());
        }
    });
    var hasChildren = psd.children && psd.children.length;
    var skipComposite = options.skipCompositeImageData && (options.skipLayerImageData || hasChildren);
    if (!skipComposite) readImageData(reader, psd, globalAlpha, options);
    return psd;
}
exports.readPsd = readPsd;
function readLayerInfo(reader, psd, options) {
    var globalAlpha = false;
    readSection(reader, 2, function(left) {
        var layerCount = readInt16(reader);
        if (layerCount < 0) {
            globalAlpha = true;
            layerCount = -layerCount;
        }
        var layers = [];
        var layerChannels = [];
        for(var i = 0; i < layerCount; i++){
            var _a = readLayerRecord(reader, psd, options), layer = _a.layer, channels = _a.channels;
            layers.push(layer);
            layerChannels.push(channels);
        }
        if (!options.skipLayerImageData) for(var i = 0; i < layerCount; i++)readLayerChannelImageData(reader, psd, layers[i], layerChannels[i], options);
        skipBytes(reader, left());
        if (!psd.children) psd.children = [];
        var stack = [
            psd
        ];
        for(var i = layers.length - 1; i >= 0; i--){
            var l = layers[i];
            var type = l.sectionDivider ? l.sectionDivider.type : 0 /* Other */ ;
            if (type === 1 /* OpenFolder */  || type === 2 /* ClosedFolder */ ) {
                l.opened = type === 1 /* OpenFolder */ ;
                l.children = [];
                stack[stack.length - 1].children.unshift(l);
                stack.push(l);
            } else if (type === 3 /* BoundingSectionDivider */ ) stack.pop();
            else stack[stack.length - 1].children.unshift(l);
        }
    });
    return globalAlpha;
}
function readLayerRecord(reader, psd, options) {
    var layer = {
    };
    layer.top = readInt32(reader);
    layer.left = readInt32(reader);
    layer.bottom = readInt32(reader);
    layer.right = readInt32(reader);
    var channelCount = readUint16(reader);
    var channels = [];
    for(var i = 0; i < channelCount; i++){
        var channelID = readInt16(reader);
        var channelLength = readInt32(reader);
        channels.push({
            id: channelID,
            length: channelLength
        });
    }
    checkSignature(reader, '8BIM');
    var blendMode = readSignature(reader);
    if (!helpers_1.toBlendMode[blendMode]) throw new Error("Invalid blend mode: '" + blendMode + "'");
    layer.blendMode = helpers_1.toBlendMode[blendMode];
    layer.opacity = readUint8(reader) / 255;
    layer.clipping = readUint8(reader) === 1;
    var flags = readUint8(reader);
    layer.transparencyProtected = (flags & 1) !== 0;
    layer.hidden = (flags & 2) !== 0;
    // 0x04 - obsolete
    // 0x08 - 1 for Photoshop 5.0 and later, tells if bit 4 has useful information
    // 0x10 - pixel data irrelevant to appearance of document
    skipBytes(reader, 1);
    readSection(reader, 1, function(left) {
        var mask = readLayerMaskData(reader, options);
        if (mask) layer.mask = mask;
        /*const blendingRanges =*/ readLayerBlendingRanges(reader);
        layer.name = readPascalString(reader, 4);
        while(left())readAdditionalLayerInfo(reader, layer, psd, options);
    });
    return {
        layer: layer,
        channels: channels
    };
}
function readLayerMaskData(reader, options) {
    return readSection(reader, 1, function(left) {
        if (!left()) return undefined;
        var mask = {
        };
        mask.top = readInt32(reader);
        mask.left = readInt32(reader);
        mask.bottom = readInt32(reader);
        mask.right = readInt32(reader);
        mask.defaultColor = readUint8(reader);
        var flags = readUint8(reader);
        mask.positionRelativeToLayer = (flags & 1 /* PositionRelativeToLayer */ ) !== 0;
        mask.disabled = (flags & 2 /* LayerMaskDisabled */ ) !== 0;
        mask.fromVectorData = (flags & 8 /* LayerMaskFromRenderingOtherData */ ) !== 0;
        if (flags & 16 /* MaskHasParametersAppliedToIt */ ) {
            var params = readUint8(reader);
            if (params & 1 /* UserMaskDensity */ ) mask.userMaskDensity = readUint8(reader) / 255;
            if (params & 2 /* UserMaskFeather */ ) mask.userMaskFeather = readFloat64(reader);
            if (params & 4 /* VectorMaskDensity */ ) mask.vectorMaskDensity = readUint8(reader) / 255;
            if (params & 8 /* VectorMaskFeather */ ) mask.vectorMaskFeather = readFloat64(reader);
        }
        if (left() > 2) {
            options.logMissingFeatures && console.log('Unhandled extra mask params');
            // TODO: handle these values
            /*const realFlags =*/ readUint8(reader);
            /*const realUserMaskBackground =*/ readUint8(reader);
            /*const top2 =*/ readInt32(reader);
            /*const left2 =*/ readInt32(reader);
            /*const bottom2 =*/ readInt32(reader);
            /*const right2 =*/ readInt32(reader);
        }
        skipBytes(reader, left());
        return mask;
    });
}
function readLayerBlendingRanges(reader) {
    return readSection(reader, 1, function(left) {
        var compositeGrayBlendSource = readUint32(reader);
        var compositeGraphBlendDestinationRange = readUint32(reader);
        var ranges = [];
        while(left()){
            var sourceRange = readUint32(reader);
            var destRange = readUint32(reader);
            ranges.push({
                sourceRange: sourceRange,
                destRange: destRange
            });
        }
        return {
            compositeGrayBlendSource: compositeGrayBlendSource,
            compositeGraphBlendDestinationRange: compositeGraphBlendDestinationRange,
            ranges: ranges
        };
    });
}
function readLayerChannelImageData(reader, psd, layer, channels, options) {
    var layerWidth = (layer.right || 0) - (layer.left || 0);
    var layerHeight = (layer.bottom || 0) - (layer.top || 0);
    var imageData;
    if (layerWidth && layerHeight) {
        imageData = helpers_1.createImageData(layerWidth, layerHeight);
        helpers_1.resetImageData(imageData);
    }
    if (RAW_IMAGE_DATA) layer.imageDataRaw = [];
    for(var _i = 0, channels_1 = channels; _i < channels_1.length; _i++){
        var channel = channels_1[_i];
        var compression = readUint16(reader);
        if (channel.id === -2 /* UserMask */ ) {
            var mask = layer.mask;
            if (!mask) throw new Error("Missing layer mask data");
            var maskWidth = (mask.right || 0) - (mask.left || 0);
            var maskHeight = (mask.bottom || 0) - (mask.top || 0);
            if (maskWidth && maskHeight) {
                var maskData = helpers_1.createImageData(maskWidth, maskHeight);
                helpers_1.resetImageData(maskData);
                var start = reader.offset;
                readData(reader, maskData, compression, maskWidth, maskHeight, 0);
                if (RAW_IMAGE_DATA) layer.maskDataRaw = new Uint8Array(reader.view.buffer, reader.view.byteOffset + start, reader.offset - start);
                setupGrayscale(maskData);
                if (options.useImageData) mask.imageData = maskData;
                else {
                    mask.canvas = helpers_1.createCanvas(maskWidth, maskHeight);
                    mask.canvas.getContext('2d').putImageData(maskData, 0, 0);
                }
            }
        } else {
            var offset = helpers_1.offsetForChannel(channel.id);
            var targetData = imageData;
            if (offset < 0) {
                targetData = undefined;
                if (options.throwForMissingFeatures) throw new Error("Channel not supported: " + channel.id);
            }
            var start = reader.offset;
            readData(reader, targetData, compression, layerWidth, layerHeight, offset);
            if (RAW_IMAGE_DATA) layer.imageDataRaw[channel.id] = new Uint8Array(reader.view.buffer, reader.view.byteOffset + start, reader.offset - start);
            if (targetData && psd.colorMode === 1 /* Grayscale */ ) setupGrayscale(targetData);
        }
    }
    if (imageData) {
        if (options.useImageData) layer.imageData = imageData;
        else {
            layer.canvas = helpers_1.createCanvas(layerWidth, layerHeight);
            layer.canvas.getContext('2d').putImageData(imageData, 0, 0);
        }
    }
}
function readData(reader, data, compression, width, height, offset) {
    if (compression === 0 /* RawData */ ) readDataRaw(reader, data, offset, width, height);
    else if (compression === 1 /* RleCompressed */ ) readDataRLE(reader, data, width, height, 4, [
        offset
    ]);
    else throw new Error("Compression type not supported: " + compression);
}
function readGlobalLayerMaskInfo(reader) {
    return readSection(reader, 1, function(left) {
        if (!left()) return undefined;
        var overlayColorSpace = readUint16(reader);
        var colorSpace1 = readUint16(reader);
        var colorSpace2 = readUint16(reader);
        var colorSpace3 = readUint16(reader);
        var colorSpace4 = readUint16(reader);
        var opacity = readUint16(reader) / 255;
        var kind = readUint8(reader);
        skipBytes(reader, left()); // 3 bytes of padding ?
        return {
            overlayColorSpace: overlayColorSpace,
            colorSpace1: colorSpace1,
            colorSpace2: colorSpace2,
            colorSpace3: colorSpace3,
            colorSpace4: colorSpace4,
            opacity: opacity,
            kind: kind
        };
    });
}
function readAdditionalLayerInfo(reader, target, psd, options) {
    checkSignature(reader, '8BIM', '8B64');
    var key = readSignature(reader);
    readSection(reader, 2, function(left) {
        var handler = additionalInfo_1.infoHandlersMap[key];
        if (handler) try {
            handler.read(reader, target, left, psd, options);
        } catch (e) {
            if (options.throwForMissingFeatures) throw e;
        }
        else {
            options.logMissingFeatures && console.log("Unhandled additional info: " + key);
            skipBytes(reader, left());
        }
        if (left()) {
            options.logMissingFeatures && console.log("Unread " + left() + " bytes left for tag: " + key);
            skipBytes(reader, left());
        }
    }, false);
}
function readImageData(reader, psd, globalAlpha, options) {
    var compression = readUint16(reader);
    if (exports.supportedColorModes.indexOf(psd.colorMode) === -1) throw new Error("Color mode not supported: " + psd.colorMode);
    if (compression !== 0 /* RawData */  && compression !== 1 /* RleCompressed */ ) throw new Error("Compression type not supported: " + compression);
    var imageData = helpers_1.createImageData(psd.width, psd.height);
    helpers_1.resetImageData(imageData);
    if (psd.colorMode === 0 /* Bitmap */ ) {
        var bytes = void 0;
        if (compression === 0 /* RawData */ ) bytes = readBytes(reader, Math.ceil(psd.width / 8) * psd.height);
        else if (compression === 1 /* RleCompressed */ ) {
            bytes = new Uint8Array(psd.width * psd.height);
            readDataRLE(reader, {
                data: bytes,
                width: psd.width,
                height: psd.height
            }, psd.width, psd.height, 1, [
                0
            ]);
        } else throw new Error("Bitmap compression not supported: " + compression);
        helpers_1.decodeBitmap(bytes, imageData.data, psd.width, psd.height);
    } else {
        var channels = psd.colorMode === 1 /* Grayscale */  ? [
            0
        ] : [
            0,
            1,
            2
        ];
        if (psd.channels && psd.channels > 3) for(var i = 3; i < psd.channels; i++)// TODO: store these channels in additional image data
        channels.push(i);
        else if (globalAlpha) channels.push(3);
        if (compression === 0 /* RawData */ ) for(var i = 0; i < channels.length; i++)readDataRaw(reader, imageData, channels[i], psd.width, psd.height);
        else if (compression === 1 /* RleCompressed */ ) {
            var start = reader.offset;
            readDataRLE(reader, imageData, psd.width, psd.height, 4, channels);
            if (RAW_IMAGE_DATA) psd.imageDataRaw = new Uint8Array(reader.view.buffer, reader.view.byteOffset + start, reader.offset - start);
        }
        if (psd.colorMode === 1 /* Grayscale */ ) setupGrayscale(imageData);
    }
    if (options.useImageData) psd.imageData = imageData;
    else {
        psd.canvas = helpers_1.createCanvas(psd.width, psd.height);
        psd.canvas.getContext('2d').putImageData(imageData, 0, 0);
    }
}
function readDataRaw(reader, pixelData, offset, width, height) {
    var size = width * height;
    var buffer = readBytes(reader, size);
    if (pixelData && offset < 4) {
        var data = pixelData.data;
        for(var i = 0, p = offset | 0; i < size; i++, p = p + 4 | 0)data[p] = buffer[i];
    }
}
function readDataRLE(reader, pixelData, _width, height, step, offsets) {
    var lengths = new Uint16Array(offsets.length * height);
    var data = pixelData && pixelData.data;
    for(var o = 0, li = 0; o < offsets.length; o++)for(var y = 0; y < height; y++, li++)lengths[li] = readUint16(reader);
    for(var c = 0, li = 0; c < offsets.length; c++){
        var offset = offsets[c] | 0;
        var extra = c > 3 || offset > 3;
        if (!data || extra) for(var y = 0; y < height; y++, li++)skipBytes(reader, lengths[li]);
        else for(var y = 0, p = offset | 0; y < height; y++, li++){
            var length_1 = lengths[li];
            var buffer = readBytes(reader, length_1);
            for(var i = 0; i < length_1; i++){
                var header = buffer[i];
                if (header > 128) {
                    var value = buffer[++i];
                    header = 256 - header | 0;
                    for(var j = 0; j <= header; j = j + 1 | 0){
                        data[p] = value;
                        p = p + step | 0;
                    }
                } else if (header < 128) for(var j = 0; j <= header; j = j + 1 | 0){
                    data[p] = buffer[++i];
                    p = p + step | 0;
                }
                if (i >= length_1) throw new Error("Invalid RLE data: exceeded buffer size " + i + "/" + length_1);
            }
        }
    }
}
exports.readDataRLE = readDataRLE;
function readSection(reader, round, func, skipEmpty) {
    if (skipEmpty === void 0) skipEmpty = true;
    var length = readInt32(reader);
    if (length <= 0 && skipEmpty) return undefined;
    var end = reader.offset + length;
    var result = func(function() {
        return end - reader.offset;
    });
    if (reader.offset > end) throw new Error('Exceeded section limits');
    if (reader.offset !== end) throw new Error("Unread section data: " + (end - reader.offset) + " bytes at 0x" + reader.offset.toString(16));
    while(end % round)end++;
    reader.offset = end;
    return result;
}
exports.readSection = readSection;
function readColor(reader) {
    var colorSpace = readUint16(reader);
    switch(colorSpace){
        case 0 /* RGB */ :
            var r = readUint16(reader) / 257;
            var g = readUint16(reader) / 257;
            var b = readUint16(reader) / 257;
            skipBytes(reader, 2);
            return {
                r: r,
                g: g,
                b: b
            };
        case 7 /* Lab */ :
            var l = readInt16(reader) / 100;
            var a = readInt16(reader) / 100;
            var b = readInt16(reader) / 100;
            skipBytes(reader, 2);
            return {
                l: l,
                a: a,
                b: b
            };
        case 2 /* CMYK */ :
            var c = readInt16(reader);
            var m = readInt16(reader);
            var y = readInt16(reader);
            var k = readInt16(reader);
            return {
                c: c,
                m: m,
                y: y,
                k: k
            };
        case 8 /* Grayscale */ :
            var k = readInt16(reader);
            skipBytes(reader, 6);
            return {
                k: k
            };
        case 1 /* HSB */ :
            var h = readInt16(reader);
            var s = readInt16(reader);
            var b = readInt16(reader);
            skipBytes(reader, 2);
            return {
                h: h,
                s: s,
                b: b
            };
        default:
            throw new Error('Invalid color space');
    }
}
exports.readColor = readColor;
function readPattern(reader) {
    readUint32(reader); // length
    var version = readUint32(reader);
    if (version !== 1) throw new Error("Invalid pattern version: " + version);
    var colorMode = readUint32(reader);
    var x = readInt16(reader);
    var y = readInt16(reader);
    // we only support RGB and grayscale for now
    if (colorMode !== 3 /* RGB */  && colorMode !== 1 /* Grayscale */ ) throw new Error('Unsupported pattern color mode');
    var name = readUnicodeString(reader);
    var id = readPascalString(reader, 1);
    // TODO: index color table here (only for indexed color mode, not supported right now)
    // virtual memory array list
    var version2 = readUint32(reader);
    if (version2 !== 3) throw new Error("Invalid pattern VMAL version: " + version2);
    readUint32(reader); // length
    var top = readUint32(reader);
    var left = readUint32(reader);
    var bottom = readUint32(reader);
    var right = readUint32(reader);
    var channelsCount = readUint32(reader);
    var width = right - left;
    var height = bottom - top;
    var data = new Uint8Array(width * height * 4);
    for(var i = 3; i < data.byteLength; i += 4)data[i] = 255;
    for(var i = 0, ch = 0; i < channelsCount + 2; i++){
        var has = readUint32(reader);
        if (has) {
            var length_2 = readUint32(reader);
            var pixelDepth = readUint32(reader);
            var ctop = readUint32(reader);
            var cleft = readUint32(reader);
            var cbottom = readUint32(reader);
            var cright = readUint32(reader);
            var pixelDepth2 = readUint16(reader);
            var compressionMode = readUint8(reader); // 0 - raw, 1 - zip
            var dataLength = length_2 - 23;
            var cdata = readBytes(reader, dataLength);
            if (pixelDepth !== 8 || pixelDepth2 !== 8) throw new Error('16bit pixel depth not supported in palettes');
            if (compressionMode !== 0) throw new Error('Zip compression not supported in palettes');
            var w = cright - cleft;
            var h = cbottom - ctop;
            var ox = cleft - left;
            var oy = ctop - top;
            if (colorMode === 3 /* RGB */  && ch < 3) {
                for(var y_1 = 0; y_1 < h; y_1++)for(var x_1 = 0; x_1 < w; x_1++){
                    var src = x_1 + y_1 * w;
                    var dst = (ox + x_1 + (y_1 + oy) * width) * 4;
                    data[dst + ch] = cdata[src];
                }
            }
            if (colorMode === 1 /* Grayscale */  && ch < 1) {
                for(var y_2 = 0; y_2 < h; y_2++)for(var x_2 = 0; x_2 < w; x_2++){
                    var src = x_2 + y_2 * w;
                    var dst = (ox + x_2 + (y_2 + oy) * width) * 4;
                    var value = cdata[src];
                    data[dst + 0] = value;
                    data[dst + 1] = value;
                    data[dst + 2] = value;
                }
            }
            ch++;
        }
    }
    // TODO: use canvas instead of data ?
    return {
        id: id,
        name: name,
        x: x,
        y: y,
        bounds: {
            x: left,
            y: top,
            w: width,
            h: height
        },
        data: data
    };
}
exports.readPattern = readPattern;

},{"./helpers":"g9u8n","./additionalInfo":"15kta","./imageResources":"hqgD7"}],"hqgD7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resourceHandlersMap = exports.resourceHandlers = void 0;
var base64_js_1 = require("base64-js");
var psdReader_1 = require("./psdReader");
var psdWriter_1 = require("./psdWriter");
var helpers_1 = require("./helpers");
var utf8_1 = require("./utf8");
var descriptor_1 = require("./descriptor");
exports.resourceHandlers = [];
exports.resourceHandlersMap = {
};
function addHandler(key, has, read, write) {
    var handler = {
        key: key,
        has: has,
        read: read,
        write: write
    };
    exports.resourceHandlers.push(handler);
    exports.resourceHandlersMap[handler.key] = handler;
}
var MOCK_HANDLERS = false;
var LOG_MOCK_HANDLERS = false;
var RESOLUTION_UNITS = [
    undefined,
    'PPI',
    'PPCM'
];
var MEASUREMENT_UNITS = [
    undefined,
    'Inches',
    'Centimeters',
    'Points',
    'Picas',
    'Columns'
];
var hex = '0123456789abcdef';
function charToNibble(code) {
    return code <= 57 ? code - 48 : code - 87;
}
function byteAt(value, index) {
    return charToNibble(value.charCodeAt(index)) << 4 | charToNibble(value.charCodeAt(index + 1));
}
function readUtf8String(reader, length) {
    var buffer = psdReader_1.readBytes(reader, length);
    return utf8_1.decodeString(buffer);
}
function writeUtf8String(writer, value) {
    var buffer = utf8_1.encodeString(value);
    psdWriter_1.writeBytes(writer, buffer);
}
MOCK_HANDLERS && addHandler(1028, function(target) {
    return target._ir1028 !== undefined;
}, function(reader, target, left) {
    LOG_MOCK_HANDLERS && console.log('image resource 1028', left());
    target._ir1028 = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir1028);
});
addHandler(1061, function(target) {
    return target.captionDigest !== undefined;
}, function(reader, target) {
    var captionDigest = '';
    for(var i = 0; i < 16; i++){
        var byte = psdReader_1.readUint8(reader);
        captionDigest += hex[byte >> 4];
        captionDigest += hex[byte & 15];
    }
    target.captionDigest = captionDigest;
}, function(writer, target) {
    for(var i = 0; i < 16; i++)psdWriter_1.writeUint8(writer, byteAt(target.captionDigest, i * 2));
});
addHandler(1060, function(target) {
    return target.xmpMetadata !== undefined;
}, function(reader, target, left) {
    return target.xmpMetadata = readUtf8String(reader, left());
}, function(writer, target) {
    return writeUtf8String(writer, target.xmpMetadata);
});
var Inte = helpers_1.createEnum('Inte', 'perceptual', {
    'perceptual': 'Img ',
    'saturation': 'Grp ',
    'relative colorimetric': 'Clrm',
    'absolute colorimetric': 'AClr'
});
addHandler(1082, function(target) {
    return target.printInformation !== undefined;
}, function(reader, target) {
    var _a, _b;
    var desc = descriptor_1.readVersionAndDescriptor(reader);
    target.printInformation = {
        printerName: desc.printerName || '',
        renderingIntent: Inte.decode((_a = desc.Inte) !== null && _a !== void 0 ? _a : 'Inte.Img ')
    };
    var info = target.printInformation;
    if (desc.PstS !== undefined) info.printerManagesColors = desc.PstS;
    if (desc['Nm  '] !== undefined) info.printerProfile = desc['Nm  '];
    if (desc.MpBl !== undefined) info.blackPointCompensation = desc.MpBl;
    if (desc.printSixteenBit !== undefined) info.printSixteenBit = desc.printSixteenBit;
    if (desc.hardProof !== undefined) info.hardProof = desc.hardProof;
    if (desc.printProofSetup) {
        if ('Bltn' in desc.printProofSetup) info.proofSetup = {
            builtin: desc.printProofSetup.Bltn.split('.')[1]
        };
        else info.proofSetup = {
            profile: desc.printProofSetup.profile,
            renderingIntent: Inte.decode((_b = desc.printProofSetup.Inte) !== null && _b !== void 0 ? _b : 'Inte.Img '),
            blackPointCompensation: !!desc.printProofSetup.MpBl,
            paperWhite: !!desc.printProofSetup.paperWhite
        };
    }
}, function(writer, target) {
    var _a, _b;
    var info = target.printInformation;
    var desc = {
    };
    if (info.printerManagesColors) desc.PstS = true;
    else {
        if (info.hardProof !== undefined) desc.hardProof = !!info.hardProof;
        desc.ClrS = 'ClrS.RGBC'; // TODO: ???
        desc['Nm  '] = (_a = info.printerProfile) !== null && _a !== void 0 ? _a : 'CIE RGB';
    }
    desc.Inte = Inte.encode(info.renderingIntent);
    if (!info.printerManagesColors) desc.MpBl = !!info.blackPointCompensation;
    desc.printSixteenBit = !!info.printSixteenBit;
    desc.printerName = info.printerName || '';
    if (info.proofSetup && 'profile' in info.proofSetup) desc.printProofSetup = {
        profile: info.proofSetup.profile || '',
        Inte: Inte.encode(info.proofSetup.renderingIntent),
        MpBl: !!info.proofSetup.blackPointCompensation,
        paperWhite: !!info.proofSetup.paperWhite
    };
    else desc.printProofSetup = {
        Bltn: ((_b = info.proofSetup) === null || _b === void 0 ? void 0 : _b.builtin) ? "builtinProof." + info.proofSetup.builtin : 'builtinProof.proofCMYK'
    };
    descriptor_1.writeVersionAndDescriptor(writer, '', 'printOutput', desc);
});
MOCK_HANDLERS && addHandler(1083, function(target) {
    return target._ir1083 !== undefined;
}, function(reader, target, left) {
    LOG_MOCK_HANDLERS && console.log('image resource 1083', left());
    target._ir1083 = psdReader_1.readBytes(reader, left());
// TODO:
// const desc = readVersionAndDescriptor(reader);
// console.log('1083', require('util').inspect(desc, false, 99, true));
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir1083);
});
addHandler(1005, function(target) {
    return target.resolutionInfo !== undefined;
}, function(reader, target) {
    var horizontalResolution = psdReader_1.readFixedPoint32(reader);
    var horizontalResolutionUnit = psdReader_1.readUint16(reader);
    var widthUnit = psdReader_1.readUint16(reader);
    var verticalResolution = psdReader_1.readFixedPoint32(reader);
    var verticalResolutionUnit = psdReader_1.readUint16(reader);
    var heightUnit = psdReader_1.readUint16(reader);
    target.resolutionInfo = {
        horizontalResolution: horizontalResolution,
        horizontalResolutionUnit: RESOLUTION_UNITS[horizontalResolutionUnit] || 'PPI',
        widthUnit: MEASUREMENT_UNITS[widthUnit] || 'Inches',
        verticalResolution: verticalResolution,
        verticalResolutionUnit: RESOLUTION_UNITS[verticalResolutionUnit] || 'PPI',
        heightUnit: MEASUREMENT_UNITS[heightUnit] || 'Inches'
    };
}, function(writer, target) {
    var info = target.resolutionInfo;
    psdWriter_1.writeFixedPoint32(writer, info.horizontalResolution || 0);
    psdWriter_1.writeUint16(writer, Math.max(1, RESOLUTION_UNITS.indexOf(info.horizontalResolutionUnit)));
    psdWriter_1.writeUint16(writer, Math.max(1, MEASUREMENT_UNITS.indexOf(info.widthUnit)));
    psdWriter_1.writeFixedPoint32(writer, info.verticalResolution || 0);
    psdWriter_1.writeUint16(writer, Math.max(1, RESOLUTION_UNITS.indexOf(info.verticalResolutionUnit)));
    psdWriter_1.writeUint16(writer, Math.max(1, MEASUREMENT_UNITS.indexOf(info.heightUnit)));
});
var printScaleStyles = [
    'centered',
    'size to fit',
    'user defined'
];
addHandler(1062, function(target) {
    return target.printScale !== undefined;
}, function(reader, target) {
    target.printScale = {
        style: printScaleStyles[psdReader_1.readInt16(reader)],
        x: psdReader_1.readFloat32(reader),
        y: psdReader_1.readFloat32(reader),
        scale: psdReader_1.readFloat32(reader)
    };
}, function(writer, target) {
    var _a = target.printScale, style = _a.style, x = _a.x, y = _a.y, scale = _a.scale;
    psdWriter_1.writeInt16(writer, Math.max(0, printScaleStyles.indexOf(style)));
    psdWriter_1.writeFloat32(writer, x || 0);
    psdWriter_1.writeFloat32(writer, y || 0);
    psdWriter_1.writeFloat32(writer, scale || 0);
});
addHandler(1006, function(target) {
    return target.alphaChannelNames !== undefined;
}, function(reader, target, left) {
    target.alphaChannelNames = [];
    while(left()){
        var value = psdReader_1.readPascalString(reader, 1);
        target.alphaChannelNames.push(value);
    }
}, function(writer, target) {
    for(var _i = 0, _a = target.alphaChannelNames; _i < _a.length; _i++){
        var name_1 = _a[_i];
        psdWriter_1.writePascalString(writer, name_1, 1);
    }
});
addHandler(1045, function(target) {
    return target.alphaChannelNames !== undefined;
}, function(reader, target, left) {
    target.alphaChannelNames = [];
    while(left())target.alphaChannelNames.push(psdReader_1.readUnicodeString(reader));
}, function(writer, target) {
    for(var _i = 0, _a = target.alphaChannelNames; _i < _a.length; _i++){
        var name_2 = _a[_i];
        psdWriter_1.writeUnicodeStringWithPadding(writer, name_2);
    }
});
MOCK_HANDLERS && addHandler(1077, function(target) {
    return target._ir1077 !== undefined;
}, function(reader, target, left) {
    LOG_MOCK_HANDLERS && console.log('image resource 1077', left());
    target._ir1077 = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir1077);
});
addHandler(1053, function(target) {
    return target.alphaIdentifiers !== undefined;
}, function(reader, target, left) {
    target.alphaIdentifiers = [];
    while(left() >= 4)target.alphaIdentifiers.push(psdReader_1.readUint32(reader));
}, function(writer, target) {
    for(var _i = 0, _a = target.alphaIdentifiers; _i < _a.length; _i++){
        var id = _a[_i];
        psdWriter_1.writeUint32(writer, id);
    }
});
addHandler(1010, function(target) {
    return target.backgroundColor !== undefined;
}, function(reader, target) {
    return target.backgroundColor = psdReader_1.readColor(reader);
}, function(writer, target) {
    return psdWriter_1.writeColor(writer, target.backgroundColor);
});
addHandler(1037, function(target) {
    return target.globalAngle !== undefined;
}, function(reader, target) {
    return target.globalAngle = psdReader_1.readUint32(reader);
}, function(writer, target) {
    return psdWriter_1.writeUint32(writer, target.globalAngle);
});
addHandler(1049, function(target) {
    return target.globalAltitude !== undefined;
}, function(reader, target) {
    return target.globalAltitude = psdReader_1.readUint32(reader);
}, function(writer, target) {
    return psdWriter_1.writeUint32(writer, target.globalAltitude);
});
addHandler(1011, function(target) {
    return target.printFlags !== undefined;
}, function(reader, target) {
    target.printFlags = {
        labels: !!psdReader_1.readUint8(reader),
        cropMarks: !!psdReader_1.readUint8(reader),
        colorBars: !!psdReader_1.readUint8(reader),
        registrationMarks: !!psdReader_1.readUint8(reader),
        negative: !!psdReader_1.readUint8(reader),
        flip: !!psdReader_1.readUint8(reader),
        interpolate: !!psdReader_1.readUint8(reader),
        caption: !!psdReader_1.readUint8(reader),
        printFlags: !!psdReader_1.readUint8(reader)
    };
}, function(writer, target) {
    var flags = target.printFlags;
    psdWriter_1.writeUint8(writer, flags.labels ? 1 : 0);
    psdWriter_1.writeUint8(writer, flags.cropMarks ? 1 : 0);
    psdWriter_1.writeUint8(writer, flags.colorBars ? 1 : 0);
    psdWriter_1.writeUint8(writer, flags.registrationMarks ? 1 : 0);
    psdWriter_1.writeUint8(writer, flags.negative ? 1 : 0);
    psdWriter_1.writeUint8(writer, flags.flip ? 1 : 0);
    psdWriter_1.writeUint8(writer, flags.interpolate ? 1 : 0);
    psdWriter_1.writeUint8(writer, flags.caption ? 1 : 0);
    psdWriter_1.writeUint8(writer, flags.printFlags ? 1 : 0);
});
MOCK_HANDLERS && addHandler(10000, function(target) {
    return target._ir10000 !== undefined;
}, function(reader, target, left) {
    LOG_MOCK_HANDLERS && console.log('image resource 10000', left());
    target._ir10000 = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir10000);
});
MOCK_HANDLERS && addHandler(1013, function(target) {
    return target._ir1013 !== undefined;
}, function(reader, target, left) {
    LOG_MOCK_HANDLERS && console.log('image resource 1013', left());
    target._ir1013 = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir1013);
});
MOCK_HANDLERS && addHandler(1016, function(target) {
    return target._ir1016 !== undefined;
}, function(reader, target, left) {
    LOG_MOCK_HANDLERS && console.log('image resource 1016', left());
    target._ir1016 = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir1016);
});
addHandler(1024, function(target) {
    return target.layerState !== undefined;
}, function(reader, target) {
    return target.layerState = psdReader_1.readUint16(reader);
}, function(writer, target) {
    return psdWriter_1.writeUint16(writer, target.layerState);
});
addHandler(1026, function(target) {
    return target.layersGroup !== undefined;
}, function(reader, target, left) {
    target.layersGroup = [];
    while(left())target.layersGroup.push(psdReader_1.readUint16(reader));
}, function(writer, target) {
    for(var _i = 0, _a = target.layersGroup; _i < _a.length; _i++){
        var g = _a[_i];
        psdWriter_1.writeUint16(writer, g);
    }
});
addHandler(1072, function(target) {
    return target.layerGroupsEnabledId !== undefined;
}, function(reader, target, left) {
    target.layerGroupsEnabledId = [];
    while(left())target.layerGroupsEnabledId.push(psdReader_1.readUint8(reader));
}, function(writer, target) {
    for(var _i = 0, _a = target.layerGroupsEnabledId; _i < _a.length; _i++){
        var id = _a[_i];
        psdWriter_1.writeUint8(writer, id);
    }
});
addHandler(1069, function(target) {
    return target.layerSelectionIds !== undefined;
}, function(reader, target) {
    var count = psdReader_1.readUint16(reader);
    target.layerSelectionIds = [];
    while(count--)target.layerSelectionIds.push(psdReader_1.readUint32(reader));
}, function(writer, target) {
    psdWriter_1.writeUint16(writer, target.layerSelectionIds.length);
    for(var _i = 0, _a = target.layerSelectionIds; _i < _a.length; _i++){
        var id = _a[_i];
        psdWriter_1.writeUint32(writer, id);
    }
});
addHandler(1032, function(target) {
    return target.gridAndGuidesInformation !== undefined;
}, function(reader, target) {
    var version = psdReader_1.readUint32(reader);
    var horizontal = psdReader_1.readUint32(reader);
    var vertical = psdReader_1.readUint32(reader);
    var count = psdReader_1.readUint32(reader);
    if (version !== 1) throw new Error("Invalid 1032 resource version: " + version);
    target.gridAndGuidesInformation = {
        grid: {
            horizontal: horizontal,
            vertical: vertical
        },
        guides: []
    };
    for(var i = 0; i < count; i++)target.gridAndGuidesInformation.guides.push({
        location: psdReader_1.readUint32(reader) / 32,
        direction: psdReader_1.readUint8(reader) ? 'horizontal' : 'vertical'
    });
}, function(writer, target) {
    var info = target.gridAndGuidesInformation;
    var grid = info.grid || {
        horizontal: 576,
        vertical: 576
    };
    var guides = info.guides || [];
    psdWriter_1.writeUint32(writer, 1);
    psdWriter_1.writeUint32(writer, grid.horizontal);
    psdWriter_1.writeUint32(writer, grid.vertical);
    psdWriter_1.writeUint32(writer, guides.length);
    for(var _i = 0, guides_1 = guides; _i < guides_1.length; _i++){
        var g = guides_1[_i];
        psdWriter_1.writeUint32(writer, g.location * 32);
        psdWriter_1.writeUint8(writer, g.direction === 'horizontal' ? 1 : 0);
    }
});
addHandler(1054, function(target) {
    return target.urlsList !== undefined;
}, function(reader, target, _, options) {
    var count = psdReader_1.readUint32(reader);
    if (count) {
        if (!options.throwForMissingFeatures) return;
        throw new Error('Not implemented: URL List');
    }
    // TODO: read actual URL list
    target.urlsList = [];
}, function(writer, target) {
    psdWriter_1.writeUint32(writer, target.urlsList.length);
    // TODO: write actual URL list
    if (target.urlsList.length) throw new Error('Not implemented: URL List');
});
MOCK_HANDLERS && addHandler(1050, function(target) {
    return target._ir1050 !== undefined;
}, function(reader, target, left) {
    LOG_MOCK_HANDLERS && console.log('image resource 1050', left());
    target._ir1050 = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir1050);
});
addHandler(1064, function(target) {
    return target.pixelAspectRatio !== undefined;
}, function(reader, target) {
    if (psdReader_1.readUint32(reader) > 2) throw new Error('Invalid pixelAspectRatio version');
    target.pixelAspectRatio = {
        aspect: psdReader_1.readFloat64(reader)
    };
}, function(writer, target) {
    psdWriter_1.writeUint32(writer, 2); // version
    psdWriter_1.writeFloat64(writer, target.pixelAspectRatio.aspect);
});
addHandler(1041, function(target) {
    return target.iccUntaggedProfile !== undefined;
}, function(reader, target) {
    target.iccUntaggedProfile = !!psdReader_1.readUint8(reader);
}, function(writer, target) {
    psdWriter_1.writeUint8(writer, target.iccUntaggedProfile ? 1 : 0);
});
MOCK_HANDLERS && addHandler(1039, function(target) {
    return target._ir1039 !== undefined;
}, function(reader, target, left) {
    LOG_MOCK_HANDLERS && console.log('image resource 1039', left());
    target._ir1039 = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir1039);
});
addHandler(1044, function(target) {
    return target.idsSeedNumber !== undefined;
}, function(reader, target) {
    return target.idsSeedNumber = psdReader_1.readUint32(reader);
}, function(writer, target) {
    return psdWriter_1.writeUint32(writer, target.idsSeedNumber);
});
addHandler(1036, function(target) {
    return target.thumbnail !== undefined || target.thumbnailRaw !== undefined;
}, function(reader, target, left, options) {
    var format = psdReader_1.readUint32(reader); // 1 = kJpegRGB, 0 = kRawRGB
    var width = psdReader_1.readUint32(reader);
    var height = psdReader_1.readUint32(reader);
    psdReader_1.readUint32(reader); // widthBytes = (width * bits_per_pixel + 31) / 32 * 4.
    psdReader_1.readUint32(reader); // totalSize = widthBytes * height * planes
    psdReader_1.readUint32(reader); // sizeAfterCompression
    var bitsPerPixel = psdReader_1.readUint16(reader); // 24
    var planes = psdReader_1.readUint16(reader); // 1
    if (format !== 1 || bitsPerPixel !== 24 || planes !== 1) {
        options.logMissingFeatures && console.log("Invalid thumbnail data (format: " + format + ", bitsPerPixel: " + bitsPerPixel + ", planes: " + planes + ")");
        psdReader_1.skipBytes(reader, left());
        return;
    }
    var size = left();
    var data = psdReader_1.readBytes(reader, size);
    if (options.useRawThumbnail) target.thumbnailRaw = {
        width: width,
        height: height,
        data: data
    };
    else target.thumbnail = helpers_1.createCanvasFromData(data);
}, function(writer, target) {
    var width = 0;
    var height = 0;
    var data;
    if (target.thumbnailRaw) {
        width = target.thumbnailRaw.width;
        height = target.thumbnailRaw.height;
        data = target.thumbnailRaw.data;
    } else {
        width = target.thumbnail.width;
        height = target.thumbnail.height;
        data = base64_js_1.toByteArray(target.thumbnail.toDataURL('image/jpeg', 1).substr(23));
    }
    var bitsPerPixel = 24;
    var widthBytes = Math.floor((width * bitsPerPixel + 31) / 32) * 4;
    var planes = 1;
    var totalSize = widthBytes * height * planes;
    var sizeAfterCompression = data.length;
    psdWriter_1.writeUint32(writer, 1); // 1 = kJpegRGB
    psdWriter_1.writeUint32(writer, width);
    psdWriter_1.writeUint32(writer, height);
    psdWriter_1.writeUint32(writer, widthBytes);
    psdWriter_1.writeUint32(writer, totalSize);
    psdWriter_1.writeUint32(writer, sizeAfterCompression);
    psdWriter_1.writeUint16(writer, bitsPerPixel);
    psdWriter_1.writeUint16(writer, planes);
    psdWriter_1.writeBytes(writer, data);
});
addHandler(1057, function(target) {
    return target.versionInfo !== undefined;
}, function(reader, target, left) {
    var version = psdReader_1.readUint32(reader);
    if (version !== 1) throw new Error('Invalid versionInfo version');
    target.versionInfo = {
        hasRealMergedData: !!psdReader_1.readUint8(reader),
        writerName: psdReader_1.readUnicodeString(reader),
        readerName: psdReader_1.readUnicodeString(reader),
        fileVersion: psdReader_1.readUint32(reader)
    };
    psdReader_1.skipBytes(reader, left());
}, function(writer, target) {
    var versionInfo = target.versionInfo;
    psdWriter_1.writeUint32(writer, 1); // version
    psdWriter_1.writeUint8(writer, versionInfo.hasRealMergedData ? 1 : 0);
    psdWriter_1.writeUnicodeString(writer, versionInfo.writerName);
    psdWriter_1.writeUnicodeString(writer, versionInfo.readerName);
    psdWriter_1.writeUint32(writer, versionInfo.fileVersion);
});
MOCK_HANDLERS && addHandler(1058, function(target) {
    return target._ir1058 !== undefined;
}, function(reader, target, left) {
    LOG_MOCK_HANDLERS && console.log('image resource 1058', left());
    target._ir1058 = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir1058);
});
MOCK_HANDLERS && addHandler(1025, function(target) {
    return target._ir1025 !== undefined;
}, function(reader, target, left) {
    LOG_MOCK_HANDLERS && console.log('image resource 1025', left());
    target._ir1025 = psdReader_1.readBytes(reader, left());
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir1025);
});
var FrmD = helpers_1.createEnum('FrmD', '', {
    auto: 'Auto',
    none: 'None',
    dispose: 'Disp'
});
// TODO: Unfinished
MOCK_HANDLERS && addHandler(4000, function(target) {
    return target._ir4000 !== undefined;
}, function(reader, target, left1, _a) {
    var logMissingFeatures = _a.logMissingFeatures, logDevFeatures = _a.logDevFeatures;
    if (MOCK_HANDLERS) {
        LOG_MOCK_HANDLERS && console.log('image resource 4000', left1());
        target._ir4000 = psdReader_1.readBytes(reader, left1());
        return;
    }
    var key = psdReader_1.readSignature(reader);
    if (key === 'mani') {
        psdReader_1.checkSignature(reader, 'IRFR');
        psdReader_1.readSection(reader, 1, function(left2) {
            var _loop_1 = function() {
                psdReader_1.checkSignature(reader, '8BIM');
                var key_1 = psdReader_1.readSignature(reader);
                psdReader_1.readSection(reader, 1, function(left) {
                    if (key_1 === 'AnDs') {
                        var desc = descriptor_1.readVersionAndDescriptor(reader);
                        // console.log('AnDs', desc);
                        logDevFeatures && console.log('#4000 AnDs', desc);
                        // logDevFeatures && console.log('#4000 AnDs', require('util').inspect(desc, false, 99, true));
                        var result = {
                            // desc.AFSt ???
                            frames: desc.FrIn.map(function(x) {
                                return {
                                    id: x.FrID,
                                    delay: x.FrDl / 100,
                                    dispose: x.FrDs ? FrmD.decode(x.FrDs) : 'auto'
                                };
                            }),
                            animations: desc.FSts.map(function(x) {
                                return {
                                    id: x.FsID,
                                    frames: x.FsFr,
                                    repeats: x.LCnt
                                };
                            })
                        };
                        logDevFeatures && console.log('#4000 AnDs:result', result);
                    // logDevFeatures && console.log('#4000 AnDs:result', require('util').inspect(result, false, 99, true));
                    } else if (key_1 === 'Roll') {
                        var bytes = psdReader_1.readBytes(reader, left());
                        logDevFeatures && console.log('#4000 Roll', bytes);
                    } else logMissingFeatures && console.log('Unhandled subsection in #4000', key_1);
                });
            };
            while(left2())_loop_1();
        });
    } else if (key === 'mopt') {
        var bytes1 = psdReader_1.readBytes(reader, left1());
        logDevFeatures && console.log('#4000 mopt', bytes1);
    } else {
        logMissingFeatures && console.log('Unhandled key in #4000:', key);
        return;
    }
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir4000);
});
// TODO: Unfinished
MOCK_HANDLERS && addHandler(4001, function(target) {
    return target._ir4001 !== undefined;
}, function(reader, target, left, _a) {
    var logMissingFeatures = _a.logMissingFeatures, logDevFeatures = _a.logDevFeatures;
    if (MOCK_HANDLERS) {
        LOG_MOCK_HANDLERS && console.log('image resource 4001', left());
        target._ir4001 = psdReader_1.readBytes(reader, left());
        return;
    }
    var key = psdReader_1.readSignature(reader);
    if (key === 'mfri') {
        var version = psdReader_1.readUint32(reader);
        if (version !== 2) throw new Error('Invalid mfri version');
        var length_1 = psdReader_1.readUint32(reader);
        var bytes = psdReader_1.readBytes(reader, length_1);
        logDevFeatures && console.log('mfri', bytes);
    } else if (key === 'mset') {
        var desc = descriptor_1.readVersionAndDescriptor(reader);
        logDevFeatures && console.log('mset', desc);
    } else logMissingFeatures && console.log('Unhandled key in #4001', key);
}, function(writer, target) {
    psdWriter_1.writeBytes(writer, target._ir4001);
});

},{"base64-js":"h8vFx","./psdReader":"95tw3","./psdWriter":"cC52e","./helpers":"g9u8n","./utf8":"bPU7d","./descriptor":"9vWE6"}],"bPU7d":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeString = exports.encodeString = exports.encodeStringTo = exports.stringLengthInBytes = void 0;
function charLengthInBytes(code) {
    if ((code & 4294967168) === 0) return 1;
    else if ((code & 4294965248) === 0) return 2;
    else if ((code & 4294901760) === 0) return 3;
    else return 4;
}
function stringLengthInBytes(value) {
    var result = 0;
    for(var i = 0; i < value.length; i++){
        var code = value.charCodeAt(i);
        // high surrogate
        if (code >= 55296 && code <= 56319) {
            if (i + 1 < value.length) {
                var extra = value.charCodeAt(i + 1);
                // low surrogate
                if ((extra & 64512) === 56320) {
                    i++;
                    result += charLengthInBytes(((code & 1023) << 10) + (extra & 1023) + 65536);
                }
            }
        } else result += charLengthInBytes(code);
    }
    return result;
}
exports.stringLengthInBytes = stringLengthInBytes;
function writeCharacter(buffer, offset, code) {
    var length = charLengthInBytes(code);
    switch(length){
        case 1:
            buffer[offset] = code;
            break;
        case 2:
            buffer[offset] = code >> 6 & 31 | 192;
            buffer[offset + 1] = code & 63 | 128;
            break;
        case 3:
            buffer[offset] = code >> 12 & 15 | 224;
            buffer[offset + 1] = code >> 6 & 63 | 128;
            buffer[offset + 2] = code & 63 | 128;
            break;
        default:
            buffer[offset] = code >> 18 & 7 | 240;
            buffer[offset + 1] = code >> 12 & 63 | 128;
            buffer[offset + 2] = code >> 6 & 63 | 128;
            buffer[offset + 3] = code & 63 | 128;
            break;
    }
    return length;
}
function encodeStringTo(buffer, offset, value) {
    for(var i = 0; i < value.length; i++){
        var code = value.charCodeAt(i);
        // high surrogate
        if (code >= 55296 && code <= 56319) {
            if (i + 1 < value.length) {
                var extra = value.charCodeAt(i + 1);
                // low surrogate
                if ((extra & 64512) === 56320) {
                    i++;
                    var fullCode = ((code & 1023) << 10) + (extra & 1023) + 65536;
                    offset += writeCharacter(buffer, offset, fullCode);
                }
            }
        } else offset += writeCharacter(buffer, offset, code);
    }
    return offset;
}
exports.encodeStringTo = encodeStringTo;
function encodeString(value) {
    var buffer = new Uint8Array(stringLengthInBytes(value));
    encodeStringTo(buffer, 0, value);
    return buffer;
}
exports.encodeString = encodeString;
function continuationByte(buffer, index) {
    if (index >= buffer.length) throw Error('Invalid byte index');
    var continuationByte1 = buffer[index];
    if ((continuationByte1 & 192) === 128) return continuationByte1 & 63;
    else throw Error('Invalid continuation byte');
}
function decodeString(value) {
    var result = '';
    for(var i = 0; i < value.length;){
        var byte1 = value[i++];
        var code = void 0;
        if ((byte1 & 128) === 0) code = byte1;
        else if ((byte1 & 224) === 192) {
            var byte2 = continuationByte(value, i++);
            code = (byte1 & 31) << 6 | byte2;
            if (code < 128) throw Error('Invalid continuation byte');
        } else if ((byte1 & 240) === 224) {
            var byte2 = continuationByte(value, i++);
            var byte3 = continuationByte(value, i++);
            code = (byte1 & 15) << 12 | byte2 << 6 | byte3;
            if (code < 2048) throw Error('Invalid continuation byte');
            if (code >= 55296 && code <= 57343) throw Error("Lone surrogate U+" + code.toString(16).toUpperCase() + " is not a scalar value");
        } else if ((byte1 & 248) === 240) {
            var byte2 = continuationByte(value, i++);
            var byte3 = continuationByte(value, i++);
            var byte4 = continuationByte(value, i++);
            code = (byte1 & 15) << 18 | byte2 << 12 | byte3 << 6 | byte4;
            if (code < 65536 || code > 1114111) throw Error('Invalid continuation byte');
        } else throw Error('Invalid UTF-8 detected');
        if (code > 65535) {
            code -= 65536;
            result += String.fromCharCode(code >>> 10 & 1023 | 55296);
            code = 56320 | code & 1023;
        }
        result += String.fromCharCode(code);
    }
    return result;
}
exports.decodeString = decodeString;

},{}],"9vWE6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.strokeStyleLineAlignment = exports.strokeStyleLineJoinType = exports.strokeStyleLineCapType = exports.FrFl = exports.FStl = exports.ClrS = exports.GrdT = exports.IGSr = exports.BETE = exports.BESs = exports.bvlT = exports.BESl = exports.BlnM = exports.warpStyle = exports.Annt = exports.Ornt = exports.textGridding = exports.unitsValue = exports.unitsPercent = exports.unitsAngle = exports.parseUnitsToNumber = exports.parseUnitsOrNumber = exports.parseUnits = exports.parsePercentOrAngle = exports.parsePercent = exports.parseAngle = exports.writeVersionAndDescriptor = exports.readVersionAndDescriptor = exports.writeDescriptorStructure = exports.readDescriptorStructure = exports.readAsciiStringOrClassId = exports.setLogErrors = void 0;
var helpers_1 = require("./helpers");
var psdReader_1 = require("./psdReader");
var psdWriter_1 = require("./psdWriter");
function revMap(map) {
    var result = {
    };
    Object.keys(map).forEach(function(key) {
        return result[map[key]] = key;
    });
    return result;
}
var unitsMap = {
    '#Ang': 'Angle',
    '#Rsl': 'Density',
    '#Rlt': 'Distance',
    '#Nne': 'None',
    '#Prc': 'Percent',
    '#Pxl': 'Pixels',
    '#Mlm': 'Millimeters',
    '#Pnt': 'Points',
    'RrPi': 'Picas',
    'RrIn': 'Inches',
    'RrCm': 'Centimeters'
};
var unitsMapRev = revMap(unitsMap);
var logErrors = false;
function setLogErrors(value) {
    logErrors = value;
}
exports.setLogErrors = setLogErrors;
function makeType(name, classID) {
    return {
        name: name,
        classID: classID
    };
}
var fieldToExtType = {
    strokeStyleContent: makeType('', 'solidColorLayer'),
    // printProofSetup: makeType('校样设置', 'proofSetup'), // TESTING
    printProofSetup: makeType('Proof Setup', 'proofSetup'),
    patternFill: makeType('', 'patternFill'),
    Grad: makeType('Gradient', 'Grdn'),
    ebbl: makeType('', 'ebbl'),
    SoFi: makeType('', 'SoFi'),
    GrFl: makeType('', 'GrFl'),
    sdwC: makeType('', 'RGBC'),
    hglC: makeType('', 'RGBC'),
    'Clr ': makeType('', 'RGBC'),
    'tintColor': makeType('', 'RGBC'),
    Ofst: makeType('', 'Pnt '),
    ChFX: makeType('', 'ChFX'),
    MpgS: makeType('', 'ShpC'),
    DrSh: makeType('', 'DrSh'),
    IrSh: makeType('', 'IrSh'),
    OrGl: makeType('', 'OrGl'),
    IrGl: makeType('', 'IrGl'),
    TrnS: makeType('', 'ShpC'),
    Ptrn: makeType('', 'Ptrn'),
    FrFX: makeType('', 'FrFX'),
    phase: makeType('', 'Pnt '),
    frameStep: makeType('', 'null'),
    duration: makeType('', 'null'),
    bounds: makeType('', 'Rctn'),
    customEnvelopeWarp: makeType('', 'customEnvelopeWarp'),
    warp: makeType('', 'warp'),
    'Sz  ': makeType('', 'Pnt '),
    origin: makeType('', 'Pnt '),
    autoExpandOffset: makeType('', 'Pnt '),
    keyOriginShapeBBox: makeType('', 'unitRect'),
    Vrsn: makeType('', 'null'),
    psVersion: makeType('', 'null'),
    docDefaultNewArtboardBackgroundColor: makeType('', 'RGBC'),
    artboardRect: makeType('', 'classFloatRect'),
    keyOriginRRectRadii: makeType('', 'radii'),
    compInfo: makeType('', 'null'),
    generatorSettings: makeType('', 'null')
};
var fieldToArrayExtType = {
    'Crv ': makeType('', 'CrPt'),
    'Clrs': makeType('', 'Clrt'),
    'Trns': makeType('', 'TrnS'),
    'keyDescriptorList': makeType('', 'null')
};
var typeToField = {
    'TEXT': [
        'Txt ',
        'printerName',
        'Nm  ',
        'Idnt',
        'blackAndWhitePresetFileName',
        'LUT3DFileName',
        'presetFileName',
        'curvesPresetFileName',
        'mixerPresetFileName',
        'placed',
        'description',
        'reason',
        'artboardPresetName', 
    ],
    'tdta': [
        'EngineData',
        'LUT3DFileData'
    ],
    'long': [
        'TextIndex',
        'RndS',
        'Mdpn',
        'Smth',
        'Lctn',
        'strokeStyleVersion',
        'LaID',
        'Vrsn',
        'Cnt ',
        'Brgh',
        'Cntr',
        'means',
        'vibrance',
        'Strt',
        'bwPresetKind',
        'presetKind',
        'comp',
        'compID',
        'originalCompID',
        'curvesPresetKind',
        'mixerPresetKind',
        'uOrder',
        'vOrder',
        'PgNm',
        'totalPages',
        'Crop',
        'numerator',
        'denominator',
        'frameCount',
        'Annt',
        'keyOriginType',
        'unitValueQuadVersion',
        'keyOriginIndex',
        'major',
        'minor',
        'fix',
        'docDefaultNewArtboardBackgroundType',
        'artboardBackgroundType', 
    ],
    'enum': [
        'textGridding',
        'Ornt',
        'warpStyle',
        'warpRotate',
        'Inte',
        'Bltn',
        'ClrS',
        'sdwM',
        'hglM',
        'bvlT',
        'bvlS',
        'bvlD',
        'Md  ',
        'glwS',
        'GrdF',
        'GlwT',
        'strokeStyleLineCapType',
        'strokeStyleLineJoinType',
        'strokeStyleLineAlignment',
        'strokeStyleBlendMode',
        'PntT',
        'Styl',
        'lookupType',
        'LUTFormat',
        'dataOrder',
        'tableOrder',
        'enableCompCore',
        'enableCompCoreGPU',
        'compCoreSupport',
        'compCoreGPUSupport',
        'Engn', 
    ],
    'bool': [
        'PstS',
        'printSixteenBit',
        'masterFXSwitch',
        'enab',
        'uglg',
        'antialiasGloss',
        'useShape',
        'useTexture',
        'masterFXSwitch',
        'uglg',
        'antialiasGloss',
        'useShape',
        'useTexture',
        'Algn',
        'Rvrs',
        'Dthr',
        'Invr',
        'VctC',
        'ShTr',
        'layerConceals',
        'strokeEnabled',
        'fillEnabled',
        'strokeStyleScaleLock',
        'strokeStyleStrokeAdjust',
        'hardProof',
        'MpBl',
        'paperWhite',
        'useLegacy',
        'Auto',
        'Lab ',
        'useTint',
        'keyShapeInvalidated',
        'autoExpandEnabled',
        'autoNestEnabled',
        'autoPositionEnabled',
        'shrinkwrapOnSaveEnabled', 
    ],
    'doub': [
        'warpValue',
        'warpPerspective',
        'warpPerspectiveOther',
        'Intr',
        'Wdth',
        'Hght',
        'strokeStyleMiterLimit',
        'strokeStyleResolution',
        'layerTime',
        'keyOriginResolution', 
    ],
    'UntF': [
        'Scl ',
        'sdwO',
        'hglO',
        'lagl',
        'Lald',
        'srgR',
        'blur',
        'Sftn',
        'Opct',
        'Dstn',
        'Angl',
        'Ckmt',
        'Nose',
        'Inpr',
        'ShdN',
        'strokeStyleLineWidth',
        'strokeStyleLineDashOffset',
        'strokeStyleOpacity',
        'H   ',
        'Top ',
        'Left',
        'Btom',
        'Rght',
        'Rslt',
        'topRight',
        'topLeft',
        'bottomLeft',
        'bottomRight', 
    ],
    'VlLs': [
        'Crv ',
        'Clrs',
        'Mnm ',
        'Mxm ',
        'Trns',
        'pathList',
        'strokeStyleLineDashSet',
        'FrLs',
        'LaSt',
        'Trnf',
        'nonAffineTransform',
        'keyDescriptorList',
        'guideIndeces', 
    ],
    'ObAr': [
        'meshPoints'
    ]
};
var channels = [
    'Rd  ',
    'Grn ',
    'Bl  ',
    'Yllw',
    'Ylw ',
    'Cyn ',
    'Mgnt',
    'Blck',
    'Gry ',
    'Lmnc',
    'A   ',
    'B   ', 
];
var fieldToArrayType = {
    'Mnm ': 'long',
    'Mxm ': 'long',
    'FrLs': 'long',
    'strokeStyleLineDashSet': 'UntF',
    'Trnf': 'doub',
    'nonAffineTransform': 'doub',
    'keyDescriptorList': 'Objc'
};
var fieldToType = {
};
for(var _i = 0, _a = Object.keys(typeToField); _i < _a.length; _i++){
    var type = _a[_i];
    for(var _b = 0, _c = typeToField[type]; _b < _c.length; _b++){
        var field = _c[_b];
        fieldToType[field] = type;
    }
}
for(var _d = 0, _e = Object.keys(fieldToExtType); _d < _e.length; _d++){
    var field = _e[_d];
    fieldToType[field] = 'Objc';
}
for(var _f = 0, _g = Object.keys(fieldToArrayExtType); _f < _g.length; _f++){
    var field = _g[_f];
    fieldToArrayType[field] = 'Objc';
}
function getTypeByKey(key, value, root) {
    if (key === 'Sz  ') return 'Wdth' in value ? 'Objc' : 'units' in value ? 'UntF' : 'doub';
    else if (key === 'Type') return typeof value === 'string' ? 'enum' : 'long';
    else if (key === 'AntA') return typeof value === 'string' ? 'enum' : 'bool';
    else if (key === 'Hrzn' || key === 'Vrtc' || key === 'Top ' || key === 'Left' || key === 'Btom' || key === 'Rght') return typeof value === 'number' ? 'doub' : 'UntF';
    else if (key === 'Vrsn') return typeof value === 'number' ? 'long' : 'Objc';
    else if (key === 'Rd  ' || key === 'Grn ' || key === 'Bl  ') return root === 'artd' ? 'long' : 'doub';
    else return fieldToType[key];
}
function readAsciiStringOrClassId(reader) {
    var length = psdReader_1.readInt32(reader);
    return psdReader_1.readAsciiString(reader, length || 4);
}
exports.readAsciiStringOrClassId = readAsciiStringOrClassId;
function writeAsciiStringOrClassId(writer, value) {
    if (value.length === 4 && value !== 'warp') {
        // write classId
        psdWriter_1.writeInt32(writer, 0);
        psdWriter_1.writeSignature(writer, value);
    } else {
        // write ascii string
        psdWriter_1.writeInt32(writer, value.length);
        for(var i = 0; i < value.length; i++)psdWriter_1.writeUint8(writer, value.charCodeAt(i));
    }
}
function readDescriptorStructure(reader) {
    var object = {
    };
    // object.__struct =
    readClassStructure(reader);
    var itemsCount = psdReader_1.readUint32(reader);
    for(var i = 0; i < itemsCount; i++){
        var key = readAsciiStringOrClassId(reader);
        var type = psdReader_1.readSignature(reader);
        // console.log(`> '${key}' '${type}'`);
        var data = readOSType(reader, type);
        // if (!getTypeByKey(key, data)) console.log(`> '${key}' '${type}'`, data);
        object[key] = data;
    }
    // console.log('//', struct);
    return object;
}
exports.readDescriptorStructure = readDescriptorStructure;
function writeDescriptorStructure(writer, name, classId, value, root) {
    if (logErrors && !classId) console.log('Missing classId for: ', name, classId, value);
    // write class structure
    psdWriter_1.writeUnicodeStringWithPadding(writer, name);
    writeAsciiStringOrClassId(writer, classId);
    var keys = Object.keys(value);
    psdWriter_1.writeUint32(writer, keys.length);
    for(var _i1 = 0, keys_1 = keys; _i1 < keys_1.length; _i1++){
        var key = keys_1[_i1];
        var type = getTypeByKey(key, value[key], root);
        var extType = fieldToExtType[key];
        if ((key === 'Strt' || key === 'Brgh') && 'H   ' in value) type = 'doub';
        else if (channels.indexOf(key) !== -1) type = classId === 'RGBC' && root !== 'artd' ? 'doub' : 'long';
        else if (key === 'profile') type = classId === 'printOutput' ? 'TEXT' : 'tdta';
        else if (key === 'strokeStyleContent') {
            if (value[key]['Clr ']) extType = makeType('', 'solidColorLayer');
            else if (value[key].Grad) extType = makeType('', 'gradientLayer');
            else if (value[key].Ptrn) extType = makeType('', 'patternLayer');
            else logErrors && console.log('Invalid strokeStyleContent value', value[key]);
        }
        if (extType && extType.classID === 'RGBC') {
            if ('H   ' in value[key]) extType = {
                classID: 'HSBC',
                name: ''
            };
        }
        writeAsciiStringOrClassId(writer, key);
        psdWriter_1.writeSignature(writer, type || 'long');
        writeOSType(writer, type || 'long', value[key], key, extType, root);
        if (logErrors && !type) console.log("Missing descriptor field type for: '" + key + "' in", value);
    }
}
exports.writeDescriptorStructure = writeDescriptorStructure;
function readOSType(reader, type) {
    switch(type){
        case 'obj ':
            return readReferenceStructure(reader);
        case 'Objc':
        case 'GlbO':
            return readDescriptorStructure(reader);
        case 'VlLs':
            var length_1 = psdReader_1.readInt32(reader);
            var items = [];
            for(var i = 0; i < length_1; i++){
                var type_1 = psdReader_1.readSignature(reader);
                // console.log('  >', type);
                items.push(readOSType(reader, type_1));
            }
            return items;
        case 'doub':
            return psdReader_1.readFloat64(reader);
        case 'UntF':
            var units = psdReader_1.readSignature(reader);
            var value = psdReader_1.readFloat64(reader);
            if (!unitsMap[units]) throw new Error("Invalid units: " + units);
            return {
                units: unitsMap[units],
                value: value
            };
        case 'UnFl':
            var units = psdReader_1.readSignature(reader);
            var value = psdReader_1.readFloat32(reader);
            if (!unitsMap[units]) throw new Error("Invalid units: " + units);
            return {
                units: unitsMap[units],
                value: value
            };
        case 'TEXT':
            return psdReader_1.readUnicodeString(reader);
        case 'enum':
            var type_2 = readAsciiStringOrClassId(reader);
            var value = readAsciiStringOrClassId(reader);
            return type_2 + "." + value;
        case 'long':
            return psdReader_1.readInt32(reader);
        case 'comp':
            var low = psdReader_1.readUint32(reader);
            var high = psdReader_1.readUint32(reader);
            return {
                low: low,
                high: high
            };
        case 'bool':
            return !!psdReader_1.readUint8(reader);
        case 'type':
        case 'GlbC':
            return readClassStructure(reader);
        case 'alis':
            var length_2 = psdReader_1.readInt32(reader);
            return psdReader_1.readAsciiString(reader, length_2);
        case 'tdta':
            var length_3 = psdReader_1.readInt32(reader);
            return psdReader_1.readBytes(reader, length_3);
        case 'ObAr':
            psdReader_1.readInt32(reader); // version: 16
            psdReader_1.readUnicodeString(reader); // name: ''
            readAsciiStringOrClassId(reader); // 'rationalPoint'
            var length_4 = psdReader_1.readInt32(reader);
            var items = [];
            for(var i = 0; i < length_4; i++){
                var type1 = readAsciiStringOrClassId(reader); // type Hrzn | Vrtc
                psdReader_1.readSignature(reader); // UnFl
                psdReader_1.readSignature(reader); // units ? '#Pxl'
                var valuesCount = psdReader_1.readInt32(reader);
                var values = [];
                for(var j = 0; j < valuesCount; j++)values.push(psdReader_1.readFloat64(reader));
                items.push({
                    type: type1,
                    values: values
                });
            }
            return items;
        case 'Pth ':
            /*const length =*/ psdReader_1.readInt32(reader);
            var sig = psdReader_1.readSignature(reader);
            /*const pathSize =*/ psdReader_1.readInt32LE(reader);
            var charsCount = psdReader_1.readInt32LE(reader);
            var path = psdReader_1.readUnicodeStringWithLength(reader, charsCount);
            return {
                sig: sig,
                path: path
            };
        default:
            throw new Error("Invalid TySh descriptor OSType: " + type + " at " + reader.offset.toString(16));
    }
}
function writeOSType(writer, type, value, key, extType, root) {
    switch(type){
        // case 'obj ': // Reference
        // 	writeReferenceStructure(reader);
        case 'Objc':
        case 'GlbO':
            if (!extType) throw new Error("Missing ext type for: '" + key + "' (" + JSON.stringify(value) + ")");
            writeDescriptorStructure(writer, extType.name, extType.classID, value, root);
            break;
        case 'VlLs':
            psdWriter_1.writeInt32(writer, value.length);
            for(var i = 0; i < value.length; i++){
                var type_3 = fieldToArrayType[key];
                psdWriter_1.writeSignature(writer, type_3 || 'long');
                writeOSType(writer, type_3 || 'long', value[i], '', fieldToArrayExtType[key], root);
                if (logErrors && !type_3) console.log("Missing descriptor array type for: '" + key + "' in", value);
            }
            break;
        case 'doub':
            psdWriter_1.writeFloat64(writer, value);
            break;
        case 'UntF':
            if (!unitsMapRev[value.units]) throw new Error("Invalid units: " + value.units + " in " + key);
            psdWriter_1.writeSignature(writer, unitsMapRev[value.units]);
            psdWriter_1.writeFloat64(writer, value.value);
            break;
        case 'UnFl':
            if (!unitsMapRev[value.units]) throw new Error("Invalid units: " + value.units + " in " + key);
            psdWriter_1.writeSignature(writer, unitsMapRev[value.units]);
            psdWriter_1.writeFloat32(writer, value.value);
            break;
        case 'TEXT':
            psdWriter_1.writeUnicodeStringWithPadding(writer, value);
            break;
        case 'enum':
            var _a1 = value.split('.'), _type = _a1[0], val = _a1[1];
            writeAsciiStringOrClassId(writer, _type);
            writeAsciiStringOrClassId(writer, val);
            break;
        case 'long':
            psdWriter_1.writeInt32(writer, value);
            break;
        // case 'comp': // Large Integer
        // 	writeLargeInteger(reader);
        case 'bool':
            psdWriter_1.writeUint8(writer, value ? 1 : 0);
            break;
        // case 'type': // Class
        // case 'GlbC': // Class
        // 	writeClassStructure(reader);
        // case 'alis': // Alias
        // 	writeAliasStructure(reader);
        case 'tdta':
            psdWriter_1.writeInt32(writer, value.byteLength);
            psdWriter_1.writeBytes(writer, value);
            break;
        case 'ObAr':
            psdWriter_1.writeInt32(writer, 16); // version
            psdWriter_1.writeUnicodeStringWithPadding(writer, ''); // name
            writeAsciiStringOrClassId(writer, 'rationalPoint');
            psdWriter_1.writeInt32(writer, value.length);
            for(var i = 0; i < value.length; i++){
                writeAsciiStringOrClassId(writer, value[i].type); // Hrzn | Vrtc
                psdWriter_1.writeSignature(writer, 'UnFl');
                psdWriter_1.writeSignature(writer, '#Pxl');
                psdWriter_1.writeInt32(writer, value[i].values.length);
                for(var j = 0; j < value[i].values.length; j++)psdWriter_1.writeFloat64(writer, value[i].values[j]);
            }
            break;
        // case 'Pth ': // File path
        // 	writeFilePath(reader);
        default:
            throw new Error("Not implemented TySh descriptor OSType: " + type);
    }
}
function readReferenceStructure(reader) {
    var itemsCount = psdReader_1.readInt32(reader);
    var items = [];
    for(var i = 0; i < itemsCount; i++){
        var type = psdReader_1.readSignature(reader);
        switch(type){
            case 'prop':
                var _a2 = readClassStructure(reader), name_1 = _a2.name, classID = _a2.classID;
                var keyID = readAsciiStringOrClassId(reader);
                items.push({
                    name: name_1,
                    classID: classID,
                    keyID: keyID
                });
                break;
            case 'Clss':
                items.push(readClassStructure(reader));
                break;
            case 'Enmr':
                var _b = readClassStructure(reader), name_2 = _b.name, classID = _b.classID;
                var TypeID = readAsciiStringOrClassId(reader);
                var value = readAsciiStringOrClassId(reader);
                items.push({
                    name: name_2,
                    classID: classID,
                    TypeID: TypeID,
                    value: value
                });
                break;
            case 'rele':
                var _c = readClassStructure(reader), name_3 = _c.name, classID = _c.classID;
                var value = psdReader_1.readUint32(reader);
                items.push({
                    name: name_3,
                    classID: classID,
                    value: value
                });
                break;
            case 'Idnt':
                items.push(psdReader_1.readInt32(reader));
                break;
            case 'indx':
                items.push(psdReader_1.readInt32(reader));
                break;
            case 'name':
                items.push(psdReader_1.readUnicodeString(reader));
                break;
            default:
                throw new Error("Invalid TySh descriptor Reference type: " + type);
        }
    }
    return items;
}
function readClassStructure(reader) {
    var name = psdReader_1.readUnicodeString(reader);
    var classID = readAsciiStringOrClassId(reader);
    // console.log({ name, classID });
    return {
        name: name,
        classID: classID
    };
}
function readVersionAndDescriptor(reader) {
    if (psdReader_1.readUint32(reader) !== 16) throw new Error('Invalid descriptor version');
    return readDescriptorStructure(reader);
}
exports.readVersionAndDescriptor = readVersionAndDescriptor;
function writeVersionAndDescriptor(writer, name, classID, descriptor, root) {
    if (root === void 0) root = '';
    psdWriter_1.writeUint32(writer, 16); // version
    writeDescriptorStructure(writer, name, classID, descriptor, root);
}
exports.writeVersionAndDescriptor = writeVersionAndDescriptor;
function parseAngle(x) {
    if (x === undefined) return 0;
    if (x.units !== 'Angle') throw new Error("Invalid units: " + x.units);
    return x.value;
}
exports.parseAngle = parseAngle;
function parsePercent(x) {
    if (x === undefined) return 1;
    if (x.units !== 'Percent') throw new Error("Invalid units: " + x.units);
    return x.value / 100;
}
exports.parsePercent = parsePercent;
function parsePercentOrAngle(x) {
    if (x === undefined) return 1;
    if (x.units === 'Percent') return x.value / 100;
    if (x.units === 'Angle') return x.value / 360;
    throw new Error("Invalid units: " + x.units);
}
exports.parsePercentOrAngle = parsePercentOrAngle;
function parseUnits(_a3) {
    var units = _a3.units, value = _a3.value;
    if (units !== 'Pixels' && units !== 'Millimeters' && units !== 'Points' && units !== 'None' && units !== 'Picas' && units !== 'Inches' && units !== 'Centimeters' && units !== 'Density') throw new Error("Invalid units: " + JSON.stringify({
        units: units,
        value: value
    }));
    return {
        value: value,
        units: units
    };
}
exports.parseUnits = parseUnits;
function parseUnitsOrNumber(value, units) {
    if (units === void 0) units = 'Pixels';
    if (typeof value === 'number') return {
        value: value,
        units: units
    };
    return parseUnits(value);
}
exports.parseUnitsOrNumber = parseUnitsOrNumber;
function parseUnitsToNumber(_a4, expectedUnits) {
    var units = _a4.units, value = _a4.value;
    if (units !== expectedUnits) throw new Error("Invalid units: " + JSON.stringify({
        units: units,
        value: value
    }));
    return value;
}
exports.parseUnitsToNumber = parseUnitsToNumber;
function unitsAngle(value) {
    return {
        units: 'Angle',
        value: value || 0
    };
}
exports.unitsAngle = unitsAngle;
function unitsPercent(value) {
    return {
        units: 'Percent',
        value: Math.round((value || 0) * 100)
    };
}
exports.unitsPercent = unitsPercent;
function unitsValue(x, key) {
    if (x == null) return {
        units: 'Pixels',
        value: 0
    };
    if (typeof x !== 'object') throw new Error("Invalid value: " + JSON.stringify(x) + " (key: " + key + ") (should have value and units)");
    var units = x.units, value = x.value;
    if (typeof value !== 'number') throw new Error("Invalid value in " + JSON.stringify(x) + " (key: " + key + ")");
    if (units !== 'Pixels' && units !== 'Millimeters' && units !== 'Points' && units !== 'None' && units !== 'Picas' && units !== 'Inches' && units !== 'Centimeters' && units !== 'Density') throw new Error("Invalid units in " + JSON.stringify(x) + " (key: " + key + ")");
    return {
        units: units,
        value: value
    };
}
exports.unitsValue = unitsValue;
exports.textGridding = helpers_1.createEnum('textGridding', 'none', {
    none: 'None'
});
exports.Ornt = helpers_1.createEnum('Ornt', 'horizontal', {
    horizontal: 'Hrzn',
    vertical: 'Vrtc'
});
exports.Annt = helpers_1.createEnum('Annt', 'sharp', {
    none: 'Anno',
    sharp: 'antiAliasSharp',
    crisp: 'AnCr',
    strong: 'AnSt',
    smooth: 'AnSm'
});
exports.warpStyle = helpers_1.createEnum('warpStyle', 'none', {
    none: 'warpNone',
    arc: 'warpArc',
    arcLower: 'warpArcLower',
    arcUpper: 'warpArcUpper',
    arch: 'warpArch',
    bulge: 'warpBulge',
    shellLower: 'warpShellLower',
    shellUpper: 'warpShellUpper',
    flag: 'warpFlag',
    wave: 'warpWave',
    fish: 'warpFish',
    rise: 'warpRise',
    fisheye: 'warpFisheye',
    inflate: 'warpInflate',
    squeeze: 'warpSqueeze',
    twist: 'warpTwist',
    custom: 'warpCustom'
});
exports.BlnM = helpers_1.createEnum('BlnM', 'normal', {
    'normal': 'Nrml',
    'dissolve': 'Dslv',
    'darken': 'Drkn',
    'multiply': 'Mltp',
    'color burn': 'CBrn',
    'linear burn': 'linearBurn',
    'darker color': 'darkerColor',
    'lighten': 'Lghn',
    'screen': 'Scrn',
    'color dodge': 'CDdg',
    'linear dodge': 'linearDodge',
    'lighter color': 'lighterColor',
    'overlay': 'Ovrl',
    'soft light': 'SftL',
    'hard light': 'HrdL',
    'vivid light': 'vividLight',
    'linear light': 'linearLight',
    'pin light': 'pinLight',
    'hard mix': 'hardMix',
    'difference': 'Dfrn',
    'exclusion': 'Xclu',
    'subtract': 'blendSubtraction',
    'divide': 'blendDivide',
    'hue': 'H   ',
    'saturation': 'Strt',
    'color': 'Clr ',
    'luminosity': 'Lmns'
});
exports.BESl = helpers_1.createEnum('BESl', 'inner bevel', {
    'inner bevel': 'InrB',
    'outer bevel': 'OtrB',
    'emboss': 'Embs',
    'pillow emboss': 'PlEb',
    'stroke emboss': 'strokeEmboss'
});
exports.bvlT = helpers_1.createEnum('bvlT', 'smooth', {
    'smooth': 'SfBL',
    'chisel hard': 'PrBL',
    'chisel soft': 'Slmt'
});
exports.BESs = helpers_1.createEnum('BESs', 'up', {
    up: 'In  ',
    down: 'Out '
});
exports.BETE = helpers_1.createEnum('BETE', 'softer', {
    softer: 'SfBL',
    precise: 'PrBL'
});
exports.IGSr = helpers_1.createEnum('IGSr', 'edge', {
    edge: 'SrcE',
    center: 'SrcC'
});
exports.GrdT = helpers_1.createEnum('GrdT', 'linear', {
    linear: 'Lnr ',
    radial: 'Rdl ',
    angle: 'Angl',
    reflected: 'Rflc',
    diamond: 'Dmnd'
});
exports.ClrS = helpers_1.createEnum('ClrS', 'rgb', {
    rgb: 'RGBC',
    hsb: 'HSBl',
    lab: 'LbCl'
});
exports.FStl = helpers_1.createEnum('FStl', 'outside', {
    outside: 'OutF',
    center: 'CtrF',
    inside: 'InsF'
});
exports.FrFl = helpers_1.createEnum('FrFl', 'color', {
    color: 'SClr',
    gradient: 'GrFl',
    pattern: 'Ptrn'
});
exports.strokeStyleLineCapType = helpers_1.createEnum('strokeStyleLineCapType', 'butt', {
    butt: 'strokeStyleButtCap',
    round: 'strokeStyleRoundCap',
    square: 'strokeStyleSquareCap'
});
exports.strokeStyleLineJoinType = helpers_1.createEnum('strokeStyleLineJoinType', 'miter', {
    miter: 'strokeStyleMiterJoin',
    round: 'strokeStyleRoundJoin',
    bevel: 'strokeStyleBevelJoin'
});
exports.strokeStyleLineAlignment = helpers_1.createEnum('strokeStyleLineAlignment', 'inside', {
    inside: 'strokeStyleAlignInside',
    center: 'strokeStyleAlignCenter',
    outside: 'strokeStyleAlignOutside'
});

},{"./helpers":"g9u8n","./psdReader":"95tw3","./psdWriter":"cC52e"}],"6z0Bx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeEngineData = exports.parseEngineData = void 0;
function isWhitespace(char) {
    // ' ', '\n', '\r', '\t'
    return char === 32 || char === 10 || char === 13 || char === 9;
}
function isNumber(char) {
    // 0123456789.-
    return char >= 48 && char <= 57 || char === 46 || char === 45;
}
function parseEngineData(data) {
    var index = 0;
    function skipWhitespace() {
        while(index < data.length && isWhitespace(data[index]))index++;
    }
    function getTextByte() {
        var byte = data[index];
        index++;
        if (byte === 92) {
            byte = data[index];
            index++;
        }
        return byte;
    }
    function getText() {
        var result = '';
        if (data[index] === 41) {
            index++;
            return result;
        }
        // Strings start with utf-16 BOM
        if (data[index] !== 254 || data[index + 1] !== 255) throw new Error('Invalid utf-16 BOM');
        index += 2;
        // ), ( and \ characters are escaped in ascii manner, remove the escapes before interpreting
        // the bytes as utf-16
        while(index < data.length && data[index] !== 41){
            var high = getTextByte();
            var low = getTextByte();
            var char = high << 8 | low;
            result += String.fromCharCode(char);
        }
        index++;
        return result;
    }
    var root = null;
    var stack = [];
    function pushContainer(value) {
        if (!stack.length) {
            stack.push(value);
            root = value;
        } else {
            pushValue(value);
            stack.push(value);
        }
    }
    function pushValue(value) {
        if (!stack.length) throw new Error('Invalid data');
        var top = stack[stack.length - 1];
        if (typeof top === 'string') {
            stack[stack.length - 2][top] = value;
            pop();
        } else if (Array.isArray(top)) top.push(value);
        else throw new Error('Invalid data');
    }
    function pushProperty(name) {
        if (!stack.length) pushContainer({
        });
        var top = stack[stack.length - 1];
        if (top && typeof top === 'string') {
            if (name === 'nil') pushValue(null);
            else pushValue("/" + name);
        } else if (top && typeof top === 'object') stack.push(name);
        else throw new Error('Invalid data');
    }
    function pop() {
        if (!stack.length) throw new Error('Invalid data');
        stack.pop();
    }
    skipWhitespace();
    while(index < data.length){
        var i = index;
        var char1 = data[i];
        if (char1 === 60 && data[i + 1] === 60) {
            index += 2;
            pushContainer({
            });
        } else if (char1 === 62 && data[i + 1] === 62) {
            index += 2;
            pop();
        } else if (char1 === 47) {
            index += 1;
            var start = index;
            while(index < data.length && !isWhitespace(data[index]))index++;
            var name_1 = '';
            for(var i_1 = start; i_1 < index; i_1++)name_1 += String.fromCharCode(data[i_1]);
            pushProperty(name_1);
        } else if (char1 === 40) {
            index += 1;
            pushValue(getText());
        } else if (char1 === 91) {
            index += 1;
            pushContainer([]);
        } else if (char1 === 93) {
            index += 1;
            pop();
        } else if (char1 === 110 && data[i + 1] === 117 && data[i + 2] === 108 && data[i + 3] === 108) {
            index += 4;
            pushValue(null);
        } else if (char1 === 116 && data[i + 1] === 114 && data[i + 2] === 117 && data[i + 3] === 101) {
            index += 4;
            pushValue(true);
        } else if (char1 === 102 && data[i + 1] === 97 && data[i + 2] === 108 && data[i + 3] === 115 && data[i + 4] === 101) {
            index += 5;
            pushValue(false);
        } else if (isNumber(char1)) {
            var value1 = '';
            while(index < data.length && isNumber(data[index])){
                value1 += String.fromCharCode(data[index]);
                index++;
            }
            pushValue(parseFloat(value1));
        } else {
            index += 1;
            console.log("Invalid token " + String.fromCharCode(char1) + " at " + index);
        // ` near ${String.fromCharCode.apply(null, data.slice(index - 10, index + 20) as any)}` +
        // `data [${Array.from(data.slice(index - 10, index + 20)).join(', ')}]`
        }
        skipWhitespace();
    }
    return root;
}
exports.parseEngineData = parseEngineData;
var floatKeys = [
    'Axis',
    'XY',
    'Zone',
    'WordSpacing',
    'FirstLineIndent',
    'GlyphSpacing',
    'StartIndent',
    'EndIndent',
    'SpaceBefore',
    'SpaceAfter',
    'LetterSpacing',
    'Values',
    'GridSize',
    'GridLeading',
    'PointBase',
    'BoxBounds',
    'TransformPoint0',
    'TransformPoint1',
    'TransformPoint2',
    'FontSize',
    'Leading',
    'HorizontalScale',
    'VerticalScale',
    'BaselineShift',
    'Tsume',
    'OutlineWidth', 
];
var intArrays = [
    'RunLengthArray'
];
// TODO: handle /nil
function serializeEngineData(data, condensed) {
    if (condensed === void 0) condensed = false;
    var buffer = new Uint8Array(1024);
    var offset = 0;
    var indent = 0;
    function write(value) {
        if (offset >= buffer.length) {
            var newBuffer = new Uint8Array(buffer.length * 2);
            newBuffer.set(buffer);
            buffer = newBuffer;
        }
        buffer[offset] = value;
        offset++;
    }
    function writeString(value) {
        for(var i = 0; i < value.length; i++)write(value.charCodeAt(i));
    }
    function writeIndent() {
        if (condensed) writeString(' ');
        else for(var i = 0; i < indent; i++)writeString('\t');
    }
    function writeProperty(key, value) {
        writeIndent();
        writeString("/" + key);
        writeValue(value, key, true);
        if (!condensed) writeString('\n');
    }
    function serializeInt(value) {
        return value.toString();
    }
    function serializeFloat(value) {
        return value.toFixed(5).replace(/(\d)0+$/g, '$1').replace(/^0+\.([1-9])/g, '.$1').replace(/^-0+\.0(\d)/g, '-.0$1');
    }
    function serializeNumber(value, key) {
        var isFloat = key && floatKeys.indexOf(key) !== -1 || (value | 0) !== value;
        return isFloat ? serializeFloat(value) : serializeInt(value);
    }
    function getKeys(value) {
        var keys = Object.keys(value);
        if (keys.indexOf('98') !== -1) keys.unshift.apply(keys, keys.splice(keys.indexOf('99'), 1));
        if (keys.indexOf('99') !== -1) keys.unshift.apply(keys, keys.splice(keys.indexOf('99'), 1));
        return keys;
    }
    function writeStringByte(value) {
        if (value === 40 || value === 41 || value === 92) write(92); // \
        write(value);
    }
    function writeValue(value, key, inProperty) {
        if (inProperty === void 0) inProperty = false;
        function writePrefix() {
            if (inProperty) writeString(' ');
            else writeIndent();
        }
        if (value === null) {
            writePrefix();
            writeString(condensed ? '/nil' : 'null');
        } else if (typeof value === 'number') {
            writePrefix();
            writeString(serializeNumber(value, key));
        } else if (typeof value === 'boolean') {
            writePrefix();
            writeString(value ? 'true' : 'false');
        } else if (typeof value === 'string') {
            writePrefix();
            if ((key === '99' || key === '98') && value.charAt(0) === '/') writeString(value);
            else {
                writeString('(');
                write(254);
                write(255);
                for(var i = 0; i < value.length; i++){
                    var code = value.charCodeAt(i);
                    writeStringByte(code >> 8 & 255);
                    writeStringByte(code & 255);
                }
                writeString(')');
            }
        } else if (Array.isArray(value)) {
            writePrefix();
            if (value.every(function(x) {
                return typeof x === 'number';
            })) {
                writeString('[');
                var intArray = intArrays.indexOf(key) !== -1;
                for(var _i = 0, value_1 = value; _i < value_1.length; _i++){
                    var x1 = value_1[_i];
                    writeString(' ');
                    writeString(intArray ? serializeNumber(x1) : serializeFloat(x1));
                }
                writeString(' ]');
            } else {
                writeString('[');
                if (!condensed) writeString('\n');
                for(var _a = 0, value_2 = value; _a < value_2.length; _a++){
                    var x1 = value_2[_a];
                    writeValue(x1, key);
                    if (!condensed) writeString('\n');
                }
                writeIndent();
                writeString(']');
            }
        } else if (typeof value === 'object') {
            if (inProperty && !condensed) writeString('\n');
            writeIndent();
            writeString('<<');
            if (!condensed) writeString('\n');
            indent++;
            for(var _b = 0, _c = getKeys(value); _b < _c.length; _b++){
                var key_1 = _c[_b];
                writeProperty(key_1, value[key_1]);
            }
            indent--;
            writeIndent();
            writeString('>>');
        }
        return undefined;
    }
    if (condensed) {
        if (typeof data === 'object') for(var _i1 = 0, _a1 = getKeys(data); _i1 < _a1.length; _i1++){
            var key1 = _a1[_i1];
            writeProperty(key1, data[key1]);
        }
    } else {
        writeString('\n\n');
        writeValue(data);
    }
    return buffer.slice(0, offset);
}
exports.serializeEngineData = serializeEngineData;

},{}],"f5912":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeEngineData = exports.decodeEngineData = void 0;
var defaultFont = {
    name: 'MyriadPro-Regular',
    script: 0,
    type: 0,
    synthetic: 0
};
var defaultParagraphStyle = {
    justification: 'left',
    firstLineIndent: 0,
    startIndent: 0,
    endIndent: 0,
    spaceBefore: 0,
    spaceAfter: 0,
    autoHyphenate: true,
    hyphenatedWordSize: 6,
    preHyphen: 2,
    postHyphen: 2,
    consecutiveHyphens: 8,
    zone: 36,
    wordSpacing: [
        0.8,
        1,
        1.33
    ],
    letterSpacing: [
        0,
        0,
        0
    ],
    glyphSpacing: [
        1,
        1,
        1
    ],
    autoLeading: 1.2,
    leadingType: 0,
    hanging: false,
    burasagari: false,
    kinsokuOrder: 0,
    everyLineComposer: false
};
var defaultStyle = {
    font: defaultFont,
    fontSize: 12,
    fauxBold: false,
    fauxItalic: false,
    autoLeading: true,
    leading: 0,
    horizontalScale: 1,
    verticalScale: 1,
    tracking: 0,
    autoKerning: true,
    kerning: 0,
    baselineShift: 0,
    fontCaps: 0,
    fontBaseline: 0,
    underline: false,
    strikethrough: false,
    ligatures: true,
    dLigatures: false,
    baselineDirection: 2,
    tsume: 0,
    styleRunAlignment: 2,
    language: 0,
    noBreak: false,
    fillColor: {
        r: 0,
        g: 0,
        b: 0
    },
    strokeColor: {
        r: 0,
        g: 0,
        b: 0
    },
    fillFlag: true,
    strokeFlag: false,
    fillFirst: true,
    yUnderline: 1,
    outlineWidth: 1,
    characterDirection: 0,
    hindiNumbers: false,
    kashida: 1,
    diacriticPos: 2
};
var defaultGridInfo = {
    isOn: false,
    show: false,
    size: 18,
    leading: 22,
    color: {
        r: 0,
        g: 0,
        b: 255
    },
    leadingFillColor: {
        r: 0,
        g: 0,
        b: 255
    },
    alignLineHeightToGridFlags: false
};
var paragraphStyleKeys = [
    'justification',
    'firstLineIndent',
    'startIndent',
    'endIndent',
    'spaceBefore',
    'spaceAfter',
    'autoHyphenate',
    'hyphenatedWordSize',
    'preHyphen',
    'postHyphen',
    'consecutiveHyphens',
    'zone',
    'wordSpacing',
    'letterSpacing',
    'glyphSpacing',
    'autoLeading',
    'leadingType',
    'hanging',
    'burasagari',
    'kinsokuOrder',
    'everyLineComposer', 
];
var styleKeys = [
    'font',
    'fontSize',
    'fauxBold',
    'fauxItalic',
    'autoLeading',
    'leading',
    'horizontalScale',
    'verticalScale',
    'tracking',
    'autoKerning',
    'kerning',
    'baselineShift',
    'fontCaps',
    'fontBaseline',
    'underline',
    'strikethrough',
    'ligatures',
    'dLigatures',
    'baselineDirection',
    'tsume',
    'styleRunAlignment',
    'language',
    'noBreak',
    'fillColor',
    'strokeColor',
    'fillFlag',
    'strokeFlag',
    'fillFirst',
    'yUnderline',
    'outlineWidth',
    'characterDirection',
    'hindiNumbers',
    'kashida',
    'diacriticPos', 
];
var antialias = [
    'none',
    'crisp',
    'strong',
    'smooth',
    'sharp'
];
var justification = [
    'left',
    'right',
    'center'
];
function upperFirst(value) {
    return value.substr(0, 1).toUpperCase() + value.substr(1);
}
function decodeColor(color) {
    var c = color.Values;
    if (color.Type === 0) return {
        r: c[1] * 255,
        g: c[1] * 255,
        b: c[1] * 255
    }; // , c[0] * 255];
    else return {
        r: c[1] * 255,
        g: c[2] * 255,
        b: c[3] * 255,
        a: c[0]
    }; // , c[0] * 255];
}
function encodeColor(color) {
    if (color && 'r' in color) return [
        'a' in color ? color.a : 1,
        color.r / 255,
        color.g / 255,
        color.b / 255
    ];
    else return [
        0,
        0,
        0,
        0
    ];
}
function arraysEqual(a, b) {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    for(var i = 0; i < a.length; i++)if (a[i] !== b[i]) return false;
    return true;
}
function objectsEqual(a, b) {
    if (!a || !b) return false;
    for(var _i = 0, _a = Object.keys(a); _i < _a.length; _i++){
        var key = _a[_i];
        if (a[key] !== b[key]) return false;
    }
    for(var _b = 0, _c = Object.keys(b); _b < _c.length; _b++){
        var key = _c[_b];
        if (a[key] !== b[key]) return false;
    }
    return true;
}
function findOrAddFont(fonts, font) {
    for(var i = 0; i < fonts.length; i++){
        if (fonts[i].name === font.name) return i;
    }
    fonts.push(font);
    return fonts.length - 1;
}
function decodeObject(obj, keys, fonts) {
    var result = {
    };
    for(var _i = 0, keys_1 = keys; _i < keys_1.length; _i++){
        var key = keys_1[_i];
        var Key = upperFirst(key);
        if (obj[Key] === undefined) continue;
        if (key === 'justification') result[key] = justification[obj[Key]];
        else if (key === 'font') result[key] = fonts[obj[Key]];
        else if (key === 'fillColor' || key === 'strokeColor') result[key] = decodeColor(obj[Key]);
        else result[key] = obj[Key];
    }
    return result;
}
function encodeObject(obj, keys, fonts) {
    var _a;
    var result = {
    };
    for(var _i = 0, keys_2 = keys; _i < keys_2.length; _i++){
        var key = keys_2[_i];
        var Key = upperFirst(key);
        if (obj[key] === undefined) continue;
        if (key === 'justification') result[Key] = justification.indexOf((_a = obj[key]) !== null && _a !== void 0 ? _a : 'left');
        else if (key === 'font') result[Key] = findOrAddFont(fonts, obj[key]);
        else if (key === 'fillColor' || key === 'strokeColor') result[Key] = {
            Type: 1,
            Values: encodeColor(obj[key])
        };
        else result[Key] = obj[key];
    }
    return result;
}
function decodeParagraphStyle(obj, fonts) {
    return decodeObject(obj, paragraphStyleKeys, fonts);
}
function decodeStyle(obj, fonts) {
    return decodeObject(obj, styleKeys, fonts);
}
function encodeParagraphStyle(obj, fonts) {
    return encodeObject(obj, paragraphStyleKeys, fonts);
}
function encodeStyle(obj, fonts) {
    return encodeObject(obj, styleKeys, fonts);
}
function deduplicateValues(base, runs, keys) {
    if (!runs.length) return;
    var _loop_1 = function(key) {
        var value = runs[0].style[key];
        if (value !== undefined) {
            var identical = false;
            if (Array.isArray(value)) identical = runs.every(function(r) {
                return arraysEqual(r.style[key], value);
            });
            else if (typeof value === 'object') identical = runs.every(function(r) {
                return objectsEqual(r.style[key], value);
            });
            else identical = runs.every(function(r) {
                return r.style[key] === value;
            });
            if (identical) base[key] = value;
        }
        var styleValue = base[key];
        if (styleValue !== undefined) for(var _i = 0, runs_1 = runs; _i < runs_1.length; _i++){
            var r1 = runs_1[_i];
            var same = false;
            if (Array.isArray(value)) same = arraysEqual(r1.style[key], value);
            else if (typeof value === 'object') same = objectsEqual(r1.style[key], value);
            else same = r1.style[key] === value;
            if (same) delete r1.style[key];
        }
    };
    for(var _i1 = 0, keys_3 = keys; _i1 < keys_3.length; _i1++){
        var key = keys_3[_i1];
        _loop_1(key);
    }
    if (runs.every(function(x) {
        return Object.keys(x.style).length === 0;
    })) runs.length = 0;
}
function decodeEngineData(engineData) {
    var _a, _b, _c, _d, _e, _f;
    var engineDict = engineData.EngineDict;
    var resourceDict = engineData.ResourceDict;
    var fonts = resourceDict.FontSet.map(function(f) {
        return {
            name: f.Name,
            script: f.Script,
            type: f.FontType,
            synthetic: f.Synthetic
        };
    });
    var result = {
        text: engineDict.Editor.Text.replace(/\r/g, '\n').replace(/\n$/, ''),
        antiAlias: (_a = antialias[engineDict.AntiAlias]) !== null && _a !== void 0 ? _a : 'smooth',
        useFractionalGlyphWidths: !!engineDict.UseFractionalGlyphWidths,
        superscriptSize: resourceDict.SuperscriptSize,
        superscriptPosition: resourceDict.SuperscriptPosition,
        subscriptSize: resourceDict.SubscriptSize,
        subscriptPosition: resourceDict.SubscriptPosition,
        smallCapSize: resourceDict.SmallCapSize
    };
    // shape
    var photoshop = (_f = (_e = (_d = (_c = (_b = engineDict.Rendered) === null || _b === void 0 ? void 0 : _b.Shapes) === null || _c === void 0 ? void 0 : _c.Children) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.Cookie) === null || _f === void 0 ? void 0 : _f.Photoshop;
    if (photoshop) {
        result.shapeType = photoshop.ShapeType === 1 ? 'box' : 'point';
        if (photoshop.PointBase) result.pointBase = photoshop.PointBase;
        if (photoshop.BoxBounds) result.boxBounds = photoshop.BoxBounds;
    }
    // paragraph style
    // const theNormalParagraphSheet = resourceDict.TheNormalParagraphSheet;
    // const paragraphSheetSet = resourceDict.ParagraphSheetSet;
    // const paragraphProperties = paragraphSheetSet[theNormalParagraphSheet].Properties;
    var paragraphRun = engineData.EngineDict.ParagraphRun;
    result.paragraphStyle = {
    }; // decodeParagraphStyle(paragraphProperties, fonts);
    result.paragraphStyleRuns = [];
    for(var i = 0; i < paragraphRun.RunArray.length; i++){
        var run_1 = paragraphRun.RunArray[i];
        var length_1 = paragraphRun.RunLengthArray[i];
        var style = decodeParagraphStyle(run_1.ParagraphSheet.Properties, fonts);
        // const adjustments = {
        //   axis: run.Adjustments.Axis,
        //   xy: run.Adjustments.XY,
        // };
        result.paragraphStyleRuns.push({
            length: length_1,
            style: style /*, adjustments*/ 
        });
    }
    deduplicateValues(result.paragraphStyle, result.paragraphStyleRuns, paragraphStyleKeys);
    if (!result.paragraphStyleRuns.length) delete result.paragraphStyleRuns;
    // style
    // const theNormalStyleSheet = resourceDict.TheNormalStyleSheet;
    // const styleSheetSet = resourceDict.StyleSheetSet;
    // const styleSheetData = styleSheetSet[theNormalStyleSheet].StyleSheetData;
    var styleRun = engineData.EngineDict.StyleRun;
    result.style = {
    }; // decodeStyle(styleSheetData, fonts);
    result.styleRuns = [];
    for(var i = 0; i < styleRun.RunArray.length; i++){
        var length_2 = styleRun.RunLengthArray[i];
        var style = decodeStyle(styleRun.RunArray[i].StyleSheet.StyleSheetData, fonts);
        result.styleRuns.push({
            length: length_2,
            style: style
        });
    }
    deduplicateValues(result.style, result.styleRuns, styleKeys);
    if (!result.styleRuns.length) delete result.styleRuns;
    return result;
}
exports.decodeEngineData = decodeEngineData;
function encodeEngineData(data) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var text = (data.text || '').replace(/\r?\n/g, '\r') + "\r";
    var fonts = [
        {
            name: 'AdobeInvisFont',
            script: 0,
            type: 0,
            synthetic: 0
        }, 
    ];
    var defFont = ((_a = data.style) === null || _a === void 0 ? void 0 : _a.font) || ((_c = (_b = data.styleRuns) === null || _b === void 0 ? void 0 : _b.find(function(s) {
        return s.style.font;
    })) === null || _c === void 0 ? void 0 : _c.style.font) || defaultFont;
    var paragraphRunArray = [];
    var paragraphRunLengthArray = [];
    if (data.paragraphStyleRuns && data.paragraphStyleRuns.length) for(var _i = 0, _o = data.paragraphStyleRuns; _i < _o.length; _i++){
        var run_2 = _o[_i];
        paragraphRunLengthArray.push(run_2.length);
        paragraphRunArray.push({
            ParagraphSheet: {
                DefaultStyleSheet: 0,
                Properties: encodeParagraphStyle(__assign(__assign(__assign({
                }, defaultParagraphStyle), data.paragraphStyle), run_2.style), fonts)
            },
            Adjustments: {
                Axis: [
                    1,
                    0,
                    1
                ],
                XY: [
                    0,
                    0
                ]
            }
        });
    }
    else {
        for(var i = 0, last = 0; i < text.length; i++)if (text.charCodeAt(i) === 13) {
            paragraphRunLengthArray.push(i - last + 1);
            paragraphRunArray.push({
                ParagraphSheet: {
                    DefaultStyleSheet: 0,
                    Properties: encodeParagraphStyle(__assign(__assign({
                    }, defaultParagraphStyle), data.paragraphStyle), fonts)
                },
                Adjustments: {
                    Axis: [
                        1,
                        0,
                        1
                    ],
                    XY: [
                        0,
                        0
                    ]
                }
            });
            last = i + 1;
        }
    }
    var styleSheetData = encodeStyle(__assign(__assign({
    }, defaultStyle), {
        font: defFont
    }), fonts);
    var styleRuns = data.styleRuns || [
        {
            length: text.length,
            style: data.style || {
            }
        }
    ];
    var styleRunArray = [];
    var styleRunLengthArray = [];
    for(var _p = 0, styleRuns_1 = styleRuns; _p < styleRuns_1.length; _p++){
        var run_3 = styleRuns_1[_p];
        styleRunLengthArray.push(run_3.length);
        styleRunArray.push({
            StyleSheet: {
                StyleSheetData: encodeStyle(__assign(__assign({
                    kerning: 0,
                    autoKerning: true,
                    fillColor: {
                        r: 0,
                        g: 0,
                        b: 0
                    }
                }, data.style), run_3.style), fonts)
            }
        });
    }
    var gridInfo = __assign(__assign({
    }, defaultGridInfo), data.gridInfo);
    var WritingDirection = data.orientation === 'vertical' ? 2 : 0;
    var Procession = data.orientation === 'vertical' ? 1 : 0;
    var ShapeType = data.shapeType === 'box' ? 1 : 0;
    var Photoshop = {
        ShapeType: ShapeType
    };
    if (ShapeType === 0) Photoshop.PointBase = data.pointBase || [
        0,
        0
    ];
    else Photoshop.BoxBounds = data.boxBounds || [
        0,
        0,
        0,
        0
    ];
    // needed for correct order of properties
    Photoshop.Base = {
        ShapeType: ShapeType,
        TransformPoint0: [
            1,
            0
        ],
        TransformPoint1: [
            0,
            1
        ],
        TransformPoint2: [
            0,
            0
        ]
    };
    var defaultResources = {
        KinsokuSet: [
            {
                Name: 'PhotoshopKinsokuHard',
                NoStart: '、。，．・：；？！ー―’”）〕］｝〉》」』】ヽヾゝゞ々ぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮヵヶ゛゜?!)]},.:;℃℉¢％‰',
                NoEnd: '‘“（〔［｛〈《「『【([{￥＄£＠§〒＃',
                Keep: '―‥',
                Hanging: '、。.,'
            },
            {
                Name: 'PhotoshopKinsokuSoft',
                NoStart: '、。，．・：；？！’”）〕］｝〉》」』】ヽヾゝゞ々',
                NoEnd: '‘“（〔［｛〈《「『【',
                Keep: '―‥',
                Hanging: '、。.,'
            }, 
        ],
        MojiKumiSet: [
            {
                InternalName: 'Photoshop6MojiKumiSet1'
            },
            {
                InternalName: 'Photoshop6MojiKumiSet2'
            },
            {
                InternalName: 'Photoshop6MojiKumiSet3'
            },
            {
                InternalName: 'Photoshop6MojiKumiSet4'
            }, 
        ],
        TheNormalStyleSheet: 0,
        TheNormalParagraphSheet: 0,
        ParagraphSheetSet: [
            {
                Name: 'Normal RGB',
                DefaultStyleSheet: 0,
                Properties: encodeParagraphStyle(__assign(__assign({
                }, defaultParagraphStyle), data.paragraphStyle), fonts)
            }, 
        ],
        StyleSheetSet: [
            {
                Name: 'Normal RGB',
                StyleSheetData: styleSheetData
            }, 
        ],
        FontSet: fonts.map(function(f) {
            return {
                Name: f.name,
                Script: f.script || 0,
                FontType: f.type || 0,
                Synthetic: f.synthetic || 0
            };
        }),
        SuperscriptSize: (_d = data.superscriptSize) !== null && _d !== void 0 ? _d : 0.583,
        SuperscriptPosition: (_e = data.superscriptPosition) !== null && _e !== void 0 ? _e : 0.333,
        SubscriptSize: (_f = data.subscriptSize) !== null && _f !== void 0 ? _f : 0.583,
        SubscriptPosition: (_g = data.subscriptPosition) !== null && _g !== void 0 ? _g : 0.333,
        SmallCapSize: (_h = data.smallCapSize) !== null && _h !== void 0 ? _h : 0.7
    };
    var engineData = {
        EngineDict: {
            Editor: {
                Text: text
            },
            ParagraphRun: {
                DefaultRunData: {
                    ParagraphSheet: {
                        DefaultStyleSheet: 0,
                        Properties: {
                        }
                    },
                    Adjustments: {
                        Axis: [
                            1,
                            0,
                            1
                        ],
                        XY: [
                            0,
                            0
                        ]
                    }
                },
                RunArray: paragraphRunArray,
                RunLengthArray: paragraphRunLengthArray,
                IsJoinable: 1
            },
            StyleRun: {
                DefaultRunData: {
                    StyleSheet: {
                        StyleSheetData: {
                        }
                    }
                },
                RunArray: styleRunArray,
                RunLengthArray: styleRunLengthArray,
                IsJoinable: 2
            },
            GridInfo: {
                GridIsOn: !!gridInfo.isOn,
                ShowGrid: !!gridInfo.show,
                GridSize: (_j = gridInfo.size) !== null && _j !== void 0 ? _j : 18,
                GridLeading: (_k = gridInfo.leading) !== null && _k !== void 0 ? _k : 22,
                GridColor: {
                    Type: 1,
                    Values: encodeColor(gridInfo.color)
                },
                GridLeadingFillColor: {
                    Type: 1,
                    Values: encodeColor(gridInfo.color)
                },
                AlignLineHeightToGridFlags: !!gridInfo.alignLineHeightToGridFlags
            },
            AntiAlias: antialias.indexOf((_l = data.antiAlias) !== null && _l !== void 0 ? _l : 'sharp'),
            UseFractionalGlyphWidths: (_m = data.useFractionalGlyphWidths) !== null && _m !== void 0 ? _m : true,
            Rendered: {
                Version: 1,
                Shapes: {
                    WritingDirection: WritingDirection,
                    Children: [
                        {
                            ShapeType: ShapeType,
                            Procession: Procession,
                            Lines: {
                                WritingDirection: WritingDirection,
                                Children: []
                            },
                            Cookie: {
                                Photoshop: Photoshop
                            }
                        }, 
                    ]
                }
            }
        },
        ResourceDict: __assign({
        }, defaultResources),
        DocumentResources: __assign({
        }, defaultResources)
    };
    // console.log('encodeEngineData', require('util').inspect(engineData, false, 99, true));
    return engineData;
}
exports.encodeEngineData = encodeEngineData;

},{}],"dXaWw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SectionDividerType = exports.ColorMode = void 0;
var ColorMode;
(function(ColorMode1) {
    ColorMode1[ColorMode1["Bitmap"] = 0] = "Bitmap";
    ColorMode1[ColorMode1["Grayscale"] = 1] = "Grayscale";
    ColorMode1[ColorMode1["Indexed"] = 2] = "Indexed";
    ColorMode1[ColorMode1["RGB"] = 3] = "RGB";
    ColorMode1[ColorMode1["CMYK"] = 4] = "CMYK";
    ColorMode1[ColorMode1["Multichannel"] = 7] = "Multichannel";
    ColorMode1[ColorMode1["Duotone"] = 8] = "Duotone";
    ColorMode1[ColorMode1["Lab"] = 9] = "Lab";
})(ColorMode = exports.ColorMode || (exports.ColorMode = {
}));
var SectionDividerType;
(function(SectionDividerType1) {
    SectionDividerType1[SectionDividerType1["Other"] = 0] = "Other";
    SectionDividerType1[SectionDividerType1["OpenFolder"] = 1] = "OpenFolder";
    SectionDividerType1[SectionDividerType1["ClosedFolder"] = 2] = "ClosedFolder";
    SectionDividerType1[SectionDividerType1["BoundingSectionDivider"] = 3] = "BoundingSectionDivider";
})(SectionDividerType = exports.SectionDividerType || (exports.SectionDividerType = {
}));

},{}]},["5iWCR"], null, "parcelRequire94c2")

