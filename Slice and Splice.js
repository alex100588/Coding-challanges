// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let result = []
    result.push(...arr2.slice(0,n))
    result.push(...arr1)
    result.push(...arr2.slice(n, arr2.length))
    return result
  }
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  