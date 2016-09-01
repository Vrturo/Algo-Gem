// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// For example,

//     1
//    / \
//   2   3
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.

// Return the sum = 12 + 13 = 25.

// Input: Array
// ex. [1,2,3]

// Output: Integer
// 25

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */


var sumNumbers = function(root, sum=0) {
    if(!root) return 0; //return 0 when node doesn't exists
    sum = 10 * sum + root.val; // sum of current path (till this node)
    if (!root.left && !root.right) return sum; //return on leaf node
    return sumNumbers(root.left, sum) + sumNumbers(root.right, sum); //keep on calculating
};
