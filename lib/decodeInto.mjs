import TypeError from '#primordials/TypeError';
import IsUint8Array from '#types/isUint8Array';
import ToString from '#abstract/ToString';
import DecodeBytesInto from '#abstract-functions/DecodeBytesInto';
import ToAllowedFormat from '#abstract-functions/ToAllowedFormat';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const decodeInto = (string, destination, errorMode, allowedFormat) => {
  const chars = ToString(string);
  if (!IsUint8Array(destination)) {
    throw new TypeError('destination is not an instance of Uint8Array');
  }
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validFormat = allowedFormat === undefined ? 'mixed' : ToAllowedFormat(allowedFormat);
  return DecodeBytesInto(chars, destination, mode, validFormat);
}

export default decodeInto;
