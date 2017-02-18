 Linked List Cycle II

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?

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

var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow){
            let slow2 = head;
            while (slow2 != slow){
                slow = slow.next;
                slow2 = slow2.next;
            }
            return slow;
        }
    }
    return null;
};
