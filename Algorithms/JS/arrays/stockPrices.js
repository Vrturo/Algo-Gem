// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock),
// design an algorithm to find the maximum profit.

var maxProfit = function(prices) {
    if( prices.length < 2 ) return 0;
    var minPrice = prices[0],
        maxProfit = prices[1] - prices[0],
        potentialProfit;

    for(var i = 0; i < prices.length; i++){
        potentialProfit = prices[i] - minPrice
        maxProfit = maxProfit > potentialProfit ? maxProfit : potentialProfit
        minPrice = minPrice < prices[i] ? minPrice : prices[i]
    }
    return maxProfit;
};
