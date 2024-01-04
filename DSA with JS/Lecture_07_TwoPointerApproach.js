// Two Pointer Approach Interview Question

function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
}

const arr = [20, 40, 60, 80, 90, 120, 240];
const target_sum = 210;
const result = twoSum(arr, target_sum);
console.log('The pair is:', result);
