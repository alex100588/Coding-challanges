// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let min = Math.min(arr[0], arr[1])
  let max = Math.max(arr[0], arr[1])
  let total = 0
  for (let i = min; i < max+1; i++) {
    console.log(i);
    total+=i
  }
  return total ;
}
console.log(sumAll([1, 4]));
sumAll([1, 4]);