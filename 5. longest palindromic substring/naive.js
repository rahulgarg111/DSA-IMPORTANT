//approach - making all substrings (O(n^2) work) , then checking for each substring if its
//palindrome or not (O(n) work for each substring) . 
//TIME - O(N^3).

/**
 * @param {string} s
 * @return {string}
 */
function isPalindrome(s){
    if(s.length<=1){
        return true;
    }
    let reversed = s.split('').reverse().join('');
    return reversed===s;
 }
var longestPalindrome = function(s) {
    let n = s.length;
    if(n==0){
        return 0;
    }
    let max = 0;
    let ans='';
for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
let substring = s.slice(i,j);

if(isPalindrome(substring) && substring.length>max){
    max = substring.length;
    ans = substring;
}
    }
}
return ans;
};