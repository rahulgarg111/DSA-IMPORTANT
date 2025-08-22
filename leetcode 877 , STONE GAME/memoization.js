/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    let n = piles.length;
    let mem = new Map();
    function help(i, j) {
        let key = `${i},${j}`;
        if (mem.has(key)) return mem.get(key);
        if (i > j) {
            return 0;
        }
        let a1, a2, a3, a4;
        if ((j - i) % 2 !== 0) {
            a1 = piles[i] + help(i + 1, j);
            a2 = piles[j] + help(i, j - 1);
            let ans1 = Math.max(a1, a2);
            mem.set(key, ans1);
            return ans1;
        }
        else {
            a3 = -piles[i] + help(i + 1, j);
            a4 = -piles[j] + help(i, j - 1);
            let ans2 = Math.min(a3, a4);
            mem.set(key, ans2);
            return ans2;
        }
    }
    return help(0, n - 1) > 0;
};