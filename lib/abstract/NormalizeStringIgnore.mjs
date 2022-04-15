import GetAlphabet from '#internal/GetAlphabet';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';
import GetPaddingLength from './GetPaddingLength.mjs';

const NormalizeStringIgnore = (string, allowedFormat, targetFormat, padding) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedFormat);
  const alphabet = GetAlphabet(targetFormat);
  let normalized = '';
  let sequenceLength = 0;
  let paddingLength = 0;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    if (char === '=') {
      if (sequenceLength) {
        paddingLength = GetPaddingLength(sequenceLength);
        sequenceLength = 0;
      }
      continue;
    }
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    while (paddingLength) {
      normalized += '=';
      paddingLength--;
    }
    normalized += alphabet[charIndex];
    sequenceLength++;
  }
  if (padding) {
    if (!paddingLength) {
      paddingLength = GetPaddingLength(normalized.length);
    }
    while (paddingLength) {
      normalized += '=';
      paddingLength--;
    }
  }
  return normalized;
}

export default NormalizeStringIgnore;
