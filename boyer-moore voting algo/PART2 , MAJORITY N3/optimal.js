/**
 OBSERVATION- only 2 elements at max can appear >n/3 times , so apply
  boyer-moore for 2 candidates instead of just 1
  time - O(n) , space-O(1)
 */
 var majorityElement = function(nums) {
    let n = nums.length;
    let can1=null;
    let can2=null;
    let c1=0;
    let c2=0;
    for(let i=0;i<n;i++){
        if(nums[i]===can1){
            c1++;
        }
        else if(nums[i]===can2){
            c2++;
        }
        else if(c1===0){
            can1=nums[i];
            c1++;
        }
        else if(c2===0){
            can2=nums[i];
            c2++;
        }
        else {
            c1--;
            c2--;
        }

    }
    c1=0;
    c2=0;
    for(let i=0;i<n;i++){
if(nums[i]===can1){
    c1++;
}
else if(nums[i]===can2){
    c2++;
}

    }
    let ans =[];
    if(c1>n/3){
        ans.push(can1);
    }
    if(c2>n/3){
        ans.push(can2);
    }
    return ans;
};