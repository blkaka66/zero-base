/**
 * @param arr {number[]}
 * @returns {number}
 */
function solution(arr) {
  return arr.reduce((pre, cur) => pre + ((cur % 2 === 0) ? 1 : 0), 0)
}

export default solution