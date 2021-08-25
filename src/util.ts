/**
 * This module contains various utility methods for checking values. 
 * They can be used to test equality or validity of data, such as if a value is _exactly_ `true`, or if it is an empty string (and not just `null`).
 * 
 * Many of the methods in this module are trivial. 
 * The intent is to provide explicit checks for values, since type coercion in JavaScript can at times cause equality checks to be maddeningly non-apparent and inconsistent (see [dotJS 2012 - Brian Leroux - WTFJS](https://www.youtube.com/watch?v=et8xNAc2ic8).)
 * 
 * @module Util
 */


/**
 * Returns `false` if the input value is _exactly_ `null`. 
 * Returns `true` for __all__ other values, including `undefined`.
 * @param a 
 * @returns 
 */
export function notNull(a: any): boolean {
  return a === undefined ? false : a !== null
}

/**
 * Returns `true` if the input value is not considered a "falsy" value.
 * @param a 
 * @returns 
 */
export function notFalsy(a: any): boolean {
  return a != false
}

/**
 * Returns `false` if the input value is _exactly_ `false`. 
 * Returns `true` for __all__ other values, including "falsy" ones.
 * @param a 
 * @returns 
 */
export function notFalse(a: any): boolean {
  return a !== false
}

/**
 * Returns `true` if the input value is _exactly_ `false`.
 * Returns `false` for __all__ other values, including "falsy" ones.
 * @param a 
 * @returns 
 */
export function isFalse(a: any): boolean {
  return a === false
}

/**
 * Returns `true` if the input value is not considered a "truthy" value.
 * @param a 
 * @returns 
 */
export function notTruthy(a: any): boolean {
  return a != true
}

/**
 * Returns `false` if the input value is _exactly_ `true`.
 * Returns `true` for __all__ other values, including "truthy" ones.
 * @param a 
 * @returns 
 */
export function notTrue(a: any): boolean {
  return a !== true
}

/**
 * Returns `true` if the input is _exactly_ `true`. 
 * Returns `false` for all other values, even "truthy" ones.
 * @param a 
 * @returns 
 */
export function isTrue(a: any): boolean {
  return a === true
}

/**
 * Returns `true` if the input is a string (literal or String instance) containing one or more characters.
 * Returns `false` for all other values.
 * @param a 
 * @returns 
 */
export function isNonEmptyString(a: any): boolean {
  return (typeof a === "string" || a instanceof String) && a.length > 0
}

/**
 * Returns `true` if the input is a string (literal or String instance) containing 0 characters.
 * Returns `false` for all other values.
 * @param a 
 * @returns 
 */
export function isEmptyString(a: any): boolean {
  return (typeof a === "string" || a instanceof String) && a.length === 0
}
