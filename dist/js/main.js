/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 612:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(755);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
//scss


 //js libs
// import $ from 'jquery';
// window.$ = window.jQuery = $;
// require("@fancyapps/fancybox");

window.$ = jQuery;

var $ = __webpack_require__(755);

__webpack_require__(707)($);

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
jQuery(document).ready(function ($) {
  initMap();
});

function initMap() {
  var links = document.querySelectorAll('.map__wrapper svg a');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      $.fancybox.open('<div id="map-init"></div>', {
        width: "100%",
        height: "100%",
        autoSize: false,
        scrolling: false,
        padding: 0
      });
      $(document).on('afterShow.fb', function (e, instance, slide) {
        ymaps.ready(init);

        function init() {
          var myMap = new ymaps.Map("map-init", {
            center: [55.76, 37.64],
            zoom: 7,
            behaviors: ["scrollZoom", "drag"]
          });
        }
      });
      $(document).on('afterclose.fb', function (e, instance, slide) {
        myMap.destroy();
      });
    });
  });
}

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

  if (technology) {
    if (window.pageYOffset > technology.offsetTop + window.innerHeight * 0.6) {
      progressBars.forEach(function (progressBar) {
        var width = progressBar.getAttribute('data-width');
        progressBar.style.width = width + '%';
      });
    }
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

  if (burger) {
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
  }

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 			179: 0,
/******/ 			216: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216,741,157], () => (__webpack_require__(612)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vL3Njc3NcbmltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9saWIuc2Nzcyc7XG5pbXBvcnQganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG4vL2pzIGxpYnNcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xuLy8gcmVxdWlyZShcIkBmYW5jeWFwcHMvZmFuY3lib3hcIik7XG5cbndpbmRvdy4kID0galF1ZXJ5O1xudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnJlcXVpcmUoJ2ZhbmN5Ym94JykoJCk7IFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcblxuICAgIC8vaGVhZGVyU2Nyb2xsKClcblxuICAgIGFuaW1hdGVUZWNobm9sb2d5KClcblxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuICAgIFxuICAgIGJ1cmdlck1lbnUoKVxuXG4gICAgLy9oZWFkZXJTY3JvbGwoKVxuXG4gICAgYWNjb3JkZW9uSW5pdCgpXG5cbiAgICBhZGFwdGl2ZVNlcnZpY2UoKVxuXG4gICAgYW5pbWF0ZVRlY2hub2xvZ3koKVxuXG4gICAgaG92ZXJTZXJ2aWNlSXRlbSgpXG5cbn0pO1xuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICAgaW5pdE1hcCgpXG59KVxuXG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXBfX3dyYXBwZXIgc3ZnIGEnKVxuICAgIFxuICAgIGxpbmtzLmZvckVhY2goKGxpbmspPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oJzxkaXYgaWQ9XCJtYXAtaW5pdFwiPjwvZGl2PicsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBhdXRvU2l6ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdhZnRlclNob3cuZmInLCBmdW5jdGlvbiggZSwgaW5zdGFuY2UsIHNsaWRlICkge1xuICAgICAgICAgICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcC1pbml0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc2LCAzNy42NF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB6b29tOiA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3JzOiBbXCJzY3JvbGxab29tXCIsXCJkcmFnXCJdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyAgICAgICBcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdhZnRlcmNsb3NlLmZiJywgZnVuY3Rpb24oIGUsIGluc3RhbmNlLCBzbGlkZSApIHtcbiAgICAgICAgICAgICAgICBteU1hcC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTsgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBob3ZlclNlcnZpY2VJdGVtKCkge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZpY2UtaXRlbScpXG4gICAgXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkxKSB7XG4gICAgICAgIHNlcnZpY2VzLmZvckVhY2goKHNlcnZpY2UpPT4ge1xuICAgICAgICAgICAgc2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKChzZXJ2aWNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNlcnZpY2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhbmltYXRlVGVjaG5vbG9neSgpIHtcbiAgICBjb25zdCB0ZWNobm9sb2d5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlY2hub2xvZ3knKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1wcm9ncmVzcy1iYXIgc3BhbicpO1xuICAgIGlmKHRlY2hub2xvZ3kpe1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gdGVjaG5vbG9neS5vZmZzZXRUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjYgKSB7XG4gICAgICAgICAgICBwcm9ncmVzc0JhcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IHByb2dyZXNzQmFyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSB3aWR0aCArICclJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBhZGFwdGl2ZVNlcnZpY2UoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWl0ZW1fX3RpdGxlIHNwYW4nKTtcblxuICAgICAgICBpZiAodGl0bGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGl0bGVzLmZvckVhY2goKHRpdGxlKT0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0aXRsZS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xvc2VzdCgnLnNlcnZpY2UtaXRlbScpLnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlLWl0ZW1fX2xpc3QnKS5zdHlsZS5tYXJnaW5Ub3AgPSBoZWlnaHQgKyA0MCArICdweCc7XG4gICAgICAgICAgICB9KSBcbiAgICAgICAgfSAgXG4gICAgfSwgNTAwKTtcbn1cblxuXG5mdW5jdGlvbiBhY2NvcmRlb25Jbml0KCkge1xuICAgIGNvbnN0IGFjb3JkZW9uTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNvcmRlb24tbGluaycpXG5cbiAgICBhY29yZGVvbkxpbmtzLmZvckVhY2goKGFjb3JkZW9uTGluayk9PiB7XG4gICAgICAgIGFjb3JkZW9uTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBjb25zdCBtZWRpYSA9IE51bWJlcihhY29yZGVvbkxpbmsuY2xvc2VzdCgnLmFjb3JkZW9uLXdyYXBwZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWNvcmRlb24tbW9iaWxlJykpO1xuICAgICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgbWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3JkZW9uKGFjb3JkZW9uTGluaylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjY29yZGVvbihhY29yZGVvbkxpbmspXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWNjb3JkZW9uKGxpbmspIHtcbiAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IDAgKyAncHgnO1xuICAgICAgICBsaW5rLmNsb3Nlc3QoJy5hY29yZGVvbi13cmFwcGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBsaW5rLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSBsaW5rLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICBsaW5rLmNsb3Nlc3QoJy5hY29yZGVvbi13cmFwcGVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhlYWRlclNjcm9sbCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyTG9nb0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28gaW1nJyk7XG4gICAgY29uc3QgaGVhZGVyTG9nb0ZpeGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nbyBpbWcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZml4ZWQtaGVhZGVyLWxvZ28nKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nbyBpbWcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGVhZGVyLWxvZ28nKTtcblxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG4gICAgICAgIGhlYWRlckxvZ29JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBoZWFkZXJMb2dvRml4ZWQpXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtaGVkYWVyJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXJMb2dvSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaGVhZGVyTG9nbylcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1oZWRhZXInKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYnVyZ2VyTWVudSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1idXJnZXInKVxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51JylcbiAgICBpZihidXJnZXIpe1xuICAgICAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgICAgICAgICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgICAgICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgY29uc3QgbGlua0Fjb3JkZW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9faXRlbSBzdmcnKVxuICAgIFxuICAgIGxpbmtBY29yZGVvbi5mb3JFYWNoKChsaW5rKT0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihsaW5rLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gMCArICdweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDE3OTogMCxcblx0MjE2OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbMjE2LDc0MSwxNTddLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg2MTIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsianF1ZXJ5Iiwid2luZG93IiwiJCIsImpRdWVyeSIsInJlcXVpcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiYW5pbWF0ZVRlY2hub2xvZ3kiLCJkb2N1bWVudCIsImJ1cmdlck1lbnUiLCJhY2NvcmRlb25Jbml0IiwiYWRhcHRpdmVTZXJ2aWNlIiwiaG92ZXJTZXJ2aWNlSXRlbSIsInJlYWR5IiwiaW5pdE1hcCIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZhbmN5Ym94Iiwib3BlbiIsIndpZHRoIiwiaGVpZ2h0IiwiYXV0b1NpemUiLCJzY3JvbGxpbmciLCJwYWRkaW5nIiwib24iLCJlIiwiaW5zdGFuY2UiLCJzbGlkZSIsInltYXBzIiwiaW5pdCIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImJlaGF2aW9ycyIsImRlc3Ryb3kiLCJzZXJ2aWNlcyIsImlubmVyV2lkdGgiLCJzZXJ2aWNlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidGVjaG5vbG9neSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9ncmVzc0JhcnMiLCJwYWdlWU9mZnNldCIsIm9mZnNldFRvcCIsImlubmVySGVpZ2h0IiwicHJvZ3Jlc3NCYXIiLCJnZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInNldFRpbWVvdXQiLCJ0aXRsZXMiLCJsZW5ndGgiLCJ0aXRsZSIsImNsaWVudEhlaWdodCIsImNsb3Nlc3QiLCJtYXJnaW5Ub3AiLCJhY29yZGVvbkxpbmtzIiwiYWNvcmRlb25MaW5rIiwibWVkaWEiLCJOdW1iZXIiLCJhY2NvcmRlb24iLCJjb250YWlucyIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImhlYWRlclNjcm9sbCIsImhlYWRlciIsImhlYWRlckxvZ29JbWciLCJoZWFkZXJMb2dvRml4ZWQiLCJoZWFkZXJMb2dvIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImJ1cmdlciIsIm1lbnUiLCJsaW5rQWNvcmRlb24iLCJjb25zb2xlIiwiZGlyIl0sInNvdXJjZVJvb3QiOiIifQ==