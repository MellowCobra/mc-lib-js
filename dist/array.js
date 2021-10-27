"use strict";
/**
 * This module contains methods for dealing with arrays.
 * @module Arr
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.reduce = exports.map = exports.first = exports.last = exports.lastItem = exports.isEmptyArray = exports.contains = exports.distinctBy = void 0;
const function_1 = require("./function");
/**
 * Given an array and a field or function determining a unique string, returns a new distinct array.
 *
 * If 2 items are different, but are determined to be unique base on the distinguishing field or function, then the first item in the array is chosen.
 * @param arr The source array of objects.
 * @param by A string denoting the field to use as a distinguishing identifier. Or a function which takes an item and returns a string to act as a distinguishing identifier.
 * @returns
 *
 *
 * Usage:
 * ```typescript
 * const fruits = [
 *   { name: "apple", color: "red" },
 *   { name: "apple", color: "green" },
 *   { name: "grape", color: "purple" },
 *   { name: "apple", color: "red" },     // Duplicate
 *   { name: "grape", color: "green" }
 * ]
 *
 * Arr.distinctBy("name", fruits)
 * // [{ name: "apple", color: "red" },{ name: "grape", color: "purple" },]
 *
 * Arr.distinctBy((fruit: any) => fruit.color, fruits)
 * // [{ name: "apple", color: "red" },{ name: "apple", color: "green" },{ name: "grape", color: "purple" }]
 * ```
 */
exports.distinctBy = function_1.curry(function (by, arr) {
    return Object.values(arr.reduce((map, el, i) => {
        const distinctionKey = typeof by === "function" ? by(el, i) : el[by];
        // Only enter into the list if the distinctionKey is not null, 
        // and it has not already been entered into the list
        if (distinctionKey != null && map[distinctionKey] === undefined) {
            map[distinctionKey] = el;
        }
        return map;
    }, {}));
});
/**
 * Returns true if an array contains a given value.
 * This is just a convenient shorthand to prevent having to use `indexOf(...) > -1`, and does not currently check for object equality.
 *
 * @param arr
 * @param item
 * @returns
 *
 *
 * Usage:
 * ```javascript
 * Arr.contains("apple", ["grape", "apple", "banana"])   // true
 * Arr.contains(4, [1, 2, 3])                            // false
 * ```
 */
exports.contains = function_1.curry(function contains(item, arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return false;
    return arr.indexOf(item) > -1;
});
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
exports.isEmptyArray = function_1.curry(function isEmptyArray(arr) {
    if (!Array.isArray(arr))
        return true;
    return arr.length === 0;
});
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
exports.lastItem = function_1.curry(function lastItem(arr) {
    if (arr == undefined)
        return undefined;
    if (!Array.isArray(arr) || arr.length === 0)
        return null;
    return arr[arr.length - 1];
});
/**
 * Returns the last item in an array, or `null` if the array is empty.
 * If the argument is not an array, returns `null`.
 *
 * Can pass in a number N and it will return the last N items, or entire array if array length less than N.
 *
 * @param arr
 * @returns
 *
 *
 * Usage:
 * ```javascript
 * Arr.last([1, 2, 3])            // 3
 * Arr.last([])                   // null
 * Arr.last(2, [1, 2, 3, 4, 5])   // [4, 5]
 * ```
 */
exports.last = function_1.curry(function last(...args) {
    // @ts-ignore
    if (args.length === 0)
        return undefined;
    let arr, n;
    if (args.length === 1) {
        arr = args[0];
        n = 1;
    }
    else {
        [n, arr] = args;
    }
    if (!Array.isArray(arr) || arr.length === 0)
        return null;
    if (n === 1)
        return arr[arr.length - 1];
    return arr.slice(-n);
});
/**
 * Returns the first item in an array, or `null` if the array is empty.
 * If the argument is not an array, returns `null`.
 *
 * Can pass in a number N and it will return first N items, or entire array if array length less than N.
 *
 * @param arr
 * @returns
 *
 *
 * Usage:
 * ```javascript
 * Arr.first([1, 2, 3])             // 1
 * Arr.first([])                    // null
 * Arr.first(2, [1, 2, 3, 4, 5])    // [1, 2]
 * ```
 */
exports.first = function_1.curry(function first(...args) {
    // @ts-ignore
    if (args.length === 0)
        return undefined;
    let arr, n;
    if (args.length === 1) {
        arr = args[0];
        n = 1;
    }
    else {
        [n, arr] = args;
    }
    if (!Array.isArray(arr) || arr.length === 0)
        return null;
    if (n === 1)
        return arr[0];
    return arr.slice(0, n);
});
// Arr.map
exports.map = function_1.curry(function map(fn, arr) {
    return arr.map(fn);
});
// Arr.reduce
exports.reduce = function_1.curry(function reduce(fn, starter, arr) {
    return arr.reduce(fn, starter);
});
// Arr.filter
exports.filter = function_1.curry(function filter(fn, arr) {
    return arr.filter(fn);
});
// STANDARD METHODS
// Arr.concat
// Arr.every
// Arr.some
// Arr.find
// Arr.findIndex
// Arr.flat
// Arr.forEach
// Arr.join
// Arr.pop
// Arr.push
// Arr.reverse
// Arr.reduceRight
// Arr.shift
// Arr. slice
// Arr.sort
// Arr.unshift
// CUSTOM METHODS
// Arr.intersection
