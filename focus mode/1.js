/* tslint:disable */

/* -------------------------------------------------- */

/*      Start of Webpack Hot Extension Middleware     */

/* ================================================== */

/*  This will be converted into a lodash templ., any  */

/*  external argument must be provided using it       */

/* -------------------------------------------------- */
(function (window) {
  var injectionContext = {
    browser: null
  };
  (function () {
    ""||(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("webextension-polyfill", ["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.browser = mod.exports;
  }
})(this, function (module) {
  /* webextension-polyfill - v0.5.0 - Thu Sep 26 2019 22:22:26 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({ resolve, reject }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);

                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;

                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({ resolve, reject }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });

              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });

      // Keep track if the deprecation warning has been logged at least once.
      let loggedSendResponseDeprecationWarning = false;

      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;

          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }
              didCallSendResponse = true;
              resolve(response);
            };
          });

          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });

      const wrappedSendMessageCallback = ({ reject, resolve }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, { resolve, reject });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 })
        }
      };
      const settingMetadata = {
        clear: { minArgs: 1, maxArgs: 1 },
        get: { minArgs: 1, maxArgs: 1 },
        set: { minArgs: 1, maxArgs: 1 }
      };
      apiMetadata.privacy = {
        network: {
          networkPredictionEnabled: settingMetadata,
          webRTCIPHandlingPolicy: settingMetadata
        },
        services: {
          passwordSavingEnabled: settingMetadata
        },
        websites: {
          hyperlinkAuditingEnabled: settingMetadata,
          referrersEnabled: settingMetadata
        }
      };

      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    }

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map
"";
  }).bind(injectionContext)();
  var browser = injectionContext.browser;
  var signals = JSON.parse('{"SIGN_CHANGE":"SIGN_CHANGE","SIGN_RELOAD":"SIGN_RELOAD","SIGN_RELOADED":"SIGN_RELOADED","SIGN_LOG":"SIGN_LOG","SIGN_CONNECT":"SIGN_CONNECT"}');
  var config = JSON.parse('{"RECONNECT_INTERVAL":2000,"SOCKET_ERR_CODE_REF":"https://tools.ietf.org/html/rfc6455#section-7.4.1"}');
  var reloadPage = "true" === "true";
  var wsHost = "ws://localhost:9090";
  var SIGN_CHANGE = signals.SIGN_CHANGE,
      SIGN_RELOAD = signals.SIGN_RELOAD,
      SIGN_RELOADED = signals.SIGN_RELOADED,
      SIGN_LOG = signals.SIGN_LOG,
      SIGN_CONNECT = signals.SIGN_CONNECT;
  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,
      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;
  var extension = browser.extension,
      runtime = browser.runtime,
      tabs = browser.tabs;
  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //

  var formatter = function formatter(msg) {
    return "[ WER: ".concat(msg, " ]");
  };

  var logger = function logger(msg) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
    return console[level](formatter(msg));
  };

  var timeFormatter = function timeFormatter(date) {
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }; // ========================== Called only on content scripts ============================== //


  function contentScriptWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref) {
      var type = _ref.type,
          payload = _ref.payload;

      switch (type) {
        case SIGN_RELOAD:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================== Called only on background scripts ============================= //


  function backgroundWorker(socket) {
    runtime.onMessage.addListener(function (action, sender) {
      if (action.type === SIGN_CONNECT) {
        return Promise.resolve(formatter("Connected to Extension Hot Reloader"));
      }

      return true;
    });
    socket.addEventListener("message", function (_ref2) {
      var data = _ref2.data;

      var _JSON$parse = JSON.parse(data),
          type = _JSON$parse.type,
          payload = _JSON$parse.payload;

      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {
        tabs.query({
          status: "complete"
        }).then(function (loadedTabs) {
          loadedTabs.forEach(function (tab) {
            return tab.id && tabs.sendMessage(tab.id, {
              type: SIGN_RELOAD
            });
          });
          socket.send(JSON.stringify({
            type: SIGN_RELOADED,
            payload: formatter("".concat(timeFormatter(new Date()), " - ").concat(manifest.name, " successfully reloaded"))
          }));
          runtime.reload();
        });
      } else {
        runtime.sendMessage({
          type: type,
          payload: payload
        });
      }
    });
    socket.addEventListener("close", function (_ref3) {
      var code = _ref3.code;
      logger("Socket connection closed. Code ".concat(code, ". See more in ").concat(SOCKET_ERR_CODE_REF), "warn");
      var intId = setInterval(function () {
        logger("Attempting to reconnect (tip: Check if Webpack is running)");
        var ws = new WebSocket(wsHost);

        ws.onerror = function () {
          return logger("Error trying to re-connect. Reattempting in ".concat(RECONNECT_INTERVAL / 1000, "s"), "warn");
        };

        ws.addEventListener("open", function () {
          clearInterval(intId);
          logger("Reconnected. Reloading plugin");
          runtime.reload();
        });
      }, RECONNECT_INTERVAL);
    });
  } // ======================== Called only on extension pages that are not the background ============================= //


  function extensionPageWorker() {
    runtime.sendMessage({
      type: SIGN_CONNECT
    }).then(function (msg) {
      return console.info(msg);
    });
    runtime.onMessage.addListener(function (_ref4) {
      var type = _ref4.type,
          payload = _ref4.payload;

      switch (type) {
        case SIGN_CHANGE:
          logger("Detected Changes. Reloading ...");
          reloadPage && window.location.reload();
          break;

        case SIGN_LOG:
          console.info(payload);
          break;
      }
    });
  } // ======================= Bootstraps the middleware =========================== //


  runtime.reload ? extension.getBackgroundPage() === window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();
})(window);
/* ----------------------------------------------- */

/* End of Webpack Hot Extension Middleware  */

/* ----------------------------------------------- */(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/components/Box/Box.jsx":
/*!************************************!*\
  !*** ./src/components/Box/Box.jsx ***!
  \************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");\n/* harmony import */ var _styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/prop-types */ "./node_modules/@styled-system/prop-types/dist/index.esm.js");\n/* harmony import */ var libs_omitProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! libs/omitProps */ "./src/libs/omitProps.js");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\nvar propsToOmit = [].concat(_toConsumableArray(Object.keys(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__["default"].space)), _toConsumableArray(Object.keys(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__["default"].layout)), _toConsumableArray(Object.keys(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__["default"].flexbox)), _toConsumableArray(Object.keys(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__["default"].position)), _toConsumableArray(Object.keys(_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__["default"].color)));\nvar Box = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(libs_omitProps__WEBPACK_IMPORTED_MODULE_4__["default"])(\'div\', propsToOmit)).withConfig({\n  componentId: "sc-1jyohss-0"\n})(["box-sizing:border-box;", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]);\n/* harmony default export */ __webpack_exports__["default"] = (Box);\n\n//# sourceURL=webpack:///./src/components/Box/Box.jsx?')},"./src/components/Box/index.js":
/*!*************************************!*\
  !*** ./src/components/Box/index.js ***!
  \*************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./src/components/Box/Box.jsx");\n\n/* harmony default export */ __webpack_exports__["default"] = (_Box__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack:///./src/components/Box/index.js?')},"./src/components/BreakButton.jsx":
/*!****************************************!*\
  !*** ./src/components/BreakButton.jsx ***!
  \****************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({\n  componentId: "sc-1mqjkxm-0"\n})(["cursor:pointer;appearance:none;transition:all 250ms;user-select:none;white-space:nowrap;outline:none;width:auto;border-radius:6px;place-items:center;color:", ";font-size:", ";background:transparent;border:none;text-transform:uppercase;padding:8px;margin:0;margin-left:-8px;margin-bottom:-8px;&:hover{background:", ";color:", ";}"], function (props) {\n  return props.theme.button.color;\n}, function (props) {\n  return props.fontSize || \'14px\';\n}, function (props) {\n  return props.theme.button.hover.background;\n}, function (props) {\n  return props.theme.button.hover.color;\n});\n/* harmony default export */ __webpack_exports__["default"] = (StyledButton);\n\n//# sourceURL=webpack:///./src/components/BreakButton.jsx?')},"./src/components/Control/Control.jsx":
/*!********************************************!*\
  !*** ./src/components/Control/Control.jsx ***!
  \********************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n\nvar Control = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({\n  componentId: "ep76ur-0"\n})(["display:inline-flex;align-items:center;justify-content:center;border:none;background-color:transparent;border-radius:50%;padding:5px;margin-left:8px;margin-right:8px;transition:all 0.2s ease-in-out;color:", ";cursor:pointer;outline:none;:hover{background-color:", ";color:", ";}"], function (props) {\n  return props.theme.palette.secondary;\n}, function (props) {\n  return props.theme.deleteButton.background;\n}, function (props) {\n  return props.theme.deleteButton.color;\n});\n/* harmony default export */ __webpack_exports__["default"] = (Control);\n\n//# sourceURL=webpack:///./src/components/Control/Control.jsx?')},"./src/components/Control/index.js":
/*!*****************************************!*\
  !*** ./src/components/Control/index.js ***!
  \*****************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Control */ "./src/components/Control/Control.jsx");\n\n/* harmony default export */ __webpack_exports__["default"] = (_Control__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack:///./src/components/Control/index.js?')},"./src/components/DateLabel/DateLabel.jsx":
/*!************************************************!*\
  !*** ./src/components/DateLabel/DateLabel.jsx ***!
  \************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n\n\nvar Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({\n  componentId: "sc-6f7d7c-0"\n})(["height:20px;display:flex;align-items:center;justify-content:center;color:", ";font-size:11px;letter-spacing:1.8px;font-weight:500;& hr{height:1px;flex-grow:1;background-color:", ";border:none;}& span{padding:0 15px;}"], function (props) {\n  return props.theme.option;\n}, function (props) {\n  return props.theme.option;\n});\n\nvar DateLabel = function DateLabel(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("hr", null));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (DateLabel);\n\n//# sourceURL=webpack:///./src/components/DateLabel/DateLabel.jsx?')},"./src/components/DateLabel/index.js":
/*!*******************************************!*\
  !*** ./src/components/DateLabel/index.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DateLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateLabel */ "./src/components/DateLabel/DateLabel.jsx");\n\n/* harmony default export */ __webpack_exports__["default"] = (_DateLabel__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack:///./src/components/DateLabel/index.js?')},"./src/components/FocusMode/FocusMode.jsx":
/*!************************************************!*\
  !*** ./src/components/FocusMode/FocusMode.jsx ***!
  \************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-icons/feather */ "./node_modules/@styled-icons/feather/index.esm.js");\n/* harmony import */ var components_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Box */ "./src/components/Box/index.js");\n/* harmony import */ var components_Control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Control */ "./src/components/Control/index.js");\n/* harmony import */ var components_DateLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/DateLabel */ "./src/components/DateLabel/index.js");\n/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Input */ "./src/components/Input/index.js");\n/* harmony import */ var components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Switch */ "./src/components/Switch/index.js");\n/* harmony import */ var hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks/useStore */ "./src/hooks/useStore.js");\n/* harmony import */ var hooks_useActive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useActive */ "./src/hooks/useActive.js");\n/* harmony import */ var hooks_useList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks/useList */ "./src/hooks/useList.js");\n/* harmony import */ var hooks_useBreak__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hooks/useBreak */ "./src/hooks/useBreak.js");\n/* harmony import */ var hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hooks/useDarkMode */ "./src/hooks/useDarkMode.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Item */ "./src/components/FocusMode/Item.jsx");\n/* harmony import */ var _URL__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./URL */ "./src/components/FocusMode/URL.jsx");\n/* harmony import */ var components_BreakButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/BreakButton */ "./src/components/BreakButton.jsx");\n/* harmony import */ var components_IconWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/IconWrapper */ "./src/components/IconWrapper.js");\n/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");\n/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _use_it_interval__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @use-it/interval */ "./node_modules/@use-it/interval/dist/index.js");\n/* harmony import */ var _use_it_interval__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_use_it_interval__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_19__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// import TrashIcon from \'assets/icons/trash.svg\';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].span.withConfig({\n  componentId: "jdc8yg-0"\n})(["flex-grow:1;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-left:8px;font-size:12px;"]);\nvar IconButton = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].button.withConfig({\n  componentId: "jdc8yg-1"\n})(["display:inline-flex;align-items:center;justify-content:center;border:none;background-color:transparent;border-radius:4px;padding:8px;margin-bottom:14px;transition:all 0.2s ease-in-out;color:", ";cursor:pointer;outline:none;:hover{background-color:", ";color:", ";}"], function (props) {\n  return props.theme.palette.secondary;\n}, function (props) {\n  return props.theme.darkModeButton.background;\n}, function (props) {\n  return props.theme.darkModeButton.color;\n});\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].h1.withConfig({\n  componentId: "jdc8yg-2"\n})(["font-size:16px;margin:0;margin-left:0.6rem;color:", ";"], function (props) {\n  return props.theme.title;\n});\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].p.withConfig({\n  componentId: "jdc8yg-3"\n})(["font-size:14px;color:", ";margin-top:0;margin-bottom:12px;line-height:1.8;"], function (props) {\n  return props.theme.description;\n});\nvar TimerText = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].p.withConfig({\n  componentId: "jdc8yg-4"\n})(["color:", ";margin-top:0;margin-bottom:12px;line-height:1.8;text-align:center;margin-left:4px;"], function (props) {\n  return props.theme.description;\n});\n\nvar Timer = function Timer(_ref) {\n  var target = _ref.target,\n      setIsBreak = _ref.setIsBreak,\n      setTarget = _ref.setTarget;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(\'\'),\n      _useState2 = _slicedToArray(_useState, 2),\n      timeLeft = _useState2[0],\n      setTimeLeft = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(0),\n      _useState4 = _slicedToArray(_useState3, 2),\n      interval = _useState4[0],\n      setInterval = _useState4[1];\n\n  _use_it_interval__WEBPACK_IMPORTED_MODULE_18___default()(function () {\n    var now = new Date();\n    var isAfterNow = dayjs__WEBPACK_IMPORTED_MODULE_19___default()(target).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_19___default()());\n    var remaining = (new Date(target) - now) / 1000;\n\n    if (!!target) {\n      setInterval(100);\n      var minutes = ~~(remaining / 60);\n      var seconds = ~~(remaining % 60);\n\n      var _timeLeft = "".concat(minutes, ":").concat((\'00\' + seconds).slice(-2));\n\n      setTimeLeft(_timeLeft);\n\n      if (remaining < 0.0.toPrecision(6) && !isAfterNow) {\n        setInterval(null);\n        setIsBreak(false); // stop the timer\n\n        setTarget(undefined);\n      }\n    }\n  }, interval);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(TimerText, null, timeLeft);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {\n  var shouldSync = _ref2.shouldSync;\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(\'\'),\n      _useState6 = _slicedToArray(_useState5, 2),\n      url = _useState6[0],\n      setURL = _useState6[1];\n\n  var _useList = Object(hooks_useList__WEBPACK_IMPORTED_MODULE_8__["default"])({\n    shouldSync: shouldSync\n  }),\n      list = _useList.list,\n      dispatch = _useList.dispatch;\n\n  var _useActive = Object(hooks_useActive__WEBPACK_IMPORTED_MODULE_7__["default"])({\n    shouldSync: shouldSync\n  }),\n      setActive = _useActive.setActive,\n      active = _useActive.active;\n\n  var _useDarkMode = Object(hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_10__["default"])({\n    shouldSync: shouldSync\n  }),\n      setDarkMode = _useDarkMode.setDarkMode,\n      darkMode = _useDarkMode.darkMode;\n\n  var _useBreak = Object(hooks_useBreak__WEBPACK_IMPORTED_MODULE_9__["default"])({\n    shouldSync: shouldSync\n  }),\n      isBreak = _useBreak.isBreak,\n      setIsBreak = _useBreak.setIsBreak,\n      interval = _useBreak.interval,\n      target = _useBreak.target,\n      setTarget = _useBreak.setTarget;\n\n  var handleInputChange = function handleInputChange(_ref3) {\n    var value = _ref3.target.value;\n    return setURL(value);\n  };\n\n  var removeItem = function removeItem(id) {\n    return function () {\n      return dispatch({\n        type: hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["REMOVE_LINK"],\n        payload: id\n      });\n    };\n  };\n\n  var addItem = function addItem(_ref4) {\n    var value = _ref4.target.value,\n        key = _ref4.key;\n\n    if (key.toLowerCase() === \'enter\' && value.trim().length > 0) {\n      dispatch({\n        type: hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["ADD_LINK"],\n        payload: value.trim()\n      });\n      setURL(\'\');\n    }\n  };\n\n  var updateItem = function updateItem(payload) {\n    return dispatch({\n      type: hooks_useStore__WEBPACK_IMPORTED_MODULE_6__["UPDATE_LINK"],\n      payload: payload\n    });\n  };\n\n  var toggle = function toggle() {\n    // if (active) {\n    //   browser.runtime.sendMessage({ type: \'onInactive\' });\n    // } else {\n    //   browser.runtime.sendMessage({ type: \'onActive\' });\n    // }\n    setActive(!active);\n  };\n\n  var handleBreak = /*#__PURE__*/function () {\n    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var target;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setIsBreak(true);\n              _context.next = 3;\n              return webextension_polyfill__WEBPACK_IMPORTED_MODULE_17___default.a.runtime.sendMessage({\n                type: \'onBreak\',\n                interval: interval\n              });\n\n            case 3:\n              target = _context.sent;\n              setTarget(target);\n\n            case 5:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleBreak() {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n\n  var handleResume = function handleResume() {\n    setIsBreak(false);\n    setTarget(undefined);\n    webextension_polyfill__WEBPACK_IMPORTED_MODULE_17___default.a.runtime.sendMessage({\n      type: \'onResume\'\n    });\n  };\n\n  var handleDarkMode = function handleDarkMode() {\n    setDarkMode(!darkMode);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {\n    var isDarkMode = window.matchMedia && window.matchMedia(\'(prefers-color-scheme: dark)\').matches;\n\n    if (active) {\n      if (isDarkMode) {\n        webextension_polyfill__WEBPACK_IMPORTED_MODULE_17___default.a.browserAction.setIcon({\n          path: \'./assets/img/circle-dark-mode.png\'\n        });\n      } else {\n        webextension_polyfill__WEBPACK_IMPORTED_MODULE_17___default.a.browserAction.setIcon({\n          path: \'./assets/img/circle.png\'\n        });\n      }\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    display: "flex",\n    flexDirection: "column",\n    height: "520px"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    display: "flex",\n    justifyContent: "space-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    width: "100%"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    display: "flex",\n    alignItems: "center",\n    mb: \'10px\',\n    width: "100%",\n    justifyContent: "space-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    display: "flext",\n    alignItems: "center"\n  }, isBreak ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_IconWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__["Coffee"], {\n    size: 18,\n    strokeWidth: 2,\n    color: darkMode ? \'#dae1fb\' : \'#3055e8\'\n  })) : active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_IconWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__["Circle"], {\n    size: 18,\n    strokeWidth: 2,\n    color: darkMode ? \'#dae1fb\' : \'#3055e8\'\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_IconWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__["Hexagon"], {\n    size: 18,\n    strokeWidth: 2,\n    color: darkMode ? \'#dae1fb\' : \'#3055e8\'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(Heading, null, active ? isBreak ? "You\'re on a break" : \'Focus mode is on\' : \'Focus mode is off\')), !isBreak && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Switch__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    onChange: toggle,\n    checked: active\n  })), active ? isBreak ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    display: "flex",\n    width: "100%",\n    alignItems: "baseline"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(Description, null, "Focus mode will resume in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(Timer, {\n    target: target,\n    setIsBreak: setIsBreak,\n    setTarget: setTarget\n  }), \' \') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(Description, null, "Distracting websites are now blocked") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(Description, null, "Turn on to block distracting websites"), isBreak ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_BreakButton__WEBPACK_IMPORTED_MODULE_15__["default"], {\n    onClick: handleResume,\n    fontSize: "12px"\n  }, "Resume now") : active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_BreakButton__WEBPACK_IMPORTED_MODULE_15__["default"], {\n    onClick: handleBreak,\n    fontSize: "12px"\n  }, "Take a ", interval, " minutes break") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    height: "22px"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    mb: 3,\n    mt: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_DateLabel__WEBPACK_IMPORTED_MODULE_3__["default"], null, "OPTIONS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    flexShrink: "0",\n    mb: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    placeholder: \'Enter a distracting website link\',\n    onKeyPress: addItem,\n    value: url,\n    onChange: handleInputChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    overflowY: "auto",\n    flexGrow: "1",\n    mb: 4\n  }, list.map(function (_ref6) {\n    var id = _ref6.id,\n        url = _ref6.url;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_Item__WEBPACK_IMPORTED_MODULE_13__["default"], {\n      key: id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_URL__WEBPACK_IMPORTED_MODULE_14__["default"], {\n      id: id,\n      title: url,\n      value: url,\n      update: updateItem\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Control__WEBPACK_IMPORTED_MODULE_2__["default"], {\n      onClick: removeItem(id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__["Trash"], {\n      size: 16\n    })));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(components_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    w: "100%",\n    display: "flex",\n    justifyContent: "flex-end"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(IconButton, {\n    onClick: handleDarkMode\n  }, darkMode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_11__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__["Sun"], {\n    size: 16,\n    strokeWidth: 1.8\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(Text, null, "Light Mode")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_11__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__["Moon"], {\n    strokeWidth: 1.8,\n    size: 16\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(Text, null, "Dark Mode")))));\n});\n\n//# sourceURL=webpack:///./src/components/FocusMode/FocusMode.jsx?')},"./src/components/FocusMode/Item.jsx":
