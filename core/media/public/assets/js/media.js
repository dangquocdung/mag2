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
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
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

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_Services_MediaService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_Services_FolderService__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App_Services_UploadService__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App_Services_ActionsService__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__App_Externals_ExternalServices__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__integrate__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var MediaManagement = function () {
    function MediaManagement() {
        _classCallCheck(this, MediaManagement);

        this.MediaService = new __WEBPACK_IMPORTED_MODULE_2__App_Services_MediaService__["a" /* MediaService */]();
        this.UploadService = new __WEBPACK_IMPORTED_MODULE_4__App_Services_UploadService__["a" /* UploadService */]();
        this.FolderService = new __WEBPACK_IMPORTED_MODULE_3__App_Services_FolderService__["a" /* FolderService */]();

        new __WEBPACK_IMPORTED_MODULE_6__App_Externals_ExternalServices__["a" /* ExternalServices */]();

        this.$body = $('body');
    }

    _createClass(MediaManagement, [{
        key: 'init',
        value: function init() {
            __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
            this.setupLayout();

            this.handleMediaList();
            this.changeViewType();
            this.changeFilter();
            this.search();
            this.handleActions();

            this.UploadService.init();

            this.handleModals();
            this.scrollGetMore();
        }
    }, {
        key: 'setupLayout',
        value: function setupLayout() {
            /**
             * Sidebar
             */
            var $current_filter = $('.js-rv-media-change-filter[data-type="filter"][data-value="' + __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getRequestParams().filter + '"]');

            $current_filter.closest('li').addClass('active').closest('.dropdown').find('.js-rv-media-filter-current').html('(' + $current_filter.html() + ')');

            var $current_view_in = $('.js-rv-media-change-filter[data-type="view_in"][data-value="' + __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in + '"]');

            $current_view_in.closest('li').addClass('active').closest('.dropdown').find('.js-rv-media-filter-current').html('(' + $current_view_in.html() + ')');

            if (__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].isUseInModal()) {
                $('.rv-media-footer').removeClass('hidden');
            }

            /**
             * Sort
             */
            $('.js-rv-media-change-filter[data-type="sort_by"][data-value="' + __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getRequestParams().sort_by + '"]').closest('li').addClass('active');

            /**
             * Details pane
             */
            var $mediaDetailsCheckbox = $('#media_details_collapse');
            $mediaDetailsCheckbox.prop('checked', __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].hide_details_pane || false);
            setTimeout(function () {
                $('.rv-media-details').removeClass('hidden');
            }, 300);
            $mediaDetailsCheckbox.on('change', function (event) {
                event.preventDefault();
                __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].hide_details_pane = $(event.currentTarget).is(':checked');
                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();
            });

            $(document).off('click', 'button[data-dismiss-modal]').on('click', 'button[data-dismiss-modal]', function (event) {
                var modal = $(event.currentTarget).data('dismiss-modal');
                $(modal).modal('hide');
            });
        }
    }, {
        key: 'handleMediaList',
        value: function handleMediaList() {
            var _self = this;

            /*Ctrl key in Windows*/
            var ctrl_key = false;

            /*Command key in MAC*/
            var meta_key = false;

            /*Shift key*/
            var shift_key = false;

            $(document).on('keyup keydown', function (e) {
                /*User hold ctrl key*/
                ctrl_key = e.ctrlKey;
                /*User hold command key*/
                meta_key = e.metaKey;
                /*User hold shift key*/
                shift_key = e.shiftKey;
            });

            _self.$body.off('click', '.js-media-list-title').on('click', '.js-media-list-title', function (event) {
                event.preventDefault();
                var $current = $(event.currentTarget);

                if (shift_key) {
                    var firstItem = _.first(__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getSelectedItems());
                    if (firstItem) {
                        var firstIndex = firstItem.index_key;
                        var currentIndex = $current.index();
                        $('.rv-media-items li').each(function (index, el) {
                            if (index > firstIndex && index <= currentIndex) {
                                $(el).find('input[type=checkbox]').prop('checked', true);
                            }
                        });
                    }
                } else {
                    if (!ctrl_key && !meta_key) {
                        $current.closest('.rv-media-items').find('input[type=checkbox]').prop('checked', false);
                    }
                }

                var $lineCheckBox = $current.find('input[type=checkbox]');
                $lineCheckBox.prop('checked', true);
                __WEBPACK_IMPORTED_MODULE_5__App_Services_ActionsService__["a" /* ActionsService */].handleDropdown();

                _self.MediaService.getFileDetails($current.data());
            }).on('dblclick', '.js-media-list-title', function (event) {
                event.preventDefault();

                var data = $(event.currentTarget).data();
                if (data.is_folder === true) {
                    __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
                    _self.FolderService.changeFolder(data.id);
                } else {
                    if (!__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].isUseInModal()) {
                        __WEBPACK_IMPORTED_MODULE_5__App_Services_ActionsService__["a" /* ActionsService */].handlePreview();
                    } else if (__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getConfigs().request_params.view_in !== 'trash') {
                        var selectedFiles = __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();
                        if (_.size(selectedFiles) > 0) {
                            __WEBPACK_IMPORTED_MODULE_7__integrate__["EditorService"].editorSelectFile(selectedFiles);
                        }
                    }
                }
            }).on('dblclick', '.js-up-one-level', function (event) {
                event.preventDefault();
                var count = $('.rv-media-breadcrumb .breadcrumb li').length;
                $('.rv-media-breadcrumb .breadcrumb li:nth-child(' + (count - 1) + ') a').trigger('click');
            }).on('contextmenu', '.js-context-menu', function (event) {
                if (!$(event.currentTarget).find('input[type=checkbox]').is(':checked')) {
                    $(event.currentTarget).trigger('click');
                }
            }).on('click contextmenu', '.rv-media-items', function (e) {
                if (!_.size(e.target.closest('.js-context-menu'))) {
                    $('.rv-media-items input[type="checkbox"]').prop('checked', false);
                    $('.rv-dropdown-actions').addClass('disabled');
                    _self.MediaService.getFileDetails({
                        icon: 'far fa-image',
                        nothing_selected: ''
                    });
                }
            });
        }
    }, {
        key: 'changeViewType',
        value: function changeViewType() {
            var _self = this;
            _self.$body.off('click', '.js-rv-media-change-view-type .btn').on('click', '.js-rv-media-change-view-type .btn', function (event) {
                event.preventDefault();
                var $current = $(event.currentTarget);
                if ($current.hasClass('active')) {
                    return;
                }
                $current.closest('.js-rv-media-change-view-type').find('.btn').removeClass('active');
                $current.addClass('active');

                __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.view_type = $current.data('type');

                if ($current.data('type') === 'trash') {
                    $(document).find('.js-insert-to-editor').prop('disabled', true);
                } else {
                    $(document).find('.js-insert-to-editor').prop('disabled', false);
                }

                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();

                if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
                    if (typeof RV_MEDIA_CONFIG.pagination.paged != 'undefined') {
                        RV_MEDIA_CONFIG.pagination.paged = 1;
                    }
                }

                _self.MediaService.getMedia(true, false);
            });
            $('.js-rv-media-change-view-type .btn[data-type="' + __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_type + '"]').trigger('click');

            this.bindIntegrateModalEvents();
        }
    }, {
        key: 'changeFilter',
        value: function changeFilter() {
            var _self = this;
            _self.$body.off('click', '.js-rv-media-change-filter').on('click', '.js-rv-media-change-filter', function (event) {
                event.preventDefault();
                if (!__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].isOnAjaxLoading()) {
                    var $current = $(event.currentTarget);
                    var $parent = $current.closest('ul');
                    var data = $current.data();

                    __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].request_params[data.type] = data.value;

                    if (data.type === 'view_in') {
                        __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.folder_id = 0;
                        if (data.value === 'trash') {
                            $(document).find('.js-insert-to-editor').prop('disabled', true);
                        } else {
                            $(document).find('.js-insert-to-editor').prop('disabled', false);
                        }
                    }

                    $current.closest('.dropdown').find('.js-rv-media-filter-current').html('(' + $current.html() + ')');

                    __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();
                    __WEBPACK_IMPORTED_MODULE_2__App_Services_MediaService__["a" /* MediaService */].refreshFilter();

                    __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
                    _self.MediaService.getMedia(true);

                    $parent.find('> li').removeClass('active');
                    $current.closest('li').addClass('active');
                }
            });
        }
    }, {
        key: 'search',
        value: function search() {
            var _self = this;
            $('.input-search-wrapper input[type="text"]').val(__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getRequestParams().search || '');
            _self.$body.off('submit', '.input-search-wrapper').on('submit', '.input-search-wrapper', function (event) {
                event.preventDefault();
                __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.search = $(event.currentTarget).find('input[type="text"]').val();

                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();
                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
                _self.MediaService.getMedia(true);
            });
        }
    }, {
        key: 'handleActions',
        value: function handleActions() {
            var _self = this;

            _self.$body.off('click', '.rv-media-actions .js-change-action[data-type="refresh"]').on('click', '.rv-media-actions .js-change-action[data-type="refresh"]', function (event) {
                event.preventDefault();

                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();

                var ele_options = typeof window.rvMedia.$el !== 'undefined' ? window.rvMedia.$el.data('rv-media') : undefined;
                if (typeof ele_options !== 'undefined' && ele_options.length > 0 && typeof ele_options[0].selected_file_id !== 'undefined') {
                    _self.MediaService.getMedia(true, true);
                } else {
                    _self.MediaService.getMedia(true, false);
                }
            }).off('click', '.rv-media-items li.no-items').on('click', '.rv-media-items li.no-items', function (event) {
                event.preventDefault();
                $('.rv-media-header .rv-media-top-header .rv-media-actions .js-dropzone-upload').trigger('click');
            }).off('submit', '.form-add-folder').on('submit', '.form-add-folder', function (event) {
                event.preventDefault();
                var $input = $(event.currentTarget).find('input[type=text]');
                var folderName = $input.val();
                _self.FolderService.create(folderName);
                $input.val('');
                return false;
            }).off('click', '.js-change-folder').on('click', '.js-change-folder', function (event) {
                event.preventDefault();
                var folderId = $(event.currentTarget).data('folder');
                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
                _self.FolderService.changeFolder(folderId);
            }).off('click', '.js-files-action').on('click', '.js-files-action', function (event) {
                event.preventDefault();
                __WEBPACK_IMPORTED_MODULE_5__App_Services_ActionsService__["a" /* ActionsService */].handleGlobalAction($(event.currentTarget).data('action'), function () {
                    __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
                    _self.MediaService.getMedia(true);
                });
            });
        }
    }, {
        key: 'handleModals',
        value: function handleModals() {
            var _self = this;
            /*Rename files*/
            _self.$body.on('show.bs.modal', '#modal_rename_items', function () {
                __WEBPACK_IMPORTED_MODULE_5__App_Services_ActionsService__["a" /* ActionsService */].renderRenameItems();
            });
            _self.$body.off('submit', '#modal_rename_items .form-rename').on('submit', '#modal_rename_items .form-rename', function (event) {
                event.preventDefault();
                var items = [];
                var $form = $(event.currentTarget);

                $('#modal_rename_items .form-control').each(function (index, el) {
                    var $current = $(el);
                    var data = $current.closest('.form-group').data();
                    data.name = $current.val();
                    items.push(data);
                });

                __WEBPACK_IMPORTED_MODULE_5__App_Services_ActionsService__["a" /* ActionsService */].processAction({
                    action: $form.data('action'),
                    selected: items
                }, function (res) {
                    if (!res.error) {
                        $form.closest('.modal').modal('hide');
                        _self.MediaService.getMedia(true);
                    } else {
                        $('#modal_rename_items .form-group').each(function (index, el) {
                            var $current = $(el);
                            if (_.includes(res.data, $current.data('id'))) {
                                $current.addClass('has-error');
                            } else {
                                $current.removeClass('has-error');
                            }
                        });
                    }
                });
            });

            /*Delete files*/
            _self.$body.off('submit', '.form-delete-items').on('submit', '.form-delete-items', function (event) {
                event.preventDefault();
                var items = [];
                var $form = $(event.currentTarget);

                _.each(__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getSelectedItems(), function (value) {
                    items.push({
                        id: value.id,
                        is_folder: value.is_folder
                    });
                });

                __WEBPACK_IMPORTED_MODULE_5__App_Services_ActionsService__["a" /* ActionsService */].processAction({
                    action: $form.data('action'),
                    selected: items
                }, function (res) {
                    $form.closest('.modal').modal('hide');
                    if (!res.error) {
                        _self.MediaService.getMedia(true);
                    }
                });
            });

            /*Empty trash*/
            _self.$body.off('submit', '#modal_empty_trash .rv-form').on('submit', '#modal_empty_trash .rv-form', function (event) {
                event.preventDefault();
                var $form = $(event.currentTarget);

                __WEBPACK_IMPORTED_MODULE_5__App_Services_ActionsService__["a" /* ActionsService */].processAction({
                    action: $form.data('action')
                }, function () {
                    $form.closest('.modal').modal('hide');
                    _self.MediaService.getMedia(true);
                });
            });

            if (__WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.view_in === 'trash') {
                $(document).find('.js-insert-to-editor').prop('disabled', true);
            } else {
                $(document).find('.js-insert-to-editor').prop('disabled', false);
            }

            this.bindIntegrateModalEvents();
        }
    }, {
        key: 'checkFileTypeSelect',
        value: function checkFileTypeSelect(selectedFiles) {
            if (typeof window.rvMedia.$el !== 'undefined') {
                var firstItem = _.first(selectedFiles);
                var ele_options = window.rvMedia.$el.data('rv-media');
                if (typeof ele_options !== 'undefined' && typeof ele_options[0] !== 'undefined' && typeof ele_options[0].file_type !== 'undefined' && firstItem !== 'undefined' && firstItem.type !== 'undefined') {
                    if (!ele_options[0].file_type.match(firstItem.type)) {
                        return false;
                    } else {
                        if (typeof ele_options[0].ext_allowed !== 'undefined' && $.isArray(ele_options[0].ext_allowed)) {
                            if ($.inArray(firstItem.mime_type, ele_options[0].ext_allowed) == -1) {
                                return false;
                            }
                        }
                    }
                }
            }
            return true;
        }
    }, {
        key: 'bindIntegrateModalEvents',
        value: function bindIntegrateModalEvents() {
            var $main_modal = $('#rv_media_modal');
            var _self = this;
            $main_modal.off('click', '.js-insert-to-editor').on('click', '.js-insert-to-editor', function (event) {
                event.preventDefault();
                var selectedFiles = __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();
                if (_.size(selectedFiles) > 0) {
                    window.rvMedia.options.onSelectFiles(selectedFiles, window.rvMedia.$el);
                    if (_self.checkFileTypeSelect(selectedFiles)) {
                        $main_modal.find('.close').trigger('click');
                    }
                }
            });

            $main_modal.off('dblclick', '.js-media-list-title').on('dblclick', '.js-media-list-title', function (event) {
                event.preventDefault();
                if (__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getConfigs().request_params.view_in !== 'trash') {
                    var selectedFiles = __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();
                    if (_.size(selectedFiles) > 0) {
                        window.rvMedia.options.onSelectFiles(selectedFiles, window.rvMedia.$el);
                        if (_self.checkFileTypeSelect(selectedFiles)) {
                            $main_modal.find('.close').trigger('click');
                        }
                    }
                } else {
                    __WEBPACK_IMPORTED_MODULE_5__App_Services_ActionsService__["a" /* ActionsService */].handlePreview();
                }
            });
        }
    }, {
        key: 'scrollGetMore',


        //scroll get more media
        value: function scrollGetMore() {
            var _self = this;
            $('.rv-media-main .rv-media-items').bind('DOMMouseScroll mousewheel', function (e) {
                if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
                    var $load_more = false;
                    if ($(e.currentTarget).closest('.media-modal').length > 0) {
                        $load_more = $(e.currentTarget).scrollTop() + $(e.currentTarget).innerHeight() / 2 >= $(e.currentTarget)[0].scrollHeight - 450;
                    } else {
                        $load_more = $(e.currentTarget).scrollTop() + $(e.currentTarget).innerHeight() >= $(e.currentTarget)[0].scrollHeight - 150;
                    }

                    if ($load_more) {
                        if (typeof RV_MEDIA_CONFIG.pagination != 'undefined' && RV_MEDIA_CONFIG.pagination.has_more) {
                            _self.MediaService.getMedia(false, false, true);
                        } else {
                            return;
                        }
                    }
                }
            });
        }
    }], [{
        key: 'setupSecurity',
        value: function setupSecurity() {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        }
    }]);

    return MediaManagement;
}();

