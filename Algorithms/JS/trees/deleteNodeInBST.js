// Delete Node in a BST

// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
// Note: Time complexity should be O(height of tree).

// Example:

// root = [5,3,6,2,4,null,7]
// key = 3

//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Given key to delete is 3. So we find the node with value 3 and delete it.

// One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

//     5
//    / \
//   4   6
//  /     \
// 2       7

// Another valid answer is [5,2,6,null,4,null,7].

//     5
//    / \
//   2   6
//    \   \
//     4   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

// Recursively find the node that has the same value as the key, while setting the left/right nodes equal to the returned subtree
// Once the node is found, have to handle the below 4 cases
  // node doesn't have left or right - return null
  // node only has left subtree - return the left subtree
  // node only has right subtree- return the right subtree
  // node has both left and right
    // find the minimum value in the right subtree
    // set that value to the currently found node
    // recursively delete the minimum value in the right subtree
// return final object

const deleteNode = function (root, key) {
  if (root === null) return null;

  function findMin(node) {
    while (node.left !== null) node = node.left;
    return node;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    const minNode = findMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, root.val);
  }
  return root;
};
