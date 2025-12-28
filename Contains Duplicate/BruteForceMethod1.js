function containsDuplicate(nums) {
//Brute Force Approach Tieme Complexity: O(n^2) Space Complexity: O(1)
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
                return true;
            }
        }   
    }
    return false;
}