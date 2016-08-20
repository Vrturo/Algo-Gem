// Trie | (Insert and Search)

// Trie is an efficient information retrieval data structure.
// Using trie, search complexities can be brought to optimal limit (key length).
// If we store keys in binary search tree,
// a well balanced BST will need time proportional to M * log N,
// where M is maximum string length and N is number of keys in tree. Using trie,
// we can search the key in O(M) time. However the penalty is on trie storage requirements.

// Every node of trie consists of multiple branches.
// Each branch represents a possible character of keys.
// We need to mark the last node of every key as leaf node.
// A trie node field value will be used to distinguish the node as leaf node (there are other uses of the value field).

// Inserting a key into trie is simple approach.
// Every character of input key is inserted as an individual trie node.
// Note that the children is an array of pointers to next level trie nodes.
// The key character acts as an index into the array children. If the input key is new or an extension of existing key,
// we need to construct non-existing nodes of the key, and mark leaf node.
// If the input key is prefix of existing key in trie, we simply mark the last node of key as leaf.
// The key length determines trie depth.

// Searching for a key is similar to insert operation, however we only compare the characters and move down.
// The search can terminate due to end of string or lack of key in trie.
// In the former case, if the value field of last node is non-zero then the key exists in trie.
// In the second case, the search terminates without examining all the characters of key, since the key is not present in trie.

// The following picture explains construction of trie using keys given in the example below,

//                        root
//                     /   \    \
//                     t   a     b
//                     |   |     |
//                     h   n     y
//                     |   |  \  |
//                     e   s  y  e
//                  /  |   |
//                  i  r   w
//                  |  |   |
//                  r  e   e
//                         |
//                         r


// In the picture, every character is of type trie_node_t.
// For example, the root is of type trie_node_t, and it’s children a, b and t are filled,
// all other nodes of root will be NULL. Similarly, “a” at the next level is having only one child (“n”),
// all other children are NULL.

// Insert and search costs O(key_length), h
// owever the memory requirements of trie is O(ALPHABET_SIZE * key_length * N) where N is number of keys in trie.
// There are efficient representation of trie nodes
// (e.g. compressed trie, ternary search tree, etc.) to minimize memory requirements of trie.


var trie = function(){
    this.head = {};
};

trie.prototype.validate = function( word ){
    if( (word === undefined) || (word === null) ) throw "The given word is invalid.";
    if( typeof word !== "string" ) throw "The given word is not a string";
}

trie.prototype.add = function( word ){
    this.validate(word);

    var current = this.head;

    for ( var i = 0; i < word.length; i++ ) {
        if( !(word[i] in current) ) { // if letter doesnt exist in hash
            current[word[i]] = {};
        }

        current = current[word[i]]
    };

    current.$ = 1;  // word end marker -> {a: { $: 1} }
};

If there is another letter, return to the previous step. If not, check for the word terminating marker.


trie.prototype.hasWord = function(word) {
    this.validate(word);

    var current = this.head;

    for ( var i = 0; i < word.length; i++ ) { // if the letter exists on the tree, go to the letter.
        if( !(word[i] in current) ) {
            return false;
        }

        current = current[word[i]] // If there is another letter, return to the previous step.
    };

    return current.$ === 1; // If not, check for the word terminating marker.
};

trie.prototype.remove = function(word) {
    this.validate(word);

    canDelete(word, -1, this.head);

    function canDelete(word, index, node){
        if( word === undefined ) throw "Bad Word";
        if( index >= word.length ) throw "Bad index to check for deletion.";
        if( node === undefined ) throw "Bad Node at " + index + " for " + word;

        if( index === word.length - 1 ) {
            //last letter
            //always delete word marker (as we are deleting word)
            return ( delete node.$ ) && noKids( node ); //if last letter of word, should be empty.
        }
        else {
            //any other letter in word
            //check child, and after child check, I am now empty
            if( canDelete(word, index + 1, node[word[index + 1]]) ){
                //delete me
                return (delete node[word[index + 1]]) && noKids(node);
            }
        }
        return false;
    };

    function noKids(node) {
        return Object.keys(node).length === 0;
    };
};

// An advantage of using a trie is the ease in which a sorted list of words can be generated.
// All you have to do is output all the letters by Pre-Order Traversal.
// And sorting using a trie is fast – the worst case sorting is O(kn),
// where k is the length of the longest word in the trie.

trie.prototype.sort = function() {
    var word = "";
    var sorted = [];

    sortTrie(this.head, word, sorted);

    function sortTrie(node, word, sorted) {
        for( var letter in node ) {
            if (letter === '$'){
              sorted.push(word);
            } else {
                sortTrie(node[letter], word + letter, sorted);
            }
        }
    }

    console.log(sorted);
    return sorted;
};
