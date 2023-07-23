export function sumPairs(
  ints: number[],
  s: number,
): [number, number] | undefined {
  const map = new Map<number, number>();
  for (let i = 0; i < ints.length; i++) {
    map.set(ints[i], i);
  }

  const candidates: Array<{
    candidate: [number, number];
    indexOfSecondNumber: number;
  }> = [];
  for (let i = 0; i < ints.length; i++) {
    const secondNumber = s - ints[i];
    const indexOfSecondNumber = map.get(secondNumber);
    if (
      indexOfSecondNumber !== undefined &&
      indexOfSecondNumber !== i &&
      // NOTE:
      // prevent adding the same combination of numbers (first and second element swapped) as candidate
      indexOfSecondNumber > i
    ) {
      candidates.push({
        candidate: [ints[i], secondNumber],
        indexOfSecondNumber,
      });
    }
  }

  if (candidates.length === 0) {
    return;
  }
  return candidates.sort(
    (a, b) => a.indexOfSecondNumber - b.indexOfSecondNumber,
  )[0].candidate;
}
