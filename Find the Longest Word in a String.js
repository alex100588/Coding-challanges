// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let longest = ''
    let word = str.split(' ')
    for (let i = 0; i < word.length; i++) {
        // console.log(word[i]);
        if(longest.length < word[i].length){
            longest = word[i]
        }
    }
    // console.log(word);
    console.log(longest);
    return longest.length;
  }
  
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));