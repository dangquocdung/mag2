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
/******/ 	return __webpack_require__(__webpack_require__.s = 119);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Helpers = function () {
    function Helpers() {
        _classCallCheck(this, Helpers);
    }

    _createClass(Helpers, null, [{
        key: 'getUrlParam',
        value: function getUrlParam(paramName) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!url) {
                url = window.location.search;
            }
            var reParam = new RegExp('(?:[\?&]|&)' + paramName + '=([^&]+)', 'i');
            var match = url.match(reParam);
            return match && match.length > 1 ? match[1] : null;
        }
    }, {
        key: 'asset',
        value: function asset(url) {
            if (url.substring(0, 2) === '//' || url.substring(0, 7) === 'http://' || url.substring(0, 8) === 'https://') {
                return url;
            }

            var baseUrl = RV_MEDIA_URL.base_url.substr(-1, 1) !== '/' ? RV_MEDIA_URL.base_url + '/' : RV_MEDIA_URL.base_url;

            if (url.substring(0, 1) === '/') {
                return baseUrl + url.substring(1);
            }
            return baseUrl + url;
        }
    }, {
        key: 'showAjaxLoading',
        value: function showAjaxLoading() {
            var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.rv-media-main');

            $element.addClass('on-loading').append($('#rv_media_loading').html());
        }
    }, {
        key: 'hideAjaxLoading',
        value: function hideAjaxLoading() {
            var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.rv-media-main');

            $element.removeClass('on-loading').find('.loading-wrapper').remove();
        }
    }, {
        key: 'isOnAjaxLoading',
        value: function isOnAjaxLoading() {
            var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.rv-media-items');

            return $element.hasClass('on-loading');
        }
    }, {
        key: 'jsonEncode',
        value: function jsonEncode(object) {
            if (typeof object === 'undefined') {
                object = null;
            }
            return JSON.stringify(object);
        }
    }, {
        key: 'jsonDecode',
        value: function jsonDecode(jsonString, defaultValue) {
            if (!jsonString) {
                return defaultValue;
            }
            if (typeof jsonString === 'string') {
                var result = void 0;
                try {
                    result = $.parseJSON(jsonString);
                } catch (err) {
                    result = defaultValue;
                }
                return result;
            }
            return jsonString;
        }
    }, {
        key: 'getRequestParams',
        value: function getRequestParams() {
            if (window.rvMedia.options && window.rvMedia.options.open_in === 'modal') {
                return $.extend(true, __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */].request_params, window.rvMedia.options || {});
            }
            return __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */].request_params;
        }
    }, {
        key: 'setSelectedFile',
        value: function setSelectedFile($file_id) {
            if (typeof window.rvMedia.options !== 'undefined') {
                window.rvMedia.options.selected_file_id = $file_id;
            } else {
                __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */].request_params.selected_file_id = $file_id;
            }
        }
    }, {
        key: 'getConfigs',
        value: function getConfigs() {
            return __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */];
        }
    }, {
        key: 'storeConfig',
        value: function storeConfig() {
            localStorage.setItem('MediaConfig', Helpers.jsonEncode(__WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */]));
        }
    }, {
        key: 'storeRecentItems',
        value: function storeRecentItems() {
            localStorage.setItem('RecentItems', Helpers.jsonEncode(__WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["b" /* RecentItems */]));
        }
    }, {
        key: 'addToRecent',
        value: function addToRecent(id) {
            if (id instanceof Array) {
                _.each(id, function (value) {
                    __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["b" /* RecentItems */].push(value);
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["b" /* RecentItems */].push(id);
            }
        }
    }, {
        key: 'getItems',
        value: function getItems() {
            var items = [];
            $('.js-media-list-title').each(function (index, el) {
                var $box = $(el);
                var data = $box.data() || {};
                data.index_key = $box.index();
                items.push(data);
            });
            return items;
        }
    }, {
        key: 'getSelectedItems',
        value: function getSelectedItems() {
            var selected = [];
            $('.js-media-list-title input[type=checkbox]:checked').each(function (index, el) {
                var $box = $(el).closest('.js-media-list-title');
                var data = $box.data() || {};
                data.index_key = $box.index();
                selected.push(data);
            });
            return selected;
        }
    }, {
        key: 'getSelectedFiles',
        value: function getSelectedFiles() {
            var selected = [];
            $('.js-media-list-title[data-context=file] input[type=checkbox]:checked').each(function (index, el) {
                var $box = $(el).closest('.js-media-list-title');
                var data = $box.data() || {};
                data.index_key = $box.index();
                selected.push(data);
            });
            return selected;
        }
    }, {
        key: 'getSelectedFolder',
        value: function getSelectedFolder() {
            var selected = [];
            $('.js-media-list-title[data-context=folder] input[type=checkbox]:checked').each(function (index, el) {
                var $box = $(el).closest('.js-media-list-title');
                var data = $box.data() || {};
                data.index_key = $box.index();
                selected.push(data);
            });
            return selected;
        }
    }, {
        key: 'isUseInModal',
        value: function isUseInModal() {
            return Helpers.getUrlParam('media-action') === 'select-files' || window.rvMedia && window.rvMedia.options && window.rvMedia.options.open_in === 'modal';
        }
    }, {
        key: 'resetPagination',
        value: function resetPagination() {
            RV_MEDIA_CONFIG.pagination = { paged: 1, posts_per_page: 40, in_process_get_media: false, has_more: true };
        }
    }]);

    return Helpers;
}();

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RecentItems; });
var MediaConfig = $.parseJSON(localStorage.getItem('MediaConfig')) || {};

