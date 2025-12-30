function LongestConsecutive_Sol1(nums) {
    if (nums.length === 0) return 0;
let maxLength = 1;

for (let i = 0; i < nums.length; i++) {
    let currentLength = 1;
    let currentNum = nums[i];
    
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === currentNum + 1) {
            currentLength++;
            currentNum++;
            j = -1; // restart inner loop
        }
    }
    
    maxLength = Math.max(maxLength, currentLength);
}

return maxLength;
}

var longestConsecutive_Sol2 = function(nums) {
    let len=nums.length;
    if(len==0) return 0
    let sortedNums=nums.sort((a,b)=>a-b)

   let LS=1;
   let CS=1
   for(let i=0;i<len;i++){
    if(sortedNums[i]===sortedNums[i+1]) continue;
    if(sortedNums[i]+1==sortedNums[i+1]){
           CS++;
    }else{
        LS=Math.max(LS,CS);
        CS=1
    }
   }
   return LS
};

var longestConsecutive = function(nums) {
      if (nums.length === 0) return 0;
    const numSet = new Set(nums);
    let maxLen = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) { // only start at sequence beginnings
            let current = num;
            let length = 1;
            while (numSet.has(current + 1)) {
                current++;
                length++;
            }
            maxLen = Math.max(maxLen, length);
        }
    }

    return maxLen;
};