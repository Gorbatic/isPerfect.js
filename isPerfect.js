const ifPerfect = (num) => {
  let i = 1;
  let result = 0;
  while (i < num) {
    if (num % i === 0) {
      result += i;
    } 
    
    i++;
  }
  console.log(num === result);
};

/* 
  The first 5 perfect numbers:
  1) 6
  2) 28
  3) 496
  4) 8.128
  5) 33.550.336
*/
