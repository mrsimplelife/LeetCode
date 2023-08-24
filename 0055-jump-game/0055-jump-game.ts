function canJump(nums: number[]): boolean {
  let index = 0;
  while(index < nums.length - 1){
      if(nums[index] === 0){
        let back = 0
        while(nums[index] <= back){
          if(index === 0){
            return false
          }
          index -= 1
          back += 1
        }
      }
      index += nums[index]
  } 
  return true
};