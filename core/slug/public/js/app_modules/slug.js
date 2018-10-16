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
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ({

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlugBoxManagement = function () {
    function SlugBoxManagement() {
        _classCallCheck(this, SlugBoxManagement);
    }

    _createClass(SlugBoxManagement, [{
        key: 'init',
        value: function init() {
            $('#change_slug').click(function (event) {
                $('.default-slug').unwrap();
                var $slug_input = $('#editable-post-name');
                $slug_input.html('<input type="text" id="new-post-slug" class="form-control" value="' + $slug_input.text() + '" autocomplete="off">');
                $('#edit-slug-box .cancel').show();
                $('#edit-slug-box .save').show();
                $(event.currentTarget).hide();
            });

            $('#edit-slug-box .cancel').click(function () {
                var currentSlug = $('#current-slug').val();
                var $permalink = $('#sample-permalink');
                $permalink.html('<a class="permalink" href="' + $('#slug_id').data('view') + currentSlug.replace('/', '') + '">' + $permalink.html() + '</a>');
                $('#editable-post-name').text(currentSlug);
                $('#edit-slug-box .cancel').hide();
                $('#edit-slug-box .save').hide();
                $('#change_slug').show();
            });

            var createSlug = function createSlug(name, id, exist) {
                $.ajax({
                    url: $('#slug_id').data('url'),
                    type: 'POST',
                    data: {
                        name: name,
                        slug_id: id,
                        screen: $('input[name=slug-screen]').val()
                    },
                    success: function success(data) {
                        var $permalink = $('#sample-permalink');
                        var $slug_id = $('#slug_id');
                        if (exist) {
                            $permalink.find('.permalink').prop('href', $slug_id.data('view') + data.replace('/', ''));
                        } else {
                            $permalink.html('<a class="permalink" target="_blank" href="' + $slug_id.data('view') + data.replace('/', '') + '">' + $permalink.html() + '</a>');
                        }

                        $('.page-url-seo p').text($slug_id.data('view') + data.replace('/', ''));

                        $('#editable-post-name').text(data);
                        $('#current-slug').val(data);
                        $('#edit-slug-box .cancel').hide();
                        $('#edit-slug-box .save').hide();
                        $('#change_slug').show();
                        $('#edit-slug-box').removeClass('hidden');
                    },
                    error: function error(data) {
                        Botble.handleError(data);
                    }
                });
            };

            $('#edit-slug-box .save').click(function () {
                var $post_slug = $('#new-post-slug');
                var name = $post_slug.val();
                var id = $('#slug_id').data('id');
                if (id == null) {
                    id = 0;
                }
                if (name != null && name !== '') {
                    createSlug(name, id, false);
                } else {
                    $post_slug.closest('.form-group').addClass('has-error');
                }
            });

            $('#name').blur(function () {
                if ($('#edit-slug-box').hasClass('hidden')) {
                    var name = $('#name').val();

                    if (name !== null && name !== '') {
                        createSlug(name, 0, true);
                    }
                }
            });
        }
    }]);

    return SlugBoxManagement;
}();

$(document).ready(function () {
    new SlugBoxManagement().init();
});

/***/ })

/******/ });