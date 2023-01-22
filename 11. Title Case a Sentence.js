// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
    let sentence = ' '
    let splited = str.toLowerCase().split(' ')
    for (let i = 0; i < splited.length; i++) {
        let upperCases = splited[i][0].toUpperCase()
        let splitted = splited[i].slice(1)
        // console.log(splited[i].slice(1));
        // console.log(upperCases+splitted);
        sentence += upperCases+splitted + ' '
    }
    // console.log(splited);
    return sentence.slice(1, sentence.length-1);
  }
  console.log(titleCase("I'm a little tea pot"));
  console.log(titleCase("sHoRt AnD sToUt"));
 


  
