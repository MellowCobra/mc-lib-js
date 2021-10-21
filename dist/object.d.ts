/**
 * The Obj module provides utility methods for dealing with objects.
 * @module Obj
 */
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
export declare const getIn: import("./function").AnyFunction;
