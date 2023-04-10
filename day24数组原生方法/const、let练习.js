/**
 * @param {string[]} letters 全量数组
 * @param { string }expect   要找的数组
 */
const letters = ['a', 'u', 'i', 'o', 'e'];

function includes(letters, expect) {
    for (const letter of letters) {
        if (letter === expect) {
            return true;
        }
    }
    return false;
}
// 封装一个函数，输入一个单词，返回元音字母的数量
function getCount(word, letters) {
    let count = 0;
    // 期待单词中所有字母
    for (const letter of word) {
        if (includes(letters, letter)) {
            count++;
        }
    }
    return count;
}

console.log(getCount('hello', letters)); // 2
console.log(getCount('hello world', letters)); // 3