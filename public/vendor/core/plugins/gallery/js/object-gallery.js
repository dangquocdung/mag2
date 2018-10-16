/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 140);
/******/ })
/************************************************************************/
/******/ ({

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectGalleryManagement = function () {
    function ObjectGalleryManagement() {
        _classCallCheck(this, ObjectGalleryManagement);
    }

    _createClass(ObjectGalleryManagement, [{
        key: 'init',
        value: function init() {
            $('[data-slider="owl"] .owl-carousel').each(function (index, el) {
                var parent = $(el).parent();
                var items = void 0;
                var itemsDesktop = void 0;
                var itemsDesktopSmall = void 0;
                var itemsTablet = void 0;
                var itemsTabletSmall = void 0;
                var itemsMobile = void 0;

                if (parent.data('single-item') === 'true') {
                    items = 1;
                    itemsDesktop = 1;
                    itemsDesktopSmall = 1;
                    itemsTablet = 1;
                    itemsTabletSmall = 1;
                    itemsMobile = 1;
                } else {
                    items = parent.data('items');
                    itemsDesktop = [1199, parent.data('desktop-items') ? parent.data('desktop-items') : items];
                    itemsDesktopSmall = [979, parent.data('desktop-small-items') ? parent.data('desktop-small-items') : 3];
                    itemsTablet = [768, parent.data('tablet-items') ? parent.data('tablet-items') : 2];
                    itemsMobile = [479, parent.data('mobile-items') ? parent.data('mobile-items') : 1];
                }

                $(el).owlCarousel({
                    items: items,
                    itemsDesktop: itemsDesktop,
                    itemsDesktopSmall: itemsDesktopSmall,
                    itemsTablet: itemsTablet,
                    itemsTabletSmall: itemsTabletSmall,
                    itemsMobile: itemsMobile,
                    navigation: !!parent.data('navigation'),
                    navigationText: false,
                    slideSpeed: parent.data('slide-speed'),
                    paginationSpeed: parent.data('pagination-speed'),
                    singleItem: !!parent.data('single-item'),
                    autoPlay: parent.data('auto-play')
                });
            });
        }
    }]);

    return ObjectGalleryManagement;
}();

$(document).ready(function () {
    new ObjectGalleryManagement().init();
});

/***/ })

/******/ });