import * as Obj from "../../src/object"

describe("Object Module", () => {
  describe("getIn", () => {
    test("returns null for no object", () => {
      expect(Obj.getIn(null, "hello")).toBeNull()
    })

    test("returns the original object for no keys", () => {
      const object = { hello: "world" }

      expect(Obj.getIn(object)).toBe(object)
    })

    test("returns value when object contains value", () => {
      const object = { hello: "world" }

      expect(Obj.getIn(object, "hello")).toBe("world")
    })

    test("returns value when object contains nested value", () => {
      const object = {
        a: {
          b: "c"
        }
      }

      expect(Obj.getIn(object, "a", "b")).toBe("c")
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

      expect(Obj.getIn(object, "a", "b", 1, "name")).toBe("Johns")
    })

    test("returns null when object does not contain value", () => {
      expect(Obj.getIn({}, "a")).toBeNull()
    })

    test("returns null when object does not contain nested value", () => {
      const object = {
        a: {}
      }
      
      expect(Obj.getIn(object, "a", "b")).toBeNull()
    })

    test("returns null if part of nested value is not an object", () => {
      const object = {
        a: {
          b: 1
        }
      }

      expect(Obj.getIn(object, "a", "b", "c")).toBeNull()
    })
  })
})