/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//NAIVE SOLUTION
//TIME - O(N^2)
//SPACE - O(N)
var subarraysWithKDistinct = function (nums, k) {
    let n = nums.length;
    let res = 0;

    for (let i = 0; i < n; i++) {
        let map = new Map();
        for (let j = i; j < n; j++) {
            map.set(nums[j], (map.get(nums[j]) || 0) + 1);
            if (map.size === k) res++;
            else if (map.size > k) break;
        }
    }

    return res;
};