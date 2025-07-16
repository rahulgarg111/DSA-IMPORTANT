/**
 * @param {number[]} nums
 * @return {number}
 */

//time- O(N) , space- O(1)

function getEven(arr) {
    let n = arr.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) res++;
    }
    return res;
}

function getOdd(arr) {
    let n = arr.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 !== 0) res++;
    }
    return res;
}

var maximumLength = function (nums) {
    let n = nums.length;
    let evenCount = getEven(nums);
    let oddCount = getOdd(nums);
    let res1 = 0;
    let needEven = true;
    for (let i = 0; i < n; i++) {
        if (needEven && nums[i] % 2 === 0) {
            res1++;
            needEven = false;
        }
        else if (!needEven && nums[i] % 2 !== 0) {
            res1++;
            needEven = true;
        }
        else {
            continue;
        }
    }

    let res2 = 0;
    let needOdd = true;
    for (let i = 0; i < n; i++) {
        if (needOdd && nums[i] % 2 !== 0) {
            res2++;
            needOdd = false;
        }
        else if (!needOdd && nums[i] % 2 === 0) {
            res2++;
            needOdd = true;
        }
        else {
            continue;
        }
    }

    let ans = Math.max(evenCount, Math.max(oddCount, Math.max(res1, res2)))
    return ans;
};