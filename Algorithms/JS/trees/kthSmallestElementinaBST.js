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


// create counter variable to keep track of what kth element we're on
// create result varable to return at end of solution

// create helper function to traverse through BST
  // if node exists
    // traverse through left child to find smallest child first
    // once node doesnt have left child, increment counter
    // if counter is equal to k
      // set value to result to return at the end of the function
    // traverse through right child to find the next element in order

  // call our helper function starting with root
  // return result

var kthSmallest = function(root, k) { // 159 ms runtime
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

// --------------------- DOES NOT PASS ALL TEST CASES ----------------


// var kthSmallest = function(root, k, counter=0) {
//     if(root){
//         var next = kthSmallest(root.left, k, counter);
//         if(next !== undefined) return next;
//         counter++;
//         if(counter === k) return root.val;
//         next = kthSmallest(root.right, k, counter );
//         return next;
//     }
// };


// function helper(node, counter){
    //     if(node){
    //         helper(node.left, counter);
    //         counter++;
    //         if(counter === k) return node.val;
    //         helper(node.right, counter );
    //     }
    // }
    // return helper(root, 0);
