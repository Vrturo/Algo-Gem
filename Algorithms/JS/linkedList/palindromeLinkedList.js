// Given a singly linked list, determine if it is a palindrome.

// Follow up:
// Could you do it in O(n) time and O(1) space?


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

// does not work with negative integers
var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    var str = '',
        revStr = '',
        current = head;
    while (current) {
        str += current.val;
        current = current.next;
    }
    for (var i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return str === revStr;
};
