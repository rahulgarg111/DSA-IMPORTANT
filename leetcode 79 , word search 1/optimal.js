/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let n = board.length; //rows
    let m = board[0].length; //columns

    function backtrack(wordidx, rowidx, colidx) {
        //base cases 
        if (wordidx === word.length) return true;
        if (rowidx >= n || rowidx < 0 || colidx >= m || colidx < 0 || board[rowidx][colidx] !== word[wordidx]) return false;

        //commented below line as board[rowidx][colidx] !== word[wordidx] already takes care of it.
        //if (board[rowidx][colidx] === '') return false;//empty means visited

        //copying current cell char to restore it later
        let temp = board[rowidx][colidx];
        board[rowidx][colidx] = ''; //marking current cell as visited
        //recursive calls for all 4 directions
        let ass = backtrack(wordidx + 1, rowidx + 1, colidx) || backtrack(wordidx + 1, rowidx - 1, colidx) || backtrack(wordidx + 1, rowidx, colidx + 1) || backtrack(wordidx + 1, rowidx, colidx - 1);
        //backtrack -
        board[rowidx][colidx] = temp;
        //return true or false;
        return ass;

    }
    //getting cell of first char
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === word[0]) {
                let ans = backtrack(0, i, j);
                if (ans) return ans;
            }
        }
    }
    return false;
};