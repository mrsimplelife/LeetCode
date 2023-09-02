function findPeakElement(nums: number[]): number {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const mid = Math.floor((i + j) / 2);

    if (nums[mid] > nums[mid + 1]) {
      j = mid;
    } else {
      i = mid + 1;
    }
    console.log(i, j);
  }

  return i;
}
