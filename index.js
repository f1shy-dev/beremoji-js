const feelingToBeremoji = (feeling) => {
  switch (feeling) {
    case "celebration":
      return "🥳";
    case "focus":
      return "🔨";
    case "launch":
      return "🚀";
    case "love":
      return "😍";
  }
};

module.exports = feelingToBeremoji;
