# "Suppose we could access yesterday's stock prices as an array, where:

# The indices are the time in minutes past trade opening time, which was 9:30am local time.
# The values are the price in dollars of Apple stock at that time.
# So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

# Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday."


array = [45, 2, 30, 19, 4, 40]

def get_max_profit(stock_prices_yesterday)

    # make sure we have at least 2 prices
    if stock_prices_yesterday.length < 2
        raise IndexError, 'Getting a profit requires at least 2 prices'
    end

    # greedily update min_price and max_profit, to initialize
    # them to the first price and the first possible profit
    min_price = stock_prices_yesterday[0]
    max_profit = stock_prices_yesterday[1] - stock_prices_yesterday[0]

    stock_prices_yesterday.each_with_index do |current_price, index|

        # skip the first time, since already used
        # when initialized min_price and max_profit
        if index == 0 then next end

        # see what profit would be if bought at the
        # min price and sold at the current price
        potential_profit = current_price - min_price

        # update max_profit if better
        max_profit = [max_profit, potential_profit].max

        # update min_price so it's always
        # the lowest price so far
        min_price  = [min_price, current_price].min
    end

    return max_profit
end

p get_max_profit(array)


#0(n)
