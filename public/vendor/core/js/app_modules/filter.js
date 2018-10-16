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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ({

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 84:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableFilter = function () {
    function TableFilter() {
        _classCallCheck(this, TableFilter);
    }

    _createClass(TableFilter, [{
        key: 'loadData',
        value: function loadData($element) {
            $.ajax({
                type: 'GET',
                url: $('.filter-data-url').val(),
                data: {
                    'class': $('.filter-data-class').val(),
                    'key': $element.val(),
                    'value': $element.closest('.filter-item').find('.filter-column-value').val()
                },
                success: function success(res) {
                    var data = $.map(res.data, function (value, key) {
                        return { id: key, name: value };
                    });
                    $element.closest('.filter-item').find('.filter-column-value-wrap').html(res.html);

                    var $input = $element.closest('.filter-item').find('.filter-column-value');
                    if ($input.length && $input.prop('type') === 'text') {
                        $input.typeahead({ source: data });
                        $input.data('typeahead').source = data;
                    }

                    Botble.initResources();
                },
                error: function error(_error) {
                    Botble.handleError(_error);
                }
            });
        }
    }, {
        key: 'init',
        value: function init() {
            var that = this;
            $.each($('.filter-items-wrap .filter-column-key'), function (index, element) {
                if ($(element).val()) {
                    that.loadData($(element));
                }
            });

            $(document).on('change', '.filter-column-key', function (event) {
                that.loadData($(event.currentTarget));
            });

            $(document).on('click', '.btn-reset-filter-item', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);
                _self.closest('.filter-item').find('.filter-column-key').val('').trigger('change');
                _self.closest('.filter-item').find('.filter-column-operator').val('=');
                _self.closest('.filter-item').find('.filter-column-value').val('');
            });

            $(document).on('click', '.add-more-filter', function () {
                var $template = $(document).find('.sample-filter-item-wrap');
                var html = $template.html();

                $(document).find('.filter-items-wrap').append(html);
                Botble.initResources();

                var element = $(document).find('.filter-items-wrap .filter-item:last-child').find('.filter-column-key');
                if ($(element).val()) {
                    that.loadData(element);
                }
            });

            $(document).on('click', '.btn-remove-filter-item', function (event) {
                event.preventDefault();
                $(event.currentTarget).closest('.filter-item').remove();
            });
        }
    }]);

    return TableFilter;
}();

$(document).ready(function () {
    new TableFilter().init();
});

/***/ })

/******/ });