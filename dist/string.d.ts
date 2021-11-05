/**
 * The Str module provides utility methods for dealing with strings.
 * @module Str
 */
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
export declare const isString: import("./function").AnyFunction;
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
export declare const at: import("./function").AnyFunction;
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
export declare const concat: (...strs: string[]) => string | null;
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
export declare const includes: import("./function").AnyFunction;
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
export declare const localeCompare: (a: string, b: string, ...args: any[]) => number | null;
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
export declare const endsWith: import("./function").AnyFunction;
