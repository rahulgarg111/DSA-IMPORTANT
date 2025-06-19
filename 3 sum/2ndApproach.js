//time O(n^2) , EXTRA space O(k)-hashmap(even though if i didnt use this still total space
//would be O(k) only because of result , but this hashmap is EXTRA space ie other than
//required output space , so without it we can say we use no extra space)
var threeSum = function(nums) {
    let n = nums.length;
    let map = new Map();
    nums = nums.sort((a,b)=>a-b);
    for(let i=0;i<n-2;i++){
        let j=i+1;
        let k=n-1;
        while(j<k){
            let key = [nums[i],nums[j],nums[k]].join(',');
            if(nums[i]+nums[j]+nums[k]==0 && !map.get(key)){
             map.set(key , true);
             j++;
             k--
            }
            else if(nums[i]+nums[j]+nums[k]>0){
               k--;
            }
            else {
                j++;
            }
        }
    }
    let result = [];
    for(let [key,val] of map){
        result.push(key.split(',').map(Number));
    }
    return result;
};
