// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  let vowels = 'aeiou'.split('')

  for (let i = 0; i < str.length; i++) {
    let individualLetter = str[i]
    if(vowels.indexOf(individualLetter) !== -1 && i === 0){
      return str + 'way'
    }
    if(vowels.indexOf(individualLetter) !== -1 ){
      return str.slice(i) + str.slice(0, i) + 'ay'
    }
  }
    return str + 'ay';
  }
  
  console.log(translatePigLatin("consonant")); 
  console.log(translatePigLatin("paragraphs")); 
  console.log(translatePigLatin("schwartz")); 