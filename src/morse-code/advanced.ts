// @ts-expect-error Only provided in codewars editor
import { MORSE_CODE } from "./preloaded";

const MORSE_CODE_SYMBOLS = {
  DOT: ".",
  DASH: "-",
  CHARACTER_SEPARATOR: " ",
  WORD_SEPARATOR: "   ",
} as const;

export const decodeBits = (bits: string): string => {
  // trim keyup from beginning and end of message
  const trimmedBits = bits.replace(/^0+|0+$/g, "");

  let dot = trimmedBits.match(/1+/g)?.sort((a, b) => a.length - b.length)?.[0];
  if (dot === undefined) {
    throw new Error("Failed to decode bits: could not find keydown event");
  }

  // NOTE:
  // First, assume the shortest pause is the same length as a dot.
  let pause = "0".repeat(dot.length);
  const shortestPause = trimmedBits
    .match(/0+/g)
    ?.sort((a, b) => a.length - b.length)?.[0];
  // When the dot divided by 3 is the same as the shortest pause,
  // the dot is actually a dash and the shortest pause is the transmission rate,
  // so should be replaced.
  if (dot.length / 3 === shortestPause?.length) {
    dot = dot.slice(0, shortestPause.length);
    pause = shortestPause;
  }

  const pauseBetweenCharacters = pause.repeat(3);
  const dash = dot.repeat(3);
  const pauseBetweenWords = pause.repeat(7);

  return bits
    .replaceAll(pauseBetweenWords, MORSE_CODE_SYMBOLS.WORD_SEPARATOR)
    .replaceAll(pauseBetweenCharacters, MORSE_CODE_SYMBOLS.CHARACTER_SEPARATOR)
    .replaceAll(dash, MORSE_CODE_SYMBOLS.DASH)
    .replaceAll(dot, MORSE_CODE_SYMBOLS.DOT)
    .replaceAll(pause, "")
    .replaceAll("0", "");
};

export const decodeMorse = (morseCode: string): string => {
  return (
    morseCode
      // Remove leading and trailing spaces
      .trim()
      // Split morse code into words
      .split(MORSE_CODE_SYMBOLS.WORD_SEPARATOR)
      // Split words into characters
      .map((word) => word.split(MORSE_CODE_SYMBOLS.CHARACTER_SEPARATOR))
      .map((word) =>
        word
          // Decode characters
          .map((character) => MORSE_CODE[character])
          // and convert to string
          .join("")
      )
      // Convert to sentence
      .join(" ")
  );
};
