/**
 * 배열 요소 병합
 */
const array = ['JS', 'HTML', 'CSS'];

const newArr = ['TS', 'Java'].concat(array);

console.log(array);
console.log(newArr);

const newArr = [...array, 'TS', 'Java'];
const other = ['TS', 'Java'];

const newArr = [...array, ...other];
