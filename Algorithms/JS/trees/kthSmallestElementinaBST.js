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



 if(root){
        var smaller = kthSmallest(root.left, k, counter);
        if(smaller !== undefined) return smaller;
        counter++;
        if(counter === k) return root.val;
        smaller = kthSmallest(root.right, k, counter );
        return smaller
    }

// function helper(node, counter){
    //     if(node){
    //         helper(node.left, counter);
    //         counter++;
    //         if(counter === k) return node.val;
    //         helper(node.right, counter );
    //     }
    // }
    // return helper(root, 0);
