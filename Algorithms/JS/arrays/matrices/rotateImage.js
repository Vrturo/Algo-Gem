// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Follow up:
// Could you do this in-place?


var rotate = function(matrix) {
    var rows = matrix.length,
        col = matrix.length;

    for (var i = 0; i < rows; i++){
        for (var j = i + 1; j < col; j++){
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (i = 0; i < rows; i++){
        for (j = 0; j < col / 2; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[i][col - 1 - j];
            matrix[i][col - 1 - j] = temp;
        }
    }
};
