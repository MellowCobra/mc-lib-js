import * as Fn from "../../src/function"

function add(a, b) {
  return a + b
}

function max(a, b, c) {
  return Math.max(a, b, c)
}

describe("Fn module", () => {
  describe("curry", () => {
    test("passing a function returns a new function", () => {
      expect(typeof Fn.curry(add)).toEqual("function")
    })

    test("a curried function arity 2 can be called with 1 argument and return a new function", () => {
      const add1 = Fn.curry(add)(1)
      expect(typeof add1).toEqual("function")
    })

    test("calling a curried function arity 2 that has been partially applied with 1 argument can be called with 1 more argument to yield the result", () => {
      const add1 = Fn.curry(add)(1)
      expect(add1(2)).toEqual(3)
    })

    test("a curried function arity 2 can be called with 2 arguments and return the result of that function", () => {
      const curriedAdd = Fn.curry(add)
      expect(curriedAdd(2, 3)).toEqual(5)
    })

    test("a curried function arity 3 can be partially applied with 2 arguments and return a new function", () => {
      const curriedMax = Fn.curry(max)
      expect(curriedMax(2, -1)(5)).toEqual(5)
    })

    test("a curried function called with no arguments returns undefined", () => {
      const curriedAdd = Fn.curry(add)
      expect(curriedAdd()).toBeUndefined()
    })

    test("passing in undefined throws an error", () => {
      // @ts-ignore
      expect(() => Fn.curry()).toThrowError("Argument to Fn.curry must be a function")
    })
  
    test("passing in null throws an error", () => {
      expect(() => Fn.curry(null)).toThrowError("Argument to Fn.curry must be a function")
    })
  
    test("passing in a non-function literal value throws an error", () => {
      // @ts-ignore
      expect(() => Fn.curry(1)).toThrowError("Argument to Fn.curry must be a function")
    })
  
    test("passing in an object throws an error", () => {
      // @ts-ignore
      expect(() => Fn.curry({ hello: "it's me" })).toThrowError("Argument to Fn.curry must be a function")
    })
  
    test("passing in an array throws an error", () => {
      // @ts-ignore
      expect(() => Fn.curry(["i've", "been", "wondering"])).toThrowError("Argument to Fn.curry must be a function")
    })
  })

  describe("pipe", () => {
    function inc(n) {
      return n + 1
    }

    function double(n) {
      return n * 2
    }

    function add(a, b) {
      return a + b
    }
    
    function mul(a, b) {
      return a * b
    }

    function max(a, b, c) {
      return Math.max(a, b, c)
    }

    test.each([undefined, null, 1, "hallo"])("throws error if %s passed in", (input) => {
      // @ts-ignore
      expect(() => Fn.pipe(input)).toThrowError("All arguments to Fn.pipe must be functions")
    })

    test("throws error if any argument is not a function", () => {
      expect(() => Fn.pipe(inc, null, double)).toThrowError("All arguments to Fn.pipe must be functions")
    })

    test("passes results of first function into the second function", () => {
      const result = Fn.pipe(
        double,
        inc
      )(1)

      expect(result).toEqual(3)
    })

    test("can pass in partially applied functions", () => {
      const result = Fn.pipe(
        Fn.curry(add)(3),
        Fn.curry(mul)(2)
      )(2)

      expect(result).toEqual(10)
    })

    test("handles partially applied functions that are not satisfied by the pipeline", () => {
      // Takes 3, doubles it (6) and then returns a function that will find the max between 6 and other 2 arguments
      const result = Fn.pipe(
        double,
        Fn.curry(max)
      )(3)

      expect(typeof result).toEqual("function")
      expect(typeof result(3)).toEqual("function")
      expect(result(3,5)).toEqual(6)
    })

    test("does not handle when first function takes multiple params", () => {
      const result = Fn.pipe(
        add,
        inc,
        double
      )(2, 3)


      /**
       * Instead, do this:
       * 
       * const result = Fn.pipe(
       *    inc,
       *    double
       * )(add(2,3))
       */

      expect(result).toEqual(NaN)
    })

    test("passing in garbage args to functions yields garbage results (not much we can do about that)", () => {
      expect(Fn.pipe(add, double)(2)).toBeNaN()
      expect(Fn.pipe(inc, Fn.curry(add)("hallo"))(1)).toEqual("hallo2")
    })

    test("trying to partially apply a function that has not been curried will throw an error", () => {
      expect(() => {
        Fn.pipe(
          inc,
          // @ts-ignore
          add(2)
        )(2)
      }).toThrowError()
    })

    test("can handle passing an array through the pipe", () => {
      const people = [
        { name: "Jimmy", age: 8, sex: "M" },
        { name: "John", age: 19, sex: "M" },
        { name: "Aisling", age: 5, sex: "NB" },
        { name: "Caoimhe", age: 26, sex: "F" },
        { name: "Saoirse", age: 88, sex: "F" },
        { name: "Jane", age: 48, sex: "NB" },
        { name: "Lisa", age: 58, sex: "F" },
        { name: "Kelley", age: 16, sex: "F" },
        { name: "Ronan", age: 18, sex: "NB" },
        { name: "Zelda", age: 25, sex: "F" },
        { name: "C3P0", age: 14, sex: null }
      ]

      function isNonbinary(p) { return p.sex === "NB"; }
      function isUnderage(p) { return p.age <= 18; }

      const underageNonBinary = Fn.pipe(
        p => Array.prototype.filter.call(p, isNonbinary),
        p => Array.prototype.filter.call(p, isUnderage)
      )(people)

      expect(underageNonBinary).toEqual([
        { name: "Aisling", age: 5, sex: "NB" },
        { name: "Ronan", age: 18, sex: "NB" }
      ])
    })
  })
})
