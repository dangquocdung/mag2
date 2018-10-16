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
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WidgetManagement = function () {
    function WidgetManagement() {
        _classCallCheck(this, WidgetManagement);
    }

    _createClass(WidgetManagement, [{
        key: 'init',
        value: function init() {
            var list_widgets = [{
                name: 'wrap-widgets',
                pull: 'clone',
                put: false
            }];

            $.each($('.sidebar-item'), function () {
                list_widgets.push({ name: 'wrap-widgets', pull: true, put: true });
            });

            var saveWidget = function saveWidget(parentElement) {
                if (parentElement.length > 0) {
                    var items = [];
                    $.each(parentElement.find('li'), function (index, widget) {
                        items.push($(widget).find('form').serialize());
                    });
                    $.ajax({
                        type: 'POST',
                        cache: false,
                        url: BWidget.routes.save_widgets_sidebar,
                        data: {
                            items: items,
                            sidebar_id: parentElement.data('id')
                        },
                        beforeSend: function beforeSend() {
                            Botble.showNotice('info', BotbleVariables.languages.notices_msg.processing_request);
                        },
                        success: function success(data) {
                            if (data.error) {
                                Botble.showNotice('error', data.message);
                            } else {
                                parentElement.find('ul').html(data.data);
                                Botble.callScroll($('.list-page-select-widget'));
                                Botble.showNotice('success', data.message);
                            }

                            parentElement.find('.widget_save i').remove();
                        },
                        error: function error(data) {
                            Botble.handleError(data);
                            parentElement.find('.widget_save i').remove();
                        }
                    });
                }
            };

            list_widgets.forEach(function (groupOpts, i) {
                Sortable.create(document.getElementById('wrap-widget-' + (i + 1)), {
                    sort: i !== 0,
                    group: groupOpts,
                    delay: 0, // time in milliseconds to define when the sorting should start
                    disabled: false, // Disables the sortable if set to true.
                    store: null, // @see Store
                    animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
                    handle: '.widget-handle',
                    ghostClass: 'sortable-ghost', // Class name for the drop placeholder
                    chosenClass: 'sortable-chosen', // Class name for the chosen item
                    dataIdAttr: 'data-id',

                    forceFallback: false, // ignore the HTML5 DnD behaviour and force the fallback to kick in
                    fallbackClass: "sortable-fallback", // Class name for the cloned DOM Element when using forceFallback
                    fallbackOnBody: false, // Appends the cloned DOM Element into the Document's Body

                    scroll: true, // or HTMLElement
                    scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
                    scrollSpeed: 10, // px

                    // dragging ended
                    onEnd: function onEnd(evt) {
                        if (evt.from !== evt.to) {
                            saveWidget($(evt.from).closest('.sidebar-item'));
                        }
                        saveWidget($(evt.item).closest('.sidebar-item'));
                    }
                });
            });

            var widget_wrap = $('#wrap-widgets');
            widget_wrap.on('click', '.widget-control-delete', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);

                var widget = _self.closest('li');
                _self.addClass('button-loading');
                $.ajax({
                    type: 'POST',
                    cache: false,
                    url: BWidget.routes.delete,
                    data: {
                        widget_id: widget.data('id'),
                        position: widget.data('position'),
                        sidebar_id: _self.closest('.sidebar-item').data('id')
                    },
                    beforeSend: function beforeSend() {
                        Botble.showNotice('info', BotbleVariables.languages.notices_msg.processing_request);
                    },
                    success: function success(data) {
                        if (data.error) {
                            Botble.showNotice('error', data.message);
                        } else {
                            Botble.showNotice('success', data.message);
                            widget.fadeOut().remove();
                        }
                        widget.find('.widget-control-delete').removeClass('button-loading');
                    },
                    error: function error(data) {
                        Botble.handleError(data);
                        widget.find('.widget-control-delete').removeClass('button-loading');
                    }
                });
            });

            widget_wrap.on('click', '#added-widget .widget-handle', function (event) {
                var _self = $(event.currentTarget);
                _self.closest('li').find('.widget-content').slideToggle(300);
                _self.find('.fa').toggleClass('fa-caret-up');
                _self.find('.fa').toggleClass('fa-caret-down');
            });

            widget_wrap.on('click', '.widget_save', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);
                _self.addClass('button-loading');
                saveWidget(_self.closest('.sidebar-item'));
            });

            Botble.callScroll($('.list-page-select-widget'));
        }
    }]);

    return WidgetManagement;
}();

$(document).ready(function () {
    new WidgetManagement().init();
});

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ })

/******/ });