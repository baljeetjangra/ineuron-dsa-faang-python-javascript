// Implementation of Merge Sort
// function definition of merge Procedure
// n1+n2 = N
// MergeProcedure time complexity = O(N)

function mergeProcedure(arr, start, mid, end) {
  let n1 = mid - start + 1;
  let n2 = end - mid;
  let left = [];
  let right = [];
  for (let i = 0; i < n1; i++) {
    left[i] = arr[start + i];
  }
  for (let j = 0; j < n2; j++) {
    right[j] = arr[mid + 1 + j];
  }
  let i = 0;
  let j = 0;
  let k = start;
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

// MergeSort function definition
// MergeSort time complexity = O(NlogN)

function mergeSort(arr, start, end) {
  if (start < end) {
    // Divide
    let mid = start + Math.floor((end - start) / 2);
    // Conquer
    // Recursive call for left subtree
    mergeSort(arr, start, mid);
    // Recursive call for right subtree
    mergeSort(arr, mid + 1, end);
    // Combine --> Merge Procedure
    mergeProcedure(arr, start, mid, end);
  }
  return arr;
}

// Driver code
const arr = [50, 70, 65, 13, 80, 62, 98, 27];
const start = 0;
const end = arr.length - 1;
// function calling
const result = mergeSort(arr, start, end);
console.log('The sorted array is:', result);
