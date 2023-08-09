/* // feetToInch problem number 1
function feetToInch(feet) {
    return feet*12
}
console.log(feetToInch(12)); */

/* // centimeterToMeter  problem number 2
function centimeterToMeter(cm) {
    return cm/100
}
console.log(centimeterToMeter (100)); */

/* // paper count problem number 3
function paperRequirements(book1,book2,book3){
    let firstBook=100*book1 
    let secondBook=200*book2
    let thirdBook=300*book3
    return obj={
        firstBook,
        secondBook,
        thirdBook
    }
}

console.log(paperRequirements(10,20,30)); */

/* // return long name from an array as string problem number 4
const bestFriends=['sharif', 'aminul islam', 'ahsan ahmed riyad', 'rahadul jihad', 'rafidul islam safin', 'jakir hossain' ]
function bestFriend(firends){
    let initName=firends[0];
    for(let i of firends){
        if(i.length > initName.length){
            initName=i
        }
    }
    return initName
}
console.log(bestFriend(bestFriends)); */

/* // return positive number from an array and stop loop when negative number appear problem number 5
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, -1, -1, -2, 8, 9];

function getPositive(numbers) {
  let positiveNumber = [];
  for (let i of numbers) {
    if (i < 0) {
      break;
    }
    positiveNumber.push(i);

  }
  return positiveNumber;
}

console.log(getPositive(numbers)); */

/* // 1. if ticket number is less then 100, per ticket price: 100
// 2. if ticket numbers is more than 100, but less than 200, First 100 tickets will be 100/ticket 
// rest tickets will be 90 taka per piece
// 3. if you purchase more than 200 tickets
// first 100 --> 100tk
// 101-200--> 90tk
// 200+--->80tk


function ticketPrice(ticket){
    const fh=100;
    const sh=90;
    const th=80;
    if(ticket<=100){
        return ticket*fh
    }else if(ticket<=200){
      
        let fhp=100*fh;
        let restT=ticket-100;
        let shp=restT*sh
        console.log(fhp,shp);
        return fhp+shp

    }else{
        let fhp=100*fh;
        let shp=100*sh;
        let thp=(ticket-200)*th
        console.log(fhp,shp,thp);
        return fhp+shp+thp
    }
}

console.log(ticketPrice(150)); */

/* // quiz 5
// for(let i=0;i<5;i++){
//     const element=i;
//     console.log(element);
// } */

/* // variable self assessment 1
let str='hello muhammad sharif';
let num='789987';
let bool=true; */

/* // let and var self assessment 2
let num=10;
const num2=50;
num=20; */

/* // operator self assessment 3
const num1=10;
const num2=20;
let addition=num1+num2;
let division=num1/num2
let subtraction=num1-num2;
let multiplication=num1*num2; */

/* // comparison operator self assessment 4
const num1=10;
const num2=20;
let geter=num1>num2;
let geterOrEqual=num1>=num2;
let lower=num1<num2;
let lowerOrEqual=num1<=num2;
let equal=num1===num2;
let notEqual=num1!==num2; */

/* //check condition self assessment 5
function checkCondition(num){
    if(num>10 && num<50){
        console.log('num within 10 to 50');
    }
    if((num>10 && num<50) || num>100){
        console.log('num larger than 100');
    }
}
checkCondition(200) */

/* // condition self assessment 6
function checkTime(time){
    if(time===9){
        return 'My class will start'
    }else{
        return 'It is not time for class'
    }
}
console.log(checkTime(9)); */

/* // condition base while loop self assessment 7
function whileLoop(){
    let i=7;
    let oddNumber=[]
    while(i<=29){
        if(i%2!==0){
        oddNumber.push(i)
            
        }

        
        i++
    }
    return oddNumber
}
console.log(whileLoop()); */

