# Count the number of Duplicates

# Write a method that will return the count of distinct case-insensitive alphabetic characters
# that occur more than once in the given string.
# The given string can be assumed to contain only uppercase and lowercase alphabets.

# Example

# "abcde" -> 0 # no characters repeats more than once
# "aabbcde" -> 2 # 'a' and 'b'
# "aabbcdeB" -> 2 # 'a' and 'b'
# "indivisibility" -> 1 # 'i'
# "Indivisibilities" -> 2 # 'i' and 's'


# def duplicate_count(text)
#   ('a'..'z').count { |c| text.downcase.count(c) > 1 }
# end

# def duplicate_count(text)
#   hsh = Hash.new(0)
#   text.downcase.chars.each { |c| hsh[c] += 1 }
#   hsh.values.count { |k| k > 1 }
# end

# def duplicate_count(text)
#     text.downcase!
#     counter = {}
#     text.each_char do |letter|
#       counter[letter] ? counter[letter] += 1 : counter[letter] = 1
#     end
#     dup_count = 0
#     counter.each do |k, v|
#       if v > 1
#         dup_count += 1
#       end
#     end
#     dup_count
# end
