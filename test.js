function isPrimeNumber(n){
    if( n === ( 1 || 2) ){
      return n === 2
    } else {
      for(var x = 2; x < n; x++){
        if(n % x === 0) return false;
      }
      return true;
    }
};

console.log(isPrimeNumber(2))
