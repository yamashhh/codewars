export function makeLooper(str: string): () => string {
  const loop = (function* () {
    let index = 0;
    while (true) {
      const character = str[index];
      index = index === str.length - 1 ? 0 : index + 1;
      yield character;
    }
  })();
  // your code here
  return () => loop.next().value;
}
