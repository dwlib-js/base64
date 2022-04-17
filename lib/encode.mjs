import IsBufferSource from '#types/isBufferSource';
import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import ToString from '#abstract/ToString';
import UTF8EncodeString from '#utf8/EncodeString';
import EncodeBytes from '#abstract-functions/EncodeBytes';
import ToTargetFormat from '#abstract-functions/ToTargetFormat';

const encode = (input, targetFormat, padding) => {
  let buffer;
  if (IsBufferSource(input)) {
    buffer = BufferSourceAsUint8Array(input);
  } else {
    const string = ToString(input);
    buffer = UTF8EncodeString(string);
  }
  const finalFormat = targetFormat === undefined ? 'default' : ToTargetFormat(targetFormat);
  const usePadding = padding === undefined ? true : !!padding;
  return EncodeBytes(buffer, finalFormat, usePadding);
}

export default encode;
