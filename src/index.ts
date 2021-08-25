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

import * as ArrModule from "./array"
import * as ObjModule from "./object"
import * as UtilModule from  "./util"

export const Arr = ArrModule
export const Obj = ObjModule
export const Util = UtilModule

export default {
  Arr,
  Obj,
  Util
}