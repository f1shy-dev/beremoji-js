const beremojiIndex = {
  feelings: {
    rocket: 0,
    launch: 0,
    takeoff: 0,
    celebrate: 1,
    party: 1,
    build: 2,
    develop: 2,
    mine: 2,
    focus: 2,
    love: 3,
    inlove: 3,
    fire: 4,
    epic: 4,
    cowboy: 5,
    feelinggood: 5,
    happy: 5,
    bereket: 5,
    face: 5,
  },
  emojis: {
    0: "🚀",
    1: "🥳",
    2: "🔨",
    3: "😍",
    4: "🔥",
    5: "🤠",
  },
};

const convertFeeling = (feeling) =>
  beremojiIndex.emojis[beremojiIndex.feelings[feeling]];

module.exports = { convertFeeling };
