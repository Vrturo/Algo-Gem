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
        var allSub = [], // store all sub arrays
            temp = [], // build up array
            negCount = 0;

        for( var i = 0; i < A.length; i++ ){
            if( A[i] >= 0 ){
                temp.push(A[i]);
            } else {
                allSub.push( temp );
                temp = [];
                negCount += 1; //increment everytime a negative numbers is encountered
            }
        }
        if( negCount === A.length ) return 0; // if all numbers are negative return 0
        if( A[A.length -1] > 0 ) allSub.push(temp); // if last element was positive push build up into result arr

        var maxSum = 0,
            length = 0,
            sum,
            sub;

        for( var j =0, sum = allSub[j[0]]; j< allSub.length; j++ ){
          sum = allSub[j].reduce(function(a, b) { return a + b; }, 0);
          if( sum >maxSum ){
            maxSum = sum;
            length = allSub[j].length;
            sub = allSub[j];
          }
          if( sum === maxSum){
            if( allSub[j].length > length ){
              maxSum = sum;
              length = allSub[j].length;
              sub = allSub[j];
            }
          }
        }
        return sub;
  }

console.log( maxset([ 0, 0, -1, 0 ]) )
