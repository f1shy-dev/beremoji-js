const beremojiIndex = require("./emojiIndex.js");

const convertFeeling = (feeling) =>
  beremojiIndex.emojis[beremojiIndex.feelings[feeling]];

module.exports = { convertFeeling };
