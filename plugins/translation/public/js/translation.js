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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
/******/ })
/************************************************************************/
/******/ ({

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

(function (e, t) {
    if (e.rails !== t) {
        e.error('jquery-ujs has already been loaded!');
    }
    var n = void 0;
    var r = e(document);
    e.rails = n = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',
        buttonClickSelector: 'button[data-remote], button[data-confirm]',
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',
        disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',
        enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',
        requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',
        fileInputSelector: 'input[type=file]',
        linkDisableSelector: 'a[data-disable-with]',
        buttonDisableSelector: 'button[data-remote][data-disable-with]',
        CSRFProtection: function CSRFProtection(t) {
            var n = e('meta[name="csrf-token"]').attr('content');
            if (n) {
                t.setRequestHeader('X-CSRF-Token', n);
            }
        },
        refreshCSRFTokens: function refreshCSRFTokens() {
            var t = e('meta[name=csrf-token]').attr('content');
            var n = e('meta[name=csrf-param]').attr('content');
            e('form input[name="' + n + '"]').val(t);
        },
        fire: function fire(t, n, r) {
            var i = e.Event(n);
            t.trigger(i, r);
            return i.result !== false;
        },
        confirm: function (_confirm) {
            function confirm(_x) {
                return _confirm.apply(this, arguments);
            }

            confirm.toString = function () {
                return _confirm.toString();
            };

            return confirm;
        }(function (e) {
            return confirm(e);
        }),
        ajax: function ajax(t) {
            return e.ajax(t);
        },
        href: function href(e) {
            return e.attr('href');
        },
        handleRemote: function handleRemote(r) {
            var i = void 0,
                s = void 0,
                o = void 0,
                u = void 0,
                a = void 0,
                f = void 0,
                l = void 0,
                c = void 0;
            if (n.fire(r, 'ajax:before')) {
                u = r.data('cross-domain');
                a = u === t ? null : u;
                f = r.data('with-credentials') || null;
                l = r.data('type') || e.ajaxSettings && e.ajaxSettings.dataType;
                if (r.is('form')) {
                    i = r.attr('method');
                    s = r.attr('action');
                    o = r.serializeArray();
                    var h = r.data('ujs:submit-button');
                    if (h) {
                        o.push(h);
                        r.data('ujs:submit-button', null);
                    }
                } else if (r.is(n.inputChangeSelector)) {
                    i = r.data('method');
                    s = r.data('url');
                    o = r.serialize();
                    if (r.data('params')) o = o + '&' + r.data('params');
                } else if (r.is(n.buttonClickSelector)) {
                    i = r.data('method') || 'get';
                    s = r.data('url');
                    o = r.serialize();
                    if (r.data('params')) o = o + '&' + r.data('params');
                } else {
                    i = r.data('method');
                    s = n.href(r);
                    o = r.data('params') || null;
                }
                c = {
                    type: i || 'GET', data: o, dataType: l, beforeSend: function beforeSend(e, i) {
                        if (i.dataType === t) {
                            e.setRequestHeader('accept', '*/*;q=0.5, ' + i.accepts.script);
                        }
                        if (n.fire(r, 'ajax:beforeSend', [e, i])) {
                            r.trigger('ajax:send', e);
                        } else {
                            return false;
                        }
                    }, success: function success(e, t, n) {
                        r.trigger('ajax:success', [e, t, n]);
                    }, complete: function complete(e, t) {
                        r.trigger('ajax:complete', [e, t]);
                    }, error: function error(e, t, n) {
                        r.trigger('ajax:error', [e, t, n]);
                    }, crossDomain: a
                };
                if (f) {
                    c.xhrFields = { withCredentials: f };
                }
                if (s) {
                    c.url = s;
                }
                return n.ajax(c);
            } else {
                return false;
            }
        },
        handleMethod: function handleMethod(r) {
            var i = n.href(r),
                s = r.data('method'),
                o = r.attr('target'),
                u = e('meta[name=csrf-token]').attr('content'),
                a = e('meta[name=csrf-param]').attr('content'),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            if (a !== t && u !== t) {
                l += '<input name="' + a + '" value="' + u + '" type="hidden" />';
            }
            if (o) {
                f.attr('target', o);
            }
            f.hide().append(l).appendTo('body');
            f.submit();
        },
        formElements: function formElements(t, n) {
            return t.is('form') ? e(t[0].elements).filter(n) : t.find(n);
        },
        disableFormElements: function disableFormElements(t) {
            n.formElements(t, n.disableSelector).each(function (index, el) {
                n.disableFormElement(e(el));
            });
        },
        disableFormElement: function disableFormElement(e) {
            var t = e.is('button') ? 'html' : 'val';
            e.data('ujs:enable-with', e[t]());
            e[t](e.data('disable-with'));
            e.prop('disabled', true);
        },
        enableFormElements: function enableFormElements(t) {
            n.formElements(t, n.enableSelector).each(function (index, el) {
                n.enableFormElement(e(el));
            });
        },
        enableFormElement: function enableFormElement(e) {
            var t = e.is('button') ? 'html' : 'val';
            if (e.data('ujs:enable-with')) e[t](e.data('ujs:enable-with'));
            e.prop('disabled', false);
        },
        allowAction: function allowAction(e) {
            var t = e.data('confirm'),
                r = false,
                i = void 0;
            if (!t) {
                return true;
            }
            if (n.fire(e, 'confirm')) {
                r = n.confirm(t);
                i = n.fire(e, 'confirm:complete', [r]);
            }
            return r && i;
        },
        blankInputs: function blankInputs(t, n, r) {
            var i = e(),
                s = void 0,
                o = void 0,
                u = n || 'input,textarea',
                a = t.find(u);
            a.each(function (index, el) {
                s = e(el);
                o = s.is('input[type=checkbox],input[type=radio]') ? s.is(':checked') : s.val();
                if (!o === !r) {
                    if (s.is("input[type=radio]") && a.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) {
                        return true;
                    }
                    i = i.add(s);
                }
            });
            return i.length ? i : false;
        },
        nonBlankInputs: function nonBlankInputs(e, t) {
            return n.blankInputs(e, t, true);
        },
        stopEverything: function stopEverything(t) {
            e(t.target).trigger('ujs:everythingStopped');
            t.stopImmediatePropagation();
            return false;
        },
        disableElement: function disableElement(e) {
            e.data('ujs:enable-with', e.html());
            e.html(e.data('disable-with'));
            e.bind('click.railsDisable', function (e) {
                return n.stopEverything(e);
            });
        },
        enableElement: function enableElement(e) {
            if (e.data('ujs:enable-with') !== t) {
                e.html(e.data('ujs:enable-with'));
                e.removeData('ujs:enable-with');
            }
            e.unbind('click.railsDisable');
        }
    };
    if (n.fire(r, 'rails:attachBindings')) {
        e.ajaxPrefilter(function (e, t, r) {
            if (!e.crossDomain) {
                n.CSRFProtection(r);
            }
        });
        r.delegate(n.linkDisableSelector, 'ajax:complete', function () {
            n.enableElement(e(this));
        });
        r.delegate(n.buttonDisableSelector, 'ajax:complete', function () {
            n.enableFormElement(e(this));
        });
        r.delegate(n.linkClickSelector, 'click.rails', function (r) {
            var i = e(this),
                s = i.data('method'),
                o = i.data('params'),
                u = r.metaKey || r.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(r);
            if (!u && i.is(n.linkDisableSelector)) n.disableElement(i);
            if (i.data('remote') !== t) {
                if (u && (!s || s === 'GET') && !o) {
                    return true;
                }
                var a = n.handleRemote(i);
                if (a === false) {
                    n.enableElement(i);
                } else {
                    a.error(function () {
                        n.enableElement(i);
                    });
                }
                return false;
            } else if (i.data('method')) {
                n.handleMethod(i);
                return false;
            }
        });
        r.delegate(n.buttonClickSelector, 'click.rails', function (t) {
            var r = e(this);
            if (!n.allowAction(r)) return n.stopEverything(t);
            if (r.is(n.buttonDisableSelector)) n.disableFormElement(r);
            var i = n.handleRemote(r);
            if (i === false) {
                n.enableFormElement(r);
            } else {
                i.error(function () {
                    n.enableFormElement(r);
                });
            }
            return false;
        });
        r.delegate(n.inputChangeSelector, 'change.rails', function (t) {
            var r = e(this);
            if (!n.allowAction(r)) return n.stopEverything(t);
            n.handleRemote(r);
            return false;
        });
        r.delegate(n.formSubmitSelector, 'submit.rails', function (r) {
            var i = e(this),
                s = i.data('remote') !== t,
                o = void 0,
                u = void 0;
            if (!n.allowAction(i)) return n.stopEverything(r);
            if (i.attr('novalidate') == t) {
                o = n.blankInputs(i, n.requiredInputSelector);
                if (o && n.fire(i, 'ajax:aborted:required', [o])) {
                    return n.stopEverything(r);
                }
            }
            if (s) {
                u = n.nonBlankInputs(i, n.fileInputSelector);
                if (u) {
                    setTimeout(function () {
                        n.disableFormElements(i);
                    }, 13);
                    var a = n.fire(i, 'ajax:aborted:file', [u]);
                    if (!a) {
                        setTimeout(function () {
                            n.enableFormElements(i);
                        }, 13);
                    }
                    return a;
                }
                n.handleRemote(i);
                return false;
            } else {
                setTimeout(function () {
                    n.disableFormElements(i);
                }, 13);
            }
        });
        r.delegate(n.formInputClickSelector, 'click.rails', function (t) {
            var r = e(this);
            if (!n.allowAction(r)) return n.stopEverything(t);
            var i = r.attr('name'),
                s = i ? { name: i, value: r.val() } : null;
            r.closest('form').data('ujs:submit-button', s);
        });
        r.delegate(n.formSubmitSelector, 'ajax:send.rails', function (t) {
            if (this == t.target) n.disableFormElements(e(this));
        });
        r.delegate(n.formSubmitSelector, 'ajax:complete.rails', function (t) {
            if (this == t.target) n.enableFormElements(e(this));
        });
        e(function () {
            n.refreshCSRFTokens();
        });
    }
})(jQuery);

jQuery(document).ready(function ($) {

    $('.editable').editable().on('hidden', function (e, reason) {
        var locale = $(event.currentTarget).data('locale');
        if (reason === 'save') {
            $(event.currentTarget).removeClass('status-0').addClass('status-1');
        }
        if (reason === 'save' || reason === 'nochange') {
            var $next = $(event.currentTarget).closest('tr').next().find('.editable.locale-' + locale);
            setTimeout(function () {
                $next.editable('show');
            }, 300);
        }
    });

    $('.group-select').on('change', function (event) {
        var group = $(event.currentTarget).val();
        if (group) {
            window.location.href = route('translations.group.view') + $(event.currentTarget).val();
        } else {
            window.location.href = route('translations.list');
        }
    });

    $('a.delete-key').click(function (event) {
        event.preventDefault();
        var row = $(event.currentTarget).closest('tr');
        var url = $(event.currentTarget).attr('href');
        var id = row.attr('id');
        $.post(url, { id: id }, function () {
            row.remove();
        });
    });

    $('.form-import').on('ajax:success', function (e, data) {
        $('div.success-import strong.counter').text(data.counter);
        $('div.success-import').slideDown();
    });

    $('.form-find').on('ajax:success', function (e, data) {
        $('div.success-find strong.counter').text(data.counter);
        $('div.success-find').slideDown();
    });

    $('.form-publish').on('ajax:success', function () {
        $('div.success-publish').slideDown();
    });
});

/***/ })

/******/ });