'use strict';

const TypedArrayLength = require('#primordials/TypedArrayLength');
const GetAlphabetIndexOf = require('#internal/GetAlphabetIndexOf');
const ThrowInvalidCharacterError = require('./ThrowInvalidCharacterError');

const DecodeBytesIntoStrict = (string, destination, allowedFormat) => {
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
      ThrowInvalidCharacterError(index);
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

module.exports = DecodeBytesIntoStrict;
