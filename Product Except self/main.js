// var productExceptSelf = function(nums) {
//     let answer=[];
//     for(let i=0;i<nums.length;i++){
//         let mult=1;
//         for(let j=0;j<nums.length;j++){
//             if(i!==j) mult=mult*nums[j]
//         }
//         console.log(mult)
//         answer.push(mult)
//     }
//     return answer;
// };

// console.log(productExceptSelf([1,2,3,4]));

var productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(1);
    let left = 1;
    console.log("ans before iteration: ",ans)
    for (let i = 0; i < n; i++) {
        ans[i] = left;
        left *= nums[i];
    }
    console.log("ans after left pass: ",ans)
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= right;
        right *= nums[i];
    }

    return ans;
};

console.log(productExceptSelf([1,2,3,4]));