/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_lib_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/lib.scss */ "./src/scss/lib.scss");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.all.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tippy_js__WEBPACK_IMPORTED_MODULE_3__);
//scss

 //js libs



window.addEventListener('scroll', function () {
  //headerScroll()
  animateTechnology();
});
document.addEventListener('DOMContentLoaded', function () {
  burgerMenu(); //headerScroll()

  accordeonInit();
  adaptiveService();
  animateTechnology();
  hoverServiceItem();
});

function hoverServiceItem() {
  var services = document.querySelectorAll('.service-item');

  if (window.innerWidth > 991) {
    services.forEach(function (service) {
      service.addEventListener('mouseenter', function (event) {
        services.forEach(function (service) {
          service.classList.remove('active');
        });
        service.classList.add('active');
      });
    });
  }
}

function animateTechnology() {
  var technology = document.querySelector('.technology');
  var progressBars = document.querySelectorAll('.technology-progress-bar span');

  if (window.pageYOffset > technology.offsetTop + window.innerHeight * 0.6) {
    progressBars.forEach(function (progressBar) {
      var width = progressBar.getAttribute('data-width');
      progressBar.style.width = width + '%';
    });
  }
}

function adaptiveService() {
  setTimeout(function () {
    var titles = document.querySelectorAll('.service-item__title span');

    if (titles.length) {
      titles.forEach(function (title) {
        var height = title.clientHeight;
        title.closest('.service-item').querySelector('.service-item__list').style.marginTop = height + 40 + 'px';
      });
    }
  }, 500);
}

function accordeonInit() {
  var acordeonLinks = document.querySelectorAll('.acordeon-link');
  acordeonLinks.forEach(function (acordeonLink) {
    acordeonLink.addEventListener('click', function (event) {
      var media = Number(acordeonLink.closest('.acordeon-wrapper').getAttribute('data-acordeon-mobile'));

      if (media) {
        if (window.innerWidth < media) {
          accordeon(acordeonLink);
        }
      } else {
        accordeon(acordeonLink);
      }
    });
  });
}

function accordeon(link) {
  if (link.classList.contains('active')) {
    link.classList.remove('active');
    link.nextElementSibling.style.maxHeight = 0 + 'px';
    link.closest('.acordeon-wrapper').classList.remove('active');
  } else {
    link.classList.add('active');
    link.nextElementSibling.style.maxHeight = link.nextElementSibling.scrollHeight + 'px';
    link.closest('.acordeon-wrapper').classList.add('active');
  }
}

function headerScroll() {
  var header = document.querySelector('.header');
  var headerLogoImg = document.querySelector('.header__logo img');
  var headerLogoFixed = document.querySelector('.header__logo img').getAttribute('data-fixed-header-logo');
  var headerLogo = document.querySelector('.header__logo img').getAttribute('data-header-logo');

  if (window.pageYOffset > 0) {
    headerLogoImg.setAttribute('src', headerLogoFixed);
    header.classList.add('scroll-hedaer');
  } else {
    headerLogoImg.setAttribute('src', headerLogo);
    header.classList.remove('scroll-hedaer');
  }
}

function burgerMenu() {
  var body = document.querySelector('body');
  var burger = document.querySelector('.header-burger');
  var menu = document.querySelector('.header__menu');
  burger.addEventListener('click', function (event) {
    if (burger.classList.contains('active')) {
      body.classList.remove('lock');
      burger.classList.remove('active');
      menu.classList.remove('active');
    } else {
      body.classList.add('lock');
      burger.classList.add('active');
      menu.classList.add('active');
    }
  });
  var linkAcordeon = document.querySelectorAll('.header__item svg');
  linkAcordeon.forEach(function (link) {
    link.addEventListener('click', function (event) {
      console.dir(link.nextElementSibling.scrollHeight);

      if (link.classList.contains('active')) {
        link.classList.remove('active');
        link.nextElementSibling.style.maxHeight = 0 + 'px';
      } else {
        link.classList.add('active');
        link.nextElementSibling.style.maxHeight = link.nextElementSibling.scrollHeight + 'px';
      }
    });
  });
}

/***/ }),

