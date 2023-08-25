function removeDuplicates(nums: number[]): number {
    let index = 0;
    for(let i = 0; i < nums.length ; i++){
        if(nums[i] !== nums[index]){
            nums[index] = nums[i]
        }
        if(nums[index] !== nums[index - 2]){
            index += 1
        }
    }
    return index
};