//space - O(1)
var majorityElement = function(nums) {
    let n = nums.length;
    let candidate =nums[0];
    let count=1;
    for(let i=1;i<nums.length;i++){
        if(count==0){
            candidate = nums[i];
            count=1;
        }
        else if(candidate!==nums[i]){
            count--;
        }
        else{
            count++;
        };
    }
    let final=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==candidate){
            final++;
        }
    }
    if(final>(n/2)){
        return candidate;
    }
    else {
        return -1;
    }
};