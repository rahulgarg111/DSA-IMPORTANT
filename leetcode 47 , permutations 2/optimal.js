/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums = nums.sort((a,b)=>a-b);
    let n = nums.length;
let res = [];
let visited = new Array(n).fill(false);
    let sub = [];
    function backtrack(){
         if(sub.length===n){
            res.push([...sub])
            return;
         }
         for(let i=0;i<n;i++){
            if(visited[i]  )continue;
            if(i>0 && nums[i]===nums[i-1] && visited[i-1]){
                continue;
            }
            sub.push(nums[i]);
            visited[i]=true;
          backtrack();
          sub.pop();
          visited[i]=false;
         }
        
    }
backtrack();
    return res;
};  