/***/ "./src/scss/lib.scss":
/*!***************************!*\
  !*** ./src/scss/lib.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0,
/******/ 			"vendor/bootstrap/bootstrap": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor/swiper/swiper","vendor/dom7/dom7","vendor/ssr-window/ssr-window","vendor/bootstrap/bootstrap","vendor/tippy.js/tippyjs"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvc2Nzcy9saWIuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz85OGFmIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vL3Njc3NcbmltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9saWIuc2Nzcyc7XG4vL2pzIGxpYnNcbmltcG9ydCBzd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcydcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG5cbiAgICAvL2hlYWRlclNjcm9sbCgpXG5cbiAgICBhbmltYXRlVGVjaG5vbG9neSgpXG5cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcbiAgICBcbiAgICBidXJnZXJNZW51KClcblxuICAgIC8vaGVhZGVyU2Nyb2xsKClcblxuICAgIGFjY29yZGVvbkluaXQoKVxuXG4gICAgYWRhcHRpdmVTZXJ2aWNlKClcblxuICAgIGFuaW1hdGVUZWNobm9sb2d5KClcblxuICAgIGhvdmVyU2VydmljZUl0ZW0oKVxuXG59KTtcblxuZnVuY3Rpb24gaG92ZXJTZXJ2aWNlSXRlbSgpIHtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWl0ZW0nKVxuICAgIFxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5MSkge1xuICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKChzZXJ2aWNlKT0+IHtcbiAgICAgICAgICAgIHNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChldmVudCk9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZXMuZm9yRWFjaCgoc2VydmljZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVRlY2hub2xvZ3koKSB7XG4gICAgY29uc3QgdGVjaG5vbG9neSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWNobm9sb2d5Jyk7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlY2hub2xvZ3ktcHJvZ3Jlc3MtYmFyIHNwYW4nKTtcblxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB0ZWNobm9sb2d5Lm9mZnNldFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNiApIHtcbiAgICAgICAgcHJvZ3Jlc3NCYXJzLmZvckVhY2goZnVuY3Rpb24gKHByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHByb2dyZXNzQmFyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpXG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHdpZHRoICsgJyUnXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkYXB0aXZlU2VydmljZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZpY2UtaXRlbV9fdGl0bGUgc3BhbicpO1xuXG4gICAgICAgIGlmICh0aXRsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aXRsZXMuZm9yRWFjaCgodGl0bGUpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHRpdGxlLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbG9zZXN0KCcuc2VydmljZS1pdGVtJykucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtaXRlbV9fbGlzdCcpLnN0eWxlLm1hcmdpblRvcCA9IGhlaWdodCArIDQwICsgJ3B4JztcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9ICBcbiAgICB9LCA1MDApO1xufVxuXG5cbmZ1bmN0aW9uIGFjY29yZGVvbkluaXQoKSB7XG4gICAgY29uc3QgYWNvcmRlb25MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY29yZGVvbi1saW5rJylcblxuICAgIGFjb3JkZW9uTGlua3MuZm9yRWFjaCgoYWNvcmRlb25MaW5rKT0+IHtcbiAgICAgICAgYWNvcmRlb25MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gTnVtYmVyKGFjb3JkZW9uTGluay5jbG9zZXN0KCcuYWNvcmRlb24td3JhcHBlcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1hY29yZGVvbi1tb2JpbGUnKSk7XG4gICAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBtZWRpYSkge1xuICAgICAgICAgICAgICAgICAgICBhY2NvcmRlb24oYWNvcmRlb25MaW5rKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjb3JkZW9uKGFjb3JkZW9uTGluaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhY2NvcmRlb24obGluaykge1xuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gMCArICdweCc7XG4gICAgICAgIGxpbmsuY2xvc2VzdCgnLmFjb3JkZW9uLXdyYXBwZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIGxpbmsuY2xvc2VzdCgnLmFjb3JkZW9uLXdyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGVhZGVyU2Nyb2xsKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nbyBpbWcnKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvRml4ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvIGltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1maXhlZC1oZWFkZXItbG9nbycpO1xuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvIGltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWFkZXItbG9nbycpO1xuXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDApIHtcbiAgICAgICAgaGVhZGVyTG9nb0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhlYWRlckxvZ29GaXhlZClcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1oZWRhZXInKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlckxvZ29JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBoZWFkZXJMb2dvKVxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhlZGFlcicpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBidXJnZXJNZW51KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJ1cmdlcicpXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKVxuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICAgICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKVxuICAgICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbGlua0Fjb3JkZW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9faXRlbSBzdmcnKVxuICAgIFxuICAgIGxpbmtBY29yZGVvbi5mb3JFYWNoKChsaW5rKT0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihsaW5rLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gMCArICdweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDAsXG5cdFwidmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yL3N3aXBlci9zd2lwZXJcIixcInZlbmRvci9kb203L2RvbTdcIixcInZlbmRvci9zc3Itd2luZG93L3Nzci13aW5kb3dcIixcInZlbmRvci9ib290c3RyYXAvYm9vdHN0cmFwXCIsXCJ2ZW5kb3IvdGlwcHkuanMvdGlwcHlqc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInN3aXBlciIsInRpcHB5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGVUZWNobm9sb2d5IiwiZG9jdW1lbnQiLCJidXJnZXJNZW51IiwiYWNjb3JkZW9uSW5pdCIsImFkYXB0aXZlU2VydmljZSIsImhvdmVyU2VydmljZUl0ZW0iLCJzZXJ2aWNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbm5lcldpZHRoIiwiZm9yRWFjaCIsInNlcnZpY2UiLCJldmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInRlY2hub2xvZ3kiLCJxdWVyeVNlbGVjdG9yIiwicHJvZ3Jlc3NCYXJzIiwicGFnZVlPZmZzZXQiLCJvZmZzZXRUb3AiLCJpbm5lckhlaWdodCIsInByb2dyZXNzQmFyIiwid2lkdGgiLCJnZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInNldFRpbWVvdXQiLCJ0aXRsZXMiLCJsZW5ndGgiLCJ0aXRsZSIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImNsb3Nlc3QiLCJtYXJnaW5Ub3AiLCJhY29yZGVvbkxpbmtzIiwiYWNvcmRlb25MaW5rIiwibWVkaWEiLCJOdW1iZXIiLCJhY2NvcmRlb24iLCJsaW5rIiwiY29udGFpbnMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJoZWFkZXJTY3JvbGwiLCJoZWFkZXIiLCJoZWFkZXJMb2dvSW1nIiwiaGVhZGVyTG9nb0ZpeGVkIiwiaGVhZGVyTG9nbyIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJidXJnZXIiLCJtZW51IiwibGlua0Fjb3JkZW9uIiwiY29uc29sZSIsImRpciJdLCJzb3VyY2VSb290IjoiIn0=