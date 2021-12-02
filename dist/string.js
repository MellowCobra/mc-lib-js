"use strict";
/**
 * The Str module provides utility methods for dealing with strings.
 * @module Str
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = exports.toUpperCase = exports.toLowerCase = exports.toLocaleUpperCase = exports.toLocaleLowerCase = exports.slice = exports.match = exports.split = exports.endsWith = exports.localeCompare = exports.includes = exports.concat = exports.at = exports.isString = void 0;
const function_1 = require("./function");
/**
* Indicates if value is a string or an instance of String
*
* @param { string } str the string to check
* @returns { boolean }
*
* Usage:
* ```typescript
* Str.isString("hello")                // true
* Str.isString(new String("hello"))    // true
* Str.isString([])                     // false
* ```
*/
exports.isString = function_1.curry(function isString(str) {
    // @ts-ignore
    return typeof str === "string" || str instanceof String;
});
/**
* Retrieves the character at specified index.
*
* Returns null if index is greater than the length of the string, or if the string argument is not a valid string
*
* @param { number } index the index of the character to retrieve
* @param { string } str the string to check
* @returns { string | null }
*
* Usage:
* ```typescript
* Str.at(1, "hello")     // e
* ```
*/
exports.at = function_1.curry(function at(index, str) {
    switch (true) {
        case !exports.isString(str):
        case str.length === 0:
        case index > str.length + 1:
            return null;
        case index < 0:
            return str[str.length + index];
        default:
            return str[index];
    }
});
/**
 * Concatenate strings together
 *
 * @param { string[] } strings the strings to concatenate
 * @returns { string } the concatenated string
 *
 * @throws Arguments to Str.concat must be strings.
 *
 * Usage:
 * ```typescript
 * Str.concat("Hello", " ", "world!")     // "Hello world!"
 * ```
 */
const concat = function concat(...strs) {
    if (strs.length === 0)
        return null;
    strs.forEach((s, i) => {
        if (!exports.isString(s)) {
            throw new Error(`Arguments to Str.concat must be strings. Attempted to concat value ${s} as argument ${i + 1}`);
        }
    });
    const [str1, ...rest] = strs;
    return str1.concat(...rest);
};
exports.concat = concat;
/**
 * Check if a string is included as a substring of another string
 *
 * @param { string } substring the substring to check for
 * @param { string } str the string to check in
 * @returns
 *
 * Usage:
 * ```typescript
 * Str.includes("Jim", "My name might just be Jim Pickens...")     // true
 * ```
 */
exports.includes = function_1.curry(function (substr, str) {
    if (!exports.isString(substr) || !exports.isString(str))
        return null;
    return str.includes(substr);
});
/**
 * Wrapper around String.prototype.localeCompare
 *
 * Cannot yet be curried because it can take varargs
 *
 * @param { string } ref the reference string
 * @param { string } cmp the comparison string
 * @returns number indicating whether the reference string comes before or after the comparison string
 *
 * Usage:
 * ```typescript
 * Str.localeCompare('réservé', 'RESERVE')     // 1
 * ```
 */
const localeCompare = function localeCompare(a, b, ...args) {
    if (!exports.isString(a) || !exports.isString(b))
        return null;
    return a.localeCompare(b, ...args);
};
exports.localeCompare = localeCompare;
/**
 * Checks if a string ends with the given substring
 *
 * @param { string } ref the reference string
 * @param { string } cmp the comparison string
 * @returns number indicating whether the reference string comes before or after the comparison string
 *
 * Usage:
 * ```typescript
 * Str.localeCompare('réservé', 'RESERVE')     // 1
 * ```
 */
exports.endsWith = function_1.curry(function endsWith(cmp, str) {
    if (!exports.isString(str) || !exports.isString(cmp))
        return null;
    return str.endsWith(cmp);
});
exports.split = function_1.curry(function split(separator, str) {
    if (!exports.isString(str))
        return null;
    return str.split(separator);
});
exports.match = function_1.curry(function match(regexp, str) {
    if (!exports.isString(str))
        return null;
    return str.match(regexp);
});
exports.slice = function_1.curry(function slice(start, end, str) {
    if (!exports.isString(str))
        return null;
    return str.slice(start, end);
});
exports.toLocaleLowerCase = function_1.curry(function toLocaleLowerCase(str) {
    if (!exports.isString(str))
        return null;
    return str.toLocaleLowerCase();
});
exports.toLocaleUpperCase = function_1.curry(function toLocaleUpperCase(str) {
    if (!exports.isString(str))
        return null;
    return str.toLocaleUpperCase();
});
exports.toLowerCase = function_1.curry(function toLowerCase(str) {
    if (!exports.isString(str))
        return null;
    return str.toLowerCase();
});
exports.toUpperCase = function_1.curry(function toUpperCase(str) {
    if (!exports.isString(str))
        return null;
    return str.toUpperCase();
});
exports.trim = function_1.curry(function trim(str) {
    if (!exports.isString(str))
        return null;
    return str.trim();
});
