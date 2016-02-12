# How many different squares are there in a grid of NxN squares?
# For example, when N=2, the answer is 5: the 2x2 square itself, plus the four 1x1 squares in its corners
# You have to write a method

# def count_squares(n)
# that solves Feynman's question in general. The input to your function will always be a positive integer.

# Examples
# count_squares(1) =  1
# count_squares(2) =  5
# count_squares(3) = 14


def count_squares(n)
   (1..n).inject{|sum, e| sum+e*e}
end

def count_squares(n)
  n == 1 ? 1 : (n * n) + count_squares(n - 1);
end

def count_squares(n)
    (0..n).map { |x| x**2 }.reduce(:+)
end
