const { feelings, emojis } = require("./emojiDB.js");
const FuzzySet = require("fuzzyset");

const getAllFeelings = () => Object.values(feelings).flat();

const convertExactFeeling = (feeling) =>
  emojis[Object.keys(feelings).filter((i) => feelings[i].includes(feeling))[0]];

const convertFuzzyFeeling = (feeling) => {
  const fuzzyFeelings = FuzzySet(getAllFeelings());
  const fuzzResult = fuzzyFeelings.get(feeling)[0][1];
  if (!fuzzResult) return null;
  return convertExactFeeling(fuzzResult);
};

// Backwards Compatibility
const convertFeeling = convertExactFeeling;

module.exports = {
  convertFuzzyFeeling,
  getAllFeelings,
  convertExactFeeling,
  convertFeeling,
};
