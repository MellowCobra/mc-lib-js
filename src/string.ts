/**
 * The Str module provides utility methods for dealing with strings.
 * @module Str
 */

 import { curry } from "./function"

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
export const isString = curry(function isString(str: string): boolean {
  // @ts-ignore
  return typeof str === "string" || str instanceof String
})

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
export const at = curry(function at(index: number, str: string): string {
  switch(true) {
    case !isString(str):
    case str.length === 0:
    case index > str.length + 1:
      return null
    case index < 0:
      return str[str.length + index]
    default:
      return str[index]
  }
})

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
export const concat = function concat(...strs: string[]): string {
  if (strs.length === 0) return null

  strs.forEach((s, i) => {
    if (!isString(s)) {
      throw new Error(`Arguments to Str.concat must be strings. Attempted to concat value ${s} as argument ${i + 1}`)
    }
  })

  const [ str1, ...rest ] = strs

  return str1.concat(...rest)
}

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
export const includes = curry(function (substr: string, str: string): boolean {
  if (!isString(substr) || !isString(str)) return null

  return str.includes(substr)
})

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
export const localeCompare = function localeCompare(a: string, b: string, ...args: any[]): number {
  if (!isString(a) || !isString(b)) return null

  return a.localeCompare(b, ...args)
}