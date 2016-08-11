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


var hasCycle = function(head) {
    if( head === null) return false; // list does not exist..so no loop either.

    var slow = fast = head; // create two references to the start of the list.

     while(true) {
        slow = slow.next;          // 1 hop.
        if( fast.next !== null )
            fast = fast.next.next; // 2 hops.
        else
            return false;          // next node null => no loop.

        if( slow === null || fast === null ) // if either hits null..no loop.
            return false;
        if( slow === fast ) // if the two ever meet...we must have a loop.
            return true;
    }
};
