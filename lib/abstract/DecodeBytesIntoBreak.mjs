import TypedArrayLength from '#primordials/TypedArrayLength';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';

const DecodeBytesIntoBreak = (string, destination, allowedFormat) => {
  const length = string.length;
  const destinationLength = TypedArrayLength(destination);
  const alphabetIndexOf = GetAlphabetIndexOf(allowedFormat);
  let index = 0;
  let destinationIndex = 0;
  let bits = 0;
  let carry = 0;
  while (index < length && destinationIndex < destinationLength) {
    const char = string[index];
    if (char === '=') {
      bits = 0;
      index++;
      continue;
    }
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      break;
    }
    carry = (carry << 6) | charIndex;
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      destination[destinationIndex++] = (carry >>> bits) & 0xff;
    }
    index++;
  }
  return {
    read: index,
    written: destinationIndex
  };
}

export default DecodeBytesIntoBreak;
