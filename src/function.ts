/**
 * The Fn module provides utility methods for dealing with functions.
 * @module Fn
 */

export type AnyFunction = (...args: any[]) => any

/**
 * Curries a function so that it can be split into a function taking 
 * the first argument and returning a function taking the next argument, 
 * down to N arguments.
 * 
 * Does not work with variable argument functions
 * 
 * This enables partial application
 * 
 * @param { fn } function the function being curried
 * @returns { fn } a new function which can be partially applied
 * 
 * Usage:
 * ```typescript
 * function add(a, b) {
 *  return a + b
 * }
 * 
 * const curriedAdd = Fn.curry(add)
 * 
 * const add9 = curriedAdd(9)
 * 
 * add9(1)            // 10
 * curriedAdd(9, 1)   // 10
 * curriedAdd(9)(1)   // 10
 * ```
 */
export function curry(fn: AnyFunction): AnyFunction  {
  // Only functions are curryable
  if (typeof fn !== 'function') {
    throw new TypeError("Argument to Fn.curry must be a function")
  }

  return function curried(...args) {
    // If no arguments passed in, return self
    if (args.length === 0) {
      return curried
    }
    // If args take up the remaining parameters, apply them
    else if (args.length >= fn.length) {
      return fn(...args)
    } 
    // If args do not take all remaining parameters, partially apply them and return a new function
    else {
      return function(...args2) {
        return curried(...args, ...args2);
      }
    }
  }
}