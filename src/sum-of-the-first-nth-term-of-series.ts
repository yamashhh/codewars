export function SeriesSum(n: number): string {
  const series = Array.from<number, number>({ length: n }, (_, index) => {
    return 1 / (4 + 3 * (index - 1));
  });
  return series
    .reduce<number>((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0)
    .toFixed(2);
}
