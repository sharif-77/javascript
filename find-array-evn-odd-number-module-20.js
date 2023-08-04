/* // get odd number from an array
function getOddNumber(number) {
  let result = [];
  for (let i = 0; i < number.length; i++) {
    let arrEle = number[i];
    console.log(arrEle);
    if (arrEle % 2 !== 0) {
      result.push(arrEle);
    }
  }
  return result;
}
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getOddNumber(number)); */

/* // convert inc to feet
function inchToFeet(inch){
  return inch/12
}
console.log(inchToFeet(68)); */

/* // convert mile to kilometer
function mileToKilo(mile){
  return mile*1.60934;
};
console.log(mileToKilo(2)); */

/* // check even or odd
function evenOrOdd(number){
  if(number%2===0){
    return `${number} is even number`
  }else{
    return `${number} is odd number`
  }
}
console.log(evenOrOdd(56+2)); */

/*   // check leap year
function checkLeapYear(year){
  if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    return `${year} is leap year`
  }
  return `${year} is not leap year`
}
console.log(checkLeapYear(20020));  */

/* // leap year using ternary operator
let year=2000;
((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ?console.log(`year is leap year` ) :console.log(`year is not leap  year`); */

/* // find all odd number in an array and sum of them
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findOddAndSum(numbers) {
  let element = [];
  for (let i of numbers) {
    if (i % 2 !== 0) {
      element.push(i);
    }
  }
  console.log(element);

  let sum = 0;
  for (let x of element) {
    sum += x;
  }

  return sum;
}
console.log(findOddAndSum(numbers)); */

/* // find of all even number of an array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
function findEvenAndSum(number) {
  let i = 0;
  let sum = 0;
  while (i < number.length) {
    if (number[i] % 2 === 0) {
      sum += number[i];
    }
    i++;
  }
  return sum;
}
console.log(findEvenAndSum(number)); */

/* // convert hours to minutes
function hoursToMin(hours){
  return hours*60
}

console.log(hoursToMin(5)); */

/* // checking leap years
const years = [2023, 2024, 2025, 2028, 2030, 2034, 2037, 2040];
function findLeapYear(years) {
  let leapYear = [];
  for (let i = 0; i < years.length; i++) {
    let arrEle = years[i];
    if ((arrEle % 4 == 0 && arrEle % 100 != 0) || arrEle % 400 == 0) {
      leapYear.push(arrEle);
    }
  }
  return leapYear;
}
console.log(findLeapYear(years)); */

/* // find biggest number of an array
const arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 60, 100, 50000000, 800000]
let arrEle=[0];
for(let i=1;i<arr.length;i++){
  if(arr[i]>arrEle){
    arrEle=arr[i]
  }

}
console.log(arrEle); */

/* // find vowel consonant and space from an string
let sentence = "Hello im Muhammad sharif i'm from Dhaka";
function fndVowelConsonantSpace(sentence) {
  let sen = sentence.toLowerCase();
  let vowel = 0;
  let consonant = 0;
  let space = 0;
  for (let i of sen) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      vowel++;
    } else if (i !== " " && i !== "'") {
      consonant++;
    } else {
      space++;
    }
  }
  return (obj = {
    vowel,
    consonant,
    space,
  });
}
console.log(fndVowelConsonantSpace(sentence)); */

// find biggest name from an array
const names=['aik', 'arif', 'asik', 'nahid', 'sharif', 'tanvir', 'sad', 'abdullah']

function findBigName(names){

}
console.log(findBigName(names));