
const clock = document.getElementsByClassName('analog-clock')[0];

const AnalogClock = $container => {
  makeBody("hand","hour");
  makeBody("hand","minute");
  makeBody("hand","second");
  makeBody("time","time1");
  console.log(clock);
};

function makeBody(div1 ,div2){
  const div = document.createElement('div');
  div.classList.add(div1);
  div.classList.add(div2);
  clock.appendChild(div);
}



export default AnalogClock;
