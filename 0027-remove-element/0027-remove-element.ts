function removeElement(nums: number[], val: number): number {
    let i = 0
    let j = nums.length - 1;
    while (i <= j) {
        if (nums[i] !== val) {
            i++;
        } else {
            nums[i] = nums[j];
            j--;
        }
    }
    return i
};