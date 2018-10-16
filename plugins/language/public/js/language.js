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
/******/ 	return __webpack_require__(__webpack_require__.s = 132);
/******/ })
/************************************************************************/
/******/ ({

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);


/***/ }),

/***/ 133:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LanguageManagement = function () {
    function LanguageManagement() {
        _classCallCheck(this, LanguageManagement);
    }

    _createClass(LanguageManagement, [{
        key: 'bindEventToElement',
        value: function bindEventToElement() {
            if (jQuery().select2) {

                $('.select-search-language').select2({
                    width: '100%',
                    templateResult: LanguageManagement.formatState,
                    templateSelection: LanguageManagement.formatState
                });
            }

            var table_language = $('.table-language');

            $(document).on('change', '#language_id', function (event) {
                var language = $(event.currentTarget).find('option:selected').data('language');
                if (typeof language != 'undefined' && language.length > 0) {
                    $('#lang_name').val(language[2]);
                    $('#lang_locale').val(language[0]);
                    $('#lang_code').val(language[1]);
                    $('#flag_list').val(language[4]).trigger('change');
                    $('.lang_is_' + language[3]).prop('checked', true);
                    $('#btn-language-submit-edit').prop('id', 'btn-language-submit').text('Add new language');
                }
            });

            $(document).on('click', '#btn-language-submit', function (event) {
                event.preventDefault();
                var name = $('#lang_name').val();
                var locale = $('#lang_locale').val();
                var code = $('#lang_code').val();
                var flag = $('#flag_list').val();
                var order = $('#lang_order').val();
                var is_rtl = $('.lang_is_rtl').prop('checked') ? 1 : 0;
                LanguageManagement.createOrUpdateLanguage(0, name, locale, code, flag, order, is_rtl, 0);
            });

            $(document).on('click', '#btn-language-submit-edit', function (event) {
                event.preventDefault();
                var id = $('#lang_id').val();
                var name = $('#lang_name').val();
                var locale = $('#lang_locale').val();
                var code = $('#lang_code').val();
                var flag = $('#flag_list').val();
                var order = $('#lang_order').val();
                var is_rtl = $('.lang_is_rtl').prop('checked') ? 1 : 0;
                LanguageManagement.createOrUpdateLanguage(id, name, locale, code, flag, order, is_rtl, 1);
            });

            table_language.on('click', '.deleteDialog', function (event) {
                event.preventDefault();

                $('.delete-crud-entry').data('section', $(event.currentTarget).data('section'));
                $('.modal-confirm-delete').modal('show');
            });

            $('.delete-crud-entry').on('click', function (event) {
                event.preventDefault();
                $('.modal-confirm-delete').modal('hide');

                var deleteURL = $(event.currentTarget).data('section');

                $.ajax({
                    url: deleteURL,
                    type: 'GET',
                    success: function success(data) {
                        if (data.error) {
                            Botble.showNotice('error', data.message);
                        } else {
                            if (data.data) {
                                table_language.find('i[data-id=' + data.data + ']').unwrap();
                                $('.tooltip').remove();
                            }
                            table_language.find('a[data-section="' + deleteURL + '"]').closest('tr').remove();
                            Botble.showNotice('success', data.message);
                        }
                    },
                    error: function error(data) {
                        Botble.handleError(data);
                    }
                });
            });

            table_language.on('click', '.set-language-default', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);

                $.ajax({
                    url: _self.data('section'),
                    type: 'GET',
                    success: function success(data) {
                        if (data.error) {
                            Botble.showNotice('error', data.message);
                        } else {
                            var star = table_language.find('td > i');
                            star.replaceWith('<a data-section="' + route('languages.set.default') + '?lang_id=' + star.data('id') + '" class="set-language-default tip" data-original-title="Choose ' + star.data('name') + ' as default language">' + star.closest('td').html() + '</a>');
                            _self.find('i').unwrap();
                            $('.tooltip').remove();
                            Botble.showNotice('success', data.message);
                        }
                    },
                    error: function error(data) {
                        Botble.handleError(data);
                    }
                });
            });

            table_language.on('click', '.edit-language-button', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);

                $.ajax({
                    url: route('languages.get') + '?lang_id=' + _self.data('id'),
                    type: 'GET',
                    success: function success(data) {
                        if (data.error) {
                            Botble.showNotice('error', data.message);
                        } else {
                            var language = data.data;
                            $('#lang_id').val(language.lang_id);
                            $('#lang_name').val(language.lang_name);
                            $('#lang_locale').val(language.lang_locale);
                            $('#lang_code').val(language.lang_code);
                            $('#flag_list').val(language.lang_flag).trigger('change');
                            if (language.lang_rtl) {
                                $('.lang_is_rtl').prop('checked', true);
                            }
                            $('#lang_order').val(language.lang_order);

                            $('#btn-language-submit').prop('id', 'btn-language-submit-edit').text('Update');
                        }
                    },
                    error: function error(data) {
                        Botble.handleError(data);
                    }
                });
            });
        }
    }], [{
        key: 'formatState',
        value: function formatState(state) {
            if (!state.id) {
                return state.text;
            }
            return $('<span><img src="' + $('#language_flag_path').val() + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>');
        }
    }, {
        key: 'createOrUpdateLanguage',
        value: function createOrUpdateLanguage(id, name, locale, code, flag, order, is_rtl, edit) {
            var url = route('languages.store');
            if (edit) {
                url = route('languages.edit') + '?lang_code=' + code;
            }
            $('#btn-language-submit').addClass('button-loading');
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    lang_id: id,
                    lang_name: name,
                    lang_locale: locale,
                    lang_code: code,
                    lang_flag: flag,
                    lang_order: order,
                    lang_is_rtl: is_rtl
                },
                success: function success(data) {
                    if (data.error) {
                        Botble.showNotice('error', data.message);
                    } else {
                        if (edit) {
                            $('.table-language').find('tr[data-id=' + id + ']').replaceWith(data.data);
                        } else {
                            $('.table-language').append(data.data);
                        }
                        Botble.showNotice('success', data.message);
                    }

                    $('#language_id').val('').trigger('change');
                    $('#lang_name').val('');
                    $('#lang_locale').val('');
                    $('#lang_code').val('');
                    $('#flag_list').val('').trigger('change');
                    $('.lang_is_ltr').prop('checked', true);

                    $('#btn-language-submit-edit').prop('id', 'btn-language-submit').text('Add new language');
                    $('#btn-language-submit').removeClass('button-loading');
                },
                error: function error(data) {
                    Botble.handleError(data);
                }
            });
        }
    }]);

    return LanguageManagement;
}();

$(document).ready(function () {
    new LanguageManagement().bindEventToElement();
});

/***/ })

/******/ });