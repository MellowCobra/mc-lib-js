"use strict";
/**
 * The Obj module provides utility methods for dealing with objects.
 * @module Obj
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIn = void 0;
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
 * Obj.getIn(object, "a", "b", "c")     // "Hello!"
 * Obj.getIn(object, "x", "y")          // null
 * ```
 */
function getIn(obj, ...keys) {
    if (keys.length === 0)
        return obj;
    if (obj == null || typeof obj !== "object")
        return null;
    const [key, ...rest] = keys;
    const next = obj[key];
    if (next == null)
        return null;
    if (rest.length === 0)
        return next;
    return getIn(next, ...rest);
}
exports.getIn = getIn;
