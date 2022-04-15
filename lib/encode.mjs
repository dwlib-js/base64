import BufferSourceAsUint8Array from '#abstract/BufferSourceAsUint8Array';
import EncodeBytes from '#abstract-functions/EncodeBytes';
import ToTargetFormat from '#abstract-functions/ToTargetFormat';

const encode = (source, targetFormat, padding) => {
  const buffer = BufferSourceAsUint8Array(source);
  const finalFormat = targetFormat === undefined ? 'default' : ToTargetFormat(targetFormat);
  const usePadding = padding === undefined ? true : !!padding;
  return EncodeBytes(buffer, finalFormat, usePadding);
}

export default encode;
