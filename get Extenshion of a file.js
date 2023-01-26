// Write a Javascript program to get the extenshion of a filename

const extenshion = (file)=> file.slice(file.lastIndexOf('.'))

console.log(extenshion('files.js'));
console.log(extenshion('files.js.xl'));
console.log(extenshion('files.a.ar'));