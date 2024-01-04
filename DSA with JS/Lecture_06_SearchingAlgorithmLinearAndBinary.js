// Linear Search Algorithm
// function definition
// time complexity: O(n)
// space complexity: O(1)

function linearSearch(arr, x) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}
// Driver code
const arr = [20, 45, 27, 47, 55, 67, 75, 88, 90];
const x = 65;
// function calling
const result = linearSearch(arr, x);
console.log('Searching element is present at index:', result);

// Binary Search Algorithm using recursion
// function definition

function binarySearch(arr, x, start, end) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == x) {
    return true;
  } else if (arr[mid] > x) {
    return binarySearch(arr, x, start, mid - 1);
  } else {
    return binarySearch(arr, x, mid + 1, end);
  }
}
// Driver code

const arr1 = [20, 30, 40, 50, 60, 70, 80, 90];
const x1 = 80;
const i1 = 0;
const j1 = arr1.length - 1;
// function calling
const result1 = binarySearch(arr1, x1, i1, j1);
console.log('Searching element is present:', result1);

// Binary Search Algorithm without using recursion(iterative)
// function definition

function binarySearch2(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) {
      return true;
    } else if (arr[mid] > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
// Driver code
const arr2 = [20, 30, 40, 50, 60, 70, 80, 90];
const x2 = 20;
const i2 = 0;
const j2 = arr2.length - 1;

// function calling
const result2 = binarySearch2(arr2, x2, i2, j2);
console.log('Searching element is present:', result2);
