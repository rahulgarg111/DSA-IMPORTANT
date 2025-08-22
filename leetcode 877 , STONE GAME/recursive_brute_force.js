/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    let n = piles.length;
    function help(i, j) {
        if (i > j) {
            return 0;
        }
        let a1, a2, a3, a4;
        if ((j - i) % 2 !== 0) {
            a1 = piles[i] + help(i + 1, j);
            a2 = piles[j] + help(i, j - 1);
            return Math.max(a1, a2);
        }
        else {
            a3 = -piles[i] + help(i + 1, j);
            a4 = -piles[j] + help(i, j - 1);
            return Math.min(a3, a4);
        }
    }
    return help(0, n - 1) > 0;
};