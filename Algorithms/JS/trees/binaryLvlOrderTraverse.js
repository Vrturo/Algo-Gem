// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree {3,9,20,#,#,15,7},
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


var levelOrder = function(root) {
    var lib = {},
        result = [];

    function traverse(cNode, cDepth){
        if(cNode === null){
            return;
        }
        else {
            if(lib[cDepth] === undefined){
                lib[cDepth] = [cNode.val];
            }
            else  {
                lib[cDepth].push(cNode.val);
            }
            traverse(cNode.left, cDepth+1);
            traverse(cNode.right, cDepth+1);
        }
    }
    traverse(root, 1);
    for(var i = 1; i <= Object.keys(lib).length; i++){
        result.push(lib[i]);
    }
    return result;
};
