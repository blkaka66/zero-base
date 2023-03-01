/* 일곱 난장이 */

/* user code */
function answer(dwarf) {
  let result = [];

  // 코드 구현 시작 영역
  //아이디어 : 7명중 2명씩 빼보면서 나머지 5명 합이 100이면 그 즉시 종료
  let start=0; 
  let end=1;
  let arr=[];
  let sum=0;
  result = foundDwarf(dwarf,start,end,arr,sum);

  

  // 코드 구현 종료 영역

  return result;
}

function foundDwarf(dwarf,start,end,arr,sum){
  
  for(let i=0;i<dwarf.length;i++)
  {
    if(i !== start && i !== end)
    {
      arr.push(dwarf[i]);
    }
  }

  
  
  for(let i=0;i<arr.length;i++)
  {
    sum+=arr[i];
  }
  if(sum === 100)
  {

    return arr;
  }
  else{
    sum = 0;
    if(end === arr.length-1)
    {
      start+=1;
      end=start+1;
    }
    else{
      end+=1;
    }
    arr=[];
    return foundDwarf(dwarf,start,end,arr,sum);
  }

}


/* main code */
let input = [
  // TC: 1
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC: 2
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC: 3
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
