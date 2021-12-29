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
  headerScroll();
  animateTechnology();
});
document.addEventListener('DOMContentLoaded', function () {
  burgerMenu();
  headerScroll();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvc2Nzcy9saWIuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz85OGFmIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vL3Njc3NcbmltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9saWIuc2Nzcyc7XG4vL2pzIGxpYnNcbmltcG9ydCBzd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcydcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG5cbiAgICBoZWFkZXJTY3JvbGwoKVxuXG4gICAgYW5pbWF0ZVRlY2hub2xvZ3koKVxuXG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgYnVyZ2VyTWVudSgpXG5cbiAgICBoZWFkZXJTY3JvbGwoKVxuXG4gICAgYWNjb3JkZW9uSW5pdCgpXG5cbiAgICBhZGFwdGl2ZVNlcnZpY2UoKVxuXG4gICAgYW5pbWF0ZVRlY2hub2xvZ3koKVxuXG4gICAgaG92ZXJTZXJ2aWNlSXRlbSgpXG5cbn0pO1xuXG5mdW5jdGlvbiBob3ZlclNlcnZpY2VJdGVtKCkge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZpY2UtaXRlbScpXG4gICAgXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkxKSB7XG4gICAgICAgIHNlcnZpY2VzLmZvckVhY2goKHNlcnZpY2UpPT4ge1xuICAgICAgICAgICAgc2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKChzZXJ2aWNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNlcnZpY2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhbmltYXRlVGVjaG5vbG9neSgpIHtcbiAgICBjb25zdCB0ZWNobm9sb2d5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlY2hub2xvZ3knKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1wcm9ncmVzcy1iYXIgc3BhbicpO1xuXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IHRlY2hub2xvZ3kub2Zmc2V0VG9wICsgd2luZG93LmlubmVySGVpZ2h0ICogMC42ICkge1xuICAgICAgICBwcm9ncmVzc0JhcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gcHJvZ3Jlc3NCYXIuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZHRoJylcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gd2lkdGggKyAnJSdcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gYWRhcHRpdmVTZXJ2aWNlKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmljZS1pdGVtX190aXRsZSBzcGFuJyk7XG5cbiAgICAgICAgaWYgKHRpdGxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRpdGxlcy5mb3JFYWNoKCh0aXRsZSk9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGl0bGUuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsb3Nlc3QoJy5zZXJ2aWNlLWl0ZW0nKS5xdWVyeVNlbGVjdG9yKCcuc2VydmljZS1pdGVtX19saXN0Jykuc3R5bGUubWFyZ2luVG9wID0gaGVpZ2h0ICsgNDAgKyAncHgnO1xuICAgICAgICAgICAgfSkgXG4gICAgICAgIH0gIFxuICAgIH0sIDUwMCk7XG59XG5cblxuZnVuY3Rpb24gYWNjb3JkZW9uSW5pdCgpIHtcbiAgICBjb25zdCBhY29yZGVvbkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjb3JkZW9uLWxpbmsnKVxuXG4gICAgYWNvcmRlb25MaW5rcy5mb3JFYWNoKChhY29yZGVvbkxpbmspPT4ge1xuICAgICAgICBhY29yZGVvbkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVkaWEgPSBOdW1iZXIoYWNvcmRlb25MaW5rLmNsb3Nlc3QoJy5hY29yZGVvbi13cmFwcGVyJykuZ2V0QXR0cmlidXRlKCdkYXRhLWFjb3JkZW9uLW1vYmlsZScpKTtcbiAgICAgICAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IG1lZGlhKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY29yZGVvbihhY29yZGVvbkxpbmspXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY2NvcmRlb24oYWNvcmRlb25MaW5rKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFjY29yZGVvbihsaW5rKSB7XG4gICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBsaW5rLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSAwICsgJ3B4JztcbiAgICAgICAgbGluay5jbG9zZXN0KCcuYWNvcmRlb24td3JhcHBlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgbGluay5jbG9zZXN0KCcuYWNvcmRlb24td3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBoZWFkZXJTY3JvbGwoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAgIGNvbnN0IGhlYWRlckxvZ29JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvIGltZycpO1xuICAgIGNvbnN0IGhlYWRlckxvZ29GaXhlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28gaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWZpeGVkLWhlYWRlci1sb2dvJyk7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28gaW1nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWhlYWRlci1sb2dvJyk7XG5cbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMCkge1xuICAgICAgICBoZWFkZXJMb2dvSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaGVhZGVyTG9nb0ZpeGVkKVxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWhlZGFlcicpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyTG9nb0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhlYWRlckxvZ28pXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtaGVkYWVyJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ1cmdlck1lbnUoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYnVyZ2VyJylcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpXG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgICAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpXG4gICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBsaW5rQWNvcmRlb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19pdGVtIHN2ZycpXG4gICAgXG4gICAgbGlua0Fjb3JkZW9uLmZvckVhY2goKGxpbmspPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsaW5rLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSAwICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsaW5rLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSBsaW5rLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMCxcblx0XCJ2ZW5kb3IvYm9vdHN0cmFwL2Jvb3RzdHJhcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3Ivc3dpcGVyL3N3aXBlclwiLFwidmVuZG9yL2RvbTcvZG9tN1wiLFwidmVuZG9yL3Nzci13aW5kb3cvc3NyLXdpbmRvd1wiLFwidmVuZG9yL2Jvb3RzdHJhcC9ib290c3RyYXBcIixcInZlbmRvci90aXBweS5qcy90aXBweWpzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsic3dpcGVyIiwidGlwcHkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGVhZGVyU2Nyb2xsIiwiYW5pbWF0ZVRlY2hub2xvZ3kiLCJkb2N1bWVudCIsImJ1cmdlck1lbnUiLCJhY2NvcmRlb25Jbml0IiwiYWRhcHRpdmVTZXJ2aWNlIiwiaG92ZXJTZXJ2aWNlSXRlbSIsInNlcnZpY2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVyV2lkdGgiLCJmb3JFYWNoIiwic2VydmljZSIsImV2ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidGVjaG5vbG9neSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9ncmVzc0JhcnMiLCJwYWdlWU9mZnNldCIsIm9mZnNldFRvcCIsImlubmVySGVpZ2h0IiwicHJvZ3Jlc3NCYXIiLCJ3aWR0aCIsImdldEF0dHJpYnV0ZSIsInN0eWxlIiwic2V0VGltZW91dCIsInRpdGxlcyIsImxlbmd0aCIsInRpdGxlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2xvc2VzdCIsIm1hcmdpblRvcCIsImFjb3JkZW9uTGlua3MiLCJhY29yZGVvbkxpbmsiLCJtZWRpYSIsIk51bWJlciIsImFjY29yZGVvbiIsImxpbmsiLCJjb250YWlucyIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImhlYWRlciIsImhlYWRlckxvZ29JbWciLCJoZWFkZXJMb2dvRml4ZWQiLCJoZWFkZXJMb2dvIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImJ1cmdlciIsIm1lbnUiLCJsaW5rQWNvcmRlb24iLCJjb25zb2xlIiwiZGlyIl0sInNvdXJjZVJvb3QiOiIifQ==