/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    let num = digits.toString();

    if (num.length === 0) return [];

    let chars = new Map();

    chars.set('0', ['']);
    chars.set('1', ['']);
    chars.set('2', ['a', 'b', 'c']);
    chars.set('3', ['d', 'e', 'f']);
    chars.set('4', ['g', 'h', 'i']);
    chars.set('5', ['j', 'k', 'l']);
    chars.set('6', ['m', 'n', 'o']);
    chars.set('7', ['p', 'q', 'r', 's']);
    chars.set('8', ['t', 'u', 'v']);
    chars.set('9', ['w', 'x', 'y', 'z']);

    let res = [];

    function help(i, sub) {
        if (sub.length === num.length) {
            res.push(sub);
            return;
        }
        for (let char of chars.get(num[i])) {
            help(i + 1, sub + char);
        }
    }
    help(0, '')
    return res;
};