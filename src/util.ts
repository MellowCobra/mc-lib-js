export function notNull(a: any): boolean {
  return a === undefined ? false : a !== null
}

export function notFalsy(a: any): boolean {
  return a != false
}

export function notFalse(a: any): boolean {
  return a !== false
}

export function notTruthy(a: any): boolean {
  return a != true
}

export function notTrue(a: any): boolean {
  return a !== true
}

export function isTrue(a: any): boolean {
  return a === true
}

export function isFalse(a: any): boolean {
  return a === false
}

export function isNonEmptyString(a: any): boolean {
  return (typeof a === "string" || a instanceof String) && a.length > 0
}

export function isEmptyString(a: any): boolean {
  return (typeof a === "string" || a instanceof String) && a.length === 0
}