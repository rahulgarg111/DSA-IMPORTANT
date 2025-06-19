//O(n) time and O(k) space , as at most 0->k-1 remainders are stored in hashmap
var subarraysDivByK = function(nums, k) {
    let count =0;
    let myMap = new Map();
    let sum=0;
    myMap.set(0,1);
    for (let i=0;i<nums.length;i++){
        sum+= nums[i];
        let remainder = sum%k;
        if(remainder<0){
            remainder += k;
        }
        count += (myMap.get(remainder) || 0);
        myMap.set(remainder , (myMap.get(remainder) || 0) + 1 );
    }
    return count;
};