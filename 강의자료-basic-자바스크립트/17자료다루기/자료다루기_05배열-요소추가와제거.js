/**
 * unshift => 배열의 앞에 요소 추가
 * push => 배열의 끝에 요소 추가
 * shift => 배열의 앞에 요소 제거
 * pop => 배열의 끝에 요소 제거
 * splice => 배열의 인덱스를 기반으로 요소 추가 및 삭제
 */
const arr = ['one', 'two', 'three'];
const copyArr = arr;

copyArr.push(1);
copyArr.pop(2);
copyArr.shift(0);
copyArr.unshift(-0);
copyArr.splice(0, 0, 'four');

console.log(arr);
console.log(copyArr);
