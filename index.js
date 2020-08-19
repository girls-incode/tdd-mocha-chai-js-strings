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