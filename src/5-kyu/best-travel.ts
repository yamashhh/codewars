function combinations<Type>(
  inputArray: Type[],
  combinationSize: number,
  partialCombination: Type[] = [],
): Type[][] {
  if (combinationSize === 0) {
    return [partialCombination];
  }
  return inputArray.flatMap(
    (inputArrayElement: Type, inputArrayIndex: number): Type[][] => {
      return combinations(
        inputArray.slice(inputArrayIndex + 1),
        combinationSize - 1,
        [...partialCombination, inputArrayElement],
      );
    },
  );
}

export function chooseBestSum(
  t: number,
  k: number,
  ls: number[],
): number | null {
  // your code
  return (
    combinations(ls, k)
      .reduce((previousValue, currentValue) => {
        const sum = currentValue.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0,
        );
        if (sum <= t) {
          previousValue.push(sum);
        }
        return previousValue;
      }, [])
      .sort((a, b) => b - a)[0] ?? null
  );
}
