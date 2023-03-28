import {init} from './init.js';
import { getTime } from './getTime.js';
import { setTime } from './setTime.js';



  const AnalogClock = $container => {
 
    init($container);
    setInterval(() => {
    let time = getTime();
      setTime(time,$container);
    }, 1000);
  };





export default AnalogClock;
