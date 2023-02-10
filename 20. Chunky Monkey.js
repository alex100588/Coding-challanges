// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let groups =[]
    while(arr.length > 0){
        groups.push(arr.splice(0, size))
    }
    
    return groups;
  }
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
  
