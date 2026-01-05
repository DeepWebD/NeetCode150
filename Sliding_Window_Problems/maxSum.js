// Find the Max subArray of fixed size k in array

let arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];

function maxSum(arr, k) {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    currentSum += arr[i];
    console.log("current Sum =",currentSum)
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, currentSum);
      console.log("First Item",arr[i-(k-1)])
      currentSum -= arr[i - (k - 1)];
    }
  }

  return maxSum;
}

console.log(maxSum(arr, 3));
