# Get Nth Leaf

# Let's say we have the following tree:

#           A
#       B        C
#     D E F    G   H
#             J K
# Our goal is to write a method get_nth_leaf that finds the nth leaf in the tree when performing an in-order depth-first traversal.

# get_nth_leaf(0) - D
# get_nth_leaf(3) - J
# get_nth_leaf(5) - H

class Node
  attr_accessor :value, :left, :right, :leaves

  def initialize( value )
    @value = value
    @left = nil
    @right = nil
  end

  def get_leaves
    result = []
    #next node = root.left

    if !left && !right
      return value
    elsif left && !right
      left.get_leaves
    elsif !left && right
      right.get_leaves
    else
      left_leaves = left.get_leaves
      right_leaves = right.get_leaves
      result << left_leaves
      result << right_leaves
    end

    result
  end

  def get_nth_leaf( index )
    get_leaves[index]
  end
end

root = Node.new('a')
root.left = Node.new('b')
root.right = Node.new('c')

p root.get_nth_leaf(0)
p root.get_nth_leaf(1)
#value

# root
# left child
# right child
