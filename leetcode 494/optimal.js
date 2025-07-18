/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//TIME- O(n*sum) , SPACE - O(sum)
//Mathematical trick approach can see but this is also good
//enough.

var findTargetSumWays = function (nums, target) {
    let n = nums.length;
    
    let dp = new Map();
     dp.set(0,1);//one way to make sum 0 

    for(let i=0;i<n;i++){
        let temp = new Map();

        for(let [sum,count] of dp){
            temp.set(sum+nums[i],(temp.get(sum+nums[i])||0)+count);//we would have at least count ways tp make sum+nums[i]
            temp.set(sum-nums[i],(temp.get(sum-nums[i])||0)+count);
        }
        dp = temp;
    }

    return dp.get(target)||0;
};