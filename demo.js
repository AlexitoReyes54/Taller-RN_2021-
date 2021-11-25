/*
Problems for solve: 
    https://leetcode.com/problems/shuffle-the-array/
    https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
    https://leetcode.com/problems/number-of-good-pairs/
*/

// One line commet

/*
    Multi Line Comment
*/


//Data types 
// VAR - LET - CONST
const number = 5
let text = "Hola"
var decimal = 10.04

var obj = {
    color:"red",
    brand:"Toyota",
    years:3
}
//          
var array = ["a","e","i","o","u"] // 0 , 1, 2,

var unknown = undefined
const date = new Date();
var yes = true
var no = false

//Operators
var sum = 5 + 5
var sub = 10 - 5
var by = 4 * 2
var pow = 2**3
var div = 10 / 5
var div = 10 % 5

//Increment & decrement
sum++
sum--

//function
function Greeting(name) {
    console.log("Hi, "+name);
}


//Conditionals
if (3 > 2) {
    //Do something...
} else {
    //Do something else...
}


/* 
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
*/

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

while (condition) {
  
}

do {
  
} while (condition);

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}


Greeting(10.731)
