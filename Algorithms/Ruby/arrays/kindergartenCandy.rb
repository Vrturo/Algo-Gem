# There are N children standing in a line. Each child is assigned a rating value.

# You are giving candies to these children subjected to the following requirements:

# Each child must have at least one candy.
# Children with a higher rating get more candies than their neighbors.
# What is the minimum candies you must give?


def distributeCandy( ratings)
    if (ratings == nil || ratings.length == 0)
        return 0
    end

    candies = Array.new(ratings.length, 1)

    for i in 0...ratings.length
        if ratings[i] > ratings[i - 1]
            candies[i] = candies[i - 1] += 1
        else
            candies[i] = 1
        end
    end


    result = candies[ratings.length - 1]

    (ratings.length-2).downto(0) do |j|
        current = 1
        if ratings[j] > ratings[j + 1]
            current = candies[j + 1] + 1
        elsif (ratings[j] == ratings[j + 1] && candies[j] < candies[j + 1])
            current = candies[j+1]
        end
        candies[j] = [current, candies[j]].max
        result += candies[j]
     end
    return result
end
