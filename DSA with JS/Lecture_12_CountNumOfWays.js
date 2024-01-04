// Count of Number of Ways.

function possibleWays(n) {
  if (n < 0) return 0;
  if (n == 0 || n == 1) return 1;
  if (n == 2) return 2;

  return possibleWays(n - 1) + possibleWays(n - 2);
}

// Driver code
const n = 8;
// function calling
const result = possibleWays(n);
console.log('Number of ways are:', result);
