import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionBind from '#primordials/FunctionBind';
import Map from '#primordials/Map';
import MapSet from '#primordials/MapSet';
import GetAlphabet from './GetAlphabet.mjs';

const MapPrototypeGet = GetIntrinsicOrThrow('Map.prototype.get');

const DEFAULT_ALPHABET = GetAlphabet('default');
const SAFE_ALPHABET = GetAlphabet('safe');

const DEFAULT_ALPHABET_LOOKUP = new Map();
const SAFE_ALPHABET_LOOKUP = new Map();
const MIXED_ALPHABET_LOOKUP = new Map();

for (let i = 0; i < 64; i++) {
  const char1 = DEFAULT_ALPHABET[i];
  const char2 = SAFE_ALPHABET[i];
  MapSet(DEFAULT_ALPHABET_LOOKUP, char1, i);
  MapSet(SAFE_ALPHABET_LOOKUP, char2, i);
  MapSet(MIXED_ALPHABET_LOOKUP, char1, i);
  if (char2 !== char1) {
    MapSet(MIXED_ALPHABET_LOOKUP, char2, i);
  }
}

const DefaultAlphabetIndexOf = FunctionBind(MapPrototypeGet, DEFAULT_ALPHABET_LOOKUP);
const SafeAlphabetIndexOf = FunctionBind(MapPrototypeGet, SAFE_ALPHABET_LOOKUP);
const MixedAlphabetIndexOf = FunctionBind(MapPrototypeGet, MIXED_ALPHABET_LOOKUP);

const GetAlphabetIndexOf = allowedFormat => (
  allowedFormat === 'default' ? DefaultAlphabetIndexOf :
  allowedFormat === 'safe' ? SafeAlphabetIndexOf : MixedAlphabetIndexOf
);

export default GetAlphabetIndexOf;
