A Binary Heap is a Binary Tree with following properties.

1) It’s a complete tree (All levels are completely filled except possibly the last level and
  the last level has all keys as left as possible).
  This property of Binary Heap makes them suitable to be stored in an array.

2) A Binary Heap is either Min Heap or Max Heap.
  In a Min Binary Heap, the key at root must be minimum among all keys present in Binary Heap.
  The same property must be recursively true for all nodes in Binary Tree.
  Max Binary Heap is similar to Min Heap.

Examples of Min Heap:

            10                      10
         /      \               /       \
       20        100          15         30
      /                      /  \        /  \
    30                     40    50    100   40


How is Binary Heap represented?

A Binary Heap is a Complete Binary Tree.
A binary heap is typically represented as array.

Operations on Min Heap:

1) getMini():
  It returns the root element of Min Heap. Time Complexity of this operation is O(1).

2) extractMin():
  Removes the minimum element from Min Heap.
  Time Complexity of this Operation is O(Logn) as this operation needs
  to maintain the heap property (by calling heapify()) after removing root.

3) decreaseKey():
  Decreases value of key. Time complexity of this operation is O(Logn).
  If the decreases key value of a node is greater than parent of the node, then we don’t need to do anything.
  Otherwise, we need to traverse up to fix the violated heap property.

4) insert():
  Inserting a new key takes O(Logn) time. We add a new key at the end of the tree.
  IF new key is greater than its parent, then we don’t need to do anything.
  Otherwise, we need to traverse up to fix the violated heap property.

5) delete():
  Deleting a key also takes O(Logn) time. We replace the key to be deleted with minum infinite by calling decreaseKey().
  After decreaseKey(), the minus infinite value must reach root, so we call extractMin() to remove key.












