function search(nums: number[], target: number): number {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (nums[m] === target) {
      return m;
    }
    if (nums[i] <= nums[m]) {
      if (nums[i] <= target && target <= nums[m]) {
        j = m - 1;
      } else {
        i = m + 1;
      }
    } else {
      if (nums[m] <= target && target <= nums[j]) {
        i = m + 1;
      } else {
        j = m - 1;
      }
    }
  }

  return -1;
}
