/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    //sort to group and skip duplicates 
nums = nums.sort((a,b)=>a-b);
    let map = new Map();
    let sub = [];
    function backtrack(index){
        if(index>=nums.length){
            //join using , so that multiple digit numbers and negative numbers are handled correctly
            let key = sub.join(',');
            if(!map.get(key)){
                map.set(key,[...sub]);
            }
            return;
        }
         sub.push(nums[index]);
         backtrack(index+1);
         sub.pop();
         backtrack(index+1);
    }
backtrack(0);
let res = [];
for(let [key,val] of map){
    res.push(val);
}
    return res;
};