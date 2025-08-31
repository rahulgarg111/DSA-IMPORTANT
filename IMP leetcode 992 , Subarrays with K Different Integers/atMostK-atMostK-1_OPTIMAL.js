/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//time - O(n)
//space - O(n)

//APPROACH - AT MOST K - AT MOST (K-1)
//explanation (striver) - https://www.youtube.com/watch?v=7wYGbV_LsX4&t=330s

function subarrayswithatmostKdistinctelements(nums,k){
  let n = nums.length;
  let map = new Map();
  let res = 0;
  let l = 0;
  
  for(let r=0;r<n;r++){
    map.set(nums[r] , (map.get(nums[r])||0) +1 );
    
    while(map.size>k){
      map.set(nums[l] , (map.get(nums[l])) -1 );
      if(map.get(nums[l])===0)map.delete(nums[l]);
      
      l++;
    }
    if(map.size<=k){
    res += r-l+1;
    }
  }
  return res;
}


var subarraysWithKDistinct = function(nums, k) {
    return subarrayswithatmostKdistinctelements(nums,k)-subarrayswithatmostKdistinctelements(nums,k-1);
};