# MC Lib
The MellowCobra Library for JavaScript is a collection of common methods for standard operations to fill in gaps in the existing standard JS library.

It contains functions for common operations that I find myself doing all over the place.

## Documentation
Documentation is built from the code directly using TypeDoc and can be viewed [here](https://mellowcobra.github.io/mc-lib-js/)

## Modules:
- Util - A collection of utility methods for checking equality of various values
- Arr - A collection of methods for dealing with arrays
- Obj - A collection of methods for dealing with objects

## Usage

Import each module as needed
```typescript
import { Arr } from "@mellow.cobra/lib"

console.log(Arr.contains(1, [1, 2, 3]))   // true
```

Import all modules in a single namespace
```typescript
import MCLib from "@mellow.cobra/lib"

console.log(MCLib.Arr.contains(1, [1, 2, 3]))   // true
```