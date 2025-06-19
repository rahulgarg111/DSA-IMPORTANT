//approach , we know we need to check all substrings else we cant find the maximum one , 
//but we can check palindrome substring while creating it , making 
//Time - O(N^2).
/Expand Around Center technique./

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    if(n<=1)return s;
    let max = 0;
    let ans = "" ;
    function expandAround(left , right){
    while( (left>=0&&right<=n-1) && (s[left]==s[right])  ){
        if(right-left+1>max){
            max = right-left+1;
            ans = s.slice(left , right+1);
        }
        left--;
        right++;
    }
 }
    for(let i=0;i<n;i++){
        expandAround(i,i);
        expandAround(i,i+1);
        }
        
    return ans;
    

};