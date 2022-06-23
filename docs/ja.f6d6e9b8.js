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
})({"4ivI8":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "1293bae57ac04db4";
module.bundle.HMR_BUNDLE_ID = "063c552cf6d6e9b8";
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

},{}],"3eSOi":[function(require,module,exports) {
module.exports = JSON.parse("{\"switch-ui-left-right\":\"左右切り替え\",\"toggle-show-tools\":\"表示/非表示\",\"scroll\":\"スクロール\",\"donate\":\"寄付\",\"home\":\"ホーム\",\"modal-new-tab\":\"新しいタブで開く\",\"tab-layers\":\"レイヤー\",\"tab-edit\":\"編集\",\"tab-file\":\"ファイル\",\"tool-brush\":\"ブラシ\",\"tool-paint-bucket\":\"バケツ\",\"tool-shape\":\"図形\",\"tool-text\":\"テキスト\",\"tool-hand\":\"手のひらツール\",\"tool-zoom\":\"ズーム\",\"tool-undo-redo\":\"アンドゥ/リドゥ\",\"undo\":\"アンドゥ\",\"redo\":\"リドゥ\",\"brush-pen\":\"ペン\",\"brush-blend\":\"水彩\",\"brush-sketchy\":\"スケッチ\",\"brush-pixel\":\"ピクセル\",\"brush-chemy\":\"ケミー\",\"brush-smudge\":\"指先ツール\",\"brush-size\":\"サイズ\",\"brush-blending\":\"水分量\",\"brush-toggle-pressure\":\"筆圧\",\"brush-lock-alpha\":\"透明部分\",\"brush-lock-alpha-title\":\"透明部分の保護\",\"brush-pen-circle\":\"円\",\"brush-pen-chalk\":\"チョーク\",\"brush-pen-calligraphy\":\"カリグラフィー\",\"brush-pen-square\":\"角\",\"brush-sketchy-scale\":\"スケール\",\"brush-pixel-dither\":\"ドット\",\"brush-chemy-fill\":\"塗り潰し\",\"brush-chemy-stroke\":\"線\",\"brush-chemy-mirror-x\":\"左右対称\",\"brush-chemy-mirror-y\":\"上下対称\",\"brush-chemy-gradient\":\"グラデーション\",\"brush-eraser-transparent-bg\":\"背景の透明化\",\"stabilizer\":\"手ぶれ補正\",\"stabilizer-title\":\"手ぶれ補正\",\"eyedropper\":\"スポイト\",\"secondary-color\":\"セカンダリーカラー\",\"manual-color-input\":\"数値入力\",\"mci-hex\":\"Hex\",\"mci-copy\":\"コピー\",\"modal-ok\":\"Ok\",\"modal-cancel\":\"キャンセル\",\"modal-close\":\"閉じる\",\"layers-active-layer\":\"アクティブレイヤー\",\"layers-layer\":\"レイヤー\",\"layers-copy\":\"コピー\",\"layers-blending\":\"合成方法\",\"layers-new\":\"新規\",\"layers-remove\":\"削除\",\"layers-duplicate\":\"複製\",\"layers-merge\":\"下のレイヤーと結合\",\"layers-rename\":\"リネーム\",\"layers-blend-normal\":\"通常\",\"layers-blend-darken\":\"比較(暗)\",\"layers-blend-multiply\":\"乗算\",\"layers-blend-color-burn\":\"焼き込み\",\"layers-blend-lighten\":\"比較(明)\",\"layers-blend-screen\":\"スクリーン\",\"layers-blend-color-dodge\":\"覆い焼き\",\"layers-blend-overlay\":\"オーバーレイ\",\"layers-blend-soft-light\":\"ソフトライト\",\"layers-blend-hard-light\":\"ハードライト\",\"layers-blend-difference\":\"差の絶対値\",\"layers-blend-exclusion\":\"除外\",\"layers-blend-hue\":\"色相\",\"layers-blend-saturation\":\"彩度\",\"layers-blend-color\":\"カラー\",\"layers-blend-luminosity\":\"輝度\",\"layers-rename-title\":\"リネーム\",\"layers-rename-name\":\"レイヤー名\",\"layers-rename-clear\":\"クリア\",\"layers-rename-sketch\":\"ラフ\",\"layers-rename-colors\":\"色\",\"layers-rename-lines\":\"線\",\"layers-rename-foreground\":\"上\",\"layers-merge-modal-title\":\"レイヤー結合\",\"layers-merge-description\":\"下のレイヤーと結合します。 合成方法を選択してください。:\",\"file-no-autosave\":\"クラウドに自動保存できません\",\"file-new\":\"新規\",\"file-import\":\"配置\",\"file-save\":\"保存\",\"file-save-png\":\"PNG形式\",\"file-save-psd\":\"PSD形式\",\"file-save-layers\":\"レイヤー\",\"file-copy\":\"コピー\",\"file-copy-title\":\"クリップボードにコピー\",\"file-share\":\"シェア\",\"file-storage\":\"ブラウザストレージ\",\"file-storage-thumb-title\":\"再読み込み時に復元します。\",\"file-storage-about\":\"ブラウザストレージについて\",\"file-storage-cant-access\":\"アクセスできません。\",\"file-storage-empty\":\"空\",\"file-storage-store\":\"保管\",\"file-storage-clear\":\"削除\",\"file-storage-storing\":\"保管中。\",\"file-storage-overwrite\":\"上書き\",\"file-storage-min-ago\":\"{x}分前\",\"file-storage-hours-ago\":\"{x}時間前\",\"file-storage-days-ago\":\"{x}日前\",\"file-storage-month-ago\":\"一ヶ月以上\",\"file-storage-restored\":\"ブラウザストレージから復元しました。\",\"file-storage-stored\":\"ブラウザストレージに保存します。\",\"file-storage-failed\":\"ブラウザストレージへの保存に失敗しました。\",\"file-storage-failed-1\":\"保存に失敗した原因:\",\"file-storage-failed-2\":\"ディスク容量が不足しています。\",\"file-storage-failed-3\":\"シークレットタブのためストレージが使えません。\",\"file-storage-failed-4\":\"このブラウザはストレージをサポートしていません。\",\"file-storage-failed-clear\":\"削除に失敗しました。\",\"file-upload\":\"アップロード\",\"cleared-layer\":\"レイヤーをクリアしました。\",\"filled\":\"Filled\",\"new-title\":\"新規画像\",\"new-current\":\"Current\",\"new-fit\":\"Fit\",\"new-oversize\":\"Oversize\",\"new-square\":\"Square\",\"new-landscape\":\"Landscape\",\"new-portrait\":\"Portrait\",\"new-screen\":\"Screen\",\"new-video\":\"Video\",\"new-din-paper\":\"DIN Paper\",\"new-px\":\"px\",\"new-ratio\":\"縦横比\",\"upload-title\":\"Imgurに投稿\",\"upload-link-notice\":\"アップロードされた画像は、URLを知っている人なら誰でも見ることができます。\",\"upload-name\":\"題名\",\"upload-title-untitled\":\"名称未設定\",\"upload-caption\":\"キャプション\",\"upload-tos\":\"Terms of Service\",\"upload-tos-2\":\"for imgur.com\",\"upload-submit\":\"アップロード\",\"upload-uploading\":\"アップロードしています。\",\"upload-success\":\"アップロードに成功しました。\",\"upload-failed\":\"アップロードに失敗しました。\",\"upload-delete\":\"ここから削除できます:\",\"cropcopy-title-copy\":\"クリップボードにコピー\",\"cropcopy-title-crop\":\"切り取り\",\"cropcopy-btn-copy\":\"コピー\",\"cropcopy-copied\":\"コピーしました。\",\"cropcopy-btn-crop\":\"切り取ります\",\"crop-drag-to-crop\":\"切り取る範囲\",\"filter-crop-extend\":\"切り取り\",\"filter-flip\":\"反転\",\"filter-perspective\":\"パース\",\"filter-resize\":\"リサイズ\",\"filter-rotate\":\"回転\",\"filter-transform\":\"自由変形\",\"filter-bright-contrast\":\"明度\",\"filter-curves\":\"カーブ\",\"filter-hue-sat\":\"色相\",\"filter-invert\":\"ネガポジ\",\"filter-tilt-shift\":\"被写界深度\",\"filter-to-alpha\":\"透明化\",\"filter-triangle-blur\":\"ブラー\",\"filter-unsharp-mask\":\"シャープ\",\"filter-crop-title\":\"切り取り\",\"filter-crop-description\":\"画像のトリミングまたは拡張。\",\"filter-crop-left\":\"左\",\"filter-crop-right\":\"右\",\"filter-crop-top\":\"上\",\"filter-crop-bottom\":\"下\",\"filter-crop-rule-thirds\":\"三分割法\",\"filter-crop-fill\":\"塗り潰し\",\"filter-flip-title\":\"反転\",\"filter-flip-description\":\"レイヤーまたは画像全体を反転します。\",\"filter-flip-horizontal\":\"左右反転\",\"filter-flip-vertical\":\"上下反転\",\"filter-flip-image\":\"画像\",\"filter-flip-layer\":\"レイヤー\",\"filter-perspective-title\":\"パース\",\"filter-perspective-description\":\"選択中のレイヤーを変形します。\",\"filter-perspective-before\":\"ビフォア\",\"filter-perspective-after\":\"アフター\",\"filter-resize-title\":\"リサイズ\",\"filter-resize-description\":\"画像のサイズを変更します。\",\"filter-rotate-title\":\"回転\",\"filter-rotate-description\":\"画像を回転。\",\"filter-transform-empty\":\"レイヤーが空です。\",\"filter-transform-title\":\"自由変形\",\"filter-transform-description\":\"選択中のレイヤーを変形します。シフトキーを押下すると動作が追加されます。\",\"filter-transform-rotation\":\"角度\",\"filter-transform-flip\":\"反転\",\"filter-transform-center\":\"中央\",\"filter-transform-constrain\":\"縦横比\",\"filter-transform-snap\":\"スナップ\",\"filter-transform-snap-title\":\"回転･移動時にスナップします\",\"filter-bright-contrast-title\":\"明度/コントラスト\",\"filter-bright-contrast-description\":\"選択中のレイヤーの明度/コントラストを変更します。\",\"filter-bright-contrast-brightness\":\"明度\",\"filter-bright-contrast-contrast\":\"コントラスト\",\"filter-curves-title\":\"カーブ\",\"filter-curves-description\":\"選択中のレイヤーの色調をカーブで調整します。\",\"filter-curves-all\":\"全て\",\"filter-hue-sat-title\":\"色相/彩度\",\"filter-hue-sat-description\":\"選択中のレイヤーの色相と彩度を変更します。\",\"filter-hue-sat-hue\":\"色相\",\"filter-hue-sat-saturation\":\"彩度\",\"filter-applied\":\"反転しました。\",\"filter-tilt-shift-title\":\"被写界深度\",\"filter-tilt-shift-description\":\"選択中のレイヤーのピントの合う範囲を調整します。\",\"filter-tilt-shift-blur\":\"ぼかし半径\",\"filter-tilt-shift-gradient\":\"グラデーション半径\",\"filter-to-alpha-title\":\"透明化\",\"filter-to-alpha-description\":\"選択中のレイヤーの輝度を透明度に変換します。\",\"filter-to-alpha-inverted-lum\":\"輝度反転\",\"filter-to-alpha-lum\":\"輝度\",\"filter-to-alpha-replace\":\"Replace RGB\",\"filter-triangle-blur-title\":\"ブラー\",\"filter-triangle-blur-description\":\"選択中のレイヤーにぼかしをかけます。\",\"filter-unsharp-mask-title\":\"アンシャープマスク\",\"filter-unsharp-mask-description\":\"選択中のレイヤーの画像をシャープにします。\",\"filter-unsharp-mask-strength\":\"強さ\",\"import-opening\":\"画像を開いています。\",\"import-title\":\"画像の読み込み\",\"import-too-large\":\"画像が大きすぎるため、縮小します。\",\"import-btn-as-layer\":\"レイヤーとして\",\"import-btn-as-image\":\"画像として\",\"import-as-layer-title\":\"新規レイヤーに読み込みます。\",\"import-as-layer-description\":\"画像の位置を調整してください。\",\"import-as-layer-limit-reached\":\"制限枚数を超えました。画像は既存のレイヤーに配置されます。\",\"import-as-layer-fit\":\"フィット\",\"import-flatten\":\"レイヤー結合\",\"import-unsupported-file\":\"サポートされていないファイル形式です。使用可能なファイル形式はヘルプを参照してください。\",\"import-broken-file\":\"画像の読み込みに失敗しました。ファイルが破損している可能性があります。\",\"import-psd-unsupported\":\"サポートされていない形式です。\",\"import-psd-limited-support\":\"PSDのサポートは限定的です。結合すれば正しく表示されるかもしれません。\",\"import-psd-too-large\":\"画像が {x} x {x} ピクセルを超えているためインポートできません。\",\"import-psd-size\":\"画像のサイズ\",\"hand-reset\":\"リセット\",\"hand-fit\":\"フィット\",\"bucket-tolerance\":\"許容範囲\",\"bucket-sample\":\"参照\",\"bucket-sample-title\":\"どのレイヤーを参照するか\",\"bucket-sample-all\":\"全て\",\"bucket-sample-active\":\"現在\",\"bucket-sample-above\":\"一つ上\",\"bucket-grow\":\"拡張\",\"bucket-grow-title\":\"塗り潰しの範囲を拡張（単位ピクセル）\",\"bucket-contiguous\":\"隣接\",\"bucket-contiguous-title\":\"隣接した領域のみを塗り潰します\",\"shape-stroke\":\"ストローク\",\"shape-fill\":\"塗り潰し\",\"shape-rect\":\"矩形\",\"shape-ellipse\":\"楕円\",\"shape-line\":\"線\",\"shape-line-width\":\"線の幅\",\"shape-outwards\":\"外方向\",\"shape-fixed\":\"縦横1:1\",\"shape-snap\":\"スナップ\",\"shape-snap-title\":\"45°の角度にスナップします\",\"text-instruction\":\"クリックしてテキストを入力。\",\"text-title\":\"テキストを追加\",\"text-placeholder\":\"テキストを入力（複数行はShift + Enter）\",\"text-color\":\"カラー\",\"text-size\":\"サイズ\",\"text-left\":\"左寄せ\",\"text-center\":\"中央\",\"text-right\":\"右寄せ\",\"text-italic\":\"斜体\",\"text-bold\":\"太字\",\"save-reminder-title\":\"作業を保存していません。\",\"save-reminder-text\":\"画像は{a}分間{b}保存されませんでした。作業を失わないように今すぐ保存してください。\",\"save-reminder-save-psd\":\"PSDで保存。\",\"save-reminder-psd-layers\":\"PSDは全レイヤーを保持します。\",\"submit\":\"送信\",\"submit-title\":\"画像を送信します。\",\"submit-prompt\":\"画像を送信しても宜しいですか?\",\"submit-submitting\":\"処理しています。\",\"embed-init-loading\":\"Loading app\",\"embed-init-waiting\":\"画像を読み込んでいます。\",\"unsaved\":\"未保存\",\"help\":\"ヘルプ\",\"tab-settings\":\"設定\",\"settings-language\":\"言語\",\"settings-preferred-language\":\"優先言語\",\"settings-language-reload\":\"リロード後に更新されます。\",\"licenses\":\"Licenses\",\"source-code\":\"Source Code\",\"auto\":\"自動検出\",\"zoom-in\":\"拡大\",\"zoom-out\":\"縮小\",\"radius\":\"半径\",\"constrain-proportions\":\"縦横比を保持\",\"width\":\"幅\",\"height\":\"高さ\",\"opacity\":\"不透明度\",\"red\":\"赤\",\"green\":\"緑\",\"blue\":\"青\",\"eraser\":\"消しゴム\",\"center\":\"中央\",\"background\":\"背景\",\"scaling-algorithm\":\"スケーリング\",\"algorithm-smooth\":\"スムーズ\",\"algorithm-pixelated\":\"ピクセル化\",\"preview\":\"プレビュー\"}");

},{}]},["4ivI8"], null, "parcelRequire94c2")

