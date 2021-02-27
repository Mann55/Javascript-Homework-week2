/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  return arr[0]; // complete this statement
}

function last(arr) {
  //(loc_array[loc_array.length - 1]
  return arr[arr.length -1];     // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbersChanged = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbersChanged));
console.log(last(numbersChanged));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
