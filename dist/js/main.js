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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			"vendor-node_modules_bootstrap_dist_css_bootstrap-grid_css-node_modules_swiper_swiper-bundle_c-9c0e88": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor-node_modules_bootstrap_dist_css_bootstrap-grid_css-node_modules_swiper_swiper-bundle_c-9c0e88"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtDQUVBOztBQUVBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQVU7QUFFeEM7QUFFQUMsRUFBQUEsaUJBQWlCO0FBRXBCLENBTkQ7QUFRQUMsUUFBUSxDQUFDRixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVTtBQUVwREcsRUFBQUEsVUFBVSxHQUYwQyxDQUlwRDs7QUFFQUMsRUFBQUEsYUFBYTtBQUViQyxFQUFBQSxlQUFlO0FBRWZKLEVBQUFBLGlCQUFpQjtBQUVqQkssRUFBQUEsZ0JBQWdCO0FBRW5CLENBZEQ7O0FBZ0JBLFNBQVNBLGdCQUFULEdBQTRCO0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0wsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixlQUExQixDQUFqQjs7QUFFQSxNQUFJVCxNQUFNLENBQUNVLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7QUFDekJGLElBQUFBLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQixVQUFDQyxPQUFELEVBQVk7QUFDekJBLE1BQUFBLE9BQU8sQ0FBQ1gsZ0JBQVIsQ0FBeUIsWUFBekIsRUFBdUMsVUFBQ1ksS0FBRCxFQUFVO0FBQzdDTCxRQUFBQSxRQUFRLENBQUNHLE9BQVQsQ0FBaUIsVUFBQ0MsT0FBRCxFQUFZO0FBQ3pCQSxVQUFBQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0gsU0FGRDtBQUdBSCxRQUFBQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JFLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0gsT0FMRDtBQU1ILEtBUEQ7QUFRSDtBQUNKOztBQUVELFNBQVNkLGlCQUFULEdBQTZCO0FBQ3pCLE1BQU1lLFVBQVUsR0FBR2QsUUFBUSxDQUFDZSxhQUFULENBQXVCLGFBQXZCLENBQW5CO0FBQ0EsTUFBTUMsWUFBWSxHQUFHaEIsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQiwrQkFBMUIsQ0FBckI7O0FBRUEsTUFBSVQsTUFBTSxDQUFDb0IsV0FBUCxHQUFxQkgsVUFBVSxDQUFDSSxTQUFYLEdBQXVCckIsTUFBTSxDQUFDc0IsV0FBUCxHQUFxQixHQUFyRSxFQUEyRTtBQUN2RUgsSUFBQUEsWUFBWSxDQUFDUixPQUFiLENBQXFCLFVBQVVZLFdBQVYsRUFBdUI7QUFDeEMsVUFBTUMsS0FBSyxHQUFHRCxXQUFXLENBQUNFLFlBQVosQ0FBeUIsWUFBekIsQ0FBZDtBQUNBRixNQUFBQSxXQUFXLENBQUNHLEtBQVosQ0FBa0JGLEtBQWxCLEdBQTBCQSxLQUFLLEdBQUcsR0FBbEM7QUFDSCxLQUhEO0FBSUg7QUFDSjs7QUFHRCxTQUFTbEIsZUFBVCxHQUEyQjtBQUN2QnFCLEVBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2IsUUFBTUMsTUFBTSxHQUFHekIsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQiwyQkFBMUIsQ0FBZjs7QUFFQSxRQUFJbUIsTUFBTSxDQUFDQyxNQUFYLEVBQW1CO0FBQ2ZELE1BQUFBLE1BQU0sQ0FBQ2pCLE9BQVAsQ0FBZSxVQUFDbUIsS0FBRCxFQUFVO0FBQ3JCLFlBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxZQUFyQjtBQUNBRixRQUFBQSxLQUFLLENBQUNHLE9BQU4sQ0FBYyxlQUFkLEVBQStCZixhQUEvQixDQUE2QyxxQkFBN0MsRUFBb0VRLEtBQXBFLENBQTBFUSxTQUExRSxHQUFzRkgsTUFBTSxHQUFHLEVBQVQsR0FBYyxJQUFwRztBQUNILE9BSEQ7QUFJSDtBQUNKLEdBVFMsRUFTUCxHQVRPLENBQVY7QUFVSDs7QUFHRCxTQUFTMUIsYUFBVCxHQUF5QjtBQUNyQixNQUFNOEIsYUFBYSxHQUFHaEMsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBdEI7QUFFQTBCLEVBQUFBLGFBQWEsQ0FBQ3hCLE9BQWQsQ0FBc0IsVUFBQ3lCLFlBQUQsRUFBaUI7QUFDbkNBLElBQUFBLFlBQVksQ0FBQ25DLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUNZLEtBQUQsRUFBVTtBQUM3QyxVQUFNd0IsS0FBSyxHQUFHQyxNQUFNLENBQUNGLFlBQVksQ0FBQ0gsT0FBYixDQUFxQixtQkFBckIsRUFBMENSLFlBQTFDLENBQXVELHNCQUF2RCxDQUFELENBQXBCOztBQUNBLFVBQUlZLEtBQUosRUFBVztBQUNQLFlBQUlyQyxNQUFNLENBQUNVLFVBQVAsR0FBb0IyQixLQUF4QixFQUErQjtBQUMzQkUsVUFBQUEsU0FBUyxDQUFDSCxZQUFELENBQVQ7QUFDSDtBQUNKLE9BSkQsTUFJTztBQUNIRyxRQUFBQSxTQUFTLENBQUNILFlBQUQsQ0FBVDtBQUNIO0FBQ0osS0FURDtBQVVILEdBWEQ7QUFZSDs7QUFFRCxTQUFTRyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUNyQixNQUFJQSxJQUFJLENBQUMxQixTQUFMLENBQWUyQixRQUFmLENBQXdCLFFBQXhCLENBQUosRUFBdUM7QUFDbkNELElBQUFBLElBQUksQ0FBQzFCLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixRQUF0QjtBQUNBeUIsSUFBQUEsSUFBSSxDQUFDRSxrQkFBTCxDQUF3QmhCLEtBQXhCLENBQThCaUIsU0FBOUIsR0FBMEMsSUFBSSxJQUE5QztBQUNBSCxJQUFBQSxJQUFJLENBQUNQLE9BQUwsQ0FBYSxtQkFBYixFQUFrQ25CLFNBQWxDLENBQTRDQyxNQUE1QyxDQUFtRCxRQUFuRDtBQUNILEdBSkQsTUFJTztBQUNIeUIsSUFBQUEsSUFBSSxDQUFDMUIsU0FBTCxDQUFlRSxHQUFmLENBQW1CLFFBQW5CO0FBQ0F3QixJQUFBQSxJQUFJLENBQUNFLGtCQUFMLENBQXdCaEIsS0FBeEIsQ0FBOEJpQixTQUE5QixHQUEwQ0gsSUFBSSxDQUFDRSxrQkFBTCxDQUF3QkUsWUFBeEIsR0FBdUMsSUFBakY7QUFDQUosSUFBQUEsSUFBSSxDQUFDUCxPQUFMLENBQWEsbUJBQWIsRUFBa0NuQixTQUFsQyxDQUE0Q0UsR0FBNUMsQ0FBZ0QsUUFBaEQ7QUFDSDtBQUNKOztBQUVELFNBQVM2QixZQUFULEdBQXdCO0FBQ3BCLE1BQU1DLE1BQU0sR0FBRzNDLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsTUFBTTZCLGFBQWEsR0FBRzVDLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixtQkFBdkIsQ0FBdEI7QUFDQSxNQUFNOEIsZUFBZSxHQUFHN0MsUUFBUSxDQUFDZSxhQUFULENBQXVCLG1CQUF2QixFQUE0Q08sWUFBNUMsQ0FBeUQsd0JBQXpELENBQXhCO0FBQ0EsTUFBTXdCLFVBQVUsR0FBRzlDLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixtQkFBdkIsRUFBNENPLFlBQTVDLENBQXlELGtCQUF6RCxDQUFuQjs7QUFFQSxNQUFJekIsTUFBTSxDQUFDb0IsV0FBUCxHQUFxQixDQUF6QixFQUE0QjtBQUN4QjJCLElBQUFBLGFBQWEsQ0FBQ0csWUFBZCxDQUEyQixLQUEzQixFQUFrQ0YsZUFBbEM7QUFDQUYsSUFBQUEsTUFBTSxDQUFDaEMsU0FBUCxDQUFpQkUsR0FBakIsQ0FBcUIsZUFBckI7QUFDSCxHQUhELE1BR087QUFDSCtCLElBQUFBLGFBQWEsQ0FBQ0csWUFBZCxDQUEyQixLQUEzQixFQUFrQ0QsVUFBbEM7QUFDQUgsSUFBQUEsTUFBTSxDQUFDaEMsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsZUFBeEI7QUFDSDtBQUNKOztBQUVELFNBQVNYLFVBQVQsR0FBc0I7QUFDbEIsTUFBTStDLElBQUksR0FBR2hELFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTWtDLE1BQU0sR0FBR2pELFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixnQkFBdkIsQ0FBZjtBQUNBLE1BQU1tQyxJQUFJLEdBQUdsRCxRQUFRLENBQUNlLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBYjtBQUVBa0MsRUFBQUEsTUFBTSxDQUFDbkQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ1ksS0FBRCxFQUFVO0FBQ3ZDLFFBQUl1QyxNQUFNLENBQUN0QyxTQUFQLENBQWlCMkIsUUFBakIsQ0FBMEIsUUFBMUIsQ0FBSixFQUF5QztBQUNyQ1UsTUFBQUEsSUFBSSxDQUFDckMsU0FBTCxDQUFlQyxNQUFmLENBQXNCLE1BQXRCO0FBQ0FxQyxNQUFBQSxNQUFNLENBQUN0QyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixRQUF4QjtBQUNBc0MsTUFBQUEsSUFBSSxDQUFDdkMsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0gsS0FKRCxNQUlPO0FBQ0hvQyxNQUFBQSxJQUFJLENBQUNyQyxTQUFMLENBQWVFLEdBQWYsQ0FBbUIsTUFBbkI7QUFDQW9DLE1BQUFBLE1BQU0sQ0FBQ3RDLFNBQVAsQ0FBaUJFLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0FxQyxNQUFBQSxJQUFJLENBQUN2QyxTQUFMLENBQWVFLEdBQWYsQ0FBbUIsUUFBbkI7QUFDSDtBQUNKLEdBVkQ7QUFZQSxNQUFNc0MsWUFBWSxHQUFHbkQsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBckI7QUFFQTZDLEVBQUFBLFlBQVksQ0FBQzNDLE9BQWIsQ0FBcUIsVUFBQzZCLElBQUQsRUFBUztBQUMxQkEsSUFBQUEsSUFBSSxDQUFDdkMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQ1ksS0FBRCxFQUFVO0FBQ3JDMEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVloQixJQUFJLENBQUNFLGtCQUFMLENBQXdCRSxZQUFwQzs7QUFDQSxVQUFJSixJQUFJLENBQUMxQixTQUFMLENBQWUyQixRQUFmLENBQXdCLFFBQXhCLENBQUosRUFBdUM7QUFDbkNELFFBQUFBLElBQUksQ0FBQzFCLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixRQUF0QjtBQUNBeUIsUUFBQUEsSUFBSSxDQUFDRSxrQkFBTCxDQUF3QmhCLEtBQXhCLENBQThCaUIsU0FBOUIsR0FBMEMsSUFBSSxJQUE5QztBQUNILE9BSEQsTUFHTztBQUNISCxRQUFBQSxJQUFJLENBQUMxQixTQUFMLENBQWVFLEdBQWYsQ0FBbUIsUUFBbkI7QUFDQXdCLFFBQUFBLElBQUksQ0FBQ0Usa0JBQUwsQ0FBd0JoQixLQUF4QixDQUE4QmlCLFNBQTlCLEdBQTBDSCxJQUFJLENBQUNFLGtCQUFMLENBQXdCRSxZQUF4QixHQUF1QyxJQUFqRjtBQUNIO0FBQ0osS0FURDtBQVVILEdBWEQ7QUFZSDs7Ozs7Ozs7Ozs7QUNuSkQ7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvc2Nzcy9saWIuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz85OGFmIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vL3Njc3NcbmltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi4vc2Nzcy9saWIuc2Nzcyc7XG4vL2pzIGxpYnNcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG5cbiAgICAvL2hlYWRlclNjcm9sbCgpXG5cbiAgICBhbmltYXRlVGVjaG5vbG9neSgpXG5cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcbiAgICBcbiAgICBidXJnZXJNZW51KClcblxuICAgIC8vaGVhZGVyU2Nyb2xsKClcblxuICAgIGFjY29yZGVvbkluaXQoKVxuXG4gICAgYWRhcHRpdmVTZXJ2aWNlKClcblxuICAgIGFuaW1hdGVUZWNobm9sb2d5KClcblxuICAgIGhvdmVyU2VydmljZUl0ZW0oKVxuXG59KTtcblxuZnVuY3Rpb24gaG92ZXJTZXJ2aWNlSXRlbSgpIHtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWl0ZW0nKVxuICAgIFxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5MSkge1xuICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKChzZXJ2aWNlKT0+IHtcbiAgICAgICAgICAgIHNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChldmVudCk9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZXMuZm9yRWFjaCgoc2VydmljZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYW5pbWF0ZVRlY2hub2xvZ3koKSB7XG4gICAgY29uc3QgdGVjaG5vbG9neSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWNobm9sb2d5Jyk7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlY2hub2xvZ3ktcHJvZ3Jlc3MtYmFyIHNwYW4nKTtcblxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB0ZWNobm9sb2d5Lm9mZnNldFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNiApIHtcbiAgICAgICAgcHJvZ3Jlc3NCYXJzLmZvckVhY2goZnVuY3Rpb24gKHByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHByb2dyZXNzQmFyLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpXG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHdpZHRoICsgJyUnXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkYXB0aXZlU2VydmljZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZpY2UtaXRlbV9fdGl0bGUgc3BhbicpO1xuXG4gICAgICAgIGlmICh0aXRsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aXRsZXMuZm9yRWFjaCgodGl0bGUpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHRpdGxlLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbG9zZXN0KCcuc2VydmljZS1pdGVtJykucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtaXRlbV9fbGlzdCcpLnN0eWxlLm1hcmdpblRvcCA9IGhlaWdodCArIDQwICsgJ3B4JztcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9ICBcbiAgICB9LCA1MDApO1xufVxuXG5cbmZ1bmN0aW9uIGFjY29yZGVvbkluaXQoKSB7XG4gICAgY29uc3QgYWNvcmRlb25MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY29yZGVvbi1saW5rJylcblxuICAgIGFjb3JkZW9uTGlua3MuZm9yRWFjaCgoYWNvcmRlb25MaW5rKT0+IHtcbiAgICAgICAgYWNvcmRlb25MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gTnVtYmVyKGFjb3JkZW9uTGluay5jbG9zZXN0KCcuYWNvcmRlb24td3JhcHBlcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1hY29yZGVvbi1tb2JpbGUnKSk7XG4gICAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBtZWRpYSkge1xuICAgICAgICAgICAgICAgICAgICBhY2NvcmRlb24oYWNvcmRlb25MaW5rKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjb3JkZW9uKGFjb3JkZW9uTGluaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhY2NvcmRlb24obGluaykge1xuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gMCArICdweCc7XG4gICAgICAgIGxpbmsuY2xvc2VzdCgnLmFjb3JkZW9uLXdyYXBwZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIGxpbmsuY2xvc2VzdCgnLmFjb3JkZW9uLXdyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGVhZGVyU2Nyb2xsKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nbyBpbWcnKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvRml4ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvIGltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1maXhlZC1oZWFkZXItbG9nbycpO1xuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvIGltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWFkZXItbG9nbycpO1xuXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDApIHtcbiAgICAgICAgaGVhZGVyTG9nb0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhlYWRlckxvZ29GaXhlZClcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1oZWRhZXInKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlckxvZ29JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBoZWFkZXJMb2dvKVxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhlZGFlcicpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBidXJnZXJNZW51KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJ1cmdlcicpXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKVxuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICAgICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKVxuICAgICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgICAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbGlua0Fjb3JkZW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9faXRlbSBzdmcnKVxuICAgIFxuICAgIGxpbmtBY29yZGVvbi5mb3JFYWNoKChsaW5rKT0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihsaW5rLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gMCArICdweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMCxcblx0XCJ2ZW5kb3Itbm9kZV9tb2R1bGVzX2Jvb3RzdHJhcF9kaXN0X2Nzc19ib290c3RyYXAtZ3JpZF9jc3Mtbm9kZV9tb2R1bGVzX3N3aXBlcl9zd2lwZXItYnVuZGxlX2MtOWMwZTg4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvci1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfY3NzX2Jvb3RzdHJhcC1ncmlkX2Nzcy1ub2RlX21vZHVsZXNfc3dpcGVyX3N3aXBlci1idW5kbGVfYy05YzBlODhcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYW5pbWF0ZVRlY2hub2xvZ3kiLCJkb2N1bWVudCIsImJ1cmdlck1lbnUiLCJhY2NvcmRlb25Jbml0IiwiYWRhcHRpdmVTZXJ2aWNlIiwiaG92ZXJTZXJ2aWNlSXRlbSIsInNlcnZpY2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVyV2lkdGgiLCJmb3JFYWNoIiwic2VydmljZSIsImV2ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidGVjaG5vbG9neSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9ncmVzc0JhcnMiLCJwYWdlWU9mZnNldCIsIm9mZnNldFRvcCIsImlubmVySGVpZ2h0IiwicHJvZ3Jlc3NCYXIiLCJ3aWR0aCIsImdldEF0dHJpYnV0ZSIsInN0eWxlIiwic2V0VGltZW91dCIsInRpdGxlcyIsImxlbmd0aCIsInRpdGxlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY2xvc2VzdCIsIm1hcmdpblRvcCIsImFjb3JkZW9uTGlua3MiLCJhY29yZGVvbkxpbmsiLCJtZWRpYSIsIk51bWJlciIsImFjY29yZGVvbiIsImxpbmsiLCJjb250YWlucyIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImhlYWRlclNjcm9sbCIsImhlYWRlciIsImhlYWRlckxvZ29JbWciLCJoZWFkZXJMb2dvRml4ZWQiLCJoZWFkZXJMb2dvIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImJ1cmdlciIsIm1lbnUiLCJsaW5rQWNvcmRlb24iLCJjb25zb2xlIiwiZGlyIl0sInNvdXJjZVJvb3QiOiIifQ==