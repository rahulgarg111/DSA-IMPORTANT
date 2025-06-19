function solve(arr){
  let n = arr.length;
  let k = n+1;
  for(let i=0;i<n;i++){
    let origVal = (arr[i])%(k);
    
    arr[origVal-1] += (k);
  }
  const freqencies = [];
  for(let i=0;i<n;i++){
    let orig = (arr[i])%(k);
    freqencies.push(Math.floor((arr[i]-orig)/(k)));
    
  }
  console.log(freqencies);
}
let arr = [2,3,3,5,3];
solve(arr);
//OUTPUT - [ 0, 1, 3, 0, 1 ], where ith index is freq of 
// (i+1)th number , ie at index 0 we have freq of 0+1 = 1, 
//at index 2 in output we have freq of number 3 and so on.