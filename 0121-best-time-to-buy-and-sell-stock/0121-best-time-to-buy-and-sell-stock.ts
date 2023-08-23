function maxProfit(prices: number[]): number {
    let min = Infinity;
    let profit = 0;
    for (let i = 0; i < prices.length; i++){
        profit = Math.max(prices[i] - min,profit)
        min = Math.min(min,prices[i])
    }
    return profit
};