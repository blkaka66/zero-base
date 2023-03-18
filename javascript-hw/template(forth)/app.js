const date= new Date();
const currentYear = date.getFullYear();//올해
const currentMonth = date.getMonth()+1;//이번달
const currentDate = date.getDate();//오늘날짜


let prev =new Date(currentYear,currentMonth-1,0);//이전달의 정보
var prevDate = prev.getDate(); //이전달 끝나는 날짜 
var prevDay= prev.getDay();//이전달이 끝나는 요일 0부터(일욜)시작


let curr =new Date(currentYear,currentMonth,0);//이전달의 정보
var currDate = curr.getDate(); //이번달 끝나는 날짜 
var currDay= curr.getDay();//이번달 끝나는 요일


let next =new Date(currentYear,currentMonth+1,0);//다음달의정보
var nextDate = next.getDate(); //다음달 끝나는 날짜
var nextDay= next.getDay();//다음달 끝나는 요일


