array =   [1, 7, 3, 4]
result = [84, 12, 28, 21]


def get_products_of_all_ints_except_at_index(int_array)
  products_of_all_ints_except_at_index = [1] * int_array.length
  # [1, 1, 1, 1]


  product = 1
  i = 0
  while i < int_array.length
    # p "index is %d, product is %d" % [i, product]
     products_of_all_ints_except_at_index[i] = product
     product *= int_array[i]
     i += 1
  end
  # p products_of_all_ints_except_at_index



  product = 1
  i = int_array.length - 1
  while i >= 0
    p "index is %d, product is %d" % [i, product]
     products_of_all_ints_except_at_index[i] *= product
     product *= int_array[i]
     i -= 1
  end

  products_of_all_ints_except_at_index
  # [84, 12, 28, 21]
end



# p get_products_of_all_ints_except_at_index(array) == result
def round_two(int_array)
  length = int_array.length
  product_place_holder = Array.new(length, 1)

  product = 1
  length.times do |i|
    product_place_holder[i] *= product
    product *= int_array[i]
  end

  product = 1
  length.times do |i|
    product_place_holder[-(i+1)] *= product
    product *= int_array[-(i+1)]
  end

  return product_place_holder
end

p get_products_of_all_ints_except_at_index(array) == round_two(array)
