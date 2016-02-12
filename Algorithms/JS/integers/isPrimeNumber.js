// How would you verify a prime number?

 // a prime number is only divisible by itself and 1.
 // So, i will run a while loop and increase by 1.


function isPrimeNumber(n){
  if (n <= 1) { return false}

  divisor = 2;

  while (n > divisor){
    if (n % divisor === 0){
      return false
    } else { // the divisor is increased 1 at a time. after 3 i can increase by 2.
              // if a number is divisible by any even number, it will be divisible by 2.
        if (divisor > 2){
          divisor += 2
        }
        divisor ++
    }
  }
  return true;
}



function isPrimeNumber(n){
  divisor = 2;

  while (n > divisor){
    if (n % divisor === 0){
      return false
    } else{
        divisor++
    }
  }
  return true;
}
