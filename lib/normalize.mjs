import ToString from '#abstract/ToString';
import NormalizeString from '#abstract-functions/NormalizeString';
import ToAllowedFormat from '#abstract-functions/ToAllowedFormat';
import ToErrorMode from '#abstract-functions/ToErrorMode';
import ToTargetFormat from '#abstract-functions/ToTargetFormat';

const normalize = (string, errorMode, allowedFormat, targetFormat, padding) => {
  const chars = ToString(string);
  const mode = errorMode === undefined ? 'break' : ToErrorMode(errorMode);
  const validFormat = allowedFormat === undefined ? 'mixed' : ToAllowedFormat(allowedFormat);
  const finalFormat = targetFormat === undefined ? 'default' : ToTargetFormat(targetFormat);
  const usePadding = padding === undefined ? true : !!padding;
  return NormalizeString(chars, mode, validFormat, finalFormat, usePadding);
}

export default normalize;
