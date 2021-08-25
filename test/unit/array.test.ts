import * as Arr from "../../src/array"

describe("Array Module", () => {
  describe("lastItem", () => {
    test("returns the only item in an array length 1", () => {
      expect(Arr.lastItem(["hi"])).toEqual("hi")
    })

    test("returns the last item in an array length > 1", () => {
      expect(Arr.lastItem(["a", "b", "c"])).toEqual("c")
    })

    test("returns null for empty array", () => {
      expect(Arr.lastItem([])).toBeNull()
    })

    test("returns undefined when array is undefined", () => {
      expect(Arr.lastItem()).toBeNull()
    })
  })

  describe("contains", () => {
    test("true when item is only item in array", () => {
      expect(Arr.contains([1], 1)).toBe(true)
    })

    test("true when item is at the end of an array", () => {
      expect(Arr.contains([1, 2, 3], 3)).toBe(true)
    })

    test("true when item is null and is contained in array", () => {
      expect(Arr.contains([1, null, "a"], null)).toBe(true)
    })

    test("false when item is undefined and array is empty", () => {
      expect(Arr.contains([], undefined)).toBe(false)
    })

    test("false when item is not in array", () => {
      expect(Arr.contains([2, 3, 4], 1)).toBe(false)
    })

    test("false when array is empty", () => {
      expect(Arr.contains([], 1)).toBe(false)
    })

    test("false when no array passed in", () => {
      expect(Arr.contains()).toBe(false)
    })
  })

  describe("isEmpty", () => {
    test("true for empty array", () => {
      expect(Arr.isEmptyArray([])).toBe(true)
    })

    test("true for empty Array instance", () => {
      expect(Arr.isEmptyArray(new Array())).toBe(true)
    })

    test("false for non-empty array", () => {
      expect(Arr.isEmptyArray([1, 2, 3])).toBe(false)
    })

    test("false for non-empty Array instance", () => {
      expect(Arr.isEmptyArray(new Array(1, 2, 3))).toBe(false)
    })

    test("true for null", () => {
      expect(Arr.isEmptyArray(null)).toBe(true)
    })
  })

  describe("distinctBy", () => {
    const fruits = [
      { name: "apple", color: "red", shape: "round" },
      { name: "apple", color: "green", shape: "round" },
      { name: "grape", color: "purple", shape: "round" },
      { name: "apple", color: "red", shape: "round" },  // Duplicate
      { name: "grape", color: "green", shape: "round" },
      { name: "banana", color: "yellow", shape: "long" }
    ]

    const distinctFruits = [
      { name: "apple", color: "red" },
      { name: "grape", color: "purple" },
      { name: "banana", color: "yellow" }
    ]

    test("returns distinct array when key is passed in; keeps first matching item", () => {
      expect(Arr.distinctBy(fruits, "name")).toEqual([
        { name: "apple", color: "red", shape: "round" },
        { name: "grape", color: "purple", shape: "round" },
        { name: "banana", color: "yellow", shape: "long" }
      ])
    })

    test("returns distinct array when distinction function is passed in; keeps first matching item", () => {
      const byColorAndShape = (fruit: any): string  => {
        return `${fruit.color}:${fruit.shape}`
      }

      expect(Arr.distinctBy(fruits, byColorAndShape)).toEqual([
        { name: "apple", color: "red", shape: "round" },
        { name: "apple", color: "green", shape: "round" },
        { name: "grape", color: "purple", shape: "round" },
        { name: "banana", color: "yellow", shape: "long" }
      ])
    })

    test("returns empty array for empty array", () => {
      expect(Arr.distinctBy([], 'id')).toEqual([])
    })

    test("returns empty array when field is passed in, but no matching field exists on object", () => {
      expect(Arr.distinctBy(fruits, "isBerry")).toEqual([])
    })

    test("returns original array when already unique", () => {
      expect(Arr.distinctBy(distinctFruits, "name")).toEqual(distinctFruits)
    })

    test("returns original array when no field or delegate function provided", () => {
      expect(Arr.distinctBy(fruits)).toEqual(fruits)
    })
  })
})