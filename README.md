# MC Lib

__@mellow.cobra/lib__


The MellowCobra Library for JavaScript is a collection of common methods for standard operations to fill in gaps in the existing standard JS library.

It contains functions for common operations that I find myself doing all over the place.

## Documentation
Documentation is built from the code directly using TypeDoc and can be viewed [here](https://mellowcobra.github.io/mc-lib-js/)

## Modules:
- [Arr](https://mellowcobra.github.io/mc-lib-js/modules/Arr.html) - A collection of methods for dealing with arrays
- [Fn](https://mellowcobra.github.io/mc-lib-js/modules/Fn.html) - A collection of methods for dealing with functions
- [Obj](https://mellowcobra.github.io/mc-lib-js/modules/Obj.html) - A collection of methods for dealing with objects
- [Util](https://mellowcobra.github.io/mc-lib-js/modules/Util.html) - A collection of utility methods for checking equality of various values
## Installation
NPM
```
npm install @mellow.cobra/lib
```

Yarn
```
yarn add @mellow.cobra/lib
```


## Usage

Import each module as needed
```typescript
import { Arr } from "@mellow.cobra/lib"

console.log(Arr.lastItem([1, 2, 3]))   // 3
```

Import all modules in a single namespace
```typescript
import MCLib from "@mellow.cobra/lib"

console.log(MCLib.Arr.lastItem([1, 2, 3]))   // 3
```