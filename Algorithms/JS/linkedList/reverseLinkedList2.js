// Reverse Linked List 2

// Reverse a linked list from position m to n. Do it in-place and in one-pass.

// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,

// return 1->4->3->2->5->NULL.

// Note:
// Given m, n satisfy the following condition:
// 1 ≤ m ≤ n ≤ length of list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */



// create an array to store all values
// start array with head's val
// create a temp var to grab the next nodes val as we traverse
// create a while loop that breaks when the last node in linked list has ben reached
  // if there's a next node the loop will ocntinue
  // reset current to the next node
  // push val into our du array
// once all nodes are in dup
// we can now return all items in array with subsets of dup
// slice from the beginning to the start index to create the first subset
// slice from the start to end point, then reverse subset to fill the middle
// slice from end point and on to create last endpoint
// concat all together adn return the new array


const reverseBetween = function rev(head, m, n) {
  const dup = [head.val];
  let current = head;
  while (current.next) {
    current = current.next;
    dup.push(current.val);
  }
  return dup.slice(0, m - 1).concat(dup.slice(m - 1, n).reverse(), dup.slice(n));
};
