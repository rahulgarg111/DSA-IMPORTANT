/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length;

    let prefix = [1];
    for (let i = 1; i < n; i++) {
        prefix.push(prefix[prefix.length - 1] * nums[i - 1]);
    }

    let suffix = new Array(n);
    suffix[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = nums[i + 1] * suffix[i + 1];
    }
    
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(prefix[i] * suffix[i]);
    }
    return answer;
};