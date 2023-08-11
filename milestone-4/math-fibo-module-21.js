/* // Fibonacci 
// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. 
// Fibonacci default value is 0 and 1

let fibo=[0,1];
for(let i=2;i<10;i++){
    fibo[i]=fibo[i-1]+fibo[i-2]
}

console.log(fibo); */

/* // math.abs return absolute value - holew positive value return kore
function difference(a, b) {
    return Math.abs(a - b);
  }
  
  console.log(difference(3, 5));
  // Expected output: 2
  
  console.log(difference(5, 3));
  // Expected output: 2
  
  console.log(difference(1.23456, 7.89012));
  console.log(difference( 7.89012, 1.23456));
  // Expected output: 6.6555599999999995 */
  
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



// console.log(Math.floor(13.67)); 

// const number = -78; 
// const answer = Math.abs(number); 
// console.log(answer);
// const arr=[1,2,3,4,5]
// arr[4]=6
// console.log(arr);

// for(let i=0;i<10;i++){
//     console.log('sra is a good boy');
// }


let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr2=[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log([...arr,...arr2]);






