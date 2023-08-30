function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  tokens.forEach((token) => {
    if (token in operators) {
      const right = stack.pop()!;
      const left = stack.pop()!;
      stack.push(operators[token](left, right));
    } else {
      stack.push(Number(token));
    }
  });
  return stack.pop()!;
}

const operators: Record<string, (left: number, right: number) => number> = {
  '+': (left: number, right: number) => left + right,
  '-': (left: number, right: number) => left - right,
  '*': (left: number, right: number) => left * right,
  '/': (left: number, right: number) => Math.trunc(left / right),
};
