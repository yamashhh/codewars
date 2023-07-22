// @ts-expect-error Only provided in codewars editor
import { MORSE_CODE } from "./preloaded";

export function decodeMorse(morseCode: string): string {
  return (
    morseCode
      // Remove leading and trailing spaces
      .trim()
      // Split morse code into words
      .split("   ")
      // Split words into characters
      .map((word) => word.split(" "))
      .map((word) =>
        word
          // Decode characters
          .map((character) => MORSE_CODE[character])
          // and convert to string
          .join(""),
      )
      // Convert to sentence
      .join(" ")
  );
}
