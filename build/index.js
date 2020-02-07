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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/block/block-edit.js":
/*!*********************************!*\
  !*** ./src/block/block-edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _slider_image_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slider-image-form */ "./src/block/slider-image-form.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preview */ "./src/block/preview.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inspector */ "./src/block/inspector.js");








/**
 * Internal block libraries
 */




/**
 *
 */

var Edit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Edit, _Component);

  function Edit(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Edit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Edit).call(this, props));
    _this.handleSave = _this.handleSave.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Edit, [{
    key: "handleSave",
    value: function handleSave(attributes) {
      this.props.setAttributes(attributes);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          isSelected = _this$props.isSelected,
          setAttributes = _this$props.setAttributes;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_9__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      }), !!isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_slider_image_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: attributes,
        onSave: this.handleSave
      }), !isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_preview__WEBPACK_IMPORTED_MODULE_8__["default"], {
        attributes: attributes
      }));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/block/block-save.js":
/*!*********************************!*\
  !*** ./src/block/block-save.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _default_image_src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default-image-src */ "./src/block/default-image-src.js");







 // Local Imports


/**
 * FrontEnd
 */

var SaveComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SaveComponent, _Component);

  function SaveComponent() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SaveComponent);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SaveComponent).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SaveComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          className = _this$props.className;
      var imageLeft = attributes.imageLeft.url || _default_image_src__WEBPACK_IMPORTED_MODULE_7__["default"];
      var imageRight = attributes.imageRight.url || _default_image_src__WEBPACK_IMPORTED_MODULE_7__["default"];
      var labelLeft = attributes.labelLeft || '';
      var labelRight = attributes.labelRight || '';
      var creditsLeft = attributes.creditsLeft || '';
      var creditsRight = attributes.creditsRight || '';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        id: "juxtapose-wrapper",
        className: "juxtapose ".concat(className),
        "data-startingposition": attributes.startingPosition,
        "data-animate": attributes.animate
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: imageLeft,
        "data-label": "".concat(labelLeft),
        "data-credit": "".concat(creditsLeft)
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: imageRight,
        "data-label": "".concat(labelRight),
        "data-credit": "".concat(creditsRight)
      }));
    }
  }]);

  return SaveComponent;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

SaveComponent.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SaveComponent);

/***/ }),

