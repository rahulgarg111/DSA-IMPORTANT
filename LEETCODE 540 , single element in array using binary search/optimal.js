//important tricks -
/*
1) taking low = 1 and high = n-1 in while loop to avoid going out of bounds when we try
checking left of 0 or right of n-1 
2) IMP - observing that couples(pair of same numbers) have index as even odd if they are left of
single element and odd even if they are right to it(makes sense if u think about it) - 
THIS helps us eliminate one half each time.
*/
var singleNonDuplicate = function(nums) {
    let n = nums.length
    
    //base cases and edge conditions to reduce complexity later in while loop
    if(n==1)return nums[0]
    if(nums[0]!==nums[1])return nums[0]
    if(nums[n-1]!==nums[n-2])return nums[n-1]

    let low=1
    let high=n-2
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        
        if(nums[mid]!==nums[mid-1] && nums[mid]!==nums[mid+1])return nums[mid]
        
        if(nums[mid]==nums[mid-1]){
       if(mid%2!==0){
        low=mid+1
       }
       else{
        high = mid-2
       }
        }
        else {
            if(mid%2!==0){
                high = mid-1
            }
            else {
                low=mid+2
            }
        }
    }
};







