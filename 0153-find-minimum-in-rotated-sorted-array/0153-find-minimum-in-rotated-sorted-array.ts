function findMin(nums: number[]): number {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const m = Math.floor((i + j) / 2);
    if (nums[m] > nums[j]) {
      i = m + 1;
    } else {
      j = m;
    }
  }
  return nums[i];
}