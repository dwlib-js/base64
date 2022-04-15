'use strict';

const ToString = require('#abstract/ToString');
const NormalizeString = require('#abstract-functions/NormalizeString');
const ToAllowedFormat = require('#abstract-functions/ToAllowedFormat');
const ToErrorMode = require('#abstract-functions/ToErrorMode');
const ToTargetFormat = require('#abstract-functions/ToTargetFormat');

const normalize = (string, errorMode, allowedFormat, targetFormat, padding) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validFormat = allowedFormat === undefined ? 'mixed' : ToAllowedFormat(allowedFormat);
  const finalFormat = targetFormat === undefined ? 'default' : ToTargetFormat(targetFormat);
  const usePadding = padding === undefined ? true : !!padding;
  return NormalizeString(chars, mode, validFormat, finalFormat, usePadding);
}

module.exports = normalize;
