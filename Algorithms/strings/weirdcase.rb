# Write a method weirdcase that accepts a string, and returns the same string with all even indexed characters
# in each word upper cased, and all odd indexed characters in each word lower cased.
# The indexing just explained is zero based, so the zero-ith index is even,
# therefore that character should be upper cased.
# The passed in string will only consist of alphabetical characters and spaces(' ').
# Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

# Examples:
# weirdcase( "String" )#=> returns "StRiNg"
# weirdcase( "Weird string case" );#=> returns "WeIrD StRiNg CaSe"

# def weirdcase(string)
#   string.split(' ').map do |word|
#     word.split('').each_with_index.map do |char, i|
#       i % 2 == 0 ? char.upcase : char.downcase
#     end.join('')
#   end.join(' ')
# end


# def weirdcase string
#   #TODO
#   output = ""
#   i = 0
#   string.each_char { |c|
#     if c != ' '
#       output += i % 2 == 0 ? c.upcase : c.downcase
#       i += 1
#     else
#       output += c
#       i = 0
#     end
#   }
#   output
# end


# def weirdcase string
#   string.gsub(/(\w{1,2})/) { |s| $1.capitalize }
# end

