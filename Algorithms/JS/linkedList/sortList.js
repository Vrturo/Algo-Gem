// Sort a linked list in O(n log n) time using constant space complexity.

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


var sortList = function(head) {
    var p1 = head,
        p2 = head,
        len = 0,
        step = 1,
        tempHead = new ListNode();

    tempHead.next = head;

    // get the total length of the list
    while( p1 ){
        len++;
        p1 = p1.next;
    }

    // bottom-up merge sort
    while( step < len ){
        p1 = tempHead;
        p2 = p1.next;

        var pre1 = p1,
            pre2 = null;

        p1 = p1.next;
        /**
         * After initialization:
         * (tempHead|pre1)->(p1|p2)->....
         */

        // when list length is odd, p2 could be null
        // when list length is even, p1 could be null
        // these mostly happens in/after the last merge sort section
        while( p1 && p2 ){
            // move p2 to the start of the second half of current merge sort range
            for( var i = 0; i < step && p2; i++ ){
                pre2 = p2;
                p2 = p2.next;
            }

            /** After moving p2:
             * tempHead->....->(pre1)->(p1)->...(length = step - 1)...->(pre2)->(p2)->...(length = step)...->....
             */

            /** Standard merge sort BEGIN **/

            // At the begining of merge sort, each half has *step* nodes
            var remain1 = step,
                remain2 = step;

            // Since p2 is always ahead of p1, make sure it's not null before merge all the time
            while( remain1 && remain2 && p2 ){
                if( p1.val <= p2.val ){
                    pre1.next = p1;
                    p1 = p1.next;
                    pre1 = pre1.next;
                    remain1--;
                } else {
                    pre2.next = p2.next;
                    p2.next = pre1.next;
                    pre1.next = p2;
                    pre1 = pre1.next;
                    p2 = pre2.next;
                    remain2--;
                }
            }

            // merge remaining nodes to the merged sequence
            if( remain1 > 0 ){
                while (remain1 !== 0 && p1) {
                    pre1 = p1;
                    p1 = p1.next;
                    remain1--;
                }
                p2 = p1;
            } else if( remain2 > 0 ){
                while( remain2 !== 0 && p2 ){
                    pre2 = p2;
                    p2 = p2.next;
                    remain2--;
                }
                p1 = p2;
                pre1 = pre2;
            }
            /** Standard merge sort END **/
        }
        // double the length of each merge sort range
        step *= 2;
    }

    return tempHead.next;
}
