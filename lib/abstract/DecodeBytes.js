'use strict';

const DecodeBytesBreak = require('./DecodeBytesBreak');
const DecodeBytesIgnore = require('./DecodeBytesIgnore');
const DecodeBytesStrict = require('./DecodeBytesStrict');

const DecodeBytes = (string, errorMode, allowedFormat) => {
  const decode = (
    errorMode === 'strict' ? DecodeBytesStrict :
    errorMode === 'ignore' ? DecodeBytesIgnore : DecodeBytesBreak
  );
  return decode(string, allowedFormat);
}

module.exports = DecodeBytes;
