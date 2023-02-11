// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        // console.log(arr1[i]);
        if(arr2.indexOf(arr1[i]) === -1){
            newArr.push(arr1[i])
        }
    }
    for(let j = 0; j < arr2.length; j++){
        if(arr1.indexOf(arr2[j]) === -1){
            newArr.push(arr2[j])
        }
    }
    return newArr;
  }
 
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  