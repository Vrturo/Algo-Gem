// A Binary Heap is a Binary Tree with following properties.

// 1) It’s a complete tree (All levels are completely filled except possibly the last level and
//   the last level has all keys as left as possible).
//   This property of Binary Heap makes them suitable to be stored in an array.

// 2) A Binary Heap is either Min Heap or Max Heap.
//   In a Min Binary Heap, the key at root must be minimum among all keys present in Binary Heap.
//   The same property must be recursively true for all nodes in Binary Tree.
//   Max Binary Heap is similar to Min Heap.

// Examples of Min Heap:

//             10                      10
//          /      \               /       \
//        20        100          15         30
//       /                      /  \        /  \
//     30                     40    50    100   40


// How is Binary Heap represented?

// A Binary Heap is a Complete Binary Tree.
// A binary heap is typically represented as array.

// Operations on Min Heap:

// 1) getMini():
//   It returns the root element of Min Heap. Time Complexity of this operation is O(1).

// 2) extractMin():
//   Removes the minimum element from Min Heap.
//   Time Complexity of this Operation is O(Logn) as this operation needs
//   to maintain the heap property (by calling heapify()) after removing root.

// 3) decreaseKey():
//   Decreases value of key. Time complexity of this operation is O(Logn).
//   If the decreases key value of a node is greater than parent of the node, then we don’t need to do anything.
//   Otherwise, we need to traverse up to fix the violated heap property.

// 4) insert():
//   Inserting a new key takes O(Logn) time. We add a new key at the end of the tree.
//   IF new key is greater than its parent, then we don’t need to do anything.
//   Otherwise, we need to traverse up to fix the violated heap property.

// 5) delete():
//   Deleting a key also takes O(Logn) time. We replace the key to be deleted with minum infinite by calling decreaseKey().
//   After decreaseKey(), the minus infinite value must reach root, so we call extractMin() to remove key.


class minHeap {
  constructor() {
    this.heap = [];
  }

  insertKey(k) {
    heappush(self.heap, k);
  }

  decreaseKey(i, newVal) {
    this.heap[i] = new_val
    while (i !== 0 && this.heap[this.parent(i)] > this.heap[i]) {
        // Swap heap[i] with heap[parent(i)]
        let temp = this.heap[i];
        // this.heap[this.parent(i)] = this.heap[this.parent(i)]
        // this.heap[i] =

    }
  }
  // fn to remove minium element from min heap
  extractMin() {
    return heappop(this.heap);
  }

  // This functon deletes key at index i.
  // It first reduces value to minus infinite and then calls extractMin()
  deleteKey(i) {
    this.decreaseKey(i, Number.MAX_VALUE * -1);
    this.extractMin();
  }

  getMin() {
    return this.heap[0];
  }


}

const heapObj = new minHeap();
heapObj.insertKey(3);
heapObj.insertKey(2);
heapObj.deleteKey(1);
heapObj.insertKey(15);
heapObj.insertKey(5);
heapObj.insertKey(4);
heapObj.insertKey(45);

console.log(heapObj.extractMin(), heapObj.getMin(), heapObj.decreaseKey(2, 1));
console.log(heapObj.getMin());


