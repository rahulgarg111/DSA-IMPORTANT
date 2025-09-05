/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = [];
    
    for(let i = 0; i < nums.length; i++){
        let val = Math.abs(nums[i]);
        
        // Check if the number at index (val-1) is already negative
        if(nums[val - 1] < 0){
            // Already negative means we've seen this value before - it's a duplicate!
            res.push(val);
        } else {
            // First time seeing this value - mark it as seen by making it negative
            nums[val - 1] = -nums[val - 1];
        }
    }
    
    return res;
}