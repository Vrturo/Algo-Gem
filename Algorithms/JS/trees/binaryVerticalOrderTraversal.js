// Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

// Examples:

// Given binary tree [3,9,20,null,null,15,7],
//    3
//   /\
//  /  \
//  9  20
//     /\
//    /  \
//   15   7
// return its vertical order traversal as:
// [
//   [9],
//   [3,15],
//   [20],
//   [7]
// ]
// Given binary tree [3,9,8,4,0,1,7],
//      3
//     /\
//    /  \
//    9   8
//   /\  /\
//  /  \/  \
//  4  01   7
// return its vertical order traversal as:
// [
//   [4],
//   [9],
//   [3,0,1],
//   [8],
//   [7]
// ]
// Given binary tree [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5),
//      3
//     /\
//    /  \
//    9   8
//   /\  /\
//  /  \/  \
//  4  01   7
//     /\
//    /  \
//    5   2
// return its vertical order traversal as:
// [
//   [4],
//   [9,5],
//   [3,0,1],
//   [8,2],
//   [7]
// ]


var verticalOrder = function(root) {
    var hashMap = {};

    function traverse( node, count, map ){
        if( node ){
            if( map[count] ){
                map[count].push( node.val );
                traverse( node.left, count + 1, map );
                traverse( node.right, count - 1, map );
            }
            else{
                map[count] = [ node.val ];
                traverse( node.left, count + 1, map );
                traverse( node.right, count - 1, map );
            }
        }
    }
    traverse( root, 0, hashMap );

    var keys = Object.keys( hashMap ),
        result = [];
    keys.sort(function(a, b){ return b - a });

    for (var i = 0; i < keys.length; i++) {
        result.push( hashMap[ keys[i] ] );
    }

    return result;
};
