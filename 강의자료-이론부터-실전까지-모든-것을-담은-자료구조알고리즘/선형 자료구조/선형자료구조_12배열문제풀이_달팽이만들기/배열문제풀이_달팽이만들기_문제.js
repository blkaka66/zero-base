/* 달팽이 만들기 */

/* user code */
function answer(length) {
  let result = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ];
let num=1;
  // 코드 구현 시작 영역
let count= length;
let y=0;
let x=0;
let index=0;
  // while((length*length)>=num)
  // {
   
      while(index<count && y===0)
      {
        result[y][x]=num;
        x++;
        num++;
      }
      x--;
      count--;
      y++;
    
    
      while(y<=count && x===(length-1)){
        
        result[y][x]=num;
        y++;
        num++;
      }
      y--;
      x--;
      while(x>=0){
        result[y][x]=num;
        num++;
        x--;
      }
      x++;
      count--;
      

      while(y>1)
      {
        
        y--;
        result[y][x]=num;
        num++;
      }
    
      x++;

      while(x<=count)
      {
        
        result[y][x]=num;
        x++;
        num++;
      }
      num--;
      count--;
      x--;
      y++;
      console.log(y);
      console.log(x);
      console.log(count);
      while(index<=count)
      {
        result[y][x]=num;
        num++;
        y++;
      }
    
    console.log(result);

 // }
  
  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  6,
];
answer(5);
// for (let i = 0; i < input.length; i++) {
//   process.stdout.write(`#${i + 1} `);
//   console.log(answer(input[i]));
// }
