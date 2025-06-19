//space - O(n)
var majorityElement = function(nums) {
    let n = nums.length;
    let myMap = new Map();
    for(let i=0;i<n;i++){
        let key = nums[i];
        myMap.set(key , (myMap.get(key)||0) + 1 );
    }
    let max =0;
    let result=0;
    for(let [key,value] of myMap){
if(value>max){
    result = key;
    max = value;
}
    }
    return result;
};