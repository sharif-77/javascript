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

