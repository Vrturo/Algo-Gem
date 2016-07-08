// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var mergeTwoLists = function(l1, l2) {
    // simple error check
    if ( l1 === null && l2 === null ) {
        return null;
    }

    // a flag for if mergeHead has a value
    // mergeHead and mergEnd (which we will actively add to)
    var firstTime = true;
    var mergeHead = new ListNode();
    mergeEnd = mergeHead;

    // if both
    // pick the smaller one, and advance its pointer
    while ( l1 && l2 ) {
        if ( firstTime ) { // first time only
            firstTime = false;
            if ( l1.val < l2.val ) {
                mergeHead.val = l1.val;
                l1 = l1.next;
            } else {
                mergeHead.val = l2.val;
                l2 = l2.next;
            }
        }

        else {
            if ( l1.val < l2.val ) {
                mergeEnd.next = new ListNode( l1.val );
                mergeEnd = mergeEnd.next;
                l1 = l1.next;
            } else {
                mergeEnd.next = new ListNode( l2.val );
                mergeEnd = mergeEnd.next;
                l2 = l2.next;
            }
        }
    }

    // if only one, use it all the time
    // keep in mind that we may end up directly here
    // if the other starting head node is null, so we have to check firsTime again
    while ( l1 ) {
        if ( firstTime ) {
            firstTime = false;
            mergeHead.val = l1.val;
            l1 = l1.next;
            continue;
        }

        mergeEnd.next = new ListNode( l1.val );
        mergeEnd = mergeEnd.next;
        l1 = l1.next;
    }

    while ( l2 ) {
        if ( firstTime ) {
            firstTime = false;
            mergeHead.val = l2.val;
            l2 = l2.next;
            continue;
        }

        mergeEnd.next = new ListNode( l2.val );
        mergeEnd = mergeEnd.next;
        l2 = l2.next;
    }

    return mergeHead;
};
