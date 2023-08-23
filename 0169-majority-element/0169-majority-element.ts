

function majorityElement(nums: number[]): number {
    const dict : Record<number,number> = {} 
    for(let i = 0; i < nums.length; i++){
        const el = nums[i];
        if (!dict[el]) {
            dict[el] = 1
        } else {
            dict[el] += 1
        }
    }
    return parseInt(Object.entries(dict).sort((a,b) => b[1] - a[1])[0][0])
}