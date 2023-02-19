// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let startingPosition = alphabet.indexOf(str[0])
    // console.log(startingPosition);
    for (let i = startingPosition; i < alphabet.length; i++) {
      // console.log(alphabet[i]);
      if(str[i - startingPosition] !== alphabet[i]){
        return alphabet[i]
      }
    }
  }
 
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));
