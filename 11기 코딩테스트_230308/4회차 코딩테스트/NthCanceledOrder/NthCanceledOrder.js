/**
 * @param orders {number[]}
 * @param n {number}
 * @returns {number}
 */
function solution(orders, n) {
  let missCount = 0
  let num = 0
  let i = 0
  while (missCount !== n) {
    num++

    if (orders[i] === num) {
      i++
    } else {
      missCount++
    }
  }
  return num
}

solution