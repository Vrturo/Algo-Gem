// How would you reverse a singly LL (no loop)?


function reversesll(sll){

  if(!sll.head || !sll.head.next) return sll; //check if empty

  var nodes=[],
    current = sll.head;
  //storing all the nodes in an array
  while(current){
    nodes.push(current);
    current = current.next;
  }

  var reversedLL = new LinkedList();

  reversedLL.head = nodes.pop();
  current = reversedLL.head;

  var node = nodes.pop();
  //make sure to make next of the newly inserted node to be null
  //other wise the last node of your SLL will retain its old next.
  while(node){
     node.next = null;
     current.next = node;

     current = current.next;
     node = nodes.pop();
  }
  return reversedLL;
}


function reverseList(head) {
    this.prev = null;
    this.curr = head;
    while (this.curr != null) {
        this.nextTemp = curr.next;
        curr.next = this.prev;
        this.prev = curr;
        curr = nextTemp;
    }
    return this.prev;
}
// ----------------------------------------

// 0(n) iterative
var reverseList = function(head) {
    this.prev = null;
    this.curr = head;
    while (this.curr !== null) {
        var nextTemp = curr.next;
        curr.next = this.prev;
        this.prev = this.curr;
        this.curr = nextTemp;
    }
    return prev;
};

// --------------------------------------------
// 0(n) recursive

var reverseList = function(head) {
    if (head === null || head.next === null)
      return head;
    var p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};