/*!*******************************************!*\
  !*** ./src/components/FocusMode/Item.jsx ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({\n  componentId: "sc-11dbmms-0"\n})(["color:", ";display:flex;align-items:center;:not(:last-child){margin-bottom:10px;}"], function (props) {\n  return props.theme.color.primary;\n});\n/* harmony default export */ __webpack_exports__["default"] = (Item);\n\n//# sourceURL=webpack:///./src/components/FocusMode/Item.jsx?')},"./src/components/FocusMode/URL.jsx":
/*!******************************************!*\
  !*** ./src/components/FocusMode/URL.jsx ***!
  \******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n\n\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({\n  componentId: "k8t39z-0"\n})(["flex-grow:1;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-left:12px;color:", ";"], function (props) {\n  return props.theme.list.color;\n});\n\nvar Enhanced = function Enhanced(_ref) {\n  var value = _ref.value;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Text, null, value);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (Enhanced);\n\n//# sourceURL=webpack:///./src/components/FocusMode/URL.jsx?')},"./src/components/FocusMode/index.js":
/*!*******************************************!*\
  !*** ./src/components/FocusMode/index.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FocusMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FocusMode */ "./src/components/FocusMode/FocusMode.jsx");\n\n/* harmony default export */ __webpack_exports__["default"] = (_FocusMode__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack:///./src/components/FocusMode/index.js?')},"./src/components/IconWrapper.js":
/*!***************************************!*\
  !*** ./src/components/IconWrapper.js ***!
  \***************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n\nvar IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({\n  componentId: "nq39ge-0"\n})(["width:32px;height:32px;margin-right:4px;border-radius:50%;background-color:", ";display:flex;align-items:center;justify-content:center;"], function (props) {\n  return props.theme.icon.background;\n});\n/* harmony default export */ __webpack_exports__["default"] = (IconWrapper);\n\n//# sourceURL=webpack:///./src/components/IconWrapper.js?')},"./src/components/Input/Input.jsx":
/*!****************************************!*\
  !*** ./src/components/Input/Input.jsx ***!
  \****************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var hooks_useAutoFocus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useAutoFocus */ "./src/hooks/useAutoFocus.js");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nvar BaseInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({\n  componentId: "sc-1ix5qzh-0"\n})(["background-color:", ";border:none;border-radius:4px;height:35px;padding-left:10px;color:", ";width:100%;font-size:14px;box-sizing:border-box;border:2px solid transparent;transition:all 0.01s;::placeholder{color:", ";}:focus{border:2px solid ", ";outline:none;}"], function (props) {\n  return props.theme.input.background;\n}, function (props) {\n  return props.theme.input.color;\n}, function (props) {\n  return props.theme.cool_grey[400];\n}, function (props) {\n  return props.theme.main[500];\n});\n\nvar Input = function Input(props, ref) {\n  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {\n    return inputRef.current;\n  });\n  Object(hooks_useAutoFocus__WEBPACK_IMPORTED_MODULE_2__["default"])(inputRef);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(BaseInput, _extends({}, props, {\n    ref: inputRef\n  }));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(Input));\n\n//# sourceURL=webpack:///./src/components/Input/Input.jsx?')},"./src/components/Input/index.js":
