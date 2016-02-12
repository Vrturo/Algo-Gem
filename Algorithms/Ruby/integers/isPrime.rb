# Define a function isPrime that takes one integer argument and
# returns true or false depending on if the integer is a prime.
# A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

# Example
# isPrime(5)
# => true

def isPrime(num)
  return false if num <= 1
  Math.sqrt(num).to_i.downto(2).each {|i| return false if num % i == 0}
  true
end


require 'prime'

def isPrime(num)
  num.prime?
end


def isPrime(num)
  return false if num <= 1
  return true if num < 4
  (2...num).each do |i|
     return false if num % i == 0
   end
  true
end

def isPrime(num)
  return false if num < 2
  return true if num == 2

  (2..(num-1)).none? { |i| num % i == 0 }
end
