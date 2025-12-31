function threeSum(nums){
 nums.sort((a, b) => a - b); // Step 1: sort
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate anchors
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate lefts
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicate rights
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;  // need a larger sum
      } else {
        right--; // need a smaller sum
      }
    }
  }

  return result;
}