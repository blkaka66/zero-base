function setHandRotation(deg, handClass) {
    const analogClock = document.getElementsByClassName('analog-clock')[0];
    const hand = analogClock.getElementsByClassName('hand ' + handClass)[0];
    hand.style.setProperty('--deg', deg);

  }
  
  function setTime(time){
    setHandRotation((time[0] * 30) + (time[1] / 2), 'hour');
    setHandRotation((time[1] * 6) + (time[2] / 10), 'minute');
    setHandRotation(time[2] * 6, 'second');
  }
export{setTime};  