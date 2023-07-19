export function duplicateEncode(word: string): string {
  const normalizedWord = word.normalize().toLowerCase();
  const duplicateCharacters = Array.from(
    new Set(normalizedWord.match(/(.)(?=.*\1)/g))
  );
  return Array.from(normalizedWord)
    .map((character) => (duplicateCharacters.includes(character) ? ")" : "("))
    .join("");
}