/* // self assessment 7 found problem why is not running when using continue
function whileLoop(){
    let i=7;
    let oddNumber=[]
    while(i<=19){
        if(i%2===0){
        i++
        continue

        }
        oddNumber.push(i)
        
        i++
    }
    return oddNumber
}
console.log(whileLoop()); */

/* // Array self assessment 8
const arr=[1,2,3,4,5,6,7,8,9,10]
console.log(Array.isArray(arr));
console.log(arr.length);
arr[3]=14;
arr.pop()
arr.push(11)
arr.push(12)
console.log(arr); */

/* //getting array element using for an for of loop self assessment 9
const arr=[1,2,3,4,5,6,7,8,9,10]
function forLoop(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
forLoop(arr);

function forOf(arr){
    for(const i of arr){
        console.log(i);
    }
}
forOf(arr); */

/* // show element form array thar is gater than 80 self assessment 10
const arr=[20,50,70,80,90,500,600,800,9800,1710,5852,8505]
function gaterThanEighty(arrEle){
    let filteredElement=[];
     for(const i of arrEle){
        if(i<=80){
            continue
        }
        filteredElement.push(i)
    }
  
    // for(let i=0;i<arrEle.length;i++){
    //     if(arrEle[i]<=80){
    //         continue
    //     }
    //     filteredElement.push(arrEle[i])
    // }
    return filteredElement
}
console.log(gaterThanEighty(arr)); */

/* //  return 3 numbers multiplication assessment 11
function numbersMultiplication(num1,num2,num3){
    return num1*num2*num3
}
console.log(numbersMultiplication(10,20,30)); */

/* // crate an object ans change a property name assessment 12
let obj = {
  name: "sharif",
  age: 23,
  duty: "learning",
};
function changeObjValue(obj) {
  const changed = [(obj.age = 25), (obj["name"] = "Arif")];
  let keys = Object.keys(obj);
  let newArr = [];
  for (let i of keys) {
    newArr.push(obj[i]);
  }
  return newArr;
}
console.log(changeObjValue(obj));
console.log(obj); */

///* now start will be module problem */

/* // write a function that will received an array and will return the higher most max number
const arr =[100,300,400,5820,8100,500,7100,858,89565,99212,8125,]
function getMaxNumber(arr){
    let emtArr=[0]
    for(let i of arr){
        if(i>emtArr){
            emtArr=i;
        }
    }
    return emtArr
}
console.log(getMaxNumber(arr)); */

/* //  write a function that will received an array and will return the lower  number of an array using loop
const arr =[50,100,300,400,5820,8100,500,7100,858,89565,99212,8125,]
function getMaxNumber(arr){
    let emtArr=500
    console.log(emtArr);
    for(let i of arr){
        if(i<emtArr){
            emtArr=i;
        }
    }
    return emtArr
}
console.log(getMaxNumber(arr)); */

/* // write a function that will received an array and will return the higher  number of an array using Math.max
const arr =[50,100,300,400,5820,8100,500,7100,858,889565,99212,8125,]
 function getHigherNUmberUsingMax(arr){
    return Math.max(...arr)
 }
 console.log(getHigherNUmberUsingMax(arr)); */

/* // write a function that will received an array and will return the lower  number of an array using Math.min
const arr =[50,100,300,400,5820,8100,500,7100,858,889565,99212,8125,]
 function getHigherNUmberUsingMin(arr){
    return Math.min(...arr)
 }
 console.log(getHigherNUmberUsingMin(arr)); */

/* // remove duplicate item from an array and return unique array with validation
// const dupliArr=[5,58,5,7,8,7,8,9,4,5,4,6,8,247,51245,24,5,248,1,2,5,45,52,8,5545,454,54,55,45,54]
const dupliArr=[1,2,3,4,5,5,6,5,7,8,9,8,2,1,10]
function removeDuplicate(dupliArr){
    if(!Array.isArray(dupliArr)){
        return 'give me an valid array'
    }
    let uniqueArr=[];
    for(let i of dupliArr){
        if(!uniqueArr.includes(i)){
            uniqueArr.push(i)
        }
    }
    return uniqueArr


}
console.log(removeDuplicate(dupliArr)); */

