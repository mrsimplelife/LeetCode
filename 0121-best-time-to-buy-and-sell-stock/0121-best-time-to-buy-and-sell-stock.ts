function maxProfit(prices: number[]): number {
    let min = Infinity
    let maxProfit = 0
    for(let i = 0; i < prices.length; i++){
        min = Math.min(min, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - min)
    }
    return maxProfit
};