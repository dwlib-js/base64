'use strict';

const ToString = require('#abstract/ToString');
const ToAllowedFormat = require('#abstract-functions/ToAllowedFormat');
const ValidateString = require('#abstract-functions/ValidateString');

const validate = (string, allowedFormat) => {
  const chars = ToString(string);
  const validFormat = allowedFormat === undefined ? 'mixed' : ToAllowedFormat(allowedFormat);
  return ValidateString(chars, validFormat);
}

module.exports = validate;