/* // check FooBar with validation
function fooBar(num){
    if(typeof num !=='number'){
        return 'give me valid number'
    }else{
        if(num%3===0&&num%5===0){
            return 'FooBar'

        }else if(num%3===0){
            return 'Fooooooo'
        }else if(num%5===0){
            return 'Baaaarr'
        }else{
            return 'simple number'
        }
    }

}
console.log(fooBar(5)); */

/* // create an array of object about phone and get cheappest price of phone
const phoneArr=[
    {name:`nokia`,ram:`8Gb`,camera:`5Mp`,price:10000},
    {name:`xiaomi`,ram:`8Gb`,camera:`8Mp`,price:15000},
    {name:`itel`,ram:`8Gb`,camera:`16Mp`,price:13000},
    {name:`redmi`,ram:`8Gb`,camera:`32Mp`,price:8000},
]
function getLowerPricePhone(phoneArr){
    if(!Array.isArray(phoneArr)){
        return 'Provide valid array'
    }
    let lower=phoneArr[0]
    for(let i of phoneArr){
        if(i.price<lower.price){
            lower=i
        }
    }

    return lower

}
console.log(getLowerPricePhone(phoneArr));
 */

/* // get total price of product 
const cart=[
    {name:'shirt',price:900},
    {name:'pant',price:1400},
    {name:'T-shirt',price:600},
    {name:'belt',price:400}
]
function getTotalPrice(cart){
    if(!Array.isArray(cart)){
        return 'Give me an valid array'
    }
    let totalPrice=0;
    for(const i of cart){
        totalPrice+=i.price

    }
    return totalPrice
}
console.log(getTotalPrice(cart)); */

/* // get total price of product by quantity
const cart=[
    {name:'shirt',price:900,quantity:3},
    {name:'pant',price:1400,quantity:2},
    {name:'T-shirt',price:600,quantity:6},
    {name:'belt',price:400,quantity:2}
]
    function totalPriceByQuantity(cart){
        if(!Array.isArray(cart)){
            return 'provide a valid array'
        }
        let total=0;
        for(const i of cart){
            total+=i.price*i.quantity
        }
        return total

    }

    console.log(totalPriceByQuantity(cart)); */

/* // fun task from group
const fun =[1,2,-1,-3,0,5,9,-9,-9,6,-8,-10,8,4,6,7]
function getBadData(fun) {
    let badData=0;
    for (const i of fun) {
        if (i<0) badData++      
    }
    return badData
}
console.log(getBadData(fun)); */

/*// conceptual session problem */

/* // create a function that will received a number and will check integer if true then return true otherwise return false problem 1
function isIntegers(num){
    if(typeof num!=='number'){
        return 'Give valid number'
    }
    return Number.isInteger(num);
}
console.log(isIntegers(12.5));
// console.log(isInteger(320));
// console.log(Number.isInteger(10)); */

/* // check file name if it is a js file then return true otherwise return false problem 2

function isJavascriptFile(str){
    if(typeof str !== 'string'){
        return 'provide valid string'
    }
    return str.endsWith('.js')
}
console.log(isJavascriptFile('index.js')); */

/* // received a number then multiply with 3 then add 10 and divide by 2 then subtract 5 then return the number problem 3
function mindGame(num) {
    if (typeof num !=='number' || num<=0) {
        return 'Please provide valid number'
        
    }
    return (((num*3)+10)/2)-5 
}
console.log(mindGame(5)); */

/* // take a input as number and check the input is less than seven or bigger than seven if less than seven after subtract for 7 return the value on the other hand multiply the value by 2 problem number 4 

function isLsSeven(num) {
    if (typeof num !== 'number') {
        return 'provide valid number'
    }

    let result=num-7
    if (result<7) {
        return result
        
    } else {
        return num*2
    }
}
console.log(isLsSeven(-15)); */

