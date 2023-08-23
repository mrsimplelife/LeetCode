function removeDuplicates(nums: number[]): number {
    const array = [];
    
    for(let i = 0; i < nums.length; i++){
        const el = nums[i]
        const last = array[array.length - 1]
        const lastBefore = array[array.length - 2]
        if(i === 0){
            array.push(el);
        } else if (el > last){
            array.push(el);
        } else if(el === last && (el > lastBefore || lastBefore === undefined)){
            array.push(el);
        }
    }

    for(let i = 0; i < array.length; i++){
        nums[i] = array[i]
    }

    return array.length;
};