/*!***************************************!*\
  !*** ./src/components/Input/index.js ***!
  \***************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./src/components/Input/Input.jsx");\n\n/* harmony default export */ __webpack_exports__["default"] = (_Input__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack:///./src/components/Input/index.js?')},"./src/components/Switch/Switch.jsx":
/*!******************************************!*\
  !*** ./src/components/Switch/Switch.jsx ***!
  \******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");\n/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toggle */ "./node_modules/react-toggle/dist/component/index.js");\n/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toggle__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nvar Div = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(\'div\').withConfig({\n  componentId: "sc-1bk9l3r-0"\n})([".react-toggle{touch-action:pan-x;display:inline-block;position:relative;cursor:pointer;background-color:transparent;border:0;padding:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;}.react-toggle-screenreader-only{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;}.react-toggle--disabled{cursor:not-allowed;opacity:0.5;-webkit-transition:opacity 0.25s;transition:opacity 0.25s;}.react-toggle-track{width:41px;height:24px;padding:0;border-radius:30px;background-color:", ";-webkit-transition:all 0.2s ease;-moz-transition:all 0.2s ease;transition:all 0.2s ease;}.react-toggle--checked .react-toggle-track{background-color:", ";}.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track{background-color:", ";}.react-toggle-track-check{position:absolute;width:14px;height:10px;top:0px;bottom:0px;margin-top:auto;margin-bottom:auto;line-height:0;left:8px;opacity:0;-webkit-transition:opacity 0.25s ease;-moz-transition:opacity 0.25s ease;transition:opacity 0.25s ease;}.react-toggle--checked .react-toggle-track-check{opacity:1;-webkit-transition:opacity 0.25s ease;-moz-transition:opacity 0.25s ease;transition:opacity 0.25s ease;}.react-toggle-track-x{position:absolute;width:10px;height:10px;top:0px;bottom:0px;margin-top:auto;margin-bottom:auto;line-height:0;right:10px;opacity:1;-webkit-transition:opacity 0.25s ease;-moz-transition:opacity 0.25s ease;transition:opacity 0.25s ease;}.react-toggle--checked .react-toggle-track-x{opacity:0;}.react-toggle-thumb{transition:all 0.5s cubic-bezier(0.23,1,0.32,1) 0ms;position:absolute;top:1px;left:1px;width:22px;height:22px;border:1px solid #bdbdbd;border-radius:50%;background-color:#f3f4f6;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.25s ease;-moz-transition:all 0.25s ease;transition:all 0.25s ease;}.react-toggle--checked .react-toggle-thumb{left:18px;border-color:", ";}.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb{-webkit-box-shadow:0px 0px 2px 2px ", ";-moz-box-shadow:0px 0px 2px 2px ", ";box-shadow:0px 0px 2px 2px ", ";}"], function (props) {\n  return props.theme.toggle.off.background;\n}, function (props) {\n  return props.theme.main[500];\n}, function (props) {\n  return props.theme.main[700];\n}, function (props) {\n  return props.theme.main[500];\n}, function (props) {\n  return props.theme.main[500];\n}, function (props) {\n  return props.theme.main[500];\n}, function (props) {\n  return props.theme.main[500];\n});\n\nvar Switch = function Switch(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Div, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_toggle__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({\n    icons: false\n  }, props)));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (Switch);\n\n//# sourceURL=webpack:///./src/components/Switch/Switch.jsx?')},"./src/components/Switch/index.js":
