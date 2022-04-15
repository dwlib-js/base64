'use strict';

const RangeError = require('#primordials/RangeError');

const ThrowInvalidCharacterError = index => {
  throw new RangeError(`Invalid Base64 character at index ${index}`);
}

module.exports = ThrowInvalidCharacterError;
