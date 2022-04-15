'use strict';

const RangeError = require('#primordials/RangeError');
const StringToLowerCase = require('#primordials/StringToLowerCase');
const ToString = require('#abstract/ToString');

const ToAllowedFormat = argument => {
  const string = ToString(argument);
  const allowedFormat = StringToLowerCase(string);
  if (
    allowedFormat !== 'default' &&
    allowedFormat !== 'safe' &&
    allowedFormat !== 'mixed'
  ) {
    throw new RangeError('Invalid allowed format');
  }
  return allowedFormat;
}

module.exports = ToAllowedFormat;
