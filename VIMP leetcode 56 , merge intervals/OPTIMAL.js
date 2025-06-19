//VERY IMPORTANT PROBLEM , IS USED FOR MANY OTHER PROBLEMS

var merge = function(intervals) {
    //sort based on start times
   intervals = intervals.sort((a,b)=>a[0]-b[0])
   let ans = [intervals[0]]
   for(let i=1;i<intervals.length;i++){
       if(intervals[i][0]>ans[ans.length-1][1]){
        ans.push(intervals[i])
       }
       else {
        ans[ans.length-1][1] = Math.max(ans[ans.length-1][1],intervals[i][1]) 
       }
   }
   return ans

};