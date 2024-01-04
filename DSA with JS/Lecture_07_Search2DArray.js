// Search in 2D array

// function definition

function search2DArray(arr, x) {
  // number of rows
  let m = arr.length;
  if (m == 0) {
    return false;
  }
  // number of columns
  let n = arr[0].length;

  let left = 0;
  let right = m * n - 1;

  // binary search
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let midElement = arr[Math.floor(mid / n)][mid % n];
    if (midElement === x) {
      return true;
    } else if (midElement < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
// Driver code
const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const x = 70;
// function calling
const result = search2DArray(arr, x);
console.log('Searching element is present:', result);
