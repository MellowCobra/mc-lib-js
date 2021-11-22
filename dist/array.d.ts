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
export declare const distinctBy: import("./function").AnyFunction;
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
export declare const contains: import("./function").AnyFunction;
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
export declare const isEmptyArray: import("./function").AnyFunction;
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
export declare const lastItem: import("./function").AnyFunction;
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
export declare const last: import("./function").AnyFunction;
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
export declare const first: import("./function").AnyFunction;
export declare const map: import("./function").AnyFunction;
export declare const reduce: import("./function").AnyFunction;
export declare const length: (arr: any[]) => null | number;
export declare const concat: import("./function").AnyFunction;
export declare const concatAll: (...arrs: any[][]) => any[];
export declare const every: import("./function").AnyFunction;
export declare const filter: import("./function").AnyFunction;
export declare const find: import("./function").AnyFunction;
export declare const findIndex: import("./function").AnyFunction;
export declare const flat: (arr: any[]) => any[];
export declare const flatTo: import("./function").AnyFunction;
export declare const flatMap: import("./function").AnyFunction;
export declare const forEach: import("./function").AnyFunction;
export declare const from: (arr: Iterable<any> | ArrayLike<any>) => any[];
export declare const mapFrom: import("./function").AnyFunction;
export declare const includes: import("./function").AnyFunction;
export declare const indexOf: import("./function").AnyFunction;
export declare const isArray: (arg: any) => arg is any[];
export declare const join: (arr: any[]) => string | null;
export declare const joinWith: import("./function").AnyFunction;
export declare const lastIndexOf: import("./function").AnyFunction;
export declare const push: import("./function").AnyFunction;
export declare const reduceRight: import("./function").AnyFunction;
export declare const reverse: import("./function").AnyFunction;
export declare const slice: import("./function").AnyFunction;
export declare const some: import("./function").AnyFunction;
export declare const sort: (arr: any[]) => any[];
export declare const sortBy: import("./function").AnyFunction;
export declare const intersection: import("./function").AnyFunction;
