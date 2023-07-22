export function accum(s: string): string {
  return [...s]
    .map(
      (character, index) =>
        `${character.toUpperCase()}${character.toLowerCase().repeat(index)}`,
    )
    .join("-");
}
