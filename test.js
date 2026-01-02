const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
function trap(height) {
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

console.log(trap(height))
