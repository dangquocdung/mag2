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
/******/ 	return __webpack_require__(__webpack_require__.s = 144);
/******/ })
/************************************************************************/
/******/ ({

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


/***/ }),

/***/ 145:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleSliderAdminManagement = function () {
    function SimpleSliderAdminManagement() {
        _classCallCheck(this, SimpleSliderAdminManagement);
    }

    _createClass(SimpleSliderAdminManagement, [{
        key: 'init',
        value: function init() {
            $.each($('#simple-slider-items-table_wrapper tbody'), function (index, el) {
                Sortable.create(el, {
                    group: el + '_' + index, // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
                    sort: true, // sorting inside list
                    delay: 0, // time in milliseconds to define when the sorting should start
                    disabled: false, // Disables the sortable if set to true.
                    store: null, // @see Store
                    animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
                    handle: 'tr',
                    ghostClass: 'sortable-ghost', // Class name for the drop placeholder
                    chosenClass: 'sortable-chosen', // Class name for the chosen item
                    dataIdAttr: 'data-id',

                    forceFallback: false, // ignore the HTML5 DnD behaviour and force the fallback to kick in
                    fallbackClass: 'sortable-fallback', // Class name for the cloned DOM Element when using forceFallback
                    fallbackOnBody: false, // Appends the cloned DOM Element into the Document's Body

                    scroll: true, // or HTMLElement
                    scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
                    scrollSpeed: 10, // px

                    // dragging ended
                    onEnd: function onEnd() {
                        var $box = $(el).closest('.widget-body');
                        $box.find('.btn-save-sort-order').addClass('sort-button-active').show();
                        $.each($box.find('tbody tr'), function (index, sort) {
                            $(sort).find('.order-column').text(index + 1);
                        });
                    }
                });
            });

            $('.btn-save-sort-order').off('click').on('click', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);
                if (_self.hasClass('sort-button-active')) {
                    var $box = _self.closest('.widget-body');
                    $box.find('.btn-save-sort-order').addClass('button-loading');
                    var items = [];
                    console.log($box.find('tbody tr'));
                    $.each($box.find('tbody tr'), function (index, sort) {
                        items.push(parseInt($(sort).find('td:first-child').text()));
                        $(sort).find('.order-column').text(index + 1);
                    });
                    $.ajax({
                        type: 'POST',
                        cache: false,
                        url: route('simple-slider.sorting'),
                        data: {
                            items: items
                        },
                        success: function success(res) {
                            Botble.showNotice('success', res.message);
                            $box.find('.btn-save-sort-order').removeClass('button-loading').hide();
                            _self.removeClass('sort-button-active');
                        },
                        error: function error(res) {
                            Botble.showNotice('error', res.message);
                            _self.removeClass('sort-button-active');
                        }
                    });
                }
            });
        }
    }]);

    return SimpleSliderAdminManagement;
}();

$(document).ready(function () {
    new SimpleSliderAdminManagement().init();
});

/***/ })

/******/ });