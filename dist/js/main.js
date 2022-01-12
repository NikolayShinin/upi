/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 612:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

//scss

 //js libs
// import $ from 'jquery';
// window.$ = window.jQuery = $;
// require("@fancyapps/fancybox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy9zY3NzXG5pbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4uL3Njc3MvbGliLnNjc3MnO1xuLy9qcyBsaWJzXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gJDtcbi8vIHJlcXVpcmUoXCJAZmFuY3lhcHBzL2ZhbmN5Ym94XCIpO1xuXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xucmVxdWlyZSgnZmFuY3lib3gnKSgkKTsgXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuXG4gICAgLy9oZWFkZXJTY3JvbGwoKVxuXG4gICAgYW5pbWF0ZVRlY2hub2xvZ3koKVxuXG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgYnVyZ2VyTWVudSgpXG5cbiAgICAvL2hlYWRlclNjcm9sbCgpXG5cbiAgICBhY2NvcmRlb25Jbml0KClcblxuICAgIGFkYXB0aXZlU2VydmljZSgpXG5cbiAgICBhbmltYXRlVGVjaG5vbG9neSgpXG5cbiAgICBob3ZlclNlcnZpY2VJdGVtKClcblxuICAgIGluaXRNYXAoKVxuXG59KTtcblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hcF9fd3JhcHBlciBzdmcgYScpXG4gICAgXG4gICAgbGlua3MuZm9yRWFjaCgobGluayk9PiB7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQuZmFuY3lib3gub3BlbignPGRpdiBpZD1cIm1hcC1pbml0XCI+PC9kaXY+Jywge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGF1dG9TaXplOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2FmdGVyU2hvdy5mYicsIGZ1bmN0aW9uKCBlLCBpbnN0YW5jZSwgc2xpZGUgKSB7XG4gICAgICAgICAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5pdCgpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwLWluaXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNzYsIDM3LjY0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IDcsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcnM6IFtcInNjcm9sbFpvb21cIixcImRyYWdcIl1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7ICAgICAgIFxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2FmdGVyY2xvc2UuZmInLCBmdW5jdGlvbiggZSwgaW5zdGFuY2UsIHNsaWRlICkge1xuICAgICAgICAgICAgICAgIG15TWFwLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pOyAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhvdmVyU2VydmljZUl0ZW0oKSB7XG4gICAgY29uc3Qgc2VydmljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmljZS1pdGVtJylcbiAgICBcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTEpIHtcbiAgICAgICAgc2VydmljZXMuZm9yRWFjaCgoc2VydmljZSk9PiB7XG4gICAgICAgICAgICBzZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZXZlbnQpPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2VzLmZvckVhY2goKHNlcnZpY2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgc2VydmljZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVUZWNobm9sb2d5KCkge1xuICAgIGNvbnN0IHRlY2hub2xvZ3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVjaG5vbG9neScpO1xuICAgIGNvbnN0IHByb2dyZXNzQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWNobm9sb2d5LXByb2dyZXNzLWJhciBzcGFuJyk7XG4gICAgaWYodGVjaG5vbG9neSl7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB0ZWNobm9sb2d5Lm9mZnNldFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNiApIHtcbiAgICAgICAgICAgIHByb2dyZXNzQmFycy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9ncmVzc0Jhcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gcHJvZ3Jlc3NCYXIuZ2V0QXR0cmlidXRlKCdkYXRhLXdpZHRoJylcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IHdpZHRoICsgJyUnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkYXB0aXZlU2VydmljZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZpY2UtaXRlbV9fdGl0bGUgc3BhbicpO1xuXG4gICAgICAgIGlmICh0aXRsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aXRsZXMuZm9yRWFjaCgodGl0bGUpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHRpdGxlLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbG9zZXN0KCcuc2VydmljZS1pdGVtJykucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtaXRlbV9fbGlzdCcpLnN0eWxlLm1hcmdpblRvcCA9IGhlaWdodCArIDQwICsgJ3B4JztcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9ICBcbiAgICB9LCA1MDApO1xufVxuXG5cbmZ1bmN0aW9uIGFjY29yZGVvbkluaXQoKSB7XG4gICAgY29uc3QgYWNvcmRlb25MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY29yZGVvbi1saW5rJylcblxuICAgIGFjb3JkZW9uTGlua3MuZm9yRWFjaCgoYWNvcmRlb25MaW5rKT0+IHtcbiAgICAgICAgYWNvcmRlb25MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gTnVtYmVyKGFjb3JkZW9uTGluay5jbG9zZXN0KCcuYWNvcmRlb24td3JhcHBlcicpLmdldEF0dHJpYnV0ZSgnZGF0YS1hY29yZGVvbi1tb2JpbGUnKSk7XG4gICAgICAgICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCBtZWRpYSkge1xuICAgICAgICAgICAgICAgICAgICBhY2NvcmRlb24oYWNvcmRlb25MaW5rKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjb3JkZW9uKGFjb3JkZW9uTGluaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhY2NvcmRlb24obGluaykge1xuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbGluay5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUubWF4SGVpZ2h0ID0gMCArICdweCc7XG4gICAgICAgIGxpbmsuY2xvc2VzdCgnLmFjb3JkZW9uLXdyYXBwZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIGxpbmsuY2xvc2VzdCgnLmFjb3JkZW9uLXdyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGVhZGVyU2Nyb2xsKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nbyBpbWcnKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvRml4ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvIGltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1maXhlZC1oZWFkZXItbG9nbycpO1xuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvIGltZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWFkZXItbG9nbycpO1xuXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDApIHtcbiAgICAgICAgaGVhZGVyTG9nb0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhlYWRlckxvZ29GaXhlZClcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1oZWRhZXInKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlckxvZ29JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBoZWFkZXJMb2dvKVxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWhlZGFlcicpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBidXJnZXJNZW51KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJ1cmdlcicpXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKVxuICAgIGlmKGJ1cmdlcil7XG4gICAgICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKVxuICAgICAgICAgICAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICAgICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjb25zdCBsaW5rQWNvcmRlb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19pdGVtIHN2ZycpXG4gICAgXG4gICAgbGlua0Fjb3JkZW9uLmZvckVhY2goKGxpbmspPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKGxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsaW5rLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSAwICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsaW5rLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSBsaW5rLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDE3OTogMCxcblx0MjE2OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbMjE2LDc0MSwxNTddLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg2MTIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYW5pbWF0ZVRlY2hub2xvZ3kiLCJkb2N1bWVudCIsImJ1cmdlck1lbnUiLCJhY2NvcmRlb25Jbml0IiwiYWRhcHRpdmVTZXJ2aWNlIiwiaG92ZXJTZXJ2aWNlSXRlbSIsImluaXRNYXAiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGluayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmYW5jeWJveCIsIm9wZW4iLCJ3aWR0aCIsImhlaWdodCIsImF1dG9TaXplIiwic2Nyb2xsaW5nIiwicGFkZGluZyIsIm9uIiwiZSIsImluc3RhbmNlIiwic2xpZGUiLCJ5bWFwcyIsInJlYWR5IiwiaW5pdCIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImJlaGF2aW9ycyIsImRlc3Ryb3kiLCJzZXJ2aWNlcyIsImlubmVyV2lkdGgiLCJzZXJ2aWNlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidGVjaG5vbG9neSIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9ncmVzc0JhcnMiLCJwYWdlWU9mZnNldCIsIm9mZnNldFRvcCIsImlubmVySGVpZ2h0IiwicHJvZ3Jlc3NCYXIiLCJnZXRBdHRyaWJ1dGUiLCJzdHlsZSIsInNldFRpbWVvdXQiLCJ0aXRsZXMiLCJsZW5ndGgiLCJ0aXRsZSIsImNsaWVudEhlaWdodCIsImNsb3Nlc3QiLCJtYXJnaW5Ub3AiLCJhY29yZGVvbkxpbmtzIiwiYWNvcmRlb25MaW5rIiwibWVkaWEiLCJOdW1iZXIiLCJhY2NvcmRlb24iLCJjb250YWlucyIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImhlYWRlclNjcm9sbCIsImhlYWRlciIsImhlYWRlckxvZ29JbWciLCJoZWFkZXJMb2dvRml4ZWQiLCJoZWFkZXJMb2dvIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImJ1cmdlciIsIm1lbnUiLCJsaW5rQWNvcmRlb24iLCJjb25zb2xlIiwiZGlyIl0sInNvdXJjZVJvb3QiOiIifQ==