/***/ "./src/block/default-image-src.js":
/*!****************************************!*\
  !*** ./src/block/default-image-src.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,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AAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAACAAA4QklNBDAAAAAAAAEBADhCSU0ELQAAAAAABgABAAAAAjhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAAM3AAAABgAAAAAAAAAAAAACrgAABAAAAAABADEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAABAAAAAKuAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAKuAAAAAFJnaHRsb25nAAAEAAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAACrgAAAABSZ2h0bG9uZwAABAAAAAADdXJsVEVYVAAAAAEAAAAAAABudWxsVEVYVAAAAAEAAAAAAABNc2dlVEVYVAAAAAEAAAAAAAZhbHRUYWdURVhUAAAAAQAAAAAADmNlbGxUZXh0SXNIVE1MYm9vbAEAAAAIY2VsbFRleHRURVhUAAAAAQAAAAAACWhvcnpBbGlnbmVudW0AAAAPRVNsaWNlSG9yekFsaWduAAAAB2RlZmF1bHQAAAAJdmVydEFsaWduZW51bQAAAA9FU2xpY2VWZXJ0QWxpZ24AAAAHZGVmYXVsdAAAAAtiZ0NvbG9yVHlwZWVudW0AAAARRVNsaWNlQkdDb2xvclR5cGUAAAAATm9uZQAAAAl0b3BPdXRzZXRsb25nAAAAAAAAAApsZWZ0T3V0c2V0bG9uZwAAAAAAAAAMYm90dG9tT3V0c2V0bG9uZwAAAAAAAAALcmlnaHRPdXRzZXRsb25nAAAAAAA4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBBEAAAAAAAEBADhCSU0EFAAAAAAABAAAAAI4QklNBAwAAAAABEkAAAABAAAAoAAAAGsAAAHgAADIoAAABC0AGAAB/9j/7QAMQWRvYmVfQ00AAv/uAA5BZG9iZQBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAGsAoAMBIgACEQEDEQH/3QAEAAr/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBAAAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElBhaisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/AOrSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSU//9Dq0kkklKSSSSUpJJJJS6SZJJS6SZJJS6SZJJS6SZJJSkkkklKSSSSUpJJJJT//0erSSSSUpJJJJSkkkklKSSU66rLDDBMcngBJTBT9G4tDgwlp4IRRiNbAtsAJ0DW86/H/AMinyLrGWhtbtoaBI5EpKax0MHQ+BSVgZjiIsY14+7/ySW7Dfy11Z8uPw3JKa6SJfV6T9oMgiRPKGkpSSSSSlJJJJKUkkkkp/9Lq0kkklKSSSSUpJJJJSlYxPcLK5guEj4/RVdFxnbb2Hx9v3pKViN3XtJ/NBcfyKdtFzi+0gaknaNTCLQwNuuA5kQPI+5GSU0KaX2n26NHLuyKcbZfWBLmOMyfL3QrWgEDQeASLtoLjw0T9ySmjkO3XvPgdv3ISUk6nk6lJJSkkkklKSSSSUpJJJJT/AP/T6tJJJJSkkkklKSSSSUpKSNRyNQkkkpuXUi5zbg8MaWjVJt1NQg2utPhyP9f7apwEklNr7aJ+gY+Oqa3KY+otaDLtDPYKskkpSSSSSlJJJJKUkkkkpSSSSSn/1OrSSSSUpJJJJSkkkklLpJkklLpJkklLpJkklLpJkklKSSSSUpJJJJSkkkklP//V6tJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJT//2QA4QklNBCEAAAAAAFUAAAABAQAAAA8AQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAAAATAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwACAAQwBTADYAAAABADhCSU0EBgAAAAAABwAIAQEAAQEA/+EOoWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iNjlBOTAxQUQ1QUJCODAwNDk4MTJEMEM1QzUwQkZBRDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjM3OUM5RDQ5OTk5MTFFOEE2NTlGQ0FGRTUxNzk3MTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEEzODgxNTI5OTQ4RUExMUExQkRGNjY4NENEMTg2ODYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAyLTA0VDE3OjQ4OjQ3LTA1OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMi0wNVQyMzoyOTo1My0wNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMi0wNVQyMzoyOTo1My0wNTowMCIgcGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q9IkZDRTExRjg5QzhCN0M5NzgyRjM0NjIzNDA3NTg3N0VCIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODRhNDE4Ny1hMDU1LTQ1YzktYmQ0ZS0wMmVhNTQwZjExMTUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNjZkZTUyMC05N2I1LTJlNGEtOWEwYi1jNjhlNTVhODczYjgiLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OEEzODgxNTI5OTQ4RUExMUExQkRGNjY4NENEMTg2ODYiIHN0RXZ0OndoZW49IjIwMjAtMDItMDVUMjM6Mjk6NTMtMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT54bXAuZGlkOjAwMGY5NTkwLTI1YjMtMmE0NC04NDMyLTNiN2U2ZDIxM2YzMTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4AIUFkb2JlAGRAAAAAAQMAEAMCAwYAAAAAAAAAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAQEBAQICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//CABEIAq4EAAMBEQACEQEDEQH/xACxAAEBAAMAAwEBAAAAAAAAAAAAAwYHCAEEBQIKAQEAAAAAAAAAAAAAAAAAAAAAEAAABAUDAwQDAQEAAAAAAAAAAwQFAQIzBgdgERIwQFAQIBQVITETsNARAAIBAgIFCAgDBQYEBwEAAAECAxEEAAUhMRIT00FRkTKyM3OTEEBgYXGBIhQgMFBCUmJyQ4KSI2MkFbDwobGiU4M0RIQGZBIBAAAAAAAAAAAAAAAAAAAA0P/aAAwDAQECEQMRAAAA/oIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8H4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEwAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAChMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8n5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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");

/***/ }),

/***/ "./src/block/index.js":
/*!****************************!*\
  !*** ./src/block/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-edit */ "./src/block/block-edit.js");
/* harmony import */ var _block_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-save */ "./src/block/block-save.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal block libraries
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


/**
 * Register block
 */

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('image/slider', {
  title: __('Slider Comparison', 'slider-image-comparison'),
  description: __('Image Comparison Slider BLocks .', 'slider-image'),
  category: 'common',
  icon: 'groups',
  keywords: [__('Slider', 'image-comparison')],
  attributes: {
    imageLeft: {
      url: '',
      default: ''
    },
    imageRight: {
      url: '',
      default: ''
    },
    labelLeft: {
      type: 'text',
      default: ''
    },
    labelRight: {
      type: 'text',
      default: ''
    },
    creditsLeft: {
      type: 'text',
      default: ''
    },
    creditsRight: {
      type: 'text',
      default: ''
    },
    startingPosition: {
      type: 'number',
      default: 50
    },
    animate: {
      type: 'boolean',
      default: true
    }
  },
  edit: function edit(props) {
    var setAttributes = props.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_edit__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
      setAttributes: setAttributes
    }, props));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_block_save__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: props.attributes
    });
  }
}));

/***/ }),

/***/ "./src/block/inspector.js":
/*!********************************!*\
  !*** ./src/block/inspector.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inspector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);









var InspectorControls = wp.blockEditor.InspectorControls; //const {__} = wp.i18n;

/**
 * Create an Inspector Controls wrapper Component
 */

