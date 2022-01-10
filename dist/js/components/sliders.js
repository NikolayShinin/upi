/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/sliders.js":
/*!**************************************!*\
  !*** ./src/js/components/sliders.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
var aboutSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.about__list', {
  slidesPerView: "auto",
  autoHeight: true,
  navigation: {
    nextEl: ".about__arrow--next",
    prevEl: ".about__arrow--prev"
  },
  breakpoints: {
    576: {
      autoHeight: false
    }
  }
});
var newsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.news__list', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".news__arrow--next",
    prevEl: ".news__arrow--prev"
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    }
  }
});
var reviewSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.review__list', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".review__arrow--next",
    prevEl: ".review__arrow--prev"
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    1199: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 2
    }
  }
});
var technicSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.technic__list', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".technic__arrow--next",
    prevEl: ".technic__arrow--prev"
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    }
  }
});
var mapSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.map-slider__body', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".map-slider__arrow-next",
    prevEl: ".map-slider__arrow-prev"
  } // breakpoints: {
  //     992: {
  //         slidesPerView: 3,
  //     },
  //     768: {
  //         slidesPerView: 2,
  //     }
  // }

});

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
/******/ 			"components/sliders": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor/swiper/swiper","vendor/ssr-window/ssr-window","vendor/dom7/dom7"], () => (__webpack_require__("./src/js/components/sliders.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN3aXBlciwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcblxuU3dpcGVyLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0pO1xuXG5sZXQgYWJvdXRTbGlkZXIgPSBuZXcgU3dpcGVyKCcuYWJvdXRfX2xpc3QnLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgYXV0b0hlaWdodDogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIuYWJvdXRfX2Fycm93LS1uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIuYWJvdXRfX2Fycm93LS1wcmV2XCIsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgICA1NzY6IHtcbiAgICAgICAgICAgIGF1dG9IZWlnaHQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5sZXQgbmV3c1NsaWRlciA9IG5ldyBTd2lwZXIoJy5uZXdzX19saXN0Jywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIubmV3c19fYXJyb3ctLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5uZXdzX19hcnJvdy0tcHJldlwiLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgOTkyOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICB9LFxuICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5sZXQgcmV2aWV3U2xpZGVyID0gbmV3IFN3aXBlcignLnJldmlld19fbGlzdCcsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IFwiLnJldmlld19fYXJyb3ctLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5yZXZpZXdfX2Fycm93LS1wcmV2XCIsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgICA5OTI6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIDExOTk6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIH0sXG4gICAgICAgIDc2ODoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmxldCB0ZWNobmljU2xpZGVyID0gbmV3IFN3aXBlcignLnRlY2huaWNfX2xpc3QnLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi50ZWNobmljX19hcnJvdy0tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLnRlY2huaWNfX2Fycm93LS1wcmV2XCIsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgICA5OTI6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIDc2ODoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmxldCBtYXBTbGlkZXIgPSBuZXcgU3dpcGVyKCcubWFwLXNsaWRlcl9fYm9keScsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIubWFwLXNsaWRlcl9fYXJyb3ctbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLm1hcC1zbGlkZXJfX2Fycm93LXByZXZcIixcbiAgICB9LFxuICAgIC8vIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gICAgIDk5Mjoge1xuICAgIC8vICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgNzY4OiB7XG4gICAgLy8gICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIC8vICAgICB9XG4gICAgLy8gfVxufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjb21wb25lbnRzL3NsaWRlcnNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yL3N3aXBlci9zd2lwZXJcIixcInZlbmRvci9zc3Itd2luZG93L3Nzci13aW5kb3dcIixcInZlbmRvci9kb203L2RvbTdcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXJzLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiU3dpcGVyIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJ1c2UiLCJhYm91dFNsaWRlciIsInNsaWRlc1BlclZpZXciLCJhdXRvSGVpZ2h0IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwibmV3c1NsaWRlciIsInNwYWNlQmV0d2VlbiIsInJldmlld1NsaWRlciIsInRlY2huaWNTbGlkZXIiLCJtYXBTbGlkZXIiLCJsb29wIl0sInNvdXJjZVJvb3QiOiIifQ==