/**
 * The Fn module provides utility methods for dealing with functions.
 * @module Fn
 */

export type AnyFunction = (...args: any[]) => any

/**
 * Curries a function so that it can be split into a function taking 
 * the first argument(s) and returning a function taking the next argument(s), 
 * down to N arguments.
 * 
 * This enables partial application.
 * 
 * Does not work with variable argument functions.
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

/**
 * Takes multiple functions in an argument list and returns a new function
 * that will take the args of the first function and pipe the results of each
 * function in order to produce the result.
 * 
 * Can utilize Fn.curry to pass in partially applied functions.
 * 
 * @param { ...fns } AnyFunction[] the functions being piped
 * @returns { fn } a new piped function which 
 * 
 * Usage:
 * ```typescript
 * // Piping 2 functions
 * function increment(n) { return n + 1 }
 * function double(n) { return n * 2 }
 * 
 * const incrementAndDouble = Fn.pipe(
 *   increment,
 *   double
 * )
 * 
 * incrementAndDouble(3)            // 8
 * 
 * 
 * // Utilize partial application
 * function add(a, b) { return a + b }
 * 
 * const doubleThenAdd3 = Fn.pipe(
 *   double,
 *   Fn.curry(add)(3)
 * )
 * 
 * doubleThenAdd3(2)                // 7
 * ```
 */
export function pipe(...fns: AnyFunction[]): AnyFunction {
  if (fns == null || fns.length == 0 || fns.some(fn => typeof fn !== 'function')) {
    throw new TypeError("All arguments to Fn.pipe must be functions")
  }


  return function piped(...args) {
    return fns.reduce((arg, fn) => {
      if (Array.isArray(arg)) {
        return fn(...arg)
      } else {
        return fn(arg)
      }
    }, args)
  }
}