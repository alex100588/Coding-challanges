// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
   return typeof bool === 'boolean' ? true : false
    // return bool;
  }
  console.log(booWho(null));
  console.log(booWho(false));
  console.log(booWho(true));
  
