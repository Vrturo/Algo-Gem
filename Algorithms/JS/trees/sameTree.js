// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.



// write individual conditionals
// if one tree is null return to see if the other is too
  // if other tree is null as well its true
  // if one tree is null and other isnt its false
// so once both trees have elements
// if both tree val arent the same return false
// run isSameTree on left side and right side of both elements

var isSameTree = function(p, q) {
    if(p === null){
         return q === null;
    }
    if(q === null){
        return p === null;
    }
    if(p.val !== q.val){
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
