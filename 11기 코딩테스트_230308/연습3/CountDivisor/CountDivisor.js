/**
 * @param n {number}
 * @returns {number}
 */
function solution(n) {
  let result = 0

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) result++
  }

  return result
}

export default solution