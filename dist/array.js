"use strict";
/**
 * This module contains methods for dealing with arrays.
 * @module Arr
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = exports.reduceRight = exports.push = exports.lastIndexOf = exports.joinWith = exports.join = exports.isArray = exports.indexOf = exports.includes = exports.mapFrom = exports.from = exports.forEach = exports.flatMap = exports.flatTo = exports.flat = exports.findIndex = exports.find = exports.filter = exports.every = exports.concatAll = exports.concat = exports.length = exports.reduce = exports.map = exports.first = exports.last = exports.lastItem = exports.isEmptyArray = exports.contains = exports.distinctBy = void 0;
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
// STANDARD METHODS
// Arr.map
exports.map = function_1.curry(function map(fn, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.map(fn);
});
// Arr.reduce
exports.reduce = function_1.curry(function reduce(fn, starter, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.reduce(fn, starter);
});
// Arr.length
const length = function length(arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.length;
};
exports.length = length;
// Arr.concat
exports.concat = function_1.curry(function concat(arr, arr2) {
    if (!exports.isArray(arr) && !Array.isArray(arr2))
        return null;
    const a = exports.isArray(arr) ? arr : [];
    const b = exports.isArray(arr2) ? arr2 : [];
    return a.concat(b);
});
// Arr.concatAll
// Does not work with partial application
const concatAll = function concatAll(...arrs) {
    if (arrs.length === 0)
        return null;
    const nonNullArrs = arrs.filter(a => a != null);
    return [].concat(...nonNullArrs);
};
exports.concatAll = concatAll;
// Arr.every
exports.every = function_1.curry(function every(predicate, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.every(predicate);
});
// Arr.filter
exports.filter = function_1.curry(function filter(fn, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.filter(fn);
});
// Arr.find
exports.find = function_1.curry(function find(fn, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.find(fn);
});
// Arr.findIndex
exports.findIndex = function_1.curry(function find(fn, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.findIndex(fn);
});
// Arr.flat
const flat = function flat(arr) {
    if (!exports.isArray(arr))
        return null;
    return Array.from(arr).flat();
};
exports.flat = flat;
// Arr.flatTo
exports.flatTo = function_1.curry(function flatTo(to, arr) {
    if (!exports.isArray(arr))
        return null;
    return Array.from(arr).flat(to);
});
// Arr.flatMap
exports.flatMap = function_1.curry(function flatMap(fn, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.flatMap(fn);
});
// Arr.forEach
exports.forEach = function_1.curry(function forEach(fn, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.forEach(fn);
});
// Arr.from
const from = function from(arr) {
    if (!exports.isArray(arr))
        return null;
    return Array.from(arr);
};
exports.from = from;
// Arr.mapFrom
exports.mapFrom = function_1.curry(function mapFrom(fn, arr) {
    if (!exports.isArray(arr))
        return null;
    return Array.from(arr, fn);
});
// Arr.includes
exports.includes = function_1.curry(function includes(item, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.includes(item);
});
// Arr.indexOf
exports.indexOf = function_1.curry(function indexOf(item, arr) {
    if (!Array.isArray(arr))
        return null;
    return arr.indexOf(item);
});
// Arr.isArray
exports.isArray = Array.isArray;
// Arr.join
const join = function join(arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.join("");
};
exports.join = join;
// Arr.joinWith
exports.joinWith = function_1.curry(function joinWith(delimiter, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.join(delimiter);
});
// Arr.lastIndexOf
exports.lastIndexOf = function_1.curry(function lastIndexOf(item, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.lastIndexOf(item);
});
// Arr.push
exports.push = function_1.curry(function push(item, arr) {
    if (!exports.isArray(arr))
        return null;
    return [...arr, item];
});
// Arr.reduceRight
exports.reduceRight = function_1.curry(function reduceRight(fn, starter, arr) {
    if (!exports.isArray(arr))
        return null;
    return arr.reduceRight(fn, starter);
});
// Arr.reverse
exports.reverse = function_1.curry(function reverse(arr) {
    if (!exports.isArray(arr))
        return null;
    return exports.from(arr).reverse();
});
// Arr.slice
// Arr.some
// Arr.sort
// CUSTOM METHODS
// Arr.intersection
//TODO: determine if we should chop these methods
// They are not functional by nature so probably not gonna do it
// Arr.pop
// Arr.shift
// Arr.unshift
