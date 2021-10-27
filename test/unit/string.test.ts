import * as Str from "../../src/string"

describe("Str module", () => {
  describe("isString", () => {
    test("empty string is true", () => {
      expect(Str.isString("")).toBe(true)
    })

    test("non-empty string is true", () => {
      expect(Str.isString("hello")).toBe(true)
    })

    test("instance of String is true", () => {
      expect(Str.isString(new String("hello"))).toBe(true)
    })

    test.each([null, undefined, { a: 1 }, ["h", "i", "!"], NaN])("false for %s", (value) => {
      expect(Str.isString(value)).toBe(false)
    })
  })

  describe("at", () => {
    test("empty string yields null", () => {
      expect(Str.at(0, "")).toBeNull()
    })

    test("index greater than length yields null", () => {
      expect(Str.at(12, "hi there!")).toBeNull()
    })

    test("0 gets first character", () => {
      expect(Str.at(0, "hello")).toBe("h")
    })

    test("gets the specified character", () => {
      expect(Str.at(5, "I am Doug")).toBe("D")
    })

    test("works for negative indices", () => {
      expect(Str.at(-2, "I am Doug")).toBe("u")
    })

    test("can be curried", () => {
      const lastChar = Str.at(-1)

      expect(lastChar("ABC")).toBe("C")
    })
  })

  describe("concat", () => {
    test("no strings yields null", () => {
      expect(Str.concat()).toBeNull()
    })

    test("if any argument is not a string, throw error", () => {
      // @ts-ignore
      expect(() => Str.concat("hi", " I am ", 5, " years old"))
        .toThrow(`Arguments to Str.concat must be strings. Attempted to concat value 5 as argument 3`)
    })

    test("passing in strings yields a new string", () => {
      expect(Str.concat("hello", " my name is", " ", "Slim Shady")).toEqual("hello my name is Slim Shady")
    })
  })

  describe("includes", () => {
    test.each([null, undefined, ["a", "b", "c"], { a: 1 }])("yields null when string is %s", (value) => {
      expect(Str.includes("a", value)).toBeNull()
    })

    test("empty string in any string always yields true", () => {
      expect(Str.includes("", "")).toBe(true)
      expect(Str.includes("", "hallo")).toBe(true)
    })

    test("yields true when substring is in the string", () => {
      expect(Str.includes("Jim", "My name might just be Jim Pickens...")).toBe(true)
    })

    test("yields false when substring is not in the string", () => {
      expect(Str.includes("Z", "abzDFSGESD")).toBe(false)
    })

    test("can be curried", () => {
      const hasEllipsis = Str.includes("...")

      expect(hasEllipsis("ABCDEFGHIJKLMNO...")).toBe(true)
    })
  })

  describe("localeCompare", () => {
    const a = 'réservé'; // with accents, lowercase
    const b = 'RESERVE'; // no accents, uppercase

    test("with accents", () => {
      expect(Str.localeCompare(a, b)).toBe(1)
    })

    test("using options", () => {
      expect(Str.localeCompare(a, b, "en", { sensitivity: "base" })).toBe(0)
    })

    test("passing in non-strings yields null", () => {
      expect(Str.localeCompare(null, "a")).toBeNull()
    })
  })
})