function getFirstNumberOfRow(row: number): number {
  if (row < 1) {
    return 1;
  }
  return getFirstNumberOfRow(row - 1) + (row - 1) * 2;
}

export function rowSumOddNumbers(row: number): number {
  return Array.from<number, number>(
    { length: row },
    (element = getFirstNumberOfRow(row), index) => {
      return element + index * 2;
    }
  ).reduce<number>(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}
