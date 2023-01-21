// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iter

function largestOfFour(arr) {
    let nums = []
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].sort((a,b)=>a-b));
        let sorted = arr[i].sort((a,b)=>a-b);
        // console.log(sorted);
        nums.push(sorted[3])
        
    }
    return nums;
  }
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  
