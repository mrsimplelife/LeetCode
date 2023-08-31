function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>();
  for (const char of s) {
    const count = map.get(char) || 0;
    map.set(char, count + 1);
  }

  for (const char of t) {
    const count = map.get(char) || 0;
    if (count === 0) {
      return false;
    }
    map.set(char, count - 1);
  }

  for (const [_, count] of map) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}
