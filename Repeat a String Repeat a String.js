function repeatStringNumTimes(str, num) {
    let total =''
    for (let i = 0; i < num; i++) {
        total+=str
    }
    return total
  }
  console.log(repeatStringNumTimes("abc", 3));
  