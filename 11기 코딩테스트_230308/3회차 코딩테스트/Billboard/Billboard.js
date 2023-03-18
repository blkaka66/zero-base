/**
 * @param n {number}
 * @param s {string}
 * @param t {number}
 * @return {string}
 */
function solution(n, s, t) {
  // 반복 주기
  const repeatDuration = n + s.length;

  // 반복되는 주기를 제외하고 남은 시간 계산
  const optimizeTime = t % repeatDuration;

  // 남은 시간이 흐른 후의 전광판 출력
  const text = '.'.repeat(n) + s + '.'.repeat(n - 1);
  return text.substr(optimizeTime, n);
}

solution
