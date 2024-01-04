// Boyer-Moore Voting Algorithm - Majority Elements

function majorityElement(arr) {
  let count = 0;
  let candidate = null;
  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      candidate = arr[i];
    }
    if (candidate == arr[i]) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}

function isMajority(arr, candidate) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == candidate) {
      count++;
    }
  }
  if (count > arr.length / 2) {
    return true;
  } else {
    return false;
  }
}

// Driver code
const arr = [3, 2, 3, 4, 3];

// function calling
const candidate = majorityElement(arr);
const result = isMajority(arr, candidate);

if (result) {
  console.log('Majority element is:', candidate);
} else {
  console.log('No majority element');
}
