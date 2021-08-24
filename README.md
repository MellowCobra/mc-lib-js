# MC Lib
The MellowCobra Library for JavaScript is a collection of common methods for standard operations to fill in gaps in the existing standard JS library

## Modules:
- [Util](#util) - A collection of utility methods for checking equality of various values
- [Arr](#arr) - A collection of methods for arrays

## Util

This module contains various utility methods for checking values. They can be used to test equality or validity of data, such as if a value is _exactly_ `true`, or if it is an empty string (and not just `null`).

Many of the methods in this module are trivial. The intent is to provide explicit checks for values, since type coercion in JavaScript can at times cause equality checks to be maddeningly non-apparent and inconsistent (see [dotJS 2012 - Brian Leroux - WTFJS](https://www.youtube.com/watch?v=et8xNAc2ic8).)

__notNull(any): boolean__

Returns `false` if the input value is _exactly_ `null`. Returns `true` for __all__ other values, including `undefined`.


__notFalsy(any): boolean__

Returns `true` if the input value is not considered a "falsy" value.


__notFalse(any): boolean__

Returns `false` if the input value is _exactly_ `false`. Returns `true` for __all__ other values, including "falsy" ones.


__isFalse(any): boolean__

Returns `true` if the input value is _exactly_ `false`. Returns `false` for __all__ other values, including "falsy" ones.


__notTruthy(any): boolean__

Returns `true` if the input value is not considered a "truthy" value.


__notTrue(any): boolean__

Returns `false` if the input value is _exactly_ `true`. Returns `true` for __all__ other values, including "truthy" ones.


__isTrue(any): boolean__

Returns `true` if the input is _exactly_ `true`. Returns `false` for all other values, even "truthy" ones.


__isNonEmptyString(any): boolean__

Returns `true` if the input is a string (literal or String instance) containing one or more characters. Returns `false` for all other values.


__isEmptyString(any): boolean__

Returns `true` if the input is a string (literal or String instance) containing 0 characters. Returns `false` for all other values.


## Arr

This module contains methods for dealing with arrays.


__lastItem\<T\>(T[]): T__

Returns the last item in an array, or `null` if the array is empty. 

If the argument is not an array, returns `null`.

```javascript
Arr.lastItem([1, 2, 3])     // 3
Arr.lastItem([])            // null
```


__contains\<T\>(T, T[]): boolean__

Returns true if an array contains a given value. 

This is just a convenient shorthand to prevent having to use `indexOf(...) > -1`, and does not currently check for object equality.

```javascript
Arr.contains("apple", ["grape", "apple", "banana"])   // true
Arr.contains(4, [1, 2, 3])                            // false
Arr.contains(1, [])                                   // false
```


__isEmpty\<T\>(T[]): boolean__

Returns `true` if a value is an array and is empty.

```javascript
Arr.isEmpty([])     // true
Arr.isEmpty([1])    // false
Arr.isEmptyArray(null)   // false; it is not an array so false by default
```
