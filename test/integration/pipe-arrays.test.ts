import * as Fn from "../../src/function"
import * as Arr from "../../src/array"

const fruits = [
  { name: "grape", color: "green", shape: "round" },
  { name: "apple", color: "green", shape: "round" },
  { name: "grape", color: "purple", shape: "round" },
  { name: "apple", color: "red", shape: "round" },
  { name: "apple", color: "red", shape: "round" },  // Duplicate
  { name: "banana", color: "yellow", shape: "long" }
]

describe("array methods", () => {
  describe("distinctBy", () => {
    test("can pipe an array into distinctBy", () => {
      const result = Fn.pipe(
        Arr.distinctBy('name'),
        Arr.distinctBy('color')
      )(fruits)

      expect(result).toEqual([
        { name: "grape", color: "green", shape: "round" },
        { name: "banana", color: "yellow", shape: "long" }
      ])
    })

    test("can pipe an array into contains", () => {
      const result = Fn.pipe(
        Arr.map(a => a.name),
        Arr.contains('banana')
      )(fruits)

      expect(result).toBe(true)
    })

    test("can pipe an array into filter and reduce", () => {
      const fruitCountNoBananas = Fn.pipe(
        Arr.map(a => a.name),                       // Grab the names
        Arr.filter(name => name !== "banana"),      // We don't like bananas here...
        Arr.reduce((acc, name) => {                 // Get a count of each fruit name
          if (acc[name] == null) acc[name] = 0
          acc[name]++

          return acc
        }, {})
      )(fruits)

      expect(fruitCountNoBananas).toEqual({
        apple: 3,
        grape: 2
      })
    })
  })
})