/**
 * This module contains methods for dealing with arrays.
 * @module Arr
 */
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
export declare function lastItem<T>(arr: T[]): T | null;
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
export declare function contains<T>(item: T, arr: T[]): boolean;
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
export declare function isEmptyArray<T>(arr: T[]): boolean;
