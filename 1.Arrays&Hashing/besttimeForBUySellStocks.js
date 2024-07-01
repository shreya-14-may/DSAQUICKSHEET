//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/


var maxProfit = function(prices) {
    //kadane's algo

    let profit =0;
    let buyingPrice = prices[0];
    let n = prices.length;

    for(let i=0; i<n; i++){
        if(prices[i] < buyingPrice){
            buyingPrice = prices[i]
        }
        if(prices[i]- buyingPrice > profit){
            profit = prices[i] - buyingPrice
        }
    }

    return profit;
};
