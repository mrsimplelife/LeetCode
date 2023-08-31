function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();

  for (const char of magazine) {
    const count = map.get(char) || 0;
    map.set(char, count + 1);
  }

  for (const char of ransomNote) {
    const count = map.get(char) || 0;
    if (count === 0) {
      return false;
    }
    map.set(char, count - 1);
  }
  return true;
}