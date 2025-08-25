//time - O(n)
//space - O(1)

class Solution {
    celebrity(mat) {
        let n = mat.length;
        let can = 0;
        let i=0;
       while(i<n){
        if(i!==can&&mat[can][i]===1){
            can = i;
        }
        i++;
       }
        //now check if can is known to everyone else and they know no one or not, if so then 
        //present so return -1 can is celeb else no celeb
        for(let i=0;i<n;i++){
            if(i!==can && mat[i][can]===0)return -1;
        }
        for(let i=0;i<n;i++){
            if(i!==can && mat[can][i]===1)return -1;
        }
        return can;
    }
}