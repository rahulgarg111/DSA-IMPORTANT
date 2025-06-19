/**
watch striver for intuition if u cant figure it out (give it a try atleast) , time - O(n) , space - O(1)
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
//dont need to sort just reverse
let i=k+1;
let j=nums.length-1
while(i<j){
    [nums[i],nums[j]]=[nums[j],nums[i]]
    i++;
    j--
}

};