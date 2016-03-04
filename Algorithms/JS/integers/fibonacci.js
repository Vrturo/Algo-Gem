 // How do get nth Fibonacci number?

// I create an array and start from iterate through.
// tabulation
// bottom up
// 0(n)
function fibonacci(n){
  var fibo = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo[n];
}

//Recursion
function fibonacci(n){
  if(n<=1){
    return n;
  }
  else {
    return fibonacci(n-1) + fibonacci (n-2);
  }
}

// Memo
// top down
// 0(2n) => 0(n)

function fibMemo(n){
  var cache = {};
  function fib(n){
    if(cache[n] !== undefined){
      return cache[n];
    }
    if (n === 0 || n === 1){ // base case
      return n;
    }
    var toInsert = fib(n -1)+ fib(n -2);
    cache[n] = toInsert;
    return toInsert;
  }
  return fib(n);
}
console.log(fibMemo(100));

// Regular
//Top Down w/ out Memo
// 2^n
function fib(n){
  if (n === 0 || n === 1){ // base case
    return n;
  }
  return fib(n -1)+ fib(n -2);
}

 // console.log(fib(20));


