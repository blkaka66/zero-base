/* 벽돌 옮기기 */

/* user code */
function answer(blocks) {
  let result = 0;
  
  let target = 0;
  for(let i=0;i<blocks.length;i++)
  {
    target+=blocks[i];
  }

  target=target/blocks.length;
  for(let a=0;a<blocks.length;a++)
  {

    if(target>=blocks[a])
    {
      console.log("더하기");
      result+=(target-blocks[a]);
    }

    console.log(result);
  }
  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 4, 1, 7, 5],

  // TC: 2
  [12, 8, 10, 11, 9, 5, 8],

  // TC: 3
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
