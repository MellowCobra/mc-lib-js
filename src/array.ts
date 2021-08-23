export function lastItem<T>(arr: T[]): T | null {
  if (!Array.isArray(arr) || arr.length === 0) return null
  return arr[arr.length - 1]
}

export function contains<T>(item: T, arr: T[]): boolean {
  if (!Array.isArray(arr) || arr.length === 0) return false
  return arr.indexOf(item) > -1
}