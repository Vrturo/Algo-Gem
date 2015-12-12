"Given an array_of_ints, find the highest_product you can get from three of the integers.
The input array_of_ints will always have at least three integers."


array = [2, 6, 4, -1, -5, 10]

  def highest_product_of_3(array_of_ints)
    if array_of_ints.length < 3
        raise Exception, 'Less than 3 items!'
    end

    # We're going to start at the 3rd item (at index 2)
    # so pre-populate highests and lowests based on the first 2 items.
    # The alternative is starting these as None and checking below if they're set
    # I think this is a little cleaner, but it's debatable.
    highest = [array_of_ints[0], array_of_ints[1]].max
    lowest =  [array_of_ints[0], array_of_ints[1]].min

    highest_product_of_2 = array_of_ints[0] * array_of_ints[1]
    lowest_product_of_2  = array_of_ints[0] * array_of_ints[1]

    # Except this one--we pre-populate it for the first /3/ items.
    # This means in our first pass it'll check against itself, which is fine.
    highest_product_of_three = array_of_ints[0] * array_of_ints[1] * array_of_ints[2]

    # walk through items, starting at index 2
    array_of_ints.each_with_index do |current, index|
        next if index < 2

        # do we have a new highest product of 3?
        # it's either the current highest,
        # or the current times the highest product of two
        # or the current times the lowest product of two
        highest_product_of_three = [
            highest_product_of_three,
            current * highest_product_of_2,
            current * lowest_product_of_2
        ].max

        # do we have a new highest product of two?
        highest_product_of_2 = [
            highest_product_of_2,
            current * highest,
            current * lowest
        ].max

        # do we have a new lowest product of two?
        lowest_product_of_2 = [
            lowest_product_of_2,
            current * highest,
            current * lowest
        ].min

        # do we have a new highest?
        highest = [highest, current].max

        # do we have a new lowest?
        lowest = [lowest, current].min
    end

    return highest_product_of_three
end


p highest_product_of_3(array)
