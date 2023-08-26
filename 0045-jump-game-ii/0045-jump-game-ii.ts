function jump(nums: number[]): number {
  let count = 0;
  let i = 0;
  while (i < nums.length - 1) {
    let next = nums[i] + i;
    let max = next;
    let j = next;
    if (next >= nums.length - 1) {
      return count + 1;
    }
    while (j > i) {
      if (max < nums[j] + j) {
        max = nums[j] + j;
        next = j;
      }
      j -= 1;
    }
    i = next;
    count += 1;
  }
  return count;
}