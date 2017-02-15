compare binary search trees vs hash tables
  - advantages vs disadvantages
  - why use one over the other?


BST advantages
  - Binary Search Trees (reference-based) are memory-efficient. They do not reserve more memory than they need to.

  - Binary Search Trees allows you to do range searches efficiently.

      Say you want to get all the elements whose keys are between 0 to 5000.
      And actually there is only one such element and 10000 other elements whose keys are not in the range.
      BST can do range searches quite efficiently since it does not search a subtree which is impossible to have the answer.

      While, how can you do range searches in a hash table? You either need to iterate every bucket space, which is O(n),
      or you have to look for whether each of 1,2,3,4... up to 5000 exists.
      (what about the keys between 0 and 5000 are an infinite set? for example keys can be decimals)

  - find the element closest to (not necessarily equal to) some arbitrary key value (or closest above/below)

  - iterate through the contents of the tree in sorted order


Hash advantages

  - A binary tree is slower to search and insert into

  - constant time look up

  - constant time addition