var Inspector =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Inspector, _Component);

  function Inspector(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Inspector);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Inspector).call(this, props));
    _this.handleSave = _this.handleSave.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Inspector, [{
    key: "handleSave",
    value: function handleSave(attributes) {
      if (Object.keys(attributes).indexOf('startingPosition') != -1) {
        if (attributes['startingPosition'] >= 100) attributes['startingPosition'] = 100;
        if (attributes['startingPosition'] < 0) attributes['startingPosition'] = 0;
      }

      this.props.setAttributes(attributes);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$attribute = this.props.attributes,
          animate = _this$props$attribute.animate,
          startingPosition = _this$props$attribute.startingPosition;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
        title: "Layout options",
        initialOpen: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        style: {
          padding: '0 7px'
        },
        type: 'number',
        label: "Starting Position",
        value: startingPosition,
        onChange: function onChange(value) {
          _this2.handleSave({
            startingPosition: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["CheckboxControl"], {
        style: {
          padding: '0 7px'
        },
        label: "Animate",
        checked: animate,
        onChange: function onChange(value) {
          _this2.handleSave({
            animate: value
          });
        }
      }))));
    }
  }]);

  return Inspector;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/block/preview.js":
/*!******************************!*\
  !*** ./src/block/preview.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _default_image_src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default-image-src */ "./src/block/default-image-src.js");







 // Local Imports


/**
 * FrontEnd
 */

var SaveComponent =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SaveComponent, _Component);

  function SaveComponent() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SaveComponent);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SaveComponent).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SaveComponent, [{
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      var imageLeft = attributes.imageLeft.url || _default_image_src__WEBPACK_IMPORTED_MODULE_7__["default"];
      var imageRight = attributes.imageRight.url || _default_image_src__WEBPACK_IMPORTED_MODULE_7__["default"];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        className: "image-slider"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: imageLeft
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("img", {
        src: imageRight
      }));
    }
  }]);

  return SaveComponent;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

SaveComponent.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SaveComponent);

/***/ }),

/***/ "./src/block/slider-image-form.js":
/*!****************************************!*\
  !*** ./src/block/slider-image-form.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var ALLOWED_MEDIA_TYPES = ['image'];

var ImageComparisonSlider =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ImageComparisonSlider, _Component);

  function ImageComparisonSlider(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ImageComparisonSlider);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ImageComparisonSlider).call(this, props));
    _this.state = {
      sliderComparison: _objectSpread({}, props.item)
    };
    _this.handleFieldChange = _this.handleFieldChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ImageComparisonSlider, [{
    key: "handleFieldChange",
    value: function handleFieldChange(value, field) {
      var tmpState = _objectSpread({}, this.state);

      tmpState.sliderComparison[field] = value;
      this.setState(tmpState);
      this.props.onSave(tmpState.sliderComparison);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sliderComparison = this.state.sliderComparison;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "header-slider"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("h4", null, "Slider Image Comparison")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUploadCheck"], {
        fallback: "You don't have permissions to upload images."
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "slider-row "
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUpload"], {
        title: 'Image Left',
        onSelect: function onSelect(media) {
          return _this2.handleFieldChange({
            url: media.url
          }, "imageLeft");
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: sliderComparison.imageLeft,
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            className: "editor-post-image-toggle",
            onClick: open
          }, sliderComparison.imageLeft && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
            src: sliderComparison.imageLeft.url
          }), !sliderComparison.imageLeft && 'Image Left');
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "slider-container-input"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], {
        style: {
          padding: '0 7px'
        },
        label: "Image Options",
        placeholder: "label",
        value: sliderComparison.labelLeft,
        onChange: function onChange(value) {
          _this2.handleFieldChange(value, "labelLeft");
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], {
        style: {
          padding: '0 7px'
        },
        placeholder: " Credits",
        value: sliderComparison.creditsLeft,
        onChange: function onChange(value) {
          _this2.handleFieldChange(value, "creditsLeft");
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "slider-separator"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "slider-row"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUpload"], {
        title: 'Image Right',
        onSelect: function onSelect(media) {
          return _this2.handleFieldChange({
            url: media.url
          }, "imageRight");
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: sliderComparison.imageRight,
        render: function render(_ref2) {
          var open = _ref2.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            className: "editor-post-image-toggle",
            onClick: open
          }, sliderComparison.imageRight && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("img", {
            src: sliderComparison.imageRight.url
          }), !sliderComparison.imageRight && 'Image Right');
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: "slider-container-input"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], {
        style: {
          padding: '0 7px'
        },
        label: "Image Options",
        placeholder: "label",
        value: sliderComparison.labelRight,
        onChange: function onChange(value) {
          _this2.handleFieldChange(value, "labelRight");
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TextControl"], {
        style: {
          padding: '0 7px'
        },
        placeholder: "Credits",
        value: sliderComparison.creditsRight,
        onChange: function onChange(value) {
          _this2.handleFieldChange(value, "creditsRight");
        }
      })))));
    }
  }]);

  return ImageComparisonSlider;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

ImageComparisonSlider.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImageComparisonSlider);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ "./src/block/index.js");


/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map