//NAIVE , TIME - O(N^3) , EXTRA SPACE - O(k).
var threeSum = function(nums) {
    let n = nums.length;
    nums = nums.sort((a,b)=>a-b);
    let myMap = new Map();
    for(let i=0;i<n-2;i++){
        for(let j=i+1;j<n-1;j++){
           for(let k=j+1;k<n;k++){
            if(nums[i]+nums[j]+nums[k]==0){
              let key = [nums[i],nums[j],nums[k]].join(',');
              if(!myMap.get(key)){
                myMap.set(key , true);
              }
            }
           }
        }
    }
       let result  = [];
       for(let [key,val] of myMap){
        result.push(key.split(',').map(Number));
       } 
       return result;
    

};