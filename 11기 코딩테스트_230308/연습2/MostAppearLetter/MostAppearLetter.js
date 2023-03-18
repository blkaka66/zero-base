/**
 * @param s {string}
 * @returns {string}
 */
function solution(s) {
  const charCounter = []

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    const charIndex = charToIndex(c)
    charCounter[charIndex] = charCounter[charIndex] + 1 || 1
  }

  let mostAppearLetter = ''
  let appearCount = 0
  charCounter.forEach((count, charIndex) => {
    if (appearCount < count) {
      mostAppearLetter = indexToChar(charIndex)
      appearCount = count
    }
  })

  return mostAppearLetter
}

function charToIndex(c) {
  const aCode = 97
  return c.charCodeAt(0) - aCode
}

function indexToChar(i) {
  const aCode = 97
  return String.fromCharCode(i + aCode)
}

export default solution