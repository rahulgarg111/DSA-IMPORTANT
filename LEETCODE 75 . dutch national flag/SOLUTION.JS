//time - O(n) , space - O(1)
var sortColors = function(nums) {
  let n = nums.length;
  let i = -1;
  let j = 0;
  let k =n-1;
  while(j<=k){
      if(nums[j]===0){
          let temp = nums[i+1];
          nums[i+1]=nums[j];//0
          i++;
          nums[j]=temp;
          j++;
      }
      else if(nums[j]===1){
          j++;
      }
      else { //nums[j]===2
        let temp = nums[k];
        nums[k]=nums[j];//2
        k--;
        nums[j]=temp;
      }
  }
  return nums;
};

//solution 2, time - O(2n) , space - O(1)
function sortMedals(n,winners) {
    let count = [0,0,0];
    for (let i=0;i<n;i++){
      count[winners[i]]++;
    }
    let i=0;
    while(i<count[0]){
      winners[i]=0;
      i++;
    }
    while(i<(count[1] + count[0])){
      winners[i]=1;
      i++;
    }
    while(i<n){
      winners[i]=2;
      i++;
    }
    console.log(winners.join(' '));
   }
