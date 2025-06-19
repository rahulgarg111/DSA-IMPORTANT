//NAIVE , TIME - O(N^2)
// function solve(n,arr){
//   for(let i=0;i<n;i++){
//     let count =1;
//     let j =i;
//     let energy=0;
//     let flag = true;
//     while(count<=n){
//       energy += arr[j][0]-arr[j][1];
//       if(energy<0){
//         flag = false;
//         break ;
//       }
//       count++;
//       j= (j+1)%n;
//     }
//     if(flag == true){
//       console.log(i);
//       return;
//     }
//   }
//   console.log("No starting points");
// }