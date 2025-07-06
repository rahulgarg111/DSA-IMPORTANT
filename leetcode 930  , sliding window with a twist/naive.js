/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
//time-O(n) , space- O(n)
var numSubarraysWithSum = function (nums, goal) {
    let map = new Map();
    map.set(0, 1);
    let count = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - goal)) {
            count += map.get(sum - goal);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};