/*!****************************************!*\
  !*** ./src/components/Switch/index.js ***!
  \****************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch */ "./src/components/Switch/Switch.jsx");\n\n/* harmony default export */ __webpack_exports__["default"] = (_Switch__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack:///./src/components/Switch/index.js?')},"./src/hooks/useActive.js":
/*!********************************!*\
  !*** ./src/hooks/useActive.js ***!
  \********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useActive; });\n/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useStore */ "./src/hooks/useStore.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");\n/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction useActive(_ref) {\n  var _ref$shouldSync = _ref.shouldSync,\n      shouldSync = _ref$shouldSync === void 0 ? false : _ref$shouldSync;\n\n  var _useStore = Object(_useStore__WEBPACK_IMPORTED_MODULE_0__["default"])(),\n      active = _useStore.active,\n      setActive = _useStore.setActive,\n      currentTabId = _useStore.currentTabId,\n      setIsBreak = _useStore.setIsBreak; // Syncing with storage after data changed\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {\n    if (shouldSync) {\n      webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.storage.local.set({\n        active: active\n      });\n\n      if (!active) {\n        setIsBreak(false);\n      }\n\n      if (currentTabId) {\n        webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.tabs.sendMessage(currentTabId, {\n          active: active,\n          id: \'onToggle\'\n        });\n      }\n    }\n  }, [active, shouldSync, currentTabId]);\n  return {\n    active: active,\n    setActive: setActive\n  };\n}\n\n//# sourceURL=webpack:///./src/hooks/useActive.js?')},"./src/hooks/useAutoFocus.js":
/*!***********************************!*\
  !*** ./src/hooks/useAutoFocus.js ***!
  \***********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n\n\nvar useAutoFocus = function useAutoFocus(ref) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {\n    if (!ref.current || !ref.current.autofocus) return;\n    var preservedTabIndex = ref.current.tabIndex;\n    ref.current.tabIndex = -1;\n    ref.current.focus();\n    ref.current.tabIndex = preservedTabIndex;\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (useAutoFocus);\n\n//# sourceURL=webpack:///./src/hooks/useAutoFocus.js?')},"./src/hooks/useBreak.js":
/*!*******************************!*\
  !*** ./src/hooks/useBreak.js ***!
  \*******************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useBreak; });\n/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useStore */ "./src/hooks/useStore.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");\n/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");\n/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\ndayjs__WEBPACK_IMPORTED_MODULE_3___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4___default.a);\nfunction useBreak(_ref) {\n  var _ref$shouldSync = _ref.shouldSync,\n      shouldSync = _ref$shouldSync === void 0 ? false : _ref$shouldSync;\n\n  var _useStore = Object(_useStore__WEBPACK_IMPORTED_MODULE_0__["default"])(),\n      setIsBreak = _useStore.setIsBreak,\n      isBreak = _useStore.isBreak,\n      interval = _useStore.interval,\n      currentTabId = _useStore.currentTabId,\n      target = _useStore.target,\n      setTarget = _useStore.setTarget; // Syncing with storage after data changed\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {\n    if (shouldSync) {\n      webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.storage.local.set({\n        isBreak: isBreak\n      });\n\n      if (currentTabId) {\n        webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.tabs.sendMessage(currentTabId, {\n          isBreak: isBreak,\n          id: \'onBreak\'\n        });\n      }\n    }\n  }, [isBreak, shouldSync, currentTabId]);\n  return {\n    setIsBreak: setIsBreak,\n    isBreak: isBreak,\n    interval: interval,\n    target: target,\n    setTarget: setTarget\n  };\n}\n\n//# sourceURL=webpack:///./src/hooks/useBreak.js?')},"./src/hooks/useDarkMode.js":
