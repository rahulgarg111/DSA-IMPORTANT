/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];

    function backtrack(start) {
        // Base case: if we've fixed all positions
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }

        // Try swapping current position with all positions from start to end
        for (let i = start; i < nums.length; i++) {
            // Swap current element with element at position 'start'
            [nums[start], nums[i]] = [nums[i], nums[start]];

            // Recursively generate permutations for remaining positions
            backtrack(start + 1);

            // Backtrack: swap back to restore original state
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    backtrack(0);
    return result;
};