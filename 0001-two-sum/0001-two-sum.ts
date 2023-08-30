function twoSum(nums: number[], target: number): number[] {
  const dict: Record<string, number> = {};

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const diff = target - num;
    if (diff in dict) {
      return [dict[diff], index];
    }
    dict[num] = index;
  }

  return [];
}