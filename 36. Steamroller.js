// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let flatt = [].concat(...arr)
  // console.log(flatt);
    return flatt.some(Array.isArray) ? steamrollArray(flatt) : flatt
  }

  
 console.log(steamrollArray([1, [2], [3, [[4]]]])); 
 console.log(steamrollArray([[["a"]], [["b"]]])); 
  