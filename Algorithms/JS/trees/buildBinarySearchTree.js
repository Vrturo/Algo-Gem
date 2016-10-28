/*
 *  1. Write a function that takes in an array of integers and performs the insert method on each
 *     item of the array in order.
 *
 *  Input: Array
 *  Output: Binary Search Tree
 *
 *  Example: [4, 2, 5, 1, 3, 7, 6, 8]
 *  Output this binary search tree:
 *
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
 */


class Node {
    constructor( val ) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor( root ) {
        this.root = root;
    }

    insertNode( val ) {

    }
}



function buildBinarySearchTree(arr) {
    var ourRoot = new Node( arr[0] ),
        ourTree = new BinarySearchTree( ourRoot ),
        q = [],
        i = 1;
    q.push( ourRoot );
    while( q.length ) {
        var currentNode = q[0],
            newNode;
        if( currentNode === ourRoot ){
            if( currentNode.val > arr[i] ){
                newNode = new Node( arr[i] );
                currentNode.left = newNode;
                i++;
                q.push( newNode )
            }
            if( currentNode.val < arr[i] ){
                newNode = new Node( arr[i] );
                currentNode.right = newNode;
                i++;
                q.push( newNode )
            }
        }

        if( currentNode.val < ourRoot.val ){
            // current node = 3
            // Left
            if( currentNode.val > arr[i] && ourRoot.val > arr[i] ){
                newNode = new Node( arr[i] );
                currentNode.left = newNode;
                i++;
                q.push( newNode )
            }
            if( currentNode.val < arr[i] && ourRoot.val > arr[i] ){
                newNode = new Node( arr[i] );
                currentNode.right = newNode;
                i++;
                q.push( newNode )
            }

        } else {
            // 7
            // right
            if( currentNode.val > arr[i] && ourRoot.val < arr[i] ){
                newNode = new Node( arr[i] );
                currentNode.left = newNode;
                i++;
                q.push( newNode )
            }
            if( currentNode.val < arr[i] && ourRoot.val < arr[i] ){
                newNode = new Node( arr[i] );
                currentNode.right = newNode;
                i++;
                q.push( newNode )
            }
        }
            // if( currentNode.val > arr[i] && arr[i] < ourRoot.val ){
            //     newNode = new Node( arr[i] );
            //     currentNode.left = newNode;
            //     i++;
            //     q.push( newNode )
            // }
            // if( currentNode.val < arr[i] && arr[i] > ourRoot.val ){
            //     newNode = new Node( arr[i] );
            //     currentNode.right = newNode;
            //     i++;
            //     q.push( newNode )
            // }
        q.shift();
    }
    return ourTree.root
}



var example = [4, 2, 5, 1, 3, 7, 6, 8];
// var tree = new BinarySearchTree();
// tree.insertNode(4);
// tree.insertNode(2);
// tree.insertNode(5);
// tree.insertNode(1);
// tree.insertNode(3);
// tree.insertNode(7);
// tree.insertNode(6);
// tree.insertNode(8);
console.log(buildBinarySearchTree(example))
