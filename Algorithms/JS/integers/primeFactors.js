// How could you find all prime factors of a number?

// the prime factors of a positive integer are the prime numbers that divide that integer exactly.

 // Run a while loop. start dividing by two and if not divisible increase divider until u r done.

 function primeFactors(n){
  var factors = [],
      divisor = 2;

  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor);
       n = n/ divisor;
    }
    else{
      divisor++;
    }
  }
  return factors;

 }
