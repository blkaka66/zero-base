const clock = document.getElementsByClassName('analog-clock')[0];
console.log(clock);
function init()
{
  makeBody("hand","hour"); //시침그리기
  makeBody("hand","minute");//분침
  makeBody("hand","second");//초침
  for(let i=1;i<=12;i++)
  {
    makeBody("time","time"+i);//시간 작대기 12개 그리기
  }
 
}
function makeBody(class1 ,class2){
    const div = document.createElement('div'); //div하나 만들어서
    div.classList.add(class1);//class1이랑
    div.classList.add(class2);//class2 클래스명 합치기
    if(class1 === "time"){ //시간작대기면
      div.insertAdjacentHTML('afterbegin','|');//그리기
    }
    clock.appendChild(div);//시계에 붙이기
  };
  
export {init};