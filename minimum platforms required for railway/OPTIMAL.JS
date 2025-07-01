//striver for understanding
function findPlatform(arr, dep){
        let n = arr.length;
        arr = arr.sort((a,b)=>a-b);
        dep = dep.sort((a,b)=>a-b);
        let count  =0;
        let i = 0;
        let j = 0;
        while(i<n ){
            if(arr[i]>=dep[j]){
                i++;
                j++;
            }
            else {
                count++;
                i++;
            }
        }
        return count;
    }
