// Write a program to calculate pow(x,n)


function myPow(x, n) { // iterative or logn depending if exponent is even or odd
    if( n === 0 ) return 1;
    var temp;
    if( n%2 === 0 ){
      temp = myPow( x, n/2 );
      return temp*temp;
    } else {
        temp = 1;
        while( n-- ) {
            temp *= x;
        }
        return temp;
    }
}


// 0(logn)
function myPow(x, n) { // only works on even exponents
    var temp;
    if( n === 0 ) return 1;
    temp = myPow( x, n/2 );
    if( n%2 === 0 ){
      return temp*temp;
    } else {
      return x*temp*temp;
    }
}
