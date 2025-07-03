/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//time - O(9^(n)),n is the number of empty cells , space - O(1)(as only 81 total cells)
var solveSudoku = function (board) {

    let n = board.length;
    let filledcols = new Map();
    let filledrows = new Map();
    let filledBoxes = new Map();

    for (let i = 0; i < 9; i++) {
        filledcols.set(i, new Set());
        filledrows.set(i, new Set());
        filledBoxes.set(i, new Set());
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] !== '.') {
                let num = board[r][c];// '5'
                let boxidx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                filledcols.get(c).add(num);
                filledrows.get(r).add(num);
                filledBoxes.get(boxidx).add(num);
            }
        }
    }


    function isValid(row, col, num) {
        if (filledcols.get(col).has(num)) {
            return false;
        }
        if (filledrows.get(row).has(num)) {
            return false;
        }
        if (filledBoxes.get(Math.floor(row / 3) * 3 + Math.floor(col / 3)).has(num)) {
            return false;
        }
        return true;
    }

    function backtrack() {

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] !== '.') {
                    continue;
                }
                else {
                    let boxindex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                    for (let num = 1; num <= 9; num++) {
                        num = num.toString();
                        if (isValid(r, c, num)) {
                            board[r][c] = num;
                            filledcols.get(c).add(num);
                            filledrows.get(r).add(num);
                            filledBoxes.get(boxindex).add(num);
                            if (backtrack()) return true;//with current r,c filled with num continue filling and see do we return true , if yes 
                            //return true else - 
                            //undo what i did and move on (backtrack)
                            board[r][c] = '.';
                            filledcols.get(c).delete(num);
                            filledrows.get(r).delete(num);
                            filledBoxes.get(boxindex).delete(num);
                        }
                    }
                    return false;//we never returned true for any num value , so no solution , from this so we must have placed
                    //something wrong before so we must return false and BACKTRACK
                }
            }
        }
        return true;
    }

    backtrack();
};