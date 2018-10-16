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
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ({

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(80);


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingManagement = function () {
    function SettingManagement() {
        _classCallCheck(this, SettingManagement);
    }

    _createClass(SettingManagement, [{
        key: 'init',
        value: function init() {
            $('input[data-key=email-config-status-btn]').on('change', function (event) {
                var _self = $(event.currentTarget);
                var key = _self.prop('id');
                var url = _self.data('change-url');

                $.ajax({
                    type: 'POST',
                    url: url,
                    data: {
                        key: key,
                        value: _self.prop('checked') ? 1 : 0
                    },
                    success: function success(res) {
                        if (!res.error) {
                            Botble.showNotice('success', res.message);
                        } else {
                            Botble.showNotice('error', res.message);
                        }
                    },
                    error: function error(res) {
                        Botble.handleError(res);
                    }
                });
            });

            $(document).on('change', '#email_driver', function (event) {
                if ($(event.currentTarget).val() === 'mailgun') {
                    $('.setting-mail-password').addClass('hidden');
                    $('.setting-mail-mail-gun').removeClass('hidden');
                } else {
                    $('.setting-mail-password').removeClass('hidden');
                    $('.setting-mail-mail-gun').addClass('hidden');
                }
            });

            $('#send-test-email-btn').on('click', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);

                _self.addClass('button-loading');

                $.ajax({
                    type: 'POST',
                    url: route('setting.email.send.test'),
                    data: {
                        email: _self.closest('.modal-content').find('input[name=email]').val()
                    },
                    success: function success(res) {
                        if (!res.error) {
                            Botble.showNotice('success', res.message);
                        } else {
                            Botble.showNotice('error', res.message);
                        }
                        _self.removeClass('button-loading');
                        _self.closest('.modal').modal('hide');
                    },
                    error: function error(res) {
                        Botble.handleError(res);
                        _self.removeClass('button-loading');
                        _self.closest('.modal').modal('hide');
                    }
                });
            });

            if (typeof CodeMirror !== 'undefined') {
                Botble.initCodeEditor('mail-template-editor');
            }

            $(document).on('click', '.btn-trigger-reset-to-default', function (event) {
                event.preventDefault();
                $('#reset-template-to-default-button').data('target', $(event.currentTarget).data('target'));
                $('#reset-template-to-default-modal').modal('show');
            });

            $(document).on('click', '#reset-template-to-default-button', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);

                _self.addClass('button-loading');

                $.ajax({
                    type: 'POST',
                    cache: false,
                    url: _self.data('target'),
                    data: {
                        email_subject_key: $('input[name=email_subject_key]').val(),
                        template_path: $('input[name=template_path]').val()
                    },
                    success: function success(res) {
                        if (!res.error) {
                            Botble.showNotice('success', res.message);
                            setTimeout(function () {
                                window.location.reload();
                            }, 1000);
                        } else {
                            Botble.showNotice('error', res.message);
                        }
                        _self.removeClass('button-loading');
                        $('#reset-template-to-default-modal').modal('hide');
                    },
                    error: function error(res) {
                        Botble.handleError(res);
                        _self.removeClass('button-loading');
                    }
                });
            });
        }
    }]);

    return SettingManagement;
}();

$(document).ready(function () {
    new SettingManagement().init();
});

/***/ })

/******/ });