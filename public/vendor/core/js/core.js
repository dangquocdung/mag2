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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var resizeHandlers = [];

var App = function () {
    function App() {
        _classCallCheck(this, App);

        // IE mode
        this.isRTL = false;
        this.isIE8 = false;
        this.isIE9 = false;
        this.isIE10 = false;
        this.$body = $('body');
        this.$html = $('html');

        //Core handlers
        this.handleInit(); // initialize core letiables

        this.handleOnResize(); // set and handle responsive

        //Handle group element heights
        App.addResizeHandler(this.handleHeight); // handle auto calculating height on window resize

        //UI Component handlers
        this.handleTabs(); // handle tabs
        this.handleTooltips(); // handle bootstrap tooltips
        this.handleModals(); // handle modals

        // Hacks
        this.handleFixInputPlaceholderForIE(); //IE8 & IE9 input placeholder issue fix
    }

    // wrApper function to scroll(focus) to an element


    _createClass(App, [{
        key: 'isRTL',


        //check RTL mode
        value: function isRTL() {
            return this.isRTL;
        }
    }, {
        key: 'handleInit',


        // initializes main settings
        value: function handleInit() {

            if (this.$body.css('direction') === 'rtl') {
                this.isRTL = true;
            }

            this.isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
            this.isIE9 = !!navigator.userAgent.match(/MSIE 9.0/);
            this.isIE10 = !!navigator.userAgent.match(/MSIE 10.0/);

            if (this.isIE10) {
                this.$html.addClass('ie10'); // detect IE10 version
            }

            if (this.isIE10 || this.isIE9 || this.isIE8) {
                this.$html.addClass('ie'); // detect IE10 version
            }
        }
    }, {
        key: 'handleTabs',
        value: function handleTabs() {
            //activate tab if tab id provided in the URL
            if (encodeURI(location.hash)) {
                var tab_id = encodeURI(location.hash.substr(1));
                var $tab = $('a[href="#' + tab_id + '"]');
                $tab.parents('.tab-pane:hidden').each(function (index, el) {
                    $('a[href="#' + $(el).attr('id') + '"]').click();
                });
                $tab.click();
            }
        }
    }, {
        key: 'handleModals',
        value: function handleModals() {
            var current = this;
            // fix stackable modal issue: when 2 or more modals opened, closing one of modal will remove .modal-open class. 
            this.$body.on('hide.bs.modal', function () {
                var $modals = $('.modal:visible');
                if ($modals.length > 1 && current.$html.hasClass('modal-open') === false) {
                    current.$html.addClass('modal-open');
                } else if ($modals.length <= 1) {
                    current.$html.removeClass('modal-open');
                }
            });

            // fix page scrollbars issue
            this.$body.on('show.bs.modal', '.modal', function (event) {
                if ($(event.currentTarget).hasClass('modal-scroll')) {
                    current.$body.addClass('modal-open-noscroll');
                }
            });

            // fix page scrollbars issue
            this.$body.on('hidden.bs.modal', '.modal', function () {
                current.$body.removeClass('modal-open-noscroll');
            });

            // remove ajax content and remove cache on modal closed 
            this.$body.on('hidden.bs.modal', '.modal:not(.modal-cached)', function (event) {
                $(event.currentTarget).removeData('bs.modal');
            });
        }

        // Handles Bootstrap Tooltips.

    }, {
        key: 'handleTooltips',
        value: function handleTooltips() {
            // global tooltips
            $('.tooltips').tooltip();

            // portlet tooltips
            $('.portlet > .portlet-title .fullscreen').tooltip({
                trigger: 'hover',
                container: 'body',
                title: 'Fullscreen'
            });
            $('.portlet > .portlet-title > .tools > .reload').tooltip({
                trigger: 'hover',
                container: 'body',
                title: 'Reload'
            });
            $('.portlet > .portlet-title > .tools > .remove').tooltip({
                trigger: 'hover',
                container: 'body',
                title: 'Remove'
            });
            $('.portlet > .portlet-title > .tools > .config').tooltip({
                trigger: 'hover',
                container: 'body',
                title: 'Settings'
            });
            $('.portlet > .portlet-title > .tools > .collapse, .portlet > .portlet-title > .tools > .expand').tooltip({
                trigger: 'hover',
                container: 'body',
                title: 'Collapse/Expand'
            });
        }

        // Fix input placeholder issue for IE8 and IE9

    }, {
        key: 'handleFixInputPlaceholderForIE',
        value: function handleFixInputPlaceholderForIE() {
            //fix html5 placeholder attribute for ie7 & ie8
            if (this.isIE8 || this.isIE9) {
                // ie8 & ie9
                // this is html5 placeholder fix for inputs, inputs with placeholder-no-fix class will be skipped(e.g: we need this for password fields)
                $('input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)').each(function (index, el) {
                    var input = $(el);

                    if (input.val() === '' && input.attr('placeholder') !== '') {
                        input.addClass('placeholder').val(input.attr('placeholder'));
                    }

                    input.focus(function () {
                        if (input.val() === input.attr('placeholder')) {
                            input.val('');
                        }
                    });

                    input.blur(function () {
                        if (input.val() === '' || input.val() === input.attr('placeholder')) {
                            input.val(input.attr('placeholder'));
                        }
                    });
                });
            }
        }

        // handle group element heights

    }, {
        key: 'handleHeight',
        value: function handleHeight() {
            $('[data-auto-height]').each(function (index, el) {
                var parent = $(el);
                var items = $('[data-height]', parent);
                var height = 0;
                var mode = parent.attr('data-mode');
                var offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0);

                items.each(function (key, sub) {
                    if ($(sub).attr('data-height') === 'height') {
                        $(sub).css('height', '');
                    } else {
                        $(sub).css('min-height', '');
                    }

                    var height_ = mode === 'base-height' ? $(sub).outerHeight() : $(sub).outerHeight(true);
                    if (height_ > height) {
                        height = height_;
                    }
                });

                height = height + offset;

                items.each(function (key, sub) {
                    if ($(sub).attr('data-height') === 'height') {
                        $(sub).css('height', height);
                    } else {
                        $(sub).css('min-height', height);
                    }
                });

                if (parent.attr('data-related')) {
                    $(parent.attr('data-related')).css('height', parent.height());
                }
            });
        }

        //public function to add callback a function which will be called on window resize

    }, {
        key: 'handleOnResize',
        value: function handleOnResize() {
            var windowWidth = $(window).width();
            var resize = void 0;
            if (this.isIE8) {
                var currheight = void 0;
                $(window).resize(function () {
                    if (currheight === document.documentElement.clientHeight) {
                        return; //quite event since only body resized not window.
                    }
                    if (resize) {
                        clearTimeout(resize);
                    }
                    resize = setTimeout(function () {
                        App._runResizeHandlers();
                    }, 50); // wait 50ms until window resize finishes.                
                    currheight = document.documentElement.clientHeight; // store last body client height
                });
            } else {
                $(window).resize(function () {
                    if ($(window).width() !== windowWidth) {
                        windowWidth = $(window).width();
                        if (resize) {
                            clearTimeout(resize);
                        }
                        resize = setTimeout(function () {
                            App._runResizeHandlers();
                        }, 50); // wait 50ms until window resize finishes.
                    }
                });
            }
        }
    }], [{
        key: 'scrollTo',
        value: function scrollTo(el, offeset) {
            var pos = el && el.length > 0 ? el.offset().top : 0;

            if (el) {
                if ($('body').hasClass('page-header-fixed')) {
                    pos = pos - $('.page-header').height();
                } else if ($('body').hasClass('page-header-top-fixed')) {
                    pos = pos - $('.page-header-top').height();
                } else if ($('body').hasClass('page-header-menu-fixed')) {
                    pos = pos - $('.page-header-menu').height();
                }
                pos = pos + (offeset ? offeset : -1 * el.height());
            }

            $('html,body').animate({
                scrollTop: pos
            }, 'slow');
        }

        // function to scroll to the top

    }, {
        key: 'scrollTop',
        value: function scrollTop() {
            App.scrollTo();
        }

        // To get the correct viewport width based on  http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/

    }, {
        key: 'getViewPort',
        value: function getViewPort() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        }
    }, {
        key: 'getResponsiveBreakpoint',
        value: function getResponsiveBreakpoint(size) {
            // bootstrap responsive breakpoints
            var sizes = {
                'xs': 480, // extra small
                'sm': 768, // small
                'md': 992, // medium
                'lg': 1200 // large
            };

            return sizes[size] ? sizes[size] : 0;
        }
    }, {
        key: 'addResizeHandler',
        value: function addResizeHandler(func) {
            resizeHandlers.push(func);
        }

        //public functon to call _runresizeHandlers

    }, {
        key: 'runResizeHandlers',
        value: function runResizeHandlers() {
            App._runResizeHandlers();
        }

        // runs callback functions set by App.addResponsiveHandler().

    }, {
        key: '_runResizeHandlers',
        value: function _runResizeHandlers() {
            // reinitialize other subscribed elements
            for (var i = 0; i < resizeHandlers.length; i++) {
                var each = resizeHandlers[i];
                each.call();
            }
        }
    }]);

    return App;
}();

