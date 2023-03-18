/* two sum */

/* user code */
function answer(nums, target) {
  // 코드 구현 시작 영역
  let res=[];
  for(let i=0;i<nums.length-1;i++)
  {
    res.push(i);

    for(let a=i+1;a<nums.length;a++)
    {
      // console.log(res[i]+res[a]);
      if((nums[i]+nums[a]) === target)
      {
        res.push(a);
        return res;
      }
    }
    res.pop();
  }
  // 코드 구현 종료 영역
  return res;
}

/* main code */
let input = [
  // TC: 1
  [[2, 7, 11, 15], 9],

  // TC: 2
  [[3, 2, 4], 6],

  // TC: 3
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
