"use strict";
/**
 * This module contains methods for dealing with arrays.
 * @module Arr
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyArray = exports.contains = exports.lastItem = void 0;
/**
 * Returns the last item in an array, or `null` if the array is empty.
 * If the argument is not an array, returns `null`.
 *
 * @param arr
 * @returns
 *
 *
 * Usage:
 * ```javascript
 * Arr.lastItem([1, 2, 3])     // 3
 * Arr.lastItem([])            // null
 * ```
 */
function lastItem(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return null;
    return arr[arr.length - 1];
}
exports.lastItem = lastItem;
/**
 * Returns true if an array contains a given value.
 * This is just a convenient shorthand to prevent having to use `indexOf(...) > -1`, and does not currently check for object equality.
 *
 * @param item
 * @param arr
 * @returns
 *
 *
 * Usage:
 * ```javascript
 * Arr.contains("apple", ["grape", "apple", "banana"])   // true
 * Arr.contains(4, [1, 2, 3])                            // false
 * ```
 */
function contains(item, arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return false;
    return arr.indexOf(item) > -1;
}
exports.contains = contains;
/**
 * Returns `true` if a value is an array and is empty.
 * @param arr
 * @returns
 *
 *
 * Usage:
 * ```javascript
 * Arr.isEmptyArray([])          // true
 * Arr.isEmptyArray([1])         // false
 * Arr.isEmptyArray(null)        // false; it is not an array so false by default
 * ```
 */
function isEmptyArray(arr) {
    if (!Array.isArray(arr))
        return true;
    return arr.length === 0;
}
exports.isEmptyArray = isEmptyArray;
