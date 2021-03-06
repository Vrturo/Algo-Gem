// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

// Breadth First Search
var minDepth = function(root) { // 119 ms runtime
  if( root === null ) return 0;
    var queue = [],
        j = 0;
    queue.push( root ); // push root to q
    while( queue.length ){ // as long as root contains anything
        j++;
        var k = queue.length; // reset q's length every pass
        for( var i = 0; i < k; i++ ){ // loop through q
            var node = queue[0]; // store first nod
            if( !node.left && !node.right ) return j; // if no children we reached min depth
            queue.shift(); // de q
            if( node.left ) queue.push( node.left ); // push if node exists
            if( node.right ) queue.push( node.right ); // push if node exists
        }
    }
};

// -------------------------------


var minDepth = function(root) { // 139ms runtime
    if( root === null ) return 0;
    var left = minDepth(root.left),
        right = minDepth(root.right);
    // gather smallest depth and add 1 because depth starts at 1
    return (left === 0 || right === 0) ? left + right + 1: Math.min( left,right ) + 1;
};

// -----------------------------------------------

var minDepth = function(root) {
    if( root === null ) return 0;
    if( root.left !== null && root.right !== null ){
        return Math.min( minDepth(root.left), minDepth(root.right) )+1;
    } else {
        return Math.max( minDepth(root.left), minDepth(root.right) )+1;
    }
};

// ---------------------------------------------------------------------

