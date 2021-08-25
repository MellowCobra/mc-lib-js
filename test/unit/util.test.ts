import * as Util from "../../src/util"

describe("Util Module", () => {
  describe("notNull", () => {
    test("true for null", () => {
      expect(Util.notNull("a")).toBe(true)
    })

    test("true for array", () => {
      expect(Util.notNull([])).toBe(true)
    })

    test("true for object", () => {
      expect(Util.notNull({})).toBe(true)
    })

    test("true for 0", () => {
      expect(Util.notNull(0)).toBe(true)
    })

    test("false for null", () => {
      expect(Util.notNull(null)).toBe(false)
    })

    test("false for undefined", () => {
      expect(Util.notNull(undefined)).toBe(false)
    })
  })

  describe("notFalsy", () => {
    test("true for true", () => {
      expect(Util.notFalsy(true)).toBe(true)
    })

    test("true for empty object", () => {
      expect(Util.notFalsy({})).toBe(true)
    })

    test("true for non-empty array", () => {
      expect(Util.notFalsy([1])).toBe(true)
    })

    test("true for negative number", () => {
      expect(Util.notFalsy(-1)).toBe(true)
    })

    test("true for positive number", () => {
      expect(Util.notFalsy(1)).toBe(true)
    })

    test("true for Infinity", () => {
      expect(Util.notFalsy(Infinity)).toBe(true)
    })

    test("true for NaN", () => {
      expect(Util.notFalsy(NaN)).toBe(true)
    })

    test("true for string containing text", () => {
      expect(Util.notFalsy("hello")).toBe(true)
    })

    test("true for string containing 'false'", () => {
      expect(Util.notFalsy("false")).toBe(true)
    })

    test("false for false", () => {
      expect(Util.notFalsy(false)).toBe(false)
    })

    test("false for empty array", () => {
      expect(Util.notFalsy([])).toBe(false)
    })

    test("false for 0", () => {
      expect(Util.notFalsy(0)).toBe(false)
    })

    test("false for empty string", () => {
      expect(Util.notFalsy("")).toBe(false)
    })

    test("false for string containing only 0", () => {
      expect(Util.notFalsy("0")).toBe(false)
    })
  })

  describe("notFalse", () => {
    test("true for true", () => {
      expect(Util.notFalse(true)).toBe(true)
    })

    test("true for empty object", () => {
      expect(Util.notFalse({})).toBe(true)
    })

    test("true for non-empty array", () => {
      expect(Util.notFalse([1])).toBe(true)
    })

    test("true for negative number", () => {
      expect(Util.notFalse(-1)).toBe(true)
    })

    test("true for positive number", () => {
      expect(Util.notFalse(1)).toBe(true)
    })

    test("true for Infinity", () => {
      expect(Util.notFalse(Infinity)).toBe(true)
    })

    test("true for NaN", () => {
      expect(Util.notFalse(NaN)).toBe(true)
    })

    test("true for string containing text", () => {
      expect(Util.notFalse("hello")).toBe(true)
    })

    test("true for string containing 'false'", () => {
      expect(Util.notFalse("false")).toBe(true)
    })

    test("false for false", () => {
      expect(Util.notFalse(false)).toBe(false)
    })

    test("true for empty array", () => {
      expect(Util.notFalse([])).toBe(true)
    })

    test("true for 0", () => {
      expect(Util.notFalse(0)).toBe(true)
    })

    test("true for empty string", () => {
      expect(Util.notFalse("")).toBe(true)
    })

    test("true for string containing only 0", () => {
      expect(Util.notFalse("0")).toBe(true)
    })
  })

  describe("isFalse", () => {
    test("false for true", () => {
      expect(Util.isFalse(true)).toBe(false)
    })

    test("false for empty object", () => {
      expect(Util.isFalse({})).toBe(false)
    })

    test("false for non-empty array", () => {
      expect(Util.isFalse([1])).toBe(false)
    })

    test("false for negative number", () => {
      expect(Util.isFalse(-1)).toBe(false)
    })

    test("false for positive number", () => {
      expect(Util.isFalse(1)).toBe(false)
    })

    test("false for Infinity", () => {
      expect(Util.isFalse(Infinity)).toBe(false)
    })

    test("false for NaN", () => {
      expect(Util.isFalse(NaN)).toBe(false)
    })

    test("false for string containing text", () => {
      expect(Util.isFalse("hello")).toBe(false)
    })

    test("false for string containing 'false'", () => {
      expect(Util.isFalse("false")).toBe(false)
    })

    test("true for false", () => {
      expect(Util.isFalse(false)).toBe(true)
    })

    test("false for empty array", () => {
      expect(Util.isFalse([])).toBe(false)
    })

    test("false for 0", () => {
      expect(Util.isFalse(0)).toBe(false)
    })

    test("false for empty string", () => {
      expect(Util.isFalse("")).toBe(false)
    })

    test("false for string containing only 0", () => {
      expect(Util.isFalse("0")).toBe(false)
    })
  })

  describe("notTruthy", () => {
    test("false for true", () => {
      expect(Util.notTruthy(true)).toBe(false)
    })

    test("true for empty object", () => {
      expect(Util.notTruthy({})).toBe(true)
    })

    test("false for non-empty array", () => {
      expect(Util.notTruthy([1])).toBe(false)
    })

    test("true for negative number", () => {
      expect(Util.notTruthy(-1)).toBe(true)
    })

    test("false for positive number", () => {
      expect(Util.notTruthy(1)).toBe(false)
    })

    test("true for Infinity", () => {
      expect(Util.notTruthy(Infinity)).toBe(true)
    })

    test("false for NaN", () => {
      expect(Util.notTruthy(NaN)).toBe(true)
    })

    test("true for string containing text", () => {
      expect(Util.notTruthy("hello")).toBe(true)
    })

    test("true for string containing 'true'", () => {
      expect(Util.notTruthy("false")).toBe(true)
    })

    test("true for false", () => {
      expect(Util.notTruthy(false)).toBe(true)
    })

    test("true for empty array", () => {
      expect(Util.notTruthy([])).toBe(true)
    })

    test("true for 0", () => {
      expect(Util.notTruthy(0)).toBe(true)
    })

    test("true for empty string", () => {
      expect(Util.notTruthy("")).toBe(true)
    })

    test("true for string containing only 0", () => {
      expect(Util.notTruthy("0")).toBe(true)
    })
  })

  describe("notTrue", () => {
    test("false for true", () => {
      expect(Util.notTrue(true)).toBe(false)
    })

    test("true for empty object", () => {
      expect(Util.notTrue({})).toBe(true)
    })

    test("true for non-empty array", () => {
      expect(Util.notTrue([1])).toBe(true)
    })

    test("true for negative number", () => {
      expect(Util.notTrue(-1)).toBe(true)
    })

    test("true for positive number", () => {
      expect(Util.notTrue(1)).toBe(true)
    })

    test("true for Infinity", () => {
      expect(Util.notTrue(Infinity)).toBe(true)
    })

    test("true for NaN", () => {
      expect(Util.notTrue(NaN)).toBe(true)
    })

    test("true for string containing text", () => {
      expect(Util.notTrue("hello")).toBe(true)
    })

    test("true for string containing 'true'", () => {
      expect(Util.notTrue("false")).toBe(true)
    })

    test("true for false", () => {
      expect(Util.notTrue(false)).toBe(true)
    })

    test("true for empty array", () => {
      expect(Util.notTrue([])).toBe(true)
    })

    test("true for 0", () => {
      expect(Util.notTrue(0)).toBe(true)
    })

    test("true for empty string", () => {
      expect(Util.notTrue("")).toBe(true)
    })

    test("true for string containing only 0", () => {
      expect(Util.notTrue("0")).toBe(true)
    })
  })

  describe("isTrue", () => {
    test("true for true", () => {
      expect(Util.isTrue(true)).toBe(true)
    })

    test("false for empty object", () => {
      expect(Util.isTrue({})).toBe(false)
    })

    test("false for non-empty array", () => {
      expect(Util.isTrue([1])).toBe(false)
    })

    test("false for negative number", () => {
      expect(Util.isTrue(-1)).toBe(false)
    })

    test("false for positive number", () => {
      expect(Util.isTrue(1)).toBe(false)
    })

    test("false for Infinity", () => {
      expect(Util.isTrue(Infinity)).toBe(false)
    })

    test("false for NaN", () => {
      expect(Util.isTrue(NaN)).toBe(false)
    })

    test("false for string containing text", () => {
      expect(Util.isTrue("hello")).toBe(false)
    })

    test("false for string containing 'true'", () => {
      expect(Util.isTrue("false")).toBe(false)
    })

    test("false for false", () => {
      expect(Util.isTrue(false)).toBe(false)
    })

    test("false for empty array", () => {
      expect(Util.isTrue([])).toBe(false)
    })

    test("false for 0", () => {
      expect(Util.isTrue(0)).toBe(false)
    })

    test("false for empty string", () => {
      expect(Util.isTrue("")).toBe(false)
    })

    test("false for string containing only 0", () => {
      expect(Util.isTrue("0")).toBe(false)
    })
  })

  describe("isNonEmptyString", () => {
    test("true for string literal", () => {
      const str = "hello world!"
      expect(Util.isNonEmptyString(str)).toBe(true)
    })

    test("true for String instance", () => {
      const str = new String("hello world!")
      expect(Util.isNonEmptyString(str)).toBe(true)
    })

    test("false for null", () => {
      expect(Util.isNonEmptyString(null)).toBe(false)
    })

    test("false for undefined", () => {
      expect(Util.isNonEmptyString(undefined)).toBe(false)
    })

    test("false for empty string literal", () => {
      const str = ""
      expect(Util.isNonEmptyString(str)).toBe(false)
    })

    test("false for empty String instance", () => {
      const str = new String()
      expect(Util.isNonEmptyString(str)).toBe(false)
    })

    test("false for number", () => {
      const str = 1234
      expect(Util.isNonEmptyString(str)).toBe(false)
    })
  })

  describe("isEmptyString", () => {
    test("true for empty string literal", () => {
      const str = ""
      expect(Util.isEmptyString(str)).toBe(true)
    })

    test("true for empty String instance", () => {
      const str = new String()
      expect(Util.isEmptyString(str)).toBe(true)
    })

    test("false for non-empty string literal", () => {
      const str = "hello world!"
      expect(Util.isEmptyString(str)).toBe(false)
    })

    test("false for non-empty String instance string literal", () => {
      const str = new String("hello world!")
      expect(Util.isEmptyString(str)).toBe(false)
    })

    test("false for number 0", () => {
      const str = 0
      expect(Util.isEmptyString(str)).toBe(false)
    })

    test("false for empty array", () => {
      const str = []
      expect(Util.isEmptyString(str)).toBe(false)
    })
  })
})
