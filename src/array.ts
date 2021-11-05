/**
 * This module contains methods for dealing with arrays.
 * @module Arr
 */

import { curry } from "./function"

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
export const distinctBy = curry(function<T>(by: string | DistinctionFunc<T>, arr: T[]): T[] {
  return Object.values(arr.reduce((map, el, i) => {
    const distinctionKey = typeof by === "function" ? by(el, i) : el[by]

    // Only enter into the list if the distinctionKey is not null, 
    // and it has not already been entered into the list
    if (distinctionKey != null && map[distinctionKey] === undefined) {
      map[distinctionKey] = el
    }

    return map;
  }, {}))
})

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
export const contains = curry(function contains<T>(item: T, arr: T[]): boolean {
  if (!Array.isArray(arr) || arr.length === 0) return false
  return arr.indexOf(item) > -1
})

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
export const isEmptyArray = curry(function isEmptyArray<T>(arr: T[]): boolean {
  if(!Array.isArray(arr)) return true
  return arr.length === 0
})

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
export const lastItem = curry(function lastItem<T>(arr: T[]): T | null {
  if (arr == undefined) return undefined
  if (!Array.isArray(arr) || arr.length === 0) return null
  return arr[arr.length - 1]
})

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
export const last = curry(function last<T>(...args: [T[]] | [number, T[]]): T | T[] | null {
  // @ts-ignore
  if (args.length === 0) return undefined
  
  let arr, n
  if (args.length === 1) {
    arr = args[0]
    n = 1
  } else {
    [ n, arr ] = args
  }

  if (!Array.isArray(arr) || arr.length === 0) return null
  if (n === 1) return arr[arr.length - 1]
  return arr.slice(-n)
})

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
export const first = curry(function first<T>(...args: [T[]] | [number, T[]]): T | T[] | null {
  // @ts-ignore
  if (args.length === 0) return undefined
  
  let arr, n
  if (args.length === 1) {
    arr = args[0]
    n = 1
  } else {
    [ n, arr ] = args
  }

  if (!Array.isArray(arr) || arr.length === 0) return null
  if (n === 1) return arr[0]
  return arr.slice(0, n)
})


// STANDARD METHODS
// Arr.map
export const map = curry(function map(fn: (...args: any[]) => any, arr: any[]) {
  if (!isArray(arr)) return null
  return arr.map(fn)
})

// Arr.reduce
export const reduce = curry(function reduce(fn: (...args: any[]) => any, starter: any, arr: any[]): any {
  if (!isArray(arr)) return null
  return arr.reduce(fn, starter)
})

// Arr.length
export const length = function length(arr: any[]): null | number {
  if (!isArray(arr)) return null

  return arr.length
}

// Arr.concat
export const concat = curry(function concat(arr: any[], arr2: any[]): any[] {
  if (!isArray(arr) && !Array.isArray(arr2)) return null

  const a = isArray(arr) ? arr : []
  const b = isArray(arr2) ? arr2 : []

  return a.concat(b)
})

// Arr.concatAll
// Does not work with partial application
export const concatAll = function concatAll(...arrs: any[][]): any[] {
  if (arrs.length === 0) return null
  const nonNullArrs = arrs.filter(a => a != null)

  return [].concat(...nonNullArrs)
}

// Arr.every
export const every = curry(function every(predicate: (value: any, index: number, array: any[]) => value is any, arr: any[]): boolean {
  if (!isArray(arr)) return null

  return arr.every(predicate)
})

// Arr.filter
export const filter = curry(function filter(fn: (...args: any[]) => boolean, arr: any[]): any[] {
  if (!isArray(arr)) return null
  return arr.filter(fn)
})

// Arr.find
export const find = curry(function find(fn: (...args: any[]) => boolean, arr: any[]): any {
  if (!isArray(arr)) return null
  return arr.find(fn)
})

// Arr.findIndex
export const findIndex = curry(function find(fn: (...args: any[]) => boolean, arr: any[]): number {
  if (!isArray(arr)) return null
  return arr.findIndex(fn)
})

// Arr.flat
export const flat = function flat(arr: any[]): any[] {
  if (!isArray(arr)) return null
  return Array.from(arr).flat()
}

// Arr.flatTo
export const flatTo = curry(function flatTo(to: number, arr: any[]): any[] {
  if (!isArray(arr)) return null
  return Array.from(arr).flat(to)
})

// Arr.flatMap
export const flatMap = curry(function flatMap(fn: (...args: any[]) => any, arr: any[]): any[] {
  if (!isArray(arr)) return null
  return arr.flatMap(fn)
})

// Arr.forEach
export const forEach = curry(function forEach(fn: (...args: any[]) => any, arr: any[]) {
  if (!isArray(arr)) return null
  return arr.forEach(fn)
})

// Arr.from
export const from = function from(arr: any[]): any[] {
  if (!isArray(arr)) return null
  return Array.from(arr)
}

// Arr.mapFrom
export const mapFrom = curry(function mapFrom(fn: (...args: any[]) => any, arr: any[]): any[] {
  if (!isArray(arr)) return null
  return Array.from(arr, fn)
})

// Arr.includes
export const includes = curry(function includes(item: any, arr: any[]): boolean {
  if (!isArray(arr)) return null
  return arr.includes(item)
})

// Arr.indexOf
export const indexOf = curry(function indexOf(item: any, arr: any[]): number | null {
  if (!Array.isArray(arr)) return null
  return arr.indexOf(item)
})

// Arr.isArray
export const isArray = Array.isArray

// Arr.join
export const join = function join(arr: any[]): string | null {
  if (!isArray(arr)) return null
  return arr.join("")
}

// Arr.joinWith
export const joinWith = curry(function joinWith(delimiter: string, arr: any[]): string | null {
  if (!isArray(arr)) return null
  return arr.join(delimiter)
})

// Arr.lastIndexOf
export const lastIndexOf = curry(function lastIndexOf(item: any, arr: any[]): number | null {
  if (!isArray(arr)) return null
  return arr.lastIndexOf(item)
})

// Arr.push
export const push = curry(function push(item: any, arr: any[]): any[] | null {
  if (!isArray(arr)) return null
  return [...arr, item]
})

// Arr.reduceRight
export const reduceRight = curry(function reduceRight(fn: (...args: any[]) => any, starter: any, arr: any[]): any {
  if (!isArray(arr)) return null
  return arr.reduceRight(fn, starter)
})

// Arr.reverse
export const reverse = curry(function reverse(arr: any[]): any[] {
  if (!isArray(arr)) return null
  return from(arr).reverse()
})

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

