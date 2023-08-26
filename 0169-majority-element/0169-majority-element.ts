function majorityElement(nums: number[]): number {
    let m: number
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(count === 0){
            m = nums[i]
        } 
        if(nums[i] !== m){
            count -= 1;
        } else {
            count += 1;
        }
    }
    return m
}