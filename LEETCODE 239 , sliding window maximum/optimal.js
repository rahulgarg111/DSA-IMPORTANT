/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let n = nums.length;
    let ans = new Array(n-k+1).fill(0);
    let q = [nums[n-1]];
    for(let end=n-2 ;end>=n-k ; end--){
    while(q.length!==0 && nums[end]>q[q.length-1]){
        q.pop();
    }
    q.push(nums[end]);
    }
    ans[n-k]= q[0];
    let beg = n-1;
    
    for(end = n-k-1;end>=0;end--){
        if(q[0]==nums[beg]){
        q.shift();
    }
    beg--;
while(q.length!==0 && nums[end]>q[q.length-1]){
    q.pop();
}
q.push(nums[end]);
ans[end]=q[0];
    }
    return ans;
};