
//Time Complexity: O(n log n) Space Complexity: O(1)
function findDuplicate(nums) {
    const sortedNums = nums.slice().sort((a, b) => a - b);

    for(let i = 1; i < sortedNums.length; i++) {
        if(sortedNums[i] === sortedNums[i - 1]) {
            return true;
        }   
    }
    return false;
}