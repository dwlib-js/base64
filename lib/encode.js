'use strict';

const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const EncodeBytes = require('#abstract-functions/EncodeBytes');
const ToTargetFormat = require('#abstract-functions/ToTargetFormat');

const encode = (source, targetFormat, padding) => {
  const buffer = BufferSourceAsUint8Array(source);
  const finalFormat = targetFormat === undefined ? 'default' : ToTargetFormat(targetFormat);
  const usePadding = padding === undefined ? true : !!padding;
  return EncodeBytes(buffer, finalFormat, usePadding);
}

module.exports = encode;
