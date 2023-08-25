function removeElement(nums: number[], val: number): number {
    let n = 0;
    for(const num of nums){
        if (num !== val){
            nums[n] = num
            n += 1
        }
    }
    return n
};