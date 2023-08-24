function maxProfit(prices: number[]): number {
  let min = Infinity
  let profit = 0;
  for(let i = 0; i < prices.length; i++){
    const today = prices[i]
    const nextDaty =  prices[i + 1]
    min = Math.min(min, today)
    if(!nextDaty || today > nextDaty){
      profit += today - min
      min = Infinity
    }
  }
  return profit
};