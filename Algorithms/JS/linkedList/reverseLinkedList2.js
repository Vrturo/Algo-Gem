Reverse Linked List 2

Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.

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


var reverseBetween = function(head, m, n) {
    let current = head;
    const dup = [head.val];
    while (current.next) {
        current = current.next;
        dup.push(current.val);
    }
    return dup.slice(0, m - 1).concat(dup.slice(m - 1, n).reverse(), dup.slice(n));
};
