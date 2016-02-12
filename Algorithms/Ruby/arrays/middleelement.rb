# Create a method that when provided with a triplet,
# returns the index of the numerical element that lies between the other two elements.
# The input to the method will be an array of three distinct numbers (Haskell: a tuple).

# For example:

# gimme([2, 3, 1]) => 0
# 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

# gimme([5, 10, 14]) => 1
# 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

# def gimme(input)
#   input.index(input.sort[1])
# end

# def gimme(input_array)
#   mid_var = input_array.sort[1]
#   input_array[mid_var]
# end

# def gimme(arr)
#   arr.each { |num| return arr.index(num) if num < arr.max && num > arr.min }
# end

# def gimme(a)
#   return 0 if a[1] <= a[0] && a[0] <= a[2]
#   return 0 if a[2] <= a[0] && a[0] <= a[1]
#   return 1 if a[0] <= a[1] && a[1] <= a[2]
#   return 1 if a[2] <= a[1] && a[1] <= a[0]
#   return 1 if a[2] <= a[1] && a[1] <= a[0]
#   2
# end
