//REDO AGAIN AND AGAIN TO MASTER LOGIC
var combinationSum2 = function (candidates, target) {
    candidates = candidates.sort((a,b)=>a-b);
    let n = candidates.length;
    let res = [];
    let sub = [];
    function backtrack(index, sum) {
        if (index === n || sum <= 0) {
            if (sum === 0) {
                res.push([...sub]);
            }
            return;
        }
for(let i=index;i<n;i++){
   if(i>index && candidates[i-1]===candidates[i]){
        continue;
    }
    sub.push(candidates[i]);
    backtrack(i+1,sum-candidates[i]);
    sub.pop();
     
}
    }
    backtrack(0, target);
    return res;
};