/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
    let n = words.length;
    let max = 0;
    let map = new Map();
    for (let i = 0; i < letters.length; i++) {
        map.set(letters[i], (map.get(letters[i]) || 0) + 1);
    }
    function canWe(str) {
        let wordMap = new Map();
        // Count frequency of each character in the word
        for (let i = 0; i < str.length; i++) {
            wordMap.set(str[i], (wordMap.get(str[i]) || 0) + 1);
        }
        // Check if we have enough of each character
        for (let [char, count] of wordMap) {
            if ((map.get(char) || 0) < count) {
                return false;
            }
        }
        return true;
    }
    function backtrack(curr, Z) {
        //base cases-
        if (curr === n) { // map.size()===0 IS SUS
            max = Math.max(Z, max);
            return;
        }
        //for(let idx=curr;idx<n;idx++){
        if (canWe(words[curr])) {
            let ZIncrement = 0;
            for (let i = 0; i < words[curr].length; i++) {
                map.set(words[curr][i], (map.get(words[curr][i])) - 1);
                ZIncrement += score[words[curr].charCodeAt(i) - 97];
            }
            backtrack(curr + 1, Z + ZIncrement);
            // }
            for (let i = 0; i < words[curr].length; i++) {
                map.set(words[curr][i], (map.get(words[curr][i]) || 0) + 1);
            }
            ZIncrement = 0;



        }
        backtrack(curr + 1, Z);

    }
    backtrack(0, 0);
    return max;
};