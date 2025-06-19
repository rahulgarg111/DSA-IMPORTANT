//https://claude.ai/chat/952924b8-8c47-4e36-aa80-1602a1628d26
//time - O(n) , space - O(1)
function solve(n,k,s){
    if(n==0|| k>n){
      return 0;
    }
    if(k<=1){
      return n;
    }
  let max  = 0;
  let maxUniqChars = new Set(s).size;

  for (let uniqChars = 1 ; uniqChars<=maxUniqChars ; uniqChars++){
    let start =0;
    let end =0;

    let charCount = {};  //imp
    let uniqueCount =0;  //imp
    let charAtLeastK = 0;//imp
    //1st increasing window size-
    while(end<n){
        let endChar = s[end];
        if(!charCount[endChar]){
            uniqueCount++;
        }
        charCount[endChar] = (charCount[endChar]||0) + 1;
        if(charCount[endChar]==k){
            charAtLeastK++;
        }
    
    //shrinking window-
    while( uniqueCount>uniqChars){
        let startChar = s[start];
        if(charCount[startChar]==k){
            charAtLeastK--;
        }
        charCount[startChar]--;
        if(!charCount[startChar]){
            delete charCount[startChar];
            uniqueCount--;
        }
        start++;
    }
    if(uniqueCount==uniqChars && uniqueCount==charAtLeastK){
        max = Math.max(max , end-start+1);
    }
    end++;
}
  }
  return max;
  }