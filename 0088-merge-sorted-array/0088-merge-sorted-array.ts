function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index =  m + n - 1;
    let i = m - 1;
    let j = n - 1;
    while(i >= 0 && j >= 0) {
        if(nums1[i] >= nums2[j]){
            nums1[index] = nums1[i];
            i -= 1
        } else {
            nums1[index] = nums2[j];
            j -= 1
        }
        index -= 1
    }
    while(j >= 0){
        nums1[index] = nums2[j]
        index -= 1
        j -= 1
    }    
};