'use strict';

const IsBufferSource = require('#types/isBufferSource');
const BufferSourceAsUint8Array = require('#abstract/BufferSourceAsUint8Array');
const ToString = require('#abstract/ToString');
const UTF8EncodeString = require('#utf8/EncodeString');
const EncodeBytes = require('#abstract-functions/EncodeBytes');
const ToTargetFormat = require('#abstract-functions/ToTargetFormat');

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

module.exports = encode;
