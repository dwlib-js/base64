import ToString from '#abstract/ToString';
import ToAllowedFormat from '#abstract-functions/ToAllowedFormat';
import ValidateString from '#abstract-functions/ValidateString';

const validate = (string, allowedFormat) => {
  const chars = ToString(string);
  const validFormat = allowedFormat === undefined ? 'mixed' : ToAllowedFormat(allowedFormat);
  return ValidateString(chars, validFormat);
}

export default validate;
