# TDD with Mocha & Chai for Javascript Strings

Given some strings of different lengths, if the number of vowels are more than 30% of the string length then insert 'summer' for each continuous set (group) of vowels.

Examples:

```
'' => ''
'a' => 'summer'
'ntv' => 'ntv'
'bla' => 'blsummer'
'blah' => 'blah'
'blaahah' => 'blsummerhsummerh'
'hear' => 'hsummerr'
'blAhE' => 'blsummerhsummer'
```

##Solution:

###index.js

```javascript
const newStr = 'summer';
const regx = /[aeiou]+/ig;
// const regx = /(a|e|i|o|u)+/ig;
// const vowels = 'aeiou';

// const isVowel = (c) => vowels.indexOf(c.toLowerCase()) > -1;

const vowelCount = (word) => {
    // const vCount = [...word].reduce((count, letter) => count + (isVowel(letter)? 1:0), 0);
    // const re = /(a|e|i|o|u){1}/ig;
    const re = /[a|e|i|o|u]{1}/ig;
    return word.match(regx) ? word.match(re).length / word.length > 0.3 : false
};

const replaceVowels = (word) => word.replace(regx, newStr);

const changeStr = (word) => vowelCount(word) ? replaceVowels(word) : word;

export default changeStr;
```
###index.spec.js

```javascript
import { expect } from 'chai';
import changeStr from '../index';

describe('#changeStr', () => {
  it('should not change empty string', () => {
    expect(changeStr('')).to.equal('');
  });

  it('should not change words with no vowels', () => {
    expect(changeStr('ntv')).to.equal('ntv');
  });

  it('should change a vowel', () => {
    expect(changeStr('a')).to.equal('summer');
  });

  it('should change consonents and a vowel', () => {
    expect(changeStr('bla')).to.equal('blsummer');
  });

  it('should not change less than 30 percent vowels', () => {
    expect(changeStr('blah')).to.equal('blah');
  });

  it('should change continuous vowels once', () => {
    expect(changeStr('hear')).to.equal('hsummerr');
  });

  it('should change multiple sets of vowels', () => {
    expect(changeStr('blaahah')).to.equal('blsummerhsummerh');
  });

  it('should change capital vowels', () => {
    expect(changeStr('blAhE')).to.equal('blsummerhsummer');
  });

  it('should error on undefined input', () => {
    expect(() => changeStr()).to.throw();
  });
});
```

.babelrc
```
{
    "presets": ["@babel/preset-env"]
}
```

.mocharc.yml
```
require: '@babel/register'
```

.package.json
```
{
  "name": "tdd",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "license": "MIT",
  "devDependencies": {
    "@babel/cli": "^7.10.5",
    "@babel/core": "^7.11.1",
    "@babel/preset-env": "^7.11.0",
    "@babel/register": "^7.10.5",
    "chai": "^4.2.0",
    "mocha": "^8.1.1"
  }
}
```
