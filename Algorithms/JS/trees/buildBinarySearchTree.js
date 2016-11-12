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
    constructor( arr ) {
        this.root =  new Node( arr[0] );
        this.q = [];
        this.index = 1;
        this.arr = arr;
        this.q.push( this.root );
    }

    insert( val, parent, side ){
        var newNode = new Node( val );
        side === 'l' ? parent.left = newNode : parent.right = newNode;
        this.index++;
        this.q.push( newNode );
    }

    buildTree() {
        while( this.q.length ){
            var currentNode = this.q[0],
                newNode;

            if( currentNode === this.root ){
                if( currentNode.val > this.arr[this.index] ) this.insert( this.arr[this.index], currentNode, 'l' );
                this.insert(this.arr[this.index], currentNode)
                if( currentNode.val < this.arr[this.index] ) this.insert( this.arr[this.index], currentNode, 'r' );
            }

            if( currentNode.val < this.root.val ){
                if( currentNode.val > this.arr[this.index] && this.root.val > this.arr[this.index] ){
                    this.insert( this.arr[this.index], currentNode, 'l' );
                }
                if( currentNode.val < this.arr[this.index] && this.root.val > this.arr[this.index] ){
                    this.insert( this.arr[this.index], currentNode, 'r' );
                }
            } else {
                if( currentNode.val > this.arr[this.index] && this.root.val < this.arr[this.index] ){
                    this.insert( this.arr[this.index], currentNode, 'l' );
                }
                if( currentNode.val < this.arr[this.index] && this.root.val < this.arr[this.index] ){
                    this.insert( this.arr[this.index], currentNode, 'r' );
                }
            }

            this.q.shift();
        }
    }
}

var ex = [4, 2, 5, 1, 3, 7, 6, 8];
var newTree = new BinarySearchTree( ex );
newTree.buildTree();
console.log(newTree)

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
        q.shift();
    }
    return ourTree.root
}



var example = [4, 2, 5, 1, 3, 7, 6, 8];
console.log(buildBinarySearchTree(example))
