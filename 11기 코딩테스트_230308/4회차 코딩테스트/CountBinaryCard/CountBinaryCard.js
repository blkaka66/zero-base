/**
 * @param n {number}
 * @return {number}
 */
function solution(n) {
  // 중복된 결과를 저장
  const dp = [0];

  // 2의 배수로 반복되는 bit 처리를 위함
  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset *= 2;

    dp[i] = dp[i - offset] + 1;
  }

  // 0부터 n까지 필요한 붉은색 종이수
  return dp.reduce((a, b) => a + b, 0);
}

solution
