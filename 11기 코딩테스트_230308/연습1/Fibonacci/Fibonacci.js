/**
 * @param n {number}
 * @returns {number}
 */
function solution(n) {
  let first = 1
  let second = 1

  for (let i = 3; i <= n; i++) {
    const sum = first + second
    first = second
    second = sum
  }

  return second
}

export default solution