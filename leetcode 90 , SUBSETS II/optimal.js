/**
 PROBLEM WITH NAIVE-
 we are creating all subsets even duplicates and then returning by not including duplicates.
 in optimal we try not to make duplicate subsets at all.
 */
var subsetsWithDup = function(nums) {
    // Sort first to group duplicates together
    nums.sort((a, b) => a - b);
    
    let res = [];
    let sub = [];
    
    function backtrack(index) {
        // Add current subset (make a copy)
        res.push([...sub]);
        
        for (let i = index; i < nums.length; i++) {
            // Skip duplicates at the same recursion level 
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }
            
            sub.push(nums[i]);
            backtrack(i + 1);
            sub.pop();
        }
    }
    
    backtrack(0);
    return res;
};