/*
OBSERVATION - MOST IMP -
in matrix ques look how indices change , here we see we can first 
transpose the matrix(swap along the main/1st/left diagonal) then
reverse the elements and we are done(note that here matrix is square)
*/
function transpose(matrix){
    for(let i=0;i<matrix.length-1;i++){
        for(let j=i+1;j<matrix.length;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
        }
    }
    return matrix;
}
function reverseMatrix(matrix){
    for(let i=0;i<matrix.length;i++){
        matrix[i].reverse();
    }
    return matrix;
}

var rotate = function(matrix) {
    let a = transpose(matrix);
    return reverseMatrix(a);
};