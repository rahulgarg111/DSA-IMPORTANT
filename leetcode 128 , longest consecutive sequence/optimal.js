/**
 * @param {number[]} nums
 * @return {number}

 TIME - O(N) , SPACE - O(N)
 */
var longestConsecutive = function (nums) {
    let n = nums.length;
    let map = new Map();
    for (let num of nums) {
        map.set(num, true);
    }
    let starters = [];
    for (let [key, val] of map) {
        if (!map.has(key - 1)) {
            starters.push(key)
        }
    }

    let max = 0;
    for (let i = 0; i < starters.length; i++) {
        let start = starters[i];
        let count = 1;
        while (map.has(start + 1)) {
            start++;
            count++;
        }
        max = Math.max(max, count);
    }
    return max;
};