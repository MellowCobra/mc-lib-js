/**
 * The Fn module provides utility methods for dealing with functions.
 * @module Fn
 */
export declare type AnyFunction = (...args: any[]) => any;
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
export declare function curry(fn: AnyFunction): AnyFunction;