var defaultConfig = {
    app_key: '483a0xyzytz1242c0d520426e8ba366c530c3d9d3xd',
    request_params: {
        view_type: 'tiles',
        filter: 'everything',
        view_in: 'all_media',
        search: '',
        sort_by: 'created_at-desc',
        folder_id: 0
    },
    hide_details_pane: false,
    icons: {
        folder: 'fa fa-folder'
    },
    actions_list: {
        basic: [{
            icon: 'fa fa-eye',
            name: 'Preview',
            action: 'preview',
            order: 0,
            class: 'rv-action-preview'
        }],
        file: [{
            icon: 'fa fa-link',
            name: 'Copy link',
            action: 'copy_link',
            order: 0,
            class: 'rv-action-copy-link'
        }, {
            icon: 'far fa-edit',
            name: 'Rename',
            action: 'rename',
            order: 1,
            class: 'rv-action-rename'
        }, {
            icon: 'fa fa-copy',
            name: 'Make a copy',
            action: 'make_copy',
            order: 2,
            class: 'rv-action-make-copy'
        }],
        user: [{
            icon: 'fa fa-star',
            name: 'Favorite',
            action: 'favorite',
            order: 2,
            class: 'rv-action-favorite'
        }, {
            icon: 'fa fa-star',
            name: 'Remove favorite',
            action: 'remove_favorite',
            order: 3,
            class: 'rv-action-favorite'
        }],
        other: [{
            icon: 'fa fa-download',
            name: 'Download',
            action: 'download',
            order: 0,
            class: 'rv-action-download'
        }, {
            icon: 'fa fa-trash',
            name: 'Move to trash',
            action: 'trash',
            order: 1,
            class: 'rv-action-trash'
        }, {
            icon: 'fa fa-eraser',
            name: 'Delete permanently',
            action: 'delete',
            order: 2,
            class: 'rv-action-delete'
        }, {
            icon: 'fa fa-undo',
            name: 'Restore',
            action: 'restore',
            order: 3,
            class: 'rv-action-restore'
        }]
    },
    denied_download: ['youtube']
};

if (!MediaConfig.app_key || MediaConfig.app_key !== defaultConfig.app_key) {
    MediaConfig = defaultConfig;
}

var RecentItems = $.parseJSON(localStorage.getItem('RecentItems')) || [];



/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_Config_MediaConfig__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var EditorService = function () {
    function EditorService() {
        _classCallCheck(this, EditorService);
    }

    _createClass(EditorService, null, [{
        key: 'editorSelectFile',
        value: function editorSelectFile(selectedFiles) {

            var is_ckeditor = __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].getUrlParam('CKEditor') || __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].getUrlParam('CKEditorFuncNum');

            if (window.opener && is_ckeditor) {
                var firstItem = _.first(selectedFiles);

                window.opener.CKEDITOR.tools.callFunction(__WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].getUrlParam('CKEditorFuncNum'), firstItem.url);

                if (window.opener) {
                    window.close();
                }
            } else {
                // No WYSIWYG editor found, use custom method.
            }
        }
    }]);

    return EditorService;
}();

var rvMedia = function rvMedia(selector, options) {
    _classCallCheck(this, rvMedia);

    window.rvMedia = window.rvMedia || {};

    var $body = $('body');

    var defaultOptions = {
        multiple: true,
        type: '*',
        onSelectFiles: function onSelectFiles(files, $el) {}
    };

    options = $.extend(true, defaultOptions, options);

    var clickCallback = function clickCallback(event) {
        event.preventDefault();
        var $current = $(event.currentTarget);
        $('#rv_media_modal').modal();

        window.rvMedia.options = options;
        window.rvMedia.options.open_in = 'modal';

        window.rvMedia.$el = $current;

        __WEBPACK_IMPORTED_MODULE_1__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.filter = 'everything';
        __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();

        var ele_options = window.rvMedia.$el.data('rv-media');
        if (typeof ele_options !== 'undefined' && ele_options.length > 0) {
            ele_options = ele_options[0];
            window.rvMedia.options = $.extend(true, window.rvMedia.options, ele_options || {});
            if (typeof ele_options.selected_file_id !== 'undefined') {
                window.rvMedia.options.is_popup = true;
            } else if (typeof window.rvMedia.options.is_popup !== 'undefined') {
                window.rvMedia.options.is_popup = undefined;
            }
        }

        if ($('#rv_media_body .rv-media-container').length === 0) {
            $('#rv_media_body').load(RV_MEDIA_URL.popup, function (data) {
                if (data.error) {
                    alert(data.message);
                }
                $('#rv_media_body').removeClass('media-modal-loading').closest('.modal-content').removeClass('bb-loading');
                $(document).find('.rv-media-container .js-change-action[data-type=refresh]').trigger('click');
            });
        } else {
            $(document).find('.rv-media-container .js-change-action[data-type=refresh]').trigger('click');
        }
    };

    if (typeof selector === 'string') {
        $body.off('click', selector).on('click', selector, clickCallback);
    } else {
        selector.off('click').on('click', clickCallback);
    }
};

window.RvMediaStandAlone = rvMedia;

$('.js-insert-to-editor').off('click').on('click', function (event) {
    event.preventDefault();
    var selectedFiles = __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();
    if (_.size(selectedFiles) > 0) {
        EditorService.editorSelectFile(selectedFiles);
    }
});

$.fn.rvMedia = function (options) {
    var $selector = $(this);

    __WEBPACK_IMPORTED_MODULE_1__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.filter = 'everything';
    if (__WEBPACK_IMPORTED_MODULE_1__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.view_in === 'trash') {
        $(document).find('.js-insert-to-editor').prop('disabled', true);
    } else {
        $(document).find('.js-insert-to-editor').prop('disabled', false);
    }
    __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();

    new rvMedia($selector, options);
};

/***/ })

/******/ });