function swapInPlace<Type>(
  array: Type[],
  indexA: number,
  indexB: number,
): void {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

/**
 * Heap's algorithm
 * @see https://en.wikipedia.org/wiki/Heap%27s_algorithm
 * @see https://youtu.be/xghJNlMibX4
 * @param array
 * @returns
 */
export function getPermutations<Type>(array: Type[]): Type[][] {
  const output: Type[][] = [];

  function generate(length: number, array: Type[]): void {
    if (length === 1) {
      output.push(structuredClone(array));
      return;
    }
    generate(length - 1, array);
    for (let i = 0; i < length - 1; i++) {
      if (length % 2 === 0) {
        swapInPlace(array, i, length - 1);
      } else {
        swapInPlace(array, 0, length - 1);
      }
      generate(length - 1, array);
    }
  }

  generate(array.length, structuredClone(array));

  return output;
}