/* // find bad data from array. problem number 5
const fun =[1,2,-1,-3,0,5,9,-9,-9,6,-8,-10,8,4,6,7]
function getBadData(fun) {
    if (!Array.isArray(fun)) return 'please provide an array'
    let badData=0;
    for (const i of fun) {
        if(typeof i !== 'number')return 'please provide array of number'
        if (i<0) badData++     
    }
    return badData
}
console.log(getBadData(fun)); */

/* // get the total diamond if total diamond gater than 2000 then subtract 2000 from total diamond else return the total diamond . Total diamond power will be base on friend diamond power . problem number 6

// first friend's gems power 21
// second friend's gems power 32
// third friend's gems power 43

function gemsToDiamond(ffg,sfg,tfg) {
    if ((typeof ffg !== 'number' ||ffg<0) || (typeof 
        sfg !== 'number' ||sfg<0) ||(typeof tfg !== 'number' ||tfg<0) ) {
        return 'provide valid input'
    }
   let total= (ffg*21)+(sfg*32)+(tfg*43) 
   if(total>2000){
    return total-2000
   }else{
    return total
   }  
}

console.log(gemsToDiamond(100,5,1));  */

/* // get the total diamond if total diamond gater than 2000 then subtract 2000 from total diamond else return the total diamond . Total diamond power will be base on friend diamond power (with ternary operator) . problem number 6

// first friend's gems power 21
// second friend's gems power 32
// third friend's gems power 43

// function gemsToDiamond(ffg,sfg,tfg) {
//     if ((typeof ffg !== 'number' ||ffg<0) || (typeof 
//         sfg !== 'number' ||sfg<0) ||(typeof tfg !== 'number' ||tfg<0) ) {
//         return 'provide valid input'
//     }
//    let total= (ffg*21)+(sfg*32)+(tfg*43) 
//    return total>2000?total-2000:total;
  
// }
// console.log(gemsToDiamond(100,5,1));  */

/* // print details problem number 7
const obj={
    name:'sharif',
    age:23,
    email:'muhamaadsharif80400@gmail.com'
}

function printDetails(obj) {
    if (typeof obj !=='object') {
        return 'provide valid object'   
    }
    return `Amar name: ${obj.name}. amar boyos: ${obj.age}. amar Email: ${obj.email} `
}
console.log(printDetails(obj)); */

/* // check valid extension problem number 8
const arr = [".jpg", ".Gpeg", ".png", ".gif", ".ico"];
function isValidPhotoName(fileName, arr) {
  if (typeof fileName !== "string" || !Array.isArray(arr)) {
    return "Provide valid input";
  }
  for (let i of arr) {
    if (fileName.toLowerCase().endsWith(i.toLowerCase())) {
      return "valid file";
    }
  }
  return "not valid file";
}
let fileName = "sharif.gpeg";
console.log(isValidPhotoName(fileName, arr)); */

/* // get prime number from an array by checking problem number 9
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 11, 1, 31, 17, 82, 19, 25, 15];
function getPrime(arr) {
  if (!Array.isArray(arr)) {
    return "provide valid array";
  }
  let prime = [];
  for (const item of arr) {
    if (item > 1) {
      let isPrime = true;
      for (let i = 2; i < item; i++) {
        if (item % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime === true) {
        prime.push(item);
      }
    }
  }
  return prime;
}
console.log(getPrime(arr)); */

/* // recursive problem number 10
function recursive(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + recursive(num - 1);
  }
}
console.log(recursive(5)); */

/* let arr = [2, 3, 4, 5, 6, 7, 8, 9, 11, 1, 31, 17, 82, 19, 25, 15];
function getPrime(arr) {
  if (!Array.isArray(arr)) {
    return "Provide valid input";
  }
  let prime = [];

  
  }
console.log(getPrime(arr));
 */