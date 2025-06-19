/*
THINKING-
we are keeping a total+=gas[i]-cost[i] for each i, and whenever it is <0 we are skipping that point and moving forward, making total 0--->
It means we ran out of gas if we started at some point which was <= current pos of i, so now we have to find a new starting position,
which wall be > curr pos of i.
Now think, why will this new start lie ahead of curr pos i, not anywhere before it,  you could think, we started from point A------>B
(total till +ve)------->C(total<0), as per this algo we try to find start ahead of C, what if we started from B and skipped A instead, 
well that won't work, You moved from A--------> B with some positive value(or 0), or else you would have stopped right at B and made total to 0.
So add A improved our chances of having a positive total, so there is no point in looking for the new position start anywhere behind point C.
SIMILARLY WE DONT START SEARCH FROM CURRENT C ITSELF AS before C's gas - cost the diff was atleast 0(otherwise we wouldnt even reach C) 
so obviuosly C made it worse such that it became -ve
*/



//input arr - [[1,5],[10,3],[3,4]]
//GREEDY , TIME-O(N) , SPACE - O(1)
function solve(n,arr){
    let diff =0;
    for(let i=0;i<n;i++){
      diff += arr[i][0] - arr[i][1];
    }
    if(diff<0){
      console.log("No starting points");
      return;
    }
    diff=0;
    let result =0;
    for(let i=0;i<n;i++){
      diff += arr[i][0] - arr[i][1];
      if(diff<0){
        result = i+1;
        diff = 0;
      }
    }
    console.log(result);
  }

  //LEETCODE SOLUTION-
  // /**
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */
// var canCompleteCircuit = function(gas, cost) {
//     let n = gas.length;
//     let diff=0;
//    for(let i=0;i<n;i++){
//     diff+= gas[i]-cost[i];
//    } 
//    if(diff<0){
//     return -1;
//    }
//    diff=0;
//    let result = 0;
//    for(let i=0;i<n;i++){
//     diff += gas[i] - cost[i];
//     if(diff<0){
//         result = i+1;
//         diff = 0;//we reset our search for the start position , and start looking for
//         //new start position from next index ie i+1
//     }
//    }
   
//    return result;
   
// };








