"use strict";
/**
 * The Fn module provides utility methods for dealing with functions.
 * @module Fn
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = exports.curry = void 0;
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
function curry(fn) {
    // Only functions are curryable
    if (typeof fn !== 'function') {
        throw new TypeError("Argument to Fn.curry must be a function");
    }
    return function curried(...args) {
        switch (true) {
            case args.length === 0: return undefined;
            case args.length >= fn.length: return fn(...args);
            default: return (...args2) => curried(...args, ...args2);
        }
    };
}
exports.curry = curry;
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
function pipe(...fns) {
    if (fns == null || fns.length == 0 || fns.some(fn => typeof fn !== 'function')) {
        throw new TypeError("All arguments to Fn.pipe must be functions");
    }
    return (arg) => fns.reduce((acc, fn) => fn(acc), arg);
}
exports.pipe = pipe;
