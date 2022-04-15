import ToString from '#abstract/ToString';
import IsValidString from '#abstract-functions/IsValidString';
import ToAllowedFormat from '#abstract-functions/ToAllowedFormat';

const isValid = (string, allowedFormat) => {
  const chars = ToString(string);
  const validFormat = allowedFormat === undefined ? 'mixed' : ToAllowedFormat(allowedFormat);
  return IsValidString(chars, validFormat);
}

export default isValid;
