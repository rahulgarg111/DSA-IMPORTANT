/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
//time-O(n), space-O(1)
function help(arr, k) {
    let n = arr.length;
    let count = 0;
    let sum = 0;
    let beg = 0;
    for (let end = 0; end < n; end++) {
        sum += arr[end];
        while (sum > k && beg <= end) {
            sum -= arr[beg];
            beg++;
        }
        if (beg <= end) {
            count += end - beg + 1;
        }
    }
    return count;
}
var numSubarraysWithSum = function (nums, goal) {
    if (goal === 0) {
        return help(nums, goal);
    }
    return help(nums, goal) - help(nums, goal - 1);
};