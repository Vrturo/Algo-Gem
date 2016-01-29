# You must create a digital root method.

# A digital root is the recursive sum of all the digits in a number.
# Given n, take the sum of the digits of n. If that value has two digits,
# continue reducing in this way until a single-digit number is produced.
# This is only applicable to the natural numbers.
# Here's how it works:

# digital_root(16)
# => 1 + 6
# => 7

# digital_root(942)
# => 9 + 4 + 2
# => 15 ...
# => 1 + 5
# => 6

# digital_root(132189)
# => 1 + 3 + 2 + 1 + 8 + 9
# => 24 ...
# => 2 + 4
# => 6

# digital_root(493193)
# => 4 + 9 + 3 + 1 + 9 + 3
# => 29 ...
# => 2 + 9
# => 11 ...
# => 1 + 1
# => 2

def digital_root(n)
   until n.to_s.split('').count == 1 do
     n = n.to_s.split('').map(&:to_i).reduce(:+)
   end
   return n
end
