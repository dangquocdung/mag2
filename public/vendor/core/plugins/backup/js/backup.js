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
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ({

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),

/***/ 121:
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackupManagement = function () {
    function BackupManagement() {
        _classCallCheck(this, BackupManagement);
    }

    _createClass(BackupManagement, [{
        key: 'init',
        value: function init() {
            var table_backup = $('#table-backups');
            table_backup.on('click', '.deleteDialog', function (event) {
                event.preventDefault();

                $('.delete-crud-entry').data('section', $(event.currentTarget).data('section'));
                $('.modal-confirm-delete').modal('show');
            });

            table_backup.on('click', '.restoreBackup', function (event) {
                event.preventDefault();
                $('#restore-backup-button').data('section', $(event.currentTarget).data('section'));
                $('#restore-backup-modal').modal('show');
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
                            table_backup.find('a[data-section="' + deleteURL + '"]').closest('tr').remove();
                            Botble.showNotice('success', data.message);
                        }
                    },
                    error: function error(data) {
                        Botble.handleError(data);
                    }
                });
            });

            $('#restore-backup-button').on('click', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);
                _self.addClass('button-loading');

                $.ajax({
                    url: _self.data('section'),
                    type: 'GET',
                    success: function success(data) {
                        _self.removeClass('button-loading');
                        _self.closest('.modal').modal('hide');

                        if (data.error) {
                            Botble.showNotice('error', data.message);
                        } else {
                            Botble.showNotice('success', data.message);
                            window.location.reload();
                        }
                    },
                    error: function error(data) {
                        _self.removeClass('button-loading');
                        Botble.handleError(data);
                    }
                });
            });

            $(document).on('click', '#generate_backup', function (event) {
                event.preventDefault();
                $('#name').val('');
                $('#description').val('');
                $('#create-backup-modal').modal('show');
            });

            $('#create-backup-modal').on('click', '#create-backup-button', function (event) {
                event.preventDefault();
                var _self = $(event.currentTarget);
                _self.addClass('button-loading');

                var name = $('#name').val();
                var description = $('#description').val();
                var error = false;
                if (name === '' || name === null) {
                    error = true;
                    Botble.showNotice('error', 'Backup name is required!');
                }
                if (description === '' || description === null) {
                    error = true;
                    Botble.showNotice('error', 'Backup description is required!');
                }

                if (!error) {
                    $.ajax({
                        url: $('div[data-route-create]').data('route-create'),
                        type: 'POST',
                        data: {
                            name: name,
                            description: description
                        },
                        success: function success(data) {
                            _self.removeClass('button-loading');
                            _self.closest('.modal').modal('hide');

                            if (data.error) {
                                Botble.showNotice('error', data.message);
                            } else {
                                table_backup.find('.no-backup-row').remove();
                                table_backup.find('tbody').append(data.data);
                                Botble.showNotice('success', data.message);
                            }
                        },
                        error: function error(data) {
                            _self.removeClass('button-loading');
                            Botble.handleError(data);
                        }
                    });
                } else {
                    _self.removeClass('button-loading');
                }
            });
        }
    }]);

    return BackupManagement;
}();

$(document).ready(function () {
    new BackupManagement().init();
});

/***/ })

/******/ });