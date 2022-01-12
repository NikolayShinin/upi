/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 242:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(995);

swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"].use */ .ZP.use([swiper__WEBPACK_IMPORTED_MODULE_0__/* .Navigation */ .W_, swiper__WEBPACK_IMPORTED_MODULE_0__/* .Pagination */ .tl]);
var aboutSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP('.about__list', {
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
var newsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP('.news__list', {
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
var reviewSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP('.review__list', {
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
var technicSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP('.technic__list', {
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
var mapSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP('.map-slider__body', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".map-slider__arrow-next",
    prevEl: ".map-slider__arrow-prev"
  },
  pagination: {
    el: '.map__dots',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      var path = document.querySelectorAll('.map__dot')[index];
      path.classList.add(className);
      return path.outerHTML;
    }
  }
});
window.mapSliderPagination = mapSlider.pagination.$el[0].childNodes;

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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			775: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [187,452,206], () => (__webpack_require__(242)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpcGVyLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xuXG5Td2lwZXIudXNlKFtOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uXSk7XG5cbmxldCBhYm91dFNsaWRlciA9IG5ldyBTd2lwZXIoJy5hYm91dF9fbGlzdCcsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5hYm91dF9fYXJyb3ctLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5hYm91dF9fYXJyb3ctLXByZXZcIixcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDU3Njoge1xuICAgICAgICAgICAgYXV0b0hlaWdodDogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmxldCBuZXdzU2xpZGVyID0gbmV3IFN3aXBlcignLm5ld3NfX2xpc3QnLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5uZXdzX19hcnJvdy0tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLm5ld3NfX2Fycm93LS1wcmV2XCIsXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgICA5OTI6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIDc2ODoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmxldCByZXZpZXdTbGlkZXIgPSBuZXcgU3dpcGVyKCcucmV2aWV3X19saXN0Jywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogXCIucmV2aWV3X19hcnJvdy0tbmV4dFwiLFxuICAgICAgICBwcmV2RWw6IFwiLnJldmlld19fYXJyb3ctLXByZXZcIixcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDk5Mjoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgfSxcbiAgICAgICAgMTE5OToge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgfSxcbiAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICB9XG4gICAgfVxufSlcblxubGV0IHRlY2huaWNTbGlkZXIgPSBuZXcgU3dpcGVyKCcudGVjaG5pY19fbGlzdCcsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IFwiLnRlY2huaWNfX2Fycm93LS1uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIudGVjaG5pY19fYXJyb3ctLXByZXZcIixcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDk5Mjoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgfSxcbiAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICB9XG4gICAgfVxufSlcblxubGV0IG1hcFNsaWRlciA9IG5ldyBTd2lwZXIoJy5tYXAtc2xpZGVyX19ib2R5Jywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5tYXAtc2xpZGVyX19hcnJvdy1uZXh0XCIsXG4gICAgICAgIHByZXZFbDogXCIubWFwLXNsaWRlcl9fYXJyb3ctcHJldlwiLFxuICAgIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogJy5tYXBfX2RvdHMnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFwX19kb3QnKVtpbmRleF07XG4gICAgICAgICAgICBwYXRoLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgICAgICAgcmV0dXJuIHBhdGgub3V0ZXJIVE1MXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG53aW5kb3cubWFwU2xpZGVyUGFnaW5hdGlvbiA9IG1hcFNsaWRlci5wYWdpbmF0aW9uLiRlbFswXS5jaGlsZE5vZGVzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQ3NzU6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFsxODcsNDUyLDIwNl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKDI0MikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJTd2lwZXIiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsInVzZSIsImFib3V0U2xpZGVyIiwic2xpZGVzUGVyVmlldyIsImF1dG9IZWlnaHQiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJuZXdzU2xpZGVyIiwic3BhY2VCZXR3ZWVuIiwicmV2aWV3U2xpZGVyIiwidGVjaG5pY1NsaWRlciIsIm1hcFNsaWRlciIsImxvb3AiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJyZW5kZXJCdWxsZXQiLCJpbmRleCIsImNsYXNzTmFtZSIsInBhdGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJvdXRlckhUTUwiLCJ3aW5kb3ciLCJtYXBTbGlkZXJQYWdpbmF0aW9uIiwiJGVsIiwiY2hpbGROb2RlcyJdLCJzb3VyY2VSb290IjoiIn0=