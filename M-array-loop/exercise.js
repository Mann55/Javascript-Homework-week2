/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function recieveArray (weekDays){
  for(i=0; i<=6; i++){
    
  if(daysOfWeek[i].charAt(0)== "T"){
    console.log(daysOfWeek[i]);
  }
  
  }
}

recieveArray(daysOfWeek)