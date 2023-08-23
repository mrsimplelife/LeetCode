function removeDuplicates(nums: number[]): number {
  
  const array = []
  for(let i = 0; i < nums.length; i++){
    const el = nums[i]
    if(i === 0){
      array.push(el)
    }
    if (el > array[array.length - 1]){
      array.push(el)
    }
  }
  for(let i = 0; i < array.length; i++){
    nums[i] = array[i]
  }
  
  return array.length
};