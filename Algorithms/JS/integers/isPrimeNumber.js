// How would you verify a prime number?

 // a prime number is only divisible by itself and 1.
 // So, i will run a while loop and increase by 1.


function isPrimeNumber(n){
    var divisor = 2,
        counter = 0;
    while (n > divisor) {
      if (n % divisor === 0) {
        return false
      } else {     // the divisor is increased 1 at a time. after 3 i can increase by 2.
                   // if a number is divisible by any even number, it will be divisible by 2.
        if (divisor > 2) divisor++
      }
      counter++
    }
    return true;
};


// --------------------------------------------------------------------------

function isPrimeNumber(n){
    for(var x = 2; x < n; x++){
      if(n % x === 0) return false;
    }
    return n > 1 // if 1 return false, if 2 return true by default
};

console.log(isPrimeNumber(2))

