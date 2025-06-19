/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//IMP APPROACH , REDO OR ATLEAST SEE THE APPROACH
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let res = [];
   let top = -1
   let right = n
   let bottom = m;
   let left = -1;
   let curr = 't'
   while(top<bottom-1 && left<right-1){
    if(curr==='t'){
    for(let j=left+1 ;j<right;j++){
        res.push(matrix[top+1][j]);
    }
    curr = 'r';
    top++;
    }
    else if(curr==='r'){
        for(let i=top+1;i<bottom;i++){
            res.push(matrix[i][right-1]);
        }
        curr='b';
        right--;
    }
    else if(curr==='b'){
        for(let j=right-1;j>left;j--){
            res.push(matrix[bottom-1][j]);
        }
        curr='l';
        bottom--;
    }
    else {
        for(let i=bottom-1;i>top;i--){
            res.push(matrix[i][left+1]);
        }
        curr='t';
        left++;
    }
   }
   return res;
};