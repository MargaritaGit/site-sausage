parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kTlJ":[function(require,module,exports) {
"use strict";function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw c}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.3s linear",o=arguments.length>2?arguments[2]:void 0,i=document.querySelector(t),c=i.querySelector(".slider__btn_next"),a=i.querySelector(".slider__btn_prev"),l=i.querySelector(".slider__container"),s=l.querySelectorAll(".slider__card"),f=i.querySelector(".slider__controls"),u=f.querySelectorAll(".slider__controls_dot"),d=s[0].offsetWidth,y=1e3*parseFloat(r),v=0;function h(){for(var e=v;e<s.length;e++)s[e].style="order: ".concat(e-v);for(var t=0;t<v;t++)s[t].style="order: ".concat(s.length-v+t)}function m(){++v>s.length-1&&(v=0),l.style.transition=r,d=s[0].offsetWidth,l.style.transform="translate3d(".concat(-d,"px, 0, 0)"),l.addEventListener("transitionend",function(){l.style.transition="none",l.style.transform="none",h(),c.addEventListener("click",m,{once:!0})},{once:!0}),g()}function p(){--v<0&&(v=s.length-1),l.style.transition="none",h(),d=s[0].offsetWidth,l.style.transform="translate3d(".concat(-d,"px, 0, 0)"),setTimeout(function(){l.style.transition=r,l.style.transform="none",l.addEventListener("transitionend",function(){a.addEventListener("click",p,{once:!0})},{once:!0})},0),g()}function _(e){e.addEventListener("mouseenter",function(){clearInterval(n)}),e.addEventListener("mouseleave",function(){b(o)})}function b(e){e<=y&&(e=1.1*y),e&&(n=setInterval(function(){return m()},e))}function g(){var t,n=e(u);try{for(n.s();!(t=n.n()).done;){t.value.classList.remove("active")}}catch(r){n.e(r)}finally{n.f()}u[v].classList.add("active")}s.forEach(function(e,t){e.style="order: ".concat(t)}),c.addEventListener("click",m,{once:!0}),a.addEventListener("click",p,{once:!0}),matchMedia("(hover: hover) and (pointer: fine)").matches&&(_(c),_(a),_(f)),b(o),u.forEach(function(e,t){e.onclick=function(){(0===t&&1===v||1===t&&2===v||2===t&&0===v)&&p(),(1===t&&0===v||2===t&&1===v||0===t&&2===v)&&m()}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.flexOrderSlider=r;
},{}],"c0sm":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector(".nav"),o=document.querySelector(".top-header__icon-menu");e.querySelector(".nav_mob__icon-close-menu"),e.querySelector(".logo a");o.onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),e.classList.toggle("nav_mob"),document.body.style.overflow="hidden",document.body.style.height="100vh"},window.addEventListener("resize",function(){window.innerWidth>=1024&&e.classList.remove("nav_mob")}),e.onclick=function(o){window.innerWidth<1024&&(e.classList.toggle("nav_mob"),document.body.style.overflow="visible")},e.querySelectorAll(".nav-list__item").forEach(function(e,o){e.style.animationDelay=0+o/12+"s"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toggleMobileMenu=e;
},{}],"oMjt":[function(require,module,exports) {
"use strict";function i(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.1,t=document.getElementById("btn_up");window.scrollY>i*window.innerHeight&&(t.style.visibility="visible",t.style.opacity=1),document.onscroll=function(e){window.scrollY<i*window.innerHeight?(t.style.visibility="hidden",t.style.opacity=0):(t.style.visibility="visible",t.style.opacity=1)},t.onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.buttonUp=i;
},{}],"QDAB":[function(require,module,exports) {
"use strict";function e(){document.querySelectorAll("a").forEach(function(e){e.onclick=function(o){var t;if(e.href.includes("".concat(window.location.href,"#"))){o.preventDefault();var n=e.href.slice(e.href.indexOf("#")+1);null===(t=document.getElementById(n))||void 0===t||t.scrollIntoView({block:"start",behavior:"smooth"})}}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.linksOnPageJustScroll=e;
},{}],"JeaQ":[function(require,module,exports) {
"use strict";function t(t){var e=document.querySelector(".products__content"),r=e.querySelectorAll(".products__line"),n=e.querySelectorAll(".products__item_image-cont"),o=e.querySelectorAll(".products__item_info");r.forEach(function(t){return t.classList.add("hidden")}),n.forEach(function(e){e.style.transition=t}),o.forEach(function(e){return e.style.transition=t});var c=new IntersectionObserver(function(t){t.forEach(function(t){t.isIntersecting?(t.intersectionRatio<.15&&t.target.classList.add("hidden"),t.intersectionRatio>.2&&t.target.classList.remove("hidden")):t.target.classList.add("hidden")})},{threshold:[0,.15,.2]});r.forEach(function(t){return c.observe(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.productsFlyInEffect=t;
},{}],"TwDD":[function(require,module,exports) {
"use strict";function t(t,e){var n,r;return function(){for(var o=this,u=arguments.length,i=new Array(u),l=0;l<u;l++)i[l]=arguments[l];n?r=i:(t.apply(this,i),n=!0,function u(){setTimeout(function(){r?(t.apply(o,r),r=null,u()):n=!1},e)}())}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.throttle=t;
},{}],"LQC0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.myRellax=o;var e=require("./_throtlingDecorator");function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,f=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){f=!0,l=e},f:function(){try{i||null==n.return||n.return()}finally{if(f)throw l}}}}function r(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(){var r;function n(e){var r,n=t(e);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.style.transform="translate3d(".concat(-Math.sin(1.55*o.horSpeedCoeff/30)*window.scrollY*1.4,"px, ").concat(-Math.sin(1.55*o.speedCoeff/10)*window.scrollY*.4,"px, 0)")}}catch(a){n.e(a)}finally{n.f()}}function o(){var e,n=t(r);try{for(n.s();!(e=n.n()).done;){var o=e.value;o.style.transition="0.0333s linear",o.style.willChange="transform",window.innerWidth<=425?(o.getAttribute("data-rellax-mobile-speed")?o.speedCoeff=o.getAttribute("data-rellax-mobile-speed"):o.speedCoeff=o.getAttribute("data-rellax-speed"),o.getAttribute("data-rellax-mobile-horizontal-speed")?o.horSpeedCoeff=o.getAttribute("data-rellax-mobile-horizontal-speed"):o.horSpeedCoeff=o.getAttribute("data-rellax-horizontal-speed")):(o.getAttribute("data-rellax-speed")&&(o.speedCoeff=o.getAttribute("data-rellax-speed")),o.getAttribute("data-rellax-horizontal-speed")&&(o.horSpeedCoeff=o.getAttribute("data-rellax-horizontal-speed"))),"string"!=typeof o.speedCoeff&&(o.speedCoeff=0),"string"!=typeof o.horSpeedCoeff&&(o.horSpeedCoeff=0)}}catch(a){n.e(a)}finally{n.f()}}!function(e){r=document.querySelectorAll(e),o(),window.addEventListener("scroll",function(){return n(r)}),window.addEventListener("load",function(){return n(r)},{once:!0})}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:".rellax, .horellax"),n=(0,e.throttle)(n,33),window.addEventListener("resize",o)}
},{"./_throtlingDecorator":"TwDD"}],"thDm":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];Object.defineProperty(exports,"__esModule",{value:!0}),exports.Parallax=void 0;var e=exports.Parallax=i();function i(){return function t(e,i,n){function o(r,a){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(s)return s(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){return o(e[r][1][t]||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,r,a=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),l=1;l<arguments.length;l++){for(var h in i=Object(arguments[l]))o.call(i,h)&&(a[h]=i[h]);if(n){r=n(i);for(var u=0;u<r.length;u++)s.call(i,r[u])&&(a[r[u]]=i[r[u]])}}return a}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,s,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,s=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=s-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function r(){f&&m&&(f=!1,m.length?p=m.concat(p):v=-1,p.length&&a())}function a(){if(!f){var t=s(r);f=!0;for(var e=p.length;e;){for(m=p,p=[];++v<e;)m&&m[v].run();v=-1,e=p.length}m=null,f=!1,function(t){if(c===clearTimeout)return clearTimeout(t);if((c===o||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}(t)}}function l(t,e){this.fun=t,this.array=e}function h(){}var u,c,d=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{c="function"==typeof clearTimeout?clearTimeout:o}catch(t){c=o}}();var m,p=[],f=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];p.push(new l(t,e)),1!==p.length||f||s(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=h,d.addListener=h,d.once=h,d.off=h,d.removeListener=h,d.removeAllListeners=h,d.emit=h,d.prependListener=h,d.prependOnceListener=h,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},{}],4:[function(e,i,n){(function(t){for(var n=e("performance-now"),o="undefined"==typeof window?t:window,s=["moz","webkit"],r="AnimationFrame",a=o["request"+r],l=o["cancel"+r]||o["cancelRequest"+r],h=0;!a&&h<s.length;h++)a=o[s[h]+"Request"+r],l=o[s[h]+"Cancel"+r]||o[s[h]+"CancelRequest"+r];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=function(){if(!t[i].cancelled)try{t[i].callback(u)}catch(t){setTimeout(function(){throw t},0)}},i=0;i<t.length;i++)e()},Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}i.exports=function(t){return a.call(o,t)},i.exports.cancel=function(){l.apply(o,arguments)},i.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=t("raf"),s=t("object-assign"),r={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return r.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){r.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),r.css(t,"transform-style","preserve-3d"),r.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,s=null,a=null,l=0,h=r.vendors.length;l<h;l++)if(null!==r.vendors[l]?(s=r.vendors[l][0]+"transform",a=r.vendors[l][1]+"Transform"):(s="transform",a="transform"),void 0!==e.style[a]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,m=!1;document.body||(m=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[a]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(e).getPropertyValue(s))&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),m&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return o},css:function(t,e,i){var n=r.propertyCache[e];if(!n)for(var o=0,s=r.vendors.length;o<s;o++)if(n=null!==r.vendors[o]?r.camelCase(r.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){r.propertyCache[e]=n;break}t.style[n]=i}},a={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},l=function(){function t(e,i){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.element=e;var n={calibrateX:r.data(this.element,"calibrate-x"),calibrateY:r.data(this.element,"calibrate-y"),invertX:r.data(this.element,"invert-x"),invertY:r.data(this.element,"invert-y"),limitX:r.data(this.element,"limit-x"),limitY:r.data(this.element,"limit-y"),scalarX:r.data(this.element,"scalar-x"),scalarY:r.data(this.element,"scalar-y"),frictionX:r.data(this.element,"friction-x"),frictionY:r.data(this.element,"friction-y"),originX:r.data(this.element,"origin-x"),originY:r.data(this.element,"origin-y"),pointerEvents:r.data(this.element,"pointer-events"),precision:r.data(this.element,"precision"),relativeInput:r.data(this.element,"relative-input"),clipRelativeInput:r.data(this.element,"clip-relative-input"),hoverOnly:r.data(this.element,"hover-only"),inputElement:document.querySelector(r.data(this.element,"input-element")),selector:r.data(this.element,"selector")};for(var o in n)null===n[o]&&delete n[o];s(this,a,n,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return n(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=r.transformSupport("2D"),this.transform3DSupport=r.transformSupport("3D")),this.transform3DSupport&&r.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&r.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=r.data(e,"depth")||0;this.depthsX.push(r.data(e,"depth-x")||i),this.depthsY.push(r.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=o(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),o.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?r.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?r.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=r.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=r.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],s=this.depthsX[i],a=this.depthsY[i],l=this.velocityX*(s*(this.invertX?-1:1)),h=this.velocityY*(a*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=o(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=l},{"object-assign":1,raf:4}]},{},[5])(5)}
},{}],"LVYG":[function(require,module,exports) {
"use strict";function e(){var e,t=document.querySelector(".whereToBuy__btn"),o=document.querySelector(".whereToBuy__cards");t.onclick=function(){if(o.classList.contains("whereToBuy__cards_unfold"))return console.log("has"),void o.classList.remove("whereToBuy__cards_unfold");o.style.transition="unset",o.style.height="fit-content",e=o.offsetHeight,console.log(e),o.style.height=null,o.style.transition="height 0.5s",setTimeout(function(){o.style.height="".concat(1*e,"px"),o.addEventListener("transitionend",function(){o.style.height=null,o.classList.toggle("whereToBuy__cards_unfold")},{once:!0})},0)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.unfoldElement=e;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=require("./_sliderHeader"),r=require("./_menu"),t=require("./_button_up"),n=require("./_linksJustScroll"),o=require("./_products_fx"),a=require("./_myRellaxAnalog"),i=require("./_parallax_my_edit"),l=require("./_unfoldElement");function u(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=c(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function c(e,r){if(e){if("string"==typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,r):void 0}}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}if(document.querySelector(":root").style="--screenHeight: ".concat(window.outerHeight,"px"),(0,e.flexOrderSlider)(".slider","2s ease-in-out",8e3),(0,r.toggleMobileMenu)(),(0,t.buttonUp)(),(0,n.linksOnPageJustScroll)(),(0,o.productsFlyInEffect)("transform 0.65s ease-in-out, opacity 0.65s ease-in-out"),(0,a.myRellax)(),matchMedia("(hover: hover) and (pointer: fine)").matches){var s,d=document.querySelectorAll(".products__float"),y=u(d);try{for(y.s();!(s=y.n()).done;){var m=s.value;new i.Parallax(m)}}catch(h){y.e(h)}finally{y.f()}}else console.log(!1,"matchMedia('(hover: hover) and (pointer: fine)').matches");(0,l.unfoldElement)();
},{"./_sliderHeader":"kTlJ","./_menu":"c0sm","./_button_up":"oMjt","./_linksJustScroll":"QDAB","./_products_fx":"JeaQ","./_myRellaxAnalog":"LQC0","./_parallax_my_edit":"thDm","./_unfoldElement":"LVYG"}]},{},["QvaY"], null)