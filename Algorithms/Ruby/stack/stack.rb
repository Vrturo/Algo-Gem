# Stack Attributes
#   Storage
#     Typically linked list or array
#   Methods
#     Push - add element to top of the stack
#       Constant Time complexity => 0(1) because we know it is the last element
#     Pop - remove and return last element from the stack
#       Constant Time complexity => 0(1) because we know it is the last element
#     Peek (optional) - returns last element but does not remove
#       Constant Time complexity => 0(1) because we know it is the last element

# Advantages to using a Stack
#   Great for enforcing LIFO(Last In First Out) restriction
#   Able to dynamically expand and contract
#     (with the use of linked list)

# Disadvantages to using a Stack
#   Restricted access to values
#     In order to access anything but last element in the stack you have to pop off all other elements
#     Obsolete in more modern languages
#       Ruby/Javascript Array
#       Python List

# Example Uses of Stack
#   Undo/Redo feature
#   Back button on browser
#   Evaluate Expressions
#     why its used for balanced parens
#   Syntax Parsing

# When shoudl I use a stack?
#   When only the last item in the list is needed
#   When only adding items to the end is needed
#   Maintain state and reverse state of something

class Stack
 def initialize
    @store = Array.new
  end

  def pop
    @store.pop
  end

  def push(element)
    @store.push(element)
    self
  end

  def size
    @store.size
  end
end
