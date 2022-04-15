'use strict';

const TypedArrayLength = require('#primordials/TypedArrayLength');
const GetAlphabet = require('#internal/GetAlphabet');
const GetPaddingLength = require('./GetPaddingLength');

const EncodeBytes = (buffer, targetFormat, padding) => {
  const length = TypedArrayLength(buffer);
  const alphabet = GetAlphabet(targetFormat);
  let string = '';
  let bits = 0;
  let carry = 0;
  for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    carry = (carry << 8) | byte;
    bits += 8;
    while (bits >= 6) {
      bits -= 6;
      const charIndex = (carry >>> bits) & 0x3f;
      string += alphabet[charIndex];
    }
  }
  if (bits) {
    const charIndex = (carry << (6 - bits)) & 0x3f;
    string += alphabet[charIndex];
  }
  if (padding) {
    let paddingLength = GetPaddingLength(string.length);
    while (paddingLength) {
      string += '=';
      paddingLength--;
    }
  }
  return string;
}

module.exports = EncodeBytes;
