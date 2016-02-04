Queue
  A linear data structure that adds and removes elements using a FIFO(first in first out) rule

  Attributes
    Storage
      Typically Linked List or Array
      What if array is usedor large queues?
        LinkedList is preffered for large queues.
          Time Complexity of LL is Constant and Array is linear
    Methods
      enqueue - add element to the queue
      dequeue - remove & return first element from the queue
      peek (optional) - return the first element but does not remove

  Time Complexity
    Enqueue
      Constant => 0(1)
    Dequeue
      if LL Constant => 0(1)
      if Array Linear => 0(n)
    Peek
      Constant => 0(1)



class Queue
  def initialize
    @store = Array.new
  end

  def dequeue
    @store.pop
  end

  def enqueue(element)
    @store.unshift(element)
    self
  end

  def size
    @store.size
  end
end
