Reverse a string without the reverse method

def reverse_string(string)
  new_string = []
  last_index = string.length - 1
  last_index.downto(0) { |i| new_string << string[i] }
  p new_string.join('')
end

def reverse_string(string)
  start = 0
  finish = string.length-1
  while start < finish
    temp = string[start] #
    string[start] = string[finish] # ex 'hello' #oello
    string[finish] = temp #temp stores string start so its available when replaced
    start += 1 # ex 'hello' #oello, olllo
    finish -= 1
  end
  return string
end
