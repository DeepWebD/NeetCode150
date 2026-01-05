const prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - buy);
    }
  }

  return profit;
}

console.log(maxProfit(prices));
