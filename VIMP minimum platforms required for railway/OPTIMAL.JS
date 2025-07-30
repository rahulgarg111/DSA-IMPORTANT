/*
consider an arrival as an event when we need to create a platform so we increase count
by 1 (count initially zero as no trains have come or left the station) and a train 
departure is like reducing a platform thus we decrease the count , and we decide when to 
increase or decrease count as per which event (either arrival or departure) occurs next,
thus we compare times of next arrival and departure , we maintain a max value of count
which hels us know how many platforms we required at peak load on station which is the 
answer we return.
SOLUTION IS OPTIMAL
*/
class Solution {
    findPlatform(arr, dep) {
       let n = arr.length;
        arr = arr.sort((a,b)=>a-b);
        dep = dep.sort((a,b)=>a-b);
        let count  =0;
        let i = 0;
        let j = 0;
        let max = 0;
        while(i<n ){
            if(arr[i]<=dep[j]){
                count++;
                i++;
                max = Math.max(max,count);
            }
            else {
                count--;
                j++;
            }
       }
        return max;
    }
}