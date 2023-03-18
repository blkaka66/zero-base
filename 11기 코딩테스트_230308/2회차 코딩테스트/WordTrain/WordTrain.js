/**
 * @param s {string}
 * @returns {number}
 */
function solution(s) {
  const alphabets = {};
  let fromIndex = 0;

  return s.split('')
    .reduce((longest, c, i) => {
      if (fromIndex <= alphabets[c]) {
        fromIndex = alphabets[c] + 1
      }

      alphabets[c] = i;
      return Math.max(longest, (i - fromIndex) + 1);
    }, 0);
}

solution