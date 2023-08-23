void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    int* nums1Copy = (int*)malloc(sizeof(int) * m);
    for (int i = 0; i < m; i++) {
        nums1Copy[i] = nums1[i];
    }
    
    int i = 0, j = 0, index = 0;
    while (i < m && j < n) {
        if (nums1Copy[i] <= nums2[j]) {
            nums1[index] = nums1Copy[i];
            i++;
        } else {
            nums1[index] = nums2[j];
            j++;
        }
        index++;
    }
    
    while (i < m) {
        nums1[index] = nums1Copy[i];
        i++;
        index++;
    }
    
    while (j < n) {
        nums1[index] = nums2[j];
        j++;
        index++;
    }
    
    free(nums1Copy);
}