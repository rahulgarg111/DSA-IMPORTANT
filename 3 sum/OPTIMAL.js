//time - O(n^2) , EXTRA space - O(1)
var threeSum = function(nums) {
    let n = nums.length;
   let result = [];
    nums = nums.sort((a,b)=>a-b);
    let flag = false;
    for(let i=0;i<n-2;i++){
        while(flag && i<n-2 && nums[i]==nums[i-1]){
            i++;
        }
        if(i==n-2)break;
        flag = false;
        let j=i+1;
        let k=n-1;
        while(j<k){
            let ans = [nums[i],nums[j],nums[k]];
            if(nums[i]+nums[j]+nums[k]==0 ){
                flag = true;
                result.push(ans);
                j++;
                while(j<k && nums[j]==nums[j-1] ){
                    j++;
                }
                k--;
                while(j<k && nums[k]==nums[k+1]){
                    k--;
                }
             
             
            }
            else if(nums[i]+nums[j]+nums[k]>0){
               k--;
            }
            else {
                j++;
            }
        }
    }
    
    
    return result;
};
