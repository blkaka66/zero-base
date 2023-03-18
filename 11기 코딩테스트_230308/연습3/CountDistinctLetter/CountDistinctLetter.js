/**
 * @param s {string}
 * @returns {number}
 */
function solution(s) {
  const set = new Set()

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    set.add(c)
  }

  return set.size
}

export default solution