$(document).ready(function () {
    new App();
    window.App = App;
});

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66);


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(67);
__webpack_require__(68);

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Layout = function () {
    function Layout() {
        _classCallCheck(this, Layout);

        this.resBreakpointMd = __WEBPACK_IMPORTED_MODULE_0__app__["App"].getResponsiveBreakpoint('md');
        this.$body = $('body');

        this.initSidebar(null);
        this.initContent();
        this.initFooter();
    }

    // Set proper height for sidebar and content. The content and sidebar height must be synced always.


    _createClass(Layout, [{
        key: 'handleSidebarAndContentHeight',
        value: function handleSidebarAndContentHeight() {
            var content = $('.page-content');
            var sidebar = $('.page-sidebar .sidebar');
            var header = $('.page-header-top');
            var footer = $('.page-footer');
            var body = this.$body;
            var height = void 0;

            if (body.hasClass('page-footer-fixed') === true && body.hasClass('page-sidebar-fixed') === false) {
                var available_height = __WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().height - footer.outerHeight() - header.outerHeight();
                var sidebar_height = sidebar.outerHeight();
                if (sidebar_height > available_height) {
                    available_height = sidebar_height + footer.outerHeight();
                }
                if (content.height() < available_height) {
                    content.css('min-height', available_height);
                }
            } else {
                if (body.hasClass('page-sidebar-fixed')) {
                    height = this._calculateFixedSidebarViewportHeight();
                    if (body.hasClass('page-footer-fixed') === false) {
                        height = height - footer.outerHeight();
                    }
                } else {
                    var headerHeight = header.outerHeight();
                    var footerHeight = footer.outerHeight();

                    if (__WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().width < this.resBreakpointMd) {
                        height = __WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().height - headerHeight - footerHeight;
                    } else {
                        height = sidebar.height() + 20;
                    }

                    if (height + headerHeight + footerHeight <= __WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().height) {
                        height = __WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().height - headerHeight - footerHeight + 34;
                    }
                }
                content.css('min-height', height);
            }
        }

        // Handle sidebar menu

    }, {
        key: 'handleSidebarMenu',
        value: function handleSidebarMenu() {
            var current = this;

            // offcanvas mobile menu
            $('.page-sidebar-mobile-offcanvas .responsive-toggler').click(function (e) {
                current.$body.toggleClass('page-sidebar-mobile-offcanvas-open');
                e.preventDefault();
                e.stopPropagation();
            });

            if (this.$body.hasClass('page-sidebar-mobile-offcanvas')) {
                $(document).on('click', function (e) {
                    if (current.$body.hasClass('page-sidebar-mobile-offcanvas-open')) {
                        if ($(e.target).closest('.page-sidebar-mobile-offcanvas .responsive-toggler').length === 0 && $(e.target).closest('.page-sidebar-wrapper').length === 0) {
                            current.$body.removeClass('page-sidebar-mobile-offcanvas-open');
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                });
            }

            // handle sidebar link click
            $('.page-sidebar-menu').on('click', 'li > a.nav-toggle, li > a > span.nav-toggle', function (e) {
                var that = $(e.currentTarget).closest('.nav-item').children('.nav-link');
                var menu = $('.page-sidebar-menu');

                if (__WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().width >= current.resBreakpointMd && !menu.attr('data-initialized') && current.$body.hasClass('page-sidebar-closed') && that.parent('li').parent('.page-sidebar-menu').length === 1) {
                    return;
                }

                var hasSubMenu = that.next().hasClass('sub-menu');

                if (__WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().width >= current.resBreakpointMd && that.parents('.page-sidebar-menu-hover-submenu').length === 1) {
                    // exit of hover sidebar menu
                    return;
                }

                if (hasSubMenu === false) {
                    if (__WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().width < current.resBreakpointMd && $('.page-sidebar').hasClass('in')) {
                        // close the menu on mobile view while laoding a page
                        $('.page-header .responsive-toggler').click();
                    }
                    return;
                }

                var parent = that.parent().parent();
                var the = that;
                var sub = that.next();

                var autoScroll = menu.data('auto-scroll');
                var slideSpeed = parseInt(menu.data('slide-speed'));
                var keepExpand = menu.data('keep-expanded');

                if (!keepExpand) {
                    parent.children('li.open').children('a').children('.arrow').removeClass('open');
                    parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed);
                    parent.children('li.open').removeClass('open');
                }

                var slideOffeset = -200;

                if (sub.is(':visible')) {
                    $('.arrow', the).removeClass('open');
                    the.parent().removeClass('open');
                    sub.slideUp(slideSpeed, function () {
                        if (autoScroll === true && current.$body.hasClass('page-sidebar-closed') === false) {
                            __WEBPACK_IMPORTED_MODULE_0__app__["App"].scrollTo(the, slideOffeset);
                        }
                        current.handleSidebarAndContentHeight();
                    });
                } else if (hasSubMenu) {
                    $('.arrow', the).addClass('open');
                    the.parent().addClass('open');
                    sub.slideDown(slideSpeed, function () {
                        if (autoScroll === true && current.$body.hasClass('page-sidebar-closed') === false) {
                            __WEBPACK_IMPORTED_MODULE_0__app__["App"].scrollTo(the, slideOffeset);
                        }
                        current.handleSidebarAndContentHeight();
                    });
                }

                e.preventDefault();
            });

            // handle scrolling to top on responsive menu toggler click when header is fixed for mobile view
            $(document).on('click', '.page-header-fixed-mobile .page-header .responsive-toggler', function () {
                __WEBPACK_IMPORTED_MODULE_0__app__["App"].scrollTop();
            });

            // handle sidebar hover effect
            this.handleFixedSidebarHoverEffect();
        }

        // Helper function to calculate sidebar height for fixed sidebar layout.

    }, {
        key: '_calculateFixedSidebarViewportHeight',
        value: function _calculateFixedSidebarViewportHeight() {
            var sidebarHeight = __WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().height - $('.page-header').outerHeight(true);
            if (this.$body.hasClass('page-footer-fixed')) {
                sidebarHeight = sidebarHeight - $('.page-footer').outerHeight();
            }

            return sidebarHeight;
        }

        // Handles fixed sidebar

    }, {
        key: 'handleFixedSidebar',
        value: function handleFixedSidebar() {
            var menu = $('.page-sidebar-menu');

            this.handleSidebarAndContentHeight();

            if (__WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().width >= this.resBreakpointMd && !this.$body.hasClass('page-sidebar-menu-not-fixed')) {
                menu.attr('data-height', this._calculateFixedSidebarViewportHeight());
                this.handleSidebarAndContentHeight();
            }
        }

        // Handles sidebar toggler to close/hide the sidebar.

    }, {
        key: 'handleFixedSidebarHoverEffect',
        value: function handleFixedSidebarHoverEffect() {
            var current = this;
            if (this.$body.hasClass('page-sidebar-fixed')) {
                $('.page-sidebar').on('mouseenter', function (event) {
                    if (current.$body.hasClass('page-sidebar-closed')) {
                        $(event.currentTarget).find('.page-sidebar-menu').removeClass('page-sidebar-menu-closed');
                    }
                }).on('mouseleave', function (event) {
                    if (current.$body.hasClass('page-sidebar-closed')) {
                        $(event.currentTarget).find('.page-sidebar-menu').addClass('page-sidebar-menu-closed');
                    }
                });
            }
        }

        // Hanles sidebar toggler

    }, {
        key: 'handleSidebarToggler',
        value: function handleSidebarToggler() {
            // handle sidebar show/hide
            var body = this.$body;
            this.$body.on('click', '.sidebar-toggler', function (event) {
                event.preventDefault();
                var sidebar = $('.page-sidebar');
                var sidebarMenu = $('.page-sidebar-menu');

                if (body.hasClass('page-sidebar-closed')) {
                    body.removeClass('page-sidebar-closed');
                    sidebarMenu.removeClass('page-sidebar-menu-closed');
                } else {
                    body.addClass('page-sidebar-closed');
                    sidebarMenu.addClass('page-sidebar-menu-closed');
                    if (body.hasClass('page-sidebar-fixed')) {
                        sidebarMenu.trigger('mouseleave');
                    }
                }

                $(window).trigger('resize');
            });
        }

        // Handles Bootstrap Tabs.

    }, {
        key: 'handleTabs',
        value: function handleTabs() {
            var current = this;
            // fix content height on tab click
            this.$body.on('shown.bs.tab', 'a[data-toggle="tab"]', function () {
                current.handleSidebarAndContentHeight();
            });
        }
    }, {
        key: 'handleGoTop',


        // Handles the go to top button at the footer
        value: function handleGoTop() {
            var offset = 300;
            var duration = 500;

            if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                // ios supported
                $(window).bind('touchend touchcancel touchleave', function (event) {
                    if ($(event.currentTarget).scrollTop() > offset) {
                        $('.scroll-to-top').fadeIn(duration);
                    } else {
                        $('.scroll-to-top').fadeOut(duration);
                    }
                });
            } else {
                // general
                $(window).scroll(function (event) {
                    if ($(event.currentTarget).scrollTop() > offset) {
                        $('.scroll-to-top').fadeIn(duration);
                    } else {
                        $('.scroll-to-top').fadeOut(duration);
                    }
                });
            }

            $('.scroll-to-top').click(function (e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, duration);
                return false;
            });
        }

        // Handle 100% height elements(block, portlet, etc)

    }, {
        key: 'handle100HeightContent',
        value: function handle100HeightContent() {

            var current = this;
            $('.full-height-content').each(function (index, el) {
                var target = $(el);
                var height = void 0;

                height = __WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().height - $('.page-header').outerHeight(true) - $('.page-footer').outerHeight(true) - $('.page-title').outerHeight(true) - $('.page-bar').outerHeight(true);

                if (target.hasClass('portlet')) {
                    var portletBody = target.find('.portlet-body');

                    height = height - target.find('.portlet-title').outerHeight(true) - parseInt(target.find('.portlet-body').css('padding-top')) - parseInt(target.find('.portlet-body').css('padding-bottom')) - 5;

                    if (__WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().width >= current.resBreakpointMd && target.hasClass('full-height-content-scrollable')) {
                        height = height - 35;
                        portletBody.find('.full-height-content-body').css('height', height);
                    } else {
                        portletBody.css('min-height', height);
                    }
                } else {
                    if (__WEBPACK_IMPORTED_MODULE_0__app__["App"].getViewPort().width >= current.resBreakpointMd && target.hasClass('full-height-content-scrollable')) {
                        height = height - 35;
                        target.find('.full-height-content-body').css('height', height);
                    } else {
                        target.css('min-height', height);
                    }
                }
            });
        }
    }, {
        key: 'initSidebar',
        value: function initSidebar() {
            //layout handlers
            this.handleFixedSidebar(); // handles fixed sidebar menu
            this.handleSidebarMenu(); // handles main menu
            this.handleSidebarToggler(); // handles sidebar hide/show

            __WEBPACK_IMPORTED_MODULE_0__app__["App"].addResizeHandler(this.handleFixedSidebar); // reinitialize fixed sidebar on window resize
        }
    }, {
        key: 'initContent',
        value: function initContent() {
            this.handle100HeightContent(); // handles 100% height elements(block, portlet, etc)
            this.handleTabs(); // handle bootstrap tabs

            __WEBPACK_IMPORTED_MODULE_0__app__["App"].addResizeHandler(this.handleSidebarAndContentHeight); // recalculate sidebar & content height on window resize
            __WEBPACK_IMPORTED_MODULE_0__app__["App"].addResizeHandler(this.handle100HeightContent); // reinitialize content height on window resize
        }
    }, {
        key: 'initFooter',
        value: function initFooter() {
            this.handleGoTop(); //handles scroll to top functionality in the footer
        }
    }]);

    return Layout;
}();

