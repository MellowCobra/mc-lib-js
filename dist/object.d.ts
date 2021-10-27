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
/**
 * Returns true or false if value passed in is an empty object.
 *
 * Non-object inputs yield a null return value
 *
 * @param { any } obj the object to check
 * @returns { any | null }
 *
 * Usage:
 * ```typescript
 * Obj.isEmpty({})                // true
 * Obj.isEmpty({ a: "hello" })    // false
 * Obj.isEmpty(1)                 // null
 * ```
 */
export declare const isEmpty: import("./function").AnyFunction;
/**
 * Returns a new object that has the specified fields omitted
 *
 * Non-object inputs yield a null return value
 *
 * @param { any } obj the object to check
 * @returns { any | null }
 *
 * Usage:
 * ```typescript
 * Obj.withoutKeys(["age"], { name: "Brian", age: 25, gender: "M" })  // { name: "Brian", gender: "M" }
 * ```
 */
export declare const withoutKeys: import("./function").AnyFunction;
/**
 * Returns a new object that has only the specified fields
 *
 * Non-object inputs yield a null return value
 *
 * @param { any } obj the object to check
 * @returns { any | null }
 *
 * Usage:
 * ```typescript
 * Obj.onlyKeys(["name", "age"], { name: "Brian", age: 25, gender: "M" })  // { name: "Brian", age: 25 }
 * ```
 */
export declare const onlyKeys: import("./function").AnyFunction;
/**
 * Wrapper around the Object.keys method.
 * Returns an array of strings specifying the keys on an object.
 *
 * @param { any } obj the object to check
 * @returns { [string] | null }
 *
 * Usage:
 * ```typescript
 * Obj.keys({ name: "Brian", age: 25, gender: "M" })  // ["name", "age", "gender"]
 * ```
 */
export declare const keys: import("./function").AnyFunction;
/**
 * Wrapper around the Object.values method.
 * Returns an array of the values inside an object.
 *
 * @param { any } obj the object to check
 * @returns { [any] | null }
 *
 * Usage:
 * ```typescript
 * Obj.values({ name: "Brian", age: 25, gender: "M" })  // ["Brian", 25, "M"]
 * ```
 */
export declare const values: import("./function").AnyFunction;
/**
 * Wrapper around the Object.entries method.
 * Returns an array of arrays where each sub array maps to a key:value pair; the first element being the key, and the second element being the value.
 *
 * @param { any } obj the object to check
 * @returns { [ string, any ] | null }
 *
 * Usage:
 * ```typescript
 * Obj.keys({ name: "Brian", age: 25, gender: "M" })  // ["name", "age", "gender"]
 * ```
 */
export declare const entries: import("./function").AnyFunction;
/**
 * Wrapper around the Object.freeze method.
 * Returns a frozen instance of the object passed in.
 * Attempts to modify this new frozen object will throw an erro
 *
 * @param { any } obj the object to check
 * @returns { [ string, any ] | null }
 *
 * Usage:
 * ```typescript
 * const frozenBrian = Obj.freeze({ name: "Brian", age: 25, gender: "M" })
 *
 * frozenBrian.age = 26           // Throws error
 * console.log(frozenBrian.age)   // 25
 * ```
 */
export declare const freeze: import("./function").AnyFunction;
