// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/_sliderHeader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flexOrderSlider = flexOrderSlider;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function flexOrderSlider(sliderId) {
  var transitionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.3s linear';
  var interval = arguments.length > 2 ? arguments[2] : undefined;
  var slider = document.querySelector(sliderId);
  var btnNext = slider.querySelector('.slider__btn_next');
  var btnPrev = slider.querySelector('.slider__btn_prev');
  var sliderCont = slider.querySelector('.slider__container');
  var cards = sliderCont.querySelectorAll('.slider__card');
  var dotsContainer = slider.querySelector('.slider__controls');
  var dots = dotsContainer.querySelectorAll('.slider__controls_dot');
  var oneSlideDist = cards[0].offsetWidth;
  var transitionInterval = parseFloat(transitionType) * 1000;
  var intervalId;

  // задаём текущую позицию  равной 0 - как и индекс (в массиве) первой карточки
  var currentPosition = 0;
  cards.forEach(function (card, index) {
    card.style = "order: ".concat(index);
  });
  function setFlexOrder() {
    for (var i = currentPosition; i < cards.length; i++) {
      cards[i].style = "order: ".concat(i - currentPosition);
    }
    for (var _i = 0; _i < currentPosition; _i++) {
      cards[_i].style = "order: ".concat(cards.length - currentPosition + _i);
    }
  }
  function slideToNext() {
    currentPosition++;
    if (currentPosition > cards.length - 1) {
      currentPosition = 0;
    }
    sliderCont.style.transition = transitionType;
    oneSlideDist = cards[0].offsetWidth;
    sliderCont.style.transform = "translate3d(".concat(-oneSlideDist, "px, 0, 0)");
    sliderCont.addEventListener('transitionend', function () {
      // console.log(`.slider__container transitionend`);

      sliderCont.style.transition = 'none';
      sliderCont.style.transform = 'none';

      // задаём flex order для карточек
      setFlexOrder();
      btnNext.addEventListener('click', slideToNext, {
        once: true
      });
    }, {
      once: true
    });
    updateDots();

    // console.log(currentPosition);
  }
  function slideToPrev() {
    currentPosition--;
    if (currentPosition < 0) {
      currentPosition = cards.length - 1;
    }

    // моментально с transition = 'none' смещаем слайдер на показ второго слайда, вставляя перед ним предыдущий с помощью переназначения order
    // Нельзя убирать - если убрать - глюк кпри повторном нажатии на btnPrev из-за ненужной в данный момент transition 0.3s
    sliderCont.style.transition = 'none';

    // задаём flex order для карточек (точно также как и в btnNext.onclick)
    setFlexOrder();
    oneSlideDist = cards[0].offsetWidth;
    sliderCont.style.transform = "translate3d(".concat(-oneSlideDist, "px, 0, 0)");

    // после выполнения предыдущего кода присваиваем transition и обнуляем transform, сдвигая к нужному нам слайду
    setTimeout(function () {
      sliderCont.style.transition = transitionType;
      sliderCont.style.transform = "none";
      sliderCont.addEventListener('transitionend', function () {
        btnPrev.addEventListener('click', slideToPrev, {
          once: true
        });
        // console.log(`.slider__container transitionend - prev`);
      }, {
        once: true
      });
    }, 0);
    updateDots();

    // console.log(currentPosition);
    // console.log('slideToPrev')
  }
  btnNext.addEventListener('click', slideToNext, {
    once: true
  });
  btnPrev.addEventListener('click', slideToPrev, {
    once: true
  });

  // only for devices with Mouse. NOT touchscreens
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    stopAutoslideWhileBtn(btnNext);
    stopAutoslideWhileBtn(btnPrev);
    stopAutoslideWhileBtn(dotsContainer);
  }
  autoSlide(interval);
  function stopAutoslideWhileBtn(btn) {
    btn.addEventListener('mouseenter', function () {
      // console.log('mouseenter');
      clearInterval(intervalId);
    });
    btn.addEventListener('mouseleave', function () {
      // console.log('mouseleave');
      autoSlide(interval);
    });
  }
  function autoSlide(interval) {
    if (interval <= transitionInterval) {
      interval = transitionInterval * 1.1;
    }
    if (interval) {
      intervalId = setInterval(function () {
        return slideToNext();
      }, interval);
    }
  }

  // !! Make function to generate dots dynamic

  // dotsSwitch_sequentional();

  dotsSwitch_Manual_OnlyFor_3();
  function updateDots() {
    var _iterator = _createForOfIteratorHelper(dots),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dot = _step.value;
        dot.classList.remove('active');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    dots[currentPosition].classList.add('active');
  }

  // function dotsSwitch_withGlitch() {
  //     dots.forEach((dot, i) => {
  //         dot.onclick = () => {
  //             if (i < currentPosition) {
  //                 const tmp = currentPosition;
  //                 for (let j = 0; j < tmp - i; j++) {
  //                     // console.log(j)
  //                     slideToPrev();
  //                 }
  //             }
  //             if (i > currentPosition) {
  //                 const tmp = currentPosition;
  //                 for (let j = 0; j < i - tmp; j++) {
  //                     // console.log(j)
  //                     slideToNext();
  //                 }
  //             }
  //         }
  //     });
  // }

  function dotsSwitch_sequentional() {
    dots.forEach(function (dot, i) {
      dot.onclick = function () {
        if (i < currentPosition) {
          var tmp = currentPosition;
          slideToPrev();
          for (var j = 0; j < tmp - i - 1; j++) {
            setTimeout(function () {
              return slideToPrev();
            }, transitionInterval * 1.1);
          }
        }
        if (i > currentPosition) {
          var _tmp = currentPosition;
          slideToNext();
          for (var _j = 0; _j < i - _tmp - 1; _j++) {
            // console.log(j)
            setTimeout(function () {
              return slideToNext();
            }, transitionInterval * 1.1);
          }
        }
      };
    });
  }
  function dotsSwitch_Manual_OnlyFor_3() {
    dots.forEach(function (dot, i) {
      dot.onclick = function () {
        // можно отрефакторить в цикл
        if (i === 0 && currentPosition === 1 || i === 1 && currentPosition === 2 || i === 2 && currentPosition === 0) {
          slideToPrev();
        }
        if (i === 1 && currentPosition === 0 || i === 2 && currentPosition === 1 || i === 0 && currentPosition === 2) {
          slideToNext();
        }
        // if (i === 2 && (currentPosition === 0)) {
        //     slideToNext();
        //     setTimeout(() => slideToNext(), transitionInterval * 1.1);
        // }
      };
    });
  }

  // // Slide with Keyboard Buttons - OK
  // function slideWithButtons(e) {
  //     // console.log(e);
  //     if (e.key === 'ArrowRight') {
  //         slideToNext();
  //     } else if (e.key === 'ArrowLeft') {
  //         slideToPrev();
  //     }
  // }

  // function slowerSlideWithButtons(e) {
  //     slideWithButtons(e);
  //     setTimeout(() => {
  //         document.addEventListener('keydown', slowerSlideWithButtons, { once: true });
  //     }, 1500);
  // }

  // document.addEventListener('keydown', slowerSlideWithButtons, { once: true });
}

