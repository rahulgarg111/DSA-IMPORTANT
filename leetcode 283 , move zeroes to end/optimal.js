/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0;
    while(i<nums.length){
        if(nums[i]===0){
            break;
        }
        i++
    }
    let j = i+1;
    while(j<nums.length){
        if(nums[i]!==0){
            i++;
            j++;
        }
        else {
        if(nums[j]===0){
            j++;
        }
        else {
            [nums[i],nums[j]]= [nums[j],nums[i]]
            i++;
            j++;
        }

        }
    }
};