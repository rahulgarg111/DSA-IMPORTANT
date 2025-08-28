//TIME - O(N) , SPACE- O(N)
//THIS SOLUTION IS IMPORTANT AS WELL
var numberOfSubarrays = function(nums, k) {
    let n = nums.length;
    let map = new Map();
    map.set(0,1);
    let sum=0;
    let count =0;
    for(let i=0;i<n;i++){
        if(nums[i]%2!==0){
            sum+=1;
        }
        else {//nums[i]%2===0
            sum+=0;
        }
        count+= (map.get(sum-k)||0);
        map.set(sum , (map.get(sum)||0)+1);
    }
    return count;
};
//OBVIOUSLY MORE NAIVE WOULD BE TO MAKE ALL SUBARRAYS AND COUNT , TIME-O(N^2), SPACE-O(1)