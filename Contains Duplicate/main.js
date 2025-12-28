
//Optimal Approach Time Complexity: O(n) Space Complexity: O(n)

function containsDuplicate(nums) {
    const numSet = new Set();
    for(let num of nums) {
        if(numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
}

