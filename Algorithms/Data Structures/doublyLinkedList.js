// Doubly Linked List

// A Doubly Linked List (DLL) contains an extra pointer, typically called previous pointer,
//   together with next pointer and data which are there in singly linked list.


// Advantages over singly linked list:

// 1) A DLL can be traversed in both forward and backward direction.

// 2) The delete operation in DLL is more efficient if pointer to the node to be deleted is given.

// In singly linked list, to delete a node, pointer to the previous node is needed.
//   To get this previous node, sometimes the list is traversed.
//   In DLL, we can get the previous node using previous pointer.

// Disadvantages over singly linked list:

// 1) Every node of DLL Require extra space for an previous pointer.
//    It is possible to implement DLL with single pointer.

// 2) All operations require an extra pointer previous to be maintained.
//    For example, in insertion, we need to modify previous pointers together with next pointers.
//    For example in following functions for insertions at different positions, we need 1 or 2 extra steps to set previous pointer.


class Node {
  constructor(val, prev=null) {
    this.value = val;
    this.next = null;
    this.previous = prev;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
  }

  push(val) {
    const head = this.head;
    let current = head;
    let previous = head;
    if (!head) {
        this.head = new Node(val);
    } else {
      console.log(this.head)
        while (current && current.next) {
          previous = current;
          current = current.next;
        }
        current.next = new Node(val, current)
    }
  }

  // If you want to remove a node from your linked list you have to find the node. There are three conditions here

  // case-1: your targeted node is in the head. you have to replace the head with the next node
  // case-2: your targeted node is in the tail. you just have to remove it from the tail. Hence next of the node before the tail will be null.
  // case-3: your targeted node is in the middle of the LinkedList,
          // you have to make the node after your targeted node to be the next node of the node before your targeted node.

  remove(val){
    let current = this.head;
    //case-1
    if(current.value === val){
       this.head = current.next;
    } else {
      let previous = current;

      while (current.next) {
        //case-3
        if (current.value == val) {
          previous.next = current.next;
          break;
        }
        previous = current;
        current = current.next;
      }
      //case-2
      if (current.value === val) previous.next == null;
    }
  }

}
var dll = new DoublyLinkedList();
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.remove(3);
dll.remove(1);

console.log(dll)
