// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function(root) { // 109 ms runtime
    return root === null || helper( root.left, root.right );
};

function helper( left, right ){ // get each node at the same time
    if( left===null || right===null ) return left === right; // nodes can be null
    if( left.val!==right.val ) return false;  // if nodes dont equal eachother return false
    return helper(left.left, right.right) && helper(left.right, right.left); // call helper on both nodes simultaneously
}


