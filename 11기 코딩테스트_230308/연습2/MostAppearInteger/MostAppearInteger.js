/**
 * @param n {number}
 * @returns {number}
 */
function solution(n) {
  const numCounter = []

  while (1 <= n) {
    const i = Math.floor(n % 10)
    numCounter[i] = numCounter[i] + 1 || 1

    n /= 10
  }

  let mostAppearNumber = undefined
  let appearCount = 0
  numCounter.forEach((count, num) => {
    if (appearCount < count) {
      mostAppearNumber = num
      appearCount = count
    }
  })

  return mostAppearNumber
}

export default solution