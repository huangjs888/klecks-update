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
})({"iSzY3":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "1293bae57ac04db4";
module.bundle.HMR_BUNDLE_ID = "946ab3e8c6be8cac";
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

},{}],"jGhu5":[function(require,module,exports) {
module.exports = JSON.parse("{\"switch-ui-left-right\":\"Werkzeuge links / rechts\",\"toggle-show-tools\":\"Werkzeuge Anzeigen/Verbergen\",\"scroll\":\"Scroll\",\"donate\":\"Spenden\",\"home\":\"Home\",\"modal-new-tab\":\"In neuem Tab öffnen\",\"tab-layers\":\"Ebenen\",\"tab-edit\":\"Editieren\",\"tab-file\":\"Datei\",\"tool-brush\":\"Pinsel\",\"tool-paint-bucket\":\"Füllwerkzeug\",\"tool-shape\":\"Form-Werkzeug\",\"tool-text\":\"Text-Werkzeug\",\"tool-hand\":\"Hand-Werkzeug\",\"tool-zoom\":\"Zoom-Werkzeug\",\"tool-undo-redo\":\"Rückgängig / Wiederherstellen\",\"undo\":\"Rückgängig\",\"redo\":\"Wiederherstellen\",\"brush-pen\":\"Stift\",\"brush-blend\":\"Mischpinsel\",\"brush-sketchy\":\"Skizzierer\",\"brush-pixel\":\"Pixel\",\"brush-chemy\":\"Chemy\",\"brush-smudge\":\"Wischfinger\",\"brush-size\":\"Größe\",\"brush-blending\":\"Mischung\",\"brush-toggle-pressure\":\"Drucksensitivität an/aus\",\"brush-lock-alpha\":\"Fixieren\",\"brush-lock-alpha-title\":\"Fixiert Alpha-Kanal der Ebene\",\"brush-pen-circle\":\"Kreis\",\"brush-pen-chalk\":\"Kreide\",\"brush-pen-calligraphy\":\"Kalligraphie\",\"brush-pen-square\":\"Quadrat\",\"brush-sketchy-scale\":\"Ausmaß\",\"brush-pixel-dither\":\"Dither\",\"brush-chemy-fill\":\"Füllen\",\"brush-chemy-stroke\":\"Linie\",\"brush-chemy-mirror-x\":\"Horizontale Symmetrie\",\"brush-chemy-mirror-y\":\"Vertikale Symmetrie\",\"brush-chemy-gradient\":\"Verlauf\",\"brush-eraser-transparent-bg\":\"Transparenter Hintergrund\",\"stabilizer\":\"Stabilisierer\",\"stabilizer-title\":\"Linien-Stabilisierer\",\"eyedropper\":\"Pipette\",\"secondary-color\":\"Sekundäre Farbe\",\"manual-color-input\":\"Manuelle Farbeingabe\",\"mci-hex\":\"Hex\",\"mci-copy\":\"Kopieren\",\"modal-ok\":\"Ok\",\"modal-cancel\":\"Abbrechen\",\"modal-close\":\"Schließen\",\"layers-active-layer\":\"Aktive Ebene\",\"layers-layer\":\"Ebene\",\"layers-copy\":\"Kopie\",\"layers-blending\":\"Modus\",\"layers-new\":\"Neue Ebene\",\"layers-remove\":\"Ebene löschen\",\"layers-duplicate\":\"Ebene duplizieren\",\"layers-merge\":\"Auf untere Ebene reduzieren\",\"layers-rename\":\"Umbenennen\",\"layers-blend-normal\":\"Normal\",\"layers-blend-darken\":\"Abdunkeln\",\"layers-blend-multiply\":\"Multiplizieren\",\"layers-blend-color-burn\":\"Farbig nachbel.\",\"layers-blend-lighten\":\"Aufhellen\",\"layers-blend-screen\":\"Negativ multipl.\",\"layers-blend-color-dodge\":\"Farbig abwedeln\",\"layers-blend-overlay\":\"Überlagern\",\"layers-blend-soft-light\":\"Weiches Licht\",\"layers-blend-hard-light\":\"Hartes Licht\",\"layers-blend-difference\":\"Differenz\",\"layers-blend-exclusion\":\"Ausschluss\",\"layers-blend-hue\":\"Farbton\",\"layers-blend-saturation\":\"Sättigung\",\"layers-blend-color\":\"Farbe\",\"layers-blend-luminosity\":\"Luminanz\",\"layers-rename-title\":\"Ebene umbenennen\",\"layers-rename-name\":\"Name\",\"layers-rename-clear\":\"Namen leeren\",\"layers-rename-sketch\":\"Skizze\",\"layers-rename-colors\":\"Farben\",\"layers-rename-lines\":\"Linien\",\"layers-rename-foreground\":\"Vordergrund\",\"layers-merge-modal-title\":\"Ebene Reduzieren\",\"layers-merge-description\":\"Reduziert gewählte Ebene auf die darunter liegende. Wähle den Mischmodus:\",\"file-no-autosave\":\"Kein Autosave & Cloud-Speicher\",\"file-new\":\"Neu\",\"file-import\":\"Öffnen\",\"file-save\":\"Speichern\",\"file-save-png\":\"PNG speichern\",\"file-save-psd\":\"PSD speichern\",\"file-save-layers\":\"Ebenen speichern\",\"file-copy\":\"Kopieren\",\"file-copy-title\":\"Kopieren in Zwischenablage\",\"file-share\":\"Teilen\",\"file-storage\":\"Browser-Speicher\",\"file-storage-thumb-title\":\"Wiederhergestellt bei Neuladen\",\"file-storage-about\":\"Über Browser-Speicher\",\"file-storage-cant-access\":\"Kein Zugriff\",\"file-storage-empty\":\"Leer\",\"file-storage-store\":\"Speichern\",\"file-storage-clear\":\"Leeren\",\"file-storage-storing\":\"Speichert\",\"file-storage-overwrite\":\"Überschreiben\",\"file-storage-min-ago\":\"vor {x} Min\",\"file-storage-hours-ago\":\"vor {x} h\",\"file-storage-days-ago\":\"vor {x} T\",\"file-storage-month-ago\":\"vor >1 Monat\",\"file-storage-restored\":\"Wiederhergestellt (Browser-Speicher)\",\"file-storage-stored\":\"Gespeichert (Browser-Speicher)\",\"file-storage-failed\":\"Speichern fehlgeschlagen (Browser-Speicher)\",\"file-storage-failed-1\":\"Speichern fehlgeschlagen. Mögliche Gründe:\",\"file-storage-failed-2\":\"Ungenügend Speicherplatz vorhanden\",\"file-storage-failed-3\":\"Speicher deaktiviert in Inkognito-Tab\",\"file-storage-failed-4\":\"Browser unterstützt Speicher nicht\",\"file-storage-failed-clear\":\"Leeren fehlgeschlagen.\",\"file-upload\":\"Hochladen\",\"cleared-layer\":\"Ebene geleert\",\"filled\":\"Ebene gefüllt\",\"new-title\":\"Neues Bild\",\"new-current\":\"Aktuell\",\"new-fit\":\"Passen\",\"new-oversize\":\"Übergroß\",\"new-square\":\"Quadrat\",\"new-landscape\":\"Querformat\",\"new-portrait\":\"Hochformat\",\"new-screen\":\"Bildschirm\",\"new-video\":\"Video\",\"new-din-paper\":\"DIN Papier\",\"new-px\":\"Px\",\"new-ratio\":\"Verhältnis\",\"upload-title\":\"Hochladen auf Imgur\",\"upload-link-notice\":\"Jeder, der den Link zu Deinem hochgeladenen Bild hat, kann es sehen.\",\"upload-name\":\"Titel\",\"upload-title-untitled\":\"Ohne Titel\",\"upload-caption\":\"Beschreibung\",\"upload-tos\":\"Nutzungsbedingungen\",\"upload-tos-2\":\"von imgur.com\",\"upload-submit\":\"Hochladen\",\"upload-uploading\":\"Läd hoch...\",\"upload-success\":\"Erfolgreich Hochgeladen\",\"upload-failed\":\"Fehlgeschlagenes Hochladen\",\"upload-delete\":\"Um dein Bild zu löschen öffne folgenden Link:\",\"cropcopy-title-copy\":\"Kopieren in Zwischenablage\",\"cropcopy-title-crop\":\"zuschneiden\",\"cropcopy-btn-copy\":\"In Zwischenablage\",\"cropcopy-copied\":\"Kopiert.\",\"cropcopy-btn-crop\":\"Zuschneiden\",\"crop-drag-to-crop\":\"Ziehen um zuzuschneiden\",\"filter-crop-extend\":\"Arbeitsfläche\",\"filter-flip\":\"Spiegeln\",\"filter-perspective\":\"Perspektive\",\"filter-resize\":\"Skalieren\",\"filter-rotate\":\"Drehen\",\"filter-transform\":\"Transformier.\",\"filter-bright-contrast\":\"Hell/Kontrast\",\"filter-curves\":\"Kurven\",\"filter-hue-sat\":\"Farbe/Sättig\",\"filter-invert\":\"Umkehren\",\"filter-tilt-shift\":\"Tilt Shift\",\"filter-to-alpha\":\"Zu Alpha\",\"filter-triangle-blur\":\"Weichzeichnen\",\"filter-unsharp-mask\":\"Unscharf mask\",\"filter-crop-title\":\"Arbeitsfläche\",\"filter-crop-description\":\"Schneidet das Bild zu oder erweitert es.\",\"filter-crop-left\":\"Links\",\"filter-crop-right\":\"Rechts\",\"filter-crop-top\":\"Oben\",\"filter-crop-bottom\":\"Unten\",\"filter-crop-rule-thirds\":\"Drittel-Regel\",\"filter-crop-fill\":\"Füllung\",\"filter-flip-title\":\"Spiegeln\",\"filter-flip-description\":\"Spiegelt Ebene oder gesamtes Bild.\",\"filter-flip-horizontal\":\"Horizontal\",\"filter-flip-vertical\":\"Vertikal\",\"filter-flip-image\":\"Bild\",\"filter-flip-layer\":\"Ebene\",\"filter-perspective-title\":\"Perspektive\",\"filter-perspective-description\":\"Transformiert die gewählte Ebene.\",\"filter-perspective-before\":\"Vorher\",\"filter-perspective-after\":\"Danach\",\"filter-resize-title\":\"Skalieren\",\"filter-resize-description\":\"Ändert die Größe des Bildes.\",\"filter-rotate-title\":\"Drehen\",\"filter-rotate-description\":\"Dreht das Bild.\",\"filter-transform-empty\":\"Ebene ist leer.\",\"filter-transform-title\":\"Transformieren\",\"filter-transform-description\":\"Transformiert die gewählte Ebene. Halte Shift für erweiterte Funktionalität.\",\"filter-transform-rotation\":\"Rotation\",\"filter-transform-flip\":\"Spiegel\",\"filter-transform-center\":\"Zentrieren\",\"filter-transform-constrain\":\"Fest\",\"filter-transform-snap\":\"Einrasten\",\"filter-transform-snap-title\":\"Rotation und Position einrasten\",\"filter-bright-contrast-title\":\"Helligkeit / Kontrast\",\"filter-bright-contrast-description\":\"Ändert Helligkeit und Kontrast der gewählten Ebene.\",\"filter-bright-contrast-brightness\":\"Helligkeit\",\"filter-bright-contrast-contrast\":\"Kontrast\",\"filter-curves-title\":\"Kurven\",\"filter-curves-description\":\"Wendet Kurven auf gewählte Ebene an.\",\"filter-curves-all\":\"Alle\",\"filter-hue-sat-title\":\"Farbton / Sättigung\",\"filter-hue-sat-description\":\"Ändert Farbton und Sättigung der gewählten Ebene.\",\"filter-hue-sat-hue\":\"Farbton\",\"filter-hue-sat-saturation\":\"Sättigung\",\"filter-applied\":\"angewendet\",\"filter-tilt-shift-title\":\"Tilt Shift\",\"filter-tilt-shift-description\":\"Wendet Tilt Shift auf gewählte Ebene an.\",\"filter-tilt-shift-blur\":\"Unschärferadius\",\"filter-tilt-shift-gradient\":\"Verlaufsradius\",\"filter-to-alpha-title\":\"Zu Alpha\",\"filter-to-alpha-description\":\"Erzeugt Alphakanal für gewählte Ebene aus:\",\"filter-to-alpha-inverted-lum\":\"Umgekehrte Luminanz\",\"filter-to-alpha-lum\":\"Luminanz\",\"filter-to-alpha-replace\":\"Ersetze RGB\",\"filter-triangle-blur-title\":\"Dreiecksunschärfe\",\"filter-triangle-blur-description\":\"Wendet Dreiecksunschärfe auf gewählte Ebene an.\",\"filter-unsharp-mask-title\":\"Unscharf maskieren\",\"filter-unsharp-mask-description\":\"Schärft die ausgewählte Ebene durch Skalierung der Pixel weg vom Durchschnitt ihrer Nachbarn.\",\"filter-unsharp-mask-strength\":\"Stärke\",\"import-opening\":\"Öffne Datei...\",\"import-title\":\"Datei öffnen\",\"import-too-large\":\"Bild zu groß, es wird verkleinert.\",\"import-btn-as-layer\":\"Als Ebene\",\"import-btn-as-image\":\"Als Bild\",\"import-as-layer-title\":\"Öffne Bild als neue Ebene\",\"import-as-layer-description\":\"Passe die Position des importierten Bildes an.\",\"import-as-layer-limit-reached\":\"Maximale Ebenen erreicht, es wird auf vorhandene Ebene platziert.\",\"import-as-layer-fit\":\"Passen\",\"import-flatten\":\"Reduzieren\",\"import-unsupported-file\":\"Nicht unterstützter Dateityp. Siehe Hilfe für unterstützte Typen.\",\"import-broken-file\":\"Bild konnte nicht geladen werden. Datei könnte beschädigt sein.\",\"import-psd-unsupported\":\"Nicht unterstützte Funktionen. PSD musste auf eine Ebene reduziert werden.\",\"import-psd-limited-support\":\"Begrenzte Unterstützung für PSD. Reduziertes Bild sieht vermutlich korrekter aus.\",\"import-psd-too-large\":\"Bild überschreitet Maximum von {x} x {x} Pixel, kann nicht geöffnet werden.\",\"import-psd-size\":\"Bildgröße\",\"hand-reset\":\"Zurücksetzen\",\"hand-fit\":\"Passen\",\"bucket-tolerance\":\"Toleranz\",\"bucket-sample\":\"Quelle\",\"bucket-sample-title\":\"Von welchen Ebenen wird Farbe gelesen\",\"bucket-sample-all\":\"Alle\",\"bucket-sample-active\":\"Aktiv\",\"bucket-sample-above\":\"Über\",\"bucket-grow\":\"Wachsen\",\"bucket-grow-title\":\"Erweitere gefüllten Bereich (in Pixel)\",\"bucket-contiguous\":\"Benachbart\",\"bucket-contiguous-title\":\"Fülle nur miteinander verbundene Bereiche\",\"shape-stroke\":\"Linie\",\"shape-fill\":\"Füllen\",\"shape-rect\":\"Rechteck\",\"shape-ellipse\":\"Ellipse\",\"shape-line\":\"Linie\",\"shape-line-width\":\"Linienbreite\",\"shape-outwards\":\"Nach Außen\",\"shape-fixed\":\"Fest 1:1\",\"shape-snap\":\"Einrasten\",\"shape-snap-title\":\"45° einrasten\",\"text-instruction\":\"Klicken um Text zu platzieren\",\"text-title\":\"Text Hinzufügen\",\"text-placeholder\":\"Dein Text (mehrzeilig Shift+Enter)\",\"text-color\":\"Farbe\",\"text-size\":\"Größe\",\"text-left\":\"Linksbündig\",\"text-center\":\"Zentriert\",\"text-right\":\"Rechtsbündig\",\"text-italic\":\"Kursiv\",\"text-bold\":\"Fett\",\"save-reminder-title\":\"Ungespeicherter Fortschritt\",\"save-reminder-text\":\"Dein Bild wurde seit {a} Minuten{b} nicht gespeichert. Speichere jetzt um Datenverlust zu vermeiden.\",\"save-reminder-save-psd\":\"Speichere als PSD\",\"save-reminder-psd-layers\":\"PSD merkt sich alle Ebenen.\",\"submit\":\"Senden\",\"submit-title\":\"Bild senden\",\"submit-prompt\":\"Bild senden?\",\"submit-submitting\":\"Läd hoch\",\"embed-init-loading\":\"Lade App\",\"embed-init-waiting\":\"Warten auf Bild\",\"unsaved\":\"Ungespeichert\",\"help\":\"Hilfe\",\"tab-settings\":\"Einstellungen\",\"settings-language\":\"Sprache\",\"settings-preferred-language\":\"Bevorzugte Sprache\",\"settings-language-reload\":\"Aktualisiert mit Neuladen.\",\"licenses\":\"Lizenzen\",\"source-code\":\"Quellcode\",\"auto\":\"Automatisch\",\"zoom-in\":\"Vergrößern\",\"zoom-out\":\"Verkleinern\",\"radius\":\"Radius\",\"constrain-proportions\":\"Festes Seitenverhältnis\",\"width\":\"Breite\",\"height\":\"Höhe\",\"opacity\":\"Deckkraft\",\"red\":\"Rot\",\"green\":\"Grün\",\"blue\":\"Blau\",\"eraser\":\"Radierer\",\"center\":\"Zentrieren\",\"background\":\"Hintergrund\",\"scaling-algorithm\":\"Skalierungsalgorithmus\",\"algorithm-smooth\":\"Glatt\",\"algorithm-pixelated\":\"Pixelig\",\"preview\":\"Vorschau\"}");

},{}]},["iSzY3"], null, "parcelRequire94c2")

