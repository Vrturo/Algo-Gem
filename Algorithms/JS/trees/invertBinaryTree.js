// Invert a binary tree.

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// Input: [4, 2, 7, 1, 3, 6, 9]

// Output: [4, 7, 2, 9, 6, 3, 1]


// if root is null
// or the root has no children return root
// create a temp variable and set it to root.left to store for now
// set root.left to root.right
// set root.right to the temp variable we stored
// invertTree on each child of the root
// return root

var invertTree = function(root) {
    if(!root || root.left === null && root.right === null){
        return root;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
