/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//TIME - O(NLOGN)
//SPACE - O(1)

var maxFrequency = function (nums, k) {
    let n = nums.length;
    nums = nums.sort((a, b) => a - b);

    let i = 0
    let maxLen = 0;//result we return
    let currLen = 0;
    let sum = 0;//maintaining sum of subarray
    //we require operations = (maxEle*(currLen-freq)) - (sum - maxEle*freq) 

    let maxEle = -Infinity;
    let freq = 0;//freq of maxEle

    for (let j = 0; j < n; j++) {
        //update maxEle first
        if (nums[j] > maxEle) {
            maxEle = nums[j];
            freq = 1;
        }
        else {
            freq++;
        }

        currLen++;
        sum += nums[j];

        //shrinking the window ->
        while (i <= j && (maxEle * (currLen)) - (sum) > k) {//above formulae written here by simplifying
            currLen--;
            sum -= nums[i];
            //freq or maxEle will never change here
            i++;
        }

        maxLen = Math.max(maxLen, currLen);

    }

    return maxLen;
};