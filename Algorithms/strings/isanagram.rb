# The challenge is to write the function isAnagram to return True if
# the word test is an anagram of the word original and False if not.

# Note: Anagrams are case insensitive, ignore all non-alphanumeric characters,
# input will always be two strings. Also: two identical words may be considered to be an
# edge case of an anagram, but for this kata they are still correct anagrams.

# Description:
# "Any word or phrase that exactly reproduces the letters in another order is an anagram." (Wikipedia).
# Add numbers to this definition to be more interest.

# Examples of anagrams:

# William Shakespeare = I am a weakish speller
# silent = listen
# 12345 = 54321

# ------------ two method solution ---------------
# def isAnagram(test, original)
#   reduce(test) == reduce(original)
# end

# def reduce(string)
#   string.downcase.gsub(/\W+/, "").split("").sort
# end
# ------------------------------------------------

# def isAnagram(test, original)
#   f = ->(x) { x.downcase.delete("^a-z0-9").chars.sort }
#   f[test] == f[original]
# end

# def isAnagram(test, original)
#   t = test.downcase.gsub /\W/, ""
#   o = original.downcase.gsub /\W/, ""
#   return false unless t.length == o.length
#   char_occurance = Hash.new(0)
#   t.each_char {|char| char_occurance[char.to_sym]+=1}
#   o.each_char {|char| char_occurance[char.to_sym]-=1}
#   char_occurance.all? {|char, occurance| occurance.zero?}
# end

# ef isAnagram(test, original)
#   t1 = test.upcase.scan(/\w/).sort
#   t2 = original.upcase.scan(/\w/).sort
#   return t1 == t2
# end

# def isAnagram(test, original)
#   test.downcase.gsub(/[^0-9a-z ]/i, "").gsub(" ", "").split(//).sort == original.downcase.gsub(/[^0-9a-z ]/i, "").gsub(" ", "").split(//).sort
# end