// flexOrderSlider('.slider', '2s ease-in-out');
},{}],"js/_menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleMobileMenu = toggleMobileMenu;
function toggleMobileMenu() {
  var menu = document.querySelector('.nav');
  var menuIcon = document.querySelector('.top-header__icon-menu');
  var menuCloseIcon = menu.querySelector('.nav_mob__icon-close-menu');
  var logo = menu.querySelector('.logo a');
  menuIcon.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    menu.classList.toggle('nav_mob');

    // запрещаем прокрутку страницы при открытии меню
    // на iPhone всё равно можно прокрутить страницу
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
  };

  // отключаем моб. меню при ресайзе до десктопа
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
      menu.classList.remove('nav_mob');
    }
  });

  // закрытие меню
  menu.onclick = function (e) {
    // console.log(e.target);
    // if (window.innerWidth < 1024 && (e.target === menu || e.target === menuCloseIcon || e.target === logo)) {
    if (window.innerWidth < 1024) {
      menu.classList.toggle('nav_mob');
      // возобновляем возможность прокрутки страницы при закрытии меню
      document.body.style.overflow = 'visible';
    }
  };

  // устанавливаем задерку анимации (чтобы не писать вручную через CSS)
  var menuItems = document.querySelectorAll('.nav-list__item');
  menuItems.forEach(function (menuItem, i) {
    // console.log(menuItem);
    // console.log((0 + (i / 15)) + 's');
    menuItem.style.animationDelay = 0 + i / 12 + 's';
  });
}
},{}],"js/_button_up.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonUp = buttonUp;
function buttonUp() {
  var scrolledCoeff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.1;
  var btnUp = document.getElementById('btn_up');
  // console.log(btnUp);

  if (window.scrollY > scrolledCoeff * window.innerHeight) {
    btnUp.style.visibility = 'visible';
    btnUp.style.opacity = 1;
  }
  document.onscroll = function (event) {
    if (window.scrollY < scrolledCoeff * window.innerHeight) {
      btnUp.style.visibility = 'hidden';
      btnUp.style.opacity = 0;
    } else {
      btnUp.style.visibility = 'visible';
      btnUp.style.opacity = 1;
    }
  };
  btnUp.onclick = function () {
    // console.log('btnUp');
    // window.scrollTo(0, 0) - просто координаты без указания типа перемотки (моментально или плавно)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
}
},{}],"js/_linksJustScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linksJustScroll = linksJustScroll;
/**
 * 
 * @param  {...any} parents HTML elements id, class etc., that are parents of tag a - i.e. links
 */
function linksJustScroll() {
  for (var _len = arguments.length, parents = new Array(_len), _key = 0; _key < _len; _key++) {
    parents[_key] = arguments[_key];
  }
  parents.forEach(function (el) {
    var parent = document.querySelector(el);
    // console.log(parent);

    var links = parent.querySelectorAll('a');
    links.forEach(function (link) {
      // console.log(link); console.log(link.innerHTML); console.log(link.href);

      link.onclick = function (event) {
        event.preventDefault();

        // find out to where link leads
        var id = link.href.slice(link.href.indexOf('#') + 1);
        // console.log(id);

        // scroll to linked element
        document.getElementById(id).scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      };
    });
  });
}
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _sliderHeader = require("./_sliderHeader");
var _menu = require("./_menu");
var _button_up = require("./_button_up");
var _linksJustScroll = require("./_linksJustScroll");
// flexOrderSlider('.slider', '2s ease-in-out');
(0, _sliderHeader.flexOrderSlider)('.slider', '2s ease-in-out', 6000);
(0, _menu.toggleMobileMenu)();
(0, _button_up.buttonUp)();
(0, _linksJustScroll.linksJustScroll)('.nav', '.logo_mob');
},{"./_sliderHeader":"js/_sliderHeader.js","./_menu":"js/_menu.js","./_button_up":"js/_button_up.js","./_linksJustScroll":"js/_linksJustScroll.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63738" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)