
// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.


function calculateDifference(a, b) {
  return a - b;
}
console.log(calculateDifference(5,4));



// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not

function isOdd(num) {
  return num % 2 === 1;
}
console.log(isOdd(4));


// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.


function findMin(arr) {
  return Math.min(...arr);
}
let arr = [1,2,3,4,5,6,7,8,9]
console.log(findMin(arr));






// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
arr = [ 1,3,4,5,6,7,8,9,10,11]
console.log(filterEvenNumbers(arr));







// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.


function sortArrayDescending(arr) {
  return [...arr].sort((a, b) => {
    return b - a;
  })
}
console.log(sortArrayDescending(arr));



// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.


function lowercaseFirstLetter(str) {

  return str[0].toLowerCase() + str.slice(1)
}

console.log(lowercaseFirstLetter('Masud'));


// 7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum+=array[i];
  }
  return average = sum/ array.length
}
console.log(findAverage([1,2,3,4]));



// 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not

function isLeapYear(year) {
  return(year % 4 === 0 && year % 100!== 0) || (year % 400 === 0)
}
console.log(isLeapYear(2021));