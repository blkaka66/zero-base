/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
  let result = [];

  // 코드 구현 시작 영역
  let arr=[];
  arr = makeArr(s,e);
  result = checkNum(arr);

  // 코드 구현 종료 영역

  return result;
}
function checkNum(arr)
{
  const res = new Array(10).fill(0);
  arr.forEach((subArr) =>{
    subArr.forEach((num) =>{
      res[num]++;
    });
  });
  return res;
}
function makeArr(s,e)
{
  let arr=[];
  let str="";
  let strarr=[];
  for(let i=s;i<=e;i++)
  {
    str =i.toString();
    strarr=[...str];
    arr.push(strarr);
  }
  return arr;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
