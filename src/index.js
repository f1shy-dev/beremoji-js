const beremojiIndex = require("./emojiIndex.js");

console.log(beremojiIndex);

const convertFeeling = (feeling) =>
  beremojiIndex.emojis[beremojiIndex.feelings[feeling]];

module.exports = { convertFeeling };
