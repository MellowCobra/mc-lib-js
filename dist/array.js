"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyArray = exports.contains = exports.lastItem = void 0;
function lastItem(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return null;
    return arr[arr.length - 1];
}
exports.lastItem = lastItem;
function contains(item, arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return false;
    return arr.indexOf(item) > -1;
}
exports.contains = contains;
function isEmptyArray(arr) {
    if (!Array.isArray(arr))
        return true;
    return arr.length === 0;
}
exports.isEmptyArray = isEmptyArray;