/*!**********************************!*\
  !*** ./src/hooks/useDarkMode.js ***!
  \**********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDarkMode; });\n/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useStore */ "./src/hooks/useStore.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");\n/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction useDarkMode(_ref) {\n  var _ref$shouldSync = _ref.shouldSync,\n      shouldSync = _ref$shouldSync === void 0 ? false : _ref$shouldSync;\n\n  var _useStore = Object(_useStore__WEBPACK_IMPORTED_MODULE_0__["default"])(),\n      darkMode = _useStore.darkMode,\n      setDarkMode = _useStore.setDarkMode,\n      currentTabId = _useStore.currentTabId; // Syncing with storage after data changed\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {\n    if (shouldSync) {\n      webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.storage.local.set({\n        darkMode: darkMode\n      });\n\n      if (currentTabId) {\n        webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.tabs.sendMessage(currentTabId, {\n          darkMode: darkMode,\n          id: \'onToggleDarkMode\'\n        });\n      }\n    }\n  }, [darkMode, shouldSync, currentTabId]);\n  return {\n    darkMode: darkMode,\n    setDarkMode: setDarkMode\n  };\n}\n\n//# sourceURL=webpack:///./src/hooks/useDarkMode.js?')},"./src/hooks/useList.js":
/*!******************************!*\
  !*** ./src/hooks/useList.js ***!
  \******************************/
/*! exports provided: INIT, default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT", function() { return INIT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useList; });\n/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useStore */ "./src/hooks/useStore.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");\n/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // import getStubData from \'../context/FocusMode/getStubData\';\n\nvar INIT = \'INIT\';\nfunction useList(_ref) {\n  var shouldSync = _ref.shouldSync;\n\n  var _useStore = Object(_useStore__WEBPACK_IMPORTED_MODULE_0__["default"])(),\n      list = _useStore.list,\n      dispatch = _useStore.dispatch,\n      currentTabId = _useStore.currentTabId; // Syncing with storage after data changed\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {\n    if (shouldSync) {\n      webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.storage.local.set({\n        list: list\n      });\n\n      if (currentTabId) {\n        webextension_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a.tabs.sendMessage(currentTabId, {\n          list: list,\n          id: \'onChangeList\'\n        });\n      }\n    }\n  }, [list, shouldSync, currentTabId]);\n  return {\n    list: list,\n    dispatch: dispatch\n  };\n}\n\n//# sourceURL=webpack:///./src/hooks/useList.js?')},"./src/libs/omitProps.js":
/*!*******************************!*\
  !*** ./src/libs/omitProps.js ***!
  \*******************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return omitProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.omit */ "./node_modules/lodash.omit/index.js");\n/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n/**\n * @see https://github.com/styled-system/styled-system/issues/593#issuecomment-512350138\n */\n\nfunction omitProps(Component, propsToOmit) {\n  function WithoutOmittedProps(_ref) {\n    var children = _ref.children,\n        rest = _objectWithoutProperties(_ref, ["children"]);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Component, lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, propsToOmit), children);\n  }\n\n  WithoutOmittedProps.propTypes = {\n    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node\n  };\n  WithoutOmittedProps.displayName = "WithoutOmittedProps(".concat(Component.displayName || Component.name, ")");\n  return WithoutOmittedProps;\n}\n\n//# sourceURL=webpack:///./src/libs/omitProps.js?')}}]);