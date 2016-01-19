# Given an input string, determine whether any anagram of the string is a palindrome

# def is_palindrome(string)
#   counter = {}
#   odd_count = 0
#   string.each_char do |letter|
#     counter[letter] ? counter[letter] += 1 : counter[letter] = 1
#   end
#   counter.each do |k, v|
#     if v % 2 != 0
#       odd_count += 1
#     end
#   end
#   odd_count > 1 ? false : true
# end
