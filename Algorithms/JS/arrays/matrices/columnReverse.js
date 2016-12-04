// Given a 2d array, output the reverse the order of each column.

// Input:
// Array
// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

// Output:
// 4 3 2 1 8 7 6 5 12 11 10 9


function performOps(arr){
    var m = arr.length,
        n = arr[0].length,
        result = []
    for(i = 0; i < m;i++){
        result.push( new Array(n) );
        for(j=0;j< n;j++){
            result[i][n-1-j] = arr[i][j]
        }
    }
    return result
}
var example = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

var result = performOps(example)

for (i = 0; i < result.length; i++) {
    for (j = 0; j < result[i].length; j++){
        console.log(result[i][j]+" ");
    }
}
