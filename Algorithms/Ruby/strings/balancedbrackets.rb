# Given a string which may include opening or closing round brackets,
# can you tell whether the string contains a balanced pair(s) of round brackets,
# that is there are no brackets which are either opened & not closed,
# or vice versa. Opening round brackets always have to come before closing bracket.
# An empty string is balanced.

# example

# "hi)(" => false
# "hi(hi)" => true
# "(" => false

# def isBalanced(string)
#   stacks = 0
#   string.chars.each do |chr|
#     stacks += 1 if chr == "("
#     if chr == ")"
#       return false if stacks < 1
#       stacks -= 1
#      end
#   end
#   return stacks == 0
# end

# def isBalanced(string)
#   open = 0
#   string.each_char do |c|
#     c == '(' and open += 1
#     c == ')' and open -= 1
#     open < 0 and return false
#   end
#   return open == 0
# end


# def isBalanced(s)
#   l, r = 0, 0

#   s.each_char do |c|
#     if c == '('
#       l += 1
#     elsif c == ')'
#       return false if r >= l
#       r += 1
#     end
#   end

#   l == r
# end
