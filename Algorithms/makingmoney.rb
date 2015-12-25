# Write a function that, given:
#1. an amount of money
#2. an array of coin denominations
# computes the number of ways to make amount of money with coins of the available denominations.

# Example:
# 4 cents is equal to:
# 1¢, 1¢, 1¢, 1¢
# 1¢, 1¢, 2¢
# 1¢, 3¢
# 2¢, 2¢

# for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢),
# your program would output 44—the number of ways to make 44¢ with those denominations:

def change_possibilities_bottom_up(amount, denominations)
    ways_of_doing_n_cents = [0] * (amount + 1)
    ways_of_doing_n_cents[0] = 1

    denominations.each do |coin|
        (coin..amount).each do |higher_amount|
            higher_amount_remainder = higher_amount - coin
            ways_of_doing_n_cents[higher_amount] += ways_of_doing_n_cents[higher_amount_remainder]
        end
    end

    return ways_of_doing_n_cents[amount]
end


#Complexity
# O(n∗m) time and O(n)O(n) additional space
# where nn is the amount of money and mm is the number of potential denominations.
