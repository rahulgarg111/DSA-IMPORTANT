//wrong solution

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length;
    let l = -1;
    out:
    for(let j=n-1;j>0;j--){
    for(let i=j-1;i>=0;i--){
        if(nums[i]<nums[j]){
            [nums[i],nums[j]]=[nums[j],nums[i]];
            l=i;
            break out;

        }

    }
    }
   let block = nums.splice(l+1);
   block.sort((a,b)=>a-b);
   nums.push(...block)
   return nums;

};