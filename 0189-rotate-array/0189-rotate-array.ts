function rotate(nums: number[], k: number): void {
    const array = Array(nums.length).fill(0)
    const length = nums.length
    const count =  length - k % length;
    for(let i = 0; i < length; i++){
        array[(length - count + i) % length] = nums[i]
    }
    for(let i = 0; i < length; i++){
        nums[i] = array[i]
    }
};