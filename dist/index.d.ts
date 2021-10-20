/**
 * Entrypoint for the library
 *
 * Usage:
 *
 * ```typescript
 * // Import modules needed
 * import { Arr } from "@mellow.cobra/lib"
 *
 * console.log(Arr.contains(1, [1, 2, 3]))        // true
 * ```
 * OR
 * ```typescript
 * // Import all modules into on namespace
 * import MCLib from "@mellow.cobra/lib"
 *
 * console.log(MCLib.Arr.contains(1, [1, 2, 3]))  // true
 * ```
 *
 * @module
 */
import * as ArrModule from "./array";
import * as FnModule from "./function";
import * as ObjModule from "./object";
import * as UtilModule from "./util";
export declare const Arr: typeof ArrModule;
export declare const Fn: typeof FnModule;
export declare const Obj: typeof ObjModule;
export declare const Util: typeof UtilModule;
declare const _default: {
    Arr: typeof ArrModule;
    Fn: typeof FnModule;
    Obj: typeof ObjModule;
    Util: typeof UtilModule;
};
export default _default;
