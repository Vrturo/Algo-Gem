// The Karatsuba algorithm is a fast multiplication algorithm.
// It was discovered by Anatoly Karatsuba in 1960 and published in 1962.
// It reduces the multiplication of two n-digit numbers to at most n^logvn^3 == n^1.585
// single-digit multiplications in general (and exactly n^logv2^3 when n is a power of 2).
// It is therefore faster than the classical algorithm, which requires n2 single-digit products.
// For example, the Karatsuba algorithm requires 310 = 59,049 single-digit multiplications to multiply two 1024-digit numbers
// (n = 1024 = 210), whereas the classical algorithm requires (210)2 = 1,048,576.

// The Karatsuba algorithm was the first multiplication algorithm asymptotically faster than the quadratic "grade school" algorithm.
// The Toom–Cook algorithm is a faster generalization of Karatsuba's method,
// and the Schönhage–Strassen algorithm is even faster, for sufficiently large n.


function karatsubaMulti(x, y) {

  var n = Math.min( ('' + x).length, ('' + y).length );

  if( n == 1 ) return x * y;

  var tenpowhalfn = Math.pow( 10, parseInt(n / 2) ), // helps pad 4 0's
      tenpown = Math.pow( 10, 2 * parseInt(n / 2) ); // // helps pad 2 0's

  var a = parseInt(x / tenpowhalfn),
      b = x % tenpowhalfn,
      c = parseInt(y / tenpowhalfn),
      d = y % tenpowhalfn;

  return tenpown * karatsubaMulti(a, c) + tenpowhalfn * (karatsubaMulti(a, d) + karatsubaMulti(b, c)) + karatsubaMulti(b, d);
}


console.log( karatsubaMulti(100, 5) ); // return 500
console.log( karatsubaMulti(1234, 56789) );// return 70077626
