/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let n = nums.length;
    let mem = new Map();
    function help(i) {
        let key = `${i}`;
        if (mem.has(key)) return mem.get(key);
        if (i === n - 1) {
            return 0;
        }
        let ans = n - 1;
        for (let j = 1; j <= nums[i]; j++) {
            ans = Math.min(ans, 1 + help(i + j));
        }
        mem.set(key, ans);
        return mem.get(key);
    }
    return help(0);

};