import NormalizeStringBreak from './NormalizeStringBreak.mjs';
import NormalizeStringIgnore from './NormalizeStringIgnore.mjs';
import NormalizeStringStrict from './NormalizeStringStrict.mjs';

const NormalizeString = (string, errorMode, allowedFormat, targetFormat, padding) => {
  const normalize = (
    errorMode === 'strict' ? NormalizeStringStrict :
    errorMode === 'ignore' ? NormalizeStringIgnore : NormalizeStringBreak
  );
  return normalize(string, allowedFormat, targetFormat, padding);
}

export default NormalizeString;
