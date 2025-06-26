/*
TRICK -The optimal approach is to use a greedy method with powers of 2, but with careful attention to your coin budget.
Why Powers of 2?
Powers of 2 (1, 2, 4, 8, 16...) are ideal because:

They give you maximum flexibility to form any number
Each power of 2 represents a unique "bit" in binary representation
No smaller set of box sizes can cover all possible amounts as efficiently
*/
function solve(n){
    let count = 0;
    let sum = 0;
    let power = 1;
    while(sum+power<=n){
      count++;
      sum += power;
      power *= 2;
    }
    if(sum < n){
      count ++;
    }
    return count;
  }