/**
 * This module contains methods for dealing with arrays.
 * @module Arr
 */
export declare type DistinctionFunc<T> = ((item: T, index?: number) => string);
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
 *   { name: "apple", color: "red" },  // Duplicate
 *   { name: "grape", color: "green" }
 * ]
 *
 * Arr.distinctBy(fruits, "name")
 * // [{ name: "apple", color: "red" },{ name: "grape", color: "purple" },]
 *
 * Arr.distinctBy(fruits, (fruit: any) => fruit.color)
 * // [{ name: "apple", color: "red" },{ name: "apple", color: "green" },{ name: "grape", color: "purple" }]
 * ```
 */
export declare function distinctBy<T>(arr: T[], by: string | DistinctionFunc<T>): T[];
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
export declare function contains<T>(arr: T[], item: T): boolean;
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
