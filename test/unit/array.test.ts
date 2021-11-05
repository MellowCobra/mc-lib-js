import * as Arr from "../../src/array"
import * as Str from "../../src/string"

describe("Array Module", () => {
  describe("first", () => {
    test("returns the only item in an array length 1", () => {
      expect(Arr.first(["hi"])).toEqual("hi")
    })

    test("returns the first item in an array length > 1", () => {
      expect(Arr.first(["hi", "friend"])).toEqual("hi")
    })

    test("returns null for empty array", () => {
      expect(Arr.first([])).toBeNull()
    })

    test("returns undefined when array is undefined", () => {
      // @ts-ignore
      expect(Arr.first()).toBeUndefined()
    })

    test("returns first N items when array length == N items", () => {
      expect(Arr.first(3, [1, 2, 3])).toEqual([1, 2, 3])
    })

    test("returns first N items when array length > N", () => {
      expect(Arr.first(3, [1,2,3,4,5])).toEqual([1,2,3])
    })

    test("returns all items when N passed in and array length < N", () => {
      expect(Arr.first(5, [1,2,3])).toEqual([1,2,3])
    })
  })

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
      // @ts-ignore
      expect(Arr.lastItem()).toBeUndefined()
    })
  })

  describe("last", () => {
    test("returns the only item in an array length 1", () => {
      expect(Arr.last(["hi"])).toEqual("hi")
    })

    test("returns the last item in an array length > 1", () => {
      expect(Arr.last(["a", "b", "c"])).toEqual("c")
    })

    test("returns null for empty array", () => {
      expect(Arr.last([])).toBeNull()
    })

    test("returns undefined when array is undefined", () => {
      // @ts-ignore
      expect(Arr.last()).toBeUndefined()
    })

    test("returns last N items when array length == N", () => {
      expect(Arr.last(3, [1,2,3])).toEqual([1,2,3])
    })

    test("returns last N items when array length > N", () => {
      expect(Arr.last(3, [1,2,3,4,5])).toEqual([3,4,5])
    })

    test("returns entire array when array length < N", () => {
      expect(Arr.last(5, [1,2,3])).toEqual([1,2,3])
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
      // @ts-ignore
      expect(Arr.contains()).toBe(undefined)
    })
  })

  describe("isEmptyArray", () => {
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
      expect(Arr.distinctBy("name", fruits)).toEqual([
        { name: "apple", color: "red", shape: "round" },
        { name: "grape", color: "purple", shape: "round" },
        { name: "banana", color: "yellow", shape: "long" }
      ])
    })

    test("returns distinct array when distinction function is passed in; keeps first matching item", () => {
      const byColorAndShape = (fruit: any): string  => {
        return `${fruit.color}:${fruit.shape}`
      }

      expect(Arr.distinctBy(byColorAndShape, fruits)).toEqual([
        { name: "apple", color: "red", shape: "round" },
        { name: "apple", color: "green", shape: "round" },
        { name: "grape", color: "purple", shape: "round" },
        { name: "banana", color: "yellow", shape: "long" }
      ])
    })

    test("returns empty array for empty array", () => {
      expect(Arr.distinctBy('id', [])).toEqual([])
    })

    test("returns empty array when field is passed in, but no matching field exists on object", () => {
      expect(Arr.distinctBy("isBerry", fruits)).toEqual([])
    })

    test("returns original array when already unique", () => {
      expect(Arr.distinctBy("name", distinctFruits)).toEqual(distinctFruits)
    })
  })

  describe("length", () => {
    test.each([null, undefined, {}, 1, "hallo"])("returns null when input is", (value) => {
      expect(Arr.length(value)).toBeNull()
    })

    test("0 for empty array", () => {
      expect(Arr.length([])).toBe(0)
    })

    test("N for Nth length array", () => {
      expect(Arr.length([1,2,3])).toBe(3)
    })
  })

  describe("concat", () => {
    test("combines 2 arrays into one array", () => {
      expect(Arr.concat([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6])
    })

    test.each([null, undefined])("returns original array if one arg is %s", (v) => {
      expect(Arr.concat(v, [1,2,3])).toEqual([1,2,3])
      expect(Arr.concat([1,2,3], v)).toEqual([1,2,3])
    })

    test.each([1, "string", {}])("returns null when %s is passed in", (v) => {
      expect(Arr.concat(v, [1,2,3])).toEqual([1,2,3])
    })

    test("can be partially applied", () => {
      const concatABC = Arr.concat(["A", "B", "C"])

      expect(concatABC(["D", "E", "F"])).toEqual(["A", "B", "C", "D", "E", "F"])
    })
  })

  describe("concatAll", () => {
    test("combines N arrays into one array", () => {
      expect(Arr.concatAll([1,2], [3,4], [5,6])).toEqual([1,2,3,4,5,6])
    })

    test.each([null, undefined])("only concat arrays which are not %s", (v) => {
      expect(Arr.concatAll(v, [1,2], [3,4])).toEqual([1,2,3,4])
      expect(Arr.concatAll([1,2], v, [3,4])).toEqual([1,2,3,4])
      expect(Arr.concatAll([1,2], [3,4], v)).toEqual([1,2,3,4])
    })
  })

  describe("every", () => {
    test.each([null, undefined, {}, "hallo"])("if array passed in is %s, return null", (v) => {
      expect(Arr.every(a => a > -1, v)).toBeNull()
    })

    test("returns true if every item in array matches condition", () => {
      expect(Arr.every(a => a > -1, [1, 5, 435, Infinity])).toBe(true)
    })

    test("returns false if any item in array does not match condition", () => {
      expect(Arr.every(a => a > -1, [3, 654, -1])).toBe(false)
    })

    test("can be partially applied", () => {
      const allNonNegative = Arr.every(a => a > -1)
      expect(allNonNegative([1, 2345, Infinity])).toBe(true)
    })
  })

  describe("filter", () => {
    test("returns new array only including items which meet criteria", () => {
      expect(Arr.filter(a => a > -1, [1, -5, 255, -Infinity])).toEqual([1, 255])
    })

    test("can be partially applied", () => {
      const onlyNonNegative = Arr.filter(a => a > -1)
      expect(onlyNonNegative([1, -5, 255, -Infinity])).toEqual([1, 255])
    })
  })

  describe("find", () => {
    test("returns the item which matches criteria", () => {
      expect(Arr.find(a => a.a === 3, [{a:1},{a:2},{a:3},{a:4}])).toEqual({a:3})
    })

    test("returns first matched value", () => {
      expect(Arr.find(a => a.a > 2, [{a:1},{a:2},{a:3},{a:4}])).toEqual({a:3})
    })

    test("can be partially applied", () => {
      const getGreaterThan2 = Arr.find(a => a.a > 2)
      expect(getGreaterThan2([{a:1},{a:2},{a:3},{a:4}])).toEqual({a:3})
    })
  })

  describe("findIndex", () => {
    test("returns index of the item which matches criteria", () => {
      expect(Arr.findIndex(a => a.a === 3, [{a:1},{a:2},{a:3},{a:4}])).toEqual(2)
    })

    test("returns index of first matched value", () => {
      expect(Arr.findIndex(a => a.a > 1, [{a:1},{a:2},{a:3},{a:4}])).toEqual(1)
    })

    test("can be partially applied", () => {
      const getGreaterThan1 = Arr.findIndex(a => a.a > 1)
      expect(getGreaterThan1([{a:1},{a:2},{a:3},{a:4}])).toEqual(1)
    })
  })

  describe("flat", () => {
    test("returns a new flattened array", () => {
      expect(Arr.flat([1,2,[3,4]])).toEqual([1,2,3,4])
    })

    test("only does one level", () => {
      expect(Arr.flat([1,[2,[3,4]]])).toEqual([1,2,[3,4]])
    })
  })

  describe("flatTo", () => {
    test("flattens to the level specified", () => {
      expect(Arr.flatTo(2, [1,[2,[3,[4,5]]]])).toEqual([1,2,3,[4,5]])
    })

    test("can be partially applied", () => {
      const flattenTo2 = Arr.flatTo(2)
      expect(flattenTo2([1,[2,[3,[4,5]]]])).toEqual([1,2,3,[4,5]])
    })
  })

  describe("flatMap", () => {
    const sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"];

    test("maps over elements and returns flattened array of the results", () => {
      expect(Arr.flatMap(s => s.split(" "), sentences)).toEqual([ 'JavaScript', 'Array', 'flatMap()', '', '', 'is', '', '', 'Awesome' ])
    })

    test("can be partially applied", () => {
      const splitSpaceFlat = Arr.flatMap(s => s.split(" "))
      expect(splitSpaceFlat(sentences)).toEqual([ 'JavaScript', 'Array', 'flatMap()', '', '', 'is', '', '', 'Awesome' ])
    })
  })

  describe("forEach", () => {
    let add1

    beforeEach(() => {
      add1 = jest.fn(a => a + 1)
    })

    test("calls the function once for each item in array", () => {
      Arr.forEach(add1, [1,2,3,4])
      expect(add1.mock.calls.length).toBe(4)
    })

    test("pass in associated element for each call", () => {
      Arr.forEach(add1, [1,2,3,4])
      expect(add1.mock.calls[0][0]).toBe(1)
      expect(add1.mock.calls[1][0]).toBe(2)
      expect(add1.mock.calls[2][0]).toBe(3)
      expect(add1.mock.calls[3][0]).toBe(4)
    })

    test("can be partially applied", () => {
      const add1OnEach = Arr.forEach(add1)
      add1OnEach([1,2,3,4])

      expect(add1.mock.calls[0][0]).toBe(1)
      expect(add1.mock.calls[1][0]).toBe(2)
      expect(add1.mock.calls[2][0]).toBe(3)
      expect(add1.mock.calls[3][0]).toBe(4)
    })
  })

  describe("from", () => {
    test("instantiates new array from src array", () => {
      const originalArray = [1,2,3]
      const newArray = Arr.from(originalArray)
      newArray[1] = -1

      expect(newArray).toEqual([1,-1,3])
      expect(originalArray).toEqual([1,2,3])
    })
  })

  describe("mapFrom", () => {
    test("instantiates a new array resulting from mapping over the original", () => {
      const originalArray = [1,2,3]
      const newArray = Arr.mapFrom(a => a * a, originalArray)

      expect(newArray).toEqual([1, 4, 9])
    })

    test("can be partially applied", () => {
      const squareElements = Arr.mapFrom(a => a * a)

      expect(squareElements([1,2,3])).toEqual([1,4,9])
    })
  })

  describe("includes", () => {
    test("true when item is only item in array", () => {
      expect(Arr.includes(1, [1])).toBe(true)
    })

    test("true when item is at the end of an array", () => {
      expect(Arr.includes(3, [1, 2, 3])).toBe(true)
    })

    test("true when item is null and is contained in array", () => {
      expect(Arr.includes(null, [1, null, "a"])).toBe(true)
    })

    test("false when item is undefined and array is empty", () => {
      expect(Arr.includes(undefined, [])).toBe(false)
    })

    test("false when item is not in array", () => {
      expect(Arr.includes(1, [2, 3, 4])).toBe(false)
    })

    test("false when array is empty", () => {
      expect(Arr.includes(1, [])).toBe(false)
    })

    test("false when no array passed in", () => {
      // @ts-ignore
      expect(Arr.includes()).toBe(undefined)
    })

    test("can be partially applied", () => {
      const includes5 = Arr.includes(5)
      expect(includes5([1,2,3,4,5,6])).toBe(true)
    })
  })

  describe("indexOf", () => {
    test("returns null when array is not valid array", () => {
      expect(Arr.indexOf(3, {})).toBe(null)
      expect(Arr.indexOf(3, "hallo")).toBe(null)
    })

    test("returns -1 when item not in list", () => {
      expect(Arr.indexOf(3, [0,1,2])).toBe(-1)
    })

    test("returns 0 when item in first slot", () => {
      expect(Arr.indexOf(4, [4, 5, 6])).toBe(0)
    })

    test("returns length - 1 when item at end of list", () => {
      const arr = [1,2,3,4]
      expect(Arr.indexOf(4, arr)).toBe(arr.length - 1)
    })

    test("correct when in the middle of the array", () => {
      expect(Arr.indexOf(2, [0,1,2,3,4])).toBe(2)
    })

    test("can be partially applied", () => {
      const indexOfBanana = Arr.indexOf("banana")
      expect(indexOfBanana(["apple", "orange", "banana", "grape"])).toBe(2)
    })
  })

  describe("isArray", () => {
    test.each([Infinity, NaN, null, undefined, 1, "hallo", {a: 1}, {0: 0, 1: 1}])("returns false for %s", (v) => {
      expect(Arr.isArray(v)).toBe(false)
    })

    test.each([[], [1,2,3], [{}, []], new Array(3)])("returns true for %s", (...v) => {
      expect(Arr.isArray(v)).toBe(true)
    })
  })

  describe("join", () => {
    test("returns null for invalid array input", () => {
      expect(Arr.join({})).toBeNull()
    })

    test("joins elements together into a string with no delimiter", () => {
      expect(Arr.join([1,2,3])).toBe("123")
    })

    test("attempts to stringify elements prior to joining", () => {
      expect(Arr.join([1, "hallo", [1,2], {a:1}])).toBe("1hallo1,2[object Object]")
    })
  })

  describe("joinWith", () => {
    test("returns null for invalid array input", () => {
      expect(Arr.joinWith("|", {})).toBeNull()
    })

    test("joins elements together into a string with specified delimiter", () => {
      expect(Arr.joinWith(" ", [1,2,3])).toBe("1 2 3")
    })

    test("attempts to stringify elements prior to joining", () => {
      expect(Arr.joinWith("|", [1, "hallo", [1,2], {a:1}])).toBe("1|hallo|1,2|[object Object]")
    })

    test("can be partially applied", () => {
      const joinWithPipe = Arr.joinWith("|")
      expect(joinWithPipe(["apple", "orange", "banana"])).toBe("apple|orange|banana")
    })
  })

  describe("lastIndexOf", () => {
    test("returns null if array is not valid", () => {
      expect(Arr.lastIndexOf(3, {})).toBeNull()
    })

    test("returns index of first item if it is the only match", () => {
      expect(Arr.lastIndexOf(3, [1,2,3,4])).toBe(2)
    })

    test("returns the last index of a match if there are multiple", () => {
      expect(Arr.lastIndexOf(2, [2,3,1,2,5,6,2,6])).toBe(6)
    })

    test("can be partially applied", () => {
      const lastIndexOf2 = Arr.lastIndexOf(2)
      expect(lastIndexOf2([2,3,1,2,5,6,2,6])).toBe(6)
    })
  })

  describe("map", () => {
    test("returns null when array is not valid", () => {
      expect(Arr.map(a => a + 1, {})).toBeNull()
    })

    test("returns a new array with the function applied to each element", () => {
      expect(Arr.map(a => a * a, [1,2,3,4])).toEqual([1,4,9,16])
    })

    test("can be partially applied", () => {
      const squareEach = Arr.map(a => a * a)
      expect(squareEach([1,2,3,4])).toEqual([1,4,9,16])
    })
  })


  describe("push", () => {
    test("returns a new array with the added element at the end", () => {
      expect(Arr.push(3, [1,2])).toEqual([1,2,3])
    })

    test("returns null when no valid array passed in", () => {
      expect(Arr.push(3, {})).toBeNull()
    })

    test("can be partially applied", () => {
      const push3 = Arr.push(3)
      expect(push3([1,2])).toEqual([1,2,3])
    })
  })

  describe("reduce", () => {
    test("returns a new value built by reducing", () => {
      expect(Arr.reduce((sum, num) => sum + num, 0, [1,2,3,4,5])).toBe(15)
    })

    test("can be partially applied", () => {
      const sum = Arr.reduce((sum, num) => sum + num, 0)
      expect(sum([1,2,3,4,5])).toBe(15)
    })
  })

  describe("reduceRight", () => {
    test("performs reduce but goes in reverse array order", () => {
      expect(Arr.reduceRight((acc, word) => acc + word[0], "", ["apple", "banana", "grape"])).toBe("gba")
    })

    test("can be partially applied", () => {
      const firstLetterReversed = Arr.reduceRight((acc, word) => acc + word[0], "")
      expect(firstLetterReversed(["apple", "banana", "grape"])).toBe("gba")
    })
  })

  describe("reverse", () => {
    test("returns a new array that is reverse of the original", () => {
      expect(Arr.reverse([1,2,3])).toEqual([3,2,1])
    })

    test("returns null when arg is not a valid array", () => {
      expect(Arr.reverse({})).toBeNull()
      expect(Arr.reverse(1)).toBeNull()
      expect(Arr.reverse("Hello")).toBeNull()
    })
  })

  describe("slice", () => {})
  describe("some", () => {})
  describe("sort", () => {})
  describe("splice", () => {})
})