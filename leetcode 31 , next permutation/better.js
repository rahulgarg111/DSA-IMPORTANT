//brute force - generate all possible permutations in increasing order lexographically and check. -> exponential time

/**
 watch striver video for intuition , this is better as we do sorting in end which makes time - O(nlogn) , space - O(n) - VERY DUMB SOLUTION
 */
var nextPermutation = function(nums) {
    let k= -1;
    out:
    for(let i=nums.length-2 ; i>=0;i--){
        if(nums[i]<nums[i+1]){
            let x = i+1;
            for(let j=nums.length-1;j>i;j--){
                if(nums[j]>nums[i]){
                     [nums[j],nums[i]]=[nums[i],nums[j]];
                     k=i;
break out;
                }
            }
        }
    }
//sort from k+1
let sortedPart = nums.slice(k+1).sort((a,b)=>a-b);
nums.splice(k+1,nums.length-k+1,...sortedPart);

};