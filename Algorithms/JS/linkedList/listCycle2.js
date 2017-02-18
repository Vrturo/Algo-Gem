//  Linked List Cycle II

// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// Note: Do not modify the linked list.

// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// Define two pointers slow and fast. Both start at head node
// fast is twice as fast as slow.
// If it reaches the end it means there is no cycle, otherwise eventually it will eventually catch up to slow pointer somewhere in the cycle.
// create a while loop that breaks if fast reaches end of list
  // fast is increment by 2 nodes
  // slow increments by one
    // if fast equals to slow return slow which is causing the cycle
      // From our calculation slow pointer traveled exactly full cycle when it meets fast pointer,
      // and before starting on a cycle, it must travel to the first node in cycle to reach the point where cycle begins!
      // We can start another slow pointer at head node, and move both pointers until they meet at the beginning of a cycle.
      // create another slow pointer that start from head and allows the slow pointer to catch up
// if fast pointer breaks loop there is no cycle, return null


const detectCycle = function cycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      let slow2 = head;
      while (slow2 !== slow) {
        slow = slow.next;
        slow2 = slow2.next;
      }
      return slow;
    }
  }
  return null;
};
