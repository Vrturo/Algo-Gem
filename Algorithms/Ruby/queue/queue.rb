# Queue
#   A linear data structure that adds and removes elements using a FIFO(first in first out) rule

#   Attributes
#     Storage
#       Typically Linked List or Array
#       What if array is usedor large queues?
#         LinkedList is preffered for large queues.
#           Time Complexity of LL is Constant and Array is linear
#     Methods
#       enqueue - add element to the queue
#       dequeue - remove & return first element from the queue
#       peek (optional) - return the first element but does not remove

#   Time Complexity
#     Enqueue
#       Constant => 0(1)
#     Dequeue
#       if LL Constant => 0(1)
#       if Array Linear => 0(n)
#     Peek
#       Constant => 0(1)

#   Advantages to using a Queue
#     Great for enforcing FIFO(First In First Out) restriction
#     Able to dynamically expand and contract
#       (with the use of linked list)

#   Disadvantages to using a Queue
#     Restricted access to values
#       In order to access anything but first element in the stack you have to pop off all other elements
#     Obsolete in more modern languages
#       Ruby/Javascript Array
#       Python List

#   Example Uses of Queue
#     Shared resourceamong multiple users
#       CPU scheduling
#     Handle asynchronous operations
#       I/O buffers

#   When should I use a Queue?
#     When only the first item in the list is needed
#     When only adding items to the end of your list is needed
#     Keeping things in order
#       async processes
#     Maintain state and reverse state of something



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
