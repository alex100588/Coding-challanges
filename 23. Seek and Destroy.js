// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...args) {
    let newArr = []
    // console.log(arguments);
    // console.log(Object.values(arguments).splice(1));
    let battleField = Object.values(arguments[0])
    let elementsToDestroy = Object.values(arguments).splice(1)
    // console.log(battleField);
    for (let i = 0; i < battleField.length; i++) {
        if (elementsToDestroy.indexOf(battleField[i]) === -1) {
            newArr.push(battleField[i])
        }
    }
    
  return newArr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([1, 2, 3, 1, 2, 3, 4, 5, 8], 1, 3, 8, 5));
