"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyString = exports.isNonEmptyString = exports.isFalse = exports.isTrue = exports.notTrue = exports.notTruthy = exports.notFalse = exports.notFalsy = exports.notNull = void 0;
function notNull(a) {
    return a === undefined ? false : a !== null;
}
exports.notNull = notNull;
function notFalsy(a) {
    return a != false;
}
exports.notFalsy = notFalsy;
function notFalse(a) {
    return a !== false;
}
exports.notFalse = notFalse;
function notTruthy(a) {
    return a != true;
}
exports.notTruthy = notTruthy;
function notTrue(a) {
    return a !== true;
}
exports.notTrue = notTrue;
function isTrue(a) {
    return a === true;
}
exports.isTrue = isTrue;
function isFalse(a) {
    return a === false;
}
exports.isFalse = isFalse;
function isNonEmptyString(a) {
    return (typeof a === "string" || a instanceof String) && a.length > 0;
}
exports.isNonEmptyString = isNonEmptyString;
function isEmptyString(a) {
    return (typeof a === "string" || a instanceof String) && a.length === 0;
}
exports.isEmptyString = isEmptyString;
