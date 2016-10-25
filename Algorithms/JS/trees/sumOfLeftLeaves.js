// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

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

var sumOfLeftLeaves = function(root) { // 105 ms runtime
    if( !root ) return 0;
    var sum = 0;
    if( root.left ) { // if node exists
        if( root.left.left === null && root.left.right === null ) { // if left leaf node
            sum += root.left.val; // add sum
        } else {
            sum += sumOfLeftLeaves(root.left); // if not leaf, keep traversing
        }
    }
    if( root.right ) sum += sumOfLeftLeaves(root.right ); // keep traversing if not right child
    return sum;
};
