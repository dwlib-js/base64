'use strict';

const RangeError = require('#primordials/RangeError');
const StringToLowerCase = require('#primordials/StringToLowerCase');
const ToString = require('#abstract/ToString');

const ToTargetFormat = argument => {
  const string = ToString(argument);
  const targetFormat = StringToLowerCase(string);
  if (targetFormat !== 'default' && targetFormat !== 'safe') {
    throw new RangeError('Invalid target format');
  }
  return targetFormat;
}

module.exports = ToTargetFormat;
