function jump(nums: number[]): number {
  let count = 0;
  let jump = 0;
  let max = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const next = nums[i] + i
    max = Math.max(max, next);
    
    if (i === jump) {
      jump = max;
      count++;
    }
  }

  return count;
}