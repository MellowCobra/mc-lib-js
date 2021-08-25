"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = exports.Obj = exports.Arr = void 0;
const ArrModule = require("./array");
const ObjModule = require("./object");
const UtilModule = require("./util");
exports.Arr = ArrModule;
exports.Obj = ObjModule;
exports.Util = UtilModule;
exports.default = {
    Arr: exports.Arr,
    Obj: exports.Obj,
    Util: exports.Util
};
