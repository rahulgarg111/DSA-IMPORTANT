/**
 (the pointers i and j ask , what is the length of the longest common substring considering both
  i and j , therefore if they dont match we reset and put temp[j] as 0 (as we dont have the 
  option to omit characters like we did in subsequence)
2) we maintain a maxlength as the longest substring can end at any i and j indexes
 */
class Solution {
    longestCommonSubstr(s1, s2) {
        let n = s1.length;
        let m = s2.length;
        let maxLength = 0;
        if(m<n)return longestCommonSubstr(s2,s1);
        let dp = new Array(n);
        for(let i=0;i<n;i++){
          if(s1[i]===s2[0]){
            dp[i]=1;
            maxLength = 1;
          }
          else {
            dp[i]=0;
          }
        }
        for(let i=1;i<m;i++){
          let temp = new Array(n);
          if(s2[i]===s1[0]){
            temp[0] = 1;
            maxLength = 1;
          }
          else{
            temp[0]=0;
          }
          for(let j=1;j<n;j++){
            if(s1[j]!==s2[i]){
              temp[j]=0;
            }
            else {
              temp[j] = 1 + dp[j-1];
              maxLength = Math.max(maxLength , temp[j]);
            }
          }
          dp = temp;
        }
        return maxLength;
    }
}