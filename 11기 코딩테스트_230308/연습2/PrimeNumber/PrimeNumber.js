/**
 * @param n {number}
 * @returns {boolean}
 */
function solution(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }

  return true
}

export default solution