function twoSum_Sol1(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i]>=target) continue
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

function twoSum_Sol2(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const index = nums.indexOf(complement, i + 1);
        if(index !== -1) {
            return [i, index];
        }
    }
}

function twoSum(nums, target) {
    const numMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(numMap.has(complement)) {
            return [numMap.get(complement), i];
        }   
        numMap.set(nums[i], i);
    }
}