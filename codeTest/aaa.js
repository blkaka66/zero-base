function solution(arr) {
    const firstWord = arr[0];
    const commonChars = [];
    let isIn=true;
    for (let i = 0; i < firstWord.length; i++) {
      const char = firstWord[i];
      for(let k=1;k<arr.length;k++){
        if(arr[k].includes(char) === false){
            isIn=false;
        }
      }

      if(isIn === true){
        commonChars.push(char)
      }
      isIn=true;
    }
  console.log(commonChars)
    return commonChars;
  }
  
  // 사용 예시
  const words = ['0326', '05308','03'];
solution(words);
 // console.log(commonChars); // ['a']




//  function solution(arr) {
//     let answer = [];
//     let target=[];
//     let isIn=true;
//     for(let i=0;i<arr.length-1;i++){
//         target=arr[i];
//         for(let a = 0;a<target.length;)
//         {
//             for(let j=i+1;j<arr.length;j++){
//                 if((arr[j].includes(target[a])) === false){//한단어라도 포함안하면
//                     a++;
//                     isIn=false;
//                     break;
//                 }
//             }
//             if((answer.includes(target[a])) === false && isIn === true){
//                 answer.push(target[a]);
//             }
//             isIn=false;
//             a++;
//         }
//     }
// let m=[];
//     for(let n=0;n<answer.length;n++){
      
//         a = answer[n].charCodeAt(0);
//         m.push(a)
//     }

//     m.sort(function(a,b) {return a-b;})
//     answer=[];
//     for(let p=0;p<m.length;p++){
        
        
//         answer.push(String.fromCodePoint(m[p]));
//     }
//     return answer;
// }


