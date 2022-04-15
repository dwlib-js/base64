const GetPaddingLength = length => {
  const remainder = length % 4;
  return remainder ? 4 - remainder : 0;
}

export default GetPaddingLength;
