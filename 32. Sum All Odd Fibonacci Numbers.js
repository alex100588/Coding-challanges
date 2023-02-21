// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


function sumFibs(num) {
    let arr = [0, 1,];
    let oddSum = 0;
    for(let i= 0 ; i < num; i++){
        arr.push(arr[0]+arr[1]);
        // console.log(arr);
        arr.shift();
        // console.log(arr);
    if(arr[0] % 2 !=0 && arr[0] <= num){
    oddSum= oddSum + arr[0];
      }
    }
    return oddSum
    }
  
  
  console.log(sumFibs(13));
  console.log(sumFibs(1000));