$(document).ready(function () {
    new Layout();
    window.Layout = Layout;
});

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Botble = function () {
    function Botble() {
        _classCallCheck(this, Botble);

        this.countCharacter();
        this.manageSidebar();
        this.handleWayPoint();
        this.handlePortletTools();
        Botble.initResources();
        Botble.handleCounterUp();
        Botble.initMediaIntegrate();
    }

    _createClass(Botble, [{
        key: 'countCharacter',
        value: function countCharacter() {
            $.fn.charCounter = function (max, settings) {
                max = max || 100;
                settings = $.extend({
                    container: '<span></span>',
                    classname: 'charcounter',
                    format: '(%1 ' + BotbleVariables.languages.system.character_remain + ')',
                    pulse: true,
                    delay: 0
                }, settings);
                var p = void 0,
                    timeout = void 0;

                var count = function count(el, container) {
                    el = $(el);
                    if (el.val().length > max) {
                        el.val(el.val().substring(0, max));
                        if (settings.pulse && !p) {
                            pulse(container, true);
                        }
                    }
                    if (settings.delay > 0) {
                        if (timeout) {
                            window.clearTimeout(timeout);
                        }
                        timeout = window.setTimeout(function () {
                            container.html(settings.format.replace(/%1/, max - el.val().length));
                        }, settings.delay);
                    } else {
                        container.html(settings.format.replace(/%1/, max - el.val().length));
                    }
                };

                var pulse = function pulse(el, again) {
                    if (p) {
                        window.clearTimeout(p);
                        p = null;
                    }
                    el.animate({
                        opacity: 0.1
                    }, 100, function () {
                        $(el).animate({
                            opacity: 1.0
                        }, 100);
                    });
                    if (again) {
                        p = window.setTimeout(function () {
                            pulse(el);
                        }, 200);
                    }
                };

                return this.each(function (index, el) {
                    var container = void 0;
                    if (!settings.container.match(/^<.+>$/)) {
                        // use existing element to hold counter message
                        container = $(settings.container);
                    } else {
                        // append element to hold counter message (clean up old element first)
                        $(el).next('.' + settings.classname).remove();
                        container = $(settings.container).insertAfter(el).addClass(settings.classname);
                    }
                    $(el).unbind('.charCounter').bind('keydown.charCounter', function () {
                        count(el, container);
                    }).bind('keypress.charCounter', function () {
                        count(el, container);
                    }).bind('keyup.charCounter', function () {
                        count(el, container);
                    }).bind('focus.charCounter', function () {
                        count(el, container);
                    }).bind('mouseover.charCounter', function () {
                        count(el, container);
                    }).bind('mouseout.charCounter', function () {
                        count(el, container);
                    }).bind('paste.charCounter', function () {
                        setTimeout(function () {
                            count(el, container);
                        }, 10);
                    });
                    if (el.addEventListener) {
                        el.addEventListener('input', function () {
                            count(el, container);
                        }, false);
                    }
                    count(el, container);
                });
            };

            $(document).on('click', 'input[data-counter], textarea[data-counter]', function (event) {
                $(event.currentTarget).charCounter($(event.currentTarget).data('counter'), {
                    container: '<small></small>'
                });
            });
        }
    }, {
        key: 'manageSidebar',
        value: function manageSidebar() {
            var body = $('body');
            var navigation = $('.navigation');
            var sidebar_content = $('.sidebar-content');

            navigation.find('li.active').parents('li').addClass('active');
            navigation.find('li').has('ul').children('a').parent('li').addClass('has-ul');

            $(document).on('click', '.sidebar-toggle.d-none', function (event) {
                event.preventDefault();

                body.toggleClass('sidebar-narrow');
                body.toggleClass('page-sidebar-closed');

                if (body.hasClass('sidebar-narrow')) {
                    navigation.children('li').children('ul').css('display', '');

                    sidebar_content.delay().queue(function () {
                        $(event.currentTarget).show().addClass('animated fadeIn').clearQueue();
                    });
                } else {
                    navigation.children('li').children('ul').css('display', 'none');
                    navigation.children('li.active').children('ul').css('display', 'block');

                    sidebar_content.delay().queue(function () {
                        $(event.currentTarget).show().addClass('animated fadeIn').clearQueue();
                    });
                }
            });
        }
    }, {
        key: 'handleWayPoint',
        value: function handleWayPoint() {
            if ($('#waypoint').length > 0) {
                new Waypoint({
                    element: document.getElementById('waypoint'),
                    handler: function handler(direction) {
                        if (direction === 'down') {
                            $('.form-actions-fixed-top').removeClass('hidden');
                        } else {
                            $('.form-actions-fixed-top').addClass('hidden');
                        }
                    }
                });
            }
        }
    }, {
        key: 'handlePortletTools',
        value: function handlePortletTools() {
            // handle portlet remove

            // handle portlet fullscreen
            $('body').on('click', '.portlet > .portlet-title .fullscreen', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);
                var portlet = _self.closest('.portlet');
                if (portlet.hasClass('portlet-fullscreen')) {
                    _self.removeClass('on');
                    portlet.removeClass('portlet-fullscreen');
                    $('body').removeClass('page-portlet-fullscreen');
                    portlet.children('.portlet-body').css('height', 'auto');
                } else {
                    var height = Botble.getViewPort().height - portlet.children('.portlet-title').outerHeight() - parseInt(portlet.children('.portlet-body').css('padding-top')) - parseInt(portlet.children('.portlet-body').css('padding-bottom'));

                    _self.addClass('on');
                    portlet.addClass('portlet-fullscreen');
                    $('body').addClass('page-portlet-fullscreen');
                    portlet.children('.portlet-body').css('height', height);
                }
            });

            $('body').on('click', '.portlet > .portlet-title > .tools > .collapse, .portlet .portlet-title > .tools > .expand', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);
                var el = _self.closest('.portlet').children('.portlet-body');
                if (_self.hasClass('collapse')) {
                    _self.removeClass('collapse').addClass('expand');
                    el.slideUp(200);
                } else {
                    _self.removeClass('expand').addClass('collapse');
                    el.slideDown(200);
                }
            });
        }
    }], [{
        key: 'blockUI',
        value: function blockUI(options) {
            options = $.extend(true, {}, options);
            var html = '';
            if (options.animate) {
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '">' + '<div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' + '</div>';
            } else if (options.iconOnly) {
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><img src="/vendor/core/images/loading-spinner-blue.gif"></div>';
            } else if (options.textOnly) {
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
            } else {
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><img src="/vendor/core/images/loading-spinner-blue.gif"><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
            }

            if (options.target) {
                // element blocking
                var el = $(options.target);
                if (el.height() <= $(window).height()) {
                    options.cenrerY = true;
                }
                el.block({
                    message: html,
                    baseZ: options.zIndex ? options.zIndex : 1000,
                    centerY: options.cenrerY !== undefined ? options.cenrerY : false,
                    css: {
                        top: '10%',
                        border: '0',
                        padding: '0',
                        backgroundColor: 'none'
                    },
                    overlayCSS: {
                        backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                        opacity: options.boxed ? 0.05 : 0.1,
                        cursor: 'wait'
                    }
                });
            } else {
                // page blocking
                $.blockUI({
                    message: html,
                    baseZ: options.zIndex ? options.zIndex : 1000,
                    css: {
                        border: '0',
                        padding: '0',
                        backgroundColor: 'none'
                    },
                    overlayCSS: {
                        backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                        opacity: options.boxed ? 0.05 : 0.1,
                        cursor: 'wait'
                    }
                });
            }
        }
    }, {
        key: 'unblockUI',
        value: function unblockUI(target) {
            if (target) {
                $(target).unblock({
                    onUnblock: function onUnblock() {
                        $(target).css('position', '');
                        $(target).css('zoom', '');
                    }
                });
            } else {
                $.unblockUI();
            }
        }
    }, {
        key: 'showNotice',
        value: function showNotice(messageType, message) {
            toastr.clear();

            toastr.options = {
                closeButton: true,
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

            switch (messageType) {
                case 'error':
                    messageHeader = BotbleVariables.languages.notices_msg.error;
                    break;
                case 'success':
                    messageHeader = BotbleVariables.languages.notices_msg.success;
                    break;
            }
            toastr[messageType](message, messageHeader);
        }
    }, {
        key: 'handleError',
        value: function handleError(data) {
            if (typeof data.errors !== 'undefined' && !_.isArray(data.errors)) {
                Botble.handleValidationError(data.errors);
            } else {
                if (typeof data.responseJSON !== 'undefined') {
                    if (typeof data.responseJSON.errors !== 'undefined') {
                        if (data.status === 422) {
                            Botble.handleValidationError(data.responseJSON.errors);
                        }
                    } else if (typeof data.responseJSON.message !== 'undefined') {
                        Botble.showNotice('error', data.responseJSON.message);
                    } else {
                        $.each(data.responseJSON, function (index, el) {
                            $.each(el, function (key, item) {
                                Botble.showNotice('error', item);
                            });
                        });
                    }
                } else {
                    Botble.showNotice('error', data.statusText);
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
                if ($input.closest('.next-input--stylized').length) {
                    $input.closest('.next-input--stylized').addClass('field-has-error');
                } else {
                    $input.addClass('field-has-error');
                }

                var $input_array = $('*[name$="[' + index + ']"]');

                if ($input_array.closest('.next-input--stylized').length) {
                    $input_array.closest('.next-input--stylized').addClass('field-has-error');
                } else {
                    $input_array.addClass('field-has-error');
                }
            });
            Botble.showNotice('error', message);
        }
    }, {
        key: 'initDatePicker',
        value: function initDatePicker(element) {
            if (jQuery().bootstrapDP) {
                var format = $(document).find(element).data('date-format');
                if (!format) {
                    format = 'yyyy-mm-dd';
                }
                $(document).find(element).bootstrapDP({
                    maxDate: 0,
                    changeMonth: true,
                    changeYear: true,
                    autoclose: true,
                    dateFormat: format
                });
            }
        }
    }, {
        key: 'initResources',
        value: function initResources() {
            if (jQuery().select2) {
                $(document).find('.select-multiple').select2({
                    width: '100%',
                    allowClear: true
                });
                $(document).find('.select-search-full').select2({
                    width: '100%'
                });
                $(document).find('.select-full').select2({
                    width: '100%',
                    minimumResultsForSearch: -1
                });
            }

            if (jQuery().timepicker) {
                if (jQuery().timepicker) {

                    $('.timepicker-default').timepicker({
                        autoclose: true,
                        showSeconds: true,
                        minuteStep: 1,
                        defaultTime: false
                    });

                    $('.timepicker-no-seconds').timepicker({
                        autoclose: true,
                        minuteStep: 5,
                        defaultTime: false
                    });

                    $('.timepicker-24').timepicker({
                        autoclose: true,
                        minuteStep: 5,
                        showSeconds: false,
                        showMeridian: false,
                        defaultTime: false
                    });
                }
            }

            if (jQuery().inputmask) {
                $(document).find('.input-mask-number').inputmask({
                    alias: 'numeric',
                    rightAlign: false,
                    digits: 2,
                    groupSeparator: ',',
                    placeholder: '0',
                    autoGroup: true,
                    autoUnmask: true,
                    removeMaskOnSubmit: true
                });
            }

            if (jQuery().colorpicker) {
                $('.color-picker').colorpicker({});
            }

            if (jQuery().fancybox) {
                $('.iframe-btn').fancybox({
                    width: '900px',
                    height: '700px',
                    type: 'iframe',
                    autoScale: false,
                    openEffect: 'none',
                    closeEffect: 'none',
                    overlayShow: true,
                    overlayOpacity: 0.7
                });
                $('.fancybox').fancybox({
                    openEffect: 'none',
                    closeEffect: 'none',
                    overlayShow: true,
                    overlayOpacity: 0.7,
                    helpers: {
                        media: {}
                    }
                });
            }
            $('.tip').tooltip({ placement: 'top' });

            if (jQuery().areYouSure) {
                $('form').areYouSure();
            }

            Botble.initDatePicker('.datepicker');
            Botble.callScroll($('.list-item-checkbox'));

            if (jQuery().textareaAutoSize) {
                $('textarea.textarea-auto-height').textareaAutoSize();
            }
        }
    }, {
        key: 'numberFormat',
        value: function numberFormat(number, decimals, dec_point, thousands_sep) {
            // *     example 1: number_format(1234.56);
            // *     returns 1: '1,235'
            // *     example 2: number_format(1234.56, 2, ',', ' ');
            // *     returns 2: '1 234,56'
            // *     example 3: number_format(1234.5678, 2, '.', '');
            // *     returns 3: '1234.57'
            // *     example 4: number_format(67, 2, ',', '.');
            // *     returns 4: '67,00'
            // *     example 5: number_format(1000);
            // *     returns 5: '1,000'
            // *     example 6: number_format(67.311, 2);
            // *     returns 6: '67.31'
            // *     example 7: number_format(1000.55, 1);
            // *     returns 7: '1,000.6'
            // *     example 8: number_format(67000, 5, ',', '.');
            // *     returns 8: '67.000,00000'
            // *     example 9: number_format(0.9, 0);
            // *     returns 9: '1'
            // *    example 10: number_format('1.20', 2);
            // *    returns 10: '1.20'
            // *    example 11: number_format('1.20', 4);
            // *    returns 11: '1.2000'
            // *    example 12: number_format('1.2000', 3);
            // *    returns 12: '1.200'
            var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
                dec = typeof dec_point === 'undefined' ? '.' : dec_point,
                toFixedFix = function toFixedFix(n, prec) {
                // Fix for IE parseFloat(0.55).toFixed(0) = 0;
                var k = Math.pow(10, prec);
                return Math.round(n * k) / k;
            },
                s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }
            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }
            return s.join(dec);
        }
    }, {
        key: 'callScroll',
        value: function callScroll(obj) {
            obj.mCustomScrollbar({
                axis: 'yx',
                theme: 'minimal-dark',
                scrollButtons: {
                    enable: true
                },
                callbacks: {
                    whileScrolling: function whileScrolling() {
                        obj.find('.tableFloatingHeaderOriginal').css({
                            'top': -this.mcs.top + 'px'
                        });
                    }
                }
            });
            obj.stickyTableHeaders({ scrollableArea: obj, 'fixedOffset': 2 });
        }
    }, {
        key: 'handleCounterUp',
        value: function handleCounterUp() {
            if (!$().counterUp) {
                return;
            }

            $('[data-counter="counterup"]').counterUp({
                delay: 10,
                time: 1000
            });
        }
    }, {
        key: 'initMediaIntegrate',
        value: function initMediaIntegrate() {

            if (jQuery().rvMedia) {

                $('[data-type="rv-media-standard-alone-button"]').rvMedia({
                    multiple: false,
                    onSelectFiles: function onSelectFiles(files, $el) {
                        $($el.data('target')).val(files[0].url);
                    }
                });

                $(document).find('.btn_gallery').rvMedia({
                    multiple: false,
                    onSelectFiles: function onSelectFiles(files, $el) {
                        switch ($el.data('action')) {
                            case 'media-insert-ckeditor':
                                $.each(files, function (index, file) {
                                    var link = file.url;
                                    if (file.type === 'youtube') {
                                        link = link.replace('watch?v=', 'embed/');
                                        CKEDITOR.instances[$el.data('result')].insertHtml('<iframe width="420" height="315" src="' + link + '" frameborder="0" allowfullscreen></iframe>');
                                    } else if (file.type === 'image') {
                                        CKEDITOR.instances[$el.data('result')].insertHtml('<img src="' + link + '" alt="' + file.name + '" />');
                                    } else {
                                        CKEDITOR.instances[$el.data('result')].insertHtml('<a href="' + link + '">' + file.name + '</a>');
                                    }
                                });

                                break;
                            case 'media-insert-tinymce':
                                $.each(files, function (index, file) {
                                    var link = file.url;
                                    var html = '';
                                    if (file.type === 'youtube') {
                                        link = link.replace('watch?v=', 'embed/');
                                        html = '<iframe width="420" height="315" src="' + link + '" frameborder="0" allowfullscreen></iframe>';
                                    } else if (file.type === 'image') {
                                        html = '<img src="' + link + '" alt="' + file.name + '" />';
                                    } else {
                                        html = '<a href="' + link + '">' + file.name + '</a>';
                                    }
                                    tinymce.activeEditor.execCommand('mceInsertContent', false, html);
                                });
                                break;
                            case 'select-image':
                                var firstImage = _.first(files);
                                $el.closest('.image-box').find('.image-data').val(firstImage.url);
                                $el.closest('.image-box').find('.preview_image').attr('src', firstImage.thumb);
                                $el.closest('.image-box').find('.preview-image-wrapper').show();
                                break;
                            case 'attachment':
                                var firstAttachment = _.first(files);
                                $el.closest('.attachment-wrapper').find('.attachment-url').val(firstAttachment.url);
                                $('.attachment-details').html('<a href="' + firstAttachment.url + '" target="_blank">' + firstAttachment.url + '</a>');
                                break;
                        }
                    }
                });

                $(document).on('click', '.btn_remove_image', function (event) {
                    event.preventDefault();
                    $(event.currentTarget).closest('.image-box').find('.preview-image-wrapper').hide();
                    $(event.currentTarget).closest('.image-box').find('.image-data').val('');
                });

                $(document).on('click', '.btn_remove_attachment', function (event) {
                    event.preventDefault();
                    $(event.currentTarget).closest('.attachment-wrapper').find('.attachment-details a').remove();
                    $(event.currentTarget).closest('.attachment-wrapper').find('.attachment-url').val('');
                });
            }
        }
    }, {
        key: 'getViewPort',
        value: function getViewPort() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        }
    }, {
        key: 'initCodeEditor',
        value: function initCodeEditor(id) {
            $(document).find('#' + id).wrap('<div id="wrapper_' + id + '"><div class="container_content_codemirror"></div> </div>');
            $('#wrapper_' + id).append('<div class="handle-tool-drag" id="tool-drag_' + id + '"></div>');
            CodeMirror.fromTextArea(document.getElementById(id), {
                extraKeys: { 'Ctrl-Space': 'autocomplete' },
                lineNumbers: true,
                mode: 'css',
                autoRefresh: true,
                lineWrapping: true
            });

            $('.handle-tool-drag').mousedown(function (event) {
                var _self = $(event.currentTarget);
                _self.attr('data-start_h', _self.parent().find('.CodeMirror').height()).attr('data-start_y', event.pageY);
                $('body').attr('data-dragtool', _self.attr('id')).on('mousemove', Botble.onDragTool);
                $(window).on('mouseup', Botble.onReleaseTool);
            });
        }
    }, {
        key: 'onDragTool',
        value: function onDragTool(e) {
            var ele = '#' + $('body').attr('data-dragtool');
            var start_h = parseInt($(ele).attr('data-start_h'));

            $(ele).parent().find('.CodeMirror').css('height', Math.max(200, start_h + e.pageY - $(ele).attr('data-start_y')));
        }
    }, {
        key: 'onReleaseTool',
        value: function onReleaseTool() {
            $('body').off('mousemove', Botble.onDragTool);
            $(window).off('mouseup', Botble.onReleaseTool);
        }
    }]);

    return Botble;
}();

if (jQuery().datepicker && jQuery().datepicker.noConflict) {
    $.fn.bootstrapDP = $.fn.datepicker.noConflict();
}

$(document).ready(function () {
    new Botble();
    window.Botble = Botble;
});

/***/ })

/******/ });