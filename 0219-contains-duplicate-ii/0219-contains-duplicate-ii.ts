function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const dict: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in dict && i - dict[num] <= k) {
      return true;
    }
    dict[num] = i;
  }

  return false;
}
