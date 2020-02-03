"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Levi J. Walton
   Date:   April 8, 2019

*/
showClock();
setInterval("showClock()", 1000);

function showClock(){
  var thisDay = new Date("May 19, 2018 9:31:27");
  var localDate = thisDay.toLocaleDateString();
  var localTime = thisDay.toLocaleTimeString();
  
  document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";
  var j4Date = nextJuly4(thisDay);
  j4Date.setHours(21);
  var days = (j4Date - thisDay)/(1000*24*60*60);
  var hrs = (days - Math.floor(days))*24;
  var mins = (hrs - Math.floor(hrs))*60;
  var secs = (mins - Math.floor(mins))*60;
  
  document.getElementById("dLeft").textContent = Math.floor(days);
  document.getElementById("hLeft").textContent = Math.floor(hrs);
  document.getElementById("mLeft").textContent = Math.floor(mins);
  document.getElementById("sLeft").textContent = Math.floor(secs);
  
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
