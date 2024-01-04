// Finding of the maxima and minima using Divide and Conquer Approach

// function definition

function maxAndMin(arr, start, end) {
  if (start == end) {
    return [arr[start], arr[start]];
  }
  if (start == end - 1) {
    if (arr[start] > arr[end]) {
      return [arr[start], arr[end]];
    } else {
      return [arr[end], arr[start]];
    }
  }
  let mid = Math.floor((start + end) / 2);
  let left = maxAndMin(arr, start, mid);
  let right = maxAndMin(arr, mid + 1, end);
  let max = Math.max(left[0], right[0]);
  let min = Math.min(left[1], right[1]);
  return [max, min];
}
// Driver code
const arr = [20, 39, 45, 65, 21, 44, 89, 92];
const start = 0;
const end = arr.length - 1;
// function calling
const result = maxAndMin(arr, start, end);
console.log('The maxima and minima are:', result);
