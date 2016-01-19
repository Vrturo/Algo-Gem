def reverse_string(string)
  new_string = []
  last_index = string.length - 1
  last_index.downto(0) { |i| new_string << string[i] }
  p new_string.join('')
end
