// Write a program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

const checkForNums = (num1, num2)=> num1 === 100 || num2 === 100 || num1 + num2 === 100 ? true : false 

console.log(checkForNums(100, 0));
console.log(checkForNums(0, 100));
console.log(checkForNums(40, 60));
console.log(checkForNums(40, 65));