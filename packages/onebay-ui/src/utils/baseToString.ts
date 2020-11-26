function arrayMap(array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = Array(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}

const INFINITY = 1 / 0

const symbolProto = Symbol ? Symbol.prototype : undefined
const symbolToString = symbolProto ? symbolProto.toString : undefined

function isSymbol(value: unknown): boolean {
  return typeof value == 'symbol'
}

export default function baseToString(value: unknown): string {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + ''
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : ''
  }
  const result = value + ''
  return result == '0' && 1 / (value as number) == -INFINITY ? '-0' : result
}
