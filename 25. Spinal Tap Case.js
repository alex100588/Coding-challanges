// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
    let camelCases = str.replace(/([a-z])([A-Z])/g, '$1 $2')
    let spacesAndDashed = camelCases.replace(/\s|_/g, '-')
    return spacesAndDashed.toLowerCase()
  }
  
 console.log(spinalCase('This Is Spinal Tap')); 
 console.log(spinalCase('thisIsSpinalTap')); 