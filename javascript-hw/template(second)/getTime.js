function getTime(){
    let time=[];
    let today = new Date();
    time.push(today.getHours()); 
    time.push(today.getMinutes()); 
    time.push(today.getSeconds()); 
    return time;  
  };

  export {getTime};