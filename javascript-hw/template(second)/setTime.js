function setHandRotation(deg, handClass,$container) {
    //const analogClock = document.getElementsByClassName('analog-clock')[0];
    const hand = $container.getElementsByClassName('hand ' + handClass)[0];
    hand.style.setProperty('--deg', deg);

  }
  
  function setTime(time,$container){
    setHandRotation((time[0] * 30) + (time[1] / 2), 'hour',$container);
    setHandRotation((time[1] * 6) + (time[2] / 10), 'minute',$container);
    setHandRotation(time[2] * 6, 'second',$container);
  }
export{setTime};  