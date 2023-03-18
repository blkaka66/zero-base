import {init} from './init.js';
import { getTime } from './getTime.js';
import { setTime } from './setTime.js';



  const AnalogClock = $container => {
    init();
    setInterval(() => {
    let time = getTime();
      setTime(time);
    }, 1000);
  };





export default AnalogClock;
