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

class trie {
  constructor() {
    this.head = {};
  }

  static noKids(node) {
    return Object.keys(node).length === 0;
  }

  canDelete(word, index, node) {
    if (word === undefined) throw new Error('Bad Word');
    if (index >= word.length) throw new Error('Bad index to check for deletion.');
    if (node === undefined) throw new Error(`Bad Node at ${index} for ${word}`);

    if (index === word.length - 1) {
      // last letter
      // always delete word marker (as we are deleting word)
      return (delete node.$) && this.noKids(node); // if last letter of word, should be empty.
    }

    // any other letter in word
    // check child, and after child check, I am now empty
    if (this.canDelete(word, index + 1, node[word[index + 1]])) return (delete node[word[index + 1]]) && this.noKids(node);

    return false;
  }

  sortTrie(node, word, sorted) {
    for (const letter in node) {
      letter === '$' ? sorted.push(word) : this.sortTrie(node[letter], word + letter, sorted);
    }
  }

  static validate(word) {
    if ((word === undefined) || (word === null)) {
      throw new Error('The given word is invalid.');
    }
    if (typeof word !== 'string') {
      throw new Error('The given word is not a string');
    }
  }

  add(word) {
    this.validate(word);
    let current = this.head;

    for (let i = 0; i < word.length; i += 1) {
      if (!(word[i] in current)) current[word[i]] = {};

      current = current[word[i]];
    }

    current.$ = 1; // word end marker
  }

  hasWord(word) {
    this.validate(word);
    let current = this.head;

    for (let i = 0; i < word.length; i += 1) {
      if (!(word[i] in current)) return false;

      current = current[word[i]];
    }

    return current.$ === 1; // word end marker
  }

  remove(wordToRemove) {
    this.validate(wordToRemove);

    this.canDelete(wordToRemove, -1, this.head);
  }

  sort() {
    const sorted = [];

    this.sortTrie(this.head, '', sorted);

    return sorted;
  }
}

