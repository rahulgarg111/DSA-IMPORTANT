/**
 * @param {string} s
 * @return {string[][]}
 */
//JUST DRY RUN TO UNDERSTAND
function isPalindrome(s) {
    let n = s.length;
    if (n == 0 || n == 1) return true;
    let i = 0;
    let j = n - 1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}
var partition = function (s) {
    let n = s.length;
    let res = [];
    let sub = [];
    function backtrack(start) {
        //base case
        if (start === s.length) {
            res.push([...sub]);
            return;
        }
        for (let i = start; i < n; i++) {
            if (isPalindrome(s.slice(start, i + 1))) {
                sub.push(s.slice(start, i + 1));
                backtrack(i + 1);
                sub.pop();
            }
        }
    }
    backtrack(0);
    return res;
};