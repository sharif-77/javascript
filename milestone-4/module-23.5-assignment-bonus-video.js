/* // js tricks for flat multi dimenSional array learned from (LWS)
let arraa=[1,2,3,[5,4,6,7,8,[20,30,40,50]],9,10,11,12]
let flat=arraa.flat(Infinity);
console.log(flat);
for (const i of flat) {
  console.log(i);
} */

/* // object
const obj = {
  name: "sharif",
  age: 23,
  Work: "learner",
  favouriteThings: ["code", "sleeping", "eating"],
  bestFriend: {
    riyad: {
      profession: "worker",
      fatherName: "Abdul gafur",
      brothers: 4,
      brothersName: ["shed", "rashed", "sajjat"],
    },
    jihad: {
      profession: "studnt",
      fatherName: "Ruhul Madbor",
      brothers: 0,
    },
    safin: {
      profession: "student",
      fatherName: "Monwar madbar",
      brothers: 3,
    },
  },
};
let last = obj.bestFriend.riyad.brothersName.length - 1;
console.log(obj.bestFriend.riyad.brothersName[last]); */

/* // Function argument
function fnArgu(n1, n2, n3) {
  let argu = arguments;
  console.log(argu);
  for (const i of argu) {
    console.log(i);
  }
  for (const keys in argu) {
    console.log(keys);
  }
}
fnArgu(2, 3, 5); */

/* // match form array object string
let arr = [
  { id: 1, name: "lenovo laptop", price: 32 },
  { id: 2, name: "redmi phone", price: 32 },
  { id: 3, name: "apple phone", price: 32 },
  { id: 3, name: "acer laptop", price: 32 },
  { id: 3, name: "dell laptop", price: 32 },
  { id: 3, name: "asus laptop", price: 32 },
  { id: 3, name: "pixel phone", price: 32 },
  { id: 3, name: "pixel phone1", price: 32 },
];

function findMatch(arr) {
  let matches = [];
  for (const i of arr) {
    if (i.name.toLowerCase().includes(finder)) {
      matches.push(i);
    }
  }
  return matches;
}
let finder = "phone";

// console.log(findMatch(arr,finder)); */

// from quiz question
/* console.log(parseInt('123'));
// 123 (default base-10)
console.log(parseInt('123', 16));
// 123 (explicitly specify base-10)
console.log(parseInt('   123 '));
// 123 (whitespace is ignored)
console.log(parseInt('077'));
// 77 (leading zeros are ignored)
console.log(parseInt('1.9'));
// 1 (decimal part is truncated)
console.log(parseInt('ff', 16));
// 255 (lower-case hexadecimal)
console.log(parseInt('0xFF', 16));
// 255 (upper-case hexadecimal with "0x" prefix)
console.log(parseInt('xyz'));
// NaN (input can't be converted to an integer */


