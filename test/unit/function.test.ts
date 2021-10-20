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

    test("a curried function arity 2 can be called with 0 arguments and returns the original curried function", () => {
      const curriedAdd = Fn.curry(add)
      expect(curriedAdd()).toEqual(curriedAdd)
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
})