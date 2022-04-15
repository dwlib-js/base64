import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import ObjectCreate from '#primordials/ObjectCreate';
import ReflectDefineProperty from '#primordials/ReflectDefineProperty';
import Base64Decode from './decode.mjs';
import Base64DecodeInto from './decodeInto.mjs';
import Base64Encode from './encode.mjs';
import Base64IsValid from './isValid.mjs';
import Base64Normalize from './normalize.mjs';
import Base64Validate from './validate.mjs';

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

export default Base64;
