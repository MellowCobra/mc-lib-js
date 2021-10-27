import * as Obj from "../../src/object"

describe("Object Module", () => {
  describe("getIn", () => {
    test("returns null for no object", () => {
      expect(Obj.getIn("hello", null)).toBeNull()
    })

    test("returns the original object for no keys", () => {
      const object = { hello: "world" }

      expect(Obj.getIn(object)).toBe(object)
    })

    test("returns value when object contains value", () => {
      const object = { hello: "world" }

      expect(Obj.getIn("hello", object)).toBe("world")
    })

    test("returns value when object contains nested value", () => {
      const object = {
        a: {
          b: "c"
        }
      }

      expect(Obj.getIn("a", "b", object)).toBe("c")
    })

    test("can pass indexes for arrays", () => {
      const object = {
        a: {
          b: [
            { name: "Jimmy" },
            { name: "Johns" }
          ]
        }
      }

      expect(Obj.getIn("a", "b", 1, "name", object)).toBe("Johns")
    })

    test("returns null when object does not contain value", () => {
      expect(Obj.getIn("a", {})).toBeNull()
    })

    test("returns null when object does not contain nested value", () => {
      const object = {
        a: {}
      }
      
      expect(Obj.getIn("a", "b", object)).toBeNull()
    })

    test("returns null if part of nested value is not an object", () => {
      const object = {
        a: {
          b: 1
        }
      }

      expect(Obj.getIn("a", "b", "c", object)).toBeNull()
    })
  })

  describe("keys", () => {
    test("on an empty object, returns empty array", () => {
      expect(Obj.keys({})).toEqual([])
    })

    test("on an non-nested object, returns an array of keys", () => {
      expect(Obj.keys({ a: "hello", b: "my name is"})).toEqual([ 'a', 'b' ])
    })

    test("on nested object, only show top-level keys", () => {
      expect(Obj.keys({ a: { b: 'c' } })).toEqual(['a'])
    })

    test("keys are strings", () => {
      expect(Obj.keys({0: 0, 1: 1})).toEqual(['0', '1'])
    })
  })

  describe("values", () => {
    test("on an empty object, returns an empty array", () => {
      expect(Obj.values({})).toEqual([])
    })

    test("on a non-nested object, returns an array of the values", () => {
      expect(Obj.values({ a: "hello", b: "my name is"})).toEqual(["hello", "my name is"])
    })

    test("on nested object, returns values included entire nested values", () => {
      expect(Obj.values({ a: { b: 'c' } })).toEqual([{ b: 'c' }])
    })
  })

  describe("freeze", () => {
    test("attempting to modify frozen objects throws error", () => {
      const dinner = { entree: "chicken parmesan", servings: 7 }
      const frozenDinner = Obj.freeze(dinner)
      expect(() => {
        frozenDinner.servings = 8
        expect(frozenDinner.servings).toEqual(7)
      }).toThrow()
    })
  })

  describe("isEmpty", () => {
    test("true for empty objects", () => {
      expect(Obj.isEmpty({})).toBe(true)
    })

    test("false for non-empty object", () => {
      expect(Obj.isEmpty({ a: 1 })).toBe(false)
    })

    test("null for empty array", () => {
      expect(Obj.isEmpty([])).toBeNull()
    })

    test("null for non-empty array", () => {
      expect(Obj.isEmpty([1,2,3])).toBeNull()
    })

    test.each([1, null, undefined, "abc", () => {}])("null for %s", (value) => {
      expect(Obj.isEmpty(value)).toBeNull()
    })
  })

  describe("withoutKeys", () => {
    const brian = { name: "Brian", age: 25, gender: "M" }
    
    test.each([1, null, undefined, "abc", () => {}])("null for %s", (value) => {
      expect(Obj.withoutKeys(["a"], value)).toBeNull()
    })

    test("empty object for empty object input", () => {
      expect(Obj.withoutKeys(['a'], {})).toEqual({})
    })

    test("not passing in keys yields same object", () => {
      
      expect(Obj.withoutKeys([], brian))
    })

    test("yields new object with specified keys omitted", () => {
      expect(Obj.withoutKeys(["age", "gender"], brian)).toEqual({ name: "Brian" })
    })

    test("can be curried", () => {
      const removeGenderField = Obj.withoutKeys(["gender"])

      expect(removeGenderField(brian)).toEqual({ name: "Brian", age: 25 })
    })
  })

  describe("onlyKeys", () => {
    const gertie = { name: "Gertrude", age: 32, gender: "F" }

    test.each([1, null, undefined, "abc", () => {}])("null for %s", (value) => {
      expect(Obj.onlyKeys(['a'], value)).toBeNull()
    })

    test("empty object for empty input", () => {
      expect(Obj.onlyKeys(["a"], {})).toEqual({})
    })

    test("not passing in keys yields an empty object", () => {
      expect(Obj.onlyKeys([], gertie)).toEqual({})
    })

    test("yields new objects with only the specified keys", () => {
      expect(Obj.onlyKeys(["name", "gender"], gertie)).toEqual({ name: "Gertrude", gender: "F" })
    })

    test("can be curried", () => {
      const nameAndAge = Obj.onlyKeys(["name", "age"])

      expect(nameAndAge(gertie)).toEqual({ name: "Gertrude", age: 32 })
    })
  })
})