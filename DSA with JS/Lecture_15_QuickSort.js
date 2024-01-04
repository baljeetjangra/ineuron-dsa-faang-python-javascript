// Method definition of partition

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, end);
  return i + 1;
}

function quickSort(arr, start, end) {
  if (start < end) {
    let pivot = partition(arr, start, end);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
  }
  return arr;
}

// Driver code
const arr = [50, 70, 29, 67, 12, 15, 46, 100, 26, 29];
const start = 0;
const end = arr.length - 1;
// function calling
const result = quickSort(arr, start, end);
console.log('Sorted array is:', result);
