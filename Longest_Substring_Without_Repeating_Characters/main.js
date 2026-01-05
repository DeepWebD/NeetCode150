const s = "ab";
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  if(s.length===1) return 1;
  let charSet= new Set();
  let left=0;
  let right=0;
  let ans=0;
  while(right<s.length){
    let c= s[right];
    while(charSet.has(c)){
      charSet.delete(s[left]);
      left++
    }
    setInterval.add(c);
    ans=Math.max(ans,right-left+1);
    right++;

  }
  return ans
};

console.log(lengthOfLongestSubstring(s));
