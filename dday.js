
var now = new Date();
var firstDay = new Date("1997-08-11"); 
var toNow = now.getTime();  
var toFirst = firstDay.getTime(); 
var passedTime = toNow - toFirst;  
var passedDay = Math.round(passedTime/(1000*60*60*24));
document.querySelector("#accent").innerText = passedDay + "일";

function calcDate(days) {
var future = toFirst + days*(1000*60*60*24); 
var someday = new Date(future); 
var year = someday.getFullYear( ); 
var month = someday.getMonth( );
var date = someday.getDate( ); 
document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}

calcDate(129);
calcDate(396);
calcDate(6971);
calcDate(8432);
