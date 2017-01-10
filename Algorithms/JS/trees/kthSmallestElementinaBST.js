// Kth Smallest Element in a BST

// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently?
// How would you optimize the kthSmallest routine?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// -------------------------------------------------------------------

var kthSmallest = function(root, k) {
    var counter = 0,
        result;

    function helper(node){
        if(node){
            helper(node.left);
            counter++;
            if(counter === k) result = node.val;
            helper(node.right);
        }
    }

    helper(root);
    return result;
};

// -------------------------------- does not pass all test cases ----------------


var kthSmallest = function(root, k, counter=0) {
    if(root){
        var next = kthSmallest(root.left, k, counter);
        if(next !== undefined) return next;
        counter++;
        if(counter === k) return root.val;
        next = kthSmallest(root.right, k, counter );
        return next;
    }
};


// function helper(node, counter){
    //     if(node){
    //         helper(node.left, counter);
    //         counter++;
    //         if(counter === k) return node.val;
    //         helper(node.right, counter );
    //     }
    // }
    // return helper(root, 0);
