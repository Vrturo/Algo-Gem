# Write a method which increments a string, to create a new string.
# If the string already ends with a number, the number should be incremented by 1.
# If the string does not end with a number the number 1 should be appended to the new string.
# If the number has leading zeros the amount of digits should be considered.

# Examples:

# foo -> foo1
# foobar23 -> foobar24
# foo0042 -> foo0043
# foo9 -> foo10
# foo099 -> foo100

# def increment_string(input)
#   input.sub(/\d*$/) { |n| n.empty? ? 1 : n.succ } # succ method increments by one
# end

# def increment_string(input)
#   return "1" if input.empty?
#   input << "0" unless input[-1].match(/\d+/)

#   input.gsub(/\d+$/) { |n| n.next }
# end

# def increment_string(input)
#  if input.scan( /\d+$/ ).first == nil
#   num = 1
# else
#   num = input.scan( /\d+$/ ).first
#   num = num.next
# end
# input = "#{input.gsub(/ *\d+$/, '')}#{num}"
# end
