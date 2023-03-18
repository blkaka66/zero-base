/**
 * @param nums {number[]}
 * @param d {number}
 * @return {number}
 */
function solution(nums, d) {
  let result = 0

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (nums[i] % d) === 0) {
        result++
      }
    }
  }

  return result
}

export default solution
