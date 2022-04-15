import TypedArraySlice from '#primordials/TypedArraySlice';
import Uint8Array from '#primordials/Uint8Array';
import GetAlphabetIndexOf from '#internal/GetAlphabetIndexOf';
import GetMaxByteCount from './GetMaxByteCount.mjs';

const DecodeBytesIgnore = (string, allowedFormat) => {
  const length = string.length;
  const alphabetIndexOf = GetAlphabetIndexOf(allowedFormat);
  const maxByteCount = GetMaxByteCount(length);
  const bytes = new Uint8Array(maxByteCount);
  let index = 0;
  let bits = 0;
  let carry = 0;
  for (let i = 0; i < length; i++) {
    const char = string[i];
    if (char === '=') {
      bits = 0;
      continue;
    }
    const charIndex = alphabetIndexOf(char);
    if (charIndex === undefined) {
      continue;
    }
    carry = (carry << 6) | charIndex;
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      bytes[index++] = (carry >>> bits) & 0xff;
    }
  }
  return index !== maxByteCount ? TypedArraySlice(bytes, 0, index) : bytes;
}

export default DecodeBytesIgnore;
