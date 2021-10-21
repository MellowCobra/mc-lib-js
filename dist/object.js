"use strict";
/**
 * The Obj module provides utility methods for dealing with objects.
 * @module Obj
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIn = void 0;
const function_1 = require("./function");
const Arr = require("./array");
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
exports.getIn = function_1.curry(function (...args) {
    if (args.length === 0)
        return null;
    let keys, obj;
    if (args.length === 1) {
        return args[0];
    }
    else {
        obj = Arr.last(args);
        keys = args.slice(0, args.length - 1);
    }
    if (obj == null || typeof obj !== "object")
        return null;
    const [key, ...rest] = keys;
    const next = obj[key];
    if (next == null)
        return null;
    if (rest.length === 0)
        return next;
    return exports.getIn(...rest, next);
});
// Obj.keys
// Obj.isEmpty
// Obj.values
// Obj.entries
// Obj.withoutKeys
// Obj.onlyKeys
