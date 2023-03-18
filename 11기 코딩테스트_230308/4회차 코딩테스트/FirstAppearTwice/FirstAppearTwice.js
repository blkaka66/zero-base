/**
 * @param s {string}
 * @returns {string}
 */
function solution(s) {
  const map = new Map()

  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, true)
    } else {
      return c
    }
  }

  return ''
}

export default solution
