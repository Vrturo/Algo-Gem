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

# def is_palindrome(string)
#     frequency_hash = {}
#     string_array = string.split("")
#     string_array.each do |letter|
#         if frequency_hash.has_key?(letter)
#             frequency_hash[letter] += 1
#         else
#             frequency_hash[letter] = 1
#         end
#     end
#     count = 0
#     frequency_hash.each_key do |k|
#         if frequency_hash[k] % 2 != 0
#             count += 1
#         end
#     end
#     if count <= 1
#         return true
#     else
#         return false
#     end
# end
