function searchInsert(nums: number[], target: number): number {
    let i = 0;
    let j = nums.length - 1
    while(i <= j) {
        const m = Math.floor((i + j) / 2);
        if(nums[m] === target){
            return m
        } else if(nums[m] < target){
            i = m + 1
        } else {
            j = m - 1
        }
    }
    return i
};