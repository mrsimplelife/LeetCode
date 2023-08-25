function jump(nums: number[]): number {
    let count = 0;
    let index = 0;
    let last = nums.length - 1
    while(index < last){
        count += 1
        let far = index + nums[index];
        let max = 0;
        let nextIndex = far;
        while(far > index){
            const candidate = nums[far] + far
            if(max < candidate){
                nextIndex = far
                max = candidate
            }
            if(nextIndex >= last){
                return count
            }
            far -= 1
        }
        index = nextIndex
    }
    return count
};