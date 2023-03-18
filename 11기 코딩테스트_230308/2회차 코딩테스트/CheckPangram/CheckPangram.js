/**
 * @param s {string}
 * @returns {boolean}
 */
function solution(s) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < ALPHABET.length; i++) {
    const c = ALPHABET.charAt(i)
    if (s.indexOf(c) < 0) {
      return false
    }
  }

  return true
}

export default solution
