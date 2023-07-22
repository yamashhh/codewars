function calculateWeightOfNumber(str: string): number {
  return [...str].reduce(
    (previousValue, currentValue) => previousValue + Number(currentValue),
    0,
  );
}

export function orderWeight(strng: string): string {
  // Your code
  return (
    strng
      .trim()
      .match(/\d+/g)
      ?.sort((a, b) => {
        const difference =
          calculateWeightOfNumber(a) - calculateWeightOfNumber(b);
        if (difference === 0) {
          return a.localeCompare(b);
        }
        return difference;
      })
      .join(" ") ?? strng
  );
}
