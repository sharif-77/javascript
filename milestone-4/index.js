/* let loopVariable=0;
while(loopVariable<=10){
  console.log(loopVariable)
  loopVariable++
}
  console.log(loopVariable)
  console.log(loopVariable)
 */

/* let arr=[1,2,3,4,5,6,7,8,9]
for(var i=0;i<arr.length;i++){
  if(i > 5){
    break
  }
  console.log(arr[i])
  
}
 */

/* //taka to dollar converter
function tkToDollar(taka){
  return taka/108.0959
}
console.log(tkToDollar(220)); */

/* // barbie can from string
function barbieken(str){
  if(str.length%2===0){
    return 'Hi Ken!'
  }else{
    return 'Hi Barbie!'

  }
}
console.log(barbieken('sharifs')); */

/* //array reverse 
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,45,55]
let reverse=[]
for(let i=arr.length-1;i>=0;i--){
  reverse.push(arr[i])
}
console.log(arr.reverse());
console.log(reverse); */

/* // text reverse 
const reverse = (string) => {
  const newText = string
    .split("")
    .reverse()
    .join("");
  
  return newText
};

console.log(reverse("Hello world")) */

/* // assignment 4 code start
/* // problem 1
function cubeNumber(number) {
  if (typeof number !== "number" || number < 0) {
    return "Provide valid positive Number";
  }
  return Math.pow(number, 3);
} */

/* // problem 2
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Provide valid String";
  }
  return string1.includes(string2);
} */

/* // problem 3
function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "Provide valid Array";
  } else if (typeof arr[0] !== "number" || typeof arr[1] !== "number") {
    return "provide valid Number";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === arr[1]) {
      return "equal";
    } else if (arr[0] < 0 || arr[1] < 0) {
      return "invalid input";
    } else if (arr[i] > 0) {
      return arr.sort((a, b) => b - a);
    }
  }
} */

/* // problem 4
function findAddress(obj) {
  if (typeof obj !== "object") {
    return "provide valid object";
  }
  let street = obj.street || "__";
  let house = obj.house || "__";
  let society = obj.society || "__";
  return `${street}, ${house}, ${society}`;
} */

/* // problem 5
function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "Array is empty please provide value";
  }
  let total = 0;
  for (const item of changeArray) {
    total += item;
  }
  return total >= totalDue;
} */

/* // print long digit
let arr=[20,30,40,50,60,70,80,90,100,120,130,1470]
for(let i of arr){
  if(i>80){
    console.log(i);
  }
} */

/* // self assessment
let x='sharif';
let y=true;
let z=12345;

let changeable=5;
changeable=6;
const notChangeable='sharif'

let num1=10;
let num2=20;
let adission=num1+num2
let substeaction=Math.abs(num1-num2)
let multipication=num1*num2
let divission=num1/num2
let remainder=num2%num1
console.log(adission,substeaction,multipication,divission,remainder); */

/* // let x=2, y, z=3;
// console.log(x);
// console.log(y);
// console.log(z);
// let a;
// if ( a !== true ) {
// } */
 

// questions

// what is literal in object??

/*A JavaScript object literal is a comma-separated list of name-value pairs
wrapped in curly braces. Object literals encapsulate data, 
enclosing it in a tidy package. This minimizes the use of global variables which
can cause problems when combining code.
*/

// what is modular??
// Functions can also be used to create modular code, which is easier to test and maintain.

//what is function vs function expression ???

// Example: Function Expression
// alert(foo()); // ERROR! foo wasn't loaded yet
// console.log(foo());
// var foo = function() { return 50; }
// console.log(foo());

// Example: Function Declaration
// alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
// console.log(foo());
// function foo() { return 5; }

// Function declarations load before any code is executed while Function
// expressions load only when the interpreter reaches that line of code.

// Similar to the var statement, function declarations are hoisted to the
// top of other code. Function expressions aren’t hoisted, which allows 
// them to retain a copy of the local variables from the scope where
// they were defined.


// why is not hoisting ???? 
// same code but not working first one
//  var foo;
// console.log(foo);
//  foo = 'bar';

//  var foo;
//  foo = 'bar';
//  console.log(foo); 
//  var hello='sharif'
//  var arr=Array.from(hello)

//  console.log(arr);

let numbers=[1,2,3,4,5,6]
let square=numbers.fill(10)
console.log(square);
let every=numbers.every((num)=>num>1)
console.log(every);
let some=numbers.some((num)=>num ===5)
console.log(some);
