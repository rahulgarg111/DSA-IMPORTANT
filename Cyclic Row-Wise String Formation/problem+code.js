// You are given a matrix of characters. The matrix has N rows and M columns. Given a string,
//  you have to tell if it is possible to generate that string from the matrix.
// Rules for generating string from matrix are:
// 1. You have to pick the first character of the string from row 1, the second character from 
// row 2 and so on. The (N+1)th character of the string is to be picked from row 1, that is, 
// you can traverse the rows in a cyclic manner (row 1 comes after row N).
// 2. If an occurrence of a character is picked from a row, you cannot pick the same occurrence 
// again from that row.
// If a given string can be generated from the matrix using the given rules, else print No.

function stringFromMatrix(str,matrix){
    let visited = [];
        for(let i=0;i<matrix.length;i++){
            for (let j=0;j<matrix[0].length;j++){
                visited[i][j]=false;
            }
        }
        let i=0;
        while(i<str.length){
            let flag = false;
              for (let j =0;j<matrix[0].length;j++){
                if(str[i]==matrix[i%matrix.length][j] && !visited[i%matrix.length][j]){
                    visited[i%matrix.length][j]=true;
                    flag = true;
                    i++;
                    break;
                }
              }
              if(!flag){
                return "No";
              }
        }
        return "Yes";
        }
    
    