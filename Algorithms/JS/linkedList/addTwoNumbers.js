// You are given two linked lists representing two non-negative numbers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8


var addTwoNumbers = function(l1, l2) { // 292 ms runtime
    var result = new ListNode( null ), // start result as new List with a vall of null
        pointer = result; // since we dont know our first value, we have a pointer

    while( l1 || l2 ){
        l1 === null ? l1 = new ListNode(0) : l1; // resets l1 to new list with val at 0 to keep while loop going
        l2 === null ? l2 = new ListNode(0) : l2; // resets l2 to new list with val at 0 to keep while loop going

        var sum = l1.val + l2.val;
        pointer.next = new ListNode( sum%10 ); // value cant be bigger than one digit

        if( l1.val + l2.val >= 10 ){
            var f = Math.floor( sum/10 ); // grab left over value if, sum was bigger than 10
            l1.next ? l1.next.val += f : l1.next = new ListNode(f);
        }

        l1 = l1.next; // reset l1 to l1.next to remove first value and keep rest of list
        l2 = l2.next; // reset l1 to l1.next to remove first value and keep rest of list
        pointer = pointer.next;
    }
    return result.next;
};
