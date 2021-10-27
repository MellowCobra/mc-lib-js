/**
 * The Obj module provides utility methods for dealing with objects.
 * @module Obj
 */

import { curry } from "./function"
import * as Arr from "./array"


/**
 * Retrieves data deeply nested within an object.
 * 
 * This prevents having to check for null or undefined values at each nested level of the object.
 * 
 * @param { any } obj the object containing the data to retrieve
 * @param { (string|number)[] } keys an argument list of keys
 * @returns { any | null }
 * 
 * Usage:
 * ```typescript
 * const object = {
 *   a: {
 *     b: {
 *       c: "Hello!"
 *     }
 *   }
 * }
 * 
 * Obj.getIn("a", "b", "c", object)     // "Hello!"
 * Obj.getIn("x", "y", object)          // null
 * ```
 */
export const getIn = curry(function (...args: [any] | [...any[], any]): any | null {
  if (args.length === 0) return null
  
  let keys, obj
  if (args.length === 1) {
    return args[0]
  } else {
    obj = Arr.last(args)
    keys = args.slice(0, args.length - 1)
  }

  if (obj == null || typeof obj !== "object") return null

  const [key, ...rest] = keys

  const next = obj[key]

  if (next == null) return null
  if (rest.length === 0) return next

  return getIn(...rest, next)
})

/**
 * Returns true or false if value passed in is an empty object.
 * 
 * Non-object inputs yield a null return value
 * 
 * @param { any } obj the object to check
 * @returns { any | null }
 * 
 * Usage:
 * ```typescript
 * Obj.isEmpty({})                // true
 * Obj.isEmpty({ a: "hello" })    // false
 * Obj.isEmpty(1)                 // null
 * ```
 */
export const isEmpty = curry(function isEmpty(obj: {}): boolean | null {
  if (obj == null || typeof obj !== 'object' || Array.isArray(obj)) return null

  return Object.keys(obj).length === 0
})

/**
 * Returns a new object that has the specified fields omitted
 * 
 * Non-object inputs yield a null return value
 * 
 * @param { any } obj the object to check
 * @returns { any | null }
 * 
 * Usage:
 * ```typescript
 * Obj.withoutKeys(["age"], { name: "Brian", age: 25, gender: "M" })  // { name: "Brian", gender: "M" }
 * ```
 */
export const withoutKeys = curry(function withoutKeys(keys: [string], obj: {}): any {
  if (obj == null || typeof obj !== "object" || Array.isArray(obj)) return null

  return Object.entries(obj)
    .reduce((newObj, [k, v]) => {
      if (!Arr.contains(k, keys)) newObj[k] = v

      return newObj
    }, {})
})

/**
 * Returns a new object that has only the specified fields
 * 
 * Non-object inputs yield a null return value
 * 
 * @param { any } obj the object to check
 * @returns { any | null }
 * 
 * Usage:
 * ```typescript
 * Obj.onlyKeys(["name", "age"], { name: "Brian", age: 25, gender: "M" })  // { name: "Brian", age: 25 }
 * ```
 */
export const onlyKeys = curry(function onlyKeys(keys: [string], obj: {}): any{
  if (obj == null || typeof obj !== "object" || Array.isArray(obj)) return null

  return Object.entries(obj)
    .reduce((newObj, [k, v]) => {
      if (Arr.contains(k, keys)) newObj[k] = v

      return newObj
    }, {})
})

/**
 * Wrapper around the Object.keys method.
 * Returns an array of strings specifying the keys on an object.
 * 
 * @param { any } obj the object to check
 * @returns { [string] | null }
 * 
 * Usage:
 * ```typescript
 * Obj.keys({ name: "Brian", age: 25, gender: "M" })  // ["name", "age", "gender"]
 * ```
 */
export const keys = curry(Object.keys)

/**
 * Wrapper around the Object.values method.
 * Returns an array of the values inside an object.
 * 
 * @param { any } obj the object to check
 * @returns { [any] | null }
 * 
 * Usage:
 * ```typescript
 * Obj.values({ name: "Brian", age: 25, gender: "M" })  // ["Brian", 25, "M"]
 * ```
 */
export const values = curry(Object.values)

/**
 * Wrapper around the Object.entries method.
 * Returns an array of arrays where each sub array maps to a key:value pair; the first element being the key, and the second element being the value.
 * 
 * @param { any } obj the object to check
 * @returns { [ string, any ] | null }
 * 
 * Usage:
 * ```typescript
 * Obj.keys({ name: "Brian", age: 25, gender: "M" })  // ["name", "age", "gender"]
 * ```
 */
export const entries = curry(Object.entries)

/**
 * Wrapper around the Object.freeze method.
 * Returns a frozen instance of the object passed in. 
 * Attempts to modify this new frozen object will throw an erro
 * 
 * @param { any } obj the object to check
 * @returns { [ string, any ] | null }
 * 
 * Usage:
 * ```typescript
 * const frozenBrian = Obj.freeze({ name: "Brian", age: 25, gender: "M" })
 * 
 * frozenBrian.age = 26           // Throws error
 * console.log(frozenBrian.age)   // 25
 * ```
 */
export const freeze = curry(Object.freeze)
