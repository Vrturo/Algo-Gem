// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

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
