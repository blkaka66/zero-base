
let date= new Date();
let currentYear = date.getFullYear();//올해
let currentMonth = date.getMonth()+1;//이번달
let currentDate = date.getDate();//오늘날짜
let currentDay =date.getDay();//오늘 요일(오늘 요일 0부터일욜)

const today = currentDate;
const nowMonth = currentMonth;
const nowYear = currentYear;


const calender = document.getElementsByClassName("calender")[0];




const search = document.getElementsByClassName("search")[0];
search.addEventListener("click",function(){

    calender.style.display = "block";

});


let prev =new Date(currentYear,currentMonth-1,0);//이전달의 정보
let prevDate = prev.getDate(); //이전달 끝나는 날짜 
let prevDay= prev.getDay();//이전달이 끝나는 요일 0부터(일욜)시작


let curr =new Date(currentYear,currentMonth,0);//이번달의 정보
let currDate = curr.getDate(); //이번달 끝나는 날짜 
let currDay= curr.getDay();//이번달 끝나는 요일


let next =new Date(currentYear,currentMonth+1,0);//다음달의정보
let nextDate = next.getDate(); //다음달 끝나는 날짜
let nextDay= next.getDay();//다음달 끝나는 요일


const MonthList = ['January','February','March','April','May','June','July','August','September','October','November','December',];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const calenderGrid = document.getElementsByClassName("calender-grid")[0];
const pastMonth = document.getElementById("past");

pastMonth.addEventListener('click' , function(){
    if(currentMonth===1)
    {
        currentMonth=12;
        currentYear--;
       
    }
    else{
        currentMonth--;
    }


   
    clearCalendar();
    makeCalender();

})


const futurMonth = document.getElementById("future");

futurMonth.addEventListener('click' , function(){
    if(currentMonth===12)
    {
        currentMonth=1;
        currentYear++;
    }
    else{
        currentMonth++;
    }

    clearCalendar();
    makeCalender();

})
function clearCalendar() {
    
    while (calenderGrid.firstChild !== null) { //리렌더링 할때 달력초기화
        calenderGrid.removeChild(calenderGrid.firstChild);
      }
}

makeCalender();

function makeCalender(){

    let thisMonth=1;
    let nextMonth=1;

    prev = new Date(currentYear, currentMonth - 1, 0);
    prevDate = prev.getDate();
    prevDay = prev.getDay();

    curr =new Date(currentYear,currentMonth,0);//이번달의 정보
    currDate = curr.getDate(); //이번달 끝나는 날짜 
    currDay= curr.getDay();//이번달 끝나는 요일

    next =new Date(currentYear,currentMonth+1,0);
    nextDate = next.getDate();
    nextDay= next.getDay();

    let ye = document.getElementById("ye");
    ye.innerHTML=currentYear;


    let mo = document.getElementById("mo");
    mo.innerHTML=MonthList[currentMonth-1];

    for(let i=0;i<7;i++){
        for(let k=0;k<7;k++)
        {
            const div = document.createElement("div");
            if(k ===0 && i>0){ //일요일 빨강
                div.style.color="red";
            }
            if(i === 0 )//요일 렌더링
            {
                div.classList.add(daysOfWeek[k]);
                div.innerHTML=daysOfWeek[k];
            }
            
            else if( i===1){//전 달 & 이번달
                const preday = prevDate - prevDay + k;
                if(preday <= prevDate){
                    div.classList.add('prev-month');
                    div.innerHTML = preday;
                   
                }
                else{
                    div.classList.add('this-month');
                    div.innerHTML=thisMonth;
                    thisMonth++;
                }
            }
            else {
                if(thisMonth<=currDate){//이번달
                div.classList.add('this-month');
                div.innerHTML=thisMonth;
               
                if((currentYear === nowYear) && (currentMonth === nowMonth) && (thisMonth === today)){//오늘날짜찾기
                    div.style.color="blue";//오늘이면 파랑
                }
                thisMonth++;
                }
                else {//다음달
                    
                    div.classList.add('next-month');
                    div.innerHTML = nextMonth;
                    nextMonth++;
                }
                if(k ===0){
                    div.style.color="red";
                }
                
            }
            div.addEventListener('click' , function(){
                const date = div.innerHTML;
                let month =0;
                let year= 0;
                if (div.classList.contains('prev-month')) {//저번달 날짜눌렀으면
                    month = currentMonth - 1;//month 뺴기
                    year = currentYear;//year은 현재 년도
                    if (month < 1) {//근데 month가 1보다 작으면
                        month = 12;//작년 12월로
                        year--;//년도도 작년
                    }
                } else if (div.classList.contains('this-month')) {
                    month = currentMonth;
                    year = currentYear;
                } else if (div.classList.contains('next-month')) {
                    month = currentMonth + 1;
                    year = currentYear;
                    if (month > 12) {
                        month = 1;
                        year++;
                    }
                }
               
                search.innerHTML=year+"-"+month+"-"+date;
                console.log(year+"-"+month+"-"+date);
            });
            calenderGrid.appendChild(div);
        }
    }
}

function handleClick(event) {
    if (event.target.classList.length !==0 ){ //달력이나 네모창 클릭했을때
      
      
    } else {
        calender.style.display = "none";
      //빈 화면 클릭했을때
    }
   
  }
  
  document.addEventListener('click', handleClick);

  


