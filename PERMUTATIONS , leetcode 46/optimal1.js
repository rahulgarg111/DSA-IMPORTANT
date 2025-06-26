//space is O(n) most optimal swapping takes 0 extra space
var permute = function(nums) {
    let n = nums.length;
let res = [];
let visited = new Array(n).fill(false);
    let sub = [];
    function backtrack(idx){
         if(sub.length===n){
            res.push([...sub])
            return;
         }
         for(let i=0;i<n;i++){
            if(visited[i])continue;
            sub.push(nums[i]);
            visited[i]=true;
          backtrack(i+1);
          sub.pop();
          visited[i]=false;
         }
     }
backtrack(0);
    return res;
};  