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
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
/******/ })
/************************************************************************/
/******/ ({

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(135);


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LanguageGlobalManagement = function () {
    function LanguageGlobalManagement() {
        _classCallCheck(this, LanguageGlobalManagement);
    }

    _createClass(LanguageGlobalManagement, [{
        key: 'init',
        value: function init() {
            var language_choice_select = $('#post_lang_choice');
            language_choice_select.data('prev', language_choice_select.val());

            language_choice_select.on('change', function (event) {
                $('.change_to_language_text').text($(event.currentTarget).find('option:selected').text());
                $('#confirm-change-language-modal').modal('show');
            });

            $('#confirm-change-language-modal .btn-primary').on('click', function (event) {
                event.preventDefault();
                language_choice_select.val(language_choice_select.data('prev')).trigger('change');
                $('#confirm-change-language-modal').modal('hide');
            });

            $('#confirm-change-language-button').on('click', function (event) {
                event.preventDefault();
                var _self = language_choice_select;
                var flag_path = $('#language_flag_path').val();

                $.ajax({
                    url: $('div[data-change-language-route]').data('change-language-route'),
                    data: {
                        lang_meta_current_language: _self.val(),
                        lang_meta_content_id: $('#lang_meta_content_id').val(),
                        lang_meta_reference: $('#lang_meta_reference').val(),
                        lang_meta_created_from: $('#lang_meta_created_from').val()
                    },
                    type: 'POST',
                    success: function success(data) {
                        $('.active-language').html('<img src="' + flag_path + _self.find('option:selected').data('flag') + '.png" title="' + _self.find('option:selected').text() + '" alt="' + _self.find('option:selected').text() + '" />');
                        if (!data.error) {
                            $('.current_language_text').text(_self.find('option:selected').text());
                            var html = '';
                            $.each(data.data, function (index, el) {
                                html += '<img src="' + flag_path + el.lang_flag + '.png" title="' + el.lang_name + '" alt="' + el.lang_name + '">';
                                if (el.lang_meta_content_id) {
                                    html += '<a href="' + $('#route_edit').val() + '"> ' + el.lang_name + ' <i class="fa fa-edit"></i> </a><br />';
                                } else {
                                    html += '<a href="' + $('#route_create').val() + '?ref_from=' + $('#content_id').val() + '&ref_lang=' + index + '"> ' + el.lang_name + ' <i class="fa fa-plus"></i> </a><br />';
                                }
                            });

                            $('#list-others-language').html(html);
                            $('#confirm-change-language-modal').modal('hide');
                            language_choice_select.data('prev', language_choice_select.val());
                        }
                    },
                    error: function error(data) {
                        Botble.showNotice('error', data.message);
                    }
                });
            });

            $(document).on('click', '.change-data-language-item', function (event) {
                event.preventDefault();
                window.location.href = $(event.currentTarget).find('span[data-href]').data('href');
            });
        }
    }]);

    return LanguageGlobalManagement;
}();

;

$(document).ready(function () {
    new LanguageGlobalManagement().init();
});

/***/ })

/******/ });