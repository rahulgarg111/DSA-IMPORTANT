/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let n = nums.length;
    let CurrentRange = 0;
    let maxRange = nums[0];
    let count = 0;

    for (let i = 1; i < n; i++) {
        if (i <= CurrentRange) {
            maxRange = Math.max(maxRange, i + nums[i]);
        }
        else {
            count++;
            CurrentRange = maxRange;
            maxRange = Math.max(maxRange, i + nums[i]);
        }
    }
    return count;
};