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
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ({

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Dung Thinh on 06/09/2015.
 */

var CropAvatar = function () {
    function CropAvatar($element) {
        _classCallCheck(this, CropAvatar);

        this.$container = $element;

        this.$avatarView = this.$container.find('.avatar-view');
        this.$triggerButton = this.$avatarView.find('.mt-overlay .btn-outline');
        this.$avatar = this.$avatarView.find('img');
        this.$avatarModal = this.$container.find('#avatar-modal');
        this.$loading = this.$container.find('.loading');

        this.$avatarForm = this.$avatarModal.find('.avatar-form');
        this.$avatarSrc = this.$avatarForm.find('.avatar-src');
        this.$avatarData = this.$avatarForm.find('.avatar-data');
        this.$avatarInput = this.$avatarForm.find('.avatar-input');
        this.$avatarSave = this.$avatarForm.find('.avatar-save');

        this.$avatarWrapper = this.$avatarModal.find('.avatar-wrapper');
        this.$avatarPreview = this.$avatarModal.find('.avatar-preview');
        this.support = {
            fileList: !!$('<input type="file">').prop('files'),
            fileReader: !!window.FileReader,
            formData: !!window.FormData
        };
    }

    _createClass(CropAvatar, [{
        key: 'init',
        value: function init() {
            this.support.datauri = this.support.fileList && this.support.fileReader;

            if (!this.support.formData) {
                this.initIframe();
            }

            this.initTooltip();
            this.initModal();
            this.addListener();
        }
    }, {
        key: 'addListener',
        value: function addListener() {
            this.$triggerButton.on('click', $.proxy(this.click, this));
            this.$avatarInput.on('change', $.proxy(this.change, this));
            this.$avatarForm.on('submit', $.proxy(this.submit, this));
        }
    }, {
        key: 'initTooltip',
        value: function initTooltip() {
            this.$avatarView.tooltip({
                placement: 'bottom'
            });
        }
    }, {
        key: 'initModal',
        value: function initModal() {
            this.$avatarModal.modal('hide');
            this.initPreview();
        }
    }, {
        key: 'initPreview',
        value: function initPreview() {
            var url = this.$avatar.prop('src');

            this.$avatarPreview.empty().html('<img src="' + url + '">');
        }
    }, {
        key: 'initIframe',
        value: function initIframe() {
            var iframeName = 'avatar-iframe-' + Math.random().toString().replace('.', ''),
                $iframe = $('<iframe name="' + iframeName + '" style="display:none;"></iframe>'),
                firstLoad = true,
                _this = this;

            this.$iframe = $iframe;
            this.$avatarForm.attr('target', iframeName).after($iframe);

            this.$iframe.on('load', function () {
                var data = void 0,
                    win = void 0,
                    doc = void 0;

                try {
                    win = this.contentWindow;
                    doc = this.contentDocument;

                    doc = doc ? doc : win.document;
                    data = doc ? doc.body.innerText : null;
                } catch (e) {}

                if (data) {
                    _this.submitDone(data);
                } else {
                    if (firstLoad) {
                        firstLoad = false;
                    } else {
                        _this.submitFail('Image upload failed!');
                    }
                }

                _this.submitEnd();
            });
        }
    }, {
        key: 'click',
        value: function click() {
            this.$avatarModal.modal('show');
        }
    }, {
        key: 'change',
        value: function change() {
            var files = void 0,
                file = void 0;

            if (this.support.datauri) {
                files = this.$avatarInput.prop('files');

                if (files.length > 0) {
                    file = files[0];

                    if (CropAvatar.isImageFile(file)) {
                        this.read(file);
                    }
                }
            } else {
                file = this.$avatarInput.val();

                if (CropAvatar.isImageFile(file)) {
                    this.syncUpload();
                }
            }
        }
    }, {
        key: 'submit',
        value: function submit() {
            if (!this.$avatarSrc.val() && !this.$avatarInput.val()) {
                Botble.showNotice('error', 'Please select image!');
                return false;
            }

            if (this.support.formData) {
                this.ajaxUpload();
                return false;
            }
        }
    }, {
        key: 'read',
        value: function read(file) {
            var _this = this,
                fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            fileReader.onload = function () {
                _this.url = this.result;
                _this.startCropper();
            };
        }
    }, {
        key: 'startCropper',
        value: function startCropper() {
            var _this = this;

            if (this.active) {
                this.$img.cropper('replace', this.url);
            } else {
                this.$img = $('<img src="' + this.url + '">');
                this.$avatarWrapper.empty().html(this.$img);
                this.$img.cropper({
                    aspectRatio: 1,
                    rotatable: true,
                    preview: this.$avatarPreview.selector,
                    done: function done(data) {
                        var json = ['{"x":' + data.x, '"y":' + data.y, '"height":' + data.height, '"width":' + data.width + "}"].join();

                        _this.$avatarData.val(json);
                    }
                });

                this.active = true;
            }
        }
    }, {
        key: 'stopCropper',
        value: function stopCropper() {
            if (this.active) {
                this.$img.cropper('destroy');
                this.$img.remove();
                this.active = false;
            }
        }
    }, {
        key: 'ajaxUpload',
        value: function ajaxUpload() {
            var url = this.$avatarForm.attr('action'),
                data = new FormData(this.$avatarForm[0]),
                _this = this;

            $.ajax(url, {
                type: 'POST',
                data: data,
                processData: false,
                contentType: false,

                beforeSend: function beforeSend() {
                    _this.submitStart();
                },

                success: function success(data) {
                    _this.submitDone(data);
                },

                error: function error(XMLHttpRequest, textStatus, errorThrown) {
                    _this.submitFail(XMLHttpRequest.responseJSON, textStatus || errorThrown);
                },

                complete: function complete() {
                    _this.submitEnd();
                }
            });
        }
    }, {
        key: 'syncUpload',
        value: function syncUpload() {
            this.$avatarSave.click();
        }
    }, {
        key: 'submitStart',
        value: function submitStart() {
            this.$loading.fadeIn();
            this.$avatarSave.attr('disabled', true).text('Saving...');
        }
    }, {
        key: 'submitDone',
        value: function submitDone(data) {

            try {
                data = $.parseJSON(data);
            } catch (e) {}

            if (data && !data.error) {
                if (data.data) {
                    this.url = data.data;

                    if (this.support.datauri || this.uploaded) {
                        this.uploaded = false;
                        this.cropDone();
                    } else {
                        this.uploaded = true;
                        this.$avatarSrc.val(this.url);
                        this.startCropper();
                    }

                    this.$avatarInput.val('');
                    Botble.showNotice('success', data.message);
                } else {
                    Botble.showNotice('error', data.message);
                }
            } else {
                Botble.showNotice('error', 'Failed to response');
            }
        }
    }, {
        key: 'submitEnd',
        value: function submitEnd() {
            this.$loading.fadeOut();
            this.$avatarSave.removeAttr('disabled').text('Save');
        }
    }, {
        key: 'cropDone',
        value: function cropDone() {
            this.$avatarSrc.val('');
            this.$avatarData.val('');
            this.$avatar.prop('src', this.url);
            $('.user-menu img').prop('src', this.url);
            $('.user.dropdown img').prop('src', this.url);
            this.stopCropper();
            this.initModal();
        }
    }], [{
        key: 'isImageFile',
        value: function isImageFile(file) {
            if (file.type) {
                return (/^image\/\w+$/.test(file.type)
                );
            } else {
                return (/\.(jpg|jpeg|png|gif)$/.test(file)
                );
            }
        }
    }, {
        key: 'submitFail',
        value: function submitFail(errors) {
            Botble.handleError(errors);
        }
    }]);

    return CropAvatar;
}();

var UserPassword = function () {
    function UserPassword() {
        _classCallCheck(this, UserPassword);
    }

    _createClass(UserPassword, [{
        key: 'init',
        value: function init() {
            var $password_field = $(':password');
            var $password_field_progress = $('.pwstrength_viewport_progress');
            if ($password_field.length > 0) {
                var options = {};
                options.ui = {
                    container: "#pwd-container",
                    verdicts: ["<span class='fa fa-exclamation-triangle'></span> Weak", "<span class='fa fa-exclamation-triangle'></span> Normal", 'Medium', "<span class='fa fa-thumbs-up'></span> Strong", "<span class='fa fa-thumbs-up'></span> Very Strong"],
                    showVerdictsInsideProgressBar: true,
                    viewports: {
                        progress: '.pwstrength_viewport_progress'
                    }
                };
                options.common = {
                    debug: true,
                    onLoad: function onLoad() {
                        $('#messages').text('Start typing password');
                    }
                };

                $password_field.pwstrength(options);

                $password_field_progress.hide();
                $password_field.keypress(function () {
                    $password_field_progress.fadeIn();
                }).blur(function () {
                    if ($(event.currentTarget).val() === '') {
                        $password_field_progress.hide();
                    }
                });
            }
        }
    }]);

    return UserPassword;
}();

$(document).ready(function () {
    new CropAvatar($('.crop-avatar')).init();

    new UserPassword().init();
});

/***/ })

/******/ });