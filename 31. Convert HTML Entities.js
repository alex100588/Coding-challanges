// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let splitted = str.split('')
    // console.log(splitted);
    for (let i = 0; i < splitted.length; i++) {
        console.log(splitted[i]);
        if(str[i] === '&') splitted[i] = '&amp;'
        if(str[i] === '<') splitted[i] = '&lt;' 
        if(str[i] === '>') splitted[i] = "&gt;";
        if(str[i] === '"') splitted[i] = "&quot;";
        if(str[i] === "'") splitted[i] = "&apos;";
    }
   
     return splitted.join('')
  }
  
//   console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  