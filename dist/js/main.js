/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 714:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(755);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./node_modules/number-flip/dist/index.js
var dist = __webpack_require__(385);
;// CONCATENATED MODULE: ./src/js/lib/index.js


window.Flip = dist.Flip;
window.$ = window.jQuery = (jquery_default());

__webpack_require__(707)((jquery_default()));

window.$.fancybox = (jquery_default()).fancybox;
;// CONCATENATED MODULE: ./src/js/index.js
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
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 179;
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
/******/ 			179: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], () => (__webpack_require__(714)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9qcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ydW50aW1lSWQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7IEZsaXAgfSBmcm9tICdudW1iZXItZmxpcCdcblxud2luZG93LkZsaXAgPSBGbGlwXG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xucmVxdWlyZSgnZmFuY3lib3gnKSgkKVxud2luZG93LiQuZmFuY3lib3ggPSAkLmZhbmN5Ym94IiwiXG4vL3Njc3NcbmltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9saWIuc2Nzcyc7XG4vL2pzIGxpYnNcbmltcG9ydCAnLi9saWInO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcblxuICAgIC8vaGVhZGVyU2Nyb2xsKClcblxuICAgIGFuaW1hdGVUZWNobm9sb2d5KClcblxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuICAgIFxuICAgIGJ1cmdlck1lbnUoKVxuXG4gICAgLy9oZWFkZXJTY3JvbGwoKVxuXG4gICAgYWNjb3JkZW9uSW5pdCgpXG5cbiAgICBhZGFwdGl2ZVNlcnZpY2UoKVxuXG4gICAgYW5pbWF0ZVRlY2hub2xvZ3koKVxuXG4gICAgaG92ZXJTZXJ2aWNlSXRlbSgpXG5cbn0pO1xuXG5mdW5jdGlvbiBob3ZlclNlcnZpY2VJdGVtKCkge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZpY2UtaXRlbScpXG4gICAgXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkxKSB7XG4gICAgICAgIHNlcnZpY2VzLmZvckVhY2goKHNlcnZpY2UpPT4ge1xuICAgICAgICAgICAgc2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKChzZXJ2aWNlKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNlcnZpY2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhbmltYXRlVGVjaG5vbG9neSgpIHtcbiAgICBjb25zdCB0ZWNobm9sb2d5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlY2hub2xvZ3knKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1wcm9ncmVzcy1iYXIgc3BhbicpO1xuICAgIGlmKHRlY2hub2xvZ3kpe1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gdGVjaG5vbG9neS5vZmZzZXRUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjYgKSB7XG4gICAgICAgICAgICBwcm9ncmVzc0JhcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IHByb2dyZXNzQmFyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSB3aWR0aCArICclJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBhZGFwdGl2ZVNlcnZpY2UoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWl0ZW1fX3RpdGxlIHNwYW4nKTtcblxuICAgICAgICBpZiAodGl0bGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGl0bGVzLmZvckVhY2goKHRpdGxlKT0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0aXRsZS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xvc2VzdCgnLnNlcnZpY2UtaXRlbScpLnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlLWl0ZW1fX2xpc3QnKS5zdHlsZS5tYXJnaW5Ub3AgPSBoZWlnaHQgKyA0MCArICdweCc7XG4gICAgICAgICAgICB9KSBcbiAgICAgICAgfSAgXG4gICAgfSwgNTAwKTtcbn1cblxuXG5mdW5jdGlvbiBhY2NvcmRlb25Jbml0KCkge1xuICAgIGNvbnN0IGFjb3JkZW9uTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNvcmRlb24tbGluaycpXG5cbiAgICBhY29yZGVvbkxpbmtzLmZvckVhY2goKGFjb3JkZW9uTGluayk9PiB7XG4gICAgICAgIGFjb3JkZW9uTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBjb25zdCBtZWRpYSA9IE51bWJlcihhY29yZGVvbkxpbmsuY2xvc2VzdCgnLmFjb3JkZW9uLXdyYXBwZXInKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWNvcmRlb24tbW9iaWxlJykpO1xuICAgICAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgbWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3JkZW9uKGFjb3JkZW9uTGluaylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjY29yZGVvbihhY29yZGVvbkxpbmspXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWNjb3JkZW9uKGxpbmspIHtcbiAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IDAgKyAncHgnO1xuICAgICAgICBsaW5rLmNsb3Nlc3QoJy5hY29yZGVvbi13cmFwcGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBsaW5rLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSBsaW5rLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICBsaW5rLmNsb3Nlc3QoJy5hY29yZGVvbi13cmFwcGVyJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhlYWRlclNjcm9sbCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyTG9nb0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28gaW1nJyk7XG4gICAgY29uc3QgaGVhZGVyTG9nb0ZpeGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nbyBpbWcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZml4ZWQtaGVhZGVyLWxvZ28nKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nbyBpbWcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGVhZGVyLWxvZ28nKTtcblxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG4gICAgICAgIGhlYWRlckxvZ29JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBoZWFkZXJMb2dvRml4ZWQpXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtaGVkYWVyJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXJMb2dvSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaGVhZGVyTG9nbylcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1oZWRhZXInKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYnVyZ2VyTWVudSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1idXJnZXInKVxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51JylcbiAgICBpZihidXJnZXIpe1xuICAgICAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgICAgICAgICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgICAgICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgY29uc3QgbGlua0Fjb3JkZW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9faXRlbSBzdmcnKVxuICAgIFxuICAgIGxpbmtBY29yZGVvbi5mb3JFYWNoKChsaW5rKT0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihsaW5rLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gMCArICdweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5qID0gMTc5OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNzk6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFsyMTZdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg3MTQpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiJCIsIkZsaXAiLCJ3aW5kb3ciLCJqUXVlcnkiLCJyZXF1aXJlIiwiZmFuY3lib3giLCJhZGRFdmVudExpc3RlbmVyIiwiYW5pbWF0ZVRlY2hub2xvZ3kiLCJkb2N1bWVudCIsImJ1cmdlck1lbnUiLCJhY2NvcmRlb25Jbml0IiwiYWRhcHRpdmVTZXJ2aWNlIiwiaG92ZXJTZXJ2aWNlSXRlbSIsInNlcnZpY2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVyV2lkdGgiLCJmb3JFYWNoIiwic2VydmljZSIsImV2ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidGVjaG5vbG9neSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9ncmVzc0JhcnMiLCJwYWdlWU9mZnNldCIsIm9mZnNldFRvcCIsImlubmVySGVpZ2h0IiwicHJvZ3Jlc3NCYXIiLCJ3aWR0aCIsImdldEF0dHJpYnV0ZSIsInN0eWxlIiwic2V0VGltZW91dCIsInRpdGxlcyIsImxlbmd0aCIsInRpdGxlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2xvc2VzdCIsIm1hcmdpblRvcCIsImFjb3JkZW9uTGlua3MiLCJhY29yZGVvbkxpbmsiLCJtZWRpYSIsIk51bWJlciIsImFjY29yZGVvbiIsImxpbmsiLCJjb250YWlucyIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImhlYWRlclNjcm9sbCIsImhlYWRlciIsImhlYWRlckxvZ29JbWciLCJoZWFkZXJMb2dvRml4ZWQiLCJoZWFkZXJMb2dvIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImJ1cmdlciIsIm1lbnUiLCJsaW5rQWNvcmRlb24iLCJjb25zb2xlIiwiZGlyIl0sInNvdXJjZVJvb3QiOiIifQ==