# Write a method to test whether a given input is a valid email address.
# Here is what makes a valid email:

# At least one letter character at the beginning
# All characters between the first character and the @ (if any) must be letters, numbers, or underscores
# There must be an @ character (after the points listed just now)
# After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen
# The email must end with at least one set of a dot followed by one or more word characters.
# The input must NOT be case-sensitive
# The function should return true or false.


----------two method solution------------------

# Using regex for email validatiom is BAD™ as you'll end up with many false positives/negatives.
# Trying to do email validation yourself is like doing crypto yourself. Leave it to the experts.
# Here's a great service: http://blog.mailgun.com/free-email-validation-api-for-web-forms/

# def validate(input)
#   !(input =~ regex).nil?
# end

# private

# def regex
#   @regex ||= /^[a-zA-Z]\w*@(\w|-)+(\.\w+)+$/
# end
# -----------------------------------------------

# def validate(input)
#   input.match(/[A-Za-z]\w*@[\w-]+(\.\w+)+/).to_s.length == input.length
# end


# def validate(input)
#   input.downcase.match(/^[a-z]\w*@[\w-]+\.[.\w]+$/) != nil
# end


# def validate(input)
#   input.downcase!
#   return false unless input.chars.any? { |x| x == '@' }

#   email = input.split('@')

#   name = email[0]
#   address = email.last

#   return false if name.empty?
#   return false unless name.chars.first.match(/^[a-z]$/)
#   return false unless name.chars.all? { |x| x.match(/^[a-z0-9_]$/) }

#   return false unless address.chars.any? { |x| x == '.' }

#   domain = address.split('.')
#   suffix = domain.last
#   domain.pop
#   domain = domain.join

#   return false if domain.empty?
#   return false unless domain.chars.all? { |x| x.match(/^[a-z0-9_\-\.]$/) }

#   return false if suffix.empty?
#   return false unless suffix.chars.all? { |x| x.match(/^[a-z0-9_]$/) }

#   true
# end
