'use strict';

const NormalizeStringBreak = require('./NormalizeStringBreak');
const NormalizeStringIgnore = require('./NormalizeStringIgnore');
const NormalizeStringStrict = require('./NormalizeStringStrict');

const NormalizeString = (string, errorMode, allowedFormat, targetFormat, padding) => {
  const normalize = (
    errorMode === 'strict' ? NormalizeStringStrict :
    errorMode === 'ignore' ? NormalizeStringIgnore : NormalizeStringBreak
  );
  return normalize(string, allowedFormat, targetFormat, padding);
}

module.exports = NormalizeString;
