function isPalindrome(s: string): boolean {
  const test = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = test.length - 1;
  while (left < right) {
    if (test[left] !== test[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
