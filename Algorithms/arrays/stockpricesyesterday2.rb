# "Suppose we could access yesterday's stock prices as an array, where:

# The indices are the time in minutes past trade opening time, which was 9:30am local time.
# The values are the price in dollars of Apple stock at that time.
# So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

# Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday."


array = [45, 2, 30, 19, 4, 40]


def max_profit(stock_prices_yesterday)
  min_price = stock_prices_yesterday[0]

  max_profit = stock_prices_yesterday[1] - stock_prices_yesterday[0]

  for item in stock_prices_yesterday
    potential_profit = item - min_price

    max_profit = max_profit > potential_profit ? max_profit : potential_profit

    min_price = min_price < item ? min_price : item
  end

  return max_profit
end

p max_profit(array)


#0(n)
