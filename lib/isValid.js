'use strict';

const ToString = require('#abstract/ToString');
const IsValidString = require('#abstract-functions/IsValidString');
const ToAllowedFormat = require('#abstract-functions/ToAllowedFormat');

const isValid = (string, allowedFormat) => {
  const chars = ToString(string);
  const validFormat = allowedFormat === undefined ? 'mixed' : ToAllowedFormat(allowedFormat);
  return IsValidString(chars, validFormat);
}

module.exports = isValid;
