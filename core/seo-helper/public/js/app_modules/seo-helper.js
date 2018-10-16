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
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ({

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SEOHelperManagement = function () {
    function SEOHelperManagement() {
        _classCallCheck(this, SEOHelperManagement);

        this.$document = $(document);
    }

    _createClass(SEOHelperManagement, [{
        key: 'handleMetaBox',
        value: function handleMetaBox() {
            $('.page-url-seo p').text(this.$document.find('#sample-permalink a').prop('href'));
            this.$document.on('click', '.btn-trigger-show-seo-detail', function (event) {
                event.preventDefault();
                $('.seo-edit-section').toggleClass('hidden');
            });

            this.$document.on('keyup', 'input[name=name]', function (event) {
                SEOHelperManagement.updateSEOTitle($(event.currentTarget).val());
            });

            this.$document.on('keyup', 'input[name=title]', function (event) {
                SEOHelperManagement.updateSEOTitle($(event.currentTarget).val());
            });

            this.$document.on('keyup', 'textarea[name=description]', function (event) {
                SEOHelperManagement.updateSEODescription($(event.currentTarget).val());
            });

            this.$document.on('keyup', '#seo_title', function (event) {
                if ($(event.currentTarget).val()) {
                    $('.page-title-seo').text($(event.currentTarget).val());
                    $('.default-seo-description').addClass('hidden');
                    $('.existed-seo-meta').removeClass('hidden');
                } else {
                    var $input_name = $('input[name=name]');
                    if ($input_name.val()) {
                        $('.page-title-seo').text($input_name.val());
                    } else {
                        $('.page-title-seo').text($('input[name=title]').val());
                    }
                }
            });

            this.$document.on('keyup', '#seo_description', function (event) {
                if ($(event.currentTarget).val()) {
                    $('.page-description-seo').text($(event.currentTarget).val());
                } else {
                    $('.page-title-seo').text($('textarea[name=description]').val());
                }
            });
        }
    }], [{
        key: 'updateSEOTitle',
        value: function updateSEOTitle(value) {
            if (value) {
                if (!$('#seo_title').val()) {
                    $('.page-title-seo').text(value);
                }
                $('.default-seo-description').addClass('hidden');
                $('.existed-seo-meta').removeClass('hidden');
            } else {
                $('.default-seo-description').removeClass('hidden');
                $('.existed-seo-meta').addClass('hidden');
            }
        }
    }, {
        key: 'updateSEODescription',
        value: function updateSEODescription(value) {
            if (value) {
                if (!$('#seo_description').val()) {
                    $('.page-description-seo').text(value);
                }
            }
        }
    }]);

    return SEOHelperManagement;
}();

$(document).ready(function () {
    new SEOHelperManagement().handleMetaBox();
});

/***/ })

/******/ });