$(document).ready(function () {
    window.rvMedia = window.rvMedia || {};

    MediaManagement.setupSecurity();
    new MediaManagement().init();
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ActionsService__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ContextMenuService = function () {
    function ContextMenuService() {
        _classCallCheck(this, ContextMenuService);
    }

    _createClass(ContextMenuService, null, [{
        key: 'initContext',
        value: function initContext() {
            if (jQuery().contextMenu) {
                $.contextMenu({
                    selector: '.js-context-menu[data-context="file"]',
                    build: function build() {
                        return {
                            items: ContextMenuService._fileContextMenu()
                        };
                    }
                });

                $.contextMenu({
                    selector: '.js-context-menu[data-context="folder"]',
                    build: function build() {
                        return {
                            items: ContextMenuService._folderContextMenu()
                        };
                    }
                });
            }
        }
    }, {
        key: '_fileContextMenu',
        value: function _fileContextMenu() {
            var items = {
                preview: {
                    name: 'Preview',
                    icon: function icon(opt, $itemElement, itemKey, item) {
                        $itemElement.html('<i class="fa fa-eye" aria-hidden="true"></i> ' + item.name);

                        return 'context-menu-icon-updated';
                    },
                    callback: function callback() {
                        __WEBPACK_IMPORTED_MODULE_0__ActionsService__["a" /* ActionsService */].handlePreview();
                    }
                }
            };

            _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getConfigs().actions_list, function (actionGroup, key) {
                _.each(actionGroup, function (value) {
                    items[value.action] = {
                        name: value.name,
                        icon: function icon(opt, $itemElement, itemKey, item) {
                            $itemElement.html('<i class="' + value.icon + '" aria-hidden="true"></i> ' + (RV_MEDIA_CONFIG.translations.actions_list[key][value.action] || item.name));

                            return 'context-menu-icon-updated';
                        },
                        callback: function callback() {
                            $('.js-files-action[data-action="' + value.action + '"]').trigger('click');
                        }
                    };
                });
            });

            var except = [];

            switch (__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in) {
                case 'all_media':
                    except = ['remove_favorite', 'delete', 'restore'];
                    break;
                case 'recent':
                    except = ['remove_favorite', 'delete', 'restore', 'make_copy'];
                    break;
                case 'favorites':
                    except = ['favorite', 'delete', 'restore', 'make_copy'];
                    break;
                case 'trash':
                    items = {
                        preview: items.preview,
                        rename: items.rename,
                        download: items.download,
                        delete: items.delete,
                        restore: items.restore
                    };
                    break;
            }

            _.each(except, function (value) {
                items[value] = undefined;
            });

            var hasFolderSelected = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFolder().length > 0;

            if (hasFolderSelected) {
                items.preview = undefined;
                items.copy_link = undefined;

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.create')) {
                    items.make_copy = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.edit')) {
                    items.rename = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.trash')) {
                    items.trash = undefined;
                    items.restore = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.delete')) {
                    items.delete = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.favorite')) {
                    items.favorite = undefined;
                    items.remove_favorite = undefined;
                }
            }

            var selectedFiles = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();

            if (selectedFiles.length > 0) {
                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.create')) {
                    items.make_copy = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.edit')) {
                    items.rename = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.trash')) {
                    items.trash = undefined;
                    items.restore = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.delete')) {
                    items.delete = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.favorite')) {
                    items.favorite = undefined;
                    items.remove_favorite = undefined;
                }
            }

            var can_preview = false;
            _.each(selectedFiles, function (value) {
                if (_.includes(['image', 'youtube', 'pdf', 'text', 'video'], value.type)) {
                    can_preview = true;
                }
            });

            if (!can_preview) {
                items.preview = undefined;
            }

            return items;
        }
    }, {
        key: '_folderContextMenu',
        value: function _folderContextMenu() {
            var items = ContextMenuService._fileContextMenu();

            items.preview = undefined;
            items.copy_link = undefined;

            return items;
        }
    }, {
        key: 'destroyContext',
        value: function destroyContext() {
            if (jQuery().contextMenu) {
                $.contextMenu('destroy');
            }
        }
    }]);

    return ContextMenuService;
}();

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_ActionsService__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var MediaList = function () {
    function MediaList() {
        _classCallCheck(this, MediaList);

        this.group = {};
        this.group.list = $('#rv_media_items_list').html();
        this.group.tiles = $('#rv_media_items_tiles').html();

        this.item = {};
        this.item.list = $('#rv_media_items_list_element').html();
        this.item.tiles = $('#rv_media_items_tiles_element').html();

        this.$groupContainer = $('.rv-media-items');
    }

    _createClass(MediaList, [{
        key: 'renderData',
        value: function renderData(data) {
            var reload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var load_more_file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var _self = this;
            var MediaConfig = __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getConfigs();
            var template = _self.group[__WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_type];

            var view_in = __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in;

            if (!_.includes(['all_media', 'public', 'trash', 'favorites', 'recent'], view_in)) {
                view_in = 'all_media';
            }

            template = template.replace(/__noItemIcon__/gi, RV_MEDIA_CONFIG.translations.no_item[view_in].icon || '').replace(/__noItemTitle__/gi, RV_MEDIA_CONFIG.translations.no_item[view_in].title || '').replace(/__noItemMessage__/gi, RV_MEDIA_CONFIG.translations.no_item[view_in].message || '');

            var $result = $(template);
            var $itemsWrapper = $result.find('ul');

            if (load_more_file && this.$groupContainer.find('.rv-media-grid ul').length > 0) {
                $itemsWrapper = this.$groupContainer.find('.rv-media-grid ul');
            }

            if (_.size(data.folders) > 0 || _.size(data.files) > 0 || load_more_file) {
                $('.rv-media-items').addClass('has-items');
            } else {
                $('.rv-media-items').removeClass('has-items');
            }

            _.forEach(data.folders, function (value) {
                var item = _self.item[__WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_type];
                item = item.replace(/__type__/gi, 'folder').replace(/__id__/gi, value.id).replace(/__name__/gi, value.name || '').replace(/__size__/gi, '').replace(/__date__/gi, value.created_at || '').replace(/__thumb__/gi, '<i class="fa fa-folder"></i>');
                var $item = $(item);
                _.forEach(value, function (val, index) {
                    $item.data(index, val);
                });
                $item.data('is_folder', true);
                $item.data('icon', MediaConfig.icons.folder);
                $itemsWrapper.append($item);
            });

            _.forEach(data.files, function (value) {
                var item = _self.item[__WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_type];
                item = item.replace(/__type__/gi, 'file').replace(/__id__/gi, value.id).replace(/__name__/gi, value.name || '').replace(/__size__/gi, value.size || '').replace(/__date__/gi, value.created_at || '');
                if (__WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_type === 'list') {
                    item = item.replace(/__thumb__/gi, '<i class="' + value.icon + '"></i>');
                } else {
                    switch (value.mime_type) {
                        case 'youtube':
                            item = item.replace(/__thumb__/gi, '<img src="' + value.options.thumb + '" alt="' + value.name + '">');
                            break;
                        default:
                            item = item.replace(/__thumb__/gi, value.thumb ? '<img src="' + value.thumb + '" alt="' + value.name + '">' : '<i class="' + value.icon + '"></i>');
                            break;
                    }
                }
                var $item = $(item);
                $item.data('is_folder', false);
                _.forEach(value, function (val, index) {
                    $item.data(index, val);
                });
                $itemsWrapper.append($item);
            });
            if (reload !== false) {
                _self.$groupContainer.empty();
            }

            if (load_more_file && this.$groupContainer.find('.rv-media-grid ul').length > 0) {} else {
                _self.$groupContainer.append($result);
            }
            _self.$groupContainer.find('.loading-wrapper').remove();
            __WEBPACK_IMPORTED_MODULE_1__Services_ActionsService__["a" /* ActionsService */].handleDropdown();

            //trigger event click for file selected
            $('.js-media-list-title[data-id=' + data.selected_file_id + ']').trigger('click');
        }
    }]);

    return MediaList;
}();

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var MediaDetails = function () {
    function MediaDetails() {
        _classCallCheck(this, MediaDetails);

        this.$detailsWrapper = $('.rv-media-main .rv-media-details');

        this.descriptionItemTemplate = '<div class="rv-media-name"><p>__title__</p>__url__</div>';

        this.onlyFields = ['name', 'full_url', 'size', 'mime_type', 'created_at', 'updated_at', 'nothing_selected'];

        this.externalTypes = ['youtube', 'vimeo', 'metacafe', 'dailymotion', 'vine', 'instagram'];
    }

    _createClass(MediaDetails, [{
        key: 'renderData',
        value: function renderData(data) {
            var _this = this;

            var _self = this;
            var thumb = data.type === 'image' ? '<img src="' + data.full_url + '" alt="' + data.name + '">' : data.mime_type === 'youtube' ? '<img src="' + data.options.thumb + '" alt="' + data.name + '">' : '<i class="' + data.icon + '"></i>';
            var description = '';
            var useClipboard = false;
            _.forEach(data, function (val, index) {
                if (_.includes(_self.onlyFields, index)) {
                    if (!_.includes(_self.externalTypes, data.type) || _.includes(_self.externalTypes, data.type) && !_.includes(['size', 'mime_type'], index)) {
                        description += _self.descriptionItemTemplate.replace(/__title__/gi, RV_MEDIA_CONFIG.translations[index]).replace(/__url__/gi, val ? index === 'full_url' ? '<div class="input-group"><input id="file_details_url" type="text" value="' + val + '" class="form-control"><span class="input-group-prepend"><button class="btn btn-default js-btn-copy-to-clipboard" type="button" data-clipboard-target="#file_details_url" title="Copied"><img class="clippy" src="' + __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].asset('/vendor/core/media/images/clippy.svg') + '" width="13" alt="Copy to clipboard"></button></span></div>' : '<span title="' + val + '">' + val + '</span>' : '');
                        if (index === 'full_url') {
                            useClipboard = true;
                        }
                    }
                }
            });
            _self.$detailsWrapper.find('.rv-media-thumbnail').html(thumb);
            _self.$detailsWrapper.find('.rv-media-description').html(description);
            if (useClipboard) {
                new Clipboard('.js-btn-copy-to-clipboard');
                $('.js-btn-copy-to-clipboard').tooltip().on('mouseenter', function () {
                    $(_this).tooltip('hide');
                }).on('mouseleave', function () {
                    $(_this).tooltip('hide');
                });
            }
        }
    }]);

    return MediaDetails;
}();

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MediaService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Helpers_Helpers__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var FolderService = function () {
    function FolderService() {
        _classCallCheck(this, FolderService);

        this.MediaService = new __WEBPACK_IMPORTED_MODULE_1__MediaService__["a" /* MediaService */]();

        $('body').on('shown.bs.modal', '#modal_add_folder', function (event) {
            $(event.currentTarget).find('.form-add-folder input[type=text]').focus();
        });
    }

    _createClass(FolderService, [{
        key: 'create',
        value: function create(folderName) {
            var _self = this;
            $.ajax({
                url: RV_MEDIA_URL.create_folder,
                type: 'POST',
                data: {
                    parent_id: __WEBPACK_IMPORTED_MODULE_3__Helpers_Helpers__["a" /* Helpers */].getRequestParams().folder_id,
                    name: folderName
                },
                dataType: 'json',
                beforeSend: function beforeSend() {
                    __WEBPACK_IMPORTED_MODULE_3__Helpers_Helpers__["a" /* Helpers */].showAjaxLoading();
                },
                success: function success(res) {
                    if (res.error) {
                        __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].showMessage('error', res.message, RV_MEDIA_CONFIG.translations.message.error_header);
                    } else {
                        __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].showMessage('success', res.message, RV_MEDIA_CONFIG.translations.message.success_header);
                        __WEBPACK_IMPORTED_MODULE_3__Helpers_Helpers__["a" /* Helpers */].resetPagination();
                        _self.MediaService.getMedia(true);
                        FolderService.closeModal();
                    }
                },
                complete: function complete() {
                    __WEBPACK_IMPORTED_MODULE_3__Helpers_Helpers__["a" /* Helpers */].hideAjaxLoading();
                },
                error: function error(data) {
                    __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].handleError(data);
                }
            });
        }
    }, {
        key: 'changeFolder',
        value: function changeFolder(folderId) {
            __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */].request_params.folder_id = folderId;
            __WEBPACK_IMPORTED_MODULE_3__Helpers_Helpers__["a" /* Helpers */].storeConfig();
            this.MediaService.getMedia(true);
        }
    }], [{
        key: 'closeModal',
        value: function closeModal() {
            $('#modal_add_folder').modal('hide');
        }
    }]);

    return FolderService;
}();

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_MediaService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var UploadService = function () {
    function UploadService() {
        _classCallCheck(this, UploadService);

        this.$body = $('body');

        this.dropZone = null;

        this.uploadUrl = RV_MEDIA_URL.upload_file;

        this.uploadProgressBox = $('.rv-upload-progress');

        this.uploadProgressContainer = $('.rv-upload-progress .rv-upload-progress-table');

        this.uploadProgressTemplate = $('#rv_media_upload_progress_item').html();

        this.totalQueued = 1;

        this.MediaService = new __WEBPACK_IMPORTED_MODULE_0__Services_MediaService__["a" /* MediaService */]();

        this.totalError = 0;
    }

    _createClass(UploadService, [{
        key: 'init',
        value: function init() {
            if (_.includes(RV_MEDIA_CONFIG.permissions, 'files.create') && $('.rv-media-items').length > 0) {
                this.setupDropZone();
            }
            this.handleEvents();
        }
    }, {
        key: 'setupDropZone',
        value: function setupDropZone() {
            var _self = this;
            _self.dropZone = new Dropzone(document.querySelector('.rv-media-items'), {
                url: _self.uploadUrl,
                thumbnailWidth: false,
                thumbnailHeight: false,
                parallelUploads: 1,
                autoQueue: true,
                clickable: '.js-dropzone-upload',
                previewTemplate: false,
                previewsContainer: false,
                uploadMultiple: true,
                sending: function sending(file, xhr, formData) {
                    formData.append('_token', $('meta[name="csrf-token"]').attr('content'));
                    formData.append('folder_id', __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().folder_id);
                    formData.append('view_in', __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in);
                }
            });

            _self.dropZone.on('addedfile', function (file) {
                file.index = _self.totalQueued;
                _self.totalQueued++;
            });

            _self.dropZone.on('sending', function (file) {
                _self.initProgress(file.name, file.size);
            });

            _self.dropZone.on('success', function (file) {});

            _self.dropZone.on('complete', function (file) {
                _self.changeProgressStatus(file);
            });

            _self.dropZone.on('queuecomplete', function () {
                __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].resetPagination();
                _self.MediaService.getMedia(true);
                if (_self.totalError === 0) {
                    setTimeout(function () {
                        $('.rv-upload-progress .close-pane').trigger('click');
                    }, 5000);
                }
            });
        }
    }, {
        key: 'handleEvents',
        value: function handleEvents() {
            var _self = this;
            /**
             * Close upload progress pane
             */
            _self.$body.off('click', '.rv-upload-progress .close-pane').on('click', '.rv-upload-progress .close-pane', function (event) {
                event.preventDefault();
                $('.rv-upload-progress').addClass('hide-the-pane');
                _self.totalError = 0;
                setTimeout(function () {
                    $('.rv-upload-progress li').remove();
                    _self.totalQueued = 1;
                }, 300);
            });
        }
    }, {
        key: 'initProgress',
        value: function initProgress($fileName, $fileSize) {
            var template = this.uploadProgressTemplate.replace(/__fileName__/gi, $fileName).replace(/__fileSize__/gi, UploadService.formatFileSize($fileSize)).replace(/__status__/gi, 'warning').replace(/__message__/gi, 'Uploading');
            this.uploadProgressContainer.append(template);
            this.uploadProgressBox.removeClass('hide-the-pane');
            this.uploadProgressBox.find('.panel-body').animate({ scrollTop: this.uploadProgressContainer.height() }, 150);
        }
    }, {
        key: 'changeProgressStatus',
        value: function changeProgressStatus(file) {
            var _self = this;
            var $progressLine = _self.uploadProgressContainer.find('li:nth-child(' + file.index + ')');
            var $label = $progressLine.find('.label');
            $label.removeClass('label-success label-danger label-warning');

            var response = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].jsonDecode(file.xhr.responseText || '', {});

            _self.totalError = _self.totalError + (response.error === true || file.status === 'error' ? 1 : 0);

            $label.addClass(response.error === true || file.status === 'error' ? 'label-danger' : 'label-success');
            $label.html(response.error === true || file.status === 'error' ? 'Error' : 'Uploaded');
            if (file.status === 'error') {
                if (file.xhr.status === 422) {
                    var error_html = '';
                    $.each(response, function (key, item) {
                        error_html += '<span class="text-danger">' + item + '</span><br>';
                    });
                    $progressLine.find('.file-error').html(error_html);
                } else if (file.xhr.status === 500) {
                    $progressLine.find('.file-error').html('<span class="text-danger">' + file.xhr.statusText + '</span>');
                }
            } else if (response.error) {
                $progressLine.find('.file-error').html('<span class="text-danger">' + response.message + '</span>');
            } else {
                __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].addToRecent(response.data.id);
                __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].setSelectedFile(response.data.id);
            }
        }
    }], [{
        key: 'formatFileSize',
        value: function formatFileSize(bytes) {
            var si = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var thresh = si ? 1000 : 1024;
            if (Math.abs(bytes) < thresh) {
                return bytes + ' B';
            }
            var units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var u = -1;
            do {
                bytes /= thresh;
                ++u;
            } while (Math.abs(bytes) >= thresh && u < units.length - 1);
            return bytes.toFixed(1) + ' ' + units[u];
        }
    }]);

    return UploadService;
}();

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Youtube__ = __webpack_require__(115);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ExternalServices = function ExternalServices() {
    _classCallCheck(this, ExternalServices);

    new __WEBPACK_IMPORTED_MODULE_0__Youtube__["a" /* Youtube */]();
};

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Youtube; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Config_ExternalServiceConfig__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MediaService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Youtube = function () {
    function Youtube() {
        _classCallCheck(this, Youtube);

        this.MediaService = new __WEBPACK_IMPORTED_MODULE_2__Services_MediaService__["a" /* MediaService */]();

        this.$body = $('body');

        this.$modal = $('#modal_add_from_youtube');

        var _self = this;

        this.setMessage(RV_MEDIA_CONFIG.translations.add_from.youtube.original_msg);

        this.$modal.on('hidden.bs.modal', function () {
            _self.setMessage(RV_MEDIA_CONFIG.translations.add_from.youtube.original_msg);
        });

        this.$body.off('click', '#modal_add_from_youtube .rv-btn-add-youtube-url').on('click', '#modal_add_from_youtube .rv-btn-add-youtube-url', function (event) {
            event.preventDefault();

            _self.checkYouTubeVideo($(event.currentTarget).closest('#modal_add_from_youtube').find('.rv-youtube-url'));
        });
    }

    _createClass(Youtube, [{
        key: 'setMessage',
        value: function setMessage(msg) {
            this.$modal.find('.modal-notice').html(msg);
        }
    }, {
        key: 'checkYouTubeVideo',
        value: function checkYouTubeVideo($input) {
            var _self = this;
            if (!Youtube.validateYouTubeLink($input.val()) || !__WEBPACK_IMPORTED_MODULE_1__Config_ExternalServiceConfig__["a" /* ExternalServiceConfig */].youtube.api_key) {
                if (__WEBPACK_IMPORTED_MODULE_1__Config_ExternalServiceConfig__["a" /* ExternalServiceConfig */].youtube.api_key) {
                    _self.setMessage(RV_MEDIA_CONFIG.translations.add_from.youtube.invalid_url_msg);
                } else {
                    _self.setMessage(RV_MEDIA_CONFIG.translations.add_from.youtube.no_api_key_msg);
                }
            } else {
                var youtubeId = Youtube.getYouTubeId($input.val());
                var requestUrl = 'https://www.googleapis.com/youtube/v3/videos?id=' + youtubeId;
                var isPlaylist = _self.$modal.find('.custom-checkbox input[type="checkbox"]').is(':checked');

                if (isPlaylist) {
                    youtubeId = Youtube.getYoutubePlaylistId($input.val());
                    requestUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=' + youtubeId;
                }

                $.ajax({
                    url: requestUrl + '&key=' + __WEBPACK_IMPORTED_MODULE_1__Config_ExternalServiceConfig__["a" /* ExternalServiceConfig */].youtube.api_key + '&part=snippet',
                    type: 'GET',
                    success: function success(data) {
                        if (isPlaylist) {
                            playlistVideoCallback();
                        } else {
                            singleVideoCallback(data, $input.val());
                        }
                    },
                    error: function error() {
                        _self.setMessage(RV_MEDIA_CONFIG.translations.add_from.youtube.error_msg);
                    }
                });
            }

            function singleVideoCallback(data, url) {
                $.ajax({
                    url: RV_MEDIA_URL.add_external_service,
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        type: 'youtube',
                        name: data.items[0].snippet.title,
                        folder_id: __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().folder_id,
                        url: url,
                        options: {
                            thumb: 'https://img.youtube.com/vi/' + data.items[0].id + '/maxresdefault.jpg'
                        }
                    },
                    success: function success(res) {
                        if (res.error) {
                            __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__["a" /* MessageService */].showMessage('error', res.message, RV_MEDIA_CONFIG.translations.message.error_header);
                        } else {
                            __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__["a" /* MessageService */].showMessage('success', res.message, RV_MEDIA_CONFIG.translations.message.success_header);
                            _self.MediaService.getMedia(true);
                        }
                    },
                    error: function error(data) {
                        __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__["a" /* MessageService */].handleError(data);
                    }
                });
                _self.$modal.modal('hide');
            }

            function playlistVideoCallback() {
                _self.$modal.modal('hide');
            }
        }
    }], [{
        key: 'validateYouTubeLink',
        value: function validateYouTubeLink(url) {
            var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
            return url.match(p) ? RegExp.$1 : false;
        }
    }, {
        key: 'getYouTubeId',
        value: function getYouTubeId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length === 11) {
                return match[2];
            }
            return null;
        }
    }, {
        key: 'getYoutubePlaylistId',
        value: function getYoutubePlaylistId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?list=|\&list=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match) {
                return match[2];
            }
            return null;
        }
    }]);

    return Youtube;
}();

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalServiceConfig; });
var ExternalServiceConfig = {
    youtube: {
        api_key: 'AIzaSyCV4fmfdgsValGNR3sc-0W3cbpEZ8uON33d'
    }
};



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

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_ActionsService__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_ContextMenuService__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Views_MediaList__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Views_MediaDetails__ = __webpack_require__(111);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var MediaService = function () {
    function MediaService() {
        _classCallCheck(this, MediaService);

        this.MediaList = new __WEBPACK_IMPORTED_MODULE_5__Views_MediaList__["a" /* MediaList */]();
        this.MediaDetails = new __WEBPACK_IMPORTED_MODULE_6__Views_MediaDetails__["a" /* MediaDetails */]();
        this.breadcrumbTemplate = $('#rv_media_breadcrumb_item').html();
    }

    _createClass(MediaService, [{
        key: 'getMedia',
        value: function getMedia() {
            var reload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var is_popup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var load_more_file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
                if (RV_MEDIA_CONFIG.pagination.in_process_get_media) {
                    return;
                } else {
                    RV_MEDIA_CONFIG.pagination.in_process_get_media = true;
                }
            }

            var _self = this;

            _self.getFileDetails({
                icon: 'far fa-image',
                nothing_selected: ''
            });

            var params = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams();

            if (params.view_in === 'recent') {
                params.recent_items = __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["b" /* RecentItems */];
            }

            if (is_popup === true) {
                params.is_popup = true;
            } else {
                params.is_popup = undefined;
            }

            params.onSelectFiles = undefined;

            if (typeof params.search != 'undefined' && params.search != '' && typeof params.selected_file_id != 'undefined') {
                params.selected_file_id = undefined;
            }

            params.load_more_file = load_more_file;
            if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
                params.paged = RV_MEDIA_CONFIG.pagination.paged;
                params.posts_per_page = RV_MEDIA_CONFIG.pagination.posts_per_page;
            }
            $.ajax({
                url: RV_MEDIA_URL.get_media,
                type: 'GET',
                data: params,
                dataType: 'json',
                beforeSend: function beforeSend() {
                    __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].showAjaxLoading();
                },
                success: function success(res) {
                    _self.MediaList.renderData(res.data, reload, load_more_file);
                    _self.fetchQuota();
                    _self.renderBreadcrumbs(res.data.breadcrumbs);
                    MediaService.refreshFilter();
                    __WEBPACK_IMPORTED_MODULE_3__Services_ActionsService__["a" /* ActionsService */].renderActions();

                    if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
                        if (typeof RV_MEDIA_CONFIG.pagination.paged != 'undefined') {
                            RV_MEDIA_CONFIG.pagination.paged += 1;
                        }

                        if (typeof RV_MEDIA_CONFIG.pagination.in_process_get_media != 'undefined') {
                            RV_MEDIA_CONFIG.pagination.in_process_get_media = false;
                        }

                        if (typeof RV_MEDIA_CONFIG.pagination.posts_per_page != 'undefined' && res.data.files.length < RV_MEDIA_CONFIG.pagination.posts_per_page && typeof RV_MEDIA_CONFIG.pagination.has_more != 'undefined') {
                            RV_MEDIA_CONFIG.pagination.has_more = false;
                        }
                    }
                },
                complete: function complete() {
                    __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].hideAjaxLoading();
                },
                error: function error(data) {
                    __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].handleError(data);
                }
            });
        }
    }, {
        key: 'getFileDetails',
        value: function getFileDetails(data) {
            this.MediaDetails.renderData(data);
        }
    }, {
        key: 'fetchQuota',
        value: function fetchQuota() {
            $.ajax({
                url: RV_MEDIA_URL.get_quota,
                type: 'GET',
                dataType: 'json',
                success: function success(res) {
                    var data = res.data;

                    $('.rv-media-aside-bottom .used-analytics span').html(data.used + ' / ' + data.quota);
                    $('.rv-media-aside-bottom .progress-bar').css({
                        width: data.percent + '%'
                    });
                },
                error: function error(data) {
                    __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].handleError(data);
                }
            });
        }
    }, {
        key: 'renderBreadcrumbs',
        value: function renderBreadcrumbs(breadcrumbItems) {
            var _self = this;
            var $breadcrumbContainer = $('.rv-media-breadcrumb .breadcrumb');
            $breadcrumbContainer.find('li').remove();

            _.each(breadcrumbItems, function (value) {
                var template = _self.breadcrumbTemplate;
                template = template.replace(/__name__/gi, value.name || '').replace(/__icon__/gi, value.icon ? '<i class="' + value.icon + '"></i>' : '').replace(/__folderId__/gi, value.id || 0);
                $breadcrumbContainer.append($(template));
            });
            $('.rv-media-container').attr('data-breadcrumb-count', _.size(breadcrumbItems));
        }
    }], [{
        key: 'refreshFilter',
        value: function refreshFilter() {
            var $rvMediaContainer = $('.rv-media-container');
            var view_in = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in;
            if (view_in !== 'all_media' && parseInt(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().folder_id) === 0) {
                $('.rv-media-actions .btn:not([data-type="refresh"]):not(label)').addClass('disabled');
                $rvMediaContainer.attr('data-allow-upload', 'false');
            } else {
                $('.rv-media-actions .btn:not([data-type="refresh"]):not(label)').removeClass('disabled');
                $rvMediaContainer.attr('data-allow-upload', 'true');
            }

            $('.rv-media-actions .btn.js-rv-media-change-filter-group').removeClass('disabled');

            var $empty_trash_btn = $('.rv-media-actions .btn[data-action="empty_trash"]');
            if (view_in === 'trash') {
                $empty_trash_btn.removeClass('hidden').removeClass('disabled');
                if (!_.size(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getItems())) {
                    $empty_trash_btn.addClass('hidden').addClass('disabled');
                }
            } else {
                $empty_trash_btn.addClass('hidden');
            }

            __WEBPACK_IMPORTED_MODULE_4__Services_ContextMenuService__["a" /* ContextMenuService */].destroyContext();
            __WEBPACK_IMPORTED_MODULE_4__Services_ContextMenuService__["a" /* ContextMenuService */].initContext();

            $rvMediaContainer.attr('data-view-in', view_in);
        }
    }]);

    return MediaService;
}();

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageService = function () {
    function MessageService() {
        _classCallCheck(this, MessageService);
    }

    _createClass(MessageService, null, [{
        key: 'showMessage',
        value: function showMessage(type, message) {
            toastr.options = {
                closeButton: true,
                progressBar: true,
                positionClass: 'toast-bottom-right',
                onclick: null,
                showDuration: 1000,
                hideDuration: 1000,
                timeOut: 10000,
                extendedTimeOut: 1000,
                showEasing: 'swing',
                hideEasing: 'linear',
                showMethod: 'fadeIn',
                hideMethod: 'fadeOut'
            };

            var messageHeader = '';

            switch (type) {
                case 'error':
                    messageHeader = RV_MEDIA_CONFIG.translations.message.error_header;
                    break;
                case 'success':
                    messageHeader = RV_MEDIA_CONFIG.translations.message.success_header;
                    break;
            }
            toastr[type](message, messageHeader);
        }
    }, {
        key: 'handleError',
        value: function handleError(data) {
            if (typeof data.responseJSON !== 'undefined' && !_.isArray(data.errors)) {
                MessageService.handleValidationError(data.responseJSON.errors);
            } else {
                if (typeof data.responseJSON !== 'undefined') {
                    if (typeof data.responseJSON.errors !== 'undefined') {
                        if (data.status === 422) {
                            MessageService.handleValidationError(data.responseJSON.errors);
                        }
                    } else if (typeof data.responseJSON.message !== 'undefined') {
                        MessageService.showMessage('error', data.responseJSON.message);
                    } else {
                        $.each(data.responseJSON, function (index, el) {
                            $.each(el, function (key, item) {
                                MessageService.showMessage('error', item);
                            });
                        });
                    }
                } else {
                    MessageService.showMessage('error', data.statusText);
                }
            }
        }
    }, {
        key: 'handleValidationError',
        value: function handleValidationError(errors) {
            var message = '';
            $.each(errors, function (index, item) {
                message += item + '<br />';

                var $input = $('*[name="' + index + '"]');
                $input.addClass('field-has-error');

                var $input_array = $('*[name$="[' + index + ']"]');
                $input_array.addClass('field-has-error');
            });
            MessageService.showMessage('error', message);
        }
    }]);

    return MessageService;
}();

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var ActionsService = function () {
    function ActionsService() {
        _classCallCheck(this, ActionsService);
    }

    _createClass(ActionsService, null, [{
        key: 'handleDropdown',
        value: function handleDropdown() {
            var selected = _.size(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedItems());

            ActionsService.renderActions();

            if (selected > 0) {
                $('.rv-dropdown-actions').removeClass('disabled');
            } else {
                $('.rv-dropdown-actions').addClass('disabled');
            }
        }
    }, {
        key: 'handlePreview',
        value: function handlePreview() {
            var selected = [];

            _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFiles(), function (value) {
                if (_.includes(['image', 'youtube', 'pdf', 'text', 'video'], value.type)) {
                    selected.push({
                        src: value.url
                    });
                    __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["b" /* RecentItems */].push(value.id);
                }
            });

            if (_.size(selected) > 0) {
                $.fancybox.open(selected);
                __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].storeRecentItems();
            } else {
                this.handleGlobalAction('download');
            }
        }
    }, {
        key: 'handleCopyLink',
        value: function handleCopyLink() {
            var links = '';
            _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFiles(), function (value) {
                if (!_.isEmpty(links)) {
                    links += '\n';
                }
                links += value.full_url;
            });
            var $clipboardTemp = $('.js-rv-clipboard-temp');
            $clipboardTemp.data('clipboard-text', links);
            new Clipboard('.js-rv-clipboard-temp', {
                text: function text() {
                    return links;
                }
            });
            __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].showMessage('success', RV_MEDIA_CONFIG.translations.clipboard.success, RV_MEDIA_CONFIG.translations.message.success_header);
            $clipboardTemp.trigger('click');
        }
    }, {
        key: 'handleGlobalAction',
        value: function handleGlobalAction(type, callback) {
            var selected = [];
            _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedItems(), function (value) {
                selected.push({
                    is_folder: value.is_folder,
                    id: value.id,
                    full_url: value.full_url
                });
            });

            switch (type) {
                case 'rename':
                    $('#modal_rename_items').modal('show').find('form.rv-form').data('action', type);
                    break;
                case 'copy_link':
                    ActionsService.handleCopyLink();
                    break;
                case 'preview':
                    ActionsService.handlePreview();
                    break;
                case 'trash':
                    $('#modal_trash_items').modal('show').find('form.rv-form').data('action', type);
                    break;
                case 'delete':
                    $('#modal_delete_items').modal('show').find('form.rv-form').data('action', type);
                    break;
                case 'empty_trash':
                    $('#modal_empty_trash').modal('show').find('form.rv-form').data('action', type);
                    break;
                case 'download':
                    var downloadLink = RV_MEDIA_URL.download;
                    var count = 0;
                    _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedItems(), function (value) {
                        if (!_.includes(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getConfigs().denied_download, value.mime_type)) {
                            downloadLink += (count === 0 ? '?' : '&') + 'selected[' + count + '][is_folder]=' + value.is_folder + '&selected[' + count + '][id]=' + value.id;
                            count++;
                        }
                    });
                    if (downloadLink !== RV_MEDIA_URL.download) {
                        window.open(downloadLink, '_blank');
                    } else {
                        __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].showMessage('error', RV_MEDIA_CONFIG.translations.download.error, RV_MEDIA_CONFIG.translations.message.error_header);
                    }
                    break;
                default:
                    ActionsService.processAction({
                        selected: selected,
                        action: type
                    }, callback);
                    break;
            }
        }
    }, {
        key: 'processAction',
        value: function processAction(data) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            $.ajax({
                url: RV_MEDIA_URL.global_actions,
                type: 'POST',
                data: data,
                dataType: 'json',
                beforeSend: function beforeSend() {
                    __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].showAjaxLoading();
                },
                success: function success(res) {
                    __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].resetPagination();
                    if (!res.error) {
                        __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].showMessage('success', res.message, RV_MEDIA_CONFIG.translations.message.success_header);
                    } else {
                        __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].showMessage('error', res.message, RV_MEDIA_CONFIG.translations.message.error_header);
                    }
                    if (callback) {
                        callback(res);
                    }
                },
                complete: function complete() {
                    __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].hideAjaxLoading();
                },
                error: function error(data) {
                    __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].handleError(data);
                }
            });
        }
    }, {
        key: 'renderRenameItems',
        value: function renderRenameItems() {
            var VIEW = $('#rv_media_rename_item').html();
            var $itemsWrapper = $('#modal_rename_items .rename-items').empty();

            _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedItems(), function (value) {
                var item = VIEW.replace(/__icon__/gi, value.icon || 'fa fa-file').replace(/__placeholder__/gi, 'Input file name').replace(/__value__/gi, value.name);
                var $item = $(item);
                $item.data('id', value.id);
                $item.data('is_folder', value.is_folder);
                $item.data('name', value.name);
                $itemsWrapper.append($item);
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            var hasFolderSelected = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFolder().length > 0;

            var ACTION_TEMPLATE = $('#rv_action_item').html();
            var initialized_item = 0;
            var $dropdownActions = $('.rv-dropdown-actions .dropdown-menu');
            $dropdownActions.empty();

            var actionsList = $.extend({}, true, __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getConfigs().actions_list);

            if (hasFolderSelected) {
                actionsList.basic = _.reject(actionsList.basic, function (item) {
                    return item.action === 'preview';
                });
                actionsList.file = _.reject(actionsList.file, function (item) {
                    return item.action === 'copy_link';
                });

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.create')) {
                    actionsList.file = _.reject(actionsList.file, function (item) {
                        return item.action === 'make_copy';
                    });
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.edit')) {
                    actionsList.file = _.reject(actionsList.file, function (item) {
                        return _.includes(['rename'], item.action);
                    });

                    actionsList.user = _.reject(actionsList.user, function (item) {
                        return _.includes(['rename'], item.action);
                    });
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.trash')) {
                    actionsList.other = _.reject(actionsList.other, function (item) {
                        return _.includes(['trash', 'restore'], item.action);
                    });
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.delete')) {
                    actionsList.other = _.reject(actionsList.other, function (item) {
                        return _.includes(['delete'], item.action);
                    });
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.favorite')) {
                    actionsList.other = _.reject(actionsList.other, function (item) {
                        return _.includes(['favorite', 'remove_favorite'], item.action);
                    });
                }
            }

            var selectedFiles = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();

            var can_preview = false;
            _.each(selectedFiles, function (value) {
                if (_.includes(['image', 'youtube', 'pdf', 'text', 'video'], value.type)) {
                    can_preview = true;
                }
            });

            if (!can_preview) {
                actionsList.basic = _.reject(actionsList.basic, function (item) {
                    return item.action === 'preview';
                });
            }

            if (selectedFiles.length > 0) {
                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.create')) {
                    actionsList.file = _.reject(actionsList.file, function (item) {
                        return item.action === 'make_copy';
                    });
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.edit')) {
                    actionsList.file = _.reject(actionsList.file, function (item) {
                        return _.includes(['rename'], item.action);
                    });
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.trash')) {
                    actionsList.other = _.reject(actionsList.other, function (item) {
                        return _.includes(['trash', 'restore'], item.action);
                    });
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.delete')) {
                    actionsList.other = _.reject(actionsList.other, function (item) {
                        return _.includes(['delete'], item.action);
                    });
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.favorite')) {
                    actionsList.other = _.reject(actionsList.other, function (item) {
                        return _.includes(['favorite', 'remove_favorite'], item.action);
                    });
                }
            }

            _.each(actionsList, function (action, key) {
                _.each(action, function (item, index) {
                    var is_break = false;
                    switch (__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in) {
                        case 'all_media':
                            if (_.includes(['remove_favorite', 'delete', 'restore'], item.action)) {
                                is_break = true;
                            }
                            break;
                        case 'recent':
                            if (_.includes(['remove_favorite', 'delete', 'restore', 'make_copy'], item.action)) {
                                is_break = true;
                            }
                            break;
                        case 'favorites':
                            if (_.includes(['favorite', 'delete', 'restore', 'make_copy'], item.action)) {
                                is_break = true;
                            }
                            break;
                        case 'trash':
                            if (!_.includes(['preview', 'delete', 'restore', 'rename', 'download'], item.action)) {
                                is_break = true;
                            }
                            break;
                    }
                    if (!is_break) {
                        var template = ACTION_TEMPLATE.replace(/__action__/gi, item.action || '').replace(/__icon__/gi, item.icon || '').replace(/__name__/gi, RV_MEDIA_CONFIG.translations.actions_list[key][item.action] || item.name);
                        if (!index && initialized_item) {
                            template = '<li role="separator" class="divider"></li>' + template;
                        }
                        $dropdownActions.append(template);
                    }
                });
                if (action.length > 0) {
                    initialized_item++;
                }
            });
        }
    }]);

    return ActionsService;
}();

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