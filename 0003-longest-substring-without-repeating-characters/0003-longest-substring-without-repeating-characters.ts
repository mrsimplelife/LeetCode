function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  const dict: Record<string, boolean> = {};
  let i = 0;
  let j = 0;
  while (i < s.length && j < s.length) {
    if (!dict[s[j]]) {
      dict[s[j]] = true;
      j++;
      max = Math.max(max, j - i);
    } else {
      delete dict[s[i]];
      i++;
    }
  }
  return max;
}
