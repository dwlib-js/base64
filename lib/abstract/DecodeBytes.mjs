import DecodeBytesBreak from './DecodeBytesBreak.mjs';
import DecodeBytesIgnore from './DecodeBytesIgnore.mjs';
import DecodeBytesStrict from './DecodeBytesStrict.mjs';

const DecodeBytes = (string, errorMode, allowedFormat) => {
  const decode = (
    errorMode === 'strict' ? DecodeBytesStrict :
    errorMode === 'ignore' ? DecodeBytesIgnore : DecodeBytesBreak
  );
  return decode(string, allowedFormat);
}

export default DecodeBytes;
