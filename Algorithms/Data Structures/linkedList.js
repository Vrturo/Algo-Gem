// Linked List

// Like arrays, Linked List is a linear data structure.
// Unlike arrays, linked list elements are not stored at contiguous location;
// the elements are linked using pointers.

// Why Linked List?

// Arrays can be used to store linear data of similar types, but arrays have following limitations.

// 1) The size of the arrays is fixed:
//   So we must know the upper limit on the number of elements in advance.
//   Also, generally, the allocated memory is equal to the upper limit irrespective of the usage.

// 2) Inserting a new element in an array of elements is expensive, because room has to be created for the new elements and to create room existing elements have to shifted.
//   For example, in a system if we maintain a sorted list of IDs in an array id.
//   id = [1000, 1010, 1050, 2000, 2040].
//   And if we want to insert a new ID 1005, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000).
//   Deletion is also expensive with arrays until unless some special techniques are used.
//   For example, to delete 1010 in id, everything after 1010 has to be moved.

// Advantages over arrays:

// 1) Dynamic size

// 2) Ease of insertion/deletion

// Drawbacks:

//   1) Random access is not allowed. We have to access elements sequentially starting from the first node.
//      So we cannot do binary search with linked lists.

//   2) Extra memory space for a pointer is required with each element of the list.

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}

var sll = new LinkedList();
//push node
sll.push(2);
sll.push(3);
sll.push(4);

//check values by traversing LinkedList
console.log(sll.head);
console.log(sll.head.next);
console.log(sll.head.next.next);
