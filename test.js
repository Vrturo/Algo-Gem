// module.exports = {
//   //param A : integer
//   //return a array of integers
//   allFactors : function(A){
//       var half = Math.floor( A/2 ),
//           small = [],
//           high = [],
//           last = A;

//             for( var i = 1; i < last; i++ ) {
//                 if( A%i ) continue;
//                 small.push( i );
//                 last = A/i;
//                 if( last !== i ) high.push( last );
//             }

//             if( !small.length ) small.push( 1 );
//             return small.concat( high.reverse() );
//   }
// };


// module.exports = {
//    //param a : integer
//     //return a list of integers
//   allFactors : function(a){var half = Math.floor( a/2 );
//   var small = [], high = [], last = a;
//     for( var i = 1; i < last; i++ ) {
//         if( a%i )
//             continue;
//         small.push( i );
//         last = a/i;
//         if( last !== i )
//             high.push( last );
//     }

//     if( !small.length )
//         small.push( 1 );
//     //console.log( half, small, high );
//     return small.concat( high.reverse() );
//   }
// };
// ----------------------------------------------------------------

// function findCount(A, B){
//       var l = 0,
//         r = A.length -1
//         if( r>=l ){
//                 var mid = Math.floor( r/2 );

//                 if( A[l] === B ) return check(l, A, B);
//                 if( A[r] === B ) return check(r, A, B);
//                 if( A[mid] === B ) return check(mid, A, B);
//                 console.log(mid)

//                 if( A[mid] > B ) return findCount( A.splice( l, mid ), B);

//                 return findCount( A.splice(mid, r), B);
//         }
//         return 0;

//   }
//   function check(index, A, B){
//             var count = 1,
//                 r = index+1,
//                 l = index-1,
//                 dup = true;
//             while( dup ){
//                 if(A[l]){
//                     if(A[l] === B){
//                         count++;
//                         l--;
//                     }
//                 }
//                 if(A[r]){
//                     if(A[r] === B){
//                         count++;
//                         r++;
//                     }
//                 }
//                 if( A[l] !== B && A[r] === undefined ) dup = false;
//                 if( A[l] === undefined && A[r] !== B ) dup = false;
//                 if(A[l] !== B || A[r] !== B) dup = false;
//             }
//             return count;

//     }



// ------------------------------------------------------------

// module.exports = {
//   //param A : array of integers
//   //param B : integer
//   //return an integer
  function findCount(A, B){
      function findCountTwo(a, b){
            var l = 0,
                r = a.length -1;

            if( r>=l ){
                var mid = Math.floor( r/2 );

                if( b[l] === b ) return check(l);
                if( a[r] === b ) return check(r);
                if( a[mid] === b ) return check(mid);

                if( a[mid] > b ) return findCountTwo( a.slice( l, mid ), b);
                return findCountTwo( a.slice(mid, r), b);
            }
            return 0;
      };
      function check(index){
                var count = 1,
                    r = index+1,
                    l = index-1,
                    dup = true;
                while( dup ){
                    if(A[l]){
                        if(A[l] === B){
                            count++;
                            l--;
                        }
                    }
                    if(A[r]){
                        if(A[r] === B){
                            count++;
                            r++;
                        }
                    }
                    if( A[l] !== B && A[r] === undefined ){
                      dup = false;
                      console.log('hitone')
                    }
                    if( A[l] === undefined && A[r] !== B ){
                      dup = false;
                      console.log('hittwo')
                    }
                    console.log(l, r, B)
                    if(A[l] !== B && A[r] !== B){
                      dup = false;
                    }
                }
                return count;
        }
      return findCountTwo(A, B);
  }
// };

    var test = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
    console.log(findCount(test, 8))
