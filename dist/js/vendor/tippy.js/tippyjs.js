(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["vendor/tippy.js/tippyjs"],{

/***/ "./node_modules/tippy.js/dist/tippy.all.js":
/*!*************************************************!*\
  !*** ./node_modules/tippy.js/dist/tippy.all.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
* Tippy.js v2.6.0
* (c) 2017-2018 atomiks
* MIT
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var styles = ".tippy-touch{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{max-width:350px;-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[data-html]{max-width:96%;max-width:calc(100% - 20px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 90%;transform-origin:0 90%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,25%);transform:scale(6) translate(-50%,25%);opacity:1}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,25%);transform:scale(1) translate(-50%,25%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(90deg);transform:translateY(0) rotateX(90deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -90%;transform-origin:0 -90%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,-125%);transform:scale(6) translate(-50%,-125%);opacity:1}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,-125%);transform:scale(1) translate(-50%,-125%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-90deg);transform:translateY(0) rotateX(-90deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:100% 0;transform-origin:100% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(40%,-50%);transform:scale(6) translate(40%,-50%);opacity:1}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(40%,-50%);transform:scale(1.5) translate(40%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-90deg);transform:translateX(0) rotateY(-90deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-100% 0;transform-origin:-100% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-140%,-50%);transform:scale(6) translate(-140%,-50%);opacity:1}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(-140%,-50%);transform:scale(1.5) translate(-140%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(90deg);transform:translateX(0) rotateY(90deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-animatefill] .tippy-content{transition:-webkit-clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98),-webkit-clip-path cubic-bezier(.46,.1,.52,.98)}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:26%;left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:\"\";float:left;padding-top:100%}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(100% 100% at 50% 50%);clip-path:ellipse(100% 100% at 50% 50%)}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(5% 50% at 50% 50%);clip-path:ellipse(5% 50% at 50% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 0 50%);clip-path:ellipse(135% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 0 50%);clip-path:ellipse(40% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 100% 50%);clip-path:ellipse(135% 100% at 100% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 100% 50%);clip-path:ellipse(40% 100% at 100% 50%)}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}";

var version = "2.6.0";

var isBrowser = typeof window !== 'undefined';

var isIE = isBrowser && /MSIE |Trident\//.test(navigator.userAgent);

var browser = {};

if (isBrowser) {
  browser.supported = 'requestAnimationFrame' in window;
  browser.supportsTouch = 'ontouchstart' in window;
  browser.usingTouch = false;
  browser.dynamicInputDetection = true;
  browser.iOS = /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream;
  browser.onUserInputChange = function () {};
}

/**
 * Selector constants used for grabbing elements
 */
var selectors = {
  POPPER: '.tippy-popper',
  TOOLTIP: '.tippy-tooltip',
  CONTENT: '.tippy-content',
  BACKDROP: '.tippy-backdrop',
  ARROW: '.tippy-arrow',
  ROUND_ARROW: '.tippy-roundarrow',
  REFERENCE: '[data-tippy]'
};

var defaults = {
  placement: 'top',
  livePlacement: true,
  trigger: 'mouseenter focus',
  animation: 'shift-away',
  html: false,
  animateFill: true,
  arrow: false,
  delay: [0, 20],
  duration: [350, 300],
  interactive: false,
  interactiveBorder: 2,
  theme: 'dark',
  size: 'regular',
  distance: 10,
  offset: 0,
  hideOnClick: true,
  multiple: false,
  followCursor: false,
  inertia: false,
  updateDuration: 350,
  sticky: false,
  appendTo: function appendTo() {
    return document.body;
  },
  zIndex: 9999,
  touchHold: false,
  performance: false,
  dynamicTitle: false,
  flip: true,
  flipBehavior: 'flip',
  arrowType: 'sharp',
  arrowTransform: '',
  maxWidth: '',
  target: null,
  allowTitleHTML: true,
  popperOptions: {},
  createPopperInstanceOnInit: false,
  onShow: function onShow() {},
  onShown: function onShown() {},
  onHide: function onHide() {},
  onHidden: function onHidden() {}
};

/**
 * The keys of the defaults object for reducing down into a new object
 * Used in `getIndividualOptions()`
 */
var defaultsKeys = browser.supported && Object.keys(defaults);

/**
 * Determines if a value is an object literal
 * @param {*} value
 * @return {Boolean}
 */
function isObjectLiteral(value) {
  return {}.toString.call(value) === '[object Object]';
}

/**
 * Ponyfill for Array.from
 * @param {*} value
 * @return {Array}
 */
function toArray(value) {
  return [].slice.call(value);
}

/**
 * Returns an array of elements based on the selector input
 * @param {String|Element|Element[]|NodeList|Object} selector
 * @return {Element[]}
 */
function getArrayOfElements(selector) {
  if (selector instanceof Element || isObjectLiteral(selector)) {
    return [selector];
  }

  if (selector instanceof NodeList) {
    return toArray(selector);
  }

  if (Array.isArray(selector)) {
    return selector;
  }

  try {
    return toArray(document.querySelectorAll(selector));
  } catch (_) {
    return [];
  }
}

/**
 * Polyfills needed props/methods for a virtual reference object
 * NOTE: in v3.0 this will be pure
 * @param {Object} reference
 */
function polyfillVirtualReferenceProps(reference) {
  reference.refObj = true;
  reference.attributes = reference.attributes || {};
  reference.setAttribute = function (key, val) {
    reference.attributes[key] = val;
  };
  reference.getAttribute = function (key) {
    return reference.attributes[key];
  };
  reference.removeAttribute = function (key) {
    delete reference.attributes[key];
  };
  reference.hasAttribute = function (key) {
    return key in reference.attributes;
  };
  reference.addEventListener = function () {};
  reference.removeEventListener = function () {};
  reference.classList = {
    classNames: {},
    add: function add(key) {
      return reference.classList.classNames[key] = true;
    },
    remove: function remove(key) {
      delete reference.classList.classNames[key];
      return true;
    },
    contains: function contains(key) {
      return key in reference.classList.classNames;
    }
  };
}

/**
 * Returns the supported prefixed property - only `webkit` is needed, `moz`, `ms` and `o` are obsolete
 * @param {String} property
 * @return {String} - browser supported prefixed property
 */
function prefix(property) {
  var prefixes = ['', 'webkit'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var _prefix = prefixes[i];
    var prefixedProp = _prefix ? _prefix + upperProp : property;
    if (typeof document.body.style[prefixedProp] !== 'undefined') {
      return prefixedProp;
    }
  }

  return null;
}

/**
 * Creates a div element
 * @return {Element}
 */
function div() {
  return document.createElement('div');
}

/**
 * Creates a popper element then returns it
 * @param {Number} id - the popper id
 * @param {String} title - the tooltip's `title` attribute
 * @param {Object} options - individual options
 * @return {Element} - the popper element
 */
function createPopperElement(id, title, options) {
  var popper = div();
  popper.setAttribute('class', 'tippy-popper');
  popper.setAttribute('role', 'tooltip');
  popper.setAttribute('id', 'tippy-' + id);
  popper.style.zIndex = options.zIndex;
  popper.style.maxWidth = options.maxWidth;

  var tooltip = div();
  tooltip.setAttribute('class', 'tippy-tooltip');
  tooltip.setAttribute('data-size', options.size);
  tooltip.setAttribute('data-animation', options.animation);
  tooltip.setAttribute('data-state', 'hidden');
  options.theme.split(' ').forEach(function (t) {
    tooltip.classList.add(t + '-theme');
  });

  var content = div();
  content.setAttribute('class', 'tippy-content');

  if (options.arrow) {
    var arrow = div();
    arrow.style[prefix('transform')] = options.arrowTransform;

    if (options.arrowType === 'round') {
      arrow.classList.add('tippy-roundarrow');
      arrow.innerHTML = '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>';
    } else {
      arrow.classList.add('tippy-arrow');
    }

    tooltip.appendChild(arrow);
  }

  if (options.animateFill) {
    // Create animateFill circle element for animation
    tooltip.setAttribute('data-animatefill', '');
    var backdrop = div();
    backdrop.classList.add('tippy-backdrop');
    backdrop.setAttribute('data-state', 'hidden');
    tooltip.appendChild(backdrop);
  }

  if (options.inertia) {
    // Change transition timing function cubic bezier
    tooltip.setAttribute('data-inertia', '');
  }

  if (options.interactive) {
    tooltip.setAttribute('data-interactive', '');
  }

  var html = options.html;
  if (html) {
    var templateId = void 0;

    if (html instanceof Element) {
      content.appendChild(html);
      templateId = '#' + (html.id || 'tippy-html-template');
    } else {
      // trick linters: https://github.com/atomiks/tippyjs/issues/197
      content[ true && 'innerHTML'] = document.querySelector(html)[ true && 'innerHTML'];
      templateId = html;
    }

    popper.setAttribute('data-html', '');
    tooltip.setAttribute('data-template-id', templateId);

    if (options.interactive) {
      popper.setAttribute('tabindex', '-1');
    }
  } else {
    content[options.allowTitleHTML ? 'innerHTML' : 'textContent'] = title;
  }

  tooltip.appendChild(content);
  popper.appendChild(tooltip);

  return popper;
}

/**
 * Creates a trigger by adding the necessary event listeners to the reference element
 * @param {String} eventType - the custom event specified in the `trigger` setting
 * @param {Element} reference
 * @param {Object} handlers - the handlers for each event
 * @param {Object} options
 * @return {Array} - array of listener objects
 */
function createTrigger(eventType, reference, handlers, options) {
  var onTrigger = handlers.onTrigger,
      onMouseLeave = handlers.onMouseLeave,
      onBlur = handlers.onBlur,
      onDelegateShow = handlers.onDelegateShow,
      onDelegateHide = handlers.onDelegateHide;

  var listeners = [];

  if (eventType === 'manual') return listeners;

  var on = function on(eventType, handler) {
    reference.addEventListener(eventType, handler);
    listeners.push({ event: eventType, handler: handler });
  };

  if (!options.target) {
    on(eventType, onTrigger);

    if (browser.supportsTouch && options.touchHold) {
      on('touchstart', onTrigger);
      on('touchend', onMouseLeave);
    }
    if (eventType === 'mouseenter') {
      on('mouseleave', onMouseLeave);
    }
    if (eventType === 'focus') {
      on(isIE ? 'focusout' : 'blur', onBlur);
    }
  } else {
    if (browser.supportsTouch && options.touchHold) {
      on('touchstart', onDelegateShow);
      on('touchend', onDelegateHide);
    }
    if (eventType === 'mouseenter') {
      on('mouseover', onDelegateShow);
      on('mouseout', onDelegateHide);
    }
    if (eventType === 'focus') {
      on('focusin', onDelegateShow);
      on('focusout', onDelegateHide);
    }
    if (eventType === 'click') {
      on('click', onDelegateShow);
    }
  }

  return listeners;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Returns an object of settings to override global settings
 * @param {Element} reference
 * @param {Object} instanceOptions
 * @return {Object} - individual options
 */
function getIndividualOptions(reference, instanceOptions) {
  var options = defaultsKeys.reduce(function (acc, key) {
    var val = reference.getAttribute('data-tippy-' + key.toLowerCase()) || instanceOptions[key];

    // Convert strings to booleans
    if (val === 'false') val = false;
    if (val === 'true') val = true;

    // Convert number strings to true numbers
    if (isFinite(val) && !isNaN(parseFloat(val))) {
      val = parseFloat(val);
    }

    // Convert array strings to actual arrays
    if (key !== 'target' && typeof val === 'string' && val.trim().charAt(0) === '[') {
      val = JSON.parse(val);
    }

    acc[key] = val;

    return acc;
  }, {});

  return _extends({}, instanceOptions, options);
}

/**
 * Evaluates/modifies the options object for appropriate behavior
 * @param {Element|Object} reference
 * @param {Object} options
 * @return {Object} modified/evaluated options
 */
function evaluateOptions(reference, options) {
  // animateFill is disabled if an arrow is true
  if (options.arrow) {
    options.animateFill = false;
  }

  if (options.appendTo && typeof options.appendTo === 'function') {
    options.appendTo = options.appendTo();
  }

  if (typeof options.html === 'function') {
    options.html = options.html(reference);
  }

  return options;
}

/**
 * Returns inner elements of the popper element
 * @param {Element} popper
 * @return {Object}
 */
function getInnerElements(popper) {
  var select = function select(s) {
    return popper.querySelector(s);
  };
  return {
    tooltip: select(selectors.TOOLTIP),
    backdrop: select(selectors.BACKDROP),
    content: select(selectors.CONTENT),
    arrow: select(selectors.ARROW) || select(selectors.ROUND_ARROW)
  };
}

/**
 * Removes the title from an element, setting `data-original-title`
 * appropriately
 * @param {Element} el
 */
function removeTitle(el) {
  var title = el.getAttribute('title');
  // Only set `data-original-title` attr if there is a title
  if (title) {
    el.setAttribute('data-original-title', title);
  }
  el.removeAttribute('title');
}

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.4
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser$1 = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser$1 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser$1 && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser$1 && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser$1 && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE$1(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE$1(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE$1(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE$1(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck$1 = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty$1 = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE$1(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE$1(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE$1()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$1({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$1({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$1({}, side, reference[side]),
      end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$1(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass$1(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : __webpack_require__.g).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/**
 * Triggers document reflow.
 * Use void because some minifiers or engines think simply accessing the property
 * is unnecessary.
 * @param {Element} popper
 */
function reflow(popper) {
  void popper.offsetHeight;
}

/**
 * Wrapper util for popper position updating.
 * Updates the popper's position and invokes the callback on update.
 * Hackish workaround until Popper 2.0's update() becomes sync.
 * @param {Popper} popperInstance
 * @param {Function} callback: to run once popper's position was updated
 * @param {Boolean} updateAlreadyCalled: was scheduleUpdate() already called?
 */
function updatePopperPosition(popperInstance, callback, updateAlreadyCalled) {
  var popper = popperInstance.popper,
      options = popperInstance.options;

  var onCreate = options.onCreate;
  var onUpdate = options.onUpdate;

  options.onCreate = options.onUpdate = function () {
    reflow(popper), callback && callback(), onUpdate();
    options.onCreate = onCreate;
    options.onUpdate = onUpdate;
  };

  if (!updateAlreadyCalled) {
    popperInstance.scheduleUpdate();
  }
}

/**
 * Returns the core placement ('top', 'bottom', 'left', 'right') of a popper
 * @param {Element} popper
 * @return {String}
 */
function getPopperPlacement(popper) {
  return popper.getAttribute('x-placement').replace(/-.+/, '');
}

/**
 * Determines if the mouse's cursor is outside the interactive border
 * @param {MouseEvent} event
 * @param {Element} popper
 * @param {Object} options
 * @return {Boolean}
 */
function cursorIsOutsideInteractiveBorder(event, popper, options) {
  if (!popper.getAttribute('x-placement')) return true;

  var x = event.clientX,
      y = event.clientY;
  var interactiveBorder = options.interactiveBorder,
      distance = options.distance;


  var rect = popper.getBoundingClientRect();
  var placement = getPopperPlacement(popper);
  var borderWithDistance = interactiveBorder + distance;

  var exceeds = {
    top: rect.top - y > interactiveBorder,
    bottom: y - rect.bottom > interactiveBorder,
    left: rect.left - x > interactiveBorder,
    right: x - rect.right > interactiveBorder
  };

  switch (placement) {
    case 'top':
      exceeds.top = rect.top - y > borderWithDistance;
      break;
    case 'bottom':
      exceeds.bottom = y - rect.bottom > borderWithDistance;
      break;
    case 'left':
      exceeds.left = rect.left - x > borderWithDistance;
      break;
    case 'right':
      exceeds.right = x - rect.right > borderWithDistance;
      break;
  }

  return exceeds.top || exceeds.bottom || exceeds.left || exceeds.right;
}

/**
 * Transforms the `arrowTransform` numbers based on the placement axis
 * @param {String} type 'scale' or 'translate'
 * @param {Number[]} numbers
 * @param {Boolean} isVertical
 * @param {Boolean} isReverse
 * @return {String}
 */
function transformNumbersBasedOnPlacementAxis(type, numbers, isVertical, isReverse) {
  if (!numbers.length) return '';

  var transforms = {
    scale: function () {
      if (numbers.length === 1) {
        return '' + numbers[0];
      } else {
        return isVertical ? numbers[0] + ', ' + numbers[1] : numbers[1] + ', ' + numbers[0];
      }
    }(),
    translate: function () {
      if (numbers.length === 1) {
        return isReverse ? -numbers[0] + 'px' : numbers[0] + 'px';
      } else {
        if (isVertical) {
          return isReverse ? numbers[0] + 'px, ' + -numbers[1] + 'px' : numbers[0] + 'px, ' + numbers[1] + 'px';
        } else {
          return isReverse ? -numbers[1] + 'px, ' + numbers[0] + 'px' : numbers[1] + 'px, ' + numbers[0] + 'px';
        }
      }
    }()
  };

  return transforms[type];
}

/**
 * Transforms the `arrowTransform` x or y axis based on the placement axis
 * @param {String} axis 'X', 'Y', ''
 * @param {Boolean} isVertical
 * @return {String}
 */
function transformAxis(axis, isVertical) {
  if (!axis) return '';
  var map = {
    X: 'Y',
    Y: 'X'
  };
  return isVertical ? axis : map[axis];
}

/**
 * Computes and applies the necessary arrow transform
 * @param {Element} popper
 * @param {Element} arrow
 * @param {String} arrowTransform
 */
function computeArrowTransform(popper, arrow, arrowTransform) {
  var placement = getPopperPlacement(popper);
  var isVertical = placement === 'top' || placement === 'bottom';
  var isReverse = placement === 'right' || placement === 'bottom';

  var getAxis = function getAxis(re) {
    var match = arrowTransform.match(re);
    return match ? match[1] : '';
  };

  var getNumbers = function getNumbers(re) {
    var match = arrowTransform.match(re);
    return match ? match[1].split(',').map(parseFloat) : [];
  };

  var re = {
    translate: /translateX?Y?\(([^)]+)\)/,
    scale: /scaleX?Y?\(([^)]+)\)/
  };

  var matches = {
    translate: {
      axis: getAxis(/translate([XY])/),
      numbers: getNumbers(re.translate)
    },
    scale: {
      axis: getAxis(/scale([XY])/),
      numbers: getNumbers(re.scale)
    }
  };

  var computedTransform = arrowTransform.replace(re.translate, 'translate' + transformAxis(matches.translate.axis, isVertical) + '(' + transformNumbersBasedOnPlacementAxis('translate', matches.translate.numbers, isVertical, isReverse) + ')').replace(re.scale, 'scale' + transformAxis(matches.scale.axis, isVertical) + '(' + transformNumbersBasedOnPlacementAxis('scale', matches.scale.numbers, isVertical, isReverse) + ')');

  arrow.style[prefix('transform')] = computedTransform;
}

/**
 * Returns the distance taking into account the default distance due to
 * the transform: translate setting in CSS
 * @param {Number} distance
 * @return {String}
 */
function getOffsetDistanceInPx(distance) {
  return -(distance - defaults.distance) + 'px';
}

var matches = {};

if (isBrowser) {
  var e = Element.prototype;
  matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s);
    var i = matches.length;
    while (--i >= 0 && matches.item(i) !== this) {} // eslint-disable-line no-empty
    return i > -1;
  };
}

var matches$1 = matches;

/**
 * Ponyfill to get the closest parent element
 * @param {Element} element - child of parent to be returned
 * @param {String} parentSelector - selector to match the parent if found
 * @return {Element}
 */
function closest(element, parentSelector) {
  var fn = Element.prototype.closest || function (selector) {
    var el = this;
    while (el) {
      if (matches$1.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
  };

  return fn.call(element, parentSelector);
}

/**
 * Returns the value taking into account the value being either a number or array
 * @param {Number|Array} value
 * @param {Number} index
 * @return {Number}
 */
function getValue(value, index) {
  return Array.isArray(value) ? value[index] : value;
}

/**
 * Sets the visibility state of an element for transition to begin
 * @param {Element[]} els - array of elements
 * @param {String} type - 'visible' or 'hidden'
 */
function setVisibilityState(els, type) {
  els.forEach(function (el) {
    if (!el) return;
    el.setAttribute('data-state', type);
  });
}

/**
 * Sets the transition property to each element
 * @param {Element[]} els - Array of elements
 * @param {String} value
 */
function applyTransitionDuration(els, value) {
  els.filter(Boolean).forEach(function (el) {
    el.style[prefix('transitionDuration')] = value + 'ms';
  });
}

/**
 * Focuses an element while preventing a scroll jump if it's not entirely within the viewport
 * @param {Element} el
 */
function focus(el) {
  var x = window.scrollX || window.pageXOffset;
  var y = window.scrollY || window.pageYOffset;
  el.focus();
  scroll(x, y);
}

var key = {};
var store = function store(data) {
  return function (k) {
    return k === key && data;
  };
};

var Tippy = function () {
  function Tippy(config) {
    classCallCheck(this, Tippy);

    for (var _key in config) {
      this[_key] = config[_key];
    }

    this.state = {
      destroyed: false,
      visible: false,
      enabled: true
    };

    this._ = store({
      mutationObservers: []
    });
  }

  /**
   * Enables the tooltip to allow it to show or hide
   * @memberof Tippy
   * @public
   */


  createClass(Tippy, [{
    key: 'enable',
    value: function enable() {
      this.state.enabled = true;
    }

    /**
     * Disables the tooltip from showing or hiding, but does not destroy it
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.state.enabled = false;
    }

    /**
     * Shows the tooltip
     * @param {Number} duration in milliseconds
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'show',
    value: function show(duration) {
      var _this = this;

      if (this.state.destroyed || !this.state.enabled) return;

      var popper = this.popper,
          reference = this.reference,
          options = this.options;

      var _getInnerElements = getInnerElements(popper),
          tooltip = _getInnerElements.tooltip,
          backdrop = _getInnerElements.backdrop,
          content = _getInnerElements.content;

      // If the `dynamicTitle` option is true, the instance is allowed
      // to be created with an empty title. Make sure that the tooltip
      // content is not empty before showing it


      if (options.dynamicTitle && !reference.getAttribute('data-original-title')) {
        return;
      }

      // Do not show tooltip if reference contains 'disabled' attribute. FF fix for #221
      if (reference.hasAttribute('disabled')) return;

      // Destroy tooltip if the reference element is no longer on the DOM
      if (!reference.refObj && !document.documentElement.contains(reference)) {
        this.destroy();
        return;
      }

      options.onShow.call(popper, this);

      duration = getValue(duration !== undefined ? duration : options.duration, 0);

      // Prevent a transition when popper changes position
      applyTransitionDuration([popper, tooltip, backdrop], 0);

      popper.style.visibility = 'visible';
      this.state.visible = true;

      _mount.call(this, function () {
        if (!_this.state.visible) return;

        if (!_hasFollowCursorBehavior.call(_this)) {
          // FIX: Arrow will sometimes not be positioned correctly. Force another update.
          _this.popperInstance.scheduleUpdate();
        }

        // Set initial position near the cursor
        if (_hasFollowCursorBehavior.call(_this)) {
          _this.popperInstance.disableEventListeners();
          var delay = getValue(options.delay, 0);
          var lastTriggerEvent = _this._(key).lastTriggerEvent;
          if (lastTriggerEvent) {
            _this._(key).followCursorListener(delay && _this._(key).lastMouseMoveEvent ? _this._(key).lastMouseMoveEvent : lastTriggerEvent);
          }
        }

        // Re-apply transition durations
        applyTransitionDuration([tooltip, backdrop, backdrop ? content : null], duration);

        if (backdrop) {
          getComputedStyle(backdrop)[prefix('transform')];
        }

        if (options.interactive) {
          reference.classList.add('tippy-active');
        }

        if (options.sticky) {
          _makeSticky.call(_this);
        }

        setVisibilityState([tooltip, backdrop], 'visible');

        _onTransitionEnd.call(_this, duration, function () {
          if (!options.updateDuration) {
            tooltip.classList.add('tippy-notransition');
          }

          if (options.interactive) {
            focus(popper);
          }

          reference.setAttribute('aria-describedby', 'tippy-' + _this.id);

          options.onShown.call(popper, _this);
        });
      });
    }

    /**
     * Hides the tooltip
     * @param {Number} duration in milliseconds
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'hide',
    value: function hide(duration) {
      var _this2 = this;

      if (this.state.destroyed || !this.state.enabled) return;

      var popper = this.popper,
          reference = this.reference,
          options = this.options;

      var _getInnerElements2 = getInnerElements(popper),
          tooltip = _getInnerElements2.tooltip,
          backdrop = _getInnerElements2.backdrop,
          content = _getInnerElements2.content;

      options.onHide.call(popper, this);

      duration = getValue(duration !== undefined ? duration : options.duration, 1);

      if (!options.updateDuration) {
        tooltip.classList.remove('tippy-notransition');
      }

      if (options.interactive) {
        reference.classList.remove('tippy-active');
      }

      popper.style.visibility = 'hidden';
      this.state.visible = false;

      applyTransitionDuration([tooltip, backdrop, backdrop ? content : null], duration);

      setVisibilityState([tooltip, backdrop], 'hidden');

      if (options.interactive && options.trigger.indexOf('click') > -1) {
        focus(reference);
      }

      _onTransitionEnd.call(this, duration, function () {
        if (_this2.state.visible || !options.appendTo.contains(popper)) return;

        if (!_this2._(key).isPreparingToShow) {
          document.removeEventListener('mousemove', _this2._(key).followCursorListener);
          _this2._(key).lastMouseMoveEvent = null;
        }

        if (_this2.popperInstance) {
          _this2.popperInstance.disableEventListeners();
        }

        reference.removeAttribute('aria-describedby');

        options.appendTo.removeChild(popper);

        options.onHidden.call(popper, _this2);
      });
    }

    /**
     * Destroys the tooltip instance
     * @param {Boolean} destroyTargetInstances - relevant only when destroying delegates
     * @memberof Tippy
     * @public
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      var destroyTargetInstances = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.state.destroyed) return;

      // Ensure the popper is hidden
      if (this.state.visible) {
        this.hide(0);
      }

      this.listeners.forEach(function (listener) {
        _this3.reference.removeEventListener(listener.event, listener.handler);
      });

      // Restore title
      if (this.title) {
        this.reference.setAttribute('title', this.title);
      }

      delete this.reference._tippy;

      var attributes = ['data-original-title', 'data-tippy', 'data-tippy-delegate'];
      attributes.forEach(function (attr) {
        _this3.reference.removeAttribute(attr);
      });

      if (this.options.target && destroyTargetInstances) {
        toArray(this.reference.querySelectorAll(this.options.target)).forEach(function (child) {
          return child._tippy && child._tippy.destroy();
        });
      }

      if (this.popperInstance) {
        this.popperInstance.destroy();
      }

      this._(key).mutationObservers.forEach(function (observer) {
        observer.disconnect();
      });

      this.state.destroyed = true;
    }
  }]);
  return Tippy;
}();

/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 * Standalone functions to be called with the instance's `this` context to make
 * them truly private and not accessible on the prototype
 */

/**
 * Determines if the tooltip instance has followCursor behavior
 * @return {Boolean}
 * @memberof Tippy
 * @private
 */
function _hasFollowCursorBehavior() {
  var lastTriggerEvent = this._(key).lastTriggerEvent;
  return this.options.followCursor && !browser.usingTouch && lastTriggerEvent && lastTriggerEvent.type !== 'focus';
}

/**
 * Creates the Tippy instance for the child target of the delegate container
 * @param {Event} event
 * @memberof Tippy
 * @private
 */
function _createDelegateChildTippy(event) {
  var targetEl = closest(event.target, this.options.target);
  if (targetEl && !targetEl._tippy) {
    var title = targetEl.getAttribute('title') || this.title;
    if (title) {
      targetEl.setAttribute('title', title);
      tippy(targetEl, _extends({}, this.options, { target: null }));
      _enter.call(targetEl._tippy, event);
    }
  }
}

/**
 * Method used by event listeners to invoke the show method, taking into account delays and
 * the `wait` option
 * @param {Event} event
 * @memberof Tippy
 * @private
 */
function _enter(event) {
  var _this4 = this;

  var options = this.options;


  _clearDelayTimeouts.call(this);

  if (this.state.visible) return;

  // Is a delegate, create Tippy instance for the child target
  if (options.target) {
    _createDelegateChildTippy.call(this, event);
    return;
  }

  this._(key).isPreparingToShow = true;

  if (options.wait) {
    options.wait.call(this.popper, this.show.bind(this), event);
    return;
  }

  // If the tooltip has a delay, we need to be listening to the mousemove as soon as the trigger
  // event is fired so that it's in the correct position upon mount.
  if (_hasFollowCursorBehavior.call(this)) {
    if (!this._(key).followCursorListener) {
      _setFollowCursorListener.call(this);
    }

    var _getInnerElements3 = getInnerElements(this.popper),
        arrow = _getInnerElements3.arrow;

    if (arrow) arrow.style.margin = '0';
    document.addEventListener('mousemove', this._(key).followCursorListener);
  }

  var delay = getValue(options.delay, 0);

  if (delay) {
    this._(key).showTimeout = setTimeout(function () {
      _this4.show();
    }, delay);
  } else {
    this.show();
  }
}

/**
 * Method used by event listeners to invoke the hide method, taking into account delays
 * @memberof Tippy
 * @private
 */
function _leave() {
  var _this5 = this;

  _clearDelayTimeouts.call(this);

  if (!this.state.visible) return;

  this._(key).isPreparingToShow = false;

  var delay = getValue(this.options.delay, 1);

  if (delay) {
    this._(key).hideTimeout = setTimeout(function () {
      if (_this5.state.visible) {
        _this5.hide();
      }
    }, delay);
  } else {
    this.hide();
  }
}

/**
 * Returns relevant listeners for the instance
 * @return {Object} of listeners
 * @memberof Tippy
 * @private
 */
function _getEventListeners() {
  var _this6 = this;

  var onTrigger = function onTrigger(event) {
    if (!_this6.state.enabled) return;

    var shouldStopEvent = browser.supportsTouch && browser.usingTouch && ['mouseenter', 'mouseover', 'focus'].indexOf(event.type) > -1;

    if (shouldStopEvent && _this6.options.touchHold) return;

    _this6._(key).lastTriggerEvent = event;

    // Toggle show/hide when clicking click-triggered tooltips
    if (event.type === 'click' && _this6.options.hideOnClick !== 'persistent' && _this6.state.visible) {
      _leave.call(_this6);
    } else {
      _enter.call(_this6, event);
    }
  };

  var onMouseLeave = function onMouseLeave(event) {
    if (['mouseleave', 'mouseout'].indexOf(event.type) > -1 && browser.supportsTouch && browser.usingTouch && _this6.options.touchHold) return;

    if (_this6.options.interactive) {
      var hide = _leave.bind(_this6);

      var onMouseMove = function onMouseMove(event) {
        var referenceCursorIsOver = closest(event.target, selectors.REFERENCE);
        var cursorIsOverPopper = closest(event.target, selectors.POPPER) === _this6.popper;
        var cursorIsOverReference = referenceCursorIsOver === _this6.reference;

        if (cursorIsOverPopper || cursorIsOverReference) return;

        if (cursorIsOutsideInteractiveBorder(event, _this6.popper, _this6.options)) {
          document.body.removeEventListener('mouseleave', hide);
          document.removeEventListener('mousemove', onMouseMove);

          _leave.call(_this6, onMouseMove);
        }
      };

      document.body.addEventListener('mouseleave', hide);
      document.addEventListener('mousemove', onMouseMove);
      return;
    }

    _leave.call(_this6);
  };

  var onBlur = function onBlur(event) {
    if (event.target !== _this6.reference || browser.usingTouch) return;

    if (_this6.options.interactive) {
      if (!event.relatedTarget) return;
      if (closest(event.relatedTarget, selectors.POPPER)) return;
    }

    _leave.call(_this6);
  };

  var onDelegateShow = function onDelegateShow(event) {
    if (closest(event.target, _this6.options.target)) {
      _enter.call(_this6, event);
    }
  };

  var onDelegateHide = function onDelegateHide(event) {
    if (closest(event.target, _this6.options.target)) {
      _leave.call(_this6);
    }
  };

  return {
    onTrigger: onTrigger,
    onMouseLeave: onMouseLeave,
    onBlur: onBlur,
    onDelegateShow: onDelegateShow,
    onDelegateHide: onDelegateHide
  };
}

/**
 * Creates and returns a new popper instance
 * @return {Popper}
 * @memberof Tippy
 * @private
 */
function _createPopperInstance() {
  var _this7 = this;

  var popper = this.popper,
      reference = this.reference,
      options = this.options;

  var _getInnerElements4 = getInnerElements(popper),
      tooltip = _getInnerElements4.tooltip;

  var popperOptions = options.popperOptions;

  var arrowSelector = options.arrowType === 'round' ? selectors.ROUND_ARROW : selectors.ARROW;
  var arrow = tooltip.querySelector(arrowSelector);

  var config = _extends({
    placement: options.placement
  }, popperOptions || {}, {
    modifiers: _extends({}, popperOptions ? popperOptions.modifiers : {}, {
      arrow: _extends({
        element: arrowSelector
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.arrow : {}),
      flip: _extends({
        enabled: options.flip,
        padding: options.distance + 5 /* 5px from viewport boundary */
        , behavior: options.flipBehavior
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.flip : {}),
      offset: _extends({
        offset: options.offset
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.offset : {})
    }),
    onCreate: function onCreate() {
      tooltip.style[getPopperPlacement(popper)] = getOffsetDistanceInPx(options.distance);

      if (arrow && options.arrowTransform) {
        computeArrowTransform(popper, arrow, options.arrowTransform);
      }
    },
    onUpdate: function onUpdate() {
      var styles = tooltip.style;
      styles.top = '';
      styles.bottom = '';
      styles.left = '';
      styles.right = '';
      styles[getPopperPlacement(popper)] = getOffsetDistanceInPx(options.distance);

      if (arrow && options.arrowTransform) {
        computeArrowTransform(popper, arrow, options.arrowTransform);
      }
    }
  });

  _addMutationObserver.call(this, {
    target: popper,
    callback: function callback() {
      _this7.popperInstance.update();
    },
    options: {
      childList: true,
      subtree: true,
      characterData: true
    }
  });

  return new Popper(reference, popper, config);
}

/**
 * Appends the popper element to the DOM, updating or creating the popper instance
 * @param {Function} callback
 * @memberof Tippy
 * @private
 */
function _mount(callback) {
  var options = this.options;


  if (!this.popperInstance) {
    this.popperInstance = _createPopperInstance.call(this);
    if (!options.livePlacement) {
      this.popperInstance.disableEventListeners();
    }
  } else {
    this.popperInstance.scheduleUpdate();
    if (options.livePlacement && !_hasFollowCursorBehavior.call(this)) {
      this.popperInstance.enableEventListeners();
    }
  }

  // If the instance previously had followCursor behavior, it will be positioned incorrectly
  // if triggered by `focus` afterwards - update the reference back to the real DOM element
  if (!_hasFollowCursorBehavior.call(this)) {
    var _getInnerElements5 = getInnerElements(this.popper),
        arrow = _getInnerElements5.arrow;

    if (arrow) arrow.style.margin = '';
    this.popperInstance.reference = this.reference;
  }

  updatePopperPosition(this.popperInstance, callback, true);

  if (!options.appendTo.contains(this.popper)) {
    options.appendTo.appendChild(this.popper);
  }
}

/**
 * Clears the show and hide delay timeouts
 * @memberof Tippy
 * @private
 */
function _clearDelayTimeouts() {
  var _ref = this._(key),
      showTimeout = _ref.showTimeout,
      hideTimeout = _ref.hideTimeout;

  clearTimeout(showTimeout);
  clearTimeout(hideTimeout);
}

/**
 * Sets the mousemove event listener function for `followCursor` option
 * @memberof Tippy
 * @private
 */
function _setFollowCursorListener() {
  var _this8 = this;

  this._(key).followCursorListener = function (event) {
    var _$lastMouseMoveEvent = _this8._(key).lastMouseMoveEvent = event,
        clientX = _$lastMouseMoveEvent.clientX,
        clientY = _$lastMouseMoveEvent.clientY;

    if (!_this8.popperInstance) return;

    _this8.popperInstance.reference = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          top: clientY,
          left: clientX,
          right: clientX,
          bottom: clientY
        };
      },
      clientWidth: 0,
      clientHeight: 0
    };

    _this8.popperInstance.scheduleUpdate();
  };
}

/**
 * Updates the popper's position on each animation frame
 * @memberof Tippy
 * @private
 */
function _makeSticky() {
  var _this9 = this;

  var applyTransitionDuration$$1 = function applyTransitionDuration$$1() {
    _this9.popper.style[prefix('transitionDuration')] = _this9.options.updateDuration + 'ms';
  };

  var removeTransitionDuration = function removeTransitionDuration() {
    _this9.popper.style[prefix('transitionDuration')] = '';
  };

  var updatePosition = function updatePosition() {
    if (_this9.popperInstance) {
      _this9.popperInstance.update();
    }

    applyTransitionDuration$$1();

    if (_this9.state.visible) {
      requestAnimationFrame(updatePosition);
    } else {
      removeTransitionDuration();
    }
  };

  updatePosition();
}

/**
 * Adds a mutation observer to an element and stores it in the instance
 * @param {Object}
 * @memberof Tippy
 * @private
 */
function _addMutationObserver(_ref2) {
  var target = _ref2.target,
      callback = _ref2.callback,
      options = _ref2.options;

  if (!window.MutationObserver) return;

  var observer = new MutationObserver(callback);
  observer.observe(target, options);

  this._(key).mutationObservers.push(observer);
}

/**
 * Fires the callback functions once the CSS transition ends for `show` and `hide` methods
 * @param {Number} duration
 * @param {Function} callback - callback function to fire once transition completes
 * @memberof Tippy
 * @private
 */
function _onTransitionEnd(duration, callback) {
  // Make callback synchronous if duration is 0
  if (!duration) {
    return callback();
  }

  var _getInnerElements6 = getInnerElements(this.popper),
      tooltip = _getInnerElements6.tooltip;

  var toggleListeners = function toggleListeners(action, listener) {
    if (!listener) return;
    tooltip[action + 'EventListener']('transition' in document.body.style ? 'transitionend' : 'webkitTransitionEnd', listener);
  };

  var listener = function listener(e) {
    if (e.target === tooltip) {
      toggleListeners('remove', listener);
      callback();
    }
  };

  toggleListeners('remove', this._(key).transitionendListener);
  toggleListeners('add', listener);

  this._(key).transitionendListener = listener;
}

var idCounter = 1;

/**
 * Creates tooltips for each reference element
 * @param {Element[]} els
 * @param {Object} config
 * @return {Tippy[]} Array of Tippy instances
 */
function createTooltips(els, config) {
  return els.reduce(function (acc, reference) {
    var id = idCounter;

    var options = evaluateOptions(reference, config.performance ? config : getIndividualOptions(reference, config));

    var title = reference.getAttribute('title');

    // Don't create an instance when:
    // * the `title` attribute is falsy (null or empty string), and
    // * it's not a delegate for tooltips, and
    // * there is no html template specified, and
    // * `dynamicTitle` option is false
    if (!title && !options.target && !options.html && !options.dynamicTitle) {
      return acc;
    }

    // Delegates should be highlighted as different
    reference.setAttribute(options.target ? 'data-tippy-delegate' : 'data-tippy', '');

    removeTitle(reference);

    var popper = createPopperElement(id, title, options);

    var tippy = new Tippy({
      id: id,
      reference: reference,
      popper: popper,
      options: options,
      title: title,
      popperInstance: null
    });

    if (options.createPopperInstanceOnInit) {
      tippy.popperInstance = _createPopperInstance.call(tippy);
      tippy.popperInstance.disableEventListeners();
    }

    var listeners = _getEventListeners.call(tippy);
    tippy.listeners = options.trigger.trim().split(' ').reduce(function (acc, eventType) {
      return acc.concat(createTrigger(eventType, reference, listeners, options));
    }, []);

    // Update tooltip content whenever the title attribute on the reference changes
    if (options.dynamicTitle) {
      _addMutationObserver.call(tippy, {
        target: reference,
        callback: function callback() {
          var _getInnerElements = getInnerElements(popper),
              content = _getInnerElements.content;

          var title = reference.getAttribute('title');
          if (title) {
            content[options.allowTitleHTML ? 'innerHTML' : 'textContent'] = tippy.title = title;
            removeTitle(reference);
          }
        },

        options: {
          attributes: true
        }
      });
    }

    // Shortcuts
    reference._tippy = tippy;
    popper._tippy = tippy;
    popper._reference = reference;

    acc.push(tippy);

    idCounter++;

    return acc;
  }, []);
}

/**
 * Hides all poppers
 * @param {Tippy} excludeTippy - tippy to exclude if needed
 */
function hideAllPoppers(excludeTippy) {
  var poppers = toArray(document.querySelectorAll(selectors.POPPER));

  poppers.forEach(function (popper) {
    var tippy = popper._tippy;
    if (!tippy) return;

    var options = tippy.options;


    if ((options.hideOnClick === true || options.trigger.indexOf('focus') > -1) && (!excludeTippy || popper !== excludeTippy.popper)) {
      tippy.hide();
    }
  });
}

/**
 * Adds the needed event listeners
 */
function bindEventListeners(useCapture) {
  var onDocumentTouch = function onDocumentTouch() {
    if (browser.usingTouch) return;

    browser.usingTouch = true;

    if (browser.iOS) {
      document.body.classList.add('tippy-touch');
    }

    if (browser.dynamicInputDetection && window.performance) {
      document.addEventListener('mousemove', onDocumentMouseMove);
    }

    browser.onUserInputChange('touch');
  };

  var onDocumentMouseMove = function () {
    var time = void 0;

    return function () {
      var now = performance.now();

      // Chrome 60+ is 1 mousemove per animation frame, use 20ms time difference
      if (now - time < 20) {
        browser.usingTouch = false;
        document.removeEventListener('mousemove', onDocumentMouseMove);
        if (!browser.iOS) {
          document.body.classList.remove('tippy-touch');
        }
        browser.onUserInputChange('mouse');
      }

      time = now;
    };
  }();

  var onDocumentClick = function onDocumentClick(event) {
    // Simulated events dispatched on the document
    if (!(event.target instanceof Element)) {
      return hideAllPoppers();
    }

    var reference = closest(event.target, selectors.REFERENCE);
    var popper = closest(event.target, selectors.POPPER);

    if (popper && popper._tippy && popper._tippy.options.interactive) {
      return;
    }

    if (reference && reference._tippy) {
      var options = reference._tippy.options;

      var isClickTrigger = options.trigger.indexOf('click') > -1;
      var isMultiple = options.multiple;

      // Hide all poppers except the one belonging to the element that was clicked
      if (!isMultiple && browser.usingTouch || !isMultiple && isClickTrigger) {
        return hideAllPoppers(reference._tippy);
      }

      if (options.hideOnClick !== true || isClickTrigger) {
        return;
      }
    }

    hideAllPoppers();
  };

  var onWindowBlur = function onWindowBlur() {
    var _document = document,
        el = _document.activeElement;

    if (el && el.blur && matches$1.call(el, selectors.REFERENCE)) {
      el.blur();
    }
  };

  var onWindowResize = function onWindowResize() {
    toArray(document.querySelectorAll(selectors.POPPER)).forEach(function (popper) {
      var tippyInstance = popper._tippy;
      if (tippyInstance && !tippyInstance.options.livePlacement) {
        tippyInstance.popperInstance.scheduleUpdate();
      }
    });
  };

  document.addEventListener('click', onDocumentClick, useCapture);
  document.addEventListener('touchstart', onDocumentTouch);
  window.addEventListener('blur', onWindowBlur);
  window.addEventListener('resize', onWindowResize);

  if (!browser.supportsTouch && (navigator.maxTouchPoints || navigator.msMaxTouchPoints)) {
    document.addEventListener('pointerdown', onDocumentTouch);
  }
}

var eventListenersBound = false;
var useCapture = false;

/**
 * Exported module
 * @param {String|Element|Element[]|NodeList|Object} selector
 * @param {Object} options
 * @param {Boolean} one - create one tooltip
 * @return {Object}
 */
function tippy(selector, options, one) {
  if (browser.supported && !eventListenersBound) {
    bindEventListeners(useCapture);
    eventListenersBound = true;
  }

  if (isObjectLiteral(selector)) {
    polyfillVirtualReferenceProps(selector);
  }

  options = _extends({}, defaults, options);

  var references = getArrayOfElements(selector);
  var firstReference = references[0];

  return {
    selector: selector,
    options: options,
    tooltips: browser.supported ? createTooltips(one && firstReference ? [firstReference] : references, options) : [],
    destroyAll: function destroyAll() {
      this.tooltips.forEach(function (tooltip) {
        return tooltip.destroy();
      });
      this.tooltips = [];
    }
  };
}

tippy.version = version;
tippy.browser = browser;
tippy.defaults = defaults;
tippy.one = function (selector, options) {
  return tippy(selector, options, true).tooltips[0];
};
tippy.disableAnimations = function () {
  defaults.updateDuration = defaults.duration = 0;
  defaults.animateFill = false;
};
tippy.useCapture = function () {
  useCapture = true;
};

/**
 * Injects CSS styles to document head
 * @param {String} css
 */
function injectCSS() {
  var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isBrowser && browser.supported) {
    var head = document.head || document.querySelector('head');
    var style = document.createElement('style');
    style.type = 'text/css';
    head.insertBefore(style, head.firstChild);

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
}

injectCSS(styles);

return tippy;

})));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFNBQVM7QUFDdkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGVBQWU7O0FBRXRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFD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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0JBQWtCLGNBQWM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHFCQUFxQjtBQUN4QiwwQkFBMEIsOENBQThDO0FBQ3hFO0FBQ0E7QUFDQSxPQUFPLCtFQUErRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sOEVBQThFO0FBQ3JGO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRjtBQUN2RixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCLFdBQVcsUUFBUTtBQUNuQixZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsMENBQTBDO0FBQ3JELFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy90aXBweS5qcy9kaXN0L3RpcHB5LmFsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogVGlwcHkuanMgdjIuNi4wXG4qIChjKSAyMDE3LTIwMTggYXRvbWlrc1xuKiBNSVRcbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwudGlwcHkgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBzdHlsZXMgPSBcIi50aXBweS10b3VjaHtjdXJzb3I6cG9pbnRlciFpbXBvcnRhbnR9LnRpcHB5LW5vdHJhbnNpdGlvbnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS50aXBweS1wb3BwZXJ7bWF4LXdpZHRoOjM1MHB4Oy13ZWJraXQtcGVyc3BlY3RpdmU6NzAwcHg7cGVyc3BlY3RpdmU6NzAwcHg7ei1pbmRleDo5OTk5O291dGxpbmU6MDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE2NSwuODQsLjQ0LDEpO3BvaW50ZXItZXZlbnRzOm5vbmU7bGluZS1oZWlnaHQ6MS40fS50aXBweS1wb3BwZXJbZGF0YS1odG1sXXttYXgtd2lkdGg6OTYlO21heC13aWR0aDpjYWxjKDEwMCUgLSAyMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIC50aXBweS1iYWNrZHJvcHtib3JkZXItcmFkaXVzOjQwJSA0MCUgMCAwfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXRvcF0gLnRpcHB5LXJvdW5kYXJyb3d7Ym90dG9tOi04cHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAwO3RyYW5zZm9ybS1vcmlnaW46NTAlIDB9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSAudGlwcHktcm91bmRhcnJvdyBzdmd7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIC50aXBweS1hcnJvd3tib3JkZXItdG9wOjdweCBzb2xpZCAjMzMzO2JvcmRlci1yaWdodDo3cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWxlZnQ6N3B4IHNvbGlkIHRyYW5zcGFyZW50O2JvdHRvbTotN3B4O21hcmdpbjowIDZweDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDA7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIC50aXBweS1iYWNrZHJvcHstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCA5MCU7dHJhbnNmb3JtLW9yaWdpbjowIDkwJX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIC50aXBweS1iYWNrZHJvcFtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDYpIHRyYW5zbGF0ZSgtNTAlLDI1JSk7dHJhbnNmb3JtOnNjYWxlKDYpIHRyYW5zbGF0ZSgtNTAlLDI1JSk7b3BhY2l0eToxfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXRvcF0gLnRpcHB5LWJhY2tkcm9wW2RhdGEtc3RhdGU9aGlkZGVuXXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwyNSUpO3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwyNSUpO29wYWNpdHk6MH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC10b3dhcmRdW2RhdGEtc3RhdGU9dmlzaWJsZV17b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC10b3dhcmRdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTIwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXRvcF0gW2RhdGEtYW5pbWF0aW9uPXBlcnNwZWN0aXZlXXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Ym90dG9tO3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXRvcF0gW2RhdGEtYW5pbWF0aW9uPXBlcnNwZWN0aXZlXVtkYXRhLXN0YXRlPXZpc2libGVde29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGVYKDApfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXRvcF0gW2RhdGEtYW5pbWF0aW9uPXBlcnNwZWN0aXZlXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWCg5MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWCg5MGRlZyl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSBbZGF0YS1hbmltYXRpb249ZmFkZV1bZGF0YS1zdGF0ZT12aXNpYmxlXXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXRvcF0gW2RhdGEtYW5pbWF0aW9uPWZhZGVdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXRvcF0gW2RhdGEtYW5pbWF0aW9uPXNoaWZ0LWF3YXldW2RhdGEtc3RhdGU9dmlzaWJsZV17b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC1hd2F5XVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49dG9wXSBbZGF0YS1hbmltYXRpb249c2NhbGVdW2RhdGEtc3RhdGU9dmlzaWJsZV17b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgxKX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj10b3BdIFtkYXRhLWFuaW1hdGlvbj1zY2FsZV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKDApfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWJvdHRvbV0gLnRpcHB5LWJhY2tkcm9we2JvcmRlci1yYWRpdXM6MCAwIDMwJSAzMCV9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSAudGlwcHktcm91bmRhcnJvd3t0b3A6LThweDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDEwMCU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTAwJX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIC50aXBweS1yb3VuZGFycm93IHN2Z3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSAudGlwcHktYXJyb3d7Ym9yZGVyLWJvdHRvbTo3cHggc29saWQgIzMzMztib3JkZXItcmlnaHQ6N3B4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1sZWZ0OjdweCBzb2xpZCB0cmFuc3BhcmVudDt0b3A6LTdweDttYXJnaW46MCA2cHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAxMDAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDEwMCV9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSAudGlwcHktYmFja2Ryb3B7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgLTkwJTt0cmFuc2Zvcm0tb3JpZ2luOjAgLTkwJX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIC50aXBweS1iYWNrZHJvcFtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDYpIHRyYW5zbGF0ZSgtNTAlLC0xMjUlKTt0cmFuc2Zvcm06c2NhbGUoNikgdHJhbnNsYXRlKC01MCUsLTEyNSUpO29wYWNpdHk6MX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIC50aXBweS1iYWNrZHJvcFtkYXRhLXN0YXRlPWhpZGRlbl17LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlKC01MCUsLTEyNSUpO3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwtMTI1JSk7b3BhY2l0eTowfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWJvdHRvbV0gW2RhdGEtYW5pbWF0aW9uPXNoaWZ0LXRvd2FyZF1bZGF0YS1zdGF0ZT12aXNpYmxlXXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC10b3dhcmRdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIFtkYXRhLWFuaW1hdGlvbj1wZXJzcGVjdGl2ZV17LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnRvcDt0cmFuc2Zvcm0tb3JpZ2luOnRvcH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1ib3R0b21dIFtkYXRhLWFuaW1hdGlvbj1wZXJzcGVjdGl2ZV1bZGF0YS1zdGF0ZT12aXNpYmxlXXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMHB4KSByb3RhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZVgoMCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVYKC05MGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWCgtOTBkZWcpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWJvdHRvbV0gW2RhdGEtYW5pbWF0aW9uPWZhZGVdW2RhdGEtc3RhdGU9dmlzaWJsZV17b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSBbZGF0YS1hbmltYXRpb249ZmFkZV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWJvdHRvbV0gW2RhdGEtYW5pbWF0aW9uPXNoaWZ0LWF3YXldW2RhdGEtc3RhdGU9dmlzaWJsZV17b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49Ym90dG9tXSBbZGF0YS1hbmltYXRpb249c2hpZnQtYXdheV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWJvdHRvbV0gW2RhdGEtYW5pbWF0aW9uPXNjYWxlXVtkYXRhLXN0YXRlPXZpc2libGVde29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpIHNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEwcHgpIHNjYWxlKDEpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWJvdHRvbV0gW2RhdGEtYW5pbWF0aW9uPXNjYWxlXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoMCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gLnRpcHB5LWJhY2tkcm9we2JvcmRlci1yYWRpdXM6NTAlIDAgMCA1MCV9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gLnRpcHB5LXJvdW5kYXJyb3d7cmlnaHQ6LTE2cHg7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjMzLjMzMzMzMzMzJSA1MCU7dHJhbnNmb3JtLW9yaWdpbjozMy4zMzMzMzMzMyUgNTAlfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIC50aXBweS1yb3VuZGFycm93IHN2Z3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSAudGlwcHktYXJyb3d7Ym9yZGVyLWxlZnQ6N3B4IHNvbGlkICMzMzM7Ym9yZGVyLXRvcDo3cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbTo3cHggc29saWQgdHJhbnNwYXJlbnQ7cmlnaHQ6LTdweDttYXJnaW46M3B4IDA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgNTAlO3RyYW5zZm9ybS1vcmlnaW46MCA1MCV9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gLnRpcHB5LWJhY2tkcm9wey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDA7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDB9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gLnRpcHB5LWJhY2tkcm9wW2RhdGEtc3RhdGU9dmlzaWJsZV17LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoNikgdHJhbnNsYXRlKDQwJSwtNTAlKTt0cmFuc2Zvcm06c2NhbGUoNikgdHJhbnNsYXRlKDQwJSwtNTAlKTtvcGFjaXR5OjF9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gLnRpcHB5LWJhY2tkcm9wW2RhdGEtc3RhdGU9aGlkZGVuXXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjUpIHRyYW5zbGF0ZSg0MCUsLTUwJSk7dHJhbnNmb3JtOnNjYWxlKDEuNSkgdHJhbnNsYXRlKDQwJSwtNTAlKTtvcGFjaXR5OjB9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gW2RhdGEtYW5pbWF0aW9uPXNoaWZ0LXRvd2FyZF1bZGF0YS1zdGF0ZT12aXNpYmxlXXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC10b3dhcmRdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIFtkYXRhLWFuaW1hdGlvbj1wZXJzcGVjdGl2ZV17LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0O3RyYW5zZm9ybS1vcmlnaW46cmlnaHR9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gW2RhdGEtYW5pbWF0aW9uPXBlcnNwZWN0aXZlXVtkYXRhLXN0YXRlPXZpc2libGVde29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KSByb3RhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KSByb3RhdGVZKDApfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIFtkYXRhLWFuaW1hdGlvbj1wZXJzcGVjdGl2ZV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHJvdGF0ZVkoLTkwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSByb3RhdGVZKC05MGRlZyl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gW2RhdGEtYW5pbWF0aW9uPWZhZGVdW2RhdGEtc3RhdGU9dmlzaWJsZV17b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSBbZGF0YS1hbmltYXRpb249ZmFkZV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49bGVmdF0gW2RhdGEtYW5pbWF0aW9uPXNoaWZ0LWF3YXldW2RhdGEtc3RhdGU9dmlzaWJsZV17b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMHB4KX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1sZWZ0XSBbZGF0YS1hbmltYXRpb249c2hpZnQtYXdheV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIFtkYXRhLWFuaW1hdGlvbj1zY2FsZV1bZGF0YS1zdGF0ZT12aXNpYmxlXXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTBweCkgc2NhbGUoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTEwcHgpIHNjYWxlKDEpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePWxlZnRdIFtkYXRhLWFuaW1hdGlvbj1zY2FsZV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKDApfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSAudGlwcHktYmFja2Ryb3B7Ym9yZGVyLXJhZGl1czowIDUwJSA1MCUgMH0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1yaWdodF0gLnRpcHB5LXJvdW5kYXJyb3d7bGVmdDotMTZweDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NjYuNjY2NjY2NjYlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjY2LjY2NjY2NjY2JSA1MCV9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIC50aXBweS1yb3VuZGFycm93IHN2Z3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSAudGlwcHktYXJyb3d7Ym9yZGVyLXJpZ2h0OjdweCBzb2xpZCAjMzMzO2JvcmRlci10b3A6N3B4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206N3B4IHNvbGlkIHRyYW5zcGFyZW50O2xlZnQ6LTdweDttYXJnaW46M3B4IDA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjEwMCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46MTAwJSA1MCV9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIC50aXBweS1iYWNrZHJvcHstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46LTEwMCUgMDt0cmFuc2Zvcm0tb3JpZ2luOi0xMDAlIDB9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIC50aXBweS1iYWNrZHJvcFtkYXRhLXN0YXRlPXZpc2libGVdey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDYpIHRyYW5zbGF0ZSgtMTQwJSwtNTAlKTt0cmFuc2Zvcm06c2NhbGUoNikgdHJhbnNsYXRlKC0xNDAlLC01MCUpO29wYWNpdHk6MX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1yaWdodF0gLnRpcHB5LWJhY2tkcm9wW2RhdGEtc3RhdGU9aGlkZGVuXXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjUpIHRyYW5zbGF0ZSgtMTQwJSwtNTAlKTt0cmFuc2Zvcm06c2NhbGUoMS41KSB0cmFuc2xhdGUoLTE0MCUsLTUwJSk7b3BhY2l0eTowfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSBbZGF0YS1hbmltYXRpb249c2hpZnQtdG93YXJkXVtkYXRhLXN0YXRlPXZpc2libGVde29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSBbZGF0YS1hbmltYXRpb249c2hpZnQtdG93YXJkXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIFtkYXRhLWFuaW1hdGlvbj1wZXJzcGVjdGl2ZV17LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQ7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0fS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdW2RhdGEtc3RhdGU9dmlzaWJsZV17b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCkgcm90YXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMHB4KSByb3RhdGVZKDApfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSBbZGF0YS1hbmltYXRpb249cGVyc3BlY3RpdmVdW2RhdGEtc3RhdGU9aGlkZGVuXXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSByb3RhdGVZKDkwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSByb3RhdGVZKDkwZGVnKX0udGlwcHktcG9wcGVyW3gtcGxhY2VtZW50Xj1yaWdodF0gW2RhdGEtYW5pbWF0aW9uPWZhZGVdW2RhdGEtc3RhdGU9dmlzaWJsZV17b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIFtkYXRhLWFuaW1hdGlvbj1mYWRlXVtkYXRhLXN0YXRlPWhpZGRlbl17b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIFtkYXRhLWFuaW1hdGlvbj1zaGlmdC1hd2F5XVtkYXRhLXN0YXRlPXZpc2libGVde29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDEwcHgpfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSBbZGF0YS1hbmltYXRpb249c2hpZnQtYXdheV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfS50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnRePXJpZ2h0XSBbZGF0YS1hbmltYXRpb249c2NhbGVdW2RhdGEtc3RhdGU9dmlzaWJsZV17b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCkgc2NhbGUoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTBweCkgc2NhbGUoMSl9LnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudF49cmlnaHRdIFtkYXRhLWFuaW1hdGlvbj1zY2FsZV1bZGF0YS1zdGF0ZT1oaWRkZW5de29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKDApfS50aXBweS10b29sdGlwe3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo0cHg7Zm9udC1zaXplOi45cmVtO3BhZGRpbmc6LjNyZW0gLjZyZW07dGV4dC1hbGlnbjpjZW50ZXI7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlO2JhY2tncm91bmQtY29sb3I6IzMzM30udGlwcHktdG9vbHRpcFtkYXRhLXNpemU9c21hbGxde3BhZGRpbmc6LjJyZW0gLjRyZW07Zm9udC1zaXplOi43NXJlbX0udGlwcHktdG9vbHRpcFtkYXRhLXNpemU9bGFyZ2Vde3BhZGRpbmc6LjRyZW0gLjhyZW07Zm9udC1zaXplOjFyZW19LnRpcHB5LXRvb2x0aXBbZGF0YS1hbmltYXRlZmlsbF17b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnRpcHB5LXRvb2x0aXBbZGF0YS1hbmltYXRlZmlsbF0gLnRpcHB5LWNvbnRlbnR7dHJhbnNpdGlvbjotd2Via2l0LWNsaXAtcGF0aCBjdWJpYy1iZXppZXIoLjQ2LC4xLC41MiwuOTgpO3RyYW5zaXRpb246Y2xpcC1wYXRoIGN1YmljLWJlemllciguNDYsLjEsLjUyLC45OCk7dHJhbnNpdGlvbjpjbGlwLXBhdGggY3ViaWMtYmV6aWVyKC40NiwuMSwuNTIsLjk4KSwtd2Via2l0LWNsaXAtcGF0aCBjdWJpYy1iZXppZXIoLjQ2LC4xLC41MiwuOTgpfS50aXBweS10b29sdGlwW2RhdGEtaW50ZXJhY3RpdmVdLC50aXBweS10b29sdGlwW2RhdGEtaW50ZXJhY3RpdmVdIHBhdGh7cG9pbnRlci1ldmVudHM6YXV0b30udGlwcHktdG9vbHRpcFtkYXRhLWluZXJ0aWFdW2RhdGEtc3RhdGU9dmlzaWJsZV17dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41MywyLC4zNiwuODUpfS50aXBweS10b29sdGlwW2RhdGEtaW5lcnRpYV1bZGF0YS1zdGF0ZT1oaWRkZW5de3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2V9LnRpcHB5LWFycm93LC50aXBweS1yb3VuZGFycm93e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjA7aGVpZ2h0OjB9LnRpcHB5LXJvdW5kYXJyb3d7d2lkdGg6MjRweDtoZWlnaHQ6OHB4O2ZpbGw6IzMzMztwb2ludGVyLWV2ZW50czpub25lfS50aXBweS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07YmFja2dyb3VuZC1jb2xvcjojMzMzO2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjI2JTtsZWZ0OjUwJTt0b3A6NTAlO3otaW5kZXg6LTE7dHJhbnNpdGlvbjphbGwgY3ViaWMtYmV6aWVyKC40NiwuMSwuNTIsLjk4KTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufS50aXBweS1iYWNrZHJvcDphZnRlcntjb250ZW50OlxcXCJcXFwiO2Zsb2F0OmxlZnQ7cGFkZGluZy10b3A6MTAwJX1ib2R5Om5vdCgudGlwcHktdG91Y2gpIC50aXBweS10b29sdGlwW2RhdGEtYW5pbWF0ZWZpbGxdW2RhdGEtc3RhdGU9dmlzaWJsZV0gLnRpcHB5LWNvbnRlbnR7LXdlYmtpdC1jbGlwLXBhdGg6ZWxsaXBzZSgxMDAlIDEwMCUgYXQgNTAlIDUwJSk7Y2xpcC1wYXRoOmVsbGlwc2UoMTAwJSAxMDAlIGF0IDUwJSA1MCUpfWJvZHk6bm90KC50aXBweS10b3VjaCkgLnRpcHB5LXRvb2x0aXBbZGF0YS1hbmltYXRlZmlsbF1bZGF0YS1zdGF0ZT1oaWRkZW5dIC50aXBweS1jb250ZW50ey13ZWJraXQtY2xpcC1wYXRoOmVsbGlwc2UoNSUgNTAlIGF0IDUwJSA1MCUpO2NsaXAtcGF0aDplbGxpcHNlKDUlIDUwJSBhdCA1MCUgNTAlKX1ib2R5Om5vdCgudGlwcHktdG91Y2gpIC50aXBweS1wb3BwZXJbeC1wbGFjZW1lbnQ9cmlnaHRdIC50aXBweS10b29sdGlwW2RhdGEtYW5pbWF0ZWZpbGxdW2RhdGEtc3RhdGU9dmlzaWJsZV0gLnRpcHB5LWNvbnRlbnR7LXdlYmtpdC1jbGlwLXBhdGg6ZWxsaXBzZSgxMzUlIDEwMCUgYXQgMCA1MCUpO2NsaXAtcGF0aDplbGxpcHNlKDEzNSUgMTAwJSBhdCAwIDUwJSl9Ym9keTpub3QoLnRpcHB5LXRvdWNoKSAudGlwcHktcG9wcGVyW3gtcGxhY2VtZW50PXJpZ2h0XSAudGlwcHktdG9vbHRpcFtkYXRhLWFuaW1hdGVmaWxsXVtkYXRhLXN0YXRlPWhpZGRlbl0gLnRpcHB5LWNvbnRlbnR7LXdlYmtpdC1jbGlwLXBhdGg6ZWxsaXBzZSg0MCUgMTAwJSBhdCAwIDUwJSk7Y2xpcC1wYXRoOmVsbGlwc2UoNDAlIDEwMCUgYXQgMCA1MCUpfWJvZHk6bm90KC50aXBweS10b3VjaCkgLnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudD1sZWZ0XSAudGlwcHktdG9vbHRpcFtkYXRhLWFuaW1hdGVmaWxsXVtkYXRhLXN0YXRlPXZpc2libGVdIC50aXBweS1jb250ZW50ey13ZWJraXQtY2xpcC1wYXRoOmVsbGlwc2UoMTM1JSAxMDAlIGF0IDEwMCUgNTAlKTtjbGlwLXBhdGg6ZWxsaXBzZSgxMzUlIDEwMCUgYXQgMTAwJSA1MCUpfWJvZHk6bm90KC50aXBweS10b3VjaCkgLnRpcHB5LXBvcHBlclt4LXBsYWNlbWVudD1sZWZ0XSAudGlwcHktdG9vbHRpcFtkYXRhLWFuaW1hdGVmaWxsXVtkYXRhLXN0YXRlPWhpZGRlbl0gLnRpcHB5LWNvbnRlbnR7LXdlYmtpdC1jbGlwLXBhdGg6ZWxsaXBzZSg0MCUgMTAwJSBhdCAxMDAlIDUwJSk7Y2xpcC1wYXRoOmVsbGlwc2UoNDAlIDEwMCUgYXQgMTAwJSA1MCUpfUBtZWRpYSAobWF4LXdpZHRoOjM2MHB4KXsudGlwcHktcG9wcGVye21heC13aWR0aDo5NiU7bWF4LXdpZHRoOmNhbGMoMTAwJSAtIDIwcHgpfX1cIjtcblxudmFyIHZlcnNpb24gPSBcIjIuNi4wXCI7XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxudmFyIGlzSUUgPSBpc0Jyb3dzZXIgJiYgL01TSUUgfFRyaWRlbnRcXC8vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbnZhciBicm93c2VyID0ge307XG5cbmlmIChpc0Jyb3dzZXIpIHtcbiAgYnJvd3Nlci5zdXBwb3J0ZWQgPSAncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyBpbiB3aW5kb3c7XG4gIGJyb3dzZXIuc3VwcG9ydHNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcbiAgYnJvd3Nlci51c2luZ1RvdWNoID0gZmFsc2U7XG4gIGJyb3dzZXIuZHluYW1pY0lucHV0RGV0ZWN0aW9uID0gdHJ1ZTtcbiAgYnJvd3Nlci5pT1MgPSAvaVBob25lfGlQYWR8aVBvZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pICYmICF3aW5kb3cuTVNTdHJlYW07XG4gIGJyb3dzZXIub25Vc2VySW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7fTtcbn1cblxuLyoqXG4gKiBTZWxlY3RvciBjb25zdGFudHMgdXNlZCBmb3IgZ3JhYmJpbmcgZWxlbWVudHNcbiAqL1xudmFyIHNlbGVjdG9ycyA9IHtcbiAgUE9QUEVSOiAnLnRpcHB5LXBvcHBlcicsXG4gIFRPT0xUSVA6ICcudGlwcHktdG9vbHRpcCcsXG4gIENPTlRFTlQ6ICcudGlwcHktY29udGVudCcsXG4gIEJBQ0tEUk9QOiAnLnRpcHB5LWJhY2tkcm9wJyxcbiAgQVJST1c6ICcudGlwcHktYXJyb3cnLFxuICBST1VORF9BUlJPVzogJy50aXBweS1yb3VuZGFycm93JyxcbiAgUkVGRVJFTkNFOiAnW2RhdGEtdGlwcHldJ1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBsaXZlUGxhY2VtZW50OiB0cnVlLFxuICB0cmlnZ2VyOiAnbW91c2VlbnRlciBmb2N1cycsXG4gIGFuaW1hdGlvbjogJ3NoaWZ0LWF3YXknLFxuICBodG1sOiBmYWxzZSxcbiAgYW5pbWF0ZUZpbGw6IHRydWUsXG4gIGFycm93OiBmYWxzZSxcbiAgZGVsYXk6IFswLCAyMF0sXG4gIGR1cmF0aW9uOiBbMzUwLCAzMDBdLFxuICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gIGludGVyYWN0aXZlQm9yZGVyOiAyLFxuICB0aGVtZTogJ2RhcmsnLFxuICBzaXplOiAncmVndWxhcicsXG4gIGRpc3RhbmNlOiAxMCxcbiAgb2Zmc2V0OiAwLFxuICBoaWRlT25DbGljazogdHJ1ZSxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBmb2xsb3dDdXJzb3I6IGZhbHNlLFxuICBpbmVydGlhOiBmYWxzZSxcbiAgdXBkYXRlRHVyYXRpb246IDM1MCxcbiAgc3RpY2t5OiBmYWxzZSxcbiAgYXBwZW5kVG86IGZ1bmN0aW9uIGFwcGVuZFRvKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9LFxuICB6SW5kZXg6IDk5OTksXG4gIHRvdWNoSG9sZDogZmFsc2UsXG4gIHBlcmZvcm1hbmNlOiBmYWxzZSxcbiAgZHluYW1pY1RpdGxlOiBmYWxzZSxcbiAgZmxpcDogdHJ1ZSxcbiAgZmxpcEJlaGF2aW9yOiAnZmxpcCcsXG4gIGFycm93VHlwZTogJ3NoYXJwJyxcbiAgYXJyb3dUcmFuc2Zvcm06ICcnLFxuICBtYXhXaWR0aDogJycsXG4gIHRhcmdldDogbnVsbCxcbiAgYWxsb3dUaXRsZUhUTUw6IHRydWUsXG4gIHBvcHBlck9wdGlvbnM6IHt9LFxuICBjcmVhdGVQb3BwZXJJbnN0YW5jZU9uSW5pdDogZmFsc2UsXG4gIG9uU2hvdzogZnVuY3Rpb24gb25TaG93KCkge30sXG4gIG9uU2hvd246IGZ1bmN0aW9uIG9uU2hvd24oKSB7fSxcbiAgb25IaWRlOiBmdW5jdGlvbiBvbkhpZGUoKSB7fSxcbiAgb25IaWRkZW46IGZ1bmN0aW9uIG9uSGlkZGVuKCkge31cbn07XG5cbi8qKlxuICogVGhlIGtleXMgb2YgdGhlIGRlZmF1bHRzIG9iamVjdCBmb3IgcmVkdWNpbmcgZG93biBpbnRvIGEgbmV3IG9iamVjdFxuICogVXNlZCBpbiBgZ2V0SW5kaXZpZHVhbE9wdGlvbnMoKWBcbiAqL1xudmFyIGRlZmF1bHRzS2V5cyA9IGJyb3dzZXIuc3VwcG9ydGVkICYmIE9iamVjdC5rZXlzKGRlZmF1bHRzKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYW4gb2JqZWN0IGxpdGVyYWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGl0ZXJhbCh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG4vKipcbiAqIFBvbnlmaWxsIGZvciBBcnJheS5mcm9tXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBlbGVtZW50cyBiYXNlZCBvbiB0aGUgc2VsZWN0b3IgaW5wdXRcbiAqIEBwYXJhbSB7U3RyaW5nfEVsZW1lbnR8RWxlbWVudFtdfE5vZGVMaXN0fE9iamVjdH0gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0VsZW1lbnRbXX1cbiAqL1xuZnVuY3Rpb24gZ2V0QXJyYXlPZkVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgaXNPYmplY3RMaXRlcmFsKHNlbGVjdG9yKSkge1xuICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcbiAgICByZXR1cm4gdG9BcnJheShzZWxlY3Rvcik7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiB0b0FycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG4vKipcbiAqIFBvbHlmaWxscyBuZWVkZWQgcHJvcHMvbWV0aG9kcyBmb3IgYSB2aXJ0dWFsIHJlZmVyZW5jZSBvYmplY3RcbiAqIE5PVEU6IGluIHYzLjAgdGhpcyB3aWxsIGJlIHB1cmVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZlcmVuY2VcbiAqL1xuZnVuY3Rpb24gcG9seWZpbGxWaXJ0dWFsUmVmZXJlbmNlUHJvcHMocmVmZXJlbmNlKSB7XG4gIHJlZmVyZW5jZS5yZWZPYmogPSB0cnVlO1xuICByZWZlcmVuY2UuYXR0cmlidXRlcyA9IHJlZmVyZW5jZS5hdHRyaWJ1dGVzIHx8IHt9O1xuICByZWZlcmVuY2Uuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgcmVmZXJlbmNlLmF0dHJpYnV0ZXNba2V5XSA9IHZhbDtcbiAgfTtcbiAgcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlLmF0dHJpYnV0ZXNba2V5XTtcbiAgfTtcbiAgcmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZWxldGUgcmVmZXJlbmNlLmF0dHJpYnV0ZXNba2V5XTtcbiAgfTtcbiAgcmVmZXJlbmNlLmhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIHJlZmVyZW5jZS5hdHRyaWJ1dGVzO1xuICB9O1xuICByZWZlcmVuY2UuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHt9O1xuICByZWZlcmVuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHt9O1xuICByZWZlcmVuY2UuY2xhc3NMaXN0ID0ge1xuICAgIGNsYXNzTmFtZXM6IHt9LFxuICAgIGFkZDogZnVuY3Rpb24gYWRkKGtleSkge1xuICAgICAgcmV0dXJuIHJlZmVyZW5jZS5jbGFzc0xpc3QuY2xhc3NOYW1lc1trZXldID0gdHJ1ZTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xuICAgICAgZGVsZXRlIHJlZmVyZW5jZS5jbGFzc0xpc3QuY2xhc3NOYW1lc1trZXldO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBjb250YWluczogZnVuY3Rpb24gY29udGFpbnMoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5IGluIHJlZmVyZW5jZS5jbGFzc0xpc3QuY2xhc3NOYW1lcztcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3VwcG9ydGVkIHByZWZpeGVkIHByb3BlcnR5IC0gb25seSBgd2Via2l0YCBpcyBuZWVkZWQsIGBtb3pgLCBgbXNgIGFuZCBgb2AgYXJlIG9ic29sZXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEByZXR1cm4ge1N0cmluZ30gLSBicm93c2VyIHN1cHBvcnRlZCBwcmVmaXhlZCBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBwcmVmaXgocHJvcGVydHkpIHtcbiAgdmFyIHByZWZpeGVzID0gWycnLCAnd2Via2l0J107XG4gIHZhciB1cHBlclByb3AgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX3ByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciBwcmVmaXhlZFByb3AgPSBfcHJlZml4ID8gX3ByZWZpeCArIHVwcGVyUHJvcCA6IHByb3BlcnR5O1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVtwcmVmaXhlZFByb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHByZWZpeGVkUHJvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZGl2IGVsZW1lbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpdigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwb3BwZXIgZWxlbWVudCB0aGVuIHJldHVybnMgaXRcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCAtIHRoZSBwb3BwZXIgaWRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSAtIHRoZSB0b29sdGlwJ3MgYHRpdGxlYCBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gaW5kaXZpZHVhbCBvcHRpb25zXG4gKiBAcmV0dXJuIHtFbGVtZW50fSAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVQb3BwZXJFbGVtZW50KGlkLCB0aXRsZSwgb3B0aW9ucykge1xuICB2YXIgcG9wcGVyID0gZGl2KCk7XG4gIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpcHB5LXBvcHBlcicpO1xuICBwb3BwZXIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3Rvb2x0aXAnKTtcbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGlwcHktJyArIGlkKTtcbiAgcG9wcGVyLnN0eWxlLnpJbmRleCA9IG9wdGlvbnMuekluZGV4O1xuICBwb3BwZXIuc3R5bGUubWF4V2lkdGggPSBvcHRpb25zLm1heFdpZHRoO1xuXG4gIHZhciB0b29sdGlwID0gZGl2KCk7XG4gIHRvb2x0aXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXBweS10b29sdGlwJyk7XG4gIHRvb2x0aXAuc2V0QXR0cmlidXRlKCdkYXRhLXNpemUnLCBvcHRpb25zLnNpemUpO1xuICB0b29sdGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nLCBvcHRpb25zLmFuaW1hdGlvbik7XG4gIHRvb2x0aXAuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2hpZGRlbicpO1xuICBvcHRpb25zLnRoZW1lLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgIHRvb2x0aXAuY2xhc3NMaXN0LmFkZCh0ICsgJy10aGVtZScpO1xuICB9KTtcblxuICB2YXIgY29udGVudCA9IGRpdigpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlwcHktY29udGVudCcpO1xuXG4gIGlmIChvcHRpb25zLmFycm93KSB7XG4gICAgdmFyIGFycm93ID0gZGl2KCk7XG4gICAgYXJyb3cuc3R5bGVbcHJlZml4KCd0cmFuc2Zvcm0nKV0gPSBvcHRpb25zLmFycm93VHJhbnNmb3JtO1xuXG4gICAgaWYgKG9wdGlvbnMuYXJyb3dUeXBlID09PSAncm91bmQnKSB7XG4gICAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKCd0aXBweS1yb3VuZGFycm93Jyk7XG4gICAgICBhcnJvdy5pbm5lckhUTUwgPSAnPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0zIDhzMi4wMjEtLjAxNSA1LjI1My00LjIxOEM5LjU4NCAyLjA1MSAxMC43OTcgMS4wMDcgMTIgMWMxLjIwMy0uMDA3IDIuNDE2IDEuMDM1IDMuNzYxIDIuNzgyQzE5LjAxMiA4LjAwNSAyMSA4IDIxIDhIM3pcIi8+PC9zdmc+JztcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgndGlwcHktYXJyb3cnKTtcbiAgICB9XG5cbiAgICB0b29sdGlwLmFwcGVuZENoaWxkKGFycm93KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFuaW1hdGVGaWxsKSB7XG4gICAgLy8gQ3JlYXRlIGFuaW1hdGVGaWxsIGNpcmNsZSBlbGVtZW50IGZvciBhbmltYXRpb25cbiAgICB0b29sdGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRlZmlsbCcsICcnKTtcbiAgICB2YXIgYmFja2Ryb3AgPSBkaXYoKTtcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCd0aXBweS1iYWNrZHJvcCcpO1xuICAgIGJhY2tkcm9wLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICdoaWRkZW4nKTtcbiAgICB0b29sdGlwLmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmluZXJ0aWEpIHtcbiAgICAvLyBDaGFuZ2UgdHJhbnNpdGlvbiB0aW1pbmcgZnVuY3Rpb24gY3ViaWMgYmV6aWVyXG4gICAgdG9vbHRpcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5lcnRpYScsICcnKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmludGVyYWN0aXZlKSB7XG4gICAgdG9vbHRpcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZXJhY3RpdmUnLCAnJyk7XG4gIH1cblxuICB2YXIgaHRtbCA9IG9wdGlvbnMuaHRtbDtcbiAgaWYgKGh0bWwpIHtcbiAgICB2YXIgdGVtcGxhdGVJZCA9IHZvaWQgMDtcblxuICAgIGlmIChodG1sIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChodG1sKTtcbiAgICAgIHRlbXBsYXRlSWQgPSAnIycgKyAoaHRtbC5pZCB8fCAndGlwcHktaHRtbC10ZW1wbGF0ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0cmljayBsaW50ZXJzOiBodHRwczovL2dpdGh1Yi5jb20vYXRvbWlrcy90aXBweWpzL2lzc3Vlcy8xOTdcbiAgICAgIGNvbnRlbnRbdHJ1ZSAmJiAnaW5uZXJIVE1MJ10gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGh0bWwpW3RydWUgJiYgJ2lubmVySFRNTCddO1xuICAgICAgdGVtcGxhdGVJZCA9IGh0bWw7XG4gICAgfVxuXG4gICAgcG9wcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1odG1sJywgJycpO1xuICAgIHRvb2x0aXAuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlLWlkJywgdGVtcGxhdGVJZCk7XG5cbiAgICBpZiAob3B0aW9ucy5pbnRlcmFjdGl2ZSkge1xuICAgICAgcG9wcGVyLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29udGVudFtvcHRpb25zLmFsbG93VGl0bGVIVE1MID8gJ2lubmVySFRNTCcgOiAndGV4dENvbnRlbnQnXSA9IHRpdGxlO1xuICB9XG5cbiAgdG9vbHRpcC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgcG9wcGVyLmFwcGVuZENoaWxkKHRvb2x0aXApO1xuXG4gIHJldHVybiBwb3BwZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRyaWdnZXIgYnkgYWRkaW5nIHRoZSBuZWNlc3NhcnkgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50VHlwZSAtIHRoZSBjdXN0b20gZXZlbnQgc3BlY2lmaWVkIGluIHRoZSBgdHJpZ2dlcmAgc2V0dGluZ1xuICogQHBhcmFtIHtFbGVtZW50fSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVycyAtIHRoZSBoYW5kbGVycyBmb3IgZWFjaCBldmVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0FycmF5fSAtIGFycmF5IG9mIGxpc3RlbmVyIG9iamVjdHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVHJpZ2dlcihldmVudFR5cGUsIHJlZmVyZW5jZSwgaGFuZGxlcnMsIG9wdGlvbnMpIHtcbiAgdmFyIG9uVHJpZ2dlciA9IGhhbmRsZXJzLm9uVHJpZ2dlcixcbiAgICAgIG9uTW91c2VMZWF2ZSA9IGhhbmRsZXJzLm9uTW91c2VMZWF2ZSxcbiAgICAgIG9uQmx1ciA9IGhhbmRsZXJzLm9uQmx1cixcbiAgICAgIG9uRGVsZWdhdGVTaG93ID0gaGFuZGxlcnMub25EZWxlZ2F0ZVNob3csXG4gICAgICBvbkRlbGVnYXRlSGlkZSA9IGhhbmRsZXJzLm9uRGVsZWdhdGVIaWRlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBpZiAoZXZlbnRUeXBlID09PSAnbWFudWFsJykgcmV0dXJuIGxpc3RlbmVycztcblxuICB2YXIgb24gPSBmdW5jdGlvbiBvbihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgICByZWZlcmVuY2UuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpO1xuICAgIGxpc3RlbmVycy5wdXNoKHsgZXZlbnQ6IGV2ZW50VHlwZSwgaGFuZGxlcjogaGFuZGxlciB9KTtcbiAgfTtcblxuICBpZiAoIW9wdGlvbnMudGFyZ2V0KSB7XG4gICAgb24oZXZlbnRUeXBlLCBvblRyaWdnZXIpO1xuXG4gICAgaWYgKGJyb3dzZXIuc3VwcG9ydHNUb3VjaCAmJiBvcHRpb25zLnRvdWNoSG9sZCkge1xuICAgICAgb24oJ3RvdWNoc3RhcnQnLCBvblRyaWdnZXIpO1xuICAgICAgb24oJ3RvdWNoZW5kJywgb25Nb3VzZUxlYXZlKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gJ21vdXNlZW50ZXInKSB7XG4gICAgICBvbignbW91c2VsZWF2ZScsIG9uTW91c2VMZWF2ZSk7XG4gICAgfVxuICAgIGlmIChldmVudFR5cGUgPT09ICdmb2N1cycpIHtcbiAgICAgIG9uKGlzSUUgPyAnZm9jdXNvdXQnIDogJ2JsdXInLCBvbkJsdXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnJvd3Nlci5zdXBwb3J0c1RvdWNoICYmIG9wdGlvbnMudG91Y2hIb2xkKSB7XG4gICAgICBvbigndG91Y2hzdGFydCcsIG9uRGVsZWdhdGVTaG93KTtcbiAgICAgIG9uKCd0b3VjaGVuZCcsIG9uRGVsZWdhdGVIaWRlKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gJ21vdXNlZW50ZXInKSB7XG4gICAgICBvbignbW91c2VvdmVyJywgb25EZWxlZ2F0ZVNob3cpO1xuICAgICAgb24oJ21vdXNlb3V0Jywgb25EZWxlZ2F0ZUhpZGUpO1xuICAgIH1cbiAgICBpZiAoZXZlbnRUeXBlID09PSAnZm9jdXMnKSB7XG4gICAgICBvbignZm9jdXNpbicsIG9uRGVsZWdhdGVTaG93KTtcbiAgICAgIG9uKCdmb2N1c291dCcsIG9uRGVsZWdhdGVIaWRlKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgb24oJ2NsaWNrJywgb25EZWxlZ2F0ZVNob3cpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsaXN0ZW5lcnM7XG59XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxuXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IG9mIHNldHRpbmdzIHRvIG92ZXJyaWRlIGdsb2JhbCBzZXR0aW5nc1xuICogQHBhcmFtIHtFbGVtZW50fSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZU9wdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gLSBpbmRpdmlkdWFsIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gZ2V0SW5kaXZpZHVhbE9wdGlvbnMocmVmZXJlbmNlLCBpbnN0YW5jZU9wdGlvbnMpIHtcbiAgdmFyIG9wdGlvbnMgPSBkZWZhdWx0c0tleXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIHZhciB2YWwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdkYXRhLXRpcHB5LScgKyBrZXkudG9Mb3dlckNhc2UoKSkgfHwgaW5zdGFuY2VPcHRpb25zW2tleV07XG5cbiAgICAvLyBDb252ZXJ0IHN0cmluZ3MgdG8gYm9vbGVhbnNcbiAgICBpZiAodmFsID09PSAnZmFsc2UnKSB2YWwgPSBmYWxzZTtcbiAgICBpZiAodmFsID09PSAndHJ1ZScpIHZhbCA9IHRydWU7XG5cbiAgICAvLyBDb252ZXJ0IG51bWJlciBzdHJpbmdzIHRvIHRydWUgbnVtYmVyc1xuICAgIGlmIChpc0Zpbml0ZSh2YWwpICYmICFpc05hTihwYXJzZUZsb2F0KHZhbCkpKSB7XG4gICAgICB2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCBhcnJheSBzdHJpbmdzIHRvIGFjdHVhbCBhcnJheXNcbiAgICBpZiAoa2V5ICE9PSAndGFyZ2V0JyAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiB2YWwudHJpbSgpLmNoYXJBdCgwKSA9PT0gJ1snKSB7XG4gICAgICB2YWwgPSBKU09OLnBhcnNlKHZhbCk7XG4gICAgfVxuXG4gICAgYWNjW2tleV0gPSB2YWw7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBpbnN0YW5jZU9wdGlvbnMsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIEV2YWx1YXRlcy9tb2RpZmllcyB0aGUgb3B0aW9ucyBvYmplY3QgZm9yIGFwcHJvcHJpYXRlIGJlaGF2aW9yXG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IG1vZGlmaWVkL2V2YWx1YXRlZCBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGV2YWx1YXRlT3B0aW9ucyhyZWZlcmVuY2UsIG9wdGlvbnMpIHtcbiAgLy8gYW5pbWF0ZUZpbGwgaXMgZGlzYWJsZWQgaWYgYW4gYXJyb3cgaXMgdHJ1ZVxuICBpZiAob3B0aW9ucy5hcnJvdykge1xuICAgIG9wdGlvbnMuYW5pbWF0ZUZpbGwgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFwcGVuZFRvICYmIHR5cGVvZiBvcHRpb25zLmFwcGVuZFRvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5hcHBlbmRUbyA9IG9wdGlvbnMuYXBwZW5kVG8oKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5odG1sID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5odG1sID0gb3B0aW9ucy5odG1sKHJlZmVyZW5jZSk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGlubmVyIGVsZW1lbnRzIG9mIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0SW5uZXJFbGVtZW50cyhwb3BwZXIpIHtcbiAgdmFyIHNlbGVjdCA9IGZ1bmN0aW9uIHNlbGVjdChzKSB7XG4gICAgcmV0dXJuIHBvcHBlci5xdWVyeVNlbGVjdG9yKHMpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHRvb2x0aXA6IHNlbGVjdChzZWxlY3RvcnMuVE9PTFRJUCksXG4gICAgYmFja2Ryb3A6IHNlbGVjdChzZWxlY3RvcnMuQkFDS0RST1ApLFxuICAgIGNvbnRlbnQ6IHNlbGVjdChzZWxlY3RvcnMuQ09OVEVOVCksXG4gICAgYXJyb3c6IHNlbGVjdChzZWxlY3RvcnMuQVJST1cpIHx8IHNlbGVjdChzZWxlY3RvcnMuUk9VTkRfQVJST1cpXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgdGl0bGUgZnJvbSBhbiBlbGVtZW50LCBzZXR0aW5nIGBkYXRhLW9yaWdpbmFsLXRpdGxlYFxuICogYXBwcm9wcmlhdGVseVxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICovXG5mdW5jdGlvbiByZW1vdmVUaXRsZShlbCkge1xuICB2YXIgdGl0bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gIC8vIE9ubHkgc2V0IGBkYXRhLW9yaWdpbmFsLXRpdGxlYCBhdHRyIGlmIHRoZXJlIGlzIGEgdGl0bGVcbiAgaWYgKHRpdGxlKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgdGl0bGUpO1xuICB9XG4gIGVsLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbn1cblxuLyoqIVxuICogQGZpbGVPdmVydmlldyBLaWNrYXNzIGxpYnJhcnkgdG8gY3JlYXRlIGFuZCBwbGFjZSBwb3BwZXJzIG5lYXIgdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnRzLlxuICogQHZlcnNpb24gMS4xNC40XG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2IEZlZGVyaWNvIFppdm9sbyBhbmQgY29udHJpYnV0b3JzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqL1xudmFyIGlzQnJvd3NlciQxID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxudmFyIGxvbmdlclRpbWVvdXRCcm93c2VycyA9IFsnRWRnZScsICdUcmlkZW50JywgJ0ZpcmVmb3gnXTtcbnZhciB0aW1lb3V0RHVyYXRpb24gPSAwO1xuZm9yICh2YXIgaSA9IDA7IGkgPCBsb25nZXJUaW1lb3V0QnJvd3NlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgaWYgKGlzQnJvd3NlciQxICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihsb25nZXJUaW1lb3V0QnJvd3NlcnNbaV0pID49IDApIHtcbiAgICB0aW1lb3V0RHVyYXRpb24gPSAxO1xuICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1pY3JvdGFza0RlYm91bmNlKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgd2luZG93LlByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGVkID0gZmFsc2U7XG4gICAgICBmbigpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0YXNrRGVib3VuY2UoZm4pIHtcbiAgdmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc2NoZWR1bGVkKSB7XG4gICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICBmbigpO1xuICAgICAgfSwgdGltZW91dER1cmF0aW9uKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBzdXBwb3J0c01pY3JvVGFza3MgPSBpc0Jyb3dzZXIkMSAmJiB3aW5kb3cuUHJvbWlzZTtcblxuLyoqXG4qIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIGEgbWV0aG9kLCB0aGF0J3MgYXN5bmNocm9ub3VzbHkgZGVmZXJyZWRcbiogYnV0IGNhbGxlZCBpbiB0aGUgbWluaW11bSB0aW1lIHBvc3NpYmxlLlxuKlxuKiBAbWV0aG9kXG4qIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiogQGFyZ3VtZW50IHtGdW5jdGlvbn0gZm5cbiogQHJldHVybnMge0Z1bmN0aW9ufVxuKi9cbnZhciBkZWJvdW5jZSA9IHN1cHBvcnRzTWljcm9UYXNrcyA/IG1pY3JvdGFza0RlYm91bmNlIDogdGFza0RlYm91bmNlO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FueX0gZnVuY3Rpb25Ub0NoZWNrIC0gdmFyaWFibGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG86IGlzIGEgZnVuY3Rpb24/XG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gIHZhciBnZXRUeXBlID0ge307XG4gIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogR2V0IENTUyBjb21wdXRlZCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcGFyZW50Tm9kZSBvciB0aGUgaG9zdCBvZiB0aGUgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZSB8fCBlbGVtZW50Lmhvc3Q7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gc2Nyb2xsIHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBSZXR1cm4gYm9keSwgYGdldFNjcm9sbGAgd2lsbCB0YWtlIGNhcmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGBzY3JvbGxUb3BgIGZyb20gaXRcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICBjYXNlICdIVE1MJzpcbiAgICBjYXNlICdCT0RZJzpcbiAgICAgIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICBjYXNlICcjZG9jdW1lbnQnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuYm9keTtcbiAgfVxuXG4gIC8vIEZpcmVmb3ggd2FudCB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuXG4gIHZhciBfZ2V0U3R5bGVDb21wdXRlZFByb3AgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3dZO1xuXG4gIGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbn1cblxudmFyIGlzSUUxMSA9IGlzQnJvd3NlciQxICYmICEhKHdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUpO1xudmFyIGlzSUUxMCA9IGlzQnJvd3NlciQxICYmIC9NU0lFIDEwLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7TnVtYmVyfSB2ZXJzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaXNJRVxuICovXG5mdW5jdGlvbiBpc0lFJDEodmVyc2lvbikge1xuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcbiAgICByZXR1cm4gaXNJRTExO1xuICB9XG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xuICAgIHJldHVybiBpc0lFMTA7XG4gIH1cbiAgcmV0dXJuIGlzSUUxMSB8fCBpc0lFMTA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb2Zmc2V0IHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gb2Zmc2V0IHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgdmFyIG5vT2Zmc2V0UGFyZW50ID0gaXNJRSQxKDEwKSA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgLy8gU2tpcCBoaWRkZW4gZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBvZmZzZXRQYXJlbnRcbiAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICB2YXIgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xuXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gLm9mZnNldFBhcmVudCB3aWxsIHJldHVybiB0aGUgY2xvc2VzdCBURCBvciBUQUJMRSBpbiBjYXNlXG4gIC8vIG5vIG9mZnNldFBhcmVudCBpcyBwcmVzZW50LCBJIGhhdGUgdGhpcyBqb2IuLi5cbiAgaWYgKFsnVEQnLCAnVEFCTEUnXS5pbmRleE9mKG9mZnNldFBhcmVudC5ub2RlTmFtZSkgIT09IC0xICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XG59XG5cbmZ1bmN0aW9uIGlzT2Zmc2V0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gbm9kZU5hbWUgPT09ICdIVE1MJyB8fCBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkgPT09IGVsZW1lbnQ7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIHJvb3Qgbm9kZSAoZG9jdW1lbnQsIHNoYWRvd0RPTSByb290KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcm9vdCBub2RlXG4gKi9cbmZ1bmN0aW9uIGdldFJvb3Qobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldFJvb3Qobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBvZmZzZXQgcGFyZW50IGNvbW1vbiB0byB0aGUgdHdvIHByb3ZpZGVkIG5vZGVzXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQxXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gY29tbW9uIG9mZnNldCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZWxlbWVudDIpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudDEgfHwgIWVsZW1lbnQxLm5vZGVUeXBlIHx8ICFlbGVtZW50MiB8fCAhZWxlbWVudDIubm9kZVR5cGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdG8gZ2l2ZSBhcyBcInN0YXJ0XCIgdGhlIGVsZW1lbnQgdGhhdCBjb21lcyBmaXJzdCBpbiB0aGUgRE9NXG4gIHZhciBvcmRlciA9IGVsZW1lbnQxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQyKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuICB2YXIgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gIHZhciBlbmQgPSBvcmRlciA/IGVsZW1lbnQyIDogZWxlbWVudDE7XG5cbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xuICByYW5nZS5zZXRFbmQoZW5kLCAwKTtcbiAgdmFyIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG5cbiAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxuXG4gIGlmIChlbGVtZW50MSAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgJiYgZWxlbWVudDIgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIHx8IHN0YXJ0LmNvbnRhaW5zKGVuZCkpIHtcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChjb21tb25BbmNlc3RvckNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBvbmUgb2YgdGhlIG5vZGVzIGlzIGluc2lkZSBzaGFkb3dET00sIGZpbmQgd2hpY2ggb25lXG4gIHZhciBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcbiAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDFyb290Lmhvc3QsIGVsZW1lbnQyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHNpZGUgYHRvcGAgb3IgYGxlZnRgXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbW91bnQgb2Ygc2Nyb2xsZWQgcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbChlbGVtZW50KSB7XG4gIHZhciBzaWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAndG9wJztcblxuICB2YXIgdXBwZXJTaWRlID0gc2lkZSA9PT0gJ3RvcCcgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgdmFyIGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBzY3JvbGxpbmdFbGVtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgaHRtbDtcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudFt1cHBlclNpZGVdO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRbdXBwZXJTaWRlXTtcbn1cblxuLypcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgLSBSZWN0IG9iamVjdCB5b3Ugd2FudCB0byBjaGFuZ2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBmcm9tIHRoZSBmdW5jdGlvbiByZWFkcyB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHBhcmFtIHtCb29sZWFufSBzdWJ0cmFjdCAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHN1YnRyYWN0IHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY3QgLSBUaGUgbW9kaWZpZXIgcmVjdCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0LCBlbGVtZW50KSB7XG4gIHZhciBzdWJ0cmFjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIHZhciBtb2RpZmllciA9IHN1YnRyYWN0ID8gLTEgOiAxO1xuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZXR1cm4gcmVjdDtcbn1cblxuLypcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXG4gKiBSZXN1bHQgb2YgYGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eWAgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBheGlzIC0gYHhgIG9yIGB5YFxuICogQHJldHVybiB7bnVtYmVyfSBib3JkZXJzIC0gVGhlIGJvcmRlcnMgc2l6ZSBvZiB0aGUgZ2l2ZW4gYXhpc1xuICovXG5cbmZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcywgYXhpcykge1xuICB2YXIgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcbiAgdmFyIHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gcGFyc2VGbG9hdChzdHlsZXNbJ2JvcmRlcicgKyBzaWRlQSArICdXaWR0aCddLCAxMCkgKyBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVCICsgJ1dpZHRoJ10sIDEwKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2l6ZShheGlzLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSB7XG4gIHJldHVybiBNYXRoLm1heChib2R5WydvZmZzZXQnICsgYXhpc10sIGJvZHlbJ3Njcm9sbCcgKyBheGlzXSwgaHRtbFsnY2xpZW50JyArIGF4aXNdLCBodG1sWydvZmZzZXQnICsgYXhpc10sIGh0bWxbJ3Njcm9sbCcgKyBheGlzXSwgaXNJRSQxKDEwKSA/IHBhcnNlSW50KGh0bWxbJ29mZnNldCcgKyBheGlzXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCcpXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnKV0pIDogMCk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50KSB7XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gaXNJRSQxKDEwKSAmJiBnZXRDb21wdXRlZFN0eWxlKGh0bWwpO1xuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBnZXRTaXplKCdIZWlnaHQnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcbiAgICB3aWR0aDogZ2V0U2l6ZSgnV2lkdGgnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKVxuICB9O1xufVxuXG52YXIgY2xhc3NDYWxsQ2hlY2skMSA9IGZ1bmN0aW9uIGNsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyQxID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkkMSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMkMSA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzJDEoe30sIG9mZnNldHMsIHtcbiAgICByaWdodDogb2Zmc2V0cy5sZWZ0ICsgb2Zmc2V0cy53aWR0aCxcbiAgICBib3R0b206IG9mZnNldHMudG9wICsgb2Zmc2V0cy5oZWlnaHRcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gY2xpZW50IHJlY3RcbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSB7fTtcblxuICAvLyBJRTEwIDEwIEZJWDogUGxlYXNlLCBkb24ndCBhc2ssIHRoZSBlbGVtZW50IGlzbid0XG4gIC8vIGNvbnNpZGVyZWQgaW4gRE9NIGluIHNvbWUgY2lyY3Vtc3RhbmNlcy4uLlxuICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXG4gIHRyeSB7XG4gICAgaWYgKGlzSUUkMSgxMCkpIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICAgICAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQ7XG4gICAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxuICB9O1xuXG4gIC8vIHN1YnRyYWN0IHNjcm9sbGJhciBzaXplIGZyb20gc2l6ZXNcbiAgdmFyIHNpemVzID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xuICB2YXIgd2lkdGggPSBzaXplcy53aWR0aCB8fCBlbGVtZW50LmNsaWVudFdpZHRoIHx8IHJlc3VsdC5yaWdodCAtIHJlc3VsdC5sZWZ0O1xuICB2YXIgaGVpZ2h0ID0gc2l6ZXMuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHJlc3VsdC5ib3R0b20gLSByZXN1bHQudG9wO1xuXG4gIHZhciBob3JpelNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0V2lkdGggLSB3aWR0aDtcbiAgdmFyIHZlcnRTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldEhlaWdodCAtIGhlaWdodDtcblxuICAvLyBpZiBhbiBoeXBvdGhldGljYWwgc2Nyb2xsYmFyIGlzIGRldGVjdGVkLCB3ZSBtdXN0IGJlIHN1cmUgaXQncyBub3QgYSBgYm9yZGVyYFxuICAvLyB3ZSBtYWtlIHRoaXMgY2hlY2sgY29uZGl0aW9uYWwgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgaWYgKGhvcml6U2Nyb2xsYmFyIHx8IHZlcnRTY3JvbGxiYXIpIHtcbiAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xuICAgIGhvcml6U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3gnKTtcbiAgICB2ZXJ0U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3knKTtcblxuICAgIHJlc3VsdC53aWR0aCAtPSBob3JpelNjcm9sbGJhcjtcbiAgICByZXN1bHQuaGVpZ2h0IC09IHZlcnRTY3JvbGxiYXI7XG4gIH1cblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoY2hpbGRyZW4sIHBhcmVudCkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgdmFyIGlzSUUxMCA9IGlzSUUkMSgxMCk7XG4gIHZhciBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgdmFyIGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIHZhciBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuXG4gIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgdmFyIGJvcmRlclRvcFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyVG9wV2lkdGgsIDEwKTtcbiAgdmFyIGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCwgMTApO1xuXG4gIC8vIEluIGNhc2VzIHdoZXJlIHRoZSBwYXJlbnQgaXMgZml4ZWQsIHdlIG11c3QgaWdub3JlIG5lZ2F0aXZlIHNjcm9sbCBpbiBvZmZzZXQgY2FsY1xuICBpZiAoZml4ZWRQb3NpdGlvbiAmJiBpc0hUTUwpIHtcbiAgICBwYXJlbnRSZWN0LnRvcCA9IE1hdGgubWF4KHBhcmVudFJlY3QudG9wLCAwKTtcbiAgICBwYXJlbnRSZWN0LmxlZnQgPSBNYXRoLm1heChwYXJlbnRSZWN0LmxlZnQsIDApO1xuICB9XG4gIHZhciBvZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh7XG4gICAgdG9wOiBjaGlsZHJlblJlY3QudG9wIC0gcGFyZW50UmVjdC50b3AgLSBib3JkZXJUb3BXaWR0aCxcbiAgICBsZWZ0OiBjaGlsZHJlblJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCAtIGJvcmRlckxlZnRXaWR0aCxcbiAgICB3aWR0aDogY2hpbGRyZW5SZWN0LndpZHRoLFxuICAgIGhlaWdodDogY2hpbGRyZW5SZWN0LmhlaWdodFxuICB9KTtcbiAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSAwO1xuICBvZmZzZXRzLm1hcmdpbkxlZnQgPSAwO1xuXG4gIC8vIFN1YnRyYWN0IG1hcmdpbnMgb2YgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgaXQncyBiZWluZyB1c2VkIGFzIHBhcmVudFxuICAvLyB3ZSBkbyB0aGlzIG9ubHkgb24gSFRNTCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgZWxlbWVudCB0aGF0IGJlaGF2ZXNcbiAgLy8gZGlmZmVyZW50bHkgd2hlbiBtYXJnaW5zIGFyZSBhcHBsaWVkIHRvIGl0LiBUaGUgbWFyZ2lucyBhcmUgaW5jbHVkZWQgaW5cbiAgLy8gdGhlIGJveCBvZiB0aGUgZG9jdW1lbnRFbGVtZW50LCBpbiB0aGUgb3RoZXIgY2FzZXMgbm90LlxuICBpZiAoIWlzSUUxMCAmJiBpc0hUTUwpIHtcbiAgICB2YXIgbWFyZ2luVG9wID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wLCAxMCk7XG4gICAgdmFyIG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0LCAxMCk7XG5cbiAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmxlZnQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcbiAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG5cbiAgICAvLyBBdHRhY2ggbWFyZ2luVG9wIGFuZCBtYXJnaW5MZWZ0IGJlY2F1c2UgaW4gc29tZSBjaXJjdW1zdGFuY2VzIHdlIG1heSBuZWVkIHRoZW1cbiAgICBvZmZzZXRzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xuICB9XG5cbiAgaWYgKGlzSUUxMCAmJiAhZml4ZWRQb3NpdGlvbiA/IHBhcmVudC5jb250YWlucyhzY3JvbGxQYXJlbnQpIDogcGFyZW50ID09PSBzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50Lm5vZGVOYW1lICE9PSAnQk9EWScpIHtcbiAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50KSB7XG4gIHZhciBleGNsdWRlU2Nyb2xsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciByZWxhdGl2ZU9mZnNldCA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShlbGVtZW50LCBodG1sKTtcbiAgdmFyIHdpZHRoID0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gIHZhciBoZWlnaHQgPSBNYXRoLm1heChodG1sLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gIHZhciBzY3JvbGxUb3AgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sKSA6IDA7XG4gIHZhciBzY3JvbGxMZWZ0ID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCwgJ2xlZnQnKSA6IDA7XG5cbiAgdmFyIG9mZnNldCA9IHtcbiAgICB0b3A6IHNjcm9sbFRvcCAtIHJlbGF0aXZlT2Zmc2V0LnRvcCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpblRvcCxcbiAgICBsZWZ0OiBzY3JvbGxMZWZ0IC0gcmVsYXRpdmVPZmZzZXQubGVmdCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpbkxlZnQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBmaXhlZCBvciBpcyBpbnNpZGUgYSBmaXhlZCBwYXJlbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBjdXN0b21Db250YWluZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG8gXCJpc0ZpeGVkP1wiXG4gKi9cbmZ1bmN0aW9uIGlzRml4ZWQoZWxlbWVudCkge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gaXNGaXhlZChnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBmaXJzdCB0cmFuc2Zvcm1lZCBwYXJlbnQgb3IgZG9jdW1lbnRFbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQucGFyZW50RWxlbWVudCB8fCBpc0lFJDEoKSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbiAgdmFyIGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuXG4vKipcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFkZGluZ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQgLSBFbGVtZW50IHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGFyaWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZpeGVkUG9zaXRpb24gLSBJcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb29yZGluYXRlcyBvZiB0aGUgYm91bmRhcmllc1xuICovXG5mdW5jdGlvbiBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcblxuICB2YXIgYm91bmRhcmllcyA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIHJlZmVyZW5jZSk7XG5cbiAgLy8gSGFuZGxlIHZpZXdwb3J0IGNhc2VcbiAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnKSB7XG4gICAgYm91bmRhcmllcyA9IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcbiAgICB2YXIgYm91bmRhcmllc05vZGUgPSB2b2lkIDA7XG4gICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShyZWZlcmVuY2UpKTtcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcbiAgICB9XG5cbiAgICB2YXIgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShib3VuZGFyaWVzTm9kZSwgb2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcblxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgIHZhciBfZ2V0V2luZG93U2l6ZXMgPSBnZXRXaW5kb3dTaXplcyhwb3BwZXIub3duZXJEb2N1bWVudCksXG4gICAgICAgICAgaGVpZ2h0ID0gX2dldFdpbmRvd1NpemVzLmhlaWdodCxcbiAgICAgICAgICB3aWR0aCA9IF9nZXRXaW5kb3dTaXplcy53aWR0aDtcblxuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gaGVpZ2h0ICsgb2Zmc2V0cy50b3A7XG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xuICAgICAgYm91bmRhcmllcy5yaWdodCA9IHdpZHRoICsgb2Zmc2V0cy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBwYWRkaW5nc1xuICBwYWRkaW5nID0gcGFkZGluZyB8fCAwO1xuICB2YXIgaXNQYWRkaW5nTnVtYmVyID0gdHlwZW9mIHBhZGRpbmcgPT09ICdudW1iZXInO1xuICBib3VuZGFyaWVzLmxlZnQgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcubGVmdCB8fCAwO1xuICBib3VuZGFyaWVzLnRvcCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy50b3AgfHwgMDtcbiAgYm91bmRhcmllcy5yaWdodCAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5yaWdodCB8fCAwO1xuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5ib3R0b20gfHwgMDtcblxuICByZXR1cm4gYm91bmRhcmllcztcbn1cblxuZnVuY3Rpb24gZ2V0QXJlYShfcmVmKSB7XG4gIHZhciB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICByZXR1cm4gd2lkdGggKiBoZWlnaHQ7XG59XG5cbi8qKlxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxuICogYXZhaWxhYmxlIHNwYWNlLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQocGxhY2VtZW50LCByZWZSZWN0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgdmFyIHBhZGRpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IDA7XG5cbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfVxuXG4gIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhwb3BwZXIsIHJlZmVyZW5jZSwgcGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQpO1xuXG4gIHZhciByZWN0cyA9IHtcbiAgICB0b3A6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5ib3R0b20gLSByZWZSZWN0LmJvdHRvbVxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIF9leHRlbmRzJDEoe1xuICAgICAga2V5OiBrZXlcbiAgICB9LCByZWN0c1trZXldLCB7XG4gICAgICBhcmVhOiBnZXRBcmVhKHJlY3RzW2tleV0pXG4gICAgfSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5hcmVhIC0gYS5hcmVhO1xuICB9KTtcblxuICB2YXIgZmlsdGVyZWRBcmVhcyA9IHNvcnRlZEFyZWFzLmZpbHRlcihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0O1xuICAgIHJldHVybiB3aWR0aCA+PSBwb3BwZXIuY2xpZW50V2lkdGggJiYgaGVpZ2h0ID49IHBvcHBlci5jbGllbnRIZWlnaHQ7XG4gIH0pO1xuXG4gIHZhciBjb21wdXRlZFBsYWNlbWVudCA9IGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMCA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5IDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICByZXR1cm4gY29tcHV0ZWRQbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xufVxuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtFbGVtZW50fSBmaXhlZFBvc2l0aW9uIC0gaXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZnVuY3Rpb24gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UpIHtcbiAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG5cbiAgdmFyIGNvbW1vbk9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgcmVmZXJlbmNlKTtcbiAgcmV0dXJuIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShyZWZlcmVuY2UsIGNvbW1vbk9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZ2V0T3V0ZXJTaXplcyhlbGVtZW50KSB7XG4gIHZhciBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20pO1xuICB2YXIgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQpICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQpO1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoICsgeSxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgeFxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50XG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICB2YXIgaGFzaCA9IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JywgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gLSBDU1MgcG9zaXRpb24gdGhlIFBvcHBlciB3aWxsIGdldCBhcHBsaWVkXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzIC0gdGhlIHJlZmVyZW5jZSBvZmZzZXRzICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7U3RyaW5nfSBwbGFjZW1lbnQgLSBvbmUgb2YgdGhlIHZhbGlkIHBsYWNlbWVudCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZnVuY3Rpb24gZ2V0UG9wcGVyT2Zmc2V0cyhwb3BwZXIsIHJlZmVyZW5jZU9mZnNldHMsIHBsYWNlbWVudCkge1xuICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICAvLyBHZXQgcG9wcGVyIG5vZGUgc2l6ZXNcbiAgdmFyIHBvcHBlclJlY3QgPSBnZXRPdXRlclNpemVzKHBvcHBlcik7XG5cbiAgLy8gQWRkIHBvc2l0aW9uLCB3aWR0aCBhbmQgaGVpZ2h0IHRvIG91ciBvZmZzZXRzIG9iamVjdFxuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHtcbiAgICB3aWR0aDogcG9wcGVyUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHBvcHBlclJlY3QuaGVpZ2h0XG4gIH07XG5cbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSBwb3BwZXIgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxuICB2YXIgaXNIb3JpeiA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcbiAgdmFyIHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBtZWFzdXJlbWVudCA9IGlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIHZhciBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIHBvcHBlck9mZnNldHNbbWFpblNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1ttYWluU2lkZV0gKyByZWZlcmVuY2VPZmZzZXRzW21lYXN1cmVtZW50XSAvIDIgLSBwb3BwZXJSZWN0W21lYXN1cmVtZW50XSAvIDI7XG4gIGlmIChwbGFjZW1lbnQgPT09IHNlY29uZGFyeVNpZGUpIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHBvcHBlclJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdO1xuICB9IGVsc2Uge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW2dldE9wcG9zaXRlUGxhY2VtZW50KHNlY29uZGFyeVNpZGUpXTtcbiAgfVxuXG4gIHJldHVybiBwb3BwZXJPZmZzZXRzO1xufVxuXG4vKipcbiAqIE1pbWljcyB0aGUgYGZpbmRgIG1ldGhvZCBvZiBBcnJheVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5mdW5jdGlvbiBmaW5kKGFyciwgY2hlY2spIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kIGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcbiAgICByZXR1cm4gYXJyLmZpbmQoY2hlY2spO1xuICB9XG5cbiAgLy8gdXNlIGBmaWx0ZXJgIHRvIG9idGFpbiB0aGUgc2FtZSBiZWhhdmlvciBvZiBgZmluZGBcbiAgcmV0dXJuIGFyci5maWx0ZXIoY2hlY2spWzBdO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIG1hdGNoaW5nIG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBwcm9wLCB2YWx1ZSkge1xuICAvLyB1c2UgbmF0aXZlIGZpbmRJbmRleCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpIHtcbiAgICByZXR1cm4gYXJyLmZpbmRJbmRleChmdW5jdGlvbiAoY3VyKSB7XG4gICAgICByZXR1cm4gY3VyW3Byb3BdID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVzZSBgZmluZGAgKyBgaW5kZXhPZmAgaWYgYGZpbmRJbmRleGAgaXNuJ3Qgc3VwcG9ydGVkXG4gIHZhciBtYXRjaCA9IGZpbmQoYXJyLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9ialtwcm9wXSA9PT0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gYXJyLmluZGV4T2YobWF0Y2gpO1xufVxuXG4vKipcbiAqIExvb3AgdHJvdWdoIHRoZSBsaXN0IG9mIG1vZGlmaWVycyBhbmQgcnVuIHRoZW0gaW4gb3JkZXIsXG4gKiBlYWNoIG9mIHRoZW0gd2lsbCB0aGVuIGVkaXQgdGhlIGRhdGEgb2JqZWN0LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRzIC0gT3B0aW9uYWwgbW9kaWZpZXIgbmFtZSB1c2VkIGFzIHN0b3BwZXJcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fVxuICovXG5mdW5jdGlvbiBydW5Nb2RpZmllcnMobW9kaWZpZXJzLCBkYXRhLCBlbmRzKSB7XG4gIHZhciBtb2RpZmllcnNUb1J1biA9IGVuZHMgPT09IHVuZGVmaW5lZCA/IG1vZGlmaWVycyA6IG1vZGlmaWVycy5zbGljZSgwLCBmaW5kSW5kZXgobW9kaWZpZXJzLCAnbmFtZScsIGVuZHMpKTtcblxuICBtb2RpZmllcnNUb1J1bi5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmIChtb2RpZmllclsnZnVuY3Rpb24nXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICB9XG4gICAgdmFyIGZuID0gbW9kaWZpZXJbJ2Z1bmN0aW9uJ10gfHwgbW9kaWZpZXIuZm47IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgaWYgKG1vZGlmaWVyLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHRvIG9mZnNldHMgdG8gbWFrZSB0aGVtIGEgY29tcGxldGUgY2xpZW50UmVjdCBvYmplY3RcbiAgICAgIC8vIHdlIGRvIHRoaXMgYmVmb3JlIGVhY2ggbW9kaWZpZXIgdG8gbWFrZSBzdXJlIHRoZSBwcmV2aW91cyBvbmUgZG9lc24ndFxuICAgICAgLy8gbWVzcyB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG4gICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucmVmZXJlbmNlKTtcblxuICAgICAgZGF0YSA9IGZuKGRhdGEsIG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIsIGNvbXB1dGluZyB0aGUgbmV3IG9mZnNldHMgYW5kIGFwcGx5aW5nXG4gKiB0aGUgbmV3IHN0eWxlLjxiciAvPlxuICogUHJlZmVyIGBzY2hlZHVsZVVwZGF0ZWAgb3ZlciBgdXBkYXRlYCBiZWNhdXNlIG9mIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgLy8gaWYgcG9wcGVyIGlzIGRlc3Ryb3llZCwgZG9uJ3QgcGVyZm9ybSBhbnkgZnVydGhlciB1cGRhdGVcbiAgaWYgKHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGF0YSA9IHtcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICBzdHlsZXM6IHt9LFxuICAgIGFycm93U3R5bGVzOiB7fSxcbiAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICBmbGlwcGVkOiBmYWxzZSxcbiAgICBvZmZzZXRzOiB7fVxuICB9O1xuXG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0aGlzLnN0YXRlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgZGF0YS5wbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudCh0aGlzLm9wdGlvbnMucGxhY2VtZW50LCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmcpO1xuXG4gIC8vIHN0b3JlIHRoZSBjb21wdXRlZCBwbGFjZW1lbnQgaW5zaWRlIGBvcmlnaW5hbFBsYWNlbWVudGBcbiAgZGF0YS5vcmlnaW5hbFBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuXG4gIGRhdGEucG9zaXRpb25GaXhlZCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkO1xuXG4gIC8vIGNvbXB1dGUgdGhlIHBvcHBlciBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRQb3BwZXJPZmZzZXRzKHRoaXMucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSc7XG5cbiAgLy8gcnVuIHRoZSBtb2RpZmllcnNcbiAgZGF0YSA9IHJ1bk1vZGlmaWVycyh0aGlzLm1vZGlmaWVycywgZGF0YSk7XG5cbiAgLy8gdGhlIGZpcnN0IGB1cGRhdGVgIHdpbGwgY2FsbCBgb25DcmVhdGVgIGNhbGxiYWNrXG4gIC8vIHRoZSBvdGhlciBvbmVzIHdpbGwgY2FsbCBgb25VcGRhdGVgIGNhbGxiYWNrXG4gIGlmICghdGhpcy5zdGF0ZS5pc0NyZWF0ZWQpIHtcbiAgICB0aGlzLnN0YXRlLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgdGhpcy5vcHRpb25zLm9uQ3JlYXRlKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub3B0aW9ucy5vblVwZGF0ZShkYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQobW9kaWZpZXJzLCBtb2RpZmllck5hbWUpIHtcbiAgcmV0dXJuIG1vZGlmaWVycy5zb21lKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIGVuYWJsZWQgPSBfcmVmLmVuYWJsZWQ7XG4gICAgcmV0dXJuIGVuYWJsZWQgJiYgbmFtZSA9PT0gbW9kaWZpZXJOYW1lO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByZWZpeGVkIHN1cHBvcnRlZCBwcm9wZXJ0eSBuYW1lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHkgKGNhbWVsQ2FzZSlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHByZWZpeGVkIHByb3BlcnR5IChjYW1lbENhc2Ugb3IgUGFzY2FsQ2FzZSwgZGVwZW5kaW5nIG9uIHRoZSB2ZW5kb3IgcHJlZml4KVxuICovXG5mdW5jdGlvbiBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUocHJvcGVydHkpIHtcbiAgdmFyIHByZWZpeGVzID0gW2ZhbHNlLCAnbXMnLCAnV2Via2l0JywgJ01veicsICdPJ107XG4gIHZhciB1cHBlclByb3AgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgdmFyIHRvQ2hlY2sgPSBwcmVmaXggPyAnJyArIHByZWZpeCArIHVwcGVyUHJvcCA6IHByb3BlcnR5O1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVt0b0NoZWNrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0b0NoZWNrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgcG9wcGVyLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuICB0aGlzLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAvLyB0b3VjaCBET00gb25seSBpZiBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgaXMgZW5hYmxlZFxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQodGhpcy5tb2RpZmllcnMsICdhcHBseVN0eWxlJykpIHtcbiAgICB0aGlzLnBvcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50Jyk7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS50b3AgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5ib3R0b20gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS53aWxsQ2hhbmdlID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGVbZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKV0gPSAnJztcbiAgfVxuXG4gIHRoaXMuZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgLy8gcmVtb3ZlIHRoZSBwb3BwZXIgaWYgdXNlciBleHBsaWNpdHkgYXNrZWQgZm9yIHRoZSBkZWxldGlvbiBvbiBkZXN0cm95XG4gIC8vIGRvIG5vdCB1c2UgYHJlbW92ZWAgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBpdFxuICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZU9uRGVzdHJveSkge1xuICAgIHRoaXMucG9wcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wb3BwZXIpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEdldCB0aGUgd2luZG93IGFzc29jaWF0ZWQgd2l0aCB0aGUgZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7V2luZG93fVxuICovXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xuICB2YXIgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogd2luZG93O1xufVxuXG5mdW5jdGlvbiBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsUGFyZW50LCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpIHtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudC5ub2RlTmFtZSA9PT0gJ0JPRFknO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gc2Nyb2xsUGFyZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiBzY3JvbGxQYXJlbnQ7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIGlmICghaXNCb2R5KSB7XG4gICAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKGdldFNjcm9sbFBhcmVudCh0YXJnZXQucGFyZW50Tm9kZSksIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cyk7XG4gIH1cbiAgc2Nyb2xsUGFyZW50cy5wdXNoKHRhcmdldCk7XG59XG5cbi8qKlxuICogU2V0dXAgbmVlZGVkIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgb3B0aW9ucywgc3RhdGUsIHVwZGF0ZUJvdW5kKSB7XG4gIC8vIFJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgc3RhdGUudXBkYXRlQm91bmQgPSB1cGRhdGVCb3VuZDtcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAvLyBTY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgdmFyIHNjcm9sbEVsZW1lbnQgPSBnZXRTY3JvbGxQYXJlbnQocmVmZXJlbmNlKTtcbiAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbEVsZW1lbnQsICdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCwgc3RhdGUuc2Nyb2xsUGFyZW50cyk7XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBzY3JvbGxFbGVtZW50O1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gdHJ1ZTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogSXQgd2lsbCBhZGQgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHN0YXJ0IHJlY2FsY3VsYXRpbmdcbiAqIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIgZWxlbWVudCB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICghdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHNldHVwRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucywgdGhpcy5zdGF0ZSwgdGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgc3RhdGUpIHtcbiAgLy8gUmVtb3ZlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQpO1xuXG4gIC8vIFJlbW92ZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQpO1xuICB9KTtcblxuICAvLyBSZXNldCBzdGF0ZVxuICBzdGF0ZS51cGRhdGVCb3VuZCA9IG51bGw7XG4gIHN0YXRlLnNjcm9sbFBhcmVudHMgPSBbXTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IG51bGw7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIEl0IHdpbGwgcmVtb3ZlIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCB3b24ndCByZWNhbGN1bGF0ZSBwb3BwZXIgcG9zaXRpb25cbiAqIHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLiBJdCBhbHNvIHdvbid0IHRyaWdnZXIgYG9uVXBkYXRlYCBjYWxsYmFjayBhbnltb3JlLFxuICogdW5sZXNzIHlvdSBjYWxsIGB1cGRhdGVgIG1ldGhvZCBtYW51YWxseS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAodGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9IHJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCB0aGlzLnN0YXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIFRlbGxzIGlmIGEgZ2l2ZW4gaW5wdXQgaXMgYSBudW1iZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Kn0gaW5wdXQgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTnVtZXJpYyhuKSB7XG4gIHJldHVybiBuICE9PSAnJyAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XG59XG5cbi8qKlxuICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBzdHlsZSB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcykge1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICB2YXIgdW5pdCA9ICcnO1xuICAgIC8vIGFkZCB1bml0IGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljIGFuZCBpcyBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgIGlmIChbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PSAtMSAmJiBpc051bWVyaWMoc3R5bGVzW3Byb3BdKSkge1xuICAgICAgdW5pdCA9ICdweCc7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF0gKyB1bml0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgYXR0cmlidXRlcyB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW3Byb3BdO1xuICAgIGlmICh2YWx1ZSAhPT0gZmFsc2UpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3AsIGF0dHJpYnV0ZXNbcHJvcF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuc3R5bGVzIC0gTGlzdCBvZiBzdHlsZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5hdHRyaWJ1dGVzIC0gTGlzdCBvZiBhdHRyaWJ1dGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIHNhbWUgZGF0YSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gYXBwbHlTdHlsZShkYXRhKSB7XG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLnN0eWxlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIGluIHRoaXMgd2F5IHdlIGNhbiBtYWtlIHRoZSAzcmQgcGFydHkgbW9kaWZpZXJzIGFkZCBjdXN0b20gc3R5bGVzIHRvIGl0XG4gIC8vIEJlIGF3YXJlLCBtb2RpZmllcnMgY291bGQgb3ZlcnJpZGUgdGhlIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgcHJldmlvdXNcbiAgLy8gbGluZXMgb2YgdGhpcyBtb2RpZmllciFcbiAgc2V0U3R5bGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLnN0eWxlcyk7XG5cbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuYXR0cmlidXRlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIHRoZXkgd2lsbCBiZSBzZXQgYXMgSFRNTCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gIHNldEF0dHJpYnV0ZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuYXR0cmlidXRlcyk7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGRlZmluZWQgYW5kIGFycm93U3R5bGVzIGhhcyBzb21lIHByb3BlcnRpZXNcbiAgaWYgKGRhdGEuYXJyb3dFbGVtZW50ICYmIE9iamVjdC5rZXlzKGRhdGEuYXJyb3dTdHlsZXMpLmxlbmd0aCkge1xuICAgIHNldFN0eWxlcyhkYXRhLmFycm93RWxlbWVudCwgZGF0YS5hcnJvd1N0eWxlcyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHgtcGxhY2VtZW50IGF0dHJpYnV0ZSBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGJlY2F1c2UgaXQgY291bGQgYmUgdXNlZFxuICogdG8gYWRkIG1hcmdpbnMgdG8gdGhlIHBvcHBlciBtYXJnaW5zIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQgdG8gZ2V0IHRoZVxuICogY29ycmVjdCBwb3BwZXIgb2Zmc2V0cy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIubW9kaWZpZXJzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgYXMgcG9wcGVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFBvcHBlci5qcyBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGVPbkxvYWQocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgc3RhdGUpIHtcbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIHZhciByZWZlcmVuY2VPZmZzZXRzID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIHZhciBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChvcHRpb25zLnBsYWNlbWVudCwgcmVmZXJlbmNlT2Zmc2V0cywgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZyk7XG5cbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnLCBwbGFjZW1lbnQpO1xuXG4gIC8vIEFwcGx5IGBwb3NpdGlvbmAgdG8gcG9wcGVyIGJlZm9yZSBhbnl0aGluZyBlbHNlIGJlY2F1c2VcbiAgLy8gd2l0aG91dCB0aGUgcG9zaXRpb24gYXBwbGllZCB3ZSBjYW4ndCBndWFyYW50ZWUgY29ycmVjdCBjb21wdXRhdGlvbnNcbiAgc2V0U3R5bGVzKHBvcHBlciwgeyBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScgfSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gIHZhciB4ID0gb3B0aW9ucy54LFxuICAgICAgeSA9IG9wdGlvbnMueTtcbiAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgLy8gUmVtb3ZlIHRoaXMgbGVnYWN5IHN1cHBvcnQgaW4gUG9wcGVyLmpzIHYyXG5cbiAgdmFyIGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZSc7XG4gIH0pLmdwdUFjY2VsZXJhdGlvbjtcbiAgaWYgKGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgZ3B1QWNjZWxlcmF0aW9uYCBvcHRpb24gbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXIgYW5kIHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUG9wcGVyLmpzIScpO1xuICB9XG4gIHZhciBncHVBY2NlbGVyYXRpb24gPSBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCA/IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICB2YXIgb2Zmc2V0UGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuXG4gIC8vIFN0eWxlc1xuICB2YXIgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBwb3BwZXIucG9zaXRpb25cbiAgfTtcblxuICAvLyBBdm9pZCBibHVycnkgdGV4dCBieSB1c2luZyBmdWxsIHBpeGVsIGludGVnZXJzLlxuICAvLyBGb3IgcGl4ZWwtcGVyZmVjdCBwb3NpdGlvbmluZywgdG9wL2JvdHRvbSBwcmVmZXJzIHJvdW5kZWRcbiAgLy8gdmFsdWVzLCB3aGlsZSBsZWZ0L3JpZ2h0IHByZWZlcnMgZmxvb3JlZCB2YWx1ZXMuXG4gIHZhciBvZmZzZXRzID0ge1xuICAgIGxlZnQ6IE1hdGguZmxvb3IocG9wcGVyLmxlZnQpLFxuICAgIHRvcDogTWF0aC5yb3VuZChwb3BwZXIudG9wKSxcbiAgICBib3R0b206IE1hdGgucm91bmQocG9wcGVyLmJvdHRvbSksXG4gICAgcmlnaHQ6IE1hdGguZmxvb3IocG9wcGVyLnJpZ2h0KVxuICB9O1xuXG4gIHZhciBzaWRlQSA9IHggPT09ICdib3R0b20nID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgdmFyIHNpZGVCID0geSA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cbiAgLy8gaWYgZ3B1QWNjZWxlcmF0aW9uIGlzIHNldCB0byBgdHJ1ZWAgYW5kIHRyYW5zZm9ybSBpcyBzdXBwb3J0ZWQsXG4gIC8vICB3ZSB1c2UgYHRyYW5zbGF0ZTNkYCB0byBhcHBseSB0aGUgcG9zaXRpb24gdG8gdGhlIHBvcHBlciB3ZVxuICAvLyBhdXRvbWF0aWNhbGx5IHVzZSB0aGUgc3VwcG9ydGVkIHByZWZpeGVkIHZlcnNpb24gaWYgbmVlZGVkXG4gIHZhciBwcmVmaXhlZFByb3BlcnR5ID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcblxuICAvLyBub3csIGxldCdzIG1ha2UgYSBzdGVwIGJhY2sgYW5kIGxvb2sgYXQgdGhpcyBjb2RlIGNsb3NlbHkgKHd0Zj8pXG4gIC8vIElmIHRoZSBjb250ZW50IG9mIHRoZSBwb3BwZXIgZ3Jvd3Mgb25jZSBpdCdzIGJlZW4gcG9zaXRpb25lZCwgaXRcbiAgLy8gbWF5IGhhcHBlbiB0aGF0IHRoZSBwb3BwZXIgZ2V0cyBtaXNwbGFjZWQgYmVjYXVzZSBvZiB0aGUgbmV3IGNvbnRlbnRcbiAgLy8gb3ZlcmZsb3dpbmcgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRvIGF2b2lkIHRoaXMgcHJvYmxlbSwgd2UgcHJvdmlkZSB0d28gb3B0aW9ucyAoeCBhbmQgeSksIHdoaWNoIGFsbG93XG4gIC8vIHRoZSBjb25zdW1lciB0byBkZWZpbmUgdGhlIG9mZnNldCBvcmlnaW4uXG4gIC8vIElmIHdlIHBvc2l0aW9uIGEgcG9wcGVyIG9uIHRvcCBvZiBhIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSBjYW4gc2V0XG4gIC8vIGB4YCB0byBgdG9wYCB0byBtYWtlIHRoZSBwb3BwZXIgZ3JvdyB0b3dhcmRzIGl0cyB0b3AgaW5zdGVhZCBvZlxuICAvLyBpdHMgYm90dG9tLlxuICB2YXIgbGVmdCA9IHZvaWQgMCxcbiAgICAgIHRvcCA9IHZvaWQgMDtcbiAgaWYgKHNpZGVBID09PSAnYm90dG9tJykge1xuICAgIC8vIHdoZW4gb2Zmc2V0UGFyZW50IGlzIDxodG1sPiB0aGUgcG9zaXRpb25pbmcgaXMgcmVsYXRpdmUgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIChleGNsdWRpbmcgdGhlIHNjcm9sbGJhcilcbiAgICAvLyBhbmQgbm90IHRoZSBib3R0b20gb2YgdGhlIGh0bWwgZWxlbWVudFxuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9wID0gLW9mZnNldFBhcmVudFJlY3QuaGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRvcCA9IG9mZnNldHMudG9wO1xuICB9XG4gIGlmIChzaWRlQiA9PT0gJ3JpZ2h0Jykge1xuICAgIGlmIChvZmZzZXRQYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudFJlY3Qud2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZWZ0ID0gb2Zmc2V0cy5sZWZ0O1xuICB9XG4gIGlmIChncHVBY2NlbGVyYXRpb24gJiYgcHJlZml4ZWRQcm9wZXJ0eSkge1xuICAgIHN0eWxlc1twcmVmaXhlZFByb3BlcnR5XSA9ICd0cmFuc2xhdGUzZCgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCwgMCknO1xuICAgIHN0eWxlc1tzaWRlQV0gPSAwO1xuICAgIHN0eWxlc1tzaWRlQl0gPSAwO1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3Rod2VyaXNlLCB3ZSB1c2UgdGhlIHN0YW5kYXJkIGB0b3BgLCBgbGVmdGAsIGBib3R0b21gIGFuZCBgcmlnaHRgIHByb3BlcnRpZXNcbiAgICB2YXIgaW52ZXJ0VG9wID0gc2lkZUEgPT09ICdib3R0b20nID8gLTEgOiAxO1xuICAgIHZhciBpbnZlcnRMZWZ0ID0gc2lkZUIgPT09ICdyaWdodCcgPyAtMSA6IDE7XG4gICAgc3R5bGVzW3NpZGVBXSA9IHRvcCAqIGludmVydFRvcDtcbiAgICBzdHlsZXNbc2lkZUJdID0gbGVmdCAqIGludmVydExlZnQ7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSBzaWRlQSArICcsICcgKyBzaWRlQjtcbiAgfVxuXG4gIC8vIEF0dHJpYnV0ZXNcbiAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgJ3gtcGxhY2VtZW50JzogZGF0YS5wbGFjZW1lbnRcbiAgfTtcblxuICAvLyBVcGRhdGUgYGRhdGFgIGF0dHJpYnV0ZXMsIHN0eWxlcyBhbmQgYXJyb3dTdHlsZXNcbiAgZGF0YS5hdHRyaWJ1dGVzID0gX2V4dGVuZHMkMSh7fSwgYXR0cmlidXRlcywgZGF0YS5hdHRyaWJ1dGVzKTtcbiAgZGF0YS5zdHlsZXMgPSBfZXh0ZW5kcyQxKHt9LCBzdHlsZXMsIGRhdGEuc3R5bGVzKTtcbiAgZGF0YS5hcnJvd1N0eWxlcyA9IF9leHRlbmRzJDEoe30sIGRhdGEub2Zmc2V0cy5hcnJvdywgZGF0YS5hcnJvd1N0eWxlcyk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgZGVwZW5kcyBmcm9tIGFub3RoZXIgb25lLjxiciAvPlxuICogSXQgY2hlY2tzIGlmIHRoZSBuZWVkZWQgbW9kaWZpZXIgaXMgbGlzdGVkIGFuZCBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzIC0gbGlzdCBvZiBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0aW5nTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGluZyBtb2RpZmllclxuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RlZE5hbWUgLSBuYW1lIG9mIHJlcXVlc3RlZCBtb2RpZmllclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTW9kaWZpZXJSZXF1aXJlZChtb2RpZmllcnMsIHJlcXVlc3RpbmdOYW1lLCByZXF1ZXN0ZWROYW1lKSB7XG4gIHZhciByZXF1ZXN0aW5nID0gZmluZChtb2RpZmllcnMsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgcmV0dXJuIG5hbWUgPT09IHJlcXVlc3RpbmdOYW1lO1xuICB9KTtcblxuICB2YXIgaXNSZXF1aXJlZCA9ICEhcmVxdWVzdGluZyAmJiBtb2RpZmllcnMuc29tZShmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICByZXR1cm4gbW9kaWZpZXIubmFtZSA9PT0gcmVxdWVzdGVkTmFtZSAmJiBtb2RpZmllci5lbmFibGVkICYmIG1vZGlmaWVyLm9yZGVyIDwgcmVxdWVzdGluZy5vcmRlcjtcbiAgfSk7XG5cbiAgaWYgKCFpc1JlcXVpcmVkKSB7XG4gICAgdmFyIF9yZXF1ZXN0aW5nID0gJ2AnICsgcmVxdWVzdGluZ05hbWUgKyAnYCc7XG4gICAgdmFyIHJlcXVlc3RlZCA9ICdgJyArIHJlcXVlc3RlZE5hbWUgKyAnYCc7XG4gICAgY29uc29sZS53YXJuKHJlcXVlc3RlZCArICcgbW9kaWZpZXIgaXMgcmVxdWlyZWQgYnkgJyArIF9yZXF1ZXN0aW5nICsgJyBtb2RpZmllciBpbiBvcmRlciB0byB3b3JrLCBiZSBzdXJlIHRvIGluY2x1ZGUgaXQgYmVmb3JlICcgKyBfcmVxdWVzdGluZyArICchJyk7XG4gIH1cbiAgcmV0dXJuIGlzUmVxdWlyZWQ7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBhcnJvdyhkYXRhLCBvcHRpb25zKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzJGFycm93O1xuXG4gIC8vIGFycm93IGRlcGVuZHMgb24ga2VlcFRvZ2V0aGVyIGluIG9yZGVyIHRvIHdvcmtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdhcnJvdycsICdrZWVwVG9nZXRoZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGFycm93RWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgbm90IGZvdW5kLCBkb24ndCBydW4gdGhlIG1vZGlmaWVyXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB0aGUgYXJyb3dFbGVtZW50IGlzbid0IGEgcXVlcnkgc2VsZWN0b3Igd2UgbXVzdCBjaGVjayB0aGF0IHRoZVxuICAgIC8vIHByb3ZpZGVkIERPTSBub2RlIGlzIGNoaWxkIG9mIGl0cyBwb3BwZXIgbm9kZVxuICAgIGlmICghZGF0YS5pbnN0YW5jZS5wb3BwZXIuY29udGFpbnMoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgYXJyb3cuZWxlbWVudGAgbXVzdCBiZSBjaGlsZCBvZiBpdHMgcG9wcGVyIGVsZW1lbnQhJyk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgdmFyIHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcbiAgdmFyIHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGFsdFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICB2YXIgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuXG4gIC8vXG4gIC8vIGV4dGVuZHMga2VlcFRvZ2V0aGVyIGJlaGF2aW9yIG1ha2luZyBzdXJlIHRoZSBwb3BwZXIgYW5kIGl0c1xuICAvLyByZWZlcmVuY2UgaGF2ZSBlbm91Z2ggcGl4ZWxzIGluIGNvbmp1bmN0aW9uXG4gIC8vXG5cbiAgLy8gdG9wL2xlZnQgc2lkZVxuICBpZiAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgcG9wcGVyW3NpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtPSBwb3BwZXJbc2lkZV0gLSAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcbiAgfVxuICAvLyBib3R0b20vcmlnaHQgc2lkZVxuICBpZiAocmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSA+IHBvcHBlcltvcFNpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSArPSByZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplIC0gcG9wcGVyW29wU2lkZV07XG4gIH1cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG5cbiAgLy8gY29tcHV0ZSBjZW50ZXIgb2YgdGhlIHBvcHBlclxuICB2YXIgY2VudGVyID0gcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW2xlbl0gLyAyIC0gYXJyb3dFbGVtZW50U2l6ZSAvIDI7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHBvcHBlciBvZmZzZXRzXG4gIC8vIHRha2UgcG9wcGVyIG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXG4gIHZhciBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICB2YXIgcG9wcGVyTWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzWydtYXJnaW4nICsgc2lkZUNhcGl0YWxpemVkXSwgMTApO1xuICB2YXIgcG9wcGVyQm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzWydib3JkZXInICsgc2lkZUNhcGl0YWxpemVkICsgJ1dpZHRoJ10sIDEwKTtcbiAgdmFyIHNpZGVWYWx1ZSA9IGNlbnRlciAtIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLSBwb3BwZXJNYXJnaW5TaWRlIC0gcG9wcGVyQm9yZGVyU2lkZTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyBwb3BwZXJcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4ocG9wcGVyW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICBkYXRhLmFycm93RWxlbWVudCA9IGFycm93RWxlbWVudDtcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0gKF9kYXRhJG9mZnNldHMkYXJyb3cgPSB7fSwgZGVmaW5lUHJvcGVydHkkMShfZGF0YSRvZmZzZXRzJGFycm93LCBzaWRlLCBNYXRoLnJvdW5kKHNpZGVWYWx1ZSkpLCBkZWZpbmVQcm9wZXJ0eSQxKF9kYXRhJG9mZnNldHMkYXJyb3csIGFsdFNpZGUsICcnKSwgX2RhdGEkb2Zmc2V0cyRhcnJvdyk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgdmFyaWF0aW9uIG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudCB2YXJpYXRpb25cbiAqL1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKSB7XG4gIGlmICh2YXJpYXRpb24gPT09ICdlbmQnKSB7XG4gICAgcmV0dXJuICdzdGFydCc7XG4gIH0gZWxzZSBpZiAodmFyaWF0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuICdlbmQnO1xuICB9XG4gIHJldHVybiB2YXJpYXRpb247XG59XG5cbi8qKlxuICogTGlzdCBvZiBhY2NlcHRlZCBwbGFjZW1lbnRzIHRvIHVzZSBhcyB2YWx1ZXMgb2YgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbi48YnIgLz5cbiAqIFZhbGlkIHBsYWNlbWVudHMgYXJlOlxuICogLSBgYXV0b2BcbiAqIC0gYHRvcGBcbiAqIC0gYHJpZ2h0YFxuICogLSBgYm90dG9tYFxuICogLSBgbGVmdGBcbiAqXG4gKiBFYWNoIHBsYWNlbWVudCBjYW4gaGF2ZSBhIHZhcmlhdGlvbiBmcm9tIHRoaXMgbGlzdDpcbiAqIC0gYC1zdGFydGBcbiAqIC0gYC1lbmRgXG4gKlxuICogVmFyaWF0aW9ucyBhcmUgaW50ZXJwcmV0ZWQgZWFzaWx5IGlmIHlvdSB0aGluayBvZiB0aGVtIGFzIHRoZSBsZWZ0IHRvIHJpZ2h0XG4gKiB3cml0dGVuIGxhbmd1YWdlcy4gSG9yaXpvbnRhbGx5IChgdG9wYCBhbmQgYGJvdHRvbWApLCBgc3RhcnRgIGlzIGxlZnQgYW5kIGBlbmRgXG4gKiBpcyByaWdodC48YnIgLz5cbiAqIFZlcnRpY2FsbHkgKGBsZWZ0YCBhbmQgYHJpZ2h0YCksIGBzdGFydGAgaXMgdG9wIGFuZCBgZW5kYCBpcyBib3R0b20uXG4gKlxuICogU29tZSB2YWxpZCBleGFtcGxlcyBhcmU6XG4gKiAtIGB0b3AtZW5kYCAob24gdG9wIG9mIHJlZmVyZW5jZSwgcmlnaHQgYWxpZ25lZClcbiAqIC0gYHJpZ2h0LXN0YXJ0YCAob24gcmlnaHQgb2YgcmVmZXJlbmNlLCB0b3AgYWxpZ25lZClcbiAqIC0gYGJvdHRvbWAgKG9uIGJvdHRvbSwgY2VudGVyZWQpXG4gKiAtIGBhdXRvLWVuZGAgKG9uIHRoZSBzaWRlIHdpdGggbW9yZSBzcGFjZSBhdmFpbGFibGUsIGFsaWdubWVudCBkZXBlbmRzIGJ5IHBsYWNlbWVudClcbiAqXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAZW51bSB7U3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAbWV0aG9kIHBsYWNlbWVudHNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIHBsYWNlbWVudHMgPSBbJ2F1dG8tc3RhcnQnLCAnYXV0bycsICdhdXRvLWVuZCcsICd0b3Atc3RhcnQnLCAndG9wJywgJ3RvcC1lbmQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQnLCAncmlnaHQtZW5kJywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdsZWZ0LWVuZCcsICdsZWZ0JywgJ2xlZnQtc3RhcnQnXTtcblxuLy8gR2V0IHJpZCBvZiBgYXV0b2AgYGF1dG8tc3RhcnRgIGFuZCBgYXV0by1lbmRgXG52YXIgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuLyoqXG4gKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gKlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCAtIEEgdmFsaWQgcGxhY2VtZW50IChpdCBhY2NlcHRzIHZhcmlhdGlvbnMpXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICovXG5mdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50KSB7XG4gIHZhciBjb3VudGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgaW5kZXggPSB2YWxpZFBsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpO1xuICB2YXIgYXJyID0gdmFsaWRQbGFjZW1lbnRzLnNsaWNlKGluZGV4ICsgMSkuY29uY2F0KHZhbGlkUGxhY2VtZW50cy5zbGljZSgwLCBpbmRleCkpO1xuICByZXR1cm4gY291bnRlciA/IGFyci5yZXZlcnNlKCkgOiBhcnI7XG59XG5cbnZhciBCRUhBVklPUlMgPSB7XG4gIEZMSVA6ICdmbGlwJyxcbiAgQ0xPQ0tXSVNFOiAnY2xvY2t3aXNlJyxcbiAgQ09VTlRFUkNMT0NLV0lTRTogJ2NvdW50ZXJjbG9ja3dpc2UnXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQsIGRhdGEucG9zaXRpb25GaXhlZCk7XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzFdIHx8ICcnO1xuXG4gIHZhciBmbGlwT3JkZXIgPSBbXTtcblxuICBzd2l0Y2ggKG9wdGlvbnMuYmVoYXZpb3IpIHtcbiAgICBjYXNlIEJFSEFWSU9SUy5GTElQOlxuICAgICAgZmxpcE9yZGVyID0gW3BsYWNlbWVudCwgcGxhY2VtZW50T3Bwb3NpdGVdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DT1VOVEVSQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCwgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZmxpcE9yZGVyID0gb3B0aW9ucy5iZWhhdmlvcjtcbiAgfVxuXG4gIGZsaXBPcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgIHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcbiAgICB2YXIgcmVmT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgIHZhciBvdmVybGFwc1JlZiA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IocmVmT2Zmc2V0cy5sZWZ0KSB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKHJlZk9mZnNldHMucmlnaHQpIHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IocmVmT2Zmc2V0cy50b3ApIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IocmVmT2Zmc2V0cy5ib3R0b20pO1xuXG4gICAgdmFyIG92ZXJmbG93c0xlZnQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IoYm91bmRhcmllcy5sZWZ0KTtcbiAgICB2YXIgb3ZlcmZsb3dzUmlnaHQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKGJvdW5kYXJpZXMucmlnaHQpO1xuICAgIHZhciBvdmVyZmxvd3NUb3AgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihib3VuZGFyaWVzLnRvcCk7XG4gICAgdmFyIG92ZXJmbG93c0JvdHRvbSA9IGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKGJvdW5kYXJpZXMuYm90dG9tKTtcblxuICAgIHZhciBvdmVyZmxvd3NCb3VuZGFyaWVzID0gcGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgcGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3AgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b207XG5cbiAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb24gPSAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiYgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0xlZnQgfHwgaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1JpZ2h0IHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3AgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgLy8gdGhpcyBib29sZWFuIHRvIGRldGVjdCBhbnkgZmxpcCBsb29wXG4gICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAvLyB0aGlzIG9iamVjdCBjb250YWlucyBgcG9zaXRpb25gLCB3ZSB3YW50IHRvIHByZXNlcnZlIGl0IGFsb25nIHdpdGhcbiAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzJDEoe30sIGRhdGEub2Zmc2V0cy5wb3BwZXIsIGdldFBvcHBlck9mZnNldHMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIGRhdGEucGxhY2VtZW50KSk7XG5cbiAgICAgIGRhdGEgPSBydW5Nb2RpZmllcnMoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGRhdGEsICdmbGlwJyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBrZWVwVG9nZXRoZXIoZGF0YSkge1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gIHZhciBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgdmFyIHNpZGUgPSBpc1ZlcnRpY2FsID8gJ3JpZ2h0JyA6ICdib3R0b20nO1xuICB2YXIgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gIGlmIChwb3BwZXJbc2lkZV0gPCBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPSBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkgLSBwb3BwZXJbbWVhc3VyZW1lbnRdO1xuICB9XG4gIGlmIChwb3BwZXJbb3BTaWRlXSA+IGZsb29yKHJlZmVyZW5jZVtzaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPSBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgY29udGFpbmluZyB2YWx1ZSArIHVuaXQgaW50byBhIHB4IHZhbHVlIG51bWJlclxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHN0ciAtIFZhbHVlICsgdW5pdCBzdHJpbmdcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBtZWFzdXJlbWVudCAtIGBoZWlnaHRgIG9yIGB3aWR0aGBcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQHJldHVybnMge051bWJlcnxTdHJpbmd9XG4gKiBWYWx1ZSBpbiBwaXhlbHMsIG9yIG9yaWdpbmFsIHN0cmluZyBpZiBubyB2YWx1ZXMgd2VyZSBleHRyYWN0ZWRcbiAqL1xuZnVuY3Rpb24gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSB7XG4gIC8vIHNlcGFyYXRlIHZhbHVlIGZyb20gdW5pdFxuICB2YXIgc3BsaXQgPSBzdHIubWF0Y2goLygoPzpcXC18XFwrKT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuICB2YXIgdmFsdWUgPSArc3BsaXRbMV07XG4gIHZhciB1bml0ID0gc3BsaXRbMl07XG5cbiAgLy8gSWYgaXQncyBub3QgYSBudW1iZXIgaXQncyBhbiBvcGVyYXRvciwgSSBndWVzc1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGlmICh1bml0LmluZGV4T2YoJyUnKSA9PT0gMCkge1xuICAgIHZhciBlbGVtZW50ID0gdm9pZCAwO1xuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSAnJXAnOlxuICAgICAgICBlbGVtZW50ID0gcG9wcGVyT2Zmc2V0cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICclJzpcbiAgICAgIGNhc2UgJyVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSByZWZlcmVuY2VPZmZzZXRzO1xuICAgIH1cblxuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdChlbGVtZW50KTtcbiAgICByZXR1cm4gcmVjdFttZWFzdXJlbWVudF0gLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIGlmICh1bml0ID09PSAndmgnIHx8IHVuaXQgPT09ICd2dycpIHtcbiAgICAvLyBpZiBpcyBhIHZoIG9yIHZ3LCB3ZSBjYWxjdWxhdGUgdGhlIHNpemUgYmFzZWQgb24gdGhlIHZpZXdwb3J0XG4gICAgdmFyIHNpemUgPSB2b2lkIDA7XG4gICAgaWYgKHVuaXQgPT09ICd2aCcpIHtcbiAgICAgIHNpemUgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpemUgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICAgIH1cbiAgICByZXR1cm4gc2l6ZSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIGlzIGFuIGV4cGxpY2l0IHBpeGVsIHVuaXQsIHdlIGdldCByaWQgb2YgdGhlIHVuaXQgYW5kIGtlZXAgdGhlIHZhbHVlXG4gICAgLy8gaWYgaXMgYW4gaW1wbGljaXQgdW5pdCwgaXQncyBweCwgYW5kIHdlIHJldHVybiBqdXN0IHRoZSB2YWx1ZVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGFuIGBvZmZzZXRgIHN0cmluZyB0byBleHRyYXBvbGF0ZSBgeGAgYW5kIGB5YCBudW1lcmljIG9mZnNldHMuXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gb2Zmc2V0XG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBiYXNlUGxhY2VtZW50XG4gKiBAcmV0dXJucyB7QXJyYXl9IGEgdHdvIGNlbGxzIGFycmF5IHdpdGggeCBhbmQgeSBvZmZzZXRzIGluIG51bWJlcnNcbiAqL1xuZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzLCBiYXNlUGxhY2VtZW50KSB7XG4gIHZhciBvZmZzZXRzID0gWzAsIDBdO1xuXG4gIC8vIFVzZSBoZWlnaHQgaWYgcGxhY2VtZW50IGlzIGxlZnQgb3IgcmlnaHQgYW5kIGluZGV4IGlzIDAgb3RoZXJ3aXNlIHVzZSB3aWR0aFxuICAvLyBpbiB0aGlzIHdheSB0aGUgZmlyc3Qgb2Zmc2V0IHdpbGwgdXNlIGFuIGF4aXMgYW5kIHRoZSBzZWNvbmQgb25lXG4gIC8vIHdpbGwgdXNlIHRoZSBvdGhlciBvbmVcbiAgdmFyIHVzZUhlaWdodCA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gIC8vIFNwbGl0IHRoZSBvZmZzZXQgc3RyaW5nIHRvIG9idGFpbiBhIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kc1xuICAvLyBUaGUgcmVnZXggYWRkcmVzc2VzIHZhbHVlcyB3aXRoIHRoZSBwbHVzIG9yIG1pbnVzIHNpZ24gaW4gZnJvbnQgKCsxMCwgLTIwLCBldGMpXG4gIHZhciBmcmFnbWVudHMgPSBvZmZzZXQuc3BsaXQoLyhcXCt8XFwtKS8pLm1hcChmdW5jdGlvbiAoZnJhZykge1xuICAgIHJldHVybiBmcmFnLnRyaW0oKTtcbiAgfSk7XG5cbiAgLy8gRGV0ZWN0IGlmIHRoZSBvZmZzZXQgc3RyaW5nIGNvbnRhaW5zIGEgcGFpciBvZiB2YWx1ZXMgb3IgYSBzaW5nbGUgb25lXG4gIC8vIHRoZXkgY291bGQgYmUgc2VwYXJhdGVkIGJ5IGNvbW1hIG9yIHNwYWNlXG4gIHZhciBkaXZpZGVyID0gZnJhZ21lbnRzLmluZGV4T2YoZmluZChmcmFnbWVudHMsIGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgcmV0dXJuIGZyYWcuc2VhcmNoKC8sfFxccy8pICE9PSAtMTtcbiAgfSkpO1xuXG4gIGlmIChmcmFnbWVudHNbZGl2aWRlcl0gJiYgZnJhZ21lbnRzW2RpdmlkZXJdLmluZGV4T2YoJywnKSA9PT0gLTEpIHtcbiAgICBjb25zb2xlLndhcm4oJ09mZnNldHMgc2VwYXJhdGVkIGJ5IHdoaXRlIHNwYWNlKHMpIGFyZSBkZXByZWNhdGVkLCB1c2UgYSBjb21tYSAoLCkgaW5zdGVhZC4nKTtcbiAgfVxuXG4gIC8vIElmIGRpdmlkZXIgaXMgZm91bmQsIHdlIGRpdmlkZSB0aGUgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzIHRvIGRpdmlkZVxuICAvLyB0aGVtIGJ5IG9mc2V0IFggYW5kIFkuXG4gIHZhciBzcGxpdFJlZ2V4ID0gL1xccyosXFxzKnxcXHMrLztcbiAgdmFyIG9wcyA9IGRpdmlkZXIgIT09IC0xID8gW2ZyYWdtZW50cy5zbGljZSgwLCBkaXZpZGVyKS5jb25jYXQoW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVswXV0pLCBbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzFdXS5jb25jYXQoZnJhZ21lbnRzLnNsaWNlKGRpdmlkZXIgKyAxKSldIDogW2ZyYWdtZW50c107XG5cbiAgLy8gQ29udmVydCB0aGUgdmFsdWVzIHdpdGggdW5pdHMgdG8gYWJzb2x1dGUgcGl4ZWxzIHRvIGFsbG93IG91ciBjb21wdXRhdGlvbnNcbiAgb3BzID0gb3BzLm1hcChmdW5jdGlvbiAob3AsIGluZGV4KSB7XG4gICAgLy8gTW9zdCBvZiB0aGUgdW5pdHMgcmVseSBvbiB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHBvcHBlclxuICAgIHZhciBtZWFzdXJlbWVudCA9IChpbmRleCA9PT0gMSA/ICF1c2VIZWlnaHQgOiB1c2VIZWlnaHQpID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgIHJldHVybiBvcFxuICAgIC8vIFRoaXMgYWdncmVnYXRlcyBhbnkgYCtgIG9yIGAtYCBzaWduIHRoYXQgYXJlbid0IGNvbnNpZGVyZWQgb3BlcmF0b3JzXG4gICAgLy8gZS5nLjogMTAgKyArNSA9PiBbMTAsICssICs1XVxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChhW2EubGVuZ3RoIC0gMV0gPT09ICcnICYmIFsnKycsICctJ10uaW5kZXhPZihiKSAhPT0gLTEpIHtcbiAgICAgICAgYVthLmxlbmd0aCAtIDFdID0gYjtcbiAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0gZWxzZSBpZiAobWVyZ2VXaXRoUHJldmlvdXMpIHtcbiAgICAgICAgYVthLmxlbmd0aCAtIDFdICs9IGI7XG4gICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEuY29uY2F0KGIpO1xuICAgICAgfVxuICAgIH0sIFtdKVxuICAgIC8vIEhlcmUgd2UgY29udmVydCB0aGUgc3RyaW5nIHZhbHVlcyBpbnRvIG51bWJlciB2YWx1ZXMgKGluIHB4KVxuICAgIC5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgcmV0dXJuIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIExvb3AgdHJvdWdoIHRoZSBvZmZzZXRzIGFycmF5cyBhbmQgZXhlY3V0ZSB0aGUgb3BlcmF0aW9uc1xuICBvcHMuZm9yRWFjaChmdW5jdGlvbiAob3AsIGluZGV4KSB7XG4gICAgb3AuZm9yRWFjaChmdW5jdGlvbiAoZnJhZywgaW5kZXgyKSB7XG4gICAgICBpZiAoaXNOdW1lcmljKGZyYWcpKSB7XG4gICAgICAgIG9mZnNldHNbaW5kZXhdICs9IGZyYWcgKiAob3BbaW5kZXgyIC0gMV0gPT09ICctJyA/IC0xIDogMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAYXJndW1lbnQge051bWJlcnxTdHJpbmd9IG9wdGlvbnMub2Zmc2V0PTBcbiAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBvZmZzZXQoZGF0YSwgX3JlZikge1xuICB2YXIgb2Zmc2V0ID0gX3JlZi5vZmZzZXQ7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudCxcbiAgICAgIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgdmFyIG9mZnNldHMgPSB2b2lkIDA7XG4gIGlmIChpc051bWVyaWMoK29mZnNldCkpIHtcbiAgICBvZmZzZXRzID0gWytvZmZzZXQsIDBdO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldHMgPSBwYXJzZU9mZnNldChvZmZzZXQsIHBvcHBlciwgcmVmZXJlbmNlLCBiYXNlUGxhY2VtZW50KTtcbiAgfVxuXG4gIGlmIChiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzFdO1xuICB9XG5cbiAgZGF0YS5wb3BwZXIgPSBwb3BwZXI7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YSwgb3B0aW9ucykge1xuICB2YXIgYm91bmRhcmllc0VsZW1lbnQgPSBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50IHx8IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG5cbiAgLy8gSWYgb2Zmc2V0UGFyZW50IGlzIHRoZSByZWZlcmVuY2UgZWxlbWVudCwgd2UgcmVhbGx5IHdhbnQgdG9cbiAgLy8gZ28gb25lIHN0ZXAgdXAgYW5kIHVzZSB0aGUgbmV4dCBvZmZzZXRQYXJlbnQgYXMgcmVmZXJlbmNlIHRvXG4gIC8vIGF2b2lkIHRvIG1ha2UgdGhpcyBtb2RpZmllciBjb21wbGV0ZWx5IHVzZWxlc3MgYW5kIGxvb2sgbGlrZSBicm9rZW5cbiAgaWYgKGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlID09PSBib3VuZGFyaWVzRWxlbWVudCkge1xuICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGJvdW5kYXJpZXNFbGVtZW50KTtcbiAgfVxuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXNldHMgdGhlIHBvcHBlcidzIHBvc2l0aW9uIHNvIHRoYXQgdGhlIGRvY3VtZW50IHNpemUgY2FuIGJlIGNhbGN1bGF0ZWQgZXhjbHVkaW5nXG4gIC8vIHRoZSBzaXplIG9mIHRoZSBwb3BwZXIgZWxlbWVudCBpdHNlbGZcbiAgdmFyIHRyYW5zZm9ybVByb3AgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuICB2YXIgcG9wcGVyU3R5bGVzID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIuc3R5bGU7IC8vIGFzc2lnbm1lbnQgdG8gaGVscCBtaW5pZmljYXRpb25cbiAgdmFyIHRvcCA9IHBvcHBlclN0eWxlcy50b3AsXG4gICAgICBsZWZ0ID0gcG9wcGVyU3R5bGVzLmxlZnQsXG4gICAgICB0cmFuc2Zvcm0gPSBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF07XG5cbiAgcG9wcGVyU3R5bGVzLnRvcCA9ICcnO1xuICBwb3BwZXJTdHlsZXMubGVmdCA9ICcnO1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSAnJztcblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50LCBkYXRhLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcbiAgcG9wcGVyU3R5bGVzLnRvcCA9IHRvcDtcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSBsZWZ0O1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cbiAgb3B0aW9ucy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcblxuICB2YXIgb3JkZXIgPSBvcHRpb25zLnByaW9yaXR5O1xuICB2YXIgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICB2YXIgY2hlY2sgPSB7XG4gICAgcHJpbWFyeTogZnVuY3Rpb24gcHJpbWFyeShwbGFjZW1lbnQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHBvcHBlcltwbGFjZW1lbnRdO1xuICAgICAgaWYgKHBvcHBlcltwbGFjZW1lbnRdIDwgYm91bmRhcmllc1twbGFjZW1lbnRdICYmICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heChwb3BwZXJbcGxhY2VtZW50XSwgYm91bmRhcmllc1twbGFjZW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSQxKHt9LCBwbGFjZW1lbnQsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNlY29uZGFyeTogZnVuY3Rpb24gc2Vjb25kYXJ5KHBsYWNlbWVudCkge1xuICAgICAgdmFyIG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICB2YXIgdmFsdWUgPSBwb3BwZXJbbWFpblNpZGVdO1xuICAgICAgaWYgKHBvcHBlcltwbGFjZW1lbnRdID4gYm91bmRhcmllc1twbGFjZW1lbnRdICYmICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihwb3BwZXJbbWFpblNpZGVdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0gLSAocGxhY2VtZW50ID09PSAncmlnaHQnID8gcG9wcGVyLndpZHRoIDogcG9wcGVyLmhlaWdodCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5JDEoe30sIG1haW5TaWRlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIG9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHZhciBzaWRlID0gWydsZWZ0JywgJ3RvcCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTEgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5JztcbiAgICBwb3BwZXIgPSBfZXh0ZW5kcyQxKHt9LCBwb3BwZXIsIGNoZWNrW3NpZGVdKHBsYWNlbWVudCkpO1xuICB9KTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gcG9wcGVyO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBzaGlmdChkYXRhKSB7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgLy8gaWYgc2hpZnQgc2hpZnR2YXJpYXRpb24gaXMgc3BlY2lmaWVkLCBydW4gdGhlIG1vZGlmaWVyXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xuICAgIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXI7XG5cbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuICAgIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgIHZhciBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICB2YXIgc2hpZnRPZmZzZXRzID0ge1xuICAgICAgc3RhcnQ6IGRlZmluZVByb3BlcnR5JDEoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSksXG4gICAgICBlbmQ6IGRlZmluZVByb3BlcnR5JDEoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVttZWFzdXJlbWVudF0gLSBwb3BwZXJbbWVhc3VyZW1lbnRdKVxuICAgIH07XG5cbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gX2V4dGVuZHMkMSh7fSwgcG9wcGVyLCBzaGlmdE9mZnNldHNbc2hpZnR2YXJpYXRpb25dKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gaGlkZShkYXRhKSB7XG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaGlkZScsICdwcmV2ZW50T3ZlcmZsb3cnKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIHJlZlJlY3QgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuICB2YXIgYm91bmQgPSBmaW5kKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICByZXR1cm4gbW9kaWZpZXIubmFtZSA9PT0gJ3ByZXZlbnRPdmVyZmxvdyc7XG4gIH0pLmJvdW5kYXJpZXM7XG5cbiAgaWYgKHJlZlJlY3QuYm90dG9tIDwgYm91bmQudG9wIHx8IHJlZlJlY3QubGVmdCA+IGJvdW5kLnJpZ2h0IHx8IHJlZlJlY3QudG9wID4gYm91bmQuYm90dG9tIHx8IHJlZlJlY3QucmlnaHQgPCBib3VuZC5sZWZ0KSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gdHJ1ZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSBmYWxzZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGlubmVyKGRhdGEpIHtcbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIGlzSG9yaXogPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICB2YXIgc3VidHJhY3RMZW5ndGggPSBbJ3RvcCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA9PT0gLTE7XG5cbiAgcG9wcGVyW2lzSG9yaXogPyAnbGVmdCcgOiAndG9wJ10gPSByZWZlcmVuY2VbYmFzZVBsYWNlbWVudF0gLSAoc3VidHJhY3RMZW5ndGggPyBwb3BwZXJbaXNIb3JpeiA/ICd3aWR0aCcgOiAnaGVpZ2h0J10gOiAwKTtcblxuICBkYXRhLnBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KHBvcHBlcik7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogTW9kaWZpZXIgZnVuY3Rpb24sIGVhY2ggbW9kaWZpZXIgY2FuIGhhdmUgYSBmdW5jdGlvbiBvZiB0aGlzIHR5cGUgYXNzaWduZWRcbiAqIHRvIGl0cyBgZm5gIHByb3BlcnR5LjxiciAvPlxuICogVGhlc2UgZnVuY3Rpb25zIHdpbGwgYmUgY2FsbGVkIG9uIGVhY2ggdXBkYXRlLCB0aGlzIG1lYW5zIHRoYXQgeW91IG11c3RcbiAqIG1ha2Ugc3VyZSB0aGV5IGFyZSBwZXJmb3JtYW50IGVub3VnaCB0byBhdm9pZCBwZXJmb3JtYW5jZSBib3R0bGVuZWNrcy5cbiAqXG4gKiBAZnVuY3Rpb24gTW9kaWZpZXJGblxuICogQGFyZ3VtZW50IHtkYXRhT2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cblxuLyoqXG4gKiBNb2RpZmllcnMgYXJlIHBsdWdpbnMgdXNlZCB0byBhbHRlciB0aGUgYmVoYXZpb3Igb2YgeW91ciBwb3BwZXJzLjxiciAvPlxuICogUG9wcGVyLmpzIHVzZXMgYSBzZXQgb2YgOSBtb2RpZmllcnMgdG8gcHJvdmlkZSBhbGwgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdGllc1xuICogbmVlZGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIFVzdWFsbHkgeW91IGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGBvcmRlcmAsIGBmbmAgYW5kIGBvbkxvYWRgIHByb3BzLlxuICogQWxsIHRoZSBvdGhlciBwcm9wZXJ0aWVzIGFyZSBjb25maWd1cmF0aW9ucyB0aGF0IGNvdWxkIGJlIHR3ZWFrZWQuXG4gKiBAbmFtZXNwYWNlIG1vZGlmaWVyc1xuICovXG52YXIgbW9kaWZpZXJzID0ge1xuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBzaGlmdCB0aGUgcG9wcGVyIG9uIHRoZSBzdGFydCBvciBlbmQgb2YgaXRzIHJlZmVyZW5jZVxuICAgKiBlbGVtZW50LjxiciAvPlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIHZhcmlhdGlvbiBvZiB0aGUgYHBsYWNlbWVudGAgcHJvcGVydHkuPGJyIC8+XG4gICAqIEl0IGNhbiBiZSBvbmUgZWl0aGVyIGAtZW5kYCBvciBgLXN0YXJ0YC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHNoaWZ0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTEwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogc2hpZnRcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGBvZmZzZXRgIG1vZGlmaWVyIGNhbiBzaGlmdCB5b3VyIHBvcHBlciBvbiBib3RoIGl0cyBheGlzLlxuICAgKlxuICAgKiBJdCBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgdW5pdHM6XG4gICAqIC0gYHB4YCBvciB1bml0LWxlc3MsIGludGVycHJldGVkIGFzIHBpeGVsc1xuICAgKiAtIGAlYCBvciBgJXJgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAqIC0gYCVwYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiAtIGB2d2AsIENTUyB2aWV3cG9ydCB3aWR0aCB1bml0XG4gICAqIC0gYHZoYCwgQ1NTIHZpZXdwb3J0IGhlaWdodCB1bml0XG4gICAqXG4gICAqIEZvciBsZW5ndGggaXMgaW50ZW5kZWQgdGhlIG1haW4gYXhpcyByZWxhdGl2ZSB0byB0aGUgcGxhY2VtZW50IG9mIHRoZSBwb3BwZXIuPGJyIC8+XG4gICAqIFRoaXMgbWVhbnMgdGhhdCBpZiB0aGUgcGxhY2VtZW50IGlzIGB0b3BgIG9yIGBib3R0b21gLCB0aGUgbGVuZ3RoIHdpbGwgYmUgdGhlXG4gICAqIGB3aWR0aGAuIEluIGNhc2Ugb2YgYGxlZnRgIG9yIGByaWdodGAsIGl0IHdpbGwgYmUgdGhlIGBoZWlnaHRgLlxuICAgKlxuICAgKiBZb3UgY2FuIHByb3ZpZGUgYSBzaW5nbGUgdmFsdWUgKGFzIGBOdW1iZXJgIG9yIGBTdHJpbmdgKSwgb3IgYSBwYWlyIG9mIHZhbHVlc1xuICAgKiBhcyBgU3RyaW5nYCBkaXZpZGVkIGJ5IGEgY29tbWEgb3Igb25lIChvciBtb3JlKSB3aGl0ZSBzcGFjZXMuPGJyIC8+XG4gICAqIFRoZSBsYXR0ZXIgaXMgYSBkZXByZWNhdGVkIG1ldGhvZCBiZWNhdXNlIGl0IGxlYWRzIHRvIGNvbmZ1c2lvbiBhbmQgd2lsbCBiZVxuICAgKiByZW1vdmVkIGluIHYyLjxiciAvPlxuICAgKiBBZGRpdGlvbmFsbHksIGl0IGFjY2VwdHMgYWRkaXRpb25zIGFuZCBzdWJ0cmFjdGlvbnMgYmV0d2VlbiBkaWZmZXJlbnQgdW5pdHMuXG4gICAqIE5vdGUgdGhhdCBtdWx0aXBsaWNhdGlvbnMgYW5kIGRpdmlzaW9ucyBhcmVuJ3Qgc3VwcG9ydGVkLlxuICAgKlxuICAgKiBWYWxpZCBleGFtcGxlcyBhcmU6XG4gICAqIGBgYFxuICAgKiAxMFxuICAgKiAnMTAlJ1xuICAgKiAnMTAsIDEwJ1xuICAgKiAnMTAlLCAxMCdcbiAgICogJzEwICsgMTAlJ1xuICAgKiAnMTAgLSA1dmggKyAzJSdcbiAgICogJy0xMHB4ICsgNXZoLCA1cHggLSA2JSdcbiAgICogYGBgXG4gICAqID4gKipOQioqOiBJZiB5b3UgZGVzaXJlIHRvIGFwcGx5IG9mZnNldHMgdG8geW91ciBwb3BwZXJzIGluIGEgd2F5IHRoYXQgbWF5IG1ha2UgdGhlbSBvdmVybGFwXG4gICAqID4gd2l0aCB0aGVpciByZWZlcmVuY2UgZWxlbWVudCwgdW5mb3J0dW5hdGVseSwgeW91IHdpbGwgaGF2ZSB0byBkaXNhYmxlIHRoZSBgZmxpcGAgbW9kaWZpZXIuXG4gICAqID4gWW91IGNhbiByZWFkIG1vcmUgb24gdGhpcyBhdCB0aGlzIFtpc3N1ZV0oaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvaXNzdWVzLzM3MykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBvZmZzZXQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAyMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBvZmZzZXQsXG4gICAgLyoqIEBwcm9wIHtOdW1iZXJ8U3RyaW5nfSBvZmZzZXQ9MFxuICAgICAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIG9mZnNldDogMFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHByZXZlbnQgdGhlIHBvcHBlciBmcm9tIGJlaW5nIHBvc2l0aW9uZWQgb3V0c2lkZSB0aGUgYm91bmRhcnkuXG4gICAqXG4gICAqIEEgc2NlbmFyaW8gZXhpc3RzIHdoZXJlIHRoZSByZWZlcmVuY2UgaXRzZWxmIGlzIG5vdCB3aXRoaW4gdGhlIGJvdW5kYXJpZXMuPGJyIC8+XG4gICAqIFdlIGNhbiBzYXkgaXQgaGFzIFwiZXNjYXBlZCB0aGUgYm91bmRhcmllc1wiIOKAlCBvciBqdXN0IFwiZXNjYXBlZFwiLjxiciAvPlxuICAgKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBkZWNpZGUgd2hldGhlciB0aGUgcG9wcGVyIHNob3VsZCBlaXRoZXI6XG4gICAqXG4gICAqIC0gZGV0YWNoIGZyb20gdGhlIHJlZmVyZW5jZSBhbmQgcmVtYWluIFwidHJhcHBlZFwiIGluIHRoZSBib3VuZGFyaWVzLCBvclxuICAgKiAtIGlmIGl0IHNob3VsZCBpZ25vcmUgdGhlIGJvdW5kYXJ5IGFuZCBcImVzY2FwZSB3aXRoIGl0cyByZWZlcmVuY2VcIlxuICAgKlxuICAgKiBXaGVuIGBlc2NhcGVXaXRoUmVmZXJlbmNlYCBpcyBzZXQgdG9gdHJ1ZWAgYW5kIHJlZmVyZW5jZSBpcyBjb21wbGV0ZWx5XG4gICAqIG91dHNpZGUgaXRzIGJvdW5kYXJpZXMsIHRoZSBwb3BwZXIgd2lsbCBvdmVyZmxvdyAob3IgY29tcGxldGVseSBsZWF2ZSlcbiAgICogdGhlIGJvdW5kYXJpZXMgaW4gb3JkZXIgdG8gcmVtYWluIGF0dGFjaGVkIHRvIHRoZSBlZGdlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAzMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gICAgLyoqXG4gICAgICogQHByb3Age0FycmF5fSBbcHJpb3JpdHk9WydsZWZ0JywncmlnaHQnLCd0b3AnLCdib3R0b20nXV1cbiAgICAgKiBQb3BwZXIgd2lsbCB0cnkgdG8gcHJldmVudCBvdmVyZmxvdyBmb2xsb3dpbmcgdGhlc2UgcHJpb3JpdGllcyBieSBkZWZhdWx0LFxuICAgICAqIHRoZW4sIGl0IGNvdWxkIG92ZXJmbG93IG9uIHRoZSBsZWZ0IGFuZCBvbiB0b3Agb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwcmlvcml0eTogWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBBbW91bnQgb2YgcGl4ZWwgdXNlZCB0byBkZWZpbmUgYSBtaW5pbXVtIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvdW5kYXJpZXNcbiAgICAgKiBhbmQgdGhlIHBvcHBlci4gVGhpcyBtYWtlcyBzdXJlIHRoZSBwb3BwZXIgYWx3YXlzIGhhcyBhIGxpdHRsZSBwYWRkaW5nXG4gICAgICogYmV0d2VlbiB0aGUgZWRnZXMgb2YgaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3Njcm9sbFBhcmVudCdcbiAgICAgKiBCb3VuZGFyaWVzIHVzZWQgYnkgdGhlIG1vZGlmaWVyLiBDYW4gYmUgYHNjcm9sbFBhcmVudGAsIGB3aW5kb3dgLFxuICAgICAqIGB2aWV3cG9ydGAgb3IgYW55IERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAnc2Nyb2xsUGFyZW50J1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2Ugc3VyZSB0aGUgcmVmZXJlbmNlIGFuZCBpdHMgcG9wcGVyIHN0YXkgbmVhciBlYWNoIG90aGVyXG4gICAqIHdpdGhvdXQgbGVhdmluZyBhbnkgZ2FwIGJldHdlZW4gdGhlIHR3by4gRXNwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGUgYXJyb3cgaXNcbiAgICogZW5hYmxlZCBhbmQgeW91IHdhbnQgdG8gZW5zdXJlIHRoYXQgaXQgcG9pbnRzIHRvIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogSXQgY2FyZXMgb25seSBhYm91dCB0aGUgZmlyc3QgYXhpcy4gWW91IGNhbiBzdGlsbCBoYXZlIHBvcHBlcnMgd2l0aCBtYXJnaW5cbiAgICogYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBrZWVwVG9nZXRoZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NDAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA0MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBrZWVwVG9nZXRoZXJcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBtb2RpZmllciBpcyB1c2VkIHRvIG1vdmUgdGhlIGBhcnJvd0VsZW1lbnRgIG9mIHRoZSBwb3BwZXIgdG8gbWFrZVxuICAgKiBzdXJlIGl0IGlzIHBvc2l0aW9uZWQgYmV0d2VlbiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgYW5kIGl0cyBwb3BwZXIgZWxlbWVudC5cbiAgICogSXQgd2lsbCByZWFkIHRoZSBvdXRlciBzaXplIG9mIHRoZSBgYXJyb3dFbGVtZW50YCBub2RlIHRvIGRldGVjdCBob3cgbWFueVxuICAgKiBwaXhlbHMgb2YgY29uanVuY3Rpb24gYXJlIG5lZWRlZC5cbiAgICpcbiAgICogSXQgaGFzIG5vIGVmZmVjdCBpZiBubyBgYXJyb3dFbGVtZW50YCBpcyBwcm92aWRlZC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFycm93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTUwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXJyb3csXG4gICAgLyoqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGVsZW1lbnQ9J1t4LWFycm93XScgLSBTZWxlY3RvciBvciBub2RlIHVzZWQgYXMgYXJyb3cgKi9cbiAgICBlbGVtZW50OiAnW3gtYXJyb3ddJ1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGZsaXAgdGhlIHBvcHBlcidzIHBsYWNlbWVudCB3aGVuIGl0IHN0YXJ0cyB0byBvdmVybGFwIGl0c1xuICAgKiByZWZlcmVuY2UgZWxlbWVudC5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKlxuICAgKiAqKk5PVEU6KiogdGhpcyBtb2RpZmllciB3aWxsIGludGVycnVwdCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUgYW5kIHdpbGxcbiAgICogcmVzdGFydCBpdCBpZiBpdCBkZXRlY3RzIHRoZSBuZWVkIHRvIGZsaXAgdGhlIHBsYWNlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGZsaXA6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA2MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBmbGlwLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8QXJyYXl9IGJlaGF2aW9yPSdmbGlwJ1xuICAgICAqIFRoZSBiZWhhdmlvciB1c2VkIHRvIGNoYW5nZSB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50LiBJdCBjYW4gYmUgb25lIG9mXG4gICAgICogYGZsaXBgLCBgY2xvY2t3aXNlYCwgYGNvdW50ZXJjbG9ja3dpc2VgIG9yIGFuIGFycmF5IHdpdGggYSBsaXN0IG9mIHZhbGlkXG4gICAgICogcGxhY2VtZW50cyAod2l0aCBvcHRpb25hbCB2YXJpYXRpb25zKVxuICAgICAqL1xuICAgIGJlaGF2aW9yOiAnZmxpcCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogVGhlIHBvcHBlciB3aWxsIGZsaXAgaWYgaXQgaGl0cyB0aGUgZWRnZXMgb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSd2aWV3cG9ydCdcbiAgICAgKiBUaGUgZWxlbWVudCB3aGljaCB3aWxsIGRlZmluZSB0aGUgYm91bmRhcmllcyBvZiB0aGUgcG9wcGVyIHBvc2l0aW9uLlxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBuZXZlciBiZSBwbGFjZWQgb3V0c2lkZSBvZiB0aGUgZGVmaW5lZCBib3VuZGFyaWVzXG4gICAgICogKGV4Y2VwdCBpZiBga2VlcFRvZ2V0aGVyYCBpcyBlbmFibGVkKVxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAndmlld3BvcnQnXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSB0aGUgcG9wcGVyIGZsb3cgdG93YXJkIHRoZSBpbm5lciBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHdoZW4gdGhpcyBtb2RpZmllciBpcyBkaXNhYmxlZCwgdGhlIHBvcHBlciB3aWxsIGJlIHBsYWNlZCBvdXRzaWRlXG4gICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGlubmVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTcwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD1mYWxzZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBpbm5lclxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGhpZGUgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXRzaWRlIG9mIHRoZVxuICAgKiBwb3BwZXIgYm91bmRhcmllcy4gSXQgd2lsbCBzZXQgYSBgeC1vdXQtb2YtYm91bmRhcmllc2AgYXR0cmlidXRlIHdoaWNoIGNhblxuICAgKiBiZSB1c2VkIHRvIGhpZGUgd2l0aCBhIENTUyBzZWxlY3RvciB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBpc1xuICAgKiBvdXQgb2YgYm91bmRhcmllcy5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaGlkZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDgwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGhpZGVcbiAgfSxcblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIHN0eWxlIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIgZWxlbWVudCB0byBnZXRzXG4gICAqIHByb3Blcmx5IHBvc2l0aW9uZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIG1vZGlmaWVyIHdpbGwgbm90IHRvdWNoIHRoZSBET00sIGl0IGp1c3QgcHJlcGFyZXMgdGhlIHN0eWxlc1xuICAgKiBzbyB0aGF0IGBhcHBseVN0eWxlYCBtb2RpZmllciBjYW4gYXBwbHkgaXQuIFRoaXMgc2VwYXJhdGlvbiBpcyB1c2VmdWxcbiAgICogaW4gY2FzZSB5b3UgbmVlZCB0byByZXBsYWNlIGBhcHBseVN0eWxlYCB3aXRoIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1vZGlmaWVyIGhhcyBgODUwYCBhcyBgb3JkZXJgIHZhbHVlIHRvIG1haW50YWluIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICogd2l0aCBwcmV2aW91cyB2ZXJzaW9ucyBvZiBQb3BwZXIuanMuIEV4cGVjdCB0aGUgbW9kaWZpZXJzIG9yZGVyaW5nIG1ldGhvZFxuICAgKiB0byBjaGFuZ2UgaW4gZnV0dXJlIG1ham9yIHZlcnNpb25zIG9mIHRoZSBsaWJyYXJ5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgY29tcHV0ZVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTg1MCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODUwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogY29tcHV0ZVN0eWxlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nYm90dG9tJ11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFggYXhpcyAoYGJvdHRvbWAgb3IgYHRvcGApLiBBS0EgWCBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGBib3R0b21gXG4gICAgICovXG4gICAgeDogJ2JvdHRvbScsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2xlZnQnXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWSBheGlzIChgbGVmdGAgb3IgYHJpZ2h0YCkuIEFLQSBZIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYHJpZ2h0YFxuICAgICAqL1xuICAgIHk6ICdyaWdodCdcbiAgfSxcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY29tcHV0ZWQgc3R5bGVzIHRvIHRoZSBwb3BwZXIgZWxlbWVudC5cbiAgICpcbiAgICogQWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyBhcmUgbGltaXRlZCB0byB0aGlzIG1vZGlmaWVyLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlXG4gICAqIHlvdSB3YW50IHRvIGludGVncmF0ZSBQb3BwZXIuanMgaW5zaWRlIGEgZnJhbWV3b3JrIG9yIHZpZXcgbGlicmFyeSBhbmQgeW91XG4gICAqIHdhbnQgdG8gZGVsZWdhdGUgYWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyB0byBpdC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSBkaXNhYmxlIHRoaXMgbW9kaWZpZXIsIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogaGFzIGl0cyBwb3NpdGlvbiBzZXQgdG8gYGFic29sdXRlYCBiZWZvcmUgUG9wcGVyLmpzIGNhbiBkbyBpdHMgd29yayFcbiAgICpcbiAgICogSnVzdCBkaXNhYmxlIHRoaXMgbW9kaWZpZXIgYW5kIGRlZmluZSB5b3VyIG93biB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIGVmZmVjdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFwcGx5U3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9OTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA5MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcHBseVN0eWxlLFxuICAgIC8qKiBAcHJvcCB7RnVuY3Rpb259ICovXG4gICAgb25Mb2FkOiBhcHBseVN0eWxlT25Mb2FkLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xMC4wLCB0aGUgcHJvcGVydHkgbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXJcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHVuZGVmaW5lZFxuICB9XG59O1xuXG4vKipcbiAqIFRoZSBgZGF0YU9iamVjdGAgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbmZvcm1hdGlvbiB1c2VkIGJ5IFBvcHBlci5qcy5cbiAqIFRoaXMgb2JqZWN0IGlzIHBhc3NlZCB0byBtb2RpZmllcnMgYW5kIHRvIHRoZSBgb25DcmVhdGVgIGFuZCBgb25VcGRhdGVgIGNhbGxiYWNrcy5cbiAqIEBuYW1lIGRhdGFPYmplY3RcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmluc3RhbmNlIFRoZSBQb3BwZXIuanMgaW5zdGFuY2VcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLnBsYWNlbWVudCBQbGFjZW1lbnQgYXBwbGllZCB0byBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50IFBsYWNlbWVudCBvcmlnaW5hbGx5IGRlZmluZWQgb24gaW5pdFxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmZsaXBwZWQgVHJ1ZSBpZiBwb3BwZXIgaGFzIGJlZW4gZmxpcHBlZCBieSBmbGlwIG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuaGlkZSBUcnVlIGlmIHRoZSByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXQgb2YgYm91bmRhcmllcywgdXNlZnVsIHRvIGtub3cgd2hlbiB0byBoaWRlIHRoZSBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGRhdGEuYXJyb3dFbGVtZW50IE5vZGUgdXNlZCBhcyBhcnJvdyBieSBhcnJvdyBtb2RpZmllclxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuc3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYXJyb3dTdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIgYXJyb3cuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5ib3VuZGFyaWVzIE9mZnNldHMgb2YgdGhlIHBvcHBlciBib3VuZGFyaWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzIFRoZSBtZWFzdXJlbWVudHMgb2YgcG9wcGVyLCByZWZlcmVuY2UgYW5kIGFycm93IGVsZW1lbnRzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnBvcHBlciBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucmVmZXJlbmNlIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5hcnJvd10gYHRvcGAgYW5kIGBsZWZ0YCBvZmZzZXRzLCBvbmx5IG9uZSBvZiB0aGVtIHdpbGwgYmUgZGlmZmVyZW50IGZyb20gMFxuICovXG5cbi8qKlxuICogRGVmYXVsdCBvcHRpb25zIHByb3ZpZGVkIHRvIFBvcHBlci5qcyBjb25zdHJ1Y3Rvci48YnIgLz5cbiAqIFRoZXNlIGNhbiBiZSBvdmVycmlkZGVuIHVzaW5nIHRoZSBgb3B0aW9uc2AgYXJndW1lbnQgb2YgUG9wcGVyLmpzLjxiciAvPlxuICogVG8gb3ZlcnJpZGUgYW4gb3B0aW9uLCBzaW1wbHkgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZVxuICogc3RydWN0dXJlIG9mIHRoZSBgb3B0aW9uc2Agb2JqZWN0LCBhcyB0aGUgM3JkIGFyZ3VtZW50LiBGb3IgZXhhbXBsZTpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWYsIHBvcCwge1xuICogICBtb2RpZmllcnM6IHtcbiAqICAgICBwcmV2ZW50T3ZlcmZsb3c6IHsgZW5hYmxlZDogZmFsc2UgfVxuICogICB9XG4gKiB9KVxuICogYGBgXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG52YXIgRGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBQb3BwZXIncyBwbGFjZW1lbnQuXG4gICAqIEBwcm9wIHtQb3BwZXIucGxhY2VtZW50c30gcGxhY2VtZW50PSdib3R0b20nXG4gICAqL1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXG4gIC8qKlxuICAgKiBTZXQgdGhpcyB0byB0cnVlIGlmIHlvdSB3YW50IHBvcHBlciB0byBwb3NpdGlvbiBpdCBzZWxmIGluICdmaXhlZCcgbW9kZVxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcG9zaXRpb25GaXhlZD1mYWxzZVxuICAgKi9cbiAgcG9zaXRpb25GaXhlZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZXZlbnRzIChyZXNpemUsIHNjcm9sbCkgYXJlIGluaXRpYWxseSBlbmFibGVkLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gZXZlbnRzRW5hYmxlZD10cnVlXG4gICAqL1xuICBldmVudHNFbmFibGVkOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgcG9wcGVyIHdoZW5cbiAgICogeW91IGNhbGwgdGhlIGBkZXN0cm95YCBtZXRob2QuXG4gICAqIEBwcm9wIHtCb29sZWFufSByZW1vdmVPbkRlc3Ryb3k9ZmFsc2VcbiAgICovXG4gIHJlbW92ZU9uRGVzdHJveTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgY3JlYXRlZC48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25DcmVhdGV9XG4gICAqL1xuICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoKSB7fSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkLiBUaGlzIGNhbGxiYWNrIGlzIG5vdCBjYWxsZWRcbiAgICogb24gdGhlIGluaXRpYWxpemF0aW9uL2NyZWF0aW9uIG9mIHRoZSBwb3BwZXIsIGJ1dCBvbmx5IG9uIHN1YnNlcXVlbnRcbiAgICogdXBkYXRlcy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25VcGRhdGV9XG4gICAqL1xuICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoKSB7fSxcblxuICAvKipcbiAgICogTGlzdCBvZiBtb2RpZmllcnMgdXNlZCB0byBtb2RpZnkgdGhlIG9mZnNldHMgYmVmb3JlIHRoZXkgYXJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci5cbiAgICogVGhleSBwcm92aWRlIG1vc3Qgb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBQb3BwZXIuanMuXG4gICAqIEBwcm9wIHttb2RpZmllcnN9XG4gICAqL1xuICBtb2RpZmllcnM6IG1vZGlmaWVyc1xufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgb25DcmVhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIG9uVXBkYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vLyBVdGlsc1xuLy8gTWV0aG9kc1xudmFyIFBvcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgUG9wcGVyLmpzIGluc3RhbmNlLlxuICAgKiBAY2xhc3MgUG9wcGVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8cmVmZXJlbmNlT2JqZWN0fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gWW91ciBjdXN0b20gb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgb25lcyBkZWZpbmVkIGluIFtEZWZhdWx0c10oI2RlZmF1bHRzKVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGluc3RhbmNlIC0gVGhlIGdlbmVyYXRlZCBQb3BwZXIuanMgaW5zdGFuY2VcbiAgICovXG4gIGZ1bmN0aW9uIFBvcHBlcihyZWZlcmVuY2UsIHBvcHBlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgY2xhc3NDYWxsQ2hlY2skMSh0aGlzLCBQb3BwZXIpO1xuXG4gICAgdGhpcy5zY2hlZHVsZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMudXBkYXRlKTtcbiAgICB9O1xuXG4gICAgLy8gbWFrZSB1cGRhdGUoKSBkZWJvdW5jZWQsIHNvIHRoYXQgaXQgb25seSBydW5zIGF0IG1vc3Qgb25jZS1wZXItdGlja1xuICAgIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyB3aXRoIHt9IHdlIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3B0aW9ucyBpbnNpZGUgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyQxKHt9LCBQb3BwZXIuRGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgLy8gaW5pdCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgICBpc0NyZWF0ZWQ6IGZhbHNlLFxuICAgICAgc2Nyb2xsUGFyZW50czogW11cbiAgICB9O1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSBhbmQgcG9wcGVyIGVsZW1lbnRzIChhbGxvdyBqUXVlcnkgd3JhcHBlcnMpXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLmpxdWVyeSA/IHJlZmVyZW5jZVswXSA6IHJlZmVyZW5jZTtcbiAgICB0aGlzLnBvcHBlciA9IHBvcHBlciAmJiBwb3BwZXIuanF1ZXJ5ID8gcG9wcGVyWzBdIDogcG9wcGVyO1xuXG4gICAgLy8gRGVlcCBtZXJnZSBtb2RpZmllcnMgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhfZXh0ZW5kcyQxKHt9LCBQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzLCBvcHRpb25zLm1vZGlmaWVycykpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0gX2V4dGVuZHMkMSh7fSwgUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVyc1tuYW1lXSB8fCB7fSwgb3B0aW9ucy5tb2RpZmllcnMgPyBvcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA6IHt9KTtcbiAgICB9KTtcblxuICAgIC8vIFJlZmFjdG9yaW5nIG1vZGlmaWVycycgbGlzdCAoT2JqZWN0ID0+IEFycmF5KVxuICAgIHRoaXMubW9kaWZpZXJzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1vZGlmaWVycykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMkMSh7XG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICAgIH0sIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdKTtcbiAgICB9KVxuICAgIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XG4gICAgfSk7XG5cbiAgICAvLyBtb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIHdoZW4gUG9wcGVyLmpzIGdldCBpbml0ZWRcbiAgICAvLyBzdWNoIGNvZGUgaXMgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgb2YgaXRzIG1vZGlmaWVyXG4gICAgLy8gdGhleSBjb3VsZCBhZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlaXIgb3B0aW9ucyBjb25maWd1cmF0aW9uXG4gICAgLy8gQkUgQVdBUkU6IGRvbid0IGFkZCBvcHRpb25zIHRvIGBvcHRpb25zLm1vZGlmaWVycy5uYW1lYCBidXQgdG8gYG1vZGlmaWVyT3B0aW9uc2AhXG4gICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXJPcHRpb25zKSB7XG4gICAgICBpZiAobW9kaWZpZXJPcHRpb25zLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihtb2RpZmllck9wdGlvbnMub25Mb2FkKSkge1xuICAgICAgICBtb2RpZmllck9wdGlvbnMub25Mb2FkKF90aGlzLnJlZmVyZW5jZSwgX3RoaXMucG9wcGVyLCBfdGhpcy5vcHRpb25zLCBtb2RpZmllck9wdGlvbnMsIF90aGlzLnN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZpcmUgdGhlIGZpcnN0IHVwZGF0ZSB0byBwb3NpdGlvbiB0aGUgcG9wcGVyIGluIHRoZSByaWdodCBwbGFjZVxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB2YXIgZXZlbnRzRW5hYmxlZCA9IHRoaXMub3B0aW9ucy5ldmVudHNFbmFibGVkO1xuICAgIGlmIChldmVudHNFbmFibGVkKSB7XG4gICAgICAvLyBzZXR1cCBldmVudCBsaXN0ZW5lcnMsIHRoZXkgd2lsbCB0YWtlIGNhcmUgb2YgdXBkYXRlIHRoZSBwb3NpdGlvbiBpbiBzcGVjaWZpYyBzaXR1YXRpb25zXG4gICAgICB0aGlzLmVuYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkID0gZXZlbnRzRW5hYmxlZDtcbiAgfVxuXG4gIC8vIFdlIGNhbid0IHVzZSBjbGFzcyBwcm9wZXJ0aWVzIGJlY2F1c2UgdGhleSBkb24ndCBnZXQgbGlzdGVkIGluIHRoZVxuICAvLyBjbGFzcyBwcm90b3R5cGUgYW5kIGJyZWFrIHN0dWZmIGxpa2UgU2lub24gc3R1YnNcblxuXG4gIGNyZWF0ZUNsYXNzJDEoUG9wcGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSQkMSgpIHtcbiAgICAgIHJldHVybiB1cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSQkMSgpIHtcbiAgICAgIHJldHVybiBkZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlRXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGVFdmVudExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYW4gdXBkYXRlLiBJdCB3aWxsIHJ1biBvbiB0aGUgbmV4dCBVSSB1cGRhdGUgYXZhaWxhYmxlLlxuICAgICAqIEBtZXRob2Qgc2NoZWR1bGVVcGRhdGVcbiAgICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIHV0aWxpdGllcyB1c2VmdWwgd2hlbiB3cml0aW5nIGN1c3RvbSBtb2RpZmllcnMuXG4gICAgICogU3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDEuNywgdGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIG9ubHkgaWYgeW91XG4gICAgICogaW5jbHVkZSBgcG9wcGVyLXV0aWxzLmpzYCBiZWZvcmUgYHBvcHBlci5qc2AuXG4gICAgICpcbiAgICAgKiAqKkRFUFJFQ0FUSU9OKio6IFRoaXMgd2F5IHRvIGFjY2VzcyBQb3BwZXJVdGlscyBpcyBkZXByZWNhdGVkXG4gICAgICogYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MiEgVXNlIHRoZSBQb3BwZXJVdGlscyBtb2R1bGUgZGlyZWN0bHkgaW5zdGVhZC5cbiAgICAgKiBEdWUgdG8gdGhlIGhpZ2ggaW5zdGFiaWxpdHkgb2YgdGhlIG1ldGhvZHMgY29udGFpbmVkIGluIFV0aWxzLCB3ZSBjYW4ndFxuICAgICAqIGd1YXJhbnRlZSB0aGVtIHRvIGZvbGxvdyBzZW12ZXIuIFVzZSB0aGVtIGF0IHlvdXIgb3duIHJpc2shXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuOFxuICAgICAqIEBtZW1iZXIgVXRpbHNcbiAgICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAgICovXG5cbiAgfV0pO1xuICByZXR1cm4gUG9wcGVyO1xufSgpO1xuXG4vKipcbiAqIFRoZSBgcmVmZXJlbmNlT2JqZWN0YCBpcyBhbiBvYmplY3QgdGhhdCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgY29tcGF0aWJsZSB3aXRoIFBvcHBlci5qc1xuICogYW5kIGxldHMgeW91IHVzZSBpdCBhcyByZXBsYWNlbWVudCBvZiBhIHJlYWwgRE9NIG5vZGUuPGJyIC8+XG4gKiBZb3UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBwb3NpdGlvbiBhIHBvcHBlciByZWxhdGl2ZWx5IHRvIGEgc2V0IG9mIGNvb3JkaW5hdGVzXG4gKiBpbiBjYXNlIHlvdSBkb24ndCBoYXZlIGEgRE9NIG5vZGUgdG8gdXNlIGFzIHJlZmVyZW5jZS5cbiAqXG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmZXJlbmNlT2JqZWN0LCBwb3BwZXJOb2RlKTtcbiAqIGBgYFxuICpcbiAqIE5COiBUaGlzIGZlYXR1cmUgaXNuJ3Qgc3VwcG9ydGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuICogQG5hbWUgcmVmZXJlbmNlT2JqZWN0XG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBkYXRhLmdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzZXQgb2YgY29vcmRpbmF0ZXMgY29tcGF0aWJsZSB3aXRoIHRoZSBuYXRpdmUgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAgbWV0aG9kLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50V2lkdGhcbiAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgd2lkdGggb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRIZWlnaHRcbiAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICovXG5cblBvcHBlci5VdGlscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCkuUG9wcGVyVXRpbHM7XG5Qb3BwZXIucGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5Qb3BwZXIuRGVmYXVsdHMgPSBEZWZhdWx0cztcblxuLyoqXG4gKiBUcmlnZ2VycyBkb2N1bWVudCByZWZsb3cuXG4gKiBVc2Ugdm9pZCBiZWNhdXNlIHNvbWUgbWluaWZpZXJzIG9yIGVuZ2luZXMgdGhpbmsgc2ltcGx5IGFjY2Vzc2luZyB0aGUgcHJvcGVydHlcbiAqIGlzIHVubmVjZXNzYXJ5LlxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXJcbiAqL1xuZnVuY3Rpb24gcmVmbG93KHBvcHBlcikge1xuICB2b2lkIHBvcHBlci5vZmZzZXRIZWlnaHQ7XG59XG5cbi8qKlxuICogV3JhcHBlciB1dGlsIGZvciBwb3BwZXIgcG9zaXRpb24gdXBkYXRpbmcuXG4gKiBVcGRhdGVzIHRoZSBwb3BwZXIncyBwb3NpdGlvbiBhbmQgaW52b2tlcyB0aGUgY2FsbGJhY2sgb24gdXBkYXRlLlxuICogSGFja2lzaCB3b3JrYXJvdW5kIHVudGlsIFBvcHBlciAyLjAncyB1cGRhdGUoKSBiZWNvbWVzIHN5bmMuXG4gKiBAcGFyYW0ge1BvcHBlcn0gcG9wcGVySW5zdGFuY2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrOiB0byBydW4gb25jZSBwb3BwZXIncyBwb3NpdGlvbiB3YXMgdXBkYXRlZFxuICogQHBhcmFtIHtCb29sZWFufSB1cGRhdGVBbHJlYWR5Q2FsbGVkOiB3YXMgc2NoZWR1bGVVcGRhdGUoKSBhbHJlYWR5IGNhbGxlZD9cbiAqL1xuZnVuY3Rpb24gdXBkYXRlUG9wcGVyUG9zaXRpb24ocG9wcGVySW5zdGFuY2UsIGNhbGxiYWNrLCB1cGRhdGVBbHJlYWR5Q2FsbGVkKSB7XG4gIHZhciBwb3BwZXIgPSBwb3BwZXJJbnN0YW5jZS5wb3BwZXIsXG4gICAgICBvcHRpb25zID0gcG9wcGVySW5zdGFuY2Uub3B0aW9ucztcblxuICB2YXIgb25DcmVhdGUgPSBvcHRpb25zLm9uQ3JlYXRlO1xuICB2YXIgb25VcGRhdGUgPSBvcHRpb25zLm9uVXBkYXRlO1xuXG4gIG9wdGlvbnMub25DcmVhdGUgPSBvcHRpb25zLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJlZmxvdyhwb3BwZXIpLCBjYWxsYmFjayAmJiBjYWxsYmFjaygpLCBvblVwZGF0ZSgpO1xuICAgIG9wdGlvbnMub25DcmVhdGUgPSBvbkNyZWF0ZTtcbiAgICBvcHRpb25zLm9uVXBkYXRlID0gb25VcGRhdGU7XG4gIH07XG5cbiAgaWYgKCF1cGRhdGVBbHJlYWR5Q2FsbGVkKSB7XG4gICAgcG9wcGVySW5zdGFuY2Uuc2NoZWR1bGVVcGRhdGUoKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvcmUgcGxhY2VtZW50ICgndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0Jykgb2YgYSBwb3BwZXJcbiAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldFBvcHBlclBsYWNlbWVudChwb3BwZXIpIHtcbiAgcmV0dXJuIHBvcHBlci5nZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JykucmVwbGFjZSgvLS4rLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIG1vdXNlJ3MgY3Vyc29yIGlzIG91dHNpZGUgdGhlIGludGVyYWN0aXZlIGJvcmRlclxuICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjdXJzb3JJc091dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcihldmVudCwgcG9wcGVyLCBvcHRpb25zKSB7XG4gIGlmICghcG9wcGVyLmdldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKSkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIHggPSBldmVudC5jbGllbnRYLFxuICAgICAgeSA9IGV2ZW50LmNsaWVudFk7XG4gIHZhciBpbnRlcmFjdGl2ZUJvcmRlciA9IG9wdGlvbnMuaW50ZXJhY3RpdmVCb3JkZXIsXG4gICAgICBkaXN0YW5jZSA9IG9wdGlvbnMuZGlzdGFuY2U7XG5cblxuICB2YXIgcmVjdCA9IHBvcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHBsYWNlbWVudCA9IGdldFBvcHBlclBsYWNlbWVudChwb3BwZXIpO1xuICB2YXIgYm9yZGVyV2l0aERpc3RhbmNlID0gaW50ZXJhY3RpdmVCb3JkZXIgKyBkaXN0YW5jZTtcblxuICB2YXIgZXhjZWVkcyA9IHtcbiAgICB0b3A6IHJlY3QudG9wIC0geSA+IGludGVyYWN0aXZlQm9yZGVyLFxuICAgIGJvdHRvbTogeSAtIHJlY3QuYm90dG9tID4gaW50ZXJhY3RpdmVCb3JkZXIsXG4gICAgbGVmdDogcmVjdC5sZWZ0IC0geCA+IGludGVyYWN0aXZlQm9yZGVyLFxuICAgIHJpZ2h0OiB4IC0gcmVjdC5yaWdodCA+IGludGVyYWN0aXZlQm9yZGVyXG4gIH07XG5cbiAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgZXhjZWVkcy50b3AgPSByZWN0LnRvcCAtIHkgPiBib3JkZXJXaXRoRGlzdGFuY2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgZXhjZWVkcy5ib3R0b20gPSB5IC0gcmVjdC5ib3R0b20gPiBib3JkZXJXaXRoRGlzdGFuY2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIGV4Y2VlZHMubGVmdCA9IHJlY3QubGVmdCAtIHggPiBib3JkZXJXaXRoRGlzdGFuY2U7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICBleGNlZWRzLnJpZ2h0ID0geCAtIHJlY3QucmlnaHQgPiBib3JkZXJXaXRoRGlzdGFuY2U7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBleGNlZWRzLnRvcCB8fCBleGNlZWRzLmJvdHRvbSB8fCBleGNlZWRzLmxlZnQgfHwgZXhjZWVkcy5yaWdodDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSBgYXJyb3dUcmFuc2Zvcm1gIG51bWJlcnMgYmFzZWQgb24gdGhlIHBsYWNlbWVudCBheGlzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAnc2NhbGUnIG9yICd0cmFuc2xhdGUnXG4gKiBAcGFyYW0ge051bWJlcltdfSBudW1iZXJzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlzVmVydGljYWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNSZXZlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybU51bWJlcnNCYXNlZE9uUGxhY2VtZW50QXhpcyh0eXBlLCBudW1iZXJzLCBpc1ZlcnRpY2FsLCBpc1JldmVyc2UpIHtcbiAgaWYgKCFudW1iZXJzLmxlbmd0aCkgcmV0dXJuICcnO1xuXG4gIHZhciB0cmFuc2Zvcm1zID0ge1xuICAgIHNjYWxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobnVtYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuICcnICsgbnVtYmVyc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpc1ZlcnRpY2FsID8gbnVtYmVyc1swXSArICcsICcgKyBudW1iZXJzWzFdIDogbnVtYmVyc1sxXSArICcsICcgKyBudW1iZXJzWzBdO1xuICAgICAgfVxuICAgIH0oKSxcbiAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChudW1iZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gaXNSZXZlcnNlID8gLW51bWJlcnNbMF0gKyAncHgnIDogbnVtYmVyc1swXSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgIHJldHVybiBpc1JldmVyc2UgPyBudW1iZXJzWzBdICsgJ3B4LCAnICsgLW51bWJlcnNbMV0gKyAncHgnIDogbnVtYmVyc1swXSArICdweCwgJyArIG51bWJlcnNbMV0gKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpc1JldmVyc2UgPyAtbnVtYmVyc1sxXSArICdweCwgJyArIG51bWJlcnNbMF0gKyAncHgnIDogbnVtYmVyc1sxXSArICdweCwgJyArIG51bWJlcnNbMF0gKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSgpXG4gIH07XG5cbiAgcmV0dXJuIHRyYW5zZm9ybXNbdHlwZV07XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgYGFycm93VHJhbnNmb3JtYCB4IG9yIHkgYXhpcyBiYXNlZCBvbiB0aGUgcGxhY2VtZW50IGF4aXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBheGlzICdYJywgJ1knLCAnJ1xuICogQHBhcmFtIHtCb29sZWFufSBpc1ZlcnRpY2FsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybUF4aXMoYXhpcywgaXNWZXJ0aWNhbCkge1xuICBpZiAoIWF4aXMpIHJldHVybiAnJztcbiAgdmFyIG1hcCA9IHtcbiAgICBYOiAnWScsXG4gICAgWTogJ1gnXG4gIH07XG4gIHJldHVybiBpc1ZlcnRpY2FsID8gYXhpcyA6IG1hcFtheGlzXTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyBhbmQgYXBwbGllcyB0aGUgbmVjZXNzYXJ5IGFycm93IHRyYW5zZm9ybVxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXJcbiAqIEBwYXJhbSB7RWxlbWVudH0gYXJyb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcnJvd1RyYW5zZm9ybVxuICovXG5mdW5jdGlvbiBjb21wdXRlQXJyb3dUcmFuc2Zvcm0ocG9wcGVyLCBhcnJvdywgYXJyb3dUcmFuc2Zvcm0pIHtcbiAgdmFyIHBsYWNlbWVudCA9IGdldFBvcHBlclBsYWNlbWVudChwb3BwZXIpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IHBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJztcbiAgdmFyIGlzUmV2ZXJzZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nO1xuXG4gIHZhciBnZXRBeGlzID0gZnVuY3Rpb24gZ2V0QXhpcyhyZSkge1xuICAgIHZhciBtYXRjaCA9IGFycm93VHJhbnNmb3JtLm1hdGNoKHJlKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xuICB9O1xuXG4gIHZhciBnZXROdW1iZXJzID0gZnVuY3Rpb24gZ2V0TnVtYmVycyhyZSkge1xuICAgIHZhciBtYXRjaCA9IGFycm93VHJhbnNmb3JtLm1hdGNoKHJlKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXS5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KSA6IFtdO1xuICB9O1xuXG4gIHZhciByZSA9IHtcbiAgICB0cmFuc2xhdGU6IC90cmFuc2xhdGVYP1k/XFwoKFteKV0rKVxcKS8sXG4gICAgc2NhbGU6IC9zY2FsZVg/WT9cXCgoW14pXSspXFwpL1xuICB9O1xuXG4gIHZhciBtYXRjaGVzID0ge1xuICAgIHRyYW5zbGF0ZToge1xuICAgICAgYXhpczogZ2V0QXhpcygvdHJhbnNsYXRlKFtYWV0pLyksXG4gICAgICBudW1iZXJzOiBnZXROdW1iZXJzKHJlLnRyYW5zbGF0ZSlcbiAgICB9LFxuICAgIHNjYWxlOiB7XG4gICAgICBheGlzOiBnZXRBeGlzKC9zY2FsZShbWFldKS8pLFxuICAgICAgbnVtYmVyczogZ2V0TnVtYmVycyhyZS5zY2FsZSlcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNvbXB1dGVkVHJhbnNmb3JtID0gYXJyb3dUcmFuc2Zvcm0ucmVwbGFjZShyZS50cmFuc2xhdGUsICd0cmFuc2xhdGUnICsgdHJhbnNmb3JtQXhpcyhtYXRjaGVzLnRyYW5zbGF0ZS5heGlzLCBpc1ZlcnRpY2FsKSArICcoJyArIHRyYW5zZm9ybU51bWJlcnNCYXNlZE9uUGxhY2VtZW50QXhpcygndHJhbnNsYXRlJywgbWF0Y2hlcy50cmFuc2xhdGUubnVtYmVycywgaXNWZXJ0aWNhbCwgaXNSZXZlcnNlKSArICcpJykucmVwbGFjZShyZS5zY2FsZSwgJ3NjYWxlJyArIHRyYW5zZm9ybUF4aXMobWF0Y2hlcy5zY2FsZS5heGlzLCBpc1ZlcnRpY2FsKSArICcoJyArIHRyYW5zZm9ybU51bWJlcnNCYXNlZE9uUGxhY2VtZW50QXhpcygnc2NhbGUnLCBtYXRjaGVzLnNjYWxlLm51bWJlcnMsIGlzVmVydGljYWwsIGlzUmV2ZXJzZSkgKyAnKScpO1xuXG4gIGFycm93LnN0eWxlW3ByZWZpeCgndHJhbnNmb3JtJyldID0gY29tcHV0ZWRUcmFuc2Zvcm07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGlzdGFuY2UgdGFraW5nIGludG8gYWNjb3VudCB0aGUgZGVmYXVsdCBkaXN0YW5jZSBkdWUgdG9cbiAqIHRoZSB0cmFuc2Zvcm06IHRyYW5zbGF0ZSBzZXR0aW5nIGluIENTU1xuICogQHBhcmFtIHtOdW1iZXJ9IGRpc3RhbmNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldERpc3RhbmNlSW5QeChkaXN0YW5jZSkge1xuICByZXR1cm4gLShkaXN0YW5jZSAtIGRlZmF1bHRzLmRpc3RhbmNlKSArICdweCc7XG59XG5cbnZhciBtYXRjaGVzID0ge307XG5cbmlmIChpc0Jyb3dzZXIpIHtcbiAgdmFyIGUgPSBFbGVtZW50LnByb3RvdHlwZTtcbiAgbWF0Y2hlcyA9IGUubWF0Y2hlcyB8fCBlLm1hdGNoZXNTZWxlY3RvciB8fCBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGZ1bmN0aW9uIChzKSB7XG4gICAgdmFyIG1hdGNoZXMgPSAodGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocyk7XG4gICAgdmFyIGkgPSBtYXRjaGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSB0aGlzKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG4gICAgcmV0dXJuIGkgPiAtMTtcbiAgfTtcbn1cblxudmFyIG1hdGNoZXMkMSA9IG1hdGNoZXM7XG5cbi8qKlxuICogUG9ueWZpbGwgdG8gZ2V0IHRoZSBjbG9zZXN0IHBhcmVudCBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBjaGlsZCBvZiBwYXJlbnQgdG8gYmUgcmV0dXJuZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJlbnRTZWxlY3RvciAtIHNlbGVjdG9yIHRvIG1hdGNoIHRoZSBwYXJlbnQgaWYgZm91bmRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgcGFyZW50U2VsZWN0b3IpIHtcbiAgdmFyIGZuID0gRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCB8fCBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgaWYgKG1hdGNoZXMkMS5jYWxsKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZm4uY2FsbChlbGVtZW50LCBwYXJlbnRTZWxlY3Rvcik7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdmFsdWUgdGFraW5nIGludG8gYWNjb3VudCB0aGUgdmFsdWUgYmVpbmcgZWl0aGVyIGEgbnVtYmVyIG9yIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcnxBcnJheX0gdmFsdWVcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSwgaW5kZXgpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWVbaW5kZXhdIDogdmFsdWU7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgdmlzaWJpbGl0eSBzdGF0ZSBvZiBhbiBlbGVtZW50IGZvciB0cmFuc2l0aW9uIHRvIGJlZ2luXG4gKiBAcGFyYW0ge0VsZW1lbnRbXX0gZWxzIC0gYXJyYXkgb2YgZWxlbWVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gJ3Zpc2libGUnIG9yICdoaWRkZW4nXG4gKi9cbmZ1bmN0aW9uIHNldFZpc2liaWxpdHlTdGF0ZShlbHMsIHR5cGUpIHtcbiAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHR5cGUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSB0cmFuc2l0aW9uIHByb3BlcnR5IHRvIGVhY2ggZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50W119IGVscyAtIEFycmF5IG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqL1xuZnVuY3Rpb24gYXBwbHlUcmFuc2l0aW9uRHVyYXRpb24oZWxzLCB2YWx1ZSkge1xuICBlbHMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgZWwuc3R5bGVbcHJlZml4KCd0cmFuc2l0aW9uRHVyYXRpb24nKV0gPSB2YWx1ZSArICdtcyc7XG4gIH0pO1xufVxuXG4vKipcbiAqIEZvY3VzZXMgYW4gZWxlbWVudCB3aGlsZSBwcmV2ZW50aW5nIGEgc2Nyb2xsIGp1bXAgaWYgaXQncyBub3QgZW50aXJlbHkgd2l0aGluIHRoZSB2aWV3cG9ydFxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICovXG5mdW5jdGlvbiBmb2N1cyhlbCkge1xuICB2YXIgeCA9IHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgdmFyIHkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIGVsLmZvY3VzKCk7XG4gIHNjcm9sbCh4LCB5KTtcbn1cblxudmFyIGtleSA9IHt9O1xudmFyIHN0b3JlID0gZnVuY3Rpb24gc3RvcmUoZGF0YSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gayA9PT0ga2V5ICYmIGRhdGE7XG4gIH07XG59O1xuXG52YXIgVGlwcHkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRpcHB5KGNvbmZpZykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFRpcHB5KTtcblxuICAgIGZvciAodmFyIF9rZXkgaW4gY29uZmlnKSB7XG4gICAgICB0aGlzW19rZXldID0gY29uZmlnW19rZXldO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkZXN0cm95ZWQ6IGZhbHNlLFxuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICBlbmFibGVkOiB0cnVlXG4gICAgfTtcblxuICAgIHRoaXMuXyA9IHN0b3JlKHtcbiAgICAgIG11dGF0aW9uT2JzZXJ2ZXJzOiBbXVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGhlIHRvb2x0aXAgdG8gYWxsb3cgaXQgdG8gc2hvdyBvciBoaWRlXG4gICAqIEBtZW1iZXJvZiBUaXBweVxuICAgKiBAcHVibGljXG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoVGlwcHksIFt7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5zdGF0ZS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyB0aGUgdG9vbHRpcCBmcm9tIHNob3dpbmcgb3IgaGlkaW5nLCBidXQgZG9lcyBub3QgZGVzdHJveSBpdFxuICAgICAqIEBtZW1iZXJvZiBUaXBweVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLnN0YXRlLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyB0aGUgdG9vbHRpcFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAbWVtYmVyb2YgVGlwcHlcbiAgICAgKiBAcHVibGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3Nob3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93KGR1cmF0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5kZXN0cm95ZWQgfHwgIXRoaXMuc3RhdGUuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICB2YXIgcG9wcGVyID0gdGhpcy5wb3BwZXIsXG4gICAgICAgICAgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgdmFyIF9nZXRJbm5lckVsZW1lbnRzID0gZ2V0SW5uZXJFbGVtZW50cyhwb3BwZXIpLFxuICAgICAgICAgIHRvb2x0aXAgPSBfZ2V0SW5uZXJFbGVtZW50cy50b29sdGlwLFxuICAgICAgICAgIGJhY2tkcm9wID0gX2dldElubmVyRWxlbWVudHMuYmFja2Ryb3AsXG4gICAgICAgICAgY29udGVudCA9IF9nZXRJbm5lckVsZW1lbnRzLmNvbnRlbnQ7XG5cbiAgICAgIC8vIElmIHRoZSBgZHluYW1pY1RpdGxlYCBvcHRpb24gaXMgdHJ1ZSwgdGhlIGluc3RhbmNlIGlzIGFsbG93ZWRcbiAgICAgIC8vIHRvIGJlIGNyZWF0ZWQgd2l0aCBhbiBlbXB0eSB0aXRsZS4gTWFrZSBzdXJlIHRoYXQgdGhlIHRvb2x0aXBcbiAgICAgIC8vIGNvbnRlbnQgaXMgbm90IGVtcHR5IGJlZm9yZSBzaG93aW5nIGl0XG5cblxuICAgICAgaWYgKG9wdGlvbnMuZHluYW1pY1RpdGxlICYmICFyZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBEbyBub3Qgc2hvdyB0b29sdGlwIGlmIHJlZmVyZW5jZSBjb250YWlucyAnZGlzYWJsZWQnIGF0dHJpYnV0ZS4gRkYgZml4IGZvciAjMjIxXG4gICAgICBpZiAocmVmZXJlbmNlLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAvLyBEZXN0cm95IHRvb2x0aXAgaWYgdGhlIHJlZmVyZW5jZSBlbGVtZW50IGlzIG5vIGxvbmdlciBvbiB0aGUgRE9NXG4gICAgICBpZiAoIXJlZmVyZW5jZS5yZWZPYmogJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhyZWZlcmVuY2UpKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMub25TaG93LmNhbGwocG9wcGVyLCB0aGlzKTtcblxuICAgICAgZHVyYXRpb24gPSBnZXRWYWx1ZShkdXJhdGlvbiAhPT0gdW5kZWZpbmVkID8gZHVyYXRpb24gOiBvcHRpb25zLmR1cmF0aW9uLCAwKTtcblxuICAgICAgLy8gUHJldmVudCBhIHRyYW5zaXRpb24gd2hlbiBwb3BwZXIgY2hhbmdlcyBwb3NpdGlvblxuICAgICAgYXBwbHlUcmFuc2l0aW9uRHVyYXRpb24oW3BvcHBlciwgdG9vbHRpcCwgYmFja2Ryb3BdLCAwKTtcblxuICAgICAgcG9wcGVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSB0cnVlO1xuXG4gICAgICBfbW91bnQuY2FsbCh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3RhdGUudmlzaWJsZSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghX2hhc0ZvbGxvd0N1cnNvckJlaGF2aW9yLmNhbGwoX3RoaXMpKSB7XG4gICAgICAgICAgLy8gRklYOiBBcnJvdyB3aWxsIHNvbWV0aW1lcyBub3QgYmUgcG9zaXRpb25lZCBjb3JyZWN0bHkuIEZvcmNlIGFub3RoZXIgdXBkYXRlLlxuICAgICAgICAgIF90aGlzLnBvcHBlckluc3RhbmNlLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgaW5pdGlhbCBwb3NpdGlvbiBuZWFyIHRoZSBjdXJzb3JcbiAgICAgICAgaWYgKF9oYXNGb2xsb3dDdXJzb3JCZWhhdmlvci5jYWxsKF90aGlzKSkge1xuICAgICAgICAgIF90aGlzLnBvcHBlckluc3RhbmNlLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuICAgICAgICAgIHZhciBkZWxheSA9IGdldFZhbHVlKG9wdGlvbnMuZGVsYXksIDApO1xuICAgICAgICAgIHZhciBsYXN0VHJpZ2dlckV2ZW50ID0gX3RoaXMuXyhrZXkpLmxhc3RUcmlnZ2VyRXZlbnQ7XG4gICAgICAgICAgaWYgKGxhc3RUcmlnZ2VyRXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzLl8oa2V5KS5mb2xsb3dDdXJzb3JMaXN0ZW5lcihkZWxheSAmJiBfdGhpcy5fKGtleSkubGFzdE1vdXNlTW92ZUV2ZW50ID8gX3RoaXMuXyhrZXkpLmxhc3RNb3VzZU1vdmVFdmVudCA6IGxhc3RUcmlnZ2VyRXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlLWFwcGx5IHRyYW5zaXRpb24gZHVyYXRpb25zXG4gICAgICAgIGFwcGx5VHJhbnNpdGlvbkR1cmF0aW9uKFt0b29sdGlwLCBiYWNrZHJvcCwgYmFja2Ryb3AgPyBjb250ZW50IDogbnVsbF0sIGR1cmF0aW9uKTtcblxuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlKGJhY2tkcm9wKVtwcmVmaXgoJ3RyYW5zZm9ybScpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmludGVyYWN0aXZlKSB7XG4gICAgICAgICAgcmVmZXJlbmNlLmNsYXNzTGlzdC5hZGQoJ3RpcHB5LWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RpY2t5KSB7XG4gICAgICAgICAgX21ha2VTdGlja3kuY2FsbChfdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW3Rvb2x0aXAsIGJhY2tkcm9wXSwgJ3Zpc2libGUnKTtcblxuICAgICAgICBfb25UcmFuc2l0aW9uRW5kLmNhbGwoX3RoaXMsIGR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLnVwZGF0ZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3RpcHB5LW5vdHJhbnNpdGlvbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLmludGVyYWN0aXZlKSB7XG4gICAgICAgICAgICBmb2N1cyhwb3BwZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCAndGlwcHktJyArIF90aGlzLmlkKTtcblxuICAgICAgICAgIG9wdGlvbnMub25TaG93bi5jYWxsKHBvcHBlciwgX3RoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSB0b29sdGlwXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kc1xuICAgICAqIEBtZW1iZXJvZiBUaXBweVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGlkZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGUoZHVyYXRpb24pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5kZXN0cm95ZWQgfHwgIXRoaXMuc3RhdGUuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICB2YXIgcG9wcGVyID0gdGhpcy5wb3BwZXIsXG4gICAgICAgICAgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgdmFyIF9nZXRJbm5lckVsZW1lbnRzMiA9IGdldElubmVyRWxlbWVudHMocG9wcGVyKSxcbiAgICAgICAgICB0b29sdGlwID0gX2dldElubmVyRWxlbWVudHMyLnRvb2x0aXAsXG4gICAgICAgICAgYmFja2Ryb3AgPSBfZ2V0SW5uZXJFbGVtZW50czIuYmFja2Ryb3AsXG4gICAgICAgICAgY29udGVudCA9IF9nZXRJbm5lckVsZW1lbnRzMi5jb250ZW50O1xuXG4gICAgICBvcHRpb25zLm9uSGlkZS5jYWxsKHBvcHBlciwgdGhpcyk7XG5cbiAgICAgIGR1cmF0aW9uID0gZ2V0VmFsdWUoZHVyYXRpb24gIT09IHVuZGVmaW5lZCA/IGR1cmF0aW9uIDogb3B0aW9ucy5kdXJhdGlvbiwgMSk7XG5cbiAgICAgIGlmICghb3B0aW9ucy51cGRhdGVEdXJhdGlvbikge1xuICAgICAgICB0b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3RpcHB5LW5vdHJhbnNpdGlvbicpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5pbnRlcmFjdGl2ZSkge1xuICAgICAgICByZWZlcmVuY2UuY2xhc3NMaXN0LnJlbW92ZSgndGlwcHktYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIHBvcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICB0aGlzLnN0YXRlLnZpc2libGUgPSBmYWxzZTtcblxuICAgICAgYXBwbHlUcmFuc2l0aW9uRHVyYXRpb24oW3Rvb2x0aXAsIGJhY2tkcm9wLCBiYWNrZHJvcCA/IGNvbnRlbnQgOiBudWxsXSwgZHVyYXRpb24pO1xuXG4gICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW3Rvb2x0aXAsIGJhY2tkcm9wXSwgJ2hpZGRlbicpO1xuXG4gICAgICBpZiAob3B0aW9ucy5pbnRlcmFjdGl2ZSAmJiBvcHRpb25zLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+IC0xKSB7XG4gICAgICAgIGZvY3VzKHJlZmVyZW5jZSk7XG4gICAgICB9XG5cbiAgICAgIF9vblRyYW5zaXRpb25FbmQuY2FsbCh0aGlzLCBkdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMyLnN0YXRlLnZpc2libGUgfHwgIW9wdGlvbnMuYXBwZW5kVG8uY29udGFpbnMocG9wcGVyKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghX3RoaXMyLl8oa2V5KS5pc1ByZXBhcmluZ1RvU2hvdykge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF90aGlzMi5fKGtleSkuZm9sbG93Q3Vyc29yTGlzdGVuZXIpO1xuICAgICAgICAgIF90aGlzMi5fKGtleSkubGFzdE1vdXNlTW92ZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpczIucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgICAgICBfdGhpczIucG9wcGVySW5zdGFuY2UuZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG5cbiAgICAgICAgb3B0aW9ucy5hcHBlbmRUby5yZW1vdmVDaGlsZChwb3BwZXIpO1xuXG4gICAgICAgIG9wdGlvbnMub25IaWRkZW4uY2FsbChwb3BwZXIsIF90aGlzMik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyB0aGUgdG9vbHRpcCBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVzdHJveVRhcmdldEluc3RhbmNlcyAtIHJlbGV2YW50IG9ubHkgd2hlbiBkZXN0cm95aW5nIGRlbGVnYXRlc1xuICAgICAqIEBtZW1iZXJvZiBUaXBweVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGRlc3Ryb3lUYXJnZXRJbnN0YW5jZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmRlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgICAvLyBFbnN1cmUgdGhlIHBvcHBlciBpcyBoaWRkZW5cbiAgICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5oaWRlKDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBfdGhpczMucmVmZXJlbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIobGlzdGVuZXIuZXZlbnQsIGxpc3RlbmVyLmhhbmRsZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFJlc3RvcmUgdGl0bGVcbiAgICAgIGlmICh0aGlzLnRpdGxlKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLnRpdGxlKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMucmVmZXJlbmNlLl90aXBweTtcblxuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBbJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLCAnZGF0YS10aXBweScsICdkYXRhLXRpcHB5LWRlbGVnYXRlJ107XG4gICAgICBhdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgX3RoaXMzLnJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50YXJnZXQgJiYgZGVzdHJveVRhcmdldEluc3RhbmNlcykge1xuICAgICAgICB0b0FycmF5KHRoaXMucmVmZXJlbmNlLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5vcHRpb25zLnRhcmdldCkpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkLl90aXBweSAmJiBjaGlsZC5fdGlwcHkuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuXyhrZXkpLm11dGF0aW9uT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN0YXRlLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUaXBweTtcbn0oKTtcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgbWV0aG9kc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBTdGFuZGFsb25lIGZ1bmN0aW9ucyB0byBiZSBjYWxsZWQgd2l0aCB0aGUgaW5zdGFuY2UncyBgdGhpc2AgY29udGV4dCB0byBtYWtlXG4gKiB0aGVtIHRydWx5IHByaXZhdGUgYW5kIG5vdCBhY2Nlc3NpYmxlIG9uIHRoZSBwcm90b3R5cGVcbiAqL1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIHRvb2x0aXAgaW5zdGFuY2UgaGFzIGZvbGxvd0N1cnNvciBiZWhhdmlvclxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBtZW1iZXJvZiBUaXBweVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX2hhc0ZvbGxvd0N1cnNvckJlaGF2aW9yKCkge1xuICB2YXIgbGFzdFRyaWdnZXJFdmVudCA9IHRoaXMuXyhrZXkpLmxhc3RUcmlnZ2VyRXZlbnQ7XG4gIHJldHVybiB0aGlzLm9wdGlvbnMuZm9sbG93Q3Vyc29yICYmICFicm93c2VyLnVzaW5nVG91Y2ggJiYgbGFzdFRyaWdnZXJFdmVudCAmJiBsYXN0VHJpZ2dlckV2ZW50LnR5cGUgIT09ICdmb2N1cyc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgVGlwcHkgaW5zdGFuY2UgZm9yIHRoZSBjaGlsZCB0YXJnZXQgb2YgdGhlIGRlbGVnYXRlIGNvbnRhaW5lclxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBtZW1iZXJvZiBUaXBweVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX2NyZWF0ZURlbGVnYXRlQ2hpbGRUaXBweShldmVudCkge1xuICB2YXIgdGFyZ2V0RWwgPSBjbG9zZXN0KGV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLnRhcmdldCk7XG4gIGlmICh0YXJnZXRFbCAmJiAhdGFyZ2V0RWwuX3RpcHB5KSB7XG4gICAgdmFyIHRpdGxlID0gdGFyZ2V0RWwuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8IHRoaXMudGl0bGU7XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICB0YXJnZXRFbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGl0bGUpO1xuICAgICAgdGlwcHkodGFyZ2V0RWwsIF9leHRlbmRzKHt9LCB0aGlzLm9wdGlvbnMsIHsgdGFyZ2V0OiBudWxsIH0pKTtcbiAgICAgIF9lbnRlci5jYWxsKHRhcmdldEVsLl90aXBweSwgZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1ldGhvZCB1c2VkIGJ5IGV2ZW50IGxpc3RlbmVycyB0byBpbnZva2UgdGhlIHNob3cgbWV0aG9kLCB0YWtpbmcgaW50byBhY2NvdW50IGRlbGF5cyBhbmRcbiAqIHRoZSBgd2FpdGAgb3B0aW9uXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQG1lbWJlcm9mIFRpcHB5XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfZW50ZXIoZXZlbnQpIHtcbiAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cblxuICBfY2xlYXJEZWxheVRpbWVvdXRzLmNhbGwodGhpcyk7XG5cbiAgaWYgKHRoaXMuc3RhdGUudmlzaWJsZSkgcmV0dXJuO1xuXG4gIC8vIElzIGEgZGVsZWdhdGUsIGNyZWF0ZSBUaXBweSBpbnN0YW5jZSBmb3IgdGhlIGNoaWxkIHRhcmdldFxuICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICBfY3JlYXRlRGVsZWdhdGVDaGlsZFRpcHB5LmNhbGwodGhpcywgZXZlbnQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuXyhrZXkpLmlzUHJlcGFyaW5nVG9TaG93ID0gdHJ1ZTtcblxuICBpZiAob3B0aW9ucy53YWl0KSB7XG4gICAgb3B0aW9ucy53YWl0LmNhbGwodGhpcy5wb3BwZXIsIHRoaXMuc2hvdy5iaW5kKHRoaXMpLCBldmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgdGhlIHRvb2x0aXAgaGFzIGEgZGVsYXksIHdlIG5lZWQgdG8gYmUgbGlzdGVuaW5nIHRvIHRoZSBtb3VzZW1vdmUgYXMgc29vbiBhcyB0aGUgdHJpZ2dlclxuICAvLyBldmVudCBpcyBmaXJlZCBzbyB0aGF0IGl0J3MgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24gdXBvbiBtb3VudC5cbiAgaWYgKF9oYXNGb2xsb3dDdXJzb3JCZWhhdmlvci5jYWxsKHRoaXMpKSB7XG4gICAgaWYgKCF0aGlzLl8oa2V5KS5mb2xsb3dDdXJzb3JMaXN0ZW5lcikge1xuICAgICAgX3NldEZvbGxvd0N1cnNvckxpc3RlbmVyLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIF9nZXRJbm5lckVsZW1lbnRzMyA9IGdldElubmVyRWxlbWVudHModGhpcy5wb3BwZXIpLFxuICAgICAgICBhcnJvdyA9IF9nZXRJbm5lckVsZW1lbnRzMy5hcnJvdztcblxuICAgIGlmIChhcnJvdykgYXJyb3cuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuXyhrZXkpLmZvbGxvd0N1cnNvckxpc3RlbmVyKTtcbiAgfVxuXG4gIHZhciBkZWxheSA9IGdldFZhbHVlKG9wdGlvbnMuZGVsYXksIDApO1xuXG4gIGlmIChkZWxheSkge1xuICAgIHRoaXMuXyhrZXkpLnNob3dUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczQuc2hvdygpO1xuICAgIH0sIGRlbGF5KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNob3coKTtcbiAgfVxufVxuXG4vKipcbiAqIE1ldGhvZCB1c2VkIGJ5IGV2ZW50IGxpc3RlbmVycyB0byBpbnZva2UgdGhlIGhpZGUgbWV0aG9kLCB0YWtpbmcgaW50byBhY2NvdW50IGRlbGF5c1xuICogQG1lbWJlcm9mIFRpcHB5XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfbGVhdmUoKSB7XG4gIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gIF9jbGVhckRlbGF5VGltZW91dHMuY2FsbCh0aGlzKTtcblxuICBpZiAoIXRoaXMuc3RhdGUudmlzaWJsZSkgcmV0dXJuO1xuXG4gIHRoaXMuXyhrZXkpLmlzUHJlcGFyaW5nVG9TaG93ID0gZmFsc2U7XG5cbiAgdmFyIGRlbGF5ID0gZ2V0VmFsdWUodGhpcy5vcHRpb25zLmRlbGF5LCAxKTtcblxuICBpZiAoZGVsYXkpIHtcbiAgICB0aGlzLl8oa2V5KS5oaWRlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzNS5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICAgIF90aGlzNS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSwgZGVsYXkpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyByZWxldmFudCBsaXN0ZW5lcnMgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7T2JqZWN0fSBvZiBsaXN0ZW5lcnNcbiAqIEBtZW1iZXJvZiBUaXBweVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX2dldEV2ZW50TGlzdGVuZXJzKCkge1xuICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICB2YXIgb25UcmlnZ2VyID0gZnVuY3Rpb24gb25UcmlnZ2VyKGV2ZW50KSB7XG4gICAgaWYgKCFfdGhpczYuc3RhdGUuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgdmFyIHNob3VsZFN0b3BFdmVudCA9IGJyb3dzZXIuc3VwcG9ydHNUb3VjaCAmJiBicm93c2VyLnVzaW5nVG91Y2ggJiYgWydtb3VzZWVudGVyJywgJ21vdXNlb3ZlcicsICdmb2N1cyddLmluZGV4T2YoZXZlbnQudHlwZSkgPiAtMTtcblxuICAgIGlmIChzaG91bGRTdG9wRXZlbnQgJiYgX3RoaXM2Lm9wdGlvbnMudG91Y2hIb2xkKSByZXR1cm47XG5cbiAgICBfdGhpczYuXyhrZXkpLmxhc3RUcmlnZ2VyRXZlbnQgPSBldmVudDtcblxuICAgIC8vIFRvZ2dsZSBzaG93L2hpZGUgd2hlbiBjbGlja2luZyBjbGljay10cmlnZ2VyZWQgdG9vbHRpcHNcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiBfdGhpczYub3B0aW9ucy5oaWRlT25DbGljayAhPT0gJ3BlcnNpc3RlbnQnICYmIF90aGlzNi5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICBfbGVhdmUuY2FsbChfdGhpczYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfZW50ZXIuY2FsbChfdGhpczYsIGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZShldmVudCkge1xuICAgIGlmIChbJ21vdXNlbGVhdmUnLCAnbW91c2VvdXQnXS5pbmRleE9mKGV2ZW50LnR5cGUpID4gLTEgJiYgYnJvd3Nlci5zdXBwb3J0c1RvdWNoICYmIGJyb3dzZXIudXNpbmdUb3VjaCAmJiBfdGhpczYub3B0aW9ucy50b3VjaEhvbGQpIHJldHVybjtcblxuICAgIGlmIChfdGhpczYub3B0aW9ucy5pbnRlcmFjdGl2ZSkge1xuICAgICAgdmFyIGhpZGUgPSBfbGVhdmUuYmluZChfdGhpczYpO1xuXG4gICAgICB2YXIgb25Nb3VzZU1vdmUgPSBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgICB2YXIgcmVmZXJlbmNlQ3Vyc29ySXNPdmVyID0gY2xvc2VzdChldmVudC50YXJnZXQsIHNlbGVjdG9ycy5SRUZFUkVOQ0UpO1xuICAgICAgICB2YXIgY3Vyc29ySXNPdmVyUG9wcGVyID0gY2xvc2VzdChldmVudC50YXJnZXQsIHNlbGVjdG9ycy5QT1BQRVIpID09PSBfdGhpczYucG9wcGVyO1xuICAgICAgICB2YXIgY3Vyc29ySXNPdmVyUmVmZXJlbmNlID0gcmVmZXJlbmNlQ3Vyc29ySXNPdmVyID09PSBfdGhpczYucmVmZXJlbmNlO1xuXG4gICAgICAgIGlmIChjdXJzb3JJc092ZXJQb3BwZXIgfHwgY3Vyc29ySXNPdmVyUmVmZXJlbmNlKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGN1cnNvcklzT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyKGV2ZW50LCBfdGhpczYucG9wcGVyLCBfdGhpczYub3B0aW9ucykpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlKTtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cbiAgICAgICAgICBfbGVhdmUuY2FsbChfdGhpczYsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGlkZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX2xlYXZlLmNhbGwoX3RoaXM2KTtcbiAgfTtcblxuICB2YXIgb25CbHVyID0gZnVuY3Rpb24gb25CbHVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gX3RoaXM2LnJlZmVyZW5jZSB8fCBicm93c2VyLnVzaW5nVG91Y2gpIHJldHVybjtcblxuICAgIGlmIChfdGhpczYub3B0aW9ucy5pbnRlcmFjdGl2ZSkge1xuICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0KSByZXR1cm47XG4gICAgICBpZiAoY2xvc2VzdChldmVudC5yZWxhdGVkVGFyZ2V0LCBzZWxlY3RvcnMuUE9QUEVSKSkgcmV0dXJuO1xuICAgIH1cblxuICAgIF9sZWF2ZS5jYWxsKF90aGlzNik7XG4gIH07XG5cbiAgdmFyIG9uRGVsZWdhdGVTaG93ID0gZnVuY3Rpb24gb25EZWxlZ2F0ZVNob3coZXZlbnQpIHtcbiAgICBpZiAoY2xvc2VzdChldmVudC50YXJnZXQsIF90aGlzNi5vcHRpb25zLnRhcmdldCkpIHtcbiAgICAgIF9lbnRlci5jYWxsKF90aGlzNiwgZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb25EZWxlZ2F0ZUhpZGUgPSBmdW5jdGlvbiBvbkRlbGVnYXRlSGlkZShldmVudCkge1xuICAgIGlmIChjbG9zZXN0KGV2ZW50LnRhcmdldCwgX3RoaXM2Lm9wdGlvbnMudGFyZ2V0KSkge1xuICAgICAgX2xlYXZlLmNhbGwoX3RoaXM2KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvblRyaWdnZXI6IG9uVHJpZ2dlcixcbiAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSxcbiAgICBvbkJsdXI6IG9uQmx1cixcbiAgICBvbkRlbGVnYXRlU2hvdzogb25EZWxlZ2F0ZVNob3csXG4gICAgb25EZWxlZ2F0ZUhpZGU6IG9uRGVsZWdhdGVIaWRlXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIG5ldyBwb3BwZXIgaW5zdGFuY2VcbiAqIEByZXR1cm4ge1BvcHBlcn1cbiAqIEBtZW1iZXJvZiBUaXBweVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX2NyZWF0ZVBvcHBlckluc3RhbmNlKCkge1xuICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICB2YXIgcG9wcGVyID0gdGhpcy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZSxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgdmFyIF9nZXRJbm5lckVsZW1lbnRzNCA9IGdldElubmVyRWxlbWVudHMocG9wcGVyKSxcbiAgICAgIHRvb2x0aXAgPSBfZ2V0SW5uZXJFbGVtZW50czQudG9vbHRpcDtcblxuICB2YXIgcG9wcGVyT3B0aW9ucyA9IG9wdGlvbnMucG9wcGVyT3B0aW9ucztcblxuICB2YXIgYXJyb3dTZWxlY3RvciA9IG9wdGlvbnMuYXJyb3dUeXBlID09PSAncm91bmQnID8gc2VsZWN0b3JzLlJPVU5EX0FSUk9XIDogc2VsZWN0b3JzLkFSUk9XO1xuICB2YXIgYXJyb3cgPSB0b29sdGlwLnF1ZXJ5U2VsZWN0b3IoYXJyb3dTZWxlY3Rvcik7XG5cbiAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHtcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50XG4gIH0sIHBvcHBlck9wdGlvbnMgfHwge30sIHtcbiAgICBtb2RpZmllcnM6IF9leHRlbmRzKHt9LCBwb3BwZXJPcHRpb25zID8gcG9wcGVyT3B0aW9ucy5tb2RpZmllcnMgOiB7fSwge1xuICAgICAgYXJyb3c6IF9leHRlbmRzKHtcbiAgICAgICAgZWxlbWVudDogYXJyb3dTZWxlY3RvclxuICAgICAgfSwgcG9wcGVyT3B0aW9ucyAmJiBwb3BwZXJPcHRpb25zLm1vZGlmaWVycyA/IHBvcHBlck9wdGlvbnMubW9kaWZpZXJzLmFycm93IDoge30pLFxuICAgICAgZmxpcDogX2V4dGVuZHMoe1xuICAgICAgICBlbmFibGVkOiBvcHRpb25zLmZsaXAsXG4gICAgICAgIHBhZGRpbmc6IG9wdGlvbnMuZGlzdGFuY2UgKyA1IC8qIDVweCBmcm9tIHZpZXdwb3J0IGJvdW5kYXJ5ICovXG4gICAgICAgICwgYmVoYXZpb3I6IG9wdGlvbnMuZmxpcEJlaGF2aW9yXG4gICAgICB9LCBwb3BwZXJPcHRpb25zICYmIHBvcHBlck9wdGlvbnMubW9kaWZpZXJzID8gcG9wcGVyT3B0aW9ucy5tb2RpZmllcnMuZmxpcCA6IHt9KSxcbiAgICAgIG9mZnNldDogX2V4dGVuZHMoe1xuICAgICAgICBvZmZzZXQ6IG9wdGlvbnMub2Zmc2V0XG4gICAgICB9LCBwb3BwZXJPcHRpb25zICYmIHBvcHBlck9wdGlvbnMubW9kaWZpZXJzID8gcG9wcGVyT3B0aW9ucy5tb2RpZmllcnMub2Zmc2V0IDoge30pXG4gICAgfSksXG4gICAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKCkge1xuICAgICAgdG9vbHRpcC5zdHlsZVtnZXRQb3BwZXJQbGFjZW1lbnQocG9wcGVyKV0gPSBnZXRPZmZzZXREaXN0YW5jZUluUHgob3B0aW9ucy5kaXN0YW5jZSk7XG5cbiAgICAgIGlmIChhcnJvdyAmJiBvcHRpb25zLmFycm93VHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbXB1dGVBcnJvd1RyYW5zZm9ybShwb3BwZXIsIGFycm93LCBvcHRpb25zLmFycm93VHJhbnNmb3JtKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZSgpIHtcbiAgICAgIHZhciBzdHlsZXMgPSB0b29sdGlwLnN0eWxlO1xuICAgICAgc3R5bGVzLnRvcCA9ICcnO1xuICAgICAgc3R5bGVzLmJvdHRvbSA9ICcnO1xuICAgICAgc3R5bGVzLmxlZnQgPSAnJztcbiAgICAgIHN0eWxlcy5yaWdodCA9ICcnO1xuICAgICAgc3R5bGVzW2dldFBvcHBlclBsYWNlbWVudChwb3BwZXIpXSA9IGdldE9mZnNldERpc3RhbmNlSW5QeChvcHRpb25zLmRpc3RhbmNlKTtcblxuICAgICAgaWYgKGFycm93ICYmIG9wdGlvbnMuYXJyb3dUcmFuc2Zvcm0pIHtcbiAgICAgICAgY29tcHV0ZUFycm93VHJhbnNmb3JtKHBvcHBlciwgYXJyb3csIG9wdGlvbnMuYXJyb3dUcmFuc2Zvcm0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgX2FkZE11dGF0aW9uT2JzZXJ2ZXIuY2FsbCh0aGlzLCB7XG4gICAgdGFyZ2V0OiBwb3BwZXIsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgX3RoaXM3LnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBuZXcgUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBjb25maWcpO1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIHBvcHBlciBlbGVtZW50IHRvIHRoZSBET00sIHVwZGF0aW5nIG9yIGNyZWF0aW5nIHRoZSBwb3BwZXIgaW5zdGFuY2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAbWVtYmVyb2YgVGlwcHlcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9tb3VudChjYWxsYmFjaykge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXG4gIGlmICghdGhpcy5wb3BwZXJJbnN0YW5jZSkge1xuICAgIHRoaXMucG9wcGVySW5zdGFuY2UgPSBfY3JlYXRlUG9wcGVySW5zdGFuY2UuY2FsbCh0aGlzKTtcbiAgICBpZiAoIW9wdGlvbnMubGl2ZVBsYWNlbWVudCkge1xuICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS5kaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wb3BwZXJJbnN0YW5jZS5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgIGlmIChvcHRpb25zLmxpdmVQbGFjZW1lbnQgJiYgIV9oYXNGb2xsb3dDdXJzb3JCZWhhdmlvci5jYWxsKHRoaXMpKSB7XG4gICAgICB0aGlzLnBvcHBlckluc3RhbmNlLmVuYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlIGluc3RhbmNlIHByZXZpb3VzbHkgaGFkIGZvbGxvd0N1cnNvciBiZWhhdmlvciwgaXQgd2lsbCBiZSBwb3NpdGlvbmVkIGluY29ycmVjdGx5XG4gIC8vIGlmIHRyaWdnZXJlZCBieSBgZm9jdXNgIGFmdGVyd2FyZHMgLSB1cGRhdGUgdGhlIHJlZmVyZW5jZSBiYWNrIHRvIHRoZSByZWFsIERPTSBlbGVtZW50XG4gIGlmICghX2hhc0ZvbGxvd0N1cnNvckJlaGF2aW9yLmNhbGwodGhpcykpIHtcbiAgICB2YXIgX2dldElubmVyRWxlbWVudHM1ID0gZ2V0SW5uZXJFbGVtZW50cyh0aGlzLnBvcHBlciksXG4gICAgICAgIGFycm93ID0gX2dldElubmVyRWxlbWVudHM1LmFycm93O1xuXG4gICAgaWYgKGFycm93KSBhcnJvdy5zdHlsZS5tYXJnaW4gPSAnJztcbiAgICB0aGlzLnBvcHBlckluc3RhbmNlLnJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgdXBkYXRlUG9wcGVyUG9zaXRpb24odGhpcy5wb3BwZXJJbnN0YW5jZSwgY2FsbGJhY2ssIHRydWUpO1xuXG4gIGlmICghb3B0aW9ucy5hcHBlbmRUby5jb250YWlucyh0aGlzLnBvcHBlcikpIHtcbiAgICBvcHRpb25zLmFwcGVuZFRvLmFwcGVuZENoaWxkKHRoaXMucG9wcGVyKTtcbiAgfVxufVxuXG4vKipcbiAqIENsZWFycyB0aGUgc2hvdyBhbmQgaGlkZSBkZWxheSB0aW1lb3V0c1xuICogQG1lbWJlcm9mIFRpcHB5XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfY2xlYXJEZWxheVRpbWVvdXRzKCkge1xuICB2YXIgX3JlZiA9IHRoaXMuXyhrZXkpLFxuICAgICAgc2hvd1RpbWVvdXQgPSBfcmVmLnNob3dUaW1lb3V0LFxuICAgICAgaGlkZVRpbWVvdXQgPSBfcmVmLmhpZGVUaW1lb3V0O1xuXG4gIGNsZWFyVGltZW91dChzaG93VGltZW91dCk7XG4gIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbW91c2Vtb3ZlIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBgZm9sbG93Q3Vyc29yYCBvcHRpb25cbiAqIEBtZW1iZXJvZiBUaXBweVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX3NldEZvbGxvd0N1cnNvckxpc3RlbmVyKCkge1xuICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICB0aGlzLl8oa2V5KS5mb2xsb3dDdXJzb3JMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBfJGxhc3RNb3VzZU1vdmVFdmVudCA9IF90aGlzOC5fKGtleSkubGFzdE1vdXNlTW92ZUV2ZW50ID0gZXZlbnQsXG4gICAgICAgIGNsaWVudFggPSBfJGxhc3RNb3VzZU1vdmVFdmVudC5jbGllbnRYLFxuICAgICAgICBjbGllbnRZID0gXyRsYXN0TW91c2VNb3ZlRXZlbnQuY2xpZW50WTtcblxuICAgIGlmICghX3RoaXM4LnBvcHBlckluc3RhbmNlKSByZXR1cm47XG5cbiAgICBfdGhpczgucG9wcGVySW5zdGFuY2UucmVmZXJlbmNlID0ge1xuICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIHRvcDogY2xpZW50WSxcbiAgICAgICAgICBsZWZ0OiBjbGllbnRYLFxuICAgICAgICAgIHJpZ2h0OiBjbGllbnRYLFxuICAgICAgICAgIGJvdHRvbTogY2xpZW50WVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNsaWVudFdpZHRoOiAwLFxuICAgICAgY2xpZW50SGVpZ2h0OiAwXG4gICAgfTtcblxuICAgIF90aGlzOC5wb3BwZXJJbnN0YW5jZS5zY2hlZHVsZVVwZGF0ZSgpO1xuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBvcHBlcidzIHBvc2l0aW9uIG9uIGVhY2ggYW5pbWF0aW9uIGZyYW1lXG4gKiBAbWVtYmVyb2YgVGlwcHlcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9tYWtlU3RpY2t5KCkge1xuICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICB2YXIgYXBwbHlUcmFuc2l0aW9uRHVyYXRpb24kJDEgPSBmdW5jdGlvbiBhcHBseVRyYW5zaXRpb25EdXJhdGlvbiQkMSgpIHtcbiAgICBfdGhpczkucG9wcGVyLnN0eWxlW3ByZWZpeCgndHJhbnNpdGlvbkR1cmF0aW9uJyldID0gX3RoaXM5Lm9wdGlvbnMudXBkYXRlRHVyYXRpb24gKyAnbXMnO1xuICB9O1xuXG4gIHZhciByZW1vdmVUcmFuc2l0aW9uRHVyYXRpb24gPSBmdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uRHVyYXRpb24oKSB7XG4gICAgX3RoaXM5LnBvcHBlci5zdHlsZVtwcmVmaXgoJ3RyYW5zaXRpb25EdXJhdGlvbicpXSA9ICcnO1xuICB9O1xuXG4gIHZhciB1cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgIGlmIChfdGhpczkucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIF90aGlzOS5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBhcHBseVRyYW5zaXRpb25EdXJhdGlvbiQkMSgpO1xuXG4gICAgaWYgKF90aGlzOS5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uRHVyYXRpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlUG9zaXRpb24oKTtcbn1cblxuLyoqXG4gKiBBZGRzIGEgbXV0YXRpb24gb2JzZXJ2ZXIgdG8gYW4gZWxlbWVudCBhbmQgc3RvcmVzIGl0IGluIHRoZSBpbnN0YW5jZVxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAbWVtYmVyb2YgVGlwcHlcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9hZGRNdXRhdGlvbk9ic2VydmVyKF9yZWYyKSB7XG4gIHZhciB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICBjYWxsYmFjayA9IF9yZWYyLmNhbGxiYWNrLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG5cbiAgaWYgKCF3aW5kb3cuTXV0YXRpb25PYnNlcnZlcikgcmV0dXJuO1xuXG4gIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuXG4gIHRoaXMuXyhrZXkpLm11dGF0aW9uT2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xufVxuXG4vKipcbiAqIEZpcmVzIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgb25jZSB0aGUgQ1NTIHRyYW5zaXRpb24gZW5kcyBmb3IgYHNob3dgIGFuZCBgaGlkZWAgbWV0aG9kc1xuICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGZpcmUgb25jZSB0cmFuc2l0aW9uIGNvbXBsZXRlc1xuICogQG1lbWJlcm9mIFRpcHB5XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCBjYWxsYmFjaykge1xuICAvLyBNYWtlIGNhbGxiYWNrIHN5bmNocm9ub3VzIGlmIGR1cmF0aW9uIGlzIDBcbiAgaWYgKCFkdXJhdGlvbikge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG5cbiAgdmFyIF9nZXRJbm5lckVsZW1lbnRzNiA9IGdldElubmVyRWxlbWVudHModGhpcy5wb3BwZXIpLFxuICAgICAgdG9vbHRpcCA9IF9nZXRJbm5lckVsZW1lbnRzNi50b29sdGlwO1xuXG4gIHZhciB0b2dnbGVMaXN0ZW5lcnMgPSBmdW5jdGlvbiB0b2dnbGVMaXN0ZW5lcnMoYWN0aW9uLCBsaXN0ZW5lcikge1xuICAgIGlmICghbGlzdGVuZXIpIHJldHVybjtcbiAgICB0b29sdGlwW2FjdGlvbiArICdFdmVudExpc3RlbmVyJ10oJ3RyYW5zaXRpb24nIGluIGRvY3VtZW50LmJvZHkuc3R5bGUgPyAndHJhbnNpdGlvbmVuZCcgOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIGxpc3RlbmVyKTtcbiAgfTtcblxuICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB0b29sdGlwKSB7XG4gICAgICB0b2dnbGVMaXN0ZW5lcnMoJ3JlbW92ZScsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIHRvZ2dsZUxpc3RlbmVycygncmVtb3ZlJywgdGhpcy5fKGtleSkudHJhbnNpdGlvbmVuZExpc3RlbmVyKTtcbiAgdG9nZ2xlTGlzdGVuZXJzKCdhZGQnLCBsaXN0ZW5lcik7XG5cbiAgdGhpcy5fKGtleSkudHJhbnNpdGlvbmVuZExpc3RlbmVyID0gbGlzdGVuZXI7XG59XG5cbnZhciBpZENvdW50ZXIgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgdG9vbHRpcHMgZm9yIGVhY2ggcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudFtdfSBlbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAqIEByZXR1cm4ge1RpcHB5W119IEFycmF5IG9mIFRpcHB5IGluc3RhbmNlc1xuICovXG5mdW5jdGlvbiBjcmVhdGVUb29sdGlwcyhlbHMsIGNvbmZpZykge1xuICByZXR1cm4gZWxzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCByZWZlcmVuY2UpIHtcbiAgICB2YXIgaWQgPSBpZENvdW50ZXI7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGV2YWx1YXRlT3B0aW9ucyhyZWZlcmVuY2UsIGNvbmZpZy5wZXJmb3JtYW5jZSA/IGNvbmZpZyA6IGdldEluZGl2aWR1YWxPcHRpb25zKHJlZmVyZW5jZSwgY29uZmlnKSk7XG5cbiAgICB2YXIgdGl0bGUgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuXG4gICAgLy8gRG9uJ3QgY3JlYXRlIGFuIGluc3RhbmNlIHdoZW46XG4gICAgLy8gKiB0aGUgYHRpdGxlYCBhdHRyaWJ1dGUgaXMgZmFsc3kgKG51bGwgb3IgZW1wdHkgc3RyaW5nKSwgYW5kXG4gICAgLy8gKiBpdCdzIG5vdCBhIGRlbGVnYXRlIGZvciB0b29sdGlwcywgYW5kXG4gICAgLy8gKiB0aGVyZSBpcyBubyBodG1sIHRlbXBsYXRlIHNwZWNpZmllZCwgYW5kXG4gICAgLy8gKiBgZHluYW1pY1RpdGxlYCBvcHRpb24gaXMgZmFsc2VcbiAgICBpZiAoIXRpdGxlICYmICFvcHRpb25zLnRhcmdldCAmJiAhb3B0aW9ucy5odG1sICYmICFvcHRpb25zLmR5bmFtaWNUaXRsZSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICAvLyBEZWxlZ2F0ZXMgc2hvdWxkIGJlIGhpZ2hsaWdodGVkIGFzIGRpZmZlcmVudFxuICAgIHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUob3B0aW9ucy50YXJnZXQgPyAnZGF0YS10aXBweS1kZWxlZ2F0ZScgOiAnZGF0YS10aXBweScsICcnKTtcblxuICAgIHJlbW92ZVRpdGxlKHJlZmVyZW5jZSk7XG5cbiAgICB2YXIgcG9wcGVyID0gY3JlYXRlUG9wcGVyRWxlbWVudChpZCwgdGl0bGUsIG9wdGlvbnMpO1xuXG4gICAgdmFyIHRpcHB5ID0gbmV3IFRpcHB5KHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgcG9wcGVyOiBwb3BwZXIsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgcG9wcGVySW5zdGFuY2U6IG51bGxcbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLmNyZWF0ZVBvcHBlckluc3RhbmNlT25Jbml0KSB7XG4gICAgICB0aXBweS5wb3BwZXJJbnN0YW5jZSA9IF9jcmVhdGVQb3BwZXJJbnN0YW5jZS5jYWxsKHRpcHB5KTtcbiAgICAgIHRpcHB5LnBvcHBlckluc3RhbmNlLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBfZ2V0RXZlbnRMaXN0ZW5lcnMuY2FsbCh0aXBweSk7XG4gICAgdGlwcHkubGlzdGVuZXJzID0gb3B0aW9ucy50cmlnZ2VyLnRyaW0oKS5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBldmVudFR5cGUpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KGNyZWF0ZVRyaWdnZXIoZXZlbnRUeXBlLCByZWZlcmVuY2UsIGxpc3RlbmVycywgb3B0aW9ucykpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIFVwZGF0ZSB0b29sdGlwIGNvbnRlbnQgd2hlbmV2ZXIgdGhlIHRpdGxlIGF0dHJpYnV0ZSBvbiB0aGUgcmVmZXJlbmNlIGNoYW5nZXNcbiAgICBpZiAob3B0aW9ucy5keW5hbWljVGl0bGUpIHtcbiAgICAgIF9hZGRNdXRhdGlvbk9ic2VydmVyLmNhbGwodGlwcHksIHtcbiAgICAgICAgdGFyZ2V0OiByZWZlcmVuY2UsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICB2YXIgX2dldElubmVyRWxlbWVudHMgPSBnZXRJbm5lckVsZW1lbnRzKHBvcHBlciksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBfZ2V0SW5uZXJFbGVtZW50cy5jb250ZW50O1xuXG4gICAgICAgICAgdmFyIHRpdGxlID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgIGNvbnRlbnRbb3B0aW9ucy5hbGxvd1RpdGxlSFRNTCA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50J10gPSB0aXBweS50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgcmVtb3ZlVGl0bGUocmVmZXJlbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2hvcnRjdXRzXG4gICAgcmVmZXJlbmNlLl90aXBweSA9IHRpcHB5O1xuICAgIHBvcHBlci5fdGlwcHkgPSB0aXBweTtcbiAgICBwb3BwZXIuX3JlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgIGFjYy5wdXNoKHRpcHB5KTtcblxuICAgIGlkQ291bnRlcisrO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xufVxuXG4vKipcbiAqIEhpZGVzIGFsbCBwb3BwZXJzXG4gKiBAcGFyYW0ge1RpcHB5fSBleGNsdWRlVGlwcHkgLSB0aXBweSB0byBleGNsdWRlIGlmIG5lZWRlZFxuICovXG5mdW5jdGlvbiBoaWRlQWxsUG9wcGVycyhleGNsdWRlVGlwcHkpIHtcbiAgdmFyIHBvcHBlcnMgPSB0b0FycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLlBPUFBFUikpO1xuXG4gIHBvcHBlcnMuZm9yRWFjaChmdW5jdGlvbiAocG9wcGVyKSB7XG4gICAgdmFyIHRpcHB5ID0gcG9wcGVyLl90aXBweTtcbiAgICBpZiAoIXRpcHB5KSByZXR1cm47XG5cbiAgICB2YXIgb3B0aW9ucyA9IHRpcHB5Lm9wdGlvbnM7XG5cblxuICAgIGlmICgob3B0aW9ucy5oaWRlT25DbGljayA9PT0gdHJ1ZSB8fCBvcHRpb25zLnRyaWdnZXIuaW5kZXhPZignZm9jdXMnKSA+IC0xKSAmJiAoIWV4Y2x1ZGVUaXBweSB8fCBwb3BwZXIgIT09IGV4Y2x1ZGVUaXBweS5wb3BwZXIpKSB7XG4gICAgICB0aXBweS5oaWRlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBuZWVkZWQgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbmZ1bmN0aW9uIGJpbmRFdmVudExpc3RlbmVycyh1c2VDYXB0dXJlKSB7XG4gIHZhciBvbkRvY3VtZW50VG91Y2ggPSBmdW5jdGlvbiBvbkRvY3VtZW50VG91Y2goKSB7XG4gICAgaWYgKGJyb3dzZXIudXNpbmdUb3VjaCkgcmV0dXJuO1xuXG4gICAgYnJvd3Nlci51c2luZ1RvdWNoID0gdHJ1ZTtcblxuICAgIGlmIChicm93c2VyLmlPUykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd0aXBweS10b3VjaCcpO1xuICAgIH1cblxuICAgIGlmIChicm93c2VyLmR5bmFtaWNJbnB1dERldGVjdGlvbiAmJiB3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRG9jdW1lbnRNb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIGJyb3dzZXIub25Vc2VySW5wdXRDaGFuZ2UoJ3RvdWNoJyk7XG4gIH07XG5cbiAgdmFyIG9uRG9jdW1lbnRNb3VzZU1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRpbWUgPSB2b2lkIDA7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgICAvLyBDaHJvbWUgNjArIGlzIDEgbW91c2Vtb3ZlIHBlciBhbmltYXRpb24gZnJhbWUsIHVzZSAyMG1zIHRpbWUgZGlmZmVyZW5jZVxuICAgICAgaWYgKG5vdyAtIHRpbWUgPCAyMCkge1xuICAgICAgICBicm93c2VyLnVzaW5nVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Eb2N1bWVudE1vdXNlTW92ZSk7XG4gICAgICAgIGlmICghYnJvd3Nlci5pT1MpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3RpcHB5LXRvdWNoJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJvd3Nlci5vblVzZXJJbnB1dENoYW5nZSgnbW91c2UnKTtcbiAgICAgIH1cblxuICAgICAgdGltZSA9IG5vdztcbiAgICB9O1xuICB9KCk7XG5cbiAgdmFyIG9uRG9jdW1lbnRDbGljayA9IGZ1bmN0aW9uIG9uRG9jdW1lbnRDbGljayhldmVudCkge1xuICAgIC8vIFNpbXVsYXRlZCBldmVudHMgZGlzcGF0Y2hlZCBvbiB0aGUgZG9jdW1lbnRcbiAgICBpZiAoIShldmVudC50YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGhpZGVBbGxQb3BwZXJzKCk7XG4gICAgfVxuXG4gICAgdmFyIHJlZmVyZW5jZSA9IGNsb3Nlc3QoZXZlbnQudGFyZ2V0LCBzZWxlY3RvcnMuUkVGRVJFTkNFKTtcbiAgICB2YXIgcG9wcGVyID0gY2xvc2VzdChldmVudC50YXJnZXQsIHNlbGVjdG9ycy5QT1BQRVIpO1xuXG4gICAgaWYgKHBvcHBlciAmJiBwb3BwZXIuX3RpcHB5ICYmIHBvcHBlci5fdGlwcHkub3B0aW9ucy5pbnRlcmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2UgJiYgcmVmZXJlbmNlLl90aXBweSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSByZWZlcmVuY2UuX3RpcHB5Lm9wdGlvbnM7XG5cbiAgICAgIHZhciBpc0NsaWNrVHJpZ2dlciA9IG9wdGlvbnMudHJpZ2dlci5pbmRleE9mKCdjbGljaycpID4gLTE7XG4gICAgICB2YXIgaXNNdWx0aXBsZSA9IG9wdGlvbnMubXVsdGlwbGU7XG5cbiAgICAgIC8vIEhpZGUgYWxsIHBvcHBlcnMgZXhjZXB0IHRoZSBvbmUgYmVsb25naW5nIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcbiAgICAgIGlmICghaXNNdWx0aXBsZSAmJiBicm93c2VyLnVzaW5nVG91Y2ggfHwgIWlzTXVsdGlwbGUgJiYgaXNDbGlja1RyaWdnZXIpIHtcbiAgICAgICAgcmV0dXJuIGhpZGVBbGxQb3BwZXJzKHJlZmVyZW5jZS5fdGlwcHkpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5oaWRlT25DbGljayAhPT0gdHJ1ZSB8fCBpc0NsaWNrVHJpZ2dlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUFsbFBvcHBlcnMoKTtcbiAgfTtcblxuICB2YXIgb25XaW5kb3dCbHVyID0gZnVuY3Rpb24gb25XaW5kb3dCbHVyKCkge1xuICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgICAgZWwgPSBfZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIGlmIChlbCAmJiBlbC5ibHVyICYmIG1hdGNoZXMkMS5jYWxsKGVsLCBzZWxlY3RvcnMuUkVGRVJFTkNFKSkge1xuICAgICAgZWwuYmx1cigpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb25XaW5kb3dSZXNpemUgPSBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICB0b0FycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLlBPUFBFUikpLmZvckVhY2goZnVuY3Rpb24gKHBvcHBlcikge1xuICAgICAgdmFyIHRpcHB5SW5zdGFuY2UgPSBwb3BwZXIuX3RpcHB5O1xuICAgICAgaWYgKHRpcHB5SW5zdGFuY2UgJiYgIXRpcHB5SW5zdGFuY2Uub3B0aW9ucy5saXZlUGxhY2VtZW50KSB7XG4gICAgICAgIHRpcHB5SW5zdGFuY2UucG9wcGVySW5zdGFuY2Uuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRG9jdW1lbnRDbGljaywgdXNlQ2FwdHVyZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkRvY3VtZW50VG91Y2gpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uV2luZG93Qmx1cik7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSk7XG5cbiAgaWYgKCFicm93c2VyLnN1cHBvcnRzVG91Y2ggJiYgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cykpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uRG9jdW1lbnRUb3VjaCk7XG4gIH1cbn1cblxudmFyIGV2ZW50TGlzdGVuZXJzQm91bmQgPSBmYWxzZTtcbnZhciB1c2VDYXB0dXJlID0gZmFsc2U7XG5cbi8qKlxuICogRXhwb3J0ZWQgbW9kdWxlXG4gKiBAcGFyYW0ge1N0cmluZ3xFbGVtZW50fEVsZW1lbnRbXXxOb2RlTGlzdHxPYmplY3R9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBvbmUgLSBjcmVhdGUgb25lIHRvb2x0aXBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gdGlwcHkoc2VsZWN0b3IsIG9wdGlvbnMsIG9uZSkge1xuICBpZiAoYnJvd3Nlci5zdXBwb3J0ZWQgJiYgIWV2ZW50TGlzdGVuZXJzQm91bmQpIHtcbiAgICBiaW5kRXZlbnRMaXN0ZW5lcnModXNlQ2FwdHVyZSk7XG4gICAgZXZlbnRMaXN0ZW5lcnNCb3VuZCA9IHRydWU7XG4gIH1cblxuICBpZiAoaXNPYmplY3RMaXRlcmFsKHNlbGVjdG9yKSkge1xuICAgIHBvbHlmaWxsVmlydHVhbFJlZmVyZW5jZVByb3BzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gIHZhciByZWZlcmVuY2VzID0gZ2V0QXJyYXlPZkVsZW1lbnRzKHNlbGVjdG9yKTtcbiAgdmFyIGZpcnN0UmVmZXJlbmNlID0gcmVmZXJlbmNlc1swXTtcblxuICByZXR1cm4ge1xuICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIHRvb2x0aXBzOiBicm93c2VyLnN1cHBvcnRlZCA/IGNyZWF0ZVRvb2x0aXBzKG9uZSAmJiBmaXJzdFJlZmVyZW5jZSA/IFtmaXJzdFJlZmVyZW5jZV0gOiByZWZlcmVuY2VzLCBvcHRpb25zKSA6IFtdLFxuICAgIGRlc3Ryb3lBbGw6IGZ1bmN0aW9uIGRlc3Ryb3lBbGwoKSB7XG4gICAgICB0aGlzLnRvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24gKHRvb2x0aXApIHtcbiAgICAgICAgcmV0dXJuIHRvb2x0aXAuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRvb2x0aXBzID0gW107XG4gICAgfVxuICB9O1xufVxuXG50aXBweS52ZXJzaW9uID0gdmVyc2lvbjtcbnRpcHB5LmJyb3dzZXIgPSBicm93c2VyO1xudGlwcHkuZGVmYXVsdHMgPSBkZWZhdWx0cztcbnRpcHB5Lm9uZSA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgb3B0aW9ucykge1xuICByZXR1cm4gdGlwcHkoc2VsZWN0b3IsIG9wdGlvbnMsIHRydWUpLnRvb2x0aXBzWzBdO1xufTtcbnRpcHB5LmRpc2FibGVBbmltYXRpb25zID0gZnVuY3Rpb24gKCkge1xuICBkZWZhdWx0cy51cGRhdGVEdXJhdGlvbiA9IGRlZmF1bHRzLmR1cmF0aW9uID0gMDtcbiAgZGVmYXVsdHMuYW5pbWF0ZUZpbGwgPSBmYWxzZTtcbn07XG50aXBweS51c2VDYXB0dXJlID0gZnVuY3Rpb24gKCkge1xuICB1c2VDYXB0dXJlID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogSW5qZWN0cyBDU1Mgc3R5bGVzIHRvIGRvY3VtZW50IGhlYWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjc3NcbiAqL1xuZnVuY3Rpb24gaW5qZWN0Q1NTKCkge1xuICB2YXIgY3NzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcblxuICBpZiAoaXNCcm93c2VyICYmIGJyb3dzZXIuc3VwcG9ydGVkKSB7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuXG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9XG59XG5cbmluamVjdENTUyhzdHlsZXMpO1xuXG5yZXR1cm4gdGlwcHk7XG5cbn0pKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=