//time - O(n) , space- O(n)
var majorityElement = function(nums) {
    let n = nums.length;
    let map = new Map();
    for(let i=0;i<n;i++){
      map.set(nums[i] , (map.get(nums[i])||0) + 1 );
    }
    let result = [];
    for(let [key,val] of map){
      if(val>Math.floor(n/3)){
          result.push(key);
      }
      
    }
    return result;
  };