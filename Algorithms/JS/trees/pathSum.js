// Given a binary tree and a sum,
// determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// For example:
// Given the below binary tree and sum = 22,
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \      \
//         7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

// Input: Array, Integer
// ex. [5,4,8,11,13,4,7,2,1]
// 22

// Output: Boolean
// ex. false


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var hasPathSum = function(root, sum) {
    if(!root) return false;

    if(root.left === null && root.right === null) return sum === root.val;

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);

};
