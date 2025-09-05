/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;

    //we know if size of array is n then maximum possible smallest positive number missing 
    //could be n , so we know answer lies in the range of [1 -> n].

    //so - NAIVE APPROACH 1 - O(n^2)time , O(1)space - 
    /* -> check for every number in range 1 to n , and see if they are present in nums or not
    the first number which isnt is the answer(smallest possible)
    
    NAIVE APPROACH 2 - O(n)time , O(n)space - 
    we make a frequency map for every number in range 1-n , and then iterate in the map to see 
    the smallest missing 

    OPTIMAL APPROACH - O(n)TIME , O(1)space
    orignal array markup technique -> we were relying on hashmap to for key value pairs but as 
    the numbers in question are 1-n which also happen to be the indexes of the array , we use array
    indexes itself to mark these numbers (see code , THIS IS A COMMON TECHNIQUE)
    
    */

    for(let i=0;i<n;i++){
        let originalVal = Math.trunc(nums[i]);
        if(originalVal>0 && originalVal<=n){
            if(Math.ceil(nums[originalVal-1])=== nums[originalVal-1] ){
                nums[originalVal-1] += 0.1;
            }
        }
    }
    for(let i=0;i<n;i++){
        if(nums[i]===Math.ceil(nums[i]))return i+1;
    }
    return n+1;
};