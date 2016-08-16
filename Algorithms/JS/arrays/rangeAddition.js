// Assume you have an array of length n initialized with all 0's and are given k update operations.

// Each operation is represented as a triplet: [startIndex, endIndex, inc] which increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.

// Return the modified array after all k operations were executed.

// Example:

// Given:

//     length = 5,
//     updates = [
//         [1,  3,  2],
//         [2,  4,  3],
//         [0,  2, -2]
//     ]

// Output:

//     [-2, 0, 3, 5, 3]
// Explanation:

// Initial state:
// [ 0, 0, 0, 0, 0 ]

// After applying operation [1, 3, 2]:
// [ 0, 2, 2, 2, 0 ]

// After applying operation [2, 4, 3]:
// [ 0, 2, 5, 5, 3 ]

// After applying operation [0, 2, -2]:
// [-2, 0, 3, 5, 3 ]


var getModifiedArray = function(length, updates) {
    var result = new Array( length );
    result.fill(0);

    for( var i=0; i<updates.length; i++ ){
        for( var j=0; j<updates[i].length; j++ ){
            var element = updates[i][ updates[j].length-1 ];
            var index = updates[i][j]; // 1
            if( index < result.length && index >= 0 ){
                result[index] += element;
            }else if( index < 0 ){
                index = index * -1 - 1;
                result[index] += element;
            }
        }
    }
    return result;
};
