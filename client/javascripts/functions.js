// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

//Req. B
let bitBatBotOrNot = n => {
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
    result = "Not";
  }
  //your code goes here
  return result;
};

//Req. C
let findAllbitBatBotOrNots1 = arr => {
  let array1 = "";
  let array2 = arr.map(function(z) {
    let str = bitBatBotOrNot(z);
    return `${z}: ${str}`;
  });
  return array2;
};

//Req. D
let findAllbitBatBotOrNots2 = arr => {
  let array1 = [];
  for (var i = 0; i < arr.length; i++) {
    let d = bitBatBotOrNot(arr[i]);
    array1.push(`${arr[i]}: ${d}`);
  }
  return array1;
};

//use for statement

//Req. E
let findAllbitBatBotOrNots3 = arr => {
  let array1 = [];
  for (let z of arr) {
    let d = bitBatBotOrNot(z);
    array1.push(`${z}: ${d}`);
  }
  return array1;

  //use for..of statement
};

//Req. F
//let findAllbitBatBotOrNots4 = arr => {

/*  let array1 = [];
  for
    let d = bitBatBotOrNot(z);
    array1.push(`${z}: ${d}`);
  }
  return array1;

  //use for..of statement
  };  //cant figure out using for each method. ):. Still need practice on for each.
  //use forEach method
};
*/
//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
