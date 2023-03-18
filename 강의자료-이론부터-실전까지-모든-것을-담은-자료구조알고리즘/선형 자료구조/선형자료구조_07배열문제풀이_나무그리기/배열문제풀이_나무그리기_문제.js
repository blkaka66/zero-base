/* 나무 그리기 */

/* user code */
function answer(height) {
  let str = "";

  // 코드 구현 시작 영역
  let x = (height*2-1);
  let leftStar=Math.ceil(x/2);
  let rightStar=Math.ceil(x/2);
  str+="\n";
  for(let i=1;i<=height;i++)
  {
 
    for(let a=1;a<=x;a++)
    {
      if(a>= leftStar && a<= rightStar)
      {
        str+="*";
      }
      else{
        str+=" ";
      }

    }
    leftStar-=1;
    rightStar+=1;
    str+='\n';
  }


  //  코드 구현 종료 영역

  return str;
   }

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];



for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
