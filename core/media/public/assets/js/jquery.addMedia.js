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
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
/******/ })
/************************************************************************/
/******/ ({

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(118);


/***/ }),

/***/ 118:
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* ========================================================================
 * AddMedia.js v1.0
 * Requires Botble Media
 * ======================================================================== */

+function ($) {
    'use strict';

    /**
     * @param element
     * @param options
     * @constructor
     */

    var AddMedia = function AddMedia(element, options) {
        this.options = options;
        $(element).rvMedia({
            multiple: true,
            onSelectFiles: function onSelectFiles(files, $el) {
                if (typeof files !== 'undefined') {
                    switch ($el.data('editor')) {
                        case 'summernote':
                            handleInsertImagesForSummerNote($el, files);
                            break;
                        case 'wysihtml5':
                            var editor = $(options.target).data('wysihtml5').editor;
                            handleInsertImagesForWysihtml5Editor(editor, files);
                            break;
                        case 'ckeditor':
                            handleForCkeditor($el, files);
                            break;
                        case 'tinymce':
                            handleForTinyMce(files);
                            break;
                    }
                }
            }
        });
    };

    AddMedia.VERSION = '1.1.0';

    /**
     * Insert images to summernote editor
     * @param $el
     * @param files
     */
    function handleInsertImagesForSummerNote($el, files) {
        if (files.length === 0) {
            return;
        }

        var instance = $el.data('target');
        for (var i = 0; i < files.length; i++) {
            if (files[i].type === 'youtube' || files[i].type === 'video') {
                var link = files[i].full_url;
                link = link.replace('watch?v=', 'embed/');
                $(instance).summernote('pasteHTML', '<iframe width="420" height="315" src="' + link + '" frameborder="0" allowfullscreen></iframe>');
            } else if (files[i].type === 'image') {
                $(instance).summernote('insertImage', files[i].full_url, files[i].basename);
            } else {
                $(instance).summernote('pasteHTML', '<a href="' + files[i].full_url + '">' + files[i].full_url + '</a>');
            }
        }
    }

    /**
     * Insert images to Wysihtml5 editor
     * @param editor
     * @param files
     */
    function handleInsertImagesForWysihtml5Editor(editor, files) {
        if (files.length === 0) {
            return;
        }

        // insert images for the wysihtml5 editor
        var s = '';
        for (var i = 0; i < files.length; i++) {
            if (files[i].type === 'youtube' || files[i].type === 'video') {
                var link = files[i].full_url;
                link = link.replace('watch?v=', 'embed/');
                s += '<iframe width="420" height="315" src="' + link + '" frameborder="0" allowfullscreen></iframe>';
            } else if (files[i].type === 'image') {
                s += '<img src="' + files[i].full_url + '">';
            } else {
                s += '<a href="' + files[i].full_url + '">' + files[i].full_url + '</a>';
            }
        }

        if (editor.getValue().length > 0) {
            var length = editor.getValue();
            editor.composer.commands.exec('insertHTML', s);
            if (editor.getValue() === length) {
                editor.setValue(editor.getValue() + s);
            }
        } else {
            editor.setValue(editor.getValue() + s);
        }
    }

    /**
     * @param $el
     * @param files
     */
    function handleForCkeditor($el, files) {
        $.each(files, function (index, file) {
            var link = file.full_url;
            var instance = $el.data('target').replace('#', '');
            if (file.type === 'youtube' || file.type === 'video') {
                link = link.replace('watch?v=', 'embed/');
                CKEDITOR.instances[instance].insertHtml('<iframe width="420" height="315" src="' + link + '" frameborder="0" allowfullscreen></iframe>');
            } else if (file.type === 'image') {
                CKEDITOR.instances[instance].insertHtml('<img src="' + link + '" alt="' + file.name + '" />');
            } else {
                CKEDITOR.instances[instance].insertHtml('<a href="' + link + '">' + file.name + '</a>');
            }
        });
    }

    /**
     * @param files
     */
    function handleForTinyMce(files) {
        $.each(files, function (index, file) {
            var link = file.url;
            var html = '';
            if (file.type === 'youtube' || file.type === 'video') {
                link = link.replace('watch?v=', 'embed/');
                html = '<iframe width="420" height="315" src="' + link + '" frameborder="0" allowfullscreen></iframe>';
            } else if (file.type === 'image') {
                html = '<img src="' + link + '" alt="' + file.name + '" />';
            } else {
                html = '<a href="' + link + '">' + file.name + '</a>';
            }
            tinymce.activeEditor.execCommand('mceInsertContent', false, html);
        });
    }

    /**
     * @param option
     */
    function callAction(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.media');
            var options = $.extend({}, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option);
            if (!data) $this.data('bs.media', data = new AddMedia(this, options));
        });
    }

    $.fn.addMedia = callAction;
    $.fn.addMedia.Constructor = AddMedia;

    $(window).on('load', function () {
        $('[data-type="rv-media"]').each(function () {
            var $addMedia = $(this);
            callAction.call($addMedia, $addMedia.data());
        });
    });
}(jQuery);

/***/ })

/******/ });