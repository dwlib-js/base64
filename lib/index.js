'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const ObjectCreate = require('#primordials/ObjectCreate');
const ReflectDefineProperty = require('#primordials/ReflectDefineProperty');
const Base64Decode = require('./decode');
const Base64DecodeInto = require('./decodeInto');
const Base64Encode = require('./encode');
const Base64IsValid = require('./isValid');
const Base64Normalize = require('./normalize');
const Base64Validate = require('./validate');

const ObjectPrototype = GetIntrinsicOrThrow('Object.prototype');
const SymbolToStringTag = GetIntrinsicOrThrow('@@toStringTag');

const Base64 = ObjectCreate(ObjectPrototype, {
  decode: {
    value: Base64Decode
  },
  decodeInto: {
    value: Base64DecodeInto
  },
  encode: {
    value: Base64Encode
  },
  isValid: {
    value: Base64IsValid
  },
  normalize: {
    value: Base64Normalize
  },
  validate: {
    value: Base64Validate
  }
});
ReflectDefineProperty(Base64, SymbolToStringTag, {
  value: 'Base64'
});

module.exports = Base64;
