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

// assignment 4 code end */

function cubeNumber(number) {
  if (typeof number !== "number" || number < 0) {
    return "Provide valid positive Number";
  }
  return Math.pow(number, 3);
}
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Provide valid String";
  }
  return string1.includes(string2);
}
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
      if (arr[0] < arr[1]) {
        return (arr = [arr[1], arr[0]]);
      } else {
        return arr;
      }
    }
  }
}
function findAddress(obj) {
  if (typeof obj !== "object") {
    return "provide valid object";
  }
  let street = obj.street || "__";
  let house = obj.house || "__";
  let society = obj.society || "__";
  return street + "," + house + "," + society;
}
function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "Array is empty please provide value";
  }
  let total = 0;
  for (const item of changeArray) {
    total += item;
  }
  return total >= totalDue;
}
