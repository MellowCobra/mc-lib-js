/**
 * This module contains methods for dealing with arrays.
 * @module Arr
 */


export type DistinctionFunc<T> = ((item: T, index?: number) => string)
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
export function distinctBy<T>(arr: T[], by: string | DistinctionFunc<T>): T[] {
  if (by == null) return arr

  return Object.values(arr.reduce((map, el, i) => {
    const distinctionKey = typeof by === "function" ? by(el, i) : el[by]

    // Only enter into the list if the distinctionKey is not null, 
    // and it has not already been entered into the list
    if (distinctionKey != null && map[distinctionKey] === undefined) {
      map[distinctionKey] = el
    }

    return map;
  }, {}))
}

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
 * Arr.contains(["grape", "apple", "banana"], "apple")   // true
 * Arr.contains([1, 2, 3], 4)                            // false
 * ```
 */
export function contains<T>(arr: T[], item: T): boolean {
  if (!Array.isArray(arr) || arr.length === 0) return false
  return arr.indexOf(item) > -1
}

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
export function isEmptyArray<T>(arr: T[]): boolean {
  if(!Array.isArray(arr)) return true
  return arr.length === 0
}

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
 export function lastItem<T>(arr: T[]): T | null {
  if (arr == undefined) return undefined
  if (!Array.isArray(arr) || arr.length === 0) return null
  return arr[arr.length - 1]
}

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
 * Arr.first([1, 2, 3])     // 1
 * Arr.first([])            // null
 * ```
 */
 export function first<T>(arr: T[], n: number = 1): T | T[] | null {
  if (arr == undefined) return undefined
  if (!Array.isArray(arr) || arr.length === 0) return null
  if (n === 1) return arr[0]
  return arr.slice(0, n)
}