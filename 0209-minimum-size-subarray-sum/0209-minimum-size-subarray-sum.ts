function minSubArrayLen(target: number, nums: number[]): number {
  let i = 0;
  let j = 0;
  let sum = 0;
  let min = Infinity;
  while (i < nums.length) {
    sum += nums[i];
    while (sum >= target) {
      min = Math.min(min, i - j + 1);
      sum -= nums[j];
      j++;
    }
    i++;
  }
  return min === Infinity ? 0 : min;
}