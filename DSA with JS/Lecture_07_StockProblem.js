// Best time to buy and sell the stocks

// function definition

function maxProfit(arr) {
  let profit = 0;
  let minPrice = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    } else {
      profit = Math.max(profit, arr[i] - minPrice);
    }
  }
  return profit;
}
// Driver code
const arr = [7, 4, 5, 3, 6, 16];
// function calling
const result = maxProfit(arr);
console.log('Maximum profit is:', result);
