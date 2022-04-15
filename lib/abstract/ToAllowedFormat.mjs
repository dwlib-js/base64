import RangeError from '#primordials/RangeError';
import StringToLowerCase from '#primordials/StringToLowerCase';
import ToString from '#abstract/ToString';

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

export default ToAllowedFormat;
