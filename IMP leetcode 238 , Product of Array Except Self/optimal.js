/**
 * @param {number[]} nums
 * @return {number[]}
 */
//OPTIMAL , TIME - O(N) , SPACE - O(1)
//the trick is to use the answer array as prefix first and 
//as in all other such problems orignal array is also used
//like here its used as suffix array.
var productExceptSelf = function (nums) {
    let n = nums.length;

    let answer = [1];//this acts as prefix arr first 
    for (let i = 1; i < n; i++) {
        answer.push(nums[i - 1] * answer[answer.length - 1]);
    }

    //nums will act like suffix array.
    let last1 = nums[n - 1];
    nums[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        let last2 = nums[i];
        nums[i] = last1 * nums[i + 1];
        last1 = last2
    }

    for (let i = 0; i < n; i++) {
        answer[i] *= nums[i];
    }
    return answer;
};