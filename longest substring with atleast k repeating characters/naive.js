//time - O(n^2) , space - O(n)
var longestSubstring = function(s, k) {
    let n = s.length;
    let max =0;
    for(let i=0;i<n;i++){
       for(let j =i;j<n;j++){
            let substring = s.slice(i,j+1);
            let charCount = {};
            for(let k=0;k<substring.length;k++){
                let char = substring[k];
                charCount[char]= (charCount[char]||0) + 1;
            }
            let valid = true;
            for(let char in charCount){
                if(charCount[char]<k){
                    valid = false;
                    break;
                }
            }
            if(valid){
                max = Math.max(max , substring.length);
            }
        }
    }
    return max;
};