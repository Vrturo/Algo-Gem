// Find out the maximum sub-array of non negative numbers from an array.
// The sub-array should be continuous. That is, a sub-array created by choosing the second and fourth element
// and skipping the third element is invalid.

// Maximum sub-array is defined in terms of the sum of the elements in the sub-array.
// Sub-array A is greater than sub-array B if sum(A) > sum(B).

// Example:

// A : [1, 2, 5, -7, 2, 3]
// The two sub-arrays are [1, 2, 5] [2, 3].
// The answer is [1, 2, 5] as its sum is larger than [2, 3]
// NOTE: If there is a tie, then compare with segment's length and return segment which has maximum length
// NOTE 2: If there is still a tie, then return the segment with minimum starting index


function maxset(A){
        var result = [],
            temp = [],
            negCount = 0;
        for( var i = 0; i < A.length; i++ ){
            if( A[i] >= 0 ){
                temp.push(A[i]);
            } else {
                result.push( temp );
                temp = [];
                negCount += 1
            }
        }
        if( negCount === A.length ) return 0;
        if( A[A.length -1] > 0 ) result.push(temp);
        var maxSum = 0,
            length = 0,
            sum,
            sub;
        for( var j =0, sum = result[j[0]]; j< result.length; j++ ){
          sum = result[j].reduce(function(a, b) { return a + b; }, 0);
          if( sum > maxSum ){
            maxSum = sum;
            length = result[j].length;
            sub = result[j];
          }
          if( sum === maxSum){
            if( result[j].length > length ){
              maxSum = sum;
              length = result[j].length;
              sub = result[j];
            }
          }
        }
        return sub;
  }

console.log( maxset([ 0, 0, -1, 0 ]) )
