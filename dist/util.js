"use strict";
/**
 * This module contains various utility methods for checking values.
 * They can be used to test equality or validity of data, such as if a value is _exactly_ `true`, or if it is an empty string (and not just `null`).
 *
 * Many of the methods in this module are trivial.
 * The intent is to provide explicit checks for values, since type coercion in JavaScript can at times cause equality checks to be maddeningly non-apparent and inconsistent (see [dotJS 2012 - Brian Leroux - WTFJS](https://www.youtube.com/watch?v=et8xNAc2ic8).)
 *
 * @module Util
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyString = exports.isNonEmptyString = exports.isTrue = exports.notTrue = exports.notTruthy = exports.isFalse = exports.notFalse = exports.notFalsy = exports.notNull = void 0;
/**
 * Returns `false` if the input value is _exactly_ `null`.
 * Returns `true` for __all__ other values, including `undefined`.
 * @param a
 * @returns
 */
function notNull(a) {
    return a === undefined ? false : a !== null;
}
exports.notNull = notNull;
/**
 * Returns `true` if the input value is not considered a "falsy" value.
 * @param a
 * @returns
 */
function notFalsy(a) {
    return a != false;
}
exports.notFalsy = notFalsy;
/**
 * Returns `false` if the input value is _exactly_ `false`.
 * Returns `true` for __all__ other values, including "falsy" ones.
 * @param a
 * @returns
 */
function notFalse(a) {
    return a !== false;
}
exports.notFalse = notFalse;
/**
 * Returns `true` if the input value is _exactly_ `false`.
 * Returns `false` for __all__ other values, including "falsy" ones.
 * @param a
 * @returns
 */
function isFalse(a) {
    return a === false;
}
exports.isFalse = isFalse;
/**
 * Returns `true` if the input value is not considered a "truthy" value.
 * @param a
 * @returns
 */
function notTruthy(a) {
    return a != true;
}
exports.notTruthy = notTruthy;
/**
 * Returns `false` if the input value is _exactly_ `true`.
 * Returns `true` for __all__ other values, including "truthy" ones.
 * @param a
 * @returns
 */
function notTrue(a) {
    return a !== true;
}
exports.notTrue = notTrue;
/**
 * Returns `true` if the input is _exactly_ `true`.
 * Returns `false` for all other values, even "truthy" ones.
 * @param a
 * @returns
 */
function isTrue(a) {
    return a === true;
}
exports.isTrue = isTrue;
/**
 * Returns `true` if the input is a string (literal or String instance) containing one or more characters.
 * Returns `false` for all other values.
 * @param a
 * @returns
 */
function isNonEmptyString(a) {
    return (typeof a === "string" || a instanceof String) && a.length > 0;
}
exports.isNonEmptyString = isNonEmptyString;
/**
 * Returns `true` if the input is a string (literal or String instance) containing 0 characters.
 * Returns `false` for all other values.
 * @param a
 * @returns
 */
function isEmptyString(a) {
    return (typeof a === "string" || a instanceof String) && a.length === 0;
}
exports.isEmptyString = isEmptyString;
