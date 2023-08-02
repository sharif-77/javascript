// how to get object keys values

/* var obj={
    name:'sharif',
    age:23,
    profession:'student'
}
console.log(Object.keys(obj));
console.log(Object.values(obj)); */

// for of and for in loop

/* var arr=[9,8,7,6,5,4,3,2,1]
var obj={
    name:'sharif',
    age:23,
    profession:'student'
}
for(let i of arr){
    console.log(i);
}
for(let i in obj){
    console.log(i+':'+obj[i]);
} */

/* function foo() {
  console.log("Foo Fa");
  bar();
}

function bar() {
  console.log("bar");
}

foo();
bar(); */

/* function average(num1,num2,num3){
    let average=(num1+num2+num3)/3;
    return average
}
console.log(parseFloat(average(5,10,20).toFixed(2)));
 */

// average of array for of loop
/* const array=[10,20,30,40,50,60,70,80,90,100];
let total=0;
for(let i of array){
total+=i
}
let average=total/array.length
console.log(average); */

// average of array using for loop
/* const arrays=[10,20,30,40,50,60,70,80,90,100];

function arrayAverage(){
let total=0;
for(let i=0;i<arrays.length;i++){
    var arraysItems=arrays[i]
    total+=arraysItems
}
let average=total / arrays.length
return average

}
console.log(arrayAverage(arrays)); */

/* // average of array using reduce method out of module
const arrays=[10,20,30,40,50,60,70,80,90,100]; */

// check even or odd number
/* function evenOdd(number) {
  // let number=17;
  if (number % 2 === 0) {
    return number + " is even number";
  } else {
    return number + " is odd number";
  }
}
// evenOdd(85)
console.log(evenOdd(88)); */

// entries method
/* const object1 = {
    a: 'somestring',
    b: 42
  }
  Object.entries(object1) // Array(2) [["a", "something"], ["b", 42]]
    .forEach(([key, value]) => console.log(`${key}: ${value}`))
// console.log(Object.entries(object1)); */

// croosingRoad with if else
/* function croosingRoad(colors){
    let color=colors.toLowerCase()
    if(color==='red'){
        return 'You should stop right now otherwise danger can happend'
    }else if(color==='yellow'){
        return 'You should stop'
    }else if(color==='green'){
        return 'You can go now '
    }else{
        return 'You can decide'
    }
}
console.log(croosingRoad('red')) */

// croosingRoad with switch case
/* function croosingRoad(colors){
    let color=colors.toLowerCase()
    switch(color){
        case 'red':return 'You should stop right now otherwise danger can happend';
        break;
        case 'yellow':'You should stop';
        break
        case 'green':return 'You can decide'
        break
        default:return 'You can chose'
    }
}
console.log(croosingRoad('lal')); */


function second(){
    console.log('Hello git')
}
second()