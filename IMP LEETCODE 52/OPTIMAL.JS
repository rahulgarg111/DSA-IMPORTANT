/**
 * @param {number} n
 * @return {number}
 */
//can see other submissions , but this is the best one
var totalNQueens = function (n) {
    if (n === 1) return 1;
    if (n === 2 || n === 3) return 0;
    let placedqueens = new Map();
    let leftdiagonalmap = new Map();
    let rightdiagonalmap = new Map();
    let totalways = 0;
    function isValidPosi(rowidx, col) {
        if (placedqueens.has(col)) {
            return false;
        }
        if (leftdiagonalmap.has(rowidx - col)) {
            return false;
        }
        if (rightdiagonalmap.has(rowidx + col)) {
            return false;
        }
        return true;
    }
    function backtrack(rowidx) {
        if (rowidx === n) {
            totalways++;
            return;
        }
        if (rowidx >= n) {
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValidPosi(rowidx, col)) {
                placedqueens.set(col, rowidx);
                leftdiagonalmap.set(rowidx - col, true);
                rightdiagonalmap.set(rowidx + col, true);
                backtrack(rowidx + 1);
                placedqueens.delete(col);
                leftdiagonalmap.delete(rowidx - col);
                rightdiagonalmap.delete(rowidx + col);

            }
        }
    }
    backtrack(0);
    return totalways;
};