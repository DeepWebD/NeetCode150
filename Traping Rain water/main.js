const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
function trap(height) {
  const n = height.length;
  if (n === 0) return 0;

  const leftMax = new Array(n);
  const rightMax = new Array(n);
  console.log("Left Max at Start -->",leftMax)
  console.log("Right Max at Start -->",rightMax)
  
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  console.log("Left Max at end -->",leftMax)
  console.log("Right Max at end -->",rightMax)

  let trapped = 0;
  for (let i = 0; i < n; i++) {
    trapped += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return trapped;
}

//https://youtu.be/T0u5nwSA0w0?t=11745

console.log(trap(height))

// Revisit this solution

const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
function trap1(height) {
  let first = 0;
  let trapedWater = 0;
  let w = 1;

  for (let second = 1; i < height.length; second++) {
    let depth = height[first] - height[second];
    if (depth < 0) {
      first = second;
    } else {
      let volumn = depth * w * 1;
      trapedWater += volumn;
    }
  }
  return trapedWater;
}

// console.log(trap(height))


