# 🤩 Beremoji

_This is a simple meme project, use it if you want, but it's just some emojis._

## Usage

`yarn add beremoji | npm install beremoji`
<br>
### Example Usages

**Converting a Miss-spelled/Closely-spelled Feeling**
```js
const beremoji = require("beremoji");

console.log(beremoji.convertFuzzyFeeling("launchoff"));

// Output: 🚀
```

**Converting an exactly spelled Feeling**
```js
const beremoji = require("beremoji");

console.log(beremoji.convertExactFeeling("happy"));

// Output: 🥳
```

**Getting an array of all feelings**
```js
const beremoji = require("beremoji");

console.log(beremoji.getAllFeelings());

// Output: ['rocket', 'happy', 'release' ...
```
