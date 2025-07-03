/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if(n===1){
        return [['Q']];
    }
    if(n===2||n===3){
        return [];
    }
    let res = [];
    let placedqueens = new Map();
    let leftdiagonals = new Map();
    let rightdiagonals = new Map();
    function isValidPosi(row,col){
        if(placedqueens.has(col)){
            return false;
        }
        if(leftdiagonals.has(row-col)){
            return false;
        }
        if(rightdiagonals.has(row+col)){
            return false;
        }
        return true;
    }
    let sub = [];
    //let str = '';
    function backtrack(row,str){
//base case-
if(row===n){
res.push([...sub]);
return;
}

for(let col = 0;col<n;col++){
    if(isValidPosi(row,col)){
        placedqueens.set(col,row);
        leftdiagonals.set(row-col,true);
        rightdiagonals.set(row+col,true);
          let i=0;
          while(i<n){
            if(i===col){
                str+='Q';
                i++;
            }
            else {
                str+='.';
                i++;
            }
          }
          sub.push(str);
        backtrack(row+1,'');
        placedqueens.delete(col);
        leftdiagonals.delete(row-col);
        rightdiagonals.delete(row+col);
        sub.pop();
        str='';
    }
}
    }
backtrack(0,'');
    return res;
};