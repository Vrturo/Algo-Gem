// Prime Sum

// Given an even number ( greater than 2 ), return two prime numbers whose sum will be equal to given number.

// NOTE A solution will always exist. read Goldbach’s conjecture

// Example:


// Input : 4
// Output: 2 + 2 = 4

// If there are more than one solutions possible, return the lexicographically smaller solution.

// If [a, b] is one solution with a <= b,
// and [c,d] is another solution with c <= d, then

// [a, b] < [c, d]

// If a < c OR a==c AND b < d.

/**
 * @param {number} A
 * @return {array []}
 */

//param A : integer
//return a array of integers
function primeSum(A){
      var primes = [];
      for(var i = 2; i < A; i++) {
          primes[i] = true;
      }
      var limit = Math.sqrt(A);
      for(i = 2; i < limit; i++) {
          if(primes[i] === true) {
              for(var j = i * i; j < A; j += i) {
                  primes[j] = false;
              }
          }
      }
      var resultPrimes = [];
      for(i = 2, count = 0; i < A; i++) {
          if(primes[i] === true) resultPrimes.push(i);
      }
      i=0;
      var j =0,
          final = [];
      while( j < resultPrimes.length ){
          if(resultPrimes[i]+resultPrimes[j] === A){
              final.push( [resultPrimes[i],resultPrimes[j]] )
          }
          if(i === j){
              j++;
              i=0;
          } else {
              i++;
          }
      }
      var result = final[0];
      for(i=1, min=final[0][0];i<final.length; i++){
          if(final[i][0] < min) result = final[i];
      }
      return result;
  }
