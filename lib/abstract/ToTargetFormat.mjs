import RangeError from '#primordials/RangeError';
import StringToLowerCase from '#primordials/StringToLowerCase';
import ToString from '#abstract/ToString';

const ToTargetFormat = argument => {
  const string = ToString(argument);
  const targetFormat = StringToLowerCase(string);
  if (targetFormat !== 'default' && targetFormat !== 'safe') {
    throw new RangeError('Invalid target format');
  }
  return targetFormat;
}

export default ToTargetFormat;
