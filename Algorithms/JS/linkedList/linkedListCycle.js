// Given a linked list, determine if it has a cycle in it.

// which would return true if the given Node is the first of a list with a loop, and false otherwise?
// How could you write so that it takes a constant amount of space and a reasonable amount of time?

// Here's a picture of what a list with a loop looks like:

// 1 -> 2 -> 3-> 4 -> 5 -> 6 -> 3

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


// Floyd's cycle-finding algorithm, also know as tortoise and hare algorithm.
// The idea is to have two references to the list and move them at different speeds.
// Move one forward by 1 node and the other by 2 nodes.

// If the linked list has a loop they will definitely meet.
// Else either of the two references(or their next) will become null.

const hasCycle = function cycle(head) {
  if (head === null) return false; // list does not exist..so no loop either.
  let fast;
  let slow = fast = head; // create two references to the start of the list.

  while (true) {
    slow = slow.next;          // 1 hop.
    if (fast.next !== null) {
      fast = fast.next.next; // 2 hops.
    } else {
      return false;          // next node null => no loop.
    }
    if (slow === null || fast === null) return false; // if either hits null..no loop.
    if (slow === fast) return true; // if the two ever meet...we must have a loop.
  }
};
