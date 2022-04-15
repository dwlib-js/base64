import ToString from '#abstract/ToString';
import DecodeBytes from '#abstract-functions/DecodeBytes';
import ToAllowedFormat from '#abstract-functions/ToAllowedFormat';
import ToErrorMode from '#abstract-functions/ToErrorMode';

const decode = (string, errorMode, allowedFormat) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validFormat = allowedFormat === undefined ? 'mixed' : ToAllowedFormat(allowedFormat);
  return DecodeBytes(chars, mode, validFormat);
}

export default decode;
