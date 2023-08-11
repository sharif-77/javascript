function cubeNumber(number) {
    if (typeof number !== 'number' || number<0) {
        return "Provide valid positive Number";
      }
    return Math.pow(number,3)
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
  }else if(typeof arr[0] !=='number' ||typeof arr[1] !=='number'){
    return "provide valid Number"
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === arr[1]) {
      return "equal";
    } else if (arr[0] < 0 || arr[1] < 0) {
      return "invalid input";
    } else if (arr[i] > 0) {
      if (arr[0]<arr[1]) {
        return arr=[arr[1],arr[0]]
        
      } else {
        return arr
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
  return street +','+house +','+ society
  
}


function canPay(changeArray, totalDue) {
    if (changeArray.length ==0) {
        return 'Array is empty please provide value'    
    }
    let total=0;
    for (const item of changeArray) {
        total+=item
    }
    return total>=totalDue

}
