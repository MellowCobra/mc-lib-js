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
      expect(Arr.contains(1, [1])).toBe(true)
    })

    test("true when item is at the end of an array", () => {
      expect(Arr.contains(3, [1, 2, 3])).toBe(true)
    })

    test("true when item is null and is contained in array", () => {
      expect(Arr.contains(null, [1, null, "a"])).toBe(true)
    })

    test("false when item is undefined and array is empty", () => {
      expect(Arr.contains(undefined, [])).toBe(false)
    })

    test("false when item is not in array", () => {
      expect(Arr.contains(1, [2, 3, 4])).toBe(false)
    })

    test("false when array is empty", () => {
      expect(Arr.contains(1, [])).toBe(false)
    })

    test("false when no array passed in", () => {
      expect(Arr.contains(1)).toBe(false)
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
})