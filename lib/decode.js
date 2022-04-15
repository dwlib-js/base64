'use strict';

const ToString = require('#abstract/ToString');
const DecodeBytes = require('#abstract-functions/DecodeBytes');
const ToAllowedFormat = require('#abstract-functions/ToAllowedFormat');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const decode = (string, errorMode, allowedFormat) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validFormat = allowedFormat === undefined ? 'mixed' : ToAllowedFormat(allowedFormat);
  return DecodeBytes(chars, mode, validFormat);
}

module.exports = decode;
