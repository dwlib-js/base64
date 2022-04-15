'use strict';

const TypeError = require('#primordials/TypeError');
const IsUint8Array = require('#types/isUint8Array');
const ToString = require('#abstract/ToString');
const DecodeBytesInto = require('#abstract-functions/DecodeBytesInto');
const ToAllowedFormat = require('#abstract-functions/ToAllowedFormat');
const ToErrorMode = require('#abstract-functions/ToErrorMode');

const decodeInto = (string, destination, errorMode, allowedFormat) => {
  const chars = ToString(string);
  if (!IsUint8Array(destination)) {
    throw new TypeError('destination is not an instance of Uint8Array');
  }
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validFormat = allowedFormat === undefined ? 'mixed' : ToAllowedFormat(allowedFormat);
  return DecodeBytesInto(chars, destination, mode, validFormat);
}

module.exports = decodeInto;
